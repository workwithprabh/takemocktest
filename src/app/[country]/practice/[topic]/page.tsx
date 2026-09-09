import Link from 'next/link';
import { countryPublishes, isExamInCountry } from '@/lib/exam-countries';
import { notFound } from 'next/navigation';
import { COUNTRIES, getExam } from '@/lib/exams';
import {
  PRACTICE_SLUG,
  getAverageHardShare,
  getEasyShare,
  getHardShare,
  getPublishedTopicSlugs,
  getTopicCategories,
  getTopicPool,
  getTopicPracticeDuration,
  getTopicPracticeQuestions,
  type TopicPool,
} from '@/lib/practice-topics';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, faqPageSchema, jsonLdHtml, quizWithQuestionsSchema } from '@/lib/schema';
import Breadcrumbs from '@/components/Breadcrumbs';

export function generateStaticParams() {
  return COUNTRIES.flatMap((country) => getPublishedTopicSlugs().map((topic) => ({ country, topic })));
}

const YEAR = new Date().getFullYear();

// Worked examples are the only fully unique content on a topic page and the
// thing "<topic> questions with answers" is actually looking for, so they carry
// the page rather than decorating it.
const SAMPLE_COUNT = 6;

/**
 * FAQs built from each pool's own numbers.
 *
 * Two design rules, both learned by measuring rather than by taste:
 *
 * 1. NOT one template with the topic name swapped in. That is what made 48% of
 *    this page identical to the other thirty-nine on first release.
 * 2. Only questions whose ANSWER actually varies between topics. A derived
 *    answer that collapses to the same sentence everywhere is boilerplate in a
 *    data costume — the negative-marking question was exactly that, resolving
 *    to "0 to One-fourth of the marks" on 36 of 40 pages, so it was cut and the
 *    point now lives once on the section index instead of forty times here.
 *
 * The standing caveats — how scoring works, that progress is saved locally,
 * that this site grades difficulty on its own scale — are all on
 * /in/practice, said once. Repeating them per topic added words and subtracted
 * distinctiveness.
 */
