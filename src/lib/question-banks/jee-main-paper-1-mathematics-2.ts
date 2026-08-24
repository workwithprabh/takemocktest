import type { Question } from '../questions';

const source = {
  kind: 'original' as const,
  reference: 'JEE Main 2026 official Paper 1 syllabus for Mathematics',
  url: 'https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf',
  checkedOn: '24 August 2026',
};

type Difficulty = 'easy' | 'medium' | 'hard';
type McqRow = [topic: string, difficulty: Difficulty, question: string, answer: string, distractors: [string, string, string], explanation: string];
type NumericalRow = [topic: string, difficulty: Difficulty, question: string, answer: string, explanation: string];

const mcqRows: McqRow[] = [
  ['Relations and Functions', 'easy', 'If f(x) = 3x - 2, what is f inverse of x?', '(x + 2)/3', ['(x - 2)/3', '3x + 2', '(x - 3)/2'], 'Setting y = 3x - 2 and solving for x in terms of y gives x = (y + 2)/3, so f inverse of x = (x + 2)/3.'],
  ['Complex numbers', 'medium', 'What is the argument (principal value, in degrees) of the complex number -1 + i?', '135 degrees', ['45 degrees', '-45 degrees', '225 degrees'], 'The point lies in the second quadrant, so the argument is 180 - 45 = 135 degrees.'],
  ['Quadratic equations', 'medium', 'For what value of k does x squared - 6x + k = 0 have equal roots?', '9', ['6', '3', '12'], 'Equal roots require the discriminant to vanish: 36 - 4k = 0, giving k = 9.'],
  ['Sequences and series', 'medium', 'Find the sum of the first 10 terms of the arithmetic progression 2, 5, 8, 11, ...', '155', ['135', '145', '165'], 'Sum = n/2 x [2a + (n-1)d] = 5 x [4 + 27] = 5 x 31 = 155.'],
  ['Permutations', 'medium', 'In how many distinct ways can 4 different books be arranged in a row on a shelf?', '24', ['12', '16', '64'], 'The number of arrangements of 4 distinct items is 4! = 24.'],
  ['Binomial theorem', 'hard', 'What is the coefficient of the middle term in the expansion of (x + 1) to the power 6?', '20', ['15', '6', '30'], 'The middle term is the 4th term, with coefficient C(6,3) = 20.'],
  ['Matrices', 'medium', 'If A is a 3x3 matrix with determinant 5, what is the determinant of 2A?', '40', ['10', '20', '30'], 'For an n x n matrix, det(kA) = k^n det(A); here 2 cubed x 5 = 40.'],
  ['Limits', 'medium', 'Evaluate the limit of (x squared - 9)/(x - 3) as x approaches 3.', '6', ['0', '3', '9'], 'Factoring gives (x - 3)(x + 3)/(x - 3) = x + 3, which tends to 6 as x approaches 3.'],
  ['Continuity and differentiability', 'hard', 'For a function to be differentiable at a point, which condition must its left-hand and right-hand derivatives satisfy at that point?', 'They must be equal', ['They must both be zero', 'They must have opposite signs', 'They must be undefined'], 'Differentiability at a point requires the left-hand derivative to equal the right-hand derivative there.'],
  ['Application of derivatives', 'medium', 'At what value of x does f(x) = x squared - 4x + 7 attain its minimum value?', '2', ['4', '0', '-2'], "f'(x) = 2x - 4 = 0 gives x = 2, and f''(x) = 2 > 0 confirms a minimum."],
  ['Integral calculus', 'medium', 'Evaluate the integral of 4x cubed dx from x = 1 to x = 2.', '15', ['14', '16', '30'], 'An antiderivative is x to the power 4. Its value from 1 to 2 is 16 - 1 = 15.'],
  ['Differential equations', 'hard', 'What is the order of the differential equation (d squared y/dx squared) cubed + dy/dx = x?', '2', ['1', '3', '6'], 'The order is determined by the highest derivative present, which is the second derivative.'],
  ['Straight lines', 'medium', 'What is the slope of the line passing through the points (2, 3) and (6, 11)?', '2', ['1', '4', '0.5'], 'Slope = (11 - 3)/(6 - 2) = 8/4 = 2.'],
  ['Circles', 'medium', 'What is the centre of the circle x squared + y squared + 4x - 6y - 3 = 0?', '(-2, 3)', ['(2, -3)', '(-2, -3)', '(2, 3)'], 'The centre is (-g, -f) with g = 2 and f = -3, giving (-2, 3).'],
  ['Ellipse', 'hard', 'What is the eccentricity of the ellipse x squared/36 + y squared/20 = 1?', '2/3', ['1/3', '4/9', '5/6'], 'Here a squared = 36 and b squared = 20, so c squared = 16, c = 4, and e = c/a = 4/6 = 2/3.'],
  ['Vector algebra', 'medium', 'What is the magnitude of the vector 3i + 4j?', '5', ['7', '12', '25'], 'The magnitude is the square root of (3 squared + 4 squared) = 5.'],
  ['Three-dimensional geometry', 'medium', 'Two lines have direction ratios (a1, b1, c1) and (a2, b2, c2). Which condition confirms they are perpendicular?', 'a1a2 + b1b2 + c1c2 = 0', ['a1/a2 = b1/b2 = c1/c2', 'a1a2 - b1b2 - c1c2 = 0', 'a1 + a2 = b1 + b2 = c1 + c2'], 'Two lines are perpendicular when the dot product of their direction ratios equals zero.'],
  ['Probability', 'medium', 'Two fair dice are rolled together. What is the probability that the sum of the outcomes is 7?', '1/6', ['1/12', '1/9', '1/36'], 'There are 6 favourable outcomes among 36 equally likely outcomes, giving 6/36 = 1/6.'],
  ['Statistics', 'easy', 'What is the mean of the data set 4, 8, 6, 10, 12?', '8', ['6', '9', '10'], 'The mean is (4 + 8 + 6 + 10 + 12)/5 = 40/5 = 8.'],
  ['Mathematical reasoning', 'medium', "What is the converse of the implication 'If a number is divisible by 4, then it is divisible by 2'?", 'If a number is divisible by 2, then it is divisible by 4', ['If a number is not divisible by 4, then it is not divisible by 2', 'If a number is divisible by 4, then it is not divisible by 2', 'If a number is not divisible by 2, then it is not divisible by 4'], "The converse of 'If p then q' is 'If q then p'."],
];

