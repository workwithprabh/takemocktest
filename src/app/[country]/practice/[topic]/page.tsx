import Link from 'next/link';
import { notFound } from 'next/navigation';
import { COUNTRIES, getExam } from '@/lib/exams';
import {
  PRACTICE_MARKS_PER_CORRECT,
  PRACTICE_SLUG,
  getPublishedTopicSlugs,
  getTopicPool,
  getTopicPracticeDuration,
  getTopicPracticeQuestions,
} from '@/lib/practice-topics';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, faqPageSchema, jsonLdHtml } from '@/lib/schema';
import Breadcrumbs from '@/components/Breadcrumbs';

export function generateStaticParams() {
  return COUNTRIES.flatMap((country) => getPublishedTopicSlugs().map((topic) => ({ country, topic })));
}

const YEAR = new Date().getFullYear();

/** Worked examples rendered on the page itself. */
const SAMPLE_COUNT = 3;

function faqsFor(name: string, count: number, exams: number, duration: number) {
  return [
    {
      q: `How many ${name} questions are there?`,
      a: `${count} ${name} questions, drawn from the ${exams} exams on this site whose syllabus sets the topic. Each practice run serves a timed set from that pool, and every question carries a worked explanation you can read the moment you submit.`,
    },
    {
      q: `Is there negative marking in ${name} practice?`,
      a: `No. Every question is worth ${PRACTICE_MARKS_PER_CORRECT} mark and a wrong answer costs nothing, so attempt all of them. Your exam almost certainly does penalise wrong answers, so treat the score here as a measure of the skill rather than a prediction of your paper.`,
    },
    {
      q: `Are these ${name} questions free?`,
      a: 'Yes, and no sign-up is required. Results are scored instantly and stored in your own browser on this device; nothing is uploaded and there is no account to create.',
    },
    {
      q: `How long does a ${name} practice test take?`,
      a: `${duration} minutes for a set of ${duration} questions — a steady minute each. The timer is there to build pace, not to catch you out, and your progress is saved if you leave and come back.`,
    },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ country: string; topic: string }> }) {
  const { country, topic: slug } = await params;
  const pool = getTopicPool(slug);
  if (!pool) return {};
  return pageMetadata({
    title: `${pool.topic.name} Questions with Answers ${YEAR}`,
    description: `${pool.questions.length} free ${pool.topic.name.toLowerCase()} questions with answers and explanations, pooled from ${pool.examSlugs.length} competitive exams. Timed practice, no negative marking, no sign-up.`,
    path: `/${country}/${PRACTICE_SLUG}/${slug}`,
  });
}

