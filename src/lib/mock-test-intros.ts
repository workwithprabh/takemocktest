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
}

export const MOCK_TEST_INTROS: Readonly<Record<string, MockTestIntro>> = {
  'ssc-cgl': {
    lead: 'A free SSC CGL mock test series covering both stages. The SSC CGL Tier 1 mock test rounds run 100 questions in 60 minutes for 200 marks. The SSC CGL Tier 2 mock test is the longer 150-question Paper I. Every SSC CGL online test here is free, and returns a section-wise result the moment you submit.',
    strategy: 'One detail is worth practising for. The penalty changes between stages: Tier 1 deducts 0.50 marks for a wrong answer, and the applicable sections of Tier 2 Paper I deduct 1 mark. So a guess worth taking in Tier 1 is often not worth taking later. Tier 2 also runs on sectional timers, so a slow start in Mathematical Abilities cannot be repaid in English. Work through the SSC CGL test series in stage order and that difference becomes obvious quickly.',
  },
  'ssc-chsl': {
    lead: 'A free SSC CHSL mock test series for both tiers. The SSC CHSL Tier 1 mock test is 100 questions in 60 minutes for 200 marks, across General Intelligence, General Awareness, Quantitative Aptitude and English Language. Tier 2 is covered too. Each SSC CHSL online test is free and scores instantly.',
    strategy: 'Tier 1 runs one 60-minute clock across all four sections, with no sectional lock. That makes it a budgeting exercise: time saved on General Awareness is time you still have for Quantitative Aptitude. Tier 2 works the other way. It runs as sequential timed windows that submit themselves, so practise it as separate papers rather than one long sitting. The SSC CHSL test series here is split the same way.',
  },
  'ssc-gd-constable': {
    lead: 'A free SSC GD mock test series built to the current SSC GD Constable CBE. That is 80 questions in 60 minutes for 160 marks, covering General Intelligence and Reasoning, General Knowledge and General Awareness, Elementary Mathematics, and your choice of English or Hindi. Every SSC GD online test is free to attempt.',
    strategy: 'Eighty questions in 60 minutes is 45 seconds each on average. The average is the point, not a per-question limit. You will not get 45 seconds for every question, so the straightforward ones have to go faster to leave room for the few that need working out. Each carries 2 marks, with 0.25 deducted for a wrong answer. Timed practice helps more here than extra syllabus reading, which is what this SSC GD test series is built around.',
  },
  'rrb-ntpc': {
    lead: 'A free RRB NTPC mock test series covering both computer-based stages. The RRB NTPC CBT 1 mock test is 100 questions in 90 minutes. The RRB NTPC CBT 2 mock test is 120 questions in the same 90 minutes. Every RRB NTPC online test is free, and gives a section-wise breakdown straight away.',
    strategy: 'Both stages run one composite timer over Mathematics, General Intelligence and Reasoning, and General Awareness. There is no sectional lock, so you can spend minutes where they actually pay. On marking, RRB NTPC deducts one third of the marks allotted to a question for every wrong answer. With four options, a completely blind guess is roughly break-even. Eliminate even one option and a considered attempt becomes worth taking. The RRB NTPC test series marks every attempt the same way the real paper does.',
  },
  'rrb-group-d': {
    lead: 'A free RRB Group D mock test series matching the current CBT. Each Railway Group D mock test is 100 questions in 90 minutes, across General Science, Mathematics, General Intelligence and Reasoning, and General Awareness with Current Affairs. Every RRB Group D online test is free to attempt and scores the moment you finish.',
    strategy: 'General Science deserves dedicated preparation here. It is a named section of the paper in its own right, not an extension of General Awareness, and it is the part candidates most often fold into general reading. The CBT runs on one 90-minute clock with no sectional lock. Time saved on the sections you are quickest at is time still available for the ones you are not. Every RRB Group D test series round is timed to match.',
  },
  'ibps-po': {
    lead: 'A free IBPS PO mock test series covering both stages. The IBPS PO Prelims mock test is 100 questions in 60 minutes, across English Language, Quantitative Aptitude and Reasoning Ability. The IBPS PO Mains mock test rounds are here too. Every IBPS PO online test is free, and returns a section-wise result as soon as you submit.',
    strategy: 'In IBPS PO Prelims each section has its own 20-minute timer. You cannot borrow unused time from Reasoning Ability to rescue Quantitative Aptitude. A weak section therefore stays weak on the day, whatever your overall speed. That is why practising sectionals against the real clock matters as much as attempting full mocks, and why every IBPS PO test series round here is timed that way.',
  },
  'ibps-clerk': {
    lead: 'A free IBPS Clerk mock test series covering both stages. The IBPS Clerk Prelims mock test is 100 questions in 60 minutes. The IBPS Clerk Mains mock test is 160 questions in 125 minutes, across Reasoning Ability with Computer Aptitude, Quantitative Aptitude, English Language, and General and Financial Awareness. Every IBPS Clerk online test is free to attempt.',
    strategy: 'Both stages are sectionally timed. Prelims gives 20 minutes a section, and Mains locks each section separately, so neither paper allows a recovery run at the end. Clerk Prelims also tests Numerical Ability rather than the PO paper\'s Quantitative Aptitude. That is a shallower syllabus on a clock just as short, so accuracy under pressure decides it. The IBPS Clerk test series is timed to match both stages.',
  },
  'sbi-po': {
    lead: 'A free SBI PO mock test series for both stages. The SBI PO Prelims mock test is 100 questions in 60 minutes. The SBI PO Mains mock test is 170 questions in 180 minutes, across Reasoning and Computer Aptitude, Data Analysis and Interpretation, General, Economy and Banking Awareness, and English Language. Every SBI PO online test is free to attempt.',
    strategy: 'SBI PO Prelims runs a 20-minute lock on each section, so practise sectionals against that clock rather than a total time. One thing to know before you plan around this series: Mains carries a Descriptive Test alongside the objective sections, and this site covers the objective papers only. Treat the writing paper as separate preparation, and this SBI PO test series as covering everything else.',
  },
  'sbi-clerk': {
    lead: 'A free SBI Clerk mock test series covering both stages. The SBI Clerk Prelims mock test is 100 questions in 60 minutes. The SBI Clerk Mains mock test is 190 questions in 160 minutes, across General and Financial Awareness, General English, Quantitative Aptitude, and Reasoning Ability with Computer Aptitude. Every SBI Clerk online test is free to attempt.',
    strategy: 'Mains averages just over 50 seconds a question. Because the sections are separately timed, that speed has to be built inside each section rather than recovered elsewhere in the paper. Prelims uses the same 20-minute sectional timing as SBI PO. Both stages reward pace under a short clock more than they reward extra reading, which is how the SBI Clerk test series is timed.',
  },
  'ssc-mts': {
    lead: 'A free SSC MTS mock test series covering the current CBT. The same paper decides the Havaldar posts, so the SSC MTS Havaldar mock test rounds here are the same tests. The paper is 90 questions for 270 marks across two compulsory 45-minute sessions on the same day. Every SSC MTS online test here is free to attempt and scores instantly.',
    strategy: 'The two sessions are marked differently, and that changes how you should attempt each. Session 1 is 40 questions of Numerical and Reasoning with no penalty for a wrong answer, so leave nothing blank. Session 2 is 50 questions of General Awareness and English, and each wrong answer costs 1 mark against a question worth 3. A blind four-option guess there is exactly break-even, so guess only when you can rule an option out. Session 1 also acts as a gate: Session 2 is evaluated only for candidates who clear it. One difference to note, this SSC MTS test series runs both sessions under a single timer for practice, while the real exam runs them as two separately timed sittings.',
    title: 'SSC MTS Mock Test 2026: Free Online Test Series',
  },
  'rrb-alp': {
    lead: 'A free RRB ALP mock test series covering both computer-based stages. The RRB ALP CBT 1 mock test is 75 questions in 60 minutes. The RRB ALP CBT 2 mock test covers Part A, 100 questions in 90 minutes. Every RRB ALP online test is free and needs no login.',
    strategy: 'The two stages do different jobs, so prepare them differently. CBT 1 is a screening test: its marks are not counted when the final panel is prepared, and it exists to shortlist you. CBT 2 Part A is where the score matters, and half of it is a single section, Basic Science and Engineering, worth 50 of the 100 questions. What this RRB ALP test series does not cover is the rest of the process. Part B and the Computer Based Aptitude Test are separate later stages, and you will need other preparation for those.',
    title: 'RRB ALP Mock Test 2026: Free CBT 1 & CBT 2 Tests',
  },
  'rrb-je': {
    lead: 'A free RRB JE mock test series covering both computer-based stages of Junior Engineer recruitment. The RRB JE CBT 1 mock test is 100 questions in 90 minutes. The RRB JE CBT 2 mock test is 150 questions, dominated by branch-specific technical work. Every RRB JE online test here is free to attempt.',
    strategy: 'CBT 1 is common to every JE, DMS and CMA discipline, so everyone sits the same paper. CBT 2 is not. Its Technical Abilities section alone is 100 of the 150 questions, and those questions are specific to your engineering branch. That is the shift worth planning for: general preparation carries you through CBT 1, and branch depth decides CBT 2. Both stages deduct one third of a mark for a wrong answer, so the guessing maths is the same in each. The RRB JE test series is split by stage for that reason.',
    title: 'RRB JE Mock Test 2026: Free CBT 1 & CBT 2 Tests',
    h1: 'RRB JE (Junior Engineer) Mock Test 2026',
  },
  'rbi-assistant': {
    lead: 'A free RBI Assistant mock test series covering both online stages. The RBI Assistant Prelims mock test is 100 questions in 60 minutes. The RBI Assistant Mains mock test is 200 questions in 135 minutes. Every RBI Assistant online test is free and scores the moment you submit.',
    strategy: 'Both online stages are sectionally timed, which is the habit worth building. Prelims gives 20 minutes to each of English, Numerical Ability and Reasoning Ability, and Mains times each of its five sections separately too. Neither paper lets you carry unused minutes forward. Prelims marks are used only to shortlist, so the merit list is decided by Mains. Selection then ends with a Language Proficiency Test. That is a spoken and written check on a regional language, not an objective paper, so it sits outside this RBI Assistant test series.',
    title: 'RBI Assistant Mock Test 2026: Free Prelims & Mains Tests',
  },
  'ibps-rrb-office-assistant': {
    lead: 'A free IBPS RRB Clerk mock test series, listed under the official name Office Assistant (Multipurpose). The Prelims mock test is 80 questions in 45 minutes, and the Mains mock test is 200 questions in 120 minutes. Every IBPS RRB Office Assistant online test here is free to attempt.',
    strategy: 'Prelims is the fastest paper of any banking exam on this site. Eighty questions in 45 minutes leaves about 34 seconds each. There is also no sectional lock, unlike IBPS Clerk or SBI Clerk. The 45 minutes runs as one composite window across Reasoning and Numerical Ability. That cuts both ways. You can move time to whichever section is going well, and nothing forces you to leave a section you are sinking into. Practising against the full clock rather than a per-section one is what builds the judgement that decides.',
    title: 'IBPS RRB Clerk Mock Test 2026: Free Office Assistant Tests',
    h1: 'IBPS RRB Clerk (Office Assistant) Mock Test 2026',
  },
  'ibps-rrb-officer-scale-1': {
    lead: 'A free IBPS RRB PO mock test series, listed under the official name Officer Scale I. The Prelims mock test is 80 questions in 45 minutes across Reasoning and Quantitative Aptitude. The Mains mock test is 200 questions in 120 minutes. Every IBPS RRB Officer Scale I online test is free to attempt.',
    strategy: 'Mains looks evenly split and is not. All five sections carry 40 questions, and they are not worth the same. Reasoning and Quantitative Aptitude pay 1.25 marks a question, so 50 marks each. General Awareness and English pay 1 mark, so 40 each. Computer Knowledge pays 0.5, for a total of 20. So two sections carry half the paper\'s marks on two fifths of its questions. Time spent rescuing Computer Knowledge is the least valuable minute in the paper. This IBPS RRB PO test series marks each section the way the real one does, so that shows up in your result.',
    title: 'IBPS RRB PO Mock Test 2026: Free Officer Scale I Tests',
    h1: 'IBPS RRB PO (Officer Scale I) Mock Test 2026',
  },
  'rbi-grade-b': {
    lead: 'A free RBI Grade B mock test series for the General cadre. The RBI Grade B Phase 1 mock test is 200 questions in 120 minutes across General Awareness, English, Quantitative Aptitude and Reasoning. Every RBI Grade B online test here is free and returns a section-wise result.',
    strategy: 'Phase I is decided by General Awareness more than most candidates expect. It is 80 of the 200 questions, and its window is 25 minutes, which works out at under 19 seconds a question. Reasoning gets 45 minutes for 60 questions, close to three times as long per question. The four windows are locked at 25, 25, 25 and 45 minutes, so nothing can be moved between them. On coverage, this RBI Grade B test series is Phase 1 only. Phase II is Economic and Social Issues, English Writing Skills, and Finance and Management, and it is largely descriptive, so it is not published here.',
    title: 'RBI Grade B Mock Test 2026: Free Phase 1 & 2 Tests',
  },
  'rrb-technician': {
    lead: 'A free RRB Technician mock test series covering both recruitment levels. The Technician Grade 1 Signal mock test and the Technician Grade 3 mock test are each 100 questions in 90 minutes. Both deduct one third of a mark for a wrong answer. Every RRB Technician online test is free to attempt.',
    strategy: 'The two papers share a shape and not a syllabus, so pick the right one before you practise. Grade I Signal leans technical: Basic Science and Engineering is 35 questions and Basics of Computers and Applications another 20, so more than half the paper is technical work. Grade III has no computer section at all, and puts 40 questions into General Science instead. Preparing for one does not prepare you for the other. Each level runs a single CBT that decides shortlisting for Document Verification directly, so there is no second paper to recover in. The RRB Technician test series keeps the two levels apart for the same reason.',
    title: 'RRB Technician Mock Test 2026: Free Grade I & III Tests',
  },
  'rpf-constable': {
    lead: 'A free RPF Constable mock test series built to the Railway Protection Force CBT. The paper is 120 questions in 90 minutes, with one third of a mark deducted for each wrong answer. Every RPF Constable online test here is free to attempt and scores instantly.',
    strategy: 'Ninety minutes for 120 questions is 45 seconds each, and the whole paper runs on one composite clock with no sectional lock. On the penalty, a completely blind four-option guess is break-even: one third lost on three wrong answers cancels the one mark gained on the fourth. Rule out even one option and attempting becomes worthwhile. What this RPF Constable test series covers is the CBT only. The Physical Efficiency Test, Physical Measurement Test and document verification come later and are not something a mock can prepare you for.',
    title: 'RPF Constable Mock Test 2026: Free CBT Test Series',
  },
  'niacl-ao': {
    lead: 'A free NIACL AO mock test series for the Administrative Officer Generalist post. The NIACL AO Prelims mock test is 100 questions in 60 minutes. The NIACL AO Mains mock test covers the 200-question objective paper in 150 minutes. Every NIACL AO online test is free to attempt.',
    strategy: 'Both stages lock their sections, and Mains locks them unevenly: 40, 40, 30 and 40 minutes across the four. Reasoning, English, General Awareness and Quantitative Aptitude carry 50 questions each, so General Awareness gives you 30 minutes for the same load the others get 40 for. That is the section to build speed in. On coverage, this NIACL AO test series is the objective paper. Mains also carries a separate 30-minute Descriptive Test of letter writing and essay. You must qualify it, but it is not counted for shortlisting or final selection, and it is not covered here.',
    title: 'NIACL AO Mock Test 2026: Free Prelims & Mains Tests',
  },
};

export function getMockTestIntro(slug: string): MockTestIntro | undefined {
  return MOCK_TEST_INTROS[slug];
}
