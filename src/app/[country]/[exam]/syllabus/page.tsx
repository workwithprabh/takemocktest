import { EXAM_LIST, getExam, getExamSections } from '@/lib/exams';
import { getExamGuide } from '@/lib/exam-guides';
import { breadcrumbSchema } from '@/lib/schema';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/metadata';
import GuideBlocks from '@/components/GuideBlocks';

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
    <div className="max-w-4xl mx-auto px-5 py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: `/${country}` },
              { name: exam.name, path: `/${country}/${exam.slug}` },
              { name: 'Syllabus', path: `/${country}/${exam.slug}/syllabus` },
            ])
          ),
        }}
      />
      <h1 className="font-sans font-bold text-2xl mb-1 text-ink-900">
        {guide ? guide.heading : `${exam.name} Syllabus`}
      </h1>
      {guide ? (
        <div className="mt-3">
          <GuideBlocks blocks={guide.blocks} />
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {sections.map((section) => (
            <div key={section} className="bg-white border border-ink-200 p-4">
              <div className="font-sans font-semibold text-sm mb-1 text-ink-900">{section}</div>
              <div className="text-xs text-ink-500">Detailed topic coverage is being verified before publication.</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
