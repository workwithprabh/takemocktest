// Evergreen exam-prep content — original study-skills writing, not sourced
// from any outlet and not tied to specific notification dates, so it stays
// useful regardless of when a student reads it. Swap for a real CMS/content
// pipeline later (see README); the shape below (slug, body blocks) is
// deliberately simple so that's a drop-in replacement.

export interface BlogBlock {
  heading?: string;
  paragraph: string;
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
      { paragraph: 'Most students don\'t fail because they lack a timetable — they fail because they build one that\'s impossible to follow. A study plan only works if it survives contact with a normal week: college, sleep, and the occasional bad day.' },
      { heading: 'Start with your fixed hours, not your study hours', paragraph: 'Block out sleep, commute, meals, and any classes or work first. What\'s left is your real available study time — usually far less than you\'d guess. Plan around that number, not around how many hours you wish you had.' },
      { heading: 'Match subjects to your energy, not the clock', paragraph: 'Put your weakest or most calculation-heavy section (often Quantitative Aptitude or Reasoning) in your highest-energy slot, and lighter revision work — vocabulary, current affairs — in low-energy slots like right after lunch.' },
      { heading: 'Build in a weekly review, not just daily study', paragraph: 'Reserve a couple of hours each weekend purely for reviewing what you got wrong that week and retaking a mock test. This is where most of the actual score improvement happens — new content matters less than fixing repeated mistakes.' },
      { heading: 'Leave slack for the bad days', paragraph: 'A timetable with zero buffer breaks the first time you\'re sick or exhausted, and once it breaks, most people abandon it entirely. Leave one lighter day a week so missing a session doesn\'t mean starting over.' },
    ],
  },
  {
    slug: 'common-ssc-cgl-preparation-mistakes',
    title: '5 Common Mistakes to Avoid in SSC CGL Preparation',
    excerpt: 'From over-collecting study material to skipping mock tests until the last month — the same avoidable mistakes show up year after year.',
    category: 'Exam Strategy',
    readTimeMin: 6,
    publishedAt: '2026-01-17',
    authorName: 'TakeMockTest Editorial',
    body: [
      { paragraph: 'SSC CGL preparation mistakes tend to repeat across batches — not because the exam changes, but because the same habits keep tripping up new aspirants. Here are five worth checking yourself against.' },
      { heading: '1. Collecting too many books, finishing none', paragraph: 'Having five reference books for Quantitative Aptitude feels productive but usually means shallow coverage of all of them instead of mastery of one. Pick one primary source per section and use everything else only for practice questions.' },
      { heading: '2. Treating General Awareness as unlearnable', paragraph: 'It\'s tempting to write off GA as "too random to prepare for," but static portions — geography, polity, history — are entirely learnable with spaced repetition, and they\'re a much better return on time than obscure current-affairs trivia.' },
      { heading: '3. Delaying mock tests until the last month', paragraph: 'Mock tests aren\'t just a final check — they\'re how you learn to manage time under pressure and find your actual weak areas, as opposed to the ones you assume are weak. Start well before you feel "ready."' },
      { heading: '4. Ignoring the negative marking math', paragraph: 'Guessing on a question you can\'t narrow down at all is a losing bet under most SSC negative marking schemes. Know your exam\'s exact deduction (see the Exam Pattern page for each exam) and only guess once you\'ve eliminated at least one or two options.' },
      { heading: '5. Not reviewing wrong answers', paragraph: 'Attempting test after test without going back through the mistakes is close to practicing the same errors repeatedly. Every mock test result on this site includes the correct answer and a short explanation for exactly this reason.' },
    ],
  },
  {
    slug: 'understanding-negative-marking',
    title: 'Understanding Negative Marking: A Complete Guide',
    excerpt: 'Negative marking changes the optimal strategy for guessing. Here\'s the math behind when a guess is worth it — and when it isn\'t.',
    category: 'Exam Strategy',
    readTimeMin: 4,
    publishedAt: '2026-01-24',
    authorName: 'TakeMockTest Editorial',
    body: [
      { paragraph: 'Negative marking means an incorrect answer costs you marks, not just a missed opportunity — so the right strategy isn\'t "always attempt everything" or "never guess," it\'s somewhere in between, and the math is simple once you see it.' },
      { heading: 'How it works', paragraph: 'Each exam sets its own deduction — for example, 0.5 marks off for a wrong answer worth 1 mark elsewhere. Unattempted questions score zero either way, so the only real risk is answering incorrectly.' },
      { heading: 'When a guess is worth it', paragraph: 'If you can confidently eliminate even one of four options, a random guess among the rest has better expected value than leaving it blank, for most standard negative-marking ratios. A pure blind guess with all four options still open is usually close to break-even or slightly negative — better left unattempted.' },
      { heading: 'Why this matters more than most students think', paragraph: 'A handful of careless guesses can quietly erase the marks gained from your strongest section. Treat "should I guess this?" as a real decision each time, not a reflex — and review your mock test results specifically for wrong answers on questions you weren\'t sure about.' },
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
      { paragraph: 'It\'s common to know the material well and still lose marks purely to poor time allocation — spending too long on one tough question while easier ones go unanswered. A little structure fixes most of this.' },
      { heading: 'Do a fast first pass', paragraph: 'On your first pass through a section, answer only what you can solve in under 30–40 seconds. Mark anything slower for review and move on immediately — don\'t let one question eat the time budget for five others.' },
      { heading: 'Set section-level time checkpoints', paragraph: 'Divide the total time by section based on the number of questions and check your progress at each checkpoint, not just at the end. If you\'re behind by the halfway mark, that\'s your signal to speed up, not a surprise at the last five minutes.' },
      { heading: 'Save the last few minutes for unattempted, not unfinished', paragraph: 'In the final stretch, prioritize questions you haven\'t looked at yet over ones you\'ve already spent three minutes stuck on — an unattempted easy question is more recoverable than a hard one you\'ve already sunk time into.' },
      { heading: 'Practice against the clock, not just for accuracy', paragraph: 'Untimed practice builds knowledge but not exam-day pacing. Take full-length mock tests under real time limits regularly so the pacing becomes automatic rather than something you\'re calculating mid-exam.' },
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
      { paragraph: 'It\'s easy to check a mock test score, feel a brief reaction, and move on to the next one. That skips the part that actually improves your next attempt: understanding why each mark was lost.' },
      { heading: 'Separate knowledge gaps from careless errors', paragraph: 'For every wrong answer, ask whether you didn\'t know the concept, or knew it but made a silly mistake under time pressure. These need completely different fixes — one needs more study, the other needs slower, more careful reading.' },
      { heading: 'Look at section-wise accuracy, not just total score', paragraph: 'Two students can score the same overall total with very different section breakdowns. The results page on this site breaks every attempt down by section specifically so you can see which one is actually dragging your score down.' },
      { heading: 'Track your unattempted count over time', paragraph: 'A high unattempted count usually means a pacing problem, not a knowledge problem — you\'re running out of time, not out of answers. If that number isn\'t shrinking test over test, revisit your time management approach before adding more study material.' },
      { heading: 'Revisit the same weak section in your next test', paragraph: 'Improvement shows up as a trend across several mock tests, not a single lucky attempt. Retake tests in a section you scored poorly on and confirm the accuracy is actually moving before assuming you\'ve fixed the gap.' },
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
      { paragraph: 'Many aspirants prepare for both IBPS PO and SSC CGL at once, and the overlap in subjects (Quantitative Aptitude, Reasoning, English) makes that reasonable — but if you have to prioritize one, it helps to know how they actually differ.' },
      { heading: 'Exam structure', paragraph: 'SSC CGL tests General Awareness alongside Quant, English, and Reasoning, rewarding broad static and current-affairs knowledge. IBPS PO drops General Awareness from its core sections in favor of deeper Quant and Reasoning, and adds an interview stage after the written exams.' },
      { heading: 'Pace and pressure', paragraph: 'Banking exams like IBPS PO are generally known for tighter per-question time limits and sectional timing, which rewards speed and accuracy under pressure. SSC CGL\'s pacing is comparatively more forgiving, though still competitive.' },
      { heading: 'What the role looks like afterward', paragraph: 'SSC CGL opens roles across various central government departments with a wide range of job profiles. IBPS PO leads specifically into a banking officer role, with more customer-facing and target-driven day-to-day work.' },
      { heading: 'A practical way to decide', paragraph: 'If General Awareness is a genuine strength for you, that tilts toward SSC CGL. If you\'re faster and more consistent under strict timing in Quant and Reasoning, IBPS PO plays to that. Either way, the overlapping sections mean focused practice for one exam can still build skills used in the other. Always confirm the current official pattern before comparing complete papers.' },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 2): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, limit);
}
