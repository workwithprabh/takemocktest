import type { Question } from '../questions';

export const IEMJEE_2026_PHYSICS_1: Question[] = [
  {
    "id": "iemjee-2026-ph-001",
    "section": "Physics",
    "topic": "Units and Measurements",
    "difficulty": "medium",
    "question": "A resistance is calculated from measured values V = (12.0 \u00b1 0.2) V and I = (2.00 \u00b1 0.05) A using R = V/I. What is the maximum percentage uncertainty in R?",
    "options": [
      "1.67%",
      "4.17%",
      "2.50%",
      "6.67%"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a quotient, maximum fractional uncertainties add: \u0394R/R = \u0394V/V + \u0394I/I = 0.2/12.0 + 0.05/2.00 = 0.04167. Hence the maximum percentage uncertainty is about 4.17%.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-002",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "medium",
    "question": "A particle moves in the xy-plane with velocity v(t) = (6 - 2t)i + 4t j m/s, where t is in seconds. At what time is its speed minimum?",
    "options": [
      "0.30 s",
      "1.20 s",
      "1.50 s",
      "0.60 s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The square of the speed is v\u00b2 = (6-2t)\u00b2 + (4t)\u00b2 = 36 - 24t + 20t\u00b2. This quadratic is minimum when d(v\u00b2)/dt = -24 + 40t = 0, giving t = 0.60 s.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-003",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "easy",
    "question": "A ball is projected horizontally at 20 m/s from a sufficiently high cliff. Taking g = 10 m/s^2, what is its speed 1.5 s after projection?",
    "options": [
      "25 m/s",
      "15 m/s",
      "20 m/s",
      "35 m/s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The horizontal speed stays 20 m/s, while the vertical speed after 1.5 s is gt = 15 m/s. The resultant speed is sqrt(20^2 + 15^2) = 25 m/s.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-004",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "medium",
    "question": "A 4 kg block on a horizontal rough surface is pulled by a 25 N force at 37\u00b0 above the horizontal. The coefficient of kinetic friction is 0.20. Take g = 10 m/s^2, sin 37\u00b0 = 0.6 and cos 37\u00b0 = 0.8. What is the acceleration of the block?",
    "options": [
      "2.50 m/s^2",
      "4.50 m/s^2",
      "3.75 m/s^2",
      "5.00 m/s^2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The normal reaction is N = 40 - 25(0.6) = 25 N, so kinetic friction is 0.2\u00d725 = 5 N. The horizontal pull is 25(0.8) = 20 N, giving net force 15 N. Hence a = 15/4 = 3.75 m/s^2.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-005",
    "section": "Physics",
    "topic": "Work, Energy and Power",
    "difficulty": "medium",
    "question": "A 500 kg lift starts upward from rest with constant acceleration 1.2 m/s\u00b2. Neglect friction and take g = 9.8 m/s\u00b2. What instantaneous power is delivered by the supporting cable 3.0 s after the start?",
    "options": [
      "15.8 kW",
      "19.8 kW",
      "22.0 kW",
      "9.9 kW"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The cable tension is T = m(g+a) = 500(9.8+1.2) = 5500 N. After 3.0 s the speed is v = at = 3.6 m/s. Hence the instantaneous power is P = Tv = 5500\u00d73.6 = 1.98\u00d710^4 W = 19.8 kW.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-006",
    "section": "Physics",
    "topic": "Collisions",
    "difficulty": "hard",
    "question": "A 2 kg cart moving at 6 m/s east and a 3 kg cart moving at 4 m/s north collide at an intersection and stick together. How much kinetic energy is lost in the collision?",
    "options": [
      "31.2 J",
      "24.0 J",
      "28.8 J",
      "36.0 J"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Initial kinetic energy is (1/2)(2)(6\u00b2)+(1/2)(3)(4\u00b2)=60 J. Total momentum is (12,12) kg\u00b7m/s, so for the combined 5 kg mass, v\u00b2=(12\u00b2+12\u00b2)/25=11.52. Final kinetic energy is (1/2)(5)(11.52)=28.8 J. The loss is 60-28.8=31.2 J.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-007",
    "section": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "medium",
    "question": "A uniform disc of mass 2 kg and radius 0.50 m can rotate freely about its central axis. A point mass of 2 kg is fixed at the rim. A tangential force of 9 N is then applied at the rim. What angular acceleration is produced?",
    "options": [
      "3 rad/s^2",
      "9 rad/s^2",
      "12 rad/s^2",
      "6 rad/s^2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The total moment of inertia is (1/2)MR^2 + mR^2 = (1/2)(2)(0.5)^2 + 2(0.5)^2 = 0.75 kg m^2. Torque is FR = 9(0.5)=4.5 N m. Therefore \u03b1 = \u03c4/I = 4.5/0.75 = 6 rad/s^2.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-008",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "Two circular satellites orbit the same planet at radii 2R and 4R from the planet centre. What is the ratio T_(4R)/T_(2R) of their orbital periods?",
    "options": [
      "2",
      "4",
      "2\u221a2",
      "\u221a2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Kepler's third law gives T \u221d r^(3/2). Hence T_(4R)/T_(2R) = (4R/2R)^(3/2) = 2^(3/2) = 2\u221a2.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-009",
    "section": "Physics",
    "topic": "Properties of Liquids",
    "difficulty": "medium",
    "question": "Water flows steadily through a horizontal pipe. At one section its speed is 2 m/s, and at a narrower section the cross-sectional area is half as large. Neglecting viscosity, what is the pressure drop between the wider and narrower sections? Take water density as 1000 kg/m^3.",
    "options": [
      "6000 Pa",
      "2000 Pa",
      "4000 Pa",
      "8000 Pa"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Continuity gives v2 = 4 m/s. Bernoulli at equal height gives P1-P2 = (1/2)\u03c1(v2^2-v1^2) = 500(16-4) = 6000 Pa.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-010",
    "section": "Physics",
    "topic": "Elasticity",
    "difficulty": "medium",
    "question": "Two identical wires P and Q are made of different materials. For P, Young's modulus is 200 GPa and the elastic limit is 100 MPa. For Q, Young's modulus is 100 GPa and the elastic limit is 180 MPa. Consider the following statements:\nI. When each wire is subjected to a tensile stress of 80 MPa, the strain in Q is twice the strain in P.\nII. If the stress on each wire is increased to 150 MPa and then completely removed, only Q is guaranteed to regain its original length.\nWhich option is correct?",
    "options": [
      "I only",
      "II only",
      "Both I and II",
      "Neither I nor II"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At 80 MPa both wires are below their elastic limits, so Hooke's law applies. For P, strain = 80 MPa / 200 GPa = 4\u00d710^-4. For Q, strain = 80 MPa / 100 GPa = 8\u00d710^-4, which is twice the strain in P; statement I is true. At 150 MPa, P is above its 100 MPa elastic limit, so complete recovery is not guaranteed and a permanent set can remain. Q is still below its 180 MPa elastic limit, so it regains its original length on unloading. Statement II is also true. Therefore both I and II are correct.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-011",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "An ideal monatomic gas is heated at constant pressure. What is the ratio of heat supplied to work done by the gas during the process?",
    "options": [
      "3/2",
      "2",
      "5/3",
      "5/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At constant pressure, W = nR\u0394T and Q = nC_p\u0394T. For a monatomic gas C_p = 5R/2, so Q/W = (5R/2)/R = 5/2.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-012",
    "section": "Physics",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "medium",
    "question": "Oxygen gas at 300 K and hydrogen gas have the same rms molecular speed. Treat their molar masses as 32 g/mol and 2 g/mol respectively. What is the temperature of the hydrogen gas?",
    "options": [
      "37.5 K",
      "150 K",
      "18.75 K",
      "4800 K"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For equal rms speeds, T/M is the same. Thus T_H2/2 = 300/32, giving T_H2 = 18.75 K.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-013",
    "section": "Physics",
    "topic": "Simple Harmonic Motion",
    "difficulty": "hard",
    "question": "A particle performs SHM of amplitude A and angular frequency \u03c9. At an instant its displacement is A/2. What is the value of v^2/(|a|A) at that instant?",
    "options": [
      "1/2",
      "3/2",
      "1",
      "2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At x=A/2, v^2 = \u03c9^2(A^2-x^2)= (3/4)\u03c9^2A^2 and |a|=\u03c9^2x=(1/2)\u03c9^2A. Therefore v^2/(|a|A) = (3/4)/(1/2)=3/2.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-014",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "medium",
    "question": "In a resonance-tube experiment with one end closed, two successive resonance lengths for the same tuning fork are 0.35 m and 0.85 m. If the speed of sound is 340 m/s, what is the tuning-fork frequency?",
    "options": [
      "340 Hz",
      "170 Hz",
      "510 Hz",
      "680 Hz"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Successive resonance lengths differ by \u03bb/2. Thus \u03bb/2 = 0.85-0.35 = 0.50 m, so \u03bb=1.0 m. Hence f = v/\u03bb = 340 Hz.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-015",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "medium",
    "question": "Two identical charges +2 \u03bcC are fixed on the x-axis at x = +0.30 m and x = -0.30 m. What work must an external agent do to bring a +3 nC test charge slowly from infinity to the origin? Take k = 9\u00d710^9 N m^2/C^2.",
    "options": [
      "1.8\u00d710^-4 J",
      "7.2\u00d710^-4 J",
      "3.6\u00d710^-4 J",
      "1.2\u00d710^-3 J"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Potential at the origin is V = 2kq/r = 2(9\u00d710^9)(2\u00d710^-6)/0.30 = 1.2\u00d710^5 V. The required work is q_test V = 3\u00d710^-9\u00d71.2\u00d710^5 = 3.6\u00d710^-4 J.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-016",
    "section": "Physics",
    "topic": "Capacitance",
    "difficulty": "medium",
    "question": "A 6 \u03bcF capacitor is charged to 12 V and then disconnected from the source. A dielectric slab of dielectric constant 3 completely fills the gap. What is the new electrostatic energy stored?",
    "options": [
      "4.32\u00d710^-4 J",
      "4.8\u00d710^-5 J",
      "1.296\u00d710^-3 J",
      "1.44\u00d710^-4 J"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "After disconnection, charge remains fixed. Inserting dielectric K triples capacitance, so energy U=Q^2/(2C) becomes U0/K. Initially U0=(1/2)(6\u00d710^-6)(12^2)=4.32\u00d710^-4 J. Thus U=1.44\u00d710^-4 J.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-017",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "A 2 \u03a9 resistor and a 3 \u03a9 resistor are connected in parallel, and this combination is in series with a 1.8 \u03a9 resistor across a 12 V battery of negligible internal resistance. What power is dissipated in the 1.8 \u03a9 resistor?",
    "options": [
      "14.4 W",
      "28.8 W",
      "19.2 W",
      "36.0 W"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The parallel equivalent is (2\u00d73)/(2+3)=1.2 \u03a9. Total resistance is 3.0 \u03a9, so current is 12/3=4 A. Power in the 1.8 \u03a9 series resistor is I^2R=16\u00d71.8=28.8 W.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-018",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "hard",
    "question": "Two cells of emfs 6 V and 3 V with internal resistances 1 \u03a9 and 2 \u03a9 respectively are connected in parallel with the same polarity, and the combination supplies a 4 \u03a9 load. What current flows through the load?",
    "options": [
      "3/4 A",
      "5/6 A",
      "15/14 A",
      "7/6 A"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For parallel cells, E_eq = (E1/r1 + E2/r2)/(1/r1+1/r2) = (6+1.5)/1.5 = 5 V, while r_eq = 1/(1+1/2)=2/3 \u03a9. Load current is 5/(4+2/3)=15/14 A.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-019",
    "section": "Physics",
    "topic": "Magnetic Effects of Current",
    "difficulty": "easy",
    "question": "A proton moves perpendicular to a uniform magnetic field in a circular path. If its kinetic energy is made four times larger while the magnetic field is doubled, how does the orbit radius change?",
    "options": [
      "It remains unchanged",
      "It doubles",
      "It becomes half",
      "It becomes four times"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For non-relativistic motion, r = p/(qB) and p \u221d \u221aK. Quadrupling K doubles p, while doubling B also doubles the denominator, so r is unchanged.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-020",
    "section": "Physics",
    "topic": "Magnetic Effects of Current",
    "difficulty": "medium",
    "question": "A 25-turn coil of area 0.020 m^2 carries 0.40 A in a uniform magnetic field of 0.50 T. The angle between the coil normal and the field is 30\u00b0. What torque acts on the coil?",
    "options": [
      "0.025 N m",
      "0.087 N m",
      "0.100 N m",
      "0.050 N m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Torque is \u03c4 = NIAB sin\u03b8 = 25(0.40)(0.020)(0.50)sin30\u00b0 = 0.050 N m.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-021",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "medium",
    "question": "A conducting rod of length 0.40 m moves at 5.0 m/s perpendicular to a uniform 0.80 T magnetic field. The rod forms a closed circuit of total resistance 2.0 \u03a9. What magnetic force opposes the motion of the rod?",
    "options": [
      "0.128 N",
      "0.320 N",
      "0.256 N",
      "0.640 N"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Motional emf is \u03b5=Blv=0.8\u00d70.4\u00d75=1.6 V. Current is I=\u03b5/R=0.8 A. The retarding magnetic force is F=BIl=0.8\u00d70.8\u00d70.4=0.256 N.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-022",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "medium",
    "question": "A resistor and a capacitor are connected in parallel across the same AC source. The rms current through the resistor is 5 A and that through the capacitor is 12 A. What is the power factor of the combination?",
    "options": [
      "12/13",
      "5/13",
      "5/12",
      "13/17"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The resistor current is in phase with the voltage, while the capacitor current leads it by 90\u00b0. Hence the total rms current is \u221a(5\u00b2+12\u00b2)=13 A. The in-phase component is 5 A, so the power factor is cos\u03c6 = 5/13.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-023",
    "section": "Physics",
    "topic": "Electromagnetic Waves",
    "difficulty": "easy",
    "question": "An electromagnetic wave in vacuum has frequency 6.0\u00d710^14 Hz. What is its wavelength?",
    "options": [
      "500 nm",
      "250 nm",
      "600 nm",
      "2000 nm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "\u03bb=c/f = 3\u00d710^8 /(6\u00d710^14) = 5\u00d710^-7 m = 500 nm.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-024",
    "section": "Physics",
    "topic": "Ray Optics",
    "difficulty": "easy",
    "question": "A thin convex lens forms a real image four times the size of an object. The distance between the object and its image is 45 cm. What is the focal length of the lens?",
    "options": [
      "5.4 cm",
      "6.0 cm",
      "9.0 cm",
      "7.2 cm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a real image with magnitude of magnification 4, the image distance has magnitude v=4u. Since the object and real image are on opposite sides of the lens, u+v=45 cm, so u=9 cm and v=36 cm. Therefore f=uv/(u+v)=9\u00d736/45=7.2 cm.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-025",
    "section": "Physics",
    "topic": "Ray Optics",
    "difficulty": "medium",
    "question": "A thin lens of refractive index 1.60 has surface radii R1 = +30 cm and R2 = -20 cm. It is immersed in a liquid of refractive index 1.20. What is its focal length in the liquid?",
    "options": [
      "24 cm",
      "36 cm",
      "48 cm",
      "72 cm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The relative refractive index is 1.60/1.20 = 4/3. Lensmaker's formula in the liquid gives 1/f = (4/3-1)(1/30-1/(-20)) = (1/3)(1/30+1/20) = (1/3)(1/12)=1/36 cm^-1. Hence f=36 cm.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-026",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "hard",
    "question": "In a Young double-slit setup, the slit separation is 0.50 mm and the screen is 2.0 m away. A transparent sheet of thickness 2.0 \u03bcm and refractive index 1.50 is placed in front of one slit. By how much does the central fringe shift?",
    "options": [
      "1.0 mm",
      "2.0 mm",
      "4.0 mm",
      "8.0 mm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The introduced optical path is (\u03bc-1)t. Fringe shift is y = D(\u03bc-1)t/d = 2(0.5)(2\u00d710^-6)/(0.5\u00d710^-3)=4\u00d710^-3 m = 4.0 mm.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-027",
    "section": "Physics",
    "topic": "Dual Nature of Matter and Radiation",
    "difficulty": "easy",
    "question": "An electron accelerated from rest through a potential V has de Broglie wavelength \u03bb. By what factor must the accelerating potential be multiplied to reduce the wavelength by 20%?",
    "options": [
      "16/25",
      "5/4",
      "2",
      "25/16"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a non-relativistic electron accelerated through a potential, \u03bb is proportional to 1/\u221aV. If \u03bb' = 0.80\u03bb, then V'/V = (\u03bb/\u03bb')\u00b2 = (1/0.80)\u00b2 = 25/16.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-028",
    "section": "Physics",
    "topic": "Atoms",
    "difficulty": "medium",
    "question": "In a hydrogen atom, what energy is emitted when an electron falls from n = 4 to n = 2? Take the ground-state energy magnitude as 13.6 eV.",
    "options": [
      "2.55 eV",
      "1.89 eV",
      "3.40 eV",
      "10.2 eV"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The emitted energy is 13.6[1/2^2 - 1/4^2] = 13.6(1/4-1/16)=13.6(3/16)=2.55 eV.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-029",
    "section": "Physics",
    "topic": "Nuclei",
    "difficulty": "medium",
    "question": "A hypothetical nucleus of mass number 16 has binding energy 7.5 MeV per nucleon. It splits into two identical nuclei of mass number 8, each having binding energy 7.9 MeV per nucleon. Ignoring kinetic energy before the split, how much energy is released?",
    "options": [
      "3.2 MeV",
      "12.8 MeV",
      "6.4 MeV",
      "126.4 MeV"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Initial total binding energy is 16\u00d77.5=120 MeV. Final total binding energy is 2\u00d78\u00d77.9=126.4 MeV. The increase in binding energy, released as energy, is 6.4 MeV.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ph-030",
    "section": "Physics",
    "topic": "Electronic Devices",
    "difficulty": "easy",
    "question": "A silicon diode with a constant forward drop of 0.70 V is connected in series with an 860 \u03a9 resistor across a 5.0 V DC source in forward bias. What current flows?",
    "options": [
      "2.5 mA",
      "5.0 mA",
      "4.3 mA",
      "5.8 mA"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The resistor has 5.0-0.70=4.30 V across it. Thus I=4.30/860 A = 0.005 A = 5.0 mA.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  }
];
