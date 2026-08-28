import { ExamConfig } from '@/lib/exams';
import { breadcrumbSchema, jsonLdHtml } from '@/lib/schema';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import type { ReactNode } from 'react';

// Shared shell for the simple per-exam info pages (admit card, result,
// cutoff, answer key, eligibility, selection process, salary): same
// pattern as the syllabus page: breadcrumb schema + a placeholder for real
// content to be added once it's sourced from the official exam body.
export default function ExamInfoPageContent({
  country,
  exam,
  pageName,
  pageSlug,
  placeholder,
  heading,
  children,
}: {
  country: string;
  exam: ExamConfig;
  pageName: string;
  pageSlug: string;
  placeholder?: string;
  heading?: string;
  children?: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-4xl px-5 py-8 md:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLdHtml(
            breadcrumbSchema([
              { name: 'Home', path: `/${country}` },
              { name: exam.name, path: `/${country}/${exam.slug}` },
              { name: pageName, path: `/${country}/${exam.slug}/${pageSlug}` },
            ])
          ),
        }}
      />
      <Breadcrumbs items={[
        { label: 'Home', href: `/${country}` },
        { label: exam.name, href: `/${country}/${exam.slug}` },
        { label: pageName },
      ]} />
      <header className="mb-7 border-b border-ink-200 pb-6">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-action-700">{pageName}</p>
        <h1 className="font-sans text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">{heading ?? `${exam.name} ${pageName}`}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-ink-700">{exam.fullName}</p>
      </header>

      <nav aria-label={`${exam.name} resources`} className="mb-8 overflow-x-auto border-y border-ink-200 bg-white">
        <div className="flex min-w-max">
          {[
            { slug: '', label: 'Overview' },
            { slug: 'mock-test', label: 'Mock tests' },
            { slug: 'exam-pattern', label: 'Exam pattern' },
            { slug: 'syllabus', label: 'Syllabus' },
            { slug: 'previous-year-papers', label: 'Previous papers' },
          ].map((item) => {
            const active = item.slug === pageSlug;
            return (
              <Link
                key={item.slug}
                href={`/${country}/${exam.slug}${item.slug ? `/${item.slug}` : ''}`}
                aria-current={active ? 'page' : undefined}
                className={`border-b-2 px-4 py-3 text-sm font-semibold transition ${active ? 'border-action-700 bg-action-50 text-action-800' : 'border-transparent text-ink-700 hover:border-ink-400 hover:bg-ink-50'}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
      {children ?? (
        <div className="border border-ink-200 bg-white p-5">
          <p className="text-sm leading-6 text-ink-700">{placeholder}</p>
          <Link href={`/${country}/${exam.slug}/mock-test`} className="mt-4 inline-flex min-h-11 items-center bg-ink-900 px-4 text-sm font-semibold text-white">
            View available mock tests
          </Link>
        </div>
      )}
    </div>
  );
}
