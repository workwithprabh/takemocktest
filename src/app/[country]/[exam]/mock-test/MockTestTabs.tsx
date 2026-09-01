'use client';

import { useState } from 'react';
import TestListClient from './TestListClient';

interface TestItem {
  testId: string;
  name: string;
  kind: 'full-length' | 'sectional' | 'practice' | 'quick' | 'topic' | 'difficulty';
  questions: number;
  minutes: number;
  contentStatus: 'checked' | 'demo';
  checkedOn?: string;
}

interface StageGroup {
  id: string;
  name: string;
  tests: TestItem[];
}

export default function MockTestTabs({
  country,
  examSlug,
  stages,
}: {
  country: string;
  examSlug: string;
  stages: StageGroup[];
}) {
  const [activeId, setActiveId] = useState(stages[0]?.id);
  const active = stages.find((s) => s.id === activeId) ?? stages[0];

  return (
    <div>
      <div className="flex items-end justify-between gap-4 border-b border-ink-700 bg-ink-900 px-4 py-4 text-white md:px-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink-300">Practice library</p>
          <h2 className="mt-1 text-lg font-bold">Choose a test</h2>
        </div>
        <p className="shrink-0 text-right text-xs text-ink-300">{active?.tests.length ?? 0} in<br />{active?.name}</p>
      </div>
      <div className="flex gap-2 overflow-x-auto border-b border-ink-200 px-4 pt-4" role="group" aria-label="Exam stages">
        {stages.map((stage) => (
          <button
            key={stage.id}
            type="button"
            aria-pressed={stage.id === active?.id}
            onClick={() => setActiveId(stage.id)}
            className={`-mb-px flex shrink-0 items-center gap-2 border-b-2 px-3.5 py-2.5 text-sm font-semibold transition ${
              stage.id === active?.id
                ? 'border-ink-900 text-ink-900'
                : 'border-transparent text-ink-500 hover:text-ink-900'
            }`}
          >
            {stage.name}
            <span className={stage.id === active?.id ? 'bg-ink-900 px-1.5 py-0.5 text-[10px] text-white' : 'bg-ink-100 px-1.5 py-0.5 text-[10px] text-ink-600'}>{stage.tests.length}</span>
          </button>
        ))}
      </div>
      <div className="px-4">
        {active && active.tests.length > 0 ? (
          <TestListClient country={country} examSlug={examSlug} tests={active.tests} />
        ) : (
          <p className="py-6 text-sm text-ink-500">No reviewed tests are published for this stage yet.</p>
        )}
      </div>
    </div>
  );
}
