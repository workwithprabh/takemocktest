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
}

export const MOCK_TEST_INTROS: Readonly<Record<string, MockTestIntro>> = {
  'ssc-cgl': {
    lead: 'A free SSC CGL mock test series covering both stages. The SSC CGL Tier 1 mock test rounds run 100 questions in 60 minutes for 200 marks. The SSC CGL Tier 2 mock test is the longer 150-question Paper I. Every SSC CGL online test here is free, needs no account, and returns a section-wise result the moment you submit.',
    strategy: 'One detail is worth practising for. The penalty changes between stages: Tier 1 deducts 0.50 marks for a wrong answer, and the applicable sections of Tier 2 Paper I deduct 1 mark. So a guess worth taking in Tier 1 is often not worth taking later. Tier 2 also runs on sectional timers, so a slow start in Mathematical Abilities cannot be repaid in English. Work through the SSC CGL test series in stage order and that difference becomes obvious quickly.',
  },
  'ssc-chsl': {
    lead: 'A free SSC CHSL mock test series for both tiers. The SSC CHSL Tier 1 mock test is 100 questions in 60 minutes for 200 marks, across General Intelligence, General Awareness, Quantitative Aptitude and English Language. Tier 2 is covered too. Each SSC CHSL online test scores instantly, with no login and no payment.',
    strategy: 'Tier 1 runs one 60-minute clock across all four sections, with no sectional lock. That makes it a budgeting exercise: time saved on General Awareness is time you still have for Quantitative Aptitude. Tier 2 works the other way. It runs as sequential timed windows that submit themselves, so practise it as separate papers rather than one long sitting. The SSC CHSL test series here is split the same way.',
  },
  'ssc-gd-constable': {
    lead: 'A free SSC GD mock test series built to the current SSC GD Constable CBE. That is 80 questions in 60 minutes for 160 marks, covering General Intelligence and Reasoning, General Knowledge and General Awareness, Elementary Mathematics, and your choice of English or Hindi. Every SSC GD online test is free and needs no account.',
    strategy: 'Eighty questions in 60 minutes is 45 seconds each on average. The average is the point, not a per-question limit. You will not get 45 seconds for every question, so the straightforward ones have to go faster to leave room for the few that need working out. Each carries 2 marks, with 0.25 deducted for a wrong answer. Timed practice helps more here than extra syllabus reading, which is what this SSC GD test series is built around.',
  },
  'rrb-ntpc': {
    lead: 'A free RRB NTPC mock test series covering both computer-based stages. The RRB NTPC CBT 1 mock test is 100 questions in 90 minutes. The RRB NTPC CBT 2 mock test is 120 questions in the same 90 minutes. Every RRB NTPC online test is free, needs no login, and gives a section-wise breakdown straight away.',
    strategy: 'Both stages run one composite timer over Mathematics, General Intelligence and Reasoning, and General Awareness. There is no sectional lock, so you can spend minutes where they actually pay. On marking, RRB NTPC deducts one third of the marks allotted to a question for every wrong answer. With four options, a completely blind guess is roughly break-even. Eliminate even one option and a considered attempt becomes worth taking. The RRB NTPC test series marks every attempt the same way the real paper does.',
  },
  'rrb-group-d': {
    lead: 'A free RRB Group D mock test series matching the current CBT. Each Railway Group D mock test is 100 questions in 90 minutes, across General Science, Mathematics, General Intelligence and Reasoning, and General Awareness with Current Affairs. Every RRB Group D online test is free to attempt and scores the moment you finish.',
    strategy: 'General Science deserves dedicated preparation here. It is a named section of the paper in its own right, not an extension of General Awareness, and it is the part candidates most often fold into general reading. The CBT runs on one 90-minute clock with no sectional lock. Time saved on the sections you are quickest at is time still available for the ones you are not. Every RRB Group D test series round is timed to match.',
  },
  'ibps-po': {
    lead: 'A free IBPS PO mock test series covering both stages. The IBPS PO Prelims mock test is 100 questions in 60 minutes, across English Language, Quantitative Aptitude and Reasoning Ability. The IBPS PO Mains mock test rounds are here too. Every IBPS PO online test is free, needs no account, and returns a section-wise result as soon as you submit.',
    strategy: 'In IBPS PO Prelims each section has its own 20-minute timer. You cannot borrow unused time from Reasoning Ability to rescue Quantitative Aptitude. A weak section therefore stays weak on the day, whatever your overall speed. That is why practising sectionals against the real clock matters as much as attempting full mocks, and why every IBPS PO test series round here is timed that way.',
  },
  'ibps-clerk': {
    lead: 'A free IBPS Clerk mock test series covering both stages. The IBPS Clerk Prelims mock test is 100 questions in 60 minutes. The IBPS Clerk Mains mock test is 160 questions in 125 minutes, across Reasoning Ability with Computer Aptitude, Quantitative Aptitude, English Language, and General and Financial Awareness. Every IBPS Clerk online test is free and needs no account.',
    strategy: 'Both stages are sectionally timed. Prelims gives 20 minutes a section, and Mains locks each section separately, so neither paper allows a recovery run at the end. Clerk Prelims also tests Numerical Ability rather than the PO paper\'s Quantitative Aptitude. That is a shallower syllabus on a clock just as short, so accuracy under pressure decides it. The IBPS Clerk test series is timed to match both stages.',
  },
  'sbi-po': {
    lead: 'A free SBI PO mock test series for both stages. The SBI PO Prelims mock test is 100 questions in 60 minutes. The SBI PO Mains mock test is 170 questions in 180 minutes, across Reasoning and Computer Aptitude, Data Analysis and Interpretation, General, Economy and Banking Awareness, and English Language. Every SBI PO online test is free and needs no account.',
    strategy: 'SBI PO Prelims runs a 20-minute lock on each section, so practise sectionals against that clock rather than a total time. One thing to know before you plan around this series: Mains carries a Descriptive Test alongside the objective sections, and this site covers the objective papers only. Treat the writing paper as separate preparation, and this SBI PO test series as covering everything else.',
  },
  'sbi-clerk': {
    lead: 'A free SBI Clerk mock test series covering both stages. The SBI Clerk Prelims mock test is 100 questions in 60 minutes. The SBI Clerk Mains mock test is 190 questions in 160 minutes, across General and Financial Awareness, General English, Quantitative Aptitude, and Reasoning Ability with Computer Aptitude. Every SBI Clerk online test is free and needs no account.',
    strategy: 'Mains averages just over 50 seconds a question. Because the sections are separately timed, that speed has to be built inside each section rather than recovered elsewhere in the paper. Prelims uses the same 20-minute sectional timing as SBI PO. Both stages reward pace under a short clock more than they reward extra reading, which is how the SBI Clerk test series is timed.',
  },
};

export function getMockTestIntro(slug: string): MockTestIntro | undefined {
  return MOCK_TEST_INTROS[slug];
}
