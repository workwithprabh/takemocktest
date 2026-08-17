import Link from 'next/link';
import { EXAM_LIST, getCheckedTestCount, getExam, getExamOverviewCopy } from '@/lib/exams';
import { getExamPatternFaqs, getExamFactFaqs } from '@/lib/exam-faqs';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/Breadcrumbs';
import { UPDATE_CATEGORY_STYLES, formatUpdateDate, getUpdatesForExam } from '@/lib/updates';

export function generateStaticParams() {
  return EXAM_LIST.map((exam) => ({ exam: exam.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ exam: string }> }) {
  const { exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return {};
  const hasCheckedTests = getCheckedTestCount(exam) > 0;
  const hasOfficialPattern = exam.stages.some((stage) => stage.pattern.status === 'official');
  return pageMetadata({
    title: hasCheckedTests
      ? `${exam.name}: Free Mock Tests & Exam Pattern`
      : hasOfficialPattern
        ? `${exam.name}: Exam Pattern, Syllabus & Eligibility`
        : `${exam.name}: Practice Demo & Upcoming Resources`,
    description: hasCheckedTests
      ? `Practice checked ${exam.name} mock tests and review the verified exam pattern, timing, marks, and negative marking.`
      : hasOfficialPattern
        ? `Review the verified ${exam.name} exam pattern, syllabus, eligibility criteria, and selection process.`
        : `Try the ${exam.name} test interface demo. Verified exam resources will be published after official source checks are complete.`,
    path: `/in/${exam.slug}`,
    noIndex: !hasCheckedTests && !hasOfficialPattern,
  });
}

// Exam landing page: the hub that links out to the four SEO page types
// the research identified (mock-test, previous-year-papers, syllabus, exam-pattern).
export default async function ExamOverviewPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();

  const hasCheckedTests = getCheckedTestCount(exam) > 0;
  const hasOfficialPattern = exam.stages.some((stage) => stage.pattern.status === 'official');
  const latestExamUpdates = getUpdatesForExam(exam.slug, 3);
  const links = [
    {
      href: 'mock-test',
      label: hasCheckedTests ? `${exam.name} Mock Tests` : 'Test Interface Demo',
      desc: hasCheckedTests ? 'Checked full and sectional tests' : 'Try the interface; a checked full mock is not published yet',
    },
    ...(hasOfficialPattern
      ? [{ href: 'exam-pattern', label: 'Exam Pattern', desc: 'Marks, duration, and negative marking' }]
      : []),
    ...(['ssc-cgl', 'ibps-po'].includes(exam.slug)
      ? [
          { href: 'syllabus', label: 'Syllabus', desc: 'Official structure and clearly labelled topic coverage' },
          { href: 'eligibility', label: 'Eligibility', desc: 'Age, qualification, and citizenship rules' },
          { href: 'selection-process', label: 'Selection Process', desc: 'Every stage from the first exam to final selection' },
        ]
      : []),
    ...(exam.slug === 'ssc-cgl'
      ? [{ href: 'salary', label: 'Salary', desc: 'Official pay levels and basic-pay ranges' }]
      : []),
  ];

  const faqs = [...getExamPatternFaqs(exam), ...getExamFactFaqs(exam)];
  const jsonLd = [
    breadcrumbSchema([
      { name: 'Home', path: `/${country}` },
      { name: exam.name, path: `/${country}/${exam.slug}` },
    ]),
    ...(faqs.length > 0 ? [faqPageSchema(faqs.map((f) => ({ q: f.q, a: f.a })))] : []),
  ];

  return (
    <div className="max-w-6xl mx-auto px-5 py-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={[
        { label: 'Home', href: `/${country}` },
        { label: 'Exams', href: `/${country}/exams` },
        { label: exam.name },
      ]} />
      <h1 className="font-sans font-bold text-2xl mb-1 text-ink-900">{exam.name}</h1>
      <p className="text-ink-500 text-sm mb-6">{exam.fullName}</p>
      <p className="mb-3 max-w-2xl text-sm leading-6 text-ink-700">
        {getExamOverviewCopy(exam) ??
          (hasCheckedTests || hasOfficialPattern
            ? 'Use the verified resources below.'
            : 'A practice interface demo is available. Verified exam resources will be added only after their official source details are complete.')}
      </p>
      <p className="mb-6 max-w-2xl text-sm leading-6 text-ink-500">
        Unfinished pages stay out of this navigation until their source details are complete.
      </p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
          <Link
            key={l.href}
            href={`/${country}/${exam.slug}/${l.href}`}
            className="bg-white border border-ink-200 p-4 hover:border-ink-900 transition"
          >
            <div className="font-sans font-semibold text-sm mb-1 text-ink-900">{l.label}</div>
            <div className="text-xs text-ink-500">{l.desc}</div>
          </Link>
        ))}
      </div>

      {latestExamUpdates.length > 0 && (
        <section className="mt-12" aria-labelledby="exam-updates-heading">
          <div className="mb-4 flex items-end justify-between gap-4">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Official-source summaries</p>
              <h2 id="exam-updates-heading" className="text-lg font-bold text-ink-900">Latest {exam.name} updates</h2>
            </div>
            <Link href={`/${country}/exam-updates?exam=${exam.slug}`} className="text-sm font-semibold text-ink-900 hover:underline">View all</Link>
          </div>
          <div className="divide-y divide-ink-200 border border-ink-200 bg-white">
            {latestExamUpdates.map((update) => (
              <Link key={update.slug} href={`/${country}/exam-updates/${update.slug}`} className="grid gap-2 px-4 py-4 transition hover:bg-ink-50 sm:grid-cols-[110px_1fr_auto] sm:items-center">
                <time dateTime={update.publishedAt} className="text-xs font-semibold text-ink-500">{formatUpdateDate(update.publishedAt)}</time>
                <span>
                  <span className={`mr-2 px-2 py-1 text-[10px] font-semibold ${UPDATE_CATEGORY_STYLES[update.category]}`}>{update.category}</span>
                  <span className="text-sm font-semibold text-ink-900">{update.headline}</span>
                </span>
                <span className="text-ink-500" aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <div className="mt-12 max-w-2xl">
          <h2 className="font-sans font-semibold text-lg mb-4 text-ink-900">Frequently asked questions</h2>
          <div className="space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="bg-white border border-ink-200 p-4">
                <summary className="font-medium text-sm cursor-pointer text-ink-900">{f.q}</summary>
                <p className="text-sm text-ink-500 mt-2">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
