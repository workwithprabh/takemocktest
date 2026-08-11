// Generates TAKEMOCKTEST_COLLISION_REFERENCE.{json,md} from the live question-bank
// corpus. Run after any integration that adds or changes question banks:
//   node scripts/generate-collision-reference.mjs
//
// Purpose: ChatGPT cannot see the live repository, so it cannot reliably avoid
// reusing a generic stem, fact, or topic another exam's bank already covers.
// This script gives a compact, non-reproducing summary (topic saturation +
// known risky generic-template stems + cross-exam shared question-openings)
// that can be attached to a Writer prompt for an overlapping subject.
// It intentionally does NOT dump full question text for the whole corpus —
// exact-duplicate detection is `npm run qa:questions`'s job at integration time.

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

const banksDir = path.join(process.cwd(), 'src', 'lib', 'question-banks');
const files = fs.readdirSync(banksDir).filter((file) => file.endsWith('.ts')).sort();

const banks = files.map((file) => {
  const source = fs.readFileSync(path.join(banksDir, file), 'utf8');
  const code = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const runtimeModule = { exports: {} };
  vm.runInNewContext(code, { module: runtimeModule, exports: runtimeModule.exports }, { filename: file });
  const questions = Object.values(runtimeModule.exports).find(Array.isArray) ?? [];
  // exam slug = filename up to the first section/stage-name segment, approximated
  // as everything before the trailing "-<word>-<number>.ts" bank suffix is too
  // fragile across naming conventions, so use the whole filename minus extension
  // as the bank id and let the caller group by exam prefix themselves.
  return { file: file.replace(/\.ts$/, ''), questions };
});

const norm = (text) => text.toLowerCase().replace(/[^a-z0-9\s]/g, ' ').replace(/\s+/g, ' ').trim();
const examOf = (bankId) => bankId.split('-').slice(0, 2).join('-'); // coarse; good enough for grouping in a reference doc

// 1. Topic saturation: (section, topic) -> which exams already have questions there
const topicMap = new Map();
for (const { file, questions } of banks) {
  for (const q of questions) {
    if (!q.section || !q.topic) continue;
    const key = `${q.section.toLowerCase()}|||${q.topic.toLowerCase()}`;
    if (!topicMap.has(key)) topicMap.set(key, { section: q.section, topic: q.topic, count: 0, exams: new Set() });
    const entry = topicMap.get(key);
    entry.count += 1;
    entry.exams.add(examOf(file));
  }
}
const topicSaturation = [...topicMap.values()]
  .map((e) => ({ section: e.section, topic: e.topic, questionCount: e.count, examCount: e.exams.size, exams: [...e.exams].sort() }))
  .filter((e) => e.examCount >= 3) // only surface genuinely cross-exam-saturated topics
  .sort((a, b) => b.examCount - a.examCount || b.questionCount - a.questionCount);

// 2. Known risky generic-template stems: patterns that have historically caused
// within-file or cross-file duplication on this project (see BATCH_LOG.md).
// Extend this list whenever a new generic-stem collision class is discovered.
const RISKY_PATTERNS = [
  { label: 'odd-one-out / classification', regex: /which of the following is different from the rest|choose the odd one/i },
  { label: 'spelling correction', regex: /choose the correctly spelled word|correctly spelled/i },
  { label: 'SI unit lookup', regex: /si unit of/i },
  { label: 'capital-city lookup', regex: /capital of/i },
  { label: 'currency lookup', regex: /currency of/i },
  { label: 'correctly matched pair', regex: /which of the following pairs is correctly matched|correctly matched pair/i },
  { label: 'synonym/antonym instruction', regex: /choose the word (most )?similar in meaning|choose the word (most )?opposite in meaning/i },
  { label: 'blood relation generic opener', regex: /pointing to a (man|woman|photograph)/i },
  { label: 'analogy colon-format', regex: /^[a-z ]+ ?: ?[a-z ]+ ?:: ?[a-z ]+ ?: ?\?/i },
];
const genericTemplates = RISKY_PATTERNS.map(({ label, regex }) => {
  const matches = [];
  for (const { file, questions } of banks) {
    for (const q of questions) {
      if (q.question && regex.test(q.question)) matches.push({ exam: examOf(file), id: q.id, file });
    }
  }
  const exams = [...new Set(matches.map((m) => m.exam))].sort();
  return { pattern: label, matchCount: matches.length, examCount: exams.length, exams, riskTier: exams.length >= 3 ? 'high' : exams.length === 2 ? 'medium' : 'low' };
}).filter((p) => p.matchCount > 0);

