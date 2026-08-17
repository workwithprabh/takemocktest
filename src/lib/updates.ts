// Verified exam updates only. Every entry must point to a primary official
// source and record when that source was checked.

export type UpdateCategory =
  | 'Notification'
  | 'Application'
  | 'Exam Date'
  | 'Schedule'
  | 'Corrigendum'
  | 'City Intimation'
  | 'Admit Card'
  | 'Answer Key'
  | 'Response Sheet'
  | 'Result'
  | 'Scorecard'
  | 'Cutoff'
  | 'Counselling';

export interface UpdateEntry {
  slug: string;
  examSlug: string;
  examName: string;
  goal: string;
  category: UpdateCategory;
  headline: string;
  summary: string;
  publishedAt: string;
  modifiedAt: string;
  status: string;
  sourceName: string;
  sourceUrl: string;
  sourceCheckedOn: string;
  sourceReference?: string;
  importantDates?: { label: string; date: string }[];
  actions: string[];
}

export const UPDATE_CATEGORY_STYLES: Record<UpdateCategory, string> = {
  Notification: 'bg-ink-100 text-ink-700',
  Application: 'bg-ink-100 text-ink-700',
  'Exam Date': 'bg-ink-100 text-ink-700',
  Schedule: 'bg-ink-100 text-ink-700',
  Corrigendum: 'bg-ink-100 text-ink-700',
  'City Intimation': 'bg-ink-100 text-ink-700',
  'Admit Card': 'bg-ink-100 text-ink-700',
  'Answer Key': 'bg-ink-100 text-ink-700',
  'Response Sheet': 'bg-ink-100 text-ink-700',
  Result: 'bg-ink-100 text-ink-700',
  Scorecard: 'bg-ink-100 text-ink-700',
  Cutoff: 'bg-ink-100 text-ink-700',
  Counselling: 'bg-ink-100 text-ink-700',
};

