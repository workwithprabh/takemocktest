import type { Question } from '../questions';

export const GUJCET_2026_MATHEMATICS_PAPER_PRACTICE_1: Question[] = [
  {
    "section": "Mathematics",
    "topic": "Permutation and Combination",
    "difficulty": "medium",
    "question": "A committee of 4 is chosen from 6 students of group A and 5 students of group B. How many committees contain at least 2 students from group B?",
    "options": [
      "225",
      "250",
      "215",
      "200"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Count B-members as 2, 3 or 4: C(5,2)C(6,2)+C(5,3)C(6,1)+C(5,4)=150+60+5=215.",
    "id": "gujcet-2026-mathematics-paper-practice-01-001",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Permutation and Combination",
    "difficulty": "medium",
    "question": "Using the digits 0,1,2,3,4,5 without repetition, how many four-digit even numbers can be formed?",
    "options": [
      "180",
      "168",
      "144",
      "156"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "If the units digit is 0, the first digit has 5 choices and the middle two have 4x3 choices, giving 60. If the units digit is 2 or 4, there are 2 choices for units, 4 nonzero choices for the first digit and 4x3 for the middle positions, giving 96. Total 156.",
    "id": "gujcet-2026-mathematics-paper-practice-01-002",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Permutation and Combination",
    "difficulty": "medium",
    "question": "Among all permutations of the letters A,B,C,D,E, how many have A appearing before B?",
    "options": [
      "72",
      "48",
      "24",
      "60"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Exactly half of the 5!=120 permutations have A before B, so the count is 60.",
    "id": "gujcet-2026-mathematics-paper-practice-01-003",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Permutation and Combination",
    "difficulty": "hard",
    "question": "How many nonnegative integer solutions of x+y+z=12 satisfy x<=4?",
    "options": [
      "80",
      "55",
      "70",
      "65"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Without the restriction there are C(14,2)=91 solutions. Solutions with x>=5 correspond to x'=x-5 and x'+y+z=7, giving C(9,2)=36. Hence 91-36=55.",
    "id": "gujcet-2026-mathematics-paper-practice-01-004",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "A card is drawn from a standard deck. Given that it is a face card, the probability that it is a red card is",
    "options": [
      "1/4",
      "1/2",
      "1/3",
      "2/3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "There are 12 face cards, 6 of which are red. The conditional probability is 6/12=1/2.",
    "id": "gujcet-2026-mathematics-paper-practice-01-005",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "easy",
    "question": "Events A and B are independent with P(A)=0.4 and P(B)=0.5. Then P(A union B) is",
    "options": [
      "0.6",
      "0.9",
      "0.2",
      "0.7"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For independent events, P(A intersection B)=0.4x0.5=0.2. Hence P(A union B)=0.4+0.5-0.2=0.7.",
    "id": "gujcet-2026-mathematics-paper-practice-01-006",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "easy",
    "question": "If the probability that a component fails during a test is 0.1, the probability that at least one of 4 independent components fails is",
    "options": [
      "0.4096",
      "0.4",
      "0.6561",
      "0.3439"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The probability none fails is 0.9^4=0.6561. Therefore the probability of at least one failure is 1-0.6561=0.3439.",
    "id": "gujcet-2026-mathematics-paper-practice-01-007",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "A random permutation of 1,2,3,4 is chosen. The probability that exactly two numbers remain in their original positions is",
    "options": [
      "1/4",
      "1/6",
      "1/3",
      "3/8"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Choose the two fixed positions in C(4,2)=6 ways; the other two positions must swap, giving one permutation for each choice. Thus 6 of 24 permutations work, so the probability is 1/4.",
    "id": "gujcet-2026-mathematics-paper-practice-01-008",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Sets, Relations and Functions",
    "difficulty": "medium",
    "question": "For f(x)=(2x-3)/(x+4), x not equal to -4, the value of f^(-1)(1/3) is",
    "options": [
      "5/21",
      "13/5",
      "17/5",
      "7/3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Solve (2x-3)/(x+4)=1/3. Then 6x-9=x+4, so 5x=13 and x=13/5.",
    "id": "gujcet-2026-mathematics-paper-practice-01-009",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Sets, Relations and Functions",
    "difficulty": "medium",
    "question": "The domain of h(x)=sqrt(5-x)/sqrt(x-1) is",
    "options": [
      "[1,5]",
      "(1,5)",
      "(1,5]",
      "[1,5)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The numerator requires x<=5. The denominator requires x-1>0, so x>1. Hence the domain is (1,5].",
    "id": "gujcet-2026-mathematics-paper-practice-01-010",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Sets, Relations and Functions",
    "difficulty": "hard",
    "question": "The number of onto functions from a 4-element set to a 2-element set is",
    "options": [
      "14",
      "16",
      "8",
      "12"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "There are 2^4 total functions. The two constant functions are not onto. Thus the number of onto functions is 16-2=14.",
    "id": "gujcet-2026-mathematics-paper-practice-01-011",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Theory of Equations",
    "difficulty": "medium",
    "question": "If alpha and beta are roots of x^2-7x+10=0, then the equation whose roots are alpha+2 and beta+2 is",
    "options": [
      "x^2-9x+14=0",
      "x^2-11x+20=0",
      "x^2-11x+28=0",
      "x^2-9x+28=0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The original roots have sum 7 and product 10. The shifted roots have sum 11 and product 10+2x7+4=28. Hence the equation is x^2-11x+28=0.",
    "id": "gujcet-2026-mathematics-paper-practice-01-012",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Theory of Equations",
    "difficulty": "medium",
    "question": "For the roots alpha,beta,gamma of 2x^3-7x^2+3x+11=0, the value of alpha^2+beta^2+gamma^2 is",
    "options": [
      "37/4",
      "25/4",
      "49/4",
      "31/4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For the cubic, alpha+beta+gamma=7/2 and alpha beta+beta gamma+gamma alpha=3/2. Hence the sum of squares is (7/2)^2-2(3/2)=49/4-3=37/4.",
    "id": "gujcet-2026-mathematics-paper-practice-01-013",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Theory of Equations",
    "difficulty": "medium",
    "question": "One root of x^3-3x^2-4x+12=0 is 3. The product of the other two roots is",
    "options": [
      "4",
      "-4",
      "-12",
      "12"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The product of all three roots is -12. Dividing by the known root 3 gives the product of the other two roots as -4.",
    "id": "gujcet-2026-mathematics-paper-practice-01-014",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Theory of Equations",
    "difficulty": "easy",
    "question": "The real solutions of x+4/x=5 have product",
    "options": [
      "1",
      "4",
      "-4",
      "5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Multiplying by x gives x^2-5x+4=0. By Vieta, the product of its two roots is 4.",
    "id": "gujcet-2026-mathematics-paper-practice-01-015",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Three-Dimensional Geometry",
    "difficulty": "medium",
    "question": "The angle between lines with direction ratios (1,2,2) and (2,-1,2) is",
    "options": [
      "30 degrees",
      "45 degrees",
      "arccos(4/9)",
      "90 degrees"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The dot product is 2-2+4=4. Each direction vector has magnitude 3, so cos theta=4/9 and theta=arccos(4/9).",
    "id": "gujcet-2026-mathematics-paper-practice-01-016",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Three-Dimensional Geometry",
    "difficulty": "medium",
    "question": "The plane through (1,2,3) with normal vector (2,-1,4) is",
    "options": [
      "2x-y+4z-9=0",
      "x-2y+3z-6=0",
      "2x-y+4z-12=0",
      "2x+y+4z-16=0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Using n dot (r-r0)=0 gives 2(x-1)-(y-2)+4(z-3)=0, which simplifies to 2x-y+4z-12=0.",
    "id": "gujcet-2026-mathematics-paper-practice-01-017",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Three-Dimensional Geometry",
    "difficulty": "hard",
    "question": "The distance between the parallel planes 2x-y+2z-3=0 and 2x-y+2z-12=0 is",
    "options": [
      "9",
      "1",
      "sqrt(3)",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For parallel planes ax+by+cz+d1=0 and ax+by+cz+d2=0, distance=|d2-d1|/sqrt(a^2+b^2+c^2)=9/3=3.",
    "id": "gujcet-2026-mathematics-paper-practice-01-018",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "easy",
    "question": "If a=(1,2,-1) and b=(2,-1,1), then |a+b|^2 is",
    "options": [
      "12",
      "6",
      "14",
      "10"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "a+b=(3,1,0), so |a+b|^2=3^2+1^2=10.",
    "id": "gujcet-2026-mathematics-paper-practice-01-019",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "medium",
    "question": "A unit vector perpendicular to both i+j and i-j is",
    "options": [
      "i",
      "j",
      "k",
      "(i+j)/sqrt(2)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "(i+j) x (i-j)=-2k, so a unit vector perpendicular to both is either k or -k. Among the options, k is valid.",
    "id": "gujcet-2026-mathematics-paper-practice-01-020",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "hard",
    "question": "For what value of lambda are the vectors (1,2,3), (2,1,1) and (3,lambda,4) coplanar?",
    "options": [
      "3",
      "5",
      "4",
      "2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Coplanarity requires the scalar triple product to be zero. The determinant |1 2 3; 2 1 1; 3 lambda 4|=5(lambda-3), so lambda=3.",
    "id": "gujcet-2026-mathematics-paper-practice-01-021",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "medium",
    "question": "The point dividing the segment joining position vectors a and b internally in the ratio 2:3 has position vector",
    "options": [
      "(2a-b)/5",
      "(3a-2b)/5",
      "(3a+2b)/5",
      "(2a+3b)/5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For AP:PB=2:3, the section formula gives P=(3a+2b)/(2+3)=(3a+2b)/5.",
    "id": "gujcet-2026-mathematics-paper-practice-01-022",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "medium",
    "question": "If z=1+i sqrt(3), then z^3 equals",
    "options": [
      "8",
      "-8i",
      "8i",
      "-8"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Write z=2(cos(pi/3)+i sin(pi/3)). Then z^3=8(cos pi+i sin pi)=-8.",
    "id": "gujcet-2026-mathematics-paper-practice-01-023",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "easy",
    "question": "The value of i^2026 is",
    "options": [
      "i",
      "-i",
      "1",
      "-1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Powers of i repeat every 4. Since 2026 leaves remainder 2, i^2026=i^2=-1.",
    "id": "gujcet-2026-mathematics-paper-practice-01-024",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "medium",
    "question": "If omega is a non-real cube root of unity, then (1-omega)(1-omega^2) equals",
    "options": [
      "sqrt(3)",
      "1",
      "3",
      "-3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Using 1+omega+omega^2=0 and omega^3=1, (1-omega)(1-omega^2)=1-(omega+omega^2)+omega^3=1-(-1)+1=3.",
    "id": "gujcet-2026-mathematics-paper-practice-01-025",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Definite Integration",
    "difficulty": "medium",
    "question": "The value of integral from 0 to 1 of (1-x)/(1+x) dx is",
    "options": [
      "2ln2-1",
      "1-2ln2",
      "2-ln2",
      "ln2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "(1-x)/(1+x)=-1+2/(1+x). Integrating from 0 to 1 gives -1+2ln2.",
    "id": "gujcet-2026-mathematics-paper-practice-01-026",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Definite Integration",
    "difficulty": "easy",
    "question": "The value of integral from 0 to pi/2 of sin x cos x dx is",
    "options": [
      "1",
      "1/2",
      "pi/4",
      "0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Let u=sin x, du=cos x dx. The limits become 0 to 1, giving integral_0^1 u du=1/2.",
    "id": "gujcet-2026-mathematics-paper-practice-01-027",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Definite Integration",
    "difficulty": "medium",
    "question": "For a>0, the value of integral from 0 to a of x(a^2-x^2) dx is",
    "options": [
      "a^4/2",
      "a^4/8",
      "a^4/4",
      "a^3/4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Integrate a^2x-x^3 from 0 to a: a^2(a^2/2)-a^4/4=a^4/4.",
    "id": "gujcet-2026-mathematics-paper-practice-01-028",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Definite Integration",
    "difficulty": "hard",
    "question": "The value of integral from 0 to 1 of x sqrt(1-x^2) dx is",
    "options": [
      "1/2",
      "1/6",
      "1/3",
      "2/3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Let u=1-x^2, du=-2x dx. The integral is (1/2) integral_0^1 u^(1/2) du=1/3.",
    "id": "gujcet-2026-mathematics-paper-practice-01-029",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Indefinite Integration",
    "difficulty": "easy",
    "question": "An antiderivative of (2x+1)/(x^2+x+5) is",
    "options": [
      "ln(x^2+x+5)+C",
      "1/(x^2+x+5)+C",
      "(1/2)ln(x^2+x+5)+C",
      "x^2+x+5+C"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The numerator is the derivative of x^2+x+5, so the integral is ln(x^2+x+5)+C.",
    "id": "gujcet-2026-mathematics-paper-practice-01-030",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Indefinite Integration",
    "difficulty": "medium",
    "question": "Integral of sec x(sec x+tan x) dx is",
    "options": [
      "sec x-tan x+C",
      "tan x-sec x+C",
      "sec x+C",
      "tan x+sec x+C"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "d(tan x)/dx=sec^2 x and d(sec x)/dx=sec x tan x, so the integrand is the derivative of tan x+sec x.",
    "id": "gujcet-2026-mathematics-paper-practice-01-031",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Indefinite Integration",
    "difficulty": "medium",
    "question": "Integral of sin x/(1+cos x) dx is",
    "options": [
      "tan(x/2)+C",
      "ln|1+cos x|+C",
      "-cos x+C",
      "-ln|1+cos x|+C"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Let u=1+cos x, so du=-sin x dx. The integral is -ln|u|+C.",
    "id": "gujcet-2026-mathematics-paper-practice-01-032",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Indefinite Integration",
    "difficulty": "easy",
    "question": "Integral of 1/(9+x^2) dx is",
    "options": [
      "(1/3)tan^(-1)(x/3)+C",
      "(1/3)tan^(-1)x+C",
      "tan^(-1)(x/3)+C",
      "(1/9)tan^(-1)x+C"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Using integral dx/(a^2+x^2)=(1/a)tan^(-1)(x/a)+C with a=3 gives the result.",
    "id": "gujcet-2026-mathematics-paper-practice-01-033",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "medium",
    "question": "lim as x approaches 0 of (1-cos 4x)/x^2 is",
    "options": [
      "2",
      "8",
      "16",
      "4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Using 1-cos u~u^2/2, the limit is (4^2)/2=8.",
    "id": "gujcet-2026-mathematics-paper-practice-01-034",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "medium",
    "question": "lim as x approaches 0 of [sqrt(1+3x)-1]/x is",
    "options": [
      "2/3",
      "3/2",
      "1/2",
      "3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Rationalizing gives 3/[sqrt(1+3x)+1], which tends to 3/2.",
    "id": "gujcet-2026-mathematics-paper-practice-01-035",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "hard",
    "question": "lim as x approaches 0 from the right of x ln x is",
    "options": [
      "0",
      "-infinity",
      "-1",
      "1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Write x ln x=ln x/(1/x). By L'Hospital's rule the limit is (1/x)/(-1/x^2)=-x, which tends to 0.",
    "id": "gujcet-2026-mathematics-paper-practice-01-036",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "easy",
    "question": "If lim as x approaches 2 of (x^2+ax-6)/(x-2) is finite, then a equals",
    "options": [
      "2",
      "-1",
      "1",
      "-2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For the limit to be finite, the numerator must vanish at x=2: 4+2a-6=0, giving a=1.",
    "id": "gujcet-2026-mathematics-paper-practice-01-037",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "For what value of k is the matrix [[k,2],[3,6]] singular?",
    "options": [
      "1",
      "6",
      "3",
      "2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "A matrix is singular when its determinant is zero: 6k-6=0, so k=1.",
    "id": "gujcet-2026-mathematics-paper-practice-01-038",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "If A is a nonsingular 2x2 matrix with det(A)=-2, then det(3A^(-1)) is",
    "options": [
      "-9/2",
      "-18",
      "-3/2",
      "9/2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "det(A^(-1))=1/det(A)=-1/2. For a 2x2 matrix, det(3A^(-1))=3^2 det(A^(-1))=9(-1/2)=-9/2.",
    "id": "gujcet-2026-mathematics-paper-practice-01-039",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  },
  {
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "If A is a 2x2 matrix with det(A)=-3, then det(A^T A) is",
    "options": [
      "-9",
      "9",
      "3",
      "-3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "det(A^T A)=det(A^T)det(A)=det(A)^2=9.",
    "id": "gujcet-2026-mathematics-paper-practice-01-040",
    "source": {
      "kind": "original",
      "reference": "GUJCET 2026 Engineering syllabus/pattern alignment",
      "url": "https://www.gsebeservice.com/web/",
      "checkedOn": "2026-08-22"
    }
  }
];
