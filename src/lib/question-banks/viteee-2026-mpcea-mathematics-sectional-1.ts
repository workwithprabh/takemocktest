import type { Question } from '../questions';

export const VITEEE_2026_MPCEA_MATHEMATICS_SECTIONAL_1: Question[] = [
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-001",
    "section": "Mathematics",
    "topic": "Matrices and their Applications: Inverse and Matrix Algebra",
    "difficulty": "easy",
    "question": "If A = [[1,0],[0,3]], what is A^-1?",
    "options": [
      "[[1,0],[0,1/3]]",
      "[[1,0],[0,3]]",
      "[[0,1],[1/3,0]]",
      "[[3,0],[0,1]]"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The inverse of a diagonal matrix is obtained by replacing each nonzero diagonal entry by its reciprocal.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-002",
    "section": "Mathematics",
    "topic": "Matrices and their Applications: Determinants",
    "difficulty": "medium",
    "question": "If det(A) = -2 for a 3 x 3 matrix A, what is det(3A)?",
    "options": [
      "-6",
      "18",
      "54",
      "-54"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a 3 x 3 matrix, det(kA)=k^3 det(A). Thus det(3A)=27(-2)=-54.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-003",
    "section": "Mathematics",
    "topic": "Matrices and their Applications: Simultaneous Linear Equations",
    "difficulty": "medium",
    "question": "The equations x + y + z = 3, x - y + z = 1, and 2x + 2z = 4 have",
    "options": [
      "a unique solution",
      "no solution",
      "infinitely many solutions",
      "exactly two solutions"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Adding the first two equations gives 2x+2z=4, which is exactly the third equation. The first two are independent, so one free variable remains and there are infinitely many solutions.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-004",
    "section": "Mathematics",
    "topic": "Matrices and their Applications: Inverse and Matrix Algebra",
    "difficulty": "hard",
    "question": "A square matrix A satisfies A^2 - 5A + 6I = 0 and is invertible. Which expression equals A^-1?",
    "options": [
      "(A - 5I)/6",
      "(5I - A)/6",
      "(6I - A)/5",
      "5I - A"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Multiply A^2 - 5A + 6I = 0 on the right by A^-1. This gives A - 5I + 6A^-1 = 0, so 6A^-1 = 5I - A and A^-1 = (5I - A)/6.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-005",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Inverse Trigonometric Functions",
    "difficulty": "easy",
    "question": "What is sin(2 tan^-1(1/2))?",
    "options": [
      "3/5",
      "1/2",
      "4/5",
      "2/5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "If tan theta=1/2, then sin 2theta = 2tan theta/(1+tan^2 theta)=1/(1+1/4)=4/5.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-006",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Trigonometric Identities",
    "difficulty": "medium",
    "question": "If cos A = 5/13 and A is acute, what is tan(A/2)?",
    "options": [
      "3/2",
      "5/12",
      "12/5",
      "2/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "sin A=12/13. Then tan(A/2)=sin A/(1+cos A)=(12/13)/(18/13)=2/3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-007",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Complex Numbers",
    "difficulty": "medium",
    "question": "For z = -1 + sqrt(3)i, the principal argument of z is",
    "options": [
      "pi/3",
      "-pi/3",
      "-2pi/3",
      "2pi/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The point lies in quadrant II with reference angle pi/3, so its principal argument is 2pi/3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-008",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Complex Numbers",
    "difficulty": "hard",
    "question": "If z + 1/z = 2 for nonzero complex z, then z equals",
    "options": [
      "-1",
      "1",
      "i",
      "-i"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Multiplying by z gives z^2 - 2z +1=0, so (z-1)^2=0 and z=1.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-009",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Complex Numbers",
    "difficulty": "medium",
    "question": "Using De Moivre's theorem, (cos 20 degrees + i sin 20 degrees)^9 equals",
    "options": [
      "1",
      "-1",
      "i",
      "-i"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The power is cos 180 degrees + i sin 180 degrees = -1.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-010",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Straight Lines",
    "difficulty": "easy",
    "question": "The line through (2,3) parallel to 3x - 4y + 7 = 0 is",
    "options": [
      "3x - 4y + 6 = 0",
      "4x - 3y + 1 = 0",
      "3x + 4y - 18 = 0",
      "3x - 4y - 6 = 0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A parallel line has form 3x-4y+c=0. Substituting (2,3) gives 6-12+c=0, so c=6.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-011",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Coordinate Geometry",
    "difficulty": "medium",
    "question": "What is the equation of the tangent to y^2 = 8x at parameter t = 2?",
    "options": [
      "y = 2x + 8",
      "2x = y + 8",
      "2y = x + 8",
      "y = x + 4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For y^2=4ax with a=2, the parametric tangent is ty=x+at^2. With t=2, 2y=x+8.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-012",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Ellipse",
    "difficulty": "medium",
    "question": "For the ellipse x^2/16 + y^2/7 = 1, the distance between its two foci is",
    "options": [
      "3",
      "6",
      "8",
      "2sqrt(7)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Here c^2=a^2-b^2=16-7=9, so c=3. The distance between foci is 2c=6.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-013",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Circle",
    "difficulty": "easy",
    "question": "The pair of tangents from point (3,4) to the circle x^2 + y^2 = 9 have lengths",
    "options": [
      "3 each",
      "4 each",
      "5 each",
      "sqrt(7) each"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The distance from the center to the point is 5 and radius is 3. Tangent length = sqrt(5^2-3^2)=sqrt(16)=4.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-014",
    "section": "Mathematics",
    "topic": "Vector Algebra: Vector Operations",
    "difficulty": "easy",
    "question": "If a = i + j and b = i - j, then |a x b| equals",
    "options": [
      "2",
      "0",
      "1",
      "sqrt(2)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a x b = -2k, so its magnitude is 2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-015",
    "section": "Mathematics",
    "topic": "Vector Algebra: Scalar Product",
    "difficulty": "medium",
    "question": "The scalar projection of a = 3i + 4j on b = i is",
    "options": [
      "4",
      "5",
      "3",
      "3/5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Scalar projection of a on b is (a dot b)/|b| = 3/1 = 3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-016",
    "section": "Mathematics",
    "topic": "Vector Algebra: Scalar Triple Product",
    "difficulty": "hard",
    "question": "The volume of the parallelepiped formed by a=(1,0,1), b=(0,2,1), c=(1,1,0) is",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Volume = |a dot (b x c)|. b x c = (-1,1,-2), and a dot(b x c)=-3, so volume=3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-017",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Three Dimensions: Planes in Three Dimensions",
    "difficulty": "easy",
    "question": "The plane passing through (1,2,3) with normal vector (2,-1,1) is",
    "options": [
      "2x - y + z - 3 = 0",
      "2x - y + z + 3 = 0",
      "x - 2y + 3z - 6 = 0",
      "2x + y - z - 1 = 0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Use 2(x-1) - (y-2) + (z-3)=0, which simplifies to 2x-y+z-3=0.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-018",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Three Dimensions: Line and Plane",
    "difficulty": "medium",
    "question": "At what point does the line x=1+t, y=2-t, z=3+2t meet the plane x+y+z=8?",
    "options": [
      "(2,1,5)",
      "(1,2,3)",
      "(3,0,7)",
      "(0,3,1)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Substitution gives (1+t)+(2-t)+(3+2t)=6+2t=8, so t=1. The point is (2,1,5).",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-019",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Three Dimensions: Planes in Three Dimensions",
    "difficulty": "hard",
    "question": "Find the distance from point (1,2,3) to the plane 2x - y + 2z - 9 = 0.",
    "options": [
      "1/3",
      "2",
      "1",
      "3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Distance = |2(1)-2+2(3)-9|/sqrt(4+1+4)=| -3 |/3=1.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-020",
    "section": "Mathematics",
    "topic": "Differential Calculus: Differentiation",
    "difficulty": "easy",
    "question": "For f(x)=|x|, which statement is true at x=0?",
    "options": [
      "f is differentiable but not continuous",
      "f is neither continuous nor differentiable",
      "f is both continuous and differentiable",
      "f is continuous but not differentiable"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "|x| is continuous at 0, but its left derivative is -1 and right derivative is +1, so it is not differentiable.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-021",
    "section": "Mathematics",
    "topic": "Differential Calculus: Differentiation",
    "difficulty": "medium",
    "question": "If y = x^x for x>0, then dy/dx is",
    "options": [
      "x^x(ln x + 1)",
      "x^(x-1)",
      "x^x ln x",
      "x^(x+1)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Taking logs, ln y=x ln x. Differentiating gives y'/y=ln x+1, hence y'=x^x(ln x+1).",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-022",
    "section": "Mathematics",
    "topic": "Differential Calculus: Applications of Derivatives",
    "difficulty": "medium",
    "question": "For f(x)=x^4 - 4x^2, the stationary point x=0 is",
    "options": [
      "a local minimum",
      "a local maximum",
      "a point of inflexion only",
      "not a stationary point"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f'(x)=4x(x^2-2), so x=0 is stationary. f''(0)=-8<0, so it is a local maximum.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-023",
    "section": "Mathematics",
    "topic": "Differential Calculus: Applications of Derivatives",
    "difficulty": "easy",
    "question": "Find the point of inflexion of y=x^3-3x^2+2x.",
    "options": [
      "(0,0)",
      "(2,0)",
      "(1,1)",
      "(1,0)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "y''=6x-6, so y''=0 at x=1 and changes sign there. y(1)=1-3+2=0, giving (1,0).",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-024",
    "section": "Mathematics",
    "topic": "Differential Calculus: Series and Approximation",
    "difficulty": "medium",
    "question": "Using Maclaurin expansion up to the x^2 term, e^0.1 is approximately",
    "options": [
      "1.10",
      "1.115",
      "1.005",
      "1.105"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "e^x is approximately 1+x+x^2/2. At x=0.1, this is 1+0.1+0.005=1.105.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-025",
    "section": "Mathematics",
    "topic": "Integral Calculus and its Applications: Definite Integrals",
    "difficulty": "easy",
    "question": "The value of integral_0^1 (2x+1) dx is",
    "options": [
      "1",
      "3/2",
      "2",
      "5/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The antiderivative is x^2+x. From 0 to 1 it gives 1+1=2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-026",
    "section": "Mathematics",
    "topic": "Integral Calculus and its Applications: Definite Integrals",
    "difficulty": "medium",
    "question": "Let J = integral_0^1 x/(1+x^2) dx. Then J equals",
    "options": [
      "(1/2)ln 2",
      "ln 2",
      "1/2",
      "1-ln 2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let u=1+x^2, du=2x dx. The integral is (1/2)ln(1+x^2) from 0 to 1 = (1/2)ln2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-027",
    "section": "Mathematics",
    "topic": "Integral Calculus and its Applications: Area of Bounded Regions",
    "difficulty": "medium",
    "question": "The area enclosed by y=4-x^2 and the x-axis is",
    "options": [
      "16/3",
      "8",
      "16",
      "32/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The curve meets the x-axis at x=+-2. Area = integral_-2^2 (4-x^2)dx = 2[4x-x^3/3]_0^2 = 32/3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-028",
    "section": "Mathematics",
    "topic": "Integral Calculus and its Applications: Definite Integrals",
    "difficulty": "hard",
    "question": "The integral integral_0^(pi/2) sin^3 x dx evaluates to",
    "options": [
      "1/3",
      "1/2",
      "3/4",
      "2/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Write sin^3 x = sin x(1-cos^2 x). Let u=cos x. The integral becomes integral_0^1 (1-u^2)du = 1-1/3=2/3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-029",
    "section": "Mathematics",
    "topic": "Differential Equations: Order and Degree",
    "difficulty": "easy",
    "question": "The degree of (d^2y/dx^2)^3 + dy/dx = 0 is",
    "options": [
      "3",
      "1",
      "2",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The highest-order derivative is second order, and its highest power is 3, so the degree is 3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-030",
    "section": "Mathematics",
    "topic": "Differential Equations: Separable Differential Equations",
    "difficulty": "medium",
    "question": "Solve dy/dx = y/x for x>0.",
    "options": [
      "y = C/x",
      "y = Ce^x",
      "y = Cx",
      "y = Cx^2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Separate variables: dy/y = dx/x. Integrating gives ln y = ln x + constant, hence y=Cx.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-031",
    "section": "Mathematics",
    "topic": "Differential Equations: First-order Linear Differential Equations",
    "difficulty": "hard",
    "question": "Solve dy/dx - 2y = e^(2x) with y(0)=0. What is y?",
    "options": [
      "(e^(2x)-1)/2",
      "e^(2x)x^2",
      "x e^(2x)",
      "x e^x"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The integrating factor is e^(-2x). Then d(y e^(-2x))/dx = 1. Thus y e^(-2x)=x+C. Since y(0)=0, C=0, so y=x e^(2x).",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-032",
    "section": "Mathematics",
    "topic": "Probability and Distributions: Probability",
    "difficulty": "easy",
    "question": "If P(A)=0.6, P(B)=0.5, and A and B are independent, what is P(A intersection B)?",
    "options": [
      "0.10",
      "0.30",
      "0.55",
      "1.10"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For independent events, P(A intersection B)=P(A)P(B)=0.6 x 0.5=0.30.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-033",
    "section": "Mathematics",
    "topic": "Probability and Distributions: Poisson Distribution",
    "difficulty": "medium",
    "question": "A Poisson random variable has mean 4. What is its variance?",
    "options": [
      "2",
      "4",
      "8",
      "16"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a Poisson distribution, mean and variance are both equal to lambda, so the variance is 4.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-034",
    "section": "Mathematics",
    "topic": "Probability and Distributions: Conditional Probability and Bayes Theorem",
    "difficulty": "hard",
    "question": "A box contains 3 red and 2 blue balls. Two balls are drawn without replacement. Given that at least one drawn ball is red, what is the probability that both are red?",
    "options": [
      "1/3",
      "3/10",
      "1/2",
      "2/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P(both red)=C(3,2)/C(5,2)=3/10. P(at least one red)=1-C(2,2)/C(5,2)=9/10. Conditional probability=(3/10)/(9/10)=1/3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-035",
    "section": "Mathematics",
    "topic": "Discrete Mathematics: Sets and Relations",
    "difficulty": "easy",
    "question": "How many subsets does a set with 5 elements have?",
    "options": [
      "5",
      "32",
      "10",
      "25"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A set with n elements has 2^n subsets, so 2^5=32.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-036",
    "section": "Mathematics",
    "topic": "Discrete Mathematics: Functions",
    "difficulty": "medium",
    "question": "How many onto functions are there from a 3-element set to a 2-element set?",
    "options": [
      "6",
      "4",
      "8",
      "9"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are 2^3=8 functions in total. Two are constant and not onto. Hence 8-2=6 onto functions.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-037",
    "section": "Mathematics",
    "topic": "Discrete Mathematics: Binomial Theorem",
    "difficulty": "medium",
    "question": "The coefficient of x^3 in (1+x)^6 is",
    "options": [
      "15",
      "18",
      "30",
      "20"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By the binomial theorem, the coefficient is C(6,3)=20.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-038",
    "section": "Mathematics",
    "topic": "Discrete Mathematics: Sequences and Series",
    "difficulty": "medium",
    "question": "If the first term of an AP is 7 and common difference is 3, what is its 20th term?",
    "options": [
      "60",
      "61",
      "64",
      "67"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a20 = a + 19d = 7 + 57 = 64.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-039",
    "section": "Mathematics",
    "topic": "Discrete Mathematics: Counting Techniques",
    "difficulty": "hard",
    "question": "How many 5-digit numbers can be formed using digits 1,2,3,4,5 without repetition and divisible by 5?",
    "options": [
      "12",
      "24",
      "48",
      "120"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Divisibility by 5 requires the last digit to be 5. The remaining four digits can be arranged in 4! = 24 ways.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-sectional-01-040",
    "section": "Mathematics",
    "topic": "Discrete Mathematics: Sets and Relations",
    "difficulty": "easy",
    "question": "On the set {1,2,3}, the relation R = {(1,1),(2,2),(3,3)} is",
    "options": [
      "the universal relation",
      "an empty relation",
      "not reflexive",
      "the identity relation"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The relation contains exactly (a,a) for every element a of the set, so it is the identity relation.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  }
];
