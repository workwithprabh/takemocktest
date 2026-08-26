import type { Question } from '../questions';

export const JEE_ADVANCED_PAPER_1_MATHEMATICS_1: Question[] = [
  {
    "id": "jee-advanced-p1-ma-001",
    "section": "Mathematics",
    "topic": "Complex numbers",
    "difficulty": "easy",
    "question": "A nonzero complex number z satisfies z + 1/z = 1. The value of z^7 + 1/z^7 is",
    "options": [
      "-2",
      "-1",
      "0",
      "1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Let s_n=z^n+z^{-n}. Since z+z^{-1}=1, s_n=s_{n-1}-s_{n-2}, with s_0=2 and s_1=1. Thus s_2=-1, s_3=-2, s_4=-1, s_5=1, s_6=2 and s_7=1. Hence the correct option is 1.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ma-002",
    "section": "Mathematics",
    "topic": "Inequalities",
    "difficulty": "medium",
    "question": "Positive real numbers x and y satisfy x+y=4. The minimum value of 4+1/x+4/y is",
    "options": [
      "6",
      "25/4",
      "13/2",
      "7"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "By Cauchy-Schwarz, (1/x+4/y)(x+y)>=(1+2)^2=9. Since x+y=4, 1/x+4/y>=9/4. Equality holds when x:y=1:2, which is compatible with x+y=4. Hence the required minimum is 4+9/4=25/4.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ma-003",
    "section": "Mathematics",
    "topic": "Analytical geometry",
    "difficulty": "hard",
    "question": "The parabola y^2=4x meets the circle x^2+y^2-6x=0 at the origin and at two other points P and Q. The tangents to the parabola at P and Q meet at R. The area of triangle PQR is",
    "options": [
      "4sqrt(2)",
      "8",
      "8sqrt(2)",
      "16"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "At a non-origin intersection, y^2=4x and x^2+y^2-6x=0 give x^2-2x=0, so x=2 and y=+-2sqrt(2). These correspond to parabola parameters t=+-sqrt(2), whose tangents are ty=x+t^2. Their intersection is R=(-2,0). PQ is vertical with length 4sqrt(2), and the perpendicular distance of R from x=2 is 4. Therefore area=(1/2)(4sqrt(2))(4)=8sqrt(2).",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ma-004",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "Three distinct integers are chosen uniformly from {1,2,3,4,5,6,7,8}. The probability that their sum is even is",
    "options": [
      "3/8",
      "1/2",
      "5/8",
      "2/3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "There are four odd and four even integers. An even sum occurs for either three evens or two odds and one even. The favorable count is C(4,3)+C(4,2)C(4,1)=4+24=28, while the total is C(8,3)=56. Hence the probability is 1/2.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ma-005",
    "section": "Mathematics",
    "topic": "Matrices, determinants and linear equations",
    "difficulty": "hard",
    "question": "For real t, let A(t) be the 3\u00d73 matrix [[t,1,1],[1,t,1],[1,1,t]]. Which statements are correct?",
    "options": [
      "det A(t)=(t-1)^2(t+2)",
      "A(t) is invertible exactly when t is neither 1 nor -2",
      "For t=1, the system A(t)X=(1,1,1)^T has infinitely many solutions",
      "For t=-2, the system A(t)X=(1,1,1)^T has at least one solution"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Direct expansion gives det A=(t-1)^2(t+2), so invertibility fails only at t=1,-2. At t=1 all three equations reduce to x+y+z=1, giving infinitely many solutions. At t=-2 the sum of the three rows of A is the zero row; hence any consistent right-hand side must have component sum zero. The vector (1,1,1)^T has sum 3, so the system is inconsistent.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ma-006",
    "section": "Mathematics",
    "topic": "Complex numbers",
    "difficulty": "medium",
    "question": "Let S be the set of roots of z^4+1=0. Which statements are true?",
    "options": [
      "Every z in S satisfies |z|=1",
      "The sum of all elements of S is 0",
      "The product of all elements of S is -1",
      "For every z in S, z^2 is purely imaginary"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      3
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The roots are the four eighth roots of unity with odd exponents, so all have modulus 1. The x^3 coefficient of z^4+1 is 0, hence the sum is 0. For a monic quartic the product is the constant term, namely +1, so the third statement is false. Also z^4=-1 implies z^2=+i or -i, both purely imaginary. Thus statements 1,2,4 are true.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ma-007",
    "section": "Mathematics",
    "topic": "Differential calculus",
    "difficulty": "hard",
    "question": "For 0<x<1 define f(x)=x^x(1-x)^(1-x). Which statements are correct?",
    "options": [
      "f(x)=f(1-x)",
      "f has its global minimum at x=1/2",
      "The equation f(x)=3/4 has exactly two solutions in (0,1)",
      "f''(1/2)<0"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Symmetry is immediate from the definition. Let g=ln f=x ln x+(1-x)ln(1-x). Then g'=ln[x/(1-x)], so f decreases on (0,1/2) and increases on (1/2,1); hence the minimum is f(1/2)=1/2. The endpoint limits are 1, so every value between 1/2 and 1 occurs twice symmetrically, including 3/4. Also g''=1/x+1/(1-x), so at x=1/2, f''=f g''=(1/2)\u00d74=2>0.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ma-008",
    "section": "Mathematics",
    "topic": "Sequences and series",
    "difficulty": "hard",
    "question": "A sequence is defined by a1=0 and a(n+1)=sqrt(2+a_n) for n\u22651. Which statements are correct?",
    "options": [
      "a_n=2cos(\u03c0/2^n) for every n\u22651",
      "The sequence is strictly increasing and bounded above by 2",
      "For n\u22652, product from k=2 to n of a_k equals 1/sin(\u03c0/2^n)",
      "lim n\u2192\u221e of 4^n(2-a_n) equals \u03c0^2/2"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Since a1=2cos(\u03c0/2)=0 and sqrt(2+2cos\u03b8)=2cos(\u03b8/2) for the relevant angles, induction gives a_n=2cos(\u03c0/2^n). This increases to 2. Iterating sin x=2sin(x/2)cos(x/2) from x=\u03c0/2 gives \u220f(k=2 to n)2cos(\u03c0/2^k)=1/sin(\u03c0/2^n). Finally 2-a_n=2[1-cos(\u03c0/2^n)]~(\u03c0/2^n)^2, so 4^n(2-a_n)\u2192\u03c0^2, not \u03c0^2/2.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ma-009",
    "section": "Mathematics",
    "topic": "Analytical geometry",
    "difficulty": "medium",
    "question": "How many ordered integer pairs (x,y) satisfy x^2+4y^2<=25?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "43",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For y=0, x=-5,...,5 gives 11 points. For y=+-1, x^2<=21 gives 9 values of x for each sign, contributing 18. For y=+-2, x^2<=9 gives 7 values for each sign, contributing 14. No |y|>=3 is possible. Total=11+18+14=43.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ma-010",
    "section": "Mathematics",
    "topic": "Algebra",
    "difficulty": "hard",
    "question": "Let r1,r2,r3 be the three roots of x^3-3x+1=0. The value of 17[1/(1+r1^2)+1/(1+r2^2)+1/(1+r3^2)] is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "24",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "By Vieta, s1=r1+r2+r3=0, s2=r1r2+r2r3+r3r1=-3 and s3=r1r2r3=-1. Hence sum r_i^2=s1^2-2s2=6, sum_{i<j} r_i^2 r_j^2=s2^2-2s1s3=9, and r1^2r2^2r3^2=1. Therefore D=product(1+r_i^2)=1+6+9+1=17. The numerator of the reciprocal sum is sum over pairs (1+r_j^2)(1+r_k^2)=3+2(6)+9=24. Thus the bracketed sum is 24/17, and multiplying by 17 gives 24.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ma-011",
    "section": "Mathematics",
    "topic": "Differential equations and differential calculus",
    "difficulty": "hard",
    "question": "For x>0, a differentiable function f satisfies x f'(x)+f(x)=3x^2 and f(1)=4. Let m be the minimum value of f(x) on (0,infinity). The value of 4m^3 is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "243",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Since x f'(x)+f(x)=(x f(x))', integration gives x f(x)=x^3+C. From f(1)=4, C=3, so f(x)=x^2+3/x for x>0. Now f'(x)=2x-3/x^2, hence the unique stationary point satisfies 2x^3=3. Also f''(x)=2+6/x^3>0, while f(x) tends to infinity as x tends to 0+ or infinity, so this point gives the global minimum. At it, 3/x=2x^2, hence m=3x^2. Thus 4m^3=4*27*x^6=108*(3/2)^2=243.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-advanced-p1-ma-012",
    "section": "Mathematics",
    "topic": "Permutations and combinations",
    "difficulty": "hard",
    "question": "The number of six-digit positive integers whose every digit belongs to {0,1,2} and whose digit sum is 5 is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "75",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Let a,b,c be the counts of digits 2,1,0. Then a+b+c=6 and 2a+b=5. The possibilities are (a,b,c)=(0,5,1),(1,3,2),(2,1,3). Count all length-6 strings and subtract those beginning with 0. The counts are 6-1=5; 6!/(1!3!2!)-5!/(1!3!1!)=60-20=40; and 6!/(2!1!3!)-5!/(2!1!2!)=60-30=30. Total=75.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ma-013",
    "section": "Mathematics",
    "topic": "Functions and differential calculus",
    "difficulty": "hard",
    "question": "Match each item in List I with the number of its distinct real solutions in List II. List I: (P) x^x=e^(-1/e), x>0; (Q) x^3-3x+1=0; (R) e^x=2x+1; (S) ln x=x, x>0. List II: (1) 0; (2) 1; (3) 2; (4) 3; (5) 4. Choose the correct code.",
    "options": [
      "P-2,Q-3,R-4,S-1",
      "P-2,Q-4,R-3,S-1",
      "P-3,Q-4,R-2,S-1",
      "P-2,Q-4,R-1,S-3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For P, x^x has its unique minimum e^(-1/e) at x=e^-1, so there is one solution: P-2. For Q, f=x^3-3x+1 has a local maximum f(-1)=3 and local minimum f(1)=-1, so it crosses the axis three times: Q-4. For R, h=e^x-2x-1 has h(0)=0, h'(x)=e^x-2, a negative minimum value at x=ln2, and tends to +\u221e at both ends, so there are two roots: R-3. For S, ln x\u2264x-1<x for x>0, so there is no solution: S-1.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ma-014",
    "section": "Mathematics",
    "topic": "Integral calculus",
    "difficulty": "medium",
    "question": "Match each integral in List I with its value in List II. List I: (P) integral_0^1 [ln(1+x)/(1+x)] dx; (Q) integral_0^(pi/2) [sin x/(sin x+cos x)] dx; (R) integral_0^1 [arctan x/(1+x^2)] dx; (S) integral_0^1 [x^2/(1+x^3)] dx. List II: (1) pi^2/32; (2) pi/4; (3) (ln 2)^2/2; (4) (ln 2)/3; (5) ln 2. Choose the correct code.",
    "options": [
      "P-3,Q-1,R-2,S-4",
      "P-3,Q-2,R-1,S-4",
      "P-2,Q-3,R-1,S-4",
      "P-3,Q-2,R-4,S-1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For P use u=ln(1+x), giving (ln2)^2/2: P-3. For Q, replacing x by pi/2-x and adding the two forms shows the integral is half of pi/2, hence pi/4: Q-2. For R use u=arctan x, giving u^2/2 from 0 to pi/4, hence pi^2/32: R-1. For S use u=1+x^3, du=3x^2 dx, giving (ln2)/3: S-4.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ma-015",
    "section": "Mathematics",
    "topic": "Conic sections",
    "difficulty": "medium",
    "question": "Match each conic-related quantity in List I with the correct entry in List II. List I: (P) focal distance c from the centre for x^2/16+y^2/7=1; (Q) eccentricity of x^2/9-y^2/16=1; (R) focus of (y-1)^2=8(x+2); (S) radius of x^2+y^2-6x+4y-3=0. List II: (1) 3; (2) 5/3; (3) (0,1); (4) 4; (5) (2,1). Choose the correct code.",
    "options": [
      "P-1,Q-3,R-2,S-4",
      "P-2,Q-1,R-3,S-4",
      "P-1,Q-2,R-4,S-3",
      "P-1,Q-2,R-3,S-4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For the ellipse, c=sqrt(16-7)=3: P-1. For the hyperbola, e=sqrt(1+16/9)=5/3: Q-2. The parabola has 4a=8 and vertex (-2,1), so its focus is (0,1): R-3. Completing squares in the circle gives (x-3)^2+(y+2)^2=16, so the radius is 4: S-4.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ma-016",
    "section": "Mathematics",
    "topic": "Vectors and 3D geometry",
    "difficulty": "hard",
    "question": "Match List I with List II. List I: (P) distance from (1,2,3) to the plane 2x-y+2z=4; (Q) distance between the skew lines r=t(1,1,0) and r=(0,0,2)+s(1,-1,0); (R) cosine of the angle between (1,1,0) and (1,0,1); (S) volume of the parallelepiped generated by (1,1,0),(1,0,1),(0,1,2). List II: (1) 1/2; (2) 2/3; (3) 2; (4) 3; (5) 4. Choose the correct code.",
    "options": [
      "P-2,Q-3,R-1,S-4",
      "P-3,Q-2,R-1,S-4",
      "P-2,Q-4,R-1,S-3",
      "P-1,Q-3,R-2,S-4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P: the distance is |2(1)-2+2(3)-4|/sqrt(4+1+4)=2/3, so P-2. Q: with directions d1=(1,1,0), d2=(1,-1,0), their cross product is along z with magnitude 2; the connector (0,0,2) gives skew distance |(0,0,2)\u00b7(d1\u00d7d2)|/|d1\u00d7d2|=2, so Q-3. R: the cosine is 1/(sqrt2\u00b7sqrt2)=1/2, so R-1. S: the absolute scalar triple product is 3, so S-4.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  }
];
