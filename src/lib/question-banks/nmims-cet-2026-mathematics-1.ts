import type { Question } from '../questions';

export const NMIMS_CET_2026_MATHEMATICS_1: Question[] = [
  {
    "id": "nmims-cet-2026-ma-001",
    "section": "Mathematics",
    "topic": "Sets and Functions",
    "difficulty": "medium",
    "question": "For finite sets A and B, |A|=12, |B|=15 and |A union B|=20. How many elements belong to exactly one of A or B?",
    "options": [
      "13",
      "7",
      "20",
      "27"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "|A intersection B|=12+15-20=7. Exactly one set contains (12-7)+(15-7)=13 elements.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-002",
    "section": "Mathematics",
    "topic": "Sets and Functions",
    "difficulty": "hard",
    "question": "For real x, what is the range of f(x)=(x^2+2x+5)/(x^2+2x+2)?",
    "options": [
      "[1,4]",
      "(1,4)",
      "[1,4)",
      "(1,4]"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Let t=(x+1)^2>=0. Then f=(t+4)/(t+1)=1+3/(t+1). Its maximum 4 occurs at t=0, while it approaches but never reaches 1 as t grows. Hence the range is (1,4].",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-003",
    "section": "Mathematics",
    "topic": "Sets and Functions",
    "difficulty": "medium",
    "question": "Let f(x)=2x+1 and g(x)=x^2. What is f(g(3))?",
    "options": [
      "49",
      "13",
      "7",
      "19"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "g(3)=9, so f(g(3))=2(9)+1=19.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-004",
    "section": "Mathematics",
    "topic": "Complex Number and Quadratic Equation",
    "difficulty": "medium",
    "question": "A complex number z satisfies z+conjugate(z)=6 and z*conjugate(z)=13. What is |z-3|?",
    "options": [
      "1",
      "2",
      "sqrt(13)",
      "4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Writing z=x+iy, z+conjugate(z)=2x=6 gives x=3. Also |z|^2=x^2+y^2=13, so y^2=4. Thus |z-3|=|iy|=2.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-005",
    "section": "Mathematics",
    "topic": "Complex Number and Quadratic Equation",
    "difficulty": "medium",
    "question": "If alpha and beta are roots of x^2-5x+7=0, what is alpha^2+beta^2?",
    "options": [
      "11",
      "25",
      "14",
      "39"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "alpha+beta=5 and alpha beta=7. Hence alpha^2+beta^2=(alpha+beta)^2-2alpha beta=25-14=11.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-006",
    "section": "Mathematics",
    "topic": "Complex Number and Quadratic Equation",
    "difficulty": "hard",
    "question": "Let z=x+iy. Which equation represents the locus |z-1|=2|z+1|?",
    "options": [
      "x^2+y^2-(10/3)x+1=0",
      "x^2+y^2+(10/3)y+1=0",
      "x^2+y^2+(4/3)x-1=0",
      "x^2+y^2+(10/3)x+1=0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Squaring gives (x-1)^2+y^2=4[(x+1)^2+y^2]. Rearrangement gives 3x^2+3y^2+10x+3=0, or x^2+y^2+(10/3)x+1=0.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-007",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "What is the determinant of the matrix [[2,3],[1,4]]?",
    "options": [
      "11",
      "8",
      "2",
      "5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The determinant is 2(4)-3(1)=5.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-008",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "The equations x+2y=5 and 3x+5y=13 can be written as a matrix equation. What is x+y?",
    "options": [
      "3",
      "2",
      "4",
      "5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Subtracting 3 times the first equation from the second gives -y=-2, so y=2 and x=1. Thus x+y=3.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-009",
    "section": "Mathematics",
    "topic": "Permutation and Combination",
    "difficulty": "medium",
    "question": "A four-member team is chosen from 6 engineers and 4 designers. In how many ways can the team contain at least 2 designers?",
    "options": [
      "90",
      "115",
      "120",
      "126"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Count 2, 3 or 4 designers: C(4,2)C(6,2)+C(4,3)C(6,1)+C(4,4)C(6,0)=6(15)+4(6)+1=115.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-010",
    "section": "Mathematics",
    "topic": "Permutation and Combination",
    "difficulty": "medium",
    "question": "A committee of 3 is chosen from 5 men and 4 women. How many committees contain at least one woman?",
    "options": [
      "84",
      "74",
      "64",
      "40"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Total committees=C(9,3)=84. All-male committees=C(5,3)=10. Required=84-10=74.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-011",
    "section": "Mathematics",
    "topic": "Mathematical Induction",
    "difficulty": "easy",
    "question": "In an induction proof of 1+3+5+...+(2n-1)=n^2, which term is added when passing from n=k to n=k+1?",
    "options": [
      "2k+1",
      "2k-1",
      "k+1",
      "2k+2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The (k+1)th odd number is 2(k+1)-1=2k+1.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-012",
    "section": "Mathematics",
    "topic": "Binomial Theorem and its Application",
    "difficulty": "hard",
    "question": "What is the constant term in the expansion of (x^2+2/x)^6?",
    "options": [
      "120",
      "160",
      "240",
      "480"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The general term is C(6,r)(x^2)^(6-r)(2/x)^r, with x exponent 12-3r. For a constant term, r=4. The coefficient is C(6,4)2^4=15(16)=240.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-013",
    "section": "Mathematics",
    "topic": "Binomial Theorem and its Application",
    "difficulty": "medium",
    "question": "What is the least non-negative remainder when 76^6 - 26^6 is divided by 625?",
    "options": [
      "150",
      "300",
      "450",
      "600"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Modulo 625, 76^6=(1+75)^6 is congruent to 1+6*75=451 because every term from 75^2 onward is divisible by 625. Similarly, 26^6=(1+25)^6 is congruent to 1+6*25=151. Therefore the required remainder is 451-151=300.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-014",
    "section": "Mathematics",
    "topic": "Sequence and Series",
    "difficulty": "medium",
    "question": "Evaluate the infinite series sum from n=1 to infinity of (3n+1)/2^n.",
    "options": [
      "5",
      "6",
      "8",
      "7"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using sum n/2^n=2 and sum 1/2^n=1 for n>=1, the series equals 3(2)+1=7.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-015",
    "section": "Mathematics",
    "topic": "Limit, Continuity and Differentiability",
    "difficulty": "easy",
    "question": "Evaluate lim(x->0) sin(3x)/(5x).",
    "options": [
      "5/3",
      "3",
      "3/5",
      "1/5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using lim sin u/u=1, sin(3x)/(5x)=(3/5)[sin(3x)/(3x)] ->3/5.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-016",
    "section": "Mathematics",
    "topic": "Limit, Continuity and Differentiability",
    "difficulty": "medium",
    "question": "Define f(x)=a(1-cos x)/x^2 for x not equal to 0 and f(0)=3. What value of a makes f continuous at x=0?",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "As x approaches 0, (1-cos x)/x^2 approaches 1/2. Continuity requires a/2=3, so a=6.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-017",
    "section": "Mathematics",
    "topic": "Limit, Continuity and Differentiability",
    "difficulty": "medium",
    "question": "For the curve 2x^2+3xy-y^2=4, what is dy/dx at the point (1,1)?",
    "options": [
      "7",
      "-1/7",
      "-7",
      "1/7"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Implicit differentiation gives 4x+3y+3x(dy/dx)-2y(dy/dx)=0. Thus dy/dx=-(4x+3y)/(3x-2y), which equals -7 at (1,1).",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-018",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "medium",
    "question": "For a>0, evaluate the definite integral from 0 to a of |x-a/3| dx.",
    "options": [
      "a^2/6",
      "5a^2/18",
      "a^2/3",
      "7a^2/18"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Split at x=a/3. The integral is integral_0^(a/3)(a/3-x)dx + integral_(a/3)^a(x-a/3)dx = a^2/18 + 2a^2/9 = 5a^2/18.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-019",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "easy",
    "question": "If the definite integral from 0 to 2 of f(x) dx equals 5, what is the value of the definite integral from 0 to 2 of [3f(x)-2] dx?",
    "options": [
      "9",
      "11",
      "13",
      "15"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By linearity, integral_0^2[3f(x)-2]dx = 3(5)-2(2)=15-4=11.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-020",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "A point P=(a,2a), with a>1, is at a distance 3/sqrt(5) from the line x-2y+4=0. What is a?",
    "options": [
      "1/3",
      "5/3",
      "7/3",
      "3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The distance is |a-4a+4|/sqrt(5)=|4-3a|/sqrt(5). Hence |4-3a|=3, giving a=1/3 or 7/3. Since a>1, a=7/3.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-021",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "The circle x^2+y^2-4x+6y+c=0 is tangent to the x-axis. What is the value of c?",
    "options": [
      "1",
      "3",
      "4",
      "9"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The center is (2,-3), so tangency to the x-axis requires radius 3. Here r^2=2^2+(-3)^2-c=13-c. Thus 13-c=9, so c=4.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-022",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "easy",
    "question": "What is the slope of the tangent to y=x^2 at x=3?",
    "options": [
      "3",
      "9",
      "2",
      "6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "dy/dx=2x, so at x=3 the slope is 6.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-023",
    "section": "Mathematics",
    "topic": "Three Dimensional Geometry",
    "difficulty": "easy",
    "question": "Which point lies on the line r=(1,-2,3)+lambda(2,1,-1) in three-dimensional space?",
    "options": [
      "(3,-1,1)",
      "(5,1,1)",
      "(5,0,1)",
      "(1,0,5)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For lambda=2, the point is (1+4,-2+2,3-2)=(5,0,1). The other listed points do not satisfy the same parameter value in all three coordinates.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-024",
    "section": "Mathematics",
    "topic": "Three Dimensional Geometry",
    "difficulty": "medium",
    "question": "A plane passes through P(1,-1,2) and is parallel to both vectors (1,2,0) and (0,1,1). Which equation is the plane?",
    "options": [
      "2x+y+z-3=0",
      "2x-y+z-5=0",
      "x-2y+z-5=0",
      "2x-y-z-1=0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A normal vector is (1,2,0)x(0,1,1)=(2,-1,1). Using P gives 2(x-1)-(y+1)+(z-2)=0, hence 2x-y+z-5=0.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-025",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "easy",
    "question": "Let a=(2,1,-1) and b=(1,-2,2). For what value of lambda is a+lambda b perpendicular to b?",
    "options": [
      "2/9",
      "-2/9",
      "9/2",
      "-9/2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Perpendicularity requires (a+lambda b).b=0. Here a.b=-2 and b.b=9, so -2+9lambda=0 and lambda=2/9.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-026",
    "section": "Mathematics",
    "topic": "Statistics and Probability",
    "difficulty": "easy",
    "question": "A data set has five values. If one value is changed from 4 to 14 while the other four stay fixed, by how much does the arithmetic mean increase?",
    "options": [
      "2",
      "5/2",
      "1",
      "10"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The total increases by 10. With five observations, the mean therefore increases by 10/5=2.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-027",
    "section": "Mathematics",
    "topic": "Statistics and Probability",
    "difficulty": "medium",
    "question": "A bag contains 4 red, 3 blue and 2 green balls. One ball is drawn at random. What is the probability that it is red or green?",
    "options": [
      "4/9",
      "2/3",
      "5/9",
      "7/9"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "There are 6 favorable balls out of 9 total, so the probability is 6/9=2/3.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-028",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "For an acute angle theta, sin(theta)=3/5. What is tan(45 degrees-theta)?",
    "options": [
      "7",
      "-1/7",
      "1/7",
      "1/4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For acute theta, cos theta=4/5 and tan theta=3/4. Therefore tan(45-theta)=(1-3/4)/(1+3/4)=1/7.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-029",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "In triangle ABC, tan A=1/2 and tan B=1/5. What is cot C?",
    "options": [
      "-9/7",
      "-7/9",
      "9/7",
      "7/9"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "tan(A+B)=(1/2+1/5)/(1-1/10)=7/9. Since C=pi-(A+B), tan C=-7/9, so cot C=-9/7.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ma-030",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "hard",
    "question": "For an acute angle theta, cos(theta)-sin(theta)=1/3. What is tan(2theta)?",
    "options": [
      "8/sqrt(17)",
      "sqrt(17)/8",
      "8/17",
      "sqrt(17)/9"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Squaring gives 1-sin2theta=1/9, so sin2theta=8/9. Also cos2theta=(cos theta-sin theta)(cos theta+sin theta)=(1/3)(sqrt(17)/3)=sqrt(17)/9. Therefore tan2theta=8/sqrt(17).",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  }
];
