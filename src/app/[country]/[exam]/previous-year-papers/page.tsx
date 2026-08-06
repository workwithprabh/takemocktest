import Link from 'next/link';
import { EXAM_LIST, getExam } from '@/lib/exams';
import { breadcrumbSchema } from '@/lib/schema';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/metadata';

const SSC_CGL_OFFICIAL_RECORDS = [
  {
    year: '2023',
    stage: 'Tier 2',
    published: '16 Dec 2023',
    availability: 'Candidate access closed 5 Jan 2024',
    href: 'https://ssc.nic.in/SSCFileServer/PortalManagement/UploadedFiles/Final_Answer_Key_CGLE2023_16122023.pdf',
  },
  {
    year: '2022',
    stage: 'Tier 2',
    published: '29 May 2023',
    availability: 'Candidate access closed 12 Jun 2023',
    href: 'https://www.ssc.nic.in/SSCFileServer/PortalManagement/UploadedFiles/Write_up_final_answer_key_29052023.pdf',
  },
  {
    year: '2022',
    stage: 'Tier 1',
    published: '27 Feb 2023',
    availability: 'Candidate access closed 13 Mar 2023',
    href: 'https://ssc.nic.in/SSCFileServer/PortalManagement/UploadedFiles/FinalAnswerkey_CGLE2022_tier1_27022023.pdf',
  },
  {
    year: '2021',
    stage: 'Tier 1',
    published: '14 Jul 2022',
    availability: 'Candidate access closed 12 Aug 2022',
    href: 'https://doc.ssc.nic.in/SecAudit/SSCFileServer/PortalManagement/UploadedFiles/CGLE_2021_Tier_1_Final_Answer_key_14072022.pdf',
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
      title: 'SSC CGL Previous Year Paper Sources: Official SSC Records',
      description: 'Browse verified SSC CGL Tier 1 and Tier 2 question-paper release notices from the official Staff Selection Commission archive, with access-window details.',
      path: '/in/ssc-cgl/previous-year-papers',
    });
  }

  return pageMetadata({
    title: `${exam.name} Previous Year Papers: Verification in Progress`,
    description: `${exam.name} previous-year papers will be published after their source and shift details are verified.`,
    path: `/in/${exam.slug}/previous-year-papers`,
    noIndex: true,
  });
}

export default async function PreviousYearPapersPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();

  const isSscCgl = exam.slug === 'ssc-cgl';

  return (
    <div className="max-w-5xl mx-auto px-5 py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: `/${country}` },
              { name: exam.name, path: `/${country}/${exam.slug}` },
              { name: 'Previous Year Papers', path: `/${country}/${exam.slug}/previous-year-papers` },
            ])
          ),
        }}
      />

      <header className="max-w-3xl mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 mb-3">Official source archive</p>
        <h1 className="font-sans font-bold text-3xl sm:text-4xl text-ink-900 mb-3">
          {exam.name} Previous Year Paper Sources
        </h1>
        <p className="text-ink-500 leading-7">
          {isSscCgl
            ? 'Verified SSC notices that recorded the release of final answer keys with candidate question papers. Each source is linked to an official SSC domain.'
            : 'Previous-year papers will appear here only after their source and shift details have been verified.'}
        </p>
      </header>

      {isSscCgl ? (
        <>
          <aside className="border border-ink-200 bg-ink-50 p-5 mb-8" aria-label="Availability note">
            <h2 className="font-semibold text-ink-900 mb-2">Read before opening a record</h2>
            <p className="text-sm leading-6 text-ink-500">
              SSC issued each candidate&apos;s paper through a time-limited login window. Those windows are now closed, so the links below open the permanent official notices, not an active paper download. We will only host shift-wise papers after their source and answers can be independently verified.
            </p>
          </aside>

          <section aria-labelledby="official-records-heading">
            <div className="flex items-end justify-between gap-4 mb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 mb-2">Newest first</p>
                <h2 id="official-records-heading" className="text-xl sm:text-2xl font-bold text-ink-900">Official SSC release records</h2>
              </div>
              <span className="hidden sm:block text-sm text-ink-500">{SSC_CGL_OFFICIAL_RECORDS.length} verified records</span>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {SSC_CGL_OFFICIAL_RECORDS.map((record) => (
                <article key={`${record.year}-${record.stage}`} className="border border-ink-200 bg-white p-5 flex flex-col min-h-56">
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <span className="bg-ink-100 text-ink-700 text-xs font-semibold px-2.5 py-1">{record.stage}</span>
                    <span className="text-sm font-medium text-ink-500">{record.year}</span>
                  </div>
                  <h3 className="font-semibold text-lg text-ink-900 mb-2">Final answer keys with question papers</h3>
                  <dl className="text-sm text-ink-500 space-y-2 mb-5">
                    <div className="flex gap-2">
                      <dt className="font-medium text-ink-700">Published:</dt>
                      <dd>{record.published}</dd>
                    </div>
                    <div>
                      <dt className="sr-only">Availability</dt>
                      <dd>{record.availability}</dd>
                    </div>
                  </dl>
                  <a
                    href={record.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-auto inline-flex min-h-11 items-center justify-center border border-ink-200 px-4 py-2.5 text-sm font-semibold text-ink-900 hover:bg-ink-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-900"
                  >
                    Open official SSC notice <span aria-hidden="true" className="ml-2">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </section>

          <section className="border border-ink-200 bg-ink-900 text-ink-50 p-6 sm:p-8 mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <h2 className="text-xl font-bold mb-2">Practice the current pattern</h2>
              <p className="text-sm leading-6 text-ink-300">Use checked SSC CGL mocks while verified shift-wise paper sets are being prepared.</p>
            </div>
            <Link
              href={`/${country}/${exam.slug}/mock-test`}
              className="inline-flex min-h-11 items-center justify-center bg-ink-50 text-ink-900 px-5 py-2.5 text-sm font-semibold shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-50"
            >
              View SSC CGL mock tests
            </Link>
          </section>
        </>
      ) : (
        <div className="bg-white border border-ink-200 p-6 text-sm text-ink-500 mb-8">
          No verified papers are published yet. Use the free mock tests while this resource is being prepared.
        </div>
      )}
    </div>
  );
}
