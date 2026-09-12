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
    // A stable @id so the WebSite entity can point at this one rather than
    // describing a second, unrelated organisation with the same name.
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    // People search the brand as two words as often as one, and nothing in the
    // markup connected the two spellings.
    alternateName: 'Take Mock Test',
    url: SITE_URL,
    email: SITE_EMAIL,
    // Google reads `logo` for brand presentation. Deliberately no `sameAs`:
    // this site has no social profiles, and listing invented ones would be a
    // false claim in machine-readable form, which is worse than an omission.
    logo: `${SITE_URL}/icon.svg`,
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    alternateName: 'Take Mock Test',
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#organization` },
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

export function blogSchema(opts: { path: string; posts: { headline: string; path: string; datePublished: string; image?: string }[] }) {
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
      image: post.image ? `${SITE_URL}${post.image}` : undefined,
    })),
  };
}

export function articleSchema(opts: {
  headline: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  path: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.headline,
    mainEntityOfPage: `${SITE_URL}${opts.path}`,
    image: opts.image ? `${SITE_URL}${opts.image}` : undefined,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    // The author URL was hardcoded to /in/about while the path it sits beside
    // is country-scoped, which is the same defect that put five Nigerian
    // canonicals on Indian URLs. The blog is India-only today, so nothing was
    // wrong yet; deriving it now means nothing will be when that changes.
    author: {
      '@type': 'Organization',
      name: opts.authorName,
      url: `${SITE_URL}/${opts.path.split('/')[1] || 'in'}/about`,
    },
    publisher: organizationSchema(),
  };
}

// Small helper so pages can drop schema in without repeating the <script> tag
export function JsonLd({ data }: { data: object }) {
  return {
    __html: JSON.stringify(data),
  };
}

/**
 * Quiz schema for a page that VISIBLY shows its questions and answers.
 *
 * Google's Education Q&A rich result needs `about` and `hasPart`, and its
 * general structured-data policy forbids marking up content a reader cannot
 * see. The exam test pages therefore cannot carry a complete Quiz: they are
 * instruction pages, and the questions live behind the attempt flow. The topic
 * practice pages can, because they print worked examples in full — so only the
 * questions actually rendered on the page are passed in here.
 */
export function quizWithQuestionsSchema(opts: {
  name: string;
  description: string;
  path: string;
  about: string;
  questions: { question: string; answer: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Quiz',
    name: opts.name,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    inLanguage: 'en-IN',
    isAccessibleForFree: true,
    about: { '@type': 'Thing', name: opts.about },
    hasPart: opts.questions.map((item) => ({
      '@type': 'Question',
      eduQuestionType: 'Flashcard',
      text: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
    provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  };
}
