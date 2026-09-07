import Link from 'next/link';
import { COUNTRIES } from '@/lib/exams';
import {
  PRACTICE_FAMILIES,
  PRACTICE_FAMILY_BLURBS,
  PRACTICE_SLUG,
  getTopicPool,
  getTopicPools,
  getPublishedTopicSlugs,
} from '@/lib/practice-topics';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, faqPageSchema, itemListSchema, organizationSchema, jsonLdHtml } from '@/lib/schema';
import Breadcrumbs from '@/components/Breadcrumbs';

export function generateStaticParams() {
  return COUNTRIES.map((country) => ({ country }));
}

const YEAR = new Date().getFullYear();

function totals() {
  const pools = [...getTopicPools().values()];
  return {
    topics: pools.length,
    questions: pools.reduce((sum, pool) => sum + pool.questions.length, 0),
    exams: new Set(pools.flatMap((pool) => pool.examSlugs)).size,
  };
}

const FAQS = [
  {
    q: 'Are these questions different from the ones in the mock tests?',
    a: 'No, and that is the point. Every question here already appears in the reasoning, quantitative or English section of a mock test on this site. Topic practice is the same corpus cut a different way: instead of one exam’s paper containing eight topics, one topic gathers questions from every exam that sets it. Nothing is duplicated — the pages reference the same questions, so a correction to a bank reaches both at once.',
  },
  {
    q: 'Is there negative marking in topic practice?',
    a: 'No. Every question is worth 1 mark and a wrong answer costs nothing. That is deliberate: this is for drilling one topic until it is quick and accurate, not for rehearsing an exam’s risk calculus. It also means a score here is not comparable with the same questions attempted inside their exam mock, where the real marking scheme applies.',
  },
  {
    q: 'Do these pages change over time?',
    a: 'Yes. A topic page is a view of every question on the site for that topic, so when new mock tests are added their questions join the relevant topic pools automatically. Pools grow; they are never trimmed to keep a set fixed.',
  },
  {
    q: 'Which exams do the questions come from?',
    a: 'Each topic page lists the exams its own pool draws from. Across the section the questions span banking, SSC, railway, defence, law, management and university entrance papers — any exam whose syllabus sets that topic.',
  },
  {
    q: 'How should I use topic practice alongside full mocks?',
    a: 'Attempt a full mock first to find out which topics cost you marks and time, then drill those topics here until they stop costing you, then go back to the mock. Topic practice builds the skill; the mock rehearses the exam.',
  },
];

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const { topics, questions } = totals();
  return pageMetadata({
    title: `Topic-wise Practice Questions ${YEAR}: Free Tests`,
    description: `Free topic-wise practice for ${topics} quantitative, reasoning and English topics — ${questions.toLocaleString('en-IN')} questions with explanations, drawn from every exam on the site. No negative marking.`,
    path: `/${country}/${PRACTICE_SLUG}`,
  });
}

