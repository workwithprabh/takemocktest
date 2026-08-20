import type { Question } from '../questions';

export const JEE_MAIN_PAPER_2_2B_FULL_MOCK_1: Question[] = [
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-001",
    "section": "Mathematics",
    "topic": "Sets, Relations and Functions",
    "difficulty": "medium",
    "question": "Let A={1,2,3,4} and B={a,b,c}. How many functions f:A->B satisfy f(1)=a and have an image containing exactly two elements?",
    "options": [
      "12",
      "16",
      "14",
      "18"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The second image value can be b or c. For each choice, the remaining three inputs may map to either used value, except the all-a assignment. Thus 2*(2^3-1)=14.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-002",
    "section": "Mathematics",
    "topic": "Complex Numbers and Quadratic Equations",
    "difficulty": "medium",
    "question": "If z=(1+i)^6, which ordered pair represents z on the Argand plane?",
    "options": [
      "(8,0)",
      "(0,8)",
      "(-8,0)",
      "(0,-8)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "1+i=sqrt(2)e^(i pi/4). Raising to the sixth power gives 8e^(i3pi/2)=-8i, corresponding to (0,-8).",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-003",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "If A=[[2,1],[3,2]], what is the sum of all entries of A^-1?",
    "options": [
      "1",
      "-1",
      "2",
      "0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "det A=4-3=1, so A^-1=[[2,-1],[-3,2]]. The sum of its entries is 2-1-3+2=0.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-004",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "hard",
    "question": "A 5-member committee is chosen from 6 architects and 5 planners. It must contain at least 2 members from each profession, and two specified architects A1 and A2 are not allowed to serve together. How many valid committees are possible?",
    "options": [
      "250",
      "300",
      "320",
      "350"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Ignoring the A1-A2 restriction, valid profession splits are 2 architects and 3 planners or 3 architects and 2 planners: C(6,2)C(5,3)+C(6,3)C(5,2)=150+200=350. Committees containing both A1 and A2 number C(5,3)+C(4,1)C(5,2)=10+40=50. Hence 350-50=300.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-005",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "hard",
    "question": "In the expansion of (x^2+2/x)^9, what is the coefficient of the term independent of x?",
    "options": [
      "2688",
      "5376",
      "10752",
      "84"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Choosing the term 2/x from k factors gives x exponent 2(9-k)-k=18-3k. For the constant term, k=6. Its coefficient is C(9,6)2^6=84x64=5376.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-006",
    "section": "Mathematics",
    "topic": "Sequence and Series",
    "difficulty": "medium",
    "question": "Three consecutive terms of an increasing arithmetic progression have sum 27 and product 405. What is the common difference?",
    "options": [
      "3",
      "4",
      "9",
      "6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Write the terms as 9-d,9,9+d. Their product is 9(81-d^2)=405, so 81-d^2=45 and d^2=36. Since the progression is increasing, d=6.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-007",
    "section": "Mathematics",
    "topic": "Limit, Continuity and Differentiability",
    "difficulty": "medium",
    "question": "For f(x)=kx+1 when x<2 and f(x)=x^2-1 when x>=2, what value of k makes f continuous at x=2?",
    "options": [
      "1",
      "1/2",
      "2",
      "3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Continuity requires the left limit 2k+1 to equal f(2)=3. Thus 2k=2 and k=1.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-008",
    "section": "Mathematics",
    "topic": "Limit, Continuity and Differentiability",
    "difficulty": "medium",
    "question": "For x>0, let y=x^x. What is dy/dx at x=e?",
    "options": [
      "2e^e",
      "e^e",
      "e^(e+1)",
      "2e"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Taking logarithms, ln y=x ln x. Hence y'/y=ln x+1. At x=e, y=e^e and ln e+1=2, so y'=2e^e.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-009",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "hard",
    "question": "Evaluate I=integral from 0 to pi/2 of x/(sin x+cos x)^2 dx.",
    "options": [
      "pi/8",
      "1/2",
      "pi/4",
      "pi/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Replacing x by pi/2-x gives I=integral from 0 to pi/2 of (pi/2-x)/(sin x+cos x)^2 dx. Adding the two forms gives 2I=(pi/2)J, where J=integral from 0 to pi/2 dx/(sin x+cos x)^2. With t=tan x, J=integral from 0 to infinity dt/(1+t)^2=1. Therefore I=pi/4.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-010",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "The differential equation dy/dx=3x^2/y has y=2 when x=0. What is y when x=2, taking the positive branch?",
    "options": [
      "sqrt(14)",
      "4sqrt(2)",
      "6",
      "2sqrt(5)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Separate variables: y dy=3x^2 dx. Hence y^2/2=x^3+C. The initial condition gives C=2, so y^2=2x^3+4. At x=2, y^2=20 and y=2sqrt(5).",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-011",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "The lines x+y=5 and 2x-y=1 intersect at P. What is the distance of P from the x-axis?",
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
    "explanation": "Solving the equations gives 3x=6, so x=2 and y=3. The distance from the x-axis is |y|=3.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-012",
    "section": "Mathematics",
    "topic": "Three Dimensional Geometry",
    "difficulty": "hard",
    "question": "What is the shortest distance between the lines r=(1,0,0)+lambda(1,1,0) and r=(0,1,6)+mu(1,-1,1)?",
    "options": [
      "7sqrt(6)/3",
      "5sqrt(6)/3",
      "2sqrt(6)",
      "7sqrt(3)/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For d1=(1,1,0) and d2=(1,-1,1), d1 cross d2=(1,-1,-2) with magnitude sqrt(6). The separation vector from the first base point to the second is (-1,1,6), whose dot product with the cross product is -14. Hence the distance is 14/sqrt(6)=7sqrt(6)/3.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-013",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "easy",
    "question": "If a=(3,4,0) and b=(0,0,1), what is |a cross b|?",
    "options": [
      "1",
      "4",
      "5",
      "7"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a cross b=(4,-3,0), so its magnitude is sqrt(16+9)=5.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-014",
    "section": "Mathematics",
    "topic": "Statistics and Probability",
    "difficulty": "hard",
    "question": "A fair die is rolled twice. Given that the sum is at least 10, what is the probability that at least one roll is 6?",
    "options": [
      "1/2",
      "2/3",
      "3/4",
      "5/6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The ordered outcomes with sum at least 10 are (4,6),(5,5),(5,6),(6,4),(6,5),(6,6). Five of the six contain at least one 6, so the conditional probability is 5/6.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-015",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "If sec theta - tan theta = 1/3 and theta is acute, what is sec theta + tan theta?",
    "options": [
      "1",
      "2",
      "3",
      "9"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "(sec theta-tan theta)(sec theta+tan theta)=sec^2 theta-tan^2 theta=1. Hence sec theta+tan theta=3.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-016",
    "section": "Mathematics",
    "topic": "Sets, Relations and Functions",
    "difficulty": "easy",
    "question": "If A={1,2,3}, how many elements are in the power set P(A)?",
    "options": [
      "3",
      "6",
      "8",
      "9"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A set with three elements has 2^3=8 subsets.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-017",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "easy",
    "question": "What is the determinant of the matrix with rows (3,1) and (2,2)?",
    "options": [
      "2",
      "5",
      "8",
      "4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The determinant is 3*2-1*2=4.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-018",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "The circle x^2+y^2+6x-8y+c=0 is tangent to the x-axis. What is c?",
    "options": [
      "9",
      "0",
      "16",
      "25"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The centre is (-3,4). Tangency to the x-axis requires radius 4. Since r^2=3^2+(-4)^2-c=25-c, we need 25-c=16, giving c=9.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-019",
    "section": "Mathematics",
    "topic": "Statistics and Probability",
    "difficulty": "easy",
    "question": "The data set 4,4,4,4,4 has what standard deviation?",
    "options": [
      "1",
      "4",
      "0",
      "5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Every value equals the mean, so all deviations are zero and the standard deviation is zero.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-020",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "For x in [-1,1], what is sin(cos^-1 x)?",
    "options": [
      "1-x^2",
      "sqrt(1-x^2)",
      "x",
      "sqrt(1+x^2)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "If theta=cos^-1 x, then theta is in [0,pi], so sin theta is nonnegative and equals sqrt(1-cos^2 theta)=sqrt(1-x^2).",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-021",
    "section": "Mathematics",
    "topic": "Sequence and Series",
    "difficulty": "easy",
    "question": "The first three terms of an arithmetic progression have sum 24 and common difference 3. Enter the first term.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "5",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let the first term be a. The first three terms are a, a+3 and a+6, so 3a+9=24. Hence a=5.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-20"
    },
    "maxDecimalPlaces": 0
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-022",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "For the matrix with rows (1,2,0), (0,3,1), and (2,1,k), the determinant is 21. Enter k.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "6",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The determinant is 1*(3k-1)-2*(0*k-2)=3k+3. Thus 3k+3=21 and k=6. The result is already an integer, so the required nearest-integer response is 6.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    },
    "maxDecimalPlaces": 0
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-023",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "hard",
    "question": "Five distinct design cards are placed in five labelled positions. Enter the number of arrangements in which no card occupies its original labelled position.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "44",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "This is the derangement count !5. Using !n=(n-1)(!(n-1)+!(n-2)), with !4=9 and !3=2, !5=4(9+2)=44. The result is already an integer, so the required nearest-integer response is 44.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    },
    "maxDecimalPlaces": 0
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-024",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "The line 3x+4y=24 meets the positive coordinate axes. Enter the area of the triangle enclosed by this line and the two axes.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "24",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The intercepts are 8 on the x-axis and 6 on the y-axis. The triangle area is (1/2)*8*6=24. The result is already an integer, so the required nearest-integer response is 24.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    },
    "maxDecimalPlaces": 0
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-025",
    "section": "Mathematics",
    "topic": "Complex Numbers and Quadratic Equations",
    "difficulty": "easy",
    "question": "Enter the sum of the roots of x^2-9x+14=0.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "9",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For x^2-9x+14=0, the sum of roots is 9. The result is already an integer, so the required nearest-integer response is 9.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Mathematics syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    },
    "maxDecimalPlaces": 0
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-026",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "easy",
    "question": "A cube is viewed orthographically in a direction perpendicular to one of its faces. What is the boundary shape of the view?",
    "options": [
      "A square",
      "A circle",
      "A triangle",
      "A regular pentagon"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A face-on orthographic view of a cube has the square outline of that face.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-027",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "easy",
    "question": "A rectangular prism measures 10 m east-west, 6 m north-south and 4 m high. What dimensions appear in its ideal top view?",
    "options": [
      "10 m by 4 m",
      "10 m by 6 m",
      "6 m by 4 m",
      "4 m by 4 m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The top view records the two horizontal dimensions, east-west and north-south.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-028",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "medium",
    "question": "Three vertical stacks of unit cubes have heights 2,5 and 3 and stand along a north-south line. From the south, what is the maximum height of the silhouette?",
    "options": [
      "5 units",
      "2 units",
      "3 units",
      "10 units"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The stacks overlap in the viewing direction, so the visible silhouette reaches the tallest stack, height 5.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-029",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "medium",
    "question": "A square pyramid has a square base and four triangular side faces. How many edges does it have?",
    "options": [
      "5",
      "8",
      "6",
      "9"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are four base edges and four edges from the apex to the base vertices, giving 8.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-030",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "easy",
    "question": "A hemisphere rests on its flat circular face. What is the ideal top-view boundary?",
    "options": [
      "A circle",
      "A semicircle",
      "A rectangle",
      "A triangle"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Seen from above, the circular rim forms a circle.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-031",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "medium",
    "question": "A cuboid has side lengths 7,5 and 3. If the 7 by 3 face is made horizontal, what becomes the vertical dimension?",
    "options": [
      "5",
      "3",
      "7",
      "10"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The dimension perpendicular to the 7 by 3 face is 5.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-032",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "hard",
    "question": "A 3 by 3 by 3 cube is built from unit cubes and all six outer faces are painted. The unit cube at the centre of each of the six outer faces is then removed. How many previously unpainted unit-square faces of the remaining cubes become newly exposed?",
    "options": [
      "24",
      "26",
      "28",
      "30"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Each removed face-centre cube has five neighbours: four in its surface layer and one directly inward. Removing it exposes one previously unpainted face on each of those five neighbours. The six removed cubes are not face-adjacent to one another, so the contributions do not overlap: 6x5=30.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-033",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "medium",
    "question": "A right square prism is viewed directly perpendicular to one of its rectangular lateral faces. Which outline is obtained?",
    "options": [
      "A square in every case",
      "A circle",
      "A rectangle",
      "A trapezium in every case"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A lateral face of a right square prism is rectangular, so a view normal to that face gives a rectangular boundary.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-034",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "easy",
    "question": "A horizontal right circular cylinder is viewed directly along its axis. What boundary is seen?",
    "options": [
      "A rectangle",
      "A triangle",
      "A capsule shape",
      "A circle"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Looking along the cylinder axis shows its circular end face.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-035",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "medium",
    "question": "A vertical cone is cut by a horizontal plane below its apex. What is the shape of the cross-section?",
    "options": [
      "A triangle",
      "A parabola",
      "A circle",
      "A rectangle"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A plane parallel to the circular base of a right cone cuts a smaller circle.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-036",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "hard",
    "question": "A unit cube occupies 0<=x,y,z<=1. The plane x+2y+3z=5/2 cuts the cube. How many vertices does the polygonal cross-section have?",
    "options": [
      "5",
      "4",
      "6",
      "3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The plane intersects five cube edges inside their endpoints, at (0,0,5/6), (0,1,1/6), (1/2,1,0), (1,0,1/2), and (1,3/4,0). These five boundary points form the cross-section, so the section is a pentagon with 5 vertices.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-037",
    "section": "Aptitude Test",
    "topic": "Textual 2D/3D visualization and views",
    "difficulty": "medium",
    "question": "Two congruent cuboids 4 by 2 by 2 are joined along a 2 by 2 end face to make one longer solid. What is the length of the resulting cuboid?",
    "options": [
      "4",
      "6",
      "10",
      "8"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Joining along the end faces places the 4-unit lengths end-to-end, giving length 8.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-038",
    "section": "Aptitude Test",
    "topic": "Scale, proportion, forms and transformations",
    "difficulty": "easy",
    "question": "On a map at scale 1:500, a 2 cm segment represents what actual distance?",
    "options": [
      "1 m",
      "10 m",
      "5 m",
      "100 m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "2 cm on the map represents 1000 cm=10 m.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-039",
    "section": "Aptitude Test",
    "topic": "Scale, proportion, forms and transformations",
    "difficulty": "medium",
    "question": "A rectangular plaza is enlarged from 20 m by 12 m to a similar rectangle whose longer side is 30 m. What is the new shorter side?",
    "options": [
      "18 m",
      "15 m",
      "20 m",
      "24 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The linear scale factor is 30/20=1.5, so the shorter side is 12*1.5=18 m.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-040",
    "section": "Aptitude Test",
    "topic": "Scale, proportion, forms and transformations",
    "difficulty": "easy",
    "question": "A 1:50 model shows a column 8 cm high. What is its actual height?",
    "options": [
      "4 m",
      "0.4 m",
      "8 m",
      "40 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "8 cm*50=400 cm=4 m.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-041",
    "section": "Aptitude Test",
    "topic": "Scale, proportion, forms and transformations",
    "difficulty": "medium",
    "question": "If all dimensions of a cuboid are reduced to 80% of their original values, what fraction of the original volume remains?",
    "options": [
      "0.64",
      "0.512",
      "0.8",
      "0.4096"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Volume scales with the cube of the linear factor: 0.8^3=0.512.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-042",
    "section": "Aptitude Test",
    "topic": "Scale, proportion, forms and transformations",
    "difficulty": "hard",
    "question": "On a 1:500 site model, a rectangular courtyard measures 6 cm by 4 cm and is surrounded by a uniform path 0.5 cm wide. In a revision, the actual courtyard area becomes 2.25 times as large while its aspect ratio is unchanged, but the actual path width stays the same. The revised design is modeled at 1:400. What is the total model area of the courtyard together with the path?",
    "options": [
      "84.375 cm^2",
      "218.75 cm^2",
      "109.375 cm^2",
      "87.5 cm^2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The original courtyard is 30 m by 20 m and the actual path width is 2.5 m. Multiplying courtyard area by 2.25 while keeping the aspect ratio multiplies each courtyard dimension by 1.5, giving 45 m by 30 m. With the same 2.5 m path on all sides, the outer size is 50 m by 35 m. At 1:400 these become 12.5 cm by 8.75 cm, so the model area is 12.5 x 8.75 = 109.375 cm^2.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-20"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-043",
    "section": "Aptitude Test",
    "topic": "Scale, proportion, forms and transformations",
    "difficulty": "easy",
    "question": "A point at (2,3) is translated 4 units east and 1 unit south. What are its new coordinates?",
    "options": [
      "(6,4)",
      "(-2,2)",
      "(3,6)",
      "(6,2)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Translation adds (4,-1), so (2,3) becomes (6,2).",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-044",
    "section": "Aptitude Test",
    "topic": "Scale, proportion, forms and transformations",
    "difficulty": "medium",
    "question": "A 4 cm by 6 cm rectangle is enlarged about its centre by scale factor 1.5. What are the new side lengths?",
    "options": [
      "6 cm by 9 cm",
      "4 cm by 9 cm",
      "6 cm by 6 cm",
      "8 cm by 12 cm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Uniform enlargement multiplies each side by 1.5, giving 6 cm and 9 cm.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-045",
    "section": "Aptitude Test",
    "topic": "Scale, proportion, forms and transformations",
    "difficulty": "hard",
    "question": "A solid model is an 8 cm by 8 cm by 4 cm rectangular prism with a cylindrical hole of radius 2 cm drilled straight through the 4 cm thickness. The entire model is then enlarged uniformly by linear scale factor 3/2. What is the volume of the enlarged model?",
    "options": [
      "864-36pi cm^3",
      "864-54pi cm^3",
      "576-36pi cm^3",
      "1296-81pi cm^3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The original prism volume is 8x8x4=256 cm^3. The cylindrical hole volume is pi(2^2)(4)=16pi cm^3, so original material volume is 256-16pi. Uniform enlargement by 3/2 multiplies volume by (3/2)^3=27/8. Thus the enlarged volume is (256-16pi)(27/8)=864-54pi cm^3.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-046",
    "section": "Aptitude Test",
    "topic": "Scale, proportion, forms and transformations",
    "difficulty": "medium",
    "question": "A regular polygon is rotated about its centre through 60 degrees and exactly coincides with itself. Which polygon can satisfy this as its smallest positive rotational symmetry angle?",
    "options": [
      "Square",
      "Regular pentagon",
      "Equilateral triangle",
      "Regular hexagon"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A regular n-gon has smallest rotational symmetry angle 360/n. Setting 360/n=60 gives n=6.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-047",
    "section": "Aptitude Test",
    "topic": "Scale, proportion, forms and transformations",
    "difficulty": "easy",
    "question": "At a drawing scale where 5 mm represents 1 m, what actual length is represented by 35 mm?",
    "options": [
      "5 m",
      "6 m",
      "35 m",
      "7 m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "35/5=7 scale units, each representing 1 m.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-048",
    "section": "Aptitude Test",
    "topic": "Analytical reasoning and mental ability",
    "difficulty": "easy",
    "question": "What is the next term in 1, 4, 9, 16, 25, __?",
    "options": [
      "36",
      "30",
      "32",
      "49"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The sequence is the squares 1^2,2^2,3^2,4^2,5^2, so the next term is 6^2=36.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-049",
    "section": "Aptitude Test",
    "topic": "Analytical reasoning and mental ability",
    "difficulty": "medium",
    "question": "Four sites W, X, Y and Z lie on a straight road in that order or reverse order. X is east of W, Y is east of X, and Z is west of W. Which site is farthest east?",
    "options": [
      "W",
      "X",
      "Z",
      "Y"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The relations force Z<W<X<Y from west to east, so Y is farthest east.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-050",
    "section": "Aptitude Test",
    "topic": "Analytical reasoning and mental ability",
    "difficulty": "medium",
    "question": "All plazas are open spaces. Some open spaces are shaded. Which statement is logically guaranteed?",
    "options": [
      "Some plazas are shaded",
      "No plaza is shaded",
      "Every plaza is an open space",
      "Every shaded space is a plaza"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Only the first relation is given universally; the overlap between plazas and shaded spaces is not determined.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-051",
    "section": "Aptitude Test",
    "topic": "Analytical reasoning and mental ability",
    "difficulty": "hard",
    "question": "Four design teams A, B, C and D occupy the North, East, South and West plots, one team per plot. Each team uses a different facade colour: Red, Blue, Green or Yellow. C is opposite A. B is immediately clockwise from A. D is on the West plot. The Blue facade is on the plot immediately clockwise from the Red facade. C uses neither Yellow nor Blue. D uses neither Red nor Green. B does not use Red. A uses neither Green nor Yellow. Which team uses the Blue facade?",
    "options": [
      "D",
      "A",
      "C",
      "B"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Because D is West, the position rules force A North, B East and C South. A can only be Red or Blue. If A were Blue, the Red facade would have to be West so that Blue is immediately clockwise from Red, but D cannot use Red. Therefore A is Red and the immediately clockwise East plot is Blue. Team B is on East, so B uses Blue.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-20"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-052",
    "section": "Aptitude Test",
    "topic": "Analytical reasoning and mental ability",
    "difficulty": "easy",
    "question": "A walker faces west and turns left once. Which direction is the walker now facing?",
    "options": [
      "North",
      "East",
      "South",
      "West"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A left turn from west points south.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-053",
    "section": "Aptitude Test",
    "topic": "Analytical reasoning and mental ability",
    "difficulty": "medium",
    "question": "In a code, each vowel is replaced by the next vowel cyclically A->E->I->O->U->A while consonants stay unchanged. How is FORM coded?",
    "options": [
      "FARM",
      "FURM",
      "FIRM",
      "FURO"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Only O changes, and O maps to U, so FORM becomes FURM.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-054",
    "section": "Aptitude Test",
    "topic": "Analytical reasoning and mental ability",
    "difficulty": "medium",
    "question": "Two alarms ring every 14 minutes and every 35 minutes. If they ring together at noon, after how many minutes do they next ring together?",
    "options": [
      "49",
      "56",
      "105",
      "70"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "LCM(14,35)=70.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-055",
    "section": "Aptitude Test",
    "topic": "Analytical reasoning and mental ability",
    "difficulty": "hard",
    "question": "Three switches P, Q and R obey: if P is on then Q is off; if Q is off then R is on; and R is off. Which conclusion follows?",
    "options": [
      "P is on",
      "Q is off",
      "Q and R are both on",
      "P is off"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Since R is off, the implication Q off -> R on means Q cannot be off, so Q is on. If P were on, Q would be off, contradiction. Therefore P is off.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-056",
    "section": "Aptitude Test",
    "topic": "Analytical reasoning and mental ability",
    "difficulty": "easy",
    "question": "All plazas are public spaces, and no private yard is a public space. Which statement must be true?",
    "options": [
      "Every public space is a plaza",
      "Some private yards are plazas",
      "No plaza is a private yard",
      "Every private yard is a plaza"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Every plaza is a public space, while no private yard is a public space. Therefore no plaza can be a private yard.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-057",
    "section": "Aptitude Test",
    "topic": "Analytical reasoning and mental ability",
    "difficulty": "medium",
    "question": "P is taller than Q. R is shorter than Q. S is taller than P. Which person is definitely second tallest among these four?",
    "options": [
      "Q",
      "R",
      "P",
      "S"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The order is S>P>Q>R, so P is second tallest.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-058",
    "section": "Aptitude Test",
    "topic": "Architecture, build-environment, materials, objects and textures",
    "difficulty": "easy",
    "question": "Which structural element primarily transfers a building load vertically toward its foundation?",
    "options": [
      "Beam",
      "Column",
      "Window sill",
      "Roof tile"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Columns primarily carry vertical loads down to lower supports or foundations.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-059",
    "section": "Aptitude Test",
    "topic": "Architecture, build-environment, materials, objects and textures",
    "difficulty": "medium",
    "question": "A cavity wall includes an air gap between two masonry leaves. One common performance purpose of the gap is to do what?",
    "options": [
      "Make the wall behave as a single solid stone block",
      "Reduce moisture transfer and improve thermal resistance",
      "Replace all structural foundations",
      "Increase direct rain penetration"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The cavity interrupts moisture paths and adds thermal resistance.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-060",
    "section": "Aptitude Test",
    "topic": "Architecture, build-environment, materials, objects and textures",
    "difficulty": "easy",
    "question": "Which material is produced by firing shaped clay units at high temperature?",
    "options": [
      "Structural steel",
      "Glass fibre",
      "Timber",
      "Brick"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Conventional burnt-clay bricks are shaped from clay and fired.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-061",
    "section": "Aptitude Test",
    "topic": "Architecture, build-environment, materials, objects and textures",
    "difficulty": "medium",
    "question": "Why is reinforcement commonly placed in the tensile zone of a reinforced-concrete beam?",
    "options": [
      "Concrete cannot carry compression",
      "Concrete is weak in tension compared with steel",
      "Steel has no tensile strength",
      "Reinforcement is used only for colour"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Steel reinforcement supplements concrete where tensile stresses occur because concrete is relatively weak in tension.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-062",
    "section": "Aptitude Test",
    "topic": "Architecture, build-environment, materials, objects and textures",
    "difficulty": "medium",
    "question": "For a layered wall, thermal resistance is R=t/k, where t is thickness in metres and k is thermal conductivity. Ignore surface resistances. Wall A has 0.20 m brick with k=0.80 followed by 0.05 m insulation with k=0.05. Wall B has 0.15 m concrete with k=1.50 followed by 0.08 m insulation with k=0.04. Which statement is correct?",
    "options": [
      "Wall A has the lower U-value, about 0.48 W/(m^2 K)",
      "Wall B has the lower U-value, about 0.48 W/(m^2 K)",
      "Both walls have the same U-value, about 0.80 W/(m^2 K)",
      "Wall B has the lower U-value, about 0.80 W/(m^2 K)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Wall A has R=0.20/0.80+0.05/0.05=1.25, so U=1/R=0.80. Wall B has R=0.15/1.50+0.08/0.04=2.10, so U is about 0.476. Thus Wall B has the lower U-value, about 0.48 W/(m^2 K).",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-063",
    "section": "Aptitude Test",
    "topic": "Architecture, build-environment, materials, objects and textures",
    "difficulty": "easy",
    "question": "What is the primary purpose of a building foundation?",
    "options": [
      "Provide daylight to rooms",
      "Decorate the roof edge",
      "Replace all wall finishes",
      "Transfer structural loads safely to the ground"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A foundation spreads and transfers building loads to supporting soil or rock.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-064",
    "section": "Aptitude Test",
    "topic": "Architecture, build-environment, materials, objects and textures",
    "difficulty": "medium",
    "question": "Which finish would generally produce the strongest specular reflection?",
    "options": [
      "A rough stone surface",
      "A highly polished smooth surface",
      "Unfinished coarse concrete",
      "A deep fibrous mat"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Smooth polished surfaces reflect incident light more directionally, producing stronger specular reflection.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-065",
    "section": "Aptitude Test",
    "topic": "Architecture, build-environment, materials, objects and textures",
    "difficulty": "easy",
    "question": "Which opening is located in a roof rather than a wall?",
    "options": [
      "Door jamb",
      "Window sill",
      "Skylight",
      "Plinth"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A skylight is a glazed opening in a roof or overhead surface.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-066",
    "section": "Aptitude Test",
    "topic": "Plan, elevation and spatial-composition reasoning",
    "difficulty": "easy",
    "question": "A plan is oriented with north at the top. A room lies directly to the left of a corridor. Which cardinal direction is the room from the corridor?",
    "options": [
      "East",
      "North",
      "South",
      "West"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Left on a north-up plan corresponds to west.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-067",
    "section": "Aptitude Test",
    "topic": "Plan, elevation and spatial-composition reasoning",
    "difficulty": "medium",
    "question": "Three spaces lie in sequence from south to north: Lobby, Gallery, Court. A visitor enters from the south. Which space is crossed immediately before the Court?",
    "options": [
      "Lobby",
      "An exterior yard",
      "Gallery",
      "No space"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The sequence is Lobby, then Gallery, then Court.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-068",
    "section": "Aptitude Test",
    "topic": "Plan, elevation and spatial-composition reasoning",
    "difficulty": "medium",
    "question": "A rectangular plan measures 12 m east-west and 7 m north-south. A point is at the northeast corner. Which two boundary directions meet at that point?",
    "options": [
      "South and west",
      "North and east",
      "North and west",
      "South and east"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The northeast corner lies where the north and east boundaries meet.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-069",
    "section": "Aptitude Test",
    "topic": "Plan, elevation and spatial-composition reasoning",
    "difficulty": "hard",
    "question": "Block A has a rectangular plan 8 m by 6 m and height 4 m. Block B has plan 4 m by 3 m and height 7 m. Block B is attached to Block A along its entire 3 m side. What is the total exposed vertical wall area of the combined building, ignoring openings?",
    "options": [
      "174 m^2",
      "180 m^2",
      "192 m^2",
      "186 m^2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "If separate, the vertical wall areas are 2(8+6)x4=112 m^2 and 2(4+3)x7=98 m^2. Along the 3 m shared side, the overlapping wall area up to 4 m height is internal and was counted on both blocks, so subtract 2x3x4=24 m^2. Total exposed wall area is 112+98-24=186 m^2.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-070",
    "section": "Aptitude Test",
    "topic": "Plan, elevation and spatial-composition reasoning",
    "difficulty": "easy",
    "question": "A door is placed in the centre of the west wall of a room. From the room centre, the door lies in which direction?",
    "options": [
      "East",
      "North",
      "West",
      "South"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The door lies directly west of the centre.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-071",
    "section": "Aptitude Test",
    "topic": "Plan, elevation and spatial-composition reasoning",
    "difficulty": "medium",
    "question": "A rectangular building is 9 m wide and 5 m high on its south facade. Ignoring openings, what rectangular area is represented by that simple south elevation?",
    "options": [
      "45 m^2",
      "28 m^2",
      "40 m^2",
      "90 m^2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The elevation rectangle has area 9*5=45 m^2.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-072",
    "section": "Aptitude Test",
    "topic": "Plan, elevation and spatial-composition reasoning",
    "difficulty": "hard",
    "question": "A U-shaped plan has vertices, in order, (0,0), (12,0), (12,9), (8,9), (8,4), (4,4), (4,9), (0,9). Exterior walls are 3 m high. Six exterior windows are each 1.5 m by 1.2 m and two exterior doors are each 1 m by 2.1 m. What is the net exterior wall area after subtracting these openings?",
    "options": [
      "138.0 m^2",
      "141.0 m^2",
      "146.4 m^2",
      "156.0 m^2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The polygon perimeter is 12+9+4+5+4+5+4+9=52 m, so gross wall area is 52x3=156 m^2. Window area is 6x1.5x1.2=10.8 m^2 and door area is 2x1x2.1=4.2 m^2. Net wall area is 156-10.8-4.2=141.0 m^2.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-073",
    "section": "Aptitude Test",
    "topic": "Plan, elevation and spatial-composition reasoning",
    "difficulty": "easy",
    "question": "In an elevation, a horizontal line at the bottom of a wall opening most naturally marks which window feature?",
    "options": [
      "Sill",
      "Ridge",
      "Footing toe",
      "Parapet cap only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The sill forms the lower horizontal boundary of a window opening.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-074",
    "section": "Aptitude Test",
    "topic": "Plan, elevation and spatial-composition reasoning",
    "difficulty": "medium",
    "question": "Two 3 m by 5 m rooms share their full 5 m wall and lie side-by-side. What is the overall plan dimension perpendicular to the shared 5 m wall?",
    "options": [
      "3 m",
      "5 m",
      "10 m",
      "6 m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Each room extends 3 m perpendicular to the shared wall, so side-by-side they span 3+3=6 m.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-075",
    "section": "Aptitude Test",
    "topic": "Plan, elevation and spatial-composition reasoning",
    "difficulty": "medium",
    "question": "A corridor runs east-west. A room opens from the north side of the corridor. A person leaves the corridor through that door. In which direction do they initially move?",
    "options": [
      "South",
      "North",
      "East",
      "West"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The room is on the north side, so crossing its door from the corridor moves north.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Aptitude Test syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-076",
    "section": "Planning",
    "topic": "Planning: General Awareness, cities, development and government programs",
    "difficulty": "easy",
    "question": "The Delhi Development Authority was created under which legislation?",
    "options": [
      "Town and Country Planning Act, 1971",
      "Delhi Development Act, 1957",
      "National Capital Region Planning Board Act, 1985",
      "Real Estate Regulation Act, 2016"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "DDA states that it was created in 1957 under the provisions of the Delhi Development Act.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest planning question; factual premise verified against the cited official government source",
      "url": "https://www.dda.gov.in/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-077",
    "section": "Planning",
    "topic": "Planning: General Awareness, cities, development and government programs",
    "difficulty": "easy",
    "question": "Which Union ministry lists the Smart Cities Mission among its urban schemes and services?",
    "options": [
      "Ministry of Housing and Urban Affairs",
      "Ministry of Rural Development",
      "Ministry of Agriculture and Farmers Welfare",
      "Ministry of Culture"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The Smart Cities Mission is listed among the schemes and services of the Ministry of Housing and Urban Affairs.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest planning question; factual premise verified against the cited official government source",
      "url": "https://www.mohua.gov.in/offerings",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-078",
    "section": "Planning",
    "topic": "Planning: General Awareness, cities, development and government programs",
    "difficulty": "easy",
    "question": "PM SVANidhi is primarily associated with supporting which urban livelihood group?",
    "options": [
      "Airline pilots",
      "Large industrial exporters",
      "University faculty",
      "Street vendors"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "MoHUA describes PM SVANidhi as a scheme supporting street vendors through credit and related measures.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest planning question; factual premise verified against the cited official government source",
      "url": "https://stats.mohua.gov.in/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-079",
    "section": "Planning",
    "topic": "Planning: General Awareness, cities, development and government programs",
    "difficulty": "easy",
    "question": "Pradhan Mantri Awas Yojana - Urban is principally concerned with which urban need?",
    "options": [
      "Inter-state river navigation",
      "Housing",
      "Crop insurance",
      "Defence procurement"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "PMAY-U is the Ministry of Housing and Urban Affairs mission focused on urban housing.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest planning question; factual premise verified against the cited official government source",
      "url": "https://www.mohua.gov.in/offerings/schemes-and-services/details/pradhan-mantri-awas-yojana-urban-MjNzYjMtQWa",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-080",
    "section": "Planning",
    "topic": "Planning: General Awareness, cities, development and government programs",
    "difficulty": "medium",
    "question": "What does AMRUT stand for in the urban-development mission AMRUT 2.0?",
    "options": [
      "Advanced Mission for Regional Urban Transit",
      "Atal Mission for Rejuvenation and Urban Transformation",
      "Atal Model for Rural Utility Transformation",
      "Administrative Mission for Urban Revenue and Taxation"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "MoHUA lists AMRUT 2.0 as the Atal Mission for Rejuvenation and Urban Transformation.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest planning question; factual premise verified against the cited official government source",
      "url": "https://www.mohua.gov.in/offerings",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-081",
    "section": "Planning",
    "topic": "Planning: General Awareness, cities, development and government programs",
    "difficulty": "medium",
    "question": "According to DDA's planning material, which Master Plan was the first step toward modern planning of Delhi and was promulgated in 1962?",
    "options": [
      "Master Plan for Delhi 1981",
      "Master Plan for Delhi 2001",
      "Master Plan for Delhi 1962",
      "Draft Master Plan for Delhi 2041"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "DDA's Master Plan page identifies MPD-1962 as the first step toward modern planning in India and states that it was promulgated in 1962.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest planning question; factual premise verified against the cited official government source",
      "url": "https://dda.gov.in/master-plan",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-082",
    "section": "Planning",
    "topic": "Planning: General Awareness, cities, development and government programs",
    "difficulty": "hard",
    "question": "Which option correctly groups three features that MoHUA associates with the National Urban Digital Mission (NUDM)?",
    "options": [
      "Shared digital infrastructure, reusable digital building blocks, and common standards for urban governance",
      "A national expressway grid, crop procurement centres, and irrigation dams",
      "Only private housing subsidies, land auctions, and building permits",
      "Rural farm mechanization, fertilizer distribution, and crop insurance"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "MoHUA describes NUDM as shared digital infrastructure built as a public good, providing foundational digital building blocks, platforms, standards, specifications and frameworks for the urban ecosystem.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest planning question; factual premise verified against the cited official government source",
      "url": "https://www.mohua.gov.in/ministry/our-division/details/national-urban-digital-mission-nudm-YjNyMzMtQWa",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-083",
    "section": "Planning",
    "topic": "Planning: Social Sciences",
    "difficulty": "easy",
    "question": "In a federal political system, constitutional powers are characteristically divided between which levels?",
    "options": [
      "A central government and constituent regional governments",
      "Only municipal wards",
      "Only courts and private firms",
      "Only political parties"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Federalism divides authority constitutionally between a national level and constituent state or regional levels.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Planning syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-084",
    "section": "Planning",
    "topic": "Planning: Social Sciences",
    "difficulty": "easy",
    "question": "Which activity belongs to the primary sector of an economy?",
    "options": [
      "Manufacturing bicycles",
      "Operating a bank",
      "Writing software for clients",
      "Cultivating wheat"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The primary sector directly uses natural resources; agriculture is a primary-sector activity.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Planning syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-085",
    "section": "Planning",
    "topic": "Planning: Social Sciences",
    "difficulty": "easy",
    "question": "Which resource is renewable on a human time scale when managed sustainably?",
    "options": [
      "Solar energy",
      "Coal",
      "Petroleum",
      "Natural gas"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Solar energy is continuously replenished, unlike fossil fuels.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Planning syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-086",
    "section": "Planning",
    "topic": "Planning: Social Sciences",
    "difficulty": "easy",
    "question": "Urbanization refers most directly to which process?",
    "options": [
      "Decline of all transport networks",
      "Conversion of every village into farmland",
      "Growth in the share or number of people living in urban settlements",
      "Elimination of service-sector employment"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Urbanization concerns the increasing concentration of population in urban settlements.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Planning syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-087",
    "section": "Planning",
    "topic": "Planning: Social Sciences",
    "difficulty": "medium",
    "question": "Why is power-sharing among different social or territorial groups often defended in a democracy?",
    "options": [
      "It can reduce conflict and improve participation in collective decisions",
      "It guarantees that elections are unnecessary",
      "It removes all differences of interest",
      "It makes constitutions irrelevant"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Power-sharing can accommodate diversity and broaden participation rather than eliminating disagreement.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Planning syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-088",
    "section": "Planning",
    "topic": "Planning: Social Sciences",
    "difficulty": "medium",
    "question": "A city attracts factories, workers and transport investment, while its built-up area expands rapidly. Which historical process most directly connects these changes?",
    "options": [
      "Deindustrialization with population dispersal",
      "Industrialization accompanied by urban growth",
      "Subsistence isolation",
      "Complete absence of market exchange"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Industrialization commonly concentrates employment and infrastructure, promoting urban growth.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Planning syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-089",
    "section": "Planning",
    "topic": "Planning: Social Sciences",
    "difficulty": "medium",
    "question": "Which example best illustrates social exclusion in an urban setting?",
    "options": [
      "Residents choose among several bus routes",
      "A market has shops with different opening hours",
      "A group is systematically denied access to housing and services because of its social identity",
      "Two parks receive different rainfall"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Social exclusion involves systematic barriers that prevent groups from participating fully in social and economic life.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Planning syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-090",
    "section": "Planning",
    "topic": "Planning: Social Sciences",
    "difficulty": "hard",
    "question": "After a new rapid-transit station opens, a neighbourhood survey finds average commute time falling by 20%, nearby rents rising by 25%, and the share of low-income tenant households falling from 40% to 28%. Over the same period, citywide rents rise by 5%. Which conclusion is most defensible from these observations alone?",
    "options": [
      "The station certainly caused every low-income household that left the area to move",
      "The station produced only benefits because commute times fell",
      "Accessibility improved, while the rent and tenancy changes are consistent with displacement pressure, but the observations alone do not prove that the station caused every household change",
      "The citywide rent increase proves that the station had no local housing effect"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The data show improved accessibility and a much larger local rent increase than the citywide change, together with a falling low-income tenant share. That pattern is consistent with displacement pressure, but an observational before-after comparison does not establish that the station caused every household move.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Planning syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-091",
    "section": "Planning",
    "topic": "Planning: Thinking Skills",
    "difficulty": "easy",
    "question": "A map uses a scale of 1 cm = 500 m. Two points are 6 cm apart on the map. What is their ground distance?",
    "options": [
      "0.3 km",
      "3 km",
      "6 km",
      "30 km"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "6*500 m=3000 m=3 km.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Planning syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-092",
    "section": "Planning",
    "topic": "Planning: Thinking Skills",
    "difficulty": "easy",
    "question": "A planning table lists ward populations of 12,000, 15,000, 11,000 and 14,000. What is the largest ward population?",
    "options": [
      "11,000",
      "12,000",
      "14,000",
      "15,000"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The largest listed value is 15,000.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Planning syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-093",
    "section": "Planning",
    "topic": "Planning: Thinking Skills",
    "difficulty": "medium",
    "question": "A town has four bus stops along a straight north-south road: A is 2 km north of B, C is 3 km south of B, and D is 1 km north of C. How far is A from D?",
    "options": [
      "2 km",
      "3 km",
      "4 km",
      "6 km"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let B=0 km, north positive. Then A=2, C=-3 and D=-2. The distance from A to D is 4 km.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Planning syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-094",
    "section": "Planning",
    "topic": "Planning: Thinking Skills",
    "difficulty": "medium",
    "question": "A table gives annual park expenditure: Ward P 12 lakh, Q 18 lakh, R 15 lakh, S 25 lakh. What percentage of the total 70 lakh is spent in Ward S?",
    "options": [
      "About 35.7%",
      "25%",
      "30%",
      "40%"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "25/70*100 is approximately 35.7%.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Planning syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-095",
    "section": "Planning",
    "topic": "Planning: Thinking Skills",
    "difficulty": "medium",
    "question": "A rectangular plot is 80 m by 50 m. If 20% of its area is reserved for roads, how much area remains for other uses?",
    "options": [
      "800 m^2",
      "3000 m^2",
      "3200 m^2",
      "4000 m^2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Total area is 4000 m^2. Retaining 80% gives 3200 m^2.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Planning syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-096",
    "section": "Planning",
    "topic": "Planning: Thinking Skills",
    "difficulty": "medium",
    "question": "A survey finds that 60% of commuters use public transport. Among those public-transport users, 25% use the metro. What percentage of all commuters use the metro?",
    "options": [
      "15%",
      "10%",
      "25%",
      "35%"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "0.60*0.25=0.15, so 15% of all commuters use the metro.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Planning syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-097",
    "section": "Planning",
    "topic": "Planning: Thinking Skills",
    "difficulty": "medium",
    "question": "Read the statement: 'Adding a cycle lane reduced average car speed on one street, but total person-throughput increased because bicycle and bus use rose.' Which conclusion is directly supported?",
    "options": [
      "Lower car speed can coexist with higher total movement of people",
      "Every cycle lane always increases car speed",
      "Person-throughput depends only on private cars",
      "Bus and bicycle use necessarily fall after a cycle lane is added"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The statement explicitly reports lower car speed together with higher total person-throughput due to other modes.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Planning syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-098",
    "section": "Planning",
    "topic": "Planning: Thinking Skills",
    "difficulty": "medium",
    "question": "The mean daily water use of five households is 480 litres. Four households use 400, 450, 500 and 550 litres. How much does the fifth use?",
    "options": [
      "450 litres",
      "480 litres",
      "500 litres",
      "600 litres"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The total for five households is 5*480=2400 litres. The four known values sum to 1900, leaving 500.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Planning syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-099",
    "section": "Planning",
    "topic": "Planning: Thinking Skills",
    "difficulty": "medium",
    "question": "A route goes 3 km east, 4 km north, then 3 km west. Where is the endpoint relative to the start?",
    "options": [
      "4 km south",
      "6 km east",
      "4 km north",
      "10 km north"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The east and west movements cancel, leaving a net displacement of 4 km north.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Planning syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "jee-main-2026-paper2b-bplanning-full-01-100",
    "section": "Planning",
    "topic": "Planning: Thinking Skills",
    "difficulty": "medium",
    "question": "A city may choose projects A, B, C and D. Their cost-benefit pairs are A=(30,50), B=(25,45), C=(40,70), D=(20,32). The budget is 70. Project C may be chosen only if A is also chosen, and B and D cannot both be chosen. Which feasible choice gives the greatest total benefit?",
    "options": [
      "A and B",
      "A and C",
      "A and D",
      "B and D"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A+B costs 55 and gives 95 benefit. A+C is allowed, exactly uses the budget 70 and gives 120 benefit. A+D costs 50 and gives 82. B+D is not allowed. Therefore A+C gives the greatest feasible benefit.",
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to the official JEE Main 2026 Paper 2 Planning syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf",
      "checkedOn": "2026-08-19"
    }
  }
];
