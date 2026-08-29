import { MetadataRoute } from 'next';
import { EXAM_LIST, COUNTRIES, getCheckedTestCount, getSharedTests } from '@/lib/exams';
import { EXAM_CATEGORIES } from '@/lib/exam-catalog';
import { BLOG_POSTS } from '@/lib/blog';
import { EXAM_GUIDES } from '@/lib/exam-guides';
import { SITE_URL } from '@/lib/schema';
import { UPDATES } from '@/lib/updates';

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
    entries.push({ url: `${SITE_URL}/${country}/exams`, changeFrequency: 'weekly', priority: 0.9 });
    entries.push({ url: `${SITE_URL}/${country}/exam-updates`, changeFrequency: 'daily', priority: 0.8 });
    for (const update of UPDATES) {
      entries.push({
        url: `${SITE_URL}/${country}/exam-updates/${update.slug}`,
        lastModified: update.modifiedAt,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
    entries.push({
      url: `${SITE_URL}/${country}/blog`,
      lastModified: latestPost ? toLastModified(latestPost.publishedAt) : undefined,
      changeFrequency: 'monthly',
      priority: 0.6,
    });
    for (const path of ['about', 'terms']) {
      entries.push({ url: `${SITE_URL}/${country}/${path}`, changeFrequency: 'yearly', priority: 0.3 });
    }
    for (const post of BLOG_POSTS) {
      entries.push({
        url: `${SITE_URL}/${country}/blog/${post.slug}`,
        lastModified: post.publishedAt,
        changeFrequency: 'yearly',
        priority: 0.5,
        images: post.image ? [`${SITE_URL}${post.image.src}`] : undefined,
      });
    }
    for (const category of EXAM_CATEGORIES) {
      entries.push({
        url: `${SITE_URL}/${country}/exams/${category.slug}`,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
    for (const exam of EXAM_LIST) {
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
        if (test.kind === 'full-length' && test.status === 'checked') {
          entries.push({
            url: `${base}/test/${test.id}`,
            lastModified: toLastModified(test.checkedOn),
            changeFrequency: 'monthly',
            priority: 0.8,
          });
        }
      }
    }
  }
  return entries;
}
