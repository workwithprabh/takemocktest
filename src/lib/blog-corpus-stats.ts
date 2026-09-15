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

export function capitalise(value: string): string {
  return value.charAt(0).toUpperCase() + value.slice(1);
}
