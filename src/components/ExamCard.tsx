import Link from 'next/link';
import { ExamConfig, getCheckedTestCount, getExamSections } from '@/lib/exams';

const CATEGORY_STYLES = {
  SSC: {
    surface: 'bg-[#EEF4FF]',
    border: 'border-[#BFD2F5]',
    text: 'text-[#244F9E]',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path d="M5 19V9l7-4 7 4v10M3 19h18M8 11v5m4-5v5m4-5v5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  Banking: {
    surface: 'bg-[#FFF4E8]',
    border: 'border-[#F1CFA8]',
    text: 'text-[#8A4B08]',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path d="m3 9 9-5 9 5M5 10h14M6 10v7m4-7v7m4-7v7m4-7v7M3 20h18" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  Railways: {
    surface: 'bg-[#EAF7F3]',
    border: 'border-[#B9DDD2]',
    text: 'text-[#17624F]',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path d="M7 4h10a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2Zm-2 8h14M8 8h8M8 21l2-3m6 0 2 3" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="8.5" cy="15" r=".8" fill="currentColor" />
        <circle cx="15.5" cy="15" r=".8" fill="currentColor" />
      </svg>
    ),
  },
  'Civil Services': {
    surface: 'bg-ink-100',
    border: 'border-ink-300',
    text: 'text-ink-700',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path d="M12 3 3 7.5 12 12l9-4.5L12 3Zm-7 6v6c0 1.5 3 4 7 4s7-2.5 7-4V9M21 8v7" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
} as const;

export default function ExamCard({ exam, country }: { exam: ExamConfig; country: string }) {
  const style = CATEGORY_STYLES[exam.category];
  const sectionCount = getExamSections(exam).length;
  const checkedTestCount = getCheckedTestCount(exam);

  return (
    <Link
      href={`/${country}/${exam.slug}/mock-test`}
      aria-label={checkedTestCount > 0 ? `Open free ${exam.name} mock tests` : `Try the ${exam.name} test interface demo`}
      className={`group flex min-h-56 flex-col border bg-white p-5 transition duration-200 hover:-translate-y-1 hover:border-ink-300 hover:shadow-xl hover:shadow-ink-900/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-900 ${style.border}`}
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className={`flex h-12 w-12 items-center justify-center ${style.surface} ${style.text}`}>
          {style.icon}
        </div>
        <span className={`px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ${style.surface} ${style.text}`}>
          {exam.category}
        </span>
      </div>

      <div className={`mb-1 font-sans text-xl font-bold ${style.text}`}>{exam.name}</div>
      <p className="mb-5 text-sm leading-6 text-ink-500">
        {sectionCount} listed sections · {exam.stages.length} stages
      </p>

      <div className="mt-auto flex items-center justify-between border-t border-ink-100 pt-4">
        <span>
          <span className="block text-sm font-semibold text-ink-900">
            {checkedTestCount > 0 ? 'View tests' : 'Try demo'}
          </span>
          <span className="block text-xs text-ink-500">
            {checkedTestCount > 0 ? `${checkedTestCount} syllabus-checked` : 'Practice demo only'}
          </span>
        </span>
        <span className="flex h-8 w-8 items-center justify-center bg-ink-900 text-white transition group-hover:translate-x-0.5" aria-hidden="true">
          →
        </span>
      </div>
    </Link>
  );
}
