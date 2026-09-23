// Generated prose and FAQs for the exam-pattern pages.
//
// Why this exists: those pages were a bare data table — roughly 350 words,
// almost all of it numbers in cells. They target the highest-volume
// informational queries an aspirant types ("<exam> exam pattern", "is there
// negative marking in <exam>", "how many questions in <exam>", "<exam> total
// marks"), and a table alone gives a search engine almost no text to match,
// nor a reader anything a spreadsheet would not have told them.
//
// The rule this file follows: EVERY sentence is derived arithmetically from
// the stage's own already-verified StagePattern (question count, marks,
// duration, negative marking, section breakdown) or from the pattern's own
// note. Nothing is asserted that is not already checked against the exam
// body's notification, so this adds reach without adding a single new claim
// that could be wrong. No cut-offs, vacancies, salaries or dates are invented
// here — those are the fields we cannot derive and therefore do not write.

import type { ExamConfig, StagePattern, TestStage } from './exams';
import { formatMarks } from './exams';
import { getQuestionsForTest } from './questions';

/**
 * Negative marking is typed `number | string` because some exams express it
 * as a fraction ("1/3") or with a qualifier. Only a value we can turn into a
 * number is used for arithmetic; anything else still renders as prose but is
 * left out of the computed lines rather than guessed at.
 */
