import type { Question } from '../questions';

export const VITEEE_2026_MPCEA_MIXED_QUICK_PRACTICE_60M_1: Question[] = [
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-001",
    "section": "Mathematics",
    "topic": "Matrices and their Applications: Matrix Algebra",
    "difficulty": "easy",
    "question": "If A is the 2 x 2 identity matrix, then A^3 equals",
    "options": [
      "A",
      "3A",
      "A^2 + A",
      "the zero matrix"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For the identity matrix I, every positive power I^n equals I.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-002",
    "section": "Mathematics",
    "topic": "Matrices and their Applications: Matrix Algebra",
    "difficulty": "medium",
    "question": "For A = [[1,2],[3,4]], what is the sum of the entries in adj(A)?",
    "options": [
      "-2",
      "2",
      "10",
      "0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For [[a,b],[c,d]], adj(A)=[[d,-b],[-c,a]]. Here adj(A)=[[4,-2],[-3,1]], whose entries sum to 0.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-003",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Complex Numbers",
    "difficulty": "easy",
    "question": "If z = i^23, then z equals",
    "options": [
      "i",
      "-i",
      "1",
      "-1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Powers of i repeat every 4. Since 23 mod 4 = 3, i^23=i^3=-i.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-004",
    "section": "Mathematics",
    "topic": "Trigonometry and Complex Numbers: Trigonometric Identities",
    "difficulty": "medium",
    "question": "If tan theta + cot theta = 4, what is sin 2theta?",
    "options": [
      "1/4",
      "sqrt(3)/2",
      "2",
      "1/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "tan theta + cot theta = (sin^2+cos^2)/(sin cos)=1/(sin cos)=4, so sin theta cos theta=1/4. Hence sin2theta=1/2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-005",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Ellipse",
    "difficulty": "medium",
    "question": "The equation x^2 + 4y^2 = 16 represents an ellipse whose major-axis length is",
    "options": [
      "4",
      "6",
      "8",
      "16"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Rewrite as x^2/16 + y^2/4=1. The semi-major axis is 4, so the major-axis length is 8.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-006",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Two Dimensions: Parabola",
    "difficulty": "hard",
    "question": "A chord of the parabola y^2=4x has midpoint (2,1). What is the equation of the chord?",
    "options": [
      "y = x/2",
      "2y = x + 2",
      "x + 2y = 4",
      "y = 2x - 3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For y^2=4ax with a=1, a chord with midpoint (x1,y1) satisfies yy1 - 2a(x+x1) = y1^2 - 4ax1. With (2,1), y - 2(x+2) = 1 - 8, which simplifies to y = 2x - 3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-007",
    "section": "Mathematics",
    "topic": "Vector Algebra: Vector Operations",
    "difficulty": "easy",
    "question": "If |a|=3 and |b|=4 with a perpendicular to b, then |a+b| is",
    "options": [
      "5",
      "1",
      "7",
      "12"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "|a+b|^2=|a|^2+|b|^2=9+16=25, so |a+b|=5.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-008",
    "section": "Mathematics",
    "topic": "Analytical Geometry of Three Dimensions: Planes in Three Dimensions",
    "difficulty": "medium",
    "question": "Which point lies on the plane x + 2y - z = 3?",
    "options": [
      "(1,1,0)",
      "(0,1,0)",
      "(2,0,0)",
      "(1,0,1)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For (1,1,0), x+2y-z=1+2=3, so it lies on the plane.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-009",
    "section": "Mathematics",
    "topic": "Differential Calculus: Differentiation",
    "difficulty": "easy",
    "question": "If f(x)=1/x, then f'(1) equals",
    "options": [
      "1",
      "-1",
      "0",
      "-2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f'(x)=-1/x^2, so f'(1)=-1.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-010",
    "section": "Mathematics",
    "topic": "Differential Calculus: Limits",
    "difficulty": "medium",
    "question": "The standard small-angle limit of (1 - cos x)/x^2 as x tends to 0 is",
    "options": [
      "0",
      "1",
      "1/2",
      "2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using the standard small-angle limit 1-cos x ~ x^2/2, the ratio tends to 1/2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-011",
    "section": "Mathematics",
    "topic": "Differential Calculus: Applications of Derivatives",
    "difficulty": "hard",
    "question": "For f(x)=x + 4/x on x>0, the minimum value of f is",
    "options": [
      "2",
      "4",
      "3",
      "5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f'(x)=1-4/x^2=0 gives x=2. Since f''(2)>0, this is a minimum, and f(2)=2+2=4.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-012",
    "section": "Mathematics",
    "topic": "Integral Calculus and its Applications: Definite Integrals",
    "difficulty": "medium",
    "question": "Compute K = integral_0^1 dx/(1+x)^2. The value of K is",
    "options": [
      "ln2",
      "1",
      "1/4",
      "1/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The antiderivative is -1/(1+x). From 0 to 1 this gives -1/2 - (-1)=1/2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-013",
    "section": "Mathematics",
    "topic": "Integral Calculus and its Applications: Area of Bounded Regions",
    "difficulty": "hard",
    "question": "The area between y=x^2 and y=2x from x=0 to x=2 is",
    "options": [
      "4/3",
      "2/3",
      "2",
      "8/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "On [0,2], 2x>=x^2. Area=integral_0^2(2x-x^2)dx=[x^2-x^3/3]_0^2=4-8/3=4/3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-014",
    "section": "Mathematics",
    "topic": "Differential Equations: Separable Differential Equations",
    "difficulty": "medium",
    "question": "For dy/dx = -2y with y(0)=3, y(x) is",
    "options": [
      "3e^(2x)",
      "3e^(-2x)",
      "e^(-6x)",
      "3-2x"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Separate variables: dy/y=-2dx. Thus y=Ce^-2x, and y(0)=3 gives C=3.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-015",
    "section": "Mathematics",
    "topic": "Probability and Distributions: Conditional Probability and Bayes Theorem",
    "difficulty": "hard",
    "question": "A fair die is rolled twice. Given that the sum is 8, what is the probability that at least one die shows 5?",
    "options": [
      "1/5",
      "2/5",
      "1/2",
      "3/5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Ordered outcomes summing to 8 are (2,6),(3,5),(4,4),(5,3),(6,2), five equally likely cases. Two contain a 5, so probability=2/5.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-016",
    "section": "Mathematics",
    "topic": "Discrete Mathematics: Binomial Theorem",
    "difficulty": "easy",
    "question": "The number of terms in the expansion of (a+b)^7 is",
    "options": [
      "7",
      "14",
      "49",
      "8"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The binomial expansion has powers b^0 through b^7, giving 8 terms.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Mathematics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Maths_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-017",
    "section": "Physics",
    "topic": "Mechanics and Properties of Matter, including Heat and Thermodynamics: Work, Energy and Momentum",
    "difficulty": "easy",
    "question": "A force of 15 N acts on a body that moves 4 m perpendicular to the force. The work done by the force is",
    "options": [
      "15 J",
      "60 J",
      "-60 J",
      "0 J"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "W=Fs cos90 degrees=0.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-018",
    "section": "Physics",
    "topic": "Mechanics and Properties of Matter, including Heat and Thermodynamics: Work, Energy and Momentum",
    "difficulty": "medium",
    "question": "A 1000 kg car increases its speed from 10 m/s to 14 m/s. What is the increase in kinetic energy?",
    "options": [
      "24 kJ",
      "48 kJ",
      "96 kJ",
      "196 kJ"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Delta K=(1/2)1000(14^2-10^2)=500(96)=48000 J=48 kJ.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-019",
    "section": "Physics",
    "topic": "Mechanics and Properties of Matter, including Heat and Thermodynamics: Fluid Mechanics",
    "difficulty": "medium",
    "question": "A liquid flows from a pipe section of area 6 cm^2 into one of area 2 cm^2. If speed in the wider section is 1.5 m/s, speed in the narrower section is",
    "options": [
      "4.5 m/s",
      "0.5 m/s",
      "3.0 m/s",
      "9.0 m/s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Continuity gives A1v1=A2v2, so v2=(6/2)1.5=4.5 m/s.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-020",
    "section": "Physics",
    "topic": "Mechanics and Properties of Matter, including Heat and Thermodynamics: Thermodynamics",
    "difficulty": "hard",
    "question": "A gas absorbs 500 J of heat and does 180 J of work. It then loses 100 J of heat while 40 J of work is done on it. What is the net change in internal energy over both steps?",
    "options": [
      "180 J",
      "320 J",
      "260 J",
      "460 J"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Step 1: Delta U1=Q-W=500-180=320 J. Step 2: Q=-100 J and work done by gas W=-40 J, so Delta U2=-100-(-40)=-60 J. Net Delta U=260 J.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-021",
    "section": "Physics",
    "topic": "Electrostatics: Electric Potential",
    "difficulty": "easy",
    "question": "The electric potential at distance r from an isolated point charge q is proportional to",
    "options": [
      "1/r^2",
      "r",
      "r^2",
      "1/r"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "V=kq/r, so potential varies as 1/r.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-022",
    "section": "Physics",
    "topic": "Electrostatics: Capacitance and Energy",
    "difficulty": "medium",
    "question": "A 6 microF capacitor carries charge 18 microC. Its potential difference is",
    "options": [
      "1 V",
      "3 V",
      "6 V",
      "108 V"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "V=Q/C=18/6=3 V.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-023",
    "section": "Physics",
    "topic": "Current Electricity and Magnetic Effects of Electric Current: Current Electricity",
    "difficulty": "medium",
    "question": "A metal wire carries 3 A for 20 s. How much charge passes a cross-section?",
    "options": [
      "17 C",
      "23 C",
      "60 C",
      "180 C"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Q=It=3 x 20=60 C.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-024",
    "section": "Physics",
    "topic": "Current Electricity and Magnetic Effects of Electric Current: Magnetic Effects of Current",
    "difficulty": "hard",
    "question": "An electron enters mutually perpendicular electric and magnetic fields without deflection. If E=6 x 10^4 V/m and B=0.20 T, its speed is",
    "options": [
      "1.2 x 10^4 m/s",
      "3 x 10^4 m/s",
      "1.2 x 10^6 m/s",
      "3 x 10^5 m/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "No deflection requires qE=qvB, so v=E/B=6 x 10^4/0.20=3 x 10^5 m/s.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-025",
    "section": "Physics",
    "topic": "Electromagnetic Induction and Alternating Current: Alternating Current",
    "difficulty": "medium",
    "question": "In a series RC circuit, the resistance is 30 ohm and the capacitive reactance is 40 ohm. What is the magnitude of the impedance?",
    "options": [
      "10 ohm",
      "70 ohm",
      "50 ohm",
      "120 ohm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a series RC circuit, the impedance magnitude is Z = sqrt(R^2 + Xc^2) = sqrt(30^2 + 40^2) = 50 ohm.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-026",
    "section": "Physics",
    "topic": "Optics: Refraction and Total Internal Reflection",
    "difficulty": "easy",
    "question": "A ray passes from air into glass. It bends",
    "options": [
      "toward the normal",
      "away from the normal",
      "parallel to the interface always",
      "back along the incident path always"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Glass is optically denser than air, so the refracted ray bends toward the normal.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-027",
    "section": "Physics",
    "topic": "Optics: Lenses",
    "difficulty": "medium",
    "question": "A convex lens forms a virtual, erect, magnified image when the object is placed",
    "options": [
      "between the lens and its focal point",
      "beyond 2F",
      "at 2F",
      "at the focal point exactly"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A convex lens gives a virtual, erect, enlarged image only when the object is inside the focal length.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-028",
    "section": "Physics",
    "topic": "Dual Nature of Radiation, Atomic and Nuclear Physics: Atomic Physics",
    "difficulty": "medium",
    "question": "In Rutherford scattering, most alpha particles passed nearly undeviated because",
    "options": [
      "the nucleus is negatively charged",
      "electrons are more massive than alpha particles",
      "most of the atom is empty space",
      "alpha particles have no charge"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The atom's positive charge and most mass occupy a tiny nucleus, leaving most volume empty.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-029",
    "section": "Physics",
    "topic": "Dual Nature of Radiation, Atomic and Nuclear Physics: Nuclear Physics and Radioactivity",
    "difficulty": "hard",
    "question": "A nucleus with mass number 64 has radius R. Another nucleus with mass number 216 has radius approximately",
    "options": [
      "1.25R",
      "2R",
      "1.5R",
      "3.375R"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Nuclear radius scales as A^(1/3). Ratio=(216/64)^(1/3)=(6/4)=1.5.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-030",
    "section": "Physics",
    "topic": "Semiconductor Devices and their Applications: Logic Gates",
    "difficulty": "easy",
    "question": "A NOR gate outputs 1 when",
    "options": [
      "both inputs are 1",
      "exactly one input is 1",
      "at least one input is 1",
      "both inputs are 0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "NOR is NOT(OR), so output is 1 only when OR output is 0, which occurs for inputs 00.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Physics syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Physics_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-031",
    "section": "Chemistry",
    "topic": "Physical Chemistry: Atomic Structure",
    "difficulty": "easy",
    "question": "In the hydrogen emission spectrum, transitions that end at n = 2 belong to the",
    "options": [
      "Lyman series",
      "Balmer series",
      "Paschen series",
      "Brackett series"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The Balmer series consists of hydrogen transitions from higher levels down to n = 2.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-032",
    "section": "Chemistry",
    "topic": "Physical Chemistry: Chemical Kinetics",
    "difficulty": "medium",
    "question": "For a zero-order reaction, the concentration of reactant changes with time as",
    "options": [
      "[A]=[A]0e^-kt",
      "ln[A]=ln[A]0-kt",
      "1/[A]=1/[A]0+kt",
      "[A] = [A]0 - kt"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The integrated zero-order rate law is [A]=[A]0-kt.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-033",
    "section": "Chemistry",
    "topic": "Physical Chemistry: Solutions",
    "difficulty": "hard",
    "question": "A solution is made by dissolving 18 g of glucose (molar mass 180 g/mol) in 180 g of water (molar mass 18 g/mol). If pure water has vapor pressure 23.8 mmHg at the temperature considered, what is the solution vapor pressure assuming ideal behavior?",
    "options": [
      "about 21.42 mmHg",
      "about 23.56 mmHg",
      "about 23.80 mmHg",
      "about 2.36 mmHg"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Moles of glucose = 18/180 = 0.10 and moles of water = 180/18 = 10. The mole fraction of water is 10/10.1 = 0.9901. Raoult's law gives P = 0.9901 x 23.8 = about 23.56 mmHg.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-034",
    "section": "Chemistry",
    "topic": "Inorganic and Material Chemistry: p-block Elements",
    "difficulty": "easy",
    "question": "Which element belongs to the p-block?",
    "options": [
      "Na",
      "Sc",
      "Cl",
      "Zn"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Chlorine has valence electrons in a p subshell and belongs to the p-block.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-035",
    "section": "Chemistry",
    "topic": "Inorganic and Material Chemistry: d-block Elements",
    "difficulty": "medium",
    "question": "The color of many transition-metal ions mainly arises from",
    "options": [
      "nuclear transitions",
      "electronic transitions involving split d levels",
      "rotation of whole ions only",
      "proton transfer"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Ligand fields split d orbitals, and absorption associated with d-level transitions often gives visible colors.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-036",
    "section": "Chemistry",
    "topic": "Inorganic and Material Chemistry: Solid State Chemistry",
    "difficulty": "medium",
    "question": "For a simple cubic lattice, the coordination number is",
    "options": [
      "6",
      "4",
      "8",
      "12"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Each atom in a simple cubic lattice has six nearest neighbors along the three Cartesian axes.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-037",
    "section": "Chemistry",
    "topic": "Analytical Chemistry: Electrolytic Conductance",
    "difficulty": "medium",
    "question": "If the molar conductivity of an electrolyte increases on dilution, the main reason is that",
    "options": [
      "the number of atoms in each ion increases",
      "Faraday constant changes",
      "ionic interactions decrease and ions move more independently",
      "electrons replace ions as charge carriers"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Dilution reduces interionic interactions and generally increases ionic mobility and degree of dissociation where relevant.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-038",
    "section": "Chemistry",
    "topic": "Analytical Chemistry: Electrochemistry",
    "difficulty": "hard",
    "question": "The same quantity of electricity is passed through AgNO3 and CuSO4 solutions in series. If 10.8 g of Ag is deposited, what mass of Cu is deposited? Use Ag = 108 and Cu = 63.5.",
    "options": [
      "6.35 g",
      "1.59 g",
      "3.18 g",
      "10.8 g"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "10.8 g Ag is 0.100 mol Ag, requiring 0.100 mol electrons. Cu2+ requires 2 mol electrons per mol Cu, so 0.050 mol Cu is deposited. Its mass is 0.050 x 63.5 = 3.175 g, about 3.18 g.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-039",
    "section": "Chemistry",
    "topic": "Basic Principles of Organic Chemistry: Bonding and Hybridization",
    "difficulty": "easy",
    "question": "A carbon atom in methane is",
    "options": [
      "sp hybridized",
      "sp3 hybridized",
      "sp2 hybridized",
      "dsp2 hybridized"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Methane has four equivalent sigma bonds in tetrahedral geometry, corresponding to sp3 hybridization.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-040",
    "section": "Chemistry",
    "topic": "Basic Principles of Organic Chemistry: Electrophiles and Nucleophiles",
    "difficulty": "medium",
    "question": "In nitration of benzene, the electrophile that attacks the aromatic ring is",
    "options": [
      "NO3-",
      "OH-",
      "NO2+",
      "NH3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The nitrating mixture generates the nitronium ion NO2+, which is the electrophile in electrophilic aromatic substitution.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-041",
    "section": "Chemistry",
    "topic": "Properties and Chemistry of Functionalized Organic Compounds: Carbonyl Compounds",
    "difficulty": "medium",
    "question": "Which compound gives a positive iodoform test?",
    "options": [
      "ethanol",
      "methanol",
      "propan-1-ol",
      "benzyl alcohol"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Ethanol is oxidized under the test conditions to ethanal, which contains the required CH3CO- equivalent and gives iodoform.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-042",
    "section": "Chemistry",
    "topic": "Organic Nitrogen Compounds: Amines and Nitro Compounds",
    "difficulty": "hard",
    "question": "Which sequence converts aniline to benzoic acid?",
    "options": [
      "diazotization, replacement by CN, then nitrile hydrolysis",
      "direct reduction, then oxidation",
      "acetylation, then hydrogenation",
      "bromination, then dehydration"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Aniline is diazotized, the diazonium group can be replaced by CN, and hydrolysis of benzonitrile gives benzoic acid.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-043",
    "section": "Chemistry",
    "topic": "Biomolecules and Polymers: Nucleic Acids",
    "difficulty": "medium",
    "question": "Which nitrogenous base is present in RNA but not DNA?",
    "options": [
      "thymine",
      "adenine",
      "uracil",
      "guanine"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "RNA uses uracil where DNA uses thymine.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-044",
    "section": "Chemistry",
    "topic": "Biomolecules and Polymers: Polymers",
    "difficulty": "easy",
    "question": "Bakelite is formed by condensation of phenol with",
    "options": [
      "formaldehyde",
      "ethene",
      "styrene",
      "caprolactam"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Bakelite is a phenol-formaldehyde condensation polymer.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Chemistry syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/Chemistry_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-045",
    "section": "English",
    "topic": "Pronunciation",
    "difficulty": "easy",
    "question": "Which option ends with the /f/ sound, as the word 'laugh' does?",
    "options": [
      "though",
      "cough",
      "through",
      "bough"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "'Laugh' and 'cough' both end with the /f/ sound; the others do not.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 English syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-046",
    "section": "English",
    "topic": "Comprehension of a short passage or lines of poems",
    "difficulty": "medium",
    "question": "Read the original passage: 'Arun planted herbs on the apartment balcony mainly to use them in cooking. Within weeks, he noticed that checking the plants each morning had become a quiet routine he valued even on days when he did not harvest anything.' What additional benefit did Arun discover?",
    "options": [
      "The gardening routine itself became personally rewarding.",
      "The herbs eliminated the need to cook.",
      "The balcony received no sunlight.",
      "He began selling plants for profit."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The passage says Arun valued the morning routine even when he harvested nothing, showing that the activity itself became rewarding.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 English syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-047",
    "section": "Aptitude",
    "topic": "Data Interpretation",
    "difficulty": "easy",
    "question": "A class has 18 students choosing Physics club and 12 choosing Chemistry club, with no overlap. What percentage of these 30 students chose Physics club?",
    "options": [
      "40%",
      "50%",
      "66.7%",
      "60%"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "18/30 x 100 = 60%.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-048",
    "section": "Aptitude",
    "topic": "Data Sufficiency",
    "difficulty": "medium",
    "question": "Question: What is the area of a rectangle? Statement 1: Its length is 8 cm. Statement 2: Its perimeter is 28 cm. Which is correct?",
    "options": [
      "Statement 1 alone is sufficient",
      "Statement 2 alone is sufficient",
      "Either statement alone is sufficient",
      "Both statements together are sufficient, but neither alone is sufficient"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Length alone does not give width; perimeter alone does not fix both sides. Together 2(8+w)=28 gives w=6, so area is determined.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-049",
    "section": "Aptitude",
    "topic": "Syllogism",
    "difficulty": "easy",
    "question": "Statements: All roses are flowers. No flowers are stones. Which conclusion definitely follows?",
    "options": [
      "No rose is a stone",
      "Some stones are roses",
      "All stones are flowers",
      "Some flowers are stones"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Every rose is a flower, and no flower is a stone, so no rose can be a stone.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  },
  {
    "id": "viteee-2026-mpcea-mixed-quick-60m-01-050",
    "section": "Aptitude",
    "topic": "Clocks, Calendars and Directions",
    "difficulty": "medium",
    "question": "A clock gains 5 minutes every 12 hours. It is set correctly at 8:00 AM on Monday. What time will it show when the actual time is 8:00 AM on Wednesday?",
    "options": [
      "8:10 AM on Wednesday",
      "8:20 AM on Wednesday",
      "8:25 AM on Wednesday",
      "8:40 AM on Wednesday"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "From Monday 8:00 AM to Wednesday 8:00 AM is 48 hours, or four 12-hour intervals. The clock gains 4 x 5 = 20 minutes, so it shows 8:20 AM on Wednesday.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-12"
    }
  }
];
