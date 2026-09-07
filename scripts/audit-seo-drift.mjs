// SEO drift gate: a committed snapshot of every page's SEO-critical head and
// heading state, and a diff of the current build against it.
//
//   node scripts/audit-seo-drift.mjs           # compare out/ against the baseline
//   node scripts/audit-seo-drift.mjs capture   # accept the current build as the new baseline
//
// Why this exists, when audit-onpage-seo.mjs already runs: that audit answers
// "is every page still well-formed?" — a page keeps a title, a canonical, one
// h1. It cannot answer "did this page's SEO change, and did I mean it to?" A
// refactor that rewrites 157 exam titles, points a canonical at the wrong
// path, or quietly adds `noindex` to a section leaves every page individually
// valid; the whole site's search footprint still moves under you. Nothing in
// this repo recorded the previous state, so there was nothing to notice the
// move against.
//
// The baseline lives in the repo (TAKEMOCKTEST_SEO_BASELINE.json), not in a
// cache directory, for two reasons: it has to survive a fresh clone or a
// throwaway CI container to be worth anything, and the diff of that file is
// itself the useful artefact — "this change moves 157 titles" is visible
// while reviewing, not after a ranking drop.
//
// Severity, and what fails the build:
//   CRITICAL — de-indexing or de-linking: a page that vanished, gained
//     `noindex`, lost or moved its canonical, lost its title or its single h1,
//     or dropped out of the sitemap while still being an indexable page. These
//     are always deliberate when they are correct, so failing on them and
//     making you re-capture is the point, not a nuisance.
//   WARNING — content moved but the page is still indexable the same way:
//     titles, descriptions, h1 text, heading structure, schema payloads.
//     Printed, never fatal; ordinary content work moves these constantly.
//   INFO — additions: new pages, new sitemap entries, a page becoming
//     indexable again.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const SITE_URL = 'https://takemocktest.com';
const outDir = path.join(process.cwd(), 'out');
const baselineFile = path.join(process.cwd(), 'TAKEMOCKTEST_SEO_BASELINE.json');
const mode = process.argv[2] === 'capture' ? 'capture' : 'compare';

if (!fs.existsSync(outDir)) {
  console.error('out/ not found — run `npm run build` first (output: "export" writes the static site there).');
  process.exit(1);
}

const hash = (value) => crypto.createHash('sha256').update(value).digest('hex').slice(0, 12);
const isIndexable = (page) => !!page && !(page.robots ?? '').includes('noindex');

// Heading text as a reader sees it: tags dropped, the entities our own copy
// actually contains decoded, whitespace collapsed. Enough to tell "the h1
// changed" from "the markup around the h1 changed" — a class rename on the
// wrapper must not read as an SEO change.
function textOf(html) {
  return html
    .replace(/<[^>]*>/g, '')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
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

function sitemapUrls() {
  const file = path.join(outDir, 'sitemap.xml');
  if (!fs.existsSync(file)) return new Set();
  const xml = fs.readFileSync(file, 'utf8');
  const urls = new Set();
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    urls.add(match[1].replace(SITE_URL, '').replace(/\/$/, '') || '/');
  }
  return urls;
}

function snapshot() {
  const inSitemap = sitemapUrls();
  const pages = {};
  for (const file of walkHtml(outDir)) {
    const route =
      `/${path.relative(outDir, file).replace(/\\/g, '/').replace(/\.html$/, '')}`.replace(/\/index$/, '') || '/';
    const html = fs.readFileSync(file, 'utf8');

    const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => textOf(m[1]));
    const h2s = [...html.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => textOf(m[1]));
    const schemaBlocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map(
      (m) => m[1],
    );
    const schemaTypes = [];
    for (const block of schemaBlocks) {
      for (const match of block.matchAll(/"@type":"([^"]+)"/g)) schemaTypes.push(match[1]);
    }
    const og = [...html.matchAll(/<meta property="(og:[^"]+)" content="([^"]*)"/g)]
      .map((m) => `${m[1]}=${m[2]}`)
      .sort();

    const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1] ?? null;
    const record = {
      title: html.match(/<title>([^<]*)<\/title>/)?.[1]?.trim() ?? null,
      description: html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? null,
      h1: h1s,
      h2Count: h2s.length,
      h2Hash: hash(h2s.join(' ')),
      // Deduped and sorted: a page emitting its BreadcrumbList before its Quiz
      // instead of after is not a change worth a finding.
      schemaTypes: [...new Set(schemaTypes)].sort(),
      schemaHash: hash(schemaBlocks.join(' ')),
      ogHash: hash(og.join(' ')),
      sitemap: inSitemap.has(route),
    };
    // The canonical is self-referencing on all but a handful of pages, so
    // storing it everywhere would bury a real change under 4,500 lines of
    // noise. Recorded only when it is absent or points somewhere else — which
    // is exactly the case the CRITICAL rule below looks for.
    if (canonical !== `${SITE_URL}${route}`) record.canonical = canonical;
    // Every robots tag on the page, not just the first. A page carrying two of
    // them is a bug in its own right, but Google combines the directives and
    // applies the most restrictive, so reading only the first would let an
    // injected `noindex` pass as still-indexable — which is precisely the
    // change this audit exists to catch.
    const robots = [...html.matchAll(/<meta name="robots" content="([^"]*)"/g)].map((m) => m[1]);
    if (robots.length > 0) record.robots = [...new Set(robots)].join('; ');
    pages[route] = record;
  }
  return {
    capturedAt: new Date().toISOString().slice(0, 10),
    pageCount: Object.keys(pages).length,
    pages,
  };
}

