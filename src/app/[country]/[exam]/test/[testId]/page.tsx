import Link from 'next/link';
import { EXAM_LIST, getExam, getAllTestSlugs, getTestConfig, testIdToName } from '@/lib/exams';
import { getQuestionsForTest } from '@/lib/questions';
import { notFound } from 'next/navigation';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, SITE_NAME, SITE_URL, jsonLdHtml } from '@/lib/schema';
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
      ? `${exam.name} ${conciseTestName} (${cycle}): Free Online Test`
      : `${exam.name} ${testName}: Instructions`,
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
    question: 'What is the SSC CGL Tier 1 negative marking scheme?',
    answer: 'A correct answer earns 2 marks, and a wrong answer deducts 0.5 marks. Four wrong answers cancel out one full correct answer. Unattempted questions score zero.',
  },
  {
    question: 'How many questions are there in SSC CGL Tier 1, and how long is the exam?',
    answer: '100 questions for 200 marks in 60 minutes, split across four sections of 25 questions each: General Intelligence and Reasoning, General Awareness, Quantitative Aptitude, and English Comprehension.',
  },
  {
    question: 'Can I move between sections in SSC CGL Tier 1, or is each one timed separately?',
    answer: 'Each section has its own fixed 15-minute timer. Once a section\'s timer ends, it locks automatically and you move to the next one; unused time from one section cannot be carried over to another.',
  },
  {
    question: 'Do SSC CGL Tier 1 marks count towards the final selection?',
    answer: 'No. Tier 1 is qualifying in nature: you need to clear the Tier 1 cutoff to advance, but your final SSC CGL merit is decided by Tier 2, not by your Tier 1 score.',
  },
];

const SSC_CGL_TIER2_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official SSC question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official SSC CGL Tier 2 syllabus and pattern.',
  },
  {
    question: 'What is the SSC CGL Tier 2 negative marking scheme?',
    answer: 'A wrong answer deducts 1 mark in every module this mock covers: Mathematical Abilities, Reasoning and General Intelligence, English Language and Comprehension, General Awareness, and Computer Knowledge Test. Unattempted questions score zero.',
  },
  {
    question: 'How many questions are there in SSC CGL Tier 2, and how long is the exam?',
    answer: '150 questions for 450 marks in 135 minutes, across five sectionally locked modules: Mathematical Abilities (30 questions, 30 minutes), Reasoning and General Intelligence (30 questions, 30 minutes), English Language and Comprehension (45 questions, 40 minutes), General Awareness (25 questions, 20 minutes), and Computer Knowledge Test (20 questions, 15 minutes).',
  },
  {
    question: 'Does this mock include the Data Entry Speed Test (DEST)?',
    answer: 'No. DEST is a separate 15-minute typing test, qualifying in nature, required only for specific posts. It is not a multiple-choice format, so it is not simulated here; this mock covers the five objective modules only.',
  },
  {
    question: 'Can I move between modules in SSC CGL Tier 2, or is each one timed separately?',
    answer: 'Each module has its own fixed timer, matching the official sectional lock. Once a module\'s timer ends, it closes automatically and you move to the next one; unused time cannot be carried over.',
  },
];

const RRB_NTPC_CBT1_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official RRB NTPC question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official RRB NTPC CBT 1 syllabus and pattern.',
  },
  {
    question: 'Is there a separate timer for each CBT 1 section?',
    answer: 'No. Unlike SSC CGL, RRB NTPC CBT 1 uses a single 90-minute timer for all three sections combined, with no sectional lock: you can move between Mathematics, Reasoning, and General Awareness questions freely.',
  },
  {
    question: 'Do CBT 1 marks count towards the final RRB NTPC merit list?',
    answer: 'No. CBT 1 is qualifying in nature: its marks are not carried forward. The final merit list is decided by CBT 2.',
  },
  {
    question: 'Is there negative marking in RRB NTPC CBT 1?',
    answer: 'Yes. A correct answer earns 1 mark, and a wrong answer deducts one-third (0.333) of a mark. Unattempted questions score zero.',
  },
  {
    question: 'Does RRB NTPC CBT 1 use normalization across shifts?',
    answer: 'Yes, when CBT 1 runs across multiple shifts, RRB normalizes each candidate\'s raw score to account for difficulty differences between shifts, so someone in a harder shift isn\'t disadvantaged against someone in an easier one. This mock scores your raw marks directly, since normalization depends on the actual shift-wide difficulty spread on exam day, which no practice test can reproduce.',
  },
];

const IBPS_PO_PRELIMS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official IBPS question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official IBPS PO Prelims syllabus and pattern.',
  },
  {
    question: 'What is the IBPS PO Prelims negative marking scheme?',
    answer: 'Each wrong answer deducts one-fourth of that question\'s marks. Unattempted questions score zero.',
  },
  {
    question: 'Do I need to clear a sectional cutoff in IBPS PO Prelims, or just the overall score?',
    answer: 'Both. IBPS PO Prelims has three separately timed sections, English Language, Quantitative Aptitude, and Reasoning Ability, and you must clear the qualifying cutoff in each one individually, not just the combined total.',
  },
  {
    question: 'How many questions are there in IBPS PO Prelims, and how are the marks split?',
    answer: '100 questions for 100 marks in 60 minutes: English Language (30 questions, 30 marks), Quantitative Aptitude (35 questions, 30 marks), and Reasoning Ability (35 questions, 40 marks). The marks are not split evenly across sections even though two of them have the same number of questions.',
  },
  {
    question: 'Do IBPS PO Prelims marks count towards the final selection?',
    answer: 'No. Prelims is qualifying only, used to shortlist candidates for Mains. Your final IBPS PO score is based on Mains plus the interview, not on your Prelims marks.',
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
];

const RRB_GROUP_D_CBT_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official RRB question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official RRB Group D CBT syllabus and pattern.',
  },
  {
    question: 'Is there a separate timer for each CBT section?',
    answer: 'No. The RRB Group D CBT uses a single 90-minute timer for all four sections combined, with no sectional lock: you can move between General Science, Mathematics, Reasoning, and General Awareness questions freely.',
  },
  {
    question: 'What comes after the CBT in the selection process?',
    answer: 'Candidates who qualify the CBT proceed to a Physical Efficiency Test (PET), which is qualifying only and not a written exam, followed by Document Verification and a Medical Examination.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. A correct answer earns 1 mark, and a wrong answer deducts one-third (0.333) of a mark. Unattempted questions score zero.',
  },
];

const SBI_PO_PRELIMS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official SBI question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official SBI PO Prelims syllabus and pattern.',
  },
  {
    question: 'Do Prelims marks count towards the final SBI PO merit list?',
    answer: 'No. SBI PO Prelims is qualifying in nature: Prelims marks are used only to shortlist candidates for Mains. The final merit list is decided by Mains and the interview stage.',
  },
  {
    question: 'How do the sectional timers work?',
    answer: 'Each of the three sections (English Language, Quantitative Aptitude, Reasoning Ability) has its own 20-minute timer. When a section ends, it locks automatically and the next section begins.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. Each correct answer earns 1 mark, and a wrong answer deducts one-fourth of a mark. Unattempted questions score zero.',
  },
];

const RBI_ASSISTANT_PRELIMS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official RBI question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official RBI Assistant Prelims syllabus and pattern.',
  },
  {
    question: 'Do Prelims marks count towards the final RBI Assistant merit list?',
    answer: 'No. RBI Assistant Prelims is qualifying in nature: candidates must clear both the sectional and overall cut-offs. The final merit list is decided by Mains and the Language Proficiency Test.',
  },
  {
    question: 'How do the sectional timers work?',
    answer: 'Each of the three sections (English Language, Numerical Ability, Reasoning Ability) has its own 20-minute timer. When a section ends, it locks automatically and the next section begins.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. Each correct answer earns 1 mark, and a wrong answer deducts one-fourth of a mark. Unattempted questions score zero.',
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
    answer: 'Only candidates who qualify Session 1 have Session 2 evaluated, and both sessions together decide shortlisting for the Physical Efficiency Test (Havaldar) or final selection (MTS). There is no separate Mains stage.',
  },
];

const IBPS_RRB_OFFICE_ASSISTANT_PRELIMS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official IBPS question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official IBPS RRB Office Assistant (Multipurpose) Prelims syllabus and pattern.',
  },
  {
    question: 'Do Prelims marks count towards the final merit list?',
    answer: 'No. IBPS RRB Office Assistant Prelims is qualifying in nature: candidates must clear both the sectional and overall cut-offs. The final merit list is decided by Mains.',
  },
  {
    question: 'How does the timer work?',
    answer: 'Both sections (Reasoning and Numerical Ability) share one combined 45-minute timer: there is no sectional lock, unlike SBI PO or IBPS PO Prelims. You can move freely between questions from either section.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. Each correct answer earns 1 mark, and a wrong answer deducts one-fourth of a mark. Unattempted questions score zero.',
  },
];

const SSC_GD_CONSTABLE_CBE_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official SSC question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official SSC Constable (GD) 2026 syllabus and pattern.',
  },
  {
    question: 'How many questions and marks does the real CBE have?',
    answer: '80 questions for 160 marks (2 marks per question), split evenly across 4 sections of 20 questions each: General Intelligence and Reasoning, General Knowledge and General Awareness, Elementary Mathematics, and English/Hindi.',
  },
  {
    question: 'How does the timer work?',
    answer: 'All four sections share one combined 60-minute timer: there is no sectional lock. You can move freely between questions from any section during the attempt.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. 0.25 marks are deducted for each wrong answer. Unattempted questions score zero.',
  },
  {
    question: 'What level are the questions set at?',
    answer: "Matriculation (Class 10) level, per the official notice: noticeably more basic than a graduate-level exam like SSC CGL, so don't expect Tier-1-style difficulty here.",
  },
  {
    question: 'Does clearing the CBE mean I get the job?',
    answer: 'No. The CBE is only the first stage. Shortlisted candidates then go through a Physical Efficiency Test (PET), Physical Standard Test (PST), Detailed Medical Examination, and Document Verification, none of which are objective/written, so they are outside the scope of this mock.',
  },
];

