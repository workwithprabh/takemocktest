import { EXAM_LIST, getExam } from '@/lib/exams';
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
  const hasOfficialPattern = exam.stages.some((stage) => stage.pattern.status === 'official');
  return pageMetadata({
    title: `${exam.name} Exam Pattern ${new Date().getFullYear()} — Marks & Duration`,
    description: `${exam.name} exam pattern: sections, marks, duration, and negative marking explained.`,
    path: `/in/${exam.slug}/exam-pattern`,
    noIndex: !hasOfficialPattern,
  });
}

export default async function ExamPatternPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();

  return (
    <div className="max-w-4xl mx-auto px-5 py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: `/${country}` },
              { name: exam.name, path: `/${country}/${exam.slug}` },
              { name: 'Exam Pattern', path: `/${country}/${exam.slug}/exam-pattern` },
            ])
          ),
        }}
      />
      <Breadcrumbs items={[
        { label: 'Home', href: `/${country}` },
        { label: exam.name, href: `/${country}/${exam.slug}` },
        { label: 'Exam pattern' },
      ]} />
      <h1 className="font-sans font-bold text-2xl mb-1 text-ink-900">{exam.name} Exam Pattern</h1>
      <p className="mt-2 text-sm text-ink-500">Each stage is checked separately so one stage cannot inherit another stage&apos;s scoring rules.</p>

      <div className="mt-6 space-y-5">
        {exam.stages.map((stage) => (
          <section key={stage.id} className="border border-ink-200 bg-white p-5" aria-labelledby={`${stage.id}-pattern`}>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h2 id={`${stage.id}-pattern`} className="font-semibold text-ink-900">{stage.name}</h2>
              <span className="bg-ink-100 px-2 py-1 text-xs font-semibold text-ink-700">
                {stage.pattern.status === 'official' ? `Official ${stage.pattern.cycle} pattern` : 'Review pending'}
              </span>
            </div>

            {stage.pattern.status === 'official' ? (
              <>
                <table className="w-full text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-ink-200"><td className="py-2 text-ink-500">Questions</td><td className="py-2 font-medium text-ink-900">{stage.pattern.totalQuestions}</td></tr>
                    <tr className="border-b border-ink-200"><td className="py-2 text-ink-500">Total marks</td><td className="py-2 font-medium text-ink-900">{stage.pattern.totalMarks}</td></tr>
                    <tr className="border-b border-ink-200"><td className="py-2 text-ink-500">Duration</td><td className="py-2 font-medium text-ink-900">{stage.pattern.duration} minutes</td></tr>
                    <tr className="border-b border-ink-200"><td className="py-2 text-ink-500">Negative marking</td><td className="py-2 font-medium text-ink-900">{stage.pattern.negativeMarking} per wrong answer</td></tr>
                    <tr><td className="py-2 text-ink-500">Sections</td><td className="py-2 font-medium text-ink-900">{stage.pattern.sections.join(', ')}</td></tr>
                  </tbody>
                </table>
                {stage.pattern.sectionBreakdown && (
                  <div className="mt-4 border border-ink-200">
                    <table className="w-full table-fixed text-left text-xs sm:text-sm">
                      <thead className="border-b border-ink-200 bg-ink-50 text-ink-900">
                        <tr>
                          <th className="w-1/2 px-2 py-2 font-semibold sm:px-3">Test</th>
                          <th className="px-2 py-2 text-center font-semibold sm:px-3">Qs</th>
                          <th className="px-2 py-2 text-center font-semibold sm:px-3">Marks</th>
                          <th className="px-2 py-2 text-center font-semibold sm:px-3">Min</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-ink-200">
                        {stage.pattern.sectionBreakdown.map((section) => (
                          <tr key={section.name}>
                            <td className="break-words px-2 py-2 font-medium text-ink-900 sm:px-3">{section.name}</td>
                            <td className="px-2 py-2 text-center text-ink-600 sm:px-3">{section.questions}</td>
                            <td className="px-2 py-2 text-center text-ink-600 sm:px-3">{section.marks}</td>
                            <td className="px-2 py-2 text-center text-ink-600 sm:px-3">{section.duration}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {stage.pattern.timerNote && <p className="mt-3 text-xs text-ink-500">Timing: {stage.pattern.timerNote}.</p>}
                {stage.pattern.note && <p className="mt-2 text-xs text-ink-500">{stage.pattern.note}</p>}
                {stage.pattern.sourceUrl && (
                  <a href={stage.pattern.sourceUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-xs font-semibold text-ink-900 underline">
                    Official source · checked {stage.pattern.checkedOn}
                  </a>
                )}
              </>
            ) : (
              <p className="text-sm text-ink-500">{stage.pattern.note}</p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
