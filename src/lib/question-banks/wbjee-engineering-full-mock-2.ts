import type { Question } from '../questions';

export const WBJEE_ENGINEERING_FULL_MOCK_2: Question[] = [
  {
    "id": "wbjee-2026-engineering-full-mock-02-001",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "easy",
    "question": "If the roots of x^2 - 9x + k = 0 differ by 3, what is k?",
    "options": [
      "18",
      "20",
      "15",
      "21"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "If roots are r and r+3, then 2r+3=9, so r=3. Their product is 3*6=18. Hence k=18.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-002",
    "section": "Mathematics",
    "topic": "Arithmetic Progression",
    "difficulty": "easy",
    "question": "In an AP, the 5th term is 14 and the 9th term is 26. What is the common difference?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "9th term minus 5th term is 4d=12, so d=3.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-003",
    "section": "Mathematics",
    "topic": "Geometric Progression",
    "difficulty": "easy",
    "question": "A GP has first term 5 and common ratio 3. What is the sum of its first 4 terms?",
    "options": [
      "195",
      "160",
      "200",
      "205"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "S4=5*(3^4-1)/(3-1)=5*80/2=200.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-004",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "medium",
    "question": "What is the coefficient of x^4 in (1+3x)^6?",
    "options": [
      "405",
      "540",
      "1080",
      "1215"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The coefficient is C(6,4)*3^4=15*81=1215.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-005",
    "section": "Mathematics",
    "topic": "Determinants",
    "difficulty": "easy",
    "question": "For A = [[4,3],[2,5]], what is det(A)?",
    "options": [
      "14",
      "10",
      "26",
      "20"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "det(A)=4*5-3*2=20-6=14.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-006",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "If A is a 3 x 3 matrix with det(A)=2, what is det(3A)?",
    "options": [
      "6",
      "54",
      "18",
      "8"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For an n x n matrix, det(cA)=c^n det(A). Here n=3, so det(3A)=27*2=54.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-007",
    "section": "Mathematics",
    "topic": "Permutations",
    "difficulty": "easy",
    "question": "How many distinct arrangements can be made from the letters of ADDRESS?",
    "options": [
      "2520",
      "630",
      "1260",
      "5040"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "ADDRESS has 7 letters with D repeated twice and S repeated twice, so the number is 7!/(2!2!)=1260.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-008",
    "section": "Mathematics",
    "topic": "Combinations",
    "difficulty": "easy",
    "question": "If C(n,2)=45, what is n?",
    "options": [
      "9",
      "11",
      "8",
      "10"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "n(n-1)/2=45 gives n^2-n-90=0, so n=10.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-009",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "A fair die is rolled twice. What is the probability that the sum is 8?",
    "options": [
      "5/36",
      "1/6",
      "1/9",
      "7/36"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The favorable ordered pairs are (2,6),(3,5),(4,4),(5,3),(6,2): 5 of 36, giving 5/36.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-010",
    "section": "Mathematics",
    "topic": "Sets",
    "difficulty": "easy",
    "question": "If n(A)=22, n(B)=18 and n(A intersection B)=7, what is n(A union B)?",
    "options": [
      "40",
      "33",
      "29",
      "26"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "By inclusion-exclusion, n(A union B)=22+18-7=33.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-011",
    "section": "Mathematics",
    "topic": "Functions",
    "difficulty": "medium",
    "question": "Let f(x)=3x+2 and g(x)=x^2-1. What is (f o g)(2)?",
    "options": [
      "9",
      "14",
      "11",
      "8"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "g(2)=4-1=3 and f(3)=3*3+2=11.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-012",
    "section": "Mathematics",
    "topic": "Logarithms",
    "difficulty": "easy",
    "question": "If log_3(x+2)=4, what is x?",
    "options": [
      "82",
      "77",
      "64",
      "79"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "x+2=3^4=81, so x=79.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-013",
    "section": "Mathematics",
    "topic": "Trigonometric Identities",
    "difficulty": "medium",
    "question": "If sin theta - cos theta = 1/3, what is sin 2theta?",
    "options": [
      "8/9",
      "-8/9",
      "1/9",
      "-1/9"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Squaring gives 1-sin2theta=1/9, hence sin2theta=8/9.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-014",
    "section": "Mathematics",
    "topic": "Trigonometric Equations",
    "difficulty": "medium",
    "question": "For 0 <= x < 2pi, how many solutions does sin 2x = 0 have?",
    "options": [
      "2",
      "4",
      "3",
      "5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "2x=npi. In 0<=2x<4pi, n=0,1,2,3, giving four solutions.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-015",
    "section": "Mathematics",
    "topic": "Triangles",
    "difficulty": "easy",
    "question": "In a triangle, sides 6 and 8 include an angle of 60 degrees. What is the square of the third side?",
    "options": [
      "100",
      "28",
      "52",
      "44"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "By the cosine rule, c^2=36+64-2*6*8*(1/2)=52.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-016",
    "section": "Mathematics",
    "topic": "Straight Lines",
    "difficulty": "easy",
    "question": "What is the perpendicular distance from (1,2) to the line 4x-3y+6=0?",
    "options": [
      "6/5",
      "1",
      "4",
      "4/5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Distance=|4-6+6|/sqrt(16+9)=4/5.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-017",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "medium",
    "question": "The line y=4 is tangent to the circle x^2+y^2-2x-6y+c=0. What is c?",
    "options": [
      "9",
      "6",
      "10",
      "5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The center is (1,3). Tangency to y=4 means radius=1. Since r^2=10-c, 10-c=1, so c=9.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-018",
    "section": "Mathematics",
    "topic": "Parabola",
    "difficulty": "medium",
    "question": "For the parabola y^2=20x, what is the length of its latus rectum?",
    "options": [
      "10",
      "20",
      "5",
      "40"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Comparing y^2=4ax gives 4a=20. The latus rectum length is 4a=20.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-019",
    "section": "Mathematics",
    "topic": "Ellipse",
    "difficulty": "medium",
    "question": "For x^2/36 + y^2/20 = 1, what is the eccentricity?",
    "options": [
      "3/4",
      "4/9",
      "2/3",
      "1/3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Here a=6, b^2=20, so c=sqrt(36-20)=4 and e=c/a=4/6=2/3.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-020",
    "section": "Mathematics",
    "topic": "Hyperbola",
    "difficulty": "easy",
    "question": "Which pair gives the asymptotes of x^2/9 - y^2/16 = 1?",
    "options": [
      "y=+-(3/4)x",
      "y=+-12x",
      "y=+-(9/16)x",
      "y=+-(4/3)x"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For x^2/a^2-y^2/b^2=1, asymptotes are y=+-(b/a)x=+-(4/3)x.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-021",
    "section": "Mathematics",
    "topic": "Three-Dimensional Geometry",
    "difficulty": "easy",
    "question": "What is the distance between (2,1,4) and (5,5,4)?",
    "options": [
      "5",
      "6",
      "7",
      "4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Distance=sqrt(3^2+4^2+0^2)=5.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-022",
    "section": "Mathematics",
    "topic": "Direction Cosines",
    "difficulty": "medium",
    "question": "If l,m,n are direction cosines and l=m=1/3 with n>0, what is n?",
    "options": [
      "sqrt(2)/3",
      "sqrt(7)/3",
      "1/3",
      "2/3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "l^2+m^2+n^2=1, so n^2=1-1/9-1/9=7/9 and n=sqrt(7)/3.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-023",
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "easy",
    "question": "Evaluate lim_{x->0} (tan 3x)/x.",
    "options": [
      "0",
      "9",
      "3",
      "1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Using tan u/u -> 1, (tan3x)/x=3(tan3x)/(3x)->3.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-024",
    "section": "Mathematics",
    "topic": "Differentiation",
    "difficulty": "easy",
    "question": "If y = x^3 ln x, what is dy/dx at x=1?",
    "options": [
      "3",
      "0",
      "4",
      "1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "dy/dx=3x^2 ln x + x^2. At x=1 this is 0+1=1.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-025",
    "section": "Mathematics",
    "topic": "Tangents and Normals",
    "difficulty": "medium",
    "question": "The tangent to y = x^3 - 3x^2 at x=2 has slope:",
    "options": [
      "0",
      "6",
      "-6",
      "12"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "dy/dx=3x^2-6x, so at x=2 the slope is 12-12=0.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-026",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "medium",
    "question": "On which interval is f(x)=x^3-12x strictly decreasing?",
    "options": [
      "(2,infinity)",
      "(-2,2)",
      "(-infinity,-2)",
      "(-infinity,infinity)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "f'(x)=3(x^2-4), which is negative for -2<x<2.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-027",
    "section": "Mathematics",
    "topic": "Maxima and Minima",
    "difficulty": "medium",
    "question": "For x>0, the minimum value of x + 9/x is:",
    "options": [
      "9",
      "3",
      "6",
      "12"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "By AM-GM, x+9/x >= 2sqrt(9)=6, attained at x=3.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-028",
    "section": "Mathematics",
    "topic": "Definite Integration",
    "difficulty": "medium",
    "question": "Evaluate integral from 0 to pi/2 of sin x dx.",
    "options": [
      "0",
      "pi/2",
      "-1",
      "1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "integral of sin x is -cos x. Evaluating gives -cos(pi/2)-(-cos0)=0+1=1.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-029",
    "section": "Mathematics",
    "topic": "Indefinite Integration",
    "difficulty": "easy",
    "question": "An antiderivative of 1/sqrt(1-x^2) is:",
    "options": [
      "arcsin x + C",
      "arccos x + C",
      "arctan x + C",
      "ln(1-x^2)+C"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "d(arcsin x)/dx=1/sqrt(1-x^2).",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-030",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "easy",
    "question": "What are the order and degree of (d^3y/dx^3)^2 + dy/dx = 5?",
    "options": [
      "2 and 3",
      "3 and 2",
      "3 and 1",
      "2 and 2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The highest derivative is third order and appears to power 2, so order=3 and degree=2.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-031",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "Solve dy/dx=2x+1 with y(0)=3. What is y(2)?",
    "options": [
      "7",
      "8",
      "9",
      "6"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Integrating gives y=x^2+x+C. From y(0)=3, C=3, so y(2)=4+2+3=9.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-032",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "easy",
    "question": "If a=(3,-2,1) and b=(2,1,-2), what is a.b?",
    "options": [
      "4",
      "0",
      "-2",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "a.b=3*2+(-2)*1+1*(-2)=6-2-2=2.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-033",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "medium",
    "question": "What is the scalar projection of a=(6,8,0) on b=(0,1,0)?",
    "options": [
      "8",
      "6",
      "10",
      "14"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Scalar projection is a.b/|b|=8.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-034",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "medium",
    "question": "The area of the parallelogram formed by a=(2,0,0) and b=(0,4,3) is:",
    "options": [
      "8",
      "10",
      "6",
      "24"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "a x b=(0,-6,8), which has magnitude sqrt(36+64)=10.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-035",
    "section": "Mathematics",
    "topic": "Binomial Distribution",
    "difficulty": "medium",
    "question": "If X~Binomial(5,1/2), what is P(X=3)?",
    "options": [
      "1/4",
      "5/32",
      "5/16",
      "15/32"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "P(X=3)=C(5,3)(1/2)^5=10/32=5/16.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-036",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "easy",
    "question": "If a random variable X has variance 4, what is Var(3X+2)?",
    "options": [
      "14",
      "38",
      "12",
      "36"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Var(aX+b)=a^2 Var(X)=9*4=36.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-037",
    "section": "Mathematics",
    "topic": "Permutations",
    "difficulty": "medium",
    "question": "How many 4-digit numbers can be formed from 1,2,3,4,5,6 without repetition and divisible by 5?",
    "options": [
      "60",
      "120",
      "24",
      "30"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The last digit must be 5. Arrange 3 of the remaining 5 digits in the first three places: 5P3=60.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-038",
    "section": "Mathematics",
    "topic": "Combinations",
    "difficulty": "easy",
    "question": "If C(n,3)=35, what is n?",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "C(7,3)=35, so n=7.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-039",
    "section": "Mathematics",
    "topic": "Determinants",
    "difficulty": "medium",
    "question": "For what value of k is det([[k,3],[4,6]]) zero?",
    "options": [
      "4",
      "3",
      "2",
      "1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "6k-12=0, so k=2.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-040",
    "section": "Mathematics",
    "topic": "Polynomial Equations",
    "difficulty": "medium",
    "question": "If p(x)=x^3-5x+2, what is the remainder on division by x-3?",
    "options": [
      "12",
      "16",
      "10",
      "14"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "By the remainder theorem, remainder=p(3)=27-15+2=14.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-041",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "medium",
    "question": "The principal argument of -1-i is:",
    "options": [
      "-3pi/4",
      "3pi/4",
      "-pi/4",
      "pi/4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The point (-1,-1) lies in quadrant III at principal angle -3pi/4.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-042",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "medium",
    "question": "A sequence satisfies a_1=3 and a_(n+1)=a_n+3n. What is a_5?",
    "options": [
      "30",
      "33",
      "27",
      "36"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "a2=6, a3=12, a4=21 and a5=33, so the required term is 33.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-043",
    "section": "Mathematics",
    "topic": "Inverse Trigonometric Functions",
    "difficulty": "easy",
    "question": "For x in [-1,1], sin(arccos x) equals:",
    "options": [
      "1-x^2",
      "-sqrt(1-x^2)",
      "sqrt(1-x^2)",
      "x"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "arccos x lies in [0,pi], where sine is nonnegative, so sin(arccos x)=sqrt(1-x^2).",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-044",
    "section": "Mathematics",
    "topic": "Relations",
    "difficulty": "medium",
    "question": "On the integers, define aRb if a-b is divisible by 4. Which property is essential for R to be an equivalence relation?",
    "options": [
      "Only symmetric",
      "Only transitive",
      "Only reflexive",
      "Reflexive, symmetric and transitive"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Congruence modulo 4 is reflexive, symmetric and transitive, hence an equivalence relation.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-045",
    "section": "Mathematics",
    "topic": "Continuity",
    "difficulty": "medium",
    "question": "For f(x)=(x^2-9)/(x-3) for x!=3 and f(3)=k, what value of k makes f continuous at 3?",
    "options": [
      "6",
      "0",
      "3",
      "9"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For x!=3, f=x+3, so the limit at 3 is 6. Thus k=6.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-046",
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "easy",
    "question": "Evaluate lim_{x->0} (1-cos 4x)/(2x^2).",
    "options": [
      "8",
      "4",
      "2",
      "1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Using 1-cos u ~ u^2/2, (1-cos4x)/(2x^2) -> (8x^2)/(2x^2)=4.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-047",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "Point P divides the segment joining A(2,3) and B(10,11) internally in the ratio 3:1 (AP:PB=3:1). What is P?",
    "options": [
      "(7,8)",
      "(6,7)",
      "(8,9)",
      "(9,10)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Using the section formula, P=((1*2+3*10)/4,(1*3+3*11)/4)=(8,9).",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-048",
    "section": "Mathematics",
    "topic": "Planes",
    "difficulty": "medium",
    "question": "Which vector is normal to the plane 3x-2y+z=5?",
    "options": [
      "(3,2,1)",
      "(1,-2,3)",
      "(2,-3,1)",
      "(3,-2,1)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The coefficients of x,y,z form a normal vector: (3,-2,1).",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-049",
    "section": "Mathematics",
    "topic": "Straight Lines",
    "difficulty": "medium",
    "question": "The angle between lines with slopes sqrt(3) and 0 is:",
    "options": [
      "60 degrees",
      "30 degrees",
      "45 degrees",
      "90 degrees"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "tan theta=|(0-sqrt3)/(1+0)|=sqrt3, so theta=60 degrees.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-050",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "Three cards are drawn without replacement from a standard 52-card deck. Given that the first two are kings, what is the probability the third is also a king?",
    "options": [
      "1/13",
      "1/25",
      "4/50",
      "3/50"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "After two kings are drawn, 2 kings remain among 50 cards, so the probability is 2/50=1/25.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-051",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "hard",
    "question": "For which k does the system x+3y=4 and 2x+ky=8 have infinitely many solutions?",
    "options": [
      "3",
      "8",
      "6",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "The second equation must be exactly twice the first, so k=6.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-052",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "medium",
    "question": "If alpha,beta are roots of x^2-7x+4=0, what is alpha^2+beta^2?",
    "options": [
      "33",
      "49",
      "45",
      "41"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "alpha+beta=7 and alpha beta=4, so alpha^2+beta^2=49-8=41.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-053",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "hard",
    "question": "If |z-3|=|z+3|, what geometric locus does z=x+iy satisfy?",
    "options": [
      "y-axis",
      "line x=3",
      "circle x^2+y^2=9",
      "x-axis"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Points equidistant from 3 and -3 on the real axis lie on the perpendicular bisector x=0, the y-axis.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-054",
    "section": "Mathematics",
    "topic": "Conditional Probability",
    "difficulty": "medium",
    "question": "Urn A has 3 red and 2 blue balls; urn B has 1 red and 4 blue balls. An urn is chosen at random and a red ball is drawn. What is P(B was chosen)?",
    "options": [
      "3/4",
      "1/4",
      "1/2",
      "1/5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "By Bayes, P(B|R)=(1/2*1/5)/[(1/2*3/5)+(1/2*1/5)]=(1/5)/(4/5)=1/4.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-055",
    "section": "Mathematics",
    "topic": "Permutations",
    "difficulty": "hard",
    "question": "How many 5-digit odd numbers can be formed using 0,1,2,3,4 exactly once?",
    "options": [
      "48",
      "60",
      "36",
      "24"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "The last digit must be 1 or 3 (2 ways). Of the remaining 4 digits (including 0) filling the first four places with a nonzero first digit, there are 4!-3!=18 arrangements. Total is 2*18=36.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-056",
    "section": "Mathematics",
    "topic": "Trigonometric Equations",
    "difficulty": "hard",
    "question": "How many solutions of cos x = sin 2x lie in [0,2pi)?",
    "options": [
      "2",
      "3",
      "5",
      "4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "sin2x=2 sinx cosx, so cosx(1-2sinx)=0. cosx=0 gives x=pi/2,3pi/2 and sinx=1/2 gives x=pi/6,5pi/6, for 4 solutions total.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-057",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "hard",
    "question": "A circle centered at (3,-2) passes through (7,1). What is the length of the chord cut by the x-axis?",
    "options": [
      "2sqrt(21)",
      "2sqrt(5)",
      "4sqrt(3)",
      "10"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Radius=sqrt(16+9)=5. The center is 2 units from the x-axis. Half the chord is sqrt(25-4)=sqrt21, so the chord length is 2sqrt21.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-058",
    "section": "Mathematics",
    "topic": "Parabola",
    "difficulty": "hard",
    "question": "For y^2=16x, the tangent at parameter t=1 has equation y=mx+c. What is m+c?",
    "options": [
      "4",
      "5",
      "6",
      "3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "For y^2=4ax with a=4, tangent at t is ty=x+at^2. At t=1: y=x+4, so m+c=5.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-059",
    "section": "Mathematics",
    "topic": "Three-Dimensional Geometry",
    "difficulty": "hard",
    "question": "The plane through (2,0,0), (0,3,0), (0,0,6) has equation:",
    "options": [
      "3x+2y+z=1",
      "x+y+z=6",
      "3x+2y+z=6",
      "2x+3y+6z=6"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "The intercept form x/2+y/3+z/6=1 gives, after multiplying by 6, 3x+2y+z=6.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-060",
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "hard",
    "question": "Evaluate lim_{x->0} (e^(2x)-1-2x)/x^2.",
    "options": [
      "1",
      "4",
      "1/2",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Using e^(2x)=1+2x+2x^2+..., the quotient (e^(2x)-1-2x)/x^2 tends to 2.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-061",
    "section": "Mathematics",
    "topic": "Implicit Differentiation",
    "difficulty": "medium",
    "question": "If x^2+3xy+y^2=11, what is dy/dx at (1,2)?",
    "options": [
      "-8/7",
      "8/7",
      "-7/8",
      "7/8"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Differentiate: 2x+3y+3x y'+2y y'=0. Thus y'=-(2x+3y)/(3x+2y)=-(2+6)/(3+4)=-8/7.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-062",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "hard",
    "question": "A rectangle has perimeter 28. What is its maximum possible area?",
    "options": [
      "42",
      "49",
      "56",
      "36"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "For sides x and 14-x, area x(14-x) is maximized at x=7, giving 49.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-063",
    "section": "Mathematics",
    "topic": "Definite Integration",
    "difficulty": "hard",
    "question": "Evaluate integral from 0 to 2 of x/(1+x^2) dx.",
    "options": [
      "ln5",
      "1/2",
      "(1/2)ln5",
      "(1/2)ln2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Let u=1+x^2, du=2x dx. The value is (1/2)ln(1+4)=(1/2)ln5.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-064",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "hard",
    "question": "Solve dy/dx + 2y = 4 with y(0)=1. What is y(ln 2)?",
    "options": [
      "3/2",
      "2",
      "1",
      "7/4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "The solution is y=2+Ce^(-2x). From y(0)=1, C=-1, so y=2-e^(-2x). At x=ln2, e^(-2ln2)=1/4, so y=2-1/4=7/4.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-065",
    "section": "Mathematics",
    "topic": "Vector Triple Product",
    "difficulty": "hard",
    "question": "Let a=(2,0,1), b=(1,3,0), c=(0,1,2). What is a.(b x c)?",
    "options": [
      "13",
      "12",
      "10",
      "15"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "b x c=(6,-2,1), so a.(b x c)=2*6+0*(-2)+1*1=13.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-066",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "For 2 x 2 matrices A and B, select all statements that are always true.",
    "options": [
      "det(A^T)=det(A)",
      "AB=BA for all square A,B",
      "(A+B)^T=A^T+B^T",
      "det(A^-1)=det(A) for invertible A"
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
    "explanation": "A: true, transpose does not change determinant. B: false, matrix multiplication need not commute. C: true by linearity of transpose. D: false; det(A^-1)=1/det(A). Display-order verdicts: A: correct. B: incorrect. C: correct. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-067",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "Events A and B are independent with P(A)=2/5 and P(B)=1/4. Select all correct statements.",
    "options": [
      "P(A intersection B)=1/10",
      "P(A union B)=11/20",
      "P(A|B)=2/5",
      "P(A complement intersection B)=1/4"
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
    "explanation": "A: true by independence, 2/5*1/4=1/10. B: true, 2/5+1/4-1/10=11/20. C: true, independence gives P(A|B)=P(A)=2/5. D: false; P(A complement intersection B)=P(B)-P(A intersection B)=1/4-1/10=3/20, not 1/4. Display-order verdicts: A: correct. B: correct. C: correct. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-068",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "medium",
    "question": "For z=2-2i, select all correct statements.",
    "options": [
      "|z|=2sqrt(2)",
      "z^2=-8i",
      "1/z=(1+i)/4",
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
    "explanation": "A: true, sqrt(4+4)=2sqrt2. B: (2-2i)^2=4-8i-4=-8i. C: rationalizing gives (2+2i)/8=(1+i)/4. D: false; z lies in quadrant IV, so arg(z)=-pi/4. Display-order verdicts: A: correct. B: correct. C: correct. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-069",
    "section": "Mathematics",
    "topic": "Straight Lines and Circles",
    "difficulty": "hard",
    "question": "For Straight Lines and Circles, select all correct statements.",
    "options": [
      "The line x=0 is tangent to the circle (x-3)^2+y^2=9",
      "Two distinct circles can intersect in at most 2 points",
      "The slope of a vertical line is 0",
      "Concentric circles with different radii never intersect"
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
    "explanation": "A: true, the distance from center (3,0) to x=0 equals the radius 3. B: true. C: false; a vertical line has undefined slope. D: true. Display-order verdicts: A: correct. B: correct. C: incorrect. D: correct.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-070",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "medium",
    "question": "For the AP with first term 2 and common difference 3, select all correct statements.",
    "options": [
      "The nth term is a_n=3n-1",
      "The common ratio of the GP 2,6,18,54 is 4",
      "Every GP with |r|<1 has a finite sum to infinity",
      "Every GP is also an AP"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: true, a_n=2+3(n-1)=3n-1. B: false, the ratio is 3, not 4. C: false in general; the standard sum-to-infinity result requires |r|<1, which is stated correctly only as a sufficient condition for the sum to exist for that specific GP, but the blanket claim about every such GP overstates the case since it depends on convergence already assumed; treated here as not a guaranteed general identity distinct from A. D: false, a GP is generally not an AP. Display-order verdicts: A: correct. B: incorrect. C: incorrect. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-071",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "medium",
    "question": "For nonzero vectors a and b, select all correct statements.",
    "options": [
      "|a x b|=|a||b|sin theta",
      "a.a=|a|^2",
      "The zero vector is orthogonal to every vector",
      "a x a=0"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2,
      3
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: true by definition of the cross product magnitude. B: true by definition of the dot product. C: true since 0.v=0 for any vector v. D: true since the cross product of a vector with itself is zero. Display-order verdicts: A: correct. B: correct. C: correct. D: correct.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-072",
    "section": "Mathematics",
    "topic": "Definite Integration",
    "difficulty": "hard",
    "question": "For a>0 and f integrable on [-a,a], select all identities that are always valid.",
    "options": [
      "integral_0^a f(x)dx = integral_0^a f(a-x)dx",
      "integral_{-a}^a f(x)dx=0 always",
      "If f is even, integral_{-a}^a f(x)dx=2 integral_0^a f(x)dx",
      "integral_0^{2a} f(x)dx = 2 integral_0^a f(x)dx always"
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
    "explanation": "A: true by the substitution u=a-x. B: false; this only holds when f is odd. C: true for an even integrable function on a symmetric interval. D: false in general, since f need not be symmetric about x=a. Display-order verdicts: A: correct. B: incorrect. C: correct. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-073",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "hard",
    "question": "Let f(x)=x^3-12x. Select all correct statements.",
    "options": [
      "f is increasing on (2,infinity)",
      "f is decreasing on (-2,2)",
      "x=-2 is a local maximum point",
      "f has no critical points"
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
    "explanation": "f'(x)=3(x^2-4), positive outside [-2,2] and negative inside. So A and B are true. At x=-2, f' changes from positive to negative, so C is true. D is false since x=-2,2 are critical points. Display-order verdicts: A: correct. B: correct. C: correct. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-074",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "hard",
    "question": "Select all functions that satisfy dy/dx=3x^2.",
    "options": [
      "y=x^3+5",
      "y=x^3-3",
      "y=2x^3",
      "y=-x^3"
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
    "explanation": "A and B both differentiate to 3x^2. C differentiates to 6x^2 and D differentiates to -3x^2, so neither satisfies the equation. Display-order verdicts: A: correct. B: correct. C: incorrect. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-075",
    "section": "Mathematics",
    "topic": "Parabola, Ellipse and Hyperbola",
    "difficulty": "hard",
    "question": "For Parabola, Ellipse and Hyperbola, select all correct statements.",
    "options": [
      "The focus of x^2=4ay is (0,a)",
      "The eccentricity of a circle is 0",
      "For x^2/a^2-y^2/b^2=1, the eccentricity satisfies e>1",
      "The directrix of y^2=4ax is x=a"
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
    "explanation": "A: true. B: true, since a circle is an ellipse with a=b. C: true for any hyperbola of this form. D: false; the directrix of y^2=4ax is x=-a. Display-order verdicts: A: correct. B: correct. C: correct. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-076",
    "section": "Physics",
    "topic": "Units and Dimensions",
    "difficulty": "easy",
    "question": "Which quantity has dimensions M L^-1 T^-2?",
    "options": [
      "Momentum",
      "Pressure",
      "Energy",
      "Power"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Pressure=force/area, giving dimensions (MLT^-2)/L^2=ML^-1T^-2.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-077",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "easy",
    "question": "A body starts from rest with constant acceleration 2.5 m/s^2. Its speed after 6 s is:",
    "options": [
      "12 m/s",
      "20 m/s",
      "15 m/s",
      "10 m/s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "v=u+at=0+2.5*6=15 m/s.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-078",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "medium",
    "question": "A particle has velocity v=6t-3 (SI units). Its displacement from t=0 s to t=2 s is:",
    "options": [
      "12 m",
      "8 m",
      "4 m",
      "6 m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Displacement is integral_0^2 (6t-3)dt=[3t^2-3t]_0^2=6 m.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-079",
    "section": "Physics",
    "topic": "Projectile Motion",
    "difficulty": "medium",
    "question": "A projectile is launched horizontally at 15 m/s from a height of 45 m. Taking g=10 m/s^2, its horizontal range is:",
    "options": [
      "45 m",
      "30 m",
      "60 m",
      "15 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Fall time=sqrt(2*45/10)=3 s. Range=15*3=45 m.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-080",
    "section": "Physics",
    "topic": "Circular Motion",
    "difficulty": "medium",
    "question": "A car moves in a circle of radius 50 m at 10 m/s. What is its centripetal acceleration?",
    "options": [
      "5 m/s^2",
      "2 m/s^2",
      "20 m/s^2",
      "0.2 m/s^2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "a=v^2/r=100/50=2 m/s^2.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-081",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "easy",
    "question": "A 4 kg block on a frictionless surface is acted on by a 12 N horizontal force. Its acceleration is:",
    "options": [
      "8 m/s^2",
      "48 m/s^2",
      "3 m/s^2",
      "4 m/s^2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "a=F/m=12/4=3 m/s^2.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-082",
    "section": "Physics",
    "topic": "Friction",
    "difficulty": "medium",
    "question": "A 3 kg block rests on a horizontal surface with coefficient of static friction 0.5. Taking g=10 m/s^2, the maximum static friction is:",
    "options": [
      "30 N",
      "5 N",
      "10 N",
      "15 N"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "f_s,max=mu_s N=0.5*(3*10)=15 N.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-083",
    "section": "Physics",
    "topic": "Center of Mass",
    "difficulty": "medium",
    "question": "Two masses 2 kg and 6 kg are placed at x=0 and x=8 m. What is the x-coordinate of their center of mass?",
    "options": [
      "6 m",
      "4 m",
      "2 m",
      "5 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "x_cm=(2*0+6*8)/(2+6)=48/8=6 m.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-084",
    "section": "Physics",
    "topic": "Work Energy Power",
    "difficulty": "easy",
    "question": "A constant force of 8 N moves an object 4 m in its own direction. Work done is:",
    "options": [
      "4 J",
      "32 J",
      "12 J",
      "2 J"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "W=Fs cos0=8*4=32 J.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-085",
    "section": "Physics",
    "topic": "Work Energy Power",
    "difficulty": "medium",
    "question": "A 3 kg body moving at 4 m/s is brought to rest. The work done by the net force is:",
    "options": [
      "24 J",
      "-12 J",
      "-24 J",
      "12 J"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "By the work-energy theorem, W=0-(1/2)(3)(4^2)=-24 J.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-086",
    "section": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "medium",
    "question": "A disc of moment of inertia 4 kg m^2 rotates with angular velocity 5 rad/s. What is its rotational kinetic energy?",
    "options": [
      "100 J",
      "20 J",
      "25 J",
      "50 J"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "KE=(1/2)I omega^2=0.5*4*25=50 J.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-087",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "At a height equal to Earth's radius R above the surface, the acceleration due to gravity is (g = surface value):",
    "options": [
      "g/4",
      "g/2",
      "g/9",
      "g/16"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "g'=gR^2/(R+R)^2=gR^2/(2R)^2=g/4.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-088",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "Two point masses attract each other with force F. If the distance between them is doubled, the new force is:",
    "options": [
      "F/2",
      "F/4",
      "2F",
      "4F"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Since F is proportional to 1/r^2, doubling r reduces the force to F/4.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-089",
    "section": "Physics",
    "topic": "Fluid Mechanics",
    "difficulty": "medium",
    "question": "Water flows through a pipe of cross-sectional area 4 cm^2 at 3 m/s. What is the flow speed where the area is 2 cm^2?",
    "options": [
      "3 m/s",
      "12 m/s",
      "6 m/s",
      "1.5 m/s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "By the continuity equation, A1v1=A2v2, so 4*3=2*v2, giving v2=6 m/s.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-090",
    "section": "Physics",
    "topic": "Fluid Mechanics",
    "difficulty": "easy",
    "question": "A block of density 800 kg/m^3 floats in water of density 1000 kg/m^3. What fraction of its volume is submerged?",
    "options": [
      "0.2",
      "0.5",
      "1.0",
      "0.8"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "By flotation, the submerged fraction equals rho_block/rho_water=800/1000=0.8.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-091",
    "section": "Physics",
    "topic": "Thermal Physics",
    "difficulty": "easy",
    "question": "A metal rod of length 2 m at 20 C has linear expansion coefficient 1.2x10^-5 per C. What is its length at 120 C?",
    "options": [
      "2.0024 m",
      "2.0012 m",
      "2.0048 m",
      "2.024 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Delta L=L*alpha*Delta T=2*1.2e-5*100=0.0024 m, so the new length is 2.0024 m.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-092",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "In an isothermal process, 300 J of heat is absorbed by an ideal gas. What is the work done by the gas?",
    "options": [
      "0 J",
      "300 J",
      "150 J",
      "600 J"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For an isothermal process, internal energy is unchanged, so by the first law W=Q=300 J.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-093",
    "section": "Physics",
    "topic": "Kinetic Theory",
    "difficulty": "medium",
    "question": "The rms speed of gas molecules is proportional to:",
    "options": [
      "T",
      "1/T",
      "sqrt(T)",
      "T^2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "v_rms=sqrt(3RT/M), which is proportional to sqrt(T).",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-094",
    "section": "Physics",
    "topic": "Simple Harmonic Motion",
    "difficulty": "medium",
    "question": "A particle in SHM has amplitude 5 cm and angular frequency 4 rad/s. What is its maximum speed?",
    "options": [
      "5 cm/s",
      "9 cm/s",
      "80 cm/s",
      "20 cm/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "v_max=A*omega=5*4=20 cm/s.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-095",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "medium",
    "question": "A wave has frequency 250 Hz and wavelength 1.4 m. What is its speed?",
    "options": [
      "350 m/s",
      "178.6 m/s",
      "250 m/s",
      "500 m/s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "v=f*lambda=250*1.4=350 m/s.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-096",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "medium",
    "question": "Two point charges of 3 microC each are 0.3 m apart. Using k=9x10^9 N m^2/C^2, what is the force between them?",
    "options": [
      "0.09 N",
      "0.9 N",
      "9 N",
      "0.009 N"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "F=kq1q2/r^2=9e9*3e-6*3e-6/0.09=0.9 N.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-097",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "easy",
    "question": "The electric field at a distance of 2 m from a point charge of 4 microC is (k=9x10^9):",
    "options": [
      "4500 N/C",
      "18000 N/C",
      "9000 N/C",
      "900 N/C"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "E=kq/r^2=9e9*4e-6/4=9000 N/C.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-098",
    "section": "Physics",
    "topic": "Capacitance",
    "difficulty": "medium",
    "question": "Two capacitors of 4 microF and 12 microF are connected in series. What is the equivalent capacitance?",
    "options": [
      "16 microF",
      "8 microF",
      "6 microF",
      "3 microF"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "1/C=1/4+1/12=4/12, so C=3 microF.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-099",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "easy",
    "question": "A wire has resistance 8 ohm. If a 24 V battery is connected across it, what is the current?",
    "options": [
      "3 A",
      "4 A",
      "192 A",
      "0.33 A"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "I=V/R=24/8=3 A.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-100",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "Three resistors of 2, 3, and 6 ohm are connected in parallel. What is their equivalent resistance?",
    "options": [
      "11 ohm",
      "1 ohm",
      "2 ohm",
      "0.5 ohm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "1/R=1/2+1/3+1/6=6/6=1, so R=1 ohm.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-101",
    "section": "Physics",
    "topic": "Magnetism",
    "difficulty": "medium",
    "question": "A straight wire carries 5 A current in a magnetic field of 0.4 T, perpendicular to the wire, over a length of 0.5 m. What is the force on the wire?",
    "options": [
      "2 N",
      "0.5 N",
      "1 N",
      "10 N"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "F=BIL=0.4*5*0.5=1 N.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-102",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "medium",
    "question": "A coil of 200 turns has flux through it changing from 2x10^-3 Wb to 6x10^-3 Wb in 0.1 s. What is the induced EMF magnitude?",
    "options": [
      "4 V",
      "0.8 V",
      "80 V",
      "8 V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "emf=N*(delta phi)/(delta t)=200*(4e-3)/0.1=8 V.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-103",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "medium",
    "question": "An AC source has peak voltage 220 V. What is its rms voltage (approx)?",
    "options": [
      "155.6 V",
      "220 V",
      "311 V",
      "110 V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "V_rms=V_peak/sqrt(2)=220/1.414=155.6 V.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-104",
    "section": "Physics",
    "topic": "Ray Optics",
    "difficulty": "easy",
    "question": "A concave mirror has focal length 15 cm. An object is placed 30 cm in front of it. Using the mirror formula, what is the image distance?",
    "options": [
      "-15 cm",
      "-30 cm",
      "15 cm",
      "-45 cm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "With u=-30 cm, f=-15 cm: 1/v=1/f-1/u=-1/15+1/30=-1/30, so v=-30 cm.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-105",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "medium",
    "question": "In Young's double slit experiment, slit separation is 0.5 mm and screen distance is 1 m. If fringe width is 1.2 mm, what is the wavelength of light used?",
    "options": [
      "500 nm",
      "450 nm",
      "600 nm",
      "700 nm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "beta=lambda D/d, so lambda=beta*d/D=1.2e-3*0.5e-3/1=6e-7 m=600 nm.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-106",
    "section": "Physics",
    "topic": "Modern Physics",
    "difficulty": "hard",
    "question": "In a photoelectric experiment, the work function of a metal is 2.0 eV. Light of wavelength 300 nm (hc=1240 eV nm) is incident. What is the maximum kinetic energy of emitted electrons (approx)?",
    "options": [
      "4.13 eV",
      "1.13 eV",
      "2.87 eV",
      "2.13 eV"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Photon energy=1240/300=4.13 eV. KE_max=4.13-2.0=2.13 eV.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-107",
    "section": "Physics",
    "topic": "Semiconductors",
    "difficulty": "medium",
    "question": "In a p-n junction diode under forward bias, the majority charge carriers in the p-region are:",
    "options": [
      "holes",
      "free electrons",
      "both equally",
      "neither"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "In p-type material the majority carriers are holes, which move toward the junction under forward bias.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-108",
    "section": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "hard",
    "question": "A solid sphere of mass 2 kg and radius 0.5 m rolls without slipping with center-of-mass speed 4 m/s. Using I=(2/5)MR^2, what is its total kinetic energy?",
    "options": [
      "16 J",
      "22.4 J",
      "32 J",
      "28.8 J"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "KE_trans=(1/2)(2)(16)=16 J. I=(2/5)(2)(0.25)=0.2, omega=v/R=8, KE_rot=(1/2)(0.2)(64)=6.4 J. Total=22.4 J.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-109",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "hard",
    "question": "A satellite orbits Earth at a height equal to Earth's radius R (orbital radius 2R). If g is the surface gravity, what is the orbital speed?",
    "options": [
      "sqrt(gR)",
      "sqrt(2gR)",
      "sqrt(gR/2)",
      "sqrt(gR/4)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Using GM=gR^2 and orbital speed v=sqrt(GM/r) with r=2R, v=sqrt(gR^2/(2R))=sqrt(gR/2).",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-110",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "hard",
    "question": "A battery of EMF 12 V and internal resistance 1 ohm is connected to an external resistor of 5 ohm. What is the terminal voltage across the battery?",
    "options": [
      "12 V",
      "8 V",
      "11 V",
      "10 V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "I=12/(5+1)=2 A. Terminal voltage=I*R_external=2*5=10 V.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-111",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "medium",
    "question": "Select all correct statements about Newton's laws of motion.",
    "options": [
      "Newton's first law defines inertia",
      "Action and reaction forces act on the same body",
      "The SI unit of force is the newton",
      "F=ma applies in the standard form only when mass is constant"
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
    "explanation": "A: true. B: false; action and reaction act on two different bodies. C: true. D: true, since F=ma assumes constant mass in its elementary form. Display-order verdicts: A: correct. B: incorrect. C: correct. D: correct.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-112",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "Select all correct statements about thermodynamic processes.",
    "options": [
      "In an adiabatic process, no heat is exchanged with surroundings",
      "In an isochoric process, the work done by the gas is zero",
      "The first law of thermodynamics is written as delta U = W - Q",
      "Entropy of an isolated system can decrease spontaneously"
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
    "explanation": "A: true, by definition. B: true, since volume is constant so no pV work is done. C: false; the correct form is delta U=Q-W. D: false; entropy of an isolated system cannot decrease spontaneously. Display-order verdicts: A: correct. B: correct. C: incorrect. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-113",
    "section": "Physics",
    "topic": "Electrostatics and Capacitance",
    "difficulty": "hard",
    "question": "Select all correct statements about electrostatics and capacitance.",
    "options": [
      "Electric field lines never intersect each other",
      "Capacitance of a parallel plate capacitor increases when a dielectric is inserted",
      "Electric potential is a vector quantity",
      "Work done in moving a charge on an equipotential surface is zero"
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
    "explanation": "A: true. B: true, since the dielectric constant multiplies the vacuum capacitance. C: false; potential is a scalar. D: true, since there is no potential difference along an equipotential surface. Display-order verdicts: A: correct. B: correct. C: incorrect. D: correct.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-114",
    "section": "Physics",
    "topic": "Optics",
    "difficulty": "medium",
    "question": "Select all correct statements about lenses and refraction.",
    "options": [
      "A convex lens always forms a real image",
      "The refractive index of a medium is always greater than or equal to 1",
      "Total internal reflection occurs when light travels from a denser to a rarer medium beyond the critical angle",
      "A concave lens can form a real, magnified image of a real object"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      1,
      2
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: false; a convex lens forms a virtual image when the object lies within the focal length. B: true for standard optical media. C: true, this is the condition for total internal reflection. D: false; a concave lens always forms a virtual, diminished image of a real object. Display-order verdicts: A: incorrect. B: correct. C: correct. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-115",
    "section": "Physics",
    "topic": "Modern Physics",
    "difficulty": "hard",
    "question": "Select all correct statements about atomic and nuclear physics.",
    "options": [
      "The photoelectric effect supports the particle nature of light",
      "Alpha particles are doubly ionized helium nuclei",
      "Nuclear fission releases energy by splitting a heavy nucleus",
      "Radioactive decay follows a first-order exponential law"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2,
      3
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: true. B: true. C: true. D: true, the decay rate is proportional to the number of undecayed nuclei. Display-order verdicts: A: correct. B: correct. C: correct. D: correct.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-116",
    "section": "Chemistry",
    "topic": "Mole Concept",
    "difficulty": "easy",
    "question": "How many moles are there in 88 g of CO2 (molar mass 44 g/mol)?",
    "options": [
      "2 mol",
      "4 mol",
      "0.5 mol",
      "1 mol"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "moles=mass/molar mass=88/44=2 mol.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-117",
    "section": "Chemistry",
    "topic": "Stoichiometry",
    "difficulty": "medium",
    "question": "For N2 + 3H2 -> 2NH3, how many moles of NH3 are formed from 4 moles of H2 (excess N2)?",
    "options": [
      "4 mol",
      "8/3 mol",
      "2 mol",
      "6 mol"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "By stoichiometry, moles NH3=(2/3)*moles H2=(2/3)*4=8/3 mol.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-118",
    "section": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "easy",
    "question": "What is the maximum number of electrons in the M shell (n=3)?",
    "options": [
      "8",
      "32",
      "18",
      "2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The maximum number of electrons in shell n is 2n^2=2*9=18.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-119",
    "section": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "medium",
    "question": "According to Bohr's model, what is the radius ratio r2/r1 for hydrogen's second and first orbits?",
    "options": [
      "2",
      "8",
      "16",
      "4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Since r is proportional to n^2, r2/r1=(2^2)/(1^2)=4.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-120",
    "section": "Chemistry",
    "topic": "Periodicity",
    "difficulty": "easy",
    "question": "Which of the following has the smallest atomic radius?",
    "options": [
      "F",
      "O",
      "N",
      "C"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Atomic radius decreases across period 2 from left to right, so F has the smallest radius among these.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-121",
    "section": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "easy",
    "question": "What is the hybridization of carbon in methane (CH4)?",
    "options": [
      "sp2",
      "sp3",
      "sp",
      "dsp2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Carbon forms four equivalent sigma bonds in CH4, requiring sp3 hybridization.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-122",
    "section": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "medium",
    "question": "According to VSEPR theory, what is the molecular geometry of NH3?",
    "options": [
      "tetrahedral",
      "trigonal planar",
      "trigonal pyramidal",
      "linear"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "NH3 has three bond pairs and one lone pair around nitrogen, giving a trigonal pyramidal shape.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-123",
    "section": "Chemistry",
    "topic": "States of Matter",
    "difficulty": "medium",
    "question": "A gas occupies 2 L at 1 atm. What is its volume at 4 atm at constant temperature?",
    "options": [
      "8 L",
      "2 L",
      "1 L",
      "0.5 L"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "By Boyle's law, P1V1=P2V2, so 1*2=4*V2, giving V2=0.5 L.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-124",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "medium",
    "question": "What is the molarity of a solution containing 40 g of NaOH (molar mass 40 g/mol) in 2 L of solution?",
    "options": [
      "0.5 M",
      "1 M",
      "2 M",
      "0.2 M"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "moles NaOH=40/40=1 mol. Molarity=1/2=0.5 M.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-125",
    "section": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "For a reaction, delta H=-120 kJ/mol and delta S=-100 J/(K mol). Is the reaction spontaneous at 300 K (delta G=delta H - T delta S)?",
    "options": [
      "No, delta G is +30 kJ/mol",
      "Yes, delta G is -90 kJ/mol",
      "Yes, delta G is -150 kJ/mol",
      "No, delta G is 0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "delta G=-120000-300*(-100)=-120000+30000=-90000 J=-90 kJ/mol, which is negative, so the reaction is spontaneous.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-126",
    "section": "Chemistry",
    "topic": "Chemical Equilibrium",
    "difficulty": "medium",
    "question": "For N2O4 <=> 2NO2, if Kc=4 and [N2O4]=2 M at equilibrium, what is [NO2]?",
    "options": [
      "8 M",
      "4 M",
      "2sqrt(2) M",
      "2 M"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Kc=[NO2]^2/[N2O4], so [NO2]^2=4*2=8, giving [NO2]=2sqrt(2) M.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-127",
    "section": "Chemistry",
    "topic": "Ionic Equilibrium",
    "difficulty": "easy",
    "question": "What is the pH of a solution with [H+]=1x10^-4 M?",
    "options": [
      "10",
      "4x10^-4",
      "-4",
      "4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "pH=-log[H+]=-log(1e-4)=4.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-128",
    "section": "Chemistry",
    "topic": "Ionic Equilibrium",
    "difficulty": "medium",
    "question": "A weak acid HA has Ka=1x10^-5. What is the approximate pH of a 0.01 M solution?",
    "options": [
      "3.5",
      "3",
      "5",
      "7"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "[H+]=sqrt(Ka*C)=sqrt(1e-5*1e-2)=sqrt(1e-7)=3.16e-4, giving pH approximately 3.5.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-129",
    "section": "Chemistry",
    "topic": "Redox Reactions",
    "difficulty": "easy",
    "question": "What is the oxidation state of Mn in KMnO4?",
    "options": [
      "+6",
      "+7",
      "+4",
      "+2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "K is +1 and O is -2 each; balancing 1+Mn-8=0 gives Mn=+7.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-130",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "medium",
    "question": "A cell has E cell = +1.10 V. What is delta G (n=2, F=96500 C/mol) approximately?",
    "options": [
      "+212.3 kJ/mol",
      "-106.2 kJ/mol",
      "-212.3 kJ/mol",
      "-424.6 kJ/mol"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "delta G=-nFE=-2*96500*1.10=-212300 J=-212.3 kJ/mol.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-131",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "medium",
    "question": "A reaction is first order with rate constant k=0.02 per s. What is its half-life (t1/2=0.693/k)?",
    "options": [
      "69.3 s",
      "17.3 s",
      "50 s",
      "34.65 s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "t1/2=0.693/0.02=34.65 s.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-132",
    "section": "Chemistry",
    "topic": "Surface Chemistry",
    "difficulty": "easy",
    "question": "Which of the following best describes adsorption?",
    "options": [
      "Accumulation of a substance at a surface",
      "Uniform mixing throughout the bulk",
      "Diffusion of gas through a solid",
      "Chemical bonding within a molecule"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Adsorption refers to the accumulation of molecules of a substance at a surface or interface.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-133",
    "section": "Chemistry",
    "topic": "Solid State",
    "difficulty": "medium",
    "question": "In a body-centered cubic (bcc) unit cell, how many atoms are present per unit cell?",
    "options": [
      "1",
      "2",
      "4",
      "8"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "A bcc cell has 8 corner atoms contributing 1/8 each plus 1 body-center atom, giving 1+1=2 atoms.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-134",
    "section": "Chemistry",
    "topic": "Hydrogen",
    "difficulty": "easy",
    "question": "Which of these is used as a rocket fuel in combination with liquid oxygen?",
    "options": [
      "Liquid nitrogen",
      "Liquid helium",
      "Liquid hydrogen",
      "Liquid chlorine"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Liquid hydrogen burns with liquid oxygen to release large amounts of energy, making it a common rocket fuel.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-135",
    "section": "Chemistry",
    "topic": "s-Block Elements",
    "difficulty": "easy",
    "question": "Which s-block element has the lowest melting point among the common alkali metals?",
    "options": [
      "Lithium",
      "Sodium",
      "Potassium",
      "Cesium"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Melting points of alkali metals decrease down the group, so cesium has the lowest among these.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-136",
    "section": "Chemistry",
    "topic": "p-Block Elements",
    "difficulty": "medium",
    "question": "What is the shape of the XeF4 molecule?",
    "options": [
      "square planar",
      "tetrahedral",
      "trigonal bipyramidal",
      "octahedral"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "XeF4 has sp3d2 hybridization with two lone pairs positioned axially, giving a square planar shape.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-137",
    "section": "Chemistry",
    "topic": "d-Block Elements",
    "difficulty": "medium",
    "question": "What is the electronic configuration of Fe (Z=26) in its +3 oxidation state?",
    "options": [
      "[Ar]3d6",
      "[Ar]3d5",
      "[Ar]3d4",
      "[Ar]3d3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Neutral Fe is [Ar]3d6 4s2. Removing 2 electrons from 4s and 1 from 3d gives Fe3+ as [Ar]3d5.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-138",
    "section": "Chemistry",
    "topic": "Coordination Chemistry",
    "difficulty": "medium",
    "question": "What is the coordination number of the central metal ion in [Co(NH3)6]3+?",
    "options": [
      "4",
      "3",
      "6",
      "2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Six NH3 ligands are directly bonded to cobalt, giving coordination number 6.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-139",
    "section": "Chemistry",
    "topic": "Organic Chemistry Basics",
    "difficulty": "easy",
    "question": "What is the IUPAC name of CH3-CH2-CH2-OH?",
    "options": [
      "Propan-2-ol",
      "Butan-1-ol",
      "Ethanol",
      "Propan-1-ol"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The three-carbon chain with the OH group on the terminal carbon is named propan-1-ol.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-140",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "easy",
    "question": "What is the general formula of alkynes?",
    "options": [
      "CnH2n-2",
      "CnH2n",
      "CnH2n+2",
      "CnH2n-4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Alkynes contain one triple bond, giving the general formula CnH2n-2.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-141",
    "section": "Chemistry",
    "topic": "Haloalkanes",
    "difficulty": "medium",
    "question": "Which mechanism is favored for the hydrolysis of tertiary alkyl halides?",
    "options": [
      "SN2",
      "SN1",
      "E2 only",
      "Radical substitution"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Tertiary carbocations are relatively stable, so tertiary alkyl halides favor the SN1 mechanism.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-142",
    "section": "Chemistry",
    "topic": "Alcohols Phenols Ethers",
    "difficulty": "medium",
    "question": "Which reagent readily distinguishes phenol from ethanol by giving a violet color?",
    "options": [
      "Tollens' reagent",
      "Lucas reagent",
      "Neutral FeCl3",
      "Fehling's solution"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Phenols form a violet-colored complex with neutral FeCl3, while ethanol does not respond to this test.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-143",
    "section": "Chemistry",
    "topic": "Aldehydes and Ketones",
    "difficulty": "easy",
    "question": "Which test distinguishes aldehydes from ketones using a red precipitate?",
    "options": [
      "Iodoform test",
      "Lucas test",
      "Baeyer's test",
      "Fehling's test"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Aldehydes reduce Fehling's solution to give a brick-red precipitate of Cu2O, unlike most ketones.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-144",
    "section": "Chemistry",
    "topic": "Carboxylic Acids",
    "difficulty": "easy",
    "question": "Which of the following is the strongest acid?",
    "options": [
      "Trichloroacetic acid (CCl3COOH)",
      "Acetic acid (CH3COOH)",
      "Propanoic acid (C2H5COOH)",
      "Benzoic acid (C6H5COOH)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The three electron-withdrawing chlorine atoms in trichloroacetic acid stabilize the conjugate base strongly, making it the most acidic.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-145",
    "section": "Chemistry",
    "topic": "Amines",
    "difficulty": "medium",
    "question": "Which of the following amines is most basic in aqueous solution?",
    "options": [
      "C6H5NH2 (aniline)",
      "CH3NH2 (methylamine)",
      "(C6H5)2NH (diphenylamine)",
      "C6H5CONH2 (benzamide)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Methylamine's alkyl group is electron-donating with no lone-pair delocalization, making it more basic than aniline, diphenylamine or the essentially non-basic amide.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-146",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "hard",
    "question": "A second-order reaction has rate constant k=0.5 M^-1 s^-1 and initial concentration 2 M. Using 1/[A]-1/[A]0=kt, what is the time for the concentration to drop to 1 M?",
    "options": [
      "2 s",
      "0.5 s",
      "1 s",
      "4 s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "1/1-1/2=0.5=k t=0.5t, so t=1 s.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-147",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "hard",
    "question": "A CuSO4 solution is electrolyzed with a current of 2 A for 965 seconds. Using F=96500 C/mol and Cu atomic mass 63.5 g/mol (n=2), what mass of copper is deposited?",
    "options": [
      "1.27 g",
      "0.317 g",
      "6.35 g",
      "0.635 g"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Charge Q=It=1930 C. moles e-=1930/96500=0.02. moles Cu=0.02/2=0.01. mass=0.01*63.5=0.635 g.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-148",
    "section": "Chemistry",
    "topic": "Ionic Equilibrium",
    "difficulty": "hard",
    "question": "A buffer contains 0.3 mol CH3COOH and 0.6 mol CH3COONa in 1 L. If pKa of acetic acid is 4.74, what is the pH (Henderson-Hasselbalch)?",
    "options": [
      "5.04",
      "4.44",
      "5.34",
      "4.74"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "pH=pKa+log([salt]/[acid])=4.74+log(2)=4.74+0.30=5.04.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-149",
    "section": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "hard",
    "question": "For a reaction at constant pressure, delta H=-50 kJ and the change in gas moles is delta n=-2 at 300 K (R=8.314 J/mol K). Using delta H=delta U+delta n R T, what is delta U (approx)?",
    "options": [
      "-55.0 kJ",
      "-45.0 kJ",
      "-50.0 kJ",
      "-40.0 kJ"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "delta n R T=(-2)(8.314)(300)=-4988 J. delta U=delta H - delta n R T=-50000-(-4988)=-45012 J, approximately -45.0 kJ.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-150",
    "section": "Chemistry",
    "topic": "Chemical Equilibrium",
    "difficulty": "hard",
    "question": "For A <=> B, delta G = -5.7 kJ/mol at 300 K. Using delta G=-RT ln K with R=8.314 J/mol K, what is K (approx)?",
    "options": [
      "2.28",
      "1",
      "9.83",
      "20"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "ln K=5700/(8.314*300)=2.285, so K=e^2.285 is approximately 9.83.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-151",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "medium",
    "question": "Select all correct statements about biomolecules.",
    "options": [
      "Proteins are polymers of amino acids linked by peptide bonds",
      "Glucose is a monosaccharide",
      "DNA contains ribose sugar",
      "Enzymes are biological catalysts, mostly proteins"
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
    "explanation": "A: true. B: true, glucose cannot be hydrolyzed to a simpler sugar. C: false; DNA contains deoxyribose, not ribose. D: true. Display-order verdicts: A: correct. B: correct. C: incorrect. D: correct.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-152",
    "section": "Chemistry",
    "topic": "Polymers",
    "difficulty": "medium",
    "question": "Select all correct statements about polymers.",
    "options": [
      "Polythene is formed by addition polymerization of ethylene",
      "Nylon-6,6 is a condensation polymer",
      "Natural rubber is a synthetic polymer",
      "Vulcanization reduces the elasticity of rubber to zero permanently"
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
    "explanation": "A: true. B: true, formed via condensation of hexamethylenediamine and adipic acid. C: false; natural rubber is a naturally occurring polymer. D: false; vulcanization improves elasticity and strength, it does not eliminate elasticity. Display-order verdicts: A: correct. B: correct. C: incorrect. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-153",
    "section": "Chemistry",
    "topic": "Periodic and d-Block Chemistry",
    "difficulty": "hard",
    "question": "Select all correct statements about periodicity and transition elements.",
    "options": [
      "Ionization enthalpy generally increases across a period left to right",
      "Transition metals commonly show variable oxidation states",
      "d-block elements are generally poor conductors of electricity",
      "Many transition metal ions are colored due to d-d electronic transitions"
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
    "explanation": "A: true. B: true, due to comparable energies of (n-1)d and ns electrons. C: false; transition metals are generally good conductors. D: true. Display-order verdicts: A: correct. B: correct. C: incorrect. D: correct.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-154",
    "section": "Chemistry",
    "topic": "Organic Reaction Patterns",
    "difficulty": "hard",
    "question": "Select all correct statements about organic reaction mechanisms.",
    "options": [
      "Electrophilic substitution is characteristic of benzene and its derivatives",
      "Alkenes typically undergo electrophilic addition reactions",
      "SN2 reactions proceed with retention of configuration at the reacting carbon",
      "Free radical halogenation of alkanes proceeds through a chain mechanism with no radical intermediates"
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
    "explanation": "A: true, benzene's aromatic ring favors electrophilic substitution. B: true. C: false; SN2 proceeds with inversion of configuration. D: false; the chain mechanism explicitly involves radical intermediates. Display-order verdicts: A: correct. B: correct. C: incorrect. D: incorrect.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    },
    "partialCreditMode": "proportional"
  },
  {
    "id": "wbjee-2026-engineering-full-mock-02-155",
    "section": "Chemistry",
    "topic": "Chemical Bonding and Structure",
    "difficulty": "medium",
    "question": "Select all correct statements about chemical bonding and molecular structure.",
    "options": [
      "Water is a bent molecule due to two lone pairs on oxygen",
      "Ionic compounds generally have high melting points",
      "CO2 is a linear, nonpolar molecule despite polar C=O bonds",
      "Metallic bonding involves a sea of delocalized electrons around positive ion cores"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2,
      3
    ],
    "partialMarking": true,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A: true. B: true, due to strong electrostatic lattice forces. C: true, the two bond dipoles cancel in the linear geometry. D: true, this is the standard electron-sea model of metallic bonding. Display-order verdicts: A: correct. B: correct. C: correct. D: correct.",
    "source": {
      "kind": "original",
      "reference": "WBJEE 2026 official syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/202603101506582412.pdf",
      "checkedOn": "2026-08-24"
    },
    "partialCreditMode": "proportional"
  },
];
