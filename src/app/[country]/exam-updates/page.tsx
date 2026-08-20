import UpdateFinder from '@/components/UpdateFinder';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, itemListSchema, jsonLdHtml } from '@/lib/schema';
import { UPDATES, getLatestUpdates } from '@/lib/updates';

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return pageMetadata({
    title: 'Latest Exam Notifications, Admit Cards & Results',
    description: 'Track verified exam notifications, schedules, admit cards, answer keys, results and cutoffs with links to official sources and relevant mock tests.',
    path: `/${country}/exam-updates`,
  });
}

export default async function ExamUpdatesPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const updates = getLatestUpdates(UPDATES.length);
  const examCount = new Set(updates.map((update) => update.examSlug)).size;
  const sourceCount = new Set(updates.map((update) => update.sourceName)).size;
  const jsonLd = [
    breadcrumbSchema([
      { name: 'Home', path: `/${country}` },
      { name: 'Exam updates', path: `/${country}/exam-updates` },
    ]),
    itemListSchema(updates.map((update) => ({
      name: update.headline,
      path: `/${country}/exam-updates/${update.slug}`,
    }))),
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />

      <div className="border-b border-ink-800 bg-ink-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-12 md:py-16">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-300">Official-source summaries</p>
          <h1 className="max-w-4xl text-3xl font-bold tracking-tight md:text-5xl">Latest exam notifications, admit cards and results</h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-ink-300 md:text-lg">
            Find the update that affects your exam, verify it at the official source, and move directly into the right preparation resource.
          </p>
          <div className="mt-8 grid max-w-3xl grid-cols-3 border border-ink-700">
            {[
              [updates.length, 'Verified updates'],
              [examCount, 'Exams covered'],
              [sourceCount, 'Official authorities'],
            ].map(([value, label]) => (
              <div key={label} className="border-r border-ink-700 px-3 py-4 last:border-r-0 sm:px-5">
                <div className="text-xl font-bold text-white md:text-2xl">{value}</div>
                <div className="mt-1 text-[11px] leading-4 text-ink-300 sm:text-xs">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
        <div className="mb-8 grid gap-4 border border-ink-200 bg-ink-50 p-5 md:grid-cols-[220px_1fr] md:items-center md:p-6">
          <div className="text-sm font-bold text-ink-900">How verification works</div>
          <p className="text-sm leading-6 text-ink-600">
            Every item below names the publishing authority, links to its official website, and records when TakeMockTest checked that source. Dates described as tentative remain labelled tentative.
          </p>
        </div>

        <UpdateFinder updates={updates} country={country} />
      </div>
    </div>
  );
}
