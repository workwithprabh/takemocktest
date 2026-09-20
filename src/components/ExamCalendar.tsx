'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import {
  calendarEventTimestamp,
  buildIcsCalendar,
  formatCalendarEventDate,
  googleCalendarUrl,
  type CalendarEventType,
  type ExamCalendarEvent,
} from '@/lib/exam-calendar';

const TYPE_STYLES: Record<CalendarEventType, string> = {
  Application: 'bg-attention-50 text-attention-800',
  Exam: 'bg-action-50 text-action-700',
  'Admit Card': 'bg-attention-50 text-attention-800',
  Correction: 'bg-ink-100 text-ink-700',
  'City Intimation': 'bg-ink-100 text-ink-700',
  Notification: 'bg-ink-100 text-ink-700',
  Result: 'bg-live-50 text-live-700',
};

export default function ExamCalendar({ events, country, knownExamSlugs, practiceExamSlugs, asOf, calendarName = 'TakeMockTest India exam calendar', downloadFileName = 'takemocktest-india-exam-calendar.ics' }: {
  events: ExamCalendarEvent[];
  country: string;
  knownExamSlugs: string[];
  practiceExamSlugs: string[];
  asOf: number;
  calendarName?: string;
  downloadFileName?: string;
}) {
  const [query, setQuery] = useState('');
  const [goal, setGoal] = useState('all');
  const [type, setType] = useState('all');
  const [scope, setScope] = useState<'upcoming' | 'all'>('upcoming');
  const [now, setNow] = useState(asOf);

  useEffect(() => setNow(Date.now()), []);

  const goals = useMemo(() => [...new Set(events.map((event) => event.goal))].sort(), [events]);
  const types = useMemo(() => [...new Set(events.map((event) => event.type))].sort(), [events]);
  const filtered = events
    .filter((event) => {
      const needle = query.trim().toLowerCase();
      const matchesQuery = !needle || [event.examName, event.label, event.goal].some((value) => value.toLowerCase().includes(needle));
      const isUpcoming = calendarEventTimestamp(event.endsOn ?? event.startsOn, true) >= now;
      return matchesQuery
        && (goal === 'all' || event.goal === goal)
        && (type === 'all' || event.type === type)
        && (scope === 'all' || isUpcoming);
    })
    .sort((a, b) => a.startsOn.localeCompare(b.startsOn));
  const grouped = [...filtered.reduce((months, event) => {
    const month = event.startsOn.slice(0, 7);
    months.set(month, [...(months.get(month) ?? []), event]);
    return months;
  }, new Map<string, ExamCalendarEvent[]>())];
  const hasFilters = Boolean(query.trim() || goal !== 'all' || type !== 'all');
  const recentlyChecked = [...events]
    .sort((a, b) => b.sourceCheckedOn.localeCompare(a.sourceCheckedOn) || a.startsOn.localeCompare(b.startsOn))
    .slice(0, 4);
  const clearFilters = () => { setQuery(''); setGoal('all'); setType('all'); };
  const downloadCalendar = () => {
    const url = URL.createObjectURL(new Blob([buildIcsCalendar(events, calendarName)], { type: 'text/calendar;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = downloadFileName;
    document.body.append(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 0);
  };

  return (
    <div>
      <section aria-labelledby="calendar-tools-heading" className="mb-6 border border-ink-200 bg-ink-50 p-4 md:flex md:items-center md:justify-between md:gap-6">
        <div>
          <h2 id="calendar-tools-heading" className="text-base font-bold text-ink-900">Keep these dates with you</h2>
          <p className="mt-1 text-xs leading-5 text-ink-600">Download every listed event, or add one date at a time from its card. Recheck tentative dates before making plans.</p>
        </div>
        <button type="button" onClick={downloadCalendar} className="mt-3 inline-flex min-h-11 shrink-0 items-center bg-ink-900 px-4 text-sm font-semibold text-white md:mt-0">Download all dates (.ics)</button>
      </section>

      <section aria-labelledby="recent-calendar-checks" className="mb-6">
        <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
          <h2 id="recent-calendar-checks" className="text-lg font-bold text-ink-900">Recently verified dates</h2>
          <p className="text-xs text-ink-500">Source checks, not necessarily date changes</p>
        </div>
        <div className="grid border border-ink-200 bg-white sm:grid-cols-2 lg:grid-cols-4">
          {recentlyChecked.map((event) => (
            <a key={event.id} href={`#${event.id}`} className="border-b border-ink-200 p-3 transition hover:bg-action-50 sm:border-r lg:border-b-0 last:border-b-0 last:border-r-0">
              <span className="block text-[11px] font-semibold uppercase tracking-wide text-ink-500">Checked {event.sourceCheckedOn.split('-').reverse().join('/')}</span>
              <span className="mt-1 block text-sm font-bold text-ink-900">{event.examName}</span>
              <span className="mt-1 block text-xs leading-5 text-ink-600">{event.label}</span>
            </a>
          ))}
        </div>
      </section>

      <section aria-labelledby="calendar-filters-heading" className="border border-ink-200 bg-white p-4 shadow-sm md:p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 id="calendar-filters-heading" className="text-lg font-bold text-ink-900">Find an exam date</h2>
          {hasFilters && <button type="button" onClick={clearFilters} className="min-h-11 px-3 text-sm font-semibold text-action-700 underline underline-offset-4">Clear filters</button>}
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-[minmax(0,1fr)_220px_180px]">
          <label className="sm:col-span-2 lg:col-span-1">
            <span className="mb-1.5 block text-xs font-semibold text-ink-700">Search by exam or event</span>
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try GATE, IBPS, application…" className="min-h-12 w-full border border-ink-200 bg-ink-50 px-3 text-base text-ink-900 placeholder:text-ink-500 focus:border-action-600 focus:outline-action-600" />
          </label>
          <label>
            <span className="mb-1.5 block text-xs font-semibold text-ink-700">Student goal</span>
            <select value={goal} onChange={(event) => setGoal(event.target.value)} className="min-h-12 w-full border border-ink-200 bg-white px-2 text-base text-ink-900 focus:border-action-600 lg:text-sm">
              <option value="all">All goals</option>
              {goals.map((value) => <option key={value}>{value}</option>)}
            </select>
          </label>
          <label>
            <span className="mb-1.5 block text-xs font-semibold text-ink-700">Event type</span>
            <select value={type} onChange={(event) => setType(event.target.value)} className="min-h-12 w-full border border-ink-200 bg-white px-2 text-base text-ink-900 focus:border-action-600 lg:text-sm">
              <option value="all">All event types</option>
              {types.map((value) => <option key={value}>{value}</option>)}
            </select>
          </label>
        </div>
        <div className="mt-4 flex items-center gap-2 border-t border-ink-100 pt-4" role="group" aria-label="Date range">
          {([['upcoming', 'Upcoming dates'], ['all', 'All listed dates']] as const).map(([value, label]) => (
            <button key={value} type="button" aria-pressed={scope === value} onClick={() => setScope(value)} className={`min-h-11 border px-3 text-xs font-semibold ${scope === value ? 'border-action-700 bg-action-700 text-white' : 'border-ink-200 bg-white text-ink-700 hover:border-action-600'}`}>{label}</button>
          ))}
        </div>
      </section>

      <div className="mt-6 flex flex-wrap items-end justify-between gap-2">
        <h2 className="text-xl font-bold text-ink-900">{scope === 'upcoming' ? 'Upcoming exam dates' : 'All verified dates'}</h2>
        <p className="text-xs text-ink-600" role="status">{filtered.length} {filtered.length === 1 ? 'event' : 'events'} shown</p>
      </div>

      <div className="mt-4 space-y-8">
        {grouped.map(([month, monthEvents]) => (
          <section key={month} aria-labelledby={`month-${month}`}>
            <div className="mb-3 flex items-center gap-3">
              <h3 id={`month-${month}`} className="text-lg font-bold text-ink-900">{new Intl.DateTimeFormat('en-IN', { month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' }).format(new Date(`${month}-15T12:00:00+05:30`))}</h3>
              <span className="h-px flex-1 bg-ink-200" aria-hidden="true" />
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {monthEvents.map((event) => {
                const knownExam = knownExamSlugs.includes(event.examSlug);
                const hasPractice = practiceExamSlugs.includes(event.examSlug);
                const internalHref = knownExam ? `/${country}/${event.examSlug}${hasPractice ? '/mock-test' : ''}` : `/${country}/exams`;
                return (
                  <article id={event.id} key={event.id} className="calendar-card">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`chip-lg ${TYPE_STYLES[event.type]}`}>{event.type}</span>
                      <span className={`chip-lg ${event.status === 'Tentative' ? 'bg-attention-50 text-attention-800' : 'bg-live-50 text-live-700'}`}>{event.status}</span>
                      <span className="text-xs text-ink-500 sm:ml-auto">Checked {event.sourceCheckedOn.split('-').reverse().join('/')}</span>
                    </div>
                    <p className="mt-4 text-base font-bold text-action-700"><time dateTime={event.startsOn}>{formatCalendarEventDate(event)}</time></p>
                    <h4 className="mt-1 text-base font-bold text-ink-900">{event.examName}</h4>
                    <p className="mt-1 text-sm leading-6 text-ink-700">{event.label}</p>
                    <div className="calendar-meta">
                      <a href={event.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-xs font-semibold text-action-700 underline underline-offset-4">Official source ↗<span className="sr-only"> for {event.examName}, opens in a new tab</span></a>
                      <a href={googleCalendarUrl(event)} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-xs font-semibold text-action-700 underline underline-offset-4">Add to Google Calendar ↗<span className="sr-only"> for {event.examName}, opens in a new tab</span></a>
                      {event.updateSlug && <Link href={`/${country}/exam-updates/${event.updateSlug}`} className="inline-flex min-h-11 items-center text-xs font-semibold text-ink-700 underline underline-offset-4">Read update</Link>}
                      <Link href={internalHref} className="ml-auto inline-flex min-h-11 items-center text-xs font-semibold text-ink-900 underline underline-offset-4">{hasPractice ? 'Practice now' : knownExam ? 'Exam overview' : 'Browse exams'} →</Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-4 border border-ink-200 bg-white p-6">
          <h2 className="font-bold text-ink-900">No dates match these filters</h2>
          <p className="mt-2 text-sm text-ink-600">Try another exam name or show all listed dates. We publish a date only after finding it on an official website.</p>
          <button type="button" onClick={clearFilters} className="mt-4 min-h-11 bg-action-700 px-4 text-sm font-semibold text-white">Clear filters</button>
        </div>
      )}
    </div>
  );
}
