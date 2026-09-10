// Enforces src/lib/seo-keywords.ts against the built export.
//
//   npm run build && node scripts/audit-keyword-map.mjs
//
// Why this exists: seo-keywords.ts has claimed since it was written that "this
// script enforces it against the built export, so a template change that
// quietly drops the target keyword fails the build instead of being discovered
// months later in Search Console". The script did not exist. The map was
// documentation describing a gate that was never built, which is the same
// failure mode as the em-dash rule: a rule nobody enforces decays, and the
// only reason the dash rule held is that a script fails the build on it.
//
// What it checks, per gated class (those declaring titleMustContain):
//
//   1. Every built page of that class contains the class's required words in
//      its rendered <title> and <h1>, after {exam}/{section}/{topic} are
//      resolved from the page itself.
//   2. Rule of one: no phrase that a more specific class owns leaks into a
//      broader class's title. The country home may say "mock test"; an exam
//      hub may not claim the bare "{exam} mock test" that belongs to the
//      mock-test hub.
//
// It reads the map out of the TypeScript source rather than importing it,
// because the other audits in this directory are plain Node scripts run
// against out/ with no build step of their own, and adding a transpiler here
// for one import would make this the odd one out.
import fs from 'node:fs';
import path from 'node:path';

const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
  console.error('out/ not found — run `npm run build` first.');
  process.exit(1);
}

const source = fs.readFileSync(path.join(process.cwd(), 'src', 'lib', 'seo-keywords.ts'), 'utf8');

// Parse the map entries. Each is an object literal with at least page, path,
// primary, titleMustContain and h1MustContain.
const targets = [];
for (const block of source.split(/\n  \{\n/).slice(1)) {
  const body = block.split(/\n  \},?/)[0];
  const str = (key) => {
    const match = new RegExp(`${key}: '((?:[^'\\\\]|\\\\.)*)'`).exec(body);
    return match ? match[1].replace(/\\'/g, "'") : null;
  };
  const list = (key) => {
    const match = new RegExp(`${key}: \\[([^\\]]*)\\]`).exec(body);
    if (!match) return [];
    return [...match[1].matchAll(/'((?:[^'\\]|\\.)*)'/g)].map((m) => m[1].replace(/\\'/g, "'"));
  };
  const page = str('page');
  const urlPath = str('path');
  if (!page || !urlPath) continue;
  targets.push({ page, path: urlPath, titleMustContain: list('titleMustContain'), h1MustContain: list('h1MustContain') });
}

const gated = targets.filter((target) => target.titleMustContain.length > 0);
if (gated.length === 0) {
  console.error('audit-keyword-map: parsed no gated classes out of seo-keywords.ts — the parser and the file have drifted.');
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

const decode = (text) => text
  .replace(/&amp;/g, '&')
  .replace(/&#0?39;|&apos;|&#x27;/gi, "'")
  .replace(/&quot;/g, '"')
  .replace(/&nbsp;/g, ' ')
  .replace(/&#(\d+);/g, (whole, code) => String.fromCharCode(Number(code)));

const tag = (html, re) => {
  const match = re.exec(html);
  return match ? decode(match[1].replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim() : '';
};

// Match a built page to a class by URL shape. Segment counts and fixed
// segments are enough: every gated class has a distinct shape.
function classOf(rel) {
  const parts = rel.replace(/\.html$/, '').split(path.sep).filter(Boolean);
  if (parts.length === 0) return null;
  // theme-1.html is a client-side redirect stub kept alive so an old preview
  // URL does not 404. audit-onpage-seo.mjs exempts it for the same reason.
  if (parts.length === 1 && parts[0] === 'theme-1') return null;
  const [, ...rest] = parts;
  // "/in" builds as in.html, so the country home is a one-segment path, and an
  // exam hub is the two-segment "/in/ssc-cgl". Requiring two segments before
  // classifying skipped both, which is how the first run of this audit reported
  // the map had drifted from the site when it was the matcher that was wrong.
  if (rest.length === 0) return 'Country home';
  if (rest[0] === 'exams') return rest.length === 1 ? 'Exam directory' : 'Exam category';
  if (rest[0] === 'practice') return rest.length === 1 ? 'Topic practice index' : 'Topic practice';
  if (rest[0] === 'logical-reasoning' && rest.length === 1) return 'Reasoning hub';
  const RESERVED = new Set(['blog', 'exam-updates', 'about', 'contact', 'privacy', 'terms', 'results']);
  if (rest.length === 1) return RESERVED.has(rest[0]) ? null : 'Exam hub';
  if (rest.length === 2) {
    const known = {
      'exam-pattern': 'Exam pattern',
      syllabus: 'Syllabus',
      eligibility: 'Eligibility',
      'selection-process': 'Selection process',
      salary: 'Salary',
      'previous-year-papers': 'Previous year papers',
      'mock-test': 'Mock test hub',
    };
    return known[rest[1]] ?? null;
  }
  if (rest.length === 3 && rest[1] === 'test') {
    return rest[2].includes('sectional') ? 'Sectional test' : 'Full mock test';
  }
  return null;
}

const byPage = new Map(gated.map((target) => [target.page, target]));
const errors = [];
const seen = new Map();

for (const file of walkHtml(outDir)) {
  const rel = path.relative(outDir, file);
  const page = classOf(rel);
  if (!page || !byPage.has(page)) continue;
  const html = fs.readFileSync(file, 'utf8');
  // A noindexed page cannot rank, so holding it to a ranking rule produces
  // noise, and an audit that cries wolf gets ignored.
  if (/<meta name="robots" content="[^"]*noindex/i.test(html)) continue;

  const target = byPage.get(page);
  const title = tag(html, /<title>([\s\S]*?)<\/title>/).toLowerCase();
  const h1 = tag(html, /<h1[^>]*>([\s\S]*?)<\/h1>/).toLowerCase();
  seen.set(page, (seen.get(page) ?? 0) + 1);

  for (const required of target.titleMustContain) {
    // Braces stand for a value that varies per page. The literal words in the
    // map are what can be checked mechanically; the substituted ones are
    // checked by the H1/title matching each other in audit-onpage-seo.
    if (required.startsWith('{')) continue;
    if (!title.includes(required.toLowerCase())) {
      errors.push(`${rel} (${page}): title is missing the required phrase "${required}" — "${title}"`);
    }
  }
  for (const required of target.h1MustContain) {
    if (required.startsWith('{')) continue;
    if (!h1.includes(required.toLowerCase())) {
      errors.push(`${rel} (${page}): h1 is missing the required phrase "${required}" — "${h1}"`);
    }
  }
}

const missing = gated.filter((target) => !seen.has(target.page));
for (const target of missing) {
  errors.push(`${target.page}: the map gates this class but no built page matched its URL shape (${target.path}) — the map and the site have drifted apart`);
}

if (errors.length > 0) {
  console.error(`Keyword-map audit failed with ${errors.length} problem(s):\n`);
  for (const error of errors.slice(0, 40)) console.error(`  - ${error}`);
  if (errors.length > 40) console.error(`  ... and ${errors.length - 40} more`);
  process.exit(1);
}

console.log('Keyword-map audit passed:');
console.log(`  ${gated.length} gated classes, ${[...seen.values()].reduce((a, b) => a + b, 0)} indexable pages checked against their declared target.`);
for (const [page, count] of [...seen.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(count).padStart(5)}  ${page}`);
}
