import Image from 'next/image';
import Link from 'next/link';
import ExamCard from '@/components/ExamCard';
import ExamCategoryCard from '@/components/ExamCategoryCard';
import OMRBubble from '@/components/OMRBubble';
import { EXAM_LIST, COUNTRIES, getCheckedTestCount } from '@/lib/exams';
import { CATALOG_EXAM_COUNT, FEATURED_EXAM_CATEGORIES } from '@/lib/exam-catalog';
import { organizationSchema, websiteSchema, faqPageSchema } from '@/lib/schema';
import { UPDATE_CATEGORY_STYLES, getLatestUpdates } from '@/lib/updates';
import { getQuestionsForTest } from '@/lib/questions';
import { pageMetadata } from '@/lib/metadata';

const previewQuestion = getQuestionsForTest('ssc-cgl', 'tier-1-quantitative-aptitude-sectional-1')[0];
const previewOptionIndices = previewQuestion.correctIndex === 0 ? [0, 1] : [0, previewQuestion.correctIndex];
const checkedTestCount = EXAM_LIST.reduce((total, exam) => total + getCheckedTestCount(exam), 0);
const checkedExamCount = EXAM_LIST.filter((exam) => getCheckedTestCount(exam) > 0).length;

// TODO: Add a student counter only after verified analytics data is available.
const TRUST_METRICS = [
  { value: checkedTestCount, label: `Syllabus-checked test${checkedTestCount === 1 ? '' : 's'}`, detail: `Across ${checkedExamCount} live exam${checkedExamCount === 1 ? '' : 's'}` },
  { value: checkedExamCount, label: 'Checked exam series', detail: 'Every listed exam is fully verified' },
  { value: CATALOG_EXAM_COUNT, label: 'Exam pathways listed', detail: 'Organized by student goal' },
  { value: '₹0', label: 'Cost to start', detail: 'No account required' },
];

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
  'Checked tests use original questions mapped to the latest official syllabus, with a source link and review date.',
  'Every listed test matches its official exam pattern for section split, question count, and marking — no filler content.',
  'A test is counted as checked only after its question count, scoring, explanations, and source record pass validation.',
];

const FAQS = [
  { q: 'Is this really free?', a: 'Yes — every available test is free to attempt.' },
  { q: 'Do I need to sign up?', a: 'No. You can start any test immediately. Your results are saved on this device so you can track progress over time.' },
  { q: 'How is scoring calculated?', a: 'Every test states its marks and negative-marking deduction before you begin, matching the official pattern it is checked against.' },
  { q: 'Will more exams be added?', a: 'Yes — we\'re actively expanding to more exams and categories beyond SSC, Banking, and Railways.' },
];

