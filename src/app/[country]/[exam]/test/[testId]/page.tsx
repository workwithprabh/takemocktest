import Link from 'next/link';
import { EXAM_LIST, getExam, getAllTestSlugs, getTestConfig, testIdToName } from '@/lib/exams';
import { getQuestionsForTest } from '@/lib/questions';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, SITE_NAME, SITE_URL } from '@/lib/schema';
import Breadcrumbs from '@/components/Breadcrumbs';

export function generateStaticParams() {
  return EXAM_LIST.flatMap((exam) =>
    getAllTestSlugs(exam).map((testId) => ({ exam: exam.slug, testId }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; exam: string; testId: string }>;
}) {
  const { country, exam: examSlug, testId } = await params;
  const exam = getExam(examSlug);
  if (!exam) return {};
  const configuredTest = getTestConfig(exam, testId);
  const testName = configuredTest?.test.name ?? testIdToName(testId);
  const isFullMock = configuredTest?.test.kind === 'full-length';
  const cycle = configuredTest?.stage.pattern.cycle ?? new Date().getFullYear();
  const questionCount = getQuestionsForTest(examSlug, testId).length;
  const conciseTestName = testName.replace(' Objective Full Mock Test', ' Mock Test');
  return pageMetadata({
    title: isFullMock
      ? `${exam.name} ${conciseTestName} (${cycle}) — Free Online Test`
      : `${exam.name} ${testName} — Instructions`,
    description: isFullMock
      ? `Attempt ${exam.name} ${testName}: ${questionCount} questions, exam-pattern timing, negative marking, instant results, and topic-wise analysis.`
      : `Review the timing, question count, and negative-marking instructions for ${exam.name} ${testName}.`,
    path: `/${country}/${exam.slug}/test/${testId}`,
    noIndex: !isFullMock,
  });
}

const BASE_INSTRUCTIONS = [
  'Each wrong answer deducts marks using the scoring rule shown above. Unattempted questions score zero.',
  'You can mark a question for review and come back to it later using the question palette.',
  'The timer starts as soon as you click "Start test" and the test auto-submits when time runs out.',
  'You can review your answers and explanations for every question immediately after submitting.',
];

const SSC_TIER1_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official SSC question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official SSC CGL Tier 1 syllabus and pattern.',
  },
  {
    question: 'How do the sectional timers work?',
    answer: 'Each of the four sections has 15 minutes. When a section ends, it locks automatically and the next section begins.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. A correct answer earns 2 marks, a wrong answer deducts 0.5 marks, and an unattempted question scores zero.',
  },
  {
    question: 'Do I need an account to attempt the mock?',
    answer: 'No. You can start immediately without signing up, and the result is stored only on your current device.',
  },
];

const RRB_NTPC_CBT1_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official RRB NTPC question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official RRB NTPC CBT 1 syllabus and pattern.',
  },
  {
    question: 'Is there a separate timer for each CBT 1 section?',
    answer: 'No. Unlike SSC CGL, RRB NTPC CBT 1 uses a single 90-minute timer for all three sections combined, with no sectional lock — you can move between Mathematics, Reasoning, and General Awareness questions freely.',
  },
  {
    question: 'Do CBT 1 marks count towards the final RRB NTPC merit list?',
    answer: 'No. CBT 1 is qualifying in nature — its marks are not carried forward. The final merit list is decided by CBT 2.',
  },
  {
    question: 'Is there negative marking in RRB NTPC CBT 1?',
    answer: 'Yes. A correct answer earns 1 mark, and a wrong answer deducts one-third (0.333) of a mark. Unattempted questions score zero.',
  },
  {
    question: 'Do I need an account to attempt the mock?',
    answer: 'No. You can start immediately without signing up, and the result is stored only on your current device.',
  },
];

