import Link from 'next/link';
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
  const guide = getExamGuide(examSlug, 'previous-year-papers');
  if (guide) {
    return pageMetadata({ title: guide.title, description: guide.description, path: `/${country}/${exam.slug}/previous-year-papers` });
  }
  return pageMetadata({
    title: `${exam.name} Previous Year Papers: Verification in Progress`,
    description: `${exam.name} previous-year papers will be published after their source and shift details are verified.`,
    path: `/${country}/${exam.slug}/previous-year-papers`,
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
