'use client';

import Link from 'next/link';
import { getExamCatalog, getCategoryExamCount } from '@/lib/exam-catalog';
import { countryPublishes } from '@/lib/exam-countries';
import { useDismissableMenu } from '@/lib/useDismissableMenu';

// Site header: logo, primary nav, search. This is the internal-linking
// anchor Google uses to discover every exam/blog page beneath it.
export default function Header({ country }: { country: string }) {
  const examMenu = useDismissableMenu<HTMLDivElement>();
  const practiceMenu = useDismissableMenu<HTMLDivElement>();
  // Chrome renders on every page of every country, so a link to a section a
  // country does not publish would be a dead link site-wide, not a one-off.
  const hasExams = countryPublishes(country, 'exams');
  const hasBlog = countryPublishes(country, 'blog');
  const hasUpdates = countryPublishes(country, 'updates');
  const categories = getExamCatalog(country);

  return (
    <header className="bg-ink-900 sticky top-0 z-20">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        <Link href={`/${country}`} className="font-sans font-bold text-lg text-ink-50">
          TakeMockTest
        </Link>
        <nav aria-label="Primary navigation" className="header-nav">
          {hasExams && <Link href={`/${country}/exams?availability=available`} className="hover:text-ink-300 transition">Mock tests</Link>}
          {hasUpdates && <Link href={`/${country}/exam-updates`} className="hover:text-ink-300 transition">Exam updates</Link>}
          <div ref={practiceMenu.ref} className="relative">
            <button
              type="button"
              onClick={() => {
                practiceMenu.setOpen((value) => !value);
                examMenu.setOpen(false);
              }}
              aria-expanded={practiceMenu.open}
              className="header-nav-link"
            >
              Practice
              <span className={`text-xs transition-transform duration-200 ${practiceMenu.open ? 'rotate-180' : ''}`} aria-hidden="true">⌄</span>
            </button>
            {practiceMenu.open && (
              <div className="absolute left-0 top-full mt-2 w-56 border border-ink-700 bg-ink-900 p-2 shadow-2xl">
                <Link href={`/${country}/practice`} onClick={() => practiceMenu.setOpen(false)} className="block px-3 py-2.5 text-ink-200 transition hover:bg-ink-800 hover:text-ink-50">Topic practice</Link>
                <Link href={`/${country}/logical-reasoning`} onClick={() => practiceMenu.setOpen(false)} className="block px-3 py-2.5 text-ink-200 transition hover:bg-ink-800 hover:text-ink-50">Logical reasoning</Link>
              </div>
            )}
          </div>
          {hasExams && (
          <div ref={examMenu.ref} className="relative">
            <button
              type="button"
              onClick={() => {
                examMenu.setOpen((value) => !value);
                practiceMenu.setOpen(false);
              }}
              aria-expanded={examMenu.open}
              className="header-nav-link"
            >
              Browse exams
              <span
                className={`text-xs transition-transform duration-200 ${examMenu.open ? 'rotate-180' : ''}`}
                aria-hidden="true"
              >
                ⌄
              </span>
            </button>
            {examMenu.open && (
              <div className="absolute left-0 top-full mt-2 w-[520px] border border-ink-700 bg-ink-900 p-4 shadow-2xl">
                <div className="mb-3 flex items-center justify-between border-b border-ink-700 pb-3">
                  <span className="font-semibold text-ink-50">Browse by goal</span>
                  <Link href={`/${country}/exams`} onClick={() => examMenu.setOpen(false)} className="text-xs text-ink-300 hover:text-ink-50">View all exams →</Link>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/${country}/exams/${category.slug}`}
                      onClick={() => examMenu.setOpen(false)}
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
          )}
          {hasBlog && <Link href={`/${country}/blog`} className="hover:text-ink-300 transition">Study guides</Link>}
          <Link href={`/${country}/results`} className="hover:text-ink-300 transition">My results</Link>
        </nav>
        {hasExams && (
        <Link
          href={`/${country}/exams`}
          aria-label="Search and browse exams"
          className="header-icon-button"
        >
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
          <span className="hidden text-xs font-semibold sm:inline">Find exam</span>
        </Link>
        )}
      </div>
    </header>
  );
}
