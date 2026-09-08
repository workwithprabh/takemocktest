import type { Metadata } from 'next';
import { SITE_NAME } from './schema';
import { buildAlternates, openGraphLocale } from './hreflang';

const DEFAULT_SOCIAL_IMAGE = {
  url: '/images/free-mock-tests-india.webp',
  width: 1280,
  height: 720,
  alt: 'Two students practicing a competitive-exam mock test together',
};

// Budget for the full rendered <title> tag, including the " | TakeMockTest"
// suffix. The root layout's title.template appends the brand name to every
// page, which by itself costs 16 characters — on a long, specific page title
// that tax is what pushes it from "fine" to "truncates in search results."
// Rather than editing hundreds of individual page titles to compensate, this
// function decides per-page whether there's budget for the brand suffix, and
// uses `title: { absolute }` to bypass the layout template when there isn't,
// so the page's own specific title gets the full character budget instead.
const MAX_TITLE_LENGTH = 60;

export function pageMetadata({
  title,
  description,
  path,
  noIndex = false,
  image = DEFAULT_SOCIAL_IMAGE,
  openGraphType = 'website',
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  image?: { url: string; width: number; height: number; alt: string };
  openGraphType?: 'website' | 'article';
}): Metadata {
  const withBrand = `${title} | ${SITE_NAME}`;
  const finalTitle = withBrand.length <= MAX_TITLE_LENGTH ? withBrand : title;
  // The country segment drives both the hreflang set and the Open Graph
  // locale, so neither has to be passed in at every call site.
  const country = path.split('/')[1] ?? '';
  const languages = buildAlternates(path);
  return {
    title: { absolute: finalTitle },
    description,
    alternates: languages ? { canonical: path, languages } : { canonical: path },
    openGraph: {
      type: openGraphType,
      locale: openGraphLocale(country),
      url: path,
      siteName: SITE_NAME,
      title,
      description,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
        },
  };
}
