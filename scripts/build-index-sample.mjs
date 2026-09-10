// Builds a deterministic, stratified sample of indexable URLs for Search
// Console's URL Inspection API.
//
//   npm run build && node scripts/build-index-sample.mjs
//
// Why this exists: the Search Analytics API only ever reports pages that
// received an impression. A page that Google has indexed but never shown, and a
// page Google has never crawled, are both simply absent from it. Over the 90
// days to 10 September 2026 exactly 26 of 1,787 indexable pages appeared, and
// no sectional test page appeared at all — which those two very different
// situations would both produce, while implying opposite work.
//
// URL Inspection can tell them apart, one URL per call against a daily quota,
// so the sample is picked here: evenly spaced through each page type's sorted
// list rather than at random, so the same build always yields the same sample
// and a later run is comparable to an earlier one.
import fs from 'node:fs';
import path from 'node:path';

const out = path.join(process.cwd(), 'out');
if (!fs.existsSync(out)) {
  console.error('build-index-sample: out/ not found — run `npm run build` first.');
  process.exit(1);
}

const TYPES = [
  ['sectional test', (p) => /\/test\/.*-sectional-\d+$/.test(p)],
  ['full mock test', (p) => /\/test\/.*-full-mock-\d+$/.test(p)],
  ['other test', (p) => p.includes('/test/')],
  ['topic practice', (p) => /\/practice\//.test(p)],
  ['blog post', (p) => /\/blog\/./.test(p)],
  ['exam update', (p) => /\/exam-updates\/./.test(p)],
  ['mock-test hub', (p) => p.endsWith('/mock-test')],
  ['exam-pattern', (p) => p.endsWith('/exam-pattern')],
  ['syllabus', (p) => p.endsWith('/syllabus')],
  ['exam hub', (p) => /^\/[a-z]{2}\/[^/]+$/.test(p)],
  ['other', () => true],
];

const files = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) { if (entry.name !== 'attempt') walk(full); }
    else if (entry.name.endsWith('.html')) files.push(full);
  }
})(out);

const buckets = new Map(TYPES.map(([name]) => [name, []]));
for (const file of files) {
  const raw = fs.readFileSync(file, 'utf8');
  if (/noindex/.test(raw)) continue;
  const rel = path.relative(out, file).split(path.sep).join('/');
  if (rel === '404.html') continue;
  const url = `/${rel.replace(/\.html$/, '').replace(/\/index$/, '')}`;
  const type = TYPES.find(([, test]) => test(url));
  buckets.get(type[0]).push(url);
}

// Evenly spaced through the sorted list: a contiguous slice would sample one
// alphabetical neighbourhood, and a random pick would not reproduce.
const perType = Number(process.argv[2] ?? 24);
const sample = [];
const lines = [];
for (const [name, urls] of buckets) {
  urls.sort();
  const take = Math.min(perType, urls.length);
  const picked = [];
  for (let i = 0; i < take; i += 1) picked.push(urls[Math.floor((i * urls.length) / take)]);
  const unique = [...new Set(picked)];
  for (const url of unique) sample.push(`${url}\t${name}`);
  lines.push(`  ${name.padEnd(16)} ${String(unique.length).padStart(3)} of ${urls.length}`);
}

fs.writeFileSync('data/index-audit-sample.tsv', `${sample.join('\n')}\n`);
console.log(`indexable pages: ${[...buckets.values()].reduce((n, u) => n + u.length, 0)}`);
console.log(`sampled ${sample.length} URLs, up to ${perType} per type:`);
for (const line of lines) console.log(line);
console.log('wrote data/index-audit-sample.tsv');
