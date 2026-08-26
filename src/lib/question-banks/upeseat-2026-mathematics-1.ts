import type { Question } from '../questions';

export const UPESEAT_2026_MATHEMATICS_1: Question[] = [
  {
    "id": "upeseat-2026-ma-001",
    "section": "Mathematics",
    "topic": "Sets",
    "difficulty": "easy",
    "question": "For two finite sets A and B, n(A)=35, n(B)=28 and n(A intersection B)=15. What is n(A symmetric-difference B)?",
    "options": [
      "30",
      "33",
      "48",
      "63"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The symmetric difference contains elements in exactly one of the sets. Thus n(A symmetric-difference B)=n(A)+n(B)-2n(A intersection B)=35+28-30=33.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-002",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "medium",
    "question": "For what value of k do the roots of x^2 - 10x + k = 0 differ by 4?",
    "options": [
      "16",
      "24",
      "21",
      "25"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "If the roots are alpha,beta, then (alpha-beta)^2=(alpha+beta)^2-4alpha beta=100-4k. Setting this equal to 16 gives k=21.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-003",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "medium",
    "question": "What is the modulus of (3 - 4i)/(1 + i)?",
    "options": [
      "5",
      "sqrt(2)/5",
      "5sqrt(2)",
      "5/sqrt(2)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The modulus of a quotient is the quotient of moduli: |3-4i|/|1+i|=5/sqrt(2).",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-004",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "medium",
    "question": "An arithmetic progression starts with 7. The sum of its first 15 terms is 420. What is its 15th term?",
    "options": [
      "42",
      "49",
      "45",
      "52"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "S15=(15/2)[2(7)+14d]=420, so 14+14d=56 and d=3. Hence a15=7+14(3)=49.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-005",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "medium",
    "question": "An infinite geometric progression has first term 12 and common ratio -1/3. What is its sum?",
    "options": [
      "8",
      "18",
      "9",
      "6"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For |r|<1, S=a/(1-r)=12/(1+1/3)=9.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-006",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "hard",
    "question": "A code consists of three distinct letters chosen from A,B,C,D,E followed by two distinct digits chosen from 1,2,3. How many different codes are possible?",
    "options": [
      "180",
      "360",
      "720",
      "120"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The ordered letters can be chosen in P(5,3)=60 ways and the ordered digits in P(3,2)=6 ways. Total=60x6=360.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-007",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "medium",
    "question": "What is the coefficient of x^6 in the expansion of (1+x^2)^5?",
    "options": [
      "5",
      "20",
      "10",
      "15"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The term containing x^6 occurs when (x^2)^r=x^6, so r=3. Its coefficient is C(5,3)=10.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-008",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "easy",
    "question": "Let A=[[1,2],[-1,3]] and B=[[2,0],[1,-2]]. What is trace(AB)?",
    "options": [
      "-6",
      "2",
      "-2",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "AB=[[4,-4],[1,-6]]. Therefore trace(AB)=4+(-6)=-2.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-009",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "For what value of k is the matrix [[k,2],[3,6]] singular?",
    "options": [
      "1",
      "2",
      "3",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A matrix is singular when its determinant is zero: 6k-6=0, so k=1.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-010",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "easy",
    "question": "What is tan 15 degrees x tan 75 degrees?",
    "options": [
      "sqrt(3)",
      "1",
      "1/3",
      "3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Since 75 degrees=90 degrees-15 degrees, tan75=cot15. Their product is 1.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-011",
    "section": "Mathematics",
    "topic": "Straight Lines",
    "difficulty": "medium",
    "question": "A line passes through (2,-3) and is parallel to 3x-4y+7=0. What is its x-intercept?",
    "options": [
      "4",
      "-6",
      "3",
      "6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A parallel line has form 3x-4y+c=0. Using (2,-3): 6+12+c=0, so c=-18. At y=0, 3x-18=0, hence x=6.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-012",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "medium",
    "question": "A circle has centre (2,-3) and passes through the point (6,0). Which equation represents the circle?",
    "options": [
      "(x-2)^2+(y+3)^2=4",
      "(x+2)^2+(y-3)^2=25",
      "(x-2)^2+(y+3)^2=20",
      "(x-2)^2+(y+3)^2=25"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The radius squared is (6-2)^2+(0+3)^2=16+9=25. Hence the circle is (x-2)^2+(y+3)^2=25.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-013",
    "section": "Mathematics",
    "topic": "Parabola",
    "difficulty": "medium",
    "question": "The parabola y^2=12x has parametric point P corresponding to t=2. The tangent at P meets the directrix of the parabola at Q. What is the y-coordinate of Q?",
    "options": [
      "3",
      "6",
      "9/2",
      "9"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For y^2=4ax, a=3. The tangent at parameter t is ty=x+at^2. With t=2, 2y=x+12. The directrix is x=-3, so 2y=9 and y=9/2.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-014",
    "section": "Mathematics",
    "topic": "Ellipse",
    "difficulty": "hard",
    "question": "For the ellipse x^2/36 + y^2/20 = 1, what is the distance between its two foci?",
    "options": [
      "4",
      "6",
      "10",
      "8"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Here a^2=36 and b^2=20, so c^2=16 and c=4. The distance between the foci is 2c=8.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-015",
    "section": "Mathematics",
    "topic": "Hyperbola",
    "difficulty": "medium",
    "question": "What are the foci of the hyperbola x^2/16 - y^2/9 = 1?",
    "options": [
      "(+-5,0)",
      "(+-4,0)",
      "(0,+-5)",
      "(+-3,0)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For x^2/a^2-y^2/b^2=1, c^2=a^2+b^2=16+9=25, so c=5.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-016",
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "medium",
    "question": "Evaluate lim(x->0) ln(1+2x)/(e^x-1).",
    "options": [
      "1",
      "1/2",
      "2",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "As x->0, ln(1+2x)~2x and e^x-1~x, so the ratio tends to 2.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-017",
    "section": "Mathematics",
    "topic": "Continuity",
    "difficulty": "medium",
    "question": "For x not equal to 2, let f(x)=(x^2+px+q)/(x-2), and let f(2)=7. If f is continuous at x=2, what is p+q?",
    "options": [
      "-5",
      "-3",
      "-7",
      "7"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Continuity requires x=2 to cancel the numerator: 4+2p+q=0. After division the limit is 2+(p+2)=p+4=7, so p=3 and q=-10. Hence p+q=-7.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-018",
    "section": "Mathematics",
    "topic": "Differentiation",
    "difficulty": "medium",
    "question": "If y=(x^2+1)/(x+1), what is dy/dx at x=1?",
    "options": [
      "1",
      "1/2",
      "2",
      "0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By the quotient rule, y'=[2x(x+1)-(x^2+1)]/(x+1)^2. At x=1 this is (4-2)/4=1/2.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-019",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "hard",
    "question": "A rectangle has one vertex at the origin, sides along the coordinate axes, and opposite vertex (x,y) on x^2+4y=16 in the first quadrant. What is its maximum area?",
    "options": [
      "16/(3sqrt(3))",
      "8sqrt(3)",
      "32/(3sqrt(3))",
      "16/3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Here y=(16-x^2)/4, so area A=x(16-x^2)/4. Setting A'=0 gives 16-3x^2=0, hence x=4/sqrt(3). Then y=8/3 and A=32/(3sqrt(3)).",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-020",
    "section": "Mathematics",
    "topic": "Integration",
    "difficulty": "medium",
    "question": "Evaluate the definite integral from 0 to 1 of (2x+3)^2 dx.",
    "options": [
      "49/3",
      "16",
      "25/3",
      "64/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Expand: (2x+3)^2=4x^2+12x+9. The integral is 4/3+6+9=49/3.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-021",
    "section": "Mathematics",
    "topic": "Integration",
    "difficulty": "medium",
    "question": "What is the area between the curve y=|2x-1| and the x-axis from x=0 to x=1?",
    "options": [
      "1",
      "1/4",
      "3/4",
      "1/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The graph forms two congruent triangles, each with base 1/2 and height 1. Their total area is 2×(1/2)(1/2)(1)=1/2.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-022",
    "section": "Mathematics",
    "topic": "Applications of Integrals",
    "difficulty": "medium",
    "question": "The graphs y=|x| and y=2 enclose a finite region. What is its area?",
    "options": [
      "2",
      "8",
      "6",
      "4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "They intersect at x=+-2. By symmetry, area=2 integral_0^2 (2-x) dx=2[2x-x^2/2]_0^2=4.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-023",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "hard",
    "question": "A function satisfies dy/dx - y = e^(2x) with y(0)=0. What is y(1)?",
    "options": [
      "e^2+e",
      "e^2-e",
      "e-1",
      "e^2-1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using integrating factor e^(-x), d(ye^(-x))/dx=e^x. Integrating gives ye^(-x)=e^x-1 from y(0)=0, so y=e^(2x)-e^x. Thus y(1)=e^2-e.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-024",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "medium",
    "question": "If |a+b|=|a-b| for two nonzero vectors a and b, what must be true?",
    "options": [
      "a and b are perpendicular",
      "a and b are parallel",
      "|a|=|b|",
      "a=-b"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Squaring both sides gives |a|^2+|b|^2+2a.b=|a|^2+|b|^2-2a.b, so a.b=0; the vectors are perpendicular.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-025",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "medium",
    "question": "Two vectors are perpendicular and have magnitudes 3 and 4. What is the magnitude of their cross product?",
    "options": [
      "12",
      "7",
      "1",
      "5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "|a x b|=|a||b|sin90 degrees=3x4=12.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-026",
    "section": "Mathematics",
    "topic": "3D Geometry",
    "difficulty": "medium",
    "question": "A line has direction ratios (1,2,2), and a plane has equation 2x-y+2z=7. If theta is the acute angle between the line and the plane, what is sin(theta)?",
    "options": [
      "2/9",
      "4/9",
      "5/9",
      "8/9"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For line direction d=(1,2,2) and plane normal n=(2,-1,2), sin(theta)=|d dot n|/(|d||n|)=|2-2+4|/(3×3)=4/9.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-027",
    "section": "Mathematics",
    "topic": "3D Geometry",
    "difficulty": "medium",
    "question": "Find the perpendicular distance of (1,1,1) from the plane x+2y+2z=9.",
    "options": [
      "2/3",
      "4/3",
      "4",
      "1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Distance=|1+2+2-9|/sqrt(1+4+4)=4/3.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-028",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "easy",
    "question": "A fair coin is tossed three times. What is the probability of getting exactly one head?",
    "options": [
      "3/8",
      "1/8",
      "1/2",
      "3/4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "There are C(3,1)=3 favorable outcomes among 2^3=8 equally likely outcomes.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-029",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "Two fair dice are rolled. Given that the first die shows an even number, what is the probability that the sum is 8?",
    "options": [
      "1/9",
      "1/12",
      "1/6",
      "1/3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Conditioning on the first die being even leaves 18 equally likely ordered pairs. Sum 8 occurs for (2,6),(4,4),(6,2): 3/18=1/6.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-030",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "easy",
    "question": "A data set has mean 12. What is the mean of the transformed data 3x-5?",
    "options": [
      "31",
      "36",
      "29",
      "41"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Means transform linearly: 3(12)-5=31.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-031",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "question": "A variable x has variance 4. What is the variance of 2x+7?",
    "options": [
      "16",
      "8",
      "11",
      "4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Adding a constant does not affect variance, while multiplying by 2 multiplies variance by 2^2. Thus variance=4x4=16.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-032",
    "section": "Mathematics",
    "topic": "Quadratic Functions",
    "difficulty": "easy",
    "question": "What is the minimum value of x^2-6x+13?",
    "options": [
      "3",
      "4",
      "9",
      "13"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "x^2-6x+13=(x-3)^2+4, whose minimum is 4.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-033",
    "section": "Mathematics",
    "topic": "Functions",
    "difficulty": "medium",
    "question": "If f(x)=(x-3)/2, what is f^(-1)(5)?",
    "options": [
      "13",
      "7",
      "10",
      "2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Let y=(x-3)/2. Solving for x gives x=2y+3, so f^(-1)(5)=2(5)+3=13.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-034",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "If A=[[2,1],[1,1]], what is the trace of A^(-1)?",
    "options": [
      "1",
      "2",
      "4",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "det A=1, so A^(-1)=[[1,-1],[-1,2]]. Its trace is 1+2=3.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ma-035",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "Two distinct integers are chosen uniformly from {1,2,3,4,5,6,7,8,9}. What is the probability that exactly one of them is divisible by 3?",
    "options": [
      "1/3",
      "2/3",
      "5/12",
      "1/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "There are 3 multiples of 3 and 6 nonmultiples. Favorable pairs=3x6=18; total pairs=C(9,2)=36. Probability=18/36=1/2.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  }
];
