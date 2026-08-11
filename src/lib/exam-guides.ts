// Data-driven content for the per-exam guide pages: syllabus, eligibility,
// selection-process, salary, and previous-year-papers. Each exam's guide
// content lives here as data instead of a hardcoded
// `exam.slug === 'x' ? <JSX> : ...` branch in every page.tsx, so adding a
// new exam's verified guide content is a data change, not a code change
// per page.
//
// admit-card/answer-key/result/cutoff stay hardcoded to SSC CGL directly in
// their own page.tsx files rather than moving here: they're tied to one
// exam cycle's exact dates and scores, not evergreen reference content, so
// generalizing them means signing up for a per-exam-per-cycle refresh
// commitment. Revisit only with a real plan for that maintenance load.
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
  | { type: 'sourceNote'; heading: string; text: string; sourceLabel: string; sourceUrl: string; tone?: 'plain' | 'boxed' }
  | {
      type: 'recordCards';
      heading?: string;
      note?: string;
      records: {
        badge: string;
        title: string;
        meta: { label: string; value: string }[];
        linkLabel: string;
        linkUrl: string;
      }[];
    };

export interface ExamGuidePage {
  title: string;
  description: string;
  heading: string;
  blocks: GuideBlock[];
}

export type GuidePageType = 'syllabus' | 'eligibility' | 'selection-process' | 'salary' | 'previous-year-papers';

const SSC_CGL_NOTICE_URL =
  'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2026.pdf';
const IBPS_PO_NOTICE_URL =
  'https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf';
const SSC_CHSL_NOTICE_URL =
  'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_chsl_2025.pdf';
const SBI_PO_2026_NOTICE_URL =
  'https://sbi.bank.in/documents/77530/57941/18062026_1_Detailed_Adv.2026.pdf/1f1a9532-8a2f-6e59-08a0-616d62a497b1?t=1781759726353';
const IBPS_CLERK_NOTICE_URL =
  'https://www.ibps.in/wp-content/uploads/Notification_CRP_CSA_XVI-Final.pdf';
// The live rrbcdg.gov.in copy of this notice 404s (site migration in progress as of August 2026).
// This is the same CEN 09/2025, verified by direct text extraction from an archived snapshot.
const RRB_GROUP_D_ARCHIVED_CEN_URL =
  'https://web.archive.org/web/20260411020321/https://www.rrbcdg.gov.in/uploads/2025/09-LVL1/092025-CEN.pdf';
