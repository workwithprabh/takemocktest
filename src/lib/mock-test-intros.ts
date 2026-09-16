// Per-exam opening copy for /{country}/{exam}/mock-test.
//
// The template used to open every one of these 165 pages with the same
// sentence: "Attempt checked {exam} full mocks, sectional tests, and quick
// timed practice." Swapping the exam name into one clause is the mad-libs
// pattern the scaled-content guidance exists to catch, and it wasted the most
// valuable paragraph on the highest-intent page each exam has.
//
// Every entry below is written from that exam's own verified pattern in
// exams.ts: its real question count, duration, marking and timer behaviour.
// The second paragraph is the part that matters. It says why one rule changes
// how you should practise, which is the difference between a page that lists
// an exam and a page that helps somebody sitting it.
//
// Adding an exam here is optional. Anything without an entry falls back to the
// generic line, which is honest about being generic rather than pretending to
// be specific.

import type { ExamConfig } from './exams';

export interface MockTestIntro {
  /** Opening paragraph: what the series is, in this exam's own numbers. */
  readonly lead: string;
  /** Why one rule of this paper changes how a candidate should practise. */
  readonly strategy: string;
  /**
   * Optional title override, used where the phrase people search is not the
   * exam's official name. IBPS runs Office Assistant (Multipurpose) and
   * Officer Scale I; candidates and competitors both say RRB Clerk and RRB PO.
   * Carrying the common name and the official one on a single page is what
   * keeps the searched phrase without minting a second URL to cannibalise the
   * first. The brand suffix is deliberately absent: metadata.ts appends it only
   * when the whole title fits in 60 characters, so writing it here would either
   * duplicate it or be silently dropped.
   */
  readonly title?: string;
  /** Optional H1 override. Must still contain the exam name the map gates on. */
  readonly h1?: string;
  /**
   * Optional meta description. Without one, every hub falls back to the same
   * sentence with the exam name swapped in, which wastes the one piece of SERP
   * copy we control after the title and is the repetitive boilerplate Google's
   * own guidance tells you not to ship. Written per exam so it names that
   * paper's real differentiator, and kept inside the 165-character budget in
   * metadata.ts so it is not truncated. Priority exams first; the rest keep the
   * generic line rather than getting a specific-sounding one that is not.
   */
  readonly description?: string;
}

