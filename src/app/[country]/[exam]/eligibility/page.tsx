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
  const guide = getExamGuide(examSlug, 'eligibility');
  if (guide) {
    return pageMetadata({ title: guide.title, description: guide.description, path: `/in/${exam.slug}/eligibility` });
  }
  return pageMetadata({
    title: `${exam.name} Eligibility Criteria ${new Date().getFullYear()}`,
    description: `${exam.name} eligibility criteria: age limit, educational qualification, and nationality requirements.`,
    path: `/in/${exam.slug}/eligibility`,
    noIndex: true,
  });
}

export default async function EligibilityPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();
  const guide = getExamGuide(examSlug, 'eligibility');

  if (guide) {
    return (
      <ExamInfoPageContent country={country} exam={exam} pageName="Eligibility" pageSlug="eligibility" heading={guide.heading}>
        <GuideBlocks blocks={guide.blocks} />
      </ExamInfoPageContent>
    );
  }

  return (
    <ExamInfoPageContent
      country={country}
      exam={exam}
      pageName="Eligibility"
      pageSlug="eligibility"
      placeholder="Eligibility details are not published here yet. Confirm age, qualification, and nationality rules in the official notification."
    />
  );
}
