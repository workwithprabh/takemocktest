import type { Metadata } from 'next';
import { SITE_NAME } from './schema';

const SOCIAL_IMAGE = {
  url: '/images/students-preparing-for-exams.webp',
  width: 1200,
  height: 740,
  alt: 'Students preparing for a competitive exam',
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
}: {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}): Metadata {
  const withBrand = `${title} | ${SITE_NAME}`;
  const finalTitle = withBrand.length <= MAX_TITLE_LENGTH ? withBrand : title;
  return {
    title: { absolute: finalTitle },
    description,
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      url: path,
      siteName: SITE_NAME,
      title,
      description,
      images: [SOCIAL_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [SOCIAL_IMAGE.url],
    },
    robots: noIndex ? { index: false, follow: true } : undefined,
  };
}
