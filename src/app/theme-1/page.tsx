import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';

// A retired design-preview URL, kept alive so any old external link still
// lands somewhere sensible instead of a 404.
//
// This used to call redirect('/in'). Under output: 'export' there is no
// server to issue a 3xx, so Next compiled that redirect into its error
// shell: <html id="__next_error__">, no body content, no robots directive,
// and the site-wide default title and description inherited from the root
// layout. A crawler that does not run JavaScript therefore saw a thin page
// duplicating the homepage's title, and only a browser with JS enabled ever
// reached /in.
//
// A static export can still redirect without JavaScript through a meta
// refresh, which Google treats much like a permanent redirect when the delay
// is zero. React hoists the tag below into <head>. The visible markup is the
// fallback for anything that ignores the refresh, so this URL is never an
// empty page for any client. robots stays noindex, follow: nothing here is
// worth indexing, but the link out should still be crawled. There is
// deliberately no canonical pointing at /in, since combining that with
// noindex sends two conflicting instructions about the same URL.
const COUNTRY = 'in';
const TARGET = `/${COUNTRY}`;

export const metadata: Metadata = {
  title: 'Retired Preview Page',
  description: 'This design preview URL has been retired. Continue to the TakeMockTest home page for free mock tests.',
  robots: { index: false, follow: true },
};

export default function RetiredThemePreview() {
  return (
    <div className="site-shell min-h-screen flex flex-col">
      <meta httpEquiv="refresh" content={`0; url=${TARGET}`} />
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>
      <Header country={COUNTRY} />
      <main id="main-content" className="flex-1 pb-20 lg:pb-0">
        <div className="mx-auto max-w-3xl px-5 py-14 md:py-20 text-center">
          <h1 className="font-sans text-3xl font-bold tracking-tight text-ink-900 md:text-5xl">This preview page has been retired</h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-ink-700 md:text-base">
            It held an early design experiment that never shipped. You should be sent to the home page automatically; if that does not happen, use the link below.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href={TARGET}
              className="inline-flex min-h-11 items-center bg-action-700 px-6 text-sm font-semibold text-white hover:bg-action-600"
            >
              Go to homepage
            </Link>
            <Link
              href={`/${COUNTRY}/exams`}
              className="inline-flex min-h-11 items-center border border-ink-200 bg-white px-6 text-sm font-semibold text-ink-900 hover:border-ink-900"
            >
              Browse all exams
            </Link>
          </div>
        </div>
      </main>
      <Footer country={COUNTRY} />
      <BottomNav country={COUNTRY} />
    </div>
  );
}