function faqsFor(pool: TopicPool) {
  const { name } = pool.topic;
  const lower = name.toLowerCase();
  const count = pool.questions.length;
  const exams = pool.examSlugs.length;
  const hard = getHardShare(pool);
  const easy = getEasyShare(pool);
  const average = getAverageHardShare();
  const categories = getTopicCategories(pool);

  const spread = categories
    .slice(0, 3)
    .map((entry) => `${entry.category} (${entry.count})`)
    .join(', ');

  const relative =
    hard > average + 5
      ? `one of the harder topics in this section, against a ${average}% average`
      : hard < average - 5
        ? `one of the more tractable topics in this section, against a ${average}% average`
        : `about average for this section, where the mean is ${average}%`;

  return [
    {
      q: `How many ${lower} questions are there?`,
      a: `${count}, from the ${exams} exams here whose syllabus sets the topic. ${easy}% are graded easy and ${hard}% hard, which makes ${lower} ${relative}.`,
    },
    {
      q: `Which exams ask ${lower} questions?`,
      a: `${exams} of the exams on this site, weighted towards ${spread}. Every question in this pool comes from one of their own mock tests, so the list below is the honest answer to whether the topic is worth your time.`,
    },
    {
      q: `Is ${lower} hard?`,
      a: `${hard}% of these ${count} questions are graded hard and ${easy}% easy, making it ${relative}.`,
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
  const faqs = faqsFor(pool);
  const categories = getTopicCategories(pool);
  const topCategories = categories
    .slice(0, 3)
    .map((entry) => entry.category)
    .join(', ');
  const hardShare = getHardShare(pool);
  const easyShare = getEasyShare(pool);
  const averageHard = getAverageHardShare();
  const exams = pool.examSlugs
    .map((examSlug) => {
      const exam = getExam(examSlug);
      return exam ? { slug: examSlug, name: exam.shortName ?? exam.name } : null;
    })
    .filter((entry): entry is { slug: string; name: string } => entry !== null)
    .sort((a, b) => a.name.localeCompare(b.name));
  // Link only a bounded number of exams. A pool can span 69 exams, and linking
  // every one put 78 internal links on a 780-word page — roughly twenty times
  // any sensible link density. That spreads this page's link equity across the
  // site far too thinly and reads as a link dump rather than a useful list.
  // The rest are still named, as text, so nothing is hidden from the reader.
  const MAX_LINKED_EXAMS = 12;
  // A country that publishes no exams still draws its pool from the same banks,
  // so the source exams are still worth naming: they are what makes the pool
  // credible. They just cannot be links, because those exam pages do not exist
  // in this subfolder. Naming them as plain text keeps the provenance and drops
  // the dead links.
  // An exam is linkable only where its own pages exist, which is a per-exam
  // question and not a per-country one. The pool is drawn from the whole
  // corpus, so an /in pool contains JAMB and an /ng pool contains the Indian
  // exams; linking either blindly is a dead link. Unavailable exams are still
  // named, because the provenance is what makes the pool credible.
  const availableExams = exams.filter((exam) => isExamInCountry(exam.slug, country));
  const unavailableExams = exams.filter((exam) => !isExamInCountry(exam.slug, country));
  const linkedExams = availableExams.slice(0, MAX_LINKED_EXAMS);
  const remainingExams = [...availableExams.slice(MAX_LINKED_EXAMS), ...unavailableExams];
  const hasExamDirectory = countryPublishes(country, 'exams');
  const siblings = getPublishedTopicSlugs()
    .filter((other) => other !== slug && getTopicPool(other)?.topic.family === family)
    .slice(0, 6);

  const jsonLd = [
    breadcrumbSchema([
      { name: 'Home', path: `/${country}` },
      { name: 'Topic Practice', path: base },
      { name, path: `${base}/${slug}` },
    ]),
    // Only the worked examples actually printed below go into `hasPart`, so
    // the markup describes exactly what a reader can see.
    quizWithQuestionsSchema({
      name: `${name} practice questions`,
      description: `${pool.questions.length} ${name.toLowerCase()} questions with worked solutions, pooled from ${pool.examSlugs.length} competitive exams.`,
      path: `${base}/${slug}`,
      about: name,
      questions: samples.map((question) => ({
        question: question.question,
        answer: `${question.options[question.correctIndex] ?? ''}. ${question.explanation}`.trim(),
      })),
    }),
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
        {blurb} This page pools every {name.toLowerCase()} question on the site ({pool.questions.length} of
        them, from {exams.length} exams, weighted towards {topCategories}) so you can drill the topic on its
        own instead of meeting four of them inside a full paper.
      </p>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-ink-700">
        {hardShare}% of the pool is graded hard on this site&rsquo;s own scale and {easyShare}% easy, which is{' '}
        {hardShare > averageHard + 5
          ? 'harder than the average topic in this section'
          : hardShare < averageHard - 5
            ? 'gentler than the average topic in this section'
            : 'about average for this section'}
        .
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
          {samples.length} from the {pool.questions.length}-question pool, worked in full.
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
            {categories.length === 1
              ? `${categories[0].category} exams.`
              : `${categories.length} categories, led by ${topCategories}.`}
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {linkedExams.map((exam) => (
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
          {remainingExams.length > 0 && (
            <p className="mt-3 text-xs leading-5 text-ink-500">
              {linkedExams.length > 0 ? 'Also set by ' : 'Drawn from '}
              {remainingExams.map((exam) => exam.name).join(', ')}.
              {hasExamDirectory && (
                <>
                  {' '}
                  <Link href={`/${country}/exams`} className="font-semibold text-ink-900 underline">
                    Browse all exams
                  </Link>
                  .
                </>
              )}
            </p>
          )}
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
