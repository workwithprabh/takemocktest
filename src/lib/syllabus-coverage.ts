import type { ExamConfig, TestStage } from './exams';
import { displayLabel, getQuestionsForTest } from './questions';
import { getExamGuide } from './exam-guides';
import { getSyllabusNote } from './syllabus-notes';

// What this site's own tests cover for an exam, grouped under the exam's
// official section names.
//
// Why it is not called a syllabus. Outbound access to the exam bodies is
// blocked from this environment, so nothing here can read what a body
// publishes. What the repository does hold is two checked things: the stage
// pattern, whose section names, question counts and marks come from the
// notification and carry a source link, and 35,105 questions whose topic
// labels went through the same review as the questions themselves. A topic
// list built from those is a truthful statement about this site's coverage
// and says nothing about what the body published. Every page built on it says
// so in those words.
//
// The four banking syllabus pages already live make the same distinction by
// hand, and since 17 September 2026 the guide data types it: a topicSections
// block declares topicsSource as 'official' or 'platform-map'. This module
// produces the second kind.

export interface CoveredSection {
  /** The official section name, as the pattern records it. */
  name: string;
  /** From the official breakdown, where the pattern publishes one. */
  questions?: number;
  marks?: number;
  /** Cleaned, grouped topic lines, heaviest first. */
  topics: string[];
  /** Distinct labels behind those lines, before capping. */
  labelCount: number;
  /** How many questions carry those labels. */
  questionCount: number;
}

/**
 * How many lines a section prints. The bank labels are not written to be read
 * as a list: SRMJEEE Physics carries 118 of them, including "Work Energy and
 * Power" and "Work, Energy and Power" as separate entries, and AILET tags 199
 * distinct labels under Law, most of them on a single question. Dumping either
 * is worse than printing nothing. The lines below are deduplicated, grouped by
 * their own family prefix and cut to the ones carrying the most questions, and
 * the page says how many of the total it is showing.
 */
const MAX_LINES_PER_SECTION = 18;
const MAX_LEAVES_PER_FAMILY = 8;

