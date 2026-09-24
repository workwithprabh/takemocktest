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
// Figures quoted about this site's own corpus are derived, never typed in.
// See src/lib/blog-corpus-stats.ts for why, and for the definitions.
import { CORPUS, blindGuessPercent, breakEvenPercent, capitalise, fraction, n, share, share1, word } from './blog-corpus-stats';
import { rotateBy } from './rotate';

export type BlogBlock =
  | { type: 'paragraph'; heading?: string; text: string }
  | { type: 'takeaways'; items: string[] }
  | { type: 'list'; heading?: string; ordered?: boolean; items: string[] }
  | { type: 'callout'; text: string }
  | { type: 'table'; heading?: string; headers: string[]; rows: string[][] }
  | { type: 'diagram'; id: BlogDiagramId; caption: string }
  // The one interactive block. It carries no data: BlogBody supplies the
  // published paces from CORPUS, so a post never hardcodes them and the
  // widget cannot fall out of step with the prose around it.
  | { type: 'calculator'; heading?: string; note?: string };

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTimeMin: number;
  publishedAt: string;
  /**
   * Set only when a published post has been materially extended or corrected,
   * so `dateModified` in the article schema stops echoing `datePublished`.
   * A typo fix is not a modification; a new section or a changed figure is.
   */
  updatedAt?: string;
  authorName: string;
  /**
   * The single search phrase this post is written to answer. Declared here
   * rather than inferred from the H1 because SEO_KEYWORD_MAP.md names the blog
   * as the one page class whose target is per page rather than per template,
   * and until 10 September 2026 it pointed at a field that did not exist.
   * Keep it out of the space owned by another class: an exam's own pattern,
   * syllabus, eligibility and mock-test phrases belong to that exam's pages,
   * so a post takes the question or comparison a student actually types.
   */
  primaryKeyword: string;
  image?: BlogImage;
  body: BlogBlock[];
  faqs?: BlogFaq[];
}

/**
 * "+1/-0.333, +3/-1, +2.5/-0.833 and four other ways". The same penalty is
 * written many ways across Indian notices, so the row names the commonest few
 * and counts the tail rather than listing it.
 *
 * The three shown are picked one per marks-per-correct figure. Ranking on
 * frequency alone put +1/-0.333 next to +1/-0.33 in the one-third row, which
 * are two roundings of the same spec as different notices write it: true, but
 * it reads as a typo in our own table and spends the reader's trust to make a
 * point the row is not making.
 */
function markingSpecSummary(specs: { spec: string; tests: number }[]): string {
  const shown: string[] = [];
  const seen = new Set<string>();
  for (const entry of specs) {
    const marksPerCorrect = entry.spec.slice(1).split('/')[0];
    if (seen.has(marksPerCorrect)) continue;
    seen.add(marksPerCorrect);
    shown.push(entry.spec);
    if (shown.length === 3) break;
  }
  const rest = specs.length - shown.length;
  if (rest === 0) return shown.join(', ');
  return `${shown.join(', ')} and ${rest === 1 ? 'one other way' : `${word(rest)} other ways`}`;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'how-to-build-a-study-timetable',
    title: 'How to Build a Study Timetable That Actually Works',
    excerpt: 'A realistic weekly timetable beats an ambitious one you abandon after three days. Block your fixed hours first; what is left is the real budget.',
    category: 'Study Tips',
    readTimeMin: 5,
    publishedAt: '2026-01-10',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'study timetable for competitive exams',
    image: {
      src: '/images/blog/how-to-build-a-study-timetable.webp',
      alt: 'Indian student planning a weekly competitive-exam study timetable at a desk',
      width: 1280,
      height: 720,
    },
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
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'ssc cgl preparation mistakes',
    image: {
      src: '/images/blog/ssc-cgl-preparation-mistakes.webp',
      alt: 'SSC CGL aspirant reviewing an overcrowded study plan and practice papers',
      width: 1280,
      height: 720,
    },
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
      { type: 'paragraph', heading: '2. Treating General Awareness as unlearnable', text: 'It\'s tempting to write off GA as "too random to prepare for," but static portions (geography, polity, history) are entirely learnable with spaced repetition, and the [SSC CGL syllabus](/ssc-cgl/syllabus) names those topics outright, which is the difference between revising a subject and revising a syllabus. They\'re a much better return on time than obscure current-affairs trivia.' },
      { type: 'paragraph', heading: '3. Delaying mock tests until the last month', text: 'Mock tests aren\'t just a final check: they\'re how you learn to manage time under pressure and find your actual weak areas, as opposed to the ones you assume are weak. Start well before you feel "ready" with the [SSC CGL Tier 1 mock tests](/ssc-cgl/mock-test) on this site.' },
      { type: 'paragraph', heading: '4. Misreading the negative marking math', text: `The deduction is not the penalty, and SSC CGL is a good example of why. Tier 1 takes 0.5 marks off a question worth 2, which is a quarter of a correct answer: a guess breaks even there at ${breakEvenPercent(0.25)}% accuracy, and a blind pick between four options returns ${blindGuessPercent(4)}%. Tier 2 takes a full mark off a question worth 3, a third, where the break-even is exactly ${breakEvenPercent(1 / 3)}% and blind guessing is precisely neutral. The mistake is not guessing, it is not knowing which of those two papers you are sitting. Read both figures off the [SSC CGL exam pattern page](/ssc-cgl/exam-pattern), and see [understanding negative marking](/blog/understanding-negative-marking) for the arithmetic.` },
      { type: 'callout', text: 'The mistake is not guessing, it is not knowing which of those two papers you are sitting.' },
      { type: 'paragraph', heading: '5. Not reviewing wrong answers', text: 'Attempting test after test without going back through the mistakes is close to practicing the same errors repeatedly. Every mock test result on this site includes the correct answer and a short explanation for exactly this reason: see [how to analyze your mock test performance](/blog/how-to-analyze-your-mock-test-performance) for what to actually look at once you have a result.' },
      { type: 'paragraph', text: 'A study timetable that leaves room for weekly mock-test review is the easiest way to catch most of these five before they cost real marks. See [how to build a study timetable that actually works](/blog/how-to-build-a-study-timetable) if yours doesn\'t already.' },
    ],
    faqs: [
      { q: 'How many reference books do I really need for SSC CGL?', a: 'One primary book per section is usually enough. Buying more books tends to spread your time thin across shallow first passes instead of building real mastery of one source, use extra material only for additional practice questions.' },
      { q: 'Is General Awareness worth preparing for in SSC CGL, or is it too random?', a: 'The static portions, geography, polity, and history, are entirely learnable with spaced repetition and give a better return on study time than chasing obscure current-affairs trivia, which is genuinely harder to predict.' },
      { q: 'When should I start taking SSC CGL mock tests?', a: 'Well before you feel fully ready. Mock tests are how you learn to manage time under pressure and find your actual weak areas, not just a final check once preparation is complete.' },
      { q: 'Should I guess on SSC CGL questions I am unsure about?', a: `More often than the deduction suggests. Tier 1 takes 0.5 off a 2-mark question, a quarter of a correct answer, where a guess breaks even at ${breakEvenPercent(0.25)}% accuracy while a blind pick between four options returns ${blindGuessPercent(4)}%. Ruling out even one option puts you near 33%, well clear of the line. Tier 2's one-third penalty breaks even at exactly ${breakEvenPercent(1 / 3)}%, so a blind guess there is neutral and eliminating one option is what makes it pay.` },
    ],
  },
  {
    slug: 'understanding-negative-marking',
    title: 'Understanding Negative Marking: A Complete Guide',
    excerpt: 'Negative marking changes the optimal strategy for guessing. Once you can rule out one option of four, a guess usually beats leaving it blank.',
    category: 'Exam Strategy',
    readTimeMin: 6,
    publishedAt: '2026-01-24',
    updatedAt: '2026-09-22',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'negative marking in competitive exams',
    image: {
      src: '/images/blog/understanding-negative-marking.webp',
      alt: 'Student filling an OMR answer sheet beside a calculator',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'Negative marking means an incorrect answer costs you marks, not just a missed opportunity. So the right strategy isn\'t "always attempt everything" or "never guess," it\'s somewhere in between, and the math is simple once you see it.' },
      { type: 'takeaways', items: [
        'Unattempted questions always score zero; only a wrong answer costs you marks.',
        'The deduction is not the penalty. Divide it by the marks a correct answer earns, because 1 mark off a 4-mark question is the same cost as 0.25 off a 1-mark question.',
        `Check before you assume there is a penalty at all: ${n(CORPUS.marking.none)} of the ${n(CORPUS.marking.tests)} tests here deduct nothing.`,
        `A guess breaks even at the deduction divided by (marks per correct answer plus the deduction). On the commonest scheme here that is ${breakEvenPercent(0.25)}%, and a blind guess between four options returns ${blindGuessPercent(4)}%.`,
        'Leaving a question blank because you are unsure costs you marks on most papers. The reason to skip one is the time it takes to decide, not the penalty.',
      ] },
      { type: 'diagram', id: 'negative-marking-math', caption: 'Where a correct answer, a wrong answer, and an unattempted question land under a 0.25 negative-marking ratio.' },
      { type: 'paragraph', heading: 'How it works', text: `Two numbers govern the whole decision: what a correct answer earns, and what a wrong one takes away. The second divided by the first is what a wrong answer really costs you, and it is the only figure worth carrying into the exam hall. Across the ${n(CORPUS.marking.tests)} checked tests on this site the commonest answer is ${fraction(4, 0.25)} of a correct answer, on ${n(CORPUS.marking.quarter)} of them. Read both numbers off your exam's [exam pattern page](/exams) rather than assuming they match an exam you have already prepared for. Unattempted questions score zero either way, so the only real risk is answering incorrectly.` },
      { type: 'table', heading: `How the ${n(CORPUS.marking.tests)} tests on this site actually score`, headers: ['A wrong answer costs', 'Tests here', 'Written on the paper as'], rows: [
        [`${capitalise(fraction(4, 0.25))} of a correct answer`, n(CORPUS.marking.quarter), markingSpecSummary(CORPUS.marking.quarterSpecs)],
        [`${capitalise(fraction(3, 1 / 3))} of a correct answer`, n(CORPUS.marking.third), markingSpecSummary(CORPUS.marking.thirdSpecs)],
        ['Nothing', n(CORPUS.marking.none), 'No deduction is stated'],
        ['Some other share', n(CORPUS.marking.other), 'Mostly one-eighth and one-fifth schemes'],
      ] },
      { type: 'paragraph', heading: 'The deduction on its own tells you nothing', text: `"One mark will be deducted for each wrong answer" sounds precise and is not. What a wrong answer costs you depends entirely on what a correct one earns, and that is the number students skip. On the tests published here a stated deduction of 1 mark means three different penalties depending on the paper, and so does a stated deduction of 0.25. Divide the deduction by the marks per correct answer before you decide anything about guessing.` },
      { type: 'table', heading: 'One deduction figure, more than one penalty', headers: ['Deduction stated', 'A correct answer earns', 'So a wrong answer really costs', 'Tests here'], rows: CORPUS.marking.ambiguousDeductions.flatMap((entry) => entry.readings.map((reading) => [
        `${entry.deduction} mark${entry.deduction === 1 ? '' : 's'}`,
        `${reading.marksPerCorrect} mark${reading.marksPerCorrect === 1 ? '' : 's'}`,
        `${capitalise(fraction(reading.fraction, reading.ratio))} of a correct answer`,
        n(reading.tests),
      ])) },
      { type: 'paragraph', heading: 'Where there is no penalty, a blank is a wasted mark', text: `Not every paper deducts. Of the ${n(CORPUS.marking.tests)} checked tests published here, ${n(CORPUS.marking.none)} take nothing off for a wrong answer, roughly ${Math.round((CORPUS.marking.none / CORPUS.marking.tests) * 100)} in every hundred. On those the guessing question does not arise. A blank scores zero and a wrong answer scores zero, so every question you leave unanswered is a mark you declined to try for, and the disciplined habit that protects you on a penalty paper costs you marks here. That is why neither "attempt everything" nor "never guess" works as a general rule: they are each correct on a different set of papers, and you have to know which one you are sitting.` },
      { type: 'paragraph', heading: 'When a guess is worth it', text: `There is an exact line, and it is lower than most students assume. With +m for a correct answer and ${'\u2212'}n for a wrong one, a guess breaks even when your accuracy equals n divided by (m + n). Below that a guess costs you marks on average. Above it, it gains them. Run the commonest scheme on this site, +1 and ${'\u2212'}0.25, and the line sits at ${breakEvenPercent(0.25)}%. A blind guess between four options is right ${blindGuessPercent(4)}% of the time, which is already past it. On a one-third penalty the break-even is exactly ${breakEvenPercent(1 / 3)}%, so blind guessing gains and loses nothing across a long paper, and ruling out a single option tips it into profit. Every scheme published here has its break-even at or below that ${breakEvenPercent(1 / 3)}%, so eliminating one of four options is always worth an answer.` },
      { type: 'paragraph', heading: 'So the real reason to leave one blank is time', text: `That makes "skip it if you are not sure" the wrong default on most papers here. A guess you make in three seconds is close to free; one you spend forty seconds talking yourself into is expensive, and the forty seconds is the cost rather than the fraction of a mark. Count the options too. Five of them drop a blind guess to ${blindGuessPercent(5)}%, which takes a quarter-penalty paper from slightly positive to exactly break-even, and a few exams here do set five. Your exam's [exam pattern page](/exams) states the break-even for that paper from its own official scheme.` },
      { type: 'paragraph', heading: 'Why this matters more than most students think', text: 'A handful of careless guesses can erase the marks gained from your strongest section without ever showing up as a weak section. Treat "should I guess this?" as a real decision each time, not a reflex, and review your mock test results specifically for wrong answers on questions you weren\'t sure about; [how to analyze your mock test performance](/blog/how-to-analyze-your-mock-test-performance) covers how to separate those from genuine knowledge gaps.' },
      { type: 'callout', text: 'A handful of careless guesses can erase the marks gained from your strongest section without ever showing up as a weak section.' },
      { type: 'paragraph', text: 'This is one of [5 common mistakes in SSC CGL preparation](/blog/common-ssc-cgl-preparation-mistakes) worth checking yourself against directly, since ignoring the exact deduction on your exam is a surprisingly frequent, entirely avoidable one.' },
    ],
    faqs: [
      { q: 'How much does a wrong answer typically cost in negative marking?', a: `Ask what fraction of a correct answer it costs, not how many marks come off. Across the ${n(CORPUS.marking.tests)} checked tests on this site, ${n(CORPUS.marking.quarter)} take off ${fraction(4, 0.25)} of a correct answer and ${n(CORPUS.marking.third)} take off ${fraction(3, 1 / 3)}, which between them covers most SSC, banking and railway papers. A further ${n(CORPUS.marking.none)} take off nothing at all. Marks per question vary far more than the fraction does, so check your own exam's pattern page rather than assuming.` },
      { q: 'Should I ever leave a question completely unattempted?', a: `Less often than most advice suggests, and for time rather than for marks. A guess breaks even when your accuracy matches the deduction divided by (marks per correct answer plus the deduction). On the commonest scheme here, +1 with a 0.25 deduction, that is ${breakEvenPercent(0.25)}%, while a blind guess between four options returns ${blindGuessPercent(4)}%, so it is already worth taking. Leave a question alone when working out that you cannot eliminate anything would cost more time than the question is worth.` },
      { q: 'Is it worth guessing if I can eliminate one wrong option?', a: `Yes, on every scheme published here. Ruling out one of four options leaves you guessing among three, which is right about 33% of the time. The harshest penalty on this site is one-third of a correct answer, and its break-even is ${breakEvenPercent(1 / 3)}%, so 33% clears every break-even the site publishes. Eliminating an option always makes the guess worth taking.` },
      { q: 'Do unattempted questions lose marks under negative marking?', a: 'No. Unattempted questions always score zero, the same as they would under any marking scheme. The penalty applies only to answers you get wrong, which is exactly why guessing needs to be a deliberate decision rather than a reflex.' },
      { q: 'Is a 1-mark deduction worse than a 0.25-mark deduction?', a: `Not necessarily, and on this site it usually is not. What matters is the deduction divided by the marks a correct answer earns. A paper scoring +4 for a correct answer and taking 1 mark off for a wrong one applies exactly the same penalty as a paper scoring +1 and taking off 0.25. Both cost you ${fraction(4, 0.25)} of a correct answer. A deduction of 1 mark is ${fraction(3, 1 / 3)} of a correct answer on a +3 paper and ${fraction(5, 0.2)} on a +5 paper, so the figure on its own is not comparable across exams.` },
      { q: 'How many exams have no negative marking?', a: `${capitalise(n(CORPUS.marking.none))} of the ${n(CORPUS.marking.tests)} checked tests on this site deduct nothing for a wrong answer, which is about ${Math.round((CORPUS.marking.none / CORPUS.marking.tests) * 100)} percent of them. On a paper with no penalty there is no reason to leave anything blank, since an unanswered question and a wrong one both score zero. Check your own exam's pattern page rather than assuming, because the rule can differ between stages of the same exam.` },
    ],
  },
  {
    slug: 'time-management-during-the-exam',
    title: 'Time Management Tips for the Exam Hall',
    excerpt: 'The clock is often the real opponent, not the questions. A few simple rules keep you from running out of time on easy marks.',
    category: 'Study Tips',
    readTimeMin: 5,
    publishedAt: '2026-01-31',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'time management in the exam hall',
    image: {
      src: '/images/blog/time-management-during-exam.webp',
      alt: 'Student taking a timed mock test beside an analog clock',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'Time management during the exam is often the real skill gap, not subject knowledge: it\'s common to know the material well and still lose marks purely to poor time allocation, spending too long on one tough question while easier ones go unanswered. A little structure fixes most of this.' },
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
      { type: 'paragraph', text: 'Good pacing also does a lot to quiet exam-day nerves, since most of the panic comes from watching the clock run out, not from the questions themselves. See [how to handle exam day anxiety](/blog/how-to-handle-exam-day-anxiety) for what else helps beyond pacing.' },
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
    excerpt: 'A score alone tells you almost nothing useful. The section breakdown, the unattempted count and the trend across tests do.',
    category: 'Mock Tests',
    readTimeMin: 6,
    publishedAt: '2026-02-07',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'how to analyse mock test performance',
    image: {
      src: '/images/blog/analyze-mock-test-performance.webp',
      alt: 'Student reviewing section-wise mock-test performance on a laptop',
      width: 1280,
      height: 720,
    },
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
      { type: 'paragraph', text: 'Once your score is stable, the next question is usually how it compares to what you actually need. See [understanding cutoffs and percentile](/blog/understanding-cutoffs-and-percentile) for why last year\'s cutoff is a guide, not a fixed target.' },
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
    title: 'IBPS PO vs SSC CGL: Which Is Tougher?',
    excerpt: 'At the first stage they are near-twins: 100 questions, 60 minutes, sectional timers, the same 25% penalty. What differs is what gets tested and how you fail.',
    category: 'Exam Strategy',
    readTimeMin: 8,
    publishedAt: '2026-02-14',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'ibps po vs ssc cgl',
    image: {
      src: '/images/blog/ibps-po-vs-ssc-cgl.webp',
      alt: 'Student comparing banking and government-exam preparation paths at a study desk',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'Many aspirants prepare for both IBPS PO and SSC CGL at once, and the overlap in subjects (Quantitative Aptitude, Reasoning, English) makes that reasonable. But if you have to prioritize one, it helps to know how they actually differ.' },
      { type: 'table', heading: 'SSC CGL Tier 1 vs IBPS PO Prelims at a glance', headers: ['', 'SSC CGL Tier 1', 'IBPS PO Prelims'], rows: [
        ['Questions and time', '100 in 60 minutes', '100 in 60 minutes'],
        ['Sectional timer', 'Four sections, 15 minutes each', 'Three tests, 20 minutes each'],
        ['Total marks', '200', '100'],
        ['General Awareness', 'One of the four sections', 'Not tested at this stage'],
        ['A wrong answer costs', '0.5 of a 2-mark question', 'One-fourth of the marks assigned'],
        ['Interview stage', 'No, for most posts', 'Yes'],
        ['Leads to', 'Central government departments', 'Banking officer role'],
      ] },
      { type: 'paragraph', heading: 'Exam structure', text: '[SSC CGL Tier 1](/ssc-cgl/exam-pattern) tests General Awareness alongside Quant, English, and Reasoning, rewarding broad static and current-affairs knowledge. [IBPS PO Prelims](/ibps-po/exam-pattern) drops General Awareness from its core sections in favor of deeper Quant and Reasoning, and adds an interview stage after the written exams.' },
      { type: 'paragraph', heading: 'So which one is actually tougher?', text: 'There is no honest verdict to give, and anyone who gives you one is guessing. Put the two first stages side by side and they are close to twins: 100 questions in 60 minutes each, both locked into sectional timers, and both deducting a quarter of a question\'s value for a wrong answer. On raw pace they are identical, roughly 36 seconds a question. What actually differs is what gets tested, and how you are allowed to fail.' },
      { type: 'paragraph', heading: 'Pace: the reputation is wrong', text: 'Banking exams have a reputation for tighter timing, but the official 2026 patterns do not support that for these two. SSC CGL Tier 1 locks you into four 15-minute subject windows. IBPS PO Prelims gives you three 20-minute ones. Both are sectional locks, and SSC\'s windows are the shorter of the two. Within IBPS PO the pressure is uneven rather than higher: English gives 30 questions in 20 minutes (40 seconds each), while Quant and Reasoning give 35 in the same 20 minutes (about 34 seconds each). See [sectional lock vs composite timer](/blog/sectional-lock-vs-composite-timer) for what a locked window actually feels like in the exam hall.' },
      { type: 'paragraph', heading: 'Where each exam can end your attempt', text: 'This is the real difference. SSC CGL Tier 1 puts General Awareness in one of its four subject windows, so roughly a quarter of the paper rests on static and current knowledge you either have or do not; no amount of aptitude reasons your way to an answer you never learned. IBPS PO Prelims drops General Awareness entirely, but the 2026 notification requires candidates to qualify each of the three separately timed tests, and it does not weight them equally: Reasoning Ability carries 40 marks against 30 each for English and Quantitative Aptitude. One weak section can end an IBPS PO attempt no matter how strong the other two are.' },
      { type: 'paragraph', heading: 'The gap widens at the next stage', text: 'Judging either exam by its first paper alone understates SSC CGL. Tier 2 is a different order of task: 150 objective questions worth 450 marks across 135 minutes, spread over five modules (Mathematical Abilities, Reasoning, English, General Awareness and a Computer Knowledge Test), with a separate 15-minute Data Entry Speed Test alongside. Negative marking there rises to a full mark per wrong answer, double the Tier 1 penalty in absolute terms. If you are weighing total workload rather than a single morning in an exam hall, that is the part to weigh, and the full stage sequence for each is on the [SSC CGL selection process](/ssc-cgl/selection-process) and [IBPS PO selection process](/ibps-po/selection-process) pages.' },
      { type: 'paragraph', heading: 'Which is easier to crack?', text: 'That is a different question from which is tougher, and it has a cleaner answer. Neither exam lets you bank a strong first paper. [SSC CGL Tier 1](/ssc-cgl/selection-process) shortlists on a normalised score and nothing more, and the final merit comes from Tier 2. [IBPS PO Prelims](/ibps-po/selection-process) works the same way, with preliminary marks excluded from the final merit score. A strong first paper buys you a place at the next stage and no other advantage.' },
      { type: 'paragraph', text: 'Both exams also make you clear sections on their own rather than on the total alone, but at different points. IBPS PO applies that at the Prelims, where you have to clear the cut-off in each of the three separately timed tests. SSC CGL applies it at Tier 2, where the required sections of Paper I have to be qualified separately. One weak section can end either attempt. IBPS PO simply tells you sooner.' },
      { type: 'paragraph', text: 'What comes after the written papers is where they really part. SSC CGL runs two computer-based tiers, then post allocation and document verification, and for most posts there is no interview at all. IBPS PO adds a 25-mark descriptive paper inside the Mains, a mandatory Personality Test, and a Common Interview before merit-cum-preference allotment. The descriptive paper and the interview ask for things SSC CGL never tests at any stage: writing to time, and answering a panel.' },
      { type: 'paragraph', text: 'Counted as distinct ways to be eliminated, SSC CGL is the shorter road. Counted as subjects to carry into the first paper, IBPS PO is the lighter one, since its prelim runs three tests against SSC CGL Tier 1\'s four sections. Neither framing makes either exam easy, and both discard your first score once you are through it.' },
      { type: 'paragraph', heading: 'What the role looks like afterward', text: 'SSC CGL opens roles across various central government departments with a wide range of job profiles. IBPS PO leads specifically into a banking officer role, with more customer-facing and target-driven day-to-day work.' },
      { type: 'paragraph', heading: 'A practical way to decide', text: 'If General Awareness is a genuine strength for you, that tilts toward SSC CGL. If you\'re faster and more consistent under strict timing in Quant and Reasoning, IBPS PO plays to that. Either way, the overlapping sections mean focused practice for one exam can still build skills used in the other. Always confirm the current official pattern before comparing complete papers: try a [SSC CGL mock test](/ssc-cgl/mock-test) and an [IBPS PO mock test](/ibps-po/mock-test) back to back if you\'re still deciding.' },
      { type: 'callout', text: 'If General Awareness is a genuine strength for you, that tilts toward SSC CGL.' },
      { type: 'paragraph', text: 'For the wider decision beyond just these two, see [SSC vs Banking vs Railways](/blog/ssc-vs-banking-vs-railways-choosing-your-path), which covers how the exam mechanics differ across all three tracks, not just SSC and IBPS.' },
    ],
    faqs: [
      { q: 'Does IBPS PO test General Awareness like SSC CGL does?', a: 'No. IBPS PO Prelims drops General Awareness from its core sections in favor of deeper Quantitative Aptitude and Reasoning, while SSC CGL Tier 1 tests General Awareness alongside those same two sections plus English.' },
      { q: 'Which is easier to crack, SSC CGL or IBPS PO?', a: 'Neither carries your first-stage score into the final merit: SSC CGL decides merit at Tier 2, and IBPS PO at the Mains and Interview. SSC CGL has fewer separate stages to clear and, for most posts, no interview. IBPS PO adds a 25-mark descriptive paper and a Common Interview, so it asks for two things SSC CGL never tests.' },
      { q: 'Which is tougher, IBPS PO or SSC CGL?', a: 'Neither is objectively tougher, and the first stages are structurally very close: 100 questions in 60 minutes, sectional timers, and a quarter of a question\'s value lost per wrong answer in both. They punish different weaknesses. SSC CGL Tier 1 devotes one of its four subject windows to General Awareness, so a quarter of the paper rewards knowledge you either have or do not. IBPS PO Prelims has no General Awareness, but requires you to qualify each of its three separately timed tests, so one weak section can end the attempt regardless of your total.' },
      { q: 'Which is harder to time, IBPS PO or SSC CGL?', a: 'Both are sectionally locked and both give you 100 questions in 60 minutes, so the per-question pace is the same at about 36 seconds. SSC CGL Tier 1 uses four 15-minute subject windows; IBPS PO Prelims uses three 20-minute tests. Within IBPS PO the pressure is uneven rather than higher, with 30 English questions in 20 minutes against 35 each for Quantitative Aptitude and Reasoning in the same time.' },
      { q: 'Can I prepare for both IBPS PO and SSC CGL at the same time?', a: 'Yes, and many aspirants do. The overlapping subjects, Quantitative Aptitude, Reasoning, and English, mean focused practice for one exam builds skills that carry over to the other, even though the exact section mix and timing differ.' },
      { q: 'Does SSC CGL or IBPS PO include an interview stage?', a: 'IBPS PO does: it adds an interview stage after the written exams. SSC CGL does not use an interview for most posts, its selection is based on the written stages and document verification.' },
    ],
  },
  {
    slug: 'sectional-lock-vs-composite-timer',
    title: 'Sectional Lock vs Composite Timer, Explained',
    excerpt: 'Some exams lock you into each section with its own clock. Others give one combined timer for the whole paper, and that changes how you should practice.',
    category: 'Exam Strategy',
    readTimeMin: 7,
    publishedAt: '2026-08-06',
    updatedAt: '2026-09-23',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'sectional lock vs composite timer',
    image: {
      src: '/images/blog/sectional-lock-vs-composite-timer.webp',
      alt: 'Indian student practicing a timed mock test with a sectional timer and stopwatch',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: `Sectional lock and composite timer are the two timing formats you will run into on this site. Under a lock each section gets its own clock; under a composite timer one clock covers the whole paper and you split it yourself. Counted across the ${CORPUS.locks.stages} official stage patterns published here, ${CORPUS.locks.locked} lock their sections and ${CORPUS.locks.oneClock} run several sections on one clock, with the remaining ${CORPUS.locks.noBreakdown} publishing no section-wise split at all. Mixing up which one your exam uses, and practising for the wrong one, is a common and entirely avoidable mistake.` },
      { type: 'takeaways', items: [
        'Sectional lock: each section has its own fixed window, and unused time never carries over.',
        'Composite timer: one clock for the whole paper, split however you like.',
        'Practice sectional-lock exams under a real cutoff, and composite-timer exams by deciding time splits in real time.',
        `The lock is a banking and SSC convention rather than a general rule: ${CORPUS.locks.forCategory('Banking')!.locked} of ${CORPUS.locks.forCategory('Banking')!.stages} banking stages here lock their sections, and not one of the ${CORPUS.locks.forCategory('Engineering')!.stages} engineering ones does.`,
        'A few exams use neither pattern cleanly, so always check the specific exam\'s pattern page.',
      ] },
      { type: 'diagram', id: 'sectional-vs-composite', caption: 'Sectional lock splits the clock into fixed windows; a composite timer gives you one clock to split yourself.' },
      { type: 'paragraph', heading: 'What sectional lock actually means', text: 'Under sectional lock, each section gets a fixed window and once it expires you\'re moved on automatically, whether you\'ve finished or not: unused time in one section never carries over to the next. [SBI Clerk Prelims](/sbi-clerk/exam-pattern) gives you exactly 20 minutes per section this way, and [RBI Grade B Phase I](/rbi-grade-b/exam-pattern) splits its four sections into separately timed 25/25/25/45-minute windows. If you\'re strong in one section and weak in another, sectional lock means you can\'t borrow time to compensate. That window is also only the opening stage of a longer road, as the [SBI Clerk selection process](/sbi-clerk/selection-process) shows.' },
      { type: 'paragraph', heading: 'What a composite timer means', text: 'A composite timer gives you one clock for every section combined, and you decide how to split it. [NABARD Grade A Phase I](/nabard-grade-a/exam-pattern) runs a single 120-minute timer across all eight of its sections, and [SIDBI Grade A & B Phase I](/sidbi-grade-a-b/exam-pattern) does the same across seven: you can answer every question in your strongest section first, then spend whatever\'s left on the rest.' },
      { type: 'table', heading: 'Which pattern common exams use', headers: ['Exam', 'Timer type'], rows: [
        ['SBI Clerk Prelims', 'Sectional lock, 20 min per section'],
        ['RBI Grade B Phase I', 'Sectional lock, 25/25/25/45 min'],
        ['SSC CGL Tier 1', 'Sectional lock, 15 min per subject'],
        ['NABARD Grade A Phase I', 'Composite, 120 min across 8 sections'],
        ['SIDBI Grade A & B Phase I', 'Composite, 120 min across 7 sections'],
        ['SSC CHSL Tier 1', 'Composite, single 60 min timer'],
      ] },
      { type: 'paragraph', heading: 'The lock is a banking and SSC habit, not a general rule', text: `If you prepare for banking or SSC exams the sectional lock feels like how exams simply work, and inside those families it nearly is: ${CORPUS.locks.forCategory('Banking')!.locked} of ${CORPUS.locks.forCategory('Banking')!.stages} official banking stages here lock their sections, and ${CORPUS.locks.forCategory('SSC')!.locked} of ${CORPUS.locks.forCategory('SSC')!.stages} SSC ones. Step outside and it disappears. Not one of the ${CORPUS.locks.forCategory('Engineering')!.stages} engineering stages here locks a section, and management manages ${CORPUS.locks.forCategory('Management')!.locked} out of ${CORPUS.locks.forCategory('Management')!.stages}. A candidate moving from a bank prelims to an engineering entrance is changing timing format as well as syllabus, and the instinct that served them in twenty-minute windows is the wrong one for a single 150-minute clock.` },
      { type: 'table', heading: 'Where the locks are', headers: ['Exam family', 'Stages that lock', 'Official stages'], rows: CORPUS.locks.withLocks.map((entry) => [
        entry.category,
        String(entry.locked),
        String(entry.stages),
      ]) },
      { type: 'paragraph', heading: 'A section table is not the same as a lock', text: `This one catches people, and it caught this site. Some exams publish a per-section time split that is guidance rather than a rule: the clock never actually stops you. UPSC CSE prints an indicative split across the sections of both preliminary papers and its notice is explicit that each paper runs on one unbroken 120-minute timer. NMIMS-CET publishes a 30/30/30/20/10 allocation in its handout without saying those windows lock or auto-submit. Read the timing note next to the table rather than the table alone, because a split you are free to ignore and a window that closes on you are different exams to sit.` },
      { type: 'paragraph', heading: 'Why this changes how you should practice', text: 'Practicing sectional-lock exams under an untimed or freely-navigable mock teaches you the wrong instinct: you need to feel the sudden cutoff, not just the total time pressure. Composite-timer exams reward the opposite skill: deciding, in real time, how many minutes a section is actually worth to you. Take sectional tests for the first kind and full mocks for the second, both are available on every exam\'s mock-test page on this site.' },
      { type: 'paragraph', heading: 'A third pattern worth knowing', text: '[SSC MTS & Havaldar](/ssc-mts/exam-pattern) does neither: it splits its CBT into two mandatory 45-minute sessions on the same day, with different negative-marking rules in each session. Always check the specific exam\'s pattern page rather than assuming; even within one recruiting body, the rules can change from one exam to the next (SSC CGL Tier 1 itself uses 15-minute-per-subject sectional locking, unlike SSC CHSL\'s single 60-minute composite timer). Where each of these formats sits in its own recruitment, and what follows it, is set out stage by stage: [SSC MTS selection process](/ssc-mts/selection-process), [SSC CGL selection process](/ssc-cgl/selection-process) and [SSC CHSL selection process](/ssc-chsl/selection-process).' },
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
    slug: 'sbi-po-vs-ibps-po-same-totals-different-maths',
    title: 'SBI PO vs IBPS PO: Same Totals, Different Maths',
    excerpt: 'Both prelims are 100 questions in 60 minutes. Both mains are 170 objective questions for 200 marks. Where those 200 marks sit is where the two exams stop agreeing.',
    category: 'Exam Strategy',
    readTimeMin: 7,
    publishedAt: '2026-09-21',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'sbi po vs ibps po',
    body: [
      { type: 'paragraph', text: 'Most people preparing for one of these exams prepare for both, and that is sensible: the sections carry over almost completely. The trouble starts when you assume the two papers reward the same work. At the headline level they look interchangeable. One level down they are not.' },
      { type: 'paragraph', heading: 'The prelims really are interchangeable', text: '[SBI PO Prelims](/sbi-po/exam-pattern) and [IBPS PO Prelims](/ibps-po/exam-pattern) are 100 questions for 100 marks in 60 minutes, across English Language, Quantitative Aptitude and Reasoning Ability, with one-fourth of a question\'s marks deducted for a wrong answer. If you are comparing the two at the prelim stage, there is nothing to compare. Prepare once.' },
      { type: 'paragraph', heading: 'The mains totals are identical too', text: 'This is where most comparisons stop and get it wrong. Both mains papers set 170 objective questions worth 200 marks. Quoting those totals against each other tells you nothing, because they match exactly.' },
      { type: 'takeaways', items: [
        'Both PO prelims: 100 questions, 100 marks, 60 minutes, same three sections.',
        'Both PO mains, objective portion: 170 questions, 200 marks.',
        'A Data Interpretation question in SBI PO Mains carries 2 marks. An English question on either paper carries half a mark.',
      ] },
      { type: 'paragraph', heading: 'Where the 200 marks actually sit', text: 'Neither paper spreads its marks evenly across questions. SBI PO Mains packs 60 marks into just 30 Data Interpretation questions, which makes each one worth 2 marks, while giving English Language 40 questions worth 20 marks between them. That is half a mark a question. On the same paper, one DI question is worth four English questions.' },
      { type: 'diagram', id: 'po-mains-marks-per-question', caption: 'Marks per question by section. Both papers total 170 questions and 200 marks, and neither distributes them evenly.' },
      { type: 'paragraph', text: 'IBPS PO Mains is flatter. Reasoning and Data Interpretation both sit at 1.5 marks a question across 40 questions each, and its awareness section is 50 questions for 60 marks. English is the cheap section on both papers, at half a mark either way.' },
      { type: 'paragraph', heading: 'What that changes about preparation', text: 'On SBI PO Mains, Data Interpretation is the densest scoring on the paper and the section where an hour of practice buys the most marks. Its awareness section is the largest by question count at 60, but each of those questions is worth 1 mark, so it rewards breadth rather than depth. On IBPS PO Mains the top of the paper is flatter, and there is no single section that outweighs the others the way DI does at SBI.' },
      { type: 'callout', text: 'English is 40 questions for 20 marks on both mains papers. It still has its own cutoff to clear, so it cannot be skipped, but it is the worst place on either paper to spend your last free hour.' },
      { type: 'paragraph', heading: 'The descriptive papers are counted differently', text: 'Both exams end their mains with writing, and the two are not counted the same way. IBPS PO sets 2 descriptive tasks worth 25 marks, and those marks sit inside its 225-mark mains total. SBI PO runs a separately timed descriptive test worth 30 marks for the 2026 cycle, outside the 200-mark objective total. So an SBI PO mains score and an IBPS PO mains score are not directly comparable numbers even when they look like they should be.' },
      { type: 'paragraph', heading: 'The timing difference is small', text: 'SBI PO gives 180 minutes for the objective paper. IBPS PO gives 190 minutes across its mains. On a 170-question paper that is a difference of a few seconds a question, which is not where either exam is won or lost. The marks distribution is.' },
      { type: 'paragraph', heading: 'A practical way to use this', text: 'Prepare the prelims once, since they are the same exam in all but name. For the mains, let the marks decide your last hours rather than your comfort: at SBI, Data Interpretation; at IBPS, whichever of Reasoning or Data Interpretation is currently weaker, since they are worth the same. Confirm the current pattern before you plan around any of this, then sit a [SBI PO mock test](/sbi-po/mock-test) and an [IBPS PO mock test](/ibps-po/mock-test) back to back and compare your section-wise accuracy rather than your totals.' },
      { type: 'paragraph', text: 'For the wider choice between tracks rather than between two banking exams, see [SSC vs Banking vs Railways](/blog/ssc-vs-banking-vs-railways-choosing-your-path). For the sister comparison one tier down, see [SBI Clerk vs IBPS Clerk](/blog/sbi-clerk-vs-ibps-clerk-the-shorter-paper-is-faster).' },
    ],
    faqs: [
      { q: 'Is SBI PO tougher than IBPS PO?', a: 'Their prelims are the same paper in every measurable respect, and their mains set the same 170 objective questions for the same 200 marks. The difference is distribution, not difficulty: SBI PO concentrates 60 marks into 30 Data Interpretation questions, while IBPS PO spreads its marks more evenly across Reasoning and Data Interpretation.' },
      { q: 'Can I prepare for SBI PO and IBPS PO together?', a: 'Yes, and at the prelim stage you are already doing so, because both are 100 questions in 60 minutes across the same three sections with the same penalty. Only your mains strategy needs to differ, and mainly in which section you prioritise.' },
      { q: 'Which section is worth the most marks per question in SBI PO Mains?', a: 'Data Interpretation, at 2 marks per question across 30 questions. That is four times what an English question is worth on the same paper, where 40 questions share 20 marks.' },
      { q: 'Do both SBI PO and IBPS PO have a descriptive paper?', a: 'Both do. IBPS PO sets 2 descriptive tasks worth 25 marks counted inside its mains total, and SBI PO runs a separately timed descriptive test worth 30 marks for the 2026 cycle, outside its 200-mark objective total.' },
      { q: 'Does English matter if it is only worth half a mark a question?', a: 'It still carries its own cutoff, so a weak English score can end your attempt regardless of how the marks are weighted. What the weighting tells you is where additional practice stops paying once you are safely past that cutoff.' },
    ],
  },
  {
    slug: 'sbi-clerk-vs-ibps-clerk-the-shorter-paper-is-faster',
    title: 'SBI Clerk vs IBPS Clerk: The Shorter Paper Is Faster',
    excerpt: 'Identical prelims, then two mains papers worth the same 200 marks. The one with 30 fewer questions gives you less time for each of them.',
    category: 'Exam Strategy',
    readTimeMin: 6,
    publishedAt: '2026-09-21',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'sbi clerk vs ibps clerk',
    body: [
      { type: 'paragraph', text: 'These two exams are close enough that most candidates sit both, and the prelims genuinely are the same paper. The mains are where a reasonable assumption goes wrong: that the paper with fewer questions is the gentler one.' },
      { type: 'paragraph', heading: 'The prelims match', text: '[SBI Clerk Prelims](/sbi-clerk/exam-pattern) and [IBPS Clerk Prelims](/ibps-clerk/exam-pattern) are both 100 questions for 100 marks in 60 minutes, across English Language, Numerical Ability and Reasoning Ability. As with the PO exams a tier above, there is nothing to choose between them at this stage.' },
      { type: 'paragraph', heading: 'Both mains are worth 200 marks, and that is where the similarity ends', text: 'SBI Clerk Mains sets 190 objective questions across 2 hours 40 minutes. IBPS Clerk Mains sets 160 questions across 125 minutes. Same 200 marks, thirty questions apart, and thirty-five minutes apart.' },
      { type: 'takeaways', items: [
        'Both clerk prelims: 100 questions, 100 marks, 60 minutes, same three sections.',
        'SBI Clerk Mains: 190 questions, 200 marks, 160 minutes, about 50.5 seconds a question.',
        'IBPS Clerk Mains: 160 questions, 200 marks, 125 minutes, about 46.9 seconds a question.',
      ] },
      { type: 'paragraph', heading: 'Fewer questions, less time each', text: 'Divide the clock by the question count and the shorter paper turns out to be the quicker one. SBI Clerk gives roughly 50.5 seconds a question. IBPS Clerk gives roughly 46.9. The paper that looks lighter on the notification is the one that asks you to move faster.' },
      { type: 'diagram', id: 'clerk-mains-pace', caption: 'Time available per question in each clerk mains paper, derived from the published totals.' },
      { type: 'callout', text: 'A shorter paper is not a slower paper. Compare seconds per question, not question counts.' },
      { type: 'paragraph', heading: 'One section at SBI is worth more than the rest', text: 'SBI Clerk Mains does not weight every question the same. Reasoning Ability and Computer Aptitude is 50 questions carrying 60 marks, which works out at 1.2 marks a question and makes it the only section on the paper above a flat mark. General Financial Awareness, General English and Quantitative Aptitude each carry their question count in marks.' },
      { type: 'paragraph', heading: 'What we can and cannot tell you about the IBPS split', text: 'Current sources agree on the IBPS Clerk Mains totals of 160 questions, 200 marks and 125 minutes, and agree that Quantitative Aptitude rose from 35 questions to 40. They disagree with each other on the exact per-section question and marks split, and the official notification could not be independently read for this article. So the pace comparison above uses only the totals, which are not in dispute, and we are not going to print a per-section table we cannot stand behind. The [IBPS Clerk pattern page](/ibps-clerk/exam-pattern) marks that stage as review-pending for the same reason.' },
      { type: 'paragraph', heading: 'What to do with this', text: 'If you are sitting both, practise at the tighter pace, because preparing at 47 seconds a question leaves you comfortable at 50 and the reverse does not hold. At SBI, reasoning is where the extra marks per question are. Sit a [SBI Clerk mock test](/sbi-clerk/mock-test) and an [IBPS Clerk mock test](/ibps-clerk/mock-test) under a real clock rather than trusting either notification to tell you how the pace feels.' },
      { type: 'paragraph', text: 'The same comparison one tier up, where both mains papers happen to total 170 questions and 200 marks, is in [SBI PO vs IBPS PO](/blog/sbi-po-vs-ibps-po-same-totals-different-maths).' },
    ],
    faqs: [
      { q: 'Which is tougher, SBI Clerk or IBPS Clerk?', a: 'Their prelims are the same paper: 100 questions, 100 marks, 60 minutes, three shared sections. At mains, IBPS Clerk gives about 46.9 seconds a question against SBI Clerk\'s 50.5, so IBPS is the tighter paper on pace despite setting 30 fewer questions.' },
      { q: 'Why does the shorter IBPS Clerk paper give less time per question?', a: 'Because the time falls faster than the question count. IBPS Clerk cuts 30 questions from SBI Clerk\'s 190 but cuts 35 minutes from its 160, so each remaining question ends up with slightly less time.' },
      { q: 'Which SBI Clerk Mains section is worth the most per question?', a: 'Reasoning Ability and Computer Aptitude, at 50 questions for 60 marks, or 1.2 marks a question. It is the only section on that paper worth more than a mark per question.' },
      { q: 'What is the IBPS Clerk Mains section-wise split?', a: 'Current sources agree on the totals of 160 questions, 200 marks and 125 minutes, and that Quantitative Aptitude increased to 40 questions, but they disagree on the full per-section breakdown and the official notification could not be independently verified here. Treat any exact per-section table from a secondary source with caution and check the official notification.' },
      { q: 'Can I prepare for SBI Clerk and IBPS Clerk together?', a: 'Yes. The prelims are identical and the mains sections overlap heavily. The main adjustment is pace: practise at the faster IBPS timing, which leaves you comfortable at SBI timing.' },
    ],
  },
  {
    slug: 'qualifying-vs-merit-sections-banking-exams',
    title: 'Qualifying vs Merit Sections in Bank Exams',
    excerpt: 'Some banking exams score every section toward your rank. A few wall off certain sections inside a single paper, so only some of your marks move your rank.',
    category: 'Exam Strategy',
    readTimeMin: 5,
    publishedAt: '2026-08-06',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'qualifying vs merit sections in bank exams',
    image: {
      src: '/images/blog/qualifying-vs-merit-sections-banking-exams.webp',
      alt: 'Banking exam aspirant comparing qualifying and merit mock-test sections',
      width: 1280,
      height: 720,
    },
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
    excerpt: 'IBPS, SBI and RBI get thrown around as if interchangeable. They sit at different levels, recruit differently, and past the clerk tier test different subjects.',
    category: 'Exam Guides',
    readTimeMin: 8,
    publishedAt: '2026-08-06',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'which banking exam should i start with',
    image: {
      src: '/images/blog/beginners-guide-banking-exams-india.webp',
      alt: 'Indian student organizing a beginner study plan for banking exams',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'If you\'ve searched "best bank exam for beginners," you\'ve probably seen IBPS, SBI, and RBI mentioned as if picking between them is a single decision. It isn\'t: they sit at different levels, recruit differently, and (once you go past the clerk/PO tier) test genuinely different subject knowledge. This site currently hosts mock tests for twelve banking-family exams, and they sort into four tiers.' },
      { type: 'takeaways', items: [
        'IBPS runs a common exam across multiple public sector banks; SBI recruits separately for itself.',
        'A regional rural bank tier and a specialist officer tier sit alongside the standard clerk/PO track.',
        'RBI Grade B, NABARD, SEBI, and SIDBI are direct-recruit officer roles a level above clerk/PO.',
        'Overlapping subjects mean practice for one exam carries over to the others, so picking "the wrong one" first rarely wastes effort.',
      ] },
      { type: 'diagram', id: 'banking-tier-ladder', caption: 'Four broad tiers, from clerk and PO entry level up to the central bank and regulator Grade A/B officer roles.' },
      { type: 'paragraph', heading: 'The clerk and PO tier: where most beginners start', text: 'IBPS doesn\'t recruit for one bank: it runs a common exam and allots selected candidates across multiple public sector banks based on merit and preference. [IBPS PO](/ibps-po/mock-test) targets the officer track, [IBPS Clerk](/ibps-clerk/mock-test) the clerical track. SBI runs its own separate recruitment instead of going through IBPS: [SBI PO](/sbi-po/mock-test) and [SBI Clerk](/sbi-clerk/mock-test) are SBI-specific, generally with a heavier workload and faster growth than the IBPS-allotted equivalent. Whether you can apply at all is worth settling before any of this, and each exam publishes its own conditions: [IBPS PO eligibility](/ibps-po/eligibility), [IBPS Clerk eligibility](/ibps-clerk/eligibility), [SBI PO eligibility](/sbi-po/eligibility) and [SBI Clerk eligibility](/sbi-clerk/eligibility).' },
      { type: 'paragraph', heading: 'The regional rural bank tier', text: 'IBPS also runs a separate common exam for Regional Rural Banks: [IBPS RRB Officer Scale I](/ibps-rrb-officer-scale-1/mock-test) and [IBPS RRB Office Assistant](/ibps-rrb-office-assistant/mock-test), with a composite, no-sectional-lock timer that differs from the standard IBPS PO/Clerk Prelims pattern.' },
      { type: 'paragraph', heading: 'The specialist tier', text: '[IBPS SO](/ibps-so/mock-test) recruits directly into specialist officer roles (IT, Agriculture, HR, Marketing) rather than general banking. It\'s a narrower path, worth knowing about specifically if your background is already in one of those fields rather than commerce.' },
      { type: 'paragraph', heading: 'The central bank and regulator tier: the next level up', text: 'This is where "IBPS vs SBI vs RBI" oversimplifies things. [RBI Assistant](/rbi-assistant/mock-test) is RBI\'s clerical-level exam, while [RBI Grade B](/rbi-grade-b/mock-test) is a direct-recruit officer role focused on monetary policy and banking regulation. Sitting alongside RBI Grade B are three more Grade-A officer exams most beginners don\'t hear about until later: [NABARD Grade A](/nabard-grade-a/mock-test) (rural development and agriculture finance), [SEBI Grade A](/sebi-grade-a/mock-test) (securities market regulation), and [SIDBI Grade A & B](/sidbi-grade-a-b/mock-test) (MSME and small-industry finance). See our [full comparison of these four](/blog/rbi-grade-b-vs-nabard-vs-sebi-vs-sidbi) if that tier interests you.' },
      { type: 'paragraph', heading: 'A practical way to start', text: 'The overlapping subjects (Reasoning, Quantitative Aptitude, English) mean focused practice for any one of these exams builds skills that carry over to the others, so picking "the wrong one" first rarely wastes your effort. What\'s worth getting right early is understanding [how qualifying and merit sections work](/blog/qualifying-vs-merit-sections-banking-exams) for whichever exam you land on, since a few of these have a genuinely different scoring structure than the standard Prelims-then-Mains pattern.' },
    ],
    faqs: [
      { q: 'What is the difference between IBPS and SBI recruitment?', a: 'IBPS runs a common exam and allots selected candidates across multiple public sector banks based on merit and preference, while SBI runs its own separate recruitment specific to SBI, generally with a heavier workload and faster growth than the IBPS-allotted equivalent.' },
      { q: 'Which banking exam should a beginner start with?', a: 'The clerk and PO tier, IBPS PO, IBPS Clerk, SBI PO, and SBI Clerk, is where most beginners start, since the overlapping subjects mean focused practice for any one of these builds skills that carry over to the others.' },
      { q: 'What is the difference between RBI Assistant and RBI Grade B?', a: 'RBI Assistant is RBI\'s clerical-level exam, while RBI Grade B is a direct-recruit officer role focused on monetary policy and banking regulation, a different level and syllabus.' },
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
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'ssc vs banking vs railways',
    image: {
      src: '/images/blog/ssc-vs-banking-vs-railways.webp',
      alt: 'Indian aspirant comparing SSC, banking, and railway exam pathways',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'SSC, Banking, and Railways are the three most common entry points into a government career in India, and most comparisons stop at job perks: pay, postings, travel benefits. Less discussed is that the exams themselves test you in genuinely different ways, and that difference is worth weighing before you commit months of preparation to one.' },
      { type: 'table', heading: 'SSC vs Banking vs Railways at a glance', headers: ['', 'Typical timer', 'Tests General Awareness?'], rows: [
        ['SSC CGL Tier 1', 'Sectional lock, 15 min per subject', 'Yes'],
        ['SSC CHSL', 'Composite, single 60 min timer', 'Yes'],
        ['Banking Prelims (IBPS PO, SBI PO, RBI Assistant)', 'Sectional lock, ~20 min per section', 'Usually not'],
        ['RRB NTPC / Group D / JE', 'Composite, single 90 min timer', 'Yes'],
      ] },
      { type: 'paragraph', heading: 'SSC: broad postings, tight sectional timing', text: '[SSC CGL Tier 1](/ssc-cgl/exam-pattern) locks you into 15 minutes per subject across four sections (General Intelligence and Reasoning, General Awareness, Quantitative Aptitude, and English Comprehension) and opens roles across central government departments from Income Tax to Customs to CBI. [SSC CHSL](/ssc-chsl/mock-test), by contrast, uses a single 60-minute composite timer for the same kind of subject spread, so even within SSC the pattern isn\'t consistent across exams. The subject lists behind those two papers are closer than their clocks are: compare the [SSC CGL syllabus](/ssc-cgl/syllabus) against the [SSC CHSL syllabus](/ssc-chsl/syllabus).' },
      { type: 'paragraph', heading: 'Banking: numbers, speed, and sectional lock', text: 'Most public-sector bank Prelims papers use a hard sectional lock: [IBPS PO](/ibps-po/mock-test), [SBI PO](/sbi-po/mock-test), and [RBI Assistant](/rbi-assistant/mock-test) all give you roughly 20 minutes per section with no borrowing between them. Banking exams generally reward speed and accuracy under pressure more than broad general knowledge: SSC CGL tests General Awareness alongside its other sections, while most Banking Prelims papers drop it entirely in favor of deeper Quant and Reasoning.' },
      { type: 'paragraph', heading: 'Railways: composite timers, the highest applicant volume', text: 'RRB exams tend to use a single combined timer instead of sectional lock: [RRB NTPC](/rrb-ntpc/mock-test) gives 90 minutes across three sections, [RRB Group D](/rrb-group-d/mock-test) gives 90 minutes across four, and [RRB Junior Engineer](/rrb-je/mock-test) does the same. Railway recruitment also draws some of the largest applicant numbers of any government exam family in India, which affects how competitive a given cutoff turns out to be. What that volume is competing over is set out in the [RRB NTPC syllabus](/rrb-ntpc/syllabus).' },
      { type: 'callout', text: 'Railway recruitment draws some of the largest applicant numbers of any government exam family in India.' },
      { type: 'paragraph', heading: 'A practical way to decide', text: 'If tight per-section deadlines suit how you work, Banking\'s sectional-lock pattern plays to that; if you\'d rather manage one combined clock across a whole paper, Railways\' composite-timer exams and SSC CHSL are a better match for that instinct than SSC CGL is. See [sectional lock vs composite timer](/blog/sectional-lock-vs-composite-timer) for the full mechanics either way. You can also [browse the full government exam catalog](/exams/government-jobs) to see every exam in each family side by side before deciding. One thing the timing comparison will not tell you is how long each road is: the first paper is one stage of several, and the number after it varies more between families than the papers do. Compare the [SSC CGL selection process](/ssc-cgl/selection-process), the [IBPS PO selection process](/ibps-po/selection-process) and the [SBI PO selection process](/sbi-po/selection-process) before committing months to any of them.' },
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
    excerpt: 'Four officer-level exams, four regulators, one overlapping Phase I syllabus. Where RBI Grade B, NABARD, SEBI and SIDBI part ways is in what counts for merit.',
    category: 'Exam Guides',
    readTimeMin: 8,
    publishedAt: '2026-08-06',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'rbi grade b vs nabard grade a',
    image: {
      src: '/images/blog/rbi-nabard-sebi-sidbi-exam-comparison.webp',
      alt: 'Indian aspirant comparing finance and development regulator exam paths',
      width: 1280,
      height: 720,
    },
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
  {
    slug: 'how-many-mock-tests-should-you-take',
    title: 'How Many Mock Tests Should You Take Before the Exam?',
    excerpt: 'There is no magic number. What matters is whether your section-wise accuracy is still improving between attempts, and whether you review each one properly.',
    category: 'Mock Tests',
    readTimeMin: 5,
    publishedAt: '2026-08-12',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'how many mock tests before the exam',
    image: {
      src: '/images/blog/how-many-mock-tests-to-take.webp',
      alt: 'Indian student scheduling mock-test attempts on a study calendar',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'How many mock tests you should take is one of the most common questions aspirants ask, and most answers online just throw out a round number like 20 or 50 with no reasoning behind it. The honest answer is that the count matters far less than what you do with each attempt.' },
      { type: 'takeaways', items: [
        'Volume without review teaches you nothing new after the first handful of attempts.',
        'Track section-wise accuracy across attempts, not just your overall score.',
        'A realistic starting cadence is one to two full mocks a week, rising closer to daily in your final two weeks.',
        'Stop adding new mocks and start re-reviewing old ones if your accuracy has plateaued for two weeks straight.',
      ] },
      { type: 'paragraph', heading: 'Why the number itself is the wrong question', text: 'Two students can each take 30 mock tests and end up in completely different places. One reviews every wrong answer, spots a recurring pattern (say, misreading direction-based reasoning questions), and fixes it by test 10. The other just keeps attempting fresh papers without ever looking back, and repeats the same mistake through test 30. The second student did more work and learned less.' },
      { type: 'paragraph', heading: 'What to track instead of a target count', text: 'Watch your section-wise accuracy, not your overall score, across your last five to six attempts. If Quantitative Aptitude accuracy is climbing but Reasoning has been flat for two weeks, that flat line is telling you something a rising overall score can hide. [How to analyze your mock test performance](/blog/how-to-analyze-your-mock-test-performance) covers exactly what to look at in a result once you have one.' },
      { type: 'paragraph', heading: 'A reasonable cadence to start from', text: 'One to two full-length mocks a week is a sustainable starting point if you are also covering new content. As your exam date gets closer, most students shift toward one every two to three days, and the final one to two weeks often become close to daily, mixed with focused sectional or topic-wise tests on your weakest areas rather than only full papers.' },
      { type: 'callout', text: 'Two students can each take 30 mock tests and end up in completely different places, depending entirely on whether they reviewed what went wrong.' },
      { type: 'paragraph', heading: 'When more mocks stop helping', text: 'If your accuracy has genuinely plateaued for two straight weeks despite attempting regularly, the fix usually is not another fresh paper. It is going back through your last four or five attempts and looking for the same wrong-answer pattern repeating across them. A study timetable that reserves weekly time specifically for this kind of review, not just for new mocks, catches this early. See [how to build a study timetable that actually works](/blog/how-to-build-a-study-timetable) for how to fit that in.' },
      { type: 'paragraph', text: 'Once your accuracy is stable and you are consistently finishing within time, the difference between a good and a great score usually comes down to exam-hall execution. [Time management tips for the exam hall](/blog/time-management-during-the-exam) covers that half of the problem. You can browse full-length and sectional mocks for your exam from the [exam directory](/exams).' },
    ],
    faqs: [
      { q: 'Is there an ideal number of mock tests to take before a government exam?', a: 'No fixed number works for everyone. What matters is whether your section-wise accuracy is still improving between attempts and whether you are reviewing each wrong answer, not just the total count of tests you have attempted.' },
      { q: 'How often should I take a full mock test while preparing?', a: 'One to two a week is a reasonable starting cadence alongside covering new content, rising to closer to daily in your final one to two weeks before the exam.' },
      { q: 'What should I do if my mock test scores have stopped improving?', a: 'Stop taking fresh papers for a moment and go back through your last four or five attempts looking for a repeating wrong-answer pattern. A plateau usually means the same mistake is recurring, not that you need more volume.' },
      { q: 'Should I track my overall mock test score or my section-wise score?', a: 'Section-wise accuracy tells you more. A rising overall score can hide one section that has been flat for weeks, and that flat section is exactly where your review time should go.' },
    ],
  },
  {
    slug: 'coaching-vs-self-study',
    title: 'Coaching vs Self-Study: How to Actually Decide',
    excerpt: 'Neither option is universally better. The right call depends on which subjects you can teach yourself, how much structure you need, and what you can afford.',
    category: 'Study Tips',
    readTimeMin: 6,
    publishedAt: '2026-08-12',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'coaching vs self study for government exams',
    image: {
      src: '/images/blog/coaching-vs-self-study.webp',
      alt: 'Indian student comparing online coaching with self-study materials',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'Coaching versus self-study gets debated endlessly in exam-prep circles, usually as if one side is universally right. It is not that simple. The better question is which parts of your preparation genuinely need external structure and which you can handle on your own.' },
      { type: 'paragraph', heading: 'What coaching is actually good for', text: 'A structured coaching program is most useful for subjects where you do not know what you do not know: unfamiliar reasoning question types, an unfamiliar exam pattern, or a subject you have never studied at this depth before. It also helps if you know you will not build a study habit without an external schedule and deadlines. A batch of peers preparing for the same exam can also surface strategy details, cutoff trends, and pattern changes faster than studying alone.' },
      { type: 'paragraph', heading: 'What self-study is actually good for', text: 'If you already have a strong base in a subject, coaching content for that subject is often review you do not need, at a pace set by the slowest student in the batch. Self-study also removes the daily commute or fixed-schedule cost that coaching adds, which matters if you are working alongside preparation. See [preparing for exams while working a job](/blog/preparing-for-exams-while-working-a-job) if that is your situation.' },
      { type: 'takeaways', items: [
        'Coaching helps most with unfamiliar content and external accountability.',
        'Self-study works best where you already have a base and just need practice.',
        'A hybrid approach, coaching for your weakest subject only, self-study for the rest, is common and often cheaper.',
        'Whichever you choose, mock tests are non-negotiable either way: they are how you find your real weak areas, not the ones you assume.',
      ] },
      { type: 'callout', text: 'The better question is not coaching versus self-study as a whole, but which subjects actually need external structure and which you can handle on your own.' },
      { type: 'paragraph', heading: 'A hybrid middle ground', text: 'Many aspirants take coaching for one specific weak subject, often Quantitative Aptitude or Reasoning if their base is genuinely shaky, and self-study the rest using books, free resources, and mock tests. This costs less than full coaching and avoids paying for review of material you already know.' },
      { type: 'paragraph', heading: 'Whichever path you pick, mocks stay constant', text: 'Coaching or self-study, neither one tells you how you actually perform under exam conditions with a countdown timer running. That only shows up in a full-length mock test. See [how to build a study timetable that actually works](/blog/how-to-build-a-study-timetable) for where mocks fit into a weekly plan either way, and [how many mock tests you should actually take](/blog/how-many-mock-tests-should-you-take) for a realistic cadence.' },
    ],
    faqs: [
      { q: 'Is coaching necessary to clear a government exam?', a: 'No. Coaching helps most with unfamiliar content or subjects where you need external structure and accountability, but it is not a requirement, and many aspirants clear exams through self-study alone.' },
      { q: 'What is a hybrid approach to coaching and self-study?', a: 'Taking coaching for one specific weak subject only, often Quantitative Aptitude or Reasoning, and self-studying the rest with books and mock tests. This costs less than full coaching while still covering your weakest area with structured help.' },
      { q: 'Does self-study work if I am also working a job?', a: 'Self-study often fits better around a job because it removes the fixed commute and schedule that in-person coaching adds. It does require more self-discipline to maintain a consistent routine without external deadlines.' },
      { q: 'Do I still need mock tests if I take coaching?', a: 'Yes. Coaching classes teach content, but only a full-length mock test under a real countdown timer shows you how you actually perform under exam conditions, which is different from how you perform in an untimed classroom setting.' },
    ],
  },
  {
    slug: 'how-to-handle-exam-day-anxiety',
    title: 'How to Handle Exam Day Anxiety and Stay Calm Under Pressure',
    excerpt: 'Most exam-day anxiety comes from unfamiliarity rather than the questions, which is why timed mocks do more for it than being told to stay calm.',
    category: 'Study Tips',
    readTimeMin: 5,
    publishedAt: '2026-08-12',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'exam day anxiety',
    image: {
      src: '/images/blog/how-to-handle-exam-day-anxiety.webp',
      alt: 'Indian student taking a calming breath before entering an exam hall',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'Telling someone to "just stay calm" on exam day is not advice, it is a wish. The more useful question is what is actually causing the anxiety, because most of it traces back to unfamiliarity rather than the questions themselves.' },
      { type: 'paragraph', heading: 'Familiarity is the real fix, not willpower', text: 'A lot of exam-day nerves come from facing something for the first time under real stakes: the interface, the on-screen timer counting down, the palette showing which questions you have attempted. If your first experience with a live countdown timer is on exam day itself, some of that anxiety is simply your brain reacting to something genuinely new. Taking full-length [mock tests](/exams) under real timed conditions well before the actual exam removes a big chunk of that unfamiliarity, because by exam day the format itself is no longer a surprise.' },
      { type: 'takeaways', items: [
        'Most exam-day anxiety comes from unfamiliarity with the format, not the difficulty of the questions.',
        'Taking timed mock tests beforehand removes a large part of that unfamiliarity before it matters.',
        'Sleep the night before affects working memory and speed more than one extra hour of revision does.',
        'A slow, deliberate first minute reading the instructions calms most people down faster than rushing straight into question one.',
      ] },
      { type: 'paragraph', heading: 'Sleep beats one more hour of revision', text: 'Cramming until late the night before an exam trades sleep for marginal content review, and that trade rarely pays off. Working memory and processing speed both drop noticeably on poor sleep, which affects your entire performance, not just recall of the one extra topic you crammed. If you are choosing between an extra hour of revision and an extra hour of sleep the night before, sleep is very often the better trade.' },
      { type: 'callout', text: 'If your first experience with a live countdown timer is on exam day itself, some of your anxiety is simply your brain reacting to something genuinely new.' },
      { type: 'paragraph', heading: 'The first minute in the exam hall matters more than people think', text: 'Rushing straight into question one while still mentally settling in tends to produce careless mistakes early, which then compounds the anxiety further. Spending the first minute deliberately reading the instructions, noting the section order, and taking one slow breath resets your pace before the clock pressure fully kicks in. See [time management tips for the exam hall](/blog/time-management-during-the-exam) for what to do with your pacing once you are past that first minute.' },
      { type: 'paragraph', heading: 'Reframe the physical symptoms', text: 'A racing heart and slightly sweaty palms right before an exam are physically almost identical to excitement, not just fear. Naming that feeling as excitement, rather than fighting it, gives your body nothing new to do and leaves the physical response where it already was. It costs nothing to try on exam day.' },
    ],
    faqs: [
      { q: 'What actually causes exam-day anxiety?', a: 'Most of it comes from unfamiliarity with the exam format itself, the countdown timer, the interface, the question palette, rather than the difficulty of the questions. Taking timed mock tests beforehand removes a large part of that unfamiliarity before exam day.' },
      { q: 'Should I do one more hour of revision or sleep the night before an exam?', a: 'Sleep is usually the better trade. Poor sleep measurably reduces working memory and processing speed, which affects your entire performance, not just recall of the one extra topic crammed the night before.' },
      { q: 'What should I do in the first minute after the exam starts?', a: 'Spend it reading the instructions and noting the section order rather than rushing straight into question one. Rushing while still mentally settling in tends to cause early careless mistakes that then add to the anxiety.' },
      { q: 'Does taking mock tests actually help with exam-day nerves?', a: 'Yes. A large part of exam-day anxiety comes from facing the timed format for the first time under real stakes, and mock tests remove that first-time unfamiliarity well before it matters.' },
    ],
  },
  {
    slug: 'preparing-for-exams-while-working-a-job',
    title: 'Preparing for Government Exams While Working a Full-Time Job',
    excerpt: 'You will not get the eight-hour study days full-time aspirants describe online, and you do not need them. Weekends carry most of the real load.',
    category: 'Study Tips',
    readTimeMin: 6,
    publishedAt: '2026-08-12',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'how to prepare for government exams while working',
    image: {
      src: '/images/blog/preparing-for-exams-while-working-a-job.webp',
      alt: 'Indian professional studying for a government exam after work',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'A lot of exam-prep advice online assumes you have no other commitments, which is not true for the many aspirants preparing while holding down a full-time job. The plan has to look different, and comparing yourself to someone with eight free hours a day is not useful.' },
      { type: 'paragraph', heading: 'Your real budget is smaller, plan around it', text: 'Between work, commute, and basic rest, most working aspirants have somewhere between one and three genuine study hours on a weekday, concentrated early morning, late evening, or both. Weekends carry more of the real weight, often three to five hours a day if used deliberately. Building your plan around this real number instead of an aspirational one is the same principle covered in [how to build a study timetable that actually works](/blog/how-to-build-a-study-timetable), just with a tighter weekday budget.' },
      { type: 'takeaways', items: [
        'Weekday study time is usually one to three real hours; weekends carry more of the load.',
        'Commute and break time can absorb passive review (flashcards, audio revision) even when full focus is not possible.',
        'New, difficult content belongs on weekends when you have longer uninterrupted blocks; weekdays are better for revision and practice sets.',
        'Taking planned leave in the final one to two weeks before the exam is common and worth budgeting for in advance.',
      ] },
      { type: 'paragraph', heading: 'Use the fragments, do not waste them', text: 'Commute time and short breaks rarely allow deep focus, but they are well suited to passive review: flashcards for static General Awareness facts, revisiting formulas you already learned, or a quick sectional test if you have twenty uninterrupted minutes. Save genuinely new, difficult content, a new reasoning question type or an unfamiliar Quant topic, for the longer blocks you get on weekends when you can actually concentrate.' },
      { type: 'callout', text: 'Comparing your one-to-three-hour weekday budget to someone else\'s eight-hour study day is not useful. Plan around your real number, not theirs.' },
      { type: 'paragraph', heading: 'Weekends do the heavy lifting', text: 'If weekdays are mostly maintenance and light revision, weekends become where new topics get covered and full-length mock tests happen, since a full mock needs an uninterrupted block that a weekday rarely offers. This also matches [how many mock tests you should actually take](/blog/how-many-mock-tests-should-you-take): a realistic cadence of one to two full mocks a week fits naturally into a two-day weekend without needing to find that block on a weekday.' },
      { type: 'paragraph', heading: 'Plan for leave near the exam date', text: 'Many working aspirants take a week or two of planned leave immediately before the exam once the date is announced, to get a stretch of full-time focus for final revision and a couple of last mock tests. Deciding this in advance, rather than scrambling for leave approval at the last minute, avoids adding one more stressor right when you need it least.' },
    ],
    faqs: [
      { q: 'How many hours can I realistically study while working a full-time job?', a: 'Most working aspirants get one to three genuine study hours on a weekday, concentrated in the early morning or evening, with weekends carrying more of the load at three to five hours a day if used deliberately.' },
      { q: 'What should I study during my commute if I cannot focus deeply?', a: 'Passive review works best in short, interrupted windows: flashcards for static General Awareness facts, revisiting formulas already learned, or a quick sectional test if you get a genuine twenty-minute block. Save new, difficult content for longer weekend sessions.' },
      { q: 'Should I take leave from work before the exam?', a: 'Many working aspirants plan one to two weeks of leave immediately before the exam once the date is announced, to get uninterrupted time for final revision and a couple of last mock tests. Deciding this early avoids a last-minute scramble for approval.' },
      { q: 'Should new topics be studied on weekdays or weekends while working?', a: 'Weekends are usually better for new, difficult content because they offer longer uninterrupted blocks. Weekdays work better for revision, light practice, and passive review that does not need deep focus.' },
    ],
  },
  {
    slug: 'document-verification-what-to-expect',
    title: 'Document Verification: What Happens After the Written Exam',
    excerpt: 'Clearing the written exam is not the finish line. Document Verification trips up candidates over paperwork, not knowledge, and it is avoidable with preparation.',
    category: 'Exam Guides',
    readTimeMin: 5,
    publishedAt: '2026-08-12',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'document verification after written exam',
    image: {
      src: '/images/blog/document-verification-what-to-expect.webp',
      alt: 'Indian candidate organizing certificates for document verification',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'Every year, some candidates who clear the written stages of a government exam still get rejected later, not because of anything on the paper, but because of a document mismatch at verification. It is one of the most avoidable ways to lose a result you already earned.' },
      { type: 'paragraph', heading: 'What Document Verification actually is', text: 'After the written and, where applicable, interview stages, shortlisted candidates are called to physically produce original documents that support everything declared in the application: identity, date of birth, educational qualification, and category or reservation claims where relevant. Officials compare these originals against the online application and against each other. This stage typically comes after the last written or interview stage in an exam\'s [selection process](/exams), and the exact requirements are always listed in that specific exam\'s official notification.' },
      { type: 'takeaways', items: [
        'Document Verification checks identity, age, qualification, and category claims against your original documents.',
        'A name or date-of-birth mismatch between your certificates is one of the most common reasons candidates get stuck at this stage.',
        'Category certificates (OBC-NCL, EWS, and similar) often need to be issued within a specific validity window, not just at any point in the past.',
        'Start collecting and cross-checking documents as soon as you are shortlisted, not the week of your verification date.',
      ] },
      { type: 'paragraph', heading: 'The most common trip-up: name and date mismatches', text: 'Your name and date of birth need to match consistently across your Class 10 certificate, other educational certificates, identity proof, and the online application form. A spelling difference (initials expanded on one document but not another, for example) or an inconsistent date of birth between your Class 10 marksheet and your Aadhaar card can genuinely delay or derail verification. Cross-check every document against each other well before your verification date, not on the day itself.' },
      { type: 'callout', text: 'A spelling difference between your Class 10 certificate and your identity proof can delay or derail an otherwise successful result.' },
      { type: 'paragraph', heading: 'Category certificates have their own rules', text: 'Certificates for OBC (Non-Creamy Layer), EWS, and similar reserved categories are frequently required to be issued within a specific, recent validity window, not just at any point in your life. An expired or out-of-window certificate is treated the same as not having one at all. If you are applying under a reserved category, check the specific exam\'s eligibility page or official notification for the exact certificate format and validity period required, since this detail genuinely varies by exam and gets updated by government guidelines from time to time.' },
      { type: 'paragraph', heading: 'What to do once you are shortlisted', text: 'The moment you are called for Document Verification, gather every certificate the notification lists, check name and date-of-birth consistency across all of them, and confirm any category certificate is within its required validity window. Doing this early leaves time to get a corrected certificate reissued if you find a mismatch, which is far easier to fix a few weeks out than the day before your verification slot.' },
    ],
    faqs: [
      { q: 'What documents are usually checked at Document Verification?', a: 'Original documents supporting identity, date of birth, educational qualification, and category or reservation claims where applicable, compared against your online application. The exact list is always specified in that exam\'s official notification.' },
      { q: 'Why do candidates get rejected at Document Verification even after clearing the written exam?', a: 'The most common reason is a mismatch between documents, such as a name spelling difference or an inconsistent date of birth across certificates, rather than any issue with exam performance itself.' },
      { q: 'Do category certificates like OBC-NCL or EWS expire?', a: 'Many are required to be issued within a specific, recent validity window rather than being valid indefinitely. An expired or out-of-window certificate is typically treated as if you do not have one, so check the specific exam\'s requirements well in advance.' },
      { q: 'When should I start preparing my documents for verification?', a: 'As soon as you are shortlisted, not the week of your verification date. Checking for mismatches early leaves time to get a corrected certificate reissued if needed.' },
    ],
  },
  {
    slug: 'age-limit-and-attempts-explained',
    title: 'Age Limits and Number of Attempts: How They Actually Work',
    excerpt: 'Some exams cap how many times you can attempt them. Most only cap your age. The two get confused constantly, and the difference changes how you should plan.',
    category: 'Exam Guides',
    readTimeMin: 5,
    publishedAt: '2026-08-12',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'age limit and number of attempts for government exams',
    image: {
      src: '/images/blog/age-limit-and-attempts-explained.webp',
      alt: 'Indian aspirant planning exam eligibility dates and attempts',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'Age limits and number of attempts get confused constantly: a surprising number of aspirants assume every competitive exam caps how many times you can attempt it, the way a couple of well-known exams do. Most government exams in India do not work that way at all: they cap your age, not your attempt count.' },
      { type: 'paragraph', heading: 'Two different kinds of limits', text: 'Age-limited exams let you apply as many times as you want, as long as you fall within the eligible age band for that year\'s notification. Most SSC, Banking, and Railways exams work this way: there is no attempt cap on paper, only an age window, though in practice the age window itself limits how many times the notification comes around while you remain eligible. A smaller number of exams, UPSC Civil Services best known among them, cap the actual number of attempts a candidate is allowed, separately from the age limit, with the exact cap varying by category.' },
      { type: 'takeaways', items: [
        'Most SSC, Banking, and Railways exams cap your age, not your number of attempts.',
        'A smaller number of exams, UPSC Civil Services being the best known, cap attempts directly and separately from age.',
        'Category-based age relaxation (SC/ST, OBC-NCL, PwBD, and others) is common across almost all government exams.',
        'Always check the specific exam\'s official notification or eligibility page for the exact age band and any attempt cap that year, since both can change between cycles.',
      ] },
      { type: 'paragraph', heading: 'Category-based age relaxation is nearly universal', text: 'Almost every government exam offers upper-age relaxation for specific categories: SC/ST, OBC (Non-Creamy Layer), Persons with Benchmark Disabilities, and often Ex-Servicemen and certain government-employee categories, among others. The exact number of years relaxed differs by exam and by category within that exam, so a blanket number is not something you can rely on across exams. This is exactly the kind of detail that is worth checking on the specific [exam\'s eligibility page](/exams) rather than assuming it carries over from one exam to another.' },
      { type: 'callout', text: 'Most government exams cap your age, not your number of attempts. Only a smaller group, UPSC Civil Services being the best known, cap attempts directly.' },
      { type: 'paragraph', heading: 'Why the distinction actually matters for planning', text: 'If your exam only caps age, a weak first attempt is a setback, not a closed door: you can reapply next cycle as long as you are still within the age band, adjusted for any category relaxation you qualify for. If your exam caps attempts directly, each attempt carries more weight, since a wasted or under-prepared attempt permanently reduces how many chances remain. Knowing which category your target exam falls into changes how cautiously you should treat an attempt you are not fully ready for.' },
      { type: 'paragraph', text: 'Eligibility rules, including age bands and any attempt caps, get set fresh in each notification and can shift between cycles, so always confirm the current figures on the specific exam\'s own eligibility page rather than relying on what a previous year\'s notification said.' },
    ],
    faqs: [
      { q: 'Do all government exams limit how many times I can attempt them?', a: 'No. Most SSC, Banking, and Railways exams only cap your age, not your number of attempts. A smaller group of exams, UPSC Civil Services being the best known, cap the actual number of attempts separately from the age limit.' },
      { q: 'Does age relaxation apply to every government exam?', a: 'Category-based age relaxation, for SC/ST, OBC-NCL, PwBD, and often other categories, is common across almost all government exams, but the exact number of years relaxed varies by exam and by category, so check the specific exam\'s eligibility page rather than assuming a number carries over.' },
      { q: 'Does it matter whether an exam caps attempts or only age?', a: 'Yes. If only age is capped, a weak attempt is a setback you can recover from next cycle. If attempts are capped directly, each one carries more weight since a wasted attempt permanently reduces how many chances remain.' },
      { q: 'Where can I find the exact age limit and attempt rules for my exam?', a: 'On that exam\'s own eligibility page or its official notification. These figures are set fresh each cycle and can change year to year, so do not rely on a previous year\'s notification for the current figures.' },
    ],
  },
  {
    slug: 'should-you-take-a-drop-year',
    title: 'Should You Take a Drop Year for Exam Preparation?',
    excerpt: 'A dedicated year sounds like an obvious advantage. The risk is not running short of hours but having so many unstructured ones that discipline erodes.',
    category: 'Study Tips',
    readTimeMin: 6,
    publishedAt: '2026-08-12',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'drop year for exam preparation',
    image: {
      src: '/images/blog/should-you-take-a-drop-year.webp',
      alt: 'Indian student considering a dedicated year for exam preparation',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'A drop year, stepping away from a job or further study to prepare full-time, sounds like it should obviously help: more hours, no divided attention. In practice it helps some aspirants and genuinely hurts others, depending on factors that have nothing to do with how badly you want to clear the exam.' },
      { type: 'paragraph', heading: 'When a drop year tends to help', text: 'It tends to work well if you have already tested your own discipline, for example by managing a real study schedule alongside college or a job and seeing it actually stick, and if you have a clear, specific gap in preparation that more focused time would close: an unfinished syllabus, mock test scores that are close to cutoff but not there yet, or a subject you have never had time to properly attempt. A drop year with a specific, named goal behind it tends to go better than one taken simply because "more time should help."' },
      { type: 'takeaways', items: [
        'A drop year works best when paired with a specific, named gap in preparation, not just a general sense that more time would help.',
        'Self-discipline without external deadlines is the biggest risk: an unstructured full day is easy to under-use.',
        'Financial cushion and family expectations affect stress levels as much as study time does.',
        'A time-boxed drop year with a defined review point tends to go better than an open-ended one.',
      ] },
      { type: 'paragraph', heading: 'The real risk is unstructured time, not lack of time', text: 'The biggest failure mode of a drop year is not running out of hours, it is having so many unstructured hours that discipline erodes without the external deadlines a job or college naturally provides. If you have never successfully run your own study schedule without someone else\'s structure holding it together, a drop year removes exactly the scaffolding that was keeping you consistent. See [how to build a study timetable that actually works](/blog/how-to-build-a-study-timetable) for what that structure needs to look like when you have to build it entirely yourself.' },
      { type: 'callout', text: 'The biggest failure mode of a drop year is not running out of hours. It is having so many unstructured hours that discipline erodes without external deadlines to hold it together.' },
      { type: 'paragraph', heading: 'Financial and family pressure are real costs', text: 'A drop year usually means a year of lost or reduced income, and often a year of family or social pressure around "what are you doing right now." These are not just emotional side notes, they add measurable stress on top of the exam preparation itself, and that stress affects performance. Being honest about your financial cushion and how you will handle that pressure before committing to a drop year matters as much as the study plan itself.' },
      { type: 'paragraph', heading: 'Time-box it instead of leaving it open-ended', text: 'Aspirants who set a defined length for a drop year, six months or a year, with a planned check-in point to honestly assess mock test scores and progress, tend to manage the psychological weight of it better than those who treat it as open-ended until success. A defined end point also makes it easier to decide, without panic, whether to extend, return to work or study, or blend the two, which is exactly the alternative covered in [preparing for exams while working a job](/blog/preparing-for-exams-while-working-a-job).' },
    ],
    faqs: [
      { q: 'Does a drop year actually improve my chances of clearing an exam?', a: 'It depends more on whether you have a specific, named gap in preparation and proven self-discipline than on simply having more hours available. A drop year taken only because more time seems like it should help tends to go worse than one taken with a clear goal.' },
      { q: 'What is the biggest risk of taking a drop year?', a: 'Unstructured time, not lack of time. Without the external deadlines a job or college provides, discipline can erode over an open-ended full day, especially if you have not previously run your own study schedule successfully.' },
      { q: 'Should a drop year be open-ended or time-boxed?', a: 'Time-boxed, with a defined length and a planned check-in point to honestly assess progress. This makes it easier to decide whether to extend, return to work or study, or combine both, without the pressure of an undefined finish line.' },
      { q: 'What should I consider besides study time before taking a drop year?', a: 'Your financial cushion and how you will handle family or social pressure during that period. Lost income and outside expectations add real, measurable stress on top of exam preparation, and that affects performance too.' },
    ],
  },
  {
    slug: 'understanding-cutoffs-and-percentile',
    title: 'Cutoffs and Percentile: What Score Do You Actually Need?',
    excerpt: 'A cutoff is not a fixed target. It moves with vacancy count, paper difficulty, and your category, which is why last year\'s number is a guide, not a guarantee.',
    category: 'Exam Strategy',
    readTimeMin: 6,
    publishedAt: '2026-08-12',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'cutoff vs percentile',
    image: {
      src: '/images/blog/understanding-cutoffs-and-percentile.webp',
      alt: 'Indian aspirant reviewing mock-test score patterns and comparison charts',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'Ask ten aspirants what score they need and most will quote a single number from last year\'s cutoff. That number is a useful reference point, but treating it as a fixed target misunderstands how cutoffs actually get decided.' },
      { type: 'paragraph', heading: 'A cutoff is decided after the fact, not set in advance', text: 'A cutoff is not a pre-announced pass mark. It is the score of the last candidate selected, decided after the exam based on how many vacancies exist, how many candidates appeared, and how the paper played out that year. The same exam can have a noticeably different cutoff two years running even with a similar syllabus, simply because vacancy count or applicant volume shifted.' },
      { type: 'takeaways', items: [
        'A cutoff is the score of the last candidate selected, decided after the exam, not a pre-set pass mark.',
        'More vacancies or a tougher paper that year generally push cutoffs down; fewer vacancies or an easier paper push them up.',
        'Cutoffs are set separately per category (UR, OBC, SC, ST, EWS, and others), sometimes with a large gap between them.',
        'Multi-shift exams often use normalization or percentile scoring specifically to make different shifts comparable.',
      ] },
      { type: 'paragraph', heading: 'Why cutoffs move year to year', text: 'Two forces mostly drive the shift: vacancy count and paper difficulty. More vacancies with a similar applicant pool generally means more candidates get selected, which tends to pull the cutoff down. A paper that most candidates found tougher than usual also tends to push cutoffs down, since fewer people score as high across the board. The reverse is also true: fewer vacancies or an easier paper tends to push cutoffs up. This is exactly why last year\'s cutoff should be read as a rough guide to the range you are aiming for, not an exact target.' },
      { type: 'callout', text: 'A cutoff is the score of the last candidate selected, decided after the exam, not a pass mark that was set in advance.' },
      { type: 'paragraph', heading: 'Cutoffs are not the same across categories', text: 'Most government exams publish separate cutoffs for each category (Unreserved, OBC, SC, ST, EWS, and others where applicable), and the gap between them can be meaningful. Check the cutoff specifically for your own applicable category on the exam\'s cutoff page, not just the overall or Unreserved figure, since that is the number that actually determines your result.' },
      { type: 'paragraph', heading: 'Percentile and normalization, briefly', text: 'Exams held across multiple shifts or days, common for many large-scale government exams, often use a normalization process to convert raw scores into a comparable percentile, correcting for one shift\'s paper being slightly easier or harder than another\'s. If your exam works this way, comparing raw scores between two different shifts directly can be misleading; the percentile or normalized score is the number that actually gets compared against the cutoff.' },
      { type: 'paragraph', text: 'Since negative marking also affects your final raw score before any normalization happens, [understanding negative marking](/blog/understanding-negative-marking) is worth reading alongside this. And once you have a mock test result in hand, [how to analyze your mock test performance](/blog/how-to-analyze-your-mock-test-performance) covers how to judge it against a target range rather than a single fixed number.' },
    ],
    faqs: [
      { q: 'Is a cutoff a fixed number I need to beat?', a: 'No. A cutoff is the score of the last candidate selected, decided after the exam based on vacancy count, applicant volume, and paper difficulty that year, not a pass mark that was set in advance.' },
      { q: 'Why does the cutoff change every year for the same exam?', a: 'Mainly vacancy count and paper difficulty. More vacancies or a tougher paper generally push cutoffs down, while fewer vacancies or an easier paper tends to push them up, even with a similar syllabus.' },
      { q: 'Do all categories have the same cutoff?', a: 'No. Most exams publish separate cutoffs for each category, Unreserved, OBC, SC, ST, EWS, and others where applicable, and the gap between them can be significant. Always check the cutoff for your own applicable category.' },
      { q: 'What is normalization and why does it matter for cutoffs?', a: 'Exams held across multiple shifts often convert raw scores into a comparable percentile to correct for one shift\'s paper being slightly easier or harder than another\'s. The normalized score, not the raw score, is what actually gets compared against the cutoff in these exams.' },
    ],
  },
  {
    slug: 'revising-in-the-final-week-before-your-exam',
    title: 'How to Revise Effectively in the Final Week Before Your Exam',
    excerpt: 'The final week is not extra study time for a new topic. It is for making sure what you already know is fast, accurate, and holds up under pressure.',
    category: 'Study Tips',
    readTimeMin: 5,
    publishedAt: '2026-08-14',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'how to revise in the last week before an exam',
    image: {
      src: '/images/blog/revising-in-the-final-week-before-your-exam.webp',
      alt: 'Indian student revising practice questions during the final week before an exam',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'Most aspirants treat the final week as extra study time and try to squeeze in one more topic they never quite finished. That instinct usually works against you. The last week has one job: make what you already know faster and more reliable, not add to the pile of things you know.' },
      { type: 'paragraph', heading: 'Stop learning new topics, start consolidating', text: 'A topic you are seeing for the first time this week is more likely to cost you time on exam day than earn you marks. Even if you technically follow the concept once, you will not be fast or confident applying it under a countdown timer, and hesitation on one question eats into the time you needed for questions you already had covered.' },
      { type: 'takeaways', items: [
        'Stop new topics. Spend the week making known topics faster and more accurate, not covering more ground.',
        'Redo problems you got wrong before instead of just rereading the explanation for them.',
        'Retake an old mock test under full time pressure rather than only reviewing its solutions.',
        'Shift your sleep and practice-test timing to match your actual exam slot this week, not on exam day itself.',
      ] },
      { type: 'paragraph', heading: 'Revisit your weakest topics, not your strongest', text: 'It is tempting to spend revision time on topics you are already comfortable with, since it feels productive and confidence-building. Redirect that time to your weakest 20 to 30 percent instead: the topics you keep getting wrong or keep needing extra time on are where the final week actually moves your score.' },
      { type: 'callout', text: 'The final week has one job: make what you already know faster and more reliable, not add to the pile of things you know.' },
      { type: 'paragraph', heading: 'Retake old mock tests instead of only rereading solutions', text: 'Rereading a solution tells you that you can recognize the right answer when it is in front of you. It does not tell you whether you can produce that answer from scratch, at speed, under the same pressure as the real exam. Pick a mock test you took a few weeks ago and retake it fully timed. If your score has not moved compared to your first attempt, that gap is exactly what this week should close, and [how to analyze your mock test performance](/blog/how-to-analyze-your-mock-test-performance) covers what to look at once you have the new result.' },
      { type: 'paragraph', heading: 'Normalize your exam-day timing this week', text: 'If your exam is scheduled for a specific time slot, start waking up, eating, and attempting practice tests around that same window this week. Adjusting your body clock on the morning of the exam itself is a bad time to discover you are not sharp at that hour. Small, boring routine changes like this rarely feel urgent, which is exactly why most aspirants skip them and then wonder why a normally comfortable pace felt off on exam day.' },
      { type: 'paragraph', text: 'If negative marking is part of your exam, revisit [understanding negative marking](/blog/understanding-negative-marking) this week specifically: your guessing threshold under real time pressure is worth re-checking once, not just set once and forgotten.' },
    ],
    faqs: [
      { q: 'Should I start a new topic in the final week before my exam?', a: 'Generally no. A topic you are seeing for the first time this late is unlikely to be fast or reliable enough under exam pressure to be worth the time, compared to strengthening topics you already partly know.' },
      { q: 'Is it better to reread notes or redo problems in the last week?', a: 'Redo problems. Rereading a solution only confirms you can recognize the right answer; redoing the problem from scratch under time pressure tells you whether you can actually produce it on exam day.' },
      { q: 'How many mock tests should I take in the final week?', a: 'Focus on quality over volume this week: retaking a couple of past mocks under full time pressure and reviewing them carefully teaches you more than rushing through several new ones. See how many mock tests you should actually take for the broader picture.' },
      { q: 'Should I change my sleep schedule before the exam?', a: 'Yes, ideally starting several days out rather than the night before. Shift your sleep and wake times toward your actual exam slot so your body is not adjusting to an unfamiliar hour on exam day itself.' },
    ],
  },
  {
    slug: 'speed-vs-accuracy-in-timed-tests',
    title: 'Speed vs Accuracy: The Right Trade-off in Timed Tests',
    excerpt: 'Rushing through more questions and slowing down to avoid mistakes are both valid. The mistake is picking one without checking what your exam rewards.',
    category: 'Exam Strategy',
    readTimeMin: 5,
    publishedAt: '2026-08-14',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'speed vs accuracy in exams',
    image: {
      src: '/images/blog/speed-vs-accuracy-in-timed-tests.webp',
      alt: 'Indian student balancing speed and accuracy during a timed mock test',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'Speed vs accuracy in timed tests plays out differently for every topper: ask two toppers of the same exam how they managed their time and you will often get opposite answers. One attempted almost every question and accepted a few careless errors. The other attempted fewer questions but got nearly all of them right. Both can score well on the same paper, because the right balance depends on your exam\'s scoring rules and your own accuracy, not on a single universal rule.' },
      { type: 'paragraph', heading: 'Why this is a real trade-off, not a mindset problem', text: 'Every additional question you attempt in a fixed time window either comes from time you would have spent double-checking an earlier answer, or from time you would have spent leaving a genuinely uncertain question blank. Speed without accuracy converts more time into wrong answers; accuracy without speed converts time into fewer attempted questions. Neither failure mode is about willpower. Both are about where you are actually spending your limited minutes.' },
      { type: 'table', heading: 'Two default strategies, compared', headers: ['', 'Attempt more, accept some errors', 'Attempt fewer, protect accuracy'], rows: [
        ['Works best when', 'Little to no negative marking, or a low per-question penalty', 'Meaningful negative marking or unusually tough sectional cutoffs'],
        ['Main risk', 'Negative marking erodes gains from wrong guesses', 'Leaving borderline-answerable questions blank costs easy marks'],
        ['What to track in practice', 'Wrong-answer count relative to correct-answer count', 'Number of questions left unattempted that you could plausibly have solved'],
      ] },
      { type: 'paragraph', heading: 'Let your exam\'s scoring rules decide, not your gut', text: 'If your exam has no negative marking, or a very small one, attempting more questions is close to a free option: an educated guess costs you nothing you were not already risking. If the penalty is meaningful, the math changes: a wrong answer can wipe out the value of one or more correct answers elsewhere, so a guess only makes sense once you have genuinely narrowed the options. [Understanding negative marking](/blog/understanding-negative-marking) walks through exactly where that break-even point sits.' },
      { type: 'takeaways', items: [
        'The right speed-versus-accuracy balance depends on your exam\'s scoring rules, not a universal strategy.',
        'Track your wrong-answer count and your left-blank-but-solvable count separately in every mock; they point to opposite fixes.',
        'A rising wrong-answer count usually means slow down on borderline questions, not attempt fewer overall.',
        'A rising left-blank count on questions you could plausibly solve usually means you are being too cautious, not too fast.',
      ] },
      { type: 'callout', text: 'A wrong-answer count that keeps climbing tells you to slow down. A left-blank count full of questions you could plausibly have solved tells you to loosen up. Most aspirants only ever look at one of the two.' },
      { type: 'paragraph', heading: 'Diagnose which mistake you are actually making', text: 'After every mock, split your misses into two piles: questions you attempted and got wrong, and questions you left blank that you could plausibly have answered with a bit more time. If the first pile is larger, you are moving faster than your accuracy supports and need to slow down on borderline calls. If the second pile is larger, you are being too cautious and leaving recoverable marks on the table. Most aspirants only ever look at their overall score and miss which of these two patterns is actually driving it.' },
      { type: 'paragraph', text: 'Once you know which side of the trade-off you tend to fall on, [time management tips for the exam hall](/blog/time-management-during-the-exam) covers the practical pacing habits that fix it during the actual test.' },
    ],
    faqs: [
      { q: 'Should I always try to attempt every question?', a: 'Only if your exam has little or no negative marking. With meaningful negative marking, attempting a question you cannot narrow down at all can cost you more than skipping it, so the right approach depends on your exam\'s scoring rules.' },
      { q: 'How do I know if I am being too fast or too cautious?', a: 'Split your mock test mistakes into two piles: questions you attempted and got wrong, and questions you left blank that you could plausibly have solved with more time. A larger first pile means slow down; a larger second pile means you are being overly cautious.' },
      { q: 'Does negative marking change the right speed-accuracy balance?', a: 'Yes. A meaningful negative-marking penalty means a wrong guess can cost more than a correct answer earns, which pushes the right balance toward accuracy over raw attempt count. See understanding negative marking for the exact math.' },
      { q: 'Is a slower, more accurate approach always safer?', a: 'Not necessarily. If your exam barely penalizes wrong answers, being overly cautious just means leaving recoverable marks unattempted. The right balance is specific to your exam\'s scoring rules, not a universally safer choice.' },
    ],
  },
  {
    slug: 'how-to-build-an-error-log',
    title: 'How to Build an Error Log and Actually Use It',
    excerpt: 'A single mock test review tells you what went wrong once. An error log, kept and reviewed across every test, tells you what keeps going wrong.',
    category: 'Study Tips',
    readTimeMin: 5,
    publishedAt: '2026-08-14',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'error log for exam preparation',
    image: {
      src: '/images/blog/how-to-build-an-error-log.webp',
      alt: 'Indian student recording recurring mock-test mistakes in an error log',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'An error log, a running record you keep across every test you take, tells you what keeps going wrong, which is different from reviewing a single mock test, which only tells you what went wrong on that one test. That distinction matters, because a mistake that shows up once is noise; a mistake that shows up in four out of your last five tests is a pattern worth fixing directly.' },
      { type: 'paragraph', heading: 'What actually belongs in an error log', text: 'Keep it simple enough that you will actually maintain it: for every question you got wrong or left blank, note the topic, why you missed it in one short phrase (calculation slip, misread the question, did not know the concept, ran out of time), and the date. That third field, the reason, is what turns a list of wrong answers into a diagnostic tool.' },
      { type: 'table', heading: 'Four common reasons, and what each one actually needs', headers: ['Reason you missed it', 'What it usually means', 'What actually fixes it'], rows: [
        ['Did not know the concept', 'A real gap in preparation', 'Go back to the topic and relearn it, not just note the correct answer'],
        ['Misread the question', 'A reading or attention slip, not a knowledge gap', 'Practice reading the full question before looking at the options'],
        ['Calculation or careless slip', 'Rushed execution under time pressure', 'Slow down slightly on that question type specifically, not across the board'],
        ['Ran out of time', 'A pacing problem, not an accuracy problem', 'Review your section-wise timing, not the specific question content'],
      ] },
      { type: 'takeaways', items: [
        'Log the topic, the reason you missed it, and the date for every wrong or skipped question, not just the correct answer.',
        'The reason field is what turns a wrong-answer list into a pattern you can actually fix.',
        'Review the log before every new mock test, not just after, so you watch for the same mistake recurring.',
        'A topic or reason that keeps repeating across tests is worth a dedicated study session, not another note in the log.',
      ] },
      { type: 'callout', text: 'A mistake that shows up once is noise. A mistake that shows up in four out of your last five tests is a pattern worth fixing directly.' },
      { type: 'paragraph', heading: 'Review it before your next test, not just after this one', text: 'Most aspirants only open their error log right after a mock, while it is fresh, and then forget it exists until the next review session. Flip that habit: skim your log for five minutes before starting your next mock too. Seeing "I keep misreading data interpretation questions" right before you sit down for another test makes you noticeably more alert to that exact failure mode while it is happening, not just after.' },
      { type: 'paragraph', heading: 'Watch for the same reason recurring across different topics', text: 'A pattern is not always tied to one topic. If "ran out of time" or "calculation slip" keeps appearing across several unrelated topics, the fix is not more content review, it is a pacing or accuracy habit that needs direct attention on its own. [Speed versus accuracy](/blog/speed-vs-accuracy-in-timed-tests) covers how to tell which of those two you are actually dealing with.' },
      { type: 'paragraph', text: 'An error log works alongside, not instead of, a full test review. Use [how to analyze your mock test performance](/blog/how-to-analyze-your-mock-test-performance) for the single-test breakdown, and let the error log show you what repeats across tests over time.' },
    ],
    faqs: [
      { q: 'What should I actually write down in an error log?', a: 'For every question you got wrong or left blank, note the topic, a short reason you missed it (did not know it, misread it, calculation slip, ran out of time), and the date. The reason is what makes the log useful, not just the topic.' },
      { q: 'How is an error log different from reviewing a single mock test?', a: 'A single test review shows what went wrong on that one attempt. An error log, kept across every test, shows which mistakes keep recurring over time, which is what tells you what is actually worth fixing.' },
      { q: 'When should I review my error log?', a: 'Both after a test, while the mistakes are fresh, and briefly before your next test, so you go in aware of the pattern you are watching for. Most aspirants only do the first and skip the second.' },
      { q: 'What if the same mistake keeps showing up across different topics?', a: 'That usually means the issue is not the content itself but a habit like pacing or careless slips under time pressure. That needs direct practice on the habit, not more revision of the topics where it happens to show up.' },
    ],
  },
  {
    slug: 'group-study-vs-solo-study',
    title: 'Group Study vs Solo Study: What Actually Works for Exam Prep',
    excerpt: 'The real question is not which one is better. It is which parts of your prep actually benefit from another person in the room, and which parts do not.',
    category: 'Study Tips',
    readTimeMin: 5,
    publishedAt: '2026-08-14',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'group study vs self study',
    image: {
      src: '/images/blog/group-study-vs-solo-study.webp',
      alt: 'Three Indian aspirants discussing a difficult practice question together',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'Group study and solo study rarely fail for the reasons people expect. Group study does not fail because groups are inherently distracting, and solo study does not fail because studying alone is inherently lonely. Both fail when they are applied to the wrong kind of task. The more useful question is not which one is better overall, but which parts of your prep actually benefit from another person being there.' },
      { type: 'paragraph', heading: 'Tasks that genuinely benefit from a group', text: 'Explaining a concept out loud to someone else, and having them push back with questions, exposes gaps that silent reading does not. If you cannot explain why an answer is correct in your own words to another person, you likely do not understand it as well as you think. Group settings are also useful for splitting up broad-syllabus subjects like general awareness, where each person tracking a different area and sharing summaries covers more ground than one person alone.' },
      { type: 'takeaways', items: [
        'Group study works well for explaining concepts aloud, discussing tricky questions, and dividing up broad-syllabus topics.',
        'Solo study works better for timed practice, deep problem sets, and anything that needs sustained, uninterrupted focus.',
        'Most aspirants do not need to choose one permanently; different tasks in the same week genuinely call for different modes.',
        'A study group only helps if everyone in it is at a similar stage and pace; a mismatched group usually slows the more prepared members down.',
      ] },
      { type: 'paragraph', heading: 'Tasks that genuinely need solo focus', text: 'A full-length mock test under real time pressure needs to be taken alone, since a group setting changes your actual timing behavior and defeats the purpose of the simulation. The same is true for deep problem sets in a weak topic, where working through the struggle yourself, rather than someone else showing you the shortcut too quickly, is what actually builds the skill.' },
      { type: 'callout', text: 'Group study does not fail because groups are distracting. Solo study does not fail because studying alone is lonely. Both fail when applied to the wrong kind of task.' },
      { type: 'paragraph', heading: 'A mismatched group usually costs the stronger student', text: 'A study group only helps when everyone in it is at a genuinely similar stage and pace. If one person is noticeably ahead, group sessions tend to slow that person down to the group\'s average speed, while the group itself may not catch up much faster either. If your current group feels like it is holding your pace back more often than it is teaching you something new, that is worth noticing rather than pushing through out of habit or social pressure.' },
      { type: 'paragraph', text: 'However you split your time, the mock tests themselves should stay solo and fully timed. Once you have a result, [how to analyze your mock test performance](/blog/how-to-analyze-your-mock-test-performance) is where group discussion is actually useful again, comparing what different people got wrong on the same paper.' },
    ],
    faqs: [
      { q: 'Is group study or solo study better for exam preparation?', a: 'Neither is universally better. Group study works well for explaining concepts aloud and dividing broad topics; solo study works better for timed mock tests and deep problem-solving that needs uninterrupted focus.' },
      { q: 'Should I take mock tests in a group?', a: 'No, take mock tests alone under full time pressure. A group setting changes your actual timing behavior, which defeats the purpose of simulating the real exam.' },
      { q: 'How do I know if my study group is actually helping me?', a: 'A study group helps most when everyone is at a similar stage and pace. If it consistently slows down your progress compared to studying that same material alone, it is worth reconsidering rather than continuing out of habit.' },
      { q: 'Can I mix both group and solo study in the same week?', a: 'Yes, and for most aspirants that is the more realistic approach. Use group sessions for discussion and dividing broad topics, and reserve solo, uninterrupted time for mock tests and difficult problem sets.' },
    ],
  },
  {
    slug: 'sectional-practice-or-full-mocks',
    title: 'Sectional Practice or Full Mocks: Choosing Your Next Test',
    excerpt: 'Neither one replaces the other. A sectional test fixes a specific weak area fast; a full mock tests whether your preparation holds up across an entire exam.',
    category: 'Mock Tests',
    readTimeMin: 5,
    publishedAt: '2026-08-14',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'sectional test vs full mock test',
    image: {
      src: '/images/blog/sectional-practice-or-full-mocks.webp',
      alt: 'Indian student comparing a sectional practice booklet with a full mock paper',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'Opening a test series and seeing both sectional tests and full mocks listed leaves a lot of aspirants defaulting to whichever one they took last time, without much thought about which one their preparation actually needs right now. The two serve different purposes, and picking between them is really a question about what you are trying to find out this week.' },
      { type: 'paragraph', heading: 'What a sectional test is actually good for', text: 'A sectional test isolates one part of the exam and lets you drill it without the rest of the paper competing for your time and attention. That makes it the right choice right after you have identified a specific weak section, whether from an error log or a full mock review, and want to work on it directly without three other sections diluting the practice.' },
      { type: 'table', heading: 'Sectional tests vs full mocks, at a glance', headers: ['', 'Sectional test', 'Full mock'], rows: [
        ['Best used when', 'You have identified one specific weak section to drill', 'You want to check overall readiness or practice full-paper pacing'],
        ['What it measures well', 'Accuracy and speed within one section, in isolation', 'Time allocation and stamina across the entire paper'],
        ['What it cannot tell you', 'Whether your pacing across all sections together actually works', 'Which exact question types within a section you struggle with'],
      ] },
      { type: 'paragraph', heading: 'What only a full mock can actually tell you', text: 'A full mock is the only format that tests whether your section-by-section pacing plan holds up once you are tired from an earlier section, under a single combined timer, exactly as the real exam will run. A student who is strong in every section individually can still underperform on a full mock because time management across the whole paper, not knowledge in any one section, was the actual weak point. [Sectional lock vs composite timer](/blog/sectional-lock-vs-composite-timer) covers how your specific exam\'s timer format changes this calculation.' },
      { type: 'takeaways', items: [
        'Take a sectional test right after identifying one specific weak section you want to drill in isolation.',
        'Take a full mock when you want to check overall readiness, pacing, or how you hold up across the entire paper.',
        'A student strong in every section individually can still underperform on a full mock due to pacing, not knowledge.',
        'Neither format replaces the other; most well-prepared aspirants use both across their preparation, not one exclusively.',
      ] },
      { type: 'callout', text: 'A student who is strong in every section individually can still underperform on a full mock, because time management across the whole paper, not knowledge in any one section, was the actual weak point.' },
      { type: 'paragraph', heading: 'A simple way to decide which one you need next', text: 'If your last full mock or your error log points clearly at one weak section, take a sectional test on that section next: fix it in isolation before it costs you marks again on a full paper. If it has been a while since you tested your pacing and stamina across an entire exam, or you have not yet taken one at all, a full mock is overdue regardless of how confident you feel section by section.' },
      { type: 'paragraph', text: 'Once you have your result, [how to analyze your mock test performance](/blog/how-to-analyze-your-mock-test-performance) covers how to read a section-wise breakdown either way, and [how many mock tests should you actually take](/blog/how-many-mock-tests-should-you-take) covers how often to repeat either format as your exam gets closer.' },
    ],
    faqs: [
      { q: 'Should I take sectional tests or full mocks first?', a: 'There is no fixed order. Take a sectional test when you have identified a specific weak section to drill, and take a full mock when you want to check overall pacing and readiness across the entire paper.' },
      { q: 'Can I skip full mocks if I do well on every sectional test?', a: 'Not reliably. A full mock tests whether your pacing plan holds up across an entire paper under one combined timer, which strong individual section scores do not guarantee on their own.' },
      { q: 'How often should I alternate between the two?', a: 'It depends on where you are in your preparation and what your error log shows. As a general approach, use sectional tests to fix specific weak areas as you find them, and take a full mock periodically to check that your overall pacing still holds up.' },
      { q: 'Does the timer format change which one I should prioritize?', a: 'Yes. If your exam uses a strict sectional lock rather than one combined timer, section-by-section pacing matters even more, which makes sectional practice on your weakest section particularly valuable alongside full mocks.' },
    ],
  },
  {
    slug: 'preparing-general-awareness-without-drowning-in-current-affairs',
    title: 'General Awareness Without Drowning in Current Affairs',
    excerpt: 'General Awareness is often the highest-scoring section on paper, but only if you stop treating static GK and current affairs as the same kind of studying.',
    category: 'Study Tips',
    readTimeMin: 5,
    publishedAt: '2026-08-14',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'how to prepare general awareness for competitive exams',
    image: {
      src: '/images/blog/preparing-general-awareness-without-drowning-in-current-affairs.webp',
      alt: 'Indian aspirant organizing static General Awareness and current-affairs study',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'General Awareness gets written off as "too random to prepare for" more than any other section, and it is usually the section aspirants start latest and study least deliberately. That is a mistake: static GK, the fixed, unchanging facts of history, geography, polity, and science, is entirely learnable, and it is what actually separates a strong GA score from a weak one, not how many current-affairs capsules you skimmed last week.' },
      { type: 'paragraph', heading: 'Static GK and current affairs are two different subjects, not one', text: 'Static GK does not change: the year the Reserve Bank of India was established, the constitutional article covering Fundamental Rights, the capital of a state. You can learn it once, revise it on a schedule, and it stays correct. Current affairs is the opposite: a scheme announced last month, an appointment made last week, a report released this quarter. Studying both the same way, as one undifferentiated pile of facts to memorize once, is why current affairs feels overwhelming and static GK feels neglected even though it is the easier of the two to actually master.' },
      { type: 'takeaways', items: [
        'Static GK does not change once learned; treat it as a fixed body of knowledge you revise on a schedule, not something you cram once.',
        'Current affairs has a shelf life; focus on the months closest to your exam date rather than trying to cover a full year evenly.',
        'A short daily habit beats an occasional long session for current affairs specifically, because the volume keeps arriving.',
        'Track what you get wrong in mock tests by topic area, not just by section, since GA mistakes cluster more than most sections.',
      ] },
      { type: 'paragraph', heading: 'Why static GK deserves your first pass', text: 'History, geography, polity, and basic science make up a large share of most General Awareness sections, and none of it expires. A fact learned six months before your exam is exactly as correct on exam day as a fact learned yesterday. That makes static GK the place where an hour buys the most: it is the portion of GA you can genuinely finish, in the sense of reaching real coverage, rather than an ever-refilling pile you can only sample from.' },
      { type: 'paragraph', heading: 'Current affairs needs a different rhythm', text: 'Because current-affairs facts have a shelf life, and most exams draw questions from roughly the months leading up to the exam date rather than the entire preceding year, a short, consistent daily habit beats an occasional marathon session. Reading one reliable news source for ten to fifteen minutes a day and noting anything that looks exam-relevant, a new scheme, an appointment, an index or report, adds up to real coverage over months in a way that a single weekend cramming session cannot replicate, since most of what you would cram is already several months stale by exam day.' },
      { type: 'callout', text: 'A fact learned six months before your exam is exactly as correct on exam day as a fact learned yesterday. Current affairs does not have that property, which is exactly why the two need different study habits.' },
      { type: 'paragraph', heading: 'Where mock tests fit into this', text: 'General Awareness mistakes in a mock test cluster more than mistakes in Quantitative Aptitude or Reasoning tend to, because GA questions are independent facts rather than a skill you apply repeatedly. If your error log shows you consistently missing polity questions but getting geography right, that is a much more useful signal than an overall GA percentage, since it tells you exactly where the next study session should go. [How to build an error log](/blog/how-to-build-an-error-log) covers how to track this by topic rather than just by section.' },
      { type: 'paragraph', text: 'Once your GA routine is running alongside the rest of your preparation, [how to build a study timetable that actually works](/blog/how-to-build-a-study-timetable) covers where a daily current-affairs slot fits without crowding out the sections that need longer, uninterrupted blocks.' },
    ],
    faqs: [
      { q: 'Is General Awareness worth preparing for, or is it too unpredictable?', a: 'The static portions, history, geography, polity, and basic science, are entirely learnable and do not change once you know them. Current affairs is genuinely less predictable, but a short daily reading habit covers it better than most aspirants assume.' },
      { q: 'How far back should I study current affairs for my exam?', a: 'Focus on the months closest to your exam date rather than trying to cover a full year evenly. Most exams draw current-affairs questions from recent months, so older material has a lower return on your study time.' },
      { q: 'Should I study static GK and current affairs the same way?', a: 'No. Static GK is a fixed body of facts you can learn once and revise on a schedule. Current affairs needs a short, consistent daily habit instead, since the material keeps arriving and older facts lose relevance.' },
      { q: 'How do I know which General Awareness topics I am actually weak in?', a: 'Track your mock test mistakes by topic, not just by overall GA score. A cluster of wrong answers in one area, like polity or geography, is a far more useful signal than a single percentage.' },
    ],
  },
  {
    slug: 'exam-day-checklist-what-to-carry',
    title: 'Exam Day Checklist: What to Carry and What Gets Rejected',
    excerpt: 'Months of preparation can be undone by a missing printout or a phone left in a pocket. Print the admit card and leave every device outside.',
    category: 'Exam Guides',
    readTimeMin: 4,
    publishedAt: '2026-08-14',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'exam day checklist what to carry',
    image: {
      src: '/images/blog/exam-day-checklist-what-to-carry-v2.webp',
      alt: 'Indian student reviewing printed papers in a navy folder before exam day',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'An exam day checklist exists because every year, some candidates who prepared well enough to clear an exam are turned away at the gate for reasons that had nothing to do with their preparation: a phone in a pocket, an admit card only saved on a phone screen, a photo ID that does not match the name on the application. None of that is about knowledge. It is entirely avoidable with a checklist you run through the night before, not the morning of.' },
      { type: 'takeaways', items: [
        'Print your admit card; a digital copy on your phone is not accepted at most exam centres.',
        'Bring a valid photo ID that matches the name on your application exactly, not a nickname or a shortened version.',
        'Leave every electronic device at home or in the car, including a switched-off phone and smartwatch.',
        'Arrive well before the gate-closing time stated on your admit card; late arrival is treated the same as absence at most exams.',
      ] },
      { type: 'paragraph', heading: 'The admit card is not optional, and neither is the format', text: 'A printed hard copy of your admit card is the standard requirement across SSC, Banking, and Railways exams; a copy saved on your phone is routinely rejected even if it looks identical. Print it as soon as it is released, check every field, your name, application number, exam centre address, exam slot and reporting time, against your application, and print a spare copy in case the first one gets damaged or lost.' },
      { type: 'paragraph', heading: 'Electronics are the single most common reason for a turned-away candidate', text: 'Mobile phones, smartwatches, calculators, and any other electronic device are prohibited inside the exam hall at every major competitive exam in India, whether switched on or off. Leaving your phone in a bag outside the gate, rather than carrying it in and hoping it goes unnoticed, is the only reliable way to avoid this becoming the reason you do not get to sit the exam you spent months preparing for.' },
      { type: 'callout', text: 'A printed hard copy of your admit card is the standard requirement; a copy saved on your phone is routinely rejected even if it looks identical.' },
      { type: 'table', heading: 'What is typically allowed and what is not', headers: ['Usually allowed', 'Usually prohibited'], rows: [
        ['Printed admit card and a valid photo ID', 'Mobile phones and smartwatches, even switched off'],
        ['A basic pen, and a pencil and eraser if permitted', 'Calculators and other electronic devices'],
        ['A simple analogue wristwatch, where permitted', 'Study material, notebooks, or preparation books'],
        ['A transparent water bottle, where permitted', 'Wallets, handbags, and packaged or open food'],
      ] },
      { type: 'paragraph', heading: 'The exact rules still vary by exam, so verify your own admit card', text: 'The table above reflects rules common across most competitive exams in India, but the precise list of permitted items, and details like which pen colour is required, varies by exam and sometimes by cycle. Your own admit card and the exam\'s official notification always state the definitive list for that specific exam; treat this checklist as a starting point for what to double-check, not a substitute for reading your own admit card. [Document verification: what to expect](/blog/document-verification-what-to-expect) covers the next stage after a written exam, where the same kind of document precision matters again.' },
      { type: 'paragraph', text: 'Once the logistics are handled, the last stretch of preparation is about the material itself. [Revising in the final week before your exam](/blog/revising-in-the-final-week-before-your-exam) covers what to actually do with your remaining study time once your exam-day checklist is sorted.' },
    ],
    faqs: [
      { q: 'Can I use a digital copy of my admit card instead of printing it?', a: 'No, at most exam centres a printed hard copy is required and a digital copy on your phone is rejected even if it displays correctly. Print your admit card as soon as it is released, and keep a spare copy.' },
      { q: 'Are mobile phones allowed inside the exam hall if switched off?', a: 'No. Phones and other electronic devices are prohibited inside the exam hall at every major competitive exam in India regardless of whether they are switched on or off. Leave your phone outside the gate rather than carrying it in.' },
      { q: 'What happens if I arrive after the gate-closing time on my admit card?', a: 'At most exams, entry is not allowed after the stated gate-closing time under any circumstances, and late arrival is treated the same as not showing up. Plan to arrive well before that time, accounting for travel and security checks.' },
      { q: 'Do exam-day rules like permitted items vary between different exams?', a: 'Yes, the exact list of what you can carry, and details like required pen colour, varies by exam and sometimes by cycle. Always check your own admit card and the exam\'s official notification for the definitive list rather than assuming it matches a different exam.' },
    ],
  },
  {
    slug: 'building-vocabulary-without-rote-memorization',
    title: 'Building Exam Vocabulary Without Rote Memorization',
    excerpt: 'Memorizing word lists is the least efficient way to build usable vocabulary. Word families, roots, and reading in context work better and stick longer.',
    category: 'Study Tips',
    readTimeMin: 5,
    publishedAt: '2026-08-14',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'how to build vocabulary for competitive exams',
    image: {
      src: '/images/blog/building-vocabulary-without-rote-memorization.webp',
      alt: 'Indian student building vocabulary through reading and word families',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'Sitting down with a list of a thousand words and their meanings is the most common way aspirants try to build vocabulary for the English section, and it is also one of the least effective. Words memorized in isolation, without context, fade fast, and the exam rarely tests a word\'s dictionary definition anyway; it tests whether you can recognize how that word is being used in a sentence.' },
      { type: 'paragraph', heading: 'Why isolated word lists fade so quickly', text: 'A word learned as an entry on a list, disconnected from any sentence or context, has almost nothing anchoring it in memory. You can recognize it for a day or two, then it blurs into every other word on the same list. Words learned through reading, where you see them used, guess the meaning from context, and then confirm it, stick because they are attached to something: a sentence, an idea, a moment of figuring it out yourself.' },
      { type: 'takeaways', items: [
        'Learn words in context through reading, not as isolated entries on a list disconnected from any sentence.',
        'Study word families and roots together; one root often unlocks the meaning of five or six related words at once.',
        'Revisit new words on a spaced schedule instead of only the day you first encounter them.',
        'Practice usage, not just recognition, since most exams test a word inside a sentence, not its dictionary definition alone.',
      ]},
      { type: 'paragraph', heading: 'Word families multiply your return on effort', text: 'Many exam-relevant words share a Latin or Greek root, and learning the root gives you a shortcut into several related words at once instead of memorizing each separately. Someone who learns that "bene" relates to good or well already has a running start on benefit, benevolent, benefactor, and beneficial, four words for close to the cost of learning one. This is a far better use of limited study time than working through an alphabetical list, where each word is unrelated to the last.' },
      { type: 'callout', text: 'Someone who learns that "bene" relates to good or well already has a running start on benefit, benevolent, benefactor, and beneficial, four words for close to the cost of learning one.' },
      { type: 'paragraph', heading: 'Reading does more work than a word list ever will', text: 'Regularly reading a newspaper editorial, a long-form article, or any reasonably sophisticated writing exposes you to unfamiliar words inside real sentences, where you can guess at meaning from context before checking a dictionary. That guess-then-confirm cycle is a form of active recall: you produce the meaning before you check it, which holds far better than rereading a definition you never had to retrieve. It also builds reading comprehension at the same time, which most exams test directly.' },
      { type: 'paragraph', heading: 'Spacing your review beats cramming a list once', text: 'A word reviewed only once, on the day you first learned it, is one you are likely to forget within a few days regardless of how memorable it felt at the time. Revisiting new words after a day, then a few days, then a couple of weeks, keeps them in working memory far more reliably than a single long session ever does. [Spaced repetition: how to actually remember what you study](/blog/spaced-repetition-how-to-actually-remember-what-you-study) covers exactly why spacing out review works and how to build it into a routine that does not need a dedicated app.' },
      { type: 'paragraph', text: 'Vocabulary is one piece of English preparation among several. Once it is part of your routine, [how to build a study timetable that actually works](/blog/how-to-build-a-study-timetable) covers where a short daily reading and review slot fits alongside your other sections.' },
    ],
    faqs: [
      { q: 'Is memorizing a word list an effective way to build vocabulary for exams?', a: 'It is one of the least efficient ways. Words learned in isolation, without context, fade quickly, and most exams test whether you can recognize a word used correctly in a sentence, not its dictionary definition alone.' },
      { q: 'What are word roots and why do they help with vocabulary?', a: 'Many exam-relevant words share a Latin or Greek root. Learning one root, like "bene" for good or well, gives you a head start on several related words at once, benefit, benevolent, beneficial, instead of memorizing each word separately.' },
      { q: 'Does reading actually help build vocabulary, or is it too slow?', a: 'Reading exposes you to new words inside real sentences, where you can guess the meaning from context before confirming it. That guess-then-confirm process aids retention more than passive review, and it improves reading comprehension at the same time.' },
      { q: 'How often should I review new vocabulary words to make them stick?', a: 'More than once. Reviewing a new word after a day, then again after a few days, then again after a couple of weeks keeps it in memory far more reliably than a single study session on the day you first learned it.' },
    ],
  },
  {
    slug: 'how-to-read-an-exam-notification',
    title: 'How to Read an Exam Notification Carefully',
    excerpt: 'Official notifications run to dozens of pages and bury the details that change your preparation. Check eligibility first, then dates, then pattern.',
    category: 'Exam Guides',
    readTimeMin: 6,
    publishedAt: '2026-08-14',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'how to read an exam notification',
    image: {
      src: '/images/blog/how-to-read-an-exam-notification.webp',
      alt: 'Indian aspirant reviewing an official exam notification carefully',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'The official notification is the single most authoritative document for any exam, and also the one most aspirants skim once and never open again. That is a mistake: notifications regularly change from one cycle to the next, in ways that directly affect eligibility, the exam pattern, or important dates, and a detail missed on page 14 does not stop mattering just because you did not read that far.' },
      { type: 'paragraph', heading: 'Start with eligibility, before anything else', text: 'Age limits, educational qualification, and any category-specific relaxations are usually stated early in the notification, and they are worth confirming even if you have applied for a similar exam before, since the exact age band and cutoff dates are set fresh each cycle and do change. Reading this section first avoids the worst outcome: preparing for months for an exam you were never eligible for in the first place.' },
      { type: 'takeaways', items: [
        'Check eligibility, age band, qualification, and category relaxations, first, since these are set fresh each cycle.',
        'Note every important date separately: application window, fee payment deadline, and the tentative exam date.',
        'Read the exam pattern and marking scheme in the notification itself, not from a secondhand summary elsewhere.',
        'Check the selection process end to end, since some exams have stages beyond the written exam that need separate preparation.',
      ] },
      { type: 'paragraph', heading: 'Dates are easy to skim past and expensive to miss', text: 'A notification typically lists several distinct dates: when the application window opens and closes, the fee payment deadline, and often a tentative exam date or window. These are not interchangeable, and missing the application deadline because you only remembered the exam date is one of the most avoidable ways to lose an attempt. Note every date somewhere you will actually see it again, not just in the notification you read once.' },
      { type: 'callout', text: 'Missing the application deadline because you only remembered the exam date is one of the most avoidable ways to lose an attempt.' },
      { type: 'paragraph', heading: 'Confirm the exam pattern from the notification itself', text: 'Section-wise question counts, marks, duration, and the negative marking scheme are all specified in the notification, and they can change between cycles even for an exam you have taken before. Reading this directly from the official document, rather than trusting a secondhand summary from a coaching site or a previous year\'s pattern, is exactly the kind of check that this site\'s own [exam pattern pages](/exams) are built around: every pattern shown here is sourced from the official notification and dated, so you can verify it against the primary source yourself.' },
      { type: 'paragraph', heading: 'Read the selection process end to end, not just the written exam', text: 'Some exams end at a single written test; others continue through a skill test, an interview, or document verification, each with its own eligibility and scheduling implications. Knowing the full selection process before you start preparing avoids the surprise of discovering, after clearing a written stage, that there is a further stage you have not prepared for at all. [Document verification: what to expect](/blog/document-verification-what-to-expect) covers what that particular stage typically involves once you reach it.' },
      { type: 'paragraph', text: 'Once you have confirmed the pattern from the notification, building a preparation plan around it is the next step. [How to build a study timetable that actually works](/blog/how-to-build-a-study-timetable) covers how to turn the section-wise breakdown from a notification into an actual weekly schedule.' },
    ],
    faqs: [
      { q: 'What should I check first when a new exam notification is released?', a: 'Eligibility, your age limit, educational qualification, and any category relaxations, before anything else. These are set fresh each cycle, so confirming them first avoids the worst outcome: preparing for an exam you are not actually eligible for.' },
      { q: 'Why does the exam pattern in a notification matter if I have taken a similar exam before?', a: 'Because section-wise question counts, marks, duration, and negative marking can change between cycles, even for an exam you have taken before. Reading the pattern directly from the current notification, not from memory or a secondhand summary, avoids preparing against an outdated pattern.' },
      { q: 'What dates does a typical exam notification include?', a: 'Usually the application window opening and closing dates, the fee payment deadline, and a tentative exam date or window. These are separate dates, and missing the application deadline while only tracking the exam date is a common and avoidable mistake.' },
      { q: 'Does every exam end with just a written test?', a: 'No, some exams continue with a skill test, an interview, or document verification after the written stage. Reading the full selection process in the notification before you start preparing avoids being unprepared for a later stage.' },
    ],
  },
  {
    slug: 'spaced-repetition-how-to-actually-remember-what-you-study',
    title: 'Spaced Repetition: How to Actually Remember What You Study',
    excerpt: 'Reviewing something once and moving on feels productive, but most of it is gone within days. Spacing out review is what actually makes it stick.',
    category: 'Study Tips',
    readTimeMin: 5,
    publishedAt: '2026-08-14',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'spaced repetition for exam preparation',
    image: {
      src: '/images/blog/spaced-repetition-how-to-actually-remember-what-you-study.webp',
      alt: 'Indian student scheduling spaced-repetition review cards',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'Spaced repetition, reviewing material again at increasing intervals instead of just once, is one of the highest-return habits an aspirant can build into an otherwise ordinary study routine. It works on an ordinary property of memory: most new information fades fast without reinforcement, and a large share of what you study today, if reviewed only once, is gone within days.' },
      { type: 'paragraph', heading: 'Why a single review session is not enough', text: 'Reading a topic once, understanding it in the moment, and moving on feels like progress, and in the short term it is. But memory without reinforcement decays quickly, and by the time you circle back weeks later during revision, much of it needs to be relearned almost from scratch. That relearning is wasted effort you could have avoided with two or three short review sessions spread out over the weeks in between instead of one long session up front.' },
      { type: 'takeaways', items: [
        'Review new material again within a day or two of first learning it, not weeks later.',
        'Space subsequent reviews further apart each time: a few days, then a couple of weeks, then a month.',
        'Active recall, testing yourself, works better than passive rereading at each review point.',
        'Apply this to formulas, vocabulary, and static GK facts; it is less useful for skills that need repeated practice instead.',
      ] },
      { type: 'paragraph', heading: 'The basic pattern: short, then longer, gaps', text: 'A simple spaced-repetition schedule reviews new material the next day, again after about a week, and again after two to four weeks. Each successful review signals that the information has moved further into stable memory, which is why the gap between reviews grows over time instead of staying fixed. You do not need a dedicated app to do this: a simple running list of what you studied and when, checked against a calendar, works just as well for most aspirants.' },
      { type: 'callout', text: 'Each successful review signals that the information has moved further into stable memory, which is why the gap between reviews grows over time instead of staying fixed.' },
      { type: 'paragraph', heading: 'Testing yourself beats rereading your notes', text: 'At each review point, trying to recall the fact or formula from memory first, before checking your notes, is more effective than simply rereading the same page again. This is active recall: the effort of retrieving something from memory is itself what strengthens that memory, in a way that passive rereading does not replicate no matter how many times you repeat it. A quick self-quiz using your own notes, or revisiting a mock test question you got wrong, works for this just as well as any dedicated flashcard tool.' },
      { type: 'paragraph', heading: 'Where this helps most, and where it does not', text: 'Spaced repetition works especially well for discrete facts: vocabulary, static GK, formulas, and constants, the kind of material covered in [preparing General Awareness without drowning in current affairs](/blog/preparing-general-awareness-without-drowning-in-current-affairs) and [building vocabulary without rote memorization](/blog/building-vocabulary-without-rote-memorization). It matters less for skills that improve mainly through repeated practice under time pressure, like solving reasoning puzzles or calculation-heavy quantitative questions, where regular mock-test practice does more of the work than spaced review of any single fact.' },
      { type: 'paragraph', text: 'Once spaced review is part of your routine, [how to build a study timetable that actually works](/blog/how-to-build-a-study-timetable) covers how to fit short review sessions into an already full weekly schedule without them crowding out new material.' },
    ],
    faqs: [
      { q: 'What is spaced repetition and how is it different from normal revision?', a: 'Spaced repetition means reviewing material again at increasing intervals, a day later, then a week, then a month, instead of studying it once and revisiting it only during a general revision phase weeks or months later.' },
      { q: 'Do I need an app to use spaced repetition?', a: 'No. A simple running list of what you studied and when, checked against a calendar, works for most aspirants. Dedicated flashcard apps can help but are not required to get the benefit.' },
      { q: 'Is spaced repetition useful for every subject in a competitive exam?', a: 'It works especially well for discrete facts like vocabulary, static GK, and formulas. It matters less for skills built mainly through repeated practice, like solving reasoning puzzles or calculation-heavy questions, where regular mock-test practice does more of the work.' },
      { q: 'Why does testing myself work better than rereading my notes at each review?', a: 'The effort of retrieving a fact from memory, called active recall, is what strengthens that memory. Passive rereading does not produce the same effect, even if you repeat it several times.' },
    ],
  },
  {
    slug: 'cat-vs-mat-vs-cmat-choosing-your-mba-entrance',
    title: 'CAT, MAT, CMAT, or a State MBA CET: Pick Your Exam',
    excerpt: 'MBA aspirants rarely sit just one exam. Sectional locks, marking schemes and question counts differ enough that a strategy for one can hurt you on another.',
    category: 'Exam Guides',
    readTimeMin: 7,
    publishedAt: '2026-08-19',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'cat vs mat vs cmat',
    image: {
      src: '/images/blog/cat-vs-mat-vs-cmat-choosing-your-mba-entrance.webp',
      alt: 'Indian MBA aspirant comparing several entrance-exam formats',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'CAT, MAT, CMAT, and the various state MBA CETs are rarely a choice between one exam and another: most MBA aspirants in India do not sit just one entrance exam, they sit four or five in the same admission cycle, because different institutes accept different scores. CAT is the one everyone has heard of, but the others are not lesser versions of it. Each mixes question count, timing, and marking scheme differently enough that a strategy built for one can actively hurt you on another.' },
      { type: 'takeaways', items: [
        'CAT and NMAT lock you into a section once you leave it or the clock runs out; MAT, SNAP, IBSAT, TANCET MBA, and KMAT Karnataka let you move freely between sections.',
        'Negative marking ranges from none at all (NMAT, IBSAT, KMAT Karnataka) to a full mark deducted per wrong answer (CMAT, JIPMAT), which changes how freely you should guess.',
        'CMAT and JIPMAT weight each correct answer at 4 marks; most of the rest weight every question at 1 mark, so a careless slip costs very differently across exams.',
        'MICAT is not one aptitude test, it is three: a qualifying psychometric section, a descriptive section, and only then the multiple-choice aptitude section most prep actually targets.',
      ] },
      { type: 'table', heading: 'How the major MBA entrances compare', headers: ['Exam', 'Questions', 'Duration', 'Marking', 'Sections locked?'], rows: [
        ['CAT', '~68 (varies by year)', '120 min', 'Mixed, roughly +3/-1', 'Yes, 3 sections, 40 min each'],
        ['MAT', '150', '120 min', '+1/-0.25', 'No'],
        ['CMAT', '100', '180 min', '+4/-1', 'No'],
        ['NMAT', '108', '120 min', '+3, no negative', 'Yes, 3 sections, own fixed timers'],
        ['SNAP', '60', '60 min', '+1/-0.25', 'No'],
        ['ATMA', '180', '180 min', '+1/-0.25', 'Yes, 6 sections, 30 min each'],
        ['MICAT (Section C)', '80', '80 min', '+1/-0.25', 'No'],
        ['IBSAT', '140', '120 min', '+1, no negative', 'No'],
        ['TANCET MBA', '100', '120 min', '+1/-0.25', 'No'],
        ['KMAT Karnataka', '120', '120 min', '+1, no negative', 'No'],
        ['JIPMAT', '100', '150 min', '+4/-1', 'No'],
      ] },
      { type: 'paragraph', heading: 'CAT and NMAT: the sectional lock changes your pacing entirely', text: 'On CAT, once your 40 minutes for a section end, or once you move to the next section yourself, there is no going back to finish a question you skipped. NMAT works the same way but with three different fixed timers per section (28, 40, and 52 minutes) rather than one equal split, and it also lets you choose the order of the three sections before you start, a genuine strategic choice most other exams do not offer. If you are used to skipping a hard question and returning to it later, which works fine on most of the other exams in the table above, that habit will cost you real marks on both of these.' },
      { type: 'paragraph', heading: 'The no-negative-marking group rewards a different kind of guessing', text: `NMAT, IBSAT and KMAT Karnataka deduct nothing for a wrong answer, so every question left blank is a mark you declined to try for and there is no reason to leave one. CMAT and JIPMAT do deduct, but far less than the figure sounds: both award 4 marks for a correct answer and take 1 off for a wrong one, so a wrong answer on CMAT or JIPMAT costs a quarter of a correct one, exactly the same penalty as an exam scoring +1 and deducting 0.25. A guess breaks even there at ${breakEvenPercent(0.25)}% accuracy while a blind pick between four options returns ${blindGuessPercent(4)}%, so even an uneducated guess is marginally worth taking. See [understanding negative marking](/blog/understanding-negative-marking) for why the deduction on its own tells you nothing.` },
      { type: 'callout', text: 'A wrong answer on CMAT or JIPMAT costs a quarter of a correct one, exactly the same penalty as an exam scoring +1 and deducting 0.25.' },
      { type: 'paragraph', heading: 'MICAT is three exams stapled together, and only one is multiple choice', text: 'MICAT starts with a 150-question psychometric section that is qualifying only, it has no scored right or wrong answer, followed by a 4-question descriptive, essay-style section. Only the third part, Section C, is the 80-question, 4-option aptitude test that most practice actually targets, covering Verbal Ability, Quantitative Ability and Data Interpretation, General Awareness, and Divergent and Convergent Thinking. If you are prepping for MICAT the same way you prep for CAT or MAT, you are covering roughly a third of what the exam day actually involves.' },
      { type: 'paragraph', heading: 'State-level options if you are staying close to home', text: 'TANCET MBA (Tamil Nadu, conducted by Anna University) and KMAT Karnataka both accept applications from students without a state-domicile requirement in most cases, and both skip negative marking or keep it light compared to CAT. If your target colleges are concentrated in one state, checking that state\'s CET first, before committing months to CAT-specific prep, can save you from over-preparing for a format you will not actually sit.' },
      { type: 'paragraph', text: 'Once you know which exam or exams you are actually sitting, [sectional lock vs composite timer, explained](/blog/sectional-lock-vs-composite-timer) is worth reading before your first full mock, since the pacing habit that works on a no-lock exam is the wrong one on CAT or NMAT. Practice tests for all eleven exams above, each matched to the section structure and marking scheme in the table, are available from the [exams directory](/exams).' },
    ],
    faqs: [
      { q: 'Which MBA entrance exam has the harshest negative marking?', a: 'CMAT and JIPMAT both deduct a full mark for every wrong answer, and both weight correct answers at 4 marks each, so a wrong guess costs more there than on exams like MAT, SNAP, TANCET MBA, or ATMA, which deduct only 0.25 marks per wrong answer.' },
      { q: 'Do NMAT and CAT use the same kind of sectional lock?', a: 'Both lock each section once you leave it or time runs out, but NMAT gives each of its three sections its own fixed timer (28, 40, and 52 minutes) and lets you choose the section order yourself, while CAT splits its total time into three equal 40-minute blocks in a fixed order.' },
      { q: 'What is MICAT Section C, and why is it not the whole exam?', a: 'Section C is the only part of MICAT that is a scored, multiple-choice aptitude test: 80 questions across Verbal Ability, Quantitative Ability and Data Interpretation, General Awareness, and Divergent and Convergent Thinking. Sections A and B, a qualifying psychometric test and a descriptive essay section, come first and are not multiple choice.' },
      { q: 'Should I prepare differently for TANCET MBA or KMAT Karnataka than for CAT?', a: 'Yes, mainly around pacing rather than content. Both let you move freely between sections with no sectional lock, and KMAT Karnataka has no negative marking at all, so the CAT habit of triaging within a fixed 40-minute block does not transfer directly.' },
    ],
  },
  {
    slug: 'ielts-vs-toefl-vs-pte-picking-your-english-test',
    title: 'IELTS, TOEFL, or PTE: Which English Test Should You Take?',
    excerpt: 'Universities do not all accept the same test, and the three differ more in format than in difficulty. Check your shortlist before you register.',
    category: 'Exam Guides',
    readTimeMin: 6,
    publishedAt: '2026-08-19',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'ielts vs toefl vs pte',
    image: {
      src: '/images/blog/ielts-vs-toefl-vs-pte-picking-your-english-test.webp',
      alt: 'Indian study-abroad aspirant comparing paper, audio, and speaking test formats',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'IELTS, TOEFL, and PTE all exist to answer the same question for a university admissions office: can this applicant study in English? None of them is objectively harder than the others, and picking one over another based on rumors about difficulty is usually the wrong reason. The real differences are format, delivery, and which universities on your shortlist actually accept which test.' },
      { type: 'takeaways', items: [
        'Check your target universities\' accepted-test list before choosing, not after. Not every program accepts all three, and some accept only two of them for certain degree levels.',
        'TOEFL\'s Reading section changed structure on 21 January 2026 and now includes a typed vocabulary task, Complete the Words, that is not multiple choice at all.',
        'PTE relies heavily on drag-and-drop and dropdown-selection question types that IELTS and TOEFL do not use in the same way.',
        'IELTS reports a band score from 1 to 9; TOEFL and PTE both report on their own separate numeric scales, so a "good score" means a different number on each.',
      ] },
      { type: 'paragraph', heading: 'IELTS: three passages, a band score, and a paper-like feel', text: 'IELTS Academic Reading gives you three passages of increasing difficulty, drawn from books, journals, magazines, and newspapers, for 40 questions total. Every correct answer scores 1 mark with no penalty for a wrong one, and your raw score out of 40 is converted to a band score from 1 to 9 using IELTS\'s own published table. It is available in both a paper-based and a computer-delivered format, which matters if you are more comfortable reading on paper than on a screen under time pressure.' },
      { type: 'paragraph', heading: 'TOEFL: adaptive, and now with a typed vocabulary task', text: 'Since 21 January 2026, TOEFL iBT Reading uses a two-stage adaptive design across three task types: Complete the Words, a vocabulary task where you type the missing letters of a word rather than select from options; Read in Daily Life, short practical texts with comprehension questions; and Read an Academic Passage, in the same academic-passage format IELTS and most students expect. Complete the Words alone can carry around 30 of the 50 scored items, so a TOEFL-specific vocabulary drill is not optional prep the way it might be for the other two tests.' },
      { type: 'paragraph', heading: 'PTE: fewer questions, but formats you cannot skim through', text: 'PTE Academic Reading runs as a single 32 to 41 minute timed block with 15 to 20 questions across five task types, including Re-order Paragraphs, where you drag sentences into the correct sequence, and two Fill in the Blanks formats that use dropdown word selection rather than typing or picking from a list of options. These formats reward careful, structural reading over speed-skimming, which is a genuinely different skill from working through three long passages in the IELTS format.' },
      { type: 'callout', text: 'None of the three is objectively harder. The real differences are format, delivery, and which universities on your shortlist actually accept which test.' },
      { type: 'paragraph', heading: 'What to check before you register', text: 'Start with your target programs\' admissions pages, not a forum thread, since accepted-test lists change and vary by degree level even within the same university. If a program accepts all three, the deciding factor becomes your own comfort: paper versus screen for IELTS, typed vocabulary recall for TOEFL, or structural drag-and-drop tasks for PTE. Test centre availability and how soon you need a result also matter in practice: some tests report results faster than others, which can matter if an application deadline is close.' },
      { type: 'paragraph', text: 'For healthcare-specific study or work abroad, [OET](/oet/mock-test) is a separate option built around medical and clinical scenarios rather than general academic English, worth checking if your destination program or licensing body accepts it in place of IELTS or TOEFL. Whichever test you land on, [how to handle exam day anxiety and stay calm under pressure](/blog/how-to-handle-exam-day-anxiety) applies just as much to a timed language test as it does to any other competitive exam.' },
    ],
    faqs: [
      { q: 'Is IELTS easier than TOEFL or PTE?', a: 'None of the three is objectively easier. They differ in format and delivery, three passages with a band score for IELTS, a two-stage adaptive design with a typed vocabulary task for TOEFL, and drag-and-drop and dropdown question types for PTE, and which one suits you depends on which format you handle better under time pressure, not raw difficulty.' },
      { q: 'What changed in the TOEFL Reading section in 2026?', a: 'Since 21 January 2026, TOEFL iBT Reading uses a two-stage adaptive design with a new task type, Complete the Words, where you type in missing letters rather than choose from multiple-choice options. This task alone can carry around 30 of the 50 scored items.' },
      { q: 'Can I take any of these three tests if I am not applying to an English-speaking country?', a: 'Yes, all three are accepted by many non-English-speaking country programs that teach in English, but the accepted-test list still varies by university and program, so check the specific admissions page rather than assuming.' },
      { q: 'Is PTE fully computer-delivered, unlike IELTS?', a: 'Yes, PTE Academic is delivered entirely on a computer. IELTS offers both a paper-based and a computer-delivered format depending on your test centre, while TOEFL iBT is computer-delivered only.' },
    ],
  },
  {
    slug: 'nda-vs-cds-vs-afcat-choosing-your-defence-entry',
    title: 'NDA, CDS, or AFCAT: Matching the Exam to Your Entry Path',
    excerpt: 'Age, education stage and which service you want decide this one more than exam difficulty does. AFCAT and INET also set per-section minimums.',
    category: 'Exam Guides',
    readTimeMin: 7,
    publishedAt: '2026-08-19',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'nda vs cds vs afcat',
    image: {
      src: '/images/blog/nda-vs-cds-vs-afcat-choosing-your-defence-entry.webp',
      alt: 'Indian defence aspirant comparing education-stage entry pathways',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'NDA, CDS, and AFCAT are matched to candidates by two things you cannot change through study, rather than by which exam suits your prep style the way MBA or engineering entrances are: your age and education stage, and which service and entry route you want. NDA is for candidates still in or just finishing Class 12; CDS and AFCAT are for graduates; the Agniveer written tests sit alongside a physical and medical process most other exams on this list do not have at all.' },
      { type: 'takeaways', items: [
        'NDA is for unmarried candidates after Class 12, roughly 16.5 to 19.5 years old; CDS and AFCAT require a completed or nearly completed degree.',
        'AFCAT and INET both carry a section-wise qualifying minimum, so a strong overall score is not enough if you fail one section outright.',
        'The Agniveer written tests (Army, Navy SSR, Air Force) sit inside a larger recruitment process with physical fitness and medical rounds that CDS, NDA, and AFCAT candidates do not go through in the same form.',
        'Negative marking ranges from 0.25 marks (Agniveer Vayu, Navy SSR) to a full one-third of a mark (NDA, CDS, Territorial Army), which changes how safe a guess really is.',
      ] },
      { type: 'table', heading: 'How the major written tests compare', headers: ['Exam', 'Questions', 'Duration', 'Marking', 'Note'], rows: [
        ['NDA Mathematics paper', '120', '150 min', '+2.5/-0.83', 'One of two papers; General Ability Test is separate'],
        ['CDS Elementary Mathematics', '100', '120 min', '+1/-0.33', 'One of the CDS papers'],
        ['AFCAT', '100', '120 min', '+3/-1', 'Four equal sections, no GK section on this site'],
        ['Territorial Army', '100', '120 min', '+1/-0.33', 'No Mathematics section in the current cycle'],
        ['INET', '100', '120 min', '+4/-1', 'Four sections, each with its own 40% qualifying minimum'],
        ['Agniveer Vayu', '100', '85 min', '+1/-0.25', 'English, Physics, Mathematics, Reasoning and General Awareness'],
        ['Navy Agniveer SSR', '100', '60 min', '+1/-0.25', 'Science, Mathematics, English, General Knowledge'],
      ] },
      { type: 'paragraph', heading: 'NDA: the earliest entry point, with two separate papers', text: 'NDA is open to unmarried candidates roughly 16.5 to 19.5 years old, which usually means candidates in Class 12 or just after. The written exam has two papers, Mathematics and a General Ability Test, and the Mathematics paper alone runs 120 questions for 300 marks in 2 hours 30 minutes, with 2.5 marks per correct answer and one-third of a mark, 0.83, deducted per wrong one. Because this is often a candidate\'s first competitive exam, the sectional pacing habits covered in [time management tips for the exam hall](/blog/time-management-during-the-exam) matter more here than the syllabus itself in the first few months of prep.' },
      { type: 'paragraph', heading: 'CDS and AFCAT: for graduates, with different marking philosophies', text: 'CDS Elementary Mathematics runs 100 questions for 100 marks in 2 hours, each question worth 1 mark with one-third deducted for a wrong answer, the same ratio as NDA. AFCAT weights each question at 3 marks with a full mark deducted for a wrong one, and splits 100 questions evenly across four sections worth 75 marks each: General Awareness, Verbal Ability in English, Numerical Ability, and Reasoning and Military Aptitude Test. INET, for Navy officer entry, goes further and requires a separate 40% qualifying minimum in each of its four sections, so a candidate who is strong overall but weak in one section specifically can still fail to qualify.' },
      { type: 'callout', text: 'A candidate who is strong overall but weak in one section specifically can still fail to qualify on INET, since each of its four sections carries its own 40% qualifying minimum.' },
      { type: 'paragraph', heading: 'Agniveer entries: a written test inside a longer process', text: 'The Agniveer written tests for the Army, Navy SSR, and Air Force (Agniveer Vayu) are shorter and less negatively marked than the officer-entry exams above, but the written test is only the first stage. Physical fitness tests and a medical examination follow, and unlike CDS or AFCAT, a strong written score does not carry as much weight on its own if the physical or medical stages are not cleared. If you are targeting Agniveer entry, treat the written prep as necessary but not sufficient, and start the physical fitness preparation on the same timeline, not after the written result.' },
      { type: 'paragraph', text: 'Whichever entry path you are on, [understanding negative marking](/blog/understanding-negative-marking) is worth reading before your first mock, since the deduction ratio here ranges from 0.25 to a full one-third of a mark depending on the exam, which changes the guessing math meaningfully. Mock tests for all seven exams above are available from the [defence exams directory](/exams/defence).' },
    ],
    faqs: [
      { q: 'What is the age difference between NDA and CDS eligibility?', a: 'NDA is open to unmarried candidates roughly 16.5 to 19.5 years old, typically in or just after Class 12. CDS requires a completed or nearly completed graduate degree, so most CDS candidates are several years older than most NDA candidates.' },
      { q: 'Does AFCAT have a General Knowledge section on this site?', a: 'The official AFCAT includes a General Awareness section worth 75 of the 300 total marks, but this site\'s mock test covers the three non-General-Awareness sections only, since General Awareness content requires the kind of ongoing current-affairs verification this site does not attempt to fabricate.' },
      { q: 'Why does INET require a qualifying minimum in every section?', a: 'INET is designed to screen for balanced ability across English, Reasoning and Numerical Ability, General Science and Mathematical Aptitude, and General Knowledge, rather than letting a strong section compensate for a weak one, so each of the four sections carries its own separate 40% qualifying minimum.' },
      { q: 'Is the Agniveer written test the only thing that decides selection?', a: 'No. The written test is followed by physical fitness tests and a medical examination, and all three stages matter for final selection, unlike CDS, NDA, or AFCAT, where the written and interview stages carry most of the weight.' },
    ],
  },
  {
    slug: 'clat-vs-ailet-vs-state-law-cets-first-timers-guide',
    title: 'CLAT, AILET, or a State Law CET: A Guide to Law Entrances',
    excerpt: 'Legal Reasoning weighs very differently across these exams, and AILET gives Logical Reasoning nearly half its paper. Section weights decide your prep split.',
    category: 'Exam Guides',
    readTimeMin: 6,
    publishedAt: '2026-08-19',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'clat vs ailet',
    image: {
      src: '/images/blog/clat-vs-ailet-vs-state-law-cets-first-timers-guide.webp',
      alt: 'Indian law aspirant comparing passage-based entrance-test formats',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'CLAT gets most of the attention because it is the single gateway to the National Law Universities, but it is not the only law entrance worth preparing for, and it is not even the one with the most Legal Reasoning questions on this list. If you are applying to more than one law school, which most serious candidates do, the section weightings below decide how you should split your prep time, not just your target score.' },
      { type: 'takeaways', items: [
        'AILET weights Logical Reasoning far more heavily than Legal Reasoning, the opposite emphasis from what most first-time candidates expect.',
        'SLAT has no negative marking at all, unlike CLAT, AILET, and both MH CET Law variants, all of which deduct 0.25 marks per wrong answer.',
        'The Maharashtra 5-Year and 3-Year LLB CETs are structured differently from each other, not just shorter or longer versions of the same paper.',
        'General Knowledge and Current Affairs is a meaningful chunk of every exam in this group except SLAT, and it is the one section none of these mock tests can responsibly cover.',
      ] },
      { type: 'table', heading: 'How the major law entrances compare', headers: ['Exam', 'Total questions', 'Duration', 'Marking', 'Legal Reasoning share'], rows: [
        ['CLAT UG', '120', '2 hours', '+1/-0.25', '30 of 120 questions'],
        ['AILET UG', '150', '2 hours', '+1/-0.25', '70 of 150 are Logical Reasoning, not Legal'],
        ['SLAT', '60', '60 min', '+1, no negative', '12 of 60 questions'],
        ['MH CET Law (5-Year LLB)', '120', '2 hours', '+1, no negative', '32 of 120 questions'],
        ['MH CET Law (3-Year LLB)', '120', '2 hours', '+1, no negative', '24 of 120 questions'],
      ] },
      { type: 'paragraph', heading: 'CLAT: five sections, and Legal Reasoning is only a quarter of it', text: 'CLAT UG splits 120 questions across five sections: English Language (24), Current Affairs and General Knowledge (28), Legal Reasoning (30), Logical Reasoning (26), and Quantitative Techniques (12). Legal Reasoning is the single largest section but still only a quarter of the paper, which surprises candidates who expect a law entrance to be mostly about law. Reading comprehension speed across all five sections, not just legal-passage familiarity, is what actually separates strong CLAT scores from average ones.' },
      { type: 'paragraph', heading: 'AILET: more Logical Reasoning than Legal Reasoning, by a wide margin', text: 'AILET UG runs 150 questions in the same 2 hours as CLAT but structures them very differently: English Language (50), Logical Reasoning (70), and Current Affairs and General Knowledge (30). Logical Reasoning alone is nearly half the paper, almost twice the weight of English and far more than Legal Reasoning gets on CLAT. A candidate who prepared heavily for CLAT\'s legal-passage-heavy format can be caught off guard by how reasoning-dominant AILET actually is.' },
      { type: 'callout', text: 'AILET weights Logical Reasoning at nearly half the paper, almost twice what English gets and far more than Legal Reasoning receives on CLAT.' },
      { type: 'paragraph', heading: 'SLAT: the only one with no negative marking', text: 'SLAT splits 60 questions evenly across five sections of 12 each: Logical Reasoning, Legal Reasoning, Analytical Reasoning, Reading Comprehension, and General Knowledge, and it is the only exam in this group with no negative marking at all. That changes the guessing calculus completely compared to CLAT or AILET: on SLAT, an unanswered question and a wrong guess cost exactly the same, nothing, so leaving a question blank has no advantage over a genuine attempt.' },
      { type: 'paragraph', heading: 'The two Maharashtra CET variants are not just longer and shorter versions of each other', text: 'MH CET Law for the 5-Year LLB weights Legal Aptitude and Legal Reasoning (32 questions) and Logical and Analytical Reasoning (32 questions) as its two largest sections, with General Knowledge and Current Affairs (24), English (24), and a small 8-question Mathematics Aptitude section rounding it out. The 3-Year LLB variant, for candidates who already hold a graduate degree, drops Mathematics Aptitude entirely and instead makes English the largest section at 40 questions, with General Knowledge and Current Affairs at 32. Preparing for one does not fully prepare you for the other.' },
      { type: 'paragraph', text: 'General Knowledge and Current Affairs is not covered in any of this site\'s mock tests for these exams, since that content needs continuous verification against real news events rather than a one-time fact check, and getting it wrong would do more harm than leaving it out. [Preparing General Awareness without drowning in current affairs](/blog/preparing-general-awareness-without-drowning-in-current-affairs) covers how to build that section on your own alongside the [law exams directory](/exams/law) for practice on everything that is covered here.' },
    ],
    faqs: [
      { q: 'Which law entrance has the most Legal Reasoning questions?', a: 'By raw count, MH CET Law (5-Year LLB) has 32 Legal Reasoning questions, the most of any exam in this group. By share of the total paper, CLAT UG comes closest, with Legal Reasoning making up a quarter of its 120 questions.' },
      { q: 'Is AILET mostly about legal knowledge like CLAT?', a: 'No. AILET UG weights Logical Reasoning far more heavily, 70 of its 150 questions, compared to Legal Reasoning\'s share on CLAT. English Language and Current Affairs and General Knowledge make up the rest of the paper.' },
      { q: 'Does SLAT have negative marking like CLAT?', a: 'No. SLAT has no negative marking at all, unlike CLAT, AILET, and both Maharashtra CET Law variants, which all deduct 0.25 marks per wrong answer.' },
      { q: 'Should I prepare the same way for the 5-Year and 3-Year Maharashtra Law CETs?', a: 'Not entirely. The 5-Year LLB CET includes an 8-question Mathematics Aptitude section that the 3-Year LLB CET drops entirely, and the 3-Year variant weights English and General Knowledge and Current Affairs more heavily instead.' },
    ],
  },
  {
    slug: 'ca-foundation-vs-cma-foundation-which-to-start-with',
    title: 'CA Foundation or CMA Foundation: Where Should You Start?',
    excerpt: 'Both are entry points into a chartered accounting career, but the Quantitative Aptitude papers are structured differently enough to change how you prepare.',
    category: 'Exam Guides',
    readTimeMin: 6,
    publishedAt: '2026-08-19',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'ca foundation vs cma foundation',
    image: {
      src: '/images/blog/ca-foundation-vs-cma-foundation-which-to-start-with.webp',
      alt: 'Indian commerce student comparing accounting and cost-management study paths',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'CA Foundation and CMA Foundation both sit at the entry point of a commerce professional career, run by ICAI and ICMAI respectively, and both include a quantitative paper that trips up students who assume it is just school-level math. The two papers are not the same length, the same duration, or weighted the same way, and neither is a smaller or easier version of the other.' },
      { type: 'takeaways', items: [
        'CA Foundation Paper 3 has twice as many questions as CMA Foundation Paper 3, in twice the time, but the same negative marking, 0.25 marks per wrong answer.',
        'CMA Foundation Paper 3 has no negative marking at all, which changes the guessing math compared to CA Foundation.',
        'CMA Foundation weights Statistics more heavily, roughly 60% of the paper, while CA Foundation splits Business Mathematics and Statistics evenly at 40 marks each.',
        'Neither exam requires choosing one path exclusively; some students sit both Foundation exams before deciding which professional track to continue.',
      ] },
      { type: 'table', heading: 'CA Foundation Paper 3 vs CMA Foundation Paper 3', headers: ['', 'CA Foundation Paper 3', 'CMA Foundation Paper 3'], rows: [
        ['Questions', '100', '50'],
        ['Duration', '2 hours', '1 hour'],
        ['Marking', '+1/-0.25', '+2, no negative'],
        ['Section split', 'Business Mathematics 40, Logical Reasoning 20, Statistics 40', 'Roughly 40% Business Mathematics, 60% Statistics'],
      ] },
      { type: 'paragraph', heading: 'CA Foundation Paper 3: three sections, evenly split between math and statistics', text: 'CA Foundation Paper 3, Quantitative Aptitude, runs 100 objective questions for 100 marks in 2 hours, split as Business Mathematics (40 marks), Logical Reasoning (20 marks), and Statistics (40 marks), with 0.25 marks deducted per wrong answer. The Logical Reasoning component is smaller than the other two but still worth preparing deliberately, since it is graded the same way as the calculation-heavy sections and an easy 20 marks to leave on the table if ignored.' },
      { type: 'paragraph', heading: 'CMA Foundation Paper 3: fewer questions, no negative marking, and Statistics-heavy', text: 'CMA Foundation Paper 3, Fundamentals of Business Mathematics and Statistics, runs 50 objective questions for 100 marks in just 1 hour, with no negative marking at all. Each question is worth more (2 marks each, against CA Foundation\'s 1 mark each), and the weighting leans harder into Statistics, roughly 60% of the paper, covering data representation, central tendency and dispersion, correlation and regression, probability, and index numbers and time series, against about 40% for Business Mathematics topics like arithmetic, algebra, and calculus.' },
      { type: 'callout', text: 'CMA Foundation Paper 3 has no negative marking at all, so an educated guess costs nothing there, while a wrong guess on CA Foundation Paper 3 costs 0.25 marks every time.' },
      { type: 'paragraph', heading: 'What this actually changes about your prep', text: 'If you are strong in Statistics specifically, correlation, regression, and probability, CMA Foundation\'s heavier weighting there plays to that strength, and the lack of negative marking means you can attempt every question with confidence rather than skipping the ones you are unsure of. If your math is broader but shallower across topics, CA Foundation\'s more even split across Business Mathematics, Logical Reasoning, and Statistics, plus its longer 2-hour window, gives you more room to work through calculation-heavy questions carefully rather than under CMA Foundation\'s tighter 1-hour pace with double the questions per hour.' },
      { type: 'paragraph', text: 'Beyond Paper 3, both Foundations lead into further-stage papers (CA Intermediate and Final, CMA Intermediate and Final) that this site does not yet cover, along with other entry routes into the same broad field like [ACET](/acet/mock-test) for actuarial science and [NISM](/nism/mock-test) for securities-market certification. [Speed vs accuracy: finding the right trade-off in timed tests](/blog/speed-vs-accuracy-in-timed-tests) is worth reading before your first mock on either paper, since CMA Foundation\'s no-negative-marking format rewards a different balance than CA Foundation\'s.' },
    ],
    faqs: [
      { q: 'Does CMA Foundation Paper 3 have negative marking like CA Foundation?', a: 'No. CMA Foundation Paper 3 has no negative marking at all, while CA Foundation Paper 3 deducts 0.25 marks for every wrong answer.' },
      { q: 'Which paper has more questions, CA Foundation or CMA Foundation Paper 3?', a: 'CA Foundation Paper 3 has 100 questions in 2 hours. CMA Foundation Paper 3 has 50 questions in 1 hour, so the pace per question works out similar even though the total count differs.' },
      { q: 'Is CMA Foundation more Statistics-heavy than CA Foundation?', a: 'Yes. CMA Foundation Paper 3 weights Statistics at roughly 60% of the paper, against Business Mathematics at about 40%. CA Foundation Paper 3 splits Business Mathematics and Statistics evenly at 40 marks each, with a separate 20-mark Logical Reasoning component.' },
      { q: 'Can I prepare for both CA Foundation and CMA Foundation at the same time?', a: 'Many students do, since the core mathematics overlaps substantially. The main adjustment is the marking scheme and pacing: CMA Foundation rewards attempting every question given its lack of negative marking, while CA Foundation calls for more selective guessing.' },
    ],
  },
  {
    slug: 'jee-main-vs-bitsat-vs-state-cets-engineering-prep',
    title: 'JEE Main, BITSAT, or a State CET: How Prep Differs',
    excerpt: 'The marking schemes alone range from no penalty to a full mark deducted, and one exam mixes multiple-choice with typed answers you cannot guess at.',
    category: 'Exam Guides',
    readTimeMin: 7,
    publishedAt: '2026-08-19',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'jee main vs bitsat',
    image: {
      src: '/images/blog/jee-main-vs-bitsat-vs-state-cets-engineering-prep.webp',
      alt: 'Indian engineering aspirant comparing three entrance-test formats',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'Most engineering aspirants in India sit JEE Main as a baseline and then add one or more institute or state exams depending on where they are actually likely to get a seat. The marking schemes across these exams are not a minor footnote, they range from no penalty for a wrong answer to a full mark deducted, and one exam mixes multiple-choice questions with numerical-entry answers that behave completely differently under guessing.' },
      { type: 'takeaways', items: [
        'SRMJEEE has no negative marking at all; BITSAT, VITEEE, AEEE, and MET all deduct 1 mark per wrong answer despite awarding different amounts for a correct one.',
        'JEE Main and MET both mix multiple-choice questions with numerical-entry answers in the same paper, which behave differently under guessing since there is nothing to eliminate.',
        'JEE Advanced adds question types JEE Main does not use at all: multi-select with partial credit, and matching-list questions.',
        'VITEEE only added negative marking in its 2026 pattern; earlier-year past papers and old advice that assume no penalty are now out of date.',
      ] },
      { type: 'table', heading: 'Marking scheme by exam', headers: ['Exam', 'Correct answer', 'Wrong answer', 'Format note'], rows: [
        ['JEE Main', '+4', '-1', '20 MCQ + 5 numerical-entry per subject'],
        ['JEE Advanced', '+3 to +4 (varies by type)', '-1 (0 for numerical)', 'Single-correct, multi-select, numerical, and matching-list'],
        ['BITSAT', '+3', '-1', '130-question Mathematics variant'],
        ['VITEEE', '+4', '-1', 'Negative marking added in the 2026 pattern'],
        ['SRMJEEE', '+1', 'None', 'PCM route; Biology route also available separately'],
        ['AEEE', '+3', '-1', 'Computer Based Test'],
        ['MET', '+4', '-1 (MCQ only)', '45 MCQ + 15 numerical-entry, no penalty on numerical'],
      ] },
      { type: 'paragraph', heading: 'JEE Main and JEE Advanced: the two are not the same test at a different difficulty', text: 'JEE Main gives each subject 20 multiple-choice questions plus 5 numerical-value questions answered by integer entry, with +4 for a correct answer and -1 for a wrong one in both sections. JEE Advanced, which only Main-qualified candidates sit, adds question formats Main does not use at all: 4 single-correct questions per subject (+3/-1), 4 multi-select questions that award partial credit (+4 maximum, -1 otherwise), 4 numerical-value questions (+4/0, no penalty), and 4 matching-list questions (+4/-1). Both Advanced papers are compulsory, and the multi-select partial-credit format specifically rewards knowing you are only certain about some of the correct options, rather than guessing at the rest.' },
      { type: 'paragraph', heading: 'BITSAT, VITEEE, AEEE: similar penalty, different reward', text: 'These three institute exams all deduct 1 mark for a wrong answer, but reward correct answers differently: BITSAT (this is the 130-question Mathematics variant, before its optional 12 extra questions) and AEEE both award 3 marks, while VITEEE awards 4. VITEEE\'s negative marking is new as of the 2026 pattern, replacing a no-penalty rule used in 2025, so any advice or old practice papers built around the earlier no-negative-marking version are no longer accurate for this year\'s exam.' },
      { type: 'callout', text: 'VITEEE\'s negative marking is new as of 2026, replacing a no-penalty rule used in 2025. Advice or practice papers built around the earlier version are no longer accurate.' },
      { type: 'paragraph', heading: 'SRMJEEE and MET: the two outliers', text: 'SRMJEEE, in its PCM route, has no negative marking at all, +1 for a correct answer and zero for a wrong or unanswered one, and is delivered as a Remote Proctored Online Mode exam rather than at a physical test centre. MET mixes formats like JEE Main does, 45 multiple-choice questions plus 15 numerical-entry questions, but only penalizes wrong multiple-choice answers; a wrong numerical entry costs nothing, the same treatment JEE Advanced gives its numerical-value questions. On both of these, a genuine guess on a multiple-choice question you cannot narrow down at all is a much safer bet than the equivalent guess on BITSAT, VITEEE, or AEEE.' },
      { type: 'paragraph', heading: 'What this means for your prep order', text: 'If you are preparing for JEE Main first and adding institute exams afterward, the marking-scheme differences above matter more than most students expect once a JEE Main score-per-attempt habit has to transfer to a different exam. A guessing strategy tuned for SRMJEEE\'s no-penalty format will lose you marks on BITSAT or VITEEE, and the numerical-entry sections on JEE Main and MET need their own separate accuracy check, since there is no multiple-choice option to eliminate down to a guess.' },
      { type: 'paragraph', text: 'See [understanding negative marking](/blog/understanding-negative-marking) for the general math behind when a guess is worth it, and the [engineering exams directory](/exams/engineering) for practice tests across JEE Main, JEE Advanced, BITSAT, VITEEE, SRMJEEE, AEEE, and MET, each matched to its actual marking scheme.' },
    ],
    faqs: [
      { q: 'Which engineering entrance exam has no negative marking?', a: 'SRMJEEE (PCM route) has no negative marking, awarding 1 mark for a correct answer and zero for a wrong or unanswered one. Every other exam in this comparison, JEE Main, JEE Advanced, BITSAT, VITEEE, AEEE, and MET, deducts marks for at least some wrong answers.' },
      { q: 'Did VITEEE always have negative marking?', a: 'No. Negative marking was introduced in VITEEE\'s 2026 pattern, replacing a no-negative-marking rule used in 2025. Practice papers or advice based on the earlier format are now out of date.' },
      { q: 'How is JEE Advanced different from JEE Main beyond just being harder?', a: 'JEE Advanced uses question formats JEE Main does not: multi-select questions with partial credit, and matching-list questions, alongside the single-correct and numerical-value formats both exams share. The marking scheme also varies by question type within the same paper.' },
      { q: 'Do numerical-entry questions get negative marking like multiple-choice questions?', a: 'It depends on the exam. JEE Main deducts 1 mark for a wrong numerical-entry answer, the same as its multiple-choice questions, while JEE Advanced and MET do not penalize a wrong numerical entry at all, only a wrong multiple-choice answer.' },
    ],
  },
  {
    slug: 'nata-vs-jee-main-paper-2-choosing-your-barch-entry',
    title: 'NATA or JEE Main Paper 2: Which B.Arch Entrance Do You Need?',
    excerpt: 'Almost every architecture college in India requires NATA, except those needing JEE Main Paper 2. Three IITs use JEE Advanced and a pass-or-fail AAT instead.',
    category: 'Exam Guides',
    readTimeMin: 6,
    publishedAt: '2026-08-20',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'nata vs jee main paper 2',
    image: {
      src: '/images/blog/nata-vs-jee-main-paper-2-choosing-your-barch-entry.webp',
      alt: 'Indian architecture aspirant comparing drawing and computer-based aptitude preparation',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'Most first-time B.Arch aspirants assume NATA is the one universal architecture entrance exam. It is not. The Council of Architecture requires either NATA or JEE Main Paper 2 for B.Arch admission, not both at once, and which one you actually need depends entirely on which colleges you are targeting. A small handful of IITs sit outside this rule altogether.' },
      { type: 'takeaways', items: [
        'NITs, IIITs, Schools of Planning and Architecture, and other CFTIs use JEE Main Paper 2 (Paper 2A) directly; NATA is not required for admission to these.',
        'Nearly every other Council of Architecture recognized B.Arch college, state government colleges, private colleges, and deemed universities, requires a NATA score instead.',
        'IIT Kharagpur, IIT Roorkee, and IIT (BHU) Varanasi require neither NATA nor JEE Main Paper 2 for B.Arch. They admit through JEE Advanced rank plus a separate pass or fail Architecture Aptitude Test (AAT).',
        'NATA has no negative marking at all. JEE Main Paper 2 deducts a full mark for a wrong objective answer.',
      ] },
      { type: 'table', heading: 'Which exam which college needs', headers: ['Exam', 'Who requires it', 'Format', 'Marking'], rows: [
        ['NATA', 'Most Council of Architecture recognized colleges outside the NIT/IIIT/CFTI system', 'Offline Drawing and Composition Test (Part A) plus a computer-based Mathematics and General Aptitude test (Part B), 200 marks over 3 hours', 'No negative marking'],
        ['JEE Main Paper 2A (B.Arch)', 'NITs, IIITs, SPAs, other CFTIs', 'Objective Mathematics (20 MCQ plus 5 numerical-value) and Aptitude Test (50 MCQ), plus a separate 100-mark offline Drawing Test', '-1 per wrong MCQ'],
        ['JEE Main Paper 2B (B.Planning)', 'NIT/IIIT/CFTI B.Planning courses', 'Mathematics, Aptitude Test, and Planning (25 MCQ), 400 marks total, fully objective, no separate drawing paper', '-1 per wrong MCQ'],
        ['JEE Advanced + AAT', 'IIT Kharagpur, IIT Roorkee, IIT (BHU) Varanasi B.Arch only', 'AAT is a 3-hour offline test of freehand drawing, geometrical drawing, and 3D perception, taken after qualifying JEE Advanced', 'No numeric score, pass or fail only'],
      ] },
      { type: 'paragraph', heading: 'NATA: two parts, no penalty for a wrong answer', text: 'The official NATA has an offline Drawing and Composition Test (Part A) and a computer-based Aptitude Test (Part B) that combines Mathematics with General Aptitude, together worth 200 marks across 3 hours, with no negative marking anywhere in the exam. NATA 2026 runs in two phases: Phase 1 offers weekly Friday and Saturday sessions from April to June, within which a candidate may attempt up to two times, and Phase 2 is a single weekend in August. A candidate who has already appeared in Phase 1 cannot also sit for Phase 2.' },
      { type: 'paragraph', heading: 'JEE Main Paper 2: objective questions plus a separate drawing paper, and real negative marking', text: 'JEE Main Paper 2A (B.Arch) pairs an objective Mathematics and Aptitude Test with a 100-mark offline Drawing Test scored separately, and unlike NATA, every wrong multiple-choice answer costs a full mark. Paper 2B (B.Planning) is fully objective with no drawing component at all, adding a 25-question Planning section on top of the same Mathematics and Aptitude Test content. Both papers run on the same NTA session calendar as JEE Main Paper 1, so if you are already sitting Paper 1 for B.Tech, adding Paper 2 does not mean a separate application cycle.' },
      { type: 'paragraph', heading: 'The IIT path skips both exams entirely', text: 'IIT Kharagpur, IIT Roorkee, and IIT (BHU) Varanasi do not use NATA or JEE Main Paper 2 for their B.Arch programmes at all. Admission runs through JEE Advanced, the same exam used for IIT B.Tech seats, followed by the Architecture Aptitude Test for candidates who qualify. AAT does not produce a score or a rank of its own; you either pass or fail it, and passing makes you eligible for a B.Arch seat allocation based on your JEE Advanced rank through JoSAA.' },
      { type: 'callout', text: 'AAT does not produce a score or a rank of its own. You either pass or fail it, and your JEE Advanced rank, not an AAT score, decides your seat.' },
      { type: 'paragraph', heading: 'What this means for your prep order', text: 'If NITs, IIITs, or SPAs are your only realistic targets, JEE Main Paper 2 alone covers you and NATA prep is optional. If you are also applying to state or private CoA-recognized colleges, you will need a NATA score too, since most of those colleges do not accept JEE Main Paper 2 at all. If an IIT B.Arch seat is the actual goal, your JEE Advanced Mathematics, Physics, and Chemistry preparation matters far more than either drawing exam, since AAT is a pass or fail gate you clear afterward, not a competitive score you build toward.' },
      { type: 'paragraph', text: 'This site\'s own mocks for both exams cover only the objectively gradable, self-contained portions: [JEE Main Paper 2B](/jee-main-paper-2/mock-test) covers the full official B.Planning objective structure, and [NATA Mathematics](/nata/mock-test) covers the Mathematics component of Part B on its own. Both exclude the Drawing Test, since it is hand-drawn and requires human evaluation and cannot be auto-graded, and NATA\'s General Aptitude component is excluded too, since it mixes visual perception and architectural-awareness content with no clean split from its safely self-authorable reasoning portion. See the [engineering exams directory](/exams/engineering) for practice tests across both.' },
    ],
    faqs: [
      { q: 'Do I need to take both NATA and JEE Main Paper 2 for B.Arch?', a: 'Only if you are targeting both kinds of colleges. NITs, IIITs, SPAs, and other CFTIs require JEE Main Paper 2, while nearly every other Council of Architecture recognized college requires NATA instead. Most candidates need only one, based on where they are applying.' },
      { q: 'Is there negative marking in NATA?', a: 'No. NATA has no negative marking anywhere in the exam. JEE Main Paper 2, by contrast, deducts a full mark for a wrong objective answer.' },
      { q: 'Can I get into an IIT for B.Arch through NATA or JEE Main Paper 2?', a: 'No. IIT Kharagpur, IIT Roorkee, and IIT (BHU) Varanasi require JEE Advanced qualification followed by a separate pass or fail Architecture Aptitude Test (AAT), not NATA or JEE Main Paper 2.' },
      { q: 'How many times can I attempt NATA in one year?', a: 'NATA runs in two phases. Phase 1 offers weekly sessions from April to June, within which you may attempt up to two times, and Phase 2 is a single weekend in August that you can only sit if you did not already appear in Phase 1.' },
    ],
  },
  {
    slug: 'sat-vs-act-choosing-your-us-admission-test',
    title: 'SAT or ACT: How the Two US Admission Tests Differ in 2026',
    excerpt: 'Colleges say they weigh both equally, but the exams aren\'t identical. One is adaptive and digital-only; the other lets you skip an entire section.',
    category: 'Exam Guides',
    readTimeMin: 6,
    publishedAt: '2026-08-21',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'sat vs act',
    image: {
      src: '/images/blog/sat-vs-act-choosing-your-us-admission-test.webp',
      alt: 'Indian student comparing digital and paper-based US admission test formats',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'Colleges that accept both the SAT and the ACT generally say they have no preference between the two, and official concordance tables exist specifically so an admissions office can compare a score on one against a score on the other. But the two tests are not built the same way, and the differences change how you should prepare more than most students expect.' },
      { type: 'takeaways', items: [
        'The Digital SAT is fully digital and section-adaptive: your second Reading and Writing or Math module is harder or easier depending on how you did on the first. The ACT is a fixed, non-adaptive form, still offered on paper as well as digitally.',
        'ACT Science has been optional since the 2026 Enhanced ACT rollout. You choose whether to include it at registration, and it is reported separately rather than folded into the 1 to 36 Composite score.',
        'The SAT has never had a standalone Science section. Scientific-reasoning content is woven into the Reading and Writing and Math sections instead.',
        'Neither test has negative marking, so every question is safe to attempt, but most four-year US colleges remain test-optional for Fall 2026, while a growing list of selective schools have reinstated score requirements.',
      ] },
      { type: 'table', heading: 'SAT vs ACT at a glance', headers: ['', 'Digital SAT', 'Enhanced ACT'], rows: [
        ['Format', 'Fully digital, section-adaptive', 'Fixed form, available on paper or digitally'],
        ['Core sections', 'Reading and Writing, Math', 'English, Math, Reading (Science optional)'],
        ['Science section', 'None; woven into other sections', 'Optional standalone section, reported separately'],
        ['Negative marking', 'None', 'None'],
        ['Composite scale', '400 to 1600 (200 to 800 per section)', '1 to 36, averaging English, Math, and Reading'],
      ] },
      { type: 'paragraph', heading: 'Adaptive digital vs a fixed form', text: 'The Digital SAT\'s Reading and Writing and Math sections are each split into two modules, and the second module\'s difficulty depends on how you performed on the first. That means early-module accuracy matters more than it would on a fixed-difficulty test, since a rough start narrows the ceiling on what the second module can score you. The ACT, even in its Enhanced 2026 form, stays a fixed-difficulty form throughout, and it is still offered on paper in addition to a digital option, unlike the SAT which is digital-only.' },
      { type: 'paragraph', heading: 'The Science section is where the two tests genuinely diverge', text: 'The SAT has never included a standalone Science section at all; scientific-reasoning content, reading a graph, drawing a conclusion from an experiment, is folded into the Reading and Writing and Math sections instead. The ACT\'s Science section, testing data interpretation and reasoning from passages rather than memorized facts, became optional with the 2026 Enhanced ACT rollout: you choose at registration whether to sit it, and it no longer factors into the core 1 to 36 Composite, which is now based on English, Math, and Reading alone.' },
      { type: 'callout', text: 'Given the two optional sections of the new Enhanced ACT, there is significant variation in how individual colleges handle superscoring and how they read a Science-inclusive versus Science-only score report.' },
      { type: 'paragraph', heading: 'Neither test penalizes a wrong answer, but scoring policies still vary by college', text: 'Both tests award zero for an unanswered or wrong question rather than deducting marks, so a genuine guess never costs you anything on either exam. Where they diverge is what colleges do with the score afterward: SAT and ACT scores are treated as equivalent through official concordance tables, but for Fall 2026, more than 90% of ranked four-year colleges remain test-optional, while a growing list of selective schools, including MIT, Harvard, Yale, Stanford, and Dartmouth, have reinstated score requirements, and some states (Florida for all first-time-in-college applicants, several major Georgia public universities) require a score outright. Check each target college\'s current policy directly rather than assuming last year\'s rule still applies.' },
      { type: 'paragraph', heading: 'What this means for your prep order', text: 'If you are deciding between the two from scratch, the adaptive-versus-fixed distinction matters more than most other differences: the SAT rewards a strong, steady first module more than the ACT\'s fixed form does, where every question carries the same weight regardless of position. If any target college still wants a Science-inclusive ACT score, or you are unsure which colleges you will end up applying to, sit the Science section anyway. Skipping it removes a data point you might need later, and you cannot add it back onto an already-taken test date.' },
      { type: 'paragraph', text: 'Since neither test penalizes a wrong answer, the real lever is accuracy under time, not guessing strategy; see [speed vs accuracy in timed tests](/blog/speed-vs-accuracy-in-timed-tests) for how to think about that trade-off. Practice tests for all [SAT](/sat/mock-test) and [ACT](/act/mock-test) sections are available from the [study abroad exams directory](/exams/study-abroad).' },
    ],
    faqs: [
      { q: 'Is the SAT harder than the ACT?', a: 'There is no consistent evidence either way. The two tests differ mainly in format, the SAT is digital and section-adaptive while the ACT is a fixed form, not in overall difficulty, and official concordance tables let colleges compare a score on one directly against a score on the other.' },
      { q: 'Do I have to take the ACT Science section?', a: 'No. Science has been optional since the 2026 Enhanced ACT rollout. You choose whether to include it when you register, and it is reported separately rather than counted into the core 1 to 36 Composite score.' },
      { q: 'Does the SAT have a Science section?', a: 'No. The SAT has never had a standalone Science section. Scientific-reasoning content, reading data and drawing conclusions from an experiment, is folded into the Reading and Writing and Math sections instead.' },
      { q: 'Are US colleges still test-optional in 2026?', a: 'Most are. Over 90% of ranked four-year colleges remain test-optional for Fall 2026, but a growing list of selective schools, including MIT, Harvard, Yale, Stanford, and Dartmouth, have reinstated SAT or ACT score requirements, so check each target college\'s current policy directly.' },
    ],
  },
  {
    slug: 'rrb-ntpc-vs-group-d-vs-je-vs-alp-choosing-your-railway-exam',
    title: 'RRB NTPC, Group D, JE, or ALP: Which Exam Fits You?',
    excerpt: 'The starting point isn\'t the syllabus, it\'s what you\'re eligible for. A Class 10 pass, ITI certificate, diploma, or degree each points to a different exam.',
    category: 'Exam Guides',
    readTimeMin: 7,
    publishedAt: '2026-08-21',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'rrb ntpc vs group d',
    image: {
      src: '/images/blog/rrb-ntpc-vs-group-d-vs-je-vs-alp-choosing-your-railway-exam.webp',
      alt: 'Indian railway aspirant comparing four qualification-based job pathways',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'RRB NTPC, Group D, Junior Engineer, and Assistant Loco Pilot are often discussed together as "the railway exams," but which of the four you are even eligible for is usually decided before you open a single practice paper. Your existing qualification, Class 10 pass, ITI, diploma, or degree, narrows the field first; exam difficulty is a secondary concern.' },
      { type: 'takeaways', items: [
        'Group D needs only a Class 10 pass; ALP needs Class 10 plus ITI, apprenticeship, or a diploma or degree in a specified engineering trade; NTPC splits into an Undergraduate track (12th pass) and a Graduate track (bachelor\'s degree); JE needs a diploma or B.Tech in a relevant engineering branch.',
        'Group D alone carries a Physical Efficiency Test after the written exam: men must carry 35 kg for 100 metres in 2 minutes and run 1000 metres in 4 minutes 15 seconds; women must run 1000 metres in 5 minutes 40 seconds. None of the other three exams has an equivalent physical round tied to the written CBT stages.',
        'ALP is the only one of the four with a Computer Based Aptitude Test (CBAT), a psychometric battery scored on a T-Score rather than a knowledge test, weighted equally with CBT 2 Part A in final merit.',
        'All four use the same negative marking, one-third of a mark deducted per wrong answer, so the guessing math is identical across all four even though eligibility, structure, and what happens after the written stage are not.',
      ] },
      { type: 'table', heading: 'CBT structure and what follows it', headers: ['Exam', 'Minimum qualification', 'CBT 1 / CBT questions', 'Duration', 'What comes after'], rows: [
        ['RRB NTPC', '12th pass (UG posts) or a bachelor\'s degree (Graduate posts)', '100', '90 min', 'CBT 2 (post-specific, harder), then a typing skill test or CBAT depending on the post, then document verification'],
        ['RRB Group D', '10th pass', '100', '90 min', 'Physical Efficiency Test (qualifying only), then document verification and a medical exam'],
        ['RRB Junior Engineer', 'Diploma or B.Tech in a relevant engineering branch', '100', '90 min', 'CBT 2 with branch-specific technical questions, then document verification and a medical exam'],
        ['RRB ALP', '10th pass plus ITI or apprenticeship, or a diploma or degree in a specified engineering trade', '75', '60 min', 'CBT 2 (Part A common, Part B trade-specific for ITI candidates), then CBAT, then document verification and a medical exam'],
      ] },
      { type: 'paragraph', heading: 'NTPC: two eligibility tracks, and a real fork after the written exam', text: 'RRB NTPC splits into an Undergraduate track open to 12th pass candidates and a Graduate track that needs a completed bachelor\'s degree, with CBT 2 conducted separately and at a harder level for each. What happens after CBT 2 also differs by the specific post: some posts, like Junior Clerk cum Typist, require a typing skill test (300 words in 10 minutes in English, or 250 words in 10 minutes in Hindi on a Kruti Dev keyboard), while others, like Station Master or Traffic Assistant, require the CBAT aptitude battery instead. Two candidates who both clear NTPC CBT 2 can still face completely different final hurdles depending on which post they applied for. The [RRB NTPC syllabus](/rrb-ntpc/syllabus) sets out what both tracks are examined on before that fork.' },
      { type: 'paragraph', heading: 'Group D: the only one of the four with a written-plus-physical gate', text: 'RRB Group D\'s CBT covers General Science, Mathematics, General Intelligence and Reasoning, and General Awareness and Current Affairs in a single 90-minute paper, and clearing it is only the first gate. The Physical Efficiency Test that follows is qualifying only, it adds no marks to your CBT score, but failing to meet the running or weight-carrying standard disqualifies you outright regardless of how well you scored on the written exam. None of NTPC, JE, or ALP\'s CBT stages carry an equivalent physical requirement tied directly to the written round in the same way.' },
      { type: 'callout', text: 'The Physical Efficiency Test adds no marks to your CBT score, but failing to meet the standard disqualifies you outright regardless of how well you scored on the written exam.' },
      { type: 'paragraph', heading: 'JE and ALP: engineering qualifications, and two very different second stages', text: 'RRB JE requires a diploma or B.Tech in a relevant engineering branch, and its CBT 2 tests branch-specific technical questions alongside General Awareness, Physics and Chemistry, Basics of Computer Applications, and Basics of Environment and Pollution Control, so what you actually study for CBT 2 depends on your own engineering discipline. RRB ALP takes ITI, apprenticeship, or engineering diploma or degree holders and, uniquely among these four exams, adds a Computer Based Aptitude Test after CBT 2: a psychometric battery covering memory, following directions, perceptual speed, and similar tests, scored on a T-Score with a minimum of 42 required in each battery, and weighted equally with CBT 2 Part A in final merit rather than being a simple qualifying hurdle.' },
      { type: 'paragraph', heading: 'What this means for your prep order', text: 'Start from what you are already eligible for, which is set out in full on the [RRB Group D eligibility](/rrb-group-d/eligibility) page, rather than from which exam sounds more attractive. If you hold only a Class 10 certificate, Group D is your entry point, and physical fitness preparation should start on the same timeline as your written prep, not after the CBT result. If you have an ITI certificate or engineering diploma, ALP adds a genuinely different final stage, the CBAT, that rewards a different kind of preparation than either CBT paper does. If you are a graduate, NTPC\'s Graduate track and JE are both open to you, but JE only if your degree is in a relevant engineering branch.' },
      { type: 'paragraph', text: 'The [SSC vs Banking vs Railways](/blog/ssc-vs-banking-vs-railways-choosing-your-path) comparison covers how Railways exams differ from SSC and Banking as a family; this one is about choosing between the four Railways exams themselves. Since negative marking is identical across all four here, one-third of a mark per wrong answer, [understanding negative marking](/blog/understanding-negative-marking) applies equally whichever one you sit. Practice tests for [RRB NTPC](/rrb-ntpc/mock-test), [RRB Group D](/rrb-group-d/mock-test), [RRB JE](/rrb-je/mock-test), and [RRB ALP](/rrb-alp/mock-test) are available from the [government exams directory](/exams/government-jobs).' },
    ],
    faqs: [
      { q: 'Which railway exam can I take with only a Class 10 pass?', a: 'RRB Group D needs only a Class 10 pass. RRB ALP also accepts Class 10 pass candidates, but only alongside an ITI certificate, apprenticeship, or a diploma or degree in a specified engineering trade, not a Class 10 pass on its own.' },
      { q: 'Does RRB NTPC have the same eligibility for every post?', a: 'No. NTPC splits into an Undergraduate track open to 12th pass candidates and a Graduate track that requires a completed bachelor\'s degree, and CBT 2 is conducted separately, at a harder level, for each track.' },
      { q: 'Which railway exam has a physical fitness test?', a: 'RRB Group D. Its Physical Efficiency Test comes after the CBT and is qualifying only, adding no marks, but failing it disqualifies you regardless of your written score. NTPC, JE, and ALP do not have an equivalent physical round tied to their CBT stages.' },
      { q: 'What is the CBAT in RRB ALP, and is it a knowledge test?', a: 'No, it is a psychometric aptitude battery, not a knowledge test, covering memory, following directions, perceptual speed, and similar tasks. It is scored on a T-Score with a minimum of 42 required in each battery, and it is weighted equally with CBT 2 Part A in ALP\'s final merit, unlike a simple qualifying round.' },
    ],
  },
  {
    slug: 'ssc-cgl-vs-chsl-vs-mts-choosing-the-right-ssc-exam',
    title: 'SSC CGL, CHSL, or MTS: Which Matches Your Qualification?',
    excerpt: 'All three lead to a central government job, but your qualification decides which you can sit, and MTS runs its written exam in a genuinely different structure.',
    category: 'Exam Guides',
    readTimeMin: 6,
    publishedAt: '2026-08-22',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'ssc cgl vs chsl vs mts',
    image: {
      src: '/images/blog/ssc-cgl-vs-chsl-vs-mts-choosing-the-right-ssc-exam.webp',
      alt: 'Indian SSC aspirant matching education levels to exam options',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'SSC CGL, SSC CHSL, and SSC MTS are often grouped together as "the SSC exams," but they are not interchangeable options you pick between freely. Your current educational qualification decides which of the three you can even apply for, and once you are in the exam hall, MTS in particular runs on a structure the other two do not share at all.' },
      { type: 'takeaways', items: [
        'SSC CGL needs a bachelor\'s degree, SSC CHSL needs a 12th pass, and SSC MTS needs only a 10th pass, so most candidates are only actually eligible for one or two of the three at any given time.',
        'SSC MTS runs as two mandatory sessions on the same day, and Session 2 (General Awareness and English) is only evaluated for candidates who clear the qualifying Session 1 (Numerical and Reasoning) first.',
        'SSC MTS Session 1 has no negative marking at all, while Session 2 deducts a full mark per wrong answer, a split scoring rule neither CGL nor CHSL uses.',
        'SSC CGL Tier 1 locks you into 15 minutes per subject; SSC CHSL Tier 1 uses one composite 60-minute timer instead, even though both cover the same four subjects at the same 100Q/200-marks scale.',
      ] },
      { type: 'table', heading: 'SSC CGL vs CHSL vs MTS at a glance', headers: ['', 'Minimum qualification', 'Written test', 'Timer'], rows: [
        ['SSC CGL Tier 1', 'Bachelor\'s degree', '100Q/200 marks/60 min', 'Sectional lock, 15 min per subject'],
        ['SSC CHSL Tier 1', '12th pass', '100Q/200 marks/60 min', 'Composite, single 60 min'],
        ['SSC MTS CBT', '10th pass (Matriculation)', '90Q/270 marks/90 min, two sessions', 'Two mandatory 45-min sessions same day'],
      ] },
      { type: 'paragraph', heading: 'Qualification decides more than difficulty does', text: '[SSC CGL](/ssc-cgl/exam-pattern) opens officer-level and executive posts across central government departments, but only to candidates who already hold a bachelor\'s degree. [SSC CHSL](/ssc-chsl/exam-pattern) is open to 12th-pass candidates and leads into clerical and data-entry roles. [SSC MTS](/ssc-mts/exam-pattern) accepts a 10th pass on its own, the most accessible entry point of the three, for Group C support-staff and Havaldar posts. If you are still in or just finished Class 12, CGL is not an option yet regardless of how strong your preparation is; MTS or CHSL are your actual choices today.' },
      { type: 'paragraph', heading: 'MTS runs a genuinely different exam structure', text: 'SSC MTS is not a single continuous paper the way CGL and CHSL are. It runs as two mandatory sessions on the same day: Session 1 (Numerical and Mathematical Ability, Reasoning Ability and Problem Solving, 40 questions, no negative marking at all) and Session 2 (General Awareness, English Language and Comprehension, 50 questions, one mark deducted per wrong answer). Session 2 is only evaluated for candidates who clear the qualifying cutoff in Session 1, so a weak Session 1 performance means Session 2 never even factors into your result, no matter how well you answer it.' },
      { type: 'callout', text: 'Session 2 of SSC MTS is only evaluated for candidates who clear the qualifying cutoff in Session 1, so a weak Session 1 performance means Session 2 never factors into your result at all.' },
      { type: 'paragraph', heading: 'CGL and CHSL: same scale, different pacing', text: 'SSC CGL Tier 1 and SSC CHSL Tier 1 are nearly identical on paper, both 100 questions for 200 marks in 60 minutes with 0.5 marks deducted per wrong answer, but they time you completely differently. CGL Tier 1 locks you into 15 minutes per subject with no borrowing between sections, while CHSL Tier 1 gives you one composite 60-minute timer across all four subjects, so you can spend more time on your strongest section and less on your weakest. See [sectional lock vs composite timer](/blog/sectional-lock-vs-composite-timer) for what that difference actually feels like under exam pressure.' },
      { type: 'paragraph', heading: 'A practical way to decide', text: 'Start from what you are already eligible for, not from which exam sounds more prestigious. If you hold only a Class 10 certificate, MTS is your entry point today, and its two-session, qualify-then-advance structure rewards a genuinely different kind of preparation than a single continuous paper does. If you have a 12th pass, CHSL is open to you, and its composite timer suits candidates who prefer managing one combined clock over a hard per-subject lock. CGL becomes available once you complete your degree, at which point the sectional-lock pacing of Tier 1 is worth practicing specifically, not assumed to transfer automatically from CHSL-style composite timing. Each exam\'s full conditions, including age limits and the relaxations that apply to them, are set out on its own page: [SSC MTS eligibility](/ssc-mts/eligibility), [SSC CHSL eligibility](/ssc-chsl/eligibility) and [SSC CGL eligibility](/ssc-cgl/eligibility).' },
      { type: 'paragraph', text: 'For how the SSC family compares against Banking and Railways as a whole, see [SSC vs Banking vs Railways](/blog/ssc-vs-banking-vs-railways-choosing-your-path). Practice tests for [SSC CGL](/ssc-cgl/mock-test), [SSC CHSL](/ssc-chsl/mock-test), and [SSC MTS](/ssc-mts/mock-test) are available from the [government exams directory](/exams/government-jobs).' },
    ],
    faqs: [
      { q: 'What is the minimum qualification for SSC CGL, CHSL, and MTS?', a: 'SSC CGL requires a bachelor\'s degree, SSC CHSL requires a 12th pass, and SSC MTS requires only a 10th pass (Matriculation). Most candidates are only eligible for one or two of the three at any given time based on where they currently stand.' },
      { q: 'Does SSC MTS have negative marking?', a: 'It depends on the session. Session 1 (Numerical and Reasoning) has no negative marking at all. Session 2 (General Awareness and English), which is only evaluated if you clear Session 1\'s qualifying cutoff, deducts one mark per wrong answer.' },
      { q: 'Which SSC exam uses a sectional lock timer?', a: 'SSC CGL Tier 1 locks you into 15 minutes per subject with no borrowing between sections. SSC CHSL Tier 1 uses a single composite 60-minute timer across all four subjects instead, even though both cover the same 100 questions for 200 marks.' },
      { q: 'Is SSC MTS a single written test like CGL and CHSL?', a: 'No. SSC MTS runs as two mandatory sessions on the same day, and the second session is only evaluated for candidates who first clear the qualifying cutoff in the first session, a structure CGL and CHSL do not use.' },
    ],
  },
  {
    slug: 'oet-vs-ielts-choosing-your-healthcare-english-test',
    title: 'OET or IELTS: Which English Test Do Healthcare Pros Need?',
    excerpt: 'One tests healthcare-scenario English: referral letters, ward instructions, patient dialogues. The other tests general academic English. Pick based on need.',
    category: 'Exam Guides',
    readTimeMin: 6,
    publishedAt: '2026-08-22',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'oet vs ielts',
    image: {
      src: '/images/blog/oet-vs-ielts-choosing-your-healthcare-english-test.webp',
      alt: 'Indian healthcare professional comparing clinical and general English test formats',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'Nurses, doctors, dentists, and pharmacists applying to work abroad are usually choosing between two English tests: OET, built specifically around healthcare communication, and IELTS, a general-purpose test accepted far more broadly. Both are recognised by major healthcare regulators, so the real question is not which test is "better," it is which one actually fits what you need the score for.' },
      { type: 'takeaways', items: [
        'OET content is healthcare-specific throughout, referral letters, ward instructions, and patient dialogues, while IELTS tests general academic and everyday English with no healthcare scenario content.',
        'OET is recognised by healthcare regulators in 30-plus countries, including the UK, Australia, New Zealand, Ireland, Singapore, and the UAE. IELTS is accepted by over 12,000 institutions in 140-plus countries, a far broader footprint, but that breadth is general-purpose, not healthcare-specific.',
        'The two tests score on different scales entirely: OET reports a grade band (A to E) alongside a 0 to 500 numeric score, while IELTS reports a 1 to 9 band score. There is no single official conversion between them.',
        'OET Reading has three parts sharing 60 minutes, and only Part C (2 texts, 8 four-option multiple-choice questions each) uses the 4-option multiple-choice format; Part A is typed short-answer and matching, and Part B uses 3-option questions.',
      ] },
      { type: 'table', heading: 'OET vs IELTS at a glance', headers: ['', 'OET', 'IELTS'], rows: [
        ['Built for', 'Healthcare professionals (12 professions)', 'General academic and immigration purposes'],
        ['Reading format', '3 parts sharing 60 min: typed matching/short-answer, 3-option MCQ, 4-option MCQ', '3 passages, 60 min, mixed formats including MCQ, matching, and completion'],
        ['Score scale', 'Grade A to E (also reported 0-500)', 'Band 1 to 9'],
        ['Recognised by', '30-plus countries\' healthcare regulators (UK, Australia, NZ, Ireland, Singapore, UAE)', '12,000-plus institutions in 140-plus countries'],
      ] },
      { type: 'paragraph', heading: 'The real difference is content, not difficulty', text: 'OET was built around what healthcare professionals actually read and hear at work: referral letters, case notes, ward instructions, and patient dialogues. [IELTS](/ielts/mock-test) tests general academic and everyday English instead, passages from books, journals, and newspapers with no clinical content at all. Neither test is inherently harder than the other, the skill being measured is different: OET rewards familiarity with medical vocabulary and clinical-communication conventions, while IELTS rewards general reading and listening comprehension.' },
      { type: 'paragraph', heading: 'OET\'s Reading section is only partly multiple choice', text: 'The official OET Reading sub-test has three parts sharing 60 minutes total. Part A (20 items in 15 minutes) uses matching and short-answer formats, typed rather than multiple choice. Part B (6 short texts, one question each) uses 3 answer options, not 4. Only Part C, two longer texts of around 800 words with 8 four-option multiple-choice questions each, matches the 4-option format this site\'s mock covers. Reading content itself is identical across all 12 OET professions (nursing, medicine, dentistry, pharmacy, and others); only Writing and Speaking are profession-specific.' },
      { type: 'callout', text: 'Reading content is identical across all 12 OET professions. Only Writing and Speaking are profession-specific.' },
      { type: 'paragraph', heading: 'Different scales, no official conversion', text: 'OET reports a grade from A to E per sub-test (also shown as a 0 to 500 numeric score), while IELTS reports a band score from 1 to 9. The two scales measure different things and there is no single official table that converts one directly into the other, so check the exact grade or band your target regulator or employer requires rather than assuming an equivalence.' },
      { type: 'paragraph', heading: 'What this means for your choice', text: 'If you are applying specifically for healthcare registration, nursing, medicine, dentistry, pharmacy, or one of the other OET professions, OET\'s content overlaps directly with the English you will actually use on the job, and it is accepted by the healthcare regulators in most major destination countries. If you need a score for university admission, a non-healthcare visa category, or you are unsure yet which country or role you will end up in, IELTS\'s much broader acceptance makes it the safer general-purpose choice. Some healthcare professionals end up needing both, if their target country requires OET for professional registration but IELTS for the visa application itself.' },
      { type: 'paragraph', text: 'For how IELTS itself compares against other general English tests, see [IELTS vs TOEFL vs PTE](/blog/ielts-vs-toefl-vs-pte-picking-your-english-test). Practice tests for [OET Reading Part C](/oet/mock-test) and [IELTS Reading](/ielts/mock-test) are available from the [study abroad exams directory](/exams/study-abroad).' },
    ],
    faqs: [
      { q: 'Is OET only for nurses?', a: 'No. OET covers 12 healthcare professions, including nursing, medicine, dentistry, and pharmacy. Reading content is identical across all 12 professions; only the Writing and Speaking sub-tests are profession-specific.' },
      { q: 'Does OET use the same 1 to 9 band scale as IELTS?', a: 'No. OET reports a grade from A to E (also shown as a 0 to 500 numeric score), while IELTS reports a band score from 1 to 9. There is no single official conversion table between the two scales.' },
      { q: 'Which OET Reading format does a 4-option multiple-choice mock cover?', a: 'Only Part C. Part A is typed short-answer and matching, and Part B uses 3-option questions, neither of which fits a 4-option multiple-choice format; only Part C\'s two texts with 8 four-option questions each match it.' },
      { q: 'Can I use OET instead of IELTS for a student visa or university application?', a: 'Not generally. OET is recognised specifically by healthcare regulators, not by universities or general immigration authorities the way IELTS is. If you need proof of English for study or a non-healthcare visa category, IELTS is the standard choice, not OET.' },
    ],
  },
  {
    slug: 'mht-cet-vs-jee-main-maharashtra-engineering-admission',
    title: 'MHT CET or JEE Main: Which Gets You a Maharashtra Seat?',
    excerpt: 'Roughly 85% of Maharashtra\'s private engineering seats, and 100% of government ones, go through MHT CET, not JEE Main. The two unlock different pools.',
    category: 'Exam Guides',
    readTimeMin: 6,
    publishedAt: '2026-08-22',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'mht cet vs jee main',
    image: {
      src: '/images/blog/mht-cet-vs-jee-main-maharashtra-engineering-admission.webp',
      alt: 'Indian engineering aspirant comparing Maharashtra and national admission routes',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'Most Maharashtra engineering aspirants end up sitting both MHT CET and JEE Main, and it is worth understanding why: the two scores unlock genuinely different pools of seats, not the same pool through two different doors. Getting this backward, assuming a strong JEE Main score alone secures a Maharashtra state college seat, is one of the more common and costly misunderstandings in engineering admissions.' },
      { type: 'takeaways', items: [
        'Maharashtra State Quota seats, roughly 85% of private unaided college seats and 100% of government and aided college seats, are allocated using MHT CET scores, restricted to Maharashtra domicile candidates. JEE Main decides the separate All India Quota (roughly 15% of private unaided seats) plus NIT, IIIT, and other CFTI admissions.',
        'A strong JEE Main score does not by itself secure a state-quota seat at a top Maharashtra government college; some, including VJTI, admit their state-quota seats through MHT CET only.',
        'MHT CET has no negative marking at all; JEE Main deducts a full mark for a wrong answer, a real difference in how safe a guess is on each exam.',
        'MHT CET\'s Full Mock runs as two sequential 90-minute timing groups, Physics and Chemistry together, then Mathematics, with no return to the first group; JEE Main uses one free-navigation 180-minute timer across all three subjects instead.',
      ] },
      { type: 'table', heading: 'MHT CET vs JEE Main at a glance', headers: ['', 'MHT CET (PCM)', 'JEE Main (Paper 1)'], rows: [
        ['Primarily decides', 'Maharashtra State Quota and government-college seats', 'All India Quota, NITs, IIITs, and other CFTIs'],
        ['Format', '150Q/200 marks/180 min, MCQ only', '75Q/300 marks/180 min, MCQ plus numerical-value'],
        ['Timer', 'Two sequential 90-min groups (Physics+Chemistry, then Mathematics), no return', 'Single 180-min timer, free navigation across all three subjects'],
        ['Negative marking', 'None', '-1 per wrong answer'],
      ] },
      { type: 'paragraph', heading: 'Two different seat pools, not two paths to the same seats', text: 'Maharashtra State Quota, roughly 85% of seats in private unaided engineering colleges and 100% in government and aided colleges, is allocated on [MHT CET](/mht-cet/mock-test) scores and restricted to candidates holding Maharashtra domicile status. [JEE Main](/jee-main/mock-test) governs a separate track: the All India Quota (roughly 15% of private unaided seats, open to candidates from any state) plus admission to NITs, IIITs, and other Centrally Funded Technical Institutes. A candidate aiming only for a Maharashtra government college through the state quota gains little from a strong JEE Main score alone; MHT CET is the exam that actually decides that seat.' },
      { type: 'callout', text: 'A candidate aiming only for a Maharashtra government college through the state quota gains little from a strong JEE Main score alone. MHT CET is the exam that actually decides that seat.' },
      { type: 'paragraph', heading: 'The syllabus overlaps, the timing does not', text: 'Both exams test Physics, Chemistry, and Mathematics, with roughly 70 to 75% syllabus overlap, so focused preparation for one gives a genuine head start on the other. But the exams are timed completely differently. MHT CET\'s official pattern runs as two sequential timing groups, Physics and Chemistry share the first 90 minutes and that group auto-submits, then Mathematics gets a separate 90 minutes with no way back to the first group. JEE Main, by contrast, gives you one free-navigation 180-minute timer across all three subjects at once, letting you move between Physics, Chemistry, and Mathematics questions in any order for the entire test.' },
      { type: 'paragraph', heading: 'Guessing math is not the same either', text: 'MHT CET has no negative marking anywhere in the paper, so every question is safe to attempt even as a pure guess. JEE Main deducts a full mark for a wrong MCQ answer (numerical-value questions are also penalized), so a guessing habit built on MHT CET practice needs to be recalibrated before sitting JEE Main, not carried over directly. See [understanding negative marking](/blog/understanding-negative-marking) for the general math behind when a guess is actually worth the risk.' },
      { type: 'paragraph', text: 'Because the two exams decide different seat pools rather than competing for the same ones, most serious Maharashtra aspirants prepare for both rather than choosing one. Practice tests for both are available from the [engineering exams directory](/exams/engineering), including MHT CET\'s own two-group timed Full Mock.' },
    ],
    faqs: [
      { q: 'Does MHT CET have negative marking?', a: 'No. MHT CET has no negative marking anywhere in the paper, so every question is safe to attempt. JEE Main, by contrast, deducts a full mark for a wrong answer.' },
      { q: 'Can I get into an NIT through MHT CET?', a: 'No. NIT, IIIT, and other Centrally Funded Technical Institute admissions run through JEE Main\'s All India Quota. MHT CET decides the separate Maharashtra State Quota and most government-college seats instead.' },
      { q: 'Is MHT CET easier than JEE Main?', a: 'MHT CET is commonly described as testing shallower conceptual depth than JEE Main, though the two exams share roughly 70 to 75% of the same Physics, Chemistry, and Mathematics syllabus, so the difference is in depth of questioning rather than topic coverage.' },
      { q: 'Do MHT CET and JEE Main use the same exam timer?', a: 'No. MHT CET\'s official Full Mock runs as two sequential 90-minute groups, Physics and Chemistry together, then Mathematics, with no return to the first group. JEE Main uses one free-navigation 180-minute timer across all three subjects instead.' },
    ],
  },
  {
    slug: 'lic-aao-vs-niacl-ao-choosing-your-insurance-sector-exam',
    title: 'LIC AAO or NIACL AO: Choosing Your Insurance Sector Exam',
    excerpt: 'Both exams look nearly identical: 100 questions, 60 minutes, sectional locks. LIC covers life insurance, NIACL general insurance, with different scoring rules.',
    category: 'Exam Guides',
    readTimeMin: 5,
    publishedAt: '2026-08-22',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'lic aao vs niacl ao',
    image: {
      src: '/images/blog/lic-aao-vs-niacl-ao-choosing-your-insurance-sector-exam.webp',
      alt: 'Indian insurance officer aspirant comparing two sector exam pathways',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'LIC AAO and NIACL AO get grouped together as "insurance sector exams," and their Prelims papers do look nearly identical at a glance, both 100 questions for 100 marks in 60 minutes with a sectional lock. But LIC and NIACL sit on different sides of the insurance industry, life versus general insurance, and their Prelims papers score wrong answers differently, a real distinction hidden underneath the surface similarity.' },
      { type: 'takeaways', items: [
        'LIC (Life Insurance Corporation) is a life insurer; NIACL (New India Assurance) is a general insurer, covering motor, health, and fire policies. The AAO role\'s day-to-day underwriting and claims work differs by what kind of insurance each organisation actually sells.',
        'LIC AAO Prelims has no negative marking at all. NIACL AO Prelims deducts 0.25 marks per wrong answer, a real difference in how safe a guess is despite both papers being the same 100Q/100-marks/60-min scale.',
        'LIC AAO\'s English Language section is scored but does not count toward your Prelims ranking, only Reasoning Ability and Quantitative Aptitude (70 of the 100 marks) decide who advances. NIACL AO has no such carve-out: every section counts toward its own sectional qualifying cutoff.',
        'Both Prelims exams use a 20-minutes-per-section sectional lock across three sections, and in both cases Prelims marks do not carry forward into final selection, which is decided later by the Main Examination and interview.',
      ] },
      { type: 'table', heading: 'LIC AAO vs NIACL AO Prelims at a glance', headers: ['', 'LIC AAO Prelims', 'NIACL AO Prelims'], rows: [
        ['Insurance type', 'Life insurance', 'General insurance (motor, health, fire, and more)'],
        ['Questions/Marks/Duration', '100/100/60 min', '100/100/60 min'],
        ['Timer', 'Sectional lock, 20 min per section', 'Sectional lock, 20 min per section'],
        ['Negative marking', 'None', '0.25 marks per wrong answer'],
        ['English section', 'Qualifying only, not counted in Prelims ranking', 'Counts toward its own sectional qualifying cutoff like every other section'],
      ] },
      { type: 'paragraph', heading: 'Life insurance and general insurance are different businesses', text: '[LIC AAO](/lic-aao/mock-test) sits inside the Life Insurance Corporation, India\'s largest life insurer, underwriting and administering life policies. [NIACL AO](/niacl-ao/mock-test) sits inside New India Assurance, a general insurer covering motor, health, fire, and similar non-life policies, work that tends to involve more claims-driven, day-to-day variation than life insurance\'s comparatively steadier policy cycle. The written exam pattern looks similar between the two, but the actual AAO role afterward is shaped by which side of the insurance industry you are working in.' },
      { type: 'paragraph', heading: 'The same scale, different penalty for a wrong answer', text: 'LIC AAO Prelims has no negative marking anywhere in the paper, so every question is safe to attempt as a pure guess. NIACL AO Prelims deducts 0.25 marks per wrong answer instead, the same one-fourth-of-a-mark penalty used across most IBPS-family exams. Two papers that look identical in size and timing can still reward a completely different guessing strategy, so carrying a no-penalty mindset from LIC AAO practice directly into a NIACL AO attempt is a real risk worth correcting for before exam day.' },
      { type: 'callout', text: 'Two papers that look identical in size and timing can still reward a completely different guessing strategy.' },
      { type: 'paragraph', heading: 'LIC AAO\'s English section is a qualifying hurdle, not a scoring one', text: 'On LIC AAO Prelims, English Language is scored but those marks are not added to your Prelims ranking, only Reasoning Ability and Quantitative Aptitude (70 of the 100 marks combined) decide who advances to Mains. You still need to clear English\'s qualifying cutoff, but a strong English score does not boost your rank the way a strong Reasoning or Quant score does. NIACL AO Prelims has no equivalent carve-out: English Language, Reasoning Ability, and Quantitative Aptitude each count toward their own sectional qualifying cutoff on equal footing.' },
      { type: 'paragraph', text: 'For how LIC AAO and NIACL AO compare against the regulator-track banking exams (RBI Grade B, NABARD, SEBI, SIDBI), see [RBI Grade B vs NABARD vs SEBI vs SIDBI](/blog/rbi-grade-b-vs-nabard-vs-sebi-vs-sidbi). Practice tests for both are available from the [government exams directory](/exams/government-jobs).' },
    ],
    faqs: [
      { q: 'Does LIC AAO have negative marking?', a: 'No. LIC AAO Prelims has no negative marking anywhere in the paper. NIACL AO Prelims, by contrast, deducts 0.25 marks per wrong answer.' },
      { q: 'Does the English section count toward my LIC AAO Prelims score?', a: 'It is scored and you must clear its qualifying cutoff, but those marks are not added to your Prelims ranking. Only Reasoning Ability and Quantitative Aptitude, 70 of the 100 marks combined, decide who advances to Mains.' },
      { q: 'What is the core business difference between LIC and NIACL?', a: 'LIC (Life Insurance Corporation) is a life insurer. NIACL (New India Assurance) is a general insurer, covering motor, health, fire, and similar non-life policies. The AAO role\'s day-to-day work differs based on which kind of insurance the organisation sells.' },
      { q: 'Do LIC AAO and NIACL AO Prelims marks decide the final selection?', a: 'No, for either exam. Prelims is used only to shortlist candidates for the Main Examination; final selection is decided later by the Main Examination score plus the interview.' },
    ],
  },
  {
    slug: 'why-this-site-gives-you-two-full-mock-tests',
    title: 'Why This Site Gives You Two Full Mock Tests',
    excerpt: 'Test 1 and Test 2 are separate question banks, not the same paper reordered. Taken back to back, they mostly measure memory of format, not real improvement.',
    category: 'Mock Tests',
    readTimeMin: 5,
    publishedAt: '2026-08-24',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'why take more than one full mock test',
    image: {
      src: '/images/blog/why-this-site-gives-you-two-full-mock-tests.webp',
      alt: 'Two mock-test folders separated by a revision notebook, planner and practice cards',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'Most exams on this site now offer a Full Mock Test 1 and a Full Mock Test 2, and it is tempting to treat the second one as just more practice volume, something to burn through the same evening you finish the first. That wastes most of what a second attempt is actually good for.' },
      { type: 'takeaways', items: [
        'Test 1 and Test 2 use completely separate, independently written question banks for the same exam, not the same questions reshuffled, so there is no repeated-question shortcut between them.',
        'Taking Test 2 immediately after Test 1, same day or the next, mostly measures how well you remember the format and a few specific questions, not whether your preparation actually improved.',
        'Use Test 1 early as a cold diagnostic baseline, then spend real weeks fixing what it exposed before you touch Test 2.',
        'Save Test 2 for closer to your actual exam date, ideally your final full-length rehearsal under real exam-day conditions: one sitting, no pausing, no notes.',
      ] },
      { type: 'paragraph', heading: 'Two attempts, two separate question banks', text: 'Every Test 2 on this site is built the same way Test 1 was: original questions written to the exam\'s official syllabus and pattern, checked and dated independently. It is not Test 1 with the order scrambled or the numbers tweaked, so scoring well on Test 2 because you half-remember an answer from Test 1 is not something you need to worry about, but it also means Test 2 will not tell you anything useful if you sit it before you have actually changed how you prepare.' },
      { type: 'paragraph', heading: 'Why the gap between them matters more than the count', text: 'Sit Test 1 and Test 2 in the same session and you are really testing short-term memory of the paper\'s structure and pacing, not the two or three weeks of work you did in between. The value of a second full-length attempt is comparative: did your section-wise accuracy actually move, did your unattempted count actually shrink, since the first one. That comparison only means something if enough real preparation happened in the gap for the numbers to have a reason to change.' },
      { type: 'callout', text: 'The value of a second full-length attempt is comparative, and that comparison only means something if enough real preparation happened in the gap for the numbers to have a reason to change.' },
      { type: 'paragraph', heading: 'A sensible way to sequence the two', text: 'Take Test 1 relatively early, once you have covered most of the syllabus, purely as a cold baseline: no last-minute cramming beforehand, just an honest read of where you stand section by section. From there, spend real weeks on what it exposed, using your [error log](/blog/how-to-build-an-error-log) to track the specific mistakes rather than just the topics. Hold Test 2 back for your final one to two weeks, and sit it as close to real exam conditions as you can manage, one uninterrupted sitting, the same time of day as your actual exam if possible. That is also when it is most useful as a pacing rehearsal, not just a score check.' },
      { type: 'paragraph', heading: 'What a flat or lower Test 2 score actually means', text: 'A Test 2 score that is not clearly better than Test 1 is not a verdict on your ability, but it is a signal worth taking seriously rather than explaining away. Pull up both results side by side and check section-wise accuracy specifically, not just the total. If one section genuinely didn\'t move, that is the same recurring-mistake pattern [analyzing mock test performance](/blog/how-to-analyze-your-mock-test-performance) is built to catch, and it means more of your remaining prep time belongs there, not spread evenly across everything.' },
      { type: 'paragraph', text: 'This is about spacing this site\'s own two full-length attempts well; for the broader question of total mock volume across your whole preparation, see [how many mock tests should you actually take](/blog/how-many-mock-tests-should-you-take). You can browse Test 1 and Test 2 for your exam from the [exam directory](/exams).' },
    ],
    faqs: [
      { q: 'Are Test 1 and Test 2 the same questions in a different order?', a: 'No. Test 2 is an entirely separate, independently written question bank covering the same official syllabus and pattern, not Test 1 reshuffled or reworded.' },
      { q: 'How much time should I leave between Test 1 and Test 2?', a: 'Enough for real preparation to happen in between, not just a day or two. A common approach is Test 1 once you have covered most of the syllabus, then weeks of focused review before Test 2 closer to your exam date.' },
      { q: 'My Test 2 score was lower than my Test 1 score. Does that mean I got worse?', a: 'Not necessarily. Compare section-wise accuracy between the two rather than just the total score; a single weak section that did not improve is a common cause, and it tells you exactly where to focus, not that your overall preparation failed.' },
      { q: 'Should I take Test 1 or Test 2 first?', a: 'Take Test 1 first, early in your preparation, as a cold diagnostic baseline. Save Test 2 for closer to your exam date, once you have had real time to act on what Test 1 showed you, so it can double as a final full-length rehearsal.' },
    ],
  },
  {
    slug: 'ssc-selection-post-one-cbe-three-qualification-levels',
    title: 'SSC Selection Post: One CBE, Three Levels, One Fixed Subject',
    excerpt: 'Matriculation, Higher Secondary, and Graduation candidates sit a near-identical CBE, except one subject stays at Class 10 difficulty even at Graduation level.',
    category: 'Exam Guides',
    readTimeMin: 6,
    publishedAt: '2026-08-24',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'ssc selection post matriculation vs graduation level',
    image: {
      src: '/images/blog/ssc-selection-post-one-cbe-three-qualification-levels.webp',
      alt: 'Indian aspirant practicing on a laptop beside three study binders and a mathematics notebook',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'SSC Selection Post fills a wide range of Group B (Non-Gazetted) and Group C posts across central government ministries and departments in a single recruitment cycle, run separately at three qualification levels: Matriculation, Higher Secondary (10+2), and Graduation and Above. Unlike SSC CGL or CHSL, which each target a defined set of posts at one qualification level, Selection Post spans posts and levels together, and which level you sit depends entirely on the specific post\'s own minimum qualification, not personal preference. For contrast, [SSC CGL eligibility](/ssc-cgl/eligibility) sets a single bar for the whole exam.' },
      { type: 'takeaways', items: [
        'All three levels, Matriculation, Higher Secondary, and Graduation and Above, run the same Computer Based Examination shape: 100 questions for 200 marks in 60 minutes, split into four 25-question parts.',
        'Each part has its own hard 15-minute timer; unused time in one part cannot move to another, a sectional lock with no borrowing at all.',
        'At the Graduation and Above level, General Intelligence, General Awareness, and English Language are set at graduation difficulty, but Quantitative Aptitude stays at Class 10 level under the official syllabus, the one section that does not scale up with the rest.',
        'Post-specific skill tests, where a particular post requires one, are qualifying only and sit on top of the CBE; they are not modeled on this site since they are not multiple-choice.',
      ] },
      { type: 'table', heading: 'The same CBE shape at every level', headers: ['Level', 'Questions/Marks/Duration', 'Timer', 'Difficulty note'], rows: [
        ['Matriculation', '100Q/200 marks/60 min', 'Sectional lock, 15 min per part', 'All four sections at Matriculation level'],
        ['Higher Secondary (10+2)', '100Q/200 marks/60 min', 'Sectional lock, 15 min per part', 'All four sections at Higher Secondary level'],
        ['Graduation and Above', '100Q/200 marks/60 min', 'Sectional lock, 15 min per part', 'General Intelligence, General Awareness, English at graduation level; Quantitative Aptitude stays at Class 10 level'],
      ] },
      { type: 'paragraph', heading: 'The same format, repeated at three levels', text: 'General Intelligence, General Awareness, Quantitative Aptitude, and English Language, 25 questions and 50 marks each, make up all three CBEs, and every one of them uses the same hard sectional lock: 15 minutes per part with no ability to borrow time from a part you finish early. That structure is identical whether you are sitting the Matriculation, Higher Secondary, or Graduation level paper, and 0.5 marks are deducted per wrong answer across all three as well.' },
      { type: 'paragraph', heading: 'The one subject that does not get harder', text: 'It would be reasonable to assume the Graduation and Above paper is uniformly tougher than the Matriculation one, and for three of its four sections that is true: General Intelligence, General Awareness, and English Language are all pitched at graduation level there. Quantitative Aptitude is the exception. Under the official syllabus it stays at Class 10 difficulty even in the Graduation and Above paper, so a graduate candidate should not walk in expecting every section to have scaled up equally, and should not under-prepare Quant on the assumption that "graduation level" applies uniformly across the whole paper.' },
      { type: 'callout', text: 'A graduate candidate should not walk in expecting every section to have scaled up equally: Quantitative Aptitude stays at Class 10 difficulty even at the Graduation and Above level.' },
      { type: 'paragraph', heading: 'One recruitment cycle, many posts', text: 'What actually decides your correct level is the specific post\'s own minimum qualification, published separately for each post in the official notification, not which paper sounds more achievable. Some posts also carry a post-specific skill test after the CBE, qualifying in nature, layered on top of the written score rather than replacing it; those are not modeled here since they are not a multiple-choice format.' },
      { type: 'paragraph', text: 'For how SSC Selection Post compares against single-post, single-level SSC exams like CGL, CHSL, and MTS, see [SSC CGL vs CHSL vs MTS](/blog/ssc-cgl-vs-chsl-vs-mts-choosing-the-right-ssc-exam). Practice tests for all three SSC Selection Post levels are available from the [government exams directory](/exams/government-jobs).' },
    ],
    faqs: [
      { q: 'What is SSC Selection Post and how is it different from SSC CGL or CHSL?', a: 'SSC Selection Post fills a wide range of posts across central government departments in one recruitment cycle, run at three separate qualification levels (Matriculation, Higher Secondary, Graduation and Above), unlike CGL or CHSL, which each target a defined set of posts at a single qualification level.' },
      { q: 'Does the SSC Selection Post exam get uniformly harder at the Graduation level compared to Matriculation?', a: 'Mostly, but not entirely. General Intelligence, General Awareness, and English Language are set at graduation difficulty in the Graduation and Above paper, but Quantitative Aptitude stays at Class 10 level under the official syllabus.' },
      { q: 'Can I move unused time from one section to another in SSC Selection Post?', a: 'No. Each of the four parts has its own hard 15-minute timer, and unused time in one part cannot be moved to another, at every qualification level.' },
      { q: 'Is there a skill test after the SSC Selection Post CBE?', a: 'For some posts, yes. Where a post prescribes one, the skill test is qualifying only and comes after the CBE. It is not modeled on this site since it is not a multiple-choice format.' },
    ],
  },
  {
    slug: 'rrb-technician-grade-1-signal-vs-grade-3',
    title: 'RRB Technician Grade I Signal vs Grade III: What Changes',
    excerpt: 'Both grades sit a single CBT, same notice, scale, and scoring, but Grade I Signal tests computer applications and engineering science Grade III doesn\'t.',
    category: 'Exam Guides',
    readTimeMin: 6,
    publishedAt: '2026-08-24',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'rrb technician grade 1 vs grade 3',
    image: {
      src: '/images/blog/rrb-technician-grade-1-signal-vs-grade-3.webp',
      alt: 'Circuit board, laptop and science-study tools with a model passenger train',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'RRB Technician recruitment covers Grade I Signal and Grade III together under one notice, and unlike RRB NTPC or JE, there is no second CBT stage for either grade: the single Computer Based Test directly decides shortlisting for Document Verification, limited to the number of notified vacancies. The two grades share that single-CBT structure and overall scale, but the actual subject mix inside the paper is genuinely different.' },
      { type: 'takeaways', items: [
        'Both grades run a single CBT only, no CBT 2, and it directly decides Document Verification shortlisting, limited to notified vacancies.',
        'Grade I Signal covers five sections including Basics of Computers and Applications (20 questions) and Basic Science and Engineering (35 questions, its largest single section); Grade III covers only four sections and has no dedicated computer-applications section at all.',
        'Both share the same overall scale: 100 questions for 100 marks in 90 minutes, one composite timer for the whole paper with no sectional lock, and 0.333 marks deducted per wrong answer.',
        'The minimum qualifying percentage is identical for both grades: 40% for UR and EWS, 30% for OBC (NCL) and SC, 25% for ST.',
      ] },
      { type: 'table', heading: 'Grade I Signal vs Grade III: section breakdown', headers: ['Section', 'Grade I Signal', 'Grade III'], rows: [
        ['General Awareness', '10 questions', '10 questions'],
        ['General Intelligence and Reasoning', '15 questions', '25 questions'],
        ['Mathematics', '20 questions', '25 questions'],
        ['Basics of Computers and Applications', '20 questions', 'Not included'],
        ['Basic Science and Engineering / General Science', '35 questions (Basic Science and Engineering)', '40 questions (General Science)'],
      ] },
      { type: 'paragraph', heading: 'Same shell, different subject weighting', text: 'Strip away the section names and both papers look identical: 100 questions, 100 marks, 90 minutes, one combined timer with no sectional lock, and the same 0.333-mark penalty per wrong answer. Neither grade has a physical test or a typing test attached to its CBT stage the way some other railway exams do; for either grade, this single written paper is the whole gate to Document Verification.' },
      { type: 'paragraph', heading: 'Where the two papers actually diverge', text: 'Basics of Computers and Applications and Basic Science and Engineering appear only in the Grade I Signal paper, together accounting for 55 of its 100 questions, which pushes it toward a more technical, engineering-leaning paper overall. Grade III drops both in favour of a broader General Science section (40 questions) and gives more weight to General Intelligence and Reasoning and Mathematics (25 questions each, against 15 and 20 respectively in Grade I Signal), making it a more evenly spread, generalist paper by comparison.' },
      { type: 'callout', text: 'Basics of Computers and Applications and Basic Science and Engineering together account for 55 of Grade I Signal\'s 100 questions, a section split Grade III does not share at all.' },
      { type: 'paragraph', heading: 'What this means for your prep split', text: 'If you are preparing for Grade I Signal, budget real, dedicated time for computer-applications basics and engineering science specifically, since together they are over half the paper and are not covered by generic reasoning or aptitude practice. If you are preparing for Grade III, your time is better spread more evenly across Mathematics, Reasoning, and General Science, without needing a computer-applications-specific track at all.' },
      { type: 'paragraph', text: 'RRB Technician is not covered in [RRB NTPC vs Group D vs JE vs ALP](/blog/rrb-ntpc-vs-group-d-vs-je-vs-alp-choosing-your-railway-exam), which compares four other Railways exams; this one fills that gap for Technician specifically. Practice tests for both grades are available from [RRB Technician](/rrb-technician/mock-test), part of the [government exams directory](/exams/government-jobs). For what the two-stage alternative actually asks of you, see the [RRB NTPC syllabus](/rrb-ntpc/syllabus).' },
    ],
    faqs: [
      { q: 'Is RRB Technician a single CBT, or does it have a CBT 2 like NTPC or JE?', a: 'A single CBT only, for both Grade I Signal and Grade III. There is no second CBT stage; the one written paper directly decides shortlisting for Document Verification.' },
      { q: 'What sections does Grade I Signal have that Grade III does not?', a: 'Basics of Computers and Applications (20 questions) and Basic Science and Engineering (35 questions). Grade III replaces both with a single, broader General Science section (40 questions) and has no dedicated computer-applications section.' },
      { q: 'Is the negative marking different between Grade I Signal and Grade III?', a: 'No. Both deduct 0.333 marks (one-third) per wrong answer, and both use the same 100Q/100 marks/90-minute scale with a single composite timer.' },
      { q: 'What is the minimum qualifying percentage for RRB Technician?', a: '40% for UR and EWS, 30% for OBC (NCL) and SC, and 25% for ST, the same thresholds for both Grade I Signal and Grade III.' },
    ],
  },
  {
    slug: 'ssc-stenographer-grade-c-vs-grade-d',
    title: 'SSC Stenographer Grade C vs D: Same CBT, Different Skill',
    excerpt: 'Grade C and Grade D candidates sit the same 200-question CBE. What separates them is a dictation speed difference in the Skill Test that follows.',
    category: 'Exam Guides',
    readTimeMin: 5,
    publishedAt: '2026-08-24',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'ssc stenographer grade c vs grade d',
    image: {
      src: '/images/blog/ssc-stenographer-grade-c-vs-grade-d.webp',
      alt: 'Indian stenography aspirant listening through headphones while practicing laptop transcription',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'SSC Stenographer recruits for both Grade C and Grade D posts through one shared Computer Based Examination. If you are deciding how to prepare, the written stage gives you no reason to split your prep by grade at all, the CBT itself does not change; what changes is a dictation speed requirement in the Skill Test that follows it.' },
      { type: 'takeaways', items: [
        'Grade C and Grade D candidates sit an identical CBT: 200 questions for 200 marks in 120 minutes, three sections, one composite timer, no sectional lock.',
        'The three sections are General Intelligence and Reasoning (50 questions), General Awareness (50 questions), and English Language and Comprehension (100 questions), with 0.25 marks deducted per wrong answer, the same for both grades.',
        'Clearing the CBT shortlists you for the Skill Test in Stenography, a dictation-and-transcription test, which is where Grade C and Grade D genuinely diverge: 100 words per minute for Grade C against 80 words per minute for Grade D, both dictated for 10 minutes.',
        'CBT marks, normalized across shifts, decide both the Skill Test shortlist and the final merit for both grades, so a strong CBT score still matters even though the Skill Test is the harder practical hurdle for many candidates.',
      ] },
      { type: 'table', heading: 'Grade C vs Grade D: what actually differs', headers: ['Stage', 'Grade C', 'Grade D'], rows: [
        ['CBT structure', '200Q/200 marks/120 min, 3 sections, composite timer', 'Identical to Grade C'],
        ['CBT negative marking', '0.25 marks per wrong answer', 'Identical to Grade C'],
        ['Skill Test dictation speed', '100 words per minute, 10-minute dictation', '80 words per minute, 10-minute dictation'],
        ['Merit basis', 'CBT marks (normalized across shifts) decide shortlist and final merit', 'Identical basis to Grade C'],
      ] },
      { type: 'paragraph', heading: 'One exam, one shortlisting mechanism', text: 'General Intelligence and Reasoning, General Awareness, and English Language and Comprehension make up the CBT for both grades, in the exact same proportions, under the exact same single 120-minute timer with no sectional lock. There is no Grade C-specific or Grade D-specific version of this paper: your CBT score, normalized across shifts to account for difficulty differences between exam sessions, is what both shortlists you for the Skill Test and decides your final merit position.' },
      { type: 'paragraph', heading: 'Where Grade C and Grade D actually part ways', text: 'The Skill Test in Stenography is a dictation-and-transcription test, and it is where the two grades stop being identical: Grade C candidates must take dictation at 100 words per minute, Grade D candidates at 80 words per minute, both for a 10-minute passage before transcribing it. It is qualifying in nature rather than scored into your final marks the way the CBT is, but it is also the stage many candidates find harder to clear than the written exam itself, and it is not a multiple-choice format, so it is not modeled on this site.' },
      { type: 'callout', text: 'Everything up to the Skill Test is identical between Grade C and Grade D. Know which grade\'s dictation speed you are actually training toward once you clear the CBT.' },
      { type: 'paragraph', text: 'This site\'s mocks cover the CBT stage only, since the Skill Test is not a written multiple-choice format; stenography dictation and transcription practice needs to happen separately, alongside your CBT preparation rather than after it. Practice tests are available from [SSC Stenographer](/ssc-steno/mock-test), part of the [government exams directory](/exams/government-jobs).' },
    ],
    faqs: [
      { q: 'Do SSC Stenographer Grade C and Grade D candidates take a different written exam?', a: 'No. Both sit an identical Computer Based Examination: 200 questions for 200 marks in 120 minutes across the same three sections, with the same negative marking.' },
      { q: 'What is the dictation speed required for Grade C versus Grade D?', a: 'Grade C requires 100 words per minute; Grade D requires 80 words per minute. Both are dictated for 10 minutes before transcription in the Skill Test.' },
      { q: 'Does this site\'s mock test cover the Stenography Skill Test?', a: 'No. This site models the CBT (multiple-choice) stage only. The Skill Test is a dictation-and-transcription exercise, not a multiple-choice format, so it needs separate practice.' },
      { q: 'How is the final merit list decided for SSC Stenographer?', a: 'CBT marks, normalized across shifts, decide both the Skill Test shortlist and the final merit, for both Grade C and Grade D.' },
    ],
  },
  {
    slug: 'rrb-je-cbt2-civil-vs-mechanical',
    title: 'RRB JE CBT 2 Civil vs Mechanical: Which Is Easier?',
    excerpt: 'Both branches sit the same 150-question CBT 2 shell, and "which is easier" is what people ask. There\'s no honest verdict: each paper\'s syllabus focus differs.',
    category: 'Exam Guides',
    readTimeMin: 7,
    publishedAt: '2026-08-28',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'rrb je cbt 2 civil vs mechanical',
    image: {
      src: '/images/blog/rrb-je-cbt2-civil-vs-mechanical.webp',
      alt: 'Truss bridge model and structural drawings beside mechanical gears and a caliper',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'RRB JE CBT 2 is most often searched with one specific question attached: is Civil or Mechanical actually easier? It deserves a direct answer: no reliable one exists. Relative difficulty depends on cutoffs, vacancy counts, and the applicant pool in a given recruitment cycle, all of which shift with every notification and none of which this site tracks as live data. What does not shift cycle to cycle is the structure of the Technical Abilities section itself, and that structure tells you something genuinely useful about how to prepare, even without a difficulty verdict attached to it.' },
      { type: 'takeaways', items: [
        'There is no verified "Civil is easier" or "Mechanical is easier" answer. Cutoffs and competition change every recruitment cycle and are not something this site tracks; what is structurally stable is the syllabus itself.',
        'Civil Engineering\'s Technical Abilities section concentrates heavily: Building Materials and Structural Analysis alone make up 46 of its 100 questions.',
        'Mechanical Engineering\'s Technical Abilities section spreads evenly across eight topics, with no single topic past 16 questions.',
        'That concentration difference has a real prep-planning consequence: Civil rewards mastering two topics early, Mechanical rewards broad, even coverage over concentrating on any one or two areas.',
        'Outside Technical Abilities (100 of the 150 questions), the rest of CBT 2 (General Awareness, Physics and Chemistry, Basics of Computers and Applications, Basics of Environment and Pollution Control) is identical for both branches.',
      ] },
      { type: 'paragraph', heading: 'Can you actually choose between them?', text: 'For most aspirants this is not really a free choice: RRB JE recruitment is by post code, and each post code\'s eligibility is tied to a matching diploma or degree discipline, so you typically only qualify for the branch your own qualification is in. The comparison below is still useful for the aspirants it does apply to: those with a dual-eligible qualification, those still deciding which diploma stream to pursue, and anyone who wants to understand why their own branch\'s Technical Abilities paper feels the way it does.' },
      { type: 'table', heading: 'The official pattern (same shell for both branches)', headers: ['Section', 'Questions', 'Marks', 'Branch-specific?'], rows: [
        ['Technical Abilities', '100', '100', 'Yes, differs by engineering discipline'],
        ['General Awareness', '15', '15', 'No (not built on this site: current affairs)'],
        ['Physics and Chemistry', '15', '15', 'No, common to every discipline'],
        ['Basics of Computers and Applications', '10', '10', 'No, common to every discipline'],
        ['Basics of Environment and Pollution Control', '10', '10', 'No, common to every discipline'],
      ] },
      { type: 'paragraph', heading: 'The 50 non-technical questions are the same paper for everyone', text: 'General Awareness, Physics and Chemistry, Basics of Computers and Applications, and Basics of Environment and Pollution Control do not change based on your engineering branch. A Civil candidate and a Mechanical candidate answer the exact same questions here, which is why this site builds these four sections once and shares them across every branch\'s full mock rather than duplicating them.' },
      { type: 'paragraph', heading: 'Where the real difference is: concentration, not just topic names', text: 'Both papers cover roughly the same number of core topics within Technical Abilities, so a topic list alone makes them look similarly sized. What a topic list hides is how unevenly the marks are distributed across those topics, and that unevenness is where the two branches actually pull apart in how they need to be studied.' },
      { type: 'table', heading: 'Technical Abilities: Civil Engineering topic weighting', headers: ['Topic', 'Share of the 100-question section'], rows: [
        ['Building Materials', '25 questions'],
        ['Structural Analysis', '21 questions'],
        ['Soil Mechanics', '16 questions'],
        ['Hydraulics and Fluid Mechanics', '13 questions'],
        ['Surveying', '11 questions'],
        ['Estimating and Costing', '8 questions'],
        ['Irrigation Engineering', '6 questions'],
      ] },
      { type: 'table', heading: 'Technical Abilities: Mechanical Engineering topic weighting', headers: ['Topic', 'Share of the 100-question section'], rows: [
        ['Engineering Mechanics', '16 questions'],
        ['Strength of Materials', '16 questions'],
        ['Theory of Machines', '15 questions'],
        ['Production Engineering', '14 questions'],
        ['Thermodynamics', '12 questions'],
        ['IC Engines', '11 questions'],
        ['Refrigeration and Air Conditioning', '9 questions'],
        ['Fluid Mechanics and Hydraulic Machines', '7 questions'],
      ] },
      { type: 'callout', text: 'Civil\'s Technical Abilities section is top-heavy: Building Materials and Structural Analysis alone make up 46 of its 100 questions. Mechanical\'s is spread far more evenly across eight topics, with no single topic past 16. Neither shape is "easier". They just reward different study habits.' },
      { type: 'paragraph', heading: 'What this means for your prep split', text: 'If you are preparing for Civil, Building Materials and Structural Analysis deserve the largest, earliest block of your revision time, since together they are nearly half the Technical Abilities section; Irrigation Engineering and Estimating and Costing are real but smaller stakes, and a candidate who has genuinely mastered just those two dominant topics has a real shot at close to half the section regardless of how the rest goes. If you are preparing for Mechanical, no single topic carries that kind of weight, so a more even rotation across Engineering Mechanics, Strength of Materials, Theory of Machines, and Thermodynamics pays off better than concentrating on one or two areas and hoping the rest averages out; skipping any one of the top four topics costs you real marks in a way skipping, say, Irrigation Engineering does not for a Civil candidate.' },
      { type: 'paragraph', text: 'Practice tests for both branches, full mocks and Technical Abilities sectionals, are available from [RRB Junior Engineer mock tests](/rrb-je/mock-test), and the full official section list is on the [RRB JE exam pattern page](/rrb-je/exam-pattern). If you are still weighing JE against the other Railways exams, [RRB NTPC vs Group D vs JE vs ALP](/blog/rrb-ntpc-vs-group-d-vs-je-vs-alp-choosing-your-railway-exam) covers that broader choice; if you want to understand why CBT 2\'s single timer works differently from an exam with sectional locking, see [sectional lock vs composite timer](/blog/sectional-lock-vs-composite-timer).' },
    ],
    faqs: [
      { q: 'Is RRB JE CBT 2 Civil or Mechanical easier?', a: 'There is no verified answer to this. Relative difficulty depends on cutoffs, vacancy counts, and the applicant pool in a given recruitment cycle, all of which shift with every notification and are not tracked on this site. What is structurally stable, cycle after cycle, is that Civil\'s Technical Abilities section concentrates heavily in two topics (Building Materials and Structural Analysis, 46 of 100 questions) while Mechanical\'s spreads evenly across eight, which changes how each should be studied even without settling which is "easier."' },
      { q: 'Can I choose to prepare for Civil or Mechanical, or is it decided by my qualification?', a: 'For most aspirants it is decided by qualification: RRB JE recruits by post code, and each post code\'s eligibility is tied to a specific diploma or degree discipline, so you generally only qualify for the branch matching your own qualification. This comparison mainly helps aspirants with dual-eligible qualifications or those still choosing which diploma stream to pursue.' },
      { q: 'What is the difference between RRB JE CBT 1 and CBT 2?', a: 'CBT 1 is a common 100-question screening test with the same four sections (Mathematics, General Intelligence and Reasoning, General Awareness, General Science) for every JE, DMS, and CMA candidate. CBT 2 is a 150-question paper where the dominant 100-question Technical Abilities section is written specifically for your engineering discipline, so it looks different depending on your branch.' },
      { q: 'Does RRB JE CBT 2 have a sectional lock?', a: 'No. CBT 2 runs on a single composite 120-minute timer for all 150 questions, so you can move between sections freely rather than being locked into one section at a time.' },
      { q: 'Which JE engineering branches does this site cover for CBT 2?', a: 'Civil Engineering and Mechanical Engineering Technical Abilities are built. RRB JE recruits across several disciplines depending on the notification cycle (including Electrical and Electronics & Communication), and DMS and CMA each have their own separate technical syllabus; none of those are built yet.' },
      { q: 'Why doesn\'t this site\'s RRB JE CBT 2 mock include General Awareness?', a: 'General Awareness needs current, fact-checked content tied to when you take the test, not stable, verifiable subject knowledge, so it is deliberately left out. This site\'s CBT 2 full mocks cover the other 135 of the 150 official questions: Technical Abilities plus Physics and Chemistry, Basics of Computers and Applications, and Basics of Environment and Pollution Control.' },
    ],
  },
  {
  "slug": "cg-pet-vs-bcece-two-state-engineering-routes",
  "title": "CG PET vs BCECE: Two State Engineering Routes, Worlds Apart",
  "excerpt": "One has zero negative marking, a free-roam timer. The other locks three subject windows, a full mark off per wrong answer. Know which you're training for.",
  "category": "Exam Guides",
  "readTimeMin": 6,
  "publishedAt": "2026-08-26",
  "authorName": "TakeMockTest Editorial Team",
  "primaryKeyword": "cg pet vs bcece",
  "image": {
    "src": "/images/blog/cg-pet-vs-bcece-two-state-engineering-routes.webp",
    "alt": "Indian engineering aspirant organizing a combined study folder and three subject notebooks",
    "width": 1280,
    "height": 720
  },
  "body": [
    {
      "type": "paragraph",
      "text": "CG PET and BCECE both sit under \"state engineering entrance exam,\" and that label hides how differently the two are actually built. CG PET (Chhattisgarh Pre Engineering Test) is Chhattisgarh's own state route into its engineering colleges. BCECE, at least the PCM route covered here, is not Bihar's primary engineering admission path at all: that is UGEAC, run on JEE Main 2026 scores. BCECE PCM exists for remaining engineering vacancies once the primary counselling round is done, a genuinely different role than CG PET's."
    },
    {
      "type": "takeaways",
      "items": [
        "CG PET has no negative marking at all: +1 for correct, 0 for wrong or unanswered, across 150 questions in 180 minutes.",
        "BCECE PCM deducts a full mark per wrong answer across 300 questions worth 1,200 marks, more than triple CG PET's paper length.",
        "CG PET uses one free-roam 180-minute timer with no subject locking. BCECE PCM locks you into Physics, then Chemistry, then Mathematics, 90 minutes each, with no way back once a subject's window closes.",
        "BCECE PCM is a vacant-seat route, not Bihar's primary engineering admission path; that is UGEAC, run on JEE Main 2026 scores."
      ]
    },
    {
      "type": "table",
      "heading": "CG PET vs BCECE PCM at a glance",
      "headers": [
        "",
        "CG PET",
        "BCECE PCM"
      ],
      "rows": [
        [
          "Questions",
          "150",
          "300"
        ],
        [
          "Total marks",
          "150",
          "1,200"
        ],
        [
          "Duration",
          "180 minutes, one timer",
          "270 minutes, three locked 90-minute windows"
        ],
        [
          "Scoring",
          "+1 correct, 0 wrong",
          "+4 correct, -1 wrong"
        ],
        [
          "Subject navigation",
          "Free, across all three subjects",
          "Locked: Physics then Chemistry then Mathematics, no return"
        ],
        [
          "Role",
          "Chhattisgarh's own state entrance",
          "Bihar's vacant-seat route after UGEAC/JEE Main counselling"
        ]
      ]
    },
    {
      "type": "paragraph",
      "heading": "CG PET: no penalty, no lock, straightforward pacing",
      "text": "CG PET's 150 questions split evenly across Physics, Chemistry, and Mathematics, 50 each, and the entire paper sits under one 180-minute timer with free movement between all three subjects. With zero negative marking, an educated guess never costs you anything beyond the time spent, which changes how you should approach a question you are not fully sure of compared to almost every other exam on this site."
    },
    {
      "type": "paragraph",
      "heading": "BCECE PCM: three papers wearing one exam's name",
      "text": "BCECE PCM's 300 questions (100 each in Physics, Chemistry, Mathematics) are worth 4 marks correct and lose 1 mark wrong, the same scoring shape as JEE Main. What actually separates it from a normal single-timer mock is the three-part lock: Physics gets its own 90 minutes and auto-submits when time runs out, then Chemistry gets a fresh 90 minutes with no way back into Physics, then Mathematics closes the paper the same way. You cannot bank spare time from a subject you finish early and spend it on the next one."
    },
    {
      "type": "callout",
      "text": "BCECE PCM's three 90-minute windows do not let you borrow time between subjects. Finishing Physics in 70 minutes gives you nothing extra in Chemistry."
    },
    {
      "type": "paragraph",
      "heading": "Why the vacant-seat distinction matters",
      "text": "If you are a Bihar-based PCM student, BCECE PCM is not where your primary engineering-admission attempt should go. UGEAC, which uses your JEE Main 2026 rank, is the regular first-year counselling route into Bihar's government engineering colleges. BCECE PCM sits alongside it for seats that remain unfilled once that primary process finishes, worth preparing for as a genuine backup rather than a first-choice plan."
    },
    {
      "type": "paragraph",
      "text": "Practice tests for both are on this site: [CG PET](/cg-pet/mock-test) and [BCECE](/bcece/mock-test), both under the [engineering exams directory](/exams/engineering). If locked subject timers are new to you, [sectional lock vs composite timer](/blog/sectional-lock-vs-composite-timer) covers the general strategy shift a locked format demands."
    }
  ],
  "faqs": [
    {
      "q": "Is BCECE the main way to get into a Bihar government engineering college?",
      "a": "No. The primary route is UGEAC, which uses JEE Main 2026 scores for the regular first-year counselling. BCECE PCM is a separate route for engineering seats that remain vacant after that primary counselling round, worth preparing for as a backup, not a first-choice plan."
    },
    {
      "q": "Does CG PET have negative marking?",
      "a": "No. CG PET awards 1 mark for a correct answer and deducts nothing for a wrong or unanswered one, across 150 questions in 180 minutes."
    },
    {
      "q": "Can I move between Physics, Chemistry, and Mathematics freely in BCECE PCM?",
      "a": "No, and this is the biggest structural difference from CG PET. BCECE PCM locks you into Physics for 90 minutes, then Chemistry for a separate 90 minutes with no return to Physics, then Mathematics for a final 90 minutes, with no time borrowed between any of the three windows."
    },
    {
      "q": "Which exam has more questions, CG PET or BCECE?",
      "a": "BCECE PCM, by a wide margin: 300 questions worth 1,200 marks, against CG PET's 150 questions worth 150 marks. BCECE PCM's paper is exactly twice as long and worth eight times the marks."
    }
  ]
},
  {
  "slug": "bits-hd-vs-gate-cs-which-to-prepare-for",
  "title": "BITS HD vs GATE CS: Which Should You Actually Prepare For?",
  "excerpt": "One gets you an M.E. seat at one university. The other opens doors across every IIT, NIT, and PSU recruiter, with a scoring system three times more complex.",
  "category": "Exam Guides",
  "readTimeMin": 7,
  "publishedAt": "2026-08-26",
  "authorName": "TakeMockTest Editorial Team",
  "primaryKeyword": "bits hd vs gate",
  "image": {
    "src": "/images/blog/bits-hd-vs-gate-cs-which-to-prepare-for.webp",
    "alt": "Indian computer-science aspirant comparing a focused admission folder with several postgraduate pathways",
    "width": 1280,
    "height": 720
  },
  "body": [
    {
      "type": "paragraph",
      "text": "Both BITS HD and GATE test Computer Science at the postgraduate-entry level, and both matter if you are eyeing an M.E. or M.Tech seat. What they are actually for is not the same thing. BITS HD is BITS Pilani's own admission test, valid for a seat at BITS specifically. GATE is a national exam whose score is portable across IITs, NITs, IIITs, and central PSU recruitment drives, which is exactly why its scoring is far more complicated than BITS HD's straightforward multiple-choice format."
    },
    {
      "type": "takeaways",
      "items": [
        "BITS HD's M.E. Computer Science paper is 100 questions, all single-correct multiple-choice, scored a flat +3 correct and -1 wrong.",
        "GATE CS mixes three question types in one paper: MCQ (fractional negative marking, -1/3 or -2/3 depending on marks), MSQ (multi-select, no partial credit), and NAT (typed numerical answer, no negative marking at all).",
        "BITS HD locks you into two timed windows, a 45-minute Test I then a separate 105-minute Computer Science Test II. GATE CS runs on one unrestricted 180-minute timer with free movement across the whole paper.",
        "A GATE score is portable across IITs, NITs, IIITs, and PSU recruitment; a BITS HD score is specific to BITS Pilani's own M.E. programme."
      ]
    },
    {
      "type": "table",
      "heading": "BITS HD (M.E. Computer Science) vs GATE CS",
      "headers": [
        "",
        "BITS HD",
        "GATE CS"
      ],
      "rows": [
        [
          "Questions",
          "100 (30 + 70, two locked papers)",
          "65"
        ],
        [
          "Marks",
          "300",
          "100"
        ],
        [
          "Duration",
          "150 minutes, two locked windows (45 + 105)",
          "180 minutes, one unrestricted timer"
        ],
        [
          "Question types",
          "Single-correct MCQ only",
          "MCQ, MSQ (multi-select), and NAT (numerical)"
        ],
        [
          "Scoring",
          "Flat +3 correct, -1 wrong",
          "Mixed: MCQ -1/3 or -2/3, MSQ and NAT no penalty"
        ],
        [
          "Where the score counts",
          "BITS Pilani's own M.E. admission only",
          "Portable: IITs, NITs, IIITs, PSU recruitment"
        ]
      ]
    },
    {
      "type": "paragraph",
      "heading": "BITS HD: simpler format, one specific destination",
      "text": "Every BITS HD M.E. Computer Science question is single-correct multiple-choice, +3 for a right answer and -1 for a wrong one, no exceptions by question type or mark value. The paper itself is split into two officially separate tests: Test I (30 questions, Core Mathematics and English Language Skills & Logical Reasoning, 45 minutes) and Computer Science Test II (70 questions, 105 minutes), and once Test I's window closes, there is no going back into it. What you get for clearing it, though, is a seat specifically at BITS Pilani, not a portable score you can use anywhere else."
    },
    {
      "type": "paragraph",
      "heading": "GATE CS: harder scoring, wider reach",
      "text": "GATE CS packs three distinct answer formats into 65 questions: MCQ, where a 1-mark wrong answer costs 1/3 mark and a 2-mark wrong answer costs 2/3 mark; MSQ, a multi-select format where you only get credit for selecting the exact correct set, nothing for a partial match and nothing lost for a wrong guess; and NAT, a typed numerical answer with no negative marking either way. That mixed scoring means your guessing strategy has to change question by question, something BITS HD's single flat scheme never asks of you. In exchange, a GATE score works far beyond one university: it is the entry point for M.Tech admission at IITs, NITs, and IIITs, and PSUs use it directly in their own recruitment shortlisting."
    },
    {
      "type": "callout",
      "text": "GATE CS's negative marking changes by question type and mark value in the same paper. BITS HD stays a flat +3/-1 throughout. Practicing one does not automatically prepare you for the other's guessing math."
    },
    {
      "type": "paragraph",
      "heading": "Deciding between the two",
      "text": "If BITS Pilani's M.E. programme is specifically where you want to land, BITS HD is the direct route and its format is genuinely easier to prepare for: one question type, one scoring rule, no numerical-entry or multi-select traps. If you want a score that keeps your options open across multiple institutes or a PSU recruitment path, GATE CS is the one to prioritize, and its mixed scoring is worth practicing specifically rather than assuming general MCQ practice covers it. Many candidates end up preparing for both since the core Computer Science syllabus overlaps heavily, but the exam-day guessing strategy for each needs to stay separate in your head."
    },
    {
      "type": "paragraph",
      "text": "Practice tests: [BITS HD](/bits-hd/mock-test) and [GATE](/gate/mock-test), both under the [engineering exams directory](/exams/engineering). For the general math behind when a guess is worth the risk, see [understanding negative marking](/blog/understanding-negative-marking)."
    }
  ],
  "faqs": [
    {
      "q": "Is a GATE score valid for admission anywhere other than the exam itself?",
      "a": "Yes, that is GATE's main advantage over an institute-specific test like BITS HD. A GATE CS score is used for M.Tech admission across IITs, NITs, and IIITs, and directly in recruitment shortlisting by several central public sector undertakings."
    },
    {
      "q": "Does BITS HD use the same question types as GATE?",
      "a": "No. BITS HD's M.E. Computer Science paper is entirely single-correct multiple-choice, scored a flat +3 for correct and -1 for wrong. GATE CS mixes three types in one paper: MCQ, MSQ (multi-select, no partial credit), and NAT (typed numerical answer, no negative marking)."
    },
    {
      "q": "Which exam has a stricter timer structure?",
      "a": "BITS HD. It locks you into a 45-minute Test I followed by a separate 105-minute Computer Science Test II, with no way back into Test I once its window closes. GATE CS runs on one unrestricted 180-minute timer with free movement across the entire paper."
    },
    {
      "q": "Can I prepare for both BITS HD and GATE CS at the same time?",
      "a": "Yes, since the core Computer Science syllabus overlaps heavily between the two. What needs separate practice is each exam's scoring behavior: BITS HD's flat +3/-1 versus GATE CS's mixed MCQ/MSQ/NAT rules, since the right guessing strategy is not the same on both."
    }
  ]
},
  {
  "slug": "amu-btech-admission-test-pattern-and-scoring",
  "title": "AMU B.Tech. Admission Test 2026-27: Pattern and Scoring",
  "excerpt": "AMU's Guide to Admissions confirms 100 questions, 100 marks, 120 minutes across PCM, not the per-subject split. Any other claim is guessing.",
  "category": "Exam Guides",
  "readTimeMin": 5,
  "publishedAt": "2026-08-26",
  "authorName": "TakeMockTest Editorial Team",
  "primaryKeyword": "amu b.tech admission test marking scheme",
  "image": {
    "src": "/images/blog/amu-btech-admission-test-pattern-and-scoring.webp",
    "alt": "Engineering aspirant reviewing an admission guide beside three subject notebooks and an OMR practice sheet",
    "width": 1280,
    "height": 720
  },
  "body": [
    {
      "type": "paragraph",
      "text": "AMU (Aligarh Muslim University) runs its own B.Tech. Admission Test rather than accepting JEE Main scores, and its Guide to Admissions is unusually specific about the overall shape of the paper: 100 questions, 100 marks, 120 minutes, split across Chemistry, Physics, and Mathematics, delivered OMR-based. What it does not specify, anywhere in the official document, is how those 100 questions divide between the three subjects."
    },
    {
      "type": "takeaways",
      "items": [
        "100 questions, 100 marks, 120 minutes, across Chemistry, Physics, and Mathematics: all four figures are directly confirmed in AMU's Guide to Admissions.",
        "AMU does not publish an official per-subject question count. Any exact split you see quoted, including this site's own 34/33/33, is a practice structure, not an official figure.",
        "Scoring is +1 for a correct answer and -0.25 for a wrong one, a gentler penalty than the -1 many other engineering entrances use.",
        "The paper runs under one unrestricted 120-minute timer with free movement across all three subjects; there is no subject locking."
      ]
    },
    {
      "type": "table",
      "heading": "What is officially confirmed vs practice-only",
      "headers": [
        "Detail",
        "Status"
      ],
      "rows": [
        [
          "100 total questions, 100 total marks, 120 minutes",
          "Official (AMU Guide to Admissions)"
        ],
        [
          "Chemistry, Physics, Mathematics as the three subjects",
          "Official (AMU Guide to Admissions)"
        ],
        [
          "+1 correct, -0.25 wrong",
          "Official (AMU Guide to Admissions)"
        ],
        [
          "Exact question count per subject",
          "Not published officially; this site uses a 34/33/33 split for pacing only"
        ]
      ]
    },
    {
      "type": "paragraph",
      "heading": "The 100/100/120 shell is solid, official-verified detail",
      "text": "AMU's Guide to Admissions is direct about the core numbers: 100 objective questions worth 100 marks, answered inside a single 120-minute window, testing Chemistry, Physics, and Mathematics from the Class 12 syllabus. The scoring, +1 for a correct answer and -0.25 for an incorrect one, is also stated plainly, a lighter penalty than the -1 you would face on CUSAT CAT, BCECE, or Assam CEE, all of which also test PCM."
    },
    {
      "type": "paragraph",
      "heading": "The one number that is not published anywhere",
      "text": "What AMU's official material stops short of is a subject-wise breakdown: it never states how many of the 100 questions come from Chemistry versus Physics versus Mathematics. This site's mock uses a 34 Chemistry, 33 Physics, 33 Mathematics split, and we say so directly on the exam pattern page rather than presenting it as an official figure, because it is not one. It is a practice-control structure built to keep the mock roughly balanced, nothing more."
    },
    {
      "type": "callout",
      "text": "If a source (including this one) hands you an exact per-subject question count for AMU B.Tech. without flagging it as unofficial, treat that number as an estimate, not a fact you can plan your subject-wise time budget around too rigidly."
    },
    {
      "type": "paragraph",
      "heading": "What this means for your prep",
      "text": "Since the exact split is not fixed, do not build a rigid per-subject time budget around any single source's number, this site's included. Prepare all three subjects to a comparable level instead, and rely on the free-navigation 120-minute timer (there is no subject locking here, unlike several other newly added engineering entrances) to move at your own pace between them on exam day rather than a pre-planned subject order."
    },
    {
      "type": "paragraph",
      "text": "Practice under the exact +1/-0.25 scoring on [AMU B.Tech. mock tests](/amu-btech/mock-test), part of the [engineering exams directory](/exams/engineering). For how a lighter negative-marking penalty should change your guessing decisions compared to a -1 exam, see [understanding negative marking](/blog/understanding-negative-marking)."
    }
  ],
  "faqs": [
    {
      "q": "How many questions does AMU B.Tech. Admission Test have from each subject?",
      "a": "AMU's official Guide to Admissions does not publish a subject-wise split, only the total: 100 questions across Chemistry, Physics, and Mathematics combined. Any specific per-subject number, including the 34/33/33 split used on this site, is a practice estimate, not an official figure."
    },
    {
      "q": "What is the negative marking for AMU B.Tech. Admission Test?",
      "a": "0.25 marks are deducted for each wrong answer, and 1 mark is awarded for each correct one. There is no deduction for an unanswered question."
    },
    {
      "q": "Is the AMU B.Tech. Admission Test timed by subject, or one combined timer?",
      "a": "One combined, unrestricted 120-minute timer covers all 100 questions across all three subjects, with free movement between Chemistry, Physics, and Mathematics. There is no subject locking."
    },
    {
      "q": "Does AMU B.Tech. admission use JEE Main scores?",
      "a": "No. AMU conducts its own B.Tech. Admission Test rather than using JEE Main as its admission criterion."
    }
  ]
},
  {
  "slug": "assam-cee-2026-exam-pattern-explained",
  "title": "Assam CEE 2026 Exam Pattern: 120 Questions, +4/-1 Scoring",
  "excerpt": "Assam CEE looks like a smaller JEE Main: same +4/-1 scoring, same PCM subjects. The syllabus underneath differs, and that is what first-timers miss.",
  "category": "Exam Guides",
  "readTimeMin": 6,
  "publishedAt": "2026-08-26",
  "authorName": "TakeMockTest Editorial Team",
  "primaryKeyword": "assam cee marking scheme",
  "image": {
    "src": "/images/blog/assam-cee-2026-exam-pattern-explained.webp",
    "alt": "Assam engineering aspirant cross-checking state-board study books with physics, chemistry and mathematics notes",
    "width": 1280,
    "height": 720
  },
  "body": [
    {
      "type": "paragraph",
      "text": "Assam CEE, the Assam Combined Entrance Examination, is run by Assam Science and Technology University for B.Tech admission to engineering colleges across Assam. It shares JEE Main's +4/-1 scoring shape and its three PCM subjects, which makes it easy to assume the two exams test the same material. They do not: Assam CEE is built on the Assam State School Education Board's Division-II Higher Secondary syllabus, not the NCERT-aligned syllabus JEE Main draws from, and that gap matters more than the shared scoring pattern suggests."
    },
    {
      "type": "takeaways",
      "items": [
        "120 questions, 480 marks, 180 minutes, split equally across Mathematics, Physics, and Chemistry: 40 questions and 160 marks each.",
        "+4 for a correct answer, -1 for a wrong one, an unanswered question scores zero, and a question with more than one marked response also scores zero.",
        "The official exam runs on the ASSEB Division-II Higher Secondary syllabus, not the NCERT-aligned syllabus JEE Main tests. Assam-board students have a natural edge; CBSE-only students need deliberate syllabus-gap prep.",
        "The official paper is delivered in English and Assamese; this site's mock is English-only, a platform choice rather than a format the real exam offers."
      ]
    },
    {
      "type": "table",
      "heading": "Assam CEE 2026 at a glance",
      "headers": [
        "Detail",
        "Figure"
      ],
      "rows": [
        [
          "Total questions",
          "120 (40 Mathematics, 40 Physics, 40 Chemistry)"
        ],
        [
          "Total marks",
          "480 (160 per subject)"
        ],
        [
          "Duration",
          "180 minutes, one timer, free navigation"
        ],
        [
          "Scoring",
          "+4 correct, -1 wrong, 0 unanswered"
        ],
        [
          "Syllabus basis",
          "ASSEB Division-II (Higher Secondary), not NCERT"
        ],
        [
          "Conducting body",
          "Assam Science and Technology University"
        ]
      ]
    },
    {
      "type": "paragraph",
      "heading": "The scoring looks familiar, the syllabus is not",
      "text": "Mathematics, Physics, and Chemistry each contribute 40 questions worth 160 marks, for 120 questions and 480 marks total, and every subject uses the identical +4/-1 scoring rule. A question with more than one response marked also scores zero, treated the same as a wrong answer rather than an outright disqualification. On paper this reads almost like a compressed JEE Main. The syllabus underneath is where the resemblance stops: Assam CEE draws from the Assam State School Education Board's own Division-II Higher Secondary curriculum, a state board syllabus, not the NCERT-aligned material JEE Main is built on."
    },
    {
      "type": "callout",
      "text": "A student who has only studied the NCERT/CBSE syllabus for JEE Main should not assume that preparation transfers directly to Assam CEE. The underlying board syllabus is different, even though the question count, scoring, and subject split look similar."
    },
    {
      "type": "paragraph",
      "heading": "One combined timer, no subject locking",
      "text": "All 120 questions sit under a single 180-minute timer with free movement across Mathematics, Physics, and Chemistry, the same open-navigation format as JEE Main and unlike the locked three-window structure BCECE PCM uses for its own PCM paper. You can leave a subject mid-way and come back to it later in the same 180 minutes without losing access."
    },
    {
      "type": "paragraph",
      "heading": "English and Assamese, in practice",
      "text": "The official Assam CEE paper is offered in English and Assamese. This site's mock is presented in English only, a deliberate platform choice rather than a claim that the real exam is English-only, worth knowing if you plan to sit the actual paper in Assamese."
    },
    {
      "type": "paragraph",
      "text": "Practice under the real scoring rule on [Assam CEE mock tests](/assam-cee/mock-test), part of the [engineering exams directory](/exams/engineering). If you are weighing Assam CEE against a national option, [JEE Main, BITSAT, or a state CET](/blog/jee-main-vs-bitsat-vs-state-cets-engineering-prep) covers how the broader marking-scheme landscape compares."
    }
  ],
  "faqs": [
    {
      "q": "Is Assam CEE's syllabus the same as JEE Main's?",
      "a": "No. Assam CEE is built on the Assam State School Education Board's Division-II Higher Secondary syllabus, a state board curriculum, while JEE Main draws from the NCERT-aligned syllabus. The scoring pattern looks similar (both use +4/-1), but the underlying material is not the same."
    },
    {
      "q": "What happens if I mark more than one answer for a question in Assam CEE?",
      "a": "It scores zero, treated the same as a wrong answer rather than disqualifying the attempt outright. An unanswered question also scores zero."
    },
    {
      "q": "Can I take Assam CEE in Assamese?",
      "a": "Yes, the official exam is offered in English and Assamese. This site's mock test is presented in English only, a platform choice, not a limitation of the real exam."
    },
    {
      "q": "Does Assam CEE lock subjects like BCECE does?",
      "a": "No. Assam CEE runs under one combined 180-minute timer with free movement across Mathematics, Physics, and Chemistry, closer to JEE Main's open-navigation format than BCECE PCM's three locked 90-minute subject windows."
    }
  ]
},
  {
  "slug": "cusat-cat-2026-what-to-expect",
  "title": "CUSAT CAT 2026: 225 Questions, One Free-Roam Timer",
  "excerpt": "CUSAT CAT packs more questions into 180 minutes than almost any other entrance here, but lets you move freely between them, which changes how you pace it.",
  "category": "Exam Guides",
  "readTimeMin": 5,
  "publishedAt": "2026-08-26",
  "authorName": "TakeMockTest Editorial Team",
  "primaryKeyword": "cusat cat how many questions",
  "image": {
    "src": "/images/blog/cusat-cat-2026-what-to-expect.webp",
    "alt": "Indian engineering aspirant practicing rapid question navigation on a laptop with three subject workbooks",
    "width": 1280,
    "height": 720
  },
  "body": [
    {
      "type": "paragraph",
      "text": "CUSAT CAT, the Cochin University of Science and Technology Common Admission Test, is the B.Tech Test Code 101 route into CUSAT's own engineering programmes, separate from CUSAT's B.Tech Marine Engineering test and its lateral-entry B.Tech admission route, neither of which this site covers. What stands out about Test Code 101's format is sheer density: 225 questions in 180 minutes works out to just under 48 seconds per question on average, tighter than most other entrance exams on this site, and there is no subject locking at all to slow you down further."
    },
    {
      "type": "takeaways",
      "items": [
        "225 questions, 900 marks, 180 minutes: Mathematics 90, Physics 75, Chemistry 60.",
        "+4 for a correct answer, -1 for a wrong one, the same shape as JEE Main.",
        "One unrestricted timer for the whole paper, with free navigation across all three subjects and no subject locking.",
        "225 questions in 180 minutes averages under 48 seconds a question, tighter pacing than most comparable state and institute entrances."
      ]
    },
    {
      "type": "table",
      "heading": "CUSAT CAT 2026 B.Tech (Test Code 101)",
      "headers": [
        "Detail",
        "Figure"
      ],
      "rows": [
        [
          "Total questions",
          "225 (Mathematics 90, Physics 75, Chemistry 60)"
        ],
        [
          "Total marks",
          "900"
        ],
        [
          "Duration",
          "180 minutes, one unrestricted timer"
        ],
        [
          "Scoring",
          "+4 correct, -1 wrong"
        ],
        [
          "Subject locking",
          "None: free navigation across all three subjects"
        ],
        [
          "Syllabus basis",
          "Plus Two (Class 11-12) syllabus"
        ]
      ]
    },
    {
      "type": "paragraph",
      "heading": "The pacing math is the real story here",
      "text": "Mathematics carries the most weight at 90 questions, followed by Physics at 75 and Chemistry at 60, for 225 questions and 900 marks total, all inside one 180-minute window. Divide that out and you get roughly 0.8 minutes, under 48 seconds, per question on average, tighter than CG PET's 150-question paper (72 seconds a question) or Assam CEE's 120-question paper (90 seconds a question). If your current exam prep has trained you to spend a comfortable minute or more per question, CUSAT CAT will feel noticeably rushed until you adjust."
    },
    {
      "type": "callout",
      "text": "225 questions in 180 minutes leaves under 48 seconds per question on average. That is tighter than CG PET or Assam CEE, and worth timing yourself against specifically before exam day."
    },
    {
      "type": "paragraph",
      "heading": "No subject locking, which is a genuine advantage here",
      "text": "Unlike BCECE PCM's locked three-window structure or BITS HD's two-part timer, CUSAT CAT's current 2026 pattern uses a single unrestricted 180-minute timer with free movement between Mathematics, Physics, and Chemistry. Given the tight per-question pace, that freedom matters: you can park a slow question, clear faster ones in another subject, and come back, rather than losing time stuck inside a locked subject window you cannot leave."
    },
    {
      "type": "paragraph",
      "heading": "One test code among several",
      "text": "CUSAT runs more than one entrance test under the CAT name. Test Code 101, the one this site covers, is specifically the B.Tech route. CUSAT's B.Tech Marine Engineering test and its lateral-entry B.Tech admission test are separate exams with their own patterns, not covered here, so confirm which test code applies to your target programme before assuming this pattern is the one you need."
    },
    {
      "type": "paragraph",
      "text": "Practice the real pace on [CUSAT CAT mock tests](/cusat-cat/mock-test), part of the [engineering exams directory](/exams/engineering). For general strategy on trading speed against accuracy under a tight per-question budget, see [speed vs accuracy in timed tests](/blog/speed-vs-accuracy-in-timed-tests)."
    }
  ],
  "faqs": [
    {
      "q": "How much time do I have per question in CUSAT CAT?",
      "a": "On average, under 48 seconds. The paper has 225 questions inside a single 180-minute timer, tighter pacing than most other engineering entrances on this site."
    },
    {
      "q": "Does CUSAT CAT lock you into one subject at a time?",
      "a": "No. The current 2026 pattern uses one unrestricted 180-minute timer with free navigation across Mathematics, Physics, and Chemistry. There is no subject locking or separate timing window for any subject."
    },
    {
      "q": "Does CUSAT CAT Test Code 101 cover CUSAT's Marine Engineering admission test too?",
      "a": "No. Test Code 101 is specifically the B.Tech route. CUSAT's B.Tech Marine Engineering test and its lateral-entry B.Tech admission test are separate exams with their own patterns."
    },
    {
      "q": "What is the negative marking for CUSAT CAT?",
      "a": "+4 for a correct answer and -1 for a wrong one, the same scoring shape as JEE Main."
    }
  ]
},
  {
  "slug": "engineering-entrance-exams-beyond-jee-main-2026-roundup",
  "title": "Seven Engineering Entrance Exams Beyond JEE Main",
  "excerpt": "JEE Main and BITSAT dominate the talk, but a minority-institution test, three state CETs, a backup route, and two PG exams round out this site's coverage.",
  "category": "Exam Guides",
  "readTimeMin": 8,
  "publishedAt": "2026-08-26",
  "authorName": "TakeMockTest Editorial Team",
  "primaryKeyword": "engineering entrance exams other than jee main",
  "image": {
    "src": "/images/blog/engineering-entrance-exams-beyond-jee-main-2026-roundup.webp",
    "alt": "Engineering aspirant organizing seven unlabelled entrance-exam folders around a central study plan",
    "width": 1280,
    "height": 720
  },
  "body": [
    {
      "type": "paragraph",
      "text": "Most engineering-entrance conversations stop at JEE Main, JEE Advanced, and BITSAT, and understandably so, they cover the largest number of seats. Seven more exams on this site fill in the rest of the picture: one central university's own admission test, three state entrance exams, one vacant-seat backup route, and two postgraduate exams. None of them are interchangeable with each other, and knowing what each one is actually for saves you from preparing for the wrong thing."
    },
    {
      "type": "takeaways",
      "items": [
        "AMU B.Tech. Admission Test is Aligarh Muslim University's own exam, not JEE-Main-based: 100 questions, +1/-0.25, and no officially published per-subject split.",
        "Assam CEE, CG PET, and CUSAT CAT are each a state or institute's own primary engineering entrance, with three very different formats: locked timer, free timer, and no-negative-marking respectively.",
        "BCECE PCM is not Bihar's main engineering route (that is UGEAC, via JEE Main); it exists for vacant seats after the primary counselling round.",
        "BITS HD and GATE CS both test Computer Science at the postgraduate level, but a BITS HD score only counts at BITS Pilani while a GATE score is portable across IITs, NITs, IIITs, and PSU recruitment."
      ]
    },
    {
      "type": "table",
      "heading": "Seven exams, seven different shapes",
      "headers": [
        "Exam",
        "Questions",
        "Scoring",
        "Timer"
      ],
      "rows": [
        [
          "AMU B.Tech.",
          "100",
          "+1 / -0.25",
          "One 120-min timer, free navigation"
        ],
        [
          "Assam CEE",
          "120",
          "+4 / -1",
          "One 180-min timer, free navigation"
        ],
        [
          "CG PET",
          "150",
          "+1 / 0 (no negative marking)",
          "One 180-min timer, free navigation"
        ],
        [
          "CUSAT CAT",
          "225",
          "+4 / -1",
          "One 180-min timer, free navigation"
        ],
        [
          "BCECE PCM",
          "300",
          "+4 / -1",
          "Three locked 90-min windows"
        ],
        [
          "BITS HD (M.E. CS)",
          "100",
          "+3 / -1",
          "Two locked windows (45 + 105 min)"
        ],
        [
          "GATE CS",
          "65",
          "Mixed by question type",
          "One 180-min timer, free navigation"
        ]
      ]
    },
    {
      "type": "paragraph",
      "heading": "AMU B.Tech.: a central university's own gate",
      "text": "Aligarh Muslim University runs its own B.Tech. Admission Test rather than accepting JEE Main scores: 100 questions across Chemistry, Physics, and Mathematics, 120 minutes, +1 for a correct answer and -0.25 for a wrong one. AMU's official material confirms the total question count but never publishes how those questions split by subject, worth knowing before you trust any source's exact per-subject number, this site's included. See [AMU B.Tech. pattern explained](/blog/amu-btech-admission-test-pattern-and-scoring) for the full detail."
    },
    {
      "type": "paragraph",
      "heading": "Three state entrances, three different formats",
      "text": "Assam CEE (120 questions, +4/-1, ASSEB Division-II state-board syllabus rather than NCERT), CG PET (150 questions, no negative marking at all), and CUSAT CAT (225 questions, the tightest pacing of the seven at under 48 seconds a question) are each a state or institute's own primary route into its engineering colleges. All three run on a single free-navigation timer, but the scoring and pacing differ enough that treating them as interchangeable prep would be a mistake. [Assam CEE explained](/blog/assam-cee-2026-exam-pattern-explained) and [CUSAT CAT explained](/blog/cusat-cat-2026-what-to-expect) cover each in detail."
    },
    {
      "type": "paragraph",
      "heading": "BCECE PCM: a backup route, not a first choice",
      "text": "BCECE PCM is easy to mistake for Bihar's main engineering entrance. It is not: the regular first-year route into Bihar's government engineering colleges is UGEAC, using JEE Main 2026 scores. BCECE PCM covers seats that remain vacant once that primary counselling finishes, a genuine backup worth preparing for, but not where a Bihar-based PCM student's main effort should go. It also runs the strictest timer structure of any exam on this list: three locked 90-minute subject windows with zero time borrowed between them. See [CG PET vs BCECE](/blog/cg-pet-vs-bcece-two-state-engineering-routes) for the full comparison against a free-timer state exam."
    },
    {
      "type": "callout",
      "text": "BCECE PCM and BITS HD are the two locked-timer exams on this list. Every other exam here uses one free-navigation timer for the whole paper."
    },
    {
      "type": "paragraph",
      "heading": "Two postgraduate exams, two very different reaches",
      "text": "BITS HD and GATE CS both sit at the postgraduate Computer Science level, but they are not substitutes for each other. BITS HD's M.E. Computer Science paper is a straightforward 100-question, all-MCQ format, +3/-1, valid for a seat at BITS Pilani specifically. GATE CS mixes MCQ, multi-select, and numerical-answer questions with fractional negative marking, and a GATE score is portable across IITs, NITs, IIITs, and PSU recruitment drives. [BITS HD vs GATE CS](/blog/bits-hd-vs-gate-cs-which-to-prepare-for) breaks down which one to prioritize."
    },
    {
      "type": "paragraph",
      "text": "Practice tests for all seven are live now: [AMU B.Tech.](/amu-btech/mock-test), [Assam CEE](/assam-cee/mock-test), [CG PET](/cg-pet/mock-test), [CUSAT CAT](/cusat-cat/mock-test), [BCECE](/bcece/mock-test), [BITS HD](/bits-hd/mock-test), and [GATE](/gate/mock-test), all under the [engineering exams directory](/exams/engineering). For the mainstream national and institute exams these sit alongside, see [JEE Main, BITSAT, or a state CET](/blog/jee-main-vs-bitsat-vs-state-cets-engineering-prep)."
    }
  ],
  "faqs": [
    {
      "q": "Which of these seven exams is the primary engineering entrance for its state or institution?",
      "a": "AMU B.Tech., Assam CEE, CG PET, and CUSAT CAT are each their institution's or state's own primary route. BCECE PCM is the exception: Bihar's primary route is UGEAC, using JEE Main scores, and BCECE PCM covers vacant seats after that."
    },
    {
      "q": "Which of these exams have no subject locking?",
      "a": "AMU B.Tech., Assam CEE, CG PET, CUSAT CAT, and GATE CS all run on one free-navigation timer with no subject locking. BCECE PCM and BITS HD are the two exceptions, both using locked timing windows per subject or test."
    },
    {
      "q": "Is a GATE CS score usable outside of one specific university?",
      "a": "Yes. A GATE CS score is portable across IITs, NITs, and IIITs for M.Tech admission, and several PSUs use it directly in recruitment. A BITS HD score, by contrast, is specific to BITS Pilani's own M.E. programme."
    },
    {
      "q": "Which of these seven exams has no negative marking?",
      "a": "CG PET is the only one: +1 for a correct answer, 0 for a wrong or unanswered one. Every other exam on this list deducts marks for at least some wrong answers."
    }
  ]
},
  {
    slug: 'rrb-paramedical-cbt-pattern-what-this-site-can-and-cannot-cover',
    title: 'RRB Paramedical CBT: Why Only 30 of 100 Questions Are Shared',
    excerpt: 'Professional Ability is 70 of 100 questions, a different syllabus per post. Honesty about coverage matters more than pretending one mock test fits everyone.',
    category: 'Exam Guides',
    readTimeMin: 6,
    publishedAt: '2026-08-29',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'rrb paramedical cbt shared sections',
    image: {
      src: '/images/blog/rrb-paramedical-cbt-pattern-what-this-site-can-and-cannot-cover.webp',
      alt: 'Paramedical aspirant comparing shared aptitude practice with separate healthcare study materials',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'RRB Paramedical recruits for roughly seven to nine distinct posts, Staff Nurse, Pharmacist, Laboratory Assistant, Radiographer, ECG Technician, and others, all under a single Computer Based Test with one shared name. That shared name hides a real structural problem for anyone building generic practice material: 70 of the 100 questions test Professional Ability, and Professional Ability is not one syllabus. It is a different, post-specific technical syllabus for every single post on the list.' },
      { type: 'takeaways', items: [
        'RRB Paramedical is a single-CBT exam: it directly decides shortlisting for Document Verification, with no second written stage to fall back on if the CBT goes badly.',
        'Professional Ability, 70 of the 100 questions, is post-specific: Staff Nurse, Pharmacist, Laboratory Assistant, Radiographer, ECG Technician, and several other posts each carry an entirely different professional syllabus under the same CBT label.',
        'Only the remaining 30 questions, General Awareness, General Arithmetic and General Intelligence and Reasoning, and General Science, are genuinely common to every post.',
        'The minimum pass percentage is 40% for UR and EWS, 30% for OBC and SC, and 25% for ST. That bar applies to your overall score, not just the sections you can meaningfully practice for generically.',
      ] },
      { type: 'table', heading: 'The official CBT pattern', headers: ['Section', 'Questions', 'Marks', 'Common to every post?'], rows: [
        ['Professional Ability', '70', '70', 'No, differs by post'],
        ['General Awareness', '10', '10', 'Yes'],
        ['General Arithmetic, General Intelligence and Reasoning', '10', '10', 'Yes'],
        ['General Science', '10', '10', 'Yes'],
      ] },
      { type: 'paragraph', heading: 'Professional Ability is really seven-plus different exams wearing one label', text: 'A Staff Nurse candidate\'s Professional Ability questions have almost nothing in common with a Radiographer\'s or a Pharmacist\'s. Each is a genuine professional syllabus tied to that specific role, not a shared pool of general medical trivia that a single question bank could honestly represent. Building one generic "Professional Ability" mock would mean either covering none of the posts accurately or picking one post and mislabeling it as universal, neither of which is an honest way to help a candidate prepare.' },
      { type: 'paragraph', heading: 'What a shared mock test can and can\'t do for you', text: 'This site\'s RRB Paramedical practice covers exactly the 30 questions that are genuinely identical across every post: General Awareness, General Arithmetic and General Intelligence and Reasoning, and General Science. That is real, honest coverage of a real 30% of the paper, not a stand-in for the other 70%. For Professional Ability itself, your own post\'s official syllabus and specialised study material remain the only accurate source, since no general-purpose resource can substitute for post-specific technical depth.' },
      { type: 'callout', text: 'This site\'s RRB Paramedical practice covers exactly the 30 questions that are genuinely identical across every post, not a stand-in for the 70 that aren\'t.' },
      { type: 'paragraph', heading: 'One CBT, no second chance', text: 'Unlike exams that follow a screening CBT with a separate Mains, RRB Paramedical has a single CBT that directly decides shortlisting for Document Verification, limited to the number of notified vacancies. There is no fallback stage to make up ground if the CBT underperforms, which makes the 30 genuinely common questions worth over-preparing rather than treating as a minor slice of the paper: at 1 mark each with no sectional lock across the full 90-minute paper, they are 30% of your score with no second attempt to recover it.' },
      { type: 'paragraph', text: 'Practice the three common sections and the combined full mock at [RRB Paramedical mock tests](/rrb-paramedical/mock-test); the complete official section breakdown, including exactly why Professional Ability is excluded, is on the [RRB Paramedical exam pattern page](/rrb-paramedical/exam-pattern). For the marking-scheme math behind a single wrong answer under 1/3 negative marking, see [understanding negative marking](/blog/understanding-negative-marking).' },
    ],
    faqs: [
      { q: 'Does this site have a Full Mock Test for RRB Paramedical?', a: 'Yes, covering the 30 questions common to every post: General Awareness, General Arithmetic and General Intelligence and Reasoning, and General Science. Professional Ability (70 of the 100 official questions) is not included, since it is a different, post-specific syllabus for each post rather than one shared subject.' },
      { q: 'Which subjects are common across every RRB Paramedical post?', a: 'General Awareness, General Arithmetic and General Intelligence and Reasoning, and General Science, 30 of the 100 official questions. Professional Ability, the remaining 70 questions, differs by post.' },
      { q: 'What is the negative marking scheme for RRB Paramedical?', a: 'One-third of a mark is deducted for each wrong answer, the same 1/3 scheme used across most RRB recruitment exams, with 1 mark awarded for each correct answer and no deduction for unattempted questions.' },
      { q: 'Is there a stage after the RRB Paramedical CBT?', a: 'The CBT directly decides shortlisting for Document Verification, limited to the number of notified vacancies. There is no second written stage.' },
      { q: 'What is the minimum pass percentage for RRB Paramedical?', a: '40% for UR and EWS candidates, 30% for OBC and SC candidates, and 25% for ST candidates, applied to the overall CBT score.' },
    ],
  },
  {
    slug: 'ssc-gd-constable-cbe-pattern-speed-over-difficulty',
    title: 'SSC GD Constable: The CBE That Rewards Speed Over Difficulty',
    excerpt: 'Eighty questions, sixty minutes, no sectional lock, and every question is Class 10 level. The content is not the hard part: the 45-second-per-question pace is.',
    category: 'Exam Guides',
    readTimeMin: 5,
    publishedAt: '2026-08-29',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'is ssc gd constable exam easy',
    image: {
      src: '/images/blog/ssc-gd-constable-cbe-pattern-speed-over-difficulty.webp',
      alt: 'SSC GD aspirant practicing a computer-based test beside rough-work notes and an hourglass',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'SSC GD Constable\'s Computer Based Examination looks approachable on paper: every question is set at Matriculation (Class 10) level, well within reach for most candidates who cleared school. What the [syllabus](/ssc-gd-constable/syllabus) difficulty hides is the pace the paper actually demands: 80 questions in 60 minutes, with no sectional lock to fall back on if one section runs long.' },
      { type: 'takeaways', items: [
        '80 questions in 60 minutes works out to 45 seconds per question on average, tighter than the pacing on several higher-difficulty SSC exams.',
        'There is no sectional lock: the entire 60-minute timer is one composite block, so time saved in a fast section can be spent on a slower one.',
        'Every question is worth 2 marks, with 0.5 marks deducted for a wrong answer, the same 1-in-4 penalty ratio used across most SSC exams, just scaled by the 2-mark weighting.',
        'The CBE is the only written stage: a Physical Efficiency Test / Physical Standard Test, a Detailed Medical Examination, and Document Verification follow, none of them written.',
      ] },
      { type: 'table', heading: 'The official CBE pattern', headers: ['Section', 'Questions', 'Marks', 'Duration'], rows: [
        ['General Intelligence and Reasoning', '20', '40', 'Shared 60-min timer'],
        ['General Knowledge and General Awareness', '20', '40', 'Shared 60-min timer'],
        ['Elementary Mathematics', '20', '40', 'Shared 60-min timer'],
        ['English/Hindi', '20', '40', 'Shared 60-min timer'],
      ] },
      { type: 'paragraph', heading: '45 seconds a question, at Class 10 difficulty', text: 'Matriculation-level content means most candidates can solve the vast majority of individual questions correctly, given enough time. The CBE does not give unlimited time: at 45 seconds a question on average, the real skill being tested is fast, confident recognition, not slow, careful derivation. A candidate who can solve every question but needs 90 seconds to do it will run out of time before running out of correct answers.' },
      { type: 'paragraph', heading: 'No sectional lock means banking time actually pays off here', text: 'Because all four sections share one 60-minute timer instead of four locked 15-minute windows, a candidate who is fast at Elementary Mathematics can genuinely spend the time saved there on General Knowledge and General Awareness questions that need more thought. That flexibility does not exist on exams with a hard sectional lock, where finishing a section early just means sitting on unused time, so it is worth actively practicing full mocks under the composite timer rather than sectional tests alone.' },
      { type: 'callout', text: 'A candidate who can solve every question but needs 90 seconds to do it will run out of time before running out of correct answers.' },
      { type: 'paragraph', text: 'Practice the full CBE pattern, with sectional tests for each of the four subjects, at [SSC GD Constable mock tests](/ssc-gd-constable/mock-test); the complete official pattern is on the [SSC GD Constable exam pattern page](/ssc-gd-constable/exam-pattern). For more on how a composite timer changes exam strategy compared to a sectional lock, see [sectional lock vs composite timer](/blog/sectional-lock-vs-composite-timer); for the case that speed itself is a skill worth training, see [speed vs accuracy in timed tests](/blog/speed-vs-accuracy-in-timed-tests).' },
    ],
    faqs: [
      { q: 'What is the SSC GD Constable exam pattern?', a: '80 questions for 160 marks in 60 minutes, split into four 20-question sections: General Intelligence and Reasoning, General Knowledge and General Awareness, Elementary Mathematics, and English/Hindi, each worth 2 marks per question.' },
      { q: 'Is there negative marking in SSC GD Constable?', a: 'Yes, 0.5 marks are deducted for each wrong answer, a quarter of the 2 marks awarded per correct answer, the same 1-in-4 ratio used across most SSC exams.' },
      { q: 'Is SSC GD Constable\'s syllabus difficult?', a: 'The content itself is set at Matriculation (Class 10) level, which most candidates find manageable. The real challenge is pace: 80 questions in 60 minutes averages 45 seconds per question.' },
      { q: 'Does SSC GD Constable have sectional locking?', a: 'No. All four sections share a single 60-minute composite timer, so you can move freely between sections and spend saved time from a fast section on a slower one.' },
      { q: 'What happens after the SSC GD Constable CBE?', a: 'A Physical Efficiency Test (PET) and Physical Standard Test (PST), a Detailed Medical Examination, and Document Verification follow. None of these are written stages.' },
    ],
  },
  {
    slug: 'ssc-cpo-paper-1-vs-paper-2-same-marks-different-shape',
    title: 'SSC CPO Paper 1 vs Paper 2: Same Marks, Different Shape',
    excerpt: 'Paper 2 isn\'t a smaller round tacked on. It carries as many marks as all four Paper 1 sections combined, and is the first tie-breaker in the final merit list.',
    category: 'Exam Guides',
    readTimeMin: 6,
    publishedAt: '2026-08-29',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'ssc cpo paper 1 vs paper 2',
    image: {
      src: '/images/blog/ssc-cpo-paper-1-vs-paper-2-same-marks-different-shape.webp',
      alt: 'Two balanced study workspaces comparing multiple subject notebooks with focused language preparation',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'SSC CPO candidates sit two separately named papers, and it is easy to assume the one that comes later, after a Physical Standard Test and Physical Endurance Test, matters less. It doesn\'t. Paper 1 and Paper 2 each carry 200 marks, and they are built to completely different shapes: Paper 1 locks you into four separate 30-minute sections, while Paper 2 is a single, uninterrupted 120-minute paper on English Language and Comprehension alone.' },
      { type: 'takeaways', items: [
        'Paper 1 and Paper 2 carry identical weight, 200 marks each, so Paper 2 is exactly half your SSC CPO score, not a smaller bonus round.',
        'Paper 1 locks you into four separately timed 30-minute sections with no shifting unused time between them; Paper 2 is one continuous 120-minute block, no sectional lock at all.',
        'Paper 2 also doubles as the first tie-breaker when two candidates\' total marks are equal, so English preparation matters even for candidates who are strong everywhere else.',
        'A Physical Standard Test (PST) and Physical Endurance Test (PET), neither written, sit between Paper 1 and Paper 2 in the process.',
      ] },
      { type: 'table', heading: 'Paper 1 vs Paper 2, side by side', headers: ['', 'Paper 1', 'Paper 2'], rows: [
        ['Questions / Marks', '200 / 200', '200 / 200'],
        ['Duration', '120 minutes', '120 minutes'],
        ['Sections', '4 (50Q each)', '1 (English Language and Comprehension)'],
        ['Timer structure', 'Sectional lock, 30 min per section', 'Single continuous timer, no lock'],
        ['Negative marking', '0.25 per wrong answer', '0.25 per wrong answer'],
      ] },
      { type: 'paragraph', heading: 'Same marks, opposite shape', text: 'Paper 1 covers General Intelligence and Reasoning, General Knowledge and General Awareness, Quantitative Aptitude, and English Comprehension, 50 questions each, with a hard 30-minute window per section: finishing one section early does not help with another. Paper 2 removes that structure entirely. It is 200 questions of English Language and Comprehension, spotting errors, fill in the blanks, synonyms and antonyms, idioms and phrases, one word substitution, sentence improvement, para jumbles, cloze test, and reading comprehension, run on one continuous 120-minute timer with no internal locking.' },
      { type: 'paragraph', heading: 'Why Paper 2 isn\'t secondary', text: 'It is tempting to treat Paper 1 as "the real exam" since it comes first and covers more subjects, with Paper 2 as a formality once you\'ve already cleared the physical tests. The marks say otherwise: Paper 2 is worth exactly as much as all of Paper 1 combined, and its marks are added directly to Paper 1\'s in the final merit list. It is also the designated first tie-breaker when two candidates finish with equal total marks, which means a candidate who is otherwise evenly matched with a competitor can be decided by English performance alone. Where both papers sit in the wider process, from the physical tests through to document verification, is set out in the [SSC CPO selection process](/ssc-cpo/selection-process).' },
      { type: 'callout', text: 'Paper 2 is worth exactly as much as all of Paper 1 combined, and it is the first tie-breaker when two candidates\' total marks are equal.' },
      { type: 'paragraph', text: 'Practice both papers, full mocks and sectional tests, at [SSC CPO mock tests](/ssc-cpo/mock-test); the complete official pattern for both papers is on the [SSC CPO exam pattern page](/ssc-cpo/exam-pattern). For how a sectional lock changes exam strategy compared to a single composite timer, see [sectional lock vs composite timer](/blog/sectional-lock-vs-composite-timer).' },
    ],
    faqs: [
      { q: 'Are SSC CPO Paper 1 and Paper 2 equally important?', a: 'Yes. Both carry 200 marks each, and both count directly toward the final merit list. Paper 2 is not a smaller or secondary round.' },
      { q: 'What is the timing difference between SSC CPO Paper 1 and Paper 2?', a: 'Paper 1 has four separately timed 30-minute sections with no shifting of unused time between them. Paper 2 is a single continuous 120-minute paper with no sectional lock at all.' },
      { q: 'What happens between SSC CPO Paper 1 and Paper 2?', a: 'Candidates who clear Paper 1 undergo a Physical Standard Test (PST) and Physical Endurance Test (PET), neither of which is written, before sitting Paper 2.' },
      { q: 'Is there negative marking in SSC CPO Paper 1 and Paper 2?', a: 'Yes, in both: 0.25 marks are deducted for each wrong answer in Paper 1 and in Paper 2.' },
      { q: 'What breaks a tie in the SSC CPO final merit list?', a: 'Paper 2 marks are the first tie-breaker when two candidates\' total marks are equal, which is one reason English preparation matters even for candidates who are strong in Paper 1\'s other sections.' },
    ],
  },
  {
    slug: 'ssc-je-paper-1-only-a-quarter-of-the-exam',
    title: 'SSC JE Paper I vs Paper II: What This Site Covers',
    excerpt: 'General Engineering is in both papers, 100 marks of Paper I and all 300 of Paper II. That is why a Paper I mock here covers half of Paper I.',
    category: 'Exam Guides',
    readTimeMin: 5,
    publishedAt: '2026-08-29',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'ssc je paper 1 vs paper 2',
    image: {
      src: '/images/blog/ssc-je-paper-1-only-a-quarter-of-the-exam.webp',
      alt: 'Engineering aspirant studying general aptitude beside civil, electrical and mechanical learning materials',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'SSC JE recruits Junior Engineers across Civil, Mechanical, and Electrical disciplines through two Computer-Based papers worth 500 marks between them, and discipline-specific General Engineering runs through both. Paper I is 200 questions for 200 marks: General Intelligence and Reasoning and General Awareness at 50 questions each, plus General Engineering at 100. Paper II is 100 questions for 300 marks, General Engineering only. So this site does not cover Paper I either, strictly speaking. It covers the two common sections of Paper I, 100 of its 200 questions, because the General Engineering content in both papers differs by discipline and no single question bank could represent Civil, Mechanical and Electrical candidates accurately at once.' },
      { type: 'takeaways', items: [
        'General Engineering appears in both papers: 100 of Paper I\'s 200 marks and all 300 of Paper II, so 400 of the 500 total marks are discipline-specific.',
        'The notice gives Paper I one total duration of 120 minutes and no per-part times, so whether its three parts are separately timed is not established here.',
        'Both papers are objective and Computer-Based; their normalized scores are combined for the final merit list, with no separate descriptive paper to prepare for.',
        'Paper II\'s technical syllabus depends on your notified discipline (Civil & Structural, Electrical, or Mechanical), which is exactly why this site does not model it as one generic paper.',
      ] },
      { type: 'table', heading: 'Paper I vs Paper II', headers: ['', 'Paper I', 'Paper II'], rows: [
        ['Content', 'General Intelligence and Reasoning, General Awareness, General Engineering', 'General Engineering (discipline-specific)'],
        ['Questions / Marks', '200 / 200', '100 / 300'],
        ['Duration', '120 minutes', 'Set separately by discipline'],
        ['Covered on this site?', 'The two common sections only', 'No, no single common syllabus'],
      ] },
      { type: 'paragraph', heading: 'Why Paper II isn\'t built here', text: 'A Civil & Structural candidate\'s General Engineering paper covers building materials, surveying, and structural analysis. An Electrical candidate\'s covers circuit theory and machines. A Mechanical candidate\'s covers thermodynamics and strength of materials. These are not variations on one shared technical core; they are three separate professional syllabi that happen to share a paper name. Building one generic "General Engineering" mock would mean covering one discipline accurately while silently misrepresenting the other two, which this site avoids the same way it avoids RRB Paramedical\'s post-specific Professional Ability section.' },
      { type: 'paragraph', heading: 'What Paper I actually tests', text: 'Only two of Paper I\'s three parts are common to every discipline: General Intelligence and Reasoning and General Awareness, 50 questions each. Those 100 questions are what this site builds, and the mock-test page states that coverage on the test itself rather than leaving you to infer it. The notice sets 120 minutes for the whole of Paper I and does not publish per-part times, so treat the composite timer as the working assumption rather than an established rule. Since both papers are normalized and combined for the final merit list, a strong score on these two sections genuinely matters; it is worth being clear-eyed that they are 100 of the 500 total marks.' },
      { type: 'callout', text: 'The two sections this site covers are 100 of the 500 total SSC JE marks. They matter, and they are a fifth of the exam, not the whole of it.' },
      { type: 'paragraph', text: 'Practice Paper I, full mocks and sectional tests for both sections, at [SSC Junior Engineer mock tests](/ssc-je/mock-test); the complete official pattern, including why Paper II is out of scope, is on the [SSC JE exam pattern page](/ssc-je/exam-pattern).' },
    ],
    faqs: [
      { q: 'Does SSC JE have negative marking?', a: 'Yes, 0.25 marks are deducted for each wrong answer in Paper I.' },
      { q: 'What is the difference between SSC JE Paper I and Paper II?', a: 'Paper I is 200 marks across three parts: General Intelligence and Reasoning, General Awareness, and 100 marks of General Engineering. Paper II is 300 marks of General Engineering alone. Both papers\' General Engineering content differs by Civil & Structural, Electrical, or Mechanical stream; only the first two parts of Paper I are common to every candidate.' },
      { q: 'Why doesn\'t this site cover SSC JE Paper II?', a: 'General Engineering differs by engineering discipline, so a single question bank cannot accurately represent Civil, Electrical and Mechanical candidates at once. That rules out Paper II entirely and the 100-question General Engineering part of Paper I, leaving the two common sections of Paper I as what is modeled here.' },
      { q: 'Is there a descriptive paper in SSC JE?', a: 'No. Both Paper I and Paper II are objective, Computer-Based, multiple-choice papers, and their normalized scores are combined for the final merit list.' },
      { q: 'Does SSC JE Paper I have a sectional lock?', a: 'The notice sets 120 minutes for the whole of Paper I and does not publish per-part times, so this site does not state whether the three parts are separately timed. Treat one composite timer as the working assumption and confirm against your own admit card.' },
    ],
  },
  {
    slug: 'rpf-constable-vs-rpf-si-same-cbt-different-post',
    title: 'RPF Constable vs RPF SI: Same CBT, Different Post',
    excerpt: 'Same 120 questions, three sections, 90-minute timer, and marking scheme. If you\'re deciding between the two, written-test preparation genuinely does not change.',
    category: 'Exam Guides',
    readTimeMin: 5,
    publishedAt: '2026-08-29',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'rpf constable vs rpf si',
    image: {
      src: '/images/blog/rpf-constable-vs-rpf-si-same-cbt-different-post.webp',
      alt: 'Two railway-recruitment aspirants comparing preparation notes in a station-side study space',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'RPF Constable and RPF Sub-Inspector are recruited through separate notifications for a genuinely different post, but their Computer Based Tests are, structurally, the same exam. Same 120 questions, same 120 marks, same 90-minute composite timer, same three-section split, same 1/3 negative marking. If you are trying to decide which one to prepare for, or whether to apply to both, the written-test preparation itself barely changes between them.' },
      { type: 'takeaways', items: [
        'RPF Constable and RPF SI sit the exact same CBT shape: 120 questions, 120 marks, 90 minutes, split into Arithmetic (35Q), General Intelligence and Reasoning (35Q), and General Awareness (50Q).',
        'Neither CBT has a sectional lock: all three sections share one 90-minute composite timer for both posts.',
        'Both posts\' General Intelligence and Reasoning sections officially share the exact same spec as RRB NTPC CBT 2\'s Reasoning section, so this site\'s "Explore Similar Tests" pages let Constable and SI candidates practice each other\'s Reasoning bank directly.',
        'What differs between the two is the post itself, eligibility and rank, not the written exam. Check the official RPF notification for exact age and qualification criteria, since this site does not publish exam-specific eligibility figures.',
      ] },
      { type: 'table', heading: 'The CBT, side by side', headers: ['Section', 'RPF Constable', 'RPF SI'], rows: [
        ['Arithmetic', '35Q / 35 marks / 26 min', '35Q / 35 marks / 26 min'],
        ['General Intelligence and Reasoning', '35Q / 35 marks / 26 min', '35Q / 35 marks / 26 min'],
        ['General Awareness', '50Q / 50 marks / 38 min', '50Q / 50 marks / 38 min'],
        ['Timer', 'Single 90-min composite', 'Single 90-min composite'],
        ['Negative marking', '1/3 per wrong answer', '1/3 per wrong answer'],
      ] },
      { type: 'paragraph', heading: 'The written test genuinely doesn\'t differ', text: 'Every number in the CBT pattern, question count, marks, section split, timing, and negative marking, is identical between RPF Constable and RPF SI. Both run on a single 90-minute composite timer with no sectional lock, so the same pacing strategy, timing math, and negative-marking discipline apply equally to either. A candidate preparing for one is, for the written stage, preparing for the other at the same time.' },
      { type: 'paragraph', heading: 'The shared Reasoning bank is not a coincidence', text: 'Both posts\' General Intelligence and Reasoning sections match RRB NTPC CBT 2\'s Reasoning spec exactly, 35 questions, 26 minutes, the same +1/-1/3 marking, confirmed from each exam\'s own official pattern rather than assumed from a shared section name. That is why this site\'s [RPF Constable similar tests](/rpf-constable/similar-tests) and [RPF SI similar tests](/rpf-si/similar-tests) pages exist: extra, genuinely spec-matched Reasoning practice sourced from each other and from RRB NTPC CBT 2, on top of each exam\'s own tests. What that borrowed section is expected to cover is listed in the [RRB NTPC syllabus](/rrb-ntpc/syllabus).' },
      { type: 'callout', text: 'A candidate preparing for RPF Constable is, for the written CBT, preparing for RPF SI at the same time. Every section, timing, and marking number is identical.' },
      { type: 'paragraph', heading: 'What actually differs', text: 'The post itself is a different story: RPF SI is a supervisory role with its own eligibility and pay structure, distinct from Constable. This site does not publish specific age-limit or qualification figures, since eligibility criteria are exactly the kind of notification-specific detail worth confirming directly from the official RPF recruitment notice rather than a secondary source.' },
      { type: 'paragraph', text: 'Practice both CBTs at [RPF Constable mock tests](/rpf-constable/mock-test) and [RPF SI mock tests](/rpf-si/mock-test); full official patterns are on their respective exam pattern pages. If you are weighing these against other Railways exams, see [RRB NTPC vs Group D vs JE vs ALP](/blog/rrb-ntpc-vs-group-d-vs-je-vs-alp-choosing-your-railway-exam).' },
    ],
    faqs: [
      { q: 'Is the RPF Constable CBT different from the RPF SI CBT?', a: 'No. Both run the exact same pattern: 120 questions, 120 marks, 90 minutes, split into Arithmetic (35Q), General Intelligence and Reasoning (35Q), and General Awareness (50Q), with identical 1/3 negative marking and no sectional lock.' },
      { q: 'Do RPF Constable and RPF SI share practice content on this site?', a: 'Yes, for Reasoning specifically. Both posts\' General Intelligence and Reasoning sections match RRB NTPC CBT 2\'s official spec exactly, so each exam\'s "Explore Similar Tests" page offers extra Reasoning practice sourced from the other two.' },
      { q: 'What is the negative marking for RPF Constable and RPF SI?', a: 'One-third of a mark is deducted for each wrong answer in both, with 1 mark awarded for each correct answer.' },
      { q: 'What comes after the CBT for RPF Constable and RPF SI?', a: 'A Physical Efficiency Test (PET) and Physical Measurement Test (PMT), both qualifying only, followed by Document Verification.' },
      { q: 'Where can I check the exact eligibility difference between RPF Constable and RPF SI?', a: 'In the official RPF recruitment notification for each post. This site does not publish specific age-limit or qualification figures, since those details are best confirmed directly from the source that sets them.' },
    ],
  },
  {
    slug: 'exams-that-share-sections-what-actually-transfers',
    title: 'Which Exams Share Sections, and What Actually Transfers',
    excerpt: `Across the ${CORPUS.exams} exams on this site, ${n(CORPUS.sharedPairs)} pairs share three or more section names. Only 14 exams have a partner matching the exact spec.`,
    category: 'Exam Strategy',
    readTimeMin: 8,
    publishedAt: '2026-09-07',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'which exams have a common syllabus',
    image: {
      src: '/images/blog/exams-that-share-sections-what-actually-transfers.webp',
      alt: 'Student comparing overlapping exam sections across two study plans',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: `Count the section names across the ${CORPUS.exams} exams published on this site and you get ${CORPUS.sectionNames} distinct ones. Compare every exam against every other, and ${n(CORPUS.sharedPairs)} pairs share at least three sections, covering at least half of the smaller exam's list. In ${n(CORPUS.subsetPairs)} of those pairs the smaller exam's entire section list already sits inside the bigger one. That sounds like a shortcut, and sometimes it is. The rest of this explains when it is not.` },
      { type: 'takeaways', items: [
        'A shared section name is the weakest form of overlap: same heading, possibly nothing else in common.',
        'SSC Selection Post\'s four sections all appear in SSC CHSL\'s nine, so a CHSL aspirant is already covering the whole of that paper\'s ground.',
        'Only 14 exams on this site have another exam matching a section\'s exact official spec: same marks per question, same negative marking, same time per question.',
        'General Awareness almost never transfers, because it is the section most tied to one recruiter, one state, and one news cycle.',
        'Reasoning transfers best, which is why it has its own section here with no exam attached.',
      ] },
      { type: 'diagram', id: 'shared-sections-map', caption: 'SSC Selection Post\'s four sections against SSC CHSL\'s nine. Every one of the four already appears on the CHSL paper.' },
      { type: 'paragraph', heading: 'Three grades of overlap, not one', text: 'Aspirants are told constantly that two exams are "similar". That word hides three very different claims, and they are worth separating before you decide to prepare for both.' },
      { type: 'table', heading: 'How strong is the overlap?', headers: ['Claim', 'What it means', 'How many'], rows: [
        ['Same section name', 'Both official patterns use the same heading. Nothing else is promised.', `${n(CORPUS.sharedPairs)} exam pairs`],
        ['Same section spec', 'Same marks per question, same negative marking, same seconds per question, confirmed from both official patterns.', '14 exams'],
        ['Same underlying skill', 'The question would be at home in either paper regardless of pattern.', `${n(CORPUS.topicQuestions)} questions, ${CORPUS.topics} topics`],
      ] },
      { type: 'paragraph', heading: 'The name is the weakest claim', text: `${capitalise(word(CORPUS.quantitativeAptitudeExams))} exams here list a section called Quantitative Aptitude and ${CORPUS.englishLanguageExams} list one called English Language, but a bank clerk paper and an engineering entrance mean very different things by them. The same trap runs the other way too: a section can be identical in substance and differ only in its heading. Reasoning is the clearest case, with ${CORPUS.reasoningHeadings} different names in use across ${CORPUS.reasoningExams} exams for what is recognisably one skill.` },
      { type: 'paragraph', heading: 'The spec is the strong claim', text: 'A section only genuinely transfers when the scoring does. If your exam gives 1 mark per question with a 0.25 penalty and 48 seconds to answer, practicing the same topic under 2 marks, no penalty, and 90 seconds trains a different set of instincts, however familiar the questions look. That is why the similar-tests pages on this site exist for only 14 exams: they list other exams whose Reasoning section matches yours on marks per question, negative marking, and time per question, taken from each exam\'s own published pattern rather than assumed from a heading. If yours is one of them, see [similar tests to SSC CHSL](/ssc-chsl/similar-tests) for the shape these take.' },
      { type: 'callout', text: 'A shared section name tells you what the paper calls something. A shared spec tells you whether practice actually counts.' },
      { type: 'paragraph', heading: 'Where the overlap quietly lies to you', text: 'General Awareness is the section that looks most transferable and transfers least. It is tied to a recruiter, often to a state, and always to a news cycle, so two exams can list the identical heading and test almost disjoint material. Skill and typing tests are the same story: SSC CHSL and SSC CGL both end in one, and they are not the same test. Treat any section whose content depends on who is recruiting, or on what happened this year, as exam-specific until you have checked both syllabi yourself. Where those skill tests actually fall, and what clearing one is worth, is in each exam\'s own stage list: the [SSC CHSL selection process](/ssc-chsl/selection-process) is the shorter of the two.' },
      { type: 'list', heading: 'A quick test before you commit to a second exam', ordered: true, items: [
        'Open both exam pattern pages and put the section lists side by side.',
        'Cross out every section whose content is recruiter-specific or current-affairs-driven.',
        'For what survives, compare marks per question, negative marking, and minutes per question, not just the names.',
        'If the specs match, the practice genuinely counts twice. If only the names match, treat it as two preparations that happen to rhyme.',
      ] },
      { type: 'paragraph', heading: 'What to do with the sections that do transfer', text: 'Once you know which topics are common ground, drilling them inside a full mock is a slow way to practice them: you get a handful of questions per paper, scattered. Both of the exam-agnostic sections here exist for exactly this. [Topic-wise practice](/practice) pools the whole question corpus by topic rather than by exam, so you can drill percentages or syllogisms on their own. [Logical reasoning practice](/logical-reasoning) does the same for reasoning specifically, graded easy to hard on one scale across every exam. Neither carries negative marking, which is deliberate: they are for building the skill, not for rehearsing one exam\'s risk calculus.' },
      { type: 'paragraph', text: 'When you go back to rehearsing the real thing, do it under the real rules. Your own exam\'s [pattern page](/exams) has the official marks and timing, and [understanding negative marking](/blog/understanding-negative-marking) covers how much a wrong answer actually costs you.' },
    ],
    faqs: [
      { q: 'Can I prepare for two competitive exams at once?', a: 'It depends on how much the papers really share. Compare the two official section lists, discard anything recruiter-specific or current-affairs-based, and then check whether the surviving sections match on marks per question, negative marking, and time per question. Where the specs match, practice counts for both. Where only the section names match, you are preparing twice.' },
      { q: 'Which exam sections overlap the most?', a: `Reasoning overlaps most reliably, followed by quantitative aptitude and English. Across the ${CORPUS.exams} exams on this site, ${CORPUS.reasoningExams} carry a section that is reasoning alone, under ${CORPUS.reasoningHeadings} different names. General Awareness overlaps least, because its content is tied to a specific recruiter, state, and news cycle.` },
      { q: 'Does SSC CHSL preparation cover SSC Selection Post?', a: 'On section coverage, yes: all four SSC Selection Post sections (General Intelligence, General Awareness, Quantitative Aptitude, English Language) appear in SSC CHSL\'s nine. That is coverage of the ground, not of the exam. Question counts, marks, and timing still differ, so check both official patterns before assuming one mock stands in for the other.' },
      { q: 'What does "similar tests" mean on this site?', a: 'It means another exam\'s section matches yours on marks per question, negative marking, and time per question, confirmed from both official patterns rather than inferred from the section name. Only 14 exams currently have such a match, all of them for Reasoning. Scoring on those tests always stays your own exam\'s.' },
      { q: 'Is General Awareness the same across government exams?', a: 'No. General Awareness is the least transferable section. Its content depends on the recruiting body, often on a particular state, and on the current news cycle, so two exams can print the identical section heading and test almost entirely different material.' },
    ],
  },
  {
    slug: 'practice-by-topic-instead-of-by-exam',
    title: 'Practice by Topic Instead of by Exam',
    excerpt: `A full mock scatters a handful of questions per topic across a whole paper. The same corpus cut by topic gives you ${n(CORPUS.topicQuestions)} questions across ${CORPUS.topics} topics.`,
    category: 'Mock Tests',
    readTimeMin: 6,
    publishedAt: '2026-09-07',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'should i practise by topic or by exam',
    image: {
      src: '/images/blog/practice-by-topic-instead-of-by-exam.webp',
      alt: 'Student organizing mock-test questions into focused topic practice',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: 'A full mock test is organised the way the exam is: a bit of everything, in the order the paper puts it. That is exactly right when you are rehearsing the exam. It is a poor way to fix one weak topic, because a single paper gives you only a handful of questions on it, spread through the sections, with the rest of the exam in between.' },
      { type: 'takeaways', items: [
        'Full mocks answer "am I ready?". Topic sets answer "why am I losing marks here?". They are different questions.',
        `The topic pages pool ${n(CORPUS.topicQuestions)} questions across ${CORPUS.topics} topics, drawn from the same banks the mock tests use.`,
        `Probability draws from ${CORPUS.topicPool('probability').exams} different exams, syllogism from ${CORPUS.topicPool('syllogism').exams}, direction sense from ${CORPUS.topicPool('direction-sense').exams}.`,
        'No negative marking on topic sets, so you can attempt everything and see what you actually know.',
        'Use the mock to find the weak topic, the topic set to fix it, then the next mock to check it stuck.',
      ] },
      { type: 'diagram', id: 'corpus-two-cuts', caption: 'The same questions, cut two ways. A column is one exam\'s paper. A row is one topic pooled from every exam that asks it.' },
      { type: 'paragraph', heading: 'Why pooling across exams works', text: `A percentage question does not become a different question because it appeared in a bank paper rather than a railway one. Neither does a syllogism, a coding-decoding puzzle, or an error-spotting sentence. The exam wrapper changes the marks, the timer, and the penalty, but the reasoning you have to do is the same. That is why a topic pool can be far deeper than any one exam's bank: probability on this site draws from ${CORPUS.topicPool('probability').exams} different exams, syllogism from ${CORPUS.topicPool('syllogism').exams}, direction sense from ${CORPUS.topicPool('direction-sense').exams}.` },
      { type: 'table', heading: 'A few topic pools, and how widely they draw', headers: ['Topic', 'Questions', 'Exams it draws from'], rows: [
        // The same six topics the post has always illustrated, re-sorted by
        // current pool size. Derived rather than typed: these grew by 5 to 44
        // questions each between 7 and 15 September 2026 while the table did not.
        ...['number-series', 'data-interpretation', 'coding-and-decoding', 'syllogism', 'direction-sense', 'time-speed-and-distance']
          .map((slug) => ({ slug, ...CORPUS.topicPool(slug) }))
          .sort((a, b) => b.questions - a.questions)
          .map((pool) => [CORPUS.topicName(pool.slug), String(pool.questions), String(pool.exams)]),
      ] },
      { type: 'paragraph', heading: 'Where pooling does not work', text: 'The same logic breaks completely for General Awareness and current affairs, so those are not pooled here. A question about a state\'s recruitment rules or last quarter\'s appointments is not exam-agnostic in any useful sense, and pretending otherwise would produce a pile of questions that is wrong for almost everybody reading it. Anything whose answer depends on who is recruiting, or on when you are reading, stays inside its own exam.' },
      { type: 'callout', text: 'The mock tells you which topic is costing you marks. It is a slow and expensive way to then practice that topic.' },
      { type: 'paragraph', heading: 'How to actually use the two together', text: 'Take the full mock first, under real timing and real negative marking, because that is the only thing that tells you where you stand. Then read the result by topic rather than by score. Whatever comes out worst, drill it on its own until the method is automatic, and only then take the next full mock to confirm it held under time pressure. [How to analyze your mock test performance](/blog/how-to-analyze-your-mock-test-performance) covers the reading step; [how to build an error log](/blog/how-to-build-an-error-log) covers keeping track of what keeps recurring.' },
      { type: 'paragraph', heading: 'Why there is no negative marking on topic sets', text: 'Guessing penalties exist to stop you answering questions you do not understand. That is a sensible rule in an exam and a counterproductive one in practice, where an attempted-and-wrong question is more useful to you than a blank one: it tells you exactly which step you got wrong. So topic sets carry 1 mark per question and no penalty. When you want to rehearse the risk calculus instead, go back to your exam\'s own mock, where the real marking scheme applies.' },
      { type: 'paragraph', text: 'Browse the full list at [topic-wise practice](/practice). If reasoning specifically is what you are after, [logical reasoning practice](/logical-reasoning) grades the same kind of questions from easy to hard on one scale, so you can work up a ladder rather than pick a topic.' },
    ],
    faqs: [
      { q: 'Should I do topic-wise practice or full mock tests?', a: 'Both, in that order of use: the full mock tells you where you are losing marks, the topic set is where you fix it, and the next full mock is where you check the fix held under time pressure. A mock is a bad practice tool for a single topic because it gives you only a handful of questions on it, scattered through the paper.' },
      { q: 'Do topic-wise questions come from real exam papers?', a: 'They are drawn from the same original question banks that power the mock tests on this site, pooled by topic instead of by exam. They are original practice questions written to each exam\'s published syllabus, not reproductions of a past paper.' },
      { q: 'Why is there no negative marking on topic practice?', a: 'Because the point is to find out what you know, not to rehearse guessing risk. An attempted-and-wrong question tells you which step you got wrong; a blank one tells you nothing. Every question carries 1 mark and no penalty. For the real risk calculus, use your own exam\'s mock, where its actual marking scheme applies.' },
      { q: 'How many questions are in the topic practice section?', a: `${n(CORPUS.topicQuestions)} questions across ${CORPUS.topics} topics. Pool sizes vary by topic: number series has ${CORPUS.topicPool('number-series').questions}, syllogism ${CORPUS.topicPool('syllogism').questions}, time, speed and distance ${CORPUS.topicPool('time-speed-and-distance').questions}. A topic is only published once it has at least 50 questions behind it.` },
      { q: 'Is topic practice useful if my exam has negative marking?', a: 'Yes, for building the method. Practise the topic without a penalty until the approach is automatic, then rehearse it under your exam\'s real marking scheme in a sectional or full mock. Trying to learn a topic and manage guessing risk at the same time usually means doing neither well.' },
    ],
  },
  {
    slug: 'reasoning-has-23-names-on-indian-exam-papers',
    title: `Reasoning Has ${CORPUS.reasoningHeadings} Names on Indian Exam Papers`,
    excerpt: `General Intelligence and Reasoning. Test of Reasoning. Logical Intelligence. Across ${CORPUS.reasoningExams} exams here, one skill appears under ${CORPUS.reasoningHeadings} different section headings.`,
    category: 'Exam Guides',
    readTimeMin: 6,
    publishedAt: '2026-09-07',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'reasoning section names in indian exams',
    image: {
      src: '/images/blog/reasoning-has-23-names-on-indian-exam-papers.webp',
      alt: 'Indian student connecting different reasoning section names in exam notes',
      width: 1280,
      height: 720,
    },
    body: [
      { type: 'paragraph', text: `SSC calls it General Intelligence and Reasoning. IBPS calls it Reasoning Ability. CMAT and AILET both call it Logical Reasoning. One exam on this site simply calls it Logical Intelligence. Counted across the ${CORPUS.exams} exams published here, ${CORPUS.reasoningExams} carry a section that is reasoning and nothing else, and between them they use ${CORPUS.reasoningHeadings} different names for it.` },
      { type: 'takeaways', items: [
        `${CORPUS.reasoningHeadings} section headings across ${CORPUS.reasoningExams} exams, for a skill that does not change between them.`,
        `The most common heading, ${CORPUS.reasoningRanked[0][0]}, is used by only ${CORPUS.reasoningRanked[0][1]} exams. There is no standard.`,
        'A seating-arrangement puzzle is the same puzzle in a bank paper and a law paper. Only the marks and the timer change.',
        'Sections that mix reasoning with arithmetic, English, or computer knowledge are a different thing, and are not counted here.',
        'The reasoning section on this site is graded on one absolute scale, so a level means the same thing whichever exam a question came from.',
      ] },
      { type: 'diagram', id: 'one-skill-many-names', caption: `Eight of the ${CORPUS.reasoningHeadings} section names in use, all describing the same skill. The heading changes; the question does not.` },
      { type: 'paragraph', heading: 'Why the naming is such a mess', text: `Every recruiting body publishes its own syllabus, and nothing obliges any of them to use anybody else's vocabulary. The counts show how little convergence that produces: of the ${CORPUS.reasoningHeadings} headings in use, the most common covers ${CORPUS.reasoningRanked[0][1]} exams and the next ${CORPUS.reasoningRanked[1][1]}, and ${CORPUS.reasoningHeadingsUsedByOne} of the ${CORPUS.reasoningHeadings} are used by exactly one exam each. There is no majority name to standardize on, and no sign of one emerging.` },
      { type: 'table', heading: 'How the names are actually distributed', headers: ['Section heading', 'Exams using it'], rows: [
        ...CORPUS.reasoningNamed.map(([heading, count]) => [heading, String(count)]),
        [`${capitalise(word(CORPUS.reasoningHeadingsUsedByTwo))} headings used by 2 exams each`, String(CORPUS.reasoningSectionsUnderTwo)],
        [`${capitalise(word(CORPUS.reasoningHeadingsUsedByOne))} headings used by 1 exam each`, String(CORPUS.reasoningHeadingsUsedByOne)],
        ['Total reasoning-only sections', `${CORPUS.reasoningSections}, across ${CORPUS.reasoningExams} exams`],
      ] },
      { type: 'paragraph', text: 'The last row is not a typo. There are more reasoning-only sections than there are exams carrying one, because a few papers split reasoning into two separately timed sections and number them: Logical Reasoning I and II, Analytical Reasoning Skills I and II. Each half counts as its own section on the official pattern, so it counts as its own here too.' },
      { type: 'paragraph', heading: 'What is not counted as reasoning', text: 'Plenty of exams have a section with reasoning in the title that is not reasoning alone, and the names say so outright. Reasoning Ability & Computer Aptitude mixes in computer knowledge. Reasoning (Verbal & Arithmetic) and General Arithmetic, General Intelligence and Reasoning both mix in maths. Data Interpretation and Logical Reasoning, the CAT section, is half a quantitative paper. None of those are counted above, or fed into the practice section here, for one reason: someone sent from a mixed section to a pure-reasoning set would meet a narrower thing than they left, which is worse than not being sent at all.' },
      { type: 'callout', text: 'A syllogism does not become a different question because it appeared under a different heading.' },
      { type: 'paragraph', heading: 'What this means for your preparation', text: 'It means the reasoning you build for one exam is close to fully portable, which is unusual: no other section transfers this cleanly. What does not transfer is the scoring. The same puzzle can be worth 1 mark with a 0.25 penalty in one paper and 2 marks with no penalty in another, and that difference changes when it is worth attempting, not how you solve it. Build the skill exam-agnostically, then rehearse the risk under your own exam\'s rules.' },
      { type: 'paragraph', heading: 'Grading across exams, on one scale', text: 'That portability is why the [logical reasoning section](/logical-reasoning) on this site is not attached to any exam. Its 750 questions are pulled from the reasoning sections of mocks already here, then graded by hand on a single absolute rubric rather than on whatever difficulty label they carried inside their own paper. Easy means one step and no case analysis. Medium means two to four linked steps, or one diagram to construct, without branching. Hard means branching and elimination, interleaved rules, layered codes, or a sufficiency trap. Grading by hand on one rubric is the only way an SSC question and a CAT-style question can sit on the same ladder honestly.' },
      { type: 'paragraph', text: 'Work up the difficulty ladder if you do not yet know where you stand, or pick a family directly if you already do. If you want the same cut applied to quantitative and English topics as well, [topic-wise practice](/practice) covers those. And when you go back to your own paper, [which exams share sections](/blog/exams-that-share-sections-what-actually-transfers) explains how far the rest of your preparation travels.' },
    ],
    faqs: [
      { q: 'Is logical reasoning the same in all competitive exams?', a: `The skill is largely the same; the labelling and the scoring are not. Across the ${CORPUS.exams} exams on this site, ${CORPUS.reasoningExams} have a section that is reasoning alone, under ${CORPUS.reasoningHeadings} different headings. A seating-arrangement or syllogism question is the same question in any of them. What changes is marks per question, negative marking, and the time you get.` },
      { q: 'What is the difference between General Intelligence and Logical Reasoning?', a: 'In practice, usually nothing but the recruiter\'s vocabulary. General Intelligence and Reasoning is the heading SSC and several railway exams use; Logical Reasoning is more common in management, law, and university entrances. Both cover series, coding-decoding, blood relations, direction sense, syllogisms, seating arrangements, and similar families. Always check the exam\'s own syllabus rather than the heading.' },
      { q: 'Does reasoning practice from one exam help with another?', a: 'Yes, more than any other section. Reasoning is the section that transfers most cleanly between exams, because the question does not depend on a syllabus, a recruiter, or a news cycle. The part that does not transfer is the marking scheme, which decides when a question is worth attempting rather than how it is solved.' },
      { q: 'Why are some reasoning sections excluded from the count?', a: 'Because they are not reasoning alone. Sections such as Reasoning Ability and Computer Aptitude, or ones combining reasoning with arithmetic or English, test more than one thing, so counting them would overstate how portable the skill is and would send people to practice narrower than the section they came from.' },
      { q: 'How are the reasoning questions graded easy, medium and hard?', a: 'By hand, on one absolute scale applied across every exam, not on the difficulty tag a question carried in its own paper. Easy is one step with no case analysis. Medium is two to four linked steps, or one diagram to construct, without branching. Hard is branching and elimination, interleaved rules, layered codes, or a sufficiency trap.' },
    ],
  },
  {
    slug: 'how-much-time-per-question',
    title: 'How Much Time Per Question Do You Actually Get?',
    excerpt: `One minute a question is the median across ${CORPUS.pace.stages} official exam patterns here, and it fits only ${CORPUS.pace.oneMinuteBand}. SSC and banking prelims give you ${Math.round(CORPUS.pace.fastestSeconds)} seconds.`,
    category: 'Exam Strategy',
    readTimeMin: 6,
    publishedAt: '2026-09-22',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'how much time per question in competitive exams',
    body: [
      { type: 'paragraph', text: `Divide the duration by the question count. That is the entire calculation, it takes about ten seconds, and most students sit their first full mock without having done it. Across the ${CORPUS.pace.stages} official stage patterns published on this site the answer comes out at a median of ${Math.round(CORPUS.pace.median)} seconds, which is where the familiar advice comes from. It also comes out at ${Math.round(CORPUS.pace.fastestSeconds)} seconds for the papers a great many students here are actually preparing for. The median is real and it is nearly useless on its own.` },
      { type: 'takeaways', items: [
        `Duration divided by questions. On the ${CORPUS.pace.stages} official patterns here the median is ${Math.round(CORPUS.pace.median)} seconds.`,
        `About a minute a question describes ${CORPUS.pace.oneMinuteBand} of those ${CORPUS.pace.stages} papers. The other ${CORPUS.pace.stages - CORPUS.pace.oneMinuteBand} run faster or slower than that.`,
        `${capitalise(word(Math.round(CORPUS.pace.fastestSeconds)))} seconds is the fastest pace on the site, and ${CORPUS.pace.atFastest} stage patterns across ${CORPUS.pace.atFastestExams.length} exams are tied at it.`,
        `The pace can change between papers of the same exam. ${CORPUS.pace.shift('ibps-po')!.exam} moves from ${Math.round(CORPUS.pace.shift('ibps-po')!.fromSeconds)} seconds at ${CORPUS.pace.shift('ibps-po')!.from} to ${Math.round(CORPUS.pace.shift('ibps-po')!.toSeconds)} at ${CORPUS.pace.shift('ibps-po')!.to}.`,
        'Treat the figure as a budget for the whole paper, not a target to hit on every question.',
      ] },
      { type: 'diagram', id: 'seconds-per-question-spread', caption: `Seconds per question across ${CORPUS.pace.stages} official stage patterns. The band the one-minute rule describes holds ${CORPUS.pace.oneMinuteBand} of them.` },
      { type: 'paragraph', heading: 'Do the division yourself', text: `You need two numbers and both sit on your exam's [exam pattern page](/exams): how many questions the paper asks, and how many minutes it runs. ${CORPUS.pace.fastestStageOf('ssc-cgl')!.exam} ${CORPUS.pace.fastestStageOf('ssc-cgl')!.stage} asks ${CORPUS.pace.fastestStageOf('ssc-cgl')!.questions} questions in ${CORPUS.pace.fastestStageOf('ssc-cgl')!.minutes} minutes, so those ${CORPUS.pace.fastestStageOf('ssc-cgl')!.minutes} minutes hold ${n(CORPUS.pace.fastestStageOf('ssc-cgl')!.minutes * 60)} seconds, and ${n(CORPUS.pace.fastestStageOf('ssc-cgl')!.minutes * 60)} divided by ${CORPUS.pace.fastestStageOf('ssc-cgl')!.questions} questions gives ${Math.round(CORPUS.pace.fastestStageOf('ssc-cgl')!.seconds)} seconds each. Do it once for your own paper and you will never again wonder whether you are reading a question too slowly.` },
      { type: 'calculator', heading: 'Work out your own pace', note: `Both numbers are on your exam's pattern page. The result is ranked against the ${CORPUS.pace.stages} official patterns published here.` },
      { type: 'table', heading: 'Median seconds per question, by exam family', headers: ['Exam family', 'Median', 'Range', 'Stage patterns'], rows: CORPUS.pace.categories.map((entry) => [
        entry.category,
        `${Math.round(entry.median)}s`,
        `${Math.round(entry.fastest)}s to ${Math.round(entry.slowest)}s`,
        String(entry.stages),
      ]) },
      { type: 'callout', text: 'The median is real and it is nearly useless on its own.' },
      { type: 'paragraph', heading: `${capitalise(word(Math.round(CORPUS.pace.fastestSeconds)))} seconds is the real number for a lot of people here`, text: `The fastest pace any paper on this site sets is ${Math.round(CORPUS.pace.fastestSeconds)} seconds, and it is not an outlier. ${capitalise(word(CORPUS.pace.atFastest))} stage patterns across ${CORPUS.pace.atFastestExams.length} different exams are tied at exactly that figure, nearly all of them SSC and banking prelims running ${CORPUS.pace.fastestStageOf('ibps-po')!.questions} questions in ${CORPUS.pace.fastestStageOf('ibps-po')!.minutes} minutes. At ${Math.round(CORPUS.pace.fastestSeconds)} seconds you are not solving every question. You are recognising which ones you can finish quickly, answering those, and letting the rest go, which is a different skill and one worth practising on purpose. [Speed vs accuracy](/blog/speed-vs-accuracy-in-timed-tests) covers where that trade sits.` },
      { type: 'paragraph', heading: 'The pace changes between papers of the same exam', text: `Of the ${CORPUS.pace.multiPaperExams} exams here with official patterns on two or more papers, ${CORPUS.pace.multiPaperExams - CORPUS.pace.sameAtEveryPaper} run those papers at different paces. ${CORPUS.pace.shift('ibps-po')!.exam} gives ${Math.round(CORPUS.pace.shift('ibps-po')!.fromSeconds)} seconds at ${CORPUS.pace.shift('ibps-po')!.from} and ${Math.round(CORPUS.pace.shift('ibps-po')!.toSeconds)} at ${CORPUS.pace.shift('ibps-po')!.to}. ${CORPUS.pace.shift('ssc-cgl')!.exam} goes from ${Math.round(CORPUS.pace.shift('ssc-cgl')!.fromSeconds)} to ${Math.round(CORPUS.pace.shift('ssc-cgl')!.toSeconds)}. The direction is not always the one people assume: ${CORPUS.pace.shift('rrb-ntpc')!.exam} allows ${Math.round(CORPUS.pace.shift('rrb-ntpc')!.fromSeconds)} seconds at ${CORPUS.pace.shift('rrb-ntpc')!.from} and only ${Math.round(CORPUS.pace.shift('rrb-ntpc')!.toSeconds)} at ${CORPUS.pace.shift('rrb-ntpc')!.to}. Train at one pace for months and your instinct is calibrated for a paper you are not about to sit.` },
      { type: 'paragraph', heading: 'What the number is actually for', text: `The figure is an average, and no paper is made of average questions. A reading comprehension set and a simplification sum sit in the same section with the same nominal allowance, and you should spend nothing like the same time on them. Use the pace as a budget for the paper and check yourself against it at section boundaries rather than per question, which is what [time management in the exam hall](/blog/time-management-during-the-exam) sets out. How much of that budget you can actually move around depends on whether your exam locks each section to its own clock, and [sectional lock vs composite timer](/blog/sectional-lock-vs-composite-timer) explains which kind yours is.` },
      { type: 'paragraph', text: `The slowest paper on this site is ${CORPUS.pace.slowest.exam}, at ${Math.round(CORPUS.pace.slowest.seconds)} seconds a question for ${CORPUS.pace.slowest.questions} questions in ${CORPUS.pace.slowest.minutes} minutes, which is ${(CORPUS.pace.slowestSeconds / CORPUS.pace.fastestSeconds).toFixed(1)} times what an SSC prelims candidate gets. Both are reasonable papers. They simply ask for different things, and the only way to know which one you are sitting is to look it up and divide. Every pattern quoted here is on the exam's own page in the [exam directory](/exams).` },
    ],
    faqs: [
      { q: 'How much time per question do you get in competitive exams?', a: `It depends heavily on the exam. Across the ${CORPUS.pace.stages} official stage patterns published on this site the median is ${Math.round(CORPUS.pace.median)} seconds per question, but the range runs from ${Math.round(CORPUS.pace.fastestSeconds)} seconds to ${Math.round(CORPUS.pace.slowestSeconds)}. SSC and banking prelims sit at the fast end around ${Math.round(CORPUS.pace.fastestSeconds)} seconds, while the professional finance papers allow several minutes each.` },
      { q: 'Is one minute per question a good rule of thumb?', a: `Only as a starting point. ${capitalise(word(Math.round(CORPUS.pace.median)))} seconds is the median here, which is why the rule is so common, but only ${CORPUS.pace.oneMinuteBand} of the ${CORPUS.pace.stages} official patterns on this site fall between 55 and 65 seconds. The other ${CORPUS.pace.stages - CORPUS.pace.oneMinuteBand} are faster or slower, so the rule is a reasonable guess for an exam you know nothing about and a poor substitute for the one calculation that gives you the real figure.` },
      { q: 'How do I calculate time per question for my exam?', a: `Take the paper's total duration in minutes, multiply by 60, and divide by the number of questions. Both numbers are on your exam's pattern page. If the paper is sectionally timed, do the same division for each section separately, because the section allowances are rarely proportional to the question counts.` },
      { q: 'Which exams give the least time per question?', a: `${capitalise(word(CORPUS.pace.atFastest))} stage patterns on this site are tied at ${Math.round(CORPUS.pace.fastestSeconds)} seconds per question, which is the fastest pace published here. They are mostly SSC and banking preliminary papers asking ${CORPUS.pace.fastestStageOf('ibps-po')!.questions} questions in ${CORPUS.pace.fastestStageOf('ibps-po')!.minutes} minutes, or ${CORPUS.pace.fastestStageOf('ssc-cpo')!.questions} in ${CORPUS.pace.fastestStageOf('ssc-cpo')!.minutes}.` },
      { q: 'Does the time per question change between prelims and mains?', a: `Often, yes. Of the ${CORPUS.pace.multiPaperExams} exams here with official patterns on more than one paper, ${CORPUS.pace.multiPaperExams - CORPUS.pace.sameAtEveryPaper} run them at different paces. ${CORPUS.pace.shift('ibps-po')!.exam} moves from ${Math.round(CORPUS.pace.shift('ibps-po')!.fromSeconds)} seconds at ${CORPUS.pace.shift('ibps-po')!.from} to ${Math.round(CORPUS.pace.shift('ibps-po')!.toSeconds)} at ${CORPUS.pace.shift('ibps-po')!.to}. It can go the other way too, so check the pattern for the specific stage you are sitting rather than carrying one pace through the whole cycle.` },
    ],
  },
  {
    slug: 'what-one-question-is-worth',
    title: 'A Score Means Nothing Until You Know What a Question Is Worth',
    excerpt: `Across ${CORPUS.marksPer.stages} official patterns here a question is worth anywhere from ${CORPUS.marksPer.cheapest.perQuestion} to ${CORPUS.marksPer.dearest.perQuestion} marks. The same raw score can mean 38 right answers or 150.`,
    category: 'Exam Strategy',
    readTimeMin: 6,
    publishedAt: '2026-09-23',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'marks per question in competitive exams',
    body: [
      { type: 'paragraph', text: `Someone tells you they scored 150 in a mock. You have no idea whether that is good, and neither do they, until you know what one question on that paper was worth. Across the ${CORPUS.marksPer.stages} official stage patterns published on this site, that figure runs from ${CORPUS.marksPer.cheapest.perQuestion} marks to ${CORPUS.marksPer.dearest.perQuestion}, across ${CORPUS.marksPer.distinctValues} distinct values. A raw score without that conversion is a number with no unit attached.` },
      { type: 'takeaways', items: [
        `Marks divided by questions is the conversion. It ranges from ${CORPUS.marksPer.cheapest.perQuestion} to ${CORPUS.marksPer.dearest.perQuestion} across the ${CORPUS.marksPer.stages} official patterns here.`,
        `${capitalise(word(CORPUS.marksPer.atOneMark))} of those ${CORPUS.marksPer.stages} papers set exactly one mark a question, which is why the habit of reading a score as a question count is so easy to pick up and so often wrong.`,
        'A score of 150 is 150 correct answers on IBPS PO Prelims, 75 on SSC CGL Tier 1 and 38 on JEE Main Paper 1.',
        `${capitalise(word(CORPUS.marksPer.unevenPapers))} official papers here do not even weight their own sections equally, so a per-paper average can mislead too.`,
      ] },
      { type: 'paragraph', heading: 'The same score, three different papers', text: `Take a raw 150 and ask what it cost. On ${CORPUS.marksPer.stage('ibps-po', 'Prelims')!.exam} Prelims, ${CORPUS.marksPer.stage('ibps-po', 'Prelims')!.questions} questions carry ${CORPUS.marksPer.stage('ibps-po', 'Prelims')!.marks} marks, so a mark is a question and 150 is not reachable at all: the paper tops out at ${CORPUS.marksPer.stage('ibps-po', 'Prelims')!.marks}. On ${CORPUS.marksPer.stage('ssc-cgl', 'Tier 1')!.exam} Tier 1, ${CORPUS.marksPer.stage('ssc-cgl', 'Tier 1')!.questions} questions carry ${CORPUS.marksPer.stage('ssc-cgl', 'Tier 1')!.marks} marks, so 150 is 75 correct answers. On JEE Main Paper 1, where a question carries ${CORPUS.marksPer.stage('jee-main', 'Paper 1')!.perQuestion} marks, the same 150 is 38. Three papers, one number, and nothing in common between what a student had to do to get there.` },
      { type: 'table', heading: `What one question is worth, across ${n(CORPUS.marksPer.stages)} official patterns`, headers: ['Marks per question', 'Paper', 'Questions', 'Total marks'], rows: [
        [String(CORPUS.marksPer.cheapest.perQuestion), `${CORPUS.marksPer.cheapest.exam} ${CORPUS.marksPer.cheapest.stage}`, String(CORPUS.marksPer.cheapest.questions), String(CORPUS.marksPer.cheapest.marks)],
        ['1', `${CORPUS.marksPer.stage('ibps-po', 'Prelims')!.exam} Prelims, and ${n(CORPUS.marksPer.atOneMark - 1)} other papers here`, String(CORPUS.marksPer.stage('ibps-po', 'Prelims')!.questions), String(CORPUS.marksPer.stage('ibps-po', 'Prelims')!.marks)],
        ['2', `${CORPUS.marksPer.stage('ssc-cgl', 'Tier 1')!.exam} Tier 1`, String(CORPUS.marksPer.stage('ssc-cgl', 'Tier 1')!.questions), String(CORPUS.marksPer.stage('ssc-cgl', 'Tier 1')!.marks)],
        [String(CORPUS.marksPer.stage('jee-main', 'Paper 1')!.perQuestion), 'JEE Main Paper 1', String(CORPUS.marksPer.stage('jee-main', 'Paper 1')!.questions), String(CORPUS.marksPer.stage('jee-main', 'Paper 1')!.marks)],
        [String(CORPUS.marksPer.dearest.perQuestion), `${CORPUS.marksPer.dearest.exam} ${CORPUS.marksPer.dearest.stage}`, String(CORPUS.marksPer.dearest.questions), String(CORPUS.marksPer.dearest.marks)],
      ] },
      { type: 'callout', text: 'A raw score without that conversion is a number with no unit attached.' },
      { type: 'paragraph', heading: 'It runs the other way too', text: `The cheapest question on this site is on ${CORPUS.marksPer.cheapest.exam}, where the ${CORPUS.marksPer.cheapest.stage} paper asks ${CORPUS.marksPer.cheapest.questions} questions for ${CORPUS.marksPer.cheapest.marks} marks. Every question is worth ${CORPUS.marksPer.cheapest.perQuestion} of a mark, so the paper has twice as many questions as it has marks and a score sounds half as good as the work behind it. Students moving between exam families get caught by this in both directions, reading a ${CORPUS.marksPer.dearest.perQuestion}-mark paper as though the number were questions and a ${CORPUS.marksPer.cheapest.perQuestion}-mark paper as though they had underperformed.` },
      { type: 'paragraph', heading: 'The per-paper average hides an uneven paper', text: `Dividing a paper's total by its question count assumes every question inside it is worth the same, and ${word(CORPUS.marksPer.unevenPapers)} of the official papers here break that assumption. IBPS PO Mains is the clearest case. Its English section runs ${CORPUS.marksPer.sectionsOf('ibps-po', 'Mains').find((s) => s.name.includes('English'))!.questions} questions for ${CORPUS.marksPer.sectionsOf('ibps-po', 'Mains').find((s) => s.name.includes('English'))!.marks} marks, which is half a mark each, while Reasoning runs ${CORPUS.marksPer.sectionsOf('ibps-po', 'Mains').find((s) => s.name === 'Reasoning')!.questions} for ${CORPUS.marksPer.sectionsOf('ibps-po', 'Mains').find((s) => s.name === 'Reasoning')!.marks}, or one and a half. One Reasoning question is worth three English questions on the same paper. [SBI PO vs IBPS PO](/blog/sbi-po-vs-ibps-po-same-totals-different-maths) works through where those marks sit on both Mains papers.` },
      { type: 'paragraph', heading: 'Why this is worth two minutes of your time', text: `The conversion decides three things you are probably deciding by feel instead. Whether a mock score is an improvement, since comparing across papers without it compares nothing. Which section to protect when time runs short, because on an unevenly weighted paper the sections are not interchangeable. And whether a guess is worth making, since the guessing break-even is the deduction divided by the marks a correct answer earns, and the deduction on its own settles nothing: see [understanding negative marking](/blog/understanding-negative-marking) for that arithmetic.` },
      { type: 'paragraph', text: `Both numbers sit on your exam's [exam pattern page](/exams), next to the per-question pace that [how much time per question](/blog/how-much-time-per-question) covers. Read them once, write the division on the front of your notebook, and every score you record afterwards means something.` },
    ],
    faqs: [
      { q: 'How many marks is one question worth in competitive exams?', a: `It depends entirely on the paper. Across the ${CORPUS.marksPer.stages} official stage patterns published on this site the figure ranges from ${CORPUS.marksPer.cheapest.perQuestion} marks to ${CORPUS.marksPer.dearest.perQuestion}, across ${CORPUS.marksPer.distinctValues} distinct values. ${capitalise(word(CORPUS.marksPer.atOneMark))} of those papers set exactly one mark per question, which is common enough that many students assume it always holds.` },
      { q: 'How do I work out marks per question for my exam?', a: 'Divide the paper\'s total marks by its number of questions. Both figures are on your exam\'s pattern page. If the paper states a section-wise breakdown, do the division for each section separately as well, because some papers weight their sections differently from each other.' },
      { q: 'Is a score of 150 good?', a: `The question cannot be answered without the paper. On IBPS PO Prelims, 100 questions carry 100 marks, so 150 is above the maximum. On SSC CGL Tier 1, 100 questions carry 200 marks, so 150 is 75 correct answers. On JEE Main Paper 1, at 4 marks a question, 150 is 38. Compare scores only against the same paper, and against that paper's own cut-off.` },
      { q: 'Do all sections in a paper carry the same marks per question?', a: `Not always. ${capitalise(word(CORPUS.marksPer.unevenPapers))} of the official papers published here weight their sections differently. On IBPS PO Mains, English is half a mark a question while Reasoning and Data Interpretation are one and a half, so one Reasoning question is worth three English ones. Where a paper does this, the sections are not interchangeable when you are deciding where to spend the last ten minutes.` },
    ],
  },
  {
    slug: 'ibps-clerk-vs-ibps-po-prelims',
    title: 'IBPS Clerk vs IBPS PO: The Same Prelims, Weighted Differently',
    excerpt: 'Both prelims run 100 questions in 60 minutes across three 20-minute windows with the same penalty. Only one of them pays the same for every question.',
    category: 'Exam Strategy',
    readTimeMin: 6,
    publishedAt: '2026-09-23',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'ibps clerk vs ibps po',
    body: [
      { type: 'paragraph', text: 'Most comparisons of these two start with the job: clerk versus officer, the pay scale, the promotion ladder. Those matter, and they are also the part you cannot do anything about this week. The part you can act on is that the two preliminary papers look interchangeable on a pattern page and are not, and the difference is small enough that almost nobody mentions it.' },
      { type: 'takeaways', items: [
        'Both prelims: 100 questions, 60 minutes, three separately timed 20-minute tests, and a quarter of a question\'s value off for a wrong answer.',
        'IBPS Clerk pays exactly one mark for every question in every section.',
        'IBPS PO does not. Reasoning carries 40 marks across 35 questions and Quantitative Aptitude carries 30 across the same 35, so one Reasoning question is worth about 1.33 Quant questions.',
        'The papers separate properly at Mains, where PO adds a descriptive paper and an interview.',
      ] },
      { type: 'paragraph', heading: 'The prelims really do look identical', text: `Put the two official 2026 prelims side by side and almost every number matches. Both ask ${CORPUS.marksPer.stage('ibps-clerk', 'Prelims')!.questions} questions for ${CORPUS.marksPer.stage('ibps-clerk', 'Prelims')!.marks} marks in 60 minutes. Both split that into three separately timed tests of 20 minutes each. Both deduct a quarter of a question's value for a wrong answer, so the guessing arithmetic is the same on either. Both drop General Awareness from the first stage entirely. Read only the totals and you would call them the same exam at two pay grades.` },
      { type: 'table', heading: 'Section weights at prelims, both exams', headers: ['Section', 'IBPS Clerk', 'IBPS PO'], rows: [
        ['English Language', `${CORPUS.marksPer.sectionsOf('ibps-clerk', 'Prelims').find((s) => s.name.includes('English'))!.questions} questions, ${CORPUS.marksPer.sectionsOf('ibps-clerk', 'Prelims').find((s) => s.name.includes('English'))!.marks} marks`, `${CORPUS.marksPer.sectionsOf('ibps-po', 'Prelims').find((s) => s.name.includes('English'))!.questions} questions, ${CORPUS.marksPer.sectionsOf('ibps-po', 'Prelims').find((s) => s.name.includes('English'))!.marks} marks`],
        ['Quantitative section', `${CORPUS.marksPer.sectionsOf('ibps-clerk', 'Prelims').find((s) => s.name.includes('Numerical'))!.questions} questions, ${CORPUS.marksPer.sectionsOf('ibps-clerk', 'Prelims').find((s) => s.name.includes('Numerical'))!.marks} marks`, `${CORPUS.marksPer.sectionsOf('ibps-po', 'Prelims').find((s) => s.name.includes('Quantitative'))!.questions} questions, ${CORPUS.marksPer.sectionsOf('ibps-po', 'Prelims').find((s) => s.name.includes('Quantitative'))!.marks} marks`],
        ['Reasoning Ability', `${CORPUS.marksPer.sectionsOf('ibps-clerk', 'Prelims').find((s) => s.name.includes('Reasoning'))!.questions} questions, ${CORPUS.marksPer.sectionsOf('ibps-clerk', 'Prelims').find((s) => s.name.includes('Reasoning'))!.marks} marks`, `${CORPUS.marksPer.sectionsOf('ibps-po', 'Prelims').find((s) => s.name.includes('Reasoning'))!.questions} questions, ${CORPUS.marksPer.sectionsOf('ibps-po', 'Prelims').find((s) => s.name.includes('Reasoning'))!.marks} marks`],
        ['Marks per question', 'One, in all three', '1.14 Reasoning, 1.00 English, 0.86 Quant'],
      ] },
      { type: 'paragraph', heading: 'Where they stop matching', text: `IBPS Clerk gives every section marks equal to its question count, so a question is a mark wherever it sits. IBPS PO gives Reasoning ${CORPUS.marksPer.sectionsOf('ibps-po', 'Prelims').find((s) => s.name.includes('Reasoning'))!.marks} marks for ${CORPUS.marksPer.sectionsOf('ibps-po', 'Prelims').find((s) => s.name.includes('Reasoning'))!.questions} questions and Quantitative Aptitude ${CORPUS.marksPer.sectionsOf('ibps-po', 'Prelims').find((s) => s.name.includes('Quantitative'))!.marks} for the same ${CORPUS.marksPer.sectionsOf('ibps-po', 'Prelims').find((s) => s.name.includes('Quantitative'))!.questions}. Both sections still get 20 minutes. So on the PO paper a Reasoning question returns about 1.14 marks and a Quant question about 0.86, and one Reasoning question is worth roughly 1.33 Quant questions for the same twenty minutes of your life.` },
      { type: 'callout', text: 'One Reasoning question is worth roughly 1.33 Quant questions for the same twenty minutes of your life.' },
      { type: 'paragraph', heading: 'What that is worth changing', text: 'Not your syllabus. Both sections are still separately qualified, so you cannot trade one away, and a strong total does not rescue a section you failed to clear. What it changes is the last few minutes inside a window. On the PO paper, five more Reasoning attempts return more than five more Quant attempts, so if you are choosing which section to push practice into for marginal gain rather than for a cut-off, Reasoning pays better. On the Clerk paper that choice does not exist, and you should pick whichever section your accuracy is climbing fastest in. [A score means nothing until you know what a question is worth](/blog/what-one-question-is-worth) covers how often papers do this.' },
      { type: 'paragraph', heading: 'The real separation is at Mains', text: `Prelims decides nothing beyond who sits the next paper: on both exams the preliminary marks are excluded from the final merit. Mains is where the two roles part. IBPS PO Mains is ${CORPUS.marksPer.stage('ibps-po', 'Mains')!.questions} questions for ${CORPUS.marksPer.stage('ibps-po', 'Mains')!.marks} marks across 190 minutes, including a 25-mark descriptive paper of essay and comprehension, and it is followed by a Common Interview. The clerical cadre has no interview stage. If you are weighing total workload rather than one morning in an exam hall, that descriptive paper and that interview are the weight, not the prelims.` },
      { type: 'paragraph', heading: 'One thing this site cannot confirm yet', text: 'The IBPS Clerk Mains pattern published here is still marked review-pending, meaning it has not been checked line by line against a current notice the way the prelims and the PO Mains have. The prelims comparison above rests on confirmed patterns for both exams. For Clerk Mains, read the figures off the notification rather than off any comparison article, this one included.' },
      { type: 'paragraph', text: 'If you are choosing between the two banks rather than the two grades, [SBI Clerk vs IBPS Clerk](/blog/sbi-clerk-vs-ibps-clerk-the-shorter-paper-is-faster) and [SBI PO vs IBPS PO](/blog/sbi-po-vs-ibps-po-same-totals-different-maths) run the same comparison across institutions. Practice papers for both are on the [IBPS Clerk mock test](/ibps-clerk/mock-test) and [IBPS PO mock test](/ibps-po/mock-test) pages.' },
    ],
    faqs: [
      { q: 'Is IBPS Clerk prelims easier than IBPS PO prelims?', a: 'Structurally they are near-identical: 100 questions, 60 minutes, three separately timed 20-minute tests, no General Awareness, and a quarter of a question\'s value deducted for a wrong answer. The difference is that IBPS Clerk pays one mark for every question while IBPS PO weights Reasoning higher and Quantitative Aptitude lower. Difficulty of the questions themselves is not something a pattern can tell you.' },
      { q: 'Are all sections worth the same in IBPS PO prelims?', a: `No. Reasoning Ability carries 40 marks across 35 questions, Quantitative Aptitude 30 marks across 35, and English Language 30 across 30. That works out at about 1.14, 0.86 and 1.00 marks a question respectively, so a Reasoning question returns roughly a third more than a Quant question. IBPS Clerk prelims does not do this: every section there carries marks equal to its question count.` },
      { q: 'Does IBPS Clerk have an interview?', a: 'No. The clerical cadre selection runs through the preliminary and main examinations with no interview stage. IBPS PO adds a 25-mark descriptive paper inside Mains and a Common Interview afterwards, which are two things the clerk route never tests.' },
      { q: 'Do IBPS Clerk and IBPS PO prelims marks count toward the final selection?', a: 'No, on either exam. Preliminary marks are excluded from the final merit score and serve only to shortlist candidates for the main examination. A strong prelims buys you a seat at the next paper and no other advantage.' },
      { q: 'Can I prepare for IBPS Clerk and IBPS PO together?', a: 'Yes, and the prelims overlap makes it efficient: the same three sections, the same timing structure and the same marking scheme. The divergence is at Mains, where PO adds a descriptive paper and a broader awareness section, so plan separate preparation for that stage rather than for the first one.' },
    ],
  },
  {
    slug: 'how-long-you-will-actually-be-sitting-there',
    title: 'How Long You Will Actually Be Sitting There',
    excerpt: `Across ${CORPUS.sitting.stages} official papers here a sitting runs from ${CORPUS.sitting.shortest.minutes} minutes to ${CORPUS.sitting.longest.minutes}. Most people train at the length of their first paper, not their deciding one.`,
    category: 'Exam Strategy',
    readTimeMin: 6,
    publishedAt: '2026-09-23',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'how long do competitive exams last',
    body: [
      { type: 'paragraph', text: `Preparation plans are written in topics and mock counts. The exam itself is also a physical task of a fixed length, and that length varies more than people expect. Across the ${CORPUS.sitting.stages} official papers published here that a candidate sits end to end, the shortest runs ${CORPUS.sitting.shortest.minutes} minutes and the longest ${CORPUS.sitting.longest.minutes}, with a median of ${CORPUS.sitting.median}. Sitting still and concentrating for ${CORPUS.sitting.longest.minutes} minutes is a skill, and it is not one you build by practising in half-hour blocks.` },
      { type: 'takeaways', items: [
        `A sitting here runs from ${CORPUS.sitting.shortest.minutes} minutes to ${CORPUS.sitting.longest.minutes}, median ${CORPUS.sitting.median}.`,
        `The longest single paper published here is ${CORPUS.sitting.longest.exam} ${CORPUS.sitting.longest.stage}, at ${CORPUS.sitting.longest.minutes} minutes for ${CORPUS.sitting.longest.questions} questions.`,
        `Banking papers here run a median of ${CORPUS.sitting.categoryMedian('Banking')!.median} minutes and engineering papers ${CORPUS.sitting.categoryMedian('Engineering')!.median}, so two aspirants can prepare equally hard for very different physical tasks.`,
        'Your first paper and your deciding paper are often different lengths. Train at the one that decides.',
      ] },
      { type: 'table', heading: `Median sitting length by exam family`, headers: ['Exam family', 'Median sitting', 'Papers counted'], rows: CORPUS.sitting.categories.map((entry) => [
        entry.category,
        `${entry.median} min`,
        String(entry.stages),
      ]) },
      { type: 'paragraph', heading: 'Banking is the clearest trap', text: `Banking has the shortest sittings of any large family here, a median of ${CORPUS.sitting.categoryMedian('Banking')!.median} minutes across ${CORPUS.sitting.categoryMedian('Banking')!.stages} papers, because the prelims everyone starts with is an hour long. It also holds the longest single paper on the site. ${CORPUS.sitting.longest.exam} ${CORPUS.sitting.longest.stage} runs ${CORPUS.sitting.longest.minutes} minutes for ${CORPUS.sitting.longest.questions} questions, and it is the paper that decides the merit, since the preliminary marks are excluded from the final score. A candidate who has done thirty hour-long mocks has never once practised the shape of the exam that actually counts.` },
      { type: 'callout', text: 'A candidate who has done thirty hour-long mocks has never once practised the shape of the exam that actually counts.' },
      { type: 'paragraph', heading: 'Where the time actually goes', text: `${capitalise(word(CORPUS.sitting.bands.find((b) => b.label === '91 to 120 minutes')!.stages))} of the ${CORPUS.sitting.stages} papers sit in the 91 to 120 minute band and ${CORPUS.sitting.bands.find((b) => b.label === '60 to 90 minutes')!.stages} in the 60 to 90 band, so most of the corpus clusters between one and two hours. ${capitalise(word(CORPUS.sitting.bands.find((b) => b.label === 'Under 60 minutes')!.stages))} papers run under an hour, and almost all of them are English-proficiency sections that are sat as one part of a longer test day rather than as a whole exam.` },
      { type: 'paragraph', heading: 'A stated duration is not always a sitting', text: `This is worth knowing before you read a duration anywhere, including here. ${capitalise(word(CORPUS.sitting.aggregatesExcluded))} patterns on this site state a duration that no candidate ever sits in one go, and they are left out of every figure above. CMA Final's objective stage reads 540 minutes because this site groups the objective block of ten separately sat papers under one heading, and its own note says plainly that nobody sits those 150 questions in one session. KCET reads 240 minutes and is three 80-minute subject papers that auto-submit in turn, with no going back to the previous one. Read the timing note, not just the total, or you will train for a paper that does not exist.` },
      { type: 'paragraph', heading: 'What to do about it', text: `Find the length of the paper that decides your selection rather than the one that shortlists you, and sit at least a few full mocks at exactly that length, in one block, without pausing. The point is not the questions. It is finding out where your attention drops, because it will drop somewhere and you would rather learn that in a practice session than at minute 140 of a paper you have one shot at. [How to analyze your mock test performance](/blog/how-to-analyze-your-mock-test-performance) covers reading the result afterwards, and [how much time per question](/blog/how-much-time-per-question) covers the pace inside the sitting, which is a different number from its length.` },
      { type: 'paragraph', text: `Every duration quoted here comes from the exam's own official pattern, and each is stated on that exam's page in the [exam directory](/exams).` },
    ],
    faqs: [
      { q: 'How long do competitive exams last?', a: `It varies widely. Across the ${CORPUS.sitting.stages} official papers published on this site that a candidate sits end to end, the range runs from ${CORPUS.sitting.shortest.minutes} minutes to ${CORPUS.sitting.longest.minutes}, with a median of ${CORPUS.sitting.median} minutes. Banking preliminary papers are typically an hour and engineering entrances around two and a half.` },
      { q: 'Which is the longest exam paper?', a: `Of the papers published here, ${CORPUS.sitting.longest.exam} ${CORPUS.sitting.longest.stage} is the longest single sitting at ${CORPUS.sitting.longest.minutes} minutes for ${CORPUS.sitting.longest.questions} questions. Some patterns state longer durations, but those are totals across papers sat on separate days rather than one continuous session.` },
      { q: 'Should I practise full-length mock tests?', a: 'At least for the paper that decides your selection, yes, and at its real length in one unbroken block. Sectional practice builds the skill; a full-length sitting is the only way to find out when your concentration drops, which is information you want before exam day rather than during it.' },
      { q: 'Why do some exam patterns show a duration nobody sits in one go?', a: `Because a few professional qualifications set several papers on separate days and a summary figure can add them together. ${capitalise(word(CORPUS.sitting.aggregatesExcluded))} patterns on this site are like that, and each one says so in its own timing note. Always read the note alongside the total before planning practice around it.` },
    ],
  },
  {
    slug: 'most-exams-are-one-paper',
    title: 'Most Exams Are One Paper. The Famous Ones Are Not.',
    excerpt: `Of the ${CORPUS.sitting.singleStage + CORPUS.sitting.multiStage} exams here with a confirmed pattern, ${CORPUS.sitting.singleStage} are a single paper. The ${CORPUS.sitting.multiStage} that are not include almost every exam you have heard of.`,
    category: 'Exam Strategy',
    readTimeMin: 6,
    publishedAt: '2026-09-23',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'how many stages do competitive exams have',
    body: [
      { type: 'paragraph', text: `Ask an aspirant what a government exam looks like and you get tiers: a prelims, a mains, maybe an interview, months between each. That picture comes from SSC CGL and IBPS PO, and it is accurate for them. It is not what most exams look like. Of the ${CORPUS.sitting.singleStage + CORPUS.sitting.multiStage} exams on this site with a pattern confirmed against an official notice, ${CORPUS.sitting.singleStage} publish exactly one paper. You sit it once, and the result is the result.` },
      { type: 'takeaways', items: [
        `A single paper is the whole exam for ${n(CORPUS.sitting.singleStage)} of the ${CORPUS.sitting.singleStage + CORPUS.sitting.multiStage} exams here with a confirmed pattern.`,
        `${capitalise(word(CORPUS.sitting.multiStage))} run more than one stage, and they are the ones whose names everybody knows.`,
        'A single-paper exam is a much smaller commitment than the famous ones, which matters if you are deciding what to attempt alongside a main target.',
        'The trade is that a single paper gives you nothing to recover from a bad morning.',
      ] },
      { type: 'paragraph', heading: 'The exams that set the mental model', text: `The ${CORPUS.sitting.multiStage} multi-stage exams here are a roll call of the ones people talk about: SSC CGL, IBPS PO, UPSC CSE, RRB NTPC, JEE Advanced, CLAT, AILET, NDA, CDS, CUET UG and the rest. They dominate the conversation because they take the most candidates and the most preparation, so their shape becomes what everyone pictures. The arithmetic runs the other way. They are ${CORPUS.sitting.multiStage} exams out of ${CORPUS.sitting.singleStage + CORPUS.sitting.multiStage}.` },
      { type: 'callout', text: 'They dominate the conversation because they take the most candidates and the most preparation, so their shape becomes what everyone pictures.' },
      { type: 'paragraph', heading: 'Why a single paper changes your planning', text: `A two-stage exam commits you across months. A prelims in one window, a wait, a mains with a different and usually wider syllabus, and on several of them an interview after that. A single-paper exam asks for one morning and one syllabus. If you are already preparing for a tiered exam and wondering what else to attempt in the same cycle, the single-paper ones are where the marginal cost is lowest, because the sections usually overlap with what you are already studying and there is no second syllabus waiting on the other side. [Exams that share sections](/blog/exams-that-share-sections-what-actually-transfers) works through how much of that overlap is real.` },
      { type: 'paragraph', heading: 'And what it costs you', text: 'One paper means one chance in that cycle. On a tiered exam a rough prelims still leaves the mains ahead, and on several of them the prelims score is discarded entirely once you qualify, so a scrape-through costs you nothing. A single-paper exam has no such cushion. Everything, including the morning you happened to have, lands in one score. That is worth knowing before you treat a single-paper exam as the easy option: it is a smaller commitment, not a safer one.' },
      { type: 'paragraph', heading: 'Where the stages are not what they look like', text: `The ${CORPUS.sitting.multiStage} figure counts confirmed papers, not selection rounds, and the difference is larger than it sounds. Only about nine of them are a funnel in the sense people mean, where clearing one paper is what gets you to the next: SSC CGL, IBPS PO, RRB NTPC, RRB Junior Engineer, RRB ALP, SSC CPO, NIACL AO, SEBI Grade A and SIDBI. The rest are something else wearing the same shape. JEE Advanced sets Paper 1 and Paper 2 on the same day and both are compulsory. UPSC CSE's two preliminary papers are also one sitting each on the same morning. CLAT and AILET each publish an undergraduate and a postgraduate exam under one name, which are different exams rather than stages of one. SSC Selection Post publishes three qualification levels, and IELTS an Academic and a General Training variant. Before you plan around any of this, read the selection process on the exam's own page.` },
      { type: 'paragraph', text: `Every exam's stage list, with the pattern for each, is on its page in the [exam directory](/exams). If you are weighing a tiered exam against a single-paper one, [how long you will actually be sitting there](/blog/how-long-you-will-actually-be-sitting-there) covers the other half of the commitment, which is the length of the papers themselves.` },
    ],
    faqs: [
      { q: 'How many stages do competitive exams have?', a: `Most have one. Of the ${CORPUS.sitting.singleStage + CORPUS.sitting.multiStage} exams on this site with a pattern confirmed against an official notice, ${CORPUS.sitting.singleStage} publish a single paper and ${CORPUS.sitting.multiStage} publish more than one. The multi-stage group includes SSC CGL, IBPS PO, UPSC CSE, RRB NTPC, JEE Advanced and CLAT, which is why the tiered structure feels like the norm.` },
      { q: 'Is a single-paper exam easier?', a: 'It is a smaller commitment, which is not the same thing. One paper means one syllabus and one morning rather than months spread across stages. It also means no second chance inside that cycle, and no stage where a weak first performance can be made up. Tiered exams frequently discard the first-stage score once you qualify, so a narrow pass costs nothing there; a single paper has no equivalent.' },
      { q: 'Which exams have more than one stage?', a: `On this site the confirmed multi-stage exams include SSC CGL, IBPS PO, UPSC CSE, RRB NTPC, RRB Junior Engineer, RRB ALP, RRB Technician, SSC CPO, SSC Selection Post, SEBI Grade A, SIDBI Grade A and B, NIACL AO, JEE Advanced, JEE Main Paper 2, NDA, CDS, CLAT, AILET, OJEE, CUET UG, IELTS, SAT and ACT. Check the exam's own page for the current stage list before planning around it.` },
      { q: 'Are JEE Advanced Paper 1 and Paper 2 separate stages?', a: 'Not in the sense of a funnel. Both papers are compulsory and sat on the same day, so passing one does not shortlist you for the other. Several exams work this way, which is why counting papers and counting selection stages give different answers.' },
    ],
  },
  {
    slug: 'the-second-paper-is-not-more-of-the-first',
    title: 'The Second Paper Is Not More of the First',
    excerpt: 'The gap between a prelims and a mains is the cheapest study time you will ever get, and most of it goes on revising the sections you have already cleared.',
    category: 'Study Tips',
    readTimeMin: 6,
    publishedAt: '2026-09-23',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'what to study between prelims and mains',
    body: [
      { type: 'paragraph', text: 'You clear a prelims. There are some weeks before the mains and nobody has told you what to do with them, so you carry on: more quant practice, more reasoning sets, the same drill that got you through. It feels like momentum. On most of these exams it is the wrong work, because the paper ahead is not a longer version of the one behind.' },
      { type: 'takeaways', items: [
        'The later paper usually adds sections the first one never tested, so the skills that cleared prelims are not the ones being examined next.',
        'Your prelims score is almost always discarded once you qualify, so nothing carries forward except the place in the queue.',
        'Start with the sections that are new, not the ones you are already good at.',
        'Find the new paper\'s timing and marking before you start, because those usually change too.',
      ] },
      { type: 'paragraph', heading: 'What actually gets added', text: `Take the two largest examples. ${CORPUS.funnel('ibps-po')!.first.exam} ${CORPUS.funnel('ibps-po')!.first.name} runs ${CORPUS.funnel('ibps-po')!.first.questions} questions across ${CORPUS.funnel('ibps-po')!.first.sections.length} sections in ${CORPUS.funnel('ibps-po')!.first.minutes} minutes. Its ${CORPUS.funnel('ibps-po')!.last.name} runs ${CORPUS.funnel('ibps-po')!.last.questions} questions across ${CORPUS.funnel('ibps-po')!.last.sections.length} in ${CORPUS.funnel('ibps-po')!.last.minutes}, and it adds things the prelims never asked you about at all: banking and economy awareness, and a descriptive paper of essay and comprehension. ${CORPUS.funnel('ssc-cgl')!.first.exam} ${CORPUS.funnel('ssc-cgl')!.first.name} goes from ${CORPUS.funnel('ssc-cgl')!.first.questions} questions in ${CORPUS.funnel('ssc-cgl')!.first.minutes} minutes to ${CORPUS.funnel('ssc-cgl')!.last.questions} in ${CORPUS.funnel('ssc-cgl')!.last.minutes}, and adds a Computer Knowledge Test and a Data Entry Speed Test, neither of which appears anywhere in Tier 1.` },
      { type: 'table', heading: 'What the later paper adds', headers: ['Exam', 'First paper', 'Later paper', 'New at the later stage'], rows: [
        ['IBPS PO', `${CORPUS.funnel('ibps-po')!.first.questions}q in ${CORPUS.funnel('ibps-po')!.first.minutes} min`, `${CORPUS.funnel('ibps-po')!.last.questions}q in ${CORPUS.funnel('ibps-po')!.last.minutes} min`, 'Awareness, Data Analysis and Interpretation, a descriptive paper'],
        ['SSC CGL', `${CORPUS.funnel('ssc-cgl')!.first.questions}q in ${CORPUS.funnel('ssc-cgl')!.first.minutes} min`, `${CORPUS.funnel('ssc-cgl')!.last.questions}q in ${CORPUS.funnel('ssc-cgl')!.last.minutes} min`, 'Computer Knowledge Test, Data Entry Speed Test'],
        ['NIACL AO', `${CORPUS.funnel('niacl-ao')!.first.questions}q in ${CORPUS.funnel('niacl-ao')!.first.minutes} min`, `${CORPUS.funnel('niacl-ao')!.last.questions}q in ${CORPUS.funnel('niacl-ao')!.last.minutes} min`, 'Reasoning, General Awareness'],
        ['RRB Junior Engineer', `${CORPUS.funnel('rrb-je')!.first.questions}q in ${CORPUS.funnel('rrb-je')!.first.minutes} min`, `${CORPUS.funnel('rrb-je')!.last.questions}q in ${CORPUS.funnel('rrb-je')!.last.minutes} min`, 'Technical Abilities, Physics and Chemistry, Computers, Environment'],
        ['SEBI Grade A', `${CORPUS.funnel('sebi-grade-a')!.first.questions}q in ${CORPUS.funnel('sebi-grade-a')!.first.minutes} min`, `${CORPUS.funnel('sebi-grade-a')!.last.questions}q in ${CORPUS.funnel('sebi-grade-a')!.last.minutes} min`, 'Commerce, Accountancy, Management, Finance, Costing, Economics'],
      ] },
      { type: 'callout', text: 'The skills that cleared the prelims are not the ones being examined next.' },
      { type: 'paragraph', heading: 'Nothing you scored carries forward', text: 'This is the part people find hardest to accept. On the large staged exams the first paper shortlists and nothing more: the marks are excluded from the final merit, so a candidate who scraped through and one who topped the prelims arrive at the next paper level. Whatever cushion you think you built does not exist. [Qualifying vs merit sections](/blog/qualifying-vs-merit-sections-banking-exams) sets out which marks actually count where, and it is worth ten minutes before you plan the gap.' },
      { type: 'paragraph', heading: 'So spend the gap on what is new', text: 'The instinct is to keep sharpening what already works, because it is the part you enjoy and the part that produces visible improvement. The return on that is close to zero here. If the later paper adds an awareness section, a technical section or a writing task, those are the marks nobody in the queue has practised yet, and they are where the gap is genuinely cheap. Sharpen the familiar sections only enough to keep them warm.' },
      { type: 'paragraph', heading: 'Check the timing and marking as well', text: 'The second paper usually reshapes those too, and people discover it in the hall. Sections can be worth different amounts per question, the deduction can change between stages, and a paper that was sectionally locked at the first stage may not be at the second, or the reverse. Read the new pattern the same way you read the first one, using [what one question is worth](/blog/what-one-question-is-worth) for the marks and [sectional lock vs composite timer](/blog/sectional-lock-vs-composite-timer) for the clock.' },
      { type: 'paragraph', text: 'Both papers for each of these exams are on the exam\'s own page in the [exam directory](/exams), with the pattern for each stage set out separately.' },
    ],
    faqs: [
      { q: 'What should I study between prelims and mains?', a: 'Start with whatever the second paper tests that the first one did not. On most staged exams that means an awareness or technical section, and sometimes a descriptive paper, none of which the prelims examined. Those are the marks the rest of the shortlist has not practised either. Keep your existing sections warm rather than continuing to drill them.' },
      { q: 'Does my prelims score count towards final selection?', a: 'On most large staged exams, no. The preliminary marks shortlist candidates for the next paper and are then excluded from the final merit. Check your own exam\'s selection process page, because a few exams do carry marks forward and the difference changes how much a strong first paper is worth.' },
      { q: 'How different is the mains from the prelims?', a: `It varies by exam but the direction is consistent: more questions, more time, and sections that did not appear at all in the first paper. IBPS PO goes from ${CORPUS.funnel('ibps-po')!.first.questions} questions in ${CORPUS.funnel('ibps-po')!.first.minutes} minutes to ${CORPUS.funnel('ibps-po')!.last.questions} in ${CORPUS.funnel('ibps-po')!.last.minutes} and adds a descriptive paper. SSC CGL goes from ${CORPUS.funnel('ssc-cgl')!.first.questions} to ${CORPUS.funnel('ssc-cgl')!.last.questions} questions and adds a computer test and a typing test.` },
      { q: 'How long is the gap between prelims and mains?', a: 'It differs by exam and by cycle, and it is announced in the notification rather than fixed, so check the current notice for your exam rather than last year\'s calendar. Plan the work by what the second paper adds instead of by the number of weeks, because the sections that are new need the time whether you have four weeks or ten.' },
    ],
  },
  {
    slug: 'how-to-use-your-response-sheet',
    title: 'Your Response Sheet Is the Most Useful Document You Will Ignore',
    excerpt: 'The official answer key and your own response sheet let you compute your raw score before the result. Most candidates download both and never open them.',
    category: 'Study Tips',
    readTimeMin: 6,
    publishedAt: '2026-09-23',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'how to calculate score from response sheet',
    body: [
      { type: 'paragraph', text: 'After most computer-based exams the conducting body publishes two things: a provisional answer key, and your own response sheet showing what you actually marked. Put them side by side and you can work out your raw score weeks before the result, decide whether an objection is worth filing, and learn something about how you sat the paper. Most candidates download both, glance at them, and close the tab.' },
      { type: 'takeaways', items: [
        'Raw score is (correct times marks per correct) minus (wrong times the deduction). Unattempted questions score zero.',
        'Count your wrong answers separately from your unattempted ones. They mean different things about the same paper.',
        'The objection window is short and usually carries a fee per question, so check the notice the day the key appears.',
        'A provisional key can change. Your score is an estimate until the final key is published.',
      ] },
      { type: 'paragraph', heading: 'Working out the raw score', text: `Two numbers do it, and both are on your exam's [exam pattern page](/exams): what a correct answer earns, and what a wrong one costs. Count your correct answers, multiply by the first. Count your wrong answers, multiply by the second. Subtract. Unattempted questions score zero on every scheme, so they do not enter the arithmetic at all. The one thing to be careful about is that the deduction is not the penalty: a paper awarding 4 marks and deducting 1 takes a quarter of a correct answer, the same as one awarding 1 and deducting 0.25, and [understanding negative marking](/blog/understanding-negative-marking) explains why the two look so different and are not.` },
      { type: 'paragraph', heading: 'Then separate the wrong from the blank', text: 'This is the part worth more than the score. A wrong answer and an unattempted one both cost you a mark you could have had, but they come from opposite mistakes. A paper full of wrong answers means you were attempting things you could not do, and the fix is to guess more carefully. A paper full of blanks means you left marks on the table, and on most schemes here that is the more expensive error, because the guessing break-even is lower than people assume. Count both before deciding which habit to change.' },
      { type: 'callout', text: 'A wrong answer and an unattempted one both cost you a mark you could have had, but they come from opposite mistakes.' },
      { type: 'paragraph', heading: 'Read the questions you got wrong, not the score', text: 'The score tells you one number you will get officially in a few weeks anyway. The response sheet tells you which questions, in what order, and that is the part you cannot get from the result. Look for the ones you answered wrongly early in the paper, when you were fresh, because those are knowledge gaps rather than fatigue. Then look at where the blanks cluster, because a run of them together usually means you lost the clock in that section rather than that you found those questions hard. [How to build an error log](/blog/how-to-build-an-error-log) covers turning that into something you will actually revisit.' },
      { type: 'paragraph', heading: 'About the objection window', text: 'Most bodies allow candidates to challenge a provisional key inside a short window, usually with a fee for each question challenged, sometimes refunded if the challenge succeeds. The rules, the fee and the deadline differ by exam and by cycle and they are stated in the notice rather than fixed, so read the one for your exam on the day the key appears rather than trusting any summary, this one included. What is generally true: the window is measured in days, it closes on time, and a challenge needs a source rather than a disagreement.' },
      { type: 'paragraph', heading: 'Treat the number as provisional', text: 'A provisional key is provisional. Answers get revised, questions occasionally get dropped, and a dropped question is usually credited to everyone or removed from the total, either of which moves your score. Work out the figure, note it, and do not plan around it until the final key lands. If the estimate is close to a previous year\'s cut-off, remember that cut-offs move with the paper and the vacancies: [understanding cut-offs and percentile](/blog/understanding-cutoffs-and-percentile) covers why last year\'s number is a weak guide to this year\'s.' },
      { type: 'paragraph', text: 'Where an exam on this site has published a key or response-sheet notice, it is summarised with its source on the [exam updates](/exam-updates) page.' },
    ],
    faqs: [
      { q: 'How do I calculate my score from the response sheet?', a: 'Count your correct answers and multiply by the marks a correct answer earns. Count your wrong answers and multiply by the deduction. Subtract the second from the first. Unattempted questions score zero and do not affect the total. Both figures are on your exam\'s pattern page, and the deduction alone does not tell you the penalty without the marks per correct answer beside it.' },
      { q: 'What is the difference between an answer key and a response sheet?', a: 'The answer key is the conducting body\'s list of correct answers for the paper. The response sheet is the record of what you personally marked, question by question. You need both: the key alone tells you nothing about your paper, and the response sheet alone tells you what you chose without telling you whether it was right.' },
      { q: 'Should I challenge a question in the objection window?', a: 'Only with a source. A challenge backed by a textbook, an official document or a standard reference has a chance; a disagreement does not. Most bodies charge a fee for each question challenged, which is often refunded when the challenge succeeds, and the window is short. Read your exam\'s own notice for the fee, the deadline and the format, because these differ by exam and by cycle.' },
      { q: 'Is the score from a provisional key final?', a: 'No. Provisional keys get revised, and questions are sometimes dropped and either credited to every candidate or removed from the total, which changes your score either way. Treat the figure as an estimate until the final key is published, and be especially careful about it if your estimate sits near a cut-off.' },
    ],
  },
  {
    slug: 'only-one-question-in-seven-is-hard',
    title: 'Only One Question in Seven Is Hard',
    excerpt: `Across the ${n(CORPUS.corpus.questions)} questions published here, ${share(CORPUS.corpus.difficulty.hard, CORPUS.corpus.questions)}% are graded hard. A paper that feels mostly difficult is usually a paper you are sitting wrong.`,
    category: 'Mock Tests',
    readTimeMin: 6,
    publishedAt: '2026-09-24',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'how difficult are competitive exam questions',
    body: [
      { type: 'paragraph', text: `A mock that felt easy makes people suspicious, as though a good practice paper ought to hurt. Count what is actually in one and the shape is different. Of the ${n(CORPUS.corpus.questions)} questions published on this site, ${n(CORPUS.corpus.difficulty.hard)} are graded hard. That is ${share(CORPUS.corpus.difficulty.hard, CORPUS.corpus.questions)}%, roughly one in seven. The bulk is the middle, and the middle is where the marks are.` },
      { type: 'takeaways', items: [
        `${capitalise(word(share(CORPUS.corpus.difficulty.hard, CORPUS.corpus.questions)))} per cent of the ${n(CORPUS.corpus.questions)} questions here are hard, ${share(CORPUS.corpus.difficulty.medium, CORPUS.corpus.questions)}% medium and ${share(CORPUS.corpus.difficulty.easy, CORPUS.corpus.questions)}% easy.`,
        'A paper is won on the easy and medium bulk, not on the hard tail.',
        'At the pace most papers set, the hard questions are where a section goes wrong rather than where it is won.',
        'A mock that feels comfortable is not necessarily too easy. Check your accuracy on the middle band instead.',
      ] },
      { type: 'table', heading: `How ${n(CORPUS.corpus.questions)} questions grade out`, headers: ['Difficulty', 'Questions', 'Share'], rows: [
        ['Easy', n(CORPUS.corpus.difficulty.easy), `${share(CORPUS.corpus.difficulty.easy, CORPUS.corpus.questions)}%`],
        ['Medium', n(CORPUS.corpus.difficulty.medium), `${share(CORPUS.corpus.difficulty.medium, CORPUS.corpus.questions)}%`],
        ['Hard', n(CORPUS.corpus.difficulty.hard), `${share(CORPUS.corpus.difficulty.hard, CORPUS.corpus.questions)}%`],
      ] },
      { type: 'paragraph', heading: 'Where the marks actually are', text: `Put the split next to the clock. Most papers here give you around a minute a question and the fastest give ${Math.round(CORPUS.pace.fastestSeconds)} seconds, which [how much time per question](/blog/how-much-time-per-question) works through. At that pace the ${share(CORPUS.corpus.difficulty.easy + CORPUS.corpus.difficulty.medium, CORPUS.corpus.questions)}% of questions that are easy or medium are the entire paper as far as your score is concerned. The hard ${share(CORPUS.corpus.difficulty.hard, CORPUS.corpus.questions)}% is not where a good candidate pulls ahead. It is where an average one loses the four minutes that cost them six easier questions later.` },
      { type: 'callout', text: 'The hard questions are not where a good candidate pulls ahead. They are where an average one loses the four minutes that cost them six easier questions later.' },
      { type: 'paragraph', heading: 'So stop judging a mock by how it felt', text: `"Too easy" is the most common complaint about a practice paper and it is almost never the useful reading. A paper weighted the way real papers are weighted will feel manageable in stretches, because most of it is meant to be. The question worth asking after a mock is not whether it was hard but what your accuracy was on the middle band, because that band is ${share(CORPUS.corpus.difficulty.medium, CORPUS.corpus.questions)}% of everything and it is where a score moves. [How to analyze your mock test performance](/blog/how-to-analyze-your-mock-test-performance) sets out how to pull that out of a result.` },
      { type: 'paragraph', heading: 'What the hard band is for', text: 'It is not padding. A paper with no hard questions gives you nothing to practise triage on, and triage is the skill a timed exam actually tests. The point of the hard band is to give you something you should decide to leave, under a clock, often enough that leaving it stops feeling like failure. If you never meet a question you cannot do in practice, the first one you meet will be in the exam hall.' },
      { type: 'paragraph', heading: 'What these labels are and are not', text: `Worth being plain about this. The grades are this site's own, applied to original questions written against each exam's published syllabus, not to past papers and not by the exam bodies. They say how hard we judged a question to be, which is a useful relative signal across ${n(CORPUS.corpus.questions)} of them and not a claim about any real paper's composition. No exam body publishes a difficulty split, so nobody, including us, can tell you what fraction of your actual paper will be hard.` },
      { type: 'paragraph', text: `Every test on the site reports its own split when you finish it, so you can see which band your accuracy actually sits in rather than guessing. Start from your exam's page in the [exam directory](/exams).` },
    ],
    faqs: [
      { q: 'How difficult are competitive exam questions?', a: `Most are not hard. Across the ${n(CORPUS.corpus.questions)} questions published on this site, ${share(CORPUS.corpus.difficulty.easy, CORPUS.corpus.questions)}% are graded easy, ${share(CORPUS.corpus.difficulty.medium, CORPUS.corpus.questions)}% medium and ${share(CORPUS.corpus.difficulty.hard, CORPUS.corpus.questions)}% hard. A paper is decided on the easy and medium bulk; the hard band is mostly where time gets lost.` },
      { q: 'My mock test felt too easy. Is that a bad sign?', a: 'Not by itself. A paper weighted the way real papers are weighted feels manageable in stretches, because most questions are meant to be answerable. The useful check is your accuracy on the medium band rather than how the paper felt, since that band is the majority of any paper and the place a score actually moves.' },
      { q: 'Should I practise only hard questions?', a: 'No. Drilling only the hard band trains you for about one question in seven and leaves the part that decides your score unpractised. Hard questions are worth meeting under a clock so that deciding to leave one becomes routine, which is a different purpose from getting better at them.' },
      { q: 'Are these difficulty labels from the exam bodies?', a: 'No. They are this site\'s own grades on original questions written against each exam\'s published syllabus. No exam body publishes a difficulty split for its papers, so the labels are a relative signal across this corpus rather than a prediction of what your real paper will contain.' },
    ],
  },
  {
    slug: 'is-c-the-most-common-answer',
    title: 'Is C the Most Common Answer? We Counted 35,052 Questions',
    excerpt: `The folklore says pick C when stuck. Across ${n(CORPUS.corpus.fourOption)} four-option questions here, C comes third, and all four positions sit within ${share1(Math.max(...CORPUS.corpus.position) - Math.min(...CORPUS.corpus.position), CORPUS.corpus.fourOption)} points.`,
    category: 'Study Tips',
    readTimeMin: 5,
    publishedAt: '2026-09-24',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'is c the most common answer',
    body: [
      { type: 'paragraph', text: `Every exam hall has someone who fills the last ten questions with C because it is supposedly the commonest answer. It is a comforting piece of folklore and there is no evidence behind it. We counted every four-option single-correct question published on this site, ${n(CORPUS.corpus.fourOption)} of them, and C came third.` },
      { type: 'table', heading: `Correct answer by position, ${n(CORPUS.corpus.fourOption)} questions`, headers: ['Position', 'Times correct', 'Share'], rows: [
        ['A', n(CORPUS.corpus.position[0]), `${share1(CORPUS.corpus.position[0], CORPUS.corpus.fourOption)}%`],
        ['B', n(CORPUS.corpus.position[1]), `${share1(CORPUS.corpus.position[1], CORPUS.corpus.fourOption)}%`],
        ['C', n(CORPUS.corpus.position[2]), `${share1(CORPUS.corpus.position[2], CORPUS.corpus.fourOption)}%`],
        ['D', n(CORPUS.corpus.position[3]), `${share1(CORPUS.corpus.position[3], CORPUS.corpus.fourOption)}%`],
      ] },
      { type: 'takeaways', items: [
        `C is third of four here, not first. The gap between the commonest and rarest position is ${n(Math.max(...CORPUS.corpus.position) - Math.min(...CORPUS.corpus.position))} questions out of ${n(CORPUS.corpus.fourOption)}.`,
        'That gap is under a point and a half, which is noise rather than a pattern you could bet on.',
        'No exam body publishes its answer distribution, so nobody can tell you what your real paper does.',
        'Eliminating one option beats picking any letter, and the arithmetic says so.',
      ] },
      { type: 'paragraph', heading: 'What the numbers say', text: `A is correct ${share1(CORPUS.corpus.position[0], CORPUS.corpus.fourOption)}% of the time, B ${share1(CORPUS.corpus.position[1], CORPUS.corpus.fourOption)}%, C ${share1(CORPUS.corpus.position[2], CORPUS.corpus.fourOption)}% and D ${share1(CORPUS.corpus.position[3], CORPUS.corpus.fourOption)}%. The spread between the commonest and the rarest is ${n(Math.max(...CORPUS.corpus.position) - Math.min(...CORPUS.corpus.position))} questions, or ${share1(Math.max(...CORPUS.corpus.position) - Math.min(...CORPUS.corpus.position), CORPUS.corpus.fourOption)}% of the corpus. If you answered every question with the best-performing letter rather than at random, you would gain ${share1(Math.max(...CORPUS.corpus.position) - CORPUS.corpus.fourOption / 4, CORPUS.corpus.fourOption)}% more correct answers, which is one extra mark in roughly two hundred questions. That is not a strategy. It is a rounding error you would have to sit a hundred papers to notice.` },
      { type: 'callout', text: 'That is not a strategy. It is a rounding error you would have to sit a hundred papers to notice.' },
      { type: 'paragraph', heading: 'Why our corpus is balanced, and why that is the point', text: `Being straight about where this number comes from: it is level here partly because we keep it level. Every bank published on this site is checked for answer-position balance before it ships, and a bank whose answers cluster on one letter gets rebuilt. So this is not evidence that real exam papers are balanced. It is evidence that when somebody is deliberately not putting a pattern in, there is no pattern to find. Nobody is deliberately putting one in on your real paper either, and no exam body publishes its distribution, so the folklore has nothing behind it in either direction.` },
      { type: 'paragraph', heading: 'What to do instead', text: `The question the letter myth is really trying to answer is what to do when you do not know. The arithmetic answers it better. A guess breaks even when your accuracy matches the deduction divided by the marks a correct answer earns, and on the commonest scheme here that line sits at ${breakEvenPercent(0.25)}% while a blind guess between four options returns ${blindGuessPercent(4)}%. You are already past the line before eliminating anything, and ruling out a single option puts you near 33%, clear of every break-even this site publishes. [Understanding negative marking](/blog/understanding-negative-marking) has the full working.` },
      { type: 'paragraph', heading: 'The habit worth dropping', text: 'Picking a lucky letter feels like doing something, which is why it survives. It also costs you the two or three seconds you could have spent reading the options and ruling one out, and that elimination is worth far more than any letter. If you genuinely cannot eliminate anything and the clock is gone, any letter will do, and it does not matter which one you pick.' },
      { type: 'paragraph', text: `The answer-position split for every bank on this site is printed by its own quality check, and the marking scheme behind the break-even sits on each exam's page in the [exam directory](/exams).` },
    ],
    faqs: [
      { q: 'Is C the most common answer in multiple choice exams?', a: `Not on this site's questions. Across ${n(CORPUS.corpus.fourOption)} four-option single-correct questions, C is correct ${share1(CORPUS.corpus.position[2], CORPUS.corpus.fourOption)}% of the time, which places it third behind A at ${share1(CORPUS.corpus.position[0], CORPUS.corpus.fourOption)}% and B at ${share1(CORPUS.corpus.position[1], CORPUS.corpus.fourOption)}%. All four sit within ${share1(Math.max(...CORPUS.corpus.position) - Math.min(...CORPUS.corpus.position), CORPUS.corpus.fourOption)} percentage points. No exam body publishes its own distribution, so there is no basis for the claim about real papers either.` },
      { q: 'Should I pick the same letter for all questions I do not know?', a: `It makes no measurable difference which letter you pick. On this corpus the gap between the best and worst position is ${share1(Math.max(...CORPUS.corpus.position) - Math.min(...CORPUS.corpus.position), CORPUS.corpus.fourOption)}% of questions, so choosing the best-performing letter over a random one gains about one extra mark in two hundred questions. Spend the effort on eliminating an option instead, which is worth far more.` },
      { q: 'Does eliminating one option actually help?', a: `Substantially. Ruling out one of four options takes you from a 25% chance to about 33%. The harshest penalty published on this site is one-third of a correct answer, whose break-even is ${breakEvenPercent(1 / 3)}%, so 33% clears every break-even here. On the commonest scheme, +1 with a 0.25 deduction, the break-even is ${breakEvenPercent(0.25)}% and even a blind guess is already worth taking.` },
      { q: 'Why are answer positions balanced on this site?', a: 'Because it is checked. Every question bank is audited for answer-position spread before it is published, and a bank whose correct answers cluster on one letter is rebuilt rather than shipped. That keeps practice papers from teaching a pattern that would not exist in a real exam.' },
    ],
  },
  {
    slug: 'general-awareness-weightage',
    title: 'General Awareness Weightage: How Much of the Paper It Really Is',
    excerpt: `Of the ${n(CORPUS.awareness.papers)} official patterns published here, ${n(CORPUS.awareness.withAwareness)} carry a general awareness section. The middle one is worth ${CORPUS.awareness.median.toFixed(0)}% of the marks, and the heaviest is over ${Math.floor(CORPUS.awareness.heaviest[0].share)}%.`,
    category: 'Mock Tests',
    readTimeMin: 6,
    publishedAt: '2026-09-24',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'general awareness weightage in competitive exams',
    body: [
      { type: 'paragraph', text: `A mock test can reproduce the reasoning and the arithmetic of a paper closely. General awareness is the section it struggles to hold, because those answers expire. Before you work out what that costs you, it helps to know how large the section is. Of the ${n(CORPUS.awareness.papers)} official exam patterns published on this site that break their paper into sections, ${n(CORPUS.awareness.withAwareness)} carry one that is general awareness or current affairs and nothing else. The middle one is worth ${CORPUS.awareness.median.toFixed(0)}% of the marks.` },
      { type: 'takeaways', items: [
        `${capitalise(word(CORPUS.awareness.withAwareness))} of the ${n(CORPUS.awareness.papers)} sectioned papers here carry an awareness section, and ${n(CORPUS.awareness.atFifthOrMore)} of those give it a fifth of the marks or more.`,
        `${capitalise(word(CORPUS.awareness.atQuarter))} papers set it at exactly a quarter, which is the commonest single weighting.`,
        'Railways and SSC papers carry it almost universally; engineering entrance papers carry it almost never.',
        'It is the one section where old practice material quietly stops being correct, so a stale mock flatters you there and nowhere else.',
      ] },
      { type: 'table', heading: 'Where the awareness section carries the most weight', headers: ['Paper', 'Questions', 'Marks', 'Share of the paper'], rows: [
        ...[...CORPUS.awareness.heaviest, CORPUS.awareness.lightest].map((row) => [
          // Several stages are named after their own exam, so "Kerala MCA
          // Kerala MCA 2026 Entrance" is what naive concatenation produces.
          row.stage.startsWith(row.exam) ? row.stage : `${row.exam} ${row.stage}`,
          n(row.questions),
          `${n(row.marks)} of ${n(row.total)}`,
          `${share1(row.marks, row.total)}%`,
        ]),
      ] },
      { type: 'paragraph', heading: 'Where that lands on the papers here', text: `The spread runs from ${share1(CORPUS.awareness.lightest.marks, CORPUS.awareness.lightest.total)}% on ${CORPUS.awareness.lightest.exam}, where the section is ${word(CORPUS.awareness.lightest.questions)} questions, up to ${share1(CORPUS.awareness.heaviest[0].marks, CORPUS.awareness.heaviest[0].total)}% on ${CORPUS.awareness.heaviest[0].exam}. ${capitalise(word(CORPUS.awareness.atFifthOrMore))} of the ${n(CORPUS.awareness.withAwareness)} papers give awareness a fifth of the marks or more, and ${word(CORPUS.awareness.atQuarter)} land on exactly a quarter. Where you sit depends almost entirely on which family of exams you are writing: ${CORPUS.awareness.forCategory('Railways')?.papers} of the ${CORPUS.awareness.forCategory('Railways')?.total} Railways papers here carry an awareness section and ${CORPUS.awareness.forCategory('SSC')?.papers} of ${CORPUS.awareness.forCategory('SSC')?.total} SSC papers do, while the engineering entrance papers carry none at all.` },
      { type: 'paragraph', heading: 'Why practice material struggles with this section', text: 'A reasoning question written three years ago is still correct today, and so is a question about the area of a circle. A question asking who currently holds an office is correct only until somebody else holds it, and nothing about the question announces that it has gone off. That is the difference between a section you can drill from a bank and a section you have to keep up with. It is also why a general awareness score from an old practice paper tells you less than the same score in any other section: you cannot tell whether you knew the answer or whether the answer simply has not moved yet.' },
      { type: 'callout', text: 'A question asking who currently holds an office is correct only until somebody else holds it, and nothing about the question announces that it has gone off.' },
      { type: 'paragraph', heading: 'What this site does about it, and what that means for your score', text: `We do not build awareness sections, for the reason above. That decision is visible rather than hidden: ${n(CORPUS.awareness.short)} of the ${n(CORPUS.awareness.fullLength)} full-length tests published here stop short of the official paper because an awareness section is not included, across ${n(CORPUS.awareness.shortExams)} exams, and each of those tests prints the count it actually covers next to its name. If you sit one of them, score yourself out of what was in front of you rather than the official total. A percentage taken against the whole paper understates how you did, and it hides the section you have not practised behind a number that looks like a shortfall in everything. [Reading a mock test result properly](/blog/how-to-analyze-your-mock-test-performance) covers the rest of that arithmetic.` },
      { type: 'paragraph', heading: 'Where the counting gets awkward', text: `${capitalise(word(CORPUS.awareness.mixed.length))} papers are left out of the figures above because they fold general knowledge into a heading shared with another subject: ${CORPUS.awareness.mixed.map((entry) => entry.exam).join(', ')}. On ${CORPUS.awareness.mixed[0].exam} the heading reads "${CORPUS.awareness.mixed[0].section}", and charging all of its marks to awareness would file a reasoning section under general knowledge. Counted loosely, ${n(CORPUS.awareness.withAwareness + CORPUS.awareness.mixed.length)} papers here touch awareness in some form. Counted strictly, which is what the table does, ${n(CORPUS.awareness.withAwareness)} do.` },
      { type: 'paragraph', text: `Your own paper is the one that matters, and its weighting sits on its pattern page: the [RRB NTPC pattern](/rrb-ntpc/exam-pattern) and the [RPF Constable pattern](/rpf-constable/exam-pattern) are at the heavy end, and every other exam is in the [exam directory](/exams). Once you know the share, [preparing general awareness without drowning in current affairs](/blog/preparing-general-awareness-without-drowning-in-current-affairs) covers how to actually cover it.` },
    ],
    faqs: [
      { q: 'How much weightage does general awareness carry in competitive exams?', a: `It varies more than most sections. Across the ${n(CORPUS.awareness.papers)} official patterns published on this site that publish a section breakdown, ${n(CORPUS.awareness.withAwareness)} carry an awareness section, the middle one is worth ${CORPUS.awareness.median.toFixed(0)}% of the marks, and the range runs from ${share1(CORPUS.awareness.lightest.marks, CORPUS.awareness.lightest.total)}% to ${share1(CORPUS.awareness.heaviest[0].marks, CORPUS.awareness.heaviest[0].total)}%. Railways and SSC papers sit at the heavy end and engineering entrance papers carry no awareness section at all.` },
      { q: 'Which exams have the highest general awareness weightage?', a: `Among the papers here, ${CORPUS.awareness.heaviest[0].exam} ${CORPUS.awareness.heaviest[0].stage}, ${CORPUS.awareness.heaviest[1].exam} ${CORPUS.awareness.heaviest[1].stage} and ${CORPUS.awareness.heaviest[2].exam} ${CORPUS.awareness.heaviest[2].stage} are the heaviest, each giving awareness ${share1(CORPUS.awareness.heaviest[0].marks, CORPUS.awareness.heaviest[0].total)}% of the marks. ${CORPUS.awareness.heaviest[3].exam} ${CORPUS.awareness.heaviest[3].stage} follows with ${n(CORPUS.awareness.heaviest[3].questions)} awareness questions out of ${n(CORPUS.awareness.heaviest[3].total)} marks.` },
      { q: 'Why do some mock tests leave out the general awareness section?', a: `Because its answers expire and a practice bank cannot be trusted to keep up. On this site that is a stated policy rather than an omission: ${n(CORPUS.awareness.short)} of ${n(CORPUS.awareness.fullLength)} full-length tests leave an awareness section unbuilt, and each one prints how much of the official paper it covers. Check any mock you sit for the same disclosure before you read its score as a prediction.` },
      { q: 'Should I count a mock test score that skipped general awareness?', a: 'Count it against what the mock actually contained. A score out of 130 questions is not a score out of 160, and treating it as one will flatter your pacing and hide the section you have not practised. Track the awareness section separately, since it is tested by recall rather than by the timed problem solving the rest of the paper measures.' },
    ],
  },
  {
    slug: 'do-exam-patterns-change',
    title: 'Do Exam Patterns Change? Six Papers That Moved',
    excerpt: `Practice material outlives the paper it was written for. Of the ${n(CORPUS.revisions.stages)} stage patterns here, ${word(CORPUS.revisions.revised)} record a paper that changed shape.`,
    category: 'Mock Tests',
    readTimeMin: 6,
    publishedAt: '2026-09-24',
    authorName: 'TakeMockTest Editorial Team',
    primaryKeyword: 'do exam patterns change every year',
    body: [
      { type: 'paragraph', text: `Most papers, most years, stay where they are. That is why the ones that move catch people out: nobody rereads a notification for a paper they already know. Of the ${n(CORPUS.revisions.stages)} stage patterns published on this site, ${n(CORPUS.revisions.withCycle)} record the cycle they were read from, and ${word(CORPUS.revisions.revised)} record a paper that changed shape from an earlier one. ${capitalise(word(CORPUS.revisions.revised))} out of ${n(CORPUS.revisions.stages)} is a small number until yours is one of them.` },
      { type: 'table', heading: 'Six papers this site records as revised', headers: ['Paper', 'What changed', 'Where it stands now'], rows: [
        ['LSAT scored sections', 'Analytical Reasoning, the logic-games section, was dropped from the scored test in 2024 and replaced by a second Logical Reasoning section', `${n(CORPUS.revisions.facts('lsat', 'Scored Sections')?.questions ?? 0)} scored questions in ${n(CORPUS.revisions.facts('lsat', 'Scored Sections')?.minutes ?? 0)} minutes, ${word(CORPUS.revisions.facts('lsat', 'Scored Sections')?.options ?? 0)} options each`],
        ['ACT Math', 'Five answer options became four in the Enhanced ACT rollout', `${n(CORPUS.revisions.facts('act', 'Math')?.questions ?? 0)} questions in ${n(CORPUS.revisions.facts('act', 'Math')?.minutes ?? 0)} minutes, ${word(CORPUS.revisions.facts('act', 'Math')?.options ?? 0)} options each`],
        ['NEET PG', 'NBEMS cut the paper from 200 questions and 800 marks for the 2026 cycle', `${n(CORPUS.revisions.facts('neet-pg', 'NEET PG 2026 Computer-Based Test')?.questions ?? 0)} questions, ${n(CORPUS.revisions.facts('neet-pg', 'NEET PG 2026 Computer-Based Test')?.marks ?? 0)} marks, ${n(CORPUS.revisions.facts('neet-pg', 'NEET PG 2026 Computer-Based Test')?.minutes ?? 0)} minutes`],
        ['IBPS Clerk Mains', '155 questions in 120 minutes became more of both, with Quantitative Aptitude going from 35 questions to 40', `${n(CORPUS.revisions.facts('ibps-clerk', 'Mains')?.questions ?? 0)} questions, ${n(CORPUS.revisions.facts('ibps-clerk', 'Mains')?.marks ?? 0)} marks, ${n(CORPUS.revisions.facts('ibps-clerk', 'Mains')?.minutes ?? 0)} minutes`],
        ['SBI PO Mains', 'The descriptive test was revised to 30 marks in 30 minutes for the 2026 cycle', `${n(CORPUS.revisions.facts('sbi-po', 'Mains')?.questions ?? 0)} objective questions, ${n(CORPUS.revisions.facts('sbi-po', 'Mains')?.marks ?? 0)} marks, ${n(CORPUS.revisions.facts('sbi-po', 'Mains')?.minutes ?? 0)} minutes, then the descriptive`],
        ['MPPSC State Service prelims', 'The commission revised its preliminary scheme in an exam plan dated 5 January 2026', `${n(CORPUS.revisions.facts('mppsc-state-service', 'Prelims General Aptitude Test')?.questions ?? 0)} questions, ${n(CORPUS.revisions.facts('mppsc-state-service', 'Prelims General Aptitude Test')?.marks ?? 0)} marks, ${n(CORPUS.revisions.facts('mppsc-state-service', 'Prelims General Aptitude Test')?.minutes ?? 0)} minutes`],
      ] },
      { type: 'takeaways', items: [
        'A pattern change makes old practice material wrong in a way that looks exactly like correct practice material.',
        'The LSAT case is the extreme: books still in circulation drill a section that is no longer scored.',
        'Most revisions move the mix rather than the totals, which is harder to notice and still changes how you ration time.',
        'Checking takes a minute: totals, duration, section list and options, against the notification for your own cycle.',
      ] },
      { type: 'paragraph', heading: 'The LSAT is the case worth staring at', text: `Analytical Reasoning, the section everyone called logic games, stopped being scored in 2024 and a second Logical Reasoning section took its place. A book that teaches logic games is not out of date in the way a phone number is out of date. It is internally consistent, well written, and drilling a section nobody will mark. The scored test now runs ${n(CORPUS.revisions.facts('lsat', 'Scored Sections')?.questions ?? 0)} questions in ${n(CORPUS.revisions.facts('lsat', 'Scored Sections')?.minutes ?? 0)} minutes. Anyone budgeting their preparation against the older shape is spending hours on a section that pays nothing.` },
      { type: 'callout', text: 'A book that teaches logic games is not out of date the way a phone number is out of date. It is internally consistent, well written, and drilling a section nobody will mark.' },
      { type: 'paragraph', heading: 'Most changes are quieter than that', text: `IBPS Clerk Mains is the ordinary case. It went from 155 questions in 120 minutes to ${n(CORPUS.revisions.facts('ibps-clerk', 'Mains')?.questions ?? 0)} in ${n(CORPUS.revisions.facts('ibps-clerk', 'Mains')?.minutes ?? 0)}, which barely touches the pace: about three quarters of a minute a question either way. What moved was the mix. Quantitative Aptitude went from 35 questions to 40, so the section you were rationing at under a quarter of the paper is now a full quarter of it. A candidate practising on the old shape would arrive with a time plan that is right in aggregate and wrong section by section, which is the sort of error a full mock hides and a sectional analysis finds. [How much time per question](/blog/how-much-time-per-question) has the arithmetic.` },
      { type: 'list', heading: 'How to check a mock test against the real paper', ordered: true, items: [
        'Total questions and total marks. If either differs from the notification, the mock is modelling a different paper.',
        'Duration, and whether the sections are separately timed. A composite timer and a sectional lock demand different plans.',
        'The section list, with the question count against each one. This is where a revision usually shows up first.',
        'Options per question, which decides what a blind guess returns. ACT Math went from five options to four, and on a paper that penalises wrong answers that moves the break-even too.',
        'The cycle the pattern claims. A pattern with no cycle and no notification behind it is somebody\'s recollection.',
      ] },
      { type: 'paragraph', heading: 'Why careful sources still disagree', text: `Checking is not always enough, and pretending otherwise would be dishonest. ${capitalise(word(CORPUS.revisions.pending))} of the ${n(CORPUS.revisions.stages)} stage patterns here are published with a review flag because the exam body's own notice could not be read directly and the secondary sources conflict with each other. IBPS Clerk Mains is one: the sources agree on ${n(CORPUS.revisions.facts('ibps-clerk', 'Mains')?.questions ?? 0)} questions, ${n(CORPUS.revisions.facts('ibps-clerk', 'Mains')?.marks ?? 0)} marks and ${n(CORPUS.revisions.facts('ibps-clerk', 'Mains')?.minutes ?? 0)} minutes, and disagree on how the questions split between the sections. When you find that kind of disagreement, the notification PDF settles it and nothing else does.` },
      { type: 'paragraph', heading: 'Why six is a floor', text: `That count comes from what the patterns here record about themselves, so it catches a revision only where the note says one happened. An exam body that changed a paper without our note saying so is not in the ${word(CORPUS.revisions.revised)}. Read it as evidence that pattern changes are real and infrequent rather than as a complete list, and check your own paper rather than trusting the number.` },
      { type: 'paragraph', text: `Every pattern page on this site carries the cycle and the source it was read from: the [NEET PG pattern](/neet-pg/exam-pattern) and the [IBPS Clerk pattern](/ibps-clerk/exam-pattern) are two of the six above, and the rest of the [exam directory](/exams) is built the same way. [How to read an exam notification](/blog/how-to-read-an-exam-notification) covers what else in that document is worth your attention.` },
    ],
    faqs: [
      { q: 'Do competitive exam patterns change every year?', a: `Most do not. Of the ${n(CORPUS.revisions.stages)} stage patterns published on this site, ${word(CORPUS.revisions.revised)} record a change from an earlier shape, so revisions are real but uncommon. That count only catches changes our own notes record, so treat it as a floor and check the current notification for your exam rather than assuming last year's pattern still holds.` },
      { q: 'How do I know if my mock test uses the current exam pattern?', a: 'Compare five things against the notification for your cycle: total questions, total marks, duration, the section list with its question counts, and the number of options per question. A mock that differs on any of them is modelling a different paper, and its pacing advice will be wrong even where its questions are good.' },
      { q: 'What happens if I prepare using an outdated exam pattern?', a: 'You practise a paper that will not appear. The LSAT is the clearest example: Analytical Reasoning stopped being scored in 2024, and preparation material that still drills logic games trains a section nobody marks. Smaller changes are worse in one way, since a shifted section mix leaves your overall pacing right and your section-by-section plan wrong.' },
      { q: 'Where can I find the official exam pattern for my exam?', a: `The exam body's own notification is the only source that settles a disagreement, and it is worth reading even when a summary is easier. Where the notification could not be read directly, this site marks the pattern for review rather than presenting it as confirmed; ${word(CORPUS.revisions.pending)} of the ${n(CORPUS.revisions.stages)} stage patterns here carry that flag today.` },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

// Rotated rather than sliced from the front. Taking the first two posts of a
// category handed every post in that category the same two, so 20 of the 65
// posts had one inbound link, the blog index, and no route in from any other
// post. See src/lib/rotate.ts.
export function getRelatedPosts(post: BlogPost, limit = 2): BlogPost[] {
  const inCategory = BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category);
  return rotateBy(inCategory, post.slug).slice(0, limit);
}

function blockText(block: BlogBlock): string {
  switch (block.type) {
    case 'paragraph':
      return `${block.heading ?? ''} ${block.text}`;
    case 'takeaways':
    case 'list':
      return `${'heading' in block ? block.heading ?? '' : ''} ${block.items.join(' ')}`;
    case 'callout':
      return block.text;
    case 'table':
      return `${block.heading ?? ''} ${block.headers.join(' ')} ${block.rows.flat().join(' ')}`;
    case 'diagram':
      return block.caption;
    case 'calculator':
      return `${block.heading ?? ''} ${block.note ?? ''}`;
  }
}

// Finds blog posts that already mention a given exam by name, so an exam
// page can link out to genuinely relevant reading without any new content
// being written — it surfaces existing coverage instead of inventing a
// "related posts" list. Ranked by mention count.
export function getPostsMentioningExam(examName: string, limit = 2): BlogPost[] {
  const escaped = examName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`\\b${escaped}\\b`, 'gi');
  const scored = BLOG_POSTS.map((post) => {
    const haystack = [post.title, post.excerpt, ...post.body.map(blockText), ...(post.faqs ?? []).map((f) => `${f.q} ${f.a}`)].join(
      ' '
    );
    const count = haystack.match(pattern)?.length ?? 0;
    return { post, count };
  }).filter((entry) => entry.count > 0);
  scored.sort((a, b) => b.count - a.count);
  return scored.slice(0, limit).map((entry) => entry.post);
}
