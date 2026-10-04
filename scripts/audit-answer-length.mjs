// Guards against the answer-length tell: a bank where the correct option is
// reliably the longest one can be scored without reading the question.
//
// Two measurement mistakes are worth recording, because both read as "fine":
//
//  1. Averaging over all questions. Banks whose options are numbers or
//     one-word labels cannot leak anything through length, and they dilute the
//     figure badly. Only questions whose longest option reaches PROSE_MIN
//     characters are counted here.
//  2. Asking "is the key the longest option". A bank where the key is always
//     SECOND longest is just as gameable: the candidate picks between the two
//     longest and has halved the field without reading a word. What has to
//     look like chance is the key's length RANK among its own options, so rank
//     is what this measures.
//
// Banks that are already skewed are listed in answer-length-baseline.json with
// the share measured when they were recorded. A listed bank may not get worse,
// and once it comes down to chance the script requires the entry to be removed,
// so the list can only shrink.
import fs from 'node:fs';
import path from 'node:path';
import ts from 'typescript';

const PROSE_MIN = 25;
const MIN_QUESTIONS = 12;
const banksDir = path.join(process.cwd(), 'src', 'lib', 'question-banks');
const baselinePath = path.join(process.cwd(), 'scripts', 'answer-length-baseline.json');

function loadBank(filePath) {
  const code = ts.transpileModule(fs.readFileSync(filePath, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const runtimeModule = { exports: {} };
  // Bank files import only the Question type, which transpiles away; anything
  // else would be a structural change the bank audit catches first.
  new Function('exports', 'module', 'require', code)(runtimeModule.exports, runtimeModule, () => ({}));
  return Object.values(runtimeModule.exports).find(
    (value) => Array.isArray(value) && value.length && value[0] && Array.isArray(value[0].options),
  );
}

function measure(questions) {
  const ranks = [0, 0, 0, 0];
  let prose = 0;
  let width = 4;
  for (const question of questions) {
    if (!Array.isArray(question.options) || question.options.length < 2) continue;
    if (question.answerType && question.answerType !== 'mcq') continue;
    const lengths = question.options.map((option) => String(option).length);
    if (Math.max(...lengths) < PROSE_MIN) continue;
    width = Math.max(width, lengths.length);
    const sorted = [...lengths].sort((a, b) => b - a);
    ranks[Math.min(sorted.indexOf(lengths[question.correctIndex]), 3)] += 1;
    prose += 1;
  }
  return { ranks, prose, width };
}

const failures = [];
const resolved = [];
const rows = [];
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
  const { ranks, prose, width } = measure(questions);
  if (prose < MIN_QUESTIONS) continue;
  // Chance share for the top half. The fourth bucket absorbs ranks 4 and up,
  // so a five-option bank sits at 2/5 rather than 1/2.
  const chance = Math.min(2, Math.floor(width / 2)) / width;
  const topHalf = (ranks[0] + ranks[1]) / prose;
  // Three standard errors, floored so that a 12-question bank is not failed
  // for a swing that a fair coin would produce often.
  const slack = Math.max(0.12, 3 * Math.sqrt((chance * (1 - chance)) / prose));
  const limit = chance + slack;
  rows.push({ file, ranks, prose, width, topHalf });
  seen.add(file);
  const recorded = baseline[file];
  if (topHalf <= limit) {
    if (recorded !== undefined) {
      resolved.push(`${file}: now at ${(100 * topHalf).toFixed(0)}% against a limit of ${(100 * limit).toFixed(0)}% — remove its baseline entry`);
    }
    continue;
  }
  if (recorded === undefined) {
    failures.push(
      `${file}: the correct answer is in the longer half of its options ${(100 * topHalf).toFixed(0)}% of the time `
      + `across ${prose} prose questions (ranks ${ranks.join('/')}, chance ${(100 * chance).toFixed(0)}%, limit ${(100 * limit).toFixed(0)}%). `
      + 'Lengthen distractors with real, wrong detail rather than trimming the key.',
    );
  } else if (topHalf > recorded + 0.005) {
    failures.push(
      `${file}: answer-length skew got worse, ${(100 * recorded).toFixed(0)}% at baseline to ${(100 * topHalf).toFixed(0)}% now `
      + `(ranks ${ranks.join('/')}). Baselined banks may improve but not regress.`,
    );
  }
}

for (const file of Object.keys(baseline)) {
  if (!seen.has(file)) failures.push(`${file}: has a baseline entry but is no longer measured — remove the entry`);
}

const outstanding = rows.filter((row) => baseline[row.file] !== undefined);
if (failures.length) {
  console.error('Answer-length audit failed:\n');
  for (const failure of failures) console.error(`  - ${failure}`);
  console.error(`\n${failures.length} problem(s).`);
  process.exit(1);
}
const total = rows.reduce((sum, row) => sum + row.prose, 0);
const skewed = outstanding.reduce((sum, row) => sum + row.prose, 0);
console.log(
  `Answer-length audit passed: ${rows.length} banks measured, ${total} prose questions. `
  + `${outstanding.length} bank(s) carrying ${skewed} question(s) are still on the baseline and may only improve.`,
);
if (resolved.length) {
  console.error('\nBanks that no longer need a baseline entry:\n');
  for (const row of resolved) console.error(`  - ${row}`);
  process.exit(1);
}
