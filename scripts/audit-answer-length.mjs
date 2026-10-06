// Guards against the answer-length tell: a bank where the correct option is
// reliably the longest can be scored without reading the question.
//
// Three measurement mistakes are recorded here, because each one reads as
// "fine" while the defect is still there:
//
//  1. Averaging over all questions. Banks whose options are numbers or
//     one-word labels cannot leak anything through length and they dilute the
//     figure badly, so only questions whose longest option reaches PROSE_MIN
//     characters are counted.
//  2. Asking "is the key the longest option". A bank where the key is always
//     SECOND longest is just as gameable: the candidate picks between the two
//     longest and has halved the field without reading a word.
//  3. Counting the key's length rank. Rank treats a two-character win as a
//     full tell -- an FMGE question running 26/25/28/21 scores as "key is
//     longest" though no one can see that gap -- and it also passes a bank
//     whose key was merely nudged a few characters below the top while
//     staying in the longest-looking cluster.
//
// So what is measured is the advantage the heuristic actually confers. Options
// within a tolerance of the longest are indistinguishable by eye and form a
// set of leaders; a candidate who picks the longest guesses among them, scoring
// 1/leaders when the key is in that set and nothing when it is not.
//
// The comparison is against each bank's own control: the same options with the
// key reassigned by a seeded shuffle, so length carries no information. A bank
// whose options vary in length for innocent reasons has a high control, and is
// not charged for it.
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const PROSE_MIN = 25;
const MIN_QUESTIONS = 12;
const CONTROL_RUNS = 200;
const banksDir = path.join(process.cwd(), 'src', 'lib', 'question-banks');
const baselinePath = path.join(process.cwd(), 'scripts', 'answer-length-baseline.json');

const tolerance = (max) => Math.max(6, 0.15 * max);

