import type { Question } from '../questions';

export const VTUEEE_2026_MATHEMATICS_1: Question[] = [
  {
    "id": "vtueee-2026-ma-001",
    "section": "Mathematics",
    "topic": "Functions",
    "difficulty": "medium",
    "question": "For f: R -> R defined by f(x) = 2x - 3, which statement is correct?",
    "options": [
      "f is neither one-one nor onto",
      "f is onto but not one-one",
      "f is both one-one and onto",
      "f is one-one but not onto"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A nonzero-slope linear function maps distinct real inputs to distinct outputs, and for any y in R, x = (y + 3)/2 gives f(x) = y.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-002",
    "section": "Mathematics",
    "topic": "Complex numbers",
    "difficulty": "medium",
    "question": "The value of (1 + i)^4 is",
    "options": [
      "-4",
      "4",
      "-4i",
      "4i"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "(1 + i)^2 = 2i, so (1 + i)^4 = (2i)^2 = -4.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-003",
    "section": "Mathematics",
    "topic": "Quadratic equations",
    "difficulty": "easy",
    "question": "The roots of x^2 - 5x + 6 = 0 are alpha and beta. Which equation has roots alpha + 1 and beta + 1?",
    "options": [
      "x^2 + 7x + 12 = 0",
      "x^2 - 5x + 12 = 0",
      "x^2 - 7x + 6 = 0",
      "x^2 - 7x + 12 = 0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The original roots are 2 and 3, so the new roots are 3 and 4, giving x^2 - 7x + 12 = 0.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-004",
    "section": "Mathematics",
    "topic": "Matrices and determinants",
    "difficulty": "medium",
    "question": "Evaluate the determinant |1 2 3; 0 1 4; 5 6 0|.",
    "options": [
      "1",
      "-1",
      "15",
      "5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Expanding along the first row gives 1(0-24) - 2(0-20) + 3(0-5) = -24 + 40 - 15 = 1.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-005",
    "section": "Mathematics",
    "topic": "Linear equations",
    "difficulty": "easy",
    "question": "If x + y = 5 and x - y = 1, then x equals",
    "options": [
      "4",
      "5",
      "2",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Adding the equations gives 2x = 6, so x = 3.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-006",
    "section": "Mathematics",
    "topic": "Permutations",
    "difficulty": "easy",
    "question": "Four distinct sensor labels A, B, C and D are arranged in a row. In how many arrangements does A appear somewhere before B?",
    "options": [
      "8",
      "12",
      "24",
      "6"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Of all 4! = 24 arrangements, symmetry gives half with A before B and half with B before A, so 12.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-007",
    "section": "Mathematics",
    "topic": "Combinations",
    "difficulty": "hard",
    "question": "A project team of 3 is chosen from 5 men and 4 women. How many teams contain at least one woman?",
    "options": [
      "74",
      "70",
      "84",
      "64"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are C(9,3) = 84 total teams. Subtract the all-men teams C(5,3) = 10, giving 84 - 10 = 74.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-008",
    "section": "Mathematics",
    "topic": "Binomial theorem",
    "difficulty": "medium",
    "question": "What is the coefficient of x^3 in (1 + 2x)^5?",
    "options": [
      "160",
      "80",
      "20",
      "40"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The x^3 term has coefficient C(5,3)2^3 = 10 x 8 = 80.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-009",
    "section": "Mathematics",
    "topic": "Arithmetic progression",
    "difficulty": "medium",
    "question": "Find the sum of the first 20 terms of the arithmetic progression 7, 12, 17, ...",
    "options": [
      "1045",
      "1190",
      "1090",
      "1020"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a = 7, d = 5. S20 = 20/2 [2(7) + 19(5)] = 10(109) = 1090.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-010",
    "section": "Mathematics",
    "topic": "Geometric progression",
    "difficulty": "medium",
    "question": "In the geometric progression 3, 6, 12, 24, ... which is the first term that exceeds 100?",
    "options": [
      "6th term",
      "7th term",
      "8th term",
      "9th term"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The terms are 3, 6, 12, 24, 48, 96, 192, ... . The first value above 100 is 192, which is the 7th term.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-011",
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "medium",
    "question": "Evaluate lim(x->0) sin(3x)/x, with angles in radians.",
    "options": [
      "1",
      "0",
      "3",
      "6"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "sin(3x)/x = 3[sin(3x)/(3x)], and the bracket tends to 1, so the limit is 3.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-012",
    "section": "Mathematics",
    "topic": "Continuity",
    "difficulty": "easy",
    "question": "A function is defined by f(x) = kx + 1 for x < 2 and f(x) = 7 for x >= 2. For f to be continuous at x = 2, k must be",
    "options": [
      "4",
      "3",
      "6",
      "2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Continuity requires 2k + 1 = 7, so k = 3.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-013",
    "section": "Mathematics",
    "topic": "Differentiation",
    "difficulty": "easy",
    "question": "If y = x^2 e^x, then dy/dx is",
    "options": [
      "2xe^x",
      "x^2e^x",
      "e^x(x^2 + 2x)",
      "e^x(x^2 + 2)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By the product rule, dy/dx = 2xe^x + x^2e^x = e^x(x^2 + 2x).",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-014",
    "section": "Mathematics",
    "topic": "Applications of derivatives",
    "difficulty": "medium",
    "question": "A rectangle has perimeter 20 units. What is the maximum possible area?",
    "options": [
      "20 square units",
      "40 square units",
      "50 square units",
      "25 square units"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For fixed perimeter, the rectangle of maximum area is a square. Side = 20/4 = 5, so area = 25.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-015",
    "section": "Mathematics",
    "topic": "Indefinite integration",
    "difficulty": "medium",
    "question": "An antiderivative of 2x/(x^2 + 1) is",
    "options": [
      "ln(x^2 + 1) + C",
      "1/(x^2 + 1) + C",
      "x^2/(x^2 + 1) + C",
      "2 ln(x^2 + 1) + C"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let u = x^2 + 1, du = 2x dx. The integral is ln u + C.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-016",
    "section": "Mathematics",
    "topic": "Definite integration",
    "difficulty": "hard",
    "question": "Evaluate integral from 0 to pi of x sin x dx.",
    "options": [
      "1",
      "2pi",
      "pi/2",
      "pi"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By integration by parts, integral x sin x dx = -x cos x + sin x. From 0 to pi this equals pi.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-017",
    "section": "Mathematics",
    "topic": "Area under curves",
    "difficulty": "medium",
    "question": "The area enclosed between y = x and y = x^2 from x = 0 to x = 1 is",
    "options": [
      "1/2 square unit",
      "2/3 square unit",
      "1/6 square unit",
      "1/3 square unit"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Area = integral_0^1 (x - x^2) dx = 1/2 - 1/3 = 1/6.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-018",
    "section": "Mathematics",
    "topic": "Differential equations",
    "difficulty": "medium",
    "question": "If dy/dx = 2xy and y(0) = 3, then y equals",
    "options": [
      "3e^(2x)",
      "e^(x^2) + 2",
      "3e^(x^2)",
      "3x^2 + 3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Separate variables: dy/y = 2x dx. Thus ln y = x^2 + C, so y = Ce^(x^2). Using y(0) = 3 gives C = 3.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-019",
    "section": "Mathematics",
    "topic": "Straight lines",
    "difficulty": "medium",
    "question": "The distance between the parallel lines 3x + 4y - 7 = 0 and 3x + 4y + 8 = 0 is",
    "options": [
      "5/3",
      "3",
      "1",
      "15"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For ax + by + c1 = 0 and ax + by + c2 = 0, distance = |c2-c1|/sqrt(a^2+b^2) = 15/5 = 3.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-020",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "easy",
    "question": "For the circle x^2 + y^2 - 6x + 4y - 12 = 0, the radius is",
    "options": [
      "4",
      "6",
      "3",
      "5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Completing squares gives (x - 3)^2 + (y + 2)^2 = 25, so the radius is 5.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-021",
    "section": "Mathematics",
    "topic": "Parabola",
    "difficulty": "medium",
    "question": "For the parabola y^2 = 8x, the tangent at the point (2, 4) is",
    "options": [
      "2y = x + 6",
      "y = x + 2",
      "y = x - 2",
      "y = 2x"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For y^2 = 4ax with a = 2, the tangent at parameter t = 1 is ty = x + at^2, hence y = x + 2.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-022",
    "section": "Mathematics",
    "topic": "Ellipse",
    "difficulty": "medium",
    "question": "The eccentricity of the ellipse x^2/25 + y^2/9 = 1 is",
    "options": [
      "4/5",
      "3/5",
      "2/5",
      "5/4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Here a = 5, b = 3, so c = sqrt(a^2 - b^2) = 4 and e = c/a = 4/5.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-023",
    "section": "Mathematics",
    "topic": "Vector algebra",
    "difficulty": "easy",
    "question": "If a = (1, 2, -1) and b = (2, 0, 3), then a dot b equals",
    "options": [
      "5",
      "-1",
      "3",
      "1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a dot b = 1(2) + 2(0) + (-1)(3) = -1.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-024",
    "section": "Mathematics",
    "topic": "Three-dimensional geometry",
    "difficulty": "hard",
    "question": "What is the perpendicular distance from the point (1, 2, 3) to the plane x + 2y + 2z = 9?",
    "options": [
      "1",
      "2/3",
      "1/3",
      "2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Distance = |1 + 4 + 6 - 9|/sqrt(1^2 + 2^2 + 2^2) = 2/3.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-025",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "Two fair dice are thrown. What is the probability that the sum is 8?",
    "options": [
      "5/36",
      "7/36",
      "1/9",
      "1/6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The favourable ordered pairs are (2,6), (3,5), (4,4), (5,3), (6,2): 5 out of 36.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-026",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "question": "Using population variance (divide by n), what is the variance of the data 1, 3, 5, 7?",
    "options": [
      "20",
      "4",
      "10",
      "5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The mean is 4. Squared deviations are 9, 1, 1, 9; their average is 20/4 = 5.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-027",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "easy",
    "question": "The exact value of sin 75 degrees is",
    "options": [
      "(sqrt(6) - sqrt(2))/4",
      "1/2",
      "(sqrt(6) + sqrt(2))/4",
      "sqrt(3)/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "sin(45 + 30) = sin45 cos30 + cos45 sin30 = (sqrt6 + sqrt2)/4.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-028",
    "section": "Mathematics",
    "topic": "Inverse trigonometric functions",
    "difficulty": "hard",
    "question": "For principal values, tan^-1(1) + tan^-1(1/2) equals",
    "options": [
      "tan^-1(1/3)",
      "pi/2",
      "tan^-1(3/2)",
      "tan^-1(3)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using tan(A+B) = (1 + 1/2)/(1 - 1/2) = 3. Both angles are positive and their sum is less than pi/2, so the principal value is tan^-1(3).",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-029",
    "section": "Mathematics",
    "topic": "Mathematical reasoning",
    "difficulty": "medium",
    "question": "The contrapositive of the statement \"If a circuit is open, then current is zero\" is",
    "options": [
      "If current is not zero, then the circuit is not open",
      "If current is zero, then the circuit is open",
      "If a circuit is not open, then current is not zero",
      "If a circuit is open, then current is not zero"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The contrapositive of P implies Q is not-Q implies not-P. Here that is: if current is not zero, the circuit is not open.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "vtueee-2026-ma-030",
    "section": "Mathematics",
    "topic": "Binomial probability",
    "difficulty": "medium",
    "question": "A device test succeeds independently with probability 1/3 on each trial. What is the probability of exactly two successes in three trials?",
    "options": [
      "2/9",
      "4/9",
      "1/3",
      "1/9"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using the binomial formula: C(3,2)(1/3)^2(2/3) = 3 x 1/9 x 2/3 = 2/9.",
    "source": {
      "kind": "original",
      "reference": "VTUEEE 2026 current admissions control with official-linked PCM syllabus",
      "url": "https://www.veltech.edu.in/btech-admissions/",
      "checkedOn": "2026-08-28"
    }
  }
];
