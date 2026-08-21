import type { Question } from '../questions';

export const WBJEE_ENGINEERING_FULL_MOCK_1: Question[] = [
  {
    "id": "wbjee-2026-engineering-full-mock-01-001",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "easy",
    "question": "If z = 3 - 4i, what is |z + 1|?",
    "options": [
      "4",
      "sqrt(20)",
      "sqrt(32)",
      "5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "z+1=4-4i, so |z+1|=sqrt(16+16)=sqrt(32).",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-002",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "medium",
    "question": "The roots of x^2 - 7x + k = 0 differ by 1. What is k?",
    "options": [
      "12",
      "13",
      "11",
      "10"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "If roots are r and r+1, then 2r+1=7, so r=3. Their product is 12. Hence k=12.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-003",
    "section": "Mathematics",
    "topic": "Arithmetic Progression",
    "difficulty": "easy",
    "question": "In an AP, the 8th term is 19 and the 13th term is 34. What is the first term?",
    "options": [
      "4",
      "1",
      "-2",
      "7"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The common difference satisfies 5d=15, so d=3. Then a+7d=19 gives a=-2.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-004",
    "section": "Mathematics",
    "topic": "Geometric Progression",
    "difficulty": "easy",
    "question": "A positive geometric progression has first term 12 and sum to infinity 18. What is its common ratio?",
    "options": [
      "1/3",
      "1/2",
      "1/4",
      "2/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "12/(1-r)=18, so 1-r=2/3 and r=1/3.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-005",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "medium",
    "question": "What is the coefficient of x^3 in (2+x)^5?",
    "options": [
      "10",
      "80",
      "20",
      "40"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The coefficient is C(5,3)2^2=10*4=40.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-006",
    "section": "Mathematics",
    "topic": "Determinants",
    "difficulty": "easy",
    "question": "For A = [[2,1],[5,3]], what is det(A)?",
    "options": [
      "5",
      "1",
      "6",
      "-1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "det(A)=2*3-1*5=1.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-007",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "If A is a 2 x 2 matrix with det(A)=3, what is det(2A)?",
    "options": [
      "6",
      "12",
      "3",
      "9"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For a 2 x 2 matrix, det(cA)=c^2 det(A). Thus det(2A)=4*3=12.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-008",
    "section": "Mathematics",
    "topic": "Permutations",
    "difficulty": "easy",
    "question": "How many distinct arrangements can be made from the letters of LEVEL?",
    "options": [
      "120",
      "60",
      "20",
      "30"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "LEVEL has 5 letters with L repeated twice and E repeated twice, so the number is 5!/(2!2!)=30.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-009",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "A fair die is rolled twice. What is the probability that the sum is 9?",
    "options": [
      "1/9",
      "1/6",
      "1/12",
      "5/36"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The favorable ordered pairs are (3,6),(4,5),(5,4),(6,3): 4 of 36, giving 1/9.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-010",
    "section": "Mathematics",
    "topic": "Sets",
    "difficulty": "easy",
    "question": "If n(A)=18, n(B)=25 and n(A union B)=35, what is n(A intersection B)?",
    "options": [
      "10",
      "43",
      "8",
      "7"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "By inclusion-exclusion, n(A intersection B)=18+25-35=8.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-011",
    "section": "Mathematics",
    "topic": "Functions",
    "difficulty": "medium",
    "question": "Let f(x)=2x-1 and g(x)=x^2+1. What is (g o f)(2)?",
    "options": [
      "10",
      "9",
      "5",
      "17"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "f(2)=3 and g(3)=10.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-012",
    "section": "Mathematics",
    "topic": "Logarithms",
    "difficulty": "easy",
    "question": "If log_2(x-1)=3, what is x?",
    "options": [
      "5",
      "7",
      "9",
      "8"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "x-1=2^3=8, so x=9.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-013",
    "section": "Mathematics",
    "topic": "Trigonometric Identities",
    "difficulty": "medium",
    "question": "If sin theta + cos theta = 1/2, what is sin 2theta?",
    "options": [
      "-1/2",
      "-3/4",
      "3/4",
      "1/4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Squaring gives 1+sin2theta=1/4, hence sin2theta=-3/4.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-014",
    "section": "Mathematics",
    "topic": "Trigonometric Equations",
    "difficulty": "medium",
    "question": "For 0 <= x < 2pi, how many solutions does cos 2x = 0 have?",
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "2x=pi/2+npi. In 0<=2x<4pi, n=0,1,2,3, giving four solutions.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-015",
    "section": "Mathematics",
    "topic": "Triangles",
    "difficulty": "easy",
    "question": "In a triangle, sides 5 and 7 include an angle of 60 degrees. What is the square of the third side?",
    "options": [
      "49",
      "25",
      "24",
      "39"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "By the cosine rule, c^2=25+49-2*5*7*(1/2)=39.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-016",
    "section": "Mathematics",
    "topic": "Straight Lines",
    "difficulty": "easy",
    "question": "What is the perpendicular distance from (2,-1) to the line 3x+4y-5=0?",
    "options": [
      "1",
      "3/5",
      "1/5",
      "5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Distance=|6-4-5|/5=3/5.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-017",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "medium",
    "question": "The line x=5 is tangent to the circle x^2+y^2-6x+4y+c=0. What is c?",
    "options": [
      "10",
      "8",
      "9",
      "7"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The center is (3,-2). Tangency to x=5 means radius=2. Since r^2=13-c, 13-c=4, so c=9.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-018",
    "section": "Mathematics",
    "topic": "Parabola",
    "difficulty": "medium",
    "question": "For the parabola y^2=12x, what is the length of its latus rectum?",
    "options": [
      "12",
      "24",
      "6",
      "3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Comparing y^2=4ax gives 4a=12. The latus rectum length is 4a=12.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-019",
    "section": "Mathematics",
    "topic": "Ellipse",
    "difficulty": "medium",
    "question": "For x^2/25 + y^2/9 = 1, what is the eccentricity?",
    "options": [
      "5/4",
      "3/5",
      "4/5",
      "2/5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Here a=5, b=3, so c=sqrt(25-9)=4 and e=c/a=4/5.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-020",
    "section": "Mathematics",
    "topic": "Hyperbola",
    "difficulty": "easy",
    "question": "Which pair gives the asymptotes of x^2/16 - y^2/9 = 1?",
    "options": [
      "y=+-(3/4)x",
      "y=+-12x",
      "y=+-(7/4)x",
      "y=+-(4/3)x"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For x^2/a^2-y^2/b^2=1, asymptotes are y=+-(b/a)x=+-(3/4)x.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-021",
    "section": "Mathematics",
    "topic": "Three-Dimensional Geometry",
    "difficulty": "easy",
    "question": "What is the distance between (1,2,3) and (4,6,3)?",
    "options": [
      "6",
      "4",
      "7",
      "5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Distance=sqrt(3^2+4^2+0^2)=5.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-022",
    "section": "Mathematics",
    "topic": "Direction Cosines",
    "difficulty": "medium",
    "question": "If l,m,n are direction cosines and l=m=1/2 with n>0, what is n?",
    "options": [
      "1/sqrt(3)",
      "1/sqrt(2)",
      "sqrt(3)/2",
      "1/2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "l^2+m^2+n^2=1, so n^2=1-1/4-1/4=1/2 and n=1/sqrt(2).",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-023",
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "easy",
    "question": "Evaluate lim_{x->0} (sin 5x)/x.",
    "options": [
      "0",
      "5",
      "25",
      "1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Using sin u/u ->1, (sin5x)/x=5(sin5x)/(5x)->5.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-024",
    "section": "Mathematics",
    "topic": "Differentiation",
    "difficulty": "easy",
    "question": "If y=x^2 e^x, what is dy/dx at x=1?",
    "options": [
      "e",
      "4e",
      "2e",
      "3e"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "dy/dx=e^x(x^2+2x). At x=1 this is 3e.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-025",
    "section": "Mathematics",
    "topic": "Tangents and Normals",
    "difficulty": "medium",
    "question": "The tangent to y=x^3-2x at x=1 has slope:",
    "options": [
      "1",
      "5",
      "-1",
      "3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "dy/dx=3x^2-2, so at x=1 the slope is 1.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-026",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "medium",
    "question": "On which interval is f(x)=x^3-3x strictly decreasing?",
    "options": [
      "(1,infinity)",
      "(-infinity,infinity)",
      "(-1,1)",
      "(-infinity,-1)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "f'(x)=3(x^2-1), which is negative for -1<x<1.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-027",
    "section": "Mathematics",
    "topic": "Maxima and Minima",
    "difficulty": "medium",
    "question": "For x>0, the minimum value of x + 4/x is:",
    "options": [
      "4",
      "8",
      "2",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "By AM-GM, x+4/x >= 2sqrt(4)=4, attained at x=2.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-028",
    "section": "Mathematics",
    "topic": "Definite Integration",
    "difficulty": "medium",
    "question": "Evaluate integral from 0 to pi of x sin x dx.",
    "options": [
      "2pi",
      "1",
      "pi",
      "pi/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Integration by parts gives [-x cos x + sin x]_0^pi=pi.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-029",
    "section": "Mathematics",
    "topic": "Indefinite Integration",
    "difficulty": "easy",
    "question": "An antiderivative of 1/(1+x^2) is:",
    "options": [
      "tan x + C",
      "arctan x + C",
      "arcsin x+C",
      "ln(1+x^2)+C"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "d(arctan x)/dx=1/(1+x^2).",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-030",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "easy",
    "question": "What are the order and degree of (d^2y/dx^2)^3 + dy/dx = x?",
    "options": [
      "3 and 2",
      "2 and 1",
      "3 and 1",
      "2 and 3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The highest derivative is second order and appears to power 3, so order=2 and degree=3.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-031",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "Solve dy/dx=3x^2 with y(0)=2. What is y(1)?",
    "options": [
      "4",
      "5",
      "2",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Integrating gives y=x^3+C. From y(0)=2, C=2, so y(1)=3.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-032",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "easy",
    "question": "If a=(2,-1,2) and b=(1,3,0), what is a.b?",
    "options": [
      "3",
      "-1",
      "1",
      "5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "a.b=2*1+(-1)*3+2*0=-1.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-033",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "medium",
    "question": "What is the scalar projection of a=(3,4,0) on b=(1,0,0)?",
    "options": [
      "4",
      "7",
      "3",
      "5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Scalar projection is a.b/|b|=3.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-034",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "medium",
    "question": "The area of the parallelogram formed by a=(1,0,0) and b=(0,3,4) is:",
    "options": [
      "5",
      "3",
      "4",
      "12"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "a x b has magnitude sqrt(4^2+3^2)=5.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-035",
    "section": "Mathematics",
    "topic": "Binomial Distribution",
    "difficulty": "medium",
    "question": "If X~Binomial(4,1/2), what is P(X=2)?",
    "options": [
      "1/2",
      "1/4",
      "3/8",
      "1/8"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "P(X=2)=C(4,2)(1/2)^4=6/16=3/8.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-036",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "easy",
    "question": "If a random variable X has variance 9, what is Var(2X-5)?",
    "options": [
      "36",
      "4",
      "14",
      "18"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Var(aX+b)=a^2 Var(X)=4*9=36.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-037",
    "section": "Mathematics",
    "topic": "Permutations",
    "difficulty": "medium",
    "question": "How many 4-digit numbers can be formed from 1,2,3,4,5 without repetition and divisible by 5?",
    "options": [
      "12",
      "60",
      "120",
      "24"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The last digit must be 5. Arrange 3 of the remaining 4 digits in the first three places: 4P3=24.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-038",
    "section": "Mathematics",
    "topic": "Combinations",
    "difficulty": "easy",
    "question": "If C(n,2)=28, what is n?",
    "options": [
      "6",
      "8",
      "7",
      "9"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "n(n-1)/2=28 gives n^2-n-56=0, so n=8.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-039",
    "section": "Mathematics",
    "topic": "Determinants",
    "difficulty": "medium",
    "question": "For what value of k is det([[k,2],[3,6]]) zero?",
    "options": [
      "3",
      "1",
      "4",
      "2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "6k-6=0, so k=1.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-040",
    "section": "Mathematics",
    "topic": "Polynomial Equations",
    "difficulty": "medium",
    "question": "If p(x)=x^3-4x+1, what is the remainder on division by x-2?",
    "options": [
      "3",
      "5",
      "-1",
      "1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "By the remainder theorem, remainder=p(2)=8-8+1=1.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-041",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "medium",
    "question": "The principal argument of -1+i is:",
    "options": [
      "3pi/4",
      "pi/4",
      "-3pi/4",
      "pi"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The point (-1,1) lies in quadrant II at angle 3pi/4.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-042",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "medium",
    "question": "A sequence satisfies a_1=2 and a_{n+1}=a_n+2n. What is a_4?",
    "options": [
      "8",
      "12",
      "14",
      "10"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "a2=4, a3=8 and a4=14, so the required term is 14.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-043",
    "section": "Mathematics",
    "topic": "Inverse Trigonometric Functions",
    "difficulty": "easy",
    "question": "For x in [-1,1], cos(arcsin x) equals:",
    "options": [
      "sqrt(1-x^2)",
      "1-x^2",
      "-sqrt(1-x^2)",
      "x"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "arcsin x lies in [-pi/2,pi/2], where cosine is nonnegative, so cos(arcsin x)=sqrt(1-x^2).",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-044",
    "section": "Mathematics",
    "topic": "Relations",
    "difficulty": "medium",
    "question": "On the integers, define aRb if a-b is divisible by 5. Which property is essential for R to be an equivalence relation?",
    "options": [
      "Only symmetric",
      "Only transitive",
      "Reflexive, symmetric and transitive",
      "Only reflexive"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Congruence modulo 5 is reflexive, symmetric and transitive, hence an equivalence relation.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-045",
    "section": "Mathematics",
    "topic": "Continuity",
    "difficulty": "medium",
    "question": "For f(x)=(x^2-4)/(x-2) for x!=2 and f(2)=k, what value of k makes f continuous at 2?",
    "options": [
      "0",
      "4",
      "6",
      "2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For x!=2, f=x+2, so the limit at 2 is 4. Thus k=4.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-046",
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "easy",
    "question": "Evaluate lim_{x->0} (1-cos x)/x^2.",
    "options": [
      "1",
      "2",
      "0",
      "1/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The standard limit is (1-cos x)/x^2 -> 1/2.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-047",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "Point P divides the segment joining A(1,2) and B(7,8) internally in the ratio 1:2 (AP:PB=1:2). What is P?",
    "options": [
      "(2,3)",
      "(4,5)",
      "(5,6)",
      "(3,4)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Using the section formula, P=((2*1+1*7)/3,(2*2+1*8)/3)=(3,4).",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-048",
    "section": "Mathematics",
    "topic": "Planes",
    "difficulty": "medium",
    "question": "Which vector is normal to the plane 2x-y+3z=7?",
    "options": [
      "(3,-1,2)",
      "(2,-1,3)",
      "(1,-2,3)",
      "(2,1,3)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The coefficients of x,y,z form a normal vector: (2,-1,3).",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-049",
    "section": "Mathematics",
    "topic": "Straight Lines",
    "difficulty": "medium",
    "question": "The angle between lines with slopes 1 and -1 is:",
    "options": [
      "30 degrees",
      "45 degrees",
      "90 degrees",
      "60 degrees"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Their direction vectors are perpendicular, or tan theta=|(m2-m1)/(1+m1m2)| has zero denominator, so theta=90 degrees.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-050",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "Two cards are drawn without replacement from a standard 52-card deck. Given that the first is an ace, what is the probability the second is also an ace?",
    "options": [
      "1/17",
      "4/51",
      "2/51",
      "1/13"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "After an ace is drawn, 3 aces remain among 51 cards, so the probability is 3/51=1/17. The other displayed fractions are not equal to 1/17.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-051",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "hard",
    "question": "For which k does the system x+2y=3 and 2x+ky=6 have infinitely many solutions?",
    "options": [
      "2",
      "6",
      "4",
      "3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "The second equation must be exactly twice the first, so k=4.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-052",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "medium",
    "question": "If alpha,beta are roots of x^2-5x+3=0, what is alpha^2+beta^2?",
    "options": [
      "19",
      "7",
      "13",
      "25"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "alpha+beta=5 and alpha beta=3, so alpha^2+beta^2=25-6=19.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-053",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "hard",
    "question": "If |z-2|=|z+2|, what geometric locus does z=x+iy satisfy?",
    "options": [
      "line y=2",
      "x-axis",
      "circle x^2+y^2=4",
      "y-axis"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Points equidistant from 2 and -2 on the real axis lie on the perpendicular bisector x=0, the y-axis.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-054",
    "section": "Mathematics",
    "topic": "Conditional Probability",
    "difficulty": "medium",
    "question": "Urn A has 2 red and 3 blue balls; urn B has 4 red and 1 blue ball. An urn is chosen at random and a red ball is drawn. What is P(A was chosen)?",
    "options": [
      "1/4",
      "1/3",
      "1/2",
      "2/3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "By Bayes, P(A|R)=(1/2*2/5)/[(1/2*2/5)+(1/2*4/5)]=2/(2+4)=1/3.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-055",
    "section": "Mathematics",
    "topic": "Permutations",
    "difficulty": "hard",
    "question": "How many 5-digit even numbers can be formed using 0,1,2,3,4 exactly once?",
    "options": [
      "72",
      "60",
      "36",
      "48"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Count by last digit. If last is 0: 4!=24. If last is 2 or 4: choose last in 2 ways, first among 3 nonzero remaining digits, then arrange remaining 3 in 3!=6 ways: 2*3*6=36. Total 60.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-056",
    "section": "Mathematics",
    "topic": "Trigonometric Equations",
    "difficulty": "hard",
    "question": "How many solutions of sin x = cos 2x lie in [0,2pi)?",
    "options": [
      "5",
      "4",
      "2",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "cos2x=1-2sin^2x. Let s=sin x: 2s^2+s-1=0, so s=1/2 or -1. In [0,2pi), s=1/2 gives two solutions and s=-1 gives one, total 3.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-057",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "hard",
    "question": "A circle centered at (2,-1) passes through (5,3). What is the length of the chord cut by the y-axis?",
    "options": [
      "2sqrt(21)",
      "4sqrt(2)",
      "8",
      "2sqrt(5)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Radius=5. The center is 2 units from the y-axis. Half the chord is sqrt(25-4)=sqrt21, so the chord length is 2sqrt21.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-058",
    "section": "Mathematics",
    "topic": "Parabola",
    "difficulty": "hard",
    "question": "For y^2=8x, the tangent at parameter t=1 has equation y=mx+c. What is m+c?",
    "options": [
      "4",
      "1",
      "3",
      "2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "For y^2=4ax with a=2, tangent at t is ty=x+at^2. At t=1: y=x+2, so m+c=3.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-059",
    "section": "Mathematics",
    "topic": "Three-Dimensional Geometry",
    "difficulty": "hard",
    "question": "The plane through (1,0,0), (0,1,0), (0,0,1) has equation:",
    "options": [
      "x+y+z=1",
      "x+y+z=0",
      "xyz=1",
      "x+y-z=1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "The intercept form x/1+y/1+z/1=1 gives x+y+z=1.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-060",
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "hard",
    "question": "Evaluate lim_{x->0} (e^x-1-x)/x^2.",
    "options": [
      "1",
      "0",
      "1/2",
      "2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Using e^x=1+x+x^2/2+..., the quotient tends to 1/2.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-061",
    "section": "Mathematics",
    "topic": "Implicit Differentiation",
    "difficulty": "medium",
    "question": "If x^2+xy+y^2=7, what is dy/dx at (1,2)?",
    "options": [
      "1",
      "-4/5",
      "-1",
      "-5/4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Differentiate: 2x+y+x y' +2y y'=0. Thus y'=-(2x+y)/(x+2y)=-(2+2)/(1+4)=-4/5.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-062",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "hard",
    "question": "A rectangle has perimeter 20. What is its maximum possible area?",
    "options": [
      "20",
      "24",
      "16",
      "25"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "For sides x and 10-x, area x(10-x) is maximized at x=5, giving 25.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-063",
    "section": "Mathematics",
    "topic": "Definite Integration",
    "difficulty": "hard",
    "question": "Evaluate integral from 0 to 1 of x/(1+x^2) dx.",
    "options": [
      "ln2",
      "1/2",
      "pi/4",
      "(1/2)ln2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Let u=1+x^2, du=2x dx. The value is (1/2)ln(2).",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-064",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "hard",
    "question": "Solve dy/dx + y = 2 with y(0)=0. What is y(ln 2)?",
    "options": [
      "3/2",
      "1",
      "2",
      "1/2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "The solution is y=2+Ce^{-x}. From y(0)=0, C=-2, so y=2(1-e^{-x}). At x=ln2, y=1.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-065",
    "section": "Mathematics",
    "topic": "Vector Triple Product",
    "difficulty": "hard",
    "question": "Let a=(1,0,1), b=(0,2,0), c=(1,1,0). What is a.(b x c)?",
    "options": [
      "0",
      "2",
      "-2",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "b x c=(0,0,-2), so a.(b x c)=-2.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-066",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "Select all statements that are always true for square matrices A and B of the same order.",
    "options": [
      "det(AB)=det(A)det(B)",
      "AB=BA",
      "(AB)^T=B^T A^T",
      "det(A+B)=det(A)+det(B)"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      2
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: true by determinant multiplicativity. B: false because matrix multiplication need not commute. C: true by transpose of a product. D: false in general. Display-order verdicts: A: correct. B: incorrect. C: correct. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-067",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "For events A and B with P(A)=1/2, P(B)=1/3 and A,B independent, select all correct statements.",
    "options": [
      "P(A intersection B)=1/6",
      "P(A union B)=2/3",
      "P(A|B)=1/2",
      "P(A complement intersection B)=1/3"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: true, independence gives 1/6. B: true, 1/2+1/3-1/6=2/3. C: true, independence gives P(A|B)=P(A)=1/2. D: false because P(A complement intersection B)=P(B)-P(A intersection B)=1/6, not 1/3. Display-order verdicts: A: correct. B: correct. C: correct. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-068",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "medium",
    "question": "For z=1+i, select all correct statements.",
    "options": [
      "|z|=sqrt2",
      "z^2=2i",
      "1/z=(1-i)/2",
      "arg(z)=3pi/4"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: true. B: (1+i)^2=2i. C: rationalizing gives (1-i)/2. D: false; the principal argument is pi/4. Display-order verdicts: A: correct. B: correct. C: correct. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-069",
    "section": "Mathematics",
    "topic": "Parabola, Ellipse and Hyperbola",
    "difficulty": "hard",
    "question": "For Parabola, Ellipse and Hyperbola, select all correct statements.",
    "options": [
      "The focus of y^2=4ax is (a,0)",
      "The eccentricity of every parabola is 1",
      "The asymptotes of x^2/a^2-y^2/b^2=1 are y=+-(a/b)x",
      "For x^2/a^2+y^2/b^2=1 with a>b, e=sqrt(1-b^2/a^2)"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      3
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: true. B: true. C: false; the slopes are +-b/a. D: true by the ellipse eccentricity formula. Display-order verdicts: A: correct. B: correct. C: incorrect. D: correct.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-070",
    "section": "Mathematics",
    "topic": "Limits and Continuity",
    "difficulty": "medium",
    "question": "Select all functions continuous at x=0.",
    "options": [
      "f(x)=x^2",
      "f(x)=|x|",
      "f(x)=sin x/x for x!=0 with f(0)=1",
      "f(x)=1/x with any finite value assigned at 0"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A and B are standard continuous functions. C has limit 1 and the assigned value 1, so it is continuous. D has no finite limit at 0. Display-order verdicts: A: correct. B: correct. C: correct. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-071",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "hard",
    "question": "Let f(x)=x^3-3x. Select all correct statements.",
    "options": [
      "f is increasing on (-infinity,-1)",
      "f is decreasing on (-1,1)",
      "x=1 is a local minimum point",
      "f has no stationary point"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "f'(x)=3(x^2-1). It is positive outside [-1,1] and negative inside. Thus A,B are true; at x=1 derivative changes negative to positive, so C is true. D is false. Display-order verdicts: A: correct. B: correct. C: correct. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-072",
    "section": "Mathematics",
    "topic": "Definite Integration",
    "difficulty": "medium",
    "question": "Let a>0 and let f be integrable on [-a,a]. Select all identities that are always valid.",
    "options": [
      "integral_0^a f(x)dx = integral_0^a f(a-x)dx",
      "integral_0^a f(x)dx = 2 integral_0^{a/2} f(x)dx",
      "integral_{-a}^a f(x)dx=0 if f is odd",
      "integral_{-a}^a f(x)dx=2 integral_0^a f(x)dx if f is even"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      2,
      3
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A follows by the substitution u=a-x on [0,a]. B is not true for arbitrary f; for example, f(x)=x gives integral_0^a f(x)dx=a^2/2 but 2 integral_0^{a/2} f(x)dx=a^2/4. C is valid for an odd integrable function on the symmetric interval [-a,a]. D is valid for an even integrable function on [-a,a]. Display-order verdicts: A: correct. B: incorrect. C: correct. D: correct.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-073",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "hard",
    "question": "Select all functions that satisfy dy/dx=2x.",
    "options": [
      "y=x^2+1",
      "y=x^2-5",
      "y=2x^2",
      "y=x^2"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      3
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A, B and D all differentiate to 2x. C differentiates to 4x, so it does not satisfy the equation. Display-order verdicts: A: correct. B: correct. C: incorrect. D: correct.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-074",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "medium",
    "question": "Let a and b be nonzero vectors. Select all correct statements.",
    "options": [
      "a.b=0 implies a is perpendicular to b",
      "|a x b|=|a||b| when a is perpendicular to b",
      "a x b=b x a",
      "a.b=|a||b| implies a and b point in the same direction"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      3
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: true. B: true because sin90=1. C: false; a x b=-(b x a). D: true because cos theta=1. Display-order verdicts: A: correct. B: correct. C: incorrect. D: correct.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-075",
    "section": "Mathematics",
    "topic": "Straight Lines and Circles",
    "difficulty": "hard",
    "question": "For Straight Lines and Circles, select all correct statements.",
    "options": [
      "Lines with slopes m1,m2 are perpendicular when m1m2=-1, when both slopes are finite",
      "The tangent to x^2+y^2=r^2 at (x1,y1) is xx1+yy1=r^2",
      "A line through the center of a circle can be a tangent to that circle",
      "Parallel distinct lines have equal slopes when their slopes are finite"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      3
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: true for finite slopes. B: true. C: false because a tangent is at radius distance from the center, not through it. D: true. Display-order verdicts: A: correct. B: correct. C: incorrect. D: correct.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-076",
    "section": "Physics",
    "topic": "Units and Dimensions",
    "difficulty": "easy",
    "question": "Which quantity has dimensions M L^2 T^-3?",
    "options": [
      "Pressure",
      "Force",
      "Power",
      "Energy"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Power=work/time, so its dimensions are M L^2 T^-3.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-077",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "easy",
    "question": "A body starts from rest with constant acceleration 3 m/s^2. Its speed after 4 s is:",
    "options": [
      "7 m/s",
      "12 m/s",
      "24 m/s",
      "16 m/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "v=u+at=0+3*4=12 m/s.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-078",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "medium",
    "question": "A particle has velocity v=4t-2 (SI units). Its displacement from t=1 s to t=3 s is:",
    "options": [
      "16 m",
      "8 m",
      "20 m",
      "12 m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Displacement is integral_1^3 (4t-2)dt=[2t^2-2t]_1^3=12 m.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-079",
    "section": "Physics",
    "topic": "Projectile Motion",
    "difficulty": "medium",
    "question": "A projectile is launched horizontally at 10 m/s from a height of 20 m. Taking g=10 m/s^2, its horizontal range is:",
    "options": [
      "10 m",
      "30 m",
      "40 m",
      "20 m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Fall time=sqrt(2h/g)=2 s. Range=10*2=20 m.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-080",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "easy",
    "question": "A 5 kg block on a frictionless surface is acted on by a 20 N horizontal force. Its acceleration is:",
    "options": [
      "10 m/s^2",
      "4 m/s^2",
      "5 m/s^2",
      "2 m/s^2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "a=F/m=20/5=4 m/s^2.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-081",
    "section": "Physics",
    "topic": "Friction",
    "difficulty": "medium",
    "question": "A 2 kg block rests on a horizontal surface with coefficient of static friction 0.4. Taking g=10 m/s^2, the maximum static friction is:",
    "options": [
      "10 N",
      "4 N",
      "8 N",
      "20 N"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "f_s,max=mu_s N=0.4*(2*10)=8 N.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-082",
    "section": "Physics",
    "topic": "Work Energy Power",
    "difficulty": "easy",
    "question": "A constant force of 6 N moves an object 5 m in its own direction. Work done is:",
    "options": [
      "30 J",
      "3 J",
      "60 J",
      "11 J"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "W=Fs cos0=6*5=30 J.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-083",
    "section": "Physics",
    "topic": "Work Energy Power",
    "difficulty": "medium",
    "question": "A 2 kg body moving at 3 m/s is brought to rest. The work done by the net force is:",
    "options": [
      "18 J",
      "-18 J",
      "-9 J",
      "9 J"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "By the work-energy theorem, W=0-(1/2)(2)(3^2)=-9 J.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-084",
    "section": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "medium",
    "question": "A uniform disc and a ring have the same mass and radius. About their symmetry axes, which has the larger moment of inertia?",
    "options": [
      "Ring",
      "Disc",
      "Depends on angular speed",
      "They are equal"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "I_disc=MR^2/2 while I_ring=MR^2, so the ring has the larger moment of inertia.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-085",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "easy",
    "question": "If the distance between two point masses is doubled, their gravitational force becomes:",
    "options": [
      "four times",
      "double",
      "half",
      "one-fourth"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Newtonian force varies as 1/r^2, so doubling r makes the force one-fourth.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-086",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "At height h=R above Earth surface, where R is Earth radius, g is approximately:",
    "options": [
      "2g",
      "g/4",
      "g/8",
      "g/2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Distance from Earth center is 2R, so g_h=g(R/2R)^2=g/4.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-087",
    "section": "Physics",
    "topic": "Fluid Mechanics",
    "difficulty": "easy",
    "question": "Pressure at depth h in a liquid of density rho, neglecting atmospheric pressure, is:",
    "options": [
      "rho g/h",
      "rho gh",
      "gh/rho",
      "rho h/g"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Hydrostatic gauge pressure is p=rho gh.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-088",
    "section": "Physics",
    "topic": "Fluid Mechanics",
    "difficulty": "medium",
    "question": "Water flows through a pipe whose cross-sectional area halves. For steady incompressible flow, the speed becomes:",
    "options": [
      "half",
      "four times",
      "unchanged",
      "double"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Continuity Av=constant, so halving area doubles speed.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-089",
    "section": "Physics",
    "topic": "Thermal Physics",
    "difficulty": "easy",
    "question": "How much heat is needed to raise 2 kg of water by 5 K if c=4200 J kg^-1 K^-1?",
    "options": [
      "42000 J",
      "84000 J",
      "4200 J",
      "21000 J"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Q=mcDeltaT=2*4200*5=42000 J.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-090",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "In an isochoric process for an ideal gas, which quantity is zero?",
    "options": [
      "Heat supplied",
      "Change in internal energy",
      "Work done by gas",
      "Change in temperature"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "At constant volume, dV=0, so W=integral p dV=0.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-091",
    "section": "Physics",
    "topic": "Kinetic Theory",
    "difficulty": "medium",
    "question": "For an ideal gas at fixed temperature, if molecular mass is quadrupled, rms speed becomes:",
    "options": [
      "half",
      "one-fourth",
      "four times",
      "twice"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "v_rms is proportional to 1/sqrt(M), so quadrupling M halves the rms speed.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-092",
    "section": "Physics",
    "topic": "Simple Harmonic Motion",
    "difficulty": "easy",
    "question": "In SHM, acceleration is:",
    "options": [
      "proportional to velocity",
      "constant",
      "proportional to displacement and opposite in direction",
      "zero at all points"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "SHM obeys a=-omega^2 x.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-093",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "medium",
    "question": "A wave has frequency 200 Hz and speed 300 m/s. Its wavelength is:",
    "options": [
      "2 m",
      "1.5 m",
      "0.67 m",
      "500 m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "lambda=v/f=300/200=1.5 m.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-094",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "easy",
    "question": "The electric field inside a conductor in electrostatic equilibrium is:",
    "options": [
      "uniform but nonzero",
      "dependent on shape only",
      "infinite",
      "zero"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Free charges rearrange until the internal electrostatic field is zero.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-095",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "medium",
    "question": "Two identical positive charges are fixed symmetrically at x=+a and x=-a. The electric field at the origin is:",
    "options": [
      "toward +x",
      "toward -x",
      "undefined",
      "zero"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The fields at the origin have equal magnitudes and opposite directions, so they cancel.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-096",
    "section": "Physics",
    "topic": "Capacitance",
    "difficulty": "medium",
    "question": "Two capacitors 3 microF and 6 microF are connected in series. Their equivalent capacitance is:",
    "options": [
      "18 microF",
      "2 microF",
      "9 microF",
      "3 microF"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "1/C=1/3+1/6=1/2, hence C=2 microF.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-097",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "easy",
    "question": "A 12 V battery is connected across a 4 ohm resistor. The current is:",
    "options": [
      "4 A",
      "48 A",
      "3 A",
      "2 A"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Ohm law gives I=V/R=12/4=3 A.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-098",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "A wire of resistance R is stretched to twice its original length, volume remaining constant. Its new resistance is:",
    "options": [
      "4R",
      "8R",
      "R",
      "2R"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Constant volume makes area halve. Since R=rho L/A, doubling L and halving A makes resistance 4R.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-099",
    "section": "Physics",
    "topic": "Magnetism",
    "difficulty": "medium",
    "question": "A charge q moves with velocity parallel to a uniform magnetic field B. Magnetic force magnitude is:",
    "options": [
      "qvB/2",
      "qvB",
      "zero",
      "qB/v"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "F=qvB sin theta, and theta=0 for parallel motion, so F=0.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-100",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "easy",
    "question": "According to Faraday law, induced emf is related to the rate of change of:",
    "options": [
      "magnetic flux",
      "capacitance",
      "resistance",
      "electric charge"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Induced emf equals minus the time rate of change of magnetic flux.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-101",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "medium",
    "question": "The rms value of a sinusoidal current with peak value I0 is:",
    "options": [
      "I0/2",
      "I0",
      "sqrt2 I0",
      "I0/sqrt2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For a sinusoid, I_rms=I0/sqrt2.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-102",
    "section": "Physics",
    "topic": "Ray Optics",
    "difficulty": "easy",
    "question": "The power of a converging lens of focal length 0.50 m is:",
    "options": [
      "-2 D",
      "+2 D",
      "+0.5 D",
      "+5 D"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "P=1/f in metres=1/0.5=+2 D.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-103",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "medium",
    "question": "In Young double-slit interference, if wavelength is doubled while geometry is unchanged, fringe width:",
    "options": [
      "is unchanged",
      "doubles",
      "quadruples",
      "halves"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Fringe width beta=lambda D/d, so doubling lambda doubles beta.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-104",
    "section": "Physics",
    "topic": "Modern Physics",
    "difficulty": "easy",
    "question": "The energy of a photon is:",
    "options": [
      "h nu^2",
      "nu/h",
      "h/nu",
      "h nu"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Planck relation gives E=h nu.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-105",
    "section": "Physics",
    "topic": "Semiconductors",
    "difficulty": "medium",
    "question": "In an intrinsic semiconductor, the number density of electrons is:",
    "options": [
      "equal to holes",
      "always zero",
      "less than holes",
      "greater than holes"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Each thermally generated electron leaves one hole, so n=p in an intrinsic semiconductor.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-106",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "hard",
    "question": "A 4 kg block on a rough horizontal floor is pulled by a 20 N force at 37 degrees above horizontal. If mu_k=0.25, g=10 m/s^2, sin37=0.6 and cos37=0.8, its acceleration is:",
    "options": [
      "2.5 m/s^2",
      "3.0 m/s^2",
      "2.25 m/s^2",
      "2.0 m/s^2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Horizontal pull=20*0.8=16 N. Normal=40-20*0.6=28 N, friction=0.25*28=7 N. Net=9 N, so a=9/4=2.25 m/s^2.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-107",
    "section": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "hard",
    "question": "A solid cylinder rolls without slipping down from vertical height h. Its speed at the bottom is:",
    "options": [
      "sqrt(4gh/3)",
      "sqrt(gh)",
      "sqrt(2gh)",
      "sqrt(gh/2)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "mgh=(1/2)mv^2+(1/2)Iomega^2 with I=MR^2/2 and omega=v/R. Thus mgh=(3/4)mv^2, so v=sqrt(4gh/3).",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-108",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "hard",
    "question": "Charges +q and -q are separated by distance 2a. At a point on the perpendicular bisector far away at distance r>>a from the center, the electric field magnitude varies approximately as:",
    "options": [
      "1/r^4",
      "1/r",
      "1/r^3",
      "1/r^2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "The pair is an electric dipole. The far-field magnitude scales as p/r^3.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-109",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "hard",
    "question": "A cell of emf 12 V and internal resistance 1 ohm is connected to an external 5 ohm resistor. The terminal voltage is:",
    "options": [
      "12 V",
      "10 V",
      "14 V",
      "2 V"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Current=12/(5+1)=2 A. Terminal voltage across the external resistor is IR=10 V.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-110",
    "section": "Physics",
    "topic": "Ray Optics",
    "difficulty": "hard",
    "question": "An object is placed 30 cm in front of a convex lens of focal length 20 cm. The real image distance from the lens is:",
    "options": [
      "120 cm",
      "30 cm",
      "40 cm",
      "60 cm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Using 1/f=1/v-1/u with f=+20 cm, u=-30 cm: 1/v=1/20-1/30=1/60, so v=60 cm.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-111",
    "section": "Physics",
    "topic": "Mechanics",
    "difficulty": "medium",
    "question": "Select all correct statements for a particle moving in a circle with constant speed.",
    "options": [
      "Its velocity changes continuously",
      "Its acceleration is directed toward the center",
      "Its tangential acceleration is zero",
      "Its net acceleration is zero"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: true because direction changes. B: true for centripetal acceleration. C: true because speed is constant. D: false because centripetal acceleration is nonzero. Display-order verdicts: A: correct. B: correct. C: correct. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-112",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "For an ideal gas, select all correct statements.",
    "options": [
      "Internal energy depends only on temperature",
      "In an isothermal process Delta U=0",
      "In an adiabatic process Q=0",
      "In every process W=0"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: true for an ideal gas. B: constant temperature gives Delta U=0. C: adiabatic means no heat exchange. D: false in general. Display-order verdicts: A: correct. B: correct. C: correct. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-113",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "hard",
    "question": "Select all correct statements about electrostatic potential and field.",
    "options": [
      "E=-grad V",
      "Potential can be nonzero where electric field is zero",
      "Electric field is tangent to an equipotential surface",
      "No work is done moving a charge along an equipotential surface"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      3
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: true. B: true, for example inside a charged conducting shell potential is constant nonzero while E=0. C: false; E is normal to equipotentials. D: true. Display-order verdicts: A: correct. B: correct. C: incorrect. D: correct.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-114",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "medium",
    "question": "For Electromagnetic Induction, select all correct statements.",
    "options": [
      "Lenz law gives the direction of induced current",
      "A changing magnetic flux can induce emf",
      "A stationary loop in a steady uniform magnetic field always has induced emf",
      "Self-inductance opposes changes in current"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      3
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: true. B: true by Faraday law. C: false if flux is constant. D: true through self-induced emf opposing current change. Display-order verdicts: A: correct. B: correct. C: incorrect. D: correct.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-115",
    "section": "Physics",
    "topic": "Modern Physics",
    "difficulty": "medium",
    "question": "For Modern Physics, select all correct statements.",
    "options": [
      "Photoelectric emission requires frequency above a threshold",
      "Increasing intensity below threshold can produce photoelectrons from the same metal",
      "At fixed frequency above threshold, increasing intensity increases maximum kinetic energy",
      "de Broglie wavelength is h/p"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      3
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: true because photon energy must exceed the work function. B: false; below threshold, greater intensity does not overcome insufficient photon energy. C: false; maximum kinetic energy depends on frequency, not intensity. D: true by the de Broglie relation. Display-order verdicts: A: correct. B: incorrect. C: incorrect. D: correct.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-116",
    "section": "Chemistry",
    "topic": "Mole Concept",
    "difficulty": "easy",
    "question": "How many moles are present in 18 g of water? (Molar mass H2O=18 g mol^-1)",
    "options": [
      "1 mol",
      "18 mol",
      "0.5 mol",
      "2 mol"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "n=m/M=18/18=1 mol.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-117",
    "section": "Chemistry",
    "topic": "Stoichiometry",
    "difficulty": "medium",
    "question": "For 2H2 + O2 -> 2H2O, how many moles of O2 are needed to react completely with 5 mol H2?",
    "options": [
      "1.25",
      "10",
      "5",
      "2.5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The stoichiometric ratio H2:O2 is 2:1, so 5 mol H2 requires 2.5 mol O2.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-118",
    "section": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "easy",
    "question": "The maximum number of electrons in the n=3 shell is:",
    "options": [
      "9",
      "18",
      "8",
      "32"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Maximum electrons in shell n is 2n^2=18 for n=3.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-119",
    "section": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "medium",
    "question": "Which set of quantum numbers is not allowed?",
    "options": [
      "n=3,l=2,m=-2",
      "n=2,l=2,m=0",
      "n=2,l=1,m=0",
      "n=4,l=0,m=0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For n=2, l can only be 0 or 1. Thus n=2,l=2 is forbidden.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-120",
    "section": "Chemistry",
    "topic": "Periodicity",
    "difficulty": "easy",
    "question": "Across a period from left to right, first ionization enthalpy generally:",
    "options": [
      "becomes zero",
      "decreases",
      "remains exactly constant",
      "increases"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Effective nuclear charge generally increases across a period, so first ionization enthalpy tends to increase, with known local exceptions.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-121",
    "section": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "medium",
    "question": "The shape of NH3 according to VSEPR theory is:",
    "options": [
      "trigonal pyramidal",
      "trigonal planar",
      "tetrahedral",
      "linear"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Nitrogen has three bond pairs and one lone pair, giving a trigonal pyramidal molecular shape.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-122",
    "section": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "easy",
    "question": "The bond order of O2 in molecular orbital theory is:",
    "options": [
      "2.5",
      "1",
      "2",
      "1.5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "O2 has bond order (Nb-Na)/2=2.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-123",
    "section": "Chemistry",
    "topic": "States of Matter",
    "difficulty": "medium",
    "question": "At constant temperature, if the pressure of an ideal gas is doubled, its volume becomes:",
    "options": [
      "half",
      "four times",
      "unchanged",
      "double"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Boyle law gives PV=constant, so doubling P halves V.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-124",
    "section": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "For an exothermic reaction at constant pressure, DeltaH is:",
    "options": [
      "always equal to DeltaS",
      "zero",
      "negative",
      "positive"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Exothermic processes release heat to the surroundings, so system enthalpy change is negative.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-125",
    "section": "Chemistry",
    "topic": "Chemical Equilibrium",
    "difficulty": "medium",
    "question": "For N2(g)+3H2(g)<=>2NH3(g), increasing pressure at fixed temperature shifts equilibrium toward:",
    "options": [
      "reactants",
      "products",
      "only catalyst side",
      "no shift"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The product side has fewer gas moles, so higher pressure favors NH3 formation.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-126",
    "section": "Chemistry",
    "topic": "Ionic Equilibrium",
    "difficulty": "easy",
    "question": "At 25 C, a neutral aqueous solution has pH:",
    "options": [
      "0",
      "14",
      "1",
      "7"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "At 25 C, neutral water has [H+]=10^-7 M and pH 7.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-127",
    "section": "Chemistry",
    "topic": "Ionic Equilibrium",
    "difficulty": "medium",
    "question": "The pH of 1.0x10^-3 M HCl, assuming complete dissociation, is:",
    "options": [
      "10",
      "11",
      "2",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "[H+]=10^-3 M, so pH=3.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-128",
    "section": "Chemistry",
    "topic": "Redox Reactions",
    "difficulty": "easy",
    "question": "The oxidation number of sulfur in H2SO4 is:",
    "options": [
      "-2",
      "+6",
      "+4",
      "0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "2(+1)+S+4(-2)=0 gives S=+6.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-129",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "medium",
    "question": "In a galvanic cell, oxidation occurs at the:",
    "options": [
      "salt bridge",
      "cathode",
      "anode",
      "electrolyte only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Oxidation always occurs at the anode; reduction occurs at the cathode.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-130",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "medium",
    "question": "For a first-order reaction, the unit of rate constant is:",
    "options": [
      "s^-1",
      "L mol^-1 s^-1",
      "mol^-1 L s^-2",
      "mol L^-1 s^-1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For first order, rate=k[A], so k has unit time^-1, usually s^-1.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-131",
    "section": "Chemistry",
    "topic": "Surface Chemistry",
    "difficulty": "easy",
    "question": "A catalyst increases reaction rate mainly by:",
    "options": [
      "increasing DeltaH",
      "increasing product stability only",
      "lowering activation energy",
      "changing equilibrium constant"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "A catalyst provides an alternative pathway with lower activation energy and does not change the equilibrium constant.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-132",
    "section": "Chemistry",
    "topic": "Hydrogen",
    "difficulty": "easy",
    "question": "Hydrogen peroxide can act as:",
    "options": [
      "both oxidizing and reducing agent",
      "only a reducing agent",
      "neither",
      "only an oxidizing agent"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Because oxygen in H2O2 has oxidation state -1, it can be oxidized to 0 or reduced to -2, so H2O2 can act both ways.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-133",
    "section": "Chemistry",
    "topic": "s-Block Elements",
    "difficulty": "medium",
    "question": "Which compound is commonly used as baking soda?",
    "options": [
      "KOH",
      "Na2CO3",
      "CaCO3",
      "NaHCO3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Baking soda is sodium hydrogen carbonate, NaHCO3.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-134",
    "section": "Chemistry",
    "topic": "p-Block Elements",
    "difficulty": "medium",
    "question": "Which gas is responsible for the brown fumes produced when concentrated HNO3 decomposes?",
    "options": [
      "N2O",
      "NO2",
      "NH3",
      "NO"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Nitrogen dioxide, NO2, is a brown gas and appears in fumes from concentrated nitric acid.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-135",
    "section": "Chemistry",
    "topic": "d-Block Elements",
    "difficulty": "medium",
    "question": "The characteristic colors of many transition-metal ions are mainly due to:",
    "options": [
      "rotation of molecules only",
      "d-d electronic transitions",
      "proton transfer",
      "nuclear transitions"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Partially filled d orbitals permit electronic transitions that often absorb visible light, producing characteristic colors.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-136",
    "section": "Chemistry",
    "topic": "Coordination Chemistry",
    "difficulty": "easy",
    "question": "The coordination number of Co in [Co(NH3)6]3+ is:",
    "options": [
      "4",
      "8",
      "3",
      "6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Six monodentate NH3 ligands are directly bonded to cobalt, so coordination number is 6.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-137",
    "section": "Chemistry",
    "topic": "Organic Chemistry Basics",
    "difficulty": "medium",
    "question": "Which intermediate is planar at the positively charged carbon?",
    "options": [
      "carbocation",
      "alkane carbon",
      "carbanion with three single bonds",
      "free radical always tetrahedral"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "A typical carbocation carbon is sp2 hybridized and trigonal planar.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-138",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "easy",
    "question": "Ethene decolorizes bromine water because it undergoes:",
    "options": [
      "substitution",
      "elimination",
      "addition",
      "polycondensation only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The C=C double bond undergoes electrophilic addition with bromine.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-139",
    "section": "Chemistry",
    "topic": "Haloalkanes",
    "difficulty": "medium",
    "question": "Which substrate generally reacts fastest by an SN1 mechanism in a given solvent among the following?",
    "options": [
      "tert-butyl chloride",
      "vinyl chloride",
      "methyl chloride",
      "ethyl chloride"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "SN1 rate depends on carbocation stability; tert-butyl chloride forms the most stable carbocation among these.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-140",
    "section": "Chemistry",
    "topic": "Alcohols Phenols Ethers",
    "difficulty": "easy",
    "question": "Oxidation of a primary alcohol under controlled conditions can first produce a:",
    "options": [
      "alkane",
      "ether",
      "aldehyde",
      "ketone"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "A primary alcohol is first oxidized to an aldehyde before further oxidation to a carboxylic acid.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-141",
    "section": "Chemistry",
    "topic": "Aldehydes and Ketones",
    "difficulty": "medium",
    "question": "Which compound gives a positive Tollens test?",
    "options": [
      "benzophenone",
      "ethanal",
      "diethyl ether",
      "acetone"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Aldehydes such as ethanal reduce Tollens reagent, whereas ordinary ketones and ethers do not.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-142",
    "section": "Chemistry",
    "topic": "Carboxylic Acids",
    "difficulty": "easy",
    "question": "Carboxylic acids are more acidic than alcohols mainly because the carboxylate ion is:",
    "options": [
      "sp3 only",
      "less polar",
      "positively charged",
      "resonance stabilized"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The conjugate base carboxylate ion is stabilized by resonance over two oxygen atoms, increasing acidity.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-143",
    "section": "Chemistry",
    "topic": "Amines",
    "difficulty": "medium",
    "question": "Aniline is less basic than cyclohexylamine mainly because the nitrogen lone pair in aniline is:",
    "options": [
      "part of an ionic bond",
      "absent",
      "bonded to oxygen",
      "delocalized into the benzene ring"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Resonance delocalization of the aniline nitrogen lone pair makes it less available for protonation.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-144",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "easy",
    "question": "The monomer units of proteins are:",
    "options": [
      "nucleotides",
      "amino acids",
      "fatty acids only",
      "monosaccharides"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Proteins are polypeptides formed from amino acid monomers.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-145",
    "section": "Chemistry",
    "topic": "Polymers",
    "difficulty": "easy",
    "question": "Which is an addition polymer?",
    "options": [
      "Bakelite",
      "Nylon-6,6",
      "Polyethylene",
      "Terylene"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Polyethylene forms by addition polymerization of ethene without elimination of a small molecule.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-146",
    "section": "Chemistry",
    "topic": "Stoichiometry",
    "difficulty": "hard",
    "question": "A 5.0 g sample of CaCO3 is completely decomposed: CaCO3 -> CaO + CO2. If molar mass CaCO3=100 g mol^-1, what mass of CO2 forms? (Molar mass CO2=44 g mol^-1)",
    "options": [
      "2.2 g",
      "4.4 g",
      "1.1 g",
      "5.0 g"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "5.0 g CaCO3 is 0.050 mol. The reaction gives the same moles of CO2, so mass=0.050*44=2.2 g.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-147",
    "section": "Chemistry",
    "topic": "Chemical Equilibrium",
    "difficulty": "hard",
    "question": "For A(g)<=>2B(g), Kc=4.0. At equilibrium [A]=0.25 M. What is [B] if concentrations are in mol L^-1?",
    "options": [
      "2.0 M",
      "0.5 M",
      "1.0 M",
      "4.0 M"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Kc=[B]^2/[A]=4. Thus [B]^2=4*0.25=1, so [B]=1.0 M.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-148",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "hard",
    "question": "For a cell reaction with n=2 electrons and Ecell=1.10 V under standard conditions, DeltaG degree is closest to: (F=96500 C mol^-1)",
    "options": [
      "-212 kJ mol^-1",
      "-53 kJ mol^-1",
      "-106 kJ mol^-1",
      "+212 kJ mol^-1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "DeltaG degree=-nFE=-2*96500*1.10=-212300 J mol^-1, about -212 kJ mol^-1.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-149",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "hard",
    "question": "A first-order reaction has half-life 20 min. What fraction of reactant remains after 60 min?",
    "options": [
      "1/4",
      "1/2",
      "1/16",
      "1/8"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "60 min equals three half-lives, so remaining fraction=(1/2)^3=1/8.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-150",
    "section": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "hard",
    "question": "Which sequence most directly converts propene to propan-2-ol?",
    "options": [
      "H2/Ni then oxidation",
      "H2O/H+ addition",
      "Br2 then Zn",
      "O3 then H2O"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Acid-catalyzed hydration of propene follows Markovnikov addition and gives propan-2-ol.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-151",
    "section": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "medium",
    "question": "For Chemical Bonding, select all correct statements.",
    "options": [
      "BF3 is trigonal planar",
      "CH4 is tetrahedral",
      "NH4+ is square planar",
      "CO2 is linear"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      3
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: BF3 has three bonding regions and no lone pair on B, so trigonal planar. B: CH4 is tetrahedral. C: NH4+ is tetrahedral, not square planar. D: CO2 is linear. Display-order verdicts: A: correct. B: correct. C: incorrect. D: correct.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-152",
    "section": "Chemistry",
    "topic": "Thermodynamics and Equilibrium",
    "difficulty": "hard",
    "question": "For thermodynamic spontaneity and equilibrium at constant temperature and pressure, select all correct statements.",
    "options": [
      "DeltaG<0",
      "At equilibrium DeltaG=0",
      "A catalyst makes DeltaG more negative",
      "Equilibrium constant depends on temperature"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      3
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: spontaneous forward change has negative DeltaG. B: equilibrium has DeltaG=0. C: catalyst changes rate, not thermodynamic DeltaG. D: K varies with temperature. Display-order verdicts: A: correct. B: correct. C: incorrect. D: correct.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-153",
    "section": "Chemistry",
    "topic": "Periodic and d-Block Chemistry",
    "difficulty": "medium",
    "question": "For Periodic and d-Block Chemistry, select all correct statements.",
    "options": [
      "Atomic radius generally decreases across a period",
      "Transition metals often show variable oxidation states",
      "All d-block ions are colorless",
      "Electronegativity generally decreases across a period"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: true as effective nuclear charge generally rises across a period. B: true because similar d and s orbital energies permit multiple oxidation states. C: false because many d-block ions are colored. D: false; electronegativity generally increases across a period. Display-order verdicts: A: correct. B: correct. C: incorrect. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-154",
    "section": "Chemistry",
    "topic": "Organic Reaction Patterns",
    "difficulty": "medium",
    "question": "For Organic Reaction Patterns, select all correct statements.",
    "options": [
      "Alkenes generally undergo addition reactions",
      "Benzene commonly undergoes electrophilic substitution",
      "Primary alcohol oxidation can give aldehydes",
      "All ketones give Tollens test"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: true for C=C. B: aromatic benzene favors electrophilic substitution. C: true under controlled oxidation. D: false; ordinary ketones do not give Tollens test. Display-order verdicts: A: correct. B: correct. C: correct. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-01-155",
    "section": "Chemistry",
    "topic": "Biomolecules and Polymers",
    "difficulty": "medium",
    "question": "For Biomolecules and Polymers, select all correct statements.",
    "options": [
      "Glucose is a carbohydrate",
      "Proteins contain peptide bonds",
      "DNA is a polymer of nucleotides",
      "Polyethylene is a condensation polymer"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: true. B: amino acids in proteins are linked by peptide bonds. C: DNA consists of nucleotide units. D: false, polyethylene is an addition polymer. Display-order verdicts: A: correct. B: correct. C: correct. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-21"
    },
    "partialCreditMode": "proportional"
  },
];
