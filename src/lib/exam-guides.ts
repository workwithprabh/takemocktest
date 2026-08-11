// Data-driven content for the per-exam guide pages (syllabus, eligibility,
// selection-process, and eventually admit-card/answer-key/result/cutoff/
// salary/previous-year-papers). Each exam's guide content lives here as
// data instead of a hardcoded `exam.slug === 'x' ? <JSX> : ...` branch in
// every page.tsx, so adding a new exam's verified guide content is a data
// change, not a code change per page.
//
// Content authorship for new exams is the ChatGPT content pipeline's job
// per TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md — this file's job is
// only to hold whatever's already been verified and route it consistently.
// An exam with no entry for a given page type falls back to that page's
// existing "being verified" placeholder and stays noindex.

export type GuideBlock =
  | { type: 'callout'; heading?: string; text: string }
  | { type: 'paragraph'; heading?: string; text: string; tone?: 'plain' | 'boxed' }
  | { type: 'statCards'; heading?: string; note?: string; cards: { label: string; value: string }[] }
  | { type: 'table'; heading?: string; note?: string; minWidth?: string; headers: string[]; rows: string[][] }
  | { type: 'keyValueGrid'; heading?: string; note?: string; items: { label: string; value: string }[] }
  | { type: 'infoBlocks'; heading?: string; note?: string; items: { title: string; text: string }[] }
  | { type: 'numberedStages'; heading?: string; items: { title: string; text: string }[] }
  | { type: 'topicSections'; sections: { section: string; pattern?: string; topics: string[] }[] }
  | { type: 'sourceNote'; heading: string; text: string; sourceLabel: string; sourceUrl: string; tone?: 'plain' | 'boxed' };

export interface ExamGuidePage {
  title: string;
  description: string;
  heading: string;
  blocks: GuideBlock[];
}

export type GuidePageType = 'syllabus' | 'eligibility' | 'selection-process';

const SSC_CGL_NOTICE_URL =
  'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2026.pdf';
const IBPS_PO_NOTICE_URL =
  'https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf';