export const MOCK_TEST_INTROS: Readonly<Record<string, MockTestIntro>> = {
  'ssc-cgl': {
    lead: 'A free SSC CGL mock test series covering both stages. The SSC CGL Tier 1 mock test rounds run 100 questions in 60 minutes for 200 marks. The SSC CGL Tier 2 mock test is the longer 150-question Paper I. Every SSC CGL online test here is free, and returns a section-wise result the moment you submit.',
    strategy: 'Tier 1 is no longer one freely movable 60-minute pool. Each of the four subjects gets its own 15-minute window. That is 25 questions in 15 minutes, about 36 seconds each, and unused time in General Awareness cannot rescue Quantitative Aptitude later. The penalty differs by stage as well: Tier 1 deducts 0.50 marks for a wrong answer, and the applicable sections of Tier 2 Paper I deduct 1 mark. So a guess worth taking in Tier 1 is often not worth taking later. Work through the SSC CGL test series in stage order and both differences show up quickly.',
    description: 'Free SSC CGL mock tests for Tier 1 and Tier 2, with the 2026 15-minute sectional timers, real negative marking and instant section-wise results.',
  },
  'ssc-chsl': {
    lead: 'A free SSC CHSL mock test series for both tiers. The SSC CHSL Tier 1 mock test is 100 questions in 60 minutes for 200 marks, across General Intelligence, General Awareness, Quantitative Aptitude and English Language. Tier 2 is covered too. Each SSC CHSL online test is free and scores instantly.',
    strategy: 'A hundred questions in 60 minutes is 36 seconds each, and that number governs the paper whichever way the clock is run. The marking is where Tier 1 is actually decided. A correct answer pays 2 marks and a wrong one costs 0.5, so an attempt is worth making whenever you would be right more than one time in five, and on four options a blind guess already clears that. Leaving a question you could have narrowed down is the expensive habit, not attempting one you were unsure of. On timing, SSC moved CGL Tier 1 to a 15-minute window per subject for 2026 and current reporting says CHSL followed; this site has not read the CHSL 2026 notice directly, so it does not state which model the paper now uses. Tier 2 is different in kind: it runs as sequential timed windows that submit themselves, so practise it as separate papers rather than one long sitting.',
    description: 'Free SSC CHSL mock tests for Tier 1 and Tier 2. 100 questions in 60 minutes, scored 2 marks right and 0.5 wrong, with instant section-wise results.',
  },
  'ssc-gd-constable': {
    lead: 'A free SSC GD mock test series built to the current SSC GD Constable CBE. That is 80 questions in 60 minutes for 160 marks, covering General Intelligence and Reasoning, General Knowledge and General Awareness, Elementary Mathematics, and your choice of English or Hindi. Every SSC GD online test is free to attempt.',
    strategy: 'Eighty questions in 60 minutes is 45 seconds each on average. The average is the point, not a per-question limit. You will not get 45 seconds for every question, so the straightforward ones have to go faster to leave room for the few that need working out. Each carries 2 marks, with 0.25 deducted for a wrong answer. Timed practice helps more here than extra syllabus reading, which is what this SSC GD test series is built around.',
    description: 'Free SSC GD Constable mock tests for the 80-question CBE. Practise at the real pace of 45 seconds a question with instant section-wise results.',
  },
  'rrb-ntpc': {
    lead: 'A free RRB NTPC mock test series covering both computer-based stages. The RRB NTPC CBT 1 mock test is 100 questions in 90 minutes. The RRB NTPC CBT 2 mock test is 120 questions in the same 90 minutes. Every RRB NTPC online test is free, and gives a section-wise breakdown straight away.',
    strategy: 'Both stages run one composite timer over Mathematics, General Intelligence and Reasoning, and General Awareness. There is no sectional lock, so you can spend minutes where they actually pay. On marking, RRB NTPC deducts one third of the marks allotted to a question for every wrong answer. With four options, a completely blind guess is roughly break-even. Eliminate even one option and a considered attempt becomes worth taking. The RRB NTPC test series marks every attempt the same way the real paper does.',
    description: 'Free RRB NTPC mock tests for CBT 1 and CBT 2. Composite timers, one-third negative marking and an instant section-wise breakdown after every attempt.',
  },
  'rrb-group-d': {
    lead: 'A free RRB Group D mock test series matching the current CBT. Each Railway Group D mock test is 100 questions in 90 minutes, across General Science, Mathematics, General Intelligence and Reasoning, and General Awareness with Current Affairs. Every RRB Group D online test is free to attempt and scores the moment you finish.',
    strategy: 'General Science deserves dedicated preparation here. It is a named section of the paper in its own right, not an extension of General Awareness, so it needs preparation of its own. The CBT runs on one 90-minute clock with no sectional lock. Time saved on the sections you are quickest at is time still available for the ones you are not. Every RRB Group D test series round is timed to match.',
    description: 'Free RRB Group D mock tests for the 100-question CBT, including the General Science section that sets it apart from other railway papers.',
  },
  'ibps-po': {
    lead: 'A free IBPS PO mock test series covering both stages. The IBPS PO Prelims mock test is 100 questions in 60 minutes, across English Language, Quantitative Aptitude and Reasoning Ability. The IBPS PO Mains mock test rounds are here too. Every IBPS PO online test is free, and returns a section-wise result as soon as you submit.',
    strategy: 'In IBPS PO Prelims each section has its own 20-minute timer. You cannot borrow unused time from Reasoning Ability to rescue Quantitative Aptitude. A weak section therefore stays weak on the day, whatever your overall speed. That is why practising sectionals against the real clock matters as much as attempting full mocks, and why every IBPS PO test series round here is timed that way.',
    description: 'Free IBPS PO mock tests for Prelims and Mains. Prelims sectionals run on the real 20-minute clock, with instant section-wise results.',
  },
  'ibps-clerk': {
    lead: 'A free IBPS Clerk mock test series covering both stages. The IBPS Clerk Prelims mock test is 100 questions in 60 minutes. The IBPS Clerk Mains mock test is 160 questions in 125 minutes, across Reasoning Ability with Computer Aptitude, Quantitative Aptitude, English Language, and General and Financial Awareness. Every IBPS Clerk online test is free to attempt.',
    strategy: 'Both stages are sectionally timed. Prelims gives 20 minutes a section, and Mains locks each section separately, so neither paper allows a recovery run at the end. Clerk Prelims also tests Numerical Ability rather than the PO paper\'s Quantitative Aptitude. That is a shallower syllabus on a clock just as short, so accuracy under pressure decides it. The IBPS Clerk test series is timed to match both stages.',
    description: 'Free IBPS Clerk mock tests for Prelims and Mains. Both stages are sectionally timed here, exactly as the real papers lock each section.',
  },
  'sbi-po': {
    lead: 'A free SBI PO mock test series for both stages. The SBI PO Prelims mock test is 100 questions in 60 minutes. The SBI PO Mains mock test is 170 questions in 180 minutes, across Reasoning and Computer Aptitude, Data Analysis and Interpretation, General, Economy and Banking Awareness, and English Language. Every SBI PO online test is free to attempt.',
    strategy: 'SBI PO Prelims runs a 20-minute lock on each section, so practise sectionals against that clock rather than a total time. One thing to know before you plan around this series: Mains carries a Descriptive Test alongside the objective sections, and this site covers the objective papers only. Treat the writing paper as separate preparation, and this SBI PO test series as covering everything else.',
    description: 'Free SBI PO mock tests for Prelims and Mains. Objective papers only, with coverage stated per test; the Mains Descriptive Test is not included.',
  },
  'sbi-clerk': {
    lead: 'A free SBI Clerk mock test series covering both stages. The SBI Clerk Prelims mock test is 100 questions in 60 minutes. The SBI Clerk Mains mock test is 190 questions in 160 minutes, across General and Financial Awareness, General English, Quantitative Aptitude, and Reasoning Ability with Computer Aptitude. Every SBI Clerk online test is free to attempt.',
    strategy: 'Mains averages just over 50 seconds a question. Because the sections are separately timed, that speed has to be built inside each section rather than recovered elsewhere in the paper. Prelims uses the same 20-minute sectional timing as SBI PO. Both stages reward pace under a short clock more than they reward extra reading, which is how the SBI Clerk test series is timed.',
    description: 'Free SBI Clerk mock tests for Prelims and Mains. Mains averages just over 50 seconds a question, and each test states how much of it is covered.',
  },
  'ssc-mts': {
    lead: 'A free SSC MTS mock test series covering the current CBT. The same paper decides the Havaldar posts, so the SSC MTS Havaldar mock test rounds here are the same tests. The paper is 90 questions for 270 marks across two compulsory 45-minute sessions on the same day. Every SSC MTS online test here is free to attempt and scores instantly.',
    strategy: 'The two sessions are marked differently, and that changes how you should attempt each. Session 1 is 40 questions of Numerical and Reasoning with no penalty for a wrong answer, so leave nothing blank. Session 2 is 50 questions of General Awareness and English, and each wrong answer costs 1 mark against a question worth 3. A blind four-option guess there is exactly break-even, so guess only when you can rule an option out. Session 1 also acts as a gate: Session 2 is evaluated only for candidates who clear it. One difference to note, this SSC MTS test series runs both sessions under a single timer for practice, while the real exam runs them as two separately timed sittings.',
    title: 'SSC MTS Mock Test 2026: Free Online Test Series',
    description: 'Free SSC MTS and Havaldar mock tests. Session 1 carries no penalty and Session 2 deducts a mark, so practise each the way it is actually scored.',
  },
  'rrb-alp': {
    lead: 'A free RRB ALP mock test series covering both computer-based stages. The RRB ALP CBT 1 mock test is 75 questions in 60 minutes. The RRB ALP CBT 2 mock test covers Part A, 100 questions in 90 minutes. Every RRB ALP online test is free and needs no login.',
    strategy: 'The two stages do different jobs, so prepare them differently. CBT 1 is a screening test: its marks are not counted when the final panel is prepared, and it exists to shortlist you. CBT 2 Part A is where the score matters, and half of it is a single section, Basic Science and Engineering, worth 50 of the 100 questions. What this RRB ALP test series does not cover is the rest of the process. Part B and the Computer Based Aptitude Test are separate later stages, and you will need other preparation for those.',
    title: 'RRB ALP Mock Test 2026: Free CBT 1 & CBT 2 Tests',
    description: 'Practise RRB ALP CBT 1 and CBT 2 Part A with free timed mocks and instant results. Part B and the CBAT are not currently covered.',
  },
  'rrb-je': {
    lead: 'A free RRB JE mock test series covering both computer-based stages of Junior Engineer recruitment. The RRB JE CBT 1 mock test is 100 questions in 90 minutes. The RRB JE CBT 2 mock test is 150 questions in 120 minutes, dominated by branch-specific technical work. Every RRB JE online test here is free to attempt.',
    strategy: 'CBT 1 is common to every JE, DMS and CMA discipline, so everyone sits the same paper. CBT 2 is not. Its Technical Abilities section alone is 100 of the 150 questions, and those questions are specific to your engineering branch. That is the shift worth planning for: general preparation carries you through CBT 1, and branch depth decides CBT 2. Both stages deduct one third of a mark for a wrong answer, so the guessing maths is the same in each. The RRB JE test series is split by stage for that reason.',
    title: 'RRB JE Mock Test 2026: Free CBT 1 & CBT 2 Tests',
    h1: 'RRB JE (Junior Engineer) Mock Test 2026',
    description: 'Free RRB JE mock tests for CBT 1 and CBT 2, where 100 of 150 questions are branch-specific. Civil and Mechanical technical syllabi covered.',
  },
  'rbi-assistant': {
    lead: 'A free RBI Assistant mock test series covering both online stages. The RBI Assistant Prelims mock test is 100 questions in 60 minutes. The RBI Assistant Mains mock test is 200 questions in 135 minutes. Every RBI Assistant online test is free and scores the moment you submit.',
    strategy: 'Both online stages are sectionally timed, which is the habit worth building. Prelims gives 20 minutes to each of English, Numerical Ability and Reasoning Ability, and Mains times each of its five sections separately too. Neither paper lets you carry unused minutes forward. Prelims marks are used only to shortlist, so the merit list is decided by Mains. Selection then ends with a Language Proficiency Test. That is a spoken and written check on a regional language, not an objective paper, so it sits outside this RBI Assistant test series.',
    title: 'RBI Assistant Mock Test 2026: Free Prelims & Mains Tests',
    description: 'Free RBI Assistant mock tests for Prelims and Mains, both sectionally timed. The Language Proficiency Test sits outside an objective series.',
  },
  'ibps-rrb-office-assistant': {
    lead: 'A free IBPS RRB Clerk mock test series, listed under the official name Office Assistant (Multipurpose). The Prelims mock test is 80 questions in 45 minutes, and the Mains mock test is 200 questions in 120 minutes. Every IBPS RRB Office Assistant online test here is free to attempt.',
    strategy: 'Prelims is the fastest paper of any banking exam on this site. Eighty questions in 45 minutes leaves about 34 seconds each, and the arithmetic is the same whichever way the clock is run. Both sections carry 40 questions and 40 marks, so neither is worth more per question than the other, and a wrong answer costs a quarter mark either way. What decides the paper is how quickly you abandon a question that is not coming. At 34 seconds a question, two minutes spent rescuing one is four questions you never reach. Practising against the clock is what turns that from a thing you know into a thing you do.',
    title: 'IBPS RRB Clerk Mock Test 2026: Free Office Assistant Tests',
    h1: 'IBPS RRB Clerk (Office Assistant) Mock Test 2026',
    description: 'Free IBPS RRB Clerk mock tests, officially Office Assistant. Prelims is 80 questions in 45 minutes, the fastest banking paper on this site.',
  },
  'ibps-rrb-officer-scale-1': {
    lead: 'A free IBPS RRB PO mock test series, listed under the official name Officer Scale I. The Prelims mock test is 80 questions in 45 minutes across Reasoning and Quantitative Aptitude. The Mains mock test is 200 questions in 120 minutes. Every IBPS RRB Officer Scale I online test is free to attempt.',
    strategy: 'Mains looks evenly split and is not. All five sections carry 40 questions, and they are not worth the same. Reasoning and Quantitative Aptitude pay 1.25 marks a question, so 50 marks each. General Awareness and English pay 1 mark, so 40 each. Computer Knowledge pays 0.5, for a total of 20. So two sections carry half the paper\'s marks on two fifths of its questions. Time spent rescuing Computer Knowledge is the least valuable minute in the paper. This IBPS RRB PO test series marks each section the way the real one does, so that shows up in your result.',
    title: 'IBPS RRB PO Mock Test 2026: Free Officer Scale I Tests',
    h1: 'IBPS RRB PO (Officer Scale I) Mock Test 2026',
    description: 'Free IBPS RRB PO mock tests, officially Officer Scale I. Mains sections carry unequal marks, and every test here is scored the same way.',
  },
  'rbi-grade-b': {
    lead: 'A free RBI Grade B mock test series for the General cadre. The RBI Grade B Phase 1 mock test is 200 questions in 120 minutes across General Awareness, English, Quantitative Aptitude and Reasoning. Every RBI Grade B online test here is free and returns a section-wise result.',
    strategy: 'Phase I is decided by General Awareness more than most candidates expect. It is 80 of the 200 questions, and its window is 25 minutes, which works out at under 19 seconds a question. Reasoning gets 45 minutes for 60 questions, close to three times as long per question. The four windows are locked at 25, 25, 25 and 45 minutes, so nothing can be moved between them. On coverage, this RBI Grade B test series is Phase 1 only. Phase II is Economic and Social Issues, English Writing Skills, and Finance and Management, and it is largely descriptive, so it is not published here.',
    // Phase II has zero published tests and the intro says so. A title
    // promising "Phase 1 & 2" contradicted the page's own body copy.
    title: 'RBI Grade B Mock Test 2026: Free Phase 1 Test Series',
    description: 'Free RBI Grade B Phase 1 mock tests with locked sectional windows and instant results. Phase II is largely descriptive and is not published here.',
  },
  'rrb-technician': {
    lead: 'A free RRB Technician mock test series covering both recruitment levels. The Technician Grade 1 Signal mock test and the Technician Grade 3 mock test are each 100 questions in 90 minutes. Both deduct one third of a mark for a wrong answer. Every RRB Technician online test is free to attempt.',
    strategy: 'The two papers share a shape and not a syllabus, so pick the right one before you practise. Grade I Signal leans technical: Basic Science and Engineering is 35 questions and Basics of Computers and Applications another 20, so more than half the paper is technical work. Grade III has no computer section at all, and puts 40 questions into General Science instead. Preparing for one does not prepare you for the other. Each level runs a single CBT that decides shortlisting for Document Verification directly, so there is no second paper to recover in. The RRB Technician test series keeps the two levels apart for the same reason.',
    title: 'RRB Technician Mock Test 2026: Free Grade I & III Tests',
    description: 'Free RRB Technician mock tests kept separate for Grade I Signal and Grade III, because the two levels share a format but not a syllabus.',
  },
  'rpf-constable': {
    lead: 'A free RPF Constable mock test series built to the Railway Protection Force CBT. The paper is 120 questions in 90 minutes, with one third of a mark deducted for each wrong answer. Every RPF Constable online test here is free to attempt and scores instantly.',
    strategy: 'Ninety minutes for 120 questions is 45 seconds each, and the whole paper runs on one composite clock with no sectional lock. On the penalty, a completely blind four-option guess is break-even: one third lost on three wrong answers cancels the one mark gained on the fourth. Rule out even one option and attempting becomes worthwhile. What this RPF Constable test series covers is the CBT only. The Physical Efficiency Test, Physical Measurement Test and document verification come later and are not something a mock can prepare you for.',
    title: 'RPF Constable Mock Test 2026: Free CBT Test Series',
    description: 'Free RPF Constable mock tests for the 120-question CBT with one-third negative marking. Physical and measurement stages are outside these mocks.',
  },
  'niacl-ao': {
    lead: 'A free NIACL AO mock test series for the Administrative Officer Generalist post. The NIACL AO Prelims mock test is 100 questions in 60 minutes. The NIACL AO Mains mock test covers the 200-question objective paper in 150 minutes. Every NIACL AO online test is free to attempt.',
    strategy: 'Both stages lock their sections, and Mains locks them unevenly: 40, 40, 30 and 40 minutes across the four. Reasoning, English, General Awareness and Quantitative Aptitude carry 50 questions each, so General Awareness gives you 30 minutes for the same load the others get 40 for. That is the section to build speed in. On coverage, this NIACL AO test series is the objective paper. Mains also carries a separate 30-minute Descriptive Test of letter writing and essay. You must qualify it, but it is not counted for shortlisting or final selection, and it is not covered here.',
    title: 'NIACL AO Mock Test 2026: Free Prelims & Mains Tests',
    description: 'Free NIACL AO mock tests for Prelims and the Mains objective paper. The separate 30-minute Descriptive Test is qualifying and is not covered.',
  },
  // Batch 3. Every number below is either read from the primary notice named on
  // the exam's own pattern block, or arithmetic on those numbers. Where our
  // product does not cover a stage, the copy says so rather than implying it.
  'ssc-selection-post': {
    lead: 'A free SSC Selection Post mock test series for Phase XIV. The Computer Based Examination is 100 questions for 200 marks in 60 minutes, divided into four parts of 25 questions each. Phase XIV runs three separate papers, one at Matriculation level, one at 10+2 level and one at Graduation level, and all three share that structure.',
    strategy: 'Each of the four parts carries its own 15-minute timer, and time left over in one part does not move to the next. That works out at 36 seconds a question, with nothing to borrow from a part you found easy. The marking rewards attempting. A correct answer pays 2 marks and a wrong one costs 0.5, so an attempt is worth making whenever you would be right more than one time in five. On four options, a blind guess is already better than that. It is the part timer rather than the question count that this SSC Selection Post test series is built to rehearse.',
    title: 'SSC Selection Post Mock Test 2026: Free Phase 14 Tests',
    h1: 'SSC Selection Post Phase 14 Mock Test 2026',
    description: 'Free SSC Selection Post Phase 14 mock tests. Four parts of 25 questions, each on its own 15-minute timer, scored 2 marks right and 0.5 wrong.',
  },
  'ctet': {
    lead: 'A free CTET mock test series for Paper I, the Primary Stage paper taken by candidates who want to teach classes 1 to 5. Paper I is 150 questions in 150 minutes across Child Development and Pedagogy, Mathematics, Environmental Studies and two languages. Every CTET online test here is free to attempt.',
    strategy: 'Two rules decide how Paper I should be attempted. There is no negative marking, so a blank and a wrong answer score exactly the same, and anything left unanswered is a mark you gave away for nothing. And 150 questions in 150 minutes is one minute each, which is generous next to most competitive papers. The difficulty in CTET is not speed, it is pedagogy. Child Development and Pedagogy alone carries 30 of the 150 questions, and the two language sections are half comprehension and half language pedagogy rather than grammar drills. Language I and Language II are chosen by the candidate on the real form and must differ from each other. The full mock here uses English as Language I and Hindi as Language II, which is one valid pairing rather than a requirement. On coverage, this CTET test series is Paper I only. Paper II, the Elementary Stage paper for classes 6 to 8, is not built here.',
    title: 'CTET Mock Test 2026: Free Paper 1 Practice Tests',
    h1: 'CTET Paper 1 Mock Test 2026 (Primary Stage)',
    description: 'Free CTET Paper 1 mock tests for the Primary Stage. 150 questions in 150 minutes with no negative marking, so nothing is worth leaving blank.',
  },
  'lic-aao': {
    lead: 'A free LIC AAO mock test series for the Generalist post. Prelims is 100 questions in 60 minutes across Reasoning Ability, Quantitative Aptitude and English Language, and this page covers Prelims and Mains. Every LIC AAO online test here is free to attempt.',
    strategy: 'Prelims has two rules that pull against each other. There is no negative marking, so every question deserves an answer before its window shuts. But the sections are separately timed at 20 minutes each, so those answers have to be in before that happens. Reasoning Ability and Quantitative Aptitude give you 35 questions in that window, which is 34 seconds each. English Language gives you 30, so 40 seconds. Put those together and the habit worth building is simple: spend the last half minute of every section filling in whatever is still blank, because an unanswered question and a wrong one cost the same here.',
    title: 'LIC AAO Mock Test: Free Prelims & Mains Practice',
    h1: 'LIC AAO Mock Test (Generalist)',
    description: 'Free LIC AAO Generalist mock tests for Prelims and Mains. Prelims runs 20-minute sectional timers with no negative marking.',
  },
  'rpf-si': {
    lead: 'A free RPF SI mock test series for the Computer Based Test. The CBT is 120 questions for 120 marks in 90 minutes, across Arithmetic, General Intelligence and Reasoning, and General Awareness. Every RPF SI online test here is free to attempt.',
    strategy: 'General Awareness is the single largest section at 50 questions, against 35 each for Arithmetic and for General Intelligence and Reasoning. Ninety minutes across 120 questions leaves 45 seconds each. The marking is where this paper gets interesting: a wrong answer costs one third of a mark, and against four options a completely blind guess breaks even exactly, because the mark you win a quarter of the time cancels the third you lose the other three quarters. Rule out even one option and attempting turns profitable. This series stops at the CBT. Selection then continues through physical and medical standards and document verification, which no mock test can stand in for.',
    title: 'RPF SI Mock Test: Free CBT Test Series',
    h1: 'RPF SI Mock Test (CBT)',
    description: 'Free RPF SI mock tests for the 120-question CBT. General Awareness is the largest section, and a blind four-option guess breaks even exactly.',
  },
  'ssc-cht': {
    lead: 'A free SSC JHT mock test series, listed here under the official name Combined Hindi Translators. Paper I is 200 objective questions for 200 marks in two hours, split evenly between General Hindi and General English. Every SSC JHT online test here is free to attempt.',
    strategy: 'Paper I is two halves of 100 questions, and each half has its own 60-minute timer. Once the General Hindi hour closes it does not reopen, so minutes saved there cannot be spent rescuing General English. That is 36 seconds a question on both sides. The marking is 1 mark for a right answer and 0.25 off for a wrong one, so an attempt pays whenever you would be right more than one time in five. On coverage, this SSC JHT test series is Paper I. Paper II is descriptive, translation and essay work rather than multiple choice, and it is not built here.',
    title: 'SSC JHT Mock Test 2026: Free Paper 1 Test Series',
    h1: 'SSC JHT (Combined Hindi Translators) Mock Test 2026',
    description: 'Free SSC JHT mock tests for Paper 1. General Hindi and General English each get their own 60-minute timer, and neither lends time to the other.',
  },
  'sebi-grade-a': {
    lead: 'A free SEBI Grade A mock test series for the General Stream. Phase I Paper 1 is 80 questions for 100 marks in 60 minutes, spread evenly across General Awareness, English Language, Quantitative Aptitude and Test of Reasoning. This page covers Phase I and Phase II for that stream.',
    strategy: 'The marks arithmetic is worth working out before you sit Paper 1. Eighty questions carry 100 marks, so each one pays 1.25, and a wrong answer costs 0.3125, which is exactly a quarter of what a right one is worth. An attempt therefore breaks even at one in five, and a blind guess across four options sits above that line. All four sections carry 20 questions for 25 marks, so none is worth more per question than another, and there is no case for protecting one at the expense of the rest. Sixty minutes across 80 questions is 45 seconds each. On coverage, SEBI recruits across several streams and this SEBI Grade A test series is built for the General Stream. The Legal, Information Technology, Engineering and other specialist streams are not covered here.',
    title: 'SEBI Grade A Mock Test: Free Phase 1 & 2 Practice',
    h1: 'SEBI Grade A Mock Test (General Stream)',
    description: 'Free SEBI Grade A General Stream mock tests for Phase 1 and Phase 2. Every question pays 1.25 marks and a wrong answer costs exactly a quarter of that.',
  },
  // Batch 4. CLAT, AILET and NMAT all had their official pattern corrected
  // first: each was publishing this site's own shortened mock as the exam's
  // structure. The copy below is written against the corrected figures.
  'clat': {
    lead: 'A free CLAT mock test series for the UG paper. CLAT UG is 120 questions for 120 marks in two hours, across English Language, Current Affairs and General Knowledge, Legal Reasoning, Logical Reasoning and Quantitative Techniques. Every CLAT online test here is free to attempt.',
    strategy: 'Two hours for 120 questions is a minute each, which sounds comfortable until you see how the paper is built. Almost every question hangs off a passage, so that minute has to cover the reading as well as the answering, and the reading is where CLAT is decided. Legal Reasoning is the largest section at 30 questions, and it does not test law you have memorised: each passage states the principle it wants applied, so the work is comprehension under a rule rather than recall. A wrong answer costs 0.25 against 1 for a right one, so an attempt is worth making whenever you would be right more than one time in five. On coverage, this CLAT test series is English Language, Legal Reasoning, Logical Reasoning and Quantitative Techniques. Current Affairs and General Knowledge is not built here, because it turns on current facts that need checking against a source rather than reasoning you can verify on the page.',
    title: 'CLAT Mock Test: Free UG Online Test Series',
    h1: 'CLAT UG Mock Test',
    description: 'Free CLAT UG mock tests. 120 questions in two hours, and every Legal Reasoning passage carries the principle it wants you to apply.',
  },
  'ailet': {
    lead: 'A free AILET mock test series for the NLU Delhi entrance. AILET UG is 150 questions for 150 marks in two hours, across English, Logical Reasoning, and Current Affairs and General Knowledge. The AILET LL.M. paper is listed as a separate stage on this page. Every AILET online test here is free to attempt.',
    strategy: 'Logical Reasoning is 70 of the 150 questions. Nearly half the paper rides on a single section, which is unusual even among law entrances, and it means a candidate who reads well but reasons slowly is a weak AILET candidate regardless of how good the English is. The clock is tighter than CLAT too: 150 questions in 120 minutes leaves 48 seconds each, against CLAT\'s full minute. A wrong answer costs 0.25 against 1, so attempting pays above one in five. On coverage, this AILET test series covers English and Logical Reasoning. Current Affairs and General Knowledge is not built here, since it turns on facts that need a source rather than reasoning that can be checked on the page.',
    title: 'AILET Mock Test: Free UG Online Test Series',
    h1: 'AILET UG Mock Test',
    description: 'Free AILET UG mock tests for NLU Delhi. Logical Reasoning alone is 70 of the 150 questions, at 48 seconds a question across the paper.',
  },
  'nmat': {
    lead: 'A free NMAT by GMAC mock test series. NMAT is 108 questions in 120 minutes, split into three equal 36-question sections: Language Skills, Logical Reasoning and Quantitative Skills. Every NMAT online test here is free to attempt.',
    strategy: 'The three sections are equal in questions and in nothing else. Each carries 36, but Language Skills gets 28 minutes and Quantitative Skills gets 52, so a Quantitative question is worth 87 seconds of your time and a Language question 47. That is the most useful thing to internalise about this paper: it has already decided where your time goes, and finishing Language early buys you nothing, because time does not carry between sections. There is also no negative marking at all, which makes an unanswered question strictly worse than a guessed one. The real exam lets you choose the order of the three sections before you start; this site\'s engine runs them in a fixed order, which is a platform limit rather than an exam rule.',
    title: 'NMAT Mock Test 2026: Free Online Test Series',
    h1: 'NMAT by GMAC Mock Test 2026',
    description: 'Free NMAT by GMAC mock tests. Three equal 36-question sections on locked timers of 28, 40 and 52 minutes, with no negative marking.',
  },
  'gate': {
    lead: 'A free GATE mock test series for Computer Science and Information Technology. The CS paper is 65 questions for 100 marks in three hours, combining General Aptitude with the Computer Science syllabus. Every GATE online test here is free to attempt.',
    strategy: 'GATE rewards knowing which type of question you are looking at before you decide whether to attempt it. Multiple choice questions deduct a third of a mark on the one-mark questions and two thirds on the two-mark ones, which is calibrated so precisely that a blind guess across four options is worth exactly nothing either way: the quarter of the time you are right cancels the three quarters you are not. Rule out one option and attempting turns positive. Multiple Select and Numerical Answer Type questions carry no penalty at all, so leaving one of those blank gives away a mark for nothing. Thirty of the 65 questions are worth one mark and 35 are worth two, which means the two-mark questions decide 70 of the 100. On coverage, GATE runs many separate papers and this GATE test series is Computer Science and Information Technology only. The other GATE papers are not built here. One part of the paper does carry across all of them: General Aptitude is common to every GATE paper, which is why there is a separate 10-question General Aptitude sectional test here. It is worth 15 of the 100 marks, and it is the only slice of GATE preparation that is equally useful whichever paper you sit.',
    title: 'GATE CS Mock Test: Free Online Test Series',
    h1: 'GATE Computer Science (CS) Mock Test',
    description: 'Free GATE Computer Science mock tests. 65 questions in three hours, where a blind guess on a multiple choice question is worth exactly nothing.',
  },
  'ibps-so': {
    lead: 'A free IBPS SO mock test series for the Prelims pattern shared by the IT, Agriculture Field, HR/Personnel and Marketing Officer posts. Prelims runs 150 questions in 120 minutes for 125 marks, across English Language, Reasoning and Quantitative Aptitude. Every IBPS SO online test here is free and scores instantly.',
    strategy: 'The three sections are not worth the same, and that is the thing most candidates miss. Each gets 50 questions and its own separately timed 40-minute window, but English Language carries 0.5 marks a question while Reasoning and Quantitative Aptitude carry 1. The deduction is a flat 0.25 everywhere. So a wrong English answer costs half of what a right one earns, against a quarter in the other two, and a guess needs to come off better than one time in three to pay in English against one time in five elsewhere. Clear English\'s own cutoff and stop; the sectional lock means the minutes you save there cannot be moved anyway, and Prelims marks do not carry into the final merit list at all.',
    description: 'Free IBPS SO Prelims mock tests. 150 questions in 120 minutes, three 40-minute locked sections, and English worth half a mark a question.',
  },
  'viteee': {
    lead: 'A free VITEEE mock test series built to the 2026 MPCEA Mathematics stream. The paper runs 125 questions in 150 minutes for 500 marks, across Mathematics, Physics, Chemistry, Aptitude and English. Every VITEEE online test here is free to attempt and returns a section-wise result.',
    strategy: 'VITEEE deducted nothing for a wrong answer in 2025 and deducts a full mark in 2026. That single change invalidates the habit any 2025 paper or older guide will have taught you. With 4 marks for a correct answer against 1 off for a wrong one, a guess breaks even at one in five, so ruling out even one of four options still leaves attempting clearly worth it. What is no longer free is the question you cannot narrow at all: that used to cost nothing and now costs a mark. Mathematics is 40 of the 125 questions and 160 of the 500 marks, the largest single block, and the whole paper runs on one 150-minute clock, so the time you take back from Aptitude and English, 15 questions between them, is yours to spend there.',
    description: 'Free VITEEE mock tests on the 2026 pattern: 125 questions in 150 minutes, and the new negative marking that replaced 2025\'s no-penalty rule.',
  },
  'nabard-grade-a': {
    lead: 'A free NABARD Grade A mock test series for Phase I. The paper runs 200 questions in 120 minutes for 200 marks, across eight sections on a single composite timer. Every NABARD Grade A online test here is free and returns a section-wise result the moment you submit.',
    strategy: 'Half this paper cannot improve your rank. Reasoning, English Language, Computer Knowledge, Quantitative Aptitude and Decision Making are qualifying only: 100 of the 200 questions, which you must clear a cutoff in and which then stop counting. The merit ranking comes from the other three, General Awareness, Economic and Social Issues, and Agriculture and Rural Development, and the last two are the biggest sections in the paper at 40 questions each. Because Phase I runs on one composite 120-minute timer rather than a sectional lock, this is actionable rather than just interesting: every minute you take back from the five qualifying sections, once you are safely past their cutoffs, is a minute you can spend on the 100 questions that decide whether you reach Mains.',
    description: 'Free NABARD Grade A Phase I mock tests. 200 questions in 120 minutes, where five of the eight sections are qualifying only and never touch your rank.',
  },
  'sidbi-grade-a-b': {
    lead: 'A free SIDBI Grade A and B mock test series. Phase I runs 200 questions in 120 minutes for 200 marks across seven sections on one composite timer, and the Phase II objective paper on MSME Finance and Credit Management is covered too. Every SIDBI online test here is free.',
    strategy: 'The Stream Specific Test is a quarter of the questions and half of everything that counts. Phase I splits into four qualifying-only sections, English Language, Reasoning Aptitude, Quantitative Aptitude and Computer Knowledge, and three that decide merit: General Awareness, the MSME paper, and the Stream Specific Test at 50 questions and 50 marks. That is 50 of the 100 merit marks resting on one section. With a single composite 120-minute clock and no sectional lock, the plan writes itself: get the four qualifying sections past their cutoffs at pace, then give the remainder of the hour to the three that rank you, weighted towards the one worth half of them.',
    description: 'Free SIDBI Grade A and B mock tests. Phase I is 200 questions in 120 minutes, and the Stream Specific Test alone carries half the merit marks.',
  },
  'srmjeee': {
    lead: 'A free SRMJEEE mock test series on the 2026 PCM route. The paper runs 130 questions in 150 minutes for 130 marks, across Physics, Chemistry, Mathematics and a combined English and Aptitude section. Every SRMJEEE online test here is free to attempt and scores instantly.',
    strategy: 'There is no negative marking, which makes one rule absolute: never leave a question unanswered. A blank and a wrong answer both score zero, so an unmarked question is a mark you declined to try for. With 130 questions in 150 minutes you have about 69 seconds each, enough to read and attempt everything if you do not stall, and the whole point of pacing here is reaching the end with every question marked rather than protecting an accuracy figure that costs you nothing to spoil. Mathematics is the largest section at 40 questions. SRMJEEE 2026 is also sat in Remote Proctored Online Mode, so practise on the machine and connection you will actually use.',
    description: 'Free SRMJEEE mock tests on the 2026 PCM route. 130 questions in 150 minutes, no negative marking, so nothing is worth leaving blank.',
  },
  'jee-advanced': {
    lead: 'A free JEE Advanced mock test series for both compulsory papers. Paper 1 is 48 questions and Paper 2 is 54, each worth 180 marks in 180 minutes across Mathematics, Physics and Chemistry. Every JEE Advanced online test here is free and returns a section-wise result.',
    strategy: 'Your guessing rule has to change inside a single paper, question type by question type. Numerical-value questions award 4 marks and deduct nothing, so leaving one blank gives away a mark for free; those should be attempted whatever your confidence. Single-correct questions pay 3 and cost 1, and matching-list questions pay 4 and cost 1, so those need a genuine elimination before they are worth touching. Multi-select questions award partial marks for a correct subset but take a mark off for any wrong option, which rewards marking only the options you can actually defend rather than all four. Both papers count, and Paper 2 adds stem-based numerical questions that also carry no penalty. Practise identifying the type before you decide, not after you have started solving.',
    description: 'Free JEE Advanced mock tests for both 2026 papers. Numerical questions carry no penalty, multi-select gives partial marks, and both papers count.',
  },
  'act': {
    lead: 'A free ACT practice series built to the Enhanced 2026 sections: English, Math, Reading and the now-optional Science. Each is a shorter TakeMockTest set for focused practice rather than the full official item count, and each ACT online test here is free and scores instantly.',
    strategy: 'No wrong answer costs you anything on the ACT, and the sections run in a fixed order with their own clocks, so those two rules combine into one habit. Because nothing is deducted, every question should carry an answer before its section ends, including pure guesses on what you never reached. Because you cannot return to a section once its time is up, that sweep has to happen inside each block rather than in a last minute at the end of the paper. Build the habit of spending the final thirty seconds of every section filling in whatever is still blank. Science has been optional since the 2026 rollout, so check whether the colleges on your list want a Science-inclusive score before deciding to sit it.',
    description: 'Free ACT practice tests on the Enhanced 2026 pattern. No penalty for a wrong answer, fixed section order, and Science now optional.',
  },
  'upsc-cse': {
    lead: 'A free UPSC CSE Prelims mock test series covering both papers. GS Paper I is 100 questions in 120 minutes for 200 marks, and CSAT is 80 questions in the same 120 minutes for 200. Every UPSC CSE online test here is free and returns a section-wise result the moment you submit.',
    strategy: 'CSAT is qualifying only. You need 33%, which is 66 of its 200 marks, and every mark above that counts for nothing: the shortlist is decided by GS Paper I alone. Preparation time is the scarce thing in this exam, and hours spent pushing a CSAT score from comfortable to strong are hours taken from the only paper that ranks you. The guessing math happens to be identical on both. GS Paper I pays 2 marks and deducts one third of that; CSAT pays 2.5 and deducts one third of that, so a guess breaks even at exactly one in four on either paper. On four options a blind guess is therefore worth precisely nothing, and the moment you can rule out a single option, attempting turns positive.',
    description: 'Free UPSC CSE Prelims mock tests for GS Paper I and CSAT. CSAT only needs 33% to qualify; GS Paper I is the paper that decides the shortlist.',
  },
  'aeee': {
    lead: 'A free AEEE mock test series on the 2026 Computer Based Test pattern. The paper runs 100 questions in 150 minutes for 300 marks, across Mathematics, Physics, Chemistry, Quantitative Aptitude and English. Every AEEE online test here is free to attempt and scores instantly.',
    strategy: 'Mathematics is the single largest section here: 40 of the 100 questions and 120 of the 300 marks, against 25 for Physics and 20 for Chemistry. Everything runs on one 150-minute clock with no sectional lock, so you are free to spend your time in proportion to where the marks actually are, and English and Quantitative Aptitude together are only 15 questions. On marking, a correct answer earns 3 and a wrong one costs 1, which puts break-even at one in four: a blind guess across four options is worth nothing on average, and eliminating one option makes attempting the better choice. With 150 minutes for 100 questions you have 90 seconds each, which is generous enough that leaving Mathematics questions unreached is a pacing failure rather than a syllabus one.',
    description: 'Free AEEE 2026 mock tests. 100 questions in 150 minutes, +3 for right and -1 for wrong, with Mathematics worth 120 of the 300 marks.',
  },
  'ssc-cpo': {
    lead: 'A free SSC CPO Paper 1 mock test series. The paper runs 200 questions in 120 minutes for 200 marks, across General Intelligence and Reasoning, General Knowledge and General Awareness, Quantitative Aptitude and English Comprehension. Every SSC CPO online test here is free and scores instantly.',
    strategy: 'The notice sets four separately timed 30-minute windows, one per section, and that is 50 questions in 30 minutes each: 36 seconds a question with no way to borrow. Finishing General Knowledge with eight minutes to spare buys you nothing in Quantitative Aptitude, so the sections have to be paced individually rather than as one two-hour paper. A wrong answer costs 0.25 against 1 for a correct one, so a guess pays from one in five upwards and a blind guess across four options is already ahead. Paper 1 is a screening test: clearing it leads to the Physical Standard and Endurance Tests before Paper 2, so treat physical preparation as running alongside this rather than after it.',
    description: 'Free SSC CPO Paper 1 mock tests. Four locked 30-minute sections, 50 questions each, at 36 seconds a question with no borrowing between them.',
  },
  'bitsat': {
    lead: 'A free BITSAT mock test series on the standard 130-question Mathematics variant. The paper runs 130 questions in 180 minutes for 390 marks, across Physics, Chemistry, English Proficiency, Logical Reasoning and Mathematics. Every BITSAT online test here is free to attempt.',
    strategy: 'Thirty of these 130 questions are not Physics, Chemistry or Mathematics at all. English Proficiency is 10 and Logical Reasoning is 20, together worth 90 of the 390 marks, and a preparation built for JEE covers none of it. That is the single most common way a strong PCM candidate underperforms here: not the syllabus they studied, but the quarter of the paper they never looked at. The rest follows the familiar shape, 3 marks for a correct answer and 1 off for a wrong one, so break-even sits at one in four and eliminating one option makes an attempt worth it. One 180-minute timer covers all five sections with no lock, which means the 30 non-PCM questions are also the cheapest place to buy back time if you have actually prepared them.',
    description: 'Free BITSAT mock tests on the 130-question Mathematics variant. English Proficiency and Logical Reasoning are 90 marks a JEE syllabus never covers.',
  },
  'met': {
    lead: 'A free MET mock test series on the 2026 B.Tech pattern. The paper runs 60 questions in 120 minutes for 240 marks, across Mathematics, Physics, Chemistry and English. Every MET online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'MET mixes two marking rules in one paper. Forty-five questions are multiple choice, paying 4 marks and deducting 1, and fifteen are Numerical Answer Type, paying the same 4 with nothing deducted for a wrong or blank entry. Those fifteen are free attempts: there is no reason to leave one unanswered, whatever your confidence, and a candidate who skips them out of caution is declining marks that cost nothing to chase. On the multiple choice questions break-even is one in five, so ruling out a single option already makes attempting worthwhile. English carries only multiple choice questions, so the penalty applies to all ten of them. With 120 minutes for 60 questions you have two minutes each, which is where the numerical questions should get their extra time.',
    description: 'Free MET 2026 B.Tech mock tests. 45 multiple choice questions deduct a mark, the 15 Numerical Answer Type questions deduct nothing.',
  },
  'jee-main': {
    lead: 'A free JEE Main mock test series for Paper 1. The paper runs 75 questions in 180 minutes for 300 marks, 25 in each of Mathematics, Physics and Chemistry. Every JEE Main online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'JEE Main penalises its numerical-value questions, and that is the detail worth carrying into the hall. Each subject has 20 multiple choice questions and 5 answered by integer entry, and NTA applies 4 marks for a correct answer and 1 off for a wrong one in both. Numerical questions carry no penalty on several other engineering entrances, including JEE Advanced and MET, so a habit built on those papers of entering a value whenever you have one will cost you marks here. Enter a number only when you have actually solved for it, not when you have a plausible guess, because there are no options to eliminate down from. Break-even on the multiple choice questions is one in five, which a single elimination clears comfortably.',
    description: 'Free JEE Main Paper 1 mock tests. 75 questions in 180 minutes, and unlike JEE Advanced, the numerical-value questions are penalised too.',
  },
  'sat': {
    lead: 'A free Digital SAT practice series for Reading and Writing, 54 questions in 64 minutes, and Math, 44 questions in 70 minutes. Both are fixed-form sets covering every official content domain rather than replicas of the adaptive modules. Every SAT online test here is free.',
    strategy: 'Nothing is deducted for a wrong answer on the SAT, so a blank is strictly worse than a guess and every question should carry an answer before time runs out. The part this practice cannot reproduce is the adaptive structure: the official test splits each section into two modules, and how you perform in the first decides the difficulty, and therefore the scoring ceiling, of the second. That makes early accuracy matter more on the real test than on any fixed-form set, including this one. Practise the front half of a section as if it were weighted, because on the day it is. These mocks report a raw correct count; the official test converts to a scaled 200 to 800 per section.',
    description: 'Free Digital SAT practice tests for Reading and Writing and Math. No penalty for a wrong answer, so nothing is worth leaving blank.',
  },
  'jamb': {
    lead: 'A free JAMB UTME practice series covering Use of English plus science, commercial and arts subject combinations. The paper runs 180 questions in 120 minutes for 400 marks on a single composite timer. Every JAMB online test here is free to attempt and scores instantly.',
    strategy: 'Use of English is a third of your questions and a quarter of your marks. It is 60 compulsory questions worth 100 marks, which is about 1.67 marks each, while every one of your three chosen subjects packs 100 marks into just 40 questions, or 2.5 marks each. A chosen-subject question is therefore worth half as much again as a Use of English question, and with one composite 120-minute clock and no per-subject lock, you decide where the minutes go. Labouring over a hard Use of English item while easier chosen-subject questions sit unattempted is the expensive trade. There is no negative marking either, so leave nothing blank: sweep the paper at the end and answer everything you did not reach.',
    description: 'Free JAMB UTME practice tests. 180 questions in 120 minutes, where a chosen-subject question is worth 2.5 marks against 1.67 for Use of English.',
  },
  'cma-final': {
    lead: 'A free CMA Final practice series covering the objective block of all ten papers. Every one of them opens with the same Section A, 15 compulsory multiple choice questions for 30 marks, timed here on its own. Every CMA Final online test here is free and returns an instant result.',
    strategy: 'Nobody sits these ten papers together, and the objective block is the smaller part of each one. ICMAI sets every paper separately: Section A is 15 compulsory multiple choice questions worth 2 marks each, 30 marks inside a 180-minute paper worth 100, with the remaining 70 marks descriptive. There is no negative marking on Section A, so every one of the 15 should carry an answer. The real reason to drill these is time rather than marks. Fifteen questions answered quickly and accurately protects the bulk of your three hours for the descriptive answers that carry the other 70 marks, and a candidate who burns forty minutes on the objective block has already damaged a paper they may still pass on knowledge.',
    description: 'Free CMA Final practice for the objective block of all ten papers. 15 compulsory questions worth 30 of each paper\'s 100 marks, with no penalty.',
  },
  'htet': {
    lead: 'A free HTET Level 1 mock test series for the Primary Teacher paper. It runs 150 questions in 150 minutes for 150 marks, across Child Development and Pedagogy, the two language sections, Environmental Studies, Mathematics, Haryana awareness, Quantitative Aptitude and Reasoning. Every HTET online test here is free.',
    strategy: 'One hundred and fifty questions in 150 minutes is exactly a minute each, and there is no negative marking anywhere in the paper. Together those mean the only way to lose a mark you could have had is to run out of time with questions still unmarked. There is no sectional lock either, so the minute-per-question figure is an average to manage across the paper rather than a limit on any one item. Child Development and Pedagogy, Environmental Studies and Mathematics are 30 questions each, 90 of the 150 between them, and that is where the paper is really decided; Haryana GK and Awareness is 10. Since a wrong answer costs nothing, finish by marking every question you skipped rather than leaving the sheet incomplete.',
    description: 'Free HTET Level 1 mock tests. 150 questions in 150 minutes with no negative marking, so an unmarked question is the only avoidable loss.',
  },
  'ssc-steno': {
    lead: 'A free SSC Stenographer mock test series for the Computer Based Examination taken by both Grade C and Grade D candidates. It runs 200 questions in 120 minutes for 200 marks, across General Intelligence and Reasoning, General Awareness, and English Language and Comprehension. Every test here is free.',
    strategy: 'Half of this paper is English. The notice sets three separately timed parts, 30 minutes each for General Intelligence and Reasoning and for General Awareness, then a full 60 minutes for English Language and Comprehension, which alone is 100 of the 200 questions. A candidate who prepares this as a general SSC paper with English as one section among three has the weighting wrong by a factor of two. The windows are locked, so time saved in the two 30-minute parts cannot be carried into the English hour. A wrong answer costs 0.25 against 1 for a correct one, so attempting pays from one in five. Grade C and Grade D sit this same paper: what separates them is the dictation speed in the Skill Test that follows, 100 words per minute against 80.',
    description: 'Free SSC Stenographer CBE mock tests. Three locked windows, and English Language and Comprehension alone is 100 of the 200 questions.',
  },
  'comedk-uget': {
    lead: 'A free COMEDK UGET mock test series on the 2026 B.E. and B.Tech PCM pattern. The paper is 180 questions for 180 marks, an even 60 each in Physics, Chemistry and Mathematics. Every COMEDK UGET online test here is free to attempt and returns a section-wise result.',
    strategy: 'Each correct answer earns 1 mark and nothing is deducted for a wrong one, which removes the guessing decision from this paper entirely: there is no question worth leaving blank, and an unmarked answer is simply a mark declined. The three subjects are weighted identically at 60 questions each, so unlike most engineering entrances there is no section that repays disproportionate preparation; a weakness in any one of them costs exactly as much as a weakness in either other. COMEDK does not publish a session duration in readable public text, so the timer used here is a TakeMockTest practice figure rather than an official one. Treat it as a pacing tool and confirm the real duration on your own admit card.',
    description: 'Free COMEDK UGET mock tests. 180 questions, an even 60 per subject, with no negative marking anywhere in the paper.',
  },
  'ielts': {
    lead: 'A free IELTS Reading practice series for both the Academic and General Training papers. Each is 40 questions in 60 minutes across three passages, rendered as multiple choice so it can be scored instantly. Every IELTS online test here is free to attempt.',
    strategy: 'The three passages get harder as you go, and the 60 minutes are yours to divide as you like, which is a combination most candidates handle badly. Splitting the hour evenly gives 20 minutes to a first passage that rarely needs it and 20 to a third that often does. Work the first passage faster than feels comfortable and bank the difference for the last one. There is no negative marking: each correct answer scores 1 mark out of 40, and that raw score converts to a band from 1 to 9 on IELTS\'s published table, so leaving a question blank can only cost you. Academic draws its passages from books, journals and newspapers; General Training opens with short everyday and workplace texts and ends with one longer general-interest piece.',
    description: 'Free IELTS Reading practice for Academic and General Training. 40 questions in 60 minutes across three passages of increasing difficulty.',
  },
  'kcet': {
    lead: 'A free KCET mock test series for the Karnataka UGCET engineering papers. Physics, Chemistry and Mathematics are 60 questions and 60 marks each, sat as three separate subject papers of 80 minutes. Every KCET online test here is free and returns a section-wise result.',
    strategy: 'KCET is three papers, not one 240-minute sitting. Physics gets 80 minutes and submits itself, then Chemistry gets a fresh 80 with no way back, then Mathematics closes it. That is 60 questions in 80 minutes each, about 80 seconds a question, and strength in Mathematics cannot rescue time lost in Physics. Nothing is deducted for a wrong answer, so every question in a paper should carry one before that paper ends; leaving anything blank is a mark declined. One rule is worth knowing before you sit it: a question with more than one answer marked earns nothing, so a stray second mark costs you the question outright, which matters more on an OMR sheet than on screen.',
    description: 'Free KCET mock tests for Physics, Chemistry and Mathematics. Three separate 80-minute subject papers, no negative marking, 60 questions each.',
  },
  'cusat-cat': {
    lead: 'A free CUSAT CAT mock test series on the 2026 B.Tech Test Code 101 pattern. The paper runs 225 questions in 180 minutes for 900 marks, with Mathematics at 90 questions, Physics at 75 and Chemistry at 60. Every CUSAT CAT online test here is free to attempt.',
    strategy: 'Two hundred and twenty-five questions in 180 minutes is 48 seconds each, and that pace is the exam. Very few papers at this level ask you to move that fast, so a candidate arriving from JEE Main practice at 144 seconds a question has to rebuild pacing before anything else. Mathematics is 90 of the 225 and 360 of the 900 marks, so the clock pressure lands hardest on the subject that carries most. There is no subject locking and free navigation throughout, which means the pacing plan is yours to make rather than the paper\'s to impose. On marking, 4 for a correct answer against 1 off for a wrong one puts break-even at one in five, so a single elimination makes attempting worthwhile.',
    description: 'Free CUSAT CAT 2026 B.Tech mock tests. 225 questions in 180 minutes, which is 48 seconds each, with Mathematics carrying 360 of the 900 marks.',
  },
  'nift': {
    lead: 'A free NIFT B.FTech General Ability Test practice series. The GAT runs 150 questions in 180 minutes, split into Section A of 100 questions over 120 minutes and Section B of 50 over a further 60. Every NIFT online test here is free and scores instantly.',
    strategy: 'Section B is a third of the questions and most of the marks. The official 2026 B.FTech GAT weights Section A at 30% toward merit and Section B at 70%, and Section A is 100 questions while Section B is 50. Per question, Section B is worth several times what Section A is, which inverts the effort most candidates put in: Section A is longer, comes first and feels like the exam. Section A also auto-submits at 120 minutes with no return, so the hour you have left for Section B is protected whether you want it or not. One caveat on scoring: the raw mark out of 150 this practice reports is not the official weighted figure, because the weighting is applied to the sections rather than the questions.',
    description: 'Free NIFT B.FTech GAT practice. Section A is 100 questions for 30% of merit; Section B is 50 questions for 70%.',
  },
  'cma-intermediate': {
    lead: 'A free CMA Intermediate practice series covering the objective block of all eight papers. In each paper that block is the same 15 compulsory multiple choice questions for 30 marks, and this series drills it alone. Every CMA Intermediate online test here is free to attempt.',
    strategy: 'Treat these 15 questions as a time investment rather than a marks one. ICMAI sets each of the eight papers separately, and in every one Section A is 15 compulsory multiple choice questions at 2 marks each, 30 marks inside a paper worth 100 across 180 minutes. The other 70 marks are descriptive, which is where a paper is usually won or lost, and where running short of time does the most damage. There is no negative marking on Section A, so every question should carry an answer, and the only real failure mode is spending too long on them. Drill these until they are fast and automatic, and the payoff arrives in the two and a half hours you then have left for everything else.',
    description: 'Free CMA Intermediate practice for the objective block of all eight papers. 15 compulsory questions worth 30 of each paper\'s 100 marks.',
  },
  'nda': {
    lead: 'A free NDA practice series covering both written papers: Mathematics, 120 questions for 300 marks, and the General Ability Test, 150 questions for 600. Each mock here is a shorter TakeMockTest set across the same syllabus areas in proportion, and every NDA online test is free.',
    strategy: 'General Knowledge alone outweighs the entire Mathematics paper. The General Ability Test is 600 marks against Mathematics\' 300, and within GAT, General Knowledge is 100 questions worth 400 while English is 50 worth 200. So the 400 marks riding on Physics, Chemistry, General Science, History, Geography and Current Events are more than the whole Mathematics paper carries, and candidates who arrive from a Class 12 science background routinely underweight it. The guessing math is the same on both papers: Mathematics pays 2.5 and deducts one third of that, GAT pays 4 and deducts one third of that, so each breaks even at exactly one in four, which is what a blind guess across four options already returns.',
    description: 'Free NDA practice for Mathematics and the General Ability Test. General Knowledge alone is 400 marks, more than the whole Mathematics paper.',
  },
  'cds': {
    lead: 'A free CDS practice series for the Elementary Mathematics and English papers. Elementary Mathematics is 100 questions for 100 marks in 2 hours; English is 120 questions for the same 100 marks in the same 2 hours. Every CDS online test here is free and scores instantly.',
    strategy: 'The English paper packs 120 questions into the same two hours that Mathematics gives to 100, so it is the faster of the two: 60 seconds a question against 72. It is also worth less per question, roughly 0.83 marks against 1, with the deduction scaled to match at about 0.28 against 0.33. That scaling is deliberate and it means the guessing rule does not change between papers: both break even at one in four, exactly what a blind guess across four options returns, so attempting pays the moment you can rule out a single option. What does change is pace. Practise English against a clock rather than for accuracy alone, because the paper that looks easier per question gives you less time to prove it.',
    description: 'Free CDS practice for Elementary Mathematics and English. English is 120 questions in the same two hours Mathematics gives to 100.',
  },
  'atma': {
    lead: 'A free ATMA mock test series on the AIMS pattern. The paper runs 180 questions in 180 minutes for 180 marks, across six equal 30-question sections: Analytical Reasoning Skills, Verbal Skills and Quantitative Skills, each appearing twice. Every ATMA online test here is free.',
    strategy: 'ATMA is six exams rather than one. Each of the six sections gets its own 30-minute window in a fixed order, and once a window closes there is no carryover and no return. That makes the paired sections the thing to understand: Analytical Reasoning Skills I and II are separately timed, so a slow start in the first cannot be repaired in the second, and the same holds for the Verbal and Quantitative pairs. Thirty questions in 30 minutes is a clean minute each, which is the pacing target to rehearse section by section rather than across the paper. A correct answer earns 1 and a wrong one costs 0.25, so break-even sits at one in five and a single elimination makes attempting worth it.',
    description: 'Free ATMA mock tests. Six separately timed 30-minute sections in fixed order, 30 questions each, with no carryover between them.',
  },
  'jain-jet': {
    lead: 'A free JAIN JET mock test series on the 2026 B.Tech pattern. The paper runs 150 questions in 150 minutes for 150 marks, across Physics, Chemistry, Mathematics, Aptitude, Logical Reasoning and English. Every JAIN JET online test here is free to attempt and scores instantly.',
    strategy: 'Only 90 of these 150 questions are Physics, Chemistry and Mathematics. English is 30 on its own, and Aptitude and Logical Reasoning are 15 each, so 60 questions, a full 40% of the paper, sit outside the syllabus a JEE-shaped preparation covers. That is the gap worth closing first, because it is the cheapest: those sections reward general reading and practice rather than another pass through mechanics. Nothing is deducted for a wrong answer, so no question is worth leaving blank, and with 150 questions in 150 minutes you have a minute each, enough to reach the end if you do not stall. All six sections sit under one unrestricted timer, so you choose where the minutes go.',
    description: 'Free JAIN JET 2026 mock tests. 60 of the 150 questions are English, Aptitude and Logical Reasoning rather than PCM, with no negative marking.',
  },
  'dsssb-teaching-recruitment': {
    lead: 'A free DSSSB TGT Mathematics mock test series for the one-tier technical paper. It runs 200 questions in 120 minutes for 200 marks, across Mathematics and Teaching Methodology plus five general sections. Every DSSSB online test here is free and returns a section-wise result.',
    strategy: 'Half this paper is your subject. Mathematics and Teaching Methodology is 100 of the 200 questions, and the other five sections, Arithmetical and Numerical Ability, English, General Awareness, Hindi and General Intelligence, are 20 questions each. A candidate preparing this as a general Delhi government paper with some maths in it has the weighting backwards. The pace is the other half of the problem: 200 questions in 120 minutes is 36 seconds each, with no official sectional lock, so the whole two hours is yours to allocate and the subject block is where most of it belongs. A wrong answer costs 0.25 against 1 for a correct one, so attempting pays from one in five upwards.',
    description: 'Free DSSSB TGT Mathematics mock tests. 200 questions in 120 minutes, where the subject block alone is 100 of them.',
  },
  'kvs-teaching-recruitment': {
    lead: 'A free KVS PRT Tier 1 mock test series. The paper runs 100 questions in 120 minutes for 300 marks, across Basic Computer Literacy, English and Hindi language competency, General Knowledge, General Reasoning and Numeric Ability. Every KVS online test here is free to attempt.',
    strategy: 'Three marks for a correct answer and one off for a wrong one is a wider spread than most teaching papers use, and it changes the guessing calculus in your favour. Break-even sits at one in four, which is exactly what a blind guess across four options returns, so the moment you can rule out a single option an attempt is worth more than a blank. Multiple responses are treated as wrong, so mark one answer and move on. The paper is 100 questions in 120 minutes, which is a comfortable 72 seconds each with no official sectional lock, and the two language sections are only 10 questions apiece against 20 for each of the other four. Spend your time where the questions are.',
    description: 'Free KVS PRT Tier 1 mock tests. 100 questions for 300 marks at +3 and -1, so a guess breaks even at one in four.',
  },
  'nvs-teaching-recruitment': {
    lead: 'A free NVS TGT Mathematics Tier 1 mock test series. Tier 1 runs 100 questions in 120 minutes for 300 marks, across Basic Computer Literacy, English and Hindi language competency, General Knowledge, General Reasoning and Numeric Ability. Every NVS online test here is free.',
    strategy: 'There is no Mathematics subject paper in Tier 1, despite the post title. Tier 1 is a common screening paper: computer literacy, two language sections, General Knowledge, General Reasoning and Numeric Ability, and Numeric Ability is general numeracy rather than the subject you will teach. The subject-specific testing happens at Tier 2, which this site does not build. So preparation splits cleanly in two, and the mistake is spending Tier 1 preparation time on the mathematics syllabus that Tier 2 will actually ask about. On marking, 3 for a correct answer and 1 off for a wrong one puts break-even at one in four, and multiple responses count as wrong.',
    description: 'Free NVS TGT Tier 1 mock tests. Tier 1 is a common screening paper with no subject content; the mathematics comes at Tier 2.',
  },
  'ssc-je': {
    lead: 'A free SSC JE practice series for the two sections of Paper I that every candidate sits regardless of discipline: General Intelligence and Reasoning and General Awareness, 50 questions each. Every SSC JE online test here is free and returns a section-wise result.',
    strategy: 'Know what this covers before you read a score from it. Paper I is 200 questions for 200 marks, and only 100 of them are common: the other 100 are General Engineering in your own notified discipline. Paper II is a further 100 questions for 300 marks, General Engineering again. So 400 of the 500 total marks are discipline-specific, and they are the part this site does not build, because Civil, Electrical and Mechanical are three separate professional syllabi rather than variants of one. The mock-test page states that coverage on the test itself. One thing the notice does not settle: it gives Paper I a single 120-minute duration and no per-part times, so whether the three parts are separately timed is not established here.',
    description: 'Free SSC JE practice for the two common sections of Paper I. 400 of the 500 total marks are discipline-specific General Engineering.',
  },
  'territorial-army': {
    lead: 'A free Territorial Army mock test series for the written examination. It runs 100 questions in 2 hours for 100 marks, split as Reasoning at 40 questions, General Knowledge at 30 and English at 30. Every Territorial Army online test here is free to attempt and scores instantly.',
    strategy: 'There is no Mathematics section in the current cycle, and that surprises candidates who prepared from older material or from other defence entries. The paper is Reasoning, General Knowledge and English only, with Reasoning the largest at 40 of the 100 questions. Numerical work still appears inside Reasoning rather than as a subject of its own, so the arithmetic you need is the arithmetic a reasoning question demands. Two hours for 100 questions is a generous 72 seconds each, which makes this a paper where accuracy matters more than pace. A wrong answer costs one third of a mark against 1 for a correct one, so break-even is one in four: exactly a blind guess, and positive the moment you rule one option out.',
    description: 'Free Territorial Army mock tests. 100 questions in two hours across Reasoning, General Knowledge and English, with no Mathematics section.',
  },
  'inet': {
    lead: 'A free INET mock test series for the Indian Navy officer entry examination. It runs 100 questions in 2 hours for 400 marks, across four equal sections of 25 questions and 100 marks each. Every INET online test here is free to attempt and returns a section-wise result.',
    strategy: 'Every section carries its own qualifying minimum, and that is what makes INET different from a paper you can play to your strengths. English, Reasoning and Numerical Ability, General Science and Mathematical Aptitude, and General Knowledge are 25 questions and 100 marks each, and a candidate who scores heavily across three of them and falls below the minimum in the fourth does not qualify, whatever the total says. So the section you are weakest in sets your outcome, not the section you are best in, and preparation time belongs there rather than on widening a lead you cannot spend. Marking is 4 up against 1 off, which sets the attempt threshold at one in five: worth taking on anything you can narrow, in the qualifying section you are weakest in above all.',
    description: 'Free INET mock tests. Four equal 100-mark sections, each with its own qualifying minimum, so your weakest section decides the outcome.',
  },
  'agniveer-vayu': {
    lead: 'A free Agniveer Vayu mock test series for the Indian Air Force written test. It runs 100 questions in 85 minutes for 100 marks, across English, Physics, Mathematics, and Reasoning and General Awareness. Every Agniveer Vayu online test here is free and scores instantly.',
    strategy: 'Eighty-five minutes for 100 questions is 51 seconds each, and that is the tightest constraint in this paper. It is not a paper you reason your way through slowly: Physics and Mathematics are 25 questions apiece and the arithmetic has to be quick rather than thorough, which means drilling standard forms until they are recall rather than derivation. Reasoning and General Awareness is the largest block at 30 questions, and it is also the fastest to answer when prepared, so it is where time gets bought back for the calculation sections. A wrong answer costs 0.25 against 1 for a correct one, putting break-even at one in five, so guessing after a single elimination is clearly worth it and blind guessing on what you never reached still edges ahead.',
    description: 'Free Agniveer Vayu mock tests. 100 questions in 85 minutes, about 51 seconds each, across English, Physics, Mathematics and Reasoning.',
  },
  'navy-ssr': {
    lead: 'A free Navy SSR mock test series for the Indian Navy Agniveer written test. It runs 100 questions in 60 minutes for 100 marks, across four equal sections of 25 questions: Science, Mathematics, English and General Knowledge. Every Navy SSR online test here is free.',
    strategy: 'Sixty minutes for 100 questions is 36 seconds each, which is faster than almost any other defence entry and faster than most candidates expect. At that pace there is no time to work a Mathematics question from first principles, so the preparation that pays is recognition: standard question shapes you have seen enough times to answer without setting them up. The four sections are exactly equal at 25 questions each, so none of them repays disproportionate preparation, and a weakness anywhere costs the same. A wrong answer costs 0.25 against 1, so break-even is one in five and guessing is worth it after one elimination. This site covers English and Mathematics; Science and General Knowledge are not built here.',
    description: 'Free Navy SSR mock tests. 100 questions in 60 minutes, about 36 seconds each, across four equal 25-question sections.',
  },
  'slat': {
    lead: 'A free SLAT mock test series for the Symbiosis law entrance. It runs 60 questions in 60 minutes for 60 marks, across five equal sections of 12 questions: Logical Reasoning, Legal Reasoning, Analytical Reasoning, Reading Comprehension and General Knowledge. Every SLAT online test here is free.',
    strategy: 'SLAT has no negative marking at all, which separates it from every other major law entrance. On CLAT, AILET and both Maharashtra CET Law variants a wrong answer costs you 0.25, so a habit of leaving uncertain questions blank carries across from that practice and costs you here for nothing: on SLAT a blank and a wrong answer score identically, so there is no question worth skipping. The five sections are exactly 12 questions each, so no single area dominates the paper, and free navigation between them under one 60-minute clock means you can take the sections in whatever order suits you. Sixty questions in 60 minutes is a minute each, so the job is reaching the end with everything marked.',
    description: 'Free SLAT mock tests. 60 questions in 60 minutes across five equal sections, and the only major law entrance with no negative marking.',
  },
  'cmat': {
    lead: 'A free CMAT mock test series on the NTA pattern. It runs 100 questions in 180 minutes for 400 marks, across five equal 20-question sections including Innovation and Entrepreneurship. Every CMAT online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'Innovation and Entrepreneurship is a fifth of this paper and appears on no other major MBA entrance. It is 20 questions and 80 marks, the same as Quantitative Techniques or Language Comprehension, and a candidate preparing CMAT on CAT material covers four of its five sections and none of that one. It is also the most learnable section in the paper, being closer to defined content than to a reasoning skill. On pacing, 180 minutes for 100 questions is 108 seconds each, unusually generous for this level, and there is no sectional time limit, so the whole three hours is yours to allocate. With 4 marks for a correct answer against 1 off, break-even is one in five and a single elimination makes an attempt worthwhile.',
    description: 'Free CMAT mock tests. 100 questions in 180 minutes, and Innovation and Entrepreneurship is 80 marks no other MBA entrance tests.',
  },
  'tancet-mba': {
    lead: 'A free TANCET MBA mock test series on the Anna University pattern. It runs 100 questions in 120 minutes for 100 marks, across five equal 20-question sections: Business Situations, Reading Comprehension, Quantitative Aptitude, Data Sufficiency and General English. Every TANCET online test here is free.',
    strategy: 'Data Sufficiency is a full fifth of this paper, which is unusual enough to reshape your preparation. Most MBA entrances scatter a handful of data sufficiency questions inside a quantitative section; TANCET gives it 20 questions of its own, equal to Quantitative Aptitude. It is a distinct skill from ordinary problem solving, since the task is deciding whether the given statements settle the question rather than working out the answer, and time spent computing a value you were never asked for is time wasted. Business Situations is another 20 questions in the same mould of judgement rather than calculation. With 120 minutes for 100 questions you have 72 seconds each, and a wrong answer costs 0.25 against 1, so break-even is one in five.',
    description: 'Free TANCET MBA mock tests. Data Sufficiency is 20 of the 100 questions, a full fifth of the paper, alongside Business Situations.',
  },
  'kerala-mca': {
    lead: 'A free Kerala MCA entrance mock test series. The paper runs 120 questions in 120 minutes for 120 marks, across Computer Science, Mathematics and Statistics, Quantitative Aptitude and Logical Ability, English and General Knowledge. Every Kerala MCA online test here is free to attempt.',
    strategy: 'Computer Science is 50 of the 120 questions, more than Mathematics and Statistics and Quantitative Aptitude carry together at 25 each. That weighting is the opposite of what many candidates assume from other MCA entrances, where general aptitude dominates and the computing content is lighter, so a preparation split by habit rather than by this paper will underweight the largest section by a wide margin. English is 15 questions and General Knowledge only 5, which makes them the cheapest to leave until last. There is no negative marking, so an unanswered question is simply a mark declined, and 120 questions in 120 minutes gives you a clean minute each to reach the end with everything marked.',
    description: 'Free Kerala MCA entrance mock tests. 120 questions in 120 minutes, with Computer Science alone worth 50 of them and no negative marking.',
  },
  'ksdat': {
    lead: 'A free KSDAT mock test series for the B.Des entrance. The paper runs 100 questions in 100 minutes for 100 marks, across Design Awareness, English, Numerical Ability and Analytical Aptitude, General Knowledge and Social and Basic Sciences. Every KSDAT online test here is free.',
    strategy: 'Design Awareness is the largest section at 30 of the 100 questions, and it is the one a general aptitude preparation will not touch. English, numerical ability and general knowledge are 60 questions between them and reward the same work any entrance does; the remaining 30 ask what you know about design as a field, which is learnable but only if you start. Nothing is deducted for a wrong answer, so no question is worth leaving blank, and 100 questions in 100 minutes gives you a clean minute each to reach the end with everything marked.',
    description: 'Free KSDAT B.Des mock tests. 100 questions in 100 minutes, no negative marking, with Design Awareness the largest section at 30.',
  },
  'nmims-cet': {
    lead: 'A free NMIMS-CET mock test series on the 2026 B.Tech PCM pattern. The paper runs 120 questions in 120 minutes for 120 marks, across Physics, Chemistry, Mathematics, Logical Intelligence and Verbal Reasoning. Every NMIMS-CET online test here is free to attempt and scores instantly.',
    strategy: 'The official handout publishes a per-section time allocation, 30 minutes each for Physics, Chemistry and Mathematics, 20 for Logical Intelligence and 10 for Verbal Reasoning, but it does not say those windows are locked or that a section auto-submits. So treat the split as a budget rather than a rule: useful for pacing, not something to assume you cannot cross. Ninety of the 120 questions are PCM and the other 30 are reasoning and verbal, which is a larger non-PCM share than most engineering entrances. There is no negative marking, so nothing is worth leaving blank.',
    description: 'Free NMIMS-CET 2026 B.Tech mock tests. 120 questions in 120 minutes with published per-section allocations and no negative marking.',
  },
  'chandigarh-cucet': {
    lead: 'A free CUCET mock test series for Chandigarh University\'s 10+2 Non-Medical PCM route. The paper runs 100 questions in 120 minutes for 100 marks, across English, Physics, Chemistry, Mathematics and Aptitude. Every CUCET online test here is free to attempt and returns a section-wise result.',
    strategy: 'A quarter of this paper is not PCM. English is 10 questions and Aptitude is 15, so 25 of the 100 sit outside the syllabus most candidates arrive with, and they are worth the same mark each as a Physics question. Since there is no negative marking and no sectional lock, those 25 are the cheapest marks in the paper: attempt them early, bank the time, and spend it on the 75 that need working. With 120 minutes for 100 questions you have 72 seconds each, comfortable enough that finishing with anything unmarked is a pacing failure rather than a knowledge one.',
    description: 'Free CUCET mock tests for the 10+2 Non-Medical PCM route. 100 questions in 120 minutes, no negative marking, 25 of them outside PCM.',
  },
  'imu-cet': {
    lead: 'A free IMU-CET mock test series for the UG Technical paper. It runs 200 questions in 180 minutes for 200 marks, across English, General Aptitude, Physics, Chemistry and Mathematics. Every IMU-CET online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'Chemistry is the outlier here: 20 questions against 50 each for Physics and Mathematics, and 40 each for English and General Aptitude. That makes it the smallest section by a wide margin and the easiest to over-prepare if you arrive from a JEE-style plan that weights the three sciences evenly. English and General Aptitude together are 80 of the 200 questions, twice what Chemistry gets. One caveat worth carrying: the prospectus confirms the 200-question total and the 0.25 deduction directly, but the per-section split shown here is an official-linked model rather than a figure read straight from the document.',
    description: 'Free IMU-CET UG Technical mock tests. 200 questions in 180 minutes, where English and General Aptitude together outweigh Chemistry fourfold.',
  },
  'atit': {
    lead: 'A free ATIT mock test series for the IcfaiTech B.Tech entrance. The paper runs 120 questions in 120 minutes for 120 marks, across Mathematics, Physics, Chemistry, English and Logical Reasoning. Every ATIT online test here is free to attempt and returns a section-wise result.',
    strategy: 'One thing about this paper is not settled, and it is the one that decides your guessing rule. IcfaiTech\'s admissions page confirms the 120 questions and the section split directly, but does not itself state the marking scheme, so the one mark per correct answer used here is inferred rather than published, and whether anything is deducted for a wrong answer is not established. Until you can confirm it on your own admit card or call letter, prepare as though a wrong answer costs something and attempt only what you can narrow down. Mathematics is the largest section at 35 of the 120, with English and Logical Reasoning adding 40 between them.',
    description: 'Free ATIT B.Tech mock tests. 120 questions in 120 minutes, with the official marking scheme not published and inferred here.',
  },
  'puleet': {
    lead: 'A free PULEET mock test series for Panjab University\'s engineering lateral-entry route. The paper runs 100 questions in 100 minutes for 100 marks, across General Engineering, Physics, Chemistry, Mathematics and General Aptitude. Every PULEET online test here is free and scores instantly.',
    strategy: 'This is not a Class 12 entrance, and preparing it like one wastes most of your time. PULEET admits Diploma and eligible D.Voc. candidates directly into the second year of a B.E., and its paper reflects that: General Engineering alone is 60 of the 100 questions, while Physics, Chemistry, Mathematics and General Aptitude are 10 each. Your diploma coursework is the syllabus, not a school science textbook. A wrong answer costs 0.25 against 1 for a correct one, putting break-even at one in five, and a single 100-minute clock with no sectional lock leaves you free to spend the time where those 60 questions are.',
    description: 'Free PULEET mock tests for Panjab University lateral entry. General Engineering is 60 of the 100 questions, not a Class 12 science paper.',
  },
  'nchm-jee': {
    lead: 'A free NCHM JEE mock test series for the B.Sc. Hospitality and Hotel Administration entrance. The paper runs 120 questions in 120 minutes for 480 marks, across English, Aptitude for the Service Sector, Numerical Ability, Reasoning and General Knowledge. Every NCHM JEE online test here is free.',
    strategy: 'English is more than a third of this paper. It carries 45 of the 120 questions and 180 of the 480 marks, three times what Numerical Ability, Reasoning or General Knowledge get at 15 each, and Aptitude for the Service Sector adds another 30. So two sections that reward reading and judgement rather than calculation make up 75 of the 120 questions. With 4 marks for a correct answer against 1 off for a wrong one, break-even is one in five and a single elimination makes attempting worthwhile. One limit to note: the General Knowledge questions here are frozen to a fixed content cutoff and are not refreshed with the news cycle.',
    description: 'Free NCHM JEE mock tests. English alone is 45 of the 120 questions and 180 of the 480 marks, three times any other section.',
  },
  'aiims-norcet': {
    lead: 'A free AIIMS NORCET Stage I mock test series. The preliminary paper runs 100 questions in 90 minutes for 100 marks, delivered as five sequential blocks of 20 questions. Every AIIMS NORCET online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'The paper runs as five 18-minute blocks that close behind you. A block is disabled the moment its time expires and the next activates, so time saved in one cannot be carried into another, and 20 questions in 18 minutes is 54 seconds each with no way to bank a surplus. Stage I is also qualifying: it decides who sits Stage II Main and does not itself set your final rank, so the target is clearing it reliably rather than maximising a score that will not follow you. AIIMS fixes the composition across the whole paper at 80 Nursing questions and 20 on General Knowledge and Aptitude. Stage II is not covered here.',
    description: 'Free AIIMS NORCET Stage I mock tests. Five sequential 18-minute blocks that close behind you, 20 questions each, at 54 seconds a question.',
  },
  'ca-intermediate': {
    lead: 'A free CA Intermediate practice series covering the objective block of all six papers. Each paper\'s Section A is 15 compulsory multiple choice questions worth 30 marks, practised here on its own timer. Every CA Intermediate online test here is free to attempt and scores instantly.',
    strategy: 'The objective block has the same shape in all six papers, which is unusual and useful. ICAI sets Advanced Accounting, Corporate and Other Laws, Taxation, Cost and Management Accounting, Auditing and Ethics, and Financial Management and Strategic Management separately, but Section A of every one of them is 15 compulsory multiple choice questions at 2 marks each, 30 marks inside a 100-mark paper. So a single habit, answer 15 questions quickly and accurately without second-guessing, transfers intact across all six sittings. There is no negative marking on Section A, so nothing is worth leaving blank, and the 70 descriptive marks in each paper are what your remaining time protects.',
    description: 'Free CA Intermediate practice for the objective block of all six papers. Section A is 15 questions worth 30 marks in every one of them.',
  },
  'uptet': {
    lead: 'A free UPTET Paper I mock test series for the primary-level teaching eligibility test. The paper runs 150 questions in 150 minutes for 150 marks, across Child Development and Teaching Method, Hindi, English, Environmental Studies and Mathematics. Every UPTET online test here is free.',
    strategy: 'Two of the five sections are languages, and one of them is a choice you make. Language I is Hindi for every candidate, while Language II is chosen from English, Urdu or Sanskrit, and the mock here builds the English route. That is 60 of the 150 questions riding on language work rather than pedagogy or subject knowledge, which is more than most candidates budget for. The other three sections are 30 questions each and evenly weighted, so no single one dominates. There is no negative marking, so an unanswered question is simply a mark declined, and 150 questions in 150 minutes gives you a clean minute each.',
    description: 'Free UPTET Paper I mock tests. 150 questions in 150 minutes, with two language sections carrying 60 of them and no negative marking.',
  },
  'mh-cet-law': {
    lead: 'A free MH CET Law mock test series for the 5-Year LLB entrance. The paper runs 120 questions in 2 hours for 120 marks, across Legal Aptitude and Legal Reasoning, Logical and Analytical Reasoning, General Knowledge, English and a small Mathematics Aptitude section. Every test here is free.',
    strategy: 'Mathematics Aptitude is 8 questions out of 120, and candidates spend disproportionate anxiety on it. The paper is really two reasoning sections of 32 questions each, Legal and Logical, which together are more than half of it, with General Knowledge and English at 24 apiece. So the marginal hour belongs in reasoning practice, not in revisiting school arithmetic for a section worth under 7% of the paper. There is no negative marking anywhere, which means nothing is worth leaving blank: a wrong answer and a skipped one score identically. Two hours for 120 questions gives you a minute each.',
    description: 'Free MH CET Law 5-Year LLB mock tests. 120 questions in two hours, no negative marking, and Mathematics Aptitude is just 8 of them.',
  },
  'ibsat': {
    lead: 'A free IBSAT mock test series on the ICFAI Business School pattern. The paper runs 140 questions in 120 minutes for 140 marks, across Verbal Ability, Reading Comprehension, Quantitative Aptitude, and Data Adequacy and Data Interpretation. Every IBSAT online test here is free to attempt.',
    strategy: 'Verbal Ability alone is 50 of the 140 questions, while the other three sections take 30 each. Add Reading Comprehension and 80 of the 140 questions are language work, which makes IBSAT the most verbal-weighted of the major MBA entrances and a poor fit for a preparation plan built around quantitative drilling. There is no negative marking and no sectional time limit, so the paper rewards attempting everything and moving where you are quickest. The pace is the pressure instead: 140 questions in 120 minutes is 51 seconds each, which leaves little room to linger on a reading passage you find difficult.',
    description: 'Free IBSAT mock tests. 140 questions in 120 minutes, no negative marking, and 80 of them are Verbal Ability and Reading Comprehension.',
  },
  'mat': {
    lead: 'A free MAT mock test series on the AIMA pattern. The paper runs 150 questions in 120 minutes for 150 marks, across five equal 30-question sections, one of which is Economic and Business Environment. Every MAT online test here is free to attempt and returns a section-wise result.',
    strategy: 'Economic and Business Environment is a fifth of this paper and appears on almost no other MBA entrance. Thirty questions on business awareness sit alongside Language Comprehension, Intelligence and Critical Reasoning, Mathematical Skills, and Data Analysis and Sufficiency, all equally weighted, so a candidate arriving from CAT preparation covers four sections and misses one entirely. It is also the most directly learnable of the five. Pace is the other constraint: 150 questions in 120 minutes is 48 seconds each, faster than most exams at this level, with no sectional time limit to structure it for you. A wrong answer costs 0.25 against 1, so break-even is one in five.',
    description: 'Free MAT mock tests. 150 questions in 120 minutes across five equal sections, one of them Economic and Business Environment.',
  },
  'mht-cet': {
    lead: 'A free MHT CET mock test series for the PCM route. The paper runs 150 questions for 200 marks, 50 each in Physics, Chemistry and Mathematics, sat as two timed parts. Every MHT CET online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'Mathematics is worth double. Physics and Chemistry award 1 mark a question while Mathematics awards 2, so 50 Mathematics questions carry 100 of the 200 marks and the other 100 questions carry the rest. The timing reinforces it: Physics and Chemistry share a single 90-minute window that auto-submits as a group, and Mathematics then gets its own 90 minutes with no way back. That is the whole strategy in one line, half the marks in the second window with the first already closed behind you. There is no negative marking, so nothing is worth leaving blank in either part. Class 11 content is roughly a fifth of each subject\'s weighting.',
    description: 'Free MHT CET PCM mock tests. Mathematics awards 2 marks a question against 1 for Physics and Chemistry, in its own 90-minute window.',
  },
  'ap-eapcet': {
    lead: 'A free AP EAPCET mock test series for the Engineering stream. The paper runs 160 questions in 180 minutes for 160 marks, with Mathematics at 80 questions and Physics and Chemistry at 40 each. Every AP EAPCET online test here is free to attempt and scores instantly.',
    strategy: 'Mathematics is exactly half this paper. Eighty of the 160 questions, against 40 each for Physics and Chemistry, which is a heavier mathematics weighting than JEE Main or most state CETs use, and a plan that splits revision three ways evenly will underserve the section that decides the result. Since all three subjects sit under one unrestricted 180-minute timer with free navigation, you can spend the time accordingly rather than being held to a per-subject window. There is no negative marking and no deduction for an unattempted question, so every question should carry an answer, and 67 seconds each is enough to reach the end if you do not stall.',
    description: 'Free AP EAPCET Engineering mock tests. 160 questions in 180 minutes, with Mathematics alone worth 80 of them.',
  },
  'tg-eapcet': {
    lead: 'A free TG EAPCET mock test series for the Engineering stream, built to a Mathematics-heavy 160-question structure across Physics, Chemistry and Mathematics in 180 minutes. Every TG EAPCET online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'One thing about this page is worth reading before the strategy. TG EAPCET\'s official CBT identity, its portal, its dates and its published syllabus are all directly confirmed, but the exact 160-question, 160-mark, 180-minute structure used here is not machine-read from an official document, which is why this pattern carries a review-pending label rather than an official one. Treat the shape as a working model and confirm it against your own hall ticket. What follows from it, if it holds: Mathematics at 80 questions is half the paper against 40 each for Physics and Chemistry, there is no negative marking, and one unrestricted timer lets you put the minutes where the weighting is.',
    description: 'Free TG EAPCET Engineering mock tests. Mathematics-heavy 160-question practice, on a pattern carrying a review-pending label.',
  },
  'bits-hd': {
    lead: 'A free BITS HD mock test series for the M.E. Computer Science pathway. The exam runs 100 questions for 300 marks in 150 minutes, sat as Test I of 30 questions in 45 minutes and then Computer Science Test II of 70 in 105. Every BITS HD online test here is free.',
    strategy: 'Test I closes before Test II opens, and that shapes how you budget. Core Mathematics and English Language Skills and Logical Reasoning share a single 45-minute window with free navigation between them, 15 questions each, and once it ends there is no return; Computer Science then gets 105 minutes for 70 questions. Since Computer Science is 210 of the 300 marks, the danger is spending Test I carefully enough to feel good about it, which costs nothing, because its window is fixed and cannot be extended into the part that carries the paper. A flat 3 marks for a correct answer and 1 off for a wrong one applies throughout, putting break-even at one in four.',
    description: 'Free BITS HD M.E. Computer Science mock tests. Test I is 30 questions in 45 minutes; Computer Science Test II carries 210 of the 300 marks.',
  },
  'mah-bhmct-bca-bba-bms-bbm-cet': {
    lead: 'A free MAH CET mock test series for the BHMCT, BCA, BBA, BMS and BBM route. The paper runs 100 questions in 120 minutes for 100 marks, across English, Reasoning, General Knowledge and Computer Basics. Every MAH CET online test here is free to attempt and scores instantly.',
    strategy: 'Computer Basics is 20 of the 100 questions, and it is the section most candidates discover late. It sits alongside General Knowledge at 20, with English and Reasoning at 30 each, so a fifth of the paper asks about computing fundamentals rather than aptitude. That is straightforward content to prepare and easy to skip entirely when a plan is built around verbal and reasoning practice. There is no negative marking, so an unanswered question is purely a mark declined, and 120 minutes for 100 questions gives you 72 seconds each, generous enough that the whole paper should be marked by the end.',
    description: 'Free MAH BHMCT, BCA, BBA, BMS and BBM CET mock tests. 100 questions in 120 minutes, with Computer Basics worth 20 of them.',
  },
  'mah-mba-cet': {
    lead: 'A free MAH MBA CET mock test series. The paper runs 200 questions in 150 minutes for 200 marks, across Logical Reasoning, Abstract Reasoning, Quantitative Aptitude and Verbal Ability with Reading Comprehension. Every MAH MBA CET online test here is free to attempt and returns a section-wise result.',
    strategy: 'Half this paper is reasoning. Logical Reasoning alone is 75 of the 200 questions and Abstract Reasoning adds another 25, against 50 each for Quantitative Aptitude and Verbal Ability with Reading Comprehension. No other major MBA entrance weights reasoning anywhere near this heavily, so preparation ported straight from CAT, where quantitative and verbal dominate, arrives badly balanced. Abstract Reasoning in particular is a distinct skill, pattern and sequence work rather than verbal logic, and it is worth practising as its own thing. There is no negative marking, so nothing is worth leaving blank, and 200 questions in 150 minutes is 45 seconds each.',
    description: 'Free MAH MBA CET mock tests. Logical and Abstract Reasoning together are 100 of the 200 questions, half the paper.',
  },
  'mah-mca-cet': {
    lead: 'A free MAH MCA CET mock test series. The paper runs 100 questions in 90 minutes for 200 marks, across Mathematics and Statistics, Logical and Abstract Reasoning, English Comprehension and Verbal Ability, and Computer Concepts. Every MAH MCA CET online test here is free to attempt.',
    strategy: 'Every question is worth 2 marks and nothing is deducted, which makes this a paper where the only real cost is time. Ninety minutes for 100 questions is 54 seconds each, and at that pace the binding constraint is reaching the end rather than perfecting any one answer. Mathematics and Statistics and Logical and Abstract Reasoning are 30 questions each, English and Computer Concepts 20 each, so the reasoning and mathematics halves carry 120 of the 200 marks between them. Sweep the paper for what you can answer quickly first, then return to the rest, and mark everything before time expires since a blank scores the same as a wrong answer.',
    description: 'Free MAH MCA CET mock tests. 100 questions in 90 minutes at 2 marks each, with no negative marking anywhere.',
  },
  'ojee': {
    lead: 'A free OJEE mock test series covering two different entrances: the 2nd/Special B.Tech paper, 60 questions in 60 minutes, and the LE-Tech lateral-entry paper for Diploma holders, 120 questions in 120 minutes. Every OJEE online test here is free to attempt and scores instantly.',
    strategy: 'These are two exams for two different people, and picking the wrong one wastes a preparation cycle. The 2nd/Special B.Tech paper exists only to fill seats left vacant after JEE Main counselling, because regular first-year Odisha B.Tech admission runs on JEE Main rather than OJEE; it is Physics, Chemistry and Mathematics at 20 questions each. LE-Tech is the regular lateral-entry route into the second year for Diploma holders, and its syllabus is Engineering Mathematics, Engineering Mechanics, and Basic Electrical and Electronics Engineering at 40 questions each, which is diploma coursework rather than school science. Both award 4 marks and deduct 1, so break-even is one in five.',
    description: 'Free OJEE mock tests for the 2nd/Special B.Tech vacant-seat paper and the LE-Tech lateral-entry paper for Diploma holders.',
  },
  'upeseat': {
    lead: 'A free UPESEAT mock test series for the B.Tech entrance. The paper runs 125 questions in 120 minutes for 125 marks, across Mathematics, Physics and Chemistry at 35 questions each plus English Language Comprehension at 20. Every UPESEAT online test here is free to attempt.',
    strategy: 'English is 20 of the 125 questions and carries the same mark each as a Physics question, which makes it the cheapest section in the paper for a candidate who reads reasonably well and the easiest to ignore. The three sciences are evenly weighted at 35 apiece, so there is no dominant subject to build a plan around; what decides the outcome is not leaving the 20 easiest questions until the clock is against you. There is no negative marking, so nothing is worth skipping, and one unrestricted 120-minute timer covers everything at about 58 seconds a question. This practice uses the Mathematics track; UPESEAT also offers a Biology route.',
    description: 'Free UPESEAT B.Tech mock tests. 125 questions in 120 minutes, evenly split across PCM with 20 English questions and no negative marking.',
  },
  'ap-ecet': {
    lead: 'A free AP ECET mock test series for the Computer Science and Engineering lateral-entry route. The paper runs 200 questions in 180 minutes for 200 marks, across Mathematics, Physics, Chemistry and the Computer Science and Engineering subject paper. Every AP ECET online test here is free.',
    strategy: 'This admits Diploma holders straight into the second year, so the paper is built on diploma coursework rather than school science. Computer Science and Engineering alone is 100 of the 200 questions, with Mathematics at 50 and Physics and Chemistry at 25 each, which means half your preparation belongs in the subject you already studied and only a quarter in the sciences a freshman entrance would emphasise. There is no negative marking, so an unanswered question is simply a mark declined, and one unrestricted 180-minute timer across all four sections gives you 54 seconds a question to spend where the weighting is.',
    description: 'Free AP ECET mock tests for Computer Science lateral entry. The subject paper alone is 100 of the 200 questions, with no negative marking.',
  },
  'lpunest': {
    lead: 'A free LPUNEST mock test series for the B.Tech PCM route. The paper runs 100 questions in 150 minutes for 400 marks, across Physics, Chemistry, Mathematics and English at 25 questions each. Every LPUNEST online test here is free to attempt and returns a section-wise result.',
    strategy: 'English is a quarter of this paper, weighted exactly the same as each science. Twenty-five questions and 100 of the 400 marks, which is a far larger English share than most engineering entrances allocate, and the section a PCM-focused plan is most likely to leave until the week before. One caveat carried from the source: LPU\'s own pattern page labels its subject distribution approximate rather than fixed, so treat the even four-way split as the working shape and not a guarantee. There is no negative marking, so nothing is worth skipping, and 150 minutes for 100 questions is a generous 90 seconds each.',
    description: 'Free LPUNEST B.Tech mock tests. English is a full quarter of the paper, weighted the same as each science, with no negative marking.',
  },
  'hp-pat': {
    lead: 'A free HP PAT mock test series for first-year Polytechnic diploma admission. The paper runs 150 questions in 180 minutes for 600 marks, across Mathematics, Physics, Chemistry and English. Every HP PAT online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'This is a Class 10 entrance, not a Class 12 one, and the syllabus level follows from that: HP PAT admits candidates to first-year Polytechnic diploma courses after Class 10, so material pitched at a 10+2 engineering entrance is above what the paper asks. Mathematics and Physics are the heavy sections at 50 questions each, with Chemistry at 30 and English at 20. Every question is worth 4 marks and a wrong answer costs 1, putting break-even at one in five, so guessing pays once you can rule out a single option. With 180 minutes for 150 questions you have 72 seconds each.',
    description: 'Free HP PAT mock tests for Polytechnic diploma admission after Class 10. 150 questions in 180 minutes, scored +4 and -1.',
  },
  'mit-wpu-cet': {
    lead: 'A free MIT-WPU CET mock test series for the B.Tech After 10th route. The paper runs 100 questions in 90 minutes for 100 marks, across Basic Mathematics, Basic English, Physics and Chemistry at 25 questions each. Every MIT-WPU CET online test here is free to attempt.',
    strategy: 'The word Basic in two of the four section names is doing real work. This is a Class 10 entry route rather than a standard 10+2 engineering entrance, so Basic Mathematics and Basic English are pitched at school-leaving level and the Physics and Chemistry sections sit alongside them at the same weight, 25 questions apiece. Preparing from JEE-level material would aim well above the paper. There is no negative marking, so every question should carry an answer, and 90 minutes for 100 questions is 54 seconds each, which makes finishing the binding constraint rather than depth on any one item.',
    description: 'Free MIT-WPU CET mock tests for the B.Tech After 10th route. Four equal 25-question sections in 90 minutes, no negative marking.',
  },
  'tg-ecet': {
    lead: 'A free TG ECET mock test series for the Computer Science and Engineering lateral-entry route. The paper is built to 200 questions in 180 minutes for 200 marks, across Mathematics, Physics, Chemistry and the Computer Science subject paper. Every TG ECET online test here is free.',
    strategy: 'Like its Andhra counterpart this is a Diploma-holder route into the second year, so the subject paper dominates: 100 of the 200 questions are Computer Science and Engineering, against 50 for Mathematics and 25 each for Physics and Chemistry. Your diploma syllabus is the preparation, not a freshman science course. One caveat: TG ECET\'s official identity, its lateral-entry purpose and the 50/25/25/100 section shell are confirmed, but this exact pattern carries a review-pending label rather than an official one, so confirm the figures against your own hall ticket. No marks are deducted for a wrong answer, so finish with all 200 carrying one.',
    description: 'Free TG ECET mock tests for Computer Science lateral entry. The subject paper is 100 of the 200 questions, on a review-pending pattern.',
  },
  'wb-jelet': {
    lead: 'A free WB JELET mock test series for the Paper-I engineering lateral-entry route. The paper runs 100 questions in 120 minutes for 120 marks, across Mathematics, Physics, Chemistry and Fundamentals of Electrical and Electronics Engineering. Every WB JELET online test here is free.',
    strategy: 'The marking changes by question category inside every section, which is unusual and worth knowing before you sit it. Category-1 questions are single-correct and score 1 for a right answer with 0.25 off for a wrong one; Category-2 questions are multi-select and score 2, with partial credit rules of their own. So the same section can hold questions where guessing is cheap and questions where it is not, and the decision has to be made per question rather than per section. Mathematics is the largest block at 40 questions. This is a lateral-entry route for Diploma, B.Sc., D.Voc. and B.Voc. candidates; Paper-II for Diploma Pharmacy is out of scope here.',
    description: 'Free WB JELET Paper-I mock tests. Marking changes by question category inside each section, so the guessing call is per question.',
  },
  'iiser-iat': {
    lead: 'A free IISER IAT mock test series. The paper runs 60 questions in 180 minutes for 240 marks, an even 15 questions in each of Biology, Chemistry, Mathematics and Physics. Every IISER IAT online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'Three hours for 60 questions is three minutes each, which is far more time per question than any engineering entrance gives you, and it tells you what kind of paper this is. IAT is not a speed test; the questions expect working rather than recognition, and a candidate who has trained on 60-second JEE pacing will finish early and score badly. Slow down and solve. All four subjects are weighted identically at 15 questions and 60 marks, so there is no section to specialise in, and a weakness in any one costs a full quarter of the paper. Four marks for a correct answer against one off puts break-even at one in five.',
    description: 'Free IISER IAT mock tests. 60 questions in 180 minutes, three minutes each, evenly split across Biology, Chemistry, Mathematics and Physics.',
  },
  'aiims-bsc-nursing': {
    lead: 'A free AIIMS B.Sc. Nursing mock test series for the common B.Sc. (Hons.) Nursing entrance. The paper runs 100 questions in 120 minutes for 100 marks, across Physics, Chemistry and Biology at 30 questions each plus General Knowledge at 10. Every test here is free to attempt.',
    strategy: 'Ninety of the 100 questions are school science, evenly split three ways, and the remaining 10 are General Knowledge. That even split is the point: unlike a medical entrance that leans on Biology, this paper gives Physics and Chemistry exactly the same weight, so a Biology-heavy preparation leaves two thirds of the paper underserved. A wrong answer deducts one third of a mark against 1 for a correct one, putting break-even at one in four, exactly what a blind guess across four options returns, so attempting turns positive the moment you rule one out. One composite 120-minute timer covers all 100 questions with free navigation.',
    description: 'Free AIIMS B.Sc. Nursing mock tests. Physics, Chemistry and Biology carry 30 questions each, evenly weighted, plus 10 General Knowledge.',
  },
  'ca-final': {
    lead: 'A free CA Final practice series covering the objective block of Papers 1 to 5. Section A of each one is 15 compulsory multiple choice questions carrying 30 of its 100 marks, drilled here on a timer of its own. Every CA Final online test here is free to attempt and scores instantly.',
    strategy: 'At Final level the objective block is the smallest part of the hardest papers, which is exactly why it should cost you the least time. ICAI sets Financial Reporting, Advanced Financial Management, Advanced Auditing, Direct Tax Laws and Indirect Tax Laws separately, and in each one Section A is 15 compulsory multiple choice questions at 2 marks, 30 marks of a 100-mark paper. The other 70 are descriptive and are where a Final paper is genuinely decided. There is no negative marking on Section A, so answer all 15, and treat speed there as protecting the two and a half hours the rest of the paper needs.',
    description: 'Free CA Final practice for the objective block of Papers 1 to 5. Section A is 15 compulsory questions carrying 30 of the 100 marks.',
  },
  'rrb-paramedical': {
    lead: 'A free RRB Paramedical practice series for the three common subjects of the CBT: General Awareness, General Arithmetic with General Intelligence and Reasoning, and General Science, 10 questions each. Every RRB Paramedical online test here is free to attempt and scores instantly.',
    strategy: 'Read what this covers before you read a score from it. The CBT is 100 questions and Professional Ability is 70 of them, but RRB Paramedical recruits across roughly seven to nine distinct posts, from Staff Nurse to Pharmacist to Radiographer, each with its own professional syllabus. There is no single Professional Ability paper to build, so this site builds the 30 questions that are common to every post and says so rather than shipping one post\'s syllabus as if it fitted all of them. Those 30 still matter: at one third of a mark deducted against 1 earned, break-even is one in four, and they are the part you can prepare without knowing your post.',
    description: 'Free RRB Paramedical practice for the three common subjects. Professional Ability is 70 of the 100 questions and differs by post.',
  },
  'gmat': {
    lead: 'A free GMAT Focus Edition practice series covering Quantitative Reasoning, Verbal Reasoning and the Data Sufficiency part of Data Insights. Sections are timed at 45, 45 and 25 minutes in that order, each locking when it ends. Every GMAT online test here is free to attempt.',
    strategy: 'Nothing is deducted for a wrong answer, and every question has five options rather than four, which changes the arithmetic of a blind guess: one in five rather than one in four, with no penalty to offset. That makes leaving anything unanswered strictly worse than guessing, and the section locks mean the sweep has to happen before each timer ends rather than at the end of the test. The three official sections are equally weighted, so none repays disproportionate preparation. One scope note: the Data Insights section officially runs 20 questions in 45 minutes, and this practice covers only its Data Sufficiency portion in a shorter 25-minute block.',
    description: 'Free GMAT Focus Edition practice. Five options per question, no penalty for a wrong answer, and sections that lock when their timer ends.',
  },
  'lsat': {
    lead: 'A free LSAT practice series covering the three scored sections: two Logical Reasoning sections of about 25 questions each and one Reading Comprehension section of about 27, each timed at 35 minutes. Every LSAT online test here is free to attempt and returns a section-wise result.',
    strategy: 'Logical Reasoning is two of the three scored sections, so roughly half the scored questions test the same skill twice. That concentration is the single most useful fact about preparing for this test: an hour spent on argument structure, assumptions and flaws pays across two sections rather than one, while Reading Comprehension gets a single 35-minute block. Each section locks when its timer ends and cannot be re-entered, exactly as the real test runs, so pacing is per section rather than across the paper. Nothing is deducted for a wrong answer, so every question should carry one before its section closes. A real sitting adds an unscored fourth section.',
    description: 'Free LSAT practice for the three scored sections. Logical Reasoning appears twice, so half the scored questions test one skill.',
  },
  'ca-foundation': {
    lead: 'A free CA Foundation practice series for Paper 3, Quantitative Aptitude. The official paper is 100 questions for 100 marks in 2 hours, across Business Mathematics, Logical Reasoning and Statistics; this practice runs a shorter proportional set of 30 questions. Every test here is free.',
    strategy: 'Logical Reasoning is the section candidates skip, and it is the cheapest 20 marks in the paper. The official Paper 3 splits 100 marks as Business Mathematics 40, Statistics 40 and Logical Reasoning 20, and the last of those needs no formula sheet and no commerce background, only practice at a question type. It is also graded exactly like the calculation-heavy sections, so 20 marks left on the table there cost the same as 20 lost in Statistics. A wrong answer deducts 0.25 against 1 for a correct one, so break-even is one in five and a single elimination makes attempting worth it.',
    description: 'Free CA Foundation Paper 3 practice. Logical Reasoning is 20 of the 100 marks and needs no formulas, only practice.',
  },
  'afcat': {
    lead: 'A free AFCAT mock test series for the Air Force Common Admission Test. The paper runs 100 questions in 2 hours for 300 marks, across four equally weighted sections of 25 questions each. Every AFCAT online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'Every question is worth 3 marks and every wrong answer costs a full mark, which is a harsher ratio than most defence entries use and puts break-even at one in four. That is exactly what a blind guess across four options returns, so guessing at random gains nothing over a long paper and only turns positive once you eliminate an option. The four sections are equally weighted at 75 marks each, General Awareness, Verbal Ability, Numerical Ability, and Reasoning and Military Aptitude, so a weakness anywhere costs the same and none repays extra attention. One continuous 120-minute window covers the lot at 72 seconds a question.',
    description: 'Free AFCAT mock tests. 100 questions in two hours for 300 marks, at +3 and -1, across four equally weighted sections.',
  },
  'mh-cet-law-3-year': {
    lead: 'A free MH CET Law mock test series for the 3-Year LLB entrance, taken by candidates who already hold a degree. The paper runs 120 questions in 2 hours for 120 marks, across English, General Knowledge, Legal Aptitude and Logical Reasoning. Every test here is free to attempt.',
    strategy: 'This is not a shorter version of the 5-Year paper, it is weighted the other way round. Here English is the largest section at 40 questions and General Knowledge and Current Affairs takes 32, while Legal Aptitude and Logical Reasoning get 24 each; on the 5-Year paper the two reasoning sections dominate at 32 apiece and English drops to 24. So 72 of these 120 questions are English and general awareness rather than reasoning, and a graduate entering from 5-Year material would prepare the wrong half. Marking is flat at 1 a question with no deduction, and two hours for 120 questions leaves a minute each, so the paper should come back with nothing blank.',
    description: 'Free MH CET Law 3-Year LLB mock tests. English and General Knowledge carry 72 of the 120 questions, the reverse of the 5-Year paper.',
  },
  'cat': {
    lead: 'A free CAT mock test series built to the most recently conducted pattern: 68 questions in 120 minutes for 204 marks, across VARC, DILR and QA, each in its own 40-minute window. Every CAT online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'The section lock is what separates CAT from almost every other MBA entrance. Forty minutes for VARC, then 40 for DILR, then 40 for QA, in that fixed order, and once a section ends there is no return, so the habit of skipping a hard question to revisit later works only inside a section and never across the paper. A wrong answer costs 1 against 3 for a correct one, putting break-even at one in four. One caveat about this page: the IIMs do not publish a fixed CAT pattern in advance, so the structure here follows the most recent conducted exam as corroborated by independent analysis, and it carries a review-pending label for that reason.',
    description: 'Free CAT mock tests. Three 40-minute locked sections in fixed order, on a pattern reconstructed from the most recent conducted exam.',
  },
  'snap': {
    lead: 'A free SNAP mock test series for the Symbiosis MBA entrance. The paper runs 60 questions in 60 minutes for 60 marks, across General English, Analytical and Logical Reasoning, Quantitative with Data Interpretation and Data Sufficiency, and Ethics, Morality and Values. Every SNAP test here is free.',
    strategy: 'Ethics, Morality and Values is 10 questions that exist on no other MBA entrance, and it is a sixth of a paper this short. Reasoning and Quantitative take 20 each and General English the other 10, so the paper is unusually reasoning-weighted for its size, and a candidate who prepares SNAP as a compact CAT covers three sections and has never seen the fourth. With one minute a question and no sectional time limit, you may attempt the sections in any order, which makes it worth deciding that order in advance. Marking is 1 for a correct answer with 0.25 off for a wrong one, so the attempt threshold is one in five and a narrowed guess is worth taking in a paper this short.',
    description: 'Free SNAP mock tests. 60 questions in 60 minutes, including an Ethics, Morality and Values section no other MBA entrance has.',
  },
  'micat': {
    lead: 'A free MICAT practice series for Section C, the 60-question aptitude portion covering Verbal Ability, Quantitative Ability with Data Interpretation, and Divergent and Convergent Thinking. Every MICAT online test here is free to attempt and returns a section-wise result.',
    strategy: 'Section C is one third of exam day. MICAT runs three parts: a 150-question Psychometric Test that is qualifying only with no right answer to score, a Descriptive Test of four essay-style questions, and only then the aptitude section this practice covers. A candidate preparing MICAT the way they prepare CAT is training for the last third and leaving the writing and the psychometric untouched, which is the commonest way this exam surprises people. Within Section C, Divergent and Convergent Thinking is the section without an analogue elsewhere and worth the same 20 questions as the other two. A wrong answer costs 0.25 against 1.',
    description: 'Free MICAT Section C practice. The aptitude section is one of three parts; the psychometric and descriptive tests are separate.',
  },
  'kmat-karnataka': {
    lead: 'A free KMAT Karnataka mock test series. The paper runs 120 questions in 120 minutes for 120 marks, an even 40 questions each in Language Comprehension, Mathematical Skills and Basic Aptitude. Every KMAT Karnataka online test here is free to attempt and scores instantly.',
    strategy: 'No negative marking and a perfectly even three-way split make this one of the simplest MBA entrances to plan for. A wrong answer and a blank score identically, so there is no guessing decision to make: mark everything. The three sections are 40 questions apiece with no sectional time limit, so no area repays disproportionate preparation and a weakness in any one costs exactly as much as a weakness in another. With 120 questions in 120 minutes you have a clean minute each, which makes finishing the whole paper the realistic target rather than perfecting any part of it.',
    description: 'Free KMAT Karnataka mock tests. 120 questions in 120 minutes, evenly split three ways, with no negative marking.',
  },
  'jipmat': {
    lead: 'A free JIPMAT mock test series for the IIM Bodh Gaya and IIM Jammu integrated programme entrance. The paper runs 100 questions in 150 minutes for 400 marks, across Quantitative Aptitude, Data Interpretation and Logical Reasoning, and Verbal Ability. Every JIPMAT test here is free.',
    strategy: 'Four marks for a correct answer and a full mark off for a wrong one is the harshest ratio among the integrated-programme entrances, and it is what should govern your attempt rate. Break-even sits at one in five, so a blind guess across four options is roughly neutral and eliminating one option turns it clearly positive, but a paper full of half-guesses will cost more than it returns. The three sections are almost exactly equal at 33, 33 and 34 questions, with no sectional time limit, so the whole 150 minutes is yours to allocate at 90 seconds a question.',
    description: 'Free JIPMAT mock tests. 100 questions in 150 minutes at +4 and -1, split almost evenly across three sections.',
  },
  'wbjee': {
    lead: 'A free WBJEE mock test series for the engineering entrance. The exam runs 155 questions for 200 marks, sat as Paper I in Mathematics and then Paper II in Physics and Chemistry. Every WBJEE online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'WBJEE scores in three categories and the penalty changes with them, which makes the guessing decision a per-question call rather than a paper-wide rule. Category 1 questions are single-correct at +1 and -0.25; Category 2 are single-correct at +2 and -0.5; Category 3 carry no negative marking at all. So the same subject holds questions where a guess is free and questions where it costs, and knowing which you are looking at matters before you decide. The structure is two separate papers: Mathematics gets its own 120 minutes and auto-submits, then Physics and Chemistry share the next. Mathematics is 75 of the 155 questions.',
    description: 'Free WBJEE mock tests. Three scoring categories with different penalties, and Mathematics sat as its own 120-minute paper.',
  },
  'amu-btech': {
    lead: 'A free AMU B.Tech. Admission Test mock series. The paper runs 100 questions in 120 minutes for 100 marks across Chemistry, Physics and Mathematics, delivered on OMR. Every AMU online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'One number on this page is not official, and it is worth knowing which. AMU\'s Guide to Admissions confirms the 100 questions, 100 marks, 120-minute duration and the 1 mark and 0.25 deduction directly, but it does not publish how the 100 questions divide between the three subjects. The 34 Chemistry, 33 Physics, 33 Mathematics split used here is a practice structure chosen to keep the mock balanced, not a figure read from the document, and the pattern page says so rather than presenting it as official. Prepare all three evenly, because nothing published tells you to do otherwise. Break-even on the marking is one in five.',
    description: 'Free AMU B.Tech. Admission Test mocks. 100 questions in 120 minutes; AMU does not publish the per-subject split, so this one is derived.',
  },
  'assam-cee': {
    lead: 'A free Assam CEE mock test series for B.Tech admission to colleges in Assam. The paper runs 120 questions in 180 minutes for 480 marks, an even 40 questions each in Mathematics, Physics and Chemistry. Every Assam CEE online test here is free to attempt.',
    strategy: 'The syllabus is the thing to get right here, not the pattern. Assam CEE is set on the ASSEB Division-II Higher Secondary syllabus rather than a national one, so material built for JEE Main will overlap substantially but not exactly, and the gaps are in both directions. The scoring shape is familiar: 4 marks for a correct answer and 1 off for a wrong one, break-even at one in five, and a question with more than one option marked is treated as wrong. The three subjects are equally weighted at 40 questions each, and 180 minutes for 120 questions gives you 90 seconds apiece.',
    description: 'Free Assam CEE mock tests. 120 questions in 180 minutes on the ASSEB Higher Secondary syllabus rather than a national one.',
  },
  'cg-pet': {
    lead: 'A free CG PET mock test series for the Chhattisgarh engineering entrance. The paper runs 150 questions in 180 minutes for 150 marks, an even 50 questions each in Physics, Chemistry and Mathematics. Every CG PET online test here is free to attempt and scores instantly.',
    strategy: 'There is no negative marking and one unrestricted timer, which together remove almost every strategic decision from this paper and leave one: finish it. A wrong answer and a blank score the same, so an unmarked question is a mark declined for nothing, and with 180 minutes for 150 questions you have 72 seconds each, comfortable enough to reach the end. The three subjects are exactly equally weighted at 50 questions apiece, so there is no section to favour and a weakness anywhere costs the same. Spend the last few minutes marking everything still blank rather than refining an answer you already have.',
    description: 'Free CG PET mock tests. 150 questions in 180 minutes, evenly split three ways, with no negative marking anywhere.',
  },
  'bcece': {
    lead: 'A free BCECE mock test series for the PCM engineering vacant-seat route. The exam runs 300 questions for 1200 marks, sat as three separate 90-minute subject papers in Physics, Chemistry and Mathematics. Every BCECE online test here is free to attempt and returns a section-wise result.',
    strategy: 'Check that this is the exam you actually need before preparing for it. Regular first-year Bihar government B.E. and B.Tech counselling runs through UGEAC on JEE Main scores; BCECE PCM is the later route for engineering seats still vacant after that process, so it is a genuine backup rather than a first-choice plan. If it is your route, the structure is three locked papers rather than one sitting: Physics gets 90 minutes and auto-submits, then Chemistry, then Mathematics, with 100 questions in each and no way back. That is 54 seconds a question inside each window, and 4 marks against 1 off puts break-even at one in five.',
    description: 'Free BCECE PCM mock tests. Three locked 90-minute subject papers of 100 questions each, for the vacant-seat engineering route.',
  },
  'jcece': {
    lead: 'A free JCECE mock test series for the Jharkhand PCM engineering entrance. It sets 50 questions each in Physics, Chemistry and Mathematics, 150 in all, across 180 minutes for 150 marks. Every JCECE online test here is free to attempt and returns a section-wise result.',
    strategy: 'The even three-way split means there is no section to build a plan around, so the deciding variable is the penalty. A wrong answer costs 0.25 against 1 for a correct one, which puts break-even at one in five: a blind guess across four options already edges ahead, and eliminating a single option makes attempting clearly right. That is a more forgiving ratio than the 4-and-1 schemes most engineering entrances use, and it should make you more willing to attempt a question you can narrow rather than less. With 180 minutes for 150 questions you have 72 seconds each, enough to reach everything.',
    description: 'Free JCECE mock tests. 150 questions in 180 minutes, evenly split across PCM, with a forgiving 0.25 deduction.',
  },
  'jest': {
    lead: 'A free JEST Physics mock test series. The paper runs 40 questions in 180 minutes for 100 marks, across three parts that are weighted differently: Part A and Part C at 10 questions each and Part B at 20. Every JEST online test here is free to attempt and scores instantly.',
    strategy: 'Three hours for 40 questions is four and a half minutes each, which is more time per question than almost any exam on this site, and it signals what JEST is: a research-entrance paper that expects derivation rather than recall. Speed practice is close to useless here; what pays is working problems end to end without a formula sheet. Part B is half the paper at 20 questions and 50 of the 100 marks, with Parts A and C at 10 questions and 25 marks each, so the middle block is where the paper is decided. Nothing is deducted for a wrong answer, so leave nothing blank at the end.',
    description: 'Free JEST Physics mock tests. 40 questions in 180 minutes, about four and a half minutes each, with Part B carrying half the marks.',
  },
  'keam': {
    lead: 'A free KEAM mock test series for the Kerala engineering entrance. The paper runs 150 questions in 180 minutes for 600 marks, with Mathematics at 75 questions, Physics at 45 and Chemistry at 30. Every KEAM online test here is free to attempt and returns a section-wise result.',
    strategy: 'Mathematics is exactly half this paper and Chemistry is a fifth, which is one of the most lopsided weightings among state engineering entrances. Seventy-five Mathematics questions carry 300 of the 600 marks, against 120 for Chemistry, so an evenly split revision plan gives the smallest section the same attention as the one that decides the result. Reweight accordingly. Four marks for a correct answer and one off for a wrong one puts break-even at one in five, so attempting after a single elimination is clearly worth it, and 180 minutes for 150 questions gives you 72 seconds each to work with.',
    description: 'Free KEAM mock tests. Mathematics is 75 of the 150 questions and 300 of the 600 marks; Chemistry is just 30.',
  },
  'xat': {
    lead: 'A free XAT mock test series built to the XLRI pattern: about 95 questions in 180 minutes, split into three Part 1 sections sharing 170 minutes and a separate 10-minute General Knowledge block. Every XAT online test here is free to attempt and scores instantly.',
    strategy: 'Decision Making is XAT\'s signature and appears on no other major MBA entrance. It is roughly 21 of the 95 questions, and it is not quantitative or verbal work in disguise: the questions present a situation and ask which course of action is soundest, which rewards judgement and consistency rather than calculation. A candidate preparing XAT on CAT material covers Verbal and Quantitative and arrives at Decision Making cold. The two-part timing also matters: Part 1\'s three sections share 170 minutes with free movement, then General Knowledge gets its own 10 minutes. A wrong answer costs 0.25 against 1.',
    description: 'Free XAT mock tests. Decision Making is about 21 of the 95 questions and appears on no other major MBA entrance.',
  },
  'saeee': {
    lead: 'A free SAEEE mock test series for the Sathyabama B.E. and B.Tech entrance, PCM route. The paper runs 60 questions in 60 minutes for 60 marks, an even 20 questions each in Mathematics, Physics and Chemistry. Every SAEEE online test here is free to attempt.',
    strategy: 'Sixty questions in 60 minutes with no negative marking is about as simple as an entrance gets, and the simplicity is the strategy: there is no guessing decision, no section worth favouring, and no lock to plan around. A blank scores the same as a wrong answer, so the only avoidable loss is running out of time with questions unmarked, and a minute a question is enough to reach the end if you do not linger. The test is delivered online on the Class 12 syllabus, with free navigation across all three subjects. This practice uses the Mathematics route; SAEEE also lists Biology as the alternative first subject.',
    description: 'Free SAEEE mock tests. 60 questions in 60 minutes, evenly split across PCM, with no negative marking.',
  },
  'siteee': {
    lead: 'A free SITEEE mock test series for the Symbiosis Institute of Technology entrance. The paper runs 60 questions in 60 minutes for 120 marks, with Mathematics at 30 questions and Physics and Chemistry at 15 each. Every SITEEE online test here is free to attempt and scores instantly.',
    strategy: 'Mathematics is half this paper on its own. Thirty of the 60 questions and 60 of the 120 marks, against 15 questions apiece for Physics and Chemistry, which makes an even three-way revision split a poor match for what the paper actually asks. All sections are mandatory and there is no negative marking, so nothing is worth leaving blank and there is no guessing calculus to manage. With a minute a question across the whole paper and free navigation between subjects, the practical plan is to clear Physics and Chemistry at pace and give the surplus to the section carrying half the marks.',
    description: 'Free SITEEE mock tests. Mathematics is 30 of the 60 questions and half the marks, with no negative marking.',
  },
  'bv-btech': {
    lead: 'A free BV-BTECH mock test series for the Bharati Vidyapeeth B.Tech entrance. The paper runs 200 questions in 180 minutes for 200 marks, with Mathematics at 80 questions and Physics and Chemistry at 60 each. Every BV-BTECH online test here is free to attempt.',
    strategy: 'Two hundred questions in 180 minutes is 54 seconds each, which is the real constraint in a paper that otherwise makes few demands. There is no negative marking, no sectional lock and no differential weighting inside the sections, so nothing is worth skipping and the whole three hours is yours to allocate; what will cost you is arriving at the end with questions unreached. Mathematics is the largest section at 80 of the 200, with Physics and Chemistry at 60 apiece, so the time you bank early belongs there. The test is centre-based and English-medium, with one correct or most appropriate answer per question.',
    description: 'Free BV-BTECH mock tests. 200 questions in 180 minutes, about 54 seconds each, with no negative marking.',
  },
  'kleee': {
    lead: 'A free KLEEE mock test series for the KL University B.Tech PCM entrance. The paper runs 75 questions in 180 minutes for 75 marks, an even 25 questions each in Mathematics, Physics and Chemistry. Every KLEEE online test here is free to attempt and returns a section-wise result.',
    strategy: 'Three hours for 75 questions is 144 seconds each, which is unusually generous and tells you the paper is pitched at depth rather than speed. KL University describes the difficulty as JEE level, so the questions expect working, and a candidate who rushes at entrance-exam pace will finish with an hour spare and marks left behind. Slow down and solve properly. One caveat: the current 2026 page confirms the 25-questions-per-subject structure and the duration directly, but does not itself state the marking scheme or option count, so the four options and absence of negative marking used here are corroborated rather than published.',
    description: 'Free KLEEE B.Tech mock tests. 75 questions in 180 minutes, about 144 seconds each, at JEE-level difficulty.',
  },
  'ap-polycet': {
    lead: 'A free AP POLYCET mock test series for polytechnic diploma admission. The paper runs 120 questions in 120 minutes for 120 marks, with Mathematics at 50 questions, Physics at 40 and Chemistry at 30. Every AP POLYCET online test here is free to attempt and scores instantly.',
    strategy: 'This is a Class 10 entrance, set on the AP SSC syllabus, and that single fact should govern your preparation. Material aimed at a 10+2 engineering entrance pitches well above what the paper asks, and time spent there is time not spent on the state board content the questions actually come from. Mathematics is the largest section at 50 of the 120, with Physics at 40 and Chemistry at 30. Nothing comes off for a wrong answer, and a clean minute a question is enough to reach the end, so a blank at submission is a mark given away for free.',
    description: 'Free AP POLYCET mock tests. 120 questions in 120 minutes on the AP SSC Class 10 syllabus, with no negative marking.',
  },
  'nerist-nee': {
    lead: 'A free NERIST NEE-II mock test series for the PCM Engineering and Technology paper. It runs 115 questions in 180 minutes for 150 marks, across Physics, Chemistry and Mathematics. Every NERIST NEE online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'Questions are not all worth the same, and the mix runs inside every subject rather than in a separate block. Physics and Chemistry each carry 25 one-mark and 10 two-mark questions, and Mathematics carries 30 one-mark and 15 two-mark, so 35 of the 115 questions are worth double. That changes what a skipped question costs: passing over a two-mark item to save time on a one-mark one is a bad trade, and identifying the value before you commit is part of the pacing. Mathematics is the largest section at 45 questions and 60 marks. A wrong answer costs 0.25, putting break-even at one in five.',
    description: 'Free NERIST NEE-II mock tests. One-mark and two-mark questions are mixed inside every subject, so 35 of the 115 are worth double.',
  },
  'bihar-dcece': {
    lead: 'A free Bihar DCECE mock test series for the PE Polytechnic Engineering route. The paper runs 90 questions in 135 minutes for 450 marks, an even 30 questions each in Physics, Chemistry and Mathematics. Every Bihar DCECE online test here is free to attempt and scores instantly.',
    strategy: 'Ninety questions in 135 minutes is 90 seconds each, generous for a diploma entrance, and with no negative marking there is nothing to lose by attempting everything. That combination makes completion the only real target: a blank and a wrong answer score identically, so the last few minutes belong to marking whatever is still empty rather than checking work you have already done. The three subjects are exactly equally weighted at 30 questions apiece. One caveat: the 2026 DCECE cycle is confirmed live, but the official prospectus figures behind this pattern are not machine-read, which is why it carries a review-pending label.',
    description: 'Free Bihar DCECE PE mock tests. 90 questions in 135 minutes, evenly split across PCM, with no negative marking.',
  },
  'iemjee': {
    lead: 'A free IEMJEE mock test series for the online B.Tech sitting. The paper runs 90 questions in 120 minutes for 360 marks, an even 30 questions each in Physics, Chemistry and Mathematics. Every IEMJEE online test here is free to attempt and returns a section-wise result.',
    strategy: 'IEM runs two different sittings and this practice models one of them. The online mode is 90 questions in a single 120-minute composite timer; the institute also offers a separate three-hour offline sitting, which is not built here, so check which one your admission route uses before pacing to these numbers. On the online paper, 80 seconds a question is comfortable, and free navigation across all three subjects means the surplus from your strongest is spendable on your weakest. Four marks for a correct answer and one off for a wrong one puts break-even at one in five, so a single elimination makes attempting worth it.',
    description: 'Free IEMJEE mock tests for the online B.Tech sitting. 90 questions in 120 minutes; IEM also runs a separate offline paper.',
  },
  'jharkhand-pece': {
    lead: 'A free Jharkhand PECE mock test series for polytechnic diploma admission. The paper runs 150 questions in 150 minutes for 150 marks, an even 50 questions each in Physics, Chemistry and Mathematics. Every Jharkhand PECE online test here is free to attempt and scores instantly.',
    strategy: 'The syllabus is Class 10, not Class 12, and that is the most common way candidates waste preparation here. PECE admits to polytechnic diploma courses on the Secondary syllabus, so JEE-oriented material aims well above the paper and leaves the state board content it actually draws on underprepared. The paper is delivered offline on OMR with three equally weighted subjects, so no section repays extra attention. A wrong answer costs 0.25 against 1, putting break-even at one in five, and a clean minute a question across 150 questions leaves room to reach everything.',
    description: 'Free Jharkhand PECE mock tests. 150 questions in 150 minutes on the Class 10 Secondary syllabus, not a 10+2 engineering one.',
  },
  'kiitee': {
    lead: 'A free KIITEE mock test series for the B.Tech entrance. The paper runs 120 questions in 150 minutes for 480 marks, an even 40 questions each in Physics, Chemistry and Mathematics. Every KIITEE online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'One composite timer with free movement between sections is the useful part of this paper, because the subjects are weighted identically at 40 questions each. That means the whole 150 minutes can follow your strengths rather than a fixed per-subject allowance: clear the subject you are quickest in, then spend the surplus where it is needed. At 75 seconds a question the pace is reasonable but not generous. Four marks for a correct answer against one off puts break-even at one in five, so guessing after a single elimination pays, while a question you cannot narrow at all is better left alone.',
    description: 'Free KIITEE B.Tech mock tests. 120 questions in 150 minutes, evenly split across PCM, on one composite timer.',
  },
  'tg-polycet': {
    lead: 'A free TG POLYCET mock test series for the MPC polytechnic route. The MPC rank is computed from 120 questions and 120 marks, with Mathematics at 60 questions and Physics and Chemistry at 30 each. Every TG POLYCET online test here is free to attempt and scores instantly.',
    strategy: 'Mathematics is half the MPC paper, which is a heavier weighting than the even splits most polytechnic entrances use. Sixty of the 120 questions against 30 each for Physics and Chemistry, so a revision plan divided three ways gives the deciding section a third of the attention it deserves. Worth knowing about the paper you sit: the official booklet contains 150 questions including a separate 30-question Biology block for the agriculture and veterinary route, and your MPC rank is generated from the 120 that exclude it. No deduction applies to a wrong answer, so the 120 that count should all carry one.',
    description: 'Free TG POLYCET MPC mock tests. Mathematics is 60 of the 120 questions counted for the MPC rank, with no negative marking.',
  },
  'ipmat-indore': {
    lead: 'A free IPMAT Indore mock test series for the IIM Indore IPM Aptitude Test. It runs 90 questions in 120 minutes for 360 marks, across three separately timed 40-minute sections. Every IPMAT Indore online test here is free to attempt and returns a section-wise result.',
    strategy: 'The marking changes between the two Quantitative sections, which is the detail that decides your attempt rate. Quantitative Ability Short Answer is 15 questions where you type a value and nothing is deducted for a wrong entry, so every one of them should carry an answer whatever your confidence. Quantitative Ability MCQ and Verbal Ability are four-option questions that deduct a mark against the 4 a correct answer earns, so those break even at one in five and reward a genuine elimination first. All three sections are separately timed at 40 minutes and lock when they end, so the sweep for unanswered short-answer questions has to happen inside that first block.',
    description: 'Free IPMAT Indore mock tests. The 15 short-answer Quantitative questions carry no penalty; the MCQ sections deduct a mark.',
  },
  'ipmat-rohtak': {
    lead: 'A free IPMAT Rohtak mock test series for the IIM Rohtak IPM Aptitude Test. The paper runs 120 questions in 120 minutes for 480 marks, an even 40 questions each in Quantitative Ability, Logical Reasoning and Verbal Ability. Every IPMAT Rohtak online test here is free.',
    strategy: 'Rohtak and Indore share a name and little else. This paper is 120 four-option questions under one composite timer with no sectional lock, evenly split three ways; Indore runs 90 questions across three separately timed sections and mixes typed short answers into its quantitative half. So practice does not transfer cleanly between them, and the pacing habit least likely to survive the move is treating a section as recoverable later, which is true here and false there. A minute a question, 4 marks for a correct answer and 1 off for a wrong one, break-even at one in five.',
    description: 'Free IPMAT Rohtak mock tests. 120 questions in 120 minutes, evenly split, on one composite timer unlike IPMAT Indore.',
  },
  'cg-ppt': {
    lead: 'A free CG PPT mock test series for the Chhattisgarh Pre Polytechnic Test. The paper runs 150 questions for 150 marks, an even 50 questions each in Physics, Chemistry and Mathematics. Every CG PPT online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'Nothing is deducted for a wrong answer, an unattempted one, or a question with more than one option marked, which makes this paper unusually forgiving: the only score you can lose is the one you never reached. So the last minutes belong to marking every blank rather than checking completed work. The three subjects are exactly equally weighted at 50 questions each. On timing, the official centre session runs 10:00 to 13:15, and the 180-minute clock used in this practice is a working figure drawn from that rather than a separately published duration, so treat it as a pacing guide.',
    description: 'Free CG PPT mock tests. 150 questions evenly split across PCM, with nothing deducted for a wrong or multiply-marked answer.',
  },
  'tjee': {
    lead: 'A free TJEE mock test series for the Tripura engineering PCM route. The exam runs 90 questions for 360 marks, with Physics and Chemistry sharing the first 90 minutes and Mathematics getting a separate 45. Every TJEE online test here is free to attempt and scores instantly.',
    strategy: 'TJEE is built in modules, and the structure tells you where the questions come from. Each subject has 10 modules with exactly 3 compulsory questions per module, 30 per subject, so the syllabus is sampled evenly rather than concentrated in the popular chapters. A module you skipped is three guaranteed questions lost, which makes breadth matter more here than depth on favourite topics. The timing is two parts: Physics and Chemistry are administered together and auto-submit as a group, then Mathematics runs alone with no return. Four marks for a correct answer and one off puts break-even at one in five.',
    description: 'Free TJEE mock tests. Each subject samples 10 modules with 3 compulsory questions each, so breadth beats depth.',
  },
  'neet-ug': {
    lead: 'A free NEET UG mock test series. The paper runs 180 questions in 180 minutes for 720 marks, with Biology at 90 questions and Physics and Chemistry at 45 each. Every NEET UG online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'Biology is half the paper and half the marks, 90 questions against 45 each for Physics and Chemistry, and that ratio is what makes NEET different from every engineering entrance a candidate might have prepared alongside it. A minute a question across the whole paper sounds comfortable, but Physics is where most candidates lose time and Biology is where the marks are, so the pacing plan is to protect the 90 rather than to finish the 45 perfectly. Break-even sits at one in five while every question carries four options, so even a blind guess is marginally worth making and an eliminated option makes it clearly so. Note that the real examination is pen-and-paper; this is an online simulation of it.',
    description: 'Free NEET UG mock tests. Biology is 90 of the 180 questions and half the 720 marks, against 45 each for Physics and Chemistry.',
  },
  'vtueee': {
    lead: 'A free VTUEEE mock test series for the Vel Tech B.Tech entrance. The paper is built to 90 questions in 180 minutes for 360 marks, an even 30 questions each in Physics, Chemistry and Mathematics. Every VTUEEE online test here is free to attempt and scores instantly.',
    strategy: 'Two minutes a question is generous, and with free navigation across all three subjects the whole three hours is yours to allocate, so this is a paper where careful working beats rapid coverage. The three subjects are equally weighted, so there is no section to favour. One caveat worth carrying: Vel Tech\'s current admissions page and the 2026 brochure confirm the cycle and its phase schedule directly, but neither states the exact 90-question, 30-30-30, 180-minute and plus-four-minus-one scheme used here, which is corroborated across independent current sources rather than read from an official document. Confirm it on your own hall ticket.',
    description: 'Free VTUEEE mock tests. 90 questions in 180 minutes, two minutes each, on a corroborated rather than officially published pattern.',
  },
  'ap-lawcet': {
    lead: 'A free AP LAWCET mock test series for the 5-Year LL.B. route. The paper runs 120 questions in 90 minutes for 120 marks, across Aptitude for the Study of Law at 60 questions, General Knowledge and Mental Ability at 30, and Current Affairs at 30. Every test here is free.',
    strategy: 'Ninety minutes for 120 questions is 45 seconds each, which is fast for a law entrance and faster than CLAT or SLAT ask for. At that pace the Aptitude for the Study of Law section, 60 questions and half the paper, has to be worked at a reading speed you have actually rehearsed rather than one you hope for. The other half is General Knowledge and Current Affairs at 30 each, which are recall rather than reasoning and therefore the quickest marks in the paper: clear them first and bank the time. Wrong answers cost nothing here, so the last minute of the 90 belongs to whatever is still unmarked.',
    description: 'Free AP LAWCET 5-Year LL.B. mock tests. 120 questions in 90 minutes, about 45 seconds each, with no negative marking.',
  },
  'tg-lawcet': {
    lead: 'A free TG LAWCET mock test series for the 5-Year LL.B. route. The paper runs 120 questions in 90 minutes for 120 marks, across Aptitude for the Study of Law at 60 questions plus General Knowledge and Mental Ability and Current Affairs at 30 each. Every test here is free.',
    strategy: 'Ten of the 60 Aptitude for the Study of Law questions are built on legal passages rather than standalone principles, which is the part of this section that behaves like a reading test. That matters at the pace the paper sets: 120 questions in 90 minutes is 45 seconds each, and a passage-based question cannot be answered in 45 seconds unless the reading is already fast. Bank time on General Knowledge and Current Affairs, which are recall and therefore quick, and spend it on the passages. There is no negative marking, so nothing is worth leaving blank at the end.',
    description: 'Free TG LAWCET 5-Year LL.B. mock tests. 120 questions in 90 minutes, with 10 of the 60 law questions built on legal passages.',
  },
  'ceed': {
    lead: 'A free CEED practice series for Part A, the 44-question computer-based portion covering numerical-answer, multiple-select and multiple-choice questions in 60 minutes. Every CEED online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'Three question types, three different penalties, and the differences decide where to spend risk. The 8 numerical-answer questions earn 4 marks with nothing deducted, so they are free attempts; the 10 multiple-select questions carry their own partial-credit rules; and the 26 multiple-choice questions are the ones where a wrong answer costs. Identify the type before deciding whether to guess. Part A also closes for good once Part B begins, so the sweep for unanswered numerical questions has to happen inside its 60 minutes. Part B is a 120-minute hand-marked sketching and creativity paper and is not covered here, though it is compulsory in the real exam.',
    description: 'Free CEED Part A practice. Three question types with different penalties, including 8 numerical questions that carry none.',
  },
  'uceed': {
    lead: 'A free UCEED practice series for Part A, the 57-question computer-based portion covering numerical-answer, multiple-select and multiple-choice questions in 120 minutes. Every UCEED online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'Fourteen of these 57 questions carry no penalty at all. The numerical-answer questions earn 4 marks with nothing deducted for a wrong entry, which makes them the one block where an uncertain attempt is strictly better than a blank; the 15 multiple-select questions award up to 4 with their own partial-credit rules, and the 28 multiple-choice questions are where a wrong answer actually costs. So the attempt decision is per question type rather than per paper. Part A gets 120 of the exam\'s 180 minutes, with the remaining 60 going to the hand-marked Part B sketching paper, which is compulsory in the real exam and not covered here.',
    description: 'Free UCEED Part A practice. 14 numerical-answer questions carry no penalty; the 28 multiple-choice questions do.',
  },
  'ukpsc-pcs': {
    lead: 'A free UKPSC PCS mock test series for the General Aptitude Test, the second preliminary paper. It runs 100 questions in two hours for 150 marks, across a General Aptitude core plus English and Hindi comprehension and grammar. Every UKPSC PCS online test here is free.',
    strategy: 'The marking here is unusual and worth working out before you sit it. A correct answer earns 1.5 marks and a wrong one deducts a quarter of that, 0.375, which puts break-even at one in five rather than the one in four a 2-and-a-third scheme gives you. So this paper is more forgiving of a narrowed guess than most civil services papers, and leaving a question you could halve the options on is the expensive habit. The General Aptitude core is 80 of the 100 questions, with the two language blocks taking 20 between them, so the bulk of preparation belongs in reasoning and comprehension rather than grammar.',
    description: 'Free UKPSC PCS General Aptitude Test mocks. 1.5 marks a correct answer against 0.375 deducted, so break-even is one in five.',
  },
  'iiit-hyderabad-ugee': {
    lead: 'A free IIIT Hyderabad UGEE mock test series. The exam runs 180 minutes in two locked sections: SUPR, the Subject Proficiency Test, for 60 minutes, then REAP, the Research Aptitude Test, for 120. Every UGEE online test here is free to attempt and scores instantly.',
    strategy: 'The two sections do different jobs and are not weighted alike. Candidates are first filtered on SUPR performance and then ranked on REAP for the interview shortlist, so SUPR is a gate to clear and REAP is the score that positions you. REAP also gets twice the time and 100 of the 140 marks against SUPR\'s 40. The negative marking is proportional rather than flat: 25% of each question\'s own value, which works out at 0.25 on a SUPR question and 0.5 on a REAP one, so a wrong answer in the section that matters more costs more too. Each section locks when its timer ends.',
    description: 'Free IIIT Hyderabad UGEE mock tests. SUPR filters and REAP ranks, with negative marking set at 25% of each question\'s own value.',
  },
  'toefl': {
    lead: 'A free TOEFL Reading practice series covering the Read in Daily Life and Read an Academic Passage task types, 15 questions each in a fixed 30-minute set. Every TOEFL online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'The official Reading section changed on 21 January 2026, and the biggest change is not covered by any multiple-choice practice, including this one. TOEFL iBT Reading now runs a two-stage adaptive design across three task types, and the third, Complete the Words, is a typed vocabulary task worth roughly 30 of the 50 scored items. That is more than half the section, and you cannot rehearse it by choosing between options. Use this practice for the two passage-based task types it does cover, and prepare Complete the Words separately as the vocabulary drill it is. Nothing is deducted for a wrong answer, so leave nothing blank.',
    description: 'Free TOEFL Reading practice for the two passage task types. Complete the Words, about 30 of the 50 scored items, is typed and not covered.',
  },
  'pte': {
    lead: 'A free PTE Academic Reading practice series covering the two multiple-choice task types, Single Answer and Multiple Answers, as a fixed 20-question set in 25 minutes. Every PTE online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'This covers two of the five official task types, and the three it leaves out are the ones that make PTE Reading distinctive. The official section is a single 32 to 41 minute block with 15 to 20 questions across five formats, and Re-order Paragraphs, Reading Fill in the Blanks and Reading and Writing Fill in the Blanks all use drag-and-drop or dropdown mechanics rather than choosing an option. Those reward structural reading, following how a text is put together, which is a different skill from the comprehension the multiple-choice questions test. Practise those separately. Nothing is deducted here, so answer everything.',
    description: 'Free PTE Academic Reading practice for the two multiple-choice task types. The three drag-and-drop formats are not covered.',
  },
  'gre': {
    lead: 'A free GRE Quantitative Reasoning practice series covering Quantitative Comparison and Numeric Entry, 20 questions in a fixed 35-minute set. Every GRE online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'Quantitative Comparison is 12 of these 20 questions, and it is the format most candidates handle worst because it rewards not calculating. The question asks which of two quantities is larger, and a full solve is usually the slow route to an answer that a comparison or an elimination would have given faster. Numeric Entry is the opposite: no options to work backwards from, so the value has to be produced. One structural note: the official measure is section-adaptive, 27 questions across two sections where the second\'s difficulty depends on the first, and this fixed-form practice cannot reproduce that. Nothing is deducted for a wrong answer.',
    description: 'Free GRE Quantitative Reasoning practice. 12 of the 20 questions are Quantitative Comparison, which rewards not calculating.',
  },
  'mcat': {
    lead: 'A free MCAT practice series for the Critical Analysis and Reasoning Skills section: 53 questions across short passages in a 90-minute block, drawn from Humanities and Social Sciences. Every MCAT online test here is free to attempt and returns a section-wise result.',
    strategy: 'CARS is the one MCAT section with no science content and no outside knowledge to bring, which is exactly why it resists the preparation that works everywhere else on the test. Every answer is in the passage, so the skill is reading carefully under time pressure rather than recalling anything, and content revision does nothing for it. Ninety minutes for 53 questions across nine passages is about 10 minutes a passage including its questions. The section is separately timed in a fixed order and cannot be revisited once its time is up, so the pacing has to hold within the block. Nothing is deducted for a wrong answer.',
    description: 'Free MCAT CARS practice. 53 questions in 90 minutes, no science content, and every answer is in the passage.',
  },
  'oet': {
    lead: 'A free OET Reading practice series for Part C, the two longer texts with 8 four-option questions each in a 32-minute set. Every OET online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'This is one of three parts, and the only one that is multiple choice. The official Reading sub-test gives 60 minutes to three parts: Part A is 20 typed matching and short-answer items in 15 minutes, Part B is six short texts with one three-option question each, and Part C is the two longer texts this practice covers. So a candidate who prepares only on four-option questions has rehearsed roughly a third of the sub-test and none of the typed work Part A demands under its tight 15-minute limit. Reading content is identical across all 12 OET professions; only Writing and Speaking differ by profession.',
    description: 'Free OET Reading Part C practice. Part C is one of three parts and the only multiple-choice one; Part A is typed.',
  },
  'frm': {
    lead: 'A free FRM Part I practice series for the Quantitative Analysis topic area, covering Probability and Distributions and Regression and Estimation, 10 questions each in a 48-minute set. Every FRM online test here is free to attempt and scores instantly.',
    strategy: 'Quantitative Analysis is roughly a fifth of Part I, so treat this as one topic area rather than a rehearsal of the exam. The official Part I is 100 equally weighted four-option questions in four hours across four areas: Foundations of Risk Management, Quantitative Analysis, Financial Markets and Products, and Valuation and Risk Models. Equal weighting is the useful part, because it means no area can be safely neglected and the marginal hour belongs wherever you are weakest rather than wherever you are most interested. Nothing is deducted for a wrong answer, so on the day nothing should be left blank.',
    description: 'Free FRM Part I practice for Quantitative Analysis, roughly a fifth of an exam whose four topic areas are equally weighted.',
  },
  'nism': {
    lead: 'A free NISM Series V-A practice series for the Mutual Fund Distributors certification, covering the calculation-based portion of the syllabus: NAV and returns, and SIP and growth. Every NISM online test here is free to attempt and returns a section-wise result.',
    strategy: 'This is a certification with a pass mark rather than a rank, and the pass mark is 50%. That changes the goal: you are not competing for a place, you are clearing a line, and the calculations are the part of the syllabus where a candidate either can do them or cannot. There is no negative marking across the 100-question paper, so nothing should be left blank on the day. Note the scope here: the full Series V-A syllabus also covers mutual fund concepts, regulation, taxation and fund accounting, and this practice covers only the calculation-based questions, which are the most drillable part rather than the whole exam.',
    description: 'Free NISM Series V-A practice for the calculation-based questions. A certification with a 50% pass mark and no negative marking.',
  },
  'acet': {
    lead: 'A free ACET practice series for the Mathematics and Statistics sections, 10 questions each in a 50-minute set. Every ACET online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'One feature of the real paper has no analogue in most entrances: questions carry 1, 2 or 3 marks each rather than a flat value. The official ACET is 70 questions for 100 marks in three hours across Mathematics, Statistics, Data Interpretation, English and Logical Reasoning, and because the marks vary by question, a skipped 3-mark item costs three times what a skipped 1-mark one does. Checking the value before committing time is part of the pacing. There is no negative marking anywhere, so nothing should be left blank. This practice covers the Mathematics and Statistics sections only.',
    description: 'Free ACET practice for Mathematics and Statistics. The real paper carries 1, 2 and 3-mark questions rather than a flat value.',
  },
  'cma-foundation': {
    lead: 'A free CMA Foundation practice series for Paper 3, Fundamentals of Business Mathematics and Statistics. The official paper is 50 questions for 100 marks in one hour; this practice runs a shorter proportional set of 30. Every CMA Foundation online test here is free.',
    strategy: 'Statistics is roughly 60% of this paper and Business Mathematics 40%, which is the opposite balance to CA Foundation\'s Paper 3, where the two split evenly at 40 marks each. If you are sitting both, or choosing between them, that is the difference worth knowing: strength in data representation, central tendency, correlation and probability pays more here than it does there. The official paper is also twice as fast, 50 questions in one hour against CA Foundation\'s 100 in two, with each question worth 2 marks rather than 1. There is no negative marking at all, so every question should carry an answer.',
    description: 'Free CMA Foundation Paper 3 practice. Statistics is roughly 60% of the paper, the reverse of CA Foundation\'s even split.',
  },
  'state-set': {
    lead: 'A free MH SET practice series for the Commerce subject combination. The exam runs 150 questions for 300 marks in 180 minutes, across Paper I on Teaching and Research Aptitude and Paper II on Commerce. Every State Eligibility Test online test here is free to attempt.',
    strategy: 'Paper I is common to every subject and Paper II is the one you chose, and the split is two to one in favour of the subject: 100 questions and 200 marks for Commerce against 50 and 100 for Teaching and Research Aptitude. That makes Paper I the smaller half and also the more neglected one, since candidates prepare their subject as a matter of course and treat research aptitude, teaching method and data interpretation as something to skim. It is 100 marks either way. There is no negative marking, so nothing should be left blank across either paper.',
    description: 'Free MH SET Commerce practice. Paper II is 200 of the 300 marks, but the common Paper I still carries 100.',
  },
  'gujcet': {
    lead: 'A free GUJCET mock test series for the engineering route. The exam runs 120 questions for 120 marks, with Physics and Chemistry sharing one window and Mathematics getting its own. Every GUJCET online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'The paper comes in two sittings rather than one. Physics and Chemistry share a single 120-minute window with free navigation between them, and that window auto-submits before Mathematics opens with a separate 60 minutes of its own. So Mathematics gets half the time of the other two combined for a third of the questions, which makes it the faster half, and time banked in the first window cannot help you there. The three subjects are equally weighted at 40 questions each. A wrong answer costs 0.25 against 1, putting break-even at one in five. GUJCET is conducted offline on OMR.',
    description: 'Free GUJCET mock tests. Physics and Chemistry share a 120-minute window; Mathematics gets a separate 60 with no return.',
  },
  'jeecup': {
    lead: 'A free JEECUP mock test series for the Group A Engineering and Technology polytechnic route. The paper runs 100 questions in 150 minutes for 400 marks, split evenly between Mathematics and a combined Physics and Chemistry section. Every JEECUP online test here is free.',
    strategy: 'Half the weighting of this paper sits in a single subject. The official brochure fixes Mathematics at 50% of the weighting and Physics and Chemistry jointly at the other 50%, so the single subject carries as much as the two sciences together, and a revision plan split three ways gives it a third of what it is worth. This is also a polytechnic entrance, which means the syllabus sits at school-leaving level rather than 10+2 engineering level. There is no negative marking, so an unanswered question is simply a mark declined, and 150 minutes for 100 questions gives you 90 seconds each.',
    description: 'Free JEECUP Group A mock tests. Mathematics is 50% of the weighting on its own, with Physics and Chemistry sharing the rest.',
  },
  'cuet-ug': {
    lead: 'A free CUET UG practice series covering the English paper and the General Aptitude Test, 50 questions in 60 minutes each. Every CUET UG online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'CUET UG is not one exam, it is a set of papers you assemble, and this covers two of them. Candidates pick domain subjects, languages and General Aptitude to match the courses they are applying for, so your paper combination is personal and no single mock simulates it. What these two do have in common is that almost every combination includes one or both. On marking, a correct answer earns 5 and a wrong one deducts 1, which puts break-even at one in six: unusually forgiving, so a question you can narrow at all is worth attempting rather than skipping.',
    description: 'Free CUET UG practice for the English paper and General Aptitude Test. Scoring is +5 and -1, so break-even is one in six.',
  },
  'uttarakhand-jeep': {
    lead: 'A free Uttarakhand JEEP mock test series for the Group E Engineering and Technology polytechnic route. The paper runs 100 questions in 120 minutes for 500 marks, split evenly between Mathematics and a combined Science section. Every Uttarakhand JEEP online test here is free.',
    strategy: 'Mathematics and Science are weighted 50-50, and the Science half is not subdivided. Official evidence confirms the 120-minute slot and the even split, but publishes no Physics-versus-Chemistry breakdown inside Science, so this practice keeps Science as one section rather than inventing a ratio the board has not stated. What that means for preparation is that the two subjects inside Science should be treated as equally likely until you know otherwise. Mathematics alone is half the paper. Five marks a question against one off puts break-even at one in six, which is forgiving enough that narrowed guesses clearly pay.',
    description: 'Free Uttarakhand JEEP Group E mock tests. Mathematics is half the paper; the Science half is not officially subdivided.',
  },
  'niper-jee': {
    lead: 'A free NIPER JEE mock test series for the Master\'s Programme entrance. The paper runs 200 questions in 150 minutes for 100 marks, across a general Section A of 80 questions and a mainly B.Pharm. Section B of 120. Every NIPER JEE online test here is free to attempt.',
    strategy: 'Two hundred questions in 150 minutes is 45 seconds each, and every question is worth half a mark rather than a whole one. That matters because the deduction is 0.125, a quarter of what a correct answer earns, so break-even sits at one in five and the arithmetic is the same as a 1-and-0.25 scheme despite the unfamiliar numbers. Section B, mainly the B.Pharm. syllabus, is 120 of the 200 questions and 60 of the 100 marks, so your degree coursework is the bulk of the preparation and Section A\'s English, aptitude, reasoning and general knowledge is the other 40.',
    description: 'Free NIPER JEE mock tests. 200 questions in 150 minutes at half a mark each, with Section B carrying 60 of the 100 marks.',
  },
  'ugc-net': {
    lead: 'A free UGC NET practice series for the Computer Science and Applications subject combination. The exam runs 150 questions in 180 minutes for 300 marks, across the common Paper I and the subject Paper II. Every UGC NET online test here is free to attempt.',
    strategy: 'Paper I is common to every subject in UGC NET, which makes it the most reusable preparation on the whole test and the most commonly underprepared. It is 50 questions and 100 of the 300 marks on Teaching and Research Aptitude, comprehension, reasoning, data interpretation and higher education, none of which a computer science background supplies. Paper II is 100 questions and 200 marks on the subject. Both run under one 180-minute timer with no break between them, so the pacing is across the whole 150 questions rather than per paper. There is no negative marking, so nothing should be left blank.',
    description: 'Free UGC NET Computer Science practice. Paper I is common to every subject and carries 100 of the 300 marks.',
  },
  'tifr-gs': {
    lead: 'A free TIFR GS practice series for the Computer Science admission route, covering the 30 questions that count: Part A Common and Part B Computer Science, 15 each. Every TIFR GS online test here is free to attempt and returns a section-wise result.',
    strategy: 'Questions carry five options here rather than four, which is the official width for this paper and changes the guessing arithmetic: a blind guess returns one in five while a wrong answer costs a full mark against the 4 a correct one earns, so random guessing is a clear loss and an attempt needs a genuine elimination first. The scoring scope matters too. For Computer Science admission TIFR counts Part A and Part B and ignores Part C, so the 30 questions practised here are the ones that decide the outcome, and Part C on Learning, Information and Data Science is not covered.',
    description: 'Free TIFR GS Computer Science practice. Five options per question, and only Parts A and B count for CS admission.',
  },
  'upsc-ies-iss': {
    lead: 'A free UPSC ISS practice series for the objective Statistics I and Statistics II papers, 80 questions each for 200 marks apiece. Every UPSC ISS online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'Both papers are pure statistics and they are weighted identically, 80 questions and 200 marks each, so there is no general-studies section to fall back on and no weaker paper to write off. Every question is worth 2.5 marks and a wrong answer deducts one third of that, which puts break-even at exactly one in four: precisely what a blind guess across four options returns, so guessing at random gains nothing across a long paper and only turns positive once you can rule an option out. With 240 minutes across the two papers you have 90 seconds a question, enough to work rather than recognise.',
    description: 'Free UPSC ISS practice for Statistics I and II. Two equally weighted objective papers, with break-even at exactly one in four.',
  },
  'jee-main-paper-2': {
    lead: 'A free JEE Main Paper 2 practice series covering the objective parts of both routes: Paper 2A for B.Arch, Mathematics and the Aptitude Test, and Paper 2B for B.Planning, which adds a Planning section. Every JEE Main Paper 2 online test here is free to attempt.',
    strategy: 'The Aptitude Test is 50 questions, twice what Mathematics contributes in question count, and it is the part a Paper 1 preparation does nothing for. Mathematics brings 20 multiple-choice and 5 numerical-value questions; everything above that is spatial reasoning, three-dimensional perception and awareness of the built environment, which rewards practice at the question type rather than revision. B.Planning adds 25 more on Planning. Note what is not here: Paper 2A also carries a 100-mark offline Drawing Test marked by hand, which cannot be auto-graded and is excluded, so the B.Arch practice is the objective half only.',
    description: 'Free JEE Main Paper 2 practice for B.Arch and B.Planning. The Aptitude Test is 50 questions a Paper 1 preparation never touches.',
  },
  'nata': {
    lead: 'A free NATA practice series for the Mathematics component of Part B. The official exam pairs an offline Drawing and Composition Test with a computer-based aptitude paper; this practice covers the Mathematics questions inside the second of those. Every NATA online test here is free.',
    strategy: 'Read the scope before the strategy, because it is narrow on purpose. NATA is two parts in one sitting: Part A is three hand-drawn questions for 80 marks in 90 minutes, and Part B is 50 computer-based questions for 120 marks in 90 minutes covering Mathematics and General Aptitude together. This practice covers only the Mathematics questions inside Part B. The Drawing test cannot be auto-graded, and General Aptitude mixes visual perception and architectural awareness with reasoning in a way that does not split cleanly, so neither is built here. Part B carries no penalty for a wrong answer, so all 50 of its questions should hold a response on the day.',
    description: 'Free NATA practice for the Mathematics part of Part B. The Drawing test and General Aptitude are not covered here.',
  },
  'fmge': {
    lead: 'A free FMGE practice series for the screening test taken by graduates of medical schools outside India. The exam is 300 questions across two 150-minute sittings on the same day, provided here as two separate tests. Every FMGE online test here is free to attempt.',
    strategy: 'FMGE is a pass-or-fail qualification, not a ranked one, and that should change how you practise. You need the pass mark to register and practise in India; a score well above it buys nothing, so the sensible target is reliable clearance across the whole syllabus rather than excellence in the subjects you enjoy. There is no negative marking across the 300 single-best-answer questions, so every one should carry an answer. The two parts are separate sittings of 150 questions and 150 minutes each, which is a minute a question, and they are built here as two tests because that is how the day runs.',
    description: 'Free FMGE practice. 300 questions across two 150-minute sittings, no negative marking, and a pass mark rather than a rank.',
  },
  'cseet': {
    lead: 'A free CSEET practice series for Paper 4, Business Laws and Management. Since the June 2026 restructure, CSEET runs as four centre-based papers of 100 marks each, one per day, and this covers the fourth. Every CSEET online test here is free to attempt and scores instantly.',
    strategy: 'ICSI restructured this exam with effect from the June 2026 session, so any preparation material older than that describes a different test. It is now four separate offline papers of 100 marks each, sat one per day: Business Communication, Fundamentals of Accounting, Economic and Business Environment, and Business Laws and Management. That is a meaningful change from a single combined sitting, because each paper now gets its own two hours and its own day, which rewards preparing them in sequence rather than as one blended syllabus. There is no negative marking on this paper, so nothing is worth leaving blank.',
    description: 'Free CSEET Paper 4 practice. ICSI restructured the exam into four separate papers from the June 2026 session.',
  },
  'gpat': {
    lead: 'A free GPAT practice series for the NBEMS pharmacy entrance. The paper runs 125 questions in 180 minutes for 500 marks, delivered as one undivided pharmacy paper rather than separately timed subjects. Every GPAT online test here is free to attempt and returns a section-wise result.',
    strategy: 'The paper is not divided into separately timed subject sections, which means the whole three hours follows your strengths rather than a fixed allowance per topic. At 125 questions that is 86 seconds each, comfortable enough to work rather than recognise. Four marks for a correct answer and one off for a wrong one puts break-even at one in five, so a question you can narrow to three options is already worth attempting and one you cannot narrow at all is not. GPAT is conducted in English only. Unattempted questions score zero, so the final sweep should still mark anything you could plausibly have reasoned toward.',
    description: 'Free GPAT practice. 125 questions in 180 minutes as one undivided pharmacy paper, scored +4 and -1.',
  },
  'jam': {
    lead: 'A free IIT JAM practice series for the Mathematics paper. It runs 60 questions in 180 minutes for 100 marks, across three sections that are marked in three different ways. Every IIT JAM online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'Three sections, three marking rules, and knowing which you are in decides whether to attempt. Section A is 30 multiple-choice questions where a 1-mark wrong answer costs a third and a 2-mark one costs two thirds. Section B is 10 multiple-select questions with no negative marking, and Section C is 20 numerical-answer questions with none either. So two thirds of the paper by section count carries no penalty at all, which makes leaving anything blank in Sections B and C a straightforward loss. Free navigation across all three under one 180-minute timer means you can clear the penalty-free sections first and return to A with what is left.',
    description: 'Free IIT JAM Mathematics practice. Sections B and C carry no negative marking; only Section A deducts.',
  },
  'ap-pgecet': {
    lead: 'A free AP PGECET practice series for the Computer Science and Information Technology paper. It runs 120 questions in 120 minutes for 120 marks as a single undivided paper. Every AP PGECET online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'No negative marking and a minute a question make this a paper where completion is the whole strategy: a blank scores the same as a wrong answer, so the only avoidable loss is a question you never reached. One caveat about how this practice is organised: the official master question paper confirms the 120 questions, 120 marks and 120 minutes directly, but does not publish a per-topic distribution, so the 19-domain topic allocation used here is a TakeMockTest preparation map rather than an official blueprint. Use it to spread your revision, not to predict how many questions a topic will bring.',
    description: 'Free AP PGECET Computer Science practice. 120 questions in 120 minutes with no negative marking; the topic split is not official.',
  },
  'aibe': {
    lead: 'A free AIBE practice series for the Bar Council of India\'s enrolment examination. The paper runs 100 questions in 180 minutes for 100 marks, drawn across 19 law subjects. Every AIBE online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'Nineteen subjects across 100 questions means roughly five questions each, and that shape should govern your revision. Depth in Constitutional Law will not rescue a blank on Professional Ethics, because no subject carries enough weight to compensate for another, and the qualifying nature of the exam means breadth beats brilliance. AIBE is also open-book in most centres and tests law applicable as of the exam date, so knowing where to find a provision quickly matters as much as recalling it. Three hours for 100 questions is generous at 108 seconds each, and there is no negative marking, so nothing should be left blank.',
    description: 'Free AIBE practice. 100 questions across 19 law subjects, about five each, with no negative marking.',
  },
  'aiapget': {
    lead: 'A free AIAPGET practice series for the Homoeopathy stream. The paper runs 120 questions in 2 hours for 480 marks, drawn from the National Commission for Homoeopathy graduate curriculum. Every AIAPGET online test here is free to attempt and returns a section-wise result.',
    strategy: 'AIAPGET covers four AYUSH systems, Ayurveda, Siddha, Unani and Homoeopathy, and each sits its own paper, so this practice is one stream of four rather than a general AYUSH test. Within it, the syllabus boundary is your graduate curriculum, which means the exam rewards consolidating what you already studied rather than reading beyond it. Four marks for a correct answer and one off for a wrong one puts break-even at one in five, and with 120 questions in 120 minutes you have a minute each, so the working pace has to be recall rather than reasoning from first principles.',
    description: 'Free AIAPGET Homoeopathy practice. 120 questions in two hours on the graduate curriculum, scored +4 and -1.',
  },
  'cuet-pg': {
    lead: 'A free CUET PG practice series for the COQP12 General Paper used in MBA and management-adjacent postgraduate admissions. It runs 75 questions in 90 minutes for 300 marks. Every CUET PG online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'CUET PG is a large multi-subject test and this is one paper inside it, so check that COQP12 is the code your programme actually asks for before preparing to it. On the paper itself, 75 questions in 90 minutes is 72 seconds each, and every question is worth 4 marks with 1 deducted for a wrong answer, putting break-even at one in five. That ratio means a narrowed guess is clearly worth taking while a blind one across four options is close to neutral. With no sectional lock, the whole 90 minutes is yours to allocate across the general paper as you find the questions.',
    description: 'Free CUET PG COQP12 General Paper practice. 75 questions in 90 minutes at +4 and -1, one paper within a much larger test.',
  },
  'icar-aieea-pg': {
    lead: 'A free ICAR AIEEA PG practice series for the Agronomy subject. The paper runs 120 questions in 2 hours for 480 marks. Every ICAR AIEEA PG online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'ICAR AIEEA PG runs across several major subject groups and this practice covers Agronomy, Major Subject Group 05, only. Your subject group is chosen at application and fixes the paper you sit, so the first thing to confirm is that this is the one. Within it, 120 questions in 120 minutes is a minute each, which at postgraduate level means recall rather than derivation: the paper rewards having consolidated the undergraduate agronomy curriculum rather than reasoning through unfamiliar ground. Four marks for a correct answer and one off puts break-even at one in five, so narrowed guesses pay and blind ones do not.',
    description: 'Free ICAR AIEEA PG Agronomy practice. 120 questions in two hours at +4 and -1, covering Major Subject Group 05 only.',
  },
  'dbt-bet': {
    lead: 'A free DBT BET practice series for Section A of the Biotechnology Eligibility Test, 50 compulsory questions. Every DBT BET online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'Section B is excluded here for a mechanical reason rather than a content one, and it is worth understanding. The official paper displays 150 Section B questions and lets a candidate attempt any 50 of them, which is a choice-based structure this engine cannot reproduce without an attempt cap. So Section A, where all 50 questions are compulsory, is what is built. That still leaves the more predictable half: with no choice to make, Section A rewards covering the whole syllabus evenly rather than betting on favourite topics. Correct answers pay 4 and wrong ones cost 1, which leaves the threshold for attempting at one in five.',
    description: 'Free DBT BET Section A practice. All 50 questions are compulsory; Section B lets you choose 50 of 150 and is not built here.',
  },
  'upsc-combined-geo-scientist': {
    lead: 'A free UPSC Combined Geo-Scientist practice series for the Stream I Geology and Hydrogeology Paper II objective paper. It runs 120 questions in 2 hours for 300 marks. Every online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'Marking is 2.5 a question with about 0.83 taken off for a wrong one, so the attempt threshold is one in four, which is exactly what four options return to a blind guess: random marking earns nothing over 120 questions and only pays once something is ruled out. Marking more than one response counts as wrong. With two hours for 120 questions you have a minute each, which at this level means the paper tests consolidated subject knowledge rather than working time. This practice covers the Stream I Paper II objective paper only; the other streams and papers are separate.',
    description: 'Free UPSC Combined Geo-Scientist practice for Geology Paper II. 2.5 marks a correct answer, break-even at exactly one in four.',
  },
  'upsc-engineering-services': {
    lead: 'A free UPSC ESE practice series for the Stage I Preliminary Civil Engineering Paper II objective paper. It runs 150 questions in 180 minutes for 300 marks. Every UPSC ESE online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'One hundred and eighty minutes for 150 questions is 72 seconds each, which at Engineering Services level is recall pace rather than derivation pace: the paper rewards a syllabus you have consolidated over one you can reason your way back through. The marking then works against unconsidered attempts. Two marks come for a correct answer and about 0.67 goes for a wrong one, leaving the threshold at one in four, the exact return of a blind guess on four options, so only an elimination makes an attempt pay. Marking more than one response counts as wrong, so commit to a single answer. This practice covers the Civil Engineering Paper II objective paper of Stage I only; Paper I and the later stages are separate.',
    description: 'Free UPSC ESE practice for Civil Engineering Paper II. 150 questions in 180 minutes, with break-even at exactly one in four.',
  },
  'ini-cet': {
    lead: 'A free INI-CET practice series for the AIIMS-conducted postgraduate entrance used by AIIMS, PGIMER, JIPMER, NIMHANS and SCTIMST. The paper is 200 questions for 200 marks over 180 minutes. Every INI-CET online test here is free to attempt and scores instantly.',
    strategy: 'The real exam is harder to pace than this practice, and the difference is worth knowing. INI-CET is administered in four time-bound parts of 50 questions with 45 minutes each, and a part closes permanently when its time expires, so there is no borrowing between them; this mock runs one unrestricted 180-minute timer instead. Practise against the real structure by giving yourself 45 minutes a quarter and stopping when it ends. One third of a mark is deducted for each wrong answer against 1 earned, which puts break-even at one in four, exactly a blind guess across four options.',
    description: 'Free INI-CET practice. The real exam runs four locked 45-minute parts of 50 questions; this mock uses one open timer.',
  },
  'neet-pg': {
    lead: 'A free NEET PG practice series on the revised 2026 pattern: 180 questions for 720 marks over 210 minutes. Every NEET PG online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'NBEMS cut the paper for 2026, from 200 questions and 800 marks to 180 and 720, so any older practice set or guidance describes a longer exam than the one you will sit. The structure is also more locked than this mock can reproduce: the official test runs five time-bound groups of 36 questions with 42 minutes each, and a group closes permanently when its time is up, while this practice uses one open 210-minute timer. Rehearse in 42-minute blocks of 36 to match it. Marking is 4 up against 1 off, so the threshold for attempting is one in five, and a narrowed guess inside a closing group beats a question abandoned to the timer.',
    description: 'Free NEET PG practice on the revised 2026 pattern of 180 questions. The real exam runs five locked 42-minute groups.',
  },
  'dnb-pdcet': {
    lead: 'A free DNB-PDCET practice series for the Post Diploma Anaesthesiology paper, 120 questions in 2 hours for 480 marks. Every DNB-PDCET online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'All 120 questions come from Anaesthesiology at Post Diploma exit-examination level, drawn across the whole Diploma curriculum rather than to a per-topic quota, which means no part of that curriculum can be safely written off. The official paper is delivered in sequentially locked time-bound sections, and the bulletin gives three blocks of 40 questions in 40 minutes only as an example while saying the actual split may differ, so practise to a minute a question rather than to any particular block size. A correct answer pays 4 against 1 deducted, putting the attempt threshold at one in five. Other PDCET specialties sit their own papers.',
    description: 'Free DNB-PDCET Anaesthesiology practice. 120 questions across the whole Diploma curriculum with no per-topic quota.',
  },
  'uppsc-pcs': {
    lead: 'A free UPPSC PCS practice series for General Studies Paper II, the CSAT paper of the preliminary examination. It runs 100 questions in two hours for 200 marks. Every UPPSC PCS online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'UPPSC sets two preliminary papers on the same day and this is the second of them. Each question carries 2 marks against about 0.67 for a wrong one, which leaves the attempt threshold at one in four: random marking across 100 questions returns nothing on average, and an attempt pays only once something has been ruled out. Two hours for 100 questions is 72 seconds each, comfortable for a comprehension and reasoning paper, which makes accuracy rather than pace the thing to train.',
    description: 'Free UPPSC PCS CSAT practice. 100 questions in two hours at 2 marks each, with break-even at exactly one in four.',
  },
  'mppsc-state-service': {
    lead: 'A free MPPSC State Service practice series for the General Aptitude Test, the second preliminary paper. It runs 100 questions in two hours for 300 marks. Every MPPSC online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'The figures here come from the commission\'s revised scheme dated 5 January 2026, not an earlier cycle, so material written against the old pattern will not match. Each question is worth 3 marks and a wrong answer costs 1, which puts break-even at one in four, exactly what a blind guess across four options returns. That 3-to-1 ratio is wider than most state services papers use and makes a narrowed guess clearly worth taking. Two hours for 100 questions gives you 72 seconds each, so the paper tests steady accuracy rather than speed.',
    description: 'Free MPPSC General Aptitude Test practice, on the revised scheme dated 5 January 2026. 100 questions at +3 and -1.',
  },
  'opsc-ocs': {
    lead: 'A free OPSC OCS practice series for General Studies Paper II, the CSAT paper of the Odisha Civil Services preliminary examination. It runs 80 questions in two hours for 200 marks. Every OPSC OCS online test here is free to attempt and scores instantly.',
    strategy: 'Eighty questions carrying 200 marks means each is worth 2.5, which is more per question than most CSAT papers, and the deduction scales with it at one third, about 0.83. Break-even lands at exactly one in four, so a blind guess across four options is neutral and an elimination makes attempting worthwhile. The higher per-question value also means a single careless error costs more here than on a 100-question paper of the same total, which argues for working at the pace the clock allows rather than rushing: two hours for 80 questions is 90 seconds each, genuinely generous for a comprehension and reasoning paper.',
    description: 'Free OPSC OCS CSAT practice. 80 questions in two hours at 2.5 marks each, about 90 seconds a question.',
  },
  'cgpsc-state-service': {
    lead: 'A free CGPSC State Service practice series for Preliminary Paper II, the Aptitude Test. The paper is 100 questions across two hours, carrying 200 marks. Every CGPSC online test here is free to attempt and returns a section-wise result the moment you submit.',
    strategy: 'This paper is qualifying only, which is the single most useful thing to know about it: you need to clear the threshold and nothing above that carries into your rank. Preparation time is finite, and hours spent pushing an aptitude score past the line are hours taken from the paper that actually ranks you. Each question is worth 2 marks with one third of that, about 0.67, deducted for a wrong answer, so break-even sits at exactly one in four and a blind guess is neutral. Two hours for 100 questions gives you 72 seconds each.',
    description: 'Free CGPSC Preliminary Paper II practice. The aptitude paper is qualifying only, so marks above the threshold do not rank you.',
  },
  'csir-ugc-net': {
    lead: 'A free CSIR UGC NET practice series for Part A, the General Aptitude section common to every Joint CSIR-UGC NET subject paper. Twenty questions are displayed and at most fifteen may be attempted, for up to 30 marks. Every CSIR UGC NET online test here is free.',
    strategy: 'Part A gives you a choice most sections do not: twenty questions are shown and you may attempt at most fifteen, so five of them are meant to be left alone. That turns selection into part of the skill. Read all twenty first, pick the fifteen you are surest of, and resist filling the quota with a question you cannot narrow, because each is worth 2 marks with 0.5 deducted for a wrong answer, putting break-even at one in five. There is also no official Part A timer: the single 180-minute limit covers Parts A, B and C together, so how much of it Part A gets is your decision, and 30 of the paper\'s marks is the ceiling it can repay.',
    description: 'Free CSIR UGC NET Part A practice. Twenty questions are shown but only fifteen may be attempted, for up to 30 marks.',
  },
};