const IBPS_RRB_OFFICER_SCALE_1_PRELIMS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official IBPS question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official IBPS RRB Officer Scale I (PO) Prelims syllabus and pattern.',
  },
  {
    question: 'How is this different from the IBPS RRB Office Assistant mock on this site?',
    answer: 'Same official notification and same composite-timer structure (80 questions, 45 minutes, no sectional lock), but the two posts are recruited separately with their own question difficulty: Officer Scale I is a graduate-entry officer post, so its Quantitative Aptitude and Reasoning questions are pitched noticeably harder than the Office Assistant (clerical) level.',
  },
  {
    question: 'Do Prelims marks count towards the final merit list?',
    answer: 'No. IBPS RRB Officer Scale I Prelims is qualifying only: candidates must clear both the sectional and overall cut-offs. The final merit list is decided by Mains and, for this post, a subsequent interview.',
  },
  {
    question: 'How does the timer work?',
    answer: 'Both sections (Reasoning and Quantitative Aptitude) share one combined 45-minute timer: there is no sectional lock. You can move freely between questions from either section.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. Each correct answer earns 1 mark, and a wrong answer deducts one-fourth of a mark. Unattempted questions score zero.',
  },
];

const SBI_CLERK_PRELIMS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official SBI question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official SBI Junior Associate (Clerk) Prelims syllabus and pattern.',
  },
  {
    question: 'How does the timer work?',
    answer: 'Unlike the composite-timer exams on this site, SBI Clerk Prelims locks each of its 3 sections to its own 20-minute window: English Language, then Numerical Ability, then Reasoning Ability. You cannot move between sections or return to a completed one once its timer ends.',
  },
  {
    question: 'Do Prelims marks count towards the final merit list?',
    answer: 'No. SBI Clerk Prelims is qualifying only. The final merit list is decided by Mains marks alone, subject to clearing a local-language test.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. Each correct answer earns 1 mark, and a wrong answer deducts one-fourth of a mark. Unattempted questions score zero.',
  },
];

const RRB_JE_CBT1_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official RRB question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official RRB Junior Engineer / DMS / CMA CBT-I syllabus and pattern.',
  },
  {
    question: 'Is there a separate timer for each CBT-I section?',
    answer: 'No. RRB JE CBT-I uses a single 90-minute timer for all four sections combined, with no sectional lock: you can move between Mathematics, General Intelligence and Reasoning, General Awareness, and General Science questions freely.',
  },
  {
    question: 'Does CBT-I decide the final RRB JE merit list?',
    answer: 'No. CBT-I is a common screening test used to shortlist candidates for CBT-II, which is discipline/branch-specific. The final merit is based on CBT-II, followed by Document Verification and a Medical Examination.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. A correct answer earns 1 mark, and a wrong answer deducts one-third (0.333) of a mark. Unattempted questions score zero.',
  },
];

const UPSC_CSE_PAPER1_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official UPSC question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official UPSC Civil Services Preliminary Examination syllabus for General Studies Paper I.',
  },
  {
    question: 'Is GS Paper I divided into separately timed sections?',
    answer: 'No. Like the real exam, GS Paper I uses a single 120-minute timer for the whole paper: there is no sectional lock between History, Geography, Polity, Economy, Environment, Science, and Current Affairs questions.',
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
    answer: 'No. Like the real exam, CSAT uses a single 120-minute timer for the whole paper: there is no sectional lock between Comprehension, Logical Reasoning, Decision Making, Mental Ability, and Numeracy questions.',
  },
  {
    question: 'Does CSAT count towards the final Prelims merit?',
    answer: 'No. CSAT (Paper II) is qualifying only: candidates must score at least 33% (66/200) to qualify for the Main Examination. It does not count towards the merit ranking; that is decided by GS Paper I.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. Each question carries 2.5 marks, and a wrong answer deducts one-third (0.833) of a mark. Unattempted questions score zero.',
  },
];

const RPF_CONSTABLE_CBT_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official RPF question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official RPF Constable CBT syllabus and pattern.',
  },
  {
    question: 'Is there a separate timer for each CBT section?',
    answer: 'No. RPF Constable CBT uses a single 90-minute timer for all three sections combined, with no sectional lock: you can move between Arithmetic, General Intelligence and Reasoning, and General Awareness questions freely.',
  },
  {
    question: 'What comes after the CBT in the selection process?',
    answer: 'Candidates who qualify the CBT proceed to a Physical Efficiency Test (PET) and Physical Measurement Test (PMT), both qualifying only, followed by Document Verification and a Medical Examination.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. A correct answer earns 1 mark, and a wrong answer deducts one-third (0.333) of a mark. Unattempted questions score zero.',
  },
];

const RPF_SI_CBT_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official RPF question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official RPF Sub-Inspector CBT syllabus and pattern.',
  },
  {
    question: 'How is RPF SI CBT different from RPF Constable CBT?',
    answer: 'Both use the same 120-question, 90-minute, three-section structure with 1/3 negative marking, but RPF SI questions are set at graduation level, since the post itself requires a bachelor\'s degree, while RPF Constable questions are set at a lower standard.',
  },
  {
    question: 'What comes after the CBT in the selection process?',
    answer: 'Candidates who qualify the CBT proceed to a Physical Efficiency Test (PET) and Physical Measurement Test (PMT), both qualifying only, followed by Document Verification.',
  },
  {
    question: 'What is the minimum qualifying percentage in the CBT?',
    answer: 'UR, EWS, and OBC-NCL candidates need 35%, while SC and ST candidates need 30%, as per the official CEN No. RPF 01/2024 notification.',
  },
];

const SSC_JE_PAPER_1_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official SSC JE question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official SSC Junior Engineer Paper I syllabus and pattern.',
  },
  {
    question: 'Does this mock cover the Technical (General Engineering) section?',
    answer: 'No. Paper I, covered here, is common to every candidate regardless of discipline. Paper II is the discipline-specific General Engineering paper (Civil & Structural, Electrical, or Mechanical, depending on your notified stream), and is not modeled on this site since the technical syllabus differs by discipline.',
  },
  {
    question: 'Is Paper I only a qualifying stage, or does it count toward the final result?',
    answer: 'Both Paper I and Paper II are Computer-Based, objective, multiple-choice papers, and their normalized scores together decide the final merit list. There is no separate descriptive paper.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. A correct answer earns 1 mark, and a wrong answer deducts 0.25 marks. Unattempted questions score zero.',
  },
];

const SSC_STENO_CBT_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official SSC Stenographer question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official SSC Stenographer Grade C & D Computer Based Examination syllabus and pattern.',
  },
  {
    question: 'Does this mock cover the Stenography Skill Test?',
    answer: 'No. The Skill Test is a dictation and transcription exercise, not a multiple-choice format, so it cannot be modeled as an MCQ mock. This site covers only the Computer Based Examination, which decides who is shortlisted for the Skill Test.',
  },
  {
    question: 'Is there a separate timer for each section?',
    answer: 'No. All three sections, General Intelligence and Reasoning, General Awareness, and English Language and Comprehension, share a single 120-minute timer with no sectional lock, matching the official exam.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. A correct answer earns 1 mark, and a wrong answer deducts 0.25 marks. Unattempted questions score zero.',
  },
];

const SSC_CHT_PAPER_1_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official SSC Combined Hindi Translators question paper?',
    answer: 'No. This is an independent practice mock with 200 original questions mapped to the official 2026 Paper I syllabus and pattern.',
  },
  {
    question: 'Does SSC CHT Paper I have separate timers for Hindi and English?',
    answer: 'Yes. General Hindi and General English each have a separate 60-minute timer, so unused time from one part cannot be shifted to the other part.',
  },
  {
    question: 'How much negative marking applies in SSC CHT Paper I?',
    answer: 'Each wrong answer deducts 0.25 marks. A correct answer earns 1 mark, while an unattempted question scores zero.',
  },
  {
    question: 'Does this mock include SSC CHT Paper II translation and essays?',
    answer: 'No. Paper II is a 200-mark descriptive test with two translation passages and one essay each in Hindi and English, so an MCQ interface cannot model it accurately.',
  },
  {
    question: 'Do I need an account to attempt the SSC CHT mock?',
    answer: 'No. You can start the 200-question Paper I mock without signing up, and the result is stored only on your current device.',
  },
];

const SSC_SELECTION_POST_CBE_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official SSC Selection Post question paper?',
    answer: 'No. This is an independent practice mock with original questions mapped to the official Phase XIV/2026 Selection Posts syllabus and pattern.',
  },
  {
    question: 'Which SSC Selection Post level should I attempt?',
    answer: 'Choose the level stated for your post code: Matriculation, Higher Secondary (10+2), or Graduation and Above. SSC conducts a separate CBE for each minimum educational qualification level.',
  },
  {
    question: 'How do the sectional timers work?',
    answer: 'Each of the four parts has a separate 15-minute timer. When a part ends it locks, and unused time cannot be moved to another part.',
  },
  {
    question: 'How is the SSC Selection Post CBE scored?',
    answer: 'A correct answer earns 2 marks, a wrong answer deducts 0.50 marks, and an unattempted question scores zero.',
  },
  {
    question: 'Does this mock include post-specific skill tests?',
    answer: 'No. Typing, Data Entry or Computer Proficiency tests apply only to certain post codes and are qualifying unless the post details specify otherwise, so they are not included in this common CBE mock.',
  },
];