const IBPS_PO_MAINS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official IBPS question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official IBPS PO Mains syllabus and pattern.',
  },
  {
    question: 'Does this mock include the Descriptive Paper?',
    answer: 'No. This mock covers only the 170 objective, multiple-choice questions (Reasoning; General, Economy, Banking, Digital and Financial Awareness; English Language; and Data Analysis and Interpretation). The 25-mark Descriptive Paper is an essay-and-comprehension format, not multiple-choice, so it is not included here.',
  },
  {
    question: 'How does scoring work for Mains?',
    answer: 'Each objective question carries a share of its section\'s official mark total, and each wrong answer deducts one-fourth of that question\'s marks. Unattempted questions score zero.',
  },
  {
    question: 'Do I need an account to attempt the mock?',
    answer: 'No. You can start immediately without signing up, and the result is stored only on your current device.',
  },
];

const SSC_CHSL_TIER1_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official SSC question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official SSC CHSL Tier 1 syllabus and pattern.',
  },
  {
    question: 'Does SSC CHSL Tier 1 have sectional timers like SSC CGL?',
    answer: 'No. SSC CHSL Tier 1 currently uses a single 60-minute timer for all four sections combined, with no sectional lock.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. A correct answer earns 2 marks, a wrong answer deducts 0.5 marks, and an unattempted question scores zero.',
  },
  {
    question: 'Do I need an account to attempt the mock?',
    answer: 'No. You can start immediately without signing up, and the result is stored only on your current device.',
  },
];

const IBPS_CLERK_PRELIMS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official IBPS question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official IBPS Clerk Prelims syllabus and pattern.',
  },
  {
    question: 'Do Prelims marks count towards the final IBPS Clerk merit list?',
    answer: 'No. Prelims marks are used only to shortlist candidates for Mains. The final merit list is decided by the Mains examination.',
  },
  {
    question: 'How do the sectional timers work?',
    answer: 'Each of the three sections (English Language, Numerical Ability, Reasoning Ability) has its own 20-minute timer. When a section ends, it locks automatically and the next section begins.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. Each correct answer earns 1 mark, and a wrong answer deducts one-fourth of a mark. Unattempted questions score zero.',
  },
  {
    question: 'Do I need an account to attempt the mock?',
    answer: 'No. You can start immediately without signing up, and the result is stored only on your current device.',
  },
];

const RRB_GROUP_D_CBT_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official RRB question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official RRB Group D CBT syllabus and pattern.',
  },
  {
    question: 'Is there a separate timer for each CBT section?',
    answer: 'No. The RRB Group D CBT uses a single 90-minute timer for all four sections combined, with no sectional lock — you can move between General Science, Mathematics, Reasoning, and General Awareness questions freely.',
  },
  {
    question: 'What comes after the CBT in the selection process?',
    answer: 'Candidates who qualify the CBT proceed to a Physical Efficiency Test (PET), which is qualifying only and not a written exam, followed by Document Verification and a Medical Examination.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. A correct answer earns 1 mark, and a wrong answer deducts one-third (0.333) of a mark. Unattempted questions score zero.',
  },
  {
    question: 'Do I need an account to attempt the mock?',
    answer: 'No. You can start immediately without signing up, and the result is stored only on your current device.',
  },
];

const SBI_PO_PRELIMS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official SBI question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official SBI PO Prelims syllabus and pattern.',
  },
  {
    question: 'Do Prelims marks count towards the final SBI PO merit list?',
    answer: 'No. SBI PO Prelims is qualifying in nature — Prelims marks are used only to shortlist candidates for Mains. The final merit list is decided by Mains and the interview stage.',
  },
  {
    question: 'How do the sectional timers work?',
    answer: 'Each of the three sections (English Language, Quantitative Aptitude, Reasoning Ability) has its own 20-minute timer. When a section ends, it locks automatically and the next section begins.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. Each correct answer earns 1 mark, and a wrong answer deducts one-fourth of a mark. Unattempted questions score zero.',
  },
  {
    question: 'Do I need an account to attempt the mock?',
    answer: 'No. You can start immediately without signing up, and the result is stored only on your current device.',
  },
];

