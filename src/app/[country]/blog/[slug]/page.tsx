import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, getBlogPost, getRelatedPosts } from '@/lib/blog';
import { articleSchema, breadcrumbSchema, faqPageSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/metadata';
import { BlogBody } from '@/components/blog/BlogBody';
import { getBlogCategoryStyle } from '@/components/blog/BlogCategoryStyle';

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string; slug: string }> }) {
  const { country, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return pageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/${country}/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ country: string; slug: string }> }) {
  const { country, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return notFound();

  const related = getRelatedPosts(post);
  const style = getBlogCategoryStyle(post.category);

  const jsonLd = [
    articleSchema({
      headline: post.title,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      authorName: post.authorName,
    }),
    breadcrumbSchema([
      { name: 'Home', path: `/${country}` },
      { name: 'Blog', path: `/${country}/blog` },
      { name: post.title, path: `/${country}/blog/${post.slug}` },
    ]),
    ...(post.faqs && post.faqs.length > 0 ? [faqPageSchema(post.faqs)] : []),
  ];

  return (
    <div className="max-w-2xl mx-auto px-5 py-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-xs text-ink-500 mb-4">
        <Link href={`/${country}/blog`} className="underline hover:text-ink-900 transition">Blog</Link>
      </div>

      <div className={`relative mb-6 flex h-28 items-end overflow-hidden border border-ink-200 bg-gradient-to-br ${style.band} px-5 py-4`}>
        <span className={`absolute right-4 top-4 h-12 w-12 opacity-40 ${style.iconText}`}>{style.icon}</span>
        <span className="inline-flex items-center gap-1.5 border border-ink-200 bg-white px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-700">
          <span className={`h-3.5 w-3.5 ${style.iconText}`}>{style.icon}</span>
          {post.category}
        </span>
      </div>

      <h1 className="font-sans font-bold text-2xl mb-2 text-ink-900">{post.title}</h1>
      <div className="text-xs text-ink-500 mb-8">
        {post.authorName} · {new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })} · {post.readTimeMin} min read
      </div>

      <BlogBody blocks={post.body} country={country} />

      {post.faqs && post.faqs.length > 0 && (
        <div className="mt-12 pt-8 border-t border-ink-200">
          <h2 className="font-sans font-semibold text-sm mb-3 text-ink-900">Frequently asked questions</h2>
          <div className="border border-ink-200 bg-white">
            {post.faqs.map((faq) => (
              <details key={faq.q} className="group border-b border-ink-200 p-4 last:border-b-0">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink-900">
                  {faq.q}
                  <span className="text-lg font-normal text-ink-500 transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      )}

      {related.length > 0 && (
        <div className="mt-12 pt-8 border-t border-ink-200">
          <h2 className="font-sans font-semibold text-sm mb-3 text-ink-900">Related reading</h2>
          <div className="space-y-3">
            {related.map((r) => {
              const rStyle = getBlogCategoryStyle(r.category);
              return (
                <Link
                  key={r.slug}
                  href={`/${country}/blog/${r.slug}`}
                  className="flex items-start gap-3 bg-white border border-ink-200 p-4 hover:border-ink-900 transition"
                >
                  <span className={`flex h-9 w-9 flex-shrink-0 items-center justify-center p-2 ${rStyle.surface} ${rStyle.iconText}`}>{rStyle.icon}</span>
                  <div>
                    <div className="font-sans font-semibold text-sm text-ink-900">{r.title}</div>
                    <div className="text-xs text-ink-500 mt-1">{r.excerpt}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
