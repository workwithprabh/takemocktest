import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, organizationSchema, blogSchema, jsonLdHtml } from '@/lib/schema';
import { getBlogCategoryStyle } from '@/components/blog/BlogCategoryStyle';

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return pageMetadata({
    title: 'Study Tips & Exam Strategy',
    description: 'Study tips, exam strategy, and mock-test analysis for SSC, Banking, and Railway exam aspirants.',
    path: `/${country}/blog`,
  });
}

export default async function BlogIndexPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;

  const jsonLd = [
    breadcrumbSchema([
      { name: 'Home', path: `/${country}` },
      { name: 'Blog', path: `/${country}/blog` },
    ]),
    organizationSchema(),
    blogSchema({
      path: `/${country}/blog`,
      posts: BLOG_POSTS.map((post) => ({
        headline: post.title,
        path: `/${country}/blog/${post.slug}`,
        datePublished: post.publishedAt,
      })),
    }),
  ];

  return (
    <div className="max-w-5xl mx-auto px-5 py-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />
      <h1 className="font-sans font-bold text-2xl mb-1 text-ink-900">Study tips &amp; exam strategy</h1>
      <p className="text-ink-500 text-sm mb-8">
        Practical, evergreen advice for exam prep. No fluff, no fabricated news, just what actually helps you score better.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {BLOG_POSTS.map((post) => {
          const style = getBlogCategoryStyle(post.category);
          return (
            <Link
              key={post.slug}
              href={`/${country}/blog/${post.slug}`}
              className="group flex flex-col border border-ink-200 bg-white overflow-hidden transition hover:-translate-y-0.5 hover:border-ink-300 hover:shadow-lg hover:shadow-ink-900/10"
            >
              <div className={`relative flex items-end bg-gradient-to-br ${style.band} px-4 py-3 h-20`}>
                <span className={`absolute right-3 top-3 h-8 w-8 opacity-40 ${style.iconText}`}>{style.icon}</span>
                <span className={`inline-flex items-center gap-1.5 border border-ink-200 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-700`}>
                  <span className={`h-3.5 w-3.5 ${style.iconText}`}>{style.icon}</span>
                  {post.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-sans font-semibold text-base mb-2 text-ink-900">{post.title}</h2>
                <p className="text-xs text-ink-500 mb-3 line-clamp-3">{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between text-xs text-ink-500">
                  <span>
                    {new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
                    {' · '}
                    {post.readTimeMin} min read
                  </span>
                  <span className={`font-semibold ${style.iconText} opacity-0 transition group-hover:opacity-100`}>Read →</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
