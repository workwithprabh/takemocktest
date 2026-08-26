import type { Question } from '../questions';

export const JEE_MAIN_PAPER_1_MATHEMATICS_1: Question[] = [
  {
    "id": "jee-main-p1-ma-001",
    "section": "Mathematics",
    "topic": "Complex Numbers and Quadratic Equations",
    "difficulty": "medium",
    "question": "If z is a non-zero complex number satisfying z + 1/z = 1, then the value of |z^5 + 1/z^5| is",
    "options": [
      "1",
      "2",
      "0",
      "5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let S_n=z^n+z^(-n). From z+z^(-1)=1, S_0=2, S_1=1 and S_n=S_(n-1)-S_(n-2). Thus S_2=-1, S_3=-2, S_4=-1 and S_5=1. Hence |S_5|=1.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-002",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "For real \u03bb, the determinant of the matrix [[1,1,1],[1,\u03bb,\u03bb^2],[1,\u03bb^2,\u03bb]] is zero. The number of distinct real values of \u03bb is",
    "options": [
      "2",
      "3",
      "1",
      "4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Expanding and factorising gives det = -\u03bb(\u03bb-1)^2(\u03bb+2). Hence the distinct real roots are \u03bb=-2,0,1, so there are 3 values.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-003",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "medium",
    "question": "Five distinct men and four distinct women are arranged in a row so that no two women are adjacent. The number of such arrangements is",
    "options": [
      "28800",
      "14400",
      "86400",
      "43200"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Arrange the 5 men in 5! ways. This creates 6 gaps. Choose and order 4 of these gaps for the women in P(6,4)=6\u00d75\u00d74\u00d73 ways. Total =5!\u00d7P(6,4)=120\u00d7360=43200.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-004",
    "section": "Mathematics",
    "topic": "Binomial Theorem and its Simple Applications",
    "difficulty": "hard",
    "question": "The coefficient of x^5 in (1+x)^8(1-x)^4 is",
    "options": [
      "8",
      "-8",
      "0",
      "16"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Write (1+x)^8(1-x)^4=(1+x)^4(1-x^2)^4. The coefficient of x^5 is \u03a3 C(4,5-2j)C(4,j)(-1)^j. Only j=1,2 contribute: -C(4,3)C(4,1)+C(4,1)C(4,2)=-16+24=8.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-005",
    "section": "Mathematics",
    "topic": "Sequence and Series",
    "difficulty": "easy",
    "question": "The value of \u03a3_{n=1}^{8} 1/(\u221an+\u221a(n+1)) is",
    "options": [
      "1",
      "\u221a2",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Rationalising each term gives 1/(\u221an+\u221a(n+1))=\u221a(n+1)-\u221an. The series telescopes to \u221a9-\u221a1=3-1=2.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-006",
    "section": "Mathematics",
    "topic": "Limit, Continuity and Differentiability",
    "difficulty": "medium",
    "question": "Define f(x)=(e^(2x)-1)/x for x\u22600 and f(0)=a so that f is differentiable at 0. Then a+f'(0) equals",
    "options": [
      "2",
      "4",
      "6",
      "3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using e^(2x)=1+2x+2x^2+O(x^3), f(x)=2+2x+O(x^2). Continuity gives a=2 and differentiability gives f'(0)=2. Therefore a+f'(0)=4.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-007",
    "section": "Mathematics",
    "topic": "Limit, Continuity and Differentiability",
    "difficulty": "medium",
    "question": "The maximum value of f(x)=x^2(6-x) on the interval [0,6] is",
    "options": [
      "36",
      "24",
      "27",
      "32"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f'(x)=12x-3x^2=3x(4-x). The interior critical point is x=4. Comparing f(0)=0, f(4)=16\u00d72=32 and f(6)=0, the maximum is 32.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-008",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "medium",
    "question": "If I=\u222b_0^(\u03c0/2) [sin x/(sin x+cos x)] dx, then I is",
    "options": [
      "\u03c0/6",
      "\u03c0/4",
      "1",
      "\u03c0/3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Under x\u2192\u03c0/2-x, I also equals \u222b cos x/(sin x+cos x) dx over the same limits. Adding the two forms gives 2I=\u222b_0^(\u03c0/2)1 dx=\u03c0/2, hence I=\u03c0/4.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-009",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "hard",
    "question": "The solution of dy/dx + y tan x = sin x satisfying y(0)=0 has y(\u03c0/3) equal to",
    "options": [
      "(ln 2)/4",
      "2 ln 2",
      "(ln 2)/2",
      "ln 2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The integrating factor is e^(\u222btan x dx)=sec x. Hence d(y sec x)/dx=tan x, so y sec x=ln(sec x)+C. From y(0)=0, C=0. Thus y=cos x ln(sec x), and at x=\u03c0/3 this is (1/2)ln 2.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-010",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "easy",
    "question": "The length of a tangent drawn from the point (7,1) to the circle x^2+y^2-6x+4y+4=0 is",
    "options": [
      "3",
      "6",
      "5",
      "4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The circle is (x-3)^2+(y+2)^2=9, so its centre is (3,-2) and radius is 3. The point is at distance 5 from the centre. Tangent length =\u221a(5^2-3^2)=4.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-011",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "hard",
    "question": "A chord of the parabola y^2=8x has midpoint (3,2). The x-intercept of the chord is",
    "options": [
      "4",
      "2",
      "3",
      "1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For y^2=4ax with a=2, the chord with midpoint (x1,y1) is T=S1: yy1-2a(x+x1)=y1^2-4ax1. With (3,2), 2y-4(x+3)=4-24, giving y-2x+4=0. Setting y=0 gives x=2.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-012",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "The tangent to the ellipse x^2/25+y^2/9=1 at the point (4,9/5) meets the coordinate axes at A and B. The area of triangle OAB is",
    "options": [
      "25/2",
      "25",
      "75/4",
      "125/8"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The tangent is 4x/25 + y/5 =1. Hence the intercepts are A=(25/4,0) and B=(0,5). The triangle area is (1/2)(25/4)(5)=125/8.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-013",
    "section": "Mathematics",
    "topic": "Three Dimensional Geometry",
    "difficulty": "hard",
    "question": "The distance between the skew lines r=(1,0,1)+s(1,1,0) and r=(0,1,2)+t(1,-1,1) is",
    "options": [
      "\u221a6",
      "1/\u221a6",
      "4/\u221a6",
      "2/\u221a6"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For direction vectors a=(1,1,0) and b=(1,-1,1), a\u00d7b=(1,-1,-2), whose magnitude is \u221a6. The vector joining the chosen points is (-1,1,1), and its dot product with a\u00d7b is -4. Distance =|-4|/\u221a6=4/\u221a6.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-014",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "easy",
    "question": "If a and b are unit vectors with a\u00b7b=1/2, then |a\u00d7b| is",
    "options": [
      "\u221a3/2",
      "1/2",
      "1/\u221a2",
      "1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For unit vectors, a\u00b7b=cos \u03b8=1/2, so \u03b8=60\u00b0. Hence |a\u00d7b|=sin 60\u00b0=\u221a3/2.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-015",
    "section": "Mathematics",
    "topic": "Statistics and Probability",
    "difficulty": "hard",
    "question": "Machines A, B and C produce 20%, 30% and 50% of a factory's output. Their defective rates are 1%, 2% and 3% respectively. Given that a randomly chosen item is defective, the probability that it came from C is",
    "options": [
      "3/5",
      "5/8",
      "15/23",
      "1/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P(D)=0.2(0.01)+0.3(0.02)+0.5(0.03)=0.002+0.006+0.015=0.023. Also P(C\u2229D)=0.015. By Bayes' theorem, P(C|D)=0.015/0.023=15/23.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-016",
    "section": "Mathematics",
    "topic": "Statistics and Probability",
    "difficulty": "medium",
    "question": "Two shooters A and B fire independently at a target twice each. The probability that A hits the target on any shot is 1/2, while that for B is 2/3. The probability that exactly one of the two shooters hits the target at least once is",
    "options": [
      "11/36",
      "5/18",
      "13/36",
      "2/9"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A hits at least once with probability 1-(1/2)^2=3/4, while B hits at least once with probability 1-(1/3)^2=8/9. Exactly one of them does so with probability (3/4)(1/9)+(1/4)(8/9)=3/36+8/36=11/36.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-017",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "The number of solutions of 2sin^2 x-3sin x+1=0 in [0,2\u03c0) is",
    "options": [
      "4",
      "5",
      "3",
      "2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Factor as (2sin x-1)(sin x-1)=0. Thus sin x=1/2 gives x=\u03c0/6,5\u03c0/6, while sin x=1 gives x=\u03c0/2. There are 3 solutions.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-018",
    "section": "Mathematics",
    "topic": "Sets, Relations and Functions",
    "difficulty": "medium",
    "question": "On A={1,2,...,12}, define a relation R by aRb if and only if 4 divides a-b. The number of ordered pairs in R is",
    "options": [
      "24",
      "36",
      "48",
      "32"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The relation partitions A into four residue classes modulo 4: {1,5,9}, {2,6,10}, {3,7,11}, and {4,8,12}. Each class contributes 3^2=9 ordered pairs, so |R|=4x9=36.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-019",
    "section": "Mathematics",
    "topic": "Complex Numbers and Quadratic Equations",
    "difficulty": "medium",
    "question": "The complex numbers satisfying both |z-1|=|z-i| and |z|=\u221a2 are z1 and z2. The product z1z2 is",
    "options": [
      "-2i",
      "2i",
      "-2",
      "2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Writing z=x+iy, equality of distances gives (x-1)^2+y^2=x^2+(y-1)^2, hence y=x. With x^2+y^2=2, x=\u00b11. Thus z1=1+i and z2=-1-i, and their product=-(1+i)^2=-2i.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-020",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "hard",
    "question": "Let A=[[2,1,0],[1,2,1],[0,1,2]]. The sum of all entries of adj(A) is",
    "options": [
      "2",
      "6",
      "8",
      "4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "det(A)=4. If u=(1,1,1)^T and Ax=u, then the equations give x=(1/2,0,1/2)^T, so u^T A^(-1)u=1. Since adj(A)=det(A)A^(-1), the sum of all entries of adj(A) is u^T adj(A)u=4x1=4.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-021",
    "section": "Mathematics",
    "topic": "Limit, Continuity and Differentiability",
    "difficulty": "hard",
    "question": "Let f(x)=x^3+a x^2+b x. The tangent to y=f(x) at x=1 is horizontal. The tangent at x=2 is parallel to the chord joining the points of the curve with abscissae 0 and 2. Enter f(3).",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "6",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Since f'(x)=3x^2+2ax+b, horizontality at x=1 gives 3+2a+b=0. The chord slope from x=0 to x=2 is [f(2)-f(0)]/2=4+2a+b, while f'(2)=12+4a+b. Equating them gives a=-4, and then b=5. Therefore f(3)=27-36+15=6.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-022",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "hard",
    "question": "A circle passes through (1,0) and (0,1) and is tangent to the line x+y=4. If r is its radius, enter the value of 18r^2.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "25",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Write the circle as x^2+y^2+Dx+Ey+F=0. The two given points imply D=E=p and F=-1-p. Hence r^2=p^2/2+1+p. The centre is (-p/2,-p/2), so tangency to x+y=4 gives (p+4)^2/2=r^2. Thus 1+p=4p+8, so p=-7/3. Therefore r^2=25/18 and 18r^2=25.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-023",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "hard",
    "question": "Using the digits 0,1,2,3,4,5 without repetition, how many five-digit even numbers can be formed?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "312",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Count by the last digit. If the last digit is 0, the first digit has 5 choices and the middle three positions have P(4,3)=24 choices: 120. If the last digit is 2 or 4, choose the last digit in 2 ways, the first digit from the 4 non-zero remaining digits, and arrange 3 of the remaining 4 digits: 2\u00d74\u00d7P(4,3)=192. Total=312.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-024",
    "section": "Mathematics",
    "topic": "Statistics and Probability",
    "difficulty": "medium",
    "question": "Two groups each contain 5 observations. The first group has mean 4 and variance 2, and the second group has mean 8 and variance 2, where variance is defined using division by the number of observations. Enter the variance of all 10 observations taken together.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "6",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The combined mean is (5x4+5x8)/10=6. The total sum of squared deviations about 6 is 5x2+5(4-6)^2+5x2+5(8-6)^2=60. Dividing by 10 gives combined variance 6.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-main-p1-ma-025",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "hard",
    "question": "For x>-1, let y satisfy dy/dx + [2/(x+1)]y = 3(x+1), with y(0)=1. Enter the value of 16y(1).",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "49",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The integrating factor is (x+1)^2. Hence d[y(x+1)^2]/dx=3(x+1)^3, so y(x+1)^2=(3/4)(x+1)^4+C. Using y(0)=1 gives C=1/4. At x=1, 4y(1)=12+1/4=49/4, so y(1)=49/16 and 16y(1)=49.",
    "source": {
      "kind": "original",
      "reference": "JEE Main 2026 official Paper 1 syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-24"
    }
  }
];
