import type { Question } from '../questions';

export const VITEEE_2026_MPCEA_FULL_MOCK_2: Question[] = [
  {
    "id": "viteee-2026-mpcea-full-02-001",
    "section": "Mathematics",
    "topic": "Matrices and their Applications: Determinants",
    "difficulty": "easy",
    "question": "If A = [[4, 2], [1, 3]], what is det(A)?",
    "options": [
      "14",
      "10",
      "8",
      "12"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "det(A) = 4 x 3 - 2 x 1 = 12 - 2 = 10.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-002",
    "section": "Mathematics",
    "topic": "Matrices and their Applications: Matrix Algebra",
    "difficulty": "medium",
    "question": "For A = [[3, 6], [1, 2]], which statement is correct?",
    "options": [
      "A has rank 1",
      "A has rank 2",
      "A has rank 0",
      "A is invertible"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Row 2 multiplied by 3 gives row 1, so the rows are dependent; since the matrix is nonzero, rank(A) = 1.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-003",
    "section": "Mathematics",
    "topic": "Matrices and their Applications: Simultaneous Linear Equations",
    "difficulty": "medium",
    "question": "The system 3x + y = 9 and 6x + ky = 18 has infinitely many solutions. What is k?",
    "options": [
      "1",
      "3",
      "2",
      "9"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For infinitely many solutions, the second equation must be exactly twice the first, so k = 2(1) = 2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-004",
    "section": "Mathematics",
    "topic": "Matrices and their Applications: Linear Programming",
    "difficulty": "hard",
    "question": "Maximize Z = 5x + 4y subject to x + y <= 6, 2x + y <= 10, x >= 0, y >= 0. What is the maximum value of Z?",
    "options": [
      "25",
      "24",
      "28",
      "20"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The feasible vertices are (0,0), (5,0), (0,6), and the intersection (4,2) of the two lines. Z is 0, 25, 24, and 28 respectively, so the maximum is 28.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-005",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Trigonometric Identities",
    "difficulty": "easy",
    "question": "If tan theta = 8/15 and theta is acute, what is sec theta?",
    "options": [
      "17/15",
      "15/17",
      "8/17",
      "17/8"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "sec theta = sqrt(1 + tan^2 theta) = sqrt(1 + 64/225) = sqrt(289/225) = 17/15.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-006",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Inverse Trigonometric Functions",
    "difficulty": "medium",
    "question": "What is sin(2 tan^-1(3/4))?",
    "options": [
      "7/25",
      "24/25",
      "3/4",
      "4/5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "If tan theta = 3/4, then sin(2theta) = 2 tan theta/(1+tan^2 theta) = (3/2)/(25/16) = 24/25.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-007",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Complex Numbers",
    "difficulty": "medium",
    "question": "If z = 5 - 12i, what is |z|?",
    "options": [
      "13",
      "17",
      "7",
      "25"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "|z| = sqrt(5^2 + 12^2) = sqrt(169) = 13.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-008",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Complex Numbers",
    "difficulty": "hard",
    "question": "The equation z^3 = -8i has three cube roots. Which root has the smallest positive principal argument?",
    "options": [
      "2i",
      "-2i",
      "sqrt(3) + i",
      "-sqrt(3) + i"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Write -8i as 8cis(-pi/2). The cube-root arguments are -pi/6, pi/2, and -5pi/6, each with modulus 2. The smallest positive principal argument is pi/2, giving 2cis(pi/2) = 2i.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-009",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Heights and Distances",
    "difficulty": "medium",
    "question": "From a point on level ground, the angle of elevation of the top of a tower is 60 degrees. After moving 15 m directly away from the tower, the angle becomes 30 degrees. What is the height of the tower?",
    "options": [
      "15sqrt(3) m",
      "7.5 m",
      "15/sqrt(3) m",
      "7.5sqrt(3) m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let x be the initial distance. h = x tan60 = xsqrt(3), and h = (x+15)tan30 = (x+15)/sqrt(3). Solving 3x = x+15 gives x = 7.5, so h = 7.5sqrt(3) m.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-010",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Straight Lines",
    "difficulty": "easy",
    "question": "What is the slope of the line 4x + 3y - 9 = 0?",
    "options": [
      "4/3",
      "-4/3",
      "3/4",
      "-3/4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Rearranging gives y = -(4/3)x + 3, so the slope is -4/3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-011",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Circle",
    "difficulty": "medium",
    "question": "The circle x^2 + y^2 - 4x - 6y - 12 = 0 has radius",
    "options": [
      "4",
      "sqrt(13)",
      "3",
      "5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Completing squares gives (x-2)^2 + (y-3)^2 = 25, so the radius is 5.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-012",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Parabola",
    "difficulty": "medium",
    "question": "For the parabola y^2 = 24x, what is the length of its latus rectum?",
    "options": [
      "24",
      "6",
      "12",
      "48"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The standard form y^2 = 4ax gives 4a = 24 directly, so the latus rectum length is 24.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-013",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Ellipse",
    "difficulty": "hard",
    "question": "A tangent to the ellipse x^2/8 + y^2/2 = 1 is drawn at the point (2, 1). What is its equation?",
    "options": [
      "x/2 + y/4 = 1",
      "x/4 + y/2 = 1",
      "x/8 + y/2 = 1",
      "2x + y = 1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For x^2/a^2 + y^2/b^2 = 1, the tangent at (x1,y1) is xx1/a^2 + yy1/b^2 = 1. With a^2=8, b^2=2, (x1,y1)=(2,1), this gives x/4 + y/2 = 1.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-014",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Hyperbola",
    "difficulty": "medium",
    "question": "The hyperbola x^2/4 - y^2/12 = 1 has eccentricity",
    "options": [
      "2",
      "1/2",
      "sqrt(3)",
      "4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "e = sqrt(1 + b^2/a^2) = sqrt(1 + 12/4) = sqrt(4) = 2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-015",
    "section": "Mathematics",
    "topic": "Vector Algebra: Scalar Product",
    "difficulty": "easy",
    "question": "If a = 4i - j + 2k and b = i + 2j - 3k, what is a dot b?",
    "options": [
      "4",
      "-8",
      "-4",
      "8"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a dot b = 4(1) + (-1)(2) + 2(-3) = 4 - 2 - 6 = -4.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-016",
    "section": "Mathematics",
    "topic": "Vector Algebra: Vector Operations",
    "difficulty": "medium",
    "question": "The vectors a = 3i + j - k and b = i - j + 2k are perpendicular to which vector among the following?",
    "options": [
      "a + b",
      "a x b",
      "a - b",
      "3a + b"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By definition, the cross product a x b is perpendicular to both a and b.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-017",
    "section": "Mathematics",
    "topic": "Vector Algebra: Scalar Triple Product",
    "difficulty": "hard",
    "question": "If a dot (b x c) = 4, what is (a - b) dot (b x c - c x a)?",
    "options": [
      "0",
      "8",
      "4",
      "16"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Expanding, the self-repeated triple products a.(cxa) and b.(bxc) vanish, leaving a.(bxc) + b.(cxa). By cyclic invariance both equal 4, giving a total of 8.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-018",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Three Dimensions: Distance in Three Dimensions",
    "difficulty": "easy",
    "question": "What is the distance between the points (0,1,2) and (3,5,2)?",
    "options": [
      "sqrt(38)",
      "5",
      "7",
      "4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Distance = sqrt((3-0)^2 + (5-1)^2 + (2-2)^2) = sqrt(9+16) = 5.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-019",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Three Dimensions: Direction Ratios and Cosines",
    "difficulty": "medium",
    "question": "A line has direction ratios 6, -2, 3. What are the corresponding direction cosines with positive first component?",
    "options": [
      "(6/sqrt(7), -2/sqrt(7), 3/sqrt(7))",
      "(3/7, -2/7, 6/7)",
      "(6/49, -2/49, 3/49)",
      "(6/7, -2/7, 3/7)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The magnitude of the direction-ratio vector is sqrt(36+4+9) = 7, so the direction cosines are (6/7, -2/7, 3/7).",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-020",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Three Dimensions: Planes in Three Dimensions",
    "difficulty": "medium",
    "question": "Find the angle between the planes x + 2y = 3 and 2x - y = 5.",
    "options": [
      "90 degrees",
      "45 degrees",
      "60 degrees",
      "30 degrees"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The normals are n1=(1,2,0) and n2=(2,-1,0). Their dot product is 2-2=0, so the normals are perpendicular, meaning the planes meet at 90 degrees.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-021",
    "section": "Mathematics",
    "topic": "Differential Calculus: Differentiation",
    "difficulty": "easy",
    "question": "If f(x) = 2x^3 - 5x + 3, what is f'(1)?",
    "options": [
      "1",
      "-1",
      "6",
      "5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f'(x) = 6x^2 - 5, so f'(1) = 6 - 5 = 1.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-022",
    "section": "Mathematics",
    "topic": "Differential Calculus: Differentiation",
    "difficulty": "medium",
    "question": "If y = x^2 ln x for x > 0, what is dy/dx?",
    "options": [
      "2x ln x",
      "2x ln x + x",
      "x ln x + x",
      "2 ln x + x"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using the product rule, dy/dx = 2x ln x + x^2(1/x) = 2x ln x + x.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-023",
    "section": "Mathematics",
    "topic": "Differential Calculus: Applications of Derivatives",
    "difficulty": "medium",
    "question": "For f(x) = 2x^3 - 9x^2 + 12x, at which x-value does f have a local maximum?",
    "options": [
      "x = 2",
      "x = 0",
      "x = 1",
      "x = 3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f'(x) = 6(x-1)(x-2), so the critical points are x = 1 and x = 2. f''(x) = 12x - 18, and f''(1) = -6 < 0, so x = 1 is a local maximum.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-024",
    "section": "Mathematics",
    "topic": "Differential Calculus: Mean Value Theorem",
    "difficulty": "hard",
    "question": "For f(x) = x^3 on [0,2], use the Lagrange Mean Value Theorem. What is the value of c in (0,2) for which f'(c) equals the average rate of change?",
    "options": [
      "4/3",
      "sqrt(3)",
      "2sqrt(3)/3",
      "2/3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The average rate of change is (8-0)/2 = 4. Since f'(c) = 3c^2, setting 3c^2 = 4 gives c = 2/sqrt(3) = 2sqrt(3)/3, which lies between 0 and 2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-025",
    "section": "Mathematics",
    "topic": "Differential Calculus: Errors and Approximations",
    "difficulty": "hard",
    "question": "Using the linear approximation of sqrt(x) at x = 49, what is the approximate value of sqrt(48.6)?",
    "options": [
      "6.943",
      "6.929",
      "6.971",
      "7.029"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For f(x)=sqrt(x), f(49)=7 and f'(49)=1/14. With dx=-0.4, df is approximately (1/14)(-0.4) = -0.029, so sqrt(48.6) is approximately 6.971.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-026",
    "section": "Mathematics",
    "topic": "Integral Calculus and its Applications: Definite Integrals",
    "difficulty": "easy",
    "question": "The definite integral integral_0^3 4x^3 dx has value",
    "options": [
      "27",
      "64",
      "81",
      "108"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The antiderivative is x^4. Evaluating from 0 to 3 gives 81.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-027",
    "section": "Mathematics",
    "topic": "Integral Calculus and its Applications: Definite Integrals",
    "difficulty": "medium",
    "question": "Let I = integral_0^(pi/2) sin^2 x cos x dx. What is I?",
    "options": [
      "1/2",
      "pi/4",
      "2/3",
      "1/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let u=sinx, du=cosx dx. The integral becomes integral_0^1 u^2 du = 1/3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-028",
    "section": "Mathematics",
    "topic": "Integral Calculus and its Applications: Area of Bounded Regions",
    "difficulty": "medium",
    "question": "What is the area bounded by y = 2x and y = x^2 between x = 0 and x = 2?",
    "options": [
      "8/3",
      "4/3",
      "2",
      "2/3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "On [0,2], 2x >= x^2. The area is integral_0^2 (2x-x^2) dx = 4 - 8/3 = 4/3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-029",
    "section": "Mathematics",
    "topic": "Integral Calculus and its Applications: Definite Integrals",
    "difficulty": "hard",
    "question": "Using symmetry on [0, pi/2], the value of integral_0^(pi/2) ln(tan x) dx is",
    "options": [
      "pi ln 2",
      "0",
      "-pi ln 2 / 2",
      "ln 2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Under x -> pi/2 - x, ln(tan x) becomes -ln(tan x), so the integral I satisfies I = -I, giving I = 0.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-030",
    "section": "Mathematics",
    "topic": "Differential Equations: Order and Degree",
    "difficulty": "easy",
    "question": "What is the order of the differential equation d^3y/dx^3 + 5(dy/dx)^2 = sin x?",
    "options": [
      "3",
      "2",
      "1",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The highest derivative present is d^3y/dx^3, so the order is 3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-031",
    "section": "Mathematics",
    "topic": "Differential Equations: Separable Differential Equations",
    "difficulty": "medium",
    "question": "Solve dy/dx = 4x^3 with y(1) = 2.",
    "options": [
      "y = x^4 + 1",
      "y = 4x^4 + 1",
      "y = x^4 + 2",
      "y = x^3 + 1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Integrating gives y = x^4 + C. The condition y(1)=2 gives C=1, so y = x^4 + 1.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-032",
    "section": "Mathematics",
    "topic": "Differential Equations: First-order Linear Differential Equations",
    "difficulty": "hard",
    "question": "The differential equation dy/dx + 2y = 4 has y(0) = 3. What is y(ln 2)?",
    "options": [
      "2",
      "1/4",
      "11/4",
      "9/4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using integrating factor e^(2x), d(ye^(2x))/dx = 4e^(2x), so ye^(2x) = 2e^(2x) + C. From y(0)=3, C=1. Hence y = 2 + e^(-2x). At x=ln2, e^(-2x)=1/4, so y = 9/4.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-033",
    "section": "Mathematics",
    "topic": "Probability and Distributions: Probability",
    "difficulty": "easy",
    "question": "A fair die is rolled once. What is the probability of obtaining a number greater than 4?",
    "options": [
      "1/3",
      "1/2",
      "2/3",
      "1/6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Numbers greater than 4 are 5 and 6, giving 2 favorable outcomes out of 6, so the probability is 1/3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-034",
    "section": "Mathematics",
    "topic": "Probability and Distributions: Probability",
    "difficulty": "medium",
    "question": "Two cards are drawn without replacement from a standard 52-card deck. What is the probability that both are red?",
    "options": [
      "1/4",
      "1/2",
      "13/51",
      "25/102"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Probability = (26/52)(25/51) = 650/2652 = 25/102.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-035",
    "section": "Mathematics",
    "topic": "Probability and Distributions: Binomial Distribution",
    "difficulty": "medium",
    "question": "For a binomial random variable X with n = 10 and p = 0.3, what is E(X)?",
    "options": [
      "2.1",
      "7",
      "0.3",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a binomial variable, E(X) = np = 10 x 0.3 = 3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-036",
    "section": "Mathematics",
    "topic": "Probability and Distributions: Conditional Probability and Bayes Theorem",
    "difficulty": "hard",
    "question": "A factory has two machines: Machine 1 produces 60% of items with a 2% defect rate, and Machine 2 produces 40% with a 5% defect rate. If an item is defective, what is the probability it came from Machine 2?",
    "options": [
      "5/8",
      "3/8",
      "1/2",
      "2/5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P(defective) = 0.6(0.02) + 0.4(0.05) = 0.032. P(Machine 2 | defective) = 0.02/0.032 = 5/8.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-037",
    "section": "Mathematics",
    "topic": "Discrete Mathematics: Sets and Relations",
    "difficulty": "easy",
    "question": "If A = {1,3,5,7} and B = {3,5,9}, how many elements are in A union B?",
    "options": [
      "4",
      "7",
      "5",
      "3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A union B = {1,3,5,7,9}, which has 5 elements.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-038",
    "section": "Mathematics",
    "topic": "Discrete Mathematics: Counting Techniques",
    "difficulty": "medium",
    "question": "How many 3-letter arrangements can be formed from the letters of WORLD if no letter is repeated?",
    "options": [
      "120",
      "20",
      "15",
      "60"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "This is a permutation of 5 distinct letters taken 3 at a time: 5 x 4 x 3 = 60.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-039",
    "section": "Mathematics",
    "topic": "Discrete Mathematics: Sequences and Series",
    "difficulty": "medium",
    "question": "The sum of the first 6 terms of the geometric progression 2, 6, 18, ... is",
    "options": [
      "726",
      "242",
      "2186",
      "728"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Here a=2, r=3. S6 = a(r^6-1)/(r-1) = 2(729-1)/2 = 728.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-040",
    "section": "Mathematics",
    "topic": "Discrete Mathematics: Mathematical Logic",
    "difficulty": "hard",
    "question": "Which proposition is logically equivalent to 'p or q'?",
    "options": [
      "not(not p and not q)",
      "not p and not q",
      "p and q",
      "not p or not q"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By De Morgan's law, 'p or q' is logically equivalent to 'not(not p and not q)'.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-041",
    "section": "Physics",
    "topic": "Mechanics and Properties of Matter, including Heat and Thermodynamics: Work, Energy and Momentum",
    "difficulty": "easy",
    "question": "A 6 kg body moving at 5 m/s has kinetic energy",
    "options": [
      "75 J",
      "30 J",
      "150 J",
      "25 J"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "K = (1/2)(6)(5^2) = 75 J.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-042",
    "section": "Physics",
    "topic": "Mechanics and Properties of Matter, including Heat and Thermodynamics: Work, Energy and Momentum",
    "difficulty": "hard",
    "question": "A 2 kg ball moving at 5 m/s strikes a stationary 3 kg ball and they collide perfectly inelastically. What is their common velocity after collision?",
    "options": [
      "3 m/s",
      "1 m/s",
      "2 m/s",
      "5 m/s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By momentum conservation, 2(5) = (2+3)v, so v = 2 m/s.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-043",
    "section": "Physics",
    "topic": "Mechanics and Properties of Matter, including Heat and Thermodynamics: Mechanical Energy in a Vertical Circle",
    "difficulty": "medium",
    "question": "A ball of mass 0.2 kg is whirled in a vertical circle of radius 1 m. What is the minimum speed at the top (g = 10 m/s^2)?",
    "options": [
      "sqrt(20) m/s",
      "10 m/s",
      "sqrt(10) m/s",
      "sqrt(5) m/s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At the top, mg = mv^2/r gives v = sqrt(gr) = sqrt(10x1) = sqrt(10) m/s.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-044",
    "section": "Physics",
    "topic": "Mechanics and Properties of Matter, including Heat and Thermodynamics: Fluid Mechanics",
    "difficulty": "easy",
    "question": "Oil of density 900 kg/m^3 flows through a pipe of area 2 cm^2 at 5 m/s. What is the volume flow rate?",
    "options": [
      "1 x 10^-3 m^3/s",
      "2 x 10^-3 m^3/s",
      "5 x 10^-4 m^3/s",
      "9 x 10^-4 m^3/s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Q = Av = 2x10^-4 x 5 = 1x10^-3 m^3/s.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-045",
    "section": "Physics",
    "topic": "Mechanics and Properties of Matter, including Heat and Thermodynamics: Elasticity",
    "difficulty": "medium",
    "question": "A wire of length 1 m and cross-sectional area 5 x 10^-7 m^2 stretches by 0.5 mm under a force of 50 N. What is Young's modulus?",
    "options": [
      "1 x 10^11 Pa",
      "2 x 10^11 Pa",
      "4 x 10^10 Pa",
      "5 x 10^11 Pa"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Y = FL/(A Delta L) = 50(1)/(5x10^-7 x 0.5x10^-3) = 2 x 10^11 Pa.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-046",
    "section": "Physics",
    "topic": "Mechanics and Properties of Matter, including Heat and Thermodynamics: Thermodynamics",
    "difficulty": "medium",
    "question": "Two moles of an ideal gas expand isothermally at temperature T from V to 3V. What is the work done by the gas?",
    "options": [
      "RT ln 3",
      "3RT",
      "2RT ln 3",
      "2RT/3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "W = nRT ln(Vf/Vi) = 2RT ln 3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-047",
    "section": "Physics",
    "topic": "Mechanics and Properties of Matter, including Heat and Thermodynamics: Blackbody Radiation",
    "difficulty": "hard",
    "question": "A blackbody radiates power P per unit area at 500 K. At what temperature will it radiate 4P per unit area?",
    "options": [
      "500sqrt(2) K",
      "1000 K",
      "250sqrt(2) K",
      "2000 K"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Since power per area is proportional to T^4, T2/T1 = 4^(1/4) = sqrt(2), giving T2 = 500sqrt(2) K.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-048",
    "section": "Physics",
    "topic": "Electrostatics: Electric Field and Coulomb Law",
    "difficulty": "easy",
    "question": "Two charges +4 microC and +9 microC are separated by 3 m. Using k = 9 x 10^9 N m^2/C^2, what is the force between them?",
    "options": [
      "0.018 N",
      "0.072 N",
      "0.036 N",
      "0.36 N"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "F = kq1q2/r^2 = 9x10^9 x 4x10^-6 x 9x10^-6 / 9 = 0.036 N.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-049",
    "section": "Physics",
    "topic": "Electrostatics: Electric Field and Coulomb Law",
    "difficulty": "medium",
    "question": "An electric field of 5 x 10^4 N/C acts on a charge of 4 microC. What is the force on the charge?",
    "options": [
      "0.1 N",
      "0.4 N",
      "0.2 N",
      "2 N"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "F = qE = 4x10^-6 x 5x10^4 = 0.2 N.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-050",
    "section": "Physics",
    "topic": "Electrostatics: Capacitance and Energy",
    "difficulty": "medium",
    "question": "A 5 microF capacitor is charged to 60 V. How much energy is stored?",
    "options": [
      "0.009 J",
      "0.018 J",
      "0.0045 J",
      "0.09 J"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "U = (1/2)CV^2 = 0.5 x 5x10^-6 x 3600 = 9x10^-3 J.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-051",
    "section": "Physics",
    "topic": "Electrostatics: Electric Potential",
    "difficulty": "easy",
    "question": "What is the electric potential at a distance of 2 m from a point charge of 4 microC (k = 9 x 10^9 N m^2/C^2)?",
    "options": [
      "9000 V",
      "36000 V",
      "18000 V",
      "4500 V"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "V = kq/r = 9x10^9 x 4x10^-6 / 2 = 18000 V.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-052",
    "section": "Physics",
    "topic": "Current Electricity and Magnetic Effects of Electric Current: Current Electricity",
    "difficulty": "easy",
    "question": "A resistor of 10 ohm carries a current of 1.5 A. What is the power dissipated?",
    "options": [
      "15 W",
      "22.5 W",
      "33.75 W",
      "45 W"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P = I^2R = 1.5^2 x 10 = 22.5 W.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-053",
    "section": "Physics",
    "topic": "Current Electricity and Magnetic Effects of Electric Current: Current Electricity",
    "difficulty": "medium",
    "question": "Three resistors 5 ohm, 10 ohm, and 10 ohm are connected in parallel. What is their equivalent resistance?",
    "options": [
      "5 ohm",
      "4 ohm",
      "2.5 ohm",
      "0.4 ohm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "1/R = 1/5 + 1/10 + 1/10 = 4/10, so R = 2.5 ohm.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-054",
    "section": "Physics",
    "topic": "Current Electricity and Magnetic Effects of Electric Current: Bridge and Potentiometer",
    "difficulty": "medium",
    "question": "In a balanced Wheatstone bridge, the arms are P = 8 ohm, Q = 4 ohm, and R = 6 ohm. What is S?",
    "options": [
      "12 ohm",
      "3 ohm",
      "48 ohm",
      "1.5 ohm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The balance condition P/Q = R/S gives S = QR/P = (4)(6)/8 = 3 ohm.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-055",
    "section": "Physics",
    "topic": "Current Electricity and Magnetic Effects of Electric Current: Magnetic Effects of Current",
    "difficulty": "easy",
    "question": "A long straight wire carries a current of 10 A. What is the magnetic field at a distance of 20 cm (mu0/2pi = 2 x 10^-7)?",
    "options": [
      "2 x 10^-5 T",
      "5 x 10^-6 T",
      "1 x 10^-6 T",
      "1 x 10^-5 T"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "B = (mu0/2pi)(I/r) = 2x10^-7 x 10/0.2 = 1x10^-5 T.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-056",
    "section": "Physics",
    "topic": "Current Electricity and Magnetic Effects of Electric Current: Magnetic Effects of Current",
    "difficulty": "medium",
    "question": "A charge of 3 C moves at 2 m/s perpendicular to a magnetic field of 0.4 T. What is the force on it?",
    "options": [
      "1.2 N",
      "4.8 N",
      "0.6 N",
      "2.4 N"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "F = qvB = 3 x 2 x 0.4 = 2.4 N.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-057",
    "section": "Physics",
    "topic": "Current Electricity and Magnetic Effects of Electric Current: Magnetic Effects of Current",
    "difficulty": "medium",
    "question": "A wire of length 0.8 m carries a current of 5 A in a magnetic field of 0.3 T, perpendicular to the wire. What is the force on the wire?",
    "options": [
      "0.6 N",
      "2.4 N",
      "0.3 N",
      "1.2 N"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "F = BIL = 0.3 x 5 x 0.8 = 1.2 N.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-058",
    "section": "Physics",
    "topic": "Electromagnetic Induction and Alternating Current: Faraday and Lenz Laws",
    "difficulty": "medium",
    "question": "A coil of area 0.05 m^2 and 50 turns has a magnetic field changing from 0.8 T to 0.2 T uniformly in 3 s. What is the induced EMF?",
    "options": [
      "0.05 V",
      "5 V",
      "1 V",
      "0.5 V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "EMF = N A (Delta B/Delta t) = 50 x 0.05 x (0.6/3) = 0.5 V.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-059",
    "section": "Physics",
    "topic": "Electromagnetic Induction and Alternating Current: Self Inductance",
    "difficulty": "medium",
    "question": "A solenoid with self-inductance 4 H carries a current that changes from 2 A to 5 A in 1.5 s. What is the magnitude of the induced EMF?",
    "options": [
      "4 V",
      "12 V",
      "2 V",
      "8 V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "EMF = L(Delta I/Delta t) = 4 x (3/1.5) = 8 V.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-060",
    "section": "Physics",
    "topic": "Electromagnetic Induction and Alternating Current: Transformer",
    "difficulty": "medium",
    "question": "A step-down transformer has 800 turns on the primary and 100 turns on the secondary. If the primary voltage is 240 V, what is the secondary voltage?",
    "options": [
      "30 V",
      "60 V",
      "120 V",
      "1920 V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Vs = Vp(Ns/Np) = 240 x (100/800) = 30 V.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-061",
    "section": "Physics",
    "topic": "Electromagnetic Induction and Alternating Current: LCR Resonance",
    "difficulty": "hard",
    "question": "An LCR series circuit has L = 2 H and C = 2 microF. What is the resonant frequency (in Hz)?",
    "options": [
      "500 Hz",
      "about 79.6 Hz",
      "250 Hz",
      "159 Hz"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "omega0 = 1/sqrt(LC) = 1/sqrt(2 x 2x10^-6) = 500 rad/s, so f0 = omega0/(2pi), approximately 79.6 Hz.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-062",
    "section": "Physics",
    "topic": "Optics: Refraction and Total Internal Reflection",
    "difficulty": "medium",
    "question": "What is the critical angle for water, with refractive index 1.33, relative to air?",
    "options": [
      "about 48.6 degrees",
      "about 41.8 degrees",
      "60 degrees",
      "30 degrees"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "sin C = 1/n = 1/1.33, approximately 0.75, giving C approximately 48.6 degrees.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-063",
    "section": "Physics",
    "topic": "Optics: Lenses",
    "difficulty": "medium",
    "question": "A concave lens of focal length -15 cm forms an image of an object placed 30 cm from it. What is the image distance?",
    "options": [
      "-20 cm",
      "10 cm",
      "-30 cm",
      "-10 cm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using 1/v = 1/f + 1/u with f=-15 cm, u=-30 cm: 1/v = -1/15 - 1/30 = -1/10, so v = -10 cm.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-064",
    "section": "Physics",
    "topic": "Optics: Interference",
    "difficulty": "medium",
    "question": "In a Young's double slit experiment, the slit separation is 1 mm, the screen is 2 m away, and the wavelength is 600 nm. What is the fringe width?",
    "options": [
      "0.6 mm",
      "2.4 mm",
      "0.3 mm",
      "1.2 mm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "beta = lambda D/d = (600x10^-9 x 2)/(1x10^-3) = 1.2x10^-3 m = 1.2 mm.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-065",
    "section": "Physics",
    "topic": "Optics: Prism and Dispersion",
    "difficulty": "medium",
    "question": "A prism has angle 60 degrees and refractive index sqrt(2). What is the angle of minimum deviation?",
    "options": [
      "30 degrees",
      "45 degrees",
      "60 degrees",
      "15 degrees"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "sin((A+Dm)/2) = n sin(A/2) = sqrt(2) x 0.5 = sqrt(2)/2, so (A+Dm)/2 = 45 degrees, giving Dm = 30 degrees.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-066",
    "section": "Physics",
    "topic": "Optics: Polarization",
    "difficulty": "easy",
    "question": "Unpolarized light passes through a polarizer, then through a second polarizer at 45 degrees to the first. What fraction of the intensity after the first polarizer passes through the second?",
    "options": [
      "1/4",
      "3/4",
      "1/2",
      "1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By Malus's law, I = I0 cos^2(45 degrees) = I0/2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-067",
    "section": "Physics",
    "topic": "Dual Nature of Radiation, Atomic and Nuclear Physics: Photoelectric Effect",
    "difficulty": "medium",
    "question": "The work function of a metal is 1.5 eV, and it is illuminated by photons of energy 4 eV. What is the maximum kinetic energy of the photoelectrons?",
    "options": [
      "2.5 eV",
      "1.5 eV",
      "4 eV",
      "5.5 eV"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Maximum KE = hf - W = 4 - 1.5 = 2.5 eV.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-068",
    "section": "Physics",
    "topic": "Dual Nature of Radiation, Atomic and Nuclear Physics: Photoelectric Effect",
    "difficulty": "medium",
    "question": "The work function of a metal is 2.48 eV. Using hc = 1240 eV nm, what is its threshold wavelength?",
    "options": [
      "500 nm",
      "250 nm",
      "620 nm",
      "1000 nm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "lambda_threshold = hc/W = 1240/2.48 = 500 nm.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-069",
    "section": "Physics",
    "topic": "Dual Nature of Radiation, Atomic and Nuclear Physics: Nuclear Physics and Radioactivity",
    "difficulty": "medium",
    "question": "The half-life of a radioactive sample is 15 days. What fraction of the sample remains after 45 days?",
    "options": [
      "1/4",
      "1/8",
      "1/16",
      "1/9"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "45 days is 3 half-lives, so the remaining fraction is (1/2)^3 = 1/8.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-070",
    "section": "Physics",
    "topic": "Dual Nature of Radiation, Atomic and Nuclear Physics: Nuclear Physics and Radioactivity",
    "difficulty": "hard",
    "question": "In beta-minus decay, what happens to the nucleus?",
    "options": [
      "Its atomic number decreases by 1 and its mass number is unchanged",
      "Its atomic number increases by 1 and its mass number is unchanged",
      "Its mass number decreases by 4 and its atomic number decreases by 2",
      "Its atomic number is unchanged and its mass number increases by 1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "In beta-minus decay, a neutron converts to a proton and an emitted electron, so the atomic number increases by 1 while the mass number is unchanged.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-071",
    "section": "Physics",
    "topic": "Semiconductor Devices and their Applications: Semiconductor Basics",
    "difficulty": "easy",
    "question": "In a p-type semiconductor, the majority charge carriers are",
    "options": [
      "electrons",
      "protons",
      "neutrons",
      "holes"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Doping with trivalent impurities creates an excess of holes, the majority carriers in p-type material.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-072",
    "section": "Physics",
    "topic": "Semiconductor Devices and their Applications: Semiconductor Diodes",
    "difficulty": "medium",
    "question": "A germanium p-n junction diode typically has a forward 'knee' voltage of about",
    "options": [
      "0.3 V",
      "0.7 V",
      "1 V",
      "0.1 V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Germanium diodes typically show a forward threshold voltage of about 0.3 V, lower than silicon's 0.7 V.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-073",
    "section": "Physics",
    "topic": "Semiconductor Devices and their Applications: Logic Gates",
    "difficulty": "medium",
    "question": "A NOR gate with both of its inputs tied together behaves as which gate?",
    "options": [
      "OR gate",
      "NOT gate",
      "AND gate",
      "NAND gate"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Tying both inputs together gives output NOT(A OR A) = NOT A, which is a NOT gate.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-074",
    "section": "Physics",
    "topic": "Semiconductor Devices and their Applications: Transistors",
    "difficulty": "medium",
    "question": "In a transistor, the common-emitter current gain beta = 99. What is the common-base current gain alpha?",
    "options": [
      "0.9",
      "0.99",
      "1.01",
      "99"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "alpha = beta/(1+beta) = 99/100 = 0.99.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-075",
    "section": "Physics",
    "topic": "Semiconductor Devices and their Applications: Semiconductor Diodes",
    "difficulty": "medium",
    "question": "An LED emits light mainly because of",
    "options": [
      "thermionic emission of electrons",
      "reverse breakdown avalanche multiplication",
      "recombination of electrons and holes releasing energy as photons",
      "the photoelectric effect on the junction"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "In a forward-biased LED, injected electrons recombine with holes at the junction, releasing energy as photons.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-076",
    "section": "Chemistry",
    "topic": "Physical Chemistry: Atomic Structure",
    "difficulty": "easy",
    "question": "What is the maximum number of electrons that can be accommodated in the N shell (n=4)?",
    "options": [
      "18",
      "8",
      "16",
      "32"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The maximum number of electrons in a shell is 2n^2 = 2(4)^2 = 32.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-077",
    "section": "Chemistry",
    "topic": "Physical Chemistry: Atomic Structure",
    "difficulty": "medium",
    "question": "According to Bohr's postulate, which quantity is quantized for an electron orbiting the nucleus?",
    "options": [
      "linear momentum, with no restriction",
      "total energy, with no restriction",
      "angular momentum, given by mvr = nh/2pi",
      "the orbit radius, arbitrarily"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Bohr's postulate quantizes angular momentum as mvr = nh/(2pi), where n = 1, 2, 3, ...",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-078",
    "section": "Chemistry",
    "topic": "Physical Chemistry: Thermodynamics",
    "difficulty": "medium",
    "question": "For a reaction, delta H = -92 kJ/mol and delta S = -198 J/(K mol) at 400 K. What is delta G?",
    "options": [
      "-171.2 kJ/mol",
      "12.8 kJ/mol",
      "-12.8 kJ/mol",
      "-92 kJ/mol"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "delta G = delta H - T delta S = -92 - (400)(-0.198) = -92 + 79.2 = -12.8 kJ/mol.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-079",
    "section": "Chemistry",
    "topic": "Physical Chemistry: Chemical Equilibrium",
    "difficulty": "medium",
    "question": "For a reaction with Kc = 0.5, if the reaction quotient Q = 0.2, in which direction will the reaction proceed?",
    "options": [
      "reverse (toward reactants)",
      "forward (toward products)",
      "no net change",
      "cannot be determined without more data"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Since Q < Kc, the system shifts forward to increase Q toward Kc.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-080",
    "section": "Chemistry",
    "topic": "Physical Chemistry: Chemical Kinetics",
    "difficulty": "medium",
    "question": "A first-order reaction has half-life 10 minutes. What fraction of the reactant remains after 40 minutes?",
    "options": [
      "1/8",
      "1/4",
      "1/32",
      "1/16"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "40 minutes is 4 half-lives, so the remaining fraction is (1/2)^4 = 1/16.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-081",
    "section": "Chemistry",
    "topic": "Physical Chemistry: Solutions",
    "difficulty": "medium",
    "question": "One mole of NaCl (fully dissociated, van't Hoff factor i = 2) is dissolved in 1 kg of water. What is the freezing point depression if Kf = 1.86 K kg/mol?",
    "options": [
      "3.72 K",
      "1.86 K",
      "7.44 K",
      "0.93 K"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "delta Tf = i Kf m = 2(1.86)(1) = 3.72 K.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-082",
    "section": "Chemistry",
    "topic": "Inorganic and Material Chemistry: p-block Elements",
    "difficulty": "easy",
    "question": "Which p-block element commonly favors the +2 oxidation state over +4 due to the inert pair effect?",
    "options": [
      "carbon (C)",
      "silicon (Si)",
      "lead (Pb)",
      "boron (B)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Heavier p-block elements like lead show the inert pair effect, where the ns2 electrons resist participating in bonding, favoring the lower (+2) oxidation state.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-083",
    "section": "Chemistry",
    "topic": "Inorganic and Material Chemistry: Lanthanides",
    "difficulty": "medium",
    "question": "The general electronic configuration of lanthanides involves the progressive filling of which subshell?",
    "options": [
      "5f",
      "3d",
      "5d",
      "4f"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Lanthanides are characterized by the progressive filling of the 4f subshell.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-084",
    "section": "Chemistry",
    "topic": "Inorganic and Material Chemistry: Coordination Chemistry",
    "difficulty": "medium",
    "question": "What is the coordination number of the metal in [PtCl4]2-?",
    "options": [
      "2",
      "6",
      "4",
      "3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Four chloride ligands are bonded to platinum, giving coordination number 4.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-085",
    "section": "Chemistry",
    "topic": "Inorganic and Material Chemistry: Coordination Chemistry",
    "difficulty": "hard",
    "question": "What is the oxidation state of manganese in KMnO4?",
    "options": [
      "+6",
      "+7",
      "+4",
      "+2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Setting the total charge to zero: (+1) + x + 4(-2) = 0 gives x = +7.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-086",
    "section": "Chemistry",
    "topic": "Inorganic and Material Chemistry: Solid State Chemistry",
    "difficulty": "medium",
    "question": "In a body-centered cubic (bcc) unit cell, how many atoms are present per unit cell?",
    "options": [
      "1",
      "4",
      "8",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A bcc cell has 8 corner atoms (1/8 each = 1 total) plus 1 body-center atom, giving 2 atoms per unit cell.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-087",
    "section": "Chemistry",
    "topic": "Inorganic and Material Chemistry: Surface Chemistry",
    "difficulty": "medium",
    "question": "Which type of adsorption involves weak van der Waals forces and is readily reversible?",
    "options": [
      "physisorption",
      "chemisorption",
      "ion exchange",
      "covalent bonding"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Physisorption arises from weak van der Waals forces, has a low enthalpy of adsorption, and is readily reversible, unlike chemisorption.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-088",
    "section": "Chemistry",
    "topic": "Analytical Chemistry: Ionic Equilibria and pH",
    "difficulty": "easy",
    "question": "What is the pH of a 0.01 M NaOH solution, assuming complete dissociation?",
    "options": [
      "2",
      "10",
      "12",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "[OH-] = 0.01 M gives pOH = 2, so pH = 14 - 2 = 12.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-089",
    "section": "Chemistry",
    "topic": "Analytical Chemistry: Electrochemistry",
    "difficulty": "medium",
    "question": "For a cell with E(cell) = 0.34 V and n = 2, what is delta G (F = 96500 C/mol)?",
    "options": [
      "about -65.6 kJ/mol",
      "about +65.6 kJ/mol",
      "about -32.8 kJ/mol",
      "about -131.2 kJ/mol"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "delta G = -nFE = -2(96500)(0.34), approximately -65620 J/mol, or -65.6 kJ/mol.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-090",
    "section": "Chemistry",
    "topic": "Analytical Chemistry: Electrochemistry",
    "difficulty": "medium",
    "question": "In a galvanic (voltaic) cell, oxidation occurs at the",
    "options": [
      "cathode",
      "salt bridge",
      "anode",
      "external wire"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By definition, oxidation (loss of electrons) occurs at the anode in any electrochemical cell.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-091",
    "section": "Chemistry",
    "topic": "Analytical Chemistry: Electrochemistry",
    "difficulty": "medium",
    "question": "Kohlrausch's law of independent migration of ions is mainly used to determine",
    "options": [
      "the pH of a solution",
      "the limiting molar conductivity of a weak electrolyte",
      "the rate constant of a reaction",
      "the equilibrium constant of a redox reaction"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Kohlrausch's law allows the limiting (infinite dilution) molar conductivity of a weak electrolyte to be calculated from the limiting conductivities of its constituent ions, obtained from strong electrolytes.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-092",
    "section": "Chemistry",
    "topic": "Analytical Chemistry: Ionic Equilibria and pH",
    "difficulty": "medium",
    "question": "A weak base has Kb = 1 x 10^-6. What is the pOH of a 0.01 M solution, using [OH-] approximately equal to sqrt(Kb x C)?",
    "options": [
      "4",
      "3",
      "5",
      "10"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "[OH-] is approximately sqrt(Kb C) = sqrt(10^-6 x 0.01) = 10^-4, giving pOH = 4.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-093",
    "section": "Chemistry",
    "topic": "Analytical Chemistry: Corrosion",
    "difficulty": "medium",
    "question": "Which method protects iron from corrosion by acting as a sacrificial anode?",
    "options": [
      "painting alone",
      "zinc coating (galvanization)",
      "tin coating",
      "chromium plating without any sacrificial action"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Zinc is more easily oxidized than iron, so in galvanization it corrodes preferentially, protecting the underlying iron as a sacrificial anode.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-094",
    "section": "Chemistry",
    "topic": "Basic Principles of Organic Chemistry: Electrophiles and Nucleophiles",
    "difficulty": "easy",
    "question": "Which of the following is a nucleophile?",
    "options": [
      "BF3",
      "AlCl3",
      "H+",
      "CN-"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "CN- has a lone pair it can donate to an electrophilic center, making it a nucleophile.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-095",
    "section": "Chemistry",
    "topic": "Basic Principles of Organic Chemistry: Reaction Intermediates and Resonance",
    "difficulty": "medium",
    "question": "Which of these free radicals is most stable?",
    "options": [
      "primary free radical",
      "tertiary free radical",
      "methyl free radical",
      "vinyl free radical"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Tertiary free radicals are stabilized by hyperconjugation from three alkyl groups, making them more stable than primary, methyl, or vinyl radicals.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-096",
    "section": "Chemistry",
    "topic": "Basic Principles of Organic Chemistry: Addition Reactions",
    "difficulty": "medium",
    "question": "In the presence of peroxides, anti-Markovnikov addition of HBr to propene gives mainly",
    "options": [
      "2-bromopropane",
      "1-bromopropane",
      "1,2-dibromopropane",
      "propane"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "In the peroxide-catalyzed radical mechanism, bromine adds first to the terminal carbon, giving the anti-Markovnikov product 1-bromopropane.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-097",
    "section": "Chemistry",
    "topic": "Basic Principles of Organic Chemistry: Stereoisomerism",
    "difficulty": "medium",
    "question": "Tartaric acid has two stereocenters. Considering its meso form, how many distinct stereoisomers exist in total?",
    "options": [
      "4",
      "2",
      "1",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Of the four combinations from two stereocenters, two are identical due to the molecule's internal symmetry, forming a meso compound, leaving 3 distinct stereoisomers.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-098",
    "section": "Chemistry",
    "topic": "Basic Principles of Organic Chemistry: Reaction Intermediates and Resonance",
    "difficulty": "medium",
    "question": "In the simplest carbene, :CH2, how is carbon best described?",
    "options": [
      "forming three sigma bonds with no nonbonding electrons",
      "forming two sigma bonds with two nonbonding electrons remaining",
      "forming four sigma bonds",
      "forming one sigma bond with three nonbonding electrons"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A carbene such as :CH2 has carbon forming two sigma bonds, with a pair of nonbonding (or two unpaired) electrons remaining, making it electron deficient and highly reactive.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-099",
    "section": "Chemistry",
    "topic": "Properties and Chemistry of Functionalized Organic Compounds: Alcohols and Phenols",
    "difficulty": "easy",
    "question": "Which class of alcohol reacts fastest with Lucas reagent at room temperature?",
    "options": [
      "primary alcohol",
      "secondary alcohol",
      "tertiary alcohol",
      "none react at room temperature"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Tertiary alcohols form the most stable carbocation intermediate, so they react (turn turbid) fastest with Lucas reagent.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-100",
    "section": "Chemistry",
    "topic": "Properties and Chemistry of Functionalized Organic Compounds: Alcohols and Phenols",
    "difficulty": "medium",
    "question": "Phenol is more acidic than ethanol mainly because",
    "options": [
      "phenol has a higher molecular weight",
      "phenol is less soluble in water",
      "ethanol has a longer carbon chain",
      "the phenoxide ion is stabilized by resonance with the aromatic ring"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The negative charge on the phenoxide ion delocalizes into the aromatic ring by resonance, stabilizing it and increasing phenol's acidity relative to ethanol.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-101",
    "section": "Chemistry",
    "topic": "Properties and Chemistry of Functionalized Organic Compounds: Carbonyl Compounds",
    "difficulty": "easy",
    "question": "Which reagent is used in Brady's test to detect carbonyl compounds?",
    "options": [
      "Tollens reagent",
      "2,4-dinitrophenylhydrazine (2,4-DNP)",
      "Lucas reagent",
      "Schiff's reagent used in the same way"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "2,4-DNP reacts with the carbonyl group of aldehydes and ketones to form an orange-yellow precipitate, confirming the presence of a carbonyl group.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-102",
    "section": "Chemistry",
    "topic": "Properties and Chemistry of Functionalized Organic Compounds: Carbonyl Compounds",
    "difficulty": "medium",
    "question": "Which of the following does NOT give a positive iodoform test?",
    "options": [
      "acetaldehyde",
      "acetone",
      "ethanol",
      "formaldehyde (HCHO)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Formaldehyde lacks the required CH3CO- or CH3CH(OH)- structural unit, so it does not give a positive iodoform test, unlike acetaldehyde, acetone, or ethanol.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-103",
    "section": "Chemistry",
    "topic": "Properties and Chemistry of Functionalized Organic Compounds: Carbonyl Compounds",
    "difficulty": "hard",
    "question": "Clemmensen reduction, using zinc amalgam and concentrated HCl, converts a ketone into",
    "options": [
      "an alcohol",
      "a carboxylic acid",
      "an alkane",
      "an alkene"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Clemmensen reduction fully reduces a ketone's carbonyl group to a CH2 group, giving an alkane.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-104",
    "section": "Chemistry",
    "topic": "Properties and Chemistry of Functionalized Organic Compounds: Carboxylic Acids and Derivatives",
    "difficulty": "medium",
    "question": "Which of these compounds is the strongest acid?",
    "options": [
      "acetic acid",
      "propanoic acid",
      "tert-butanoic acid",
      "trichloroacetic acid"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The three electronegative chlorine atoms strongly withdraw electron density inductively, stabilizing the conjugate base and greatly increasing acidity compared to the unsubstituted or alkyl-substituted acids.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-105",
    "section": "Chemistry",
    "topic": "Organic Nitrogen Compounds: Amines and Nitro Compounds",
    "difficulty": "easy",
    "question": "Diazotization of aniline with NaNO2/HCl is carried out at approximately what temperature?",
    "options": [
      "50-60 degrees C",
      "room temperature, about 25 degrees C",
      "100 degrees C",
      "0-5 degrees C"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Diazotization is carried out at low temperature, 0-5 degrees C, because diazonium salts are unstable and decompose readily on warming.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-106",
    "section": "Chemistry",
    "topic": "Organic Nitrogen Compounds: Amines and Nitro Compounds",
    "difficulty": "medium",
    "question": "The Gabriel phthalimide synthesis is used to selectively prepare which type of amine?",
    "options": [
      "secondary amines",
      "tertiary amines",
      "primary amines",
      "quaternary ammonium salts"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The Gabriel synthesis, via phthalimide substitution and hydrolysis, selectively produces primary amines without over-alkylation.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-107",
    "section": "Chemistry",
    "topic": "Organic Nitrogen Compounds: Amines and Nitro Compounds",
    "difficulty": "medium",
    "question": "Catalytic hydrogenation of a nitro compound with H2/Pd gives mainly",
    "options": [
      "the corresponding nitroso compound only",
      "an azo compound",
      "a hydroxylamine as the final stable product",
      "the corresponding amine"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Catalytic hydrogenation fully reduces the nitro group through intermediate stages to give the primary amine as the final product.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-108",
    "section": "Chemistry",
    "topic": "Biomolecules and Polymers: Nucleic Acids",
    "difficulty": "easy",
    "question": "In RNA, adenine pairs with which base in place of thymine?",
    "options": [
      "uracil",
      "thymine",
      "guanine",
      "cytosine"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "RNA contains uracil instead of thymine, and adenine base-pairs with uracil.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-109",
    "section": "Chemistry",
    "topic": "Biomolecules and Polymers: Amino Acids and Proteins",
    "difficulty": "medium",
    "question": "The secondary structure of proteins, such as the alpha helix and beta sheet, is primarily stabilized by",
    "options": [
      "disulfide bonds only",
      "ionic bonds between side chains",
      "hydrogen bonds between backbone N-H and C=O groups",
      "van der Waals forces exclusively"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Alpha helices and beta sheets are held together mainly by hydrogen bonds between the carbonyl oxygen and amide hydrogen of the peptide backbone.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-110",
    "section": "Chemistry",
    "topic": "Biomolecules and Polymers: Polymers",
    "difficulty": "medium",
    "question": "Natural rubber is a polymer of which monomer?",
    "options": [
      "styrene",
      "isoprene (2-methyl-1,3-butadiene)",
      "ethylene",
      "vinyl chloride"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Natural rubber is cis-1,4-polyisoprene, formed from repeated isoprene units.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-111",
    "section": "English",
    "topic": "English grammar",
    "difficulty": "easy",
    "question": "Choose the grammatically correct sentence.",
    "options": [
      "Neither the manager nor the employees was informed.",
      "Neither the manager or the employees were informed.",
      "Neither the manager nor the employees were informed.",
      "Neither the manager nor the employees is informed."
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "With 'neither...nor,' the verb agrees with the nearer subject, 'employees' (plural), so 'were' is correct.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 English syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-112",
    "section": "English",
    "topic": "Pronunciation",
    "difficulty": "easy",
    "question": "Which word has a different sound for the underlined letters 'ch' from the other three?",
    "options": [
      "chemistry",
      "machine",
      "chorus",
      "echo"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "In 'chemistry,' 'chorus,' and 'echo,' 'ch' is pronounced /k/; in 'machine,' it is pronounced /ʃ/, so it differs.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 English syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-113",
    "section": "English",
    "topic": "English grammar",
    "difficulty": "medium",
    "question": "Choose the option that best completes the sentence: 'She insisted that he ____ the report before the meeting.'",
    "options": [
      "submits",
      "submitted",
      "will submit",
      "submit"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "After a verb of insistence such as 'insisted that,' the subjunctive base form 'submit' is used regardless of the subject.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 English syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-114",
    "section": "English",
    "topic": "Comprehension of a short passage or lines of poems",
    "difficulty": "medium",
    "question": "Read the original passage: 'When the new library opened, most visitors headed straight for the bestseller shelf. A few, though, wandered instead to the reference section, where a retired teacher had spent months labeling every drawer of old maps and letters. Within a year, it was that quiet, carefully labeled corner that historians from nearby towns came to visit.' What is the main idea?",
    "options": [
      "Bestsellers are more valuable to a library than reference materials.",
      "Careful, patient work can create lasting value even if it isn't immediately noticed.",
      "Historians only visit new libraries.",
      "Labeling drawers is more important than reading books."
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The passage contrasts the initial popularity of the bestseller shelf with the quiet, careful work in the reference section, which later proved valuable to historians, highlighting how patient effort pays off over time.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 English syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-115",
    "section": "English",
    "topic": "Comprehension of a short passage or lines of poems",
    "difficulty": "hard",
    "question": "Read these original lines: 'The river does not ask the bank's permission / to bend where the rock refuses to move; / it simply finds another way forward, / patient, and never quite the same twice.' What does the river most likely symbolize?",
    "options": [
      "the destructive power of nature",
      "adaptability in the face of obstacles",
      "the importance of following fixed rules",
      "a warning about environmental damage"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The river's persistent bending around immovable rock, always finding a new path, symbolizes adaptability and persistence when facing obstacles.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 English syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-116",
    "section": "Aptitude",
    "topic": "Data Interpretation",
    "difficulty": "easy",
    "question": "A survey recorded museum visitors: 200 on Friday, 250 on Saturday, and 300 on Sunday. What is the average daily number of visitors?",
    "options": [
      "250",
      "240",
      "260",
      "275"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Total = 200+250+300 = 750. Average = 750/3 = 250 visitors per day.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-117",
    "section": "Aptitude",
    "topic": "Data Interpretation",
    "difficulty": "medium",
    "question": "A company's revenue was 500 units in Q1 and 650 units in Q2, while costs were 300 units in Q1 and 350 units in Q2. What was the percentage growth in profit from Q1 to Q2?",
    "options": [
      "30%",
      "33.3%",
      "50%",
      "20%"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Q1 profit = 500-300 = 200; Q2 profit = 650-350 = 300. The increase is 100, so the percentage growth is 100/200 x 100 = 50%.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-118",
    "section": "Aptitude",
    "topic": "Data Sufficiency",
    "difficulty": "easy",
    "question": "Question: Is n divisible by 3? Statement 1: n is divisible by 9. Statement 2: n is divisible by 5. Which is sufficient?",
    "options": [
      "Statement 2 alone is sufficient, but Statement 1 alone is not",
      "Statement 1 alone is sufficient, but Statement 2 alone is not",
      "Either statement alone is sufficient",
      "Both statements together are necessary"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Any number divisible by 9 is automatically divisible by 3, so Statement 1 alone is sufficient; divisibility by 5 gives no information about divisibility by 3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-119",
    "section": "Aptitude",
    "topic": "Data Sufficiency",
    "difficulty": "medium",
    "question": "Question: What is the perimeter of a rectangle? Statement 1: Its length is 8. Statement 2: Its area is 40. Which is sufficient?",
    "options": [
      "Statement 1 alone is sufficient",
      "Statement 2 alone is sufficient",
      "Both statements together are sufficient, but neither alone is sufficient",
      "Even both statements together are not sufficient"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Neither the length alone nor the area alone fixes both dimensions, but together they give width=40/8=5, so the perimeter is 2(8+5)=26.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-120",
    "section": "Aptitude",
    "topic": "Syllogism",
    "difficulty": "easy",
    "question": "Statements: All pilots are trained professionals. Some trained professionals are engineers. Which conclusion definitely follows?",
    "options": [
      "All pilots are engineers",
      "Some pilots are engineers",
      "No pilot is an engineer",
      "No definite conclusion about pilots being engineers follows"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The premises do not guarantee that any pilot is among the trained professionals who are engineers, so no definite conclusion follows about pilots and engineers.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-121",
    "section": "Aptitude",
    "topic": "Syllogism",
    "difficulty": "hard",
    "question": "Statements: All roses are flowers. Some flowers fade quickly. No rose fades quickly. Which conclusions follow? I. Some flowers are roses. II. Some flowers that fade quickly are not roses.",
    "options": [
      "Both I and II follow",
      "Only I follows",
      "Only II follows",
      "Neither follows"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Since all roses are flowers, it follows that some flowers are roses (I). Because no rose fades quickly, any flower that does fade quickly cannot be a rose, so some flowers that fade quickly are not roses (II).",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-122",
    "section": "Aptitude",
    "topic": "Number Series, Coding and Decoding",
    "difficulty": "easy",
    "question": "Find the next term: 1, 4, 9, 16, 25, ...",
    "options": [
      "30",
      "32",
      "36",
      "49"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The terms are perfect squares (1^2, 2^2, 3^2, ...), so the next term is 6^2=36.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-123",
    "section": "Aptitude",
    "topic": "Number Series, Coding and Decoding",
    "difficulty": "medium",
    "question": "In a code, each letter is replaced by the letter three positions earlier in the alphabet (D becomes A). How is 'FRUIT' coded?",
    "options": [
      "CORFQ",
      "CORFP",
      "COSFQ",
      "CPRFQ"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Shifting each letter back by three positions: F->C, R->O, U->R, I->F, T->Q, giving CORFQ.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-124",
    "section": "Aptitude",
    "topic": "Clocks, Calendars and Directions",
    "difficulty": "easy",
    "question": "A person walks 6 km east, then 8 km north. How far is the person from the starting point (straight-line distance)?",
    "options": [
      "10 km",
      "14 km",
      "8 km",
      "6 km"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The displacement forms a right triangle with legs 6 km and 8 km, so the straight-line distance is sqrt(6^2+8^2)=10 km.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-02-125",
    "section": "Aptitude",
    "topic": "Clocks, Calendars and Directions",
    "difficulty": "medium",
    "question": "If 1 March is a Sunday, what day of the week is 22 March of the same year?",
    "options": [
      "Saturday",
      "Monday",
      "Friday",
      "Sunday"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "22 March is 21 days after 1 March, and 21 is exactly divisible by 7, so it falls on the same weekday, Sunday.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  }
];
