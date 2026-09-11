import { getExam } from './exams';
import { isExamInCountry } from './exam-countries';

// Related mock tests, grouped by the decision a candidate is actually making.
//
// Somebody on the SSC CGL page is usually choosing between SSC CGL, CHSL, MTS
// and GD, not browsing 165 exams. Until now the mock-test hub offered an exam
// overview, its own test list, shared Reasoning tests, blog posts and FAQs, and
// no direct route to the sibling exam they were weighing it against. That left
// the site's highest-intent pages linked to everything except each other.
//
// Three clusters, because that is how the search intent actually splits: the
// SSC family, the railway boards, and the banking and insurance exams. A page
// links to the others in its own cluster and nowhere else. Four links, not
// twenty, so the block stays a genuine shortlist rather than a footer.
const CLUSTERS: readonly (readonly string[])[] = [
  // Order matters: only the first MAX_LINKS survive, so each cluster lists its
  // largest and most-searched exams first.
  ['ssc-cgl', 'ssc-chsl', 'ssc-mts', 'ssc-gd-constable', 'ssc-cpo',
   'ssc-selection-post', 'ssc-je', 'ssc-steno', 'ssc-cht'],
  ['rrb-ntpc', 'rrb-group-d', 'rrb-alp', 'rrb-je', 'rrb-technician', 'rpf-constable', 'rpf-si'],
  ['ibps-po', 'ibps-clerk', 'sbi-po', 'sbi-clerk', 'rbi-assistant', 'rbi-grade-b',
   'ibps-rrb-office-assistant', 'ibps-rrb-officer-scale-1', 'niacl-ao', 'lic-aao'],
  // The regulator and development-bank Grade A exams. RBI Grade B appears here
  // as a destination but resolves to the banking cluster for its own page,
  // since that is the comparison its candidates are actually making. These
  // blocks are shortlists rather than a reciprocal graph, so that is fine.
  ['sebi-grade-a', 'nabard-grade-a', 'sidbi-grade-a-b', 'rbi-grade-b'],
  // Teacher eligibility. Different levels of the same decision: school
  // teaching for CTET, lectureship for UGC NET and its state counterpart.
  ['ctet', 'ugc-net', 'state-set'],
];

const MAX_LINKS = 4;

export interface RelatedExam {
  readonly slug: string;
  /** Descriptive anchor text: the phrase the destination page is written for. */
  readonly label: string;
}

export function getRelatedExams(slug: string, country: string): RelatedExam[] {
  const cluster = CLUSTERS.find((group) => group.includes(slug));
  if (!cluster) return [];
  return cluster
    .filter((other) => other !== slug)
    // A link to a country that does not publish the exam would be dead, and
    // audit-internal-links.mjs would fail the build rather than let it ship.
    .filter((other) => isExamInCountry(other, country))
    .map((other) => {
      const exam = getExam(other);
      return exam ? { slug: other, label: `${exam.shortName ?? exam.name} Mock Test` } : undefined;
    })
    .filter((item): item is RelatedExam => Boolean(item))
    .slice(0, MAX_LINKS);
}
