import type { Question } from '../questions';

export const JAM_2026_MATHEMATICS_FULL_MOCK_1: Question[] = [
    {
      "id": "jam-2026-mathematics-full-mock-01-001",
      "section": "Mathematics",
      "topic": "Group Theory \u2014 order of an element",
      "difficulty": "easy",
      "question": "In the additive group Z_12, what is the order of the element 8?",
      "options": [
        "2",
        "3",
        "4",
        "6"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.3333333333333333,
      "explanation": "The order of k in Z_n is n/gcd(k, n). Here gcd(8, 12) = 4, so the order is 12/4 = 3.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-002",
      "section": "Mathematics",
      "topic": "Group Theory \u2014 Lagrange's theorem",
      "difficulty": "easy",
      "question": "Let G be a finite group and H a subgroup of G. Lagrange's theorem asserts that:",
      "options": [
        "|H| divides |G|",
        "|G| divides |H|",
        "H is normal in G",
        "G is abelian"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.3333333333333333,
      "explanation": "Lagrange's theorem states that the order of a subgroup divides the order of the group. Normality and commutativity are separate questions entirely.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-003",
      "section": "Mathematics",
      "topic": "Linear Algebra \u2014 rank and nullity",
      "difficulty": "easy",
      "question": "Let T : R^5 -> R^3 be a linear transformation of rank 3. What is the dimension of the kernel of T?",
      "options": [
        "0",
        "2",
        "3",
        "5"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.3333333333333333,
      "explanation": "The rank-nullity theorem gives dim(ker T) = 5 - rank(T) = 5 - 3 = 2.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-004",
      "section": "Mathematics",
      "topic": "Sequences and Series of Real Numbers \u2014 p-series",
      "difficulty": "easy",
      "question": "For which values of p does the series sum over n >= 1 of 1/n^p converge?",
      "options": [
        "p > 0",
        "p > 1",
        "p >= 1",
        "all real p"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.3333333333333333,
      "explanation": "The p-series converges precisely when p > 1; at p = 1 it is the divergent harmonic series.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-005",
      "section": "Mathematics",
      "topic": "Sequences and Series of Real Numbers \u2014 necessary condition",
      "difficulty": "easy",
      "question": "If the series sum of a_n converges, then which conclusion follows?",
      "options": [
        "a_n tends to 0",
        "sum of |a_n| converges",
        "a_n is eventually monotone",
        "a_n is positive"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.3333333333333333,
      "explanation": "Convergence forces the terms to tend to zero. The converse fails, as the harmonic series shows, and absolute convergence is strictly stronger.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-006",
      "section": "Mathematics",
      "topic": "Functions of One Real Variable \u2014 mean value theorem",
      "difficulty": "easy",
      "question": "Rolle's theorem applies to a function f on [a, b] provided f is continuous on [a, b], differentiable on (a, b), and:",
      "options": [
        "f(a) = f(b)",
        "f(a) = 0",
        "f is increasing",
        "f is a polynomial"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.3333333333333333,
      "explanation": "Rolle's theorem needs equal endpoint values; it then guarantees a point c in (a, b) with f'(c) = 0.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-007",
      "section": "Mathematics",
      "topic": "Functions of One Real Variable \u2014 intermediate value theorem",
      "difficulty": "easy",
      "question": "A continuous function f on [0, 1] satisfies f(0) = -2 and f(1) = 3. Which conclusion is guaranteed?",
      "options": [
        "f has a root in (0, 1)",
        "f is increasing on (0, 1)",
        "f is differentiable on (0, 1)",
        "f is bounded below by -2 only"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.3333333333333333,
      "explanation": "The intermediate value theorem gives a point where f takes the value 0, since 0 lies between -2 and 3. Nothing about monotonicity or differentiability follows.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-008",
      "section": "Mathematics",
      "topic": "Differential Equations \u2014 order and degree",
      "difficulty": "easy",
      "question": "What are the order and degree of the differential equation (d^2y/dx^2)^3 + (dy/dx)^5 + y = 0?",
      "options": [
        "Order 2, degree 3",
        "Order 3, degree 2",
        "Order 2, degree 5",
        "Order 5, degree 3"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.3333333333333333,
      "explanation": "The order is that of the highest derivative, here the second, and the degree is the power to which that highest derivative is raised, here 3.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-009",
      "section": "Mathematics",
      "topic": "Group Theory \u2014 symmetric groups",
      "difficulty": "medium",
      "question": "How many elements of order 4 does the symmetric group S_4 contain?",
      "options": [
        "3",
        "6",
        "8",
        "9"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.3333333333333333,
      "explanation": "An element of order 4 in S_4 must be a 4-cycle, and the number of 4-cycles on four symbols is 4!/4 = 6.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-010",
      "section": "Mathematics",
      "topic": "Group Theory \u2014 cyclic groups",
      "difficulty": "medium",
      "question": "Which statement about a group G of order 15 is correct?",
      "options": [
        "G need not be abelian",
        "G is cyclic",
        "G has no element of order 5",
        "G has exactly two subgroups"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.3333333333333333,
      "explanation": "For |G| = pq with p < q primes and p not dividing q - 1, the group is cyclic. Here 3 does not divide 5 - 1 = 4, so G is cyclic of order 15.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-011",
      "section": "Mathematics",
      "topic": "Group Theory \u2014 quotient groups",
      "difficulty": "medium",
      "question": "Let G be a group and N a normal subgroup with |G| = 24 and |N| = 6. What is the order of the quotient group G/N?",
      "options": [
        "2",
        "4",
        "6",
        "18"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.6666666666666666,
      "explanation": "The order of G/N is the index [G : N] = |G|/|N| = 24/6 = 4.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-012",
      "section": "Mathematics",
      "topic": "Group Theory \u2014 homomorphisms",
      "difficulty": "medium",
      "question": "Let f : Z_12 -> Z_12 be the homomorphism f(x) = 3x. What is the order of the kernel of f?",
      "options": [
        "2",
        "3",
        "4",
        "6"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.6666666666666666,
      "explanation": "The kernel is {x : 3x = 0 mod 12} = {0, 4, 8}, which has 3 elements. Alternatively the image is 3Z_12 of order 4, so the kernel has order 12/4 = 3.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-013",
      "section": "Mathematics",
      "topic": "Linear Algebra \u2014 eigenvalues",
      "difficulty": "medium",
      "question": "The matrix A = [[2, 1], [1, 2]] has eigenvalues:",
      "options": [
        "1 and 2",
        "1 and 3",
        "2 and 3",
        "0 and 4"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.6666666666666666,
      "explanation": "The characteristic polynomial is (2 - x)^2 - 1 = x^2 - 4x + 3 = (x - 1)(x - 3), so the eigenvalues are 1 and 3.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-014",
      "section": "Mathematics",
      "topic": "Linear Algebra \u2014 diagonalisability",
      "difficulty": "medium",
      "question": "Which condition guarantees that a real n x n matrix A is diagonalisable over R?",
      "options": [
        "A is invertible",
        "A has n distinct real eigenvalues",
        "det(A) is positive",
        "A has trace zero"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.6666666666666666,
      "explanation": "Eigenvectors for distinct eigenvalues are linearly independent, so n distinct real eigenvalues give a basis of eigenvectors. Invertibility, positive determinant and zero trace say nothing about diagonalisability.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-015",
      "section": "Mathematics",
      "topic": "Linear Algebra \u2014 symmetric matrices",
      "difficulty": "medium",
      "question": "Let A be a real symmetric n x n matrix. Which statement is always true?",
      "options": [
        "A is invertible",
        "A is nilpotent",
        "All eigenvalues of A are positive",
        "All eigenvalues of A are real"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.6666666666666666,
      "explanation": "The spectral theorem guarantees that a real symmetric matrix has real eigenvalues and an orthonormal eigenbasis, but says nothing about their sign or about invertibility.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-016",
      "section": "Mathematics",
      "topic": "Linear Algebra \u2014 vector spaces",
      "difficulty": "medium",
      "question": "What is the dimension of the vector space of all real 3 x 3 symmetric matrices?",
      "options": [
        "3",
        "8",
        "6",
        "9"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.6666666666666666,
      "explanation": "A symmetric matrix is determined by its diagonal and its upper triangle, giving 3 + 3 = 6 free entries.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-017",
      "section": "Mathematics",
      "topic": "Sequences and Series of Real Numbers \u2014 ratio test",
      "difficulty": "medium",
      "question": "For which real x does the series sum over n >= 0 of x^n / n! converge?",
      "options": [
        "Only x = 0",
        "|x| < 1",
        "|x| <= 1",
        "All real x"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.6666666666666666,
      "explanation": "The ratio |x|/(n + 1) tends to 0 for every fixed x, so the series converges absolutely for all real x; its sum is e^x.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-018",
      "section": "Mathematics",
      "topic": "Functions of One Real Variable \u2014 differentiability",
      "difficulty": "medium",
      "question": "Consider f(x) = |x| on R. Which statement is correct?",
      "options": [
        "f is differentiable everywhere",
        "f is nowhere differentiable",
        "f is discontinuous at 0",
        "f is continuous everywhere but not differentiable at 0"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.6666666666666666,
      "explanation": "The absolute value is continuous everywhere, but the left and right difference quotients at 0 are -1 and 1, so it fails to be differentiable there.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-019",
      "section": "Mathematics",
      "topic": "Functions of Two or Three Real Variables \u2014 chain rule",
      "difficulty": "medium",
      "question": "Let z = f(x, y) with x = t^2 and y = t^3. The derivative dz/dt equals:",
      "options": [
        "f_x + f_y",
        "t^2 f_x + t^3 f_y",
        "2t f_x + 3t^2 f_y",
        "f_x f_y"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.6666666666666666,
      "explanation": "The chain rule gives dz/dt = f_x (dx/dt) + f_y (dy/dt) = 2t f_x + 3t^2 f_y.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-020",
      "section": "Mathematics",
      "topic": "Functions of Two or Three Real Variables \u2014 critical points",
      "difficulty": "medium",
      "question": "For f(x, y) = x^2 - y^2, the origin is:",
      "options": [
        "a local maximum",
        "a local minimum",
        "a saddle point",
        "not a critical point"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.6666666666666666,
      "explanation": "Both partial derivatives vanish at the origin, and the discriminant f_xx f_yy - f_xy^2 = (2)(-2) - 0 = -4 is negative, which identifies a saddle.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-021",
      "section": "Mathematics",
      "topic": "Functions of Two or Three Real Variables \u2014 gradient",
      "difficulty": "medium",
      "question": "The gradient of a differentiable function at a point is:",
      "options": [
        "tangent to the level curve through that point",
        "parallel to the x-axis",
        "always the zero vector at an interior point",
        "normal to the level curve through that point, pointing in the direction of greatest increase"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.6666666666666666,
      "explanation": "The gradient is orthogonal to the level set and points in the direction of steepest ascent, with magnitude equal to the greatest directional derivative.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-022",
      "section": "Mathematics",
      "topic": "Integral Calculus \u2014 improper integrals",
      "difficulty": "medium",
      "question": "For which values of p does the integral of 1/x^p from 1 to infinity converge?",
      "options": [
        "p > 0",
        "p < 1",
        "p > 1",
        "all p"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.6666666666666666,
      "explanation": "The antiderivative is x^(1-p)/(1-p) for p not equal to 1, which has a finite limit at infinity exactly when p > 1; at p = 1 the integral is logarithmic and diverges.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-023",
      "section": "Mathematics",
      "topic": "Integral Calculus \u2014 change of order",
      "difficulty": "medium",
      "question": "The double integral over 0 <= x <= 1, x <= y <= 1 of f(x, y), with the order of integration reversed, becomes the integral over:",
      "options": [
        "0 <= y <= 1, y <= x <= 1",
        "0 <= y <= x, 0 <= x <= 1",
        "0 <= y <= 1, 0 <= x <= 1",
        "0 <= y <= 1, 0 <= x <= y"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.6666666666666666,
      "explanation": "The region is the triangle with 0 <= x <= y <= 1. Fixing y first, x runs from 0 to y while y runs from 0 to 1.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-024",
      "section": "Mathematics",
      "topic": "Differential Equations \u2014 integrating factor",
      "difficulty": "medium",
      "question": "For the linear equation dy/dx + 2y = e^x, an integrating factor is:",
      "options": [
        "e^x",
        "e^(-2x)",
        "e^(2x)",
        "x^2"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.6666666666666666,
      "explanation": "For dy/dx + P(x)y = Q(x) the integrating factor is exp(integral of P dx) = exp(2x).",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-025",
      "section": "Mathematics",
      "topic": "Differential Equations \u2014 constant coefficients",
      "difficulty": "medium",
      "question": "The general solution of y'' - 5y' + 6y = 0 is:",
      "options": [
        "c1 e^(2x) + c2 e^(3x)",
        "c1 e^(-2x) + c2 e^(-3x)",
        "c1 e^(5x) + c2 e^(6x)",
        "(c1 + c2 x) e^(5x)"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.6666666666666666,
      "explanation": "The auxiliary equation m^2 - 5m + 6 = 0 has roots 2 and 3, giving independent solutions e^(2x) and e^(3x).",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-026",
      "section": "Mathematics",
      "topic": "Vector Calculus \u2014 curl",
      "difficulty": "medium",
      "question": "For a twice continuously differentiable scalar field f, the curl of the gradient of f is:",
      "options": [
        "the zero vector",
        "the gradient of f",
        "the Laplacian of f",
        "undefined"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.6666666666666666,
      "explanation": "Equality of mixed partials makes each component of curl(grad f) vanish identically.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-027",
      "section": "Mathematics",
      "topic": "Vector Calculus \u2014 Green's theorem",
      "difficulty": "medium",
      "question": "Green's theorem relates a line integral around a simple closed curve in the plane to:",
      "options": [
        "a double integral over the enclosed region",
        "a triple integral over a solid",
        "a surface integral over a sphere",
        "a sum of residues"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.6666666666666666,
      "explanation": "Green's theorem converts the circulation around a positively oriented simple closed curve into a double integral of the curl-like expression over the region it encloses.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-028",
      "section": "Mathematics",
      "topic": "Linear Algebra \u2014 Cayley-Hamilton",
      "difficulty": "hard",
      "question": "Let A be a 2 x 2 real matrix with trace 5 and determinant 6. Which relation does A satisfy?",
      "options": [
        "A^2 - 5A - 6I = 0",
        "A^2 + 5A + 6I = 0",
        "A^2 - 6A + 5I = 0",
        "A^2 - 5A + 6I = 0"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.6666666666666666,
      "explanation": "The characteristic polynomial of a 2 x 2 matrix is x^2 - (trace)x + det, and by Cayley-Hamilton A satisfies it, giving A^2 - 5A + 6I = 0.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-029",
      "section": "Mathematics",
      "topic": "Functions of One Real Variable \u2014 uniform continuity",
      "difficulty": "hard",
      "question": "Which function is uniformly continuous on the whole real line?",
      "options": [
        "f(x) = x^2",
        "f(x) = e^x",
        "f(x) = sin x",
        "f(x) = 1/(1 + x) on x > -1"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.6666666666666666,
      "explanation": "Sine has derivative bounded by 1, so it is Lipschitz and hence uniformly continuous on R. The square and exponential functions have unbounded growth of increments over intervals of fixed length.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-030",
      "section": "Mathematics",
      "topic": "Differential Equations \u2014 Cauchy-Euler equation",
      "difficulty": "hard",
      "question": "Substituting x = e^t converts the Cauchy-Euler equation x^2 y'' + a x y' + b y = 0 into:",
      "options": [
        "a first-order linear equation",
        "a Bernoulli equation",
        "a separable equation",
        "a constant-coefficient linear equation in t"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 2,
      "negativeMarking": 0.6666666666666666,
      "explanation": "The substitution turns the equidimensional operator into a linear operator with constant coefficients in the variable t, which is exactly why the substitution is used.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-031",
      "section": "Mathematics",
      "topic": "Linear Algebra \u2014 properties of a singular matrix",
      "difficulty": "medium",
      "question": "Let A be a real n x n matrix with det(A) = 0. Which of the following must be true?",
      "options": [
        "0 is an eigenvalue of A",
        "The columns of A are linearly dependent",
        "rank(A) = n - 1",
        "A is the zero matrix"
      ],
      "correctIndex": -1,
      "correctIndices": [
        0,
        1
      ],
      "answerType": "multi-select",
      "partialMarking": false,
      "marks": 2,
      "negativeMarking": 0,
      "explanation": "A singular matrix has non-trivial kernel, so 0 is an eigenvalue and the columns are dependent. The rank can be anything from 0 to n - 1, and A need not be zero.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-032",
      "section": "Mathematics",
      "topic": "Sequences and Series of Real Numbers \u2014 completeness of the reals",
      "difficulty": "medium",
      "question": "Which of the following statements about sequences of real numbers are correct?",
      "options": [
        "Every Cauchy sequence of reals converges",
        "Every bounded sequence of reals has a convergent subsequence",
        "Every convergent sequence is monotone",
        "Every monotone sequence converges"
      ],
      "correctIndex": -1,
      "correctIndices": [
        0,
        1
      ],
      "answerType": "multi-select",
      "partialMarking": false,
      "marks": 2,
      "negativeMarking": 0,
      "explanation": "Completeness gives convergence of Cauchy sequences and Bolzano-Weierstrass gives a convergent subsequence of any bounded sequence. A convergent sequence need not be monotone, and a monotone sequence converges only if it is bounded.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-033",
      "section": "Mathematics",
      "topic": "Functions of One Real Variable \u2014 continuity and differentiability",
      "difficulty": "medium",
      "question": "Which of the following implications hold for a function f : R -> R?",
      "options": [
        "Differentiable at a point implies continuous at that point",
        "Continuous at a point implies differentiable at that point",
        "Differentiable on R implies continuous on R",
        "Continuous on R implies bounded on R"
      ],
      "correctIndex": -1,
      "correctIndices": [
        0,
        2
      ],
      "answerType": "multi-select",
      "partialMarking": false,
      "marks": 2,
      "negativeMarking": 0,
      "explanation": "Differentiability implies continuity, pointwise and hence on all of R. The converse fails at a corner, and a continuous function such as f(x) = x is unbounded on R.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-034",
      "section": "Mathematics",
      "topic": "Integral Calculus \u2014 properties of the Riemann integral",
      "difficulty": "medium",
      "question": "Which of the following functions are Riemann integrable on [0, 1]?",
      "options": [
        "Every continuous function on [0, 1]",
        "Every monotone function on [0, 1]",
        "The Dirichlet function, equal to 1 on rationals and 0 on irrationals",
        "Every bounded function on [0, 1]"
      ],
      "correctIndex": -1,
      "correctIndices": [
        0,
        1
      ],
      "answerType": "multi-select",
      "partialMarking": false,
      "marks": 2,
      "negativeMarking": 0,
      "explanation": "Continuous functions and monotone functions on a closed bounded interval are Riemann integrable. The Dirichlet function is discontinuous everywhere and is not, so not every bounded function is either.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-035",
      "section": "Mathematics",
      "topic": "Vector Calculus \u2014 line integrals of a gradient field",
      "difficulty": "medium",
      "question": "Let f(x, y) = x^2 + y^2 and let C be any piecewise smooth path from (0, 0) to (1, 2). Which statements are correct?",
      "options": [
        "The line integral of grad f along C equals 5",
        "The value of that line integral depends on which path C is chosen",
        "The line integral of grad f around any closed path is 0",
        "grad f is not a conservative field"
      ],
      "correctIndex": -1,
      "correctIndices": [
        0,
        2
      ],
      "answerType": "multi-select",
      "partialMarking": false,
      "marks": 2,
      "negativeMarking": 0,
      "explanation": "A gradient field is conservative, so the integral is f(1, 2) - f(0, 0) = 5 for every such path, and the integral around any closed path vanishes.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-036",
      "section": "Mathematics",
      "topic": "Group Theory \u2014 groups of order 12",
      "difficulty": "hard",
      "question": "Let G be a group of order 12. Which of the following must be true?",
      "options": [
        "G contains an element of order 2",
        "G contains a subgroup of order 4",
        "G contains an element of order 12",
        "G contains a subgroup of order 6"
      ],
      "correctIndex": -1,
      "correctIndices": [
        0,
        1
      ],
      "answerType": "multi-select",
      "partialMarking": false,
      "marks": 2,
      "negativeMarking": 0,
      "explanation": "Cauchy's theorem gives an element of order 2 since 2 divides 12, and Sylow's theorem gives a subgroup of order 4. Neither of the others is forced: A_4 has order 12 with no element of order 12 and no subgroup of order 6.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-037",
      "section": "Mathematics",
      "topic": "Sequences and Series of Real Numbers \u2014 convergence tests",
      "difficulty": "hard",
      "question": "Which of the following series converge?",
      "options": [
        "sum over n >= 1 of (-1)^n / n",
        "sum over n >= 1 of 1/n",
        "sum over n >= 1 of 1/n^2",
        "sum over n >= 1 of n/(n + 1)"
      ],
      "correctIndex": -1,
      "correctIndices": [
        0,
        2
      ],
      "answerType": "multi-select",
      "partialMarking": false,
      "marks": 2,
      "negativeMarking": 0,
      "explanation": "The alternating harmonic series converges by the Leibniz test and the p-series with p = 2 converges. The harmonic series diverges, and the last series has terms tending to 1, so it diverges.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-038",
      "section": "Mathematics",
      "topic": "Functions of Two or Three Real Variables \u2014 partial derivatives",
      "difficulty": "hard",
      "question": "For a function f : R^2 -> R, which of the following statements are correct?",
      "options": [
        "If f is differentiable at a point then both partial derivatives exist there",
        "If both partial derivatives exist at a point then f is continuous there",
        "If f has continuous partial derivatives in a neighbourhood then f is differentiable there",
        "Mixed partials are always equal without any hypothesis"
      ],
      "correctIndex": -1,
      "correctIndices": [
        0,
        2
      ],
      "answerType": "multi-select",
      "partialMarking": false,
      "marks": 2,
      "negativeMarking": 0,
      "explanation": "Differentiability gives the partials, and continuous partials give differentiability. Mere existence of partials does not even give continuity, and equality of mixed partials needs a hypothesis such as continuity of the mixed derivatives.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-039",
      "section": "Mathematics",
      "topic": "Differential Equations \u2014 exact equations",
      "difficulty": "hard",
      "question": "For the equation M(x, y) dx + N(x, y) dy = 0 on a simply connected region, which statements are correct?",
      "options": [
        "It is exact if and only if the partial of M with respect to y equals the partial of N with respect to x",
        "An exact equation has a solution of the form F(x, y) = c",
        "Every such equation is exact",
        "An integrating factor can never make a non-exact equation exact"
      ],
      "correctIndex": -1,
      "correctIndices": [
        0,
        1
      ],
      "answerType": "multi-select",
      "partialMarking": false,
      "marks": 2,
      "negativeMarking": 0,
      "explanation": "The cross-partial condition characterises exactness on a simply connected region, and the solution is a level set of the potential F. Most equations are not exact, and integrating factors exist precisely to repair that.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-040",
      "section": "Mathematics",
      "topic": "Vector Calculus \u2014 conservative fields",
      "difficulty": "hard",
      "question": "Let F be a continuously differentiable vector field on a simply connected region of R^3. Which statements are equivalent to F being conservative there?",
      "options": [
        "curl F = 0 throughout the region",
        "The line integral of F around every closed curve in the region is zero",
        "div F = 0 throughout the region",
        "F is a constant vector field"
      ],
      "correctIndex": -1,
      "correctIndices": [
        0,
        1
      ],
      "answerType": "multi-select",
      "partialMarking": false,
      "marks": 2,
      "negativeMarking": 0,
      "explanation": "On a simply connected region, vanishing curl and path independence both characterise conservative fields. Vanishing divergence is a different condition, and constancy is merely a special case.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-041",
      "section": "Mathematics",
      "topic": "Group Theory \u2014 generators of a cyclic group",
      "difficulty": "easy",
      "question": "How many generators does the cyclic group Z_20 have?",
      "options": [],
      "correctIndex": -1,
      "correctValue": "8",
      "answerType": "numerical",
      "maxDecimalPlaces": 0,
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The generators are the residues coprime to 20, so the count is Euler's phi(20) = 20(1 - 1/2)(1 - 1/5) = 8.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-042",
      "section": "Mathematics",
      "topic": "Sequences and Series of Real Numbers \u2014 limit of a sequence",
      "difficulty": "easy",
      "question": "What is the limit of the sequence a_n = (3n^2 + 2n)/(n^2 + 5) as n tends to infinity?",
      "options": [],
      "correctIndex": -1,
      "correctValue": "3",
      "answerType": "numerical",
      "maxDecimalPlaces": 0,
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Dividing numerator and denominator by n^2 gives (3 + 2/n)/(1 + 5/n^2), which tends to 3.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-043",
      "section": "Mathematics",
      "topic": "Functions of Two or Three Real Variables \u2014 partial derivative",
      "difficulty": "easy",
      "question": "For f(x, y) = x^3 y^2, evaluate the partial derivative of f with respect to x at the point (2, 3).",
      "options": [],
      "correctIndex": -1,
      "correctValue": "108",
      "answerType": "numerical",
      "maxDecimalPlaces": 0,
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The partial derivative is 3x^2 y^2, and at (2, 3) this is 3 x 4 x 9 = 108.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-044",
      "section": "Mathematics",
      "topic": "Integral Calculus \u2014 definite integral",
      "difficulty": "easy",
      "question": "Evaluate the integral of x^2 from 0 to 3.",
      "options": [],
      "correctIndex": -1,
      "correctValue": "9",
      "answerType": "numerical",
      "maxDecimalPlaces": 0,
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The antiderivative is x^3/3, and 27/3 - 0 = 9.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-045",
      "section": "Mathematics",
      "topic": "Vector Calculus \u2014 divergence",
      "difficulty": "easy",
      "question": "Compute the divergence of the vector field F = (x^2, y^2, z^2) at the point (1, 2, 3).",
      "options": [],
      "correctIndex": -1,
      "correctValue": "12",
      "answerType": "numerical",
      "maxDecimalPlaces": 0,
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The divergence is 2x + 2y + 2z, which at (1, 2, 3) equals 2 + 4 + 6 = 12.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-046",
      "section": "Mathematics",
      "topic": "Group Theory \u2014 elements of a given order",
      "difficulty": "medium",
      "question": "How many elements of order 5 does the additive group Z_25 contain?",
      "options": [],
      "correctIndex": -1,
      "correctValue": "4",
      "answerType": "numerical",
      "maxDecimalPlaces": 0,
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "An element k has order 25/gcd(k, 25), which equals 5 exactly when gcd(k, 25) = 5, that is k in {5, 10, 15, 20}. So there are 4 such elements.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-047",
      "section": "Mathematics",
      "topic": "Linear Algebra \u2014 determinant",
      "difficulty": "medium",
      "question": "What is the determinant of the matrix [[1, 2, 3], [0, 4, 5], [0, 0, 6]]?",
      "options": [],
      "correctIndex": -1,
      "correctValue": "24",
      "answerType": "numerical",
      "maxDecimalPlaces": 0,
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The matrix is upper triangular, so the determinant is the product of the diagonal entries: 1 x 4 x 6 = 24.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-048",
      "section": "Mathematics",
      "topic": "Linear Algebra \u2014 rank of a matrix",
      "difficulty": "medium",
      "question": "What is the rank of the matrix [[1, 2, 3], [2, 4, 6], [1, 1, 1]]?",
      "options": [],
      "correctIndex": -1,
      "correctValue": "2",
      "answerType": "numerical",
      "maxDecimalPlaces": 0,
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Row 2 is twice row 1, so it contributes nothing. Rows 1 and 3 are not proportional, so the rank is 2.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-049",
      "section": "Mathematics",
      "topic": "Sequences and Series of Real Numbers \u2014 geometric series",
      "difficulty": "medium",
      "question": "What is the sum of the series 1 + 1/3 + 1/9 + 1/27 + ... ?",
      "options": [],
      "correctIndex": -1,
      "correctValue": "1.5",
      "answerType": "numerical",
      "maxDecimalPlaces": 1,
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "This is geometric with first term 1 and ratio 1/3, so the sum is 1/(1 - 1/3) = 3/2 = 1.5.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-050",
      "section": "Mathematics",
      "topic": "Sequences and Series of Real Numbers \u2014 radius of convergence",
      "difficulty": "medium",
      "question": "What is the radius of convergence of the power series sum over n >= 0 of (x^n)/(2^n)?",
      "options": [],
      "correctIndex": -1,
      "correctValue": "2",
      "answerType": "numerical",
      "maxDecimalPlaces": 0,
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The coefficients are 1/2^n, so the radius is 1/limsup |a_n|^(1/n) = 1/(1/2) = 2.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-051",
      "section": "Mathematics",
      "topic": "Functions of One Real Variable \u2014 limits",
      "difficulty": "medium",
      "question": "Evaluate the limit of (sin 3x)/x as x tends to 0.",
      "options": [],
      "correctIndex": -1,
      "correctValue": "3",
      "answerType": "numerical",
      "maxDecimalPlaces": 0,
      "marks": 2,
      "negativeMarking": 0,
      "explanation": "Writing (sin 3x)/x = 3 (sin 3x)/(3x) and using the standard limit (sin t)/t -> 1 gives 3.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-052",
      "section": "Mathematics",
      "topic": "Functions of One Real Variable \u2014 Taylor series",
      "difficulty": "medium",
      "question": "In the Maclaurin expansion of e^(2x), what is the coefficient of x^2?",
      "options": [],
      "correctIndex": -1,
      "correctValue": "2",
      "answerType": "numerical",
      "maxDecimalPlaces": 0,
      "marks": 2,
      "negativeMarking": 0,
      "explanation": "The expansion is the sum of (2x)^n/n!, so the coefficient of x^2 is 2^2/2! = 4/2 = 2.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-053",
      "section": "Mathematics",
      "topic": "Functions of One Real Variable \u2014 extrema",
      "difficulty": "medium",
      "question": "What is the maximum value of f(x) = 4x - x^2 on the real line?",
      "options": [],
      "correctIndex": -1,
      "correctValue": "4",
      "answerType": "numerical",
      "maxDecimalPlaces": 0,
      "marks": 2,
      "negativeMarking": 0,
      "explanation": "The derivative 4 - 2x vanishes at x = 2, where f(2) = 8 - 4 = 4; the parabola opens downward, so this is the global maximum.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-054",
      "section": "Mathematics",
      "topic": "Functions of Two or Three Real Variables \u2014 directional derivative",
      "difficulty": "medium",
      "question": "For f(x, y) = x^2 + y^2, what is the directional derivative at (1, 2) in the direction of the unit vector (1, 0)?",
      "options": [],
      "correctIndex": -1,
      "correctValue": "2",
      "answerType": "numerical",
      "maxDecimalPlaces": 0,
      "marks": 2,
      "negativeMarking": 0,
      "explanation": "The gradient is (2x, 2y) = (2, 4) at (1, 2), and its dot product with (1, 0) is 2.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-055",
      "section": "Mathematics",
      "topic": "Integral Calculus \u2014 double integral",
      "difficulty": "medium",
      "question": "Evaluate the double integral of xy over the rectangle 0 <= x <= 2, 0 <= y <= 3.",
      "options": [],
      "correctIndex": -1,
      "correctValue": "9",
      "answerType": "numerical",
      "maxDecimalPlaces": 0,
      "marks": 2,
      "negativeMarking": 0,
      "explanation": "The integral separates as (integral of x from 0 to 2)(integral of y from 0 to 3) = 2 x 4.5 = 9.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-056",
      "section": "Mathematics",
      "topic": "Integral Calculus \u2014 area in polar coordinates",
      "difficulty": "medium",
      "question": "The polar curve r = 2 encloses an area of k times pi. What is k?",
      "options": [],
      "correctIndex": -1,
      "correctValue": "4",
      "answerType": "numerical",
      "maxDecimalPlaces": 0,
      "marks": 2,
      "negativeMarking": 0,
      "explanation": "The curve is the circle of radius 2, whose area is pi r^2 = 4 pi, so k = 4.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-057",
      "section": "Mathematics",
      "topic": "Differential Equations \u2014 initial value problem",
      "difficulty": "medium",
      "question": "For the solution of dy/dx = 2y with y(0) = 3, what is y'(0)?",
      "options": [],
      "correctIndex": -1,
      "correctValue": "6",
      "answerType": "numerical",
      "maxDecimalPlaces": 0,
      "marks": 2,
      "negativeMarking": 0,
      "explanation": "The solution is y = 3e^(2x), so y' = 6e^(2x) and y'(0) = 6.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-058",
      "section": "Mathematics",
      "topic": "Differential Equations \u2014 Wronskian",
      "difficulty": "medium",
      "question": "What is the Wronskian of the functions e^x and e^(2x) evaluated at x = 0?",
      "options": [],
      "correctIndex": -1,
      "correctValue": "1",
      "answerType": "numerical",
      "maxDecimalPlaces": 0,
      "marks": 2,
      "negativeMarking": 0,
      "explanation": "The Wronskian is e^x (2 e^(2x)) - e^(2x) (e^x) = e^(3x), which equals 1 at x = 0.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-059",
      "section": "Mathematics",
      "topic": "Differential Equations \u2014 separable equation",
      "difficulty": "medium",
      "question": "Solve dy/dx = x/y with y(0) = 2. What is the value of y(3)^2?",
      "options": [],
      "correctIndex": -1,
      "correctValue": "13",
      "answerType": "numerical",
      "maxDecimalPlaces": 0,
      "marks": 2,
      "negativeMarking": 0,
      "explanation": "Separating gives y dy = x dx, so y^2 - x^2 is constant. The initial condition fixes that constant at 4, so y(3)^2 = 4 + 9 = 13.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    },
    {
      "id": "jam-2026-mathematics-full-mock-01-060",
      "section": "Mathematics",
      "topic": "Integral Calculus \u2014 triple integral",
      "difficulty": "hard",
      "question": "Evaluate the triple integral of 1 over the box 0 <= x <= 1, 0 <= y <= 2, 0 <= z <= 3.",
      "options": [],
      "correctIndex": -1,
      "correctValue": "6",
      "answerType": "numerical",
      "maxDecimalPlaces": 0,
      "marks": 2,
      "negativeMarking": 0,
      "explanation": "The integral of the constant 1 over a box is its volume, 1 x 2 x 3 = 6.",
      "source": {
        "kind": "original",
        "reference": "IIT JAM 2026 official Mathematics (MA) syllabus and test pattern",
        "url": "https://jam2026.iitb.ac.in/",
        "checkedOn": "2026-09-04"
      }
    }
  ];
