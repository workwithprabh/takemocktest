import type { Question } from '../questions';

export const TG_POLYCET_2026_MATHEMATICS_1: Question[] = [
  {
    "id": "tg-polycet-2026-ma-001",
    "section": "Mathematics",
    "topic": "Real Numbers",
    "difficulty": "medium",
    "question": "The prime factorisation of N is 2^4 \u00d7 3^2 \u00d7 5. What is the least positive integer by which N must be multiplied so that the product is a perfect cube?",
    "options": [
      "300",
      "450",
      "600",
      "150"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a cube, every prime exponent must be a multiple of 3. The missing powers are 2^2, 3^1 and 5^2, so the least multiplier is 4\u00d73\u00d725=300.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-002",
    "section": "Mathematics",
    "topic": "Real Numbers",
    "difficulty": "medium",
    "question": "A positive integer leaves remainder 5 when divided by 18 and remainder 11 when divided by 24. Which of the following can be the integer?",
    "options": [
      "83",
      "59",
      "95",
      "101"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "59=18\u00d73+5 and also 59=24\u00d72+11. Therefore it satisfies both remainder conditions.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-003",
    "section": "Mathematics",
    "topic": "Real Numbers",
    "difficulty": "medium",
    "question": "A rectangular floor measures 527 cm by 341 cm. It is to be covered completely with the largest possible equal square tiles, without cutting any tile. How many tiles are required?",
    "options": [
      "153",
      "170",
      "187",
      "176"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The tile side must be the HCF of 527 and 341. By Euclid's algorithm: 527\u2212341=186, 341\u2212186=155, and 186\u2212155=31, so the HCF is 31 cm. The numbers of tiles along the sides are 527/31=17 and 341/31=11. Hence total tiles=17\u00d711=187.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-004",
    "section": "Mathematics",
    "topic": "Real Numbers",
    "difficulty": "medium",
    "question": "Let r be any rational number. Which expression is guaranteed to be irrational?",
    "options": [
      "r + \u221a9",
      "r/2",
      "r\u00b2 + 1",
      "r + \u221a7"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For rational r, r+\u221a9=r+3 is rational, r/2 is rational, and r\u00b2+1 is rational. Since \u221a7 is irrational, adding any rational r to \u221a7 remains irrational. Therefore only r+\u221a7 is guaranteed to be irrational.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-005",
    "section": "Mathematics",
    "topic": "Real Numbers",
    "difficulty": "medium",
    "question": "Three warning lamps flash every 18 s, 24 s and 30 s. If they flash together now, after how many seconds will they next flash together?",
    "options": [
      "360",
      "240",
      "180",
      "720"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The next simultaneous flash occurs after LCM(18,24,30)=2^3\u00d73^2\u00d75=360 seconds.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-006",
    "section": "Mathematics",
    "topic": "Sets",
    "difficulty": "easy",
    "question": "In a class, 28 students like Mathematics, 19 like Science, and 11 like both. How many like at least one of the two subjects?",
    "options": [
      "47",
      "36",
      "37",
      "38"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "n(M\u222aS)=n(M)+n(S)-n(M\u2229S)=28+19-11=36.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-007",
    "section": "Mathematics",
    "topic": "Sets",
    "difficulty": "medium",
    "question": "A survey of 50 students shows that 32 play cricket, 27 play badminton and 6 play neither. How many play both games?",
    "options": [
      "9",
      "12",
      "15",
      "18"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "44 students play at least one game. Thus 32+27\u2212both=44, so both=15.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-008",
    "section": "Mathematics",
    "topic": "Polynomials",
    "difficulty": "easy",
    "question": "If x=2 is a zero of p(x)=x^2+kx\u221210, what is k?",
    "options": [
      "4",
      "\u22124",
      "\u22123",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "p(2)=0 gives 4+2k\u221210=0, so 2k=6 and k=3.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-009",
    "section": "Mathematics",
    "topic": "Polynomials",
    "difficulty": "medium",
    "question": "When p(x)=2x^3\u22123x^2+4x\u22125 is divided by x\u22122, what is the remainder?",
    "options": [
      "7",
      "5",
      "9",
      "3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By the Remainder Theorem, the remainder is p(2)=16\u221212+8\u22125=7.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-010",
    "section": "Mathematics",
    "topic": "Polynomials",
    "difficulty": "medium",
    "question": "The zeros of x^2\u22127x+10 are \u03b1 and \u03b2. What is \u03b1^2+\u03b2^2?",
    "options": [
      "19",
      "29",
      "25",
      "39"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "\u03b1+\u03b2=7 and \u03b1\u03b2=10. Therefore \u03b1^2+\u03b2^2=(\u03b1+\u03b2)^2\u22122\u03b1\u03b2=49\u221220=29.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-011",
    "section": "Mathematics",
    "topic": "Polynomials",
    "difficulty": "medium",
    "question": "For what value of a is x+3 a factor of x^2+ax\u221218?",
    "options": [
      "12",
      "9",
      "\u22123",
      "3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "If x+3 is a factor, p(\u22123)=0. Thus 9\u22123a\u221218=0, so \u22123a=9 and a=\u22123.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-012",
    "section": "Mathematics",
    "topic": "Linear Equations",
    "difficulty": "easy",
    "question": "The sum of two numbers is 31 and their difference is 7. What is the larger number?",
    "options": [
      "17",
      "12",
      "24",
      "19"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Let the numbers be x>y. From x+y=31 and x\u2212y=7, adding gives 2x=38, so x=19.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-013",
    "section": "Mathematics",
    "topic": "Linear Equations",
    "difficulty": "medium",
    "question": "A school buys 8 notebooks and 5 pens for \u20b9181. Another purchase of 5 notebooks and 3 pens costs \u20b9111. What is the price of one notebook?",
    "options": [
      "\u20b912",
      "\u20b914",
      "\u20b918",
      "\u20b916"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Let notebook price be n and pen price be p. 8n+5p=181 and 5n+3p=111. Eliminating p: 24n+15p=543 and 25n+15p=555, so n=12.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-014",
    "section": "Mathematics",
    "topic": "Linear Equations",
    "difficulty": "medium",
    "question": "For what value of k do the equations 3x+2y=11 and 6x+ky=22 have infinitely many solutions?",
    "options": [
      "3",
      "4",
      "2",
      "6"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For infinitely many solutions, corresponding coefficients and constants are proportional. Since 6/3=22/11=2, we need k/2=2, giving k=4.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-015",
    "section": "Mathematics",
    "topic": "Linear Equations",
    "difficulty": "medium",
    "question": "A two-digit number has digit sum 11. Reversing its digits decreases the number by 27. What is the number?",
    "options": [
      "47",
      "56",
      "74",
      "65"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Let tens digit be x and units digit y. x+y=11 and (10x+y)\u2212(10y+x)=27, so 9(x\u2212y)=27 and x\u2212y=3. Hence x=7,y=4, giving 74.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-016",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "easy",
    "question": "Which equation has roots 4 and \u22123?",
    "options": [
      "x^2\u22127x+12=0",
      "x^2+x\u221212=0",
      "x^2+7x+12=0",
      "x^2\u2212x\u221212=0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For roots 4 and \u22123, sum=1 and product=\u221212. The monic equation is x^2\u2212(1)x\u221212=0.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-017",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "medium",
    "question": "If one root of 2x^2\u22129x+c=0 is 3, what is the other root?",
    "options": [
      "3/2",
      "1/2",
      "5/2",
      "2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The sum of roots is 9/2. If one root is 3, the other is 9/2\u22123=3/2.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-018",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "medium",
    "question": "The area of a rectangular board is 96 cm\u00b2. Its length is 4 cm more than its width. What is its width?",
    "options": [
      "12 cm",
      "8 cm",
      "6 cm",
      "10 cm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "If width=w, then w(w+4)=96, so w\u00b2+4w\u221296=0=(w\u22128)(w+12). The positive width is 8 cm.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-019",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "medium",
    "question": "For which value of m does x^2\u22126x+m=0 have equal roots?",
    "options": [
      "12",
      "8",
      "9",
      "6"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Equal roots require discriminant zero: (\u22126)^2\u22124m=0, so 36\u22124m=0 and m=9.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-020",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "hard",
    "question": "The roots of x^2\u2212px+18=0 are positive integers differing by 3. What is p?",
    "options": [
      "12",
      "15",
      "11",
      "9"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Positive integer factors of 18 differing by 3 are 3 and 6. Their sum is p, so p=9.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-021",
    "section": "Mathematics",
    "topic": "Arithmetic Progressions",
    "difficulty": "easy",
    "question": "In the AP 7, 11, 15, \u2026, what is the 18th term?",
    "options": [
      "75",
      "79",
      "83",
      "71"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "a18=a+(18\u22121)d=7+17\u00d74=75.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-022",
    "section": "Mathematics",
    "topic": "Arithmetic Progressions",
    "difficulty": "medium",
    "question": "In an arithmetic progression, the 4th term is 17 and the 10th term is 41. What is the 25th term?",
    "options": [
      "105",
      "101",
      "97",
      "93"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "From a+3d=17 and a+9d=41, subtraction gives 6d=24, so d=4 and a=5. Thus a25=5+24\u00d74=101.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-023",
    "section": "Mathematics",
    "topic": "Arithmetic Progressions",
    "difficulty": "medium",
    "question": "How many terms of the AP 9, 14, 19, \u2026 are needed to reach the term 124?",
    "options": [
      "25",
      "23",
      "24",
      "22"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "an=9+(n\u22121)5=124. Thus 5(n\u22121)=115, n\u22121=23, so n=24.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-024",
    "section": "Mathematics",
    "topic": "Arithmetic Progressions",
    "difficulty": "medium",
    "question": "What is the sum of the first 20 terms of the AP 3, 7, 11, \u2026?",
    "options": [
      "840",
      "780",
      "800",
      "820"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "a=3,d=4. S20=20/2[2\u00d73+19\u00d74]=10(6+76)=820.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-025",
    "section": "Mathematics",
    "topic": "Arithmetic Progressions",
    "difficulty": "medium",
    "question": "The 2nd, 5th and 8th terms of an arithmetic progression have a total of 45. What is the 5th term?",
    "options": [
      "15",
      "12",
      "18",
      "21"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Let the first term be a and common difference be d. Then T2=a+d, T5=a+4d and T8=a+7d. Since T2 and T8 are equally spaced from T5, T2+T8=2T5. Hence T2+T5+T8=3T5=45, so T5=15.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-026",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "easy",
    "question": "What is the distance between A(\u22122,3) and B(4,3)?",
    "options": [
      "5",
      "6",
      "7",
      "4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The points have the same y-coordinate, so the distance is |4\u2212(\u22122)|=6.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-027",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "The midpoint of P(3,\u22125) and Q(x,7) is (6,1). What is x?",
    "options": [
      "8",
      "7",
      "9",
      "10"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The midpoint x-coordinate is (3+x)/2=6, so 3+x=12 and x=9.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-028",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "Point R divides the segment joining A(2,1) and B(8,10) internally in the ratio 1:2, that is AR:RB=1:2. What is R?",
    "options": [
      "(5,4)",
      "(6,7)",
      "(4,7)",
      "(4,4)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using the section formula for AR:RB=1:2, R=((1\u00d78+2\u00d72)/3,(1\u00d710+2\u00d71)/3)=(4,4).",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-029",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "What is the area of the triangle with vertices (0,0), (6,0) and (2,5)?",
    "options": [
      "15 square units",
      "18 square units",
      "12 square units",
      "10 square units"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Take the base on the x-axis from (0,0) to (6,0), length 6. The perpendicular height is 5, so area=1/2\u00d76\u00d75=15.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-030",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "The point (k,4) is 5 units from (1,0). Which value of k is possible?",
    "options": [
      "6",
      "4",
      "\u22124",
      "0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Distance gives (k\u22121)^2+4^2=25, so (k\u22121)^2=9 and k=4 or \u22122. Among the listed options, only 4 is present.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-031",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "hard",
    "question": "A point P lies on the x-axis and is equidistant from A(\u22122,2) and B(4,4). What is the x-coordinate of P?",
    "options": [
      "1",
      "4",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Let P=(x,0). Equating squared distances gives (x+2)^2+4=(x\u22124)^2+16. Expanding: x\u00b2+4x+8=x\u00b2\u22128x+32, so 12x=24 and x=2.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-032",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "easy",
    "question": "If sin \u03b8=3/5 for an acute angle \u03b8, what is cos \u03b8?",
    "options": [
      "5/4",
      "2/5",
      "3/4",
      "4/5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For an acute angle, cos \u03b8 is positive. cos \u03b8=\u221a(1\u2212sin\u00b2\u03b8)=\u221a(1\u22129/25)=4/5.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-033",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "In a right triangle, the side opposite an acute angle \u03b8 is 5 units and the adjacent side is 12 units. What is sec \u03b8?",
    "options": [
      "13/12",
      "12/13",
      "13/5",
      "5/13"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The hypotenuse is \u221a(5\u00b2+12\u00b2)=13. Thus cos\u03b8=12/13 and sec\u03b8=13/12.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-034",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "What is the value of (sin 30\u00b0)(cos 60\u00b0)+(cos 30\u00b0)(sin 60\u00b0)?",
    "options": [
      "\u221a3/2",
      "1",
      "1/2",
      "3/2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The expression is sin(30\u00b0+60\u00b0)=sin 90\u00b0=1.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-035",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "A right triangle has perpendicular sides 7 cm and 24 cm. If \u03b8 is the acute angle opposite the 24 cm side, what is sin \u03b8?",
    "options": [
      "7/24",
      "24/7",
      "24/25",
      "7/25"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The hypotenuse is \u221a(7\u00b2+24\u00b2)=25 cm. Therefore sin\u03b8=opposite/hypotenuse=24/25.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-036",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "For an acute angle \u03b8, tan \u03b8=12/35. What is sin \u03b8+cos \u03b8?",
    "options": [
      "35/37",
      "12/37",
      "37/47",
      "47/37"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Take the opposite and adjacent sides as 12 and 35. The hypotenuse is \u221a(12\u00b2+35\u00b2)=37. Thus sin\u03b8=12/37 and cos\u03b8=35/37, so sin\u03b8+cos\u03b8=47/37.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-037",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "From a point on level ground, the angle of elevation of the top of a pole is 45\u00b0. If the point is moved 8 m farther from the pole along the same line, the angle becomes 30\u00b0. What is the pole's height, to the nearest metre?",
    "options": [
      "11 m",
      "14 m",
      "10 m",
      "12 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Let initial distance=x and height=h. From 45\u00b0, h=x. From 30\u00b0, h/(x+8)=1/\u221a3. Thus x\u221a3=x+8, so x=8/(\u221a3\u22121)=4(\u221a3+1)\u224810.93 m, about 11 m.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-038",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "A and B are acute angles with tan A=2/3 and tan B=1/4. What is tan(A+B)?",
    "options": [
      "5/6",
      "11/10",
      "7/12",
      "13/14"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using tan(A+B)=(tanA+tanB)/(1\u2212tanA tanB), we get (2/3+1/4)/(1\u2212(2/3)(1/4))=(11/12)/(5/6)=11/10.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-039",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "For an acute angle \u03b8 and a positive integer n, sin \u03b8=(n\u22122)/(n+7) and cos \u03b8=15/(n+7). What is n tan \u03b8?",
    "options": [
      "8/3",
      "15/8",
      "16/3",
      "10/3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using sin\u00b2\u03b8+cos\u00b2\u03b8=1, [(n\u22122)\u00b2+15\u00b2]/(n+7)\u00b2=1. So (n\u22122)\u00b2+225=(n+7)\u00b2, giving n\u00b2\u22124n+229=n\u00b2+14n+49 and hence n=10. Then tan\u03b8=sin\u03b8/cos\u03b8=(8/17)/(15/17)=8/15. Therefore n tan\u03b8=10\u00d78/15=16/3.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-040",
    "section": "Mathematics",
    "topic": "Triangles",
    "difficulty": "easy",
    "question": "Two similar triangles have corresponding side lengths in the ratio 3:5. What is the ratio of their areas?",
    "options": [
      "3:5",
      "6:10",
      "15:25",
      "9:25"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Areas of similar triangles are proportional to squares of corresponding sides, so the area ratio is 3\u00b2:5\u00b2=9:25.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-041",
    "section": "Mathematics",
    "topic": "Triangles",
    "difficulty": "medium",
    "question": "In \u0394ABC, DE is parallel to BC with D on AB and E on AC. If AD:DB=2:3 and AE=4 cm, what is AC?",
    "options": [
      "10 cm",
      "12 cm",
      "6 cm",
      "8 cm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Since DE\u2225BC, AD/AB=AE/AC. Here AD:AB=2:(2+3)=2:5. Thus 4/AC=2/5, giving AC=10 cm.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-042",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "easy",
    "question": "A tangent is drawn at point T to a circle with centre O. If OT=7 cm, what is the angle between OT and the tangent at T?",
    "options": [
      "60\u00b0",
      "90\u00b0",
      "45\u00b0",
      "30\u00b0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A radius drawn to the point of contact is perpendicular to the tangent, so the angle is 90\u00b0.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-043",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "medium",
    "question": "From an external point P, two tangents PA and PB are drawn to a circle. If PA=9 cm and the perimeter of quadrilateral OAPB is 30 cm, where O is the centre, what is the radius?",
    "options": [
      "4 cm",
      "5 cm",
      "6 cm",
      "7 cm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Tangents from P are equal, so PA=PB=9. Also OA=OB=r. Perimeter=9+9+r+r=18+2r=30, so r=6 cm.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-044",
    "section": "Mathematics",
    "topic": "Mensuration",
    "difficulty": "medium",
    "question": "A rectangular water tank has a horizontal base 80 cm long and 50 cm wide. If 20 litres of water are poured into the empty tank, by how much does the water level rise?",
    "options": [
      "4 cm",
      "8 cm",
      "10 cm",
      "5 cm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "20 litres=20,000 cm\u00b3. The base area is 80\u00d750=4,000 cm\u00b2. Water height=volume/base area=20,000/4,000=5 cm.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-045",
    "section": "Mathematics",
    "topic": "Mensuration",
    "difficulty": "medium",
    "question": "A cylindrical water tank has radius 3 m and height 4 m. What is its capacity in cubic metres, in terms of \u03c0?",
    "options": [
      "36\u03c0",
      "24\u03c0",
      "48\u03c0",
      "12\u03c0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Cylinder volume=\u03c0r\u00b2h=\u03c0\u00d79\u00d74=36\u03c0 m\u00b3.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-046",
    "section": "Mathematics",
    "topic": "Mensuration",
    "difficulty": "medium",
    "question": "A sphere has radius 6 cm. A closed cylinder has radius 3 cm and height 9 cm. What is the ratio of the sphere's surface area to the cylinder's total surface area?",
    "options": [
      "1:2",
      "2:1",
      "3:2",
      "4:3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Sphere surface area=4\u03c0(6\u00b2)=144\u03c0. Cylinder total surface area=2\u03c0r(r+h)=2\u03c0(3)(3+9)=72\u03c0. The ratio is 144\u03c0:72\u03c0=2:1.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-047",
    "section": "Mathematics",
    "topic": "Mensuration",
    "difficulty": "medium",
    "question": "A cone has radius 6 cm and height 8 cm. What is its curved surface area in terms of \u03c0?",
    "options": [
      "48\u03c0 cm\u00b2",
      "72\u03c0 cm\u00b2",
      "60\u03c0 cm\u00b2",
      "96\u03c0 cm\u00b2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Slant height l=\u221a(6\u00b2+8\u00b2)=10 cm. Curved surface area=\u03c0rl=\u03c0\u00d76\u00d710=60\u03c0 cm\u00b2.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-048",
    "section": "Mathematics",
    "topic": "Mensuration",
    "difficulty": "medium",
    "question": "A hollow cylindrical pipe has outer radius 6 cm, inner radius 4 cm and length 15 cm. What volume of material is present in the pipe?",
    "options": [
      "240\u03c0 cm\u00b3",
      "180\u03c0 cm\u00b3",
      "360\u03c0 cm\u00b3",
      "300\u03c0 cm\u00b3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Material volume=\u03c0(R\u00b2\u2212r\u00b2)h=\u03c0(6\u00b2\u22124\u00b2)(15)=\u03c0(20)(15)=300\u03c0 cm\u00b3.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-049",
    "section": "Mathematics",
    "topic": "Geometry",
    "difficulty": "medium",
    "question": "The interior angles of a quadrilateral are in the ratio 2:3:4:6. What is the largest angle?",
    "options": [
      "144\u00b0",
      "96\u00b0",
      "120\u00b0",
      "160\u00b0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The ratio parts total 15 and quadrilateral angles total 360\u00b0, so one part is 24\u00b0. The largest angle is 6\u00d724\u00b0=144\u00b0.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-050",
    "section": "Mathematics",
    "topic": "Geometry",
    "difficulty": "medium",
    "question": "A regular polygon has each exterior angle equal to 24\u00b0. How many sides does it have?",
    "options": [
      "24",
      "15",
      "18",
      "12"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The sum of exterior angles is 360\u00b0, so number of sides=360/24=15.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-051",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "easy",
    "question": "The mean of 6, 8, 11, 13 and x is 10. What is x?",
    "options": [
      "14",
      "10",
      "12",
      "16"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A mean of 10 for five values gives total 50. The known four sum to 38, so x=12.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-052",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "question": "The median of the ordered data 4, 7, 9, x, 15, 18 is 10. What is x?",
    "options": [
      "12",
      "10",
      "13",
      "11"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For six ordered values, median=(3rd+4th)/2=(9+x)/2=10, hence x=11.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-053",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "question": "The values 2, 4, 6, 8 have frequencies 1, 3, 4, 2 respectively. What is the mean?",
    "options": [
      "5.4",
      "5.0",
      "5.8",
      "6.0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Weighted sum=2\u00d71+4\u00d73+6\u00d74+8\u00d72=54 and total frequency=10, so mean=54/10=5.4.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-054",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "easy",
    "question": "For the data 12, 15, 15, 17, 18, 18, 18, 20, what is the mode?",
    "options": [
      "17",
      "18",
      "15",
      "20"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "18 occurs three times, more frequently than any other value, so it is the mode.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-055",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "question": "A set of five observations has mean 24. If four observations are 18, 21, 25 and 31, what is the fifth observation?",
    "options": [
      "20",
      "23",
      "25",
      "27"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The total of five observations is 5\u00d724=120. The four known values total 95, so the fifth is 25.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-056",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "easy",
    "question": "A bag contains 5 red, 3 blue and 2 green balls. One ball is drawn at random. What is the probability that it is not blue?",
    "options": [
      "1/2",
      "4/5",
      "3/10",
      "7/10"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "There are 10 balls total and 7 are not blue, so the probability is 7/10.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-057",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "Two different cards are chosen at random from cards numbered 1, 2, 3, 4 and 5. What is the probability that their sum is even?",
    "options": [
      "2/5",
      "1/5",
      "1/2",
      "3/5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "An even sum requires two odd or two even numbers. There are C(3,2)=3 odd-odd pairs and C(2,2)=1 even-even pair, out of C(5,2)=10 pairs. Probability=4/10=2/5.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-058",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "A number is chosen at random from 1 to 20. What is the probability that it is a multiple of 3 or 5?",
    "options": [
      "2/5",
      "9/20",
      "1/2",
      "11/20"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Multiples of 3: 6; multiples of 5: 4; common multiple 15: 1. Favourable=6+4\u22121=9, so probability=9/20.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-059",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "One card is chosen at random from cards numbered 1 to 12. What is the probability that the chosen number has exactly three positive factors?",
    "options": [
      "1/4",
      "1/3",
      "1/6",
      "1/12"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A number has exactly three positive factors only when it is the square of a prime. From 1 to 12 these are 4 and 9, so probability=2/12=1/6.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  },
  {
    "id": "tg-polycet-2026-ma-060",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "One card numbered 1 to 12 is chosen at random. What is the probability that the number is a factor of 12 but not a factor of 8?",
    "options": [
      "1/2",
      "5/12",
      "1/3",
      "1/4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Factors of 12 are 1,2,3,4,6,12. Those also factors of 8 are 1,2,4. Favourable numbers are 3,6,12: 3 of 12, so probability=1/4.",
    "source": {
      "kind": "original",
      "reference": "TG POLYCET 2026 official SBTET Telangana instruction booklet \u2014 Engineering MPC scope",
      "url": "https://sbtet.telangana.gov.in/downloads/Circular/Instruction%20booklet.pdf",
      "checkedOn": "2026-08-30"
    }
  }
];
