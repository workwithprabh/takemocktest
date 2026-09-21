// Fast calendar maintenance report. It uses no AI service and checks links only
// when --check-links is supplied.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const source = fs.readFileSync('src/lib/exam-calendar.ts', 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } });
const api = {};
vm.runInNewContext(compiled.outputText, { exports: api, Intl, Date });
const { EXAM_CALENDAR_EVENTS, calendarEventTimestamp } = api;

const valueFor = (name) => process.argv.find((arg) => arg.startsWith(`${name}=`))?.split('=').slice(1).join('=');
const asOfText = valueFor('--as-of');
const maxAgeDays = Number(valueFor('--max-age-days') ?? 14);
const asOf = asOfText ? Date.parse(`${asOfText}T00:00:00+05:30`) : Date.now();
assert(!Number.isNaN(asOf), 'Use --as-of=YYYY-MM-DD');
assert(Number.isInteger(maxAgeDays) && maxAgeDays > 0, 'Use a positive integer for --max-age-days');

const day = 24 * 60 * 60 * 1000;
const expired = EXAM_CALENDAR_EVENTS.filter((event) => calendarEventTimestamp(event.endsOn ?? event.startsOn, true) < asOf);
const stale = EXAM_CALENDAR_EVENTS.filter((event) => asOf - Date.parse(`${event.sourceCheckedOn}T00:00:00+05:30`) > maxAgeDays * day);

console.log(`Calendar freshness audit: ${new Date(asOf).toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata' })}`);
console.log(`Expired events to archive or recheck: ${expired.length}`);
for (const event of expired) console.log(`  - ${event.examName}: ${event.label} (${event.endsOn ?? event.startsOn})`);
console.log(`Sources not checked in ${maxAgeDays} days: ${stale.length}`);
for (const event of stale) console.log(`  - ${event.examName}: checked ${event.sourceCheckedOn} (${event.sourceUrl})`);

if (!process.argv.includes('--check-links')) {
  console.log('Official-link checks skipped. Run with --check-links to verify them without using AI tokens.');
  process.exit(0);
}

async function checkLink(url) {
  for (const method of ['HEAD', 'GET']) {
    try {
      const response = await fetch(url, {
        method,
        redirect: 'follow',
        signal: AbortSignal.timeout(15000),
        headers: {
          'user-agent': 'TakeMockTest calendar freshness check (+https://takemocktest.com/in/exam-calendar)',
          ...(method === 'GET' ? { range: 'bytes=0-0' } : {}),
        },
      });
      await response.body?.cancel();
      if (response.status === 404 || response.status === 410) return { url, state: 'broken', status: response.status };
      if (response.ok || response.status < 400) return { url, state: 'ok', status: response.status };
      if (method === 'GET') return { url, state: 'review', status: response.status };
    } catch (error) {
      if (method === 'GET') return { url, state: 'review', error: error instanceof Error ? error.message : String(error) };
    }
  }
  return { url, state: 'review' };
}

const urls = [...new Set(EXAM_CALENDAR_EVENTS.map((event) => event.sourceUrl))];
const results = await Promise.all(urls.map(checkLink));
const broken = results.filter((result) => result.state === 'broken');
const review = results.filter((result) => result.state === 'review');
console.log(`Official links checked: ${results.length}; broken: ${broken.length}; could not verify: ${review.length}`);
for (const result of [...broken, ...review]) console.log(`  - ${result.state.toUpperCase()} ${result.status ?? result.error ?? ''} ${result.url}`);
if (broken.length) process.exitCode = 1;
