import type { Question } from '../questions';

type Difficulty = 'easy' | 'medium' | 'hard';
type Mcq = [string, Difficulty, string, string[], number, string, number];
type Multi = [string, Difficulty, string, string[], number[], string];
type Numeric = [string, Difficulty, string, string, string, number];

const source = {
  kind: 'original' as const,
  reference: 'JEE (Advanced) 2026 syllabus and Paper 1 format',
  url: 'https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf',
  checkedOn: '24 August 2026',
};

const singles: Mcq[] = [
  ['Complex numbers', 'medium', 'The value of (1 + i)^8 is', ['16', '-16', '16i', '8'], 0, '(1+i)^2 = 2i, so (1+i)^8 = (2i)^4 = 16i^4 = 16.', 3],
  ['Probability', 'medium', 'A card is drawn from a well-shuffled deck of 52 cards. The probability that it is a king or a heart is', ['1/13', '4/13', '17/52', '5/13'], 1, 'P(king)+P(heart)-P(king of hearts) = 4/52+13/52-1/52 = 16/52 = 4/13.', 3],
  ['Straight lines', 'medium', 'The distance between the parallel lines 3x + 4y = 9 and 3x + 4y = 24 is', ['5', '15', '3', '1'], 2, 'Distance = |24-9|/sqrt(3^2+4^2) = 15/5 = 3.', 3],
  ['Vectors', 'medium', 'If a = (1,2,2) and b = (2,1,2), the cosine of the angle between them is', ['2/3', '4/9', '1', '8/9'], 3, 'a.b = 2+2+4 = 8, |a| = |b| = 3, so cos theta = 8/9.', 3],
];

const multis: Multi[] = [
  ['Circles', 'medium', 'For the circle x^2 + y^2 - 4x - 6y + 9 = 0, which statements are correct?', ['Its centre is (2, 3)', 'Its radius is 2', 'It passes through the origin', 'It is tangent to the x-axis'], [0, 1], 'Completing squares gives (x-2)^2+(y-3)^2=4, centre (2,3), radius 2. It does not pass through the origin, and since the centre is 3 units from the x-axis while the radius is 2, it is not tangent to it.'],
  ['Permutations and combinations', 'medium', 'Regarding the arrangements of the letters of the word REPEAT, which statements are correct?', ['The total number of distinct arrangements is 360', 'The letter E appears exactly twice', 'The word has 6 distinct letters', 'The number of arrangements with both Es together is 120'], [0, 1, 3], 'REPEAT has 6 letters with E repeated twice, giving 6!/2! = 360 arrangements. Treating the two Es as one unit gives 5! = 120 arrangements with them together.'],
  ['Continuity and differentiability', 'medium', 'Let f(x) = |x - 1|. Which statements are correct?', ['f is continuous at x = 1', 'f is differentiable at x = 1', 'f is differentiable for every x not equal to 1', 'f attains its minimum value 0 at x = 1'], [0, 2, 3], '|x-1| is continuous everywhere but has a corner at x=1, so it is not differentiable there. It is differentiable elsewhere and its minimum value 0 occurs at x=1.'],
  ['Sets and relations', 'medium', 'Let A = {1,2,3} and R = {(1,1),(2,2),(3,3),(1,2),(2,1)} be a relation on A. Which statements are correct?', ['R is reflexive', 'R is symmetric', 'R is transitive', '3 is related to 1 under R'], [0, 1, 2], 'R contains (1,1),(2,2),(3,3) so it is reflexive; every pair has its reverse present so it is symmetric; checking all compositions confirms transitivity. But (3,1) is not in R, so 3 is not related to 1.'],
];

const numerics: Numeric[] = [
  ['Binomial theorem', 'easy', 'Enter the sum C(6,0) + C(6,1) + ... + C(6,6).', '64', 'The sum of binomial coefficients of (1+1)^6 is 2^6 = 64.', 4],
  ['Arithmetic progressions', 'medium', 'The 5th term of an AP is 17 and the 9th term is 33. Enter its common difference.', '4', 'a+4d=17 and a+8d=33 give 4d=16, so d=4.', 4],
  ['Definite integrals', 'medium', 'Enter the value of the integral of (3x^2 + 2x) dx from x = 0 to x = 2.', '12', 'The antiderivative is x^3+x^2. Its value from 0 to 2 is 8+4=12.', 4],
  ['Trigonometric equations', 'medium', 'Enter the number of solutions of sin(x) = 1/2 in the interval [0, 2*pi).', '2', 'sin(x)=1/2 at x=pi/6 and x=5pi/6 within [0, 2*pi), giving exactly 2 solutions.', 4],
];

