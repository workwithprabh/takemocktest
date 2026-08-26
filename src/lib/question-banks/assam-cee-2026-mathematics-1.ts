import type { Question } from '../questions';

export const ASSAM_CEE_2026_MATHEMATICS_1: Question[] = [
  {
    "id": "assam-cee-2026-ma-001",
    "section": "Mathematics",
    "topic": "Sets",
    "difficulty": "easy",
    "question": "In a class of 80 students, 50 study Mathematics, 45 study Physics and 30 study both. How many study neither Mathematics nor Physics?",
    "options": [
      "20",
      "15",
      "35",
      "5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By inclusion-exclusion, the number studying at least one subject is 50 + 45 - 30 = 65. Hence 80 - 65 = 15 study neither.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-002",
    "section": "Mathematics",
    "topic": "Functions",
    "difficulty": "easy",
    "question": "Let f(x) = 2x - 3 and g(x) = x^2 + 1. What is (g \u2218 f)(2)?",
    "options": [
      "2",
      "5",
      "3",
      "1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f(2)=1, so (g\u2218f)(2)=g(1)=1^2+1=2.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-003",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "If \u03b8 is acute and sin \u03b8 + cos \u03b8 = \u221a(3/2), then sin 2\u03b8 equals",
    "options": [
      "1/4",
      "\u221a3/2",
      "3/4",
      "1/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "(sin\u03b8+cos\u03b8)^2 = 1 + sin2\u03b8. Thus 3/2 = 1 + sin2\u03b8, giving sin2\u03b8 = 1/2.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-004",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "easy",
    "question": "The value of (1 + i)^4 is",
    "options": [
      "4",
      "-4",
      "4i",
      "-4i"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "(1+i)^2=2i, so (1+i)^4=(2i)^2=-4.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-005",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "medium",
    "question": "For what value of k does x^2 - (k + 2)x + 2k = 0 have equal roots?",
    "options": [
      "-2",
      "2",
      "4",
      "0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Equal roots require discriminant zero: (k+2)^2-8k=(k-2)^2=0, so k=2.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-006",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "medium",
    "question": "The sum of the first five terms of the geometric progression 2, 6, 18, ... is",
    "options": [
      "486",
      "244",
      "242",
      "120"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Here a=2 and r=3. S5 = 2(3^5-1)/(3-1)=3^5-1=242.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-007",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "medium",
    "question": "How many distinct arrangements can be formed using all the letters of the word ASSAM?",
    "options": [
      "120",
      "30",
      "60",
      "20"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are 5 letters with A repeated twice and S repeated twice. The count is 5!/(2!2!)=30.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-008",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "medium",
    "question": "The coefficient of x^3 in (1 + 2x)^5 is",
    "options": [
      "60",
      "160",
      "40",
      "80"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The x^3 term is C(5,3)(2x)^3, whose coefficient is 10\u00d78=80.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-009",
    "section": "Mathematics",
    "topic": "Straight Lines",
    "difficulty": "medium",
    "question": "The perpendicular distance of the point (2, -1) from the line 3x + 4y - 10 = 0 is",
    "options": [
      "2",
      "8/5",
      "6/5",
      "12/5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Distance = |3(2)+4(-1)-10|/\u221a(3^2+4^2)=8/5.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-010",
    "section": "Mathematics",
    "topic": "Circle",
    "difficulty": "easy",
    "question": "The tangent to the circle x^2 + y^2 = 25 at the point (3, 4) is",
    "options": [
      "3x - 4y = 25",
      "4x + 3y = 25",
      "3x + 4y = 25",
      "3x + 4y = 5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For x^2+y^2=a^2, the tangent at (x1,y1) is xx1+yy1=a^2. Hence 3x+4y=25.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-011",
    "section": "Mathematics",
    "topic": "Parabola",
    "difficulty": "easy",
    "question": "The length of the latus rectum of the parabola y^2 = 12x is",
    "options": [
      "3",
      "12",
      "6",
      "24"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Comparing y^2=12x with y^2=4ax gives 4a=12. The latus rectum length is 4a=12.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-012",
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "medium",
    "question": "Evaluate lim(x\u21920) [sin(3x)/tan(2x)].",
    "options": [
      "1",
      "3/2",
      "2/3",
      "6"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using sin(3x)~3x and tan(2x)~2x as x\u21920, the limit is 3/2.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-013",
    "section": "Mathematics",
    "topic": "Differentiation",
    "difficulty": "easy",
    "question": "If y = x^2 e^x, then dy/dx at x = 1 is",
    "options": [
      "4e",
      "e",
      "2e",
      "3e"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "dy/dx=e^x(x^2+2x). At x=1 this is 3e.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-014",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "medium",
    "question": "The maximum value of f(x)=x^3-3x on the interval [-2,2] is",
    "options": [
      "2",
      "-2",
      "6",
      "4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f\u2032(x)=3(x^2-1), so test x=-2,-1,1,2. The values are -2,2,-2,2; hence the maximum is 2.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-015",
    "section": "Mathematics",
    "topic": "Indefinite Integration",
    "difficulty": "medium",
    "question": "An antiderivative of 2x/(x^2+4) is",
    "options": [
      "2 ln(x^2 + 4) + C",
      "1/(x^2+4) + C",
      "ln(x^2 + 4) + C",
      "x^2/(x^2+4) + C"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "With u=x^2+4, du=2x dx, so the integral is ln(x^2+4)+C.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-016",
    "section": "Mathematics",
    "topic": "Definite Integration",
    "difficulty": "easy",
    "question": "The value of \u222b_0^1 (3x^2 + 2x) dx is",
    "options": [
      "1",
      "5/2",
      "2",
      "3/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The antiderivative is x^3+x^2. Evaluating from 0 to 1 gives 2.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-017",
    "section": "Mathematics",
    "topic": "Applications of Integrals",
    "difficulty": "medium",
    "question": "The area enclosed between y=x and y=x^2 from x=0 to x=1 is",
    "options": [
      "2/3",
      "1/2",
      "1/3",
      "1/6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "On [0,1], x\u2265x^2. Area = \u222b_0^1(x-x^2)dx = 1/2-1/3=1/6.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-018",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "easy",
    "question": "A function y satisfies dy/dx = 3x^2 and y(0)=2. Then y(1) is",
    "options": [
      "2",
      "1",
      "4",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Integrating gives y=x^3+C. From y(0)=2, C=2; hence y(1)=3.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-019",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "If A = [[1, 2], [3, 4]], then det(A^2) equals",
    "options": [
      "4",
      "16",
      "2",
      "-4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "det(A) = 4-6=-2. Since det(A^2)=[det(A)]^2, the value is 4.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-020",
    "section": "Mathematics",
    "topic": "Determinants",
    "difficulty": "hard",
    "question": "Evaluate the determinant |1 1 1; 1 2 3; 1 4 9|.",
    "options": [
      "4",
      "-2",
      "6",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "This is a Vandermonde determinant for 1,2,3: (2-1)(3-1)(3-2)=2.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-021",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "medium",
    "question": "For a=(1,2,2) and b=(2,-1,2), cos of the angle between a and b is",
    "options": [
      "1/3",
      "2/3",
      "4/9",
      "5/9"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a\u00b7b=2-2+4=4, while |a|=|b|=3. Therefore cos\u03b8=4/(3\u00d73)=4/9.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-022",
    "section": "Mathematics",
    "topic": "Three-Dimensional Geometry",
    "difficulty": "medium",
    "question": "The distance of the point (2,1,4) from the plane 2x - y + 2z - 6 = 0 is",
    "options": [
      "5/2",
      "1",
      "5/3",
      "4/3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Distance = |4-1+8-6|/\u221a(4+1+4)=5/3.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-023",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "easy",
    "question": "A bag contains 4 red and 3 blue balls. Two balls are drawn without replacement. The probability that both are red is",
    "options": [
      "4/7",
      "2/7",
      "3/7",
      "1/7"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P(both red)=(4/7)(3/6)=2/7.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-024",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "question": "The variance of the data 2, 4, 6, 8, 10 is",
    "options": [
      "10",
      "6",
      "8",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The mean is 6. Squared deviations sum to 16+4+0+4+16=40, so variance=40/5=8.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-025",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "A fair die is rolled twice. Given that the sum of the two outcomes is even, what is the probability that their product is divisible by 3?",
    "options": [
      "5/9",
      "4/9",
      "2/3",
      "1/2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "An even sum means both outcomes have the same parity, giving 18 ordered pairs. Among these, pairs with neither outcome divisible by 3 use only {1,2,4,5}: 4 odd-odd plus 4 even-even pairs, i.e. 8. Thus 10 of 18 allowed pairs have product divisible by 3, giving 5/9.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-026",
    "section": "Mathematics",
    "topic": "Continuity",
    "difficulty": "medium",
    "question": "Define f(x)=(x^2-a^2)/(x-a) for x\u2260a and f(a)=6. For f to be continuous at x=a, a must be",
    "options": [
      "-3",
      "3",
      "12",
      "6"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For x\u2260a, f(x)=x+a. Thus lim(x\u2192a)f(x)=2a. Continuity requires 2a=6, so a=3.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-027",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "medium",
    "question": "The locus of a complex number z=x+iy satisfying |z-1|=|z+1| is",
    "options": [
      "the circle x^2+y^2=1",
      "the imaginary axis",
      "the real axis",
      "the line y=1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The point z is equidistant from 1 and -1 on the real axis. Their perpendicular bisector is x=0, the imaginary axis.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-028",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "medium",
    "question": "A sequence is defined by a1=2 and a(n+1)=2a(n)+1. The value of a4 is",
    "options": [
      "23",
      "15",
      "11",
      "31"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a2=5, a3=11 and a4=23.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-029",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "hard",
    "question": "How many 4-digit even numbers can be formed from the digits 1,2,3,4,5 without repetition?",
    "options": [
      "24",
      "60",
      "36",
      "48"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The units digit can be 2 or 4 (2 choices). The remaining three positions can be filled in 4P3=24 ways, giving 48.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-030",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "medium",
    "question": "The constant term in the expansion of (x + 1/x)^8 is",
    "options": [
      "84",
      "112",
      "70",
      "56"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The general power is x^(8-2r). For a constant term r=4, giving coefficient C(8,4)=70.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-031",
    "section": "Mathematics",
    "topic": "Ellipse",
    "difficulty": "easy",
    "question": "The eccentricity of the ellipse x^2/25 + y^2/9 = 1 is",
    "options": [
      "4/5",
      "\u221a34/5",
      "2/5",
      "3/5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Here a=5,b=3, so c=\u221a(25-9)=4 and e=c/a=4/5.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-032",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "medium",
    "question": "The y-intercept of the tangent to y=x^2+1 at x=2 is",
    "options": [
      "-5",
      "5",
      "3",
      "-3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At x=2, y=5 and slope=2x=4. The tangent is y-5=4(x-2), i.e. y=4x-3.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-033",
    "section": "Mathematics",
    "topic": "Definite Integration",
    "difficulty": "medium",
    "question": "The value of \u222b_0^1 x/(1+x^2) dx is",
    "options": [
      "ln 2",
      "1/2",
      "(1/2) ln 2",
      "1 - ln 2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Put u=1+x^2, du=2x dx. The integral is (1/2)ln u from 1 to 2, hence (1/2)ln2.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-034",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "If dy/dx = y/x and y(2)=6, then y(5) equals",
    "options": [
      "12",
      "18",
      "10",
      "15"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "dy/y=dx/x gives y=Cx. Since y(2)=6, C=3, so y(5)=15.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-035",
    "section": "Mathematics",
    "topic": "Matrices and Linear Equations",
    "difficulty": "medium",
    "question": "If x+y=5 and 2x-y=1, then x-y equals",
    "options": [
      "-1",
      "-2",
      "2",
      "1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Adding the equations gives 3x=6, so x=2 and y=3. Therefore x-y=-1.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-036",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "hard",
    "question": "The area of the parallelogram formed by vectors a=(1,2,0) and b=(2,1,2) is",
    "options": [
      "5",
      "\u221a21",
      "29",
      "\u221a29"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a\u00d7b=(4,-2,-3). Its magnitude is \u221a(16+4+9)=\u221a29, which is the parallelogram area.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-037",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "A bag contains 5 red, 3 green and 2 blue balls. Three balls are drawn at random without replacement. The probability that the three drawn balls contain exactly two colours is",
    "options": [
      "79/120",
      "109/120",
      "11/120",
      "1/4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are C(10,3)=120 selections. Selections with one colour only are C(5,3)+C(3,3)=11, while selections with all three colours are 5\u00d73\u00d72=30. Thus exactly two colours occur in 120-11-30=79 selections, giving 79/120.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-038",
    "section": "Mathematics",
    "topic": "Trigonometric Equations",
    "difficulty": "medium",
    "question": "The number of solutions of sin(2x)=1 in 0\u2264x<2\u03c0 is",
    "options": [
      "2",
      "4",
      "1",
      "3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "sin(2x)=1 when 2x=\u03c0/2+2k\u03c0, so x=\u03c0/4+k\u03c0. In [0,2\u03c0), k=0,1, giving two solutions.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-039",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "easy",
    "question": "If \u03b1 and \u03b2 are the roots of x^2-5x+6=0, then 1/\u03b1 + 1/\u03b2 equals",
    "options": [
      "1",
      "1/6",
      "5/6",
      "6/5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "(1/\u03b1+1/\u03b2)=(\u03b1+\u03b2)/(\u03b1\u03b2)=5/6.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "assam-cee-2026-ma-040",
    "section": "Mathematics",
    "topic": "Definite Integration",
    "difficulty": "hard",
    "question": "The value of \u222b_0^(\u03c0/2) x sin x dx is",
    "options": [
      "1",
      "\u03c0/2 - 1",
      "2",
      "\u03c0/2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By integration by parts, \u222bx sinx dx=-x cosx+sinx. From 0 to \u03c0/2, the value is 1.",
    "source": {
      "kind": "original",
      "reference": "Assam CEE 2026 official ASSEB Division-II Higher Secondary syllabus basis",
      "url": "https://astu.formsrec.in/pdf/Final%20Brochure%20CEE-2026.pdf",
      "checkedOn": "2026-08-24"
    }
  }
];
