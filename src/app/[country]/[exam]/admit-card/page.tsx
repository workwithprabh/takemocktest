import { EXAM_LIST, getExam } from '@/lib/exams';
import { breadcrumbSchema } from '@/lib/schema';
import { notFound } from 'next/navigation';
import ExamInfoPageContent from '@/components/ExamInfoPageContent';
import { pageMetadata } from '@/lib/metadata';

const CGL_2026_NOTICE = 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2026.pdf';

export function generateStaticParams() {
  return EXAM_LIST.map((exam) => ({ exam: exam.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ exam: string }> }) {
  const { exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return {};

  if (exam.slug === 'ssc-cgl') {
    return pageMetadata({
      title: 'SSC CGL Admit Card 2026: Release Schedule and Documents',
      description: 'SSC says CGL 2026 exam-city details will appear about 10 days before the exam and the admission certificate 2 to 3 days before. Check the official schedule and document list.',
      path: '/in/ssc-cgl/admit-card',
    });
  }

  return pageMetadata({
    title: `${exam.name} Admit Card: Verification in Progress`,
    description: `${exam.name} admit-card dates and official links will be published after verification against the exam body's notices.`,
    path: `/in/${exam.slug}/admit-card`,
    noIndex: true,
  });
}

export default async function AdmitCardPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();

  if (exam.slug !== 'ssc-cgl') {
    return (
      <ExamInfoPageContent
        country={country}
        exam={exam}
        pageName="Admit Card"
        pageSlug="admit-card"
        placeholder="No admit-card notice is published here. Use the official exam body for current download links and dates."
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
              { name: 'Admit Card', path: `/${country}/${exam.slug}/admit-card` },
            ])
          ),
        }}
      />

      <header className="max-w-3xl mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 mb-3">Official 2026 notice guidance</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-3">SSC CGL Admit Card 2026</h1>
        <p className="text-ink-500 leading-7">
          SSC calls the admit card an Admission Certificate. The official CGL 2026 notice says it will be available on the Commission&apos;s website 2 to 3 days before the examination.
        </p>
      </header>

      <section className="grid md:grid-cols-3 gap-px bg-ink-200 border border-ink-200 mb-10" aria-label="Official release schedule">
        {[
          ['Tier 1 schedule', 'August to September 2026', 'Tentative window in the official notice'],
          ['Exam city details', 'About 10 days before', 'Time table and city/centre information'],
          ['Admission Certificate', '2 to 3 days before', 'Download and print from ssc.gov.in'],
        ].map(([label, value, note], index) => (
          <div key={label} className={index === 2 ? 'bg-ink-900 text-ink-50 p-5' : 'bg-white p-5'}>
            <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${index === 2 ? 'text-ink-300' : 'text-ink-500'}`}>{label}</p>
            <p className="text-xl font-bold mt-2">{value}</p>
            <p className={`text-sm leading-5 mt-2 ${index === 2 ? 'text-ink-300' : 'text-ink-500'}`}>{note}</p>
          </div>
        ))}
      </section>

      <section className="grid md:grid-cols-2 gap-6" aria-label="Admit card instructions">
        <div className="border border-ink-200 bg-white p-6">
          <h2 className="text-xl font-bold text-ink-900 mb-4">How to download it</h2>
          <ol className="space-y-3 text-sm leading-6 text-ink-500 list-decimal pl-5">
            <li>Open the official Staff Selection Commission website.</li>
            <li>Log in with your SSC registration credentials.</li>
            <li>Open the Combined Graduate Level Examination 2026 admission-certificate link when it becomes active.</li>
            <li>Check your name, photograph, exam date, reporting time, and centre.</li>
            <li>Download the certificate and carry a printed copy to the examination hall.</li>
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
          <h2 className="text-xl font-bold text-ink-900 mb-4">What to carry</h2>
          <ul className="space-y-3 text-sm leading-6 text-ink-500">
            {[
              'A printed copy of the Admission Certificate.',
              'Every additional document named on the Admission Certificate.',
              'If Aadhaar authentication was not completed: two recent passport-size colour photos and an original valid photo ID showing the same date of birth.',
              'If that photo ID does not show date of birth: an additional original DOB document specified by SSC.',
              'Required medical, scribe, or PwBD/PwD documents where applicable.',
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden="true" className="mt-2 size-2 shrink-0 bg-ink-900" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <aside className="border border-ink-200 bg-white p-6 mt-6" aria-labelledby="missing-details-heading">
        <h2 id="missing-details-heading" className="text-xl font-bold text-ink-900 mb-3">If your exam details do not appear</h2>
        <p className="text-sm leading-6 text-ink-500 max-w-3xl">
          The official notice says a candidate who cannot find their details one week before the examination should immediately contact the concerned SSC Regional Office with proof of application. Include your registration number, roll number, registered email and mobile number, name, date of birth, and examination name in the communication.
        </p>
      </aside>

      <section className="mt-10" aria-labelledby="admit-card-faq-heading">
        <h2 id="admit-card-faq-heading" className="text-2xl font-bold text-ink-900 mb-5">Admit card questions</h2>
        <div className="border-t border-ink-200">
          <details className="group border-b border-ink-200 py-5">
            <summary className="cursor-pointer list-none font-semibold text-ink-900 flex items-center justify-between gap-4">
              When will the SSC CGL 2026 admit card be released?
              <span aria-hidden="true" className="text-ink-500 group-open:rotate-45">+</span>
            </summary>
            <p className="text-sm leading-6 text-ink-500 mt-3 max-w-3xl">SSC&apos;s official notice says the Admission Certificate facility will be available 2 to 3 days before the examination.</p>
          </details>
          <details className="group border-b border-ink-200 py-5">
            <summary className="cursor-pointer list-none font-semibold text-ink-900 flex items-center justify-between gap-4">
              When will my exam city appear?
              <span aria-hidden="true" className="text-ink-500 group-open:rotate-45">+</span>
            </summary>
            <p className="text-sm leading-6 text-ink-500 mt-3 max-w-3xl">The notice says time-table and city/centre details will be uploaded about 10 days before the examination date.</p>
          </details>
          <details className="group border-b border-ink-200 py-5">
            <summary className="cursor-pointer list-none font-semibold text-ink-900 flex items-center justify-between gap-4">
              Is the August to September 2026 Tier 1 window final?
              <span aria-hidden="true" className="text-ink-500 group-open:rotate-45">+</span>
            </summary>
            <p className="text-sm leading-6 text-ink-500 mt-3 max-w-3xl">No. The examination notice labels that window tentative. Follow SSC&apos;s website for the exact schedule.</p>
          </details>
          <details className="group border-b border-ink-200 py-5">
            <summary className="cursor-pointer list-none font-semibold text-ink-900 flex items-center justify-between gap-4">
              Where is this schedule stated officially?
              <span aria-hidden="true" className="text-ink-500 group-open:rotate-45">+</span>
            </summary>
            <p className="text-sm leading-6 text-ink-500 mt-3 max-w-3xl">
              Read the <a href={CGL_2026_NOTICE} target="_blank" rel="noreferrer" className="font-medium text-ink-900 underline underline-offset-4">official SSC CGL 2026 examination notice</a>, especially sections 14.4 to 14.10.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
}
