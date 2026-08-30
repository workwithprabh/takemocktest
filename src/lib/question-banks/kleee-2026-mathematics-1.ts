import type { Question } from '../questions';

export const KLEEE_2026_MATHEMATICS_1: Question[] = [
  {
    "id": "kleee-2026-ma-001",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "easy",
    "question": "For the quadratic equation x^2 - (m + 2)x + 2m = 0, the two real roots differ by 2. What is the sum of all possible real values of m?",
    "options": [
      "2",
      "6",
      "4",
      "8"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a monic quadratic, the square of the difference of the roots equals the discriminant. Here D=(m+2)^2-8m=(m-2)^2. Since the roots differ by 2, D=4, so (m-2)^2=4. Thus m=0 or 4, and their sum is 4.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-002",
    "section": "Mathematics",
    "topic": "Functions",
    "difficulty": "medium",
    "question": "The range of the function f(x)=|2x-1|+|x+4|, for real x, is",
    "options": [
      "[9/2, infinity)",
      "[3, infinity)",
      "[0, infinity)",
      "[9, infinity)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The breakpoints are x=-4 and x=1/2. For -4<=x<=1/2, f(x)=1-2x+x+4=5-x, which decreases to 9/2 at x=1/2. For x>=1/2, f(x)=3x+3 and increases from 9/2; for x<=-4 it is at least 9. Hence the minimum is 9/2 and the range is [9/2, infinity).",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-003",
    "section": "Mathematics",
    "topic": "Determinants",
    "difficulty": "hard",
    "question": "For how many real values of a is the determinant of the matrix with rows (1,1,1), (1,a,a^2), (1,a^2,a^4) equal to zero?",
    "options": [
      "1",
      "2",
      "4",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The columns form a Vandermonde matrix for 1, a, a^2. Its determinant vanishes when two of 1, a, a^2 are equal. This gives a = 1, a = -1, or a = 0, so there are 3 real values.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-004",
    "section": "Mathematics",
    "topic": "Arithmetic Progressions",
    "difficulty": "medium",
    "question": "In an arithmetic progression, the 5th term is 18 and the 11th term is 42. The sum of the first 20 terms is",
    "options": [
      "760",
      "800",
      "840",
      "880"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "From a+4d=18 and a+10d=42, 6d=24 so d=4 and a=2. Thus S20 = 10[2a+19d] = 10(4+76)=800.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-005",
    "section": "Mathematics",
    "topic": "Geometric Progressions",
    "difficulty": "medium",
    "question": "A convergent geometric progression has first term 8 and sum to infinity 12. The sum to infinity of the squares of its terms is",
    "options": [
      "64",
      "68",
      "72",
      "80"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "8/(1-r)=12 gives r=1/3. The squared terms form a GP with first term 64 and ratio 1/9, so the required sum is 64/(1-1/9)=72.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-006",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "hard",
    "question": "The coefficient of x^5 in (1 + x)^8(1 - x)^4 is",
    "options": [
      "-8",
      "8",
      "12",
      "16"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The coefficient is sum_{k=1 to 5} C(8,k)C(4,5-k)(-1)^(5-k), which evaluates to 8.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-007",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "medium",
    "question": "How many 6-digit numbers can be formed using each of the digits 0,1,2,3,4,5 exactly once and are divisible by 5?",
    "options": [
      "192",
      "200",
      "204",
      "216"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "If the last digit is 0, the first digit has 5 choices and the rest 4! ways: 120. If the last digit is 5, the first digit has 4 nonzero choices and the rest 4! ways: 96. Total = 216.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-008",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "easy",
    "question": "Two persons are chosen at random from a group of 5 men and 4 women. The probability that at least one woman is chosen is",
    "options": [
      "13/18",
      "5/9",
      "7/12",
      "2/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "There are C(9,2)=36 pairs. The complement is choosing two men, C(5,2)=10. Therefore the probability is 1-10/36=13/18.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-009",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "medium",
    "question": "The value of ((1+i)^8)/((1-i)^4) is",
    "options": [
      "4",
      "-2",
      "-4",
      "2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "1+i = sqrt(2)e^{i pi/4} and 1-i = sqrt(2)e^{-i pi/4}. Thus the numerator is 16 and the denominator is -4, giving -4.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-010",
    "section": "Mathematics",
    "topic": "Trigonometric Identities",
    "difficulty": "easy",
    "question": "If theta is such that tan theta + cot theta = 4, then sin 2theta equals",
    "options": [
      "1/4",
      "1/2",
      "sqrt(3)/2",
      "1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "tan theta + cot theta = 1/(sin theta cos theta) = 2/sin 2theta. Hence 2/sin 2theta=4, so sin 2theta=1/2.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-011",
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "medium",
    "question": "The value of lim(x->0) [e^(2x) - 1 - 2x]/x^2 is",
    "options": [
      "2",
      "1",
      "4",
      "0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using e^(2x)=1+2x+2x^2+O(x^3), the numerator is 2x^2+O(x^3). Dividing by x^2 gives the limit 2.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-012",
    "section": "Mathematics",
    "topic": "Differentiation",
    "difficulty": "medium",
    "question": "For f(x)=x^x, x>0, the slope of the tangent at x=1/e is",
    "options": [
      "1/e",
      "e^(-1/e)",
      "-e^(-1/e)",
      "0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "f'(x)=x^x(ln x+1). At x=1/e, ln x=-1, so f'(1/e)=0.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-013",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "hard",
    "question": "For x>0, the maximum value of f(x)=x^2 e^(-x) is",
    "options": [
      "2/e",
      "2/e^2",
      "4/e^2",
      "4/e"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "f'(x)=e^(-x)x(2-x). The only interior maximum occurs at x=2. Therefore f(2)=4/e^2.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-014",
    "section": "Mathematics",
    "topic": "Indefinite and Definite Integration",
    "difficulty": "easy",
    "question": "The value of integral from 0 to 1 of x/(1+x^2) dx is",
    "options": [
      "(1/2) ln 2",
      "ln 2",
      "1/2",
      "1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "With u=1+x^2, du=2x dx. The integral is (1/2)ln(1+x^2) from 0 to 1 = (1/2)ln 2.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-015",
    "section": "Mathematics",
    "topic": "Definite Integrals",
    "difficulty": "medium",
    "question": "The value of integral from 0 to pi/2 of sin x/(sin x + cos x) dx is",
    "options": [
      "pi/6",
      "pi/4",
      "pi/3",
      "1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Let I be the integral. Replacing x by pi/2-x gives I = integral cos x/(sin x+cos x) dx over the same limits. Adding the two forms gives 2I=pi/2, so I=pi/4.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-016",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "The solution of dy/dx = y tan x satisfies y(0)=2. The value of y(pi/3) is",
    "options": [
      "2",
      "2sqrt(3)",
      "8",
      "4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "dy/y = tan x dx gives ln y = -ln cos x + C, so y=C sec x. Since y(0)=2, C=2. Thus y(pi/3)=2 sec(pi/3)=4.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-017",
    "section": "Mathematics",
    "topic": "Area Under Curves",
    "difficulty": "easy",
    "question": "The area enclosed between y=x and y=x^2 from x=0 to x=1 is",
    "options": [
      "1/6",
      "1/3",
      "1/4",
      "1/2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "On [0,1], x is above x^2. The area is integral_0^1 (x-x^2) dx = 1/2-1/3=1/6.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-018",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "medium",
    "question": "The length of the tangent drawn from the point (6,0) to the circle x^2+y^2-4x+6y+9=0 is",
    "options": [
      "sqrt(13)",
      "4",
      "sqrt(21)",
      "5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The circle has center (2,-3) and radius 2. The squared distance from (6,0) to the center is 4^2+3^2=25. Tangent length = sqrt(25-4)=sqrt(21).",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-019",
    "section": "Mathematics",
    "topic": "Parabola",
    "difficulty": "medium",
    "question": "For the parabola y^2=8x, the tangent at the point corresponding to parameter t=1 meets the x-axis at",
    "options": [
      "-4",
      "-2",
      "0",
      "2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For y^2=4ax with a=2, the tangent at parameter t is ty=x+at^2. At t=1, y=x+2. Setting y=0 gives x=-2.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-020",
    "section": "Mathematics",
    "topic": "Ellipse",
    "difficulty": "medium",
    "question": "For the ellipse x^2/25 + y^2/9 = 1, the length of the latus rectum is",
    "options": [
      "16/5",
      "9/5",
      "8/5",
      "18/5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Here a=5 and b=3. The length of the latus rectum is 2b^2/a = 18/5.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-021",
    "section": "Mathematics",
    "topic": "Three-Dimensional Geometry",
    "difficulty": "easy",
    "question": "The perpendicular distance of the point (2,1,4) from the plane 2x-y+2z-6=0 is",
    "options": [
      "5/3",
      "4/3",
      "2",
      "7/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Distance = |2(2)-1+2(4)-6|/sqrt(2^2+(-1)^2+2^2) = 5/3.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-022",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "hard",
    "question": "If a=(1,2,-1) and b=(2,-1,2), then the cosine of the angle between a and b is",
    "options": [
      "-1/3",
      "-1/sqrt(6)",
      "-2/(3sqrt(6))",
      "2/(3sqrt(6))"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "a dot b = 2-2-2=-2, |a|=sqrt(6), and |b|=3. Therefore cos theta = -2/(3sqrt(6)).",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-023",
    "section": "Mathematics",
    "topic": "Scalar Triple Product",
    "difficulty": "medium",
    "question": "For a=(1,0,2), b=(2,-1,1), and c=(0,3,1), the scalar triple product a dot (b cross c) is",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "b cross c = (-4,-2,6). Dotting with a gives -4+0+12=8.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-024",
    "section": "Mathematics",
    "topic": "Bayes Theorem",
    "difficulty": "hard",
    "question": "One of two bags is chosen with equal probability. Bag A contains 2 red and 3 blue balls; Bag B contains 4 red and 1 blue ball. A red ball is drawn. The probability that Bag A was chosen is",
    "options": [
      "1/4",
      "1/3",
      "1/2",
      "2/3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By Bayes' theorem, P(A|R)=[(1/2)(2/5)]/[(1/2)(2/5)+(1/2)(4/5)] = 2/(2+4)=1/3.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ma-025",
    "section": "Mathematics",
    "topic": "Continuity",
    "difficulty": "medium",
    "question": "For f(x)=(sin ax)/x when x is nonzero and f(0)=2, the function is continuous at x=0 if a equals",
    "options": [
      "2",
      "1",
      "-2",
      "4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Continuity requires lim(x->0) sin(ax)/x = a to equal f(0)=2. Hence a=2.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  }
];
