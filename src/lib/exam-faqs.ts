import { ExamConfig, StagePattern, describeSections, getCheckedTestCount } from './exams';

// FAQ content generated programmatically from already-verified ExamConfig
// data ("Bucket A" per the SEO FAQ overhaul) so it stays accurate as exams
// are added or re-checked, without hand-authoring per exam. Kept separate
// per page type (hub vs mock-test list) so the same exam doesn't show the
// same questions twice across its pages. See TAKEMOCKTEST_CURRENT_STATUS.md
// SEO audit notes and EXAM_FACT_FAQS below for the researched ("Bucket B")
// counterpart.

export interface Faq {
  q: string;
  a: string;
}

function negativeMarkingFaqAnswer(negativeMarking: StagePattern['negativeMarking'], examName: string): string {
  if (typeof negativeMarking === 'number') {
    return negativeMarking > 0
      ? `Yes. Each incorrect answer deducts ${negativeMarking} mark${negativeMarking === 1 ? '' : 's'} in ${examName}, and an unanswered question scores zero.`
      : `No. ${examName} has no negative marking, and an unanswered question scores zero.`;
  }
  if (typeof negativeMarking === 'string') {
    return `Yes, but the exact deduction in ${examName} depends on the question type rather than one fixed rule. See the exam pattern page for the per-question-type breakdown.`;
  }
  return '';
}

// Hub page (/in/{exam}) FAQ: pattern-level questions.
export function getExamPatternFaqs(exam: ExamConfig): Faq[] {
  const officialStages = exam.stages.filter((stage) => stage.pattern.status === 'official');
  if (officialStages.length === 0) return [];

  const faqs: Faq[] = [];

  if (officialStages.length === 1) {
    const pattern = officialStages[0].pattern;
    if (pattern.totalQuestions && pattern.totalMarks && pattern.duration) {
      faqs.push({
        q: `What is the ${exam.name} exam pattern?`,
        a: `${exam.name} has ${pattern.totalQuestions} questions worth ${pattern.totalMarks} marks in ${pattern.duration} minutes, covering ${describeSections(pattern)}.`,
      });
    }
    if (pattern.negativeMarking !== undefined) {
      faqs.push({
        q: `Is there negative marking in ${exam.name}?`,
        a: negativeMarkingFaqAnswer(pattern.negativeMarking, exam.name),
      });
    }
  } else {
    const stageNames = officialStages.map((stage) => stage.name).join(', ');
    faqs.push({
      q: `How many stages does ${exam.name} have?`,
      a: `${exam.name} is conducted in ${officialStages.length} stages: ${stageNames}. Each stage has its own question count, marks, duration, and negative-marking rules, shown on the exam pattern page.`,
    });
  }

  if (officialStages.some((stage) => stage.pattern.sourceUrl)) {
    faqs.push({
      q: `Does this mock test cover the official ${exam.name} syllabus?`,
      a: `Every test on this site is mapped to the official pattern and syllabus scope linked above, and independently checked before publishing. Granular topic labels beyond the official syllabus are a TakeMockTest preparation map, not an official subtopic list, unless stated otherwise.`,
    });
  }

  return faqs;
}

// Mock-test list page (/in/{exam}/mock-test) FAQ: test-series composition,
// distinct from the hub page's pattern-level questions above so the same
// exam's pages don't repeat each other.
export function getMockTestFaqs(exam: ExamConfig): Faq[] {
  const checked = exam.stages.flatMap((stage) => stage.tests).filter((test) => test.status === 'checked');
  if (checked.length === 0) return [];

  const counts = {
    fullLength: checked.filter((test) => test.kind === 'full-length').length,
    sectional: checked.filter((test) => test.kind === 'sectional').length,
    quick: checked.filter((test) => ['quick', 'practice', 'topic', 'difficulty'].includes(test.kind)).length,
  };
  const parts = [
    counts.fullLength > 0 ? `${counts.fullLength} full-length mock${counts.fullLength === 1 ? '' : 's'}` : '',
    counts.sectional > 0 ? `${counts.sectional} sectional test${counts.sectional === 1 ? '' : 's'}` : '',
    counts.quick > 0 ? `${counts.quick} quick practice test${counts.quick === 1 ? '' : 's'}` : '',
  ].filter(Boolean);
  const breakdown = parts.length > 1 ? `${parts.slice(0, -1).join(', ')}, and ${parts[parts.length - 1]}` : parts[0];

  const faqs: Faq[] = [
    {
      q: `How many ${exam.name} mock tests are available here?`,
      a: `This page currently has ${getCheckedTestCount(exam)} syllabus-checked test${getCheckedTestCount(exam) === 1 ? '' : 's'} for ${exam.name}: ${breakdown}.`,
    },
  ];

  if (exam.stages.some((stage) => stage.pattern.sourceUrl)) {
    faqs.push({
      q: `Are these ${exam.name} tests based on the official pattern?`,
      a: `Yes. Each checked test's question count, marks, duration, and negative marking match the official pattern shown above, with its source and checked date linked.`,
    });
  }

  return faqs;
}

// Bucket B: researched facts (fees, eligibility specifics, application
// windows, permitted attempts) not derivable from ExamConfig. Filled in
// exam by exam from official sources only, with a source URL and checked
// date per entry, per the 2026-08-13 scoped exception in
// TAKEMOCKTEST_DEVELOPMENT_OPERATING_MODEL.md. An exam with no entry here
// simply shows no Bucket B questions; nothing is guessed to fill the gap.
export interface FactFaq extends Faq {
  sourceUrl: string;
  checkedOn: string;
}

export const EXAM_FACT_FAQS: Partial<Record<string, FactFaq[]>> = {};

export function getExamFactFaqs(exam: ExamConfig): FactFaq[] {
  return EXAM_FACT_FAQS[exam.slug] ?? [];
}
