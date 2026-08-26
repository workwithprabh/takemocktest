import type { Question } from '../questions';

export const SAEEE_2026_PHYSICS_1: Question[] = [
  {
    "id": "saeee-2026-ph-001",
    "section": "Physics",
    "topic": "Units, Dimensions and Errors",
    "difficulty": "medium",
    "question": "A density is calculated as rho = m/(4pi r^3/3). If the maximum percentage errors in m and r are 2% and 1% respectively, what is the maximum percentage error in rho?",
    "options": [
      "1%",
      "5%",
      "3%",
      "4%"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For rho proportional to m r^(-3), maximum fractional error is 2% + 3(1%) = 5%.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ph-002",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "easy",
    "question": "A particle moves along a straight line with velocity v = 4t - 2 m/s. What is its displacement from t=0 to t=3 s?",
    "options": [
      "12 m",
      "9 m",
      "15 m",
      "18 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Displacement = integral_0^3(4t-2)dt = [2t^2-2t]_0^3=12 m.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ph-003",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "easy",
    "question": "A 4 kg block on a horizontal table is connected by a light string over a smooth pulley to a hanging 1 kg block. The coefficient of kinetic friction between the 4 kg block and the table is 0.10. Take g=10 m/s^2. What is the acceleration of the system?",
    "options": [
      "0.8 m/s^2",
      "2.0 m/s^2",
      "1.5 m/s^2",
      "1.2 m/s^2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Friction on the 4 kg block is 0.10*4*10=4 N. The driving force is 10-4=6 N on total mass 5 kg, so a=6/5=1.2 m/s^2.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ph-004",
    "section": "Physics",
    "topic": "Work, Energy and Power",
    "difficulty": "hard",
    "question": "A 2 kg particle starts from rest and moves along the x-axis under a force F=4x N. What is its speed after moving from x=0 to x=2 m?",
    "options": [
      "2sqrt(2) m/s",
      "2 m/s",
      "4 m/s",
      "4sqrt(2) m/s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Work = integral_0^2 4x dx=8 J. By work-energy, (1/2)(2)v^2=8, so v=2sqrt2 m/s.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ph-005",
    "section": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "hard",
    "question": "Two coaxial flywheels have moments of inertia 3 kg m^2 and 2 kg m^2. The first rotates at 10 rad/s and the second is initially at rest. They are coupled and rotate together with no external torque. What is their common angular speed?",
    "options": [
      "4 rad/s",
      "5 rad/s",
      "6 rad/s",
      "8 rad/s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Angular momentum is conserved: (3)(10)+(2)(0)=(3+2)omega. Thus omega=30/5=6 rad/s.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ph-006",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "easy",
    "question": "At the same distance from a planet, the escape speed is how many times the circular orbital speed?",
    "options": [
      "1/2",
      "sqrt(2)",
      "2",
      "2sqrt(2)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "v_e=sqrt(2GM/r) and v_o=sqrt(GM/r), so v_e/v_o=sqrt2.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ph-007",
    "section": "Physics",
    "topic": "Properties of Solids and Liquids",
    "difficulty": "easy",
    "question": "Water flows out horizontally through a small hole 1.25 m below the free surface of a large tank. Take g=10 m/s^2. What is the efflux speed?",
    "options": [
      "2.5 m/s",
      "10 m/s",
      "5 m/s",
      "12.5 m/s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Torricelli speed v=sqrt(2gh)=sqrt(2\u00d710\u00d71.25)=5 m/s.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ph-008",
    "section": "Physics",
    "topic": "Thermal Physics and Kinetic Theory",
    "difficulty": "medium",
    "question": "Two moles of a monoatomic ideal gas are heated by 30 K at constant volume. How much heat is supplied?",
    "options": [
      "90R J",
      "30R J",
      "60R J",
      "120R J"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At constant volume Q=nC_v Delta T=2\u00d7(3R/2)\u00d730=90R J.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ph-009",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "easy",
    "question": "During one complete thermodynamic cycle, a gas absorbs 350 J of heat and releases 210 J of heat. What is the net work done by the gas in the cycle?",
    "options": [
      "560 J",
      "-140 J",
      "140 J",
      "210 J"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Over a complete cycle, Delta U=0. The net heat absorbed is 350-210=140 J, so by the first law the net work done by the gas is 140 J.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ph-010",
    "section": "Physics",
    "topic": "Oscillations and Waves",
    "difficulty": "medium",
    "question": "A sinusoidal transverse wave on a string is described by y = (3.0 mm) sin(24\u03c0t - 6\u03c0x), where x is in metres and t is in seconds. What is the ratio of the maximum transverse speed of a string element to the speed at which the wave propagates?",
    "options": [
      "0.0180",
      "0.314",
      "0.0565",
      "17.7"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Here A = 0.003 m, \u03c9 = 24\u03c0 rad/s and k = 6\u03c0 rad/m. The maximum transverse speed is A\u03c9, while the wave speed is \u03c9/k. Their ratio is Ak = 0.003(6\u03c0) = 0.018\u03c0 \u2248 0.0565.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ph-011",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "hard",
    "question": "Point charges +q, +q and -q are fixed at (a,0), (-a,0) and (0,a) respectively. What is the electric potential at the point (0,-a)?",
    "options": [
      "(kq/a)(sqrt(2)+1/2)",
      "(kq/a)(sqrt(2)-1/2)",
      "kq/(2a)",
      "-kq/(sqrt(2)a)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The two +q charges are each at distance sqrt(2)a, while -q is at distance 2a. Thus V=(kq/a)(2/sqrt2-1/2)=(kq/a)(sqrt2-1/2).",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ph-012",
    "section": "Physics",
    "topic": "Electrostatics and Capacitance",
    "difficulty": "medium",
    "question": "Point charges +4q and -q are fixed on the x-axis at x=0 and x=3a respectively. At what position between them is the electric potential zero?",
    "options": [
      "3a/5",
      "6a/5",
      "9a/5",
      "12a/5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For 0<x<3a, V=k(4q/x-q/(3a-x)). Setting V=0 gives 4/x=1/(3a-x), so 12a-4x=x and x=12a/5.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ph-013",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "A wire of cross-sectional area 0.80 mm^2 carries a current of 2.72 A. If the free-electron number density is 8.5x10^28 m^-3, take e=1.6x10^-19 C. What is the electron drift speed?",
    "options": [
      "1.0x10^-4 m/s",
      "1.5x10^-4 m/s",
      "2.0x10^-4 m/s",
      "2.5x10^-4 m/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using I=neAvd with A=0.80x10^-6 m^2, vd=2.72/[(8.5x10^28)(1.6x10^-19)(0.80x10^-6)]=2.5x10^-4 m/s.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ph-014",
    "section": "Physics",
    "topic": "Magnetic Effects of Current and Magnetism",
    "difficulty": "medium",
    "question": "A charged particle moves with velocity perpendicular to both a 3.0x10^4 V/m electric field and a 0.20 T magnetic field. Its direction is such that the electric and magnetic forces oppose, and it passes undeflected. What is its speed?",
    "options": [
      "6.0x10^3 m/s",
      "1.5x10^5 m/s",
      "6.0x10^4 m/s",
      "1.5x10^6 m/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "In the stated velocity-selector geometry, the opposing force magnitudes satisfy qE=qvB. Hence v=E/B=(3.0x10^4)/0.20=1.5x10^5 m/s.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ph-015",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "medium",
    "question": "A 150-turn coil of resistance 3.0 ohm is in a magnetic field. The magnetic flux through each turn decreases from 5.0 mWb to 1.0 mWb. What total charge passes through the coil during the change?",
    "options": [
      "0.05 C",
      "0.10 C",
      "0.40 C",
      "0.20 C"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The total induced charge is Q=N|Delta Phi|/R=150(4.0x10^-3)/3.0=0.20 C.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ph-016",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "easy",
    "question": "A pure inductor of inductance 0.20 H is connected to a 50 Hz AC source. Take pi=3.14. What is its inductive reactance?",
    "options": [
      "62.8 ohm",
      "31.4 ohm",
      "15.7 ohm",
      "125.6 ohm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "X_L=2*pi*f*L=2*3.14*50*0.20=62.8 ohm.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ph-017",
    "section": "Physics",
    "topic": "Optics",
    "difficulty": "medium",
    "question": "A mark at the bottom of a transparent liquid layer 28 cm deep is viewed normally from air. If the refractive index of the liquid is 7/5, what is the apparent depth of the mark?",
    "options": [
      "14 cm",
      "20 cm",
      "24 cm",
      "28 cm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For normal viewing from air, apparent depth = real depth/refractive index = 28/(7/5)=20 cm.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ph-018",
    "section": "Physics",
    "topic": "Dual Nature of Matter and Radiation",
    "difficulty": "medium",
    "question": "In a photoelectric experiment, light of frequency f gives stopping potential V, while light of frequency 2f gives stopping potential 3V for the same metal. What is the threshold frequency of the metal?",
    "options": [
      "f/4",
      "f/3",
      "2f/3",
      "f/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Einstein equations give hf-phi=eV and 2hf-phi=3eV. Subtraction gives hf=2eV, so phi=eV=hf/2. Therefore f_0=phi/h=f/2.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ph-019",
    "section": "Physics",
    "topic": "Atoms and Nuclei",
    "difficulty": "medium",
    "question": "A nucleus has a mass defect of 0.030 u. Using 1 u c^2 = 931.5 MeV, what is its binding energy?",
    "options": [
      "13.97 MeV",
      "18.63 MeV",
      "27.95 MeV",
      "55.89 MeV"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Binding energy=Delta m c^2=0.030*931.5=27.945 MeV, approximately 27.95 MeV.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "saeee-2026-ph-020",
    "section": "Physics",
    "topic": "Electronic Devices",
    "difficulty": "medium",
    "question": "A full-wave rectifier is supplied by a 50 Hz sinusoidal source. What is the principal ripple frequency in its output?",
    "options": [
      "100 Hz",
      "25 Hz",
      "50 Hz",
      "200 Hz"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Full-wave rectification produces two output pulses per input cycle, so the ripple frequency is 2f=100 Hz.",
    "source": {
      "kind": "original",
      "reference": "SAEEE 2026 official PCM syllabus and sample-question framework",
      "url": "https://saeee2026.sathyabama.ac.in/",
      "checkedOn": "2026-08-24"
    }
  }
];
