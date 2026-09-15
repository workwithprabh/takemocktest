const CATEGORY_VISUALS: Record<string, string> = {
  SSC: 'government-careers.webp',
  Banking: 'government-careers.webp',
  Railways: 'government-careers.webp',
  'Civil Services': 'civil-services.webp',
  Engineering: 'engineering.webp',
  'English Proficiency': 'study-abroad.webp',
  'Study Abroad': 'study-abroad.webp',
  Finance: 'business-finance.webp',
  Management: 'business-finance.webp',
  Defence: 'defence.webp',
  Law: 'law.webp',
  'Teaching & Research': 'university-learning.webp',
  'University & Science': 'university-learning.webp',
  'Design, Fashion & Hospitality': 'creative-careers.webp',
  Medical: 'medical.webp',
};

export function getExamVisual(category: string) {
  return `/images/exam-categories/${CATEGORY_VISUALS[category] ?? 'government-careers.webp'}`;
}
