import type { ExamConfig, TestStage, TestConfig } from './exams';
import type { Question } from './questions';

// Says, per test, how much of the official paper it actually reproduces.
//
// Added 10 September 2026 after a review found six tests named "Full Mock
// Test" that are not the full paper: SBI PO Mains is 110 of 170 official
// questions, SBI Clerk Mains 140 of 190, IBPS Clerk Mains 130 of 160, RBI
// Assistant Mains 160 of 200, and both IBPS RRB Mains 160 of 200. IBPS PO
// Mains, by contrast, is the whole 170.
//
// The exclusions are deliberate and right: they are the General Awareness and
// current-affairs sections, which this site refuses to fabricate because an
// answer that changes between cycles cannot be checked. What was wrong was
// leaving that invisible. A candidate who sits a test called a full mock and
// scores 110 has no way to know they practised two thirds of a paper.
//
// This is derived rather than written. A hand-maintained sentence beside a
// generated number is exactly the arrangement that produced fourteen pages of
// test counts that did not add up, so the disclosure counts the questions in
// the bank, compares them to the stage's official total, and names the missing
// sections from the official breakdown. It cannot drift, because there is
// nothing to keep in sync.
export interface TestCoverage {
  /** True when the test reproduces the whole official paper. */
  readonly complete: boolean;
  /** One line for display next to the test. */
  readonly label: string;
}

export function getTestCoverage(
  exam: ExamConfig,
  stage: TestStage,
  test: TestConfig,
  questions: Question[],
): TestCoverage | undefined {
  // Only full-length tests claim to be the paper. A sectional is named for the
  // part it covers, so it makes no promise to keep.
  if (test.kind !== 'full-length' || test.status !== 'checked') return undefined;
  const official = stage.pattern?.totalQuestions;
  if (typeof official !== 'number' || official <= 0 || questions.length === 0) return undefined;

  // Sections first, then the count. The other way round, a test could reach the
  // official question total while missing a whole section and be reported as
  // the complete paper: SNAP does exactly that once its 2026 structure is
  // recorded, with 60 questions against an official 60 but no Ethics, Morality
  // and Values at all. A count alone cannot see that.
  const present = new Set(questions.map((question) => question.section).filter(Boolean));
  const missing = (stage.pattern?.sectionBreakdown ?? [])
    .map((section) => section.name)
    .filter((name) => !present.has(name));
  const missingClause = missing.length > 0 && missing.length <= 3 ? missing.join(' and ') : '';

  if (missing.length === 0 && questions.length >= official) {
    return { complete: true, label: 'Coverage: the full official objective paper' };
  }

  // A test can hold as many questions as the paper and still skip a section, so
  // the count would read "60 of 60 ... not included" and contradict itself.
  if (missingClause && questions.length >= official) {
    return { complete: false, label: `Coverage: every official section except ${missingClause}` };
  }

  return {
    complete: false,
    label: `Coverage: ${questions.length} of ${official} official questions${missingClause ? ` · ${missingClause} not included` : ''}`,
  };
}
