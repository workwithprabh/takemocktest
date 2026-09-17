import { ExamConfig } from '@/lib/exams';
import { getExamGuide } from '@/lib/exam-guides';
import { breadcrumbSchema, faqPageSchema, jsonLdHtml } from '@/lib/schema';
import type { Faq } from '@/lib/exam-faqs';
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
  faqs,
  children,
}: {
  country: string;
  exam: ExamConfig;
  pageName: string;
  pageSlug: string;
  placeholder?: string;
  heading?: string;
  faqs?: Faq[];
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
      {faqs && faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLdHtml(faqPageSchema(faqs)) }}
        />
      )}
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

      {/* A tab is a promise that there is something behind it. This bar used
          to be a fixed five, so every exam advertised "Previous papers" and
          "Syllabus" whether or not either page had been written: measured on
          the build of 17 September 2026, 306 of the 905 tab links on indexable
          pages landed on a noindexed placeholder reading "No verified papers
          are published yet", 171 under Previous papers, 130 under Syllabus and
          5 under Exam pattern. The pages
          are honest about being empty; the tab was not honest about leading
          there. A tab now appears only when its target has content, plus the
          tab for the page you are already on, so arriving at a placeholder by
          bookmark still shows you where you are. */}
      <nav aria-label={`${exam.name} resources`} className="mb-8 overflow-x-auto border-y border-ink-200 bg-white">
        <div className="flex min-w-max">
          {[
            { slug: '', label: 'Overview', built: true },
            { slug: 'mock-test', label: 'Mock tests', built: true },
            {
              slug: 'exam-pattern',
              label: 'Exam pattern',
              built: exam.stages.some((stage) => stage.pattern.status === 'official'),
            },
            { slug: 'syllabus', label: 'Syllabus', built: getExamGuide(exam.slug, 'syllabus') !== undefined },
            {
              slug: 'previous-year-papers',
              label: 'Previous papers',
              built: getExamGuide(exam.slug, 'previous-year-papers') !== undefined,
            },
          ].filter((item) => item.built || item.slug === pageSlug).map((item) => {
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

      {faqs && faqs.length > 0 && (
        <section className="mt-12" aria-labelledby="guide-faq-heading">
          <h2 id="guide-faq-heading" className="mb-4 text-xl font-bold text-ink-900 md:text-2xl">Frequently asked questions</h2>
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
    </div>
  );
}
