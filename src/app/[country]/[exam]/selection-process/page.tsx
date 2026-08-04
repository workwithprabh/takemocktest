import { EXAM_LIST, getExam } from '@/lib/exams';
import { notFound } from 'next/navigation';
import ExamInfoPageContent from '@/components/ExamInfoPageContent';
import { pageMetadata } from '@/lib/metadata';

export function generateStaticParams() {
  return EXAM_LIST.map((exam) => ({ exam: exam.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ exam: string }> }) {
  const { exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return {};
  if (exam.slug === 'ssc-cgl') {
    return pageMetadata({
      title: 'SSC CGL Selection Process 2026 — Tier 1 to Final Merit',
      description: 'Understand the SSC CGL 2026 selection process: Tier 1 shortlisting, Tier 2 papers, qualifying computer and data-entry tests, post preference, and document verification.',
      path: '/in/ssc-cgl/selection-process',
    });
  }
  if (exam.slug === 'ibps-po') {
    return pageMetadata({
      title: 'IBPS PO Selection Process 2026 — Prelims to Allotment',
      description: 'Understand the official IBPS PO 2026 selection stages: Prelims, Mains, mandatory Personality Test, Common Interview, 80:20 final score, and provisional allotment.',
      path: '/in/ibps-po/selection-process',
    });
  }
  return pageMetadata({
    title: `${exam.name} Selection Process ${new Date().getFullYear()}`,
    description: `A stage-by-stage breakdown of the ${exam.name} selection process.`,
    path: `/in/${exam.slug}/selection-process`,
    noIndex: true,
  });
}

export default async function SelectionProcessPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();

  if (exam.slug === 'ssc-cgl') {
    const stages = [
      {
        number: '01',
        title: 'Tier 1: shortlisting exam',
        text: 'Candidates take the computer-based Tier 1 exam. SSC uses the normalised Tier 1 score and category-wise cut-offs to shortlist candidates for the relevant Tier 2 papers. Tier 1 does not decide the final merit list.',
      },
      {
        number: '02',
        title: 'Tier 2: merit-stage examination',
        text: 'Paper I is compulsory for every shortlisted candidate. Paper II applies only to candidates shortlisted for Junior Statistical Officer and Statistical Investigator Grade II. Paper III applies only to Assistant Audit Officer and Assistant Accounts Officer candidates.',
      },
      {
        number: '03',
        title: 'Qualifying modules and post preference',
        text: 'Candidates must separately qualify the required sections of Paper I. The Computer Knowledge Test and Data Entry Speed Test are qualifying. Before the result, candidates must submit their post and department preferences; unlisted preferences are not considered.',
      },
      {
        number: '04',
        title: 'Final merit, allocation and document verification',
        text: 'SSC prepares final merit from Tier 2 performance, subject to the qualifying requirements, and allocates posts by merit and submitted preferences. The allotted user department then verifies original eligibility and category documents.',
      },
    ];

    return (
      <ExamInfoPageContent
        country={country}
        exam={exam}
        pageName="Selection Process"
        pageSlug="selection-process"
        heading="SSC CGL Selection Process 2026"
      >
        <div className="space-y-6 text-sm leading-6 text-ink-700">
          <section className="border border-ink-200 bg-ink-50 p-5">
            <h2 className="mb-2 text-lg font-semibold text-ink-900">How selection works</h2>
            <p>
              SSC CGL has two computer-based tiers. Tier 1 is used to shortlist candidates; Tier 2 is the
              decisive stage for merit, followed by post allocation and document verification.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-ink-900">Stage-by-stage process</h2>
            <ol className="space-y-px border border-ink-200 bg-ink-200">
              {stages.map((stage) => (
                <li key={stage.number} className="grid gap-3 bg-white p-5 sm:grid-cols-[3rem_1fr]">
                  <span className="text-sm font-semibold text-ink-400" aria-hidden="true">
                    {stage.number}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink-900">{stage.title}</h3>
                    <p className="mt-1">{stage.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-ink-900">Which Tier 2 papers apply?</h2>
            <div className="overflow-x-auto border border-ink-200 bg-white">
              <table className="w-full min-w-[34rem] text-left">
                <thead className="border-b border-ink-200 bg-ink-50 text-ink-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Paper</th>
                    <th className="px-4 py-3 font-semibold">Who takes it</th>
                    <th className="px-4 py-3 font-semibold">Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-200">
                  <tr>
                    <td className="px-4 py-3 font-semibold text-ink-900">Paper I</td>
                    <td className="px-4 py-3">All shortlisted candidates</td>
                    <td className="px-4 py-3">Compulsory</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-ink-900">Paper II</td>
                    <td className="px-4 py-3">JSO and Statistical Investigator Grade II</td>
                    <td className="px-4 py-3">Post-specific</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-semibold text-ink-900">Paper III</td>
                    <td className="px-4 py-3">Assistant Audit Officer and Assistant Accounts Officer</td>
                    <td className="px-4 py-3">Post-specific</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="border border-ink-200 bg-white p-5">
            <h2 className="mb-2 text-lg font-semibold text-ink-900">Important post-specific checks</h2>
            <p>
              Some inspector, sub-inspector and BRO posts have physical, medical or educational standards.
              Read those requirements before locking your post preferences because allocation does not waive them.
            </p>
          </section>

          <section className="border border-ink-200 bg-ink-50 p-5">
            <h2 className="mb-2 text-lg font-semibold text-ink-900">Official source</h2>
            <p>
              Selection rules can be changed by corrigenda. Confirm the current wording in the{' '}
              <a
                className="font-semibold text-ink-900 underline underline-offset-4"
                href="https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2026.pdf"
                target="_blank"
                rel="noreferrer"
              >
                official SSC CGL 2026 notice
              </a>.
            </p>
          </section>
        </div>
      </ExamInfoPageContent>
    );
  }

  if (exam.slug === 'ibps-po') {
    const stages = [
      {
        number: '01',
        title: 'Online Preliminary Examination',
        text: 'The 100-mark prelim is used for shortlisting. Candidates must clear the cut-off in each of the three separately timed tests. Preliminary marks do not form part of the final merit score.',
      },
      {
        number: '02',
        title: 'Online Main Examination',
        text: 'Shortlisted candidates take the 200-mark objective test and 25-mark descriptive paper. Main-exam marks are used for shortlisting to the Personality Test and Interview and also contribute to final merit.',
      },
      {
        number: '03',
        title: 'Mandatory Personality Test',
        text: 'Main-qualified candidates complete a self-report Personality Test. It is non-qualifying, but attendance is mandatory to remain eligible for the Interview. The personality profile is shared with the interview panel.',
      },
      {
        number: '04',
        title: 'Common Interview',
        text: 'Participating Banks conduct the interview, coordinated by a Nodal Bank. Candidates must qualify both the Main examination and Interview. The notification sets a 40% interview minimum, or 35% for SC, ST, OBC and PwBD candidates.',
      },
      {
        number: '05',
        title: 'Final score and provisional allotment',
        text: 'The combined final score gives 80% weight to the Online Main examination and 20% to the Interview. Subject to merit, preferences, reservation rules, actual vacancies and document checks, candidates may be provisionally allotted to a participating bank.',
      },
    ];

    return (
      <ExamInfoPageContent
        country={country}
        exam={exam}
        pageName="Selection Process"
        pageSlug="selection-process"
        heading="IBPS PO Selection Process 2026"
      >
        <div className="space-y-6 text-sm leading-6 text-ink-700">
          <section className="border border-ink-200 bg-ink-50 p-5">
            <h2 className="mb-2 text-lg font-semibold text-ink-900">How selection works</h2>
            <p>
              CRP PO/MT-XVI moves from two online examinations to a mandatory Personality Test, Common
              Interview and merit-cum-preference allotment. Clearing a stage is shortlisting, not a job offer.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-ink-900">Stage-by-stage process</h2>
            <ol className="space-y-px border border-ink-200 bg-ink-200">
              {stages.map((stage) => (
                <li key={stage.number} className="grid gap-3 bg-white p-5 sm:grid-cols-[3rem_1fr]">
                  <span className="text-sm font-semibold text-ink-400" aria-hidden="true">
                    {stage.number}
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink-900">{stage.title}</h3>
                    <p className="mt-1">{stage.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="grid gap-px border border-ink-200 bg-ink-200 sm:grid-cols-2">
            <div className="bg-white p-5">
              <span className="block text-xs font-semibold uppercase tracking-wide text-ink-500">Final-score weight</span>
              <strong className="mt-2 block text-xl text-ink-900">Main exam: 80%</strong>
            </div>
            <div className="bg-white p-5">
              <span className="block text-xs font-semibold uppercase tracking-wide text-ink-500">Final-score weight</span>
              <strong className="mt-2 block text-xl text-ink-900">Interview: 20%</strong>
            </div>
          </section>

          <section className="border border-ink-200 bg-white p-5">
            <h2 className="mb-2 text-lg font-semibold text-ink-900">What provisional allotment means</h2>
            <p>
              Allotment depends on actual vacancies reported by banks and is subject to eligibility and
              identity verification. It is not itself an appointment offer; joining terms are issued by the
              allotted participating bank.
            </p>
          </section>

          <section className="border border-ink-200 bg-ink-50 p-5">
            <h2 className="mb-2 text-lg font-semibold text-ink-900">Official source</h2>
            <p>
              Confirm every stage in the{' '}
              <a
                className="font-semibold text-ink-900 underline underline-offset-4"
                href="https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf"
                target="_blank"
                rel="noreferrer"
              >
                official CRP PO/MT-XVI notification
              </a>. IBPS may publish later process updates on its website.
            </p>
          </section>
        </div>
      </ExamInfoPageContent>
    );
  }

  return (
    <ExamInfoPageContent
      country={country}
      exam={exam}
      pageName="Selection Process"
      pageSlug="selection-process"
      placeholder="A verified stage-by-stage selection process is not published here yet. Refer to the official notification."
    />
  );
}
