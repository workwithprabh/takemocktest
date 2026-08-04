import { pageMetadata } from '@/lib/metadata';
import { SITE_EMAIL } from '@/lib/schema';

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return pageMetadata({
    title: 'Contact',
    description: 'Contact and question-correction information for TakeMockTest.',
    path: `/${country}/contact`,
    noIndex: true,
  });
}

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-6">
      <h1 className="font-sans font-bold text-2xl mb-4 text-ink-900">Contact us</h1>
      <div className="space-y-4 text-sm text-ink-500 leading-relaxed mb-6">
        <p>
          Found an issue with a question, have feedback on a mock test, or want to suggest a new exam to
          support? We’d like to hear about it.
        </p>
      </div>
      <div className="border border-ink-200 bg-white p-5 text-sm leading-6 text-ink-500">
        Email us at{' '}
        <a className="font-semibold text-ink-900 underline underline-offset-4" href={`mailto:${SITE_EMAIL}`}>
          {SITE_EMAIL}
        </a>
        . For question corrections, please include the exam, mock-test name, question number, and a short
        explanation of the issue.
      </div>
    </div>
  );
}