export function getMockTestIntro(slug: string): MockTestIntro | undefined {
  return MOCK_TEST_INTROS[slug];
}

/**
 * The opening line for an exam with no hand-written entry above.
 *
 * 29 of 183 exams have one. The other 154 opened with "Attempt checked {exam}
 * full mocks, sectional tests, and quick timed practice", which is the exact
 * mad-libs sentence this file's header says it exists to replace, still
 * running on the highest-intent page 154 exams have.
 *
 * This does not invent the missing entry. It states the paper's real shape
 * from the same verified StagePattern the pattern page renders, which is the
 * rule exam-pattern-content.ts already follows: derived arithmetically from
 * data that has been checked against a primary source, never asserted. The
 * `strategy` paragraph stays absent for these exams, because saying which one
 * rule should change how you practise is editorial judgement about the paper,
 * not a figure that can be computed from it. A hand-written entry above still
 * beats this, and this is not a reason to stop writing them.
 */
/**
 * A terminal "and" is unreadable when the section names contain their own:
 * the ACT's two sections came out as "Usage and Mechanics and Rhetorical
 * Skills". Where one does, the list stays comma-separated.
 */
function joinSections(names: readonly string[]): string {
  if (names.length === 1) return names[0];
  if (names.some((name) => / and /i.test(name))) return names.join(', ');
  return `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}`;
}

