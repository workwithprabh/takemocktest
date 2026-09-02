import type { Question } from '../questions';

export const TJEE_2026_MATHEMATICS_1: Question[] = [
  {
    "id": "tjee-2026-ma-001",
    "section": "Mathematics",
    "topic": "Sets",
    "difficulty": "easy",
    "question": "Let A = {1,2,3,4} and B = {2,4,6}. How many elements are in A \u2229 B?",
    "options": [
      "2",
      "3",
      "4",
      "1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A \u2229 B = {2,4}, so it has 2 elements.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-002",
    "section": "Mathematics",
    "topic": "Relations",
    "difficulty": "medium",
    "question": "On the integers, define aRb if a-b is divisible by 3. Which type of relation is R?",
    "options": [
      "Reflexive but not symmetric",
      "Equivalence relation",
      "Symmetric but not transitive",
      "Neither reflexive nor symmetric"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Divisibility of a-b by 3 is reflexive, symmetric and transitive, so R is an equivalence relation.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-003",
    "section": "Mathematics",
    "topic": "Mappings and inverse functions",
    "difficulty": "easy",
    "question": "For f(x)=2x-5, what is f\u207b\u00b9(9)?",
    "options": [
      "5",
      "14",
      "7",
      "2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Solve 2x-5=9. Then 2x=14 and x=7.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-004",
    "section": "Mathematics",
    "topic": "Sequences and series",
    "difficulty": "medium",
    "question": "An arithmetic progression begins 17, 24, 31, ... . What is the sum of its first 16 terms?",
    "options": [
      "1080",
      "1184",
      "1040",
      "1112"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Here a=17, d=7 and n=16. S\u2081\u2086 = 16/2[2(17)+15(7)] = 8(34+105) = 1112.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-005",
    "section": "Mathematics",
    "topic": "Complex numbers",
    "difficulty": "medium",
    "question": "Evaluate (3+4i)/(1-i).",
    "options": [
      "(-1+7i)/2",
      "(-7+i)/2",
      "(1+7i)/2",
      "(7+i)/2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Multiply numerator and denominator by 1+i: (3+4i)(1+i)/(1+1) = (-1+7i)/2.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-006",
    "section": "Mathematics",
    "topic": "Permutations and combinations",
    "difficulty": "hard",
    "question": "Using the digits 0, 2, 5, 7 and 9 without repetition, how many four-digit even numbers can be formed?",
    "options": [
      "36",
      "42",
      "30",
      "48"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "If the units digit is 0, the thousands digit has 4 choices and the two middle places have 3\u00d72 choices: 24. If the units digit is 2, the thousands digit has 3 non-zero choices and the middle places have 3\u00d72 choices: 18. Total = 42.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-007",
    "section": "Mathematics",
    "topic": "Binomial theorem",
    "difficulty": "medium",
    "question": "What is the coefficient of x\u00b3 in (1+2x)\u2075?",
    "options": [
      "40",
      "160",
      "80",
      "60"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The x\u00b3 term is C(5,3)(2x)\u00b3 = 10\u00d78x\u00b3, so the coefficient is 80.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-008",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "Let A=[[1,2],[0,1]] and B=[[2,0],[3,1]]. What is det(AB)?",
    "options": [
      "8",
      "4",
      "1",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "det(AB)=det(A)det(B). det(A)=1 and det(B)=2, so det(AB)=2.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-009",
    "section": "Mathematics",
    "topic": "Determinants",
    "difficulty": "hard",
    "question": "Evaluate det[[2,-1,3],[1,2,0],[4,1,1]].",
    "options": [
      "-16",
      "-8",
      "16",
      "8"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Expanding along the first row gives 2(2)-(-1)(1)+3(1-8) = 4+1-21 = -16.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-010",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "easy",
    "question": "If sin \u03b8=3/5 and \u03b8 is acute, what is tan \u03b8?",
    "options": [
      "5/3",
      "3/4",
      "4/3",
      "5/4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For an acute angle with sin\u03b8=3/5, cos\u03b8=4/5. Therefore tan\u03b8=(3/5)/(4/5)=3/4.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-011",
    "section": "Mathematics",
    "topic": "Trigonometric identities",
    "difficulty": "medium",
    "question": "What is tan 15\u00b0?",
    "options": [
      "1/\u221a3",
      "2+\u221a3",
      "2-\u221a3",
      "\u221a3-1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "tan(45\u00b0-30\u00b0)=(1-1/\u221a3)/(1+1/\u221a3)=2-\u221a3.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-012",
    "section": "Mathematics",
    "topic": "Properties of triangles",
    "difficulty": "medium",
    "question": "Two sides of a triangle are 5 and 7 units and the included angle is 60\u00b0. What is the third side?",
    "options": [
      "\u221a59",
      "6",
      "\u221a29",
      "\u221a39"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By the cosine rule, c\u00b2=5\u00b2+7\u00b2-2\u00d75\u00d77\u00d7cos60\u00b0=25+49-35=39.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-013",
    "section": "Mathematics",
    "topic": "Straight lines",
    "difficulty": "easy",
    "question": "What is the equation of the line through (2,-1) with slope 3?",
    "options": [
      "3x-y-7=0",
      "3x+y-5=0",
      "3x-y+7=0",
      "x-3y-5=0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "y+1=3(x-2), so y=3x-7, or 3x-y-7=0.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-014",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "medium",
    "question": "Find the radius of the circle x\u00b2+y\u00b2-6x+4y-12=0.",
    "options": [
      "\u221a29",
      "5",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Completing squares gives (x-3)\u00b2+(y+2)\u00b2=25, so the radius is 5.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-015",
    "section": "Mathematics",
    "topic": "Parabola",
    "difficulty": "easy",
    "question": "What is the focus of the parabola y\u00b2=8x?",
    "options": [
      "(4,0)",
      "(0,2)",
      "(2,0)",
      "(-2,0)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Comparing y\u00b2=8x with y\u00b2=4ax gives a=2, so the focus is (2,0).",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-016",
    "section": "Mathematics",
    "topic": "Vector algebra",
    "difficulty": "medium",
    "question": "Find the dot product of a=(1,2,-1) and b=(2,-1,3).",
    "options": [
      "3",
      "-1",
      "1",
      "-3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a\u00b7b=1\u00d72+2\u00d7(-1)+(-1)\u00d73=2-2-3=-3.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-017",
    "section": "Mathematics",
    "topic": "Three-dimensional geometry",
    "difficulty": "hard",
    "question": "What is the perpendicular distance from (1,2,3) to the plane 2x-y+2z-5=0?",
    "options": [
      "1/3",
      "3",
      "1",
      "2/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Distance = |2(1)-2+2(3)-5|/\u221a(2\u00b2+(-1)\u00b2+2\u00b2)=|1|/3=1/3.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-018",
    "section": "Mathematics",
    "topic": "Vectors and angles",
    "difficulty": "easy",
    "question": "What is the cosine of the angle between the vector i+j+k and the positive z-axis?",
    "options": [
      "\u221a2/\u221a3",
      "1/\u221a3",
      "1/3",
      "0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The z-axis direction is k. The cosine is (1)/(|(1,1,1)|\u00d71)=1/\u221a3.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-019",
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "medium",
    "question": "Evaluate lim(x\u21920) [((\u221a(4+3x)\u22122)(\u221a(9+5x)\u22123))/x\u00b2].",
    "options": [
      "15/8",
      "5/12",
      "5/8",
      "3/8"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Write the expression as [(\u221a(4+3x)\u22122)/x]\u00b7[(\u221a(9+5x)\u22123)/x]. Rationalizing gives limits 3/(2+2)=3/4 and 5/(3+3)=5/6. Their product is (3/4)(5/6)=5/8.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-020",
    "section": "Mathematics",
    "topic": "Differentiation",
    "difficulty": "medium",
    "question": "If y=x\u00b2e\u02e3, what is dy/dx at x=1?",
    "options": [
      "e",
      "2e",
      "4e",
      "3e"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "dy/dx=e\u02e3(x\u00b2+2x). At x=1 this equals e(1+2)=3e.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-021",
    "section": "Mathematics",
    "topic": "Tangents",
    "difficulty": "medium",
    "question": "For y=x\u00b3-3x, what is the slope of the tangent at x=2?",
    "options": [
      "9",
      "3",
      "12",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "dy/dx=3x\u00b2-3. At x=2, the slope is 12-3=9.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-022",
    "section": "Mathematics",
    "topic": "Definite integrals",
    "difficulty": "medium",
    "question": "Evaluate \u222b\u2080\u00b2 (3x\u00b2+2) dx.",
    "options": [
      "8",
      "12",
      "16",
      "10"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "An antiderivative is x\u00b3+2x. From 0 to 2 the value is 8+4=12.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-023",
    "section": "Mathematics",
    "topic": "Definite integrals",
    "difficulty": "medium",
    "question": "Evaluate \u222b\u2080^(1/\u221a3) dx/(1+x\u00b2).",
    "options": [
      "\u03c0/3",
      "1/\u221a3",
      "\u03c0/6",
      "\u03c0/4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The antiderivative is tan\u207b\u00b9x. At 1/\u221a3 it is \u03c0/6, and at 0 it is 0.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-024",
    "section": "Mathematics",
    "topic": "Differential equations",
    "difficulty": "medium",
    "question": "If dy/dx=2y and y(0)=3, what is y at x=ln2?",
    "options": [
      "24",
      "9",
      "6",
      "12"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The solution is y=3e^(2x). At x=ln2, y=3e^(2ln2)=3\u00d74=12.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-025",
    "section": "Mathematics",
    "topic": "Applications of derivatives",
    "difficulty": "hard",
    "question": "A point P lies on the parabola y=x\u00b2+1. What is the minimum possible value of the square of the distance from P to the fixed point (0,7)?",
    "options": [
      "23/4",
      "9/2",
      "5",
      "7/2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Write P=(x,x\u00b2+1). The squared distance is D\u00b2=x\u00b2+(x\u00b2\u22126)\u00b2. Differentiating gives d(D\u00b2)/dx=2x(2x\u00b2\u221211). The nonzero stationary points satisfy x\u00b2=11/2. There D\u00b2=11/2+(\u22121/2)\u00b2=22/4+1/4=23/4, which is smaller than D\u00b2=36 at x=0 and is the global minimum.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-026",
    "section": "Mathematics",
    "topic": "Area under curves",
    "difficulty": "medium",
    "question": "What is the area under y=2x+1 from x=0 to x=3 and above the x-axis?",
    "options": [
      "9 square units",
      "12 square units",
      "10 square units",
      "15 square units"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Area = \u222b\u2080\u00b3(2x+1)dx = [x\u00b2+x]\u2080\u00b3 = 9+3 = 12.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-027",
    "section": "Mathematics",
    "topic": "Maxima and minima",
    "difficulty": "hard",
    "question": "For f(x)=x\u00b3-6x\u00b2+9x, at which x-value does f have a local maximum?",
    "options": [
      "x=0",
      "x=2",
      "x=1",
      "x=3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f'(x)=3(x-1)(x-3). The derivative changes from positive to negative at x=1, so f has a local maximum there.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-028",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "A processing job is routed to servers S\u2081, S\u2082 and S\u2083 with probabilities 1/2, 1/3 and 1/6, respectively. Their probabilities of completing the job successfully are 4/5, 3/4 and 1/2. Given that a randomly chosen job was completed successfully, what is the probability that it was routed to S\u2083?",
    "options": [
      "3/22",
      "5/33",
      "1/6",
      "5/44"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P(success)= (1/2)(4/5)+(1/3)(3/4)+(1/6)(1/2) =2/5+1/4+1/12=11/15. Also P(S\u2083 and success)=1/12. By Bayes' theorem, P(S\u2083|success)=(1/12)/(11/15)=5/44.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-029",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "question": "The mean of 8 readings is 17.5. If a reading 12.4 is replaced by 18.8, what is the new mean?",
    "options": [
      "18.3",
      "17.9",
      "18.0",
      "18.7"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Original sum = 8\u00d717.5 = 140. The replacement increases the sum by 6.4, so the new sum is 146.4 and the mean is 146.4/8 = 18.3.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ma-030",
    "section": "Mathematics",
    "topic": "Linear programming",
    "difficulty": "hard",
    "question": "Consider the feasible set defined by 2x+y\u226413, x+3y\u226417, x+y\u22649, x\u22650 and y\u22650. Which listed constraint is redundant, meaning it can be removed without changing the feasible set?",
    "options": [
      "2x+y\u226413",
      "x+y\u22649",
      "x+3y\u226417",
      "y\u22650"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Ignore x+y\u22649 temporarily and maximize x+y under 2x+y\u226413, x+3y\u226417, x\u22650 and y\u22650. The two sloping boundaries meet at (22/5,21/5), where x+y=43/5=8.6. The feasible axis vertices give still smaller sums. Hence every point allowed by the other constraints already satisfies x+y<9, so x+y\u22649 is redundant.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  }
];
