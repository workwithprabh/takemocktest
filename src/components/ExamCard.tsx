import Link from 'next/link';
import { ExamConfig, getCheckedTestCount } from '@/lib/exams';

const CATEGORY_STYLES = {
  SSC: {
    surface: 'bg-[#FFF1D6]',
    iconText: 'text-[#9A5B00]',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path d="M5 19V9l7-4 7 4v10M3 19h18M8 11v5m4-5v5m4-5v5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  Banking: {
    surface: 'bg-[#E4F0FF]',
    iconText: 'text-[#245B9B]',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path d="m3 9 9-5 9 5M5 10h14M6 10v7m4-7v7m4-7v7m4-7v7M3 20h18" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  Railways: {
    surface: 'bg-[#E3F3EA]',
    iconText: 'text-[#2E7250]',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path d="M7 4h10a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V6a2 2 0 0 1 2-2Zm-2 8h14M8 8h8M8 21l2-3m6 0 2 3" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="8.5" cy="15" r=".8" fill="currentColor" />
        <circle cx="15.5" cy="15" r=".8" fill="currentColor" />
      </svg>
    ),
  },
  'Civil Services': {
    surface: 'bg-[#EEE8FF]',
    iconText: 'text-[#654AA3]',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path d="M12 3 3 7.5 12 12l9-4.5L12 3Zm-7 6v6c0 1.5 3 4 7 4s7-2.5 7-4V9M21 8v7" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  Engineering: {
    surface: 'bg-[#FFEAD8]',
    iconText: 'text-[#9A4B10]',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path d="M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1m0-12.8-2.1 2.1m-8.6 8.6-2.1 2.1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  'English Proficiency': {
    surface: 'bg-[#EEE8FF]',
    iconText: 'text-[#654AA3]',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3 12h18M12 3c2.5 2.5 3.8 6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-6-3.8-9s1.3-6.5 3.8-9Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  'Study Abroad': {
    surface: 'bg-[#FDE8EE]',
    iconText: 'text-[#B0355C]',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path d="M3 20h18M6 20V10l6-5 6 5v10M10 20v-6h4v6" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  Finance: {
    surface: 'bg-[#DFF5F3]',
    iconText: 'text-[#0F766E]',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path d="M4 19V5m0 14h16M8 19v-6m4 6v-9m4 9v-4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
  Defence: {
    surface: 'bg-[#E6EFE0]',
    iconText: 'text-[#3D6B35]',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Zm0 4 4.5 2v3c0 3-1.9 5-4.5 5.5C9.4 17 7.5 15 7.5 12V9L12 7Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  Law: {
    surface: 'bg-[#F3E8DC]',
    iconText: 'text-[#8B5A2B]',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path d="M12 3v18M6 21h12M12 6 5 9l2.5 6h-5L5 9m7-3 7 3-2.5 6h5L19 9m-7-3v3" fill="none" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  Management: {
    surface: 'bg-[#FCE4EC]',
    iconText: 'text-[#A32357]',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6">
        <path d="M4 20V10m5 10V4m5 16v-7m5 7V8M3 20h18" fill="none" stroke="currentColor" strokeWidth="1.7" />
      </svg>
    ),
  },
} as const;

export default function ExamCard({ exam, country }: { exam: ExamConfig; country: string }) {
  const style = CATEGORY_STYLES[exam.category];
  const checkedTestCount = getCheckedTestCount(exam);

  return (
    <Link
      href={`/${country}/${exam.slug}/mock-test`}
      aria-label={checkedTestCount > 0 ? `Open free ${exam.name} mock tests` : `Try the ${exam.name} test interface demo`}
      className="group flex min-h-20 items-center gap-3 border border-ink-200 bg-white p-4 transition duration-200 hover:border-action-600 hover:bg-action-50/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-900"
    >
      <div className={`flex h-10 w-10 shrink-0 items-center justify-center ${style.surface} ${style.iconText}`}>
        {style.icon}
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-semibold text-ink-900 group-hover:underline">{exam.name}</h3>
        <p className="mt-1 text-xs text-ink-600">
          {checkedTestCount > 0 ? `${checkedTestCount} checked tests` : 'Practice demo'}
        </p>
      </div>
      <span className="text-lg text-action-700 transition group-hover:translate-x-0.5" aria-hidden="true">→</span>
    </Link>
  );
}
