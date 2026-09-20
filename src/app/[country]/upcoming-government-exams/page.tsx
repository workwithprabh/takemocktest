import Link from 'next/link';
import { notFound } from 'next/navigation';
import ExamCalendar from '@/components/ExamCalendar';
import { countryPublishes } from '@/lib/exam-countries';
import { GOVERNMENT_EXAM_EVENTS } from '@/lib/exam-calendar';
import { COUNTRIES, EXAM_LIST, getCheckedTestCount } from '@/lib/exams';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, faqPageSchema, itemListSchema, jsonLdHtml } from '@/lib/schema';

const FAQS = [
  {
    q: 'Which upcoming government exams are listed here?',
    a: 'This page currently tracks selected SSC, UPSC, defence and public-sector banking recruitment events whose dates are available from an official examination authority.',
  },
  {
    q: 'Are all dates on this page confirmed?',
    a: 'No. Each date is labelled Confirmed or Tentative. Dates taken from annual or tentative calendars remain tentative until the examination authority publishes a more specific notice.',
  },
  {
    q: 'Does this page include application deadlines?',
    a: 'Yes. It can include notifications, application deadlines, correction windows, admit cards, examination dates and results when those dates have been officially published.',
  },
  {
    q: 'Where should I confirm a date before applying?',
    a: 'Use the Official source link on the relevant event card. The recruiting body\'s latest notice always takes precedence over this planning page.',
  },
];

export function generateStaticParams() {
  return COUNTRIES.filter((country) => countryPublishes(country, 'updates')).map((country) => ({ country }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return pageMetadata({
    title: 'Upcoming Government Exams 2026 to 2027: Official Dates',
    description: 'Track selected upcoming SSC, UPSC, defence and public-sector banking exam dates for 2026 to 2027, with official-source links and free practice tests.',
    path: `/${country}/upcoming-government-exams`,
  });
}

export default async function UpcomingGovernmentExamsPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  if (!countryPublishes(country, 'updates')) notFound();

  const knownExamSlugs = EXAM_LIST.map((exam) => exam.slug);
  const practiceExamSlugs = EXAM_LIST.filter((exam) => getCheckedTestCount(exam) > 0).map((exam) => exam.slug);
  const examCount = new Set(GOVERNMENT_EXAM_EVENTS.map((event) => event.examSlug)).size;
  const sourceCount = new Set(GOVERNMENT_EXAM_EVENTS.map((event) => event.sourceName)).size;
  const latestCheck = [...GOVERNMENT_EXAM_EVENTS].sort((a, b) => b.sourceCheckedOn.localeCompare(a.sourceCheckedOn))[0]?.sourceCheckedOn;
  const jsonLd = [
    breadcrumbSchema([
      { name: 'Home', path: `/${country}` },
      { name: 'Exam calendar', path: `/${country}/exam-calendar` },
      { name: 'Upcoming government exams', path: `/${country}/upcoming-government-exams` },
    ]),
    itemListSchema(GOVERNMENT_EXAM_EVENTS.map((event) => ({
      name: `${event.examName}: ${event.label}`,
      path: `/${country}/upcoming-government-exams#${event.id}`,
    }))),
    faqPageSchema(FAQS),
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />

      <header className="border-b border-ink-800 bg-ink-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-9 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-200">Official-source recruitment planner</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight md:text-5xl">Upcoming government exams 2026 to 2027</h1>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-ink-200 md:text-base">
            Plan selected SSC, UPSC, defence and public-sector banking applications and exam dates using links from the authorities that published them.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#government-exam-dates" className="inline-flex min-h-12 items-center bg-action-600 px-5 text-sm font-semibold text-white transition hover:bg-action-700">Browse upcoming dates ↓</a>
            <Link href={`/${country}/exams/government-jobs`} className="inline-flex min-h-12 items-center border border-ink-600 px-5 text-sm font-semibold text-ink-50 transition hover:border-ink-200">Browse government mock tests</Link>
          </div>
          <dl className="mt-7 grid max-w-2xl grid-cols-2 border border-ink-700 sm:grid-cols-3">
            <div className="border-b border-r border-ink-700 p-3 sm:border-b-0"><dt className="text-[11px] uppercase tracking-wide text-ink-300">Dated events</dt><dd className="mt-1 text-xl font-bold">{GOVERNMENT_EXAM_EVENTS.length}</dd></div>
            <div className="border-b border-ink-700 p-3 sm:border-b-0 sm:border-r"><dt className="text-[11px] uppercase tracking-wide text-ink-300">Exam series</dt><dd className="mt-1 text-xl font-bold">{examCount}</dd></div>
            <div className="col-span-2 p-3 sm:col-span-1"><dt className="text-[11px] uppercase tracking-wide text-ink-300">Sources checked</dt><dd className="mt-1 text-sm font-bold">{latestCheck ? latestCheck.split('-').reverse().join('/') : 'Not available'}</dd></div>
          </dl>
        </div>
      </header>

      <div id="government-exam-dates" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-7 md:py-10">
        <section aria-labelledby="government-calendar-intro" className="mb-6 grid gap-3 md:grid-cols-3">
          <div className="border-l-2 border-action-600 bg-action-50 px-4 py-3">
            <h2 id="government-calendar-intro" className="text-sm font-bold text-ink-900">One planning view</h2>
            <p className="mt-1 text-xs leading-5 text-ink-700">Compare recruitment dates across SSC, UPSC, defence and public-sector banking exams.</p>
          </div>
          <div className="border-l-2 border-live-600 bg-live-50 px-4 py-3">
            <h2 className="text-sm font-bold text-ink-900">{sourceCount} official authorities</h2>
            <p className="mt-1 text-xs leading-5 text-ink-700">Every listed event includes a direct source link and the date on which it was checked.</p>
          </div>
          <div className="border-l-2 border-attention-600 bg-attention-50 px-4 py-3">
            <h2 className="text-sm font-bold text-ink-900">Tentative means tentative</h2>
            <p className="mt-1 text-xs leading-5 text-ink-700">Annual-calendar dates stay clearly labelled until a later notice confirms them.</p>
          </div>
        </section>

        <ExamCalendar events={GOVERNMENT_EXAM_EVENTS} country={country} knownExamSlugs={knownExamSlugs} practiceExamSlugs={practiceExamSlugs} asOf={Date.now()} calendarName="TakeMockTest upcoming government exams" downloadFileName="takemocktest-upcoming-government-exams.ics" />

        <section aria-labelledby="government-exam-faq" className="mt-10">
          <h2 id="government-exam-faq" className="mb-4 text-xl font-bold text-ink-900 md:text-2xl">Government exam calendar questions</h2>
          <div className="border border-ink-200 bg-white">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group border-b border-ink-200 last:border-b-0">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 p-4 text-sm font-semibold text-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-action-700">
                  {faq.q}<span className="text-xl font-normal text-ink-500 transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-4xl px-4 pb-4 text-sm leading-6 text-ink-700">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <aside className="mt-10 border border-ink-200 bg-ink-50 p-5 md:flex md:items-center md:justify-between md:gap-8">
          <div>
            <h2 className="text-lg font-bold text-ink-900">Need dates beyond government recruitment?</h2>
            <p className="mt-1 text-sm leading-6 text-ink-700">The complete India calendar also covers selected engineering, management and law entrance examinations.</p>
          </div>
          <Link href={`/${country}/exam-calendar`} className="mt-4 inline-flex min-h-11 shrink-0 items-center bg-ink-900 px-4 text-sm font-semibold text-white md:mt-0">View complete exam calendar →</Link>
        </aside>
      </div>
    </div>
  );
}
