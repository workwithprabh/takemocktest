// Inventories the indexable sectional-test surface by search intent, not by URL.
//
//   npm run build && node scripts/sectional-inventory.mjs [--json out.json]
//
// Why this exists: the sectional pages are the largest indexable surface on the
// site (783 of 1,787 pages) and the easiest to reason about wrongly. "783 pages"
// is a count of products, not of things people search for. Several tests can
// serve one query: on 10 September 2026 SSC CGL Tier 1 Quantitative Aptitude had
// three self-canonical URLs whose titles differed only in a trailing digit.
//
// The unit that matters is {country, exam, stage, section}. This script derives
// that grouping from the built export so any plan for the surface argues from a
// measured number rather than an estimate.
import fs from 'node:fs';
import path from 'node:path';

const out = path.join(process.cwd(), 'out');
if (!fs.existsSync(out)) {
  console.error('sectional-inventory: out/ not found — run `npm run build` first.');
  process.exit(1);
}

// Exam category comes from the source of truth rather than the rendered page:
// it is the only field here that the page does not already state plainly.
const examSrc = fs.readFileSync(path.join(process.cwd(), 'src/lib/exams.ts'), 'utf8');
const categoryOf = new Map();
for (const match of examSrc.matchAll(/slug:\s*'([^']+)',[\s\S]{0,400}?category:\s*'([^']+)'/g)) {
  if (!categoryOf.has(match[1])) categoryOf.set(match[1], match[2]);
}

const files = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) { if (entry.name !== 'attempt') walk(full); }
    else if (full.includes(`${path.sep}test${path.sep}`) && full.endsWith('.html')) files.push(full);
  }
})(out);

const clusters = new Map();
let sectionalPages = 0;
let noindexed = 0;

for (const file of files) {
  const rel = path.relative(out, file).split(path.sep).join('/');
  const parts = rel.match(/^([a-z]{2})\/([^/]+)\/test\/(.+)\.html$/);
  if (!parts) continue;
  const [, country, exam, testId] = parts;
  const sectional = testId.match(/^(.*)-sectional-(\d+)$/);
  if (!sectional) continue;
  sectionalPages += 1;

  const raw = fs.readFileSync(file, 'utf8');
  if (/noindex/.test(raw)) { noindexed += 1; continue; }

  // Question count is stated on the page; read it back rather than recomputing,
  // so the inventory reflects what a visitor and a crawler actually see.
  const html = raw.replace(/<script[\s\S]*?<\/script>/g, ' ').split('<!-- -->').join('');
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
  const questions = Number((text.match(/Questions\s+(\d+)/) || [, 0])[1]);
  const title = (raw.match(/<title>([^<]*)<\/title>/) || [, ''])[1];

  const key = `${country}/${exam}/${sectional[1]}`;
  if (!clusters.has(key)) {
    clusters.set(key, {
      key, country, exam,
      category: categoryOf.get(exam) ?? 'Uncategorised',
      intent: sectional[1],
      urls: [], titles: [], questions: 0,
    });
  }
  const cluster = clusters.get(key);
  cluster.urls.push(`/${country}/${exam}/test/${testId}`);
  cluster.titles.push(title);
  cluster.questions += questions;
}

const all = [...clusters.values()].sort((a, b) => b.urls.length - a.urls.length || a.key.localeCompare(b.key));
const multi = all.filter((c) => c.urls.length > 1);

// A title that differs from a sibling only by a digit is the signal that two
// URLs are chasing one query with nothing to tell them apart.
const digitOnly = multi.filter((c) => new Set(c.titles.map((t) => t.replace(/\d+/g, '#'))).size === 1);

console.log(`sectional test pages built:        ${sectionalPages}`);
console.log(`  noindexed (below the floor):     ${noindexed}`);
console.log(`  indexable:                       ${sectionalPages - noindexed}`);
console.log(`distinct search intents:           ${all.length}`);
console.log(`  served by exactly one URL:       ${all.length - multi.length}`);
console.log(`  served by more than one:         ${multi.length}`);
console.log(`  ...of which siblings' titles differ only by a number: ${digitOnly.length}`);
console.log(`pages that consolidation would collapse: ${multi.reduce((n, c) => n + c.urls.length - 1, 0)}`);

console.log(`\nintents by exam category:`);
const byCategory = new Map();
for (const c of all) {
  const row = byCategory.get(c.category) ?? { intents: 0, pages: 0 };
  row.intents += 1; row.pages += c.urls.length;
  byCategory.set(c.category, row);
}
for (const [name, row] of [...byCategory].sort((a, b) => b[1].intents - a[1].intents)) {
  console.log(`  ${name.padEnd(30)} ${String(row.intents).padStart(4)} intents  ${String(row.pages).padStart(4)} pages`);
}

const jsonFlag = process.argv.indexOf('--json');
if (jsonFlag !== -1 && process.argv[jsonFlag + 1]) {
  fs.writeFileSync(process.argv[jsonFlag + 1], `${JSON.stringify(all, null, 2)}\n`);
  console.log(`\nwrote ${all.length} intents to ${process.argv[jsonFlag + 1]}`);
}
