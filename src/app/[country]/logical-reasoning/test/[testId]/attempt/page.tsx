import { notFound } from 'next/navigation';
import { COUNTRIES } from '@/lib/exams';
import {
  LR_MARKS_PER_CORRECT,
  LR_NAME,
  LR_NEGATIVE_MARKING,
  LR_SLUG,
  getAllLRTestIds,
  getLRQuestions,
  getLRTestSpec,
} from '@/lib/logical-reasoning';
import { pageMetadata } from '@/lib/metadata';
import TestAttemptClient from '../../../../[exam]/test/[testId]/attempt/TestAttemptClient';

export function generateStaticParams() {
  return COUNTRIES.flatMap((country) => getAllLRTestIds().map((testId) => ({ country, testId })));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string; testId: string }> }) {
  const { country, testId } = await params;
  const spec = getLRTestSpec(testId);
  if (!spec) return {};
  return pageMetadata({
    title: `Logical Reasoning ${spec.name}`,
    description: `Attempt the logical reasoning ${spec.name} and review your result on this device.`,
    path: `/${country}/${LR_SLUG}/test/${testId}/attempt`,
    noIndex: true,
  });
}

export default async function LogicalReasoningAttemptPage({
  params,
}: {
  params: Promise<{ country: string; testId: string }>;
}) {
  const { country, testId } = await params;
  const spec = getLRTestSpec(testId);
  if (!spec) return notFound();

  // The hub files attempts under its own slug, so /in/results groups them
  // apart from exam attempts and the "retake" link there resolves back to
  // this route unchanged.
  return (
    <TestAttemptClient
      country={country}
      examSlug={LR_SLUG}
      examName={LR_NAME}
      duration={spec.duration}
      marksPerCorrect={LR_MARKS_PER_CORRECT}
      negativeMarking={LR_NEGATIVE_MARKING}
      testId={testId}
      testName={spec.name}
      questions={getLRQuestions(spec)}
      backHref={`/${country}/${LR_SLUG}`}
      backLabel="Back to logical reasoning"
    />
  );
}
