// Fails the build when a set of generated pages becomes mostly boilerplate.
// Run after `npm run build`, against the static export in out/.
//
// Why this exists: sections generated from a template are the site's most
// scalable content and its easiest way to earn a thin-content demotion. The
// failure is silent — every page builds, validates and looks fine on its own;
// only by comparing pages to each other does it show up. When the topic
// practice section first shipped, 48% of each page's main content was text
// that also appeared on another page in the same section, because the FAQ
// answers were one template with the topic name substituted in.
//
// Method: chop each page's main content into overlapping 8-word shingles and
// measure how many of them appear on at least one sibling page. That is a
// direct measure of "how much of this page is not about this page".
import fs from 'node:fs';
import path from 'node:path';

const out = path.join(process.cwd(), 'out');
if (!fs.existsSync(out)) {
  console.error('audit-thin-content: out/ not found — run `npm run build` first.');
  process.exit(1);
}

// Ceilings are set a little above where a healthy section actually sits, so
// ordinary copy edits never trip them but a slide back to templated prose does.
// Only INDEXABLE generated sections belong here: a noindexed page cannot earn
// a thin-content demotion, so measuring it would just produce noise that gets
// ignored, and an ignored gate is worse than no gate. The Logical Reasoning
// set pages are deliberately absent for exactly that reason — they are
// noindexed products, not landing pages.
const SECTIONS = [
  { name: 'Topic practice', dir: 'in/practice', maxDuplicateShare: 0.4, minWords: 450 },
];

const SHINGLE = 8;
const errors = [];
const notes = [];

function mainText(file) {
  let html = fs.readFileSync(file, 'utf8');
  html = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<style[\s\S]*?<\/style>/g, '');
  // Body copy only: the site chrome is identical everywhere by design and
  // would drown out the signal we are actually looking for.
  const match = html.match(/<h1[^>]*>([\s\S]*?)<footer/);
  const segment = match ? match[1] : html;
  return segment
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z]+;|&#\d+;/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

for (const section of SECTIONS) {
  const dir = path.join(out, section.dir);
  if (!fs.existsSync(dir)) {
    errors.push(`${section.name}: ${section.dir} not found in out/ — is the section still built?`);
    continue;
  }
  const files = fs
    .readdirSync(dir)
    .filter((name) => name.endsWith('.html'))
    .map((name) => path.join(dir, name));
  if (files.length < 2) continue;

  const docs = files.map((file) => ({ name: path.basename(file, '.html'), words: mainText(file).split(' ') }));

  const thin = docs.filter((doc) => doc.words.length < section.minWords);
  for (const doc of thin) {
    errors.push(
      `${section.name}/${doc.name}: only ${doc.words.length} words of main content (floor ${section.minWords})`,
    );
  }

  const shingles = new Map();
  const counts = new Map();
  for (const doc of docs) {
    const set = new Set();
    for (let i = 0; i + SHINGLE <= doc.words.length; i += 1) set.add(doc.words.slice(i, i + SHINGLE).join(' '));
    shingles.set(doc.name, set);
    for (const shingle of set) counts.set(shingle, (counts.get(shingle) ?? 0) + 1);
  }

  let worstName = '';
  let worst = 0;
  let total = 0;
  for (const doc of docs) {
    const set = shingles.get(doc.name);
    if (set.size === 0) continue;
    let shared = 0;
    for (const shingle of set) if (counts.get(shingle) > 1) shared += 1;
    const share = shared / set.size;
    total += share;
    if (share > worst) {
      worst = share;
      worstName = doc.name;
    }
    if (share > section.maxDuplicateShare) {
      errors.push(
        `${section.name}/${doc.name}: ${Math.round(share * 100)}% of its main content also appears on another ` +
          `page in the same section (ceiling ${Math.round(section.maxDuplicateShare * 100)}%) — the template is ` +
          'doing more work than the data is',
      );
    }
  }
  notes.push(
    `${section.name}: ${docs.length} pages, average ${Math.round((total / docs.length) * 100)}% shared content, ` +
      `worst ${Math.round(worst * 100)}% (${worstName})`,
  );
}

if (errors.length > 0) {
  console.error(`Thin-content audit FAILED — ${errors.length} problem${errors.length === 1 ? '' : 's'}:`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}
console.log('Thin-content audit passed:');
for (const note of notes) console.log(`  - ${note}`);