const current = snapshot();

// A standing invariant, not a drift finding: every page we let Google index
// must also be submitted in the sitemap, and nothing we have noindexed may be.
// Drift only reports a page that *stops* being submitted, so a brand-new page
// that ships indexable but unsubmitted would be filed as INFO 'new page' and
// read as normal. It lives here rather than in audit-onpage-seo.mjs only
// because this script already holds both the sitemap set and every page's
// robots value — checking it there would mean a second full walk of 4,584
// files for one comparison.
//
// /theme-1 is the documented exception: a client-side redirect stub kept alive
// so an old preview URL doesn't 404. It carries no canonical and no content,
// so it is deliberately absent from the sitemap (see src/app/theme-1/page.tsx).
const SITEMAP_EXEMPT = new Set(['/theme-1']);
const sitemapErrors = [];
for (const [route, page] of Object.entries(current.pages)) {
  const indexable = isIndexable(page);
  if (indexable && !page.sitemap && !SITEMAP_EXEMPT.has(route)) {
    sitemapErrors.push(`${route}: indexable but missing from sitemap.xml`);
  }
  if (!indexable && page.sitemap) {
    sitemapErrors.push(`${route}: noindexed but still submitted in sitemap.xml`);
  }
}

function reportSitemapErrors() {
  console.error(`Sitemap/robots mismatch — ${sitemapErrors.length}:`);
  for (const error of sitemapErrors.slice(0, 20)) console.error(`  - ${error}`);
  if (sitemapErrors.length > 20) console.error(`  ... and ${sitemapErrors.length - 20} more`);
}

if (mode === 'capture') {
  // Refuse to freeze a broken state into the baseline: once captured, the
  // mismatch stops being a finding and starts being the expected value.
  if (sitemapErrors.length > 0) {
    reportSitemapErrors();
    console.error('\nBaseline NOT captured — fix the mismatch first, or add a documented exemption.');
    process.exit(1);
  }
  fs.writeFileSync(baselineFile, `${JSON.stringify(current, null, 1)}\n`);
  const sizeKb = Math.round(fs.statSync(baselineFile).size / 1024);
  console.log(`SEO baseline captured: ${current.pageCount} pages, ${sizeKb} KB -> ${path.basename(baselineFile)}`);
  console.log('  Review the diff of that file before committing — it is the record of what this change moved.');
  process.exit(0);
}

if (!fs.existsSync(baselineFile)) {
  console.error(`SEO drift: no baseline found at ${path.basename(baselineFile)}.`);
  console.error('  Run `npm run seo:baseline` once on a build you trust, then commit the file.');
  process.exit(1);
}

const baseline = JSON.parse(fs.readFileSync(baselineFile, 'utf8'));
const findings = { CRITICAL: [], WARNING: [], INFO: [] };
const add = (severity, rule, detail) => findings[severity].push({ rule, detail });

