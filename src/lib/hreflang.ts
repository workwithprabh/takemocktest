// Which pages are the same page for a different audience, and therefore may
// carry hreflang.
//
// This is the part of going international that is easy to get wrong in a way
// that hurts. hreflang tells Google two URLs are the same content aimed at
// different people. That is true of the homepage, of topic practice, of the
// reasoning hub and of most blog posts. It is emphatically NOT true of
// `/in/ssc-cgl/mock-test` and `/ng/jamb/mock-test`: those are different exams,
// not translations of each other, and pairing them tells Google they are
// interchangeable when a candidate for one has no use for the other.
//
// So equivalence is decided per path here, deliberately conservatively, rather
// than by blanket-mapping every URL across every country.
//
// One genuine exception: a handful of exams are the same exam wherever you sit
// them (SAT, IELTS, and the rest of INTERNATIONAL_EXAMS). Those pages really do
// exist in more than one subfolder with the same content, so they really do
// want hreflang. See src/lib/exam-countries.ts.
import { COUNTRIES, getExam } from './exams';
import { getExamCatalog } from './exam-catalog';
import { countriesPublishing, getExamCountries, isInternationalExam, type CountrySection } from './exam-countries';
import { SITE_URL } from './schema';

// BCP 47 tag per country subfolder. English everywhere so far, region varies.
//
// Keyed by string rather than CountrySlug, and carrying entries for countries
// that are not live yet, on purpose: a locale here does nothing on its own,
// because buildAlternates only ever emits for countries present in COUNTRIES.
// Declaring `ng` early is what lets scripts/audit-hreflang.mjs prove the
// two-country output shape today, instead of discovering it is wrong on the
// day Nigeria launches.
export const COUNTRY_LOCALES: Record<string, string> = {
  in: 'en-IN',
  ng: 'en-NG',
};

/** Open Graph wants the underscore form of the same tag. */
export function openGraphLocale(country: string): string {
  return (COUNTRY_LOCALES[country] ?? 'en-IN').replace('-', '_');
}

/**
 * The BCP 47 tag for a country, for schema.org inLanguage and for
 * toLocaleString/toLocaleDateString. Added 10 September 2026 after a scan for
 * country-specific leftovers found 'en-IN' hardcoded inside routes that render
 * under [country], which meant Nigerian pages declared themselves Indian and
 * formatted numbers with Indian digit grouping.
 */
export function contentLocale(country: string): string {
  return COUNTRY_LOCALES[country] ?? 'en-IN';
}

// Sections whose pages mean the same thing in every country. Matched against
// the path with its country segment removed.
const EQUIVALENT_SECTIONS = [
  '', // the homepage
  '/exams', // the directory: same page, locally relevant inventory
  '/practice',
  '/logical-reasoning',
  '/blog',
  '/results',
  '/about',
  '/privacy',
  '/terms',
];

// Country-specific by nature, listed so the intent is explicit rather than
// implied by absence: exam news is about one country's notifications.
const COUNTRY_SPECIFIC_SECTIONS = ['/exam-updates'];

/** Splits `/in/practice/percentages` into `['in', '/practice/percentages']`. */
function splitCountry(path: string): [string, string] | undefined {
  const match = /^\/([^/]+)(\/.*)?$/.exec(path);
  if (!match) return undefined;
  return [match[1], match[2] ?? ''];
}

// Which section a path belongs to, or undefined for pages every country has
// (the homepage, about, privacy, terms, results). Used to work out who can
// legitimately appear in an hreflang set: a country that does not publish the
// blog must not be listed as an alternate for a blog post, or the tag points at
// a 404 and Google discards the whole set.
export function sectionForPath(rest: string): CountrySection | undefined {
  if (rest === '/practice' || rest.startsWith('/practice/')) return 'practice';
  if (rest === '/logical-reasoning' || rest.startsWith('/logical-reasoning/')) return 'reasoning';
  if (rest === '/blog' || rest.startsWith('/blog/')) return 'blog';
  if (rest === '/exam-updates' || rest.startsWith('/exam-updates/')) return 'updates';
  if (rest === '/exams' || rest.startsWith('/exams/')) return 'exams';
  const slug = rest.split('/')[1];
  if (slug && getExam(slug)) return 'exams';
  return undefined;
}

