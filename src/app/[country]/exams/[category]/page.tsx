import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CategoryIcon } from '@/components/ExamCategoryCard';
import { EXAM_CATEGORIES, getCategoryExamCount, getExamCategory } from '@/lib/exam-catalog';
import { breadcrumbSchema, itemListSchema, jsonLdHtml } from '@/lib/schema';
import { pageMetadata } from '@/lib/metadata';
import ExamFinder from '@/components/ExamFinder';

export function generateStaticParams() {
  return EXAM_CATEGORIES.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category: categorySlug } = await params;
  const category = getExamCategory(categorySlug);
  if (!category) return {};

  return pageMetadata({
    title: `${category.name} Exams in India: Mock Test Directory`,
    description: `${category.description} Browse current exam names and see which TakeMockTest practice series are available.`,
    path: `/in/exams/${category.slug}`,
  });
}

export default async function ExamCategoryPage({
  params,
}: {
  params: Promise<{ country: string; category: string }>;
}) {
  const { country, category: categorySlug } = await params;
  const category = getExamCategory(categorySlug);
  if (!category) return notFound();

  const liveExams = category.groups
    .flatMap((group) => group.exams)
    .filter((exam) => exam.liveSlug)
    .map((exam) => ({ name: exam.name, path: `/${country}/${exam.liveSlug}/mock-test` }));

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

      <Link href={`/${country}/exams`} className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-ink-600 hover:text-ink-900">
        <span aria-hidden="true">←</span> All exam categories
      </Link>

      <div className="mb-7 grid gap-5 border border-ink-200 bg-white p-6 md:grid-cols-[auto_1fr_auto] md:items-center md:p-8">
        <div className="flex h-14 w-14 items-center justify-center border border-action-100 bg-action-50 text-action-700">
          <CategoryIcon name={category.icon} />
        </div>
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">Exam pathway</p>
          <h1 className="mb-2 text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">{category.name}</h1>
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