const numericalRows: NumericalRow[] = [
  ['Complex numbers', 'easy', 'Enter the modulus of the complex number 6 + 8i.', '10', 'The modulus is the square root of (6 squared + 8 squared) = 10.'],
  ['Permutations', 'medium', 'Enter the number of distinct arrangements of all the letters of the word STATS.', '30', 'STATS has 5 letters with S repeated twice and T repeated twice, so the count is 5!/(2!2!) = 30.'],
  ['Definite integrals', 'easy', 'Enter the value of the integral of 2x dx from x = 1 to x = 3.', '8', 'An antiderivative is x squared. Its value from 1 to 3 is 9 - 1 = 8.'],
  ['Straight lines', 'medium', 'Enter the y-intercept of the line 3x - 2y + 12 = 0.', '6', 'Setting x = 0 gives -2y + 12 = 0, so y = 6.'],
  ['Binomial theorem', 'medium', 'Enter the number of terms in the expansion of (a + b) to the power 12.', '13', 'The expansion of (a + b) to the power n has n + 1 terms, so 13.'],
];

function buildQuestions(): Question[] {
  const mcqs = mcqRows.map<Question>(([topic, difficulty, question, answer, distractors, explanation], index) => {
    const correctIndex = index % 4;
    const options = [...distractors];
    options.splice(correctIndex, 0, answer);
    return { id: `jee-main-p1-ma2-${String(index + 1).padStart(3, '0')}`, section: 'Mathematics', topic, difficulty, question, options, correctIndex, answerType: 'mcq', explanation, source };
  });
  const numerical = numericalRows.map<Question>(([topic, difficulty, question, correctValue, explanation], index) => ({
    id: `jee-main-p1-ma2-${String(index + 21).padStart(3, '0')}`, section: 'Mathematics', topic, difficulty, question,
    options: [], correctIndex: -1, answerType: 'numerical', correctValue, explanation, source,
  }));
  return [...mcqs, ...numerical];
}

export const JEE_MAIN_PAPER_1_MATHEMATICS_2 = buildQuestions();