export default async function PracticeIndexPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const base = `/${country}/${PRACTICE_SLUG}`;
  const slugs = getPublishedTopicSlugs();
  const { topics, questions, exams } = totals();

  const jsonLd = [
    breadcrumbSchema([
      { name: 'Home', path: `/${country}` },
      { name: 'Topic Practice', path: base },
    ]),
    organizationSchema(),
    itemListSchema(
      slugs.map((slug) => {
        const pool = getTopicPool(slug)!;
        return { name: `${pool.topic.name} practice questions`, path: `${base}/${slug}` };
      }),
    ),
    faqPageSchema(FAQS),
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />

      <div className="border-b border-ink-200 bg-ink-50">
        <div className="mx-auto max-w-6xl px-5 py-7 md:py-9">
          <Breadcrumbs items={[{ label: 'Home', href: `/${country}` }, { label: 'Topic practice' }]} />
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-action-700">Free practice section</p>
          <h1 className="max-w-3xl font-sans text-3xl font-bold tracking-tight text-ink-900 md:text-5xl">
            Topic-wise Practice Questions {YEAR}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-ink-700 md:text-base">
            One topic at a time, pooled across every exam that sets it. If percentages are what slow you down, drill
            percentages — not a whole paper that happens to contain four of them. Every question carries a worked
            explanation, and there is no negative marking anywhere in this section.
          </p>
          <dl className="mt-6 grid max-w-2xl grid-cols-2 border-l border-t border-ink-200 bg-white sm:grid-cols-4">
            <div className="border-b border-r border-ink-200 p-3">
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-ink-500">Topics</dt>
              <dd className="mt-1 text-lg font-bold text-ink-900">{topics}</dd>
            </div>
            <div className="border-b border-r border-ink-200 p-3">
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-ink-500">Questions</dt>
              <dd className="mt-1 text-lg font-bold text-ink-900">{questions.toLocaleString('en-IN')}</dd>
            </div>
            <div className="border-b border-r border-ink-200 p-3">
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-ink-500">Exams drawn from</dt>
              <dd className="mt-1 text-lg font-bold text-ink-900">{exams}</dd>
            </div>
            <div className="border-b border-r border-ink-200 p-3">
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-ink-500">Negative marking</dt>
              <dd className="mt-1 text-sm font-bold text-ink-900">None</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-10">
        {PRACTICE_FAMILIES.map((family) => {
          const familySlugs = slugs.filter((slug) => getTopicPool(slug)?.topic.family === family);
          if (familySlugs.length === 0) return null;
          return (
            <section key={family} className="mb-12" aria-labelledby={`family-${family.toLowerCase()}`}>
              <h2 id={`family-${family.toLowerCase()}`} className="font-sans text-2xl font-bold tracking-tight text-ink-900">
                {family}
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-700">{PRACTICE_FAMILY_BLURBS[family]}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {familySlugs.map((slug) => {
                  const pool = getTopicPool(slug)!;
                  return (
                    <li key={slug} className="border border-ink-200 bg-white p-4">
                      <h3 className="text-base font-bold text-ink-900">
                        <Link href={`${base}/${slug}`} className="hover:underline">{pool.topic.name}</Link>
                      </h3>
                      <p className="mt-1 text-xs text-ink-500">
                        {pool.questions.length} questions &middot; {pool.examSlugs.length} exams
                      </p>
                      <p className="mt-2 text-sm leading-6 text-ink-700">{pool.topic.blurb}</p>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}

        <section aria-labelledby="ladder-xref" className="mb-12 border-l-2 border-action-600 bg-action-50 p-5">
          <h2 id="ladder-xref" className="text-lg font-bold text-ink-900">Want a difficulty ladder instead?</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-ink-700">
            Topic practice sorts by <em>what</em> the question asks. The Logical Reasoning section sorts the same kind
            of material by <em>how hard</em> it is — hand-graded easy, medium and hard sets you can work up through.
            Use topic practice when you know which topic is costing you; use the ladder when you want to find your level.
          </p>
          <Link
            href={`/${country}/logical-reasoning`}
            className="mt-3 inline-flex min-h-11 items-center border border-ink-200 bg-white px-4 text-sm font-semibold text-ink-900 transition hover:border-ink-900"
          >
            Go to the reasoning difficulty ladder
          </Link>
        </section>

        <section aria-labelledby="practice-faq" className="mt-12 max-w-3xl">
          <h2 id="practice-faq" className="font-sans text-2xl font-bold tracking-tight text-ink-900">
            Questions about topic practice
          </h2>
          <dl className="mt-4 border-t border-ink-200">
            {FAQS.map((faq) => (
              <div key={faq.q} className="border-b border-ink-200 py-4">
                <dt className="text-sm font-bold text-ink-900">{faq.q}</dt>
                <dd className="mt-2 text-sm leading-6 text-ink-700">{faq.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </div>
  );
}
