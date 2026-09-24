import { EXAMS } from './exams';
import { getCorpusQuestionStats, getQuestionsForTest } from './questions';
import { getTestCoverage } from './test-coverage';
import { deniesSectionalLock } from './exam-pattern-content';
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

/**
 * Seconds a paper allows per question, for every stage whose official pattern
 * states both a question count and a duration. This is the whole arithmetic:
 * duration divided by questions, which is also what a student can work out for
 * their own paper in ten seconds once they know to do it.
 *
 * Stages with a 'review-pending' pattern are excluded, and so is any stage
 * missing either number. The site publishes patterns it has not yet confirmed
 * against a notice, and a pace figure carries more authority than the pattern
 * it came from, so an unconfirmed one has no business in a table of numbers.
 */
function pacePerQuestion(exams: (typeof EXAMS)[keyof typeof EXAMS][]) {
  const rows: { slug: string; exam: string; category: string; stage: string; questions: number; minutes: number; seconds: number }[] = [];
  for (const exam of exams) {
    for (const stage of exam.stages) {
      const pattern = stage.pattern;
      if (pattern.status !== 'official') continue;
      if (!pattern.totalQuestions || !pattern.duration) continue;
      rows.push({
        slug: exam.slug,
        exam: exam.name,
        category: exam.category,
        stage: stage.name,
        questions: pattern.totalQuestions,
        minutes: pattern.duration,
        seconds: (pattern.duration * 60) / pattern.totalQuestions,
      });
    }
  }
  rows.sort((a, b) => a.seconds - b.seconds || a.exam.localeCompare(b.exam));

  const median = (values: number[]) => {
    const sorted = [...values].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
  };
  const all = rows.map((row) => row.seconds);

  // Bands for the table and the diagram. The 55 to 65 band exists to be
  // counted: "about a minute a question" is the advice every forum gives, and
  // the point of the post is how few papers it describes.
  const BANDS: { label: string; lo: number; hi: number }[] = [
    { label: 'Under 45 seconds', lo: 0, hi: 45 },
    { label: '45 to 54 seconds', lo: 45, hi: 55 },
    { label: '55 to 65 seconds', lo: 55, hi: 65 },
    { label: '66 to 90 seconds', lo: 65, hi: 90 },
    { label: '91 to 150 seconds', lo: 90, hi: 150 },
    { label: 'Over 150 seconds', lo: 150, hi: Infinity },
  ];
  const bands = BANDS.map((band) => ({
    ...band,
    stages: rows.filter((row) => row.seconds >= band.lo && row.seconds < band.hi).length,
  }));

  const categories = [...new Set(rows.map((row) => row.category))]
    .map((category) => {
      const inCategory = rows.filter((row) => row.category === category);
      const seconds = inCategory.map((row) => row.seconds);
      return {
        category,
        stages: inCategory.length,
        median: median(seconds),
        fastest: Math.min(...seconds),
        slowest: Math.max(...seconds),
      };
    })
    .sort((a, b) => a.median - b.median || a.category.localeCompare(b.category));

  // Exams whose own papers run at different paces. Reported first-declared
  // against last-declared rather than fastest against slowest, because the
  // direction is the useful part and it is not always the one people expect:
  // RRB NTPC gives less time per question at CBT 2 than at CBT 1.
  const shifts = new Map<string, { exam: string; from: string; fromSeconds: number; to: string; toSeconds: number }>();
  let shiftsSame = 0;
  for (const exam of exams) {
    const staged = rows.filter((row) => row.slug === exam.slug);
    if (staged.length < 2) continue;
    const declared = exam.stages
      .map((stage) => staged.find((row) => row.stage === stage.name))
      .filter((row): row is (typeof rows)[number] => row !== undefined);
    if (declared.length < 2) continue;
    const first = declared[0];
    const last = declared[declared.length - 1];
    if (Math.abs(last.seconds - first.seconds) < 0.5) {
      shiftsSame += 1;
      continue;
    }
    shifts.set(exam.slug, {
      exam: exam.name,
      from: first.stage,
      fromSeconds: first.seconds,
      to: last.stage,
      toSeconds: last.seconds,
    });
  }

  const fastestSeconds = all[0];
  const atFastest = rows.filter((row) => Math.abs(row.seconds - fastestSeconds) < 0.5);

  return {
    stages: rows.length,
    exams: new Set(rows.map((row) => row.slug)).size,
    median: median(all),
    fastestSeconds,
    slowestSeconds: all[all.length - 1],
    /** Every stage tied at the fastest pace on the site, which is not a one-off. */
    atFastest: atFastest.length,
    atFastestExams: [...new Set(atFastest.map((row) => row.exam))],
    slowest: rows[rows.length - 1],
    bands,
    /** The band the "about a minute a question" advice describes. */
    oneMinuteBand: bands.find((band) => band.label === '55 to 65 seconds')!.stages,
    categories,
    categoryMedian: (category: string) => categories.find((entry) => entry.category === category),
    multiPaperExams: shifts.size + shiftsSame,
    sameAtEveryPaper: shiftsSame,
    shift: (slug: string) => shifts.get(slug),
    /**
     * Just the paces, for the calculator to rank a reader's own paper against.
     * Labels are deliberately absent. A first cut passed the full list of
     * {exam, stage, questions, minutes} so the widget could offer a picker,
     * and rendering 167 option elements put 871 words of exam names into the
     * post: 39% of the page's text was a name dump burying a 1,360-word
     * argument. Numbers travel in the flight payload instead of the prose, so
     * this costs about a kilobyte and pollutes nothing.
     */
    paces: all.map((seconds) => Number(seconds.toFixed(3))),
    /** An exam's quickest stage, which is the one a reader is usually asking about. Rows are sorted by pace, so the first match is that stage. */
    fastestStageOf: (slug: string) => rows.find((entry) => entry.slug === slug),
  };
}

