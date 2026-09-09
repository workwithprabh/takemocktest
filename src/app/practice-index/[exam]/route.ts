import { EXAM_LIST, getExam } from '@/lib/exams';
import { getQuestionsForTest, type Question } from '@/lib/questions';
import { getLRQuestions, getLRTestLabel, LR_SLUG, LR_TEST_SPECS } from '@/lib/logical-reasoning';
import type { PracticeOption } from '@/lib/practice-recommendations';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [...EXAM_LIST.map((exam) => ({ exam: exam.slug })), { exam: LR_SLUG }];
}

function topicsFor(questions: Question[]): PracticeOption['topics'] {
  const topics = new Map<string, PracticeOption['topics'][number]>();
  for (const question of questions) {
    if (!question.topic) continue;
    const key = JSON.stringify([question.section, question.topic]);
    const topic = topics.get(key) ?? { section: question.section, topic: question.topic, count: 0 };
    topic.count += 1;
    topics.set(key, topic);
  }
  return [...topics.values()];
}

// Exported at build time. Only topic counts are downloaded after submission;
// question banks and student answers never travel through this endpoint.
export async function GET(_request: Request, { params }: { params: Promise<{ exam: string }> }) {
  const { exam: slug } = await params;
  const options: PracticeOption[] = slug === LR_SLUG
    ? LR_TEST_SPECS.map((spec) => {
      const questions = getLRQuestions(spec);
      return { id: spec.id, name: getLRTestLabel(spec), stage: LR_SLUG, minutes: spec.duration, total: questions.length, topics: topicsFor(questions) };
    })
    : (getExam(slug)?.stages ?? []).flatMap((stage) => stage.tests
      .filter((test) => test.status === 'checked' && !test.sharedFrom)
      .map((test) => {
        const questions = getQuestionsForTest(slug, test.id);
        return { id: test.id, name: test.name, stage: stage.id, minutes: test.duration, total: questions.length, topics: topicsFor(questions) };
      }));
  return Response.json(options);
}
