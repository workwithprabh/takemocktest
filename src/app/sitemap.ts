import { MetadataRoute } from 'next';
import { EXAM_LIST, COUNTRIES, getCheckedTestCount } from '@/lib/exams';
import { EXAM_CATEGORIES } from '@/lib/exam-catalog';
import { BLOG_POSTS } from '@/lib/blog';
import { EXAM_GUIDES } from '@/lib/exam-guides';
import { SITE_URL } from '@/lib/schema';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const country of COUNTRIES) {
    entries.push({ url: `${SITE_URL}/${country}`, changeFrequency: 'daily', priority: 1 });
    entries.push({ url: `${SITE_URL}/${country}/exams`, changeFrequency: 'weekly', priority: 0.9 });
    entries.push({ url: `${SITE_URL}/${country}/blog`, changeFrequency: 'monthly', priority: 0.6 });
    for (const path of ['about', 'terms']) {
      entries.push({ url: `${SITE_URL}/${country}/${path}`, changeFrequency: 'yearly', priority: 0.3 });
    }
    for (const post of BLOG_POSTS) {
      entries.push({
        url: `${SITE_URL}/${country}/blog/${post.slug}`,
        lastModified: post.publishedAt,
        changeFrequency: 'yearly',
        priority: 0.5,
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
      if (exam.slug === 'ssc-cgl') {
        entries.push({ url: `${base}/dest-practice`, changeFrequency: 'monthly', priority: 0.8 });
      }
      if (hasOfficialPattern) {
        entries.push({ url: `${base}/exam-pattern`, changeFrequency: 'monthly', priority: 0.6 });
      }
      // Pages 4-9 (salary/previous-year-papers/cutoff/result/answer-key/admit-card)
      // don't have a GuidePageType/EXAM_GUIDES entry yet — SSC CGL's own copy for
      // those still lives directly in each page.tsx, unchanged by this refactor.
      const sscCglOnlyGuides = exam.slug === 'ssc-cgl'
        ? ['salary', 'previous-year-papers', 'cutoff', 'result', 'answer-key', 'admit-card']
        : [];
      const verifiedGuides = [...Object.keys(EXAM_GUIDES[exam.slug] ?? {}), ...sscCglOnlyGuides];
      for (const guide of verifiedGuides) {
        entries.push({ url: `${base}/${guide}`, changeFrequency: 'monthly', priority: 0.6 });
      }
      for (const test of exam.stages.flatMap((stage) => stage.tests)) {
        if (test.kind === 'full-length' && test.status === 'checked') {
          entries.push({
            url: `${base}/test/${test.id}`,
            changeFrequency: 'monthly',
            priority: 0.8,
          });
        }
      }
    }
  }
  return entries;
}
