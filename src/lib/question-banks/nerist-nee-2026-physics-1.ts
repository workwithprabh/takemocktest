import type { Question } from '../questions';

export const NERIST_NEE_2026_PHYSICS_1: Question[] = [
  {
    "id": "nerist-nee-2026-ph-001",
    "section": "Physics",
    "topic": "Physical World and Measurement",
    "difficulty": "easy",
    "question": "The dimensions of the quantity Fv/P are required, where F is force, v is speed and P is power. What is Fv/P dimensionally equal to?",
    "options": [
      "LT^-1",
      "ML^2T^-2",
      "MLT^-2",
      "1 (dimensionless)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Power has dimensions of force \u00d7 speed. Hence Fv/P has identical dimensions in numerator and denominator and is dimensionless.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-002",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "easy",
    "question": "A particle moves along the x-axis with initial position x=2 m and velocity v(t)=3+2t m/s. What is its position at t=4 s?",
    "options": [
      "22 m",
      "26 m",
      "34 m",
      "30 m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Displacement from 0 to 4 s is \u222b(3+2t)dt = [3t+t\u00b2]_0^4 = 12+16=28 m. Adding the initial 2 m gives x=30 m.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-003",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "medium",
    "question": "A projectile is launched at 20 m/s at 30\u00b0 above the horizontal. Taking g=10 m/s\u00b2, what is its horizontal range on level ground?",
    "options": [
      "10\u221a3 m",
      "40\u221a3 m",
      "20\u221a3 m",
      "20 m"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "R=u\u00b2sin(2\u03b8)/g = 400\u00b7sin60\u00b0/10 = 40\u00b7(\u221a3/2)=20\u221a3 m.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-004",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "easy",
    "question": "A 6 kg block on a rough horizontal surface is pulled by a horizontal 30 N force. If the coefficient of kinetic friction is 0.20 and g=10 m/s\u00b2, what is the acceleration?",
    "options": [
      "1 m/s\u00b2",
      "3 m/s\u00b2",
      "2 m/s\u00b2",
      "5 m/s\u00b2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Kinetic friction is \u03bcmg=0.2\u00b76\u00b710=12 N. Net force=30\u221212=18 N, so a=18/6=3 m/s\u00b2.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-005",
    "section": "Physics",
    "topic": "Work, Energy and Power",
    "difficulty": "medium",
    "question": "A force F=4x newtons acts along the x-axis. How much work is done as the particle moves from x=1 m to x=3 m?",
    "options": [
      "8 J",
      "16 J",
      "24 J",
      "32 J"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "W=\u222b_1^3 4x dx = [2x\u00b2]_1^3 = 2(9\u22121)=16 J.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-006",
    "section": "Physics",
    "topic": "System of Particles and Rigid Body",
    "difficulty": "easy",
    "question": "Two particles of masses 2 kg and 5 kg lie on the x-axis at x=\u22121 m and x=3 m respectively. Where is their centre of mass?",
    "options": [
      "11/7 m",
      "15/7 m",
      "17/7 m",
      "13/7 m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "x_cm=(2\u00b7(\u22121)+5\u00b73)/(2+5)=13/7 m.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-007",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "easy",
    "question": "At a height equal to Earth\u2019s radius above the surface, what is the gravitational acceleration in terms of its surface value g?",
    "options": [
      "g/4",
      "g/2",
      "g/3",
      "g/8"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The distance from Earth\u2019s centre is 2R, so g\u2032=GM/(2R)\u00b2=g/4.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-008",
    "section": "Physics",
    "topic": "System of Particles and Rigid Body",
    "difficulty": "medium",
    "question": "A thin ring and a solid disc have the same mass M, radius R and angular speed. Which has the larger rotational kinetic energy, and by what factor?",
    "options": [
      "The ring, by a factor of 2",
      "The disc, by a factor of 2",
      "The ring, by a factor of 4",
      "They have equal rotational kinetic energy"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "K=(1/2)I\u03c9\u00b2. For the ring I=MR\u00b2; for the disc I=(1/2)MR\u00b2. Thus the ring has twice the rotational kinetic energy.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-009",
    "section": "Physics",
    "topic": "Mechanical Properties of Solids",
    "difficulty": "easy",
    "question": "A wire 2.0 m long and cross-sectional area 1.0\u00d710^-6 m\u00b2 extends by 1.0 mm under a 100 N load. What is Young\u2019s modulus?",
    "options": [
      "1.0\u00d710^11 Pa",
      "5.0\u00d710^10 Pa",
      "4.0\u00d710^11 Pa",
      "2.0\u00d710^11 Pa"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Y=(F/A)/(\u0394L/L)=(100/10^-6)/(10^-3/2)=10^8/(5\u00d710^-4)=2\u00d710^11 Pa.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-010",
    "section": "Physics",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "medium",
    "question": "Water flows steadily through a horizontal pipe. Its speed increases from 2 m/s to 5 m/s. Neglecting viscosity and taking water density as 1000 kg/m\u00b3, by how much does the static pressure decrease?",
    "options": [
      "10.5 kPa",
      "4.5 kPa",
      "7.5 kPa",
      "21 kPa"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For a horizontal streamline, \u0394P=(1/2)\u03c1(v\u2082\u00b2\u2212v\u2081\u00b2)=500(25\u22124)=10500 Pa=10.5 kPa.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-011",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "easy",
    "question": "One mole of an ideal monatomic gas is heated at constant volume through 30 K. Taking R=8.3 J mol^-1 K^-1, what is the increase in internal energy?",
    "options": [
      "249 J",
      "498 J",
      "374 J",
      "747 J"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For a monatomic ideal gas, \u0394U=(3/2)nR\u0394T=(3/2)(1)(8.3)(30)=373.5 J\u2248374 J.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-012",
    "section": "Physics",
    "topic": "Thermal Properties of Matter",
    "difficulty": "medium",
    "question": "A 0.20 kg metal block at 120\u00b0C is placed in 0.30 kg of water at 20\u00b0C in an insulated container. The final temperature is 30\u00b0C. Taking c_water=4200 J kg^-1 K^-1, find the metal\u2019s specific heat capacity.",
    "options": [
      "350 J kg^-1 K^-1",
      "525 J kg^-1 K^-1",
      "700 J kg^-1 K^-1",
      "1050 J kg^-1 K^-1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Heat lost by metal equals heat gained by water: 0.20\u00b7c\u00b790 = 0.30\u00b74200\u00b710. Hence 18c=12600 and c=700 J kg^-1 K^-1.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-013",
    "section": "Physics",
    "topic": "Oscillations",
    "difficulty": "easy",
    "question": "In simple harmonic motion of amplitude A, at what displacement magnitude are the kinetic and potential energies equal?",
    "options": [
      "A/2",
      "A/\u221a3",
      "A\u221a3/2",
      "A/\u221a2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Potential energy is proportional to x\u00b2 and total energy to A\u00b2. Equality of kinetic and potential energies gives x\u00b2/A\u00b2=1/2, so |x|=A/\u221a2.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-014",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "medium",
    "question": "A pipe closed at one end has length 0.85 m. If the speed of sound is 340 m/s, what is its fundamental frequency?",
    "options": [
      "50 Hz",
      "200 Hz",
      "400 Hz",
      "100 Hz"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For a closed pipe, f\u2081=v/(4L)=340/(4\u00d70.85)=100 Hz.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-015",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "easy",
    "question": "Two point charges +3 \u03bcC and \u22126 \u03bcC are separated by 0.30 m in vacuum. What is the magnitude of the electrostatic force between them?",
    "options": [
      "0.6 N",
      "1.8 N",
      "5.4 N",
      "18 N"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "F=k|q\u2081q\u2082|/r\u00b2=9\u00d710^9\u00b718\u00d710^-12/0.09=1.8 N.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-016",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "medium",
    "question": "A 6 \u03bcF parallel-plate capacitor is charged to 20 V and disconnected from the battery. The plate separation is then doubled without changing plate area. What is the new stored energy?",
    "options": [
      "0.6 mJ",
      "1.2 mJ",
      "2.4 mJ",
      "4.8 mJ"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Initially U=(1/2)CV\u00b2=1.2 mJ. After disconnection Q is fixed; doubling separation halves C, so U=Q\u00b2/(2C) doubles to 2.4 mJ.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-017",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "easy",
    "question": "A uniform wire has resistance 8 \u03a9. Its length is doubled and its radius is doubled, with resistivity unchanged. What is the new resistance?",
    "options": [
      "2 \u03a9",
      "4 \u03a9",
      "8 \u03a9",
      "16 \u03a9"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "R=\u03c1L/A. Doubling L multiplies R by 2, while doubling radius multiplies area by 4. Thus R\u2032=(2/4)R=4 \u03a9.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-018",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "A cell of emf 12 V and internal resistance 1 \u03a9 is connected to a 5 \u03a9 resistor. What is the terminal voltage of the cell?",
    "options": [
      "2 V",
      "10 V",
      "11 V",
      "12 V"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Current I=12/(5+1)=2 A. Terminal voltage E\u2212Ir=12\u22122=10 V, also equal to IR=10 V across the load.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-019",
    "section": "Physics",
    "topic": "Moving Charges and Magnetism",
    "difficulty": "easy",
    "question": "A proton moves at 3.0\u00d710^6 m/s perpendicular to a uniform 0.20 T magnetic field. What is the magnetic force magnitude?",
    "options": [
      "4.8\u00d710^-14 N",
      "9.6\u00d710^-13 N",
      "1.6\u00d710^-12 N",
      "9.6\u00d710^-14 N"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "F=qvB=(1.6\u00d710^-19)(3\u00d710^6)(0.20)=9.6\u00d710^-14 N.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-020",
    "section": "Physics",
    "topic": "Magnetism and Matter",
    "difficulty": "medium",
    "question": "A circular coil has 20 turns, radius 0.10 m and carries 0.50 A. What is the magnitude of its magnetic dipole moment?",
    "options": [
      "0.01\u03c0 A m\u00b2",
      "0.20\u03c0 A m\u00b2",
      "0.10\u03c0 A m\u00b2",
      "\u03c0 A m\u00b2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Magnetic moment m=NIA=20\u00b70.50\u00b7\u03c0(0.10)\u00b2=0.10\u03c0 A m\u00b2.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-021",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "easy",
    "question": "A 0.40 m conducting rod moves at 6.0 m/s perpendicular to a uniform 0.50 T magnetic field, with the rod also perpendicular to its velocity. What motional emf is induced across its ends?",
    "options": [
      "0.6 V",
      "1.2 V",
      "2.4 V",
      "4.8 V"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The motional emf is Blv=(0.50)(0.40)(6.0)=1.2 V.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-022",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "medium",
    "question": "A series AC circuit has resistance R=6 \u03a9 and inductive reactance X_L=8 \u03a9, with negligible capacitance. What is its impedance magnitude?",
    "options": [
      "2 \u03a9",
      "10 \u03a9",
      "7 \u03a9",
      "14 \u03a9"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Z=\u221a(R\u00b2+X_L\u00b2)=\u221a(36+64)=10 \u03a9.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-023",
    "section": "Physics",
    "topic": "Electromagnetic Waves",
    "difficulty": "easy",
    "question": "Which part of the electromagnetic spectrum lies between visible light and X-rays in frequency?",
    "options": [
      "Infrared",
      "Microwaves",
      "Ultraviolet",
      "Gamma rays"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Frequency increases from visible light to ultraviolet and then to X-rays; hence ultraviolet lies between visible and X-rays.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-024",
    "section": "Physics",
    "topic": "Ray Optics and Optical Instruments",
    "difficulty": "medium",
    "question": "Two thin lenses of powers +5 D and \u22122 D are placed in contact. What is the focal length of the combination?",
    "options": [
      "1/7 m",
      "1/3 m",
      "1/5 m",
      "1/2 m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "P_eq=+5\u22122=+3 D, so f=1/P=1/3 m.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-025",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "medium",
    "question": "In Young\u2019s double-slit experiment, slit separation is 0.50 mm, screen distance is 2.0 m and wavelength is 600 nm. What is the fringe width?",
    "options": [
      "1.2 mm",
      "3.6 mm",
      "4.8 mm",
      "2.4 mm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "\u03b2=\u03bbD/d=(600\u00d710^-9\u00d72)/(0.50\u00d710^-3)=2.4\u00d710^-3 m=2.4 mm.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-026",
    "section": "Physics",
    "topic": "Dual Nature of Radiation and Matter",
    "difficulty": "hard",
    "question": "A proton and an alpha particle are accelerated from rest through potential differences Vp and V\u03b1. Their de Broglie wavelengths after acceleration are equal. If the sum of their kinetic energies is 18 keV, what is Vp? Take the alpha-particle mass as 4 times the proton mass and its charge as +2e.",
    "options": [
      "14.4 kV",
      "9.0 kV",
      "7.2 kV",
      "16.2 kV"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Equal de Broglie wavelengths mean equal momenta. For a particle accelerated from rest, p\u00b2=2mqV. Thus mp\u00b7e\u00b7Vp=(4mp)(2e)V\u03b1, so Vp=8V\u03b1. The total kinetic energy is eVp+2eV\u03b1=e(8V\u03b1+2V\u03b1)=10eV\u03b1=18 keV. Hence V\u03b1=1.8 kV and Vp=14.4 kV.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-027",
    "section": "Physics",
    "topic": "Atoms and Nuclei",
    "difficulty": "medium",
    "question": "A radioactive sample has half-life 6 h and initial mass 160 mg. What mass remains after 18 h?",
    "options": [
      "20 mg",
      "10 mg",
      "40 mg",
      "80 mg"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "18 h is three half-lives, so remaining mass=160(1/2)^3=20 mg.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-028",
    "section": "Physics",
    "topic": "Semiconductor Electronics",
    "difficulty": "medium",
    "question": "A forward-biased silicon diode has a 0.70 V drop and is in series with a 430 \u03a9 resistor across a 5.0 V source. Approximate the current.",
    "options": [
      "5 mA",
      "20 mA",
      "43 mA",
      "10 mA"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "The resistor has 5.0\u22120.70=4.30 V. Thus I=4.30/430=0.010 A=10 mA.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-029",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "hard",
    "question": "A satellite moves in a circular orbit of radius 4R around a planet of radius R. If v_e is the escape speed from the planet\u2019s surface, what is the orbital speed?",
    "options": [
      "v_e/(2\u221a2)",
      "v_e/2",
      "v_e/\u221a2",
      "v_e/4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "v_orb=\u221a(GM/4R)=(1/2)\u221a(GM/R). Since v_e=\u221a(2GM/R), v_orb=v_e/(2\u221a2).",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-030",
    "section": "Physics",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "hard",
    "question": "A small sphere falls through a viscous liquid at terminal speed v under Stokes-law conditions. If its radius is doubled while material and liquid are unchanged, what is the new terminal speed?",
    "options": [
      "4v",
      "2v",
      "8v",
      "16v"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Under Stokes-law terminal motion, v_t\u221dr\u00b2 for fixed density difference and viscosity. Doubling radius makes terminal speed four times larger.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-031",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "hard",
    "question": "A Carnot engine operates between 600 K and 300 K and absorbs 1.2 kJ per cycle from the hot reservoir. What work does it produce per cycle?",
    "options": [
      "300 J",
      "900 J",
      "1.2 kJ",
      "600 J"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "Carnot efficiency=1\u2212300/600=0.5. Work=\u03b7Q_H=0.5\u00d71.2 kJ=0.6 kJ=600 J.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-032",
    "section": "Physics",
    "topic": "Oscillations",
    "difficulty": "hard",
    "question": "A 0.80 kg block attached to a spring of force constant 200 N/m executes SHM with amplitude 0.12 m. What is its maximum speed?",
    "options": [
      "0.95 m/s",
      "1.90 m/s",
      "3.00 m/s",
      "3.80 m/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "\u03c9=\u221a(k/m)=\u221a(200/0.80)=\u221a250 rad/s. Thus v_max=\u03c9A\u224815.81\u00d70.12=1.90 m/s.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-033",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "hard",
    "question": "Capacitors of 4 \u03bcF and 12 \u03bcF are connected in series across a 15 V source. What is the total electrostatic energy stored in the combination?",
    "options": [
      "337.5 \u03bcJ",
      "168.75 \u03bcJ",
      "675 \u03bcJ",
      "900 \u03bcJ"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "The series capacitance is (4\u00d712)/(4+12)=3 \u03bcF. Total energy=(1/2)C_eqV\u00b2=(1/2)(3 \u03bcF)(15\u00b2)=337.5 \u03bcJ.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-034",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "hard",
    "question": "A 4 \u03a9 resistor and a 12 \u03a9 resistor are connected in parallel; this combination is in series with a 3 \u03a9 resistor across a 12 V source. What power is dissipated in the 3 \u03a9 resistor?",
    "options": [
      "12 W",
      "6 W",
      "18 W",
      "24 W"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "The parallel pair has resistance 3 \u03a9, so total resistance is 6 \u03a9 and current is 2 A. Power in the series 3 \u03a9 resistor is I\u00b2R=4\u00d73=12 W.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "nerist-nee-2026-ph-035",
    "section": "Physics",
    "topic": "Ray Optics and Optical Instruments",
    "difficulty": "hard",
    "question": "A convex lens of focal length 18 cm has an object 27 cm to its left. A concave lens of focal length 30 cm is placed 69 cm to the right of the convex lens on the same axis. Where is the final image relative to the concave lens?",
    "options": [
      "10 cm to the right of the concave lens",
      "15 cm to the left of the concave lens",
      "10 cm to the left of the concave lens",
      "30 cm to the left of the concave lens"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "explanation": "For the convex lens, u\u2081=\u221227 cm and f\u2081=+18 cm, so 1/v\u2081=1/18\u22121/27=1/54 and v\u2081=+54 cm. The second lens is at 69 cm, so this image is 15 cm to its left: u\u2082=\u221215 cm. For f\u2082=\u221230 cm, 1/v\u2082=1/f\u2082+1/u\u2082=\u22121/30\u22121/15=\u22121/10, so v\u2082=\u221210 cm: 10 cm left of the concave lens.",
    "source": {
      "kind": "original",
      "reference": "NERIST NEE 2026 current official NEE-II PCM Engineering & Technology brochure and syllabus",
      "url": "https://nerist.ac.in/wp-content/uploads/2026/01/Information-Brochure-NEE-2026-.pdf",
      "checkedOn": "2026-08-29"
    }
  }
];