export function deriveMockTestLead(exam: ExamConfig): string {
  const stage = exam.stages.find((item) => item.pattern.status === 'official') ?? exam.stages[0];
  const pattern = stage?.pattern;
  const tail = `Every ${exam.name} online test here is free to attempt and returns a section-wise result the moment you submit.`;
  if (!pattern?.totalQuestions || !pattern.duration) {
    return `A free ${exam.name} mock test series, built to the sections the official pattern lists. ${tail}`;
  }
  const subject = exam.stages.length === 1 ? 'The paper' : stage.name;
  const marks = pattern.totalMarks ? ` for ${pattern.totalMarks} marks` : '';
  // Section names only. describeSections() expands to per-section question and
  // mark counts where a breakdown exists, which is right for the pattern table
  // and a wall of text in an opening paragraph: UPSC CSE's seven sections ran
  // to 40 words on their own. Four or fewer get named, more get counted.
  const named = pattern.sections;
  const covering =
    named.length === 0
      ? ''
      : named.length <= 4
        ? `, covering ${joinSections(named)}`
        : `, across ${named.length} sections`;
  return `A free ${exam.name} mock test series matching the official pattern. ${subject} runs ${pattern.totalQuestions} questions in ${pattern.duration} minutes${marks}${covering}. ${tail}`;
}
