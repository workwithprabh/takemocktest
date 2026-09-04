import type { Question } from '../questions';

export const JEST_2026_PHYSICS_FULL_MOCK_1: Question[] = [
    {
      "id": "jest-2026-physics-part-a-001",
      "section": "Part A",
      "topic": "Classical mechanics",
      "difficulty": "medium",
      "question": "A particle moves in one dimension in potential V(x)=ax² with a>0. The equilibrium at x=0 is",
      "options": [
        "unstable",
        "neutral",
        "stable",
        "not an equilibrium"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.3333333333333333,
      "explanation": "V has a minimum at x=0; small displacements produce restoring force F=−2ax.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-a-002",
      "section": "Part A",
      "topic": "Vector calculus",
      "difficulty": "medium",
      "question": "For any sufficiently smooth scalar field φ, which identity holds identically?",
      "options": [
        "∇·(∇φ)=0",
        "∇(∇·φ)=0",
        "∇×(∇φ)=0",
        "∇×(∇×φ)=0"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.3333333333333333,
      "explanation": "The curl of a gradient is identically zero.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-a-003",
      "section": "Part A",
      "topic": "Electromagnetism",
      "difficulty": "medium",
      "question": "Inside a conductor in electrostatic equilibrium, the electric field is",
      "options": [
        "uniform but nonzero",
        "parallel to the surface only",
        "infinite",
        "zero"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.3333333333333333,
      "explanation": "Free charges redistribute until the internal electrostatic field vanishes.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-a-004",
      "section": "Part A",
      "topic": "Quantum mechanics",
      "difficulty": "medium",
      "question": "If an operator Â is Hermitian, its expectation value in any normalized state is",
      "options": [
        "real",
        "purely imaginary",
        "always zero",
        "necessarily an integer"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.3333333333333333,
      "explanation": "Hermitian operators have real expectation values and eigenvalues.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-a-005",
      "section": "Part A",
      "topic": "Thermodynamics",
      "difficulty": "medium",
      "question": "For a reversible adiabatic process of an ideal gas, the entropy change is",
      "options": [
        "positive",
        "zero",
        "negative",
        "equal to heat capacity"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.3333333333333333,
      "explanation": "Reversible adiabatic means δQ_rev=0, so dS=δQ_rev/T=0.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-a-006",
      "section": "Part A",
      "topic": "Statistical mechanics",
      "difficulty": "medium",
      "question": "At thermal equilibrium, the Boltzmann probability for a state of energy E contains the factor",
      "options": [
        "exp(+E/kT)",
        "exp(−E/kT)",
        "E/kT",
        "1−E/kT exactly"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.3333333333333333,
      "explanation": "The canonical Boltzmann weight is proportional to e^(−E/kT).",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-a-007",
      "section": "Part A",
      "topic": "Optics",
      "difficulty": "medium",
      "question": "A plane wave passes from vacuum into a transparent medium of refractive index n>1. Its frequency",
      "options": [
        "increases by n",
        "decreases by n",
        "becomes zero",
        "remains unchanged"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.3333333333333333,
      "explanation": "Boundary conditions conserve temporal frequency; wavelength and speed change.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-a-008",
      "section": "Part A",
      "topic": "Relativity",
      "difficulty": "medium",
      "question": "For a massive particle, as its speed approaches c, its Lorentz factor γ",
      "options": [
        "diverges",
        "approaches zero",
        "approaches 1/2",
        "oscillates"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.3333333333333333,
      "explanation": "γ=1/√(1−v²/c²) grows without bound as v→c.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-a-009",
      "section": "Part A",
      "topic": "Electronics",
      "difficulty": "easy",
      "question": "An ideal operational amplifier with negative feedback is commonly approximated as having",
      "options": [
        "equal input-node voltages",
        "zero open-loop gain",
        "infinite output current at all times",
        "equal input currents to output current"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.3333333333333333,
      "explanation": "With high open-loop gain and negative feedback, V+≈V− while input currents are negligible.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-a-010",
      "section": "Part A",
      "topic": "Mathematical methods",
      "difficulty": "medium",
      "question": "The Fourier transform of a real even function is",
      "options": [
        "purely imaginary and odd",
        "real and even",
        "real and odd",
        "necessarily zero"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.3333333333333333,
      "explanation": "For a real even function, sine components vanish and the transform is real even.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-b-001",
      "section": "Part B",
      "topic": "Classical mechanics",
      "difficulty": "hard",
      "question": "A mass m moves in V(x)=½kx². The angular frequency of small oscillations is",
      "options": [
        "k/m",
        "√(m/k)",
        "√(k/m)",
        "2π√(m/k)"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 3,
      "negativeMarking": 1,
      "explanation": "Equation m x¨+kx=0 gives ω=√(k/m).",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-b-002",
      "section": "Part B",
      "topic": "Classical mechanics",
      "difficulty": "hard",
      "question": "For a central force, which quantity is conserved because the torque about the force centre vanishes?",
      "options": [
        "linear momentum in every central field",
        "angular momentum",
        "kinetic energy in every central field",
        "radial coordinate"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 3,
      "negativeMarking": 1,
      "explanation": "A central force is parallel to r, so τ=r×F=0 and angular momentum is conserved.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-b-003",
      "section": "Part B",
      "topic": "Lagrangian mechanics",
      "difficulty": "hard",
      "question": "If a generalized coordinate q does not appear explicitly in the Lagrangian L, then its conjugate momentum is",
      "options": [
        "zero",
        "conserved",
        "equal to q",
        "necessarily quantized"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 3,
      "negativeMarking": 1,
      "explanation": "A cyclic coordinate satisfies ∂L/∂q=0, hence d/dt(∂L/∂qdot)=0.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-b-004",
      "section": "Part B",
      "topic": "Electromagnetism",
      "difficulty": "hard",
      "question": "A long straight wire carries current I. The magnetic-field magnitude at distance r in vacuum is",
      "options": [
        "μ₀Ir/(2π)",
        "μ₀I/(4πr²)",
        "μ₀I/(2πr)",
        "2πr/(μ₀I)"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 3,
      "negativeMarking": 1,
      "explanation": "Ampère’s law gives B(2πr)=μ₀I.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-b-005",
      "section": "Part B",
      "topic": "Electromagnetism",
      "difficulty": "hard",
      "question": "A capacitor C is charged to voltage V and isolated. If a dielectric of constant κ fully fills it, the stored energy becomes",
      "options": [
        "κU",
        "U",
        "κ²U",
        "U/κ"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 3,
      "negativeMarking": 1,
      "explanation": "Isolated means charge fixed. C→κC, so U=Q²/(2C) decreases by κ.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-b-006",
      "section": "Part B",
      "topic": "Electrodynamics",
      "difficulty": "hard",
      "question": "For a plane electromagnetic wave in vacuum, the ratio E₀/B₀ equals",
      "options": [
        "c",
        "1/c",
        "μ₀",
        "ε₀"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 3,
      "negativeMarking": 1,
      "explanation": "Maxwell equations give E₀=cB₀ in vacuum.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-b-007",
      "section": "Part B",
      "topic": "Quantum mechanics",
      "difficulty": "hard",
      "question": "For a one-dimensional infinite well of width L, energy levels scale as",
      "options": [
        "n²/L²",
        "n/L",
        "1/(n²L)",
        "n³L"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 3,
      "negativeMarking": 1,
      "explanation": "E_n=n²π²ħ²/(2mL²).",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-b-008",
      "section": "Part B",
      "topic": "Quantum mechanics",
      "difficulty": "hard",
      "question": "Two observables represented by commuting Hermitian operators can have",
      "options": [
        "no real eigenvalues",
        "simultaneous eigenstates",
        "only continuous spectra",
        "no common measurement basis in any case"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 3,
      "negativeMarking": 1,
      "explanation": "Commuting observables admit a common eigenbasis (with usual degeneracy qualifications).",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-b-009",
      "section": "Part B",
      "topic": "Quantum mechanics",
      "difficulty": "hard",
      "question": "For a normalized wavefunction ψ, the integral ∫|ψ|² dx over all space is",
      "options": [
        "0",
        "ħ",
        "1",
        "the energy eigenvalue"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 3,
      "negativeMarking": 1,
      "explanation": "Normalization makes total probability unity.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-b-010",
      "section": "Part B",
      "topic": "Thermodynamics",
      "difficulty": "hard",
      "question": "For an ideal gas, C_P−C_V per mole equals",
      "options": [
        "k_B",
        "2R",
        "R",
        "0"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 3,
      "negativeMarking": 1,
      "explanation": "Mayer’s relation for an ideal gas is C_P−C_V=R per mole.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-b-011",
      "section": "Part B",
      "topic": "Statistical mechanics",
      "difficulty": "hard",
      "question": "For N independent distinguishable two-level systems with energies 0 and ε, the single-particle partition function is",
      "options": [
        "1+e^(−βε)",
        "e^(+βε)",
        "1−e^(−βε)",
        "βε"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 3,
      "negativeMarking": 1,
      "explanation": "Sum the Boltzmann weights of the two levels: 1+e^(−βε).",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-b-012",
      "section": "Part B",
      "topic": "Optics",
      "difficulty": "hard",
      "question": "The angular width of the central maximum for single-slit Fraunhofer diffraction decreases when the slit width",
      "options": [
        "decreases",
        "is unchanged",
        "increases",
        "equals the wavelength exactly"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 3,
      "negativeMarking": 1,
      "explanation": "First minima satisfy sinθ≈λ/a; larger a gives a narrower central maximum.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-b-013",
      "section": "Part B",
      "topic": "Solid state",
      "difficulty": "hard",
      "question": "For a simple cubic lattice of lattice constant a, the magnitude of the shortest nonzero reciprocal-lattice vector is",
      "options": [
        "2π/a",
        "π/a",
        "a/2π",
        "4π/a"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 3,
      "negativeMarking": 1,
      "explanation": "The primitive reciprocal vectors of a simple cubic lattice have magnitude 2π/a.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-b-014",
      "section": "Part B",
      "topic": "Nuclear physics",
      "difficulty": "hard",
      "question": "If a nucleus has mass defect Δm, its binding energy is",
      "options": [
        "Δm/c²",
        "½Δmc²",
        "Δm c",
        "Δmc²"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 3,
      "negativeMarking": 1,
      "explanation": "Mass-energy equivalence gives binding energy B=Δmc².",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-b-015",
      "section": "Part B",
      "topic": "Atomic physics",
      "difficulty": "hard",
      "question": "Ignoring spin, the degeneracy of the hydrogen energy level with principal quantum number n is",
      "options": [
        "2n",
        "n²",
        "n",
        "2n²"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 3,
      "negativeMarking": 1,
      "explanation": "Summing orbital magnetic degeneracies over l=0,...,n−1 gives n²; spin would double it.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-b-016",
      "section": "Part B",
      "topic": "Relativity",
      "difficulty": "hard",
      "question": "Two events are simultaneous in one inertial frame and separated in space. In a relatively moving frame they are generally",
      "options": [
        "always simultaneous",
        "at the same spatial point",
        "causally identical to one event",
        "not simultaneous"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 3,
      "negativeMarking": 1,
      "explanation": "Relativity of simultaneity follows from Lorentz transformations for spacelike-separated simultaneous events.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-b-017",
      "section": "Part B",
      "topic": "Electronics",
      "difficulty": "medium",
      "question": "For an ideal inverting op-amp with input resistor R and feedback resistor 4R, the voltage gain is",
      "options": [
        "+4",
        "−4",
        "−1/4",
        "+1/4"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 3,
      "negativeMarking": 1,
      "explanation": "Closed-loop gain for an ideal inverting amplifier is −R_f/R_in=−4.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-b-018",
      "section": "Part B",
      "topic": "Mathematical methods",
      "difficulty": "hard",
      "question": "The eigenvalues of a real symmetric matrix are",
      "options": [
        "real",
        "always positive",
        "always integers",
        "purely imaginary"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 3,
      "negativeMarking": 1,
      "explanation": "The spectral theorem guarantees real eigenvalues for real symmetric matrices.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-b-019",
      "section": "Part B",
      "topic": "Complex analysis",
      "difficulty": "hard",
      "question": "The residue of 1/(z−z₀) at z=z₀ is",
      "options": [
        "0",
        "z₀",
        "−1",
        "1"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 3,
      "negativeMarking": 1,
      "explanation": "The coefficient of (z−z₀)⁻¹ in the Laurent expansion is 1.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-b-020",
      "section": "Part B",
      "topic": "Differential equations",
      "difficulty": "hard",
      "question": "The general solution of y″+ω²y=0 is",
      "options": [
        "Ae^(ωt) only",
        "At+B",
        "A coshωt+B sinhωt",
        "A cosωt + B sinωt"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 3,
      "negativeMarking": 1,
      "explanation": "The characteristic roots are ±iω, yielding sinusoidal solutions.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-c-001",
      "section": "Part C",
      "topic": "Classical mechanics",
      "difficulty": "hard",
      "question": "A 2 kg particle moves at 3 m s⁻¹. Enter its kinetic energy in joules.",
      "options": [],
      "correctIndex": -1,
      "answerType": "numerical",
      "correctValue": "9",
      "maxDecimalPlaces": 0,
      "marks": 3,
      "negativeMarking": 0,
      "explanation": "K=½mv²=½×2×9=9 J.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-c-002",
      "section": "Part C",
      "topic": "Oscillations",
      "difficulty": "hard",
      "question": "A spring of force constant 50 N m⁻¹ carries a 2 kg mass. Enter ω² in s⁻² for small oscillations.",
      "options": [],
      "correctIndex": -1,
      "answerType": "numerical",
      "correctValue": "25",
      "maxDecimalPlaces": 0,
      "marks": 3,
      "negativeMarking": 0,
      "explanation": "ω²=k/m=50/2=25 s⁻².",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-c-003",
      "section": "Part C",
      "topic": "Electrostatics",
      "difficulty": "hard",
      "question": "Two capacitors 6 μF and 3 μF are connected in series. Enter the equivalent capacitance in μF.",
      "options": [],
      "correctIndex": -1,
      "answerType": "numerical",
      "correctValue": "2",
      "maxDecimalPlaces": 0,
      "marks": 3,
      "negativeMarking": 0,
      "explanation": "Ceq=(6×3)/(6+3)=2 μF.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-c-004",
      "section": "Part C",
      "topic": "Current electricity",
      "difficulty": "medium",
      "question": "A 12 V source is connected to resistors 4 Ω and 2 Ω in series. Enter the circuit current in amperes.",
      "options": [],
      "correctIndex": -1,
      "answerType": "numerical",
      "correctValue": "2",
      "maxDecimalPlaces": 0,
      "marks": 3,
      "negativeMarking": 0,
      "explanation": "Total resistance=6 Ω; I=12/6=2 A.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-c-005",
      "section": "Part C",
      "topic": "Optics",
      "difficulty": "hard",
      "question": "Light of wavelength 600 nm passes through a slit of width 0.30 mm. Using small-angle approximation, enter the angle in milliradians to the first diffraction minimum.",
      "options": [],
      "correctIndex": -1,
      "answerType": "numerical",
      "correctValue": "2",
      "maxDecimalPlaces": 0,
      "marks": 3,
      "negativeMarking": 0,
      "explanation": "θ≈λ/a=(600×10⁻9)/(0.30×10⁻3)=2×10⁻3 rad=2 mrad.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-c-006",
      "section": "Part C",
      "topic": "Quantum mechanics",
      "difficulty": "hard",
      "question": "For a photon of frequency 5×10¹⁴ Hz, take h=4×10⁻¹⁵ eV·s. Enter the photon energy in eV.",
      "options": [],
      "correctIndex": -1,
      "answerType": "numerical",
      "correctValue": "2",
      "maxDecimalPlaces": 0,
      "marks": 3,
      "negativeMarking": 0,
      "explanation": "E=hν=(4×10⁻15)(5×10^14)=2 eV.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-c-007",
      "section": "Part C",
      "topic": "Thermodynamics",
      "difficulty": "medium",
      "question": "One mole of an ideal gas is heated at constant volume by 10 K. If C_V=3R/2 and take R=8 J mol⁻¹ K⁻¹, enter ΔU in joules.",
      "options": [],
      "correctIndex": -1,
      "answerType": "numerical",
      "correctValue": "120",
      "maxDecimalPlaces": 0,
      "marks": 3,
      "negativeMarking": 0,
      "explanation": "ΔU=nC_VΔT=1×12×10=120 J.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-c-008",
      "section": "Part C",
      "topic": "Relativity",
      "difficulty": "hard",
      "question": "A particle moves at speed 0.6c. Enter its Lorentz factor γ.",
      "options": [],
      "correctIndex": -1,
      "answerType": "numerical",
      "correctValue": "1.25",
      "maxDecimalPlaces": 2,
      "marks": 3,
      "negativeMarking": 0,
      "explanation": "γ=1/√(1−0.6²)=1/0.8=1.25.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-c-009",
      "section": "Part C",
      "topic": "Nuclear physics",
      "difficulty": "medium",
      "question": "A radioactive isotope has half-life 4 h. Starting with 160 nuclei in an idealized count, enter the expected number remaining after 12 h.",
      "options": [],
      "correctIndex": -1,
      "answerType": "numerical",
      "correctValue": "20",
      "maxDecimalPlaces": 0,
      "marks": 3,
      "negativeMarking": 0,
      "explanation": "12 h is three half-lives: 160/2³=20.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    },
    {
      "id": "jest-2026-physics-part-c-010",
      "section": "Part C",
      "topic": "Mathematical methods",
      "difficulty": "hard",
      "question": "A 2×2 matrix has eigenvalues 3 and 5. Enter its trace.",
      "options": [],
      "correctIndex": -1,
      "answerType": "numerical",
      "correctValue": "8",
      "maxDecimalPlaces": 0,
      "marks": 3,
      "negativeMarking": 0,
      "explanation": "The trace equals the sum of eigenvalues: 3+5=8.",
      "source": {
        "kind": "original",
        "reference": "JEST 2026 official Physics FAQ, syllabus and sample-paper pattern",
        "url": "https://www.jest.org.in/faq",
        "checkedOn": "2026-09-01"
      }
    }
  ];
