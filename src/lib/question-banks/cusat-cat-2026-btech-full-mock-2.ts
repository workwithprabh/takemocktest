import type { Question } from '../questions';

// Frozen Main Brain handoff content, integrated mechanically on 8 September
// 2026. CUSAT CAT 2026 Test Code 101, 225 questions across the official three sections.
// Records are copied field-for-field from the approved package; stems,
// options, answer keys, explanations, sections, difficulty, marking and
// source metadata are not rewritten here.

export const CUSAT_CAT_2026_BTECH_FULL_MOCK_2: Question[] = [
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-001",
    "section": "Mathematics",
    "topic": "Sets",
    "difficulty": "medium",
    "question": "Let U={1,2,…,30}. Let A be the multiples of 4 in U and B the integers in U that leave remainder 1 when divided by 3. How many elements are in the symmetric difference A △ B?",
    "options": [
      "8",
      "11",
      "10",
      "14"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A has 7 elements and B has 10. Their intersection is {4,16,28}, so |A△B|=7+10−2·3=11.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-002",
    "section": "Mathematics",
    "topic": "Polynomials",
    "difficulty": "medium",
    "question": "A monic cubic P(x) has P(0)=6 and zeros at x=1 and x=2. Its third zero is real. What is P(3)?",
    "options": [
      "10",
      "14",
      "16",
      "12"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Write P(x)=(x−1)(x−2)(x−r). Since P(0)=(-1)(-2)(-r)=-2r=6, r=−3. Hence P(3)=2·1·6=12.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-003",
    "section": "Mathematics",
    "topic": "Functions",
    "difficulty": "medium",
    "question": "For f(x)=(x−1)/(x+2), x≠−2, let g=f⁻¹. What is g(1/4)+g(−1/2)?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Solving y=(x−1)/(x+2) gives g(y)=(1+2y)/(1−y). Thus g(1/4)=2 and g(−1/2)=0, so the sum is 2.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-004",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "medium",
    "question": "The complex number z satisfies (1+i)z=5+i. What is (Re z)²−Im z?",
    "options": [
      "5",
      "7",
      "11",
      "13"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "z=(5+i)/(1+i)=3−2i. Therefore (Re z)²−Im z=9−(−2)=11.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-005",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "hard",
    "question": "A monic quadratic Q satisfies Q(1)=6 and Q(3)=2. If its roots are α and β, what is αβ?",
    "options": [
      "8",
      "10",
      "11",
      "12"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Write Q(x)=x^2+px+c. The conditions give p+c=5 and 3p+c=-7, so p=-6 and c=11. For a monic quadratic, αβ=c=11.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-006",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "medium",
    "question": "For q(x)=x²−kx+12, suppose q(1)=q(5). What is k plus the product of the roots of q(x)=0?",
    "options": [
      "12",
      "16",
      "20",
      "18"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "q(1)=13−k and q(5)=37−5k. Equality gives k=6. The root product is 12, so the requested sum is 18.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-007",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "medium",
    "question": "A sequence begins with a₁=4 and satisfies aₙ₊₁−aₙ=2n+(−1)ⁿ for n≥1. What is a₆?",
    "options": [
      "29",
      "31",
      "35",
      "33"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The first five increments are 1,5,5,9,9, whose sum is 29. Hence a₆=4+29=33.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-008",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "A 2×2 matrix A has trace(A)=5 and det(A)=6. Let B=A−I. What is det(B)+trace(A²)?",
    "options": [
      "11",
      "13",
      "15",
      "17"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a 2×2 matrix, det(A−I)=detA−traceA+1=6−5+1=2. Also trace(A²)=(traceA)²−2detA=25−12=13. The required sum is 15.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-009",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "hard",
    "question": "The sum of the first n terms of a sequence is Sₙ=n³+2n. What is a₈−a₃?",
    "options": [
      "144",
      "156",
      "162",
      "150"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "aₙ=Sₙ−Sₙ₋₁=3n²−3n+3. Thus a₈=171 and a₃=21, giving 150.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-010",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "hard",
    "question": "Four positive numbers form a geometric progression. The first is 2 and the fourth is 54. What is the geometric mean of all four terms?",
    "options": [
      "3√3",
      "9√3",
      "6√3",
      "12√3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The ratio is 3, so the terms are 2,6,18,54. Their product is 11664=6⁴·9, and the fourth root is 6√3.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-011",
    "section": "Mathematics",
    "topic": "Functions and Optimization",
    "difficulty": "medium",
    "question": "For real x define u=|x−1|+|x−5| and S=u²−6u. What is the minimum possible value of S?",
    "options": [
      "−12",
      "−10",
      "−8",
      "−6"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For every real x, u≥4, with u=4 for 1≤x≤5. Since S=u²−6u has derivative 2u−6>0 for u≥4, its minimum occurs at u=4. Thus S=16−24=−8.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-012",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "hard",
    "question": "The coefficient of x³ in (1+x)⁸−λx(1+x)⁵ is zero. What is 5λ?",
    "options": [
      "14",
      "42",
      "56",
      "28"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The coefficient is C(8,3)−λC(5,2)=56−10λ. Hence λ=28/5 and 5λ=28.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-013",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "hard",
    "question": "A 5-digit code is formed from digits 0,1,…,6 without repetition. It must contain 0 and exactly one of 5 or 6, and its first digit cannot be 0. How many such codes are possible?",
    "options": [
      "384",
      "768",
      "576",
      "960"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Choose the one high digit in 2 ways and three digits from {1,2,3,4} in 4 ways. For each chosen set, 5!−4!=96 orders do not begin with 0. Total=2·4·96=768.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-014",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "hard",
    "question": "Four distinct tasks are assigned to four different people chosen from six people A,B,C,D,E,F. C must receive a task, while A and B may not both be chosen. How many assignments are possible?",
    "options": [
      "120",
      "144",
      "192",
      "168"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "With C fixed, choose 3 of the other 5: C(5,3)=10, but 3 choices contain both A and B. Thus 7 person-sets are valid, and each admits 4! task assignments: 7·24=168.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-015",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "A bag contains red, blue and green tokens numbered 1 and 2, plus one additional red token numbered 3. Two tokens are drawn without replacement. Given that their labels sum to 3, what is the probability that the tokens have different colours?",
    "options": [
      "1/3",
      "2/3",
      "1/2",
      "3/4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A sum of 3 must pair a label-1 token with a label-2 token. There are 3·3=9 such unordered physical pairs. Three are same-colour pairs, so 6 of 9 are different-colour: 2/3.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-016",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "Two fair dice are rolled. Given that their product is even, what is the probability that their sum is at least 9?",
    "options": [
      "2/9",
      "4/9",
      "1/2",
      "1/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are 36−9=27 outcomes with even product. For sums 9,10,11,12, the qualifying even-product outcomes are 4+2+2+1=9. Thus the conditional probability is 9/27=1/3.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-017",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "medium",
    "question": "Vectors a and b satisfy a+b=(3,1) and a−b=(1,5). What is a·b?",
    "options": [
      "−2",
      "2",
      "−4",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using |a+b|²−|a−b|²=4a·b gives (10−26)/4=−4.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-018",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "hard",
    "question": "Let A=[[2,3],[1,2]] and suppose AX=[[7],[4]]. What is the sum of the two components of X?",
    "options": [
      "3",
      "2",
      "4",
      "5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Writing X=(x,y)^T gives 2x+3y=7 and x+2y=4. These yield y=1 and x=2, so x+y=3.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-019",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "hard",
    "question": "A chord of the circle (x−3)²+(y+2)²=25 lies on the line x+y=4. What is the square of the chord length?",
    "options": [
      "64",
      "82",
      "91",
      "100"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The centre-to-line distance is |3−2−4|/√2=3/√2. Hence chord²=4(r²−d²)=4(25−9/2)=82.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-020",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "The line through (2,−1) and (6,3) is reflected in the y-axis. What is the sum of the x-intercept and y-intercept of the reflected line?",
    "options": [
      "−3",
      "0",
      "6",
      "−6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The original line is y=x−3. Reflection in the y-axis gives y=−x−3, whose x- and y-intercepts are both −3, so their sum is −6.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-021",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "hard",
    "question": "Let A=(6,0), B=(0,4), and O=(0,0). Point P divides AB internally in the ratio AP:PB=2:1. If G is the centroid of triangle OPB, what is 9(x_G+y_G)?",
    "options": [
      "20",
      "24",
      "30",
      "26"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P=(2,8/3). The centroid of O,P,B is (2/3,20/9), so 9(x_G+y_G)=6+20=26.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-022",
    "section": "Mathematics",
    "topic": "Conic Sections",
    "difficulty": "medium",
    "question": "On the parabola y²=8x, take the point P with y=4. If F is the focus, what is PF plus the slope of the tangent at P?",
    "options": [
      "3",
      "5",
      "4",
      "6"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P=(2,4) and F=(2,0), so PF=4. Differentiating y²=8x gives dy/dx=4/y=1 at P. The sum is 5.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-023",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "hard",
    "question": "The diagonals of a parallelogram are p=(4,1,-1) and q=(2,-3,5). What is the area of the parallelogram?",
    "options": [
      "3√19",
      "6√19",
      "√57",
      "3√38"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The parallelogram area is one half of |p×q|. Here p×q=(2,-22,-14), whose magnitude is sqrt(684)=6√19. Therefore the area is 3√19; the other three options are distinct from this value.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-024",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "medium",
    "question": "A 4-digit code is formed from distinct digits chosen from {1,2,3,4,5,6,7}. The first digit must be odd and the last digit even. How many such codes are possible?",
    "options": [
      "120",
      "180",
      "210",
      "240"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Choose the first digit in 4 ways and the last digit in 3 ways. After those choices, the two middle positions are filled in order from the remaining 5 digits in 5×4 ways. Total=4×3×5×4=240.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-025",
    "section": "Mathematics",
    "topic": "Three-Dimensional Geometry",
    "difficulty": "hard",
    "question": "Find the shortest distance between the lines r=(1,-2,0)+t(2,4,-3) and r=(3,5,0)+s(-3,1,2).",
    "options": [
      "17/√38",
      "19/√38",
      "7/√19",
      "5√38/6"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let d1=(2,4,-3), d2=(-3,1,2), and Δ=(3,5,0)-(1,-2,0)=(2,7,0). Then d1×d2=(11,5,14), with magnitude 3√38, while |Δ·(d1×d2)|=|22+35|=57. Hence the shortest distance is 57/(3√38)=19/√38.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-026",
    "section": "Mathematics",
    "topic": "Differential Calculus",
    "difficulty": "medium",
    "question": "For f(x)=x³−2x²−5x+4, the tangent at x=3 meets the x-axis at P. What is x_P+f″(3)?",
    "options": [
      "86/5",
      "84/5",
      "88/5",
      "18"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f(3)=−2 and f′(3)=10, so the tangent is y+2=10(x−3). Setting y=0 gives x_P=16/5. Also f″(x)=6x−4, hence f″(3)=14. Therefore x_P+f″(3)=16/5+14=86/5.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-027",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "hard",
    "question": "Positive x and y satisfy x+2y=12. What is the maximum possible value of xy²?",
    "options": [
      "64",
      "48",
      "72",
      "96"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Set y=(12−x)/2. Then xy²=x(12−x)²/4, whose interior maximum occurs at x=4, y=4, giving 64.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-028",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "hard",
    "question": "A rectangle has constant area 48 cm². Its length is increasing at 2 cm/s. When its dimensions are 8 cm by 6 cm, at what rate is its perimeter changing?",
    "options": [
      "0 cm/s",
      "1 cm/s",
      "2 cm/s",
      "3 cm/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Area constancy gives 8(dw/dt)+6·2=0, so dw/dt=−1.5 cm/s. Thus dP/dt=2(2−1.5)=1 cm/s.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-029",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "medium",
    "question": "Let I=∫₀¹ (x³+1)/(x+1) dx. What is 6I?",
    "options": [
      "4",
      "5",
      "6",
      "3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Since (x³+1)/(x+1)=x²−x+1, I=1/3−1/2+1=5/6. Therefore 6I=5.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-030",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "medium",
    "question": "What is three times the area enclosed between y=x²−4x+3 and the x-axis from x=1 to x=3?",
    "options": [
      "2",
      "6",
      "4",
      "8"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The quadratic is nonpositive on [1,3]. Its signed integral there is −4/3, so the area is 4/3 and three times it is 4.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-031",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "hard",
    "question": "A positive solution satisfies dy/dx=2x(1+y) with y(0)=0. What is y(1)+1?",
    "options": [
      "e",
      "e−1",
      "e²",
      "2e"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Separating gives ln(1+y)=x². Hence 1+y=e^{x²}, so at x=1 the requested value is e.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-032",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "medium",
    "question": "For 0≤a≤1 let F(a)=∫₀¹ |x−a| dx. What is 8 times the minimum value of F(a)?",
    "options": [
      "1",
      "4",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "F(a)=a²/2+(1−a)²/2. This quadratic is minimized at a=1/2, where F=1/4. Therefore 8F_min=2.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-033",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "medium",
    "question": "A sequence satisfies a₁=1, a₂=4 and aₙ₊₂=3aₙ₊₁−2aₙ. What is a₅?",
    "options": [
      "34",
      "40",
      "52",
      "46"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a₃=10, a₄=22 and a₅=3·22−2·10=46.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-034",
    "section": "Mathematics",
    "topic": "Implicit Differentiation",
    "difficulty": "medium",
    "question": "The curve x²+xy+y²=7 passes through (1,2). What is dy/dx at that point?",
    "options": [
      "−5/4",
      "−1/2",
      "4/5",
      "−4/5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Differentiating gives 2x+y+x y′+2y y′=0, so y′=−(2x+y)/(x+2y). At (1,2), y′=−4/5.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-035",
    "section": "Mathematics",
    "topic": "Logarithms",
    "difficulty": "medium",
    "question": "Let a=log₂12 and b=log₂3. What is 2^(a−b)+(a−b)?",
    "options": [
      "4",
      "8",
      "6",
      "5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a−b=log₂(12/3)=log₂4=2. Therefore 2^(a−b)+(a−b)=2²+2=6.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-036",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "Let A=[[2,1],[0,2]]. What is trace(A⁴)+(A⁴)₁₂?",
    "options": [
      "48",
      "64",
      "80",
      "96"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For A=2I+N with N²=0, A⁴=16I+4·2³N=[[16,32],[0,16]]. Thus trace(A⁴)=32 and (A⁴)₁₂=32, giving 64.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-037",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "medium",
    "question": "A complex number z satisfies z+z̄=4, z z̄=13 and Im z>0. What is |(z−i)/(z+i)|²?",
    "options": [
      "2/5",
      "3/5",
      "1/2",
      "4/5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The conditions give Re z=2 and |z|²=13, so z=2+3i. Then |z−i|²=|2+2i|²=8 and |z+i|²=|2+4i|²=20. The required ratio is 8/20=2/5.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-038",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "An acute angle θ satisfies sinθ+cosθ=7/5. What is tanθ+cotθ?",
    "options": [
      "12/25",
      "25/12",
      "24/25",
      "7/5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Squaring gives 1+sin2θ=49/25, so sin2θ=24/25. Since tanθ+cotθ=1/(sinθ cosθ)=2/sin2θ, the value is 25/12.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-039",
    "section": "Mathematics",
    "topic": "Inverse Trigonometry",
    "difficulty": "medium",
    "question": "Let α=arctan(2/5) and β=arctan(1/3), both principal values. What is tan(α+β)?",
    "options": [
      "11/13",
      "13/11",
      "3/5",
      "5/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using tan(α+β)=(tanα+tanβ)/(1-tanα tanβ), we get (2/5+1/3)/(1-2/15)=(11/15)/(13/15)=11/13.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-040",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "question": "A dataset has mean 10 and variance 4. Every observation x is replaced by y=3x−5. What is the new mean plus the new variance?",
    "options": [
      "51",
      "61",
      "55",
      "65"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The mean becomes 3·10−5=25 and the variance becomes 3²·4=36. Their sum is 61.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-041",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "question": "Group A has 8 observations with mean 12 and Group B has 12 observations with mean 18. One observation equal to 20 is moved from B to A. What is the absolute difference between the new group totals?",
    "options": [
      "60",
      "100",
      "80",
      "120"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The new totals are 8·12+20=116 and 12·18−20=196. Their absolute difference is 80.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-042",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "P(A)=0.6, P(B)=0.5 and P(A∩B)=0.3. Given that at least one of A or B occurs, what is the probability that exactly one occurs?",
    "options": [
      "1/2",
      "5/8",
      "3/5",
      "3/4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P(A∪B)=0.8. Exactly one has probability 0.6+0.5−2(0.3)=0.5. Thus the conditional probability is 0.5/0.8=5/8.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-043",
    "section": "Mathematics",
    "topic": "Bayes Theorem",
    "difficulty": "hard",
    "question": "A monitoring system selects sensor S₁ 70% of the time and S₂ 30%. When no event is present, their false-alarm probabilities are 4% and 10% respectively. Given that a false alarm occurred, what is P(S₂)?",
    "options": [
      "3/10",
      "15/29",
      "7/29",
      "15/22"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The false-alarm contributions are 0.7·0.04=0.028 and 0.3·0.10=0.030. Hence P(S₂|false)=0.030/0.058=15/29.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-044",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "medium",
    "question": "The complex number z satisfies (z−1)/(z+1)=i. What is z^2026?",
    "options": [
      "1",
      "i",
      "−i",
      "−1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Solving z−1=i(z+1) gives z=i. Since 2026≡2 mod 4, i^2026=i²=−1.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-045",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "Let A=[[1,2],[2,1]] and B=A+2I. What is trace(B²)−det(B)?",
    "options": [
      "21",
      "19",
      "23",
      "25"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "B=[[3,2],[2,3]]. Then B²=[[13,12],[12,13]], so trace(B²)=26, while det(B)=9−4=5. Therefore the required value is 21.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-046",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "hard",
    "question": "A 7-step path is encoded by a string containing exactly four R moves and three U moves. How many such strings have neither the first two moves both U nor the last two moves both R?",
    "options": [
      "20",
      "22",
      "23",
      "25"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are C(7,3)=35 strings. If the first two are U, choose the remaining one U in 5 ways. If the last two are R, choose the three U positions among the first five in C(5,3)=10 ways. Both restrictions fail simultaneously in 3 strings. Inclusion–exclusion gives 35−5−10+3=23.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-047",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "hard",
    "question": "Three positive numbers form a geometric progression. The middle term is 8 and the sum of the first and third terms is 20. What is the sum of all three terms?",
    "options": [
      "24",
      "28",
      "30",
      "32"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "If the outer terms are u and v, then uv=8²=64 and u+v=20. Adding the middle term gives 28.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-048",
    "section": "Mathematics",
    "topic": "Circle",
    "difficulty": "hard",
    "question": "A circle has centre (2,1) and radius 3. From P=(6,4), tangents touch the circle at T₁ and T₂. What is the length T₁T₂?",
    "options": [
      "18/5",
      "4",
      "5",
      "24/5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "CP=5 and tangent length is 4. The chord of contact has length 2r·(tangent length)/CP=2·3·4/5=24/5.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-049",
    "section": "Mathematics",
    "topic": "Vectors and Linear Transformations",
    "difficulty": "medium",
    "question": "A linear map is T(x,y)=(x+2y, 3x−y). For u=(1,−1), let v=T(u). What is v·(1,2)?",
    "options": [
      "7",
      "5",
      "3",
      "9"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "T(1,−1)=(1−2,3+1)=(−1,4). Hence v·(1,2)=−1+8=7.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-050",
    "section": "Mathematics",
    "topic": "Relations",
    "difficulty": "medium",
    "question": "On the integers define aRb when a−b is divisible by 4. How many integers from 1 through 20 lie in the equivalence class of 7?",
    "options": [
      "4",
      "6",
      "7",
      "5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The class consists of integers congruent to 3 mod 4: 3,7,11,15,19, giving 5 members in the stated range.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-051",
    "section": "Mathematics",
    "topic": "Conditional Probability",
    "difficulty": "hard",
    "question": "A component comes from line A with probability 2/5 and line B with probability 3/5. Two independent tests are applied. For line A, their pass probabilities are 3/4 and 2/3; for line B, they are 1/2 and 1/3. Given that exactly one test passes, what is the probability the component came from line A?",
    "options": [
      "1/3",
      "3/8",
      "5/14",
      "2/5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For A, P(exactly one pass)=(3/4)(1/3)+(1/4)(2/3)=5/12, so P(A and E)=(2/5)(5/12)=1/6. For B, P(E)=(1/2)(2/3)+(1/2)(1/3)=1/2, so P(B and E)=(3/5)(1/2)=3/10. Thus P(A|E)=(1/6)/(1/6+3/10)=5/14.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-052",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "For the circle x²+y²−4x+6y−12=0, what is the power of the point P=(5,−1) with respect to the circle?",
    "options": [
      "−8",
      "−10",
      "−12",
      "−14"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The circle is (x−2)²+(y+3)²=25. For P=(5,−1), OP²=3²+2²=13, so power=OP²−r²=13−25=−12.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-053",
    "section": "Mathematics",
    "topic": "Conic Sections",
    "difficulty": "medium",
    "question": "For the ellipse x²/25+y²/9=1, two points have x=4. What is the distance between those two points?",
    "options": [
      "9/5",
      "12/5",
      "24/5",
      "18/5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At x=4, y²=9(1−16/25)=81/25, so y=±9/5. Their separation is 18/5.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-054",
    "section": "Mathematics",
    "topic": "Conic Sections",
    "difficulty": "hard",
    "question": "An ellipse centered at the origin has foci at (±5,0) and passes through (0,12). What is the length of a latus rectum?",
    "options": [
      "144/13",
      "288/13",
      "24",
      "312/13"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Because (0,12) lies on the minor axis, b=12. With focal distance c=5, a^2=b^2+c^2=144+25=169, so a=13. The latus-rectum length is 2b^2/a=288/13.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-055",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "For the upper-triangular matrix A=[[2,1],[0,3]], what is trace(A³)?",
    "options": [
      "27",
      "31",
      "35",
      "36"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The eigenvalues, and diagonal entries of every power, are powers of 2 and 3. Thus trace(A³)=2³+3³=8+27=35.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-056",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "Two distinct vertices of a regular hexagon are chosen uniformly. Given that the chosen vertices are not adjacent, what is the probability that they are opposite?",
    "options": [
      "1/6",
      "1/2",
      "1/3",
      "2/3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are C(6,2)=15 vertex pairs. Six are adjacent, leaving 9 nonadjacent pairs. Three pairs are opposite, so the conditional probability is 3/9=1/3.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-057",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "hard",
    "question": "A non-scalar 2×2 matrix A satisfies A²=3A−2I. What is trace(A⁴)?",
    "options": [
      "9",
      "17",
      "15",
      "25"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The polynomial has distinct roots 1 and 2, and a non-scalar 2×2 solution is diagonalizable with eigenvalues 1 and 2. Thus A⁴ has eigenvalues 1 and 16, so its trace is 17.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-058",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "medium",
    "question": "A complex number z satisfies |z−1|=|z+3| and Im z=2. What is Re(z²)−Im(z²)?",
    "options": [
      "−7",
      "−1",
      "7",
      "1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The locus condition gives Re z=−1, so z=−1+2i and z²=−3−4i. Hence Re(z²)−Im(z²)=−3−(−4)=1.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-059",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "medium",
    "question": "A sequence has a₁=1, a₂=2 and aₙ₊₂=aₙ₊₁+2aₙ+n for n≥1. What is a₅?",
    "options": [
      "24",
      "22",
      "20",
      "26"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a₃=2+2(1)+1=5, a₄=5+2(2)+2=11, and a₅=11+2(5)+3=24.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-060",
    "section": "Mathematics",
    "topic": "Functions",
    "difficulty": "hard",
    "question": "For x>0 define f(x)=(x²+4)/(x+1). What is the minimum value of f?",
    "options": [
      "√5−1",
      "2√5",
      "2(√5−1)",
      "√5+1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f′(x)=(x²+2x−4)/(x+1)², so the minimum occurs at x=√5−1. Since x²+2x=4 there, f=2x=2(√5−1).",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-061",
    "section": "Mathematics",
    "topic": "Functions",
    "difficulty": "medium",
    "question": "Let f(x)=x²−4x restricted to x≥2, so f is one-to-one. What is f⁻¹(5)+f⁻¹(0)?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "On x≥2, f(5)=5 and f(4)=0. Therefore f⁻¹(5)+f⁻¹(0)=5+4=9.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-062",
    "section": "Mathematics",
    "topic": "Polynomials",
    "difficulty": "hard",
    "question": "The polynomial P(x)=x⁴+a x²+b x+1 is divisible by x²+x+1. What is a+b?",
    "options": [
      "1",
      "−1",
      "2",
      "0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Modulo x²+x+1, x²=−x−1, x³=1 and x⁴=x. Thus P≡x+a(−x−1)+bx+1=(1−a+b)x+(1−a). Both coefficients vanish, giving a=1 and b=0. Hence a+b=1.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-063",
    "section": "Mathematics",
    "topic": "Functions",
    "difficulty": "hard",
    "question": "Define f(x)=1/(1−x) wherever it is defined. What is f(f(f(2)))?",
    "options": [
      "2",
      "−1",
      "1/2",
      "1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f(2)=−1, f(−1)=1/2, and f(1/2)=2.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-064",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "For a>0, the matrix [[a,2],[3,a−1]] is singular. What is its trace?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Singularity gives a(a−1)−6=0, so a=3 or −2. With a>0, a=3 and trace=a+(a−1)=5.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-065",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "hard",
    "question": "Six distinct people A,B,C,D,E,F are available for a 5-position row. Count arrangements in which either both A and B are absent, or both are present with exactly one occupied position between them.",
    "options": [
      "96",
      "144",
      "120",
      "168"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "If both A,B are absent, the other four are insufficient for 5 positions, so that case contributes 0. Both present: choose 3 of the other 4 in 4 ways; ordered A,B positions with one seat between give 2·3=6 choices; arrange the other 3 in 3!=6 ways. Total=4·6·6=144.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-066",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "hard",
    "question": "A 4-person team is chosen from 5 analysts and 4 engineers, with exactly 2 engineers. Analyst A and engineer E refuse to serve together. How many valid teams are possible?",
    "options": [
      "42",
      "54",
      "48",
      "60"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Without the conflict there are C(5,2)C(4,2)=60 teams. Invalid teams containing both A and E choose one more analyst from 4 and one more engineer from 3, giving 12. Thus 60−12=48.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-067",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "hard",
    "question": "Six distinct people sit around a round table. C must sit opposite D, and A must not sit adjacent to B. How many circular arrangements are possible?",
    "options": [
      "12",
      "16",
      "20",
      "24"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Fix C to remove rotations; D is then fixed opposite. The remaining four people have 4!=24 placements. A and B are adjacent only in the two available adjacent seat-pairs; including order and E,F placement gives 2·2·2=8 invalid arrangements. Hence 16 are valid.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-068",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "Two cards are drawn without replacement from cards numbered 1 through 8. Given that their sum is odd, what is the probability that their product is divisible by 4?",
    "options": [
      "1/4",
      "3/8",
      "1/2",
      "5/8"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "An odd sum requires one odd and one even card, giving 4·4=16 pairs. The product is divisible by 4 exactly when the even card is 4 or 8, giving 4·2=8 pairs. Probability=1/2.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-069",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "An integer is chosen uniformly from 1 to 60. Given that it is divisible by 4, what is the probability that its decimal digit sum is even?",
    "options": [
      "2/5",
      "1/2",
      "3/5",
      "2/3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The 15 multiples of 4 are 4,8,12,…,60. Nine have even digit sum: 4,8,20,24,28,40,44,48,60. Thus the conditional probability is 9/15=3/5.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-070",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "An acute angle θ satisfies tanθ=2/3. A second acute angle φ satisfies tanφ=1/4. What is tan(θ−φ)?",
    "options": [
      "5/14",
      "2/5",
      "7/10",
      "1/2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "tan(θ−φ)=(2/3−1/4)/(1+(2/3)(1/4))=(5/12)/(7/6)=5/14.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-071",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "Angles A and B satisfy tanA=2 and tanB=−1/3, with A+B in the principal interval where tangent is defined. What is tan(A+B)?",
    "options": [
      "1",
      "1/2",
      "3/2",
      "2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "tan(A+B)=(2−1/3)/(1+2/3)=(5/3)/(5/3)=1.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-072",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "An acute angle θ satisfies sinθ=5/13. Let A=secθ+tanθ and B=secθ−tanθ. What is A²+B²?",
    "options": [
      "25/12",
      "85/36",
      "13/6",
      "97/36"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For an acute angle, cosθ=12/13, so secθ=13/12 and tanθ=5/12. Hence A=18/12=3/2 and B=8/12=2/3. Therefore A²+B²=9/4+4/9=(81+16)/36=97/36.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-073",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "Acute angles A and B satisfy tanA=1/2 and tanB=1/3. What is sin(A+B)/cos(A−B)?",
    "options": [
      "5/7",
      "7/5",
      "1/2",
      "6/7"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Writing both numerator and denominator in terms of cosA cosB gives sin(A+B)=(tanA+tanB)cosAcosB=(5/6)C and cos(A−B)=(1+tanA tanB)C=(7/6)C. Their ratio is 5/7.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-074",
    "section": "Mathematics",
    "topic": "Trigonometric Equations",
    "difficulty": "medium",
    "question": "How many x in 0≤x<2π satisfy sin(3x)=sin x and also cos x<0?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "sin3x−sinx=2cos2x·sinx. Thus x=0,π or x=π/4,3π/4,5π/4,7π/4. Among these, cosx<0 at x=π,3π/4,5π/4, giving 3 solutions.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-075",
    "section": "Mathematics",
    "topic": "Functions",
    "difficulty": "hard",
    "question": "A differentiable one-to-one function satisfies f(1)=2 and f′(1)=4. What is (f⁻¹)′(2)?",
    "options": [
      "1/4",
      "1/2",
      "2",
      "4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For an inverse function, (f⁻¹)′(f(a))=1/f′(a). Thus (f⁻¹)′(2)=1/4.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-076",
    "section": "Mathematics",
    "topic": "Differentiation",
    "difficulty": "medium",
    "question": "A parametric curve is x=t²+1, y=t³−t. What is dy/dx at t=2?",
    "options": [
      "5/2",
      "3",
      "13/4",
      "11/4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "dy/dt=3t²−1=11 and dx/dt=2t=4 at t=2, so dy/dx=11/4.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-077",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "hard",
    "question": "For x>=0, f_a(x)=x^4-2a x^2+29 has a positive stationary point at x=sqrt(5). What is the minimum value of f_a on x>=0?",
    "options": [
      "4",
      "5",
      "9",
      "29"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f_a'(x)=4x(x^2-a). The positive stationary point is sqrt(a), so sqrt(a)=sqrt(5) gives a=5. Then f_a(x)=x^4-10x^2+29=(x^2-5)^2+4, whose minimum is 4.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-078",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "medium",
    "question": "Let I=∫₀¹ (3x²+2x)/(x³+x²+1) dx. What is eᴵ?",
    "options": [
      "e",
      "2",
      "e²",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The numerator is the derivative of x³+x²+1. Hence I=ln(x³+x²+1)|₀¹=ln3, so eᴵ=3.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-079",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "medium",
    "question": "Complex numbers z and w satisfy z+w=4+2i and z−w=2−4i. What is |zw|?",
    "options": [
      "5",
      "2√10",
      "8",
      "10"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Adding and subtracting the equations gives z=3−i and w=1+3i. Thus |z|=|w|=√10, so |zw|=|z||w|=10.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-080",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "hard",
    "question": "A population fraction y satisfies dy/dx=y(1−y) with y(0)=1/2. What is y(ln 3)?",
    "options": [
      "3/4",
      "1/2",
      "2/3",
      "4/5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The logistic solution with y(0)=1/2 is y=1/(1+e^{-x}). At x=ln3, e^{-x}=1/3, hence y=3/4.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-081",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "hard",
    "question": "What is the square of the shortest distance from Q=(1,3) to the line y=2x−1?",
    "options": [
      "4/5",
      "1/5",
      "2/5",
      "1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The line is 2x−y−1=0. Distance=|2−3−1|/√5=2/√5, whose square is 4/5.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-082",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "The lines y=2x+1 and y=−x+7 intersect at P. What is x_P+y_P?",
    "options": [
      "5",
      "6",
      "8",
      "7"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Equating gives 2x+1=−x+7, so x=2 and y=5. Their sum is 7.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-083",
    "section": "Mathematics",
    "topic": "Circle",
    "difficulty": "hard",
    "question": "Find the sum of the positive x- and y-intercepts of the radical axis of the circles x²+y²−4x=0 and x²+y²+2y−8=0.",
    "options": [
      "4",
      "6",
      "8",
      "10"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Subtracting the circle equations gives 2x+y−4=0. Its positive intercepts are 2 and 4, so their sum is 6.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-084",
    "section": "Mathematics",
    "topic": "Conic Sections",
    "difficulty": "medium",
    "question": "The tangent to the rectangular hyperbola xy=12 at P=(3,4) meets the coordinate axes at A and B. What is the area of triangle OAB?",
    "options": [
      "12",
      "24",
      "36",
      "48"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For xy=12, the tangent at (3,4) is 4x+3y=24. Its intercepts are 6 and 8, so the triangle area is (1/2)·6·8=24.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-085",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "hard",
    "question": "Let a=(1,2,λ) and b=(2,−1,1). If a·b=0, what is |a×b|²?",
    "options": [
      "24",
      "25",
      "30",
      "36"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Orthogonality gives 2−2+λ=0, so λ=0. Then |a×b|²=|a|²|b|²=5·6=30.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-086",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "hard",
    "question": "Two sides of a triangle from one vertex are a=(2,1,0) and b=(1,3,2). What is the square of the triangle’s area?",
    "options": [
      "45/4",
      "15/4",
      "25/4",
      "45/2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a×b=(2,−4,5), whose squared magnitude is 45. Triangle area is half the parallelogram area, so area²=45/4.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-087",
    "section": "Mathematics",
    "topic": "Three-Dimensional Geometry",
    "difficulty": "medium",
    "question": "What is the volume of the tetrahedron with vertices O=(0,0,0), A=(1,0,0), B=(0,2,0) and C=(0,0,3)?",
    "options": [
      "1",
      "2",
      "3",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Volume=|det(A,B,C)|/6=(1·2·3)/6=1.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-088",
    "section": "Mathematics",
    "topic": "Three-Dimensional Geometry",
    "difficulty": "medium",
    "question": "The plane through A=(1,0,0), B=(0,2,0) and C=(0,0,3) is Π. What is the perpendicular distance from P=(1,2,3) to Π?",
    "options": [
      "6/7",
      "12/7",
      "18/7",
      "2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The intercept form of Π is x+y/2+z/3=1, or 6x+3y+2z−6=0. At P the numerator of the distance formula is |6+6+6−6|=12, while √(6²+3²+2²)=7. The distance is 12/7.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-089",
    "section": "Mathematics",
    "topic": "Differential Calculus",
    "difficulty": "medium",
    "question": "For f(x)=x³−3x, what is the difference between the local maximum value and the local minimum value?",
    "options": [
      "4",
      "2",
      "6",
      "8"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f′(x)=3x²−3, so stationary points are x=−1 and x=1. f(−1)=2 is the local maximum and f(1)=−2 the local minimum. Their difference is 4.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-mathematics-090",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "hard",
    "question": "Five numbers in increasing order are 2,a,7,b,12. Their mean is 7 and b−a=4. What is ab?",
    "options": [
      "35",
      "45",
      "42",
      "54"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The sum is 35, so a+b=14. Together with b−a=4 this gives a=5,b=9, and ab=45.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-001",
    "section": "Physics",
    "topic": "Units and Measurements",
    "difficulty": "hard",
    "question": "Measured A=40±0.5 and B=10±0.2 in the same units. For R=(A+B)/(A−B), using maximum-error addition for sums/differences and fractional-error addition for a quotient, what is the approximate maximum percentage uncertainty in R?",
    "options": [
      "2.3%",
      "3.7%",
      "5.1%",
      "7.0%"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The numerator uncertainty is 0.7/50=1.4%; the denominator uncertainty is 0.7/30≈2.33%. Adding for the quotient gives about 3.73%, i.e. 3.7%.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-002",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "hard",
    "question": "A particle has velocity v(t)=3t²−12t+9 m/s for 0≤t≤3 s. What total distance does it travel in this interval?",
    "options": [
      "8 m",
      "4 m",
      "12 m",
      "16 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "v=3(t−1)(t−3), so motion reverses at t=1. The displacement function from 0 is t³−6t²+9t, which is 4 m at t=1 and 0 at t=3. Distance=4+4=8 m.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-003",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "hard",
    "question": "A shuttle moves east at 12 m/s for 5 s, then accelerates uniformly to 20 m/s east in 4 s, then changes velocity uniformly from 20 m/s east to 4 m/s west in 6 s. What is its net displacement?",
    "options": [
      "124 m east",
      "172 m east",
      "148 m east",
      "196 m east"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Displacements are 60 m, ((12+20)/2)·4=64 m, and ((20−4)/2)·6=48 m east. Total=172 m east.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-004",
    "section": "Physics",
    "topic": "Projectile Motion",
    "difficulty": "hard",
    "question": "A projectile is launched at speed u with sinθ=3/5 and cosθ=4/5. At an instant when its upward velocity component has fallen to half its initial value, what fraction of the launch momentum magnitude remains?",
    "options": [
      "7/10",
      "4/5",
      "√73/10",
      "√91/10"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Horizontal speed remains 4u/5 and vertical speed is 3u/10. The speed fraction is √[(4/5)²+(3/10)²]=√73/10; momentum has the same fraction.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-005",
    "section": "Physics",
    "topic": "Relative Motion",
    "difficulty": "medium",
    "question": "Drone A moves with ground velocity (10 east, 6 north) m/s and drone B with (4 east, 14 north) m/s. What is the speed of A relative to B?",
    "options": [
      "8 m/s",
      "12 m/s",
      "10 m/s",
      "14 m/s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Relative velocity is (6 east, 8 south) m/s, whose magnitude is √(36+64)=10 m/s.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-006",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "medium",
    "question": "A 5 kg crate moves at 2 m/s on a horizontal rough floor with μₖ=0.20. A 25 N horizontal force acts forward for 3 s; it is then replaced by a 5 N backward force for 2 s. Take g=10 m/s² and assume the crate keeps moving forward. What is its final speed?",
    "options": [
      "2 m/s",
      "3 m/s",
      "4 m/s",
      "5 m/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Kinetic friction is μₖmg=10 N. During the first 3 s, net forward force is 25−10=15 N, so a=3 m/s² and speed rises from 2 to 11 m/s. During the next 2 s, both the 5 N applied force and 10 N friction act backward, so a=−15/5=−3 m/s². Final speed=11−3·2=5 m/s.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-007",
    "section": "Physics",
    "topic": "Momentum and Impulse",
    "difficulty": "hard",
    "question": "A 2 kg cart initially moves at 1 m/s west. A forward force rises linearly from 0 to 6 N over 2 s and then falls linearly to 0 over the next 1 s. What is the cart’s final speed?",
    "options": [
      "2.5 m/s",
      "3.5 m/s",
      "4.5 m/s",
      "5.5 m/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The force-time area is 1/2·2·6+1/2·1·6=9 N·s east. Initial momentum is 2 N·s west, so final momentum is 7 N·s east and speed is 7/2=3.5 m/s.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-008",
    "section": "Physics",
    "topic": "Work Energy and Power",
    "difficulty": "hard",
    "question": "A 2 kg body starts from rest at x=0 and moves along x under F(x)=6x+4 N with no other force. What is its speed at x=2 m?",
    "options": [
      "2 m/s",
      "4 m/s",
      "√10 m/s",
      "2√5 m/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Work=∫₀²(6x+4)dx=20 J. Thus ½(2)v²=20, so v=√20=2√5 m/s.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-009",
    "section": "Physics",
    "topic": "Work Energy and Power",
    "difficulty": "hard",
    "question": "A 1 kg particle initially moves at 4 m/s. From x=0 to 3 m it experiences a forward force F=12−2x N and a constant 3 N opposing force. What is its speed at x=3 m?",
    "options": [
      "2√13 m/s",
      "√26 m/s",
      "6 m/s",
      "2√17 m/s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Forward work=∫₀³(12−2x)dx=27 J; opposing work=−9 J, so net work=18 J. Initial KE=8 J, final KE=26 J, giving v=√52=2√13 m/s.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-010",
    "section": "Physics",
    "topic": "Impulse and Momentum",
    "difficulty": "medium",
    "question": "A 0.50 kg ball approaches a wall at 8 m/s and rebounds along the same line at 4 m/s. What is the magnitude of the impulse delivered to the ball?",
    "options": [
      "4 N·s",
      "6 N·s",
      "2 N·s",
      "8 N·s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Take the initial direction as positive. Initial momentum is 0.50·8=4 kg·m/s and final momentum is 0.50·(−4)=−2 kg·m/s. The impulse is Δp=−6 kg·m/s, whose magnitude is 6 N·s.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-011",
    "section": "Physics",
    "topic": "Centre of Mass",
    "difficulty": "medium",
    "question": "Masses 2 kg and 4 kg are at x=0 and x=6 m. One kilogram is transferred from the second location to the first without changing the locations. By how much does the centre of mass shift?",
    "options": [
      "0.5 m toward x=0",
      "1 m toward x=6",
      "2 m toward x=0",
      "1 m toward x=0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Initially x_cm=4 m. After transfer the masses are 3 kg and 3 kg, so x_cm=3 m. It shifts 1 m toward x=0.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-012",
    "section": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "hard",
    "question": "A uniform disc spins freely with no external torque. Its radius is slowly doubled while its mass remains the same and it remains a uniform disc. What is the final rotational kinetic energy divided by the initial rotational kinetic energy?",
    "options": [
      "1/2",
      "1/8",
      "1/4",
      "1/16"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a uniform disc I∝R², so I quadruples. Angular momentum conservation makes ω one-fourth. Since K=L²/(2I), kinetic energy becomes one-fourth.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-013",
    "section": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "hard",
    "question": "A wheel starts at 8 rad/s and has angular acceleration −2 rad/s² until it stops. It then continues with angular acceleration −1 rad/s² for 2 s. What is its net angular displacement from the start?",
    "options": [
      "12 rad",
      "14 rad",
      "16 rad",
      "18 rad"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The first phase lasts 4 s and turns through (8+0)4/2=16 rad. The second phase turns −(1/2)(1)(2²)=−2 rad. Net=14 rad.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-014",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "hard",
    "question": "A satellite has a circular orbit at altitude equal to the planet’s radius. What is its orbital speed divided by the escape speed from the planet’s surface?",
    "options": [
      "1/√2",
      "1/√3",
      "1/2",
      "1/4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At orbital radius 2R, v_orb=√(GM/2R). Surface escape speed is √(2GM/R), so the ratio is 1/2.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-015",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "A projectile is launched vertically from a planet’s surface at half the escape speed. Neglect atmosphere. If R is the planet radius, what maximum distance from the planet’s centre does it reach?",
    "options": [
      "R",
      "3R/2",
      "2R",
      "4R/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Escape speed satisfies v_e²=2GM/R. Initial specific energy at v=v_e/2 is v²/2−GM/R=GM/(4R)−GM/R=−3GM/(4R). At the top it is −GM/r_max, so r_max=4R/3.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-016",
    "section": "Physics",
    "topic": "Properties of Solids",
    "difficulty": "hard",
    "question": "Two rods of the same material are connected in series and carry the same tensile force. Rod 1 has length L and area A; rod 2 has length 2L and area 2A. What fraction of the total extension occurs in rod 2?",
    "options": [
      "1/2",
      "1/3",
      "2/3",
      "3/4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Extension FL/(AY). Rod 1 extends FL/(AY); rod 2 extends F(2L)/(2AY)=FL/(AY). The extensions are equal, so rod 2 contributes half the total.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-017",
    "section": "Physics",
    "topic": "Fluid Mechanics",
    "difficulty": "hard",
    "question": "Water flows horizontally from a 4 cm² section at 2 m/s into a 2 cm² section. Neglecting viscosity, what is p₁−p₂? Take ρ=1000 kg/m³.",
    "options": [
      "3000 Pa",
      "6000 Pa",
      "8000 Pa",
      "12000 Pa"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Continuity gives v₂=4 m/s. Bernoulli gives p₁−p₂=½ρ(v₂²−v₁²)=500(16−4)=6000 Pa.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-018",
    "section": "Physics",
    "topic": "Fluid Mechanics",
    "difficulty": "medium",
    "question": "A 0.8 kg object of volume 1.0×10⁻⁴ m³ is fully immersed first in water and then in a liquid of density 1500 kg/m³. Take g=10 m/s². By how much does its apparent weight decrease in the denser liquid relative to water?",
    "options": [
      "0.2 N",
      "1.0 N",
      "0.5 N",
      "1.5 N"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The buoyant-force increase is (1500−1000)gV=500·10·10⁻⁴=0.5 N, so apparent weight decreases by 0.5 N.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-019",
    "section": "Physics",
    "topic": "Thermal Physics",
    "difficulty": "hard",
    "question": "A 0.20 kg metal block with c=500 J kg⁻¹K⁻¹ at 100°C is mixed with 0.30 kg water with c=4200 J kg⁻¹K⁻¹ at 20°C. Neglect heat loss. What is the final temperature?",
    "options": [
      "24.0°C",
      "30.0°C",
      "35.0°C",
      "25.9°C"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Energy balance gives 100(100−T)=1260(T−20). Thus 35200=1360T and T≈25.88°C.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-020",
    "section": "Physics",
    "topic": "Thermal Expansion",
    "difficulty": "hard",
    "question": "A 1.0 m brass rod (α=2×10⁻⁵ K⁻¹) and a 2.0 m steel rod (α=1×10⁻⁵ K⁻¹) face each other across a 0.60 mm gap. If both are heated equally, what temperature rise just closes the gap?",
    "options": [
      "10 K",
      "15 K",
      "20 K",
      "30 K"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Combined expansion per kelvin is (1·2×10⁻⁵+2·1×10⁻⁵)=4×10⁻⁵ m/K. Thus ΔT=0.00060/(4×10⁻⁵)=15 K.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-021",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "hard",
    "question": "In process 1 a gas absorbs 300 J and does 100 J of work. In process 2 it rejects 50 J while 80 J of work is done on it. What is the total change in internal energy?",
    "options": [
      "130 J",
      "250 J",
      "230 J",
      "330 J"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using ΔU=Q−W_by: process 1 gives 200 J. In process 2, Q=−50 J and W_by=−80 J, so ΔU=30 J. Total=230 J.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-022",
    "section": "Physics",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "medium",
    "question": "A gas has density 1.2 kg/m³ and rms molecular speed 500 m/s. Using P=(1/3)ρv_rms², what is its pressure?",
    "options": [
      "5.0×10⁴ Pa",
      "1.5×10⁵ Pa",
      "1.0×10⁵ Pa",
      "3.0×10⁵ Pa"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P=(1/3)(1.2)(500²)=0.4·250000=100000 Pa.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-023",
    "section": "Physics",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "medium",
    "question": "At the same temperature, gas B has molar mass nine times that of gas A. If v_rms for B is 500 m/s, what is v_rms for A?",
    "options": [
      "750 m/s",
      "1500 m/s",
      "1000 m/s",
      "4500 m/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "v_rms∝1/√M. With M_B=9M_A, v_A/v_B=3, so v_A=1500 m/s.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-024",
    "section": "Physics",
    "topic": "Oscillations",
    "difficulty": "hard",
    "question": "A 0.50 kg mass is attached between two springs of 20 N/m and 45 N/m so both provide restoring force for the same displacement. What is the square of the maximum speed if the amplitude is 0.20 m?",
    "options": [
      "2.6 m²/s²",
      "6.5 m²/s²",
      "5.2 m²/s²",
      "13 m²/s²"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "k_eff=65 N/m, so ω²=k/m=130. Since v_max²=A²ω²=0.04·130=5.2.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-025",
    "section": "Physics",
    "topic": "Oscillations",
    "difficulty": "hard",
    "question": "An SHM oscillator of mass 0.40 kg has total energy 0.80 J. At a position where kinetic and potential energies are equal, what is its speed?",
    "options": [
      "1 m/s",
      "2 m/s",
      "√2 m/s",
      "2√2 m/s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At equal sharing, K=0.40 J. Thus ½(0.40)v²=0.40, giving v²=2 and v=√2 m/s.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-026",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "medium",
    "question": "A 1.5 m string fixed at both ends has two consecutive resonant frequencies at 120 Hz and 160 Hz. What is the wave speed on the string?",
    "options": [
      "120 m/s",
      "80 m/s",
      "160 m/s",
      "240 m/s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Adjacent harmonics differ by the fundamental frequency, so f₁=160−120=40 Hz. For a fixed string, f₁=v/(2L), hence v=2Lf₁=2·1.5·40=120 m/s.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-027",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "medium",
    "question": "Two coherent waves of equal amplitude A and the same frequency arrive with phase difference 120°. What is the resultant amplitude?",
    "options": [
      "A/2",
      "√2 A",
      "2A",
      "A"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For equal amplitudes, resultant=2A cos(φ/2)=2A cos60°=A.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-028",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "medium",
    "question": "Two tuning forks produce 8 beats per second. A small amount of wax is added gradually to fork A, lowering its frequency; the beat rate immediately increases and reaches 12 per second without passing through zero. If fork B is 300 Hz, what was the original frequency of fork A?",
    "options": [
      "292 Hz",
      "288 Hz",
      "308 Hz",
      "312 Hz"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The initial frequency of A differs from 300 Hz by 8 Hz. Because lowering A immediately increases the beat rate and no zero-beat condition is crossed, A must initially be below B. Thus f_A=300−8=292 Hz.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-029",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "hard",
    "question": "Charges +9q and +q are fixed on the x-axis at x=0 and x=4 m. Where between them is the electric field zero?",
    "options": [
      "x=3 m",
      "x=1 m",
      "x=2 m",
      "x=10/3 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Between the charges the fields oppose. 9/x²=1/(4−x)² gives 3/x=1/(4−x), so x=3 m.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-030",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "hard",
    "question": "Charges +2 μC and −1 μC are fixed at x=0 and x=3 m. How much work is required to bring a +1 μC charge from infinity to x=1 m? Take k=9×10⁹.",
    "options": [
      "4.5 mJ",
      "9.0 mJ",
      "13.5 mJ",
      "18.0 mJ"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Potential at x=1 is k[2 μC/1−1 μC/2]=13.5 kV. Work=qV=(1 μC)(13.5 kV)=13.5 mJ.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-031",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "hard",
    "question": "At the vertices of an equilateral triangle of side a are charges +q,+q,−q. What is the electric potential at the triangle’s centre?",
    "options": [
      "√3 kq/a",
      "0",
      "kq/a",
      "3kq/a"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Each vertex is a/√3 from the centre. The net charge contribution is q, so V=kq/(a/√3)=√3kq/a.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-032",
    "section": "Physics",
    "topic": "Capacitance",
    "difficulty": "hard",
    "question": "Capacitors 3 μF and 6 μF are in parallel; this combination is in series with 18 μF across 12 V. What is the voltage across the 18 μF capacitor?",
    "options": [
      "2 V",
      "6 V",
      "8 V",
      "4 V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The parallel pair is 9 μF; in series with 18 μF the equivalent is 6 μF. Charge is 72 μC, so voltage across 18 μF is 72/18=4 V.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-033",
    "section": "Physics",
    "topic": "Capacitance",
    "difficulty": "hard",
    "question": "A 4 μF capacitor charged to 10 V is connected in parallel, same polarity, to an uncharged 6 μF capacitor. How much electrostatic energy is lost?",
    "options": [
      "80 μJ",
      "160 μJ",
      "120 μJ",
      "200 μJ"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Initial charge is 40 μC, so final common voltage is 4 V. Initial energy=200 μJ; final energy=½(10 μF)(4²)=80 μJ. Loss=120 μJ.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-034",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "A 6 Ω resistor and a 3 Ω resistor are connected in parallel across a 12 V ideal source for 2.0 s. How much electrical energy is dissipated by the pair?",
    "options": [
      "72 J",
      "96 J",
      "108 J",
      "144 J"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The parallel equivalent is 2 Ω. Total power is V²/R_eq=144/2=72 W, so in 2.0 s the energy is 144 J.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-035",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "A 12 V cell with internal resistance 1 Ω supplies a 5 Ω load. What power is dissipated inside the cell?",
    "options": [
      "2 W",
      "10 W",
      "20 W",
      "4 W"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Current is 12/(5+1)=2 A. Internal power loss is I²r=4 W.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-036",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "Cells of 6 V, 1 Ω and 3 V, 0.5 Ω are connected in series aiding with a 4.5 Ω external resistor. What is the circuit current?",
    "options": [
      "1.0 A",
      "2.0 A",
      "1.5 A",
      "3.0 A"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Total emf is 9 V and total resistance is 1+0.5+4.5=6 Ω, so I=1.5 A.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-037",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "medium",
    "question": "A conducting rod 0.40 m long moves at 5.0 m/s perpendicular to both its length and a uniform 0.30 T magnetic field. What motional emf appears across its ends?",
    "options": [
      "0.60 V",
      "0.30 V",
      "1.20 V",
      "1.50 V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Motional emf is Blv=0.30·0.40·5.0=0.60 V.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-038",
    "section": "Physics",
    "topic": "Magnetic Effects of Current",
    "difficulty": "hard",
    "question": "Two long parallel wires 0.30 m apart carry 2 A and 8 A in the same direction. At what distance from the 2 A wire, between the wires, is the net magnetic field zero?",
    "options": [
      "0.03 m",
      "0.06 m",
      "0.10 m",
      "0.24 m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Between the wires the fields oppose. Setting 2/x=8/(0.30−x) gives x=0.06 m.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-039",
    "section": "Physics",
    "topic": "Magnetic Effects of Current",
    "difficulty": "medium",
    "question": "A single circular loop of radius 0.10 m carries 2.0 A. Using μ₀=4π×10⁻⁷ T·m/A, what is the magnetic field at its centre?",
    "options": [
      "2π×10⁻⁶ T",
      "4π×10⁻⁶ T",
      "8π×10⁻⁶ T",
      "4π×10⁻⁷ T"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For one loop, B=μ₀I/(2R)=4π×10⁻⁷·2/(0.20)=4π×10⁻⁶ T.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-040",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "hard",
    "question": "A 100-turn coil of area 0.020 m² has its normal fixed at 60° to a uniform magnetic field. The field rises from 0.10 T to 0.40 T in 0.50 s. What emf magnitude is induced?",
    "options": [
      "0.30 V",
      "1.20 V",
      "2.40 V",
      "0.60 V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "|E|=NAcos60°·ΔB/Δt=100·0.020·0.5·0.30/0.50=0.60 V.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-041",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "hard",
    "question": "A series RC circuit draws 2.0 A rms from a 130 V rms source and consumes 100 W. A 15 Ω resistor is then added in series, with frequency and capacitance unchanged. What is the new rms current, approximately?",
    "options": [
      "1.80 A",
      "2.00 A",
      "2.60 A",
      "3.25 A"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Initially R=P/I²=100/4=25 Ω and |Z|=V/I=65 Ω, so X_C=√(65²−25²)=60 Ω. After adding 15 Ω, R=40 Ω and |Z|=√(40²+60²)=20√13 Ω. Thus I=130/(20√13)≈1.80 A.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-042",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "medium",
    "question": "A series RLC circuit uses L=0.20 H and C=50 μF. What is its resonant angular frequency, to the nearest rad/s?",
    "options": [
      "316 rad/s",
      "100 rad/s",
      "707 rad/s",
      "1000 rad/s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At resonance, ω₀=1/√(LC). Here LC=0.20·50×10⁻⁶=1.0×10⁻⁵, so ω₀=1/√(10⁻⁵)≈316 rad/s.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-043",
    "section": "Physics",
    "topic": "Ray Optics",
    "difficulty": "medium",
    "question": "A +20 cm convex lens and a −30 cm concave lens are in contact. An object 1.5 cm high is placed 90 cm to their left. What is the magnitude of the final image height?",
    "options": [
      "1.5 cm",
      "2.0 cm",
      "3.0 cm",
      "4.5 cm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For lenses in contact, 1/F=1/20−1/30=1/60, so F=60 cm. With u=−90 cm, 1/v−1/u=1/F gives 1/v=1/60−1/90=1/180, hence v=180 cm. Magnification magnitude is |v/u|=2, so image height magnitude is 3.0 cm.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-044",
    "section": "Physics",
    "topic": "Ray Optics",
    "difficulty": "hard",
    "question": "A vessel has 12 cm of glass (n=1.5) topped by 2 cm of water (n=4/3). An object at the bottom is viewed normally from air. What is its apparent depth below the top surface?",
    "options": [
      "9.5 cm",
      "8.0 cm",
      "10.0 cm",
      "14.0 cm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At normal viewing, apparent thicknesses add: 12/1.5+2/(4/3)=8+1.5=9.5 cm.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-045",
    "section": "Physics",
    "topic": "Ray Optics",
    "difficulty": "hard",
    "question": "A convex lens of focal length 15 cm forms an image of an object 30 cm to its left. A second identical lens is placed 20 cm to the right of the first. Where is the final image relative to the second lens?",
    "options": [
      "10 cm to its right",
      "30 cm to its right",
      "6 cm to its right",
      "6 cm to its left"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The first lens forms its image 30 cm to its right, i.e. 10 cm to the right of lens 2, a virtual object for lens 2. With u=+10 cm, 1/f=1/v−1/u gives 1/15=1/v−1/10, hence v=6 cm to the right.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-046",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "hard",
    "question": "In a YDSE setup, a glass plate of thickness 6 μm and refractive index 1.5 is placed in front of one slit. For wavelength 600 nm, by how many fringe widths does the pattern shift?",
    "options": [
      "2.5",
      "7.5",
      "5",
      "10"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Extra optical path=(n−1)t=0.5·6 μm=3 μm. Dividing by λ=0.6 μm gives 5 fringe widths.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-047",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "medium",
    "question": "Unpolarized light of intensity I₀ passes through an ideal polarizer and then an analyzer whose axis is 60° from the first. What intensity emerges?",
    "options": [
      "I₀/8",
      "I₀/4",
      "3I₀/8",
      "I₀/2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The first polarizer transmits I₀/2. Malus law then gives (I₀/2)cos²60°=I₀/8.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-048",
    "section": "Physics",
    "topic": "Dual Nature of Radiation",
    "difficulty": "hard",
    "question": "A metal has threshold wavelength 600 nm and is illuminated by 400 nm light. Using hc=1240 eV·nm, what is the stopping potential?",
    "options": [
      "0.52 V",
      "1.03 V",
      "2.07 V",
      "3.10 V"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "K_max=hc(1/400−1/600)=1240/1200≈1.033 eV, so the stopping potential is about 1.03 V.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-049",
    "section": "Physics",
    "topic": "Atoms",
    "difficulty": "medium",
    "question": "In the Bohr model of hydrogen, what is the ratio of the electron de Broglie wavelength in the n=5 orbit to that in the n=2 orbit?",
    "options": [
      "5/2",
      "4/25",
      "25/4",
      "2/5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The standing-wave condition is 2πr_n=nλ_n, and r_n∝n², so λ_n∝n. Hence λ₅/λ₂=5/2.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-050",
    "section": "Physics",
    "topic": "Atoms",
    "difficulty": "hard",
    "question": "A hydrogen atom emits photons in succession through 5→2 and 2→1 transitions. What is the ratio of the total emitted photon energy in these two steps to the photon energy of a direct 3→1 transition?",
    "options": [
      "24/25",
      "25/27",
      "27/25",
      "32/27"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "In Rydberg-energy units, E(5→2)=1/4−1/25=21/100 and E(2→1)=1−1/4=75/100, so the total is 24/25. For 3→1 the energy is 1−1/9=8/9. The ratio is (24/25)/(8/9)=27/25.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-051",
    "section": "Physics",
    "topic": "Nuclei",
    "difficulty": "hard",
    "question": "Nucleus A has mass number 4 and mass defect 0.032 u; nucleus B has mass number 12 and mass defect 0.090 u. Using 931.5 MeV/u, by about how much is A’s binding energy per nucleon greater than B’s?",
    "options": [
      "0.47 MeV",
      "0.12 MeV",
      "0.94 MeV",
      "1.40 MeV"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A: 0.032·931.5/4≈7.45 MeV per nucleon. B: 0.090·931.5/12≈6.99 MeV. Difference≈0.47 MeV.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-052",
    "section": "Physics",
    "topic": "Nuclei",
    "difficulty": "hard",
    "question": "A radioactive sample has half-life 6 h. What is the ratio of nuclei that decay in the first 6 h to those that decay during the next 12 h?",
    "options": [
      "2/3",
      "1",
      "4/3",
      "3/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "First 6 h: N/2 decays. In the next 12 h, the remaining N/2 falls to N/8, so 3N/8 decays. Ratio=(N/2)/(3N/8)=4/3.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-053",
    "section": "Physics",
    "topic": "Semiconductors",
    "difficulty": "medium",
    "question": "A transistor has common-base current gain α=0.98 and emitter current 5.0 mA. What is its common-emitter current gain β?",
    "options": [
      "24",
      "50",
      "49",
      "98"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "β=α/(1−α)=0.98/0.02=49.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-054",
    "section": "Physics",
    "topic": "Logic Gates",
    "difficulty": "medium",
    "question": "For Y=(A XOR B) AND C, how many of the eight possible input triples (A,B,C) produce Y=1?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A XOR B is 1 for two of the four A,B pairs, and C must be 1. Thus exactly 2 input triples produce 1.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-055",
    "section": "Physics",
    "topic": "Experimental Skills",
    "difficulty": "hard",
    "question": "A vernier caliper has 10 vernier divisions equal to 9 main-scale millimetres. A reading shows 12 mm on the main scale and the 7th vernier mark coincides. If the zero error is +0.2 mm, what is the corrected reading?",
    "options": [
      "12.3 mm",
      "12.7 mm",
      "12.5 mm",
      "12.9 mm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Least count=1.0−0.9=0.1 mm. Observed reading=12+0.7=12.7 mm. Positive zero error is subtracted, giving 12.5 mm.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-056",
    "section": "Physics",
    "topic": "Electromagnetic Waves",
    "difficulty": "medium",
    "question": "A 2.5 GHz microwave travels in a dielectric of refractive index 2.0, while a 5.0×10¹⁴ Hz infrared wave travels in glass of refractive index 1.5. What is λ_microwave/λ_infrared in their respective media?",
    "options": [
      "1.5×10⁵",
      "7.5×10⁴",
      "2.0×10⁵",
      "3.0×10⁵"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "In a medium λ=c/(nf). Thus λ_m/λ_ir=(n_ir f_ir)/(n_m f_m)=(1.5×5.0×10¹⁴)/(2.0×2.5×10⁹)=1.5×10⁵.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-057",
    "section": "Physics",
    "topic": "Magnetism",
    "difficulty": "hard",
    "question": "A magnetic dipole of moment 0.40 A·m² in a 0.50 T uniform field is slowly rotated from 60° to 120° relative to the field. What external work is required?",
    "options": [
      "0.10 J",
      "0.30 J",
      "0.40 J",
      "0.20 J"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "U=−mBcosθ. The change is −0.20(cos120−cos60)=−0.20(−1)=+0.20 J, equal to the quasistatic external work.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-058",
    "section": "Physics",
    "topic": "Circular Motion",
    "difficulty": "medium",
    "question": "A frictionless banked curve has radius 40 m and tanθ=1/4. Taking g=10 m/s², what speed requires no lateral friction?",
    "options": [
      "5 m/s",
      "15 m/s",
      "20 m/s",
      "10 m/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For ideal banking v²=rg tanθ=40·10·1/4=100, so v=10 m/s.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-059",
    "section": "Physics",
    "topic": "Work Energy and Power",
    "difficulty": "hard",
    "question": "A 1000 kg car accelerates uniformly from 10 to 20 m/s in 5 s against a constant 500 N resistive force. What average engine power is required during the interval?",
    "options": [
      "30 kW",
      "45 kW",
      "37.5 kW",
      "60 kW"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Distance=average speed·time=15·5=75 m. Engine work=ΔK+F_r s=150 kJ+37.5 kJ=187.5 kJ. Dividing by 5 s gives 37.5 kW.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-060",
    "section": "Physics",
    "topic": "Units and Measurements",
    "difficulty": "medium",
    "question": "A displacement is modeled as x=A t^(3/2)+B t^(−1/2), where both terms have dimensions of length. What are the dimensions of A/B?",
    "options": [
      "T²",
      "T⁻²",
      "LT⁻²",
      "L⁻¹T²"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "[A]=L T^(−3/2) and [B]=L T^(1/2). Hence [A/B]=T^(−2).",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-061",
    "section": "Physics",
    "topic": "Units and Measurements",
    "difficulty": "hard",
    "question": "A quantity z=x²/√y is calculated from independent measurements with maximum percentage uncertainties 1% in x and 4% in y. What is the maximum percentage uncertainty in z?",
    "options": [
      "4%",
      "3%",
      "5%",
      "6%"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For powers, percentage uncertainties add with absolute exponents: 2(1%)+(1/2)(4%)=4%.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-062",
    "section": "Physics",
    "topic": "Projectile Motion",
    "difficulty": "hard",
    "question": "A package is released horizontally at 15 m/s from a height of 20 m. At release, a cart directly below it moves in the same direction at 5 m/s. Taking g=10 m/s², how far ahead of the cart does the package land?",
    "options": [
      "10 m",
      "20 m",
      "30 m",
      "40 m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Fall time=√(2h/g)=2 s. Relative horizontal speed is 10 m/s, so the package lands 20 m ahead.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-063",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "medium",
    "question": "Blocks of 2 kg and 3 kg lie on a frictionless horizontal table and are joined by a light string. A 20 N force pulls the 3 kg block to the right while a 5 N force pulls the 2 kg block to the left. What is the string tension?",
    "options": [
      "9 N",
      "11 N",
      "12 N",
      "15 N"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The net external force is 20−5=15 N on 5 kg, so a=3 m/s² to the right. For the 2 kg block, T−5=2×3, hence T=11 N.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-064",
    "section": "Physics",
    "topic": "Circular Motion",
    "difficulty": "hard",
    "question": "A 0.50 kg mass moves in a vertical circle of radius 2.0 m. At the top its speed is 10 m/s. Taking g=10 m/s², what is the string tension there?",
    "options": [
      "5 N",
      "25 N",
      "30 N",
      "20 N"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At the top, T+mg=mv²/r=0.5·100/2=25 N. Since mg=5 N, T=20 N.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-065",
    "section": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "medium",
    "question": "A solid cylinder of mass 2M and a thin ring of mass M roll without slipping. Their total kinetic energies are equal. What is v_cylinder/v_ring?",
    "options": [
      "√(3/2)",
      "2/3",
      "√(2/3)",
      "3/4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a solid cylinder K=(3/4)mv², so with mass 2M its energy is (3/2)Mv_c². For a thin ring K=Mv_r². Equality gives (3/2)v_c²=v_r², hence v_c/v_r=√(2/3).",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-066",
    "section": "Physics",
    "topic": "Fluid Mechanics",
    "difficulty": "hard",
    "question": "An open U-tube contains mercury of density 13600 kg/m³. One arm has 10 cm of water above mercury; the other has 8 cm of oil of density 800 kg/m³. Take g=10 m/s². What mercury-level difference balances the columns?",
    "options": [
      "1.32 mm",
      "5.29 mm",
      "26.5 mm",
      "2.65 mm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The pressure difference from the top liquids is 1000·10·0.10−800·10·0.08=360 Pa. Thus h=360/(13600·10)=0.00265 m=2.65 mm.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-067",
    "section": "Physics",
    "topic": "Thermal Physics",
    "difficulty": "medium",
    "question": "100 g of water at 80°C is mixed with 200 g of water at 20°C in a calorimeter that is initially at 20°C and has heat capacity 100 J/K. Take c_water=4.2 J g⁻¹K⁻¹. What is the final temperature?",
    "options": [
      "35.0°C",
      "38.5°C",
      "40.0°C",
      "42.5°C"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The hot water loses 420(80−T) J. The cooler water and calorimeter gain (840+100)(T−20) J. Equating gives 420(80−T)=940(T−20), so T=52400/1360≈38.53°C.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-068",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "hard",
    "question": "A gas executes a clockwise rectangular cycle between pressures 1×10⁵ and 3×10⁵ Pa and volumes 0.01 and 0.03 m³. What is the net heat absorbed per cycle?",
    "options": [
      "2000 J",
      "6000 J",
      "8000 J",
      "4000 J"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Over a cycle ΔU=0, so Q_net=W_net. The clockwise area is ΔP·ΔV=(2×10⁵)(0.02)=4000 J.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-069",
    "section": "Physics",
    "topic": "Oscillations",
    "difficulty": "hard",
    "question": "A simple pendulum is inside an elevator accelerating upward at g/4. What is its period divided by its period when the elevator is at rest?",
    "options": [
      "1/√5",
      "√5/2",
      "4/5",
      "2/√5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Effective gravity is 5g/4. Since T∝1/√g_eff, the ratio is √(g/(5g/4))=2/√5.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-070",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "medium",
    "question": "A pipe closed at one end has length 0.50 m and sound speed 340 m/s. What is the frequency difference between its first overtone and fundamental?",
    "options": [
      "340 Hz",
      "170 Hz",
      "510 Hz",
      "680 Hz"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The fundamental is v/(4L)=170 Hz and the first overtone is 3f=510 Hz. Difference=340 Hz.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-071",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "medium",
    "question": "Closed surface S₁ encloses charges +3q and −q, while closed surface S₂ encloses only the +3q charge. External charges are present but lie outside both surfaces. What is Φ(S₂)−Φ(S₁)?",
    "options": [
      "2q/ε₀",
      "q/ε₀",
      "3q/ε₀",
      "−q/ε₀"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By Gauss law, Φ(S₁)=(3q−q)/ε₀=2q/ε₀ and Φ(S₂)=3q/ε₀. Their difference is q/ε₀; external charges do not change the net flux through a closed surface.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-072",
    "section": "Physics",
    "topic": "Capacitance",
    "difficulty": "hard",
    "question": "A parallel-plate capacitor remains connected to a battery. A dielectric of constant 5 fills exactly half the plate area, with the other half air. What is the final charge divided by the initial charge?",
    "options": [
      "2",
      "5/2",
      "5",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The two area halves act as parallel capacitors: C_f=C₀[(5/2)+(1/2)]=3C₀. At fixed battery voltage Q∝C, so Q_f/Q_i=3.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-073",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "hard",
    "question": "A resistor is 20 Ω at 20°C with temperature coefficient 0.004 K⁻¹. It is connected to a constant 12 V source. What is P(70°C)/P(20°C)?",
    "options": [
      "5/6",
      "4/5",
      "6/5",
      "5/4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At 70°C, R=20[1+0.004·50]=24 Ω. With constant V, P∝1/R, so the ratio is 20/24=5/6.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-074",
    "section": "Physics",
    "topic": "Magnetic Effects of Current",
    "difficulty": "hard",
    "question": "A proton passes undeflected through crossed fields E=3×10⁴ N/C and B=0.20 T, then enters the magnetic field alone perpendicular to it. Using m_p=1.67×10⁻²⁷ kg and e=1.60×10⁻¹⁹ C, what is the orbit radius?",
    "options": [
      "3.9 mm",
      "15.6 mm",
      "78 mm",
      "7.8 mm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Velocity selector gives v=E/B=1.5×10⁵ m/s. Radius r=mv/(qB)≈1.67×10⁻²⁷·1.5×10⁵/(1.6×10⁻¹⁹·0.2)=7.8×10⁻³ m.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-physics-075",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "hard",
    "question": "An ideal transformer has N_p:N_s=5:1 and 220 V rms on the primary. A 22 Ω resistor is connected to the secondary. What is the primary current?",
    "options": [
      "0.20 A",
      "0.40 A",
      "1.0 A",
      "2.0 A"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Secondary voltage is 44 V, so secondary current is 2 A. For an ideal transformer I_p/I_s=N_s/N_p=1/5, hence I_p=0.40 A.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-001",
    "section": "Chemistry",
    "topic": "Coordination Chemistry",
    "difficulty": "medium",
    "question": "A solution contains 0.20 mol [Co(NH₃)₅Cl]Cl₂ and 0.10 mol [Co(NH₃)₄Cl₂]Cl. Assuming no ligand exchange, excess AgNO₃ precipitates only the ionizable chloride. How many moles of AgCl form?",
    "options": [
      "0.30 mol",
      "0.40 mol",
      "0.50 mol",
      "0.60 mol"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The first complex supplies 2 ionizable Cl⁻ per formula unit: 0.20×2=0.40 mol. The second supplies 1: 0.10 mol. Total AgCl formed is 0.50 mol.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-002",
    "section": "Chemistry",
    "topic": "d- and f-Block Elements",
    "difficulty": "hard",
    "question": "[Fe(CN)₆]⁴⁻ is low-spin Fe(II). On one-electron oxidation it becomes [Fe(CN)₆]³⁻, also low spin. How does the number of unpaired electrons change?",
    "options": [
      "1 to 0",
      "4 to 5",
      "0 to 1",
      "5 to 4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Low-spin d⁶ Fe(II) has no unpaired electrons. Low-spin d⁵ Fe(III) has one unpaired electron, so the count changes from 0 to 1.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-003",
    "section": "Chemistry",
    "topic": "Metallurgy",
    "difficulty": "hard",
    "question": "A slagging step must remove 30 g of SiO₂ gangue by CaO via CaO+SiO₂→CaSiO₃. If CaO is supplied only by CaCO₃→CaO+CO₂, what mass of pure CaCO₃ is required? Use molar masses SiO₂=60, CaO=56, CaCO₃=100 g mol⁻¹.",
    "options": [
      "50 g",
      "28 g",
      "56 g",
      "100 g"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "30 g SiO₂ is 0.50 mol, requiring 0.50 mol CaO and therefore 0.50 mol CaCO₃, which is 50 g.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-004",
    "section": "Chemistry",
    "topic": "Aldehydes and Ketones",
    "difficulty": "hard",
    "question": "A C₅H₁₀O compound gives a positive 2,4-DNP test, a negative Tollens test and a positive iodoform test. Which structure is consistent?",
    "options": [
      "pentan-3-one",
      "pentanal",
      "pentan-2-one",
      "3-methylbutanal"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "2,4-DNP indicates a carbonyl, negative Tollens excludes an aldehyde, and the iodoform test identifies a CH₃CO− methyl ketone. Pentan-2-one fits all three.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-005",
    "section": "Chemistry",
    "topic": "Isomerism",
    "difficulty": "hard",
    "question": "For an octahedral complex [M(en)₂Cl₂]⁺, where en is symmetric bidentate ethylenediamine, how many stereoisomers are possible?",
    "options": [
      "2",
      "4",
      "5",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There is one trans form, which is achiral, and a cis form that exists as two optical enantiomers (Δ and Λ). Total stereoisomers=3.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-006",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "hard",
    "question": "Reductive ozonolysis of an acyclic C₆H₁₂ alkene gives only acetone and propanal, one mole of each per mole of alkene. Which alkene is consistent?",
    "options": [
      "hex-2-ene",
      "2-methylpent-2-ene",
      "3-methylpent-2-ene",
      "2-methylpent-1-ene"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Rejoining the carbonyl carbons of acetone, (CH₃)₂C=O, and propanal, CH₃CH₂CHO, gives (CH₃)₂C=CHCH₂CH₃, i.e. 2-methylpent-2-ene.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-007",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "hard",
    "question": "Combustion of 0.10 mol of a hydrocarbon gives 0.60 mol CO₂ and 0.50 mol H₂O. One mole of the hydrocarbon consumes only one mole H₂ on complete catalytic hydrogenation. What structural feature must accompany its one C=C bond?",
    "options": [
      "one ring",
      "a second C=C bond",
      "one C≡C bond",
      "no additional unsaturation"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The combustion data give C₆H₁₀. Its degree of unsaturation is 2. Hydrogen uptake accounts for one C=C, so the remaining degree of unsaturation must be a ring.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-008",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "hard",
    "question": "A compound has formula C₄H₆O₂, releases CO₂ with NaHCO₃ and consumes one mole H₂ per mole on catalytic hydrogenation. Which description is most consistent?",
    "options": [
      "an unsaturated monocarboxylic acid with one C=C",
      "a saturated dicarboxylic acid",
      "an ester containing one C=C",
      "an aldehyde with two C=C bonds"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "NaHCO₃ identifies a carboxylic acid. C₄H₆O₂ has two degrees of unsaturation: one is the carboxyl C=O and one is the hydrogenated C=C.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-009",
    "section": "Chemistry",
    "topic": "Aromatic Compounds",
    "difficulty": "hard",
    "question": "p-Methylanisole undergoes one electrophilic bromination under conditions where the methoxy group controls orientation, followed by cleavage of the aryl methyl ether to a phenol. What phenolic product results?",
    "options": [
      "4-bromo-2-methylphenol",
      "3-bromo-4-methylphenol",
      "4-bromophenol",
      "2-bromo-4-methylphenol"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "In p-methylanisole the para position to OMe is occupied by CH₃, so bromination occurs at either equivalent ortho position. Ether cleavage converts OMe to OH, giving 2-bromo-4-methylphenol.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-010",
    "section": "Chemistry",
    "topic": "Haloalkanes",
    "difficulty": "hard",
    "question": "1-Bromo-2-methylpropane is treated separately with CN⁻ in DMSO and with bulky tert-butoxide under strong heating. Which product pair best reflects the dominant pathways?",
    "options": [
      "2-methylpropanenitrile; 2-methylpropane",
      "3-methylbutanenitrile; 2-methylpropanol",
      "2-methylpropene; 3-methylbutanenitrile",
      "3-methylbutanenitrile; 2-methylpropene"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "CN⁻ in a polar aprotic solvent favours SN2, adding one carbon to give 3-methylbutanenitrile. Bulky strong base under heat favours elimination, giving 2-methylpropene.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-011",
    "section": "Chemistry",
    "topic": "Alcohols",
    "difficulty": "hard",
    "question": "Optically pure 3-methylbutan-2-ol is oxidized to its ketone and that ketone is then reduced with achiral NaBH₄. What is expected for the final alcohol?",
    "options": [
      "a racemic mixture",
      "the original enantiomer only",
      "the opposite enantiomer only",
      "an achiral alcohol"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Oxidation gives planar 3-methylbutan-2-one, destroying the stereocentre. Achiral reduction can attack either face equally, recreating the alcohol as a racemic mixture.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-012",
    "section": "Chemistry",
    "topic": "Phenols",
    "difficulty": "medium",
    "question": "Equal molar amounts of p-nitrophenol, phenol and p-methoxyphenol compete for a limiting amount of strong base. Which is deprotonated preferentially?",
    "options": [
      "phenol",
      "p-nitrophenol",
      "p-methoxyphenol",
      "all equally"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The nitro group strongly stabilizes the phenoxide conjugate base by electron withdrawal, making p-nitrophenol the most acidic of the three.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-013",
    "section": "Chemistry",
    "topic": "Ethers",
    "difficulty": "hard",
    "question": "When isopropyl phenyl ether, C₆H₅OCH(CH₃)₂, is heated with excess HI, which pair forms from cleavage of the ether bond?",
    "options": [
      "iodobenzene and propan-2-ol",
      "phenol and 1-iodopropane",
      "benzene and acetone",
      "phenol and 2-iodopropane"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The aryl C–O bond is not cleaved by SN2. Cleavage occurs at the alkyl side after protonation, producing phenol and 2-iodopropane.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-014",
    "section": "Chemistry",
    "topic": "Aldehydes and Ketones",
    "difficulty": "hard",
    "question": "Propanal is converted to its cyanohydrin with HCN, then the nitrile group is completely hydrolyzed. What is the final carboxylic acid?",
    "options": [
      "2-hydroxypropanoic acid",
      "3-hydroxybutanoic acid",
      "butanoic acid",
      "2-hydroxybutanoic acid"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "HCN adds one carbon: CH₃CH₂CH(OH)CN. Hydrolysis converts CN to COOH, yielding HOOC–CH(OH)–CH₂–CH₃, 2-hydroxybutanoic acid.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-015",
    "section": "Chemistry",
    "topic": "Carboxylic Acids",
    "difficulty": "hard",
    "question": "A mixture contains only a monoprotic carboxylic acid and a diprotic dicarboxylic acid. A 0.10 mol sample of total acid molecules requires 0.15 mol NaOH for complete neutralization. What is the mole fraction of the dicarboxylic acid?",
    "options": [
      "0.25",
      "0.75",
      "0.50",
      "1.00"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "If x is the mole fraction of diprotic acid, NaOH equivalents per acid molecule are 1+x. Given 1+x=0.15/0.10=1.5, x=0.50.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-016",
    "section": "Chemistry",
    "topic": "Amines",
    "difficulty": "medium",
    "question": "Equal moles of methylamine and aniline are mixed in water, but only half an equivalent of HCl relative to total amine is added. Which amine is expected to remain preferentially unprotonated?",
    "options": [
      "methylamine",
      "both equally",
      "neither; both fully protonate",
      "aniline"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Methylamine is the stronger base and is protonated preferentially by the limited HCl. The weaker base aniline therefore remains preferentially unprotonated.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-017",
    "section": "Chemistry",
    "topic": "Diazonium Salts",
    "difficulty": "hard",
    "question": "Aniline is diazotized, the diazonium salt is treated with CuCN, and the organic product is then heated with aqueous acid until nitrile hydrolysis is complete. What is the final major product?",
    "options": [
      "phenol",
      "benzamide",
      "benzoic acid",
      "benzyl alcohol"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "CuCN replaces the diazonium group by CN to form benzonitrile. Complete acidic hydrolysis of the nitrile gives benzoic acid.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-018",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "medium",
    "question": "Complete hydrolysis of Ala–Gly–Ser–Ala consumes how many water molecules per peptide molecule, and how many distinct amino acids appear among the products?",
    "options": [
      "2 water; 3 distinct amino acids",
      "3 water; 3 distinct amino acids",
      "3 water; 4 distinct amino acids",
      "4 water; 3 distinct amino acids"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A tetrapeptide contains 3 peptide bonds, so hydrolysis consumes 3 water molecules. The products are alanine, glycine and serine, i.e. 3 distinct amino acids.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-019",
    "section": "Chemistry",
    "topic": "Polymers",
    "difficulty": "medium",
    "question": "A polystyrene sample has average molar mass 10400 g mol⁻¹. Taking the styrene repeat-unit molar mass as 104 g mol⁻¹, what is its approximate degree of polymerization?",
    "options": [
      "50",
      "104",
      "100",
      "200"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Degree of polymerization≈polymer molar mass/repeat-unit molar mass=10400/104=100.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-020",
    "section": "Chemistry",
    "topic": "Chemistry in Everyday Life",
    "difficulty": "medium",
    "question": "A tablet contains 0.84 g NaHCO₃. Assuming it reacts as NaHCO₃+HCl→NaCl+CO₂+H₂O, what volume of 0.050 M HCl can it neutralize? Use M(NaHCO₃)=84 g mol⁻¹.",
    "options": [
      "100 mL",
      "200 mL",
      "400 mL",
      "840 mL"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "0.84 g is 0.010 mol NaHCO₃, neutralizing 0.010 mol HCl. At 0.050 mol/L, V=0.010/0.050=0.20 L=200 mL.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-021",
    "section": "Chemistry",
    "topic": "Environmental Chemistry",
    "difficulty": "medium",
    "question": "Two wastewater samples both start at 8.0 mg/L dissolved O₂. After a standard 5-day incubation, sample A has 6.5 mg/L and sample B has 3.0 mg/L, with other conditions identical. Which inference is best?",
    "options": [
      "sample B has the larger BOD₅ and biodegradable organic load",
      "sample A has the larger BOD₅",
      "both have the same BOD₅",
      "BOD cannot relate to oxygen loss"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "BOD₅ is the oxygen consumed during the incubation. A consumes 1.5 mg/L while B consumes 5.0 mg/L, so B has the larger BOD and biodegradable load.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-022",
    "section": "Chemistry",
    "topic": "Surface Chemistry",
    "difficulty": "hard",
    "question": "For Langmuir adsorption θ=KP/(1+KP). At P=2 bar, θ=2/3. What surface coverage is predicted at P=1 bar?",
    "options": [
      "1/3",
      "2/5",
      "3/5",
      "1/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "From 2K/(1+2K)=2/3, K=1 bar⁻¹. At 1 bar, θ=1/(1+1)=1/2.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-023",
    "section": "Chemistry",
    "topic": "Colloids",
    "difficulty": "hard",
    "question": "A sol’s particles migrate toward the anode in an electric field. Which statement and coagulant choice are consistent with this observation?",
    "options": [
      "the particles are negative; AlCl₃ is especially effective",
      "the particles are positive; AlCl₃ is especially effective",
      "the particles are negative; NaCl is always more effective than AlCl₃",
      "the particles are neutral; electrolyte valence is irrelevant"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Migration to the positive anode means the particles are negatively charged. Their counter-ions are cations, and the high-valence Al³⁺ ion is highly effective for coagulation.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-024",
    "section": "Chemistry",
    "topic": "Redox Reactions",
    "difficulty": "medium",
    "question": "In acidic solution, one MnO₄⁻ ion is reduced to Mn²⁺ while Fe²⁺ is oxidized to Fe³⁺. How many moles of Fe²⁺ are oxidized per mole of MnO₄⁻?",
    "options": [
      "1",
      "3",
      "8",
      "5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Mn changes from +7 to +2 and gains 5 electrons. Each Fe²⁺ loses one electron, so 5 Fe²⁺ are oxidized per MnO₄⁻.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-025",
    "section": "Chemistry",
    "topic": "p-Block Elements",
    "difficulty": "hard",
    "question": "A mixture contains 0.20 mol PCl₅ and 0.30 mol PCl₃. Both are completely hydrolyzed with excess water. How many moles of HCl are produced?",
    "options": [
      "1.30 mol",
      "1.90 mol",
      "1.50 mol",
      "2.50 mol"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Complete hydrolysis gives 5 HCl per PCl₅ and 3 HCl per PCl₃. Total=0.20·5+0.30·3=1.90 mol.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-026",
    "section": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "hard",
    "question": "XeF₂ and XeF₄ are described by VSEPR as AX₂E₃ and AX₄E₂ respectively. What is the total number of lone pairs on the two central Xe atoms?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "XeF₂ has 3 central lone pairs and XeF₄ has 2, for a total of 5.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-027",
    "section": "Chemistry",
    "topic": "Acids and Bases",
    "difficulty": "hard",
    "question": "100 mL of 0.10 M HCl is mixed with 50 mL of 0.10 M Ba(OH)₂, giving exact neutralization. Then 10 mL of 0.10 M HCl is added. Ignoring volume change on mixing beyond addition, what is the final pH?",
    "options": [
      "1.20",
      "3.20",
      "11.80",
      "2.20"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The added HCl contributes 0.001 mol H⁺ in total volume 0.160 L, so [H⁺]=0.00625 M. pH=−log(0.00625)≈2.20.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-028",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "hard",
    "question": "For Zn|Zn²⁺(0.10 M)||Cu²⁺(1.0 M)|Cu at 25°C, E°cell=1.10 V. Using E=E°−(0.0592/2)log([Zn²⁺]/[Cu²⁺]), what is Ecell?",
    "options": [
      "1.13 V",
      "1.07 V",
      "1.10 V",
      "1.16 V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The concentration ratio is 0.10, whose log is −1. Thus E=1.10−0.0296(−1)=1.1296≈1.13 V.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-029",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "hard",
    "question": "Initial-rate data show that doubling [A] at fixed [B] doubles the rate, while doubling [B] at fixed [A] quadruples the rate. By what factor does the rate change if both concentrations are doubled?",
    "options": [
      "4",
      "6",
      "16",
      "8"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The rate law is proportional to [A][B]². Doubling both gives factor 2·2²=8.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-030",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "hard",
    "question": "An ideal liquid mixture has x_A=0.40, with P_A*=100 torr and P_B*=50 torr. What is the mole fraction of A in the equilibrium vapour?",
    "options": [
      "2/5",
      "1/2",
      "4/7",
      "3/5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Partial pressures are p_A=40 torr and p_B=30 torr, so y_A=40/(40+30)=4/7.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-031",
    "section": "Chemistry",
    "topic": "Coordination Chemistry",
    "difficulty": "medium",
    "question": "For Ni(II), [Ni(CN)₄]²⁻ is square planar while [NiCl₄]²⁻ is tetrahedral. What is the total number of unpaired electrons across the two complexes?",
    "options": [
      "0",
      "1",
      "4",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Ni(II) is d⁸. Strong-field square-planar [Ni(CN)₄]²⁻ is diamagnetic with 0 unpaired electrons, while tetrahedral [NiCl₄]²⁻ has 2 unpaired electrons. Total=2.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-032",
    "section": "Chemistry",
    "topic": "Organic Chemistry",
    "difficulty": "hard",
    "question": "A C₃H₆O compound gives a positive Tollens test. It is oxidized, converted to its sodium salt, and then heated with soda lime. What hydrocarbon is formed?",
    "options": [
      "methane",
      "ethane",
      "propane",
      "ethene"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The Tollens-positive C₃ aldehyde is propanal. Oxidation gives propanoic acid; its sodium salt decarboxylates with soda lime to ethane.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-033",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "medium",
    "question": "A sucrose solution is tested with Tollens reagent before and after complete acid hydrolysis followed by neutralization. What result is expected?",
    "options": [
      "positive before, negative after",
      "negative before, positive after",
      "positive both before and after",
      "negative both before and after"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Sucrose is nonreducing, but hydrolysis gives glucose and fructose, which give a positive reducing-sugar test after suitable conditions.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-034",
    "section": "Chemistry",
    "topic": "Polymers",
    "difficulty": "hard",
    "question": "In a linear polyesterification, 0.20 mol OH groups and 0.20 mol COOH groups are initially present. If 0.18 mol ester bonds form, what percentage of each functional-group type has reacted?",
    "options": [
      "90%",
      "45%",
      "80%",
      "95%"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Each ester bond consumes one OH and one COOH group. Thus 0.18/0.20=0.90, so 90% of each functional-group type has reacted.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-035",
    "section": "Chemistry",
    "topic": "Nuclear Chemistry",
    "difficulty": "hard",
    "question": "A radioactive parent with 10-day half-life initially has no daughter. After 20 days, half of the stable daughter atoms are physically removed without disturbing the parent. What is the daughter:parent atom ratio immediately afterward?",
    "options": [
      "1:1",
      "2:1",
      "3:1",
      "3:2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "After two half-lives, parent=N₀/4 and daughter=3N₀/4. Removing half the daughter leaves 3N₀/8, so daughter:parent=(3/8):(1/4)=3:2.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-036",
    "section": "Chemistry",
    "topic": "Mole Concept",
    "difficulty": "medium",
    "question": "A gas mixture contains 0.20 mol N₂ and 0.30 mol CO₂. What is the ratio of the number of oxygen atoms to the total number of gas molecules?",
    "options": [
      "3/5",
      "6/5",
      "1",
      "3/2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are 0.50 mol gas molecules total. Oxygen atoms are 2·0.30=0.60 mol, so the ratio is 0.60/0.50=6/5.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-037",
    "section": "Chemistry",
    "topic": "Stoichiometry",
    "difficulty": "hard",
    "question": "5.4 g Al reacts with 14.2 g Cl₂ according to 2Al+3Cl₂→2AlCl₃. Using molar masses Al=27, Cl₂=71, AlCl₃=133.5 g mol⁻¹, what mass of AlCl₃ can form?",
    "options": [
      "17.8 g",
      "13.4 g",
      "26.7 g",
      "35.6 g"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Al=0.20 mol and Cl₂=0.20 mol, so Cl₂ is limiting. Product moles=(2/3)(0.20)=0.1333 mol, giving about 17.8 g AlCl₃.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-038",
    "section": "Chemistry",
    "topic": "Gaseous State",
    "difficulty": "hard",
    "question": "At the same temperature, 2 L of gas A at 3 atm and 3 L of gas B at 1 atm are transferred into a 5 L vessel. Assuming ideal behaviour, what is the final partial pressure of A?",
    "options": [
      "1.2 atm",
      "0.6 atm",
      "1.8 atm",
      "2.4 atm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For A, nRT=P_iV_i=6 L·atm. In 5 L its partial pressure is 6/5=1.2 atm.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-039",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "medium",
    "question": "18 g glucose (M=180 g mol⁻¹) is dissolved in 90 g water. After 10 g water is added, what is the molality?",
    "options": [
      "0.5 m",
      "1.1 m",
      "1.0 m",
      "2.0 m"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Glucose amount is 0.10 mol. Final water mass is 100 g=0.100 kg, so molality=0.10/0.100=1.0 m.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-040",
    "section": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "hard",
    "question": "A hydrogen atom emits one photon in a 4→2 transition and then one in a 2→1 transition. What is E(2→1)/E(4→2)?",
    "options": [
      "2",
      "3",
      "5",
      "4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Hydrogen transition energies are proportional to differences in 1/n². E₂₁∝1−1/4=3/4; E₄₂∝1/4−1/16=3/16. Ratio=4.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-041",
    "section": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "hard",
    "question": "How many of the following quantum-number sets are valid for an electron: (2,1,0,+1/2), (3,3,0,+1/2), (4,2,−2,−1/2), (1,0,0,−1/2), (3,1,2,+1/2)?",
    "options": [
      "3",
      "1",
      "2",
      "4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Valid sets require 0≤l≤n−1 and |m_l|≤l. The first, third and fourth are valid; the second has l=3 for n=3, and the fifth has |m_l|=2>l=1. Thus 3 are valid.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-042",
    "section": "Chemistry",
    "topic": "Periodic Properties",
    "difficulty": "medium",
    "question": "Na⁺, Mg²⁺ and Al³⁺ are isoelectronic. Which pair is respectively largest and smallest in ionic radius?",
    "options": [
      "Na⁺; Al³⁺",
      "Al³⁺; Na⁺",
      "Mg²⁺; Na⁺",
      "Na⁺; Mg²⁺"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For an isoelectronic series, radius decreases as nuclear charge increases. Thus Na⁺ is largest and Al³⁺ smallest.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-043",
    "section": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "hard",
    "question": "Consider NH₃ and H₂O before protonation, and NH₄⁺ and H₃O⁺ after one proton is added to each. By how many does the total number of central-atom lone pairs decrease?",
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "NH₃ and H₂O have 1+2=3 central lone pairs. NH₄⁺ and H₃O⁺ have 0+1=1. The total decreases by 2.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-044",
    "section": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "medium",
    "question": "Two identical bond-dipole vectors of magnitude μ make an angle of 120° with each other. What is the magnitude of their vector sum?",
    "options": [
      "0",
      "√2 μ",
      "μ",
      "2μ"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Resultant magnitude is √(μ²+μ²+2μ²cos120°)=√(2μ²−μ²)=μ.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-045",
    "section": "Chemistry",
    "topic": "Thermochemistry",
    "difficulty": "hard",
    "question": "A reaction carried out in 200 g of solution raises the solution temperature by 5.0 K. Take the solution specific heat as 4.2 J g⁻¹K⁻¹ and neglect calorimeter heat capacity. If 0.050 mol of reaction occurred, what is ΔH per mole of reaction?",
    "options": [
      "−42 kJ mol⁻¹",
      "−84 kJ mol⁻¹",
      "+84 kJ mol⁻¹",
      "−168 kJ mol⁻¹"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The solution absorbs q=mcΔT=200·4.2·5=4200 J, so the reaction releases 4.2 kJ. Per 0.050 mol, ΔH=−4.2/0.050=−84 kJ mol⁻¹.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-046",
    "section": "Chemistry",
    "topic": "Acids and Bases",
    "difficulty": "hard",
    "question": "25.0 mL of H₂SO₄ is exactly neutralized by 40.0 mL of 0.150 M NaOH. Assuming complete two-proton neutralization, what is the H₂SO₄ molarity?",
    "options": [
      "0.060 M",
      "0.180 M",
      "0.240 M",
      "0.120 M"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "NaOH moles=0.0400·0.150=0.00600. H₂SO₄ moles are half, 0.00300, in 0.0250 L, giving 0.120 M.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-047",
    "section": "Chemistry",
    "topic": "Chemical Equilibrium",
    "difficulty": "medium",
    "question": "For A(g)⇌2B(g), Kc=4.0. For B(g)⇌C(g), Kc=3.0 at the same temperature. What is Kc for A(g)⇌2C(g)?",
    "options": [
      "36",
      "12",
      "24",
      "48"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The first reaction has Kc=4. The second reaction must occur twice, so its equilibrium constant becomes 3²=9. Adding the reactions gives A⇌2C, with Kc=4×9=36.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-048",
    "section": "Chemistry",
    "topic": "Chemical Equilibrium",
    "difficulty": "hard",
    "question": "For A(g)⇌2B(g), initially 1.0 mol A is placed in a 1.0 L vessel. At equilibrium the degree of dissociation is 0.40. What is Kc?",
    "options": [
      "2/3",
      "16/15",
      "4/5",
      "8/5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At equilibrium [A]=0.60 M and [B]=0.80 M. Thus Kc=[B]²/[A]=0.64/0.60=16/15.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-049",
    "section": "Chemistry",
    "topic": "Ionic Equilibrium",
    "difficulty": "hard",
    "question": "A weak monoprotic acid has Ka=1×10⁻⁵. Using the √(KaC) approximation, what is the pH change when its concentration is diluted from 0.10 M to 0.0010 M?",
    "options": [
      "increase by 1 pH unit",
      "decrease by 1",
      "increase by 2",
      "no change"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At 0.10 M, [H⁺]≈10⁻³ M (pH 3). At 0.0010 M, [H⁺]≈10⁻⁴ M (pH 4). The pH increases by 1.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-050",
    "section": "Chemistry",
    "topic": "Ionic Equilibrium",
    "difficulty": "hard",
    "question": "A buffer contains 0.012 mol HA and 0.008 mol A⁻, with pKa(HA)=4.80. If 0.002 mol HCl is added and volume change is neglected, what is the new pH, approximately?",
    "options": [
      "4.18",
      "4.43",
      "4.62",
      "4.80"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "HCl converts A⁻ to HA, giving 0.006 mol A⁻ and 0.014 mol HA. Henderson–Hasselbalch gives pH=4.80+log(0.006/0.014)=4.80+log(3/7)≈4.43.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-051",
    "section": "Chemistry",
    "topic": "Solutions and Colligative Properties",
    "difficulty": "medium",
    "question": "A solution contains 0.10 molal glucose and 0.050 molal electrolyte AB₂ whose van’t Hoff factor is 2.5. Taking Kf=1.86 K kg mol⁻¹, what is the total freezing-point depression if the solutes act independently?",
    "options": [
      "0.42 K",
      "0.28 K",
      "0.56 K",
      "0.70 K"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The effective particle molality is 0.10+2.5(0.050)=0.225 mol kg⁻¹. Thus ΔTf=1.86×0.225=0.4185 K≈0.42 K.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-052",
    "section": "Chemistry",
    "topic": "Solubility Equilibrium",
    "difficulty": "medium",
    "question": "A sparingly soluble salt M₂X has Ksp=4.0×10⁻¹². In a solution where [X²⁻] is maintained at 0.025 M, what is the equilibrium [M⁺] while solid M₂X is present?",
    "options": [
      "4.0×10⁻⁶ M",
      "8.0×10⁻⁶ M",
      "2.0×10⁻⁵ M",
      "1.26×10⁻⁵ M"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Ksp=[M⁺]²[X²⁻]. Hence [M⁺]=√(4.0×10⁻¹²/0.025)=√(1.6×10⁻¹⁰)≈1.26×10⁻⁵ M.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-053",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "hard",
    "question": "The same charge passes through AgNO₃ and Al³⁺ electrolytic cells. If 1.08 g Ag (M=108) is deposited, what mass of Al (M=27) is deposited?",
    "options": [
      "0.03 g",
      "0.09 g",
      "0.27 g",
      "0.81 g"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "1.08 g Ag is 0.010 mol Ag and therefore 0.010 mol electrons. Al³⁺ requires 3 mol e⁻ per mol Al, so Al moles=0.010/3 and mass=0.090 g.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-054",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "hard",
    "question": "At 25°C, a silver concentration cell is Ag|Ag⁺(0.010 M)||Ag⁺(1.0 M)|Ag. Using E=(0.0592/n)log(C_high/C_low), what is Ecell?",
    "options": [
      "0.0296 V",
      "0.0592 V",
      "0.118 V",
      "0.236 V"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For Ag⁺, n=1 and concentration ratio=100. Hence E=0.0592log100=0.1184 V≈0.118 V.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-055",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "hard",
    "question": "In a first-order reaction, 80% of reactant remains after 10 min. How long from the start will it take for 64% to remain?",
    "options": [
      "20 min",
      "12.5 min",
      "16 min",
      "25 min"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For first order, the remaining fraction multiplies exponentially. Since 0.64=(0.80)², reaching 64% requires two 10-min intervals, i.e. 20 min.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-056",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "medium",
    "question": "A first-order reaction has k₂=4k₁ at a higher temperature. If the reactant concentration at the higher temperature experiment is half that in the lower-temperature experiment, what is r₂/r₁ at the instant compared?",
    "options": [
      "1/2",
      "2",
      "4",
      "8"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a first-order reaction r=k[A]. Thus r₂/r₁=(4k₁·0.5[A₁])/(k₁[A₁])=2.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-057",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "medium",
    "question": "A solution contains 0.10 mol of a nonvolatile nonelectrolyte in a total volume of 0.500 L at 300 K. Using R=0.0821 L·atm·mol⁻¹·K⁻¹, what is its osmotic pressure?",
    "options": [
      "2.46 atm",
      "9.85 atm",
      "1.64 atm",
      "4.93 atm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The molarity is 0.10/0.500=0.20 M. For a nonelectrolyte, π=MRT=0.20·0.0821·300≈4.93 atm.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-058",
    "section": "Chemistry",
    "topic": "Colligative Properties",
    "difficulty": "hard",
    "question": "A 0.10 m solution of electrolyte AB has freezing-point depression 0.279 K in water, where Kf=1.86 K kg mol⁻¹. If AB⇌A⁺+B⁻, what is the degree of dissociation?",
    "options": [
      "50%",
      "25%",
      "75%",
      "100%"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "i=ΔTf/(Kf m)=0.279/(1.86·0.10)=1.5. For AB→2 ions, i=1+α, so α=0.5=50%.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-059",
    "section": "Chemistry",
    "topic": "Solid State",
    "difficulty": "hard",
    "question": "A cubic crystal has edge 500 pm, molar mass 60 g mol⁻¹ and density 3.19 g cm⁻³. Using N_A=6.02×10²³ mol⁻¹, how many formula units are in one unit cell, approximately?",
    "options": [
      "1",
      "4",
      "2",
      "8"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a=5×10⁻⁸ cm, so a³=1.25×10⁻²² cm³. Z=ρa³N_A/M≈3.19·1.25×10⁻²²·6.02×10²³/60≈4.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "cusat-cat-2026-btech-test-101-chemistry-060",
    "section": "Chemistry",
    "topic": "Coordination Chemistry",
    "difficulty": "hard",
    "question": "A complex has formula [Co(en)₂Cl₂]Cl. For 0.10 mol complex, excess AgNO₃ precipitates 0.10 mol AgCl. What are the number of ionizable chloride ions per formula unit and the coordination number of Co?",
    "options": [
      "2 and 4",
      "2 and 6",
      "1 and 6",
      "1 and 4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Only the chloride outside the brackets is ionizable, so there is 1 counter-ion. Two bidentate en ligands donate four sites and two coordinated Cl⁻ donate two more, giving coordination number 6.",
    "source": {
      "kind": "original",
      "reference": "CUSAT CAT 2026 Prospectus — Test Code 101",
      "url": "https://admissions.cusat.ac.in/Prospectus/Prospectus2026.pdf",
      "checkedOn": "2026-09-03"
    }
  },
];
