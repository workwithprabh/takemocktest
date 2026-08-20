import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import { getExam, getCheckedTestCount } from '@/lib/exams';
import { pageMetadata } from '@/lib/metadata';
import { articleSchema, breadcrumbSchema, jsonLdHtml } from '@/lib/schema';
import { UPDATE_CATEGORY_STYLES, UPDATES, formatUpdateDate, getUpdate, getUpdatesForExam } from '@/lib/updates';

export function generateStaticParams() {
  return UPDATES.map((update) => ({ slug: update.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string; slug: string }> }) {
  const { country, slug } = await params;
  const update = getUpdate(slug);
  if (!update) return {};
  return pageMetadata({
    title: update.headline,
    description: update.summary,
    path: `/${country}/exam-updates/${update.slug}`,
  });
}

export default async function ExamUpdatePage({ params }: { params: Promise<{ country: string; slug: string }> }) {
  const { country, slug } = await params;
  const update = getUpdate(slug);
  if (!update) return notFound();

  const exam = getExam(update.examSlug);
  const hasMockTests = Boolean(exam && getCheckedTestCount(exam) > 0);
  const related = getUpdatesForExam(update.examSlug).filter((item) => item.slug !== update.slug).slice(0, 3);
  const jsonLd = [
    articleSchema({
      headline: update.headline,
      datePublished: update.publishedAt,
      dateModified: update.modifiedAt,
      authorName: 'TakeMockTest',
    }),
    breadcrumbSchema([
      { name: 'Home', path: `/${country}` },
      { name: 'Exam updates', path: `/${country}/exam-updates` },
      { name: update.headline, path: `/${country}/exam-updates/${update.slug}` },
    ]),
  ];

  return (
    <div className="mx-auto max-w-6xl px-5 py-6 md:py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <Breadcrumbs items={[
        { label: 'Home', href: `/${country}` },
        { label: 'Exam updates', href: `/${country}/exam-updates` },
        { label: update.examName },
      ]} />

      <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12">
        <article>
          <div className="mb-4 flex flex-wrap items-center gap-2">
            <span className={`px-2 py-1 text-xs font-semibold ${UPDATE_CATEGORY_STYLES[update.category]}`}>{update.category}</span>
            <Link href={`/${country}/${update.examSlug}`} className="text-xs font-semibold text-ink-700 hover:underline">{update.examName}</Link>
            <span className="text-xs text-ink-400">{update.status}</span>
          </div>
          <h1 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-ink-900 md:text-5xl">{update.headline}</h1>
          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-ink-500">
            <span>Published <time dateTime={update.publishedAt}>{formatUpdateDate(update.publishedAt)}</time></span>
            <span>Source checked <time dateTime={update.sourceCheckedOn}>{formatUpdateDate(update.sourceCheckedOn)}</time></span>
          </div>

          <p className="mt-8 border-l-4 border-ink-900 bg-ink-50 px-5 py-4 text-base leading-7 text-ink-700 md:text-lg">{update.summary}</p>

          {update.importantDates && update.importantDates.length > 0 && (
            <section className="mt-10" aria-labelledby="important-dates-heading">
              <h2 id="important-dates-heading" className="mb-4 text-xl font-bold text-ink-900">Important dates</h2>
              <div className="border border-ink-200 bg-white">
                {update.importantDates.map((item) => (
                  <div key={item.label} className="grid gap-1 border-b border-ink-200 px-4 py-4 last:border-b-0 sm:grid-cols-[220px_1fr]">
                    <span className="text-sm font-semibold text-ink-900">{item.label}</span>
                    <time dateTime={item.date} className="text-sm text-ink-600">{formatUpdateDate(item.date)}</time>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className="mt-10" aria-labelledby="student-actions-heading">
            <h2 id="student-actions-heading" className="mb-4 text-xl font-bold text-ink-900">What students should do</h2>
            <ol className="border border-ink-200 bg-white">
              {update.actions.map((action, index) => (
                <li key={action} className="grid grid-cols-[36px_1fr] gap-3 border-b border-ink-200 px-4 py-4 text-sm leading-6 text-ink-600 last:border-b-0">
                  <span className="flex h-7 w-7 items-center justify-center bg-ink-900 text-xs font-bold text-white" aria-hidden="true">{index + 1}</span>
                  <span>{action}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-10 bg-ink-900 p-6 text-white md:p-8" aria-labelledby="prepare-heading">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-300">Turn the update into action</p>
            <h2 id="prepare-heading" className="text-xl font-bold md:text-2xl">Prepare for {update.examName}</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-300">
              Review the exam structure and use a timed practice test instead of stopping at the announcement.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={`/${country}/${update.examSlug}/${hasMockTests ? 'mock-test' : ''}`} className="bg-white px-4 py-3 text-sm font-semibold text-ink-900 transition hover:bg-ink-100">
                {hasMockTests ? `Take ${update.examName} mock test` : `Explore ${update.examName}`}
              </Link>
              <Link href={`/${country}/${update.examSlug}/exam-pattern`} className="border border-ink-600 px-4 py-3 text-sm font-semibold text-white transition hover:border-white">
                Review exam pattern
              </Link>
            </div>
          </section>
        </article>

        <aside className="space-y-5 lg:pt-10" aria-label="Update verification and related links">
          <div className="border border-ink-200 bg-ink-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Official source</p>
            <div className="mt-3 text-sm font-bold text-ink-900">{update.sourceName}</div>
            {update.sourceReference && <p className="mt-2 text-xs leading-5 text-ink-500">{update.sourceReference}</p>}
            <a href={update.sourceUrl} target="_blank" rel="noopener noreferrer" className="mt-4 flex min-h-11 items-center justify-between bg-ink-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-ink-700">
              View official notice <span aria-hidden="true">↗</span>
            </a>
            <p className="mt-3 text-[11px] leading-5 text-ink-500">Always complete applications, downloads and objections on the official authority website.</p>
          </div>

          <div className="border border-ink-200 bg-white p-5">
            <h2 className="text-sm font-bold text-ink-900">More {update.examName} resources</h2>
            <div className="mt-3 divide-y divide-ink-200 border-y border-ink-200">
              <Link href={`/${country}/${update.examSlug}`} className="flex justify-between gap-3 py-3 text-sm font-medium text-ink-700 hover:text-ink-900">Exam overview <span aria-hidden="true">→</span></Link>
              <Link href={`/${country}/${update.examSlug}/mock-test`} className="flex justify-between gap-3 py-3 text-sm font-medium text-ink-700 hover:text-ink-900">Mock tests <span aria-hidden="true">→</span></Link>
              <Link href={`/${country}/${update.examSlug}/exam-pattern`} className="flex justify-between gap-3 py-3 text-sm font-medium text-ink-700 hover:text-ink-900">Exam pattern <span aria-hidden="true">→</span></Link>
            </div>
          </div>
        </aside>
      </div>

      {related.length > 0 && (
        <section className="mt-14 border-t border-ink-200 pt-8" aria-labelledby="related-updates-heading">
          <div className="mb-5 flex items-end justify-between gap-4">
            <h2 id="related-updates-heading" className="text-xl font-bold text-ink-900">Related {update.examName} updates</h2>
            <Link href={`/${country}/exam-updates?exam=${update.examSlug}`} className="text-sm font-semibold text-ink-900 hover:underline">View all</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/${country}/exam-updates/${item.slug}`} className="border border-ink-200 bg-white p-4 transition hover:border-ink-900">
                <span className={`px-2 py-1 text-[11px] font-semibold ${UPDATE_CATEGORY_STYLES[item.category]}`}>{item.category}</span>
                <div className="mt-3 text-sm font-bold leading-5 text-ink-900">{item.headline}</div>
                <time dateTime={item.publishedAt} className="mt-3 block text-xs text-ink-500">{formatUpdateDate(item.publishedAt)}</time>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
