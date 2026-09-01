import Link from 'next/link';
import type { ExamCatalogCategory } from '@/lib/exam-catalog';
import { getCategoryExamCount } from '@/lib/exam-catalog';

const TONES = {
  blue: 'bg-[#EEF4FF] text-[#244F9E] border-[#BFD2F5]',
  orange: 'bg-[#FFF4E8] text-[#8A4B08] border-[#F1CFA8]',
  green: 'bg-[#EAF7F3] text-[#17624F] border-[#B9DDD2]',
  violet: 'bg-[#F3EEFF] text-[#5A3D9B] border-[#D8C8F4]',
  rose: 'bg-[#FFF0F3] text-[#8A344C] border-[#F0C3CF]',
} as const;

const ICON_PATHS: Record<string, string[]> = {
  building: ['M5 20V8l7-4 7 4v12M3 20h18M8 11v5m4-5v5m4-5v5'],
  gear: ['M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z', 'M12 2v3m0 14v3M4.9 4.9 7 7m10 10 2.1 2.1M2 12h3m14 0h3M4.9 19.1 7 17m10-10 2.1-2.1'],
  medical: ['M9 3h6v6h6v6h-6v6H9v-6H3V9h6V3Z'],
  globe: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M3 12h18M12 3c2.5 2.5 3.8 5.5 3.8 9S14.5 18.5 12 21c-2.5-2.5-3.8-5.5-3.8-9S9.5 5.5 12 3Z'],
  chart: ['M4 20V10m6 10V4m6 16v-7m4 7H2'],
  book: ['M4 5.5A3.5 3.5 0 0 1 7.5 2H12v18H7.5A3.5 3.5 0 0 0 4 23V5.5Zm16 0A3.5 3.5 0 0 0 16.5 2H12v18h4.5A3.5 3.5 0 0 1 20 23V5.5Z'],
  shield: ['M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z', 'm9 12 2 2 4-5'],
  scale: ['M12 3v18M5 6h14M7 6l-4 8h8L7 6Zm10 0-4 8h8l-4-8ZM8 21h8'],
  teacher: ['M4 5h16v11H4V5Z', 'M8 21h8m-4-5v5M8 10l2.5 2.5L16 8'],
  briefcase: ['M4 7h16a2 2 0 0 1 2 2v9H2V9a2 2 0 0 1 2-2Z', 'M9 7V4h6v3m-5 5h4'],
  pencil: ['m4 20 4.5-1 11-11a2.1 2.1 0 0 0-3-3l-11 11L4 20Z', 'm14.5 7.5 3 3'],
};

export function CategoryIcon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6">
      {(ICON_PATHS[name] || ICON_PATHS.book).map((path) => <path key={path} d={path} />)}
    </svg>
  );
}

export default function ExamCategoryCard({
  category,
  country,
  headingLevel = 'h3',
  compact = false,
}: {
  category: ExamCatalogCategory;
  country: string;
  headingLevel?: 'h2' | 'h3';
  compact?: boolean;
}) {
  const examples = category.groups.flatMap((group) => group.exams).slice(0, 3);
  const Heading = headingLevel;

  return (
    <Link
      href={`/${country}/exams/${category.slug}`}
      className={`group flex flex-col border border-ink-200 bg-white transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink-900 ${compact ? 'min-h-32 gap-3 p-4 hover:border-action-600 hover:bg-action-50/40' : 'min-h-64 p-5 hover:-translate-y-1 hover:border-ink-300 hover:shadow-xl hover:shadow-ink-900/10'}`}
    >
      <div className={`flex items-center justify-center border ${TONES[category.tone]} ${compact ? 'h-9 w-9' : 'mb-5 h-12 w-12'}`}>
        <CategoryIcon name={category.icon} />
      </div>
      <Heading className={compact ? 'text-sm font-semibold leading-5 text-ink-900 group-hover:underline' : 'mb-2 text-lg font-bold text-ink-900'}>{category.name}</Heading>
      {!compact && (
        <>
          <p className="mb-4 text-sm leading-6 text-ink-500">{category.description}</p>
          <div className="mb-5 flex flex-wrap gap-1.5">
            {examples.map((item) => (
              <span key={item.name} className="bg-ink-100 px-2 py-1 text-xs font-medium text-ink-700">{item.name}</span>
            ))}
          </div>
          <div className="mt-auto flex items-center justify-between border-t border-ink-100 pt-4">
            <span className="text-xs font-semibold text-ink-500">{getCategoryExamCount(category)} exams listed</span>
            <span className="text-sm font-semibold text-ink-900 transition group-hover:translate-x-0.5" aria-hidden="true">→</span>
          </div>
        </>
      )}
    </Link>
  );
}
