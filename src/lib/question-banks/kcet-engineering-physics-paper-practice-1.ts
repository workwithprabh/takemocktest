import type { Question } from '../questions';

export const KCET_ENGINEERING_PHYSICS_PAPER_PRACTICE_1: Question[] = [
  {
    "id": "kcet-2026-physics-paper-practice-01-001",
    "section": "Physics",
    "topic": "Units and Measurements",
    "difficulty": "easy",
    "question": "Which pair has the same dimensions?",
    "options": [
      "Torque and angular momentum",
      "Pressure and energy density",
      "Force and power",
      "Momentum and energy"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Pressure is force/area = M L^-1 T^-2, and energy density is energy/volume = M L^-1 T^-2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-002",
    "section": "Physics",
    "topic": "Units and Measurements",
    "difficulty": "medium",
    "question": "A time period T is calculated from T=2pi sqrt(l/g). If l has 2% uncertainty and g has 1% uncertainty, the maximum percentage uncertainty in T is",
    "options": [
      "1.5%",
      "2%",
      "3%",
      "0.5%"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For T proportional to l^(1/2)g^(-1/2), maximum percentage uncertainty is 0.5(2%)+0.5(1%)=1.5%.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-003",
    "section": "Physics",
    "topic": "Motion in a Straight Line",
    "difficulty": "medium",
    "question": "A train moving at 20 m/s is uniformly retarded at 2 m/s^2. How far does it travel before stopping?",
    "options": [
      "50 m",
      "100 m",
      "200 m",
      "400 m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using v^2=u^2+2as: 0=400-4s, so s=100 m.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-004",
    "section": "Physics",
    "topic": "Motion in a Plane",
    "difficulty": "medium",
    "question": "A projectile is fired horizontally at 15 m/s from a cliff 20 m high. Take g=10 m/s^2. How far from the foot of the cliff does it land?",
    "options": [
      "15 m",
      "20 m",
      "45 m",
      "30 m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Time to fall is sqrt(2h/g)=sqrt(4)=2 s. Horizontal range=15x2=30 m.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-005",
    "section": "Physics",
    "topic": "Motion in a Plane",
    "difficulty": "hard",
    "question": "A boat can move at 5 m/s relative to still water. It crosses a river flowing at 3 m/s. If the boat is headed perpendicular to the bank, what is the magnitude of its velocity relative to the ground?",
    "options": [
      "8 m/s",
      "2 m/s",
      "sqrt(34) m/s",
      "4 m/s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Ground velocity is the vector sum of perpendicular components 5 and 3 m/s, giving sqrt(25+9)=sqrt(34) m/s.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-006",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "easy",
    "question": "A 4 kg body experiences a net force of 12 N. Its acceleration is",
    "options": [
      "48 m/s^2",
      "4 m/s^2",
      "3 m/s^2",
      "2 m/s^2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Newton's second law gives a=F/m=12/4=3 m/s^2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-007",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "medium",
    "question": "A 10 kg block is on a horizontal surface with coefficient of static friction 0.4. Take g=10 m/s^2. The maximum static friction is",
    "options": [
      "40 N",
      "100 N",
      "4 N",
      "25 N"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Maximum static friction is mu_s N=0.4 x 10 x 10=40 N.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-008",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "hard",
    "question": "A lift accelerates upward at 2 m/s^2. A person of mass 60 kg stands on a scale inside it. Take g=10 m/s^2. What does the scale read?",
    "options": [
      "600 N",
      "840 N",
      "720 N",
      "480 N"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Normal reaction N=m(g+a)=60x12=720 N.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-009",
    "section": "Physics",
    "topic": "Work, Energy and Power",
    "difficulty": "medium",
    "question": "A 10 N force acts on a body through 4 m at an angle of 60 degrees to the displacement. What work is done?",
    "options": [
      "40 J",
      "20 J",
      "10 J",
      "80 J"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "W=Fs cos60=10x4x0.5=20 J.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-010",
    "section": "Physics",
    "topic": "Work, Energy and Power",
    "difficulty": "medium",
    "question": "A motor does 9000 J of work in 30 s. Its average power is",
    "options": [
      "270 W",
      "300 W",
      "30 W",
      "3000 W"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Power=W/t=9000/30=300 W.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-011",
    "section": "Physics",
    "topic": "System of Particles and Rotational Motion",
    "difficulty": "medium",
    "question": "A force of 10 N acts tangentially at the rim of a wheel of radius 0.4 m. What torque does it produce about the centre?",
    "options": [
      "4 N m",
      "10 N m",
      "25 N m",
      "2.5 N m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Torque=rF=0.4x10=4 N m for a tangential force.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-012",
    "section": "Physics",
    "topic": "System of Particles and Rotational Motion",
    "difficulty": "hard",
    "question": "A ring and a solid disc have the same mass and radius and roll without slipping with the same centre-of-mass speed. Which has greater total kinetic energy?",
    "options": [
      "The disc",
      "Both are equal",
      "The ring",
      "It depends only on radius"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Total K=(1/2)Mv^2+(1/2)I(v^2/R^2). A ring has I=MR^2 while a disc has I=MR^2/2, so the ring has greater total kinetic energy.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-013",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "easy",
    "question": "The escape speed from a planet of mass M and radius R is",
    "options": [
      "sqrt(GM/R)",
      "GM/R",
      "2GM/R",
      "sqrt(2GM/R)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Setting total mechanical energy to zero at infinity gives ve=sqrt(2GM/R).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-014",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "If Earth's mass stayed the same but its radius became half, the surface value of g would become",
    "options": [
      "g/2",
      "4g",
      "g/4",
      "2g"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "g=GM/R^2, so halving R multiplies g by 4.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-015",
    "section": "Physics",
    "topic": "Mechanical Properties of Solids",
    "difficulty": "medium",
    "question": "A material has stress 8 x 10^7 Pa under a strain of 4 x 10^-4. Its Young modulus is",
    "options": [
      "2 x 10^10 Pa",
      "8 x 10^11 Pa",
      "2 x 10^11 Pa",
      "3.2 x 10^4 Pa"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Y=stress/strain=(8x10^7)/(4x10^-4)=2x10^11 Pa.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-016",
    "section": "Physics",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "medium",
    "question": "A liquid of density 800 kg/m^3 exerts what gauge pressure at a depth of 5 m? Take g=10 m/s^2.",
    "options": [
      "4 x 10^4 Pa",
      "8 x 10^4 Pa",
      "4 x 10^3 Pa",
      "8 x 10^3 Pa"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Gauge pressure rho gh=800x10x5=4x10^4 Pa.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-017",
    "section": "Physics",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "hard",
    "question": "For incompressible steady flow along a horizontal streamline, if the speed increases, the pressure generally",
    "options": [
      "decreases",
      "remains unchanged",
      "increases",
      "becomes zero"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Bernoulli equation P+(1/2)rho v^2=constant at fixed height, so higher speed corresponds to lower pressure.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-018",
    "section": "Physics",
    "topic": "Thermal Properties of Matter",
    "difficulty": "medium",
    "question": "Two bodies at 80 deg C and 20 deg C are placed in thermal contact in an isolated system. At equilibrium, which statement must be true?",
    "options": [
      "They have the same heat capacity",
      "Their temperatures become 50 deg C in every case",
      "They have the same temperature",
      "They have the same internal energy"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Thermal equilibrium requires equal final temperatures, but the common value depends on heat capacities and masses.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-019",
    "section": "Physics",
    "topic": "Thermal Properties of Matter",
    "difficulty": "medium",
    "question": "A 200 g metal piece of specific heat 500 J kg^-1 K^-1 cools by 30 K. How much heat does it release?",
    "options": [
      "1500 J",
      "6000 J",
      "300 J",
      "3000 J"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Q=mc Delta T=0.2x500x30=3000 J.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-020",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "easy",
    "question": "In an isochoric process for an ideal gas, the work done by the gas is",
    "options": [
      "positive and equal to P Delta V",
      "equal to the heat supplied",
      "zero",
      "negative"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At constant volume, Delta V=0, so W=integral P dV=0.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-021",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "An ideal gas expands isobarically at 2 x 10^5 Pa from 2 L to 5 L. What work does it do?",
    "options": [
      "60 J",
      "1400 J",
      "1000 J",
      "600 J"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "W=P Delta V=2x10^5 x 3x10^-3=600 J.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-022",
    "section": "Physics",
    "topic": "Kinetic Theory",
    "difficulty": "hard",
    "question": "At the same temperature, hydrogen molecules and oxygen molecules have rms speeds v_H and v_O. The ratio v_H/v_O is approximately",
    "options": [
      "16",
      "4",
      "2",
      "1/4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "v_rms is proportional to 1/sqrt(M). With molar masses 2 and 32, v_H/v_O=sqrt(32/2)=4.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-023",
    "section": "Physics",
    "topic": "Oscillations",
    "difficulty": "easy",
    "question": "The time period of a simple pendulum of length l for small oscillations is",
    "options": [
      "sqrt(l/g)",
      "pi l/g",
      "2pi sqrt(l/g)",
      "2pi sqrt(g/l)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For small angular displacement, T=2pi sqrt(l/g).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-024",
    "section": "Physics",
    "topic": "Oscillations",
    "difficulty": "medium",
    "question": "A spring-mass oscillator has mass m and spring constant k. If the mass is increased to 4m, its time period becomes",
    "options": [
      "half",
      "4 times",
      "2 times",
      "unchanged"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "T=2pi sqrt(m/k), so replacing m by 4m doubles T.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-025",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "medium",
    "question": "A stretched string fixed at both ends has length 1.2 m. If wave speed on it is 240 m/s, what is its fundamental frequency?",
    "options": [
      "50 Hz",
      "100 Hz",
      "200 Hz",
      "288 Hz"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For the fundamental, lambda=2L=2.4 m, so f=v/lambda=240/2.4=100 Hz.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-026",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "medium",
    "question": "An open organ pipe and a closed organ pipe of the same length vibrate in their fundamental modes. The frequency ratio f_open:f_closed is",
    "options": [
      "2:1",
      "4:1",
      "1:2",
      "1:1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For length L, fopen=v/(2L) and fclosed=v/(4L), giving 2:1.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-027",
    "section": "Physics",
    "topic": "Electric Charges and Fields",
    "difficulty": "medium",
    "question": "Two equal positive charges are fixed symmetrically at x=+a and x=-a. What is the electric field at the origin?",
    "options": [
      "infinite",
      "towards +x",
      "towards -x",
      "zero"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The fields due to the two equal charges at the midpoint are equal and opposite.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-028",
    "section": "Physics",
    "topic": "Electric Charges and Fields",
    "difficulty": "medium",
    "question": "An electric dipole of moment p is placed in a uniform electric field E at angle theta. The magnitude of torque on it is",
    "options": [
      "pE cos theta",
      "pE tan theta",
      "pE sin theta",
      "pE"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Dipole torque magnitude is tau=pE sin theta.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-029",
    "section": "Physics",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "easy",
    "question": "Electric potential due to a point charge q at distance r in vacuum is",
    "options": [
      "qr/k",
      "kq/r^2",
      "kr/q",
      "kq/r"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The electrostatic potential of a point charge is V=kq/r.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-030",
    "section": "Physics",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "medium",
    "question": "Capacitors 2 microF and 3 microF are connected in parallel. Their equivalent capacitance is",
    "options": [
      "0.5 microF",
      "5 microF",
      "6 microF",
      "1.2 microF"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Parallel capacitances add: Ceq=2+3=5 microF.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-031",
    "section": "Physics",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "hard",
    "question": "A charged isolated capacitor is disconnected from its battery. A dielectric slab of dielectric constant K is then inserted fully between the plates. Its stored electrostatic energy becomes",
    "options": [
      "unchanged",
      "1/K times the original",
      "K times the original",
      "K^2 times the original"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For an isolated capacitor Q is fixed. Since C becomes KC, U=Q^2/(2C) becomes U/K.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-032",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "A conductor carries 3 C of charge through a cross-section in 0.5 s. The current is",
    "options": [
      "6 A",
      "3 A",
      "12 A",
      "1.5 A"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "I=Q/t=3/0.5=6 A.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-033",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "A 10 ohm and a 20 ohm resistor are connected in series across 6 V. What current flows?",
    "options": [
      "0.6 A",
      "0.3 A",
      "2 A",
      "0.2 A"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Series resistance is 30 ohm, so I=V/R=6/30=0.2 A.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-034",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "hard",
    "question": "A Wheatstone bridge is balanced with arm resistances P=2 ohm, Q=4 ohm, R=3 ohm and S unknown. What is S?",
    "options": [
      "8 ohm",
      "6 ohm",
      "1.5 ohm",
      "4 ohm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At balance P/Q=R/S. Thus 2/4=3/S, giving S=6 ohm.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-035",
    "section": "Physics",
    "topic": "Moving Charges and Magnetism",
    "difficulty": "easy",
    "question": "The magnetic force on a stationary electric charge in a magnetic field is",
    "options": [
      "infinite",
      "qB",
      "qvB",
      "zero"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Magnetic force is q(v x B); for v=0 it is zero.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-036",
    "section": "Physics",
    "topic": "Moving Charges and Magnetism",
    "difficulty": "medium",
    "question": "A wire of length 0.5 m carrying 4 A is perpendicular to a 0.2 T magnetic field. What force acts on it?",
    "options": [
      "0.4 N",
      "0.8 N",
      "4 N",
      "0.04 N"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "F=BIL=0.2x4x0.5=0.4 N.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-037",
    "section": "Physics",
    "topic": "Magnetism and Matter",
    "difficulty": "medium",
    "question": "A bar magnet of magnetic moment M is placed in uniform field B parallel to the field. Its potential energy is",
    "options": [
      "-MB",
      "+MB",
      "MB/2",
      "zero"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Dipole potential energy U=-M B cos theta. For theta=0, U=-MB.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-038",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "medium",
    "question": "A conducting rod of length 0.5 m moves at 4 m/s perpendicular to a 0.3 T magnetic field and to its own length. The motional emf is",
    "options": [
      "0.15 V",
      "1.2 V",
      "0.6 V",
      "6 V"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Motional emf Blv=0.3x0.5x4=0.6 V.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-039",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "hard",
    "question": "A coil has self-inductance 2 H. If current changes at 3 A/s, the magnitude of induced emf is",
    "options": [
      "3 V",
      "6 V",
      "1.5 V",
      "9 V"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Self-induced emf magnitude L |di/dt|=2x3=6 V.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-040",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "medium",
    "question": "A pure resistor of 50 ohm is connected to 100 V rms AC. The rms current is",
    "options": [
      "50 A",
      "0.5 A",
      "2 A",
      "5 A"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a pure resistor, Irms=Vrms/R=100/50=2 A.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-041",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "medium",
    "question": "In a pure inductive AC circuit, current",
    "options": [
      "is in phase with voltage",
      "lags voltage by 180 degrees",
      "leads voltage by 90 degrees",
      "lags voltage by 90 degrees"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For an ideal inductor, current lags voltage by pi/2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-042",
    "section": "Physics",
    "topic": "Electromagnetic Waves",
    "difficulty": "easy",
    "question": "Electromagnetic waves in vacuum travel with speed",
    "options": [
      "3 x 10^6 m/s",
      "3 x 10^8 m/s",
      "3 x 10^10 m/s",
      "depends on frequency"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "All electromagnetic waves in vacuum travel at c=3x10^8 m/s.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-043",
    "section": "Physics",
    "topic": "Ray Optics and Optical Instruments",
    "difficulty": "medium",
    "question": "A spherical mirror has radius of curvature 40 cm. Its focal length has magnitude",
    "options": [
      "40 cm",
      "20 cm",
      "10 cm",
      "80 cm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a spherical mirror, f=R/2, so |f|=20 cm.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-044",
    "section": "Physics",
    "topic": "Ray Optics and Optical Instruments",
    "difficulty": "medium",
    "question": "A thin lens has power +5 D. Its focal length is",
    "options": [
      "5 m",
      "0.05 m",
      "-0.20 m",
      "0.20 m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Power P=1/f in metres, so f=1/5=0.20 m; positive power means converging lens.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-045",
    "section": "Physics",
    "topic": "Ray Optics and Optical Instruments",
    "difficulty": "hard",
    "question": "An object in air is viewed normally through a glass slab of refractive index 1.5. If its real depth below the top surface is 12 cm, its apparent depth is",
    "options": [
      "8 cm",
      "18 cm",
      "12 cm",
      "6 cm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For normal viewing from air, apparent depth=real depth/n=12/1.5=8 cm.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-046",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "medium",
    "question": "In single-slit diffraction, increasing the slit width while wavelength and screen distance stay fixed makes the central maximum",
    "options": [
      "wider",
      "narrower",
      "unchanged",
      "disappear"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Angular width of the central maximum is proportional to lambda/a, so increasing slit width a narrows it.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-047",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "hard",
    "question": "Two coherent waves of equal intensity I interfere with phase difference 120 degrees. The resultant intensity is",
    "options": [
      "I",
      "2I",
      "4I",
      "3I"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Resultant intensity=I+I+2I cos120=2I-I=I.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-048",
    "section": "Physics",
    "topic": "Dual Nature of Radiation and Matter",
    "difficulty": "easy",
    "question": "The photoelectric effect supports the particle nature of",
    "options": [
      "sound",
      "matter waves only",
      "electrons only",
      "light"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The photoelectric effect is explained by photons, demonstrating the particle aspect of light.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-049",
    "section": "Physics",
    "topic": "Dual Nature of Radiation and Matter",
    "difficulty": "medium",
    "question": "The stopping potential in a photoelectric experiment is 2 V. The maximum kinetic energy of photoelectrons is",
    "options": [
      "2 eV",
      "4 eV",
      "2 J",
      "1 eV"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Kmax=eV0; when expressed in electronvolt, a 2 V stopping potential corresponds to 2 eV.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-050",
    "section": "Physics",
    "topic": "Atoms",
    "difficulty": "medium",
    "question": "The energy of the electron in the n=2 state of hydrogen is",
    "options": [
      "+3.4 eV",
      "-6.8 eV",
      "-13.6 eV",
      "-3.4 eV"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Hydrogen level energy En=-13.6/n^2 eV, so E2=-13.6/4=-3.4 eV.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-051",
    "section": "Physics",
    "topic": "Nuclei",
    "difficulty": "easy",
    "question": "An alpha particle is a nucleus of",
    "options": [
      "carbon-12",
      "hydrogen-1",
      "helium-4",
      "deuterium"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "An alpha particle contains two protons and two neutrons, the nucleus of helium-4.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-052",
    "section": "Physics",
    "topic": "Nuclei",
    "difficulty": "medium",
    "question": "A radioactive sample initially has N0 nuclei. After two half-lives, the number of undecayed nuclei is",
    "options": [
      "N0/3",
      "N0/8",
      "N0/4",
      "N0/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Each half-life halves the population, so after two half-lives N=N0(1/2)^2=N0/4.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-053",
    "section": "Physics",
    "topic": "Nuclei",
    "difficulty": "hard",
    "question": "In beta-minus decay, the atomic number of the daughter nucleus is",
    "options": [
      "one less than that of the parent",
      "one greater than that of the parent",
      "unchanged",
      "two greater than that of the parent"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "In beta-minus decay a neutron converts to a proton, increasing atomic number by 1 while mass number stays unchanged.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-054",
    "section": "Physics",
    "topic": "Semiconductor Electronics",
    "difficulty": "medium",
    "question": "Doping pure silicon with a pentavalent impurity produces",
    "options": [
      "n-type semiconductor",
      "insulator",
      "p-type semiconductor",
      "intrinsic semiconductor"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Pentavalent dopants provide extra electrons, making electrons the majority carriers in n-type material.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-055",
    "section": "Physics",
    "topic": "Semiconductor Electronics",
    "difficulty": "medium",
    "question": "A p-n junction diode conducts strongly when it is",
    "options": [
      "forward biased",
      "cooled to absolute zero",
      "unbiased only",
      "reverse biased well below breakdown"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Forward bias reduces the barrier and allows substantial majority-carrier current.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-056",
    "section": "Physics",
    "topic": "Semiconductor Electronics",
    "difficulty": "medium",
    "question": "A p-n junction diode can act as a rectifier mainly because it",
    "options": [
      "has identical resistance in both directions",
      "stores charge like an ideal capacitor only",
      "conducts much more readily in one direction than the other",
      "amplifies every applied voltage"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A diode has strongly asymmetric current-voltage behaviour, conducting readily in forward bias and only weakly in reverse bias, which enables rectification.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-057",
    "section": "Physics",
    "topic": "Motion in a Straight Line",
    "difficulty": "medium",
    "question": "A particle moves 30 m east and then 10 m west along a straight line. Its displacement magnitude is",
    "options": [
      "40 m",
      "30 m",
      "10 m",
      "20 m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Net displacement is 30-10=20 m east, so its magnitude is 20 m.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-058",
    "section": "Physics",
    "topic": "Work, Energy and Power",
    "difficulty": "hard",
    "question": "A body is projected vertically upward with speed 20 m/s. Neglect air resistance and take g=10 m/s^2. At what height is its kinetic energy equal to its potential energy, taking launch point as zero potential?",
    "options": [
      "10 m",
      "15 m",
      "20 m",
      "5 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Initial energy is (1/2)mu^2=200m. When K=U, each is 100m, so mgh=100m and h=10 m.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-059",
    "section": "Physics",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "medium",
    "question": "The work done by the electrostatic field in moving a charge around any closed path is",
    "options": [
      "always negative",
      "zero",
      "always positive",
      "equal to q times path length"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Electrostatic force is conservative, so the line integral around a closed path is zero.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-physics-paper-practice-01-060",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "medium",
    "question": "Polarisation of light demonstrates that light waves are",
    "options": [
      "longitudinal",
      "stationary only",
      "mechanical only",
      "transverse"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Only transverse waves can be plane-polarised, so light polarisation demonstrates transverse character.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
];
