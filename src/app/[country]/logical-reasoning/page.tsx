import Link from 'next/link';
import { COUNTRIES } from '@/lib/exams';
import {
  LR_GRADE_BLURBS,
  LR_GRADE_LABELS,
  LR_LADDER,
  LR_NAME,
  LR_SLUG,
  LR_TOPIC_TESTS,
  LR_TOTAL_QUESTIONS,
  getLRGradeMix,
  getLRTestLabel,
} from '@/lib/logical-reasoning';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, faqPageSchema, itemListSchema, organizationSchema, jsonLdHtml } from '@/lib/schema';
import Breadcrumbs from '@/components/Breadcrumbs';

export function generateStaticParams() {
  return COUNTRIES.map((country) => ({ country }));
}

const YEAR = new Date().getFullYear();

const FAQS = [
  {
    q: 'Is there negative marking in these logical reasoning tests?',
    a: 'No. Every question carries 1 mark and a wrong answer costs nothing, so you can attempt everything without guessing penalties. That is deliberate: this section is for building reasoning skill, not for rehearsing an exam’s risk calculus. If you want negative marking, attempt the same reasoning inside its exam’s own sectional or full mock, where the real marking scheme applies.',
  },
  {
    q: 'How are the questions graded easy, medium or hard?',
    a: 'On one absolute scale applied across every exam, not on the difficulty tag the question carries inside its own paper. Easy means one step and no case analysis. Medium means two to four linked steps, or one diagram to construct, without branching. Hard means branching and elimination, interleaved rules, layered codes or a sufficiency trap. Grading by hand on a single rubric is the only way an SSC question and a CAT-style question can sit in the same ladder honestly.',
  },
  {
    q: 'Which exams do these questions come from?',
    a: 'They are drawn from the reasoning sections of banking, SSC, railway, law, management and engineering-entrance mocks already on the site — from IBPS and SBI to AILET, CMAT, BITSAT and the RRB papers. Pure reasoning is exam-agnostic: a seating-arrangement puzzle does not become a different question because it appeared in a bank paper rather than a law paper.',
  },
  {
    q: 'Should I start with the difficulty ladder or the topic sets?',
    a: 'Start with the ladder if you do not yet know where you stand — an Easy set will tell you quickly whether your basics are fast enough. Move to topic sets once you can name the two or three families that cost you time, since each topic set drills one family end to end at its own natural spread of difficulty.',
  },
  {
    q: 'Do I need to sign up, and are my scores saved?',
    a: 'No login is required. Each attempt is scored the moment you submit, with an explanation for every question, and the result is stored in your browser on this device so you can revisit it from the results page. Nothing is uploaded.',
  },
];

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return pageMetadata({
    title: `Logical Reasoning Practice ${YEAR}: Free Graded Tests`,
    description: `Free logical reasoning practice sorted by difficulty and topic. ${LR_TOTAL_QUESTIONS} hand-graded questions, no negative marking, instant results and full explanations.`,
    path: `/${country}/${LR_SLUG}`,
  });
}

