// Emits SEO_KEYWORD_SHEET.csv: every indexable URL with the keyword it targets.
//
// The keyword map in src/lib/seo-keywords.ts declares targets per page class.
// That is the right place for the rule, and the wrong place to answer "what is
// THIS page for". This script resolves the class template against each built
// page, so the question can be answered by looking a URL up rather than by
// reading a template and substituting in your head.
//
// Run after `npm run build`. Committed output, so it diffs like anything else.
import fs from 'node:fs';
import path from 'node:path';

const out = path.join(process.cwd(), 'out');
if (!fs.existsSync(out)) {
  console.error('generate-keyword-sheet: out/ not found — run `npm run build` first.');
  process.exit(1);
}

const sitemap = fs.readFileSync(path.join(out, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const read = (rel) => {
  const file = path.join(out, `${rel}.html`);
  return fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : '';
};
// Entities have to be decoded, not just stripped of tags: an h1 of
// "General Intelligence &amp; Reasoning" otherwise becomes a keyword with a raw
// entity in it, which is not a phrase anyone types.
const decode = (text) => text
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"')
  .replace(/&#0?39;|&apos;|&#x27;/gi, "'")
  .replace(/&nbsp;/g, ' ')
  .replace(/&#(\d+);/g, (whole, code) => String.fromCharCode(Number(code)));

const tag = (html, re) => {
  const m = re.exec(html);
  return m ? decode(m[1].replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim() : '';
};

// Evidence level per class. Only three classes have been checked against a real
// SERP; saying so is the point. See SEO_KEYWORD_RESEARCH.md.
const EVIDENCE = {
  'mock-test hub': 'SERP-verified 2026-09-09',
  'sectional test': 'SERP-verified 2026-09-09',
  syllabus: 'SERP-verified 2026-09-09',
  'full mock test': 'GSC-observed',
  'country home': 'GSC-observed',
};

// "GSC-observed" is a claim about a URL, not about a class: a full mock test
// published today has never been served by Google, whatever its class-mates
// have done. Read the URLs that actually carry impressions out of the last
// Search Console report and let only those keep the label. Everything else in
// such a class inherits the class's reasoning, and the column says so rather
// than borrowing a sibling's data.
const gscObservedUrls = (() => {
  const report = path.join(process.cwd(), 'SEARCH-CONSOLE-REPORT.md');
  if (!fs.existsSync(report)) return null;
  const rows = [...fs.readFileSync(report, 'utf8')
    .matchAll(/^\|\s*(https:\/\/takemocktest\.com\/\S*?)\s*\|/gm)].map((m) => m[1]);
  return rows.length > 0 ? new Set(rows.map((u) => u.replace(/\/$/, ''))) : null;
})();

function evidenceFor(cls, url) {
  const classEvidence = EVIDENCE[cls] ?? 'Reasoned, not yet SERP-checked';
  if (classEvidence !== 'GSC-observed') return classEvidence;
  if (!gscObservedUrls) return 'Class GSC-observed, no report to check this URL against';
  return gscObservedUrls.has(url.replace(/\/$/, ''))
    ? 'GSC-observed'
    : 'Class GSC-observed, this URL not yet in GSC';
}

function classify(rel) {
  const parts = rel.split('/').filter(Boolean);
  const [, ...rest] = parts; // drop the country segment
  if (rest.length === 0) return 'country home';
  const last = rest[rest.length - 1];
  if (rest[0] === 'exams') return rest.length === 1 ? 'exam directory' : 'exam category';
  if (rest[0] === 'practice') return rest.length === 1 ? 'topic practice index' : 'topic practice';
  if (rest[0] === 'logical-reasoning') return 'reasoning hub';
  if (rest[0] === 'blog') return rest.length === 1 ? 'blog index' : 'blog post';
  if (rest[0] === 'exam-updates') return rest.length === 1 ? 'updates index' : 'exam update';
  if (rest.includes('test')) return /full-mock/.test(last) ? 'full mock test' : 'sectional test';
  if (rest.length === 1) return 'exam hub';
  return last; // mock-test, syllabus, eligibility, exam-pattern, salary, ...
}

// The keyword each class targets, resolved from what the page itself says.
function keywordFor(cls, h1) {
  const strip = (suffix) => h1.replace(new RegExp(`\\s*${suffix}.*$`, 'i'), '').trim();
  switch (cls) {
    case 'country home': return 'free online mock test';
    case 'exam directory': return 'competitive exams list';
    case 'exam category': return `${h1.toLowerCase()}`;
    case 'exam hub': return h1.toLowerCase();
    case 'mock-test': return h1.toLowerCase();
    case 'full mock test':
    case 'sectional test': return h1.toLowerCase();
    case 'syllabus': return `${strip('syllabus')} syllabus`.toLowerCase();
    case 'eligibility': return `${strip('eligibility')} eligibility`.toLowerCase();
    case 'exam-pattern': return `${strip('exam pattern')} exam pattern`.toLowerCase();
    case 'selection-process': return `${strip('selection process')} selection process`.toLowerCase();
    case 'salary': return `${strip('salary')} salary`.toLowerCase();
    case 'previous-year-papers': return `${strip('previous year')} previous year question papers`.toLowerCase();
    case 'topic practice': return `${strip('questions')} questions with answers`.toLowerCase();
    case 'topic practice index': return 'topic wise practice questions';
    case 'reasoning hub': return 'logical reasoning questions';
    case 'blog post': return 'per post, not templated';
    case 'exam update': return 'exam notification';
    default: return h1.toLowerCase();
  }
}

const rows = [];
for (const url of urls) {
  const rel = url.replace('https://takemocktest.com/', '');
  const html = read(rel);
  if (!html) continue;
  const h1 = tag(html, /<h1[^>]*>([\s\S]*?)<\/h1>/);
  const title = tag(html, /<title>([\s\S]*?)<\/title>/);
  const cls = classify(rel);
  rows.push({
    url,
    cls,
    keyword: keywordFor(cls, h1),
    evidence: evidenceFor(cls, url),
    h1,
    title,
  });
}

const esc = (v) => `"${String(v).replace(/"/g, '""')}"`;
const csv = [
  ['url', 'page_class', 'primary_keyword', 'evidence', 'h1', 'title'].join(','),
  ...rows.map((r) => [r.url, r.cls, r.keyword, r.evidence, r.h1, r.title].map(esc).join(',')),
].join('\n');
fs.writeFileSync(path.join(process.cwd(), 'SEO_KEYWORD_SHEET.csv'), `${csv}\n`);

const byClass = {};
for (const r of rows) byClass[r.cls] = (byClass[r.cls] ?? 0) + 1;
console.log(`SEO_KEYWORD_SHEET.csv written: ${rows.length} indexable URLs.`);
for (const [cls, n] of Object.entries(byClass).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(n).padStart(5)}  ${cls.padEnd(22)} ${EVIDENCE[cls] ?? 'Reasoned, not yet SERP-checked'}`);
}
const byEvidence = {};
for (const r of rows) byEvidence[r.evidence] = (byEvidence[r.evidence] ?? 0) + 1;
console.log('  by evidence actually held per URL:');
for (const [ev, n] of Object.entries(byEvidence).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${String(n).padStart(5)}  ${ev}`);
}
