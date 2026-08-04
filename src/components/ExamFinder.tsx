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

  const filtered = rows.filter((exam) => {
    const matchesQuery = exam.name.toLowerCase().includes(query.trim().toLowerCase());
    const matchesCategory = categorySlug === 'all' || exam.categorySlug === categorySlug;
    const matchesAvailability = availability === 'all' || Boolean(exam.liveSlug);
    return matchesQuery && matchesCategory && matchesAvailability;
  });

  const showResults = Boolean(mode === 'category' || query.trim() || categorySlug !== 'all' || availability !== 'all');
  const groups = filtered.reduce<Record<string, typeof filtered>>((result, exam) => {
    const key = mode === 'category' ? exam.groupName : exam.categoryName;
    (result[key] ||= []).push(exam);
    return result;
  }, {});

  return (
    <div>
      <div className="mb-7 border border-ink-200 bg-white p-4 md:p-5">
        <div className={`grid gap-3 ${mode === 'all' ? 'md:grid-cols-[1fr_220px_180px]' : 'md:grid-cols-[1fr_180px]'}`}>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-ink-700">Search exam name</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try SSC, JEE, NEET, CAT..."
              className="min-h-11 w-full border border-ink-200 bg-white px-3 text-sm text-ink-900 outline-none placeholder:text-ink-500 focus:border-ink-900 focus:ring-1 focus:ring-ink-900"
            />
          </label>
          {mode === 'all' && (
            <label className="block">
              <span className="mb-1.5 block text-xs font-semibold text-ink-700">Goal</span>
              <select
                value={categorySlug}
                onChange={(event) => setCategorySlug(event.target.value)}
                className="min-h-11 w-full border border-ink-200 bg-white px-3 text-sm text-ink-900 outline-none focus:border-ink-900 focus:ring-1 focus:ring-ink-900"
              >
                <option value="all">All goals</option>
                {categories.map((category) => (
                  <option key={category.slug} value={category.slug}>{category.name}</option>
                ))}
              </select>
            </label>
          )}
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-ink-700">Availability</span>
            <select
              value={availability}
              onChange={(event) => setAvailability(event.target.value)}
              className="min-h-11 w-full border border-ink-200 bg-white px-3 text-sm text-ink-900 outline-none focus:border-ink-900 focus:ring-1 focus:ring-ink-900"
            >
              <option value="all">All listed exams</option>
              <option value="available">Mock tests available</option>
            </select>
          </label>
        </div>
        <div className="mt-3 flex items-center justify-between gap-4">
          <p className="text-xs text-ink-500" aria-live="polite">
            {showResults ? `${filtered.length} matching exams` : `Search across ${rows.length} exam names or browse by goal below.`}
          </p>
          {showResults && (
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
              <div className="border border-ink-200 bg-white">
                {exams.map((exam) => {
                  const content = (
                    <>
                      <div>
                        <div className="text-sm font-semibold text-ink-900">{exam.name}</div>
                        <div className="mt-1 text-xs text-ink-500">{exam.scope}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`px-2 py-1 text-xs font-semibold ${exam.liveSlug ? 'bg-ink-900 text-white' : 'bg-ink-100 text-ink-700'}`}>
                          {exam.liveSlug ? 'Available' : 'Coming soon'}
                        </span>
                        {exam.liveSlug && <span className="text-ink-700" aria-hidden="true">→</span>}
                      </div>
                    </>
                  );

                  return exam.liveSlug ? (
                    <Link
                      key={exam.name}
                      href={`/${country}/${exam.liveSlug}/mock-test`}
                      className="flex min-h-16 items-center justify-between gap-4 border-b border-ink-200 px-4 py-3 transition last:border-b-0 hover:bg-ink-50"
                    >
                      {content}
                    </Link>
                  ) : (
                    <div key={exam.name} className="flex min-h-16 items-center justify-between gap-4 border-b border-ink-200 px-4 py-3 last:border-b-0">
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
