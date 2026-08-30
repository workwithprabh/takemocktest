import type { Question } from '../questions';

export const LPUNEST_2026_MATHEMATICS_1: Question[] = [
  {
    "id": "lpunest-2026-ma-001",
    "section": "Mathematics",
    "topic": "Sets",
    "difficulty": "easy",
    "question": "In a group, 18 students study Mathematics, 14 study Physics, and 6 study both. How many study at least one of the two subjects?",
    "options": [
      "20",
      "32",
      "26",
      "38"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "|M\u222aP|=|M|+|P|-|M\u2229P|=18+14-6=26.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ma-002",
    "section": "Mathematics",
    "topic": "Limits and continuity",
    "difficulty": "easy",
    "question": "Evaluate lim(x\u21923) (x^2-9)/(x-3).",
    "options": [
      "6",
      "3",
      "9",
      "Does not exist"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For x\u22603, (x^2-9)/(x-3)=x+3. Hence the limit at x=3 is 6.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ma-003",
    "section": "Mathematics",
    "topic": "Complex numbers",
    "difficulty": "medium",
    "question": "The value of (1+i)^4 is",
    "options": [
      "-4",
      "4",
      "4i",
      "-4i"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "(1+i)^2=2i, so (1+i)^4=(2i)^2=-4.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ma-004",
    "section": "Mathematics",
    "topic": "Quadratic equations",
    "difficulty": "medium",
    "question": "If x^2 - 5x + k = 0 has equal roots, then k equals",
    "options": [
      "5/2",
      "5",
      "25/2",
      "25/4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Equal roots require discriminant zero: 25-4k=0, so k=25/4.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ma-005",
    "section": "Mathematics",
    "topic": "Sequences and series",
    "difficulty": "easy",
    "question": "The eighth term of the geometric progression 3, 6, 12, ... is",
    "options": [
      "384",
      "192",
      "256",
      "768"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Here a=3 and r=2. The eighth term is ar^7=3\u00d72^7=384.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ma-006",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "If A = [[1, 2], [3, 4]], then the trace of A^2 is",
    "options": [
      "21",
      "25",
      "29",
      "31"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "A^2=[[7,10],[15,22]]. Its trace is 7+22=29.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ma-007",
    "section": "Mathematics",
    "topic": "Determinants",
    "difficulty": "medium",
    "question": "Evaluate the determinant |2 1 0; 1 2 1; 0 1 2|.",
    "options": [
      "2",
      "3",
      "6",
      "4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Expanding along the first row: 2(4-1)-1(2-0)=6-2=4.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ma-008",
    "section": "Mathematics",
    "topic": "Vector algebra",
    "difficulty": "easy",
    "question": "If a = (1, 2, -1) and b = (2, -1, 3), then a\u00b7b equals",
    "options": [
      "-1",
      "-3",
      "1",
      "3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "a\u00b7b=1\u00d72+2\u00d7(-1)+(-1)\u00d73=2-2-3=-3.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ma-009",
    "section": "Mathematics",
    "topic": "Permutations",
    "difficulty": "hard",
    "question": "Seven distinct tasks P, Q, R, S, T, U and V are scheduled in a line. P must occur before Q, Q before R, and S before T. How many schedules satisfy all these order restrictions?",
    "options": [
      "210",
      "360",
      "420",
      "840"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Among the 3! relative orders of P,Q,R, only P<Q<R is allowed, and among the 2! relative orders of S,T, only S<T is allowed. Thus the count is 7!/(3!\u00d72!)=5040/12=420.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ma-010",
    "section": "Mathematics",
    "topic": "Combinations",
    "difficulty": "medium",
    "question": "A question set contains 4 Algebra, 3 Calculus and 2 Geometry questions. In how many ways can a student choose 4 questions if at least one question must be chosen from each topic?",
    "options": [
      "60",
      "72",
      "84",
      "96"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The topic counts must be a permutation of (2,1,1). The number is C(4,2)C(3,1)C(2,1)+C(4,1)C(3,2)C(2,1)+C(4,1)C(3,1)C(2,2)=36+24+12=72.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ma-011",
    "section": "Mathematics",
    "topic": "Binomial theorem",
    "difficulty": "medium",
    "question": "The coefficient of x^3 in (2+x)^5 is",
    "options": [
      "20",
      "32",
      "40",
      "80"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The x^3 term is C(5,3)2^(5-3)x^3=10\u00d74x^3, so the coefficient is 40.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ma-012",
    "section": "Mathematics",
    "topic": "Derivatives",
    "difficulty": "medium",
    "question": "If y=x^2 ln x for x>0, then dy/dx at x=1 is",
    "options": [
      "0",
      "2",
      "3",
      "1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "dy/dx=2x ln x+x. At x=1, ln1=0, so dy/dx=1.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ma-013",
    "section": "Mathematics",
    "topic": "Applications of derivatives",
    "difficulty": "medium",
    "question": "A rectangle has constant area 72 cm^2. At an instant when its length is 9 cm, the length is increasing at 2 cm/s. At that instant, the rate of change of its width is",
    "options": [
      "-16/9 cm/s",
      "-9/16 cm/s",
      "16/9 cm/s",
      "2 cm/s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Since lw=72, differentiate: l(dw/dt)+w(dl/dt)=0. At l=9, w=8 and dl/dt=2, so 9(dw/dt)+16=0, giving dw/dt=-16/9 cm/s.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ma-014",
    "section": "Mathematics",
    "topic": "Integral calculus",
    "difficulty": "medium",
    "question": "Evaluate \u222b from 0 to 1 of 2x/(x^2+1) dx.",
    "options": [
      "ln 2",
      "1/2",
      "1",
      "2 ln 2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Let u=x^2+1, du=2x dx. The integral is [ln(x^2+1)]_0^1=ln2.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ma-015",
    "section": "Mathematics",
    "topic": "Definite integrals",
    "difficulty": "medium",
    "question": "The value of \u222b from 0 to \u03c0 of sin^2 x dx is",
    "options": [
      "\u03c0/4",
      "\u03c0",
      "2\u03c0",
      "\u03c0/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Using sin^2x=(1-cos2x)/2, the integral over 0 to \u03c0 equals \u03c0/2.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ma-016",
    "section": "Mathematics",
    "topic": "Differential equations",
    "difficulty": "medium",
    "question": "The differential equation dy/dx + 2y = 6x + 4 has a particular solution of the form y=ax+b. The value of a+b is",
    "options": [
      "5/2",
      "3",
      "7/2",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For y=ax+b, dy/dx=a. Substitution gives a+2ax+2b=6x+4. Hence 2a=6, so a=3; then a+2b=4 gives b=1/2. Therefore a+b=7/2.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ma-017",
    "section": "Mathematics",
    "topic": "Straight lines",
    "difficulty": "medium",
    "question": "The equation of the line through (2,-1) and perpendicular to 3x+4y=7 is",
    "options": [
      "3x+4y-2=0",
      "4x-3y-11=0",
      "4x+3y-5=0",
      "3x-4y-10=0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The given line has slope -3/4, so a perpendicular line has slope 4/3. Through (2,-1): y+1=(4/3)(x-2), which simplifies to 4x-3y-11=0.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ma-018",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "easy",
    "question": "The circle x^2+y^2-6x+4y-12=0 has radius",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Completing squares gives (x-3)^2+(y+2)^2=25, so the radius is 5.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ma-019",
    "section": "Mathematics",
    "topic": "Three dimensional geometry",
    "difficulty": "easy",
    "question": "Two lines have direction ratios (1,2,2) and (2,1,-2). The angle between them is",
    "options": [
      "0\u00b0",
      "90\u00b0",
      "45\u00b0",
      "60\u00b0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Their dot product is 1\u00d72+2\u00d71+2\u00d7(-2)=0. Therefore the direction vectors are perpendicular and the angle is 90\u00b0.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ma-020",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "A sensor is selected from Batch X with probability 0.7 and from Batch Y with probability 0.3. The probability that a sensor fails calibration is 0.02 for X and 0.06 for Y. Given that the selected sensor fails calibration, the probability that it came from Batch Y is",
    "options": [
      "7/16",
      "3/8",
      "9/16",
      "3/5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "By Bayes' theorem, P(Y|F)=0.3\u00d70.06/(0.7\u00d70.02+0.3\u00d70.06)=0.018/(0.014+0.018)=18/32=9/16.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ma-021",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "If sin \u03b8 - cos \u03b8 = 1/2, find the value of sin 2\u03b8. Enter the numerical value only.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Squaring gives sin^2\u03b8+cos^2\u03b8-2sin\u03b8cos\u03b8=1/4, so 1-sin2\u03b8=1/4. Hence sin2\u03b8=3/4=0.75.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    },
    "correctValue": "0.75"
  },
  {
    "id": "lpunest-2026-ma-022",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "easy",
    "question": "The mean of the five numbers 8, 11, 13, 17 and x is 12. Find x. Enter the numerical value only.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "A mean of 12 for five numbers gives total 60. The known sum is 49, so x=60-49=11.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    },
    "correctValue": "11"
  },
  {
    "id": "lpunest-2026-ma-023",
    "section": "Mathematics",
    "topic": "Matrices and determinants",
    "difficulty": "easy",
    "question": "Find the determinant of the matrix [[1,2],[3,5]]. Enter the numerical value only.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The determinant is 1\u00d75-2\u00d73=5-6=-1.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    },
    "correctValue": "-1"
  },
  {
    "id": "lpunest-2026-ma-024",
    "section": "Mathematics",
    "topic": "Conic sections",
    "difficulty": "easy",
    "question": "For the parabola y^2=12x, find the distance of its focus from the vertex. Enter the numerical value only.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Comparing y^2=12x with y^2=4ax gives 4a=12, so a=3. The focus is (a,0), at distance 3 from the vertex.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    },
    "correctValue": "3"
  },
  {
    "id": "lpunest-2026-ma-025",
    "section": "Mathematics",
    "topic": "Coordinate geometry",
    "difficulty": "medium",
    "question": "Find the area of the triangle with vertices (0,0), (6,0) and (2,4). Enter the numerical value only.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Using the base on the x-axis, base=6 and perpendicular height=4. Area=(1/2)\u00d76\u00d74=12.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    },
    "correctValue": "12"
  }
];
