import type { Question } from '../questions';

export const MET_2026_BTECH_MATHEMATICS_SECTIONAL_1: Question[] = [
  {
    "section": "Mathematics",
    "topic": "Sets, Relations and Functions",
    "difficulty": "easy",
    "question": "For f:R->R defined by f(x)=x+5, which statement is true?",
    "options": [
      "f is one-one and onto",
      "f is one-one but not onto",
      "f is onto but not one-one",
      "f is neither"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For every y there is x=y-5 with f(x)=y, and equal outputs imply equal inputs, so f is bijective.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-13"
    },
    "id": "met-2026-btech-mathematics-sectional-01-001"
  },
  {
    "section": "Mathematics",
    "topic": "Complex Numbers and Quadratic Equations",
    "difficulty": "easy",
    "question": "What is i^18?",
    "options": [
      "1",
      "-1",
      "i",
      "-i"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Powers of i repeat every 4. Since 18 mod 4=2, i^18=i^2=-1.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-13"
    },
    "id": "met-2026-btech-mathematics-sectional-01-002"
  },
  {
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "A 2 x 2 matrix A is invertible exactly when",
    "options": [
      "det(A)=0",
      "all entries are positive",
      "det(A) is nonzero",
      "trace(A)=0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A square matrix is invertible if and only if its determinant is nonzero.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-13"
    },
    "id": "met-2026-btech-mathematics-sectional-01-003"
  },
  {
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "hard",
    "question": "How many distinct arrangements are possible for the letters of SUCCESS?",
    "options": [
      "210",
      "840",
      "1260",
      "420"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "SUCCESS has 7 letters with S repeated 3 times and C repeated twice, so 7!/(3!2!)=420.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-13"
    },
    "id": "met-2026-btech-mathematics-sectional-01-004"
  },
  {
    "section": "Mathematics",
    "topic": "Binomial Theorem and its Simple Applications",
    "difficulty": "medium",
    "question": "What is the constant term in the expansion of (x+2/x)^4?",
    "options": [
      "24",
      "16",
      "32",
      "48"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The general term is C(4,r)x^(4-r)(2/x)^r. Constant power requires 4-2r=0, so r=2 and term=C(4,2)2^2=24.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-13"
    },
    "id": "met-2026-btech-mathematics-sectional-01-005"
  },
  {
    "section": "Mathematics",
    "topic": "Sequence and Series",
    "difficulty": "easy",
    "question": "Find the sum of the first 10 positive odd numbers.",
    "options": [
      "81",
      "100",
      "90",
      "110"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The sum of the first n odd numbers is n^2, so for n=10 the sum is 100.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-13"
    },
    "id": "met-2026-btech-mathematics-sectional-01-006"
  },
  {
    "section": "Mathematics",
    "topic": "Limit, Continuity and Differentiability",
    "difficulty": "medium",
    "question": "For f(x)=(x^2-4)/(x-2) when x!=2, what value should f(2) have to make f continuous at 2?",
    "options": [
      "0",
      "2",
      "4",
      "6"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For x!=2, f(x)=x+2, so the limit as x tends to 2 is 4.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-13"
    },
    "id": "met-2026-btech-mathematics-sectional-01-007"
  },
  {
    "section": "Mathematics",
    "topic": "Limit, Continuity and Differentiability",
    "difficulty": "medium",
    "question": "What is the slope of the tangent to y=x^3-2x at x=2?",
    "options": [
      "6",
      "8",
      "12",
      "10"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "dy/dx=3x^2-2, so at x=2 the slope is 12-2=10.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-13"
    },
    "id": "met-2026-btech-mathematics-sectional-01-008"
  },
  {
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "hard",
    "question": "What is the area enclosed between y=x and y=x^2 from x=0 to x=1?",
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "On [0,1], x>=x^2. Area=integral_0^1(x-x^2)dx=1/2-1/3=1/6.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-13"
    },
    "id": "met-2026-btech-mathematics-sectional-01-009"
  },
  {
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "easy",
    "question": "What is the order of the differential equation d^2y/dx^2 + 3 dy/dx + y = 0?",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The highest derivative present is d^2y/dx^2, so the order is 2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-13"
    },
    "id": "met-2026-btech-mathematics-sectional-01-010"
  },
  {
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "For the parabola y^2=12x, what is the length of the latus rectum?",
    "options": [
      "3",
      "6",
      "12",
      "24"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Comparing y^2=4ax gives 4a=12, and the latus rectum length is 4a=12.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-13"
    },
    "id": "met-2026-btech-mathematics-sectional-01-011"
  },
  {
    "section": "Mathematics",
    "topic": "Three-Dimensional Geometry",
    "difficulty": "medium",
    "question": "A line has direction ratios 2,-1,2. Which is a unit vector along the line?",
    "options": [
      "(2,-1,2)",
      "(1/2,-1,1/2)",
      "(2/5,-1/5,2/5)",
      "(2/3,-1/3,2/3)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The magnitude of (2,-1,2) is 3, so division by 3 gives the unit vector.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-13"
    },
    "id": "met-2026-btech-mathematics-sectional-01-012"
  },
  {
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "medium",
    "question": "If |a|=2, |b|=3 and the angle between a and b is 60 degrees, what is |a+b|?",
    "options": [
      "sqrt(19)",
      "sqrt(13)",
      "5",
      "1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "|a+b|^2=|a|^2+|b|^2+2|a||b|cos60=4+9+6=19, so |a+b|=sqrt(19).",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-13"
    },
    "id": "met-2026-btech-mathematics-sectional-01-013"
  },
  {
    "section": "Mathematics",
    "topic": "Statistics and Probability",
    "difficulty": "hard",
    "question": "Two fair dice are rolled. Given that the sum is 7, what is the probability that the first die shows 2?",
    "options": [
      "1/3",
      "1/6",
      "1/2",
      "2/3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are six ordered outcomes summing to 7, and only (2,5) has first die 2, so the conditional probability is 1/6.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-13"
    },
    "id": "met-2026-btech-mathematics-sectional-01-014"
  },
  {
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "easy",
    "question": "Which identity is correct?",
    "options": [
      "1+cot^2 x=sec^2 x",
      "sin^2 x-cos^2 x=1",
      "1+tan^2 x=sec^2 x",
      "tan x=cot x for all x"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The Pythagorean identity is 1+tan^2 x=sec^2 x.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-13"
    },
    "id": "met-2026-btech-mathematics-sectional-01-015"
  },
  {
    "section": "Mathematics",
    "topic": "Complex Numbers and Quadratic Equations",
    "difficulty": "easy",
    "question": "For x^2-8x+15=0, enter the larger root.",
    "options": [],
    "correctIndex": -1,
    "correctValue": "5",
    "answerType": "numerical",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The quadratic factors as (x-3)(x-5)=0, so the larger root is 5.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-13"
    },
    "id": "met-2026-btech-mathematics-sectional-01-016"
  },
  {
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "For A=[[k,2],[3,4]], det(A)=14. Enter k.",
    "options": [],
    "correctIndex": -1,
    "correctValue": "5",
    "answerType": "numerical",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "det(A)=4k-6=14, so 4k=20 and k=5.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-13"
    },
    "id": "met-2026-btech-mathematics-sectional-01-017"
  },
  {
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "medium",
    "question": "Enter the number of diagonals in a hexagon.",
    "options": [],
    "correctIndex": -1,
    "correctValue": "9",
    "answerType": "numerical",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "A polygon with n vertices has n(n-3)/2 diagonals. For n=6, the number is 6x3/2=9.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-13"
    },
    "id": "met-2026-btech-mathematics-sectional-01-018"
  },
  {
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "medium",
    "question": "Enter the value of integral from 0 to 1 of x e^x dx.",
    "options": [],
    "correctIndex": -1,
    "correctValue": "1",
    "answerType": "numerical",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Using integration by parts, integral x e^x dx=e^x(x-1)+C. Evaluating from 0 to 1 gives 0-(-1)=1.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-13"
    },
    "id": "met-2026-btech-mathematics-sectional-01-019"
  },
  {
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "hard",
    "question": "For a=(1,2,0), b=(0,1,3), c=(2,0,1), enter the absolute value of the scalar triple product a dot (b cross c).",
    "options": [],
    "correctIndex": -1,
    "correctValue": "13",
    "answerType": "numerical",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "b cross c=(1,6,-2), so a dot (b cross c)=1+12=13.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official MET 2026 B.Tech syllabus and approved pattern",
      "url": "https://evbab.manipal.edu/content/dam/manipal/mu/documents/Admissions/adm2026/btech_met_syllabus_2026.pdf",
      "checkedOn": "2026-08-13"
    },
    "id": "met-2026-btech-mathematics-sectional-01-020"
  }
];
