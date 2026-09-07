import { notFound } from 'next/navigation';
import { COUNTRIES } from '@/lib/exams';
import {
  PRACTICE_MARKS_PER_CORRECT,
  PRACTICE_NEGATIVE_MARKING,
  PRACTICE_SLUG,
  getPublishedTopicSlugs,
  getTopicPool,
  getTopicPracticeDuration,
  getTopicPracticeQuestions,
} from '@/lib/practice-topics';
import { pageMetadata } from '@/lib/metadata';
import TestAttemptClient from '../../../[exam]/test/[testId]/attempt/TestAttemptClient';

export function generateStaticParams() {
  return COUNTRIES.flatMap((country) => getPublishedTopicSlugs().map((topic) => ({ country, topic })));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string; topic: string }> }) {
  const { country, topic: slug } = await params;
  const pool = getTopicPool(slug);
  if (!pool) return {};
  return pageMetadata({
    title: `${pool.topic.name} Practice Test`,
    description: `Attempt the ${pool.topic.name} practice set and review your result on this device.`,
    path: `/${country}/${PRACTICE_SLUG}/${slug}/attempt`,
    noIndex: true,
  });
}

export default async function TopicPracticeAttemptPage({
  params,
}: {
  params: Promise<{ country: string; topic: string }>;
}) {
  const { country, topic: slug } = await params;
  const pool = getTopicPool(slug);
  if (!pool) return notFound();

  // Attempts file under the `practice` slug so /in/results groups topic
  // practice apart from exam attempts, and the results page's retake link
  // resolves straight back to this route.
  return (
    <TestAttemptClient
      country={country}
      examSlug={PRACTICE_SLUG}
      examName="Topic Practice"
      duration={getTopicPracticeDuration(pool)}
      marksPerCorrect={PRACTICE_MARKS_PER_CORRECT}
      negativeMarking={PRACTICE_NEGATIVE_MARKING}
      testId={slug}
      testName={pool.topic.name}
      questions={getTopicPracticeQuestions(pool)}
      backHref={`/${country}/${PRACTICE_SLUG}/${slug}`}
      backLabel={`Back to ${pool.topic.name}`}
    />
  );
}