/**
 * What one question is worth, for every stage whose official pattern states
 * both a question count and a total. Marks divided by questions, which is the
 * conversion a raw score is meaningless without.
 *
 * Same exclusion rule as pacePerQuestion: 'review-pending' patterns are left
 * out, because a derived figure reads as more authoritative than the pattern
 * it came from.
 *
 * A caution the prose has to carry rather than the data: a whole-paper average
 * hides an uneven paper. IBPS PO Mains averages 1.31 marks a question only
 * because two descriptive questions carry 12.5 each; its English section is
 * half a mark. `unevenPapers` counts the papers where that is true so the post
 * can say how common it is instead of implying it is rare.
 */
function marksPerQuestion(exams: (typeof EXAMS)[keyof typeof EXAMS][]) {
  const rows: { slug: string; exam: string; stage: string; questions: number; marks: number; perQuestion: number }[] = [];
  const sectionsByStage = new Map<string, { name: string; questions: number; marks: number; perQuestion: number }[]>();
  let unevenPapers = 0;

  for (const exam of exams) {
    for (const stage of exam.stages) {
      const pattern = stage.pattern;
      if (pattern.status !== 'official') continue;

      const breakdown = (pattern.sectionBreakdown ?? []).filter((section) => section.questions && section.marks);
      if (breakdown.length > 1) {
        const per = breakdown.map((section) => section.marks / section.questions);
        // A hundredth of a mark apart is rounding in the notice, not a weighting.
        if (Math.max(...per) - Math.min(...per) >= 0.01) unevenPapers += 1;
        sectionsByStage.set(`${exam.slug}::${stage.name}`, breakdown.map((section) => ({
          name: section.name,
          questions: section.questions,
          marks: section.marks,
          perQuestion: section.marks / section.questions,
        })));
      }

      if (!pattern.totalQuestions || !pattern.totalMarks) continue;
      rows.push({
        slug: exam.slug,
        exam: exam.name,
        stage: stage.name,
        questions: pattern.totalQuestions,
        marks: pattern.totalMarks,
        perQuestion: pattern.totalMarks / pattern.totalQuestions,
      });
    }
  }

  rows.sort((a, b) => a.perQuestion - b.perQuestion || a.exam.localeCompare(b.exam));
  const distinct = new Set(rows.map((row) => Number(row.perQuestion.toFixed(2))));

  return {
    stages: rows.length,
    distinctValues: distinct.size,
    atOneMark: rows.filter((row) => Math.abs(row.perQuestion - 1) < 0.005).length,
    cheapest: rows[0],
    dearest: rows[rows.length - 1],
    unevenPapers,
    /** A named stage, for the worked examples. Matched on a substring of the stage name. */
    stage: (slug: string, contains?: string) =>
      rows.find((row) => row.slug === slug && (contains === undefined || row.stage.includes(contains))),
    sectionsOf: (slug: string, stageName: string) => sectionsByStage.get(`${slug}::${stageName}`) ?? [],
  };
}

