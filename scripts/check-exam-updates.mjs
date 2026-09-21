// Source-schema and filtering/date regressions. This does not replace an official-source review.
// Run: node scripts/check-exam-updates.mjs
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import ts from 'typescript';

const source = fs.readFileSync('src/lib/updates.ts', 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } });
const api = {};
vm.runInNewContext(compiled.outputText, { exports: api, Intl, Date });
const { UPDATES, filterUpdates, formatUpdateDate, formatUpdateDateTime, getLatestUpdates, getUpcomingUpdateDates } = api;
const officialHosts = new Set(['www.ibps.in', 'www.upsc.gov.in', 'ssc.gov.in', 'www.rrbcdg.gov.in', 'www.aima.in', 'gate2027.iitm.ac.in', 'csirnet.nta.ac.in', 'psc.uk.gov.in', 'mppsc.mp.gov.in', 'psc.cg.gov.in']);
const slugs = new Set();
for (const item of UPDATES) {
  assert(!slugs.has(item.slug), `Duplicate slug: ${item.slug}`);
  slugs.add(item.slug);
  assert(officialHosts.has(new URL(item.sourceUrl).hostname), `Unreviewed source: ${item.slug}`);
  assert.equal(new URL(item.sourceUrl).protocol, 'https:');
  for (const key of ['publishedAt', 'modifiedAt', 'sourceCheckedOn']) {
    assert(/^\d{4}-\d{2}-\d{2}$/.test(item[key]) && !Number.isNaN(Date.parse(item[key])), `Invalid ${key}: ${item.slug}`);
  }
  assert(item.modifiedAt >= item.publishedAt, `Modified date precedes publication: ${item.slug}`);
  assert(item.sourceCheckedOn >= item.publishedAt, `Source not checked at publication: ${item.slug}`);
  assert(item.actions.length > 0 && item.sourceReference, `Missing source/action: ${item.slug}`);
  for (const date of item.importantDates ?? []) assert(!Number.isNaN(Date.parse(date.date)), `Invalid event: ${item.slug}`);
  if (item.dateLabel === 'Added') assert(/undated/i.test(item.sourceReference), `Undated source needs disclosure: ${item.slug}`);
}

const all = { query: '', exam: 'all', category: 'all', goal: 'all' };
assert.equal(filterUpdates(UPDATES, all).length, UPDATES.length);
assert.equal(filterUpdates(UPDATES, { ...all, query: '  mAt  ' }).length, 1);
assert.equal(filterUpdates(UPDATES, { ...all, exam: 'ibps-po', category: 'Corrigendum', goal: 'Government Jobs' }).length, 1);
assert.equal(filterUpdates(UPDATES, { ...all, query: 'no-such-exam-xyz' }).length, 0);
const sorted = getLatestUpdates(UPDATES.length);
assert(sorted.every((item, index) => index === 0 || sorted[index - 1].publishedAt >= item.publishedAt));

const mat = UPDATES.find((item) => item.examSlug === 'mat');
assert(mat);
assert(getUpcomingUpdateDates([mat], Date.parse('2026-09-07T23:59:59+05:30'), 20).some((item) => item.date === '2026-09-07'));
assert(!getUpcomingUpdateDates([mat], Date.parse('2026-09-08T00:00:00+05:30'), 20).some((item) => item.date === '2026-09-07'));
assert(!getUpcomingUpdateDates([mat], Date.parse('2026-09-10T17:00:01+05:30'), 20).some((item) => item.date === '2026-09-10T17:00:00+05:30'));
assert.equal(getUpcomingUpdateDates([mat], Date.parse('2026-10-01')).length, 0);
assert.equal(getUpcomingUpdateDates(UPDATES, Date.parse('2026-08-31')).length, 4);
assert.equal(formatUpdateDate('2026-09-10T22:00:00Z'), '11 Sept 2026');
assert.match(formatUpdateDateTime('2026-09-10T17:00:00+05:30'), /5:00\s?pm IST/i);
assert(!formatUpdateDateTime('2026-09-07').includes('IST'));
assert.equal(UPDATES.find((item) => item.slug === 'upsc-cse-main-examination-timetable-2026').status, 'Scheduled dates passed');
assert.equal(UPDATES.find((item) => item.examSlug === 'gate').status, 'Opening date awaited');