export const EXAM_GUIDES: Partial<Record<string, Partial<Record<GuidePageType, ExamGuidePage>>>> = {
  'ssc-cgl': {
    syllabus: {
      title: 'SSC CGL Tier 1 Syllabus 2026: Section-wise Topics',
      description:
        'Official SSC CGL Tier 1 syllabus for Reasoning, General Awareness, Quantitative Aptitude and English Comprehension, checked against the 2026 SSC notice.',
      heading: 'SSC CGL Tier 1 Syllabus 2026',
      blocks: [
        {
          type: 'paragraph',
          text: 'Tier 1 contains 25 questions from each of four subjects. Candidates receive 15 minutes per subject, and every wrong answer deducts 0.50 marks.',
        },
        {
          type: 'callout',
          text: 'Reasoning, General Awareness and English are set at graduation level. Quantitative Aptitude is set at Class 10 level, according to the official notice.',
        },
        {
          type: 'topicSections',
          sections: [
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
              topics: ['Understanding correct English', 'Basic comprehension', 'Writing ability'],
            },
          ],
        },
        {
          type: 'sourceNote',
          heading: '',
          text: 'Source: Staff Selection Commission, Combined Graduate Level Examination 2026 notice, paragraphs 13.8 and 13.10.',
          sourceLabel: 'View the official notice',
          sourceUrl: SSC_CGL_NOTICE_URL,
        },
      ],
    },
    eligibility: {
      title: 'SSC CGL Eligibility 2026: Age Limit & Qualification',
      description:
        'Check SSC CGL 2026 eligibility: post-wise age limits, age relaxation, educational qualifications, nationality rules, and the qualification cut-off date.',
      heading: 'SSC CGL Eligibility 2026',
      blocks: [
        {
          type: 'callout',
          heading: 'Eligibility at a glance',
          text: "SSC CGL eligibility depends on the post you choose. Most posts require a bachelor's degree, while the age limit falls within one of four post-specific bands. Age and educational qualification are both counted as on **1 August 2026**.",
        },
        {
          type: 'table',
          heading: 'Age limit',
          note: 'The applicable band varies by post. Check the post-wise age column in the official notice before applying.',
          headers: ['Post-specific age band', 'Age as on'],
          rows: [
            ['18 to 27 years', '1 August 2026'],
            ['20 to 30 years', '1 August 2026'],
            ['18 to 30 years', '1 August 2026'],
            ['18 to 32 years', '1 August 2026'],
          ],
        },
        {
          type: 'keyValueGrid',
          heading: 'Upper-age relaxation',
          note: 'Additional rules apply to certain defence personnel, Central Government employees, widows and divorced women.',
          items: [
            { label: 'SC / ST', value: '5 years' },
            { label: 'OBC', value: '3 years' },
            { label: 'PwBD', value: '10 years' },
            { label: 'PwBD (OBC)', value: '13 years' },
            { label: 'PwBD (SC / ST)', value: '15 years' },
            { label: 'Ex-servicemen', value: '3 years after deducting military service from actual age' },
          ],
        },
        {
          type: 'infoBlocks',
          heading: 'Educational qualification',
          note: 'Final-year candidates may apply, but they must hold the required qualification by 1 August 2026.',
          items: [
            {
              title: 'Most SSC CGL posts',
              text: "A bachelor's degree from a recognised university or an equivalent qualification.",
            },
            {
              title: 'Junior Statistical Officer',
              text: "A bachelor's degree in any subject with at least 60% in Mathematics at Class 12, or a bachelor's degree in any subject with Statistics studied at degree level.",
            },
            {
              title: 'Statistical Investigator Grade II',
              text: "A bachelor's degree in an eligible statistics, mathematics, economics, demography, operations research, computing, data science or artificial intelligence discipline listed in the notice.",
            },
          ],
        },
        {
          type: 'paragraph',
          heading: 'Nationality',
          text: 'Applicants must meet the citizenship or permitted nationality conditions in the official notice. This includes Indian citizens and specified eligible categories from Nepal, Bhutan and certain persons of Indian origin. A Government of India eligibility certificate may be required for candidates who are not Indian citizens.',
        },
        {
          type: 'sourceNote',
          heading: 'Verify before applying',
          text: 'Post preferences affect age and qualification requirements. Use this page as a study guide, then confirm your chosen post against the',
          sourceLabel: 'official SSC CGL 2026 notice',
          sourceUrl: SSC_CGL_NOTICE_URL,
          tone: 'plain',
        },
      ],
    },
    'selection-process': {
      title: 'SSC CGL Selection Process 2026: Tier 1 to Final Merit',
      description:
        'Understand the SSC CGL 2026 selection process: Tier 1 shortlisting, Tier 2 papers, qualifying computer and data-entry tests, post preference, and document verification.',
      heading: 'SSC CGL Selection Process 2026',
      blocks: [
        {
          type: 'callout',
          heading: 'How selection works',
          text: 'SSC CGL has two computer-based tiers. Tier 1 is used to shortlist candidates; Tier 2 is the decisive stage for merit, followed by post allocation and document verification.',
        },
        {
          type: 'numberedStages',
          heading: 'Stage-by-stage process',
          items: [
            {
              title: 'Tier 1: shortlisting exam',
              text: 'Candidates take the computer-based Tier 1 exam. SSC uses the normalised Tier 1 score and category-wise cut-offs to shortlist candidates for the relevant Tier 2 papers. Tier 1 does not decide the final merit list.',
            },
            {
              title: 'Tier 2: merit-stage examination',
              text: 'Paper I is compulsory for every shortlisted candidate. Paper II applies only to candidates shortlisted for Junior Statistical Officer and Statistical Investigator Grade II. Paper III applies only to Assistant Audit Officer and Assistant Accounts Officer candidates.',
            },
            {
              title: 'Qualifying modules and post preference',
              text: 'Candidates must separately qualify the required sections of Paper I. The Computer Knowledge Test and Data Entry Speed Test are qualifying. Before the result, candidates must submit their post and department preferences; unlisted preferences are not considered.',
            },
            {
              title: 'Final merit, allocation and document verification',
              text: 'SSC prepares final merit from Tier 2 performance, subject to the qualifying requirements, and allocates posts by merit and submitted preferences. The allotted user department then verifies original eligibility and category documents.',
            },
          ],
        },
        {
          type: 'table',
          heading: 'Which Tier 2 papers apply?',
          minWidth: '34rem',
          headers: ['Paper', 'Who takes it', 'Role'],
          rows: [
            ['Paper I', 'All shortlisted candidates', 'Compulsory'],
            ['Paper II', 'JSO and Statistical Investigator Grade II', 'Post-specific'],
            ['Paper III', 'Assistant Audit Officer and Assistant Accounts Officer', 'Post-specific'],
          ],
        },
        {
          type: 'paragraph',
          heading: 'Important post-specific checks',
          text: 'Some inspector, sub-inspector and BRO posts have physical, medical or educational standards. Read those requirements before locking your post preferences because allocation does not waive them.',
        },
        {
          type: 'sourceNote',
          heading: 'Official source',
          text: 'Selection rules can be changed by corrigenda. Confirm the current wording in the',
          sourceLabel: 'official SSC CGL 2026 notice',
          sourceUrl: SSC_CGL_NOTICE_URL,
        },
      ],
    },
  },
  'ibps-po': {
    syllabus: {
      title: 'IBPS PO Prelims Syllabus 2026: Topics & Section Pattern',
      description:
        'IBPS PO Prelims 2026 section pattern and a clearly labelled preparation topic map for English Language, Quantitative Aptitude, and Reasoning Ability.',
      heading: 'IBPS PO Prelims Syllabus 2026',
      blocks: [
        {
          type: 'paragraph',
          text: 'The 2026 preliminary exam contains three separately timed tests. IBPS officially specifies the test names, questions, marks and timing; it does not publish an exhaustive subtopic list.',
        },
        {
          type: 'callout',
          text: 'Transparent labelling: the section pattern below is official. The topic lists are a TakeMockTest preparation map based on recurring bank-exam question families, not an IBPS-prescribed syllabus.',
        },
        {
          type: 'topicSections',
          sections: [
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
          ],
        },
        {
          type: 'sourceNote',
          heading: '',
          text: 'Official pattern source: Institute of Banking Personnel Selection, CRP PO/MT-XVI detailed notification, section D.',
          sourceLabel: 'View the official notification',
          sourceUrl: IBPS_PO_NOTICE_URL,
        },
      ],
    },
    eligibility: {
      title: 'IBPS PO Eligibility 2026: Age Limit & Qualification',
      description:
        'Check the official IBPS PO 2026 eligibility criteria: 20 to 30 year age limit, category relaxations, graduation requirement, citizenship rules, and cut-off dates.',
      heading: 'IBPS PO Eligibility 2026',
      blocks: [
        {
          type: 'callout',
          heading: 'Eligibility at a glance',
          text: 'A candidate ordinarily needs a recognised graduation degree and must be between 20 and 30 years old. Age is measured on **1 July 2026**; the educational qualification must be held by **21 July 2026**.',
        },
        {
          type: 'statCards',
          heading: 'Age limit',
          note: 'For the unrelaxed limit, date of birth must fall from 2 July 1996 to 1 July 2006, inclusive.',
          cards: [
            { label: 'Minimum', value: '20 years' },
            { label: 'Maximum', value: '30 years' },
          ],
        },
        {
          type: 'keyValueGrid',
          heading: 'Upper-age relaxation',
          note: 'Certificate requirements and rules for combining relaxations are defined in the notification.',
          items: [
            { label: 'SC / ST', value: '5 years' },
            { label: 'OBC (Non-Creamy Layer)', value: '3 years' },
            { label: 'Persons with Benchmark Disabilities', value: '10 years' },
            { label: 'Eligible ex-servicemen and specified commissioned officers', value: '5 years' },
          ],
        },
        {
          type: 'paragraph',
          heading: 'Educational qualification',
          tone: 'boxed',
          text: 'A degree in any discipline from a university recognised by the Government of India, or an equivalent qualification recognised by the Central Government. The final result must have been declared on or before 21 July 2026, and candidates must possess a valid mark sheet or degree certificate when registering.',
        },
        {
          type: 'paragraph',
          heading: 'Nationality or citizenship',
          text: 'Eligible categories include Indian citizens, subjects of Nepal or Bhutan, specified Tibetan refugees, and specified persons of Indian origin who intend to settle permanently in India. Candidates outside the Indian-citizen category require the applicable Government of India eligibility certificate.',
        },
        {
          type: 'sourceNote',
          heading: 'Verify before relying on this summary',
          text: 'Reservation and certificate rules are detailed and may depend on your category. Confirm them in the',
          sourceLabel: 'official CRP PO/MT-XVI notification',
          sourceUrl: IBPS_PO_NOTICE_URL,
        },
      ],
    },
    'selection-process': {
      title: 'IBPS PO Selection Process 2026: Prelims to Allotment',
      description:
        'Understand the official IBPS PO 2026 selection stages: Prelims, Mains, mandatory Personality Test, Common Interview, 80:20 final score, and provisional allotment.',
      heading: 'IBPS PO Selection Process 2026',
      blocks: [
        {
          type: 'callout',
          heading: 'How selection works',
          text: 'CRP PO/MT-XVI moves from two online examinations to a mandatory Personality Test, Common Interview and merit-cum-preference allotment. Clearing a stage is shortlisting, not a job offer.',
        },
        {
          type: 'numberedStages',
          heading: 'Stage-by-stage process',
          items: [
            {
              title: 'Online Preliminary Examination',
              text: 'The 100-mark prelim is used for shortlisting. Candidates must clear the cut-off in each of the three separately timed tests. Preliminary marks do not form part of the final merit score.',
            },
            {
              title: 'Online Main Examination',
              text: 'Shortlisted candidates take the 200-mark objective test and 25-mark descriptive paper. Main-exam marks are used for shortlisting to the Personality Test and Interview and also contribute to final merit.',
            },
            {
              title: 'Mandatory Personality Test',
              text: 'Main-qualified candidates complete a self-report Personality Test. It is non-qualifying, but attendance is mandatory to remain eligible for the Interview. The personality profile is shared with the interview panel.',
            },
            {
              title: 'Common Interview',
              text: 'Participating Banks conduct the interview, coordinated by a Nodal Bank. Candidates must qualify both the Main examination and Interview. The notification sets a 40% interview minimum, or 35% for SC, ST, OBC and PwBD candidates.',
            },
            {
              title: 'Final score and provisional allotment',
              text: 'The combined final score gives 80% weight to the Online Main examination and 20% to the Interview. Subject to merit, preferences, reservation rules, actual vacancies and document checks, candidates may be provisionally allotted to a participating bank.',
            },
          ],
        },
        {
          type: 'statCards',
          heading: 'Final-score weight',
          cards: [
            { label: 'Final-score weight', value: 'Main exam: 80%' },
            { label: 'Final-score weight', value: 'Interview: 20%' },
          ],
        },
        {
          type: 'paragraph',
          heading: 'What provisional allotment means',
          tone: 'boxed',
          text: 'Allotment depends on actual vacancies reported by banks and is subject to eligibility and identity verification. It is not itself an appointment offer; joining terms are issued by the allotted participating bank.',
        },
        {
          type: 'sourceNote',
          heading: 'Official source',
          text: 'Confirm every stage in the',
          sourceLabel: 'official CRP PO/MT-XVI notification',
          sourceUrl: IBPS_PO_NOTICE_URL,
        },
      ],
    },
  },
};

export function getExamGuide(examSlug: string, pageType: GuidePageType): ExamGuidePage | undefined {
  return EXAM_GUIDES[examSlug]?.[pageType];
}
