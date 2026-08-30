import type { Question } from '../questions';

export const LPUNEST_2026_MATHEMATICS_1: Question[] = [
  {
    "id": "lpunest-2026-ma-001",
    "section": "Mathematics",
    "topic": "Sets and Relations",
    "difficulty": "easy",
    "question": "Finite sets A and B satisfy n(A)=3, n(B)=4 and n(A intersection B)=2. What is n(A union B)?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "n(A union B)=n(A)+n(B)-n(A intersection B)=3+4-2=5.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correctIndex": 1
  },
  {
    "id": "lpunest-2026-ma-002",
    "section": "Mathematics",
    "topic": "Functions, Limit and Continuity",
    "difficulty": "easy",
    "question": "Let f(x)=2x+3 and g(x)=x^2. What is g(f(1))?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "f(1)=5 and therefore g(f(1))=g(5)=25.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "25",
      "10",
      "16",
      "36"
    ],
    "correctIndex": 0
  },
  {
    "id": "lpunest-2026-ma-003",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "easy",
    "question": "What is the value of (1+i)^4?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "(1+i)^2=1+2i+i^2=2i. Squaring again gives (2i)^2=-4.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "4",
      "4i",
      "-4i",
      "-4"
    ],
    "correctIndex": 3
  },
  {
    "id": "lpunest-2026-ma-004",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "medium",
    "question": "If alpha and beta are the roots of 5x^2 - 13x + 6 = 0, which equation has roots 1/alpha and 1/beta?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For the original roots, alpha+beta = 13/5 and alpha*beta = 6/5. The reciprocal roots have sum (alpha+beta)/(alpha*beta) = 13/6 and product 1/(alpha*beta) = 5/6. Their equation is x^2-(13/6)x+5/6=0, or 6x^2-13x+5=0.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "5x^2 - 13x + 6 = 0",
      "6x^2 - 13x + 5 = 0",
      "6x^2 + 13x + 5 = 0",
      "5x^2 + 13x + 6 = 0"
    ],
    "correctIndex": 1
  },
  {
    "id": "lpunest-2026-ma-005",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "medium",
    "question": "Two geometric means are inserted between 2 and 54. What is the sum of the two inserted means?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "If the common ratio is r, then 2r^3=54, so r=3. The sequence is 2,6,18,54 and the inserted means sum to 24.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "18",
      "24",
      "26",
      "30"
    ],
    "correctIndex": 1
  },
  {
    "id": "lpunest-2026-ma-006",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "For A = [[1,2],[0,1]], what is the upper-right entry of A^5?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For A=I+N with N=[[0,2],[0,0]] and N^2=0, A^5=I+5N=[[1,10],[0,1]].",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "10",
      "5",
      "8",
      "25"
    ],
    "correctIndex": 0
  },
  {
    "id": "lpunest-2026-ma-007",
    "section": "Mathematics",
    "topic": "Determinants",
    "difficulty": "easy",
    "question": "What is the area of the triangle with vertices (0,0), (4,0) and (1,3)?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Using base 4 along the x-axis and height 3, area=(1/2)*4*3=6 square units.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "4 square units",
      "8 square units",
      "6 square units",
      "12 square units"
    ],
    "correctIndex": 2
  },
  {
    "id": "lpunest-2026-ma-008",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "medium",
    "question": "If a=(1,2,2) and b=(2,0,1), what is cos theta, where theta is the angle between a and b?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "a dot b=1*2+2*0+2*1=4. Also |a|=3 and |b|=sqrt(5), so cos theta=4/(3sqrt(5)).",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "4/(3 sqrt(5))",
      "2/(3 sqrt(5))",
      "4/5",
      "2/sqrt(5)"
    ],
    "correctIndex": 0
  },
  {
    "id": "lpunest-2026-ma-009",
    "section": "Mathematics",
    "topic": "Permutations",
    "difficulty": "medium",
    "question": "How many arrangements of the five distinct letters A, B, C, D, E have A and E not adjacent?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "There are 5!=120 total arrangements. Treating A and E as an adjacent block gives 2*4!=48 arrangements. Thus the required count is 120-48=72.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "48",
      "72",
      "60",
      "96"
    ],
    "correctIndex": 1
  },
  {
    "id": "lpunest-2026-ma-010",
    "section": "Mathematics",
    "topic": "Combinations",
    "difficulty": "easy",
    "question": "A lab has 7 labeled sensors. A test must use exactly 3 sensors, but two particular sensors A and B may not be used together. How many different 3-sensor sets are possible?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "There are C(7,3)=35 unrestricted sets. Sets containing both A and B are formed by choosing the third sensor from the remaining 5, so there are 5 forbidden sets. Hence 35-5=30.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "30",
      "25",
      "35",
      "20"
    ],
    "correctIndex": 0
  },
  {
    "id": "lpunest-2026-ma-011",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "medium",
    "question": "What is the coefficient of x^3 in (1+2x)^5?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The x^3 term has coefficient C(5,3)*2^3=10*8=80.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "40",
      "60",
      "80",
      "120"
    ],
    "correctIndex": 2
  },
  {
    "id": "lpunest-2026-ma-012",
    "section": "Mathematics",
    "topic": "Derivatives",
    "difficulty": "medium",
    "question": "For x>0, y=x^x. What is dy/dx at x=1?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Taking logs, ln y=x ln x. Thus y'/y=ln x+1. At x=1, y=1 and ln1=0, so y'=1.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "0",
      "1",
      "e",
      "2"
    ],
    "correctIndex": 1
  },
  {
    "id": "lpunest-2026-ma-013",
    "section": "Mathematics",
    "topic": "Application of Derivatives",
    "difficulty": "hard",
    "question": "Let f(x)=x^3 - 15x^2 + 48x + 11. On which intervals is f strictly increasing?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "f'(x)=3x^2-30x+48=3(x-2)(x-8). This derivative is positive for x<2 and for x>8, and negative for 2<x<8. Therefore f is strictly increasing on (-infinity,2) union (8,infinity).",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "(2,8) only",
      "(-infinity,8)",
      "(2,infinity)",
      "(-infinity,2) union (8,infinity)"
    ],
    "correctIndex": 3
  },
  {
    "id": "lpunest-2026-ma-014",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "medium",
    "question": "What is integral from 0 to 1 of x/(1+x^2) dx?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "With u=1+x^2, du=2x dx. The integral is (1/2)[ln(1+x^2)]_0^1=(1/2)ln2.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "ln 2",
      "1/2",
      "1-ln 2",
      "(1/2) ln 2"
    ],
    "correctIndex": 3
  },
  {
    "id": "lpunest-2026-ma-015",
    "section": "Mathematics",
    "topic": "Definite Integrals",
    "difficulty": "medium",
    "question": "What is the value of integral from 0 to pi of sin^3 x dx?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Write sin^3 x=sin x(1-cos^2 x). With u=cos x, the integral evaluates to 4/3.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "2/3",
      "pi/2",
      "4/3",
      "2"
    ],
    "correctIndex": 2
  },
  {
    "id": "lpunest-2026-ma-016",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "The function y satisfies dy/dx=2xy and y(0)=3. What is y(1)?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Separate variables: dy/y=2x dx, so ln y=x^2+C. From y(0)=3, C=ln3, hence y=3e^(x^2) and y(1)=3e.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "3e",
      "e",
      "2e",
      "3/e"
    ],
    "correctIndex": 0
  },
  {
    "id": "lpunest-2026-ma-017",
    "section": "Mathematics",
    "topic": "Straight Lines",
    "difficulty": "easy",
    "question": "What is the perpendicular distance from the point (2,-1) to the line 3x-4y+5=0?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Distance=|3(2)-4(-1)+5|/sqrt(3^2+(-4)^2)=15/5=3.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "1",
      "2",
      "3",
      "5"
    ],
    "correctIndex": 2
  },
  {
    "id": "lpunest-2026-ma-018",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "easy",
    "question": "For the circle x^2+y^2-6x+4y-12=0, what is the radius?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Completing squares gives (x-3)^2+(y+2)^2=25, so the radius is 5.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "3",
      "4",
      "6",
      "5"
    ],
    "correctIndex": 3
  },
  {
    "id": "lpunest-2026-ma-019",
    "section": "Mathematics",
    "topic": "Conic Sections",
    "difficulty": "easy",
    "question": "What is the focus of the parabola y^2=12x?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Comparing y^2=12x with y^2=4ax gives a=3, so the focus is (3,0).",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "(0,3)",
      "(6,0)",
      "(3,0)",
      "(0,6)"
    ],
    "correctIndex": 2
  },
  {
    "id": "lpunest-2026-ma-020",
    "section": "Mathematics",
    "topic": "Statistics and Probability",
    "difficulty": "hard",
    "question": "One of two boxes is chosen at random. Box A contains 2 red and 1 blue ball; Box B contains 1 red and 2 blue balls. A red ball is drawn. What is the probability that Box A was chosen?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "P(A|red)=[(1/2)(2/3)]/[(1/2)(2/3)+(1/2)(1/3)]=(1/3)/(1/2)=2/3.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "1/3",
      "1/2",
      "3/4",
      "2/3"
    ],
    "correctIndex": 3
  },
  {
    "id": "lpunest-2026-ma-021",
    "section": "Mathematics",
    "topic": "Determinants",
    "difficulty": "easy",
    "question": "For the matrix A = [[1,2,0],[3,1,2],[0,4,1]], enter det(A).",
    "options": [],
    "correctIndex": -1,
    "correctValue": "-13",
    "answerType": "numerical",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Expanding along the first row, det(A)=1*(1*1-2*4)-2*(3*1-2*0)=(1-8)-6=-13.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "lpunest-2026-ma-022",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "hard",
    "question": "For a=(1,0,1), b=(0,2,1) and c=(1,1,0), enter the magnitude of the scalar triple product a dot (b cross c).",
    "options": [],
    "correctIndex": -1,
    "correctValue": "3",
    "answerType": "numerical",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "b cross c=(-1,1,-2). Dotting with a=(1,0,1) gives -1-2=-3, whose magnitude is 3.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "lpunest-2026-ma-023",
    "section": "Mathematics",
    "topic": "Statistics and Probability",
    "difficulty": "medium",
    "question": "Events A and B satisfy P(A)=0.58, P(B)=0.47 and P(A intersection B)=0.29. Enter the probability that neither A nor B occurs, as a decimal.",
    "options": [],
    "correctIndex": -1,
    "correctValue": "0.24",
    "answerType": "numerical",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "P(A union B)=P(A)+P(B)-P(A intersection B)=0.58+0.47-0.29=0.76. Therefore P(neither A nor B)=1-0.76=0.24.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "lpunest-2026-ma-024",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "easy",
    "question": "Enter the value of integral from 0 to 2 of (3x^2+2) dx.",
    "options": [],
    "correctIndex": -1,
    "correctValue": "12",
    "answerType": "numerical",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "An antiderivative is x^3+2x. Evaluating from 0 to 2 gives 8+4=12.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "lpunest-2026-ma-025",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "For an acute angle theta, tan theta=3/4. Enter the value of 10 sin theta.",
    "options": [],
    "correctIndex": -1,
    "correctValue": "6",
    "answerType": "numerical",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "A 3-4-5 triangle gives sin theta=3/5. Thus 10 sin theta=6.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    }
  }
];
