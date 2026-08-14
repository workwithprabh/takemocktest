import type { Question } from '../questions';

const source = {
  kind: 'original' as const,
  reference: 'Original Digital SAT Math practice question in the Geometry and Trigonometry domain style used in the official test.',
  url: 'https://satsuite.collegeboard.org/sat/whats-on-the-test/structure',
  checkedOn: '14 August 2026',
};

export const SAT_MATH_GEOMETRY_AND_TRIGONOMETRY_1: Question[] = [
  { id: 'sat-math-geo-trig-01-001', section: 'Geometry and Trigonometry', topic: 'Right Triangles', difficulty: 'easy', question: 'A right triangle has legs of length 6 and 8. What is the length of the hypotenuse?', options: ['9', '10', '11', '12'], correctIndex: 1, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'By the Pythagorean theorem, the hypotenuse is sqrt(6^2 + 8^2) = sqrt(36 + 64) = sqrt(100) = 10.', source },
  { id: 'sat-math-geo-trig-01-002', section: 'Geometry and Trigonometry', topic: 'Circles', difficulty: 'easy', question: 'A circle has a radius of 5. What is its area in terms of pi?', options: ['10*pi', '15*pi', '20*pi', '25*pi'], correctIndex: 3, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'Area = pi * r^2 = pi * 25 = 25*pi.', source },
  { id: 'sat-math-geo-trig-01-003', section: 'Geometry and Trigonometry', topic: 'Triangle Angles', difficulty: 'medium', question: "A triangle's three angles are in the ratio 2:3:4. What is the measure of the largest angle?", options: ['70 degrees', '75 degrees', '80 degrees', '85 degrees'], correctIndex: 2, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'The angles sum to 180 degrees across 9 ratio parts, so each part is 20 degrees, and the largest angle (4 parts) is 80 degrees.', source },
  { id: 'sat-math-geo-trig-01-004', section: 'Geometry and Trigonometry', topic: 'Volume', difficulty: 'easy', question: 'A rectangular prism has dimensions 4 by 5 by 6. What is its volume?', options: ['100', '110', '120', '130'], correctIndex: 2, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'Volume = 4 * 5 * 6 = 120.', source },
  { id: 'sat-math-geo-trig-01-005', section: 'Geometry and Trigonometry', topic: 'Trigonometric Ratios', difficulty: 'medium', question: 'In a right triangle, one angle measures 30 degrees and the hypotenuse has length 10. What is the length of the side opposite the 30-degree angle?', options: ['4', '5', '6', '7'], correctIndex: 1, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'The side opposite a 30-degree angle equals the hypotenuse times sin(30 degrees) = 10 * 0.5 = 5.', source },
  { id: 'sat-math-geo-trig-01-006', section: 'Geometry and Trigonometry', topic: 'Circles', difficulty: 'medium', question: 'A circle has a circumference of 31.4 (using pi = 3.14). What is its radius?', options: [], correctIndex: -1, correctValue: '5', answerType: 'numerical', marks: 1, negativeMarking: 0, explanation: 'Circumference = 2 * pi * r, so r = 31.4 / (2 * 3.14) = 31.4 / 6.28 = 5.', source },
  { id: 'sat-math-geo-trig-01-007', section: 'Geometry and Trigonometry', topic: 'Similar Figures', difficulty: 'hard', question: 'Two similar triangles have a scale factor of 3. If the smaller triangle has an area of 8, what is the area of the larger triangle?', options: ['24', '48', '64', '72'], correctIndex: 3, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'The area of similar figures scales with the square of the linear scale factor: 8 * 3^2 = 8 * 9 = 72.', source },
];