const SSC_CPO_PAPER_1_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official SSC CPO question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official SSC CPO Paper 1 syllabus and pattern.',
  },
  {
    question: 'Is there a separate timer for each Paper 1 section?',
    answer: 'Yes. Each of the four sections (General Intelligence and Reasoning, General Knowledge and General Awareness, Quantitative Aptitude, and English Comprehension) has its own separately timed 30-minute window. You cannot shift unused time from one section to another.',
  },
  {
    question: 'What comes after Paper 1 in the selection process?',
    answer: 'Candidates who clear Paper 1 proceed to a Physical Standard Test (PST) and Physical Endurance Test (PET), followed by Paper 2 (English Language and Comprehension) and a Detailed Medical Examination (DME).',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. A correct answer earns 1 mark, and a wrong answer deducts one-quarter (0.25) of a mark. Unattempted questions score zero.',
  },
];

const IBPS_SO_PRELIMS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official IBPS SO question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official IBPS SO Prelims syllabus and pattern.',
  },
  {
    question: 'Is there a separate timer for each Prelims section?',
    answer: 'Yes. Each of the three sections (English Language, Reasoning, and Quantitative Aptitude) has its own separately timed 40-minute window. You cannot shift unused time from one section to another.',
  },
  {
    question: 'Why do English Language questions carry fewer marks?',
    answer: 'Per the official pattern, the 50 English Language questions carry 25 total marks (0.5 marks each), while Reasoning and Quantitative Aptitude carry 1 mark per question. This mock reproduces that exact weighting.',
  },
  {
    question: 'Does this cover every IBPS SO post?',
    answer: 'This mock covers the Prelims pattern shared by IT Officer, Agriculture Field Officer, HR/Personnel Officer, and Marketing Officer (Scale I). The Law Officer and Rajbhasha Adhikari track uses General Awareness instead of Quantitative Aptitude, and is not covered here.',
  },
];

const RBI_GRADE_B_PHASE_1_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official RBI Grade B question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official RBI Grade B Phase I syllabus and pattern for the General cadre.',
  },
  {
    question: 'Is there a separate timer for each Phase I section?',
    answer: 'Yes. Each of the four sections (General Awareness, English Language, Quantitative Aptitude, and Reasoning) has its own separately timed window (25/25/25/45 minutes). You cannot shift unused time from one section to another.',
  },
  {
    question: 'What comes after Phase I in the selection process?',
    answer: 'Candidates who clear the minimum cut-off in each section, and in aggregate, proceed to Phase II, which tests Economic and Social Issues, English (Writing Skills), and Finance and Management, followed by an interview.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. A correct answer earns 1 mark, and a wrong answer deducts one-quarter (0.25) of a mark. Unattempted questions score zero.',
  },
];

const NABARD_GRADE_A_PHASE_1_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official NABARD Grade A question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official NABARD Grade A (RDBS, General) Phase I syllabus and pattern.',
  },
  {
    question: 'Is there a separate timer for each Phase I section?',
    answer: 'No. NABARD Phase I uses a single composite timer of 120 minutes for all eight sections combined, and you can move freely between sections: there is no sectional lock.',
  },
  {
    question: 'What is the difference between the qualifying and merit sections?',
    answer: 'Reasoning, English Language, Computer Knowledge, Quantitative Aptitude, and Decision Making are qualifying only: you must clear a minimum cut-off, but marks in these sections do not count toward ranking. General Awareness, Economic and Social Issues, and Agriculture and Rural Development form the merit section, and marks scored here alone decide shortlisting for Phase II (Mains).',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. A correct answer earns 1 mark, and a wrong answer deducts one-quarter (0.25) of a mark, across every section. Unattempted questions score zero.',
  },
];

const SEBI_GRADE_A_PHASE_1_PAPER_1_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official SEBI Grade A question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official SEBI Officer Grade A Phase I, Paper 1 syllabus and pattern, common to every stream.',
  },
  {
    question: 'Is there a separate timer for each Paper 1 section?',
    answer: 'No. Paper 1 uses a single composite timer of 60 minutes for all four sections combined (General Awareness, English Language, Quantitative Aptitude, and Test of Reasoning) and you can move freely between them. There is no sectional cut-off within Paper 1, only an overall cut-off of 30%.',
  },
  {
    question: 'How does Paper 1 relate to Paper 2?',
    answer: 'Paper 1 and Paper 2 are both part of Phase I but are separately timed blocks, modelled here as two separate tests. Paper 2 tests subject knowledge specific to your recruitment stream (this mock covers the General stream).',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. Each question in Paper 1 carries 1.25 marks, and a wrong answer deducts one-quarter of that (0.3125 marks). Unattempted questions score zero.',
  },
];

const SEBI_GRADE_A_PHASE_1_PAPER_2_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official SEBI Grade A question paper?',
    answer: 'No. It is an independent practice mock containing original questions covering the General stream Paper 2 syllabus: Commerce, Accountancy, Management, Finance, Costing, Companies Act, and Economics.',
  },
  {
    question: 'Is there a separate timer for each Paper 2 subject?',
    answer: 'No. Paper 2 uses a single composite timer of 40 minutes for all seven General stream subjects combined, and you can move freely between them.',
  },
  {
    question: 'Does SEBI publish an official question split across these seven subjects?',
    answer: "No. SEBI does not publish an official question-wise split for Paper 2's General stream subjects. The section breakdown on this site reflects how this mock test's questions are organised, not an official SEBI-published distribution.",
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. Each question in Paper 2 carries 2 marks, and a wrong answer deducts one-quarter of that (0.5 marks). Unattempted questions score zero.',
  },
];

const SIDBI_GRADE_A_B_PHASE_1_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official SIDBI Grade A & B question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official SIDBI Grade A & B Phase I (General stream) syllabus and pattern.',
  },
  {
    question: 'Is there a separate timer for each Phase I section?',
    answer: 'No. Phase I uses a single composite timer of 120 minutes for all seven sections combined, and you can move freely between sections: there is no sectional lock.',
  },
  {
    question: 'What is the difference between the qualifying and merit sections?',
    answer: 'English Language, Reasoning Aptitude, Quantitative Aptitude, and Computer Knowledge are qualifying only: you must clear a minimum cut-off, but marks in these sections do not count toward ranking. General Awareness, MSMEs: Policy, Regulatory and Legal Framework; Finance and Management, and the Stream Specific Test form the merit section, worth 100 of the 200 marks, and marks scored here alone decide shortlisting for Phase II.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. A correct answer earns 1 mark, and a wrong answer deducts one-quarter (0.25) of a mark, across every section. Unattempted questions score zero.',
  },
];

const LIC_AAO_PRELIMS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official LIC AAO question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official LIC AAO (Generalist) Prelims syllabus and pattern.',
  },
  {
    question: 'Does the English Language section count toward my Prelims score?',
    answer: 'It is scored, but those marks are not added to the Prelims ranking. Only Reasoning Ability and Quantitative Aptitude, worth 70 marks combined, decide who advances to Mains, so English Language is qualifying only.',
  },
  {
    question: 'Is there a separate timer for each section?',
    answer: 'Yes. Each of the three sections has its own fixed 20-minute window, and once a section timer ends you cannot go back to it: this is a sectional lock, unlike a single composite timer.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'No. LIC AAO Prelims carries zero negative marking, so a wrong answer costs nothing beyond the mark you missed. Unattempted questions also score zero.',
  },
];

const NIACL_AO_PRELIMS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official NIACL AO question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official NIACL Administrative Officer (Generalist) Prelims syllabus and pattern.',
  },
  {
    question: 'Do my Prelims marks count toward the final selection?',
    answer: 'No. Prelims is used only to shortlist roughly 15 times the number of vacancies for the Main Examination. Prelims marks do not carry forward into the final merit list, which is decided by the Main Examination objective score plus the interview.',
  },
  {
    question: 'Is there a separate timer for each section?',
    answer: 'Yes. Each of the three sections, English Language, Reasoning Ability, and Quantitative Aptitude, has its own fixed 20-minute window, and once a section timer ends you cannot go back to it: this is a sectional lock, unlike a single composite timer.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. A correct answer earns 1 mark, and a wrong answer deducts one-quarter (0.25) of a mark, in every section. Unattempted questions score zero.',
  },
];

const NIACL_AO_MAINS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official NIACL AO question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official NIACL Administrative Officer (Generalist) Main Examination syllabus and pattern.',
  },
  {
    question: 'Does this mock include the Descriptive Test?',
    answer: 'No. The Main Examination also includes a separate 30-minute Descriptive Test (Letter Writing and Essay, 30 marks) that is not multiple-choice, so it is excluded from this mock. Candidates must qualify it, but it does not count toward shortlisting or final selection.',
  },
  {
    question: 'Why do the four sections have different time limits?',
    answer: 'The Main Examination gives Reasoning, English Language, and Quantitative Aptitude 40 minutes each, while General Awareness gets 30 minutes, for a combined 150 minutes across all four sections. Each section is sectional locked, so you cannot borrow time from one section for another.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. A correct answer earns 1 mark, and a wrong answer deducts one-quarter (0.25) of a mark, in every section. Unattempted questions score zero.',
  },
  {
    question: 'How is final selection decided?',
    answer: 'Final selection is based on the consolidated Main Examination objective score plus interview marks. Prelims marks are not part of the final merit list.',
  },
];

