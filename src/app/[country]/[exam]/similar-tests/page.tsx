import { REASONING_SHARE_RECEIVERS, getExam, getSharedTests } from '@/lib/exams';
import { getQuestionsForTest } from '@/lib/questions';
import { breadcrumbSchema, organizationSchema, jsonLdHtml } from '@/lib/schema';
import { pageMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/Breadcrumbs';
import TestRow from '@/components/TestRow';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// Only generated for exams that actually have shared content — building this
// page for all ~100 exams (most with zero matches) would itself be exactly
// the thin/templated-content problem this site avoids elsewhere.
export function generateStaticParams() {
  return REASONING_SHARE_RECEIVERS.map((exam) => ({ exam }));
}

export async function generateMetadata({ params }: { params: Promise<{ exam: string }> }) {
  const { exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam || getSharedTests(exam).length === 0) return {};
  return pageMetadata({
    title: `Similar Tests to ${exam.shortName ?? exam.name}, Extra Reasoning Practice`,
    description: `Additional Reasoning Ability practice tests for ${exam.name}, sourced from exams that share its exact scoring pattern, scored using ${exam.name}'s own marking scheme.`,
    path: `/in/${exam.slug}/similar-tests`,
  });
}

export default async function SimilarTestsPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();

  const sharedTests = getSharedTests(exam);
  if (sharedTests.length === 0) return notFound();

  // Group by source exam, preserving each source's own numbered order.
  const groups = new Map<string, typeof sharedTests>();
  for (const test of sharedTests) {
    const key = test.sharedFrom!;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(test);
  }
  const sourceExamNames = [...groups.keys()].map((slug) => getExam(slug)?.name ?? slug);

  const jsonLd = [
    breadcrumbSchema([
      { name: 'Home', path: `/${country}` },
      { name: exam.name, path: `/${country}/${exam.slug}` },
      { name: 'Mock tests', path: `/${country}/${exam.slug}/mock-test` },
      { name: 'Similar Tests', path: `/${country}/${exam.slug}/similar-tests` },
    ]),
    organizationSchema(),
  ];

  return (
    <div className="mx-auto max-w-4xl px-5 py-8 md:py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />

      <Breadcrumbs items={[
        { label: 'Home', href: `/${country}` },
        { label: exam.name, href: `/${country}/${exam.slug}` },
        { label: 'Mock tests', href: `/${country}/${exam.slug}/mock-test` },
        { label: 'Similar Tests' },
      ]} />

      <p className="mb-2 mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-action-700">Extra practice</p>
      <h1 className="font-sans text-3xl font-bold tracking-tight text-ink-900 md:text-5xl">Similar Tests to {exam.name}</h1>

      <div className="mt-6 border border-ink-200 bg-ink-50 p-5">
        <p className="text-sm leading-6 text-ink-700">
          These tests draw from exams whose Reasoning section shares {exam.name}&apos;s exact official spec for that test — same marks per question, same negative marking, same time per question — confirmed from each exam&apos;s own official pattern, not assumed from a section name. They&apos;re sourced from {sourceExamNames.join(', ')}.
        </p>
        <p className="mt-3 text-sm leading-6 text-ink-700">
          <strong className="text-ink-900">Scoring stays {exam.name}&apos;s own:</strong> clicking into any test below still scores using the marking scheme shown on that test (matching {exam.name}&apos;s own official pattern for that section). Only the questions are shared — nothing about how this counts toward your {exam.name} prep changes.
        </p>
      </div>

      <div className="mt-8 space-y-8">
        {[...groups.entries()].map(([sourceSlug, tests]) => {
          const sourceExam = getExam(sourceSlug);
          return (
            <div key={sourceSlug}>
              <h2 className="mb-3 font-sans font-semibold text-lg text-ink-900">From {sourceExam?.name ?? sourceSlug}</h2>
              <div className="border border-ink-200 bg-white">
                {tests.map((test) => (
                  <TestRow
                    key={test.id}
                    href={`/${country}/${exam.slug}/test/${test.id}`}
                    name={test.name}
                    questions={getQuestionsForTest(exam.slug, test.id).length}
                    minutes={test.duration}
                    kind={test.kind}
                    contentStatus={test.status}
                    checkedOn={test.checkedOn}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10">
        <Link href={`/${country}/${exam.slug}/mock-test`} className="inline-flex min-h-11 items-center border border-ink-200 bg-white px-5 text-sm font-semibold text-ink-900 hover:border-ink-900">
          ← Back to {exam.name} mock tests
        </Link>
      </div>
    </div>
  );
}
