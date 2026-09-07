// Dev tool. Extracts the pure-reasoning candidate pool from the question banks
// so it can be graded on the hub's own absolute scale. Writes JSON to the path
// given as the first argument. Not part of the build or the QA chain.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

// The section allowlist is NOT duplicated here: it lives in
// src/lib/logical-reasoning-sections.ts so the extractor, the exam pages that
// offer the hub, and the hub itself can never disagree about what counts as
// pure reasoning. That file deliberately has no imports so it can be
// transpiled and evaluated standalone.
const sectionsSource = fs.readFileSync(
  path.join(process.cwd(), 'src', 'lib', 'logical-reasoning-sections.ts'),
  'utf8',
);
const sectionsModule = { exports: {} };
vm.runInNewContext(
  ts.transpileModule(sectionsSource, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText,
  { module: sectionsModule, exports: sectionsModule.exports },
  { filename: 'logical-reasoning-sections.ts' },
);
const HUB_SECTIONS = new Set(sectionsModule.exports.LR_SOURCE_SECTIONS);

const dir = path.join(process.cwd(), 'src', 'lib', 'question-banks');
const out = [];
for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.ts')).sort()) {
  const code = ts.transpileModule(fs.readFileSync(path.join(dir, file), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const m = { exports: {} };
  vm.runInNewContext(code, { module: m, exports: m.exports }, { filename: file });
  const qs = Object.values(m.exports).find(Array.isArray);
  if (!qs) continue;
  for (const q of qs) {
    if (!HUB_SECTIONS.has(q.section)) continue;
    if (q.answerType && q.answerType !== 'mcq') continue;
    out.push({ id: q.id, file, topic: q.topic, examDifficulty: q.difficulty, question: q.question, options: q.options });
  }
}
const target = process.argv[2] || 'lr-pool.json';
fs.writeFileSync(target, JSON.stringify(out, null, 1));
console.log('pool:', out.length, 'questions ->', target);
