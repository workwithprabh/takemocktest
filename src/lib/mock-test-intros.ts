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
};

export function getMockTestIntro(slug: string): MockTestIntro | undefined {
  return MOCK_TEST_INTROS[slug];
}