const RRB_ALP_CBT1_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official RRB ALP question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official RRB Assistant Loco Pilot First Stage CBT syllabus and pattern.',
  },
  {
    question: 'Do my CBT 1 marks count toward final selection?',
    answer: 'No. CBT 1 is a screening exam only, and its marks are not counted while preparing the final panel. It is used solely to shortlist roughly 15 times the notified vacancies per RRB into CBT 2, based on normalized CBT 1 merit.',
  },
  {
    question: 'Is there a separate timer for each section?',
    answer: 'No. CBT 1 uses a single 60-minute timer for all four sections (Mathematics, Mental Ability, General Science, and General Awareness) combined, so you can move freely between sections within the overall time limit.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. A correct answer earns 1 mark, and a wrong answer deducts one-third (0.33) of a mark. Unattempted questions score zero.',
  },
];

const RRB_ALP_CBT2_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official RRB ALP question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official RRB Assistant Loco Pilot Second Stage CBT Part A syllabus and pattern.',
  },
  {
    question: 'Does this mock include Part B or the CBAT?',
    answer: 'No. Part B is a separate 75-question, 60-minute qualifying test drawn from trade-specific syllabi that differ by each candidate\'s own ITI trade or engineering discipline, so it cannot be modeled as a single common-syllabus mock. The Computer Based Aptitude Test (CBAT) that follows is a psychometric battery, not a knowledge-based test, so it is also excluded here.',
  },
  {
    question: 'Is there a separate timer for each section?',
    answer: 'No. This mock covers Part A only, which uses a single 90-minute timer for all three sections (Mathematics, General Intelligence and Reasoning, and Basic Science and Engineering) combined.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. A correct answer earns 1 mark, and a wrong answer deducts one-third (0.33) of a mark. Unattempted questions score zero.',
  },
  {
    question: 'How is final selection decided?',
    answer: 'Final merit is 70% weightage on Part A of CBT 2 plus 30% weightage on the CBAT score, among candidates who qualify Part B and the CBAT. CBT 1 marks play no role in the final panel.',
  },
];

const RRB_TECHNICIAN_GRADE1_SIGNAL_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official RRB Technician question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official RRB Technician Grade I Signal CBT syllabus and pattern.',
  },
  {
    question: 'Is there a second stage CBT for this post?',
    answer: 'No. There is only one CBT for Technician Grade I Signal. It directly decides shortlisting for Document Verification, which is limited to the number of notified vacancies, so this single test is what determines your entire objective merit.',
  },
  {
    question: 'Is there a separate timer for each section?',
    answer: 'No. All five sections (General Awareness, General Intelligence and Reasoning, Basics of Computers and Applications, Mathematics, and Basic Science and Engineering) share a single 90-minute timer, so you can move freely between sections within the overall time limit.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. A correct answer earns 1 mark, and a wrong answer deducts one-third (0.33) of a mark. Unattempted questions score zero.',
  },
];

const RRB_TECHNICIAN_GRADE3_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official RRB Technician question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official RRB Technician Grade III CBT syllabus and pattern.',
  },
  {
    question: 'Is there a second stage CBT or a skill test for this post?',
    answer: 'No. There is only one CBT for Technician Grade III, with no second-stage CBT or skill test. It directly decides shortlisting for Document Verification, which is limited to the number of notified vacancies.',
  },
  {
    question: 'Is there a separate timer for each section?',
    answer: 'No. All four sections (Mathematics, General Intelligence and Reasoning, General Science, and General Awareness) share a single 90-minute timer, so you can move freely between sections within the overall time limit.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'Yes. A correct answer earns 1 mark, and a wrong answer deducts one-third (0.33) of a mark. Unattempted questions score zero.',
  },
];

const JEE_MAIN_PAPER_1_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official JEE Main question paper?',
    answer: 'No. It is an independent practice mock with 75 original questions mapped to the official JEE Main 2026 Paper 1 syllabus and pattern for B.E. and B.Tech. admission.',
  },
  {
    question: 'What is the JEE Main Paper 1 pattern in this mock?',
    answer: 'Paper 1 has 75 questions for 300 marks in 180 minutes. Mathematics, Physics, and Chemistry each contribute 25 questions and 100 marks under one combined timer.',
  },
  {
    question: 'How are JEE Main numerical-value questions handled?',
    answer: 'Fifteen questions use numerical entry, with 5 in each subject. Enter the nearest integer without units or symbols, matching the official Section B response method.',
  },
  {
    question: 'Is there negative marking in JEE Main Paper 1?',
    answer: 'Yes. Every correct answer earns 4 marks and every incorrect answer deducts 1 mark in both the multiple-choice and numerical-value sections. Unattempted questions score zero.',
  },
  {
    question: 'Which JEE Main session score is used for ranking?',
    answer: 'The best total NTA Score is considered when a candidate appears in more than one 2026 session. This practice result is a raw mock score, not an NTA percentile or rank prediction.',
  },
];

const BITSAT_MATHEMATICS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official or previous-year BITSAT paper?',
    answer: 'No. It is an independent practice mock with 130 original questions mapped to the official BITSAT 2026 Mathematics-variant syllabus and pattern.',
  },
  {
    question: 'What is the BITSAT Mathematics pattern in this mock?',
    answer: 'The standard paper has 130 questions for 390 marks in 180 minutes: Physics 30, Chemistry 30, English Proficiency 10, Logical Reasoning 20, and Mathematics 40.',
  },
  {
    question: 'Can I move between BITSAT sections?',
    answer: 'Yes. This mock uses one composite 180-minute timer with no sectional timer or lock, so you can move among all five sections and change answers before submission.',
  },
  {
    question: 'How is BITSAT scoring calculated?',
    answer: 'Each correct answer earns 3 marks, each incorrect answer deducts 1 mark, and an unattempted question scores zero. The standard maximum is 390 marks.',
  },
  {
    question: 'Does this mock include the optional 12 extra questions?',
    answer: 'No. Full Mock 1 contains only the standard 130-question Mathematics variant and does not implement the optional extra-question flow.',
  },
];

const JEE_ADVANCED_PAPER_1_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official JEE Advanced Paper 1?',
    answer: 'No. It is an independent practice mock with 48 original questions mapped to the official JEE Advanced 2026 Paper 1 syllabus, question types, marks, and timing.',
  },
  {
    question: 'What is the JEE Advanced Paper 1 pattern in this mock?',
    answer: 'Paper 1 has 48 questions for 180 marks in 180 minutes. Each of Mathematics, Physics, and Chemistry contains 4 single-correct, 4 multi-select, 4 numerical-value, and 4 matching-list questions.',
  },
  {
    question: 'How does partial marking work for multi-select questions?',
    answer: 'Selecting every correct option earns 4 marks. A proper subset of only correct options earns marks equal to the number selected under the official partial-marking rule. Selecting any incorrect option deducts 1 mark.',
  },
  {
    question: 'Are both JEE Advanced papers compulsory?',
    answer: 'Yes. Candidates must appear in both Paper 1 and Paper 2 for their JEE Advanced result to be evaluated. This mock reports a raw practice score, not a rank prediction.',
  },
];

const JEE_ADVANCED_PAPER_2_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official JEE Advanced Paper 2?',
    answer: 'No. It is an independent practice mock with 54 original questions mapped to the official JEE Advanced 2026 Paper 2 syllabus, question types, marks, and timing.',
  },
  {
    question: 'What is the JEE Advanced Paper 2 pattern in this mock?',
    answer: 'Paper 2 has 54 questions for 180 marks in 180 minutes. Each subject contains 4 single-correct, 5 multi-select, 5 numerical-value, and 4 stem-based numerical questions.',
  },
  {
    question: 'Do numerical-value questions have negative marking?',
    answer: 'No. In the official 2026 Paper 2 pattern, the five standalone numerical questions per subject carry 4 marks each and the four stem-based numerical questions carry 2 marks each, with zero penalty for an incorrect answer.',
  },
  {
    question: 'Does this score predict a JEE Advanced rank?',
    answer: 'No. It is a raw practice score for this original mock. JEE Advanced rank depends on performance across both compulsory official papers and the applicable rank-list criteria.',
  },
];

const JEE_MAIN_PAPER_2_PAPER_2B_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official JEE Main Paper 2 question paper?',
    answer: 'No. It is an independent practice mock with original questions mapped to the official JEE Main 2026 Paper 2B (B.Planning) syllabus, question types, marks, and timing.',
  },
  {
    question: 'What is the JEE Main Paper 2B (B.Planning) pattern in this mock?',
    answer: 'Paper 2B has 100 questions for 400 marks in 180 minutes: Mathematics 25 (20 multiple-choice plus 5 numerical-value), Aptitude Test 50, and Planning 25, all under one combined timer, matching the complete official B.Planning objective structure.',
  },
  {
    question: 'How is JEE Main Paper 2B scored?',
    answer: 'Every question, multiple-choice or numerical-value, follows the same rule: +4 for a correct answer, -1 for an incorrect answer, and 0 for an unattempted question. Numerical-value answers are evaluated to the nearest integer.',
  },
  {
    question: 'Does this site also cover Paper 2A (B.Arch)?',
    answer: 'Yes, as a separate Objective Practice test covering only Mathematics and Aptitude Test. The official B.Arch paper also includes a 100-mark offline pen-and-paper Drawing Test, which is not included since it requires human evaluation and cannot be auto-graded.',
  },
  {
    question: 'Are the visual Aptitude Test tasks reproduced exactly?',
    answer: 'Not always. Some official Aptitude Test tasks in the real JEE Main Paper 2 are visual or figure-based. This is a text-only practice interface, so those specific visual tasks are adapted rather than reproduced exactly.',
  },
];

