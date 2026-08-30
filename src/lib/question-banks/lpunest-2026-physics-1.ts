import type { Question } from '../questions';

export const LPUNEST_2026_PHYSICS_1: Question[] = [
  {
    "id": "lpunest-2026-ph-001",
    "section": "Physics",
    "topic": "Physics and Measurement",
    "difficulty": "easy",
    "question": "If a physical quantity is defined as pressure multiplied by volume, which other physical quantity has the same dimensions?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Pressure has dimensions of force per area. Multiplying by volume gives force times length, which has the dimensions of work or energy.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "Energy",
      "Force",
      "Power",
      "Momentum"
    ],
    "correctIndex": 0
  },
  {
    "id": "lpunest-2026-ph-002",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "medium",
    "question": "A car can just negotiate a level circular road of radius R at speed v when the coefficient of friction is mu. If the radius is doubled and the coefficient of friction is halved, what is the new limiting speed?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For a level curve, v_max = sqrt(mu R g). Replacing R by 2R and mu by mu/2 leaves the product mu R unchanged, so the limiting speed remains v.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "v/2",
      "v",
      "sqrt(2) v",
      "2v"
    ],
    "correctIndex": 1
  },
  {
    "id": "lpunest-2026-ph-003",
    "section": "Physics",
    "topic": "Work, Energy and Power",
    "difficulty": "medium",
    "question": "A 3 kg block starts from rest on a horizontal surface. A constant horizontal force of 20 N acts over 10 m while friction opposes the motion with 5 N. What speed does the block attain?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Net work is (20-5)*10 = 150 J. Thus (1/2)*3*v^2 = 150, giving v^2 = 100 and v = 10 m/s.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "5 m/s",
      "sqrt(50) m/s",
      "10 m/s",
      "15 m/s"
    ],
    "correctIndex": 2
  },
  {
    "id": "lpunest-2026-ph-004",
    "section": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "hard",
    "question": "A thin square frame of side a has total mass M distributed uniformly along its four sides. What is its moment of inertia about an axis through the centre and perpendicular to the plane?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For each side, I about the central perpendicular axis is (M/4)(a^2/12 + a^2/4) = M a^2/12. Four sides give I = M a^2/3.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "M a^2/3",
      "M a^2/6",
      "M a^2/2",
      "2 M a^2/3"
    ],
    "correctIndex": 0
  },
  {
    "id": "lpunest-2026-ph-005",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "medium",
    "question": "Particle A has velocity (6 i + 2 j) m/s and particle B has velocity (2 i - j) m/s. What is the magnitude of the velocity of A relative to B?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "v_A - v_B = 4 i + 3 j, whose magnitude is sqrt(4^2+3^2)=5 m/s.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "5 m/s",
      "3 m/s",
      "4 m/s",
      "7 m/s"
    ],
    "correctIndex": 0
  },
  {
    "id": "lpunest-2026-ph-006",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "easy",
    "question": "At a height equal to Earth's radius above the surface, what is the acceleration due to gravity in terms of its surface value g? Neglect Earth's rotation.",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The distance from Earth's centre becomes 2R. Since g varies as 1/r^2, the new value is g*(R/2R)^2 = g/4.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "g/2",
      "g/3",
      "g/4",
      "g/8"
    ],
    "correctIndex": 2
  },
  {
    "id": "lpunest-2026-ph-007",
    "section": "Physics",
    "topic": "Oscillations and Waves",
    "difficulty": "easy",
    "question": "In simple harmonic motion of amplitude A, what fraction of the total mechanical energy is kinetic when the displacement is A/2?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Potential energy fraction is x^2/A^2 = 1/4. Hence the kinetic energy fraction is 1-1/4 = 3/4.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "1/4",
      "1/2",
      "sqrt(3)/2",
      "3/4"
    ],
    "correctIndex": 3
  },
  {
    "id": "lpunest-2026-ph-008",
    "section": "Physics",
    "topic": "Properties of Solids and Liquids",
    "difficulty": "medium",
    "question": "Water flows steadily through a horizontal pipe. Its speed is 4 m/s in a narrow section and 2 m/s in a wider section. Taking water density as 1000 kg/m^3, by how much is the pressure in the wider section greater?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Bernoulli's equation at equal height gives P_wide-P_narrow = (1/2)rho(4^2-2^2) = 500*12 = 6000 Pa.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "2000 Pa",
      "4000 Pa",
      "6000 Pa",
      "8000 Pa"
    ],
    "correctIndex": 2
  },
  {
    "id": "lpunest-2026-ph-009",
    "section": "Physics",
    "topic": "Properties of Solids and Liquids - Thermal Physics",
    "difficulty": "medium",
    "question": "Two portions of water, 0.20 kg at 20 C and 0.10 kg at 80 C, are mixed in an insulated container. Neglecting the container's heat capacity, what is the final temperature?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For the same substance, the final temperature is the mass-weighted average: (0.20*20+0.10*80)/0.30 = 40 C.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "40 C",
      "30 C",
      "45 C",
      "50 C"
    ],
    "correctIndex": 0
  },
  {
    "id": "lpunest-2026-ph-010",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "easy",
    "question": "A gas absorbs 500 J of heat and does 200 J of work on its surroundings. What is the change in its internal energy?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Using the first law with work done by the system positive, Delta U = Q-W = 500-200 = +300 J.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "+700 J",
      "-300 J",
      "-700 J",
      "+300 J"
    ],
    "correctIndex": 3
  },
  {
    "id": "lpunest-2026-ph-011",
    "section": "Physics",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "medium",
    "question": "For an ideal diatomic gas at ordinary temperatures, vibrational modes are neglected. What is the ratio gamma = C_p/C_v?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "A diatomic molecule has five active degrees of freedom, so C_v=5R/2 and C_p=7R/2. Therefore gamma=7/5.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "5/3",
      "4/3",
      "9/7",
      "7/5"
    ],
    "correctIndex": 3
  },
  {
    "id": "lpunest-2026-ph-012",
    "section": "Physics",
    "topic": "Electrostatics - II",
    "difficulty": "medium",
    "question": "A parallel-plate capacitor is charged and then disconnected from the battery. A dielectric of constant k completely fills the space between the plates. How does the stored electrostatic energy change?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "After disconnection the charge stays fixed. Since capacitance becomes kC and U=Q^2/(2C), the energy becomes U/k.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "It becomes k times its initial value",
      "It becomes 1/k of its initial value",
      "It remains unchanged",
      "It becomes 1/k^2 of its initial value"
    ],
    "correctIndex": 1
  },
  {
    "id": "lpunest-2026-ph-013",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "A cell has emf 12 V and internal resistance 1 ohm. It is connected to a 5 ohm resistor. What is the terminal voltage of the cell while current flows?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The current is 12/(5+1)=2 A. Terminal voltage is E-Ir = 12-2*1 = 10 V.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "2 V",
      "6 V",
      "12 V",
      "10 V"
    ],
    "correctIndex": 3
  },
  {
    "id": "lpunest-2026-ph-014",
    "section": "Physics",
    "topic": "Magnetic Effects of Current and Magnetism",
    "difficulty": "medium",
    "question": "A charged particle moves perpendicular to a uniform magnetic field. If both its speed and the magnitude of its charge are doubled while mass and field remain unchanged, how does the radius of its circular path change?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The magnetic radius is r=mv/(|q|B). Doubling both v and |q| leaves their ratio unchanged.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "It doubles",
      "It remains unchanged",
      "It halves",
      "It becomes four times"
    ],
    "correctIndex": 1
  },
  {
    "id": "lpunest-2026-ph-015",
    "section": "Physics",
    "topic": "Atoms and Nuclei",
    "difficulty": "medium",
    "question": "Why can energy be released when a heavy nucleus undergoes fission into medium-mass nuclei?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Medium-mass nuclei generally have greater binding energy per nucleon than very heavy nuclei. The increase in total binding energy appears as released energy.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "The products have more protons than the parent",
      "The total number of nucleons increases",
      "Rest mass is exactly conserved with no mass defect",
      "The products have a higher binding energy per nucleon"
    ],
    "correctIndex": 3
  },
  {
    "id": "lpunest-2026-ph-016",
    "section": "Physics",
    "topic": "Dual Nature of Matter and Radiation",
    "difficulty": "hard",
    "question": "A metal has threshold frequency 5 x 10^14 Hz. Light of frequency 8 x 10^14 Hz produces photoelectrons with maximum kinetic energy K. What maximum kinetic energy will light of frequency 11 x 10^14 Hz produce?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Einstein's equation gives K_max=h(nu-nu_0). The excess frequency changes from 3 x 10^14 to 6 x 10^14 Hz, so the maximum kinetic energy doubles.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "K/2",
      "2K",
      "3K/2",
      "3K"
    ],
    "correctIndex": 1
  },
  {
    "id": "lpunest-2026-ph-017",
    "section": "Physics",
    "topic": "Optics - I",
    "difficulty": "medium",
    "question": "A monochromatic ray travels from glass into air. At an incidence angle C in the glass, the refracted ray just grazes the interface. What happens if the incidence angle in the glass is increased above C?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "C is the critical angle for the glass-air interface. For incidence from the denser medium at an angle greater than C, no refracted ray propagates into air and total internal reflection occurs.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "The ray refracts into air and bends toward the normal",
      "The ray undergoes total internal reflection",
      "The ray emerges along the normal",
      "The light frequency becomes zero"
    ],
    "correctIndex": 1
  },
  {
    "id": "lpunest-2026-ph-018",
    "section": "Physics",
    "topic": "Optics - II",
    "difficulty": "medium",
    "question": "In Young's double-slit experiment, light of wavelength 600 nm is used with slit separation 0.50 mm and screen distance 1.5 m. What is the fringe width?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Fringe width beta=lambda D/d = (600e-9*1.5)/(0.50e-3)=1.8e-3 m = 1.8 mm.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "1.8 mm",
      "0.9 mm",
      "1.2 mm",
      "3.6 mm"
    ],
    "correctIndex": 0
  },
  {
    "id": "lpunest-2026-ph-019",
    "section": "Physics",
    "topic": "Electromagnetic Induction and Alternating Currents",
    "difficulty": "medium",
    "question": "A square conducting loop of side 0.20 m and resistance 0.40 ohm moves at 3.0 m/s perpendicular to the straight boundary of a uniform 0.50 T magnetic field. While the loop is partly leaving the field, what is the magnitude of the magnetic force opposing its motion? Neglect self-inductance.",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "During partial exit, the motional emf is E = B l v = 0.50*0.20*3.0 = 0.30 V. The induced current is I = E/R = 0.30/0.40 = 0.75 A. The side of length l still in the field experiences a horizontal force F = B I l = 0.50*0.75*0.20 = 0.075 N, opposing the motion by Lenz's law.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "0.025 N",
      "0.050 N",
      "0.075 N",
      "0.150 N"
    ],
    "correctIndex": 2
  },
  {
    "id": "lpunest-2026-ph-020",
    "section": "Physics",
    "topic": "Electronic Devices - II",
    "difficulty": "medium",
    "question": "For a two-input NAND gate, for which input pair is the output 0?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "A NAND gate is the negation of AND. AND is 1 only for inputs (1,1), so NAND is 0 only for (1,1).",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "(0, 0)",
      "(0, 1)",
      "(1, 1)",
      "(1, 0)"
    ],
    "correctIndex": 2
  },
  {
    "id": "lpunest-2026-ph-021",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "easy",
    "question": "An object starts from rest in a straight line. It accelerates uniformly at 6 m/s^2 for 2 s and then decelerates uniformly at 2 m/s^2 for the next 3 s. Enter the total displacement in metres over the 5 s interval.",
    "options": [],
    "correctIndex": -1,
    "correctValue": "39",
    "answerType": "numerical",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "In the first 2 s, s1 = (1/2)*6*(2^2) = 12 m and the speed becomes 12 m/s. In the next 3 s, s2 = 12*3 - (1/2)*2*(3^2) = 27 m. Total displacement = 12 + 27 = 39 m.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "lpunest-2026-ph-022",
    "section": "Physics",
    "topic": "Electrostatics - II",
    "difficulty": "medium",
    "question": "A 5 microfarad capacitor stores 9 millijoules of electrostatic energy. Enter the potential difference across it in volts.",
    "options": [],
    "correctIndex": -1,
    "correctValue": "60",
    "answerType": "numerical",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Using U = (1/2)CV^2, V^2 = 2U/C = 2*9*10^-3/(5*10^-6) = 3600. Hence V = 60 V.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "lpunest-2026-ph-023",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "easy",
    "question": "An 8 ohm resistor is connected directly across an ideal 16 V source. Enter the power dissipated by the resistor in watts.",
    "options": [],
    "correctIndex": -1,
    "correctValue": "32",
    "answerType": "numerical",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "P=V^2/R=16^2/8=256/8=32 W.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "lpunest-2026-ph-024",
    "section": "Physics",
    "topic": "Optics - I",
    "difficulty": "medium",
    "question": "A ray enters a stack of plane-parallel transparent media from air and finally travels in a medium of refractive index 5/3. If the sine of its angle to the normal in air is 5/6, enter the sine of its angle to the normal in the final medium.",
    "options": [],
    "correctIndex": -1,
    "correctValue": "0.5",
    "answerType": "numerical",
    "maxDecimalPlaces": 1,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Across parallel interfaces, n sin(theta) is conserved. Thus 1*(5/6) = (5/3) sin(theta_final), giving sin(theta_final) = 1/2 = 0.5.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "lpunest-2026-ph-025",
    "section": "Physics",
    "topic": "Dual Nature of Matter and Radiation",
    "difficulty": "medium",
    "question": "For a photon, use hc = 1240 eV nm. Enter the photon energy in eV for wavelength 620 nm.",
    "options": [],
    "correctIndex": -1,
    "correctValue": "2",
    "answerType": "numerical",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "E=hc/lambda=1240/620=2 eV exactly with the supplied value of hc.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    }
  }
];
