export interface PracticeOption {
  id: string;
  name: string;
  stage: string;
  minutes: number;
  total: number;
  topics: { section: string; topic: string; count: number }[];
}

export interface TopicPerformance {
  section: string;
  topic: string;
  total: number;
  attempted: number;
  correct: number;
}

// ponytail: exact topic labels within one stage; add curated aliases only
// when content metadata supports them. Never guess equivalence across exams.
export function recommendPractice(stats: TopicPerformance[], options: PracticeOption[], testId: string) {
  const stage = options.find((option) => option.id === testId)?.stage;
  const used = new Set([testId]);
  return stats
    .filter((stat) => stat.topic !== 'Other' && stat.attempted >= 3 && stat.attempted >= stat.total / 2 && stat.correct / stat.attempted < 0.8)
    .sort((a, b) => a.correct / a.attempted - b.correct / b.attempted || b.attempted - a.attempted || a.topic.localeCompare(b.topic))
    .slice(0, 2)
    .map((stat) => {
      const candidates = options
        .filter((option) => stage !== undefined && option.stage === stage && !used.has(option.id))
        .map((option) => ({ option, count: option.topics.find((topic) => topic.section === stat.section && topic.topic === stat.topic)?.count ?? 0 }))
        .filter(({ count }) => count >= 3)
        .sort((a, b) => b.count / b.option.total - a.count / a.option.total || b.count - a.count || a.option.minutes - b.option.minutes || a.option.id.localeCompare(b.option.id));
      const match = candidates[0];
      if (match) used.add(match.option.id);
      return { ...stat, match };
    });
}
