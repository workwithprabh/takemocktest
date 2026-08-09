import type { Question } from '../questions';

type Difficulty = 'easy' | 'medium' | 'hard';
type Mcq = [string, Difficulty, string, string[], number, string, number];
type Multi = [string, Difficulty, string, string[], number[], string];
type Numeric = [string, Difficulty, string, string, string, number];

const source = {
  kind: 'original' as const,
  reference: 'JEE (Advanced) 2026 syllabus and Paper 1 format',
  url: 'https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf',
  checkedOn: '9 August 2026',
};

const singles: Mcq[] = [
  ['Differential calculus', 'medium', 'For x > 0, the minimum value of f(x) = x ln(x) is', ['-1/e', '0', '1/e', '-e'], 0, 'Since f\'(x) = ln(x) + 1, the only stationary point is x = 1/e. Also f\'\'(x) = 1/x > 0, so the minimum value is -1/e.', 3],
  ['Matrices', 'medium', 'The determinant of the matrix with rows (1,1,1), (1,2,3), and (1,3,6) equals', ['0', '1', '2', '3'], 1, 'Expanding along the first row gives 3 - 3 + 1 = 1.', 3],
  ['Definite integrals', 'hard', 'The value of the integral of ln(sin x) from 0 to pi/2 is', ['-(pi)ln(2)', '-ln(2)', '-(pi/2)ln(2)', '(pi/2)ln(2)'], 2, 'Using I = integral ln(sin x) and the substitution x -> pi/2 - x gives 2I = integral ln(sin x cos x). Standard symmetry then yields I = -(pi/2)ln 2.', 3],
  ['Binomial theorem', 'medium', 'The coefficient of x^5 in (1 + x)^8 is', ['28', '35', '70', '56'], 3, 'The coefficient is C(8,5) = 56.', 3],
];

const multis: Multi[] = [
  ['Functions', 'medium', 'For p(x) = x^3 - 3x, which statements are correct?', ['p is an odd function', 'p has a local maximum value 2 at x = -1', 'The real zeros are -sqrt(3), 0, and sqrt(3)', 'The integral of p(x) from -1 to 1 is 0'], [0, 1, 2, 3], 'Odd symmetry gives the integral statement. Factoring gives the zeros, and p\'(x) = 3(x^2 - 1) identifies the stated local maximum.',],
  ['Matrices', 'hard', 'Let A be a real square matrix satisfying A^2 = A. Which statements must be true?', ['Every eigenvalue of A is 0 or 1', 'The trace of A is an integer', 'I - A is also idempotent', 'If A is invertible, then A = I'], [0, 1, 2, 3], 'The polynomial t(t-1) annihilates A and has distinct roots. Thus A is diagonalizable with eigenvalues 0 or 1. The remaining statements follow directly.',],
  ['Complex numbers', 'medium', 'If |z - 1| = |z + 1| for a complex number z, which statements are correct?', ['Re(z) = 0', 'z + conjugate(z) = 0', 'z^2 is real and non-positive', 'z must be nonzero'], [0, 1, 2], 'The locus is the imaginary axis, so z = iy. Then z + conjugate(z) = 0 and z^2 = -y^2. The value z = 0 is allowed.',],
  ['Sequences and series', 'medium', 'For the sequence a_n = 1/n, which statements are correct?', ['It is strictly decreasing', 'It is bounded', 'It converges to 0', 'The series sum of a_n converges'], [0, 1, 2], 'The sequence is decreasing, bounded between 0 and 1, and tends to 0. Its associated harmonic series diverges.',],
];

const numerics: Numeric[] = [
  ['Combinatorics', 'hard', 'How many onto functions are there from a three-element set to a two-element set?', '6', 'There are 2^3 total functions. Excluding the two constant functions leaves 6 onto functions.', 4],
  ['Determinants', 'medium', 'Enter the determinant of the matrix with rows (1,1,1), (1,2,4), and (1,4,16).', '6', 'This is a Vandermonde determinant: (2-1)(4-1)(4-2) = 6.', 4],
  ['Definite integrals', 'medium', 'Evaluate the integral of 6x(1-x) from 0 to 1.', '1', 'The antiderivative is 3x^2 - 2x^3, which changes by 1 over the interval.', 4],
  ['Inequalities', 'medium', 'For x > 0, enter the minimum value of x + 9/x.', '6', 'AM-GM gives x + 9/x >= 2sqrt(9) = 6, with equality at x = 3.', 4],
];