const RBI_ASSISTANT_PRELIMS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official RBI question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official RBI Assistant Prelims syllabus and pattern.',
  },
  {
    question: 'Do Prelims marks count towards the final RBI Assistant merit list?',
    answer: 'No. RBI Assistant Prelims is qualifying in nature — candidates must clear both the sectional and overall cut-offs. The final merit list is decided by Mains and the Language Proficiency Test.',
  },
  {
    question: 'How do the sectional timers work?',
    answer: 'Each of the three sections (English Language, Numerical Ability, Reasoning Ability) has its own 20-minute timer. When a section ends, it locks automatically and the next section begins.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. Each correct answer earns 1 mark, and a wrong answer deducts one-fourth of a mark. Unattempted questions score zero.',
  },
  {
    question: 'Do I need an account to attempt the mock?',
    answer: 'No. You can start immediately without signing up, and the result is stored only on your current device.',
  },
];

const SSC_MTS_CBT_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official SSC question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official SSC MTS & Havaldar syllabus and pattern.',
  },
  {
    question: 'How does the negative marking work?',
    answer: 'SSC MTS has a two-session structure. Session 1 (Numerical and Mathematical Ability, Reasoning Ability and Problem Solving) has no negative marking. Session 2 (General Awareness, English Language and Comprehension) deducts 1 mark for each wrong answer. This mock combines both sessions under one continuous timer for practice; the real exam runs them as two separately timed sessions.',
  },
  {
    question: 'Do Prelims marks count towards the final merit list?',
    answer: 'Only candidates who qualify Session 1 have Session 2 evaluated, and both sessions together decide shortlisting for the Physical Efficiency Test (Havaldar) or final selection (MTS) — there is no separate Mains stage.',
  },
  {
    question: 'Do I need an account to attempt the mock?',
    answer: 'No. You can start immediately without signing up, and the result is stored only on your current device.',
  },
];

const IBPS_RRB_OFFICE_ASSISTANT_PRELIMS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official IBPS question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official IBPS RRB Office Assistant (Multipurpose) Prelims syllabus and pattern.',
  },
  {
    question: 'Do Prelims marks count towards the final merit list?',
    answer: 'No. IBPS RRB Office Assistant Prelims is qualifying in nature — candidates must clear both the sectional and overall cut-offs. The final merit list is decided by Mains.',
  },
  {
    question: 'How does the timer work?',
    answer: 'Both sections (Reasoning and Numerical Ability) share one combined 45-minute timer — there is no sectional lock, unlike SBI PO or IBPS PO Prelims. You can move freely between questions from either section.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. Each correct answer earns 1 mark, and a wrong answer deducts one-fourth of a mark. Unattempted questions score zero.',
  },
  {
    question: 'Do I need an account to attempt the mock?',
    answer: 'No. You can start immediately without signing up, and the result is stored only on your current device.',
  },
];

const SSC_GD_CONSTABLE_CBE_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official SSC question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official SSC Constable (GD) 2026 syllabus and pattern.',
  },
  {
    question: 'How many questions and marks does the real CBE have?',
    answer: '80 questions for 160 marks — 2 marks per question — split evenly across 4 sections of 20 questions each: General Intelligence and Reasoning, General Knowledge and General Awareness, Elementary Mathematics, and English/Hindi.',
  },
  {
    question: 'How does the timer work?',
    answer: 'All four sections share one combined 60-minute timer — there is no sectional lock. You can move freely between questions from any section during the attempt.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. 0.25 marks are deducted for each wrong answer. Unattempted questions score zero.',
  },
  {
    question: 'What level are the questions set at?',
    answer: "Matriculation (Class 10) level, per the official notice — noticeably more basic than a graduate-level exam like SSC CGL, so don't expect Tier-1-style difficulty here.",
  },
  {
    question: 'Does clearing the CBE mean I get the job?',
    answer: 'No. The CBE is only the first stage. Shortlisted candidates then go through a Physical Efficiency Test (PET), Physical Standard Test (PST), Detailed Medical Examination, and Document Verification — none of which are objective/written, so they are outside the scope of this mock.',
  },
  {
    question: 'Do I need an account to attempt the mock?',
    answer: 'No. You can start immediately without signing up, and the result is stored only on your current device.',
  },
];

