import type { Question } from '../questions';

const source = {
  kind: 'original' as const,
  reference: 'Original GRE Quantitative Reasoning practice question in the official Numeric Entry format, where the answer is typed in directly rather than chosen from options.',
  url: 'https://www.ets.org/gre/test-takers/general-test/prepare/content/quantitative-reasoning.html',
  checkedOn: '15 August 2026',
};

export const GRE_QUANTITATIVE_REASONING_NUMERIC_ENTRY_1: Question[] = [
  { id: 'gre-quant-numeric-entry-01-001', section: 'Numeric Entry', topic: 'Linear Equations', difficulty: 'easy', question: 'If 4x + 9 = 33, what is the value of x?', options: [], correctIndex: -1, correctValue: '6', answerType: 'numerical', marks: 1, negativeMarking: 0, explanation: '4x = 24, so x = 6.', source },
  { id: 'gre-quant-numeric-entry-01-002', section: 'Numeric Entry', topic: 'Geometry', difficulty: 'medium', question: 'A rectangular garden has an area of 84 square meters and a length of 12 meters. What is its width, in meters?', options: [], correctIndex: -1, correctValue: '7', answerType: 'numerical', marks: 1, negativeMarking: 0, explanation: 'Width = area / length = 84 / 12 = 7.', source },
  { id: 'gre-quant-numeric-entry-01-003', section: 'Numeric Entry', topic: 'Percentages', difficulty: 'easy', question: 'What is 15 percent of 240?', options: [], correctIndex: -1, correctValue: '36', answerType: 'numerical', marks: 1, negativeMarking: 0, explanation: '0.15 * 240 = 36.', source },
  { id: 'gre-quant-numeric-entry-01-004', section: 'Numeric Entry', topic: 'Statistics', difficulty: 'medium', question: 'The average of 6 numbers is 15. If one of the numbers is removed, the average of the remaining 5 numbers is 14. What was the removed number?', options: [], correctIndex: -1, correctValue: '20', answerType: 'numerical', marks: 1, negativeMarking: 0, explanation: 'The original sum is 6 * 15 = 90. The remaining sum is 5 * 14 = 70. The removed number is 90 - 70 = 20.', source },
  { id: 'gre-quant-numeric-entry-01-005', section: 'Numeric Entry', topic: 'Fractions', difficulty: 'medium', question: 'If 3/4 of a number is 51, what is the number?', options: [], correctIndex: -1, correctValue: '68', answerType: 'numerical', marks: 1, negativeMarking: 0, explanation: 'Let the number be x. (3/4)x = 51, so x = 51 * (4/3) = 68.', source },
  { id: 'gre-quant-numeric-entry-01-006', section: 'Numeric Entry', topic: 'Percentages', difficulty: 'hard', question: 'A car depreciates by 20 percent each year. If the car is worth $8,000 today after one year of depreciation, what was it worth, in dollars, before that depreciation?', options: [], correctIndex: -1, correctValue: '10000', answerType: 'numerical', marks: 1, negativeMarking: 0, explanation: 'Let the original value be P. P * 0.80 = 8000, so P = 10,000.', source },
  { id: 'gre-quant-numeric-entry-01-007', section: 'Numeric Entry', topic: 'Number Properties', difficulty: 'medium', question: 'What is the greatest common divisor of 48 and 60?', options: [], correctIndex: -1, correctValue: '12', answerType: 'numerical', marks: 1, negativeMarking: 0, explanation: '48 = 2^4 * 3 and 60 = 2^2 * 3 * 5. The common factors give a greatest common divisor of 2^2 * 3 = 12.', source },
  { id: 'gre-quant-numeric-entry-01-008', section: 'Numeric Entry', topic: 'Sequences', difficulty: 'easy', question: 'What is the sum of the first 10 positive integers?', options: [], correctIndex: -1, correctValue: '55', answerType: 'numerical', marks: 1, negativeMarking: 0, explanation: 'The sum of the first n positive integers is n(n+1)/2. For n = 10, this is 10 * 11 / 2 = 55.', source },
];
