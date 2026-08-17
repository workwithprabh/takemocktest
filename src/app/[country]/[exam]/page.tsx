import Link from 'next/link';
import { notFound } from 'next/navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import LiveExamStatus from '@/components/LiveExamStatus';
import { getExamCycle, type CycleState } from '@/lib/exam-cycles';
import { getExamPatternFaqs, getExamFactFaqs } from '@/lib/exam-faqs';
import { EXAM_LIST, getCheckedTestCount, getExam, getExamOverviewCopy } from '@/lib/exams';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema';
import { UPDATE_CATEGORY_STYLES, formatUpdateDate, getUpdatesForExam, type UpdateCategory } from '@/lib/updates';

const CYCLE_STATE_STYLES: Record<CycleState, string> = {
  Completed: 'bg-live-50 text-live-800',
  Current: 'bg-live-700 text-white',
  Upcoming: 'border border-attention-100 bg-attention-50 text-attention-800',
  'Not announced': 'bg-ink-50 text-ink-500',
};

const DATE_STATUS_STYLES: Record<string, string> = {
  Published: 'bg-live-50 text-live-800',
  Completed: 'bg-live-50 text-live-800',
  Upcoming: 'bg-attention-50 text-attention-800',
  Closed: 'bg-ink-100 text-ink-700',
};

const DASHBOARD_UPDATE_STYLES: Partial<Record<UpdateCategory, string>> = {
  Schedule: 'bg-attention-50 text-attention-800',
  Application: 'bg-action-50 text-action-800',
  Result: 'bg-live-50 text-live-800',
};

type DashboardIconName = 'calendar' | 'test' | 'updates' | 'results' | 'resources';

