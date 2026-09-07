// Practice Topics — a topic-first cut of the same question corpus the exam
// mocks use.
//
// The Logical Reasoning hub proved the pattern: our questions are worth more
// than the tests that own them, and re-cutting the corpus along a new axis
// creates real products without authoring a single new question. This is the
// second cut, along `topic` rather than `section`.
//
// ONE IMPORTANT DIFFERENCE FROM THE LR HUB. The hub freezes its question
// lists: its sets are numbered products with indexed URLs and saved attempts,
// so a published set never changes. A topic page is not a numbered product —
// it is a *view of a pool* ("every Profit and Loss question on the site"), and
// it is supposed to grow. So nothing here is frozen: the index is rebuilt from
// the live banks at build time, and a topic page picks up new questions
// automatically the next time the site is built. Adding exam content and
// growing these pages is therefore the same job, not two jobs.
//
// Consequences of that, stated plainly because they are easy to get wrong:
//   * Practice sets are drawn deterministically (seeded by the topic slug) so
//     one build is internally consistent — the page describes the set you get.
//   * Across builds the draw can change as the pool grows. That is intended,
//     and the pages say so rather than implying a fixed paper.
//   * Never point a numbered, frozen product at this index.

import { getExam } from './exams';
import { getCheckedQuestionEntries, type Question } from './questions';

export type PracticeFamily = 'Quantitative' | 'Reasoning' | 'English';

export interface PracticeTopic {
  slug: string;
  name: string;
  family: PracticeFamily;
  /**
   * Canonical topic keys this page collects. Several keys per topic is the
   * norm, not the exception: the corpus spells the same topic more than one
   * way ("Number series" / "Number Series"), and some genuinely distinct
   * labels describe one thing a candidate would search for once ("Error
   * Spotting" and "Spot the Error"). Merging them here is what turns two thin
   * pools into one page worth publishing.
   */
  matches: string[];
  /** One sentence on what the topic actually asks of you. */
  blurb: string;
}

/**
 * Reduce a raw `topic` string to a comparison key: lower case, ampersands
 * spelled out, every run of punctuation or space collapsed to one space.
 * Deliberately conservative — it merges spelling and spacing variants of the
 * same words, and nothing else. Anything beyond that (singular versus plural,
 * two labels for one idea) is an editorial judgement and belongs in `matches`,
 * where it can be read and argued with.
 */
