import { COUNTRIES, getExam, getExamSections } from '@/lib/exams';
import { getExamsForCountry } from '@/lib/exam-countries';
import { getExamGuide } from '@/lib/exam-guides';
import { getSyllabusFaqs, getCoverageSyllabusFaqs } from '@/lib/guide-faqs';
import { getSyllabusCoverage, isPublishableCoverage } from '@/lib/syllabus-coverage';
import { getSyllabusNote } from '@/lib/syllabus-notes';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/metadata';
import GuideBlocks from '@/components/GuideBlocks';
import ExamInfoPageContent from '@/components/ExamInfoPageContent';
import type { ExamConfig } from '@/lib/exams';

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

/**
 * Three ways this page can exist, in order of what it can honestly claim.
 *
 * A hand-written guide states the syllabus the exam body published, cited and
 * linked. Failing that, a coverage page states what this site's own tests cover
 * under the body's official section names, labelled as exactly that and never
 * as the body's syllabus, and it is published only where somebody has written
 * a note about the exam and the bank is deep enough to be worth reading.
 * Failing both, the page stays a noindexed placeholder.
 */
function resolve(exam: ExamConfig) {
  const guide = getExamGuide(exam.slug, 'syllabus');
  if (guide) return { kind: 'guide' as const, guide };
  const covers = getSyllabusCoverage(exam);
  const note = getSyllabusNote(exam.slug);
  if (note && isPublishableCoverage(covers)) return { kind: 'coverage' as const, covers, note };
  return { kind: 'placeholder' as const };
}

export async function generateMetadata({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return {};
  const path = `/${country}/${exam.slug}/syllabus`;
  const resolved = resolve(exam);

  if (resolved.kind === 'guide') {
    return pageMetadata({ title: resolved.guide.title, description: resolved.guide.description, path });
  }
  if (resolved.kind === 'coverage') {
    const sections = resolved.covers.reduce((total, cover) => total + cover.sections.length, 0);
    return pageMetadata({
      title: `${exam.name} Syllabus ${new Date().getFullYear()}: Sections and Topics`,
      // Says what the page is in the snippet rather than letting a reader find
      // out after the click that the topics are coverage, not the notification.
      description: `${exam.name} official section pattern across ${sections} sections, with the topics covered by the free mock tests on this site listed under each.`,
      path,
    });
  }
  return pageMetadata({
    title: `${exam.name} Syllabus ${new Date().getFullYear()}: Section-wise Topics`,
    description: `${exam.name} syllabus sections being checked against current official documents before publication.`,
    path,
    noIndex: true,
  });
}

export default async function SyllabusPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();
  const resolved = resolve(exam);

  if (resolved.kind === 'guide') {
    return (
      <ExamInfoPageContent
        country={country}
        exam={exam}
        pageName="Syllabus"
        pageSlug="syllabus"
        heading={resolved.guide.heading}
        faqs={getSyllabusFaqs(exam, resolved.guide, country)}
      >
        <GuideBlocks blocks={resolved.guide.blocks} />
      </ExamInfoPageContent>
    );
  }

  if (resolved.kind === 'coverage') {
    const { covers, note } = resolved;
    const multiStage = covers.length > 1;
    return (
      <ExamInfoPageContent
        country={country}
        exam={exam}
        pageName="Syllabus"
        pageSlug="syllabus"
        heading={`${exam.name} Syllabus: Sections and Topics Covered`}
        faqs={getCoverageSyllabusFaqs(exam, covers, country)}
      >
        <div className="space-y-6">
          <p className="text-sm leading-7 text-ink-800">{note}</p>

          <section className="border border-ink-200 bg-ink-50 p-5">
            <h2 className="mb-2 text-lg font-semibold text-ink-900">What this page is, and is not</h2>
            <p className="text-sm leading-6 text-ink-700">
              The section names, question counts and marks below come from the official pattern for this exam,
              checked against the notification and linked at the foot of the page where a source is recorded.
              The topics under each section are different: they are the topics the free mock tests on this site
              cover, not a syllabus the exam body publishes. Use them to see what you can practise here and to
              check your own list for gaps, and read the body&apos;s own document for the syllabus itself.
            </p>
          </section>

          {covers.map((cover) => (
            <section key={cover.stageName} className="space-y-4">
              {multiStage && (
                <h2 className="text-lg font-semibold text-ink-900">
                  {cover.stageName}
                  {cover.cycle ? ` (${cover.cycle} pattern)` : ''}
                </h2>
              )}
              {cover.sections.map((section) => (
                <div key={section.name} className="border border-ink-200 bg-white p-5">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h3 className="text-base font-semibold text-ink-900">{section.name}</h3>
                    {section.questions !== undefined && (
                      <span className="bg-ink-100 px-2 py-1 text-xs font-semibold text-ink-700">
                        {section.questions} questions
                        {section.marks !== undefined ? ` · ${section.marks} marks` : ''}
                      </span>
                    )}
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm leading-6 text-ink-700">
                    {section.topics.map((topic) => (
                      <li key={topic}>&bull; {topic}</li>
                    ))}
                  </ul>
                  <p className="mt-3 text-xs text-ink-500">
                    {section.topics.length === section.labelCount
                      ? `${section.labelCount} topic ${section.labelCount === 1 ? 'label' : 'labels'} across ${section.questionCount} questions built here.`
                      : `Showing ${section.topics.length} of ${section.labelCount} topic labels, the ones carrying the most of the ${section.questionCount} questions built here.`}
                  </p>
                </div>
              ))}
              {cover.sourceUrl && (
                <p className="text-xs leading-5 text-ink-700">
                  Section pattern source:{' '}
                  <a href={cover.sourceUrl} target="_blank" rel="noreferrer" className="font-semibold text-ink-900 underline">
                    the official notice
                  </a>
                  {cover.checkedOn ? `, checked ${cover.checkedOn}` : ''}.
                </p>
              )}
            </section>
          ))}
        </div>
      </ExamInfoPageContent>
    );
  }

  const sections = getExamSections(exam);
  return (
    <ExamInfoPageContent country={country} exam={exam} pageName="Syllabus" pageSlug="syllabus">
      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section} className="border border-ink-200 bg-white p-4">
            <div className="mb-1 font-sans text-sm font-semibold text-ink-900">{section}</div>
            <div className="text-xs leading-5 text-ink-700">Detailed topic coverage is being verified before publication.</div>
          </div>
        ))}
      </div>
    </ExamInfoPageContent>
  );
}
