'use client';

import Link from 'next/link';
import { EXAM_CATEGORIES, getCategoryExamCount } from '@/lib/exam-catalog';
import { useDismissableMenu } from '@/lib/useDismissableMenu';

// Site header: logo, primary nav, search. This is the internal-linking
// anchor Google uses to discover every exam/blog page beneath it.
export default function Header({ country }: { country: string }) {
  const { open, setOpen, ref } = useDismissableMenu<HTMLDivElement>();

  return (
    <header className="bg-ink-900 sticky top-0 z-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        <Link href={`/${country}`} className="font-sans font-bold text-lg text-ink-50">
          TakeMockTest
        </Link>
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-6 text-sm font-medium text-ink-50">
          <Link href={`/${country}#exams`} className="hover:text-ink-300 transition">Mock tests</Link>
          <Link href={`/${country}/exam-updates`} className="hover:text-ink-300 transition">Exam updates</Link>
          <div ref={ref} className="relative">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              className="flex items-center gap-1.5 py-2 hover:text-ink-300 transition"
            >
              Browse exams
              <span
                className={`text-xs transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                ⌄
              </span>
            </button>
            {open && (
              <div className="absolute left-0 top-full mt-2 w-[520px] border border-ink-700 bg-ink-900 p-4 shadow-2xl">
                <div className="mb-3 flex items-center justify-between border-b border-ink-700 pb-3">
                  <span className="font-semibold text-ink-50">Browse by goal</span>
                  <Link href={`/${country}/exams`} onClick={() => setOpen(false)} className="text-xs text-ink-300 hover:text-ink-50">View all exams →</Link>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {EXAM_CATEGORIES.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/${country}/exams/${category.slug}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between px-3 py-2.5 text-ink-200 transition hover:bg-ink-800 hover:text-ink-50"
                    >
                      <span>{category.name}</span>
                      <span className="text-[10px] text-ink-300">{getCategoryExamCount(category)}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link href={`/${country}/blog`} className="hover:text-ink-300 transition">Study resources</Link>
          <Link href={`/${country}/results`} className="hover:text-ink-300 transition">My results</Link>
          <Link href={`/${country}/about`} className="hover:text-ink-300 transition">About</Link>
        </nav>
        <Link
          href={`/${country}/exams`}
          aria-label="Search and browse exams"
          className="flex h-9 items-center justify-center gap-2 border border-ink-700 px-2.5 text-ink-50 transition hover:border-ink-50 sm:px-3"
        >
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <span className="hidden text-xs font-semibold sm:inline">Find exam</span>
        </Link>
      </div>
    </header>
  );
}
