import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema, organizationSchema, blogSchema } from '@/lib/schema';

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Study Tips': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M9 11l2 2 4-4M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  ),
  'Exam Strategy': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M12 2v20M4 6h16M4 6c0 4 3.5 6 8 6s8-2 8-6M4 18h16" fill="none" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  ),
  'Mock Tests': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M4 4h16v16H4z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  ),
  'Exam Guides': (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13Z" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  ),
};

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1 className="font-sans font-bold text-2xl mb-1 text-ink-900">Study tips &amp; exam strategy</h1>
      <p className="text-ink-500 text-sm mb-8">
        Practical, evergreen advice for exam prep. No fluff, no fabricated news, just what actually helps you score better.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/${country}/blog/${post.slug}`}
            className="bg-white border border-ink-200 p-5 hover:shadow-lg hover:shadow-ink-900/10 hover:-translate-y-0.5 transition"
          >
            <div className="flex items-center gap-2 text-ink-900">
              {CATEGORY_ICONS[post.category]}
              <span className="text-xs font-semibold uppercase tracking-wide text-ink-500">
                {post.category}
              </span>
            </div>
            <h2 className="font-sans font-semibold text-base mt-2 mb-2 text-ink-900">{post.title}</h2>
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
