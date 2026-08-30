import type { Question } from '../questions';

export const KLEEE_2026_PHYSICS_1: Question[] = [
  {
    "id": "kleee-2026-ph-001",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "medium",
    "question": "A particle starts from rest and moves in a straight line with acceleration a=2t m/s^2, where t is in seconds. Its displacement in the first 3 s is",
    "options": [
      "6 m",
      "9 m",
      "12 m",
      "18 m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Integrating a=2t gives v=t^2 because v(0)=0. Then s=integral_0^3 t^2 dt = 9 m.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-002",
    "section": "Physics",
    "topic": "Projectile Motion",
    "difficulty": "easy",
    "question": "A projectile is launched with speed 20 m/s at 30 degrees above the horizontal. Neglect air resistance. Its speed at the highest point is",
    "options": [
      "5sqrt(3) m/s",
      "10 m/s",
      "20 m/s",
      "10sqrt(3) m/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At the highest point the vertical velocity is zero while the horizontal component remains 20 cos30 = 10sqrt(3) m/s.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-003",
    "section": "Physics",
    "topic": "Laws of Motion and Friction",
    "difficulty": "medium",
    "question": "Two blocks of masses 2 kg and 3 kg, connected by a light string, are already sliding on a rough horizontal surface. The coefficient of kinetic friction for both blocks is 0.2. A horizontal force of 20 N pulls the 3 kg block. Taking g=10 m/s^2, the tension in the string is",
    "options": [
      "8 N",
      "6 N",
      "10 N",
      "12 N"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Total friction is 0.2(5)(10)=10 N, so acceleration = (20-10)/5=2 m/s^2. For the 2 kg block, T-4=2(2), hence T=8 N.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-004",
    "section": "Physics",
    "topic": "Work Energy and Springs",
    "difficulty": "medium",
    "question": "A 2 kg block moving at 4 m/s on a frictionless horizontal surface compresses a spring of force constant 64 N/m until it momentarily stops. The maximum compression is",
    "options": [
      "1/2 m",
      "1/4 m",
      "1/sqrt(2) m",
      "sqrt(2) m"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Energy conservation gives (1/2)(2)(4^2)=(1/2)(64)x^2. Thus 16=32x^2, so x=1/sqrt(2) m.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-005",
    "section": "Physics",
    "topic": "Circular Motion",
    "difficulty": "easy",
    "question": "A conical pendulum has string length 0.8 m, and the string makes an angle of 60 degrees with the vertical while the bob moves in a horizontal circle. Taking g=10 m/s^2, its angular speed is",
    "options": [
      "2.5 rad/s",
      "5 rad/s",
      "5sqrt(2) rad/s",
      "10 rad/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a conical pendulum, T cos(theta)=mg and T sin(theta)=m omega^2 r with r=l sin(theta). Dividing gives omega^2=g/(l cos(theta)). Thus omega^2=10/(0.8*0.5)=25, so omega=5 rad/s.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-006",
    "section": "Physics",
    "topic": "Collisions",
    "difficulty": "medium",
    "question": "A 1 kg body moving at 6 m/s collides perfectly inelastically with a 2 kg body initially at rest. The loss of kinetic energy is",
    "options": [
      "12 J",
      "6 J",
      "18 J",
      "24 J"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Momentum conservation gives common speed v=6/3=2 m/s. Initial KE=18 J and final KE=(1/2)(3)(2^2)=6 J, so the loss is 12 J.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-007",
    "section": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "hard",
    "question": "A uniform disc of mass M and radius R rotates freely about its central axis with angular speed omega. A small particle of mass M, initially at the disc center and rotating with it, is moved slowly to the rim by an internal mechanism. With no external torque, the ratio of final rotational kinetic energy to initial rotational kinetic energy is",
    "options": [
      "3",
      "2/3",
      "1/2",
      "1/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Initially I_i=(1/2)MR^2 because the particle is at the axis. Finally I_f=(1/2)MR^2+MR^2=(3/2)MR^2. With no external torque, angular momentum L is constant, and K=L^2/(2I). Therefore K_f/K_i=I_i/I_f=(1/2)/(3/2)=1/3.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-008",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "If the escape speed from the surface of a spherical planet is v_e, the escape speed from a point at a distance 2R from its center, where R is the planet radius, is",
    "options": [
      "v_e/2",
      "2v_e",
      "v_e/sqrt(2)",
      "sqrt(2)v_e"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Escape speed varies as 1/sqrt(r). Therefore v(2R)=v(R)/sqrt(2)=v_e/sqrt(2).",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-009",
    "section": "Physics",
    "topic": "Simple Harmonic Motion",
    "difficulty": "medium",
    "question": "A particle performs SHM described by x=A cos(omega t). Its speed when x=A/2 is",
    "options": [
      "(sqrt(3)/2)omega A",
      "(1/2)omega A",
      "omega A",
      "(sqrt(2)/2)omega A"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For SHM, v=omega sqrt(A^2-x^2). At x=A/2, v=omega A sqrt(3/4)=(sqrt(3)/2)omega A.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-010",
    "section": "Physics",
    "topic": "Wave Motion",
    "difficulty": "easy",
    "question": "A transverse wave is represented in SI units by y=0.02 sin(4pi t - 2pi x). The wave speed is",
    "options": [
      "1 m/s",
      "2 m/s",
      "4 m/s",
      "8 m/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Comparing with sin(omega t-kx), omega=4pi and k=2pi. Hence speed omega/k=2 m/s.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-011",
    "section": "Physics",
    "topic": "Sound Waves",
    "difficulty": "medium",
    "question": "An open organ pipe of length 0.85 m contains air in which the speed of sound is 340 m/s. Its fundamental frequency is",
    "options": [
      "100 Hz",
      "170 Hz",
      "400 Hz",
      "200 Hz"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For an open pipe, f=v/(2L)=340/(2*0.85)=200 Hz.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-012",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "Two moles of a monoatomic ideal gas are heated at constant volume through 30 K. The increase in internal energy is",
    "options": [
      "30R",
      "60R",
      "90R",
      "120R"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a monoatomic ideal gas, Delta U=n(3R/2)Delta T = 2*(3R/2)*30 = 90R.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-013",
    "section": "Physics",
    "topic": "Heat Engines",
    "difficulty": "easy",
    "question": "A heat engine absorbs 2000 J from its hot reservoir per cycle and has efficiency 30%. Its entire work output drives a refrigerator whose coefficient of performance is 4. The heat removed from the refrigerator's cold space per engine cycle is",
    "options": [
      "2400 J",
      "1400 J",
      "600 J",
      "8000 J"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The engine work per cycle is W=eta Q_h=0.30*2000=600 J. For the refrigerator, COP=Q_c/W=4, so Q_c=4*600=2400 J.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-014",
    "section": "Physics",
    "topic": "Electrostatic Potential",
    "difficulty": "hard",
    "question": "Charges +q, +q and -q are placed at the vertices of an equilateral triangle of side a. The electric potential at the centroid is",
    "options": [
      "kq/a",
      "sqrt(3)kq/a",
      "3kq/a",
      "kq/(sqrt(3)a)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The centroid is a/sqrt(3) from each vertex. Potential is scalar, so V=k(q+q-q)/(a/sqrt(3))=sqrt(3)kq/a.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-015",
    "section": "Physics",
    "topic": "Capacitance",
    "difficulty": "medium",
    "question": "Capacitors of 3 microF and 6 microF are connected in series across an 18 V source. The potential difference across the 3 microF capacitor is",
    "options": [
      "6 V",
      "9 V",
      "12 V",
      "15 V"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The series equivalent is 2 microF, so charge is 36 microC. Voltage across 3 microF is Q/C=36/3=12 V.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-016",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "easy",
    "question": "A cell of emf 12 V and internal resistance 1 ohm is connected to a 5 ohm resistor. The terminal voltage of the cell is",
    "options": [
      "12 V",
      "8 V",
      "6 V",
      "10 V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The current is I=12/(5+1)=2 A. Terminal voltage is E-Ir=12-2=10 V.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-017",
    "section": "Physics",
    "topic": "Wheatstone Bridge",
    "difficulty": "medium",
    "question": "In a balanced Wheatstone bridge, P=2 ohm, Q=3 ohm, R=4 ohm and S is unknown. If the balance condition is P/Q = R/S, the value of S is",
    "options": [
      "6 ohm",
      "8 ohm",
      "3 ohm",
      "12 ohm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For balance, P/Q=R/S, so 2/3=4/S; hence S=6 ohm.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-018",
    "section": "Physics",
    "topic": "Motion of Charged Particles in Magnetic Fields",
    "difficulty": "medium",
    "question": "A charged particle moves helically in a uniform magnetic field. Its velocity component parallel to the field and its perpendicular component are in the ratio 3:4. If r is the radius of the helix and p is its pitch, then p/r is",
    "options": [
      "3pi/4",
      "pi",
      "3pi/2",
      "2pi"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The cyclotron period is T=2pi m/(qB). Hence the pitch p=v_parallel T. The radius is r=m v_perpendicular/(qB). Therefore p/r=2pi(v_parallel/v_perpendicular)=2pi*(3/4)=3pi/2.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-019",
    "section": "Physics",
    "topic": "Semiconductor Electronics and Logic Gates",
    "difficulty": "easy",
    "question": "Inputs A and B are applied to a NAND gate. Its output X and the original input B are then applied to an AND gate whose output is Y. For which input pair (A, B) is Y = 1?",
    "options": [
      "(1, 1)",
      "(0, 0)",
      "(0, 1)",
      "(1, 0)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The NAND output is X = NOT(AB). The final output is Y = B\u00b7X = B\u00b7NOT(AB). Using De Morgan's law, NOT(AB) = NOT(A) + NOT(B), so Y = B\u00b7NOT(A). Therefore Y is 1 only when A = 0 and B = 1.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-020",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "medium",
    "question": "A single-turn loop of area 0.02 m^2 has its plane perpendicular to a uniform magnetic field. The field decreases uniformly from 0.5 T to 0.1 T in 0.2 s. The induced emf magnitude is",
    "options": [
      "0.01 V",
      "0.02 V",
      "0.08 V",
      "0.04 V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The flux change magnitude is A Delta B=0.02*0.4=0.008 Wb. Dividing by 0.2 s gives 0.04 V.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-021",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "easy",
    "question": "A 110 ohm resistor is connected directly across a 220 V rms AC supply. The average power consumed is",
    "options": [
      "440 W",
      "220 W",
      "110 W",
      "880 W"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a resistor, P=V_rms^2/R=220^2/110=440 W.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-022",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "medium",
    "question": "A small pendulum is suspended inside a cabin accelerating at 4 m/s^2 eastward and 3 m/s^2 upward. The bob is at rest relative to the cabin. Taking g = 10 m/s^2, let theta be the angle made by the string with the downward vertical, tilted toward the west. Which pair is correct for tan(theta) and the magnitude g_eff of the effective gravitational field in the cabin?",
    "options": [
      "tan(theta) = 13/4, g_eff = sqrt(185) m/s^2",
      "tan(theta) = 4/13, g_eff = sqrt(185) m/s^2",
      "tan(theta) = 4/7, g_eff = sqrt(65) m/s^2",
      "tan(theta) = 4/10, g_eff = sqrt(116) m/s^2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "In the accelerating cabin, the pseudo-acceleration is opposite the cabin acceleration: 4 m/s^2 westward and 3 m/s^2 downward. Combining it with gravity gives an effective field with components 4 m/s^2 westward and 13 m/s^2 downward. Hence tan(theta) = 4/13 and g_eff = sqrt(4^2 + 13^2) = sqrt(185) m/s^2.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-023",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "medium",
    "question": "Two coherent sources initially have equal intensities, and their interference maximum is 16 W/m^2. The intensity of one source is then reduced to one-fourth of its original value while coherence is maintained. What are the new maximum and minimum possible intensities?",
    "options": [
      "12 W/m^2 and 4 W/m^2",
      "8 W/m^2 and 0 W/m^2",
      "10 W/m^2 and 2 W/m^2",
      "9 W/m^2 and 1 W/m^2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "If each source initially has intensity I, then the initial maximum is (sqrt(I) + sqrt(I))^2 = 4I = 16, so I = 4 W/m^2. After one source is reduced to one-fourth, the source intensities are 4 and 1 W/m^2, with amplitudes proportional to 2 and 1. Thus I_max = (2 + 1)^2 = 9 W/m^2 and I_min = (2 - 1)^2 = 1 W/m^2.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-024",
    "section": "Physics",
    "topic": "Photoelectric Effect",
    "difficulty": "medium",
    "question": "A metal has work function 2 eV. Monochromatic photons of energy 5 eV fall on it. The stopping potential is",
    "options": [
      "2 V",
      "2.5 V",
      "5 V",
      "3 V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Maximum kinetic energy is 5-2=3 eV. Therefore eV_s=3 eV, so the stopping potential is 3 V.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ph-025",
    "section": "Physics",
    "topic": "Radioactivity",
    "difficulty": "easy",
    "question": "A radioactive sample has undergone three half-lives. The fraction of the original nuclei that remain undecayed is",
    "options": [
      "1/8",
      "1/6",
      "1/4",
      "3/8"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "After n half-lives, the remaining fraction is (1/2)^n. For n=3, it is 1/8.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  }
];
