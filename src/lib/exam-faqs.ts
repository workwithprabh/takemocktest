import { ExamConfig, StagePattern, describeSections, getCheckedTestCount } from './exams';

// FAQ content generated programmatically from already-verified ExamConfig
// data ("Bucket A" per the SEO FAQ overhaul) so it stays accurate as exams
// are added or re-checked, without hand-authoring per exam. Kept separate
// per page type (hub vs mock-test list) so the same exam doesn't show the
// same questions twice across its pages. See TAKEMOCKTEST_CURRENT_STATUS.md
// SEO audit notes and EXAM_FACT_FAQS below for the researched ("Bucket B")
// counterpart.

export interface Faq {
  q: string;
  a: string;
}

function negativeMarkingFaqAnswer(negativeMarking: StagePattern['negativeMarking'], examName: string): string {
  if (typeof negativeMarking === 'number') {
    return negativeMarking > 0
      ? `Yes. Each incorrect answer deducts ${negativeMarking} mark${negativeMarking === 1 ? '' : 's'} in ${examName}, and an unanswered question scores zero.`
      : `No. ${examName} has no negative marking, and an unanswered question scores zero.`;
  }
  if (typeof negativeMarking === 'string') {
    return `Yes, but the exact deduction in ${examName} depends on the question type rather than one fixed rule. See the exam pattern page for the per-question-type breakdown.`;
  }
  return '';
}

// Hub page (/in/{exam}) FAQ: pattern-level questions.
export function getExamPatternFaqs(exam: ExamConfig): Faq[] {
  const officialStages = exam.stages.filter((stage) => stage.pattern.status === 'official');
  if (officialStages.length === 0) return [];

  const faqs: Faq[] = [];

  if (officialStages.length === 1) {
    const pattern = officialStages[0].pattern;
    if (pattern.totalQuestions && pattern.totalMarks && pattern.duration) {
      faqs.push({
        q: `What is the ${exam.name} exam pattern?`,
        a: `${exam.name} has ${pattern.totalQuestions} questions worth ${pattern.totalMarks} marks in ${pattern.duration} minutes, covering ${describeSections(pattern)}.`,
      });
    }
    if (pattern.negativeMarking !== undefined) {
      faqs.push({
        q: `Is there negative marking in ${exam.name}?`,
        a: negativeMarkingFaqAnswer(pattern.negativeMarking, exam.name),
      });
    }
  } else {
    const stageNames = officialStages.map((stage) => stage.name).join(', ');
    faqs.push({
      q: `How many stages does ${exam.name} have?`,
      a: `${exam.name} is conducted in ${officialStages.length} stages: ${stageNames}. Each stage has its own question count, marks, duration, and negative-marking rules, shown on the exam pattern page.`,
    });
  }

  if (officialStages.some((stage) => stage.pattern.sourceUrl)) {
    faqs.push({
      q: `Does this mock test cover the official ${exam.name} syllabus?`,
      a: `Every test on this site is mapped to the official pattern and syllabus scope linked above, and independently checked before publishing. Granular topic labels beyond the official syllabus are a TakeMockTest preparation map, not an official subtopic list, unless stated otherwise.`,
    });
  }

  return faqs;
}

