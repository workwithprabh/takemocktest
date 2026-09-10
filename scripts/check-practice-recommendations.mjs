import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const compiled = { exports: {} };
vm.runInNewContext(ts.transpileModule(fs.readFileSync('src/lib/practice-recommendations.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
}).outputText, { module: compiled, exports: compiled.exports });
const { recommendPractice } = compiled.exports;
const stat = { section: 'Maths', topic: 'Percentage', total: 5, attempted: 5, correct: 1 };
const option = (id, stage = 'tier1', count = 5, total = 5) => ({ id, name: id, stage, minutes: 10, total, topics: [{ section: 'Maths', topic: 'Percentage', count }] });
const options = [option('current'), option('mixed', 'tier1', 5, 100), option('focused'), option('wrong-stage', 'tier2')];
assert.equal(recommendPractice([stat], options, 'current')[0].match.option.id, 'focused');
assert.equal(recommendPractice([stat], [option('current'), option('wrong-stage', 'tier2')], 'current')[0].match, undefined);
assert.equal(recommendPractice([stat], options, 'retired-test')[0].match, undefined);
assert.equal(recommendPractice([stat], [], 'current')[0].match, undefined);
for (const change of [{ attempted: 0 }, { attempted: 2 }, { total: 20 }, { correct: 4 }, { topic: 'Other' }]) {
  assert.equal(recommendPractice([{ ...stat, ...change }], options, 'current').length, 0);
}
assert.equal(recommendPractice([{ ...stat, section: 'English' }], options, 'current')[0].match, undefined);
assert.equal(recommendPractice([stat], [option('current'), option('too-few', 'tier1', 2)], 'current')[0].match, undefined);
const twoTopics = [stat, { ...stat, topic: 'Ratio', correct: 0 }];
const both = { ...option('both'), topics: [...option('both').topics, { section: 'Maths', topic: 'Ratio', count: 5 }], total: 10 };
const ranked = recommendPractice(twoTopics, [option('current'), both], 'current');
assert.equal(ranked[0].topic, 'Ratio');
assert.equal(ranked.filter((item) => item.match).length, 1, 'Never recommend the same test twice');

// After a build, verify every exported recommendation points to a real test
// and that no question text or answer content leaked into the topic index.
if (fs.existsSync('out/practice-index')) {
  let count = 0;
  const countryDirectories = fs.readdirSync('out', { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  for (const file of fs.readdirSync('out/practice-index')) {
    const filePath = `out/practice-index/${file}`;
    if (!fs.statSync(filePath).isFile()) continue;
    const entries = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const slug = file.replace(/\.json$/, '');
    for (const entry of entries) {
      const hasDestination = countryDirectories.some((country) =>
        fs.existsSync(`out/${country}/${slug}/test/${entry.id}.html`));
      assert(hasDestination, `Missing destination: ${slug}/${entry.id}`);
      assert(entry.total > 0);
      assert(!('questions' in entry));
      assert(entry.topics.every((topic) => topic.count > 0 && topic.count <= entry.total));
      count++;
    }
  }
  assert(count > 1000, 'Exported practice catalogue must cover the site');
  console.log(`Verified ${count} published practice destinations.`);
  const html = fs.readFileSync('out/in/ssc-cgl/mock-test.html', 'utf8');
  const select = html.match(/<select\b[^>]*id="practice-topic"[^>]*>([\s\S]*?)<\/select>/)?.[1];
  assert(select, 'SSC CGL must expose named-topic browsing in rendered HTML');
  const catalogue = JSON.parse(fs.readFileSync('out/practice-index/ssc-cgl', 'utf8'));
  const firstStage = catalogue.filter((test) => test.stage === catalogue[0].stage);
  const encode = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll("'", '&#x27;');
  for (const topic of new Set(firstStage.flatMap((test) => test.topics.map((entry) => entry.topic)))) {
    assert(select.includes(`value="${encode(topic)}"`), `Missing published topic: ${topic}`);
  }
  assert(html.includes('Start here'), 'A checked starting test must be visible');
  console.log('Named-topic discovery checks passed.');
}
console.log('Practice recommendation checks passed.');
