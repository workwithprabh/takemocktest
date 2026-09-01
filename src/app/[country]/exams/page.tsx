import Image from 'next/image';
import ExamCategoryCard from '@/components/ExamCategoryCard';
import { CATALOG_EXAM_COUNT, EXAM_CATEGORIES } from '@/lib/exam-catalog';
import { breadcrumbSchema, jsonLdHtml } from '@/lib/schema';
import { pageMetadata } from '@/lib/metadata';
import ExamFinder from '@/components/ExamFinder';

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return pageMetadata({
    title: 'All Exams in India: Browse Mock Tests by Goal',
    description: 'Browse government, engineering, medical, management, law, study abroad, teaching, defence, and professional exam categories.',
    path: `/${country}/exams`,
    image: {
      url: '/images/exam-directory-india.webp',
      width: 1280,
      height: 720,
      alt: 'Indian students comparing competitive exam pathways at a study table',
    },
  });
}

export default async function AllExamsPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;

  return (
    <div className="mx-auto max-w-6xl px-5 py-6 md:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdHtml(
            breadcrumbSchema([
              { name: 'Home', path: `/${country}` },
              { name: 'All exams', path: `/${country}/exams` },
            ]),
          ),
        }}
      />

      <section className="mb-5 overflow-hidden border border-ink-200 bg-white md:grid md:grid-cols-[1.2fr_0.8fr]" aria-labelledby="exam-directory-heading">
        <div className="flex flex-col justify-center p-5 md:p-7">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-action-700">India exam directory</p>
          <h1 id="exam-directory-heading" className="mb-2 text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">Find an exam by name or goal</h1>
          <p className="max-w-2xl text-sm leading-6 text-ink-700">
            Explore {CATALOG_EXAM_COUNT} recurring national, state, institute, and international tests commonly taken by students in India. Exam names are listed now; new question banks will be added carefully over time.
          </p>
        </div>
        <figure className="relative aspect-[2.6/1] border-t border-ink-200 bg-ink-100 md:aspect-auto md:min-h-56 md:border-l md:border-t-0">
          <Image
            src="/images/exam-directory-india.webp"
            alt="Indian students comparing competitive exam pathways at a study table"
            fill
            priority
            sizes="(min-width: 768px) 45vw, 100vw"
            className="object-cover"
          />
        </figure>
      </section>

      <ExamFinder categories={EXAM_CATEGORIES} country={country}>
        <section aria-labelledby="browse-goals-heading">
          <div className="mb-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">Browse the directory</p>
            <h2 id="browse-goals-heading" className="text-xl font-bold text-ink-900 md:text-2xl">Choose your preparation goal</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {EXAM_CATEGORIES.map((category) => (
              <ExamCategoryCard key={category.slug} category={category} country={country} compact />
            ))}
          </div>
        </section>
      </ExamFinder>
    </div>
  );
}
