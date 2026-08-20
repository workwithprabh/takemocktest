export const SITE_URL = 'https://takemocktest.com';
export const SITE_NAME = 'TakeMockTest';
export const SITE_EMAIL = 'info@takemocktest.com';
export const GA_MEASUREMENT_ID = 'G-8D1KVR9GZJ';

// Every JSON-LD block on the site is rendered via
// dangerouslySetInnerHTML={{ __html: jsonLdHtml(data) }} inside a
// <script type="application/ld+json"> tag. Plain JSON.stringify doesn't
// escape "<", so a literal "</script>" inside any string value (a blog
// title, an exam name) would close the script tag early and let whatever
// follows in the JSON be parsed as HTML. All schema data here comes from
// this repo's own authored content, not user input, so it isn't currently
// exploitable, but escaping is free and keeps that true if that ever
// changes. The resulting string is still valid, parseable JSON: escaping
// "<" as "<" only affects how it looks in an HTML/script context.
export function jsonLdHtml(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    email: SITE_EMAIL,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function itemListSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqPageSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };
}

export function blogSchema(opts: { path: string; posts: { headline: string; path: string; datePublished: string }[] }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${SITE_NAME} Blog`,
    url: `${SITE_URL}${opts.path}`,
    blogPost: opts.posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.headline,
      url: `${SITE_URL}${post.path}`,
      datePublished: post.datePublished,
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: { '@type': 'Organization', name: opts.authorName, url: `${SITE_URL}/in/about` },
    publisher: organizationSchema(),
  };
}

// Small helper so pages can drop schema in without repeating the <script> tag
export function JsonLd({ data }: { data: object }) {
  return {
    __html: JSON.stringify(data),
  };
}
