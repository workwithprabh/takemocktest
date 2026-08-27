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
    <div className="mx-auto max-w-6xl px-5 py-10 md:py-14">
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

      <section className="mb-10 overflow-hidden border border-ink-200 bg-white md:grid md:grid-cols-[1.05fr_0.95fr]" aria-labelledby="exam-directory-heading">
        <div className="flex flex-col justify-center p-6 md:p-10">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-action-700">India exam directory</p>
          <h1 id="exam-directory-heading" className="mb-4 text-3xl font-bold tracking-tight text-ink-900 md:text-5xl">Find the right exam for your goal</h1>
          <p className="text-base leading-7 text-ink-700">
            Explore {CATALOG_EXAM_COUNT} recurring national, state, institute, and international tests commonly taken by students in India. Exam names are listed now; new question banks will be added carefully over time.
          </p>
        </div>
        <figure className="relative min-h-64 border-t border-ink-200 bg-ink-100 md:min-h-[360px] md:border-l md:border-t-0">
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

      <div className="mb-8 border border-ink-200 bg-ink-50 px-5 py-4 text-sm leading-6 text-ink-600">
        <strong className="text-ink-900">Availability is clearly marked.</strong> “Available” means a working mock-test series exists on TakeMockTest. Other exam names are cataloged for planned expansion and do not yet claim to have questions.
      </div>

      <ExamFinder categories={EXAM_CATEGORIES} country={country}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {EXAM_CATEGORIES.map((category) => (
            <ExamCategoryCard key={category.slug} category={category} country={country} headingLevel="h2" />
          ))}
        </div>
      </ExamFinder>
    </div>
  );
}