const IBPS_RRB_OFFICER_SCALE_1_PRELIMS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official IBPS question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official IBPS RRB Officer Scale I (PO) Prelims syllabus and pattern.',
  },
  {
    question: 'How is this different from the IBPS RRB Office Assistant mock on this site?',
    answer: 'Same official notification and same composite-timer structure (80 questions, 45 minutes, no sectional lock), but the two posts are recruited separately with their own question difficulty — Officer Scale I is a graduate-entry officer post, so its Quantitative Aptitude and Reasoning questions are pitched noticeably harder than the Office Assistant (clerical) level.',
  },
  {
    question: 'Do Prelims marks count towards the final merit list?',
    answer: 'No. IBPS RRB Officer Scale I Prelims is qualifying only — candidates must clear both the sectional and overall cut-offs. The final merit list is decided by Mains and, for this post, a subsequent interview.',
  },
  {
    question: 'How does the timer work?',
    answer: 'Both sections (Reasoning and Quantitative Aptitude) share one combined 45-minute timer — there is no sectional lock. You can move freely between questions from either section.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. Each correct answer earns 1 mark, and a wrong answer deducts one-fourth of a mark. Unattempted questions score zero.',
  },
  {
    question: 'Do I need an account to attempt the mock?',
    answer: 'No. You can start immediately without signing up, and the result is stored only on your current device.',
  },
];

const SBI_CLERK_PRELIMS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official SBI question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official SBI Junior Associate (Clerk) Prelims syllabus and pattern.',
  },
  {
    question: 'How does the timer work?',
    answer: 'Unlike the composite-timer exams on this site, SBI Clerk Prelims locks each of its 3 sections to its own 20-minute window — English Language, then Numerical Ability, then Reasoning Ability. You cannot move between sections or return to a completed one once its timer ends.',
  },
  {
    question: 'Do Prelims marks count towards the final merit list?',
    answer: 'No. SBI Clerk Prelims is qualifying only. The final merit list is decided by Mains marks alone, subject to clearing a local-language test.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. Each correct answer earns 1 mark, and a wrong answer deducts one-fourth of a mark. Unattempted questions score zero.',
  },
  {
    question: 'Do I need an account to attempt the mock?',
    answer: 'No. You can start immediately without signing up, and the result is stored only on your current device.',
  },
];

const RRB_JE_CBT1_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official RRB question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official RRB Junior Engineer / DMS / CMA CBT-I syllabus and pattern.',
  },
  {
    question: 'Is there a separate timer for each CBT-I section?',
    answer: 'No. RRB JE CBT-I uses a single 90-minute timer for all four sections combined, with no sectional lock — you can move between Mathematics, General Intelligence and Reasoning, General Awareness, and General Science questions freely.',
  },
  {
    question: 'Does CBT-I decide the final RRB JE merit list?',
    answer: 'No. CBT-I is a common screening test used to shortlist candidates for CBT-II, which is discipline/branch-specific. The final merit is based on CBT-II, followed by Document Verification and a Medical Examination.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. A correct answer earns 1 mark, and a wrong answer deducts one-third (0.333) of a mark. Unattempted questions score zero.',
  },
  {
    question: 'Do I need an account to attempt the mock?',
    answer: 'No. You can start immediately without signing up, and the result is stored only on your current device.',
  },
];

const UPSC_CSE_PAPER1_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official UPSC question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official UPSC Civil Services Preliminary Examination syllabus for General Studies Paper I.',
  },
  {
    question: 'Is GS Paper I divided into separately timed sections?',
    answer: 'No. Like the real exam, GS Paper I uses a single 120-minute timer for the whole paper — there is no sectional lock between History, Geography, Polity, Economy, Environment, Science, and Current Affairs questions.',
  },
  {
    question: 'Does UPSC publish an official question-wise split across GS Paper I topics?',
    answer: "No. Unlike SSC or banking exams, UPSC does not publish a fixed number of questions per topic. The section-wise breakdown shown for this mock reflects how its questions are organized for practice, not an official UPSC-published distribution.",
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. Each question carries 2 marks, and a wrong answer deducts one-third (0.667) of a mark. Unattempted questions score zero.',
  },
  {
    question: 'Do GS Paper I marks decide the final Prelims result?',
    answer: 'Yes, in combination with CSAT. GS Paper I marks count towards the qualifying cut-off for the Main Examination, while CSAT (Paper II) is only qualifying at 33%.',
  },
];

