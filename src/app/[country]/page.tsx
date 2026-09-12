import Image from 'next/image';
import { contentLocale } from '@/lib/hreflang';
import Link from 'next/link';
import ExamCard from '@/components/ExamCard';
import ExamCategoryCard from '@/components/ExamCategoryCard';
import { EXAM_LIST, COUNTRIES, getCheckedTestCount } from '@/lib/exams';
import { getExamCatalog, getFeaturedExamCatalog } from '@/lib/exam-catalog';
import { countryPublishes, getExamsForCountry, countryName } from '@/lib/exam-countries';
import { organizationSchema, websiteSchema, faqPageSchema, jsonLdHtml, SITE_NAME } from '@/lib/schema';
import { UPDATE_CATEGORY_STYLES, formatUpdateDate, getLatestUpdates } from '@/lib/updates';
import { pageMetadata } from '@/lib/metadata';
import { getCheckedQuestionEntries } from '@/lib/questions';
import { LR_LADDER, LR_SLUG, LR_TOPIC_TESTS, LR_TOTAL_QUESTIONS, LR_GRADE_LABELS } from '@/lib/logical-reasoning';
import { PRACTICE_SLUG, getPublishedTopicSlugs, getTopicPool, getTopicPools } from '@/lib/practice-topics';

// Both of these are per country now. They used to be module-level constants
// built from the whole catalogue, which was correct while India was the only
// country and wrong the moment a second one listed a different set of exams:
// the homepage was offering six Indian mock tests and six Indian categories
// under /ng, none of which exist there.
const examSuggestionsFor = (country: string) => Array.from(new Map(
  getExamCatalog(country).flatMap((category) => category.groups.flatMap((group) => group.exams)).map((exam) => [exam.name, exam]),
).values());
// The homepage is the strongest internal link this site can point at an exam,
// so which exams it points at should be a decision, not a side effect of
// catalogue order. This used to be `.slice(0, 6)` over EXAM_LIST, which meant
// the six exams that happened to be declared first collected that link equity.
// The list below is chosen: the highest-demand hubs across SSC, banking,
// railways, management, engineering, law, teaching and defence. Update it by
// cycle rather than leaving it to file order.
const PRIORITY_EXAMS = [
  'ssc-cgl', 'rrb-ntpc', 'ibps-po', 'ibps-clerk', 'sbi-po', 'ssc-chsl',
  'cat', 'gate', 'clat', 'ctet', 'nda', 'ssc-gd-constable',
] as const;
const HOMEPAGE_EXAM_COUNT = 12;

const featuredExamsFor = (country: string) => {
  const owned = new Set<string>(getExamsForCountry(country));
  const eligible = EXAM_LIST.filter((exam) => owned.has(exam.slug) && getCheckedTestCount(exam) > 0);
  const bySlug = new Map(eligible.map((exam) => [exam.slug, exam]));
  const curated = PRIORITY_EXAMS.map((slug) => bySlug.get(slug)).filter((exam) => exam !== undefined);
  // Nigeria publishes none of the Indian priority exams, so the curated list
  // has to top up from the country's own catalogue rather than render empty.
  const rest = eligible.filter((exam) => !PRIORITY_EXAMS.includes(exam.slug as (typeof PRIORITY_EXAMS)[number]));
  return [...curated, ...rest].slice(0, HOMEPAGE_EXAM_COUNT);
};

// Product scale, counted from the catalogue rather than typed into the page,
// the same way the About page derives its figures. A hardcoded "1,000+ tests"
// is a claim that rots silently; this one cannot disagree with the site.
const scaleFor = (country: string) => {
  const owned = new Set<string>(getExamsForCountry(country));
  const exams = EXAM_LIST.filter((exam) => owned.has(exam.slug) && getCheckedTestCount(exam) > 0);
  const tests = exams.reduce((sum, exam) => sum + getCheckedTestCount(exam), 0);
  const questions = getCheckedQuestionEntries().filter((entry) => owned.has(entry.examSlug)).length;
  return { exams: exams.length, tests, questions };
};
// The three deepest topic pools, as a taste of the topic-practice section.
// Derived rather than hand-picked, so it follows the corpus as banks land.
const featuredTopics = getPublishedTopicSlugs()
  .map((slug) => getTopicPool(slug)!)
  .sort((a, b) => b.questions.length - a.questions.length)
  .slice(0, 3)
  .map((pool) => ({ slug: pool.topic.slug, name: pool.topic.name, count: pool.questions.length }));
