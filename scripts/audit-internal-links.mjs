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

const HUB = '/in/logical-reasoning';
// Floor, not a target: the hub currently earns far more inbound exam links
// than this. It is set low enough that ordinary content churn (an exam
// retired, a bank renamed) never trips it, and high enough that a refactor
// which drops the exam-page link block entirely does.
const MIN_EXAM_INBOUND = 25;

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

// 1. Every internal link on every hub page must resolve.
const hubPages = htmlFiles.filter((file) => {
  const rel = `/${path.relative(out, file).replace(/\\/g, '/').replace(/\.html$/, '')}`;
  return rel === HUB || rel.startsWith(`${HUB}/`);
});
if (hubPages.length === 0) errors.push('no hub pages found in out/ — is the hub still built?');

let checkedHubLinks = 0;
for (const file of hubPages) {
  const rel = path.relative(out, file);
  const html = fs.readFileSync(file, 'utf8');
  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const url = match[1];
    if (url.startsWith('//')) continue;
    checkedHubLinks += 1;
    if (!resolves(url)) errors.push(`${rel}: dead internal link ${url}`);
  }
}

// 2. The hub must be reachable from outside itself, from all three routes we
//    rely on: the homepage band, the site chrome, and the exam test pages.
const inbound = { homepage: 0, chrome: 0, examTests: 0 };
for (const file of htmlFiles) {
  const rel = `/${path.relative(out, file).replace(/\\/g, '/').replace(/\.html$/, '')}`;
  if (rel === HUB || rel.startsWith(`${HUB}/`)) continue;
  const html = fs.readFileSync(file, 'utf8');
  if (!html.includes(`href="${HUB}"`) && !html.includes(`href="${HUB}/`)) continue;
  if (rel === '/in') inbound.homepage += 1;
  if (/\/in\/[^/]+\/test\/[^/]+$/.test(rel)) inbound.examTests += 1;
  inbound.chrome += 1;
}
if (inbound.homepage === 0) errors.push('the homepage no longer links to the Logical Reasoning hub');
if (inbound.chrome < 100) {
  errors.push(`only ${inbound.chrome} pages link to the hub — the header/footer link looks lost`);
}
if (inbound.examTests < MIN_EXAM_INBOUND) {
  errors.push(
    `only ${inbound.examTests} exam test pages link to the hub (floor ${MIN_EXAM_INBOUND}) — ` +
      'the reasoning-hub block on the exam test page template looks lost',
  );
}

if (errors.length > 0) {
  console.error(`Internal-link audit FAILED — ${errors.length} problem${errors.length === 1 ? '' : 's'}:`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}
console.log(
  `Internal-link audit passed — ${hubPages.length} hub pages, ${checkedHubLinks} outgoing links all resolve; ` +
    `hub linked from the homepage, ${inbound.chrome} pages of site chrome, and ${inbound.examTests} exam test pages.`,
);
