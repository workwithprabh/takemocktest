import { displayLabel } from '@/lib/questions';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COUNTRIES } from '@/lib/exams';
import { isExamInCountry } from '@/lib/exam-countries';
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
  getLRSourceExams,
  getLRTestLabel,
  getLRTestSpec,
  getNextLRTest,
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
  return { spec, questions, mix, topics, sourceExams: getLRSourceExams(spec), next: getNextLRTest(spec) };
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
        : spec.variant && spec.variant > 1
          ? `${spec.family} Set ${spec.variant}: Free Practice Test`
          : `${spec.family}: Free Reasoning Practice Test`,
    description:
      spec.kind === 'difficulty'
        ? `Attempt ${questions.length} ${spec.level} logical reasoning questions in ${spec.duration} minutes. No negative marking, instant result, explanation for every question.`
        : `Practise ${spec.family} with ${questions.length} graded questions in ${spec.duration} minutes. No negative marking, instant result and full explanations.`,
        path: `/${country}/${LR_SLUG}/test/${testId}`,
    // Deliberately out of the index. These pages are products to attempt, not
    // search landing pages: "logical reasoning easy set 4" is not a query
    // anyone types, and the fifteen topic sets competed directly with the
    // topic-practice pages on eight terms (syllogism, blood relations,
    // direction sense and the rest) while holding 25 questions against those
    // pages' hundreds. The hub itself stays indexed and carries the section.
    noIndex: true,
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
  const { spec, questions, mix, topics, sourceExams, next } = found;
  const base = `/${country}/${LR_SLUG}`;
  const siblings = LR_TEST_SPECS.filter((other) => other.kind === spec.kind && other.id !== spec.id).slice(0, 6);
  // The source exams are named in every country, because they are what makes
  // the set credible. Whether each one is linked is a per-exam question: these
  // sets draw on the whole corpus, so most of their sources have no page under
  // a country that lists only its own exams, and linking them anyway put 25
  // dead links on every /ng reasoning page.
  const linkableExams = new Set(
    sourceExams.filter((exam) => isExamInCountry(exam.slug, country)).map((exam) => exam.slug),
  );

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
          : `${spec.family} only, end to end, at the spread of difficulty this family naturally has.${
              spec.variant && spec.variant > 1 ? ' No question here appears in the earlier set for this family.' : ''
            }`}
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
                <li key={topic} className="border border-ink-200 bg-white px-2.5 py-1 text-xs text-ink-700">{displayLabel(topic)}</li>
              ))}
            </ul>
          </>
        )}
      </section>

      {sourceExams.length > 0 && (
        <section aria-labelledby="sources" className="mt-10">
          <h2 id="sources" className="text-xl font-bold text-ink-900">Where these questions come from</h2>
          <p className="mt-3 text-sm leading-6 text-ink-700">
            Every question in this set already appears in the reasoning section of a real exam mock on this site.
            Reasoning is the one part of a paper that is not exam-specific, so the same puzzle is legitimate practice
            whichever of these you are sitting.
            {linkableExams.size > 0
              ? ' If one of them is your exam, attempt it there too, under that exam\u2019s own timing and negative marking, which this section deliberately drops.'
              : ' That is why the set stands on its own here: the reasoning is the same reasoning, whatever paper it was originally written for.'}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {sourceExams.map((exam) => (
              <li key={exam.slug}>
                {linkableExams.has(exam.slug) ? (
                  <Link
                    href={`/${country}/${exam.slug}/mock-test`}
                    className="inline-block border border-ink-200 bg-white px-3 py-1.5 text-xs font-semibold text-ink-900 transition hover:border-ink-900"
                  >
                    {exam.name}
                  </Link>
                ) : (
                  <span className="inline-block border border-ink-200 bg-white px-3 py-1.5 text-xs font-semibold text-ink-900">
                    {exam.name}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {next && (
        <section aria-labelledby="next-up" className="mt-10 border-l-2 border-action-600 bg-action-50 p-5">
          <h2 id="next-up" className="text-lg font-bold text-ink-900">Next in the ladder</h2>
          <p className="mt-2 text-sm leading-6 text-ink-700">
            Finished this one inside the timer? {getLRTestLabel(next)} is the next step.
          </p>
          <Link
            href={`${base}/test/${next.id}`}
            className="mt-3 inline-flex min-h-11 items-center bg-ink-900 px-4 text-sm font-semibold text-white transition hover:bg-ink-700"
          >
            Go to {getLRTestLabel(next)}
          </Link>
        </section>
      )}

      {siblings.length > 0 && (
        <section aria-labelledby="more" className="mt-10">
          <h2 id="more" className="text-xl font-bold text-ink-900">
            {spec.kind === 'difficulty' ? 'Other difficulty sets' : 'Other topic sets'}
          </h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {siblings.map((other) => (
              <li key={other.id}>
                <Link href={`${base}/test/${other.id}`} className="text-sm font-semibold text-ink-900 hover:underline">
                  {getLRTestLabel(other)}
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