function DashboardIcon({ name, tone = 'action' }: { name: DashboardIconName; tone?: 'action' | 'live' | 'attention' }) {
  const tones = {
    action: 'bg-action-100 text-action-700',
    live: 'bg-live-100 text-live-700',
    attention: 'bg-attention-100 text-attention-800',
  };

  return (
    <span className={`flex h-9 w-9 shrink-0 items-center justify-center ${tones[tone]}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {name === 'calendar' && <><path d="M6 3v3M18 3v3M4 8h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" /><path d="m9 14 2 2 4-5" /></>}
        {name === 'test' && <><path d="M7 3h10v4H7zM5 5H4v16h16V5h-1" /><path d="m8 13 2 2 5-5M8 18h8" /></>}
        {name === 'updates' && <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>}
        {name === 'results' && <><path d="M4 20V10h4v10M10 20V4h4v16M16 20v-7h4v7M3 20h18" /></>}
        {name === 'resources' && <><path d="M4 4h6a3 3 0 0 1 3 3v13a3 3 0 0 0-3-3H4z" /><path d="M20 4h-4a3 3 0 0 0-3 3v13a3 3 0 0 1 3-3h4z" /></>}
      </svg>
    </span>
  );
}

export function generateStaticParams() {
  return EXAM_LIST.map((exam) => ({ exam: exam.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ exam: string }> }) {
  const { exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return {};
  const hasCheckedTests = getCheckedTestCount(exam) > 0;
  const hasOfficialPattern = exam.stages.some((stage) => stage.pattern.status === 'official');
  return pageMetadata({
    title: hasCheckedTests
      ? `${exam.name}: Free Mock Tests & Exam Pattern`
      : hasOfficialPattern
        ? `${exam.name}: Exam Pattern, Syllabus & Eligibility`
        : `${exam.name}: Practice Demo & Upcoming Resources`,
    description: hasCheckedTests
      ? `Practice checked ${exam.name} mock tests and review the verified exam pattern, timing, marks, and negative marking.`
      : hasOfficialPattern
        ? `Review the verified ${exam.name} exam pattern, syllabus, eligibility criteria, and selection process.`
        : `Try the ${exam.name} test interface demo. Verified exam resources will be published after official source checks are complete.`,
    path: `/in/${exam.slug}`,
    noIndex: !hasCheckedTests && !hasOfficialPattern,
  });
}

export default async function ExamOverviewPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();

  const checkedTestCount = getCheckedTestCount(exam);
  const hasCheckedTests = checkedTestCount > 0;
  const officialStages = exam.stages.filter((stage) => stage.pattern.status === 'official');
  const hasOfficialPattern = officialStages.length > 0;
  const currentCycle = getExamCycle(exam.slug);
  const latestExamUpdates = getUpdatesForExam(exam.slug, 3);
  const links = [
    {
      href: 'mock-test',
      label: hasCheckedTests ? `${exam.name} Mock Tests` : 'Test Interface Demo',
      desc: hasCheckedTests ? 'Checked full and sectional tests' : 'Try the interface; a checked full mock is not published yet',
    },
    ...(hasOfficialPattern
      ? [{ href: 'exam-pattern', label: 'Exam Pattern', desc: 'Marks, duration, and negative marking' }]
      : []),
    ...(['ssc-cgl', 'ibps-po'].includes(exam.slug)
      ? [
          { href: 'syllabus', label: 'Syllabus', desc: 'Official structure and clearly labelled topic coverage' },
          { href: 'eligibility', label: 'Eligibility', desc: 'Age, qualification, and citizenship rules' },
          { href: 'selection-process', label: 'Selection Process', desc: 'Every stage from the first exam to final selection' },
        ]
      : []),
    ...(exam.slug === 'ssc-cgl'
      ? [{ href: 'salary', label: 'Salary', desc: 'Official pay levels and basic-pay ranges' }]
      : []),
  ];
  const faqs = [...getExamPatternFaqs(exam), ...getExamFactFaqs(exam)];
  const jsonLd = [
    breadcrumbSchema([
      { name: 'Home', path: `/${country}` },
      { name: exam.name, path: `/${country}/${exam.slug}` },
    ]),
    ...(faqs.length > 0 ? [faqPageSchema(faqs.map((f) => ({ q: f.q, a: f.a })))] : []),
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header className={`border-b border-ink-200 ${currentCycle ? 'bg-gradient-to-br from-action-50 via-ink-50 to-live-50' : 'bg-ink-50'}`}>
        <div className="mx-auto max-w-6xl px-5 py-7 md:py-10">
          <Breadcrumbs items={[
            { label: 'Home', href: `/${country}` },
            { label: 'Exams', href: `/${country}/exams` },
            { label: exam.name },
          ]} />
          <div className={`grid gap-7 ${currentCycle ? 'lg:grid-cols-[minmax(0,1fr)_360px] lg:items-stretch' : ''}`}>
            <div className="flex flex-col justify-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">{exam.category}</p>
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-ink-900 md:text-5xl">{exam.name}</h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-500 md:text-base">{exam.fullName}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/${country}/${exam.slug}/mock-test`} className={`inline-flex min-h-11 items-center gap-2 px-5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 ${currentCycle ? 'bg-action-700 hover:bg-action-800 focus-visible:outline-action-700' : 'bg-ink-900 hover:bg-ink-700 focus-visible:outline-ink-900'}`}>
                  <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="m6 4 10 6-10 6V4Z" /></svg>
                  {hasCheckedTests ? 'Start a mock test' : 'Try the test interface'}
                </Link>
                {hasOfficialPattern && (
                  <Link href={`/${country}/${exam.slug}/exam-pattern`} className={`inline-flex min-h-11 items-center gap-2 border bg-white px-5 text-sm font-semibold transition hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 ${currentCycle ? 'border-action-600 text-action-800 hover:bg-action-50 focus-visible:outline-action-700' : 'border-ink-200 text-ink-900 hover:border-ink-900 focus-visible:outline-ink-900'}`}>
                    Review exam pattern <span aria-hidden="true">→</span>
                  </Link>
                )}
              </div>
            </div>

            {currentCycle && (
              <section className="border border-live-100 border-t-4 border-t-live-700 bg-white p-5 shadow-lg shadow-live-800/10 md:p-6" aria-labelledby="current-status-heading">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-live-700">Current cycle</p>
                    <p className="mt-1 text-sm font-bold text-ink-900">{currentCycle.label}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 bg-live-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-live-800">
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m5 10 3 3 7-7" /></svg>
                    Officially verified
                  </span>
                </div>
                <div className="mt-5">
                  <LiveExamStatus
                    eventLabel={currentCycle.nextEvent.label}
                    startsAt={currentCycle.nextEvent.startsAt}
                    endsAt={currentCycle.nextEvent.endsAt}
                    fallbackStatus={currentCycle.status}
                  />
                </div>
                <h2 id="current-status-heading" className="mt-6 text-xl font-bold text-ink-900">{currentCycle.currentStage}</h2>
                <p className="mt-2 text-sm leading-6 text-ink-600">{currentCycle.summary}</p>
                <a href={currentCycle.primaryAction.href} target="_blank" rel="noopener noreferrer" className="mt-5 flex min-h-11 items-center justify-between bg-live-700 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-live-800 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-live-700">
                  {currentCycle.primaryAction.label}<span aria-hidden="true">↗</span>
                </a>
                <p className="mt-3 text-[11px] leading-5 text-live-800">
                  Verified from {currentCycle.sourceName} on <time dateTime={currentCycle.checkedOn}>{formatUpdateDate(currentCycle.checkedOn)}</time>.
                </p>
              </section>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-8 md:py-12">
        <nav aria-label={`${exam.name} page sections`} className={`mb-10 overflow-x-auto border-y bg-white shadow-sm ${currentCycle ? 'border-action-100' : 'border-ink-200'}`}>
          <div className="flex min-w-max">
            {currentCycle && <a href="#dates" className="border-b-2 border-transparent px-4 py-3 text-sm font-semibold text-action-800 transition hover:border-action-600 hover:bg-action-50">Dates</a>}
            <a href="#mock-tests" className={`border-b-2 border-transparent px-4 py-3 text-sm font-semibold transition ${currentCycle ? 'text-action-800 hover:border-action-600 hover:bg-action-50' : 'text-ink-700 hover:border-ink-900 hover:bg-ink-50'}`}>Mock tests</a>
            {latestExamUpdates.length > 0 && <a href="#updates" className={`border-b-2 border-transparent px-4 py-3 text-sm font-semibold transition ${currentCycle ? 'text-action-800 hover:border-action-600 hover:bg-action-50' : 'text-ink-700 hover:border-ink-900 hover:bg-ink-50'}`}>Updates</a>}
            {currentCycle && <a href="#results" className="border-b-2 border-transparent px-4 py-3 text-sm font-semibold text-action-800 transition hover:border-action-600 hover:bg-action-50">Results</a>}
            <a href="#resources" className={`border-b-2 border-transparent px-4 py-3 text-sm font-semibold transition ${currentCycle ? 'text-action-800 hover:border-action-600 hover:bg-action-50' : 'text-ink-700 hover:border-ink-900 hover:bg-ink-50'}`}>Resources</a>
            {faqs.length > 0 && <a href="#faq" className={`border-b-2 border-transparent px-4 py-3 text-sm font-semibold transition ${currentCycle ? 'text-action-800 hover:border-action-600 hover:bg-action-50' : 'text-ink-700 hover:border-ink-900 hover:bg-ink-50'}`}>FAQ</a>}
          </div>
        </nav>

        <section aria-labelledby="snapshot-heading">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">At a glance</p>
              <h2 id="snapshot-heading" className="mt-1 text-xl font-bold text-ink-900">{exam.name} snapshot</h2>
            </div>
            {currentCycle && <span className="inline-flex items-center gap-1.5 bg-live-50 px-2.5 py-1.5 text-xs font-semibold text-live-800"><span className="h-1.5 w-1.5 bg-live-600" aria-hidden="true" />Source checked {formatUpdateDate(currentCycle.checkedOn)}</span>}
          </div>
          <dl className="grid border-l border-t border-ink-200 sm:grid-cols-2 lg:grid-cols-4">
            <div className={`border-b border-r border-ink-200 bg-white p-4 ${currentCycle ? 'border-t-4 border-t-action-600' : ''}`}>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">Exam cycle</dt>
              <dd className="mt-2 text-lg font-bold text-ink-900">{currentCycle?.label ?? officialStages[0]?.pattern.cycle ?? 'Official review'}</dd>
            </div>
            <div className={`border-b border-r border-ink-200 bg-white p-4 ${currentCycle ? 'border-t-4 border-t-live-600' : ''}`}>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">{currentCycle ? 'Current stage' : 'First listed test group'}</dt>
              <dd className="mt-2 text-lg font-bold text-ink-900">{currentCycle?.currentStage ?? exam.stages[0]?.name}</dd>
            </div>
            <div className={`border-b border-r border-ink-200 bg-white p-4 ${currentCycle ? 'border-t-4 border-t-attention-600' : ''}`}>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">Verified test patterns</dt>
              <dd className="mt-2 text-lg font-bold text-ink-900">{officialStages.length} of {exam.stages.length} groups</dd>
            </div>
            <div className={`border-b border-r border-ink-200 bg-white p-4 ${currentCycle ? 'border-t-4 border-t-action-600' : ''}`}>
              <dt className="text-xs font-semibold uppercase tracking-wide text-ink-500">Practice available</dt>
              <dd className="mt-2 text-lg font-bold text-ink-900">{checkedTestCount} checked tests</dd>
            </div>
          </dl>
        </section>

        {currentCycle && (
          <>
            <section className="mt-12 border border-live-100 bg-live-50/40 p-5 md:p-6" aria-labelledby="lifecycle-heading">
              <div className="mb-4 flex items-start gap-3">
                <DashboardIcon name="updates" tone="live" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-live-700">Current progress</p>
                  <h2 id="lifecycle-heading" className="mt-1 text-xl font-bold text-ink-900">Exam lifecycle</h2>
                </div>
              </div>
              <ol className="grid border-l border-t border-ink-200 sm:grid-cols-3 lg:grid-cols-6">
                {currentCycle.lifecycle.map((item, index) => (
                  <li key={item.label} className={`border-b border-r border-ink-200 p-4 ${item.state === 'Current' ? 'border-t-4 border-t-live-700 bg-live-50' : 'bg-white'}`}>
                    <span className="text-[11px] font-semibold text-ink-400">{String(index + 1).padStart(2, '0')}</span>
                    <div className="mt-3 text-sm font-bold text-ink-900">{item.label}</div>
                    <span className={`mt-3 inline-block px-2 py-1 text-[10px] font-semibold ${CYCLE_STATE_STYLES[item.state]}`}>{item.state}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section id="dates" className="mt-12 scroll-mt-24" aria-labelledby="dates-heading">
              <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                <div className="flex items-start gap-3">
                  <DashboardIcon name="calendar" tone="attention" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-attention-700">Official schedule</p>
                    <h2 id="dates-heading" className="mt-1 text-xl font-bold text-ink-900">Important dates</h2>
                  </div>
                </div>
                <a href={currentCycle.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-action-800 hover:underline">View official examination page ↗</a>
              </div>
              <div className="border border-ink-200 bg-white">
                {currentCycle.importantDates.map((item) => (
                  <div key={item.label} className={`grid gap-3 border-b border-ink-200 p-4 last:border-b-0 sm:grid-cols-[minmax(0,1fr)_minmax(190px,0.7fr)_110px] sm:items-center ${item.status === 'Upcoming' ? 'border-l-4 border-l-attention-600 bg-attention-50' : ''}`}>
                    <div className="text-sm font-semibold text-ink-900">{item.label}</div>
                    {item.dateTime ? <time dateTime={item.dateTime} className="text-sm text-ink-600">{item.displayDate}</time> : <span className="text-sm text-ink-500">{item.displayDate}</span>}
                    <div className="flex items-center justify-between gap-3 sm:justify-end">
                      <span className={`px-2 py-1 text-[10px] font-semibold ${DATE_STATUS_STYLES[item.status] ?? 'bg-ink-100 text-ink-700'}`}>{item.status}</span>
                      <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-action-700 hover:text-action-800" aria-label={`View official source for ${item.label}`}>↗</a>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        <section id="mock-tests" className="mt-12 scroll-mt-24" aria-labelledby="mock-tests-heading">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div className="flex items-start gap-3">
              <DashboardIcon name="test" tone="action" />
              <div>
                <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${currentCycle ? 'text-action-700' : 'text-ink-500'}`}>Practice by test group</p>
                <h2 id="mock-tests-heading" className="mt-1 text-xl font-bold text-ink-900">{exam.name} mock tests</h2>
                {currentCycle?.practiceScope && <p className="mt-2 max-w-2xl text-sm text-ink-500">{currentCycle.practiceScope}</p>}
              </div>
            </div>
            <Link href={`/${country}/${exam.slug}/mock-test`} className={`text-sm font-semibold hover:underline ${currentCycle ? 'text-action-800' : 'text-ink-900'}`}>View all tests →</Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {exam.stages.map((stage) => {
              const stageCheckedTests = stage.tests.filter((test) => test.status === 'checked').length;
              return (
                <article key={stage.id} className={`border bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-lg ${currentCycle ? 'border-action-100 hover:border-action-600 hover:shadow-action-800/10' : 'border-ink-200 hover:border-ink-900 hover:shadow-ink-900/10'}`}>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-ink-900">{stage.name}</h3>
                      <p className="mt-1 text-xs text-ink-500">{stageCheckedTests} checked test{stageCheckedTests === 1 ? '' : 's'} available</p>
                    </div>
                    <span className={`px-2 py-1 text-[10px] font-semibold ${stage.pattern.status === 'official' && currentCycle ? 'bg-live-50 text-live-800' : 'bg-ink-100 text-ink-700'}`}>{stage.pattern.status === 'official' ? 'Verified pattern' : 'Review pending'}</span>
                  </div>
                  {stage.pattern.status === 'official' && (
                    <dl className="mt-5 grid grid-cols-3 border-l border-t border-ink-200">
                      <div className="border-b border-r border-ink-200 p-3"><dt className="text-[10px] uppercase text-ink-500">Questions</dt><dd className="mt-1 text-sm font-bold text-ink-900">{stage.pattern.totalQuestions}</dd></div>
                      <div className="border-b border-r border-ink-200 p-3"><dt className="text-[10px] uppercase text-ink-500">Marks</dt><dd className="mt-1 text-sm font-bold text-ink-900">{stage.pattern.totalMarks}</dd></div>
                      <div className="border-b border-r border-ink-200 p-3"><dt className="text-[10px] uppercase text-ink-500">Minutes</dt><dd className="mt-1 text-sm font-bold text-ink-900">{stage.pattern.duration}</dd></div>
                    </dl>
                  )}
                  <Link href={`/${country}/${exam.slug}/mock-test`} className={`mt-5 flex min-h-11 items-center justify-between border px-4 text-sm font-semibold transition ${currentCycle ? 'border-action-600 bg-action-50 text-action-800 hover:bg-action-100' : 'border-ink-200 text-ink-900 hover:border-ink-900'}`}>
                    {stageCheckedTests > 0 ? `View ${stage.name} tests` : 'Review stage details'}<span aria-hidden="true">→</span>
                  </Link>
                </article>
              );
            })}
          </div>
        </section>

        {latestExamUpdates.length > 0 && (
          <section id="updates" className={`mt-12 scroll-mt-24 ${currentCycle ? 'border border-action-100 bg-action-50/50 p-5 md:p-6' : ''}`} aria-labelledby="exam-updates-heading">
            <div className="mb-4 flex items-end justify-between gap-4">
              <div className="flex items-start gap-3">
                <DashboardIcon name="updates" tone="action" />
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${currentCycle ? 'text-action-700' : 'text-ink-500'}`}>Official-source summaries</p>
                  <h2 id="exam-updates-heading" className="mt-1 text-xl font-bold text-ink-900">Latest {exam.name} updates</h2>
                </div>
              </div>
              <Link href={`/${country}/exam-updates?exam=${exam.slug}`} className={`text-sm font-semibold hover:underline ${currentCycle ? 'text-action-800' : 'text-ink-900'}`}>View all</Link>
            </div>
            <div className="divide-y divide-ink-200 border border-ink-200 bg-white">
              {latestExamUpdates.map((update) => (
                <Link key={update.slug} href={`/${country}/exam-updates/${update.slug}`} className={`grid gap-2 px-4 py-4 transition sm:grid-cols-[110px_1fr_auto] sm:items-center ${currentCycle ? 'hover:bg-action-50' : 'hover:bg-ink-50'}`}>
                  <time dateTime={update.publishedAt} className="text-xs font-semibold text-ink-500">{formatUpdateDate(update.publishedAt)}</time>
                  <span>
                    <span className={`mr-2 px-2 py-1 text-[10px] font-semibold ${currentCycle ? DASHBOARD_UPDATE_STYLES[update.category] ?? UPDATE_CATEGORY_STYLES[update.category] : UPDATE_CATEGORY_STYLES[update.category]}`}>{update.category}</span>
                    <span className="text-sm font-semibold text-ink-900">{update.headline}</span>
                  </span>
                  <span className={currentCycle ? 'text-action-700' : 'text-ink-500'} aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        {currentCycle && (
          <section id="results" className="mt-12 scroll-mt-24" aria-labelledby="results-heading">
            <div className="mb-4 flex items-start gap-3">
              <DashboardIcon name="results" tone="live" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-live-700">After the exam</p>
                <h2 id="results-heading" className="mt-1 text-xl font-bold text-ink-900">Results and next stages</h2>
              </div>
            </div>
            <div className="grid border-l border-t border-ink-200 md:grid-cols-2">
              {currentCycle.outcomes.map((outcome) => (
                <div key={outcome.label} className={`border-b border-r border-ink-200 bg-white p-5 ${outcome.status === 'Published' ? 'border-t-4 border-t-live-600' : ''}`}>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-bold text-ink-900">{outcome.label}</h3>
                    <span className={`px-2 py-1 text-[10px] font-semibold ${outcome.status === 'Published' ? 'bg-live-50 text-live-800' : 'bg-ink-100 text-ink-700'}`}>{outcome.status}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-ink-500">{outcome.detail}</p>
                  {outcome.href && <a href={outcome.href} target="_blank" rel="noopener noreferrer" className="mt-3 inline-block text-sm font-semibold text-live-800 hover:underline">View official result ↗</a>}
                </div>
              ))}
            </div>
          </section>
        )}

        <section id="resources" className="mt-12 scroll-mt-24" aria-labelledby="resources-heading">
          <div className="mb-4 flex items-start gap-3">
            <DashboardIcon name="resources" tone="action" />
            <div>
              <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${currentCycle ? 'text-action-700' : 'text-ink-500'}`}>Study and plan</p>
              <h2 id="resources-heading" className="mt-1 text-xl font-bold text-ink-900">{exam.name} resources</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link) => (
              <Link key={link.href} href={`/${country}/${exam.slug}/${link.href}`} className={`group border bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-md ${currentCycle ? 'border-action-100 hover:border-action-600 hover:bg-action-50 hover:shadow-action-800/10' : 'border-ink-200 hover:border-ink-900 hover:bg-ink-50 hover:shadow-ink-900/10'}`}>
                <h3 className="text-sm font-semibold text-ink-900">{link.label}</h3>
                <p className="mt-1 text-xs leading-5 text-ink-500">{link.desc}</p>
                <span className={`mt-4 inline-block text-sm font-semibold transition group-hover:translate-x-1 ${currentCycle ? 'text-action-700' : 'text-ink-700'}`} aria-hidden="true">→</span>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 border border-ink-200 bg-ink-50 p-5 md:p-6" aria-labelledby="overview-heading">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">Verified overview</p>
          <h2 id="overview-heading" className="mt-1 text-xl font-bold text-ink-900">About {exam.name}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-ink-600">
            {currentCycle?.overview ?? getExamOverviewCopy(exam) ?? (hasCheckedTests || hasOfficialPattern ? 'Use the verified resources above.' : 'A practice interface demo is available while official resource checks continue.')}
          </p>
        </section>

        {faqs.length > 0 && (
          <section id="faq" className="mt-12 max-w-3xl scroll-mt-24" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="mb-4 text-xl font-bold text-ink-900">Frequently asked questions</h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <details key={faq.q} className="border border-ink-200 bg-white p-4">
                  <summary className="cursor-pointer text-sm font-medium text-ink-900">{faq.q}</summary>
                  <p className="mt-2 text-sm leading-6 text-ink-500">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
