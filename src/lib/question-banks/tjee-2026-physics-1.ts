import type { Question } from '../questions';

export const TJEE_2026_PHYSICS_1: Question[] = [
  {
    "id": "tjee-2026-ph-001",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "medium",
    "question": "A car increases its speed uniformly from 10 m/s to 22 m/s in 6 s. How far does it travel during this interval?",
    "options": [
      "96 m",
      "108 m",
      "72 m",
      "84 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For uniform acceleration, average speed is (10+22)/2 = 16 m/s. Distance = 16\u00d76 = 96 m.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-002",
    "section": "Physics",
    "topic": "Vectors",
    "difficulty": "medium",
    "question": "Two displacement vectors are A = 3i + 4j and B = 4i - 3j. What is the angle between A and B?",
    "options": [
      "45\u00b0",
      "90\u00b0",
      "180\u00b0",
      "0\u00b0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A\u00b7B = 3\u00d74 + 4\u00d7(-3) = 0. Since both vectors are non-zero, a zero dot product means they are perpendicular.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-003",
    "section": "Physics",
    "topic": "Dimensional analysis",
    "difficulty": "easy",
    "question": "For a simple pendulum, dimensional analysis gives T proportional to \u221a(L/g). If the length is made four times larger at the same place, how does the period change?",
    "options": [
      "It becomes four times as large",
      "It becomes half as large",
      "It becomes twice as large",
      "It is unchanged"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "T \u221d \u221aL when g is fixed. Replacing L by 4L multiplies T by \u221a4 = 2.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-004",
    "section": "Physics",
    "topic": "Laws of motion and friction",
    "difficulty": "medium",
    "question": "A 5 kg block is pulled horizontally by a 20 N force on a rough level surface. The coefficient of kinetic friction is 0.20 and g = 10 m/s\u00b2. What is the acceleration?",
    "options": [
      "1 m/s\u00b2",
      "4 m/s\u00b2",
      "3 m/s\u00b2",
      "2 m/s\u00b2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Friction = \u03bcmg = 0.2\u00d75\u00d710 = 10 N. Net force = 20\u221210 = 10 N, so a = 10/5 = 2 m/s\u00b2.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-005",
    "section": "Physics",
    "topic": "Work and energy",
    "difficulty": "medium",
    "question": "A spring of force constant 200 N/m is compressed by 0.20 m and releases a 1 kg block on a frictionless surface. What speed does the block acquire when the spring reaches its natural length?",
    "options": [
      "2\u221a2 m/s",
      "4\u221a2 m/s",
      "2 m/s",
      "4 m/s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Spring energy = 1/2 kx\u00b2 = 1/2\u00d7200\u00d70.04 = 4 J. Thus 1/2 mv\u00b2 = 4, so v\u00b2 = 8 and v = 2\u221a2 m/s.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-006",
    "section": "Physics",
    "topic": "Rotational motion",
    "difficulty": "medium",
    "question": "A uniform disc of mass 2 kg and radius 0.50 m rotates about its central axis with angular speed 4 rad/s. What is its rotational kinetic energy?",
    "options": [
      "1 J",
      "2 J",
      "8 J",
      "4 J"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a disc, I = MR\u00b2/2 = 2\u00d70.25/2 = 0.25 kg m\u00b2. K = 1/2 I\u03c9\u00b2 = 1/2\u00d70.25\u00d716 = 2 J.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-007",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "easy",
    "question": "A satellite moves in a circular orbit of radius r with speed v. What is its orbital speed in a circular orbit of radius 4r around the same planet?",
    "options": [
      "4v",
      "v/4",
      "v/2",
      "2v"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Orbital speed is proportional to 1/\u221ar. Increasing orbital radius by a factor of 4 reduces speed by \u221a4 = 2.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-008",
    "section": "Physics",
    "topic": "Fluid mechanics",
    "difficulty": "medium",
    "question": "In a hydraulic lift, the small piston has area 5 cm\u00b2 and the large piston 200 cm\u00b2. If 50 N is applied to the small piston, what ideal force acts on the large piston?",
    "options": [
      "1000 N",
      "4000 N",
      "500 N",
      "2000 N"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By Pascal's law, F1/A1 = F2/A2. Thus F2 = 50\u00d7200/5 = 2000 N.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-009",
    "section": "Physics",
    "topic": "Surface tension and capillarity",
    "difficulty": "easy",
    "question": "For the same liquid and tube material, a capillary tube of radius r gives rise h. What rise is expected in a tube of radius r/2?",
    "options": [
      "2h",
      "h/2",
      "h",
      "4h"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Capillary rise h is inversely proportional to tube radius. Halving the radius doubles the rise.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-010",
    "section": "Physics",
    "topic": "Calorimetry",
    "difficulty": "medium",
    "question": "Ignoring heat loss, 150 g of water at 70\u00b0C is mixed with 250 g of water at 22\u00b0C. What is the final temperature?",
    "options": [
      "42\u00b0C",
      "40\u00b0C",
      "46\u00b0C",
      "34\u00b0C"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For the same substance, final temperature is the mass-weighted average: (150\u00d770 + 250\u00d722)/400 = 40\u00b0C.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-011",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "easy",
    "question": "An ideal Carnot engine operates between 500 K and 300 K. What is its efficiency?",
    "options": [
      "60%",
      "20%",
      "40%",
      "80%"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Carnot efficiency = 1 \u2212 Tc/Th = 1 \u2212 300/500 = 0.40 = 40%.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-012",
    "section": "Physics",
    "topic": "Kinetic theory of gases",
    "difficulty": "easy",
    "question": "The absolute temperature of an ideal gas is increased from T to 4T. By what factor does its rms molecular speed change?",
    "options": [
      "1/2",
      "16",
      "4",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "rms speed is proportional to \u221aT, so multiplying temperature by 4 multiplies rms speed by 2.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-013",
    "section": "Physics",
    "topic": "Simple harmonic motion",
    "difficulty": "medium",
    "question": "A 0.72 kg mass is attached to a spring of force constant 180 N/m. What is the time period of small oscillations?",
    "options": [
      "0.40 s",
      "0.80 s",
      "0.20 s",
      "0.63 s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "T = 2\u03c0\u221a(m/k) = 2\u03c0\u221a(0.72/180) = 2\u03c0\u221a0.004 \u2248 0.397 s, which is about 0.40 s.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-014",
    "section": "Physics",
    "topic": "Wave motion",
    "difficulty": "easy",
    "question": "A progressive wave has frequency 250 Hz and wavelength 1.2 m. What is its speed?",
    "options": [
      "208 m/s",
      "300 m/s",
      "450 m/s",
      "250 m/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Wave speed v = f\u03bb = 250\u00d71.2 = 300 m/s.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-015",
    "section": "Physics",
    "topic": "Beats",
    "difficulty": "easy",
    "question": "Two tuning forks of frequencies 256 Hz and 260 Hz are sounded together. What beat frequency is heard?",
    "options": [
      "8 Hz",
      "2 Hz",
      "4 Hz",
      "516 Hz"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Beat frequency equals the absolute difference of the frequencies: |260\u2212256| = 4 Hz.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-016",
    "section": "Physics",
    "topic": "Electric field",
    "difficulty": "hard",
    "question": "Charges +16 \u03bcC and +9 \u03bcC are fixed 7 m apart. At what point between them is the net electric field zero?",
    "options": [
      "1 m from the +9 \u03bcC charge",
      "4 m from the +9 \u03bcC charge",
      "3 m from the +16 \u03bcC charge",
      "4 m from the +16 \u03bcC charge"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Between like charges the fields oppose. If x is measured from +16 \u03bcC, 16/x\u00b2 = 9/(7\u2212x)\u00b2. Hence 4/x = 3/(7\u2212x), giving 28\u22124x=3x and x=4 m.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-017",
    "section": "Physics",
    "topic": "Capacitance",
    "difficulty": "medium",
    "question": "Capacitors of 6 \u03bcF and 3 \u03bcF are connected in series across a 12 V source. What charge appears on each capacitor?",
    "options": [
      "24 \u03bcC",
      "12 \u03bcC",
      "72 \u03bcC",
      "36 \u03bcC"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Series capacitance is (6\u00d73)/(6+3) = 2 \u03bcF. The common series charge is CeqV = 2\u00d712 = 24 \u03bcC.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-018",
    "section": "Physics",
    "topic": "Electric dipole",
    "difficulty": "medium",
    "question": "An electric dipole of moment 3\u00d710\u207b\u2078 C\u00b7m is placed in a uniform field 2\u00d710\u2075 N/C at 30\u00b0 to the field. What torque acts on it?",
    "options": [
      "1.5\u00d710\u207b\u00b3 N\u00b7m",
      "3\u00d710\u207b\u00b3 N\u00b7m",
      "3\u00d710\u207b\u00b2 N\u00b7m",
      "6\u00d710\u207b\u00b3 N\u00b7m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "\u03c4 = pE sin\u03b8 = 3\u00d710\u207b\u2078\u00d72\u00d710\u2075\u00d71/2 = 3\u00d710\u207b\u00b3 N\u00b7m.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-019",
    "section": "Physics",
    "topic": "Current electricity",
    "difficulty": "medium",
    "question": "An 8 \u03a9 resistor and a 12 \u03a9 resistor are connected in parallel, and this combination is in series with a 3.2 \u03a9 resistor across 20 V. What is the circuit current?",
    "options": [
      "1.6 A",
      "4.0 A",
      "2.5 A",
      "2.0 A"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "8 \u03a9 || 12 \u03a9 = 4.8 \u03a9. Total resistance = 4.8+3.2 = 8.0 \u03a9, so current = 20/8 = 2.5 A.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-020",
    "section": "Physics",
    "topic": "Potentiometer",
    "difficulty": "medium",
    "question": "On the same potentiometer wire, cells E\u2081 and E\u2082 balance at 60 cm and 75 cm respectively. What is E\u2081/E\u2082?",
    "options": [
      "1.35",
      "1.25",
      "0.60",
      "0.80"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For the same potential gradient, emf is proportional to balance length. Thus E\u2081/E\u2082 = 60/75 = 0.80.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-021",
    "section": "Physics",
    "topic": "Magnetic force on current",
    "difficulty": "easy",
    "question": "A straight 0.30 m conductor carrying 4 A is perpendicular to a uniform 0.50 T magnetic field. What force acts on it?",
    "options": [
      "0.60 N",
      "0.40 N",
      "6.0 N",
      "0.15 N"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "F = BIL sin90\u00b0 = 0.50\u00d74\u00d70.30 = 0.60 N.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-022",
    "section": "Physics",
    "topic": "Electromagnetic induction",
    "difficulty": "medium",
    "question": "A 200-turn coil has magnetic flux per turn decrease uniformly from 5\u00d710\u207b\u2074 Wb to 1\u00d710\u207b\u2074 Wb in 0.020 s. What is the magnitude of the induced emf?",
    "options": [
      "2 V",
      "4 V",
      "0.4 V",
      "8 V"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "|\u03b5| = N|\u0394\u03a6|/\u0394t = 200\u00d74\u00d710\u207b\u2074/0.020 = 4 V.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-023",
    "section": "Physics",
    "topic": "Transformer",
    "difficulty": "medium",
    "question": "An ideal transformer steps 240 V down to 30 V. If the secondary supplies 3.2 A, what current is drawn by the primary?",
    "options": [
      "25.6 A",
      "1.6 A",
      "0.40 A",
      "0.20 A"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For an ideal transformer, VpIp = VsIs. Thus Ip = 30\u00d73.2/240 = 0.40 A.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-024",
    "section": "Physics",
    "topic": "AC resonance",
    "difficulty": "hard",
    "question": "A series LCR circuit has L = 0.20 H and C = 50 \u03bcF. Approximately what is its resonant frequency?",
    "options": [
      "16 Hz",
      "159 Hz",
      "100 Hz",
      "50 Hz"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "f\u2080 = 1/(2\u03c0\u221aLC). Here LC = 1.0\u00d710\u207b\u2075, so f\u2080 \u2248 1/(2\u03c0\u00d70.003162) \u2248 50.3 Hz.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-025",
    "section": "Physics",
    "topic": "Ray optics",
    "difficulty": "medium",
    "question": "A point object in air is 56 cm from a convex spherical refracting surface of radius 16 cm. The second medium has refractive index 1.40. Where is the image formed, measured from the refracting surface?",
    "options": [
      "196 cm in the second medium",
      "98 cm in the second medium",
      "112 cm in the second medium",
      "196 cm in air"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For refraction at a spherical surface, n\u2082/v \u2212 n\u2081/u = (n\u2082\u2212n\u2081)/R. With n\u2081=1, n\u2082=1.40, u=\u221256 cm and R=+16 cm: 1.40/v + 1/56 = 0.40/16 = 1/40. Thus 1.40/v = 1/140, so v = 196 cm. The positive sign places the real image in the second medium.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-026",
    "section": "Physics",
    "topic": "Wave optics",
    "difficulty": "medium",
    "question": "In Young's double-slit experiment, \u03bb = 520 nm, screen distance D = 1.8 m and slit separation d = 0.40 mm. What is the fringe width?",
    "options": [
      "1.80 mm",
      "2.34 mm",
      "4.68 mm",
      "1.17 mm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "\u03b2 = \u03bbD/d = 520\u00d710\u207b\u2079\u00d71.8/(0.40\u00d710\u207b\u00b3) = 2.34\u00d710\u207b\u00b3 m = 2.34 mm.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-027",
    "section": "Physics",
    "topic": "Optical instruments and defects",
    "difficulty": "easy",
    "question": "A myopic eye has a far point at 2.0 m. What power of lens is needed to see very distant objects clearly?",
    "options": [
      "+2.0 D",
      "-2.0 D",
      "-0.50 D",
      "+0.50 D"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a distant object, the correcting lens must form a virtual image at the far point: f = \u22122 m, so P = 1/f = \u22120.50 D.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-028",
    "section": "Physics",
    "topic": "Photoelectric effect",
    "difficulty": "medium",
    "question": "Light of photon energy 4.8 eV falls on a metal of work function 2.3 eV. What is the maximum kinetic energy of emitted electrons?",
    "options": [
      "4.8 eV",
      "7.1 eV",
      "2.3 eV",
      "2.5 eV"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Einstein's photoelectric equation gives Kmax = h\u03bd \u2212 \u03c6 = 4.8 \u2212 2.3 = 2.5 eV.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-029",
    "section": "Physics",
    "topic": "Matter waves",
    "difficulty": "easy",
    "question": "If the momentum of a particle is doubled, how does its de Broglie wavelength change?",
    "options": [
      "It becomes half",
      "It doubles",
      "It is unchanged",
      "It becomes four times"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "de Broglie wavelength \u03bb = h/p. Doubling p halves \u03bb.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "tjee-2026-ph-030",
    "section": "Physics",
    "topic": "Semiconductor logic",
    "difficulty": "easy",
    "question": "What is the output of a NAND gate when both inputs are 1?",
    "options": [
      "1",
      "0",
      "It alternates between 0 and 1",
      "It depends on supply frequency"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "AND gives 1 only when both inputs are 1; NAND is its negation, so the output is 0.",
    "source": {
      "kind": "original",
      "reference": "TJEE 2026 current official syllabus and question-pattern control",
      "url": "https://tbjee.tripura.gov.in/sites/default/files/2026-01/Sylabus2026.pdf",
      "checkedOn": "2026-08-29"
    }
  }
];
