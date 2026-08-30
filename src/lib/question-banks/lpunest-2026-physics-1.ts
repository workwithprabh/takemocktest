import type { Question } from '../questions';

export const LPUNEST_2026_PHYSICS_1: Question[] = [
  {
    "id": "lpunest-2026-ph-001",
    "section": "Physics",
    "topic": "Physics and measurement",
    "difficulty": "easy",
    "question": "Which physical quantity has dimensions [M L^2 T^-2]?",
    "options": [
      "Torque",
      "Pressure",
      "Surface tension",
      "Linear momentum"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Torque = force \u00d7 perpendicular distance. Since force has dimensions [M L T^-2], torque has [M L^2 T^-2].",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ph-002",
    "section": "Physics",
    "topic": "Laws of motion",
    "difficulty": "medium",
    "question": "A car moves on a level circular road of radius 40 m at 12 m/s. Taking g = 10 m/s^2, the minimum coefficient of friction needed to avoid skidding is",
    "options": [
      "0.18",
      "0.24",
      "0.36",
      "0.48"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Friction supplies centripetal force: \u03bcmg = mv^2/r. Thus \u03bc = v^2/(rg) = 144/(40\u00d710) = 0.36.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ph-003",
    "section": "Physics",
    "topic": "Work, energy and power",
    "difficulty": "medium",
    "question": "A 1 kg block is released from rest against a horizontal spring of force constant 200 N/m compressed by 0.10 m on a frictionless surface. Its speed when the spring reaches natural length is closest to",
    "options": [
      "1.0 m/s",
      "1.4 m/s",
      "2.0 m/s",
      "2.8 m/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "By energy conservation, (1/2)kx^2 = (1/2)mv^2, so v = x\u221a(k/m) = 0.10\u221a200 \u2248 1.41 m/s.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ph-004",
    "section": "Physics",
    "topic": "Rotational motion",
    "difficulty": "easy",
    "question": "A rotating student reduces her moment of inertia from 6 kg m^2 to 2 kg m^2 without external torque. Her angular speed becomes",
    "options": [
      "three times its initial value",
      "one-third of its initial value",
      "unchanged",
      "twice its initial value"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Angular momentum I\u03c9 is conserved. Therefore \u03c9_f/\u03c9_i = I_i/I_f = 6/2 = 3.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ph-005",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "easy",
    "question": "A projectile is launched at 20 m/s making 30\u00b0 with the horizontal. Taking g = 10 m/s^2, the time taken to reach its highest point is",
    "options": [
      "1.0 s",
      "0.5 s",
      "1.5 s",
      "2.0 s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Initial vertical speed is 20 sin30\u00b0 = 10 m/s. At the top v_y = 0, so t = u_y/g = 10/10 = 1 s.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ph-006",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "easy",
    "question": "At a height equal to Earth's radius above the surface, the acceleration due to gravity is approximately",
    "options": [
      "g/2",
      "g/4",
      "g/3",
      "g/8"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Distance from Earth's centre becomes 2R, and g varies as 1/r^2. Hence g' = g(R/2R)^2 = g/4.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ph-007",
    "section": "Physics",
    "topic": "Oscillations and waves",
    "difficulty": "medium",
    "question": "A string fixed at both ends is 1.2 m long. If transverse waves travel on it at 240 m/s, its fundamental frequency is",
    "options": [
      "100 Hz",
      "50 Hz",
      "150 Hz",
      "200 Hz"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For the fundamental mode, \u03bb = 2L = 2.4 m. Hence f = v/\u03bb = 240/2.4 = 100 Hz.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ph-008",
    "section": "Physics",
    "topic": "Properties of fluids",
    "difficulty": "easy",
    "question": "Water flows steadily through a pipe. If the cross-sectional area decreases from 6 cm^2 to 2 cm^2, the speed of flow in the narrower part becomes",
    "options": [
      "one-third",
      "unchanged",
      "three times",
      "nine times"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For incompressible steady flow, A_1v_1 = A_2v_2. Thus v_2/v_1 = 6/2 = 3.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ph-009",
    "section": "Physics",
    "topic": "Calorimetry",
    "difficulty": "hard",
    "question": "A 0.20 kg metal block of specific heat 400 J kg^-1 K^-1 at 80\u00b0C is placed in 0.10 kg water of specific heat 4200 J kg^-1 K^-1 at 20\u00b0C. Neglecting heat loss, the final temperature is closest to",
    "options": [
      "24.8\u00b0C",
      "35.0\u00b0C",
      "40.0\u00b0C",
      "29.6\u00b0C"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Heat lost = heat gained: (0.20\u00d7400)(80-T) = (0.10\u00d74200)(T-20). Thus 80(80-T)=420(T-20), giving T=29.6\u00b0C.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ph-010",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "easy",
    "question": "A gas absorbs 500 J of heat and does 180 J of work on its surroundings. The increase in its internal energy is",
    "options": [
      "180 J",
      "500 J",
      "320 J",
      "680 J"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Using \u0394U = Q - W with work done by the gas positive, \u0394U = 500 - 180 = 320 J.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ph-011",
    "section": "Physics",
    "topic": "Kinetic theory of gases",
    "difficulty": "easy",
    "question": "For the same ideal gas, the absolute temperature is increased from 300 K to 1200 K. The rms speed of its molecules becomes",
    "options": [
      "half",
      "four times",
      "twice",
      "unchanged"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For a given gas, v_rms \u221d \u221aT. Therefore the factor is \u221a(1200/300)=\u221a4=2.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ph-012",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "medium",
    "question": "A charged parallel-plate capacitor is disconnected from the battery. A dielectric of relative permittivity 2 is then completely inserted between the plates. The electrostatic energy stored becomes",
    "options": [
      "twice",
      "four times",
      "unchanged",
      "half"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "After disconnection, charge Q remains constant. Since C doubles, U = Q^2/(2C) becomes half.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ph-013",
    "section": "Physics",
    "topic": "Current electricity",
    "difficulty": "medium",
    "question": "A 6 \u03a9 resistor and a 3 \u03a9 resistor are connected in parallel, and this combination is connected in series with a 4 \u03a9 resistor across a 12 V battery of negligible internal resistance. The circuit current is",
    "options": [
      "1 A",
      "2 A",
      "3 A",
      "4 A"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The parallel equivalent is (6\u00d73)/(6+3)=2 \u03a9. Total resistance = 2+4=6 \u03a9, so I=12/6=2 A.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ph-014",
    "section": "Physics",
    "topic": "Magnetic effects of current",
    "difficulty": "medium",
    "question": "A charge of 2 \u03bcC moves at 3\u00d710^4 m/s perpendicular to a uniform magnetic field of 0.5 T. The magnetic force on it is",
    "options": [
      "0.003 N",
      "0.3 N",
      "3 N",
      "0.03 N"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "F=qvB = 2\u00d710^-6 \u00d7 3\u00d710^4 \u00d7 0.5 = 3\u00d710^-2 N = 0.03 N.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ph-015",
    "section": "Physics",
    "topic": "Magnetism",
    "difficulty": "medium",
    "question": "A magnetic dipole of moment 0.40 A m^2 makes an angle of 30\u00b0 with a uniform magnetic field of 0.50 T. The torque on it is",
    "options": [
      "0.05 N m",
      "0.10 N m",
      "0.20 N m",
      "0.40 N m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "\u03c4 = mB sin\u03b8 = 0.40\u00d70.50\u00d7sin30\u00b0 = 0.10 N m.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ph-016",
    "section": "Physics",
    "topic": "Ray optics",
    "difficulty": "medium",
    "question": "A biconvex lens is made of a transparent material whose refractive index is slightly lower than that of the surrounding transparent liquid. For paraxial rays, the immersed lens behaves as",
    "options": [
      "a converging lens with increased positive power",
      "a converging lens with reduced positive power",
      "a lens of zero power in every case",
      "a diverging lens"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "In the lens-maker relation for a surrounding medium, the factor (n_lens/n_medium - 1) is negative here. For a biconvex shape the curvature factor is positive, so the optical power is negative: the lens is diverging.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ph-017",
    "section": "Physics",
    "topic": "Wave optics",
    "difficulty": "medium",
    "question": "In a single-slit diffraction setup, the wavelength is changed from 480 nm to 600 nm and the slit width from 0.30 mm to 0.45 mm, with the screen distance unchanged. The new width of the central maximum is",
    "options": [
      "2/3 of the original width",
      "5/6 of the original width",
      "6/5 of the original width",
      "3/2 of the original width"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The central-maximum width is proportional to \u03bb/a. Hence W2/W1=(600/480)(0.30/0.45)=(5/4)(2/3)=5/6.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ph-018",
    "section": "Physics",
    "topic": "Electromagnetic induction",
    "difficulty": "medium",
    "question": "A straight conducting rod moves through a uniform magnetic field. In each trial the rod is oriented parallel to v\u00d7B, so the motional emf is BLv sin\u03b8, where \u03b8 is the angle between v and B. Initially \u03b8=90\u00b0. In a second trial the speed is doubled and \u03b8=30\u00b0, while B and L are unchanged. The ratio of the second emf to the first is",
    "options": [
      "1/2",
      "1",
      "\u221a3",
      "2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "E2/E1 = [2v sin30\u00b0]/[v sin90\u00b0] = 2\u00d7(1/2)=1. The induced emf is unchanged.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ph-019",
    "section": "Physics",
    "topic": "Electronic devices",
    "difficulty": "easy",
    "question": "A Zener diode used as a voltage regulator is normally operated",
    "options": [
      "in forward bias below threshold",
      "with zero bias only",
      "in reverse bias near breakdown",
      "as an open circuit in forward bias"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "A Zener regulator operates in reverse bias in its breakdown region, where voltage remains nearly constant over a range of current.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ph-020",
    "section": "Physics",
    "topic": "Electromagnetic waves",
    "difficulty": "easy",
    "question": "Which region of the electromagnetic spectrum has frequency lower than visible light but higher than microwaves?",
    "options": [
      "Infrared",
      "Gamma rays",
      "Ultraviolet",
      "X-rays"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Infrared lies between microwaves and visible light in the electromagnetic spectrum.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "lpunest-2026-ph-021",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "easy",
    "question": "A projectile is launched at 20 m/s at 45\u00b0 to the horizontal. Take g = 10 m/s^2. Find its horizontal range in metres. Enter the numerical value only.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "R = u^2 sin(2\u03b8)/g = 20^2\u00d7sin90\u00b0/10 = 40 m.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    },
    "correctValue": "40"
  },
  {
    "id": "lpunest-2026-ph-022",
    "section": "Physics",
    "topic": "Current electricity",
    "difficulty": "easy",
    "question": "A steady current of 3 A flows through a conductor for 40 s. Find the charge transferred in coulombs. Enter the numerical value only.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Q = It = 3\u00d740 = 120 C.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    },
    "correctValue": "120"
  },
  {
    "id": "lpunest-2026-ph-023",
    "section": "Physics",
    "topic": "Ray optics",
    "difficulty": "easy",
    "question": "Two thin lenses of powers +5 D and -2 D are kept in contact. Find the power of the combination in dioptres. Enter the numerical value only.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For lenses in contact, powers add: P = 5 + (-2) = 3 D.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    },
    "correctValue": "3"
  },
  {
    "id": "lpunest-2026-ph-024",
    "section": "Physics",
    "topic": "Alternating current and transformers",
    "difficulty": "medium",
    "question": "An ideal transformer has primary-to-secondary turns ratio 4:1 and is connected to a 240 V AC supply. A 12 \u03a9 resistor is connected across the secondary. Find the current drawn from the primary in amperes. Enter the numerical value only.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The secondary voltage is 240\u00d7(1/4)=60 V, so the load current is 60/12=5 A. For an ideal transformer, input power equals output power: 240 I_p = 60\u00d75, giving I_p=1.25 A.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    },
    "correctValue": "1.25"
  },
  {
    "id": "lpunest-2026-ph-025",
    "section": "Physics",
    "topic": "Atoms and nuclei",
    "difficulty": "medium",
    "question": "In a simplified fusion calculation, two identical nuclei each have mass number 17 and binding energy per nucleon 7.75 MeV. They combine to form one nucleus of mass number 33 with binding energy per nucleon 8.35 MeV, while one neutron remains free. Find the energy released in MeV. Enter the numerical value only.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Initial total binding energy = 2\u00d717\u00d77.75 = 263.50 MeV. The free neutron has zero nuclear binding energy, while the mass-33 product has total binding energy 33\u00d78.35 = 275.55 MeV. Energy released = 275.55 \u2212 263.50 = 12.05 MeV.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST 2026 B.Tech official syllabus and paper pattern",
      "url": "https://www.lpu.in/nest/btech/syllabus.php",
      "checkedOn": "2026-08-28"
    },
    "correctValue": "12.05"
  }
];
