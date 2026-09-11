// Reports which `official` exam stages need re-reading against their primary
// notice, and why. Advisory only: it prints a ranked worklist and exits 0.
//
//   node scripts/audit-source-claims.mjs
//
// Why this exists: three times in September 2026 an outside cross-check beat
// our own record, and every time the defect sat on a stage badged `official`
// with a source URL and a checkedOn date beside it. The badge was never the
// safeguard it was treated as. Primary exam-body sites are unreachable from the
// sandbox that maintains this repo, so re-verification has to be handed to
// someone who can open the PDFs, and that hand-off needs a ranked list rather
// than "re-read all 166".
//
// Findings are graded against this site's own published standard on /about:
// `official` means the primary document was read directly, `review-pending`
// means the structure rests on corroboration from secondary sources.

import fs from 'node:fs';
const src = fs.readFileSync('src/lib/exams.ts', 'utf8');

// Brace-matched walk over every `pattern: {` block, strings and escapes aware.
function blocks(text, opener) {
  const out = []; let i = 0;
  while ((i = text.indexOf(opener, i)) !== -1) {
    const start = text.indexOf('{', i);
    let d = 0, j = start, q = null;
    for (; j < text.length; j++) {
      const c = text[j];
      if (q) { if (c === '\\') j++; else if (c === q) q = null; continue; }
      if (c === "'" || c === '"' || c === '`') { q = c; continue; }
      if (c === '{') d++; else if (c === '}') { d--; if (d === 0) break; }
    }
    out.push({ start, end: j + 1 }); i = j + 1;
  }
  return out;
}
const str = (b, k) => { const m = b.match(new RegExp(`${k}:\\s*(['"])((?:\\\\.|(?!\\1).)*)\\1`)); return m ? m[2] : undefined; };
const num = (b, k) => { const m = b.match(new RegExp(`${k}:\\s*(\\d+(?:\\.\\d+)?)`)); return m ? Number(m[1]) : undefined; };

// Exam slug for each offset.
const slugAt = [];
for (const m of src.matchAll(/^  '([a-z0-9-]+)': \{$/gm)) slugAt.push({ at: m.index, slug: m[1] });
const slugFor = (off) => { let s = '?'; for (const e of slugAt) { if (e.at < off) s = e.slug; else break; } return s; };
// Stage name: nearest preceding `name: '...'` at stage indentation.
const nameAt = [];
for (const m of src.matchAll(/^        name: '([^']+)',$/gm)) nameAt.push({ at: m.index, name: m[1] });
const nameFor = (off) => { let n = '?'; for (const e of nameAt) { if (e.at < off) n = e.name; else break; } return n; };

const findings = [];
let official = 0, reviewPending = 0;
for (const b of blocks(src, 'pattern: {')) {
  const block = src.slice(b.start, b.end);
  const status = str(block, 'status');
  if (status === 'review-pending') { reviewPending += 1; continue; }
  if (status !== 'official') continue;
  official += 1;
  const id = `${slugFor(b.start)} / ${nameFor(b.start)}`;
  const add = (sev, kind, detail) => findings.push({ id, sev, kind, detail });

  const sourceUrl = block.match(/sourceUrl:\s*([A-Z_0-9]+|'[^']*')/);
  const checkedOn = str(block, 'checkedOn');
  const cycle = str(block, 'cycle');
  const note = str(block, 'note') ?? '';
  const timerNote = str(block, 'timerNote') ?? '';

  if (!sourceUrl) add('HIGH', 'no source', 'official with no sourceUrl at all');
  else if (/RESULT|CORRIGEND|ADDENDUM/i.test(sourceUrl[1])) add('HIGH', 'wrong document', `source is ${sourceUrl[1]}`);
  if (!checkedOn) add('MED', 'no checked date', 'official with no checkedOn');

  // The site's own /about defines review-pending as resting on secondary
  // corroboration. A stage that says so in its note is mislabelled.
  if (/secondary source/i.test(`${note} ${timerNote}`)) add('HIGH', 'mislabelled', 'note cites secondary sources while badged official');
  if (/could not be (independently )?read|not been able to open|unreachable/i.test(note)) add('HIGH', 'mislabelled', 'note says the primary document was not read');

  // Arithmetic inside the stage.
  const rows = [...block.matchAll(/\{ name: '[^']*', questions: (\d+), marks: (\d+)(?:, duration: (\d+))? \}/g)];
  if (rows.length) {
    const tq = num(block, 'totalQuestions'), tm = num(block, 'totalMarks');
    const sq = rows.reduce((a, r) => a + Number(r[1]), 0);
    const sm = rows.reduce((a, r) => a + Number(r[2]), 0);
    if (tq !== undefined && sq !== tq) add('HIGH', 'arithmetic', `sections sum to ${sq} questions, total says ${tq}`);
    if (tm !== undefined && sm !== tm) add('HIGH', 'arithmetic', `sections sum to ${sm} marks, total says ${tm}`);
    const withDur = rows.filter((r) => r[3]);
    if (withDur.length && !/sectionDurationSource:\s*'explicit'/.test(block)) {
      const mins = withDur.map((r) => Number(r[3]));
      const dur = num(block, 'duration');
      const prorata = tq ? withDur.every((r, i) => Math.abs(mins[i] - (dur * Number(r[1])) / tq) < 1) : false;
      add(prorata ? 'HIGH' : 'MED', 'duration provenance',
        `per-section minutes [${mins.join(', ')}] with no sectionDurationSource${prorata ? ' and they are an exact pro-rata split of the total' : ''}`);
    }
  }

  // Claims that cannot be read off a table.
  if (/no sectional lock|composite/i.test(timerNote)) add('MED', 'unverifiable claim', 'timerNote asserts a composite/no-lock model');

  // Stale cycle.
  const yr = (cycle ?? '').match(/20(\d\d)/);
  if (yr && Number(`20${yr[1]}`) < 2026) add('MED', 'stale cycle', `cycle names ${yr[0]}`);
}

console.log(`official stages: ${official}   review-pending: ${reviewPending}`);
const byKind = new Map();
for (const f of findings) {
  const k = `${f.sev} ${f.kind}`;
  if (!byKind.has(k)) byKind.set(k, []);
  byKind.get(k).push(f);
}
for (const [k, list] of [...byKind].sort()) {
  console.log(`\n${k} — ${list.length}`);
  for (const f of list.slice(0, 12)) console.log(`   ${f.id.padEnd(46)} ${f.detail}`);
  if (list.length > 12) console.log(`   ... and ${list.length - 12} more`);
}
const flagged = new Set(findings.map((f) => f.id));
console.log(`\nofficial stages with at least one finding: ${flagged.size} of ${official}`);
