import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, getBlogPost, getRelatedPosts } from '@/lib/blog';
import { articleSchema, breadcrumbSchema } from '@/lib/schema';
import { pageMetadata } from '@/lib/metadata';
import { BlogRichText } from '@/components/BlogRichText';

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
  ];

  return (
    <div className="max-w-2xl mx-auto px-5 py-6">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="text-xs text-ink-500 mb-3">
        <Link href={`/${country}/blog`} className="underline hover:text-ink-900 transition">Blog</Link>
        {' / '}{post.category}
      </div>

      <h1 className="font-sans font-bold text-2xl mb-2 text-ink-900">{post.title}</h1>
      <div className="text-xs text-ink-500 mb-8">
        {post.authorName} · {new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })} · {post.readTimeMin} min read
      </div>

      <div className="space-y-5">
        {post.body.map((block, i) => (
          <div key={i}>
            {block.heading && <h2 className="font-sans font-semibold text-lg mb-2 text-ink-900">{block.heading}</h2>}
            <p className="text-sm text-ink-500 leading-relaxed">
              <BlogRichText text={block.paragraph} country={country} />
            </p>
          </div>
        ))}
      </div>

      {related.length > 0 && (
        <div className="mt-12 pt-8 border-t border-ink-200">
          <h2 className="font-sans font-semibold text-sm mb-3 text-ink-900">Related reading</h2>
          <div className="space-y-3">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/${country}/blog/${r.slug}`}
                className="block bg-white border border-ink-200 p-4 hover:border-ink-900 transition"
              >
                <div className="font-sans font-semibold text-sm text-ink-900">{r.title}</div>
                <div className="text-xs text-ink-500 mt-1">{r.excerpt}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