export default async function TopicPracticePage({
  params,
}: {
  params: Promise<{ country: string; topic: string }>;
}) {
  const { country, topic: slug } = await params;
  const pool = getTopicPool(slug);
  if (!pool) return notFound();

  const base = `/${country}/${PRACTICE_SLUG}`;
  const { name, family, blurb } = pool.topic;
  const duration = getTopicPracticeDuration(pool);
  const set = getTopicPracticeQuestions(pool);
  const samples = set.slice(0, SAMPLE_COUNT);
  const faqs = faqsFor(name, pool.questions.length, pool.examSlugs.length, duration);
  const exams = pool.examSlugs
    .map((examSlug) => {
      const exam = getExam(examSlug);
      return exam ? { slug: examSlug, name: exam.shortName ?? exam.name } : null;
    })
    .filter((entry): entry is { slug: string; name: string } => entry !== null)
    .sort((a, b) => a.name.localeCompare(b.name));
  const siblings = getPublishedTopicSlugs()
    .filter((other) => other !== slug && getTopicPool(other)?.topic.family === family)
    .slice(0, 6);

  const jsonLd = [
    breadcrumbSchema([
      { name: 'Home', path: `/${country}` },
      { name: 'Topic Practice', path: base },
      { name, path: `${base}/${slug}` },
    ]),
    faqPageSchema(faqs),
  ];

  return (
    <div className="mx-auto max-w-4xl px-5 py-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Breadcrumbs
        items={[
          { label: 'Home', href: `/${country}` },
          { label: 'Topic practice', href: base },
          { label: name },
        ]}
      />

      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-action-700">{family} practice</p>
      <h1 className="font-sans text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">
        {name} Questions with Answers
      </h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-700">
        {blurb} This page pools every {name.toLowerCase()} question on the site — {pool.questions.length} of them,
        from {exams.length} different exams — so you can drill the topic on its own instead of meeting four of them
        inside a full paper.
      </p>

      <dl className="mt-6 grid grid-cols-2 border-l border-t border-ink-200 bg-white sm:grid-cols-4">
        <div className="border-b border-r border-ink-200 p-3">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-ink-500">Questions</dt>
          <dd className="mt-1 text-lg font-bold text-ink-900">{pool.questions.length}</dd>
        </div>
        <div className="border-b border-r border-ink-200 p-3">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-ink-500">Practice set</dt>
          <dd className="mt-1 text-lg font-bold text-ink-900">{set.length} in {duration} min</dd>
        </div>
        <div className="border-b border-r border-ink-200 p-3">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-ink-500">Difficulty</dt>
          <dd className="mt-1 text-sm font-bold text-ink-900">
            {pool.difficulty.easy}/{pool.difficulty.medium}/{pool.difficulty.hard}
          </dd>
        </div>
        <div className="border-b border-r border-ink-200 p-3">
          <dt className="text-[10px] font-semibold uppercase tracking-wide text-ink-500">Negative marking</dt>
          <dd className="mt-1 text-sm font-bold text-ink-900">None</dd>
        </div>
      </dl>

      <Link
        href={`${base}/${slug}/attempt`}
        className="mt-6 inline-flex min-h-11 items-center bg-ink-900 px-6 text-sm font-semibold text-white transition hover:bg-ink-700"
      >
        Start {name} practice
      </Link>

      <section aria-labelledby="examples" className="mt-10">
        <h2 id="examples" className="text-xl font-bold text-ink-900">{name} questions with solutions</h2>
        <p className="mt-2 text-sm leading-6 text-ink-700">
          Three worked examples from the pool, with the reasoning written out. The timed set contains{' '}
          {set.length} questions like these.
        </p>
        <ol className="mt-4 space-y-5">
          {samples.map((question, index) => (
            <li key={question.id ?? index} className="border border-ink-200 bg-white p-5">
              <p className="text-sm font-semibold leading-6 text-ink-900">
                {index + 1}. {question.question}
              </p>
              {question.options.length > 0 && (
                <ul className="mt-3 space-y-1 text-sm text-ink-700">
                  {question.options.map((option, optionIndex) => (
                    <li key={optionIndex} className={optionIndex === question.correctIndex ? 'font-semibold text-ink-900' : ''}>
                      {String.fromCharCode(65 + optionIndex)}. {option}
                      {optionIndex === question.correctIndex && ' ✓'}
                    </li>
                  ))}
                </ul>
              )}
              <p className="mt-3 border-t border-ink-200 pt-3 text-sm leading-6 text-ink-700">
                <span className="font-semibold text-ink-900">Solution. </span>
                {question.explanation}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {exams.length > 0 && (
        <section aria-labelledby="exams" className="mt-10">
          <h2 id="exams" className="text-xl font-bold text-ink-900">Exams that set {name}</h2>
          <p className="mt-2 text-sm leading-6 text-ink-700">
            These are the exams whose banks this pool draws from — which is also the honest answer to whether the
            topic is worth your time: if your exam is on this list, it sets {name.toLowerCase()}.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {exams.map((exam) => (
              <li key={exam.slug}>
                <Link
                  href={`/${country}/${exam.slug}/mock-test`}
                  className="inline-block border border-ink-200 bg-white px-3 py-1.5 text-xs font-semibold text-ink-900 transition hover:border-ink-900"
                >
                  {exam.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section aria-labelledby="topic-faq" className="mt-10">
        <h2 id="topic-faq" className="text-xl font-bold text-ink-900">{name}: frequently asked questions</h2>
        <div className="mt-4 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="border border-ink-200 bg-white p-4">
              <summary className="cursor-pointer text-sm font-semibold text-ink-900">{faq.q}</summary>
              <p className="mt-2 text-sm leading-6 text-ink-700">{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

      {siblings.length > 0 && (
        <section aria-labelledby="more-topics" className="mt-10">
          <h2 id="more-topics" className="text-xl font-bold text-ink-900">More {family.toLowerCase()} topics</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {siblings.map((other) => {
              const sibling = getTopicPool(other)!;
              return (
                <li key={other}>
                  <Link href={`${base}/${other}`} className="text-sm font-semibold text-ink-900 hover:underline">
                    {sibling.topic.name}
                  </Link>
                  <span className="ml-2 text-xs text-ink-500">{sibling.questions.length} questions</span>
                </li>
              );
            })}
          </ul>
          <Link href={base} className="mt-4 inline-block text-sm font-semibold text-action-700 hover:underline">
            See all practice topics &rarr;
          </Link>
        </section>
      )}
    </div>
  );
}
