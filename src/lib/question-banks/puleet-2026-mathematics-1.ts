import type { Question } from '../questions';

export const PULEET_2026_MATHEMATICS_1: Question[] = [
  {
    "id": "puleet-2026-ma-001",
    "section": "Mathematics",
    "topic": "Algebra",
    "difficulty": "medium",
    "question": "The polynomial p(x)=3x^3-5x^2+kx+4 leaves remainder 17 when divided by x-2. What is k?",
    "options": [
      "3/2",
      "5/2",
      "7/2",
      "9/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "By the remainder theorem, p(2)=17. Thus 24-20+2k+4=17, so 8+2k=17 and k=9/2.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ma-002",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "For A=[[3,-2],[5,1]], what is trace(A^2)?",
    "options": [
      "-10",
      "10",
      "-4",
      "4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "A^2=[[-1,-8],[20,-9]], so trace(A^2)=-1+(-9)=-10.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ma-003",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "For 0\u00b0<x<90\u00b0, if sin(2x)=sqrt(3)/2, the possible values of x are",
    "options": [
      "30\u00b0 and 60\u00b0",
      "30\u00b0 only",
      "45\u00b0 and 60\u00b0",
      "15\u00b0 and 75\u00b0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "In 0\u00b0<2x<180\u00b0, sin(2x)=sqrt(3)/2 at 2x=60\u00b0 or 120\u00b0, giving x=30\u00b0 or 60\u00b0.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ma-004",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "The perpendicular distance from the point (4, -3) to the line 5x + 12y - 7 = 0 is",
    "options": [
      "7/13",
      "23/17",
      "23/13",
      "13/23"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The point-to-line distance is |5(4)+12(-3)-7|/sqrt(5^2+12^2) = |20-36-7|/13 = 23/13.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ma-005",
    "section": "Mathematics",
    "topic": "Differential Calculus of one variable",
    "difficulty": "medium",
    "question": "If y=x^2 e^x, then y'' at x=0 is",
    "options": [
      "4",
      "1",
      "2",
      "0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "y'=e^x(x^2+2x) and y''=e^x(x^2+4x+2). At x=0, y''=2.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ma-006",
    "section": "Mathematics",
    "topic": "Differential Calculus of two variables",
    "difficulty": "medium",
    "question": "For f(x,y)=x^2 y+3xy^2, evaluate partial^2 f/(partial y partial x) at (1,2).",
    "options": [
      "16",
      "10",
      "8",
      "14"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "First f_x=2xy+3y^2. Then f_xy=2x+6y. At (1,2), this is 2+12=14.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ma-007",
    "section": "Mathematics",
    "topic": "Ordinary Differential Equations",
    "difficulty": "medium",
    "question": "A first integral of (2x+y)dx+(x+4y)dy=0 is",
    "options": [
      "2x^2+xy+4y^2=C",
      "x^2-xy+2y^2=C",
      "x^2+xy+2y^2=C",
      "x^2+2xy+y^2=C"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "M=2x+y and N=x+4y satisfy M_y=N_x=1, so the equation is exact. Integrating M with respect to x gives x^2+xy+g(y); matching N gives g'(y)=4y, hence g=2y^2.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ma-008",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "hard",
    "question": "Evaluate the definite integral from 1 to 3 of (8x+7)/(4x^2+7x+10) dx.",
    "options": [
      "ln(67/21)",
      "ln(21/67)",
      "46",
      "ln(46)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The numerator is the derivative of the denominator. Hence the integral is ln(4x^2+7x+10) evaluated from 1 to 3, giving ln(67)-ln(21)=ln(67/21).",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ma-009",
    "section": "Mathematics",
    "topic": "Vector Differential Calculus",
    "difficulty": "medium",
    "question": "For F=(x^2 y)i+(y z^2)j+(xz)k, the divergence of F at (1,2,3) is",
    "options": [
      "12",
      "14",
      "9",
      "16"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "div F=partial(x^2y)/partial x + partial(yz^2)/partial y + partial(xz)/partial z =2xy+z^2+x. At (1,2,3), this is 4+9+1=14.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ma-010",
    "section": "Mathematics",
    "topic": "Vector Integral Calculus",
    "difficulty": "medium",
    "question": "Let F=grad(phi) where phi=x^2+y^2. The line integral of F\u00b7dr from (1,2) to (3,-1), along any smooth path, equals",
    "options": [
      "10",
      "5",
      "15",
      "-5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "A gradient field is conservative, so the integral equals phi(3,-1)-phi(1,2)=(9+1)-(1+4)=5.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  }
];