/**
 * A stated duration is not always a sitting, and seven of the patterns here
 * say so in their own notes.
 *
 * CMA Final's objective stage reads 540 minutes because this site groups the
 * Section A blocks of ten separately sat papers under one heading; its note
 * says outright that "no candidate sits 150 questions in one session". KCET's
 * 240 minutes is three 80-minute subject papers that auto-submit in turn.
 * Aggregating those into a "longest exam" table would have produced a
 * nine-hour paper that does not exist.
 *
 * So the aggregates are detected from the wording the patterns already carry
 * and excluded, leaving stages a candidate really does sit end to end. The
 * count of what was excluded is returned too, because the exclusion is part of
 * the finding rather than a tidy-up.
 */
const NOT_ONE_SITTING = /not an official combined paper|no candidate sits|not one free|separately timed official|separately sat papers/i;

function sittingLength(exams: (typeof EXAMS)[keyof typeof EXAMS][]) {
  const rows: { exam: string; category: string; stage: string; minutes: number; questions?: number }[] = [];
  let aggregatesExcluded = 0;
  let singleStage = 0;
  let multiStage = 0;
  const multiStageNames: string[] = [];

  for (const exam of exams) {
    const official = exam.stages.filter((stage) => stage.pattern.status === 'official');
    if (official.length === 1) singleStage += 1;
    else if (official.length > 1) { multiStage += 1; multiStageNames.push(exam.name); }

    for (const stage of official) {
      const pattern = stage.pattern;
      if (!pattern.duration) continue;
      if (NOT_ONE_SITTING.test(`${pattern.note ?? ''} ${pattern.timerNote ?? ''}`)) {
        aggregatesExcluded += 1;
        continue;
      }
      rows.push({
        exam: exam.name,
        category: exam.category,
        stage: stage.name,
        minutes: pattern.duration,
        questions: pattern.totalQuestions,
      });
    }
  }

  rows.sort((a, b) => a.minutes - b.minutes || a.exam.localeCompare(b.exam));
  const median = (values: number[]) => [...values].sort((a, b) => a - b)[Math.floor(values.length / 2)];
  const minutes = rows.map((row) => row.minutes);

  const BANDS: { label: string; lo: number; hi: number }[] = [
    { label: 'Under 60 minutes', lo: 0, hi: 60 },
    { label: '60 to 90 minutes', lo: 60, hi: 91 },
    { label: '91 to 120 minutes', lo: 91, hi: 121 },
    { label: '121 to 180 minutes', lo: 121, hi: 181 },
    { label: 'Over 180 minutes', lo: 181, hi: Infinity },
  ];

  const categories = [...new Set(rows.map((row) => row.category))]
    .map((category) => {
      const inCategory = rows.filter((row) => row.category === category);
      return { category, stages: inCategory.length, median: median(inCategory.map((row) => row.minutes)) };
    })
    .sort((a, b) => a.median - b.median || a.category.localeCompare(b.category));

  return {
    stages: rows.length,
    aggregatesExcluded,
    median: median(minutes),
    shortest: rows[0],
    longest: rows[rows.length - 1],
    bands: BANDS.map((band) => ({ ...band, stages: rows.filter((row) => row.minutes >= band.lo && row.minutes < band.hi).length })),
    categories,
    categoryMedian: (category: string) => categories.find((entry) => entry.category === category),
    /** Exams whose whole published selection is one official paper. */
    singleStage,
    multiStage,
    multiStageNames,
  };
}

/**
 * How many official stages actually lock their sections to separate clocks.
 *
 * The post this feeds opened with "roughly nine exams use a sectional lock,
 * while about twelve use a composite timer", typed by hand in August 2026. The
 * real figures are more than twice that, which is the decay this whole file
 * exists to stop.
 *
 * A lock is read the way the exam pattern pages read it: the stage publishes
 * per-section durations and its own timing note does not deny one. The denial
 * check is imported rather than repeated, because duplicating it is what let
 * UPSC CSE claim a sectional lock its own note denied.
 */
