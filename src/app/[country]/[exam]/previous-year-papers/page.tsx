import Link from 'next/link';
import { EXAM_LIST, getExam } from '@/lib/exams';
import { getExamGuide } from '@/lib/exam-guides';
import { notFound } from 'next/navigation';
import ExamInfoPageContent from '@/components/ExamInfoPageContent';
import GuideBlocks from '@/components/GuideBlocks';
import { pageMetadata } from '@/lib/metadata';

export function generateStaticParams() {
  return EXAM_LIST.map((exam) => ({ exam: exam.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ exam: string }> }) {
  const { exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return {};
  const guide = getExamGuide(examSlug, 'previous-year-papers');
  if (guide) {
    return pageMetadata({ title: guide.title, description: guide.description, path: `/in/${exam.slug}/previous-year-papers` });
  }
  return pageMetadata({
    title: `${exam.name} Previous Year Papers: Verification in Progress`,
    description: `${exam.name} previous-year papers will be published after their source and shift details are verified.`,
    path: `/in/${exam.slug}/previous-year-papers`,
    noIndex: true,
  });
}

export default async function PreviousYearPapersPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();
  const guide = getExamGuide(examSlug, 'previous-year-papers');

  if (guide) {
    return (
      <ExamInfoPageContent country={country} exam={exam} pageName="Previous Year Papers" pageSlug="previous-year-papers" heading={guide.heading}>
        <div className="space-y-6">
          <GuideBlocks blocks={guide.blocks} />
          <section className="border border-ink-200 bg-ink-900 text-ink-50 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <h2 className="text-xl font-bold mb-2">Practice the current pattern</h2>
              <p className="text-sm leading-6 text-ink-300">Use checked {exam.name} mocks while verified shift-wise paper sets are being prepared.</p>
            </div>
            <Link
              href={`/${country}/${exam.slug}/mock-test`}
              className="inline-flex min-h-11 items-center justify-center bg-ink-50 text-ink-900 px-5 py-2.5 text-sm font-semibold shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-50"
            >
              View {exam.name} mock tests
            </Link>
          </section>
        </div>
      </ExamInfoPageContent>
    );
  }

  return (
    <ExamInfoPageContent
      country={country}
      exam={exam}
      pageName="Previous Year Papers"
      pageSlug="previous-year-papers"
      placeholder="No verified papers are published yet. Use the free mock tests while this resource is being prepared."
    />
  );
}
