// Evergreen exam-prep content, original study-skills writing, not sourced
// from any outlet and not tied to specific notification dates, so it stays
// useful regardless of when a student reads it. Swap for a real CMS/content
// pipeline later (see README); the shape below (slug, body blocks) is
// deliberately simple so that's a drop-in replacement.
//
// body is a tagged union of content blocks instead of plain paragraphs, so a
// post can mix short paragraphs with lists, tables, a pull-quote callout, and
// an original ink-palette diagram (src/components/blog/BlogDiagrams.tsx)
// instead of forcing every idea into prose. No stock photography: diagrams
// visualize the actual concept, and callouts are exact excerpts from the
// same post, not invented lines.
import type { BlogDiagramId } from '@/components/blog/BlogDiagrams';

export type BlogBlock =
  | { type: 'paragraph'; heading?: string; text: string }
  | { type: 'takeaways'; items: string[] }
  | { type: 'list'; heading?: string; ordered?: boolean; items: string[] }
  | { type: 'callout'; text: string }
  | { type: 'table'; heading?: string; headers: string[]; rows: string[][] }
  | { type: 'diagram'; id: BlogDiagramId; caption: string };

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTimeMin: number;
  publishedAt: string;
  authorName: string;
  body: BlogBlock[];
  faqs?: BlogFaq[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-to-build-a-study-timetable',
    title: 'How to Build a Study Timetable That Actually Works',
    excerpt: 'A realistic weekly timetable beats an ambitious one you abandon after three days. Here\'s how to build one you\'ll stick to.',
    category: 'Study Tips',
    readTimeMin: 5,
    publishedAt: '2026-01-10',
    authorName: 'TakeMockTest Editorial',
    body: [
      { type: 'paragraph', text: 'Most students don\'t fail because they lack a timetable. They fail because they build one that\'s impossible to follow. A study plan only works if it survives contact with a normal week: college, sleep, and the occasional bad day.' },
      { type: 'takeaways', items: [
        'Block your fixed commitments first; what\'s left is your real study budget, not an aspirational number.',
        'Put your weakest, most calculation-heavy section in your highest-energy time slot.',
        'Reserve weekly time to review mistakes and retake a mock test, not just to cover new material.',
        'Leave one lighter buffer day a week so missing a session doesn\'t mean starting over.',
      ] },
      { type: 'diagram', id: 'study-timetable-grid', caption: 'Block fixed commitments first. What\'s left after sleep, commute, and classes is your real study budget.' },
      { type: 'paragraph', heading: 'Start with your fixed hours, not your study hours', text: 'Block out these first, before anything else:' },
      { type: 'list', items: ['Sleep', 'Commute', 'Meals', 'Classes or work'] },
      { type: 'paragraph', text: 'What\'s left is your real available study time, usually far less than you\'d guess. Plan around that number, not around how many hours you wish you had.' },
      { type: 'paragraph', heading: 'Match subjects to your energy, not the clock', text: 'Put your weakest or most calculation-heavy section, often Quantitative Aptitude or Reasoning on most exams (check your own exam\'s [exam pattern page](/exams) for the exact section list), in your highest-energy slot, and lighter revision work like vocabulary or current affairs in low-energy slots such as right after lunch.' },
      { type: 'paragraph', heading: 'Build in a weekly review, not just daily study', text: 'Reserve a couple of hours each weekend purely for reviewing what you got wrong that week and retaking a mock test. This is where most of the actual score improvement happens: new content matters less than fixing repeated mistakes. [How to analyze your mock test performance](/blog/how-to-analyze-your-mock-test-performance) covers exactly what to look for once you have a result in front of you.' },
      { type: 'paragraph', heading: 'Leave slack for the bad days', text: 'A timetable with zero buffer breaks the first time you\'re sick or exhausted, and once it breaks, most people abandon it entirely. Leave one lighter day a week so missing a session doesn\'t mean starting over.' },
      { type: 'callout', text: 'A timetable with zero buffer breaks the first time you\'re sick or exhausted, and once it breaks, most people abandon it entirely.' },
      { type: 'paragraph', text: 'Once your weekly rhythm is steady, the next lever is what happens inside a single exam sitting. See [time management tips for the exam hall](/blog/time-management-during-the-exam) for how to stop losing marks to the clock rather than the questions.' },
    ],
    faqs: [
      { q: 'How many hours a day should I study for a competitive exam?', a: 'There is no fixed number that works for everyone. What matters is blocking out your fixed commitments first (sleep, classes, commute) and treating whatever is left as your real study budget, rather than picking an arbitrary target like 6 or 8 hours and forcing your day around it.' },
      { q: 'What should I do if I miss a day of my study timetable?', a: 'Skip ahead to today\'s slot instead of trying to make up the missed day on top of it. A timetable with one lighter buffer day a week is built to absorb this, and cramming two days into one usually causes the next missed day too.' },
      { q: 'Should I study my weakest subject first thing in the morning or later in the day?', a: 'Put it in your highest-energy slot, whenever that actually is for you. For most students that is earlier in the day, but if you are sharper in the evening, your weakest, most calculation-heavy section belongs there instead.' },
      { q: 'How often should I take a full mock test while following a study timetable?', a: 'Weekly is a reasonable starting cadence. Pair it with a dedicated review session the same weekend so you are checking whether your section-wise accuracy is actually improving, not just collecting scores.' },
    ],
  },
  {
    slug: 'common-ssc-cgl-preparation-mistakes',
    title: '5 Common Mistakes to Avoid in SSC CGL Preparation',
    excerpt: 'From over-collecting study material to skipping mock tests until the last month, the same avoidable mistakes show up year after year.',
    category: 'Exam Strategy',
    readTimeMin: 6,
    publishedAt: '2026-01-17',
    authorName: 'TakeMockTest Editorial',
    body: [
      { type: 'paragraph', text: 'SSC CGL preparation mistakes tend to repeat across batches, not because the exam changes, but because the same habits keep tripping up new aspirants. Here are five worth checking yourself against.' },
      { type: 'list', ordered: true, heading: 'The five mistakes at a glance', items: [
        'Collecting too many books, finishing none',
        'Treating General Awareness as unlearnable',
        'Delaying mock tests until the last month',
        'Ignoring the negative marking math',
        'Not reviewing wrong answers',
      ] },
      { type: 'paragraph', heading: '1. Collecting too many books, finishing none', text: 'Having five reference books for Quantitative Aptitude feels productive but usually means shallow coverage of all of them instead of mastery of one. Pick one primary source per section and use everything else only for practice questions.' },
      { type: 'paragraph', heading: '2. Treating General Awareness as unlearnable', text: 'It\'s tempting to write off GA as "too random to prepare for," but static portions (geography, polity, history) are entirely learnable with spaced repetition, and they\'re a much better return on time than obscure current-affairs trivia.' },
      { type: 'paragraph', heading: '3. Delaying mock tests until the last month', text: 'Mock tests aren\'t just a final check: they\'re how you learn to manage time under pressure and find your actual weak areas, as opposed to the ones you assume are weak. Start well before you feel "ready" with the [SSC CGL Tier 1 mock tests](/ssc-cgl/mock-test) on this site.' },
      { type: 'paragraph', heading: '4. Ignoring the negative marking math', text: 'Guessing on a question you can\'t narrow down at all is a losing bet under most SSC negative marking schemes. Know your exam\'s exact deduction from the [SSC CGL exam pattern page](/ssc-cgl/exam-pattern), only guess once you\'ve eliminated at least one or two options, and see [understanding negative marking](/blog/understanding-negative-marking) for the full math behind that call.' },
      { type: 'callout', text: 'Guessing on a question you can\'t narrow down at all is a losing bet under most SSC negative marking schemes.' },
      { type: 'paragraph', heading: '5. Not reviewing wrong answers', text: 'Attempting test after test without going back through the mistakes is close to practicing the same errors repeatedly. Every mock test result on this site includes the correct answer and a short explanation for exactly this reason: see [how to analyze your mock test performance](/blog/how-to-analyze-your-mock-test-performance) for what to actually look at once you have a result.' },
      { type: 'paragraph', text: 'A study timetable that leaves room for weekly mock-test review is the easiest way to catch most of these five before they cost real marks. See [how to build a study timetable that actually works](/blog/how-to-build-a-study-timetable) if yours doesn\'t already.' },
    ],
    faqs: [
      { q: 'How many reference books do I really need for SSC CGL?', a: 'One primary book per section is usually enough. Buying more books tends to spread your time thin across shallow first passes instead of building real mastery of one source, use extra material only for additional practice questions.' },
      { q: 'Is General Awareness worth preparing for in SSC CGL, or is it too random?', a: 'The static portions, geography, polity, and history, are entirely learnable with spaced repetition and give a better return on study time than chasing obscure current-affairs trivia, which is genuinely harder to predict.' },
      { q: 'When should I start taking SSC CGL mock tests?', a: 'Well before you feel fully ready. Mock tests are how you learn to manage time under pressure and find your actual weak areas, not just a final check once preparation is complete.' },
      { q: 'Should I guess on SSC CGL questions I am unsure about?', a: 'Only once you have eliminated at least one or two of the four options. A completely blind guess is close to break-even or slightly negative under most SSC negative-marking ratios, so it is usually better left unattempted.' },
    ],
  },
  {
    slug: 'understanding-negative-marking',
    title: 'Understanding Negative Marking: A Complete Guide',
    excerpt: 'Negative marking changes the optimal strategy for guessing. Here\'s the math behind when a guess is worth it, and when it isn\'t.',
    category: 'Exam Strategy',
    readTimeMin: 4,
    publishedAt: '2026-01-24',
    authorName: 'TakeMockTest Editorial',
    body: [
      { type: 'paragraph', text: 'Negative marking means an incorrect answer costs you marks, not just a missed opportunity. So the right strategy isn\'t "always attempt everything" or "never guess," it\'s somewhere in between, and the math is simple once you see it.' },
      { type: 'takeaways', items: [
        'Unattempted questions always score zero; only a wrong answer costs you marks.',
        'Once you can eliminate even one of four options, a guess usually has better expected value than leaving it blank.',
        'A pure blind guess with all four options open is usually close to break-even or slightly negative.',
      ] },
      { type: 'diagram', id: 'negative-marking-math', caption: 'Where a correct answer, a wrong answer, and an unattempted question land under a 0.25 negative-marking ratio.' },
      { type: 'paragraph', heading: 'How it works', text: 'Each exam sets its own deduction, most commonly 0.25 marks off for a wrong answer worth 1 mark, though some exams use 0.5 or a different ratio entirely. Check the exact figure on your exam\'s [exam pattern page](/exams) rather than assuming it matches a different exam you\'ve prepared for. Unattempted questions score zero either way, so the only real risk is answering incorrectly.' },
      { type: 'table', heading: 'Common negative-marking ratios on this site', headers: ['Deduction per wrong answer', 'Typical example'], rows: [
        ['0.25 marks (1-mark questions)', 'Most SSC and banking Prelims exams'],
        ['1/3 mark (1-mark questions)', 'Most RRB exams'],
        ['0.5 marks', 'A smaller number of exams'],
        ['None', 'e.g. SSC MTS Session 1, LIC AAO Prelims'],
      ] },
      { type: 'paragraph', heading: 'When a guess is worth it', text: 'If you can confidently eliminate even one of four options, a random guess among the rest has better expected value than leaving it blank, for most standard negative-marking ratios. A pure blind guess with all four options still open is usually close to break-even or slightly negative, so it\'s better left unattempted.' },
      { type: 'paragraph', heading: 'Why this matters more than most students think', text: 'A handful of careless guesses can quietly erase the marks gained from your strongest section. Treat "should I guess this?" as a real decision each time, not a reflex, and review your mock test results specifically for wrong answers on questions you weren\'t sure about; [how to analyze your mock test performance](/blog/how-to-analyze-your-mock-test-performance) covers how to separate those from genuine knowledge gaps.' },
      { type: 'callout', text: 'A handful of careless guesses can quietly erase the marks gained from your strongest section.' },
      { type: 'paragraph', text: 'This is one of [5 common mistakes in SSC CGL preparation](/blog/common-ssc-cgl-preparation-mistakes) worth checking yourself against directly, since ignoring the exact deduction on your exam is a surprisingly frequent, entirely avoidable one.' },
    ],
    faqs: [
      { q: 'How much does a wrong answer typically cost in negative marking?', a: 'It varies by exam, but 0.25 marks off for a question worth 1 mark is the most common ratio across SSC and banking exams on this site. Some exams use 0.5, and a few use no negative marking at all, so always check the specific exam\'s pattern page rather than assuming.' },
      { q: 'Should I ever leave a question completely unattempted?', a: 'Yes, when you cannot eliminate any of the options. A pure blind guess across all four choices is usually close to break-even or slightly negative under standard negative-marking ratios, so it is better left blank than guessed at random.' },
      { q: 'Is it worth guessing if I can eliminate one wrong option?', a: 'Generally yes. Once you have ruled out even one of four options, a random guess among the remaining three has better expected value than leaving the question blank, for most standard negative-marking ratios.' },
      { q: 'Do unattempted questions lose marks under negative marking?', a: 'No. Unattempted questions always score zero, the same as they would under any marking scheme. The penalty applies only to answers you get wrong, which is exactly why guessing needs to be a deliberate decision rather than a reflex.' },
    ],
  },
  {
    slug: 'time-management-during-the-exam',
    title: 'Time Management Tips for the Exam Hall',
    excerpt: 'The clock is often the real opponent, not the questions. A few simple rules keep you from running out of time on easy marks.',
    category: 'Study Tips',
    readTimeMin: 5,
    publishedAt: '2026-01-31',
    authorName: 'TakeMockTest Editorial',
    body: [
      { type: 'paragraph', text: 'It\'s common to know the material well and still lose marks purely to poor time allocation: spending too long on one tough question while easier ones go unanswered. A little structure fixes most of this.' },
      { type: 'takeaways', items: [
        'On your first pass, only answer what you can solve in 30 to 40 seconds; mark the rest and move on.',
        'Check your progress against the clock at section-level checkpoints, not just at the end.',
        'In the final minutes, prioritize unattempted questions over ones you\'ve already sunk time into.',
        'Practice under real time limits regularly; untimed practice doesn\'t build exam-day pacing.',
      ] },
      { type: 'diagram', id: 'time-budget-timeline', caption: 'Divide your time by section and check progress at each checkpoint, not just at the end.' },
      { type: 'paragraph', heading: 'Do a fast first pass', text: 'On your first pass through a section, answer only what you can solve in under 30 to 40 seconds. Mark anything slower for review and move on immediately. Don\'t let one question eat the time budget for five others.' },
      { type: 'paragraph', heading: 'Set section-level time checkpoints', text: 'Divide the total time by section based on the number of questions and check your progress at each checkpoint, not just at the end. If you\'re behind by the halfway mark, that\'s your signal to speed up, not a surprise at the last five minutes. Whether you get to move that time around at all depends on your exam: see [sectional lock vs composite timer](/blog/sectional-lock-vs-composite-timer) if you\'re not sure which kind yours is.' },
      { type: 'callout', text: 'An unattempted easy question is more recoverable than a hard one you\'ve already sunk time into.' },
      { type: 'paragraph', heading: 'Save the last few minutes for unattempted, not unfinished', text: 'In the final stretch, prioritize questions you haven\'t looked at yet over ones you\'ve already spent three minutes stuck on. An unattempted easy question is more recoverable than a hard one you\'ve already sunk time into.' },
      { type: 'paragraph', heading: 'Practice against the clock, not just for accuracy', text: 'Untimed practice builds knowledge but not exam-day pacing. Take [full-length mock tests](/exams) under real time limits regularly so the pacing becomes automatic rather than something you\'re calculating mid-exam, then check your unattempted count in the results: [how to analyze your mock test performance](/blog/how-to-analyze-your-mock-test-performance) explains what that number is actually telling you.' },
    ],
    faqs: [
      { q: 'How long should I spend on one question before moving on?', a: 'Roughly 30 to 40 seconds on your first pass through a section. If it is taking longer than that, mark it for review and move on immediately rather than letting one question eat the time budget meant for several easier ones.' },
      { q: 'Can I move leftover time from one section to another during the exam?', a: 'It depends on your exam. Some use a sectional lock where each section gets a fixed window and unused time never carries over, while others give one combined timer for the whole paper that you can split however you like. Check which kind your exam uses before assuming.' },
      { q: 'What should I do in the last few minutes of a timed section?', a: 'Prioritize questions you have not looked at yet over ones you have already spent several minutes stuck on. An unattempted easy question is more recoverable in a short window than a hard one you have already sunk time into.' },
      { q: 'Does untimed practice help with exam-day time management?', a: 'It builds knowledge but not pacing. Untimed practice will not teach you how a real countdown feels, so regular full-length mock tests under actual time limits are what actually make the pacing automatic.' },
    ],
  },
  {
    slug: 'how-to-analyze-your-mock-test-performance',
    title: 'How to Analyze Your Mock Test Performance',
    excerpt: 'A score alone tells you almost nothing useful. Here\'s what to actually look at after every mock test.',
    category: 'Mock Tests',
    readTimeMin: 6,
    publishedAt: '2026-02-07',
    authorName: 'TakeMockTest Editorial',
    body: [
      { type: 'paragraph', text: 'It\'s easy to check a mock test score, feel a brief reaction, and move on to the next one. That skips the part that actually improves your next attempt: understanding why each mark was lost.' },
      { type: 'takeaways', items: [
        'Separate knowledge gaps from careless errors; they need completely different fixes.',
        'Check section-wise accuracy, not just the total score.',
        'A high unattempted count usually points to a pacing problem, not a knowledge problem.',
        'Look for a trend across several mock tests, not a single result.',
      ] },
      { type: 'paragraph', heading: 'Separate knowledge gaps from careless errors', text: 'For every wrong answer, ask whether you didn\'t know the concept, or knew it but made a silly mistake under time pressure. These need completely different fixes: one needs more study, the other needs slower, more careful reading.' },
      { type: 'diagram', id: 'section-accuracy-bars', caption: 'Two students can post the same total score with very different section-wise breakdowns.' },
      { type: 'paragraph', heading: 'Look at section-wise accuracy, not just total score', text: 'Two students can score the same overall total with very different section breakdowns. Your [results page](/results) on this site breaks every attempt down by section specifically so you can see which one is actually dragging your score down.' },
      { type: 'paragraph', heading: 'Track your unattempted count over time', text: 'A high unattempted count usually means a pacing problem, not a knowledge problem: you\'re running out of time, not out of answers. If that number isn\'t shrinking test over test, revisit your [exam-hall time management](/blog/time-management-during-the-exam) approach before adding more study material.' },
      { type: 'callout', text: 'Improvement shows up as a trend across several mock tests, not a single lucky attempt.' },
      { type: 'paragraph', heading: 'Revisit the same weak section in your next test', text: 'Improvement shows up as a trend across several mock tests, not a single lucky attempt. [Retake sectional tests](/exams) in a section you scored poorly on and confirm the accuracy is actually moving before assuming you\'ve fixed the gap.' },
      { type: 'paragraph', text: 'This kind of review works best as a fixed weekly habit rather than something you do only when you remember to. See [how to build a study timetable that actually works](/blog/how-to-build-a-study-timetable) for where to slot it in.' },
    ],
    faqs: [
      { q: 'What should I look at first after a mock test besides my score?', a: 'Section-wise accuracy. The same total score can hide very different weak areas, so break the result down by section before deciding what to study next, not just the overall number.' },
      { q: 'How do I know if a wrong answer was a knowledge gap or a careless mistake?', a: 'Ask whether you did not know the concept at all, or knew it but slipped under time pressure. These need different fixes: a genuine gap needs more study, a careless error needs slower, more careful reading, not more content.' },
      { q: 'Does a high unattempted count mean I need to study more?', a: 'Usually not. A high unattempted count is more often a pacing problem than a knowledge problem, you are running out of time rather than running out of answers, so the fix is time management practice, not additional material.' },
      { q: 'How many mock tests before I can tell if I am actually improving?', a: 'Look for a trend across several attempts in the same section rather than judging from one test. A single good or bad score can be luck; consistent movement in section-wise accuracy over multiple tests is the real signal.' },
    ],
  },
  {
    slug: 'ibps-po-vs-ssc-cgl-which-exam-suits-you',
    title: 'IBPS PO vs SSC CGL: Which Exam Suits You?',
    excerpt: 'Both are among the most popular competitive exams in India, but they reward different strengths. Here\'s how to think about the choice.',
    category: 'Exam Strategy',
    readTimeMin: 7,
    publishedAt: '2026-02-14',
    authorName: 'TakeMockTest Editorial',
    body: [
      { type: 'paragraph', text: 'Many aspirants prepare for both IBPS PO and SSC CGL at once, and the overlap in subjects (Quantitative Aptitude, Reasoning, English) makes that reasonable. But if you have to prioritize one, it helps to know how they actually differ.' },
      { type: 'table', heading: 'SSC CGL Tier 1 vs IBPS PO Prelims at a glance', headers: ['', 'SSC CGL Tier 1', 'IBPS PO Prelims'], rows: [
        ['General Awareness', 'Tested', 'Not tested'],
        ['Pacing', 'Comparatively forgiving', 'Tighter, sectional lock'],
        ['Interview stage', 'No, for most posts', 'Yes'],
        ['Leads to', 'Central government departments', 'Banking officer role'],
      ] },
      { type: 'paragraph', heading: 'Exam structure', text: '[SSC CGL Tier 1](/ssc-cgl/exam-pattern) tests General Awareness alongside Quant, English, and Reasoning, rewarding broad static and current-affairs knowledge. [IBPS PO Prelims](/ibps-po/exam-pattern) drops General Awareness from its core sections in favor of deeper Quant and Reasoning, and adds an interview stage after the written exams.' },
      { type: 'paragraph', heading: 'Pace and pressure', text: 'Banking exams like IBPS PO are generally known for tighter per-question time limits and sectional timing, which rewards speed and accuracy under pressure. SSC CGL\'s pacing is comparatively more forgiving, though still competitive. See [sectional lock vs composite timer](/blog/sectional-lock-vs-composite-timer) for exactly what that timing difference feels like in the exam hall.' },
      { type: 'paragraph', heading: 'What the role looks like afterward', text: 'SSC CGL opens roles across various central government departments with a wide range of job profiles. IBPS PO leads specifically into a banking officer role, with more customer-facing and target-driven day-to-day work.' },
      { type: 'paragraph', heading: 'A practical way to decide', text: 'If General Awareness is a genuine strength for you, that tilts toward SSC CGL. If you\'re faster and more consistent under strict timing in Quant and Reasoning, IBPS PO plays to that. Either way, the overlapping sections mean focused practice for one exam can still build skills used in the other. Always confirm the current official pattern before comparing complete papers: try a [SSC CGL mock test](/ssc-cgl/mock-test) and an [IBPS PO mock test](/ibps-po/mock-test) back to back if you\'re still deciding.' },
      { type: 'callout', text: 'If General Awareness is a genuine strength for you, that tilts toward SSC CGL.' },
      { type: 'paragraph', text: 'For the wider decision beyond just these two, see [SSC vs Banking vs Railways](/blog/ssc-vs-banking-vs-railways-choosing-your-path), which covers how the exam mechanics differ across all three tracks, not just SSC and IBPS.' },
    ],
    faqs: [
      { q: 'Does IBPS PO test General Awareness like SSC CGL does?', a: 'No. IBPS PO Prelims drops General Awareness from its core sections in favor of deeper Quantitative Aptitude and Reasoning, while SSC CGL Tier 1 tests General Awareness alongside those same two sections plus English.' },
      { q: 'Which is harder to time, IBPS PO or SSC CGL?', a: 'IBPS PO is generally known for tighter per-question time limits and sectional timing, which rewards speed and accuracy under pressure more than SSC CGL does, though SSC CGL is still competitive on pace.' },
      { q: 'Can I prepare for both IBPS PO and SSC CGL at the same time?', a: 'Yes, and many aspirants do. The overlapping subjects, Quantitative Aptitude, Reasoning, and English, mean focused practice for one exam builds skills that carry over to the other, even though the exact section mix and timing differ.' },
      { q: 'Does SSC CGL or IBPS PO include an interview stage?', a: 'IBPS PO does: it adds an interview stage after the written exams. SSC CGL does not use an interview for most posts, its selection is based on the written stages and document verification.' },
    ],
  },
  {
    slug: 'sectional-lock-vs-composite-timer',
    title: 'Sectional Lock vs Composite Timer, Explained',
    excerpt: 'Some exams lock you into each section with its own clock. Others give one combined timer for the whole paper, and that changes how you should practice.',
    category: 'Exam Strategy',
    readTimeMin: 6,
    publishedAt: '2026-08-06',
    authorName: 'TakeMockTest Editorial',
    body: [
      { type: 'paragraph', text: 'Roughly nine of the exams on this site lock you into each section with its own individual clock, while about twelve hand you one combined timer for the entire paper and let you move between sections however you like. Mixing up which one your exam uses (and practicing for the wrong one) is a common, avoidable mistake.' },
      { type: 'takeaways', items: [
        'Sectional lock: each section has its own fixed window, and unused time never carries over.',
        'Composite timer: one clock for the whole paper, split however you like.',
        'Practice sectional-lock exams under a real cutoff, and composite-timer exams by deciding time splits in real time.',
        'A few exams (like SSC MTS) use neither pattern, always check the specific exam\'s pattern page.',
      ] },
      { type: 'diagram', id: 'sectional-vs-composite', caption: 'Sectional lock splits the clock into fixed windows; a composite timer gives you one clock to split yourself.' },
      { type: 'paragraph', heading: 'What sectional lock actually means', text: 'Under sectional lock, each section gets a fixed window and once it expires you\'re moved on automatically, whether you\'ve finished or not: unused time in one section never carries over to the next. [SBI Clerk Prelims](/sbi-clerk/exam-pattern) gives you exactly 20 minutes per section this way, and [RBI Grade B Phase I](/rbi-grade-b/exam-pattern) splits its four sections into separately timed 25/25/25/45-minute windows. If you\'re strong in one section and weak in another, sectional lock means you can\'t borrow time to compensate.' },
      { type: 'paragraph', heading: 'What a composite timer means', text: 'A composite timer gives you one clock for every section combined, and you decide how to split it. [NABARD Grade A Phase I](/nabard-grade-a/exam-pattern) runs a single 120-minute timer across all eight of its sections, and [SIDBI Grade A & B Phase I](/sidbi-grade-a-b/exam-pattern) does the same across seven: you can answer every question in your strongest section first, then spend whatever\'s left on the rest.' },
      { type: 'table', heading: 'Which pattern common exams use', headers: ['Exam', 'Timer type'], rows: [
        ['SBI Clerk Prelims', 'Sectional lock, 20 min per section'],
        ['RBI Grade B Phase I', 'Sectional lock, 25/25/25/45 min'],
        ['SSC CGL Tier 1', 'Sectional lock, 15 min per subject'],
        ['NABARD Grade A Phase I', 'Composite, 120 min across 8 sections'],
        ['SIDBI Grade A & B Phase I', 'Composite, 120 min across 7 sections'],
        ['SSC CHSL Tier 1', 'Composite, single 60 min timer'],
      ] },
      { type: 'paragraph', heading: 'Why this changes how you should practice', text: 'Practicing sectional-lock exams under an untimed or freely-navigable mock teaches you the wrong instinct: you need to feel the sudden cutoff, not just the total time pressure. Composite-timer exams reward the opposite skill: deciding, in real time, how many minutes a section is actually worth to you. Take sectional tests for the first kind and full mocks for the second, both are available on every exam\'s mock-test page on this site.' },
      { type: 'paragraph', heading: 'A third pattern worth knowing', text: '[SSC MTS & Havaldar](/ssc-mts/exam-pattern) does neither: it splits its CBT into two mandatory 45-minute sessions on the same day, with different negative-marking rules in each session. Always check the specific exam\'s pattern page rather than assuming; even within one recruiting body, the rules can change from one exam to the next (SSC CGL Tier 1 itself uses 15-minute-per-subject sectional locking, unlike SSC CHSL\'s single 60-minute composite timer).' },
      { type: 'callout', text: 'Whichever pattern your exam uses, reviewing where your time actually went afterward matters more than guessing beforehand.' },
      { type: 'paragraph', heading: 'One habit that works for both', text: 'Whichever pattern your exam uses, reviewing where your time actually went afterward matters more than guessing beforehand. See [how to analyze your mock test performance](/blog/how-to-analyze-your-mock-test-performance) for what to look at once you\'ve got a result to study, and keep [negative marking](/blog/understanding-negative-marking) in mind: it changes the guessing math slightly differently under a hard section cutoff than under a flexible composite clock.' },
    ],
    faqs: [
      { q: 'What is sectional lock in a competitive exam?', a: 'Each section gets its own fixed time window, and once it expires you move on automatically whether you have finished or not. Unused time in one section never carries over to another, unlike a combined timer.' },
      { q: 'What is a composite timer?', a: 'One single clock covers every section of the paper combined, and you decide how to split your time across sections, including answering your strongest section first and spending whatever is left on the rest.' },
      { q: 'Which exams on this site use sectional lock?', a: 'SBI Clerk Prelims (20 minutes per section) and RBI Grade B Phase I (25/25/25/45-minute windows) are two examples. SSC CGL Tier 1 also locks 15 minutes per subject, unlike SSC CHSL, which uses one combined timer.' },
      { q: 'How should I practice differently for sectional lock versus a composite timer?', a: 'Take sectional tests to feel the sudden cutoff you will face in a locked exam, and take full mocks for composite-timer exams to practice deciding, in real time, how many minutes each section is actually worth to you.' },
    ],
  },
  {
    slug: 'qualifying-vs-merit-sections-banking-exams',
    title: 'Qualifying vs Merit Sections in Bank Exams',
    excerpt: 'Some banking exams score every section toward your rank. A few wall off certain sections so only some marks actually count: here\'s how to tell which is which.',
    category: 'Exam Strategy',
    readTimeMin: 5,
    publishedAt: '2026-08-06',
    authorName: 'TakeMockTest Editorial',
    body: [
      { type: 'paragraph', text: 'It\'s common knowledge that Prelims is usually "qualifying" and Mains decides the real merit list. [SBI PO Prelims](/sbi-po/exam-pattern), for instance, works exactly this way. Less well known is that a few exams split qualifying and merit *within a single paper*, and getting this wrong wastes hours of preparation on sections that were never going to move your rank.' },
      { type: 'takeaways', items: [
        'A qualifying stage or section needs its own cutoff cleared, but its marks don\'t carry into your final ranking.',
        'NABARD Grade A and SIDBI Grade A & B both split qualifying and merit sections inside one single-timer paper.',
        'Once you\'re comfortably clearing a qualifying cutoff, extra hours there return less than the same hours in a merit section.',
      ] },
      { type: 'diagram', id: 'qualifying-merit-funnel', caption: 'Qualifying-only sections need a cutoff but stop there; merit sections carry every mark into the final ranking.' },
      { type: 'paragraph', heading: 'What "qualifying" means at the stage level', text: 'A qualifying stage has its own cutoff you must clear to advance, but the marks themselves don\'t carry forward into your final ranking. Only the next stage\'s marks do. This is the pattern most banking Prelims exams follow, and it\'s the one most students already understand.' },
      { type: 'paragraph', heading: 'The less common pattern: qualifying sections inside one paper', text: '[NABARD Grade A Phase I](/nabard-grade-a/exam-pattern) has eight sections, but only three of them (General Awareness, Economic and Social Issues, and Agriculture and Rural Development) form the merit section that decides Mains shortlisting; the other five are qualifying-only. [SIDBI Grade A & B Phase I](/sidbi-grade-a-b/exam-pattern) does something similar: four of its seven sections are qualifying-only, while General Awareness, MSMEs Policy/Finance/Management, and the Stream Specific Test form a 100-of-200-mark merit section. In both cases this happens inside one single-timer paper, not across separate stages.' },
      { type: 'callout', text: 'Once you\'re comfortably clearing the qualifying cutoff in a qualifying-only section, additional hours there have a shrinking return.' },
      { type: 'paragraph', heading: 'Why this should change your study split', text: 'Once you\'re comfortably clearing the qualifying cutoff in a qualifying-only section, additional hours there have a shrinking return: those marks stop mattering the moment the cutoff is met. Extra study time is worth more in the merit section, since every additional mark there moves your actual rank. This is the single most actionable thing this article can tell you if your exam uses this pattern.' },
      { type: 'paragraph', heading: 'How to check which pattern your exam uses', text: 'Every exam\'s pattern page on this site states plainly whether a section is qualifying-only or counts toward merit, sourced from the official notification. Don\'t assume from a similar exam\'s structure: RBI Grade B and SEBI Grade A, for example, don\'t split their Phase I this way at all, even though they\'re in the same broad banking-regulator family as NABARD and SIDBI.' },
      { type: 'paragraph', text: 'Once you\'ve taken a full mock under the real pattern, [review it section by section](/blog/how-to-analyze-your-mock-test-performance) rather than just checking the total score: that\'s the only way to know whether your qualifying-section time investment has already paid off.' },
    ],
    faqs: [
      { q: 'What does "qualifying" mean in a banking exam stage?', a: 'A qualifying stage has its own cutoff you must clear to advance, but its marks do not carry forward into your final ranking. Only the next stage\'s marks do, this is the pattern most banking Prelims exams follow.' },
      { q: 'Can a single exam paper have both qualifying and merit sections?', a: 'Yes. NABARD Grade A Phase I and SIDBI Grade A & B Phase I both wall off several sections as qualifying-only within one single-timer paper, while a smaller set of sections form the merit section that decides ranking.' },
      { q: 'Should I keep studying a qualifying-only section once I am clearing its cutoff?', a: 'Additional hours there have a shrinking return once you are comfortably clearing the cutoff, since those marks stop mattering. Extra study time is worth more in the merit section, where every mark moves your actual rank.' },
      { q: 'How do I know if my exam splits qualifying and merit sections within one paper?', a: 'Check the exam\'s pattern page on this site, which states plainly whether each section is qualifying-only or counts toward merit, sourced from the official notification, rather than assuming based on a similar exam.' },
    ],
  },
  {
    slug: 'beginners-guide-to-banking-exams-in-india',
    title: 'A Beginner\'s Guide to Banking Exams in India',
    excerpt: 'IBPS, SBI, and RBI get thrown around like they\'re interchangeable. They recruit differently, for different roles: here\'s an actual map of how they fit together.',
    category: 'Exam Guides',
    readTimeMin: 8,
    publishedAt: '2026-08-06',
    authorName: 'TakeMockTest Editorial',
    body: [
      { type: 'paragraph', text: 'If you\'ve searched "best bank exam for beginners," you\'ve probably seen IBPS, SBI, and RBI mentioned as if picking between them is a single decision. It isn\'t: they sit at different levels, recruit differently, and (once you go past the clerk/PO tier) test genuinely different subject knowledge. This site currently hosts mock tests for twelve banking-family exams; here\'s how they actually fit together.' },
      { type: 'takeaways', items: [
        'IBPS runs a common exam across multiple public sector banks; SBI recruits separately for itself.',
        'A regional rural bank tier and a specialist officer tier sit alongside the standard clerk/PO track.',
        'RBI Grade B, NABARD, SEBI, and SIDBI are direct-recruit officer roles a level above clerk/PO.',
        'Overlapping subjects mean practice for one exam carries over to the others, so picking "the wrong one" first rarely wastes effort.',
      ] },
      { type: 'diagram', id: 'banking-tier-ladder', caption: 'Four broad tiers, from clerk and PO entry level up to the central bank and regulator Grade A/B officer roles.' },
      { type: 'paragraph', heading: 'The clerk and PO tier: where most beginners start', text: 'IBPS doesn\'t recruit for one bank: it runs a common exam and allots selected candidates across multiple public sector banks based on merit and preference. [IBPS PO](/ibps-po/mock-test) targets the officer track, [IBPS Clerk](/ibps-clerk/mock-test) the clerical track. SBI runs its own separate recruitment instead of going through IBPS: [SBI PO](/sbi-po/mock-test) and [SBI Clerk](/sbi-clerk/mock-test) are SBI-specific, generally with a heavier workload and faster growth than the IBPS-allotted equivalent.' },
      { type: 'paragraph', heading: 'The regional rural bank tier', text: 'IBPS also runs a separate common exam for Regional Rural Banks: [IBPS RRB Officer Scale I](/ibps-rrb-officer-scale-1/mock-test) and [IBPS RRB Office Assistant](/ibps-rrb-office-assistant/mock-test), with a composite, no-sectional-lock timer that differs from the standard IBPS PO/Clerk Prelims pattern.' },
      { type: 'paragraph', heading: 'The specialist tier', text: '[IBPS SO](/ibps-so/mock-test) recruits directly into specialist officer roles (IT, Agriculture, HR, Marketing) rather than general banking. It\'s a narrower path, worth knowing about specifically if your background is already in one of those fields rather than commerce.' },
      { type: 'paragraph', heading: 'The central bank and regulator tier: the next level up', text: 'This is where "IBPS vs SBI vs RBI" oversimplifies things. [RBI Assistant](/rbi-assistant/mock-test) is RBI\'s clerical-level exam, while [RBI Grade B](/rbi-grade-b/mock-test) is a direct-recruit officer role focused on monetary policy and banking regulation. Sitting alongside RBI Grade B are three more Grade-A officer exams most beginners don\'t hear about until later: [NABARD Grade A](/nabard-grade-a/mock-test) (rural development and agriculture finance), [SEBI Grade A](/sebi-grade-a/mock-test) (securities market regulation), and [SIDBI Grade A & B](/sidbi-grade-a-b/mock-test) (MSME and small-industry finance). See our [full comparison of these four](/blog/rbi-grade-b-vs-nabard-vs-sebi-vs-sidbi) if that tier interests you.' },
      { type: 'paragraph', heading: 'A practical way to start', text: 'The overlapping subjects (Reasoning, Quantitative Aptitude, English) mean focused practice for any one of these exams builds skills that carry over to the others, so picking "the wrong one" first rarely wastes your effort. What\'s worth getting right early is understanding [how qualifying and merit sections work](/blog/qualifying-vs-merit-sections-banking-exams) for whichever exam you land on, since a few of these have a genuinely different scoring structure than the standard Prelims-then-Mains pattern.' },
    ],
    faqs: [
      { q: 'What is the difference between IBPS and SBI recruitment?', a: 'IBPS runs a common exam and allots selected candidates across multiple public sector banks based on merit and preference, while SBI runs its own separate recruitment specific to SBI, generally with a heavier workload and faster growth than the IBPS-allotted equivalent.' },
      { q: 'Which banking exam should a beginner start with?', a: 'The clerk and PO tier, IBPS PO, IBPS Clerk, SBI PO, and SBI Clerk, is where most beginners start, since the overlapping subjects mean focused practice for any one of these builds skills that carry over to the others.' },
      { q: 'What is the difference between RBI Assistant and RBI Grade B?', a: 'RBI Assistant is RBI\'s clerical-level exam, while RBI Grade B is a direct-recruit officer role focused on monetary policy and banking regulation, a significantly different level and syllabus.' },
      { q: 'What are the Grade A officer exams beyond RBI Grade B?', a: 'NABARD Grade A (rural development and agriculture finance), SEBI Grade A (securities market regulation), and SIDBI Grade A & B (MSME and small-industry finance) are three more Grade-A officer exams most beginners do not hear about until later.' },
    ],
  },
  {
    slug: 'ssc-vs-banking-vs-railways-choosing-your-path',
    title: 'SSC vs Banking vs Railways: Which to Choose?',
    excerpt: 'These three don\'t just lead to different jobs: they test you differently, too. Exam mechanics matter as much as the career outcome when you\'re choosing.',
    category: 'Exam Guides',
    readTimeMin: 7,
    publishedAt: '2026-08-06',
    authorName: 'TakeMockTest Editorial',
    body: [
      { type: 'paragraph', text: 'SSC, Banking, and Railways are the three most common entry points into a government career in India, and most comparisons stop at job perks: pay, postings, travel benefits. Less discussed is that the exams themselves test you in genuinely different ways, and that difference is worth weighing before you commit months of preparation to one.' },
      { type: 'table', heading: 'SSC vs Banking vs Railways at a glance', headers: ['', 'Typical timer', 'Tests General Awareness?'], rows: [
        ['SSC CGL Tier 1', 'Sectional lock, 15 min per subject', 'Yes'],
        ['SSC CHSL', 'Composite, single 60 min timer', 'Yes'],
        ['Banking Prelims (IBPS PO, SBI PO, RBI Assistant)', 'Sectional lock, ~20 min per section', 'Usually not'],
        ['RRB NTPC / Group D / JE', 'Composite, single 90 min timer', 'Yes'],
      ] },
      { type: 'paragraph', heading: 'SSC: broad postings, tight sectional timing', text: '[SSC CGL Tier 1](/ssc-cgl/exam-pattern) locks you into 15 minutes per subject across four sections (General Intelligence and Reasoning, General Awareness, Quantitative Aptitude, and English Comprehension) and opens roles across central government departments from Income Tax to Customs to CBI. [SSC CHSL](/ssc-chsl/mock-test), by contrast, uses a single 60-minute composite timer for the same kind of subject spread, so even within SSC the pattern isn\'t consistent across exams.' },
      { type: 'paragraph', heading: 'Banking: numbers, speed, and sectional lock', text: 'Most public-sector bank Prelims papers use a hard sectional lock: [IBPS PO](/ibps-po/mock-test), [SBI PO](/sbi-po/mock-test), and [RBI Assistant](/rbi-assistant/mock-test) all give you roughly 20 minutes per section with no borrowing between them. Banking exams generally reward speed and accuracy under pressure more than broad general knowledge: SSC CGL tests General Awareness alongside its other sections, while most Banking Prelims papers drop it entirely in favor of deeper Quant and Reasoning.' },
      { type: 'paragraph', heading: 'Railways: composite timers, the highest applicant volume', text: 'RRB exams tend to use a single combined timer instead of sectional lock: [RRB NTPC](/rrb-ntpc/mock-test) gives 90 minutes across three sections, [RRB Group D](/rrb-group-d/mock-test) gives 90 minutes across four, and [RRB Junior Engineer](/rrb-je/mock-test) does the same. Railway recruitment also draws some of the largest applicant numbers of any government exam family in India, which affects how competitive a given cutoff turns out to be.' },
      { type: 'callout', text: 'Railway recruitment draws some of the largest applicant numbers of any government exam family in India.' },
      { type: 'paragraph', heading: 'A practical way to decide', text: 'If tight per-section deadlines suit how you work, Banking\'s sectional-lock pattern plays to that; if you\'d rather manage one combined clock across a whole paper, Railways\' composite-timer exams and SSC CHSL are a better match for that instinct than SSC CGL is. See [sectional lock vs composite timer](/blog/sectional-lock-vs-composite-timer) for the full mechanics either way. You can also [browse the full government exam catalog](/exams/government-jobs) to see every exam in each family side by side before deciding.' },
    ],
    faqs: [
      { q: 'Which is easier to time, SSC, Banking, or Railways exams?', a: 'It depends on the specific exam within each family. Most Banking Prelims papers and SSC CGL Tier 1 use a hard sectional lock with roughly 20 and 15 minutes per section respectively, while most Railways exams and SSC CHSL use a single composite timer instead.' },
      { q: 'Does SSC CGL test General Awareness like most exams in this comparison?', a: 'Yes, SSC CGL tests General Awareness alongside its other sections, while most Banking Prelims papers drop it entirely in favor of deeper Quantitative Aptitude and Reasoning.' },
      { q: 'Which exam family gets the most applicants?', a: 'Railway recruitment draws some of the largest applicant numbers of any government exam family in India, which affects how competitive a given cutoff turns out to be.' },
      { q: 'Should I choose based on job perks or exam mechanics?', a: 'Both matter, but exam mechanics are often overlooked. If tight per-section deadlines suit how you work, Banking\'s sectional-lock pattern plays to that, while a single combined clock across a whole paper, used by Railways and SSC CHSL, rewards a different skill.' },
    ],
  },
  {
    slug: 'rbi-grade-b-vs-nabard-vs-sebi-vs-sidbi',
    title: 'RBI Grade B vs NABARD vs SEBI vs SIDBI',
    excerpt: 'Four officer-level exams, four regulators, one overlapping Phase I syllabus: here\'s how RBI Grade B, NABARD, SEBI, and SIDBI actually differ.',
    category: 'Exam Guides',
    readTimeMin: 8,
    publishedAt: '2026-08-06',
    authorName: 'TakeMockTest Editorial',
    body: [
      { type: 'paragraph', text: 'RBI Grade B, NABARD Grade A, SEBI Grade A, and SIDBI Grade A & B sit a level above the clerk/PO banking tier: all four are direct-recruit officer roles at a financial regulator or development bank, and their Phase I syllabi overlap enough that many aspirants prepare for more than one at once.' },
      { type: 'table', heading: 'Phase I structure at a glance', headers: ['Exam', 'Timer', 'Qualifying/merit split?'], rows: [
        ['RBI Grade B', 'Sectional lock, 25/25/25/45 min', 'No'],
        ['NABARD Grade A', 'Composite, 120 min across 8 sections', 'Yes'],
        ['SEBI Grade A', 'Two composite papers, no lock within either', 'No'],
        ['SIDBI Grade A & B', 'Composite, 120 min across 7 sections', 'Yes'],
      ] },
      { type: 'paragraph', heading: 'What each one actually does', text: '[RBI Grade B](/rbi-grade-b/mock-test) is India\'s central bank, and its officers work on monetary policy and banking regulation. [NABARD Grade A](/nabard-grade-a/mock-test) focuses on rural development and agriculture finance. [SEBI Grade A](/sebi-grade-a/mock-test) regulates securities markets. [SIDBI Grade A & B](/sidbi-grade-a-b/mock-test) finances MSMEs and small industry. The mandate differs sharply even though the entry-level exam structure looks similar on paper.' },
      { type: 'paragraph', heading: 'How the Phase I exam structures differ', text: 'This is where the four genuinely split into two groups. [RBI Grade B Phase I](/rbi-grade-b/exam-pattern) uses a hard sectional lock: four separately timed windows of 25/25/25/45 minutes. [NABARD Grade A](/nabard-grade-a/exam-pattern) and [SIDBI Grade A & B](/sidbi-grade-a-b/exam-pattern), on the other hand, both run a single composite 120-minute timer with no sectional lock at all, across eight and seven sections respectively. [SEBI Grade A](/sebi-grade-a/exam-pattern)\'s Phase I is split into two separately timed papers, but each paper individually is also composite with no lock inside it.' },
      { type: 'paragraph', heading: 'The qualifying/merit split two of them share', text: 'NABARD and SIDBI both wall off several sections as qualifying-only, with a separate merit section deciding who advances to Phase II. See [how qualifying and merit sections work](/blog/qualifying-vs-merit-sections-banking-exams) for the specifics. RBI Grade B and SEBI Grade A don\'t split their Phase I this way, which is a real structural difference between what look like four similar "Grade A officer exam" postings at first glance.' },
      { type: 'paragraph', heading: 'Picking based on interest, not just difficulty', text: 'The syllabus overlap (English Language, Reasoning, Quantitative Aptitude, and Computer Knowledge repeat across all four) means the pattern differences above matter less than which subject-matter domain actually interests you. Monetary policy, rural finance, securities regulation, and MSME lending are genuinely different fields once you\'re past Phase I; picking based on which one you\'d rather spend a career in beats picking based on which pattern looks marginally easier.' },
      { type: 'paragraph', text: 'For the wider set of banking exams these four sit inside, see the [beginner\'s guide to banking exams in India](/blog/beginners-guide-to-banking-exams-in-india).' },
    ],
    faqs: [
      { q: 'Do RBI Grade B, NABARD, SEBI, and SIDBI have the same Phase I exam pattern?', a: 'No. RBI Grade B uses a hard sectional lock with four separately timed windows, while NABARD and SIDBI both run a single composite timer with no sectional lock, and SEBI splits Phase I into two separately timed papers that are each composite internally.' },
      { q: 'Which of these four exams split qualifying and merit sections within Phase I?', a: 'NABARD and SIDBI both wall off several sections as qualifying-only, with a separate merit section deciding who advances to Phase II. RBI Grade B and SEBI Grade A do not split their Phase I this way.' },
      { q: 'What does each of these four regulators actually do?', a: 'RBI is India\'s central bank, handling monetary policy and banking regulation. NABARD focuses on rural development and agriculture finance, SEBI regulates securities markets, and SIDBI finances MSMEs and small industry.' },
      { q: 'How should I choose between RBI Grade B, NABARD, SEBI, and SIDBI?', a: 'The Phase I syllabus overlaps heavily across all four, so the pattern differences matter less than which subject-matter domain interests you, since monetary policy, rural finance, securities regulation, and MSME lending are genuinely different fields once you are past Phase I.' },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 2): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, limit);
}
