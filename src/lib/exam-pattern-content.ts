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

export function getPatternInsights(pattern: StagePattern): PatternInsights {
  const { totalQuestions: questions, totalMarks: marks, duration } = pattern;
  const negative = parseNegativeMarking(pattern.negativeMarking);
  const marksPerQuestion = questions && marks ? round(marks / questions) : undefined;
  const lockedSections = pattern.sectionBreakdown?.filter((section) => section.duration).length ?? 0;

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
  return `${value} ${value === 1 ? 'mark' : 'marks'}`;
}

function joinSentences(parts: (string | undefined)[]): string {
  return parts.filter(Boolean).join(' ');
}

/** One plain-language paragraph describing a stage's shape. */
export function getStageSummary(exam: ExamConfig, stage: TestStage): string {
  const p = stage.pattern;
  if (p.status !== 'official') return '';
  const insights = getPatternInsights(p);
  const name = `${exam.name} ${stage.name}`;

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

  const allLocked = insights.lockedSections === (p.sectionBreakdown?.length ?? 0);
  const timing = insights.hasSectionalLock
    ? `${allLocked ? `All ${insights.lockedSections} sections are` : `${insights.lockedSections} of those sections are`} separately timed, so time saved in one cannot be carried into another. You cannot bank minutes by rushing an easy section.`
    : p.sections.length > 1
      ? 'All sections share one composite timer, so you are free to move between them and spend your time where it earns most.'
      : undefined;

  return joinSentences([shape, pace, sections, timing]);
}

/** How this stage's marking scheme actually behaves when you sit it. */
export function getStageMarkingNotes(stage: TestStage): string[] {
  const p = stage.pattern;
  if (p.status !== 'official') return [];
  const insights = getPatternInsights(p);
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
      const versusBlindGuess =
        breakEven === 25
          ? 'That is exactly the 25% a blind guess between four options gives you, so guessing at random is neither gaining nor losing marks over a long paper. The moment you can rule out even one option, it starts paying.'
          : breakEven < 25
            ? 'A blind guess between four options is right 25% of the time, which is already above that line, so an educated guess is clearly worth making rather than leaving the question blank.'
            : 'A blind guess between four options is right only 25% of the time, which is below that line, so guessing at random costs you marks: guess only when you can genuinely eliminate options.';
      notes.push(
        `A guess therefore breaks even at ${breakEven}% accuracy: above that it gains you marks on average, below it loses them. ${versusBlindGuess}`,
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
  const label = (stage: TestStage) => (official.length > 1 ? `${exam.name} ${stage.name}` : exam.name);

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
      a: `${marked.map((stage) => `${label(stage)} is out of ${stage.pattern.totalMarks} marks`).join(', ')}.`,
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
          : `No. Every section shares one composite timer, so you can move between sections freely and give the slower ones more of your time.`,
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
