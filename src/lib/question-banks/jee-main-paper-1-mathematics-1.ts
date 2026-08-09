import type { Question } from '../questions';

const source = {
  kind: 'original' as const,
  reference: 'JEE Main 2026 official Paper 1 syllabus for Mathematics',
  url: 'https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf',
  checkedOn: '9 August 2026',
};

type Difficulty = 'easy' | 'medium' | 'hard';
type McqRow = [topic: string, difficulty: Difficulty, question: string, answer: string, distractors: [string, string, string], explanation: string];
type NumericalRow = [topic: string, difficulty: Difficulty, question: string, answer: string, explanation: string];

const mcqRows: McqRow[] = [
  ['Sets', 'medium', 'Sets A and B contain 14 and 16 elements respectively. If their union contains 24 elements, how many elements are in their intersection?', '6', ['4', '8', '10'], 'By inclusion-exclusion, n(A intersection B) = 14 + 16 - 24 = 6.'],
  ['Complex numbers', 'easy', 'What is the modulus of the complex number 3 - 4i?', '5', ['3', '4', '7'], 'The modulus is sqrt(3 squared + 4 squared) = 5.'],
  ['Quadratic equations', 'easy', 'Which pair gives the roots of x squared - 7x + 10 = 0?', '2 and 5', ['1 and 10', '-2 and -5', '3 and 4'], 'The quadratic factors as (x - 2)(x - 5).'],
  ['Matrices and determinants', 'medium', 'Find the determinant of the matrix with rows (2, 3) and (1, 4).', '5', ['3', '8', '11'], 'The determinant is 2 x 4 - 3 x 1 = 5.'],
  ['Permutations', 'medium', 'How many distinct arrangements can be made using all letters of LEVEL?', '30', ['20', '60', '120'], 'LEVEL has five letters with L repeated twice and E repeated twice, so the count is 5!/(2!2!) = 30.'],
  ['Binomial theorem', 'hard', 'What is the coefficient of x cubed in the expansion of (1 + 2x) to the power 5?', '80', ['40', '60', '160'], 'The coefficient is C(5,3) times 2 cubed = 10 x 8 = 80.'],
  ['Arithmetic progression', 'medium', 'The first term of an arithmetic progression is 7 and its common difference is 4. What is its 20th term?', '83', ['79', '87', '91'], 'The 20th term is 7 + 19 x 4 = 83.'],
  ['Limits', 'medium', 'Evaluate the limit of sin(3x)/x as x approaches 0, with angles measured in radians.', '3', ['0', '1', '9'], 'Using lim sin u/u = 1, sin(3x)/x tends to 3.'],
  ['Differentiation', 'hard', 'If f(x) = x squared times e to the power x, what is f prime at x = 0?', '0', ['1', '2', 'e'], 'f prime(x) = e to the power x times (x squared + 2x), which is 0 at x = 0.'],
  ['Definite integrals', 'medium', 'Evaluate the integral of 3x squared + 2 from x = 0 to x = 1.', '3', ['2', '4', '5'], 'An antiderivative is x cubed + 2x. Its value from 0 to 1 is 3.'],
  ['Differential equations', 'hard', 'The differential equation dy/dx = 2y has y = 3 at x = 0. Which function is its solution?', 'y = 3e^(2x)', ['y = 2e^(3x)', 'y = 3e^x', 'y = 3 + 2x'], 'Separating variables gives y = Ce^(2x), and the initial condition gives C = 3.'],
  ['Straight lines', 'medium', 'What is the perpendicular distance from the point (3, -2) to the line 4x - 3y + 5 = 0?', '23/5', ['17/5', '21/5', '5'], 'Distance = |4(3) - 3(-2) + 5|/sqrt(4 squared + 3 squared) = 23/5.'],
  ['Circles', 'medium', 'What is the radius of the circle x squared + y squared - 6x + 8y + 9 = 0?', '4', ['3', '5', '7'], 'Completing squares gives (x - 3) squared + (y + 4) squared = 16.'],
  ['Vector algebra', 'medium', 'For non-zero vectors a and b, a dot b equals half the product of their magnitudes. What is the angle between them?', '60 degrees', ['30 degrees', '45 degrees', '120 degrees'], 'cos theta = 1/2, so theta = 60 degrees.'],
  ['Probability', 'medium', 'A fair coin is tossed three times. What is the probability of obtaining exactly two heads?', '3/8', ['1/8', '1/4', '1/2'], 'There are C(3,2) = 3 favourable outcomes among 8 equally likely outcomes.'],
  ['Statistics', 'easy', 'What is the standard deviation of the data set 2, 2, 2, 2?', '0', ['1', '2', '4'], 'Every observation equals the mean, so every deviation is zero.'],
  ['Trigonometry', 'hard', 'Which expression equals sin 75 degrees?', '(sqrt(6) + sqrt(2))/4', ['(sqrt(6) - sqrt(2))/4', 'sqrt(3)/2', '1/sqrt(2)'], 'sin(45 + 30) = sin45 cos30 + cos45 sin30 = (sqrt(6) + sqrt(2))/4.'],
  ['Matrices', 'easy', 'What is the trace of the matrix with rows (1, 2) and (3, 4)?', '5', ['3', '4', '7'], 'The trace is the sum of diagonal entries, 1 + 4 = 5.'],
  ['Parabola', 'medium', 'What is the focus of the parabola y squared = 8x?', '(2, 0)', ['(4, 0)', '(0, 2)', '(-2, 0)'], 'Comparing y squared = 4ax gives a = 2, so the focus is (2, 0).'],
  ['Functions', 'easy', 'If f(x) = 2x + 1 and g(x) = x squared, what is f(g(3))?', '19', ['13', '17', '25'], 'g(3) = 9 and f(9) = 2(9) + 1 = 19.'],
];

