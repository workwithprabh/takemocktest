import type { Question } from '../questions';

const source = {
  kind: 'original' as const,
  reference: 'Original Digital SAT Math practice question in the Problem-Solving and Data Analysis domain style used in the official test.',
  url: 'https://satsuite.collegeboard.org/sat/whats-on-the-test/structure',
  checkedOn: '14 August 2026',
};

export const SAT_MATH_PROBLEM_SOLVING_AND_DATA_ANALYSIS_1: Question[] = [
  { id: 'sat-math-psda-01-001', section: 'Problem-Solving and Data Analysis', topic: 'Percentages', difficulty: 'easy', question: 'A survey of 250 people found that 40% prefer tea over coffee. How many people in the survey prefer tea?', options: ['100', '90', '80', '110'], correctIndex: 0, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: '40% of 250 = 0.40 * 250 = 100.', source },
  { id: 'sat-math-psda-01-002', section: 'Problem-Solving and Data Analysis', topic: 'Statistics', difficulty: 'medium', question: 'The mean of five numbers is 18. Four of the numbers are 12, 15, 20, and 22. What is the fifth number?', options: ['19', '21', '20', '22'], correctIndex: 1, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'The sum of all five numbers is 5 * 18 = 90. The four known numbers sum to 69, so the fifth is 90 - 69 = 21.', source },
  { id: 'sat-math-psda-01-003', section: 'Problem-Solving and Data Analysis', topic: 'Probability', difficulty: 'medium', question: 'A jar contains 8 red marbles, 5 blue marbles, and 7 green marbles. If one marble is chosen at random, what is the probability that it is blue?', options: ['20%', '30%', '25%', '35%'], correctIndex: 2, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'There are 20 marbles total, 5 of which are blue: 5/20 = 25%.', source },
  { id: 'sat-math-psda-01-004', section: 'Problem-Solving and Data Analysis', topic: 'Percentages', difficulty: 'medium', question: 'A shirt originally priced at $40 is discounted by 25%, and then an additional 10% is taken off the discounted price. What is the final price?', options: ['$25', '$26', '$28', '$27'], correctIndex: 3, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: '$40 * 0.75 = $30 after the first discount, then $30 * 0.90 = $27 after the second.', source },
  { id: 'sat-math-psda-01-005', section: 'Problem-Solving and Data Analysis', topic: 'Statistics', difficulty: 'medium', question: 'What is the median of the data set {12, 7, 15, 9, 21, 7, 18}?', options: [], correctIndex: -1, correctValue: '12', answerType: 'numerical', marks: 1, negativeMarking: 0, explanation: 'Sorted, the data set is 7, 7, 9, 12, 15, 18, 21. The middle (4th of 7) value is 12.', source },
  { id: 'sat-math-psda-01-006', section: 'Problem-Solving and Data Analysis', topic: 'Rates and Ratios', difficulty: 'medium', question: 'A car travels 240 miles using 8 gallons of gas. At this rate, how many gallons are needed to travel 360 miles?', options: ['12', '11', '10', '13'], correctIndex: 0, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'The rate is 240/8 = 30 miles per gallon, so 360 miles requires 360/30 = 12 gallons.', source },
  { id: 'sat-math-psda-01-007', section: 'Problem-Solving and Data Analysis', topic: 'Ratios', difficulty: 'easy', question: 'In a class of 30 students, the ratio of boys to girls is 2:3. How many girls are in the class?', options: ['12', '18', '15', '20'], correctIndex: 1, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'The ratio 2:3 has 5 total parts. Girls make up 3/5 of the class: (3/5) * 30 = 18.', source },
];
