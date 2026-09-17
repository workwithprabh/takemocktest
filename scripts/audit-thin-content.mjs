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
  // The blog was outside this audit until 10 September 2026, which left the
  // site's most template-shaped prose section unmeasured: 61 posts sharing one
  // block renderer and cross-linking each other heavily are exactly the shape
  // that drifts into boilerplate without anyone noticing page by page. It is
  // healthy today (10.9% average shared, worst 16.1% on coaching-vs-self-study,
  // shortest post 717 words), so the ceiling is set where topic practice's is
  // relative to its own reading: a little above the worst honest page, so a
  // copy edit never trips it but a slide back to templated prose does.
  { name: 'Blog', dir: 'in/blog', maxDuplicateShare: 0.25, minWords: 600 },
  // Exam pattern pages went unmeasured until 16 September 2026 because they do
  // not sit in a flat directory: they are in/<exam>/exam-pattern.html, one per
  // exam, so a readdir of a single folder never saw them. That exemption hid
  // the worst reading on the site. Every sentence on them is derived from the
  // stage's own pattern, which is honest but means two exams with the same
  // published pattern get the same page: KVS PRT and NVS TGT both set 100
  // questions for 300 marks in 120 minutes with a 1-mark deduction over the
  // same six sections, so 73% of each page also appears on the other.
  //
  // The ceilings below are a ratchet at today's reading, not a standard. 43%
  // average would fail either section above. They are here so the number is
  // printed on every run and cannot quietly get worse, and they come down each
  // time a batch of hand-written per-exam copy lands. Four batches so far, 76
  // of the 141 pages: worst page 73% to 64%, pairs above 50% shared from 26 to
  // 5, section average 47.2% to 42.4%. The third and fourth batches each moved
  // the average about a point and the pair list not at all, which is the
  // marginal return to expect from here.
  //
  // What is left is mostly the floor rather than the drift. The five pairs
  // still above 50% all carry hand-written copy already, and they stay high
  // because their papers are identical: the section table, the derived summary
  // and the marking notes are the same text when the pattern is the same. On a
  // 600-word page, 90 words of hand-written copy moves a genuine twin about ten
  // points and no further. Going below that means writing a much larger share
  // of each of those pages, not another batch of the same size.
  {
    name: 'Exam pattern',
    glob: (entry) => `in/${entry}/exam-pattern.html`,
    maxDuplicateShare: 0.65,
    maxAverageDuplicateShare: 0.43,
    minWords: 300,
  },
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
  // A section is either a flat folder of pages or one page per exam folder.
  let files;
  let nameOf;
  if (section.glob) {
    files = fs
      .readdirSync(path.join(out, 'in'))
      .map((entry) => path.join(out, section.glob(entry)))
      .filter((file) => fs.existsSync(file));
    // A noindexed page cannot earn a thin-content demotion, and these are
    // noindexed wherever the pattern is still review-pending.
    files = files.filter((file) => !fs.readFileSync(file, 'utf8').includes('noindex'));
    nameOf = (file) => path.basename(path.dirname(file));
  } else {
    const dir = path.join(out, section.dir);
    if (!fs.existsSync(dir)) {
      errors.push(`${section.name}: ${section.dir} not found in out/ — is the section still built?`);
      continue;
    }
    files = fs
      .readdirSync(dir)
      .filter((name) => name.endsWith('.html'))
      .map((name) => path.join(dir, name));
    nameOf = (file) => path.basename(file, '.html');
  }
  if (files.length < 2) {
    errors.push(`${section.name}: found ${files.length} page(s) — is the section still built?`);
    continue;
  }

  const docs = files.map((file) => ({ name: nameOf(file), words: mainText(file).split(' ') }));

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
  const average = total / docs.length;
  if (section.maxAverageDuplicateShare !== undefined && average > section.maxAverageDuplicateShare) {
    errors.push(
      `${section.name}: ${Math.round(average * 100)}% of the average page's main content also appears on a ` +
        `sibling (ceiling ${Math.round(section.maxAverageDuplicateShare * 100)}%) — the section as a whole is ` +
        'drifting into template',
    );
  }
  notes.push(
    `${section.name}: ${docs.length} pages, average ${Math.round(average * 100)}% shared content, ` +
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
