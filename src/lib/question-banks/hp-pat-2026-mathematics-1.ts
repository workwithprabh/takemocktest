import type { Question } from '../questions';

export const HP_PAT_2026_MATHEMATICS_1: Question[] = [
  {
    "id": "hp-pat-2026-ma-001",
    "section": "Mathematics",
    "topic": "Real Numbers",
    "difficulty": "medium",
    "question": "A school has 72 red flags and 120 blue flags. It wants to make the greatest possible number of identical bundles with no flag left over. How many red flags will be in each bundle?",
    "options": [
      "8",
      "5",
      "3",
      "2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The greatest number of identical bundles is HCF(72,120)=24. Each bundle has 72/24=3 red flags. The task asks a bundle composition, not the HCF itself.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-002",
    "section": "Mathematics",
    "topic": "Real Numbers",
    "difficulty": "medium",
    "question": "Let N = 2^4 \u00d7 3^2 \u00d7 5^3. What is the least positive integer k such that Nk is divisible by 10^4 but is not divisible by 10^5?",
    "options": [
      "2",
      "5",
      "10",
      "25"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Since 10^4 = 2^4\u00d75^4, N already has four factors of 2 but only three factors of 5. The least multiplier that supplies one more factor of 5 is k=5. Then Nk = 2^4\u00d73^2\u00d75^4 is divisible by 10^4. It is not divisible by 10^5 because it still has only four factors of 2. Therefore k=5.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-003",
    "section": "Mathematics",
    "topic": "Real Numbers",
    "difficulty": "easy",
    "question": "Which description must represent an irrational number?",
    "options": [
      "A terminating decimal",
      "A ratio of two integers with non-zero denominator",
      "A recurring decimal",
      "A non-terminating, non-repeating decimal"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Rational numbers have terminating or recurring decimal expansions. A non-terminating, non-repeating decimal is irrational.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-004",
    "section": "Mathematics",
    "topic": "Real Numbers",
    "difficulty": "medium",
    "question": "When 455 is divided by 42, Euclid's division lemma gives 455=42q+r with 0\u2264r<42. What is r?",
    "options": [
      "5",
      "42",
      "35",
      "21"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "42\u00d710=420, so 455=42\u00d710+35. Thus the remainder r is 35.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-005",
    "section": "Mathematics",
    "topic": "Polynomials",
    "difficulty": "easy",
    "question": "The polynomial x\u00b2\u22129x+20 has two zeroes. Their total is:",
    "options": [
      "9",
      "\u22129",
      "20",
      "\u221220"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For ax\u00b2+bx+c, the sum of zeroes is \u2212b/a. Here a=1 and b=\u22129, so the total is 9.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-006",
    "section": "Mathematics",
    "topic": "Polynomials",
    "difficulty": "medium",
    "question": "If x+1 is a factor of 2x\u00b2+kx\u22123, what is k?",
    "options": [
      "\u22123",
      "1",
      "3",
      "\u22121"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By the factor theorem, p(\u22121)=0: 2\u2212k\u22123=0, so \u22121\u2212k=0 and k=\u22121.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-007",
    "section": "Mathematics",
    "topic": "Pair of Linear Equations in Two Variables",
    "difficulty": "medium",
    "question": "The ordered pair (2,3) satisfies both ax+y=7 and x+by=8. What is a+b?",
    "options": [
      "4",
      "6",
      "3",
      "5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "From 2a+3=7, a=2. From 2+3b=8, b=2. Hence a+b=4.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-008",
    "section": "Mathematics",
    "topic": "Pair of Linear Equations in Two Variables",
    "difficulty": "medium",
    "question": "For the pair 3x+2y=16 and 5x\u22122y=8, what equation is obtained by adding the two equations to eliminate y?",
    "options": [
      "8y=24",
      "8x=8",
      "2x=8",
      "8x=24"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Adding gives (3x+5x)+(2y\u22122y)=16+8, so 8x=24.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-009",
    "section": "Mathematics",
    "topic": "Pair of Linear Equations in Two Variables",
    "difficulty": "medium",
    "question": "A two-digit number has digit sum 11. Reversing its digits makes the number 27 smaller. What is the original number?",
    "options": [
      "74",
      "65",
      "47",
      "83"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let tens digit x and units digit y. x+y=11 and (10x+y)\u2212(10y+x)=27, so 9(x\u2212y)=27 and x\u2212y=3. Thus x=7,y=4, giving 74.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-010",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "medium",
    "question": "The two real roots of x\u00b2\u22127x+k=0 differ by 1. What is k?",
    "options": [
      "14",
      "16",
      "10",
      "12"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For x\u00b2\u22127x+k=0, the square of the difference of the roots is the discriminant: 49\u22124k. Since the roots differ by 1, 49\u22124k=1, so k=12.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-011",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "medium",
    "question": "What is the nature of the roots of 3x\u00b2\u22124x+5=0?",
    "options": [
      "Two distinct positive real roots",
      "One zero root",
      "No real roots",
      "Two equal real roots"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The discriminant is b\u00b2\u22124ac=16\u221260=\u221244<0, so there are no real roots.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-012",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "medium",
    "question": "If one root of x\u00b2\u22126x+k=0 is 2, what is k?",
    "options": [
      "8",
      "4",
      "12",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Substitute x=2: 4\u221212+k=0, so k=8.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-013",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "medium",
    "question": "A rectangle has area 48 cm\u00b2 and its length is 2 cm more than its breadth. What is its breadth?",
    "options": [
      "4 cm",
      "6 cm",
      "10 cm",
      "8 cm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "If breadth=b, then b(b+2)=48, giving b\u00b2+2b\u221248=0=(b\u22126)(b+8). The positive value is 6 cm.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-014",
    "section": "Mathematics",
    "topic": "Arithmetic Progression",
    "difficulty": "medium",
    "question": "In an AP, the 5th term is 14 and the 11th term is 32. What is the 8th term?",
    "options": [
      "26",
      "20",
      "23",
      "29"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The 8th term is halfway in index between the 5th and 11th terms, so it equals their average: (14+32)/2=23.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-015",
    "section": "Mathematics",
    "topic": "Arithmetic Progression",
    "difficulty": "medium",
    "question": "The expressions 2x\u22121, 3x+2 and 5x\u22123 are consecutive terms of an AP. What is x?",
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
    "explanation": "For consecutive AP terms, twice the middle equals the sum of the other two: 2(3x+2)=(2x\u22121)+(5x\u22123). Thus 6x+4=7x\u22124, so x=8.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-016",
    "section": "Mathematics",
    "topic": "Arithmetic Progression",
    "difficulty": "medium",
    "question": "The sum of the first 20 terms of the AP 3, 7, 11, ... is:",
    "options": [
      "820",
      "760",
      "840",
      "800"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "S\u2082\u2080=20/2[2\u00d73+19\u00d74]=10(6+76)=820.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-017",
    "section": "Mathematics",
    "topic": "Arithmetic Progression",
    "difficulty": "medium",
    "question": "Three arithmetic means are inserted between 6 and 22 so that all five numbers form an AP. What is the second inserted mean?",
    "options": [
      "18",
      "10",
      "14",
      "12"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are four equal intervals from 6 to 22, so d=(22\u22126)/4=4. The sequence is 6,10,14,18,22; the second inserted mean is 14.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-018",
    "section": "Mathematics",
    "topic": "Arithmetic Progression",
    "difficulty": "medium",
    "question": "If the 5th term of an AP is 18 and the 9th term is 34, what is its first term?",
    "options": [
      "4",
      "6",
      "\u22122",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a+4d=18 and a+8d=34. Subtracting gives 4d=16, so d=4 and a=2.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-019",
    "section": "Mathematics",
    "topic": "Triangles",
    "difficulty": "medium",
    "question": "Two similar triangles have perimeters 36 cm and 54 cm. A side of the smaller triangle is 8 cm. The corresponding side of the larger triangle is:",
    "options": [
      "10 cm",
      "18 cm",
      "16 cm",
      "12 cm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For similar triangles, corresponding sides are in the same ratio as perimeters: 54/36=3/2. So the larger side is 8\u00d73/2=12 cm.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-020",
    "section": "Mathematics",
    "topic": "Triangles",
    "difficulty": "medium",
    "question": "In triangle ABC, D lies on AB and E lies on AC. Given AD/AB=2/5 and AE=6 cm, AC=15 cm. If \u2220ABC=52\u00b0, what is \u2220ADE?",
    "options": [
      "26\u00b0",
      "128\u00b0",
      "52\u00b0",
      "38\u00b0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "AE/AC=6/15=2/5=AD/AB. By the converse proportionality theorem, DE\u2225BC. Therefore \u2220ADE equals the corresponding angle \u2220ABC=52\u00b0.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-021",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "The points A(1,1), B(4,5) and C(7,9) are:",
    "options": [
      "on the y-axis",
      "vertices of an equilateral triangle",
      "collinear",
      "vertices of a right triangle"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Area = 1/2|1(5\u22129)+4(9\u22121)+7(1\u22125)| = 1/2|\u22124+32\u221228|=0, so the points are collinear.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-022",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "The midpoint of AB is M(5,2). If A is (1,\u22124), then B is:",
    "options": [
      "(9, 8)",
      "(6, 4)",
      "(4, 6)",
      "(10, 6)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "If B=(x,y), then (1+x)/2=5 and (\u22124+y)/2=2. Thus x=9 and y=8.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-023",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "Point P divides A(\u22121,2) and B(8,5) internally in the ratio 2:1, AP:PB=2:1. What is the distance of P from the point (5,0)?",
    "options": [
      "5 units",
      "6 units",
      "3 units",
      "4 units"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P=((2\u00d78+1\u00d7(\u22121))/3,(2\u00d75+1\u00d72)/3)=(5,4). Its distance from (5,0) is 4.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-024",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "A triangle has vertices (1,2), (5,2) and (k,6). Which fact is true for every real value of k?",
    "options": [
      "It is always right-angled",
      "Its area is 8 square units",
      "Its perimeter is constant",
      "Its area is 4 square units"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The base from (1,2) to (5,2) has length 4 and the vertical height of (k,6) above y=2 is 4, independent of k. Area=1/2\u00d74\u00d74=8.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-025",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "For an acute angle \u03b8, tan\u03b8=3/4. What is sec\u03b8?",
    "options": [
      "4/3",
      "5/4",
      "4/5",
      "3/5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using a 3-4-5 right triangle, sec\u03b8=hypotenuse/adjacent=5/4.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-026",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "For an acute angle \u03b8, 2sin\u00b2\u03b8=1. Then \u03b8 is:",
    "options": [
      "90\u00b0",
      "30\u00b0",
      "45\u00b0",
      "60\u00b0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "sin\u00b2\u03b8=1/2, so sin\u03b8=1/\u221a2 for acute \u03b8. Hence \u03b8=45\u00b0.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-027",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "For an acute angle \u03b8, sec\u03b8=13/12. What is tan\u03b8?",
    "options": [
      "13/5",
      "5/13",
      "12/5",
      "5/12"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "sec\u00b2\u03b8\u2212tan\u00b2\u03b8=1. Thus tan\u00b2\u03b8=(169/144)\u22121=25/144, so tan\u03b8=5/12.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-028",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "An observer's eye is 1.5 m above level ground. The top of a vertical pole is 15.5 m above the ground. If the angle of elevation is \u03b8 and tan\u03b8=7/24, how far is the observer horizontally from the pole?",
    "options": [
      "28 m",
      "48 m",
      "56 m",
      "24 m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The vertical height above the observer's eye is 15.5\u22121.5=14 m. Since tan\u03b8=14/d=7/24, d=14\u00d724/7=48 m.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-029",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "medium",
    "question": "From an external point P, tangents PA and PB touch a circle with centre O. If OA=5 cm and PA=12 cm, what is the perimeter of quadrilateral OAPB?",
    "options": [
      "24 cm",
      "29 cm",
      "39 cm",
      "34 cm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "OA=OB=5 cm because they are radii, and PA=PB=12 cm because tangents from the same external point are equal. Perimeter=5+12+12+5=34 cm.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-030",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "medium",
    "question": "Tangents PA and PB are drawn from the same external point. If PA=x+3 cm and PB=2x\u22125 cm, then x is:",
    "options": [
      "10",
      "8",
      "5",
      "6"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Tangents from the same external point are equal: x+3=2x\u22125, so x=8.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-031",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "easy",
    "question": "How many tangents can be drawn to a circle from a point lying outside the circle?",
    "options": [
      "Infinitely many",
      "1",
      "2",
      "0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Exactly two tangents can be drawn from an external point.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-032",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "medium",
    "question": "A point P is 5 cm from the centre of a circle of radius 7 cm. How many real tangents can be drawn from P to the circle?",
    "options": [
      "1",
      "0",
      "2",
      "Infinitely many"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P lies inside the circle because OP<r. No real tangent can be drawn from an interior point.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-033",
    "section": "Mathematics",
    "topic": "Constructions",
    "difficulty": "medium",
    "question": "To divide a line segment AB internally in the ratio 3:2 by the standard ray construction, into how many equal parts is the auxiliary ray divided?",
    "options": [
      "6",
      "5",
      "3",
      "2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a ratio m:n, the auxiliary ray is divided into m+n equal parts. Here 3+2=5.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-034",
    "section": "Mathematics",
    "topic": "Constructions",
    "difficulty": "medium",
    "question": "In the standard construction of tangents from an external point P to a circle with centre O, why is the circle with diameter OP drawn?",
    "options": [
      "To make OP a tangent automatically",
      "To find the midpoint of every chord",
      "To double the radius of the given circle",
      "To locate points T for which \u2220OTP=90\u00b0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Any angle subtended by diameter OP at a point T on that auxiliary circle is 90\u00b0. Hence OT is perpendicular to PT, making PT tangent to the given circle at T.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-035",
    "section": "Mathematics",
    "topic": "Areas Related to Circles",
    "difficulty": "medium",
    "question": "A sector of a circle of radius 14 cm has a perimeter of 64 cm. What is the area of the sector?",
    "options": [
      "196 cm\u00b2",
      "252 cm\u00b2",
      "350 cm\u00b2",
      "448 cm\u00b2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Perimeter of a sector = 2r + arc length, so arc length = 64 - 2(14) = 36 cm. Area of a sector = (1/2) x arc length x radius = (1/2) x 36 x 14 = 252 cm\u00b2.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-036",
    "section": "Mathematics",
    "topic": "Areas Related to Circles",
    "difficulty": "medium",
    "question": "A sector of radius 9 cm has arc length 3\u03c0 cm. What is the area of the sector?",
    "options": [
      "9\u03c0 cm\u00b2",
      "81\u03c0/2 cm\u00b2",
      "27\u03c0 cm\u00b2",
      "27\u03c0/2 cm\u00b2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a sector, area=1/2\u00d7r\u00d7arc length=1/2\u00d79\u00d73\u03c0=27\u03c0/2 cm\u00b2.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-037",
    "section": "Mathematics",
    "topic": "Areas Related to Circles",
    "difficulty": "medium",
    "question": "The length of a 90\u00b0 arc of a circle of radius 14 cm, using \u03c0=22/7, is:",
    "options": [
      "22 cm",
      "88 cm",
      "44 cm",
      "11 cm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Arc length=(90/360)\u00d72\u03c0r=\u00bc\u00d72\u00d7(22/7)\u00d714=22 cm.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-038",
    "section": "Mathematics",
    "topic": "Areas Related to Circles",
    "difficulty": "medium",
    "question": "A sector of a circle has radius 12 cm and perimeter 30 cm, where the perimeter includes the two radii and the arc. What is the area of the sector?",
    "options": [
      "36 cm\u00b2",
      "18 cm\u00b2",
      "60 cm\u00b2",
      "72 cm\u00b2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The arc length is 30\u22122(12)=6 cm. For a sector, area=(1/2)\u00d7radius\u00d7arc length=(1/2)\u00d712\u00d76=36 cm\u00b2.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-039",
    "section": "Mathematics",
    "topic": "Areas Related to Circles",
    "difficulty": "medium",
    "question": "A semicircular garden has radius 10 m. What is its perimeter including the diameter?",
    "options": [
      "20\u03c0 m",
      "20\u03c0+20 m",
      "10\u03c0 m",
      "10\u03c0+20 m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Perimeter of a semicircle including diameter is half the circumference plus diameter: \u03c0r+2r=10\u03c0+20.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-040",
    "section": "Mathematics",
    "topic": "Surface Areas and Volumes",
    "difficulty": "easy",
    "question": "The volume of a cylinder of radius 3 cm and height 10 cm is:",
    "options": [
      "90\u03c0 cm\u00b3",
      "30\u03c0 cm\u00b3",
      "60\u03c0 cm\u00b3",
      "180\u03c0 cm\u00b3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Cylinder volume=\u03c0r\u00b2h=\u03c0\u00d79\u00d710=90\u03c0 cm\u00b3.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-041",
    "section": "Mathematics",
    "topic": "Surface Areas and Volumes",
    "difficulty": "medium",
    "question": "A cone and a cylinder have the same base radius and the same height. The volume of the cone is what fraction of the cylinder's volume?",
    "options": [
      "1/2",
      "1/3",
      "3",
      "2/3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Cone volume=(1/3)\u03c0r\u00b2h, while cylinder volume=\u03c0r\u00b2h.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-042",
    "section": "Mathematics",
    "topic": "Surface Areas and Volumes",
    "difficulty": "medium",
    "question": "A cylinder of radius 4 cm and height 9 cm has the same volume as a cone of radius 6 cm. What is the height of the cone?",
    "options": [
      "12 cm",
      "18 cm",
      "9 cm",
      "6 cm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Equating volumes: \u03c0(4\u00b2)(9)=(1/3)\u03c0(6\u00b2)h. Thus 144=12h, so h=12 cm.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-043",
    "section": "Mathematics",
    "topic": "Surface Areas and Volumes",
    "difficulty": "medium",
    "question": "A frustum is formed by cutting a cone parallel to its base. If its radii are 6 cm and 3 cm and its height is 4 cm, its volume is:",
    "options": [
      "72\u03c0 cm\u00b3",
      "84\u03c0 cm\u00b3",
      "36\u03c0 cm\u00b3",
      "108\u03c0 cm\u00b3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "V=(1/3)\u03c0h(R\u00b2+r\u00b2+Rr)=(4/3)\u03c0(36+9+18)=84\u03c0 cm\u00b3.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-044",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "easy",
    "question": "The mean of the numbers 6, 9, 12, 15 and 18 is:",
    "options": [
      "12",
      "15",
      "10",
      "13"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Their sum is 60 and there are 5 values, so the mean is 60/5=12.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-045",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "question": "For a grouped distribution, the modal class is the class interval with:",
    "options": [
      "the lowest frequency",
      "the largest lower limit",
      "the highest frequency",
      "the largest class width"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The modal class is defined as the class having the greatest frequency.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-046",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "question": "In a grouped frequency table, N=40. The median class is the class whose cumulative frequency first becomes:",
    "options": [
      "10 or more",
      "20 or more",
      "40",
      "30 or more"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The median position is N/2=20, so the median class is the first class whose cumulative frequency reaches or exceeds 20.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-047",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "easy",
    "question": "A spinner is divided into 8 equal sectors numbered 1 to 8. It is spun once. What is the probability that the pointer stops on a multiple of 3?",
    "options": [
      "3/8",
      "1/8",
      "1/4",
      "1/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The multiples of 3 are 3 and 6, so there are 2 favourable sectors out of 8. Probability=2/8=1/4.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-048",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "easy",
    "question": "A bag contains 5 white, 3 black and 2 green balls. One ball is drawn at random. The probability that it is green is:",
    "options": [
      "1/3",
      "1/5",
      "1/10",
      "1/2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are 10 balls in total and 2 are green, so probability=2/10=1/5.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-049",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "Two fair coins are tossed together. What is the probability of getting exactly one head?",
    "options": [
      "1/2",
      "3/4",
      "1",
      "1/4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The equally likely outcomes are HH, HT, TH, TT. Exactly one head occurs in HT and TH, so probability=2/4=1/2.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "hp-pat-2026-ma-050",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "One integer is chosen at random from 1 to 20. What is the probability that it is divisible by 4 but not by 8?",
    "options": [
      "3/20",
      "1/10",
      "1/5",
      "1/4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Multiples of 4 are 4,8,12,16,20. Excluding multiples of 8 leaves 4,12,20: 3 favourable outcomes out of 20.",
    "source": {
      "kind": "original",
      "reference": "HP PAT 2026 current official prospectus, pattern and Appendix-II syllabus",
      "url": "https://www.hptechboard.com/storage/files/1/PAT_LEET_2026/PAT%202026%20Prospectus_.pdf",
      "checkedOn": "2026-08-29"
    }
  }
];
