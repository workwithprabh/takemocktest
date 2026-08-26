import type { Question } from '../questions';

export const VITEEE_2026_MPCEA_MATHEMATICS_SECTIONAL_2: Question[] = [
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-001",
    "section": "Mathematics",
    "topic": "Matrices and their Applications: Determinants",
    "difficulty": "easy",
    "question": "If A = [[3, 1], [2, 5]], what is det(A)?",
    "options": [
      "13",
      "17",
      "7",
      "15"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "det(A) = 3 x 5 - 1 x 2 = 15 - 2 = 13.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-002",
    "section": "Mathematics",
    "topic": "Matrices and their Applications: Matrix Algebra",
    "difficulty": "medium",
    "question": "For A = [[2, 4], [1, 2]], which statement is correct?",
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
    "explanation": "Row 2 multiplied by 2 gives row 1, so the rows are dependent; since the matrix is nonzero, rank(A) = 1.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-003",
    "section": "Mathematics",
    "topic": "Matrices and their Applications: Simultaneous Linear Equations",
    "difficulty": "medium",
    "question": "The system 2x + 3y = 6 and 4x + ky = 12 has infinitely many solutions. What is k?",
    "options": [
      "3",
      "6",
      "12",
      "2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For infinitely many solutions, the second equation must be exactly twice the first, so k = 2 x 3 = 6.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-004",
    "section": "Mathematics",
    "topic": "Matrices and their Applications: Linear Programming",
    "difficulty": "hard",
    "question": "Maximize Z = 4x + 3y subject to x + y <= 5, x + 2y <= 8, x >= 0, y >= 0. What is the maximum value of Z?",
    "options": [
      "17",
      "12",
      "24",
      "20"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The feasible vertices are (0,0), (5,0), (0,4), and the intersection (2,3) of the two lines. Z is 0, 20, 12, and 17 respectively, so the maximum is 20.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-005",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Trigonometric Identities",
    "difficulty": "easy",
    "question": "If cos theta = 5/13 and theta is acute, what is sin theta?",
    "options": [
      "5/12",
      "13/12",
      "12/13",
      "8/13"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "sin theta = sqrt(1 - cos^2 theta) = sqrt(1 - 25/169) = 12/13.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-006",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Inverse Trigonometric Functions",
    "difficulty": "medium",
    "question": "What is the value of tan^-1(1) + tan^-1(2) + tan^-1(3)?",
    "options": [
      "pi/2",
      "3pi/4",
      "pi",
      "pi/4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Since 2 x 3 > 1, tan^-1(2) + tan^-1(3) = pi - pi/4 = 3pi/4. Adding tan^-1(1) = pi/4 gives pi.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-007",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Complex Numbers",
    "difficulty": "medium",
    "question": "If z = 4 + 3i, what is |z|^2?",
    "options": [
      "7",
      "5",
      "49",
      "25"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "|z|^2 = 4^2 + 3^2 = 25.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-008",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Complex Numbers",
    "difficulty": "hard",
    "question": "The equation z^3 = -8 has three cube roots. Which root has the smallest positive principal argument?",
    "options": [
      "-2",
      "1 + sqrt(3)i",
      "1 - sqrt(3)i",
      "-1 + sqrt(3)i"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Write -8 as 8cis(pi). The cube-root arguments are pi/3, pi, and -pi/3, each with modulus 2. The smallest positive principal argument is pi/3, giving 2cis(pi/3) = 1 + sqrt(3)i.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-009",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Heights and Distances",
    "difficulty": "medium",
    "question": "From a point on level ground, the angle of elevation of the top of a tower is 45 degrees. After moving 10 m further away from the tower, the angle becomes 30 degrees. What is the height of the tower?",
    "options": [
      "5(sqrt(3)+1) m",
      "5(sqrt(3)-1) m",
      "10(sqrt(3)+1) m",
      "5sqrt(3) m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let x be the initial distance. Then h = x tan45 = x, and h = (x+10)tan30 = (x+10)/sqrt(3). Solving x sqrt(3) = x+10 gives x(sqrt(3)-1) = 10, so x = 5(sqrt(3)+1), and h = 5(sqrt(3)+1) m.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-010",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Straight Lines",
    "difficulty": "easy",
    "question": "What is the slope of the line 5x + 2y - 8 = 0?",
    "options": [
      "5/2",
      "2/5",
      "-2/5",
      "-5/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Rearranging gives y = -(5/2)x + 4, so the slope is -5/2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-011",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Circle",
    "difficulty": "medium",
    "question": "The circle x^2 + y^2 - 8x + 2y + 8 = 0 has radius",
    "options": [
      "4",
      "sqrt(7)",
      "3",
      "9"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Completing squares gives (x-4)^2 + (y+1)^2 = 9, so the radius is 3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-012",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Parabola",
    "difficulty": "medium",
    "question": "For the parabola y^2 = 20x, what is the length of its latus rectum?",
    "options": [
      "5",
      "10",
      "20",
      "40"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The standard form y^2 = 4ax gives 4a = 20 directly, so the latus rectum length is 20.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-013",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Ellipse",
    "difficulty": "hard",
    "question": "A tangent to the ellipse x^2/25 + y^2/16 = 1 is drawn at the point (3, 16/5). What is its equation?",
    "options": [
      "3x/5 + y/16 = 1",
      "x/3 + 5y/16 = 1",
      "3x/25 + y/5 = 1",
      "3x/25 + y/16 = 1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For x^2/a^2 + y^2/b^2 = 1, the tangent at (x1,y1) is xx1/a^2 + yy1/b^2 = 1. With a^2=25, b^2=16, (x1,y1)=(3,16/5), this gives 3x/25 + y/5 = 1.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-014",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Hyperbola",
    "difficulty": "medium",
    "question": "The hyperbola x^2/16 - y^2/9 = 1 has eccentricity",
    "options": [
      "4/5",
      "5/4",
      "3/4",
      "sqrt(7)/4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "e = sqrt(1 + b^2/a^2) = sqrt(1 + 9/16) = 5/4.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-015",
    "section": "Mathematics",
    "topic": "Vector Algebra: Scalar Product",
    "difficulty": "easy",
    "question": "If a = 3i - 2j + k and b = i + j - 2k, what is a dot b?",
    "options": [
      "1",
      "-1",
      "3",
      "-3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a dot b = 3(1) + (-2)(1) + 1(-2) = 3 - 2 - 2 = -1.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-016",
    "section": "Mathematics",
    "topic": "Vector Algebra: Vector Operations",
    "difficulty": "medium",
    "question": "The vectors a = 2i - j + k and b = i + 2j - k are perpendicular to which vector among the following?",
    "options": [
      "a + b",
      "a - b",
      "2a + b",
      "a x b"
    ],
    "correctIndex": 3,
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
    "id": "viteee-2026-mpcea-mathematics-sectional-02-017",
    "section": "Mathematics",
    "topic": "Vector Algebra: Scalar Triple Product",
    "difficulty": "hard",
    "question": "If a dot (b x c) = 5, what is (a + b) dot (b x c + c x a)?",
    "options": [
      "0",
      "5",
      "15",
      "10"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Expanding, the self-repeated triple products a.(cxa) and b.(bxc) vanish, leaving a.(bxc) + b.(cxa). By cyclic invariance both equal 5, giving a total of 10.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-018",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Three Dimensions: Distance in Three Dimensions",
    "difficulty": "easy",
    "question": "What is the distance between the points (2,-1,4) and (5,3,4)?",
    "options": [
      "sqrt(41)",
      "7",
      "5",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Distance = sqrt((5-2)^2 + (3+1)^2 + (4-4)^2) = sqrt(9+16) = 5.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-019",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Three Dimensions: Direction Ratios and Cosines",
    "difficulty": "medium",
    "question": "A line has direction ratios 3, 4, 12. What are the corresponding direction cosines with positive first component?",
    "options": [
      "(3/sqrt(13), 4/sqrt(13), 12/sqrt(13))",
      "(3/13, 4/13, 12/13)",
      "(12/13, 4/13, 3/13)",
      "(3/169, 4/169, 12/169)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The magnitude of the direction-ratio vector is sqrt(9+16+144) = 13, so the direction cosines are (3/13, 4/13, 12/13).",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-020",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Three Dimensions: Planes in Three Dimensions",
    "difficulty": "medium",
    "question": "Find the angle between the planes x + y = 3 and x - z = 2.",
    "options": [
      "45 degrees",
      "90 degrees",
      "60 degrees",
      "30 degrees"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The normals are n1=(1,1,0) and n2=(1,0,-1). Their dot product is 1, and each has magnitude sqrt(2), so cos(theta)=1/2, giving theta=60 degrees.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-021",
    "section": "Mathematics",
    "topic": "Differential Calculus: Differentiation",
    "difficulty": "easy",
    "question": "If f(x) = x^3 - 4x + 1, what is f'(1)?",
    "options": [
      "1",
      "-4",
      "-1",
      "7"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f'(x) = 3x^2 - 4, so f'(1) = 3 - 4 = -1.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-022",
    "section": "Mathematics",
    "topic": "Differential Calculus: Differentiation",
    "difficulty": "medium",
    "question": "If y = ln(x^2 + 1), what is dy/dx at x = 1?",
    "options": [
      "2",
      "1/2",
      "0",
      "1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "dy/dx = 2x/(x^2+1). At x=1, this is 2/2 = 1.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-023",
    "section": "Mathematics",
    "topic": "Differential Calculus: Limits",
    "difficulty": "medium",
    "question": "Evaluate lim as x approaches 0 of (1 - cos x)/x^2.",
    "options": [
      "1",
      "0",
      "2",
      "1/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using 1 - cos x is approximately x^2/2 for small x, the limit is 1/2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-024",
    "section": "Mathematics",
    "topic": "Differential Calculus: Applications of Derivatives",
    "difficulty": "medium",
    "question": "For f(x) = x^3 - 3x, at which x-value does f have a local minimum?",
    "options": [
      "x = -1",
      "x = 0",
      "x = 1",
      "x = 3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f'(x) = 3(x-1)(x+1), so the critical points are x = 1 and x = -1. f''(x) = 6x, and f''(1) = 6 > 0, so x = 1 is a local minimum.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-025",
    "section": "Mathematics",
    "topic": "Differential Calculus: Mean Value Theorem",
    "difficulty": "hard",
    "question": "For f(x) = x^2 on [1,4], use the Lagrange Mean Value Theorem. What is the value of c in (1,4) for which f'(c) equals the average rate of change?",
    "options": [
      "2",
      "2.5",
      "5",
      "3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The average rate of change is (16-1)/3 = 5. Since f'(c) = 2c, setting 2c = 5 gives c = 2.5, which lies between 1 and 4.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-026",
    "section": "Mathematics",
    "topic": "Integral Calculus and its Applications: Definite Integrals",
    "difficulty": "easy",
    "question": "The definite integral integral_0^3 2x dx has value",
    "options": [
      "6",
      "9",
      "3",
      "18"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The antiderivative is x^2. Evaluating from 0 to 3 gives 9.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-027",
    "section": "Mathematics",
    "topic": "Integral Calculus and its Applications: Definite Integrals",
    "difficulty": "medium",
    "question": "Let I = integral_0^(pi/2) cos^2 x dx. What is I?",
    "options": [
      "pi/2",
      "pi",
      "1",
      "pi/4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using cos^2 x = (1+cos2x)/2, the integral evaluates to [x/2 + sin(2x)/4] from 0 to pi/2 = pi/4.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-028",
    "section": "Mathematics",
    "topic": "Integral Calculus and its Applications: Area of Bounded Regions",
    "difficulty": "medium",
    "question": "What is the area bounded by y = 9 - x^2 and the x-axis?",
    "options": [
      "18",
      "27",
      "54",
      "36"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The curve meets the x-axis at x = +-3. Area = integral_-3^3 (9-x^2) dx = 2[9x - x^3/3]_0^3 = 36.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-029",
    "section": "Mathematics",
    "topic": "Integral Calculus and its Applications: Definite Integrals",
    "difficulty": "hard",
    "question": "Let I = integral_0^pi x sin x /(1 + cos^2 x) dx. What is I?",
    "options": [
      "pi^2/4",
      "pi^2/2",
      "pi/4",
      "pi^2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using the substitution x -> pi - x gives 2I = pi times integral_0^pi sinx/(1+cos^2x) dx. Substituting u=cosx shows that integral equals pi/2, so I = pi^2/4.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-030",
    "section": "Mathematics",
    "topic": "Differential Equations: Order and Degree",
    "difficulty": "easy",
    "question": "What is the order of the differential equation d^3y/dx^3 + x(dy/dx)^2 = 0?",
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
    "id": "viteee-2026-mpcea-mathematics-sectional-02-031",
    "section": "Mathematics",
    "topic": "Differential Equations: Separable Differential Equations",
    "difficulty": "medium",
    "question": "Solve dy/dx = 2xy with y(0) = 3.",
    "options": [
      "y = 3e^(2x)",
      "y = e^(3x^2)",
      "y = 3x^2",
      "y = 3e^(x^2)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Separating variables gives dy/y = 2x dx, so ln y = x^2 + C, hence y = Ce^(x^2). Using y(0)=3 gives C=3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-032",
    "section": "Mathematics",
    "topic": "Differential Equations: First-order Linear Differential Equations",
    "difficulty": "hard",
    "question": "The differential equation dy/dx + 2y = e^(-2x) has y(0) = 0. What is y(1)?",
    "options": [
      "e^2",
      "1/e",
      "1/e^2",
      "2/e^2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The integrating factor is e^(2x), giving d(y e^(2x))/dx = 1, so y e^(2x) = x + C. Since y(0)=0, C=0, so y = x e^(-2x). At x=1, y = 1/e^2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-033",
    "section": "Mathematics",
    "topic": "Probability and Distributions: Probability",
    "difficulty": "easy",
    "question": "A fair coin is tossed 3 times. What is the probability of getting exactly 2 heads?",
    "options": [
      "3/8",
      "1/2",
      "1/8",
      "1/4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are C(3,2)=3 favorable outcomes out of 2^3=8 total, giving probability 3/8.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-034",
    "section": "Mathematics",
    "topic": "Probability and Distributions: Probability",
    "difficulty": "medium",
    "question": "Two cards are drawn without replacement from a standard 52-card deck. What is the probability that both are kings?",
    "options": [
      "1/221",
      "1/169",
      "1/52",
      "2/221"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The probability is (4/52)(3/51) = 12/2652 = 1/221.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-035",
    "section": "Mathematics",
    "topic": "Probability and Distributions: Binomial Distribution",
    "difficulty": "medium",
    "question": "For a binomial random variable X with n = 8 and p = 0.25, what is E(X)?",
    "options": [
      "2",
      "1.6",
      "4",
      "8"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a binomial variable, E(X) = np = 8 x 0.25 = 2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-036",
    "section": "Mathematics",
    "topic": "Probability and Distributions: Conditional Probability and Bayes Theorem",
    "difficulty": "hard",
    "question": "Two coins are in a box: one fair, one biased with P(heads) = 0.75. A coin is chosen at random and tossed. Given that the result is heads, what is the probability the fair coin was chosen?",
    "options": [
      "1/2",
      "2/5",
      "3/5",
      "1/5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P(H) = 0.5(0.5) + 0.5(0.75) = 0.625. P(fair|H) = 0.25/0.625 = 2/5.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-037",
    "section": "Mathematics",
    "topic": "Discrete Mathematics: Sets and Relations",
    "difficulty": "easy",
    "question": "If A = {2,4,6,8} and B = {4,8,12}, how many elements are in A intersection B?",
    "options": [
      "3",
      "2",
      "1",
      "4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A intersection B = {4,8}, which has 2 elements.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-038",
    "section": "Mathematics",
    "topic": "Discrete Mathematics: Counting Techniques",
    "difficulty": "medium",
    "question": "How many distinct arrangements can be formed from all the letters of the word LEVEL?",
    "options": [
      "120",
      "30",
      "60",
      "20"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "LEVEL has 5 letters with L repeated twice and E repeated twice, so the number of arrangements is 5!/(2!2!) = 30.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-039",
    "section": "Mathematics",
    "topic": "Discrete Mathematics: Sequences and Series",
    "difficulty": "medium",
    "question": "The sum of the first 10 terms of the arithmetic progression 5, 9, 13, ... is",
    "options": [
      "230",
      "220",
      "240",
      "180"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "S10 = (10/2)[2(5) + 9(4)] = 5(10+36) = 230.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-02-040",
    "section": "Mathematics",
    "topic": "Discrete Mathematics: Mathematical Logic",
    "difficulty": "hard",
    "question": "Which of the following propositions is a tautology?",
    "options": [
      "p or not p",
      "p and not p",
      "p or q",
      "p and q"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "'p or not p' is always true regardless of the truth value of p, so it is a tautology.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  }
];
