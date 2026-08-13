import type { Question } from '../questions';

export const AEEE_2026_BTECH_FULL_MOCK_1: Question[] = [
  {
    "id": "aeee-2026-btech-full-01-001",
    "section": "Mathematics",
    "topic": "Sets, relations and functions",
    "difficulty": "medium",
    "question": "For f(x) = (2x-3)/(x+1), which real number is excluded from the range of f?",
    "options": [
      "2",
      "3",
      "1",
      "-1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Let y = (2x-3)/(x+1). Then x = -(y+3)/(y-2), which exists for every real y except y = 2. Thus 2 is excluded from the range.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-002",
    "section": "Mathematics",
    "topic": "Complex numbers and quadratic equations",
    "difficulty": "easy",
    "question": "What is the principal argument of -1+i?",
    "options": [
      "pi/4",
      "3pi/4",
      "-3pi/4",
      "5pi/4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The point (-1,1) lies in quadrant II and makes a 45 degree reference angle, so the principal argument is 3pi/4.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-003",
    "section": "Mathematics",
    "topic": "Matrices and determinants",
    "difficulty": "easy",
    "question": "If A=[[1,2],[3,4]], what is det(A)?",
    "options": [
      "10",
      "-10",
      "2",
      "-2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "det(A)=1*4-2*3=-2.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-004",
    "section": "Mathematics",
    "topic": "Permutations and combinations",
    "difficulty": "medium",
    "question": "How many distinct arrangements of the letters in LEVEL are possible?",
    "options": [
      "120",
      "30",
      "20",
      "60"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "LEVEL has 5 letters with L repeated twice and E repeated twice, so the count is 5!/(2!2!)=30.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-005",
    "section": "Mathematics",
    "topic": "Binomial theorem",
    "difficulty": "medium",
    "question": "What is the constant term in (x^2+1/x)^6?",
    "options": [
      "6",
      "20",
      "30",
      "15"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "General term uses (x^2)^(6-r)(x^-1)^r = x^(12-3r). Constant requires r=4, giving coefficient C(6,4)=15.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-006",
    "section": "Mathematics",
    "topic": "Sequences and series",
    "difficulty": "easy",
    "question": "The 12th term of an arithmetic progression is 35 and the first term is 2. What is the common difference?",
    "options": [
      "3",
      "4",
      "5",
      "2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "a12=a+11d, so 35=2+11d and d=3.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-007",
    "section": "Mathematics",
    "topic": "Limits, continuity and differentiation",
    "difficulty": "easy",
    "question": "For f(x)=x^3-3x, what is f'(2)?",
    "options": [
      "9",
      "12",
      "3",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "f'(x)=3x^2-3, hence f'(2)=12-3=9.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-008",
    "section": "Mathematics",
    "topic": "Applications of derivatives",
    "difficulty": "easy",
    "question": "For f(x)=x^2-6x+11, what is its minimum value?",
    "options": [
      "1",
      "3",
      "2",
      "5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Complete the square: f(x)=(x-3)^2+2, so the minimum value is 2.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-009",
    "section": "Mathematics",
    "topic": "Integral calculus",
    "difficulty": "easy",
    "question": "A function F satisfies F'(x)=3x^2 and F(0)=4. What is F(2)?",
    "options": [
      "10",
      "12",
      "16",
      "8"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Integrating gives F(x)=x^3+C. F(0)=4 gives C=4, so F(2)=12.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-010",
    "section": "Mathematics",
    "topic": "Differential equations",
    "difficulty": "medium",
    "question": "What is the order and degree of (d^2y/dx^2)^3 + dy/dx = x?",
    "options": [
      "Order 2, degree 3",
      "Order 3, degree 1",
      "Order 3, degree 2",
      "Order 2, degree 1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The highest derivative is second order and appears to the third power, so the order is 2 and degree is 3.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-011",
    "section": "Mathematics",
    "topic": "Coordinate geometry",
    "difficulty": "easy",
    "question": "What is the slope of the line through (2,3) and (5,9)?",
    "options": [
      "1",
      "3",
      "2",
      "6"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Slope=(9-3)/(5-2)=6/3=2.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-012",
    "section": "Mathematics",
    "topic": "Three-dimensional geometry",
    "difficulty": "easy",
    "question": "What are the direction cosines of the positive z-axis?",
    "options": [
      "(0,1,0)",
      "(1,1,1)",
      "(1,0,0)",
      "(0,0,1)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The positive z-axis makes angles 90,90,0 degrees with x,y,z axes, so its direction cosines are 0,0,1.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-013",
    "section": "Mathematics",
    "topic": "Vector algebra",
    "difficulty": "medium",
    "question": "The area of the parallelogram formed by a=(2,0,0) and b=(0,3,0) is?",
    "options": [
      "9",
      "6",
      "3",
      "5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Area=|a cross b|=|(0,0,6)|=6.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-014",
    "section": "Mathematics",
    "topic": "Probability and statistics",
    "difficulty": "medium",
    "question": "If P(A)=0.6, P(B)=0.5 and P(A intersection B)=0.3, what is P(A union B)?",
    "options": [
      "0.8",
      "0.2",
      "0.5",
      "1.1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "P(A union B)=P(A)+P(B)-P(A intersection B)=0.6+0.5-0.3=0.8.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-015",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "What is cos(A+B) equal to?",
    "options": [
      "sin A cos B + cos A sin B",
      "cos A cos B - sin A sin B",
      "sin A sin B - cos A cos B",
      "cos A cos B + sin A sin B"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The cosine addition formula is cos(A+B)=cosA cosB-sinA sinB.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-016",
    "section": "Mathematics",
    "topic": "Three-dimensional geometry",
    "difficulty": "medium",
    "question": "A line has direction ratios proportional to (2,-3,6). What is a unit direction vector along it?",
    "options": [
      "(2/7,-3/7,6/7)",
      "(2,-3,6)",
      "(2/5,-3/5,6/5)",
      "(1/2,-1/3,1/6)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The magnitude of (2,-3,6) is sqrt(4+9+36)=7, so divide by 7.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-017",
    "section": "Mathematics",
    "topic": "Sets, relations and functions",
    "difficulty": "easy",
    "question": "If f(x)=3x+5, what is f inverse of 20?",
    "options": [
      "3",
      "5",
      "8.333333333333334",
      "15"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Solving 3x+5=20 gives x=5, so f inverse of 20 is 5.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-018",
    "section": "Mathematics",
    "topic": "Vector algebra",
    "difficulty": "hard",
    "question": "If a+b is perpendicular to a-b, what relation follows?",
    "options": [
      "a=-b",
      "a dot b=0",
      "|a|=|b|",
      "a=b"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "(a+b) dot (a-b)=|a|^2-|b|^2. Perpendicularity makes this zero, so |a|=|b|.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-019",
    "section": "Mathematics",
    "topic": "Vector algebra",
    "difficulty": "easy",
    "question": "What is the magnitude of vector 3i+4j?",
    "options": [
      "7",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Magnitude=sqrt(3^2+4^2)=5.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-020",
    "section": "Mathematics",
    "topic": "Probability and statistics",
    "difficulty": "easy",
    "question": "The mean of 4,7,9,10 is?",
    "options": [
      "7",
      "7.5",
      "8",
      "8.5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Mean=(4+7+9+10)/4=30/4=7.5.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-021",
    "section": "Mathematics",
    "topic": "Three-dimensional geometry",
    "difficulty": "medium",
    "question": "What is the angle between the lines with direction ratios (1,0,1) and (1,1,0)?",
    "options": [
      "45 degrees",
      "90 degrees",
      "30 degrees",
      "60 degrees"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Their dot product is 1, and each has magnitude sqrt2, so cos theta=1/2 and theta=60 degrees.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-022",
    "section": "Mathematics",
    "topic": "Integral calculus",
    "difficulty": "medium",
    "question": "The area bounded by y=x, the x-axis, x=1 and x=3 is?",
    "options": [
      "8",
      "4",
      "2",
      "6"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The area is integral from 1 to 3 of x dx = (9-1)/2=4.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-023",
    "section": "Mathematics",
    "topic": "Three-dimensional geometry",
    "difficulty": "easy",
    "question": "What is the midpoint of the segment joining (1,2,3) and (5,6,7)?",
    "options": [
      "(3,4,5)",
      "(2,4,5)",
      "(3,3,5)",
      "(6,8,10)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Average corresponding coordinates: ((1+5)/2,(2+6)/2,(3+7)/2)=(3,4,5).",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-024",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "easy",
    "question": "What is sin 30 degrees?",
    "options": [
      "0.5",
      "0.7071067811865476",
      "0.8660254037844386",
      "0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "sin30 degrees=1/2.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-025",
    "section": "Mathematics",
    "topic": "Differential equations",
    "difficulty": "hard",
    "question": "The family y=C1 cos 2x + C2 sin 2x satisfies which differential equation?",
    "options": [
      "y'+4y=0",
      "y''+2y=0",
      "y''-4y=0",
      "y''+4y=0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Differentiating twice gives y''=-4(C1 cos2x+C2 sin2x)=-4y, hence y''+4y=0.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-026",
    "section": "Mathematics",
    "topic": "Sequences and series",
    "difficulty": "medium",
    "question": "If 1+2+...+n=210, what is n?",
    "options": [
      "20",
      "14",
      "21",
      "28"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "n(n+1)/2=210 gives n^2+n-420=0, whose positive root is 20.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-027",
    "section": "Mathematics",
    "topic": "Complex numbers and quadratic equations",
    "difficulty": "easy",
    "question": "If z=(1+i)^4, what is z?",
    "options": [
      "4j",
      "(-0-4j)",
      "-4",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "(1+i)^2=2i, so (1+i)^4=(2i)^2=-4.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-028",
    "section": "Mathematics",
    "topic": "Permutations and combinations",
    "difficulty": "hard",
    "question": "How many nonnegative integer solutions does x+y+z=8 have if x>=2?",
    "options": [
      "45",
      "21",
      "28",
      "36"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Let x'=x-2>=0. Then x'+y+z=6. By stars and bars the count is C(8,2)=28.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-029",
    "section": "Mathematics",
    "topic": "Complex numbers and quadratic equations",
    "difficulty": "medium",
    "question": "If alpha and beta are roots of 2x^2-5x+2=0, what is alpha^2+beta^2?",
    "options": [
      "4.25",
      "2.25",
      "5.25",
      "6.25"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "alpha+beta=5/2 and alpha beta=1. Therefore alpha^2+beta^2=(5/2)^2-2=25/4-8/4=17/4.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-030",
    "section": "Mathematics",
    "topic": "Matrices and determinants",
    "difficulty": "easy",
    "question": "For A=[[2,1],[1,2]], what is the (1,1) entry of A^2?",
    "options": [
      "6",
      "5",
      "8",
      "4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A^2 has first entry 2*2+1*1=5.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-031",
    "section": "Mathematics",
    "topic": "Coordinate geometry",
    "difficulty": "easy",
    "question": "What is the eccentricity of the parabola y^2=8x?",
    "options": [
      "1.4142135623730951",
      "1",
      "0",
      "2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Every parabola has eccentricity 1.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-032",
    "section": "Mathematics",
    "topic": "Differential equations",
    "difficulty": "easy",
    "question": "The differential equation dy/dx=2y has solution y=Ce^(kx). What is k?",
    "options": [
      "1",
      "-2",
      "4",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Substitution gives ky=2y, hence k=2.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-033",
    "section": "Mathematics",
    "topic": "Binomial theorem",
    "difficulty": "easy",
    "question": "What is the coefficient of x^3 in (1+x)^6?",
    "options": [
      "30",
      "35",
      "15",
      "20"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The coefficient is C(6,3)=20.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-034",
    "section": "Mathematics",
    "topic": "Binomial theorem",
    "difficulty": "medium",
    "question": "What is the sum of all coefficients of (2x-3)^7?",
    "options": [
      "128",
      "1",
      "-1",
      "-5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The sum of coefficients is obtained by setting x=1: (2-3)^7=(-1)^7=-1.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-035",
    "section": "Mathematics",
    "topic": "Limits, continuity and differentiation",
    "difficulty": "medium",
    "question": "What is lim x->infinity of (3x^2+2x-1)/(x^2-5)?",
    "options": [
      "3",
      "0",
      "1",
      "5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Divide numerator and denominator by x^2. Lower-degree terms vanish, leaving the ratio of leading coefficients 3.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-036",
    "section": "Mathematics",
    "topic": "Binomial theorem",
    "difficulty": "medium",
    "question": "What is the middle term coefficient in (2+x)^8?",
    "options": [
      "896",
      "1792",
      "560",
      "1120"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The middle term is r=4 with coefficient C(8,4)*2^4=70*16=1120.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-037",
    "section": "Mathematics",
    "topic": "Probability and statistics",
    "difficulty": "hard",
    "question": "A random variable X takes values 0,1,2 with probabilities 1/4,1/2,1/4. What is Var(X)?",
    "options": [
      "1.5",
      "0.25",
      "1",
      "0.5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "E[X]=0+1/2+1/2=1. E[X^2]=0+1/2+1=1.5. Thus Var(X)=1.5-1^2=0.5.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-038",
    "section": "Mathematics",
    "topic": "Integral calculus",
    "difficulty": "hard",
    "question": "Evaluate integral from 0 to 1 of x/(1+x^2) dx.",
    "options": [
      "(1/2)ln 2",
      "ln 2",
      "1/2",
      "ln 3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Use u=1+x^2, du=2x dx. The value is (1/2)[ln(1+x^2)]_0^1=(1/2)ln2.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-039",
    "section": "Mathematics",
    "topic": "Vector algebra",
    "difficulty": "easy",
    "question": "If a and b are perpendicular unit vectors, what is the magnitude of 2a-3b?",
    "options": [
      "sqrt(5)",
      "5",
      "13",
      "sqrt(13)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Since a and b are perpendicular unit vectors, a dot b=0 and |a|=|b|=1. Therefore |2a-3b|^2=4|a|^2+9|b|^2-12(a dot b)=4+9=13, so |2a-3b|=sqrt(13).",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-040",
    "section": "Mathematics",
    "topic": "Sets, relations and functions",
    "difficulty": "hard",
    "question": "How many equivalence relations on a three-element set have exactly two equivalence classes?",
    "options": [
      "6",
      "1",
      "3",
      "2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "An equivalence relation corresponds to a partition. To form exactly two nonempty classes from three elements, choose the singleton class in 3 ways; the other two elements form the second class.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-041",
    "section": "Physics",
    "topic": "Units and measurements",
    "difficulty": "easy",
    "question": "Which quantity has dimensions M L^2 T^-2?",
    "options": [
      "Force",
      "Power",
      "Energy",
      "Momentum"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Energy has dimensions force x distance=(M L T^-2)L=M L^2 T^-2.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-042",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "medium",
    "question": "A car moving at 20 m/s is brought uniformly to rest in 5 s. What distance does it cover while stopping?",
    "options": [
      "75 m",
      "100 m",
      "25 m",
      "50 m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For uniform deceleration, average speed=(20+0)/2=10 m/s. Distance=10*5=50 m.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-043",
    "section": "Physics",
    "topic": "Laws of motion",
    "difficulty": "medium",
    "question": "A 60 kg person stands in an elevator accelerating upward at 2 m/s^2. Take g=10 m/s^2. What is the apparent weight?",
    "options": [
      "840 N",
      "480 N",
      "720 N",
      "600 N"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Normal force N=m(g+a)=60(10+2)=720 N.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-044",
    "section": "Physics",
    "topic": "Work, energy and power",
    "difficulty": "easy",
    "question": "What is the kinetic energy of a 2 kg object moving at 5 m/s?",
    "options": [
      "10 J",
      "50 J",
      "100 J",
      "25 J"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "K=(1/2)mv^2=(1/2)*2*25=25 J.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-045",
    "section": "Physics",
    "topic": "Rotational motion",
    "difficulty": "medium",
    "question": "What is the moment of inertia of a thin ring of mass M and radius R about its central axis perpendicular to its plane?",
    "options": [
      "2MR^2",
      "MR^2/4",
      "MR^2/2",
      "MR^2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For a thin ring about its symmetry axis, every mass element is at radius R, so I=MR^2.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-046",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "A satellite in a circular orbit has radius 9 times that of another satellite. What is the ratio of their orbital speeds v_large/v_small?",
    "options": [
      "9",
      "1/9",
      "1/3",
      "3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Orbital speed v=sqrt(GM/r), so the ratio is sqrt(1/9)=1/3.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-047",
    "section": "Physics",
    "topic": "Properties of matter",
    "difficulty": "medium",
    "question": "A hydraulic lift has piston areas 0.01 m^2 and 0.50 m^2. If 100 N is applied to the small piston, what load can ideally be supported by the large piston?",
    "options": [
      "500 N",
      "2500 N",
      "10000 N",
      "5000 N"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Equal pressure gives 100/0.01=F/0.50, so F=5000 N.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-048",
    "section": "Physics",
    "topic": "Thermal physics and thermodynamics",
    "difficulty": "hard",
    "question": "A Carnot engine operates between 600 K and 300 K. If it absorbs 1200 J from the hot reservoir, how much work does it produce?",
    "options": [
      "900 J",
      "1200 J",
      "600 J",
      "300 J"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Efficiency=1-Tc/Th=1-300/600=1/2. Work=eta Qh=600 J.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-049",
    "section": "Physics",
    "topic": "Oscillations and waves",
    "difficulty": "hard",
    "question": "A particle in SHM has amplitude A. At displacement x=A/2, what fraction of its total energy is kinetic?",
    "options": [
      "sqrt(3)/2",
      "3/4",
      "1/4",
      "1/2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Potential energy fraction is x^2/A^2=1/4, so kinetic-energy fraction is 1-1/4=3/4.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-050",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "easy",
    "question": "Two point charges +2 microC and +3 microC are 1 m apart in vacuum. Using k=9 x 10^9 SI, what is the force magnitude?",
    "options": [
      "0.006 N",
      "0.018 N",
      "0.54 N",
      "0.054 N"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "F=kq1q2/r^2=9e9*2e-6*3e-6=0.054 N.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-051",
    "section": "Physics",
    "topic": "Current electricity",
    "difficulty": "easy",
    "question": "A 12 V battery is connected across a 6 ohm resistor. What current flows?",
    "options": [
      "2 A",
      "6 A",
      "72 A",
      "0.5 A"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Ohm's law gives I=V/R=12/6=2 A.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-052",
    "section": "Physics",
    "topic": "Magnetism",
    "difficulty": "medium",
    "question": "A charge q moves with velocity v parallel to a uniform magnetic field B. What magnetic force acts on it?",
    "options": [
      "2qvB",
      "0",
      "qvB",
      "qvB/2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "F=qvB sin theta. For parallel motion theta=0, so F=0.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-053",
    "section": "Physics",
    "topic": "Electromagnetic induction and alternating current",
    "difficulty": "hard",
    "question": "An ideal series LCR circuit is at resonance. How does its impedance compare with the resistance R?",
    "options": [
      "It equals R",
      "It is zero",
      "It equals 2R",
      "It is infinite"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "At resonance XL=XC, so reactive parts cancel and the impedance is purely resistive: Z=R.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-054",
    "section": "Physics",
    "topic": "Electromagnetic waves",
    "difficulty": "easy",
    "question": "Which electromagnetic radiation has the longest wavelength?",
    "options": [
      "X-rays",
      "Gamma rays",
      "Radio waves",
      "Ultraviolet"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Radio waves occupy the longest-wavelength region among the listed options.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-055",
    "section": "Physics",
    "topic": "Optics",
    "difficulty": "medium",
    "question": "Light of wavelength 600 nm passes through two slits separated by 0.30 mm onto a screen 1.5 m away. What is the fringe width?",
    "options": [
      "6.0 mm",
      "0.3 mm",
      "3.0 mm",
      "1.5 mm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "beta=lambda D/d=(600e-9*1.5)/(0.30e-3)=3e-3 m=3.0 mm.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-056",
    "section": "Physics",
    "topic": "Dual nature and atomic physics",
    "difficulty": "medium",
    "question": "A photon has energy 3 eV. If the work function of a metal is 2 eV, what is the maximum photoelectron kinetic energy?",
    "options": [
      "1 eV",
      "2 eV",
      "3 eV",
      "5 eV"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Einstein's photoelectric equation gives Kmax=Ephoton-phi=3-2=1 eV.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-057",
    "section": "Physics",
    "topic": "Nuclear physics",
    "difficulty": "medium",
    "question": "A nucleus has mass defect 0.010 u. Using 1 u c^2=931.5 MeV, what is its binding energy?",
    "options": [
      "9.315 MeV",
      "0.9315 MeV",
      "93.15 MeV",
      "0.09315 MeV"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Binding energy=Delta m c^2=0.010*931.5=9.315 MeV.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-058",
    "section": "Physics",
    "topic": "Semiconductors and electronic devices",
    "difficulty": "medium",
    "question": "In an intrinsic semiconductor, how do the electron and hole concentrations compare?",
    "options": [
      "Electron concentration is always twice the hole concentration",
      "Electron concentration is zero",
      "Hole concentration is zero",
      "They are equal"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Thermal generation creates electron-hole pairs, so intrinsic electron and hole concentrations are equal.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-059",
    "section": "Physics",
    "topic": "Units and measurements",
    "difficulty": "medium",
    "question": "A length is measured as 12.4 cm with an absolute uncertainty of 0.1 cm. What is its approximate percentage uncertainty?",
    "options": [
      "0.08%",
      "1.24%",
      "8.1%",
      "0.81%"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Percentage uncertainty=(0.1/12.4)*100, approximately 0.81%.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-060",
    "section": "Physics",
    "topic": "Dual nature and atomic physics",
    "difficulty": "medium",
    "question": "An electron is accelerated through 150 V. If its de Broglie wavelength is approximated by lambda(angstrom)=12.27/sqrt(V), what is lambda?",
    "options": [
      "1.00 angstrom",
      "1.50 angstrom",
      "12.27 angstrom",
      "0.10 angstrom"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "lambda=12.27/sqrt150, approximately 12.27/12.25=1.00 angstrom.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-061",
    "section": "Physics",
    "topic": "Laws of motion",
    "difficulty": "easy",
    "question": "A 4 kg block on a smooth horizontal surface is pulled by a horizontal force of 12 N. What is its acceleration?",
    "options": [
      "48 m/s^2",
      "3 m/s^2",
      "2 m/s^2",
      "4 m/s^2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "From F=ma, a=12/4=3 m/s^2.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-062",
    "section": "Physics",
    "topic": "Semiconductors and electronic devices",
    "difficulty": "medium",
    "question": "Which logic output is produced by Y = NOT(A AND B)?",
    "options": [
      "NOR",
      "XOR",
      "NAND",
      "XNOR"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Negating the AND operation gives the NAND function.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-063",
    "section": "Physics",
    "topic": "Electromagnetic induction and alternating current",
    "difficulty": "medium",
    "question": "An AC voltage is v=100sqrt(2) sin(100pi t) volts. What is its rms voltage?",
    "options": [
      "100sqrt(2) V",
      "100 V",
      "200 V",
      "50 V"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For a sinusoid, Vrms=V0/sqrt2=(100sqrt2)/sqrt2=100 V.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-064",
    "section": "Physics",
    "topic": "Rotational motion",
    "difficulty": "medium",
    "question": "A disc starts from rest with constant angular acceleration 3 rad/s^2. What is its angular speed after turning through 6 rad?",
    "options": [
      "6 rad/s",
      "18 rad/s",
      "3 rad/s",
      "9 rad/s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Use omega^2=omega0^2+2alpha theta=0+2*3*6=36, so omega=6 rad/s.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-065",
    "section": "Physics",
    "topic": "Thermal physics and thermodynamics",
    "difficulty": "easy",
    "question": "An ideal gas absorbs 500 J of heat and does 200 J of work. What is its increase in internal energy?",
    "options": [
      "300 J",
      "200 J",
      "500 J",
      "700 J"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "First law: Delta U=Q-W=500-200=300 J.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-066",
    "section": "Chemistry",
    "topic": "Mole concept and stoichiometry",
    "difficulty": "hard",
    "question": "A mixture contains 2 mol N2 and 3 mol H2. For N2+3H2->2NH3, what is the maximum amount of NH3 that can form?",
    "options": [
      "3 mol",
      "4 mol",
      "2 mol",
      "1 mol"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "3 mol H2 reacts with only 1 mol N2 and forms 2 mol NH3. H2 is limiting.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-067",
    "section": "Chemistry",
    "topic": "Atomic structure",
    "difficulty": "hard",
    "question": "An electron has de Broglie wavelength lambda. If its momentum doubles, what is the new wavelength?",
    "options": [
      "lambda/4",
      "2lambda",
      "lambda/2",
      "lambda"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "de Broglie wavelength h/p is inversely proportional to momentum, so doubling p halves lambda.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-068",
    "section": "Chemistry",
    "topic": "Chemical bonding",
    "difficulty": "hard",
    "question": "According to molecular orbital theory, what is the bond order of N2?",
    "options": [
      "1",
      "3",
      "2",
      "2.5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "N2 has 10 valence electrons with 8 in bonding and 2 in antibonding MOs, so bond order=(8-2)/2=3.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-069",
    "section": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "hard",
    "question": "At 298 K, a reaction has Delta H=20 kJ mol^-1 and Delta S=100 J mol^-1 K^-1. What is Delta G?",
    "options": [
      "-9.8 kJ mol^-1",
      "-29.8 kJ mol^-1",
      "+49.8 kJ mol^-1",
      "+9.8 kJ mol^-1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Convert Delta S=0.100 kJ mol^-1 K^-1. Delta G=Delta H-TDelta S=20-298(0.100)=-9.8 kJ mol^-1.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-070",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "hard",
    "question": "A nonvolatile solute is dissolved in a solvent. If the mole fraction of solvent is 0.90, what is the relative lowering of vapour pressure for an ideal dilute solution?",
    "options": [
      "0.01",
      "0.9",
      "0.1",
      "1.0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Raoult's law gives relative lowering=(p0-p)/p0=x_solute=1-x_solvent=0.10.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-071",
    "section": "Chemistry",
    "topic": "Equilibrium",
    "difficulty": "medium",
    "question": "For N2+3H2<->2NH3, what is the expression for Kc?",
    "options": [
      "[N2][H2]^3/[NH3]^2",
      "[NH3]^2/([N2][H2]^3)",
      "[NH3]/([N2][H2])",
      "[NH3]^2/([N2]^2[H2]^3)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Equilibrium concentrations are raised to their stoichiometric coefficients, giving Kc=[NH3]^2/([N2][H2]^3).",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-072",
    "section": "Chemistry",
    "topic": "Redox and electrochemistry",
    "difficulty": "easy",
    "question": "In a galvanic cell, oxidation occurs at which electrode?",
    "options": [
      "Salt bridge",
      "Both electrodes equally",
      "Cathode",
      "Anode"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Oxidation always occurs at the anode; reduction occurs at the cathode.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-073",
    "section": "Chemistry",
    "topic": "Chemical kinetics",
    "difficulty": "hard",
    "question": "For a reaction rate=k[A]^2[B], by what factor does the rate change if [A] is doubled and [B] is halved?",
    "options": [
      "8",
      "2",
      "1",
      "4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Rate factor=(2)^2*(1/2)=4/2=2.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-074",
    "section": "Chemistry",
    "topic": "Periodicity",
    "difficulty": "hard",
    "question": "Which ion is largest among O2-, F-, Na+ and Mg2+?",
    "options": [
      "F-",
      "Na+",
      "O2-",
      "Mg2+"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "All four are isoelectronic with 10 electrons. In an isoelectronic series, radius decreases with increasing nuclear charge, so O2- with Z=8 is largest.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-075",
    "section": "Chemistry",
    "topic": "p-block elements",
    "difficulty": "medium",
    "question": "What is the molecular shape of XeF4?",
    "options": [
      "Seesaw",
      "Square pyramidal",
      "Square planar",
      "Tetrahedral"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "XeF4 has six electron pairs around Xe, including two lone pairs opposite each other, giving a square planar molecular shape.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-076",
    "section": "Chemistry",
    "topic": "d- and f-block elements",
    "difficulty": "easy",
    "question": "What is the common oxidation state of Zn in its compounds?",
    "options": [
      "4",
      "1",
      "3",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Zn commonly loses its 4s2 electrons to form Zn2+ with a filled 3d10 configuration.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-077",
    "section": "Chemistry",
    "topic": "Coordination compounds",
    "difficulty": "hard",
    "question": "How many geometrical isomers are possible for square-planar [Pt(NH3)2Cl2]?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "It has cis and trans geometrical forms, so there are two.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-078",
    "section": "Chemistry",
    "topic": "General organic chemistry",
    "difficulty": "medium",
    "question": "Which effect is transmitted through sigma bonds due to electronegativity differences?",
    "options": [
      "Hyperconjugation only",
      "Electromeric effect only",
      "Inductive effect",
      "Resonance effect"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The inductive effect is permanent polarization transmitted through sigma bonds.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-079",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "hard",
    "question": "Ozonolysis of propene followed by reductive workup gives which products?",
    "options": [
      "Methanol and ethanol",
      "Ethanal and methanal",
      "Propanone only",
      "Ethanoic acid and methanal"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Cleavage of CH3CH=CH2 gives CH3CHO from the substituted carbon and HCHO from the terminal carbon under reductive workup.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-080",
    "section": "Chemistry",
    "topic": "Halo compounds",
    "difficulty": "hard",
    "question": "When 2-bromopropane is heated with alcoholic KOH, what is the major organic product?",
    "options": [
      "Propan-2-ol",
      "Propene",
      "Propane",
      "Propanone"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Alcoholic KOH favors beta-elimination of HBr, forming propene.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-081",
    "section": "Chemistry",
    "topic": "Alcohols, phenols and ethers",
    "difficulty": "medium",
    "question": "Which compound gives a violet coloration with neutral FeCl3 solution?",
    "options": [
      "Diethyl ether",
      "Methanol",
      "Phenol",
      "Ethanol"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Phenol forms a colored complex with Fe3+, commonly producing a violet coloration.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-082",
    "section": "Chemistry",
    "topic": "Aldehydes, ketones and carboxylic acids",
    "difficulty": "medium",
    "question": "Which compound gives a positive Tollens test?",
    "options": [
      "Diethyl ether",
      "Propanone",
      "Benzophenone",
      "Ethanal"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Aldehydes such as ethanal reduce Tollens reagent, while ordinary ketones and ethers do not.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-083",
    "section": "Chemistry",
    "topic": "Amines and nitrogen compounds",
    "difficulty": "medium",
    "question": "Which reagent converts aniline to benzenediazonium chloride at 0 to 5 C?",
    "options": [
      "NaOH and Br2",
      "NaNO2 and HCl",
      "H2/Ni",
      "KMnO4 and H2SO4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "NaNO2 and HCl generate nitrous acid in situ, which diazotizes aniline at low temperature.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-084",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "hard",
    "question": "The primary structure of a protein is determined by what?",
    "options": [
      "Only disulfide bonds",
      "The amino acid sequence",
      "Its overall globular shape",
      "Only its alpha-helix content"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Primary structure is the linear order of amino-acid residues linked by peptide bonds.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-085",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "easy",
    "question": "What is the major product when ethene reacts with H2 in the presence of Ni?",
    "options": [
      "Ethane",
      "Ethanal",
      "Ethyne",
      "Ethanol"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Catalytic hydrogenation adds H2 across the C=C bond, giving ethane.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-086",
    "section": "Quantitative Aptitude",
    "topic": "Percentages",
    "difficulty": "easy",
    "question": "A price increases from Rs 800 to Rs 920. What is the percentage increase?",
    "options": [
      "15%",
      "12%",
      "18%",
      "20%"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Increase=120. Percentage increase=120/800*100=15%.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-087",
    "section": "Quantitative Aptitude",
    "topic": "Ratio and proportion",
    "difficulty": "medium",
    "question": "Rs 840 is divided in the ratio 2:3:7. What is the largest share?",
    "options": [
      "Rs 420",
      "Rs 490",
      "Rs 560",
      "Rs 350"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Total parts=12, so each part=840/12=70. Largest share=7*70=490.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-088",
    "section": "Quantitative Aptitude",
    "topic": "Averages",
    "difficulty": "medium",
    "question": "The average age of 5 people is 24 years. A sixth person joins and the average becomes 26 years. What is the age of the new person?",
    "options": [
      "34",
      "28",
      "36",
      "30"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Original total=5*24=120. New total=6*26=156. New person's age=36.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-089",
    "section": "Quantitative Aptitude",
    "topic": "Profit and loss",
    "difficulty": "easy",
    "question": "An article costs Rs 500 and is sold for Rs 575. What is the profit percentage?",
    "options": [
      "10%",
      "15%",
      "12%",
      "20%"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Profit=75. Profit%=75/500*100=15%.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-090",
    "section": "Quantitative Aptitude",
    "topic": "Simple and compound interest",
    "difficulty": "easy",
    "question": "What is the simple interest on Rs 2000 at 5% per year for 3 years?",
    "options": [
      "Rs 200",
      "Rs 350",
      "Rs 100",
      "Rs 300"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "SI=PRT/100=2000*5*3/100=Rs 300.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-091",
    "section": "Quantitative Aptitude",
    "topic": "Time and work",
    "difficulty": "medium",
    "question": "A and B together finish a job in 8 days. A alone needs 12 days. How long would B alone need?",
    "options": [
      "24",
      "20",
      "16",
      "18"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "B's rate=1/8-1/12=(3-2)/24=1/24, so B alone needs 24 days.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-092",
    "section": "Quantitative Aptitude",
    "topic": "Time, speed and distance",
    "difficulty": "medium",
    "question": "A train 180 m long passes a pole in 12 s. What is its speed in km/h?",
    "options": [
      "36 km/h",
      "54 km/h",
      "45 km/h",
      "60 km/h"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Speed=180/12=15 m/s. Multiplying by 3.6 gives 54 km/h.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-093",
    "section": "Quantitative Aptitude",
    "topic": "Number series",
    "difficulty": "medium",
    "question": "The sequence 3, 7, 15, 31, 63 is generated by applying the same operation repeatedly. Which operation produces each next term?",
    "options": [
      "Multiply by 2 and subtract 1",
      "Add the previous two terms",
      "Add consecutive even numbers",
      "Multiply by 2 and add 1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Each transition follows next = 2 x current + 1: 3 to 7, 7 to 15, 15 to 31, and 31 to 63.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-094",
    "section": "Quantitative Aptitude",
    "topic": "Data interpretation",
    "difficulty": "medium",
    "question": "A store sold 120 units on Monday, 150 on Tuesday, 90 on Wednesday, and 140 on Thursday. What percentage of the four-day total was sold on Tuesday and Thursday together?",
    "options": [
      "50%",
      "54%",
      "60%",
      "58%"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The four-day total is 120+150+90+140=500 units. Tuesday and Thursday together give 150+140=290, so the percentage is 290/500 x 100=58%.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-095",
    "section": "Quantitative Aptitude",
    "topic": "Logical numerical reasoning",
    "difficulty": "medium",
    "question": "If a two-digit number has digits summing to 9 and reversing the digits increases the number by 27, what is the number?",
    "options": [
      "27",
      "45",
      "36",
      "63"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Let the number be 10a+b. Then a+b=9 and 10b+a-(10a+b)=27, so 9(b-a)=27 and b-a=3. Solving gives a=3,b=6, so the number is 36.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-096",
    "section": "English",
    "topic": "Grammar",
    "difficulty": "medium",
    "question": "Choose the correct completion: 'By the time the train arrived, we ___ for forty minutes.'",
    "options": [
      "have waited",
      "are waiting",
      "waited",
      "had been waiting"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The waiting began before another past event and continued up to it, so the past perfect continuous 'had been waiting' is appropriate.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-097",
    "section": "English",
    "topic": "Vocabulary and usage",
    "difficulty": "medium",
    "question": "Choose the word that best completes the sentence: 'The scientist was ___ in recording every observation, even those that seemed insignificant.'",
    "options": [
      "meticulous",
      "vague",
      "reckless",
      "casual"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "'Meticulous' means very careful and precise, which fits thorough recording of observations.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-098",
    "section": "English",
    "topic": "Sentence correction",
    "difficulty": "medium",
    "question": "Choose the best correction of: 'Each of the players have submitted the required form.'",
    "options": [
      "Each of the players have submitted the required form.",
      "Each of the player has submitted the required form.",
      "Each players has submitted the required form.",
      "Each of the players has submitted the required form."
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The head word 'Each' is singular, so the verb must be 'has'. 'Players' remains plural after 'of the'.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-099",
    "section": "English",
    "topic": "Reading comprehension",
    "difficulty": "medium",
    "question": "Read the original passage: 'A small town converted an unused railway yard into a public garden. Instead of replacing every old structure, planners kept several brick arches and steel signs as reminders of the site's history. Residents now use the garden for exercise, weekend markets, and school activities. The project succeeded because it created new uses without erasing the character of the old place.' What is the main idea of the passage?",
    "options": [
      "The project combined new community uses with preservation of local history.",
      "The garden is used only for school activities.",
      "Old structures always prevent urban development.",
      "The railway yard should have remained closed."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The passage emphasizes that the project created useful public space while retaining features that preserved the site's historical character.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  },
  {
    "id": "aeee-2026-btech-full-01-100",
    "section": "English",
    "topic": "Punctuation and contextual usage",
    "difficulty": "medium",
    "question": "Which sentence is punctuated correctly?",
    "options": [
      "After the meeting we reviewed, the budget, the timeline, and the staffing plan.",
      "After the meeting we, reviewed the budget the timeline, and the staffing plan.",
      "After the meeting, we reviewed the budget, the timeline, and the staffing plan.",
      "After the meeting; we reviewed the budget, the timeline and, the staffing plan."
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The introductory phrase is correctly followed by a comma, and the three items in the series are separated consistently.",
    "source": {
      "kind": "original",
      "reference": "Original question written for AEEE 2026 B.Tech. Official AEEE 2026 defines the section and exam pattern; the granular topic label follows the TakeMockTest preparation map aligned to State Board/CBSE scope and is not presented as an exhaustive official AEEE syllabus.",
      "url": "https://aeee.amrita.edu/",
      "checkedOn": "2026-08-13"
    }
  }
];
