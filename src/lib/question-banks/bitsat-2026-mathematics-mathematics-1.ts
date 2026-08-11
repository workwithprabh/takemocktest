import type { Question } from '../questions';

export const BITSAT_2026_MATHEMATICS_MATHEMATICS_1: Question[] = [
  {
    "id": "bitsat-2026-mathematics-001",
    "section": "Mathematics",
    "topic": "Algebra",
    "difficulty": "easy",
    "question": "If i^2 = -1, what is (1 + i)^4?",
    "options": [
      "-4",
      "4",
      "4i",
      "-4i"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "(1+i)^2 = 1+2i+i^2 = 2i. Squaring again gives (2i)^2 = -4.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-002",
    "section": "Mathematics",
    "topic": "Algebra",
    "difficulty": "easy",
    "question": "If alpha and beta are the roots of x^2 - 5x + 6 = 0, what is alpha^2 + beta^2?",
    "options": [
      "11",
      "13",
      "25",
      "12"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "alpha+beta=5 and alpha beta=6. Hence alpha^2+beta^2=(alpha+beta)^2-2alpha beta=25-12=13.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-003",
    "section": "Mathematics",
    "topic": "Algebra",
    "difficulty": "medium",
    "question": "In an arithmetic progression, the 5th term is 18 and the 12th term is 46. What is the sum of the first 20 terms?",
    "options": [
      "760",
      "820",
      "800",
      "840"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Let the first term be a and common difference d. Then a+4d=18 and a+11d=46, so 7d=28 and d=4. Thus a=2. S20=20/2[2a+19d]=10[4+76]=800.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-004",
    "section": "Mathematics",
    "topic": "Algebra",
    "difficulty": "easy",
    "question": "What is the sum to infinity of the geometric progression 12, 4, 4/3, ... ?",
    "options": [
      "18",
      "16",
      "20",
      "24"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The first term is 12 and common ratio is 1/3. Since |r|<1, S_infinity=a/(1-r)=12/(1-1/3)=18.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-005",
    "section": "Mathematics",
    "topic": "Algebra",
    "difficulty": "medium",
    "question": "How many five-digit even numbers can be formed using the digits 1, 2, 3, 4, 5 exactly once each?",
    "options": [
      "24",
      "36",
      "48",
      "60"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The last digit must be 2 or 4, giving 2 choices. The remaining four digits can be arranged in 4! ways. Total = 2 x 24 = 48.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-006",
    "section": "Mathematics",
    "topic": "Algebra",
    "difficulty": "medium",
    "question": "What is the coefficient of x^3 in (2 + x)^5?",
    "options": [
      "20",
      "80",
      "10",
      "40"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The x^3 term is C(5,3)(2)^2 x^3. Its coefficient is 10 x 4 = 40.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-007",
    "section": "Mathematics",
    "topic": "Algebra",
    "difficulty": "medium",
    "question": "For A = [[1,2],[3,4]], what is det(A^2)?",
    "options": [
      "-4",
      "2",
      "-2",
      "4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "det(A)=1x4-2x3=-2. Since det(A^2)=det(A)^2, det(A^2)=(-2)^2=4.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-008",
    "section": "Mathematics",
    "topic": "Algebra",
    "difficulty": "hard",
    "question": "How many onto functions are there from a set with 4 elements to a set with 3 elements?",
    "options": [
      "36",
      "24",
      "81",
      "30"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "There are 3^4=81 total functions. Exclude functions missing at least one target value: 3x2^4=48. Add back functions using only one target value, which were subtracted twice: C(3,2)x1^4=3. Thus the onto count is 81-48+3=36.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-009",
    "section": "Mathematics",
    "topic": "Algebra",
    "difficulty": "medium",
    "question": "Solve log2(x - 1) + log2(x - 3) = 3.",
    "options": [
      "-1",
      "4",
      "6",
      "5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The domain requires x>3. Combining logs gives (x-1)(x-3)=8, so x^2-4x-5=0. The roots are 5 and -1, but only x=5 satisfies the domain.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-010",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "easy",
    "question": "If tan theta = 3/4 and theta is acute, what is sin 2theta?",
    "options": [
      "7/25",
      "24/25",
      "12/25",
      "3/5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Using sin2theta=2tan theta/(1+tan^2 theta), sin2theta=(2x3/4)/(1+9/16)=(3/2)/(25/16)=24/25.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-011",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "Evaluate tan^-1(1/2) + tan^-1(1/3).",
    "options": [
      "pi/6",
      "pi/3",
      "pi/4",
      "pi/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "If A=tan^-1(1/2) and B=tan^-1(1/3), then tan(A+B)=(1/2+1/3)/(1-1/6)=1. Both angles are positive and their sum is less than pi/2, so A+B=pi/4.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-012",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "How many solutions does 2sin^2 x - 3sin x + 1 = 0 have in 0 <= x < 2pi?",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Factor as (2sin x-1)(sin x-1)=0. Thus sin x=1/2 gives x=pi/6,5pi/6, and sin x=1 gives x=pi/2. There are 3 solutions.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-013",
    "section": "Mathematics",
    "topic": "Two-dimensional Coordinate Geometry",
    "difficulty": "medium",
    "question": "The lines x + y = 3 and x - y = 1 intersect at P. Which equation represents the line through P perpendicular to 2x + y = 5?",
    "options": [
      "x-2y=0",
      "2x+y=5",
      "x+2y=4",
      "2x-y=3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The first two lines intersect at P=(2,1). The line 2x+y=5 has slope -2, so a perpendicular line has slope 1/2. Through (2,1), y-1=(1/2)(x-2), which simplifies to x-2y=0.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-014",
    "section": "Mathematics",
    "topic": "Two-dimensional Coordinate Geometry",
    "difficulty": "easy",
    "question": "The circle x^2 + y^2 - 6x + 4y - 12 = 0 has what radius?",
    "options": [
      "4",
      "3",
      "5",
      "sqrt(21)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Completing squares gives (x-3)^2+(y+2)^2=25. Therefore the radius is 5.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-015",
    "section": "Mathematics",
    "topic": "Two-dimensional Coordinate Geometry",
    "difficulty": "easy",
    "question": "For the parabola y^2 = 8x, locate the focus.",
    "options": [
      "(4,0)",
      "(0,2)",
      "(2,0)",
      "(0,4)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Comparing y^2=8x with y^2=4ax gives 4a=8, so a=2. The focus is (a,0)=(2,0).",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-016",
    "section": "Mathematics",
    "topic": "Two-dimensional Coordinate Geometry",
    "difficulty": "medium",
    "question": "For the ellipse x^2/25 + y^2/9 = 1, determine its eccentricity.",
    "options": [
      "3/5",
      "4/5",
      "2/5",
      "5/4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Here a^2=25 and b^2=9, so c^2=a^2-b^2=16 and c=4. Eccentricity e=c/a=4/5.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-017",
    "section": "Mathematics",
    "topic": "Three-dimensional Coordinate Geometry",
    "difficulty": "medium",
    "question": "What is the distance from the point (1,2,3) to the plane x + 2y + 2z = 9?",
    "options": [
      "2/3",
      "1/3",
      "1",
      "2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The distance is |1+2(2)+2(3)-9|/sqrt(1^2+2^2+2^2)=|2|/3=2/3.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-018",
    "section": "Mathematics",
    "topic": "Three-dimensional Coordinate Geometry",
    "difficulty": "medium",
    "question": "A line has direction ratios 2, -1, 2. Which set gives its direction cosines?",
    "options": [
      "(2,-1,2)",
      "(2/3,-1/3,2/3)",
      "(1/2,-1/4,1/2)",
      "(1/3,-2/3,2/3)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The magnitude of the direction-ratio vector is sqrt(4+1+4)=3. Dividing each ratio by 3 gives direction cosines (2/3,-1/3,2/3).",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-019",
    "section": "Mathematics",
    "topic": "Three-dimensional Coordinate Geometry",
    "difficulty": "hard",
    "question": "The line r = (1,0,2) + t(2,1,-1) meets the plane x + y + z = 6. What is the distance from the point (1,0,2) to the point of intersection along the line?",
    "options": [
      "sqrt(6)/2",
      "3sqrt(6)/2",
      "sqrt(6)",
      "3sqrt(6)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A point on the line is (1+2t,t,2-t). Substitution into the plane gives 3+2t=6, so t=3/2. The direction vector has magnitude sqrt(2^2+1^2+(-1)^2)=sqrt(6). Hence the distance is |t|sqrt(6)=3sqrt(6)/2.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-020",
    "section": "Mathematics",
    "topic": "Differential Calculus",
    "difficulty": "hard",
    "question": "For x > 0, the function f(x) = x^x has a minimum at which x, and what is that minimum value?",
    "options": [
      "x=1, value=1",
      "x=e, value=e^e",
      "x=e^-1, value=e^(-1/e)",
      "x=e^-1, value=e^-1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Take logarithms: ln f=x ln x. Then f'/f=ln x+1. The stationary point satisfies ln x=-1, so x=e^-1. Since ln x+1 changes from negative to positive there, it is a minimum. The value is (e^-1)^(e^-1)=e^(-1/e).",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-021",
    "section": "Mathematics",
    "topic": "Differential Calculus",
    "difficulty": "easy",
    "question": "Evaluate lim(x->0) sin(3x)/sin(5x).",
    "options": [
      "5/3",
      "3/5",
      "1",
      "0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Using sin(kx) approximately kx as x approaches 0, the limit is 3x/5x=3/5.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-022",
    "section": "Mathematics",
    "topic": "Differential Calculus",
    "difficulty": "medium",
    "question": "What is the equation of the tangent to y = x^2 + 1 at x = 2?",
    "options": [
      "2x-y+1=0",
      "4x+y-13=0",
      "4x-y-3=0",
      "x-4y+18=0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "At x=2, y=5. Since dy/dx=2x, the slope is 4. Thus y-5=4(x-2), or 4x-y-3=0.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-023",
    "section": "Mathematics",
    "topic": "Differential Calculus",
    "difficulty": "easy",
    "question": "What is the maximum value of f(x) = x(6 - x) on 0 <= x <= 6?",
    "options": [
      "6",
      "12",
      "18",
      "9"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "f(x)=6x-x^2 is a downward-opening parabola. Its vertex is at x=3, giving f(3)=9. The endpoint values are 0, so the maximum is 9.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-024",
    "section": "Mathematics",
    "topic": "Differential Calculus",
    "difficulty": "hard",
    "question": "For f(x) = x^3 - 6x^2 + 9x + 1, what is the difference between its local maximum value and local minimum value?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "f'(x)=3x^2-12x+9=3(x-1)(x-3), so stationary points are x=1 and x=3. f''(1)=-6, so x=1 is a local maximum with f(1)=5. f''(3)=6, so x=3 is a local minimum with f(3)=1. The difference is 5-1=4.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-025",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "easy",
    "question": "Find the value of the definite integral of 3x^2 over the interval [0,1].",
    "options": [
      "2",
      "3",
      "1",
      "1/3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "An antiderivative of 3x^2 is x^3. Evaluating from 0 to 1 gives 1-0=1.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-026",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "medium",
    "question": "Using a suitable substitution, determine the integral of x e^(x^2) from x=0 to x=1.",
    "options": [
      "e-1",
      "(e-1)/4",
      "e/2",
      "(e-1)/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Let u=x^2, so du=2x dx. The integral becomes (1/2) integral from 0 to 1 of e^u du=(e-1)/2.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-027",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "hard",
    "question": "Evaluate integral from 0 to pi/2 of x sin x cos x dx.",
    "options": [
      "pi/4",
      "pi/8",
      "1/2",
      "1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Use sin x cos x=(1/2)sin 2x. Then the integral is (1/2) integral x sin2x dx. Integration by parts gives [-x cos2x/4 + sin2x/8] from 0 to pi/2, which equals pi/8.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-028",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "medium",
    "question": "What is the area enclosed between y = x and y = x^2 from x = 0 to x = 1?",
    "options": [
      "1/6",
      "1/3",
      "1/2",
      "1/4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "On [0,1], x >= x^2. The area is integral from 0 to 1 of (x-x^2)dx = [x^2/2-x^3/3]_0^1 = 1/2-1/3=1/6.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-029",
    "section": "Mathematics",
    "topic": "Ordinary Differential Equations",
    "difficulty": "medium",
    "question": "The differential equation dy/dx = 2xy satisfies y(0)=3. What is y(1)?",
    "options": [
      "3e^2",
      "e^3",
      "6e",
      "3e"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Separate variables: dy/y=2x dx. Integrating gives ln y=x^2+C, so y=Ce^(x^2). From y(0)=3, C=3. Thus y(1)=3e.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-030",
    "section": "Mathematics",
    "topic": "Ordinary Differential Equations",
    "difficulty": "hard",
    "question": "A function y(x) obeys dy/dx + y = e^x and passes through the point (0,0). Find its value at x = ln 2.",
    "options": [
      "1/2",
      "1",
      "5/4",
      "3/4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The integrating factor is e^x. Thus d(ye^x)/dx=e^(2x), so ye^x=(1/2)e^(2x)+C. Using y(0)=0 gives C=-1/2. Hence y=(e^x-e^-x)/2. At x=ln2, y=(2-1/2)/2=3/4.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-031",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "easy",
    "question": "Two fair dice are thrown. What is the probability that the sum is 8?",
    "options": [
      "5/36",
      "1/6",
      "1/9",
      "1/12"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The favorable ordered pairs are (2,6),(3,5),(4,4),(5,3),(6,2), giving 5 outcomes out of 36 equally likely outcomes. Probability = 5/36.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-032",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "A card drawn from a standard 52-card deck is known to be a face card. What is the probability that it is a king?",
    "options": [
      "1/4",
      "1/13",
      "1/3",
      "4/13"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "There are 12 face cards: 4 jacks, 4 queens, and 4 kings. Given that the card is a face card, the probability of a king is 4/12=1/3.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-033",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "A fair coin is tossed three times. Given that at least one head occurs, what is the expected number of heads?",
    "options": [
      "12/7",
      "3/2",
      "9/7",
      "4/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Let X be the number of heads. Unconditionally E[X]=3/2. The excluded event X=0 contributes zero to the expectation, so E[X; X>=1]=3/2. Since P(X>=1)=1-1/8=7/8, E[X | X>=1]=(3/2)/(7/8)=12/7.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-034",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "easy",
    "question": "If a = (1,2,-1) and b = (2,-1,3), what is a dot b?",
    "options": [
      "-3",
      "3",
      "-1",
      "1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "a dot b = 1x2 + 2x(-1) + (-1)x3 = 2-2-3=-3.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-035",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "medium",
    "question": "What is the volume of the parallelepiped formed by a=(1,0,1), b=(0,1,1), and c=(1,1,0)?",
    "options": [
      "1",
      "2",
      "sqrt(2)",
      "4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The volume is |a dot (b x c)|, the absolute scalar triple product. The determinant of [[1,0,1],[0,1,1],[1,1,0]] is -2, so the volume is 2.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-036",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "question": "Using population variance, what is the standard deviation of the data 2, 4, 6, 8, 10?",
    "options": [
      "2",
      "4",
      "sqrt(10)",
      "2sqrt(2)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The mean is 6. The squared deviations are 16,4,0,4,16, with total 40. Population variance is 40/5=8, so standard deviation is sqrt(8)=2sqrt(2).",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-037",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "question": "A data set has variance 4. If every observation x is transformed to y = 3x + 2, what is the variance of the transformed data?",
    "options": [
      "36",
      "12",
      "18",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Adding 2 does not change variance. Multiplying every observation by 3 multiplies variance by 3^2=9. Thus the new variance is 9x4=36.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-038",
    "section": "Mathematics",
    "topic": "Linear Programming",
    "difficulty": "hard",
    "question": "Maximize Z = 3x + 2y subject to x + y <= 4, x <= 2, y <= 3, x >= 0, y >= 0. What is the maximum value of Z?",
    "options": [
      "9",
      "8",
      "12",
      "10"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The feasible vertices are (0,0),(2,0),(2,2),(1,3),(0,3). The corresponding Z values are 0,6,10,9,6. Therefore the maximum value is 10 at (2,2).",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-039",
    "section": "Mathematics",
    "topic": "Linear Programming",
    "difficulty": "easy",
    "question": "Consider x + y >= 4, x <= 1, y <= 1, x >= 0, y >= 0. Which statement is correct?",
    "options": [
      "The feasible region is a triangle.",
      "The maximum of x+y is 4.",
      "There are infinitely many feasible points.",
      "The constraints have no feasible solution."
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "From x<=1 and y<=1 with x,y>=0, we have x+y<=2. This contradicts x+y>=4. Therefore no point satisfies all constraints.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-mathematics-040",
    "section": "Mathematics",
    "topic": "Mathematical Modelling",
    "difficulty": "medium",
    "question": "At an event, 3 adult tickets and 2 student tickets cost Rs 460, while 2 adult tickets and 4 student tickets cost Rs 520. Using a two-variable linear model, what is the cost of 5 adult tickets and 3 student tickets?",
    "options": [
      "Rs 700",
      "Rs 740",
      "Rs 720",
      "Rs 760"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Let adult and student ticket prices be a and s. Then 3a+2s=460 and 2a+4s=520. The second equation gives a+2s=260. Subtracting this from the first gives 2a=200, so a=100 and s=80. Therefore 5a+3s=500+240=Rs 740.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Mathematics syllabus and approved Mathematics-variant pattern",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  }
];
