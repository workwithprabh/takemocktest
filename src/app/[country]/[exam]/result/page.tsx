import { EXAM_LIST, getExam } from '@/lib/exams';
import { breadcrumbSchema } from '@/lib/schema';
import { notFound } from 'next/navigation';
import ExamInfoPageContent from '@/components/ExamInfoPageContent';
import { pageMetadata } from '@/lib/metadata';

const RESULT_TIMELINE = [
  {
    date: '18 Dec 2025',
    title: 'Tier 1 result declared',
    detail: 'Candidates were shortlisted category-wise for Tier 2.',
    href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/writeup_181225.pdf',
  },
  {
    date: '8 Apr 2026',
    title: 'First Round of Tentative Allocation',
    detail: 'SSC published the first tentative allocation after Tier 2.',
    href: 'https://ssc.gov.in/api/attachment/uploads/masterData/Results/Write%20up_FTRA%20CGLE%20Exam%202025_08042026.pdf',
  },
  {
    date: '14 May 2026',
    title: 'Final result declared',
    detail: '15,118 candidates were provisionally shortlisted across the notified posts.',
    href: 'https://ssc.gov.in/api/attachment/uploads/masterData/Results/writeup_14052026.pdf',
  },
  {
    date: '17 Jun 2026',
    title: 'Tier 2 final keys and marks uploaded',
    detail: 'The candidate login window remained open until 16 July 2026 and is now closed.',
    href: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Final_writeup_17062026.pdf',
  },
] as const;

export function generateStaticParams() {
  return EXAM_LIST.map((exam) => ({ exam: exam.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ exam: string }> }) {
  const { exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return {};

  if (exam.slug === 'ssc-cgl') {
    return pageMetadata({
      title: 'SSC CGL Result 2025 — Final Result and Official Timeline',
      description: 'SSC CGL 2025 final result was declared on 14 May 2026. Check the official Tier 1 result, allocation, final-result, answer-key, and marks notices.',
      path: '/in/ssc-cgl/result',
    });
  }

  return pageMetadata({
    title: `${exam.name} Result — Verification in Progress`,
    description: `${exam.name} result dates and official links will be published after verification against the exam body's notices.`,
    path: `/in/${exam.slug}/result`,
    noIndex: true,
  });
}

export default async function ResultPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();

  if (exam.slug !== 'ssc-cgl') {
    return (
      <ExamInfoPageContent
        country={country}
        exam={exam}
        pageName="Result"
        pageSlug="result"
        placeholder="No verified result notice is published here. Use the official exam body for current result and merit-list information."
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
              { name: 'Result', path: `/${country}/${exam.slug}/result` },
            ])
          ),
        }}
      />

      <header className="max-w-3xl mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 mb-3">Official status · Final result declared</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-3">SSC CGL Result 2025</h1>
        <p className="text-ink-500 leading-7">
          The Staff Selection Commission declared the CGLE 2025 final result on 14 May 2026. This page tracks the verified result sequence and links only to official SSC records.
        </p>
      </header>

      <section className="border border-ink-200 bg-ink-900 text-ink-50 p-6 sm:p-8 mb-10" aria-labelledby="result-status-heading">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-300 mb-3">Current verified status</p>
        <h2 id="result-status-heading" className="text-2xl font-bold mb-2">Final result published on 14 May 2026</h2>
        <p className="text-sm leading-6 text-ink-300 max-w-3xl">
          SSC reported 15,118 candidates provisionally shortlisted across JSO, Statistical Investigator Grade II, and other posts. Selection remained subject to eligibility and document checks by the allocated departments.
        </p>
      </section>

      <section aria-labelledby="timeline-heading">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 mb-2">Newest milestone last</p>
        <h2 id="timeline-heading" className="text-2xl font-bold text-ink-900 mb-5">SSC CGL 2025 result timeline</h2>
        <ol className="border-t border-ink-200">
          {RESULT_TIMELINE.map((item, index) => (
            <li key={item.date} className="grid sm:grid-cols-[9rem_1fr_auto] gap-3 sm:gap-6 border-b border-ink-200 py-5">
              <div>
                <span className="inline-flex bg-ink-100 text-ink-700 px-2.5 py-1 text-xs font-semibold">Step {index + 1}</span>
                <time className="block text-sm font-medium text-ink-500 mt-2">{item.date}</time>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-ink-900">{item.title}</h3>
                <p className="text-sm leading-6 text-ink-500 mt-1">{item.detail}</p>
              </div>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 items-center justify-center self-center border border-ink-200 px-4 py-2.5 text-sm font-semibold text-ink-900 hover:bg-ink-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-900"
              >
                Official notice <span aria-hidden="true" className="ml-2">↗</span>
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid md:grid-cols-2 gap-6 mt-10" aria-label="Result guidance">
        <div className="border border-ink-200 bg-white p-6">
          <h2 className="text-xl font-bold text-ink-900 mb-4">How to check an SSC result</h2>
          <ol className="space-y-3 text-sm leading-6 text-ink-500 list-decimal pl-5">
            <li>Open the official SSC website and choose <strong className="text-ink-900 font-medium">Result</strong>.</li>
            <li>Find the Combined Graduate Level Examination 2025 final-result notice.</li>
            <li>Open the relevant result list and search the PDF for your roll number.</li>
            <li>Verify the post allocation and follow the allocated department&apos;s document instructions.</li>
          </ol>
          <a
            href="https://ssc.gov.in/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-11 items-center justify-center bg-ink-900 text-ink-50 px-5 py-2.5 text-sm font-semibold mt-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-900"
          >
            Visit the official SSC website <span aria-hidden="true" className="ml-2">↗</span>
          </a>
        </div>

        <div className="border border-ink-200 bg-ink-50 p-6">
          <h2 className="text-xl font-bold text-ink-900 mb-4">Marks and response sheets</h2>
          <p className="text-sm leading-6 text-ink-500">
            SSC made Tier 2 marks, final answer keys, and response sheets available through candidate login from 17 June to 16 July 2026. The official notice states that the material would not remain available after that window.
          </p>
          <p className="text-sm leading-6 text-ink-700 mt-4 font-medium">
            Do not enter SSC login credentials on coaching or third-party websites.
          </p>
        </div>
      </section>
    </div>
  );
}
