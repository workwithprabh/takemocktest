import type { Question } from '../questions';

export const BITS_HD_2026_ME_CS_FULL_MOCK_1: Question[] = [
  {
    "section": "Core Mathematics",
    "topic": "Calculus",
    "difficulty": "medium",
    "question": "For f(x)=x^x with x>0, the value of f'(1) is",
    "options": [
      "2",
      "0",
      "1",
      "e"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Using logarithmic differentiation, f'(x)=x^x(ln x+1). At x=1 this equals 1.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-001"
  },
  {
    "section": "Core Mathematics",
    "topic": "Calculus",
    "difficulty": "medium",
    "question": "If F(x)=integral from 0 to x^2 of cos(t^2) dt, then F'(1) equals",
    "options": [
      "sin(1)",
      "2 sin(1)",
      "cos(1)",
      "2 cos(1)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "By the chain rule for variable upper limits, F'(x)=cos(x^4)2x, hence F'(1)=2 cos(1).",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-002"
  },
  {
    "section": "Core Mathematics",
    "topic": "Calculus",
    "difficulty": "medium",
    "question": "The double integral of (x+y) over the square 0<=x<=1, 0<=y<=1 is",
    "options": [
      "3/2",
      "2",
      "1",
      "1/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The integral of x over the unit square is 1/2 and that of y is 1/2, giving 1.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-003"
  },
  {
    "section": "Core Mathematics",
    "topic": "Linear Algebra",
    "difficulty": "medium",
    "question": "The vectors (1,0,1), (0,1,1), and (1,1,2) span a subspace of R^3 of dimension",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The third vector is the sum of the first two, while the first two are independent, so the span has dimension 2.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-004"
  },
  {
    "section": "Core Mathematics",
    "topic": "Complex Variables",
    "difficulty": "medium",
    "question": "The residue of 1/[z(z-2)] at z=0 is",
    "options": [
      "-1/2",
      "1/2",
      "2",
      "-2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For a simple pole at zero, the residue is lim z->0 1/(z-2)=-1/2.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-005"
  },
  {
    "section": "Core Mathematics",
    "topic": "Probability and Statistics",
    "difficulty": "medium",
    "question": "An integer is chosen uniformly from 1 through 60. Given that it is divisible by 6, what is the probability that it is also divisible by 18?",
    "options": [
      "3/10",
      "1/5",
      "1/3",
      "2/5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "There are 10 multiples of 6 up to 60 and 3 of them, 18, 36 and 54, are divisible by 18. The conditional probability is 3/10.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-006"
  },
  {
    "section": "Core Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "The initial-value problem y'=2x/y, y(0)=2 has y(sqrt(3)) equal to",
    "options": [
      "sqrt(7)",
      "5",
      "sqrt(10)",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Separate variables: y dy=2x dx, so y^2=2x^2+C. Using y(0)=2 gives C=4. At x=sqrt(3), y^2=10 and the solution through y=2 has y=sqrt(10).",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-007"
  },
  {
    "section": "Core Mathematics",
    "topic": "Numerical Methods",
    "difficulty": "medium",
    "question": "Starting from (x0,y0)=(0,0), one Gauss-Seidel sweep for the system 5x-y=9, -2x+6y=4, updating x before y, gives (x1,y1)=",
    "options": [
      "(9/5, 19/15)",
      "(9/5, 2/3)",
      "(2, 4/3)",
      "(19/15, 9/5)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Gauss-Seidel uses the newest available value. First, x1=(9+y0)/5=9/5. Then y1=(4+2x1)/6=(4+18/5)/6=19/15.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-008"
  },
  {
    "section": "Core Mathematics",
    "topic": "Calculus",
    "difficulty": "hard",
    "question": "The maximum value of xy subject to x^2+y^2=8 is",
    "options": [
      "4",
      "8",
      "2",
      "sqrt(8)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "By 2xy<=x^2+y^2=8, xy<=4, attained at x=y=2 or x=y=-2.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-009"
  },
  {
    "section": "Core Mathematics",
    "topic": "Linear Algebra",
    "difficulty": "hard",
    "question": "For the matrix [[1,2],[2,4]], the rank of A+I is",
    "options": [
      "3",
      "0",
      "2",
      "1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A+I=[[2,2],[2,5]] has determinant 10-4=6, so it has rank 2.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-010"
  },
  {
    "section": "Core Mathematics",
    "topic": "Complex Variables",
    "difficulty": "hard",
    "question": "The coefficient of 1/z in the Laurent expansion of e^z/z^2 about z=0 is",
    "options": [
      "1/2",
      "1",
      "0",
      "2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "e^z/z^2=z^-2+z^-1+1/2+..., so the coefficient of z^-1 is 1.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-011"
  },
  {
    "section": "Core Mathematics",
    "topic": "Probability and Statistics",
    "difficulty": "hard",
    "question": "Let X and Y be independent exponential random variables with rates 2 and 3 respectively. The probability P(X<Y<2X) is",
    "options": [
      "1/5",
      "3/20",
      "1/4",
      "2/5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For X=x, P(x<Y<2x)=e^(-3x)-e^(-6x). Hence P=integral_0^infinity 2e^(-2x)[e^(-3x)-e^(-6x)]dx =2/5-1/4=3/20.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-012"
  },
  {
    "section": "Core Mathematics",
    "topic": "Differential Equations",
    "difficulty": "hard",
    "question": "The solution of y''+3y'+2y=4e^(-3x) satisfies y(0)=1 and y'(0)=0. The value of y(ln 3) is",
    "options": [
      "23/27",
      "1",
      "19/27",
      "25/27"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The complementary solution is C1e^(-x)+C2e^(-2x), and a particular solution is 2e^(-3x). The initial conditions give C1=4 and C2=-5. Thus y=4e^(-x)-5e^(-2x)+2e^(-3x). At x=ln 3, y=4/3-5/9+2/27=23/27.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-013"
  },
  {
    "section": "Core Mathematics",
    "topic": "Numerical Methods",
    "difficulty": "medium",
    "question": "For the fixed-point iteration x_(n+1)=cos(x_n), a sufficient local convergence condition near a fixed point alpha is",
    "options": [
      "|sin(alpha)|<1",
      "sin(alpha)=0",
      "|cos(alpha)|<1",
      "|alpha|<1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A fixed-point iteration converges locally if |g'(alpha)|<1. Here g'(x)=-sin x.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-014"
  },
  {
    "section": "Core Mathematics",
    "topic": "Probability and Statistics",
    "difficulty": "medium",
    "question": "For a 95% confidence interval for a population mean with known variance, increasing the sample size by a factor of 4 changes the margin of error by a factor of",
    "options": [
      "1/4",
      "2",
      "1/2",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The margin is proportional to 1/sqrt(n), so quadrupling n halves it.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-015"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "English Language Skills",
    "difficulty": "easy",
    "question": "In the sentence \"The executive summary was concise but complete,\" the word \"concise\" most nearly means",
    "options": [
      "ornate",
      "hesitant",
      "ambiguous",
      "brief"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "In this context, concise means brief and to the point.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-016"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "English Language Skills",
    "difficulty": "medium",
    "question": "Complete the sentence: The proposal was rejected, not because it was impractical, _____ because its cost estimates were unsupported.",
    "options": [
      "although",
      "but",
      "so",
      "and"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The idiomatic contrast is \"not because..., but because...\".",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-017"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "English Language Skills",
    "difficulty": "medium",
    "question": "Select the sentence with correct parallel structure.",
    "options": [
      "The role requires planning projects, teams are coordinated, and reviewing reports.",
      "The role requires planning projects, coordinating teams, and reviewing reports.",
      "The role requires to plan projects, coordinating teams, and report review.",
      "The role requires planning projects, to coordinate teams, and reviewing reports."
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "All three elements use parallel gerund phrases.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-018"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "English Language Skills",
    "difficulty": "easy",
    "question": "Choose the correctly punctuated sentence.",
    "options": [
      "After, the meeting we revised the schedule.",
      "After the meeting we, revised the schedule.",
      "After the meeting, we revised the schedule.",
      "After the meeting we revised, the schedule."
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "An introductory phrase is naturally followed by a comma.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-019"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "English Language Skills",
    "difficulty": "easy",
    "question": "Choose the antonym of \"scarce\".",
    "options": [
      "insufficient",
      "abundant",
      "rare",
      "limited"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Abundant is the opposite of scarce.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-020"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "Logical Reasoning",
    "difficulty": "medium",
    "question": "Four tasks P,Q,R,S are scheduled one per hour. P is before Q, R is after Q, and S is before P. Which task must be first?",
    "options": [
      "S",
      "R",
      "Q",
      "P"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The constraints force S before P before Q before R.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-021"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "Logical Reasoning",
    "difficulty": "medium",
    "question": "If every red card is square, no square card is metal, and card K is red, which statement must be true?",
    "options": [
      "K is metal",
      "K is not square",
      "No red card exists",
      "K is not metal"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Red implies square, and square implies not metal.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-022"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "Logical Reasoning",
    "difficulty": "hard",
    "question": "Five people A,B,C,D,E sit in a row. B is immediately right of A. C is not at an end. D is left of A. If E is at the right end, who must be at the left end?",
    "options": [
      "B",
      "D",
      "C",
      "A"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "With E fixed at position 5 and AB consecutive, C cannot occupy position 1. D must be left of A, so D is forced to the leftmost position.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-023"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "English Language Skills",
    "difficulty": "medium",
    "question": "Choose the sentence that uses \"affect\" correctly.",
    "options": [
      "The outage may effect response time.",
      "The response time was affect by the outage.",
      "The outage may affect response time.",
      "The outage had an affect on response time."
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Affect is correctly used as a verb meaning influence.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-024"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "English Language Skills",
    "difficulty": "medium",
    "question": "Which revision removes the ambiguity in \"Riya told Meera that she had won\" if Riya was the winner?",
    "options": [
      "Riya told Meera, \"I have won.\"",
      "Riya told her that Meera had won.",
      "Riya told Meera that she had won.",
      "She told Meera that Riya had won."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The direct quotation makes the identity of the winner explicit.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-025"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "English Language Skills",
    "difficulty": "medium",
    "question": "A passage says: \"A cache can reduce average access time only when frequently needed data are found in it often enough to offset miss penalties.\" Which idea is central?",
    "options": [
      "Miss penalties are irrelevant to performance.",
      "A cache always eliminates memory latency.",
      "Only cache capacity determines performance.",
      "Cache benefit depends on hit behavior and miss cost."
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The sentence makes benefit conditional on hit frequency relative to miss penalty.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-026"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "English Language Skills",
    "difficulty": "easy",
    "question": "The phrase \"on the contrary\" is most appropriately used to",
    "options": [
      "introduce a direct contradiction",
      "summarize a list",
      "state a cause",
      "add a supporting example"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "On the contrary introduces a statement opposing a previous claim.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-027"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "Logical Reasoning",
    "difficulty": "easy",
    "question": "Which pair follows the same relation as 4:16?",
    "options": [
      "8:24",
      "9:27",
      "6:18",
      "7:49"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The second number is the square of the first.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-028"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "Logical Reasoning",
    "difficulty": "medium",
    "question": "In a ranking, M is above N but below P. Q is below N. Which ordering is forced from highest to lowest among these four?",
    "options": [
      "P, N, M, Q",
      "P, M, N, Q",
      "P, M, Q, N",
      "M, P, N, Q"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The relations are P>M>N>Q.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-029"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "Logical Reasoning",
    "difficulty": "medium",
    "question": "A table lists completed tickets: Team A 12, Team B 18, Team C 15, Team D 25. What percentage of all completed tickets were handled by Team D?",
    "options": [
      "about 35.7%",
      "40%",
      "30%",
      "25%"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The total is 70 and D handled 25, so 25/70=35.714...%.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-030"
  },
  {
    "section": "Computer Science",
    "topic": "Discrete Mathematics",
    "difficulty": "medium",
    "question": "How many binary strings of length 8 contain exactly three 1s?",
    "options": [
      "32",
      "64",
      "56",
      "24"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Choose the three positions of the 1s: C(8,3)=56.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-031"
  },
  {
    "section": "Computer Science",
    "topic": "Discrete Mathematics",
    "difficulty": "hard",
    "question": "The recurrence T(n)=2T(n/2)+n log n with T(1)=Theta(1) has asymptotic order",
    "options": [
      "Theta(n log^2 n)",
      "Theta(n log n)",
      "Theta(n^2)",
      "Theta(log^2 n)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Master theorem case 2 with f(n)=n log n gives Theta(n log^2 n).",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-032"
  },
  {
    "section": "Computer Science",
    "topic": "Discrete Mathematics",
    "difficulty": "medium",
    "question": "Which proposition is logically equivalent to p -> q?",
    "options": [
      "not p and q",
      "p and q",
      "not p or q",
      "p or not q"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Material implication gives p -> q equivalent to not p or q.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-033"
  },
  {
    "section": "Computer Science",
    "topic": "Discrete Mathematics",
    "difficulty": "easy",
    "question": "The number of edges in the complete graph K7 is",
    "options": [
      "14",
      "21",
      "28",
      "42"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "K_n has n(n-1)/2 edges, so K7 has 21.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-034"
  },
  {
    "section": "Computer Science",
    "topic": "Discrete Mathematics",
    "difficulty": "hard",
    "question": "A partially ordered set in which every pair of elements has both a least upper bound and a greatest lower bound is called",
    "options": [
      "a field",
      "a group",
      "a tree",
      "a lattice"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "That is the definition of a lattice.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-035"
  },
  {
    "section": "Computer Science",
    "topic": "Discrete Mathematics",
    "difficulty": "medium",
    "question": "A simple graph has 6 vertices and 7 edges. Its complement has how many edges?",
    "options": [
      "15",
      "9",
      "8",
      "7"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A complete graph on 6 vertices has C(6,2)=15 edges. The graph and its complement partition those edges, so the complement has 15-7=8.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-036"
  },
  {
    "section": "Computer Science",
    "topic": "Discrete Mathematics",
    "difficulty": "medium",
    "question": "If f:A->B and g:B->C are both injective, then g composed with f is",
    "options": [
      "surjective",
      "necessarily bijective",
      "injective",
      "constant"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A composition of injective functions is injective.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-037"
  },
  {
    "section": "Computer Science",
    "topic": "Theory of Computation",
    "difficulty": "medium",
    "question": "A DFA over {0,1} accepts exactly the strings whose number of 1s is divisible by 3. The minimum number of states is",
    "options": [
      "6",
      "2",
      "4",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The automaton must track the count of 1s modulo 3, requiring three distinguishable states.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-038"
  },
  {
    "section": "Computer Science",
    "topic": "Theory of Computation",
    "difficulty": "hard",
    "question": "The regular expression 1*(01*01*)* describes exactly the binary strings with",
    "options": [
      "an odd number of 0s",
      "no consecutive 1s",
      "an even number of 0s",
      "an even number of 1s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The expression introduces 0s only in pairs, while each 1* permits any number of 1s. Hence the number of 0s is even.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-039"
  },
  {
    "section": "Computer Science",
    "topic": "Theory of Computation",
    "difficulty": "hard",
    "question": "The grammar S -> aSb | epsilon generates",
    "options": [
      "{a^n b^(2n) | n>=0}",
      "{a^n b^n | n>=0}",
      "all palindromes over {a,b}",
      "{(ab)^n | n>=0}"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Each recursive use adds one a to the left and one b to the right.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-040"
  },
  {
    "section": "Computer Science",
    "topic": "Theory of Computation",
    "difficulty": "hard",
    "question": "If a language L is decidable, then",
    "options": [
      "both L and its complement are recursively enumerable",
      "L must be finite",
      "its complement is undecidable",
      "L cannot be regular"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A decider halts on every input, so both L and its complement are decidable and hence recursively enumerable.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-041"
  },
  {
    "section": "Computer Science",
    "topic": "Theory of Computation",
    "difficulty": "hard",
    "question": "Which closure property holds for context-free languages?",
    "options": [
      "closure under complement",
      "closure under set difference",
      "closure under intersection",
      "closure under union"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Context-free languages are closed under union, concatenation and Kleene star, but not generally under intersection or complement.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-042"
  },
  {
    "section": "Computer Science",
    "topic": "Theory of Computation",
    "difficulty": "hard",
    "question": "The halting problem for Turing machines is",
    "options": [
      "context-free but not regular",
      "undecidable",
      "decidable in exponential time",
      "regular"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "There is no algorithm that decides for every machine-input pair whether the machine halts.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-043"
  },
  {
    "section": "Computer Science",
    "topic": "Theory of Computation",
    "difficulty": "medium",
    "question": "The language of balanced parentheses with one type of parenthesis is naturally recognized by",
    "options": [
      "a pushdown automaton",
      "a regular expression of fixed length",
      "a finite transducer with no memory",
      "a 2-state DFA"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A stack can count unmatched opening parentheses and enforce proper nesting.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-044"
  },
  {
    "section": "Computer Science",
    "topic": "Data Structures and Algorithms",
    "difficulty": "easy",
    "question": "In a stack, the element removed by pop is the one that was",
    "options": [
      "inserted earliest",
      "assigned the smallest key",
      "stored at the smallest address",
      "inserted most recently"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A stack is LIFO: last in, first out.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-045"
  },
  {
    "section": "Computer Science",
    "topic": "Data Structures and Algorithms",
    "difficulty": "medium",
    "question": "With separate chaining, inserting a key into a hash table takes expected O(1) time when",
    "options": [
      "the table has exactly one bucket",
      "keys are stored in sorted order within one list",
      "the load factor is kept bounded",
      "all keys hash to the same bucket"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "With a good hash function and bounded load factor, expected chain length is constant.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-046"
  },
  {
    "section": "Computer Science",
    "topic": "Data Structures and Algorithms",
    "difficulty": "medium",
    "question": "Breadth-first search on an unweighted graph finds",
    "options": [
      "all-pairs shortest paths in one pass",
      "only depth-first trees",
      "minimum spanning trees in every weighted graph",
      "shortest paths in number of edges from the source"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "BFS explores vertices by nondecreasing distance in edge count.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-047"
  },
  {
    "section": "Computer Science",
    "topic": "Data Structures and Algorithms",
    "difficulty": "hard",
    "question": "Using union by rank together with path compression, a sequence of m disjoint-set operations on n elements takes",
    "options": [
      "Theta(m log^2 n)",
      "almost linear time, O(m alpha(n))",
      "Theta(mn)",
      "Theta(n^2) regardless of m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The standard amortized bound is O(m alpha(n)), where alpha is the inverse Ackermann function.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-048"
  },
  {
    "section": "Computer Science",
    "topic": "Data Structures and Algorithms",
    "difficulty": "hard",
    "question": "In a red-black tree with n internal nodes, the height is",
    "options": [
      "unbounded for fixed n",
      "O(log n)",
      "O(log log n)",
      "Theta(n) in every case"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Red-black balancing guarantees logarithmic height.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-049"
  },
  {
    "section": "Computer Science",
    "topic": "Data Structures and Algorithms",
    "difficulty": "medium",
    "question": "In an adjacency-list representation of an undirected graph, the sum of all list lengths equals",
    "options": [
      "2E",
      "V^2",
      "E",
      "V+E"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Each undirected edge appears once in each endpoint's adjacency list.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-050"
  },
  {
    "section": "Computer Science",
    "topic": "Data Structures and Algorithms",
    "difficulty": "easy",
    "question": "Binary search on a sorted array of n elements has worst-case time",
    "options": [
      "O(n log n)",
      "O(1)",
      "O(n)",
      "O(log n)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Each comparison halves the remaining search interval.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-051"
  },
  {
    "section": "Computer Science",
    "topic": "Design and Analysis of Algorithms",
    "difficulty": "medium",
    "question": "A loop runs for i=1,2,4,... up to n. On the iteration with value i, an inner loop performs i constant-time operations. The total running time is",
    "options": [
      "Theta(n)",
      "Theta(n log n)",
      "Theta(n^2)",
      "Theta(log n)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The total work is 1+2+4+...+2^k with 2^k<=n, a geometric sum bounded by 2n. Therefore the running time is Theta(n).",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-052"
  },
  {
    "section": "Computer Science",
    "topic": "Design and Analysis of Algorithms",
    "difficulty": "hard",
    "question": "The comparison-based lower bound for sorting n distinct elements is",
    "options": [
      "Omega(n^2)",
      "Omega(n)",
      "Omega(n log n)",
      "Omega(log n)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The decision-tree argument requires at least log2(n!)=Omega(n log n) comparisons.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-053"
  },
  {
    "section": "Computer Science",
    "topic": "Design and Analysis of Algorithms",
    "difficulty": "hard",
    "question": "If an algorithm tries all 2^n subsets and performs O(n) work per subset, its time is",
    "options": [
      "O(n 2^n)",
      "O(2n)",
      "O(n^2)",
      "O(2^(n^2))"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "There are 2^n subsets and O(n) processing per subset.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-054"
  },
  {
    "section": "Computer Science",
    "topic": "Design and Analysis of Algorithms",
    "difficulty": "hard",
    "question": "The standard 2-approximation for minimum vertex cover in an unweighted graph repeatedly selects",
    "options": [
      "both endpoints of an uncovered edge",
      "the highest-degree vertex only",
      "one random endpoint of every edge",
      "all leaves first"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Selecting both endpoints of each edge in a maximal matching gives a cover at most twice optimum.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-055"
  },
  {
    "section": "Computer Science",
    "topic": "Design and Analysis of Algorithms",
    "difficulty": "medium",
    "question": "Matrix-chain multiplication is typically solved by dynamic programming because",
    "options": [
      "every parenthesization has equal cost",
      "the matrices must be square",
      "matrix multiplication is commutative",
      "different parenthesizations share subchain subproblems"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Optimal costs for repeated subchains are reused across candidate splits.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-056"
  },
  {
    "section": "Computer Science",
    "topic": "Design and Analysis of Algorithms",
    "difficulty": "easy",
    "question": "If P=NP, then",
    "options": [
      "every problem in NP has a polynomial-time deterministic algorithm",
      "all undecidable problems become decidable",
      "exponential-time algorithms become impossible",
      "NP-complete problems disappear from NP"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "P=NP means every language with polynomially verifiable certificates is also polynomial-time decidable.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-057"
  },
  {
    "section": "Computer Science",
    "topic": "Design and Analysis of Algorithms",
    "difficulty": "medium",
    "question": "Quickselect has expected running time",
    "options": [
      "O(n^2) always",
      "O(n)",
      "O(n log n)",
      "O(log n)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "With a suitably randomized pivot, the expected selection time is linear, though worst case is quadratic.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-058"
  },
  {
    "section": "Computer Science",
    "topic": "Digital Electronics and Microprocessors",
    "difficulty": "medium",
    "question": "A 2-to-1 multiplexer uses A as its select input to implement F=A xor B. The required data inputs (I0,I1) are",
    "options": [
      "(0,1)",
      "(B',B)",
      "(B, B')",
      "(B,B)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "When A=0, F=B, so I0=B. When A=1, F=B', so I1=B'.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-059"
  },
  {
    "section": "Computer Science",
    "topic": "Digital Electronics and Microprocessors",
    "difficulty": "medium",
    "question": "A JK flip-flop with J=K=1 will",
    "options": [
      "toggle on the active clock edge",
      "reset only",
      "hold its state",
      "set only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For J=K=1, the JK characteristic is toggle.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-060"
  },
  {
    "section": "Computer Science",
    "topic": "Digital Electronics and Microprocessors",
    "difficulty": "medium",
    "question": "In the 8085, the instruction MOV A,B",
    "options": [
      "adds B to A",
      "copies register B into accumulator A",
      "moves the memory byte at address B into A",
      "copies A into B"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "MOV destination,source copies B into A without arithmetic.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-061"
  },
  {
    "section": "Computer Science",
    "topic": "Digital Electronics and Microprocessors",
    "difficulty": "medium",
    "question": "An 8-to-3 encoder produces",
    "options": [
      "eight output lines from three inputs",
      "a binary sum of eight inputs",
      "a 3-bit code identifying one of 8 active inputs",
      "a clock signal"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Three bits are sufficient to encode which one of eight input lines is active.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-062"
  },
  {
    "section": "Computer Science",
    "topic": "Digital Electronics and Microprocessors",
    "difficulty": "medium",
    "question": "A 16-bit address bus can directly address how many distinct byte locations?",
    "options": [
      "131072",
      "32768",
      "16",
      "65536"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Sixteen address bits encode 2^16=65536 addresses.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-063"
  },
  {
    "section": "Computer Science",
    "topic": "Digital Electronics and Microprocessors",
    "difficulty": "easy",
    "question": "If an 8086 uses a 20-bit address bus, its directly addressable memory space is",
    "options": [
      "64 KiB",
      "1 MiB",
      "4 GiB",
      "2 MiB"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A 20-bit byte address gives 2^20 bytes=1 MiB.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-064"
  },
  {
    "section": "Computer Science",
    "topic": "Digital Electronics and Microprocessors",
    "difficulty": "medium",
    "question": "The 8255 PPI is primarily used to provide",
    "options": [
      "floating-point arithmetic",
      "serial disk control",
      "programmable parallel I/O ports",
      "cache coherence"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The 8255 is a programmable peripheral interface for parallel input/output.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-065"
  },
  {
    "section": "Computer Science",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "A process moves from running to ready state when",
    "options": [
      "it requests blocking I/O",
      "it is created",
      "it terminates",
      "it is preempted by the scheduler"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Preemption removes the CPU while leaving the process ready to run.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-066"
  },
  {
    "section": "Computer Science",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "question": "Deadlock requires mutual exclusion, hold-and-wait, no preemption, and",
    "options": [
      "spooling",
      "paging",
      "priority inversion",
      "circular wait"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "These four Coffman conditions are jointly necessary for deadlock.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-067"
  },
  {
    "section": "Computer Science",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "question": "Belady's anomaly can occur with",
    "options": [
      "FIFO page replacement",
      "optimal replacement only",
      "stack algorithms only",
      "LRU only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "FIFO is not a stack algorithm and can show more faults with more frames.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-068"
  },
  {
    "section": "Computer Science",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "Thrashing is characterized by",
    "options": [
      "zero page faults",
      "only CPU-bound processes",
      "very high paging activity with little useful CPU work",
      "all pages pinned in memory"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "When working sets do not fit, repeated page faults dominate execution.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-069"
  },
  {
    "section": "Computer Science",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "question": "Banker's algorithm avoids deadlock by granting a request only if the resulting state is",
    "options": [
      "nonpreemptive",
      "fair",
      "safe",
      "fully utilized"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "It simulates the allocation and checks whether some completion sequence remains possible.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-070"
  },
  {
    "section": "Computer Science",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "Copy-on-write after fork allows parent and child initially to",
    "options": [
      "avoid virtual memory",
      "share CPU registers permanently",
      "share one process identifier",
      "share physical pages until a write occurs"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Pages can be mapped read-only into both processes and copied only on modification.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-071"
  },
  {
    "section": "Computer Science",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "A context switch between two processes must save and restore at least",
    "options": [
      "all page contents",
      "CPU execution state such as registers and program counter",
      "source code files",
      "the entire disk"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The outgoing execution context must be preserved so it can later resume.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-072"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Organization and Architecture",
    "difficulty": "medium",
    "question": "On a workload, 40% of the baseline execution time is due to memory stalls. A redesign speeds up the non-stall part by a factor of 1.25 and halves the stall time. The overall speedup is closest to",
    "options": [
      "1.18",
      "1.25",
      "1.67",
      "1.47"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Normalize the old time to 1. The new non-stall time is 0.60/1.25=0.48, and the new stall time is 0.40/2=0.20. New time=0.68, so speedup=1/0.68=25/17, about 1.47.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-073"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Organization and Architecture",
    "difficulty": "medium",
    "question": "In two's-complement 8-bit arithmetic, the representable signed range is",
    "options": [
      "-128 to 127",
      "-127 to 128",
      "-255 to 255",
      "0 to 255"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "An n-bit two's-complement integer ranges from -2^(n-1) to 2^(n-1)-1.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-074"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Organization and Architecture",
    "difficulty": "medium",
    "question": "DMA is useful because it allows",
    "options": [
      "the ALU to perform I/O addressing only",
      "the cache to eliminate main memory",
      "every instruction to execute twice",
      "a device to transfer blocks to or from memory with limited CPU intervention"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A DMA controller handles bulk transfers without CPU movement of every word.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-075"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Organization and Architecture",
    "difficulty": "medium",
    "question": "RISC designs typically emphasize",
    "options": [
      "variable-length microcoded instructions only",
      "memory-to-memory arithmetic as the norm",
      "no registers",
      "simple instructions and load/store memory access"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "RISC architectures favor simple operations, many registers and explicit load/store access.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-076"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Organization and Architecture",
    "difficulty": "easy",
    "question": "If 30% of instructions are branches and a predictor mispredicts 10% of branches with a 4-cycle penalty, the average CPI increase due to mispredictions is",
    "options": [
      "1.2",
      "0.12",
      "0.03",
      "0.4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The penalty per instruction is 0.30*0.10*4=0.12 cycles.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-077"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Organization and Architecture",
    "difficulty": "medium",
    "question": "A write-back cache writes modified data to lower memory",
    "options": [
      "when the dirty cache block is evicted",
      "only at program termination",
      "after every store",
      "before every load"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Write-back defers the memory update until a dirty block leaves the cache.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-078"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Organization and Architecture",
    "difficulty": "medium",
    "question": "Memory-mapped I/O means device registers are accessed using",
    "options": [
      "network packets",
      "only special I/O opcodes",
      "ordinary memory address instructions",
      "page-fault handlers exclusively"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Device registers occupy locations in the processor address space.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-079"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Networks",
    "difficulty": "medium",
    "question": "A router has matching routes 10.0.0.0/8, 10.32.0.0/12, 10.34.8.0/21, and a default route. For destination 10.34.9.200, which route is selected by longest-prefix matching?",
    "options": [
      "10.0.0.0/8",
      "10.34.8.0/21",
      "10.32.0.0/12",
      "the default route"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The destination lies in all three listed specific prefixes. Longest-prefix matching chooses the most specific matching route, 10.34.8.0/21.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-080"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Networks",
    "difficulty": "easy",
    "question": "DNS is primarily used to",
    "options": [
      "schedule CPU processes",
      "assign MAC addresses",
      "map domain names to information such as IP addresses",
      "encrypt every packet"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The Domain Name System resolves names to resource records, commonly IP addresses.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-081"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Networks",
    "difficulty": "medium",
    "question": "OSPF is best described as a",
    "options": [
      "transport-layer protocol",
      "application-layer encryption scheme",
      "distance-vector exterior protocol",
      "link-state interior gateway protocol"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "OSPF is a link-state IGP used within an autonomous system.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-082"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Networks",
    "difficulty": "easy",
    "question": "A digital signature primarily provides",
    "options": [
      "origin authentication and integrity",
      "address translation",
      "compression",
      "confidentiality by itself"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A valid signature binds the signer to the message and detects modification; encryption is separate.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-083"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Networks",
    "difficulty": "medium",
    "question": "BGP is mainly used for",
    "options": [
      "error detection in Ethernet",
      "reliable transport within a host",
      "routing between autonomous systems",
      "address resolution on a LAN"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "BGP exchanges reachability information between autonomous systems.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-084"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Networks",
    "difficulty": "medium",
    "question": "DHCP can provide a host with",
    "options": [
      "a disk inode",
      "an IP configuration lease",
      "a compiled program",
      "a CPU time slice"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "DHCP dynamically supplies network configuration such as IP address, mask and gateway.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-085"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Networks",
    "difficulty": "easy",
    "question": "A firewall that tracks the state of TCP connections is called",
    "options": [
      "a hub",
      "stateful",
      "a repeater",
      "stateless by definition"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Stateful firewalls maintain connection state and use it when deciding whether to admit packets.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-086"
  },
  {
    "section": "Computer Science",
    "topic": "Database Systems",
    "difficulty": "medium",
    "question": "For relation R(A,B,C) with functional dependencies A->B and B->C, A is",
    "options": [
      "a superkey",
      "functionally dependent on C only",
      "not able to determine C",
      "necessarily a non-prime attribute"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "By transitivity A->C, so A determines A,B,C and is a superkey.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-087"
  },
  {
    "section": "Computer Science",
    "topic": "Database Systems",
    "difficulty": "easy",
    "question": "Consider the schedule r1(X), w1(X), r2(X), w2(Y), r1(Y). Its precedence graph contains",
    "options": [
      "only the edge T1->T2",
      "a cycle between T1 and T2",
      "no edges",
      "only the edge T2->T1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "w1(X) before r2(X) gives T1->T2, while w2(Y) before r1(Y) gives T2->T1. The precedence graph therefore contains a cycle.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-088"
  },
  {
    "section": "Computer Science",
    "topic": "Database Systems",
    "difficulty": "easy",
    "question": "A relation is in BCNF if for every nontrivial functional dependency X->Y, X is",
    "options": [
      "a single attribute",
      "a superkey",
      "a foreign key",
      "a candidate value rather than a key"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "BCNF requires every determinant of a nontrivial FD to be a superkey.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-089"
  },
  {
    "section": "Computer Science",
    "topic": "Database Systems",
    "difficulty": "medium",
    "question": "Write-ahead logging requires a log record describing an update to reach stable storage",
    "options": [
      "only after commit and after all pages",
      "only when the buffer is empty",
      "before the corresponding modified data page is written to disk",
      "after a crash"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "WAL ensures recovery information is durable before the changed database page can reach disk.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-090"
  },
  {
    "section": "Computer Science",
    "topic": "Database Systems",
    "difficulty": "easy",
    "question": "A lossless join decomposition of R into R1 and R2 under F is guaranteed if",
    "options": [
      "R1 and R2 are disjoint",
      "both relations have equal tuple counts",
      "neither relation contains a key",
      "R1 intersection R2 functionally determines R1 or R2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The binary lossless-join condition is that the common attributes determine all attributes of at least one component.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-091"
  },
  {
    "section": "Computer Science",
    "topic": "Database Systems",
    "difficulty": "easy",
    "question": "A hash index is generally most suitable for",
    "options": [
      "sorting all tuples",
      "equality lookups",
      "prefix compression only",
      "ordered range scans"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Hashing directly maps an equality key to a bucket but does not preserve key order for ranges.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-092"
  },
  {
    "section": "Computer Science",
    "topic": "Database Systems",
    "difficulty": "medium",
    "question": "The SQL clause used to filter groups after aggregation is",
    "options": [
      "HAVING",
      "WHERE only after grouping",
      "ORDER BY",
      "DISTINCT"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "HAVING applies predicates to groups after GROUP BY and aggregate computation.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-093"
  },
  {
    "section": "Computer Science",
    "topic": "Compiler Construction",
    "difficulty": "medium",
    "question": "Lexical analysis converts a character stream into",
    "options": [
      "machine code only",
      "database tuples",
      "tokens",
      "parse trees directly"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The lexer groups characters into token categories for the parser.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-094"
  },
  {
    "section": "Computer Science",
    "topic": "Compiler Construction",
    "difficulty": "easy",
    "question": "For the grammar S->AB, A->a|epsilon, B->b|epsilon, FOLLOW(A) is",
    "options": [
      "{b}",
      "{$}",
      "{a,b}",
      "{b,$}"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Because B follows A, FIRST(B) without epsilon contributes b. Since B can also derive epsilon and S is the start symbol, FOLLOW(S)={$} is also included. Thus FOLLOW(A)={b,$}.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-095"
  },
  {
    "section": "Computer Science",
    "topic": "Compiler Construction",
    "difficulty": "easy",
    "question": "Common subexpression elimination within a basic block is naturally supported by",
    "options": [
      "a page table",
      "a pushdown automaton alone",
      "a DNS cache",
      "a DAG for expressions"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A DAG merges identical expression nodes and reveals repeated computations.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-096"
  },
  {
    "section": "Computer Science",
    "topic": "Compiler Construction",
    "difficulty": "medium",
    "question": "Register allocation decides",
    "options": [
      "which network route to select",
      "which values should reside in machine registers",
      "which disk block stores a file",
      "which grammar production to use"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Register allocation maps live values or temporaries to a limited set of hardware registers.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-097"
  },
  {
    "section": "Computer Science",
    "topic": "Compiler Construction",
    "difficulty": "easy",
    "question": "If an identifier is used before declaration in a language that forbids this, the error is normally detected during",
    "options": [
      "machine linking only",
      "disk scheduling",
      "lexical analysis only",
      "semantic analysis"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Declaration and scope rules require symbol-table and semantic checks beyond syntax recognition.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-098"
  },
  {
    "section": "Computer Science",
    "topic": "Compiler Construction",
    "difficulty": "easy",
    "question": "Live-variable analysis is commonly formulated as a",
    "options": [
      "context-free parsing table",
      "database normalization task",
      "forward lexical scan only",
      "backward data-flow analysis"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Liveness at a point depends on whether a value will be used in the future, so information flows backward.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-099"
  },
  {
    "section": "Computer Science",
    "topic": "Compiler Construction",
    "difficulty": "medium",
    "question": "A lexer commonly uses a DFA because token patterns are typically specified by",
    "options": [
      "regular expressions",
      "context-sensitive grammars only",
      "Turing-machine transition tables",
      "SQL queries"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Regular expressions describe token classes and can be implemented by finite automata.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-01-100"
  }
];
