import type { Question } from '../questions';

// Frozen Main Brain handoff content, integrated mechanically on 8 September
// 2026. VITEEE 2026 MPCEA route, 125 questions across the official five sections.
// Records are copied field-for-field from the approved package; stems,
// options, answer keys, explanations, sections, difficulty, marking and
// source metadata are not rewritten here. Sections are laid out English
// before Aptitude to match this exam's existing fullMockLayouts entry in
// questions.ts, which Tests 1 and 2 already follow; the runtime asserts the
// two agree.

export const VITEEE_2026_MPCEA_FULL_MOCK_3: Question[] = [
  {
    "id": "viteee-2026-mpcea-mathematics-001",
    "section": "Mathematics",
    "topic": "Sets and Relations",
    "difficulty": "hard",
    "question": "A lab labels 72 samples by three binary tags A, B and C. Exactly 18 samples carry A and B together, 16 carry B and C together, and 14 carry C and A together; these pair counts include the samples carrying all three. Eight samples carry all three tags, and 20 carry none. If 36 samples carry A and 34 carry B, how many carry C?",
    "options": [
      "18",
      "22",
      "26",
      "30"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The union contains 72-20=52 samples. Inclusion-exclusion gives 52=36+34+C-18-16-14+8=30+C, hence C=22.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-002",
    "section": "Mathematics",
    "topic": "Functions",
    "difficulty": "hard",
    "question": "Let h(x)=|2x-3|+|x+4|. If h(x)=15, what is the sum of all real solutions?",
    "options": [
      "-2/3",
      "2/3",
      "-1/3",
      "1/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For x>=3/2, h(x)=3x+1, giving x=14/3. For x<=-4, h(x)=-3x-1, giving x=-16/3. The middle interval gives x=-8, which is outside that interval. Thus the sum is -2/3.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-003",
    "section": "Mathematics",
    "topic": "Inverse Functions",
    "difficulty": "medium",
    "question": "A calibration map is h(x)=(4x-7)/(x+3). A readout y is known to satisfy h^{-1}(y)=5. What is 8y-4?",
    "options": [
      "7",
      "9",
      "11",
      "13"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "h^{-1}(y)=5 means y=h(5)=(20-7)/8=13/8. Therefore 8y-4=13-4=9.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-004",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "hard",
    "question": "A complex number z satisfies z+(2-i)=3+4i and w=(1+i)z. What is |w|^2+Re(w)?",
    "options": [
      "44",
      "50",
      "56",
      "48"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "z=1+5i and w=(1+i)(1+5i)=-4+6i. Thus |w|^2=52 and |w|^2+Re(w)=52-4=48.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-005",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "hard",
    "question": "A monic quadratic has roots p and q. After each root is increased by 2, the new roots have sum 11 and product 24. What is pq+(p+q)?",
    "options": [
      "11",
      "13",
      "15",
      "17"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The shifted sum gives p+q=7. The shifted product gives pq+14+4=24, so pq=6. Hence pq+(p+q)=13.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-006",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "hard",
    "question": "The equation x^2-sx+12=0 has positive roots whose difference is 1. What is s?",
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
    "explanation": "If roots are r and r+1, then r(r+1)=12, giving r=3. Their sum s=7.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-007",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "hard",
    "question": "An arithmetic progression has a_4+a_9=41 and a_6=18. What is a_1+a_12?",
    "options": [
      "36",
      "39",
      "43",
      "41"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "In an AP, a4+a9=2a1+11d=41. Also a6=a1+5d=18. Then a1+a12=2a1+11d, exactly the same symmetric sum, so it is 41.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-008",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "hard",
    "question": "A sequence starts u1=1 and obeys u_{n+1}=2u_n+(-1)^n. What is u5?",
    "options": [
      "9",
      "11",
      "13",
      "15"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "u2=1, u3=3, u4=5, u5=11 by alternating -1,+1,-1,+1 additions after doubling.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-009",
    "section": "Mathematics",
    "topic": "Geometric Progressions",
    "difficulty": "hard",
    "question": "Three consecutive positive terms of a geometric progression have sum 21 and product 216. What is the largest of the three terms?",
    "options": [
      "6",
      "12",
      "9",
      "18"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For consecutive GP terms a/r,a,ar, their product is a^3=216, so a=6. Then 6(r+1+1/r)=21, hence r+1/r=5/2. With r>1, r=2, giving terms 3,6,12.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-010",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "hard",
    "question": "Evaluate sum_{k=1}^{4} 1/[(2k-1)(2k+1)].",
    "options": [
      "3/8",
      "5/12",
      "1/2",
      "4/9"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Use 1/[(2k-1)(2k+1)]=(1/2)[1/(2k-1)-1/(2k+1)]. The telescoping sum is (1/2)(1-1/9)=4/9.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-011",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "hard",
    "question": "For P(x)=(1+2x)^5, let E be the sum of coefficients of even powers of x and O the sum for odd powers. What is E-O?",
    "options": [
      "-1",
      "1",
      "31",
      "32"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "E-O=P(-1)=(1-2)^5=-1.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-012",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "hard",
    "question": "In the expansion of (x^2+3/x)^6, the term obtained by choosing exactly three factors of 3/x has what power of x?",
    "options": [
      "x^0",
      "x^6",
      "x^9",
      "x^3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The x-power is 2(6-3)-3=6-3=3, so the term is proportional to x^3.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-013",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "hard",
    "question": "Seven distinct cards A,B,C,D,E,F,G are placed in a row. A must be somewhere left of B, C and D must not be adjacent, and G must be at an end. How many arrangements satisfy all three conditions?",
    "options": [
      "360",
      "480",
      "600",
      "720"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Choose G’s end in 2 ways. For a fixed end, 6!/2=360 arrangements have A left of B. Among these, C,D adjacent in 2·5!/2=120 arrangements. Thus 240 per end, giving 480.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-014",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "hard",
    "question": "A five-member panel is formed from 5 engineers and 4 analysts, then one panel member is named coordinator. The panel must contain exactly 3 engineers, and the coordinator must be an analyst. How many outcomes are possible?",
    "options": [
      "60",
      "180",
      "240",
      "120"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Choose 3 engineers in C(5,3)=10 ways and 2 analysts in C(4,2)=6 ways, then choose the coordinator from the 2 selected analysts. Total 10·6·2=120.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-015",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "Box A contains 3 blue and 2 gold chips; box B contains 1 blue and 4 gold. A fair coin is tossed twice. If exactly one head occurs, draw from A; otherwise draw from B. What is the probability of drawing blue?",
    "options": [
      "1/3",
      "3/10",
      "7/15",
      "2/5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Exactly one head has probability 1/2. Hence P(blue)=1/2·3/5+1/2·1/5=2/5.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-016",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "A point is chosen uniformly in the square 0≤x≤4, 0≤y≤4. Conditional on x+y≥4, what is the probability that x≥2?",
    "options": [
      "1/2",
      "2/3",
      "3/4",
      "7/8"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The condition x+y≥4 is the upper-right triangle of area 8. Within it, the part with x<2 has area ∫_0^2 x dx=2, so x≥2 has area 6; probability 6/8=3/4.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-017",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "hard",
    "question": "For A=[[1,t],[2,1]], the matrices A and A^2 have equal determinants. If t≠0, what is t?",
    "options": [
      "1/2",
      "-1/2",
      "1",
      "2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "det(A)=1-2t and det(A^2)=det(A)^2. Equality gives d=d^2, so d=0 or 1. t≠0 excludes d=1 (t=0), leaving 1-2t=0, hence t=1/2.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-018",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "hard",
    "question": "Let N=[[0,2],[0,0]] and A=I+N. What is the sum of all entries of A^4-A?",
    "options": [
      "4",
      "8",
      "12",
      "6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "N^2=0, so A^4=(I+N)^4=I+4N. Thus A^4-A=3N=[[0,6],[0,0]], whose entry sum is 6.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-019",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "hard",
    "question": "The lines x+2y=7 and 3x-y=7 meet at P. A line through P is perpendicular to 2x+y=5. What is twice its y-intercept?",
    "options": [
      "1",
      "-1",
      "2",
      "3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The intersection is P=(3,2). A line perpendicular to 2x+y=5 has slope 1/2. Thus y-2=(x-3)/2 and the y-intercept is 1/2, so twice it is 1.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-020",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "hard",
    "question": "Triangle A(1,1), B(5,1), C(2,4) is reflected across the line y=x. What is the area of the reflected triangle plus the y-coordinate of the reflected image of C?",
    "options": [
      "8",
      "6",
      "7",
      "10"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Reflection preserves the triangle area 6. C=(2,4) reflects to (4,2), whose y-coordinate is 2. Total=8.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-021",
    "section": "Mathematics",
    "topic": "Circle",
    "difficulty": "hard",
    "question": "A circle has centre (2,-1). The line x=5 cuts a chord of length 8. What is the square of the circle’s radius?",
    "options": [
      "16",
      "25",
      "34",
      "41"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The centre-to-line distance is 3. Half the chord is 4. By the right triangle, r^2=3^2+4^2=25.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-022",
    "section": "Mathematics",
    "topic": "Circle",
    "difficulty": "hard",
    "question": "Two circles x^2+y^2-4x+2y-4=0 and x^2+y^2+2x-6y+1=0 share a common chord. At what y-value does that chord cross the y-axis?",
    "options": [
      "-5/8",
      "-4/3",
      "5/8",
      "1/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Subtracting the first equation from the second gives 6x-8y+5=0. Setting x=0 gives y=5/8.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-023",
    "section": "Mathematics",
    "topic": "Conic Sections",
    "difficulty": "hard",
    "question": "For the parabola y^2=12x, the tangent at parameter t=1 meets the normal at parameter t=2 at Q. What is the x-coordinate of Q?",
    "options": [
      "7",
      "9",
      "11",
      "13"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Here a=3. The tangent at t=1 is y=x+3. The normal at t=2 is y=-2x+2at+at^3=-2x+36. Equating them gives 3x=33, so x=11.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-024",
    "section": "Mathematics",
    "topic": "Conic Sections",
    "difficulty": "hard",
    "question": "At the first-quadrant point (3,16/5) on the ellipse x^2/25+y^2/16=1, let m be the tangent slope. What is 20m?",
    "options": [
      "-12",
      "-15",
      "-9",
      "12"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For x^2/25+y^2/16=1, m=-(16x)/(25y). At (3,16/5), m=-48/80=-3/5, so 20m=-12.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-025",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "hard",
    "question": "Let a=(2,-1,3), b=(1,4,-2), and c=(5,2,1). Choose λ so that a+λb is perpendicular to c. What is λ?",
    "options": [
      "-9/17",
      "9/17",
      "1",
      "-1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a·c=11 and b·c=11, so (a+λb)·c=11(1+λ)=0. Hence λ=-1.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-026",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "hard",
    "question": "Vectors u=(1,2,0), v=(2,-1,3), and w=(0,1,2) form a parallelepiped. What is its volume?",
    "options": [
      "13",
      "9",
      "12",
      "15"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "v×w=(-5,-4,2). Dotting with u gives -13; the volume is the absolute value, 13.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-027",
    "section": "Mathematics",
    "topic": "Three-Dimensional Geometry",
    "difficulty": "hard",
    "question": "The line r=(1,0,2)+t(2,-1,1) meets the plane x+2y+z=7 at P. What is the squared distance OP^2 from the origin?",
    "options": [
      "121",
      "129",
      "133",
      "137"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The plane condition gives 3+t=7, hence t=4 and P=(9,-4,6). Therefore OP^2=9^2+(-4)^2+6^2=133.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-028",
    "section": "Mathematics",
    "topic": "Differentiation",
    "difficulty": "hard",
    "question": "For f(x)=(x^2+a x+1)/(x+2), the tangent at x=0 is horizontal. What is f(2)?",
    "options": [
      "1/2",
      "1",
      "5/4",
      "3/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f'(0)=(2a-1)/4. Horizontal tangent gives a=1/2. Hence f(2)=(4+1+1)/4=3/2.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-029",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "hard",
    "question": "A closed-top box has square base side x and volume 32. Its surface area is A(x)=2x^2+128/x for x>0. What value of x^3 occurs at the minimum?",
    "options": [
      "32",
      "16",
      "48",
      "64"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "dA/dx=4x-128/x^2. At the minimum, 4x^3=128, so x^3=32.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-030",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "hard",
    "question": "A continuous function satisfies f(x)+f(4-x)=(x-2)^2+3 for 0≤x≤4. What is ∫_0^4 f(x) dx?",
    "options": [
      "20/3",
      "8",
      "26/3",
      "52/3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The right side is symmetric about x=2. Integrating, the two f-integrals are equal, so 2I=∫_0^4[(x-2)^2+3]dx=16/3+12=52/3. Hence I=26/3.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-031",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "hard",
    "question": "Evaluate ∫_0^1 (3x^2+1)/(x^3+x+2)^2 dx.",
    "options": [
      "1/6",
      "1/4",
      "1/3",
      "1/2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let u=x^3+x+2, du=(3x^2+1)dx. The integral is [-1/u]_2^4=1/2-1/4=1/4.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-032",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "hard",
    "question": "A function y(x) satisfies dy/dx=x(1-y), y(0)=0. At the point where x^2=2 ln 3, what is y?",
    "options": [
      "2/3",
      "1/3",
      "1/2",
      "3/4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Solve dy/(1-y)=x dx: -ln(1-y)=x^2/2. Thus y=1-e^{-x^2/2}. For x^2=2 ln3, y=1-1/3=2/3.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-033",
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "hard",
    "question": "Evaluate lim_{x→0} [sqrt(1+6x+19x^2)-1-3x]/x^2.",
    "options": [
      "7/2",
      "4",
      "9/2",
      "5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Rationalize the numerator. The difference of squares is (1+6x+19x^2)-(1+6x+9x^2)=10x^2. The denominator becomes x^2[sqrt(1+6x+19x^2)+1+3x], whose bracket tends to 2. Hence the limit is 10/2=5.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-034",
    "section": "Mathematics",
    "topic": "Continuity and Differentiability",
    "difficulty": "hard",
    "question": "Let f(x)=ax^2+bx+1 for x≤1 and f(x)=4x-1 for x>1. If f is continuous and differentiable at 1, what is a-b?",
    "options": [
      "-2",
      "0",
      "2",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Continuity gives a+b=2. Differentiability gives 2a+b=4. Hence a=2,b=0 and a-b=2.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-035",
    "section": "Mathematics",
    "topic": "Logarithms",
    "difficulty": "hard",
    "question": "Positive x,y satisfy log_2(xy)=6 and log_2(x/y)=2. What is x+y?",
    "options": [
      "20",
      "16",
      "18",
      "24"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Adding gives 2log2 x=8, so x=16. Subtracting gives 2log2 y=4, so y=4. Sum=20.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-036",
    "section": "Mathematics",
    "topic": "Exponential Functions",
    "difficulty": "hard",
    "question": "If x>0 and 3^x+3^{-x}=10/3, what is 3^x+1?",
    "options": [
      "10/3",
      "11/3",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let t=3^x>1. Then 3t^2-10t+3=0 gives t=3 or 1/3; x>0 selects t=3. Thus 3^x+1=4.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-037",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "hard",
    "question": "Angles A and B satisfy tan A+tan B=5 and tan A tan B=2, with A+B not an odd multiple of 90°. What is tan(A+B)+tan A tan B?",
    "options": [
      "-7",
      "3",
      "-3",
      "7"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "tan(A+B)=5/(1-2)=-5. Adding tanA tanB=2 gives -3.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-038",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "hard",
    "question": "An angle θ satisfies sinθ+cosθ=1/3. What is 9 sin2θ?",
    "options": [
      "-7",
      "-8",
      "-5",
      "8"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "(sinθ+cosθ)^2=1+sin2θ=1/9. Hence sin2θ=-8/9, so 9sin2θ=-8.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-039",
    "section": "Mathematics",
    "topic": "Inverse Trigonometry",
    "difficulty": "hard",
    "question": "Let θ=arccos(20/29), with θ acute. What is sin(2θ)-3cos(2θ)?",
    "options": [
      "717/841",
      "799/841",
      "881/841",
      "963/841"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Since cosθ=20/29 and θ is acute, sinθ=21/29. Thus sin2θ=840/841 and cos2θ=(400-441)/841=-41/841. Therefore sin2θ-3cos2θ=(840+123)/841=963/841.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-mathematics-040",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "hard",
    "question": "A dataset X has mean 7 and variance 9. Define Y=3X-2 and then Z=Y-mean(Y). What is E[Z^2]?",
    "options": [
      "81",
      "27",
      "63",
      "99"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Centering does not change variance. Var(Y)=3^2 Var(X)=81, and E[Z^2]=Var(Y)=81.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-001",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "hard",
    "question": "A cart moves at 2 m/s for 4 s, then accelerates uniformly so that its speed becomes 10 m/s over the next 4 s, and finally brakes uniformly to rest in 5 s. What total distance does it cover?",
    "options": [
      "49 m",
      "61 m",
      "65 m",
      "57 m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Distances are 2·4=8 m, average speed 6 for 4 s gives 24 m, and average speed 5 for 5 s gives 25 m. Total=57 m.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-002",
    "section": "Physics",
    "topic": "Relative Motion",
    "difficulty": "hard",
    "question": "Drone A starts 90 m behind B at 12 m/s while B moves at 8 m/s. After 15 s, B slows to 6 m/s. How long after the start does A catch B?",
    "options": [
      "18 s",
      "20 s",
      "22.5 s",
      "30 s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "In 15 s A gains 60 m, leaving 30 m. Thereafter relative speed is 6 m/s, needing 5 s more; total 20 s.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-003",
    "section": "Physics",
    "topic": "Projectile Motion",
    "difficulty": "hard",
    "question": "A ball is launched horizontally from a ledge. It reaches the ground in 2.0 s with speed 25 m/s. Taking g=10 m/s^2, what was its horizontal launch speed?",
    "options": [
      "10 m/s",
      "15 m/s",
      "20 m/s",
      "25 m/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The vertical impact speed is gt=20 m/s. With total speed 25, horizontal speed=sqrt(25^2-20^2)=15 m/s.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-004",
    "section": "Physics",
    "topic": "Circular Motion",
    "difficulty": "hard",
    "question": "A 0.40 kg puck moves in a horizontal circle of radius 0.50 m. Its inward force is increased from 8 N to 18 N while the radius is unchanged. By what factor does its speed change?",
    "options": [
      "4/3",
      "sqrt(2)",
      "9/4",
      "3/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "v∝sqrt(F) at fixed m,r, so v2/v1=sqrt(18/8)=3/2.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-005",
    "section": "Physics",
    "topic": "Work, Energy and Power",
    "difficulty": "hard",
    "question": "A one-dimensional force is F(x)=4x+2 for 0≤x≤2 and F(x)=10-2x for 2<x≤4, in newtons. What work is done from x=0 to 4 m?",
    "options": [
      "24 J",
      "20 J",
      "28 J",
      "32 J"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "First interval: ∫0^2(4x+2)dx=12 J. Second: ∫2^4(10-2x)dx=12 J. Total=24 J.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-006",
    "section": "Physics",
    "topic": "Momentum",
    "difficulty": "hard",
    "question": "A 9 kg cart-package system moves east at 4 m/s. A spring ejects the 1 kg package west at 4 m/s relative to the remaining 8 kg cart. What is the cart speed afterward?",
    "options": [
      "4 m/s east",
      "5 m/s east",
      "44/9 m/s east",
      "40/9 m/s east"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let cart speed be V; package speed is V-4. Momentum conservation gives 8V+(V-4)=36, so 9V=40 and V=40/9 m/s east.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-007",
    "section": "Physics",
    "topic": "Centre of Mass",
    "difficulty": "hard",
    "question": "Masses 2 kg, 3 kg and 5 kg lie at x=-1, 2 and 6 m. The 5 kg mass is moved left until the centre of mass shifts left by 1.5 m. How far is that mass moved?",
    "options": [
      "3 m",
      "2 m",
      "4 m",
      "5 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Only the 5 kg mass moves. A shift d of that mass changes system COM by (5/10)d=d/2. To shift COM 1.5 m left, d=3 m.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-008",
    "section": "Physics",
    "topic": "Rotational Dynamics",
    "difficulty": "hard",
    "question": "A solid cylinder (M=2 kg,R=0.4 m) and a thin ring (M=1 kg,R=0.4 m) are rigidly coaxial. What torque gives angular acceleration 5 rad/s^2?",
    "options": [
      "1.2 N·m",
      "2.0 N·m",
      "1.6 N·m",
      "2.4 N·m"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "I=(1/2)(2)(0.4^2)+(1)(0.4^2)=0.32 kg·m^2. Torque=Iα=1.6 N·m.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-009",
    "section": "Physics",
    "topic": "Angular Momentum",
    "difficulty": "hard",
    "question": "A rotor with I=4 kg·m^2 spins at 6 rad/s. A stationary coaxial rotor with I=2 kg·m^2 couples to it. After coupling, what fraction of the initial kinetic energy is lost?",
    "options": [
      "1/4",
      "1/2",
      "2/3",
      "1/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Angular momentum gives ωf=(4·6)/6=4. Initial KE=72 J; final=48 J. Lost fraction=24/72=1/3.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-010",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "hard",
    "question": "A spherical body of radius R is built from material of density ρ except that the region r<R/2 is replaced by material of density 3ρ and then a concentric spherical cavity of radius R/4 is evacuated. If g0 is the surface gravity of a uniform solid sphere of density ρ and radius R, what is the new surface gravity?",
    "options": [
      "9/8 g0",
      "5/4 g0",
      "77/64 g0",
      "21/16 g0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Relative to the uniform sphere, the outer material contributes 1-1/8=56/64 of the reference mass. The denser core outside the cavity contributes 3[(1/8)-(1/64)]=21/64. Total mass is therefore (56+21)/64=77/64 of the uniform-sphere mass. At the same radius, surface gravity scales with total mass, so g=(77/64)g0.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-011",
    "section": "Physics",
    "topic": "Satellites",
    "difficulty": "hard",
    "question": "A satellite in a circular orbit radius 3R has kinetic energy K. It is moved to a circular orbit radius 6R. What is the new total mechanical energy in terms of K?",
    "options": [
      "-K/2",
      "-K",
      "-K/4",
      "K/2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At r=3R, K=GMm/(6R). Total energy there=-K. Doubling radius halves the magnitude of total energy, so new total=-K/2.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-012",
    "section": "Physics",
    "topic": "Fluid Mechanics",
    "difficulty": "hard",
    "question": "Oil of density 800 kg/m^3 flows through a horizontal pipe. Speed rises from 1 m/s to 3 m/s. Ignoring viscosity, by how much does static pressure decrease?",
    "options": [
      "2.4 kPa",
      "4.0 kPa",
      "3.2 kPa",
      "6.4 kPa"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Bernoulli gives ΔP=(1/2)ρ(v2^2-v1^2)=0.5·800·8=3200 Pa=3.2 kPa.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-013",
    "section": "Physics",
    "topic": "Surface Tension",
    "difficulty": "hard",
    "question": "A soap bubble of radius r has excess pressure 4T/r. If its radius is doubled while surface tension is unchanged, what happens to the product (excess pressure)×(surface area)?",
    "options": [
      "It halves",
      "It is unchanged",
      "It doubles",
      "It quadruples"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "ΔP·A=(4T/r)(4πr^2)=16πTr, which is proportional to r. Doubling r doubles the product.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-014",
    "section": "Physics",
    "topic": "Simple Harmonic Motion",
    "difficulty": "hard",
    "question": "A particle executes x=3 cos(4t)+4 sin(4t) cm. At t=0, what is the ratio of its kinetic energy to total energy?",
    "options": [
      "16/25",
      "9/25",
      "4/5",
      "1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Amplitude is 5 cm. At t=0, x=3 cm. KE/total=1-x^2/A^2=1-9/25=16/25.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-015",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "hard",
    "question": "A string of length 1.5 m supports a standing wave with nodes at both ends and two interior nodes. If the wave speed is 90 m/s, what is the frequency?",
    "options": [
      "60 Hz",
      "120 Hz",
      "180 Hz",
      "90 Hz"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Two interior nodes means the third harmonic. f3=3v/(2L)=3·90/3=90 Hz.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-016",
    "section": "Physics",
    "topic": "Doppler Effect",
    "difficulty": "hard",
    "question": "A source of 500 Hz moves toward a stationary wall at 20 m/s; sound speed is 340 m/s. What frequency of the reflected sound is heard by the source itself?",
    "options": [
      "531.25 Hz",
      "562.5 Hz",
      "550 Hz",
      "588.2 Hz"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Wall receives f1=f·340/(340-20)=531.25 Hz. Reflection makes wall a stationary source; moving original source approaches it, so f2=f1(340+20)/340=562.5 Hz.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-017",
    "section": "Physics",
    "topic": "Thermal Physics",
    "difficulty": "hard",
    "question": "A 0.10 kg metal block at 180°C is dropped into 0.20 kg water at 20°C. Final temperature is 30°C in an insulated cup. Taking c_water=4200 J kg^-1 K^-1, what is the metal’s specific heat?",
    "options": [
      "560 J kg^-1 K^-1",
      "420",
      "600",
      "840"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Heat gained by water=0.2·4200·10=8400 J. Metal loses 0.1·c·150. Thus c=8400/15=560.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-018",
    "section": "Physics",
    "topic": "Kinetic Theory",
    "difficulty": "hard",
    "question": "At the same temperature, gas X has rms speed twice that of gas Y. If Y has molar mass 64 g/mol, what is molar mass of X?",
    "options": [
      "8 g/mol",
      "32 g/mol",
      "16 g/mol",
      "128 g/mol"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "v_rms∝1/sqrt(M). A factor 2 in speed means M_X=M_Y/4=16 g/mol.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-019",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "hard",
    "question": "An ideal gas absorbs 900 J. During the process it first expands at constant pressure doing 500 J of work, then is compressed adiabatically with 200 J of work done on it. What is its net change in internal energy?",
    "options": [
      "200 J",
      "400 J",
      "600 J",
      "800 J"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Net work done by gas=500-200=300 J. First law ΔU=Q-W=900-300=600 J.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-020",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "hard",
    "question": "Charges +q at x=-a and +4q at x=2a produce zero electric field at one point between them. What is that point’s x-coordinate?",
    "options": [
      "-a/3",
      "a/3",
      "a",
      "0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let distances from +q and +4q be d1 and d2 with d1+d2=3a. Equality q/d1^2=4q/d2^2 gives d2=2d1, hence d1=a. Starting at -a gives x=0.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-021",
    "section": "Physics",
    "topic": "Capacitance",
    "difficulty": "hard",
    "question": "Two capacitors C and 2C are in series across voltage V. A dielectric of constant 3 is inserted fully into the capacitor C while the battery remains connected. What is the ratio of final to initial energy stored by the series combination?",
    "options": [
      "6/5",
      "3/2",
      "9/5",
      "2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Initial equivalent=2C/3. Final capacitors 3C and 2C give equivalent=6C/5. At fixed V, energy ratio=(6/5)/(2/3)=9/5.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-022",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "hard",
    "question": "A 4 Ω resistor is in series with a parallel pair of 6 Ω and 3 Ω across 18 V. What power is dissipated in the 3 Ω resistor?",
    "options": [
      "6 W",
      "12 W",
      "18 W",
      "27 W"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Parallel equivalent=2 Ω, total=6 Ω, current=3 A. Voltage across parallel branch=6 V. Power in 3 Ω=36/3=12 W.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-023",
    "section": "Physics",
    "topic": "Electrical Measurements",
    "difficulty": "hard",
    "question": "A voltmeter of resistance 12 kΩ is connected across a 6 kΩ resistor that is in series with 8 kΩ across 12 V. What voltage does the meter read?",
    "options": [
      "3 V",
      "6 V",
      "4 V",
      "8 V"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The measured branch is 6k||12k=4k. In series with 8k, the branch gets 12·4/(8+4)=4 V.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-024",
    "section": "Physics",
    "topic": "Moving Charges and Magnetism",
    "difficulty": "hard",
    "question": "A proton and an alpha particle enter the same uniform magnetic field perpendicular to it with equal speeds. What is r_alpha/r_proton?",
    "options": [
      "1",
      "4",
      "1/2",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "r=mv/(qB). Alpha has 4 times the mass and twice the charge, so its radius is 2 times the proton’s.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-025",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "hard",
    "question": "A square loop of side 0.20 m, resistance 0.50 Ω, is pulled completely out of a uniform 0.80 T field at constant 2 m/s, with one side parallel to the boundary. While it is crossing the boundary, what current flows?",
    "options": [
      "0.32 A",
      "0.80 A",
      "0.64 A",
      "1.28 A"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Motional emf=Bℓv=0.8·0.2·2=0.32 V. Current=0.32/0.5=0.64 A.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-026",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "hard",
    "question": "A 200-turn coil has flux per turn Φ=3t^2 milliwber, with t in seconds. What emf magnitude is induced at t=0.50 s?",
    "options": [
      "0.30 V",
      "0.90 V",
      "0.60 V",
      "1.20 V"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At t=0.5, dΦ/dt=3 mWb/s=3×10^-3 Wb/s. Faraday emf=N dΦ/dt=200·0.003=0.60 V.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-027",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "hard",
    "question": "A series RLC circuit has R=20 Ω and net reactance X_L-X_C=15 Ω. If its real power is 320 W, what is the rms supply voltage?",
    "options": [
      "80 V",
      "120 V",
      "160 V",
      "100 V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P=I^2R gives I=4 A. Impedance=sqrt(20^2+15^2)=25 Ω, so V=100 V.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-028",
    "section": "Physics",
    "topic": "Work, Energy and Power",
    "difficulty": "hard",
    "question": "A 1.0 kg particle moves along the x-axis. For 0 ≤ x ≤ 3 m, a conservative force F(x)=6-3x² newtons acts on it. Between x=1 m and x=2 m, a rough strip also exerts a constant 2 N force opposite to the motion. What is the minimum speed the particle must have at x=0 so that it just reaches x=3 m and stops there?",
    "options": [
      "3√2 m/s",
      "√22 m/s",
      "2√6 m/s",
      "√30 m/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "From x=0 to x=3, the conservative-force work is ∫₀³(6-3x²) dx = [6x-x³]₀³ = -9 J. The rough strip does -2(1)=-2 J of work. Thus the total work is -11 J. To arrive at x=3 with zero kinetic energy, the initial kinetic energy must be 11 J: (1/2)(1)v²=11, so v=√22 m/s. The kinetic energy stays positive before x=3 because the accumulated work reaches its minimum only at the endpoint.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-029",
    "section": "Physics",
    "topic": "Optical Instruments",
    "difficulty": "hard",
    "question": "A symmetric biconvex glass lens has refractive index 1.50 and focal length 20 cm in air. It is immersed in a liquid of index 1.25. What is its focal length in the liquid?",
    "options": [
      "32 cm",
      "50 cm",
      "40 cm",
      "80 cm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Lens power scales with (n_lens/n_medium-1)/(n_lens-1)=(1.2-1)/0.5=0.4, so focal length becomes 20/0.4=50 cm.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-030",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "hard",
    "question": "In a double-slit experiment, covering one slit with a thin sheet shifts the central fringe by 4.5 fringe widths. If μ=1.60 and λ=500 nm, what sheet thickness is required?",
    "options": [
      "2.25 μm",
      "4.50 μm",
      "3.75 μm",
      "6.00 μm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Shift in fringe widths=(μ-1)t/λ. Thus t=4.5λ/0.6=3.75 μm.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-031",
    "section": "Physics",
    "topic": "Photoelectric Effect",
    "difficulty": "hard",
    "question": "For one metal, frequencies 7.0×10^14 Hz and 9.0×10^14 Hz produce stopping potentials differing by 0.828 V. Using h/e=4.14×10^-15 V·s, this confirms which relation?",
    "options": [
      "V_s∝1/f",
      "ΔV_s=eΔf/h",
      "V_s is independent of f",
      "ΔV_s=(h/e)Δf"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Einstein’s equation gives V_s=(h/e)f-φ/e, so differences satisfy ΔV_s=(h/e)Δf. Here 4.14e-15·2e14=0.828 V.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-032",
    "section": "Physics",
    "topic": "Atoms",
    "difficulty": "hard",
    "question": "For a hydrogen-like ion with nuclear charge Z=4 in the n=3 Bohr orbit, multiply (i) its orbital-frequency ratio to ground-state hydrogen by (ii) its orbital-angular-momentum ratio to ground-state hydrogen. What is the product?",
    "options": [
      "4/9",
      "8/9",
      "16/27",
      "16/9"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Bohr orbital frequency scales as Z^2/n^3, giving 16/27 relative to ground-state hydrogen. Orbital angular momentum scales as n, giving a ratio 3. Their product is (16/27)×3=16/9.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-033",
    "section": "Physics",
    "topic": "Nuclei",
    "difficulty": "hard",
    "question": "Isotope A has half-life T and isotope B has half-life 2T. Their initial numbers are equal. After 2T, what is N_A/N_B?",
    "options": [
      "1/2",
      "1/4",
      "1",
      "2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "After 2T, A has 1/4 remaining; B has 1/2 remaining. Ratio=(1/4)/(1/2)=1/2.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-034",
    "section": "Physics",
    "topic": "Semiconductor Electronics",
    "difficulty": "hard",
    "question": "A transistor has α=I_C/I_E=0.98. What is β=I_C/I_B?",
    "options": [
      "24.5",
      "50",
      "49",
      "98"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "β=α/(1-α)=0.98/0.02=49.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-physics-035",
    "section": "Physics",
    "topic": "Logic Gates",
    "difficulty": "hard",
    "question": "A circuit gives Y=(A XOR B) NAND (A OR B). For A=1,B=0, what is Y?",
    "options": [
      "1",
      "A",
      "B",
      "0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A XOR B=1 and A OR B=1. NAND(1,1)=0.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-001",
    "section": "Chemistry",
    "topic": "Stoichiometry",
    "difficulty": "hard",
    "question": "A reactor starts with 0.50 mol X and 0.80 mol Y for 2X+Y→X2Y. The reaction goes to completion and the product is removed. How many moles of Y remain unreacted?",
    "options": [
      "0.55 mol",
      "0.25 mol",
      "0.30 mol",
      "0.65 mol"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "X is limiting: 0.50 mol X consumes 0.25 mol Y. Thus unreacted Y=0.80-0.25=0.55 mol.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-002",
    "section": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "hard",
    "question": "An electron accelerated through voltage V has wavelength λ. It then passes through a second accelerator that quadruples its kinetic energy relative to the first stage. Ignoring relativity, what is the new wavelength?",
    "options": [
      "λ/2",
      "λ/4",
      "2λ",
      "4λ"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "de Broglie wavelength is inversely proportional to momentum and hence to sqrt(K). Quadrupling K doubles momentum, so wavelength halves.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-003",
    "section": "Chemistry",
    "topic": "Periodic Properties",
    "difficulty": "hard",
    "question": "Ions O2-, F-, Na+ and Mg2+ are isoelectronic. Arrange the two smallest by increasing radius.",
    "options": [
      "Na+ < Mg2+",
      "Mg2+ < Na+",
      "F- < Na+",
      "Mg2+ < F-"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For an isoelectronic series, greater nuclear charge means smaller radius. Mg2+ (Z=12) is smaller than Na+ (Z=11).",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-004",
    "section": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "hard",
    "question": "A hypothetical planar XO3^- species has three equivalent X-O bonds generated by resonance among one double and two single bonds in each canonical form. What is the average bond order, and how many equivalent X-O bonds result?",
    "options": [
      "4/3 and 3",
      "3/2 and 2",
      "4/3 and 2",
      "5/3 and 3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Across resonance, the total bond order is 2+1+1=4 distributed equally over three bonds, giving 4/3 for each of 3 equivalent bonds.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-005",
    "section": "Chemistry",
    "topic": "Thermochemistry",
    "difficulty": "hard",
    "question": "A→B has ΔH=+25 kJ mol^-1, B→C has -40 kJ mol^-1, and 2C→D has +10 kJ for the reaction as written. What is ΔH for 2A→D?",
    "options": [
      "-30 kJ",
      "-10 kJ",
      "-20 kJ",
      "+20 kJ"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Twice A→B and B→C gives 2A→2C: 2(25-40)=-30 kJ. Add 2C→D, +10 kJ, giving -20 kJ.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-006",
    "section": "Chemistry",
    "topic": "Chemical Equilibrium",
    "difficulty": "hard",
    "question": "For A(g)+B(g)⇌C(g), a 2.0 L vessel starts with 1.0 mol each of A and B and no C. At equilibrium 0.40 mol C is present. What is Kc?",
    "options": [
      "0.56",
      "2.22",
      "1.11",
      "4.44"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Equilibrium concentrations: A=B=0.60/2=0.30 M; C=0.40/2=0.20 M. Kc=0.20/(0.30·0.30)=2.22.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-007",
    "section": "Chemistry",
    "topic": "Ionic Equilibrium",
    "difficulty": "hard",
    "question": "A solution contains 0.010 M Ca2+ and 0.020 M Mg2+. Given Ksp(CaF2)=4.0×10^-11 and Ksp(MgF2)=4.0×10^-9, fluoride ion is added slowly. Which salt precipitates first, and at approximately what [F-]?",
    "options": [
      "CaF2 at 6.3×10^-5 M",
      "MgF2 at 6.3×10^-5 M",
      "CaF2 at 4.5×10^-4 M",
      "MgF2 at 4.5×10^-4 M"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For MF2, precipitation starts when [F-]=sqrt(Ksp/[M2+]). CaF2 requires sqrt(4×10^-11/0.010)=6.3×10^-5 M, whereas MgF2 requires sqrt(4×10^-9/0.020)=4.5×10^-4 M. Therefore CaF2 precipitates first.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-008",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "hard",
    "question": "A concentration cell M|M2+(0.010 M)||M2+(0.40 M)|M is at 298 K. Using 0.0592/n log10, what emf is nearest?",
    "options": [
      "0.024 V",
      "0.059 V",
      "0.095 V",
      "0.047 V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "E=(0.0592/2)log(0.40/0.010)=0.0296 log40≈0.0296·1.602=0.0474 V.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-009",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "hard",
    "question": "A first-order reaction has 75% completion after 20 min. What fraction of reactant remains after 30 min?",
    "options": [
      "1/8",
      "1/16",
      "1/4",
      "3/8"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "75% completion means 1/4 remains at 20 min, i.e. two half-lives, so t1/2=10 min. At 30 min three half-lives have elapsed; fraction remaining=1/8.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-010",
    "section": "Chemistry",
    "topic": "Surface Chemistry",
    "difficulty": "hard",
    "question": "For Langmuir adsorption θ=KP/(1+KP), an adsorbent has θ=0.60 at pressure P0. At what multiple of P0 will θ=0.75?",
    "options": [
      "3/2",
      "2",
      "5/2",
      "3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At P0, KP0=θ/(1-θ)=1.5. For θ=0.75, KP=3. Hence P/P0=3/1.5=2.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-011",
    "section": "Chemistry",
    "topic": "Solid State",
    "difficulty": "hard",
    "question": "A cubic unit cell has edge 5.00 Å and contains 4 formula units AB. If molar mass of AB is 100 g mol^-1, what density is nearest? Use N_A=6.02×10^23 mol^-1.",
    "options": [
      "2.66",
      "5.31 g cm^-3",
      "4.00",
      "6.64"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Mass/cell=400/N_A g. Volume=(5e-8 cm)^3=1.25e-22 cm^3. Density≈400/(6.02e23·1.25e-22)=5.31 g/cm^3.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-012",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "hard",
    "question": "A solution is made by dissolving 0.20 mol non-electrolyte and diluting to 1.50 L at 300 K. If a membrane experiment shows only 80% of solute particles contribute osmotically, what effective osmotic pressure follows? Use R=0.082 L atm mol^-1 K^-1.",
    "options": [
      "1.64 atm",
      "3.28 atm",
      "2.62 atm",
      "4.10 atm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Effective molarity=0.8·0.20/1.50=0.1067 M. π=MRT≈0.1067·0.082·300=2.62 atm.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-013",
    "section": "Chemistry",
    "topic": "Coordination Chemistry",
    "difficulty": "hard",
    "question": "In [Co(NH3)4Cl2]Cl, what are the oxidation state of Co and the coordination number, respectively?",
    "options": [
      "+2 and 4",
      "+3 and 6",
      "+2 and 6",
      "+3 and 4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The complex cation has charge +1. With two inner Cl- and neutral NH3, x-2=+1 so x=+3. Six ligating atoms surround Co, so coordination number 6.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-014",
    "section": "Chemistry",
    "topic": "Coordination Chemistry",
    "difficulty": "hard",
    "question": "A complex [M(en)2Cl2]+ contains two bidentate en ligands and two monodentate chlorides. How many metal-ligand coordinate bonds are present?",
    "options": [
      "6",
      "4",
      "5",
      "8"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Each en donates through two atoms: 2·2=4 bonds. Two chlorides add 2, total 6.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-015",
    "section": "Chemistry",
    "topic": "d-Block Elements",
    "difficulty": "hard",
    "question": "An octahedral d4 ion is high spin. How many unpaired electrons does it have, and what spin-only magnetic moment is nearest?",
    "options": [
      "4 and 4.90 BM",
      "2 and 2.83 BM",
      "3 and 3.87 BM",
      "4 and 5.92 BM"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "High-spin d4 has four unpaired electrons. μ=sqrt(n(n+2))=sqrt(24)=4.90 BM.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-016",
    "section": "Chemistry",
    "topic": "Metallurgy",
    "difficulty": "hard",
    "question": "A metal oxide M2O3 is reduced by Al: M2O3+2Al→Al2O3+2M. If 0.60 mol Al reacts completely, how many moles of M form?",
    "options": [
      "0.30 mol",
      "0.60 mol",
      "0.90 mol",
      "1.20 mol"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The equation has a 2:2 stoichiometric ratio of Al:M, so 0.60 mol Al yields 0.60 mol M.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-017",
    "section": "Chemistry",
    "topic": "General Organic Chemistry",
    "difficulty": "hard",
    "question": "Compound P is phenol. Compound Q is p-methylphenol and compound R is p-nitrophenol. Which order of acidity is correct?",
    "options": [
      "P > R > Q",
      "R > Q > P",
      "Q > P > R",
      "R > P > Q"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The nitro group stabilizes phenoxide by electron withdrawal, while methyl destabilizes it by donation. Thus p-nitrophenol > phenol > p-cresol.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-018",
    "section": "Chemistry",
    "topic": "Stereochemistry",
    "difficulty": "hard",
    "question": "A molecule CH3-CH(Br)-CH(Br)-CH3 is synthesized as an equimolar mixture of all distinct stereoisomers. What fraction of the mixture is meso?",
    "options": [
      "1/4",
      "1/3",
      "1/2",
      "2/3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "2,3-dibromobutane has three distinct stereoisomers: one meso and an enantiomeric pair. Equimolar distinct-isomer mixture therefore has meso fraction 1/3.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-019",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "hard",
    "question": "Ozonolysis of alkene X produces one mole each of acetone and ethanal per mole X. Which alkene fits X?",
    "options": [
      "2,3-dimethylbut-2-ene",
      "2-methylbut-2-ene",
      "pent-2-ene",
      "3-methylpent-2-ene"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The alkene must be (CH3)2C=CHCH3. Cleavage gives (CH3)2C=O (acetone) and CH3CHO (ethanal), identifying 2-methylbut-2-ene.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-020",
    "section": "Chemistry",
    "topic": "Aromatic Compounds",
    "difficulty": "hard",
    "question": "Anisole is nitrated under mild conditions. If steric effects make para substitution more abundant than ortho, which statement still explains why meta is minor?",
    "options": [
      "The methoxy group is strongly meta-directing",
      "The ring is deactivated by induction only",
      "The methoxy group donates by resonance and directs electrophiles ortho/para",
      "Nitration proceeds by a radical mechanism"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Methoxy donates electron density by resonance, stabilizing ortho/para sigma complexes. Thus meta attack is less favored even if para dominates ortho sterically.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-021",
    "section": "Chemistry",
    "topic": "Haloalkanes",
    "difficulty": "hard",
    "question": "Two equal samples of tert-butyl chloride are hydrolyzed, one in 80% water/20% ethanol and one in 20% water/80% ethanol. Under SN1-favoring conditions, which sample should ionize faster?",
    "options": [
      "The more ethanolic sample",
      "Both at exactly the same rate",
      "The rate is determined only by chloride concentration",
      "The more aqueous, more polar sample"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "SN1 rate depends on ionization; the more polar, strongly solvating aqueous medium stabilizes ions and the transition state better, increasing the rate.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-022",
    "section": "Chemistry",
    "topic": "Alcohols",
    "difficulty": "hard",
    "question": "A mixture contains 0.10 mol ethanol and 0.10 mol ethylene glycol. It reacts completely with excess sodium. How many moles of H2 are produced if every O-H proton reacts?",
    "options": [
      "0.10 mol",
      "0.20 mol",
      "0.30 mol",
      "0.15 mol"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Each O-H gives half a mole H2 per mole OH. Total OH moles=0.10+2(0.10)=0.30, so H2=0.15 mol.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-023",
    "section": "Chemistry",
    "topic": "Phenols",
    "difficulty": "hard",
    "question": "Phenoxide is carboxylated with CO2 under Kolbe-Schmitt conditions and then acidified. Relative to the original -OH, which position is favored for the newly introduced -COOH under standard conditions?",
    "options": [
      "meta",
      "para only",
      "ortho",
      "ipso replacement of -OH"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Kolbe-Schmitt carboxylation of sodium phenoxide gives mainly salicylic acid, introducing COOH ortho to OH.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-024",
    "section": "Chemistry",
    "topic": "Ethers",
    "difficulty": "hard",
    "question": "When CH3-O-C(CH3)3 is treated with one equivalent of HI at low temperature, which organic iodide forms preferentially in the first cleavage step?",
    "options": [
      "methyl iodide only",
      "ethyl iodide",
      "tert-butyl iodide",
      "no iodide forms"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The tertiary C-O bond cleaves readily via carbocation formation, producing tert-butyl iodide and methanol as the first-step products.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-025",
    "section": "Chemistry",
    "topic": "Aldehydes and Ketones",
    "difficulty": "hard",
    "question": "Two ethanal molecules undergo aldol addition, and the product is then oxidized selectively at its aldehyde group to a carboxylic acid without breaking C-C bonds. How many carbon atoms are in the acid product?",
    "options": [
      "4",
      "2",
      "3",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Aldol addition joins two C2 ethanal molecules into a C4 skeleton. Oxidation changes CHO to COOH but does not change carbon count, so the acid remains C4.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-026",
    "section": "Chemistry",
    "topic": "Carboxylic Acids",
    "difficulty": "hard",
    "question": "Sodium butanoate is heated with soda lime. The hydrocarbon formed is then chlorinated once under conditions giving the major monochloro product. What is the parent hydrocarbon before chlorination?",
    "options": [
      "propane",
      "ethane",
      "butane",
      "methane"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Soda-lime decarboxylation removes the carboxyl carbon: C4 carboxylate → C3 alkane, propane.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-027",
    "section": "Chemistry",
    "topic": "Amines",
    "difficulty": "hard",
    "question": "Aniline is converted to benzenediazonium chloride at 0-5°C. The salt is then treated with CuCN. Which functional group replaces the diazonium group?",
    "options": [
      "-OH",
      "-CN",
      "-Cl",
      "-NH2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Sandmeyer reaction with CuCN replaces N2+ by cyano, giving benzonitrile.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-028",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "hard",
    "question": "Complete hydrolysis of one mole sucrose gives one mole each of glucose and fructose. How many total moles of monosaccharide molecules are produced?",
    "options": [
      "2 mol",
      "1 mol",
      "3 mol",
      "4 mol"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Each sucrose molecule hydrolyzes into exactly two monosaccharides, one glucose and one fructose, so one mole sucrose gives two moles monosaccharides.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-029",
    "section": "Chemistry",
    "topic": "Polymers",
    "difficulty": "hard",
    "question": "A copolymer contains repeating units A and B in a 3:2 molar ratio. Their repeat-unit masses are 86 and 58 g mol^-1. What is the mean repeat-unit mass?",
    "options": [
      "70.0",
      "72.0",
      "76.8",
      "74.8 g mol^-1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Weighted mean=(3·86+2·58)/5=(258+116)/5=374/5=74.8 g/mol.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-030",
    "section": "Chemistry",
    "topic": "p-Block Elements",
    "difficulty": "hard",
    "question": "In 3Cl2+6OH-→5Cl-+ClO3-+3H2O, what ratio of chlorine atoms undergo reduction to those undergoing oxidation?",
    "options": [
      "5:1",
      "1:5",
      "3:1",
      "2:1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Six chlorine atoms are present. Five become Cl- (reduction from 0 to -1) and one becomes chlorate (+5), so reduced:oxidized=5:1.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-031",
    "section": "Chemistry",
    "topic": "Colloids",
    "difficulty": "hard",
    "question": "A negatively charged sol is placed in an electric field. If its particles migrate 3 cm toward one electrode, which electrode is that and what does the direction reveal?",
    "options": [
      "Cathode; particle charge is negative",
      "Anode; particle charge is negative",
      "Anode; particle charge is positive",
      "Cathode; particle charge is positive"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Negative colloidal particles are attracted to the positive electrode, the anode; the migration direction therefore confirms negative charge.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-032",
    "section": "Chemistry",
    "topic": "Qualitative Analysis",
    "difficulty": "hard",
    "question": "A white precipitate dissolves in dilute NH3 but reappears when the solution is acidified with HNO3. Which precipitate is most consistent?",
    "options": [
      "BaSO4",
      "CaCO3",
      "AgCl",
      "PbS"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "AgCl dissolves by forming [Ag(NH3)2]+. Acid destroys the ammine complex and restores conditions for AgCl precipitation.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-033",
    "section": "Chemistry",
    "topic": "Redox Chemistry",
    "difficulty": "hard",
    "question": "In acidic solution, MnO4- is reduced to Mn2+. If 0.020 mol permanganate reacts, how many moles of electrons are accepted?",
    "options": [
      "0.020 mol",
      "0.040 mol",
      "0.100 mol",
      "0.160 mol"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Each MnO4- accepts 5 e- in acid. Therefore 0.020 mol accepts 0.100 mol electrons.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-034",
    "section": "Chemistry",
    "topic": "Chemical Thermodynamics",
    "difficulty": "hard",
    "question": "A reaction has ΔH=+12 kJ mol^-1 and ΔS=+60 J mol^-1 K^-1. Above what temperature is ΔG negative, assuming ΔH and ΔS constant?",
    "options": [
      "120 K",
      "200 K",
      "273 K",
      "500 K"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "ΔG<0 when TΔS>ΔH. Convert ΔS=0.060 kJ mol^-1 K^-1. Threshold T=12/0.060=200 K.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-chemistry-035",
    "section": "Chemistry",
    "topic": "Green Chemistry",
    "difficulty": "hard",
    "question": "A process consumes 50 g reagent A and 30 g reagent B to produce 64 g desired product and 16 g unavoidable coproduct. What is the atom economy for the desired product?",
    "options": [
      "64%",
      "80%",
      "75%",
      "100%"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For the stated stoichiometric process, desired product mass divided by total reactant mass is 64/(50+30)=0.80, or 80%.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-english-001",
    "section": "English",
    "topic": "Grammar in Context",
    "difficulty": "hard",
    "question": "Choose the sentence that is grammatically correct.",
    "options": [
      "Neither the revised schedules nor the backup schedule is available on the console.",
      "Neither the revised schedules nor the backup schedule are available on the console.",
      "Neither the revised schedules or the backup schedule is available on the console.",
      "Neither the revised schedules nor the backup schedule were available on the console now."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "With neither...nor, agreement normally follows the nearer subject; “backup schedule” is singular, so “is available” is correct.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-english-002",
    "section": "English",
    "topic": "Sentence Arrangement",
    "difficulty": "hard",
    "question": "Arrange the sentences coherently: P. That comparison exposed a drift that the first run had hidden. Q. The team repeated the trial with an independent clock. R. The original trial had seemed stable. S. They then recalibrated the timing board.",
    "options": [
      "Q-R-S-P",
      "R-P-Q-S",
      "R-Q-P-S",
      "P-Q-R-S"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "R establishes the initial appearance. Q describes the repeat test; P refers back to “that comparison”; S gives the corrective action after the drift is found.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-english-003",
    "section": "English",
    "topic": "Vocabulary in Context",
    "difficulty": "hard",
    "question": "In “The committee called the estimate provisional because two sensors had not yet been calibrated,” provisional most nearly means:",
    "options": [
      "secret",
      "temporary and subject to revision",
      "precise",
      "delayed indefinitely"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The reason given is incomplete calibration, so the estimate is tentative rather than final: temporary and subject to revision.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-english-004",
    "section": "English",
    "topic": "Reading Inference",
    "difficulty": "hard",
    "question": "A pilot plant processed 30% fewer batches in April than in March. The number of rejected batches also fell, from 20 to 12. No batch-level rejection rates are supplied. Which conclusion is justified?",
    "options": [
      "The rejection rate definitely improved.",
      "The counts alone do not establish whether the rejection rate improved.",
      "Quality definitely worsened.",
      "Exactly 40% of April batches were rejected."
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Both total production and rejected counts changed. Without the number of batches processed in each month, the rejection rates cannot be compared.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-english-005",
    "section": "English",
    "topic": "Punctuation",
    "difficulty": "hard",
    "question": "Choose the correctly punctuated sentence.",
    "options": [
      "The controller recorded three values, temperature, pressure, and flow rate.",
      "The controller recorded three values; temperature, pressure, and flow rate.",
      "The controller recorded three values: temperature, pressure, and flow rate.",
      "The controller recorded: three values temperature, pressure, and flow rate."
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A colon correctly introduces the list after the complete clause “The controller recorded three values.”",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-aptitude-001",
    "section": "Aptitude",
    "topic": "Ordering Logic",
    "difficulty": "hard",
    "question": "Five test packets K,L,M,N,P occupy slots 1-5. P is exactly two slots after M; L is immediately after P; K is earlier than N; and K is not adjacent to L. Which order is possible?",
    "options": [
      "M-P-K-L-N",
      "K-M-P-N-L",
      "M-L-P-K-N",
      "M-K-P-L-N"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Only M-K-P-L-N works: M is in slot 1 and P in slot 3, L immediately follows P in slot 4, K is earlier than N, and K (slot 2) is not adjacent to L (slot 4). Each other option breaks at least one stated condition.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-aptitude-002",
    "section": "Aptitude",
    "topic": "Data Interpretation",
    "difficulty": "hard",
    "question": "A test rig logs three runs: 80 trials at 75% success, 50 trials at 60%, and 70 trials at 90%. What is the overall success percentage across all 200 trials?",
    "options": [
      "75%",
      "76.5%",
      "78%",
      "81%"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Successes=60+30+63=153 out of 200, giving 76.5%.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-aptitude-003",
    "section": "Aptitude",
    "topic": "Spatial Reasoning",
    "difficulty": "hard",
    "question": "A rover starts at (0,0), moves 6 m north, 4 m east, 3 m south, 2 m west, then 5 m south. What is its final displacement from the start?",
    "options": [
      "2√2 m",
      "2 m",
      "4 m",
      "√10 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Final coordinates are (2,-2), so displacement magnitude=sqrt(2^2+(-2)^2)=2√2 m.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-aptitude-004",
    "section": "Aptitude",
    "topic": "Logical Implication",
    "difficulty": "hard",
    "question": "A safety system obeys: if A then B; if B and C then D; if D then not E. A and C are true. Which statement must be true?",
    "options": [
      "E is false",
      "B is false",
      "C is false",
      "A is false"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A implies B. With B and C, D follows. D implies not E, so E must be false.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-aptitude-005",
    "section": "Aptitude",
    "topic": "Ratios",
    "difficulty": "hard",
    "question": "A 180-minute session allocates time to design, simulation and review in ratio 4:3:2. After 10 minutes are moved from design to review, what is the new design:review ratio?",
    "options": [
      "3:2",
      "4:3",
      "5:4",
      "7:5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Initial times are 80,60,40. After transfer: design70, review50, ratio 70:50=7:5.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-aptitude-006",
    "section": "Aptitude",
    "topic": "Data Sufficiency",
    "difficulty": "hard",
    "question": "Positive integer n is sought. I: n is a multiple of 6. II: 20<n<30 and n is not a multiple of 5. Which assessment is correct?",
    "options": [
      "I alone is sufficient",
      "II alone is sufficient",
      "Both together are sufficient, neither alone",
      "Even together they are insufficient"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "I alone gives many values. II allows 21-29 except 25. Together only 24 is a multiple of 6, so both are needed and sufficient.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-aptitude-007",
    "section": "Aptitude",
    "topic": "Percentages",
    "difficulty": "hard",
    "question": "A sensor’s error rate falls from 8% to 5%, then the number of measurements rises by 20%. If the original count was 1000, how many fewer erroneous measurements are expected after both changes?",
    "options": [
      "10",
      "30",
      "20",
      "40"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Initially errors=80. New count=1200 and error rate=5%, giving 60 errors. Reduction=20.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-aptitude-008",
    "section": "Aptitude",
    "topic": "Patterns",
    "difficulty": "hard",
    "question": "A sequence begins 4, 9, 20, 43, 90. From the second term onward, each term is formed from the previous using the same operation plus a changing increment. What is the next term if the increments are 1,2,3,4,... after doubling?",
    "options": [
      "185",
      "181",
      "184",
      "186"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The rule is a_{n+1}=2a_n+n: 4→9 (+1), 9→20 (+2), 20→43 (+3), 43→90 (+4). Next=2·90+5=185.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-aptitude-009",
    "section": "Aptitude",
    "topic": "Work and Time",
    "difficulty": "hard",
    "question": "Machines A and B together finish a job in 6 h. A alone takes 10 h. They work together for 3 h, then only B continues. How many more hours does B need?",
    "options": [
      "5 h",
      "6 h",
      "10 h",
      "7.5 h"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "B rate=1/6-1/10=1/15. Three hours together complete 1/2, leaving 1/2. B alone needs (1/2)/(1/15)=7.5 h.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "viteee-2026-mpcea-aptitude-010",
    "section": "Aptitude",
    "topic": "Symbolic Coding",
    "difficulty": "hard",
    "question": "Define a word score as 2×(number of distinct vowels)+3×(number of distinct consonants). What is the score of ALGORITHM?",
    "options": [
      "20",
      "24",
      "22",
      "26"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Distinct vowels are A,O,I (3) and distinct consonants L,G,R,T,H,M (6). Score=2·3+3·6=24.",
    "source": {
      "kind": "original",
      "reference": "VITEEE 2026 official admissions portal",
      "url": "https://viteee.vit.ac.in/",
      "checkedOn": "2026-09-03"
    }
  },
];
