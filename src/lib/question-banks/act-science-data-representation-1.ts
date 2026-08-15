import type { Question } from '../questions';

const source = {
  kind: 'original' as const,
  reference: 'Original ACT Science practice passage and questions in the Data Representation style used in the 2026 Enhanced ACT Science section.',
  url: 'https://www.act.org/content/act/en/products-and-services/the-act-educator/the-act-test/enhancements-k12/faqs.html',
  checkedOn: '15 August 2026',
};

const PASSAGE = `A biology class measured the height of bean plants grown under four different daily light exposures over two weeks. Group A received 4 hours of light per day and grew to an average height of 8 cm. Group B received 8 hours of light per day and grew to an average height of 14 cm. Group C received 12 hours of light per day and grew to an average height of 19 cm. Group D received 16 hours of light per day and grew to an average height of 17 cm. Soil type, water amount, and temperature were held constant across all four groups.`;

const read = (q: string) => `Read the data description and answer the question that follows.\n\n${PASSAGE}\n\nQuestion: ${q}`;

export const ACT_SCIENCE_DATA_REPRESENTATION_1: Question[] = [
  { id: 'act-science-data-representation-01-001', section: 'Data Representation', topic: 'Data Reading', difficulty: 'easy', question: read('Which group of plants grew the tallest on average?'), options: ['Group C', 'Group A', 'Group B', 'Group D'], correctIndex: 0, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'Group C, with 12 hours of light per day, reached an average height of 19 cm, the tallest of the four groups.', source },
  { id: 'act-science-data-representation-01-002', section: 'Data Representation', topic: 'Data Reading', difficulty: 'easy', question: read('What was the average height of Group B\'s plants?'), options: ['8 cm', '14 cm', '19 cm', '17 cm'], correctIndex: 1, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'Group B, with 8 hours of light per day, grew to an average height of 14 cm.', source },
  { id: 'act-science-data-representation-01-003', section: 'Data Representation', topic: 'Trend Analysis', difficulty: 'medium', question: read('What happened to average plant height as light exposure increased from 4 to 12 hours per day?'), options: ['It stayed exactly the same', 'It decreased steadily', 'It increased', 'It increased then immediately dropped to zero'], correctIndex: 2, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'Height rose from 8 cm (4 hours) to 14 cm (8 hours) to 19 cm (12 hours), a consistent increase.', source },
  { id: 'act-science-data-representation-01-004', section: 'Data Representation', topic: 'Data Interpretation', difficulty: 'medium', question: read('What does the data for Group D suggest about increasing light exposure beyond 12 hours per day?'), options: ['Light exposure has no upper limit on benefiting growth', 'Beyond a certain point, additional light did not increase, and may have reduced, average height', 'Group D received no light at all', 'Group D grew taller than every other group'], correctIndex: 1, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'Height dropped from 19 cm at 12 hours (Group C) to 17 cm at 16 hours (Group D), suggesting a limit beyond which more light did not help.', source },
  { id: 'act-science-data-representation-01-005', section: 'Data Representation', topic: 'Experimental Design', difficulty: 'medium', question: read('Which variables did the class hold constant across all four groups to isolate the effect of light exposure?'), options: ['Soil type, water amount, and temperature', 'The species of bean plant only', 'Light exposure itself', 'The number of plants per group'], correctIndex: 0, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'The passage states that "soil type, water amount, and temperature were held constant across all four groups."', source },
];
