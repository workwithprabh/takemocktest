import { EXAM_LIST, getExam, getExamSections } from '@/lib/exams';
import { breadcrumbSchema } from '@/lib/schema';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/metadata';

const SSC_CGL_NOTICE =
  'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2026.pdf';
const IBPS_PO_NOTICE =
  'https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf';

const SSC_CGL_TIER1_SYLLABUS = [
  {
    section: 'General Intelligence and Reasoning',
    topics: [
      'Analogies, similarities and differences',
      'Space visualisation and spatial orientation',
      'Problem solving, analysis, judgement and decision making',
      'Visual memory, observation and relationship concepts',
      'Arithmetical reasoning and figural classification',
      'Number and non-verbal series',
      'Coding-decoding, statement-conclusion and syllogistic reasoning',
    ],
  },
  {
    section: 'General Awareness',
    topics: [
      'Current events and everyday observations in their scientific aspect',
      'India and neighbouring countries',
      'History and culture',
      'Geography',
      'Economic scene',
      'General policy and scientific research',
    ],
  },
  {
    section: 'Quantitative Aptitude',
    topics: [
      'Whole numbers, decimals, fractions and relationships between numbers',
      'Percentage, ratio and proportion, square roots and averages',
      'Interest, profit and loss, discount, partnership, mixture and alligation',
      'Time and distance, time and work',
      'School algebra, elementary surds and graphs of linear equations',
      'Triangles, circles, quadrilaterals and regular polygons',
      'Prisms, cones, cylinders, spheres, hemispheres and pyramids',
      'Trigonometric ratios, identities, heights and distances',
      'Histograms, frequency polygons, bar diagrams and pie charts',
    ],
  },
  {
    section: 'English Comprehension',
    topics: [
      'Understanding correct English',
      'Basic comprehension',
      'Writing ability',
    ],
  },
];

const IBPS_PO_PRELIMS_TOPIC_MAP = [
  {
    section: 'English Language',
    pattern: '30 questions · 30 marks · 20 minutes',
    topics: [
      'Reading comprehension and contextual vocabulary',
      'Cloze tests and fillers',
      'Sentence correction and error detection',
      'Para jumbles and sentence arrangement',
      'Word usage and phrase replacement',
    ],
  },
  {
    section: 'Quantitative Aptitude',
    pattern: '35 questions · 30 marks · 20 minutes',
    topics: [
      'Simplification, approximation and number series',
      'Quadratic equations',
      'Data interpretation',
      'Percentage, ratio, average and partnership',
      'Profit and loss, interest and mixture',
      'Time and work, pipes, speed and distance',
    ],
  },
  {
    section: 'Reasoning Ability',
    pattern: '35 questions · 40 marks · 20 minutes',
    topics: [
      'Seating arrangement and logic puzzles',
      'Syllogism and coded inequalities',
      'Coding-decoding and alphanumeric series',
      'Blood relations and direction sense',
      'Ranking, order and comparison',
      'Data sufficiency and input-output patterns',
    ],
  },
];

