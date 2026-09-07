// Dev tool. Extracts the pure-reasoning candidate pool from the question banks
// so it can be graded on the hub's own absolute scale. Writes JSON to the path
// given as the first argument. Not part of the build or the QA chain.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

const HUB_SECTIONS = new Set([
  'General Intelligence and Reasoning', 'Reasoning', 'Reasoning Ability', 'Logical Reasoning',
  'General Intelligence', 'Reasoning and General Intelligence', 'Reasoning Aptitude',
  'Test of Reasoning', 'Reasoning Ability and Problem Solving', 'Verbal Reasoning',
  'Logical / Abstract Reasoning', 'Abstract Reasoning', 'Analytical and Logical Reasoning',
  'Logical reasoning and analytical ability', 'Logical Reasoning I', 'Logical Reasoning II',
  'Logical Intelligence', 'Reasoning and Logical Deduction', 'Logical and Analytical Reasoning',
  'Analytical Reasoning', 'Analytical Reasoning Skills I', 'Analytical Reasoning Skills II',
  'Intelligence and Critical Reasoning',
]);

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
