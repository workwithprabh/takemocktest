import type { Question } from '../questions';

export const MET_2026_BTECH_MATHEMATICS_SECTIONAL_2: Question[] = [
  {
    "section": "Mathematics",
    "topic": "Sets, Relations and Functions",
    "difficulty": "easy",
    "question": "For f:R->R defined by f(x)=2x-3, which statement is true?",
    "options": [
      "f is one-one and onto",
      "f is onto but not one-one",
      "f is one-one but not onto",
      "f is neither"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A linear function with nonzero slope is both injective and surjective on R, so f is a bijection.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-24"
    },
    "id": "met-2026-btech-mathematics-sectional-02-001"
  },
  {
    "section": "Mathematics",
    "topic": "Complex Numbers and Quadratic Equations",
    "difficulty": "easy",
    "question": "What is i^23?",
    "options": [
      "i",
      "-i",
      "1",
      "-1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Powers of i repeat every 4. Since 23 mod 4=3, i^23=i^3=-i.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-24"
    },
    "id": "met-2026-btech-mathematics-sectional-02-002"
  },
  {
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "A 3x3 matrix with two identical rows has determinant",
    "options": [
      "always positive",
      "always 1",
      "always zero",
      "cannot be determined"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "If two rows of a matrix are identical, its determinant is always zero.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-24"
    },
    "id": "met-2026-btech-mathematics-sectional-02-003"
  },
  {
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "hard",
    "question": "How many distinct arrangements are possible for the letters of BANANA?",
    "options": [
      "120",
      "720",
      "180",
      "60"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "BANANA has 6 letters with A repeated 3 times and N repeated twice, so 6!/(3!2!)=60.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-24"
    },
    "id": "met-2026-btech-mathematics-sectional-02-004"
  },
  {
    "section": "Mathematics",
    "topic": "Binomial Theorem and its Simple Applications",
    "difficulty": "medium",
    "question": "What is the constant term in the expansion of (x-3/x)^4?",
    "options": [
      "54",
      "-54",
      "36",
      "81"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The general term is C(4,r)x^(4-r)(-3/x)^r. Constant power requires 4-2r=0, so r=2 and the term is C(4,2)(-3)^2=54.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-24"
    },
    "id": "met-2026-btech-mathematics-sectional-02-005"
  },
  {
    "section": "Mathematics",
    "topic": "Sequence and Series",
    "difficulty": "easy",
    "question": "Find the sum of the first 12 positive even numbers.",
    "options": [
      "144",
      "156",
      "132",
      "169"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The sum of the first n even numbers is n(n+1), so for n=12 the sum is 12x13=156.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-24"
    },
    "id": "met-2026-btech-mathematics-sectional-02-006"
  },
  {
    "section": "Mathematics",
    "topic": "Limit, Continuity and Differentiability",
    "difficulty": "medium",
    "question": "For f(x)=(x^2-9)/(x-3) when x!=3, what value should f(3) have to make f continuous at 3?",
    "options": [
      "3",
      "9",
      "6",
      "0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For x!=3, f(x)=x+3, so the limit as x tends to 3 is 6.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-24"
    },
    "id": "met-2026-btech-mathematics-sectional-02-007"
  },
  {
    "section": "Mathematics",
    "topic": "Limit, Continuity and Differentiability",
    "difficulty": "medium",
    "question": "What is the slope of the tangent to y=x^3+3x at x=1?",
    "options": [
      "3",
      "9",
      "12",
      "6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "dy/dx=3x^2+3, so at x=1 the slope is 3+3=6.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-24"
    },
    "id": "met-2026-btech-mathematics-sectional-02-008"
  },
  {
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "hard",
    "question": "What is the area enclosed between y=2x and y=x^2 from x=0 to x=2?",
    "options": [
      "4/3",
      "8/3",
      "2",
      "1/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "On [0,2], 2x>=x^2. Area=integral_0^2(2x-x^2)dx=4-8/3=4/3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-24"
    },
    "id": "met-2026-btech-mathematics-sectional-02-009"
  },
  {
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "easy",
    "question": "What is the order of the differential equation d^3y/dx^3 + x(dy/dx) - y = 0?",
    "options": [
      "1",
      "3",
      "2",
      "0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The highest derivative present is d^3y/dx^3, so the order is 3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-24"
    },
    "id": "met-2026-btech-mathematics-sectional-02-010"
  },
  {
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "For the parabola y^2=20x, what is the length of the latus rectum?",
    "options": [
      "5",
      "10",
      "20",
      "40"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Comparing y^2=4ax gives 4a=20, and the latus rectum length is 4a=20.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-24"
    },
    "id": "met-2026-btech-mathematics-sectional-02-011"
  },
  {
    "section": "Mathematics",
    "topic": "Three-Dimensional Geometry",
    "difficulty": "medium",
    "question": "A line has direction ratios 1,2,2. Which is a unit vector along the line?",
    "options": [
      "(1,2,2)",
      "(1/2,1,1)",
      "(1/9,2/9,2/9)",
      "(1/3,2/3,2/3)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The magnitude of (1,2,2) is 3, so dividing by 3 gives the unit vector.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-24"
    },
    "id": "met-2026-btech-mathematics-sectional-02-012"
  },
  {
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "medium",
    "question": "If |a|=3, |b|=4 and the angle between a and b is 60 degrees, what is |a+b|?",
    "options": [
      "sqrt(37)",
      "sqrt(25)",
      "7",
      "1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "|a+b|^2=|a|^2+|b|^2+2|a||b|cos60=9+16+12=37, so |a+b|=sqrt(37).",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-24"
    },
    "id": "met-2026-btech-mathematics-sectional-02-013"
  },
  {
    "section": "Mathematics",
    "topic": "Statistics and Probability",
    "difficulty": "hard",
    "question": "Two fair dice are rolled. Given that the sum is 8, what is the probability that the first die shows 3?",
    "options": [
      "1/6",
      "1/5",
      "1/3",
      "2/5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are five ordered outcomes summing to 8, and only (3,5) has first die 3, so the conditional probability is 1/5.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-24"
    },
    "id": "met-2026-btech-mathematics-sectional-02-014"
  },
  {
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "easy",
    "question": "Which identity is correct?",
    "options": [
      "sin^2 x+cos^2 x=0",
      "1+tan^2 x=csc^2 x",
      "1+cot^2 x=csc^2 x",
      "cos x=tan x for all x"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The Pythagorean identity derived from sin^2+cos^2=1 divided by sin^2 x is 1+cot^2 x=csc^2 x.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-24"
    },
    "id": "met-2026-btech-mathematics-sectional-02-015"
  },
  {
    "section": "Mathematics",
    "topic": "Complex Numbers and Quadratic Equations",
    "difficulty": "easy",
    "question": "For x^2-11x+30=0, enter the larger root.",
    "options": [],
    "correctIndex": -1,
    "correctValue": "6",
    "answerType": "numerical",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The quadratic factors as (x-5)(x-6)=0, so the larger root is 6.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-24"
    },
    "id": "met-2026-btech-mathematics-sectional-02-016"
  },
  {
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "For A=[[k,3],[2,5]], det(A)=19. Enter k.",
    "options": [],
    "correctIndex": -1,
    "correctValue": "5",
    "answerType": "numerical",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "det(A)=5k-6=19, so 5k=25 and k=5.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-24"
    },
    "id": "met-2026-btech-mathematics-sectional-02-017"
  },
  {
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "medium",
    "question": "Enter the number of diagonals in a nonagon (9-sided polygon).",
    "options": [],
    "correctIndex": -1,
    "correctValue": "27",
    "answerType": "numerical",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "A polygon with n vertices has n(n-3)/2 diagonals. For n=9, the number is 9x6/2=27.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-24"
    },
    "id": "met-2026-btech-mathematics-sectional-02-018"
  },
  {
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "medium",
    "question": "Enter the value of integral from 1 to 2 of 3x^2 dx.",
    "options": [],
    "correctIndex": -1,
    "correctValue": "7",
    "answerType": "numerical",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The integral is [x^3]_1^2=8-1=7.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-24"
    },
    "id": "met-2026-btech-mathematics-sectional-02-019"
  },
  {
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "hard",
    "question": "For a=(2,1,0), b=(0,1,2), c=(1,0,2), enter the absolute value of the scalar triple product a dot (b cross c).",
    "options": [],
    "correctIndex": -1,
    "correctValue": "6",
    "answerType": "numerical",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "b cross c=(2,2,-1), so a dot (b cross c)=4+2+0=6.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-24"
    },
    "id": "met-2026-btech-mathematics-sectional-02-020"
  }
];
