// Shared category → visual-treatment map for the blog, reused by the index
// cards, the article hero, and the related-reading strip. Colors are pulled
// from the site's existing `action` / `live` / `attention` design tokens
// (defined in tailwind.config.ts as "reserved for interactive controls and
// time-sensitive exam states" but otherwise underused) plus one additional
// indigo pair for Study Tips, since there's no fourth reserved token.
// Mirrors the pastel-surface + line-icon pattern ExamCard.tsx already uses
// for the 11 exam categories, so the blog reads as the same product.

export interface BlogCategoryStyle {
  surface: string;
  band: string;
  iconText: string;
  icon: React.ReactNode;
}

export const BLOG_CATEGORY_STYLES: Record<string, BlogCategoryStyle> = {
  'Study Tips': {
    surface: 'bg-[#EEF0FC]',
    band: 'from-[#E2E6F9] to-[#F8F9FE]',
    iconText: 'text-[#4A4FA0]',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 11l2 2 4-4M5 4h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  'Exam Strategy': {
    surface: 'bg-attention-50',
    band: 'from-[#FDECC4] to-[#FFF8E9]',
    iconText: 'text-attention-600',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2v20M4 6h16M4 6c0 4 3.5 6 8 6s8-2 8-6M4 18h16" fill="none" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  'Mock Tests': {
    surface: 'bg-live-50',
    band: 'from-[#D3F0E7] to-[#F2FBF8]',
    iconText: 'text-live-600',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 4h16v16H4z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 9h8M8 13h5" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
  'Exam Guides': {
    surface: 'bg-action-50',
    band: 'from-[#D9E4FC] to-[#F3F7FE]',
    iconText: 'text-action-600',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V4H6.5A2.5 2.5 0 0 0 4 6.5v13Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
};

export const DEFAULT_BLOG_CATEGORY_STYLE: BlogCategoryStyle = BLOG_CATEGORY_STYLES['Exam Guides'];

export function getBlogCategoryStyle(category: string): BlogCategoryStyle {
  return BLOG_CATEGORY_STYLES[category] ?? DEFAULT_BLOG_CATEGORY_STYLE;
}