function sectionalLocks(exams: (typeof EXAMS)[keyof typeof EXAMS][]) {
  let stages = 0;
  let locked = 0;
  let oneClock = 0;
  let noBreakdown = 0;
  const byCategory = new Map<string, { locked: number; stages: number }>();

  for (const exam of exams) {
    for (const stage of exam.stages) {
      const pattern = stage.pattern;
      if (pattern.status !== 'official') continue;
      stages += 1;

      const timedSections = deniesSectionalLock(pattern.timerNote)
        ? 0
        : pattern.sectionBreakdown?.filter((section) => section.duration).length ?? 0;
      const isLocked = timedSections > 1;

      if (isLocked) locked += 1;
      else if ((pattern.sectionBreakdown?.length ?? 0) > 1) oneClock += 1;
      else noBreakdown += 1;

      const entry = byCategory.get(exam.category) ?? { locked: 0, stages: 0 };
      entry.stages += 1;
      if (isLocked) entry.locked += 1;
      byCategory.set(exam.category, entry);
    }
  }

  const categories = [...byCategory.entries()]
    .map(([category, counts]) => ({ category, ...counts }))
    .sort((a, b) => b.locked - a.locked || a.category.localeCompare(b.category));

  return {
    stages,
    locked,
    oneClock,
    noBreakdown,
    withLocks: categories.filter((entry) => entry.locked > 0),
    forCategory: (category: string) => categories.find((entry) => entry.category === category),
  };
}

/**
 * The first and last official stage of an exam, with what each one tests.
 *
 * Used by the posts that talk about the gap between a shortlisting paper and
 * the one that decides. It returns papers, not selection stages: this site's
 * `stages` array also holds same-day papers, qualification levels and separate
 * exams that share a slug, so a caller naming a funnel has to know its exam is
 * one. See the caveat section in most-exams-are-one-paper.
 *
 * `addedSections` compares section names literally and is therefore a rough
 * signal, not a count to quote. IBPS PO Prelims lists "Reasoning Ability" and
 * its Mains lists "Reasoning", so the diff reports a section as new when the
 * subject carried over under a shorter name. Use it to find candidates for a
 * sentence, then name the genuinely new ones by hand.
 */
function funnelStages(exams: (typeof EXAMS)[keyof typeof EXAMS][]) {
  const byExam = new Map<string, { first: StageFacts; last: StageFacts; addedSections: string[] }>();
  for (const exam of exams) {
    const official = exam.stages.filter((stage) => stage.pattern.status === 'official');
    if (official.length < 2) continue;
    const facts = (stage: (typeof official)[number]): StageFacts => ({
      exam: exam.name,
      name: stage.name,
      sections: stage.pattern.sections ?? [],
      questions: stage.pattern.totalQuestions,
      minutes: stage.pattern.duration,
    });
    const first = facts(official[0]);
    const last = facts(official[official.length - 1]);
    byExam.set(exam.slug, {
      first,
      last,
      addedSections: last.sections.filter((section) => !first.sections.includes(section)),
    });
  }
  return (slug: string) => byExam.get(slug);
}

/**
 * Awareness sections: how much of a paper is the part whose answers expire.
 *
 * A general-awareness or current-affairs section is the one part of a paper
 * that practice material cannot carry for long, because a question about last
 * month's appointment stops being checkable the moment the fact moves. This
 * site does not build those sections for exactly that reason, and the
 * coverage line on every full-length test says so. The figures here let a post
 * say how much of a paper that leaves unrehearsed without anyone typing a
 * percentage into prose.
 *
 * Only a section that is awareness and nothing else is measured. Four papers
 * bundle general knowledge with another subject under one heading, and
 * charging that heading's whole mark count to awareness turned AP LAWCET into
 * a paper that is half general knowledge when the heading it comes from is
 * "General Knowledge and Mental Ability". Those four are counted separately
 * and named rather than folded into the share.
 *
 * A paper is dropped whole rather than measured on its clean sections alone.
 * AP LAWCET also carries a 30-question Current Affairs section, so counting
 * only that would report its awareness weight as a quarter while a second
 * section is still asking general knowledge. Neither figure is honest on its
 * own, so the paper is named in the caveat instead of given a number.
 */
const AWARENESS =
  /general awareness|general knowledge|current affairs|banking awareness|financial awareness|economic and business environment|general studies/i;

