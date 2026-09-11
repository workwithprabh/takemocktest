// Reads the 29 mock-test hub pages rewritten in content batches 1 to 4 out of
// the built export, for backlink targeting. Run after `npm run build`:
//
//   node scripts/export-batch-pages.mjs && python3 scripts/build-batch-pages-xlsx.py
//
// Every column is read from the deployed HTML rather than retyped, so the sheet
// cannot drift from what is actually live.
import fs from 'node:fs';
const src = fs.readFileSync('src/lib/mock-test-intros.ts', 'utf8');
const order = [...src.matchAll(/^  '([a-z0-9-]+)':/gm)].map((m) => m[1]);
const b3 = order.indexOf('ssc-selection-post');
const b4 = order.indexOf('clat');
const batchOf = (i) => (i >= b4 ? 4 : i >= b3 ? 3 : i >= 10 ? 2 : 1);

const vols = JSON.parse(fs.readFileSync('SEO_KEYWORD_VOLUMES.json', 'utf8')).keywords;
let index = [];
try { index = JSON.parse(fs.readFileSync('data/index-audit-result.json', 'utf8')); } catch {}
const idxOf = (p) => (index.find((r) => r.page === p) || {}).coverageState || '';

const exams = fs.readFileSync('src/lib/exams.ts', 'utf8');
const nameOf = (slug) => {
  const i = exams.indexOf(`\n  '${slug}': {`);
  const m = exams.slice(i, i + 400).match(/name: '([^']+)'/);
  return m ? m[1] : slug;
};

const rows = order.map((slug, i) => {
  const path = `/in/${slug}/mock-test`;
  const raw = fs.readFileSync(`out${path}.html`, 'utf8');
  const text = raw.replace(/<script[\s\S]*?<\/script>/g, ' ').split('<!-- -->').join('')
    .replace(/<[^>]+>/g, ' ').replace(/&#x27;/g, "'").replace(/&amp;/g, '&').replace(/\s+/g, ' ');
  const title = (raw.match(/<title>([^<]*)<\/title>/) || [, ''])[1].replace(' | TakeMockTest', '');
  const h1 = (raw.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [, ''])[1].replace(/<[^>]+>/g, '').replace(/&#x27;/g, "'").trim();
  const desc = (raw.match(/<meta name="description" content="([^"]*)"/) || [, ''])[1];
  const claim = (text.match(/(\d+) syllabus-checked tests?/) || [, ''])[1];
  const questions = (text.match(/Questions (\d[\d,]*) Practice library/) || text.match(/Full mocks \d+ Questions (\d[\d,]*)/) || [, ''])[1];
  const covIdx = text.indexOf('Coverage:');
  const coverage = covIdx > 0 ? text.slice(covIdx, covIdx + 110).replace(/ Start test.*/, '').trim() : '';
  // Read the related block from its anchors rather than its prose: the heading
  // and the exam name run together in flattened text.
  const relHtml = raw.split('Related mock tests')[1] || '';
  const related = [...relHtml.slice(0, 3000).matchAll(/href="(\/in\/([a-z0-9-]+)\/mock-test)"/g)]
    .map((m) => m[2]).filter((x) => x !== slug);
  const vol = vols.find((v) => v.url && v.url.endsWith(path));
  return {
    url: `https://takemocktest.com${path}`,
    exam: nameOf(slug),
    batch: batchOf(i),
    title, h1, description: desc,
    primaryKeyword: `${(h1 || '').replace(/ \d{4}$/, '')}`.toLowerCase(),
    monthlyVolume: vol ? vol.monthlyVolume : '',
    volumeSource: vol ? `${vol.provider} ${vol.dataset} (${vol.market}), supplied by site owner, not verified here` : '',
    tests: claim, questions,
    coverage,
    relatedPages: related.join(' | '),
    googleIndexStatus: idxOf(path),
  };
});
fs.writeFileSync('exports/batch-pages.json', JSON.stringify(rows, null, 1));
console.log(`rows: ${rows.length}`);
for (const b of [1,2,3,4]) console.log(`  batch ${b}: ${rows.filter(r=>r.batch===b).length}`);
console.log(`with volume data: ${rows.filter(r=>r.monthlyVolume!=='').length}`);
console.log(`with index status: ${rows.filter(r=>r.googleIndexStatus).length}`);
console.log(JSON.stringify(rows[0], null, 1));
