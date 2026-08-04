import type { Metadata } from 'next';
import { SITE_NAME } from './schema';

const SOCIAL_IMAGE = {
  url: '/images/students-preparing-for-exams.webp',
  width: 1200,
  height: 740,
  alt: 'Students preparing for a competitive exam',
};

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
  return {
    title,
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
