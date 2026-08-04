import ResultsClient from './ResultsClient';
import { pageMetadata } from '@/lib/metadata';

// Personalized, localStorage-only content — nothing here is meaningful to a
// crawler, so keep it out of the index.
export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return pageMetadata({
    title: 'My Results',
    description: 'Review mock-test results saved on this device.',
    path: `/${country}/results`,
    noIndex: true,
  });
}

export default async function ResultsPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return <ResultsClient country={country} />;
}