const numericalRows: NumericalRow[] = [
  ['Sets', 'easy', 'Enter the number of subsets of a set containing 5 distinct elements.', '32', 'A set with n elements has 2 to the power n subsets, so 2 to the power 5 = 32.'],
  ['Quadratic equations', 'medium', 'Enter the sum of the roots of 3x squared - 12x + 7 = 0.', '4', 'For ax squared + bx + c = 0, the sum of roots is -b/a = 12/3 = 4.'],
  ['Definite integrals', 'easy', 'Enter the value of the integral of x from x = 0 to x = 2.', '2', 'The integral is x squared/2 from 0 to 2, which equals 2.'],
  ['Three-dimensional geometry', 'medium', 'Enter the distance between the points (1, 2, 3) and (4, 6, 3).', '5', 'The distance is sqrt(3 squared + 4 squared + 0 squared) = 5.'],
  ['Combinations', 'medium', 'Enter the number of ways to choose 2 students from a group of 8 students.', '28', 'The count is C(8,2) = 8 x 7/2 = 28.'],
];

function buildQuestions(): Question[] {
  const mcqs = mcqRows.map<Question>(([topic, difficulty, question, answer, distractors, explanation], index) => {
    const correctIndex = index % 4;
    const options = [...distractors];
    options.splice(correctIndex, 0, answer);
    return { id: `jee-main-p1-ma-${String(index + 1).padStart(3, '0')}`, section: 'Mathematics', topic, difficulty, question, options, correctIndex, answerType: 'mcq', explanation, source };
  });
  const numerical = numericalRows.map<Question>(([topic, difficulty, question, correctValue, explanation], index) => ({
    id: `jee-main-p1-ma-${String(index + 21).padStart(3, '0')}`, section: 'Mathematics', topic, difficulty, question,
    options: [], correctIndex: -1, answerType: 'numerical', correctValue, explanation, source,
  }));
  return [...mcqs, ...numerical];
}

export const JEE_MAIN_PAPER_1_MATHEMATICS_1 = buildQuestions();
