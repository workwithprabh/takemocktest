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
      <div className="flex gap-2 border-b border-ink-200 px-4 pt-4" role="group" aria-label="Exam stages">
        {stages.map((stage) => (
          <button
            key={stage.id}
            type="button"
            aria-pressed={stage.id === active?.id}
            onClick={() => setActiveId(stage.id)}
            className={`text-sm font-semibold px-3.5 py-2.5 -mb-px border-b-2 transition ${
              stage.id === active?.id
                ? 'border-ink-900 text-ink-900'
                : 'border-transparent text-ink-500 hover:text-ink-900'
            }`}
          >
            {stage.name}
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
