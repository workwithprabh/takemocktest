// Validates every JSON-LD block in the static export. Run after `npm run build`.
//
// Structured data fails silently in a way nothing else on this site does: a
// malformed or policy-violating block still renders, still builds, still looks
// perfect to a human reading the page, and simply never produces the result it
// was written for. Nothing tells you. This turns that into a red build.
//
// It checks what can be checked mechanically — syntax, required properties,
// absolute URLs, date formats, deprecated types — and deliberately does NOT
// try to judge whether marked-up content is visible on the page, which is a
// policy question a script cannot answer. See the note on Quiz below.
import fs from 'node:fs';
import path from 'node:path';

const out = path.join(process.cwd(), 'out');
if (!fs.existsSync(out)) {
  console.error('audit-schema: out/ not found — run `npm run build` first.');
  process.exit(1);
}

// Types Google has retired. Emitting one is dead weight at best and a signal of
// stale markup at worst. Dates are the retirement dates, kept so the next
// person can see how old the decision is.
const DEPRECATED = {
  HowTo: 'rich results removed September 2023',
  SpecialAnnouncement: 'deprecated 31 July 2025',
  ClaimReview: 'retired from rich results June 2025',
  VehicleListing: 'retired from rich results June 2025',
  CourseInfo: 'retired June 2025',
  EstimatedSalary: 'retired June 2025',
  LearningVideo: 'retired June 2025',
  PracticeProblem: 'support removed 6 January 2026',
};

// Required properties per type. Not exhaustive Schema.org validation — just the
// properties whose absence makes the block useless.
const REQUIRED = {
  Organization: ['name', 'url'],
  WebSite: ['name', 'url'],
  BreadcrumbList: ['itemListElement'],
  ItemList: ['itemListElement'],
  FAQPage: ['mainEntity'],
  Article: ['headline', 'datePublished', 'author', 'publisher'],
  Blog: ['name', 'url'],
  Quiz: ['name', 'about'],
};

const URL_KEYS = new Set(['url', 'item', 'logo', 'image', 'mainEntityOfPage', 'contentUrl']);
const errors = [];
const types = new Map();
let blocks = 0;

const files = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) files.push(full);
  }
})(out);

function eachNode(node, visit) {
  if (Array.isArray(node)) return node.forEach((child) => eachNode(child, visit));
  if (node && typeof node === 'object') {
    visit(node);
    for (const value of Object.values(node)) eachNode(value, visit);
  }
}

for (const file of files) {
  const rel = path.relative(out, file);
  const html = fs.readFileSync(file, 'utf8');
  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    blocks += 1;
    let data;
    try {
      data = JSON.parse(match[1]);
    } catch (error) {
      errors.push(`${rel}: JSON-LD does not parse — ${error.message.slice(0, 90)}`);
      continue;
    }
    for (const top of Array.isArray(data) ? data : [data]) {
      if (!top || typeof top !== 'object') {
        errors.push(`${rel}: JSON-LD entry is not an object`);
        continue;
      }
      const type = top['@type'];
      types.set(type, (types.get(type) ?? 0) + 1);
      if (!top['@context']) errors.push(`${rel}: ${type ?? 'entry'} missing @context`);
      if (!type) errors.push(`${rel}: entry missing @type`);
      if (DEPRECATED[type]) errors.push(`${rel}: deprecated type ${type} (${DEPRECATED[type]})`);
      for (const key of REQUIRED[type] ?? []) {
        if (top[key] === undefined) errors.push(`${rel}: ${type} missing required "${key}"`);
      }
    }
    eachNode(data, (node) => {
      for (const [key, value] of Object.entries(node)) {
        if (typeof value !== 'string') continue;
        if (URL_KEYS.has(key) && !/^https?:\/\//.test(value)) {
          errors.push(`${rel}: "${key}" must be an absolute URL, got "${value.slice(0, 60)}"`);
        }
        if ((key === 'datePublished' || key === 'dateModified') && !/^\d{4}-\d{2}-\d{2}/.test(value)) {
          errors.push(`${rel}: "${key}" is not ISO 8601 — "${value}"`);
        }
      }
    });
  }
}

if (errors.length > 0) {
  const shown = errors.slice(0, 25);
  console.error(`Schema audit FAILED — ${errors.length} problem${errors.length === 1 ? '' : 's'}:`);
  for (const error of shown) console.error(`  - ${error}`);
  if (errors.length > shown.length) console.error(`  ... and ${errors.length - shown.length} more`);
  process.exit(1);
}
console.log(`Schema audit passed — ${blocks} JSON-LD blocks across ${files.length} pages, all valid.`);
console.log(
  '  types: ' +
    [...types].sort((a, b) => b[1] - a[1]).map(([type, count]) => `${type} ${count}`).join(', '),
);
// Not an error, but worth stating every run so nobody re-discovers it the hard
// way: FAQPage no longer produces a Google rich result (retired 7 May 2026 for
// all sites). It is kept because it still describes the page accurately for
// other consumers, but it should not be counted on for SERP features.
if (types.has('FAQPage')) {
  console.log(`  note: ${types.get('FAQPage')} FAQPage blocks — valid, but no Google rich result since 7 May 2026.`);
}
