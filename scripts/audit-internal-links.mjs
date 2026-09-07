// Fails the build if the Logical Reasoning hub is orphaned or any of its links
// are broken. Run after `npm run build`, against the static export in out/.
//
// Why this exists: the hub is the one section on this site that no exam owns.
// Every other page is reachable because some exam's own navigation leads to
// it; the hub is reachable only because we deliberately linked it from the
// homepage, the site chrome, and the exam test pages that contain reasoning.
// Any of those links can be removed by an unrelated refactor without anything
// failing — the page would still build, still be in the sitemap, and quietly
// stop being findable. This turns that silent failure into a red build.
import fs from 'node:fs';
import path from 'node:path';

const out = path.join(process.cwd(), 'out');
if (!fs.existsSync(out)) {
  console.error('audit-internal-links: out/ not found — run `npm run build` first.');
  process.exit(1);
}

// Every section that no exam owns, and that nothing else therefore keeps
// reachable. Add a row when a new one ships.
//   offerMarker: heading id of the in-context block on exam test pages, where
//     the section has one. Identified by the block's OWN id, never by the
//     presence of a link: the header and footer put a link on every page of
//     the site, so counting links would count the chrome and pass even if the
//     block were deleted — the exact silent failure this audit exists to catch.
//   minExamInbound: floor on exam test pages carrying that block. Set low
//     enough that ordinary content churn never trips it, high enough that a
//     refactor dropping the block does. 0 means the section has no such block.
const SECTIONS = [
  {
    name: 'Logical Reasoning hub',
    root: '/in/logical-reasoning',
    offerMarker: 'id="reasoning-hub"',
    minExamInbound: 150,
  },
  {
    name: 'Topic practice',
    root: '/in/practice',
    offerMarker: null,
    minExamInbound: 0,
  },
];

const errors = [];
const htmlFiles = [];
(function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) htmlFiles.push(full);
  }
})(out);

const resolves = (url) => {
  const clean = url.split('#')[0].split('?')[0].replace(/\/$/, '');
  if (clean === '') return true;
  const rel = clean.replace(/^\//, '');
  return (
    fs.existsSync(path.join(out, `${rel}.html`)) ||
    fs.existsSync(path.join(out, rel, 'index.html')) ||
    fs.existsSync(path.join(out, rel))
  );
};

const summaries = [];
for (const section of SECTIONS) {
  const inSection = (rel) => rel === section.root || rel.startsWith(`${section.root}/`);

  // 1. Every internal link on every page of the section must resolve.
  const pages = htmlFiles.filter((file) =>
    inSection(`/${path.relative(out, file).replace(/\\/g, '/').replace(/\.html$/, '')}`),
  );
  if (pages.length === 0) {
    errors.push(`${section.name}: no pages found in out/ — is the section still built?`);
    continue;
  }
  let checkedLinks = 0;
  for (const file of pages) {
    const rel = path.relative(out, file);
    const html = fs.readFileSync(file, 'utf8');
    for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
      const url = match[1];
      if (url.startsWith('//')) continue;
      checkedLinks += 1;
      if (!resolves(url)) errors.push(`${rel}: dead internal link ${url}`);
    }
  }

  // 2. The section must be reachable from outside itself: the homepage band,
  //    the site chrome, and (where it has one) the in-context exam-page block.
  const inbound = { homepage: 0, chrome: 0, examTests: 0 };
  for (const file of htmlFiles) {
    const rel = `/${path.relative(out, file).replace(/\\/g, '/').replace(/\.html$/, '')}`;
    if (inSection(rel)) continue;
    const html = fs.readFileSync(file, 'utf8');
    if (!html.includes(`href="${section.root}"`) && !html.includes(`href="${section.root}/`)) continue;
    if (rel === '/in') inbound.homepage += 1;
    if (section.offerMarker && html.includes(section.offerMarker)) inbound.examTests += 1;
    inbound.chrome += 1;
  }
  if (inbound.homepage === 0) errors.push(`${section.name}: the homepage no longer links to it`);
  if (inbound.chrome < 100) {
    errors.push(`${section.name}: only ${inbound.chrome} pages link to it — the header/footer link looks lost`);
  }
  if (section.minExamInbound > 0 && inbound.examTests < section.minExamInbound) {
    errors.push(
      `${section.name}: only ${inbound.examTests} exam test pages carry its offer block ` +
        `(floor ${section.minExamInbound}) — the block on the exam test page template looks lost`,
    );
  }

  summaries.push(
    `${section.name}: ${pages.length} pages, ${checkedLinks} outgoing links all resolve; ` +
      `linked from the homepage and ${inbound.chrome} pages of chrome` +
      (section.minExamInbound > 0 ? `, offered by ${inbound.examTests} exam test pages` : ''),
  );
}

if (errors.length > 0) {
  console.error(`Internal-link audit FAILED — ${errors.length} problem${errors.length === 1 ? '' : 's'}:`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}
console.log('Internal-link audit passed:');
for (const summary of summaries) console.log(`  - ${summary}`);
