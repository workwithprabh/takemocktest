import type { Question } from '../questions';

export const TG_ECET_2026_MATHEMATICS_1: Question[] = [
  {
    "id": "tg-ecet-2026-ma-001",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "easy",
    "question": "If A = [[2, -1], [3, 4]], what is det(A)?",
    "options": [
      "11",
      "-11",
      "14",
      "5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "det(A) = 2\u00d74 - (-1)\u00d73 = 11.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-002",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "For A = [[1, 2], [2, 4]], the product A\u00b7adj(A) is",
    "options": [
      "2A",
      "the 2\u00d72 zero matrix",
      "the identity matrix",
      "A itself"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For any square matrix, A\u00b7adj(A)=det(A)I. Here det(A)=4-4=0, so the product is the zero matrix.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-003",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "If A = [[2, 1], [5, 3]], then the (1,2) entry of A^(-1) is",
    "options": [
      "1",
      "-5",
      "-1",
      "5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "det(A)=2\u00d73-1\u00d75=1, so A^(-1)=[[3,-1],[-5,2]]. Hence the (1,2) entry is -1.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-004",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "If [[1, 2], [0, 3]] [x, y]^T = [7, 9]^T, then x equals",
    "options": [
      "5",
      "3",
      "2",
      "1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The second equation gives 3y=9, so y=3. Then x+2y=7 gives x=1.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-005",
    "section": "Mathematics",
    "topic": "Partial Fractions",
    "difficulty": "easy",
    "question": "Before resolving a rational function into partial fractions, if the degree of the numerator is not less than the degree of the denominator, one should first",
    "options": [
      "perform polynomial division",
      "differentiate the denominator",
      "set the denominator equal to zero and stop",
      "take logarithms"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Partial-fraction decomposition is applied to a proper rational function. An improper rational function is first reduced by polynomial division.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-006",
    "section": "Mathematics",
    "topic": "Logarithms",
    "difficulty": "easy",
    "question": "If log_3 81 = k, then k equals",
    "options": [
      "3",
      "4",
      "9",
      "27"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Since 3^4=81, log_3 81=4.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-007",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "hard",
    "question": "Let A be a 3\u00d73 matrix with det(A) = -2. What is det(3A)?",
    "options": [
      "-18",
      "54",
      "-54",
      "-6"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a 3\u00d73 matrix, det(cA)=c^3 det(A). Thus det(3A)=27\u00d7(-2)=-54.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-008",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "If sin(theta) - cos(theta) = 5/17, then sin(2theta) equals",
    "options": [
      "25/289",
      "239/289",
      "5/17",
      "264/289"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Squaring gives (sin(theta)-cos(theta))^2 = 1 - 2sin(theta)cos(theta) = 1 - sin(2theta). Hence 25/289 = 1 - sin(2theta), so sin(2theta) = 264/289.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-009",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "If tan A=1/2 and tan B=1/3, with A+B acute, then tan(A+B) is",
    "options": [
      "1",
      "5/6",
      "1/5",
      "6/5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "tan(A+B)=(1/2+1/3)/(1-(1/2)(1/3))=(5/6)/(5/6)=1.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-010",
    "section": "Mathematics",
    "topic": "Trigonometry",
    "difficulty": "medium",
    "question": "If tan(theta) + cot(theta) = 41/20, then sin(2theta) equals",
    "options": [
      "20/41",
      "40/41",
      "41/40",
      "21/41"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "tan(theta)+cot(theta) = (sin^2(theta)+cos^2(theta))/(sin(theta)cos(theta)) = 1/(sin(theta)cos(theta)) = 2/sin(2theta). Thus 41/20 = 2/sin(2theta), giving sin(2theta) = 40/41.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-011",
    "section": "Mathematics",
    "topic": "Inverse Trigonometric Functions",
    "difficulty": "hard",
    "question": "Using the principal value range of tan^(-1), tan^(-1)(tan(3pi/4)) equals",
    "options": [
      "3pi/4",
      "-3pi/4",
      "-pi/4",
      "pi/4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "tan(3pi/4)=-1. The principal range of tan^(-1) is (-pi/2,pi/2), so tan^(-1)(-1)=-pi/4.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-012",
    "section": "Mathematics",
    "topic": "Hyperbolic Functions",
    "difficulty": "medium",
    "question": "Which identity is correct for all real x?",
    "options": [
      "cosh^2 x + sinh^2 x = 1",
      "cosh x - sinh x = 1",
      "tanh^2 x + sech^2 x = 0",
      "cosh^2 x - sinh^2 x = 1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "From the definitions cosh x=(e^x+e^-x)/2 and sinh x=(e^x-e^-x)/2, their squared difference is 1.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-013",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "medium",
    "question": "If z=1+sqrt(3)i, then |z| is",
    "options": [
      "2",
      "4",
      "sqrt(3)",
      "1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "|z|=sqrt(1^2+(sqrt3)^2)=sqrt4=2.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-014",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "hard",
    "question": "The principal argument of -1 + sqrt(3)i is",
    "options": [
      "-pi/3",
      "2pi/3",
      "pi/3",
      "4pi/3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The point (-1,sqrt3) lies in quadrant II and has reference angle pi/3, so the principal argument is 2pi/3.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-015",
    "section": "Mathematics",
    "topic": "Analytical Geometry",
    "difficulty": "easy",
    "question": "The slope of the line 3x - 2y + 5 = 0 is",
    "options": [
      "-2/3",
      "2/3",
      "3/2",
      "-3/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Writing y=(3/2)x+5/2 shows slope 3/2.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-016",
    "section": "Mathematics",
    "topic": "Analytical Geometry",
    "difficulty": "medium",
    "question": "The distance from (2,-1) to the line 4x - 3y + 1 = 0 is",
    "options": [
      "6/5",
      "8/5",
      "3",
      "12/5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Distance=|4(2)-3(-1)+1|/sqrt(4^2+(-3)^2)=12/5.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-017",
    "section": "Mathematics",
    "topic": "Analytical Geometry",
    "difficulty": "medium",
    "question": "A parabola has focus (5, 0) and directrix x = -3. If a point P on the parabola has y-coordinate 6, what is the x-coordinate of P?",
    "options": [
      "13/4",
      "9/4",
      "4",
      "5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The vertex is midway between the focus x=5 and directrix x=-3, so the vertex is (1,0). The focal length is 4, hence the parabola is y^2 = 16(x-1). For y=6, 36 = 16(x-1), so x-1 = 9/4 and x = 13/4.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-018",
    "section": "Mathematics",
    "topic": "Analytical Geometry",
    "difficulty": "medium",
    "question": "The tangent to x^2 + y^2 = 25 at the point (3,4) is",
    "options": [
      "x + y = 7",
      "3x + 4y = 25",
      "4x + 3y = 25",
      "3x - 4y = 25"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For x^2+y^2=r^2, the tangent at (x1,y1) is xx1+yy1=r^2, giving 3x+4y=25.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-019",
    "section": "Mathematics",
    "topic": "Analytical Geometry",
    "difficulty": "medium",
    "question": "The lines 2x + y = 5 and x - y = 1 intersect at",
    "options": [
      "(3,-1)",
      "(1,2)",
      "(2, 1)",
      "(0,5)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "From x-y=1, y=x-1. Substituting into 2x+y=5 gives 3x-1=5, so x=2 and y=1.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-020",
    "section": "Mathematics",
    "topic": "Analytical Geometry",
    "difficulty": "medium",
    "question": "For the ellipse x^2/36 + y^2/20 = 1, the focal distance from the centre is",
    "options": [
      "16",
      "sqrt(14)",
      "2",
      "4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Here a^2=36 and b^2=20, so c^2=a^2-b^2=16 and c=4.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-021",
    "section": "Mathematics",
    "topic": "Analytical Geometry",
    "difficulty": "hard",
    "question": "The angle between the lines x + 2y = 0 and 2x - y = 0 is",
    "options": [
      "90\u00b0",
      "60\u00b0",
      "30\u00b0",
      "45\u00b0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Their slopes are -1/2 and 2, whose product is -1; therefore the lines are perpendicular.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-022",
    "section": "Mathematics",
    "topic": "Differentiation",
    "difficulty": "easy",
    "question": "If y = x^4 - 3x^2 + 2, then dy/dx is",
    "options": [
      "x^3 - 6x",
      "4x^3 - 6x",
      "4x^3 - 3x",
      "4x^3 - 6"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Differentiate term by term: d(x^4)/dx=4x^3 and d(-3x^2)/dx=-6x.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-023",
    "section": "Mathematics",
    "topic": "Differentiation",
    "difficulty": "medium",
    "question": "The derivative of tan^(-1)(2x) is",
    "options": [
      "2/(1+2x^2)",
      "1/(1+4x^2)",
      "2/(1+4x^2)",
      "1/(1+2x)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using d(tan^-1 u)/dx=u'/(1+u^2) with u=2x gives 2/(1+4x^2).",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-024",
    "section": "Mathematics",
    "topic": "Differentiation",
    "difficulty": "medium",
    "question": "For the curve x^2 + 5y^2 = 21, the slope dy/dx at (1,2) is",
    "options": [
      "-1/5",
      "1/10",
      "1/5",
      "-1/10"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Implicit differentiation gives 2x+10y(dy/dx)=0, so dy/dx=-x/(5y). At (1,2), this is -1/10.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-025",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "medium",
    "question": "For f(x)=x^3 - 3x^2 - 9x + 5, the value of f''(2) is",
    "options": [
      "6",
      "-6",
      "12",
      "0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "f'(x)=3x^2-6x-9 and f''(x)=6x-6. Hence f''(2)=12-6=6.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-026",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "medium",
    "question": "The function f(x)=x^2-8x+3 has its minimum at x=",
    "options": [
      "8",
      "4",
      "3",
      "-4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "f'(x)=2x-8=0 gives x=4, and f''(x)=2>0, so this is the minimum point.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-027",
    "section": "Mathematics",
    "topic": "Partial Differentiation",
    "difficulty": "medium",
    "question": "If z=x^2y + 3xy^2, then \u2202z/\u2202x is",
    "options": [
      "x^2 + 6xy",
      "2x + 6y",
      "2xy + 3y^2",
      "2xy + 6xy"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Treating y as constant, \u2202(x^2y)/\u2202x=2xy and \u2202(3xy^2)/\u2202x=3y^2.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-028",
    "section": "Mathematics",
    "topic": "Differentiation",
    "difficulty": "hard",
    "question": "If y = x^x for x>0, then dy/dx is",
    "options": [
      "x(ln x+1)",
      "x^(x-1)",
      "x^x ln x",
      "x^x(ln x + 1)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Taking logs, ln y=x ln x. Differentiating gives y'/y=ln x+1, hence y'=x^x(ln x+1).",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-029",
    "section": "Mathematics",
    "topic": "Integration",
    "difficulty": "easy",
    "question": "\u222b(3x^2 - 4) dx equals",
    "options": [
      "x^3 - 4x + C",
      "3x^3 - 4x + C",
      "x^2 - 4x + C",
      "x^3 - 4 + C"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Integrating termwise gives x^3-4x+C.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-030",
    "section": "Mathematics",
    "topic": "Integration",
    "difficulty": "easy",
    "question": "\u222b cos(3x) dx equals",
    "options": [
      "(1/3)cos(3x)+C",
      "(1/3)sin(3x) + C",
      "sin x + C",
      "3sin(3x)+C"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Since d[sin(3x)]/dx=3cos(3x), the integral is (1/3)sin(3x)+C.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-031",
    "section": "Mathematics",
    "topic": "Integration",
    "difficulty": "medium",
    "question": "\u222b_0^2 (x+1) dx is",
    "options": [
      "3",
      "2",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "[x^2/2+x]_0^2=2+2=4.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-032",
    "section": "Mathematics",
    "topic": "Integration by Parts",
    "difficulty": "medium",
    "question": "\u222b x cos x dx equals",
    "options": [
      "x sin x - cos x + C",
      "sin x + C",
      "x cos x + sin x + C",
      "x sin x + cos x + C"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "With u=x and dv=cos x dx, v=sin x. Thus \u222bx cosx dx=x sinx-\u222bsinx dx=x sinx+cosx+C.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-033",
    "section": "Mathematics",
    "topic": "Applications of Integration",
    "difficulty": "medium",
    "question": "The area under y=2x from x=1 to x=3 is",
    "options": [
      "8",
      "4",
      "6",
      "10"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Area=\u222b_1^3 2x dx=[x^2]_1^3=9-1=8.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-034",
    "section": "Mathematics",
    "topic": "Numerical Integration",
    "difficulty": "medium",
    "question": "Using the trapezoidal rule with one interval, the approximate value of \u222b_0^2 x^2 dx is",
    "options": [
      "6",
      "4",
      "8/3",
      "2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "With h=2, trapezoidal estimate=(h/2)[f(0)+f(2)]=1\u00d7(0+4)=4.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-035",
    "section": "Mathematics",
    "topic": "Integration",
    "difficulty": "hard",
    "question": "\u222b dx/(x^2+9) equals",
    "options": [
      "(1/3)ln(x^2+9)+C",
      "(1/9)tan^(-1)(x/3)+C",
      "(1/3)tan^(-1)(x/3) + C",
      "tan^(-1)(x/3)+C"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using \u222bdx/(x^2+a^2)=(1/a)tan^(-1)(x/a)+C with a=3 gives the result.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-036",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "easy",
    "question": "The order of d^3y/dx^3 + 2(dy/dx)^2 + y = 0 is",
    "options": [
      "6",
      "2",
      "1",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The highest derivative present is the third derivative, so the order is 3.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-037",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "The general solution of dy/dx = 4x^3 is",
    "options": [
      "y = x^4 + C",
      "y=x^3+C",
      "y=4x^4+C",
      "y=3x^4+C"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Integrating, y=\u222b4x^3 dx=x^4+C.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-038",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "For dy/dx = y/x, x>0, a general solution is",
    "options": [
      "y=C e^x",
      "y = Cx",
      "y=Cx^2",
      "y=C/x"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Separating variables gives dy/y=dx/x, so ln|y|=ln x+C and y=Cx.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-039",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "The differential equation (2xy + 3)dx + (x^2 + 4y)dy = 0 is",
    "options": [
      "Bernoulli with n=2",
      "not a differential equation",
      "exact",
      "linear in y only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For M=2xy+3 and N=x^2+4y, \u2202M/\u2202y=2x and \u2202N/\u2202x=2x. Since they are equal, the equation is exact.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-040",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "A particular integral for y'' - y = e^(2x) is",
    "options": [
      "e^(2x)/2",
      "-e^(2x)/3",
      "e^(2x)",
      "e^(2x)/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For e^(ax), PI=e^(ax)/F(a), where F(D)=D^2-1. F(2)=4-1=3.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-041",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "hard",
    "question": "The complementary function of y'' - 5y' + 6y = 0 is",
    "options": [
      "C1 e^(2x) + C2 e^(3x)",
      "C1 e^x + C2 e^(6x)",
      "(C1+C2x)e^(3x)",
      "C1 cos 2x + C2 sin 3x"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The auxiliary equation m^2-5m+6=0 factors as (m-2)(m-3)=0.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-042",
    "section": "Mathematics",
    "topic": "Laplace Transforms",
    "difficulty": "easy",
    "question": "L{1} is",
    "options": [
      "0",
      "1/s",
      "1/s^2",
      "s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By definition, L{1}=\u222b_0^\u221e e^(-st)dt=1/s for s>0.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-043",
    "section": "Mathematics",
    "topic": "Laplace Transforms",
    "difficulty": "medium",
    "question": "L{t^2} is",
    "options": [
      "2/s^2",
      "6/s^4",
      "2/s^3",
      "1/s^2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "L{t^n}=n!/s^(n+1), so for n=2 the result is 2/s^3.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-044",
    "section": "Mathematics",
    "topic": "Laplace Transforms",
    "difficulty": "medium",
    "question": "L{e^(4t)} is",
    "options": [
      "1/(s+4)",
      "4/(s^2+16)",
      "s/(s^2-16)",
      "1/(s-4)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "L{e^(at)}=1/(s-a), hence 1/(s-4).",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-045",
    "section": "Mathematics",
    "topic": "Inverse Laplace Transforms",
    "difficulty": "medium",
    "question": "L^(-1){5/(s^2+25)} is",
    "options": [
      "sin 5t",
      "(1/5)sin 5t",
      "5 sin 5t",
      "cos 5t"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "L{sin at}=a/(s^2+a^2). With a=5, 5/(s^2+25) corresponds to sin5t.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-046",
    "section": "Mathematics",
    "topic": "Laplace Transforms",
    "difficulty": "hard",
    "question": "Using the first shifting property, L{e^(2t) cos 3t} is",
    "options": [
      "(s+2)/((s+2)^2+9)",
      "(s-2)/((s-2)^2+9)",
      "s/(s^2+9)",
      "3/((s-2)^2+9)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "If L{f(t)}=F(s), then L{e^(at)f(t)}=F(s-a). Since L{cos3t}=s/(s^2+9), replace s by s-2.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-047",
    "section": "Mathematics",
    "topic": "Fourier Series",
    "difficulty": "easy",
    "question": "For an odd function f(x) on (-pi,pi), which Fourier coefficients are zero?",
    "options": [
      "only b1",
      "all bn",
      "a0 and all an",
      "only a0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "An odd function has zero mean and zero cosine coefficients; only sine coefficients may remain.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-048",
    "section": "Mathematics",
    "topic": "Fourier Series",
    "difficulty": "medium",
    "question": "For an even function f(x) on (-pi,pi), the Fourier series contains",
    "options": [
      "only odd harmonics",
      "neither sine nor cosine terms",
      "only sine terms",
      "cosine terms and possibly a constant term"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Evenness makes every sine coefficient bn zero, while cosine coefficients and a0 may be nonzero.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-049",
    "section": "Mathematics",
    "topic": "Fourier Series",
    "difficulty": "medium",
    "question": "For f(x)=x on (-pi,pi), the Fourier series is of which type?",
    "options": [
      "sine series",
      "cosine series",
      "constant series",
      "half-range cosine series"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "f(x)=x is odd, so a0=an=0 and only sine terms occur.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-ma-050",
    "section": "Mathematics",
    "topic": "Fourier Series",
    "difficulty": "hard",
    "question": "If f(x)=1 on (-pi,pi), then its Fourier series has",
    "options": [
      "equal sine and cosine terms",
      "only the constant term",
      "only cosine terms with n>=1",
      "only sine terms"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A constant function already equals its mean value; all nonconstant Fourier coefficients are zero.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  }
];