const NATA_MATHEMATICS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official NATA question paper?',
    answer: 'No. It is an independent practice mock with original questions covering the NATA 2026 Mathematics topic list.',
  },
  {
    question: 'What does this mock cover, and what does it leave out?',
    answer: 'This mock covers only the Mathematics portion of NATA: 20 questions for 40 marks in 30 minutes. The official exam also has an offline Drawing and Composition Test, which cannot be auto-graded, and a General Aptitude section that mixes visual, spatial, and general-knowledge content with reasoning content with no clean published split, so neither is included here.',
  },
  {
    question: 'Is there negative marking?',
    answer: 'No. NATA has no negative marking, and this mock matches that: +2 for a correct answer, 0 for an incorrect or unattempted one.',
  },
  {
    question: 'Why does this exam show a review-pending pattern instead of official?',
    answer: 'The official nata.in and coa.gov.in sources could not be independently accessed while building this mock, so the 20-question, 40-mark Mathematics figure is drawn from corroborating secondary sources rather than a directly verified primary document. The Mathematics topic list itself (Algebra, Trigonometry, Coordinate Geometry, Calculus, Mensuration, Vectors and 3D Geometry, Matrices, Probability) is consistently corroborated.',
  },
  {
    question: 'Is the 30-minute timer an official NATA duration?',
    answer: 'No. NATA does not publish a separate time limit for Mathematics alone within its combined Aptitude Test. The 30-minute timer is a TakeMockTest practice estimate, not an official figure.',
  },
];

const VITEEE_MPCEA_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official VITEEE question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official VITEEE 2026 MPCEA syllabus and pattern.',
  },
  {
    question: 'What is the VITEEE 2026 MPCEA pattern in this mock?',
    answer: 'The Full Mock has 125 questions for 500 marks in 150 minutes: Mathematics 40, Physics 35, Chemistry 35, Aptitude 10, and English 5, all under one combined timer.',
  },
  {
    question: 'Is there negative marking in VITEEE 2026?',
    answer: 'Yes. Each correct answer earns 4 marks and each incorrect answer deducts 1 mark. An unattempted question, or one marked for review without an answer, scores zero. This is a change from 2025, when VITEEE carried no negative marking.',
  },
  {
    question: 'Does this mock cover the BPCEA Biology stream?',
    answer: 'No. This mock covers the MPCEA Mathematics stream only. BPCEA replaces the Mathematics section with Biology and is not modeled on this site.',
  },
  {
    question: 'Are the sectional and quick-practice test timers official VITEEE timings?',
    answer: 'No. VITEEE itself does not publish separate sectional exams. The sectional and mixed quick-practice tests on this site use TakeMockTest-defined durations for focused practice, not an official VITEEE sectional format.',
  },
];

const SRMJEEE_PCM_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official SRMJEEE question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official SRMJEEE 2026 syllabus and examination pattern.',
  },
  {
    question: 'What is the SRMJEEE 2026 PCM pattern in this mock?',
    answer: 'The Full Mock has 130 questions for 130 marks in 150 minutes: Physics 35, Chemistry 35, Mathematics 40, and English & Aptitude 20, all under one combined timer.',
  },
  {
    question: 'Is there negative marking in SRMJEEE 2026?',
    answer: 'No. Each correct answer earns 1 mark and there is no deduction for a wrong answer. An unanswered question scores zero.',
  },
  {
    question: 'Does this mock cover the Mathematics/Biology route?',
    answer: 'This mock covers the PCM Mathematics route only. SRMJEEE also offers a Mathematics/Biology alternative for the fourth subject, which is not modeled on this site.',
  },
  {
    question: 'What does the English & Aptitude section cover?',
    answer: "SRM's official syllabus names English & Aptitude as one combined 20-question section without publishing a subtopic list. The granular topic labels used on these tests, such as vocabulary or numerical reasoning, are a TakeMockTest preparation map, not an official SRM subtopic breakdown.",
  },
  {
    question: 'Are the sectional and quick-practice test timers official SRMJEEE timings?',
    answer: 'No. SRMJEEE itself does not publish separate sectional exams. The sectional and mixed quick-practice tests on this site use TakeMockTest-defined durations for focused practice, not an official SRMJEEE sectional format.',
  },
];

const AEEE_BTECH_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official AEEE question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official AEEE 2026 syllabus and examination pattern.',
  },
  {
    question: 'What is the AEEE 2026 B.Tech pattern in this mock?',
    answer: 'The Full Mock has 100 questions for 300 marks in 150 minutes: Mathematics 40, Physics 25, Chemistry 20, Quantitative Aptitude 10, and English 5, all under one combined timer.',
  },
  {
    question: 'Is there negative marking in AEEE 2026?',
    answer: 'Yes. Each correct answer earns 3 marks and each incorrect answer deducts 1 mark. An unanswered question scores zero.',
  },
  {
    question: 'What syllabus does this mock cover?',
    answer: "The official AEEE 2026 page states State Board/CBSE scope and the official section names without publishing an exhaustive chapter-by-chapter syllabus. The granular topic labels used on these tests are a TakeMockTest preparation map, not an official AEEE subtopic breakdown.",
  },
  {
    question: 'Are the sectional and quick-practice test timers official AEEE timings?',
    answer: 'No. AEEE itself does not publish separate sectional exams. The sectional and mixed quick-practice tests on this site use TakeMockTest-defined durations for focused practice, not an official AEEE sectional format.',
  },
];

const MET_BTECH_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official MET question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official Manipal Entrance Test (MET) 2026 B.Tech syllabus and examination pattern.',
  },
  {
    question: 'What is the MET 2026 B.Tech pattern in this mock?',
    answer: 'The Full Mock has 60 questions for 240 marks in 120 minutes: Mathematics 20, Physics 15, Chemistry 15, and English 10, all under one combined timer.',
  },
  {
    question: 'How is MET 2026 scored?',
    answer: 'MET mixes two question types. Each correct Multiple Choice Question earns 4 marks and each incorrect one deducts 1 mark. Each correct Numerical Answer Type question earns 4 marks with no deduction for a wrong or unanswered entry. Unanswered questions of either type score zero.',
  },
  {
    question: 'What are Numerical Answer Type questions?',
    answer: 'These questions have no options. You type the exact numerical answer, such as an integer or a decimal like 0.4, instead of choosing from a list.',
  },
  {
    question: 'Are the sectional and quick-practice test timers official MET timings?',
    answer: 'No. MET itself does not publish separate sectional exams. The sectional and mixed quick-practice tests on this site use TakeMockTest-defined durations for focused practice, not an official MET sectional format.',
  },
];

const COMEDK_UGET_BTECH_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official COMEDK question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official COMEDK UGET 2026 B.E./B.Tech (PCM) syllabus and pattern.',
  },
  {
    question: 'Is there negative marking in COMEDK UGET?',
    answer: 'No. Each correct answer earns 1 mark, and there is no deduction for a wrong or unattempted question.',
  },
  {
    question: 'Can I move freely between Physics, Chemistry, and Mathematics in COMEDK UGET?',
    answer: 'Yes. The official exam has no sectional time limit, so you can attempt any section in any order within the full duration. This mock\'s separate sectional tests exist only for focused single-subject practice.',
  },
  {
    question: 'How many questions are there in COMEDK UGET, and how are the marks split?',
    answer: '180 questions for 180 marks, split evenly across Physics, Chemistry, and Mathematics at 60 questions each.',
  },
  {
    question: 'How long is the COMEDK UGET exam?',
    answer: 'This mock uses a 180-minute (3-hour) practice timer, matching what is widely and consistently reported for the exam. COMEDK\'s own 2026 notification and brochure do not state a numeric session duration in readable public text, so this figure is a TakeMockTest practice duration, not a direct official citation.',
  },
];

const IIIT_HYDERABAD_UGEE_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official IIIT Hyderabad question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official IIIT Hyderabad UGEE 2026 syllabus and pattern.',
  },
  {
    question: 'Is there negative marking in IIIT Hyderabad UGEE?',
    answer: 'Yes. Both sections use 25% negative marking on that question\'s own marks: SUPR questions score +1/-0.25, and REAP questions score +2/-0.5.',
  },
  {
    question: 'What is the difference between SUPR and REAP in IIIT Hyderabad UGEE?',
    answer: 'SUPR (Subject Proficiency Test) covers Class 11/12 Physics, Mathematics, and Chemistry syllabus recall, in a 60-minute, 40-question section. REAP (Research Aptitude Test) is a 120-minute, 50-question section that emphasizes critical and creative thinking beyond direct syllabus recall, worth more marks per question.',
  },
  {
    question: 'How does IIIT Hyderabad UGEE decide the final admission offer?',
    answer: 'SUPR performance is used to filter candidates first, then REAP score ranks the shortlisted candidates for an interview. The final admission offer is based on interview performance alone, not directly on the UGEE score.',
  },
];