// Mock-test list page (/in/{exam}/mock-test) FAQ: test-series composition,
// distinct from the hub page's pattern-level questions above so the same
// exam's pages don't repeat each other.
export function getMockTestFaqs(exam: ExamConfig): Faq[] {
  const checked = exam.stages.flatMap((stage) => stage.tests).filter((test) => test.status === 'checked');
  if (checked.length === 0) return [];

  const counts = {
    fullLength: checked.filter((test) => test.kind === 'full-length').length,
    sectional: checked.filter((test) => test.kind === 'sectional').length,
    quick: checked.filter((test) => ['quick', 'practice', 'topic', 'difficulty'].includes(test.kind)).length,
  };
  const parts = [
    counts.fullLength > 0 ? `${counts.fullLength} full-length mock${counts.fullLength === 1 ? '' : 's'}` : '',
    counts.sectional > 0 ? `${counts.sectional} sectional test${counts.sectional === 1 ? '' : 's'}` : '',
    counts.quick > 0 ? `${counts.quick} quick practice test${counts.quick === 1 ? '' : 's'}` : '',
  ].filter(Boolean);
  const breakdown = parts.length > 1 ? `${parts.slice(0, -1).join(', ')}, and ${parts[parts.length - 1]}` : parts[0];

  const faqs: Faq[] = [
    {
      q: `How many ${exam.name} mock tests are available here?`,
      a: `This page currently has ${getCheckedTestCount(exam)} syllabus-checked test${getCheckedTestCount(exam) === 1 ? '' : 's'} for ${exam.name}: ${breakdown}.`,
    },
  ];

  if (exam.stages.some((stage) => stage.pattern.sourceUrl)) {
    faqs.push({
      q: `Are these ${exam.name} tests based on the official pattern?`,
      a: `Yes. Each checked test's question count, marks, duration, and negative marking match the official pattern shown above, with its source and checked date linked.`,
    });
  }

  return faqs;
}

// Bucket B: researched facts (fees, eligibility specifics, application
// windows, permitted attempts) not derivable from ExamConfig. Filled in
// exam by exam from official sources only, with a source URL and checked
// date per entry, per the 2026-08-13 scoped exception in
// TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md. An exam with no entry here
// simply shows no Bucket B questions; nothing is guessed to fill the gap.
export interface FactFaq extends Faq {
  sourceUrl: string;
  checkedOn: string;
}

