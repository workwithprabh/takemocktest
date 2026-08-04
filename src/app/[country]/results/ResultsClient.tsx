'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import ResultDetail from '@/components/ResultDetail';
import { AttemptResult, getAttempts } from '@/lib/attempts';

export default function ResultsClient({ country }: { country: string }) {
  const [attempts, setAttempts] = useState<AttemptResult[] | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    setAttempts(getAttempts());
  }, []);

  if (attempts === null) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-6">
        <h1 className="font-sans font-bold text-2xl mb-1 text-ink-900">My Results</h1>
        <p className="text-ink-500 text-sm">Loading results saved on this device…</p>
      </div>
    );
  }

  if (attempts.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-6">
        <h1 className="font-sans font-bold text-2xl mb-1 text-ink-900">My Results</h1>
        <p className="text-ink-500 text-sm mb-6">Your completed test attempts will show up here.</p>
        <div className="bg-white border border-dashed border-ink-200 p-8 text-center">
          <p className="text-sm text-ink-500 mb-4">You haven’t attempted any mock tests yet.</p>
          <Link
            href={`/${country}`}
            className="inline-block bg-ink-900 text-white text-sm font-semibold px-4 py-2.5 hover:bg-ink-700 transition"
          >
            Browse exams
          </Link>
        </div>
      </div>
    );
  }

  const grouped = attempts.reduce<Record<string, AttemptResult[]>>((acc, a) => {
    (acc[a.examSlug] ??= []).push(a);
    return acc;
  }, {});

  return (
    <div className="max-w-3xl mx-auto px-5 py-6">
      <h1 className="font-sans font-bold text-2xl mb-1 text-ink-900">My Results</h1>
      <p className="text-ink-500 text-sm mb-6">
        {attempts.length} attempt{attempts.length === 1 ? '' : 's'} · stored on this device
      </p>

      {Object.entries(grouped).map(([examSlug, examAttempts]) => (
        <div key={examSlug} className="mb-8">
          <h2 className="font-sans font-semibold text-sm mb-3 text-ink-900">{examAttempts[0].examName}</h2>
          <div className="space-y-3">
            {examAttempts.map((a) => {
              const isOpen = expandedId === a.id;
              return (
                <div key={a.id} className="bg-white border border-ink-200">
                  <button
                    onClick={() => setExpandedId(isOpen ? null : a.id)}
                    className="w-full flex items-center justify-between p-4 text-left hover:bg-ink-50 transition"
                  >
                    <div>
                      <div className="font-semibold text-sm text-ink-900">{a.testName}</div>
                      <div className="text-xs text-ink-500">{new Date(a.submittedAt).toLocaleDateString()}</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-semibold px-2.5 py-1 bg-ink-100 text-ink-700">
                        {a.score.toFixed(2)}/{a.maxScore}
                      </span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className={`text-ink-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </button>
                  {isOpen && (
                    <div className="border-t border-ink-200 p-4">
                      <ResultDetail attempt={a} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
