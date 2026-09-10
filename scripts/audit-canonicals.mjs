// Fails the build when a page's canonical points somewhere it must not.
//
//   npm run build && node scripts/audit-canonicals.mjs
//
// Why this exists: on 10 September 2026 five indexable pages under /ng declared
// a canonical pointing into /in, at URLs that were never built. /ng/jamb/mock-test
// named /in/jamb/mock-test as its canonical, and JAMB is a Nigeria-only exam, so
// that page does not exist. A canonical aimed at a 404 tells Google the real page
// is not the one to index, which would have quietly removed the entire JAMB
// beachhead from search.
//
// The cause was twenty-three hardcoded "/in/..." path strings across fourteen
// route files that all live under [country]. They predate the second country and
// nothing failed when it arrived, because a wrong canonical breaks nothing at
// build time and nothing in the browser. It only shows up in Search Console
// weeks later. The same strings also fed hreflang and Open Graph, so those pages
// emitted no hreflang set at all.
//
// Three rules, all of which the fixed build satisfies:
//
//   1. Every indexable page has a canonical.
//   2. A canonical must resolve to a page that was actually built.
//   3. A country-scoped page must be its own canonical, never another country's.
//      Regional versions of the same language are alternates of each other, not
//      duplicates of one another, so each one self-references and hreflang does
//      the relating.
import fs from 'node:fs';
import path from 'node:path';

const outDir = path.join(process.cwd(), 'out');
if (!fs.existsSync(outDir)) {
  console.error('out/ not found — run `npm run build` first.');
  process.exit(1);
}

const ORIGIN = 'https://takemocktest.com';
// Same exemptions as audit-onpage-seo.mjs: the generated 404 and a redirect stub.
const NO_CANONICAL_EXPECTED = new Set(['404.html', 'theme-1.html']);

function walkHtml(dir) {
  const found = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) found.push(...walkHtml(full));
    else if (entry.name.endsWith('.html')) found.push(full);
  }
  return found;
}

const files = walkHtml(outDir);
const built = new Set(
  files.map((file) => `/${path.relative(outDir, file).replace(/\\/g, '/').replace(/\.html$/, '')}`),
);
// A country segment is the first path segment where a page for it exists.
const countries = new Set(
  [...built].map((route) => route.split('/')[1]).filter((segment) => /^[a-z]{2}$/.test(segment)),
);

const errors = [];
let checked = 0;

for (const file of files) {
  const rel = path.relative(outDir, file).replace(/\\/g, '/');
  if (NO_CANONICAL_EXPECTED.has(path.basename(file))) continue;
  const html = fs.readFileSync(file, 'utf8');
  if (/<meta name="robots" content="[^"]*noindex/i.test(html)) continue;
  checked += 1;

  const match = /<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i.exec(html);
  if (!match) {
    errors.push(`${rel}: indexable page has no canonical`);
    continue;
  }
  const canonical = match[1];
  if (!canonical.startsWith(ORIGIN)) {
    errors.push(`${rel}: canonical is not an absolute URL on this origin (${canonical})`);
    continue;
  }
  const route = canonical.slice(ORIGIN.length).replace(/\/$/, '') || '/';
  if (!built.has(route)) {
    errors.push(`${rel}: canonical points at ${canonical}, which was not built`);
    continue;
  }

  const pageCountry = rel.split('/')[0].replace(/\.html$/, '');
  const canonicalCountry = route.split('/')[1];
  if (countries.has(pageCountry) && countries.has(canonicalCountry) && pageCountry !== canonicalCountry) {
    errors.push(
      `${rel}: a /${pageCountry} page canonicalises to /${canonicalCountry} (${canonical}). ` +
        'Regional versions self-reference; hreflang relates them.',
    );
  }
}

if (errors.length > 0) {
  console.error(`Canonical audit failed on ${errors.length} page(s):\n`);
  for (const error of errors.slice(0, 30)) console.error(`  - ${error}`);
  if (errors.length > 30) console.error(`  ... and ${errors.length - 30} more`);
  process.exit(1);
}

console.log(`Canonical audit passed: ${checked} indexable pages, every canonical self-references a built URL in its own country.`);
