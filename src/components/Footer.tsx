import Link from 'next/link';
import { EXAM_LIST, getCheckedTestCount } from '@/lib/exams';
import { EXAM_CATEGORIES } from '@/lib/exam-catalog';
import { SITE_EMAIL } from '@/lib/schema';

// Footer is the internal-linking workhorse (per the competitor research):
// every exam + the AdSense-required static pages live here so Google can
// crawl deep pages from any point on the site.
export default function Footer({ country }: { country: string }) {
  const examsWithCheckedTests = EXAM_LIST.filter((exam) => getCheckedTestCount(exam) > 0);

  return (
    <footer className="bg-ink-900 mt-16 pb-20 lg:pb-0">
      <div className="max-w-6xl mx-auto px-5 py-10 grid grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        <div>
          <h2 className="font-sans font-semibold mb-3 text-ink-50">Available mock tests</h2>
          <ul className="space-y-2 text-ink-300">
            {examsWithCheckedTests.map((exam) => (
              <li key={exam.slug}>
                <div><Link href={`/${country}/${exam.slug}/mock-test`} className="hover:text-ink-50 transition">{exam.name} Mock Test</Link></div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-sans font-semibold mb-3 text-ink-50">Explore by goal</h2>
          <ul className="space-y-2 text-ink-300">
            {EXAM_CATEGORIES.slice(0, 7).map((category) => (
              <li key={category.slug}>
                <Link href={`/${country}/exams/${category.slug}`} className="hover:text-ink-50 transition">{category.name}</Link>
              </li>
            ))}
            <li><Link href={`/${country}/exams`} className="font-semibold text-ink-50 hover:text-ink-300 transition">View all exams →</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-sans font-semibold mb-3 text-ink-50">Resources</h2>
          <ul className="space-y-2 text-ink-300">
            <li><Link href={`/${country}/blog`} className="hover:text-ink-50 transition">Blog &amp; study tips</Link></li>
            <li><Link href={`/${country}/exams`} className="hover:text-ink-50 transition">All exam categories</Link></li>
            <li><Link href={`/${country}/ssc-cgl/exam-pattern`} className="hover:text-ink-50 transition">SSC CGL exam pattern</Link></li>
            <li><Link href={`/${country}/about`} className="hover:text-ink-50 transition">About</Link></li>
            <li><Link href={`/${country}/contact`} className="hover:text-ink-50 transition">Contact</Link></li>
            <li><a href={`mailto:${SITE_EMAIL}`} className="hover:text-ink-50 transition">{SITE_EMAIL}</a></li>
          </ul>
        </div>
        <div>
          <h2 className="font-sans font-semibold mb-3 text-ink-50">Legal</h2>
          <ul className="space-y-2 text-ink-300">
            <li><Link href={`/${country}/privacy`} className="hover:text-ink-50 transition">Privacy policy</Link></li>
            <li><Link href={`/${country}/terms`} className="hover:text-ink-50 transition">Terms of service</Link></li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-ink-300 pb-2 px-5">
        © {new Date().getFullYear()} TakeMockTest. All questions are original or sourced from officially released papers.
      </div>
      <div className="text-center text-[11px] text-ink-300 pb-6 px-5">
        TakeMockTest is an independent educational platform and is not affiliated with any examination body listed on this site.
      </div>
    </footer>
  );
}
