import { notFound } from 'next/navigation';
import { COUNTRIES, getAllTestSlugs, getExam, getTestConfig, testIdToName } from '@/lib/exams';
import { getExamsForCountry } from '@/lib/exam-countries';
import TestAttemptClient from './TestAttemptClient';
import { pageMetadata } from '@/lib/metadata';
import { getQuestionsForTest } from '@/lib/questions';

export function generateStaticParams() {
  return COUNTRIES.flatMap((country) =>
    getExamsForCountry(country).flatMap((slug) =>
      getAllTestSlugs(getExam(slug)!).map((testId) => ({ country, exam: slug, testId }))
    )
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ country: string; exam: string; testId: string }>;
}) {
  const { country, exam: examSlug, testId } = await params;
  const exam = getExam(examSlug);
  if (!exam) return {};
  const testName = getTestConfig(exam, testId)?.test.name ?? testIdToName(testId);
  return pageMetadata({
    title: `${exam.name} ${testName}`,
    description: `Attempt the ${exam.name} ${testName} and review your result on this device.`,
    path: `/${country}/${exam.slug}/test/${testId}/attempt`,
    noIndex: true,
  });
}

export default async function TestAttemptPage({
  params,
}: {
  params: Promise<{ country: string; exam: string; testId: string }>;
}) {
  const { country, exam: examSlug, testId } = await params;
  const exam = getExam(examSlug);
  if (!exam) return notFound();
  const configuredTest = getTestConfig(exam, testId);
  if (!configuredTest) return notFound();
  const { test } = configuredTest;
  const questions = getQuestionsForTest(examSlug, testId);
  if (questions.length === 0) return notFound();

  return (
    <TestAttemptClient
      country={country}
      examSlug={exam.slug}
      examName={exam.name}
      duration={test.duration}
      sectionDuration={test.sectionDuration}
      sectionDurations={test.sectionDurations}
      timingGroups={test.timingGroups}
      marksPerCorrect={test.marksPerCorrect}
      negativeMarking={test.negativeMarking}
      testId={testId}
      testName={test.name}
      questions={questions}
    />
  );
}
