import type { Question } from '../questions';

export const AP_PGECET_2026_COMPUTER_SCIENCE_INFORMATION_TECHNOLOGY_1: Question[] = [
  {
    "id": "ap-pgecet-2026-cs-001",
    "section": "Computer Science & Information Technology",
    "topic": "Probability and Statistics \u2014 conditional probability",
    "difficulty": "medium",
    "question": "Events A and B satisfy P(A) = 0.60, P(B) = 0.50 and P(A \u2229 B) = 0.30. What is P(A | B)?",
    "options": [
      "0.30",
      "0.50",
      "0.60",
      "0.80"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "P(A | B) = P(A \u2229 B)/P(B) = 0.30/0.50 = 0.60.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-002",
    "section": "Computer Science & Information Technology",
    "topic": "Probability and Statistics \u2014 Poisson distribution",
    "difficulty": "medium",
    "question": "A Poisson random variable X has mean 2. Given that X \u2264 1, what is the conditional probability that X = 1?",
    "options": [
      "2/e",
      "1/2",
      "1/3",
      "2/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a Poisson(2) variable, P(X=0)=e^-2 and P(X=1)=2e^-2. Hence P(X=1 | X\u22641)=2e^-2/(e^-2+2e^-2)=2/3.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-003",
    "section": "Computer Science & Information Technology",
    "topic": "Probability and Statistics \u2014 continuous random variables",
    "difficulty": "hard",
    "question": "A continuous random variable X has density f(x) = kx for 0 \u2264 x \u2264 2 and f(x) = 0 otherwise. What is Var(X)?",
    "options": [
      "1/9",
      "4/9",
      "2/3",
      "2/9"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Normalization gives k\u222b_0^2 x dx = 1, so k=1/2. Then E[X]=\u222b_0^2 x(x/2)dx=4/3 and E[X\u00b2]=\u222b_0^2 x\u00b2(x/2)dx=2. Therefore Var(X)=2-(4/3)\u00b2=2/9.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-004",
    "section": "Computer Science & Information Technology",
    "topic": "Probability and Statistics \u2014 binomial distribution",
    "difficulty": "easy",
    "question": "If X is binomial with n = 5 and success probability p = 0.2, which pair gives E[X] and Var(X), respectively?",
    "options": [
      "(5, 0.8)",
      "(1, 0.8)",
      "(1, 1)",
      "(0.8, 1)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For X~Binomial(n,p), E[X]=np=1 and Var(X)=np(1-p)=5(0.2)(0.8)=0.8.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-005",
    "section": "Computer Science & Information Technology",
    "topic": "Set Theory & Algebra \u2014 partial orders",
    "difficulty": "easy",
    "question": "On the set {1, 2, 3, 6}, define a \u2264 b when a divides b. Which statement is correct for this poset?",
    "options": [
      "1 is greatest and 6 is least.",
      "1 is the least element and 6 is the greatest element.",
      "There is no least element.",
      "There is no greatest element."
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Under divisibility, 1 divides every element and every element divides 6. Thus 1 is least and 6 is greatest.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-006",
    "section": "Computer Science & Information Technology",
    "topic": "Set Theory & Algebra \u2014 groups",
    "difficulty": "medium",
    "question": "In the additive group Z_12, what is the order of the element 8?",
    "options": [
      "6",
      "4",
      "3",
      "2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The order is the least positive n such that 8n \u2261 0 (mod 12). Since 3\u00d78=24 is divisible by 12 and no smaller positive n works, the order is 3.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-007",
    "section": "Computer Science & Information Technology",
    "topic": "Set Theory & Algebra \u2014 Boolean algebra",
    "difficulty": "easy",
    "question": "Using Boolean algebra, simplify (x + y)(x + y').",
    "options": [
      "x + y",
      "x",
      "y",
      "xy"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using (A+B)(A+C)=A+BC, (x+y)(x+y')=x+yy'=x.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-008",
    "section": "Computer Science & Information Technology",
    "topic": "Linear Algebra \u2014 eigenvalues",
    "difficulty": "easy",
    "question": "What are the eigenvalues of the matrix [[2, 1], [1, 2]]?",
    "options": [
      "3 and 1",
      "1 and -1",
      "2 and 2",
      "3 and -1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The characteristic polynomial is (2-\u03bb)^2-1 = \u03bb\u00b2-4\u03bb+3 = (\u03bb-3)(\u03bb-1), giving eigenvalues 3 and 1.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-009",
    "section": "Computer Science & Information Technology",
    "topic": "Linear Algebra \u2014 systems of linear equations",
    "difficulty": "medium",
    "question": "For which values of k does the system x + 2y = 1, 2x + ky = 3 have a unique solution?",
    "options": [
      "k \u2260 2",
      "k \u2260 4",
      "all real k",
      "k = 4 only"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The coefficient determinant is k-4. A unique solution exists exactly when the determinant is nonzero, so k\u22604.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-010",
    "section": "Computer Science & Information Technology",
    "topic": "Linear Algebra \u2014 matrix rank",
    "difficulty": "medium",
    "question": "What is the rank of the matrix [[1, 2, 3], [2, 4, 6], [1, 1, 1]]?",
    "options": [
      "3",
      "2",
      "1",
      "0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The second row is twice the first, so rank is at most 2. The first and third rows are not scalar multiples, so two rows are independent and rank=2.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-011",
    "section": "Computer Science & Information Technology",
    "topic": "Linear Algebra \u2014 eigenvectors",
    "difficulty": "medium",
    "question": "For A = [[4, 1], [0, 2]], which vector is an eigenvector corresponding to eigenvalue 2?",
    "options": [
      "(1, -2)",
      "(2, 1)",
      "(1, 2)",
      "(0, 1)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For \u03bb=2, (A-2I)v=0 gives 2x+y=0. Taking x=1 gives y=-2, so (1,-2) is an eigenvector.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-012",
    "section": "Computer Science & Information Technology",
    "topic": "Numerical Methods \u2014 Newton-Raphson method",
    "difficulty": "medium",
    "question": "Newton-Raphson is applied to f(x)=x\u00b2-10 with initial guess x0=3. What is x1?",
    "options": [
      "10/3",
      "13/4",
      "19/6",
      "37/12"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "x1=x0-f(x0)/f'(x0)=3-(-1)/6=19/6.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-013",
    "section": "Computer Science & Information Technology",
    "topic": "Numerical Methods \u2014 bisection method",
    "difficulty": "easy",
    "question": "For f(x)=x\u00b3-x-2, a root is bracketed in [1,2]. After one bisection step, which interval still brackets the root?",
    "options": [
      "[1.25, 1.75]",
      "[1, 1.5]",
      "[1.5, 2]",
      "[1.5, 1.75]"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At x=1, f=-2; at x=2, f=4. The midpoint is 1.5 and f(1.5)=-0.125, so the sign change is between 1.5 and 2.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-014",
    "section": "Computer Science & Information Technology",
    "topic": "Numerical Methods \u2014 trapezoidal rule",
    "difficulty": "medium",
    "question": "Using the composite trapezoidal rule with h=1 on x=0,1,2, approximate \u222b_0^2 (x\u00b2+1) dx.",
    "options": [
      "5",
      "14/3",
      "6",
      "16/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The values are f(0)=1, f(1)=2, f(2)=5. The trapezoidal estimate is (1/2)[1+2(2)+5]=5.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-015",
    "section": "Computer Science & Information Technology",
    "topic": "Numerical Methods \u2014 secant method",
    "difficulty": "medium",
    "question": "For f(x)=x\u00b2-2, the secant method uses x0=1 and x1=2. What is the next approximation x2?",
    "options": [
      "sqrt(2)",
      "4/3",
      "7/5",
      "3/2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "x2=x1-f(x1)(x1-x0)/(f(x1)-f(x0))=2-2(1)/(2-(-1))=4/3.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-016",
    "section": "Computer Science & Information Technology",
    "topic": "Calculus \u2014 limits",
    "difficulty": "easy",
    "question": "Evaluate lim_{x\u21920} sin(3x)/x.",
    "options": [
      "3",
      "0",
      "1/3",
      "1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "sin(3x)/x = 3\u00b7sin(3x)/(3x), and sin u/u\u21921 as u\u21920, so the limit is 3.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-017",
    "section": "Computer Science & Information Technology",
    "topic": "Calculus \u2014 mean value theorem",
    "difficulty": "medium",
    "question": "For f(x)=x\u00b2 on [1,3], the Mean Value Theorem guarantees a c in (1,3) with f'(c) equal to the average slope. What is c?",
    "options": [
      "5/2",
      "2",
      "3/2",
      "sqrt(3)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The average slope is (9-1)/(3-1)=4. Since f'(c)=2c, 2c=4 gives c=2.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-018",
    "section": "Computer Science & Information Technology",
    "topic": "Calculus \u2014 improper integrals",
    "difficulty": "medium",
    "question": "Evaluate the improper integral \u222b_1^\u221e x^(-3/2) dx.",
    "options": [
      "1",
      "It diverges.",
      "3/2",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "An antiderivative is -2x^-1/2. Evaluating from 1 to b and letting b\u2192\u221e gives 0-(-2)=2.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-019",
    "section": "Computer Science & Information Technology",
    "topic": "Calculus \u2014 partial derivatives",
    "difficulty": "medium",
    "question": "Let z=x\u00b2y+e^(xy). What is \u2202z/\u2202x at (x,y)=(0,1)?",
    "options": [
      "2",
      "0",
      "e",
      "1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "\u2202z/\u2202x=2xy+y e^(xy). At (0,1), this is 0+1\u00b7e^0=1.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-020",
    "section": "Computer Science & Information Technology",
    "topic": "Calculus \u2014 maxima and minima",
    "difficulty": "medium",
    "question": "What is the minimum value of f(x,y)=x\u00b2+y\u00b2-4x+6y over all real x and y?",
    "options": [
      "-5",
      "-13",
      "-9",
      "13"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Complete squares: f=(x-2)\u00b2+(y+3)\u00b2-13. The squares are minimized at zero, so the minimum is -13.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-021",
    "section": "Computer Science & Information Technology",
    "topic": "Combinatorics \u2014 counting",
    "difficulty": "medium",
    "question": "How many length-6 strings over {0,1,2} contain exactly two occurrences of the symbol 2?",
    "options": [
      "120",
      "240",
      "180",
      "360"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Choose the two positions for 2 in C(6,2)=15 ways. Each remaining position can be 0 or 1, giving 2^4=16 choices. Total=15\u00d716=240.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-022",
    "section": "Computer Science & Information Technology",
    "topic": "Combinatorics \u2014 inclusion-exclusion",
    "difficulty": "easy",
    "question": "How many integers from 1 through 100 are divisible by 4 or by 6?",
    "options": [
      "49",
      "25",
      "41",
      "33"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "There are 25 multiples of 4 and 16 multiples of 6. Their overlap consists of 8 multiples of lcm(4,6)=12. By inclusion-exclusion, 25+16-8=33.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-023",
    "section": "Computer Science & Information Technology",
    "topic": "Combinatorics \u2014 recurrence relations",
    "difficulty": "medium",
    "question": "A sequence satisfies a_n = 2a_{n-1}+3 for n\u22651 with a_0=1. What is a_4?",
    "options": [
      "49",
      "61",
      "64",
      "45"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Successive terms are a1=5, a2=13, a3=29 and a4=61.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-024",
    "section": "Computer Science & Information Technology",
    "topic": "Combinatorics \u2014 generating functions",
    "difficulty": "hard",
    "question": "What is the coefficient of x^5 in the power-series expansion of (1-x)^(-3)?",
    "options": [
      "28",
      "15",
      "18",
      "21"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using (1-x)^(-r)=\u03a3_{n\u22650} C(n+r-1,r-1)x^n, the coefficient for n=5,r=3 is C(7,2)=21.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-025",
    "section": "Computer Science & Information Technology",
    "topic": "Combinatorics \u2014 asymptotic growth",
    "difficulty": "medium",
    "question": "Which asymptotic relation is true as n\u2192\u221e?",
    "options": [
      "n log n + 100n = \u0398(n^1.1)",
      "n log n = \u03a9(n^1.1)",
      "n^1.1 = o(n log n)",
      "n log n + 100n = o(n^1.1)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "(n log n +100n)/n^1.1 = (log n +100)/n^0.1 \u21920, so the left side is little-o of n^1.1.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-026",
    "section": "Computer Science & Information Technology",
    "topic": "Graph Theory \u2014 trees",
    "difficulty": "easy",
    "question": "A connected simple graph has 8 vertices and 7 edges. What must be true?",
    "options": [
      "It is disconnected.",
      "It contains exactly one cycle.",
      "It is a tree.",
      "It is complete."
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Every connected graph on n vertices has at least n-1 edges, and a connected graph with exactly n-1 edges is a tree.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-027",
    "section": "Computer Science & Information Technology",
    "topic": "Graph Theory \u2014 cut vertices and bridges",
    "difficulty": "medium",
    "question": "A graph has edges pq, qr, rs, sp forming a 4-cycle, together with edges rt and tu. How many cut vertices does the graph have?",
    "options": [
      "0",
      "2",
      "4",
      "1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Removing r separates the path t-u from the remaining cycle vertices, and removing t isolates u. Removing p, q, s, or u leaves the rest connected. Hence the graph has exactly 2 cut vertices.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-028",
    "section": "Computer Science & Information Technology",
    "topic": "Graph Theory \u2014 matching",
    "difficulty": "easy",
    "question": "What is the size of a maximum matching in the cycle graph C7?",
    "options": [
      "7",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A matching in a 7-cycle can use at most floor(7/2)=3 edges, and three pairwise disjoint cycle edges can indeed be chosen.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-029",
    "section": "Computer Science & Information Technology",
    "topic": "Graph Theory \u2014 graph coloring",
    "difficulty": "easy",
    "question": "What is the chromatic number of the complete bipartite graph K_{3,4}?",
    "options": [
      "4",
      "3",
      "2",
      "7"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Every nonempty bipartite graph is 2-colorable, and K_{3,4} has at least one edge, so its chromatic number is exactly 2.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-030",
    "section": "Computer Science & Information Technology",
    "topic": "Graph Theory \u2014 planarity",
    "difficulty": "medium",
    "question": "A connected planar embedding has 10 vertices and 15 edges. How many faces does it have?",
    "options": [
      "7",
      "5",
      "6",
      "8"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Euler's formula V-E+F=2 gives F=2-V+E=2-10+15=7.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-031",
    "section": "Computer Science & Information Technology",
    "topic": "Graph Theory \u2014 vertex cover",
    "difficulty": "medium",
    "question": "What is the minimum vertex-cover size of the cycle graph C6?",
    "options": [
      "3",
      "4",
      "6",
      "2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For an even cycle C_{2k}, alternating vertices form a vertex cover of size k, and a smaller cover cannot cover all 2k edges. Thus C6 has minimum cover size 3.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-032",
    "section": "Computer Science & Information Technology",
    "topic": "Mathematical Logic \u2014 propositional equivalence",
    "difficulty": "easy",
    "question": "Which formula is logically equivalent to p \u2192 q?",
    "options": [
      "\u00acp \u2227 q",
      "p \u2228 \u00acq",
      "p \u2227 q",
      "\u00acp \u2228 q"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "An implication p\u2192q is false only when p is true and q is false, which is exactly the truth behavior of \u00acp\u2228q.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-033",
    "section": "Computer Science & Information Technology",
    "topic": "Mathematical Logic \u2014 tautologies",
    "difficulty": "medium",
    "question": "Which classification applies to ((p \u2192 q) \u2227 p) \u2192 q?",
    "options": [
      "Contingency",
      "Contradiction",
      "Tautology",
      "Unsatisfiable but not contradictory"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Whenever the antecedent is true, modus ponens forces q true; when the antecedent is false, the implication is also true. Hence the formula is a tautology.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-034",
    "section": "Computer Science & Information Technology",
    "topic": "Mathematical Logic \u2014 first-order logic",
    "difficulty": "medium",
    "question": "Which first-order formula best expresses: \u201cEvery process requests at least one resource\u201d?",
    "options": [
      "\u2203r(Resource(r) \u2227 \u2200p(Process(p) \u2192 Requests(p,r)))",
      "\u2203p(Process(p) \u2227 \u2200r(Resource(r) \u2192 Requests(p,r)))",
      "\u2200r(Resource(r) \u2192 \u2203p(Process(p) \u2227 Requests(p,r)))",
      "\u2200p(Process(p) \u2192 \u2203r(Resource(r) \u2227 Requests(p,r)))"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The statement quantifies universally over processes and requires, for each process, the existence of at least one resource that it requests.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-035",
    "section": "Computer Science & Information Technology",
    "topic": "Mathematical Logic \u2014 validity of inference",
    "difficulty": "medium",
    "question": "From \u2200x(P(x) \u2192 Q(x)) and \u2203x P(x), which conclusion follows logically?",
    "options": [
      "\u2200x P(x)",
      "\u2203x Q(x)",
      "\u2203x \u00acQ(x)",
      "\u2200x Q(x)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Choose a witness a for \u2203xP(x). The universal premise gives P(a)\u2192Q(a), hence Q(a), so \u2203xQ(x).",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-036",
    "section": "Computer Science & Information Technology",
    "topic": "Digital Logic \u2014 Boolean minimization",
    "difficulty": "easy",
    "question": "Simplify the Boolean function F = AB + A'B.",
    "options": [
      "A",
      "A + B",
      "AB",
      "B"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "F=B(A+A')=B\u00b71=B.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-037",
    "section": "Computer Science & Information Technology",
    "topic": "Digital Logic \u2014 Karnaugh-map minimization",
    "difficulty": "medium",
    "question": "For variables A,B,C,D with A as the most significant bit, F=\u03a3m(0,2,8,10). What is the minimized expression?",
    "options": [
      "B'C'",
      "A'C'",
      "B'D'",
      "A'D'"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Minterms 0,2,8,10 are exactly the assignments with B=0 and D=0 while A and C vary, so F=B'D'.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-038",
    "section": "Computer Science & Information Technology",
    "topic": "Digital Logic \u2014 full adder",
    "difficulty": "easy",
    "question": "Which expression gives the sum output S of a one-bit full adder with inputs A, B and C_in?",
    "options": [
      "AB + AC_in + BC_in",
      "A \u2295 B \u2295 C_in",
      "AB + C_in",
      "A + B + C_in"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A full adder sum is odd parity of its three inputs, hence S=A\u2295B\u2295C_in.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-039",
    "section": "Computer Science & Information Technology",
    "topic": "Digital Logic \u2014 two's complement representation",
    "difficulty": "medium",
    "question": "What is the 8-bit two's-complement representation of -37?",
    "options": [
      "11011010",
      "11100101",
      "11011011",
      "10100101"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "+37 is 00100101. Invert to 11011010 and add 1, giving 11011011.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-040",
    "section": "Computer Science & Information Technology",
    "topic": "Digital Logic \u2014 signed overflow",
    "difficulty": "medium",
    "question": "In 8-bit two's-complement arithmetic, 01010000 + 01000000 produces 10010000. What does this indicate?",
    "options": [
      "The exact signed sum is -112.",
      "Signed overflow occurred.",
      "Unsigned overflow occurred but signed overflow did not.",
      "The result correctly represents +144."
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The operands are +80 and +64, whose true sum +144 is outside the signed 8-bit range [-128,127]. Adding two positives and obtaining a negative sign bit signals signed overflow.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-041",
    "section": "Computer Science & Information Technology",
    "topic": "Digital Logic \u2014 JK flip-flops",
    "difficulty": "easy",
    "question": "For a JK flip-flop, what happens on the active clock edge when J=1 and K=1?",
    "options": [
      "The output resets to 0.",
      "The output sets to 1.",
      "The output toggles.",
      "The output holds its previous state."
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The JK characteristic table specifies toggling for J=K=1.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-042",
    "section": "Computer Science & Information Technology",
    "topic": "Digital Logic \u2014 sequential circuits",
    "difficulty": "medium",
    "question": "A synchronous binary counter uses four flip-flops and has no unused states. What is its modulus?",
    "options": [
      "32",
      "4",
      "8",
      "16"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Four binary storage elements encode 2^4=16 distinct states, so a full binary counter cycles modulo 16.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-043",
    "section": "Computer Science & Information Technology",
    "topic": "Computer Organization and Architecture \u2014 addressing modes",
    "difficulty": "easy",
    "question": "A base-plus-displacement load uses register R1=1000 and displacement 24. What effective address is formed?",
    "options": [
      "1000",
      "24000",
      "976",
      "1024"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Base-plus-displacement addressing adds the displacement to the base register: 1000+24=1024.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-044",
    "section": "Computer Science & Information Technology",
    "topic": "Computer Organization and Architecture \u2014 instruction formats",
    "difficulty": "medium",
    "question": "A 32-bit instruction has a 6-bit opcode and two 5-bit register fields. If all remaining bits form one immediate field, how many bits are in that immediate?",
    "options": [
      "16",
      "26",
      "11",
      "21"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The fixed fields use 6+5+5=16 bits, leaving 32-16=16 bits for the immediate.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-045",
    "section": "Computer Science & Information Technology",
    "topic": "Computer Organization and Architecture \u2014 instruction pipelining",
    "difficulty": "medium",
    "question": "An ideal 5-stage pipeline completes one instruction per cycle after filling. Ignoring hazards, how many cycles are needed to complete 20 instructions?",
    "options": [
      "25",
      "20",
      "100",
      "24"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A k-stage ideal pipeline needs k+(n-1) cycles for n instructions. Here 5+19=24 cycles.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-046",
    "section": "Computer Science & Information Technology",
    "topic": "Computer Organization and Architecture \u2014 set-associative cache",
    "difficulty": "medium",
    "question": "A 2-way set-associative cache has 8 sets and uses LRU replacement within each set. Starting empty, memory block numbers 5, 13, 5, and 21 are accessed in that order. If the set index is block number mod 8, which pair is resident in the affected set after the final access?",
    "options": [
      "Blocks 5 and 13",
      "Blocks 5 and 21",
      "Blocks 13 and 21",
      "Only block 21"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Blocks 5, 13, and 21 all map to set 5 because each is congruent to 5 modulo 8. After accesses 5,13 the set is full; accessing 5 makes block 13 the least recently used. The final access to 21 therefore evicts 13, leaving blocks 5 and 21.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-047",
    "section": "Computer Science & Information Technology",
    "topic": "Computer Organization and Architecture \u2014 cache performance",
    "difficulty": "medium",
    "question": "A cache hit takes 1 ns. The miss rate is 5%, and a miss adds a 50 ns penalty beyond the hit lookup. What is the average memory access time?",
    "options": [
      "53.5 ns",
      "2.5 ns",
      "51 ns",
      "3.5 ns"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "AMAT = hit time + miss rate \u00d7 miss penalty = 1 + 0.05\u00d750 = 3.5 ns.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-048",
    "section": "Computer Science & Information Technology",
    "topic": "Computer Organization and Architecture \u2014 DMA",
    "difficulty": "easy",
    "question": "What is the principal purpose of DMA in an I/O system?",
    "options": [
      "To eliminate the need for main memory.",
      "To transfer blocks between an I/O device and memory without CPU intervention for every word.",
      "To execute device drivers inside the cache.",
      "To convert every interrupt into a polling operation."
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "DMA controllers move blocks directly between devices and memory; the CPU typically sets up the transfer and is interrupted on completion rather than handling each word.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-049",
    "section": "Computer Science & Information Technology",
    "topic": "Computer Organization and Architecture \u2014 memory organization",
    "difficulty": "easy",
    "question": "A memory is organized as 2^20 words of 32 bits each. What is its total capacity in bytes?",
    "options": [
      "8 MiB",
      "32 MiB",
      "4 MiB",
      "1 MiB"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "There are 2^20 words and each 32-bit word is 4 bytes, so capacity is 2^20\u00d74 = 2^22 bytes = 4 MiB.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-050",
    "section": "Computer Science & Information Technology",
    "topic": "Computer Organization and Architecture \u2014 memory-mapped I/O",
    "difficulty": "easy",
    "question": "A processor uses memory-mapped I/O, and a device status register is assigned address 0xFF20. Which operation can the processor normally use to read that status register?",
    "options": [
      "Only a disk-seek instruction",
      "A cache-flush instruction with no address",
      "An ordinary memory-load instruction from address 0xFF20",
      "Only a DMA transfer initiated by the device"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "With memory-mapped I/O, device registers occupy locations in the processor's address space. The processor can therefore access the status register using an ordinary load from the mapped address 0xFF20.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-051",
    "section": "Computer Science & Information Technology",
    "topic": "Computer Organization and Architecture \u2014 interrupts",
    "difficulty": "medium",
    "question": "An interrupt handler occupies the CPU for 30 microseconds per interrupt. If interrupt handling may use at most 1.5% of CPU time, what is the largest sustained interrupt rate allowed by this budget?",
    "options": [
      "50 interrupts per second",
      "150 interrupts per second",
      "5,000 interrupts per second",
      "500 interrupts per second"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The CPU-time budget is 0.015 second per second. Each interrupt costs 30\u00d710^-6 second, so the maximum rate is 0.015/(30\u00d710^-6)=500 interrupts per second.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-052",
    "section": "Computer Science & Information Technology",
    "topic": "Programming and Data Structures \u2014 parameter passing in C",
    "difficulty": "easy",
    "question": "In standard C, a function `void swap(int a, int b)` exchanges only its local variables a and b. If it is called as `swap(x,y)`, what happens to x and y in the caller?",
    "options": [
      "Their values are unchanged.",
      "Only x changes.",
      "Only y changes.",
      "Their values are always exchanged."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "C passes scalar arguments by value. The function receives copies of x and y, so swapping the local copies does not modify the caller variables.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-053",
    "section": "Computer Science & Information Technology",
    "topic": "Programming and Data Structures \u2014 recursion",
    "difficulty": "medium",
    "question": "Consider `int f(int n){ if(n==0) return 1; return n*f(n-1); }`. What does `f(5)` return?",
    "options": [
      "60",
      "720",
      "120",
      "24"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The recursion computes 5\u00d74\u00d73\u00d72\u00d71\u00d7f(0)=120.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-054",
    "section": "Computer Science & Information Technology",
    "topic": "Programming and Data Structures \u2014 stacks",
    "difficulty": "medium",
    "question": "What is the value of the postfix expression `8 3 2 * + 5 -`?",
    "options": [
      "11",
      "5",
      "9",
      "19"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Evaluate 3\u00d72=6, then 8+6=14, then 14-5=9.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-055",
    "section": "Computer Science & Information Technology",
    "topic": "Programming and Data Structures \u2014 circular queues",
    "difficulty": "medium",
    "question": "A circular queue uses an array of size 8 and keeps one slot empty to distinguish full from empty. What is its maximum number of stored elements?",
    "options": [
      "6",
      "8",
      "9",
      "7"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "With the one-empty-slot convention, an array of N locations can hold at most N-1 queue elements, so the capacity is 7.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-056",
    "section": "Computer Science & Information Technology",
    "topic": "Programming and Data Structures \u2014 linked lists",
    "difficulty": "easy",
    "question": "Given a pointer to a node in a singly linked list and a newly allocated node, inserting the new node immediately after the given node takes what time?",
    "options": [
      "\u0398(n log n)",
      "\u0398(log n)",
      "\u0398(1)",
      "\u0398(n)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Only a constant number of pointer assignments is required when the insertion position is already given.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-057",
    "section": "Computer Science & Information Technology",
    "topic": "Programming and Data Structures \u2014 binary search trees",
    "difficulty": "medium",
    "question": "A binary search tree stores distinct integer keys. To output only the keys from 30 through 60 in increasing order while pruning subtrees that cannot contain such keys, which strategy is appropriate?",
    "options": [
      "Use an inorder traversal, exploring the left subtree only when the current key is greater than 30 and the right subtree only when it is less than 60.",
      "Use a preorder traversal and always visit both subtrees of every node.",
      "Use level-order traversal and stop after the first key greater than 60.",
      "Use postorder traversal and ignore all comparisons with 30 and 60."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Inorder traversal of a BST visits keys in increasing order. If the current key is at or below 30, no smaller key in its left subtree can help; similarly, if it is at or above 60, no larger key in its right subtree can help. These comparisons safely prune irrelevant branches while reporting the desired range in order.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-058",
    "section": "Computer Science & Information Technology",
    "topic": "Programming and Data Structures \u2014 binary search trees",
    "difficulty": "easy",
    "question": "Keys 40,20,60,10,30,50,70 are inserted in that order into an empty binary search tree. What is the tree height measured in edges on the longest root-to-leaf path?",
    "options": [
      "2",
      "1",
      "6",
      "3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The insertion order creates a perfectly balanced three-level tree with root 40, children 20 and 60, and four grandchildren. The longest root-to-leaf path has 2 edges.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-059",
    "section": "Computer Science & Information Technology",
    "topic": "Programming and Data Structures \u2014 binary heaps",
    "difficulty": "medium",
    "question": "A max-heap is stored as [50,30,40,10,20]. After inserting 45, what is the resulting array representation?",
    "options": [
      "[50,30,40,10,20,45]",
      "[50,30,45,10,20,40]",
      "[45,30,50,10,20,40]",
      "[50,45,40,10,20,30]"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Insert 45 at the end. Its parent is 40, so 45 swaps with 40. It then has parent 50 and stops, giving [50,30,45,10,20,40].",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-060",
    "section": "Computer Science & Information Technology",
    "topic": "Programming and Data Structures \u2014 stacks",
    "difficulty": "easy",
    "question": "A stack is initially empty. The operations `push(12), push(5), pop(), push(8), push(3), pop()` are performed in order. What value is at the top of the stack afterward?",
    "options": [
      "3",
      "5",
      "8",
      "12"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "After push(12), push(5), the stack top is 5; pop() removes 5. Then push(8), push(3) makes 3 the top, and the final pop() removes 3. The remaining top value is 8.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-061",
    "section": "Computer Science & Information Technology",
    "topic": "Programming and Data Structures \u2014 abstract data types",
    "difficulty": "medium",
    "question": "A queue is implemented using two stacks: enqueue pushes onto stack S1; dequeue transfers all elements to S2 only when S2 is empty. What is the amortized time per queue operation over a long sequence?",
    "options": [
      "\u0398(1)",
      "\u0398(n)",
      "\u0398(n\u00b2)",
      "\u0398(log n)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Each element is pushed onto S1 once, moved from S1 to S2 at most once, and popped from S2 once. Thus total work is linear in the number of operations, giving \u0398(1) amortized time.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-062",
    "section": "Computer Science & Information Technology",
    "topic": "Programming and Data Structures \u2014 pointers in C",
    "difficulty": "medium",
    "question": "For `int a[]={4,7,9}; int *p=a;`, what is the value of `*(p+1) + *p`?",
    "options": [
      "7",
      "11",
      "13",
      "16"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "p points to a[0]=4 and p+1 points to a[1]=7, so the expression is 7+4=11.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-063",
    "section": "Computer Science & Information Technology",
    "topic": "Programming and Data Structures \u2014 storage duration in C",
    "difficulty": "medium",
    "question": "Consider `int g(){ static int c=0; return ++c; }`. If `g()` is called twice in succession and the two returned values are added, what is the sum?",
    "options": [
      "4",
      "3",
      "2",
      "1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A static local retains its value between calls. The first call returns 1 and the second returns 2, so the sum is 3.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-064",
    "section": "Computer Science & Information Technology",
    "topic": "Algorithms and Complexity \u2014 divide-and-conquer recurrence",
    "difficulty": "medium",
    "question": "What is the asymptotic solution of T(n)=2T(n/2)+n with T(1)=\u0398(1)?",
    "options": [
      "\u0398(n\u00b2)",
      "\u0398(log n)",
      "\u0398(n)",
      "\u0398(n log n)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By the Master Theorem, a=2,b=2 and f(n)=n=\u0398(n^{log_b a}), so T(n)=\u0398(n log n).",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-065",
    "section": "Computer Science & Information Technology",
    "topic": "Algorithms and Complexity \u2014 asymptotic analysis",
    "difficulty": "medium",
    "question": "Consider the nested loops `for(i=1; i<=n; i*=2) for(j=0; j<i; j++) work++;`. What is the asymptotic number of executions of `work++`?",
    "options": [
      "\u0398(log n)",
      "\u0398(n log n)",
      "\u0398(n\u00b2)",
      "\u0398(n)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The inner-loop counts over successive outer iterations are 1,2,4,... up to at most n. Their geometric sum is less than 2n and at least n for a final power-of-two scale, so the total is \u0398(n).",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-066",
    "section": "Computer Science & Information Technology",
    "topic": "Algorithms and Complexity \u2014 binary search",
    "difficulty": "easy",
    "question": "A standard binary search is applied to a sorted array of 100 elements. What is the maximum number of element comparisons needed for an unsuccessful search?",
    "options": [
      "100",
      "6",
      "7",
      "8"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Binary search needs at most ceil(log2(n+1)) comparisons for an unsuccessful search. ceil(log2 101)=7.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-067",
    "section": "Computer Science & Information Technology",
    "topic": "Algorithms and Complexity \u2014 sorting stability",
    "difficulty": "medium",
    "question": "A merge-sort implementation chooses the left-subarray element first whenever the compared keys are equal. Which property follows?",
    "options": [
      "The algorithm no longer uses comparisons.",
      "The worst-case time becomes \u0398(n\u00b2).",
      "The sort becomes in-place.",
      "The sort is stable."
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Choosing the left occurrence first preserves the original relative order of equal keys across merges, which is exactly stability.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-068",
    "section": "Computer Science & Information Technology",
    "topic": "Algorithms and Complexity \u2014 quicksort",
    "difficulty": "easy",
    "question": "If quicksort repeatedly chooses the smallest remaining element as pivot, what is its worst-case running time on n distinct keys?",
    "options": [
      "\u0398(n\u00b2)",
      "\u0398(n)",
      "\u0398(n log n)",
      "\u0398(log n)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Each partition leaves subproblems of sizes 0 and n-1, producing n+(n-1)+... comparisons, hence \u0398(n\u00b2).",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-069",
    "section": "Computer Science & Information Technology",
    "topic": "Algorithms and Complexity \u2014 shortest paths",
    "difficulty": "easy",
    "question": "Which condition is required for Dijkstra's algorithm to guarantee correct single-source shortest paths?",
    "options": [
      "The graph must be undirected.",
      "The graph must be acyclic.",
      "All edge weights must be equal.",
      "All edge weights must be nonnegative."
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Dijkstra's greedy finalization is valid when no negative-weight edge can later improve a settled distance.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-070",
    "section": "Computer Science & Information Technology",
    "topic": "Algorithms and Complexity \u2014 Bellman-Ford algorithm",
    "difficulty": "medium",
    "question": "What capability does Bellman-Ford have that standard Dijkstra does not?",
    "options": [
      "It finds minimum spanning trees.",
      "It works only on DAGs.",
      "It can handle negative edge weights and detect a reachable negative cycle.",
      "It requires all edges to have equal weight."
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Bellman-Ford relaxes all edges repeatedly, so it handles negative weights and a further relaxation after |V|-1 rounds reveals a reachable negative cycle.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-071",
    "section": "Computer Science & Information Technology",
    "topic": "Algorithms and Complexity \u2014 minimum spanning trees",
    "difficulty": "medium",
    "question": "An undirected graph has weighted edges AB=1, BC=2, AC=4, CD=3 and BD=5. What is the weight of a minimum spanning tree?",
    "options": [
      "7",
      "10",
      "6",
      "8"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Kruskal processes edges in increasing weight. It selects AB(1), BC(2), and CD(3), which already connect all four vertices without a cycle. Their total weight is 1+2+3=6; the remaining edges are heavier and are unnecessary.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-072",
    "section": "Computer Science & Information Technology",
    "topic": "Algorithms and Complexity \u2014 breadth-first search",
    "difficulty": "easy",
    "question": "In an unweighted graph, which traversal directly computes shortest-path distances from a source in number of edges?",
    "options": [
      "Breadth-first search",
      "Depth-first search",
      "Heap sort",
      "Postorder traversal"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "BFS explores vertices by nondecreasing distance layers, so the first discovered distance is a shortest number of edges.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-073",
    "section": "Computer Science & Information Technology",
    "topic": "Algorithms and Complexity \u2014 hashing",
    "difficulty": "medium",
    "question": "A hash table of size 7 uses h(k)=k mod 7 and linear probing. Keys 10,17,24 are inserted in that order. At which index will key 31 be placed?",
    "options": [
      "6",
      "3",
      "5",
      "0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "All four keys hash to 3. The first three occupy 3,4,5 by linear probing, so 31 is placed at index 6.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-074",
    "section": "Computer Science & Information Technology",
    "topic": "Algorithms and Complexity \u2014 topological ordering",
    "difficulty": "medium",
    "question": "A directed acyclic graph has edges P\u2192R, Q\u2192R, R\u2192S, and Q\u2192T. Which sequence is a valid topological ordering?",
    "options": [
      "R, P, Q, S, T",
      "Q, T, R, P, S",
      "P, R, Q, S, T",
      "P, Q, R, T, S"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Every directed edge must go from an earlier vertex to a later one. In P, Q, R, T, S, both P and Q precede R, R precedes S, and Q precedes T. Each other option violates at least one of those precedence constraints.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-075",
    "section": "Computer Science & Information Technology",
    "topic": "Algorithms and Complexity \u2014 complexity classes",
    "difficulty": "medium",
    "question": "If any NP-complete decision problem is shown to have a polynomial-time algorithm, what follows?",
    "options": [
      "Every undecidable problem becomes decidable",
      "P \u2260 NP",
      "NP = co-NP must be false",
      "P = NP"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Every problem in NP polynomially reduces to an NP-complete problem. A polynomial algorithm for one NP-complete problem therefore yields polynomial algorithms for all NP problems, so P=NP.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-076",
    "section": "Computer Science & Information Technology",
    "topic": "Theory of Computation \u2014 regular expressions",
    "difficulty": "easy",
    "question": "Which regular expression denotes all binary strings that end in 01?",
    "options": [
      "(0|1)*10",
      "(0|1)*01",
      "01(0|1)*",
      "0*1*"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Any binary prefix is allowed, followed by the fixed suffix 01, hence (0|1)*01.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-077",
    "section": "Computer Science & Information Technology",
    "topic": "Theory of Computation \u2014 DFA state complexity",
    "difficulty": "medium",
    "question": "A DFA recognizes binary strings in which the number of 1s is congruent to 0 modulo 3. What is the minimum number of states required?",
    "options": [
      "4",
      "6",
      "3",
      "2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The automaton must distinguish the three possible remainders 0,1,2 of the count of 1s modulo 3, and these remainder classes are pairwise distinguishable.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-078",
    "section": "Computer Science & Information Technology",
    "topic": "Theory of Computation \u2014 finite automata",
    "difficulty": "easy",
    "question": "Which statement about NFAs and DFAs is correct?",
    "options": [
      "NFAs recognize strictly more languages than DFAs.",
      "They recognize exactly the same class of languages.",
      "DFAs recognize context-free languages but NFAs do not.",
      "Only NFAs can recognize finite languages."
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Every DFA is an NFA, and every NFA can be converted to an equivalent DFA by subset construction. Both recognize exactly the regular languages.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-079",
    "section": "Computer Science & Information Technology",
    "topic": "Theory of Computation \u2014 DFA execution",
    "difficulty": "medium",
    "question": "A DFA has states s, t, u; start state s; and accepting state u. On input 0 the transitions are s\u2192t, t\u2192u, u\u2192u. On input 1 they are s\u2192s, t\u2192s, u\u2192t. Which input string is accepted?",
    "options": [
      "001",
      "100",
      "010",
      "111"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For 100, the run is s --1\u2192 s --0\u2192 t --0\u2192 u, so it ends in the accepting state u. The other listed strings end in s or t and are rejected.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-080",
    "section": "Computer Science & Information Technology",
    "topic": "Theory of Computation \u2014 \u03b5-closure in NFAs",
    "difficulty": "medium",
    "question": "An \u03b5-NFA has states {u,v,w,x}. Its \u03b5-transitions are u\u2192v, u\u2192w, w\u2192x, and x\u2192w, with no other \u03b5-transitions. What is \u03b5-closure(u)?",
    "options": [
      "{u,v,w}",
      "{u,w,x}",
      "{u,v}",
      "{u,v,w,x}"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "\u03b5-closure(u) includes u itself. From u, \u03b5-moves reach v and w; from w, an \u03b5-move reaches x. The x\u2192w cycle adds no new state. Hence \u03b5-closure(u) is {u,v,w,x}.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-081",
    "section": "Computer Science & Information Technology",
    "topic": "Theory of Computation \u2014 context-free grammar derivations",
    "difficulty": "easy",
    "question": "Consider the grammar S\u2192pA and A\u2192qA | r. Which string is not generated by this grammar?",
    "options": [
      "pr",
      "pqr",
      "pqq",
      "pqqqr"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The grammar generates p followed by zero or more q symbols and then a final r, i.e. pq^k r for k\u22650. The string pqq has no final r, so it cannot be generated.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-082",
    "section": "Computer Science & Information Technology",
    "topic": "Theory of Computation \u2014 Turing-recognizable languages",
    "difficulty": "hard",
    "question": "For a Turing-recognizable language L, which behavior is permitted for a recognizer on an input not in L?",
    "options": [
      "It must halt and reject.",
      "It must accept.",
      "It must enter an accepting state within polynomial time.",
      "It may run forever."
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A recognizer is required to halt and accept members, but on nonmembers it may either reject or loop forever. Deciders must halt on all inputs.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-083",
    "section": "Computer Science & Information Technology",
    "topic": "Theory of Computation \u2014 undecidability",
    "difficulty": "easy",
    "question": "Which problem is undecidable for arbitrary Turing machines and inputs?",
    "options": [
      "Whether a DFA accepts a given finite string",
      "Whether a finite graph has an edge",
      "Whether the machine eventually halts on the given input",
      "Whether two integers are equal"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The halting problem is a canonical undecidable problem; the other listed tasks are decidable by direct finite computation.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-084",
    "section": "Computer Science & Information Technology",
    "topic": "Compiler Design \u2014 lexical analysis",
    "difficulty": "medium",
    "question": "Assuming identifiers and integer literals are each single tokens, how many tokens are in the statement `sum=x1+25;`?",
    "options": [
      "5",
      "6",
      "8",
      "7"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The tokens are identifier(sum), =, identifier(x1), +, integer(25), and ;, for a total of 6.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-085",
    "section": "Computer Science & Information Technology",
    "topic": "Compiler Design \u2014 lexical analysis",
    "difficulty": "medium",
    "question": "When a lexer has token rules for `<` and `<=`, what standard rule causes the input `<=` to be recognized as one token rather than two?",
    "options": [
      "Maximal munch (longest match)",
      "Register allocation",
      "Constant folding",
      "Left factoring"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Lexers typically choose the longest prefix matching any token rule. Thus <= is chosen over the shorter < token.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-086",
    "section": "Computer Science & Information Technology",
    "topic": "Compiler Design \u2014 parsing",
    "difficulty": "medium",
    "question": "Why must immediate left recursion such as A \u2192 A\u03b1 | \u03b2 be removed before using a conventional predictive LL(1) parser?",
    "options": [
      "It causes nontermination in top-down expansion.",
      "It makes every language non-context-free.",
      "It prevents lexical tokenization.",
      "It forces all productions to have identical FIRST sets only after parsing."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A top-down parser expanding A can repeatedly choose A\u2192A\u03b1 without consuming input, so immediate left recursion must be transformed away.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-087",
    "section": "Computer Science & Information Technology",
    "topic": "Compiler Design \u2014 syntax-directed translation",
    "difficulty": "medium",
    "question": "A synthesized attribute at a parse-tree node is normally computed from which information?",
    "options": [
      "Only global variables outside the parse tree",
      "Attributes of its children and the node itself",
      "Only tokens to the right of the entire program",
      "Only attributes of its parent"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Synthesized attributes flow upward: a node computes them from its children and local production information.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-088",
    "section": "Computer Science & Information Technology",
    "topic": "Compiler Design \u2014 runtime environments",
    "difficulty": "easy",
    "question": "Which item is typically stored in a procedure activation record?",
    "options": [
      "All disk blocks of the executable",
      "The entire source program",
      "Only lexical token types",
      "Return address"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "An activation record commonly stores the return address, parameters, saved registers, local variables, and bookkeeping information for one call.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-089",
    "section": "Computer Science & Information Technology",
    "topic": "Compiler Design \u2014 intermediate code generation",
    "difficulty": "medium",
    "question": "Which three-address-code sequence correctly respects precedence for `x = a + b * c`?",
    "options": [
      "t1 = a + b; t2 = t1 * c; x = t2",
      "t1 = b * c; t2 = a + t1; x = t2",
      "t1 = a * b; x = t1 + c",
      "x = a; x = x + b; x = x * c"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Multiplication has higher precedence, so b*c is computed first, then added to a, then assigned to x.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-090",
    "section": "Computer Science & Information Technology",
    "topic": "Compiler Design \u2014 code optimization",
    "difficulty": "medium",
    "question": "In the straight-line code `t1=a*b; t2=a*b; x=t1+t2`, replacing the second multiplication by reuse of t1 is an example of which optimization?",
    "options": [
      "Common subexpression elimination",
      "Dead-code insertion",
      "Lexical disambiguation",
      "Loop unrolling"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The expression a*b is computed twice with unchanged operands. Reusing the first result eliminates a repeated common subexpression.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-091",
    "section": "Computer Science & Information Technology",
    "topic": "Operating System \u2014 processes and threads",
    "difficulty": "easy",
    "question": "Threads belonging to the same process normally share which resource?",
    "options": [
      "Their individual stacks",
      "The process address space",
      "Their CPU register sets while running",
      "Their individual program counters"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Threads of one process share code, data, heap and other process resources, while each thread has its own program counter, registers and stack.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-092",
    "section": "Computer Science & Information Technology",
    "topic": "Operating System \u2014 CPU scheduling",
    "difficulty": "medium",
    "question": "Three processes arrive at time 0 in the FCFS order P1, P2, P3 with CPU bursts 5, 3 and 1 ms. What is their average waiting time?",
    "options": [
      "13/3 ms",
      "5 ms",
      "4 ms",
      "3 ms"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Waiting times are 0 for P1, 5 for P2, and 8 for P3. Their average is (0+5+8)/3=13/3 ms.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-093",
    "section": "Computer Science & Information Technology",
    "topic": "Operating System \u2014 round-robin scheduling",
    "difficulty": "medium",
    "question": "Round-robin scheduling uses a quantum of 2 ms. P1 needs 5 ms and P2 needs 3 ms; both arrive at time 0, with P1 first. Which process finishes first?",
    "options": [
      "P2",
      "Neither can finish under round robin.",
      "P1",
      "They finish simultaneously."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Execution is P1(0-2), P2(2-4), P1(4-6), P2(6-7) so P2 finishes at 7 ms; P1 then finishes at 8 ms.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-094",
    "section": "Computer Science & Information Technology",
    "topic": "Operating System \u2014 semaphores",
    "difficulty": "medium",
    "question": "A binary semaphore S is initialized to 1. Process P executes wait(S) and enters its critical section. Before P signals S, process Q executes wait(S). What happens to Q?",
    "options": [
      "Q enters the critical section immediately.",
      "Q terminates P.",
      "Q blocks until S is signaled.",
      "Q resets S to 1 and continues."
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "P's wait acquires the semaphore, making it unavailable. Q's wait cannot proceed until P executes signal(S).",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-095",
    "section": "Computer Science & Information Technology",
    "topic": "Operating System \u2014 deadlock",
    "difficulty": "easy",
    "question": "Which is one of the Coffman necessary conditions for deadlock?",
    "options": [
      "Circular wait",
      "Priority inheritance",
      "Preemptive scheduling",
      "Infinite memory"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The four Coffman conditions are mutual exclusion, hold and wait, no preemption, and circular wait.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-096",
    "section": "Computer Science & Information Technology",
    "topic": "Operating System \u2014 deadlock avoidance",
    "difficulty": "hard",
    "question": "A system has one resource type with 10 instances. Process P holds 4 and may need at most 6 total; Q holds 3 and may need at most 7 total. Three instances are free. Which process can safely be allowed to finish first using the Banker safety idea?",
    "options": [
      "Both require more than the total number of instances",
      "Q",
      "P",
      "Neither P nor Q"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "P needs at most 2 more instances, which is within the 3 available, so P can complete and release 6. Q still needs 4, which exceeds the initial 3, so P is the safe first completion.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-097",
    "section": "Computer Science & Information Technology",
    "topic": "Operating System \u2014 virtual memory",
    "difficulty": "medium",
    "question": "With three initially empty page frames and LRU replacement, how many page faults occur for the reference string 1,2,3,1,4?",
    "options": [
      "4",
      "2",
      "5",
      "3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "References 1,2,3 each fault, the second reference to 1 hits, and 4 faults while evicting the least-recently-used page 2. Total faults=4.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-098",
    "section": "Computer Science & Information Technology",
    "topic": "Operating System \u2014 paging",
    "difficulty": "easy",
    "question": "With 4 KiB pages, what is the page offset of virtual address 0x1234?",
    "options": [
      "0x123",
      "0x1",
      "0x12",
      "0x234"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A 4 KiB page uses 12 offset bits. The low 12 bits of 0x1234 are 0x234.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-099",
    "section": "Computer Science & Information Technology",
    "topic": "Databases \u2014 relational algebra",
    "difficulty": "easy",
    "question": "Which relational-algebra operator selects rows satisfying a predicate?",
    "options": [
      "Rename (\u03c1)",
      "Selection (\u03c3)",
      "Cartesian product (\u00d7)",
      "Projection (\u03c0)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Selection \u03c3 filters tuples according to a condition; projection \u03c0 chooses columns.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-100",
    "section": "Computer Science & Information Technology",
    "topic": "Databases \u2014 functional dependencies and keys",
    "difficulty": "medium",
    "question": "For relation R(A,B,C) with functional dependencies A\u2192B and B\u2192C, which attribute set is a candidate key?",
    "options": [
      "{A}",
      "{B}",
      "{B,C}",
      "{C}"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A+ contains A, then B via A\u2192B, then C via B\u2192C; thus A determines all attributes and is minimal. B cannot determine A.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-101",
    "section": "Computer Science & Information Technology",
    "topic": "Databases \u2014 normalization",
    "difficulty": "medium",
    "question": "A relation with composite key (Student,Course) stores StudentName, and Student\u2192StudentName holds. Which normal form is violated by this partial dependency if the relation is otherwise in 1NF?",
    "options": [
      "First normal form (1NF)",
      "Fourth normal form only",
      "Boyce-Codd normal form only, but not 2NF",
      "Second normal form (2NF)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "StudentName depends on only part of the composite key, a partial dependency. 2NF removes partial dependencies of non-key attributes on a candidate key.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-102",
    "section": "Computer Science & Information Technology",
    "topic": "Databases \u2014 SQL aggregation",
    "difficulty": "medium",
    "question": "Which SQL clause filters groups after `GROUP BY` based on an aggregate such as `COUNT(*) > 5`?",
    "options": [
      "HAVING",
      "DISTINCT",
      "WHERE",
      "ORDER BY"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "WHERE filters rows before grouping; HAVING applies predicates to groups after aggregation.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-103",
    "section": "Computer Science & Information Technology",
    "topic": "Databases \u2014 B+ trees",
    "difficulty": "medium",
    "question": "Which statement is characteristic of a B+ tree index?",
    "options": [
      "Search always requires scanning every leaf.",
      "Data entries are stored at the leaf level, and internal nodes guide searches.",
      "Leaves are never linked in key order.",
      "Every internal node stores the complete table row."
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "B+ trees keep search keys/pointers in internal nodes and data entries or record pointers at leaves, which are typically linked to support range scans.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-104",
    "section": "Computer Science & Information Technology",
    "topic": "Databases \u2014 conflict serializability",
    "difficulty": "hard",
    "question": "A schedule has a precedence graph with edges T1\u2192T2, T2\u2192T3 and T1\u2192T3, and no other edges. What can be concluded?",
    "options": [
      "The schedule is conflict-serializable in the order T1, T2, T3.",
      "The schedule is not conflict-serializable because it has three edges.",
      "The graph contains a cycle T1\u2192T2\u2192T3\u2192T1.",
      "The only possible serial order is T3, T2, T1."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The precedence graph is acyclic. Its topological order T1,T2,T3 is a conflict-equivalent serial order, so the schedule is conflict-serializable.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-105",
    "section": "Computer Science & Information Technology",
    "topic": "Databases \u2014 two-phase locking",
    "difficulty": "medium",
    "question": "What property is guaranteed by basic two-phase locking when transactions follow the protocol correctly?",
    "options": [
      "Freedom from all deadlocks",
      "Conflict serializability",
      "Only read locks are needed",
      "No transaction ever waits"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Two-phase locking guarantees conflict-serializable schedules, although deadlocks can still occur.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-106",
    "section": "Computer Science & Information Technology",
    "topic": "Databases \u2014 recovery and logging",
    "difficulty": "medium",
    "question": "Under write-ahead logging, what must happen before a modified database page is written to disk?",
    "options": [
      "All other transactions must be aborted.",
      "The transaction must always have committed.",
      "The corresponding update log record must already be on stable storage.",
      "The page must be removed from the buffer pool permanently."
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "WAL requires the log describing a change to reach stable storage before the changed page, so recovery can redo or undo the update as needed.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-107",
    "section": "Computer Science & Information Technology",
    "topic": "Information Systems and Software Engineering \u2014 feasibility analysis",
    "difficulty": "easy",
    "question": "Which feasibility question asks whether the expected benefits of a proposed information system justify its development and operating costs?",
    "options": [
      "Economic feasibility",
      "Legal feasibility",
      "Technical feasibility",
      "Schedule feasibility"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Economic feasibility compares expected costs with financial or measurable benefits to judge whether the project is worthwhile.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-108",
    "section": "Computer Science & Information Technology",
    "topic": "Information Systems and Software Engineering \u2014 data flow diagrams",
    "difficulty": "medium",
    "question": "Which item is represented directly in a data flow diagram (DFD)?",
    "options": [
      "Exact CPU instruction timing",
      "Source-code control-flow branches",
      "Database page replacement order",
      "Flow of data between processes, stores and external entities"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A DFD models how data moves among processes, data stores and external entities; it is not a program control-flow or hardware-timing diagram.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-109",
    "section": "Computer Science & Information Technology",
    "topic": "Information Systems and Software Engineering \u2014 requirements",
    "difficulty": "easy",
    "question": "\u201cThe system shall return a search result within 2 seconds for 95% of requests\u201d is primarily what kind of requirement?",
    "options": [
      "Corrective maintenance request",
      "Data-flow symbol",
      "Non-functional performance requirement",
      "Functional requirement"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The statement constrains performance quality rather than specifying a business function, so it is a non-functional performance requirement.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-110",
    "section": "Computer Science & Information Technology",
    "topic": "Information Systems and Software Engineering \u2014 software testing",
    "difficulty": "medium",
    "question": "For an input field specified to accept integer values from 1 through 100 inclusive, which set best reflects boundary-value test inputs?",
    "options": [
      "1 and 100 only",
      "25, 50, 75 only",
      "10, 20, 30, 40",
      "0, 1, 2, 99, 100, 101"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Boundary-value analysis tests just below, at, and just above each boundary: around 1 use 0,1,2 and around 100 use 99,100,101.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-111",
    "section": "Computer Science & Information Technology",
    "topic": "Information Systems and Software Engineering \u2014 software maintenance",
    "difficulty": "medium",
    "question": "An application is modified because a new operating-system API replaces an old one. What type of maintenance is this?",
    "options": [
      "Preventive maintenance only",
      "Adaptive maintenance",
      "Corrective maintenance",
      "Perfective maintenance"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Adaptive maintenance changes software so it continues to work in a changed external environment, such as a new OS API.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-112",
    "section": "Computer Science & Information Technology",
    "topic": "Computer Networks \u2014 OSI model",
    "difficulty": "easy",
    "question": "In the OSI model, routing packets across interconnected networks is primarily a function of which layer?",
    "options": [
      "Presentation layer",
      "Physical layer",
      "Network layer",
      "Data-link layer"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The network layer provides logical addressing and routing between networks.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-113",
    "section": "Computer Science & Information Technology",
    "topic": "Computer Networks \u2014 IPv4 subnetting",
    "difficulty": "medium",
    "question": "Ignoring network and broadcast addresses, how many usable host addresses are available in an IPv4 /27 subnet?",
    "options": [
      "30",
      "62",
      "16",
      "32"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A /27 leaves 5 host bits, giving 2^5=32 addresses. Excluding network and broadcast addresses leaves 30 usable host addresses.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-114",
    "section": "Computer Science & Information Technology",
    "topic": "Computer Networks \u2014 transport protocols",
    "difficulty": "easy",
    "question": "Which feature is provided by TCP but not by UDP?",
    "options": [
      "Reliable ordered byte-stream delivery",
      "Checksum-based error detection in the header",
      "Application-chosen port numbers",
      "Connectionless datagrams"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "TCP provides connection-oriented reliable, ordered byte-stream delivery. UDP is connectionless and does not provide reliability or ordering.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-115",
    "section": "Computer Science & Information Technology",
    "topic": "Computer Networks \u2014 store-and-forward delay",
    "difficulty": "medium",
    "question": "A 900-byte packet crosses two store-and-forward links in sequence. The first link is 9 Mbps and the second is 6 Mbps. Ignoring propagation, processing, and queueing delays, how long after transmission begins does the last bit of the packet reach the destination?",
    "options": [
      "0.8 ms",
      "1.2 ms",
      "2.0 ms",
      "7.2 ms"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The packet has 900\u00d78=7200 bits. Transmission takes 7200/9,000,000=0.8 ms on the first link and 7200/6,000,000=1.2 ms on the second. Store-and-forward requires the full packet to be transmitted on each link, so the total is 2.0 ms.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-116",
    "section": "Computer Science & Information Technology",
    "topic": "Computer Networks \u2014 routing algorithms",
    "difficulty": "medium",
    "question": "Which pairing is correct?",
    "options": [
      "Both link-state and distance-vector routing use only DFS",
      "Link-state routing \u2014 Kruskal; distance-vector routing \u2014 Prim",
      "Link-state routing \u2014 Bellman-Ford; distance-vector routing \u2014 Dijkstra",
      "Link-state routing \u2014 Dijkstra; distance-vector routing \u2014 Bellman-Ford"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Link-state protocols build a topology map and run Dijkstra; distance-vector protocols iteratively update distances in the Bellman-Ford style.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-117",
    "section": "Computer Science & Information Technology",
    "topic": "Computer Networks \u2014 application protocols",
    "difficulty": "medium",
    "question": "What is the primary role of DNS?",
    "options": [
      "To map domain names to resource records such as IP addresses",
      "To replace IP routing with Ethernet switching",
      "To allocate CPU time to network applications",
      "To encrypt all HTTP payloads"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "DNS is a distributed naming system that resolves domain names to records such as A/AAAA addresses and other resource information.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-118",
    "section": "Computer Science & Information Technology",
    "topic": "Computer Networks \u2014 cryptography and digital signatures",
    "difficulty": "medium",
    "question": "In a public-key digital signature system, which key does the signer use to create the signature and which key is used to verify it?",
    "options": [
      "Both use only the verifier's public key.",
      "Signer uses the public key; verifier uses the private key.",
      "Signer uses the private key; verifier uses the signer's public key.",
      "Both use only the signer's private key."
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A digital signature is produced using the signer's private key and is verified using the corresponding public key, providing origin authentication and integrity.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-119",
    "section": "Computer Science & Information Technology",
    "topic": "Web Technologies \u2014 HTTP client-server interaction",
    "difficulty": "easy",
    "question": "Which statement best distinguishes a typical HTTP GET request from a typical POST request?",
    "options": [
      "GET commonly places request parameters in the URL, whereas POST commonly carries data in the request body.",
      "POST responses cannot contain HTML.",
      "GET can be used only on local files.",
      "GET always encrypts data while POST never does."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "GET commonly encodes parameters in the URI query, while POST commonly submits a representation in the request body. Encryption depends on HTTPS, not the method itself.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "ap-pgecet-2026-cs-120",
    "section": "Computer Science & Information Technology",
    "topic": "Web Technologies \u2014 XML",
    "difficulty": "medium",
    "question": "Which XML fragment is well-formed?",
    "options": [
      "<A></a>",
      "<a><b></a>",
      "<a><b></b></a>",
      "<a><b></a></b>"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Well-formed XML requires properly nested, matching, case-sensitive start and end tags. Only <a><b></b></a> satisfies those rules.",
    "source": {
      "kind": "original",
      "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
      "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
      "checkedOn": "2026-08-29"
    }
  }
];
