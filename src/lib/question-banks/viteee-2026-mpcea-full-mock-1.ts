import type { Question } from '../questions';

export const VITEEE_2026_MPCEA_FULL_MOCK_1: Question[] = [
  {
    "id": "viteee-2026-mpcea-full-01-001",
    "section": "Mathematics",
    "topic": "Matrices and their Applications: Determinants",
    "difficulty": "easy",
    "question": "If A = [[2, 1], [3, 4]], what is det(A)?",
    "options": [
      "11",
      "-5",
      "5",
      "8"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "det(A) = 2 x 4 - 1 x 3 = 8 - 3 = 5.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-002",
    "section": "Mathematics",
    "topic": "Matrices and their Applications: Matrix Algebra",
    "difficulty": "medium",
    "question": "For A = [[1, 2], [2, 4]], which statement is correct?",
    "options": [
      "A has rank 0",
      "A has rank 2",
      "A has rank 1",
      "A is invertible"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The second row is twice the first, so the rows are dependent but not both zero. Hence rank(A) = 1.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-003",
    "section": "Mathematics",
    "topic": "Matrices and their Applications: Simultaneous Linear Equations",
    "difficulty": "medium",
    "question": "The system x + y = 3 and 2x + ky = 6 has infinitely many solutions. What is k?",
    "options": [
      "1",
      "3",
      "6",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For infinitely many solutions, the second equation must be exactly twice the first. Hence k = 2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-004",
    "section": "Mathematics",
    "topic": "Matrices and their Applications: Linear Programming",
    "difficulty": "hard",
    "question": "Maximize Z = 3x + 2y subject to x + y <= 4, x + 3y <= 6, x >= 0, y >= 0. What is the maximum value of Z?",
    "options": [
      "10",
      "11",
      "14",
      "12"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The feasible vertices are (0,0), (4,0), (0,2), and the intersection of x+y=4 and x+3y=6, which is (3,1). Z is 0, 12, 4, and 11 respectively. Therefore the maximum is 12.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-005",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Trigonometric Identities",
    "difficulty": "easy",
    "question": "If sin theta = 3/5 and theta is acute, what is cos theta?",
    "options": [
      "3/4",
      "5/4",
      "4/5",
      "2/5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For an acute angle, cos theta is positive. From sin^2 theta + cos^2 theta = 1, cos theta = sqrt(1 - 9/25) = 4/5.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-006",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Inverse Trigonometric Functions",
    "difficulty": "medium",
    "question": "What is the principal value of tan^-1(1) + tan^-1(1/2) + tan^-1(1/3)?",
    "options": [
      "pi/4",
      "pi/3",
      "3pi/4",
      "pi/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "tan^-1(1/2) + tan^-1(1/3) = tan^-1((1/2+1/3)/(1-1/6)) = tan^-1(1) = pi/4. Adding tan^-1(1) gives pi/2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-007",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Complex Numbers",
    "difficulty": "medium",
    "question": "If z = 3 - 4i, what is 1/z?",
    "options": [
      "(3 + 4i)/25",
      "(3 - 4i)/25",
      "(4 + 3i)/25",
      "(3 + 4i)/5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "1/(3-4i) = (3+4i)/(3^2+4^2) = (3+4i)/25.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-008",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Complex Numbers",
    "difficulty": "medium",
    "question": "The equation z^3 = 8i has three cube roots. Which root has the smallest positive principal argument?",
    "options": [
      "1 + sqrt(3)i",
      "-sqrt(3) + i",
      "sqrt(3) + i",
      "-2i"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Write 8i as 8 cis(pi/2). The cube-root arguments are pi/6, 5pi/6, and -pi/2, each with modulus 2. The smallest positive principal argument is pi/6, giving 2cis(pi/6)=sqrt(3)+i.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-009",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Heights and Distances",
    "difficulty": "medium",
    "question": "From a point on level ground, the angle of elevation of the top of a tower is 30 degrees. After moving 20 m toward the tower, the angle becomes 60 degrees. What is the height of the tower?",
    "options": [
      "10sqrt(3) m",
      "20sqrt(3) m",
      "10 m",
      "20 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let the nearer distance be x. Then h = x tan60 = xsqrt(3), while h = (x+20)tan30 = (x+20)/sqrt(3). Thus 3x = x+20, so x=10 and h=10sqrt(3) m.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-010",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Straight Lines",
    "difficulty": "easy",
    "question": "What is the slope of the line 3x - 2y + 5 = 0?",
    "options": [
      "-3/2",
      "3/2",
      "2/3",
      "-2/3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Rearranging gives y = (3/2)x + 5/2, so the slope is 3/2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-011",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Circle",
    "difficulty": "medium",
    "question": "The circle x^2 + y^2 - 6x + 4y - 12 = 0 has radius",
    "options": [
      "3",
      "4",
      "sqrt(13)",
      "5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Completing squares gives (x-3)^2 + (y+2)^2 = 25, so the radius is 5.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-012",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Parabola",
    "difficulty": "medium",
    "question": "For the parabola y^2 = 16x, what is the length of its latus rectum?",
    "options": [
      "4",
      "16",
      "8",
      "32"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The standard form y^2 = 4ax gives 4a = 16, so a = 4. The latus rectum length is 4a = 16.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-013",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Ellipse",
    "difficulty": "hard",
    "question": "A tangent to the ellipse x^2/25 + y^2/9 = 1 is drawn at the point (4, 9/5). What is its equation?",
    "options": [
      "4x/25 + y/5 = 1",
      "4x/5 + y/9 = 1",
      "x/4 + 5y/9 = 1",
      "4x/25 + y/9 = 1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For x^2/a^2 + y^2/b^2 = 1, the tangent at (x1,y1) is xx1/a^2 + yy1/b^2 = 1. Substituting (4,9/5), a^2=25, b^2=9 gives 4x/25 + y/5 = 1.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-014",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Hyperbola",
    "difficulty": "medium",
    "question": "The hyperbola x^2/9 - y^2/16 = 1 has eccentricity",
    "options": [
      "5/3",
      "4/3",
      "3/5",
      "sqrt(7)/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For x^2/a^2 - y^2/b^2 = 1, e = sqrt(1+b^2/a^2) = sqrt(1+16/9) = 5/3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-015",
    "section": "Mathematics",
    "topic": "Vector Algebra: Scalar Product",
    "difficulty": "easy",
    "question": "If a = 2i + j - k and b = i - 3j + 2k, what is a dot b?",
    "options": [
      "3",
      "-1",
      "-3",
      "1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a dot b = 2(1) + 1(-3) + (-1)(2) = 2 - 3 - 2 = -3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-016",
    "section": "Mathematics",
    "topic": "Vector Algebra: Vector Operations",
    "difficulty": "medium",
    "question": "The vectors a = i + 2j + 2k and b = 2i - j are perpendicular to which vector among the following?",
    "options": [
      "a x b",
      "a + b",
      "a - b",
      "2a + b"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By definition, the cross product a x b is perpendicular to both a and b.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-017",
    "section": "Mathematics",
    "topic": "Vector Algebra: Scalar Triple Product",
    "difficulty": "hard",
    "question": "If a, b, c are vectors with a dot (b x c) = 6, what is (b + c) dot (c x a + a x b)?",
    "options": [
      "0",
      "12",
      "6",
      "18"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Expand: b dot(c x a) + b dot(a x b) + c dot(c x a) + c dot(a x b). The middle two self-repeated triple products are zero. By cyclic invariance, b dot(c x a)=6 and c dot(a x b)=6, so the sum is 12.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-018",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Three Dimensions: Distance in Three Dimensions",
    "difficulty": "easy",
    "question": "What is the distance between the points (1,2,3) and (4,6,3)?",
    "options": [
      "4",
      "sqrt(17)",
      "7",
      "5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Distance = sqrt((4-1)^2 + (6-2)^2 + (3-3)^2) = sqrt(9+16) = 5.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-019",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Three Dimensions: Direction Ratios and Cosines",
    "difficulty": "medium",
    "question": "A line has direction ratios 2, -1, 2. What are the corresponding direction cosines with positive first component?",
    "options": [
      "(2/5, -1/5, 2/5)",
      "(2/3, -1/3, 2/3)",
      "(1/3, -2/3, 2/3)",
      "(2/sqrt(5), -1/sqrt(5), 2/sqrt(5))"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Normalize the direction-ratio vector. Its magnitude is sqrt(4+1+4)=3, so the direction cosines are (2/3,-1/3,2/3).",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-020",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Three Dimensions: Planes in Three Dimensions",
    "difficulty": "medium",
    "question": "Find the angle between the planes x + y = 2 and x - y + sqrt(2)z = 3.",
    "options": [
      "30 degrees",
      "45 degrees",
      "90 degrees",
      "60 degrees"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Their normals are n1 = (1,1,0) and n2 = (1,-1,sqrt(2)). The dot product is 1 - 1 + 0 = 0, so the normals are perpendicular. Therefore the planes meet at 90 degrees.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-021",
    "section": "Mathematics",
    "topic": "Differential Calculus: Differentiation",
    "difficulty": "easy",
    "question": "If f(x) = x^3 - 3x^2 + 2, what is f'(2)?",
    "options": [
      "0",
      "2",
      "-2",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f'(x) = 3x^2 - 6x. At x=2, f'(2)=12-12=0.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-022",
    "section": "Mathematics",
    "topic": "Differential Calculus: Limits",
    "difficulty": "medium",
    "question": "Evaluate lim as x approaches 0 of (sin 5x)/x.",
    "options": [
      "1",
      "0",
      "25",
      "5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "(sin 5x)/x = 5(sin 5x)/(5x), and sin u/u approaches 1. Hence the limit is 5.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-023",
    "section": "Mathematics",
    "topic": "Differential Calculus: Applications of Derivatives",
    "difficulty": "medium",
    "question": "For f(x) = x^3 - 6x^2 + 9x, at which x-value does f have a local maximum?",
    "options": [
      "x = 1",
      "x = 0",
      "x = 2",
      "x = 3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f'(x)=3(x-1)(x-3), so stationary points are 1 and 3. f''(x)=6x-12, and f''(1)=-6<0, so x=1 is a local maximum.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-024",
    "section": "Mathematics",
    "topic": "Differential Calculus: Mean Value Theorem",
    "difficulty": "hard",
    "question": "For f(x) = ln x, use the Lagrange Mean Value Theorem on [1,e]. What is the value of c in (1,e) for which f'(c) equals the average rate of change?",
    "options": [
      "1/(e-1)",
      "e/(e-1)",
      "sqrt(e)",
      "e - 1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The average rate of change is [ln e - ln 1]/(e-1)=1/(e-1). Since f'(c)=1/c, we require 1/c=1/(e-1), so c=e-1, which lies between 1 and e.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-025",
    "section": "Mathematics",
    "topic": "Differential Calculus: Errors and Approximations",
    "difficulty": "hard",
    "question": "Using the linear approximation of sqrt(x) at x = 25, what is the approximate value of sqrt(25.4)?",
    "options": [
      "5.04",
      "5.004",
      "5.08",
      "5.4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For f(x)=sqrt(x), f(25)=5 and f'(25)=1/10. With dx=0.4, df is approximately (1/10)(0.4)=0.04. Hence sqrt(25.4) is approximately 5.04.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-026",
    "section": "Mathematics",
    "topic": "Integral Calculus and its Applications: Definite Integrals",
    "difficulty": "easy",
    "question": "The definite integral integral_0^2 3x^2 dx has value",
    "options": [
      "4",
      "6",
      "8",
      "12"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The antiderivative is x^3. Evaluating from 0 to 2 gives 8.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-027",
    "section": "Mathematics",
    "topic": "Integral Calculus and its Applications: Definite Integrals",
    "difficulty": "medium",
    "question": "Let I = integral_0^(pi/2) sin x cos x dx. What is I?",
    "options": [
      "1",
      "1/2",
      "pi/4",
      "0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let u=sin x, du=cos x dx. The limits become 0 to 1, so the integral is integral_0^1 u du = 1/2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-028",
    "section": "Mathematics",
    "topic": "Integral Calculus and its Applications: Area of Bounded Regions",
    "difficulty": "medium",
    "question": "What is the area bounded by y = x and y = x^2 between x = 0 and x = 1?",
    "options": [
      "1/3",
      "1/2",
      "2/3",
      "1/6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "On [0,1], x >= x^2. The area is integral_0^1 (x-x^2) dx = 1/2 - 1/3 = 1/6.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-029",
    "section": "Mathematics",
    "topic": "Integral Calculus and its Applications: Definite Integrals",
    "difficulty": "hard",
    "question": "Using symmetry on [0, pi/2], the value of integral_0^(pi/2) [ln(sin x)-ln(cos x)] dx is",
    "options": [
      "ln 2",
      "pi ln 2",
      "-pi ln 2",
      "0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Under the substitution x -> pi/2 - x, the integral of ln(sin x) equals the integral of ln(cos x) over the same interval. Their difference therefore integrates to 0.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-030",
    "section": "Mathematics",
    "topic": "Differential Equations: Order and Degree",
    "difficulty": "easy",
    "question": "What is the order of the differential equation d^2y/dx^2 + (dy/dx)^3 = x?",
    "options": [
      "2",
      "1",
      "3",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The highest derivative present is d^2y/dx^2, so the order is 2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-031",
    "section": "Mathematics",
    "topic": "Differential Equations: Separable Differential Equations",
    "difficulty": "medium",
    "question": "Solve dy/dx = 3x^2 with y(0)=4.",
    "options": [
      "y = 3x^3 + 4",
      "y = x^3 + 4",
      "y = x^3",
      "y = x^2 + 4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Integrating gives y=x^3+C. The condition y(0)=4 gives C=4.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-032",
    "section": "Mathematics",
    "topic": "Differential Equations: First-order Linear Differential Equations",
    "difficulty": "hard",
    "question": "The differential equation dy/dx + y = e^x has y(0)=1. What is y(ln 2)?",
    "options": [
      "1",
      "3/2",
      "2",
      "5/4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using integrating factor e^x, d(ye^x)/dx=e^{2x}. Thus ye^x=(1/2)e^{2x}+C. From y(0)=1, C=1/2. Hence y=(1/2)e^x+(1/2)e^{-x}. At x=ln2, y=1+1/4=5/4.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-033",
    "section": "Mathematics",
    "topic": "Probability and Distributions: Probability",
    "difficulty": "easy",
    "question": "A fair die is rolled once. What is the probability of obtaining a prime number?",
    "options": [
      "1/3",
      "1/2",
      "2/3",
      "5/6"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The prime faces are 2, 3, and 5, giving 3 favorable outcomes out of 6. Probability = 3/6 = 1/2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-034",
    "section": "Mathematics",
    "topic": "Probability and Distributions: Probability",
    "difficulty": "medium",
    "question": "Two cards are drawn without replacement from a standard 52-card deck. What is the probability that both are aces?",
    "options": [
      "1/169",
      "1/221",
      "1/52",
      "2/221"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The probability is (4/52)(3/51) = 12/2652 = 1/221.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-035",
    "section": "Mathematics",
    "topic": "Probability and Distributions: Binomial Distribution",
    "difficulty": "medium",
    "question": "For a binomial random variable X with n = 5 and p = 0.4, what is E(X)?",
    "options": [
      "1.2",
      "2.5",
      "3",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a binomial variable, E(X)=np=5 x 0.4=2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-036",
    "section": "Mathematics",
    "topic": "Probability and Distributions: Conditional Probability and Bayes Theorem",
    "difficulty": "hard",
    "question": "A disease test has sensitivity 0.90 and specificity 0.95. If 2% of a population has the disease, what is the probability that a randomly selected person who tests positive actually has the disease?",
    "options": [
      "9/50",
      "18/67",
      "18/49",
      "45/49"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P(D and +)=0.02 x 0.90=0.018. P(not D and +)=0.98 x 0.05=0.049. Hence P(+)=0.067 and P(D|+)=0.018/0.067=18/67.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-037",
    "section": "Mathematics",
    "topic": "Discrete Mathematics: Sets and Relations",
    "difficulty": "easy",
    "question": "If A = {1,2,3} and B = {3,4}, how many elements are in A union B?",
    "options": [
      "3",
      "5",
      "6",
      "4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A union B = {1,2,3,4}, which has 4 elements.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-038",
    "section": "Mathematics",
    "topic": "Discrete Mathematics: Counting Techniques",
    "difficulty": "medium",
    "question": "How many 4-letter arrangements can be formed from the letters of MATH if no letter is repeated?",
    "options": [
      "12",
      "16",
      "64",
      "24"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "All 4 distinct letters are used, so the number of arrangements is 4! = 24.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-039",
    "section": "Mathematics",
    "topic": "Discrete Mathematics: Sequences and Series",
    "difficulty": "medium",
    "question": "The sum of the first 8 terms of the geometric progression 3, 6, 12, ... is",
    "options": [
      "381",
      "768",
      "765",
      "1533"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Here a=3, r=2. S8 = a(r^8-1)/(r-1)=3(256-1)=765.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-040",
    "section": "Mathematics",
    "topic": "Discrete Mathematics: Mathematical Logic",
    "difficulty": "hard",
    "question": "Which proposition is logically equivalent to 'If p, then q'?",
    "options": [
      "If q, then p",
      "If not p, then not q",
      "If not q, then not p",
      "p and q"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "An implication p -> q is logically equivalent to its contrapositive, not q -> not p.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-041",
    "section": "Physics",
    "topic": "Mechanics and Properties of Matter, including Heat and Thermodynamics: Work, Energy and Momentum",
    "difficulty": "easy",
    "question": "A 4 kg body moving at 3 m/s has kinetic energy",
    "options": [
      "6 J",
      "18 J",
      "12 J",
      "36 J"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "K = (1/2)mv^2 = 0.5 x 4 x 9 = 18 J.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-042",
    "section": "Physics",
    "topic": "Mechanics and Properties of Matter, including Heat and Thermodynamics: Friction and Work-Energy",
    "difficulty": "medium",
    "question": "A 2 kg block moving at 6 m/s on a horizontal surface is brought to rest by a constant friction force of 9 N. How far does it travel before stopping?",
    "options": [
      "2 m",
      "6 m",
      "8 m",
      "4 m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Initial kinetic energy is 0.5 x 2 x 6^2 = 36 J. Friction does work 9s, so 9s = 36 and s = 4 m.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-043",
    "section": "Physics",
    "topic": "Mechanics and Properties of Matter, including Heat and Thermodynamics: Collisions and Momentum",
    "difficulty": "hard",
    "question": "A 1 kg ball moving at 8 m/s collides elastically head-on with a 3 kg ball initially at rest. What is the velocity of the 1 kg ball after collision?",
    "options": [
      "2 m/s",
      "-4 m/s",
      "4 m/s",
      "-2 m/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a one-dimensional elastic collision, v1 = [(m1-m2)/(m1+m2)]u1 = [(1-3)/4]8 = -4 m/s.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-044",
    "section": "Physics",
    "topic": "Mechanics and Properties of Matter, including Heat and Thermodynamics: Elasticity",
    "difficulty": "medium",
    "question": "A wire of length 1.5 m and cross-sectional area 2 x 10^-6 m^2 elongates by 0.75 mm under a force of 200 N. What is Young's modulus?",
    "options": [
      "1 x 10^11 Pa",
      "2 x 10^11 Pa",
      "4 x 10^11 Pa",
      "2 x 10^10 Pa"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Y = (F/A)/(Delta L/L) = FL/(A Delta L) = 200 x 1.5 /(2 x 10^-6 x 0.75 x 10^-3) = 2 x 10^11 Pa.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-045",
    "section": "Physics",
    "topic": "Mechanics and Properties of Matter, including Heat and Thermodynamics: Fluid Mechanics",
    "difficulty": "easy",
    "question": "A liquid of density 800 kg/m^3 flows through a pipe of area 4 cm^2 at 2 m/s. What volume passes a section in 5 s?",
    "options": [
      "0.004 m^3",
      "0.0004 m^3",
      "0.04 m^3",
      "0.4 m^3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Flow rate Q = Av = 4 x 10^-4 x 2 = 8 x 10^-4 m^3/s. In 5 s, volume = 4 x 10^-3 m^3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-046",
    "section": "Physics",
    "topic": "Mechanics and Properties of Matter, including Heat and Thermodynamics: Thermodynamics",
    "difficulty": "medium",
    "question": "One mole of an ideal gas expands isothermally at temperature T from volume V to 2V. The work done by the gas is",
    "options": [
      "2RT",
      "RT ln 2",
      "RT/2",
      "RT"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For an isothermal ideal-gas expansion, W = nRT ln(V2/V1). With n=1 and V2/V1=2, W = RT ln 2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-047",
    "section": "Physics",
    "topic": "Mechanics and Properties of Matter, including Heat and Thermodynamics: Blackbody Radiation",
    "difficulty": "medium",
    "question": "A blackbody at 600 K radiates power P per unit area. At what temperature will it radiate 16P per unit area?",
    "options": [
      "1200 K",
      "900 K",
      "1800 K",
      "2400 K"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Stefan's law gives power per area proportional to T^4. If P2/P1=16, then T2/T1=16^(1/4)=2, so T2=1200 K.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-048",
    "section": "Physics",
    "topic": "Electrostatics: Electric Field and Coulomb Law",
    "difficulty": "easy",
    "question": "Two charges +2 microC and +8 microC are separated by 3 m in vacuum. Using k = 9 x 10^9 N m^2/C^2, what is the force magnitude between them?",
    "options": [
      "0.008 N",
      "0.032 N",
      "0.016 N",
      "16 N"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "F = kq1q2/r^2 = 9 x 10^9 x 2 x 10^-6 x 8 x 10^-6 / 9 = 0.016 N.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-049",
    "section": "Physics",
    "topic": "Electrostatics: Electric Dipole",
    "difficulty": "medium",
    "question": "At a point on the equatorial line of an electric dipole, the electric potential due to the dipole is",
    "options": [
      "maximum positive",
      "zero",
      "maximum negative",
      "infinite"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The two charges are equidistant from an equatorial point, so their scalar potentials kq/r and -kq/r cancel exactly.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-050",
    "section": "Physics",
    "topic": "Electrostatics: Capacitance and Energy",
    "difficulty": "medium",
    "question": "A 4 microF capacitor is charged to 100 V. How much energy is stored?",
    "options": [
      "0.010 J",
      "0.040 J",
      "0.200 J",
      "0.020 J"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "U = (1/2)CV^2 = 0.5 x 4 x 10^-6 x 100^2 = 0.020 J.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-051",
    "section": "Physics",
    "topic": "Electrostatics: Capacitance and Energy",
    "difficulty": "hard",
    "question": "A parallel-plate capacitor of capacitance C remains connected to a battery while a dielectric of constant K completely fills the gap. By what factor does the stored energy change?",
    "options": [
      "1/K",
      "K",
      "K^2",
      "1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "With the battery connected, V is constant. The capacitance becomes KC, and U=(1/2)CV^2, so the energy becomes K times its original value.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-052",
    "section": "Physics",
    "topic": "Current Electricity and Magnetic Effects of Electric Current: Current Electricity",
    "difficulty": "easy",
    "question": "A resistor of 12 ohm carries 2 A. What is the power dissipated?",
    "options": [
      "48 W",
      "24 W",
      "6 W",
      "96 W"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P = I^2R = 2^2 x 12 = 48 W.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-053",
    "section": "Physics",
    "topic": "Current Electricity and Magnetic Effects of Electric Current: Current Electricity",
    "difficulty": "medium",
    "question": "Three resistors 6 ohm, 3 ohm, and 2 ohm are connected in parallel. What is their equivalent resistance?",
    "options": [
      "11 ohm",
      "2 ohm",
      "0.5 ohm",
      "1 ohm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "1/Req = 1/6 + 1/3 + 1/2 = 1, so Req = 1 ohm.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-054",
    "section": "Physics",
    "topic": "Current Electricity and Magnetic Effects of Electric Current: Bridge and Potentiometer",
    "difficulty": "medium",
    "question": "A potentiometer wire has a potential gradient of 0.20 V/m. A cell balances at 3.5 m. What is its emf?",
    "options": [
      "0.70 V",
      "0.35 V",
      "1.40 V",
      "7.0 V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At balance, emf = potential gradient x balancing length = 0.20 x 3.5 = 0.70 V.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-055",
    "section": "Physics",
    "topic": "Current Electricity and Magnetic Effects of Electric Current: Moving Coil Galvanometer",
    "difficulty": "hard",
    "question": "A galvanometer of resistance 100 ohm gives full-scale deflection at 1 mA. What shunt resistance is needed to convert it into a 1 A ammeter?",
    "options": [
      "about 1.0 ohm",
      "about 0.10 ohm",
      "about 10 ohm",
      "about 100 ohm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At full scale, voltage across the galvanometer is 0.001 x 100 = 0.1 V. The shunt carries 0.999 A, so S = 0.1/0.999 = about 0.10 ohm.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-056",
    "section": "Physics",
    "topic": "Current Electricity and Magnetic Effects of Electric Current: Magnetic Effects of Current",
    "difficulty": "easy",
    "question": "A proton moves perpendicular to a uniform magnetic field. The magnetic force on it is always",
    "options": [
      "parallel to its velocity",
      "perpendicular to its velocity",
      "opposite to its velocity",
      "zero"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Magnetic force is q(v x B), which is perpendicular to both v and B.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-057",
    "section": "Physics",
    "topic": "Current Electricity and Magnetic Effects of Electric Current: Magnetic Effects of Current",
    "difficulty": "medium",
    "question": "A circular coil of radius 0.10 m carries 5 A. What is the magnetic field at its center? Use mu0 = 4pi x 10^-7 T m/A.",
    "options": [
      "2pi x 10^-5 T",
      "5pi x 10^-6 T",
      "pi x 10^-6 T",
      "pi x 10^-5 T"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For one turn, B = mu0 I/(2R) = 4pi x 10^-7 x 5/(0.20) = pi x 10^-5 T.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-058",
    "section": "Physics",
    "topic": "Electromagnetic Induction and Alternating Current: Faraday and Lenz Laws",
    "difficulty": "easy",
    "question": "A 50-turn coil experiences a flux change of 2 x 10^-4 Wb per turn in 0.10 s. What is the average induced emf magnitude?",
    "options": [
      "0.10 V",
      "0.01 V",
      "1.0 V",
      "10 V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Faraday's law gives emf = N Delta Phi/Delta t = 50 x 2 x 10^-4 /0.10 = 0.10 V.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-059",
    "section": "Physics",
    "topic": "Electromagnetic Induction and Alternating Current: Alternating Current",
    "difficulty": "medium",
    "question": "In a pure inductive AC circuit, the current",
    "options": [
      "leads the voltage by 90 degrees",
      "is in phase with voltage",
      "lags the voltage by 180 degrees",
      "lags the voltage by 90 degrees"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For an ideal inductor, voltage leads current by pi/2, so current lags voltage by 90 degrees.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-060",
    "section": "Physics",
    "topic": "Electromagnetic Induction and Alternating Current: Alternating Current",
    "difficulty": "medium",
    "question": "An AC source has rms voltage 220 V. What is its peak voltage?",
    "options": [
      "110sqrt(2) V",
      "220 V",
      "440 V",
      "220sqrt(2) V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a sinusoidal voltage, Vrms = V0/sqrt(2), so V0 = 220sqrt(2) V.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-061",
    "section": "Physics",
    "topic": "Electromagnetic Induction and Alternating Current: LCR Resonance",
    "difficulty": "hard",
    "question": "A series LCR circuit has L = 0.20 H and C = 50 microF. What is its resonance angular frequency?",
    "options": [
      "100 rad/s",
      "200sqrt(10) rad/s",
      "100sqrt(10) rad/s",
      "10sqrt(10) rad/s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "omega0 = 1/sqrt(LC) = 1/sqrt(0.20 x 50 x 10^-6) = 1/sqrt(10^-5) = 100sqrt(10) rad/s.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-062",
    "section": "Physics",
    "topic": "Optics: Reflection and Mirrors",
    "difficulty": "easy",
    "question": "A concave mirror has focal length 20 cm. An object is placed at 40 cm from the mirror. The image is formed",
    "options": [
      "40 cm in front of the mirror",
      "20 cm in front of the mirror",
      "40 cm behind the mirror",
      "at infinity"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The object is at 2f for a concave mirror, so a real image forms at 2f, 40 cm in front of the mirror.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-063",
    "section": "Physics",
    "topic": "Optics: Lenses",
    "difficulty": "medium",
    "question": "A lens has power +2.5 D. Its focal length is",
    "options": [
      "0.40 m",
      "2.5 m",
      "0.25 m",
      "4.0 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Power P = 1/f in metres. Thus f = 1/2.5 = 0.40 m.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-064",
    "section": "Physics",
    "topic": "Optics: Interference",
    "difficulty": "medium",
    "question": "Monochromatic light of wavelength 500 nm passes through two narrow slits separated by 0.25 mm. A screen is 2 m away. What is the fringe width?",
    "options": [
      "1.0 mm",
      "2.0 mm",
      "8.0 mm",
      "4.0 mm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "beta = lambda D/d = 500 x 10^-9 x 2 /(0.25 x 10^-3) = 4 x 10^-3 m = 4.0 mm.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-065",
    "section": "Physics",
    "topic": "Optics: Refraction and Total Internal Reflection",
    "difficulty": "hard",
    "question": "A glass plate of refractive index 1.5 and thickness 6 cm is viewed normally from air. What is the apparent shift of its lower surface?",
    "options": [
      "1 cm",
      "3 cm",
      "2 cm",
      "4 cm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Apparent depth = real depth/n = 6/1.5 = 4 cm. The apparent upward shift is 6 - 4 = 2 cm.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-066",
    "section": "Physics",
    "topic": "Optics: Polarization",
    "difficulty": "easy",
    "question": "At Brewster's angle for light incident from air on a medium of refractive index sqrt(3), the angle of incidence is",
    "options": [
      "30 degrees",
      "45 degrees",
      "60 degrees",
      "90 degrees"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Brewster's law gives tan ip = n = sqrt(3), hence ip = 60 degrees.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-067",
    "section": "Physics",
    "topic": "Dual Nature of Radiation, Atomic and Nuclear Physics: Dual Nature of Radiation",
    "difficulty": "easy",
    "question": "The de Broglie wavelength of a particle is inversely proportional to its",
    "options": [
      "kinetic energy",
      "charge",
      "mass only",
      "momentum"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The de Broglie relation is lambda = h/p, so wavelength is inversely proportional to momentum.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-068",
    "section": "Physics",
    "topic": "Dual Nature of Radiation, Atomic and Nuclear Physics: Dual Nature of Radiation",
    "difficulty": "medium",
    "question": "A photon has energy 3.1 eV. Using hc = 1240 eV nm, its wavelength is",
    "options": [
      "400 nm",
      "200 nm",
      "620 nm",
      "1240 nm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "lambda = hc/E = 1240/3.1 = 400 nm.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-069",
    "section": "Physics",
    "topic": "Dual Nature of Radiation, Atomic and Nuclear Physics: Nuclear Physics and Radioactivity",
    "difficulty": "medium",
    "question": "A radioactive nucleus has half-life 10 days. What fraction remains after 30 days?",
    "options": [
      "1/8",
      "1/2",
      "1/4",
      "1/16"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Thirty days is three half-lives, so the remaining fraction is (1/2)^3 = 1/8.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-070",
    "section": "Physics",
    "topic": "Dual Nature of Radiation, Atomic and Nuclear Physics: Nuclear Physics and Radioactivity",
    "difficulty": "hard",
    "question": "The mass defect of a nucleus is 0.030 u. Using 1 u c^2 = 931.5 MeV, what is its binding energy?",
    "options": [
      "2.7945 MeV",
      "31.05 MeV",
      "0.0322 MeV",
      "27.945 MeV"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Binding energy = Delta m c^2 = 0.030 x 931.5 = 27.945 MeV.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-071",
    "section": "Physics",
    "topic": "Semiconductor Devices and their Applications: Semiconductor Basics",
    "difficulty": "easy",
    "question": "In an n-type semiconductor, the majority charge carriers are",
    "options": [
      "holes",
      "electrons",
      "protons",
      "positive ions"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Donor impurities contribute extra electrons, so electrons are the majority carriers in n-type material.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-072",
    "section": "Physics",
    "topic": "Semiconductor Devices and their Applications: Semiconductor Diodes",
    "difficulty": "medium",
    "question": "A Zener diode used as a voltage regulator is normally operated in",
    "options": [
      "forward conduction below knee voltage",
      "zero bias",
      "reverse breakdown",
      "reverse bias below breakdown only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Voltage regulation uses the nearly constant Zener voltage in the reverse-breakdown region.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-073",
    "section": "Physics",
    "topic": "Semiconductor Devices and their Applications: Transistors",
    "difficulty": "medium",
    "question": "For a transistor with current gain beta = 80 and base current 25 microA, the collector current is",
    "options": [
      "0.3125 mA",
      "2.0 mA",
      "3.2 mA",
      "20 mA"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Ic = beta Ib = 80 x 25 microA = 2000 microA = 2.0 mA.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-074",
    "section": "Physics",
    "topic": "Semiconductor Devices and their Applications: Logic Gates",
    "difficulty": "hard",
    "question": "The Boolean expression Y = (A + B)(A + not B) simplifies to",
    "options": [
      "B",
      "A",
      "A + B",
      "A B"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using (X+Y)(X+Z)=X+YZ, Y = A + B(not B) = A + 0 = A.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-075",
    "section": "Physics",
    "topic": "Mechanics and Properties of Matter, including Heat and Thermodynamics: Thermal Expansion",
    "difficulty": "easy",
    "question": "A metal rod of length 2.0 m has linear expansion coefficient 1.2 x 10^-5 K^-1. For a temperature rise of 50 K, its increase in length is",
    "options": [
      "0.12 mm",
      "2.4 mm",
      "1.2 mm",
      "12 mm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Delta L = alpha L Delta T = 1.2 x 10^-5 x 2.0 x 50 = 1.2 x 10^-3 m = 1.2 mm.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-076",
    "section": "Chemistry",
    "topic": "Physical Chemistry: Atomic Structure",
    "difficulty": "easy",
    "question": "For a hydrogen atom, which quantum number determines the main energy level of an electron?",
    "options": [
      "Azimuthal quantum number l",
      "Magnetic quantum number m",
      "Principal quantum number n",
      "Spin quantum number s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "In the hydrogen atom, the main energy level is specified by the principal quantum number n.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-077",
    "section": "Chemistry",
    "topic": "Physical Chemistry: Atomic Structure",
    "difficulty": "medium",
    "question": "Which set of quantum numbers is not allowed for an electron?",
    "options": [
      "n = 2, l = 2, m = 0, ms = +1/2",
      "n = 3, l = 2, m = -2, ms = +1/2",
      "n = 2, l = 1, m = 1, ms = -1/2",
      "n = 1, l = 0, m = 0, ms = +1/2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a given n, l can take values 0 to n-1. When n=2, l can only be 0 or 1, so l=2 is impossible.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-078",
    "section": "Chemistry",
    "topic": "Physical Chemistry: Chemical Equilibrium",
    "difficulty": "medium",
    "question": "For the reaction N2(g) + 3H2(g) <-> 2NH3(g), increasing the pressure at constant temperature shifts equilibrium",
    "options": [
      "toward N2 and H2",
      "in neither direction",
      "toward NH3",
      "first toward reactants then products"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are 4 moles of gas on the reactant side and 2 on the product side. Higher pressure favors the side with fewer gas moles, so equilibrium shifts toward NH3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-079",
    "section": "Chemistry",
    "topic": "Physical Chemistry: Chemical Kinetics",
    "difficulty": "hard",
    "question": "For a first-order reaction, 87.5% of the reactant is consumed in 30 minutes. What is its half-life?",
    "options": [
      "5 min",
      "15 min",
      "20 min",
      "10 min"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "If 87.5% is consumed, 12.5% = 1/8 remains. For a first-order reaction, 1/8 = (1/2)^3, so 30 minutes equals three half-lives. Hence t1/2 = 10 min.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-080",
    "section": "Chemistry",
    "topic": "Physical Chemistry: Solutions",
    "difficulty": "medium",
    "question": "A solution contains 0.50 mol of solute and 2.00 mol of solvent. What is the mole fraction of solute?",
    "options": [
      "0.20",
      "0.25",
      "0.40",
      "0.50"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Mole fraction = 0.50/(0.50+2.00) = 0.50/2.50 = 0.20.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-081",
    "section": "Chemistry",
    "topic": "Physical Chemistry: Chemical Bonding and Hybridization",
    "difficulty": "easy",
    "question": "Which hybridization corresponds to a tetrahedral arrangement of four equivalent bonding orbitals?",
    "options": [
      "sp3",
      "sp",
      "sp2",
      "dsp2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Four equivalent hybrid orbitals directed tetrahedrally arise from sp3 hybridization.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-082",
    "section": "Chemistry",
    "topic": "Inorganic and Material Chemistry: s-block Elements",
    "difficulty": "easy",
    "question": "Which alkali metal has the largest atomic radius among Li, Na, K, and Rb?",
    "options": [
      "Li",
      "Na",
      "Rb",
      "K"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Atomic radius increases down Group 1 because additional electron shells are added, so Rb is largest.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-083",
    "section": "Chemistry",
    "topic": "Inorganic and Material Chemistry: d-block Elements",
    "difficulty": "medium",
    "question": "What is the oxidation state of chromium in K2Cr2O7?",
    "options": [
      "+3",
      "+4",
      "+6",
      "+7"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let chromium be x. Charge balance gives 2(+1)+2x+7(-2)=0, so 2x=12 and x=+6.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-084",
    "section": "Chemistry",
    "topic": "Inorganic and Material Chemistry: Coordination Chemistry",
    "difficulty": "hard",
    "question": "In the complex [Co(NH3)5Cl]Cl2, what is the oxidation state of cobalt?",
    "options": [
      "+1",
      "+2",
      "+4",
      "+3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The complex ion has charge +2 because two chloride counterions are present. NH3 is neutral and coordinated Cl is -1, so x - 1 = +2, giving x = +3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-085",
    "section": "Chemistry",
    "topic": "Inorganic and Material Chemistry: Solid State Chemistry",
    "difficulty": "medium",
    "question": "Which stoichiometric point defect is characterized by equal numbers of cation and anion vacancies and therefore decreases the crystal density?",
    "options": [
      "Schottky defect",
      "Frenkel defect",
      "Metal excess defect due to anionic vacancy with trapped electron",
      "Interstitial impurity only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A Schottky defect consists of equal numbers of cation and anion vacancies. Ions are missing from the crystal while the lattice volume changes little, so the density decreases. A Frenkel defect only relocates an ion, and the metal-excess defect listed is nonstoichiometric.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-086",
    "section": "Chemistry",
    "topic": "Inorganic and Material Chemistry: Surface Chemistry",
    "difficulty": "easy",
    "question": "Physisorption is generally favored by",
    "options": [
      "high temperature only",
      "very high activation energy",
      "formation of strong covalent bonds",
      "low temperature"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Physisorption is exothermic and involves weak van der Waals forces, so lower temperature favors adsorption.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-087",
    "section": "Chemistry",
    "topic": "Analytical Chemistry: Ionic Equilibria and pH",
    "difficulty": "easy",
    "question": "At 25 C, a neutral aqueous solution has pH",
    "options": [
      "0",
      "7",
      "1",
      "14"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At 25 C, [H+] = [OH-] = 1 x 10^-7 M in pure neutral water, so pH = 7.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-088",
    "section": "Chemistry",
    "topic": "Analytical Chemistry: Ionic Equilibria and pH",
    "difficulty": "medium",
    "question": "A solution has [H+] = 2.0 x 10^-3 M. Its pH is approximately",
    "options": [
      "1.70",
      "3.00",
      "2.70",
      "11.30"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "pH = -log(2.0 x 10^-3) = 3 - log 2 = 3 - 0.301 = 2.699, about 2.70.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-089",
    "section": "Chemistry",
    "topic": "Analytical Chemistry: Electrochemistry",
    "difficulty": "medium",
    "question": "For a galvanic cell, a positive standard cell potential implies that the standard Gibbs energy change is",
    "options": [
      "negative",
      "positive",
      "zero",
      "undefined"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Delta G0 = -nFE0. Therefore E0 > 0 gives Delta G0 < 0.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-090",
    "section": "Chemistry",
    "topic": "Analytical Chemistry: Electrochemistry",
    "difficulty": "hard",
    "question": "At 298 K, a cell reaction transfers 2 electrons and has E0 = 0.30 V. What is Delta G0? Use F = 96500 C mol^-1.",
    "options": [
      "+57.9 kJ mol^-1",
      "-57.9 kJ mol^-1",
      "-28.95 kJ mol^-1",
      "+28.95 kJ mol^-1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Delta G0 = -nFE0 = -2 x 96500 x 0.30 = -57900 J mol^-1 = -57.9 kJ mol^-1.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-091",
    "section": "Chemistry",
    "topic": "Analytical Chemistry: Electrolytic Conductance",
    "difficulty": "medium",
    "question": "According to Kohlrausch's law, the limiting molar conductivity of an electrolyte is",
    "options": [
      "the sum of the independent limiting ionic contributions",
      "proportional only to cation charge",
      "independent of the ions present",
      "equal to its conductivity at any concentration"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Kohlrausch's law states that at infinite dilution, each ion contributes independently to the total molar conductivity.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-092",
    "section": "Chemistry",
    "topic": "Analytical Chemistry: Environmental Chemistry",
    "difficulty": "easy",
    "question": "Which gas is a major contributor to acid rain when oxidized in the atmosphere?",
    "options": [
      "CH4",
      "N2",
      "SO2",
      "He"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Sulfur dioxide is oxidized to sulfuric acid in the atmosphere and is a major acid-rain precursor.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-093",
    "section": "Chemistry",
    "topic": "Basic Principles of Organic Chemistry: Organic Nomenclature",
    "difficulty": "easy",
    "question": "The IUPAC name of CH3CH2CH2OH is",
    "options": [
      "propan-1-ol",
      "propan-2-ol",
      "propanal",
      "propane"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The longest chain has three carbons and the hydroxyl group is on carbon 1, so the name is propan-1-ol.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-094",
    "section": "Chemistry",
    "topic": "Basic Principles of Organic Chemistry: Reaction Intermediates and Resonance",
    "difficulty": "medium",
    "question": "Which intermediate is most stabilized by resonance?",
    "options": [
      "methyl carbocation",
      "benzyl carbocation",
      "ethyl carbocation",
      "tert-butyl carbocation"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The benzyl carbocation delocalizes the positive charge over the aromatic ring through resonance, giving strong stabilization.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-095",
    "section": "Chemistry",
    "topic": "Basic Principles of Organic Chemistry: Bond Cleavage and Reaction Intermediates",
    "difficulty": "medium",
    "question": "Homolytic cleavage of a covalent bond produces",
    "options": [
      "a cation and an anion",
      "only carbanions",
      "free radicals",
      "only carbocations"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "In homolysis, each bonded atom takes one electron from the bond, producing two radicals.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-096",
    "section": "Chemistry",
    "topic": "Basic Principles of Organic Chemistry: Stereoisomerism",
    "difficulty": "hard",
    "question": "Considering only E/Z geometrical isomerism, how many distinct geometrical isomers does 2,4-hexadiene have?",
    "options": [
      "3",
      "2",
      "4",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Each double bond can be E or Z, giving E,E; Z,Z; E,Z; and Z,E descriptions. Because 2,4-hexadiene is symmetric, E,Z and Z,E represent the same molecule. Thus there are 3 distinct geometrical isomers.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-097",
    "section": "Chemistry",
    "topic": "Basic Principles of Organic Chemistry: Electronic Effects",
    "difficulty": "medium",
    "question": "The -NO2 group attached to a benzene ring mainly shows which electronic effect through sigma bonds?",
    "options": [
      "+I effect",
      "-I effect",
      "+H effect only",
      "no inductive effect"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The strongly electronegative nitro group withdraws electron density through sigma bonds, so it shows a -I effect.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-098",
    "section": "Chemistry",
    "topic": "Properties and Chemistry of Functionalized Organic Compounds: Carbonyl Compounds",
    "difficulty": "easy",
    "question": "Which reagent distinguishes an aldehyde from a simple ketone by producing a silver mirror?",
    "options": [
      "Lucas reagent",
      "Bromine water",
      "Sodium metal",
      "Tollens reagent"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Aldehydes reduce Tollens reagent to metallic silver, while ordinary ketones do not.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-099",
    "section": "Chemistry",
    "topic": "Properties and Chemistry of Functionalized Organic Compounds: Alcohols and Phenols",
    "difficulty": "medium",
    "question": "Oxidation of a primary alcohol under controlled conditions first gives",
    "options": [
      "a ketone",
      "an ether",
      "an ester",
      "an aldehyde"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Primary alcohols are initially oxidized to aldehydes; stronger or prolonged oxidation can give carboxylic acids.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-100",
    "section": "Chemistry",
    "topic": "Properties and Chemistry of Functionalized Organic Compounds: Carbonyl Compounds",
    "difficulty": "medium",
    "question": "Benzaldehyde undergoes Cannizzaro reaction because it",
    "options": [
      "contains a methyl group",
      "is a ketone",
      "has no alpha hydrogen",
      "contains two carbonyl groups"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Aldehydes lacking alpha hydrogen undergo Cannizzaro disproportionation; benzaldehyde has no alpha hydrogen.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-101",
    "section": "Chemistry",
    "topic": "Properties and Chemistry of Functionalized Organic Compounds: Carbonyl Compounds",
    "difficulty": "hard",
    "question": "Acetone reacts with CH3MgBr followed by hydrolysis. What is the major organic product?",
    "options": [
      "2-methylpropan-2-ol",
      "propan-2-ol",
      "butan-2-ol",
      "2-methylpropanal"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "CH3MgBr adds a methyl group to acetone's carbonyl carbon. Hydrolysis gives a tertiary alcohol bearing three methyl groups: 2-methylpropan-2-ol.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-102",
    "section": "Chemistry",
    "topic": "Properties and Chemistry of Functionalized Organic Compounds: Alcohols and Phenols",
    "difficulty": "medium",
    "question": "Heating ethanol with concentrated H2SO4 at about 443 K mainly produces",
    "options": [
      "ethanal",
      "ethene",
      "diethyl ether",
      "ethanoic acid"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At about 443 K, concentrated H2SO4 dehydrates ethanol intramolecularly to ethene.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-103",
    "section": "Chemistry",
    "topic": "Properties and Chemistry of Functionalized Organic Compounds: Carboxylic Acids and Derivatives",
    "difficulty": "easy",
    "question": "The functional group in methyl acetate is",
    "options": [
      "aldehyde",
      "ester",
      "ketone",
      "amide"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Methyl acetate has the linkage R-COO-R', which is the ester functional group.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-104",
    "section": "Chemistry",
    "topic": "Organic Nitrogen Compounds: Amines and Nitro Compounds",
    "difficulty": "easy",
    "question": "Aniline is classified as",
    "options": [
      "an aliphatic primary amine",
      "a secondary amine",
      "an amide",
      "an aromatic primary amine"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Aniline is C6H5NH2, where the amino group is attached directly to an aromatic ring and nitrogen bears one carbon substituent, so it is an aromatic primary amine.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-105",
    "section": "Chemistry",
    "topic": "Organic Nitrogen Compounds: Diazonium Salts",
    "difficulty": "medium",
    "question": "When a primary aliphatic amine reacts with nitrous acid at room temperature, the unstable diazonium intermediate generally decomposes to give",
    "options": [
      "a nitrile",
      "an alcohol with evolution of N2",
      "an amide",
      "an alkene only"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Primary aliphatic amines form unstable aliphatic diazonium salts, which decompose in water to alcohols while releasing nitrogen gas.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-106",
    "section": "Chemistry",
    "topic": "Organic Nitrogen Compounds: Amines and Nitro Compounds",
    "difficulty": "hard",
    "question": "Which order correctly compares basicity in aqueous solution for aniline, ammonia, and methylamine?",
    "options": [
      "aniline > ammonia > methylamine",
      "ammonia > methylamine > aniline",
      "methylamine > ammonia > aniline",
      "methylamine > aniline > ammonia"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The methyl group donates electron density, making methylamine more basic than ammonia. In aniline, the nitrogen lone pair is delocalized into the benzene ring, reducing basicity.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-107",
    "section": "Chemistry",
    "topic": "Organic Nitrogen Compounds: Nitriles",
    "difficulty": "medium",
    "question": "Hydrolysis of an alkyl nitrile R-CN under acidic conditions ultimately gives",
    "options": [
      "R-NH2",
      "R-CHO",
      "R-COOH",
      "R-OH"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Acidic hydrolysis of a nitrile proceeds through amide intermediates to the corresponding carboxylic acid.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-108",
    "section": "Chemistry",
    "topic": "Biomolecules and Polymers: Amino Acids and Proteins",
    "difficulty": "easy",
    "question": "Which biomolecule is built from amino acid monomers?",
    "options": [
      "protein",
      "starch",
      "DNA only",
      "triglyceride"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Proteins are polymers of amino acids linked by peptide bonds.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-109",
    "section": "Chemistry",
    "topic": "Biomolecules and Polymers: Carbohydrates",
    "difficulty": "medium",
    "question": "The glycosidic linkage in sucrose joins",
    "options": [
      "two glucose C1 atoms",
      "glucose C6 to fructose C6",
      "the anomeric carbon of glucose to the anomeric carbon of fructose",
      "fructose C2 to a non-anomeric carbon only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Sucrose is alpha-D-glucopyranosyl-(1->2)-beta-D-fructofuranoside, so both anomeric carbons participate in the linkage.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-110",
    "section": "Chemistry",
    "topic": "Biomolecules and Polymers: Polymers",
    "difficulty": "hard",
    "question": "An addition copolymer chain contains 60 ethene-derived repeat units and 40 propene-derived repeat units. Ignoring end-group masses, what is its approximate molar mass? Use C = 12 and H = 1.",
    "options": [
      "2800 g mol^-1",
      "3360 g mol^-1",
      "4200 g mol^-1",
      "6720 g mol^-1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "An ethene repeat unit C2H4 has mass 28, and a propene repeat unit C3H6 has mass 42. The chain mass is 60(28) + 40(42) = 1680 + 1680 = 3360 g mol^-1.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-111",
    "section": "English",
    "topic": "English grammar",
    "difficulty": "easy",
    "question": "Choose the grammatically correct sentence.",
    "options": [
      "Neither of the answers are correct.",
      "Neither of the answer is correct.",
      "Neither answers are correct.",
      "Neither of the answers is correct."
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The subject 'neither' is singular, so it takes the singular verb 'is'.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 English syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-112",
    "section": "English",
    "topic": "Pronunciation",
    "difficulty": "easy",
    "question": "Which word has a different vowel sound in the underlined letter group from the other three? Consider the vowel sound in the letters 'ea'.",
    "options": [
      "great",
      "seat",
      "clean",
      "mean"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "In 'seat', 'clean', and 'mean', 'ea' is pronounced /i:/. In 'great', 'ea' is pronounced /eɪ/, so it differs.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 English syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-113",
    "section": "English",
    "topic": "English grammar",
    "difficulty": "medium",
    "question": "Choose the option that best completes the sentence: 'By the time the train arrived, we ____ at the station for nearly an hour.'",
    "options": [
      "waited",
      "have waited",
      "had been waiting",
      "were waiting"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The waiting began before another past event and continued up to it, so the past perfect continuous 'had been waiting' is appropriate.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 English syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-114",
    "section": "English",
    "topic": "Comprehension of a short passage or lines of poems",
    "difficulty": "medium",
    "question": "Read the original passage: 'Mira began keeping a small notebook beside her telescope. At first she wrote only dates and cloud conditions. Soon she added sketches, questions, and predictions. Months later, the notebook showed not just what she had seen, but how her ideas had changed.' What is the main idea?",
    "options": [
      "Telescopes are useful only in clear weather.",
      "Systematic records can reveal the development of one's thinking.",
      "Predictions are more valuable than observations.",
      "Sketches should replace written notes."
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The passage emphasizes that Mira's notebook evolved from simple records into evidence of how her ideas developed over time.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 English syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-115",
    "section": "English",
    "topic": "Comprehension of a short passage or lines of poems",
    "difficulty": "hard",
    "question": "Read these original lines: 'The lamp in the hallway burns after all rooms sleep; / not to chase the dark away, / but to leave one small certainty for whoever wakes.' What does the lamp most strongly symbolize?",
    "options": [
      "reassurance in uncertainty",
      "wastefulness",
      "fear of daylight",
      "a desire for attention"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The lamp remains as 'one small certainty' for someone who wakes, so it symbolizes reassurance or dependable comfort amid darkness and uncertainty.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 English syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-116",
    "section": "Aptitude",
    "topic": "Data Interpretation",
    "difficulty": "easy",
    "question": "A shop sold 120 notebooks on Monday, 150 on Tuesday, and 130 on Wednesday. What was the average number sold per day over these three days?",
    "options": [
      "120",
      "about 133.3",
      "130",
      "140"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Total sales = 120 + 150 + 130 = 400. Average = 400/3 = about 133.3 notebooks per day.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-117",
    "section": "Aptitude",
    "topic": "Data Interpretation",
    "difficulty": "medium",
    "question": "A table lists production units: Plant A: 80 in January and 120 in February; Plant B: 100 in January and 110 in February. By what percentage did the combined production increase from January to February?",
    "options": [
      "10%",
      "16.7%",
      "21%",
      "about 27.8%"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "January total = 80 + 100 = 180. February total = 120 + 110 = 230. The increase is 50, so percentage increase = 50/180 x 100 = about 27.8%.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-118",
    "section": "Aptitude",
    "topic": "Data Sufficiency",
    "difficulty": "easy",
    "question": "Question: Is integer n even? Statement 1: n is divisible by 4. Statement 2: n is divisible by 6. Which is sufficient?",
    "options": [
      "Statement 1 alone is sufficient, but Statement 2 alone is not",
      "Statement 2 alone is sufficient, but Statement 1 alone is not",
      "Either statement alone is sufficient",
      "Both statements together are necessary"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Any integer divisible by 4 is even, and any integer divisible by 6 is also even. Therefore either statement alone is sufficient.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-119",
    "section": "Aptitude",
    "topic": "Data Sufficiency",
    "difficulty": "medium",
    "question": "Question: What is x? Statement 1: x + y = 10. Statement 2: x - y = 4. Which is sufficient?",
    "options": [
      "Statement 1 alone is sufficient",
      "Statement 2 alone is sufficient",
      "Either statement alone is sufficient",
      "Both statements together are sufficient, but neither alone is sufficient"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Each statement alone contains two unknowns. Together, adding the equations gives 2x=14, so x=7. Thus both together are sufficient.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-120",
    "section": "Aptitude",
    "topic": "Syllogism",
    "difficulty": "easy",
    "question": "Statements: Some gardeners are cyclists. All cyclists are commuters. Which conclusion definitely follows?",
    "options": [
      "Some gardeners are commuters",
      "All gardeners are commuters",
      "No gardener is a commuter",
      "All commuters are cyclists"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The gardeners who are cyclists must also be commuters because every cyclist is a commuter. Therefore some gardeners are commuters.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-121",
    "section": "Aptitude",
    "topic": "Syllogism",
    "difficulty": "hard",
    "question": "Statements: All A are B. No B are C. Some D are A. Which conclusions follow? I. Some D are not C. II. No A are C.",
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
    "explanation": "Since all A are B and no B are C, no A can be C, so II follows. Some D are A, and every A is not C, so those D are not C; hence I also follows.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-122",
    "section": "Aptitude",
    "topic": "Number Series, Coding and Decoding",
    "difficulty": "easy",
    "question": "Find the next term: 3, 7, 15, 31, 63, ...",
    "options": [
      "95",
      "126",
      "127",
      "129"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Each term is twice the previous term plus 1. Thus the next term is 2 x 63 + 1 = 127.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-123",
    "section": "Aptitude",
    "topic": "Number Series, Coding and Decoding",
    "difficulty": "medium",
    "question": "In a code, each letter is replaced by the next letter of the alphabet, with Z replaced by A. How is 'VIT' coded?",
    "options": [
      "WHU",
      "WJU",
      "WJT",
      "UHS"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "V becomes W, I becomes J, and T becomes U, so the code is WJU.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-124",
    "section": "Aptitude",
    "topic": "Clocks, Calendars and Directions",
    "difficulty": "easy",
    "question": "A person faces north, turns right, then turns right again. Which direction is the person facing?",
    "options": [
      "east",
      "west",
      "south",
      "north"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "North -> east after one right turn, then east -> south after the second.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-full-01-125",
    "section": "Aptitude",
    "topic": "Clocks, Calendars and Directions",
    "difficulty": "easy",
    "question": "If 1 January is a Monday, what day of the week is 8 January of the same year?",
    "options": [
      "Tuesday",
      "Sunday",
      "Monday",
      "Wednesday"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Eight January is exactly 7 days after 1 January, so it falls on the same weekday, Monday.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  }
];
