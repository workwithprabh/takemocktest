import type { Question } from '../questions';

export const BITS_HD_2026_ME_CS_FULL_MOCK_2: Question[] = [
  {
    "section": "Core Mathematics",
    "topic": "Calculus",
    "difficulty": "medium",
    "question": "The limit as x tends to 0 of [sin(3x)-3x]/x^3 is",
    "options": [
      "-3/2",
      "9/2",
      "-9/2",
      "0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "sin(3x)=3x-(3x)^3/6+O(x^5), so the ratio tends to -27/6=-9/2.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-001"
  },
  {
    "section": "Core Mathematics",
    "topic": "Calculus",
    "difficulty": "hard",
    "question": "For g(x,y)=x^2y+y^3, the directional derivative at (1,1) in the direction from (1,1) to (4,5) is",
    "options": [
      "14/5",
      "6",
      "22/5",
      "18/5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The gradient at (1,1) is (2,4). The unit direction is (3/5,4/5), so the derivative is 2(3/5)+4(4/5)=22/5.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-002"
  },
  {
    "section": "Core Mathematics",
    "topic": "Linear Algebra",
    "difficulty": "medium",
    "question": "A 3 by 3 matrix has eigenvalues 2, -1 and 4. The determinant of A^2 is",
    "options": [
      "16",
      "-8",
      "8",
      "64"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "det(A)=2(-1)4=-8, so det(A^2)=det(A)^2=64.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-003"
  },
  {
    "section": "Core Mathematics",
    "topic": "Linear Algebra",
    "difficulty": "hard",
    "question": "Let T:R^4->R^3 be linear with rank(T)=2. The dimension of ker(T) is",
    "options": [
      "4",
      "3",
      "1",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "By rank-nullity, nullity=4-2=2.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-004"
  },
  {
    "section": "Core Mathematics",
    "topic": "Complex Variables",
    "difficulty": "hard",
    "question": "If f(z)=1/(z^2+1), then the contour integral over |z|=2 traversed counterclockwise is",
    "options": [
      "2*pi*i",
      "pi",
      "0",
      "2*pi"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The poles i and -i are both inside. Their residues are 1/(2i) and -1/(2i), which sum to zero, so the integral is zero.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-005"
  },
  {
    "section": "Core Mathematics",
    "topic": "Probability and Statistics",
    "difficulty": "medium",
    "question": "If X has mean 4 and variance 9, then E[(X-1)^2] is",
    "options": [
      "12",
      "27",
      "9",
      "18"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "E[(X-1)^2]=Var(X)+(E[X]-1)^2=9+9=18.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-006"
  },
  {
    "section": "Core Mathematics",
    "topic": "Differential Equations",
    "difficulty": "hard",
    "question": "For y''+y=0 with y(0)=0 and y'(0)=2, y(pi/2) equals",
    "options": [
      "-2",
      "1",
      "0",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The solution is y=2 sin x, hence y(pi/2)=2.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-007"
  },
  {
    "section": "Core Mathematics",
    "topic": "Calculus",
    "difficulty": "medium",
    "question": "The radius of convergence of the power series sum from n=1 to infinity of x^n/(3^n n) is",
    "options": [
      "3",
      "1/3",
      "1",
      "infinity"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The ratio/root test gives |x|/3<1, hence radius 3.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-008"
  },
  {
    "section": "Core Mathematics",
    "topic": "Linear Algebra",
    "difficulty": "medium",
    "question": "A 2 by 2 matrix has characteristic polynomial lambda^2-5lambda+6. Its trace is",
    "options": [
      "-6",
      "5",
      "-5",
      "6"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For a 2 by 2 matrix, the characteristic polynomial is lambda^2-(trace A)lambda+det A. Hence the trace is 5.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-009"
  },
  {
    "section": "Core Mathematics",
    "topic": "Complex Variables",
    "difficulty": "medium",
    "question": "If u(x,y)=x^2-y^2 is the real part of an analytic function, a corresponding imaginary part is",
    "options": [
      "-2xy+C",
      "xy+C",
      "x^2+y^2+C",
      "2xy+C"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Cauchy-Riemann equations give v_y=u_x=2x and v_x=-u_y=2y, hence v=2xy+C.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-010"
  },
  {
    "section": "Core Mathematics",
    "topic": "Probability and Statistics",
    "difficulty": "medium",
    "question": "For independent random variables X and Y with variances 4 and 5, Var(2X-Y) is",
    "options": [
      "13",
      "36",
      "21",
      "9"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Independence gives Var(2X-Y)=4Var(X)+Var(Y)=16+5=21.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-011"
  },
  {
    "section": "Core Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "The Laplace transform of t e^(-2t) is",
    "options": [
      "2/(s+2)^2",
      "1/(s^2+4)",
      "1/(s+2)",
      "1/(s+2)^2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "L{t}=1/s^2 and the exponential shift gives 1/(s+2)^2.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-012"
  },
  {
    "section": "Core Mathematics",
    "topic": "Numerical Methods",
    "difficulty": "medium",
    "question": "Using the trapezoidal rule with one subinterval on [0,2], the approximation to integral of x^2 dx is",
    "options": [
      "4",
      "6",
      "2",
      "8/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The trapezoidal estimate is (2/2)[f(0)+f(2)]=4.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-013"
  },
  {
    "section": "Core Mathematics",
    "topic": "Numerical Methods",
    "difficulty": "hard",
    "question": "In Simpson's 1/3 rule, the method is exact for every polynomial of degree at most",
    "options": [
      "3",
      "2",
      "5",
      "4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Simpson's 1/3 rule has algebraic degree of precision 3.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-014"
  },
  {
    "section": "Core Mathematics",
    "topic": "Calculus",
    "difficulty": "hard",
    "question": "For the vector field F=(2x,-2y), the line integral around any closed piecewise-smooth curve in the plane is",
    "options": [
      "2*pi",
      "depends only on area",
      "-2*pi",
      "0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "F is the gradient of x^2-y^2, so it is conservative and every closed-loop integral is zero.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-015"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "English Language Skills",
    "difficulty": "easy",
    "question": "Which sentence avoids a dangling introductory modifier?",
    "options": [
      "After reviewing the logs, the engineer restarted the service.",
      "To improve reliability, several tests were added by the report.",
      "After reviewing the logs, the service was restarted.",
      "While driving to work, the rain began."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The subject immediately following the introductory phrase, the engineer, is the person who reviewed the logs, so the modifier is correctly attached.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-016"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "English Language Skills",
    "difficulty": "easy",
    "question": "Which word best completes the sentence? The evidence was too _____ to support a definite conclusion.",
    "options": [
      "coherent",
      "conclusive",
      "inconclusive",
      "explicit"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Inconclusive evidence does not permit a definite conclusion.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-017"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "English Language Skills",
    "difficulty": "medium",
    "question": "In the sentence \"Although the deadline was tight, the team delivered a robust prototype,\" the word \"robust\" most nearly means",
    "options": [
      "fragile",
      "temporary",
      "decorative",
      "reliable"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "In context, robust means strong or reliable.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-018"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "English Language Skills",
    "difficulty": "medium",
    "question": "A report states: \"The new compiler reduced build time in three of four projects, but the largest project showed no change.\" Which conclusion is best supported?",
    "options": [
      "The largest project built more slowly.",
      "The compiler always reduces build time.",
      "The compiler improved build time in most tested projects, but not all.",
      "Project size never affects build time."
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The statement directly supports improvement in most, but not all, tested projects.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-019"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "Logical Reasoning",
    "difficulty": "medium",
    "question": "All routers in a lab are network devices. Some network devices are wireless. Which conclusion necessarily follows?",
    "options": [
      "All wireless devices are routers.",
      "All routers are network devices.",
      "No routers are wireless.",
      "Some routers are wireless."
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Only the first statement is guaranteed by the premises.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-020"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "Logical Reasoning",
    "difficulty": "easy",
    "question": "Three status flags P,Q,R satisfy these conditions: exactly two flags are ON; if P is ON then Q is OFF; and R has the same state as Q. Which flag must be OFF?",
    "options": [
      "Q",
      "R",
      "P",
      "Cannot be determined"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Since R has the same state as Q, Q and R are either both ON or both OFF. Exactly two flags are ON, so Q and R must both be ON and P must be OFF. This also satisfies the conditional statement about P.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-021"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "Logical Reasoning",
    "difficulty": "medium",
    "question": "A code maps CAT to 24 and DOG to 26 by summing letter positions. Under the same rule, BEE maps to",
    "options": [
      "14",
      "12",
      "10",
      "18"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "BEE gives 2+5+5=12.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-022"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "English Language Skills",
    "difficulty": "easy",
    "question": "In the sentence \"The patch was designed to mitigate operational risk,\" the word \"mitigate\" most nearly means",
    "options": [
      "reduce",
      "intensify",
      "predict",
      "ignore"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Mitigate means make less severe or reduce.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-023"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "English Language Skills",
    "difficulty": "easy",
    "question": "Complete the sentence: If the backup had been tested earlier, the recovery _____ faster.",
    "options": [
      "was",
      "would be",
      "would have been",
      "will be"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A past unreal condition takes \"would have been\" in the result clause.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-024"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "English Language Skills",
    "difficulty": "easy",
    "question": "Choose the correctly spelled word.",
    "options": [
      "accommodate",
      "acommodate",
      "accomodate",
      "accommadate"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Accommodate has double c and double m.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-025"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "English Language Skills",
    "difficulty": "medium",
    "question": "Choose the most appropriate transition: The algorithm has excellent average performance. _____, its worst case is quadratic.",
    "options": [
      "Similarly",
      "However",
      "Therefore",
      "For example"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "However marks the contrast between average and worst-case performance.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-026"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "Logical Reasoning",
    "difficulty": "medium",
    "question": "Three boxes are labeled X,Y,Z. Exactly one label is true. X says \"The prize is in Y.\" Y says \"The prize is not in Y.\" Z says \"The prize is not in X.\" Where is the prize?",
    "options": [
      "Y",
      "cannot be determined",
      "Z",
      "X"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "If the prize is in X, X is false, Y is true, Z is false, giving exactly one true label. The other locations do not.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-027"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "Logical Reasoning",
    "difficulty": "medium",
    "question": "A server is either up or down. If it is up, the monitor shows green. The monitor is not green. Which conclusion follows by contraposition?",
    "options": [
      "No conclusion is possible",
      "The server is down",
      "The server is up",
      "The monitor is faulty"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "From up -> green, not green implies not up; with the binary state assumption, the server is down.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-028"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "Logical Reasoning",
    "difficulty": "hard",
    "question": "A three-digit code uses distinct digits from {1,2,3,4}. The first digit is smaller than the second, and the third digit is smaller than the first. How many codes are possible?",
    "options": [
      "4",
      "6",
      "8",
      "2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For any 3 chosen digits, their relative order must be middle-largest-smallest. Each 3-element subset gives exactly one code, so C(4,3)=4.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-029"
  },
  {
    "section": "English Language Skills & Logical Reasoning",
    "topic": "Logical Reasoning",
    "difficulty": "easy",
    "question": "If MONDAY is coded as NPOEBZ by shifting each letter forward by one, FRIDAY is coded as",
    "options": [
      "FRJEBZ",
      "GSJECZ",
      "GSJEBZ",
      "GSKFCZ"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Shift each letter of FRIDAY forward by one: G S J E B Z.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-030"
  },
  {
    "section": "Computer Science",
    "topic": "Discrete Mathematics",
    "difficulty": "medium",
    "question": "For a relation R on integers defined by aRb iff a-b is divisible by 5, R is",
    "options": [
      "an equivalence relation",
      "a partial order but not an equivalence relation",
      "symmetric but not transitive",
      "reflexive but not symmetric"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Congruence modulo 5 is reflexive, symmetric and transitive.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-031"
  },
  {
    "section": "Computer Science",
    "topic": "Discrete Mathematics",
    "difficulty": "medium",
    "question": "For finite sets A and B, |A|=12, |B|=9 and |A symmetric-difference B|=13. What is |A intersection B|?",
    "options": [
      "2",
      "4",
      "8",
      "5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The symmetric difference has size |A|+|B|-2|A intersection B|. Thus 13=21-2I, giving I=4.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-032"
  },
  {
    "section": "Computer Science",
    "topic": "Discrete Mathematics",
    "difficulty": "hard",
    "question": "How many labeled trees on vertex set {1,2,3,4,5,6,7} have degree of vertex 1 equal to 3 and degree of vertex 2 equal to 2?",
    "options": [
      "750",
      "625",
      "150",
      "900"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A labeled tree on 7 vertices has a Pr\u00fcfer sequence of length 5. Degree 3 for vertex 1 means label 1 appears exactly 2 times; degree 2 for vertex 2 means label 2 appears exactly once. Choose the two positions for 1 in C(5,2)=10 ways, then the position for 2 in 3 ways. Each of the remaining two positions can be any of 3,4,5,6,7, giving 5^2 choices. Total=10x3x25=750.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-033"
  },
  {
    "section": "Computer Science",
    "topic": "Discrete Mathematics",
    "difficulty": "medium",
    "question": "The sequence a_n defined by a_n=3a_(n-1), a_0=2 has a_4 equal to",
    "options": [
      "162",
      "54",
      "81",
      "243"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "a_4=2*3^4=162.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-034"
  },
  {
    "section": "Computer Science",
    "topic": "Discrete Mathematics",
    "difficulty": "medium",
    "question": "The negation of \"for every x, P(x) implies Q(x)\" is",
    "options": [
      "for every x, not P(x) or Q(x)",
      "there exists x such that not P(x) and Q(x)",
      "for every x, P(x) and not Q(x)",
      "there exists x such that P(x) and not Q(x)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Negating a universal implication yields an existential counterexample P(x) and not Q(x).",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-035"
  },
  {
    "section": "Computer Science",
    "topic": "Discrete Mathematics",
    "difficulty": "hard",
    "question": "How many length-6 strings over {a,b,c} contain no c?",
    "options": [
      "32",
      "64",
      "729",
      "81"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Each position has only a or b, so there are 2^6=64 strings.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-036"
  },
  {
    "section": "Computer Science",
    "topic": "Discrete Mathematics",
    "difficulty": "easy",
    "question": "A tree with 25 vertices has how many edges?",
    "options": [
      "24",
      "23",
      "26",
      "25"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Every tree with n vertices has n-1 edges.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-037"
  },
  {
    "section": "Computer Science",
    "topic": "Theory of Computation",
    "difficulty": "medium",
    "question": "The regular expression (0+1)*01 describes binary strings that",
    "options": [
      "have even length",
      "start with 01",
      "contain exactly one 0",
      "end in 01"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The arbitrary prefix is followed by the fixed suffix 01.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-038"
  },
  {
    "section": "Computer Science",
    "topic": "Theory of Computation",
    "difficulty": "medium",
    "question": "Every language accepted by a DFA is also accepted by",
    "options": [
      "an NFA",
      "no other finite automaton model",
      "only a Turing machine with two tapes",
      "only a PDA"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "DFAs and NFAs recognize exactly the regular languages.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-039"
  },
  {
    "section": "Computer Science",
    "topic": "Theory of Computation",
    "difficulty": "medium",
    "question": "A pushdown automaton differs from a finite automaton primarily by having",
    "options": [
      "mandatory nondeterminism",
      "a finite output tape",
      "two input heads",
      "an unbounded stack"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The stack supplies unbounded auxiliary memory in LIFO form.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-040"
  },
  {
    "section": "Computer Science",
    "topic": "Theory of Computation",
    "difficulty": "medium",
    "question": "The subset construction converts an NFA with n states into a DFA with at most",
    "options": [
      "n! states",
      "2^n states",
      "n states",
      "n^2 states"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Each DFA state corresponds to a subset of NFA states, of which there are at most 2^n.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-041"
  },
  {
    "section": "Computer Science",
    "topic": "Theory of Computation",
    "difficulty": "medium",
    "question": "A grammar is ambiguous if",
    "options": [
      "every nonterminal has two productions",
      "it has left recursion",
      "it contains epsilon-productions",
      "some string in its language has two distinct parse trees"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Ambiguity means at least one generated string has more than one parse tree or leftmost derivation.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-042"
  },
  {
    "section": "Computer Science",
    "topic": "Theory of Computation",
    "difficulty": "medium",
    "question": "If a DFA state is unreachable from the start state, removing it",
    "options": [
      "always makes the language empty",
      "makes the DFA nondeterministic",
      "does not change the recognized language",
      "changes every accepted string"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "An unreachable state is never visited on any input, so it has no effect on the language.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-043"
  },
  {
    "section": "Computer Science",
    "topic": "Theory of Computation",
    "difficulty": "easy",
    "question": "The empty language is",
    "options": [
      "regular",
      "context-sensitive but not context-free",
      "not recursively enumerable",
      "undecidable"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A DFA with no accepting states recognizes the empty language.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-044"
  },
  {
    "section": "Computer Science",
    "topic": "Data Structures and Algorithms",
    "difficulty": "medium",
    "question": "A binary search tree contains keys 20,10,30,5,15. The inorder traversal is",
    "options": [
      "5,15,10,30,20",
      "20,10,5,15,30",
      "5,10,15,20,30",
      "30,20,15,10,5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Inorder traversal of a BST lists keys in increasing order.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-045"
  },
  {
    "section": "Computer Science",
    "topic": "Data Structures and Algorithms",
    "difficulty": "hard",
    "question": "An AVL tree node has left-subtree height 5 and right-subtree height 3. Its balance factor left minus right is",
    "options": [
      "-2",
      "1",
      "2",
      "-1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The balance factor is 5-3=2, which violates the AVL bound before rebalancing.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-046"
  },
  {
    "section": "Computer Science",
    "topic": "Data Structures and Algorithms",
    "difficulty": "medium",
    "question": "In a binary max-heap, the maximum key is stored at",
    "options": [
      "the rightmost leaf",
      "the root",
      "an arbitrary internal node",
      "the leftmost leaf"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The heap-order property places the maximum at the root.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-047"
  },
  {
    "section": "Computer Science",
    "topic": "Data Structures and Algorithms",
    "difficulty": "medium",
    "question": "If a singly linked list node is given but its predecessor is not, deleting that node in O(1) time is possible when",
    "options": [
      "the node contains an even key",
      "the node is not the last node",
      "the list is sorted",
      "the node is always the head"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For a non-tail node, copy the successor data into the node and bypass the successor.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-048"
  },
  {
    "section": "Computer Science",
    "topic": "Data Structures and Algorithms",
    "difficulty": "medium",
    "question": "A circular queue of capacity 8 uses one empty slot to distinguish full from empty. The maximum number of stored elements is",
    "options": [
      "7",
      "6",
      "8",
      "4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "One slot is deliberately unused, so at most 7 of 8 array positions hold elements.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-049"
  },
  {
    "section": "Computer Science",
    "topic": "Data Structures and Algorithms",
    "difficulty": "hard",
    "question": "A binary min-heap is stored in 1-indexed array form as [4,9,7,15,12,10,8,20,18,14]. The key at index 8 is decreased from 20 to 5 using the standard decrease-key operation, and then delete-min is performed. Which key occupies index 4 in the resulting heap?",
    "options": [
      "9",
      "12",
      "14",
      "15"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "After decreasing index 8 from 20 to 5, sift-up gives [4,5,7,9,12,10,8,15,18,14]. Delete-min then moves 14 to the root and sifts it down: first below 5 and then below 9. The resulting heap is [5,9,7,14,12,10,8,15,18], so index 4 contains 14.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-050"
  },
  {
    "section": "Computer Science",
    "topic": "Data Structures and Algorithms",
    "difficulty": "medium",
    "question": "If every edge in a connected graph has the same weight, a spanning tree returned by BFS is",
    "options": [
      "a minimum spanning tree",
      "always a Hamiltonian path",
      "necessarily unique",
      "never a minimum spanning tree"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "All spanning trees have the same total weight when all edge weights are equal.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-051"
  },
  {
    "section": "Computer Science",
    "topic": "Design and Analysis of Algorithms",
    "difficulty": "medium",
    "question": "A directed graph has edges S->A of weight 4, S->B of weight 1, B->A of weight 2, A->C of weight 1, and B->C of weight 5. Dijkstra's algorithm from S gives distance to C equal to",
    "options": [
      "3",
      "5",
      "6",
      "4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The shortest route is S->B->A->C with cost 1+2+1=4. All edge weights are nonnegative, so Dijkstra obtains this distance.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-052"
  },
  {
    "section": "Computer Science",
    "topic": "Design and Analysis of Algorithms",
    "difficulty": "medium",
    "question": "The classic activity-selection problem is optimally solved by repeatedly choosing the compatible activity with",
    "options": [
      "latest starting time only",
      "earliest finishing time",
      "largest duration",
      "smallest index"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Earliest finish leaves maximum room for future activities and yields the greedy optimum.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-053"
  },
  {
    "section": "Computer Science",
    "topic": "Design and Analysis of Algorithms",
    "difficulty": "medium",
    "question": "Dynamic programming is most useful when a problem has",
    "options": [
      "no recursive formulation",
      "a unique input size",
      "overlapping subproblems and optimal substructure",
      "only independent subproblems"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Those two properties enable reuse of solved subproblems while composing optimal solutions.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-054"
  },
  {
    "section": "Computer Science",
    "topic": "Design and Analysis of Algorithms",
    "difficulty": "medium",
    "question": "Merge sort has worst-case time",
    "options": [
      "Theta(log n)",
      "Theta(n^2)",
      "Theta(n)",
      "Theta(n log n)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "There are logarithmically many levels with linear merging work per level.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-055"
  },
  {
    "section": "Computer Science",
    "topic": "Design and Analysis of Algorithms",
    "difficulty": "medium",
    "question": "Kruskal's algorithm chooses edges in",
    "options": [
      "decreasing weight order",
      "arbitrary order while preserving connectivity",
      "breadth-first order from one source",
      "nondecreasing weight order while avoiding cycles"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Kruskal scans edges from lightest to heaviest and adds an edge if it does not create a cycle.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-056"
  },
  {
    "section": "Computer Science",
    "topic": "Design and Analysis of Algorithms",
    "difficulty": "medium",
    "question": "Backtracking differs from brute-force enumeration because it",
    "options": [
      "works only for graph problems",
      "prunes partial solutions that cannot lead to a valid complete solution",
      "always uses dynamic programming tables",
      "requires randomization"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Backtracking abandons infeasible or hopeless partial assignments before completing them.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-057"
  },
  {
    "section": "Computer Science",
    "topic": "Design and Analysis of Algorithms",
    "difficulty": "easy",
    "question": "Binary search is an example of",
    "options": [
      "branch and bound",
      "divide and conquer",
      "dynamic programming",
      "randomized approximation"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "It repeatedly reduces the search to one half of the current interval.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-058"
  },
  {
    "section": "Computer Science",
    "topic": "Digital Electronics and Microprocessors",
    "difficulty": "medium",
    "question": "An 8-to-1 multiplexer has select inputs S2S1S0=101. Which data input is connected to the output?",
    "options": [
      "I3",
      "I7",
      "I6",
      "I5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Binary 101 is decimal 5, so the selected data input is I5.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-059"
  },
  {
    "section": "Computer Science",
    "topic": "Digital Electronics and Microprocessors",
    "difficulty": "hard",
    "question": "A 3-bit binary up-counter is initially in state 101. After six active clock pulses, its state is",
    "options": [
      "001",
      "011",
      "111",
      "010"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A 3-bit counter works modulo 8. Starting from decimal 5, six increments give 11 mod 8=3, whose binary form is 011.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-060"
  },
  {
    "section": "Computer Science",
    "topic": "Digital Electronics and Microprocessors",
    "difficulty": "hard",
    "question": "In 8086 default segment selection, a memory operand whose effective address uses BP+DI is taken from which segment unless an override is present?",
    "options": [
      "CS",
      "SS",
      "ES",
      "DS"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "8086 addressing modes that use BP as a base select the stack segment SS by default; most other data addressing defaults to DS.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-061"
  },
  {
    "section": "Computer Science",
    "topic": "Digital Electronics and Microprocessors",
    "difficulty": "medium",
    "question": "A D flip-flop samples D on its active clock edge and then",
    "options": [
      "forces Q to zero",
      "always toggles Q",
      "outputs the complement of D only",
      "stores that value at Q"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A D flip-flop transfers the sampled D value to Q.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-062"
  },
  {
    "section": "Computer Science",
    "topic": "Digital Electronics and Microprocessors",
    "difficulty": "medium",
    "question": "In 8085, the program counter stores",
    "options": [
      "the current stack top data",
      "the address of the next instruction",
      "the accumulator value",
      "the flag register contents"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The program counter points to the next instruction to fetch.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-063"
  },
  {
    "section": "Computer Science",
    "topic": "Digital Electronics and Microprocessors",
    "difficulty": "medium",
    "question": "A decoder with 3 input bits and no enable has how many output lines?",
    "options": [
      "3",
      "6",
      "16",
      "8"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A binary decoder provides 2^3=8 mutually selected outputs.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-064"
  },
  {
    "section": "Computer Science",
    "topic": "Digital Electronics and Microprocessors",
    "difficulty": "easy",
    "question": "A half adder produces",
    "options": [
      "only a carry output",
      "sum and carry outputs from two input bits",
      "one select output",
      "difference and borrow from three bits"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A half adder adds two bits and generates sum and carry.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-065"
  },
  {
    "section": "Computer Science",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "A semaphore initialized to 1 is commonly used as",
    "options": [
      "a disk queue",
      "a mutex",
      "a compiler token",
      "a page table"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A binary semaphore with initial value 1 can provide mutual exclusion.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-066"
  },
  {
    "section": "Computer Science",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "With a page size of 4 KiB, the page offset uses",
    "options": [
      "12 bits",
      "10 bits",
      "14 bits",
      "16 bits"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "4 KiB=4096=2^12 bytes, so 12 offset bits are needed.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-067"
  },
  {
    "section": "Computer Science",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "A file allocation method that stores each file as a linked list of disk blocks is",
    "options": [
      "extent-only allocation",
      "linked allocation",
      "contiguous allocation",
      "indexed allocation only"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Linked allocation chains the blocks of a file using pointers.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-068"
  },
  {
    "section": "Computer Science",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "Round-robin scheduling is primarily controlled by the",
    "options": [
      "page size",
      "disk sector size",
      "time quantum",
      "number of semaphores"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The quantum determines how long a ready process runs before preemption.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-069"
  },
  {
    "section": "Computer Science",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "A TLB caches",
    "options": [
      "file descriptors",
      "disk blocks only",
      "CPU instructions only",
      "recent virtual-to-physical address translations"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The translation lookaside buffer stores page-table translations.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-070"
  },
  {
    "section": "Computer Science",
    "topic": "Operating Systems",
    "difficulty": "hard",
    "question": "In demand paging, increasing the number of frames allocated to a process using LRU can",
    "options": [
      "make every reference a fault",
      "always double the page-fault count",
      "never increase its page-fault count for the same reference string",
      "cause Belady's anomaly"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "LRU is a stack algorithm, so its fault count is nonincreasing with more frames.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-071"
  },
  {
    "section": "Computer Science",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "question": "The scheduler that selects a process from the ready queue for the CPU is the",
    "options": [
      "file-system allocator",
      "short-term scheduler",
      "I/O scheduler only",
      "long-term scheduler"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The short-term or CPU scheduler chooses the next ready process to execute.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-072"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Organization and Architecture",
    "difficulty": "medium",
    "question": "A cache block size of 64 bytes requires how many block-offset bits in a byte-addressed machine?",
    "options": [
      "8",
      "7",
      "6",
      "5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "64=2^6 bytes, so six bits select the byte within a block.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-073"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Organization and Architecture",
    "difficulty": "hard",
    "question": "A pipeline has 5 stages with equal stage time 2 ns and no stalls. After filling, its ideal throughput is",
    "options": [
      "one instruction every 10 ns",
      "five instructions every 2 ns",
      "one instruction every 5 ns",
      "one instruction every 2 ns"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Pipeline throughput is determined by the slowest stage, here 2 ns per completed instruction after fill.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-074"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Organization and Architecture",
    "difficulty": "hard",
    "question": "RAID 1 primarily provides redundancy by",
    "options": [
      "striping without redundancy",
      "distributed parity only",
      "mirroring data",
      "compressing blocks"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "RAID 1 stores duplicate copies on mirrored disks.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-075"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Organization and Architecture",
    "difficulty": "medium",
    "question": "A direct-mapped cache chooses the cache line for a memory block using",
    "options": [
      "a fully associative search of every line",
      "the data value stored in memory",
      "an index derived from the block address",
      "the instruction opcode"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The block address maps to exactly one line determined by its cache index.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-076"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Organization and Architecture",
    "difficulty": "medium",
    "question": "Sign extension of the 8-bit two's-complement value 11110000 to 16 bits gives",
    "options": [
      "1111111111110000",
      "0000111111110000",
      "0000000011110000",
      "1111000000000000"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A negative two's-complement value is extended by replicating the sign bit 1.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-077"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Organization and Architecture",
    "difficulty": "hard",
    "question": "A structural pipeline hazard occurs when",
    "options": [
      "an instruction depends on a previous result",
      "two simultaneous operations need the same hardware resource",
      "a cache block has a dirty bit",
      "a branch changes control flow"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Structural hazards are resource conflicts in the datapath.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-078"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Organization and Architecture",
    "difficulty": "easy",
    "question": "The arithmetic logic unit primarily performs",
    "options": [
      "disk scheduling",
      "arithmetic and logical operations",
      "dynamic memory allocation",
      "source parsing"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The ALU handles integer arithmetic and bitwise/logical operations.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-079"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Networks",
    "difficulty": "medium",
    "question": "TCP provides",
    "options": [
      "reliable ordered byte-stream delivery",
      "unreliable unordered datagrams only",
      "link-layer framing only",
      "routing between autonomous systems"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "TCP uses sequencing, acknowledgments and retransmissions to provide a reliable ordered stream.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-080"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Networks",
    "difficulty": "hard",
    "question": "In Ethernet CSMA/CD, binary exponential backoff is used after",
    "options": [
      "a TCP FIN",
      "a DNS lookup",
      "every successful frame",
      "a collision"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A sender involved in a collision waits a randomized backoff interval before retrying.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-081"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Networks",
    "difficulty": "medium",
    "question": "The UDP header contains",
    "options": [
      "sequence and acknowledgment numbers only",
      "MAC addresses only",
      "source port, destination port, length and checksum",
      "IP source route only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "UDP has four 16-bit header fields: source port, destination port, length and checksum.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-082"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Networks",
    "difficulty": "medium",
    "question": "IPv6 addresses are",
    "options": [
      "128 bits long",
      "32 bits long",
      "64 bits long",
      "48 bits long"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "IPv6 uses 128-bit addresses.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-083"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Networks",
    "difficulty": "easy",
    "question": "If a TCP sender has congestion window 8 MSS and receiver window 20 MSS, ignoring other limits it may have at most",
    "options": [
      "8 MSS of unacknowledged data",
      "28 MSS",
      "20 MSS",
      "160 MSS"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The usable send window is the minimum of congestion and receiver windows, so 8 MSS.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-084"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Networks",
    "difficulty": "medium",
    "question": "A router forwards an IP packet primarily using the packet's",
    "options": [
      "Ethernet payload length only",
      "destination IP address",
      "source TCP port only",
      "application username"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "IP forwarding selects a next hop based on the destination address and routing table.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-085"
  },
  {
    "section": "Computer Science",
    "topic": "Computer Networks",
    "difficulty": "easy",
    "question": "HTTP is an application-layer protocol commonly used for",
    "options": [
      "CPU scheduling",
      "memory paging",
      "disk mirroring",
      "web resource transfer"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "HTTP carries requests and responses for web resources.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-086"
  },
  {
    "section": "Computer Science",
    "topic": "Database Systems",
    "difficulty": "medium",
    "question": "The relational algebra operation that selects rows satisfying a predicate is",
    "options": [
      "rename",
      "projection",
      "selection",
      "Cartesian product"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Selection filters tuples based on a condition.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-087"
  },
  {
    "section": "Computer Science",
    "topic": "Database Systems",
    "difficulty": "medium",
    "question": "In SQL, COUNT(*) returns",
    "options": [
      "the number of selected rows",
      "the number of tables",
      "the sum of numeric values",
      "the number of non-NULL values in one named column only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "COUNT(*) counts result rows regardless of NULLs in individual columns.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-088"
  },
  {
    "section": "Computer Science",
    "topic": "Database Systems",
    "difficulty": "medium",
    "question": "A B+ tree index keeps actual data-record pointers primarily at",
    "options": [
      "every internal key only",
      "a separate hash table only",
      "leaf nodes",
      "the root only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "B+ tree leaves hold the data entries or record pointers; internal nodes guide search.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-089"
  },
  {
    "section": "Computer Science",
    "topic": "Database Systems",
    "difficulty": "medium",
    "question": "The closure X+ of an attribute set X under a set of functional dependencies is",
    "options": [
      "the set of tuples selected by X",
      "the set of keys not containing X",
      "the set of attributes functionally determined by X",
      "the physical index pages for X"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Attribute closure repeatedly applies FDs to find all attributes implied by X.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-090"
  },
  {
    "section": "Computer Science",
    "topic": "Database Systems",
    "difficulty": "easy",
    "question": "Two-phase locking is used primarily to ensure",
    "options": [
      "conflict serializability",
      "lossless decomposition",
      "index balancing",
      "BCNF"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The growing and shrinking lock phases constrain interleavings to conflict-serializable schedules.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-091"
  },
  {
    "section": "Computer Science",
    "topic": "Database Systems",
    "difficulty": "easy",
    "question": "In an ER model, a weak entity is typically identified using",
    "options": [
      "only a globally unique key of its own",
      "its partial key together with the key of an owner entity",
      "a transaction timestamp only",
      "a network address"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A weak entity depends on an identifying relationship to an owner and a partial key.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-092"
  },
  {
    "section": "Computer Science",
    "topic": "Database Systems",
    "difficulty": "easy",
    "question": "A primary key value in a relation must be",
    "options": [
      "unique and non-NULL",
      "a foreign key in the same relation",
      "numeric only",
      "possibly duplicated and NULL"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "A primary key uniquely identifies each tuple and cannot be NULL.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-093"
  },
  {
    "section": "Computer Science",
    "topic": "Compiler Construction",
    "difficulty": "easy",
    "question": "A left-recursive grammar is problematic for a naive",
    "options": [
      "LR parser only",
      "recursive-descent parser",
      "finite automaton lexer",
      "code generator"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Direct left recursion can cause infinite recursion in top-down recursive descent.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-094"
  },
  {
    "section": "Computer Science",
    "topic": "Compiler Construction",
    "difficulty": "easy",
    "question": "A symbol table typically stores",
    "options": [
      "information about identifiers such as type and scope",
      "network routing entries",
      "only machine instructions",
      "only comments"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Compilers use symbol tables to associate identifiers with attributes such as type, scope and storage.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-095"
  },
  {
    "section": "Computer Science",
    "topic": "Compiler Construction",
    "difficulty": "easy",
    "question": "Intermediate three-address code instruction x=y+z contains at most",
    "options": [
      "one operator on the right-hand side",
      "no operands",
      "three operators",
      "an arbitrary full expression tree"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Three-address code decomposes expressions so each instruction performs a small operation, commonly one operator.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-096"
  },
  {
    "section": "Computer Science",
    "topic": "Compiler Construction",
    "difficulty": "easy",
    "question": "An LR parser is",
    "options": [
      "a lexical analyzer",
      "a code optimizer",
      "top-down predictive only",
      "bottom-up"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "LR parsing builds a rightmost derivation in reverse and is a bottom-up method.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-097"
  },
  {
    "section": "Computer Science",
    "topic": "Compiler Construction",
    "difficulty": "easy",
    "question": "A basic block is a maximal sequence of instructions with",
    "options": [
      "exactly one instruction",
      "one entry and one exit except at the ends",
      "no variables",
      "no arithmetic operations"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Control enters only at the beginning and leaves only at the end, apart from the final transfer.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-098"
  },
  {
    "section": "Computer Science",
    "topic": "Compiler Construction",
    "difficulty": "easy",
    "question": "Syntax-directed translation associates semantic actions with",
    "options": [
      "process states",
      "routing updates",
      "grammar productions",
      "cache lines"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Attributes or actions attached to productions drive translation during parsing.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-099"
  },
  {
    "section": "Computer Science",
    "topic": "Compiler Construction",
    "difficulty": "easy",
    "question": "The parser receives its input from the",
    "options": [
      "register allocator",
      "scheduler",
      "lexical analyzer",
      "linker"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The lexer produces the token stream consumed by the parser.",
    "source": {
      "kind": "original",
      "reference": "BITS HD 2026 M.E. Computer Science official brochure syllabus alignment",
      "url": "https://admissions.bits-pilani.ac.in/HD/downloads/HD_Brochure_2026_27.pdf",
      "checkedOn": "2026-08-23"
    },
    "id": "bits-hd-2026-me-cs-full-mock-02-100"
  }
];
