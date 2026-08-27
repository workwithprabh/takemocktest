import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, getBlogPost, getRelatedPosts } from '@/lib/blog';
import { articleSchema, breadcrumbSchema, faqPageSchema, jsonLdHtml } from '@/lib/schema';
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
    image: post.image
      ? { url: post.image.src, width: post.image.width, height: post.image.height, alt: post.image.alt }
      : undefined,
    openGraphType: 'article',
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ country: string; slug: string }> }) {
  const { country, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return notFound();

  const path = `/${country}/blog/${post.slug}`;
  const related = getRelatedPosts(post);
  const style = getBlogCategoryStyle(post.category);

  const jsonLd = [
    articleSchema({
      headline: post.title,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      authorName: post.authorName,
      path,
      image: post.image?.src,
    }),
    breadcrumbSchema([
      { name: 'Home', path: `/${country}` },
      { name: 'Blog', path: `/${country}/blog` },
      { name: post.title, path },
    ]),
    ...(post.faqs && post.faqs.length > 0 ? [faqPageSchema(post.faqs)] : []),
  ];

  return (
    <article className="mx-auto max-w-4xl px-5 py-8 md:py-12">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdHtml(jsonLd) }} />

      <nav aria-label="Breadcrumb" className="mb-6 text-xs text-ink-600">
        <Link href={`/${country}/blog`} className="underline transition hover:text-ink-900">Preparation library</Link>
      </nav>

      <header className="mb-8">
        <span className={`mb-5 inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${style.surface} ${style.iconText}`}>
          <span className="h-3.5 w-3.5" aria-hidden="true">{style.icon}</span>
          {post.category}
        </span>
        <h1 className="max-w-3xl font-sans text-3xl font-bold leading-[1.08] tracking-[-0.03em] text-ink-900 md:text-5xl">{post.title}</h1>
        <p className="mt-5 max-w-2xl text-base leading-7 text-ink-700">{post.excerpt}</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-ink-200 pt-4 text-xs text-ink-600">
          <span className="font-semibold text-ink-700">{post.authorName}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readTimeMin} min read</span>
        </div>
      </header>

      {post.image ? (
        <figure className="relative mb-10 aspect-video overflow-hidden border border-ink-200 bg-ink-100">
          <Image
            src={post.image.src}
            alt={post.image.alt}
            fill
            priority
            sizes="(min-width: 896px) 854px, 100vw"
            className="object-cover"
          />
        </figure>
      ) : (
        <div className={`relative mb-10 flex h-32 items-end overflow-hidden border border-ink-200 bg-gradient-to-br ${style.band} px-5 py-4`}>
          <span className={`absolute right-5 top-5 h-14 w-14 opacity-35 ${style.iconText}`} aria-hidden="true">{style.icon}</span>
        </div>
      )}

      <div className="mx-auto max-w-2xl">
        <BlogBody blocks={post.body} country={country} />

        <section aria-labelledby="practice-cta-heading" className="mt-12 border border-action-100 bg-action-50 p-5 md:flex md:items-center md:justify-between md:gap-6">
          <div>
            <h2 id="practice-cta-heading" className="font-sans text-base font-semibold text-ink-900">Put the strategy into practice</h2>
            <p className="mt-1 text-sm leading-6 text-ink-700">Choose a checked mock test and apply what you learned while the idea is fresh.</p>
          </div>
          <Link href={`/${country}/exams?availability=available`} className="mt-4 inline-flex min-h-11 shrink-0 items-center bg-action-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-action-800 md:mt-0">
            Find a mock test →
          </Link>
        </section>

        {post.faqs && post.faqs.length > 0 && (
          <section aria-labelledby="article-faq-heading" className="mt-12 border-t border-ink-200 pt-8">
            <h2 id="article-faq-heading" className="mb-3 font-sans text-lg font-semibold text-ink-900">Frequently asked questions</h2>
            <div className="border border-ink-200 bg-white">
              {post.faqs.map((faq) => (
                <details key={faq.q} className="group border-b border-ink-200 p-4 last:border-b-0">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-ink-900">
                    {faq.q}
                    <span className="text-lg font-normal text-ink-500 transition group-open:rotate-45" aria-hidden="true">+</span>
                  </summary>
                  <p className="mt-2 text-sm leading-6 text-ink-700">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section aria-labelledby="related-reading-heading" className="mt-12 border-t border-ink-200 pt-8">
            <h2 id="related-reading-heading" className="mb-3 font-sans text-lg font-semibold text-ink-900">Related reading</h2>
            <div className="space-y-3">
              {related.map((relatedPost) => {
                const relatedStyle = getBlogCategoryStyle(relatedPost.category);
                return (
                  <Link
                    key={relatedPost.slug}
                    href={`/${country}/blog/${relatedPost.slug}`}
                    className="group flex items-stretch overflow-hidden border border-ink-200 bg-white transition hover:border-ink-400 hover:shadow-lg hover:shadow-ink-900/10"
                  >
                    {relatedPost.image ? (
                      <span className="relative hidden w-28 shrink-0 bg-ink-100 sm:block">
                        <Image src={relatedPost.image.src} alt="" fill sizes="112px" className="object-cover" />
                      </span>
                    ) : (
                      <span className={`hidden w-16 shrink-0 items-center justify-center p-5 sm:flex ${relatedStyle.surface} ${relatedStyle.iconText}`} aria-hidden="true">{relatedStyle.icon}</span>
                    )}
                    <span className="p-4">
                      <span className="block font-sans text-sm font-semibold text-ink-900 group-hover:underline">{relatedPost.title}</span>
                      <span className="mt-1 block text-xs leading-5 text-ink-600">{relatedPost.excerpt}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