export function parseNegativeMarking(value: StagePattern['negativeMarking']): number | undefined {
  if (typeof value === 'number') return value;
  if (typeof value !== 'string') return undefined;
  const fraction = value.match(/^\s*(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/);
  if (fraction) {
    const denominator = Number(fraction[2]);
    return denominator === 0 ? undefined : Number(fraction[1]) / denominator;
  }
  const plain = value.match(/^\s*(\d+(?:\.\d+)?)/);
  return plain ? Number(plain[1]) : undefined;
}

function round(value: number, places = 2): number {
  return Number(value.toFixed(places));
}

export interface PatternInsights {
  questions?: number;
  marks?: number;
  duration?: number;
  /** Average seconds available per question across the whole stage. */
  secondsPerQuestion?: number;
  /** Marks a single correct answer is worth, where it divides evenly. */
  marksPerQuestion?: number;
  negative?: number;
  negativeLabel?: string;
  /**
   * The accuracy at which a guess stops costing you marks. With +m for a
   * correct answer and -n for a wrong one, a guess breaks even at n / (m + n).
   */
  breakEvenAccuracy?: number;
  /** True when at least one section carries its own separate time limit. */
  hasSectionalLock: boolean;
  lockedSections: number;
}

/**
 * Names a stage without saying the exam twice. `${exam.name} ${stage.name}`
 * read as "the NVS TGT Mathematics TGT Mathematics Tier 1 exam pattern" on 19
 * pages, because a stage is often named with the exam's own abbreviation in
 * front of it. This splices on the overlap instead: where the tail of the exam
 * name is the head of the stage name, the shared words are said once.
 */
export function stageLabel(exam: ExamConfig, stage: TestStage): string {
  const examWords = exam.name.split(' ');
  const stageWords = stage.name.split(' ');
  for (let n = Math.min(examWords.length, stageWords.length); n > 0; n -= 1) {
    const tail = examWords.slice(-n).join(' ').toLowerCase();
    const head = stageWords.slice(0, n).join(' ').toLowerCase();
    if (tail === head) return [...examWords, ...stageWords.slice(n)].join(' ');
  }
  // Where the overlap is not a clean prefix the splice cannot help, but a
  // stage naming most of the exam already identifies the paper on its own:
  // "MAH MBA CET MAH MBA/MMS CET 2026" becomes "MAH MBA/MMS CET 2026".
  const stageSet = new Set(stageWords.map((word) => word.toLowerCase()));
  const shared = examWords.filter((word) => stageSet.has(word.toLowerCase())).length;
  if (shared * 2 >= examWords.length) return stage.name;
  return `${exam.name} ${stage.name}`;
}

export interface OptionProfile {
  /** How many options each multiple-choice question offers, when they all agree. */
  width?: number;
  /** Questions answered by typing a value, where there is nothing to guess between. */
  typedAnswers: number;
  total: number;
}

/**
 * Counts the options on the questions actually built for a stage.
 *
 * The guessing advice used to assume four options everywhere. That was wrong
 * on KEAM and TIFR GS, which set five and where a blind guess therefore returns
 * 20%, exactly their break-even rather than comfortably above it: the page told
 * candidates to guess freely on the two papers where guessing is worthless. On
 * TIFR GS the page also carried "questions carry five options" from the pattern
 * note three sentences above the sentence saying four. So the width is read off
 * the bank rather than assumed, and where the questions do not agree, or none
 * are built, no odds are stated at all.
 */
export function getStageOptionProfile(exam: ExamConfig, stage: TestStage): OptionProfile {
  const seen = new Map<string, { options: number; typed: boolean }>();
  for (const test of stage.tests) {
    if (test.status !== 'checked') continue;
    for (const question of getQuestionsForTest(exam.slug, test.id)) {
      // Sectionals reuse the same bank as their full-length test, so the key
      // dedupes. Not every frozen record carries an id, and the question text
      // dedupes just as well where one is missing.
      seen.set(question.id ?? question.question, {
        options: question.options.length,
        typed: question.answerType === 'numerical',
      });
    }
  }
  const widths = new Set<number>();
  let typedAnswers = 0;
  for (const entry of seen.values()) {
    if (entry.typed || entry.options === 0) typedAnswers += 1;
    else widths.add(entry.options);
  }
  return { width: widths.size === 1 ? [...widths][0] : undefined, typedAnswers, total: seen.size };
}

const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
function numberWord(value: number): string {
  return NUMBER_WORDS[value] ?? String(value);
}

/**
 * Timing notes that deny a sectional lock, in the wordings the patterns use.
 *
 * This started as /no sectional lock/i, which matched none of the three stages
 * that actually deny one. On 23 September 2026 UPSC CSE GS Paper I published
 * seven per-section durations under a note reading "Single 120-minute timer for
 * the whole paper: GS Paper I is not divided into separately timed sections",
 * and the page then derived "All 7 sections are separately timed, so time saved
 * in one cannot be carried into another" and answered "Yes" to its own
 * sectional-time-limit FAQ, in FAQPage schema. CSAT and NMIMS-CET said the same
 * thing about themselves and were contradicted the same way.
 *
 * The per-section durations on those three are indicative splits published
 * alongside a single whole-paper clock, which is exactly the case the
 * sectionDurationSource field was added for. That field is too sparsely
 * populated to drive this on its own, so the denial is read from the note, and
 * scripts/audit-onpage-seo.mjs fails the build if a rendered page ever asserts
 * a lock its own timing note denies. A regex alone would rot; the gate is what
 * keeps this honest when a new phrasing arrives.
 */
export const DENIES_SECTIONAL_LOCK =
  /\bno sectional lock\b|\bnot divided into separately timed\b|\bdoes not (?:establish|impose|create) locked\b|\b(?:single|one) unrestricted\b|\b(?:single|one)[\w\s-]{0,20}timer for the whole paper\b/i;

/** Whether a stage's timing note denies a sectional lock. The one place that decides. */
export function deniesSectionalLock(timerNote: string | undefined): boolean {
  return DENIES_SECTIONAL_LOCK.test(timerNote ?? '');
}

export function getPatternInsights(pattern: StagePattern): PatternInsights {
  const { totalQuestions: questions, totalMarks: marks, duration } = pattern;
  const negative = parseNegativeMarking(pattern.negativeMarking);
  const marksPerQuestion = questions && marks ? round(marks / questions) : undefined;
  // A lock is only asserted when the stage publishes per-section limits AND
  // its own timing note does not deny one. Both were true at once on 32 stages
  // in September 2026: the table printed a derived pro-rata split of the
  // composite window, so this read it as a lock and the page said "all sections
  // are separately timed" a few lines under "no sectional lock".
  const deniesLock = DENIES_SECTIONAL_LOCK.test(pattern.timerNote ?? '');
  const lockedSections = deniesLock
    ? 0
    : pattern.sectionBreakdown?.filter((section) => section.duration).length ?? 0;

  return {
    questions,
    marks,
    duration,
    secondsPerQuestion: questions && duration ? Math.round((duration * 60) / questions) : undefined,
    marksPerQuestion,
    negative,
    negativeLabel: typeof pattern.negativeMarking === 'string' ? pattern.negativeMarking : undefined,
    breakEvenAccuracy:
      marksPerQuestion && negative && negative > 0
        ? round((negative / (marksPerQuestion + negative)) * 100, 1)
        : undefined,
    hasSectionalLock: lockedSections > 1,
    lockedSections,
  };
}

function marksLabel(value: number): string {
  return `${formatMarks(value)} ${value === 1 ? 'mark' : 'marks'}`;
}

function joinSentences(parts: (string | undefined)[]): string {
  return parts.filter(Boolean).join(' ');
}

/** One plain-language paragraph describing a stage's shape. */
export function getStageSummary(exam: ExamConfig, stage: TestStage): string {
  const p = stage.pattern;
  if (p.status !== 'official') return '';
  const insights = getPatternInsights(p);
  const name = stageLabel(exam, stage);

  const shape =
    insights.questions && insights.marks && insights.duration
      ? `The ${name} exam pattern is ${insights.questions} questions carrying ${insights.marks} marks, to be answered in ${insights.duration} minutes.`
      : insights.questions && insights.duration
        ? `The ${name} exam pattern is ${insights.questions} questions in ${insights.duration} minutes.`
        : `The ${name} paper covers ${p.sections.length} ${p.sections.length === 1 ? 'section' : 'sections'}.`;

  const pace = insights.secondsPerQuestion
    ? `That works out to about ${insights.secondsPerQuestion} seconds per question on average, before any time spent reading instructions or revisiting marked answers.`
    : undefined;

  const sections =
    p.sections.length > 1
      ? `The ${p.sections.length} sections are ${p.sections.slice(0, -1).join(', ')} and ${p.sections[p.sections.length - 1]}.`
      : `It is a single ${p.sections[0]} paper.`;

  // What the section table means once you read down the marks column. Two
  // exams can share a question count, a duration and a marking scheme and
  // still ask for completely different preparation, and this is where that
  // difference shows: it is the one derived sentence that separates papers a
  // summary of totals alone renders identically.
  const weighting = (() => {
    const breakdown = p.sectionBreakdown;
    if (!breakdown || breakdown.length < 2 || breakdown.some((section) => !section.marks)) return undefined;
    const total = breakdown.reduce((sum, section) => sum + section.marks, 0);
    if (total <= 0) return undefined;
    const ranked = [...breakdown].sort((a, b) => b.marks - a.marks);
    const top = ranked[0];
    const bottom = ranked[ranked.length - 1];
    if (top.marks === bottom.marks) {
      return `All ${breakdown.length} sections carry ${marksLabel(top.marks)} each, so none of them repays disproportionate preparation and a weakness anywhere costs the same.`;
    }
    const share = Math.round((top.marks / total) * 100);
    const perQuestion = new Set(
      breakdown
        .filter((section) => section.questions > 0)
        .map((section) => round(section.marks / section.questions)),
    );
    const uneven =
      perQuestion.size > 1
        ? ` Marks per question are not uniform across sections either, so an equal number of questions does not mean equal weight.`
        : '';
    return `${top.name} carries the most, ${marksLabel(top.marks)} of the ${total} or about ${share}%, against ${marksLabel(bottom.marks)} for ${bottom.name}.${uneven}`;
  })();

  const allLocked = insights.lockedSections === (p.sectionBreakdown?.length ?? 0);
  const timing = insights.hasSectionalLock
    ? `${allLocked ? `All ${insights.lockedSections} sections are` : `${insights.lockedSections} of those sections are`} separately timed, so time saved in one cannot be carried into another. You cannot bank minutes by rushing an easy section.`
    : p.sections.length > 1
      ? 'All sections share one composite timer, so you are free to move between them and spend your time where it earns most.'
      : undefined;

  return joinSentences([shape, pace, sections, weighting, timing]);
}

/** How this stage's marking scheme actually behaves when you sit it. */
export function getStageMarkingNotes(exam: ExamConfig, stage: TestStage): string[] {
  const p = stage.pattern;
  if (p.status !== 'official') return [];
  const insights = getPatternInsights(p);
  const profile = getStageOptionProfile(exam, stage);
  const notes: string[] = [];

  if (insights.marksPerQuestion) {
    notes.push(
      `Each correct answer is worth ${insights.marksPerQuestion} ${insights.marksPerQuestion === 1 ? 'mark' : 'marks'}.`,
    );
  }

  if (insights.negative === 0) {
    notes.push(
      'There is no negative marking, so leaving a question blank can only cost you: an unattempted question and a wrong one score the same zero. Attempt everything.',
    );
  } else if (insights.negative && insights.negative > 0) {
    // A fraction reads wrong as "deducts 1/3 marks"; spell it as a share of a
    // mark instead. A plain number takes the ordinary singular/plural.
    const label = insights.negativeLabel
      ? /^\s*\d+\s*\/\s*\d+\s*$/.test(insights.negativeLabel)
        ? `${insights.negativeLabel} of a mark`
        : insights.negativeLabel
      : marksLabel(insights.negative);
    notes.push(`A wrong answer deducts ${label}; an unattempted question scores zero.`);
    if (insights.breakEvenAccuracy !== undefined) {
      const breakEven = insights.breakEvenAccuracy;
      // Stated only when the bank says how wide the questions are. Where it
      // does not agree, or nothing is built for this stage, the break-even
      // figure stands on its own rather than being paired with odds nobody
      // checked.
      const blind = profile.width ? round(100 / profile.width, 1) : undefined;
      const versusBlindGuess =
        blind === undefined || profile.width === undefined
          ? undefined
          : blind === breakEven
            ? `That is exactly what a blind guess between ${numberWord(profile.width)} options returns, so guessing at random neither gains nor loses marks over a long paper. The moment you can rule out even one option, it starts paying.`
            : blind > breakEven
              ? `A blind guess between ${numberWord(profile.width)} options is right ${blind}% of the time, which is already above that line, so an educated guess is worth making rather than leaving the question blank.`
              : `A blind guess between ${numberWord(profile.width)} options is right only ${blind}% of the time, which is below that line, so guessing at random costs you marks: guess only when you can genuinely eliminate options.`;
      const typed =
        profile.typedAnswers > 0 && profile.total > 0
          ? `${profile.typedAnswers} of the ${profile.total} questions built here are answered by typing a value rather than by choosing an option, and there is nothing to guess between on those.`
          : undefined;
      notes.push(
        joinSentences([
          `A guess therefore breaks even at ${breakEven}% accuracy: above that it gains you marks on average, below it loses them.`,
          versusBlindGuess,
          typed,
        ]),
      );
    }
  }

  if (insights.questions && insights.marks && insights.marksPerQuestion) {
    const attempted = Math.round(insights.questions * 0.8);
    const correct = Math.round(attempted * 0.75);
    const wrong = attempted - correct;
    const score = round(correct * insights.marksPerQuestion - wrong * (insights.negative ?? 0));
    notes.push(
      `Worked example: attempt ${attempted} of the ${insights.questions} questions and get ${correct} right and ${wrong} wrong, and you score ${score} out of ${insights.marks}.`,
    );
  }

  return notes;
}

/**
 * FAQs for the whole exam, aimed at the questions people actually type. Every
 * answer is read off the verified pattern, so this block never states anything
 * the table above it does not already support.
 */
export function getExamPatternFaqs(exam: ExamConfig): { q: string; a: string }[] {
  const official = exam.stages.filter((stage) => stage.pattern.status === 'official');
  if (official.length === 0) return [];
  const faqs: { q: string; a: string }[] = [];
  const label = (stage: TestStage) => (official.length > 1 ? stageLabel(exam, stage) : exam.name);

  const negativeParts = official.map((stage) => {
    const insights = getPatternInsights(stage.pattern);
    if (insights.negative === 0) return `${label(stage)} has no negative marking`;
    const value = insights.negativeLabel ?? (insights.negative !== undefined ? marksLabel(insights.negative) : undefined);
    return value ? `${label(stage)} deducts ${value} for a wrong answer` : undefined;
  });
  if (negativeParts.some(Boolean)) {
    faqs.push({
      q: `Is there negative marking in ${exam.name}?`,
      a: `${negativeParts.filter(Boolean).join('; ')}. An unattempted question always scores zero, so the choice is only ever between guessing and leaving it blank.`,
    });
  }

  const counted = official.filter((stage) => stage.pattern.totalQuestions);
  if (counted.length > 0) {
    faqs.push({
      q: `How many questions are there in ${exam.name}?`,
      a: (() => {
        const counts = counted
          .map((stage) => `${label(stage)} has ${stage.pattern.totalQuestions} questions`)
          .join(', ');
        // One pacing sentence for all stages, rather than repeating the same
        // stem once per stage.
        const paces = counted
          .map((stage) => {
            const seconds = getPatternInsights(stage.pattern).secondsPerQuestion;
            return seconds ? `${seconds} seconds per question in ${label(stage)}` : undefined;
          })
          .filter(Boolean) as string[];
        const pacing =
          paces.length === 0
            ? ''
            : ` That leaves about ${paces.length === 1 ? paces[0] : `${paces.slice(0, -1).join(', ')} and ${paces[paces.length - 1]}`}.`;
        return `${counts}.${pacing}`;
      })(),
    });
  }

  const marked = official.filter((stage) => stage.pattern.totalMarks);
  if (marked.length > 0) {
    faqs.push({
      q: `What are the total marks in ${exam.name}?`,
      a: `${marked
        .map((stage) => {
          const perQuestion = getPatternInsights(stage.pattern).marksPerQuestion;
          return `${label(stage)} is out of ${stage.pattern.totalMarks} marks${
            perQuestion ? `, which works out at ${marksLabel(perQuestion)} a question` : ''
          }`;
        })
        .join(', ')}.`,
    });
  }

  const timed = official.filter((stage) => stage.pattern.duration);
  if (timed.length > 0) {
    faqs.push({
      q: `How long is the ${exam.name} exam?`,
      a: `${timed.map((stage) => `${label(stage)} runs for ${stage.pattern.duration} minutes`).join(', ')}.`,
    });
  }

  const locked = official.filter((stage) => getPatternInsights(stage.pattern).hasSectionalLock);
  if (official.some((stage) => stage.pattern.sections.length > 1)) {
    faqs.push({
      q: `Does ${exam.name} have a sectional time limit?`,
      a:
        locked.length > 0
          ? `Yes. ${locked
              .map((stage) => `${label(stage)} times its sections separately`)
              .join(', ')}, so time left over in one section cannot be spent on another. Plan a per-section budget before you sit it.`
          : // Naming the exam and its actual clock. The bare version of this
            // sentence was byte-identical on 110 pattern pages.
            `No. ${exam.name} runs every section on one composite timer${
              timed.length === 1 && timed[0].pattern.duration ? ` of ${timed[0].pattern.duration} minutes` : ''
            }, so you can move between sections freely and give the slower ones more of your time.`,
    });
  }

  if (official.length > 1) {
    faqs.push({
      q: `How many stages does ${exam.name} have?`,
      a: `This site covers ${official.length} objective stages: ${official.map((stage) => stage.name).join(', ')}. Each stage is checked against the official notification separately, because scoring rules routinely differ between stages of the same exam.`,
    });
  }

  return faqs;
}
