// Which exams each country subfolder lists.
//
// Until now every route was `/[country]/...` with COUNTRIES = ['in'], so the
// cross product of countries and exams was the whole catalogue and nobody had
// to say who owned what. The moment a second country exists that stops being
// true: generating all 164 Indian exams under `/ng/` would publish hundreds of
// pages irrelevant to a Nigerian student, which is duplicate, thin, and exactly
// the index bloat the thin-content and drift gates exist to prevent.
//
// So ownership is declared here, in one file, rather than spread across a
// `country` field on 164 exam entries in a 13,000-line module. Adding a country
// means editing this file and COUNTRIES; nothing else needs to know.
//
// Three cases, in the order they are resolved:
//   1. An exam listed in COUNTRY_EXAMS for a country belongs to that country.
//   2. An exam in INTERNATIONAL_EXAMS belongs to every country.
//   3. Everything else belongs to DEFAULT_COUNTRY.
import { COUNTRIES, EXAM_LIST, type CountrySlug, type ExamSlug } from './exams';

export const DEFAULT_COUNTRY: CountrySlug = 'in';

// Exams that are the same exam wherever the candidate happens to live. A
// Nigerian student sits the same SAT as an Indian one, from the same board,
// against the same syllabus, so these appear under every country rather than
// being duplicated per country. This is the one legitimate case of an exam page
// existing in more than one subfolder, and it is why hreflang matters for them.
const INTERNATIONAL_EXAMS = new Set<ExamSlug>([
  'sat',
  'act',
  'gre',
  'gmat',
  'lsat',
  'mcat',
  'ielts',
  'toefl',
  'pte',
  'oet',
  'frm',
]);

// Exams owned by a specific country. Empty for now: Nigeria's JAMB, WAEC and
// NECO land here when their content does, and until then `/ng/` cannot be
// generated at all, which is deliberate. Phase 1 is capability, not launch.
const COUNTRY_EXAMS: Partial<Record<CountrySlug, readonly ExamSlug[]>> = {};

const isCountry = (value: string): value is CountrySlug =>
  (COUNTRIES as readonly string[]).includes(value);

export function getExamCountries(slug: ExamSlug): readonly CountrySlug[] {
  if (INTERNATIONAL_EXAMS.has(slug)) return COUNTRIES;
  const owners = COUNTRIES.filter((country) => COUNTRY_EXAMS[country]?.includes(slug));
  return owners.length > 0 ? owners : [DEFAULT_COUNTRY];
}

export function isExamInCountry(slug: ExamSlug, country: string): boolean {
  return isCountry(country) && getExamCountries(slug).includes(country);
}

/**
 * The exams a given country's subfolder should generate pages for, in the
 * catalogue's own order so the routes stay stable between builds.
 *
 * Returns an empty array for an unknown country rather than throwing: a route
 * that generates no params simply builds no pages, which is the correct
 * behaviour for a country that has been declared but not yet populated.
 */
export function getExamsForCountry(country: string): ExamSlug[] {
  if (!isCountry(country)) return [];
  return EXAM_LIST.filter((exam) => isExamInCountry(exam.slug, country)).map((exam) => exam.slug);
}

/** True when an exam appears under more than one country, so its pages need hreflang. */
export function isInternationalExam(slug: ExamSlug): boolean {
  return INTERNATIONAL_EXAMS.has(slug);
}