// The current official RRB listing page for this CEN, used where the page needs to point
// readers at the live corrigenda trail rather than a point-in-time archived PDF.
const RRB_GROUP_D_CURRENT_LISTING_URL = 'https://www.rrbcdg.gov.in/2025-09-level1.php';

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
    salary: {
      title: 'SSC CGL Salary 2026: Post-wise Pay Levels & Basic Pay',
      description:
        'Check the official SSC CGL 2026 pay levels and basic-pay ranges, plus a clear explanation of allowances, deductions, and why in-hand salary varies.',
      heading: 'SSC CGL Salary 2026',
      blocks: [
        {
          type: 'paragraph',
          heading: 'Salary at a glance',
          tone: 'boxed',
          text: 'SSC CGL posts are placed across Pay Levels 4 to 8 of the Central Government pay matrix. Your allotted post determines the pay level; city, allowances and deductions determine the final take-home amount.',
        },
        {
          type: 'table',
          heading: 'Official pay-level ranges',
          note: 'These are pay-matrix basic-pay ranges, not monthly in-hand figures.',
          headers: ['Pay level', 'Starting basic pay', 'Upper range'],
          rows: [
            ['Pay Level 8', '₹47,600', '₹1,51,100'],
            ['Pay Level 7', '₹44,900', '₹1,42,400'],
            ['Pay Level 6', '₹35,400', '₹1,12,400'],
            ['Pay Level 5', '₹29,200', '₹92,300'],
            ['Pay Level 4', '₹25,500', '₹81,100'],
          ],
        },
        {
          type: 'infoBlocks',
          heading: 'How monthly salary is formed',
          items: [
            {
              title: 'Added to basic pay',
              text: 'Applicable Dearness Allowance, House Rent Allowance and Transport Allowance.',
            },
            {
              title: 'Common deductions',
              text: 'NPS contribution, CGHS or equivalent charges, income tax and other applicable deductions.',
            },
          ],
        },
        {
          type: 'paragraph',
          heading: 'Why we do not quote one in-hand salary',
          tone: 'boxed',
          text: 'A single figure would be misleading. Take-home pay changes with the post, place of posting, current allowance rates, government accommodation, tax position and deductions. Use the basic pay table for reliable comparison, then check the current departmental rules after allocation.',
        },
        {
          type: 'sourceNote',
          heading: 'Official source',
          text: 'Confirm the pay level attached to each post in the',
          sourceLabel: 'official SSC CGL 2026 notice',
          sourceUrl: SSC_CGL_NOTICE_URL,
          tone: 'boxed',
        },
      ],
    },
    'previous-year-papers': {
      title: 'SSC CGL Previous Year Paper Sources: Official SSC Records',
      description:
        'Browse verified SSC CGL Tier 1 and Tier 2 question-paper release notices from the official Staff Selection Commission archive, with access-window details.',
      heading: 'SSC CGL Previous Year Paper Sources',
      blocks: [
        {
          type: 'paragraph',
          heading: 'Read before opening a record',
          tone: 'boxed',
          text: 'SSC issued each candidate\'s paper through a time-limited login window. Those windows are now closed, so the links below open the permanent official notices, not an active paper download. We will only host shift-wise papers after their source and answers can be independently verified.',
        },
        {
          type: 'recordCards',
          heading: 'Official SSC release records',
          note: '4 verified records, newest first.',
          records: [
            {
              badge: 'Tier 2 · 2023',
              title: 'Final answer keys with question papers',
              meta: [
                { label: 'Published', value: '16 Dec 2023' },
                { label: 'Availability', value: 'Candidate access closed 5 Jan 2024' },
              ],
              linkLabel: 'Open official SSC notice',
              linkUrl: 'https://ssc.nic.in/SSCFileServer/PortalManagement/UploadedFiles/Final_Answer_Key_CGLE2023_16122023.pdf',
            },
            {
              badge: 'Tier 2 · 2022',
              title: 'Final answer keys with question papers',
              meta: [
                { label: 'Published', value: '29 May 2023' },
                { label: 'Availability', value: 'Candidate access closed 12 Jun 2023' },
              ],
              linkLabel: 'Open official SSC notice',
              linkUrl: 'https://www.ssc.nic.in/SSCFileServer/PortalManagement/UploadedFiles/Write_up_final_answer_key_29052023.pdf',
            },
            {
              badge: 'Tier 1 · 2022',
              title: 'Final answer keys with question papers',
              meta: [
                { label: 'Published', value: '27 Feb 2023' },
                { label: 'Availability', value: 'Candidate access closed 13 Mar 2023' },
              ],
              linkLabel: 'Open official SSC notice',
              linkUrl: 'https://ssc.nic.in/SSCFileServer/PortalManagement/UploadedFiles/FinalAnswerkey_CGLE2022_tier1_27022023.pdf',
            },
            {
              badge: 'Tier 1 · 2021',
              title: 'Final answer keys with question papers',
              meta: [
                { label: 'Published', value: '14 Jul 2022' },
                { label: 'Availability', value: 'Candidate access closed 12 Aug 2022' },
              ],
              linkLabel: 'Open official SSC notice',
              linkUrl: 'https://doc.ssc.nic.in/SecAudit/SSCFileServer/PortalManagement/UploadedFiles/CGLE_2021_Tier_1_Final_Answer_key_14072022.pdf',
            },
          ],
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
  'ssc-chsl': {
    syllabus: {
      title: 'SSC CHSL Tier 1 Syllabus 2025: Section-wise Topics',
      description:
        'SSC CHSL Tier 1 syllabus for General Intelligence, General Awareness, Quantitative Aptitude and English Language, based on the official 2025 notice.',
      heading: 'SSC CHSL Tier 1 Syllabus 2025',
      blocks: [
        {
          type: 'paragraph',
          text: 'Tier 1 has four sections with 25 questions and 50 marks each. The paper contains **100 questions for 200 marks in 60 minutes**, with **0.50 mark deducted for each wrong answer**.',
        },
        {
          type: 'callout',
          text: 'The topic lists below follow the subject areas named in the official SSC CHSL 2025 notice. The same notice is the source for the Tier 1 question count, marks and negative marking.',
        },
        {
          type: 'topicSections',
          sections: [
            {
              section: 'General Intelligence',
              pattern: '25 questions · 50 marks',
              topics: [
                'Semantic and symbolic analogies',
                'Figural analogy and classification',
                'Number, semantic and figural series',
                'Coding and decoding',
                'Venn diagrams and space orientation',
                'Problem solving, analysis and critical thinking',
                'Drawing inferences',
                'Emotional intelligence and social intelligence',
                'Other verbal and non-verbal reasoning tasks listed in the notice',
              ],
            },
            {
              section: 'General Awareness',
              pattern: '25 questions · 50 marks',
              topics: [
                'Current events',
                'Everyday observations in their scientific aspect',
                'India and neighbouring countries',
                'History',
                'Culture',
                'Geography',
                'Economic scene',
                'General policy',
                'Scientific research',
              ],
            },
            {
              section: 'Quantitative Aptitude',
              pattern: '25 questions · 50 marks',
              topics: [
                'Number systems and computation',
                'Percentages, ratio and proportion',
                'Averages, interest, profit and loss',
                'Discount, partnership, mixture and alligation',
                'Time and distance, time and work',
                'Algebra and elementary surds',
                'Geometry and mensuration',
                'Trigonometry and heights and distances',
                'Statistical charts and graphical data',
              ],
            },
            {
              section: 'English Language',
              pattern: '25 questions · 50 marks',
              topics: [
                'Spot the error',
                'Fill in the blanks',
                'Synonyms, homonyms and antonyms',
                'Spelling and detecting misspelt words',
                'Idioms and phrases',
                'One-word substitution',
                'Improvement of sentences',
                'Active and passive voice',
                'Direct and indirect speech',
                'Shuffling of sentence parts and sentences',
                'Cloze passage',
                'Comprehension passage',
              ],
            },
          ],
        },
        {
          type: 'sourceNote',
          heading: 'Official source',
          text: 'Source: Staff Selection Commission, Combined Higher Secondary (10+2) Level Examination, 2025 notice. This page reflects the current verified CHSL notice used by TakeMockTest.',
          sourceLabel: 'View the official SSC CHSL 2025 notice',
          sourceUrl: SSC_CHSL_NOTICE_URL,
          tone: 'plain',
        },
      ],
    },
    eligibility: {
      title: 'SSC CHSL Eligibility 2025: Age Limit & Qualification',
      description:
        'Check SSC CHSL eligibility from the official 2025 notice: age limit, category relaxations, nationality conditions and 12th-pass qualification rules.',
      heading: 'SSC CHSL Eligibility 2025',
      blocks: [
        {
          type: 'callout',
          heading: 'Eligibility at a glance',
          text: 'The unrelaxed age limit is **18 to 27 years as on 1 January 2026**. For most posts, candidates need **12th Standard or an equivalent qualification** by **1 January 2026**.',
        },
        {
          type: 'statCards',
          heading: 'Age limit',
          note: 'For the unrelaxed age band, the permitted date-of-birth range is 2 January 1999 to 1 January 2008, inclusive.',
          cards: [
            { label: 'Minimum age', value: '18 years' },
            { label: 'Maximum age', value: '27 years' },
            { label: 'Age cut-off', value: '1 January 2026' },
          ],
        },
        {
          type: 'keyValueGrid',
          heading: 'Upper-age relaxation',
          note: 'Additional conditions apply to the special categories listed in the official notice.',
          items: [
            { label: 'SC / ST', value: '5 years' },
            { label: 'OBC', value: '3 years' },
            { label: 'PwBD (UR)', value: '10 years' },
            { label: 'PwBD (OBC)', value: '13 years' },
            { label: 'PwBD (SC / ST)', value: '15 years' },
            { label: 'Ex-servicemen', value: '3 years after deducting military service from actual age' },
            { label: 'Defence personnel disabled in operations', value: '3 years; 8 years for SC / ST' },
            {
              label: 'Central Government civilian employees',
              value: 'Up to 40 years; up to 45 years for SC / ST, subject to the service conditions in the notice',
            },
            {
              label: 'Widows / divorced / judicially separated women not remarried',
              value: 'Up to 35 years; up to 40 years for SC / ST',
            },
          ],
        },
        {
          type: 'infoBlocks',
          heading: 'Educational qualification',
          note: 'Candidates appearing in the qualifying examination may apply, but they must possess the required qualification by 1 January 2026.',
          items: [
            {
              title: 'LDC / JSA and most DEO posts',
              text: '12th Standard or an equivalent examination from a recognised Board or University.',
            },
            {
              title: 'Specified DEO / DEO Grade A posts',
              text: '12th Standard in the Science stream with Mathematics as a subject, for the departments and posts identified in the official notice.',
            },
          ],
        },
        {
          type: 'paragraph',
          heading: 'Nationality',
          text: 'The notice permits Indian citizens and specified eligible categories including subjects of Nepal or Bhutan and certain persons of Indian origin. Candidates in categories that require a Government of India eligibility certificate must satisfy that condition.',
        },
        {
          type: 'sourceNote',
          heading: 'Official source',
          text: 'Age, qualification and nationality conditions can affect eligibility for a specific post. Confirm your position against the official SSC CHSL notice before applying.',
          sourceLabel: 'View the official SSC CHSL 2025 notice',
          sourceUrl: SSC_CHSL_NOTICE_URL,
          tone: 'plain',
        },
      ],
    },
    'selection-process': {
      title: 'SSC CHSL Selection Process 2025: Tier 1 to Final Selection',
      description:
        'Understand the SSC CHSL selection process from Tier 1 and Tier 2 through qualifying computer or skill tests, post preference and document verification.',
      heading: 'SSC CHSL Selection Process 2025',
      blocks: [
        {
          type: 'callout',
          heading: 'How selection works',
          text: 'SSC CHSL uses Tier 1 for shortlisting and Tier 2 for the next stage of selection. Qualifying computer, skill or typing requirements apply as prescribed for the post.',
        },
        {
          type: 'numberedStages',
          heading: 'Stage-by-stage process',
          items: [
            {
              title: 'Tier 1 computer-based examination',
              text: 'Candidates take the Tier 1 computer-based paper. SSC uses the result and applicable cut-offs to shortlist candidates for Tier 2.',
            },
            {
              title: 'Tier 2 examination',
              text: 'Shortlisted candidates take Tier 2. The prescribed Tier 2 sections and modules must be completed as applicable under the official notice.',
            },
            {
              title: 'Computer Knowledge Test and Skill Test / Typing Test',
              text: 'The qualifying computer, skill or typing requirements apply according to the post. Candidates must meet the prescribed standard where that module is required.',
            },
            {
              title: 'Final merit, post preference and document verification',
              text: 'Final selection follows the applicable Tier 2 result and submitted post preferences. The allotted department verifies original eligibility and category documents before appointment.',
            },
          ],
        },
        {
          type: 'sourceNote',
          heading: 'Official source',
          text: 'Selection stages, qualifying modules and post-specific requirements are governed by the Staff Selection Commission notice and any later corrigenda.',
          sourceLabel: 'View the official SSC CHSL 2025 notice',
          sourceUrl: SSC_CHSL_NOTICE_URL,
          tone: 'plain',
        },
      ],
    },
  },
  'sbi-po': {
    syllabus: {
      title: 'SBI PO Prelims Syllabus 2026: Sections & Topic Map',
      description:
        'SBI PO Prelims 2026 official section pattern plus a clearly labelled preparation topic map for English, Quantitative Aptitude and Reasoning Ability.',
      heading: 'SBI PO Prelims Syllabus 2026',
      blocks: [
        {
          type: 'paragraph',
          text: 'SBI PO Prelims has **100 questions for 100 marks in 60 minutes**. Each of the three sections is separately timed for **20 minutes**.',
        },
        {
          type: 'callout',
          text: "SBI officially publishes the section names, question counts, marks and timing. It does not publish an exhaustive chapter-by-chapter syllabus in the advertisement. The topic bullets below are a **TakeMockTest preparation map**, not an SBI-prescribed subtopic list.",
        },
        {
          type: 'topicSections',
          sections: [
            {
              section: 'English Language',
              pattern: '40 questions · 40 marks · 20 minutes',
              topics: [
                'Reading comprehension and contextual vocabulary',
                'Cloze tests and fillers',
                'Sentence correction and error detection',
                'Para jumbles and sentence arrangement',
                'Word usage, phrase replacement and grammar in context',
              ],
            },
            {
              section: 'Quantitative Aptitude',
              pattern: '30 questions · 30 marks · 20 minutes',
              topics: [
                'Simplification and approximation',
                'Number series and arithmetic relationships',
                'Data interpretation',
                'Percentage, ratio, average and partnership',
                'Profit and loss, interest and mixture',
                'Time and work, pipes, speed and distance',
              ],
            },
            {
              section: 'Reasoning Ability',
              pattern: '30 questions · 30 marks · 20 minutes',
              topics: [
                'Seating arrangement and logic puzzles',
                'Syllogism and inequalities',
                'Coding-decoding and alphanumeric patterns',
                'Blood relations and direction sense',
                'Ranking, order and comparison',
                'Data sufficiency and logical conditions',
              ],
            },
          ],
        },
        {
          type: 'paragraph',
          heading: 'What comes after Prelims?',
          text: 'The official advertisement also defines a Main Examination and a descriptive test, followed by Phase III. This page keeps the topicSections aligned to the three Prelims sections currently represented in the TakeMockTest exam configuration.',
        },
        {
          type: 'sourceNote',
          heading: 'Official source',
          text: 'Official pattern source: State Bank of India, Probationary Officer recruitment advertisement CRPD/PO/2026-27/09.',
          sourceLabel: 'View the official SBI PO 2026 advertisement',
          sourceUrl: SBI_PO_2026_NOTICE_URL,
          tone: 'plain',
        },
      ],
    },
    eligibility: {
      title: 'SBI PO Eligibility 2026: Age, Attempts & Qualification',
      description:
        'Check SBI PO 2026 eligibility: 21 to 30 year age limit, category relaxation, graduation requirement, citizenship and category-wise attempt limits.',
      heading: 'SBI PO Eligibility 2026',
      blocks: [
        {
          type: 'callout',
          heading: 'Eligibility at a glance',
          text: 'Candidates must be **21 to 30 years old as on 1 April 2026** and hold a recognised graduation degree or an accepted equivalent qualification.',
        },
        {
          type: 'statCards',
          heading: 'Age limit',
          note: 'For the unrelaxed age band, date of birth must fall from 2 April 1996 to 1 April 2005, inclusive.',
          cards: [
            { label: 'Minimum age', value: '21 years' },
            { label: 'Maximum age', value: '30 years' },
            { label: 'Age cut-off', value: '1 April 2026' },
          ],
        },
        {
          type: 'keyValueGrid',
          heading: 'Upper-age relaxation',
          note: 'The advertisement states that cumulative age relaxation is not allowed.',
          items: [
            { label: 'SC / ST', value: '5 years' },
            { label: 'OBC (Non-Creamy Layer)', value: '3 years' },
            { label: 'PwBD (UR / EWS)', value: '10 years' },
            { label: 'PwBD (OBC)', value: '13 years' },
            { label: 'PwBD (SC / ST)', value: '15 years' },
            { label: 'Eligible Ex-servicemen / ECOs / SSCOs', value: '5 years, subject to the conditions in the advertisement' },
          ],
        },
        {
          type: 'infoBlocks',
          heading: 'Educational qualification',
          items: [
            {
              title: 'Graduation',
              text: 'A graduation degree in any discipline from a recognised university or an equivalent qualification recognised by the Central Government.',
            },
            {
              title: 'Final-year / final-semester candidates',
              text: 'They may apply provisionally. If called for interview, they must produce proof that they passed graduation on or before **30 September 2026**.',
            },
            {
              title: 'Integrated Dual Degree',
              text: 'The passing date must be on or before **30 September 2026**.',
            },
            {
              title: 'Professional qualifications',
              text: 'The advertisement also accepts specified professional qualifications such as Medical, Engineering, Chartered Accountant and Cost Accountant.',
            },
          ],
        },
        {
          type: 'keyValueGrid',
          heading: 'Number of chances',
          note: 'An appearance in the Main Examination counts as a chance. An appearance in the Preliminary Examination does not.',
          items: [
            { label: 'UR / EWS', value: '6 chances' },
            { label: 'UR PwBD / EWS PwBD / OBC / OBC PwBD', value: '9 chances' },
            { label: 'SC / SC PwBD / ST / ST PwBD', value: 'No restriction' },
          ],
        },
        {
          type: 'paragraph',
          heading: 'Nationality',
          text: 'The SBI PO advertisement requires candidates to be **Indian citizens**.',
        },
        {
          type: 'sourceNote',
          heading: 'Official source',
          text: "Eligibility, relaxation and attempt-limit rules are taken from State Bank of India's CRPD/PO/2026-27/09 advertisement.",
          sourceLabel: 'View the official SBI PO 2026 advertisement',
          sourceUrl: SBI_PO_2026_NOTICE_URL,
          tone: 'plain',
        },
      ],
    },
    'selection-process': {
      title: 'SBI PO Selection Process 2026: Prelims, Mains & Interview',
      description:
        'SBI PO 2026 selection process explained from Preliminary and Main examinations through psychometric test, Group Exercise, Interview and final merit.',
      heading: 'SBI PO Selection Process 2026',
      blocks: [
        {
          type: 'callout',
          heading: 'How selection works',
          text: "SBI PO selection has three phases. Prelims is used for shortlisting, while the Main Examination and Phase III determine the final selection under SBI's prescribed scoring rules.",
        },
        {
          type: 'numberedStages',
          heading: 'Stage-by-stage process',
          items: [
            {
              title: 'Phase I: Preliminary Examination',
              text: 'Candidates take the online preliminary exam with separately timed English Language, Quantitative Aptitude and Reasoning Ability sections. Prelims marks are used for shortlisting and are not carried into final merit.',
            },
            {
              title: 'Phase II: Main Examination',
              text: 'Shortlisted candidates take the Main Examination, which includes objective tests and a descriptive test as specified in the advertisement.',
            },
            {
              title: 'Phase III: Psychometric Test, Group Exercise and Interview',
              text: 'Candidates shortlisted from Mains proceed to the psychometric assessment, Group Exercise and Interview stage.',
            },
            {
              title: 'Final selection',
              text: "Candidates must qualify Phase II and Phase III separately. SBI prepares the final merit list using the prescribed normalisation and weighting of the Main Examination and Phase III scores.",
            },
          ],
        },
        {
          type: 'sourceNote',
          heading: 'Official source',
          text: 'Source: State Bank of India Probationary Officer recruitment advertisement CRPD/PO/2026-27/09. Later notices or corrigenda should be checked before application.',
          sourceLabel: 'View the official SBI PO 2026 advertisement',
          sourceUrl: SBI_PO_2026_NOTICE_URL,
          tone: 'plain',
        },
      ],
    },
  },
  'ibps-clerk': {
    syllabus: {
      title: 'IBPS Clerk Prelims Syllabus 2026: Sections & Topic Map',
      description:
        'IBPS Clerk CRP CSA-XVI Prelims pattern plus a clearly labelled preparation topic map for English Language, Numerical Ability and Reasoning Ability.',
      heading: 'IBPS Clerk Prelims Syllabus 2026',
      blocks: [
        {
          type: 'paragraph',
          text: 'CRP CSA-XVI Prelims contains **100 questions for 100 marks in 60 minutes**. English Language has 30 questions, while Numerical Ability and Reasoning Ability have 35 each. All three sections are separately timed for **20 minutes**.',
        },
        {
          type: 'callout',
          text: 'The IBPS notification specifies the official section pattern but does not provide an exhaustive chapter-by-chapter syllabus. The topic bullets below are a **TakeMockTest preparation map**, not an IBPS-prescribed subtopic list.',
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
                'Error detection and sentence correction',
                'Para jumbles and sentence arrangement',
                'Word usage, phrase replacement and grammar in context',
              ],
            },
            {
              section: 'Numerical Ability',
              pattern: '35 questions · 35 marks · 20 minutes',
              topics: [
                'Simplification and approximation',
                'Number series and basic numerical relationships',
                'Data interpretation',
                'Percentage, ratio, average and partnership',
                'Profit and loss, interest and mixture',
                'Time and work, pipes, speed and distance',
              ],
            },
            {
              section: 'Reasoning Ability',
              pattern: '35 questions · 35 marks · 20 minutes',
              topics: [
                'Seating arrangement and logic puzzles',
                'Syllogism and inequalities',
                'Coding-decoding and alphanumeric patterns',
                'Blood relations and direction sense',
                'Ranking, ordering and comparison',
                'Logical conditions and data sufficiency',
              ],
            },
          ],
        },
        {
          type: 'paragraph',
          heading: 'Negative marking',
          text: 'The notification deducts **0.25 mark for each wrong answer** in the Preliminary and Main examinations. There is no penalty for an unattempted question.',
        },
        {
          type: 'sourceNote',
          heading: 'Official source',
          text: 'Official source: Institute of Banking Personnel Selection, CRP CSA-XVI notification for vacancies of 2027-28, verified by direct text extraction on 11 August 2026.',
          sourceLabel: 'View the official IBPS CRP CSA-XVI notification',
          sourceUrl: IBPS_CLERK_NOTICE_URL,
          tone: 'plain',
        },
      ],
    },
    eligibility: {
      title: 'IBPS Clerk Eligibility 2026: Age Limit & Qualification',
      description:
        'Check IBPS Clerk CRP CSA-XVI eligibility: 20 to 28 year age limit, category relaxations, graduation, nationality, local language and computer literacy.',
      heading: 'IBPS Clerk Eligibility 2026',
      blocks: [
        {
          type: 'callout',
          heading: 'Eligibility at a glance',
          text: 'Candidates must be **20 to 28 years old as on 1 August 2026** and must hold a recognised graduation degree by the registration cut-off in the notification.',
        },
        {
          type: 'statCards',
          heading: 'Age limit',
          note: 'For the unrelaxed age band, date of birth must fall from 2 August 1998 to 1 August 2006, inclusive.',
          cards: [
            { label: 'Minimum age', value: '20 years' },
            { label: 'Maximum age', value: '28 years' },
            { label: 'Age cut-off', value: '1 August 2026' },
          ],
        },
        {
          type: 'keyValueGrid',
          heading: 'Upper-age relaxation',
          note: 'SC / ST / OBC (NCL) relaxation is cumulative with only one of the remaining relaxation categories, subject to the notification rules.',
          items: [
            { label: 'SC / ST', value: '5 years' },
            { label: 'OBC (Non-Creamy Layer)', value: '3 years' },
            { label: 'Persons with Benchmark Disabilities', value: '10 years' },
            {
              label: 'Ex-servicemen / Disabled Ex-servicemen',
              value: 'Actual period of service plus 3 years; 8 years for Disabled Ex-servicemen belonging to SC / ST, subject to a maximum age of 50 years',
            },
            { label: 'Widows / divorced / legally separated women not remarried, General / EWS', value: 'Age concession up to 35 years' },
            { label: 'Widows / divorced / legally separated women not remarried, OBC', value: 'Age concession up to 38 years' },
            { label: 'Widows / divorced / legally separated women not remarried, SC / ST', value: 'Age concession up to 40 years' },
          ],
        },
        {
          type: 'infoBlocks',
          heading: 'Educational and skill requirements',
          items: [
            {
              title: 'Graduation',
              text: 'A degree in any discipline from a recognised university or an equivalent qualification recognised by the Central Government. The result must have been declared on or before **21 August 2026**.',
            },
            {
              title: 'Local-language proficiency',
              text: 'Candidates must meet the local-language proficiency requirement for the State or Union Territory for which they apply.',
            },
            {
              title: 'Computer literacy',
              text: 'Candidates need basic computer literacy through a certificate, diploma or degree in computer operations, or by having studied Computer or Information Technology as a subject.',
            },
          ],
        },
        {
          type: 'paragraph',
          heading: 'Nationality',
          text: 'Eligible categories include Indian citizens, subjects of Nepal or Bhutan, Tibetan refugees who arrived before **1 January 1962**, and specified persons of Indian origin who migrated from the countries listed in the notification. Where required, the candidate must hold the prescribed eligibility certificate.',
        },
        {
          type: 'sourceNote',
          heading: 'Official source',
          text: 'Eligibility facts are from the CRP CSA-XVI notification, including the age cut-off, relaxation categories, graduation date, nationality, local-language requirement and computer-literacy condition.',
          sourceLabel: 'View the official IBPS CRP CSA-XVI notification',
          sourceUrl: IBPS_CLERK_NOTICE_URL,
          tone: 'plain',
        },
      ],
    },
    'selection-process': {
      title: 'IBPS Clerk Selection Process 2026: Prelims to Allotment',
      description:
        'IBPS Clerk CRP CSA-XVI selection process from qualifying Prelims to the Main Examination, local language test and provisional bank allotment.',
      heading: 'IBPS Clerk Selection Process 2026',
      blocks: [
        {
          type: 'callout',
          heading: 'How selection works',
          text: 'Prelims is a qualifying shortlisting stage. **Only Main Examination marks are used for final merit listing**, followed by the local-language requirement and provisional allotment.',
        },
        {
          type: 'numberedStages',
          heading: 'Stage-by-stage process',
          items: [
            {
              title: 'Online Preliminary Examination',
              text: 'Candidates take three separately timed objective sections. IBPS decides the qualifying cut-offs, and Prelims marks do not count toward final merit.',
            },
            {
              title: 'Online Main Examination',
              text: 'Candidates shortlisted from Prelims take the Main Examination. The Main score is the scored examination used for the final merit listing.',
            },
            {
              title: 'Local Language Proficiency Test',
              text: 'Candidates must satisfy the local-language proficiency requirement for the State or Union Territory to which they applied, according to the notification.',
            },
            {
              title: 'Provisional allotment',
              text: "IBPS makes provisional allotment to a Participating Bank on merit-cum-preference, subject to the Government's reservation policy and the other eligibility conditions in the notification.",
            },
          ],
        },
        {
          type: 'table',
          heading: 'Main Examination pattern',
          note: 'These section totals are from the verified CRP CSA-XVI notification extraction.',
          minWidth: '36rem',
          headers: ['Section', 'Questions', 'Marks', 'Time'],
          rows: [
            ['General / Financial Awareness', '40', '50', '20 minutes'],
            ['General English', '40', '40', '35 minutes'],
            ['Reasoning Ability', '40', '60', '35 minutes'],
            ['Quantitative Aptitude', '40', '50', '35 minutes'],
            ['Total', '160', '200', '125 minutes'],
          ],
        },
        {
          type: 'sourceNote',
          heading: 'Official source',
          text: 'Source: Institute of Banking Personnel Selection, CRP CSA-XVI notification for vacancies of 2027-28. The notification governs cut-offs, local-language requirements and provisional allotment.',
          sourceLabel: 'View the official IBPS CRP CSA-XVI notification',
          sourceUrl: IBPS_CLERK_NOTICE_URL,
          tone: 'plain',
        },
      ],
    },
  },
  'rrb-group-d': {
    syllabus: {
      title: 'RRB Group D Syllabus 2026: CBT Sections & Topics',
      description:
        'RRB Group D CEN 09/2025 CBT syllabus for General Science, Mathematics, General Intelligence and Reasoning, and General Awareness and Current Affairs.',
      heading: 'RRB Group D CBT Syllabus 2026',
      blocks: [
        {
          type: 'paragraph',
          text: 'The CEN 09/2025 CBT has **100 questions for 100 marks in 90 minutes**. The notice says the section-wise distribution is **indicative, not fixed**, and deducts **one-third mark for each wrong answer**. The listed syllabus topic families are **illustrative and not necessarily exhaustive**.',
        },
        {
          type: 'statCards',
          heading: 'CBT pattern',
          note: 'The verified CEN extraction also provides 120 minutes for candidates eligible to use a scribe.',
          cards: [
            { label: 'Questions', value: '100' },
            { label: 'Marks', value: '100' },
            { label: 'Standard duration', value: '90 minutes' },
            { label: 'Wrong-answer penalty', value: '1/3 mark' },
          ],
        },
        {
          type: 'topicSections',
          sections: [
            {
              section: 'General Science',
              pattern: 'Indicative distribution: 25 questions',
              topics: [
                'Physics at 10th-standard CBSE level',
                'Chemistry at 10th-standard CBSE level',
                'Life Sciences at 10th-standard CBSE level',
              ],
            },
            {
              section: 'Mathematics',
              pattern: 'Indicative distribution: 25 questions',
              topics: [
                'Number system and BODMAS',
                'Decimals and fractions',
                'LCM and HCF',
                'Ratio and proportion',
                'Percentages',
                'Mensuration',
                'Time and work',
                'Time and distance',
                'Simple and compound interest',
                'Profit and loss',
                'Algebra',
                'Geometry and trigonometry',
                'Elementary statistics',
                'Square root',
                'Age calculations',
                'Calendar and clock',
                'Pipes and cisterns',
              ],
            },
            {
              section: 'General Intelligence and Reasoning',
              pattern: 'Indicative distribution: 30 questions',
              topics: [
                'Analogies',
                'Alphabetical and number series',
                'Coding and decoding',
                'Mathematical operations',
                'Relationships',
                'Syllogism',
                'Jumbling',
                'Venn diagrams',
                'Data interpretation and sufficiency',
                'Conclusions and decision making',
                'Similarities and differences',
                'Analytical reasoning',
                'Classification',
                'Directions',
                'Statement, arguments and assumptions',
              ],
            },
            {
              section: 'General Awareness and Current Affairs',
              pattern: 'Indicative distribution: 20 questions',
              topics: [
                'Current affairs in science and technology',
                'Sports',
                'Culture',
                'Personalities',
                'Economics',
                'Politics',
                'Other subjects of importance',
              ],
            },
          ],
        },
        {
          type: 'callout',
          heading: 'Qualifying benchmark',
          text: 'The verified CEN extraction gives minimum shortlisting percentages of **40% for UR and EWS** and **30% for OBC (Non-Creamy Layer), SC and ST**. A relaxation of 2 marks may be used for PwBD candidates if there is a shortage against PwBD-reserved vacancies.',
        },
        {
          type: 'sourceNote',
          heading: 'Official source',
          text: 'Source: Railway Recruitment Boards, Centralised Employment Notification CEN 09/2025 for Level-1 posts. The original notice was verified from an archived copy of the official RRB document. Current corrigenda must also be checked before application.',
          sourceLabel: 'View archived official CEN 09/2025 notice',
          sourceUrl: RRB_GROUP_D_ARCHIVED_CEN_URL,
          tone: 'plain',
        },
      ],
    },
    eligibility: {
      title: 'RRB Group D Eligibility 2026: Age & Qualification',
      description:
        'RRB Group D CEN 09/2025 eligibility covering the 18 to 33 year age band, community date-of-birth windows, additional relaxations and post-specific qualifications.',
      heading: 'RRB Group D Eligibility 2026',
      blocks: [
        {
          type: 'callout',
          heading: 'Eligibility at a glance',
          text: 'The verified CEN 09/2025 extraction gives a base age band of **18 to 33 years as on 1 January 2026**. Educational qualification is post-specific under Annexure A and must have been held by **2 March 2026**, the qualification cut-off stated in paragraph 6.0 of the detailed CEN.',
        },
        {
          type: 'keyValueGrid',
          heading: 'Community date-of-birth window',
          note: 'The notice builds community relaxation into these date-of-birth windows rather than presenting only a flat age addition.',
          items: [
            { label: 'UR / EWS', value: 'Not earlier than 2 January 1993 and not later than 1 January 2008' },
            { label: 'OBC (Non-Creamy Layer)', value: 'Not earlier than 2 January 1990 and not later than 1 January 2008' },
            { label: 'SC / ST', value: 'Not earlier than 2 January 1988 and not later than 1 January 2008' },
          ],
        },
        {
          type: 'keyValueGrid',
          heading: 'Additional age-relaxation rules',
          note: 'If a candidate is eligible for age relaxation on more than one ground, the CEN allows the maximum applicable relaxation only; relaxations are not cumulative.',
          items: [
            {
              label: 'Ex-servicemen with at least 6 months of service',
              value: 'Service period is deducted first; additional relaxation varies by category under the CEN rules',
            },
            { label: 'PwBD UR / EWS', value: '10 years' },
            { label: 'PwBD OBC (Non-Creamy Layer)', value: '13 years' },
            { label: 'PwBD SC / ST', value: '15 years' },
            {
              label: 'Serving Group C / erstwhile Group D railway staff with 3+ years service',
              value: 'Maximum age 40 UR/EWS, 43 OBC-NCL, 45 SC/ST',
            },
            { label: 'Quasi-administrative railway office staff', value: 'Up to length of service or 5 years, whichever is less' },
            {
              label: 'Widowed / divorced / judicially separated women not remarried',
              value: 'Maximum age 35 UR, 38 OBC-NCL, 40 SC/ST',
            },
            {
              label: 'Course-Completed Act Apprentices / Apprentices Act candidates',
              value: 'Relaxation is tied to the completed training period and category caps specified in the notice',
            },
          ],
        },
        {
          type: 'paragraph',
          heading: 'Reservation and relaxation caution',
          text: 'The supplied extraction states that SC, ST and OBC-NCL candidates applying against UR vacancies do not receive community age relaxation. PwBD candidates applying against UR vacancies receive only the PwBD(UR) relaxation.',
        },
        {
          type: 'infoBlocks',
          heading: 'Educational qualification',
          items: [
            {
              title: 'Post-specific qualification',
              text: 'The required qualification is defined post by post in Annexure A of CEN 09/2025.',
            },
            {
              title: 'Qualification must already be held',
              text: 'Candidates awaiting final examination results should not apply. Paragraph 6.0 of the detailed CEN requires the prescribed qualification to have been held by **2 March 2026**. Corrigendum 4 later extended the online application-submission deadline to **9 March 2026** but stated that all other terms and conditions remained unchanged.',
            },
            {
              title: 'Engineering qualification substitution',
              text: 'A Diploma or Degree in Engineering is not accepted in place of Course Completed Act Apprenticeship or ITI for Level-1 posts unless the post specifically permits it.',
            },
          ],
        },
        {
          type: 'paragraph',
          heading: 'Nationality',
          text: 'Eligible categories are a citizen of India, a citizen of Nepal, a subject of Bhutan, a Tibetan refugee who came to India before **1 January 1962** intending permanent settlement, or a specified person of Indian origin who migrated from the countries listed in CEN 09/2025 intending permanent settlement. Candidates in the categories that require a Government of India eligibility certificate must satisfy that requirement; the certificate is required at Document Verification.',
        },
        {
          type: 'sourceNote',
          heading: 'Official source',
          text: 'Source: Railway Recruitment Boards, CEN 09/2025 for Level-1 posts, read with Corrigendum 4 dated 2 March 2026. Nationality and the qualification cut-off were checked against the official detailed CEN.',
          sourceLabel: 'View the current official RRB CEN 09/2025 page',
          sourceUrl: RRB_GROUP_D_CURRENT_LISTING_URL,
          tone: 'plain',
        },
      ],
    },
    'selection-process': {
      title: 'RRB Group D Selection Process 2026: CBT, PET, DV & Medical',
      description:
        'RRB Group D CEN 09/2025 selection process from the Computer Based Test to qualifying PET, Document Verification and Medical Examination.',
      heading: 'RRB Group D Selection Process 2026',
      blocks: [
        {
          type: 'callout',
          heading: 'How selection works',
          text: 'CEN 09/2025 provides for a Computer Based Test followed by a **qualifying Physical Efficiency Test**, Document Verification and Medical Examination. Railway Administration may conduct the CBT in single-stage or multi-stage mode.',
        },
        {
          type: 'numberedStages',
          heading: 'Stage-by-stage process',
          items: [
            {
              title: 'Computer Based Test',
              text: 'Candidates first take the CBT. If Railway Administration conducts a second-stage CBT, the first stage may be treated as qualifying only for shortlisting.',
            },
            {
              title: 'Physical Efficiency Test',
              text: 'Candidates are called for the qualifying PET based on CBT merit, at roughly three times the community-wise vacancy count according to the verified CEN extraction.',
            },
            {
              title: 'Document Verification',
              text: 'Candidates who clear the required preceding stages are called for verification of their original eligibility, category and qualification documents.',
            },
            {
              title: 'Medical Examination',
              text: 'Candidates must meet the medical standard prescribed for the relevant Level-1 post before appointment.',
            },
          ],
        },
        {
          type: 'sourceNote',
          heading: 'Official source',
          text: 'Source: Railway Recruitment Boards, CEN 09/2025 for recruitment to Level-1 posts. Final selection requirements remain subject to the official notice and subsequent corrigenda.',
          sourceLabel: 'View archived official CEN 09/2025 notice',
          sourceUrl: RRB_GROUP_D_ARCHIVED_CEN_URL,
          tone: 'plain',
        },
      ],
    },
  },
};

export function getExamGuide(examSlug: string, pageType: GuidePageType): ExamGuidePage | undefined {
  return EXAM_GUIDES[examSlug]?.[pageType];
}
