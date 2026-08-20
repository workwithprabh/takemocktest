import { EXAM_LIST, getExam } from '@/lib/exams';
import { breadcrumbSchema, jsonLdHtml } from '@/lib/schema';
import { notFound } from 'next/navigation';
import ExamInfoPageContent from '@/components/ExamInfoPageContent';
import { pageMetadata } from '@/lib/metadata';

const OFFICIAL_NOTICE = 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/writeup_181225.pdf';

const CUTOFF_LISTS = [
  {
    title: 'Junior Statistical Officer (JSO)',
    note: 'List 1: Tier 2 Paper 1 and Paper 2 (Statistics)',
    rows: [
      ['SC', '137.29518', '1,509'],
      ['ST', '136.40211', '473'],
      ['OBC', '153.46108', '1,494'],
      ['EWS', '151.58638', '934'],
      ['UR', '153.46108', '1,449'],
      ['OH', '125.16130', '111'],
      ['HH', '104.04315', '92'],
      ['VH', '134.15850', '44'],
      ['Other PwD', '91.01367', '90'],
    ],
  },
  {
    title: 'Statistical Investigator Grade II',
    note: 'List 2: Tier 2 Paper 1 and Paper 2 (Statistics)',
    rows: [
      ['SC', '137.16184', '577'],
      ['ST', '130.16987', '377'],
      ['OBC', '150.51402', '892'],
      ['EWS', '152.14666', '350'],
      ['UR', '152.47231', '525'],
      ['HH', '112.62423', '30'],
      ['OH', '127.48052', '30'],
    ],
  },
  {
    title: 'All other posts',
    note: 'List 3: Tier 2 Paper 1',
    rows: [
      ['SC', '114.97063', '25,338'],
      ['ST', '106.36936', '11,729'],
      ['OBC', '130.36617', '43,260'],
      ['EWS', '127.41630', '20,268'],
      ['UR', '136.83159', '20,035'],
      ['ESM', '92.80460', '3,511'],
      ['OH', '100.87394', '1,667'],
      ['HH', '68.79973', '1,550'],
      ['VH', '72.00006', '1,615'],
      ['Other PwD', '41.70541', '1,445'],
    ],
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
      title: 'SSC CGL Tier 1 Cutoff 2025: Official Category-wise Marks',
      description: 'Check the official SSC CGL Tier 1 2025 cutoff marks for JSO, Statistical Investigator Grade II, and all other posts, with shortlisted-candidate counts.',
      path: '/in/ssc-cgl/cutoff',
    });
  }

  return pageMetadata({
    title: `${exam.name} Cutoff: Verification in Progress`,
    description: `${exam.name} category-wise cutoff marks will be published after verification against the official result notice.`,
    path: `/in/${exam.slug}/cutoff`,
    noIndex: true,
  });
}

function CutoffTable({ list }: { list: (typeof CUTOFF_LISTS)[number] }) {
  return (
    <section className="border border-ink-200 bg-white" aria-labelledby={`cutoff-${list.title.replaceAll(' ', '-').toLowerCase()}`}>
      <div className="border-b border-ink-200 p-5">
        <h2 id={`cutoff-${list.title.replaceAll(' ', '-').toLowerCase()}`} className="text-lg font-bold text-ink-900">{list.title}</h2>
        <p className="text-sm text-ink-500 mt-1">{list.note}</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[32rem] text-sm">
          <thead className="bg-ink-50 text-left text-ink-700">
            <tr>
              <th scope="col" className="px-5 py-3 font-semibold">Category</th>
              <th scope="col" className="px-5 py-3 font-semibold text-right">Cutoff marks</th>
              <th scope="col" className="px-5 py-3 font-semibold text-right">Candidates shortlisted</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink-100 text-ink-700">
            {list.rows.map(([category, marks, candidates]) => (
              <tr key={category}>
                <th scope="row" className="px-5 py-3 text-left font-medium text-ink-900">{category}</th>
                <td className="px-5 py-3 text-right tabular-nums">{marks}</td>
                <td className="px-5 py-3 text-right tabular-nums">{candidates}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default async function CutoffPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();

  if (exam.slug !== 'ssc-cgl') {
    return (
      <ExamInfoPageContent
        country={country}
        exam={exam}
        pageName="Cutoff"
        pageSlug="cutoff"
        placeholder="No verified cutoff table is published here. Use the exam authority's official notice for current category-wise marks."
      />
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-5 py-8 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdHtml(
            breadcrumbSchema([
              { name: 'Home', path: `/${country}` },
              { name: exam.name, path: `/${country}/${exam.slug}` },
              { name: 'Cutoff', path: `/${country}/${exam.slug}/cutoff` },
            ])
          ),
        }}
      />

      <header className="max-w-3xl mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500 mb-3">Official result · 18 December 2025</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-3">SSC CGL Tier 1 Cutoff 2025</h1>
        <p className="text-ink-500 leading-7">
          Official normalized cutoff marks used to shortlist candidates for Tier 2. SSC published separate lists for JSO, Statistical Investigator Grade II, and all other posts.
        </p>
      </header>

      <section className="border border-ink-200 bg-ink-50 p-5 sm:p-6 mb-8" aria-labelledby="minimum-qualifying-heading">
        <h2 id="minimum-qualifying-heading" className="text-lg font-bold text-ink-900 mb-3">Minimum qualifying marks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink-200 border border-ink-200">
          {[
            ['UR', '30%'],
            ['OBC / EWS', '25%'],
            ['All other categories', '20%'],
          ].map(([category, percentage]) => (
            <div key={category} className="bg-white p-4">
              <p className="text-sm text-ink-500">{category}</p>
              <p className="text-2xl font-bold text-ink-900 mt-1">{percentage}</p>
            </div>
          ))}
        </div>
        <p className="text-xs leading-5 text-ink-500 mt-3">These are minimum qualifying percentages, not the category-wise shortlisting cutoffs shown below.</p>
      </section>

      <div className="space-y-6">
        {CUTOFF_LISTS.map((list) => <CutoffTable key={list.title} list={list} />)}
      </div>

      <section className="border border-ink-200 bg-ink-900 text-ink-50 p-6 sm:p-8 mt-10">
        <h2 className="text-xl font-bold mb-2">How to read these cutoffs</h2>
        <p className="text-sm leading-6 text-ink-300 mb-5 max-w-3xl">
          SSC used normalized Tier 1 marks because the examination ran across multiple shifts. The cutoff applicable to a candidate depends on the post list and category; meeting only the minimum qualifying percentage did not guarantee shortlisting.
        </p>
        <a
          href={OFFICIAL_NOTICE}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center justify-center bg-ink-50 text-ink-900 px-5 py-2.5 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-50"
        >
          Read the official SSC result notice <span aria-hidden="true" className="ml-2">↗</span>
        </a>
      </section>
    </div>
  );
}
