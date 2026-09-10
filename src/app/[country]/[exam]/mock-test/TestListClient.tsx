'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import TestRow from '@/components/TestRow';
import { getLatestAttempt } from '@/lib/attempts';

export interface TestItem {
  testId: string;
  name: string;
  kind: 'full-length' | 'sectional' | 'practice' | 'quick' | 'topic' | 'difficulty';
  questions: number;
  minutes: number;
  contentStatus: 'checked' | 'demo';
  checkedOn?: string;
  topics: string[];
  /** How much of the official paper this test reproduces. See lib/test-coverage.ts. */
  coverage?: string;
}

export default function TestListClient({
  country,
  examSlug,
  tests,
}: {
  country: string;
  examSlug: string;
  tests: TestItem[];
}) {
  const [scores, setScores] = useState<Record<string, string>>({});
  const [filter, setFilter] = useState<'all' | TestItem['kind']>('all');
  const [topic, setTopic] = useState('');

  useEffect(() => {
    const next: Record<string, string> = {};
    tests.forEach((t) => {
      const attempt = getLatestAttempt(examSlug, t.testId);
      if (attempt) next[t.testId] = `${attempt.score.toFixed(2)}/${attempt.maxScore}`;
    });
    setScores(next);
  }, [examSlug, tests]);

  const filters = [
    { id: 'all' as const, label: 'All' },
    { id: 'full-length' as const, label: 'Full mocks' },
    { id: 'sectional' as const, label: 'Sectional' },
    { id: 'quick' as const, label: 'Quick tests' },
    { id: 'difficulty' as const, label: 'By level' },
    { id: 'topic' as const, label: 'Topic drills' },
    { id: 'practice' as const, label: 'Demo' },
  ].filter(({ id }) => id === 'all' || tests.some((test) => test.kind === id));
  const topics = [...new Set(tests.flatMap((test) => test.topics))].sort();
  const visibleTests = tests.filter((test) => (filter === 'all' || test.kind === filter) && (!topic || test.topics.includes(topic)));
  const startingTest = tests.find((test) => test.contentStatus === 'checked' && test.kind === 'full-length')
    ?? tests.find((test) => test.contentStatus === 'checked');

  return (
    <>
      {startingTest && !topic && filter === 'all' && (
        <div className="my-4 border border-ink-200 bg-ink-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Start here</p>
          <Link href={`/${country}/${examSlug}/test/${startingTest.testId}`} className="mt-1 inline-flex min-h-11 items-center text-sm font-semibold text-action-700 underline underline-offset-4">
            {startingTest.name} →
          </Link>
          <p className="mt-1 text-xs text-ink-600">{startingTest.questions} questions · {startingTest.minutes} minutes · Review the instructions and marking before you begin.</p>
        </div>
      )}
      {topics.length > 0 && (
        <div className="my-4">
          <label htmlFor="practice-topic" className="mb-2 block text-sm font-semibold text-ink-900">Practise a topic</label>
          <select id="practice-topic" value={topic} onChange={(event) => setTopic(event.target.value)} className="min-h-11 w-full min-w-0 border border-ink-300 bg-white px-3 text-sm text-ink-900 sm:max-w-lg">
            <option value="">All topics</option>
            {topics.map((name) => <option key={name} value={name}>{name} ({tests.filter((test) => test.topics.includes(name)).length} tests)</option>)}
          </select>
          <p className="mt-2 text-xs text-ink-600">Find tests containing this topic. Mixed tests also include other topics.</p>
        </div>
      )}
      {filters.length > 2 && (
        <div className="flex gap-2 overflow-x-auto border-b border-ink-200 py-3" role="group" aria-label="Filter tests">
          {filters.map(({ id, label }) => {
            const count = id === 'all' ? tests.length : tests.filter((test) => test.kind === id).length;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={filter === id}
                onClick={() => setFilter(id)}
                className={`min-h-10 flex-shrink-0 border px-3 text-xs font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-900 ${
                  filter === id
                    ? 'border-ink-900 bg-ink-900 text-white'
                    : 'border-ink-200 bg-white text-ink-700 hover:border-ink-900'
                }`}
              >
                {label} {count}
              </button>
            );
          })}
        </div>
      )}
      {(topic || filter !== 'all') && (
        <div className="flex flex-wrap items-center justify-between gap-2 py-3 text-sm text-ink-600" role="status">
          <span>{visibleTests.length} matching test{visibleTests.length === 1 ? '' : 's'}</span>
          <button type="button" onClick={() => { setTopic(''); setFilter('all'); }} className="min-h-11 font-semibold text-action-700 underline underline-offset-4">Clear filters</button>
        </div>
      )}
      {visibleTests.map((t) => (
        <TestRow
          key={t.testId}
          href={`/${country}/${examSlug}/test/${t.testId}`}
          name={t.name}
          questions={t.questions}
          minutes={t.minutes}
          kind={t.kind}
          contentStatus={t.contentStatus}
          checkedOn={t.checkedOn}
          status={scores[t.testId] ? 'done' : 'new'}
          score={scores[t.testId]}
          coverage={t.coverage}
        />
      ))}
    </>
  );
}
