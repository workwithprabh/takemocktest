import type { Question } from '../questions';

export const KCET_ENGINEERING_FULL_MOCK_2: Question[] = [
  {
    "id": "kcet-2026-engineering-full-mock-02-001",
    "section": "Physics",
    "topic": "Units and Measurements",
    "difficulty": "easy",
    "question": "Which of the following has the same dimensional formula as power?",
    "options": [
      "Energy divided by time",
      "Force multiplied by time",
      "Mass multiplied by velocity",
      "Energy multiplied by time"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Power is the rate of doing work, so its dimensional formula equals energy divided by time.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-002",
    "section": "Physics",
    "topic": "Units and Measurements",
    "difficulty": "medium",
    "question": "A cube has its edge measured as 5.0 cm with an uncertainty of 0.1 cm. What is the percentage uncertainty in its calculated volume?",
    "options": [
      "2%",
      "6%",
      "0.6%",
      "3%"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Volume V=L^3, so percentage uncertainty in V is 3 times that in L: 3 x (0.1/5.0) x100 = 6%.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-003",
    "section": "Physics",
    "topic": "Motion in a Straight Line",
    "difficulty": "easy",
    "question": "A car decelerates uniformly from 20 m/s to rest in 4 s. What is the magnitude of its deceleration?",
    "options": [
      "4 m/s^2",
      "10 m/s^2",
      "5 m/s^2",
      "20 m/s^2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Deceleration a=(v-u)/t=(0-20)/4, magnitude 5 m/s^2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-004",
    "section": "Physics",
    "topic": "Motion in a Straight Line",
    "difficulty": "medium",
    "question": "A ball is dropped from rest and falls freely for 3 s. Taking g=10 m/s^2, what is its speed just before landing?",
    "options": [
      "15 m/s",
      "45 m/s",
      "10 m/s",
      "30 m/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For free fall from rest, v=gt=10x3=30 m/s.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-005",
    "section": "Physics",
    "topic": "Motion in a Plane",
    "difficulty": "medium",
    "question": "Rain falls vertically downward at 10 m/s. A cyclist rides horizontally at 10 m/s. At what angle to the vertical should the cyclist tilt the umbrella to avoid getting wet?",
    "options": [
      "45 degrees",
      "30 degrees",
      "60 degrees",
      "90 degrees"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The rain's velocity relative to the cyclist has equal vertical and horizontal components, so tan(theta)=10/10=1, giving theta=45 degrees.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-006",
    "section": "Physics",
    "topic": "Motion in a Plane",
    "difficulty": "medium",
    "question": "A projectile is launched at 30 m/s at 30 degrees above the horizontal on level ground. Taking g=10 m/s^2, what is the maximum height reached?",
    "options": [
      "22.5 m",
      "11.25 m",
      "45 m",
      "5.625 m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Maximum height H=(v sin(theta))^2/(2g)=(30x0.5)^2/20=225/20=11.25 m.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-007",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "medium",
    "question": "A 4 kg block on a horizontal surface is pulled by a horizontal force of 24 N. If the coefficient of kinetic friction is 0.3 and g=10 m/s^2, what is the block's acceleration?",
    "options": [
      "6 m/s^2",
      "2.4 m/s^2",
      "3 m/s^2",
      "0.9 m/s^2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Friction force=0.3x4x10=12 N. Net force=24-12=12 N, so a=12/4=3 m/s^2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-008",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "hard",
    "question": "Blocks of mass 3 kg and 2 kg are connected by a light string over a frictionless pulley and hang on either side. Taking g=10 m/s^2, what is the magnitude of their common acceleration?",
    "options": [
      "1 m/s^2",
      "5 m/s^2",
      "10 m/s^2",
      "2 m/s^2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For an Atwood machine, a=(m1-m2)g/(m1+m2)=(3-2)x10/5=2 m/s^2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-009",
    "section": "Physics",
    "topic": "Work, Energy and Power",
    "difficulty": "easy",
    "question": "A constant horizontal force of 15 N moves a box 4 m in the direction of the force. How much work is done?",
    "options": [
      "60 J",
      "19 J",
      "30 J",
      "120 J"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Work W=Fs=15x4=60 J.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-010",
    "section": "Physics",
    "topic": "Work, Energy and Power",
    "difficulty": "medium",
    "question": "A pump lifts 200 kg of water through a height of 10 m in 5 s. Taking g=10 m/s^2, what is the power delivered?",
    "options": [
      "2000 W",
      "4000 W",
      "400 W",
      "20000 W"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Power=mgh/t=200x10x10/5=4000 W.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-011",
    "section": "Physics",
    "topic": "System of Particles and Rotational Motion",
    "difficulty": "medium",
    "question": "Point masses 1 kg and 4 kg are placed at x=0 and x=10 m. Where does their centre of mass lie?",
    "options": [
      "2 m",
      "5 m",
      "8 m",
      "6.67 m"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "x_cm=(1x0+4x10)/(1+4)=40/5=8 m.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-012",
    "section": "Physics",
    "topic": "System of Particles and Rotational Motion",
    "difficulty": "hard",
    "question": "A uniform solid sphere of mass M and radius R rolls without slipping. What fraction of its total kinetic energy is rotational?",
    "options": [
      "1/2",
      "1/5",
      "2/5",
      "2/7"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a solid sphere I=(2/5)MR^2. Rolling KE splits as translational:rotational = 1:(2/5), so rotational fraction = (2/5)/(1+2/5)=2/7.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-013",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "At what height above Earth's surface does the acceleration due to gravity become g/9, where g is the surface value?",
    "options": [
      "2R",
      "3R",
      "R/2",
      "R/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "g'=g R^2/(R+h)^2=g/9 requires (R+h)=3R, so h=2R.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-014",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "A satellite orbits Earth at radius r with orbital speed v0. What is its orbital period in terms of r and v0?",
    "options": [
      "pi r / v0",
      "2 pi r / v0",
      "r / v0",
      "4 pi r / v0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Period equals circumference divided by speed: T=2 pi r/v0.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-015",
    "section": "Physics",
    "topic": "Mechanical Properties of Solids",
    "difficulty": "medium",
    "question": "A wire of length 3 m and cross-sectional area 2 mm^2 stretches by 1.5 mm under a load of 200 N. What is its Young modulus?",
    "options": [
      "2 x 10^10 Pa",
      "1 x 10^11 Pa",
      "2 x 10^11 Pa",
      "4 x 10^11 Pa"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Y=(F/A)(L/DeltaL)=(200/2x10^-6)x(3/1.5x10^-3)=1x10^8 x2x10^3=2x10^11 Pa.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-016",
    "section": "Physics",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "medium",
    "question": "Water flows steadily through a horizontal pipe that narrows from area 8 cm^2 to area 2 cm^2. If the speed in the wider section is 0.5 m/s, what is the speed in the narrow section?",
    "options": [
      "0.125 m/s",
      "4 m/s",
      "1 m/s",
      "2 m/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By continuity A1v1=A2v2, so v2=(8/2)x0.5=2 m/s.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-017",
    "section": "Physics",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "hard",
    "question": "Two small liquid drops of the same liquid, each of radius r, coalesce isothermally to form a single drop. In terms of the surface tension T and r, the energy released is proportional to",
    "options": [
      "T r^2 (2 - 2^(2/3))",
      "T r^3",
      "T r (2-2^(1/3))",
      "T r^2 (2^(2/3)-2)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Surface energy scales with surface area (proportional to r^2); the coalesced drop has a larger radius but smaller total surface area than two separate drops, releasing energy proportional to T r^2 (2-2^(2/3)).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-018",
    "section": "Physics",
    "topic": "Thermal Properties of Matter",
    "difficulty": "easy",
    "question": "How much heat is required to raise the temperature of 2 kg of water by 5 K? Take specific heat of water as 4200 J kg^-1 K^-1.",
    "options": [
      "21000 J",
      "42000 J",
      "8400 J",
      "4200 J"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Q=mcDeltaT=2x4200x5=42000 J.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-019",
    "section": "Physics",
    "topic": "Thermal Properties of Matter",
    "difficulty": "medium",
    "question": "An iron rod of length 2 m has a linear expansion coefficient of 1.2 x 10^-5 K^-1. What is its increase in length for a temperature rise of 100 K?",
    "options": [
      "1.2 mm",
      "4.8 mm",
      "2.4 mm",
      "24 mm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "DeltaL=alpha L DeltaT=1.2x10^-5x2x100=2.4x10^-3 m=2.4 mm.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-020",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "A gas absorbs 800 J of heat while its internal energy increases by 550 J. How much work does the gas do on its surroundings?",
    "options": [
      "550 J",
      "800 J",
      "1350 J",
      "250 J"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "First law: Q=DeltaU+W, so W=Q-DeltaU=800-550=250 J.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-021",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "hard",
    "question": "A Carnot engine operates between a source at 600 K and a sink at 300 K. What is its efficiency?",
    "options": [
      "50%",
      "25%",
      "75%",
      "100%"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Carnot efficiency=1-Tc/Th=1-300/600=0.5=50%.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-022",
    "section": "Physics",
    "topic": "Kinetic Theory",
    "difficulty": "medium",
    "question": "If the absolute temperature of an ideal gas is increased from 300 K to 1200 K, by what factor does the rms speed of its molecules increase?",
    "options": [
      "4",
      "2",
      "1.5",
      "8"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "v_rms is proportional to sqrt(T), so the factor is sqrt(1200/300)=sqrt(4)=2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-023",
    "section": "Physics",
    "topic": "Oscillations",
    "difficulty": "medium",
    "question": "A particle executes SHM with amplitude 4 cm and angular frequency 5 rad/s. What is its maximum acceleration?",
    "options": [
      "0.2 m/s^2",
      "0.8 m/s^2",
      "1 m/s^2",
      "20 m/s^2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Maximum acceleration=omega^2 A=25x0.04=1 m/s^2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-024",
    "section": "Physics",
    "topic": "Oscillations",
    "difficulty": "medium",
    "question": "A simple pendulum has length 0.9 m. Taking g=10 m/s^2 and pi^2=10, what is its time period?",
    "options": [
      "3.8 s",
      "0.95 s",
      "9.5 s",
      "1.9 s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "T=2 pi sqrt(L/g)=2 pi sqrt(0.09)=2 pi x0.3. Using pi^2=10 so pi approx 3.16, T approx 1.9 s.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-025",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "easy",
    "question": "A sound wave has frequency 340 Hz and wavelength 1 m. What is its speed?",
    "options": [
      "340 m/s",
      "1 m/s",
      "341 m/s",
      "170 m/s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Wave speed v=f lambda=340x1=340 m/s.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-026",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "medium",
    "question": "Two tuning forks of frequency 512 Hz and 518 Hz are sounded together. What beat frequency is heard?",
    "options": [
      "1030 Hz",
      "6 Hz",
      "3 Hz",
      "12 Hz"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Beat frequency equals the difference of the two frequencies: 518-512=6 Hz.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-027",
    "section": "Physics",
    "topic": "Electric Charges and Fields",
    "difficulty": "easy",
    "question": "Two point charges of magnitude q each repel each other with force F when separated by distance r. If the distance is halved, the new force is",
    "options": [
      "2F",
      "F/2",
      "4F",
      "F/4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Coulomb force varies as 1/r^2; halving r multiplies the force by 4.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-028",
    "section": "Physics",
    "topic": "Electric Charges and Fields",
    "difficulty": "medium",
    "question": "What is the magnitude of the electric field at a distance of 0.10 m from a point charge of +4 microC in vacuum? Take k=9x10^9 N m^2 C^-2.",
    "options": [
      "3.6 x 10^5 N/C",
      "9 x 10^5 N/C",
      "4 x 10^6 N/C",
      "3.6 x 10^6 N/C"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "E=kq/r^2=9x10^9x4x10^-6/0.01=3.6x10^6 N/C.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-029",
    "section": "Physics",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "medium",
    "question": "Two capacitors of 4 microF and 12 microF are connected in parallel. What is their equivalent capacitance?",
    "options": [
      "16 microF",
      "3 microF",
      "8 microF",
      "48 microF"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a parallel combination, capacitances add directly: 4+12=16 microF.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-030",
    "section": "Physics",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "hard",
    "question": "A parallel plate capacitor of capacitance 6 microF is charged to a potential difference of 20 V and then disconnected from the battery. A dielectric of dielectric constant 3 is then inserted, filling the gap completely. What is the new energy stored?",
    "options": [
      "1200 microJ",
      "400 microJ",
      "3600 microJ",
      "133 microJ"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "With charge fixed at Q=CV=120 microC, inserting the dielectric makes new capacitance 18 microF. New energy=Q^2/(2C')=(120)^2/(2x18)=14400/36=400 microJ.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-031",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "easy",
    "question": "A resistor of 8 ohm carries a current of 1.5 A. What is the potential difference across it?",
    "options": [
      "6 V",
      "9.5 V",
      "12 V",
      "16 V"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "V=IR=1.5x8=12 V.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-032",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "Two resistors of 4 ohm and 12 ohm are connected in parallel. What is their equivalent resistance?",
    "options": [
      "16 ohm",
      "8 ohm",
      "48 ohm",
      "3 ohm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "1/Req=1/4+1/12=3/12+1/12=4/12=1/3, so Req=3 ohm.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-033",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "A cell of emf 12 V and internal resistance 2 ohm is connected to an external resistor of 10 ohm. What current flows in the circuit?",
    "options": [
      "1 A",
      "1.2 A",
      "6 A",
      "0.83 A"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "I=E/(R+r)=12/(10+2)=1 A.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-034",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "hard",
    "question": "A wire of resistance R is cut into 3 equal pieces, which are then connected in parallel. What is the resistance of the combination in terms of R?",
    "options": [
      "R/3",
      "R/9",
      "3R",
      "9R"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Each piece has resistance R/3. Three such resistors in parallel give (R/3)/3=R/9.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-035",
    "section": "Physics",
    "topic": "Moving Charges and Magnetism",
    "difficulty": "medium",
    "question": "A charge of 4 microC moves at 2 x 10^6 m/s perpendicular to a magnetic field of 0.25 T. What is the magnetic force on it?",
    "options": [
      "0.5 N",
      "8 N",
      "2 N",
      "4 N"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "F=qvB=4x10^-6x2x10^6x0.25=2 N.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-036",
    "section": "Physics",
    "topic": "Moving Charges and Magnetism",
    "difficulty": "hard",
    "question": "A charged particle moves in a circle of radius r in a uniform magnetic field. If both the magnetic field and the particle's speed are doubled, the new radius becomes",
    "options": [
      "2r",
      "4r",
      "r/2",
      "r"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Radius r=mv/(qB). Doubling both v and B leaves the ratio v/B, and hence r, unchanged.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-037",
    "section": "Physics",
    "topic": "Moving Charges and Magnetism",
    "difficulty": "medium",
    "question": "A long straight wire carries a current of 5 A. What is the magnetic field at a perpendicular distance of 0.10 m from the wire? Take mu0=4 pi x 10^-7 T m/A.",
    "options": [
      "1 x 10^-5 T",
      "2 x 10^-5 T",
      "5 x 10^-6 T",
      "1 x 10^-4 T"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "B=mu0 I/(2 pi r)=4 pi x10^-7x5/(2 pi x0.10)=1x10^-5 T.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-038",
    "section": "Physics",
    "topic": "Magnetism and Matter",
    "difficulty": "easy",
    "question": "A bar magnet is cut into two equal pieces along its length (perpendicular to its axis). Each piece then behaves as",
    "options": [
      "a piece with only one pole",
      "an independent magnet with both poles",
      "a non-magnetic piece",
      "a piece with zero magnetic moment"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Magnetic monopoles do not exist; cutting a magnet always produces smaller magnets, each with a north and a south pole.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-039",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "medium",
    "question": "The magnetic flux linked with a 40-turn coil changes uniformly from 0.05 Wb to 0.01 Wb in 0.20 s. What is the magnitude of the induced emf?",
    "options": [
      "2 V",
      "0.2 V",
      "8 V",
      "20 V"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Induced emf magnitude=N DeltaPhi/Deltat=40x0.04/0.20=8 V.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-040",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "medium",
    "question": "An AC source has an rms voltage of 220 V. What is its peak voltage?",
    "options": [
      "220 V",
      "110 V",
      "440 V",
      "220 sqrt(2) V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Peak voltage V0=Vrms x sqrt(2)=220 sqrt(2) V.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-041",
    "section": "Physics",
    "topic": "Electromagnetic Waves",
    "difficulty": "easy",
    "question": "Which of the following electromagnetic waves has the longest wavelength?",
    "options": [
      "Radio waves",
      "Ultraviolet rays",
      "Gamma rays",
      "X-rays"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Among these, radio waves have the lowest frequency and hence the longest wavelength.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-042",
    "section": "Physics",
    "topic": "Ray Optics and Optical Instruments",
    "difficulty": "medium",
    "question": "A concave mirror of focal length 15 cm forms a real image of an object placed 30 cm in front of it. What is the image distance?",
    "options": [
      "15 cm",
      "30 cm",
      "10 cm",
      "45 cm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using mirror formula 1/f=1/v+1/u with u=-30 cm, f=-15 cm: 1/v=-1/15+1/30=-1/30, so v=-30 cm, meaning 30 cm in front of the mirror.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-043",
    "section": "Physics",
    "topic": "Ray Optics and Optical Instruments",
    "difficulty": "hard",
    "question": "A thin converging lens of focal length 10 cm is kept in contact with a thin diverging lens of focal length 25 cm. What is the focal length of the combination?",
    "options": [
      "15 cm",
      "35 cm",
      "50/3 cm",
      "250 cm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "1/f=1/10-1/25=5/50-2/50=3/50, so f=50/3 cm.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-044",
    "section": "Physics",
    "topic": "Ray Optics and Optical Instruments",
    "difficulty": "medium",
    "question": "Light travels from a medium of refractive index 1.5 into a medium of refractive index 1.0. What is the critical angle for total internal reflection (given sin^-1(1/1.5)=41.8 degrees)?",
    "options": [
      "48.2 degrees",
      "90 degrees",
      "33.7 degrees",
      "41.8 degrees"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Critical angle satisfies sin(C)=n2/n1=1/1.5, giving C=41.8 degrees.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-045",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "medium",
    "question": "In Young's double-slit experiment, the wavelength of light used is doubled while slit separation and screen distance are unchanged. The fringe width becomes",
    "options": [
      "double",
      "half",
      "unchanged",
      "four times"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Fringe width beta=lambda D/d, so doubling lambda doubles beta.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-046",
    "section": "Physics",
    "topic": "Dual Nature of Radiation and Matter",
    "difficulty": "medium",
    "question": "The work function of a metal is 2.0 eV. Light of energy 3.5 eV falls on it. What is the maximum kinetic energy of the emitted photoelectrons?",
    "options": [
      "3.5 eV",
      "1.5 eV",
      "2.0 eV",
      "5.5 eV"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By Einstein's photoelectric equation, Kmax=hf-phi=3.5-2.0=1.5 eV.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-047",
    "section": "Physics",
    "topic": "Dual Nature of Radiation and Matter",
    "difficulty": "hard",
    "question": "An electron and a proton are accelerated through the same potential difference from rest. What is the ratio of their de Broglie wavelengths, lambda_electron : lambda_proton?",
    "options": [
      "sqrt(me/mp)",
      "me/mp",
      "sqrt(mp/me)",
      "1:1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a charge accelerated through potential V, lambda=h/sqrt(2mqV). Since both have equal charge magnitude, lambda_e/lambda_p=sqrt(mp/me).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-048",
    "section": "Physics",
    "topic": "Atoms",
    "difficulty": "easy",
    "question": "In the Bohr model of the hydrogen atom, the energy of the electron in the nth orbit is proportional to",
    "options": [
      "n^2",
      "1/n",
      "n",
      "-1/n^2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Bohr energy levels satisfy En proportional to -1/n^2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-049",
    "section": "Physics",
    "topic": "Atoms",
    "difficulty": "medium",
    "question": "A hydrogen atom electron transitions from n=3 to n=1. To which spectral series does the emitted photon belong?",
    "options": [
      "Lyman series",
      "Balmer series",
      "Paschen series",
      "Brackett series"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Transitions ending at n=1 constitute the Lyman series.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-050",
    "section": "Physics",
    "topic": "Nuclei",
    "difficulty": "medium",
    "question": "A radioactive sample has a half-life of 4 hours. What fraction of the original sample remains undecayed after 12 hours?",
    "options": [
      "1/12",
      "1/8",
      "1/4",
      "1/16"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "12 hours is three half-lives, so the remaining fraction is (1/2)^3=1/8.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-051",
    "section": "Physics",
    "topic": "Nuclei",
    "difficulty": "hard",
    "question": "A nucleus of mass number 240 splits into two fragments of mass numbers 110 and 130 with the release of energy. This process is best described as",
    "options": [
      "nuclear fusion",
      "radioactive alpha decay",
      "nuclear fission",
      "beta decay"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The splitting of a heavy nucleus into two lighter nuclei with energy release is nuclear fission.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-052",
    "section": "Physics",
    "topic": "Semiconductor Electronics",
    "difficulty": "easy",
    "question": "Doping pure silicon with a pentavalent impurity such as phosphorus produces",
    "options": [
      "a p-type semiconductor",
      "an insulator",
      "a superconductor",
      "an n-type semiconductor"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Pentavalent dopants contribute extra free electrons, creating an n-type semiconductor.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-053",
    "section": "Physics",
    "topic": "Semiconductor Electronics",
    "difficulty": "medium",
    "question": "In a half-wave rectifier using a single diode, the output current flows for what fraction of each input AC cycle?",
    "options": [
      "half the cycle",
      "the full cycle",
      "one quarter of the cycle",
      "it never flows"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A half-wave rectifier conducts only during the half-cycle in which the diode is forward biased.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-054",
    "section": "Physics",
    "topic": "Units and Measurements",
    "difficulty": "hard",
    "question": "A physical quantity P is given by P = a^3 b^2 / (c sqrt(d)). If the percentage errors in a, b, c and d are 1%, 2%, 3% and 4% respectively, what is the maximum percentage error in P?",
    "options": [
      "10%",
      "12%",
      "14%",
      "6%"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Maximum percentage error adds: 3(1)+2(2)+1(3)+(1/2)(4)=3+4+3+2=12%.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-055",
    "section": "Physics",
    "topic": "Motion in a Straight Line",
    "difficulty": "hard",
    "question": "A particle's position is given by x = 2t^3 - 9t^2 + 12t (SI units). At what time is its acceleration zero?",
    "options": [
      "1 s",
      "2 s",
      "1.5 s",
      "3 s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Velocity v=6t^2-18t+12; acceleration a=12t-18. Setting a=0 gives t=1.5 s.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-056",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "hard",
    "question": "The escape velocity from Earth's surface is ve. In terms of ve, what is the escape velocity from a planet with the same mean density but twice Earth's radius?",
    "options": [
      "ve",
      "ve/2",
      "4 ve",
      "2 ve"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For constant density, escape velocity is proportional to radius, so doubling the radius doubles the escape velocity.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-057",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "hard",
    "question": "A stretched string of length 0.6 m, fixed at both ends, vibrates in its third harmonic. What is the wavelength of this mode?",
    "options": [
      "0.4 m",
      "0.6 m",
      "0.2 m",
      "1.2 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a string fixed at both ends, the nth harmonic has wavelength 2L/n. For n=3, lambda=2x0.6/3=0.4 m.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-058",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "An electric heater rated 1000 W is used for 3 hours. How many units (kWh) of electrical energy does it consume?",
    "options": [
      "1 kWh",
      "3 kWh",
      "30 kWh",
      "300 kWh"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Energy in kWh=power in kW x time in hours=1x3=3 kWh.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-059",
    "section": "Physics",
    "topic": "Oscillations",
    "difficulty": "hard",
    "question": "A particle in SHM has total energy E. At what displacement, as a fraction of amplitude A, is its kinetic energy equal to its potential energy?",
    "options": [
      "A/2",
      "A/4",
      "A/sqrt(2)",
      "2A/3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "KE=PE occurs when each equals E/2, so (1/2)kx^2=(1/2)(1/2)kA^2, giving x=A/sqrt(2).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-060",
    "section": "Physics",
    "topic": "Ray Optics and Optical Instruments",
    "difficulty": "easy",
    "question": "A simple microscope is essentially a single",
    "options": [
      "concave lens used to view a real image",
      "plane mirror",
      "prism",
      "convex lens used to view a magnified virtual image"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A simple microscope is a convex lens that forms an enlarged, virtual, erect image of a nearby object.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-061",
    "section": "Chemistry",
    "topic": "Some Basic Concepts of Chemistry",
    "difficulty": "easy",
    "question": "How many moles of oxygen atoms are present in 1 mole of CO2?",
    "options": [
      "2 mol",
      "1 mol",
      "3 mol",
      "0.5 mol"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Each CO2 molecule contains 2 oxygen atoms, so 1 mole of CO2 has 2 moles of O atoms.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-062",
    "section": "Chemistry",
    "topic": "Some Basic Concepts of Chemistry",
    "difficulty": "medium",
    "question": "What is the molarity of a solution containing 5.85 g of NaCl (molar mass 58.5 g/mol) dissolved in 500 mL of solution?",
    "options": [
      "0.1 M",
      "0.2 M",
      "2 M",
      "0.02 M"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Moles=5.85/58.5=0.1 mol. Molarity=0.1/0.5 L=0.2 M.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-063",
    "section": "Chemistry",
    "topic": "Some Basic Concepts of Chemistry",
    "difficulty": "hard",
    "question": "For the reaction N2 + 3H2 -> 2NH3, if 6 mol of H2 reacts completely with sufficient N2, what is the limiting information about N2 required and NH3 formed?",
    "options": [
      "6 mol N2 required, 6 mol NH3 formed",
      "3 mol N2 required, 2 mol NH3 formed",
      "2 mol N2 required, 4 mol NH3 formed",
      "2 mol N2 required, 6 mol NH3 formed"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Stoichiometry gives N2:H2:NH3=1:3:2, so 6 mol H2 needs 2 mol N2 and forms 4 mol NH3.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-064",
    "section": "Chemistry",
    "topic": "Structure of Atom",
    "difficulty": "easy",
    "question": "The number of orbitals in the 3d subshell is",
    "options": [
      "3",
      "7",
      "10",
      "5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The d subshell (l=2) has 2l+1=5 orbitals.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-065",
    "section": "Chemistry",
    "topic": "Structure of Atom",
    "difficulty": "medium",
    "question": "What is the electronic configuration of Cr (Z=24), given its known anomalous configuration?",
    "options": [
      "[Ar] 3d5 4s1",
      "[Ar] 3d4 4s2",
      "[Ar] 3d6 4s0",
      "[Ar] 4d5 4s1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Chromium adopts [Ar] 3d5 4s1 because a half-filled d subshell gives extra stability.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-066",
    "section": "Chemistry",
    "topic": "Classification of Elements and Periodicity",
    "difficulty": "easy",
    "question": "Elements in the same group of the periodic table have similar chemical properties mainly because they have the same",
    "options": [
      "atomic mass",
      "number of valence electrons",
      "number of neutrons",
      "number of protons"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Elements in a group share the same number of valence electrons, giving them similar chemical behaviour.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-067",
    "section": "Chemistry",
    "topic": "Classification of Elements and Periodicity",
    "difficulty": "medium",
    "question": "Which of these ions has the smallest ionic radius: Na+, Mg2+, Al3+, or Si4+, all being isoelectronic with neon?",
    "options": [
      "Na+",
      "Mg2+",
      "Si4+",
      "Al3+"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For isoelectronic species, higher nuclear charge pulls electrons closer, so the ion with the highest positive charge, Si4+, is smallest.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-068",
    "section": "Chemistry",
    "topic": "Chemical Bonding and Molecular Structure",
    "difficulty": "easy",
    "question": "The molecular shape of NH3 according to VSEPR theory is",
    "options": [
      "trigonal planar",
      "tetrahedral",
      "linear",
      "trigonal pyramidal"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "NH3 has three bond pairs and one lone pair around nitrogen, giving a trigonal pyramidal shape.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-069",
    "section": "Chemistry",
    "topic": "Chemical Bonding and Molecular Structure",
    "difficulty": "medium",
    "question": "Which of the following molecules is nonpolar despite having polar bonds?",
    "options": [
      "CO2",
      "H2O",
      "NH3",
      "HCl"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "In CO2, the two C=O bond dipoles point in opposite directions and cancel due to the linear geometry, giving a nonpolar molecule.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-070",
    "section": "Chemistry",
    "topic": "Chemical Bonding and Molecular Structure",
    "difficulty": "hard",
    "question": "According to molecular orbital theory, what is the bond order of the N2 molecule?",
    "options": [
      "2",
      "3",
      "2.5",
      "1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For N2 with 14 electrons, bonding minus antibonding electrons divided by 2 gives a bond order of 3.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-071",
    "section": "Chemistry",
    "topic": "States of Matter",
    "difficulty": "medium",
    "question": "A fixed mass of an ideal gas occupies 4 L at 2 atm and 300 K. What volume does it occupy at 1 atm and 300 K?",
    "options": [
      "2 L",
      "4 L",
      "8 L",
      "1 L"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At constant temperature, Boyle's law gives P1V1=P2V2, so V2=2x4/1=8 L.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-072",
    "section": "Chemistry",
    "topic": "States of Matter",
    "difficulty": "hard",
    "question": "For a real gas, the van der Waals equation introduces correction terms for",
    "options": [
      "only intermolecular forces",
      "only molecular volume",
      "temperature and pressure only",
      "intermolecular forces and finite molecular volume"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The van der Waals equation adds an attraction term (a/V^2) and a volume correction term (b) to account for real gas deviations.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-073",
    "section": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "easy",
    "question": "A process occurring in a system that neither loses nor gains matter or energy from its surroundings is called",
    "options": [
      "an isolated system process",
      "an open system process",
      "a closed system process only",
      "an ideal system process"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "An isolated system exchanges neither matter nor energy with its surroundings.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-074",
    "section": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "For a reaction, Delta H = -150 kJ/mol and Delta S = -100 J/mol K at 300 K. What is Delta G?",
    "options": [
      "-180 kJ/mol",
      "-120 kJ/mol",
      "-50 kJ/mol",
      "-250 kJ/mol"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Delta G=Delta H-TDelta S=-150-(300x(-0.1))=-150+30=-120 kJ/mol.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-075",
    "section": "Chemistry",
    "topic": "Equilibrium",
    "difficulty": "easy",
    "question": "A catalyst added to a reversible reaction at equilibrium",
    "options": [
      "shifts equilibrium toward products",
      "shifts equilibrium toward reactants",
      "does not shift the equilibrium position",
      "increases only Kc"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A catalyst speeds up both forward and reverse rates equally, so it does not change the equilibrium position or Kc.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-076",
    "section": "Chemistry",
    "topic": "Equilibrium",
    "difficulty": "medium",
    "question": "What is the pH of a 0.01 M NaOH solution, assuming complete dissociation?",
    "options": [
      "2",
      "10",
      "7",
      "12"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "pOH=-log(0.01)=2, so pH=14-2=12.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-077",
    "section": "Chemistry",
    "topic": "Equilibrium",
    "difficulty": "hard",
    "question": "For the equilibrium PCl5(g) <-> PCl3(g) + Cl2(g), increasing the volume of the container at constant temperature shifts the equilibrium",
    "options": [
      "toward PCl3 and Cl2",
      "toward PCl5",
      "in no direction",
      "only if a catalyst is present"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Increasing volume favours the side with more moles of gas; the product side has 2 moles versus 1, so equilibrium shifts toward products.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-078",
    "section": "Chemistry",
    "topic": "Redox Reactions",
    "difficulty": "medium",
    "question": "In the reaction MnO4- + 8H+ + 5e- -> Mn2+ + 4H2O, what is the change in oxidation state of manganese?",
    "options": [
      "+7 to +4",
      "+7 to +2",
      "+4 to +2",
      "+2 to +7"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Manganese goes from +7 in MnO4- to +2 in Mn2+, gaining 5 electrons.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-079",
    "section": "Chemistry",
    "topic": "Hydrogen",
    "difficulty": "easy",
    "question": "Which of the following is not a property typically shown by hydrogen?",
    "options": [
      "combining with oxygen to form water",
      "existing as a diatomic gas",
      "forming a stable H2- dihydride ion in ordinary reactions",
      "showing +1 oxidation state in most compounds"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Hydrogen commonly shows +1 oxidation state and exists as H2 gas; the stable formation of an H2- species is not a typical property.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-080",
    "section": "Chemistry",
    "topic": "s-Block Elements",
    "difficulty": "medium",
    "question": "Which alkali metal is used in photoelectric cells due to its low ionisation enthalpy among the common alkali metals?",
    "options": [
      "Lithium",
      "Sodium",
      "Potassium",
      "Cesium"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Cesium has one of the lowest ionisation enthalpies among common alkali metals, making it suitable for photoelectric applications.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-081",
    "section": "Chemistry",
    "topic": "p-Block Elements",
    "difficulty": "medium",
    "question": "Which of the following is the correct order of increasing thermal stability of alkaline earth metal carbonates?",
    "options": [
      "BeCO3 < MgCO3 < CaCO3 < BaCO3",
      "BaCO3 < CaCO3 < MgCO3 < BeCO3",
      "CaCO3 < BeCO3 < MgCO3 < BaCO3",
      "MgCO3 < BeCO3 < CaCO3 < BaCO3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Thermal stability of alkaline earth carbonates increases down the group as the cation becomes larger and less polarising.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-082",
    "section": "Chemistry",
    "topic": "Organic Chemistry Basic Principles",
    "difficulty": "easy",
    "question": "Which functional group is present in an aldehyde?",
    "options": [
      "-COOH",
      "-CHO",
      "-OH",
      "-NH2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The aldehyde functional group is the carbonyl attached to at least one hydrogen, written as -CHO.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-083",
    "section": "Chemistry",
    "topic": "Organic Chemistry Basic Principles",
    "difficulty": "medium",
    "question": "Which of the following carbocations is the least stable?",
    "options": [
      "secondary carbocation",
      "tertiary carbocation",
      "methyl carbocation",
      "allylic carbocation"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "With no alkyl substitution to provide hyperconjugation or inductive stabilisation, the methyl carbocation is least stable among these.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-084",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "easy",
    "question": "The general formula of an alkyne is",
    "options": [
      "CnH2n",
      "CnH2n+2",
      "CnH2n-4",
      "CnH2n-2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Alkynes, containing one triple bond, follow the general formula CnH2n-2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-085",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "medium",
    "question": "Ozonolysis of 2-butene followed by reductive workup gives",
    "options": [
      "two moles of acetaldehyde (ethanal)",
      "one mole of acetone",
      "formaldehyde and propanal",
      "glyoxal only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Cleaving the C=C bond of symmetric 2-butene at the double bond gives two molecules of ethanal (acetaldehyde) after reductive ozonolysis.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-086",
    "section": "Chemistry",
    "topic": "Environmental Chemistry",
    "difficulty": "easy",
    "question": "The layer of the atmosphere that absorbs harmful ultraviolet radiation from the sun is the",
    "options": [
      "troposphere",
      "ozone layer",
      "exosphere",
      "ionosphere only"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Stratospheric ozone absorbs most of the sun's harmful UV radiation.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-087",
    "section": "Chemistry",
    "topic": "Solid State",
    "difficulty": "medium",
    "question": "In a face-centred cubic (fcc) unit cell, how many atoms are present per unit cell?",
    "options": [
      "2",
      "1",
      "4",
      "8"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "In fcc, corner atoms contribute 8x1/8=1 and face atoms contribute 6x1/2=3, giving a total of 4 atoms per unit cell.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-088",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "medium",
    "question": "A solution has osmotic pressure 2.46 atm at 300 K. Given R=0.0821 L atm/mol K, what is the molar concentration of the solute?",
    "options": [
      "0.2 M",
      "1 M",
      "0.05 M",
      "0.1 M"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using pi=CRT, C=pi/(RT)=2.46/(0.0821x300) approx 0.1 M.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-089",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "medium",
    "question": "What is the standard cell potential of a cell with E(cathode)=+0.80 V and E(anode)=-0.76 V?",
    "options": [
      "1.56 V",
      "0.04 V",
      "-1.56 V",
      "0.76 V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "E(cell)=E(cathode)-E(anode)=0.80-(-0.76)=1.56 V.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-090",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "hard",
    "question": "During the electrolysis of molten NaCl using a current of 2 A for 965 seconds, how many moles of Na are deposited at the cathode? Take Faraday's constant as approximately 96500 C/mol.",
    "options": [
      "0.01 mol",
      "0.02 mol",
      "0.04 mol",
      "0.1 mol"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Charge passed=2x965=1930 C. Moles of electrons=1930/96500=0.02 mol, and since Na+ requires 1 electron, 0.02 mol Na is deposited.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-091",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "medium",
    "question": "A reaction is first order in reactant A. If the concentration of A is doubled, the rate of reaction",
    "options": [
      "remains unchanged",
      "increases four times",
      "doubles",
      "halves"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a first order reaction, rate is directly proportional to concentration, so doubling [A] doubles the rate.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-092",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "hard",
    "question": "A first-order reaction has a rate constant of 0.0693 per minute. Taking ln2=0.693, what is its half-life?",
    "options": [
      "20 minutes",
      "5 minutes",
      "0.0693 minutes",
      "10 minutes"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For first order reactions, t(1/2)=ln2/k=0.693/0.0693=10 minutes.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-093",
    "section": "Chemistry",
    "topic": "Surface Chemistry",
    "difficulty": "easy",
    "question": "The process of adsorption is generally accompanied by",
    "options": [
      "a decrease in enthalpy (exothermic)",
      "an increase in enthalpy always",
      "no change in enthalpy",
      "an increase in entropy of the system"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Adsorption is generally exothermic since gas molecules lose freedom of motion when adsorbed, decreasing enthalpy.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-094",
    "section": "Chemistry",
    "topic": "General Principles of Isolation of Elements",
    "difficulty": "medium",
    "question": "In the extraction of iron in a blast furnace, which substance acts as the reducing agent for iron oxide?",
    "options": [
      "silica",
      "carbon monoxide",
      "limestone",
      "oxygen"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Carbon monoxide generated in the furnace reduces iron oxide to metallic iron.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-095",
    "section": "Chemistry",
    "topic": "p-Block Elements (Class 12)",
    "difficulty": "medium",
    "question": "What is the hybridisation of the central atom in PCl5?",
    "options": [
      "sp3",
      "sp3d2",
      "sp3d",
      "sp2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Phosphorus in PCl5 forms five sigma bonds using sp3d hybrid orbitals.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-096",
    "section": "Chemistry",
    "topic": "p-Block Elements (Class 12)",
    "difficulty": "hard",
    "question": "Which noble gas compound is formed by the direct reaction of xenon with excess fluorine under suitable conditions?",
    "options": [
      "XeF2 only",
      "XeO3 only",
      "NeF2",
      "XeF6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Reacting xenon with excess fluorine under high pressure and temperature can yield the higher fluoride XeF6.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-097",
    "section": "Chemistry",
    "topic": "d and f Block Elements",
    "difficulty": "medium",
    "question": "Transition metals commonly show variable oxidation states mainly because of the",
    "options": [
      "small energy difference between (n-1)d and ns orbitals",
      "large radii of transition metal atoms",
      "complete absence of d electrons",
      "high melting points of transition metals"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The similar energies of (n-1)d and ns electrons allow transition metals to lose variable numbers of electrons, giving variable oxidation states.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-098",
    "section": "Chemistry",
    "topic": "Coordination Compounds",
    "difficulty": "medium",
    "question": "What is the coordination number of the central metal ion in [Co(NH3)6]3+?",
    "options": [
      "3",
      "6",
      "4",
      "2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Six NH3 ligands are directly bonded to cobalt, giving a coordination number of 6.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-099",
    "section": "Chemistry",
    "topic": "Coordination Compounds",
    "difficulty": "hard",
    "question": "According to crystal field theory, in an octahedral complex the d orbitals split into",
    "options": [
      "only a single degenerate set",
      "eg lower and t2g higher",
      "t2g (lower) and eg (higher) sets",
      "three separate non-degenerate levels only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "In an octahedral field, the d orbitals split into a lower-energy t2g set and a higher-energy eg set.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-100",
    "section": "Chemistry",
    "topic": "Haloalkanes and Haloarenes",
    "difficulty": "medium",
    "question": "Which of the following haloalkanes undergoes SN1 substitution most readily?",
    "options": [
      "methyl bromide",
      "ethyl bromide",
      "n-propyl bromide",
      "tert-butyl bromide"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "SN1 reactions proceed through a carbocation intermediate, and tertiary halides form the most stable carbocations, favouring SN1.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-101",
    "section": "Chemistry",
    "topic": "Alcohols, Phenols and Ethers",
    "difficulty": "easy",
    "question": "Phenol is more acidic than ethanol mainly because the phenoxide ion is",
    "options": [
      "stabilised by resonance with the benzene ring",
      "destabilised by the benzene ring",
      "identical in structure to ethoxide",
      "less soluble in water"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Delocalisation of the negative charge into the aromatic ring stabilises the phenoxide ion, making phenol more acidic than ethanol.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-102",
    "section": "Chemistry",
    "topic": "Alcohols, Phenols and Ethers",
    "difficulty": "medium",
    "question": "Which reagent converts a primary alcohol into an aldehyde without further oxidation to a carboxylic acid?",
    "options": [
      "acidified KMnO4",
      "PCC (pyridinium chlorochromate)",
      "acidified K2Cr2O7 with heat",
      "concentrated HNO3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "PCC is a mild oxidising agent that stops oxidation of primary alcohols at the aldehyde stage.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-103",
    "section": "Chemistry",
    "topic": "Aldehydes, Ketones and Carboxylic Acids",
    "difficulty": "medium",
    "question": "Which test distinguishes an aldehyde from a ketone by producing a silver mirror?",
    "options": [
      "Iodoform test",
      "Fehling's test only for ketones",
      "Tollens' test",
      "Litmus test"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "In Tollens' test, aldehydes reduce the diamminesilver(I) ion to metallic silver, forming a silver mirror; ketones (except alpha-hydroxy ketones) do not react.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-104",
    "section": "Chemistry",
    "topic": "Aldehydes, Ketones and Carboxylic Acids",
    "difficulty": "hard",
    "question": "Arrange the following in increasing order of acidity: ethanol, phenol, acetic acid.",
    "options": [
      "acetic acid < phenol < ethanol",
      "phenol < ethanol < acetic acid",
      "ethanol < acetic acid < phenol",
      "ethanol < phenol < acetic acid"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Carboxylic acids are more acidic than phenols, which in turn are more acidic than simple alcohols, due to increasing resonance stabilisation of the conjugate base.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-105",
    "section": "Chemistry",
    "topic": "Amines",
    "difficulty": "medium",
    "question": "Aliphatic primary amines react with nitrous acid (HNO2) at low temperature to primarily give",
    "options": [
      "an alcohol with evolution of nitrogen gas",
      "a stable diazonium salt",
      "an amide",
      "a nitrile"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Unlike aromatic amines, aliphatic primary amines form unstable diazonium salts that decompose immediately to alcohols with loss of N2 gas.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-106",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "easy",
    "question": "Which of the following is a disaccharide?",
    "options": [
      "glucose",
      "sucrose",
      "fructose",
      "starch"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Sucrose is composed of one glucose and one fructose unit joined by a glycosidic bond, making it a disaccharide.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-107",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "medium",
    "question": "The peptide bond linking amino acids in a protein is best described as",
    "options": [
      "an ester linkage",
      "a glycosidic linkage",
      "an amide linkage between the carboxyl group of one amino acid and the amino group of another",
      "a hydrogen bond only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Peptide bonds form by condensation between a carboxylic acid group and an amine group, giving an amide linkage.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-108",
    "section": "Chemistry",
    "topic": "Polymers",
    "difficulty": "easy",
    "question": "Natural rubber is a polymer of",
    "options": [
      "ethylene",
      "vinyl chloride",
      "styrene",
      "isoprene"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Natural rubber is a cis-polymer of isoprene (2-methyl-1,3-butadiene).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-109",
    "section": "Chemistry",
    "topic": "Chemistry in Everyday Life",
    "difficulty": "easy",
    "question": "Aspirin is chemically classified as",
    "options": [
      "an analgesic and antipyretic",
      "an antibiotic",
      "an antacid",
      "an antihistamine"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Aspirin (acetylsalicylic acid) is widely used as a pain reliever (analgesic) and fever reducer (antipyretic).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-110",
    "section": "Chemistry",
    "topic": "Some Basic Concepts of Chemistry",
    "difficulty": "medium",
    "question": "What is the empirical formula of a compound containing 40% carbon, 6.7% hydrogen and 53.3% oxygen by mass?",
    "options": [
      "C2H4O2",
      "CH2O",
      "CHO",
      "C2H2O"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Dividing mass percent by atomic mass: C=40/12=3.33, H=6.7/1=6.7, O=53.3/16=3.33. Dividing by the smallest (3.33) gives C:H:O=1:2:1, so CH2O.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-111",
    "section": "Chemistry",
    "topic": "Chemical Bonding and Molecular Structure",
    "difficulty": "hard",
    "question": "Which of the following species is diamagnetic according to molecular orbital theory?",
    "options": [
      "O2",
      "O2+",
      "N2",
      "NO"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "N2 has all electrons paired in molecular orbitals, making it diamagnetic, whereas O2, O2+ and NO have unpaired electrons.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-112",
    "section": "Chemistry",
    "topic": "Equilibrium",
    "difficulty": "medium",
    "question": "For a weak acid HA with Ka=1x10^-5, what is the degree of dissociation in a 0.1 M solution (using the approximation alpha=sqrt(Ka/C))?",
    "options": [
      "0.1",
      "0.001",
      "1",
      "0.01"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "alpha=sqrt(Ka/C)=sqrt(1x10^-5/0.1)=sqrt(1x10^-4)=0.01.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-113",
    "section": "Chemistry",
    "topic": "States of Matter",
    "difficulty": "medium",
    "question": "At STP, what volume is occupied by 0.5 mole of an ideal gas? Take molar volume at STP as 22.4 L/mol.",
    "options": [
      "11.2 L",
      "22.4 L",
      "5.6 L",
      "44.8 L"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Volume=n x 22.4=0.5x22.4=11.2 L.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-114",
    "section": "Chemistry",
    "topic": "Redox Reactions",
    "difficulty": "easy",
    "question": "In the disproportionation reaction 2H2O2 -> 2H2O + O2, the oxidation state of oxygen in H2O2 changes from -1 to",
    "options": [
      "-1 in both products",
      "-2 in H2O and 0 in O2",
      "0 in H2O and -2 in O2",
      "-2 in both products"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Peroxide oxygen (-1) is simultaneously reduced to -2 in water and oxidised to 0 in O2, a disproportionation.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-115",
    "section": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "hard",
    "question": "For a spontaneous exothermic reaction with a decrease in entropy (Delta S negative), spontaneity (Delta G negative) is favoured at",
    "options": [
      "high temperatures",
      "all temperatures equally",
      "low temperatures",
      "no temperature, since it is never spontaneous"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Delta G=Delta H-TDelta S. With Delta H negative and Delta S negative, the -TDelta S term becomes less favourable as T increases, so low temperature favours spontaneity.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-116",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "hard",
    "question": "Which of the following alkyl halide and base combinations would favour the Saytzeff (more substituted) alkene as the major elimination product?",
    "options": [
      "a bulky base such as tert-butoxide",
      "a primary substrate with any base",
      "a strong nucleophile at low temperature only",
      "a bulky substrate with a small base such as ethoxide"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "With a small base such as ethoxide, elimination tends to follow Saytzeff's rule, favouring the more substituted (more stable) alkene, unless a bulky base is used.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-117",
    "section": "Chemistry",
    "topic": "Coordination Compounds",
    "difficulty": "medium",
    "question": "What is the IUPAC-style oxidation state of cobalt in the complex [Co(NH3)5Cl]Cl2?",
    "options": [
      "+3",
      "+2",
      "+1",
      "+4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "NH3 is neutral and each Cl- contributes -1. With total charge of the complex ion +2 and one Cl- as ligand, plus two Cl- as counter ions, cobalt's oxidation state is +3.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-118",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "medium",
    "question": "For a zero-order reaction, a plot of concentration of reactant versus time is",
    "options": [
      "a straight line with positive slope",
      "a straight line with negative slope",
      "a curve that never reaches zero",
      "a horizontal straight line"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a zero-order reaction, [A]=[A]0-kt, giving a straight line with negative slope -k.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-119",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "hard",
    "question": "Denaturation of a protein primarily disrupts its",
    "options": [
      "primary sequence of amino acids",
      "peptide bonds joining amino acids",
      "secondary and tertiary structure without breaking peptide bonds",
      "elemental composition"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Denaturation unfolds the protein by disrupting hydrogen bonds and other secondary/tertiary interactions, while the primary sequence of peptide bonds remains intact.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-120",
    "section": "Chemistry",
    "topic": "Solid State",
    "difficulty": "hard",
    "question": "A metal crystallises in a body-centred cubic (bcc) lattice with edge length a. What is the relation between the atomic radius r and a?",
    "options": [
      "r = a/2",
      "r = sqrt(2) a / 4",
      "r = a/4",
      "r = sqrt(3) a / 4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "In a bcc lattice, atoms touch along the body diagonal (length sqrt(3) a), which equals 4r, giving r=sqrt(3) a/4.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-121",
    "section": "Mathematics",
    "topic": "Sets",
    "difficulty": "easy",
    "question": "If A = {1,2,3,4} and B = {3,4,5,6}, what is A intersection B?",
    "options": [
      "{3,4}",
      "{1,2,5,6}",
      "{1,2,3,4,5,6}",
      "{}"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The intersection contains elements common to both sets: 3 and 4.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-122",
    "section": "Mathematics",
    "topic": "Relations and Functions",
    "difficulty": "medium",
    "question": "If f(x) = 2x + 3 and g(x) = x^2, what is (f o g)(2)?",
    "options": [
      "7",
      "11",
      "10",
      "49"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "g(2)=4, then f(4)=2(4)+3=11.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-123",
    "section": "Mathematics",
    "topic": "Trigonometric Functions",
    "difficulty": "easy",
    "question": "What is the value of cos(60 degrees)?",
    "options": [
      "sqrt(3)/2",
      "1",
      "1/2",
      "0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "cos(60 degrees)=1/2, a standard value.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-124",
    "section": "Mathematics",
    "topic": "Trigonometric Functions",
    "difficulty": "medium",
    "question": "If sin(x) = 3/5 and x is in the first quadrant, what is cos(x)?",
    "options": [
      "3/4",
      "5/4",
      "1/5",
      "4/5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using sin^2+cos^2=1, cos(x)=sqrt(1-9/25)=sqrt(16/25)=4/5 (positive in the first quadrant).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-125",
    "section": "Mathematics",
    "topic": "Complex Numbers and Quadratic Equations",
    "difficulty": "easy",
    "question": "What is the modulus of the complex number 3+4i?",
    "options": [
      "5",
      "7",
      "1",
      "25"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Modulus=sqrt(3^2+4^2)=sqrt(25)=5.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-126",
    "section": "Mathematics",
    "topic": "Complex Numbers and Quadratic Equations",
    "difficulty": "medium",
    "question": "For the quadratic equation 2x^2 - 5x + 2 = 0, what are the roots?",
    "options": [
      "1 and 2",
      "2 and 1/2",
      "-2 and -1/2",
      "5 and 2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Factoring gives (2x-1)(x-2)=0, so x=1/2 or x=2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-127",
    "section": "Mathematics",
    "topic": "Complex Numbers and Quadratic Equations",
    "difficulty": "hard",
    "question": "For what value of k does the equation x^2 - kx + 4 = 0 have equal roots?",
    "options": [
      "2 or -2",
      "16 or -16",
      "4 or -4",
      "0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Equal roots require discriminant k^2-16=0, so k=plus or minus 4.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-128",
    "section": "Mathematics",
    "topic": "Linear Inequalities",
    "difficulty": "medium",
    "question": "What is the solution set of the inequality 2x + 3 <= 11?",
    "options": [
      "x >= 4",
      "x <= 7",
      "x >= 7",
      "x <= 4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "2x<=8, so x<=4.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-129",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "medium",
    "question": "In how many ways can 3 books be selected from a set of 7 different books?",
    "options": [
      "35",
      "21",
      "210",
      "7"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Number of ways=C(7,3)=7!/(3!4!)=35.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-130",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "hard",
    "question": "How many distinct arrangements can be made using all the letters of the word 'LEVEL'?",
    "options": [
      "120",
      "30",
      "20",
      "60"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "LEVEL has 5 letters with L repeated twice and E repeated twice, so arrangements=5!/(2!2!)=120/4=30.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-131",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "medium",
    "question": "What is the coefficient of x^2 in the expansion of (1+x)^5?",
    "options": [
      "5",
      "20",
      "10",
      "1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The coefficient is C(5,2)=10.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-132",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "easy",
    "question": "What is the 10th term of the arithmetic progression 3, 7, 11, 15, ...?",
    "options": [
      "43",
      "35",
      "31",
      "39"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "an=a+(n-1)d=3+9x4=39.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-133",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "medium",
    "question": "What is the sum of the first 20 terms of the arithmetic progression with first term 2 and common difference 3?",
    "options": [
      "610",
      "600",
      "620",
      "590"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Sn=n/2[2a+(n-1)d]=10[4+19x3]=10x61=610.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-134",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "hard",
    "question": "What is the sum to infinity of the geometric series 8 + 4 + 2 + 1 + ...?",
    "options": [
      "15",
      "16",
      "8",
      "32"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Sum to infinity=a/(1-r)=8/(1-0.5)=16.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-135",
    "section": "Mathematics",
    "topic": "Straight Lines",
    "difficulty": "medium",
    "question": "What is the slope of the line passing through the points (2,3) and (5,9)?",
    "options": [
      "3",
      "1/2",
      "2",
      "6"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Slope=(9-3)/(5-2)=6/3=2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-136",
    "section": "Mathematics",
    "topic": "Straight Lines",
    "difficulty": "hard",
    "question": "What is the equation of the line passing through (1,2) with slope 3?",
    "options": [
      "y = 3x + 1",
      "y = x + 3",
      "3y = x + 2",
      "y = 3x - 1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using y-y1=m(x-x1): y-2=3(x-1), so y=3x-1.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-137",
    "section": "Mathematics",
    "topic": "Conic Sections",
    "difficulty": "medium",
    "question": "What is the equation of a circle with centre (2,-3) and radius 5?",
    "options": [
      "(x-2)^2 + (y+3)^2 = 25",
      "(x+2)^2 + (y-3)^2 = 25",
      "(x-2)^2 + (y+3)^2 = 5",
      "(x-2)^2 - (y+3)^2 = 25"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The standard form is (x-h)^2+(y-k)^2=r^2 with (h,k)=(2,-3) and r=5.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-138",
    "section": "Mathematics",
    "topic": "Conic Sections",
    "difficulty": "hard",
    "question": "What is the eccentricity of the ellipse x^2/25 + y^2/16 = 1?",
    "options": [
      "4/5",
      "3/5",
      "5/3",
      "1/5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Here a^2=25, b^2=16, so c^2=a^2-b^2=9, c=3, and eccentricity e=c/a=3/5.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-139",
    "section": "Mathematics",
    "topic": "Introduction to Three Dimensional Geometry",
    "difficulty": "medium",
    "question": "What is the distance between the points (1,2,3) and (4,6,3) in space?",
    "options": [
      "7",
      "25",
      "5",
      "sqrt(29)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Distance=sqrt((4-1)^2+(6-2)^2+(3-3)^2)=sqrt(9+16+0)=sqrt(25)=5.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-140",
    "section": "Mathematics",
    "topic": "Limits and Derivatives",
    "difficulty": "medium",
    "question": "What is the value of lim(x->0) sin(3x)/x?",
    "options": [
      "1",
      "0",
      "1/3",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using the standard limit lim(x->0) sin(kx)/x = k, here k=3.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-141",
    "section": "Mathematics",
    "topic": "Limits and Derivatives",
    "difficulty": "hard",
    "question": "What is the derivative of x^3 sin(x) with respect to x?",
    "options": [
      "3x^2 sin(x) + x^3 cos(x)",
      "3x^2 sin(x)",
      "x^3 cos(x)",
      "3x^2 cos(x) + x^3 sin(x)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By the product rule, d/dx[x^3 sin(x)]=3x^2 sin(x)+x^3 cos(x).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-142",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "question": "What is the mean of the data set 4, 8, 6, 10, 12?",
    "options": [
      "10",
      "8",
      "6",
      "40"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Mean=(4+8+6+10+12)/5=40/5=8.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-143",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "hard",
    "question": "What is the variance of the data set 2, 4, 6, 8, 10?",
    "options": [
      "4",
      "2",
      "8",
      "40"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Mean=6. Squared deviations are 16,4,0,4,16, summing to 40. Variance=40/5=8.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-144",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "easy",
    "question": "A single fair die is rolled once. What is the probability of getting a number greater than 4?",
    "options": [
      "1/2",
      "1/6",
      "2/3",
      "1/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Numbers greater than 4 are 5 and 6, giving probability 2/6=1/3.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-145",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "Two fair coins are tossed together. What is the probability of getting exactly one head?",
    "options": [
      "1/2",
      "1/4",
      "3/4",
      "1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Outcomes are HH, HT, TH, TT; exactly one head occurs in 2 of 4 equally likely outcomes, giving 1/2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-146",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "A bag contains 4 red and 6 black balls. Two balls are drawn without replacement. What is the probability that both are red?",
    "options": [
      "4/15",
      "2/15",
      "1/5",
      "6/45"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "P=(4/10)x(3/9)=12/90=2/15.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-147",
    "section": "Mathematics",
    "topic": "Inverse Trigonometric Functions",
    "difficulty": "medium",
    "question": "What is the value of tan^-1(1) + tan^-1(0)?",
    "options": [
      "pi/2",
      "0",
      "pi/4",
      "pi"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "tan^-1(1)=pi/4 and tan^-1(0)=0, so the sum is pi/4.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-148",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "easy",
    "question": "What is the order of the matrix product AB if A is a 2x3 matrix and B is a 3x4 matrix?",
    "options": [
      "3x3",
      "2x3",
      "4x2",
      "2x4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For matrix multiplication, the resulting matrix has order (rows of A) x (columns of B)=2x4.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-149",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "hard",
    "question": "If A is a square matrix such that A^2 = A (idempotent), and A is invertible, what must A equal?",
    "options": [
      "the identity matrix I",
      "the zero matrix",
      "any matrix with determinant 1",
      "a diagonal matrix with distinct entries"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "If A is invertible and A^2=A, multiplying both sides by A^-1 gives A=I.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-150",
    "section": "Mathematics",
    "topic": "Determinants",
    "difficulty": "medium",
    "question": "What is the determinant of the matrix [[2,3],[4,5]]?",
    "options": [
      "2",
      "-2",
      "22",
      "-22"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Determinant=2x5-3x4=10-12=-2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-151",
    "section": "Mathematics",
    "topic": "Determinants",
    "difficulty": "hard",
    "question": "For a 3x3 matrix A with determinant 5, what is the determinant of 2A?",
    "options": [
      "10",
      "20",
      "40",
      "5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For an n x n matrix, det(kA)=k^n det(A). Here n=3, so det(2A)=2^3 x5=40.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-152",
    "section": "Mathematics",
    "topic": "Continuity and Differentiability",
    "difficulty": "medium",
    "question": "What is the derivative of ln(x^2+1) with respect to x?",
    "options": [
      "1/(x^2+1)",
      "2x",
      "x/(x^2+1)",
      "2x/(x^2+1)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using the chain rule, d/dx[ln(x^2+1)]=(2x)/(x^2+1).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-153",
    "section": "Mathematics",
    "topic": "Continuity and Differentiability",
    "difficulty": "hard",
    "question": "If y = e^(2x) cos(x), what is dy/dx?",
    "options": [
      "2e^(2x) cos(x) - e^(2x) sin(x)",
      "2e^(2x) cos(x)",
      "e^(2x)(cos(x)+sin(x))",
      "-e^(2x) sin(x)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By the product rule, dy/dx=2e^(2x)cos(x)+e^(2x)(-sin(x))=2e^(2x)cos(x)-e^(2x)sin(x).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-154",
    "section": "Mathematics",
    "topic": "Application of Derivatives",
    "difficulty": "medium",
    "question": "For the function f(x) = x^2 - 4x + 7, at what value of x does f have its minimum?",
    "options": [
      "x = 4",
      "x = 2",
      "x = -2",
      "x = 0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "f'(x)=2x-4=0 gives x=2, and since the coefficient of x^2 is positive, this is a minimum.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-155",
    "section": "Mathematics",
    "topic": "Application of Derivatives",
    "difficulty": "hard",
    "question": "A stone is dropped into a pond, creating a circular ripple whose radius increases at 2 cm/s. When the radius is 5 cm, how fast is the area increasing?",
    "options": [
      "10 pi cm^2/s",
      "5 pi cm^2/s",
      "20 pi cm^2/s",
      "25 pi cm^2/s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A=pi r^2, so dA/dt=2 pi r (dr/dt)=2 pi x5x2=20 pi cm^2/s.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-156",
    "section": "Mathematics",
    "topic": "Integrals",
    "difficulty": "medium",
    "question": "What is the value of the indefinite integral of 3x^2 dx?",
    "options": [
      "3x^3 + C",
      "x^3/3 + C",
      "6x + C",
      "x^3 + C"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Integral of 3x^2 is 3(x^3/3)=x^3, plus a constant of integration.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-157",
    "section": "Mathematics",
    "topic": "Integrals",
    "difficulty": "hard",
    "question": "What is the value of the definite integral from 0 to pi/2 of cos(x) dx?",
    "options": [
      "1",
      "0",
      "pi/2",
      "-1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Integral of cos(x) is sin(x); evaluating from 0 to pi/2 gives sin(pi/2)-sin(0)=1-0=1.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-158",
    "section": "Mathematics",
    "topic": "Application of Integrals",
    "difficulty": "medium",
    "question": "What is the area enclosed between the curve y = x^2 and the x-axis from x=0 to x=3?",
    "options": [
      "6",
      "9",
      "3",
      "27"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Area=integral from 0 to 3 of x^2 dx=[x^3/3]=27/3=9.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-159",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "What is the order of the differential equation d^2y/dx^2 + 3(dy/dx) + y = 0?",
    "options": [
      "1",
      "3",
      "2",
      "0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The order is determined by the highest derivative present, which is the second derivative, so order 2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-160",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "hard",
    "question": "What is the general solution of the differential equation dy/dx = 2x?",
    "options": [
      "y = 2x + C",
      "y = x^2",
      "y = 2x^2 + C",
      "y = x^2 + C"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Integrating both sides gives y=x^2+C, where C is an arbitrary constant.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-161",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "medium",
    "question": "What is the magnitude of the vector 3i + 4j + 12k?",
    "options": [
      "13",
      "19",
      "12",
      "sqrt(19)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Magnitude=sqrt(3^2+4^2+12^2)=sqrt(9+16+144)=sqrt(169)=13.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-162",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "hard",
    "question": "If vectors a = 2i + 3j and b = -6i - 9j, what can be said about a and b?",
    "options": [
      "they are perpendicular vectors",
      "they are parallel (anti-parallel) vectors",
      "they have equal magnitude only",
      "they are equal vectors"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Since b=-3a, the vectors are scalar multiples of each other, meaning they are parallel (in this case, anti-parallel).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-163",
    "section": "Mathematics",
    "topic": "Three Dimensional Geometry",
    "difficulty": "medium",
    "question": "What are the direction cosines of the line joining the origin to the point (1,1,sqrt(2))?",
    "options": [
      "1,1,sqrt(2)",
      "1/sqrt(2), 1/sqrt(2), 1",
      "1/2, 1/2, 1/sqrt(2)",
      "1/4, 1/4, 1/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The distance from origin is sqrt(1+1+2)=2, so direction cosines are 1/2, 1/2, sqrt(2)/2=1/sqrt(2).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-164",
    "section": "Mathematics",
    "topic": "Linear Programming",
    "difficulty": "medium",
    "question": "In a linear programming problem, the region satisfying all given constraints simultaneously is called the",
    "options": [
      "objective region",
      "boundary region",
      "infeasible region",
      "feasible region"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The set of all points satisfying every constraint of an LPP is called the feasible region.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-165",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "If P(A) = 0.4, P(B) = 0.5 and P(A intersection B) = 0.2, what is P(A union B)?",
    "options": [
      "0.7",
      "0.9",
      "0.1",
      "1.1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "P(A union B)=P(A)+P(B)-P(A intersection B)=0.4+0.5-0.2=0.7.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-166",
    "section": "Mathematics",
    "topic": "Relations and Functions",
    "difficulty": "hard",
    "question": "A function f: R -> R is defined as f(x) = x^3. Which property does f have?",
    "options": [
      "it is one-one but not onto",
      "it is both one-one and onto",
      "it is onto but not one-one",
      "it is neither one-one nor onto"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "f(x)=x^3 is strictly increasing (hence one-one) and its range is all of R (hence onto).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-167",
    "section": "Mathematics",
    "topic": "Trigonometric Functions",
    "difficulty": "hard",
    "question": "What is the general solution of the equation sin(x) = 0?",
    "options": [
      "x = 2n pi",
      "x = n pi/2",
      "x = n pi, where n is an integer",
      "x = (2n+1) pi/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "sin(x)=0 when x is any integer multiple of pi.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-168",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "medium",
    "question": "If the 3rd term of a geometric progression is 12 and the 6th term is 96, what is the common ratio?",
    "options": [
      "4",
      "3",
      "8",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "T6/T3=r^3=96/12=8, so r=2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-169",
    "section": "Mathematics",
    "topic": "Straight Lines",
    "difficulty": "medium",
    "question": "What is the distance from the point (3,4) to the line 3x + 4y - 10 = 0?",
    "options": [
      "3",
      "5",
      "1",
      "4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Distance=|3(3)+4(4)-10|/sqrt(3^2+4^2)=|9+16-10|/5=15/5=3.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-170",
    "section": "Mathematics",
    "topic": "Conic Sections",
    "difficulty": "medium",
    "question": "What is the length of the latus rectum of the parabola y^2 = 12x?",
    "options": [
      "3",
      "12",
      "6",
      "24"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For y^2=4ax, latus rectum=4a; here 4a=12, so the latus rectum is 12.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-171",
    "section": "Mathematics",
    "topic": "Limits and Derivatives",
    "difficulty": "medium",
    "question": "What is the value of lim(x->infinity) (3x^2 + 2x)/(x^2 - 1)?",
    "options": [
      "2",
      "0",
      "3",
      "infinity"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Dividing numerator and denominator by x^2, the limit of (3+2/x)/(1-1/x^2) as x approaches infinity is 3.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-172",
    "section": "Mathematics",
    "topic": "Application of Derivatives",
    "difficulty": "medium",
    "question": "For what value of x does the function f(x) = 3x^2 - 12x + 5 attain its minimum value?",
    "options": [
      "x = -2",
      "x = 4",
      "x = 6",
      "x = 2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "f'(x)=6x-12=0 gives x=2, and since the coefficient of x^2 is positive, this is a minimum.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-173",
    "section": "Mathematics",
    "topic": "Integrals",
    "difficulty": "hard",
    "question": "What is the value of the integral from 1 to e of (1/x) dx?",
    "options": [
      "1",
      "e",
      "e-1",
      "0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Integral of 1/x is ln(x); evaluating from 1 to e gives ln(e)-ln(1)=1-0=1.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-174",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "medium",
    "question": "What is the dot product of vectors a = 2i - j + 3k and b = i + 2j - k?",
    "options": [
      "3",
      "-3",
      "6",
      "0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "a.b=2(1)+(-1)(2)+3(-1)=2-2-3=-3.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-175",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "hard",
    "question": "What is the middle term in the expansion of (x + 1/x)^6?",
    "options": [
      "15",
      "6",
      "20",
      "1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For (x+1/x)^6, the middle term (4th term, r=3) is C(6,3) x^(6-3) (1/x)^3 = 20.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-176",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "If A = [[1,2],[3,4]], what is the transpose of A?",
    "options": [
      "[[4,3],[2,1]]",
      "[[1,2],[3,4]]",
      "[[2,1],[4,3]]",
      "[[1,3],[2,4]]"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The transpose swaps rows and columns: entry (i,j) becomes (j,i).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-177",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "A card is drawn from a well-shuffled standard deck of 52 cards. What is the probability that it is a king or a heart?",
    "options": [
      "4/13",
      "1/13",
      "17/52",
      "1/4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "P(king or heart)=P(king)+P(heart)-P(king of hearts)=4/52+13/52-1/52=16/52=4/13.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-178",
    "section": "Mathematics",
    "topic": "Three Dimensional Geometry",
    "difficulty": "hard",
    "question": "What is the angle between the line with direction ratios (1,1,0) and the line with direction ratios (1,-1,0)?",
    "options": [
      "0 degrees",
      "90 degrees",
      "45 degrees",
      "180 degrees"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "cos(theta)=(1x1+1x(-1)+0)/(sqrt(2)xsqrt(2))=0/2=0, so theta=90 degrees.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-179",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "What is the degree of the differential equation (dy/dx)^2 + 3(dy/dx) + 5 = 0?",
    "options": [
      "1",
      "3",
      "2",
      "0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The degree is the power of the highest-order derivative after the equation is written as a polynomial in derivatives; here (dy/dx) is squared, so degree is 2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-02-180",
    "section": "Mathematics",
    "topic": "Application of Integrals",
    "difficulty": "hard",
    "question": "What is the area of the region bounded by the curve y = 4 - x^2 and the x-axis between x=-2 and x=2?",
    "options": [
      "16/3",
      "8/3",
      "64/3",
      "32/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Area=integral from -2 to 2 of (4-x^2)dx=[4x-x^3/3] from -2 to 2=(8-8/3)-(-8+8/3)=16-16/3=32/3.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-24"
    }
  },
];
