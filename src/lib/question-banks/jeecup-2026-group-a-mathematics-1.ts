import type { Question } from '../questions';

export const JEECUP_2026_GROUP_A_MATHEMATICS_1: Question[] = [
  {
    "id": "jeecup-2026-ma-001",
    "section": "Mathematics",
    "topic": "Real numbers",
    "difficulty": "easy",
    "question": "Three maintenance indicators reset every 20, 28 and 45 operating hours. If they reset together at hour 0, after how many operating hours will they next reset together?",
    "options": [
      "630 hours",
      "1260 hours",
      "2520 hours",
      "420 hours"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The next simultaneous reset occurs after LCM(20,28,45). Since 20=2\u00b2\u00d75, 28=2\u00b2\u00d77 and 45=3\u00b2\u00d75, the LCM is 2\u00b2\u00d73\u00b2\u00d75\u00d77=1260 hours.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-002",
    "section": "Mathematics",
    "topic": "Real numbers",
    "difficulty": "medium",
    "question": "A rectangular floor is 693 cm long and 945 cm wide. What is the greatest possible side length of a square tile that can cover it exactly without cutting?",
    "options": [
      "63 cm",
      "21 cm",
      "42 cm",
      "126 cm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The tile side must divide both dimensions, so it is the HCF. By Euclid\u2019s algorithm, 945=693+252, 693=2\u00d7252+189, 252=189+63, and 189=3\u00d763. Hence the HCF is 63 cm.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-003",
    "section": "Mathematics",
    "topic": "Surds",
    "difficulty": "easy",
    "question": "The value of (\u221a5 + \u221a2)(\u221a5 \u2212 \u221a2) is:",
    "options": [
      "\u221a3",
      "7",
      "\u22123",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Using (a+b)(a\u2212b)=a\u00b2\u2212b\u00b2 gives 5\u22122=3.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-004",
    "section": "Mathematics",
    "topic": "Real numbers",
    "difficulty": "medium",
    "question": "What is the smallest positive integer k for which the rational number k/1176 has a terminating decimal expansion?",
    "options": [
      "21",
      "49",
      "63",
      "147"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "1176=2\u00b3\u00d73\u00d77\u00b2. In lowest terms, a terminating decimal can have only factors 2 and 5 in the denominator. The smallest k that cancels 3\u00d77\u00b2=147 is 147, giving 147/1176=1/8.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-005",
    "section": "Mathematics",
    "topic": "Polynomials",
    "difficulty": "medium",
    "question": "If 3 and 4 are the zeroes of a quadratic polynomial, what is the sum of their reciprocals?",
    "options": [
      "7/12",
      "1/7",
      "12/7",
      "1/12"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "1/3 + 1/4 = (4+3)/12 = 7/12.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-006",
    "section": "Mathematics",
    "topic": "Quadratic equations",
    "difficulty": "easy",
    "question": "For what value of k does x\u00b2 \u2212 6x + k = 0 have equal roots?",
    "options": [
      "36",
      "6",
      "9",
      "12"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Equal roots require discriminant 36\u22124k=0, so k=9.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-007",
    "section": "Mathematics",
    "topic": "Linear equations",
    "difficulty": "medium",
    "question": "A notebook costs twice as much as a pen. If 2 notebooks and 3 pens cost \u20b984, what is the price of one notebook?",
    "options": [
      "\u20b921",
      "\u20b924",
      "\u20b928",
      "\u20b918"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Let a pen cost p. Then a notebook costs 2p and 2(2p)+3p=84 gives 7p=84, so p=12 and a notebook costs \u20b924.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-008",
    "section": "Mathematics",
    "topic": "Pair of linear equations",
    "difficulty": "medium",
    "question": "Which pair of equations has no solution?",
    "options": [
      "2x + 3y = 7 and 4x + 6y = 20",
      "2x \u2212 y = 3 and x + y = 4",
      "3x + 2y = 8 and 6x + 4y = 16",
      "x + y = 5 and x \u2212 y = 1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For no solution, the x- and y-coefficients are proportional but constants are not. Here 2/4 = 3/6 \u2260 7/20.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-009",
    "section": "Mathematics",
    "topic": "Arithmetic progressions",
    "difficulty": "medium",
    "question": "How many terms of the arithmetic progression 22, 31, 40, 49, ... are less than 200?",
    "options": [
      "19",
      "20",
      "21",
      "22"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The nth term is a\u2099=22+9(n\u22121). We need 22+9(n\u22121)<200, so 9(n\u22121)<178 and n\u22121<19.77. Hence the greatest possible n is 20; the 20th term is 193 and the 21st is 202.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-010",
    "section": "Mathematics",
    "topic": "Arithmetic progressions",
    "difficulty": "medium",
    "question": "What is the sum of the first 18 terms of the arithmetic progression 6, 10, 14, \u2026?",
    "options": [
      "648",
      "720",
      "756",
      "684"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Here a=6, d=4 and n=18. S18=18/2[2\u00d76+17\u00d74]=9(12+68)=720.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-011",
    "section": "Mathematics",
    "topic": "Coordinate geometry",
    "difficulty": "easy",
    "question": "What is the midpoint of the segment joining (\u22124, 7) and (8, \u22125)?",
    "options": [
      "(\u22122, 1)",
      "(4, 2)",
      "(2, \u22121)",
      "(2, 1)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Midpoint = ((\u22124+8)/2, (7\u22125)/2) = (2,1).",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-012",
    "section": "Mathematics",
    "topic": "Coordinate geometry",
    "difficulty": "medium",
    "question": "The distance between (1, \u22122) and (7, 6) is:",
    "options": [
      "8 units",
      "10 units",
      "14 units",
      "12 units"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Distance = \u221a[(7\u22121)\u00b2+(6+2)\u00b2] = \u221a(36+64)=10.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-013",
    "section": "Mathematics",
    "topic": "Coordinate geometry",
    "difficulty": "medium",
    "question": "Point P divides the segment joining A(2, 5) and B(11, \u22124) internally in the ratio AP:PB = 2:1. What are the coordinates of P?",
    "options": [
      "(8, \u22121)",
      "(9, \u22122)",
      "(7, 0)",
      "(5, 2)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "By the section formula, P=((2\u00d711+1\u00d72)/3,(2\u00d7(\u22124)+1\u00d75)/3)=(8,\u22121).",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-014",
    "section": "Mathematics",
    "topic": "Coordinate geometry",
    "difficulty": "medium",
    "question": "What is the area of the triangle with vertices (0, 0), (6, 0) and (2, 5)?",
    "options": [
      "30 square units",
      "12 square units",
      "15 square units",
      "10 square units"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Take the base on the x-axis: base=6 and height=5. Area = 1/2\u00d76\u00d75 = 15.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-015",
    "section": "Mathematics",
    "topic": "Similar triangles",
    "difficulty": "medium",
    "question": "Two similar triangular panels have areas 180 cm\u00b2 and 405 cm\u00b2. An altitude of the smaller panel is 12 cm. What is the corresponding altitude of the larger panel?",
    "options": [
      "16 cm",
      "18 cm",
      "27 cm",
      "8 cm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The ratio of corresponding lengths is the square root of the area ratio: \u221a(405/180)=\u221a(9/4)=3/2. Therefore the larger altitude is 12\u00d73/2=18 cm.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-016",
    "section": "Mathematics",
    "topic": "Triangles",
    "difficulty": "medium",
    "question": "A right triangle has perpendicular sides 5 cm and 7 cm. What is the exact length of its hypotenuse?",
    "options": [
      "12 cm",
      "\u221a24 cm",
      "\u221a74 cm",
      "6 cm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "By Pythagoras, c=\u221a(5\u00b2+7\u00b2)=\u221a74 cm.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-017",
    "section": "Mathematics",
    "topic": "Triangles",
    "difficulty": "medium",
    "question": "In triangle ABC, AD bisects angle A and meets BC at D. If AB:AC = 3:5 and BD = 6 cm, what is DC?",
    "options": [
      "9 cm",
      "10 cm",
      "12 cm",
      "8 cm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "By the angle-bisector theorem, BD/DC = AB/AC = 3/5. Thus 6/DC=3/5 and DC=10 cm.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-018",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "medium",
    "question": "From an external point P, the distance to the centre O of a circle is 13 cm and the radius is 7 cm. What is the exact length of a tangent from P?",
    "options": [
      "10 cm",
      "6 cm",
      "2\u221a30 cm",
      "\u221a42 cm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The radius to the point of contact is perpendicular to the tangent, so PT=\u221a(13\u00b2\u22127\u00b2)=\u221a120=2\u221a30 cm.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-019",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "medium",
    "question": "A circle has radius 10 cm and a chord is 14 cm long. What is the exact perpendicular distance from the centre to the chord?",
    "options": [
      "3 cm",
      "7 cm",
      "\u221a51 cm",
      "\u221a35 cm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The perpendicular from the centre bisects the chord. The half-chord is 7 cm, so the distance is \u221a(10\u00b2\u22127\u00b2)=\u221a51 cm.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-020",
    "section": "Mathematics",
    "topic": "Areas related to circles",
    "difficulty": "medium",
    "question": "A circular sign of radius 7 cm is divided into three equal sectors. Using \u03c0 = 22/7, what area does one sector cover?",
    "options": [
      "44 cm\u00b2",
      "77 cm\u00b2",
      "154 cm\u00b2",
      "154/3 cm\u00b2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The whole circle has area (22/7)\u00d77\u00b2=154 cm\u00b2. One of three equal sectors has area 154/3 cm\u00b2.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-021",
    "section": "Mathematics",
    "topic": "Areas related to circles",
    "difficulty": "medium",
    "question": "A circular metal disc has radius 10 cm. A concentric circular hole is cut from it, leaving an area of 64\u03c0 cm\u00b2. What is the radius of the hole?",
    "options": [
      "8 cm",
      "4 cm",
      "2 cm",
      "6 cm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "If the hole radius is r, remaining area is \u03c0(10\u00b2\u2212r\u00b2)=64\u03c0. Thus 100\u2212r\u00b2=64, so r\u00b2=36 and r=6 cm.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-022",
    "section": "Mathematics",
    "topic": "Surface areas and volumes",
    "difficulty": "medium",
    "question": "A cone and a cylinder have the same base radius. The cone is 15 cm high, and the two solids have equal volumes. What is the height of the cylinder?",
    "options": [
      "15 cm",
      "5 cm",
      "10 cm",
      "45 cm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Equal volumes give (1/3)\u03c0r\u00b2\u00d715 = \u03c0r\u00b2h. Cancelling \u03c0r\u00b2 gives h=5 cm.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-023",
    "section": "Mathematics",
    "topic": "Surface areas and volumes",
    "difficulty": "medium",
    "question": "The curved surface area of a hemisphere is 308 cm\u00b2. Using \u03c0 = 22/7, what is its radius?",
    "options": [
      "11 cm",
      "14 cm",
      "7 cm",
      "3.5 cm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For a hemisphere, curved surface area=2\u03c0r\u00b2. Thus 2\u00d7(22/7)r\u00b2=308, giving r\u00b2=49 and r=7 cm.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-024",
    "section": "Mathematics",
    "topic": "Surface areas and volumes",
    "difficulty": "medium",
    "question": "The height of a cylinder is three times its radius. If its volume is 648\u03c0 cm\u00b3, what is its radius?",
    "options": [
      "6 cm",
      "9 cm",
      "3 cm",
      "12 cm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "With h=3r, volume \u03c0r\u00b2h=3\u03c0r\u00b3. Thus 3\u03c0r\u00b3=648\u03c0, so r\u00b3=216 and r=6 cm.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-025",
    "section": "Mathematics",
    "topic": "Surface areas and volumes",
    "difficulty": "medium",
    "question": "What is the space diagonal of a cuboid of dimensions 2 cm, 6 cm and 9 cm?",
    "options": [
      "13 cm",
      "9 cm",
      "10 cm",
      "11 cm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Diagonal=\u221a(2\u00b2+6\u00b2+9\u00b2)=\u221a121=11 cm.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-026",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "easy",
    "question": "For an acute angle \u03b8, cot \u03b8 = 11/60. What is sin \u03b8 \u2212 cos \u03b8?",
    "options": [
      "71/61",
      "\u221249/61",
      "49/61",
      "11/60"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Take adjacent:opposite = 11:60. The hypotenuse is \u221a(11\u00b2+60\u00b2)=61. Hence sin \u03b8=60/61 and cos \u03b8=11/61, so sin \u03b8\u2212cos \u03b8=49/61.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-027",
    "section": "Mathematics",
    "topic": "Applications of trigonometry",
    "difficulty": "medium",
    "question": "From a point on level ground, the angle of elevation of the top of a vertical pole is 30\u00b0. If the point is 18\u221a3 m from the pole, what is the pole\u2019s height?",
    "options": [
      "9 m",
      "18 m",
      "54 m",
      "18\u221a3 m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "tan30\u00b0=h/(18\u221a3)=1/\u221a3, giving h=18 m.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-028",
    "section": "Mathematics",
    "topic": "Trigonometric identities",
    "difficulty": "easy",
    "question": "For an angle \u03b8 for which the expressions are defined, sec\u00b2\u03b8 \u2212 tan\u00b2\u03b8 equals:",
    "options": [
      "cos\u00b2\u03b8",
      "sin\u00b2\u03b8",
      "1",
      "0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The identity sec\u00b2\u03b8 = 1 + tan\u00b2\u03b8 gives sec\u00b2\u03b8\u2212tan\u00b2\u03b8=1.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-029",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "If \u03b8 is acute and cos \u03b8 = 12/13, what is sin(90\u00b0 \u2212 \u03b8)?",
    "options": [
      "12/13",
      "1/13",
      "5/13",
      "13/12"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "By the complementary-angle identity, sin(90\u00b0\u2212\u03b8)=cos\u03b8=12/13.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-030",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "question": "The mean of the five numbers 8, 11, 13, 17 and x is 14. What is x?",
    "options": [
      "22",
      "19",
      "20",
      "21"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Total required = 5\u00d714=70. The known four sum to 49, so x=21.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-031",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "easy",
    "question": "What is the median of 5, 9, 12, 14, 18, 21 and 30?",
    "options": [
      "14",
      "15",
      "18",
      "12"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "With seven ordered observations, the median is the fourth value, 14.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-032",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "An integer is chosen at random from 10 through 30, inclusive. What is the probability that it is prime?",
    "options": [
      "2/5",
      "3/7",
      "2/7",
      "1/7"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "There are 21 integers. The primes are 11,13,17,19,23,29: 6 outcomes. Probability=6/21=2/7.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-033",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "A fair die is rolled once. What is the probability that the result is a factor of 6?",
    "options": [
      "1/3",
      "5/6",
      "2/3",
      "1/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The factors of 6 on a die are 1,2,3,6, giving 4 favourable outcomes out of 6. Thus the probability is 2/3.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-034",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "Three fair coins are tossed. What is the probability of getting exactly two heads?",
    "options": [
      "3/8",
      "1/2",
      "1/8",
      "1/4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "There are 8 equally likely outcomes. Exactly two heads occur in HHT, HTH and THH, so the probability is 3/8.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-035",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "A bag contains 4 green and 3 yellow balls. Two balls are drawn without replacement. What is the probability that the two balls have different colours?",
    "options": [
      "4/7",
      "2/7",
      "3/7",
      "5/7"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "P(different)=P(G then Y)+P(Y then G)=(4/7)(3/6)+(3/7)(4/6)=24/42=4/7.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-036",
    "section": "Mathematics",
    "topic": "Polynomials",
    "difficulty": "medium",
    "question": "If x = \u22123 is a zero of x\u00b2 + kx \u2212 18, what is k?",
    "options": [
      "6",
      "\u22126",
      "3",
      "\u22123"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Substitute x=\u22123: 9\u22123k\u221218=0, so \u22123k=9 and k=\u22123.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-037",
    "section": "Mathematics",
    "topic": "Quadratic equations",
    "difficulty": "medium",
    "question": "A rectangle has area 88 cm\u00b2 and its length is 3 cm more than its width. What is its perimeter?",
    "options": [
      "34 cm",
      "44 cm",
      "36 cm",
      "38 cm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Let width=w. Then w(w+3)=88, so w=8 and length=11. The perimeter is 2(8+11)=38 cm.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-038",
    "section": "Mathematics",
    "topic": "Linear equations",
    "difficulty": "medium",
    "question": "Three consecutive odd positive integers have sum 81. What is the largest of the three?",
    "options": [
      "25",
      "27",
      "29",
      "31"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Let the integers be n\u22122, n and n+2. Their sum is 3n=81, so n=27 and the largest is 29.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-039",
    "section": "Mathematics",
    "topic": "Algebraic equations",
    "difficulty": "medium",
    "question": "If 2/(x + 1) = 1/4, what is x?",
    "options": [
      "7",
      "5",
      "3",
      "9"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Cross-multiplication gives 8=x+1, so x=7.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-040",
    "section": "Mathematics",
    "topic": "Algebraic identities",
    "difficulty": "medium",
    "question": "If p + q = 13 and p\u00b2 + q\u00b2 = 109, what is the value of pq?",
    "options": [
      "15",
      "20",
      "25",
      "30"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Using (p+q)\u00b2=p\u00b2+q\u00b2+2pq, we get 169=109+2pq. Hence 2pq=60 and pq=30.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-041",
    "section": "Mathematics",
    "topic": "Polynomials",
    "difficulty": "medium",
    "question": "What is the remainder when 3x\u00b3 \u2212 4x\u00b2 + 2 is divided by x + 1?",
    "options": [
      "5",
      "1",
      "\u22125",
      "\u22129"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "By the remainder theorem, the remainder is f(\u22121)=\u22123\u22124+2=\u22125.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-042",
    "section": "Mathematics",
    "topic": "Triangles",
    "difficulty": "medium",
    "question": "An isosceles triangle has perimeter 38 cm and base 10 cm. What is its area?",
    "options": [
      "5\u221a171 cm\u00b2",
      "10\u221a171 cm\u00b2",
      "70 cm\u00b2",
      "95 cm\u00b2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Each equal side is (38\u221210)/2=14 cm. The altitude bisects the base, so h=\u221a(14\u00b2\u22125\u00b2)=\u221a171 cm. Area=(1/2)\u00d710\u00d7\u221a171=5\u221a171 cm\u00b2.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-043",
    "section": "Mathematics",
    "topic": "Surface areas and volumes",
    "difficulty": "hard",
    "question": "A cylindrical vessel of radius 7 cm and height 20 cm is 3/5 full of water. Using \u03c0 = 22/7, how much more water is needed to fill it?",
    "options": [
      "1232 cm\u00b3",
      "1848 cm\u00b3",
      "924 cm\u00b3",
      "1540 cm\u00b3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The empty fraction is 2/5. Full volume=(22/7)\u00d749\u00d720=3080 cm\u00b3, so water needed=(2/5)\u00d73080=1232 cm\u00b3.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-044",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "medium",
    "question": "Using \u03c0 = 22/7, a circle has circumference 55 cm. What is its radius?",
    "options": [
      "7.5 cm",
      "8.75 cm",
      "11 cm",
      "17.5 cm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "2\u03c0r=55, so r=55/[2\u00d7(22/7)]=55\u00d77/44=8.75 cm.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-045",
    "section": "Mathematics",
    "topic": "Coordinate geometry",
    "difficulty": "medium",
    "question": "What is the exact distance of the point (\u22126, 7) from the origin?",
    "options": [
      "13 units",
      "\u221a43 units",
      "7 units",
      "\u221a85 units"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Distance=\u221a[(-6)\u00b2+7\u00b2]=\u221a(36+49)=\u221a85.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-046",
    "section": "Mathematics",
    "topic": "Arithmetic progressions",
    "difficulty": "hard",
    "question": "In an arithmetic progression, the 5th term is 17 and the sum of the 5th and 13th terms is 58. What is the common difference?",
    "options": [
      "6",
      "3",
      "4",
      "2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The 13th term is 58\u221217=41. Since a13\u2212a5=8d=41\u221217=24, d=3.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-047",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "If tan \u03b8 = 1/\u221a3 and \u03b8 is acute, what is \u03b8?",
    "options": [
      "90\u00b0",
      "45\u00b0",
      "60\u00b0",
      "30\u00b0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For an acute angle, tan30\u00b0=1/\u221a3.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-048",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "question": "The values 2, 4, 6 and 8 occur with frequencies 1, 2, 3 and 4 respectively. What is the mean?",
    "options": [
      "7",
      "6.5",
      "6",
      "5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Weighted sum=2\u00d71+4\u00d72+6\u00d73+8\u00d74=60; total frequency=10; mean=6.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-049",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "A two-digit number is formed using two different digits chosen from 1, 2, 3, 4 and 5. What is the probability that the number is divisible by 5?",
    "options": [
      "2/5",
      "1/5",
      "1/4",
      "1/2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "There are 5\u00d74=20 possible numbers. For divisibility by 5 the units digit must be 5, while the tens digit has 4 choices. Probability=4/20=1/5.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "jeecup-2026-ma-050",
    "section": "Mathematics",
    "topic": "Arithmetic progressions",
    "difficulty": "hard",
    "question": "The 4th term of an arithmetic progression is 14 and the sum of its first 8 terms is 120. What is its common difference?",
    "options": [
      "2",
      "3",
      "4",
      "5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "a+3d=14. Also S8=4[2a+7d]=120, so 2a+7d=30. Substituting a=14\u22123d gives 28+d=30, hence d=2.",
    "source": {
      "kind": "original",
      "reference": "JEECUP / UPJEE(P) 2026 current official Group A information brochure and scheme",
      "url": "https://jeecup.admissions.nic.in/document/information-brochure-for-upjee-2026/",
      "checkedOn": "2026-08-29"
    }
  }
];
