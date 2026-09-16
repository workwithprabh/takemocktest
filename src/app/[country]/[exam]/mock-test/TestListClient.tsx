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
  const [topic, setTopic] = useState('');

  useEffect(() => {
    const next: Record<string, string> = {};
    tests.forEach((t) => {
      const attempt = getLatestAttempt(examSlug, t.testId);
      if (attempt) next[t.testId] = `${attempt.score.toFixed(2)}/${attempt.maxScore}`;
    });
    setScores(next);
  }, [examSlug, tests]);

  const topics = [...new Set(tests.flatMap((test) => test.topics))].sort();
  const visibleTests = topic ? tests.filter((test) => test.topics.includes(topic)) : tests;
  const startingTest = tests.find((test) => test.contentStatus === 'checked' && test.kind === 'full-length')
    ?? tests.find((test) => test.contentStatus === 'checked');
  const listTests = !topic && startingTest
    ? visibleTests.filter((test) => test.testId !== startingTest.testId)
    : visibleTests;
  const groups = [
    {
      id: 'full', title: !topic && startingTest?.kind === 'full-length' ? 'More full mock tests' : 'Full mock tests',
      description: 'Rehearse the whole paper with exam-style timing.',
      tests: listTests.filter((test) => test.kind === 'full-length'), showKind: false,
    },
    {
      id: 'sectional', title: 'Sectional tests', description: 'Work on one section before the full paper.',
      tests: listTests.filter((test) => test.kind === 'sectional'), showKind: false,
    },
    {
      id: 'focused', title: 'Quick & focused practice', description: 'Short tests, topic drills and other practice.',
      tests: listTests.filter((test) => test.kind !== 'full-length' && test.kind !== 'sectional'), showKind: true,
    },
  ].filter((group) => group.tests.length > 0);

  return (
    <>
      {startingTest && !topic && (
        <div className="my-4 border border-ink-200 bg-ink-50 p-4 sm:flex sm:items-center sm:justify-between sm:gap-5">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wide text-action-700">
              {startingTest.kind === 'full-length' ? 'Start with a full mock' : 'Start here'}
            </p>
            <h3 className="mt-1 text-base font-bold text-ink-900">{startingTest.name}</h3>
            <p className="mt-1 text-xs leading-5 text-ink-600">
              {startingTest.questions} questions · {startingTest.minutes} minutes · Review the marking rules before starting.
            </p>
          </div>
          <Link href={`/${country}/${examSlug}/test/${startingTest.testId}`} className="mt-3 inline-flex min-h-11 w-full shrink-0 items-center justify-center bg-ink-900 px-4 text-sm font-semibold text-white transition hover:bg-ink-700 sm:mt-0 sm:w-auto">
            {scores[startingTest.testId] ? 'Retake this test' : 'Review and start'} →
          </Link>
        </div>
      )}
      {topics.length > 0 && (
        <div className="my-4 flex flex-wrap items-end gap-x-3 gap-y-2">
          <label className="block min-w-0 flex-1 sm:max-w-lg" htmlFor="practice-topic">
            <span className="mb-1.5 block text-sm font-semibold text-ink-900">Filter by topic</span>
            <select id="practice-topic" value={topic} onChange={(event) => setTopic(event.target.value)} className="min-h-11 w-full min-w-0 border border-ink-300 bg-white px-3 text-sm text-ink-900">
              <option value="">All topics</option>
              {topics.map((name) => <option key={name} value={name}>{name}</option>)}
            </select>
          </label>
          {topic && <button type="button" onClick={() => setTopic('')} className="min-h-11 px-2 text-sm font-semibold text-action-700 underline underline-offset-4">Clear filter</button>}
        </div>
      )}
      {topic && <p className="mb-3 text-sm text-ink-600" role="status">{visibleTests.length} matching test{visibleTests.length === 1 ? '' : 's'}. Mixed tests may include other topics.</p>}
      <div className="mb-4 space-y-3">
        {groups.map((group, index) => (
          <details key={`${group.id}-${topic}`} open={Boolean(topic) || index === 0} className="group border border-ink-200 bg-white">
            <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink-900">
              <span>
                <span className="block text-sm font-bold text-ink-900">{group.title}</span>
                <span className="mt-0.5 block text-xs leading-5 text-ink-600">{group.description}</span>
              </span>
              <span className="flex shrink-0 items-center gap-3 text-xs font-semibold text-ink-700">
                {group.tests.length} {group.tests.length === 1 ? 'test' : 'tests'}
                <span className="text-lg font-normal transition group-open:rotate-45" aria-hidden="true">+</span>
              </span>
            </summary>
            <div className="border-t border-ink-200 px-4">
              {group.tests.map((test) => (
                <TestRow key={test.testId} href={`/${country}/${examSlug}/test/${test.testId}`} name={test.name}
                  questions={test.questions} minutes={test.minutes} kind={test.kind} contentStatus={test.contentStatus}
                  checkedOn={test.checkedOn} status={scores[test.testId] ? 'done' : 'new'} score={scores[test.testId]}
                  coverage={test.coverage} showKind={group.showKind} />
              ))}
            </div>
          </details>
        ))}
        {groups.length === 0 && <p className="border border-ink-200 bg-ink-50 p-4 text-sm text-ink-600">No tests match this topic. Choose another topic or clear the filter.</p>}
      </div>
    </>
  );
}
