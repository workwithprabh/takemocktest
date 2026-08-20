'use client';

import { useEffect, useState } from 'react';
import TestRow from '@/components/TestRow';
import { getLatestAttempt } from '@/lib/attempts';

interface TestItem {
  testId: string;
  name: string;
  kind: 'full-length' | 'sectional' | 'practice' | 'quick' | 'topic' | 'difficulty';
  questions: number;
  minutes: number;
  contentStatus: 'checked' | 'demo';
  checkedOn?: string;
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
  // Land on Full Mocks by default when the exam has one: that's the single
  // highest-intent action, and exams with many sectional/topic tests (SSC
  // CGL alone has 44) otherwise bury it in an undifferentiated flat list.
  const hasFullLength = tests.some((test) => test.kind === 'full-length');
  const [filter, setFilter] = useState<'all' | TestItem['kind']>(hasFullLength ? 'full-length' : 'all');

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
  const visibleTests = filter === 'all' ? tests : tests.filter((test) => test.kind === filter);

  return (
    <>
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
      {visibleTests.map((t) => (
        <TestRow
          key={t.testId}
          href={`/${country}/${examSlug}/test/${t.testId}`}
          name={t.name}
          questions={t.questions}
          minutes={t.minutes}
          contentStatus={t.contentStatus}
          checkedOn={t.checkedOn}
          status={scores[t.testId] ? 'done' : 'new'}
          score={scores[t.testId]}
        />
      ))}
    </>
  );
}
