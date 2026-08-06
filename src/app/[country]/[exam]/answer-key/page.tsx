import Link from 'next/link';
import { EXAM_LIST, getExam } from '@/lib/exams';
import { breadcrumbSchema } from '@/lib/schema';
import { notFound } from 'next/navigation';
import ExamInfoPageContent from '@/components/ExamInfoPageContent';
import { pageMetadata } from '@/lib/metadata';

const FINAL_KEY_NOTICE = 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Final_writeup_17062026.pdf';

export function generateStaticParams() {
  return EXAM_LIST.map((exam) => ({ exam: exam.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ exam: string }> }) {
  const { exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return {};

  if (exam.slug === 'ssc-cgl') {
    return pageMetadata({
      title: 'SSC CGL Answer Key 2025: Tier 2 Final Key Status',
      description: 'SSC uploaded the CGL 2025 Tier 2 final answer keys, response sheets, and marks on 17 June 2026. Check the official notice and access-window status.',
      path: '/in/ssc-cgl/answer-key',
    });
  }

  return pageMetadata({
    title: `${exam.name} Answer Key: Verification in Progress`,
    description: `${exam.name} answer-key dates and official links will be published after verification against the exam body's notices.`,
    path: `/in/${exam.slug}/answer-key`,
    noIndex: true,
  });
}

export default async function AnswerKeyPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();

  if (exam.slug !== 'ssc-cgl') {
    return (
      <ExamInfoPageContent
        country={country}
        exam={exam}
        pageName="Answer Key"
        pageSlug="answer-key"
        placeholder="No verified answer key is published here. Use the official exam portal for current keys and objection windows."
      />
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-5 py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: `/${country}` },
              { name: exam.name, path: `/${country}/${exam.slug}` },
              { name: 'Answer Key', path: `/${country}/${exam.slug}/answer-key` },
            ])
          ),
        }}
      />

      <header className="max-w-3xl mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 mb-3">Official Tier 2 update · 17 June 2026</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-3">SSC CGL Answer Key 2025</h1>
        <p className="text-ink-500 leading-7">
          SSC uploaded the CGLE 2025 Tier 2 final answer keys, candidate response sheets, and marks after declaring the final result. The official access window is now closed.
        </p>
      </header>

      <section className="grid sm:grid-cols-3 gap-px bg-ink-200 border border-ink-200 mb-10" aria-label="Answer key status">
        <div className="bg-ink-900 text-ink-50 p-5 sm:col-span-1">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-300 mb-2">Status</p>
          <h2 className="text-xl font-bold">Final key released</h2>
        </div>
        <div className="bg-white p-5">
          <p className="text-sm text-ink-500">Access opened</p>
          <p className="text-lg font-bold text-ink-900 mt-1">17 Jun 2026, 9 PM</p>
        </div>
        <div className="bg-white p-5">
          <p className="text-sm text-ink-500">Access closed</p>
          <p className="text-lg font-bold text-ink-900 mt-1">16 Jul 2026, 9 PM</p>
        </div>
      </section>

      <section className="grid md:grid-cols-[1.1fr_0.9fr] gap-6" aria-label="Answer key guidance">
        <div className="border border-ink-200 bg-white p-6">
          <h2 className="text-xl font-bold text-ink-900 mb-4">What SSC released</h2>
          <ul className="space-y-3 text-sm leading-6 text-ink-500">
            {[
              'The Tier 2 final answer keys used after the final result.',
              'Each candidate’s response sheet through registered login.',
              'Marks for qualified and non-qualified candidates.',
              'A time-limited facility to print the key, response sheet, and scorecard.',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-2 shrink-0 bg-ink-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={FINAL_KEY_NOTICE}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center bg-ink-900 text-ink-50 px-5 py-2.5 text-sm font-semibold mt-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-900"
          >
            Read the official SSC notice <span aria-hidden="true" className="ml-2">↗</span>
          </a>
        </div>

        <aside className="border border-ink-200 bg-ink-50 p-6" aria-labelledby="access-closed-heading">
          <h2 id="access-closed-heading" className="text-xl font-bold text-ink-900 mb-3">The login link has expired</h2>
          <p className="text-sm leading-6 text-ink-500">
            SSC stated that the final keys, response sheets, and marks would not remain available after 16 July 2026. We therefore link to the permanent notice rather than presenting an expired candidate-login button.
          </p>
          <p className="text-sm leading-6 text-ink-700 font-medium mt-4">
            Never enter an SSC registration ID or password on a third-party exam website.
          </p>
        </aside>
      </section>

      <section className="mt-10" aria-labelledby="answer-key-faq-heading">
        <h2 id="answer-key-faq-heading" className="text-2xl font-bold text-ink-900 mb-5">Answer key questions</h2>
        <div className="border-t border-ink-200">
          <details className="group border-b border-ink-200 py-5">
            <summary className="cursor-pointer list-none font-semibold text-ink-900 flex items-center justify-between gap-4">
              Is the SSC CGL 2025 Tier 2 final answer key out?
              <span aria-hidden="true" className="text-ink-500 group-open:rotate-45">+</span>
            </summary>
            <p className="text-sm leading-6 text-ink-500 mt-3 max-w-3xl">Yes. SSC uploaded it on 17 June 2026 after declaring the final result on 14 May 2026.</p>
          </details>
          <details className="group border-b border-ink-200 py-5">
            <summary className="cursor-pointer list-none font-semibold text-ink-900 flex items-center justify-between gap-4">
              Can I download my response sheet now?
              <span aria-hidden="true" className="text-ink-500 group-open:rotate-45">+</span>
            </summary>
            <p className="text-sm leading-6 text-ink-500 mt-3 max-w-3xl">The official candidate-login window closed on 16 July 2026. SSC’s notice says the files would not be available after that deadline.</p>
          </details>
          <details className="group border-b border-ink-200 py-5">
            <summary className="cursor-pointer list-none font-semibold text-ink-900 flex items-center justify-between gap-4">
              What is the difference between tentative and final keys?
              <span aria-hidden="true" className="text-ink-500 group-open:rotate-45">+</span>
            </summary>
            <p className="text-sm leading-6 text-ink-500 mt-3 max-w-3xl">A tentative key is released for candidate challenges. SSC examines those representations and uses the final key for evaluation.</p>
          </details>
          <details className="group border-b border-ink-200 py-5">
            <summary className="cursor-pointer list-none font-semibold text-ink-900 flex items-center justify-between gap-4">
              Where can I find older SSC CGL paper-release notices?
              <span aria-hidden="true" className="text-ink-500 group-open:rotate-45">+</span>
            </summary>
            <p className="text-sm leading-6 text-ink-500 mt-3 max-w-3xl">
              Use our <Link href={`/${country}/${exam.slug}/previous-year-papers`} className="font-medium text-ink-900 underline underline-offset-4">verified previous-paper source archive</Link>, which links only to official SSC records.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
