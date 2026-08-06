import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return pageMetadata({
    title: 'About',
    description: 'How TakeMockTest builds free mock tests and helps students review exam performance.',
    path: `/${country}/about`,
  });
}

export default async function AboutPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return (
    <div className="max-w-2xl mx-auto px-5 py-6">
      <h1 className="font-sans font-bold text-2xl mb-4 text-ink-900">About TakeMockTest</h1>
      <div className="space-y-4 text-sm text-ink-500 leading-relaxed">
        <p>
          TakeMockTest is a free practice platform for students preparing for competitive exams, currently
          covering SSC CGL, IBPS PO, and RRB NTPC. Every mock test is free to attempt, requires no account,
          and gives you an instant, section-wise breakdown of your performance the moment you submit.
        </p>
        <p>
          The idea behind TakeMockTest is simple: exam preparation should come with clear, honest feedback,
          not paywalls or clutter. Each test result shows exactly which sections need work, how your
          negative marking affected your score, and includes an explanation for every question (right or
          wrong) so every attempt is also a study session.
        </p>
        <p>
          Questions are sourced from officially released papers where available, or written in-house to
          match the published exam pattern. Exam-directory sources are linked on each category page.
        </p>
        <p>
          More exam series will be added only after their question banks and scoring rules are ready. You
          can check the <Link href={`/${country}/contact`} className="text-ink-900 underline hover:text-ink-500 transition">Contact page</Link> for the current support channel.
        </p>
      </div>
    </div>
  );
}