const matches: Mcq[] = [
  ['Conic sections', 'hard', 'Match each conic with its length of latus rectum: P: y^2=8x; Q: x^2/16+y^2/9=1; R: x^2/9-y^2/16=1; S: x^2+y^2=9. List II: (1) 32/3, (2) 8, (3) 9/2, (4) not applicable (circle), (5) 2.', ['P-2, Q-3, R-1, S-4', 'P-1, Q-2, R-4, S-3', 'P-3, Q-2, R-4, S-1', 'P-2, Q-1, R-3, S-4'], 0, 'The parabola has latus rectum 8, the ellipse has 2b^2/a=9/2, the hyperbola has 2b^2/a=32/3, and a circle has no latus rectum.', 4],
  ['Complex numbers', 'medium', 'Match each complex number with its modulus: P: 3+4i; Q: 1+i; R: -2i; S: 6. List II: (1) sqrt(2), (2) 5, (3) 2, (4) 6, (5) 3.', ['P-1, Q-2, R-4, S-3', 'P-2, Q-1, R-3, S-4', 'P-2, Q-3, R-1, S-4', 'P-4, Q-1, R-3, S-2'], 1, 'The moduli are sqrt(9+16)=5, sqrt(2), 2, and 6 respectively.', 4],
  ['Straight lines', 'medium', 'Match each line with its slope: P: 2x+3y=6; Q: y=5; R: x=4; S: x-y=1. List II: (1) 0, (2) -2/3, (3) 1, (4) undefined, (5) -1.', ['P-1, Q-2, R-3, S-4', 'P-4, Q-1, R-2, S-3', 'P-2, Q-1, R-4, S-3', 'P-2, Q-4, R-1, S-3'], 2, 'The slopes are -2/3, 0, undefined (vertical), and 1 respectively.', 4],
  ['Differentiation', 'medium', 'Match each function with its derivative at x=1: P: x^3; Q: ln x; R: e^x; S: sqrt(x). List II: (1) e, (2) 1, (3) 3, (4) 1/2, (5) 0.', ['P-2, Q-3, R-4, S-1', 'P-1, Q-3, R-2, S-4', 'P-3, Q-1, R-4, S-2', 'P-3, Q-2, R-1, S-4'], 3, 'The derivatives at x=1 are 3x^2=3, 1/x=1, e^x=e, and 1/(2 sqrt(x))=1/2 respectively.', 4],
];

export const JEE_ADVANCED_PAPER_1_MATHEMATICS_2: Question[] = [
  ...singles.map(([topic, difficulty, question, options, correctIndex, explanation, marks], index) => ({ id: `jee-advanced-p1-ma2-${String(index + 1).padStart(3, '0')}`, section: 'Mathematics', topic, difficulty, question, options, correctIndex, answerType: 'mcq' as const, marks, negativeMarking: 1, explanation, source })),
  ...multis.map(([topic, difficulty, question, options, correctIndices, explanation], index) => ({ id: `jee-advanced-p1-ma2-${String(index + 5).padStart(3, '0')}`, section: 'Mathematics', topic, difficulty, question, options, correctIndex: -1, correctIndices, answerType: 'multi-select' as const, partialMarking: true, marks: 4, negativeMarking: 1, explanation, source })),
  ...numerics.map(([topic, difficulty, question, correctValue, explanation, marks], index) => ({ id: `jee-advanced-p1-ma2-${String(index + 9).padStart(3, '0')}`, section: 'Mathematics', topic, difficulty, question, options: [], correctIndex: -1, correctValue, answerType: 'numerical' as const, maxDecimalPlaces: 2, marks, negativeMarking: 0, explanation, source })),
  ...matches.map(([topic, difficulty, question, options, correctIndex, explanation, marks], index) => ({ id: `jee-advanced-p1-ma2-${String(index + 13).padStart(3, '0')}`, section: 'Mathematics', topic, difficulty, question, options, correctIndex, answerType: 'mcq' as const, marks, negativeMarking: 1, explanation, source })),
];
