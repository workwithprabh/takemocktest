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
import { isInternationalExam } from './exam-countries';
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
  if (countries.length < 2) return undefined;

  const languages: Record<string, string> = {};
  for (const country of countries) {
    const locale = COUNTRY_LOCALES[country];
    if (!locale) continue;
    languages[locale] = `${SITE_URL}/${country}${rest}`;
  }
  if (Object.keys(languages).length < 2) return undefined;
  // x-default is the page for a reader Google cannot place. India is the
  // largest audience and the only complete catalogue, so it takes that role
  // until there is a reason to reconsider.
  languages['x-default'] = `${SITE_URL}/${COUNTRIES[0]}${rest}`;
  return languages;
}