/** An awareness heading that also names another subject, so its marks are not all awareness. */
const AWARENESS_MIXED = /reasoning|english|aptitude|mental ability|mathemat|quantitative|etc\./i;

function awarenessWeight(exams: (typeof EXAMS)[keyof typeof EXAMS][]) {
  const rows: { exam: string; slug: string; category: string; stage: string; questions: number; marks: number; total: number; share: number }[] = [];
  const mixed: { exam: string; stage: string; section: string }[] = [];
  const names = new Set<string>();
  let papers = 0;

  for (const exam of exams) {
    for (const stage of exam.stages) {
      const pattern = stage.pattern;
      if (pattern.status !== 'official') continue;
      const breakdown = pattern.sectionBreakdown ?? [];
      if (breakdown.length === 0) continue;
      papers += 1;

      const totalMarks = breakdown.reduce((sum, section) => sum + (section.marks || 0), 0);
      if (totalMarks === 0) continue;
      const awareness = breakdown.filter((section) => AWARENESS.test(section.name));
      if (awareness.length === 0) continue;

      const impure = awareness.filter((section) => AWARENESS_MIXED.test(section.name));
      if (impure.length > 0) {
        for (const section of impure) mixed.push({ exam: exam.name, stage: stage.name, section: section.name });
        continue;
      }

      for (const section of awareness) names.add(section.name);
      const marks = awareness.reduce((sum, section) => sum + (section.marks || 0), 0);
      rows.push({
        exam: exam.name,
        slug: exam.slug,
        category: exam.category,
        stage: stage.name,
        questions: awareness.reduce((sum, section) => sum + (section.questions || 0), 0),
        marks,
        total: totalMarks,
        share: (100 * marks) / totalMarks,
      });
    }
  }

  rows.sort((a, b) => b.share - a.share || a.exam.localeCompare(b.exam));
  const shares = rows.map((row) => row.share).sort((a, b) => a - b);

  // Full-length tests on this site that stop short of the official paper
  // because an awareness section is not built. Read from the same function
  // the test pages print, so the post and the page cannot disagree.
  let fullLength = 0;
  const shortExams = new Set<string>();
  let short = 0;
  for (const exam of exams) {
    for (const stage of exam.stages) {
      for (const test of stage.tests) {
        if (test.kind !== 'full-length' || test.status !== 'checked') continue;
        const coverage = getTestCoverage(exam, stage, test, getQuestionsForTest(exam.slug, test.id));
        if (!coverage) continue;
        fullLength += 1;
        if (!coverage.complete && AWARENESS.test(coverage.label)) {
          short += 1;
          shortExams.add(exam.name);
        }
      }
    }
  }

  const byCategory = [...new Set(rows.map((row) => row.category))]
    .map((category) => ({
      category,
      papers: rows.filter((row) => row.category === category).length,
      total: exams
        .filter((exam) => exam.category === category)
        .reduce(
          (sum, exam) =>
            sum +
            exam.stages.filter((stage) => stage.pattern.status === 'official' && (stage.pattern.sectionBreakdown?.length ?? 0) > 0)
              .length,
          0,
        ),
    }))
    .sort((a, b) => b.papers - a.papers || a.category.localeCompare(b.category));

  return {
    /** Official patterns publishing a section breakdown, which is what a share can be taken of. */
    papers,
    /** Of those, the ones with a section that is awareness and nothing else. */
    withAwareness: rows.length,
    /** Distinct headings those sections go by. */
    headings: names.size,
    median: shares[Math.floor(shares.length / 2)],
    atQuarter: rows.filter((row) => Math.abs(row.share - 25) < 0.01).length,
    atFifthOrMore: rows.filter((row) => row.share >= 20).length,
    heaviest: rows.slice(0, 5),
    lightest: rows[rows.length - 1],
    byCategory,
    forCategory: (category: string) => byCategory.find((entry) => entry.category === category),
    /** Papers that fold awareness into a heading shared with another subject. */
    mixed,
    fullLength,
    /** Full-length tests here that leave an awareness section unbuilt. */
    short,
    shortExams: shortExams.size,
  };
}

