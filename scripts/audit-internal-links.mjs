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
//   countries: which subfolders publish the section. Both of these sections
//     exist under /ng as well as /in as of 8 September 2026, and auditing only
//     India would have left Nigeria's pages unchecked for dead links, which is
//     precisely where they were most likely: its chrome hides the links to
//     sections it does not publish, and a missed conditional there would be a
//     dead link on every page of a brand-new subfolder.
//   minExamInbound applies only to a country that publishes exams; a country
//     with none cannot offer the section from an exam page it does not have.
const SECTION_TEMPLATES = [
  {
    name: 'Logical Reasoning hub',
    path: '/logical-reasoning',
    offerMarker: 'id="reasoning-hub"',
    minExamInbound: 150,
    countries: ['in', 'ng'],
  },
  {
    name: 'Topic practice',
    path: '/practice',
    offerMarker: null,
    minExamInbound: 0,
    countries: ['in', 'ng'],
  },
];

const COUNTRIES_WITH_EXAMS = new Set(['in']);

const SECTIONS = SECTION_TEMPLATES.flatMap((template) =>
  template.countries.map((country) => ({
    name: `${template.name} (/${country})`,
    root: `/${country}${template.path}`,
    offerMarker: COUNTRIES_WITH_EXAMS.has(country) ? template.offerMarker : null,
    minExamInbound: COUNTRIES_WITH_EXAMS.has(country) ? template.minExamInbound : 0,
  })),
);

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
    if (rel === `/${section.root.split('/')[1]}`) inbound.homepage += 1;
    if (section.offerMarker && html.includes(section.offerMarker)) inbound.examTests += 1;
    inbound.chrome += 1;
  }
  if (inbound.homepage === 0) errors.push(`${section.name}: the homepage no longer links to it`);
  // The floor is a share of the country's own pages, not a flat number: /in has
  // ~4,750 pages and /ng has ~150, so a single figure would either be trivially
  // met by India or unmeetable by a new subfolder.
  //
  // The denominator counts only pages that could possibly be in the numerator:
  // the section's own pages are skipped by the loop above (a page linking to
  // its own section proves nothing about the chrome), so counting them in the
  // total sets a floor no build can clear. On /ng that was not hypothetical —
  // 66 of the 147 pages sit outside /ng/practice, every one of them carried the
  // link, and the audit still failed demanding 74.
  const countryPages = htmlFiles.filter((file) => {
    const rel = `/${path.relative(out, file).replace(/\\/g, '/').replace(/\.html$/, '')}`;
    return rel.startsWith(`/${section.root.split('/')[1]}/`) && !inSection(rel);
  }).length;
  const chromeFloor = Math.max(20, Math.floor(countryPages / 2));
  if (inbound.chrome < chromeFloor) {
    errors.push(
      `${section.name}: only ${inbound.chrome} of ${countryPages} pages outside the section ` +
        `link to it (floor ${chromeFloor}) — the header/footer link looks lost`,
    );
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

// 4. Every internal link on every page of the site must resolve.
//
// The section checks above only look inside the sections they own, which was
// enough while one country generated every page. It stopped being enough the
// moment a country published a section without publishing everything in it:
// Nigeria lists one exam, and the directory index, the SSC CGL typing-practice
// route and the footer all still pointed at India's. Thirteen dead links on two
// pages, none of them in a section this audit was watching. A whole-site sweep
// is cheap and does not need to know which sections exist.
let sweptLinks = 0;
const deadBySource = new Map();
for (const file of htmlFiles) {
  const rel = path.relative(out, file).replace(/\\/g, '/');
  const html = fs.readFileSync(file, 'utf8');
  for (const match of new Set([...html.matchAll(/href="(\/[^"]*)"/g)].map((m) => m[1]))) {
    if (match.startsWith('//')) continue;
    sweptLinks += 1;
    if (!resolves(match)) {
      if (!deadBySource.has(rel)) deadBySource.set(rel, new Set());
      deadBySource.get(rel).add(match);
    }
  }
}
for (const [rel, targets] of deadBySource) {
  errors.push(`${rel}: ${targets.size} dead internal link${targets.size === 1 ? '' : 's'} (${[...targets].sort().slice(0, 4).join(', ')}${targets.size > 4 ? ', ...' : ''})`);
}
summaries.push(`Whole site: ${sweptLinks} distinct internal links across ${htmlFiles.length} pages all resolve`);

// Resolving is not the same as being linked. Every check above asks whether a
// link points somewhere real; none of them asks whether a page has any link
// pointing at it. That gap hid four separate defects at once: the mock-test
// stage tabs rendered only the first stage, so 224 test pages existed with no
// link anywhere in the HTML; the exam tab bar tested for a hand-written guide
// rather than asking whether the syllabus page was published, hiding 40 more;
// Eligibility, Selection process, Salary, Cutoff, Result, Admit card and
// Answer key had no tab at all; and seven published exams were missing a
// liveSlug, so their clusters were islands. 232 indexable pages with zero
// inbound links, and 378 a crawler starting at the country home could not
// reach, every one of them in the sitemap and every check passing.
//
// A sitemap entry is a discovery hint. A link is what carries weight and what
// a crawler follows, so an indexable page with none is a page this site is
// asking search engines to rank while telling them, structurally, that it does
// not matter. Both numbers are asserted at zero rather than reported, because
// they were at zero only after someone went looking.
const indexable = new Map();
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  if (/<meta name="robots" content="[^"]*noindex/i.test(html)) continue;
  const url = '/' + path.relative(out, file).replace(/\\/g, '/').replace(/\.html$/, '');
  indexable.set(url, html);
}
const inboundCount = new Map([...indexable.keys()].map((url) => [url, 0]));
const linkGraph = new Map();
for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  const from = '/' + path.relative(out, file).replace(/\\/g, '/').replace(/\.html$/, '');
  const targets = new Set();
  for (const match of new Set([...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1].replace(/\/$/, '')))) {
    targets.add(match);
    if (match !== from && inboundCount.has(match)) inboundCount.set(match, inboundCount.get(match) + 1);
  }
  linkGraph.set(from, targets);
}
const orphans = [...inboundCount].filter(([, count]) => count === 0).map(([url]) => url);
if (orphans.length > 0) {
  errors.push(
    `${orphans.length} indexable page${orphans.length === 1 ? ' has' : 's have'} no inbound internal link ` +
      `(${orphans.slice(0, 4).join(', ')}${orphans.length > 4 ? ', ...' : ''}) — being in the sitemap is not being linked`,
  );
}

