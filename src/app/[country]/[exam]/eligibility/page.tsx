import { COUNTRIES, getExam } from '@/lib/exams';
import { getExamsForCountry } from '@/lib/exam-countries';
import { getExamGuide } from '@/lib/exam-guides';
import { notFound } from 'next/navigation';
import ExamInfoPageContent from '@/components/ExamInfoPageContent';
import GuideBlocks from '@/components/GuideBlocks';
import { pageMetadata } from '@/lib/metadata';

// Nested under [country], so Next.js passes the parent's params in. Filtering
// here is what stops a second country subfolder from generating every Indian
// exam's pages: see src/lib/exam-countries.ts.
// Returns the full param set, country included, rather than relying on Next
// passing the parent's params into a nested generateStaticParams: it does not
// do that reliably here, and the failure mode is the route generating nothing
// at all. Filtering per country is what stops a second subfolder from
// publishing every Indian exam; see src/lib/exam-countries.ts.
export function generateStaticParams() {
  return COUNTRIES.flatMap((country) => getExamsForCountry(country).map((exam) => ({ country, exam })));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return {};
  const guide = getExamGuide(examSlug, 'eligibility');
  if (guide) {
    return pageMetadata({ title: guide.title, description: guide.description, path: `/${country}/${exam.slug}/eligibility` });
  }
  return pageMetadata({
    title: `${exam.name} Eligibility Criteria ${new Date().getFullYear()}`,
    description: `${exam.name} eligibility criteria: age limit, educational qualification, and nationality requirements.`,
    path: `/${country}/${exam.slug}/eligibility`,
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
