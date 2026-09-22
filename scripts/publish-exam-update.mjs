// Convert one human-reviewed JSON draft into a typed update entry.
// This command never accepts monitor baselines or publishes to production.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

const updatesPath = 'src/lib/updates.ts';
const sourcesPath = 'data/exam-update-sources.json';
const markerPattern = /export const UPDATES: UpdateEntry\[\] = \[\r?\n/;
const categories = new Set([
  'Notification',
  'Application',
  'Exam Date',
  'Schedule',
  'Corrigendum',
  'City Intimation',
  'Admit Card',
  'Answer Key',
  'Response Sheet',
  'Result',
  'Scorecard',
  'Cutoff',
  'Counselling',
]);
const officialHosts = new Set([
  'www.ibps.in',
  'www.upsc.gov.in',
  'ssc.gov.in',
  'www.rrbcdg.gov.in',
  'www.aima.in',
  'gate2027.iitm.ac.in',
  'csirnet.nta.ac.in',
  'psc.uk.gov.in',
  'mppsc.mp.gov.in',
  'psc.cg.gov.in',
]);
const requiredStrings = [
  'slug',
  'examSlug',
  'examName',
  'goal',
  'category',
  'headline',
  'summary',
  'publishedAt',
  'modifiedAt',
  'status',
  'sourceName',
  'sourceUrl',
  'sourceCheckedOn',
  'sourceReference',
];
const allowedKeys = new Set([...requiredStrings, 'dateLabel', 'importantDates', 'actions']);

function isIsoDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value)
    && new Date(`${value}T00:00:00Z`).toISOString().slice(0, 10) === value;
}

function validateDraft(draft, existingSlugs = new Set()) {
  assert(draft && typeof draft === 'object' && !Array.isArray(draft), 'Draft must be one JSON object.');
  for (const key of Object.keys(draft)) assert(allowedKeys.has(key), `Unknown field: ${key}`);
  for (const key of requiredStrings) assert(typeof draft[key] === 'string' && draft[key].trim(), `Missing ${key}.`);
  assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(draft.slug), 'slug must use lowercase words separated by hyphens.');
  assert(/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(draft.examSlug), 'examSlug must use lowercase words separated by hyphens.');
  assert(!existingSlugs.has(draft.slug), `Duplicate slug: ${draft.slug}`);
  assert(categories.has(draft.category), `Unsupported category: ${draft.category}`);

  const sourceUrl = new URL(draft.sourceUrl);
  assert.equal(sourceUrl.protocol, 'https:', 'sourceUrl must use HTTPS.');
  assert(officialHosts.has(sourceUrl.hostname), `Unreviewed official source host: ${sourceUrl.hostname}`);

  for (const key of ['publishedAt', 'modifiedAt', 'sourceCheckedOn']) {
    assert(isIsoDate(draft[key]), `${key} must be a real YYYY-MM-DD date.`);
  }
  assert(draft.modifiedAt >= draft.publishedAt, 'modifiedAt cannot precede publishedAt.');
  assert(draft.sourceCheckedOn >= draft.publishedAt, 'sourceCheckedOn cannot precede publishedAt.');
  if (draft.dateLabel !== undefined) {
    assert.equal(draft.dateLabel, 'Added', 'dateLabel may only be "Added".');
    assert(/undated/i.test(draft.sourceReference), 'An Added entry must disclose that the official source is undated.');
  }

  assert(Array.isArray(draft.actions) && draft.actions.length > 0, 'actions must contain at least one student action.');
  assert(draft.actions.every((item) => typeof item === 'string' && item.trim()), 'Every action must be non-empty text.');
  if (draft.importantDates !== undefined) {
    assert(Array.isArray(draft.importantDates), 'importantDates must be an array.');
    for (const item of draft.importantDates) {
      assert(item && typeof item === 'object' && !Array.isArray(item), 'Each important date must be an object.');
      assert.deepEqual(Object.keys(item).sort(), ['date', 'label'], 'Each important date needs only label and date.');
      assert(typeof item.label === 'string' && item.label.trim(), 'Important-date label cannot be empty.');
      assert(typeof item.date === 'string' && !Number.isNaN(Date.parse(item.date)), `Invalid important date: ${item.date}`);
    }
  }
  return draft;
}