const IELTS_ACADEMIC_READING_FULL_MOCK_FAQS = [
  {
    question: 'Is this official IELTS content?',
    answer: 'No. It is an independent practice mock containing original passages and questions mapped to the official IELTS Academic Reading format and scoring rules.',
  },
  {
    question: 'How many correct answers do I need for a Band 7 in IELTS Academic Reading?',
    answer: 'Roughly 30 to 32 correct answers out of 40, based on the published IELTS Academic Reading conversion table. The exact cutoff can shift slightly between test versions, but this range stays stable across cycles.',
  },
  {
    question: 'Is there negative marking in IELTS Reading?',
    answer: 'No. Each correct answer scores 1 mark, with no deduction for a wrong or unattempted question. Your raw score out of 40 is then converted to a band score from 1 to 9.',
  },
  {
    question: 'Does this mock use the same question formats as the real IELTS Reading test?',
    answer: 'Not entirely. Every question here is multiple-choice, so it can be scored instantly. The official test also uses formats such as matching and sentence completion for the same reading skills, which are not reproduced in this practice interface.',
  },
];

const IELTS_GENERAL_TRAINING_READING_FULL_MOCK_FAQS = [
  {
    question: 'Is this official IELTS content?',
    answer: 'No. It is an independent practice mock containing original passages and questions mapped to the official IELTS General Training Reading format and scoring rules.',
  },
  {
    question: 'How many correct answers do I need for a Band 7 in IELTS General Training Reading?',
    answer: 'Roughly 34 to 35 correct answers out of 40, a higher bar than Academic Reading\'s 30 to 32, since General Training\'s texts are considered easier overall.',
  },
  {
    question: 'Is there negative marking in IELTS Reading?',
    answer: 'No. Each correct answer scores 1 mark, with no deduction for a wrong or unattempted question. Your raw score out of 40 is then converted to a band score from 1 to 9.',
  },
  {
    question: 'What is the difference between IELTS Academic and General Training Reading?',
    answer: 'Section 1 uses short social or survival texts such as notices, advertisements, and guides, Section 2 uses workplace-related texts, and Section 3 is one longer, general-interest text similar in style to the Academic test. Academic Reading instead uses three passages drawn from books, journals, and academic sources throughout.',
  },
];

const SAT_READING_AND_WRITING_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official Digital SAT question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official Digital SAT Reading and Writing content domains and format.',
  },
  {
    question: 'Is the Digital SAT Reading and Writing section adaptive?',
    answer: 'Yes. The official section is delivered as two 27-question modules, and how you perform on the first module determines the difficulty of the second. This mock uses a fixed, non-adaptive set of 54 questions instead, so every test-taker sees the same difficulty mix.',
  },
  {
    question: 'Is there negative marking on the Digital SAT?',
    answer: 'No. There is no penalty for a wrong or unattempted answer, so it is always worth attempting every question.',
  },
  {
    question: 'How is Digital SAT Reading and Writing scored?',
    answer: 'The official test reports a scaled score between 200 and 800 for the section, calculated from your adaptive performance across both modules. This mock shows your raw score out of 54 instead, since it does not replicate the official adaptive-difficulty scaling.',
  },
];

const SAT_MATH_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official Digital SAT question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official Digital SAT Math content domains and format.',
  },
  {
    question: 'Can I use a calculator on the Digital SAT Math section?',
    answer: 'Yes, throughout the entire section. This is a change from the older paper SAT, which had a no-calculator Math portion.',
  },
  {
    question: 'Does the Digital SAT Math section have typed-answer questions, or is it all multiple choice?',
    answer: 'Mostly multiple choice, but a portion require typing in a numeric answer directly, known as student-produced response questions, instead of choosing from options. This mock includes both formats.',
  },
  {
    question: 'Is there negative marking on the Digital SAT?',
    answer: 'No. There is no penalty for a wrong or unattempted answer, so it is always worth attempting every question.',
  },
  {
    question: 'How is Digital SAT Math scored?',
    answer: 'The official test reports a scaled score between 200 and 800 for the section, calculated from your adaptive performance across two modules. This mock shows your raw score out of 44 instead, since it does not replicate the official adaptive-difficulty scaling.',
  },
];

const GRE_QUANTITATIVE_REASONING_FULL_MOCK_FAQS = [
  {
    question: 'Is this official GRE content?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official GRE Quantitative Reasoning format and scoring rules.',
  },
  {
    question: 'Is the GRE Quantitative Reasoning section adaptive?',
    answer: 'Yes, at the section level. Your performance on the first Quantitative Reasoning section determines whether your second section is easier or harder, which in turn caps or unlocks the top of the 130 to 170 score scale.',
  },
  {
    question: 'What does this mock leave out from the real GRE Quant section?',
    answer: 'The official section also uses 5-choice Multiple Choice: Select One Answer Choice questions, Multiple Choice: Select One or More Answer Choices questions, and Data Interpretation sets built on shared data or tables. This mock covers only Quantitative Comparison and Numeric Entry, the two formats that fit this site\'s engine cleanly.',
  },
  {
    question: 'Is there negative marking on the GRE?',
    answer: 'No. There is no penalty for a wrong or unattempted answer on the GRE Quantitative Reasoning section.',
  },
];

const TOEFL_READING_FULL_MOCK_FAQS = [
  {
    question: 'Is this official TOEFL content?',
    answer: 'No. It is an independent practice mock containing original passages and questions mapped to the official TOEFL iBT Reading section format, as redesigned since 21 January 2026.',
  },
  {
    question: 'What is Complete the Words in TOEFL Reading, and why isn\'t it in this mock?',
    answer: 'Complete the Words is a vocabulary task where you type in missing letters or word fragments to complete partially shown words, worth about 30 of the section\'s 50 scored items. It is not a multiple-choice format, so it isn\'t included here; this mock covers the Read in Daily Life and Read an Academic Passage task types instead.',
  },
  {
    question: 'Is there negative marking on TOEFL Reading?',
    answer: 'No. Each correct answer earns a point, with no deduction for a wrong or unattempted question.',
  },
  {
    question: 'How is TOEFL Reading scored?',
    answer: 'The official test reports a 1 to 6 score aligned to CEFR levels, with an additional comparable 0 to 120 score also shown during the two-year transition period after the January 2026 redesign. This mock shows your raw correct count out of 30 instead.',
  },
];

const PTE_READING_FULL_MOCK_FAQS = [
  {
    question: 'Is this official PTE content?',
    answer: 'No. It is an independent practice mock containing original passages and questions mapped to the official PTE Academic Reading task types and scoring rules.',
  },
  {
    question: 'Why does this mock only cover 2 of PTE Reading\'s 5 task types?',
    answer: 'The official section has five task types: Multiple Choice (Single Answer), Multiple Choice (Multiple Answers), Re-order Paragraphs, and two Fill in the Blanks formats. Re-order Paragraphs uses drag-and-drop sequencing and both Fill in the Blanks types use dropdown word selection, formats this practice engine cannot render, so this mock covers only the two multiple-choice types.',
  },
  {
    question: 'How is the Multiple Choice: Multiple Answers question scored in this mock?',
    answer: 'You earn 1 mark for each correct option you select, as long as you don\'t include any incorrect option. Including even one incorrect option scores zero for that entire question, this site\'s own scoring model rather than PTE\'s official proprietary partial-credit formula.',
  },
  {
    question: 'Is there negative marking in PTE Reading?',
    answer: 'No penalty beyond the Multiple Answers scoring rule above. A wrong Single Answer choice, or an unattempted question, simply scores zero.',
  },
];

const MCAT_CARS_FULL_MOCK_FAQS = [
  {
    question: 'Is this official MCAT content?',
    answer: 'No. It is an independent practice mock containing original passages and questions mapped to the official MCAT CARS (Critical Analysis and Reasoning Skills) format.',
  },
  {
    question: 'Why does this mock only cover CARS and not the other three MCAT sections?',
    answer: 'CARS is the one MCAT section answerable strictly from its own passage, with no outside science knowledge required. The other three sections, covering Biological, Chemical and Physical, and Psychological and Social Foundations, require rigorously fact-checked science content, which this site is intentionally reserving for its standard content-review process rather than self-authoring.',
  },
  {
    question: 'Is there negative marking on MCAT CARS?',
    answer: 'No. Each correct answer earns a point, with no deduction for a wrong or unattempted question.',
  },
  {
    question: 'How is MCAT CARS scored?',
    answer: 'The official test reports a scaled score from 118 to 132 for the section, with 125 as the midpoint. This mock shows your raw correct count out of 24 instead.',
  },
];

const OET_READING_PART_C_FULL_MOCK_FAQS = [
  {
    question: 'Is this official OET content?',
    answer: 'No. It is an independent practice mock containing original texts and questions mapped to the official OET Reading Part C format.',
  },
  {
    question: 'Why does this mock only cover Part C of OET Reading?',
    answer: 'The Reading sub-test has three parts: Part A is typed short-answer and matching rather than multiple choice, and Part B uses 3 answer options per question rather than 4. Part C is the only part in the 4-option multiple-choice format this site supports, and this mock matches its full official question count.',
  },
  {
    question: 'Can this mock\'s score predict my OET Grade B?',
    answer: 'Not on its own. OET grades are based on all 42 marks across Parts A, B, and C combined, and this mock covers only Part C\'s 16 marks. A strong Part C score is a good sign, but it can\'t substitute for practicing Parts A and B as well.',
  },
  {
    question: 'Is there negative marking on OET Reading?',
    answer: 'No. Each correct answer earns a point, with no deduction for a wrong or unattempted question.',
  },
];