for (const [route, before] of Object.entries(baseline.pages)) {
  const after = current.pages[route];
  if (!after) {
    add('CRITICAL', 'page removed', route);
    continue;
  }
  if (isIndexable(before) && !isIndexable(after)) {
    add('CRITICAL', 'page noindexed', `${route} — robots now "${after.robots}"`);
  }
  if (!isIndexable(before) && isIndexable(after)) add('INFO', 'page indexable again', route);

  if (before.canonical !== after.canonical) {
    add('CRITICAL', 'canonical changed', `${route} — ${before.canonical ?? '(self)'} -> ${after.canonical ?? '(self)'}`);
  }
  if (before.title && !after.title) add('CRITICAL', 'title removed', route);
  // Only for a page that was well-formed before: one that already had zero or
  // several h1s is audit-onpage-seo's problem, not a drift finding.
  if (before.h1.length === 1 && after.h1.length !== 1) {
    add('CRITICAL', 'h1 count broken', `${route} — 1 -> ${after.h1.length}`);
  }
  if (before.sitemap && !after.sitemap && isIndexable(after)) {
    add('CRITICAL', 'dropped from sitemap', `${route} — still indexable, no longer submitted`);
  }

  if (before.title && after.title && before.title !== after.title) {
    add('WARNING', 'title changed', `${route}\n      was: ${before.title}\n      now: ${after.title}`);
  }
  if (before.description && !after.description) add('WARNING', 'description removed', route);
  else if (before.description !== after.description) add('WARNING', 'description changed', route);
  if (before.h1.length === after.h1.length && before.h1.join('|') !== after.h1.join('|')) {
    add('WARNING', 'h1 text changed', `${route}\n      was: ${before.h1.join(' / ')}\n      now: ${after.h1.join(' / ')}`);
  }
  const lostTypes = before.schemaTypes.filter((type) => !after.schemaTypes.includes(type));
  if (lostTypes.length > 0) add('WARNING', 'schema type removed', `${route} — lost ${lostTypes.join(', ')}`);
  else if (before.schemaHash !== after.schemaHash) add('WARNING', 'schema content changed', route);
  if (before.h2Hash !== after.h2Hash) {
    add('WARNING', 'headings changed', `${route} — ${before.h2Count} -> ${after.h2Count} h2`);
  }
  if (before.ogHash !== after.ogHash) add('INFO', 'open graph changed', route);
  if (!before.sitemap && after.sitemap) add('INFO', 'added to sitemap', route);
}

for (const route of Object.keys(current.pages)) {
  if (!(route in baseline.pages)) add('INFO', 'new page', route);
}

// Findings are per page but causes are per template, so one refactor produces
// thousands of near-identical rows. Group by rule and show a few of each, or
// the real signal scrolls past.
const SHOWN_PER_RULE = 5;
console.log(`SEO drift vs baseline of ${baseline.capturedAt}: ${baseline.pageCount} -> ${current.pageCount} pages`);
for (const severity of ['CRITICAL', 'WARNING', 'INFO']) {
  const rows = findings[severity];
  if (rows.length === 0) continue;
  const byRule = new Map();
  for (const row of rows) {
    if (!byRule.has(row.rule)) byRule.set(row.rule, []);
    byRule.get(row.rule).push(row.detail);
  }
  const log = severity === 'CRITICAL' ? console.error : console.log;
  log(`\n${severity} — ${rows.length}:`);
  for (const [rule, details] of [...byRule].sort((a, b) => b[1].length - a[1].length)) {
    log(`  ${rule} (${details.length}):`);
    for (const detail of details.slice(0, SHOWN_PER_RULE)) log(`    - ${detail}`);
    if (details.length > SHOWN_PER_RULE) log(`    ... and ${details.length - SHOWN_PER_RULE} more`);
  }
}

if (sitemapErrors.length > 0) {
  console.error('');
  reportSitemapErrors();
}

if (findings.CRITICAL.length > 0) {
  console.error(
    `\nSEO drift audit FAILED — ${findings.CRITICAL.length} critical change${findings.CRITICAL.length === 1 ? '' : 's'}.`,
  );
  console.error('  If every one is intended, accept them with `npm run seo:baseline` and commit the updated baseline.');
  process.exit(1);
}
if (sitemapErrors.length > 0) {
  console.error(`\nSEO drift audit FAILED — ${sitemapErrors.length} sitemap/robots mismatch(es).`);
  process.exit(1);
}
const indexable = Object.values(current.pages).filter(isIndexable).length;
if (findings.WARNING.length === 0 && findings.INFO.length === 0) {
  console.log('  No drift — every page matches the baseline.');
} else {
  console.log('\nSEO drift audit passed — no critical changes.');
}
console.log(`  ${indexable} indexable pages, all submitted in the sitemap; no noindexed page is.`);