/** Case and punctuation only, so two spellings of one chapter collapse. */
function dedupeKey(label: string): string {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function topicLines(labels: Map<string, number>): { lines: string[]; labelCount: number } {
  // One surface form per chapter: the spelling that carries the most questions.
  const merged = new Map<string, { label: string; count: number }>();
  for (const [raw, count] of labels) {
    const label = displayLabel(raw).replace(/\s+/g, ' ').trim();
    if (!label) continue;
    const key = dedupeKey(label);
    const seen = merged.get(key);
    if (!seen || count > seen.count) merged.set(key, { label, count: (seen?.count ?? 0) + count });
    else seen.count += count;
  }

  // "Physical Chemistry: Atomic Structure" and its siblings become one line.
  const families = new Map<string, { leaves: { label: string; count: number }[]; count: number }>();
  for (const entry of merged.values()) {
    const split = entry.label.indexOf(': ');
    const family = split > 0 ? entry.label.slice(0, split) : entry.label;
    const leaf = split > 0 ? entry.label.slice(split + 2) : '';
    const bucket = families.get(family) ?? { leaves: [], count: 0 };
    if (leaf) bucket.leaves.push({ label: leaf, count: entry.count });
    bucket.count += entry.count;
    families.set(family, bucket);
  }

  // A bank can label the same chapter twice, once inside its family and once
  // bare: VITEEE Mathematics carries "Discrete Mathematics: Sequences and
  // Series" and a plain "Sequences and Series", and printing both made the
  // page list Circle, Probability and six others a second time under nothing.
  // A bare label that already appears as somebody's leaf folds into that
  // family rather than standing as its own line.
  const leafOwners = new Map<string, string>();
  for (const [family, bucket] of families)
    for (const leaf of bucket.leaves) leafOwners.set(dedupeKey(leaf.label), family);
  for (const [family, bucket] of [...families]) {
    if (bucket.leaves.length > 0) continue;
    const owner = leafOwners.get(dedupeKey(family));
    if (!owner || owner === family) continue;
    const target = families.get(owner);
    if (!target) continue;
    target.count += bucket.count;
    families.delete(family);
  }

  const ranked = [...families]
    .sort((a, b) => b[1].count - a[1].count || a[0].localeCompare(b[0]))
    .map(([family, bucket]) => {
      if (bucket.leaves.length === 0) return family;
      const leaves = bucket.leaves.sort((a, b) => b.count - a.count || a.label.localeCompare(b.label));
      const shown = leaves.slice(0, MAX_LEAVES_PER_FAMILY).map((leaf) => leaf.label);
      const rest = leaves.length - shown.length;
      return `${family}: ${shown.join(', ')}${rest > 0 ? `, and ${rest} more` : ''}`;
    });

  return { lines: ranked.slice(0, MAX_LINES_PER_SECTION), labelCount: merged.size };
}

export interface SyllabusCoverage {
  stageName: string;
  sections: CoveredSection[];
  topicCount: number;
  questionCount: number;
  sourceUrl?: string;
  checkedOn?: string;
  cycle?: string;
}

function coverStage(exam: ExamConfig, stage: TestStage): SyllabusCoverage | undefined {
  const pattern = stage.pattern;
  if (pattern.status !== 'official') return undefined;

  // Dedupe by question identity: a sectional test reuses its full-length
  // test's bank, so counting per test would multiply every topic by the
  // number of tests that happen to include it.
  const seen = new Map<string, { section: string; topic: string }>();
  for (const test of stage.tests) {
    if (test.status !== 'checked') continue;
    for (const question of getQuestionsForTest(exam.slug, test.id)) {
      const topic = question.topic?.trim();
      if (!topic || !question.section) continue;
      seen.set(question.id ?? question.question, { section: question.section, topic });
    }
  }
  if (seen.size === 0) return undefined;

  const grouped = new Map<string, { topics: Map<string, number>; questions: number }>();
  for (const { section, topic } of seen.values()) {
    const entry = grouped.get(section) ?? { topics: new Map<string, number>(), questions: 0 };
    entry.topics.set(topic, (entry.topics.get(topic) ?? 0) + 1);
    entry.questions += 1;
    grouped.set(section, entry);
  }

  // Ordered by the official pattern rather than by whatever the bank happened
  // to yield, so the page reads down the paper in the order a candidate sits
  // it. A bank section the pattern does not name is dropped rather than
  // printed under a heading the notification never used.
  const breakdown = pattern.sectionBreakdown ?? [];
  const sections: CoveredSection[] = [];
  for (const name of pattern.sections) {
    const entry = grouped.get(name);
    if (!entry) continue;
    const official = breakdown.find((item) => item.name === name);
    const { lines, labelCount } = topicLines(entry.topics);
    if (lines.length === 0) continue;
    sections.push({
      name,
      questions: official?.questions,
      marks: official?.marks,
      topics: lines,
      labelCount,
      questionCount: entry.questions,
    });
  }
  if (sections.length === 0) return undefined;

  return {
    stageName: stage.name,
    sections,
    topicCount: sections.reduce((total, section) => total + section.labelCount, 0),
    questionCount: sections.reduce((total, section) => total + section.questionCount, 0),
    sourceUrl: pattern.sourceUrl,
    checkedOn: pattern.checkedOn,
    cycle: pattern.cycle,
  };
}

export function getSyllabusCoverage(exam: ExamConfig): SyllabusCoverage[] {
  return exam.stages
    .map((stage) => coverStage(exam, stage))
    .filter((cover): cover is SyllabusCoverage => cover !== undefined);
}

/**
 * The floor for publishing one of these. A page carrying six topic labels
 * tells a reader nothing they could not get from the pattern table, and the
 * whole point of the thin-content gate is that a section of those is worse
 * than no section at all. Twenty-five distinct topics across at least two
 * sections is roughly where the list starts to be worth reading; below it the
 * page stays noindexed and keeps its placeholder.
 */
export const MIN_TOPICS_TO_PUBLISH = 25;

export function isPublishableCoverage(covers: SyllabusCoverage[]): boolean {
  const topics = covers.reduce((total, cover) => total + cover.topicCount, 0);
  const sections = covers.reduce((total, cover) => total + cover.sections.length, 0);
  return topics >= MIN_TOPICS_TO_PUBLISH && sections >= 2;
}

/**
 * The single answer to "does this exam publish a syllabus page?".
 *
 * This condition used to be written out three times: in the syllabus page
 * itself, in sitemap.ts (whose comment asked whoever changed one to keep the
 * other in sync) and in the exam tab bar. The tab bar's copy checked only for
 * a hand-written guide, so the 40 syllabus pages published from coverage were
 * in the sitemap and reachable by URL but linked from nowhere on the site.
 * Duplicating a publish rule is how that happens, so the rule lives here now
 * and the three callers ask it rather than restate it.
 */
export function publishesSyllabus(exam: ExamConfig): boolean {
  if (getExamGuide(exam.slug, 'syllabus')) return true;
  if (!getSyllabusNote(exam.slug)) return false;
  return isPublishableCoverage(getSyllabusCoverage(exam));
}
