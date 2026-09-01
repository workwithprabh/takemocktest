import Image from 'next/image';
import UpdateFinder from '@/components/UpdateFinder';
import { pageMetadata } from '@/lib/metadata';
import { getExam, getCheckedTestCount } from '@/lib/exams';
import { breadcrumbSchema, itemListSchema, jsonLdHtml } from '@/lib/schema';
import { UPDATES, formatUpdateDate, getLatestUpdates } from '@/lib/updates';

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return pageMetadata({
    title: 'Latest Exam Notifications, Admit Cards & Results',
    description: 'Track verified exam notifications, schedules, admit cards, answer keys, results and cutoffs with links to official sources and relevant mock tests.',
    path: `/${country}/exam-updates`,
    image: {
      url: '/images/latest-exam-updates-india.webp',
      width: 1280,
      height: 720,
      alt: 'Indian student checking an exam notification and noting an important date',
    },
  });
}

export default async function ExamUpdatesPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const updates = getLatestUpdates(UPDATES.length);
  const examCount = new Set(updates.map((update) => update.examSlug)).size;
  const latestCheck = updates.map((update) => update.sourceCheckedOn).sort().at(-1);
  const practiceExamSlugs = [...new Set(updates.map((update) => update.examSlug))].filter((slug) => {
    const exam = getExam(slug);
    return exam && getCheckedTestCount(exam) > 0;
  });
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
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-8 md:grid-cols-[1.3fr_0.7fr] md:items-center md:py-10">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-ink-200">Official-source summaries</p>
            <h1 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl">Latest exam notifications, admit cards and results</h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-ink-200 md:text-base">
              Your next deadline. Your official notice. Your next step in preparation.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              <a href="#updates-search" className="inline-flex min-h-11 items-center gap-3 bg-action-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-action-700">Find my exam update <span aria-hidden="true">↓</span></a>
              <p className="text-xs text-ink-200">{updates.length} sourced updates · {examCount} exams</p>
            </div>
          </div>
          <figure className="relative hidden aspect-video overflow-hidden border border-ink-700 bg-ink-800 md:block">
            <Image
              src="/images/latest-exam-updates-india.webp"
              alt="Indian student checking an exam notification and noting an important date"
              fill
              priority
              sizes="(min-width: 1152px) 385px, 35vw"
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 bg-live-700 px-3 py-2 text-xs font-semibold text-white">
              Official links. Clear next steps.
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-6 md:py-8">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-xs leading-5 text-ink-600">
          <p>Manually checked summaries, not a real-time feed. Each card shows its own source-check date.</p>
          {latestCheck && <p className="font-semibold text-live-800">Latest source check: <time dateTime={latestCheck}>{formatUpdateDate(latestCheck)}</time></p>}
        </div>
        <UpdateFinder updates={updates} country={country} practiceExamSlugs={practiceExamSlugs} asOf={Date.now()} />
      </div>
    </div>
  );
}
