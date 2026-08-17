'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import type { UpdateCategory, UpdateEntry } from '@/lib/updates';
import { UPDATE_CATEGORY_STYLES, formatUpdateDate } from '@/lib/updates';

export default function UpdateFinder({ updates, country }: { updates: UpdateEntry[]; country: string }) {
  const [query, setQuery] = useState('');
  const [exam, setExam] = useState('all');
  const [category, setCategory] = useState('all');
  const [goal, setGoal] = useState('all');
  const [ready, setReady] = useState(false);

  const exams = useMemo(
    () => Array.from(new Map(updates.map((update) => [update.examSlug, update.examName])).entries()).sort((a, b) => a[1].localeCompare(b[1])),
    [updates],
  );
  const categories = useMemo(
    () => Array.from(new Set(updates.map((update) => update.category)).values()).sort() as UpdateCategory[],
    [updates],
  );
  const goals = useMemo(() => Array.from(new Set(updates.map((update) => update.goal)).values()).sort(), [updates]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQuery(params.get('q') || '');
    setExam(params.get('exam') || 'all');
    setCategory(params.get('type') || 'all');
    setGoal(params.get('goal') || 'all');
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    const params = new URLSearchParams();
    if (query.trim()) params.set('q', query.trim());
    if (exam !== 'all') params.set('exam', exam);
    if (category !== 'all') params.set('type', category);
    if (goal !== 'all') params.set('goal', goal);
    const search = params.toString();
    window.history.replaceState(null, '', `${window.location.pathname}${search ? `?${search}` : ''}`);
  }, [category, exam, goal, query, ready]);

  const filtered = updates.filter((update) => {
    const needle = query.trim().toLowerCase();
    const matchesQuery = !needle || [update.examName, update.headline, update.summary, update.sourceName]
      .some((value) => value.toLowerCase().includes(needle));
    return matchesQuery
      && (exam === 'all' || update.examSlug === exam)
      && (category === 'all' || update.category === category)
      && (goal === 'all' || update.goal === goal);
  });
  const hasFilters = Boolean(query.trim() || exam !== 'all' || category !== 'all' || goal !== 'all');

  return (
    <div>
      <div className="mb-8 border border-ink-200 bg-white p-4 md:p-5">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-[1fr_180px_180px_180px]">
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-ink-700">Search updates</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Try SSC CGL, admit card, result..."
              className="min-h-11 w-full border border-ink-200 bg-white px-3 text-sm text-ink-900 outline-none placeholder:text-ink-500 focus:border-ink-900 focus:ring-1 focus:ring-ink-900"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-ink-700">Exam</span>
            <select value={exam} onChange={(event) => setExam(event.target.value)} className="min-h-11 w-full border border-ink-200 bg-white px-3 text-sm text-ink-900 outline-none focus:border-ink-900 focus:ring-1 focus:ring-ink-900">
              <option value="all">All exams</option>
              {exams.map(([slug, name]) => <option key={slug} value={slug}>{name}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-ink-700">Update type</span>
            <select value={category} onChange={(event) => setCategory(event.target.value)} className="min-h-11 w-full border border-ink-200 bg-white px-3 text-sm text-ink-900 outline-none focus:border-ink-900 focus:ring-1 focus:ring-ink-900">
              <option value="all">All update types</option>
              {categories.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold text-ink-700">Student goal</span>
            <select value={goal} onChange={(event) => setGoal(event.target.value)} className="min-h-11 w-full border border-ink-200 bg-white px-3 text-sm text-ink-900 outline-none focus:border-ink-900 focus:ring-1 focus:ring-ink-900">
              <option value="all">All goals</option>
              {goals.map((value) => <option key={value} value={value}>{value}</option>)}
            </select>
          </label>
        </div>
        <div className="mt-3 flex items-center justify-between gap-4">
          <p className="text-xs text-ink-500" aria-live="polite">{filtered.length} verified update{filtered.length === 1 ? '' : 's'}</p>
          {hasFilters && (
            <button
              type="button"
              onClick={() => { setQuery(''); setExam('all'); setCategory('all'); setGoal('all'); }}
              className="border border-ink-200 px-3 py-1.5 text-xs font-semibold text-ink-900 transition hover:border-ink-900"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      <div className="space-y-4">
        {filtered.map((update) => (
          <article key={update.slug} className="group grid gap-4 border border-ink-200 bg-white p-4 transition hover:-translate-y-0.5 hover:border-ink-400 hover:shadow-lg hover:shadow-ink-900/5 sm:grid-cols-[110px_1fr] md:p-5">
            <div className="border-b border-ink-200 pb-3 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-4">
              <time dateTime={update.publishedAt} className="text-sm font-bold text-ink-900">{formatUpdateDate(update.publishedAt)}</time>
              <div className="mt-2 text-xs leading-5 text-ink-500">{update.status}</div>
            </div>
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className={`px-2 py-1 text-[11px] font-semibold ${UPDATE_CATEGORY_STYLES[update.category]}`}>{update.category}</span>
                <span className="text-xs font-semibold text-ink-700">{update.examName}</span>
              </div>
              <h2 className="text-base font-bold leading-6 text-ink-900 md:text-lg">
                <Link href={`/${country}/exam-updates/${update.slug}`} className="group-hover:underline">{update.headline}</Link>
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-ink-500">{update.summary}</p>
              <div className="mt-4 flex flex-col gap-3 border-t border-ink-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-xs text-ink-500">Official source: <strong className="font-semibold text-ink-700">{update.sourceName}</strong></span>
                <div className="flex flex-wrap gap-2">
                  <Link href={`/${country}/${update.examSlug}/mock-test`} className="border border-ink-200 px-3 py-2 text-xs font-semibold text-ink-900 transition hover:border-ink-900">Practice {update.examName}</Link>
                  <Link href={`/${country}/exam-updates/${update.slug}`} className="bg-ink-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-ink-700">View update</Link>
                </div>
              </div>
            </div>
          </article>
        ))}
        {filtered.length === 0 && (
          <div className="border border-ink-200 bg-ink-50 p-6 text-sm leading-6 text-ink-600">
            No verified update matches these filters. Try a shorter exam name or clear the filters.
          </div>
        )}
      </div>
    </div>
  );
}
