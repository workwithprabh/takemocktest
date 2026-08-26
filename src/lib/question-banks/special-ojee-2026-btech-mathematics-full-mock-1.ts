import type { Question } from '../questions';

export const SPECIAL_OJEE_2026_BTECH_MATHEMATICS_FULL_MOCK_1: Question[] = [
  {
    "id": "special-ojee-2026-btech-full-mock-01-041",
    "section": "Mathematics",
    "topic": "Sets, Relations and Functions",
    "difficulty": "easy",
    "question": "If A has 4 elements and B has 3 elements, the number of functions from A to B is",
    "options": [
      "12",
      "64",
      "7",
      "81"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Each of the 4 elements of A can be mapped independently to any of 3 elements of B, so the number of functions is 3^4=81.",
    "source": {
      "kind": "original",
      "reference": "2nd/Special OJEE 2026 B.Tech official pattern and JEE Main 2026 syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s36832a7b24bc06775d02b7406880b93fc/uploads/2026/06/202606161888862187.pdf",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "id": "special-ojee-2026-btech-full-mock-01-042",
    "section": "Mathematics",
    "topic": "Complex Numbers and Quadratic Equations",
    "difficulty": "medium",
    "question": "If z=(1+i)/(1-i), then z^4 equals",
    "options": [
      "-1",
      "1",
      "i",
      "-i"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Multiplying numerator and denominator by 1+i gives z=(1+i)^2/2=i. Hence z^4=i^4=1.",
    "source": {
      "kind": "original",
      "reference": "2nd/Special OJEE 2026 B.Tech official pattern and JEE Main 2026 syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s36832a7b24bc06775d02b7406880b93fc/uploads/2026/06/202606161888862187.pdf",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "id": "special-ojee-2026-btech-full-mock-01-043",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "For A=[[2,1],[3,2]], the determinant of A inverse is",
    "options": [
      "1",
      "-1",
      "5",
      "1/5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "det A=4-3=1. For an invertible matrix, det(A^-1)=1/det A=1.",
    "source": {
      "kind": "original",
      "reference": "2nd/Special OJEE 2026 B.Tech official pattern and JEE Main 2026 syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s36832a7b24bc06775d02b7406880b93fc/uploads/2026/06/202606161888862187.pdf",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "id": "special-ojee-2026-btech-full-mock-01-044",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "medium",
    "question": "How many shortest lattice paths from (0,0) to (6,5), moving only one unit right or one unit up at each step, pass through (2,2) but do not pass through (4,3)?",
    "options": [
      "90",
      "96",
      "102",
      "108"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Paths from (0,0) to (2,2) number C(4,2)=6. From (2,2) to (6,5), there are 4 right and 3 up moves, so C(7,3)=35 paths. Thus 6x35=210 paths pass through (2,2). Those that also pass through (4,3) number C(4,2) x C(3,1) x C(4,2) =6x3x6=108. Therefore the required count is 210-108=102.",
    "source": {
      "kind": "original",
      "reference": "2nd/Special OJEE 2026 B.Tech official pattern and JEE Main 2026 syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s36832a7b24bc06775d02b7406880b93fc/uploads/2026/06/202606161888862187.pdf",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "id": "special-ojee-2026-btech-full-mock-01-045",
    "section": "Mathematics",
    "topic": "Binomial Theorem and Its Simple Applications",
    "difficulty": "medium",
    "question": "The coefficient of x^4 in the expansion of (1+x)^8(1-2x) is",
    "options": [
      "42",
      "-42",
      "-14",
      "70"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The x^4 term comes from x^4 in (1+x)^8 multiplied by 1 and from x^3 in (1+x)^8 multiplied by -2x. Hence the coefficient is C(8,4)-2C(8,3)=70-112=-42.",
    "source": {
      "kind": "original",
      "reference": "2nd/Special OJEE 2026 B.Tech official pattern and JEE Main 2026 syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s36832a7b24bc06775d02b7406880b93fc/uploads/2026/06/202606161888862187.pdf",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "id": "special-ojee-2026-btech-full-mock-01-046",
    "section": "Mathematics",
    "topic": "Sequence and Series",
    "difficulty": "easy",
    "question": "In an arithmetic progression, the sum of the 4th and 10th terms is 50. The 7th term is",
    "options": [
      "20",
      "30",
      "35",
      "25"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "In an arithmetic progression, terms equally spaced around a middle term have sum twice that middle term. The 4th and 10th terms are equally spaced around the 7th, so T4+T10=2T7=50. Therefore T7=25.",
    "source": {
      "kind": "original",
      "reference": "2nd/Special OJEE 2026 B.Tech official pattern and JEE Main 2026 syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s36832a7b24bc06775d02b7406880b93fc/uploads/2026/06/202606161888862187.pdf",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "id": "special-ojee-2026-btech-full-mock-01-047",
    "section": "Mathematics",
    "topic": "Limit, Continuity and Differentiability",
    "difficulty": "medium",
    "question": "The value of lim x->0 [sin(5x)/sin(2x)] is",
    "options": [
      "2/5",
      "5",
      "5/2",
      "1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using sin kx ~ kx near zero, the limit is 5/2.",
    "source": {
      "kind": "original",
      "reference": "2nd/Special OJEE 2026 B.Tech official pattern and JEE Main 2026 syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s36832a7b24bc06775d02b7406880b93fc/uploads/2026/06/202606161888862187.pdf",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "id": "special-ojee-2026-btech-full-mock-01-048",
    "section": "Mathematics",
    "topic": "Limit, Continuity and Differentiability",
    "difficulty": "hard",
    "question": "For f(x)=x^3-6x^2+9x+1, the local maximum occurs at x=",
    "options": [
      "1",
      "3",
      "0",
      "2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f'(x)=3(x-1)(x-3). The derivative changes from positive to negative at x=1, so x=1 is a local maximum.",
    "source": {
      "kind": "original",
      "reference": "2nd/Special OJEE 2026 B.Tech official pattern and JEE Main 2026 syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s36832a7b24bc06775d02b7406880b93fc/uploads/2026/06/202606161888862187.pdf",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "id": "special-ojee-2026-btech-full-mock-01-049",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "medium",
    "question": "The value of integral from 0 to 1 of 1/[(x+1)(x+2)] dx is",
    "options": [
      "ln 2",
      "ln(3/2)",
      "1/2",
      "ln(4/3)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Use 1/[(x+1)(x+2)]=1/(x+1)-1/(x+2). The definite integral is [ln(x+1)-ln(x+2)]_0^1=ln(4/3).",
    "source": {
      "kind": "original",
      "reference": "2nd/Special OJEE 2026 B.Tech official pattern and JEE Main 2026 syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s36832a7b24bc06775d02b7406880b93fc/uploads/2026/06/202606161888862187.pdf",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "id": "special-ojee-2026-btech-full-mock-01-050",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "If dy/dx=(1+y)/(1+x) and y(0)=1, then y(2) equals",
    "options": [
      "3",
      "5",
      "4",
      "7"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Separating variables gives d y/(1+y)=d x/(1+x), so 1+y=C(1+x). Since y(0)=1, C=2. Thus y=1+2x and y(2)=5.",
    "source": {
      "kind": "original",
      "reference": "2nd/Special OJEE 2026 B.Tech official pattern and JEE Main 2026 syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s36832a7b24bc06775d02b7406880b93fc/uploads/2026/06/202606161888862187.pdf",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "id": "special-ojee-2026-btech-full-mock-01-051",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "easy",
    "question": "The foot of the perpendicular from the point (4,1) to the line x+y=3 is",
    "options": [
      "(3,0)",
      "(2,1)",
      "(4,-1)",
      "(1,2)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The perpendicular to x+y=3 has direction (1,1). Moving from (4,1) by t(1,1), the line condition gives 5+2t=3, so t=-1 and the foot is (3,0).",
    "source": {
      "kind": "original",
      "reference": "2nd/Special OJEE 2026 B.Tech official pattern and JEE Main 2026 syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s36832a7b24bc06775d02b7406880b93fc/uploads/2026/06/202606161888862187.pdf",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "id": "special-ojee-2026-btech-full-mock-01-052",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "A circle has (-2,3) and (4,-1) as endpoints of a diameter. Its equation is",
    "options": [
      "(x+1)^2+(y-1)^2=13",
      "(x-1)^2+(y+1)^2=13",
      "(x-1)^2+(y-1)^2=13",
      "(x-1)^2+(y-1)^2=26"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The centre is the midpoint (1,1). The diameter length squared is 6^2+(-4)^2=52, so radius squared is 52/4=13. Hence the equation is (x-1)^2+(y-1)^2=13.",
    "source": {
      "kind": "original",
      "reference": "2nd/Special OJEE 2026 B.Tech official pattern and JEE Main 2026 syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s36832a7b24bc06775d02b7406880b93fc/uploads/2026/06/202606161888862187.pdf",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "id": "special-ojee-2026-btech-full-mock-01-053",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "hard",
    "question": "An ellipse has major axis length 10 and eccentricity 3/5. Its minor axis length is",
    "options": [
      "6",
      "8",
      "4",
      "10"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The semi-major axis is a=5. Since b=a sqrt(1-e^2), b=5 sqrt(1-9/25)=4. Hence the minor axis length is 2b=8.",
    "source": {
      "kind": "original",
      "reference": "2nd/Special OJEE 2026 B.Tech official pattern and JEE Main 2026 syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s36832a7b24bc06775d02b7406880b93fc/uploads/2026/06/202606161888862187.pdf",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "id": "special-ojee-2026-btech-full-mock-01-054",
    "section": "Mathematics",
    "topic": "Three Dimensional Geometry",
    "difficulty": "medium",
    "question": "A line has direction ratios 2,-3,6. If its direction cosine along the positive x-axis is l, then l equals",
    "options": [
      "-3/7",
      "6/7",
      "2/sqrt(13)",
      "2/7"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The magnitude of the direction-ratio vector is sqrt(4+9+36)=7. Therefore the direction cosines are (2/7,-3/7,6/7), so l=2/7.",
    "source": {
      "kind": "original",
      "reference": "2nd/Special OJEE 2026 B.Tech official pattern and JEE Main 2026 syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s36832a7b24bc06775d02b7406880b93fc/uploads/2026/06/202606161888862187.pdf",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "id": "special-ojee-2026-btech-full-mock-01-055",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "medium",
    "question": "If a=(2,-1,1) and b=(1,2,0), the area of the parallelogram formed by a and b is",
    "options": [
      "sqrt(30)",
      "sqrt(15)",
      "5",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a x b=(-2,1,5). Its magnitude is sqrt(4+1+25)=sqrt(30), which is the parallelogram area.",
    "source": {
      "kind": "original",
      "reference": "2nd/Special OJEE 2026 B.Tech official pattern and JEE Main 2026 syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s36832a7b24bc06775d02b7406880b93fc/uploads/2026/06/202606161888862187.pdf",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "id": "special-ojee-2026-btech-full-mock-01-056",
    "section": "Mathematics",
    "topic": "Statistics and Probability",
    "difficulty": "hard",
    "question": "An urn contains 4 white and 3 black balls. Two balls are drawn without replacement. If X is the number of white balls drawn, E(X) is",
    "options": [
      "4/7",
      "1",
      "8/7",
      "6/7"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For two draws, the expected number of white balls is 2 times the probability of white on a single draw: E(X)=2x(4/7)=8/7.",
    "source": {
      "kind": "original",
      "reference": "2nd/Special OJEE 2026 B.Tech official pattern and JEE Main 2026 syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s36832a7b24bc06775d02b7406880b93fc/uploads/2026/06/202606161888862187.pdf",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "id": "special-ojee-2026-btech-full-mock-01-057",
    "section": "Mathematics",
    "topic": "Statistics and Probability",
    "difficulty": "medium",
    "question": "A random variable X takes values 0,1,2 with probabilities 1/4,1/2,1/4 respectively. Its variance is",
    "options": [
      "1",
      "3/4",
      "1/4",
      "1/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "E(X)=1 and E(X^2)=0+1/2+1=3/2. Thus Var(X)=3/2-1=1/2.",
    "source": {
      "kind": "original",
      "reference": "2nd/Special OJEE 2026 B.Tech official pattern and JEE Main 2026 syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s36832a7b24bc06775d02b7406880b93fc/uploads/2026/06/202606161888862187.pdf",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "id": "special-ojee-2026-btech-full-mock-01-058",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "If 0<theta<pi/2 and tan theta=3/4, then sin 2theta is",
    "options": [
      "7/25",
      "24/25",
      "12/25",
      "3/5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using sin2theta=2tan theta/(1+tan^2 theta), the value is 2(3/4)/(1+9/16)=24/25.",
    "source": {
      "kind": "original",
      "reference": "2nd/Special OJEE 2026 B.Tech official pattern and JEE Main 2026 syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s36832a7b24bc06775d02b7406880b93fc/uploads/2026/06/202606161888862187.pdf",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "id": "special-ojee-2026-btech-full-mock-01-059",
    "section": "Mathematics",
    "topic": "Complex Numbers and Quadratic Equations",
    "difficulty": "medium",
    "question": "The modulus of (3+4i)/(1-i) is",
    "options": [
      "5sqrt(2)",
      "sqrt(5)",
      "5/sqrt(2)",
      "5/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Modulus of a quotient is the quotient of moduli: 5/sqrt(2).",
    "source": {
      "kind": "original",
      "reference": "2nd/Special OJEE 2026 B.Tech official pattern and JEE Main 2026 syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s36832a7b24bc06775d02b7406880b93fc/uploads/2026/06/202606161888862187.pdf",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "id": "special-ojee-2026-btech-full-mock-01-060",
    "section": "Mathematics",
    "topic": "Limit, Continuity and Differentiability",
    "difficulty": "hard",
    "question": "For x != 0, let f(x)=[sqrt(1+a x)-1]/x, and let f(0)=2. If f is continuous at x=0, then f'(0) is",
    "options": [
      "-2",
      "0",
      "2",
      "4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For x != 0, rationalization gives f(x)=a/[sqrt(1+a x)+1]. Continuity at 0 requires a/2=2, so a=4. Thus near 0, f(x)=4/[sqrt(1+4x)+1]. Differentiating gives f'(x)=-8/{sqrt(1+4x)[sqrt(1+4x)+1]^2}, hence f'(0)=-2.",
    "source": {
      "kind": "original",
      "reference": "2nd/Special OJEE 2026 B.Tech official pattern and JEE Main 2026 syllabus alignment",
      "url": "https://cdnbbsr.s3waas.gov.in/s36832a7b24bc06775d02b7406880b93fc/uploads/2026/06/202606161888862187.pdf",
      "checkedOn": "2026-08-22"
    }
  }
];
