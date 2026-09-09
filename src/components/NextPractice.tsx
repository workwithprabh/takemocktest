'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { recommendPractice, type PracticeOption, type TopicPerformance } from '@/lib/practice-recommendations';

export default function NextPractice({ country, examSlug, testId, stats }: {
  country: string; examSlug: string; testId: string; stats: TopicPerformance[];
}) {
  const [catalog, setCatalog] = useState<{ slug: string; options: PracticeOption[] } | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    fetch(`/practice-index/${encodeURIComponent(examSlug)}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error('Practice index unavailable');
        return response.json() as Promise<PracticeOption[]>;
      })
      .then((options) => setCatalog({ slug: examSlug, options }))
      .catch((error: unknown) => {
        if (!(error instanceof DOMException && error.name === 'AbortError')) setCatalog({ slug: examSlug, options: [] });
      });
    return () => controller.abort();
  }, [examSlug]);
  const recommendations = recommendPractice(stats, catalog?.slug === examSlug ? catalog.options : [], testId);

  return (
    <section className="mb-8 border border-ink-200 bg-white p-5" aria-label="What to practise next">
      <h2 className="text-xl font-bold text-ink-900">What to practise next</h2>
      <p className="mt-2 text-sm text-ink-600">Based on this attempt only. Suggestions need at least three attempted questions and 50% topic coverage.</p>
      {catalog === null ? (
        <p className="mt-4 text-sm text-ink-700" role="status">Finding relevant tests…</p>
      ) : recommendations.length > 0 ? (
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {recommendations.map((stat) => (
            <div key={JSON.stringify([stat.section, stat.topic])} className="border border-ink-200 bg-ink-50 p-4">
              <p className="text-xs text-ink-500">{stat.section}</p>
              <h3 className="mt-1 font-semibold text-ink-900">{stat.topic}</h3>
              <p className="mt-2 text-sm text-ink-700">{stat.correct} of {stat.attempted} attempted answers fully correct ({Math.round(stat.correct / stat.attempted * 100)}%).</p>
              {stat.match ? (
                <>
                  <p className="mt-2 text-xs text-ink-600">{stat.match.count} questions on this topic in a {stat.match.option.total}-question test. Some questions may repeat earlier practice.</p>
                  <Link href={`/${country}/${examSlug}/test/${stat.match.option.id}`} className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-action-700 underline underline-offset-4">
                    Practise: {stat.match.option.name} →
                  </Link>
                </>
              ) : (
                <p className="mt-3 text-sm text-ink-600">Review this topic’s answers below before choosing another test.</p>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-4 text-sm text-ink-700">There aren’t enough lower-accuracy answers to suggest a topic. Review incorrect or skipped answers, or choose another test.</p>
      )}
      <a href="#answer-review" className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-action-700 underline underline-offset-4">Review answers ↓</a>
    </section>
  );
}