export const UPDATES: UpdateEntry[] = [
  {
    slug: 'ssc-selection-post-phase-14-vocational-instructor-corrigendum-2026',
    examSlug: 'ssc-selection-post',
    examName: 'SSC Selection Post',
    goal: 'Government Jobs',
    category: 'Corrigendum',
    headline: 'SSC publishes Phase XIV corrigendum for Vocational Instructor posts',
    summary: 'The Staff Selection Commission published a correction covering the Vocational Instructor post codes NR11526 to NE14426 under the Phase XIV/2026 Selection Posts examination.',
    publishedAt: '2026-07-20',
    modifiedAt: '2026-07-20',
    status: 'Published',
    sourceName: 'Staff Selection Commission',
    sourceUrl: 'https://ssc.gov.in/home/notice-board',
    sourceCheckedOn: '2026-08-17',
    sourceReference: 'Phase XIV/2026 Selection Posts notice board entry dated 20 July 2026',
    actions: [
      'Open the official notice board and locate the entry dated 20 July 2026.',
      'If you applied for one of the affected post codes, compare the corrigendum with the original notice.',
    ],
  },
  {
    slug: 'ibps-clerk-csa-15-main-result-chandigarh-2026',
    examSlug: 'ibps-clerk',
    examName: 'IBPS Clerk',
    goal: 'Government Jobs',
    category: 'Result',
    headline: 'IBPS publishes CRP CSA-XV Main result update for Chandigarh',
    summary: 'IBPS published a provisional-allotment result update for the CRP CSA-XV Online Main Examination for the Union Territory of Chandigarh.',
    publishedAt: '2026-07-17',
    modifiedAt: '2026-07-17',
    status: 'Published',
    sourceName: 'Institute of Banking Personnel Selection',
    sourceUrl: 'https://www.ibps.in/index.php/crp-updates/',
    sourceCheckedOn: '2026-08-17',
    sourceReference: 'CRP Updates entry dated 17 July 2026',
    actions: [
      'Use the official IBPS CRP Updates page to open the result notice.',
      'Check the notice details and any document requirements before relying on a third-party summary.',
    ],
  },
  {
    slug: 'ibps-po-crp-16-notification-2026',
    examSlug: 'ibps-po',
    examName: 'IBPS PO',
    goal: 'Government Jobs',
    category: 'Notification',
    headline: 'IBPS releases the CRP PO/MT-XVI notification',
    summary: 'The Institute of Banking Personnel Selection published the Common Recruitment Process notification for Probationary Officers and Management Trainees, CRP PO/MT-XVI.',
    publishedAt: '2026-07-01',
    modifiedAt: '2026-07-01',
    status: 'Published',
    sourceName: 'Institute of Banking Personnel Selection',
    sourceUrl: 'https://www.ibps.in/index.php/crp-updates/',
    sourceCheckedOn: '2026-08-17',
    sourceReference: 'CRP Updates entry dated 1 July 2026',
    actions: [
      'Read the detailed official notification before checking eligibility or applying.',
      'Review the current exam pattern, then use a mock test to identify your starting level.',
    ],
  },
  {
    slug: 'rrb-je-cbt-2-tentative-exam-schedule-2026',
    examSlug: 'rrb-je',
    examName: 'RRB JE',
    goal: 'Government Jobs',
    category: 'Schedule',
    headline: 'RRB publishes the tentative CBT 2 schedule for JE recruitment',
    summary: 'Railway Recruitment Board Chandigarh published a tentative CBT 2 examination schedule for JE, DMS and CMA recruitment under CEN 05/2025.',
    publishedAt: '2026-05-21',
    modifiedAt: '2026-05-21',
    status: 'Exam date passed',
    sourceName: 'Railway Recruitment Board Chandigarh',
    sourceUrl: 'https://www.rrbcdg.gov.in/2025-05-je.php',
    sourceCheckedOn: '2026-08-17',
    sourceReference: 'CEN 05/2025 notice dated 21 May 2026',
    importantDates: [{ label: 'Tentative CBT 2 date', date: '2026-07-02' }],
    actions: [
      'Check the applicable regional RRB website for any later schedule change or corrigendum.',
      'Use the official notice rather than social-media forwards for examination timing.',
    ],
  },
  {
    slug: 'upsc-cds-2-notification-2026',
    examSlug: 'cds',
    examName: 'CDS',
    goal: 'Defence',
    category: 'Notification',
    headline: 'UPSC publishes the CDS II 2026 examination notification',
    summary: 'The Union Public Service Commission published the Combined Defence Services Examination (II), 2026 notification and examination schedule.',
    publishedAt: '2026-05-20',
    modifiedAt: '2026-05-20',
    status: 'Exam upcoming',
    sourceName: 'Union Public Service Commission',
    sourceUrl: 'https://www.upsc.gov.in/exams-related-info/exam-notification/archives',
    sourceCheckedOn: '2026-08-17',
    sourceReference: 'Combined Defence Services Examination (II), 2026',
    importantDates: [
      { label: 'Application deadline', date: '2026-06-11T18:00:00+05:30' },
      { label: 'Examination date', date: '2026-09-13' },
    ],
    actions: [
      'Read the official notification for academy-specific eligibility and paper requirements.',
      'Use the time before the examination to practise against the applicable CDS paper structure.',
    ],
  },
  {
    slug: 'upsc-nda-2-notification-2026',
    examSlug: 'nda',
    examName: 'NDA',
    goal: 'Defence',
    category: 'Notification',
    headline: 'UPSC publishes the NDA and NA II 2026 notification',
    summary: 'UPSC published the National Defence Academy and Naval Academy Examination (II), 2026 notification with the application and examination schedule.',
    publishedAt: '2026-05-20',
    modifiedAt: '2026-05-20',
    status: 'Exam upcoming',
    sourceName: 'Union Public Service Commission',
    sourceUrl: 'https://www.upsc.gov.in/exams-related-info/exam-notification/archives',
    sourceCheckedOn: '2026-08-17',
    sourceReference: 'National Defence Academy and Naval Academy Examination (II), 2026',
    importantDates: [
      { label: 'Application deadline', date: '2026-06-11T18:00:00+05:30' },
      { label: 'Examination date', date: '2026-09-13' },
    ],
    actions: [
      'Check the official notification for age, education and service-specific eligibility.',
      'Review the Mathematics and General Ability Test structure before beginning timed practice.',
    ],
  },
  {
    slug: 'rrb-ntpc-cbt-1-answer-key-response-sheet-2026',
    examSlug: 'rrb-ntpc',
    examName: 'RRB NTPC',
    goal: 'Government Jobs',
    category: 'Response Sheet',
    headline: 'RRB opens the NTPC Graduate CBT 1 response and objection tracker',
    summary: 'RRB Chandigarh published the CBT 1 question-paper, recorded-response and answer-key objection tracker for NTPC Graduate recruitment under CEN 06/2025.',
    publishedAt: '2026-04-06',
    modifiedAt: '2026-04-06',
    status: 'Action window closed',
    sourceName: 'Railway Recruitment Board Chandigarh',
    sourceUrl: 'https://www.rrbcdg.gov.in/2025-06-ntpcg.php',
    sourceCheckedOn: '2026-08-17',
    sourceReference: 'CEN 06/2025 notice dated 6 April 2026',
    importantDates: [{ label: 'Objection window closed', date: '2026-04-12' }],
    actions: [
      'Use the official CEN page to check for any later result or cutoff notice.',
      'Do not enter candidate credentials on links shared through unofficial messages.',
    ],
  },
];

export function formatUpdateDate(date: string): string {
  return new Intl.DateTimeFormat('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(date));
}

export function getLatestUpdates(limit = 5): UpdateEntry[] {
  return [...UPDATES].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt)).slice(0, limit);
}

export function getUpdate(slug: string): UpdateEntry | undefined {
  return UPDATES.find((update) => update.slug === slug);
}

export function getUpdatesForExam(examSlug: string, limit?: number): UpdateEntry[] {
  const updates = getLatestUpdates(UPDATES.length).filter((update) => update.examSlug === examSlug);
  return typeof limit === 'number' ? updates.slice(0, limit) : updates;
}
