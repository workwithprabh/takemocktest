// The single source of truth for "this section is pure logical reasoning".
//
// Three things depend on this list and MUST agree, or the hub silently drifts
// out of step with the site around it:
//   1. scripts/build-lr-pool.mjs — decides which questions enter the hub pool
//   2. the exam test page — decides whether to offer the hub as a next step
//   3. the hub itself — describes what it draws from
// Hence a module with no imports: the .mjs script transpiles and evaluates this
// file directly rather than keeping its own copy.
//
// Membership rule: the section must be reasoning ALONE. A section that mixes
// reasoning with arithmetic, English or computer knowledge is excluded, because
// a person sent to the hub from it would meet a narrower thing than they left.
export const LR_SOURCE_SECTIONS = [
  'General Intelligence and Reasoning',
  'Reasoning',
  'Reasoning Ability',
  'Logical Reasoning',
  'General Intelligence',
  'Reasoning and General Intelligence',
  'Reasoning Aptitude',
  'Test of Reasoning',
  'Reasoning Ability and Problem Solving',
  'Verbal Reasoning',
  'Logical / Abstract Reasoning',
  'Abstract Reasoning',
  'Analytical and Logical Reasoning',
  'Logical reasoning and analytical ability',
  'Logical Reasoning I',
  'Logical Reasoning II',
  'Logical Intelligence',
  'Reasoning and Logical Deduction',
  'Logical and Analytical Reasoning',
  'Analytical Reasoning',
  'Analytical Reasoning Skills I',
  'Analytical Reasoning Skills II',
  'Intelligence and Critical Reasoning',
] as const;

const sectionSet = new Set<string>(LR_SOURCE_SECTIONS);

export function isLRSourceSection(section: string): boolean {
  return sectionSet.has(section);
}
