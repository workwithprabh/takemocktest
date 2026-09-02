import type { Question } from '../questions';

export const WB_JELET_2026_MATHEMATICS_1: Question[] = [
  {
    "id": "wb-jelet-2026-ma-001",
    "section": "Mathematics",
    "topic": "Matrices up to order 3",
    "difficulty": "medium",
    "question": "For A = [[1, 2], [3, 4]], what is tr(A^2)?",
    "options": [
      "27",
      "29",
      "25",
      "31"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "A^2 = [[7,10],[15,22]], so tr(A^2)=7+22=29.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-002",
    "section": "Mathematics",
    "topic": "Matrices up to order 3",
    "difficulty": "medium",
    "question": "Let A = [[3, -2], [7, 5]] and B = [[4, 1], [-3, 6]]. What is the (1,2) entry of the product AB?",
    "options": [
      "9",
      "-15",
      "15",
      "-9"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The (1,2) entry of AB is the dot product of row 1 of A with column 2 of B: 3(1)+(-2)(6)=3-12=-9.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-003",
    "section": "Mathematics",
    "topic": "Matrices up to order 3",
    "difficulty": "easy",
    "question": "A 3\u00d73 upper-triangular matrix has diagonal entries 2, -1 and 4. What is the product of its eigenvalues?",
    "options": [
      "8",
      "5",
      "-8",
      "-3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The eigenvalues of a triangular matrix are its diagonal entries. Their product is 2\u00d7(-1)\u00d74=-8.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-004",
    "section": "Mathematics",
    "topic": "Matrices up to order 3",
    "difficulty": "hard",
    "question": "Matrices A = [[3, -1], [5, 7]] and B = [[5, 9], [-1, 1]] satisfy 2X = A + B. What is det(X)?",
    "options": [
      "4",
      "6",
      "8",
      "12"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "A+B=[[8,8],[4,8]], so X=[[4,4],[2,4]]. Therefore det(X)=4\u00d74-4\u00d72=8.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-005",
    "section": "Mathematics",
    "topic": "Determinant up to order 3",
    "difficulty": "easy",
    "question": "Find det([[1,2,3],[0,4,5],[0,0,6]]).",
    "options": [
      "20",
      "18",
      "30",
      "24"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The matrix is upper triangular, so its determinant is the product of diagonal entries: 1\u00d74\u00d76=24.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-006",
    "section": "Mathematics",
    "topic": "Determinant up to order 3",
    "difficulty": "medium",
    "question": "For the system 6u - 5v = 13 and 4u + 7v = 19, Cramer's-rule numerator determinant D_u is",
    "options": [
      "62",
      "-186",
      "186",
      "124"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For u, replace the first coefficient column by the constants: D_u = det([[13,-5],[19,7]]) = 13\u00d77 - (-5)\u00d719 = 91+95 = 186.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-007",
    "section": "Mathematics",
    "topic": "Determinant up to order 3",
    "difficulty": "easy",
    "question": "If the determinant of a 3\u00d73 matrix is nonzero, its rank is",
    "options": [
      "1",
      "2",
      "0",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "A nonzero determinant means the 3\u00d73 matrix is nonsingular, so it has full rank 3.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-008",
    "section": "Mathematics",
    "topic": "Complex Number",
    "difficulty": "medium",
    "question": "What is (1+i)^4?",
    "options": [
      "4",
      "4i",
      "-4",
      "-4i"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "(1+i)^2=2i, so (1+i)^4=(2i)^2=-4.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-009",
    "section": "Mathematics",
    "topic": "Complex Number",
    "difficulty": "medium",
    "question": "If (3 - 4i)z = 7 - 26i, then the imaginary part of z is",
    "options": [
      "5",
      "-2",
      "2",
      "-5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Since (3-4i)(5-2i)=15-6i-20i+8i^2=7-26i, z=5-2i. Hence Im(z)=-2.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-010",
    "section": "Mathematics",
    "topic": "Complex Number",
    "difficulty": "medium",
    "question": "If omega is a non-real cube root of unity, what is (1-omega)(1-omega^2)?",
    "options": [
      "3",
      "1",
      "-3",
      "0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Since omega+omega^2=-1 and omega^3=1, (1-omega)(1-omega^2)=1-(omega+omega^2)+omega^3=1+1+1=3.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-011",
    "section": "Mathematics",
    "topic": "Co-ordinate Geometry (2D)",
    "difficulty": "easy",
    "question": "A point has polar coordinates r=4, theta=60 degrees. Its Cartesian coordinates are",
    "options": [
      "(2sqrt(3), 2)",
      "(4, 0)",
      "(sqrt(3), 1)",
      "(2, 2sqrt(3))"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "x=r cos theta=4\u00d71/2=2 and y=r sin theta=4\u00d7sqrt(3)/2=2sqrt(3).",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-012",
    "section": "Mathematics",
    "topic": "Co-ordinate Geometry (2D)",
    "difficulty": "hard",
    "question": "Tangents to the parabola y^2=8x are drawn at parameters t=1 and t=-2. Their point of intersection is",
    "options": [
      "(-4, -2)",
      "(4, 2)",
      "(-2, -4)",
      "(2, -4)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For y^2=4ax with a=2, the tangent at parameter t is ty=x+at^2. For t=1: y=x+2. For t=-2: -2y=x+8. Solving gives x=-4 and y=-2.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-013",
    "section": "Mathematics",
    "topic": "Co-ordinate Geometry (2D)",
    "difficulty": "medium",
    "question": "For the ellipse x^2/64 + y^2/23 = 1, the length of its latus rectum is",
    "options": [
      "23/8",
      "23/4",
      "41/4",
      "8/23"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For x^2/a^2+y^2/b^2=1 with a>b, the latus-rectum length is 2b^2/a. Here a=8 and b^2=23, so the length is 46/8=23/4.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-014",
    "section": "Mathematics",
    "topic": "Co-ordinate Geometry (2D)",
    "difficulty": "medium",
    "question": "The distance between the parallel lines 3x - 4y + 11 = 0 and 6x - 8y - 5 = 0 is",
    "options": [
      "13/10",
      "5/2",
      "27/10",
      "7/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Divide the second equation by 2 to get 3x-4y-5/2=0. The distance is |11-(-5/2)|/sqrt(3^2+(-4)^2)=(27/2)/5=27/10.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-015",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "easy",
    "question": "For a=(1,2,-1) and b=(2,0,3), a\u00b7b equals",
    "options": [
      "1",
      "-5",
      "5",
      "-1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "a\u00b7b=1\u00d72+2\u00d70+(-1)\u00d73=-1.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-016",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "easy",
    "question": "The magnitude of (1,0,0) \u00d7 (0,3,4) is",
    "options": [
      "4",
      "5",
      "3",
      "7"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The cross product is (0,-4,3), whose magnitude is sqrt(16+9)=5.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-017",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "medium",
    "question": "The volume of the parallelepiped formed by a=(1,0,1), b=(0,2,1), c=(1,1,0) is",
    "options": [
      "3",
      "1",
      "2",
      "4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The scalar triple product a\u00b7(b\u00d7c) has determinant -3, so the volume is its absolute value, 3.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-018",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "easy",
    "question": "The scalar projection of a=(3,4,0) on the positive x-axis is",
    "options": [
      "4",
      "5",
      "3",
      "7"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The unit vector along the positive x-axis is (1,0,0). The scalar projection is a\u00b7i=3.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-019",
    "section": "Mathematics",
    "topic": "Differential Calculus",
    "difficulty": "easy",
    "question": "Evaluate lim(x->0) sin(3x)/x.",
    "options": [
      "0",
      "3",
      "1",
      "infinity"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "sin(3x)/x = 3[sin(3x)/(3x)], and the bracket tends to 1. Hence the limit is 3.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-020",
    "section": "Mathematics",
    "topic": "Differential Calculus",
    "difficulty": "medium",
    "question": "Let f(x)=x^2+a for x<=2 and f(x)=bx+7 for x>2. If f is differentiable at x=2, what is a-b?",
    "options": [
      "15",
      "11",
      "4",
      "7"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Differentiability requires equal derivatives at 2: 2x at x=2 gives 4, so b=4. Continuity also requires 4+a=2b+7=15, hence a=11. Therefore a-b=7.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-021",
    "section": "Mathematics",
    "topic": "Differential Calculus",
    "difficulty": "medium",
    "question": "If y=x^x for x>0, then dy/dx at x=1 is",
    "options": [
      "1",
      "0",
      "e",
      "2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "ln y=x ln x, so (dy/dx)/y=ln x+1. At x=1, y=1 and ln1=0, giving dy/dx=1.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-022",
    "section": "Mathematics",
    "topic": "Differential Calculus",
    "difficulty": "medium",
    "question": "The second derivative of ln x at x=1 is",
    "options": [
      "1",
      "0",
      "-1",
      "-2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "d(ln x)/dx=1/x and d^2(ln x)/dx^2=-1/x^2. At x=1 this is -1.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-023",
    "section": "Mathematics",
    "topic": "Differential Calculus",
    "difficulty": "medium",
    "question": "For f(x)=4x^2+x-3 on [2,7], the value c guaranteed by Lagrange's mean value theorem satisfies c=",
    "options": [
      "4",
      "9/2",
      "5",
      "11/2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The secant slope is [f(7)-f(2)]/(7-2)=(200-15)/5=37. Since f'(x)=8x+1, the mean-value condition gives 8c+1=37, so c=36/8=9/2.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-024",
    "section": "Mathematics",
    "topic": "Application of Derivative",
    "difficulty": "medium",
    "question": "A machine's operating-cost index is C(v)=v^2/32 + 108/v for v>0. At what value of v is C(v) minimum?",
    "options": [
      "12",
      "8",
      "16",
      "18"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "C'(v)=v/16-108/v^2. Setting C'(v)=0 gives v^3=1728, so v=12. Also C''(v)=1/16+216/v^3>0 for v>0, confirming a minimum.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-025",
    "section": "Mathematics",
    "topic": "Application of Derivative",
    "difficulty": "medium",
    "question": "A sphere has radius 5 cm increasing at 0.2 cm/s. At that instant dV/dt is",
    "options": [
      "10pi cm^3/s",
      "25pi cm^3/s",
      "5pi cm^3/s",
      "20pi cm^3/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "V=(4/3)pi r^3, so dV/dt=4pi r^2 dr/dt=4pi\u00d725\u00d70.2=20pi cm^3/s.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-026",
    "section": "Mathematics",
    "topic": "Partial Differentiation",
    "difficulty": "medium",
    "question": "For f=x^2y+xy^2, find partial f/partial x at (1,2).",
    "options": [
      "6",
      "4",
      "8",
      "10"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "partial f/partial x=2xy+y^2. At (1,2), this is 4+4=8.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-027",
    "section": "Mathematics",
    "topic": "Partial Differentiation",
    "difficulty": "medium",
    "question": "For f=x^2+xy+y^2, the value of x f_x + y f_y at (1,2) is",
    "options": [
      "7",
      "14",
      "21",
      "10"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "f is homogeneous of degree 2, so Euler's theorem gives x f_x+y f_y=2f. At (1,2), f=1+2+4=7, hence 14.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-028",
    "section": "Mathematics",
    "topic": "Partial Differentiation",
    "difficulty": "hard",
    "question": "For z=e^(xy), evaluate partial^2 z/(partial x partial y) at (1,0).",
    "options": [
      "1",
      "0",
      "e",
      "2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "z_x=y e^(xy). Differentiating with respect to y gives z_xy=e^(xy)+xy e^(xy). At (1,0), z_xy=1.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-029",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "easy",
    "question": "Evaluate integral from 0 to 1 of (3x^2+2x) dx.",
    "options": [
      "1",
      "3",
      "4",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The antiderivative is x^3+x^2. From 0 to 1 the value is 1+1=2.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-030",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "medium",
    "question": "An antiderivative of x e^x is",
    "options": [
      "e^x(x+1)",
      "e^x(x-1)",
      "x^2e^x",
      "e^x/x"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Integration by parts gives integral x e^x dx = x e^x - e^x + C = e^x(x-1)+C.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-031",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "hard",
    "question": "For an integrable function f on [0,a], which statements are always true?",
    "options": [
      "\u222b_0^a f(x)dx = \u222b_0^a f(a-x)dx",
      "If f(a-x)=f(x), then \u222b_0^a f(x)dx = 2\u222b_0^(a/2) f(x)dx",
      "If f(a-x)=-f(x), then \u222b_0^a f(x)dx = 0",
      "\u222b_0^a [f(x)+f(a-x)]dx = \u222b_0^a f(x)dx"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "partialCreditMode": "proportional",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Correct: 1, 2 and 3. The substitution u=a-x proves the first. Symmetry then gives the half-interval doubling in the second, while antisymmetry makes the integral zero in the third. The fourth is false because its left side equals 2\u222b_0^a f(x)dx.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-032",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "medium",
    "question": "Which definite-integral values are correct?",
    "options": [
      "\u222b_0^pi sin x dx = 2",
      "\u222b_0^(pi/2) cos^2 x dx = pi/4",
      "\u222b_(-1)^1 x^2 dx = 0",
      "\u222b_0^1 x^2 dx = 1/2"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1
    ],
    "partialMarking": true,
    "partialCreditMode": "proportional",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Correct: 1 and 2. The first integral is 2 and the second is pi/4. The third is false because \u222b_(-1)^1 x^2 dx=2/3, while the fourth is false because \u222b_0^1 x^2 dx=1/3.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-033",
    "section": "Mathematics",
    "topic": "Ordinary Differential Equation",
    "difficulty": "medium",
    "question": "Which equations are first-order and first-degree differential equations?",
    "options": [
      "dy/dx + y = x",
      "(dy/dx)^2 + y = 0",
      "d^2y/dx^2 + y = 0",
      "dy/dx = sin x"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      3
    ],
    "partialMarking": true,
    "partialCreditMode": "proportional",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Correct: 1 and 4. Each has highest derivative dy/dx and that derivative appears to the first power. Option 2 is first-order but degree 2; option 3 is second-order.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-034",
    "section": "Mathematics",
    "topic": "Ordinary Differential Equation",
    "difficulty": "hard",
    "question": "Which stated general solution forms are correct?",
    "options": [
      "For y'=2y: y=Ce^(2x)",
      "For y''+y=0: y=C1 cos x + C2 sin x",
      "For y'=x/y: y^2=x^2+C",
      "For y'+y=e^x: y=e^x+Ce^(-x)"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "partialCreditMode": "proportional",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Correct: 1, 2 and 3. Separation gives y=Ce^(2x) and y^2=x^2+C for the first and third. The complementary solution of y''+y=0 is C1 cos x+C2 sin x. For y'+y=e^x, the correct solution is y=(1/2)e^x+Ce^(-x), so option 4 is false.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-035",
    "section": "Mathematics",
    "topic": "Ordinary Differential Equation",
    "difficulty": "medium",
    "question": "For y'' - 3y' + 2y = 0, which statements are true?",
    "options": [
      "e^x is a solution",
      "e^(2x) is a solution",
      "e^(3x) is a solution",
      "Every nonzero solution is periodic"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1
    ],
    "partialMarking": true,
    "partialCreditMode": "proportional",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Correct: 1 and 2. The auxiliary equation m^2-3m+2=0 has roots 1 and 2, so e^x and e^(2x) are solutions. e^(3x) is not, and the exponential solutions are not periodic.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-036",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "Events A and B are mutually exclusive with P(A)=0.4 and P(B)=0.3. Which statements are true?",
    "options": [
      "P(A\u222aB)=0.7",
      "P(A\u2229B)=0",
      "A and B are independent",
      "P(A^c\u2229B^c)=0.3"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      3
    ],
    "partialMarking": true,
    "partialCreditMode": "proportional",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Correct: 1, 2 and 4. Mutual exclusivity gives P(A\u2229B)=0 and P(A\u222aB)=0.4+0.3=0.7. Therefore neither event occurring has probability 0.3. They are not independent because P(A)P(B)=0.12\u22600.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-037",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "One of two boxes is chosen at random. Box I has 2 red and 1 blue ball; Box II has 1 red and 2 blue balls. One ball is drawn. Which statements are true?",
    "options": [
      "P(red)=1/2",
      "P(Box I | red)=2/3",
      "P(Box I | blue)=2/3",
      "P(Box II | blue)=1/3"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1
    ],
    "partialMarking": true,
    "partialCreditMode": "proportional",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Correct: 1 and 2. P(red)=1/2[(2/3)+(1/3)]=1/2, and Bayes gives P(Box I|red)=2/3. For a blue ball, P(Box I|blue)=1/3 and P(Box II|blue)=2/3, so options 3 and 4 are false.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-038",
    "section": "Mathematics",
    "topic": "Matrices up to order 3",
    "difficulty": "medium",
    "question": "Let A be symmetric and B be skew-symmetric, of the same order. Which statements are always true?",
    "options": [
      "A^T=A",
      "B^T=-B",
      "Every diagonal entry of B is zero",
      "AB is always symmetric"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "partialCreditMode": "proportional",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Correct: 1, 2 and 3 by the definitions of symmetric and skew-symmetric matrices; b_ii=-b_ii forces b_ii=0. In general (AB)^T=B^T A^T=-BA, so AB need not be symmetric.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-039",
    "section": "Mathematics",
    "topic": "Complex Number",
    "difficulty": "medium",
    "question": "For a nonzero complex number z with |z|=1, which statements are true?",
    "options": [
      "z z_bar = 1",
      "z_bar = 1/z",
      "z+z_bar is always positive",
      "z - 1/z is always real"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1
    ],
    "partialMarking": true,
    "partialCreditMode": "proportional",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Correct: 1 and 2. Since |z|^2=z z_bar=1, z_bar=1/z. The real number z+z_bar can be negative, zero or positive, and z-1/z=z-z_bar is generally purely imaginary rather than real.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ma-040",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "medium",
    "question": "Nonzero vectors a and b are perpendicular. Which statements are true?",
    "options": [
      "a\u00b7b=0",
      "|a\u00d7b|=|a||b|",
      "a\u00d7b is parallel to a",
      "|a+b|^2=|a|^2+|b|^2"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      3
    ],
    "partialMarking": true,
    "partialCreditMode": "proportional",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Correct: 1, 2 and 4. Perpendicular vectors have zero dot product, sin 90\u00b0=1 gives |a\u00d7b|=|a||b|, and the Pythagorean relation follows. A cross product is perpendicular to both vectors, not parallel to a.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  }
];