function loadExistingSlugs(source) {
  const compiled = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  });
  const api = {};
  vm.runInNewContext(compiled.outputText, { exports: api, Intl, Date });
  return new Set(api.UPDATES.map((item) => item.slug));
}

function renderEntry(draft, newline = '\n') {
  return `${JSON.stringify(draft, null, 2).replace(/^/gm, '  ').replace(/\n/g, newline)},${newline}`;
}

function insertEntry(source, draft) {
  const markers = source.match(new RegExp(markerPattern.source, 'g')) ?? [];
  assert.equal(markers.length, 1, 'Could not find one update-list marker.');
  const marker = markers[0];
  const newline = marker.endsWith('\r\n') ? '\r\n' : '\n';
  return source.replace(markerPattern, marker + renderEntry(draft, newline));
}

function runSelfTest() {
  const draft = {
    slug: 'example-official-update-2026',
    examSlug: 'upsc-cse',
    examName: 'UPSC Civil Services Examination',
    goal: 'Government Jobs',
    category: 'Notification',
    headline: 'Example official update',
    summary: 'A verified example used only by the publisher self-test.',
    publishedAt: '2026-09-22',
    modifiedAt: '2026-09-22',
    status: 'Official notice published',
    sourceName: 'Union Public Service Commission',
    sourceUrl: 'https://www.upsc.gov.in/',
    sourceCheckedOn: '2026-09-22',
    sourceReference: 'Example dated official notice',
    importantDates: [{ label: 'Example date', date: '2026-10-01' }],
    actions: ['Read the official notice before taking action.'],
  };
  validateDraft(draft);
  assert.match(renderEntry(draft), /"slug": "example-official-update-2026"/);
  assert.match(renderEntry(draft, '\r\n'), /\r\n    "slug"/);
  assert(!renderEntry(draft, '\r\n').includes('\r  \n'));
  assert.match(insertEntry('export const UPDATES: UpdateEntry[] = [\r\n];\r\n', draft), /\r\n  \{\r\n    "slug"/);
  assert.throws(() => validateDraft(draft, new Set([draft.slug])), /Duplicate slug/);
  assert.throws(() => validateDraft({ ...draft, sourceUrl: 'https://example.com/' }), /Unreviewed official source/);
  console.log('Exam update publisher self-test passed.');
}

const args = process.argv.slice(2);
if (args.includes('--self-test')) {
  runSelfTest();
  process.exit(0);
}

const dryRun = args.includes('--dry-run');
const sourceId = args.find((arg) => arg.startsWith('--source='))?.slice('--source='.length);
const draftPath = args.find((arg) => !arg.startsWith('--'));
if (!draftPath || !sourceId) {
  console.error('Usage: npm run updates:publish -- <draft.json> --source=<monitor-source-id> [--dry-run]');
  process.exit(1);
}

const configuredSources = JSON.parse(fs.readFileSync(sourcesPath, 'utf8')).sources;
assert(configuredSources.some((source) => source.id === sourceId), `Unknown monitor source: ${sourceId}`);
assert.equal(path.extname(draftPath).toLowerCase(), '.json', 'Draft file must use the .json extension.');

const draft = JSON.parse(fs.readFileSync(draftPath, 'utf8'));
const updatesSource = fs.readFileSync(updatesPath, 'utf8');
validateDraft(draft, loadExistingSlugs(updatesSource));
const updatedSource = insertEntry(updatesSource, draft);

if (dryRun) {
  console.log(renderEntry(draft, updatesSource.includes('\r\n') ? '\r\n' : '\n'));
  console.log('Dry run passed. No files were changed.');
} else {
  fs.writeFileSync(updatesPath, updatedSource);
  console.log(`Added ${draft.slug} to ${updatesPath}.`);
  console.log('Next:');
  console.log('  npm run qa:updates');
  console.log(`  npm run monitor:updates:accept -- --source=${sourceId}`);
  console.log(`  git diff -- ${updatesPath} data/exam-update-snapshots.json`);
}
