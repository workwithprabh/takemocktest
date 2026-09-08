// The Logical Reasoning hub: a cross-exam practice section for people who want
// reasoning drills rather than a full paper for one exam.
//
// Design notes worth keeping in view before changing anything here:
//
// * The hub owns no question content. Every question already ships inside an
//   exam mock; the hub only references IDs (LR_TEST_SPECS) and resolves them
//   through getQuestionsByIds. That keeps a single source of truth per
//   question, so a correction to a bank flows to both places at once, and it
//   is why the audit's cross-bank text-uniqueness rule is not violated.
// * There is NO negative marking anywhere in the hub, by design: this is
//   untimed-pressure practice, not exam simulation. That also means a hub
//   score is not comparable with the same questions' score inside their
//   source exam mock, which the hub pages say out loud.
// * Difficulty is the hub's own absolute grade (see logical-reasoning-data.ts),
//   not the source question's exam-relative `difficulty` tag. Served questions
//   have `difficulty` overwritten with the hub grade so the results screen and
//   the review view agree with the test the person actually chose.

import { LR_QUESTION_GRADES, LR_TEST_SPECS, type LRGrade, type LRTestSpec } from './logical-reasoning-data';
import { getExamSlugsForQuestionIds, getQuestionsByIds, type Question } from './questions';
import { getExam } from './exams';

export type { LRGrade, LRTestSpec };
export { LR_TEST_SPECS };

/** Route segment for the hub, and the examSlug attempts are filed under. */
export const LR_SLUG = 'logical-reasoning';
export const LR_NAME = 'Logical Reasoning';
/** Single section label, so the attempt engine runs one timer for the set. */
export const LR_SECTION = 'Logical Reasoning';
export const LR_MARKS_PER_CORRECT = 1;
export const LR_NEGATIVE_MARKING = 0;

export const LR_GRADE_LABELS: Record<LRGrade, string> = {
  easy: 'Easy',
  medium: 'Medium',
  hard: 'Hard',
};

export const LR_GRADE_BLURBS: Record<LRGrade, string> = {
  easy: 'One step, no case analysis. Build speed and accuracy on the basics.',
  medium: 'Two to four linked steps, or one diagram to construct, without branching.',
  hard: 'Branching and elimination, interleaved rules, layered codes and sufficiency traps.',
};

/**
 * How a set is named in links, headings and titles. A family can have more
 * than one set, so the label carries the set number from the second onwards —
 * without it two sets of the same family would render identical link text and,
 * worse, identical page titles.
 */
export function getLRTestLabel(spec: LRTestSpec): string {
  if (spec.kind === 'difficulty') return spec.name;
  const family = spec.family ?? spec.name;
  return spec.variant && spec.variant > 1 ? `${family} Set ${spec.variant}` : family;
}

export function getLRTestSpec(testId: string): LRTestSpec | undefined {
  return LR_TEST_SPECS.find((spec) => spec.id === testId);
}

export function getAllLRTestIds(): string[] {
  return LR_TEST_SPECS.map((spec) => spec.id);
}

/**
 * Questions for one hub test, in the order the spec lists them, re-labelled
 * into the hub's single section and carrying the hub's own difficulty grade.
 * Throws (failing the build) if a generated ID no longer exists in any bank.
 */
export function getLRQuestions(spec: LRTestSpec): Question[] {
  return getQuestionsByIds(spec.questionIds).map((question) => ({
    ...question,
    section: LR_SECTION,
    difficulty: question.id ? LR_QUESTION_GRADES[question.id] ?? question.difficulty : question.difficulty,
    marks: LR_MARKS_PER_CORRECT,
    negativeMarking: LR_NEGATIVE_MARKING,
  }));
}

/** How many easy/medium/hard questions a test contains, on the hub's scale. */
export function getLRGradeMix(spec: LRTestSpec): Record<LRGrade, number> {
  const mix: Record<LRGrade, number> = { easy: 0, medium: 0, hard: 0 };
  for (const id of spec.questionIds) {
    const grade = LR_QUESTION_GRADES[id];
    if (grade) mix[grade] += 1;
  }
  return mix;
}

export const LR_DIFFICULTY_TESTS = LR_TEST_SPECS.filter((spec) => spec.kind === 'difficulty');
export const LR_TOPIC_TESTS = LR_TEST_SPECS.filter((spec) => spec.kind === 'topic');

/** Difficulty tests grouped by level, in ladder order. */
export const LR_LADDER: { level: LRGrade; tests: LRTestSpec[] }[] = (['easy', 'medium', 'hard'] as LRGrade[]).map(
  (level) => ({ level, tests: LR_DIFFICULTY_TESTS.filter((spec) => spec.level === level) }),
);

export const LR_TOTAL_QUESTIONS = LR_TEST_SPECS.reduce((total, spec) => total + spec.questionIds.length, 0);

/**
 * The exams a hub test's questions were drawn from, as {slug, name} pairs
 * ready to link. Derived from the banks at build time, never hand-listed, so
 * it cannot claim an exam the set does not actually contain. Exams that are no
 * longer resolvable are dropped rather than rendered as dead links.
 */
export function getLRSourceExams(spec: LRTestSpec): { slug: string; name: string }[] {
  return getExamSlugsForQuestionIds(spec.questionIds)
    .map((slug) => {
      const exam = getExam(slug);
      return exam ? { slug, name: exam.shortName ?? exam.name } : null;
    })
    .filter((entry): entry is { slug: string; name: string } => entry !== null)
    .sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * The next set to attempt after this one: the next set at the same level, or
 * the first set of the next level up when this is the last of its level. Topic
 * sets step to the next topic set. Returns undefined at the end of the ladder.
 */
export function getNextLRTest(spec: LRTestSpec): LRTestSpec | undefined {
  const pool = spec.kind === 'difficulty' ? LR_DIFFICULTY_TESTS : LR_TOPIC_TESTS;
  const index = pool.findIndex((other) => other.id === spec.id);
  return index >= 0 ? pool[index + 1] : undefined;
}