export default async function LogicalReasoningHubPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const base = `/${country}/${LR_SLUG}`;

  const jsonLd = [
    breadcrumbSchema([
      { name: 'Home', path: `/${country}` },
      { name: LR_NAME, path: base },
    ]),
    organizationSchema(),
    itemListSchema(
      [...LR_LADDER.flatMap((rung) => rung.tests), ...LR_TOPIC_TESTS].map((spec) => ({
        name: `${LR_NAME}: ${spec.name}`,
        path: `${base}/test/${spec.id}`,
      })),
    ),
    faqPageSchema(FAQS),
  ];

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />

      <div className="border-b border-ink-200 bg-ink-50">
        <div className="mx-auto max-w-6xl px-5 py-7 md:py-9">
          <Breadcrumbs items={[{ label: 'Home', href: `/${country}` }, { label: 'Logical reasoning' }]} />
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-action-700">Free practice section</p>
          <h1 className="max-w-3xl font-sans text-3xl font-bold tracking-tight text-ink-900 md:text-5xl">
            Logical Reasoning Practice {YEAR}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-ink-700 md:text-base">
            Reasoning on its own, without an exam attached. Every question here is drawn from the reasoning sections of
            the mocks already on this site, then graded by hand on one scale so a ladder from easy to hard means the same
            thing whichever exam a question came from. No negative marking anywhere in this section.
          </p>
          <dl className="mt-6 grid max-w-2xl grid-cols-2 border-l border-t border-ink-200 bg-white sm:grid-cols-4">
            <div className="border-b border-r border-ink-200 p-3">
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-ink-500">Practice sets</dt>
              <dd className="mt-1 text-lg font-bold text-ink-900">{LR_LADDER.reduce((n, rung) => n + rung.tests.length, 0) + LR_TOPIC_TESTS.length}</dd>
            </div>
            <div className="border-b border-r border-ink-200 p-3">
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-ink-500">Graded questions</dt>
              <dd className="mt-1 text-lg font-bold text-ink-900">{LR_TOTAL_QUESTIONS}</dd>
            </div>
            <div className="border-b border-r border-ink-200 p-3">
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-ink-500">Negative marking</dt>
              <dd className="mt-1 text-sm font-bold text-ink-900">None</dd>
            </div>
            <div className="border-b border-r border-ink-200 p-3">
              <dt className="text-[10px] font-semibold uppercase tracking-wide text-ink-500">Login</dt>
              <dd className="mt-1 text-sm font-bold text-ink-900">Not required</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-5 py-10">
        <section aria-labelledby="ladder">
          <h2 id="ladder" className="font-sans text-2xl font-bold tracking-tight text-ink-900">Practice by difficulty</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-700">
            Each set is 25 questions at a single grade, drawn across topics so no one family dominates. Work up the
            ladder: a level is yours when you finish inside the timer without rushing the last five.
          </p>

          {LR_LADDER.map((rung) => (
            <div key={rung.level} className="mt-8">
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-lg font-bold text-ink-900">{LR_GRADE_LABELS[rung.level]}</h3>
                <p className="text-sm text-ink-700">{LR_GRADE_BLURBS[rung.level]}</p>
              </div>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {rung.tests.map((spec) => (
                  <li key={spec.id} className="border border-ink-200 bg-white p-4">
                    <h4 className="text-base font-bold text-ink-900">
                      <Link href={`${base}/test/${spec.id}`} className="hover:underline">{spec.name}</Link>
                    </h4>
                    <p className="mt-1 text-xs text-ink-500">
                      {spec.questionIds.length} questions &middot; {spec.duration} minutes &middot; no negative marking
                    </p>
                    <Link
                      href={`${base}/test/${spec.id}`}
                      className="mt-3 inline-flex min-h-11 items-center bg-ink-900 px-4 text-sm font-semibold text-white transition hover:bg-ink-700"
                    >
                      Start {spec.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section aria-labelledby="topics" className="mt-12">
          <h2 id="topics" className="font-sans text-2xl font-bold tracking-tight text-ink-900">Practice by topic</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-ink-700">
            One reasoning family per set, 25 questions, kept at that family&rsquo;s own natural spread of difficulty
            rather than forced to a level. Use these once you know which topics cost you time.
          </p>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {LR_TOPIC_TESTS.map((spec) => {
              const mix = getLRGradeMix(spec);
              return (
                <li key={spec.id} className="border border-ink-200 bg-white p-4">
                  <h3 className="text-base font-bold text-ink-900">
                    <Link href={`${base}/test/${spec.id}`} className="hover:underline">{getLRTestLabel(spec)}</Link>
                  </h3>
                  <p className="mt-1 text-xs text-ink-500">
                    {spec.questionIds.length} questions &middot; {spec.duration} minutes
                  </p>
                  <p className="mt-1 text-xs text-ink-700">
                    {mix.easy} easy &middot; {mix.medium} medium &middot; {mix.hard} hard
                  </p>
                  <Link
                    href={`${base}/test/${spec.id}`}
                    className="mt-3 inline-flex min-h-11 items-center border border-ink-200 px-4 text-sm font-semibold text-ink-900 transition hover:border-ink-900"
                  >
                    Start set
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>

        <section aria-labelledby="faq" className="mt-12 max-w-3xl">
          <h2 id="faq" className="font-sans text-2xl font-bold tracking-tight text-ink-900">Questions about this section</h2>
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
