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
  {
    slug: 'sectional-lock-vs-composite-timer',
    title: 'Sectional Lock vs Composite Timer, Explained',
    excerpt: 'Some exams lock you into each section with its own clock. Others give one combined timer for the whole paper — and that changes how you should practice.',
    category: 'Exam Strategy',
    readTimeMin: 6,
    publishedAt: '2026-08-06',
    authorName: 'TakeMockTest Editorial',
    body: [
      { paragraph: 'Roughly nine of the exams on this site lock you into each section with its own individual clock, while about twelve hand you one combined timer for the entire paper and let you move between sections however you like. Mixing up which one your exam uses — and practicing for the wrong one — is a common, avoidable mistake.' },
      { heading: 'What sectional lock actually means', paragraph: 'Under sectional lock, each section gets a fixed window and once it expires you\'re moved on automatically, whether you\'ve finished or not — unused time in one section never carries over to the next. [SBI Clerk Prelims](/sbi-clerk/exam-pattern) gives you exactly 20 minutes per section this way, and [RBI Grade B Phase I](/rbi-grade-b/exam-pattern) splits its four sections into separately timed 25/25/25/45-minute windows. If you\'re strong in one section and weak in another, sectional lock means you can\'t borrow time to compensate.' },
      { heading: 'What a composite timer means', paragraph: 'A composite timer gives you one clock for every section combined, and you decide how to split it. [NABARD Grade A Phase I](/nabard-grade-a/exam-pattern) runs a single 120-minute timer across all eight of its sections, and [SIDBI Grade A & B Phase I](/sidbi-grade-a-b/exam-pattern) does the same across seven — you can answer every question in your strongest section first, then spend whatever\'s left on the rest.' },
      { heading: 'Why this changes how you should practice', paragraph: 'Practicing sectional-lock exams under an untimed or freely-navigable mock teaches you the wrong instinct — you need to feel the sudden cutoff, not just the total time pressure. Composite-timer exams reward the opposite skill: deciding, in real time, how many minutes a section is actually worth to you. Take sectional tests for the first kind and full mocks for the second — both are available on every exam\'s mock-test page on this site.' },
      { heading: 'A third pattern worth knowing', paragraph: '[SSC MTS & Havaldar](/ssc-mts/exam-pattern) does neither — it splits its CBT into two mandatory 45-minute sessions on the same day, with different negative-marking rules in each session. Always check the specific exam\'s pattern page rather than assuming; even within one recruiting body, the rules can change from one exam to the next (SSC CGL Tier 1 itself uses 15-minute-per-subject sectional locking, unlike SSC CHSL\'s single 60-minute composite timer).' },
      { heading: 'One habit that works for both', paragraph: 'Whichever pattern your exam uses, reviewing where your time actually went afterward matters more than guessing beforehand. See [how to analyze your mock test performance](/blog/how-to-analyze-your-mock-test-performance) for what to look at once you\'ve got a result to study, and keep [negative marking](/blog/understanding-negative-marking) in mind — it changes the guessing math slightly differently under a hard section cutoff than under a flexible composite clock.' },
    ],
  },
  {
    slug: 'qualifying-vs-merit-sections-banking-exams',
    title: 'Qualifying vs Merit Sections in Bank Exams',
    excerpt: 'Some banking exams score every section toward your rank. A few wall off certain sections so only some marks actually count — here\'s how to tell which is which.',
    category: 'Exam Strategy',
    readTimeMin: 5,
    publishedAt: '2026-08-06',
    authorName: 'TakeMockTest Editorial',
    body: [
      { paragraph: 'It\'s common knowledge that Prelims is usually "qualifying" and Mains decides the real merit list — [SBI PO Prelims](/sbi-po/exam-pattern), for instance, works exactly this way. Less well known is that a few exams split qualifying and merit *within a single paper*, and getting this wrong wastes hours of preparation on sections that were never going to move your rank.' },
      { heading: 'What "qualifying" means at the stage level', paragraph: 'A qualifying stage has its own cutoff you must clear to advance, but the marks themselves don\'t carry forward into your final ranking — only the next stage\'s marks do. This is the pattern most banking Prelims exams follow, and it\'s the one most students already understand.' },
      { heading: 'The less common pattern: qualifying sections inside one paper', paragraph: '[NABARD Grade A Phase I](/nabard-grade-a/exam-pattern) has eight sections, but only three of them — General Awareness, Economic and Social Issues, and Agriculture and Rural Development — form the merit section that decides Mains shortlisting; the other five are qualifying-only. [SIDBI Grade A & B Phase I](/sidbi-grade-a-b/exam-pattern) does something similar: four of its seven sections are qualifying-only, while General Awareness, MSMEs Policy/Finance/Management, and the Stream Specific Test form a 100-of-200-mark merit section. In both cases this happens inside one single-timer paper, not across separate stages.' },
      { heading: 'Why this should change your study split', paragraph: 'Once you\'re comfortably clearing the qualifying cutoff in a qualifying-only section, additional hours there have a shrinking return — those marks stop mattering the moment the cutoff is met. Extra study time is worth more in the merit section, since every additional mark there moves your actual rank. This is the single most actionable thing this article can tell you if your exam uses this pattern.' },
      { heading: 'How to check which pattern your exam uses', paragraph: 'Every exam\'s pattern page on this site states plainly whether a section is qualifying-only or counts toward merit, sourced from the official notification. Don\'t assume from a similar exam\'s structure — RBI Grade B and SEBI Grade A, for example, don\'t split their Phase I this way at all, even though they\'re in the same broad banking-regulator family as NABARD and SIDBI.' },
      { paragraph: 'Once you\'ve taken a full mock under the real pattern, [review it section by section](/blog/how-to-analyze-your-mock-test-performance) rather than just checking the total score — that\'s the only way to know whether your qualifying-section time investment has already paid off.' },
    ],
  },
  {
    slug: 'beginners-guide-to-banking-exams-in-india',
    title: 'A Beginner\'s Guide to Banking Exams in India',
    excerpt: 'IBPS, SBI, and RBI get thrown around like they\'re interchangeable. They recruit differently, for different roles — here\'s an actual map of how they fit together.',
    category: 'Exam Guides',
    readTimeMin: 8,
    publishedAt: '2026-08-06',
    authorName: 'TakeMockTest Editorial',
    body: [
      { paragraph: 'If you\'ve searched "best bank exam for beginners," you\'ve probably seen IBPS, SBI, and RBI mentioned as if picking between them is a single decision. It isn\'t — they sit at different levels, recruit differently, and (once you go past the clerk/PO tier) test genuinely different subject knowledge. This site currently hosts mock tests for twelve banking-family exams; here\'s how they actually fit together.' },
      { heading: 'The clerk and PO tier — where most beginners start', paragraph: 'IBPS doesn\'t recruit for one bank — it runs a common exam and allots selected candidates across multiple public sector banks based on merit and preference. [IBPS PO](/ibps-po/mock-test) targets the officer track, [IBPS Clerk](/ibps-clerk/mock-test) the clerical track. SBI runs its own separate recruitment instead of going through IBPS: [SBI PO](/sbi-po/mock-test) and [SBI Clerk](/sbi-clerk/mock-test) are SBI-specific, generally with a heavier workload and faster growth than the IBPS-allotted equivalent.' },
      { heading: 'The regional rural bank tier', paragraph: 'IBPS also runs a separate common exam for Regional Rural Banks — [IBPS RRB Officer Scale I](/ibps-rrb-officer-scale-1/mock-test) and [IBPS RRB Office Assistant](/ibps-rrb-office-assistant/mock-test) — with a composite, no-sectional-lock timer that differs from the standard IBPS PO/Clerk Prelims pattern.' },
      { heading: 'The specialist tier', paragraph: '[IBPS SO](/ibps-so/mock-test) recruits directly into specialist officer roles — IT, Agriculture, HR, Marketing — rather than general banking. It\'s a narrower path, worth knowing about specifically if your background is already in one of those fields rather than commerce.' },
      { heading: 'The central bank and regulator tier — the next level up', paragraph: 'This is where "IBPS vs SBI vs RBI" oversimplifies things. [RBI Assistant](/rbi-assistant/mock-test) is RBI\'s clerical-level exam, while [RBI Grade B](/rbi-grade-b/mock-test) is a direct-recruit officer role focused on monetary policy and banking regulation. Sitting alongside RBI Grade B are three more Grade-A officer exams most beginners don\'t hear about until later: [NABARD Grade A](/nabard-grade-a/mock-test) (rural development and agriculture finance), [SEBI Grade A](/sebi-grade-a/mock-test) (securities market regulation), and [SIDBI Grade A & B](/sidbi-grade-a-b/mock-test) (MSME and small-industry finance). See our [full comparison of these four](/blog/rbi-grade-b-vs-nabard-vs-sebi-vs-sidbi) if that tier interests you.' },
      { heading: 'A practical way to start', paragraph: 'The overlapping subjects — Reasoning, Quantitative Aptitude, English — mean focused practice for any one of these exams builds skills that carry over to the others, so picking "the wrong one" first rarely wastes your effort. What\'s worth getting right early is understanding [how qualifying and merit sections work](/blog/qualifying-vs-merit-sections-banking-exams) for whichever exam you land on, since a few of these have a genuinely different scoring structure than the standard Prelims-then-Mains pattern.' },
    ],
  },
  {
    slug: 'ssc-vs-banking-vs-railways-choosing-your-path',
    title: 'SSC vs Banking vs Railways: Which to Choose?',
    excerpt: 'These three don\'t just lead to different jobs — they test you differently, too. Exam mechanics matter as much as the career outcome when you\'re choosing.',
    category: 'Exam Guides',
    readTimeMin: 7,
    publishedAt: '2026-08-06',
    authorName: 'TakeMockTest Editorial',
    body: [
      { paragraph: 'SSC, Banking, and Railways are the three most common entry points into a government career in India, and most comparisons stop at job perks — pay, postings, travel benefits. Less discussed is that the exams themselves test you in genuinely different ways, and that difference is worth weighing before you commit months of preparation to one.' },
      { heading: 'SSC: broad postings, tight sectional timing', paragraph: '[SSC CGL Tier 1](/ssc-cgl/exam-pattern) locks you into 15 minutes per subject across four sections — General Intelligence and Reasoning, General Awareness, Quantitative Aptitude, and English Comprehension — and opens roles across central government departments from Income Tax to Customs to CBI. [SSC CHSL](/ssc-chsl/mock-test), by contrast, uses a single 60-minute composite timer for the same kind of subject spread, so even within SSC the pattern isn\'t consistent across exams.' },
      { heading: 'Banking: numbers, speed, and sectional lock', paragraph: 'Most public-sector bank Prelims papers use a hard sectional lock — [IBPS PO](/ibps-po/mock-test), [SBI PO](/sbi-po/mock-test), and [RBI Assistant](/rbi-assistant/mock-test) all give you roughly 20 minutes per section with no borrowing between them. Banking exams generally reward speed and accuracy under pressure more than broad general knowledge — SSC CGL tests General Awareness alongside its other sections, while most Banking Prelims papers drop it entirely in favor of deeper Quant and Reasoning.' },
      { heading: 'Railways: composite timers, the highest applicant volume', paragraph: 'RRB exams tend to use a single combined timer instead of sectional lock — [RRB NTPC](/rrb-ntpc/mock-test) gives 90 minutes across three sections, [RRB Group D](/rrb-group-d/mock-test) gives 90 minutes across four, and [RRB Junior Engineer](/rrb-je/mock-test) does the same. Railway recruitment also draws some of the largest applicant numbers of any government exam family in India, which affects how competitive a given cutoff turns out to be.' },
      { heading: 'A practical way to decide', paragraph: 'If tight per-section deadlines suit how you work, Banking\'s sectional-lock pattern plays to that; if you\'d rather manage one combined clock across a whole paper, Railways\' composite-timer exams and SSC CHSL are a better match for that instinct than SSC CGL is. See [sectional lock vs composite timer](/blog/sectional-lock-vs-composite-timer) for the full mechanics either way. You can also [browse the full government exam catalog](/exams/government-jobs) to see every exam in each family side by side before deciding.' },
    ],
  },
  {
    slug: 'rbi-grade-b-vs-nabard-vs-sebi-vs-sidbi',
    title: 'RBI Grade B vs NABARD vs SEBI vs SIDBI',
    excerpt: 'Four officer-level exams, four regulators, one overlapping Phase I syllabus — here\'s how RBI Grade B, NABARD, SEBI, and SIDBI actually differ.',
    category: 'Exam Guides',
    readTimeMin: 8,
    publishedAt: '2026-08-06',
    authorName: 'TakeMockTest Editorial',
    body: [
      { paragraph: 'RBI Grade B, NABARD Grade A, SEBI Grade A, and SIDBI Grade A & B sit a level above the clerk/PO banking tier — all four are direct-recruit officer roles at a financial regulator or development bank, and their Phase I syllabi overlap enough that many aspirants prepare for more than one at once.' },
      { heading: 'What each one actually does', paragraph: '[RBI Grade B](/rbi-grade-b/mock-test) is India\'s central bank, and its officers work on monetary policy and banking regulation. [NABARD Grade A](/nabard-grade-a/mock-test) focuses on rural development and agriculture finance. [SEBI Grade A](/sebi-grade-a/mock-test) regulates securities markets. [SIDBI Grade A & B](/sidbi-grade-a-b/mock-test) finances MSMEs and small industry. The mandate differs sharply even though the entry-level exam structure looks similar on paper.' },
      { heading: 'How the Phase I exam structures differ', paragraph: 'This is where the four genuinely split into two groups. [RBI Grade B Phase I](/rbi-grade-b/exam-pattern) uses a hard sectional lock — four separately timed windows of 25/25/25/45 minutes. [NABARD Grade A](/nabard-grade-a/exam-pattern) and [SIDBI Grade A & B](/sidbi-grade-a-b/exam-pattern), on the other hand, both run a single composite 120-minute timer with no sectional lock at all, across eight and seven sections respectively. [SEBI Grade A](/sebi-grade-a/exam-pattern)\'s Phase I is split into two separately timed papers, but each paper individually is also composite with no lock inside it.' },
      { heading: 'The qualifying/merit split two of them share', paragraph: 'NABARD and SIDBI both wall off several sections as qualifying-only, with a separate merit section deciding who advances to Phase II — see [how qualifying and merit sections work](/blog/qualifying-vs-merit-sections-banking-exams) for the specifics. RBI Grade B and SEBI Grade A don\'t split their Phase I this way, which is a real structural difference between what look like four similar "Grade A officer exam" postings at first glance.' },
      { heading: 'Picking based on interest, not just difficulty', paragraph: 'The syllabus overlap — English Language, Reasoning, Quantitative Aptitude, and Computer Knowledge repeat across all four — means the pattern differences above matter less than which subject-matter domain actually interests you. Monetary policy, rural finance, securities regulation, and MSME lending are genuinely different fields once you\'re past Phase I; picking based on which one you\'d rather spend a career in beats picking based on which pattern looks marginally easier.' },
      { paragraph: 'For the wider banking-exam landscape these four sit inside, see the [beginner\'s guide to banking exams in India](/blog/beginners-guide-to-banking-exams-in-india).' },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 2): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, limit);
}
