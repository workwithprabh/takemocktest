import type { Question } from '../questions';

type Difficulty = 'easy' | 'medium' | 'hard';
type Mcq = [string, Difficulty, string, string[], number, string];
type Multi = [string, Difficulty, string, string[], number[], string];
type Numeric = [string, Difficulty, string, string, string, number];

const source = {
  kind: 'original' as const,
  reference: 'JEE (Advanced) 2026 syllabus and Paper 2 format',
  url: 'https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf',
  checkedOn: '24 August 2026',
};

const singles: Mcq[] = [
  ['Probability', 'medium', 'Two fair dice are thrown. The probability that the sum is 8 is', ['5/36', '1/6', '1/12', '7/36'], 0, 'The outcomes summing to 8 are (2,6),(3,5),(4,4),(5,3),(6,2), giving 5 out of 36 outcomes.'],
  ['Permutations and combinations', 'medium', 'The number of ways to select a committee of 3 people from 7 people is', ['21', '35', '42', '30'], 1, 'The number of ways is C(7,3) = 35.'],
  ['Sequences and series', 'medium', 'The sum of the infinite geometric series 4 + 2 + 1 + ... is', ['6', '4', '8', '12'], 2, 'With first term 4 and common ratio 1/2, the sum is 4/(1-1/2) = 8.'],
  ['Circles', 'medium', 'The radius of the circle x^2 + y^2 - 6x + 8y - 11 = 0 is', ['3', '4', '5', '6'], 3, 'Completing squares gives (x-3)^2+(y+4)^2 = 11+9+16 = 36, so the radius is 6.'],
];

const multis: Multi[] = [
  ['Definite integrals', 'medium', 'For the integral of f(x) = x^3 from -1 to 1, which statements are correct?', ['The value of the integral is 0', 'f(x) is an odd function', 'The integral of an odd function over a symmetric interval about 0 is always 0', 'f(x) attains its maximum value on [-1,1] at x = -1'], [0, 1, 2], 'x^3 is odd, so its integral over a symmetric interval is 0. Since f is increasing throughout [-1,1], its maximum there occurs at x=1, not x=-1.'],
  ['Matrices', 'medium', 'For a square matrix A satisfying A^3 = A, which statements are correct?', ['Every eigenvalue of A satisfies lambda^3 = lambda', 'A is always invertible', 'If A is invertible, then A^2 = I', 'The identity matrix I satisfies this equation'], [0, 2, 3], 'The equation A(A^2-I)=0 means eigenvalues satisfy lambda(lambda^2-1)=0, giving 0, 1, or -1; A need not be invertible (e.g. the zero matrix satisfies it). If A is invertible, A^2=I. I trivially satisfies I^3=I.'],
  ['Pair of straight lines', 'hard', 'For the lines represented by x^2 - 5xy + 6y^2 = 0, which statements are correct?', ['The pair represents two straight lines through the origin', 'The slopes of the two lines are 1/2 and 1/3', 'The two lines are perpendicular', 'The angle between the lines depends only on the coefficients a, h, b in the homogeneous equation'], [0, 1, 3], 'Factoring gives (x-2y)(x-3y)=0, lines with slopes 1/2 and 1/3 through the origin. Their slope product is 1/6, not -1, so they are not perpendicular; the angle formula for such a pair depends only on a, h, b.'],
  ['Limits', 'medium', 'Regarding the limit of (1 - cos x)/x^2 as x approaches 0, which statements are correct?', ['The limit equals 1/2', 'The limit can be evaluated using L\'Hopital\'s rule since it is of 0/0 form', 'The function (1-cos x)/x^2 is even', 'The limit equals 1'], [0, 1, 2], 'Since 1-cos x is approximately x^2/2 near 0, the limit is 1/2, a standard 0/0 application of L\'Hopital\'s rule. The function is even since both cos x and x^2 are even.'],
  ['Vectors', 'medium', 'For vectors a=(1,0,0), b=(0,1,0), c=(0,0,1), which statements are correct?', ['a, b, c are mutually perpendicular', 'The scalar triple product [a b c] equals 1', 'a, b, c are coplanar', 'a+b+c has magnitude sqrt(3)'], [0, 1, 3], 'The three unit vectors are mutually perpendicular with scalar triple product 1 (the determinant of the identity matrix), so they are not coplanar. Their sum has magnitude sqrt(1+1+1)=sqrt(3).'],
];

const numerics: Numeric[] = [
  ['Complex numbers', 'easy', 'Enter the value of i^100 (where i = sqrt(-1)).', '1', 'i^100 = (i^4)^25 = 1^25 = 1.', 4],
  ['Definite integrals', 'medium', 'Enter the value of the integral of (2x + 3) dx from x = 1 to x = 3.', '14', 'The antiderivative is x^2+3x. Its value from 1 to 3 is (9+9)-(1+3) = 18-4 = 14.', 4],
  ['Arithmetic progressions', 'medium', 'Enter the sum of the first 15 terms of the AP 5, 8, 11, ...', '390', 'With a=5, d=3, n=15: Sum = 7.5(2(5)+14(3)) = 7.5(10+42) = 390.', 4],
  ['Probability', 'medium', 'A bag contains 3 red and 1 blue ball. Enter the probability of drawing a red ball, as a decimal.', '0.75', 'P(red) = 3/4 = 0.75.', 4],
  ['Matrices', 'medium', 'Enter the trace of the matrix with rows (2,3) and (1,4).', '6', 'The trace is the sum of diagonal entries: 2+4=6.', 4],
  ['Straight lines', 'medium', 'For the line through (1,2) and (4,6), enter its slope, rounded to two decimal places.', '1.33', 'Slope = (6-2)/(4-1) = 4/3, approximately 1.33.', 2],
  ['Straight lines', 'medium', 'For the line through (1,2) and (4,6), enter the length of the segment joining the two points.', '5', 'Length = sqrt((4-1)^2+(6-2)^2) = sqrt(9+16) = sqrt(25) = 5.', 2],
  ['Circles', 'medium', 'For the circle (x-2)^2+(y-3)^2=25, enter its radius.', '5', 'Comparing with (x-h)^2+(y-k)^2=r^2 gives r^2=25, so r=5.', 2],
  ['Circles', 'medium', 'For the circle (x-2)^2+(y-3)^2=25, enter the y-coordinate of its centre.', '3', 'The centre of the circle is (2,3), so its y-coordinate is 3.', 2],
];

export const JEE_ADVANCED_PAPER_2_MATHEMATICS_2: Question[] = [
  ...singles.map(([topic, difficulty, question, options, correctIndex, explanation], index) => ({ id: `jee-advanced-p2-ma2-${String(index + 1).padStart(3, '0')}`, section: 'Mathematics', topic, difficulty, question, options, correctIndex, answerType: 'mcq' as const, marks: 3, negativeMarking: 1, explanation, source })),
  ...multis.map(([topic, difficulty, question, options, correctIndices, explanation], index) => ({ id: `jee-advanced-p2-ma2-${String(index + 5).padStart(3, '0')}`, section: 'Mathematics', topic, difficulty, question, options, correctIndex: -1, correctIndices, answerType: 'multi-select' as const, partialMarking: true, marks: 4, negativeMarking: 1, explanation, source })),
  ...numerics.map(([topic, difficulty, question, correctValue, explanation, marks], index) => ({ id: `jee-advanced-p2-ma2-${String(index + 10).padStart(3, '0')}`, section: 'Mathematics', topic, difficulty, question, options: [], correctIndex: -1, correctValue, answerType: 'numerical' as const, maxDecimalPlaces: 2, marks, negativeMarking: 0, explanation, source })),
];