const matches: Mcq[] = [
  ['Differentiation', 'hard', 'Match the derivative values at the stated points: P: d(x^2)/dx at 1; Q: d(x^3)/dx at 1; R: d(sin(pi x/2))/dx at 0; S: d(ln x)/dx at 1. List II: (1) 1, (2) 2, (3) 3, (4) pi/2, (5) 0.', ['P-2, Q-3, R-4, S-1', 'P-3, Q-2, R-1, S-4', 'P-2, Q-4, R-3, S-1', 'P-1, Q-3, R-4, S-2'], 3, 'The four derivative values are 2, 3, pi/2, and 1 respectively.', 4],
  ['Sequences', 'medium', 'Match each sequence with its limit: P: n/(n+1); Q: (1+1/n)^n; R: 1/n; S: (-1)^n. List II: (1) 0, (2) 1, (3) e, (4) does not exist, (5) infinity.', ['P-1, Q-2, R-3, S-4', 'P-2, Q-1, R-4, S-3', 'P-2, Q-3, R-1, S-4', 'P-3, Q-2, R-1, S-5'], 2, 'The limits are 1, e, 0, and non-existent respectively.', 4],
  ['Conic sections', 'medium', 'Match each conic with its eccentricity: P: x^2+y^2=4; Q: y^2=4x; R: x^2/4+y^2/3=1; S: x^2-y^2=1. List II: (1) 0, (2) 1/2, (3) 1, (4) sqrt(2), (5) 2.', ['P-1, Q-2, R-3, S-4', 'P-1, Q-3, R-2, S-4', 'P-2, Q-3, R-1, S-5', 'P-1, Q-4, R-2, S-3'], 1, 'A circle has eccentricity 0, a parabola 1, the ellipse has sqrt(1-3/4)=1/2, and the hyperbola has sqrt(2).', 4],
  ['Equations', 'medium', 'Match each equation with its number of real roots: P: x^2=1; Q: x^2+1=0; R: x^3=x; S: e^x=0. List II: (1) 0, (2) 1, (3) 2, (4) 3, (5) 4.', ['P-3, Q-1, R-4, S-1', 'P-2, Q-1, R-3, S-2', 'P-3, Q-2, R-4, S-1', 'P-4, Q-1, R-3, S-2'], 0, 'The equations have 2, 0, 3, and 0 real roots respectively.', 4],
];

export const JEE_ADVANCED_PAPER_1_MATHEMATICS_1: Question[] = [
  ...singles.map(([topic, difficulty, question, options, correctIndex, explanation, marks], index) => ({ id: `jee-advanced-p1-ma-${String(index + 1).padStart(3, '0')}`, section: 'Mathematics', topic, difficulty, question, options, correctIndex, answerType: 'mcq' as const, marks, negativeMarking: 1, explanation, source })),
  ...multis.map(([topic, difficulty, question, options, correctIndices, explanation], index) => ({ id: `jee-advanced-p1-ma-${String(index + 5).padStart(3, '0')}`, section: 'Mathematics', topic, difficulty, question, options, correctIndex: -1, correctIndices, answerType: 'multi-select' as const, partialMarking: true, marks: 4, negativeMarking: 1, explanation, source })),
  ...numerics.map(([topic, difficulty, question, correctValue, explanation, marks], index) => ({ id: `jee-advanced-p1-ma-${String(index + 9).padStart(3, '0')}`, section: 'Mathematics', topic, difficulty, question, options: [], correctIndex: -1, correctValue, answerType: 'numerical' as const, maxDecimalPlaces: 2, marks, negativeMarking: 0, explanation, source })),
  ...matches.map(([topic, difficulty, question, options, correctIndex, explanation, marks], index) => ({ id: `jee-advanced-p1-ma-${String(index + 13).padStart(3, '0')}`, section: 'Mathematics', topic, difficulty, question, options, correctIndex, answerType: 'mcq' as const, marks, negativeMarking: 1, explanation, source })),
];