// Reachability from each country home, which is stricter than having one
// inbound link: a cluster that only links to itself passes the orphan check
// and is still an island. Each country tree is walked from its own home,
// because /in does not link to /ng by design and should not.
const countryHomes = [...new Set([...indexable.keys()].map((url) => '/' + url.split('/')[1]))].filter((home) =>
  indexable.has(home),
);
const reached = new Set();
for (const home of countryHomes) {
  const queue = [home];
  reached.add(home);
  while (queue.length > 0) {
    const current = queue.shift();
    for (const next of linkGraph.get(current) ?? []) {
      if (!reached.has(next) && linkGraph.has(next)) {
        reached.add(next);
        queue.push(next);
      }
    }
  }
}
const unreachable = [...indexable.keys()].filter((url) => !reached.has(url));
if (unreachable.length > 0) {
  errors.push(
    `${unreachable.length} indexable page${unreachable.length === 1 ? ' is' : 's are'} unreachable by following links ` +
      `from ${countryHomes.join(' or ')} (${unreachable.slice(0, 4).join(', ')}${unreachable.length > 4 ? ', ...' : ''})`,
  );
}
const inboundValues = [...inboundCount.values()].sort((a, b) => a - b);
const median = inboundValues[Math.floor(inboundValues.length / 2)];
summaries.push(
  `Reachability: all ${indexable.size} indexable pages have an inbound link and are reachable from ` +
    `${countryHomes.join(' / ')}; median inbound links per page ${median}`,
);

// The thin end of the link graph, gated as a ratchet.
//
// Reachability and the orphan check both pass on one inbound link, and one
// inbound link is not a healthy page: Search Console files those under
// "Discovered, currently not indexed", which on 22 September 2026 covered 195
// of 282 sampled URLs. 280 indexable pages were on one or two links that day,
// and none of the gates above noticed, because every one of them was reachable
// and every link resolved.
//
// The cause was one shape repeated in four places: rank candidates, slice the
// top N. A stable ranking hands every page of a section the same N, so
// everything below the cut gets nothing. Rotating inside the ranking (see
// src/lib/rotate.ts) took the count to 101.
//
// The ceiling is a little above that, not a target. What remains is mostly
// structural: 34 of the starved test pages belong to exams publishing two or
// fewer indexable tests, so there is no sibling to link them from. Lower this
// when real work lowers the number; do not raise it to make a build pass.
const STARVED_CEILING = 110;
const STARVED_THRESHOLD = 2;
const starved = [...indexable.keys()].filter((url) => (inboundCount.get(url) ?? 0) <= STARVED_THRESHOLD);
if (starved.length > STARVED_CEILING) {
  errors.push(
    `${starved.length} indexable pages have ${STARVED_THRESHOLD} or fewer inbound internal links, over the ceiling of ` +
      `${STARVED_CEILING}. Something is picking related items by slicing a ranked list; rotate it instead ` +
      `(src/lib/rotate.ts). Worst: ${starved.slice(0, 4).join(', ')}${starved.length > 4 ? ', ...' : ''}`,
  );
} else {
  summaries.push(
    `Link-equity tail: ${starved.length} indexable pages on ${STARVED_THRESHOLD} or fewer inbound links ` +
      `(ceiling ${STARVED_CEILING}); 10th percentile ${inboundValues[Math.floor(inboundValues.length / 10)]}`,
  );
}

if (errors.length > 0) {
  console.error(`Internal-link audit FAILED — ${errors.length} problem${errors.length === 1 ? '' : 's'}:`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}
console.log('Internal-link audit passed:');
for (const summary of summaries) console.log(`  - ${summary}`);
