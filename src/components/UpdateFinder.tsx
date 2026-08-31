'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import type { UpdateEntry } from '@/lib/updates';
import { UPDATE_CATEGORY_STYLES, filterUpdates, formatUpdateDate, formatUpdateDateTime, getUpcomingUpdateDates } from '@/lib/updates';

const PAGE_SIZE = 8;

export default function UpdateFinder({ updates, country, practiceExamSlugs, asOf }: {
  updates: UpdateEntry[];
  country: string;
  practiceExamSlugs: string[];
  asOf: number;
}) {
  const [query, setQuery] = useState('');
  const [exam, setExam] = useState('all');
  const [category, setCategory] = useState('all');
  const [goal, setGoal] = useState('all');
  const [ready, setReady] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [now, setNow] = useState(asOf);

  const exams = useMemo(
    () => Array.from(new Map(updates.map((update) => [update.examSlug, update.examName])).entries()).sort((a, b) => a[1].localeCompare(b[1])),
    [updates],
  );
  const categories = useMemo(() => Array.from(new Set(updates.map((update) => update.category))).sort(), [updates]);
  const goals = useMemo(() => Array.from(new Set(updates.map((update) => update.goal))).sort(), [updates]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get('q') || '');
    setExam(exams.some(([slug]) => slug === params.get('exam')) ? params.get('exam')! : 'all');
    setCategory(categories.some((value) => value === params.get('type')) ? params.get('type')! : 'all');
    setGoal(goals.includes(params.get('goal') || '') ? params.get('goal')! : 'all');
    setReady(true);
  }, [categories, exams, goals]);

  useEffect(() => {
    // Refresh date visibility for the static export, not source-check timestamps or news content.
    setNow(Date.now());
    const timer = window.setInterval(() => setNow(Date.now()), 60_000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const params = new URLSearchParams();
    if (query.trim()) params.set('q', query.trim());
    if (exam !== 'all') params.set('exam', exam);
    if (category !== 'all') params.set('type', category);
    if (goal !== 'all') params.set('goal', goal);
    const search = params.toString();
    window.history.replaceState(window.history.state, '', `${window.location.pathname}${search ? `?${search}` : ''}${window.location.hash}`);
    setVisibleCount(PAGE_SIZE);
  }, [category, exam, goal, query, ready]);

  const filtered = filterUpdates(updates, { query, exam, category, goal });
  const hasFilters = Boolean(query.trim() || exam !== 'all' || category !== 'all' || goal !== 'all');
  const dates = getUpcomingUpdateDates(filtered, now);
  const clearFilters = () => { setQuery(''); setExam('all'); setCategory('all'); setGoal('all'); };

  return (
    <div>
      <section id="updates-search" aria-labelledby="updates-search-heading" className="scroll-mt-24 border border-ink-200 bg-white p-4 shadow-sm md:p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 id="updates-search-heading" className="text-lg font-bold text-ink-900">Find the update you need</h2>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#update-dates-heading" className="inline-flex min-h-11 items-center text-xs font-semibold text-action-700 underline underline-offset-4 lg:hidden">Dates to know ↓</a>
            {hasFilters && <button type="button" onClick={clearFilters} className="min-h-11 px-3 text-sm font-semibold text-action-700 underline underline-offset-4 hover:text-action-800">Clear filters</button>}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-[minmax(0,1fr)_170px_170px_180px]">
          <label className="col-span-2 block lg:col-span-1">
            <span className="mb-1.5 block text-xs font-semibold text-ink-700">Search updates</span>
            <input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Exam, result, admit card…" className="min-h-12 w-full border border-ink-200 bg-ink-50 px-3 text-base text-ink-900 placeholder:text-ink-500 focus:border-action-600 focus:outline-action-600" />
          </label>
          <label className="block min-w-0">
            <span className="mb-1.5 block text-xs font-semibold text-ink-700">Exam</span>
            <select value={exam} onChange={(event) => setExam(event.target.value)} className="min-h-12 w-full border border-ink-200 bg-white px-2 text-base text-ink-900 focus:border-action-600 lg:text-sm">
              <option value="all">All exams</option>
              {exams.map(([slug, name]) => <option key={slug} value={slug}>{name}</option>)}
            </select>
          </label>
          <label className="block min-w-0">
            <span className="mb-1.5 block text-xs font-semibold text-ink-700">Update type</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)} className="min-h-12 w-full border border-ink-200 bg-white px-2 text-base text-ink-900 focus:border-action-600 lg:text-sm">
              <option value="all">All update types</option>
              {categories.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
          <label className="col-span-2 block min-w-0 lg:col-span-1">
            <span className="mb-1.5 block text-xs font-semibold text-ink-700">Student goal</span>
            <select value={goal} onChange={(event) => setGoal(event.target.value)} className="min-h-12 w-full border border-ink-200 bg-white px-2 text-base text-ink-900 focus:border-action-600 lg:text-sm">
              <option value="all">All goals</option>
              {goals.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
        </div>
        <div className="mt-4 flex flex-wrap gap-2 border-t border-ink-100 pt-4" role="group" aria-label="Quick update types">
          {[
            ['all', 'All types'], ['Application', 'Applications'], ['Admit Card', 'Admit cards'], ['Result', 'Results'], ['Corrigendum', 'Corrections'],
          ].map(([value, label]) => (
            <button key={value} type="button" aria-pressed={category === value} onClick={() => setCategory(value)} className={`min-h-11 border px-3 text-xs font-semibold transition ${category === value ? 'border-action-700 bg-action-700 text-white' : 'border-ink-200 bg-white text-ink-700 hover:border-action-600 hover:bg-action-50'}`}>{label}</button>
          ))}
        </div>
      </section>

      <div className="mt-8 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <section aria-labelledby="update-results-heading" className="min-w-0">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
            <h2 id="update-results-heading" className="text-xl font-bold text-ink-900">{hasFilters ? 'Matching updates' : 'Latest updates'}</h2>
            <p className="text-xs text-ink-600" role="status">Showing {Math.min(visibleCount, filtered.length)} of {filtered.length} · Newest first</p>
          </div>
          <div className="space-y-4">
            {filtered.slice(0, visibleCount).map((update) => (
              <article key={update.slug} className="border border-ink-200 bg-white p-4 shadow-sm transition hover:border-ink-300 md:p-5">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className={`px-2 py-1 text-xs font-semibold ${UPDATE_CATEGORY_STYLES[update.category]}`}>{update.category}</span>
                  <span className="text-xs font-semibold text-ink-700">{update.examName}</span>
                  <span className="text-xs text-ink-500 sm:ml-auto">{update.dateLabel ?? 'Published'} <time dateTime={update.publishedAt}>{formatUpdateDate(update.publishedAt)}</time></span>
                </div>
                <h3 className="text-lg font-bold leading-6 text-ink-900">
                  <Link href={`/${country}/exam-updates/${update.slug}`} className="hover:text-action-700 hover:underline">{update.headline}</Link>
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink-700">{update.summary}</p>
                <p className="mt-3 border-l-2 border-ink-200 pl-2 text-xs font-medium text-ink-600">{update.status} <span className="font-normal">· As checked {formatUpdateDate(update.sourceCheckedOn)}</span></p>
                {update.importantDates && update.importantDates.length > 0 && (
                  <dl className="mt-4 grid gap-px border border-ink-200 bg-ink-200 sm:grid-cols-2">
                    {update.importantDates.slice(0, 2).map((item) => (
                      <div key={item.label} className="bg-ink-50 px-3 py-3">
                        <dt className="text-xs leading-5 text-ink-600">{item.label}</dt>
                        <dd className="mt-1 text-sm font-semibold text-ink-900"><time dateTime={item.date}>{formatUpdateDateTime(item.date)}</time></dd>
                      </div>
                    ))}
                  </dl>
                )}
                <div className="mt-4 border-t border-ink-100 pt-3">
                  <a href={update.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 text-xs font-semibold text-action-700 underline underline-offset-4 hover:text-action-800">{update.sourceName} <span aria-hidden="true">↗</span><span className="sr-only"> (official source, opens in a new tab)</span></a>
                  <div className="mt-2 flex flex-wrap items-center gap-3">
                    <Link href={`/${country}/exam-updates/${update.slug}`} className="inline-flex min-h-11 items-center gap-4 bg-action-700 px-4 text-sm font-semibold text-white transition hover:bg-action-800" aria-label={`Read update: ${update.headline}`}>Read update <span aria-hidden="true">→</span></Link>
                    <Link href={`/${country}/${update.examSlug}${practiceExamSlugs.includes(update.examSlug) ? '/mock-test' : ''}`} className="inline-flex min-h-11 items-center border border-ink-200 px-3 text-xs font-semibold text-ink-900 transition hover:border-ink-900">{practiceExamSlugs.includes(update.examSlug) ? `Practice ${update.examName}` : `Explore ${update.examName}`}</Link>
                  </div>
                </div>
              </article>
            ))}
            {filtered.length === 0 && (
              <div className="border border-ink-200 bg-white p-6">
                <h3 className="font-bold text-ink-900">No updates match these filters</h3>
                <p className="mt-2 text-sm leading-6 text-ink-600">Try a shorter exam name or another update type. Not every listed exam has a sourced notice here yet.</p>
                <button type="button" onClick={clearFilters} className="mt-4 min-h-11 bg-action-700 px-4 text-sm font-semibold text-white hover:bg-action-800">Show all updates</button>
              </div>
            )}
          </div>
          {visibleCount < filtered.length && <button type="button" onClick={() => setVisibleCount((count) => count + PAGE_SIZE)} className="mt-5 min-h-12 w-full border border-ink-200 bg-white px-4 text-sm font-semibold text-action-700 transition hover:border-action-700 hover:bg-action-50">Show {Math.min(PAGE_SIZE, filtered.length - visibleCount)} more updates</button>}
        </section>

        <aside className="space-y-5 lg:sticky lg:top-24" aria-label="Dates and source guidance">
          <section className="border border-attention-100 bg-white" aria-labelledby="update-dates-heading">
            <div className="border-b border-attention-100 bg-attention-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-attention-800">Plan your next step</p>
              <h2 id="update-dates-heading" className="mt-1 scroll-mt-24 text-lg font-bold text-ink-900">Dates to know</h2>
              <p className="mt-2 text-xs leading-5 text-ink-700">From {hasFilters ? 'your filtered' : 'the listed'} notices. Dates may change; check the official source.</p>
            </div>
            {dates.length > 0 ? <ol className="divide-y divide-ink-100">
              {dates.map((item) => (
                <li key={`${item.update.slug}-${item.label}`}>
                  <Link href={`/${country}/exam-updates/${item.update.slug}`} className="block p-4 transition hover:bg-attention-50">
                    <time dateTime={item.date} className="text-sm font-bold text-attention-800">{formatUpdateDateTime(item.date)}</time>
                    <div className="mt-1 text-sm font-semibold text-ink-900">{item.update.examName}</div>
                    <p className="mt-1 text-xs leading-5 text-ink-700">{item.label} <span aria-hidden="true">→</span></p>
                  </Link>
                </li>
              ))}
            </ol> : <p className="p-4 text-sm leading-6 text-ink-600">No upcoming dated event in these notices. This does not mean no exam is scheduled.</p>}
            <p className="border-t border-ink-100 p-4 text-xs leading-5 text-ink-600">Times, when published, are shown in IST. A date without a time is not a midnight deadline.</p>
            <a href="#updates-search" className="mx-4 mb-2 inline-flex min-h-11 items-center text-xs font-semibold text-action-700 underline underline-offset-4 lg:hidden">Back to filters ↑</a>
          </section>
          <div className="border border-ink-200 bg-ink-50 p-4">
            <h2 className="text-sm font-bold text-ink-900">Always use the official website</h2>
            <p className="mt-2 text-xs leading-5 text-ink-700">TakeMockTest summarises selected notices. Applications, admit cards and results stay with the examination authority. We never ask for your candidate login.</p>
            <Link href={`/${country}/contact`} className="mt-2 inline-flex min-h-11 items-center text-xs font-semibold text-action-700 underline underline-offset-4">Report an outdated notice</Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
