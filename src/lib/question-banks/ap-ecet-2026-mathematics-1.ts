import type { Question } from '../questions';

export const AP_ECET_2026_MATHEMATICS_1: Question[] = [
  {
    "id": "ap-ecet-2026-ma-001",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "easy",
    "question": "For A = [[2, -1], [3, 4]] and B = [[1, 2], [0, -1]], what is the (2,1) entry of AB?",
    "options": [
      "3",
      "4",
      "7",
      "2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The (2,1) entry is row 2 of A dot column 1 of B: 3(1)+4(0)=3.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-002",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "What is det([[1,2,0],[3,-1,2],[2,1,1]])?",
    "options": [
      "5",
      "-1",
      "1",
      "3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Expanding along the first row: det = 1[(-1)(1)-2(1)] - 2[3(1)-2(2)] = -3 - 2(-1) = -1.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-003",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "If A = [[4,1],[2,1]], which matrix is A^(-1)?",
    "options": [
      "[[1,-1],[-2,4]]",
      "[[1/2,-1/2],[-1,2]]",
      "[[1/2,1/2],[1,2]]",
      "[[2,-1],[-2,4]]"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "det(A)=4(1)-2(1)=2. Thus A^(-1)=(1/2)[[1,-1],[-2,4]]=[[1/2,-1/2],[-1,2]].",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-004",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "The system x + y + z = 6, 2x - y + z = 3, and x + 2y - z = 2 has which value of x?",
    "options": [
      "4",
      "3",
      "1",
      "2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Subtract the first equation from the second: x-2y=-3. Add the first and third: 2x+3y=8. Solving gives y=2 and x=1.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-005",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "For A = [[0,2],[-2,0]], which statement is true?",
    "options": [
      "A is skew-symmetric",
      "A is symmetric",
      "A equals its transpose",
      "A is singular with nonzero trace"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A^T=[[0,-2],[2,0]]=-A, so A is skew-symmetric.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-006",
    "section": "Mathematics",
    "topic": "Partial Fractions",
    "difficulty": "medium",
    "question": "In the decomposition (5x+1)/((x+1)(x+2)) = A/(x+1) + B/(x+2), what is A?",
    "options": [
      "4",
      "6",
      "-6",
      "-4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "5x+1=A(x+2)+B(x+1). Setting x=-1 gives -4=A, so A=-4.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-007",
    "section": "Mathematics",
    "topic": "Partial Fractions",
    "difficulty": "medium",
    "question": "If (3x+5)/((x-1)^2(x+2)) = A/(x-1) + B/(x-1)^2 + C/(x+2), what is B?",
    "options": [
      "4",
      "8/3",
      "2",
      "-8/3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Multiplying by (x-1)^2 and setting x=1 gives (3+5)/(1+2)=8/3=B.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-008",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "easy",
    "question": "Evaluate sin 75\u00b0.",
    "options": [
      "(sqrt(6)+sqrt(2))/4",
      "(sqrt(6)-sqrt(2))/4",
      "sqrt(3)/2",
      "1/2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "sin(45\u00b0+30\u00b0)=sin45 cos30+cos45 sin30=(sqrt6+sqrt2)/4.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-009",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "If tan theta = 3/4 and theta is acute, what is sin 2theta?",
    "options": [
      "12/25",
      "7/25",
      "24/25",
      "3/5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "sin2theta=2tan theta/(1+tan^2 theta)=2(3/4)/(1+9/16)=24/25.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-010",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "What is 2 sin 35\u00b0 cos 15\u00b0 equal to?",
    "options": [
      "sin 50\u00b0 - sin 20\u00b0",
      "sin 50\u00b0 + sin 20\u00b0",
      "cos 50\u00b0 + cos 20\u00b0",
      "2 sin 20\u00b0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using 2 sin A cos B = sin(A+B)+sin(A-B), the result is sin50\u00b0+sin20\u00b0.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-011",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "For real \u03b8, what is the range of 2 sin \u03b8 - 9 cos \u03b8 + 4?",
    "options": [
      "[4 - sqrt(85), 4 + sqrt(85)]",
      "[-sqrt(85), sqrt(85)]",
      "[4 - sqrt(77), 4 + sqrt(77)]",
      "[-7, 15]"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For any real \u03b8, an expression a sin \u03b8 + b cos \u03b8 has range [-sqrt(a^2+b^2), sqrt(a^2+b^2)]. Here a=2 and b=-9, so the variable part has range [-sqrt(4+81), sqrt(4+81)] = [-sqrt(85), sqrt(85)]. Adding 4 shifts the entire range to [4-sqrt(85), 4+sqrt(85)].",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-012",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "For real x in [-1,1], sin(arccos x) equals",
    "options": [
      "1-x^2",
      "-sqrt(1-x^2)",
      "x/sqrt(1-x^2)",
      "sqrt(1-x^2)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "If alpha=arccos x, then alpha lies in [0,pi], so sin alpha is nonnegative and equals sqrt(1-x^2).",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-013",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "If cos 2theta = 1/5 and theta is acute with theta < 45\u00b0, what is tan theta?",
    "options": [
      "2/sqrt(6)",
      "sqrt(6)/2",
      "sqrt(6)/3",
      "1/sqrt(5)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "tan^2 theta=(1-cos2theta)/(1+cos2theta)=(4/5)/(6/5)=2/3, so tan theta=sqrt(2/3)=sqrt6/3.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-014",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "Which expression equals cos 3theta?",
    "options": [
      "4sin^3 theta - 3sin theta",
      "4cos^3 theta - 3cos theta",
      "3cos theta - 4cos^3 theta",
      "2cos^2 theta - 1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The standard triple-angle identity is cos3theta=4cos^3 theta-3cos theta.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-015",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "If cos theta = 5/13 and theta is acute, what is sin(theta/2)?",
    "options": [
      "1/sqrt(13)",
      "2/sqrt(13)",
      "sqrt(5/13)",
      "3/sqrt(13)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "sin(theta/2)=sqrt((1-cos theta)/2)=sqrt((1-5/13)/2)=sqrt(4/13)=2/sqrt13.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-016",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "Solve 2cos^2 theta - 1 = 0 for theta in [0, 2pi).",
    "options": [
      "0, pi/2, pi, 3pi/2",
      "pi/6, 5pi/6, 7pi/6, 11pi/6",
      "pi/4, 3pi/4, 5pi/4, 7pi/4",
      "pi/3, 2pi/3, 4pi/3, 5pi/3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "2cos^2 theta-1=cos2theta=0, so 2theta=pi/2+kpi and theta=pi/4+kpi/2.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-017",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "If sin x + sin 3x = 0, which equation follows directly after using sum-to-product?",
    "options": [
      "2 sin x cos 3x = 0",
      "sin 4x = 0",
      "2 sin 2x cos x = 0",
      "2 cos 2x sin x = 0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "sin x+sin3x=2sin2x cos(-x)=2sin2x cos x.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-018",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "easy",
    "question": "For z = 3 - 4i, what is z times its complex conjugate?",
    "options": [
      "-25",
      "7",
      "-7",
      "25"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "z conjugate(z)=|z|^2=3^2+4^2=25.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-019",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "medium",
    "question": "If z1 = 2(cos 30\u00b0 + i sin 30\u00b0) and z2 = 3(cos 40\u00b0 + i sin 40\u00b0), then z1z2 is",
    "options": [
      "6(cos 10\u00b0 + i sin 10\u00b0)",
      "5(cos 70\u00b0 + i sin 70\u00b0)",
      "6(cos 70\u00b0 + i sin 70\u00b0)",
      "6(cos 120\u00b0 + i sin 120\u00b0)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "In polar form, moduli multiply and arguments add: 2x3=6 and 30\u00b0+40\u00b0=70\u00b0.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-020",
    "section": "Mathematics",
    "topic": "Analytical Geometry",
    "difficulty": "easy",
    "question": "Find the center of x^2 + y^2 - 6x + 8y - 11 = 0.",
    "options": [
      "(3, -4)",
      "(-3, -4)",
      "(3, 4)",
      "(-3, 4)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Completing squares gives (x-3)^2+(y+4)^2=36, so the center is (3,-4).",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-021",
    "section": "Mathematics",
    "topic": "Analytical Geometry",
    "difficulty": "medium",
    "question": "The circle with diameter endpoints (2,1) and (8,5) has radius",
    "options": [
      "sqrt(13)",
      "2sqrt(13)",
      "sqrt(26)",
      "13"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Diameter length=sqrt((8-2)^2+(5-1)^2)=sqrt52=2sqrt13, so radius=sqrt13.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-022",
    "section": "Mathematics",
    "topic": "Analytical Geometry",
    "difficulty": "easy",
    "question": "For the parabola y^2 = 16x, the focus is",
    "options": [
      "(4, 0)",
      "(8, 0)",
      "(0, 4)",
      "(0, 8)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Comparing y^2=4ax gives 4a=16, so a=4 and the focus is (4,0).",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-023",
    "section": "Mathematics",
    "topic": "Analytical Geometry",
    "difficulty": "medium",
    "question": "From the point P(9, 7), the length of a tangent to the circle x^2 + y^2 - 6x + 2y - 6 = 0 is",
    "options": [
      "2sqrt(13)",
      "2sqrt(21)",
      "4sqrt(3)",
      "6"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The circle is (x-3)^2 + (y+1)^2 = 16, so its centre is (3,-1) and radius is 4. For P(9,7), PC^2 = 6^2 + 8^2 = 100. Tangent length = sqrt(PC^2-r^2) = sqrt(100-16) = sqrt(84) = 2sqrt(21).",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-024",
    "section": "Mathematics",
    "topic": "Analytical Geometry",
    "difficulty": "medium",
    "question": "For the hyperbola x^2/16 - y^2/9 = 1, the asymptotes are",
    "options": [
      "y = \u00b1(7/4)x",
      "y = \u00b1(4/3)x",
      "y = \u00b1(5/3)x",
      "y = \u00b1(3/4)x"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The asymptotes of x^2/a^2-y^2/b^2=1 are y=\u00b1(b/a)x=\u00b1(3/4)x.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-025",
    "section": "Mathematics",
    "topic": "Analytical Geometry",
    "difficulty": "easy",
    "question": "Which equation represents a circle of radius 5 centered at (-2,3)?",
    "options": [
      "(x+2)^2 + (y+3)^2 = 5",
      "(x-2)^2 + (y-3)^2 = 25",
      "(x-2)^2 + (y+3)^2 = 25",
      "(x+2)^2 + (y-3)^2 = 25"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A circle centered at (h,k) with radius r is (x-h)^2+(y-k)^2=r^2.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-026",
    "section": "Mathematics",
    "topic": "Differentiation and its Applications",
    "difficulty": "medium",
    "question": "Evaluate lim(x->0) (e^(3x)-1)/x.",
    "options": [
      "3",
      "e^3",
      "1",
      "0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using lim(u->0)(e^u-1)/u=1 with u=3x gives the limit 3.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-027",
    "section": "Mathematics",
    "topic": "Differentiation and its Applications",
    "difficulty": "easy",
    "question": "What is d/dx [ln(x^2+1)]?",
    "options": [
      "1/(x^2+1)",
      "2/(x^2+1)",
      "2x ln(x^2+1)",
      "2x/(x^2+1)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By the chain rule, derivative of ln u is u'/u with u=x^2+1.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-028",
    "section": "Mathematics",
    "topic": "Differentiation and its Applications",
    "difficulty": "medium",
    "question": "If x^2 + xy + y^2 = 7, what is dy/dx at (1,2)?",
    "options": [
      "-4/5",
      "-1",
      "-5/4",
      "4/5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Differentiate: 2x+y+x y'+2y y'=0. Thus y'=-(2x+y)/(x+2y)=-(2+2)/(1+4)=-4/5.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-029",
    "section": "Mathematics",
    "topic": "Differentiation and its Applications",
    "difficulty": "medium",
    "question": "For x=t^2+1 and y=t^3-t, what is dy/dx at t=1?",
    "options": [
      "0",
      "3",
      "1",
      "2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "dy/dt=3t^2-1=2 and dx/dt=2t=2 at t=1, so dy/dx=1.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-030",
    "section": "Mathematics",
    "topic": "Differentiation and its Applications",
    "difficulty": "medium",
    "question": "If y = x^2 e^x, what is y''?",
    "options": [
      "2e^x(x+1)",
      "e^x(x^2+3x+1)",
      "e^x(x^2+4x+2)",
      "e^x(x^2+2x)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "y'=e^x(x^2+2x). Differentiating again gives e^x(x^2+2x)+e^x(2x+2)=e^x(x^2+4x+2).",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-031",
    "section": "Mathematics",
    "topic": "Differentiation and its Applications",
    "difficulty": "medium",
    "question": "For f(x,y)=x^2y+3xy^2, what is partial^2 f/(partial x partial y)?",
    "options": [
      "2x+3y^2",
      "2x+6y",
      "2xy+6xy",
      "2y+6x"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "First f_y=x^2+6xy; differentiating with respect to x gives 2x+6y.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-032",
    "section": "Mathematics",
    "topic": "Differentiation and its Applications",
    "difficulty": "medium",
    "question": "The slope of the tangent to y=x^3-3x at x=2 is",
    "options": [
      "3",
      "12",
      "6",
      "9"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "dy/dx=3x^2-3; at x=2 this is 12-3=9.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-033",
    "section": "Mathematics",
    "topic": "Differentiation and its Applications",
    "difficulty": "easy",
    "question": "A particle has displacement s(t)=2t^3-5t^2+4t metres. What is its acceleration at t=2 s?",
    "options": [
      "8 m/s^2",
      "10 m/s^2",
      "14 m/s^2",
      "18 m/s^2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "v=6t^2-10t+4 and a=12t-10. At t=2, a=14 m/s^2.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-034",
    "section": "Mathematics",
    "topic": "Differentiation and its Applications",
    "difficulty": "medium",
    "question": "For f(x)=x^3-6x^2+9x, at which x-value is there a local maximum?",
    "options": [
      "1",
      "3",
      "0",
      "2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "f'=3(x-1)(x-3), so stationary points are 1 and 3. f''=6x-12 is negative at x=1, hence a local maximum occurs at x=1.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-035",
    "section": "Mathematics",
    "topic": "Differentiation and its Applications",
    "difficulty": "hard",
    "question": "A square plate has measured side 20 cm with a possible error of 0.1 cm. Using differentials, the approximate maximum percentage error in its area is",
    "options": [
      "4%",
      "2%",
      "1%",
      "0.5%"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For A=x^2, dA/A=2 dx/x=2(0.1/20)=0.01, i.e. about 1%.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-036",
    "section": "Mathematics",
    "topic": "Integration and its Applications",
    "difficulty": "easy",
    "question": "Evaluate \u222b 2x/(x^2+5) dx.",
    "options": [
      "1/(x^2+5)+C",
      "x^2/(x^2+5)+C",
      "2ln(x^2+5)+C",
      "ln(x^2+5)+C"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Let u=x^2+5, du=2x dx, giving \u222bdu/u=ln u+C.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-037",
    "section": "Mathematics",
    "topic": "Integration and its Applications",
    "difficulty": "medium",
    "question": "Evaluate \u222b x e^x dx.",
    "options": [
      "x^2e^x/2+C",
      "e^x(x+1)+C",
      "e^x(x-1)+C",
      "e^x+C"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Integration by parts with u=x, dv=e^x dx gives xe^x-e^x+C=e^x(x-1)+C.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-038",
    "section": "Mathematics",
    "topic": "Integration and its Applications",
    "difficulty": "medium",
    "question": "Evaluate \u222b sin^2 x dx.",
    "options": [
      "sin^3 x/3 + C",
      "-cos^2 x/2 + C",
      "x/2 + sin 2x/4 + C",
      "x/2 - sin 2x/4 + C"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Use sin^2x=(1-cos2x)/2 and integrate termwise.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-039",
    "section": "Mathematics",
    "topic": "Integration and its Applications",
    "difficulty": "hard",
    "question": "Evaluate \u222b dx/(x^2+6x+13).",
    "options": [
      "ln(x^2+6x+13)/2+C",
      "tan^(-1)((x+3)/4)+C",
      "tan^(-1)(x+3)+C",
      "tan^(-1)((x+3)/2)/2 + C"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Complete the square: x^2+6x+13=(x+3)^2+4. Thus the integral is (1/2)tan^(-1)((x+3)/2)+C.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-040",
    "section": "Mathematics",
    "topic": "Integration and its Applications",
    "difficulty": "medium",
    "question": "If f is continuous and satisfies f(x)=f(6-x), then \u222b_0^6 x f(x) dx equals",
    "options": [
      "0",
      "3 \u222b_0^6 f(x) dx",
      "(1/3)\u222b_0^6 f(x) dx",
      "6 \u222b_0^6 f(x) dx"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Let I=\u222b0^6 x f(x)dx. Substituting x->6-x gives I=\u222b0^6(6-x)f(x)dx. Adding yields 2I=6\u222bf, so I=3\u222bf.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-041",
    "section": "Mathematics",
    "topic": "Integration and its Applications",
    "difficulty": "medium",
    "question": "Evaluate \u222b e^x/(1+e^x) dx.",
    "options": [
      "e^x/(1+e^x)+C",
      "ln(1+e^x)+C",
      "ln(e^x)+C",
      "x-ln(1+e^x)+C"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Let u=1+e^x; du=e^x dx, so the integral is ln u+C.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-042",
    "section": "Mathematics",
    "topic": "Integration and its Applications",
    "difficulty": "medium",
    "question": "Evaluate \u222b dx/((x-1)(x+1)).",
    "options": [
      "(1/2)ln| (x-1)/(x+1) | + C",
      "ln|(x-1)/(x+1)|+C",
      "(1/2)ln|x^2-1|+C",
      "ln|x^2-1|+C"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "1/(x^2-1)=1/2[1/(x-1)-1/(x+1)]. Integrating gives the stated logarithm.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-043",
    "section": "Mathematics",
    "topic": "Integration and its Applications",
    "difficulty": "easy",
    "question": "Evaluate \u222b_0^2 (3x^2+1) dx.",
    "options": [
      "9",
      "12",
      "8",
      "10"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "An antiderivative is x^3+x. From 0 to 2 the value is 8+2=10.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-044",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "easy",
    "question": "What are the order and degree of (d^2y/dx^2)^3 + dy/dx = x?",
    "options": [
      "Order 3, degree 2",
      "Order 2, degree 1",
      "Order 2, degree 3",
      "Order 1, degree 3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The highest derivative is second order and it appears to the third power, so order=2 and degree=3.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-045",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "Eliminating the arbitrary constant C from y = Ce^(2x) gives",
    "options": [
      "d^2y/dx^2 = 2y",
      "dy/dx = y/2",
      "dy/dx = 2y",
      "dy/dx = 2x y"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Differentiating y=Ce^(2x) gives y'=2Ce^(2x)=2y.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-046",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "Solve dy/dx = 3x^2/y with y(0)=2 and y>0.",
    "options": [
      "y = sqrt(2x^3+4)",
      "y = sqrt(x^3+4)",
      "y = 2x^3+4",
      "y = x^3+2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "y dy=3x^2 dx. Integrating gives y^2/2=x^3+C. Using y(0)=2 gives C=2, so y^2=2x^3+4.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-047",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "The integrating factor for dy/dx + (2/x)y = x^2, x>0, is",
    "options": [
      "1/x^2",
      "2x",
      "x^2",
      "e^(2x)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For y'+P(x)y=Q, IF=e^(\u222bPdx)=e^(\u222b2/x dx)=x^2.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-048",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "hard",
    "question": "Solve dy/dx + y = e^x with y(0)=1.",
    "options": [
      "y = (1/2)e^x - (1/2)e^(-x)",
      "y = (1/2)e^x + (1/2)e^(-x)",
      "y = e^x + e^(-x)",
      "y = e^x"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "IF=e^x, so d(ye^x)/dx=e^(2x). Thus ye^x=(1/2)e^(2x)+C. y(0)=1 gives C=1/2.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-049",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "Which differential equation has general solution y = Cx^4?",
    "options": [
      "x dy/dx + 4y = 0",
      "x dy/dx - 4y = 0",
      "dy/dx - 4x = 0",
      "x^4 dy/dx - y = 0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Differentiating y=Cx^4 gives y'=4Cx^3=4y/x, hence xy'-4y=0.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-ma-050",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "easy",
    "question": "The equation dy/dx = (1+x^2)(1+y^2) is solved most directly by",
    "options": [
      "partial differentiation",
      "Laplace expansion",
      "Cramer's rule",
      "separation of variables"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "It can be rearranged as dy/(1+y^2)=(1+x^2)dx, so it is variable-separable.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  }
];
