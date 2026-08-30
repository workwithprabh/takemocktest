import type { Question } from '../questions';

export const IEMJEE_2026_MATHEMATICS_1: Question[] = [
  {
    "id": "iemjee-2026-ma-001",
    "section": "Mathematics",
    "topic": "Sets, Relations and Functions",
    "difficulty": "medium",
    "question": "How many onto functions are there from a three-element set to a two-element set?",
    "options": [
      "6",
      "2",
      "4",
      "8"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are 2^3=8 total functions. Exactly two are not onto: the two constant functions. Hence the number of onto functions is 8-2=6.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-002",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "easy",
    "question": "What is the value of (1+i)^8?",
    "options": [
      "-16",
      "16i",
      "16",
      "-16i"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "1+i = \u221a2 e^(i\u03c0/4). Raising to the eighth power gives (\u221a2)^8 e^(i2\u03c0)=16.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-003",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "easy",
    "question": "If \u03b1 and \u03b2 are the roots of x^2 - 5x + 3 = 0, what is \u03b1^2 + \u03b2^2?",
    "options": [
      "13",
      "19",
      "22",
      "25"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "\u03b1+\u03b2=5 and \u03b1\u03b2=3. Thus \u03b1^2+\u03b2^2=(\u03b1+\u03b2)^2-2\u03b1\u03b2=25-6=19.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-004",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "For what value of k is the matrix [[1,2,3],[0,1,4],[2,5,k]] singular?",
    "options": [
      "6",
      "8",
      "12",
      "10"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Its determinant is 1(k-20)-2(0-8)+3(0-2)=k-20+16-6=k-10. A singular matrix has determinant zero, so k=10.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-005",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "medium",
    "question": "Seven distinct files P, Q, R, S, T, U and V are arranged in a row. In how many arrangements are P and Q not adjacent and R placed somewhere to the left of S?",
    "options": [
      "1800",
      "1440",
      "2520",
      "3600"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are 7! = 5040 total arrangements. Arrangements with P and Q adjacent are 2\u00d76! = 1440, so 3600 have P and Q nonadjacent. Swapping R and S pairs these arrangements, with exactly one arrangement in each pair having R left of S. Hence the required count is 3600/2 = 1800.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-006",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "easy",
    "question": "In the expansion of (1+x)^n, the coefficient of x^5 is 7/5 times the coefficient of x^4. If n is an integer with n >= 5, what is n?",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The ratio of the coefficients is C(n,5)/C(n,4)=(n-4)/5. Hence (n-4)/5=7/5, giving n-4=7 and n=11.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-007",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "medium",
    "question": "For an arithmetic progression, the sum of the first 10 terms is five times the sum of the first 4 terms. If the sixth term is 26, what is the twentieth term?",
    "options": [
      "74",
      "78",
      "86",
      "82"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let first term be a and common difference d. S10=5(2a+9d), while 5S4=10(2a+3d). Equating gives 10a+45d=20a+30d, so a=3d/2. The sixth term is a+5d=13d/2=26, hence d=4 and a=6. Therefore a20=a+19d=6+76=82.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-008",
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "medium",
    "question": "Evaluate lim_(x->0) [sqrt(1+3x) - sqrt(1-x)]/x.",
    "options": [
      "1",
      "2",
      "3/2",
      "5/2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Rationalizing, the numerator difference divided by x becomes 4/[sqrt(1+3x)+sqrt(1-x)]. As x->0 this tends to 4/2=2.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-009",
    "section": "Mathematics",
    "topic": "Continuity and Differentiability",
    "difficulty": "easy",
    "question": "Let f(x)=(x^2-a^2)/(x-a) for x\u2260a, and f(a)=6. For which value of a is f continuous at x=a?",
    "options": [
      "3",
      "2",
      "4",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For x\u2260a, f(x)=x+a. Hence lim_(x->a)f(x)=2a. Continuity requires 2a=6, so a=3.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-010",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "medium",
    "question": "For f(x)=x^3-6x^2+9x+2, what is the difference between the local maximum value and the local minimum value?",
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
    "explanation": "f'(x)=3(x-1)(x-3), so extrema occur at x=1 and x=3. f(1)=6 and f(3)=2. Their difference is 4.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-011",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "easy",
    "question": "For x>0, what is the minimum value of x + 9/x?",
    "options": [
      "3",
      "6",
      "9",
      "12"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By AM-GM, x+9/x \u2265 2\u221a9 = 6, with equality at x=3.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-012",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "medium",
    "question": "Evaluate \u222b_0^1 (2x+1)/(x^2+x+1) dx.",
    "options": [
      "ln 2",
      "1",
      "2 ln 3",
      "ln 3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The numerator is the derivative of x^2+x+1. Hence the integral is [ln(x^2+x+1)]_0^1 = ln3 - ln1 = ln3.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-013",
    "section": "Mathematics",
    "topic": "Definite Integrals",
    "difficulty": "medium",
    "question": "Evaluate \u222b_0^(\u03c0/2) x cos x dx.",
    "options": [
      "1",
      "\u03c0/2",
      "\u03c0/2 - 1",
      "\u03c0/2 + 1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Integration by parts gives \u222bx cosx dx = x sinx + cosx. From 0 to \u03c0/2 this is (\u03c0/2)-1.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-014",
    "section": "Mathematics",
    "topic": "Area Under Curves",
    "difficulty": "easy",
    "question": "On the interval 1 <= x <= 3, what is the area between the curves y = x^2 - 4x + 3 and y = |x - 2|?",
    "options": [
      "7/3",
      "4/3",
      "2",
      "8/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let t=x-2, so t runs from -1 to 1. Then x^2-4x+3=t^2-1 and |x-2|=|t|. The latter curve is above the former throughout the interval. By symmetry, area = 2\u222b_0^1(1+t-t^2)dt = 2[1+1/2-1/3] = 7/3.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-015",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "hard",
    "question": "The function y(x) satisfies dy/dx + y = e^x and y(0)=0. What is y(ln 2)?",
    "options": [
      "1/2",
      "1",
      "3/2",
      "3/4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using integrating factor e^x, d(ye^x)/dx=e^(2x). Thus y=(1/2)(e^x-e^-x) after applying y(0)=0. At x=ln2, y=(1/2)(2-1/2)=3/4.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-016",
    "section": "Mathematics",
    "topic": "Straight Lines",
    "difficulty": "medium",
    "question": "Find the equation of the line through the intersection of x+y=3 and x-y=1 that is perpendicular to 2x-y+4=0.",
    "options": [
      "2x+y-5=0",
      "x+2y-4=0",
      "x-2y=0",
      "2x-y-3=0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The first two lines intersect at (2,1). The line 2x-y+4=0 has slope 2, so a perpendicular line has slope -1/2. Through (2,1): y-1=-(1/2)(x-2), giving x+2y-4=0.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-017",
    "section": "Mathematics",
    "topic": "Circle",
    "difficulty": "medium",
    "question": "For the circle x^2+y^2-4x+6y-12=0, what is the length of a tangent drawn from the point (8,5)?",
    "options": [
      "5",
      "10",
      "5\u221a3",
      "10\u221a3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The circle has centre (2,-3) and radius 5. Distance from (8,5) to the centre is \u221a(6^2+8^2)=10. Tangent length = \u221a(10^2-5^2)=5\u221a3.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-018",
    "section": "Mathematics",
    "topic": "Parabola",
    "difficulty": "easy",
    "question": "A point on the parabola y^2=12x has y-coordinate 6. What is its distance from the focus?",
    "options": [
      "6",
      "3",
      "9",
      "12"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Here 4a=12, so focus is (3,0). With y=6, x=36/12=3, so the point is (3,6). Its distance from (3,0) is 6.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-019",
    "section": "Mathematics",
    "topic": "Ellipse",
    "difficulty": "easy",
    "question": "What is the eccentricity of the ellipse x^2/25 + y^2/9 = 1?",
    "options": [
      "3/5",
      "4/5",
      "5/4",
      "2/5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a=5 and b=3, c=\u221a(a^2-b^2)=\u221a16=4. Hence eccentricity e=c/a=4/5.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-020",
    "section": "Mathematics",
    "topic": "Hyperbola",
    "difficulty": "easy",
    "question": "What are the asymptotes of x^2/16 - y^2/9 = 1?",
    "options": [
      "y = \u00b14x/3",
      "y = \u00b13x",
      "y = \u00b1x/12",
      "y = \u00b13x/4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For x^2/a^2-y^2/b^2=1, asymptotes are y=\u00b1(b/a)x. Here a=4 and b=3, so y=\u00b13x/4.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-021",
    "section": "Mathematics",
    "topic": "Three Dimensional Geometry",
    "difficulty": "hard",
    "question": "The line segment joining A(1,2,3) and B(5,-2,7) meets the plane 2x - y + z = 7 at P. What is AP:PB?",
    "options": [
      "1:3",
      "1:1",
      "1:2",
      "3:1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A point on AB is A+t(B-A)=(1+4t, 2-4t, 3+4t). Substitution in the plane gives 2(1+4t)-(2-4t)+(3+4t)=3+16t=7, so t=1/4. Hence AP:PB=t:(1-t)=1:3.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-022",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "medium",
    "question": "Two sides of a triangle from the same vertex are represented by vectors a=(1,2,0) and b=(3,0,1). What is the area of the triangle?",
    "options": [
      "\u221a14/2",
      "\u221a41",
      "\u221a41/2",
      "41/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "a\u00d7b=(2,-1,-6), whose magnitude is \u221a(4+1+36)=\u221a41. Triangle area is half the parallelogram area, so it is \u221a41/2.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-023",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "Laboratory A processes 70% of samples and makes an error on 2% of them. Laboratory B processes 30% and makes an error on 5%. If a randomly selected report contains an error, what is the probability it came from Laboratory B?",
    "options": [
      "3/10",
      "15/29",
      "7/29",
      "5/14"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P(error from A)=0.70\u00d70.02=0.014 and from B=0.30\u00d70.05=0.015. Thus P(B|error)=0.015/(0.014+0.015)=15/29.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-024",
    "section": "Mathematics",
    "topic": "Probability Distribution",
    "difficulty": "medium",
    "question": "A random variable X takes values 0,1,2 with probabilities k,2k,3k respectively. What is E(X)?",
    "options": [
      "1",
      "3/2",
      "5/3",
      "4/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Probabilities sum to 6k=1, so k=1/6. Therefore E(X)=0(k)+1(2k)+2(3k)=8k=4/3.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-025",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "easy",
    "question": "If a random variable X has variance 5, what is the variance of 2X+3?",
    "options": [
      "10",
      "13",
      "20",
      "23"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Variance is unaffected by adding a constant and scales by the square of a multiplicative constant: Var(2X+3)=4Var(X)=20.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-026",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "How many solutions does sin x + cos x = 1 have in the interval 0 \u2264 x < 2\u03c0?",
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "sin x + cos x = \u221a2 sin(x+\u03c0/4)=1. Over one full period this gives two solutions, x=0 and x=\u03c0/2.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-027",
    "section": "Mathematics",
    "topic": "Inverse Trigonometric Functions",
    "difficulty": "medium",
    "question": "If sin^-1(x) = 2 tan^-1(1/4), with principal values, what is x?",
    "options": [
      "4/17",
      "15/17",
      "16/17",
      "8/17"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let \u03b8=tan^-1(1/4). Then sin^-1(x)=2\u03b8, so x=sin(2\u03b8)=2tan\u03b8/(1+tan\u00b2\u03b8)=2(1/4)/(1+1/16)=8/17. The angle 2\u03b8 lies within the principal range of sin^-1.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-028",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "medium",
    "question": "How many ways can 3 positions be chosen from 8 positions arranged in a line if no two chosen positions are adjacent?",
    "options": [
      "16",
      "20",
      "24",
      "30"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The standard gap transformation gives C(n-r+1,r) for choosing r nonadjacent positions from n. Thus C(8-3+1,3)=C(6,3)=20.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-029",
    "section": "Mathematics",
    "topic": "Three Dimensional Geometry",
    "difficulty": "easy",
    "question": "What is the perpendicular distance from the point (2,-1,3) to the plane 2x-y+2z-5=0?",
    "options": [
      "1",
      "3",
      "2",
      "6"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Distance = |2(2)-(-1)+2(3)-5|/\u221a(2^2+(-1)^2+2^2)=|6|/3=2.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ma-030",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "hard",
    "question": "A random variable X has mean 5 and variance 4. What is E[(2X-3)^2]?",
    "options": [
      "65",
      "49",
      "57",
      "73"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "E(X^2)=Var(X)+[E(X)]^2=4+25=29. Expanding, E[(2X-3)^2]=4E(X^2)-12E(X)+9=4(29)-60+9=65.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  }
];
