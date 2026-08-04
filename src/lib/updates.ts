// Single source of truth for the homepage "Latest Updates" feed — same
// pattern as exams.ts. Add real, dated entries here as official
// notifications/admit cards/results/answer keys/cutoffs are released.
//
// TODO: Add only real, dated entries that link to an official source.

export type UpdateCategory = 'Notification' | 'Admit Card' | 'Answer Key' | 'Result' | 'Cutoff';

export interface UpdateEntry {
  id: string;
  date: string; // e.g. '2026-03-15', or 'TBA' for placeholder entries
  headline: string;
  category: UpdateCategory;
  link: string;
}

// All categories share the same monochrome badge treatment — distinguished
// by label only, per the site-wide badge/tag hierarchy rule.
export const UPDATE_CATEGORY_STYLES: Record<UpdateCategory, string> = {
  Notification: 'bg-ink-100 text-ink-700',
  'Admit Card': 'bg-ink-100 text-ink-700',
  'Answer Key': 'bg-ink-100 text-ink-700',
  Result: 'bg-ink-100 text-ink-700',
  Cutoff: 'bg-ink-100 text-ink-700',
};

export const UPDATES: UpdateEntry[] = [];

export function getLatestUpdates(limit = 5): UpdateEntry[] {
  return UPDATES.slice(0, limit);
}
