import type { Question } from '../questions';

export const SAEEE_2026_MATHEMATICS_1: Question[] = [
  {
    "id": "saeee-2026-ma-001",
    "section": "Mathematics",
    "topic": "Sets, Relations and Functions",
    "difficulty": "easy",
    "question": "For f(x) = (2x + 3)/(x - 1), x \u2260 1, if f(a) = 5, what is a?",
    "options": [
      "3/2",
      "5/3",
      "7/2",
      "8/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "5(a-1)=2a+3, so 3a=8 and a=8/3.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ma-002",
    "section": "Mathematics",
    "topic": "Complex Numbers and Quadratic Equations",
    "difficulty": "medium",
    "question": "The roots of x^2 - 6x + 13 = 0 are alpha and beta. What is |alpha|?",
    "options": [
      "2",
      "sqrt(13)",
      "3",
      "13"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The roots are 3 \u00b1 2i. Hence |alpha| = sqrt(3^2+2^2)=sqrt(13).",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ma-003",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "For which values of a is the matrix [[1,1,1],[1,a,2],[1,2,a]] singular?",
    "options": [
      "a = 1 or 2",
      "a = -2 or 0",
      "a = 0 or 2",
      "a = -1 or 2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Its determinant is a^2-2a=a(a-2). Singularity requires determinant zero, giving a=0 or 2.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ma-004",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "medium",
    "question": "How many distinct arrangements of the letters of LEVEL have the two vowels together?",
    "options": [
      "12",
      "6",
      "18",
      "24"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Treat EE as one block. Then the objects are EE, L, L, V: 4!/2! = 12 arrangements.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ma-005",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "easy",
    "question": "In an arithmetic progression, the 5th term is 18 and the 11th term is 42. What is the 20th term?",
    "options": [
      "74",
      "78",
      "82",
      "86"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The common difference is (42-18)/(11-5)=4. Hence a=18-4(4)=2, so a_20=2+19(4)=78.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ma-006",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "medium",
    "question": "For a positive nonzero number k, the coefficients of x^2 and x^3 in (1+kx)^6 are equal. What is k?",
    "options": [
      "1/2",
      "2/3",
      "3/4",
      "4/3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The coefficients are C(6,2)k^2=15k^2 and C(6,3)k^3=20k^3. For k>0, 15=20k, so k=3/4.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ma-007",
    "section": "Mathematics",
    "topic": "Limits, Continuity and Differentiability",
    "difficulty": "medium",
    "question": "Evaluate lim[x->0] {sqrt(1+3x) - sqrt(1-x)}/x.",
    "options": [
      "1",
      "3/2",
      "5/2",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Rationalizing or using first-order expansions gives (3/2)-(-1/2)=2.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ma-008",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "medium",
    "question": "For x > 0, what is the minimum value of x^2 + 16/x?",
    "options": [
      "8",
      "10",
      "16",
      "12"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Differentiate: 2x-16/x^2=0 gives x=2. The value is 4+8=12, and the second derivative is positive.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ma-009",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "medium",
    "question": "Evaluate the definite integral from 0 to 1 of (2x+1)/(x^2+x+2) dx.",
    "options": [
      "(1/2) ln 2",
      "ln 2",
      "pi/4",
      "1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The numerator is the derivative of x^2+x+2. Therefore the integral is ln(x^2+x+2)|_0^1=ln4-ln2=ln2.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ma-010",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "A function y satisfies dy/dx = 2xy and y(0)=3. What is y(1)?",
    "options": [
      "e^2",
      "3e^2",
      "3e",
      "6e"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "dy/y=2x dx gives ln y=x^2+C. Since y(0)=3, y=3e^(x^2), so y(1)=3e.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ma-011",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "Find the equation of the line through the intersection of x+y=4 and 2x-y=1 that is perpendicular to 3x+4y=0.",
    "options": [
      "9x - 12y + 13 = 0",
      "12x + 9y - 41 = 0",
      "9x + 12y - 43 = 0",
      "12x - 9y + 1 = 0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The intersection is (5/3,7/3). A perpendicular to 3x+4y=0 has slope 4/3, giving 12x-9y+1=0.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ma-012",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "easy",
    "question": "The points A(1,-2) and B(5,4) are the endpoints of a diameter of a circle. What is the radius of the circle?",
    "options": [
      "2sqrt(13)",
      "13",
      "sqrt(13)",
      "sqrt(26)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "AB=sqrt((5-1)^2+(4+2)^2)=sqrt(16+36)=2sqrt(13). The radius is AB/2=sqrt(13).",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ma-013",
    "section": "Mathematics",
    "topic": "Conic Sections",
    "difficulty": "easy",
    "question": "An ellipse has minor-axis length 10 and eccentricity sqrt(11)/6. What is its major-axis length?",
    "options": [
      "12",
      "10",
      "2sqrt(11)",
      "18"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Here b=5 and e^2=11/36. Since b^2=a^2(1-e^2), 25=a^2(25/36), giving a=6. Thus the major-axis length is 2a=12.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ma-014",
    "section": "Mathematics",
    "topic": "Three-Dimensional Geometry",
    "difficulty": "easy",
    "question": "A plane passes through (1,-2,3) and is perpendicular to a line whose direction ratios are 2,-1,2. Which equation represents the plane?",
    "options": [
      "2x+y+2z-6=0",
      "x-2y+2z-11=0",
      "2x-y+2z-10=0",
      "2x-y-2z+2=0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A normal to the plane is (2,-1,2). Using the point gives 2(x-1)-(y+2)+2(z-3)=0, or 2x-y+2z-10=0.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ma-015",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "medium",
    "question": "What is the angle between vectors (1,1,0) and (1,0,1)?",
    "options": [
      "60 degrees",
      "30 degrees",
      "45 degrees",
      "90 degrees"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Their dot product is 1 and each magnitude is sqrt2, so cos theta=1/2 and theta=60 degrees.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ma-016",
    "section": "Mathematics",
    "topic": "Statistics and Probability",
    "difficulty": "medium",
    "question": "A box contains 3 red and 2 blue balls. Two balls are drawn without replacement. What is the probability of getting exactly one red ball?",
    "options": [
      "2/5",
      "1/2",
      "4/5",
      "3/5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Favourable pairs = C(3,1)C(2,1)=6 and total pairs=C(5,2)=10, so the probability is 3/5.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ma-017",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "For an acute angle theta, sec(theta)-tan(theta)=1/3. What is sin(theta)?",
    "options": [
      "3/5",
      "4/5",
      "5/6",
      "2/3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Because (sec theta-tan theta)(sec theta+tan theta)=1, sec theta+tan theta=3. Hence sec theta=5/3 and tan theta=4/3, so sin theta=tan theta/sec theta=4/5.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ma-018",
    "section": "Mathematics",
    "topic": "Three-Dimensional Geometry",
    "difficulty": "hard",
    "question": "The points A(1,0,1), B(2,1,0), C(0,2,1) and D(k,1,2) are coplanar. What is k?",
    "options": [
      "-3",
      "-1",
      "1",
      "3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Coplanarity requires det[B-A, C-A, D-A]=0. The determinant simplifies to 2(k+1), so k=-1.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ma-019",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "hard",
    "question": "What is the total area between y=|x^2-1| and the x-axis for -2 <= x <= 2?",
    "options": [
      "4 square units",
      "8/3 square units",
      "10/3 square units",
      "16/3 square units"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By symmetry, area=2[ integral_0^1(1-x^2)dx + integral_1^2(x^2-1)dx ]=2(2/3+4/3)=4.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ma-020",
    "section": "Mathematics",
    "topic": "Statistics and Probability",
    "difficulty": "hard",
    "question": "Two distinct numbers are chosen uniformly from the set {1,2,3,4,5,6,7,8,9,10}. Given that at least one chosen number is prime, what is the probability that both chosen numbers are prime?",
    "options": [
      "1/5",
      "1/3",
      "2/5",
      "3/10"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "There are 4 primes and 6 non-primes. Pairs with at least one prime = C(10,2)-C(6,2)=45-15=30. Pairs with both prime = C(4,2)=6. Thus the conditional probability is 6/30=1/5.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  }
];
