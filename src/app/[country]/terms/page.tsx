import { pageMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return pageMetadata({
    title: 'Terms of Service',
    description: 'Terms for using TakeMockTest mock tests, results, and study resources.',
    path: `/${country}/terms`,
    // Same treatment as the Privacy Policy: a boilerplate legal page has no
    // business competing in search. It was indexable while Privacy was not,
    // which looks like an oversight rather than a decision — Search Console
    // shows it drawing more impressions (7 in 90 days, avg. position 2.1)
    // than most real pages, and converting none of them.
    noIndex: true,
  });
}

const TERMS = [
  ['Using the service', 'TakeMockTest provides free practice material for personal, non-commercial study. You may not copy, resell, scrape, or republish substantial parts of the question bank without written permission.'],
  ['Educational purpose', 'Mock-test scores are practice indicators only. They are not official results and do not guarantee selection, admission, rank, or eligibility. Always verify exam notices with the conducting body.'],
  ['Accuracy and corrections', 'We aim to match official exam patterns and correct verified errors, but exam rules can change. Where our information conflicts with an official notification, the official notification takes precedence.'],
  ['Your test data', 'Answers and results are stored in your browser so the site can show your history. Clearing browser storage removes that history.'],
  ['Availability', 'The service may change, pause, or remove tests as question banks and exam patterns are reviewed. We do not promise uninterrupted availability.'],
  ['Independent platform', 'TakeMockTest is independent and is not affiliated with SSC, IBPS, RRB, or any examination body listed on the site.'],
];

export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-6">
      <h1 className="font-sans font-bold text-2xl mb-3 text-ink-900">Terms of Service</h1>
      <p className="mb-8 text-sm text-ink-500">Effective 30 July 2026.</p>
      <div className="space-y-7">
        {TERMS.map(([heading, body]) => (
          <section key={heading}>
            <h2 className="mb-2 text-base font-semibold text-ink-900">{heading}</h2>
            <p className="text-sm leading-6 text-ink-500">{body}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
