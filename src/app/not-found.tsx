import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import { EXAM_LIST, getCheckedTestCount } from '@/lib/exams';

// Next's global catch-all for any unmatched route (a bad external link, a
// typo'd URL, a stale bookmark). It renders outside [country]/layout.tsx,
// so it doesn't get Header/Footer/BottomNav for free the way every real
// page does — this rebuilds that same shell by hand, hardcoding the one
// country this site has (see COUNTRIES in lib/exams.ts), so a lost visitor
// still lands on a real page with real navigation instead of a dead end.
const COUNTRY = 'in';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'This page doesn\'t exist. Find your exam\'s mock tests from the full directory instead.',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  const popularExams = EXAM_LIST.filter((exam) => getCheckedTestCount(exam) > 0).slice(0, 8);

  return (
    <div className="site-shell min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="fixed left-3 top-3 z-50 -translate-y-20 bg-white px-4 py-2 text-sm font-semibold text-ink-900 shadow-lg focus:translate-y-0"
      >
        Skip to main content
      </a>
      <Header country={COUNTRY} />
      <main id="main-content" className="flex-1 pb-20 lg:pb-0">
        <div className="mx-auto max-w-3xl px-5 py-14 md:py-20 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-action-700">404</p>
          <h1 className="font-sans text-3xl font-bold tracking-tight text-ink-900 md:text-5xl">This page doesn&apos;t exist</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-ink-700 md:text-base">
            The link that brought you here is broken, mistyped, or out of date. Nothing on TakeMockTest ever changed under this URL, so it&apos;s worth double-checking where you got it from, or just find what you need below.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={`/${COUNTRY}/exams`}
              className="inline-flex min-h-11 items-center bg-action-700 px-6 text-sm font-semibold text-white hover:bg-action-600"
            >
              Browse all exams
            </Link>
            <Link
              href={`/${COUNTRY}`}
              className="inline-flex min-h-11 items-center border border-ink-200 bg-white px-6 text-sm font-semibold text-ink-900 hover:border-ink-900"
            >
              Go to homepage
            </Link>
          </div>

          {popularExams.length > 0 && (
            <div className="mt-14 border border-ink-200 bg-ink-50 p-6 text-left md:p-8">
              <h2 className="mb-4 text-sm font-bold text-ink-900">Popular mock tests</h2>
              <ul className="grid grid-cols-1 gap-x-6 gap-y-2 text-sm text-ink-700 sm:grid-cols-2">
                {popularExams.map((exam) => (
                  <li key={exam.slug}>
                    <Link href={`/${COUNTRY}/${exam.slug}/mock-test`} className="hover:text-action-700 hover:underline">
                      {exam.name} Mock Test
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-ink-200 pt-4 text-sm font-semibold">
                <Link href={`/${COUNTRY}/blog`} className="text-action-700 hover:underline">Read the blog →</Link>
                <Link href={`/${COUNTRY}/exam-updates`} className="text-action-700 hover:underline">Latest exam updates →</Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer country={COUNTRY} />
      <BottomNav country={COUNTRY} />
    </div>
  );
}