const ACT_ENGLISH_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official ACT question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official Enhanced ACT English section format.',
  },
  {
    question: 'How many questions does the official ACT English section have?',
    answer: '50 questions in 35 minutes, testing grammar, punctuation, sentence structure, and rhetorical skills. This mock is a shorter 25-question set across the same two skill categories, for focused practice rather than the full official item count.',
  },
  {
    question: 'Does the ACT English score count toward my Composite score?',
    answer: 'Yes. Your Composite score is the average of your English, Math, and Reading scaled scores, rounded to the nearest whole number.',
  },
  {
    question: 'Is there negative marking on the ACT?',
    answer: 'No. There is no penalty for a wrong or unattempted answer, so it is always worth attempting every question.',
  },
];

const ACT_MATH_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official ACT question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official Enhanced ACT Math section format.',
  },
  {
    question: 'Can I use a calculator on the ACT Math section?',
    answer: 'Yes, a calculator is permitted throughout the entire section.',
  },
  {
    question: 'How many answer choices does ACT Math use now?',
    answer: '4, reduced from the traditional 5 as part of the 2026 Enhanced ACT rollout, matching this site\'s multiple-choice format exactly.',
  },
  {
    question: 'Does the ACT Math score count toward my Composite score?',
    answer: 'Yes. Your Composite score is the average of your English, Math, and Reading scaled scores, rounded to the nearest whole number.',
  },
];

const ACT_READING_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official ACT question paper?',
    answer: 'No. It is an independent practice mock containing original passages and questions mapped to the official Enhanced ACT Reading section format.',
  },
  {
    question: 'What passage types does the ACT Reading section cover?',
    answer: 'Four types: Literary Narrative, Social Science, Humanities, and Natural Science, each followed by its own set of questions in the official test.',
  },
  {
    question: 'Does the ACT Reading score count toward my Composite score?',
    answer: 'Yes. Your Composite score is the average of your English, Math, and Reading scaled scores, rounded to the nearest whole number.',
  },
  {
    question: 'Is there negative marking on the ACT?',
    answer: 'No. There is no penalty for a wrong or unattempted answer, so it is always worth attempting every question.',
  },
];

const ACT_SCIENCE_FULL_MOCK_FAQS = [
  {
    question: 'Do I need to take the ACT Science section?',
    answer: 'For most colleges, no. Since the 2026 Enhanced ACT rollout, Science is optional and does not factor into your Composite score. Only a small number of schools, including Georgetown, Boston University, Marquette, Pomona, and East Carolina, along with the U.S. service academies, generally expect it, so check your target colleges\' current testing policy directly.',
  },
  {
    question: 'Does the ACT Science score count toward my Composite score?',
    answer: 'No. Composite is calculated only from English, Math, and Reading. Science is still scored on the same 1 to 36 scale and reported separately when taken.',
  },
  {
    question: 'What does the ACT Science section actually test?',
    answer: 'Data interpretation and scientific reasoning from passages presenting data, experiments, or differing viewpoints, not memorized science facts.',
  },
  {
    question: 'Is this an official ACT question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official Enhanced ACT Science section format.',
  },
];

const FRM_PART_1_QUANTITATIVE_ANALYSIS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official GARP question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official FRM Part I Quantitative Analysis syllabus.',
  },
  {
    question: 'Why does this mock cover only Quantitative Analysis, not the whole FRM Part I exam?',
    answer: 'Quantitative Analysis is the one Part I topic area built entirely from probability, statistics, and regression, so every answer is independently checkable by calculation. The other three topic areas, and every Part II topic area, require accurate recall of risk-management methodology, regulatory frameworks, and market practice, which this site is intentionally reserving for its standard content-review process.',
  },
  {
    question: 'How is the FRM exam actually scored?',
    answer: 'GARP does not disclose a numeric score or exact passing threshold. Both FRM exams are reported as pass or fail only, with quartile feedback (1st being the top quartile, 4th the bottom) for each topic area so you can see your relative strengths and weaknesses.',
  },
  {
    question: 'Is there negative marking on the FRM exam?',
    answer: 'No. There is no penalty for a wrong or unattempted answer, so it is always worth attempting every question.',
  },
];

const NISM_SERIES_V_A_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official NISM question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official NISM Series V-A syllabus.',
  },
  {
    question: 'What is the passing score for NISM Series V-A?',
    answer: '50%. The official exam has 100 questions of 1 mark each in 2 hours, and you need 50 marks to pass.',
  },
  {
    question: 'How long is a NISM Series V-A certificate valid?',
    answer: '3 years from the date you pass the exam. You can renew it either by retaking and passing the exam again, or by completing NISM\'s Continuing Professional Education programme within the final 12 months before it expires.',
  },
  {
    question: 'Why does this mock cover only NAV and SIP calculations, not the full syllabus?',
    answer: 'Those are the calculation-based portion of the syllabus, where every answer is independently verifiable by formula. Fund categorization rules, regulatory and compliance content, and taxation are excluded, since those change with SEBI and tax circulars and require accurate, current recall rather than calculation.',
  },
];

const ACET_MATHEMATICS_AND_STATISTICS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official IAI question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official ACET Mathematics and Statistics syllabus.',
  },
  {
    question: 'What is the passing score for ACET?',
    answer: '50 out of 100 marks. ACET reports only a pass or fail result, with no rank list, percentile, or merit order.',
  },
  {
    question: 'Why does this mock cover only Mathematics and Statistics, not the full ACET syllabus?',
    answer: 'These are the two largest and most calculation-heavy of ACET\'s five official sections. Data Interpretation, English, and Logical Reasoning aren\'t built yet: unlike this site\'s other finance mocks, this is a coverage gap to close later, not a content-risk exclusion, since every ACET section is calculation- or language-based rather than regulatory.',
  },
  {
    question: 'Is there negative marking on ACET?',
    answer: 'No. Each correct answer earns a point, with no deduction for a wrong or unattempted question.',
  },
];

const CA_FOUNDATION_QUANTITATIVE_APTITUDE_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official ICAI question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official CA Foundation Paper 3 (Quantitative Aptitude) syllabus.',
  },
  {
    question: 'What are the CA Foundation passing marks?',
    answer: 'You need at least 40% in each of the four papers and 50% aggregate across all four combined. Both conditions must be met in the same attempt: clearing every paper individually isn\'t enough if your aggregate falls short.',
  },
  {
    question: 'Is there negative marking in CA Foundation Paper 3?',
    answer: 'Yes. Each wrong answer deducts 0.25 marks. There is no deduction for an unattempted question.',
  },
  {
    question: 'Why doesn\'t this mock cover CA Foundation\'s other three papers?',
    answer: 'Paper 4 (Business Economics) leans on economics facts and current context that carry higher correctness risk for self-authored content. Papers 1 and 2 (Accounting and Business Laws) are subjective, descriptive-answer papers, not multiple choice, so they don\'t fit this site\'s format at all.',
  },
];

const CMA_FOUNDATION_BUSINESS_MATHEMATICS_AND_STATISTICS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official ICMAI question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official CMA Foundation Paper 3 (Fundamentals of Business Mathematics and Statistics) syllabus.',
  },
  {
    question: 'What are the CMA Foundation passing marks?',
    answer: 'You need at least 40% in each of the four papers and 50% aggregate across all four combined, the same dual condition ICAI uses for CA Foundation.',
  },
  {
    question: 'Is there an exemption if I score well in one CMA Foundation paper?',
    answer: 'No. Unlike some other ICMAI and ICAI levels, there is no paper-wise exemption or carry-forward at the Foundation level. If your aggregate falls short, you reappear for all four papers again, even the ones you individually passed.',
  },
  {
    question: 'Is there negative marking in CMA Foundation?',
    answer: 'No. Each correct answer earns a point, with no deduction for a wrong or unattempted question.',
  },
];

const NDA_MATHEMATICS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official UPSC question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official NDA Mathematics syllabus.',
  },
  {
    question: 'Do Mathematics and the General Ability Test carry equal weightage in NDA?',
    answer: 'No. Mathematics is worth 300 marks, while the General Ability Test is worth 600 marks, twice as much, even though both are compulsory papers in the written exam.',
  },
  {
    question: 'What is the minimum qualifying score in NDA Mathematics?',
    answer: '25%, meaning at least 75 out of 300 marks. You need to clear this sectional minimum in Mathematics separately from the General Ability Test\'s own minimum.',
  },
  {
    question: 'What is the NDA Mathematics negative marking scheme?',
    answer: 'Each question carries 2.5 marks, and a wrong answer deducts one-third of that, about 0.83 marks. There is no deduction for an unattempted question.',
  },
];

const NDA_GENERAL_ABILITY_TEST_ENGLISH_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official UPSC question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official NDA General Ability Test English syllabus.',
  },
  {
    question: 'Why does this mock cover only the English portion of NDA\'s General Ability Test?',
    answer: 'The official GAT paper is English (200 marks) plus General Knowledge (400 marks, covering Physics, Chemistry, General Science, History, Geography, and Current Events). Only the English portion is included here, since General Knowledge depends on science and current-affairs facts that carry higher correctness risk for self-authored content.',
  },
  {
    question: 'What is the minimum qualifying score in NDA\'s General Ability Test?',
    answer: '25%, meaning at least 150 out of 600 marks, cleared separately from the Mathematics paper\'s own 25% minimum.',
  },
  {
    question: 'Does the SSB interview matter as much as the written exam for NDA?',
    answer: 'Yes. The SSB interview is worth 900 marks, exactly matching the written exam\'s 900-mark total (300 Mathematics plus 600 GAT), and both stages carry equal weight in the final merit list.',
  },
];