// 3. Cross-exam shared question openings: first 6 normalized words shared by
// questions in 2+ different exam families indicates near-duplicate risk even
// when the full text differs. Does not reproduce full question text.
const openingMap = new Map();
for (const { file, questions } of banks) {
  for (const q of questions) {
    if (!q.question) continue;
    const words = norm(q.question).split(' ').filter(Boolean);
    if (words.length < 6) continue;
    const opening = words.slice(0, 6).join(' ');
    if (!openingMap.has(opening)) openingMap.set(opening, new Set());
    openingMap.get(opening).add(examOf(file));
  }
}
const sharedOpenings = [...openingMap.entries()]
  .filter(([, exams]) => exams.size >= 2)
  .map(([opening, exams]) => ({ opening, examCount: exams.size, exams: [...exams].sort() }))
  .sort((a, b) => b.examCount - a.examCount)
  .slice(0, 200); // cap: this is a risk-flag list, not a full corpus dump

const generatedAt = new Date().toISOString().slice(0, 10);
const output = {
  generatedAt,
  generatedBy: 'scripts/generate-collision-reference.mjs',
  corpus: { bankFiles: banks.length, questions: banks.reduce((n, b) => n + b.questions.length, 0) },
  topicSaturation,
  genericTemplates,
  sharedOpenings,
};

fs.writeFileSync(path.join(process.cwd(), 'TAKEMOCKTEST_COLLISION_REFERENCE.json'), JSON.stringify(output, null, 2) + '\n');

const md = [
  '# TakeMockTest Collision Reference',
  '',
  `Generated: ${generatedAt} from ${banks.length} bank files / ${output.corpus.questions} questions.`,
  '',
  'Regenerate with `node scripts/generate-collision-reference.mjs` after any integration that adds or changes question banks. Attach this file (or the JSON) to a ChatGPT Writer prompt for a subject that overlaps an already-live exam (Reasoning, Quantitative Aptitude, General Awareness/GK, English are the highest-overlap subjects on this site).',
  '',
  '## Topic saturation (cross-exam, 3+ exams already covering it)',
  '',
  'Avoid reusing the exact same fact/setup for these (section, topic) pairs without checking `TAKEMOCKTEST_COLLISION_REFERENCE.json` or the repository directly first.',
  '',
  '| Section | Topic | Questions | Exams |',
  '|---|---|---:|---|',
  ...topicSaturation.slice(0, 60).map((t) => `| ${t.section} | ${t.topic} | ${t.questionCount} | ${t.exams.join(', ')} (${t.examCount}) |`),
  '',
  '## Risky generic-template stems',
  '',
  'These stem patterns have caused real duplication on this project before (within one file and across exams). If writing a question matching one of these patterns, use a distinct, content-specific stem rather than the generic template.',
  '',
  '| Pattern | Matches | Exams | Risk |',
  '|---|---:|---|---|',
  ...genericTemplates.map((t) => `| ${t.pattern} | ${t.matchCount} | ${t.exams.join(', ')} | ${t.riskTier} |`),
  '',
  '## Shared question openings (2+ exam families, first 6 words)',
  '',
  'Not necessarily duplicates, but worth a manual glance before reusing a similar opening for the same subject.',
  '',
  '| Opening (normalized) | Exams |',
  '|---|---|',
  ...sharedOpenings.slice(0, 60).map((s) => `| ${s.opening} | ${s.exams.join(', ')} (${s.examCount}) |`),
  '',
].join('\n');

fs.writeFileSync(path.join(process.cwd(), 'TAKEMOCKTEST_COLLISION_REFERENCE.md'), md);

console.log(`Wrote TAKEMOCKTEST_COLLISION_REFERENCE.json and .md — ${topicSaturation.length} saturated topics, ${genericTemplates.length} risky patterns, ${sharedOpenings.length} shared openings.`);
