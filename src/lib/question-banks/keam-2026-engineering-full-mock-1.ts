import type { Question } from '../questions';

export const KEAM_2026_ENGINEERING_FULL_MOCK_1: Question[] = [
    {
      "id": "keam-2026-engineering-mathematics-001",
      "section": "Mathematics",
      "topic": "Sets",
      "difficulty": "easy",
      "question": "In a survey of 92 workshop applicants, 57 selected CAD and 41 selected simulation. If 18 selected both, how many selected neither?",
      "options": [
        "12",
        "6",
        "8",
        "14",
        "22"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "At least one = 57+41−18=80, so neither = 92−80=12.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-002",
      "section": "Mathematics",
      "topic": "Functions",
      "difficulty": "medium",
      "question": "For f(x)=(3x−5)/(x+2), which real number is excluded from the range of f?",
      "options": [
        "-2",
        "3",
        "0",
        "5",
        "2"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Set y=(3x−5)/(x+2). Solving for x gives x=(−5−2y)/(y−3), so y=3 is impossible.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-003",
      "section": "Mathematics",
      "topic": "Functions",
      "difficulty": "medium",
      "question": "Let f(x)=2x+1 and g(x)=x²−4. What is (g∘f)(−1)?",
      "options": [
        "-7",
        "1",
        "3",
        "5",
        "-3"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "f(−1)=−1 and g(−1)=1−4=−3.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-004",
      "section": "Mathematics",
      "topic": "Relations",
      "difficulty": "medium",
      "question": "A set S has 4 elements. How many reflexive relations on S are possible?",
      "options": [
        "16",
        "256",
        "1024",
        "65536",
        "4096"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "A relation has 16 possible ordered pairs. Reflexivity forces 4 diagonal pairs; each of the remaining 12 may be chosen independently, giving 2^12=4096.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-005",
      "section": "Mathematics",
      "topic": "Inverse functions",
      "difficulty": "easy",
      "question": "If h(x)=(x−7)/4, then h⁻¹(5) equals:",
      "options": [
        "13",
        "19",
        "27",
        "23",
        "35"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "From y=(x−7)/4, x=4y+7. Thus h⁻¹(5)=27.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-006",
      "section": "Mathematics",
      "topic": "Complex numbers",
      "difficulty": "easy",
      "question": "If z=3−4i, the value of z·conj(z) is:",
      "options": [
        "25",
        "7",
        "16",
        "24",
        "49"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "z·conj(z)=3²+4²=25.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-007",
      "section": "Mathematics",
      "topic": "Complex numbers",
      "difficulty": "medium",
      "question": "The principal argument of −1+i√3 is:",
      "options": [
        "π/3",
        "2π/3",
        "π/2",
        "4π/3",
        "5π/3"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "The point lies in quadrant II with reference angle π/3, so the principal argument is 2π/3.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-008",
      "section": "Mathematics",
      "topic": "Quadratic equations",
      "difficulty": "medium",
      "question": "The roots of x²−10x+k=0 differ by 6. Find k.",
      "options": [
        "9",
        "16",
        "21",
        "24",
        "34"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "If roots are 5±3, their product is 8×2=16.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-009",
      "section": "Mathematics",
      "topic": "Quadratic equations",
      "difficulty": "medium",
      "question": "For what value of p>2 does x²+(p−2)x+9=0 have equal real roots?",
      "options": [
        "8",
        "-4",
        "2",
        "4",
        "10"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Equal roots require (p−2)²−36=0. With p>2, p−2=6, so p=8.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-010",
      "section": "Mathematics",
      "topic": "Complex equations",
      "difficulty": "hard",
      "question": "If z+1/z=3 for nonzero real z, then z²+1/z² equals:",
      "options": [
        "5",
        "7",
        "6",
        "8",
        "9"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Squaring gives z²+2+1/z²=9, hence the value is 7.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-011",
      "section": "Mathematics",
      "topic": "Sequences",
      "difficulty": "easy",
      "question": "An arithmetic progression has first term 11 and common difference −3. Its 9th term is:",
      "options": [
        "-10",
        "-16",
        "13",
        "35",
        "-13"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "a9=11+8(−3)=−13.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-012",
      "section": "Mathematics",
      "topic": "Sequences",
      "difficulty": "medium",
      "question": "The 5th term of a geometric progression is 48 and the 2nd term is 6. If the common ratio is positive, it is:",
      "options": [
        "1",
        "3",
        "4",
        "2",
        "8"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "a r^4 / (a r)=r^3=48/6=8, so r=2.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-013",
      "section": "Mathematics",
      "topic": "Series",
      "difficulty": "medium",
      "question": "Evaluate 5+9+13+...+81.",
      "options": [
        "820",
        "840",
        "860",
        "900",
        "940"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "This AP has n=(81−5)/4+1=20 terms. Sum=20(5+81)/2=860.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-014",
      "section": "Mathematics",
      "topic": "Series",
      "difficulty": "medium",
      "question": "If the sum of the first n positive odd integers is 729, then n is:",
      "options": [
        "27",
        "24",
        "25",
        "26",
        "29"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "The sum of the first n odd integers is n². Hence n=√729=27.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-015",
      "section": "Mathematics",
      "topic": "Sequences",
      "difficulty": "hard",
      "question": "Three positive numbers form a GP. Their product is 1000 and their sum is 35. What is the middle term?",
      "options": [
        "10",
        "5",
        "8",
        "12",
        "20"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "For three GP terms a/r,a,ar, the product is a³. Thus a=∛1000=10; the sum condition is consistent.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-016",
      "section": "Mathematics",
      "topic": "Permutations",
      "difficulty": "medium",
      "question": "How many six-character codes can be made from A,B,C,D,E,F without repetition if A and B must not be adjacent?",
      "options": [
        "240",
        "360",
        "600",
        "480",
        "720"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Total 6!=720. Adjacent A,B: treat as one block, 2×5!=240. Difference=480.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-017",
      "section": "Mathematics",
      "topic": "Combinations",
      "difficulty": "medium",
      "question": "A lab has 7 sensors of type X and 5 of type Y. How many 4-sensor test sets contain exactly two of each type?",
      "options": [
        "105",
        "175",
        "210",
        "245",
        "350"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Choose 2 of 7 and 2 of 5: C(7,2)C(5,2)=21×10=210.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-018",
      "section": "Mathematics",
      "topic": "Binomial theorem",
      "difficulty": "medium",
      "question": "The coefficient of x³ in (2+x)^6 is:",
      "options": [
        "80",
        "120",
        "192",
        "160",
        "240"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Coefficient = C(6,3)2^3=20×8=160.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-019",
      "section": "Mathematics",
      "topic": "Binomial theorem",
      "difficulty": "hard",
      "question": "The term independent of x in (x²+2/x)^6 is:",
      "options": [
        "60",
        "120",
        "320",
        "480",
        "240"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "General term C(6,r)x^{12−3r}2^r. Set 12−3r=0 → r=4. Constant=C(6,4)2^4=15×16=240.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-020",
      "section": "Mathematics",
      "topic": "Combinatorics",
      "difficulty": "medium",
      "question": "Eight distinct books are arranged on a shelf. In how many arrangements are two specified books separated by exactly one book?",
      "options": [
        "5760",
        "7200",
        "10080",
        "8640",
        "11520"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Choose the left position of the pair pattern: 6 choices; order the specified books in 2 ways; choose the middle book in 6 ways; arrange remaining 5 in 5!: 6×2×6×120=8640.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-021",
      "section": "Mathematics",
      "topic": "Matrices",
      "difficulty": "easy",
      "question": "For A=[[2,1],[5,3]], det(A) equals:",
      "options": [
        "-1",
        "2",
        "5",
        "1",
        "11"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "det(A)=2×3−1×5=1.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-022",
      "section": "Mathematics",
      "topic": "Matrices",
      "difficulty": "medium",
      "question": "If A=[[1,2],[0,1]], then A³ is:",
      "options": [
        "[[1,3],[0,1]]",
        "[[1,4],[0,1]]",
        "[[1,6],[0,1]]",
        "[[1,8],[0,1]]",
        "[[3,6],[0,3]]"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "For A=I+N with N²=0, A³=I+3N=[[1,6],[0,1]].",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-023",
      "section": "Mathematics",
      "topic": "Determinants",
      "difficulty": "medium",
      "question": "The area of the triangle with vertices (1,2), (5,2), and (3,7) is:",
      "options": [
        "8",
        "12",
        "10",
        "15",
        "20"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Base length is 4 and perpendicular height is 5, so area=½×4×5=10.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-024",
      "section": "Mathematics",
      "topic": "Linear equations",
      "difficulty": "medium",
      "question": "The system 2x+y=7 and x−2y=−1 has solution x+y equal to:",
      "options": [
        "2",
        "4",
        "3",
        "5",
        "6"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Solving gives x=3, y=1, so x+y=4.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-025",
      "section": "Mathematics",
      "topic": "Matrices",
      "difficulty": "hard",
      "question": "If A is a 3×3 matrix with det(A)=−2, then det(3A⁻¹) is:",
      "options": [
        "−9/2",
        "−3/2",
        "27/2",
        "54",
        "−27/2"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "det(3A⁻¹)=3³ det(A⁻¹)=27/(−2)=−27/2.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-026",
      "section": "Mathematics",
      "topic": "Trigonometry",
      "difficulty": "easy",
      "question": "If sin θ=5/13 and θ is acute, then tan θ is:",
      "options": [
        "5/12",
        "12/5",
        "5/13",
        "12/13",
        "13/12"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "cos θ=12/13, hence tan θ=(5/13)/(12/13)=5/12.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-027",
      "section": "Mathematics",
      "topic": "Trigonometric identities",
      "difficulty": "medium",
      "question": "Simplify (1−cos 2x)/(sin 2x), where defined.",
      "options": [
        "cot x",
        "sin x",
        "cos x",
        "tan x",
        "tan 2x"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "1−cos2x=2sin²x and sin2x=2sinx cosx, so the ratio is tanx.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-028",
      "section": "Mathematics",
      "topic": "Inverse trigonometry",
      "difficulty": "medium",
      "question": "For 0≤x≤1, sin(cos⁻¹x) equals:",
      "options": [
        "1−x²",
        "√(1+x²)",
        "x/√(1−x²)",
        "√(1−x²)",
        "√(1−x)"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "If θ=cos⁻¹x, θ∈[0,π/2] and sinθ=√(1−cos²θ)=√(1−x²).",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-029",
      "section": "Mathematics",
      "topic": "Trigonometric equations",
      "difficulty": "hard",
      "question": "The number of solutions of 2sin²x−3sin x+1=0 in [0,2π) is:",
      "options": [
        "3",
        "1",
        "2",
        "4",
        "5"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "(2sinx−1)(sinx−1)=0. sinx=1/2 gives two solutions and sinx=1 gives one, total 3.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-030",
      "section": "Mathematics",
      "topic": "Trigonometry",
      "difficulty": "medium",
      "question": "If tan A=1/2 and tan B=1/3 with A,B acute, then tan(A+B) is:",
      "options": [
        "1",
        "1/5",
        "5/6",
        "6/5",
        "2"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "tan(A+B)=(1/2+1/3)/(1−1/6)=(5/6)/(5/6)=1.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-031",
      "section": "Mathematics",
      "topic": "Coordinate geometry",
      "difficulty": "easy",
      "question": "The distance from (−2,5) to the line 3x−4y+10=0 is:",
      "options": [
        "2.8",
        "3.2",
        "3.6",
        "4",
        "5"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Distance=|3(−2)−4(5)+10|/5=16/5.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-032",
      "section": "Mathematics",
      "topic": "Straight lines",
      "difficulty": "medium",
      "question": "A line through (2,−1) is perpendicular to 3x+2y=7. Its slope is:",
      "options": [
        "2/3",
        "−3/2",
        "−2/3",
        "3/2",
        "3"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "The given line has slope −3/2, so a perpendicular line has slope 2/3.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-033",
      "section": "Mathematics",
      "topic": "Circles",
      "difficulty": "medium",
      "question": "The circle x²+y²−6x+8y−11=0 has radius:",
      "options": [
        "6",
        "4",
        "5",
        "7",
        "8"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Completing squares gives (x−3)²+(y+4)²=36, so r=6.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-034",
      "section": "Mathematics",
      "topic": "Parabola",
      "difficulty": "medium",
      "question": "For the parabola y²=20x, the length of its latus rectum is:",
      "options": [
        "5",
        "10",
        "40",
        "80",
        "20"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "In y²=4ax, 4a=20. The latus rectum length is 4a=20.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-035",
      "section": "Mathematics",
      "topic": "Ellipse",
      "difficulty": "hard",
      "question": "For x²/25+y²/9=1, the eccentricity is:",
      "options": [
        "0.6",
        "0.4",
        "1.25",
        "0.8",
        "0.64"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "a=5,b=3,c=√(25−9)=4, so e=c/a=4/5.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-036",
      "section": "Mathematics",
      "topic": "Limits",
      "difficulty": "easy",
      "question": "Evaluate lim(x→2) (x²−4)/(x−2).",
      "options": [
        "2",
        "4",
        "3",
        "5",
        "6"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Factor x²−4=(x−2)(x+2); the limit is 4.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-037",
      "section": "Mathematics",
      "topic": "Limits",
      "difficulty": "medium",
      "question": "Evaluate lim(x→0) (e^{3x}−1)/x.",
      "options": [
        "1",
        "2",
        "6",
        "3",
        "9"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Using lim(u→0)(e^u−1)/u=1 with u=3x gives 3.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-038",
      "section": "Mathematics",
      "topic": "Continuity",
      "difficulty": "medium",
      "question": "For f(x)=(x²−9)/(x−3) for x≠3, what value of f(3) makes f continuous at 3?",
      "options": [
        "3",
        "9",
        "12",
        "6",
        "18"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "For x≠3, f=x+3, so the limit at 3 is 6.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-039",
      "section": "Mathematics",
      "topic": "Differentiation",
      "difficulty": "easy",
      "question": "If y=x³−4x²+7, then dy/dx at x=2 is:",
      "options": [
        "-8",
        "0",
        "-4",
        "4",
        "8"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "dy/dx=3x²−8x; at x=2 this is 12−16=−4.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-040",
      "section": "Mathematics",
      "topic": "Differentiation",
      "difficulty": "medium",
      "question": "If y=ln(x²+1), then y′ at x=1 is:",
      "options": [
        "1/2",
        "2",
        "1",
        "ln 2",
        "e"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "y′=2x/(x²+1), giving 1 at x=1.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-041",
      "section": "Mathematics",
      "topic": "Differentiation",
      "difficulty": "medium",
      "question": "For y=x^x (x>0), dy/dx equals:",
      "options": [
        "x^x(ln x+1)",
        "x^{x−1}",
        "x^x ln x",
        "x(ln x+1)",
        "x^{x+1}"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Take logs: ln y=x ln x. Then y′/y=lnx+1.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-042",
      "section": "Mathematics",
      "topic": "Applications of derivatives",
      "difficulty": "medium",
      "question": "The function f(x)=x³−3x²+2 has a local maximum at x=",
      "options": [
        "0",
        "1",
        "2",
        "3",
        "-1"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "f′=3x(x−2); f′ changes + to − at x=0, so x=0 is a local maximum.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-043",
      "section": "Mathematics",
      "topic": "Applications of derivatives",
      "difficulty": "medium",
      "question": "A rectangle has perimeter 40 cm. Its maximum possible area is:",
      "options": [
        "80",
        "90",
        "100",
        "110",
        "120"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "For fixed perimeter, area is maximal for a square: side 10 cm, area 100 cm².",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-044",
      "section": "Mathematics",
      "topic": "Differentiation",
      "difficulty": "hard",
      "question": "If x²+y²=25 and dx/dt=3 at the point (3,4), then dy/dt is:",
      "options": [
        "−4/3",
        "9/4",
        "3/4",
        "−9/4",
        "−3"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Differentiate: 2x dx/dt+2y dy/dt=0, so dy/dt=−(3×3)/4=−9/4.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-045",
      "section": "Mathematics",
      "topic": "Differentiation",
      "difficulty": "hard",
      "question": "For f(x)=x+4/x on x>0, the minimum value is:",
      "options": [
        "2",
        "3",
        "5",
        "8",
        "4"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "AM-GM gives x+4/x≥2√4=4, attained at x=2.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-046",
      "section": "Mathematics",
      "topic": "Integral calculus",
      "difficulty": "easy",
      "question": "Evaluate ∫_0^2 (3x²+1) dx.",
      "options": [
        "10",
        "8",
        "9",
        "11",
        "12"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Antiderivative x³+x; from 0 to 2 gives 8+2=10.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-047",
      "section": "Mathematics",
      "topic": "Integral calculus",
      "difficulty": "medium",
      "question": "Evaluate ∫_1^e (1/x) dx.",
      "options": [
        "0",
        "1",
        "e−1",
        "e",
        "2"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "The integral is ln e−ln1=1.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-048",
      "section": "Mathematics",
      "topic": "Integral calculus",
      "difficulty": "medium",
      "question": "Evaluate ∫ x cos(x²) dx.",
      "options": [
        "sin(x²)+C",
        "½ cos(x²)+C",
        "½ sin(x²)+C",
        "−½ cos(x²)+C",
        "x sin(x²)+C"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Let u=x², du=2x dx; the integral is ½∫cosu du=½sin(x²)+C.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-049",
      "section": "Mathematics",
      "topic": "Definite integrals",
      "difficulty": "medium",
      "question": "If I=∫_0^π x sin x dx, then I equals:",
      "options": [
        "1",
        "2",
        "π",
        "π/2",
        "2π"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Integration by parts gives [−x cosx+sinx]_0^π=π.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-050",
      "section": "Mathematics",
      "topic": "Area under curves",
      "difficulty": "medium",
      "question": "The area enclosed between y=x and y=x² from x=0 to x=1 is:",
      "options": [
        "1/3",
        "1/4",
        "1/2",
        "2/3",
        "1/6"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Area=∫_0^1(x−x²)dx=1/2−1/3=1/6.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-051",
      "section": "Mathematics",
      "topic": "Integral calculus",
      "difficulty": "hard",
      "question": "Evaluate ∫_0^1 x/(1+x²) dx.",
      "options": [
        "ln 2",
        "1/2",
        "½ ln 2",
        "1−ln2",
        "2ln2"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Use u=1+x², du=2x dx. Integral=½lnu|_1^2=½ln2.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-052",
      "section": "Mathematics",
      "topic": "Integral calculus",
      "difficulty": "medium",
      "question": "An antiderivative of sec²(3x) is:",
      "options": [
        "3tan(3x)+C",
        "tan x+C",
        "⅓sec(3x)+C",
        "sec²x+C",
        "⅓ tan(3x)+C"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Since d[tan(3x)]/dx=3sec²(3x), divide by 3.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-053",
      "section": "Mathematics",
      "topic": "Integral calculus",
      "difficulty": "hard",
      "question": "Evaluate ∫_0^{π/2} sin³x dx.",
      "options": [
        "1/2",
        "π/4",
        "3/4",
        "2/3",
        "4/3"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Write sin³x=sinx(1−cos²x), substitute u=cosx, yielding 2/3.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-054",
      "section": "Mathematics",
      "topic": "Integral calculus",
      "difficulty": "medium",
      "question": "Evaluate ∫ (2x+5)/(x²+5x+7) dx.",
      "options": [
        "½ln(x²+5x+7)+C",
        "2ln(x²+5x+7)+C",
        "1/(x²+5x+7)+C",
        "ln(x²+5x+7)+C",
        "x²+5x+7+C"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "The numerator is exactly the derivative of the denominator.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-055",
      "section": "Mathematics",
      "topic": "Definite integrals",
      "difficulty": "hard",
      "question": "For continuous f with f(x)+f(4−x)=10, evaluate ∫_0^4 f(x) dx.",
      "options": [
        "20",
        "10",
        "16",
        "24",
        "40"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Let I be the integral. Substitution x→4−x gives I=∫[10−f(x)]dx=40−I, so I=20.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-056",
      "section": "Mathematics",
      "topic": "Differential equations",
      "difficulty": "easy",
      "question": "The general solution of dy/dx=6x is:",
      "options": [
        "y=6x²+C",
        "y=3x²+C",
        "y=3x+C",
        "y=x³+C",
        "y=6+C"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Integrating gives y=3x²+C.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-057",
      "section": "Mathematics",
      "topic": "Differential equations",
      "difficulty": "medium",
      "question": "Solve dy/dx=2y with y(0)=3. Then y(1)=",
      "options": [
        "2e³",
        "3e",
        "3e²",
        "6e",
        "e^6"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "The solution is y=3e^{2x}; hence y(1)=3e².",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-058",
      "section": "Mathematics",
      "topic": "Differential equations",
      "difficulty": "medium",
      "question": "The order and degree of (d²y/dx²)^3 + dy/dx = x are:",
      "options": [
        "3 and 2",
        "2 and 1",
        "3 and 1",
        "2 and 3",
        "1 and 3"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Highest derivative is second order, and its highest power is 3.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-059",
      "section": "Mathematics",
      "topic": "Differential equations",
      "difficulty": "hard",
      "question": "A solution of dy/dx=y/x for x>0 is y=Cx. If y(2)=7, then y(5)=",
      "options": [
        "17.5",
        "14",
        "21",
        "28",
        "35"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "y=Cx; C=7/2, so y(5)=35/2.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-060",
      "section": "Mathematics",
      "topic": "Differential equations",
      "difficulty": "medium",
      "question": "For dy/dx=(1+x²)/(1+y²), separating variables gives:",
      "options": [
        "(1+x²)dy=(1+y²)dx",
        "dy/(1+y²)=dx/(1+x²)",
        "(1−y²)dy=(1−x²)dx",
        "(1+y²)dy=(1+x²)dx",
        "y dy=x dx"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Multiply by (1+y²)dx to separate variables.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-061",
      "section": "Mathematics",
      "topic": "Vectors",
      "difficulty": "easy",
      "question": "If a=(2,−1,3) and b=(1,4,−2), then a·b equals:",
      "options": [
        "-8",
        "-4",
        "0",
        "4",
        "8"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "a·b=2−4−6=−8.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-062",
      "section": "Mathematics",
      "topic": "Vectors",
      "difficulty": "medium",
      "question": "The magnitude of (1,2,2)×(2,0,1) is:",
      "options": [
        "√5",
        "√17",
        "√29",
        "5",
        "29"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Cross product=(2,3,−4), whose magnitude is √(4+9+16)=√29.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-063",
      "section": "Mathematics",
      "topic": "Vectors",
      "difficulty": "medium",
      "question": "If vectors a and b are nonzero and a·b=0, then the angle between them is:",
      "options": [
        "0°",
        "45°",
        "90°",
        "60°",
        "180°"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "A zero dot product of nonzero vectors means they are perpendicular.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-064",
      "section": "Mathematics",
      "topic": "3D geometry",
      "difficulty": "medium",
      "question": "The distance between (1,−2,3) and (5,1,−1) is:",
      "options": [
        "5",
        "√41",
        "√29",
        "√34",
        "7"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Difference=(4,3,−4); squared distance=16+9+16=41.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-065",
      "section": "Mathematics",
      "topic": "3D geometry",
      "difficulty": "hard",
      "question": "The plane through (1,0,2) with normal vector (2,−1,3) has equation:",
      "options": [
        "2x−y+3z=7",
        "2x−y+3z=8",
        "2x+y+3z=8",
        "x−2y+3z=7",
        "2x−y−3z=−4"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "2(x−1)−(y−0)+3(z−2)=0 simplifies to 2x−y+3z=8.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-066",
      "section": "Mathematics",
      "topic": "Probability",
      "difficulty": "easy",
      "question": "A box contains 4 red, 5 blue and 3 green tokens. One token is drawn at random. The probability it is not blue is:",
      "options": [
        "5/12",
        "1/2",
        "2/3",
        "7/12",
        "7/10"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "There are 12 tokens, 7 of which are not blue.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-067",
      "section": "Mathematics",
      "topic": "Probability",
      "difficulty": "medium",
      "question": "Two fair dice are rolled. The probability that their sum is 9 is:",
      "options": [
        "1/12",
        "1/9",
        "1/8",
        "5/36",
        "1/6"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Favourable ordered pairs are (3,6),(4,5),(5,4),(6,3): 4/36=1/9.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-068",
      "section": "Mathematics",
      "topic": "Conditional probability",
      "difficulty": "medium",
      "question": "If P(A)=0.6, P(B)=0.5 and P(A∩B)=0.3, then P(A|B)=",
      "options": [
        "0.3",
        "0.5",
        "0.8",
        "1.0",
        "0.6"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "P(A|B)=0.3/0.5=0.6.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-069",
      "section": "Mathematics",
      "topic": "Statistics",
      "difficulty": "medium",
      "question": "The mean of 8 observations is 14. If one observation 18 is replaced by 10, the new mean is:",
      "options": [
        "13",
        "12",
        "13.5",
        "14",
        "15"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Original sum=112. New sum=104, so mean=104/8=13.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-070",
      "section": "Mathematics",
      "topic": "Statistics",
      "difficulty": "hard",
      "question": "A random variable X takes values 0,1,2 with probabilities 1/4,1/2,1/4. Its variance is:",
      "options": [
        "1/4",
        "1/2",
        "3/4",
        "1",
        "3/2"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "E[X]=1; E[X²]=0+1/2+1=3/2, so Var=3/2−1=1/2.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-071",
      "section": "Mathematics",
      "topic": "Logarithms",
      "difficulty": "easy",
      "question": "If log₂(x−1)=4, then x=",
      "options": [
        "17",
        "8",
        "9",
        "15",
        "16"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "x−1=16, hence x=17.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-072",
      "section": "Mathematics",
      "topic": "Algebra",
      "difficulty": "medium",
      "question": "If x+1/x=5, then x²+1/x² equals:",
      "options": [
        "21",
        "25",
        "23",
        "27",
        "29"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Square: x²+2+1/x²=25, so the value is 23.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-073",
      "section": "Mathematics",
      "topic": "Inequalities",
      "difficulty": "medium",
      "question": "The solution of |2x−3|<5 is:",
      "options": [
        "x<−1 or x>4",
        "−1<x<4",
        "−4<x<1",
        "1<x<5",
        "−1≤x≤4"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "−5<2x−3<5 gives −2<2x<8, hence −1<x<4.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-074",
      "section": "Mathematics",
      "topic": "Polynomials",
      "difficulty": "medium",
      "question": "If p(x)=x³−4x²+x+6, which of the following is a factor?",
      "options": [
        "x+2",
        "x−2",
        "x−1",
        "x+1",
        "x−3"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "p(2)=8−16+2+6=0, so x−2 is a factor.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-mathematics-075",
      "section": "Mathematics",
      "topic": "Algebra",
      "difficulty": "hard",
      "question": "For positive a,b with a+b=18, the maximum value of ab is:",
      "options": [
        "72",
        "80",
        "90",
        "162",
        "81"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "By AM-GM, ab≤((a+b)/2)²=9²=81.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-001",
      "section": "Physics",
      "topic": "Units and measurements",
      "difficulty": "easy",
      "question": "A quantity Q is defined as energy divided by pressure. Its SI dimension is the same as that of:",
      "options": [
        "force",
        "power",
        "density",
        "surface tension",
        "volume"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Energy/pressure = (N·m)/(N/m²)=m³, i.e. volume.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-002",
      "section": "Physics",
      "topic": "Errors",
      "difficulty": "medium",
      "question": "A measured length is (24.0±0.2) cm and width is (10.0±0.1) cm. The maximum percentage uncertainty in their product is closest to:",
      "options": [
        "1.83",
        "0.83",
        "1.0",
        "2.5",
        "3.0"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Percentage uncertainties add: 0.2/24×100 + 0.1/10×100 ≈0.833+1=1.833%.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-003",
      "section": "Physics",
      "topic": "Kinematics",
      "difficulty": "easy",
      "question": "A cart starts at 4 m/s and accelerates uniformly at 3 m/s² for 5 s. Its final speed is:",
      "options": [
        "15",
        "17",
        "20",
        "23",
        "19"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "v=u+at=4+3×5=19 m/s.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-004",
      "section": "Physics",
      "topic": "Kinematics",
      "difficulty": "medium",
      "question": "A particle moves along x with x=2t³−5t²+4 (SI units). Its acceleration at t=2 s is:",
      "options": [
        "4",
        "8",
        "12",
        "14",
        "18"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "v=6t²−10t; a=12t−10, so a(2)=14 m/s².",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-005",
      "section": "Physics",
      "topic": "Projectile motion",
      "difficulty": "medium",
      "question": "A ball is projected at 20 m/s at 30° above horizontal. Taking g=10 m/s², its time of flight is:",
      "options": [
        "1",
        "√3",
        "2",
        "4",
        "5"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "T=2u sinθ/g=2×20×0.5/10=2 s.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-006",
      "section": "Physics",
      "topic": "Relative motion",
      "difficulty": "medium",
      "question": "A boat points due north at 6 m/s relative to water while the river flows east at 8 m/s. Its speed relative to the bank is:",
      "options": [
        "2",
        "7",
        "12",
        "14",
        "10"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "The perpendicular velocity components give √(6²+8²)=10 m/s.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-007",
      "section": "Physics",
      "topic": "Newton laws",
      "difficulty": "easy",
      "question": "A 7 kg crate has horizontal forces 34 N east and 13 N west. Its acceleration is:",
      "options": [
        "2",
        "3",
        "4",
        "5",
        "7"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Net force=21 N east; a=21/7=3 m/s².",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-008",
      "section": "Physics",
      "topic": "Friction",
      "difficulty": "medium",
      "question": "A 6 kg block rests on a horizontal surface with coefficient of static friction 0.35. With g=10 m/s², the greatest horizontal force that can be applied without motion is:",
      "options": [
        "21",
        "18",
        "20",
        "24",
        "35"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Maximum static friction=μ_s mg=0.35×6×10=21 N.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-009",
      "section": "Physics",
      "topic": "Circular motion",
      "difficulty": "medium",
      "question": "A 0.5 kg object moves at 6 m/s in a circle of radius 3 m. The centripetal force is:",
      "options": [
        "3",
        "9",
        "6",
        "12",
        "18"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "F=mv²/r=0.5×36/3=6 N.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-010",
      "section": "Physics",
      "topic": "Work energy",
      "difficulty": "easy",
      "question": "A spring of constant 250 N/m is compressed by 0.08 m. The stored elastic energy is:",
      "options": [
        "0.4",
        "0.8",
        "1.0",
        "1.6",
        "2.0"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "U=½kx²=0.5×250×0.08²=0.8 J.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-011",
      "section": "Physics",
      "topic": "Power",
      "difficulty": "medium",
      "question": "A pump raises 300 kg of water through 12 m in 20 s. For g=10 m/s², the useful power is:",
      "options": [
        "900",
        "1200",
        "1800",
        "2400",
        "3600"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "P=mgh/t=300×10×12/20=1800 W.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-012",
      "section": "Physics",
      "topic": "Momentum",
      "difficulty": "medium",
      "question": "A 2 kg cart moving at 5 m/s sticks to a 3 kg cart initially at rest. Their common speed immediately after collision is:",
      "options": [
        "1",
        "2.5",
        "3",
        "2",
        "5"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Conservation of momentum: v=(2×5)/(2+3)=2 m/s.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-013",
      "section": "Physics",
      "topic": "Rotational motion",
      "difficulty": "medium",
      "question": "A constant torque of 8 N·m acts on a wheel of moment of inertia 4 kg·m². Its angular acceleration is:",
      "options": [
        "0.5",
        "4",
        "8",
        "2",
        "32"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "α=τ/I=8/4=2 rad/s².",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-014",
      "section": "Physics",
      "topic": "Gravitation",
      "difficulty": "medium",
      "question": "At a height equal to Earth’s radius above the surface, the gravitational acceleration is what fraction of its surface value?",
      "options": [
        "1/2",
        "1/4",
        "1/3",
        "1/8",
        "1/16"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Distance from Earth’s centre doubles, so g scales as 1/r² and becomes g/4.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-015",
      "section": "Physics",
      "topic": "Gravitation",
      "difficulty": "hard",
      "question": "A satellite moves in a circular orbit of radius 4R around a planet. Compared with a satellite at radius R, its orbital speed is:",
      "options": [
        "one-fourth",
        "twice",
        "four times",
        "one-half",
        "one-eighth"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "v∝1/√r, so increasing radius by 4 reduces speed by √4=2.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-016",
      "section": "Physics",
      "topic": "Elasticity",
      "difficulty": "medium",
      "question": "A wire of length 2 m and cross-sectional area 1.5×10⁻⁶ m² extends by 1 mm under a 150 N load. Its Young modulus is:",
      "options": [
        "2×10¹¹ Pa",
        "1×10¹¹ Pa",
        "5×10¹⁰ Pa",
        "2×10¹⁰ Pa",
        "5×10¹¹ Pa"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Y=(F/A)/(ΔL/L)=FL/(AΔL)=150×2/(1.5×10⁻⁶×10⁻³)=2×10¹¹ Pa.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-017",
      "section": "Physics",
      "topic": "Fluids",
      "difficulty": "medium",
      "question": "Water flows through a pipe whose area narrows from 12 cm² to 4 cm². If the speed in the wider part is 2 m/s, the speed in the narrow part is:",
      "options": [
        "3",
        "4",
        "8",
        "12",
        "6"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Continuity A₁v₁=A₂v₂ gives v₂=(12/4)×2=6 m/s.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-018",
      "section": "Physics",
      "topic": "Thermal expansion",
      "difficulty": "easy",
      "question": "A 2.0 m steel rod with linear expansion coefficient 12×10⁻⁶ K⁻¹ is heated by 50 K. Its increase in length is: (in mm)",
      "options": [
        "0.6",
        "2.4",
        "1.2",
        "6.0",
        "12.0"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "ΔL=αLΔT=12×10⁻⁶×2×50=1.2×10⁻³ m=1.2 mm.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-019",
      "section": "Physics",
      "topic": "Thermodynamics",
      "difficulty": "medium",
      "question": "An ideal gas absorbs 500 J of heat and does 180 J of work. Its change in internal energy is:",
      "options": [
        "180",
        "500",
        "680",
        "-320",
        "320"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "First law: ΔU=Q−W=500−180=320 J.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-020",
      "section": "Physics",
      "topic": "Kinetic theory",
      "difficulty": "medium",
      "question": "At the same temperature, the ratio of rms speeds of hydrogen molecules H₂ to oxygen molecules O₂ is:",
      "options": [
        "0.25",
        "4",
        "2",
        "8",
        "16"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "v_rms∝1/√M; √(32/2)=4.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-021",
      "section": "Physics",
      "topic": "Simple harmonic motion",
      "difficulty": "easy",
      "question": "An oscillator has angular frequency 5 rad/s. Its period is:",
      "options": [
        "π/5 s",
        "5π s",
        "2π/5 s",
        "10π s",
        "1/5 s"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "T=2π/ω=2π/5 s.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-022",
      "section": "Physics",
      "topic": "Simple harmonic motion",
      "difficulty": "medium",
      "question": "A 0.5 kg mass on a spring of constant 200 N/m has angular frequency:",
      "options": [
        "10",
        "20",
        "14.1",
        "25",
        "400"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "ω=√(k/m)=√(200/0.5)=√400=20 rad/s.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-023",
      "section": "Physics",
      "topic": "Waves",
      "difficulty": "medium",
      "question": "A wave y=0.02 sin(4πt−2πx) has wave speed:",
      "options": [
        "2",
        "0.5",
        "1",
        "4",
        "8"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "ω=4π and k=2π, so v=ω/k=2 m/s.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-024",
      "section": "Physics",
      "topic": "Sound",
      "difficulty": "medium",
      "question": "A closed organ pipe of length 0.85 m has fundamental frequency 100 Hz. The speed of sound implied is:",
      "options": [
        "170",
        "255",
        "340",
        "425",
        "680"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "For a closed pipe f=v/(4L), so v=4Lf=4×0.85×100=340 m/s.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-025",
      "section": "Physics",
      "topic": "Electrostatics",
      "difficulty": "easy",
      "question": "Two charges +2 μC and +8 μC are separated by 3 m in vacuum. Taking k=9×10⁹, the force magnitude is:",
      "options": [
        "0.008",
        "0.024",
        "0.016",
        "0.048",
        "0.16"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "F=kq1q2/r²=9×10⁹×16×10⁻¹²/9=0.016 N.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-026",
      "section": "Physics",
      "topic": "Electric field",
      "difficulty": "medium",
      "question": "The electric field inside a conductor in electrostatic equilibrium is:",
      "options": [
        "finite and uniform",
        "0",
        "maximum at the centre",
        "proportional to radius",
        "dependent on conductor volume"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Free charges rearrange until the internal electrostatic field is zero.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-027",
      "section": "Physics",
      "topic": "Capacitance",
      "difficulty": "medium",
      "question": "Capacitors 6 μF and 3 μF are connected in series. Their equivalent capacitance is:",
      "options": [
        "1",
        "3",
        "4.5",
        "9",
        "2"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "1/C=1/6+1/3=1/2, so C=2 μF.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-028",
      "section": "Physics",
      "topic": "Capacitance",
      "difficulty": "hard",
      "question": "A 4 μF capacitor charged to 10 V is disconnected from the source and its plate separation is doubled. Neglecting fringing, its new voltage is:",
      "options": [
        "5",
        "10",
        "40",
        "20",
        "80"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "With charge fixed, doubling separation halves capacitance, so V=Q/C doubles to 20 V.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-029",
      "section": "Physics",
      "topic": "Current electricity",
      "difficulty": "easy",
      "question": "A 12 Ω resistor carries 2.5 A. The potential difference across it is:",
      "options": [
        "4.8",
        "30",
        "15",
        "24",
        "36"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "V=IR=2.5×12=30 V.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-030",
      "section": "Physics",
      "topic": "Current electricity",
      "difficulty": "medium",
      "question": "Two resistors 4 Ω and 6 Ω are in parallel. Their equivalent resistance is:",
      "options": [
        "1.0",
        "2.4",
        "2.0",
        "5.0",
        "10.0"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "R=(4×6)/(4+6)=24/10=2.4 Ω.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-031",
      "section": "Physics",
      "topic": "Electric power",
      "difficulty": "medium",
      "question": "A 60 W lamp operates at 240 V. Its operating resistance is:",
      "options": [
        "240",
        "480",
        "1440",
        "960",
        "3840"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "R=V²/P=240²/60=960 Ω.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-032",
      "section": "Physics",
      "topic": "Magnetism",
      "difficulty": "easy",
      "question": "A charge q moves with velocity v parallel to a uniform magnetic field B. The magnetic force magnitude is:",
      "options": [
        "0",
        "qvB",
        "qvB/2",
        "qvB²",
        "qB/v"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "F=qvB sinθ; for parallel motion θ=0, so F=0.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-033",
      "section": "Physics",
      "topic": "Magnetic force",
      "difficulty": "medium",
      "question": "A 0.2 m wire carries 5 A perpendicular to a 0.4 T field. The magnetic force on it is:",
      "options": [
        "0.4",
        "0.04",
        "0.1",
        "1.0",
        "4.0"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "F=BIL=0.4×5×0.2=0.4 N.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-034",
      "section": "Physics",
      "topic": "Electromagnetic induction",
      "difficulty": "medium",
      "question": "A coil of 50 turns experiences a flux change of 0.012 Wb per turn in 0.20 s. The average induced emf magnitude is:",
      "options": [
        "0.3",
        "1.2",
        "6",
        "3",
        "30"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "|E|=NΔΦ/Δt=50×0.012/0.20=3 V.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-035",
      "section": "Physics",
      "topic": "AC circuits",
      "difficulty": "medium",
      "question": "A sinusoidal voltage has peak value 170 V. Its rms value is closest to:",
      "options": [
        "85",
        "100",
        "120",
        "170",
        "240"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "V_rms=V0/√2≈170/1.414≈120 V.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-036",
      "section": "Physics",
      "topic": "Electromagnetic waves",
      "difficulty": "easy",
      "question": "Which electromagnetic radiation has a shorter wavelength than visible violet light but longer wavelength than X-rays?",
      "options": [
        "infrared",
        "microwaves",
        "radio waves",
        "gamma rays",
        "ultraviolet"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Ultraviolet lies between visible violet and X-rays in wavelength.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-037",
      "section": "Physics",
      "topic": "Ray optics",
      "difficulty": "medium",
      "question": "A convex lens has focal length 20 cm. An object 60 cm in front of it forms a real image at:",
      "options": [
        "15",
        "30",
        "20",
        "40",
        "60"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Lens formula 1/f=1/v−1/u with u=−60: 1/20=1/v+1/60, so 1/v=1/30.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-038",
      "section": "Physics",
      "topic": "Ray optics",
      "difficulty": "medium",
      "question": "A ray enters glass of refractive index 1.5 from air at an incidence angle of 30°. Its refraction angle satisfies sin r=",
      "options": [
        "1/2",
        "2/3",
        "1/3",
        "3/4",
        "√3/2"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Snell: sin30°=1.5 sinr, so sinr=1/3.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-039",
      "section": "Physics",
      "topic": "Wave optics",
      "difficulty": "medium",
      "question": "In Young’s double-slit experiment, if slit separation is doubled while wavelength and screen distance remain unchanged, fringe width becomes:",
      "options": [
        "half",
        "double",
        "four times",
        "unchanged",
        "one-fourth"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Fringe width β=λD/d, so doubling d halves β.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-040",
      "section": "Physics",
      "topic": "Optical instruments",
      "difficulty": "hard",
      "question": "A simple microscope uses a lens of focal length 5 cm. For final image at infinity and least distance of distinct vision 25 cm, its angular magnification is:",
      "options": [
        "4",
        "6",
        "5",
        "10",
        "25"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "For relaxed eye, magnification M=D/f=25/5=5.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-041",
      "section": "Physics",
      "topic": "Modern physics",
      "difficulty": "easy",
      "question": "The energy of a photon is doubled. Its frequency becomes:",
      "options": [
        "half",
        "four times",
        "unchanged",
        "one-fourth",
        "double"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "E=hν, so frequency is directly proportional to photon energy.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-042",
      "section": "Physics",
      "topic": "Photoelectric effect",
      "difficulty": "medium",
      "question": "Light of photon energy 4.5 eV falls on a metal of work function 2.0 eV. The maximum kinetic energy of emitted electrons is:",
      "options": [
        "1.5",
        "2.0",
        "4.5",
        "2.5",
        "6.5"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Einstein equation K_max=E_photon−φ=4.5−2.0=2.5 eV.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-043",
      "section": "Physics",
      "topic": "Atoms",
      "difficulty": "medium",
      "question": "In the Bohr model of hydrogen, the radius of the n=3 orbit is how many times the radius of the n=1 orbit?",
      "options": [
        "3",
        "6",
        "27",
        "9",
        "81"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Bohr radius r_n∝n², so r_3/r_1=9.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-044",
      "section": "Physics",
      "topic": "Nuclei",
      "difficulty": "medium",
      "question": "A radioactive sample has half-life 6 h. What fraction remains after 18 h?",
      "options": [
        "1/2",
        "1/4",
        "1/8",
        "1/6",
        "1/16"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "18 h is three half-lives, so remaining fraction=(1/2)^3=1/8.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-physics-045",
      "section": "Physics",
      "topic": "Semiconductors",
      "difficulty": "easy",
      "question": "In an intrinsic semiconductor at room temperature, the electron concentration is:",
      "options": [
        "zero",
        "greater than hole concentration",
        "less than hole concentration",
        "independent of temperature",
        "equal to the hole concentration"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Intrinsic generation creates electron-hole pairs, so n=p.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-001",
      "section": "Chemistry",
      "topic": "Atomic structure",
      "difficulty": "easy",
      "question": "How many orbitals are present in a complete n=3 shell?",
      "options": [
        "9",
        "3",
        "6",
        "12",
        "18"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "A shell with principal quantum number n has n² orbitals; for n=3, there are 9.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-002",
      "section": "Chemistry",
      "topic": "Atomic structure",
      "difficulty": "medium",
      "question": "Which set of quantum numbers is not allowed?",
      "options": [
        "(n=3,l=2,m=−1)",
        "(n=4,l=0,m=0)",
        "(n=2,l=1,m=1)",
        "(n=3,l=1,m=0)",
        "(n=2,l=2,m=0)"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "For n=2, l can only be 0 or 1; l=2 is forbidden.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-003",
      "section": "Chemistry",
      "topic": "Chemical bonding",
      "difficulty": "easy",
      "question": "The molecular geometry of BF₃ is:",
      "options": [
        "trigonal planar",
        "tetrahedral",
        "trigonal pyramidal",
        "bent",
        "linear"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Boron has three bonding pairs and no lone pair, giving sp² trigonal planar geometry.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-004",
      "section": "Chemistry",
      "topic": "Chemical bonding",
      "difficulty": "medium",
      "question": "Which species has the highest bond order according to molecular orbital theory?",
      "options": [
        "O₂⁺",
        "O₂",
        "O₂⁻",
        "O₂²⁻",
        "F₂"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Removing one electron from an antibonding π* orbital of O₂ raises bond order from 2 to 2.5.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-005",
      "section": "Chemistry",
      "topic": "Thermodynamics",
      "difficulty": "medium",
      "question": "For a spontaneous process at constant temperature and pressure, the Gibbs free-energy change is:",
      "options": [
        "positive",
        "negative",
        "zero for every step",
        "equal to enthalpy",
        "equal to entropy"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "At constant T and P, spontaneity requires ΔG<0.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-006",
      "section": "Chemistry",
      "topic": "Equilibrium",
      "difficulty": "medium",
      "question": "For N₂(g)+3H₂(g)⇌2NH₃(g), increasing pressure at constant temperature shifts equilibrium:",
      "options": [
        "toward NH₃",
        "toward N₂ and H₂",
        "in neither direction",
        "only if a catalyst is added",
        "toward equal mole fractions"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Higher pressure favours the side with fewer gas moles: 2 on the product side versus 4 on the reactant side.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-007",
      "section": "Chemistry",
      "topic": "Ionic equilibrium",
      "difficulty": "medium",
      "question": "The pH of 1.0×10⁻³ M HCl at 25°C, neglecting water autoionization, is:",
      "options": [
        "1",
        "2",
        "4",
        "11",
        "3"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "HCl is strong, so [H+]=10⁻³ M and pH=3.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-008",
      "section": "Chemistry",
      "topic": "Electrochemistry",
      "difficulty": "medium",
      "question": "For a galvanic cell operating spontaneously under standard conditions, E°cell is:",
      "options": [
        "negative",
        "always zero",
        "equal to ΔG°",
        "positive",
        "independent of electrodes"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "ΔG°=−nFE°cell; spontaneity means ΔG°<0, hence E°cell>0.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-009",
      "section": "Chemistry",
      "topic": "Chemical kinetics",
      "difficulty": "medium",
      "question": "For a first-order reaction, the half-life is:",
      "options": [
        "directly proportional to initial concentration",
        "inversely proportional to initial concentration",
        "independent of initial concentration",
        "zero at high concentration",
        "equal to the rate constant"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "t1/2=ln2/k for first-order kinetics, independent of the starting concentration.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-010",
      "section": "Chemistry",
      "topic": "Solutions",
      "difficulty": "medium",
      "question": "A solution contains 0.20 mol solute and 0.80 mol solvent. The mole fraction of solute is:",
      "options": [
        "0.1",
        "0.2",
        "0.25",
        "0.4",
        "0.8"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Total moles=1.00, so mole fraction=0.20/1.00=0.20.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-011",
      "section": "Chemistry",
      "topic": "Periodic trends",
      "difficulty": "easy",
      "question": "Across a period from left to right, first ionization enthalpy generally:",
      "options": [
        "decreases steadily to zero",
        "remains exactly constant",
        "becomes negative",
        "depends only on neutron number",
        "increases"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Increasing effective nuclear charge generally makes electron removal harder across a period.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-012",
      "section": "Chemistry",
      "topic": "s-Block elements",
      "difficulty": "medium",
      "question": "Which alkali-metal carbonate decomposes appreciably on heating to give the oxide and CO₂?",
      "options": [
        "Na₂CO₃",
        "K₂CO₃",
        "Li₂CO₃",
        "Rb₂CO₃",
        "Cs₂CO₃"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Lithium carbonate is less thermally stable because of the strong polarizing power of Li⁺.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-013",
      "section": "Chemistry",
      "topic": "p-Block elements",
      "difficulty": "medium",
      "question": "Which oxide of nitrogen is paramagnetic?",
      "options": [
        "N₂O",
        "N₂O₃",
        "NO",
        "N₂O₄",
        "N₂O₅"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "NO has an odd number of electrons and therefore one unpaired electron.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-014",
      "section": "Chemistry",
      "topic": "Coordination chemistry",
      "difficulty": "medium",
      "question": "The coordination number of Co in [Co(en)₃]³⁺ is:",
      "options": [
        "3",
        "4",
        "5",
        "9",
        "6"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Each en ligand is bidentate; three ligands provide six donor atoms.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-015",
      "section": "Chemistry",
      "topic": "d-Block elements",
      "difficulty": "medium",
      "question": "The characteristic colours of many transition-metal ions mainly arise from:",
      "options": [
        "nuclear transitions",
        "proton transfer",
        "s–s transitions",
        "d–d electronic transitions",
        "ionic size alone"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Partially filled d orbitals split in ligand fields, allowing d–d transitions that absorb visible light.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-016",
      "section": "Chemistry",
      "topic": "Metallurgy",
      "difficulty": "medium",
      "question": "In the extraction of aluminium, cryolite is added to alumina mainly to:",
      "options": [
        "oxidize aluminium metal",
        "remove iron by magnetic separation",
        "supply carbon monoxide",
        "convert aluminium to a volatile chloride",
        "lower the melting point and improve conductivity"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Cryolite dissolves alumina, lowers the operating temperature, and improves electrical conductivity.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-017",
      "section": "Chemistry",
      "topic": "Organic chemistry basics",
      "difficulty": "easy",
      "question": "The carbon atoms in ethyne are primarily:",
      "options": [
        "sp hybridized",
        "sp² hybridized",
        "sp³ hybridized",
        "dsp² hybridized",
        "unhybridized"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Each carbon in HC≡CH forms two σ domains, corresponding to sp hybridization.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-018",
      "section": "Chemistry",
      "topic": "Isomerism",
      "difficulty": "medium",
      "question": "But-2-ene exhibits geometrical isomerism because:",
      "options": [
        "the C=C bond rotates freely",
        "it contains a chiral carbon",
        "all four substituents are identical",
        "each double-bond carbon has two different substituents",
        "it is an aromatic compound"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Restricted rotation plus two different groups on each alkene carbon permits cis/trans (E/Z) isomerism.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-019",
      "section": "Chemistry",
      "topic": "Hydrocarbons",
      "difficulty": "medium",
      "question": "Addition of HBr to propene in the absence of peroxides gives mainly:",
      "options": [
        "1-bromopropane",
        "1,2-dibromopropane",
        "2-bromopropane",
        "propan-1-ol",
        "propane"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Normal electrophilic addition follows Markovnikov orientation, forming the more stable secondary carbocation intermediate.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-020",
      "section": "Chemistry",
      "topic": "Haloalkanes",
      "difficulty": "medium",
      "question": "Which condition most strongly favours an SN1 reaction?",
      "options": [
        "a methyl halide in a polar aprotic solvent",
        "a tertiary alkyl halide in a polar protic solvent",
        "a primary alkyl halide with a strong nucleophile only",
        "a vinyl halide in water",
        "an aryl halide in liquid ammonia"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "SN1 is favoured by a stable carbocation and a solvent that stabilizes ions.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-021",
      "section": "Chemistry",
      "topic": "Alcohols",
      "difficulty": "medium",
      "question": "Oxidation of a primary alcohol under controlled mild conditions can give:",
      "options": [
        "a ketone only",
        "an aldehyde",
        "an alkane",
        "an ether only",
        "an amide"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Primary alcohols first oxidize to aldehydes before further oxidation to carboxylic acids.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-022",
      "section": "Chemistry",
      "topic": "Phenols",
      "difficulty": "medium",
      "question": "Phenol is more acidic than cyclohexanol mainly because:",
      "options": [
        "phenol has no O–H bond",
        "cyclohexanol is aromatic",
        "phenol is a stronger base",
        "cyclohexanol forms a carbocation",
        "phenoxide ion is resonance stabilized"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "The conjugate base of phenol delocalizes negative charge into the aromatic ring.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-023",
      "section": "Chemistry",
      "topic": "Aldehydes and ketones",
      "difficulty": "medium",
      "question": "Which reagent distinguishes an aldehyde from a ketone by forming a silver mirror with the aldehyde?",
      "options": [
        "Lucas reagent",
        "Baeyer's reagent",
        "Grignard reagent",
        "Tollens' reagent",
        "conc. H₂SO₄"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Tollens' reagent is reduced by aldehydes to metallic silver under the test conditions.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-024",
      "section": "Chemistry",
      "topic": "Carboxylic acids",
      "difficulty": "medium",
      "question": "Carboxylic acids generally have higher boiling points than comparable aldehydes mainly because they:",
      "options": [
        "are always ionic",
        "contain no carbonyl group",
        "have lower molar mass",
        "cannot form intermolecular forces",
        "form hydrogen-bonded dimers"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Two carboxylic acid molecules can associate strongly through two hydrogen bonds.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-025",
      "section": "Chemistry",
      "topic": "Amines",
      "difficulty": "medium",
      "question": "Aniline is less basic than cyclohexylamine mainly because the nitrogen lone pair in aniline is:",
      "options": [
        "absent",
        "part of a triple bond",
        "localized on carbon",
        "delocalized into the benzene ring",
        "protonated permanently"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Resonance delocalization makes the lone pair less available to bind H⁺.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-026",
      "section": "Chemistry",
      "topic": "Biomolecules",
      "difficulty": "easy",
      "question": "The linkage joining amino-acid residues in proteins is a:",
      "options": [
        "glycosidic bond",
        "peptide bond",
        "phosphodiester bond",
        "hydrogen bond only",
        "disulfide bond in every case"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Condensation between amino and carboxyl groups forms an amide linkage called a peptide bond.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-027",
      "section": "Chemistry",
      "topic": "Polymers",
      "difficulty": "medium",
      "question": "Nylon-6,6 is formed by condensation of:",
      "options": [
        "ethylene and benzene",
        "caprolactam only",
        "styrene and butadiene only",
        "vinyl chloride and ethylene glycol",
        "hexamethylenediamine and adipic acid"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Nylon-6,6 is a condensation polyamide from a six-carbon diamine and a six-carbon diacid.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-028",
      "section": "Chemistry",
      "topic": "Chemistry in everyday life",
      "difficulty": "easy",
      "question": "Antacids are used primarily to:",
      "options": [
        "increase stomach acidity",
        "neutralize excess stomach acid",
        "digest proteins directly",
        "act as antibiotics in blood",
        "raise blood glucose"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "Antacids are basic substances that neutralize excess gastric acid.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-029",
      "section": "Chemistry",
      "topic": "Organic reaction mechanisms",
      "difficulty": "hard",
      "question": "In an E2 elimination, bond breaking and bond formation occur:",
      "options": [
        "through a stable carbocation intermediate",
        "through a free-radical chain only",
        "only after rearrangement",
        "without a base",
        "in a single concerted step"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "E2 is bimolecular and concerted: C–H and C–leaving-group bonds change in one transition state.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "keam-2026-engineering-chemistry-030",
      "section": "Chemistry",
      "topic": "Spectroscopy",
      "difficulty": "medium",
      "question": "In infrared spectroscopy, a molecular vibration is IR-active when it causes a change in:",
      "options": [
        "atomic number",
        "nuclear spin only",
        "molar mass",
        "number of neutrons",
        "dipole moment"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 4,
      "negativeMarking": 1,
      "explanation": "IR absorption requires the vibration to change the molecular dipole moment.",
      "source": {
        "kind": "original",
        "reference": "CEE Kerala KEAM 2026 Prospectus",
        "url": "https://www.cee.kerala.gov.in/keam2026/pdf/Prospectus.pdf",
        "checkedOn": "2026-09-02"
      }
    }
  ];
