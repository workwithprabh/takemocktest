// The declared search target for every page class on the site.
//
// Until now nothing recorded what a page was supposed to rank for. Titles and
// descriptions were written per template by whoever built the template, which
// is how 1,123 test pages ended up named after internal artefacts: 1,110 of
// their H1s end in a serial number, 440 titles carried the word "Instructions",
// and not one title contained "questions". Those pages read as a filing system
// rather than as answers to anything a candidate types.
//
// This file is the single place that says, per class: the one keyword the page
// is for, what the searcher wants, and the shape the title, H1 and description
// must take. `scripts/audit-keyword-map.mjs` enforces it against the built
// export, so a template change that quietly drops the target keyword fails the
// build instead of being discovered months later in Search Console.
//
// That sentence described a script that did not exist until 10 September 2026.
// The map was documentation claiming to be a gate, which is how twelve exam
// category pages shipped with an H1 of "Engineering & Technology" while their
// own declared target was "{category} exams" and their titles had said
// "{category} Exams in India" the whole time. The audit is real now and runs in
// `npm run qa:site`; the first thing it did was find those twelve.
//
// Rule of one: a keyword belongs to exactly one page class per country. Where
// two classes could plausibly claim the same phrase, the more specific class
// qualifies its own. That is what OWNS/DEFERS below record.

export interface KeywordTarget {
  /** Human label for the class, used in audit output. */
  readonly page: string;
  /** URL shape, with {exam}, {section}, {topic}, {slug} standing for segments. */
  readonly path: string;
  /** The one phrase this class is written for. Braces are substituted per page. */
  readonly primary: string;
  /** What the person typing that phrase actually wants. */
  readonly intent: 'transactional' | 'informational' | 'browse' | 'news';
  /** Words that must appear in the rendered <title>, after substitution. */
  readonly titleMustContain: readonly string[];
  /** Words that must appear in the rendered <h1>, after substitution. */
  readonly h1MustContain: readonly string[];
  /** Why this class does not claim a broader phrase, where that matters. */
  readonly defersTo?: string;
  readonly notes?: string;
}

