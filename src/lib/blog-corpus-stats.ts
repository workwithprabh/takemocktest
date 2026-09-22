import { EXAMS } from './exams';
import { getTopicPools } from './practice-topics';

// Figures the blog quotes about this site's own corpus, computed from the
// corpus rather than written down next to the prose.
//
// Why this file exists: on 7 September 2026 three posts were published quoting
// numbers derived from the exam data by hand, in a session that did not commit
// the script it derived them with. Every figure was correct that day. By 15
// September the site had grown from 157 exams to 183, and none of the numbers
// had moved with it. The topic pool had gained 236 questions, the reasoning
// section count two more headings, and the posts still said otherwise.
//
// The site's whole pitch is that its numbers are checked. A reader who counts
// the exams and finds 183 where the page claims 157 has no reason to believe
// the marking scheme either, so this is a trust bug before it is a content bug.
// Hardcoding was the bug; an audit would only have caught it after the fact.
// Deriving the figures means the prose cannot go stale without the data going
// stale with it.
//
// The definitions below reproduce the originals exactly, verified by running
// them against the tree at commit b13bad3: they return 157 exams, 245 section
// names, 1,247 pairs, 1,044 subset pairs, 52 reasoning exams under 23
// headings, and 8,023 pooled questions, which are the figures that were
// published. Do not "tidy" a definition here without re-checking that it still
// reproduces those, because the prose around each number describes the method,
// and a quieter definition would make the sentence wrong rather than the number.

/** Every distinct section name an exam declares, across all of its stages. */
function sectionsOf(exam: (typeof EXAMS)[keyof typeof EXAMS]): string[] {
  return [...new Set(exam.stages.flatMap((stage) => stage.pattern.sections))];
}

/**
 * Sections that are reasoning and nothing else. A heading that bundles
 * reasoning with quantitative, English or general awareness is a composite
 * paper, not a reasoning section, and "Legal Reasoning" is legal aptitude
 * under a reasoning name rather than the general skill the posts describe.
 */
function isReasoningOnly(section: string): boolean {
  return (
    /\b(reasoning|intelligence)\b/i.test(section) &&
    !/\b(quantitative|numerical|english|awareness|knowledge|aptitude|ability and|data|legal)\b/i.test(section)
  );
}

/**
 * Every test a visitor can actually sit: status 'checked', which is the same
 * set the mock-test lists publish. Tests shared in from another exam's bank
 * are counted once, under the exam whose bank they come from, so a Reasoning
 * sectional reused across six banking exams does not weight the distribution
 * six times.
 */
function checkedTests(exams: (typeof EXAMS)[keyof typeof EXAMS][]) {
  const seen = new Set<string>();
  const tests: { exam: string; marksPerCorrect: number; negativeMarking: number }[] = [];
  for (const exam of exams) {
    for (const stage of exam.stages) {
      for (const test of stage.tests) {
        if (test.status !== 'checked') continue;
        if (test.sharedFrom) continue;
        const key = `${exam.slug}/${test.id}`;
        if (seen.has(key)) continue;
        seen.add(key);
        tests.push({ exam: exam.slug, marksPerCorrect: test.marksPerCorrect, negativeMarking: test.negativeMarking });
      }
    }
  }
  return tests;
}

/** +1/-0.25 rather than +1/-0.250, so the specs read the way a notice writes them. */
function spec(marksPerCorrect: number, negativeMarking: number): string {
  const trim = (value: number) => String(Number(value.toFixed(3)));
  return `+${trim(marksPerCorrect)}/-${trim(negativeMarking)}`;
}

/**
 * What a wrong answer costs as a fraction of a correct one. This is the only
 * figure that governs the guessing decision, and it is not the deduction:
 * +4/-1 and +1/-0.25 are the same penalty written two ways, while -1 is a
 * quarter under +4 and a third under +3.
 */
function markingSpread(exams: (typeof EXAMS)[keyof typeof EXAMS][]) {
  const tests = checkedTests(exams);
  const near = (ratio: number, target: number) => Math.abs(ratio - target) <= 0.005;

  const specsFor = new Map<string, Map<string, number>>();
  const perDeduction = new Map<number, Map<string, { marksPerCorrect: number; tests: number }>>();
  let none = 0;
  let quarter = 0;
  let third = 0;

  for (const test of tests) {
    if (test.negativeMarking === 0) {
      none += 1;
      continue;
    }
    const ratio = test.negativeMarking / test.marksPerCorrect;
    const band = near(ratio, 0.25) ? 'quarter' : near(ratio, 1 / 3) ? 'third' : 'other';
    if (band === 'quarter') quarter += 1;
    if (band === 'third') third += 1;
    if (band !== 'other') {
      if (!specsFor.has(band)) specsFor.set(band, new Map());
      const counts = specsFor.get(band)!;
      const key = spec(test.marksPerCorrect, test.negativeMarking);
      counts.set(key, (counts.get(key) ?? 0) + 1);
    }
    if (!perDeduction.has(test.negativeMarking)) perDeduction.set(test.negativeMarking, new Map());
    const byRatio = perDeduction.get(test.negativeMarking)!;
    const key = ratio.toFixed(3);
    const entry = byRatio.get(key) ?? { marksPerCorrect: test.marksPerCorrect, tests: 0 };
    entry.tests += 1;
    byRatio.set(key, entry);
  }

  const ranked = (band: string) =>
    [...(specsFor.get(band) ?? new Map()).entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([key, count]) => ({ spec: key, tests: count }));

  // Deduction figures that mean more than one penalty depending on what a
  // correct answer is worth. These are the ones worth warning a reader about,
  // and the reading is spelled out per figure so the prose can name them.
  //
  // `fraction` is a denominator only where the ratio really is a unit fraction
  // to within half a percentage point. Anything else reports the ratio, since
  // calling 0.237 "about a quarter" is the confusion this section is about.
  const ambiguousDeductions = [...perDeduction.entries()]
    .filter(([, byRatio]) => byRatio.size > 1)
    .sort((a, b) => a[0] - b[0])
    .map(([deduction, byRatio]) => ({
      deduction,
      readings: [...byRatio.entries()]
        .sort((a, b) => b[1].tests - a[1].tests || a[0].localeCompare(b[0]))
        .map(([ratioKey, { marksPerCorrect, tests: count }]) => {
          const ratio = Number(ratioKey);
          const denominator = Math.round(1 / ratio);
          const isUnitFraction = Math.abs(ratio - 1 / denominator) <= 0.005;
          return {
            marksPerCorrect,
            tests: count,
            fraction: isUnitFraction ? denominator : undefined,
            ratio,
          };
        }),
    }));

  return {
    tests: tests.length,
    none,
    quarter,
    third,
    other: tests.length - none - quarter - third,
    quarterSpecs: ranked('quarter'),
    thirdSpecs: ranked('third'),
    ambiguousDeductions,
  };
}

