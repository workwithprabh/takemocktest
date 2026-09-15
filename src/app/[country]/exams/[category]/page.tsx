import Link from 'next/link';
import { countryName } from '@/lib/exam-countries';
import { COUNTRIES } from '@/lib/exams';
import { notFound } from 'next/navigation';
import { CategoryIcon } from '@/components/ExamCategoryCard';
import { getCategoryExamCount, getExamCatalog, getExamCategory } from '@/lib/exam-catalog';
import { breadcrumbSchema, faqPageSchema, itemListSchema, jsonLdHtml } from '@/lib/schema';
import { getCategoryFaqs } from '@/lib/category-faqs';
import { pageMetadata } from '@/lib/metadata';
import ExamFinder from '@/components/ExamFinder';

export function generateStaticParams() {
  return COUNTRIES.flatMap((country) =>
    getExamCatalog(country).map((category) => ({ country, category: category.slug })),
  );
}

export async function generateMetadata({ params }: { params: Promise<{ country: string; category: string }> }) {
  const { country, category: categorySlug } = await params;
  const category = getExamCategory(categorySlug, country);
  if (!category) return {};

  return pageMetadata({
    // "in India" was hardcoded into a title rendered under [country], so the
    // Nigerian category page announced itself as an Indian directory.
    title: `${category.name} Exams in ${countryName(country) || 'India'}: Mock Test Directory`,
    description: `${category.description} Browse exams and available TakeMockTest practice series.`,
    path: `/${country}/exams/${category.slug}`,
  });
}

export default async function ExamCategoryPage({
  params,
}: {
  params: Promise<{ country: string; category: string }>;
}) {
  const { country, category: categorySlug } = await params;
  const category = getExamCategory(categorySlug, country);
  if (!category) return notFound();

  const liveExams = category.groups
    .flatMap((group) => group.exams)
    .filter((exam) => exam.liveSlug)
    .map((exam) => ({ name: exam.name, path: `/${country}/${exam.liveSlug}/mock-test` }));
  const faqs = getCategoryFaqs(category, country);

  return (
    <div className="mx-auto max-w-5xl px-5 py-10 md:py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdHtml(
            breadcrumbSchema([
              { name: 'Home', path: `/${country}` },
              { name: 'All exams', path: `/${country}/exams` },
              { name: category.name, path: `/${country}/exams/${category.slug}` },
            ]),
          ),
        }}
      />
      {liveExams.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdHtml(itemListSchema(liveExams)) }}
        />
      )}
      {faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdHtml(faqPageSchema(faqs)) }}
        />
      )}

      <Link href={`/${country}/exams`} className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-ink-600 hover:text-ink-900">
        <span aria-hidden="true">←</span> All exam categories
      </Link>

      <div className="mb-7 grid gap-5 border border-ink-200 bg-white p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:p-8">
        <div className="flex h-14 w-14 items-center justify-center border border-action-100 bg-action-50 text-action-700">
          <CategoryIcon name={category.icon} />
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">Exam pathway</p>
          {/* The H1 carries "Exams" because that is the word the searcher types and
              the word this class's declared target needs: seo-keywords.ts gates the
              category class on "{category} exams", and the <title> has said
              "{category} Exams in India" all along while the H1 said only the
              category name. scripts/audit-keyword-map.mjs now fails the build on
              that mismatch rather than leaving twelve landing pages headed by a
              phrase nobody searches. */}
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">{category.name} Exams</h1>
          <p className="max-w-2xl text-sm leading-6 text-ink-700">{category.description}</p>
        </div>
        <div className="grid grid-cols-2 divide-x divide-ink-200 border-t border-ink-200 pt-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
          <div className="pr-5">
            <div className="text-2xl font-bold text-ink-900">{getCategoryExamCount(category)}</div>
            <div className="text-xs font-medium text-ink-500">exams listed</div>
          </div>
          <div className="pl-5">
            <div className="text-2xl font-bold text-action-700">{liveExams.length}</div>
            <div className="text-xs font-medium text-ink-500">mock tests live</div>
          </div>
        </div>
      </div>

      <ExamFinder categories={[category]} country={country} mode="category" />

      {faqs.length > 0 && (
        <section className="mt-12" aria-labelledby="category-faq-heading">
          <h2 id="category-faq-heading" className="mb-4 text-xl font-bold text-ink-900 md:text-2xl">Frequently asked questions</h2>
          <div className="border border-ink-200 bg-white">
            {faqs.map((faq) => (
              <details key={faq.q} className="group border-b border-ink-200 last:border-b-0">
                <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 p-4 text-sm font-semibold text-ink-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-action-700">
                  {faq.q}
                  <span className="text-xl font-normal text-ink-500 transition group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <div className="max-w-3xl px-4 pb-4">
                  <p className="text-sm leading-6 text-ink-600">{faq.a}</p>
                  {faq.links && faq.links.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                      {faq.links.map((link) => (
                        <li key={link.href}>
                          <Link href={link.href} className="text-sm font-semibold text-action-700 hover:underline">{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      <section className="mt-12 border border-ink-200 bg-ink-50 p-5" aria-labelledby="research-sources">
        <h2 id="research-sources" className="mb-2 text-sm font-bold text-ink-900">Official sources reviewed</h2>
        <p className="mb-3 text-xs leading-5 text-ink-700">Exam names were checked against examination bodies and official admissions or recruitment portals. Schedules and eligibility can change, so always confirm details with the conducting body.</p>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {category.sources.map((source) => (
            <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="text-xs font-semibold text-ink-700 underline underline-offset-4 hover:text-ink-900">
              {source.label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
