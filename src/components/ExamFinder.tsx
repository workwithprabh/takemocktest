'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { useEffect, useMemo, useState } from 'react';
import type { ExamCatalogCategory } from '@/lib/exam-catalog';

export default function ExamFinder({
  categories,
  country,
  mode = 'all',
  children,
}: {
  categories: ExamCatalogCategory[];
  country: string;
  mode?: 'all' | 'category';
  children?: ReactNode;
}) {
  const [query, setQuery] = useState('');
  const [categorySlug, setCategorySlug] = useState('all');
  const [availability, setAvailability] = useState('all');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get('q') || '');
    setCategorySlug(params.get('goal') || 'all');
    setAvailability(params.get('availability') === 'available' ? 'available' : 'all');
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const params = new URLSearchParams();
    if (query.trim()) params.set('q', query.trim());
    if (mode === 'all' && categorySlug !== 'all') params.set('goal', categorySlug);
    if (availability !== 'all') params.set('availability', availability);
    const search = params.toString();
    window.history.replaceState(null, '', `${window.location.pathname}${search ? `?${search}` : ''}`);
  }, [availability, categorySlug, mode, query, ready]);

  const rows = useMemo(
    () =>
      categories.flatMap((category) =>
        category.groups.flatMap((group) =>
          group.exams.map((exam) => ({
            ...exam,
            categoryName: category.name,
            categorySlug: category.slug,
            groupName: group.name,
          })),
        ),
      ),
    [categories],
  );

  const normalizedQuery = query.trim().toLowerCase();
  const liveCount = rows.filter((exam) => exam.liveSlug).length;
  const filtered = rows.filter((exam) => {
    const matchesQuery = exam.name.toLowerCase().includes(normalizedQuery);
    const matchesCategory = categorySlug === 'all' || exam.categorySlug === categorySlug;
    const matchesAvailability = availability === 'all' || Boolean(exam.liveSlug);
    return matchesQuery && matchesCategory && matchesAvailability;
  }).sort((left, right) => {
    if (!normalizedQuery) return 0;
    const leftStartsWithQuery = left.name.toLowerCase().startsWith(normalizedQuery);
    const rightStartsWithQuery = right.name.toLowerCase().startsWith(normalizedQuery);
    if (leftStartsWithQuery !== rightStartsWithQuery) return leftStartsWithQuery ? -1 : 1;
    return left.name.localeCompare(right.name);
  });

  const hasActiveFilters = Boolean(query.trim() || (mode === 'all' && categorySlug !== 'all') || availability !== 'all');
  const showResults = mode === 'category' || hasActiveFilters;
  const groups = filtered.reduce<Record<string, typeof filtered>>((result, exam) => {
    const key = mode === 'category' ? exam.groupName : exam.categoryName;
    (result[key] ||= []).push(exam);
    return result;
  }, {});

  return (
    <div>
      <section className="mb-7 border border-ink-200 bg-white" aria-labelledby="exam-finder-title">
        <div className="flex items-end justify-between gap-4 border-b border-ink-200 bg-ink-900 px-4 py-4 text-white md:px-5">
          <div>
            <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-300">Exam finder</p>
            <h2 id="exam-finder-title" className="text-lg font-bold md:text-xl">
              {mode === 'all' ? 'Search exams' : 'Find an exam in this category'}
            </h2>
          </div>
          <p className="shrink-0 text-right text-xs text-ink-300">
            {rows.length} listed<br />{liveCount} with tests
          </p>
        </div>
        <div className="p-4 md:p-5">
        <div className={`grid gap-3 ${mode === 'all' ? 'grid-cols-2 md:grid-cols-[1fr_220px_180px]' : 'md:grid-cols-[1fr_180px]'}`}>
          <label className={mode === 'all' ? 'col-span-2 block md:col-span-1' : 'block'}>
            <span className="mb-1.5 block text-xs font-semibold text-ink-700">Search exam name</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={mode === 'all' ? 'Try SSC, JEE, NEET, CAT...' : 'Type an exam name...'}
              autoComplete="off"
              className="min-h-11 min-w-0 w-full border border-ink-200 bg-white px-3 text-sm text-ink-900 outline-none placeholder:text-ink-500 focus:border-ink-900 focus:ring-1 focus:ring-ink-900"
            />
          </label>
          {mode === 'all' && (
            <label className="block min-w-0">
              <span className="mb-1.5 block text-xs font-semibold text-ink-700">Goal</span>
              <select
                value={categorySlug}
                onChange={(event) => setCategorySlug(event.target.value)}
                className="min-h-11 min-w-0 w-full border border-ink-200 bg-white px-3 text-sm text-ink-900 outline-none focus:border-ink-900 focus:ring-1 focus:ring-ink-900"
              >
                <option value="all">All goals</option>
                {categories.map((category) => (
                  <option key={category.slug} value={category.slug}>{category.name}</option>
                ))}
              </select>
            </label>
          )}
          <label className="block min-w-0">
            <span className="mb-1.5 block text-xs font-semibold text-ink-700">Availability</span>
            <select
              value={availability}
              onChange={(event) => setAvailability(event.target.value)}
              className="min-h-11 min-w-0 w-full border border-ink-200 bg-white px-3 text-sm text-ink-900 outline-none focus:border-ink-900 focus:ring-1 focus:ring-ink-900"
            >
              <option value="all">All exams</option>
              <option value="available">Tests available</option>
            </select>
          </label>
        </div>
        <div className="mt-3 flex items-start justify-between gap-4">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-600" aria-live="polite">
            <span>{showResults ? `${filtered.length} matching exams` : `Search ${rows.length} exam names or browse by goal below.`}</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 bg-action-600" aria-hidden="true" /> Tests available</span>
            <span className="inline-flex items-center gap-1.5"><span className="h-2 w-2 border border-ink-400" aria-hidden="true" /> Listed only</span>
          </div>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setCategorySlug('all');
                setAvailability('all');
              }}
              className="shrink-0 border border-ink-200 px-3 py-1.5 text-xs font-semibold text-ink-900 transition hover:border-ink-900"
            >
              Clear filters
            </button>
          )}
        </div>
        </div>
      </section>

      {showResults && (
        <div className="space-y-8">
          {Object.entries(groups).map(([groupName, exams]) => (
            <section key={groupName} aria-labelledby={`finder-${groupName.replaceAll(' ', '-').toLowerCase()}`}>
              <div className="mb-3 flex items-end justify-between gap-4">
                <h2 id={`finder-${groupName.replaceAll(' ', '-').toLowerCase()}`} className="text-lg font-bold text-ink-900">
                  {groupName}
                </h2>
                <span className="text-xs text-ink-500">{exams.length} exams</span>
              </div>
              <div className="grid border-l border-t border-ink-200 bg-white sm:grid-cols-2">
                {exams.map((exam) => {
                  const content = (
                    <>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-ink-900">{exam.name}</div>
                        <div className="mt-1 text-xs text-ink-500">{exam.scope}</div>
                      </div>
                      <div className="flex shrink-0 items-center gap-2">
                        <span className={`border px-2 py-1 text-[10px] font-semibold uppercase tracking-wide ${exam.liveSlug ? 'border-action-100 bg-action-50 text-action-700' : 'border-ink-200 bg-ink-50 text-ink-600'}`}>
                          {exam.liveSlug ? 'Available' : 'Coming soon'}
                        </span>
                        {exam.liveSlug && <span className="flex h-8 w-8 items-center justify-center bg-ink-900 text-white" aria-hidden="true">→</span>}
                      </div>
                    </>
                  );

                  return exam.liveSlug ? (
                    <Link
                      key={exam.name}
                      href={`/${country}/${exam.liveSlug}/mock-test`}
                      className="flex min-h-24 items-center justify-between gap-4 border-b border-r border-ink-200 px-4 py-3 transition hover:bg-action-50/40 focus-visible:z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-900"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div key={exam.name} className="flex min-h-24 items-center justify-between gap-4 border-b border-r border-ink-200 px-4 py-3">
                      {content}
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
          {filtered.length === 0 && (
            <div className="border border-ink-200 bg-ink-50 p-5 text-sm text-ink-600">
              No matching exam was found. Try a shorter name or select all goals.
            </div>
          )}
        </div>
      )}
      {!showResults && children}
    </div>
  );
}
