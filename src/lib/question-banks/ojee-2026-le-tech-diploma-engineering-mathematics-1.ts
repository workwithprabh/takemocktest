import type { Question } from '../questions';

export const OJEE_2026_LE_TECH_DIPLOMA_ENGINEERING_MATHEMATICS_1: Question[] = [
  {
    "section": "Engineering Mathematics",
    "topic": "Algebra - Complex Numbers",
    "difficulty": "medium",
    "question": "If (2+i)z=11-2i, then |z| equals",
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
    "explanation": "z=(11-2i)/(2+i). Multiplying by 2-i gives z=(20-15i)/5=4-3i. Hence |z|=sqrt(4^2+(-3)^2)=5.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-001"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Algebra - Complex Numbers",
    "difficulty": "easy",
    "question": "For z=-5+12i, the value of z/|z| is",
    "options": [
      "-5+12i",
      "(-12+5i)/13",
      "(5-12i)/13",
      "(-5+12i)/13"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "|z|=sqrt(25+144)=13. Therefore z/|z|=(-5+12i)/13.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-002"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Algebra - Complex Numbers",
    "difficulty": "medium",
    "question": "A complex number z satisfies z+conjugate(z)=8 and z*conjugate(z)=25. What is |Im(z)|?",
    "options": [
      "2",
      "4",
      "3",
      "1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Write z=x+iy. From z+conjugate(z)=2x=8, x=4. Also z*conjugate(z)=x^2+y^2=25, so y^2=9 and |Im(z)|=3.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-003"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Algebra - De Moivre's Theorem",
    "difficulty": "medium",
    "question": "Using De Moivre's theorem, (cos(15 degrees)+i sin(15 degrees))^8 equals",
    "options": [
      "-1/2-(sqrt(3)/2)i",
      "1/2+(sqrt(3)/2)i",
      "1",
      "-1/2+(sqrt(3)/2)i"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By De Moivre's theorem the eighth power is cos(120 degrees)+i sin(120 degrees)=-1/2+(sqrt3/2)i.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-004"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Algebra - Permutation and Combination",
    "difficulty": "medium",
    "question": "Six different instruments are placed in a row. In how many arrangements are a drill and a saw not adjacent?",
    "options": [
      "480",
      "600",
      "240",
      "360"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are 6!=720 total arrangements. Treating the drill and saw as one block gives 2*5!=240 adjacent arrangements. Hence 720-240=480.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-005"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Algebra - Binomial Theorem",
    "difficulty": "medium",
    "question": "In the expansion of (3+x)^7, what is the sum of the coefficients of all odd powers of x?",
    "options": [
      "8064",
      "8256",
      "8192",
      "8128"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let f(x)=(3+x)^7. The sum of coefficients of odd powers is [f(1)-f(-1)]/2. Hence it is [4^7-2^7]/2=(16384-128)/2=8128.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-006"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Determinants and Matrices",
    "difficulty": "medium",
    "question": "For A=[[2,1,0],[-1,3,2],[4,0,1]], det(A) equals",
    "options": [
      "15",
      "12",
      "9",
      "18"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Expanding along the first row: det(A)=2(3*1-2*0)-1((-1)*1-2*4)=6-(-9)=15.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-007"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Determinants and Matrices",
    "difficulty": "hard",
    "question": "For the system 2x-y+z=7, x+3y-2z=-4, and 4x+y+z=12, the Cramer's-rule numerator determinant D_z is",
    "options": [
      "31",
      "39",
      "23",
      "8"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Replace the z-column by constants: D_z=det([[2,-1,7],[1,3,-4],[4,1,12]])=31.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-008"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Determinants and Matrices",
    "difficulty": "medium",
    "question": "If A=[[4,1],[7,2]], the (2,1) entry of A^(-1) is",
    "options": [
      "-1",
      "4",
      "-7",
      "7"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "det(A)=8-7=1, so A^(-1)=[[2,-1],[-7,4]]. Thus its (2,1) entry is -7.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-009"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Determinants and Matrices",
    "difficulty": "easy",
    "question": "The matrix A=[[0,4,-1],[-4,0,6],[1,-6,0]] is",
    "options": [
      "skew-symmetric",
      "diagonal",
      "upper triangular",
      "symmetric"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Transposing A changes every off-diagonal sign and leaves zero diagonal entries, so A^T=-A. Therefore A is skew-symmetric.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-010"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Determinants and Matrices",
    "difficulty": "medium",
    "question": "If A is a 3x3 matrix with det(A)=-3, then det(2A) is",
    "options": [
      "-12",
      "24",
      "-24",
      "-6"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a 3x3 matrix, det(kA)=k^3 det(A). Hence det(2A)=8(-3)=-24.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-011"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "If tan(theta)=3/7 and tan(2theta) is defined, then tan(2theta) equals",
    "options": [
      "21/20",
      "3/10",
      "6/7",
      "20/21"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "tan(2theta)=2tan(theta)/(1-tan^2(theta))=(6/7)/(1-9/49)=(6/7)/(40/49)=21/20.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-012"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "For 0<theta<pi/2, if cos(2theta)=7/25, then tan(theta) is",
    "options": [
      "1/2",
      "4/3",
      "3/4",
      "7/24"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using cos(2theta)=(1-tan^2 theta)/(1+tan^2 theta)=7/25 gives 25-25t^2=7+7t^2, so 18=32t^2 and t=3/4 for an acute angle.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-013"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Trigonometry - Properties of Triangles",
    "difficulty": "medium",
    "question": "If alpha=arctan(2/3) and beta=arctan(1/4), then tan(alpha+beta) equals",
    "options": [
      "13/8",
      "9/10",
      "11/10",
      "7/12"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "tan(alpha+beta)=(2/3+1/4)/(1-(2/3)(1/4))=(11/12)/(5/6)=11/10.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-014"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Inverse Trigonometric Functions",
    "difficulty": "medium",
    "question": "For x>0, tan(arctan(x)+arctan(1/x)) equals",
    "options": [
      "undefined (angle is pi/2)",
      "0",
      "x+1/x",
      "1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For x>0, arctan(x)+arctan(1/x)=pi/2. The tangent of pi/2 is undefined.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-015"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Analytical Geometry",
    "difficulty": "medium",
    "question": "A straight line has x-intercept 8 and passes through (4,3). Its y-intercept is",
    "options": [
      "5",
      "6",
      "8",
      "4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using intercept form x/8+y/b=1 and substituting (4,3): 1/2+3/b=1, so 3/b=1/2 and b=6.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-016"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Analytical Geometry",
    "difficulty": "medium",
    "question": "The line through the intersection of x+3y=11 and 2x-y=1, and parallel to 4x-3y=0, is",
    "options": [
      "4x-3y+1=0",
      "4x-3y-1=0",
      "3x+4y-18=0",
      "4x+3y-17=0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The two given lines intersect at (2,3). A line parallel to 4x-3y=0 has form 4x-3y+c=0. Substituting (2,3) gives 8-9+c=0, so c=1.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-017"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Analytical Geometry",
    "difficulty": "medium",
    "question": "A circle has its centre on the x-axis and passes through (2,3) and (6,1). Its equation is",
    "options": [
      "x^2+(y-3)^2=10",
      "(x-3)^2+y^2=9",
      "(x-4)^2+y^2=13",
      "(x-3)^2+y^2=10"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let the centre be (h,0). Equating squared distances to the two given points gives (2-h)^2+9=(6-h)^2+1, so h=3. Then r^2=(2-3)^2+9=10.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-018"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Analytical Geometry",
    "difficulty": "medium",
    "question": "The area of the triangle with vertices (1,2), (7,4), and (4,9) is",
    "options": [
      "24",
      "16",
      "18",
      "20"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using the coordinate area formula, area=1/2|1(4-9)+7(9-2)+4(2-4)|=1/2|-5+49-8|=18.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-019"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "medium",
    "question": "The scalar projection of a=(4,1,-2) on b=(2,-2,1) is",
    "options": [
      "2/3",
      "4/3",
      "4",
      "sqrt(3)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a\u00b7b=8-2-2=4 and |b|=sqrt(4+4+1)=3. Scalar projection=(a\u00b7b)/|b|=4/3.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-020"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "medium",
    "question": "The area of the parallelogram formed by vectors a=(2,1,0) and b=(1,-1,3) is",
    "options": [
      "sqrt(6)",
      "3sqrt(6)",
      "6sqrt(3)",
      "3sqrt(3)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a\u00d7b=(3,-6,-3). Its magnitude is sqrt(9+36+9)=sqrt54=3sqrt6, which is the parallelogram area.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-021"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "medium",
    "question": "Vectors a=(2,-1,3) and b=(lambda,4,-2) are perpendicular. The value of lambda is",
    "options": [
      "6",
      "4",
      "3",
      "5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Perpendicular vectors have zero dot product: 2lambda-4-6=0, so 2lambda=10 and lambda=5.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-022"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "easy",
    "question": "A unit vector directed from A=(-1,2,3) to B=(3,-1,5) is",
    "options": [
      "(4,-3,2)/sqrt(29)",
      "(-4,3,-2)/sqrt(29)",
      "(4,3,2)/sqrt(29)",
      "(4,-3,2)/29"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "AB=B-A=(4,-3,2) and |AB|=sqrt(16+9+4)=sqrt29. Dividing by the magnitude gives the unit vector.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-023"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Calculus - Limits",
    "difficulty": "medium",
    "question": "Evaluate lim(x->0) [sqrt(4+5x)-sqrt(4-3x)]/x.",
    "options": [
      "1",
      "2",
      "4",
      "8"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Rationalizing gives [(4+5x)-(4-3x)]/[x(sqrt(4+5x)+sqrt(4-3x))] = 8/[sqrt(4+5x)+sqrt(4-3x)]. At x->0 this becomes 8/(2+2)=2.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-024"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Calculus - Implicit Differentiation",
    "difficulty": "medium",
    "question": "On the curve x^2+xy+2y^2=14, the value of dy/dx at (2,1) is",
    "options": [
      "5/6",
      "-6/5",
      "-1/2",
      "-5/6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Differentiating gives 2x+y+(x+4y)y'=0. At (2,1), 5+6y'=0, so y'=-5/6.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-025"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Calculus - Differentiation with Respect to Another Function",
    "difficulty": "medium",
    "question": "If y=x^2+3x and z=x^3-x, then dy/dz at x=2 is",
    "options": [
      "5/11",
      "7/11",
      "11/7",
      "7/10"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "dy/dz=(dy/dx)/(dz/dx)=(2x+3)/(3x^2-1). At x=2 this is 7/11.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-026"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Calculus - Logarithmic Differentiation",
    "difficulty": "hard",
    "question": "For y=x^x e^(-x), x>0, the value of dy/dx at x=e is",
    "options": [
      "0",
      "e",
      "e^e",
      "1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "ln y=x ln x-x, so y'/y=ln x. At x=e, ln x=1 and y=e^e e^(-e)=1, hence y'=1.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-027"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Calculus - Point of Inflection",
    "difficulty": "medium",
    "question": "For f(x)=x^4-12x^3+42x^2-7, the product of the x-coordinates of its points of inflection is",
    "options": [
      "3",
      "6",
      "7",
      "9"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f''(x)=12x^2-72x+84=12(x^2-6x+7). Its two simple zeros are the inflection abscissae because f'' changes sign at each. Their product, by Vieta's formula, is 7.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-028"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Calculus - Partial Derivatives",
    "difficulty": "medium",
    "question": "Let f(x,y)=x^2 y+y^3. What is x f_x + y f_y at (1,2)?",
    "options": [
      "20",
      "36",
      "30",
      "24"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f is homogeneous of degree 3, so Euler's theorem gives x f_x+y f_y=3f. At (1,2), f=2+8=10, so the value is 30.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-029"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Calculus - Integration",
    "difficulty": "hard",
    "question": "Evaluate integral from 0 to 1 of dx/(x^2+5x+6).",
    "options": [
      "ln(8/9)",
      "ln(9/8)",
      "ln(3/2)",
      "ln(4/3)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "1/[(x+2)(x+3)]=1/(x+2)-1/(x+3). Evaluating from 0 to 1 gives ln(3/2)-ln(4/3)=ln(9/8).",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-030"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Calculus - Area by Integration",
    "difficulty": "medium",
    "question": "The area of the region between y=3x^2-5x+8 and y=2, bounded by the vertical lines x=0 and x=1, is",
    "options": [
      "7/2",
      "5",
      "11/2",
      "9/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "On 0<=x<=1, 3x^2-5x+8 is above y=2 because 3x^2-5x+6 has negative discriminant and positive leading coefficient. Hence area = integral_0^1(3x^2-5x+6)dx = [x^3-(5/2)x^2+6x]_0^1 = 1-5/2+6 = 9/2.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-031"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Ordinary Differential Equation",
    "difficulty": "medium",
    "question": "The solution of y'+y=2x+3 satisfies y(0)=4. What is y(ln 2)?",
    "options": [
      "2 ln 2 + 3/2",
      "ln 2 + 5/2",
      "2 ln 2 + 5/2",
      "2 ln 2 + 4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A particular solution is y_p=2x+1, so y=2x+1+Ce^(-x). From y(0)=4, C=3. At x=ln 2, e^(-x)=1/2, hence y=2 ln 2+1+3/2=2 ln 2+5/2.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-032"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Ordinary Differential Equation",
    "difficulty": "hard",
    "question": "The differential equation dy/dx=1+y/x satisfies y(1)=2. What is y(e)?",
    "options": [
      "e^2",
      "4e",
      "3e",
      "2e"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Put y=vx. Then dy/dx=v+x dv/dx, so x dv/dx=1. Thus v=ln x+C. Since y(1)=2, C=2. Hence y=x(ln x+2), giving y(e)=3e.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-033"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Coordinate Geometry of Three Dimension",
    "difficulty": "easy",
    "question": "The distance from P=(4,-1,2) to the plane 2x-2y+z-9=0 is",
    "options": [
      "3",
      "2",
      "1",
      "1/3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Distance=|2(4)-2(-1)+2-9|/sqrt(4+4+1)=3/3=1.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-034"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Coordinate Geometry of Three Dimension",
    "difficulty": "medium",
    "question": "The perpendicular distance from the point (2,-3,1) to the plane 3x+4y-12z+5=0 is",
    "options": [
      "1",
      "13",
      "1/13",
      "13/2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Distance = |3(2)+4(-3)-12(1)+5|/sqrt(3^2+4^2+(-12)^2) = |-13|/13 = 1.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-035"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Coordinate Geometry of Three Dimension",
    "difficulty": "medium",
    "question": "Point P divides the segment joining A=(1,-2,4) and B=(7,4,-2) internally in the ratio AP:PB=2:1. The coordinates of P are",
    "options": [
      "(5,0,2)",
      "(5,2,0)",
      "(4,1,1)",
      "(3,0,2)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For internal division AP:PB=2:1, P=(2B+1A)/3=((14+1)/3,(8-2)/3,(-4+4)/3)=(5,2,0).",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-036"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "difficulty": "easy",
    "question": "A random variable X takes the values 1, 3 and 6 with probabilities 0.2, 0.5 and 0.3 respectively. Var(X) is",
    "options": [
      "13/4",
      "7/2",
      "15/4",
      "11/4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "E[X]=1(0.2)+3(0.5)+6(0.3)=3.5. E[X^2]=1(0.2)+9(0.5)+36(0.3)=15.5. Thus Var(X)=15.5-(3.5)^2=3.25=13/4.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-037"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "difficulty": "medium",
    "question": "Events A and B are independent with P(A)=0.45 and P(B)=0.30. Then P(A union B) is",
    "options": [
      "0.750",
      "0.615",
      "0.135",
      "0.585"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For independent events, P(A\u2229B)=0.45*0.30=0.135. Therefore P(A\u222aB)=0.45+0.30-0.135=0.615.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-038"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "difficulty": "medium",
    "question": "A box contains 5 red and 4 blue balls. Two balls are drawn without replacement. The probability that exactly one is red is",
    "options": [
      "10/21",
      "5/9",
      "4/9",
      "1/2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Exactly one red can occur in two orders: 2*(5/9)*(4/8)=40/72=5/9.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-039"
  },
  {
    "section": "Engineering Mathematics",
    "topic": "Probability and Statistics",
    "difficulty": "easy",
    "question": "Eight observations have mean 18. One recorded value 23 is corrected to 31. The corrected mean is",
    "options": [
      "18.5",
      "19",
      "20",
      "19.5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The total increases by 31-23=8. For 8 observations the mean therefore increases by 8/8=1, from 18 to 19.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ma-040"
  }
];
