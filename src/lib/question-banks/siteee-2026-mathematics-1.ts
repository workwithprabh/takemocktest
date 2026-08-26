import type { Question } from '../questions';

export const SITEEE_2026_MATHEMATICS_1: Question[] = [
  {
    "id": "siteee-2026-ma-001",
    "section": "Mathematics",
    "topic": "Sets",
    "difficulty": "easy",
    "question": "If n(A)=25, n(B)=20 and n(A\u222aB)=35, then n(A\u2229B) is",
    "options": [
      "5",
      "15",
      "20",
      "10"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "n(A\u222aB)=n(A)+n(B)-n(A\u2229B). Hence 35=25+20-n(A\u2229B), giving n(A\u2229B)=10.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-002",
    "section": "Mathematics",
    "topic": "Relations and functions",
    "difficulty": "medium",
    "question": "The domain of f(x)=\u221a((x-1)/(x+2)) is",
    "options": [
      "(-\u221e,-2) \u222a [1,\u221e)",
      "[-2,1]",
      "(-2,1]",
      "(-\u221e,-2] \u222a [1,\u221e)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "We need (x-1)/(x+2) \u2265 0 and x\u2260-2. Sign analysis gives x<-2 or x\u22651, so the domain is (-\u221e,-2) \u222a [1,\u221e).",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-003",
    "section": "Mathematics",
    "topic": "Trigonometric functions",
    "difficulty": "easy",
    "question": "If tan\u03b8 + cot\u03b8 = 4, then sin2\u03b8 equals",
    "options": [
      "1/2",
      "1/4",
      "\u221a3/2",
      "2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "tan\u03b8+cot\u03b8 = (sin\u00b2\u03b8+cos\u00b2\u03b8)/(sin\u03b8cos\u03b8)=1/(sin\u03b8cos\u03b8)=2/sin2\u03b8. Hence 4=2/sin2\u03b8, so sin2\u03b8=1/2.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-004",
    "section": "Mathematics",
    "topic": "Complex numbers",
    "difficulty": "medium",
    "question": "A complex number z satisfies |z| = 1 and z + 1/z = 1. Then |z - 1| equals",
    "options": [
      "\u221a3",
      "1/\u221a2",
      "1",
      "\u221a2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Since |z|=1, 1/z = conjugate(z). Thus z+conjugate(z)=1, so Re(z)=1/2. Therefore |z-1|\u00b2=|z|\u00b2+1-2Re(z)=1+1-1=1, giving |z-1|=1.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-005",
    "section": "Mathematics",
    "topic": "Quadratic equations",
    "difficulty": "medium",
    "question": "If \u03b1 and \u03b2 are the roots of x\u00b2-5x+3=0, then 1/\u03b1\u00b2 + 1/\u03b2\u00b2 equals",
    "options": [
      "19/3",
      "19/9",
      "13/9",
      "25/9"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "\u03b1+\u03b2=5 and \u03b1\u03b2=3. Thus \u03b1\u00b2+\u03b2\u00b2=25-6=19, and 1/\u03b1\u00b2+1/\u03b2\u00b2=(\u03b1\u00b2+\u03b2\u00b2)/(\u03b1\u03b2)\u00b2=19/9.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-006",
    "section": "Mathematics",
    "topic": "Linear inequalities",
    "difficulty": "easy",
    "question": "The solution of |2x-3|<5 is",
    "options": [
      "x<-1 or x>4",
      "-4<x<1",
      "-1<x<4",
      "1<x<4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "-5<2x-3<5 gives -2<2x<8, hence -1<x<4.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-007",
    "section": "Mathematics",
    "topic": "Permutations and combinations",
    "difficulty": "hard",
    "question": "Four-letter strings are formed without repetition from A, B, C, D, E, F. How many such strings contain A but do not have A and B adjacent?",
    "options": [
      "120",
      "144",
      "156",
      "168"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Strings containing A: choose A's position in 4 ways and arrange 3 of the other 5 letters in 5P3=60 ways, giving 240. If A and B are adjacent, choose 2 more letters in C(4,2)=6 ways and arrange the AB/BA block with them in 2\u00d73!=12 ways, giving 72. Required count = 240-72=168.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-008",
    "section": "Mathematics",
    "topic": "Binomial theorem",
    "difficulty": "medium",
    "question": "The coefficient of x\u00b3 in (2-x)^5 is",
    "options": [
      "-40",
      "40",
      "-80",
      "80"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The x\u00b3 term is C(5,3)\u00b72\u00b2\u00b7(-x)\u00b3 = 10\u00b74\u00b7(-1)x\u00b3, so the coefficient is -40.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-009",
    "section": "Mathematics",
    "topic": "Sequences and series",
    "difficulty": "easy",
    "question": "An arithmetic progression has nth term an=3n+2. The sum of its first 20 terms is",
    "options": [
      "630",
      "670",
      "650",
      "690"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "S20=\u03a3(3n+2)=3(20\u00b721/2)+2\u00b720=630+40=670.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-010",
    "section": "Mathematics",
    "topic": "Geometric progression",
    "difficulty": "medium",
    "question": "In a positive geometric progression with common ratio greater than 1, the second term is 6 and the sum of the first four terms is 45. The fifth term is",
    "options": [
      "24",
      "36",
      "48",
      "54"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Let the first term be a and ratio r>1. Since ar=6, a=6/r. Also 6(1/r+1+r+r\u00b2)=45. This gives 2r\u00b3+2r\u00b2-13r+2=0=(r-2)(2r\u00b2+6r-1). The only root greater than 1 is r=2. Hence the fifth term is ar\u2074=(ar)r\u00b3=6\u00d78=48.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-011",
    "section": "Mathematics",
    "topic": "Straight lines",
    "difficulty": "easy",
    "question": "The distance between the parallel lines 3x-4y+5=0 and 3x-4y-10=0 is",
    "options": [
      "5",
      "1",
      "15/4",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Distance = |5-(-10)|/\u221a(3\u00b2+(-4)\u00b2)=15/5=3.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-012",
    "section": "Mathematics",
    "topic": "Circles",
    "difficulty": "medium",
    "question": "The line y=2 cuts the circle x\u00b2+y\u00b2-6x+4y-12=0 in a chord. The length of this chord is",
    "options": [
      "6",
      "8",
      "4",
      "10"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The circle has center (3,-2) and radius 5. The perpendicular distance from the center to y=2 is 4, so half-chord = \u221a(5\u00b2-4\u00b2)=3. Hence chord length=6.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-013",
    "section": "Mathematics",
    "topic": "Parabola",
    "difficulty": "medium",
    "question": "For the parabola y\u00b2=8x, the tangent with slope 1 is",
    "options": [
      "y=x+2",
      "y=x-4",
      "y=x+4",
      "y=2x+4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "For y\u00b2=4ax, a tangent of slope m is y=mx+a/m. Here 4a=8, so a=2. With m=1, the tangent is y=x+2.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-014",
    "section": "Mathematics",
    "topic": "Introduction to three-dimensional geometry",
    "difficulty": "easy",
    "question": "The point P(x,2,2) is equidistant from A(-2,1,4) and B(4,3,0). The value of x is",
    "options": [
      "-1",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "PA\u00b2=(x+2)\u00b2+1\u00b2+(-2)\u00b2=(x+2)\u00b2+5 and PB\u00b2=(x-4)\u00b2+(-1)\u00b2+2\u00b2=(x-4)\u00b2+5. Equating gives (x+2)\u00b2=(x-4)\u00b2, hence x=1.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-015",
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "medium",
    "question": "The value of lim(x\u21921) (x^4 + 2x\u00b2 - 3)/(x\u00b3 - 1) is",
    "options": [
      "2",
      "3",
      "4/3",
      "8/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "x^4+2x\u00b2-3=(x\u00b2-1)(x\u00b2+3)=(x-1)(x+1)(x\u00b2+3), while x\u00b3-1=(x-1)(x\u00b2+x+1). Cancelling x-1 and substituting x=1 gives (2\u00d74)/3=8/3.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-016",
    "section": "Mathematics",
    "topic": "Derivatives",
    "difficulty": "medium",
    "question": "For f(x)=x^x (x>0), f'(1/e) is",
    "options": [
      "1/e",
      "e",
      "1",
      "0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "f'(x)=x^x(ln x+1). At x=1/e, ln(1/e)+1=-1+1=0, so f'(1/e)=0.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-017",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "If [[2,1],[1,1]] [x,y]^T = [7,4]^T, then x - y equals",
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The matrix equation gives 2x+y=7 and x+y=4. Subtracting gives x=3, hence y=1 and x-y=2.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-018",
    "section": "Mathematics",
    "topic": "Determinants",
    "difficulty": "medium",
    "question": "The matrix [[k,2],[3,k]] is singular for two real values of k. The sum of the squares of these two values is",
    "options": [
      "6",
      "24",
      "12",
      "0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Singularity requires k\u00b2-6=0, so k=\u00b1\u221a6. The sum of their squares is 6+6=12.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-019",
    "section": "Mathematics",
    "topic": "Continuity and differentiability",
    "difficulty": "medium",
    "question": "The function f(x) = kx+1 for x<1 and f(x)=3x-k for x\u22651 is continuous at x=1 when k equals",
    "options": [
      "1",
      "2",
      "3/2",
      "1/2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Continuity requires k+1 = 3-k. Thus 2k=2 and k=1.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-020",
    "section": "Mathematics",
    "topic": "Applications of derivatives",
    "difficulty": "medium",
    "question": "The tangent to the curve y = x^3 + kx^2 at x = 1 passes through the point (0, -4). The value of k is",
    "options": [
      "2",
      "-2",
      "1",
      "4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "At x=1, y=1+k and dy/dx=3+2k. The tangent is y-(1+k)=(3+2k)(x-1). At x=0 it gives y=-2-k. Since the tangent passes through (0,-4), -2-k=-4, so k=2.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-021",
    "section": "Mathematics",
    "topic": "Integrals",
    "difficulty": "medium",
    "question": "The value of \u222b from 0 to \u03c0/4 of sec\u00b2x/(1+tan x)\u00b2 dx is",
    "options": [
      "ln 2",
      "1",
      "1/2",
      "1/4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Let u=1+tan x, so du=sec\u00b2x dx. The limits become u=1 and u=2. Thus the integral is \u222b\u2081\u00b2u^-2 du=[-1/u]\u2081\u00b2=1/2.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-022",
    "section": "Mathematics",
    "topic": "Applications of integrals",
    "difficulty": "medium",
    "question": "The area bounded by the curve y=(x-1)(3-x), the x-axis, and the lines x=1 and x=3 is",
    "options": [
      "2/3",
      "4/3",
      "2",
      "8/3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "On [1,3], y=(x-1)(3-x) is nonnegative. Let u=x-1, so u runs from 0 to 2 and y=u(2-u). Area = \u222b\u2080\u00b2(2u-u\u00b2)du = [u\u00b2-u\u00b3/3]\u2080\u00b2 = 4/3.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-023",
    "section": "Mathematics",
    "topic": "Differential equations",
    "difficulty": "hard",
    "question": "The solution of dy/dx + y/x = x (x>0) satisfies y(1)=4/3. The value of y(2) is",
    "options": [
      "5/3",
      "7/4",
      "2",
      "11/6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The integrating factor is x. Hence d(xy)/dx=x\u00b2, so xy=x\u00b3/3+C. From y(1)=4/3, C=1. Thus y(2)=(8/3+1)/2=11/6.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-024",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "medium",
    "question": "If vectors a and b have equal magnitudes, then (a+b)\u00b7(a-b) equals",
    "options": [
      "2|a|\u00b2",
      "0",
      "2a\u00b7b",
      "-2a\u00b7b"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "(a+b)\u00b7(a-b)=|a|\u00b2-|b|\u00b2. Since |a|=|b|, the value is 0.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-025",
    "section": "Mathematics",
    "topic": "Three-dimensional geometry",
    "difficulty": "medium",
    "question": "A line has direction ratios (1,2,2), and a plane has normal vector (2,-1,2). If \u03b8 is the acute angle between the line and the plane, then sin\u03b8 is",
    "options": [
      "2/9",
      "4/9",
      "5/9",
      "\u221a5/3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "For angle \u03b8 between a line direction d and a plane, sin\u03b8=|d\u00b7n|/(|d||n|). Here d\u00b7n=4 and both magnitudes are 3, giving sin\u03b8=4/9.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-026",
    "section": "Mathematics",
    "topic": "Linear programming",
    "difficulty": "hard",
    "question": "Minimize Z=3x+4y subject to x+2y\u22656, 2x+y\u22656, x\u22650 and y\u22650. The minimum value of Z is",
    "options": [
      "12",
      "16",
      "18",
      "14"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The relevant boundary vertices are (0,6), (2,2) and (6,0). Their Z values are 24, 14 and 18 respectively. Since the feasible region is the unbounded region satisfying both \u2265 constraints, the minimum is 14 at (2,2).",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-027",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "An integer is chosen uniformly at random from 1 to 30. Given that it is divisible by 2 or by 3, the probability that it is divisible by 6 is",
    "options": [
      "1/5",
      "1/3",
      "1/4",
      "1/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "There are 15 multiples of 2, 10 multiples of 3 and 5 multiples of 6. Thus 15+10-5=20 integers satisfy the condition, of which 5 are divisible by 6. The conditional probability is 5/20=1/4.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-028",
    "section": "Mathematics",
    "topic": "Bayes theorem",
    "difficulty": "hard",
    "question": "A fair die selects one of three bags: outcomes 1,2,3 select bag A; 4,5 select bag B; and 6 selects bag C. Bag A has 2 red and 1 blue ball, bag B has 1 red and 2 blue balls, and bag C has 3 red and 1 blue ball. If the drawn ball is red, the probability that bag C was selected is",
    "options": [
      "8/41",
      "9/40",
      "3/16",
      "9/41"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "P(A)=1/2, P(B)=1/3, P(C)=1/6. Also P(R|A)=2/3, P(R|B)=1/3, P(R|C)=3/4. Hence P(R)=1/3+1/9+1/8=41/72, while P(C\u2229R)=1/8=9/72. Therefore P(C|R)=9/41.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-029",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "question": "If the variance of observations x is 9 and y=2x-3, then the variance of y is",
    "options": [
      "18",
      "36",
      "6",
      "9"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Adding a constant does not change variance, while multiplication by 2 multiplies variance by 2\u00b2. Therefore Var(y)=4\u00d79=36.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "siteee-2026-ma-030",
    "section": "Mathematics",
    "topic": "Applications of derivatives",
    "difficulty": "hard",
    "question": "A differentiable function satisfies f'(x)=3x\u00b2-6x and f(0)=1. The minimum value of f(x) on [0,3] is",
    "options": [
      "-2",
      "1",
      "-3",
      "0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Integrating gives f(x)=x\u00b3-3x\u00b2+1. Critical points in [0,3] are x=0 and x=2. Values: f(0)=1, f(2)=-3, f(3)=1. Hence the minimum is -3.",
    "source": {
      "kind": "original",
      "reference": "SITEEE 2026 official CBSE Class XI-XII PCM syllabus basis",
      "url": "https://www.sitpune.edu.in/b-tech-first-year-admission-procedure",
      "checkedOn": "2026-08-24"
    }
  }
];
