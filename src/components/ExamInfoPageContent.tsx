import { ExamConfig } from '@/lib/exams';
import { breadcrumbSchema, jsonLdHtml } from '@/lib/schema';
import Breadcrumbs from '@/components/Breadcrumbs';
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
    <div className="max-w-2xl mx-auto px-5 py-6">
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
      <h1 className="font-sans font-bold text-2xl mb-1 text-ink-900">{heading ?? `${exam.name} ${pageName}`}</h1>
      <p className="text-ink-500 text-sm mb-6">{exam.fullName}</p>
      {children ?? (
        <div className="bg-white border border-ink-200 p-5">
          <p className="text-sm text-ink-500">{placeholder}</p>
        </div>
      )}
    </div>
  );
}
