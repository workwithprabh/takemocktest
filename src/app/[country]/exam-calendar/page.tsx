import Link from 'next/link';
import { notFound } from 'next/navigation';
import ExamCalendar from '@/components/ExamCalendar';
import { countryPublishes } from '@/lib/exam-countries';
import { EXAM_CALENDAR_EVENTS } from '@/lib/exam-calendar';
import { COUNTRIES, EXAM_LIST, getCheckedTestCount } from '@/lib/exams';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, itemListSchema, jsonLdHtml } from '@/lib/schema';

export function generateStaticParams() {
  return COUNTRIES.filter((country) => countryPublishes(country, 'updates')).map((country) => ({ country }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return pageMetadata({
    title: 'India Exam Calendar 2026 to 2027: Official Dates',
    description: 'Track selected SSC, UPSC, banking, engineering, management and law exam dates for 2026 to 2027, with links to official sources and free mock tests.',
    path: `/${country}/exam-calendar`,
  });
}

export default async function ExamCalendarPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  if (!countryPublishes(country, 'updates')) notFound();
  const knownExamSlugs = EXAM_LIST.map((exam) => exam.slug);
  const practiceExamSlugs = EXAM_LIST.filter((exam) => getCheckedTestCount(exam) > 0).map((exam) => exam.slug);
  const examCount = new Set(EXAM_CALENDAR_EVENTS.map((event) => event.examSlug)).size;
  const latestCheck = [...EXAM_CALENDAR_EVENTS].sort((a, b) => b.sourceCheckedOn.localeCompare(a.sourceCheckedOn))[0]?.sourceCheckedOn;
  const jsonLd = [
    breadcrumbSchema([
      { name: 'Home', path: `/${country}` },
      { name: 'Exam calendar', path: `/${country}/exam-calendar` },
    ]),
    itemListSchema(EXAM_CALENDAR_EVENTS.map((event) => ({
      name: `${event.examName}: ${event.label}`,
      path: `/${country}/exam-calendar#${event.id}`,
    }))),
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />

      <header className="border-b border-ink-800 bg-ink-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-9 md:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-200">Official-source planning tool</p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight md:text-5xl">India exam calendar 2026 to 2027</h1>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-ink-200 md:text-base">
            Selected application deadlines, examination dates, admit cards and results from official examination authorities, organized in one scannable calendar.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a href="#calendar" className="inline-flex min-h-12 items-center bg-action-600 px-5 text-sm font-semibold text-white transition hover:bg-action-700">Browse dates ↓</a>
            <Link href={`/${country}/exam-updates`} className="inline-flex min-h-12 items-center border border-ink-600 px-5 text-sm font-semibold text-ink-50 transition hover:border-ink-200">Latest exam updates</Link>
            <Link href={`/${country}/upcoming-government-exams`} className="inline-flex min-h-12 items-center text-sm font-semibold text-ink-200 underline underline-offset-4 hover:text-white">Government exam dates</Link>
          </div>
          <dl className="mt-7 grid max-w-2xl grid-cols-2 border border-ink-700 sm:grid-cols-3">
            <div className="border-b border-r border-ink-700 p-3 sm:border-b-0"><dt className="text-[11px] uppercase tracking-wide text-ink-300">Listed events</dt><dd className="mt-1 text-xl font-bold">{EXAM_CALENDAR_EVENTS.length}</dd></div>
            <div className="border-b border-ink-700 p-3 sm:border-b-0 sm:border-r"><dt className="text-[11px] uppercase tracking-wide text-ink-300">Exam series</dt><dd className="mt-1 text-xl font-bold">{examCount}</dd></div>
            <div className="col-span-2 p-3 sm:col-span-1"><dt className="text-[11px] uppercase tracking-wide text-ink-300">Sources checked</dt><dd className="mt-1 text-sm font-bold">{latestCheck ? latestCheck.split('-').reverse().join('/') : 'Not available'}</dd></div>
          </dl>
        </div>
      </header>

      <div id="calendar" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-7 md:py-10">
        <div className="mb-6 grid gap-3 md:grid-cols-3">
          {[
            ['Official links', 'Every event links directly to the examination authority that published it.'],
            ['Tentative stays tentative', 'Annual-calendar dates remain clearly labelled until a later notice confirms them.'],
            ['No guessed dates', 'If an authority has not announced a date, it is not added to this calendar.'],
          ].map(([title, copy]) => (
            <div key={title} className="border-l-2 border-action-600 bg-action-50 px-4 py-3">
              <h2 className="text-sm font-bold text-ink-900">{title}</h2>
              <p className="mt-1 text-xs leading-5 text-ink-700">{copy}</p>
            </div>
          ))}
        </div>

        <ExamCalendar events={EXAM_CALENDAR_EVENTS} country={country} knownExamSlugs={knownExamSlugs} practiceExamSlugs={practiceExamSlugs} asOf={Date.now()} />

        <section aria-labelledby="calendar-method-heading" className="mt-10 border border-ink-200 bg-ink-50 p-5 md:p-6">
          <h2 id="calendar-method-heading" className="text-lg font-bold text-ink-900">How this calendar is maintained</h2>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-ink-700">
            TakeMockTest checks commission, institute and examination-authority websites manually. Dates from tentative calendars are labelled as tentative, and a later exam-specific notice takes precedence. Always recheck the official source before applying, travelling or downloading an admit card.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
            <Link href={`/${country}/exam-updates`} className="text-action-700 underline underline-offset-4">Read sourced exam updates</Link>
            <Link href={`/${country}/contact`} className="text-action-700 underline underline-offset-4">Report an outdated date</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
