import Link from 'next/link';
import { EXAM_LIST, getCheckedTestCount, getExam } from '@/lib/exams';
import { breadcrumbSchema } from '@/lib/schema';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/metadata';
import Breadcrumbs from '@/components/Breadcrumbs';

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
      ? `${exam.name} — Free Mock Tests & Exam Pattern`
      : hasOfficialPattern
        ? `${exam.name} — Exam Pattern, Syllabus & Eligibility`
        : `${exam.name} — Practice Demo & Upcoming Resources`,
    description: hasCheckedTests
      ? `Practice checked ${exam.name} mock tests and review the verified exam pattern, timing, marks, and negative marking.`
      : hasOfficialPattern
        ? `Review the verified ${exam.name} exam pattern, syllabus, eligibility criteria, and selection process.`
        : `Try the ${exam.name} test interface demo. Verified exam resources will be published after official source checks are complete.`,
    path: `/in/${exam.slug}`,
    noIndex: !hasCheckedTests && !hasOfficialPattern,
  });
}

// Exam landing page — the hub that links out to the four SEO page types
// the research identified (mock-test, previous-year-papers, syllabus, exam-pattern).
export default async function ExamOverviewPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();

  const hasCheckedTests = getCheckedTestCount(exam) > 0;
  const hasOfficialPattern = exam.stages.some((stage) => stage.pattern.status === 'official');
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

  return (
    <div className="max-w-6xl mx-auto px-5 py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: `/${country}` },
              { name: exam.name, path: `/${country}/${exam.slug}` },
            ])
          ),
        }}
      />
      <Breadcrumbs items={[
        { label: 'Home', href: `/${country}` },
        { label: 'Exams', href: `/${country}/exams` },
        { label: exam.name },
      ]} />
      <h1 className="font-sans font-bold text-2xl mb-1 text-ink-900">{exam.name}</h1>
      <p className="text-ink-500 text-sm mb-6">{exam.fullName}</p>
      <p className="mb-6 max-w-2xl text-sm leading-6 text-ink-500">
        {hasCheckedTests || hasOfficialPattern
          ? 'Use the verified resources below. Unfinished pages stay out of this navigation until their source details are complete.'
          : 'A practice interface demo is available. Verified exam resources will be added only after their official source details are complete.'}
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
    </div>
  );
}
