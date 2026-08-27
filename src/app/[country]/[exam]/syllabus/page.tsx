import { EXAM_LIST, getExam, getExamSections } from '@/lib/exams';
import { getExamGuide } from '@/lib/exam-guides';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/metadata';
import GuideBlocks from '@/components/GuideBlocks';
import ExamInfoPageContent from '@/components/ExamInfoPageContent';

export function generateStaticParams() {
  return EXAM_LIST.map((exam) => ({ exam: exam.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ exam: string }> }) {
  const { exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return {};
  const guide = getExamGuide(examSlug, 'syllabus');
  if (guide) {
    return pageMetadata({ title: guide.title, description: guide.description, path: `/in/${exam.slug}/syllabus` });
  }
  return pageMetadata({
    title: `${exam.name} Syllabus ${new Date().getFullYear()}: Section-wise Topics`,
    description: `${exam.name} syllabus sections being checked against current official documents before publication.`,
    path: `/in/${exam.slug}/syllabus`,
    noIndex: true,
  });
}

export default async function SyllabusPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();
  const sections = getExamSections(exam);
  const guide = getExamGuide(examSlug, 'syllabus');

  return (
    <ExamInfoPageContent country={country} exam={exam} pageName="Syllabus" pageSlug="syllabus" heading={guide?.heading}>
      {guide ? (
        <GuideBlocks blocks={guide.blocks} />
      ) : (
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section} className="border border-ink-200 bg-white p-4">
              <div className="mb-1 font-sans text-sm font-semibold text-ink-900">{section}</div>
              <div className="text-xs leading-5 text-ink-700">Detailed topic coverage is being verified before publication.</div>
            </div>
          ))}
        </div>
      )}
    </ExamInfoPageContent>
  );
}
