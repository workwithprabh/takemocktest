import Image from 'next/image';
import { EXAM_LIST, getExam, getSharedTests } from '@/lib/exams';
import { getQuestionsForTest } from '@/lib/questions';
import { getMockTestFaqs } from '@/lib/exam-faqs';
import { breadcrumbSchema, organizationSchema, faqPageSchema, jsonLdHtml } from '@/lib/schema';
import { pageMetadata } from '@/lib/metadata';
import { getPostsMentioningExam } from '@/lib/blog';
import { getBlogCategoryStyle } from '@/components/blog/BlogCategoryStyle';
import Breadcrumbs from '@/components/Breadcrumbs';
import MockTestTabs from './MockTestTabs';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() {
  return EXAM_LIST.map((exam) => ({ exam: exam.slug }));
}

const YEAR = new Date().getFullYear();

export async function generateMetadata({ params }: { params: Promise<{ exam: string }> }) {
  const { exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return {};
  const hasCheckedTests = exam.stages.some((stage) => stage.tests.some((test) => test.status === 'checked'));
  return pageMetadata({
    title: `${exam.shortName ?? exam.name} Mock Test ${YEAR}, Practice Free Test Series`,
    description: `Attempt free ${exam.name} practice tests with instant results and clearly labelled source-review status.`,
    path: `/in/${exam.slug}/mock-test`,
    noIndex: !hasCheckedTests,
    image: {
      url: '/images/students-taking-online-mock-test.webp',
      width: 1200,
      height: 900,
      alt: `Student taking an online ${exam.name} mock test`,
    },
  });
}

export default async function MockTestPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();

  const FAQS = getMockTestFaqs(exam);

  const stages = exam.stages.map((stage) => ({
    id: stage.id,
    name: stage.name,
    // sharedFrom tests are deliberately excluded from this exam's primary
    // list — they're real, checked, scored tests, but a student focused on
    // this exam should never see another exam's content mixed into their own
    // native test list. They're surfaced only via "Explore Similar Tests".
    tests: stage.tests.filter((test) => !test.sharedFrom).map((test) => ({
      testId: test.id,
      name: test.name,
      kind: test.kind,
      questions: getQuestionsForTest(exam.slug, test.id).length,
      minutes: test.duration,
      contentStatus: test.status,
      checkedOn: test.checkedOn,
    })),
  }));
  const sharedTests = getSharedTests(exam);

  const jsonLd = [
    breadcrumbSchema([
      { name: 'Home', path: `/${country}` },
      { name: exam.name, path: `/${country}/${exam.slug}` },
      { name: 'Mock Test', path: `/${country}/${exam.slug}/mock-test` },
    ]),
    organizationSchema(),
    ...(FAQS.length > 0 ? [faqPageSchema(FAQS)] : []),
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />

      <div className="border-b border-ink-200 bg-ink-50">
        <div className="mx-auto grid max-w-6xl gap-7 px-5 py-8 md:grid-cols-[1.05fr_0.95fr] md:items-center md:py-10">
          <div>
            <Breadcrumbs items={[
              { label: 'Home', href: `/${country}` },
              { label: exam.name, href: `/${country}/${exam.slug}` },
              { label: 'Mock tests' },
            ]} />
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-action-700">Free practice series</p>
            <h1 className="font-sans text-3xl font-bold tracking-tight text-ink-900 md:text-5xl">{exam.name} Mock Test {YEAR}</h1>
            <p className="mt-4 max-w-xl text-sm leading-6 text-ink-700 md:text-base">
              Attempt checked {exam.name} full mocks, sectional tests, and quick timed practice. No login is required, and every attempt ends with an instant result.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#tests" className="inline-flex min-h-11 items-center bg-ink-900 px-5 text-sm font-semibold text-white">Choose a test ↓</a>
              <Link href={`/${country}/${exam.slug}`} className="inline-flex min-h-11 items-center border border-ink-200 bg-white px-5 text-sm font-semibold text-ink-900 hover:border-ink-900">Exam overview</Link>
            </div>
          </div>
          <figure className="relative aspect-[4/3] overflow-hidden border border-ink-200 bg-white md:max-h-[330px]">
            <Image
              src="/images/students-taking-online-mock-test.webp"
              alt={`Student taking an online ${exam.name} mock test`}
              fill
              priority
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-5 py-10">
        <div id="tests" className="mb-14 scroll-mt-24 border border-ink-200 bg-white">
          <MockTestTabs country={country} examSlug={exam.slug} stages={stages} />
        </div>

        {sharedTests.length > 0 && (
          <section className="mb-14 border border-ink-200 bg-ink-50 p-5 md:flex md:items-center md:justify-between md:gap-6" aria-labelledby="similar-tests-heading">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">Want more practice?</p>
              <h2 id="similar-tests-heading" className="mt-1 text-lg font-bold text-ink-900">Explore Similar Tests</h2>
              <p className="mt-2 max-w-xl text-sm text-ink-500">
                {sharedTests.length} additional Reasoning tests from exams that share {exam.name}&apos;s exact scoring pattern, each still scored using {exam.name}&apos;s own marking scheme.
              </p>
            </div>
            <Link href={`/${country}/${exam.slug}/similar-tests`} className="mt-4 inline-flex min-h-11 items-center bg-ink-900 px-5 text-sm font-semibold text-ink-50 md:mt-0">
              Explore Similar Tests →
            </Link>
          </section>
        )}

        {exam.slug === 'ssc-cgl' && (
          <section className="mb-14 border border-ink-200 bg-ink-50 p-5 md:flex md:items-center md:justify-between md:gap-6" aria-labelledby="dest-practice-heading">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">Tier 2 qualifying skill test</p>
              <h2 id="dest-practice-heading" className="mt-1 text-lg font-bold text-ink-900">Practice the 15-minute DEST</h2>
              <p className="mt-2 max-w-xl text-sm text-ink-500">Type an original passage with refresh-safe progress and transparent practice indicators.</p>
            </div>
            <Link href={`/${country}/ssc-cgl/dest-practice`} className="mt-4 inline-flex min-h-11 items-center bg-ink-900 px-5 text-sm font-semibold text-ink-50 md:mt-0">
              Start DEST practice
            </Link>
          </section>
        )}

        <h2 className="font-sans font-semibold text-lg mb-4 text-ink-900">{exam.name} exam pattern</h2>
        <div className="mb-14 space-y-4">
          {exam.stages.map((stage) => (
            <div key={stage.id} className="border border-ink-200 bg-white p-5">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <h3 className="font-semibold text-ink-900">{stage.name}</h3>
                <span className="bg-ink-100 px-2 py-1 text-xs font-semibold text-ink-700">
                  {stage.pattern.status === 'official' ? `Official ${stage.pattern.cycle} pattern` : 'Official review pending'}
                </span>
              </div>
              {stage.pattern.status === 'official' ? (
                <>
                  <div className="grid gap-2 text-sm sm:grid-cols-3">
                    <div><span className="text-ink-500">Questions:</span> <strong>{stage.pattern.totalQuestions}</strong></div>
                    <div><span className="text-ink-500">Marks:</span> <strong>{stage.pattern.totalMarks}</strong></div>
                    <div><span className="text-ink-500">Duration:</span> <strong>{stage.pattern.duration} minutes</strong></div>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-ink-700">
                    {stage.pattern.sections.join(' · ')}. Negative marking: {stage.pattern.negativeMarking} per wrong answer.
                    {stage.pattern.timerNote ? ` ${stage.pattern.timerNote}.` : ''}
                  </p>
                  {stage.pattern.note && <p className="mt-2 text-xs leading-5 text-ink-700">{stage.pattern.note}</p>}
                  {stage.pattern.sourceUrl && (
                    <a href={stage.pattern.sourceUrl} className="mt-3 inline-block text-xs font-semibold text-ink-900 underline" target="_blank" rel="noreferrer">
                      Official source · checked {stage.pattern.checkedOn}
                    </a>
                  )}
                </>
              ) : (
                <p className="text-sm leading-6 text-ink-700">{stage.pattern.note}</p>
              )}
            </div>
          ))}
        </div>

        {(() => {
          const relatedPosts = getPostsMentioningExam(exam.name);
          if (relatedPosts.length === 0) return null;
          return (
            <div className="mb-14">
              <h2 className="font-sans font-semibold text-lg mb-4 text-ink-900">From the blog</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {relatedPosts.map((post) => {
                  const style = getBlogCategoryStyle(post.category);
                  return (
                    <Link
                      key={post.slug}
                      href={`/${country}/blog/${post.slug}`}
                      className="flex items-start gap-3 border border-ink-200 bg-white p-4 hover:border-ink-400"
                    >
                      <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center p-2 ${style.surface} ${style.iconText}`}>{style.icon}</span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">{post.category}</p>
                        <p className="mt-1 font-semibold text-sm text-ink-900">{post.title}</p>
                        <p className="mt-1 text-xs text-ink-500">{post.readTimeMin} min read</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })()}

        {FAQS.length > 0 && (
          <>
            <h2 className="font-sans font-semibold text-lg mb-4 text-ink-900">Frequently asked questions</h2>
            <div className="space-y-3">
              {FAQS.map((f) => (
                <details key={f.q} className="bg-white border border-ink-200 p-4">
                  <summary className="font-medium text-sm cursor-pointer text-ink-900">{f.q}</summary>
                  <p className="mt-2 text-sm leading-6 text-ink-700">{f.a}</p>
                </details>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