export function canonicalTopicKey(topic: string): string {
  return topic
    .toLowerCase()
    .replace(/[‐-―]/g, '-')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

// Curated by hand from the 127 canonical topics that have 50+ questions.
// Excluded deliberately: section names used as topics ("Physics", "Grammar",
// "Logical Reasoning"), question-type labels that mean nothing on their own
// ("Detail"), single-exam specialisms, and General Awareness topics whose
// answers depend on facts that date ("Banking Awareness", "Sports"). Subject
// topics for the engineering and medical entrances — Thermodynamics,
// Electrochemistry, Differential Equations and the rest — are a coherent
// second batch for a different audience, not an afterthought to this one.
export const PRACTICE_TOPICS: PracticeTopic[] = [
  { slug: 'percentage', name: 'Percentage', family: 'Quantitative', matches: ['percentage'],
    blurb: 'Converting between fractions, decimals and percentages, and the successive-change traps built on them.' },
  { slug: 'profit-and-loss', name: 'Profit and Loss', family: 'Quantitative', matches: ['profit and loss'],
    blurb: 'Cost price, selling price, marked price and discount, including successive discounts and false weights.' },
  { slug: 'ratio-and-proportion', name: 'Ratio and Proportion', family: 'Quantitative', matches: ['ratio and proportion'],
    blurb: 'Dividing quantities in a ratio, compound ratios, and proportion problems that hide a shared multiplier.' },
  { slug: 'time-and-work', name: 'Time and Work', family: 'Quantitative', matches: ['time and work'],
    blurb: 'Rates of work, combined effort, alternate-day working, and pipes filling against a leak.' },
  { slug: 'time-speed-and-distance', name: 'Time, Speed and Distance', family: 'Quantitative',
    matches: ['time speed and distance', 'time and distance'],
    blurb: 'Relative speed, trains crossing, boats against a stream, and average speed over unequal legs.' },
  { slug: 'averages', name: 'Averages', family: 'Quantitative', matches: ['average', 'averages'],
    blurb: 'Mean of a set, weighted averages, and what happens to an average when one member enters or leaves.' },
  { slug: 'simple-interest', name: 'Simple Interest', family: 'Quantitative', matches: ['simple interest'],
    blurb: 'Interest that accrues only on the principal, and the rate, time and principal problems built from it.' },
  { slug: 'compound-interest', name: 'Compound Interest', family: 'Quantitative', matches: ['compound interest'],
    blurb: 'Interest on interest, varying compounding periods, and the gap between simple and compound returns.' },
  { slug: 'number-system', name: 'Number System', family: 'Quantitative', matches: ['number system'],
    blurb: 'Divisibility, factors, remainders, HCF and LCM, and the unit-digit and last-two-digit shortcuts.' },
  { slug: 'simplification', name: 'Simplification', family: 'Quantitative', matches: ['simplification'],
    blurb: 'BODMAS, surds, fractions and approximation — the speed section of most banking papers.' },
  { slug: 'mensuration', name: 'Mensuration', family: 'Quantitative', matches: ['mensuration'],
    blurb: 'Area, perimeter, surface area and volume for plane figures and solids.' },
  { slug: 'data-interpretation', name: 'Data Interpretation', family: 'Quantitative', matches: ['data interpretation'],
    blurb: 'Reading tables, bar charts, pie charts and line graphs, then doing the arithmetic they set up.' },
  { slug: 'probability', name: 'Probability', family: 'Quantitative', matches: ['probability'],
    blurb: 'Favourable over total outcomes, dependent and independent events, and conditional probability.' },
  { slug: 'permutations-and-combinations', name: 'Permutations and Combinations', family: 'Quantitative',
    matches: ['permutations and combinations'],
    blurb: 'Counting arrangements where order matters and selections where it does not.' },

  { slug: 'number-series', name: 'Number Series', family: 'Reasoning', matches: ['number series'],
    blurb: 'Finding the rule behind a sequence, then the missing or wrong term it implies.' },
  { slug: 'coding-and-decoding', name: 'Coding and Decoding', family: 'Reasoning', matches: ['coding decoding'],
    blurb: 'Letter, number and symbol codes, including the layered codes that need two rules applied in order.' },
  { slug: 'syllogism', name: 'Syllogism', family: 'Reasoning', matches: ['syllogism'],
    blurb: 'Deciding which conclusions genuinely follow from given statements, and which only look like they do.' },
  { slug: 'blood-relations', name: 'Blood Relations', family: 'Reasoning', matches: ['blood relations'],
    blurb: 'Family trees built from clues, including coded relations and generation-spanning chains.' },
  { slug: 'direction-sense', name: 'Direction Sense', family: 'Reasoning', matches: ['direction sense'],
    blurb: 'Tracking position and facing through a sequence of turns, then the shortest distance back.' },
  { slug: 'classification', name: 'Classification', family: 'Reasoning', matches: ['classification'],
    blurb: 'Odd-one-out across words, numbers and letter pairs, where the rule is never the obvious one.' },
  { slug: 'analogy', name: 'Analogy', family: 'Reasoning', matches: ['analogy'],
    blurb: 'Identifying the exact relationship in one pair and applying it to another.' },
  { slug: 'data-sufficiency', name: 'Data Sufficiency', family: 'Reasoning', matches: ['data sufficiency'],
    blurb: 'Judging whether the statements are enough to answer — without wasting time actually answering.' },
  { slug: 'ranking-and-order', name: 'Ranking and Order', family: 'Reasoning', matches: ['ranking', 'ranking and order'],
    blurb: 'Positions from either end, overlapping ranks, and orderings built from comparisons.' },
  { slug: 'alphanumeric-series', name: 'Alphanumeric Series', family: 'Reasoning',
    matches: ['alphanumeric series', 'alphabet series'],
    blurb: 'Mixed strings of letters, digits and symbols, counted and scanned against a condition.' },
  { slug: 'puzzles', name: 'Puzzles', family: 'Reasoning', matches: ['puzzle'],
    blurb: 'Multi-constraint grids — floors, boxes, days, categories — solved by elimination.' },
  { slug: 'coded-inequality', name: 'Coded Inequality', family: 'Reasoning', matches: ['inequality'],
    blurb: 'Chains of greater-than and equal-to, often behind symbols, and the reversals where nothing follows.' },
  { slug: 'seating-arrangement', name: 'Seating Arrangement', family: 'Reasoning', matches: ['seating arrangement'],
    blurb: 'Linear and circular seating, including tables where some people face outward.' },

  { slug: 'reading-comprehension', name: 'Reading Comprehension', family: 'English', matches: ['reading comprehension'],
    blurb: 'Passage-based inference, tone and detail questions answerable from the text alone.' },
  { slug: 'one-word-substitution', name: 'One-Word Substitution', family: 'English', matches: ['one word substitution'],
    blurb: 'The single word that replaces a whole descriptive phrase.' },
  { slug: 'fill-in-the-blanks', name: 'Fill in the Blanks', family: 'English', matches: ['fill in the blanks'],
    blurb: 'Single and double blanks decided by grammar, collocation or sense.' },
  { slug: 'sentence-improvement', name: 'Sentence Improvement', family: 'English', matches: ['sentence improvement'],
    blurb: 'Replacing an underlined part with the version that is actually correct.' },
  { slug: 'error-spotting', name: 'Error Spotting', family: 'English', matches: ['error spotting', 'spot the error'],
    blurb: 'Finding the one part of a sentence carrying a grammatical error — or deciding there is none.' },
  { slug: 'synonyms', name: 'Synonyms', family: 'English', matches: ['synonym', 'synonyms'],
    blurb: 'Words closest in meaning, where two options are usually close and one is exact.' },
  { slug: 'antonyms', name: 'Antonyms', family: 'English', matches: ['antonym', 'antonyms'],
    blurb: 'Words opposite in meaning, including near-opposites set as distractors.' },
  { slug: 'idioms-and-phrases', name: 'Idioms and Phrases', family: 'English', matches: ['idioms and phrases', 'idioms'],
    blurb: 'What a fixed expression means in use, rather than what its words separately say.' },
  { slug: 'cloze-test', name: 'Cloze Test', family: 'English', matches: ['cloze test'],
    blurb: 'A passage with several blanks, where each choice has to fit both grammar and argument.' },
  { slug: 'active-and-passive-voice', name: 'Active and Passive Voice', family: 'English',
    matches: ['active and passive voice'],
    blurb: 'Converting between voices across tenses, questions and imperatives.' },
  { slug: 'direct-and-indirect-speech', name: 'Direct and Indirect Speech', family: 'English',
    matches: ['direct and indirect speech'],
    blurb: 'Reporting what was said, with the tense, pronoun and time-word shifts that follow.' },
  { slug: 'para-jumbles', name: 'Para Jumbles', family: 'English', matches: ['para jumbles'],
    blurb: 'Reordering shuffled sentences into the paragraph they came from.' },
  { slug: 'spelling', name: 'Spelling', family: 'English', matches: ['spelling', 'spelling correction'],
    blurb: 'Picking the correctly spelled word, or the misspelled one, from near-identical options.' },
];

/** Below this, a topic page is too thin to publish or to index. */
export const MIN_TOPIC_QUESTIONS = 50;
/** Questions served in one practice run. */
export const PRACTICE_SET_SIZE = 25;
export const PRACTICE_MARKS_PER_CORRECT = 1;
export const PRACTICE_NEGATIVE_MARKING = 0;
export const PRACTICE_SLUG = 'practice';
export const PRACTICE_SECTION = 'Topic Practice';

export interface TopicPool {
  topic: PracticeTopic;
  questions: Question[];
  examSlugs: string[];
  difficulty: { easy: number; medium: number; hard: number };
}

let pools: Map<string, TopicPool> | null = null;

function buildPools(): Map<string, TopicPool> {
  const byKey = new Map<string, { question: Question; examSlug: string }[]>();
  for (const entry of getCheckedQuestionEntries()) {
    if (!entry.question.topic) continue;
    const key = canonicalTopicKey(entry.question.topic);
    if (!key) continue;
    const bucket = byKey.get(key);
    if (bucket) bucket.push(entry);
    else byKey.set(key, [entry]);
  }

  const built = new Map<string, TopicPool>();
  for (const topic of PRACTICE_TOPICS) {
    const entries = topic.matches.flatMap((key) => byKey.get(key) ?? []);
    if (entries.length < MIN_TOPIC_QUESTIONS) continue;
    // Sort by ID so the pool order is stable across builds regardless of the
    // order the banks happened to be walked in.
    entries.sort((a, b) => (a.question.id ?? '').localeCompare(b.question.id ?? ''));
    const difficulty = { easy: 0, medium: 0, hard: 0 };
    for (const entry of entries) {
      if (entry.question.difficulty) difficulty[entry.question.difficulty] += 1;
    }
    built.set(topic.slug, {
      topic,
      questions: entries.map((entry) => entry.question),
      examSlugs: [...new Set(entries.map((entry) => entry.examSlug))].sort(),
      difficulty,
    });
  }
  pools = built;
  return built;
}

export function getTopicPools(): Map<string, TopicPool> {
  return pools ?? buildPools();
}

export function getTopicPool(slug: string): TopicPool | undefined {
  return getTopicPools().get(slug);
}

/** Slugs that currently clear the question floor, in curated order. */
export function getPublishedTopicSlugs(): string[] {
  const built = getTopicPools();
  return PRACTICE_TOPICS.filter((topic) => built.has(topic.slug)).map((topic) => topic.slug);
}

// Mulberry32 — a small deterministic PRNG. Seeding from the topic slug means
// the same build always draws the same practice set for a topic, so the page's
// description of the set matches the set the visitor actually gets.
function seededRandom(seed: string): () => number {
  let h = 1779033703 ^ seed.length;
  for (let i = 0; i < seed.length; i += 1) {
    h = Math.imul(h ^ seed.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  let a = h >>> 0;
  return () => {
    a += 0x6d2b79f5;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * The questions served for one practice run: a seeded sample of the pool,
 * re-labelled into the section this page presents and scored without negative
 * marking. Marks are overridden because a pool spans exams whose own papers
 * score the same topic differently — 1 mark flat is the only figure that means
 * the same thing for every question here.
 */
export function getTopicPracticeQuestions(pool: TopicPool): Question[] {
  const shuffled = [...pool.questions];
  const random = seededRandom(pool.topic.slug);
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, Math.min(PRACTICE_SET_SIZE, shuffled.length)).map((question) => ({
    ...question,
    section: PRACTICE_SECTION,
    marks: PRACTICE_MARKS_PER_CORRECT,
    negativeMarking: PRACTICE_NEGATIVE_MARKING,
  }));
}

/** Minutes allowed for a practice run, at a steady one minute per question. */
export function getTopicPracticeDuration(pool: TopicPool): number {
  return Math.min(PRACTICE_SET_SIZE, pool.questions.length);
}

export const PRACTICE_FAMILIES: PracticeFamily[] = ['Quantitative', 'Reasoning', 'English'];

export const PRACTICE_FAMILY_BLURBS: Record<PracticeFamily, string> = {
  Quantitative: 'Arithmetic and data topics that carry a section in almost every government, banking and management paper.',
  Reasoning: 'Pure reasoning families — no subject knowledge, only the rules in front of you.',
  English: 'Grammar, vocabulary and comprehension topics set the same way across most English sections.',
};

// ---------------------------------------------------------------------------
// Derived per-topic facts.
//
// These exist to solve a measured problem, not a theoretical one. When the
// section first shipped, 48% of each topic page's main content was text that
// also appeared on another topic page: the FAQ answers were one template with
// the topic name substituted in, so forty pages said the same thing forty
// times. That is exactly the shape of thin, templated content that search
// engines discount, and it wastes the one advantage this section has — the
// pools genuinely differ from each other.
//
// Everything below returns something that is actually different per topic, so
// the prose built on it is different too.
// ---------------------------------------------------------------------------

/** Share of a pool graded hard, as a percentage of the graded questions. */
export function getHardShare(pool: TopicPool): number {
  const graded = pool.difficulty.easy + pool.difficulty.medium + pool.difficulty.hard;
  return graded === 0 ? 0 : Math.round((pool.difficulty.hard / graded) * 100);
}

/** Share of a pool graded easy, as a percentage of the graded questions. */
export function getEasyShare(pool: TopicPool): number {
  const graded = pool.difficulty.easy + pool.difficulty.medium + pool.difficulty.hard;
  return graded === 0 ? 0 : Math.round((pool.difficulty.easy / graded) * 100);
}

let averageHardShare: number | null = null;

/**
 * The hard share across every published topic, so a page can say whether its
 * own topic runs harder or easier than the section as a whole. A comparison is
 * worth more than a raw percentage: it is the difference between "12% hard"
 * and "harder than most topics on this site".
 */
export function getAverageHardShare(): number {
  if (averageHardShare !== null) return averageHardShare;
  const pools = [...getTopicPools().values()];
  const shares = pools.map(getHardShare);
  averageHardShare = shares.length === 0 ? 0 : Math.round(shares.reduce((a, b) => a + b, 0) / shares.length);
  return averageHardShare;
}

/** Exam categories that set this topic, commonest first. */
export function getTopicCategories(pool: TopicPool): { category: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const slug of pool.examSlugs) {
    const exam = getExam(slug);
    if (!exam) continue;
    counts.set(exam.category, (counts.get(exam.category) ?? 0) + 1);
  }
  return [...counts]
    .map(([category, count]) => ({ category, count }))
    .sort((a, b) => b.count - a.count || a.category.localeCompare(b.category));
}