export default async function HomePage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const latestUpdates = getLatestUpdates(5);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema(), websiteSchema(), faqPageSchema(FAQS)]) }}
      />

      <div className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 md:grid-cols-[0.92fr_1.08fr] md:items-center md:py-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 bg-ink-100 px-3 py-2 text-xs font-semibold text-ink-700">
              <span className="h-2 w-2 bg-ink-900" aria-hidden="true" />
              Practice without signing up
            </div>
            <h1 className="mb-5 max-w-xl font-sans text-4xl font-bold leading-[1.08] tracking-[-0.035em] text-ink-900 md:text-6xl">
              Your exam prep starts with the right mock test
            </h1>
            <p className="mb-7 max-w-xl text-base leading-7 text-ink-500 md:text-lg">
              Find the right exam pathway, attempt available mock tests, and understand every section with instant results.
            </p>
            <a
              href="#exams"
              className="inline-flex min-h-12 items-center gap-3 bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-900"
            >
              Choose your exam <span aria-hidden="true">→</span>
            </a>
            <p className="mt-4 text-xs text-ink-500">Free to attempt · No login required</p>
          </div>

          <div className="relative">
            <div className="relative aspect-[16/10] overflow-hidden bg-ink-100 md:aspect-[4/3]">
              <Image
                src="/images/students-preparing-for-exams.webp"
                alt="Two students preparing for a competitive exam together"
                fill
                priority
                sizes="(min-width: 768px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-900/45 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-4 left-4 bg-white px-3 py-2 text-xs font-semibold text-ink-900 shadow-lg">
                Built for focused practice
              </div>
            </div>

            <div className="relative -mt-8 ml-5 hidden border border-ink-200 bg-white p-4 shadow-xl shadow-ink-900/10 sm:ml-auto sm:mr-5 sm:block sm:max-w-sm md:absolute md:-bottom-10 md:right-5 md:ml-0 md:mr-0 md:w-[84%]">
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-ink-500">
                  Live question preview
                </span>
                <span className="bg-ink-100 px-2 py-1 text-[10px] font-semibold text-ink-700">
                  {previewQuestion.section}
                </span>
              </div>
              <div className="mb-3 text-sm font-medium text-ink-900">{previewQuestion.question}</div>
              {previewOptionIndices.map((optionIndex) => (
                <OMRBubble
                  key={optionIndex}
                  letter={String.fromCharCode(65 + optionIndex)}
                  label={previewQuestion.options[optionIndex]}
                  selected={optionIndex === previewQuestion.correctIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 pb-12 pt-12 md:pb-20 md:pt-24">
        <section aria-labelledby="exams" className="mb-14 scroll-mt-20 md:mb-20">
          <div className="mb-7 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">Available now</p>
              <h2 id="exams" className="font-sans text-2xl font-bold text-ink-900 md:text-3xl">
                Start a syllabus-checked mock test
              </h2>
            </div>
            <p className="max-w-sm text-sm text-ink-500">Review status is shown before every attempt, so students know exactly what they are taking.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
            {EXAM_LIST.map((exam) => (
              <ExamCard key={exam.slug} exam={exam} country={country} />
            ))}
          </div>
        </section>

        <section aria-labelledby="find-an-exam" className="mb-14 bg-ink-900 px-5 py-7 text-white md:mb-20 md:px-8">
          <div className="grid gap-5 md:grid-cols-[0.75fr_1.25fr] md:items-end">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-300">180-exam directory</p>
              <h2 id="find-an-exam" className="text-2xl font-bold">Find your exam by name</h2>
            </div>
            <form action={`/${country}/exams`} className="flex flex-col gap-2 sm:flex-row">
              <label className="sr-only" htmlFor="homepage-exam-search">Exam name</label>
              <input
                id="homepage-exam-search"
                name="q"
                type="search"
                placeholder="Search SSC, JEE, NEET, CAT..."
                className="min-h-12 flex-1 border border-ink-600 bg-white px-4 text-sm text-ink-900 outline-none placeholder:text-ink-500 focus:border-white focus:ring-1 focus:ring-white"
              />
              <button type="submit" className="min-h-12 bg-white px-5 text-sm font-semibold text-ink-900 hover:bg-ink-100">
                Search exams
              </button>
            </form>
          </div>
        </section>

        <section aria-label="What is available today" className="mb-14 border border-ink-200 bg-white md:mb-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {TRUST_METRICS.map((metric) => (
              <div key={metric.label} className="border-b border-ink-200 px-5 py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 md:px-7 md:py-6">
                <div className="mb-1 text-3xl font-bold tracking-tight text-ink-900">{metric.value}</div>
                <div className="text-sm font-semibold text-ink-900">{metric.label}</div>
                <div className="mt-1 text-xs text-ink-500">{metric.detail}</div>
              </div>
            ))}
          </div>
          <p className="border-t border-ink-200 bg-ink-50 px-5 py-2.5 text-xs text-ink-500 md:px-7">
            Checked-test counts update only after a test passes the validation gate.
          </p>
        </section>

        <section id="exam-categories" className="mb-20 scroll-mt-20">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">Explore by goal</p>
              <h2 className="font-sans text-2xl font-bold text-ink-900 md:text-3xl">What are you preparing for?</h2>
            </div>
            <Link href={`/${country}/exams`} className="inline-flex items-center gap-2 text-sm font-semibold text-ink-900 hover:underline">
              Browse all {CATALOG_EXAM_COUNT} exams <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURED_EXAM_CATEGORIES.map((category) => (
              <ExamCategoryCard key={category.slug} category={category} country={country} />
            ))}
          </div>
        </section>

        {latestUpdates.length > 0 && (
          <>
            <div className="mb-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">Stay informed</p>
              <h2 className="font-sans text-2xl font-bold text-ink-900">Latest exam updates</h2>
            </div>
            <div className="mb-20 divide-y divide-ink-200 border border-ink-200 bg-white">
              {latestUpdates.map((update) => (
                <a
                  key={update.id}
                  href={update.link}
                  className="group flex flex-col gap-2 px-4 py-4 transition hover:bg-ink-50 sm:flex-row sm:items-center sm:gap-4 sm:px-5"
                >
                  <span className={`w-fit flex-shrink-0 px-2 py-1 text-xs font-semibold ${UPDATE_CATEGORY_STYLES[update.category]}`}>
                    {update.category}
                  </span>
                  <span className="flex-1 text-sm font-medium text-ink-900 group-hover:underline">{update.headline}</span>
                  <span className="flex-shrink-0 text-xs text-ink-500">{update.date}</span>
                  <span className="hidden text-ink-500 sm:block" aria-hidden="true">→</span>
                </a>
              ))}
            </div>
          </>
        )}

        <div className="mb-20 grid gap-7 bg-ink-900 px-6 py-8 text-white md:grid-cols-[0.8fr_1.2fr] md:gap-12 md:px-10 md:py-10">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-300">Trust and transparency</p>
            <h2 className="font-sans text-2xl font-bold">How TakeMockTest questions are made</h2>
          </div>
          <ul className="space-y-4">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex gap-3 text-sm leading-6 text-ink-200">
                <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center border border-ink-400 text-[11px] font-bold text-white" aria-hidden="true">
                  ✓
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">Need to know</p>
          <h2 className="font-sans text-2xl font-bold text-ink-900">Frequently asked questions</h2>
        </div>
        <div className="border border-ink-200 bg-white">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group border-b border-ink-200 p-5 last:border-b-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink-900">
                {faq.q}
                <span className="text-xl font-normal text-ink-500 transition group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-ink-500">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