const calendarSource = fs.readFileSync('src/lib/exam-calendar.ts', 'utf8');
const calendarCompiled = ts.transpileModule(calendarSource, { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } });
const calendarApi = {};
vm.runInNewContext(calendarCompiled.outputText, { exports: calendarApi, Intl, Date });
const { EXAM_CALENDAR_EVENTS, GOVERNMENT_EXAM_EVENTS, buildIcsCalendar, calendarEventTimestamp, formatCalendarEventDate, getUpcomingCalendarEvents, googleCalendarUrl } = calendarApi;
const calendarHosts = new Set(['www.ibps.in', 'ibpsreg.ibps.in', 'www.upsc.gov.in', 'ssc.gov.in', 'www.aima.in', 'gate2027.iitm.ac.in', 'clat2027.consortiumofnlus.ac.in', 'xatonline.in']);
const eventIds = new Set();
for (const event of EXAM_CALENDAR_EVENTS) {
  assert(!eventIds.has(event.id), `Duplicate calendar event: ${event.id}`);
  eventIds.add(event.id);
  assert(calendarHosts.has(new URL(event.sourceUrl).hostname), `Unreviewed calendar source: ${event.id}`);
  assert.equal(new URL(event.sourceUrl).protocol, 'https:');
  assert(!Number.isNaN(Date.parse(event.startsOn)), `Invalid event start: ${event.id}`);
  if (event.endsOn) assert(calendarEventTimestamp(event.endsOn, true) >= calendarEventTimestamp(event.startsOn), `Event ends before it starts: ${event.id}`);
  assert(/^\d{4}-\d{2}-\d{2}$/.test(event.sourceCheckedOn), `Invalid calendar check date: ${event.id}`);
  assert(formatCalendarEventDate(event).length > 5, `Missing event date label: ${event.id}`);
}
assert(EXAM_CALENDAR_EVENTS.some((event) => event.status === 'Confirmed'));
assert(EXAM_CALENDAR_EVENTS.some((event) => event.status === 'Tentative'));
assert(GOVERNMENT_EXAM_EVENTS.length > 0 && GOVERNMENT_EXAM_EVENTS.every((event) => EXAM_CALENDAR_EVENTS.includes(event)));
assert(GOVERNMENT_EXAM_EVENTS.some((event) => event.examSlug === 'upsc-engineering-services'));
assert(!GOVERNMENT_EXAM_EVENTS.some((event) => ['mat', 'gate', 'clat', 'xat'].includes(event.examSlug)));
assert(calendarEventTimestamp('2026-09-16', true) > calendarEventTimestamp('2026-09-16'));
assert.equal(
  getUpcomingCalendarEvents(EXAM_CALENDAR_EVENTS, Date.parse('2026-09-21T00:00:00+05:30'), 2).map((event) => event.id).join(','),
  'ssc-selection-post-phase-14-cbe,ibps-rrb-15-application-close',
);
assert(getUpcomingCalendarEvents(EXAM_CALENDAR_EVENTS, Date.parse('2026-09-21T00:00:00+05:30'), 3, 'gate').every((event) => event.examSlug === 'gate'));
const calendarFile = buildIcsCalendar(EXAM_CALENDAR_EVENTS, 'TakeMockTest exam calendar');
assert(calendarFile.startsWith('BEGIN:VCALENDAR\r\nVERSION:2.0'));
assert.equal((calendarFile.match(/BEGIN:VEVENT/g) ?? []).length, EXAM_CALENDAR_EVENTS.length);
assert(calendarFile.includes('DTSTART;VALUE=DATE:20260916\r\nDTEND;VALUE=DATE:20260927'));
assert(calendarFile.endsWith('END:VCALENDAR\r\n'));
assert.match(googleCalendarUrl(EXAM_CALENDAR_EVENTS[0]), /^https:\/\/calendar\.google\.com\/calendar\/render\?/);
assert(googleCalendarUrl(EXAM_CALENDAR_EVENTS[0]).includes('dates=20260916%2F20260927') || googleCalendarUrl(EXAM_CALENDAR_EVENTS[0]).includes('dates=20260916/20260927'));
console.log(`Exam updates checks passed: ${UPDATES.length} sourced updates, ${EXAM_CALENDAR_EVENTS.length} calendar events and ${GOVERNMENT_EXAM_EVENTS.length} government-exam events verified.`);