function compute() {
  const exams = Object.values(EXAMS);

  const sectionNames = new Set<string>();
  for (const exam of exams) for (const section of sectionsOf(exam)) sectionNames.add(section);

  // Every exam against every other: pairs sharing at least three section names,
  // where the shared set covers at least half of the shorter list, and the
  // subset of those where the shorter list sits entirely inside the longer.
  let sharedPairs = 0;
  let subsetPairs = 0;
  for (let i = 0; i < exams.length; i += 1) {
    const a = sectionsOf(exams[i]);
    for (let j = i + 1; j < exams.length; j += 1) {
      const b = sectionsOf(exams[j]);
      const shared = a.filter((section) => b.includes(section));
      const shorter = Math.min(a.length, b.length);
      if (shared.length >= 3 && shared.length >= shorter / 2) {
        sharedPairs += 1;
        if (shared.length === shorter) subsetPairs += 1;
      }
    }
  }

  const reasoningByExam = new Map<string, Set<string>>();
  for (const exam of exams) {
    for (const section of sectionsOf(exam)) {
      if (!isReasoningOnly(section)) continue;
      if (!reasoningByExam.has(exam.slug)) reasoningByExam.set(exam.slug, new Set());
      reasoningByExam.get(exam.slug)!.add(section);
    }
  }
  const headingUse = new Map<string, number>();
  for (const sections of reasoningByExam.values()) {
    for (const section of sections) headingUse.set(section, (headingUse.get(section) ?? 0) + 1);
  }
  const ranked = [...headingUse.entries()].sort((x, y) => y[1] - x[1] || x[0].localeCompare(y[0]));
  const usedBy = (n: number) => [...headingUse.values()].filter((count) => count === n).length;

  const named = (name: string) => exams.filter((exam) => sectionsOf(exam).some((s) => s.toLowerCase() === name)).length;

  const marking = markingSpread(exams);

  const pools = getTopicPools();
  const topicQuestions = [...pools.values()].reduce((total, pool) => total + pool.questions.length, 0);
  const pool = (slug: string) => pools.get(slug);

  return {
    exams: exams.length,
    sectionNames: sectionNames.size,
    sharedPairs,
    subsetPairs,
    quantitativeAptitudeExams: named('quantitative aptitude'),
    englishLanguageExams: named('english language'),

    reasoningExams: reasoningByExam.size,
    reasoningHeadings: headingUse.size,
    reasoningSections: [...reasoningByExam.values()].reduce((n, set) => n + set.size, 0),
    reasoningRanked: ranked,
    // Headings common enough to name a table row of their own. Everything at
    // two or one is aggregated instead, which is how the published table was
    // built and keeps it readable as the long tail grows.
    reasoningNamed: ranked.filter(([, count]) => count > 2),
    reasoningHeadingsUsedByTwo: usedBy(2),
    reasoningSectionsUnderTwo: usedBy(2) * 2,
    reasoningHeadingsUsedByOne: usedBy(1),

    marking,

    topics: pools.size,
    topicQuestions,
    /** The topic's own display name, so a renamed topic renames itself in the prose. */
    topicName: (slug: string) => pool(slug)?.topic.name ?? slug,
    topicPool: (slug: string) => ({
      questions: pool(slug)?.questions.length ?? 0,
      exams: pool(slug)?.examSlugs.length ?? 0,
    }),
  };
}

export const CORPUS = compute();

/** 8259 reads as 8,259 in prose. Indian grouping is not used here: the posts were written with thousands separators. */
export function n(value: number): string {
  return value.toLocaleString('en-US');
}

/** Spelled-out cardinals, for the handful of counts a sentence opens with. */
const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
export function word(value: number): string {
  if (value <= 20) return WORDS[value];
  const tens = Math.floor(value / 10) * 10;
  const unit = value % 10;
  const tensWord = { 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty', 70: 'seventy', 80: 'eighty', 90: 'ninety' }[tens];
  if (!tensWord) return String(value);
  return unit === 0 ? tensWord : `${tensWord}-${WORDS[unit]}`;
}

/** "a quarter", "an eighth": unit fractions as the prose says them, with the article attached. */
const FRACTIONS: Record<number, string> = { 2: 'a half', 3: 'a third', 4: 'a quarter', 5: 'a fifth', 6: 'a sixth', 7: 'a seventh', 8: 'an eighth', 9: 'a ninth', 10: 'a tenth' };
export function fraction(denominator: number | undefined, ratio: number): string {
  if (denominator === undefined) return `${ratio} of a mark per mark`;
  return FRACTIONS[denominator] ?? `one ${denominator}th`;
}

export function capitalise(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