/**
 * Patterns this site records as revised, and the facts of any stage a post
 * wants to name.
 *
 * `revised` counts the patterns whose own note says the paper changed. It is a
 * floor and nothing more: it reads prose, so an exam body that changed a paper
 * without our note saying so is not in it. Quote it as "at least", the way
 * funnelStages' addedSections is quoted as a signal rather than a count.
 *
 * `facts` exists so a post naming a paper takes its current shape from the
 * pattern rather than repeating it. The figure a post contrasts it against,
 * what the paper used to be, is a fact about the exam body and not about this
 * corpus, so it stays in the prose with the note that records it.
 */
const PATTERN_REVISED =
  /\brevis(?:ed|ion)\b|\bup from\b|\bdown from\b|\breduc(?:ed|ing)\b|\bincreased from\b|\bearlier cycles?\b|\bprevious cycles?\b|\bno longer\b|\bremoved from the scored\b|\bdiscontinued\b/i;

/**
 * A postponed sitting is not a revised paper. CTET's note says "the revised
 * examination date is to be announced", which is the one phrase above that
 * matches a note describing no change to the paper at all, so it comes out
 * before the test runs.
 */
const REVISED_DATE_ONLY = /revised (?:examination|exam) date/i;

function patternRevisions(exams: (typeof EXAMS)[keyof typeof EXAMS][]) {
  let stages = 0;
  let withCycle = 0;
  let withSource = 0;
  let revised = 0;
  let pending = 0;
  const byStage = new Map<string, { exam: string; slug: string; stage: string; cycle?: string; questions?: number; marks?: number; minutes?: number; options: number }>();

  for (const exam of exams) {
    for (const stage of exam.stages) {
      const pattern = stage.pattern;
      stages += 1;
      if (pattern.cycle) withCycle += 1;
      if (pattern.status === 'review-pending') pending += 1;
      if (pattern.sourceUrl) withSource += 1;
      if (pattern.note && PATTERN_REVISED.test(pattern.note.replace(REVISED_DATE_ONLY, ''))) revised += 1;
      byStage.set(`${exam.slug}/${stage.name}`, {
        exam: exam.name,
        slug: exam.slug,
        stage: stage.name,
        cycle: pattern.cycle,
        questions: pattern.totalQuestions,
        marks: pattern.totalMarks,
        minutes: pattern.duration,
        options: pattern.optionCount ?? 4,
      });
    }
  }

  return {
    stages,
    withCycle,
    withSource,
    revised,
    /** Stages whose pattern is published but still marked for review. */
    pending,
    facts: (slug: string, stage: string) => byStage.get(`${slug}/${stage}`),
  };
}

interface StageFacts {
  exam: string;
  name: string;
  sections: string[];
  questions?: number;
  minutes?: number;
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
  const pace = pacePerQuestion(exams);
  const marksPer = marksPerQuestion(exams);
  const sitting = sittingLength(exams);
  const locks = sectionalLocks(exams);
  const funnel = funnelStages(exams);
  const awareness = awarenessWeight(exams);
  const revisions = patternRevisions(exams);
  const corpus = getCorpusQuestionStats();

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
    pace,
    marksPer,
    sitting,
    locks,
    funnel,
    awareness,
    revisions,
    corpus,

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

/** A count as a whole-number percentage of a total, for prose that states both. */
export function share(count: number, total: number): number {
  return Math.round((count / total) * 100);
}

/** One decimal place, for the answer-position split where whole numbers hide the point. */
export function share1(count: number, total: number): string {
  return ((count / total) * 100).toFixed(1);
}

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

/**
 * The accuracy at which a guess stops costing marks. With +m for a correct
 * answer and -n for a wrong one, that point is n / (m + n), so it depends only
 * on the penalty as a fraction of a correct answer.
 *
 * This is the same arithmetic src/lib/exam-pattern-content.ts states on every
 * exam pattern page. It is here because until 23 September 2026 the
 * negative-marking post contradicted those pages: it told readers a blind
 * four-option guess was "close to break-even or slightly negative" and better
 * left blank, when under the site's commonest scheme the break-even is 20% and
 * a blind guess returns 25%. The post was advising students to leave marks
 * behind on 716 of the 1,439 tests published here.
 */
export function breakEvenPercent(ratio: number): number {
  return Math.round((ratio / (1 + ratio)) * 100);
}

/** What a blind guess returns on a question with this many options, as a percentage. */
export function blindGuessPercent(options: number): number {
  return Math.round(100 / options);
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
