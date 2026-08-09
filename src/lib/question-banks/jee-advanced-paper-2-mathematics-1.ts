import type { Question } from '../questions';

type Difficulty = 'easy' | 'medium' | 'hard';
type Mcq = [string, Difficulty, string, string[], number, string];
type Multi = [string, Difficulty, string, string[], number[], string];
type Numeric = [string, Difficulty, string, string, string, number];

const source = {
  kind: 'original' as const,
  reference: 'JEE (Advanced) 2026 syllabus and Paper 2 format',
  url: 'https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf',
  checkedOn: '9 August 2026',
};

const singles: Mcq[] = [
  ['Matrices', 'medium', 'The largest eigenvalue of the matrix with rows (2,1) and (1,2) is', ['1', '3', '2', '4'], 1, 'The characteristic polynomial is (2-lambda)^2-1, giving eigenvalues 1 and 3.',],
  ['Parabola', 'medium', 'The y-intercept of the tangent to y=x^2 at x=2 is', ['4', '0', '-4', '-2'], 2, 'The tangent is y-4=4(x-2), or y=4x-4.',],
  ['Conic sections', 'medium', 'The area enclosed by x^2/9 + y^2/4 = 1 is', ['3pi', '5pi', '12pi', '6pi'], 3, 'The ellipse has semi-axes 3 and 2, so its area is pi ab = 6pi.',],
  ['Limits', 'medium', 'The limit of n((1+1/n)^2-1) as n tends to infinity is', ['2', '1', '0', '4'], 0, 'Expanding gives n(2/n+1/n^2)=2+1/n, whose limit is 2.',],
];

const multis: Multi[] = [
  ['Differential calculus', 'hard', 'Which statements about a differentiable real function are always true?', ['Differentiability at a point implies continuity there', 'Every derivative has the intermediate value property', 'At an interior local extremum, an existing derivative is zero', 'The derivative must be continuous'], [0, 1, 2], 'Differentiability implies continuity, derivatives satisfy Darboux\'s theorem, and Fermat\'s theorem gives the stationary condition. Derivatives need not be continuous.',],
  ['Matrices', 'medium', 'If an n by n matrix A is invertible, which statements must be true?', ['det(A) is nonzero', 'rank(A)=n', 'The null space of A contains only the zero vector', 'trace(A) is nonzero'], [0, 1, 2], 'Invertibility is equivalent to nonzero determinant, full rank, and zero nullity. An invertible matrix may have zero trace.',],
  ['Probability', 'hard', 'Events A and B are independent with P(A)=1/2 and P(B)=2/5. Which statements are correct?', ['P(A intersection B)=1/5', 'P(A union B)=7/10', 'The complements of A and B are independent', 'A and B are mutually exclusive'], [0, 1, 2], 'Independence gives intersection 1/5 and union 1/2+2/5-1/5=7/10. Complements remain independent, while mutually exclusive positive-probability events cannot be independent.',],
  ['Complex numbers', 'medium', 'For a complex number z with |z|=1, which statements are always true?', ['1/z equals conjugate(z)', 'z+conjugate(z) is real', 'z-conjugate(z) is purely imaginary', 'z^2=1'], [0, 1, 2], 'The unit-modulus identity gives 1/z=conjugate(z). The sum and difference have the stated types. Only z=1 or -1 has square 1.',],
  ['Sequences and series', 'medium', 'For the geometric series 1+1/3+1/9+..., which statements are correct?', ['Its sum is 3/2', 'It converges absolutely', 'Its nth term tends to zero', 'The sum of the squares of its terms is 9/8'], [0, 1, 2, 3], 'The common ratio is 1/3. The sum is 1/(1-1/3)=3/2, while the squared-term series has ratio 1/9 and sum 9/8.',],
];

const numerics: Numeric[] = [
  ['Determinants', 'hard', 'Enter the determinant of the matrix with rows (2,1,0), (1,2,1), and (0,1,2).', '4', 'Expansion gives 2(4-1)-2=4.', 4],
  ['Combinatorics', 'hard', 'Enter the number of derangements of four distinct objects.', '9', 'The derangement recurrence gives !4 = 3(!3+!2)=3(2+1)=9.', 4],
  ['Three-dimensional geometry', 'medium', 'Enter the distance from (1,2,3) to the plane x+2y+2z=9, rounded to two decimal places.', '0.67', 'The distance is |1+4+6-9|/sqrt(1+4+4)=2/3, which rounds to 0.67.', 4],
  ['Definite integrals', 'medium', 'Evaluate the integral of 12x^2(1-x) from 0 to 1.', '1', 'The integral is [4x^3-3x^4] from 0 to 1, equal to 1.', 4],
  ['Polynomials', 'medium', 'Enter the product of the roots of x^3-6x^2+11x-6=0.', '6', 'For a monic cubic, the product is the negative of the constant term, hence 6.', 4],
  ['Arithmetic progressions', 'medium', 'For the arithmetic sequence with first term 3 and common difference 2, enter its 20th term.', '41', 'a_20=3+19(2)=41.', 2],
  ['Arithmetic progressions', 'medium', 'For the arithmetic sequence with first term 3 and common difference 2, enter the sum of its first 20 terms.', '440', 'S_20=20(3+41)/2=440.', 2],
  ['Circles', 'medium', 'For the circle x^2+y^2-6x+8y=0, enter the sum of the coordinates of its centre.', '-1', 'Completing squares gives centre (3,-4), whose coordinate sum is -1.', 2],
  ['Circles', 'medium', 'For the circle x^2+y^2-6x+8y=0, enter its diameter.', '10', 'Completing squares gives (x-3)^2+(y+4)^2=25, so the radius is 5 and diameter is 10.', 2],
];

export const JEE_ADVANCED_PAPER_2_MATHEMATICS_1: Question[] = [
  ...singles.map(([topic, difficulty, question, options, correctIndex, explanation], index) => ({ id: `jee-advanced-p2-ma-${String(index + 1).padStart(3, '0')}`, section: 'Mathematics', topic, difficulty, question, options, correctIndex, answerType: 'mcq' as const, marks: 3, negativeMarking: 1, explanation, source })),
  ...multis.map(([topic, difficulty, question, options, correctIndices, explanation], index) => ({ id: `jee-advanced-p2-ma-${String(index + 5).padStart(3, '0')}`, section: 'Mathematics', topic, difficulty, question, options, correctIndex: -1, correctIndices, answerType: 'multi-select' as const, partialMarking: true, marks: 4, negativeMarking: 1, explanation, source })),
  ...numerics.map(([topic, difficulty, question, correctValue, explanation, marks], index) => ({ id: `jee-advanced-p2-ma-${String(index + 10).padStart(3, '0')}`, section: 'Mathematics', topic, difficulty, question, options: [], correctIndex: -1, correctValue, answerType: 'numerical' as const, maxDecimalPlaces: 2, marks, negativeMarking: 0, explanation, source })),
];
