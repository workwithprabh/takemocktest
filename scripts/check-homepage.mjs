// Run after npm run build: node scripts/check-homepage.mjs
// A small regression check for the compact homepage and shared category card.
import assert from 'node:assert/strict';
import fs from 'node:fs';

const html = fs.readFileSync('out/in.html', 'utf8');
const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
assert(main, 'Homepage main content must render');
assert.equal((main.match(/<h1\b/g) || []).length, 1);
assert(!main.includes('What is available today'), 'Statistics strip must stay removed');
assert(!main.includes('Every listed exam is fully verified'));

const sections = [...main.matchAll(/<section\b[^>]*>([\s\S]*?)<\/section>/g)].map(m => m[0]);
const headings = ['home-heading', 'popular-tests-heading', 'exam-categories-heading', 'latest-updates-heading', 'trust-heading', 'faq-heading'];
assert.equal(sections.length, headings.length);
headings.forEach((id, i) => assert(sections[i].includes(`aria-labelledby="${id}"`), `Section order: ${id}`));
assert.match(sections[0], /<form\b[^>]*action="\/in\/exams"/);
assert.match(sections[0], /<input\b[^>]*list="available-exam-suggestions"/);
assert.match(sections[0], /<input\b[^>]*name="q"/);
for (const name of ['SSC CGL', 'IELTS Academic', 'JEE Main']) {
  assert(sections[0].includes(`value="${name}"`), `Missing suggestion: ${name}`);
}
assert.equal((sections[1].match(/aria-label="Open free /g) || []).length, 6);
assert.equal((sections[2].match(/<h3\b/g) || []).length, 6);
assert.equal((sections[3].match(/<time\b/g) || []).length, 5);
assert.equal((sections[3].match(/hidden md:flex/g) || []).length, 2, 'Only three notices initially visible on mobile');
assert.equal((sections[5].match(/<details\b/g) || []).length, 4);
assert(!/<details\b[^>]*\bopen(?:[\s=>])/.test(sections[5]));
assert(html.includes('aria-label="Mobile navigation"'));

const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
  .flatMap(m => JSON.parse(m[1]));
for (const type of ['Organization', 'WebSite', 'FAQPage']) {
  assert(schemas.some(schema => schema['@type'] === type), `Missing ${type} schema`);
}
assert.equal(schemas.find(schema => schema['@type'] === 'FAQPage').mainEntity.length, 4);
assert.match(html, /<title>Free Mock Tests for Competitive Exams/);
assert.match(html, /<link rel="canonical" href="https:\/\/takemocktest.com\/in"/);

const directory = fs.readFileSync('out/in/exams.html', 'utf8');
const directoryMain = directory.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
assert(directoryMain, 'Exam directory main content must render');
assert(directory.includes('SSC, banking, railways, civil services, regulators, and state recruitment exams.'));
assert(directoryMain.includes('Choose your preparation goal'));
assert.equal((directoryMain.match(/min-h-32 gap-3 p-4/g) || []).length, 11, 'The full directory shows all compact goal cards');
assert(!directoryMain.includes('min-h-64'), 'The full directory must not regress to tall category cards');
console.log('Homepage checks passed: section order, search, compact cards, mobile notice limit, directory layout, FAQs, metadata and schema.');
