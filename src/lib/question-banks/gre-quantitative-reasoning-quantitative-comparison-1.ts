import type { Question } from '../questions';

const source = {
  kind: 'original' as const,
  reference: 'Original GRE Quantitative Reasoning practice question in the official Quantitative Comparison format, which always uses the same four fixed answer choices.',
  url: 'https://www.ets.org/gre/test-takers/general-test/prepare/content/quantitative-reasoning.html',
  checkedOn: '15 August 2026',
};

const QC_OPTIONS = [
  'Quantity A is greater',
  'Quantity B is greater',
  'The two quantities are equal',
  'The relationship cannot be determined from the information given',
];

const qc = (a: string, b: string, given?: string) => {
  const info = given ? `${given}\n\n` : '';
  return `${info}Quantity A: ${a}\nQuantity B: ${b}\n\nCompare the two quantities.`;
};

export const GRE_QUANTITATIVE_REASONING_QUANTITATIVE_COMPARISON_1: Question[] = [
  { id: 'gre-quant-qc-01-001', section: 'Quantitative Comparison', topic: 'Exponents', difficulty: 'easy', question: qc('3^4', '4^3'), options: QC_OPTIONS, correctIndex: 0, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: '3^4 = 81 and 4^3 = 64, so Quantity A is greater.', source },
  { id: 'gre-quant-qc-01-002', section: 'Quantitative Comparison', topic: 'Algebra', difficulty: 'hard', question: qc('x', 'x^2', 'x is a real number.'), options: QC_OPTIONS, correctIndex: 3, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'For x = 2, x < x^2 (2 < 4); for x = 0.5, x > x^2 (0.5 > 0.25); for x = 1, x = x^2. The relationship changes depending on x, so it cannot be determined.', source },
  { id: 'gre-quant-qc-01-003', section: 'Quantitative Comparison', topic: 'Statistics', difficulty: 'medium', question: qc('the arithmetic mean of 10, 20, and 30', 'the median of 10, 20, and 30'), options: QC_OPTIONS, correctIndex: 2, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'The mean of 10, 20, 30 is 20, and the median is also 20, so the two quantities are equal.', source },
  { id: 'gre-quant-qc-01-004', section: 'Quantitative Comparison', topic: 'Geometry', difficulty: 'medium', question: qc('the area of a rectangle with length 8 and width 5', 'the area of a square with side 6'), options: QC_OPTIONS, correctIndex: 0, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'The rectangle has area 8 * 5 = 40, and the square has area 6 * 6 = 36, so Quantity A is greater.', source },
  { id: 'gre-quant-qc-01-005', section: 'Quantitative Comparison', topic: 'Algebra', difficulty: 'medium', question: qc('x', '5', 'x + y = 10 and x > y.'), options: QC_OPTIONS, correctIndex: 0, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'If x + y = 10 and x > y, then x must be greater than 5 (since x = y = 5 would violate x > y), so Quantity A is always greater.', source },
  { id: 'gre-quant-qc-01-006', section: 'Quantitative Comparison', topic: 'Factorials', difficulty: 'medium', question: qc('5!', '4! * 5'), options: QC_OPTIONS, correctIndex: 2, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: '5! = 120, and 4! * 5 = 24 * 5 = 120, so the two quantities are equal.', source },
  { id: 'gre-quant-qc-01-007', section: 'Quantitative Comparison', topic: 'Number Properties', difficulty: 'hard', question: qc('the remainder when n^2 is divided by 4', '2', 'n is a positive integer.'), options: QC_OPTIONS, correctIndex: 1, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'For any integer n, n^2 divided by 4 leaves a remainder of either 0 (n even) or 1 (n odd), never 2, so Quantity B is always greater.', source },
  { id: 'gre-quant-qc-01-008', section: 'Quantitative Comparison', topic: 'Geometry', difficulty: 'medium', question: qc('the circumference of a circle with radius 6', '40', 'Use pi is approximately 3.14.'), options: QC_OPTIONS, correctIndex: 1, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'Circumference = 2 * pi * 6 is approximately 37.7, which is less than 40, so Quantity B is greater.', source },
  { id: 'gre-quant-qc-01-009', section: 'Quantitative Comparison', topic: 'Probability', difficulty: 'medium', question: qc('the probability of rolling a sum of 7 with two standard six-sided dice', '1/6'), options: QC_OPTIONS, correctIndex: 2, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'There are 6 ways to roll a sum of 7 out of 36 total outcomes, giving a probability of 6/36 = 1/6, so the quantities are equal.', source },
  { id: 'gre-quant-qc-01-010', section: 'Quantitative Comparison', topic: 'Algebra', difficulty: 'easy', question: qc('a/b', '1', 'a and b are positive integers with a < b.'), options: QC_OPTIONS, correctIndex: 1, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'Since a and b are positive with a < b, the fraction a/b is always less than 1, so Quantity B is greater.', source },
  { id: 'gre-quant-qc-01-011', section: 'Quantitative Comparison', topic: 'Number Properties', difficulty: 'medium', question: qc('the number of positive divisors of 36', '9'), options: QC_OPTIONS, correctIndex: 2, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'The positive divisors of 36 are 1, 2, 3, 4, 6, 9, 12, 18, and 36, a total of 9, so the quantities are equal.', source },
  { id: 'gre-quant-qc-01-012', section: 'Quantitative Comparison', topic: 'Algebra', difficulty: 'hard', question: qc('x^2 + 1', '2x', 'x is a real number.'), options: QC_OPTIONS, correctIndex: 3, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'x^2 + 1 - 2x = (x - 1)^2, which is always greater than or equal to 0, so Quantity A is at least as large as Quantity B, but they are exactly equal when x = 1 and Quantity A is strictly greater otherwise. Since the relationship is not constant across all values of x, it cannot be determined from the information given.', source },
];
