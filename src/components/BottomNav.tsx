'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useDismissableMenu } from '@/lib/useDismissableMenu';

// Mobile bottom tab bar: hidden on desktop (md:hidden), where the
// Header's horizontal nav takes over instead. Same routes, two layouts.
export default function BottomNav({ country }: { country: string }) {
  const pathname = usePathname();
  const { open, setOpen, ref } = useDismissableMenu<HTMLDivElement>();

  const items = [
    { label: 'Home', href: `/${country}`, icon: 'M3 11l9-8 9 8M5 10v10h14V10' },
    { label: 'Tests', href: `/${country}#exams`, icon: 'M5 4h14v16H5zM8 9h8M8 13h5' },
    { label: 'Find exam', href: `/${country}/exams`, icon: 'M21 21l-4.35-4.35M18 11a7 7 0 11-14 0 7 7 0 0114 0z' },
    { label: 'Results', href: `/${country}/results`, icon: 'M4 20V10M12 20V4M20 20v-7' },
  ];

  return (
    <nav
      aria-label="Mobile navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 bg-ink-900 flex pt-2 z-30"
      style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
    >
      {items.map((item) => {
        const active =
          item.label === 'Tests'
            ? pathname.includes('/mock-test') || pathname.includes('/test/')
            : item.label === 'Find exam'
              ? pathname.startsWith(`/${country}/exams`)
              : pathname === item.href;
        return (
          <Link
            key={item.label}
            href={item.href}
            aria-current={active ? 'page' : undefined}
            className={`flex min-h-12 flex-1 flex-col items-center gap-1 text-xs font-medium transition ${
              active ? 'text-ink-50' : 'text-ink-300'
            }`}
          >
            <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d={item.icon} />
            </svg>
            {item.label}
          </Link>
        );
      })}
      <div ref={ref} className="relative flex-1">
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          className={`flex min-h-12 w-full flex-col items-center gap-1 text-xs font-medium ${open ? 'text-ink-50' : 'text-ink-300'}`}
        >
          <svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="5" cy="12" r="1.8" />
            <circle cx="12" cy="12" r="1.8" />
            <circle cx="19" cy="12" r="1.8" />
          </svg>
          More
        </button>
        {open && (
          <div className="absolute bottom-full right-2 mb-3 w-52 border border-ink-700 bg-ink-900 p-2 shadow-2xl">
            {[
              ['Exam updates', `/${country}/exam-updates`],
              ['Study resources', `/${country}/blog`],
              ['About', `/${country}/about`],
              ['Contact', `/${country}/contact`],
              ['Privacy policy', `/${country}/privacy`],
              ['Terms of service', `/${country}/terms`],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="block px-3 py-3 text-sm text-ink-200 hover:bg-ink-800 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
