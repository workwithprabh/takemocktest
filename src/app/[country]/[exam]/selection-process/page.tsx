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
  const guide = getExamGuide(examSlug, 'selection-process');
  if (guide) {
    return pageMetadata({ title: guide.title, description: guide.description, path: `/in/${exam.slug}/selection-process` });
  }
  return pageMetadata({
    title: `${exam.name} Selection Process ${new Date().getFullYear()}`,
    description: `A stage-by-stage breakdown of the ${exam.name} selection process.`,
    path: `/in/${exam.slug}/selection-process`,
    noIndex: true,
  });
}

export default async function SelectionProcessPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();
  const guide = getExamGuide(examSlug, 'selection-process');

  if (guide) {
    return (
      <ExamInfoPageContent country={country} exam={exam} pageName="Selection Process" pageSlug="selection-process" heading={guide.heading}>
        <GuideBlocks blocks={guide.blocks} />
      </ExamInfoPageContent>
    );
  }

  return (
    <ExamInfoPageContent
      country={country}
      exam={exam}
      pageName="Selection Process"
      pageSlug="selection-process"
      placeholder="A verified stage-by-stage selection process is not published here yet. Refer to the official notification."
    />
  );
}
