import Link from 'next/link';
import { EXAM_LIST, getExam } from '@/lib/exams';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/metadata';
import ExamInfoPageContent from '@/components/ExamInfoPageContent';
import { faqPageSchema, jsonLdHtml } from '@/lib/schema';
import {
  getExamPatternFaqs,
  getPatternInsights,
  getStageMarkingNotes,
  getStageSummary,
} from '@/lib/exam-pattern-content';

export function generateStaticParams() {
  return EXAM_LIST.map((exam) => ({ exam: exam.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ exam: string }> }) {
  const { exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return {};
  const hasOfficialPattern = exam.stages.some((stage) => stage.pattern.status === 'official');
  // Lead the description with the numbers people are searching for, when the
  // primary stage actually publishes them, rather than a generic sentence.
  const primary = exam.stages.find((stage) => stage.pattern.status === 'official')?.pattern;
  const facts = primary
    ? [
        primary.totalQuestions ? `${primary.totalQuestions} questions` : undefined,
        primary.totalMarks ? `${primary.totalMarks} marks` : undefined,
        primary.duration ? `${primary.duration} minutes` : undefined,
      ].filter(Boolean)
    : [];
  return pageMetadata({
    title: `${exam.name} Exam Pattern ${new Date().getFullYear()}: Marks & Duration`,
    description: facts.length > 0
      ? `${exam.name} exam pattern: ${facts.join(', ')}, section-wise marks, negative marking and time per question, checked against the official notification.`
      : `${exam.name} exam pattern: sections, marks, duration, and negative marking explained.`,
    path: `/in/${exam.slug}/exam-pattern`,
    noIndex: !hasOfficialPattern,
  });
}

export default async function ExamPatternPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();
  const faqs = getExamPatternFaqs(exam);

  return (
    <ExamInfoPageContent country={country} exam={exam} pageName="Exam Pattern" pageSlug="exam-pattern">
      {faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(faqPageSchema(faqs)) }} />
      )}
      <p className="mb-6 text-sm leading-6 text-ink-700">The {exam.name} exam pattern below is checked stage by stage, so one stage cannot inherit another stage&apos;s scoring rules.</p>

      <div className="space-y-5">
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
                    <tr className="border-b border-ink-200"><td className="py-2 text-ink-700">Questions</td><td className="py-2 font-medium text-ink-900">{stage.pattern.totalQuestions}</td></tr>
                    <tr className="border-b border-ink-200"><td className="py-2 text-ink-700">Total marks</td><td className="py-2 font-medium text-ink-900">{stage.pattern.totalMarks}</td></tr>
                    <tr className="border-b border-ink-200"><td className="py-2 text-ink-700">Duration</td><td className="py-2 font-medium text-ink-900">{stage.pattern.duration} minutes</td></tr>
                    <tr className="border-b border-ink-200"><td className="py-2 text-ink-700">Negative marking</td><td className="py-2 font-medium text-ink-900">{stage.pattern.negativeMarking} per wrong answer</td></tr>
                    <tr><td className="py-2 text-ink-700">Sections</td><td className="py-2 font-medium text-ink-900">{stage.pattern.sections.join(', ')}</td></tr>
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
                            <td className="px-2 py-2 text-center text-ink-600 sm:px-3">{section.duration ?? '—'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
                {stage.pattern.timerNote && <p className="mt-3 text-xs leading-5 text-ink-700">Timing: {stage.pattern.timerNote}.</p>}
                {stage.pattern.note && <p className="mt-2 text-xs leading-5 text-ink-700">{stage.pattern.note}</p>}
                {stage.pattern.sourceUrl && (
                  <a href={stage.pattern.sourceUrl} target="_blank" rel="noreferrer" className="mt-3 inline-block text-xs font-semibold text-ink-900 underline">
                    Official source · checked {stage.pattern.checkedOn}
                  </a>
                )}
                {(() => {
                  // Prose and marking notes derived from the very numbers in
                  // the table above — no new claims, just what they mean for
                  // someone deciding how to attempt the paper.
                  const summary = getStageSummary(exam, stage);
                  const notes = getStageMarkingNotes(stage);
                  const insights = getPatternInsights(stage.pattern);
                  if (!summary && notes.length === 0) return null;
                  return (
                    <div className="mt-5 border-t border-ink-200 pt-4">
                      {summary && <p className="text-sm leading-7 text-ink-700">{summary}</p>}
                      {notes.length > 0 && (
                        <>
                          <h3 className="mt-4 text-sm font-bold text-ink-900">
                            {exam.name} {stage.name} marking scheme
                          </h3>
                          <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm leading-6 text-ink-700">
                            {notes.map((note) => <li key={note}>{note}</li>)}
                          </ul>
                        </>
                      )}
                      {insights.secondsPerQuestion && (
                        <p className="mt-3 text-sm leading-6 text-ink-700">
                          Practising against the same clock is the point of a mock test: at{' '}
                          {insights.secondsPerQuestion} seconds a question, the difference between a good score and an
                          average one is usually pacing rather than knowledge.{' '}
                          <Link href={`/${country}/${exam.slug}/mock-test`} className="font-semibold text-ink-900 underline">
                            Attempt a free {exam.name} mock test
                          </Link>{' '}
                          to see where your time actually goes.
                        </p>
                      )}
                    </div>
                  );
                })()}
              </>
            ) : (
              <p className="text-sm leading-6 text-ink-700">{stage.pattern.note}</p>
            )}
          </section>
        ))}
      </div>

      {faqs.length > 0 && (
        <section className="mt-10" aria-labelledby="pattern-faq">
          <h2 id="pattern-faq" className="mb-4 text-xl font-bold text-ink-900">
            {exam.name} exam pattern: frequently asked questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="border border-ink-200 bg-white p-4">
                <summary className="cursor-pointer text-sm font-semibold text-ink-900">{faq.q}</summary>
                <p className="mt-2 text-sm leading-6 text-ink-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      )}
    </ExamInfoPageContent>
  );
}