const CDS_ELEMENTARY_MATHEMATICS_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official UPSC question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official CDS Elementary Mathematics syllabus.',
  },
  {
    question: 'Does the CDS Elementary Mathematics paper apply to every academy?',
    answer: 'No. IMA, INA, and AFA candidates take Elementary Mathematics, English, and General Knowledge, each worth 100 marks. OTA (Officers Training Academy) candidates skip Mathematics entirely and only take English and General Knowledge.',
  },
  {
    question: 'What is the CDS Elementary Mathematics negative marking scheme?',
    answer: 'Each wrong answer deducts one-third of that question\'s marks, about 0.33 marks per question here. There is no deduction for an unattempted question.',
  },
  {
    question: 'Is there a sectional cutoff in CDS?',
    answer: 'Yes, in practice. While UPSC doesn\'t publish a fixed passing mark, candidates typically need to clear a sectional cutoff in each paper as well as an overall aggregate cutoff that varies by academy and year.',
  },
];

const CDS_ENGLISH_FULL_MOCK_FAQS = [
  {
    question: 'Is this an official UPSC question paper?',
    answer: 'No. It is an independent practice mock containing original questions mapped to the official CDS English syllabus.',
  },
  {
    question: 'Is CDS English the same for OTA and the other academies?',
    answer: 'Yes. English and General Knowledge are common to all four academies (IMA, INA, AFA, and OTA). Only Elementary Mathematics differs, since OTA candidates don\'t take it at all.',
  },
  {
    question: 'What is the CDS English negative marking scheme?',
    answer: 'Each wrong answer deducts one-third of that question\'s marks, about 0.33 marks per question here. There is no deduction for an unattempted question.',
  },
  {
    question: 'Why is this mock scored at 1 mark per question when the official paper isn\'t?',
    answer: 'The official CDS English paper has 120 questions for 100 marks, roughly 0.83 marks per correct answer. This mock uses a clean 1 mark per question instead for simplicity, since the official fractional value doesn\'t change how you should approach the questions.',
  },
];

const FULL_MOCK_FAQS: Record<string, typeof SSC_TIER1_FULL_MOCK_FAQS> = {
  'ssc-cgl/tier-1': SSC_TIER1_FULL_MOCK_FAQS,
  'ssc-cgl/tier-2': SSC_CGL_TIER2_FULL_MOCK_FAQS,
  'rrb-ntpc/cbt-1': RRB_NTPC_CBT1_FULL_MOCK_FAQS,
  'ibps-po/prelims': IBPS_PO_PRELIMS_FULL_MOCK_FAQS,
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
  'rpf-constable/cbt': RPF_CONSTABLE_CBT_FULL_MOCK_FAQS,
  'rpf-si/cbt': RPF_SI_CBT_FULL_MOCK_FAQS,
  'ssc-je/paper-1': SSC_JE_PAPER_1_FULL_MOCK_FAQS,
  'ssc-steno/cbt': SSC_STENO_CBT_FULL_MOCK_FAQS,
  'ssc-cht/paper-1': SSC_CHT_PAPER_1_FULL_MOCK_FAQS,
  'ssc-selection-post/matriculation': SSC_SELECTION_POST_CBE_FULL_MOCK_FAQS,
  'ssc-selection-post/higher-secondary': SSC_SELECTION_POST_CBE_FULL_MOCK_FAQS,
  'ssc-selection-post/graduation': SSC_SELECTION_POST_CBE_FULL_MOCK_FAQS,
  'ssc-cpo/paper-1': SSC_CPO_PAPER_1_FULL_MOCK_FAQS,
  'ibps-so/prelims': IBPS_SO_PRELIMS_FULL_MOCK_FAQS,
  'rbi-grade-b/phase-1': RBI_GRADE_B_PHASE_1_FULL_MOCK_FAQS,
  'nabard-grade-a/phase-1': NABARD_GRADE_A_PHASE_1_FULL_MOCK_FAQS,
  'sebi-grade-a/phase-1-paper-1': SEBI_GRADE_A_PHASE_1_PAPER_1_FULL_MOCK_FAQS,
  'sebi-grade-a/phase-1-paper-2': SEBI_GRADE_A_PHASE_1_PAPER_2_FULL_MOCK_FAQS,
  'sidbi-grade-a-b/phase-1': SIDBI_GRADE_A_B_PHASE_1_FULL_MOCK_FAQS,
  'lic-aao/prelims': LIC_AAO_PRELIMS_FULL_MOCK_FAQS,
  'niacl-ao/prelims': NIACL_AO_PRELIMS_FULL_MOCK_FAQS,
  'niacl-ao/mains': NIACL_AO_MAINS_FULL_MOCK_FAQS,
  'rrb-alp/cbt-1': RRB_ALP_CBT1_FULL_MOCK_FAQS,
  'rrb-alp/cbt-2': RRB_ALP_CBT2_FULL_MOCK_FAQS,
  'rrb-technician/grade-1-signal': RRB_TECHNICIAN_GRADE1_SIGNAL_FULL_MOCK_FAQS,
  'rrb-technician/grade-3': RRB_TECHNICIAN_GRADE3_FULL_MOCK_FAQS,
  'bitsat/mathematics': BITSAT_MATHEMATICS_FULL_MOCK_FAQS,
  'jee-main/paper-1': JEE_MAIN_PAPER_1_FULL_MOCK_FAQS,
  'jee-advanced/paper-1': JEE_ADVANCED_PAPER_1_FULL_MOCK_FAQS,
  'jee-advanced/paper-2': JEE_ADVANCED_PAPER_2_FULL_MOCK_FAQS,
  'jee-main-paper-2/paper-2b': JEE_MAIN_PAPER_2_PAPER_2B_FULL_MOCK_FAQS,
  'nata/mathematics': NATA_MATHEMATICS_FULL_MOCK_FAQS,
  'viteee/mpcea': VITEEE_MPCEA_FULL_MOCK_FAQS,
  'srmjeee/pcm': SRMJEEE_PCM_FULL_MOCK_FAQS,
  'aeee/btech': AEEE_BTECH_FULL_MOCK_FAQS,
  'met/btech': MET_BTECH_FULL_MOCK_FAQS,
  'comedk-uget/btech': COMEDK_UGET_BTECH_FULL_MOCK_FAQS,
  'iiit-hyderabad-ugee/ugee': IIIT_HYDERABAD_UGEE_FULL_MOCK_FAQS,
  'ielts/academic-reading': IELTS_ACADEMIC_READING_FULL_MOCK_FAQS,
  'ielts/general-training-reading': IELTS_GENERAL_TRAINING_READING_FULL_MOCK_FAQS,
  'sat/reading-and-writing': SAT_READING_AND_WRITING_FULL_MOCK_FAQS,
  'sat/math': SAT_MATH_FULL_MOCK_FAQS,
  'gre/quantitative-reasoning': GRE_QUANTITATIVE_REASONING_FULL_MOCK_FAQS,
  'toefl/reading': TOEFL_READING_FULL_MOCK_FAQS,
  'pte/reading': PTE_READING_FULL_MOCK_FAQS,
  'mcat/critical-analysis-and-reasoning-skills': MCAT_CARS_FULL_MOCK_FAQS,
  'oet/reading-part-c': OET_READING_PART_C_FULL_MOCK_FAQS,
  'act/english': ACT_ENGLISH_FULL_MOCK_FAQS,
  'act/math': ACT_MATH_FULL_MOCK_FAQS,
  'act/reading': ACT_READING_FULL_MOCK_FAQS,
  'act/science': ACT_SCIENCE_FULL_MOCK_FAQS,
  'frm/part-1-quantitative-analysis': FRM_PART_1_QUANTITATIVE_ANALYSIS_FULL_MOCK_FAQS,
  'nism/series-v-a-mutual-fund-distributors': NISM_SERIES_V_A_FULL_MOCK_FAQS,
  'acet/mathematics-and-statistics': ACET_MATHEMATICS_AND_STATISTICS_FULL_MOCK_FAQS,
  'ca-foundation/quantitative-aptitude': CA_FOUNDATION_QUANTITATIVE_APTITUDE_FULL_MOCK_FAQS,
  'cma-foundation/business-mathematics-and-statistics': CMA_FOUNDATION_BUSINESS_MATHEMATICS_AND_STATISTICS_FULL_MOCK_FAQS,
  'nda/mathematics': NDA_MATHEMATICS_FULL_MOCK_FAQS,
  'nda/general-ability-test-english': NDA_GENERAL_ABILITY_TEST_ENGLISH_FULL_MOCK_FAQS,
  'cds/elementary-mathematics': CDS_ELEMENTARY_MATHEMATICS_FULL_MOCK_FAQS,
  'cds/english': CDS_ENGLISH_FULL_MOCK_FAQS,
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
    (question) =>
      (question.marks !== undefined && question.marks !== test.marksPerCorrect) ||
      (question.negativeMarking !== undefined && question.negativeMarking !== test.negativeMarking),
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
              ? `This is a ${test.duration}-minute quick test with ${questionCount} original questions mixed across ${coveredSections.length} ${stage.name} sections: a fast way to check your pace.`
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
            ? `A free ${questionCount}-question ${exam.name} ${stage.name} practice mock with ${test.sectionDuration || test.sectionDurations ? 'sectional timing' : 'one combined timer'} and instant results.`
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
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
                : `Correct answers earn ${test.marksPerCorrect} ${test.marksPerCorrect === 1 ? 'mark' : 'marks'} and wrong answers deduct ${test.negativeMarking} ${test.negativeMarking === 1 ? 'mark' : 'marks'}.`}{' '}
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
