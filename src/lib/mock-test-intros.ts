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
    lead: 'A free SSC CGL mock test series covering both stages: Tier 1 as 100 questions in 60 minutes for 200 marks, and Tier 2 as the longer 150-question Paper I. Every SSC CGL online test here is free to attempt, needs no account, and returns a section-wise result the moment you submit.',
    strategy: 'The detail worth practising is the penalty, because it doubles between the stages. Tier 1 deducts 0.5 marks for a wrong answer and Tier 2 deducts a full mark, so a guess that is worth taking in Tier 1 is often not worth taking in Tier 2. Tier 2 also runs on sectional timers, which means a slow start in Mathematical Abilities cannot be repaid later in English.',
  },
  'ssc-chsl': {
    lead: 'A free SSC CHSL mock test series for both tiers. Tier 1 is 100 questions in 60 minutes for 200 marks across General Intelligence, General Awareness, Quantitative Aptitude and English Language. Each SSC CHSL online test scores instantly, with no login and no payment.',
    strategy: 'Tier 1 runs one 60-minute clock across all four sections with no sectional lock, so the paper is really a budgeting exercise: time saved on General Awareness is time you still have for Quantitative Aptitude. Tier 2 behaves in the opposite way, running as sequential timed windows that submit themselves, so practise it as separate papers rather than as one long sitting.',
  },
  'ssc-gd-constable': {
    lead: 'A free SSC GD Constable mock test series built to the current CBE: 80 questions in 60 minutes for 160 marks, covering General Intelligence and Reasoning, General Knowledge and General Awareness, Elementary Mathematics, and your choice of English or Hindi. Every SSC GD online test is free and needs no account.',
    strategy: 'SSC GD rewards speed more than depth. Each question carries 2 marks and leaves you about 45 seconds, with 0.25 deducted for a wrong answer, so the paper is won by clearing easy questions quickly rather than by solving the hardest ones. That makes timed practice more useful here than extra syllabus reading.',
  },
  'rrb-ntpc': {
    lead: 'A free RRB NTPC mock test series covering both computer-based stages: CBT 1 as 100 questions in 90 minutes, and CBT 2 as 120 questions in the same 90 minutes. Every RRB NTPC online test is free, needs no login, and gives a section-wise breakdown immediately.',
    strategy: 'Both stages run a single composite timer over Mathematics, General Intelligence and Reasoning, and General Awareness, with no sectional lock, so you can spend minutes where they actually pay. The penalty is one third of a mark, gentler than the SSC papers, which moves the break-even point on a considered guess in your favour rather than against it.',
  },
  'rrb-group-d': {
    lead: 'A free RRB Group D mock test series matching the current CBT: 100 questions in 90 minutes across General Science, Mathematics, General Intelligence and Reasoning, and General Awareness with Current Affairs. Every Railway Group D online test here is free to attempt and scores the moment you finish.',
    strategy: 'General Science is what separates Group D from the other railway papers, and it is the section most candidates under-prepare because the other exams do not test it. The CBT runs on one 90-minute clock with no sectional lock, so a strong Science section buys back the minutes Mathematics takes from you.',
  },
  'ibps-po': {
    lead: 'A free IBPS PO mock test series built to the current Prelims pattern: 100 questions in 60 minutes across English Language, Quantitative Aptitude and Reasoning Ability. Every IBPS PO online test is free, needs no account, and returns a section-wise result as soon as you submit.',
    strategy: 'IBPS PO Prelims locks each section to 20 minutes, and that single rule is the one most candidates never practise against. You cannot borrow time from Reasoning to rescue Quantitative Aptitude, so a weak section stays weak on the day whatever your overall speed. Attempt the sectional tests under a 20-minute clock before you attempt a full mock.',
  },
  'ibps-clerk': {
    lead: 'A free IBPS Clerk mock test series covering both stages: Prelims as 100 questions in 60 minutes, and Mains as 160 questions in 125 minutes across Reasoning Ability with Computer Aptitude, Quantitative Aptitude, English Language, and General and Financial Awareness.',
    strategy: 'Both stages are sectionally timed, Prelims at 20 minutes a section and Mains with each section locked separately, so neither paper allows a recovery run at the end. Clerk Prelims tests Numerical Ability rather than the PO paper\'s Quantitative Aptitude, which is a shallower syllabus on a clock that is just as short, so accuracy under pressure decides it rather than breadth of preparation.',
  },
  'sbi-po': {
    lead: 'A free SBI PO mock test series for both stages: Prelims as 100 questions in 60 minutes, and Mains as 170 questions in 180 minutes across Reasoning and Computer Aptitude, Data Analysis and Interpretation, General, Economy and Banking Awareness, and English Language.',
    strategy: 'SBI PO Prelims runs a 20-minute lock on each section, so practise sectionals against that clock rather than against a total time. Mains carries a Descriptive Test alongside the objective sections. This site covers the objective papers only, so treat the writing paper as separate preparation rather than assuming it is covered here.',
  },
  'sbi-clerk': {
    lead: 'A free SBI Clerk mock test series covering Prelims as 100 questions in 60 minutes and Mains as 190 questions in 160 minutes, across General and Financial Awareness, General English, Quantitative Aptitude, and Reasoning Ability with Computer Aptitude.',
    strategy: 'SBI Clerk Mains is the densest paper of the four big banking exams on this site. It gives 190 questions in 160 minutes, under 51 seconds each, with every section separately timed. Prelims uses the same 20-minute sectional lock as SBI PO, so what both stages really test is pace against a short and unforgiving clock.',
  },
};

export function getMockTestIntro(slug: string): MockTestIntro | undefined {
  return MOCK_TEST_INTROS[slug];
}
