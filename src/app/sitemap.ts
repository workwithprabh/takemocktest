import { MetadataRoute } from 'next';
import { COUNTRIES, getExam, getCheckedTestCount, getSharedTests, MIN_SECTIONAL_QUESTIONS_FOR_INDEX } from '@/lib/exams';
import { getExamCatalog } from '@/lib/exam-catalog';
import { countryPublishes, getExamsForCountry } from '@/lib/exam-countries';
import { BLOG_POSTS } from '@/lib/blog';
import { EXAM_GUIDES } from '@/lib/exam-guides';
import { SITE_URL } from '@/lib/schema';
import { UPDATES } from '@/lib/updates';
import { getQuestionsForTest } from '@/lib/questions';
import { LR_SLUG } from '@/lib/logical-reasoning';
import { PRACTICE_SLUG, getPublishedTopicSlugs } from '@/lib/practice-topics';

export const dynamic = 'force-static';

// lastModified policy: only set it where a real per-URL content date is
// tracked in code (blog posts' publishedAt, exam-pattern pages' and
// full-mock test pages' checkedOn). Every other entry omits the field
// rather than guess a date, so lastmod never appears unless it is accurate.
// See TAKEMOCKTEST_CURRENT_STATUS.md SEO audit notes.
function toLastModified(checkedOn?: string): Date | undefined {
  return checkedOn ? new Date(checkedOn) : undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const latestPost = [...BLOG_POSTS].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1))[0];

  for (const country of COUNTRIES) {
    entries.push({ url: `${SITE_URL}/${country}`, changeFrequency: 'daily', priority: 1 });
    if (countryPublishes(country, 'exams')) {
      entries.push({ url: `${SITE_URL}/${country}/exams`, changeFrequency: 'weekly', priority: 0.9 });
    }
    if (countryPublishes(country, 'updates')) {
      entries.push({ url: `${SITE_URL}/${country}/exam-updates`, changeFrequency: 'daily', priority: 0.8 });
    }
    // Logical Reasoning hub: the landing page and each practice set. The
    // /attempt routes are deliberately absent — they're noindexed, like every
    // other attempt route on the site.
    entries.push({ url: `${SITE_URL}/${country}/${LR_SLUG}`, changeFrequency: 'monthly', priority: 0.8 });
    // Individual LR set pages are deliberately absent: they are noindexed
    // (see their page.tsx), and listing a noindexed URL asks Google to crawl
    // something it is then told not to index — the same reason terms and
    // privacy are excluded above.
    // Topic practice: the landing page and each published topic. Attempt
    // routes are noindexed, like every other attempt route on the site.
    // changeFrequency is 'weekly' rather than 'monthly' because these pools
    // genuinely do grow whenever new question banks land.
    entries.push({ url: `${SITE_URL}/${country}/${PRACTICE_SLUG}`, changeFrequency: 'weekly', priority: 0.8 });
    for (const topic of getPublishedTopicSlugs()) {
      entries.push({
        url: `${SITE_URL}/${country}/${PRACTICE_SLUG}/${topic}`,
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    }
    for (const update of countryPublishes(country, 'updates') ? UPDATES : []) {
      entries.push({
        url: `${SITE_URL}/${country}/exam-updates/${update.slug}`,
        lastModified: update.modifiedAt,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
    if (countryPublishes(country, 'blog')) {
      entries.push({
        url: `${SITE_URL}/${country}/blog`,
        lastModified: latestPost ? toLastModified(latestPost.publishedAt) : undefined,
        changeFrequency: 'monthly',
        priority: 0.6,
      });
    }
    // 'terms' deliberately absent: it's noindexed (see its page.tsx), and
    // listing a noindexed URL in the sitemap asks Google to crawl something
    // it's then told not to index. Privacy is already excluded for the same
    // reason.
    for (const path of ['about']) {
      entries.push({ url: `${SITE_URL}/${country}/${path}`, changeFrequency: 'yearly', priority: 0.3 });
    }
    for (const post of countryPublishes(country, 'blog') ? BLOG_POSTS : []) {
      entries.push({
        url: `${SITE_URL}/${country}/blog/${post.slug}`,
        lastModified: post.publishedAt,
        changeFrequency: 'yearly',
        priority: 0.5,
        images: post.image ? [`${SITE_URL}${post.image.src}`] : undefined,
      });
    }
    // Per country, not global: a category or an exam only belongs in the
    // sitemap of a country whose subfolder actually generates that page.
    for (const category of getExamCatalog(country)) {
      entries.push({
        url: `${SITE_URL}/${country}/exams/${category.slug}`,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
    for (const exam of getExamsForCountry(country).map((slug) => getExam(slug)!)) {
      const base = `${SITE_URL}/${country}/${exam.slug}`;
      const hasCheckedTests = getCheckedTestCount(exam) > 0;
      const hasOfficialPattern = exam.stages.some((stage) => stage.pattern.status === 'official');
      if (hasCheckedTests || hasOfficialPattern) {
        entries.push({ url: base, changeFrequency: 'monthly', priority: 0.7 });
      }
      if (hasCheckedTests) {
        entries.push({ url: `${base}/mock-test`, changeFrequency: 'weekly', priority: 0.9 });
      }
      if (getSharedTests(exam).length > 0) {
        entries.push({ url: `${base}/similar-tests`, changeFrequency: 'monthly', priority: 0.5 });
      }
      if (exam.slug === 'ssc-cgl') {
        entries.push({ url: `${base}/dest-practice`, changeFrequency: 'monthly', priority: 0.8 });
      }
      if (hasOfficialPattern) {
        const officialPattern = exam.stages.find((stage) => stage.pattern.status === 'official')?.pattern;
        entries.push({
          url: `${base}/exam-pattern`,
          lastModified: toLastModified(officialPattern?.checkedOn),
          changeFrequency: 'monthly',
          priority: 0.6,
        });
      }
      // cutoff/result/answer-key/admit-card are cycle-specific (exact dates and
      // scores tied to one exam year) and don't have a GuidePageType/EXAM_GUIDES
      // entry yet — SSC CGL's own copy for those still lives directly in each
      // page.tsx. salary and previous-year-papers are evergreen and now come
      // from EXAM_GUIDES like syllabus/eligibility/selection-process.
      const sscCglOnlyGuides = exam.slug === 'ssc-cgl'
        ? ['cutoff', 'result', 'answer-key', 'admit-card']
        : [];
      const verifiedGuides = [...Object.keys(EXAM_GUIDES[exam.slug] ?? {}), ...sscCglOnlyGuides];
      for (const guide of verifiedGuides) {
        entries.push({ url: `${base}/${guide}`, changeFrequency: 'monthly', priority: 0.6 });
      }
      for (const test of exam.stages.flatMap((stage) => stage.tests)) {
        if (test.status !== 'checked') continue;
        // Mirrors TestInstructionsPage's noIndex logic (page.tsx) exactly —
        // full mocks always, sectional tests once they clear the same
        // question-count floor. Keep these two in sync.
        if (test.kind === 'full-length') {
          entries.push({
            url: `${base}/test/${test.id}`,
            lastModified: toLastModified(test.checkedOn),
            changeFrequency: 'monthly',
            priority: 0.8,
          });
        } else if (
          test.kind === 'sectional' &&
          // Cross-exam shared tests are noindexed (see the test page's own
          // noIndex rule, which this mirrors), so they must not be submitted.
          !test.sharedFrom &&
          getQuestionsForTest(exam.slug, test.id).length >= MIN_SECTIONAL_QUESTIONS_FOR_INDEX
        ) {
          entries.push({
            url: `${base}/test/${test.id}`,
            lastModified: toLastModified(test.checkedOn),
            changeFrequency: 'monthly',
            priority: 0.6,
          });
        }
      }
    }
  }
  return entries;
}