const UPSC_CSE_PAPER2_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official UPSC question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official UPSC CSAT (General Studies Paper II) syllabus.',
  },
  {
    question: 'Is CSAT divided into separately timed sections?',
    answer: 'No. Like the real exam, CSAT uses a single 120-minute timer for the whole paper — there is no sectional lock between Comprehension, Logical Reasoning, Decision Making, Mental Ability, and Numeracy questions.',
  },
  {
    question: 'Does CSAT count towards the final Prelims merit?',
    answer: 'No. CSAT (Paper II) is qualifying only — candidates must score at least 33% (66/200) to qualify for the Main Examination. It does not count towards the merit ranking; that is decided by GS Paper I.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. Each question carries 2.5 marks, and a wrong answer deducts one-third (0.833) of a mark. Unattempted questions score zero.',
  },
  {
    question: 'Do I need an account to attempt the mock?',
    answer: 'No. You can start immediately without signing up, and the result is stored only on your current device.',
  },
];

const FULL_MOCK_FAQS: Record<string, typeof SSC_TIER1_FULL_MOCK_FAQS> = {
  'ssc-cgl/tier-1': SSC_TIER1_FULL_MOCK_FAQS,
  'rrb-ntpc/cbt-1': RRB_NTPC_CBT1_FULL_MOCK_FAQS,
  'ibps-po/mains': IBPS_PO_MAINS_FULL_MOCK_FAQS,
  'ssc-chsl/tier-1': SSC_CHSL_TIER1_FULL_MOCK_FAQS,
  'ibps-clerk/prelims': IBPS_CLERK_PRELIMS_FULL_MOCK_FAQS,
  'rrb-group-d/cbt': RRB_GROUP_D_CBT_FULL_MOCK_FAQS,
  'sbi-po/prelims': SBI_PO_PRELIMS_FULL_MOCK_FAQS,
  'rbi-assistant/prelims': RBI_ASSISTANT_PRELIMS_FULL_MOCK_FAQS,
  'ssc-mts/cbt': SSC_MTS_CBT_FULL_MOCK_FAQS,
  'ibps-rrb-office-assistant/prelims': IBPS_RRB_OFFICE_ASSISTANT_PRELIMS_FULL_MOCK_FAQS,
  'ssc-gd-constable/cbe': SSC_GD_CONSTABLE_CBE_FULL_MOCK_FAQS,
  'ibps-rrb-officer-scale-1/prelims': IBPS_RRB_OFFICER_SCALE_1_PRELIMS_FULL_MOCK_FAQS,
  'sbi-clerk/prelims': SBI_CLERK_PRELIMS_FULL_MOCK_FAQS,
  'rrb-je/cbt-1': RRB_JE_CBT1_FULL_MOCK_FAQS,
  'upsc-cse/paper-1': UPSC_CSE_PAPER1_FULL_MOCK_FAQS,
  'upsc-cse/paper-2': UPSC_CSE_PAPER2_FULL_MOCK_FAQS,
};

