import Image from 'next/image';
import { COUNTRIES } from '@/lib/exams';
import { notFound } from 'next/navigation';
import { countryName, countryPublishes } from '@/lib/exam-countries';
import ExamCategoryCard from '@/components/ExamCategoryCard';
import { getCatalogExamCount, getExamCatalog } from '@/lib/exam-catalog';
import { breadcrumbSchema, jsonLdHtml } from '@/lib/schema';
import { pageMetadata } from '@/lib/metadata';
import ExamFinder from '@/components/ExamFinder';

// Generated only for countries that publish this section. Returning the country
// param here rather than leaning on the layout is what keeps the page out of a
// country's export entirely: calling notFound() instead still writes a file, and
// a static host serves that with a 200, which is a soft 404 rather than a
// missing page.
export function generateStaticParams() {
  return COUNTRIES.filter((country) => countryPublishes(country, 'exams')).map((country) => ({ country }));
}

// Built from the country's own categories rather than a hardcoded list, which
// was India's list and would have described Nigeria's directory as containing
// eight categories it does not have. Capped at six names so the description
// stays inside the 165-character budget for the largest tree.
function examDirectoryDescription(country: string): string {
  const names = getExamCatalog(country).map((category) => category.name.toLowerCase());
  if (names.length === 0) return `Browse the competitive exam categories covered in ${countryName(country)}.`;
  if (names.length === 1) {
    return `Browse the ${names[0]} exams taken in ${countryName(country)}, with the free mock tests published for each one.`;
  }
  return `Browse ${names.slice(0, 6).join(', ')} and other ${countryName(country)} exam categories.`;
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  // The hero image is of Indian students, so it is India's. Another country's
  // directory ships without one rather than borrowing it, which would be a
  // picture of the wrong students on the wrong page.
  const isIndia = country === 'in';
  return pageMetadata({
    title: `All Exams in ${countryName(country)}: Browse Mock Tests by Goal`,
    description: examDirectoryDescription(country),
    path: `/${country}/exams`,
    image: isIndia
      ? {
          url: '/images/exam-directory-india.webp',
          width: 1280,
          height: 720,
          alt: 'Indian students comparing competitive exam pathways at a study table',
        }
      : undefined,
  });
}

export default async function AllExamsPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const categories = getExamCatalog(country);
  const examCount = getCatalogExamCount(country);
  const isIndia = country === 'in';
  // exams is not published by every country: see COUNTRY_SECTIONS in
  // src/lib/exam-countries.ts. A country that does not publish it has no such
  // page rather than an empty one.
  if (!countryPublishes(country, 'exams')) notFound();

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
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-action-700">{countryName(country)} exam directory</p>
          <h1 id="exam-directory-heading" className="mb-2 text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">Find an exam by name or goal</h1>
          <p className="max-w-2xl text-sm leading-6 text-ink-700">
            Explore {examCount} recurring {examCount === 1 ? 'test' : 'tests'} commonly taken by students in {countryName(country)}. Exam names are listed now; new question banks will be added carefully over time.
          </p>
        </div>
        {isIndia && (
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
        )}
      </section>

      <ExamFinder categories={categories} country={country}>
        <section aria-labelledby="browse-goals-heading">
          <div className="mb-4">
            <p className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">Browse the directory</p>
            <h2 id="browse-goals-heading" className="text-xl font-bold text-ink-900 md:text-2xl">Choose your preparation goal</h2>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <ExamCategoryCard key={category.slug} category={category} country={country} compact />
            ))}
          </div>
        </section>
      </ExamFinder>
    </div>
  );
}