function loadBank(filePath) {
  const code = ts.transpileModule(fs.readFileSync(filePath, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const runtimeModule = { exports: {} };
  new Function('exports', 'module', 'require', code)(runtimeModule.exports, runtimeModule, () => ({}));
  return Object.values(runtimeModule.exports).find(
    (value) => Array.isArray(value) && value.length && value[0] && Array.isArray(value[0].options),
  );
}

// Deterministic generator, so the control and therefore the gate is reproducible.
function makeRandom(seed) {
  let state = seed >>> 0;
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 4294967296;
  };
}

function prose(questions) {
  const rows = [];
  let width = 4;
  for (const question of questions) {
    if (!Array.isArray(question.options) || question.options.length < 2) continue;
    if (question.answerType && question.answerType !== 'mcq') continue;
    const lengths = question.options.map((option) => String(option).length);
    const max = Math.max(...lengths);
    if (max < PROSE_MIN) continue;
    width = Math.max(width, lengths.length);
    const cut = max - tolerance(max);
    rows.push({ lengths, cut, leaders: lengths.filter((l) => l >= cut).length, key: question.correctIndex });
  }
  return { rows, width };
}

const score = (rows, keyOf) => rows.reduce(
  (sum, row) => sum + (row.lengths[keyOf(row)] >= row.cut ? 1 / row.leaders : 0), 0,
) / rows.length;

// `--write-baseline` records the current measurement for every failing bank.
// It is how the list is seeded and re-seeded, never a way to clear a failure:
// a bank that regresses has to be fixed, not re-recorded.
const writeBaseline = process.argv.includes('--write-baseline');
const failures = [];
const resolved = [];
const measured = [];
const baseline = JSON.parse(fs.readFileSync(baselinePath, 'utf8'));
const seen = new Set();

for (const file of fs.readdirSync(banksDir).filter((name) => name.endsWith('.ts')).sort()) {
  let questions;
  try {
    questions = loadBank(path.join(banksDir, file));
  } catch (error) {
    failures.push(`${file}: could not be loaded for measurement (${error.message})`);
    continue;
  }
  if (!questions) {
    failures.push(`${file}: no question array found, so nothing was measured`);
    continue;
  }
  const { rows, width } = prose(questions);
  if (rows.length < MIN_QUESTIONS) continue;
  const actual = score(rows, (row) => row.key);
  const random = makeRandom(1_234_567);
  const controls = [];
  for (let run = 0; run < CONTROL_RUNS; run += 1) {
    controls.push(score(rows, (row) => Math.floor(random() * row.lengths.length)));
  }
  const control = controls.reduce((sum, value) => sum + value, 0) / controls.length;
  // The slack comes from how much the shuffled score actually moves for this
  // bank, not from a formula. Treating the per-question score as Bernoulli
  // overstates its variance -- the score is a mix of 0, 1/4, 1/3, 1/2 and 1,
  // not a coin flip -- and at thirteen questions that put the limit at 61%,
  // wide enough to pass a bank where the heuristic scored 60% against a
  // control of 25%. Measured, the spread at that size is about nine points,
  // so three of them is twenty-seven and such a bank fails as it should.
  const spread = Math.sqrt(
    controls.reduce((sum, value) => sum + (value - control) ** 2, 0) / controls.length,
  );
  const slack = Math.max(0.05, 3 * spread);
  const limit = control + slack;
  measured.push({ file, n: rows.length, actual, control, width });
  seen.add(file);
  const recorded = baseline[file];
  // The check is two-sided. A bank where the key is never the longest option
  // carries the same tell inverted: "eliminate the longest" turns four options
  // into three. Over-correcting a bank is therefore a failure, not a pass.
  const floor = control - slack;
  const report = `picking the longest option scores ${(100 * actual).toFixed(0)}% across ${rows.length} prose `
    + `questions, against ${(100 * control).toFixed(0)}% when the key is shuffled `
    + `(allowed ${(100 * floor).toFixed(0)}% to ${(100 * limit).toFixed(0)}%)`;
  if (actual >= floor && actual <= limit) {
    if (recorded !== undefined) {
      resolved.push(`${file}: ${report} — remove its baseline entry`);
    }
    continue;
  }
  if (writeBaseline) { baseline[file] = Math.round(actual * 10000) / 10000; continue; }
  if (actual < floor) {
    failures.push(
      `${file}: ${report}. The key is too rarely the longest option, which is the same tell inverted: `
      + 'a candidate who eliminates the longest option turns four choices into three. Let the key be the '
      + 'longest in a fair share of questions.',
    );
  } else if (recorded === undefined) {
    failures.push(
      `${file}: ${report}. Give the key a length clearly below the longest option in more questions, `
      + 'by making thin distractors fully specified rather than by trimming the key.',
    );
  } else if (actual > recorded + 0.005) {
    failures.push(
      `${file}: answer-length edge got worse, ${(100 * recorded).toFixed(0)}% at baseline to `
      + `${(100 * actual).toFixed(0)}% now. Baselined banks may improve but not regress.`,
    );
  }
}

if (writeBaseline) {
  for (const file of Object.keys(baseline)) if (!seen.has(file)) delete baseline[file];
  const sorted = Object.fromEntries(Object.keys(baseline).sort().map((key) => [key, baseline[key]]));
  fs.writeFileSync(baselinePath, `${JSON.stringify(sorted, null, 2)}\n`);
  const carried = measured.filter((row) => sorted[row.file] !== undefined);
  console.log(`Baseline written: ${carried.length} bank(s), ${carried.reduce((sum, row) => sum + row.n, 0)} question(s).`);
  process.exit(0);
}

for (const file of Object.keys(baseline)) {
  if (!seen.has(file)) failures.push(`${file}: has a baseline entry but is no longer measured — remove the entry`);
}

if (failures.length) {
  console.error('Answer-length audit failed:\n');
  for (const failure of failures) console.error(`  - ${failure}`);
  console.error(`\n${failures.length} problem(s).`);
  process.exit(1);
}
const outstanding = measured.filter((row) => baseline[row.file] !== undefined);
const total = measured.reduce((sum, row) => sum + row.n, 0);
const carried = outstanding.reduce((sum, row) => sum + row.n, 0);
console.log(
  `Answer-length audit passed: ${measured.length} banks measured, ${total} prose questions. `
  + `${outstanding.length} bank(s) carrying ${carried} question(s) are still on the baseline and may only improve.`,
);
if (resolved.length) {
  console.error('\nBanks that no longer need a baseline entry:\n');
  for (const row of resolved) console.error(`  - ${row}`);
  process.exit(1);
}
