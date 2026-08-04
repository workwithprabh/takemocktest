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
      title: 'SSC CGL Eligibility 2026 — Age Limit & Qualification',
      description: 'Check SSC CGL 2026 eligibility: post-wise age limits, age relaxation, educational qualifications, nationality rules, and the qualification cut-off date.',
      path: '/in/ssc-cgl/eligibility',
    });
  }
  if (exam.slug === 'ibps-po') {
    return pageMetadata({
      title: 'IBPS PO Eligibility 2026 — Age Limit & Qualification',
      description: 'Check the official IBPS PO 2026 eligibility criteria: 20–30 year age limit, category relaxations, graduation requirement, citizenship rules, and cut-off dates.',
      path: '/in/ibps-po/eligibility',
    });
  }
  return pageMetadata({
    title: `${exam.name} Eligibility Criteria ${new Date().getFullYear()}`,
    description: `${exam.name} eligibility criteria — age limit, educational qualification, and nationality requirements.`,
    path: `/in/${exam.slug}/eligibility`,
    noIndex: true,
  });
}

export default async function EligibilityPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();

  if (exam.slug === 'ssc-cgl') {
    return (
      <ExamInfoPageContent
        country={country}
        exam={exam}
        pageName="Eligibility"
        pageSlug="eligibility"
        heading="SSC CGL Eligibility 2026"
      >
        <div className="space-y-6 text-sm leading-6 text-ink-700">
          <section className="border border-ink-200 bg-ink-50 p-5">
            <h2 className="mb-2 text-lg font-semibold text-ink-900">Eligibility at a glance</h2>
            <p>
              SSC CGL eligibility depends on the post you choose. Most posts require a bachelor&apos;s degree,
              while the age limit falls within one of four post-specific bands. The crucial date for age and
              educational qualification is <strong>1 August 2026</strong>.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-ink-900">Age limit</h2>
            <div className="overflow-x-auto border border-ink-200 bg-white">
              <table className="w-full text-left">
                <thead className="border-b border-ink-200 bg-ink-50 text-ink-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Post-specific age band</th>
                    <th className="px-4 py-3 font-semibold">Age as on</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-200">
                  {['18–27 years', '20–30 years', '18–30 years', '18–32 years'].map((band) => (
                    <tr key={band}>
                      <td className="px-4 py-3 font-medium text-ink-900">{band}</td>
                      <td className="px-4 py-3">1 August 2026</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-ink-500">
              The applicable band varies by post. Check the post-wise age column in the official notice before applying.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-ink-900">Upper-age relaxation</h2>
            <ul className="grid gap-px border border-ink-200 bg-ink-200 sm:grid-cols-2">
              {[
                ['SC / ST', '5 years'],
                ['OBC', '3 years'],
                ['PwBD', '10 years'],
                ['PwBD (OBC)', '13 years'],
                ['PwBD (SC / ST)', '15 years'],
                ['Ex-servicemen', '3 years after deducting military service from actual age'],
              ].map(([category, relaxation]) => (
                <li key={category} className="bg-white p-4">
                  <span className="block font-semibold text-ink-900">{category}</span>
                  <span className="text-ink-500">{relaxation}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-ink-500">
              Additional rules apply to certain defence personnel, Central Government employees, widows and divorced women.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-ink-900">Educational qualification</h2>
            <div className="space-y-px border border-ink-200 bg-ink-200">
              <div className="bg-white p-4">
                <h3 className="font-semibold text-ink-900">Most SSC CGL posts</h3>
                <p className="mt-1">A bachelor&apos;s degree from a recognised university or an equivalent qualification.</p>
              </div>
              <div className="bg-white p-4">
                <h3 className="font-semibold text-ink-900">Junior Statistical Officer</h3>
                <p className="mt-1">
                  A bachelor&apos;s degree in any subject with at least 60% in Mathematics at Class 12, or a
                  bachelor&apos;s degree in any subject with Statistics studied at degree level.
                </p>
              </div>
              <div className="bg-white p-4">
                <h3 className="font-semibold text-ink-900">Statistical Investigator Grade II</h3>
                <p className="mt-1">
                  A bachelor&apos;s degree in an eligible statistics, mathematics, economics, demography,
                  operations research, computing, data science or artificial intelligence discipline listed in the notice.
                </p>
              </div>
            </div>
            <p className="mt-2 text-ink-500">
              Final-year candidates may apply, but they must hold the required qualification by 1 August 2026.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink-900">Nationality</h2>
            <p>
              Applicants must meet the citizenship or permitted nationality conditions in the official notice.
              This includes Indian citizens and specified eligible categories from Nepal, Bhutan and certain
              persons of Indian origin. A Government of India eligibility certificate may be required for
              candidates who are not Indian citizens.
            </p>
          </section>

          <section className="border border-ink-200 bg-white p-5">
            <h2 className="mb-2 text-lg font-semibold text-ink-900">Verify before applying</h2>
            <p>
              Post preferences affect age and qualification requirements. Use this page as a study guide, then
              confirm your chosen post against the{' '}
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
    return (
      <ExamInfoPageContent
        country={country}
        exam={exam}
        pageName="Eligibility"
        pageSlug="eligibility"
        heading="IBPS PO Eligibility 2026"
      >
        <div className="space-y-6 text-sm leading-6 text-ink-700">
          <section className="border border-ink-200 bg-ink-50 p-5">
            <h2 className="mb-2 text-lg font-semibold text-ink-900">Eligibility at a glance</h2>
            <p>
              A candidate ordinarily needs a recognised graduation degree and must be between 20 and 30
              years old. Age is measured on <strong>1 July 2026</strong>; the educational qualification must
              be held by <strong>21 July 2026</strong>.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-ink-900">Age limit</h2>
            <div className="grid gap-px border border-ink-200 bg-ink-200 sm:grid-cols-2">
              <div className="bg-white p-4">
                <span className="block text-xs font-semibold uppercase tracking-wide text-ink-500">Minimum</span>
                <strong className="mt-1 block text-xl text-ink-900">20 years</strong>
              </div>
              <div className="bg-white p-4">
                <span className="block text-xs font-semibold uppercase tracking-wide text-ink-500">Maximum</span>
                <strong className="mt-1 block text-xl text-ink-900">30 years</strong>
              </div>
            </div>
            <p className="mt-2 text-ink-500">
              For the unrelaxed limit, date of birth must fall from 2 July 1996 to 1 July 2006, inclusive.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-ink-900">Upper-age relaxation</h2>
            <ul className="grid gap-px border border-ink-200 bg-ink-200 sm:grid-cols-2">
              {[
                ['SC / ST', '5 years'],
                ['OBC (Non-Creamy Layer)', '3 years'],
                ['Persons with Benchmark Disabilities', '10 years'],
                ['Eligible ex-servicemen and specified commissioned officers', '5 years'],
              ].map(([category, relaxation]) => (
                <li key={category} className="bg-white p-4">
                  <span className="block font-semibold text-ink-900">{category}</span>
                  <span className="text-ink-500">{relaxation}</span>
                </li>
              ))}
            </ul>
            <p className="mt-2 text-ink-500">
              Certificate requirements and rules for combining relaxations are defined in the notification.
            </p>
          </section>

          <section className="border border-ink-200 bg-white p-5">
            <h2 className="mb-2 text-lg font-semibold text-ink-900">Educational qualification</h2>
            <p>
              A degree in any discipline from a university recognised by the Government of India, or an
              equivalent qualification recognised by the Central Government. The final result must have been
              declared on or before 21 July 2026, and candidates must possess a valid mark sheet or degree
              certificate when registering.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-ink-900">Nationality or citizenship</h2>
            <p>
              Eligible categories include Indian citizens, subjects of Nepal or Bhutan, specified Tibetan
              refugees, and specified persons of Indian origin who intend to settle permanently in India.
              Candidates outside the Indian-citizen category require the applicable Government of India
              eligibility certificate.
            </p>
          </section>

          <section className="border border-ink-200 bg-ink-50 p-5">
            <h2 className="mb-2 text-lg font-semibold text-ink-900">Verify before relying on this summary</h2>
            <p>
              Reservation and certificate rules are detailed and may depend on your category. Confirm them in
              the{' '}
              <a
                className="font-semibold text-ink-900 underline underline-offset-4"
                href="https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf"
                target="_blank"
                rel="noreferrer"
              >
                official CRP PO/MT-XVI notification
              </a>.
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
      pageName="Eligibility"
      pageSlug="eligibility"
      placeholder="Eligibility details are not published here yet. Confirm age, qualification, and nationality rules in the official notification."
    />
  );
}
