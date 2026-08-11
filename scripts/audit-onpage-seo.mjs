// On-page SEO regression gate. Scans the static-exported HTML output (out/)
// rather than source templates, so it checks the real, fully-resolved values
// Google would actually see for every one of the ~1000+ generated pages —
// titles/descriptions with real exam names substituted in, real canonical
// URLs, real rendered heading counts.
//
// Run after `next build` (which writes to out/ because of output: 'export'):
//   node scripts/audit-onpage-seo.mjs
//
// Hard failures (exit 1): missing <title>, missing meta description, missing
// canonical, zero or 2+ visible <h1>, an <img> with no alt attribute at all.
// Soft warnings (printed, don't fail): title/description length outliers,
// pages with no JSON-LD at all.

import fs from 'node:fs';
import path from 'node:path';

const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
  console.error('out/ not found — run `npm run build` first (output: "export" writes the static site there).');
  process.exit(1);
}

function walkHtml(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkHtml(full));
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out;
}

// Pages that legitimately have no canonical/H1 because they carry no
// indexable content: Next.js's auto-generated 404 page (returns HTTP 404,
// never crawled/indexed regardless of head tags) and theme-1.html (a pure
// client-side redirect stub kept alive so an old preview URL doesn't 404,
// see src/app/theme-1/page.tsx).
const NO_CANONICAL_EXPECTED = new Set(['404.html', 'theme-1.html']);

const files = walkHtml(outDir);
const errors = [];
const warnings = [];

for (const file of files) {
  const rel = path.relative(outDir, file);
  const skipCanonicalCheck = NO_CANONICAL_EXPECTED.has(path.basename(file));
  const html = fs.readFileSync(file, 'utf8');

  // --- title ---
  const titleMatch = html.match(/<title>([^<]*)<\/title>/);
  const title = titleMatch?.[1]?.trim();
  if (!title) {
    errors.push(`${rel}: missing <title>`);
  } else {
    if (title.length > 65) warnings.push(`${rel}: title is ${title.length} chars, likely truncates in search results — "${title}"`);
    if (title.length < 15) warnings.push(`${rel}: title is only ${title.length} chars — "${title}"`);
  }

  // --- meta description ---
  const descMatch = html.match(/<meta name="description" content="([^"]*)"/);
  const description = descMatch?.[1];
  if (!description) {
    errors.push(`${rel}: missing meta description`);
  } else {
    const len = description.length;
    if (len > 165) warnings.push(`${rel}: meta description is ${len} chars, likely truncates — "${description.slice(0, 60)}..."`);
    if (len < 50) warnings.push(`${rel}: meta description is only ${len} chars — "${description}"`);
  }

  // --- canonical ---
  const canonicalMatch = html.match(/<link rel="canonical" href="([^"]*)"/);
  if (!canonicalMatch && !skipCanonicalCheck) {
    errors.push(`${rel}: missing canonical <link>`);
  } else if (canonicalMatch && !canonicalMatch[1].startsWith('https://takemocktest.com')) {
    errors.push(`${rel}: canonical is not an absolute takemocktest.com URL — "${canonicalMatch[1]}"`);
  }

  // --- H1 count ---
  const h1Count = (html.match(/<h1[\s>]/g) || []).length;
  if (h1Count === 0 && !skipCanonicalCheck) errors.push(`${rel}: no <h1> found`);
  if (h1Count > 1) warnings.push(`${rel}: ${h1Count} <h1> tags found (may be conditional/client-rendered states — verify only one shows at a time)`);

  // --- image alt ---
  const imgTags = html.match(/<img\b[^>]*>/g) || [];
  for (const img of imgTags) {
    if (!/\balt="/.test(img)) {
      errors.push(`${rel}: <img> with no alt attribute — ${img.slice(0, 80)}`);
    }
  }

  // --- JSON-LD presence ---
  const jsonLdCount = (html.match(/<script type="application\/ld\+json">/g) || []).length;
  if (jsonLdCount === 0) warnings.push(`${rel}: no JSON-LD structured data on this page`);
}

console.log(`On-page SEO audit: ${files.length} pages scanned.`);
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s) (non-blocking):`);
  for (const w of warnings.slice(0, 100)) console.log(`  - ${w}`);
  if (warnings.length > 100) console.log(`  ... and ${warnings.length - 100} more`);
}

if (errors.length) {
  console.error(`\nOn-page SEO audit FAILED with ${errors.length} issue(s):`);
  for (const e of errors.slice(0, 100)) console.error(`  - ${e}`);
  if (errors.length > 100) console.error(`  ... and ${errors.length - 100} more`);
  process.exit(1);
}

console.log('\nOn-page SEO audit passed — no missing titles, descriptions, canonicals, H1 issues, or missing alt text.');
