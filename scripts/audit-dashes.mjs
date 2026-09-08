// Enforces SEO_PLAYBOOK.md section 4: no em dashes or en dashes in prose this
// project authors. The rule was added on 6 August 2026 after a full-site audit
// found roughly 250 of them, and nothing enforced it, so by 8 September there
// were 1,644 across 707 rendered pages. This is the second time they have crept
// back; this script is what stops a third.
//
//   node scripts/audit-dashes.mjs
//
// It audits SOURCE rather than the built export, for two reasons: the rule is
// about what an author writes, and a source line is something an author can
// actually go and fix, whereas a rendered page tells you a string is wrong
// somewhere without saying where.
//
// Scope, and why question banks sit outside it:
//
//   src/lib/question-banks/ is frozen, Hard-QA-approved academic content
//   delivered by the Main Brain pipeline, which forbids rewriting stems,
//   options, explanations, sections, difficulty or source metadata. It is also
//   the one place where a dash is often correct rather than a writing tell: a
//   C–N bond, a p–n junction, d–d transitions, the blood–brain barrier,
//   Cohen–Sutherland, P–Q pairings. A blanket ban there would demand hundreds
//   of edits that make the content worse and breach the pipeline contract.
//
// So banks are counted and reported, never failed on. Everything else, every
// template, every exam-pattern note, every page of copy and public/llms.txt,
// must be clean, and a single occurrence fails the build.
//
// Comments are exempt: they are not a prose surface a reader ever sees.
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const DASH = /[—–]/;
const DASH_G = /[—–]/g;
// The same character can reach a page written three ways, and the first sweep
// of this codebase missed two of them. HTML entities are how the four highest
// volume template strings hid; escaped code points are how the NIFT section
// labels hid, which only surfaced when the build asserted a bank against its
// declared layout. All three forms are checked.
const ENTITY = /&mdash;|&ndash;|&#8212;|&#8211;|&#x201[34];|\\u201[34]|\\u\{201[34]\}/gi;

const BANKS = path.join('src', 'lib', 'question-banks');

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(ts|tsx|md|txt)$/.test(entry.name)) out.push(full);
  }
  return out;
}

// A line that is entirely a comment is not a prose surface. Only the obvious
// forms are recognised, deliberately: a heuristic that tried to track block
// comments across lines would be the thing that lets a real string through.
const isComment = (line) => /^\s*(\/\/|\*|\/\*)/.test(line);

const files = [
  ...walk(path.join(root, 'src')),
  path.join(root, 'public', 'llms.txt'),
].filter((file) => fs.existsSync(file));

const violations = [];
let bankCount = 0;
let bankFiles = 0;

for (const file of files) {
  const rel = path.relative(root, file);
  const lines = fs.readFileSync(file, 'utf8').split('\n');
  if (rel.startsWith(BANKS)) {
    const hits = lines.join('\n').match(DASH_G)?.length ?? 0;
    if (hits > 0) {
      bankCount += hits;
      bankFiles += 1;
    }
    continue;
  }
  lines.forEach((line, index) => {
    if (isComment(line)) return;
    if (!DASH.test(line) && !ENTITY.test(line)) return;
    ENTITY.lastIndex = 0;
    const shown = line.trim().slice(0, 120);
    violations.push(`${rel}:${index + 1}: ${shown}`);
  });
}

if (violations.length > 0) {
  console.error(`Dash audit FAILED: ${violations.length} em or en dash${violations.length === 1 ? '' : 'es'} in authored prose:`);
  for (const violation of violations.slice(0, 40)) console.error(`  - ${violation}`);
  if (violations.length > 40) console.error(`  ... and ${violations.length - 40} more`);
  console.error('\nSEO_PLAYBOOK.md section 4: resolve the thought with a period, comma, colon,');
  console.error('semicolon or parentheses instead, and spell number ranges out ("2 to 3 days").');
  process.exit(1);
}

console.log('Dash audit passed: no em or en dashes in authored prose.');
console.log(
  `  ${bankCount} remain inside ${bankFiles} frozen question-bank files, which this audit reports but does not fail on.`,
);
console.log('  Most are correct notation (C-N bonds, p-n junctions, ranges) or frozen topic labels.');