const practiceTopics = getTopicPools().size;
const practiceQuestions = [...getTopicPools().values()].reduce((sum, pool) => sum + pool.questions.length, 0);

// TODO: Add student feedback only when real, permissioned feedback is available.
export function generateStaticParams() {
  return COUNTRIES.map((country) => ({ country }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  // Both country homes shipped the same title and the same description, and
  // the description said "competitive exams in India" while being served at
  // /ng. Two indexable pages sharing one title is a duplicate Google has to
  // pick between, and a Nigerian visitor being told the catalogue is Indian is
  // simply wrong, so both are built from the country now.
  const name = countryName(country);
  const lead = country === 'ng' ? 'JAMB UTME' : 'SSC, Banking and Railways';
  // India's title drops the country so the brand suffix fits. pageMetadata
  // appends " | TakeMockTest" only when the whole title stays inside 60
  // characters, and "Free Mock Tests for Competitive Exams in India" came to 61
  // with it, so the brand was being silently dropped from the one page that
  // most needs to own the brand query. At 44 characters the title below lands
  // at 59 and keeps it. Nigeria keeps its country qualifier instead: it is what
  // stops the two country homes sharing a title, and /ng is not competing for
  // the brand term.
  const title = country === 'in'
    ? 'Free Online Mock Tests for Competitive Exams'
    : `Free Online Mock Tests for Competitive Exams${name ? ` in ${name}` : ''}`;
  return pageMetadata({
    title,
    description: country === 'ng'
      ? `${SITE_NAME} offers free online mock tests for ${lead} and other competitive exams${name ? ` in ${name}` : ''}. No sign-up, instant results and answer explanations.`
      : `${SITE_NAME} offers free online mock tests for SSC, Banking, Railways, Engineering, Management and Law. No sign-up, instant results and answer explanations.`,
    path: `/${country}`,
  });
}

const TRUST_POINTS = [
  'Every test here starts without an account, and nothing is held behind a sign-up.',
  'Where a pattern is marked review-pending rather than official, the page says so instead of presenting it as settled.',
  'Check each test’s source references and review status before starting.',
  'Review the scoring rules before you start, and answer explanations after you finish.',
];

// The FAQs used to be a flat module-level array shared by every country, and
// one of its four answers promised expansion "beyond SSC, Banking, and
// Railways" on a homepage that, under /ng, offers JAMB UTME and nothing else.
// That is the same defect the exam grid and the metadata above were already
// fixed for. They are built per country now, and every figure in them is
// interpolated from the catalogue rather than typed in, so an answer cannot
// drift away from what the site actually holds the way a hardcoded count does.
const faqsFor = (country: string, scale: { exams: number; tests: number; questions: number }) => {
  const locale = contentLocale(country);
  const n = (value: number) => value.toLocaleString(locale);
  const families = country === 'ng'
    ? 'JAMB UTME'
    : 'SSC, Banking, Railways, Engineering, Management, Law, Defence and more';
  const official = EXAM_LIST.filter((exam) => exam.stages.some((stage) => stage.pattern?.status === 'official')).length;
  const reviewPending = EXAM_LIST.filter((exam) => exam.stages.some((stage) => stage.pattern?.status === 'review-pending')).length;

  return [
    {
      q: 'Is TakeMockTest really free?',
      a: `Yes. All ${n(scale.tests)} mock tests are free to attempt, with no trial period, no card details and nothing held back behind a paid tier. There is no premium version of this site that gets the better questions.`,
    },
    {
      q: 'Do I need to create an account?',
      a: 'No. Every test starts immediately, and there is no sign-up step at any point. Your answers and results are saved in your own browser rather than on our servers, which has one consequence worth knowing: clearing your browser data, or switching to another device, starts you fresh.',
    },
    {
      q: 'Are these previous year question papers?',
      a: `No, and it matters that you know it. Every question here is written originally against the official syllabus and pattern, not recalled or copied from a real paper. What is reproduced from the examining body is the structure: the question count, section split, timing and marking scheme. The ${n(scale.questions)} questions on this site are practice material, not a leaked or memory-based paper.`,
    },
    {
      q: 'What do I get when I finish a test?',
      a: 'A section-wise score breakdown the moment you submit, showing what negative marking cost you, how long you spent per question, and an explanation for every question you saw, whether you got it right or wrong. Each question also carries the source reference it was checked against.',
    },
    {
      q: 'Where do the exam patterns come from?',
      a: `Question counts, timing, marking schemes and section splits are taken from the examining body's own notification, information bulletin or syllabus document. ${official} exams carry a pattern marked official, meaning the primary document was read directly. ${reviewPending} are marked review-pending, meaning the structure rests on consistent corroboration from secondary sources because the examining body's own site could not be reached. That label is shown on the exam's own pages rather than hidden, so you can check before you trust a figure.`,
    },
    {
      q: 'Is this content written by AI?',
      a: 'The exam pages, blog and question banks are drafted with AI assistance and then checked against primary sources and a set of automated audits before they are published. We would rather state that plainly than let a byline imply otherwise. What we commit to is the checking, not who typed the first draft.',
    },
    {
      q: 'How is scoring calculated, and does negative marking apply?',
      a: 'Every test states its marks per correct answer and its deduction for a wrong one before you begin, matching the official scheme it is checked against. The deduction differs by exam, so the maths of whether a guess is worth making differs too. Where this site uses a marking rule the examining body has not published, the test says so instead of presenting it as official.',
    },
    {
      q: 'Can I pause a test and come back to it?',
      a: 'You can close the tab and return: your answers are saved as you go, so a refresh or an accidental back button will not lose your work. The clock is not pausable, though. Time that passes while you are away is deducted when you resume, the same way it would be in a real sitting.',
    },
    {
      q: 'Should I take a full mock or a sectional test?',
      a: `A full mock is for pacing and stamina under the official timer, and is the only thing that tells you whether you can finish the paper. A sectional test isolates one section when you already know which one is costing you. For a single weak topic, the topic practice section has ${n(practiceQuestions)} questions across ${practiceTopics} topics with no negative marking, which is the right place to rebuild a skill before you time yourself on it.`,
    },
    {
      q: 'I have not picked an exam yet. Where should I start?',
      a: `Two sections need no exam choice. Topic practice covers ${practiceTopics} quantitative, reasoning and English topics drawn from every exam that sets them, and the logical reasoning section pools ${n(LR_TOTAL_QUESTIONS)} questions graded on one easy-to-hard scale. Both run without negative marking, so they are a way to find your level before committing to a syllabus.`,
    },
    {
      q: 'Does a mock here always cover the whole official paper?',
      a: 'Not always, and the page tells you when it does not. Some official papers include sections this site does not build, such as current-affairs general awareness or hand-drawn and human-marked components. Where a mock covers part of a paper, it states which sections it contains and how many of the official questions that represents, rather than presenting a partial paper as a full one.',
    },
    {
      q: 'Which exams are covered, and will more be added?',
      a: `${n(scale.exams)} ${scale.exams === 1 ? 'exam is' : 'exams are'} live here, covering ${families}, with ${n(scale.tests)} mock tests ${scale.exams === 1 ? 'on it' : 'between them'}. More are added continuously, and exams listed without a live test are marked as such rather than linking to an empty page.`,
    },
  ];
};

export default async function HomePage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  // A country with no exams gets the exam-agnostic homepage: hero, the two
  // skill sections, trust and FAQ. The exam grids, category grid and updates
  // strip are not rendered rather than rendered empty.
  const hasExams = countryPublishes(country, 'exams');
  const examSuggestions = examSuggestionsFor(country);
  const featuredExams = featuredExamsFor(country);
  const scale = scaleFor(country);
  const featuredCategories = getFeaturedExamCatalog(country);
  const faqs = faqsFor(country, scale);
  const hasUpdates = countryPublishes(country, 'updates');
  const latestUpdates = getLatestUpdates(5);

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdHtml([organizationSchema(), websiteSchema(), faqPageSchema(faqs)]) }}
      />

      <section aria-labelledby="home-heading" className="border-b border-ink-200 bg-gradient-to-br from-ink-50 via-white to-action-50">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-7 md:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-12 lg:py-12">
          <div>
            {/* "Find your next mock test" read well and said nothing a searcher
                types. This class owns the unqualified head term (seo-keywords.ts,
                Country home), so the H1 states it plainly and names the country,
                which is also what separates /in from /ng for a crawler. The
                promise that used to carry the hero now sits underneath it, where
                it still does its job without standing in for the subject. */}
            <h1 id="home-heading" className="max-w-xl text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-ink-900 md:text-5xl">
              Free Online Mock Tests for Competitive Exams{countryName(country) ? ` in ${countryName(country)}` : ''}
            </h1>
            {/* The hero used to read "Find your next mock test, practise at
                your pace". Good instruction, but it never said what this site
                is, so nothing on the page connected the brand to the thing it
                does. This sentence does that in one line: name, category,
                market, and the three things that differ from a paywalled
                competitor. */}
            <p className="mt-3 max-w-xl text-base leading-6 text-ink-600">
              {SITE_NAME} is a free online mock test platform for competitive exams{countryName(country) ? ` in ${countryName(country)}` : ''}.
              Practise {country === 'ng' ? 'JAMB UTME and other' : 'SSC, Banking, Railways, Engineering, Management, Law, Defence and other'} exams
              with instant results, answer explanations and no sign-up.
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
                    <option key={exam.name} value={exam.name} label={exam.liveSlug ? 'Mock test available' : 'Listed, coming soon'} />
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
                alt="Two students practicing a competitive-exam mock test with a laptop and OMR sheet"
                fill
                priority
                sizes="(min-width: 1152px) 490px, (min-width: 1024px) 45vw, 100vw"
                className="object-cover object-[center_40%]"
              />
            </div>
          </div>
        </div>
      </section>

      {scale.exams > 0 && (
        <section aria-label="What is on this site" className="border-b border-ink-200 bg-white">
          <dl className="mx-auto flex max-w-6xl flex-wrap justify-between gap-y-3 px-5 py-4 text-center">
            {[
              { label: 'Exams', value: scale.exams.toLocaleString(contentLocale(country)) },
              { label: 'Mock tests', value: scale.tests.toLocaleString(contentLocale(country)) },
              { label: 'Practice questions', value: scale.questions.toLocaleString(contentLocale(country)) },
              { label: 'Cost to practise', value: 'Free' },
            ].map((item) => (
              <div key={item.label} className="min-w-[7rem] flex-1">
                <dt className="text-xs uppercase tracking-wide text-ink-600">{item.label}</dt>
                <dd className="text-lg font-bold text-ink-900 md:text-xl">{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>
      )}

      <div className="mx-auto max-w-6xl space-y-10 px-5 py-8 md:space-y-14 md:py-12">
        {hasExams && (
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
        )}

        {/* Practice by skill sits between the exam list and the category
            browser deliberately. Both of those require the visitor to already
            know which exam they are sitting; this is the first entry point on
            the homepage that does not. Named for the pattern, not the one
            section that exists today, so Quantitative Aptitude or English can
            join it later without a rename or a URL change. */}
        <section id="skills" aria-labelledby="skills-heading" className="scroll-mt-24">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <h2 id="skills-heading" className="text-xl font-bold text-ink-900 md:text-2xl">Free practice questions by topic</h2>
            <Link href={`/${country}/${PRACTICE_SLUG}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-action-700 underline-offset-4 hover:underline">
              All practice topics <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="border border-ink-200 bg-white p-5 md:flex md:items-start md:gap-8">
            <div className="md:w-2/5 md:shrink-0">
              <h3 className="text-lg font-bold text-ink-900">
                <Link href={`/${country}/${LR_SLUG}`} className="hover:underline">Logical reasoning</Link>
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-700">
                Not sure which exam yet, or just want to get faster at puzzles? {LR_TOTAL_QUESTIONS} reasoning
                questions pooled from every exam on this site, graded easy to hard on one scale, in {LR_TOPIC_TESTS.length} topic
                sets and a difficulty ladder, with no negative marking.
              </p>
            </div>
            <div className="mt-4 grid flex-1 gap-2 sm:grid-cols-3 md:mt-0">
              {LR_LADDER.map((rung) => (
                <Link
                  key={rung.level}
                  href={`/${country}/${LR_SLUG}/test/${rung.tests[0].id}`}
                  className="border border-ink-200 p-3 transition hover:border-ink-900"
                >
                  <span className="block text-sm font-bold text-ink-900">{LR_GRADE_LABELS[rung.level]}</span>
                  <span className="mt-1 block text-xs text-ink-500">
                    {rung.tests.length} {rung.tests.length === 1 ? 'set' : 'sets'} &middot; {rung.tests[0].duration} min
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-3 border border-ink-200 bg-white p-5 md:flex md:items-start md:gap-8">
            <div className="md:w-2/5 md:shrink-0">
              <h3 className="text-lg font-bold text-ink-900">
                <Link href={`/${country}/${PRACTICE_SLUG}`} className="hover:underline">Practice by topic</Link>
              </h3>
              <p className="mt-2 text-sm leading-6 text-ink-700">
                Know which topic costs you marks? Drill it on its own. {practiceQuestions.toLocaleString(contentLocale(country))}{' '}
                questions across {practiceTopics} quantitative, reasoning and English topics, each pooled from every
                exam that sets it. An explanation on every question, and no negative marking.
              </p>
            </div>
            <div className="mt-4 grid flex-1 gap-2 sm:grid-cols-3 md:mt-0">
              {featuredTopics.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/${country}/${PRACTICE_SLUG}/${topic.slug}`}
                  className="border border-ink-200 p-3 transition hover:border-ink-900"
                >
                  <span className="block text-sm font-bold text-ink-900">{topic.name}</span>
                  <span className="mt-1 block text-xs text-ink-500">{topic.count} questions</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {hasExams && (
        <section id="exam-categories" aria-labelledby="exam-categories-heading" className="scroll-mt-24">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-1">
            <h2 id="exam-categories-heading" className="text-xl font-bold text-ink-900 md:text-2xl">Mock tests by exam category</h2>
            <Link href={`/${country}/exams`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-action-700 underline-offset-4 hover:underline">
              All categories <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
            {featuredCategories.map((category) => (
              <ExamCategoryCard key={category.slug} category={category} country={country} compact />
            ))}
          </div>
        </section>
        )}

        {hasUpdates && latestUpdates.length > 0 && (
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
            <h2 id="trust-heading" className="text-lg font-bold text-ink-900">Why practise on {SITE_NAME}?</h2>
            <Link href={`/${country}/about`} className="mt-1 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-action-700 underline underline-offset-4">
              How {SITE_NAME} checks exam patterns <span aria-hidden="true">→</span>
            </Link>
          </div>
          <ul className="list-disc space-y-2 pl-4 text-sm leading-6 text-ink-700">
            {TRUST_POINTS.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </section>

        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="mb-4 text-xl font-bold text-ink-900 md:text-2xl">Frequently asked questions</h2>
          <div className="border border-ink-200 bg-white">
            {faqs.map((faq) => (
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
