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
      title: 'SSC CGL Salary 2026 — Post-wise Pay Levels & Basic Pay',
      description: 'Check the official SSC CGL 2026 pay levels and basic-pay ranges, plus a clear explanation of allowances, deductions, and why in-hand salary varies.',
      path: '/in/ssc-cgl/salary',
    });
  }
  return pageMetadata({
    title: `${exam.name} Salary ${new Date().getFullYear()}`,
    description: `${exam.name} in-hand salary, pay scale, and allowances.`,
    path: `/in/${exam.slug}/salary`,
    noIndex: true,
  });
}

export default async function SalaryPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();

  if (exam.slug === 'ssc-cgl') {
    const payLevels = [
      ['Pay Level 8', '₹47,600', '₹1,51,100'],
      ['Pay Level 7', '₹44,900', '₹1,42,400'],
      ['Pay Level 6', '₹35,400', '₹1,12,400'],
      ['Pay Level 5', '₹29,200', '₹92,300'],
      ['Pay Level 4', '₹25,500', '₹81,100'],
    ];

    return (
      <ExamInfoPageContent
        country={country}
        exam={exam}
        pageName="Salary"
        pageSlug="salary"
        heading="SSC CGL Salary 2026"
      >
        <div className="space-y-6 text-sm leading-6 text-ink-700">
          <section className="border border-ink-200 bg-ink-50 p-5">
            <h2 className="mb-2 text-lg font-semibold text-ink-900">Salary at a glance</h2>
            <p>
              SSC CGL posts are placed across Pay Levels 4 to 8 of the Central Government pay matrix.
              Your allotted post determines the pay level; city, allowances and deductions determine the final take-home amount.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-ink-900">Official pay-level ranges</h2>
            <div className="overflow-x-auto border border-ink-200 bg-white">
              <table className="w-full text-left">
                <thead className="border-b border-ink-200 bg-ink-50 text-ink-900">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Pay level</th>
                    <th className="px-4 py-3 font-semibold">Starting basic pay</th>
                    <th className="px-4 py-3 font-semibold">Upper range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-ink-200">
                  {payLevels.map(([level, start, end]) => (
                    <tr key={level}>
                      <td className="px-4 py-3 font-semibold text-ink-900">{level}</td>
                      <td className="px-4 py-3">{start}</td>
                      <td className="px-4 py-3">{end}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-2 text-ink-500">
              These are pay-matrix basic-pay ranges, not monthly in-hand figures.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-ink-900">How monthly salary is formed</h2>
            <div className="grid gap-px border border-ink-200 bg-ink-200 sm:grid-cols-2">
              <div className="bg-white p-4">
                <h3 className="font-semibold text-ink-900">Added to basic pay</h3>
                <p className="mt-1">Applicable Dearness Allowance, House Rent Allowance and Transport Allowance.</p>
              </div>
              <div className="bg-white p-4">
                <h3 className="font-semibold text-ink-900">Common deductions</h3>
                <p className="mt-1">NPS contribution, CGHS or equivalent charges, income tax and other applicable deductions.</p>
              </div>
            </div>
          </section>

          <section className="border border-ink-200 bg-white p-5">
            <h2 className="mb-2 text-lg font-semibold text-ink-900">Why we do not quote one in-hand salary</h2>
            <p>
              A single figure would be misleading. Take-home pay changes with the post, place of posting,
              current allowance rates, government accommodation, tax position and deductions. Use the basic
              pay table for reliable comparison, then check the current departmental rules after allocation.
            </p>
          </section>

          <section className="border border-ink-200 bg-ink-50 p-5">
            <h2 className="mb-2 text-lg font-semibold text-ink-900">Official source</h2>
            <p>
              Confirm the pay level attached to each post in the{' '}
              <a
                className="font-semibold text-ink-900 underline underline-offset-4"
                href="https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2026.pdf"
                target="_blank"
                rel="noreferrer"
              >
                official SSC CGL 2026 notice
              </a>. Allowance rates can change separately from this notice.
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
      pageName="Salary"
      pageSlug="salary"
      placeholder="Verified pay-scale and allowance information is not published here yet. Refer to the recruiting body's official notice."
    />
  );
}