export const KEYWORD_MAP: readonly KeywordTarget[] = [
  {
    page: 'Country home',
    path: '/{country}',
    primary: 'free online mock test',
    intent: 'transactional',
    titleMustContain: ['mock test'],
    h1MustContain: ['mock test'],
    notes: 'The only page allowed the unqualified head term. Everything below qualifies by exam, section or topic.',
  },
  {
    page: 'Exam directory',
    path: '/{country}/exams',
    primary: 'competitive exams list',
    intent: 'browse',
    titleMustContain: ['exams'],
    h1MustContain: ['exam'],
  },
  {
    page: 'Exam category',
    path: '/{country}/exams/{category}',
    primary: '{category} exams',
    intent: 'browse',
    titleMustContain: ['exams'],
    h1MustContain: ['exam'],
  },
  {
    page: 'Exam hub',
    path: '/{country}/{exam}',
    primary: '{exam}',
    intent: 'informational',
    titleMustContain: ['{exam}'],
    h1MustContain: ['{exam}'],
    defersTo: 'The mock-test hub owns "{exam} mock test". This page answers "what is this exam".',
  },
  {
    page: 'Mock test hub',
    path: '/{country}/{exam}/mock-test',
    primary: '{exam} mock test',
    intent: 'transactional',
    titleMustContain: ['{exam}', 'mock test'],
    h1MustContain: ['{exam}', 'mock test'],
    notes: 'The money page for each exam, and the only page that may claim the bare "{exam} mock test".',
  },
  {
    page: 'Full mock test',
    path: '/{country}/{exam}/test/{full-mock}',
    primary: '{exam} full mock test',
    intent: 'transactional',
    titleMustContain: ['{exam}', 'mock test'],
    h1MustContain: ['{exam}', 'mock test'],
    defersTo: 'Qualified by "full" and by its own number so it does not compete with the mock-test hub.',
  },
  {
    page: 'Sectional test',
    path: '/{country}/{exam}/test/{sectional}',
    primary: '{exam} {section} mock test',
    intent: 'transactional',
    titleMustContain: ['{exam}', '{section}', 'mock test'],
    h1MustContain: ['{exam}', '{section}', 'mock test'],
    defersTo: 'Always qualified by section. This is the long tail and the largest class on the site.',
    notes: 'Where an exam has more than one stage, the stage is part of the name too, or Prelims and Mains collide.',
  },
  {
    page: 'Exam pattern',
    path: '/{country}/{exam}/exam-pattern',
    primary: '{exam} exam pattern',
    intent: 'informational',
    titleMustContain: ['{exam}', 'pattern'],
    h1MustContain: ['{exam}', 'pattern'],
  },
  {
    page: 'Syllabus',
    path: '/{country}/{exam}/syllabus',
    primary: '{exam} syllabus',
    intent: 'informational',
    titleMustContain: ['{exam}', 'syllabus'],
    h1MustContain: ['{exam}', 'syllabus'],
  },
  {
    page: 'Eligibility',
    path: '/{country}/{exam}/eligibility',
    primary: '{exam} eligibility',
    intent: 'informational',
    titleMustContain: ['{exam}', 'eligibility'],
    h1MustContain: ['{exam}', 'eligibility'],
  },
  {
    page: 'Selection process',
    path: '/{country}/{exam}/selection-process',
    primary: '{exam} selection process',
    intent: 'informational',
    titleMustContain: ['{exam}', 'selection process'],
    h1MustContain: ['{exam}', 'selection process'],
  },
  {
    page: 'Salary',
    path: '/{country}/{exam}/salary',
    primary: '{exam} salary',
    intent: 'informational',
    titleMustContain: ['{exam}', 'salary'],
    h1MustContain: ['{exam}', 'salary'],
  },
  {
    page: 'Previous year papers',
    path: '/{country}/{exam}/previous-year-papers',
    primary: '{exam} previous year question papers',
    intent: 'informational',
    titleMustContain: ['{exam}', 'previous year'],
    h1MustContain: ['{exam}', 'previous year'],
  },
  {
    page: 'Topic practice',
    path: '/{country}/practice/{topic}',
    primary: '{topic} questions with answers',
    intent: 'transactional',
    titleMustContain: ['{topic}', 'questions'],
    h1MustContain: ['{topic}'],
    defersTo: 'Exam-agnostic by design, so it never claims an exam name.',
  },
  {
    page: 'Topic practice index',
    path: '/{country}/practice',
    primary: 'topic wise practice questions',
    intent: 'browse',
    titleMustContain: ['practice'],
    h1MustContain: ['practice'],
  },
  {
    page: 'Reasoning hub',
    path: '/{country}/logical-reasoning',
    primary: 'logical reasoning questions',
    intent: 'transactional',
    titleMustContain: ['logical reasoning'],
    h1MustContain: ['logical reasoning'],
  },
  {
    page: 'Blog post',
    path: '/{country}/blog/{slug}',
    primary: 'per post, in the primaryKeyword field of src/lib/blog.ts',
    intent: 'informational',
    titleMustContain: [],
    h1MustContain: [],
    notes: 'The one class where the target is per page rather than per template, so the map cannot state it here. Until 10 September 2026 this line pointed at a field that did not exist and every post fell back to an H1 the generator inferred; primaryKeyword is now required on BlogPost, so the claim is checkable. A post must not take a phrase another class owns: exam pattern, syllabus, eligibility and mock-test keywords belong to that exam\'s pages, so posts target the question or comparison a student types instead.',
  },
  {
    page: 'Exam updates',
    path: '/{country}/exam-updates/{slug}',
    primary: '{exam} notification',
    intent: 'news',
    titleMustContain: [],
    h1MustContain: [],
  },
];

/** The classes whose targets the audit can check mechanically. */
export const GATED_CLASSES = KEYWORD_MAP.filter((target) => target.titleMustContain.length > 0);
