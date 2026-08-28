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
      <div className="mx-auto max-w-5xl px-5 py-10">
        <h1 className="text-3xl font-bold text-ink-900">My Results</h1>
        <p className="mt-2 text-sm text-ink-700">Loading results saved on this device…</p>
      </div>
    );
  }

  if (attempts.length === 0) {
    return (
      <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Saved on this device</p>
        <h1 className="text-3xl font-bold text-ink-900 sm:text-4xl">My Results</h1>
        <p className="mb-8 mt-3 text-sm text-ink-700">Review completed attempts, scores, and answer explanations.</p>
        <div className="border border-dashed border-ink-300 bg-white p-10 text-center">
          <p className="mb-4 text-sm text-ink-700">You haven’t attempted any mock tests yet.</p>
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
    <div className="mx-auto max-w-5xl px-5 py-10 sm:py-14">
      <div className="mb-10 border-b border-ink-200 pb-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500">Your practice history</p>
        <h1 className="text-3xl font-bold text-ink-900 sm:text-4xl">My Results</h1>
        <p className="mt-3 text-sm text-ink-700">
          {attempts.length} attempt{attempts.length === 1 ? '' : 's'} stored privately on this device.
        </p>
      </div>

      {Object.entries(grouped).map(([examSlug, examAttempts]) => (
        <section key={examSlug} className="mb-10" aria-labelledby={`results-${examSlug}`}>
          <div className="mb-3 flex items-end justify-between gap-4">
            <h2 id={`results-${examSlug}`} className="text-lg font-bold text-ink-900">{examAttempts[0].examName}</h2>
            <span className="text-xs text-ink-500">{examAttempts.length} attempt{examAttempts.length === 1 ? '' : 's'}</span>
          </div>
          <div className="space-y-3">
            {examAttempts.map((a) => {
              const isOpen = expandedId === a.id;
              return (
                <div key={a.id} className="bg-white border border-ink-200">
                  <button
                    onClick={() => setExpandedId(isOpen ? null : a.id)}
                    className="flex min-h-20 w-full items-center justify-between gap-4 p-4 text-left transition hover:bg-ink-50 sm:p-5"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <div className="font-semibold text-sm text-ink-900">{a.testName}</div>
                      <div className="mt-1 text-xs text-ink-600">{new Date(a.submittedAt).toLocaleDateString()}</div>
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
        </section>
      ))}
    </div>
  );
}
