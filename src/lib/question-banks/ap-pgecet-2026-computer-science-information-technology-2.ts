import type { Question } from '../questions';

export const AP_PGECET_2026_COMPUTER_SCIENCE_INFORMATION_TECHNOLOGY_2: Question[] = [
    {
      "id": "ap-pgecet-2026-cs-121",
      "section": "Computer Science & Information Technology",
      "topic": "Probability and Statistics \u2014 Bayes' theorem",
      "difficulty": "medium",
      "question": "A binary channel flips each transmitted bit with probability 0.1. If 0 and 1 are equally likely to be sent, what is the probability that a bit received as 1 was actually sent as 1?",
      "options": [
        "0.10",
        "0.50",
        "0.82",
        "0.90"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "P(sent 1 | received 1) = (0.5 x 0.9) / (0.5 x 0.9 + 0.5 x 0.1) = 0.45/0.50 = 0.90.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-122",
      "section": "Computer Science & Information Technology",
      "topic": "Probability and Statistics \u2014 variance",
      "difficulty": "medium",
      "question": "A fair six-sided die is rolled once. What is the variance of the number shown?",
      "options": [
        "17/12",
        "35/12",
        "7/2",
        "91/6"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "E[X] = 3.5 and E[X^2] = 91/6, so Var(X) = 91/6 - (7/2)^2 = 91/6 - 49/4 = 35/12.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-123",
      "section": "Computer Science & Information Technology",
      "topic": "Probability and Statistics \u2014 Bernoulli trials",
      "difficulty": "easy",
      "question": "Ten independent trials each succeed with probability 0.5. What is the probability that all ten succeed?",
      "options": [
        "1/100",
        "1/512",
        "1/1024",
        "1/2"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The trials are independent, so the probability is 0.5^10 = 1/1024.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-124",
      "section": "Computer Science & Information Technology",
      "topic": "Probability and Statistics \u2014 expectation of a function",
      "difficulty": "medium",
      "question": "A random variable X takes the values 1, 2 and 4 with probabilities 0.2, 0.5 and 0.3 respectively. What is E[X^2]?",
      "options": [
        "2.7",
        "4.9",
        "7.0",
        "9.0"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "E[X^2] = 0.2(1) + 0.5(4) + 0.3(16) = 0.2 + 2.0 + 4.8 = 7.0.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-125",
      "section": "Computer Science & Information Technology",
      "topic": "Set Theory & Algebra \u2014 lattices",
      "difficulty": "medium",
      "question": "In the lattice of divisors of 30 ordered by divisibility, what is the least upper bound of 5 and 6?",
      "options": [
        "1",
        "15",
        "30",
        "60"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The least upper bound under divisibility is the lcm; lcm(5, 6) = 30, which is a divisor of 30.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-126",
      "section": "Computer Science & Information Technology",
      "topic": "Set Theory & Algebra \u2014 equivalence relations",
      "difficulty": "medium",
      "question": "How many distinct equivalence relations can be defined on a set of exactly 3 elements?",
      "options": [
        "3",
        "5",
        "8",
        "15"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Equivalence relations correspond to set partitions, counted by the Bell number B(3) = 5.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-127",
      "section": "Computer Science & Information Technology",
      "topic": "Set Theory & Algebra \u2014 order of an element",
      "difficulty": "medium",
      "question": "In the group (Z12, +), what is the order of the element 8?",
      "options": [
        "2",
        "3",
        "4",
        "6"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The order is 12/gcd(8, 12) = 12/4 = 3, since 8 + 8 + 8 = 24 = 0 (mod 12).",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-128",
      "section": "Computer Science & Information Technology",
      "topic": "Linear Algebra \u2014 determinants",
      "difficulty": "medium",
      "question": "What is the determinant of the matrix [[2, 0, 1], [1, 3, 2], [0, 1, 4]]?",
      "options": [
        "17",
        "19",
        "21",
        "23"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Expanding along the first row: 2(3x4 - 2x1) - 0 + 1(1x1 - 3x0) = 2(10) + 1 = 21.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-129",
      "section": "Computer Science & Information Technology",
      "topic": "Linear Algebra \u2014 rank",
      "difficulty": "easy",
      "question": "What is the rank of the matrix [[1, 2, 3], [2, 4, 6], [1, 1, 1]]?",
      "options": [
        "0",
        "1",
        "2",
        "3"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The second row is twice the first, so it adds nothing. Rows 1 and 3 are independent, giving rank 2.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-130",
      "section": "Computer Science & Information Technology",
      "topic": "Linear Algebra \u2014 characteristic polynomial",
      "difficulty": "medium",
      "question": "What are the eigenvalues of [[4, 1], [2, 3]]?",
      "options": [
        "1 and 6",
        "2 and 5",
        "3 and 4",
        "-2 and -5"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Trace = 7 and determinant = 10, so the characteristic equation is L^2 - 7L + 10 = 0, giving L = 2 and L = 5.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-131",
      "section": "Computer Science & Information Technology",
      "topic": "Linear Algebra \u2014 singular matrices",
      "difficulty": "easy",
      "question": "For which value of k is the matrix [[k, 2], [3, 6]] singular?",
      "options": [
        "0",
        "1",
        "2",
        "3"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The matrix is singular when its determinant 6k - 6 equals 0, that is when k = 1.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-132",
      "section": "Computer Science & Information Technology",
      "topic": "Numerical Methods \u2014 Simpson's one-third rule",
      "difficulty": "medium",
      "question": "Simpson's 1/3 rule is applied to f(x) = x^2 over [0, 2] using two subintervals. What estimate does it give?",
      "options": [
        "8/3",
        "2",
        "3",
        "4"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "With h = 1 the rule gives (h/3)[f(0) + 4f(1) + f(2)] = (1/3)(0 + 4 + 4) = 8/3, which is also the exact value since the rule is exact for quadratics.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-133",
      "section": "Computer Science & Information Technology",
      "topic": "Numerical Methods \u2014 fixed-point iteration",
      "difficulty": "easy",
      "question": "The iteration x(n+1) = g(x(n)) converges to a fixed point p of g when which condition holds near p?",
      "options": [
        "|g'(p)| > 1",
        "g(p) = 0",
        "g'(p) = 0 is required",
        "|g'(p)| < 1"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Local convergence of fixed-point iteration requires the derivative to be a contraction near p, that is |g'(p)| < 1.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-134",
      "section": "Computer Science & Information Technology",
      "topic": "Numerical Methods \u2014 partial pivoting",
      "difficulty": "easy",
      "question": "Why is partial pivoting used during Gaussian elimination?",
      "options": [
        "To reduce the total number of arithmetic operations",
        "To make the coefficient matrix symmetric",
        "To guarantee an integer solution",
        "To avoid dividing by very small pivots and limit round-off growth"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Partial pivoting swaps in the largest available pivot, which prevents division by a near-zero value and keeps round-off error from being amplified.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-135",
      "section": "Computer Science & Information Technology",
      "topic": "Numerical Methods \u2014 Euler's method",
      "difficulty": "easy",
      "question": "Euler's method with step size h = 0.1 is applied to dy/dx = y with y(0) = 1. What is the estimate of y at x = 0.1?",
      "options": [
        "1.000",
        "1.100",
        "1.105",
        "1.200"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Euler's method gives y1 = y0 + h f(x0, y0) = 1 + 0.1(1) = 1.1. The exact value e^0.1 = 1.105 is not what this first-order method returns.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-136",
      "section": "Computer Science & Information Technology",
      "topic": "Calculus \u2014 definite integrals",
      "difficulty": "easy",
      "question": "What is the value of the integral of (3x^2 + 2x) with respect to x from 0 to 1?",
      "options": [
        "1",
        "2",
        "3",
        "5"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The antiderivative is x^3 + x^2, which evaluates to (1 + 1) - 0 = 2.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-137",
      "section": "Computer Science & Information Technology",
      "topic": "Calculus \u2014 chain rule",
      "difficulty": "medium",
      "question": "What is the derivative of ln(x^2 + 1) evaluated at x = 1?",
      "options": [
        "0",
        "1/2",
        "1",
        "2"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The derivative is 2x/(x^2 + 1); at x = 1 this is 2/2 = 1.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-138",
      "section": "Computer Science & Information Technology",
      "topic": "Calculus \u2014 Maclaurin series",
      "difficulty": "easy",
      "question": "In the Maclaurin series of e^x, what is the coefficient of x^3?",
      "options": [
        "1/2",
        "1/3",
        "1/6",
        "1/24"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The series is the sum of x^n/n!, so the x^3 coefficient is 1/3! = 1/6.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-139",
      "section": "Computer Science & Information Technology",
      "topic": "Calculus \u2014 limits",
      "difficulty": "medium",
      "question": "What is the limit of sin(3x)/(5x) as x approaches 0?",
      "options": [
        "0",
        "3/5",
        "1",
        "5/3"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Since sin(3x) behaves like 3x for small x, the ratio tends to 3x/5x = 3/5.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-140",
      "section": "Computer Science & Information Technology",
      "topic": "Calculus \u2014 differentiability",
      "difficulty": "easy",
      "question": "The function f(x) = |x - 2| is continuous everywhere. At which point does it fail to be differentiable?",
      "options": [
        "x = 0",
        "x = 1",
        "x = 2",
        "It is differentiable everywhere"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The absolute-value corner sits where the argument is zero, at x = 2, where the left and right derivatives are -1 and +1.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-141",
      "section": "Computer Science & Information Technology",
      "topic": "Combinatorics \u2014 permutations with repetition",
      "difficulty": "medium",
      "question": "How many distinct arrangements can be made from all the letters of the word BANANA?",
      "options": [
        "60",
        "120",
        "180",
        "720"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "There are 6 letters with A repeated 3 times and N twice, giving 6!/(3! 2! 1!) = 720/12 = 60.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-142",
      "section": "Computer Science & Information Technology",
      "topic": "Combinatorics \u2014 pigeonhole principle",
      "difficulty": "easy",
      "question": "What is the smallest group size that guarantees at least two people share a birth month?",
      "options": [
        "12",
        "13",
        "24",
        "25"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "With 12 months, 12 people could all differ; the 13th person forces a repeat by the pigeonhole principle.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-143",
      "section": "Computer Science & Information Technology",
      "topic": "Combinatorics \u2014 binomial coefficients",
      "difficulty": "easy",
      "question": "What is the value of C(8, 3)?",
      "options": [
        "24",
        "56",
        "112",
        "336"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "C(8, 3) = (8 x 7 x 6)/(3 x 2 x 1) = 336/6 = 56.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-144",
      "section": "Computer Science & Information Technology",
      "topic": "Combinatorics \u2014 derangements",
      "difficulty": "hard",
      "question": "In how many ways can 4 distinct letters be placed into 4 addressed envelopes so that no letter goes into its own envelope?",
      "options": [
        "6",
        "9",
        "12",
        "24"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "This is the derangement count D(4) = 4!(1 - 1/1! + 1/2! - 1/3! + 1/4!) = 24(9/24) = 9.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-145",
      "section": "Computer Science & Information Technology",
      "topic": "Combinatorics \u2014 solving recurrences",
      "difficulty": "easy",
      "question": "What is the closed form of the recurrence a(n) = 2a(n-1) with a(0) = 3?",
      "options": [
        "2 x 3^n",
        "3 x 2^n",
        "3n^2",
        "2^n + 3"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Each step doubles the previous term, so a(n) = 3 x 2^n; checking a(0) = 3 confirms it.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-146",
      "section": "Computer Science & Information Technology",
      "topic": "Graph Theory \u2014 handshaking lemma",
      "difficulty": "medium",
      "question": "A simple graph has 10 edges and every vertex has degree exactly 4. How many vertices does it have?",
      "options": [
        "4",
        "5",
        "6",
        "10"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The degree sum is 2 x 10 = 20, and with every vertex of degree 4 that gives 20/4 = 5 vertices.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-147",
      "section": "Computer Science & Information Technology",
      "topic": "Graph Theory \u2014 Euler circuits",
      "difficulty": "easy",
      "question": "A connected graph contains an Euler circuit precisely when which condition holds?",
      "options": [
        "Every vertex has even degree",
        "Exactly two vertices have odd degree",
        "The graph is complete",
        "The graph contains no cycle"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "An Euler circuit enters and leaves each vertex equally often, so every vertex must have even degree in a connected graph.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-148",
      "section": "Computer Science & Information Technology",
      "topic": "Graph Theory \u2014 bipartite graphs",
      "difficulty": "medium",
      "question": "Which of these graphs is bipartite?",
      "options": [
        "K3",
        "C5",
        "C6",
        "K5"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "A graph is bipartite exactly when it has no odd cycle. C6 is an even cycle; K3 and C5 are odd cycles and K5 contains triangles.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-149",
      "section": "Computer Science & Information Technology",
      "topic": "Graph Theory \u2014 spanning trees",
      "difficulty": "medium",
      "question": "How many distinct labelled spanning trees does the complete graph K4 have?",
      "options": [
        "4",
        "8",
        "16",
        "64"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "By Cayley's formula the count is n^(n-2) = 4^2 = 16.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-150",
      "section": "Computer Science & Information Technology",
      "topic": "Graph Theory \u2014 chromatic number",
      "difficulty": "medium",
      "question": "What is the chromatic number of the cycle C7?",
      "options": [
        "2",
        "3",
        "4",
        "7"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "An odd cycle cannot be 2-coloured, and 3 colours always suffice, so the chromatic number is 3.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-151",
      "section": "Computer Science & Information Technology",
      "topic": "Graph Theory \u2014 complete graphs",
      "difficulty": "easy",
      "question": "How many edges does the complete graph K8 contain?",
      "options": [
        "16",
        "28",
        "56",
        "64"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The count is C(8, 2) = (8 x 7)/2 = 28.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-152",
      "section": "Computer Science & Information Technology",
      "topic": "Mathematical Logic \u2014 implication",
      "difficulty": "easy",
      "question": "The proposition p -> q is logically equivalent to which expression?",
      "options": [
        "p AND NOT q",
        "NOT p AND q",
        "q -> p",
        "NOT p OR q"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "An implication fails only when p is true and q is false, which is exactly the condition NOT(p AND NOT q) = NOT p OR q.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-153",
      "section": "Computer Science & Information Technology",
      "topic": "Mathematical Logic \u2014 De Morgan's laws",
      "difficulty": "easy",
      "question": "Which expression is equivalent to NOT (p AND q)?",
      "options": [
        "NOT p AND NOT q",
        "p -> q",
        "p OR q",
        "NOT p OR NOT q"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "De Morgan's law turns the negation of a conjunction into the disjunction of the negations.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-154",
      "section": "Computer Science & Information Technology",
      "topic": "Mathematical Logic \u2014 contrapositive",
      "difficulty": "medium",
      "question": "What is the contrapositive of 'If it rains, then the match is cancelled'?",
      "options": [
        "If the match is cancelled, then it rained",
        "If it does not rain, then the match is not cancelled",
        "If the match is not cancelled, then it did not rain",
        "It rains and the match is not cancelled"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The contrapositive of p -> q is NOT q -> NOT p, which negates and swaps both parts, and is logically equivalent to the original.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-155",
      "section": "Computer Science & Information Technology",
      "topic": "Mathematical Logic \u2014 quantifier negation",
      "difficulty": "medium",
      "question": "Which statement is equivalent to NOT (for all x, P(x))?",
      "options": [
        "for all x, NOT P(x)",
        "NOT (there exists x such that P(x))",
        "there exists x such that P(x)",
        "there exists x such that NOT P(x)"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Negating a universal quantifier yields an existential one over the negated predicate.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-156",
      "section": "Computer Science & Information Technology",
      "topic": "Digital Logic \u2014 number systems",
      "difficulty": "easy",
      "question": "What is the decimal value of the binary number 101101?",
      "options": [
        "41",
        "45",
        "53",
        "61"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "32 + 8 + 4 + 1 = 45.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-157",
      "section": "Computer Science & Information Technology",
      "topic": "Digital Logic \u2014 hexadecimal conversion",
      "difficulty": "easy",
      "question": "How is decimal 255 written in hexadecimal?",
      "options": [
        "EF",
        "FE",
        "FF",
        "F0"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "255 = 15 x 16 + 15, and 15 is F in hexadecimal, so the value is FF.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-158",
      "section": "Computer Science & Information Technology",
      "topic": "Digital Logic \u2014 Boolean simplification",
      "difficulty": "medium",
      "question": "The expression A + (NOT A)B simplifies to which of the following?",
      "options": [
        "A",
        "B",
        "A + B",
        "A AND B"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "By the absorption identity A + A'B = A + B, since whenever A is false the term reduces to B.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-159",
      "section": "Computer Science & Information Technology",
      "topic": "Digital Logic \u2014 multiplexers",
      "difficulty": "easy",
      "question": "How many select lines does a 4-to-1 multiplexer require?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Choosing among 4 inputs needs log2(4) = 2 select lines.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-160",
      "section": "Computer Science & Information Technology",
      "topic": "Digital Logic \u2014 decoders",
      "difficulty": "easy",
      "question": "How many output lines does a 3-to-8 decoder have?",
      "options": [
        "3",
        "6",
        "8",
        "16"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "A decoder with 3 input lines activates one of 2^3 = 8 outputs.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-161",
      "section": "Computer Science & Information Technology",
      "topic": "Digital Logic \u2014 flip-flops",
      "difficulty": "easy",
      "question": "What is the characteristic equation of a D flip-flop?",
      "options": [
        "Q(next) = D",
        "Q(next) = NOT D",
        "Q(next) = D AND Q",
        "Q(next) = D XOR Q"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "A D flip-flop simply transfers the value on D to the output at the active clock edge.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-162",
      "section": "Computer Science & Information Technology",
      "topic": "Digital Logic \u2014 Gray code",
      "difficulty": "medium",
      "question": "What is the Gray code equivalent of the binary number 1011?",
      "options": [
        "1110",
        "1101",
        "1011",
        "1111"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Gray code keeps the MSB and XORs adjacent bits: g3=1, g2=1 XOR 0=1, g1=0 XOR 1=1, g0=1 XOR 1=0, giving 1110.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-163",
      "section": "Computer Science & Information Technology",
      "topic": "Computer Organization and Architecture \u2014 direct-mapped cache",
      "difficulty": "medium",
      "question": "A direct-mapped cache has 64 blocks. Main-memory block number 100 maps to which cache block?",
      "options": [
        "4",
        "36",
        "64",
        "100"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Direct mapping uses block number modulo the number of cache blocks: 100 mod 64 = 36.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-164",
      "section": "Computer Science & Information Technology",
      "topic": "Computer Organization and Architecture \u2014 pipeline speedup",
      "difficulty": "easy",
      "question": "What is the ideal speedup of a 5-stage instruction pipeline over a non-pipelined implementation, ignoring hazards and overheads?",
      "options": [
        "2",
        "4",
        "5",
        "10"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "In the ideal case speedup equals the number of stages, so a 5-stage pipeline gives 5x.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-165",
      "section": "Computer Science & Information Technology",
      "topic": "Computer Organization and Architecture \u2014 average access time",
      "difficulty": "medium",
      "question": "A cache has a hit ratio of 0.9 and an access time of 10 ns. On a miss, main memory is accessed in a further 100 ns. What is the average access time?",
      "options": [
        "19 ns",
        "20 ns",
        "28 ns",
        "100 ns"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Average = 0.9(10) + 0.1(10 + 100) = 9 + 11 = 20 ns, since the cache is probed before memory on every reference.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-166",
      "section": "Computer Science & Information Technology",
      "topic": "Computer Organization and Architecture \u2014 indirect addressing",
      "difficulty": "medium",
      "question": "In indirect addressing mode, what does the address field of the instruction hold?",
      "options": [
        "The operand itself",
        "The address of the operand",
        "The address of a location that holds the address of the operand",
        "An offset added to the program counter"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Indirect addressing stores a pointer to a pointer: the address field names a location whose contents are the operand's address.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-167",
      "section": "Computer Science & Information Technology",
      "topic": "Computer Organization and Architecture \u2014 processor registers",
      "difficulty": "easy",
      "question": "Which register holds the address of the next instruction to be fetched?",
      "options": [
        "Accumulator",
        "Memory Buffer Register",
        "Instruction Register",
        "Program Counter"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The Program Counter tracks the address of the next instruction; the Instruction Register holds the one currently being decoded.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-168",
      "section": "Computer Science & Information Technology",
      "topic": "Computer Organization and Architecture \u2014 address bits",
      "difficulty": "medium",
      "question": "How many address bits are needed to address every byte of a 1 GB byte-addressable memory?",
      "options": [
        "20",
        "28",
        "30",
        "32"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "1 GB is 2^30 bytes, so 30 bits are required.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-169",
      "section": "Computer Science & Information Technology",
      "topic": "Computer Organization and Architecture \u2014 interrupt-driven I/O",
      "difficulty": "easy",
      "question": "What is the main advantage of interrupt-driven I/O over programmed I/O with polling?",
      "options": [
        "It transfers data in larger blocks",
        "It guarantees data is never lost",
        "It removes the need for device drivers",
        "The CPU is free to do other work instead of busy-waiting on the device"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "With interrupts the device signals the CPU when it is ready, so the processor need not repeatedly poll status while waiting.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-170",
      "section": "Computer Science & Information Technology",
      "topic": "Computer Organization and Architecture \u2014 cache write policies",
      "difficulty": "medium",
      "question": "In which write policy is main memory updated only when a modified cache block is evicted?",
      "options": [
        "Write-through",
        "Write-allocate",
        "Write-around",
        "Write-back"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Write-back defers the memory update until eviction, using a dirty bit to record that the block was modified.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-171",
      "section": "Computer Science & Information Technology",
      "topic": "Computer Organization and Architecture \u2014 control unit design",
      "difficulty": "medium",
      "question": "In a microprogrammed control unit, where are the control signals for each instruction stored?",
      "options": [
        "In the arithmetic logic unit",
        "In a fixed network of logic gates",
        "In the general-purpose register file",
        "In a control memory as microinstructions"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "A microprogrammed control unit keeps sequences of microinstructions in control memory; a hardwired unit instead uses fixed combinational logic.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-172",
      "section": "Computer Science & Information Technology",
      "topic": "Programming and Data Structures \u2014 stacks",
      "difficulty": "medium",
      "question": "What is the value of the postfix expression 5 3 + 2 *?",
      "options": [
        "11",
        "13",
        "16",
        "21"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Postfix evaluation pushes operands and applies operators to the top two: (5 + 3) = 8, then 8 x 2 = 16.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-173",
      "section": "Computer Science & Information Technology",
      "topic": "Programming and Data Structures \u2014 stacks",
      "difficulty": "hard",
      "question": "The values 1, 2, 3 are pushed onto a stack in that order, with pops allowed at any point. Which output sequence is impossible?",
      "options": [
        "3, 2, 1",
        "2, 3, 1",
        "3, 1, 2",
        "1, 3, 2"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "To output 3 first, all three must already be stacked as 1, 2, 3 with 3 on top; the next pop must then be 2, so 3, 1, 2 cannot occur.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-174",
      "section": "Computer Science & Information Technology",
      "topic": "Programming and Data Structures \u2014 binary search trees",
      "difficulty": "easy",
      "question": "An inorder traversal of a binary search tree visits the keys in which order?",
      "options": [
        "Ascending sorted order",
        "Descending sorted order",
        "Level by level",
        "The order in which they were inserted"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Inorder visits left subtree, node, right subtree, which for a BST yields the keys in ascending order.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-175",
      "section": "Computer Science & Information Technology",
      "topic": "Programming and Data Structures \u2014 binary search trees",
      "difficulty": "medium",
      "question": "The keys 50, 30, 70, 20, 40 are inserted in that order into an initially empty binary search tree. What is the height of the resulting tree, counted in edges?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "50 is the root with children 30 and 70, and 20 and 40 become children of 30, so the longest root-to-leaf path has 2 edges.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-176",
      "section": "Computer Science & Information Technology",
      "topic": "Programming and Data Structures \u2014 queues from stacks",
      "difficulty": "medium",
      "question": "What is the minimum number of stacks needed to implement a queue?",
      "options": [
        "1",
        "2",
        "3",
        "4"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Two stacks suffice: one receives pushes and the other serves pops, with elements transferred between them to reverse the order.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-177",
      "section": "Computer Science & Information Technology",
      "topic": "Programming and Data Structures \u2014 linked lists",
      "difficulty": "easy",
      "question": "What is the worst-case time to access the k-th element of a singly linked list of n elements?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "A linked list has no random access, so reaching the k-th node requires walking from the head, which is O(n) in the worst case.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-178",
      "section": "Computer Science & Information Technology",
      "topic": "Programming and Data Structures \u2014 doubly linked lists",
      "difficulty": "medium",
      "question": "Given a pointer to a node in a doubly linked list, what is the time to delete that node?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Both neighbours are reachable through the node's own prev and next pointers, so relinking takes constant time.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-179",
      "section": "Computer Science & Information Technology",
      "topic": "Programming and Data Structures \u2014 binary heaps",
      "difficulty": "medium",
      "question": "How many leaf nodes does a complete binary tree with 15 nodes have?",
      "options": [
        "4",
        "7",
        "8",
        "15"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "A complete binary tree with 15 nodes is perfect of height 3, so it has 2^3 = 8 leaves.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-180",
      "section": "Computer Science & Information Technology",
      "topic": "Programming and Data Structures \u2014 recursion",
      "difficulty": "easy",
      "question": "For the recurrence f(n) = f(n-1) + f(n-2) with f(0) = 0 and f(1) = 1, what is f(7)?",
      "options": [
        "8",
        "13",
        "21",
        "34"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The sequence runs 0, 1, 1, 2, 3, 5, 8, 13, so f(7) = 13.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-181",
      "section": "Computer Science & Information Technology",
      "topic": "Programming and Data Structures \u2014 strings in C",
      "difficulty": "medium",
      "question": "In C, what does sizeof(\"hello\") evaluate to?",
      "options": [
        "5",
        "It depends on the compiler",
        "7",
        "6"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "A string literal is a character array including the terminating null byte, so it occupies 6 bytes.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-182",
      "section": "Computer Science & Information Technology",
      "topic": "Programming and Data Structures \u2014 pointers in C",
      "difficulty": "medium",
      "question": "If an array is declared as int a[5], what is the type of the expression a + 2?",
      "options": [
        "int",
        "int**",
        "int[5]",
        "int*"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The array name decays to a pointer to its first element, so a + 2 is an int* pointing at a[2].",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-183",
      "section": "Computer Science & Information Technology",
      "topic": "Programming and Data Structures \u2014 circular queues",
      "difficulty": "medium",
      "question": "A circular queue is held in an array of size n with front and rear indices. Which condition indicates that the queue is full?",
      "options": [
        "rear == front",
        "front == 0 and rear == n - 1",
        "rear == n - 1",
        "(rear + 1) % n == front"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "One slot is kept empty to distinguish full from empty, so the queue is full when advancing rear would collide with front.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-184",
      "section": "Computer Science & Information Technology",
      "topic": "Algorithms and Complexity \u2014 master theorem",
      "difficulty": "easy",
      "question": "What is the solution of the recurrence T(n) = 2T(n/2) + n?",
      "options": [
        "Theta(n)",
        "Theta(log n)",
        "Theta(n^2)",
        "Theta(n log n)"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "This is the balanced case of the master theorem, where the work per level is n across log n levels, giving Theta(n log n).",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-185",
      "section": "Computer Science & Information Technology",
      "topic": "Algorithms and Complexity \u2014 merge sort",
      "difficulty": "easy",
      "question": "What is the worst-case running time of merge sort on n elements?",
      "options": [
        "Theta(n)",
        "Theta(log n)",
        "Theta(n^2)",
        "Theta(n log n)"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Merge sort always splits in half and merges linearly, so its running time is Theta(n log n) in every case.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-186",
      "section": "Computer Science & Information Technology",
      "topic": "Algorithms and Complexity \u2014 insertion sort",
      "difficulty": "medium",
      "question": "What is the best-case running time of insertion sort, and on what input does it occur?",
      "options": [
        "Theta(n) on an already sorted array",
        "Theta(n log n) on a random array",
        "Theta(n^2) on a reverse-sorted array",
        "Theta(1) on any array"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "On sorted input each element needs only one comparison before staying put, giving Theta(n).",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-187",
      "section": "Computer Science & Information Technology",
      "topic": "Algorithms and Complexity \u2014 Dijkstra's algorithm",
      "difficulty": "medium",
      "question": "What is the running time of Dijkstra's algorithm on a graph with V vertices and E edges using a binary heap?",
      "options": [
        "O(V^2)",
        "O(E + V)",
        "O(VE)",
        "O((V + E) log V)"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Each vertex is extracted once and each edge may trigger a decrease-key, and both heap operations cost O(log V).",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-188",
      "section": "Computer Science & Information Technology",
      "topic": "Algorithms and Complexity \u2014 Kruskal's algorithm",
      "difficulty": "medium",
      "question": "Which data structure lets Kruskal's algorithm test efficiently whether adding an edge would create a cycle?",
      "options": [
        "A priority queue",
        "An adjacency matrix",
        "A hash table",
        "A disjoint-set (union-find) structure"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Union-find tracks which vertices are already connected, so an edge joining two vertices of the same set would close a cycle.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-189",
      "section": "Computer Science & Information Technology",
      "topic": "Algorithms and Complexity \u2014 depth-first search",
      "difficulty": "medium",
      "question": "The presence of which edge type in a depth-first search of a directed graph indicates a cycle?",
      "options": [
        "A back edge",
        "A tree edge",
        "A forward edge",
        "A cross edge"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "A back edge points to an ancestor still on the recursion stack, which closes a cycle.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-190",
      "section": "Computer Science & Information Technology",
      "topic": "Algorithms and Complexity \u2014 dynamic programming",
      "difficulty": "medium",
      "question": "What is the running time of the standard dynamic-programming solution to the 0/1 knapsack problem with n items and capacity W?",
      "options": [
        "O(n log W)",
        "O(2^n)",
        "O(n^2)",
        "O(nW)"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The table has n x W entries each filled in constant time. This is pseudo-polynomial, since W is exponential in its own bit length.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-191",
      "section": "Computer Science & Information Technology",
      "topic": "Algorithms and Complexity \u2014 greedy algorithms",
      "difficulty": "medium",
      "question": "Huffman coding builds which kind of code, and by what strategy?",
      "options": [
        "An optimal prefix code, by repeatedly merging the two least frequent symbols",
        "A fixed-length code, by sorting symbols alphabetically",
        "A prefix code, by dynamic programming over all splits",
        "A block code, by dividing symbols into equal groups"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Huffman's greedy merge of the two lowest-frequency nodes yields a prefix code of minimum expected length.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-192",
      "section": "Computer Science & Information Technology",
      "topic": "Algorithms and Complexity \u2014 binary search",
      "difficulty": "medium",
      "question": "How many comparisons does binary search make in the worst case on a sorted array of 1023 elements?",
      "options": [
        "9",
        "10",
        "11",
        "1023"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Each comparison halves the range, and 1023 = 2^10 - 1, so at most 10 probes are needed.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-193",
      "section": "Computer Science & Information Technology",
      "topic": "Algorithms and Complexity \u2014 heap construction",
      "difficulty": "medium",
      "question": "What is the running time of building a binary heap from an unsorted array of n elements using the bottom-up method?",
      "options": [
        "O(log n)",
        "O(n^2)",
        "O(n log n)",
        "O(n)"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Nodes near the leaves sift down only a little; summing the work over all levels telescopes to O(n).",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-194",
      "section": "Computer Science & Information Technology",
      "topic": "Algorithms and Complexity \u2014 all-pairs shortest paths",
      "difficulty": "medium",
      "question": "What is the running time of the Floyd-Warshall algorithm on a graph with V vertices?",
      "options": [
        "O(V^2)",
        "O(V^2 log V)",
        "O(V^3)",
        "O(VE)"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The algorithm runs three nested loops over the vertex set, giving O(V^3).",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-195",
      "section": "Computer Science & Information Technology",
      "topic": "Algorithms and Complexity \u2014 NP-completeness",
      "difficulty": "hard",
      "question": "To prove that a problem X is NP-complete, what must be shown?",
      "options": [
        "X is in NP, and a known NP-complete problem reduces in polynomial time to X",
        "X is in NP, and X reduces in polynomial time to a known NP-complete problem",
        "X is in P, and X reduces to SAT",
        "X cannot be solved by any algorithm"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Hardness requires reducing a known NP-complete problem to X. Reducing X to a hard problem would only show X is no harder, which proves nothing.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-196",
      "section": "Computer Science & Information Technology",
      "topic": "Theory of Computation \u2014 machine models",
      "difficulty": "easy",
      "question": "Which machine model characterises exactly the class of context-free languages?",
      "options": [
        "Deterministic finite automaton",
        "Non-deterministic pushdown automaton",
        "Linear bounded automaton",
        "Deterministic Turing machine"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Non-deterministic pushdown automata accept precisely the context-free languages. Finite automata are weaker, and the other two models are strictly stronger.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-197",
      "section": "Computer Science & Information Technology",
      "topic": "Theory of Computation \u2014 closure properties of regular languages",
      "difficulty": "easy",
      "question": "Regular languages are closed under complementation. Which construction most directly justifies this?",
      "options": [
        "Swapping the accepting and non-accepting states of a complete DFA",
        "Adding \u03b5-transitions between the accepting states of an NFA",
        "Reversing every transition of a DFA",
        "Taking the union of a DFA with itself"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "For a complete DFA every input drives exactly one run, so exchanging accepting and non-accepting states accepts exactly the strings the original rejected. Completeness matters: the construction fails on an NFA.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-198",
      "section": "Computer Science & Information Technology",
      "topic": "Theory of Computation \u2014 minimal DFA size",
      "difficulty": "medium",
      "question": "What is the minimum number of states in a DFA over {a, b} that accepts exactly the strings containing `aba` as a substring?",
      "options": [
        "3",
        "4",
        "5",
        "8"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Track how much of the pattern has been matched: nothing, `a`, `ab`, and a trapping accepting state for `aba`. That is four states, and no smaller DFA distinguishes those prefixes.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-199",
      "section": "Computer Science & Information Technology",
      "topic": "Theory of Computation \u2014 subset construction",
      "difficulty": "medium",
      "question": "An NFA has n states. What is the tight upper bound on the number of states of an equivalent DFA produced by the subset construction?",
      "options": [
        "n",
        "n^2",
        "2^n",
        "n!"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Each DFA state is a subset of the NFA's states, so at most 2^n are reachable, and families of languages are known that actually need all of them.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-200",
      "section": "Computer Science & Information Technology",
      "topic": "Theory of Computation \u2014 language classification",
      "difficulty": "medium",
      "question": "Which statement about the language L = {a^n b^n : n \u2265 0} is correct?",
      "options": [
        "It is regular",
        "It is not recursively enumerable",
        "It is recursively enumerable but not context-free",
        "It is context-free but not regular"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "A pushdown automaton can count the a's on its stack, so L is context-free. No finite automaton can remember an unbounded count, so L is not regular.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-201",
      "section": "Computer Science & Information Technology",
      "topic": "Theory of Computation \u2014 closure properties of context-free languages",
      "difficulty": "medium",
      "question": "Context-free languages are closed under which of these operations?",
      "options": [
        "Intersection",
        "Complementation",
        "Union",
        "Set difference"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Union is obtained by a new start symbol S \u2192 S1 | S2. CFLs are not closed under intersection or complementation \u2014 the intersection of {a^n b^n c^m} and {a^m b^n c^n} is not context-free.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-202",
      "section": "Computer Science & Information Technology",
      "topic": "Theory of Computation \u2014 regular expressions",
      "difficulty": "medium",
      "question": "Which regular expression over {0, 1} denotes exactly the strings containing an even number of 0s?",
      "options": [
        "(1*01*01*)*",
        "1*(01*01*)*",
        "(01)*",
        "(0*1*)*"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Leading 1s are matched by 1*, after which every iteration contributes exactly two 0s. `(01)*` and `(0*1*)*` both accept `01`, which has a single 0, and `(1*01*01*)*` cannot produce `1` at all, since a non-empty iteration always forces two 0s.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-203",
      "section": "Computer Science & Information Technology",
      "topic": "Theory of Computation \u2014 decidability",
      "difficulty": "medium",
      "question": "Which of these problems is decidable?",
      "options": [
        "Whether the language of a given DFA is empty",
        "Whether an arbitrary Turing machine halts on the empty tape",
        "Whether two arbitrary context-free grammars generate the same language",
        "Whether an arbitrary Turing machine accepts a given string"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "DFA emptiness reduces to a reachability search from the start state to any accepting state, which always terminates. The other three are classic undecidable problems.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-204",
      "section": "Computer Science & Information Technology",
      "topic": "Compiler Design \u2014 phases of a compiler",
      "difficulty": "easy",
      "question": "Which compiler phase consumes the token stream produced by the lexical analyser?",
      "options": [
        "Syntax analysis",
        "Code generation",
        "Register allocation",
        "Symbol-table construction"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The parser (syntax analysis) reads tokens and builds a parse tree. Code generation and register allocation come much later in the pipeline.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-205",
      "section": "Computer Science & Information Technology",
      "topic": "Compiler Design \u2014 symbol table",
      "difficulty": "easy",
      "question": "What is the primary purpose of a compiler's symbol table?",
      "options": [
        "To store the machine code emitted for each function",
        "To buffer the source file during reading",
        "To hold the regular expressions used by the scanner",
        "To record identifiers together with attributes such as type and scope"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The symbol table maps each declared name to attributes \u2014 type, scope, storage \u2014 that later phases need for checking and code generation.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-206",
      "section": "Computer Science & Information Technology",
      "topic": "Compiler Design \u2014 FIRST and FOLLOW sets",
      "difficulty": "medium",
      "question": "For the grammar S \u2192 aB | \u03b5 and B \u2192 bB | c, what is FIRST(S)?",
      "options": [
        "{a, \u03b5}",
        "{a}",
        "{a, b, c}",
        "{b, c, \u03b5}"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "S derives strings starting with `a`, and S also derives \u03b5 directly, so \u03b5 belongs to FIRST(S) as well.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-207",
      "section": "Computer Science & Information Technology",
      "topic": "Compiler Design \u2014 LR parser families",
      "difficulty": "medium",
      "question": "Ordering the parser families by the set of grammars they can handle, which relation is correct?",
      "options": [
        "SLR(1) \u2286 LALR(1) \u2286 canonical LR(1)",
        "canonical LR(1) \u2286 LALR(1) \u2286 SLR(1)",
        "LALR(1) \u2286 SLR(1) \u2286 canonical LR(1)",
        "All three families handle exactly the same grammars"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Canonical LR(1) is the most powerful; LALR(1) merges LR(1) states with identical cores and so accepts fewer grammars; SLR(1) uses FOLLOW sets for reductions and is weaker still.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-208",
      "section": "Computer Science & Information Technology",
      "topic": "Compiler Design \u2014 bottom-up parsing",
      "difficulty": "medium",
      "question": "A shift-reduce parser that reduces a handle at each step effectively constructs which derivation?",
      "options": [
        "A leftmost derivation, read forwards",
        "An arbitrary derivation determined by the lookahead",
        "A leftmost derivation, read in reverse",
        "A rightmost derivation, read in reverse"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Each reduction replaces the handle \u2014 the leftmost complete right-hand side \u2014 so replaying the reductions backwards traces a rightmost derivation from the start symbol.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-209",
      "section": "Computer Science & Information Technology",
      "topic": "Compiler Design \u2014 code optimisation",
      "difficulty": "medium",
      "question": "Replacing the multiplication in `y = x * 8` with the shift `y = x << 3` is an example of which optimisation?",
      "options": [
        "Strength reduction",
        "Constant folding",
        "Dead-code elimination",
        "Loop unrolling"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Strength reduction substitutes a cheaper operation for a costlier one that computes the same value. Constant folding would evaluate an expression whose operands are all constants.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-210",
      "section": "Computer Science & Information Technology",
      "topic": "Compiler Design \u2014 three-address code",
      "difficulty": "medium",
      "question": "How many temporary variables does a straightforward three-address translation of `a = b * c + d * e` introduce?",
      "options": [
        "1",
        "2",
        "3",
        "5"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "t1 = b * c; t2 = d * e; t3 = t1 + t2; a = t3 \u2014 three temporaries, one per interior node of the expression tree.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-211",
      "section": "Computer Science & Information Technology",
      "topic": "Operating System \u2014 context switching",
      "difficulty": "easy",
      "question": "What happens during a context switch between two processes?",
      "options": [
        "The CPU state of the running process is saved and that of the next process is restored",
        "The running process's address space is written to disk in full",
        "All open files of the running process are closed",
        "The process is terminated and later recreated"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The kernel saves registers, program counter and related state into the outgoing PCB and loads the incoming one. Nothing is terminated and no full memory dump is needed.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-212",
      "section": "Computer Science & Information Technology",
      "topic": "Operating System \u2014 privileged execution",
      "difficulty": "easy",
      "question": "Why must an instruction that manipulates I/O device registers be privileged?",
      "options": [
        "It executes faster in kernel mode",
        "It cannot be encoded in the user instruction set",
        "It requires more registers than user mode provides",
        "It would otherwise let any user process bypass protection and interfere with other processes"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Restricting such instructions to kernel mode is what forces device access to go through system calls, where the OS can enforce protection.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-213",
      "section": "Computer Science & Information Technology",
      "topic": "Operating System \u2014 CPU scheduling",
      "difficulty": "medium",
      "question": "Four processes arrive at time 0 with CPU bursts 8, 4, 2 and 6 ms. Under shortest-job-first scheduling, what is the average waiting time?",
      "options": [
        "4.0 ms",
        "5.0 ms",
        "6.0 ms",
        "10.0 ms"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "SJF runs them in the order 2, 4, 6, 8, giving waiting times 0, 2, 6 and 12 ms. The average is 20/4 = 5.0 ms.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-214",
      "section": "Computer Science & Information Technology",
      "topic": "Operating System \u2014 page replacement",
      "difficulty": "medium",
      "question": "With three initially empty frames and FIFO replacement, how many page faults occur for the reference string 1, 2, 3, 4, 1, 2?",
      "options": [
        "3",
        "4",
        "5",
        "6"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Every reference faults: 1, 2, 3 fill the frames, 4 evicts 1, then 1 evicts 2 and 2 evicts 3. That is six faults.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-215",
      "section": "Computer Science & Information Technology",
      "topic": "Operating System \u2014 Belady's anomaly",
      "difficulty": "medium",
      "question": "Belady's anomaly \u2014 more frames producing more page faults \u2014 can occur under which replacement policy?",
      "options": [
        "FIFO",
        "LRU",
        "Optimal (OPT)",
        "Any policy that is a stack algorithm"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Stack algorithms such as LRU and OPT keep the pages held with k frames as a subset of those held with k+1, which rules the anomaly out. FIFO is not a stack algorithm.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-216",
      "section": "Computer Science & Information Technology",
      "topic": "Operating System \u2014 counting semaphores",
      "difficulty": "medium",
      "question": "A bounded buffer holds at most 5 items. In the standard producer-consumer solution, what are the initial values of the `empty` and `full` semaphores?",
      "options": [
        "empty = 5, full = 0",
        "empty = 0, full = 5",
        "empty = 5, full = 5",
        "empty = 1, full = 1"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "`empty` counts free slots and starts at the buffer size 5; `full` counts stored items and starts at 0, so a consumer blocks until a producer signals it.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-217",
      "section": "Computer Science & Information Technology",
      "topic": "Operating System \u2014 disk scheduling",
      "difficulty": "medium",
      "question": "The disk head is at cylinder 50 and the pending requests are 82, 34, 60 and 40. Under shortest-seek-time-first, what is the total head movement in cylinders?",
      "options": [
        "48",
        "68",
        "84",
        "96"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "SSTF serves 60, then 40, 34 and 82: |60-50| + |40-60| + |34-40| + |82-34| = 10 + 20 + 6 + 48 = 84 cylinders.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-218",
      "section": "Computer Science & Information Technology",
      "topic": "Operating System \u2014 banker's algorithm",
      "difficulty": "hard",
      "question": "A system has 12 instances of one resource type. P1 holds 5 with a maximum need of 10, P2 holds 2 with a maximum need of 4, and P3 holds 3 with a maximum need of 9. Which sequence shows the state is safe?",
      "options": [
        "P1, P2, P3",
        "No safe sequence exists",
        "P3, P2, P1",
        "P2, P1, P3"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Two instances are free. Only P2 (needing 2 more) can finish; it releases 4, leaving 6 free, which covers P1's remaining 5; P1 then releases 10, leaving 11 for P3's remaining 6.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-219",
      "section": "Computer Science & Information Technology",
      "topic": "Databases \u2014 referential integrity",
      "difficulty": "easy",
      "question": "What does a foreign-key constraint enforce?",
      "options": [
        "Every value in the referencing column matches an existing key value in the referenced relation",
        "The referencing column contains only distinct values",
        "The referencing column can never be updated",
        "The two relations are stored in the same physical file"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Referential integrity requires each non-null foreign-key value to appear as a key value in the referenced relation. Uniqueness is a different constraint.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-220",
      "section": "Computer Science & Information Technology",
      "topic": "Databases \u2014 SQL data definition",
      "difficulty": "easy",
      "question": "Which SQL statement removes both the rows of a table and its definition from the schema?",
      "options": [
        "DELETE FROM employees",
        "TRUNCATE TABLE employees",
        "DROP TABLE employees",
        "ALTER TABLE employees"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "DROP TABLE removes the definition itself. DELETE and TRUNCATE remove rows but leave the table in the schema.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-221",
      "section": "Computer Science & Information Technology",
      "topic": "Databases \u2014 join cardinality",
      "difficulty": "medium",
      "question": "Relations R(A, B) and S(B, C) hold 100 and 50 tuples. If every B value in S matches exactly two tuples of R, how many tuples does the natural join R \u22c8 S produce?",
      "options": [
        "50",
        "100",
        "150",
        "5000"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Each of the 50 S tuples pairs with exactly two R tuples, giving 50 \u00d7 2 = 100 result tuples. The Cartesian product size 5000 would apply only without a join condition.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-222",
      "section": "Computer Science & Information Technology",
      "topic": "Databases \u2014 BCNF",
      "difficulty": "medium",
      "question": "Relation R(A, B, C) has the functional dependencies AB \u2192 C and C \u2192 A. Which statement is correct?",
      "options": [
        "R is in 3NF but not BCNF",
        "R is in BCNF",
        "R is not in 2NF",
        "R has no candidate key"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "AB and BC are candidate keys, so C is prime and C \u2192 A satisfies 3NF's prime-attribute exception. C is not a superkey, so BCNF is violated.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-223",
      "section": "Computer Science & Information Technology",
      "topic": "Databases \u2014 set operations in SQL",
      "difficulty": "medium",
      "question": "How does `UNION ALL` differ from `UNION` in SQL?",
      "options": [
        "UNION ALL keeps duplicate rows, UNION removes them",
        "UNION ALL removes duplicate rows, UNION keeps them",
        "UNION ALL sorts the result, UNION does not",
        "They are identical in every respect"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "UNION performs duplicate elimination, which usually costs a sort or hash. UNION ALL simply concatenates and is therefore cheaper.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-224",
      "section": "Computer Science & Information Technology",
      "topic": "Databases \u2014 third normal form",
      "difficulty": "medium",
      "question": "Decomposing a relation to eliminate a transitive dependency of a non-prime attribute on the primary key brings it into which normal form?",
      "options": [
        "First normal form",
        "Second normal form",
        "Third normal form",
        "Fourth normal form"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "3NF forbids a non-prime attribute from depending transitively on a candidate key. 2NF deals with partial dependencies, and 4NF with multivalued dependencies.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-225",
      "section": "Computer Science & Information Technology",
      "topic": "Databases \u2014 isolation levels",
      "difficulty": "medium",
      "question": "Under the SQL isolation level READ COMMITTED, which phenomenon can still occur?",
      "options": [
        "Dirty read",
        "Reading a value that was never written by any transaction",
        "Lost update of a committed write by the database engine itself",
        "Non-repeatable read"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "READ COMMITTED blocks dirty reads but releases read locks early, so re-reading a row within the same transaction can return a different committed value.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-226",
      "section": "Computer Science & Information Technology",
      "topic": "Databases \u2014 relational algebra",
      "difficulty": "medium",
      "question": "Which query is most directly expressed by the relational-algebra division operator R \u00f7 S?",
      "options": [
        "Find entities in R that are associated with every tuple in S",
        "Find tuples of R that appear in S",
        "Find tuples of R with no match in S",
        "Combine R and S on their common attributes"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Division answers 'for all' questions \u2014 for example, students who have taken every course listed in S.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-227",
      "section": "Computer Science & Information Technology",
      "topic": "Information Systems and Software Engineering \u2014 process models",
      "difficulty": "easy",
      "question": "Which characteristic best describes the classical waterfall model?",
      "options": [
        "Each phase is completed and signed off before the next begins",
        "Working software is delivered every two weeks",
        "Requirements are expected to change throughout the project",
        "Development and testing proceed concurrently from day one"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The waterfall model is strictly sequential with phase-end sign-off, which is exactly why it copes badly with late requirement changes.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-228",
      "section": "Computer Science & Information Technology",
      "topic": "Information Systems and Software Engineering \u2014 modularity",
      "difficulty": "medium",
      "question": "Which combination is the design goal for a well-structured software system?",
      "options": [
        "High coupling and low cohesion",
        "High coupling and high cohesion",
        "Low coupling and low cohesion",
        "Low coupling and high cohesion"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "High cohesion keeps each module focused on one responsibility; low coupling keeps modules independent, so a change in one rarely forces changes elsewhere.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-229",
      "section": "Computer Science & Information Technology",
      "topic": "Information Systems and Software Engineering \u2014 testing strategies",
      "difficulty": "medium",
      "question": "Which testing technique derives test cases from the internal control flow of the code rather than from the specification?",
      "options": [
        "White-box (structural) testing",
        "Boundary-value analysis",
        "Equivalence partitioning",
        "Acceptance testing"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "White-box testing uses the code structure \u2014 statements, branches, paths. Equivalence partitioning and boundary-value analysis are black-box techniques driven by the specification.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-230",
      "section": "Computer Science & Information Technology",
      "topic": "Information Systems and Software Engineering \u2014 requirements documentation",
      "difficulty": "medium",
      "question": "Which document records the agreed functional and non-functional requirements as the baseline between customer and developer?",
      "options": [
        "Software requirements specification (SRS)",
        "Software design description",
        "Test incident report",
        "User manual"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The SRS is the agreed baseline that design, implementation and acceptance testing are all validated against.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-231",
      "section": "Computer Science & Information Technology",
      "topic": "Information Systems and Software Engineering \u2014 cyclomatic complexity",
      "difficulty": "hard",
      "question": "A module's control flow graph has 14 edges, 11 nodes and one connected component. What is its cyclomatic complexity?",
      "options": [
        "3",
        "4",
        "5",
        "6"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "V(G) = E - N + 2P = 14 - 11 + 2 = 5, which is also the number of linearly independent paths through the module.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-232",
      "section": "Computer Science & Information Technology",
      "topic": "Computer Networks \u2014 internetworking devices",
      "difficulty": "easy",
      "question": "A LAN switch that forwards frames using MAC addresses operates primarily at which OSI layer?",
      "options": [
        "Physical layer",
        "Data link layer",
        "Network layer",
        "Transport layer"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "MAC addressing and frame forwarding belong to the data link layer. A repeater or hub works at the physical layer, and a router at the network layer.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-233",
      "section": "Computer Science & Information Technology",
      "topic": "Computer Networks \u2014 addressing",
      "difficulty": "easy",
      "question": "Which address is burned into a network interface card and used for delivery within a single physical network?",
      "options": [
        "IPv4 address",
        "Domain name",
        "Port number",
        "MAC address"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The MAC address identifies the interface on its local link. IP addresses are logical and can change; port numbers identify processes.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-234",
      "section": "Computer Science & Information Technology",
      "topic": "Computer Networks \u2014 sliding window protocols",
      "difficulty": "medium",
      "question": "Go-Back-N uses a 4-bit sequence number field. What is the maximum sender window size that still works correctly?",
      "options": [
        "4",
        "8",
        "15",
        "16"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "With 2^4 = 16 sequence numbers, Go-Back-N allows a window of 2^n - 1 = 15, so a delayed duplicate can never be mistaken for a new frame.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-235",
      "section": "Computer Science & Information Technology",
      "topic": "Computer Networks \u2014 CIDR subnetting",
      "difficulty": "medium",
      "question": "How many /26 subnets can be carved out of a single /24 IPv4 network?",
      "options": [
        "2",
        "4",
        "8",
        "64"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The prefix grows by two bits, so 2^2 = 4 subnets of 64 addresses each fit into the /24.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-236",
      "section": "Computer Science & Information Technology",
      "topic": "Computer Networks \u2014 medium access control",
      "difficulty": "medium",
      "question": "Why do wireless LANs use CSMA/CA rather than the CSMA/CD used by classic wired Ethernet?",
      "options": [
        "A wireless station generally cannot detect a collision while transmitting, partly because of hidden terminals",
        "Wireless frames are too short for collision detection to matter",
        "Collisions are impossible on a wireless medium",
        "CSMA/CA gives higher throughput on every medium"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "A radio transmits and receives on the same channel with vastly different signal strengths, and hidden terminals may be invisible to the sender, so collisions are avoided in advance instead of detected.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-237",
      "section": "Computer Science & Information Technology",
      "topic": "Computer Networks \u2014 throughput and window size",
      "difficulty": "medium",
      "question": "A TCP connection has a round-trip time of 50 ms and a fixed window of 50 KB. Ignoring losses and overheads, what is the approximate maximum throughput?",
      "options": [
        "1 Mbps",
        "8 Mbps",
        "80 Mbps",
        "400 Mbps"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "One window per RTT gives 50 KB / 0.05 s = 1 MB/s, and 1 MB/s is about 8 Mbps.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-238",
      "section": "Computer Science & Information Technology",
      "topic": "Computer Networks \u2014 address resolution",
      "difficulty": "medium",
      "question": "What does the Address Resolution Protocol (ARP) do?",
      "options": [
        "Maps a domain name to an IP address",
        "Maps a port number to an application process",
        "Assigns an IP address to a newly connected host",
        "Maps an IPv4 address to a MAC address on the local link"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "ARP broadcasts a request for the hardware address that owns a given IPv4 address on the same link. Name resolution is DNS's job and address assignment is DHCP's.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-239",
      "section": "Computer Science & Information Technology",
      "topic": "Web Technologies \u2014 session management",
      "difficulty": "medium",
      "question": "HTTP is stateless. Which mechanism most commonly lets a server associate successive requests with the same client?",
      "options": [
        "A cookie carrying a session identifier",
        "The client's MAC address",
        "The TCP sequence number",
        "The HTTP status code"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The server sets a cookie holding a session identifier and the browser returns it on later requests, letting the server look up the stored session state.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    },
    {
      "id": "ap-pgecet-2026-cs-240",
      "section": "Computer Science & Information Technology",
      "topic": "Web Technologies \u2014 client-side and server-side execution",
      "difficulty": "medium",
      "question": "Which statement about client-side JavaScript is correct?",
      "options": [
        "It runs in the browser and can modify the DOM without a further request to the server",
        "It runs on the web server and returns HTML to the browser",
        "It replaces HTTP as the transport protocol",
        "It can only run after the page has been fully reloaded"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Client-side JavaScript executes in the browser and can update the rendered document directly, which is what makes interactive pages possible without a round trip.",
      "source": {
        "kind": "original",
        "reference": "AP PGECET 2026 current official Computer Science & Information Technology syllabus and test pattern",
        "url": "https://cets.apsche.ap.gov.in/pgecet/PDF/Syllabus/APPGECET2026_Computer_Science.PDF",
        "checkedOn": "2026-08-29"
      }
    }
  ];
