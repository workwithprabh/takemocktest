// Run after npm run build: node scripts/check-exam-journey.mjs
import assert from 'node:assert/strict';
import fs from 'node:fs';

for (const slug of ['ssc-cgl', 'bitsat', 'ielts']) {
  const overview = fs.readFileSync(`out/in/${slug}.html`, 'utf8');
  const hub = fs.readFileSync(`out/in/${slug}/mock-test.html`, 'utf8');

  assert.equal((overview.match(/<h1\b/g) || []).length, 1, `${slug} overview must have one H1`);
  assert(overview.includes('CHECKED TESTS') || overview.includes('Checked tests'), `${slug} overview facts missing`);
  assert(overview.includes(`/${slug}/exam-pattern`), `${slug} pattern navigation missing`);

  assert.equal((hub.match(/<h1\b/g) || []).length, 1, `${slug} mock hub must have one H1`);
  assert(hub.includes('Choose a test'), `${slug} test chooser missing`);
  assert(hub.includes('Full mocks'), `${slug} full-mock count missing`);
  assert(hub.includes('Not required'), `${slug} no-login message missing`);
}

console.log('Exam journey checks passed for SSC CGL, BITSAT and IELTS overviews and mock-test hubs.');
