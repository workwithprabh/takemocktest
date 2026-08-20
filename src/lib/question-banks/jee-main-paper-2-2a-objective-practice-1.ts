import type { Question } from '../questions';

export const JEE_MAIN_PAPER_2_2A_OBJECTIVE_PRACTICE_1: Question[] = [
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-001",
    "section": "Mathematics",
    "topic": "Sets, Relations and Functions",
    "difficulty": "easy",
    "question": "On the set A={1,2,3,4}, a relation R is defined by aRb if a divides b. How many ordered pairs belong to R?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a=1 there are 4 multiples in A; for a=2 there are 2; for a=3 there is 1; and for a=4 there is 1. Hence R has 4+2+1+1=8 ordered pairs.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-002",
    "section": "Mathematics",
    "topic": "Complex Numbers and Quadratic Equations",
    "difficulty": "medium",
    "question": "If z=2(cos 60 degrees + i sin 60 degrees), what is z^3?",
    "options": [
      "8",
      "8i",
      "-8",
      "-8i"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By De Moivre's theorem, z^3=2^3[cos 180 degrees+i sin 180 degrees]=-8.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-003",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "For what value of k does the determinant of the matrix with rows (1,2,3), (2,4,k), and (1,1,1) vanish?",
    "options": [
      "6",
      "5",
      "7",
      "8"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Replacing the second row by R2-2R1 gives (0,0,k-6). The remaining minor is nonzero, so the determinant is zero only when k=6.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-004",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "hard",
    "question": "Six distinct books, including two specified books M1 and M2, are arranged on a shelf. How many arrangements have M1 and M2 non-adjacent and not occupying the two end positions together?",
    "options": [
      "384",
      "432",
      "336",
      "480"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Total arrangements are 720. Adjacent M1,M2 account for 2*5!=240. Occupying both ends accounts for 2*4!=48. These two excluded cases cannot overlap, so the required count is 720-240-48=432.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-005",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "medium",
    "question": "What is the sum of the coefficients of all even powers of x in the expansion of (1+x)^7?",
    "options": [
      "64",
      "32",
      "96",
      "128"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "If E is the sum of even-power coefficients, then 2E=P(1)+P(-1)=2^7+0=128. Hence E=64.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-006",
    "section": "Mathematics",
    "topic": "Sequence and Series",
    "difficulty": "easy",
    "question": "Three positive numbers are in geometric progression. Their product is 216. What is the middle term?",
    "options": [
      "4",
      "8",
      "12",
      "6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "If the terms are a/r, a, ar, their product is a^3. Thus a=cuberoot(216)=6.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-007",
    "section": "Mathematics",
    "topic": "Limit, Continuity and Differentiability",
    "difficulty": "medium",
    "question": "Evaluate lim x->0 [ln(1+3x)-sin(2x)]/x.",
    "options": [
      "-1",
      "1",
      "2",
      "5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using first-order expansions, ln(1+3x)=3x+o(x) and sin(2x)=2x+o(x), so the quotient tends to 1.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-008",
    "section": "Mathematics",
    "topic": "Limit, Continuity and Differentiability",
    "difficulty": "hard",
    "question": "For f(x)=x^3-6x^2+9x+4 on the interval [0,5], what is the difference between its absolute maximum and absolute minimum values?",
    "options": [
      "16",
      "18",
      "24",
      "20"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f'(x)=3(x-1)(x-3). Check x=0,1,3,5: f values are 4,8,4,24. The absolute maximum is 24 and minimum 4, so the difference is 20.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-009",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "medium",
    "question": "Evaluate the definite integral from 0 to 1 of x/(1+x^2)^2 dx.",
    "options": [
      "1/2",
      "(ln 2)/2",
      "1/4",
      "ln 2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let u=1+x^2, so du=2x dx. The integral is (1/2) integral from 1 to 2 of u^-2 du = (1/2)[-u^-1]_1^2 = 1/4.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-010",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "A function y(x) satisfies dy/dx + y = 2e^(-x) and y(0)=1. What is y(1)?",
    "options": [
      "3/e",
      "1/e",
      "2/e",
      "e^-2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Multiplying by e^x gives d(ye^x)/dx=2. Thus ye^x=2x+1 and y(1)=3/e.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-011",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "The circle x^2+y^2-4x+6y-12=0 is cut by the line y=1. What is the length of the chord obtained?",
    "options": [
      "4",
      "6",
      "4sqrt(3)",
      "8"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The circle has centre (2,-3) and radius 5. The distance from the centre to y=1 is 4, so the chord length is 2sqrt(25-16)=6.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-012",
    "section": "Mathematics",
    "topic": "Three Dimensional Geometry",
    "difficulty": "medium",
    "question": "Point P divides the segment joining A=(1,2,3) and B=(5,6,7) internally in the ratio AP:PB=1:3. What are the coordinates of P?",
    "options": [
      "(3,4,5)",
      "(4,5,6)",
      "(1.5,2.5,3.5)",
      "(2,3,4)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For internal division in the ratio 1:3, P=(3A+1B)/4=(2,3,4).",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-013",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "easy",
    "question": "If a=(1,2,-1) and b=(2,-1,0), which vector equals a+b?",
    "options": [
      "(1,3,-1)",
      "(3,-1,1)",
      "(3,1,-1)",
      "(-1,3,-1)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Vector addition is componentwise: a+b=(1+2,2-1,-1+0)=(3,1,-1).",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-014",
    "section": "Mathematics",
    "topic": "Statistics and Probability",
    "difficulty": "hard",
    "question": "A committee of 3 is chosen uniformly from 5 architects and 4 engineers. Given that the committee contains at least one architect and at least one engineer, what is the probability that it contains exactly 2 architects?",
    "options": [
      "4/7",
      "3/7",
      "2/5",
      "5/9"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are C(9,3)-C(5,3)-C(4,3)=84-10-4=70 mixed committees. Exactly 2 architects and 1 engineer can be chosen in C(5,2)C(4,1)=40 ways. The conditional probability is 40/70=4/7.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-015",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "If 0<theta<pi/2 and tan theta + cot theta = 10/3, what is sin(2theta)?",
    "options": [
      "5/3",
      "3/5",
      "4/5",
      "5/6"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "tan theta+cot theta=(sin^2+cos^2)/(sin cos)=1/(sin cos)=2/sin2theta. Hence sin2theta=2/(10/3)=3/5.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-016",
    "section": "Mathematics",
    "topic": "Sets, Relations and Functions",
    "difficulty": "easy",
    "question": "A set A has 5 elements. How many subsets of A contain a specified element p?",
    "options": [
      "8",
      "10",
      "32",
      "16"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Fix p as included. Each of the other 4 elements may independently be included or excluded, so there are 2^4=16 such subsets.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-017",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "easy",
    "question": "What is the determinant of the upper-triangular matrix with rows (2,1,0), (0,3,4), and (0,0,5)?",
    "options": [
      "10",
      "20",
      "60",
      "30"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The determinant of a triangular matrix is the product of its diagonal entries: 2*3*5=30.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-018",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "hard",
    "question": "In triangle ABC, A=(0,0), B=(8,0), and C=(p,q) lies in the first quadrant. The circumcentre of triangle ABC lies on the line y=x-1, and its orthocentre lies on the line x=6. What is p+q?",
    "options": [
      "9+sqrt(21)",
      "9-sqrt(21)",
      "3+sqrt(21)",
      "6+sqrt(21)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Since AB is horizontal, its perpendicular bisector is x=4. The circumcentre also lies on y=x-1, so the circumcentre is O=(4,3). Because AB is horizontal, the altitude from C is vertical and has equation x=p. The orthocentre lies on this altitude and is given to lie on x=6, hence p=6. Now OA^2=4^2+3^2=25. As O is the circumcentre, OC^2=OA^2, so (6-4)^2+(q-3)^2=25. Thus (q-3)^2=21. Since C is in the first quadrant, q>0, so q=3+sqrt(21). Therefore p+q=6+3+sqrt(21)=9+sqrt(21).",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-20"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-019",
    "section": "Mathematics",
    "topic": "Statistics and Probability",
    "difficulty": "medium",
    "question": "The mean of five observations is 12. If every observation is increased by 3 and then doubled, what is the new mean?",
    "options": [
      "24",
      "30",
      "27",
      "33"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A linear transformation x -> 2(x+3) sends the mean 12 to 2(12+3)=30.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-020",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "hard",
    "question": "For 0<x<pi/2, suppose sec x+tan x=3. What is sec 2x?",
    "options": [
      "25/7",
      "-7/25",
      "7/25",
      "-25/7"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Since (sec x+tan x)(sec x-tan x)=1, sec x-tan x=1/3. Thus sec x=5/3 and tan x=4/3, giving cos x=3/5 and sin x=4/5. Therefore cos 2x=9/25-16/25=-7/25, so sec 2x=-25/7.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-021",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "medium",
    "question": "Enter the number of onto functions from a four-element set to a two-element set.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "14",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are 2^4=16 functions in total. The two constant functions are not onto, so the number of onto functions is 16-2=14. The result is already an integer, so the required nearest-integer response is 14.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    },
    "maxDecimalPlaces": 0
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-022",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "medium",
    "question": "Enter the value of the integral from 0 to 2 of (3x^2+2x) dx.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "12",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "An antiderivative is x^3+x^2. At x=2 it equals 8+4=12, and at x=0 it is 0. The result is already an integer, so the required nearest-integer response is 12.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    },
    "maxDecimalPlaces": 0
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-023",
    "section": "Mathematics",
    "topic": "Three Dimensional Geometry",
    "difficulty": "hard",
    "question": "Two lines are r=(1,0,0)+lambda(1,1,0) and r=(0,1,3)+mu(1,-1,0). Enter the shortest distance between them.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "3",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For direction vectors d1=(1,1,0) and d2=(1,-1,0), d1 cross d2 is parallel to the z-axis. The separation vector between chosen points has z-component 3, so the scalar triple-product distance is 3. The result is already an integer, so the required nearest-integer response is 3.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    },
    "maxDecimalPlaces": 0
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-024",
    "section": "Mathematics",
    "topic": "Complex Numbers and Quadratic Equations",
    "difficulty": "medium",
    "question": "The equation x^2-kx+5=0 has two real roots differing by 4, and k is positive. Enter k.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "6",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The square of the root difference is discriminant k^2-20. Setting k^2-20=16 gives k^2=36. Since k is positive, k=6. The result is already an integer, so the required nearest-integer response is 6.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    },
    "maxDecimalPlaces": 0
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-025",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "easy",
    "question": "Enter the coefficient of x^2 in (1+x)^4.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "6",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The coefficient of x^2 is C(4,2)=6. The result is already an integer, so the required nearest-integer response is 6.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    },
    "maxDecimalPlaces": 0
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-026",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "easy",
    "question": "A cuboid measures 8 cm by 5 cm by 3 cm and rests on its 8 cm by 5 cm face. What is the area of its top view?",
    "options": [
      "24 cm^2",
      "15 cm^2",
      "40 cm^2",
      "64 cm^2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The top view is the 8 cm by 5 cm rectangle, so its area is 40 cm^2.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-027",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "easy",
    "question": "A right circular cylinder stands vertically on a table. Which shape is seen in an ideal top view?",
    "options": [
      "A circle",
      "A rectangle",
      "A triangle",
      "An ellipse only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The top face of a vertical right circular cylinder is circular.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-028",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "medium",
    "question": "Four vertical stacks of unit cubes stand in a straight row from left to right with heights 1,3,2,4. Looking directly from the left end, how many unit-square layers are visible in the silhouette?",
    "options": [
      "4",
      "1",
      "3",
      "10"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "From the left end the stacks overlap in depth, so the silhouette height is the maximum stack height, 4.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-029",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "medium",
    "question": "A cube has a smaller cube removed from one corner, with the cut aligned to the original faces. How many planar faces does the remaining solid have?",
    "options": [
      "6",
      "7",
      "12",
      "9"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The original six outer face planes remain, and the removed corner exposes three new mutually perpendicular square faces, giving 9 planar faces.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-030",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "easy",
    "question": "What is the outline of an ideal orthographic view of a sphere from any direction?",
    "options": [
      "A circle",
      "A square",
      "A triangle",
      "A regular hexagon"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Every orthographic projection of a sphere has a circular outline.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-031",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "medium",
    "question": "A cuboid has dimensions 9 cm, 4 cm and 2 cm. It is rotated so that the 9 cm by 2 cm face becomes the base. What is its vertical height after rotation?",
    "options": [
      "2 cm",
      "9 cm",
      "4 cm",
      "18 cm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The dimension perpendicular to the new 9 cm by 2 cm base is 4 cm.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-032",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "hard",
    "question": "Seven unit cubes form a stepped solid. The lower layer is a 2 by 2 square of four cubes. The upper layer has three cubes, each directly above a different lower cube, occupying three cells of the same 2 by 2 footprint and forming an L shape. How many unit square faces are exposed?",
    "options": [
      "24",
      "22",
      "26",
      "28"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Seven separate cubes have 42 faces. The lower 2 by 2 layer has 4 shared contacts, the three upper cubes have 2 shared contacts within their L shape, and there are 3 vertical contacts. With 9 contacts hiding 18 faces, 42-18=24 faces are exposed.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-033",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "medium",
    "question": "A right triangular prism has triangular end faces and three rectangular side faces. If viewed directly perpendicular to one rectangular side face, what is the boundary shape of that orthographic view?",
    "options": [
      "A triangle",
      "A pentagon",
      "A rectangle",
      "A circle"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Looking normal to a rectangular side face projects that face as a rectangle and the prism depth collapses along the viewing direction.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-034",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "easy",
    "question": "A right circular cone stands on its circular base. What is the shape of its ideal top-view boundary?",
    "options": [
      "A triangle",
      "A semicircle",
      "A circle",
      "A rectangle"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "From directly above, the cone's circular base defines the boundary.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-035",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "medium",
    "question": "A vertical hollow cylindrical pipe has uniform wall thickness. Which pair of curves appears in its ideal top view?",
    "options": [
      "Two parallel lines",
      "A circle and a square",
      "Two intersecting ellipses",
      "Two concentric circles"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The outer and inner cylindrical surfaces cut the top plane in concentric circles.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-036",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "hard",
    "question": "A plane passes through the centre of a cube and is perpendicular to a body diagonal joining two opposite vertices. What is the shape of the central cross-section?",
    "options": [
      "A square",
      "A regular hexagon",
      "An equilateral triangle",
      "A regular octagon"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A plane through the cube centre perpendicular to a body diagonal cuts six edges symmetrically. The six intersection points are equally spaced around the section, forming a regular hexagon.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-037",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "medium",
    "question": "Two identical cubes are joined face-to-face to form a 2 by 1 by 1 cuboid. How many square face regions of one-cube size lie on the exterior?",
    "options": [
      "8",
      "10",
      "12",
      "14"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The two cubes contribute 12 faces before joining. The shared interface hides two faces, leaving 10 exterior unit-square regions.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-038",
    "section": "Aptitude Test",
    "topic": "Scale, proportion, forms and transformations",
    "difficulty": "easy",
    "question": "On a 1:200 plan, a wall measures 3.5 cm. What is the actual wall length?",
    "options": [
      "0.7 m",
      "3.5 m",
      "70 m",
      "7 m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At 1:200, 3.5 cm represents 700 cm, which is 7 m.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-039",
    "section": "Aptitude Test",
    "topic": "Scale, proportion, forms and transformations",
    "difficulty": "medium",
    "question": "A square courtyard is enlarged so that every linear dimension becomes 1.5 times the original. By what factor does its area change?",
    "options": [
      "1.5",
      "3",
      "3.375",
      "2.25"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Area scales with the square of the linear factor: 1.5^2=2.25.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-040",
    "section": "Aptitude Test",
    "topic": "Scale, proportion, forms and transformations",
    "difficulty": "easy",
    "question": "A model tower is 24 cm high at a scale of 1:100. What actual height does it represent?",
    "options": [
      "2.4 m",
      "12 m",
      "24 m",
      "240 m"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "24 cm times 100 is 2400 cm, or 24 m.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-041",
    "section": "Aptitude Test",
    "topic": "Scale, proportion, forms and transformations",
    "difficulty": "medium",
    "question": "A solid is scaled uniformly by a factor of 2. What happens to its volume?",
    "options": [
      "It becomes 8 times as large",
      "It doubles",
      "It becomes 4 times as large",
      "It becomes 6 times as large"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Volume scales as the cube of the linear scale factor, so 2^3=8.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-042",
    "section": "Aptitude Test",
    "topic": "Scale, proportion, forms and transformations",
    "difficulty": "hard",
    "question": "A site plan is first drawn at scale 1:200. The same site is redrawn at scale 1:125, and that new drawing is then printed at 80% of its linear size. Compared with the area occupied by the site on the first drawing, what area factor appears on the final print?",
    "options": [
      "1.6384 times",
      "1.28 times",
      "2.048 times",
      "0.8192 times"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The redrawing changes every linear dimension by 200/125=1.6. Printing at 80% gives a net linear factor 1.6x0.8=1.28. Area therefore changes by 1.28^2=1.6384.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-043",
    "section": "Aptitude Test",
    "topic": "Scale, proportion, forms and transformations",
    "difficulty": "easy",
    "question": "The point (3,-2) is reflected across the y-axis. What are its new coordinates?",
    "options": [
      "(3,2)",
      "(-3,-2)",
      "(-3,2)",
      "(2,-3)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Reflection across the y-axis changes the sign of x but leaves y unchanged.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-044",
    "section": "Aptitude Test",
    "topic": "Scale, proportion, forms and transformations",
    "difficulty": "medium",
    "question": "A rectangle 6 units wide and 2 units high is rotated by 90 degrees in its plane. Which dimensions describe its axis-aligned bounding rectangle after rotation?",
    "options": [
      "2 by 6",
      "6 by 2",
      "6 by 6",
      "4 by 4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A 90-degree rotation swaps the horizontal and vertical extents.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-045",
    "section": "Aptitude Test",
    "topic": "Scale, proportion, forms and transformations",
    "difficulty": "hard",
    "question": "A cube of side 6 cm has a square tunnel of cross-section 2 cm by 2 cm drilled straight through it. The remaining solid is then enlarged uniformly by scale factor 1.5. What is the final volume?",
    "options": [
      "432 cm^3",
      "576 cm^3",
      "648 cm^3",
      "729 cm^3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Before enlargement, the volume is 6^3-(2*2*6)=216-24=192 cm^3. Scaling all lengths by 1.5 multiplies volume by 1.5^3=3.375, giving 192*3.375=648 cm^3.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-046",
    "section": "Aptitude Test",
    "topic": "Scale, proportion, forms and transformations",
    "difficulty": "medium",
    "question": "A regular hexagon is divided by joining its centre to all six vertices. How many congruent triangles are formed?",
    "options": [
      "4",
      "8",
      "12",
      "6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The six radii partition the regular hexagon into six congruent equilateral triangles.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-047",
    "section": "Aptitude Test",
    "topic": "Scale, proportion, forms and transformations",
    "difficulty": "easy",
    "question": "A drawing uses a scale of 1 cm to 2 m. A path drawn 4.5 cm long represents what actual distance?",
    "options": [
      "4.5 m",
      "9 m",
      "6.5 m",
      "90 m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Each centimetre represents 2 m, so 4.5 cm represents 9 m.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-048",
    "section": "Aptitude Test",
    "topic": "Analytical reasoning and mental ability",
    "difficulty": "easy",
    "question": "All blue tiles are squares, and no square tile is circular. Which statement must be true?",
    "options": [
      "Some blue tiles are circular",
      "No blue tile is circular",
      "All square tiles are blue",
      "Some circular tiles are blue"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Every blue tile is a square, and no square is circular. Therefore no blue tile can be circular.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-049",
    "section": "Aptitude Test",
    "topic": "Analytical reasoning and mental ability",
    "difficulty": "medium",
    "question": "Five rooms A, B, C, D and E lie in a corridor. B is immediately to the right of A. D is immediately to the left of E. C is not at an end. If A is at the left end, which room must be at the right end?",
    "options": [
      "B",
      "C",
      "D",
      "E"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A must be first and B second. The consecutive pair D,E must occupy positions 4,5 because C cannot be at an end, so E is at the right end.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-050",
    "section": "Aptitude Test",
    "topic": "Analytical reasoning and mental ability",
    "difficulty": "medium",
    "question": "If every ARCH is a FORM and no FORM is a VOID, which conclusion must be true?",
    "options": [
      "Every VOID is an ARCH",
      "Some FORM is a VOID",
      "No ARCH is a VOID",
      "No VOID is a FORM only if ARCH exists"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Since ARCH is a subset of FORM and FORM has no overlap with VOID, ARCH cannot overlap VOID.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-051",
    "section": "Aptitude Test",
    "topic": "Analytical reasoning and mental ability",
    "difficulty": "medium",
    "question": "Six models P, Q, R, S, T and U are arranged from left to right. Q is immediately right of P. T is exactly two places to the right of Q, so one model lies between Q and T. R is left of P. U is right of T. S is not at either end. Which model must occupy the fourth position?",
    "options": [
      "Q",
      "T",
      "S",
      "U"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The conditions force R,P,Q in the first three positions and T,U in the fifth and sixth positions. The only remaining model S must therefore be fourth, giving R,P,Q,S,T,U.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-052",
    "section": "Aptitude Test",
    "topic": "Analytical reasoning and mental ability",
    "difficulty": "easy",
    "question": "M is taller than N, N is taller than P, and P is taller than Q. Who is shortest?",
    "options": [
      "P",
      "Q",
      "N",
      "M"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The chain is M>N>P>Q, so Q is shortest.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-053",
    "section": "Aptitude Test",
    "topic": "Analytical reasoning and mental ability",
    "difficulty": "medium",
    "question": "In a code, PLAN is written as QMBO, with each letter shifted one step forward in the alphabet. How is SITE written?",
    "options": [
      "RHSD",
      "TITF",
      "UKVG",
      "TJUF"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "S->T, I->J, T->U and E->F, so SITE becomes TJUF.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-054",
    "section": "Aptitude Test",
    "topic": "Analytical reasoning and mental ability",
    "difficulty": "medium",
    "question": "A meeting starts every 18 minutes and another starts every 24 minutes. If both start at 9:00, when do they next start together?",
    "options": [
      "10:12",
      "9:42",
      "10:00",
      "10:24"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The least common multiple of 18 and 24 is 72 minutes, so the next coincidence is at 10:12.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-055",
    "section": "Aptitude Test",
    "topic": "Analytical reasoning and mental ability",
    "difficulty": "medium",
    "question": "A four-digit code uses four distinct digits chosen from 1,2,3,4,5,6. The first and fourth digits sum to 6. The second digit is 2 more than the first. The third digit is even and greater than the fourth. Which code satisfies all conditions?",
    "options": [
      "2451",
      "1342",
      "1365",
      "3521"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For 1365, 1+5=6, the second digit 3 is 2 more than 1, the third digit 6 is even and greater than 5, and all digits are distinct. The other choices violate at least one condition.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-056",
    "section": "Aptitude Test",
    "topic": "Analytical reasoning and mental ability",
    "difficulty": "easy",
    "question": "Map is to location as timetable is to which of the following?",
    "options": [
      "distance",
      "schedule",
      "direction",
      "scale"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A map organizes information about location; a timetable organizes information about a schedule.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-057",
    "section": "Aptitude Test",
    "topic": "Analytical reasoning and mental ability",
    "difficulty": "medium",
    "question": "A is older than B, C is younger than B, and D is older than A. Who is definitely the oldest?",
    "options": [
      "A",
      "B",
      "D",
      "C"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "D>A>B>C, so D is definitely the oldest.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-058",
    "section": "Aptitude Test",
    "topic": "Architecture, build-environment, materials, objects and textures",
    "difficulty": "easy",
    "question": "Which building element primarily carries loads horizontally between supports such as columns or walls?",
    "options": [
      "Column",
      "Footing",
      "Plinth",
      "Beam"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A beam is primarily a horizontal load-carrying element spanning between supports.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-059",
    "section": "Aptitude Test",
    "topic": "Architecture, build-environment, materials, objects and textures",
    "difficulty": "medium",
    "question": "Why is a ventilated cavity often placed behind an exterior rain-screen cladding?",
    "options": [
      "To make the wall structurally solid concrete",
      "To help drain and dry moisture that passes the outer layer",
      "To eliminate all need for insulation",
      "To prevent any air movement in the wall"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A ventilated cavity provides drainage and drying behind the rain-screen, improving moisture management.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-060",
    "section": "Aptitude Test",
    "topic": "Architecture, build-environment, materials, objects and textures",
    "difficulty": "easy",
    "question": "Which material is generally anisotropic because its properties differ along and across its grain?",
    "options": [
      "Homogeneous glass",
      "Cast aluminium",
      "Timber",
      "Plain water"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Wood has a grain direction, so many mechanical properties differ parallel and perpendicular to the grain.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-061",
    "section": "Aptitude Test",
    "topic": "Architecture, build-environment, materials, objects and textures",
    "difficulty": "medium",
    "question": "A lintel is most commonly located where in a masonry wall?",
    "options": [
      "Across the top of a door or window opening",
      "Below the wall footing",
      "At the centre of a floor slab",
      "Inside a roof gutter"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A lintel spans an opening and supports masonry above it.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-062",
    "section": "Aptitude Test",
    "topic": "Architecture, build-environment, materials, objects and textures",
    "difficulty": "medium",
    "question": "A room has volume 180 m^3 and existing equivalent sound absorption of 30 m^2 sabins. Using Sabine's formula T=0.161V/A, an architect wants to reduce the reverberation time to 0.80 s by adding one type of acoustic panel with absorption coefficient 0.60. Approximately what panel area is required?",
    "options": [
      "6.2 m^2",
      "8.0 m^2",
      "9.6 m^2",
      "10.4 m^2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The required total absorption is A=0.161x180/0.80=36.225 m^2 sabins. Additional absorption needed is 36.225-30=6.225 m^2 sabins. With panel coefficient 0.60, panel area=6.225/0.60=10.375 m^2, approximately 10.4 m^2.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-063",
    "section": "Aptitude Test",
    "topic": "Architecture, build-environment, materials, objects and textures",
    "difficulty": "easy",
    "question": "Which component of concrete acts as the binder that hardens around sand and aggregate?",
    "options": [
      "Coarse aggregate",
      "Cement paste",
      "Reinforcing steel",
      "Formwork"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Hydrated cement paste binds the aggregate particles into hardened concrete.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-064",
    "section": "Aptitude Test",
    "topic": "Architecture, build-environment, materials, objects and textures",
    "difficulty": "medium",
    "question": "For natural cross-ventilation through a room, which arrangement is generally most effective?",
    "options": [
      "Openings on opposite or adjacent walls that allow an inlet and an outlet",
      "One sealed wall with no openings",
      "Only a skylight with all wall openings closed",
      "Two openings placed in the same tiny corner with no pressure path"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Cross-ventilation requires a flow path between inlet and outlet openings driven by wind or pressure differences.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-065",
    "section": "Aptitude Test",
    "topic": "Architecture, build-environment, materials, objects and textures",
    "difficulty": "easy",
    "question": "Which surface description corresponds to a rough texture?",
    "options": [
      "A mirror-polished surface",
      "A perfectly smooth glass pane",
      "A uniformly transparent film",
      "A surface with pronounced irregularities that scatter light"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Rough textures have small-scale irregularities and tend to scatter reflected light.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-066",
    "section": "Aptitude Test",
    "topic": "Plan, elevation and spatial-composition reasoning",
    "difficulty": "easy",
    "question": "A rectangular room is 6 m east-west and 4 m north-south. A door is centred on the south wall. From the room centre, in which direction is the door?",
    "options": [
      "North",
      "South",
      "East",
      "West"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The door is on the south wall directly south of the centre.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-067",
    "section": "Aptitude Test",
    "topic": "Plan, elevation and spatial-composition reasoning",
    "difficulty": "medium",
    "question": "A plan has three rooms in a row from west to east: Kitchen, Hall, Study. The only external door is on the west wall of the Kitchen. To reach the Study from outside, which room must be crossed immediately before entering the Study?",
    "options": [
      "Kitchen",
      "A courtyard",
      "Hall",
      "No room"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The sequence from the west entrance is Kitchen, then Hall, then Study.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-068",
    "section": "Aptitude Test",
    "topic": "Plan, elevation and spatial-composition reasoning",
    "difficulty": "medium",
    "question": "A 3 by 3 grid of equal square bays is numbered by rows from north to south and columns from west to east. A solid core occupies the centre bay (row 2, column 2). Moving only through bays that share an edge, what is the minimum number of moves from the northwest bay to the southeast bay without entering the core?",
    "options": [
      "4",
      "3",
      "5",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A shortest route can go along the north edge and then down the east edge: (1,1)->(1,2)->(1,3)->(2,3)->(3,3), which uses 4 moves and avoids the centre.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-069",
    "section": "Aptitude Test",
    "topic": "Plan, elevation and spatial-composition reasoning",
    "difficulty": "hard",
    "question": "A 4 by 4 plan contains equal square building blocks with heights in storeys shown by rows from north to south as (2,5,1,4), (4,3,6,2), (3,7,2,5), (6,1,4,8). In an orthographic view from the north, each column contributes the maximum height along that line of sight. From the east, each row contributes its maximum height. What is the sum of the four north-view silhouette heights and the four east-view silhouette heights?",
    "options": [
      "49",
      "51",
      "53",
      "55"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "From the north, column maxima are 6,7,6,8, summing to 27. From the east, row maxima are 5,6,7,8, summing to 26. The combined total is 27+26=53.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-070",
    "section": "Aptitude Test",
    "topic": "Plan, elevation and spatial-composition reasoning",
    "difficulty": "easy",
    "question": "A staircase rises from ground floor to first floor. In a conventional side elevation, increasing tread sequence corresponds primarily to what vertical change?",
    "options": [
      "All treads lie at the same height",
      "The staircase becomes a circle",
      "Successive risers increase height step by step",
      "Each riser decreases the floor-to-floor height"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A stair elevation shows successive horizontal treads separated by vertical risers.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-071",
    "section": "Aptitude Test",
    "topic": "Plan, elevation and spatial-composition reasoning",
    "difficulty": "medium",
    "question": "A north elevation of a simple rectangular building shows two windows and one door. What does this description directly tell you?",
    "options": [
      "The complete roof plan",
      "The foundation depth",
      "The internal furniture layout",
      "The openings visible on the north-facing exterior wall"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "An elevation records the appearance of the specified exterior face, including its visible openings.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-072",
    "section": "Aptitude Test",
    "topic": "Plan, elevation and spatial-composition reasoning",
    "difficulty": "hard",
    "question": "A rectangular hall is 12 m long and 8 m wide. Its vertical walls are 4 m high to the eaves. A symmetrical gable roof has its ridge parallel to the 12 m length and 2 m above the eaves. Ignoring openings, what is the total area of the four vertical wall elevations, including the two triangular gables?",
    "options": [
      "160 m^2",
      "168 m^2",
      "176 m^2",
      "192 m^2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The two long rectangular walls contribute 2x12x4=96 m^2. The two 8 m end rectangles contribute 2x8x4=64 m^2. The two triangular gables contribute 2x(1/2)x8x2=16 m^2. Total area is 96+64+16=176 m^2.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-073",
    "section": "Aptitude Test",
    "topic": "Plan, elevation and spatial-composition reasoning",
    "difficulty": "easy",
    "question": "On a plan, a window symbol lies on the east wall of a room. From inside the room, the window faces which cardinal direction?",
    "options": [
      "East",
      "West",
      "North",
      "South"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "An opening on the east exterior wall faces east.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-074",
    "section": "Aptitude Test",
    "topic": "Plan, elevation and spatial-composition reasoning",
    "difficulty": "medium",
    "question": "Two identical square rooms share one full wall. If each room is 4 m by 4 m, what is the perimeter of the combined rectangular plan?",
    "options": [
      "24 m",
      "16 m",
      "28 m",
      "32 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Joining the rooms side-by-side forms an 8 m by 4 m rectangle, whose perimeter is 2(8+4)=24 m.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2a-barch-objective-01-075",
    "section": "Aptitude Test",
    "topic": "Plan, elevation and spatial-composition reasoning",
    "difficulty": "medium",
    "question": "A plan uses north at the top. A corridor runs from the southwest corner to the northeast corner. In which general direction does a person move when walking from southwest to northeast?",
    "options": [
      "Northwest",
      "Northeast",
      "Southeast",
      "Southwest"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Moving from southwest to northeast involves both northward and eastward components.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  }
];
