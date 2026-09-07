import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COUNTRIES } from '@/lib/exams';
import {
  LR_GRADE_BLURBS,
  LR_GRADE_LABELS,
  LR_MARKS_PER_CORRECT,
  LR_NAME,
  LR_SLUG,
  LR_TEST_SPECS,
  getAllLRTestIds,
  getLRGradeMix,
  getLRQuestions,
  getLRTestSpec,
} from '@/lib/logical-reasoning';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, jsonLdHtml } from '@/lib/schema';
import Breadcrumbs from '@/components/Breadcrumbs';

export function generateStaticParams() {
  return COUNTRIES.flatMap((country) => getAllLRTestIds().map((testId) => ({ country, testId })));
}

function describe(testId: string) {
  const spec = getLRTestSpec(testId);
  if (!spec) return null;
  const questions = getLRQuestions(spec);
  const mix = getLRGradeMix(spec);
  // Source topic labels, deduplicated: these come from the question banks, so
  // they name what is actually inside the set rather than a promised syllabus.
  const topics = [...new Set(questions.map((question) => question.topic).filter(Boolean))] as string[];
  return { spec, questions, mix, topics };
}

export async function generateMetadata({ params }: { params: Promise<{ country: string; testId: string }> }) {
  const { country, testId } = await params;
  const found = describe(testId);
  if (!found) return {};
  const { spec, questions } = found;
  return pageMetadata({
    // Topic sets lead with the family name rather than the section name: it is
    // the distinguishing half, and "Logical Reasoning Venn Diagrams &
    // Classification Set" overruns the SERP title budget to say less.
    title:
      spec.kind === 'difficulty'
        ? `Logical Reasoning ${spec.name}: Free Practice Test`
        : `${spec.family}: Free Reasoning Practice Test`,
    description:
      spec.kind === 'difficulty'
        ? `Attempt ${questions.length} ${spec.level} logical reasoning questions in ${spec.duration} minutes. No negative marking, instant result, explanation for every question.`
        : `Practise ${spec.family} with ${questions.length} graded questions in ${spec.duration} minutes. No negative marking, instant result and full explanations.`,
    path: `/${country}/${LR_SLUG}/test/${testId}`,
  });
}

export default async function LogicalReasoningTestPage({
  params,
}: {
  params: Promise<{ country: string; testId: string }>;
}) {
  const { country, testId } = await params;
  const found = describe(testId);
  if (!found) return notFound();
  const { spec, questions, mix, topics } = found;
  const base = `/${country}/${LR_SLUG}`;
  const siblings = LR_TEST_SPECS.filter((other) => other.kind === spec.kind && other.id !== spec.id).slice(0, 6);

  const jsonLd = [
    breadcrumbSchema([
      { name: 'Home', path: `/${country}` },
      { name: LR_NAME, path: base },
      { name: spec.name, path: `${base}/test/${spec.id}` },
    ]),
  ];

  return (
    <div className="mx-auto max-w-4xl px-5 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Breadcrumbs
        items={[
          { label: 'Home', href: `/${country}` },
          { label: 'Logical reasoning', href: base },
          { label: spec.name },
        ]}
      />

      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-action-700">
        {spec.kind === 'difficulty' ? 'Difficulty ladder' : 'Topic set'}
      </p>
      <h1 className="font-sans text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">
        Logical Reasoning: {spec.name}
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-6 text-ink-700">
        {spec.kind === 'difficulty'
          ? `${LR_GRADE_BLURBS[spec.level ?? 'easy']} Questions are drawn across reasoning families so no single topic decides your score.`
          : `${spec.family} only, end to end, at the spread of difficulty this family naturally has.`}
      </p>

      <dl className="mt-6 grid grid-cols-2 border-l border-t border-ink-200 bg-white sm:grid-cols-4">
        <div className="border-b border-r border-ink-200 p-3">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-ink-500">Questions</dt>
          <dd className="mt-1 text-lg font-bold text-ink-900">{questions.length}</dd>
        </div>
        <div className="border-b border-r border-ink-200 p-3">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-ink-500">Time</dt>
          <dd className="mt-1 text-lg font-bold text-ink-900">{spec.duration} min</dd>
        </div>
        <div className="border-b border-r border-ink-200 p-3">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-ink-500">Marks per correct</dt>
          <dd className="mt-1 text-lg font-bold text-ink-900">+{LR_MARKS_PER_CORRECT}</dd>
        </div>
        <div className="border-b border-r border-ink-200 p-3">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-ink-500">Wrong answer</dt>
          <dd className="mt-1 text-lg font-bold text-ink-900">0</dd>
        </div>
      </dl>

      <Link
        href={`${base}/test/${spec.id}/attempt`}
        className="mt-6 inline-flex min-h-11 items-center bg-ink-900 px-6 text-sm font-semibold text-white transition hover:bg-ink-700"
      >
        Start test
      </Link>

      <section aria-labelledby="instructions" className="mt-10">
        <h2 id="instructions" className="text-xl font-bold text-ink-900">Before you start</h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-ink-700">
          <li>One timer of {spec.duration} minutes runs for the whole set; the test submits itself when it ends.</li>
          <li>
            Every question is worth {LR_MARKS_PER_CORRECT} mark and a wrong answer costs nothing, so leave nothing blank.
            That is not how the source exams mark these questions, which means a score here is not comparable with the
            same questions attempted inside an exam mock.
          </li>
          <li>Answers and remaining time are saved in this browser, so a reload will not lose your work.</li>
          <li>Your result appears the moment you submit, with a worked explanation for every question.</li>
        </ul>
      </section>

      <section aria-labelledby="mix" className="mt-10">
        <h2 id="mix" className="text-xl font-bold text-ink-900">What is inside</h2>
        <p className="mt-3 text-sm leading-6 text-ink-700">
          Graded on this section&rsquo;s own absolute scale: {mix.easy} {LR_GRADE_LABELS.easy.toLowerCase()},{' '}
          {mix.medium} {LR_GRADE_LABELS.medium.toLowerCase()}, {mix.hard} {LR_GRADE_LABELS.hard.toLowerCase()}.
        </p>
        {topics.length > 0 && (
          <>
            <h3 className="mt-5 text-sm font-bold text-ink-900">Topics covered</h3>
            <ul className="mt-2 flex flex-wrap gap-2">
              {topics.map((topic) => (
                <li key={topic} className="border border-ink-200 bg-white px-2.5 py-1 text-xs text-ink-700">{topic}</li>
              ))}
            </ul>
          </>
        )}
      </section>

      {siblings.length > 0 && (
        <section aria-labelledby="more" className="mt-10">
          <h2 id="more" className="text-xl font-bold text-ink-900">
            {spec.kind === 'difficulty' ? 'Other difficulty sets' : 'Other topic sets'}
          </h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {siblings.map((other) => (
              <li key={other.id}>
                <Link href={`${base}/test/${other.id}`} className="text-sm font-semibold text-ink-900 hover:underline">
                  {other.kind === 'topic' ? other.family : other.name}
                </Link>
                <span className="ml-2 text-xs text-ink-500">{other.questionIds.length} questions</span>
              </li>
            ))}
          </ul>
          <Link href={base} className="mt-4 inline-block text-sm font-semibold text-action-700 hover:underline">
            See all logical reasoning practice &rarr;
          </Link>
        </section>
      )}
    </div>
  );
}