export function generateStaticParams() {
  return EXAM_LIST.map((exam) => ({ exam: exam.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ exam: string }> }) {
  const { exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return {};
  if (exam.slug === 'ssc-cgl') {
    return pageMetadata({
      title: 'SSC CGL Tier 1 Syllabus 2026 — Section-wise Topics',
      description: 'Official SSC CGL Tier 1 syllabus for Reasoning, General Awareness, Quantitative Aptitude and English Comprehension, checked against the 2026 SSC notice.',
      path: '/in/ssc-cgl/syllabus',
    });
  }
  if (exam.slug === 'ibps-po') {
    return pageMetadata({
      title: 'IBPS PO Prelims Syllabus 2026 — Topics & Section Pattern',
      description: 'IBPS PO Prelims 2026 section pattern and a clearly labelled preparation topic map for English Language, Quantitative Aptitude, and Reasoning Ability.',
      path: '/in/ibps-po/syllabus',
    });
  }
  return pageMetadata({
    title: `${exam.name} Syllabus ${new Date().getFullYear()} — Section-wise Topics`,
    description: `${exam.name} syllabus sections being checked against current official documents before publication.`,
    path: `/in/${exam.slug}/syllabus`,
    noIndex: true,
  });
}

export default async function SyllabusPage({ params }: { params: Promise<{ country: string; exam: string }> }) {
  const { country, exam: examSlug } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();
  const sections = getExamSections(exam);
  const isSscCgl = exam.slug === 'ssc-cgl';
  const isIbpsPo = exam.slug === 'ibps-po';

  return (
    <div className="max-w-4xl mx-auto px-5 py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', path: `/${country}` },
              { name: exam.name, path: `/${country}/${exam.slug}` },
              { name: 'Syllabus', path: `/${country}/${exam.slug}/syllabus` },
            ])
          ),
        }}
      />
      <h1 className="font-sans font-bold text-2xl mb-1 text-ink-900">
        {isSscCgl ? 'SSC CGL Tier 1 Syllabus 2026' : isIbpsPo ? 'IBPS PO Prelims Syllabus 2026' : `${exam.name} Syllabus`}
      </h1>
      {isSscCgl ? (
        <>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-ink-500">
            Tier 1 contains 25 questions from each of four subjects. Candidates receive 15 minutes per subject,
            and every wrong answer deducts 0.50 marks.
          </p>
          <div className="mt-6 border border-ink-200 bg-ink-50 p-4 text-sm leading-6 text-ink-700">
            Reasoning, General Awareness and English are set at graduation level. Quantitative Aptitude is set at
            Class 10 level, according to the official notice.
          </div>
          <div className="mt-6 space-y-4">
            {SSC_CGL_TIER1_SYLLABUS.map(({ section, topics }) => (
              <section key={section} className="border border-ink-200 bg-white p-5">
                <h2 className="text-lg font-semibold text-ink-900">{section}</h2>
                <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink-500 sm:grid-cols-2">
                  {topics.map((topic) => <li key={topic}>— {topic}</li>)}
                </ul>
              </section>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-ink-500">
            Source: Staff Selection Commission, Combined Graduate Level Examination 2026 notice, paragraphs
            13.8 and 13.10.{' '}
            <a className="font-semibold text-ink-900 underline" href={SSC_CGL_NOTICE} target="_blank" rel="noreferrer">
              View the official notice
            </a>
          </p>
        </>
      ) : isIbpsPo ? (
        <>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-ink-500">
            The 2026 preliminary exam contains three separately timed tests. IBPS officially specifies the
            test names, questions, marks and timing; it does not publish an exhaustive subtopic list.
          </p>
          <div className="mt-6 border border-ink-200 bg-ink-50 p-4 text-sm leading-6 text-ink-700">
            <strong className="text-ink-900">Transparent labelling:</strong> the section pattern below is
            official. The topic lists are a TakeMockTest preparation map based on recurring bank-exam question
            families, not an IBPS-prescribed syllabus.
          </div>
          <div className="mt-6 space-y-4">
            {IBPS_PO_PRELIMS_TOPIC_MAP.map(({ section, pattern, topics }) => (
              <section key={section} className="border border-ink-200 bg-white p-5">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <h2 className="text-lg font-semibold text-ink-900">{section}</h2>
                  <span className="bg-ink-100 px-2 py-1 text-xs font-semibold text-ink-700">{pattern}</span>
                </div>
                <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink-500 sm:grid-cols-2">
                  {topics.map((topic) => <li key={topic}>— {topic}</li>)}
                </ul>
              </section>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-ink-500">
            Official pattern source: Institute of Banking Personnel Selection, CRP PO/MT-XVI detailed
            notification, section D.{' '}
            <a className="font-semibold text-ink-900 underline" href={IBPS_PO_NOTICE} target="_blank" rel="noreferrer">
              View the official notification
            </a>
          </p>
        </>
      ) : (
        <div className="mt-6 space-y-4">
          {sections.map((section) => (
            <div key={section} className="bg-white border border-ink-200 p-4">
              <div className="font-sans font-semibold text-sm mb-1 text-ink-900">{section}</div>
              <div className="text-xs text-ink-500">Detailed topic coverage is being verified before publication.</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
