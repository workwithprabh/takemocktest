import Image from 'next/image';
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
  const illustratedPosts = BLOG_POSTS.filter((post) => post.image);
  const featured = illustratedPosts[0];
  const visualGuides = illustratedPosts.slice(1);
  const categories = Array.from(new Set(BLOG_POSTS.map((post) => post.category)));

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
        image: post.image?.src,
      })),
    }),
  ];

  return (
    <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />

      <header className="mb-9 max-w-3xl md:mb-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-action-700">Preparation library</p>
        <h1 className="font-sans text-3xl font-bold tracking-[-0.025em] text-ink-900 md:text-5xl">Study tips &amp; exam strategy</h1>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-ink-700 md:text-base">
          Practical, evergreen advice for exam prep. No fluff, no fabricated news, just what actually helps you score better.
        </p>
      </header>

      {featured?.image && (
        <section aria-labelledby="featured-guide-heading" className="mb-12 grid overflow-hidden border border-ink-200 bg-ink-900 md:grid-cols-[1.15fr_0.85fr] md:items-stretch">
          <Link href={`/${country}/blog/${featured.slug}`} className="group relative block aspect-[16/10] overflow-hidden md:aspect-auto md:min-h-[360px]">
            <Image
              src={featured.image.src}
              alt={featured.image.alt}
              fill
              priority
              sizes="(min-width: 768px) 58vw, 100vw"
              className="object-cover transition duration-300 group-hover:scale-[1.02]"
            />
          </Link>
          <div className="flex flex-col justify-center p-6 text-white md:p-9">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink-300">Featured guide</p>
            <h2 id="featured-guide-heading" className="font-sans text-2xl font-bold leading-tight md:text-3xl">
              <Link href={`/${country}/blog/${featured.slug}`} className="hover:underline">{featured.title}</Link>
            </h2>
            <p className="mt-4 text-sm leading-6 text-ink-200">{featured.excerpt}</p>
            <div className="mt-6 flex items-center justify-between border-t border-ink-700 pt-4 text-xs text-ink-300">
              <span>{featured.readTimeMin} min read</span>
              <Link href={`/${country}/blog/${featured.slug}`} className="font-semibold text-white hover:underline">Read guide →</Link>
            </div>
          </div>
        </section>
      )}

      {visualGuides.length > 0 && (
        <section aria-labelledby="visual-guides-heading" className="mb-14">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">Start here</p>
              <h2 id="visual-guides-heading" className="font-sans text-2xl font-bold text-ink-900">Popular preparation guides</h2>
            </div>
            <span className="hidden text-xs text-ink-500 sm:block">Original editorial visuals</span>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visualGuides.map((post) => {
              const style = getBlogCategoryStyle(post.category);
              return (
                <Link
                  key={post.slug}
                  href={`/${country}/blog/${post.slug}`}
                  className="group flex flex-col overflow-hidden border border-ink-200 bg-white transition hover:-translate-y-1 hover:border-ink-400 hover:shadow-xl hover:shadow-ink-900/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-900"
                >
                  {post.image && (
                    <div className="relative aspect-video overflow-hidden bg-ink-100">
                      <Image
                        src={post.image.src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-[1.03]"
                      />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-5">
                    <span className={`mb-3 inline-flex w-fit items-center gap-1.5 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide ${style.surface} ${style.iconText}`}>
                      <span className="h-3.5 w-3.5" aria-hidden="true">{style.icon}</span>
                      {post.category}
                    </span>
                    <h3 className="font-sans text-base font-semibold leading-snug text-ink-900 group-hover:underline">{post.title}</h3>
                    <p className="mt-2 line-clamp-3 text-xs leading-5 text-ink-700">{post.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between pt-5 text-xs text-ink-600">
                      <span>{post.readTimeMin} min read</span>
                      <span className="font-semibold text-ink-900" aria-hidden="true">→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      <section aria-labelledby="all-guides-heading">
        <div className="mb-6">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">Browse by topic</p>
          <h2 id="all-guides-heading" className="font-sans text-2xl font-bold text-ink-900">All {BLOG_POSTS.length} preparation guides</h2>
          <p className="mt-2 text-sm text-ink-700">Open a topic to scan every guide without scrolling through one long card wall.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {categories.map((category) => {
            const posts = BLOG_POSTS.filter((post) => post.category === category);
            const style = getBlogCategoryStyle(category);
            return (
              <details key={category} className="group border border-ink-200 bg-white">
                <summary className="flex cursor-pointer list-none items-center gap-4 p-5">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center p-2.5 ${style.surface} ${style.iconText}`} aria-hidden="true">{style.icon}</span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-ink-900">{category}</span>
                    <span className="mt-0.5 block text-xs text-ink-500">{posts.length} guides</span>
                  </span>
                  <span className="text-xl text-ink-500 transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <div className="border-t border-ink-200 px-5 py-2">
                  {posts.map((post) => (
                    <Link
                      key={post.slug}
                      href={`/${country}/blog/${post.slug}`}
                      className="flex items-start justify-between gap-4 border-b border-ink-100 py-3 text-sm text-ink-700 last:border-b-0 hover:text-ink-900 hover:underline"
                    >
                      <span>{post.title}</span>
                      <span className="shrink-0 text-xs text-ink-400">{post.readTimeMin} min</span>
                    </Link>
                  ))}
                </div>
              </details>
            );
          })}
        </div>
      </section>
    </div>
  );
}
