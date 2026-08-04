import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog';
import { pageMetadata } from '@/lib/metadata';

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

  return (
    <div className="max-w-5xl mx-auto px-5 py-6">
      <h1 className="font-sans font-bold text-2xl mb-1 text-ink-900">Study tips &amp; exam strategy</h1>
      <p className="text-ink-500 text-sm mb-8">
        Practical, evergreen advice for exam prep — no fluff, no fabricated news, just what actually helps you score better.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/${country}/blog/${post.slug}`}
            className="bg-white border border-ink-200 p-5 hover:shadow-lg hover:shadow-ink-900/10 hover:-translate-y-0.5 transition"
          >
            <span className="text-xs font-semibold uppercase tracking-wide text-ink-500">
              {post.category}
            </span>
            <h2 className="font-sans font-semibold text-base mt-1.5 mb-2 text-ink-900">{post.title}</h2>
            <p className="text-xs text-ink-500 mb-3 line-clamp-3">{post.excerpt}</p>
            <div className="text-xs text-ink-500">
              {new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
              {' · '}
              {post.readTimeMin} min read
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