// Batch 1: reused directly from this repo's own already Hard-QA-approved,
// sourced `EXAM_GUIDES` eligibility pages (src/lib/exam-guides.ts) rather
// than fresh research, since that content already carries an official
// source and is verified. checkedOn reflects the date this reuse was
// checked against the current EXAM_GUIDES content, not a fresh source
// visit. Age/qualification bands are for the standard route only; see each
// exam's /eligibility page for post-specific and relaxation detail.
export const EXAM_FACT_FAQS: Partial<Record<string, FactFaq[]>> = {
  'ssc-cgl': [
    {
      q: 'What is the age limit and qualification for SSC CGL?',
      a: "SSC CGL eligibility depends on the post you choose. Most posts require a bachelor's degree, while the age limit falls within one of four post-specific bands (18-27, 20-30, 18-30, or 18-32 years), both counted as on 1 August 2026. See the eligibility page for the post-wise age band and age relaxation for reserved categories.",
      sourceUrl: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2026.pdf',
      checkedOn: '13 August 2026',
    },
  ],
  'ibps-po': [
    {
      q: 'What is the age limit and qualification for IBPS PO?',
      a: 'A candidate ordinarily needs a recognised graduation degree and must be between 20 and 30 years old. Age is measured on 1 July 2026, and the educational qualification must be held by 21 July 2026.',
      sourceUrl: 'https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf',
      checkedOn: '13 August 2026',
    },
  ],
  'ssc-chsl': [
    {
      q: 'What is the age limit and qualification for SSC CHSL?',
      a: 'The unrelaxed age limit is 18 to 27 years as on 1 January 2026. For most posts, candidates need 12th Standard or an equivalent qualification by 1 January 2026.',
      sourceUrl: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_chsl_2025.pdf',
      checkedOn: '13 August 2026',
    },
  ],
  'sbi-po': [
    {
      q: 'What is the age limit and qualification for SBI PO?',
      a: 'Candidates must be 21 to 30 years old as on 1 April 2026 and hold a recognised graduation degree or an accepted equivalent qualification.',
      sourceUrl: 'https://sbi.bank.in/documents/77530/57941/18062026_1_Detailed_Adv.2026.pdf/1f1a9532-8a2f-6e59-08a0-616d62a497b1?t=1781759726353',
      checkedOn: '13 August 2026',
    },
  ],
  'ibps-clerk': [
    {
      q: 'What is the age limit and qualification for IBPS Clerk?',
      a: 'Candidates must be 20 to 28 years old as on 1 August 2026 and must hold a recognised graduation degree by the registration cut-off in the notification.',
      sourceUrl: 'https://www.ibps.in/wp-content/uploads/Notification_CRP_CSA_XVI-Final.pdf',
      checkedOn: '13 August 2026',
    },
  ],
  'rrb-group-d': [
    {
      q: 'What is the age limit and qualification for RRB Group D?',
      a: 'The base age band is 18 to 33 years as on 1 January 2026. Educational qualification is post-specific and must have been held by 2 March 2026, the qualification cut-off stated in the detailed CEN.',
      sourceUrl: 'https://www.rrbcdg.gov.in/2025-09-level1.php',
      checkedOn: '13 August 2026',
    },
  ],
  'ssc-mts': [
    {
      q: 'What is the age limit and qualification for SSC MTS?',
      a: 'Candidates must have passed Matriculation or an equivalent examination by 1 August 2025. The normal age band is 18 to 25 years for MTS, while Havaldar and a few MTS posts use 18 to 27 years, both measured on 1 August 2025.',
      sourceUrl: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_mts_2025.pdf',
      checkedOn: '13 August 2026',
    },
  ],
  'ssc-gd-constable': [
    {
      q: 'What is the age limit and qualification for SSC GD Constable?',
      a: 'Candidates must be 18 to 23 years old as on 1 January 2026, must be citizens of India, and must have passed Matriculation or Class 10 by 1 January 2026.',
      sourceUrl: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/notice_01122025.pdf',
      checkedOn: '13 August 2026',
    },
  ],
  'sbi-clerk': [
    {
      q: 'What is the age limit and qualification for SBI Clerk (Junior Associate)?',
      a: 'Applicants must be Indian citizens, must be 20 to 28 years old as on 1 April 2025, and must hold a recognised graduation qualification by 31 December 2025.',
      sourceUrl: 'https://sbi.bank.in/documents/77530/52947104/JA+2025+-Detailed+Advt.pdf',
      checkedOn: '13 August 2026',
    },
  ],
  'ssc-cpo': [
    {
      q: 'What is the age limit for SSC CPO?',
      a: 'The standard SSC CPO 2025 age limit is 20 to 25 years as on 1 August 2025 (eligible candidates born between 2 August 2000 and 1 August 2005). Age relaxation applies for reserved categories, ex-servicemen, and specific Delhi Police departmental candidates; see the eligibility page for the full table.',
      sourceUrl: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_capf_2025.pdf',
      checkedOn: '13 August 2026',
    },
  ],

  // Batch 2: fresh research against each exam's own official notification
  // or admissions page, per the 2026-08-13 scoped exception. Age bands are
  // for the unrelaxed general category unless stated otherwise; see each
  // exam's eligibility page for relaxation and post-specific detail.
  'upsc-cse': [
    {
      q: 'What is the age limit and qualification for UPSC CSE?',
      a: 'A candidate must be 21 to 32 years old as on 1 August 2026 and must hold a graduate degree from a university incorporated by an Act of the central or state legislature, or an equivalent recognised qualification. The upper age limit is relaxable by 5 years for SC/ST, 3 years for OBC, and 10 years for PwBD candidates. General/EWS candidates get 6 attempts, OBC gets 9, and SC/ST candidates have no attempt limit.',
      sourceUrl: 'https://www.upsc.gov.in/sites/default/files/Notif-CSP-2026-Engl-060226Rev.pdf',
      checkedOn: '14 August 2026',
    },
  ],
  'nabard-grade-a': [
    {
      q: 'What is the age limit and qualification for NABARD Grade A?',
      a: "Candidates must be 21 to 30 years old as on 1 December 2025 and must hold a bachelor's degree in any discipline from a recognised university.",
      sourceUrl:
        'https://www.nabard.org/auth/writereaddata/CareerNotices/0512255230Final Advertisement Grade A (RDBS, Legal, P&SS) 2025 (1).pdf',
      checkedOn: '14 August 2026',
    },
  ],
  'sebi-grade-a': [
    {
      q: 'What is the age limit and qualification for SEBI Grade A?',
      a: "The upper age limit is 30 years as on 30 September 2025 (candidates must be born on or after 1 October 1995), relaxable by 5 years for SC/ST, 3 years for OBC, and 10 years for PwBD candidates. Candidates need a master's degree or a two-year postgraduate diploma in any discipline, or a bachelor's degree in law or engineering, or a CA/CFA/CS/cost accountant qualification.",
      sourceUrl: 'https://www.sebi.gov.in/sebi_data/careerfiles/oct-2025/1761782417659.pdf',
      checkedOn: '14 August 2026',
    },
  ],
  'sidbi-grade-a-b': [
    {
      q: 'What is the age limit and qualification for SIDBI Grade A?',
      a: "Candidates must be 21 to 30 years old as on 14 July 2025 (born between 14 July 1995 and 15 July 2004). Educational qualification is a graduation in Commerce, Economics, Mathematics, Statistics, Business Administration, or Engineering with a minimum 60% marks (50% for SC/ST/PwBD), or CS/CMA/CFA/CA, or a full-time two-year MBA/PGDM. Graduates under the first two routes also need two years of relevant post-qualification work experience.",
      sourceUrl: 'https://www.sidbi.in/head/uploads/career_document/SIDBI_DETAILED_WEB_ADVT_2025.pdf',
      checkedOn: '14 August 2026',
    },
  ],
  'lic-aao': [
    {
      q: 'What is the age limit and qualification for LIC AAO (Generalist)?',
      a: "Candidates must be 21 to 30 years old as on 1 August 2025 (born between 2 August 1995 and 1 August 2004) and must hold a bachelor's degree in any discipline from a recognised Indian university, with the result declared by 1 August 2025.",
      sourceUrl: 'https://licindia.in/documents/d/guest/aao-generalist-notification-2025-final',
      checkedOn: '14 August 2026',
    },
  ],
  'jee-main': [
    {
      q: 'What is the age limit and qualification for JEE Main?',
      a: "There is no age limit for JEE Main. Candidates must have passed Class 12 (or an equivalent, including a 3-year AICTE diploma) in 2024 or 2025, or be appearing in 2026. There is no minimum marks requirement to sit the exam itself, though separate cutoffs apply for admission to NITs and other centrally funded institutes.",
      sourceUrl:
        'https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/11/202511021649722475.pdf',
      checkedOn: '14 August 2026',
    },
  ],
  bitsat: [
    {
      q: 'What is the age limit and qualification for BITSAT?',
      a: 'There is no age limit for BITSAT. For B.E. programmes (other than Environmental and Sustainability), candidates need Physics, Chemistry, and Mathematics as compulsory Class 12 subjects, with an aggregate of at least 75% across the three and at least 60% in each individually. B.Pharm. and a few other programmes use Physics, Chemistry, and Biology/Mathematics under the same aggregate rule.',
      sourceUrl: 'https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf',
      checkedOn: '14 August 2026',
    },
  ],
  viteee: [
    {
      q: 'What is the age limit and qualification for VITEEE?',
      a: 'Candidates must be born on or after 1 July 2004. For the PCM stream, a minimum aggregate of 60% in Physics, Chemistry, and Mathematics is required, with not less than 50% in Mathematics; the PCB stream needs the same 60% aggregate with Biology in place of Mathematics and at least 50% in Biology. SC/ST candidates and applicants from a few northeastern states need a 50% aggregate instead of 60%.',
      sourceUrl: 'https://viteee.vit.ac.in/',
      checkedOn: '14 August 2026',
    },
  ],
  aeee: [
    {
      q: 'What is the age limit and qualification for AEEE?',
      a: 'AEEE has no stated age limit. Candidates need a Class 12 pass (or equivalent) with a minimum aggregate of 55% in Physics, Chemistry, and Mathematics, and at least 50% in each subject individually.',
      sourceUrl: 'https://aeee.amrita.edu/',
      checkedOn: '14 August 2026',
    },
  ],
};

export function getExamFactFaqs(exam: ExamConfig): FactFaq[] {
  return EXAM_FACT_FAQS[exam.slug] ?? [];
}