/**
 * True when this path names content that exists, meaning the same thing, under
 * every country that has it. Takes the path with the country segment already
 * removed.
 */
export function isEquivalentAcrossCountries(rest: string): boolean {
  if (COUNTRY_SPECIFIC_SECTIONS.some((section) => rest === section || rest.startsWith(`${section}/`))) {
    return false;
  }
  if (EQUIVALENT_SECTIONS.some((section) => rest === section || (section !== '' && rest.startsWith(`${section}/`)))) {
    return true;
  }
  // Anything left starting with a known exam slug is an exam page: equivalent
  // only for the exams that are literally the same exam abroad.
  const slug = rest.split('/')[1];
  if (slug && getExam(slug)) return isInternationalExam(getExam(slug)!.slug);
  return false;
}

/**
 * Which countries may appear in this path's hreflang set.
 *
 * Publishing the section is the general rule, but it is too coarse for an exam
 * page. Nigeria publishes the `exams` section and lists exactly one exam, so
 * "ng publishes exams" would pair /in/sat with /ng/sat, a page that does not
 * exist. Google discards a set with one broken target, which would take the
 * good tags down with the bad one. For an exam page, eligibility is the set of
 * countries that actually generate that exam.
 */
function eligibleCountries(rest: string, countries: readonly string[]): readonly string[] {
  const section = sectionForPath(rest);
  if (!section) return countries;
  const publishing = countriesPublishing(section) as readonly string[];
  const eligible = countries.filter((country) => publishing.includes(country));
  if (section !== 'exams') return eligible;
  const slug = rest.split('/')[1];
  if (!slug) return eligible; // /exams itself: every publishing country has one.
  const exam = getExam(slug);
  if (exam) {
    const owners = getExamCountries(exam.slug) as readonly string[];
    return eligible.filter((country) => owners.includes(country));
  }
  // /exams/[category]. Category trees are per country too: India has eleven
  // categories and Nigeria has one, and none of the slugs overlap, so pairing
  // them by position or by section would point every category page at a 404.
  return eligible.filter((country) => getExamCatalog(country).some((category) => category.slug === slug));
}

/**
 * The hreflang map for a path, or undefined when there is nothing to say.
 *
 * Returns undefined for a page that is not equivalent across countries, and
 * also when only one country would be listed: a lone self-referencing hreflang
 * is valid but pointless, and 1,700 pointless tags is 1,700 pages of noise. The
 * tags appear the moment a second country actually has the page.
 *
 * `countries` is injectable so the shape can be proved with a simulated second
 * country before one exists. scripts/audit-hreflang.mjs does exactly that.
 */
export function buildAlternates(
  path: string,
  countries: readonly string[] = COUNTRIES,
): Record<string, string> | undefined {
  const split = splitCountry(path);
  if (!split) return undefined;
  const [, rest] = split;
  if (!isEquivalentAcrossCountries(rest)) return undefined;

  // Only countries that actually have this page can be alternates.
  const eligible = eligibleCountries(rest, countries);
  if (eligible.length < 2) return undefined;

  const languages: Record<string, string> = {};
  for (const country of eligible) {
    const locale = COUNTRY_LOCALES[country];
    if (!locale) continue;
    languages[locale] = `${SITE_URL}/${country}${rest}`;
  }
  if (Object.keys(languages).length < 2) return undefined;
  // x-default is the page for a reader Google cannot place. India is the
  // largest audience and the only complete catalogue, so it takes that role
  // until there is a reason to reconsider. It must be one of the URLs actually
  // listed, so it falls back to the first eligible country if India does not
  // publish this section.
  const fallback = eligible.includes(COUNTRIES[0]) ? COUNTRIES[0] : eligible[0];
  languages['x-default'] = `${SITE_URL}/${fallback}${rest}`;
  return languages;
}