export default async function TestInstructionsPage({
  params,
}: {
  params: Promise<{ country: string; exam: string; testId: string }>;
}) {
  const { country, exam: examSlug, testId } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();
  const configuredTest = getTestConfig(exam, testId);
  if (!configuredTest) return notFound();

  const questions = getQuestionsForTest(examSlug, testId);
  const questionCount = questions.length;
  const coveredSections = [...new Set(questions.map((question) => question.section))];
  const { stage, test } = configuredTest;
  const isFullMock = test.kind === 'full-length';
  const hasQuizSchema = isFullMock || test.kind === 'quick' || test.kind === 'topic' || test.kind === 'difficulty';
  const fullMockFaqs = isFullMock ? FULL_MOCK_FAQS[`${exam.slug}/${stage.id}`] : undefined;
  const usesQuestionLevelScoring = questions.some(
    (question) => question.marks !== undefined || question.negativeMarking !== undefined,
  );
  const maxScore = Math.round(
    questions.reduce((total, question) => total + (question.marks ?? test.marksPerCorrect), 0) * 100,
  ) / 100;
  const pagePath = `/${country}/${exam.slug}/test/${testId}`;
  const instructions = [
    test.kind === 'sectional'
      ? `This sectional test contains ${questionCount} original ${test.section} questions.`
      : test.kind === 'full-length'
        ? `This full-length mock contains ${questionCount} original questions across ${coveredSections.length} ${stage.name} sections.${
            test.sectionDurations
              ? ` The section timers are ${test.sectionDurations.join(', ')} minutes in the order shown below, and each section locks when its timer ends.`
              : test.sectionDuration
                ? ` Each section has ${test.sectionDuration} minutes and locks when its timer ends.`
                : ''
          }`
        : test.kind === 'difficulty'
          ? `This is a focused ${questionCount}-question practice set drawn only from ${test.section} questions at this difficulty level, syllabus-checked the same as our full mocks.`
          : test.kind === 'topic'
            ? `This is a focused ${questionCount}-question practice set on this ${test.section} topic, syllabus-checked the same as our full mocks.`
            : test.kind === 'quick'
              ? `This is a ${test.duration}-minute quick test with ${questionCount} original questions mixed across ${coveredSections.length} ${stage.name} sections — a fast way to check your pace.`
              : `This is a ${questionCount}-question interface practice demo, not a full mock or previous-year paper.`,
    ...BASE_INSTRUCTIONS,
  ];
  const jsonLd = hasQuizSchema
    ? [
        breadcrumbSchema([
          { name: 'Home', path: `/${country}` },
          { name: exam.name, path: `/${country}/${exam.slug}` },
          { name: 'Mock tests', path: `/${country}/${exam.slug}/mock-test` },
          { name: test.name, path: pagePath },
        ]),
        {
          '@context': 'https://schema.org',
          '@type': 'Quiz',
          name: `${exam.name} ${test.name}`,
          description: isFullMock
            ? `A free ${questionCount}-question ${exam.name} ${stage.name} practice mock with sectional timing and instant results.`
            : `A free ${questionCount}-question ${exam.name} ${stage.name} practice test with instant results.`,
          url: `${SITE_URL}${pagePath}`,
          inLanguage: 'en-IN',
          isAccessibleForFree: true,
          timeRequired: `PT${test.duration}M`,
          educationalLevel: `${exam.name} ${stage.name}`,
          learningResourceType: 'Mock test',
          provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
        },
        ...(fullMockFaqs ? [{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: fullMockFaqs.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: { '@type': 'Answer', text: faq.answer },
          })),
        }] : []),
      ]
    : null;

  return (
    <div className="max-w-2xl mx-auto px-5 py-6">
      {jsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      )}
      <Breadcrumbs items={[
        { label: 'Home', href: `/${country}` },
        { label: exam.name, href: `/${country}/${exam.slug}` },
        { label: 'Mock tests', href: `/${country}/${exam.slug}/mock-test` },
        { label: test.name },
      ]} />
      <h1 className="font-sans font-bold text-2xl mb-1 text-ink-900">{test.name}</h1>
      <p className="text-ink-500 text-sm mb-6">{exam.name} · {exam.fullName}</p>

      <div className="mb-4 border border-ink-200 bg-ink-50 p-4">
        <div className="text-sm font-semibold text-ink-900">
          {test.status === 'checked' ? 'Syllabus-checked original practice' : 'Practice demo'}
        </div>
        <p className="mt-1 text-xs leading-5 text-ink-500">
          {test.status === 'checked'
            ? `Mapped to the official ${stage.name} syllabus and answer-checked on ${test.checkedOn}.`
            : 'This small set demonstrates the test interface and uses demo scoring. It is not an exam-accurate full mock.'}
        </p>
        {test.scoringNote && (
          <p className="mt-2 border-t border-ink-200 pt-2 text-xs leading-5 text-ink-500">
            <strong className="text-ink-900">Scoring note:</strong> {test.scoringNote}
          </p>
        )}
        {test.status === 'checked' && stage.pattern.sourceUrl && (
          <a href={stage.pattern.sourceUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block text-xs font-semibold text-ink-900 underline">
            View official syllabus source
          </a>
        )}
      </div>

      <div className="bg-white border border-ink-200 p-5 grid grid-cols-2 gap-4 mb-6 text-center sm:grid-cols-4">
        <div>
          <div className="font-sans font-bold text-lg text-ink-900">{questionCount}</div>
          <div className="text-xs text-ink-500">Questions</div>
        </div>
        <div>
          <div className="font-sans font-bold text-lg text-ink-900">{test.duration} min</div>
          <div className="text-xs text-ink-500">Duration</div>
        </div>
        <div>
          <div className="font-sans font-bold text-lg text-ink-900">
            {usesQuestionLevelScoring ? 'By question' : `+${test.marksPerCorrect}`}
          </div>
          <div className="text-xs text-ink-500">Per correct answer</div>
        </div>
        <div>
          <div className="font-sans font-bold text-lg text-ink-900">
            {usesQuestionLevelScoring ? 'By question' : `−${test.negativeMarking}`}
          </div>
          <div className="text-xs text-ink-500">Per wrong answer</div>
        </div>
      </div>

      <h2 className="font-sans font-semibold text-sm mb-3 text-ink-900">Instructions</h2>
      <ul className="space-y-2.5 mb-8">
        {instructions.map((item, i) => (
          <li key={i} className="flex gap-2.5 text-sm text-ink-500">
            <span className="flex-shrink-0 w-5 h-5 bg-ink-100 text-ink-700 text-[11px] font-bold flex items-center justify-center mt-0.5">
              {i + 1}
            </span>
            {item}
          </li>
        ))}
      </ul>

      <Link
        href={`/${country}/${exam.slug}/test/${testId}/attempt`}
        className="block text-center bg-ink-900 text-white font-semibold text-sm px-4 py-3.5 hover:bg-ink-700 transition"
      >
        Start test
      </Link>

      {isFullMock && (
        <div className="mt-12 border-t border-ink-200 pt-10">
          <section className="mb-10">
            <h2 className="mb-3 text-xl font-bold text-ink-900">About this {exam.name} {stage.name} mock test</h2>
            <p className="text-sm leading-7 text-ink-500">
              This free mock contains {questionCount} original practice questions mapped to the {exam.name}{' '}
              {stage.name} syllabus and pattern. Every checked answer includes an explanation and a source record.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-xl font-bold text-ink-900">What the test covers</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {coveredSections.map((section, sectionIndex) => (
                <div key={section} className="border border-ink-200 bg-white p-4">
                  <h3 className="text-sm font-semibold text-ink-900">{section}</h3>
                  <p className="mt-1 text-xs leading-5 text-ink-500">
                    {questions.filter((question) => question.section === section).length} questions
                    {test.sectionDurations?.[sectionIndex]
                      ? ` · ${test.sectionDurations[sectionIndex]} minutes`
                      : test.sectionDuration ? ` · ${test.sectionDuration} minutes` : ''}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="mb-3 text-xl font-bold text-ink-900">Scoring and result analysis</h2>
            <p className="text-sm leading-7 text-ink-500">
              {usesQuestionLevelScoring
                ? `Each question uses its assigned marks and penalty; together they total ${maxScore} marks.`
                : `Correct answers earn ${test.marksPerCorrect} marks and wrong answers deduct ${test.negativeMarking} marks.`}{' '}
              Unattempted questions score zero. After submitting, you receive section-wise and topic-wise
              accuracy, time spent, answer explanations, and source links.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <Link href={`/${country}/${exam.slug}/exam-pattern`} className="font-semibold text-ink-900 underline">
                View the {exam.name} exam pattern
              </Link>
              <Link href={`/${country}/${exam.slug}/mock-test`} className="font-semibold text-ink-900 underline">
                Browse all {exam.name} tests
              </Link>
            </div>
          </section>

          {fullMockFaqs && (
            <section>
              <h2 className="mb-4 text-xl font-bold text-ink-900">Frequently asked questions</h2>
              <div className="space-y-3">
                {fullMockFaqs.map((faq) => (
                  <details key={faq.question} className="border border-ink-200 bg-white p-4">
                    <summary className="cursor-pointer text-sm font-semibold text-ink-900">{faq.question}</summary>
                    <p className="mt-2 text-sm leading-6 text-ink-500">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
