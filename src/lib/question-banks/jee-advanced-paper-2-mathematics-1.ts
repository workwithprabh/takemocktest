import type { Question } from '../questions';

export const JEE_ADVANCED_PAPER_2_MATHEMATICS_1: Question[] = [
  {
    "id": "jee-advanced-p2-ma-001",
    "section": "Mathematics",
    "topic": "Matrices and determinants",
    "difficulty": "hard",
    "question": "Let A=[[0,a,b],[-a,0,c],[-b,-c,0]] be a real 3\u00d73 skew-symmetric matrix. If det(I+A)=15, then a^2+b^2+c^2 equals",
    "options": [
      "12",
      "13",
      "14",
      "15"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Direct expansion of det(I+A) for the displayed matrix gives 1+a^2+b^2+c^2. Therefore 1+a^2+b^2+c^2=15, so a^2+b^2+c^2=14. This uses only the stated skew-symmetric form and a determinant expansion.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ma-002",
    "section": "Mathematics",
    "topic": "Sequences and series",
    "difficulty": "medium",
    "question": "A sequence is defined by a1=2 and a_(n+1)=2a_n+2^n for n>=1. Then a5 is",
    "options": [
      "96",
      "80",
      "64",
      "112"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Let b_n=a_n/2^(n-1). Dividing the recurrence by 2^n gives b_(n+1)=b_n+1. Since b1=2, b_n=n+1. Thus a5=(5+1)2^4=96.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ma-003",
    "section": "Mathematics",
    "topic": "Analytical geometry",
    "difficulty": "hard",
    "question": "Two circles pass through A=(-1,0) and B=(3,0), and each is tangent to the line y=2x+4. The sum of their radii is",
    "options": [
      "sqrt(5)",
      "2sqrt(5)",
      "4sqrt(5)",
      "3sqrt(5)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The centre of any circle through A and B lies on the perpendicular bisector x=1, say (1,k). Its radius satisfies r^2=4+k^2. Tangency to y=2x+4 gives |2-k+4|/sqrt5=r, so (6-k)^2=5(k^2+4), or k^2+3k-4=0. Hence k=1 or -4, with radii sqrt5 and 2sqrt5. Their sum is 3sqrt5.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ma-004",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "Two numbers are chosen independently and uniformly from {1,2,3,4,5,6}. Given that their sum is even, the probability that their product is divisible by 4 is",
    "options": [
      "2/9",
      "5/18",
      "1/3",
      "4/9"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Conditioning on an even sum leaves 18 ordered pairs: 9 odd-odd and 9 even-even. Only even-even pairs can have product divisible by 4. Among {2,4,6}^2, the product is not divisible by 4 exactly when both entries are in {2,6}, giving 4 failures. Hence 5 of the 18 conditioned ordered pairs are favorable, so the probability is 5/18.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ma-005",
    "section": "Mathematics",
    "topic": "Functions",
    "difficulty": "medium",
    "question": "Let f:R->R be f(x)=x^3+x. Which statements are true?",
    "options": [
      "f is one-to-one",
      "f is onto R",
      "f^{-1} is differentiable everywhere",
      "(f^{-1})'(0)=1/2"
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
    "explanation": "f'(x)=3x^2+1>0, so f is strictly increasing and one-to-one. Since f(x) tends to plus/minus infinity with x, it is onto R. As f' never vanishes, the inverse is differentiable everywhere. Because f(0)=0 and f'(0)=1, (f^{-1})'(0)=1, not 1/2. Therefore statements 1,2,3 are true and 4 is false.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ma-006",
    "section": "Mathematics",
    "topic": "Quadratic equations",
    "difficulty": "hard",
    "question": "For real parameter a, consider x^2-2ax+a+2=0. Which statements are true?",
    "options": [
      "There exists a for which the roots are equal",
      "There exists a for which both roots are positive",
      "There exists a for which both roots are zero",
      "There exists a for which the roots have opposite signs"
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
    "explanation": "Equal roots require a^2-a-2=0, so a=2 or -1, making statement 1 true. For a=3, sum and product are positive and the discriminant is positive, so both roots are positive; statement 2 is true. Both roots cannot be zero because that would require simultaneously sum 2a=0 and product a+2=0, impossible; statement 3 is false. For a<-2 the product a+2 is negative, so the roots have opposite signs; statement 4 is true.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ma-007",
    "section": "Mathematics",
    "topic": "Integral calculus",
    "difficulty": "hard",
    "question": "Let I=\u222b_0^(\u03c0/2) x/(sin x+cos x)^2 dx. Which statements are correct?",
    "options": [
      "I=\u03c0/4",
      "\u222b_0^(\u03c0/2) dx/(sin x+cos x)^2 = 1",
      "\u222b_0^(\u03c0/2) (x-\u03c0/4)/(sin x+cos x)^2 dx = 0",
      "\u222b_0^\u221e arctan(t)/(1+t)^2 dt = \u03c0/2"
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
    "explanation": "The weight f(x)=1/(sinx+cosx)^2 satisfies f(\u03c0/2-x)=f(x), so \u222bx f(x)dx=(\u03c0/4)\u222bf(x)dx and the centered integral is zero. With t=tanx, f(x)dx=dt/(1+t)^2, whose integral from 0 to \u221e is 1. Hence I=\u03c0/4. The same substitution gives \u222b_0^\u221e arctan(t)/(1+t)^2 dt=I=\u03c0/4, not \u03c0/2.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ma-008",
    "section": "Mathematics",
    "topic": "Vectors and 3D geometry",
    "difficulty": "hard",
    "question": "Let A=(1,0,0), B=(0,1,0), C=(0,0,1) and P=(1,1,1). Which statements are correct?",
    "options": [
      "The plane ABC is x+y+z=1",
      "The perpendicular distance from P to plane ABC is 2/sqrt(3)",
      "The volume of tetrahedron PABC is 2/3",
      "The foot of the perpendicular from P to plane ABC is (1/3,1/3,1/3)"
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
    "explanation": "The intercept form gives plane ABC: x+y+z=1. Thus the distance of P is |3-1|/sqrt3=2/sqrt3. The foot lies along the normal (1,1,1): P-(2/3)(1,1,1)=(1/3,1/3,1/3). Using A as origin for edge vectors, |(B-A)\u00b7[(C-A)\u00d7(P-A)]|=2, so the tetrahedral volume is 2/6=1/3, not 2/3.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ma-009",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "A fair die is rolled repeatedly until either a 6 appears or three rolls have been made. Let N be the number of rolls actually made. Which statements are true?",
    "options": [
      "P(N=1)=1/6",
      "P(N=2)=5/36",
      "P(N=3)=25/36",
      "E[N]=89/36"
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
    "explanation": "N=1 iff the first roll is 6, so P(N=1)=1/6. N=2 iff the first roll is not 6 and the second is 6, giving 5/36. N=3 iff the first two rolls are non-6, giving 25/36. Therefore E[N]=1/6+10/36+75/36=91/36, not 89/36. Thus only statements 1,2,3 are true.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ma-010",
    "section": "Mathematics",
    "topic": "Permutations and combinations",
    "difficulty": "hard",
    "question": "The number of permutations of {1,2,3,4,5,6,7} in which 1 and 2 occupy positions differing by exactly 3 and 3 appears before 4 is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "480",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For 1 and 2 to occupy positions differing by 3, their unordered position pair can be (1,4),(2,5),(3,6) or (4,7): 4 choices. Assign 1 and 2 to the chosen positions in 2 ways, and arrange the remaining five numbers in 5! ways, giving 4x2x120=960 permutations. Swapping labels 3 and 4 pairs these permutations without affecting the positions of 1 and 2, so exactly half have 3 before 4. The answer is 480.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ma-011",
    "section": "Mathematics",
    "topic": "Matrices and determinants",
    "difficulty": "hard",
    "question": "Let A=[[1,2,1],[0,1,2],[2,1,1]]. The matrix X satisfies AX=A+adj(A). The value of det X is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "11.20",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Here detA=5 and adj(A)=[[-1,-1,3],[4,-1,-2],[-2,3,1]]. Hence A+adj(A)=[[0,1,4],[4,0,0],[0,4,2]], whose determinant is 56. Taking determinants in AX=A+adj(A) gives 5 detX=56, so detX=56/5=11.20.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ma-012",
    "section": "Mathematics",
    "topic": "Differential calculus",
    "difficulty": "hard",
    "question": "Let f(x)=x^3-3x+|x^2-1|. Find the number of local extrema of f on the real line.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "4",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For x<=-1 or x>=1, f'=3x^2+2x-3; its only root in those outer regions is (-1-sqrt10)/3<-1, where the sign changes from + to -. For -1<x<1, f'=3x^2-2x-3; its only root in this interval is (1-sqrt10)/3, where the sign changes from + to -. At x=-1 and x=1 the derivative jumps from negative to positive, producing local minima. Thus there are two local maxima and two local minima, for a total of 4 local extrema.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ma-013",
    "section": "Mathematics",
    "topic": "Permutations and combinations",
    "difficulty": "hard",
    "question": "The number of nonnegative integer solutions of x1+x2+x3+x4=9 with x1<=2 and x2<=3 is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "90",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Without upper bounds there are C(12,3)=220 solutions. Subtract x1>=3: set y1=x1-3, giving C(9,3)=84. Subtract x2>=4: C(8,3)=56. Add back both violations: after subtracting 7 in total, C(5,3)=10. Hence 220-84-56+10=90. The correct value is 90.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ma-014",
    "section": "Mathematics",
    "topic": "Analytical geometry",
    "difficulty": "hard",
    "question": "From P=(13,0), two tangents are drawn to the circle x^2+y^2=25, touching it at A and B. If O is the origin, the area of quadrilateral OAPB is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "60",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The chord of contact from P to x^2+y^2=25 is 13x=25, so A and B have x=25/13. On the circle, y=\u00b1sqrt(25-(25/13)^2)=\u00b160/13. Triangle OAP has base OP=13 and height 60/13, so its area is 30; triangle OBP has the same area. Therefore area(OAPB)=60.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ma-015",
    "section": "Mathematics",
    "topic": "Algebra",
    "difficulty": "medium",
    "question": "Shared Stem A: Let alpha and beta be the two roots of x^2-5x+5=0. Define u=alpha/(alpha-1) and v=beta/(beta-1). Find u+v.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "5",
    "maxDecimalPlaces": 2,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Here alpha+beta=5 and alpha beta=5. Also (alpha-1)(beta-1)=5-5+1=1. Therefore u+v=[2alpha beta-(alpha+beta)]/[(alpha-1)(beta-1)]=(10-5)/1=5.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ma-016",
    "section": "Mathematics",
    "topic": "Algebra",
    "difficulty": "hard",
    "question": "Shared Stem A: Let alpha and beta be the two roots of x^2-5x+5=0. Define u=alpha/(alpha-1) and v=beta/(beta-1). Find u^4+v^4.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "175",
    "maxDecimalPlaces": 2,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "From the shared data, u+v=5 and uv=alpha beta/[(alpha-1)(beta-1)]=5. Thus u^2+v^2=25-10=15, and u^4+v^4=(u^2+v^2)^2-2u^2v^2=225-50=175.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ma-017",
    "section": "Mathematics",
    "topic": "Integral calculus",
    "difficulty": "medium",
    "question": "Shared Stem B: In the first quadrant, let R be the region bounded by the parabolas y=x^2 and y=3x-x^2. They intersect at x=0 and x=3/2. Find 8 times the area of R.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "9",
    "maxDecimalPlaces": 2,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Area(R)=integral_0^(3/2) [(3x-x^2)-x^2] dx = integral_0^(3/2)(3x-2x^2)dx =9/8. Hence 8 Area(R)=9.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ma-018",
    "section": "Mathematics",
    "topic": "Integral calculus",
    "difficulty": "hard",
    "question": "Shared Stem B: In the first quadrant, let R be the region bounded by the parabolas y=x^2 and y=3x-x^2. They intersect at x=0 and x=3/2. A vertical line x=c divides R into two regions of equal area. Find 4c.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "3",
    "maxDecimalPlaces": 2,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The vertical thickness of R is (3x-x^2)-x^2=3x-2x^2. The total area, as in the shared stem pair, is 9/8, so half is 9/16. Thus \u222b_0^c(3x-2x^2)dx=(3/2)c^2-(2/3)c^3=9/16. Substitution c=3/4 satisfies this equation. Since the accumulated area is strictly increasing for 0<c<3/2, the solution is unique. Hence 4c=3.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  }
];
