import Image from 'next/image';
import Link from 'next/link';
import ExamCard from '@/components/ExamCard';
import ExamCategoryCard from '@/components/ExamCategoryCard';
import { EXAM_LIST, COUNTRIES, getCheckedTestCount } from '@/lib/exams';
import { EXAM_CATEGORIES, FEATURED_EXAM_CATEGORIES } from '@/lib/exam-catalog';
import { organizationSchema, websiteSchema, faqPageSchema, jsonLdHtml } from '@/lib/schema';
import { UPDATE_CATEGORY_STYLES, formatUpdateDate, getLatestUpdates } from '@/lib/updates';
import { pageMetadata } from '@/lib/metadata';

const examSuggestions = Array.from(new Map(
  EXAM_CATEGORIES.flatMap((category) => category.groups.flatMap((group) => group.exams)).map((exam) => [exam.name, exam]),
).values());
const featuredExams = EXAM_LIST.filter((exam) => getCheckedTestCount(exam) > 0).slice(0, 6);

// TODO: Add student feedback only when real, permissioned feedback is available.
export function generateStaticParams() {
  return COUNTRIES.map((country) => ({ country }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return pageMetadata({
    title: 'Free Mock Tests for Competitive Exams',
    description: 'Practice checked mock tests for SSC, Banking and Railways exams, or browse competitive exams in India by student goal.',
    path: `/${country}`,
  });
}

const TRUST_POINTS = [
  'Check each test’s source references and review status before starting.',
  'Review the scoring rules before you start, and answer explanations after you finish.',
];

const FAQS = [
  { q: 'Is this really free?', a: 'Yes, every available test is free to attempt.' },
  { q: 'Do I need to sign up?', a: 'No. You can start any test immediately. Your results are saved on this device so you can track progress over time.' },
  { q: 'How is scoring calculated?', a: 'Every test states its marks and negative-marking deduction before you begin, matching the official pattern it is checked against.' },
  { q: 'Will more exams be added?', a: 'Yes, we\'re actively expanding to more exams and categories beyond SSC, Banking, and Railways.' },
];

export default async function HomePage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const latestUpdates = getLatestUpdates(5);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml([organizationSchema(), websiteSchema(), faqPageSchema(FAQS)]) }}
      />

      <section aria-labelledby="home-heading" className="border-b border-ink-200 bg-gradient-to-br from-ink-50 via-white to-action-50">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-7 md:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12 lg:py-12">
          <div>
            <h1 id="home-heading" className="max-w-xl text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-ink-900 md:text-5xl">
              Find your next mock test
            </h1>
            <p className="mt-3 max-w-lg text-base leading-6 text-ink-600">
              Choose your exam, practice at your pace, and review your answers.
            </p>
            <form action={`/${country}/exams`} role="search" aria-label="Find a mock test" className="mt-6">
              <label className="mb-2 block text-sm font-semibold text-ink-900" htmlFor="homepage-exam-search">Search your mock test</label>
              <div className="flex gap-2">
                <input
                  id="homepage-exam-search"
                  name="q"
                  type="search"
                  list="available-exam-suggestions"
                  autoComplete="off"
                  placeholder="Try SSC CGL, JEE, IELTS..."
                  className="min-h-12 min-w-0 flex-1 border border-ink-300 bg-white px-3 text-base text-ink-900 placeholder:text-ink-500 focus:border-action-700 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-action-700"
                />
                <datalist id="available-exam-suggestions">
                  {examSuggestions.map((exam) => (
                    <option key={exam.name} value={exam.name} label={exam.liveSlug ? 'Mock test available' : 'Listed — coming soon'} />
                  ))}
                </datalist>
                <button type="submit" className="min-h-12 shrink-0 bg-ink-900 px-4 text-sm font-semibold text-white transition hover:bg-ink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-900">
                  Find test
                </button>
              </div>
              <p className="mt-3 text-xs font-medium text-ink-600">Free practice · No sign-up</p>
            </form>
          </div>

          <div className="relative">
            <div className="relative aspect-[2.4/1] overflow-hidden border border-ink-200 bg-ink-100 lg:aspect-[4/3]">
              <Image
                src="/images/students-taking-online-mock-test.webp"
                alt="Two Indian students practicing a competitive-exam mock test with a laptop and OMR sheet"
                fill
                priority
                sizes="(min-width: 1152px) 490px, (min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[center_40%]"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-10 px-5 py-8 md:space-y-14 md:py-12">
        <section id="exams" aria-labelledby="popular-tests-heading" className="scroll-mt-24">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <h2 id="popular-tests-heading" className="text-xl font-bold text-ink-900 md:text-2xl">Popular mock tests</h2>
            <Link href={`/${country}/exams?availability=available`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-action-700 underline-offset-4 hover:underline">
              View all tests <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {featuredExams.map((exam) => (
              <ExamCard key={exam.slug} exam={exam} country={country} />
            ))}
          </div>
        </section>

        <section id="exam-categories" aria-labelledby="exam-categories-heading" className="scroll-mt-24">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <h2 id="exam-categories-heading" className="text-xl font-bold text-ink-900 md:text-2xl">Browse by goal</h2>
            <Link href={`/${country}/exams`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-action-700 underline-offset-4 hover:underline">
              All categories <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {FEATURED_EXAM_CATEGORIES.map((category) => (
              <ExamCategoryCard key={category.slug} category={category} country={country} compact />
            ))}
          </div>
        </section>

        {latestUpdates.length > 0 && (
          <section aria-labelledby="latest-updates-heading">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
              <h2 id="latest-updates-heading" className="text-xl font-bold text-ink-900 md:text-2xl">Latest exam updates</h2>
              <Link href={`/${country}/exam-updates`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-action-700 underline-offset-4 hover:underline">
                View all updates <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="divide-y divide-ink-200 border border-ink-200 bg-white">
              {latestUpdates.map((update, index) => (
                <Link
                  key={update.slug}
                  href={`/${country}/exam-updates/${update.slug}`}
                  className={`group items-center gap-4 p-4 transition hover:bg-action-50/40 focus-visible:relative focus-visible:outline focus-visible:outline-2 focus-visible:outline-action-700 ${index >= 3 ? 'hidden md:flex' : 'flex'}`}
                >
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className={`px-2 py-1 text-[10px] font-semibold ${UPDATE_CATEGORY_STYLES[update.category]}`}>{update.category}</span>
                      <time dateTime={update.publishedAt} className="text-xs text-ink-600">{formatUpdateDate(update.publishedAt)}</time>
                    </div>
                    <span className="block text-sm font-semibold leading-5 text-ink-900 group-hover:underline">{update.headline}</span>
                    <span className="mt-1.5 block text-xs text-ink-600">Source: {update.sourceName}</span>
                  </div>
                  <span className="shrink-0 text-lg text-action-700" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section aria-labelledby="trust-heading" className="border-l-2 border-action-600 bg-action-50 px-5 py-5 md:flex md:items-start md:gap-8 md:p-6">
          <div className="md:w-1/3 md:shrink-0">
            <h2 id="trust-heading" className="text-lg font-bold text-ink-900">Know what you’re practicing</h2>
            <Link href={`/${country}/about`} className="mt-1 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-action-700 underline underline-offset-4">
              How we make our tests <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className="list-disc space-y-2 pl-4 text-sm leading-6 text-ink-700">
            {TRUST_POINTS.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </section>

        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="mb-4 text-xl font-bold text-ink-900 md:text-2xl">Frequently asked questions</h2>
          <div className="border border-ink-200 bg-white">
            {FAQS.map((faq) => (
              <details key={faq.q} className="group border-b border-ink-200 last:border-b-0">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 p-4 text-sm font-semibold text-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-action-700">
                  {faq.q}
                  <span className="text-xl font-normal text-ink-500 transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-3xl px-4 pb-4 text-sm leading-6 text-ink-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
