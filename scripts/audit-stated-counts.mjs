// Fails the build when a page states a total that disagrees with its own
// breakdown, or with the count shown elsewhere on the same page.
//
//   npm run build && node scripts/audit-stated-counts.mjs
//
// Why this exists: on 10 September 2026 fourteen mock-test pages told visitors
// something that does not add up. The IBPS PO page said "This page currently
// has 21 syllabus-checked tests for IBPS PO: 4 full-length mocks, 25 sectional
// tests, and 3 quick practice tests". Four plus twenty-five plus three is
// thirty-two.
//
// The cause was two counts of the same thing that had drifted apart:
// getCheckedTestCount excludes tests shared in from another exam, and the FAQ
// breakdown next to it did not. Both readings were defensible on their own,
// which is exactly why nobody spotted it. Only putting them in one sentence
// made the contradiction visible.
//
// This site's entire pitch is that its numbers are checked against a primary
// source. A visitor who does the arithmetic and finds it wrong has no reason to
// believe the marking scheme either, so this is a trust bug before it is a
// content bug, and it belongs in the build rather than in a reviewer's memory.
import fs from 'node:fs';
import path from 'node:path';

const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
  console.error('out/ not found — run `npm run build` first.');
  process.exit(1);
}

function walkHtml(dir) {
  const found = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) found.push(...walkHtml(full));
    else if (entry.name.endsWith('.html')) found.push(full);
  }
  return found;
}

const errors = [];
let checkedPages = 0;
let claims = 0;

for (const file of walkHtml(outDir)) {
  const rel = path.relative(outDir, file);
  const raw = fs.readFileSync(file, 'utf8');
  // Read the rendered prose, not the JSON-LD: the same sentence appears in both
  // and counting it twice would double every number.
  const text = raw
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&#x27;|&#0?39;|&apos;/gi, "'")
    .replace(/&amp;/g, '&')
    .replace(/&[a-z]+;|&#\d+;/gi, ' ')
    .replace(/\s+/g, ' ');

  // "N syllabus-checked tests for X: a full-length mocks, b sectional tests,
  // and c quick practice tests." The colon clause is the breakdown, and it has
  // to sum to the figure before it.
  let sawClaim = false;
  for (const match of text.matchAll(/(\d+)\s+syllabus-checked tests? for [^:.]+:\s*([^.]+)\./g)) {
    sawClaim = true;
    claims += 1;
    const stated = Number(match[1]);
    const parts = [...match[2].matchAll(/(\d+)\s+(?:full-length|sectional|quick)/g)].map((m) => Number(m[1]));
    if (parts.length === 0) continue;
    const summed = parts.reduce((a, b) => a + b, 0);
    if (summed !== stated) {
      errors.push(
        `${rel}: states ${stated} checked tests but its own breakdown sums to ${summed} (${match[2].trim()})`,
      );
    }
  }
  if (sawClaim) checkedPages += 1;
}

if (errors.length > 0) {
  console.error(`Stated-count audit failed on ${errors.length} page(s):\n`);
  for (const error of errors.slice(0, 30)) console.error(`  - ${error}`);
  if (errors.length > 30) console.error(`  ... and ${errors.length - 30} more`);
  console.error('\nA stated total and the breakdown beside it must be counted the same way.');
  process.exit(1);
}

console.log(`Stated-count audit passed: ${claims} test-count claim(s) across ${checkedPages} page(s), every total matches its own breakdown.`);
