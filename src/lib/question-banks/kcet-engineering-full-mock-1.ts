import type { Question } from '../questions';

export const KCET_ENGINEERING_FULL_MOCK_1: Question[] = [
  {
    "id": "kcet-2026-engineering-full-mock-01-001",
    "section": "Physics",
    "topic": "Units and Measurements",
    "difficulty": "easy",
    "question": "The dimensions of impulse are the same as those of which quantity?",
    "options": [
      "Power",
      "Momentum",
      "Energy",
      "Force"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Impulse equals change in momentum, so both have dimensions M L T^-1.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-002",
    "section": "Physics",
    "topic": "Units and Measurements",
    "difficulty": "medium",
    "question": "A length is measured as 2.40 m with an absolute uncertainty of 0.02 m. What is the percentage uncertainty, to two significant figures?",
    "options": [
      "1.2%",
      "0.20%",
      "0.83%",
      "8.3%"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Percentage uncertainty = (0.02/2.40) x 100 = 0.83%.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-003",
    "section": "Physics",
    "topic": "Motion in a Straight Line",
    "difficulty": "easy",
    "question": "A car starts from rest and accelerates uniformly at 3 m/s^2 for 4 s. What distance does it cover?",
    "options": [
      "12 m",
      "24 m",
      "36 m",
      "48 m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using s = ut + (1/2)at^2 with u=0 gives s=0.5 x 3 x 16 = 24 m.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-004",
    "section": "Physics",
    "topic": "Motion in a Plane",
    "difficulty": "medium",
    "question": "A projectile is launched at 20 m/s at 30 degrees above the horizontal. Take g=10 m/s^2. What is its time of flight?",
    "options": [
      "4 s",
      "2 s",
      "1 s",
      "sqrt(3) s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Time of flight = 2u sin30/g = 2 x 20 x 0.5/10 = 2 s.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-005",
    "section": "Physics",
    "topic": "Motion in a Plane",
    "difficulty": "medium",
    "question": "Two perpendicular velocity components of a particle are 6 m/s east and 8 m/s north. What is the magnitude of its velocity?",
    "options": [
      "2 m/s",
      "14 m/s",
      "7 m/s",
      "10 m/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The resultant magnitude is sqrt(6^2+8^2)=10 m/s.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-006",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "medium",
    "question": "A 5 kg block on a horizontal surface is pulled by a 20 N force. If the coefficient of kinetic friction is 0.2 and g=10 m/s^2, what is its acceleration?",
    "options": [
      "2 m/s^2",
      "3 m/s^2",
      "1 m/s^2",
      "4 m/s^2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Kinetic friction is 0.2 x 5 x 10 = 10 N. Net force is 10 N, so a=10/5=2 m/s^2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-007",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "hard",
    "question": "Inside a cabin accelerating at 5 m/s^2 horizontally to the right and 2 m/s^2 vertically upward, a 2 kg bob hangs from a light string and remains at rest relative to the cabin. Take g=10 m/s^2. If theta is the angle made by the string with the vertical, which pair is correct?",
    "options": [
      "tan(theta)=5/12 and T=24 N",
      "tan(theta)=12/5 and T=26 N",
      "tan(theta)=5/8 and T=26 N",
      "tan(theta)=5/12 and T=26 N"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The bob has the same acceleration as the cabin. Horizontally, T sin(theta)=2 x 5=10 N. Vertically, T cos(theta)-2 x 10=2 x 2, so T cos(theta)=24 N. Therefore T=sqrt(10^2+24^2)=26 N and tan(theta)=10/24=5/12.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-008",
    "section": "Physics",
    "topic": "Work, Energy and Power",
    "difficulty": "easy",
    "question": "A constant force of 12 N moves an object 5 m in its own direction. What work is done?",
    "options": [
      "60 J",
      "120 J",
      "17 J",
      "24 J"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Work W=Fs=12 x 5=60 J.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-009",
    "section": "Physics",
    "topic": "Work, Energy and Power",
    "difficulty": "medium",
    "question": "A 2 kg body moving at 5 m/s is brought to rest. What is the magnitude of the work done by the retarding force?",
    "options": [
      "10 J",
      "25 J",
      "5 J",
      "50 J"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The loss of kinetic energy is (1/2)mv^2 = 0.5 x 2 x 25 = 25 J.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-010",
    "section": "Physics",
    "topic": "System of Particles and Rotational Motion",
    "difficulty": "medium",
    "question": "Two particles of masses 2 kg and 3 kg are at x=0 m and x=10 m respectively. Where is their centre of mass on the x-axis?",
    "options": [
      "4 m",
      "8 m",
      "6 m",
      "5 m"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "x_cm=(2x0+3x10)/(2+3)=30/5=6 m.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-011",
    "section": "Physics",
    "topic": "System of Particles and Rotational Motion",
    "difficulty": "hard",
    "question": "A uniform disc of mass M and radius R rotates about its central axis with angular speed omega. Its rotational kinetic energy is",
    "options": [
      "(1/2)MR^2 omega^2",
      "(1/4)MR^2 omega^2",
      "MR^2 omega^2",
      "(1/8)MR^2 omega^2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a disc I=(1/2)MR^2, so K=(1/2)I omega^2=(1/4)MR^2 omega^2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-012",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "At a height equal to Earth's radius above the surface, the gravitational acceleration is what fraction of its surface value g?",
    "options": [
      "g/3",
      "g/8",
      "g/2",
      "g/4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The distance from Earth's centre is 2R, so g' = g(R/2R)^2 = g/4.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-013",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "A satellite moves in a circular orbit of radius r around a planet of mass M. Its orbital speed is",
    "options": [
      "GM/r",
      "sqrt(GMr)",
      "sqrt(GM/r)",
      "sqrt(2GM/r)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Centripetal acceleration v^2/r equals GM/r^2, giving v=sqrt(GM/r).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-014",
    "section": "Physics",
    "topic": "Mechanical Properties of Solids",
    "difficulty": "medium",
    "question": "A wire of length 2 m and cross-sectional area 1 mm^2 elongates by 1 mm under a force of 100 N. What is its Young modulus?",
    "options": [
      "2 x 10^8 Pa",
      "1 x 10^11 Pa",
      "5 x 10^10 Pa",
      "2 x 10^11 Pa"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Y=(F/A)/(Delta L/L)=FL/(A Delta L)=100x2/(10^-6 x 10^-3)=2x10^11 Pa.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-015",
    "section": "Physics",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "medium",
    "question": "Water flows through a pipe whose cross-sectional area narrows from 6 cm^2 to 2 cm^2. If the speed in the wider part is 1 m/s, what is the speed in the narrow part?",
    "options": [
      "2 m/s",
      "3 m/s",
      "1/3 m/s",
      "6 m/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Continuity gives A1v1=A2v2, so v2=(6/2)x1=3 m/s.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-016",
    "section": "Physics",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "hard",
    "question": "A small sphere falling through a viscous liquid reaches terminal speed v. If its radius is doubled while all other relevant quantities remain unchanged and Stokes law applies, its terminal speed becomes",
    "options": [
      "v/2",
      "2v",
      "8v",
      "4v"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Under Stokes law, terminal speed is proportional to r^2, so doubling r makes it 4v.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-017",
    "section": "Physics",
    "topic": "Thermal Properties of Matter",
    "difficulty": "easy",
    "question": "How much heat is needed to raise the temperature of 0.5 kg of water by 10 K? Take specific heat of water as 4200 J kg^-1 K^-1.",
    "options": [
      "21000 J",
      "2100 J",
      "4200 J",
      "42000 J"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Q=mc Delta T=0.5 x 4200 x 10=21000 J.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-018",
    "section": "Physics",
    "topic": "Thermal Properties of Matter",
    "difficulty": "medium",
    "question": "A brass rod of length 1 m has linear expansion coefficient 2 x 10^-5 K^-1. What increase in length occurs for a 50 K rise in temperature?",
    "options": [
      "10 mm",
      "2 mm",
      "0.1 mm",
      "1 mm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Delta L=alpha L Delta T=2x10^-5 x 1 x 50=10^-3 m=1 mm.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-019",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "An ideal gas absorbs 500 J of heat and does 200 J of work. What is the increase in its internal energy?",
    "options": [
      "500 J",
      "700 J",
      "200 J",
      "300 J"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "First law: Delta U=Q-W=500-200=300 J.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-020",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "hard",
    "question": "One mole of a monatomic ideal gas is heated at constant volume through 40 K. What is the heat supplied? Take R=8.3 J mol^-1 K^-1.",
    "options": [
      "664 J",
      "498 J",
      "996 J",
      "332 J"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At constant volume Q=nCv Delta T=1 x (3R/2) x 40=60R=498 J.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-021",
    "section": "Physics",
    "topic": "Kinetic Theory",
    "difficulty": "medium",
    "question": "If the absolute temperature of an ideal gas is quadrupled, its rms molecular speed becomes",
    "options": [
      "half",
      "eight times",
      "twice",
      "four times"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "v_rms is proportional to sqrt(T), so quadrupling T doubles the rms speed.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-022",
    "section": "Physics",
    "topic": "Oscillations",
    "difficulty": "medium",
    "question": "A particle in SHM has amplitude 5 cm and angular frequency 4 rad/s. What is its maximum speed?",
    "options": [
      "20 m/s",
      "0.20 m/s",
      "0.80 m/s",
      "0.05 m/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "vmax=omega A=4 x 0.05=0.20 m/s.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-023",
    "section": "Physics",
    "topic": "Oscillations",
    "difficulty": "hard",
    "question": "For a particle in SHM, its speed at displacement x=A/2 is what fraction of its maximum speed?",
    "options": [
      "1/2",
      "3/4",
      "1/sqrt(2)",
      "sqrt(3)/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "v=omega sqrt(A^2-x^2). At x=A/2, v/vmax=sqrt(1-1/4)=sqrt(3)/2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-024",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "easy",
    "question": "A wave has frequency 250 Hz and wavelength 1.2 m. What is its speed?",
    "options": [
      "450 m/s",
      "208 m/s",
      "300 m/s",
      "250 m/s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Wave speed v=f lambda=250 x 1.2=300 m/s.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-025",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "medium",
    "question": "Two tuning forks of frequencies 256 Hz and 260 Hz are sounded together. What beat frequency is heard?",
    "options": [
      "4 Hz",
      "516 Hz",
      "2 Hz",
      "8 Hz"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Beat frequency is the absolute frequency difference, 260-256=4 Hz.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-026",
    "section": "Physics",
    "topic": "Electric Charges and Fields",
    "difficulty": "easy",
    "question": "Two point charges +q and +q are separated by distance r. If the separation is doubled, the electrostatic force becomes",
    "options": [
      "twice",
      "one-half",
      "one-fourth",
      "four times"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Coulomb force varies as 1/r^2, so doubling r reduces force to one-fourth.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-027",
    "section": "Physics",
    "topic": "Electric Charges and Fields",
    "difficulty": "medium",
    "question": "At a point 0.30 m from a +2 microC point charge in vacuum, what is the electric field magnitude? Take k=9 x 10^9 N m^2 C^-2.",
    "options": [
      "6 x 10^5 N/C",
      "2 x 10^5 N/C",
      "2 x 10^4 N/C",
      "6 x 10^4 N/C"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "E=kq/r^2=9x10^9 x 2x10^-6 /0.09=2x10^5 N/C.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-028",
    "section": "Physics",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "medium",
    "question": "What is the capacitance of a parallel plate capacitor with plate area A, separation d and dielectric constant K fully filling the gap?",
    "options": [
      "K epsilon0 d/A",
      "epsilon0 A/(Kd)",
      "K epsilon0 A/d",
      "epsilon0 d/(KA)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A dielectric fully filling the gap multiplies the vacuum capacitance epsilon0 A/d by K.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-029",
    "section": "Physics",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "hard",
    "question": "Two capacitors 3 microF and 6 microF are connected in series across 18 V. What charge is stored on each capacitor?",
    "options": [
      "108 microC",
      "36 microC",
      "54 microC",
      "18 microC"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Series equivalent is (3x6)/(3+6)=2 microF. Charge Q=Ceq V=2 x 18=36 microC, same on each capacitor.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-030",
    "section": "Physics",
    "topic": "Electrostatic Potential and Capacitance",
    "difficulty": "medium",
    "question": "A 4 microF capacitor is charged to 100 V. What energy is stored?",
    "options": [
      "0.20 J",
      "0.010 J",
      "0.020 J",
      "0.040 J"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "U=(1/2)CV^2=0.5 x 4x10^-6 x 10^4=0.020 J.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-031",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "easy",
    "question": "A resistor of 12 ohm carries a current of 2 A. What potential difference is across it?",
    "options": [
      "6 V",
      "12 V",
      "48 V",
      "24 V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Ohm's law gives V=IR=2 x 12=24 V.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-032",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "Three resistors 2 ohm, 3 ohm and 6 ohm are connected in parallel. What is their equivalent resistance?",
    "options": [
      "3 ohm",
      "1 ohm",
      "2 ohm",
      "11 ohm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "1/Req=1/2+1/3+1/6=1, so Req=1 ohm.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-033",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "A cell of emf 6 V and internal resistance 1 ohm is connected to a 5 ohm resistor. What is the terminal voltage of the cell?",
    "options": [
      "6 V",
      "4 V",
      "1 V",
      "5 V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Current I=6/(5+1)=1 A. Terminal voltage=E-Ir=6-1=5 V.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-034",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "hard",
    "question": "A wire of resistance R is stretched uniformly to twice its original length without change in volume. Its new resistance is",
    "options": [
      "4R",
      "2R",
      "R/2",
      "8R"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "With constant volume, doubling length halves area. R is proportional to L/A, so the new resistance is 2/(1/2)=4 times R.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-035",
    "section": "Physics",
    "topic": "Moving Charges and Magnetism",
    "difficulty": "medium",
    "question": "A charge 2 microC moves at 3 x 10^6 m/s perpendicular to a 0.5 T magnetic field. What magnetic force acts on it?",
    "options": [
      "3 N",
      "0.3 N",
      "1.5 N",
      "6 N"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "F=qvB=2x10^-6 x 3x10^6 x 0.5=3 N.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-036",
    "section": "Physics",
    "topic": "Moving Charges and Magnetism",
    "difficulty": "hard",
    "question": "A proton enters a uniform magnetic field perpendicular to it with speed v and moves in a circle of radius r. If its speed becomes 2v in the same field, the radius becomes",
    "options": [
      "r/2",
      "4r",
      "r",
      "2r"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "r=mv/(qB), so doubling speed doubles the radius.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-037",
    "section": "Physics",
    "topic": "Moving Charges and Magnetism",
    "difficulty": "medium",
    "question": "A long straight wire carries 10 A. What is the magnetic field at 0.20 m from it? Take mu0=4pi x 10^-7 T m A^-1.",
    "options": [
      "5 x 10^-6 T",
      "2 x 10^-5 T",
      "1 x 10^-4 T",
      "1 x 10^-5 T"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "B=mu0 I/(2pi r)=4pi x10^-7 x10 /(2pi x0.20)=1x10^-5 T.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-038",
    "section": "Physics",
    "topic": "Magnetism and Matter",
    "difficulty": "easy",
    "question": "The magnetic field lines of a bar magnet outside the magnet are directed",
    "options": [
      "radially outward from both poles",
      "from north pole to south pole",
      "radially inward to both poles",
      "from south pole to north pole"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Outside a bar magnet, magnetic field lines emerge from the north pole and enter the south pole.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-039",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "medium",
    "question": "The magnetic flux through a 50-turn coil changes uniformly from 0.020 Wb to 0 in 0.10 s. What is the magnitude of the induced emf?",
    "options": [
      "10 V",
      "20 V",
      "1 V",
      "5 V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Magnitude of induced emf=N Delta Phi/Delta t=50 x 0.020/0.10=10 V.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-040",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "medium",
    "question": "An AC voltage has peak value 100 sqrt(2) V. What is its rms value?",
    "options": [
      "200 V",
      "100 sqrt(2) V",
      "50 V",
      "100 V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a sinusoidal voltage, Vrms=V0/sqrt(2)=100 V.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-041",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "hard",
    "question": "In a series LCR circuit at resonance, the impedance equals",
    "options": [
      "|XL-XC|",
      "sqrt(R^2+(XL+XC)^2)",
      "R",
      "XL+XC"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At resonance XL=XC, so the net reactance is zero and the impedance is R.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-042",
    "section": "Physics",
    "topic": "Electromagnetic Waves",
    "difficulty": "easy",
    "question": "Which electromagnetic radiation has the highest frequency among the following?",
    "options": [
      "Visible light",
      "X-rays",
      "Infrared",
      "Microwaves"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Among the listed regions, X-rays have the highest frequency.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-043",
    "section": "Physics",
    "topic": "Ray Optics and Optical Instruments",
    "difficulty": "medium",
    "question": "A convex lens of focal length 20 cm forms a real image of an object placed 60 cm from the lens. What is the image distance?",
    "options": [
      "30 cm",
      "15 cm",
      "40 cm",
      "20 cm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using 1/f=1/v-1/u with f=20 cm and u=-60 cm gives 1/v=1/20-1/60=1/30, so v=30 cm.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-044",
    "section": "Physics",
    "topic": "Ray Optics and Optical Instruments",
    "difficulty": "hard",
    "question": "A prism has refracting angle 60 degrees and minimum deviation 40 degrees. What is its refractive index?",
    "options": [
      "sin50 degrees/sin30 degrees",
      "sin30 degrees/sin50 degrees",
      "sin40 degrees/sin30 degrees",
      "sin60 degrees/sin20 degrees"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At minimum deviation, n=sin[(A+Dm)/2]/sin(A/2)=sin50/sin30.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-045",
    "section": "Physics",
    "topic": "Ray Optics and Optical Instruments",
    "difficulty": "medium",
    "question": "The critical angle for a glass-air interface is 42 degrees. Total internal reflection can occur for light going",
    "options": [
      "from glass to air with incidence angle less than 42 degrees",
      "from air to glass with incidence angle greater than 42 degrees",
      "from glass to air with incidence angle greater than 42 degrees",
      "from air to glass at any incidence angle"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Total internal reflection requires travel from denser to rarer medium and incidence angle greater than the critical angle.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-046",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "medium",
    "question": "In Young's double-slit experiment, slit separation is doubled while all other quantities remain unchanged. The fringe width becomes",
    "options": [
      "half",
      "double",
      "unchanged",
      "four times"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Fringe width beta=lambda D/d, so doubling d halves beta.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-047",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "hard",
    "question": "In Young's double-slit experiment, the two slits have intensities I and 4I. What is the ratio Imax:Imin?",
    "options": [
      "5:3",
      "25:1",
      "9:1",
      "4:1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Amplitudes are proportional to square roots of intensity, so they are in ratio 1:2. Thus Imax:Imin=(1+2)^2:(2-1)^2=9:1.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-048",
    "section": "Physics",
    "topic": "Dual Nature of Radiation and Matter",
    "difficulty": "medium",
    "question": "Light of frequency 8 x 10^14 Hz falls on a metal of threshold frequency 5 x 10^14 Hz. What is the maximum kinetic energy of emitted photoelectrons in terms of Planck constant h?",
    "options": [
      "13 x 10^14 h",
      "3 x 10^14 h",
      "5 x 10^14 h",
      "8 x 10^14 h"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Einstein equation gives Kmax=h(f-f0)=h(3x10^14).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-049",
    "section": "Physics",
    "topic": "Dual Nature of Radiation and Matter",
    "difficulty": "medium",
    "question": "If the momentum of a particle is doubled, its de Broglie wavelength becomes",
    "options": [
      "four times",
      "double",
      "half",
      "unchanged"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "de Broglie wavelength lambda=h/p, so doubling momentum halves lambda.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-050",
    "section": "Physics",
    "topic": "Atoms",
    "difficulty": "easy",
    "question": "In the Bohr model of hydrogen, the radius of the nth orbit is proportional to",
    "options": [
      "1/n^2",
      "1/n",
      "n^2",
      "n"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Bohr radius rn is proportional to n^2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-051",
    "section": "Physics",
    "topic": "Atoms",
    "difficulty": "medium",
    "question": "A hydrogen atom makes a transition from n=4 to n=2. This emitted photon belongs to which spectral series?",
    "options": [
      "Balmer series",
      "Lyman series",
      "Brackett series",
      "Paschen series"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Transitions ending at n=2 form the Balmer series.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-052",
    "section": "Physics",
    "topic": "Nuclei",
    "difficulty": "medium",
    "question": "A radioactive sample has half-life 6 h. What fraction remains undecayed after 18 h?",
    "options": [
      "1/9",
      "1/6",
      "1/3",
      "1/8"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "18 h is three half-lives, so remaining fraction=(1/2)^3=1/8.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-053",
    "section": "Physics",
    "topic": "Nuclei",
    "difficulty": "medium",
    "question": "The binding energy per nucleon is generally greatest for nuclei near",
    "options": [
      "uranium",
      "hydrogen",
      "iron",
      "helium only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The binding energy per nucleon curve peaks near the iron region, explaining energy release in both light-nucleus fusion and heavy-nucleus fission.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-054",
    "section": "Physics",
    "topic": "Semiconductor Electronics",
    "difficulty": "easy",
    "question": "In an intrinsic semiconductor at room temperature, the number density of free electrons is",
    "options": [
      "zero",
      "greater than the hole density",
      "equal to the number density of holes",
      "less than the hole density"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Thermal generation creates electron-hole pairs, so intrinsic electron and hole densities are equal.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-055",
    "section": "Physics",
    "topic": "Semiconductor Electronics",
    "difficulty": "medium",
    "question": "A silicon diode is forward biased. Compared with reverse bias, its depletion layer width is generally",
    "options": [
      "unchanged",
      "larger",
      "infinite",
      "smaller"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Forward bias lowers the junction barrier and narrows the depletion layer.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-056",
    "section": "Physics",
    "topic": "Semiconductor Electronics",
    "difficulty": "medium",
    "question": "Two nearby points on the forward-bias I-V characteristic of a diode are (0.62 V, 2 mA) and (0.68 V, 14 mA). If the characteristic is approximated as a straight line between these points, what is the ratio Delta I/Delta V over this interval?",
    "options": [
      "0.20 A/V",
      "5.0 A/V",
      "0.020 A/V",
      "200 A/V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The current change is 14 mA - 2 mA = 12 mA = 0.012 A, while the voltage change is 0.68 V - 0.62 V = 0.06 V. Therefore Delta I/Delta V = 0.012/0.06 = 0.20 A/V.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-057",
    "section": "Physics",
    "topic": "Units and Measurements",
    "difficulty": "medium",
    "question": "If Q = A^2 B^3/C and the percentage uncertainties in A, B and C are 1%, 2% and 3% respectively, what is the maximum percentage uncertainty in Q?",
    "options": [
      "11%",
      "8%",
      "9%",
      "6%"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For products and powers, maximum percentage uncertainties add: 2(1)+3(2)+1(3)=11%.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-058",
    "section": "Physics",
    "topic": "Motion in a Straight Line",
    "difficulty": "medium",
    "question": "A particle has velocity v=4+2t in SI units. What displacement occurs from t=1 s to t=3 s?",
    "options": [
      "18 m",
      "20 m",
      "16 m",
      "12 m"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Displacement is integral from 1 to 3 of (4+2t)dt = [4t+t^2]_1^3 =21-5=16 m.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-059",
    "section": "Physics",
    "topic": "Work, Energy and Power",
    "difficulty": "hard",
    "question": "A 1 kg block moving at 6 m/s compresses a spring of force constant 200 N/m on a frictionless surface. What is the maximum compression?",
    "options": [
      "sqrt(0.18) m",
      "0.30 m",
      "0.18 m",
      "sqrt(0.36) m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Energy conservation gives 0.5 x1x36=0.5 x200 x x^2, so x^2=0.18 and x=sqrt(0.18) m.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-060",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "A 100 W, 200 V lamp is operated at its rated voltage. What current does it draw?",
    "options": [
      "50 A",
      "0.5 A",
      "20 A",
      "2 A"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "P=VI, so I=P/V=100/200=0.5 A.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-061",
    "section": "Chemistry",
    "topic": "Some Basic Concepts of Chemistry",
    "difficulty": "easy",
    "question": "How many moles are present in 18 g of water, H2O? Take molar mass as 18 g/mol.",
    "options": [
      "1 mol",
      "18 mol",
      "0.5 mol",
      "2 mol"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Number of moles=mass/molar mass=18/18=1 mol.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-062",
    "section": "Chemistry",
    "topic": "Some Basic Concepts of Chemistry",
    "difficulty": "medium",
    "question": "What mass of NaOH is present in 250 mL of a 0.40 M solution? Molar mass of NaOH is 40 g/mol.",
    "options": [
      "10 g",
      "40 g",
      "1.0 g",
      "4.0 g"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Moles=M x V=0.40 x0.250=0.100 mol. Mass=0.100x40=4.0 g.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-063",
    "section": "Chemistry",
    "topic": "Some Basic Concepts of Chemistry",
    "difficulty": "medium",
    "question": "For the reaction 2H2 + O2 -> 2H2O, how many moles of H2O form when 3 mol H2 reacts with excess O2?",
    "options": [
      "6 mol",
      "3 mol",
      "1.5 mol",
      "2 mol"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The stoichiometric ratio H2:H2O is 1:1, so 3 mol H2 yields 3 mol H2O.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-064",
    "section": "Chemistry",
    "topic": "Structure of Atom",
    "difficulty": "easy",
    "question": "The maximum number of electrons that can occupy a p subshell is",
    "options": [
      "2",
      "10",
      "14",
      "6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A p subshell has three orbitals and each orbital can hold two electrons, so the maximum is 6.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-065",
    "section": "Chemistry",
    "topic": "Structure of Atom",
    "difficulty": "medium",
    "question": "Which set of quantum numbers is allowed for an electron?",
    "options": [
      "n=3, l=1, m=2, s=-1/2",
      "n=3, l=2, m=1, s=+1/2",
      "n=2, l=2, m=0, s=+1/2",
      "n=1, l=0, m=0, s=+1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For n=3, l can be 0,1,2; for l=2, m can be -2 to +2; spin is plus or minus 1/2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-066",
    "section": "Chemistry",
    "topic": "Structure of Atom",
    "difficulty": "medium",
    "question": "Which electronic transition in hydrogen emits the photon of greatest energy?",
    "options": [
      "n=2 to n=1",
      "n=3 to n=2",
      "n=4 to n=1",
      "n=4 to n=3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Photon energy equals the energy-level difference. Among the listed transitions, n=4 to n=1 has the largest drop.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-067",
    "section": "Chemistry",
    "topic": "Classification of Elements and Periodicity",
    "difficulty": "easy",
    "question": "Across a period from left to right, atomic radius generally",
    "options": [
      "remains constant",
      "increases",
      "decreases",
      "first becomes infinite"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Effective nuclear charge generally increases across a period, pulling electrons closer and decreasing atomic radius.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-068",
    "section": "Chemistry",
    "topic": "Classification of Elements and Periodicity",
    "difficulty": "medium",
    "question": "Which element has the highest first ionisation enthalpy among Na, Mg, Al and Si?",
    "options": [
      "Si",
      "Al",
      "Na",
      "Mg"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Across this part of Period 3, ionisation enthalpy generally rises, with the Mg-Al anomaly. Si is highest among these four.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-069",
    "section": "Chemistry",
    "topic": "Chemical Bonding and Molecular Structure",
    "difficulty": "easy",
    "question": "The shape of CH4 is",
    "options": [
      "bent",
      "square planar",
      "trigonal planar",
      "tetrahedral"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Carbon in methane forms four equivalent bond pairs and no lone pair, giving tetrahedral geometry.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-070",
    "section": "Chemistry",
    "topic": "Chemical Bonding and Molecular Structure",
    "difficulty": "medium",
    "question": "What is the hybridisation of the central atom in BF3?",
    "options": [
      "dsp2",
      "sp3",
      "sp",
      "sp2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Boron has three sigma-bonding domains and no lone pair in BF3, corresponding to sp2 hybridisation.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-071",
    "section": "Chemistry",
    "topic": "Chemical Bonding and Molecular Structure",
    "difficulty": "medium",
    "question": "Which molecule is polar?",
    "options": [
      "BF3",
      "CCl4",
      "NH3",
      "CO2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "NH3 is trigonal pyramidal and its bond dipoles do not cancel; the other listed symmetric molecules have zero net dipole.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-072",
    "section": "Chemistry",
    "topic": "Chemical Bonding and Molecular Structure",
    "difficulty": "hard",
    "question": "According to molecular orbital theory, the bond order of O2 is",
    "options": [
      "3",
      "2.5",
      "1",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For O2, bond order=(bonding electrons-antibonding electrons)/2=2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-073",
    "section": "Chemistry",
    "topic": "Organic Chemistry Basic Principles",
    "difficulty": "medium",
    "question": "A mixture of two miscible liquids having close boiling points is best separated by",
    "options": [
      "sublimation",
      "crystallisation",
      "fractional distillation",
      "simple filtration"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Fractional distillation repeatedly enriches the vapour in the more volatile component and is suited to miscible liquids with close boiling points.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-074",
    "section": "Chemistry",
    "topic": "Organic Chemistry Basic Principles",
    "difficulty": "hard",
    "question": "On complete combustion, 0.30 g of an organic compound gives 0.44 g of CO2. What is the mass percentage of carbon in the compound?",
    "options": [
      "80%",
      "60%",
      "40%",
      "20%"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The carbon mass in 0.44 g CO2 is 0.44x(12/44)=0.12 g. Hence percentage carbon=(0.12/0.30)x100=40%.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-075",
    "section": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "easy",
    "question": "For an exothermic reaction, the enthalpy change Delta H is",
    "options": [
      "positive",
      "negative",
      "equal to activation energy",
      "zero in every case"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "An exothermic process releases heat at constant pressure, so products have lower enthalpy and Delta H is negative.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-076",
    "section": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "If Delta U=100 kJ and the system does 20 kJ of pressure-volume work, what heat is absorbed by the system?",
    "options": [
      "120 kJ",
      "100 kJ",
      "20 kJ",
      "80 kJ"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using Delta U=q+w with work on system w=-20 kJ, q=Delta U-w=100-(-20)=120 kJ.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-077",
    "section": "Chemistry",
    "topic": "Equilibrium",
    "difficulty": "easy",
    "question": "For a reaction at equilibrium, the forward and reverse reaction rates are",
    "options": [
      "forward rate greater",
      "both zero",
      "equal",
      "reverse rate greater"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Dynamic equilibrium means forward and reverse reactions continue at equal rates.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-078",
    "section": "Chemistry",
    "topic": "Equilibrium",
    "difficulty": "medium",
    "question": "The pH of a 1.0 x 10^-3 M HCl solution, assuming complete ionisation, is",
    "options": [
      "1",
      "7",
      "11",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For strong HCl, [H+]=10^-3 M, so pH=-log10(10^-3)=3.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-079",
    "section": "Chemistry",
    "topic": "Equilibrium",
    "difficulty": "hard",
    "question": "For N2(g)+3H2(g) <-> 2NH3(g), increasing pressure at constant temperature shifts equilibrium",
    "options": [
      "only if a catalyst is added",
      "towards NH3",
      "in no direction",
      "towards N2 and H2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The product side has fewer gas moles, so higher pressure favours the side with fewer gaseous molecules, namely NH3.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-080",
    "section": "Chemistry",
    "topic": "Redox Reactions",
    "difficulty": "medium",
    "question": "In the reaction Zn + Cu2+ -> Zn2+ + Cu, the reducing agent is",
    "options": [
      "Zn",
      "Zn2+",
      "Cu",
      "Cu2+"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Zn is oxidised from 0 to +2 and therefore reduces Cu2+, so Zn is the reducing agent.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-081",
    "section": "Chemistry",
    "topic": "Organic Chemistry Basic Principles",
    "difficulty": "medium",
    "question": "Heterolytic cleavage of the C-Br bond in an alkyl bromide produces",
    "options": [
      "a carbanion and Br+",
      "two carbon-centred radicals",
      "a carbocation and Br-",
      "only neutral atoms"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "In heterolytic fission, both bonding electrons go to the more electronegative bromine atom, producing Br- and a carbocation.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-082",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "easy",
    "question": "The carbon atoms in ethyne are",
    "options": [
      "sp hybridised",
      "sp3 hybridised",
      "unhybridised",
      "sp2 hybridised"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Each carbon in ethyne forms two sigma bonds in a linear arrangement, so it uses sp hybrid orbitals.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-083",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "medium",
    "question": "The nitrating mixture used for electrophilic substitution of benzene contains concentrated",
    "options": [
      "HNO3 and H2SO4",
      "HNO3 and NaOH",
      "H2SO4 and HCl",
      "HCl and HNO3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Concentrated sulfuric acid protonates nitric acid to generate the nitronium ion, NO2+, the electrophile in benzene nitration.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-084",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "hard",
    "question": "Benzene is much less prone than ethene to ordinary addition reactions mainly because addition to benzene would",
    "options": [
      "increase aromatic stabilisation",
      "create an additional benzene ring",
      "destroy aromatic stabilisation",
      "leave the pi system completely unchanged"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Benzene gains substantial aromatic stabilisation from its delocalised pi system. An addition reaction would disrupt that aromaticity, so substitution is generally favoured.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-085",
    "section": "Chemistry",
    "topic": "Organic Chemistry Basic Principles",
    "difficulty": "easy",
    "question": "The IUPAC name of CH3CH2OH is",
    "options": [
      "methanol",
      "ethanoic acid",
      "ethanal",
      "ethanol"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "CH3CH2OH is the two-carbon alcohol ethanol.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-086",
    "section": "Chemistry",
    "topic": "Organic Chemistry Basic Principles",
    "difficulty": "medium",
    "question": "Which carbocation is most stable?",
    "options": [
      "methyl carbocation",
      "ethyl carbocation",
      "isopropyl carbocation",
      "tert-butyl carbocation"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Greater alkyl substitution stabilises carbocations by hyperconjugation and +I effect; tertiary is most stable among these.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-087",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "medium",
    "question": "Ethene reacts with H2 in the presence of Ni catalyst to form",
    "options": [
      "ethyne",
      "ethanol",
      "ethane",
      "methane"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Catalytic hydrogenation adds H2 across the C=C bond, converting ethene to ethane.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-088",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "hard",
    "question": "Major product of adding HBr to propene in the absence of peroxide is",
    "options": [
      "propan-1-ol",
      "1-bromopropane",
      "1,2-dibromopropane",
      "2-bromopropane"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Normal HBr addition follows Markovnikov orientation, producing the more stable secondary carbocation intermediate and 2-bromopropane.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-089",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "easy",
    "question": "An ideal solution obeys Raoult’s law",
    "options": [
      "only when the solute is ionic",
      "only at its boiling point",
      "over the entire composition range",
      "only at infinite dilution"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For an ideal solution, each volatile component follows Raoult’s law throughout the full composition range.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-090",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "medium",
    "question": "If CaCl2 dissociates completely into Ca2+ and Cl- ions in a very dilute solution, its ideal van’t Hoff factor is",
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "One formula unit of CaCl2 gives one Ca2+ and two Cl- ions, so the ideal particle count triples and i=3.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-091",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "medium",
    "question": "A solution is prepared by dissolving 4 g of NaOH (molar mass 40 g/mol) in 2 kg of water. What is the molality of the solution?",
    "options": [
      "0.05 mol/kg",
      "0.1 mol/kg",
      "0.02 mol/kg",
      "0.5 mol/kg"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Moles of NaOH=4/40=0.1 mol. Molality=0.1 mol / 2 kg=0.05 mol/kg.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-092",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "hard",
    "question": "For a dilute solution of a non-volatile solute, the relative lowering of vapour pressure is equal to the",
    "options": [
      "mole fraction of solute",
      "molarity of solute",
      "mole fraction of solvent",
      "mass fraction of solvent"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Raoult law gives (p0-p)/p0=x_solute for an ideal dilute solution with non-volatile solute.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-093",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "medium",
    "question": "For the galvanic cell Zn|Zn2+||Cu2+|Cu, electrons flow through the external circuit from",
    "options": [
      "Cu2+ to Zn2+",
      "Cu to Zn",
      "salt bridge to Zn",
      "Zn to Cu"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Zn is oxidised at the anode, releasing electrons that flow externally to the copper cathode.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-094",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "medium",
    "question": "If E°cathode=+0.34 V and E°anode=-0.76 V as reduction potentials, the standard cell potential is",
    "options": [
      "-1.10 V",
      "1.10 V",
      "-0.42 V",
      "0.42 V"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "E°cell=E°cathode-E°anode=0.34-(-0.76)=1.10 V.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-095",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "easy",
    "question": "For a first-order reaction, the unit of rate constant is",
    "options": [
      "s^-1",
      "L mol^-1 s^-1",
      "mol L^-1 s^-1",
      "mol^-1 L s^-1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For first order, rate=k[A], so k has dimensions time^-1.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-096",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "medium",
    "question": "A first-order reaction has half-life 20 min. What fraction of reactant remains after 60 min?",
    "options": [
      "1/16",
      "1/2",
      "1/4",
      "1/8"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "60 min equals three half-lives, so fraction remaining=(1/2)^3=1/8.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-097",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "medium",
    "question": "The main function of a salt bridge in a galvanic cell is to",
    "options": [
      "stop ion migration completely",
      "supply electrons to the cathode",
      "maintain electrical neutrality in the half-cells",
      "increase the standard electrode potentials"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Ions from the salt bridge migrate to prevent charge build-up in the two half-cells, maintaining electrical neutrality while the cell operates.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-098",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "medium",
    "question": "If the rate constant of a reaction has units L mol^-1 s^-1, the overall order of the reaction is",
    "options": [
      "2",
      "3",
      "1",
      "0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For an nth-order reaction, units of k are (concentration)^(1-n) time^-1. L mol^-1 s^-1 corresponds to concentration^-1 time^-1, so n=2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-099",
    "section": "Chemistry",
    "topic": "The d- and f-Block Elements",
    "difficulty": "easy",
    "question": "Which species is typically coloured due to d-d transitions?",
    "options": [
      "Ca2+",
      "Cu2+",
      "Sc3+",
      "Zn2+"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Cu2+ has an incomplete d subshell and commonly shows d-d transitions; Zn2+ and Sc3+ are d10 and d0 respectively.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-100",
    "section": "Chemistry",
    "topic": "The d- and f-Block Elements",
    "difficulty": "medium",
    "question": "The common oxidation state of lanthanoids is",
    "options": [
      "+6",
      "+1",
      "+3",
      "+2 only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The +3 oxidation state is the most characteristic and common for lanthanoids.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-101",
    "section": "Chemistry",
    "topic": "Coordination Compounds",
    "difficulty": "easy",
    "question": "The coordination number of Co in [Co(NH3)6]3+ is",
    "options": [
      "3",
      "4",
      "9",
      "6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Six monodentate NH3 ligands are directly bonded to Co, so the coordination number is 6.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-102",
    "section": "Chemistry",
    "topic": "Coordination Compounds",
    "difficulty": "medium",
    "question": "The oxidation state of Fe in [Fe(CN)6]4- is",
    "options": [
      "+4",
      "+1",
      "+2",
      "+3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Let Fe oxidation state be x. x+6(-1)=-4, so x=+2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-103",
    "section": "Chemistry",
    "topic": "Coordination Compounds",
    "difficulty": "medium",
    "question": "Which complex can show geometrical isomerism?",
    "options": [
      "[Ag(NH3)2]+",
      "[Pt(NH3)2Cl2]",
      "[Zn(NH3)4]2+",
      "[Co(NH3)6]3+"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Square-planar [Pt(NH3)2Cl2] can exist as cis and trans isomers.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-104",
    "section": "Chemistry",
    "topic": "Haloalkanes and Haloarenes",
    "difficulty": "medium",
    "question": "Which haloalkane reacts fastest by the SN1 mechanism under comparable conditions?",
    "options": [
      "ethyl chloride",
      "n-propyl chloride",
      "tert-butyl chloride",
      "methyl chloride"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "SN1 rate depends on carbocation stability, and tert-butyl chloride forms a tertiary carbocation.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-105",
    "section": "Chemistry",
    "topic": "Haloalkanes and Haloarenes",
    "difficulty": "hard",
    "question": "Chlorobenzene is less reactive than chloroethane towards nucleophilic substitution mainly because",
    "options": [
      "the C-Cl bond in chlorobenzene has partial double-bond character",
      "benzene ring is non-polar in every bond",
      "chloroethane has aromatic resonance",
      "chlorine is absent in chlorobenzene"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Resonance in chlorobenzene gives the C-Cl bond partial double-bond character, making it shorter and harder to break.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-106",
    "section": "Chemistry",
    "topic": "Alcohols, Phenols and Ethers",
    "difficulty": "easy",
    "question": "Phenol is more acidic than ethanol because the phenoxide ion is",
    "options": [
      "less electronegative",
      "unable to solvate",
      "sp3 hybridised at oxygen",
      "resonance stabilised"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The phenoxide conjugate base is resonance stabilised over the aromatic ring, making phenol more acidic than ethanol.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-107",
    "section": "Chemistry",
    "topic": "Alcohols, Phenols and Ethers",
    "difficulty": "medium",
    "question": "On dehydration with concentrated H2SO4 at suitable temperature, ethanol mainly gives",
    "options": [
      "methane",
      "ethene",
      "ethanoic acid",
      "ethanal"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Acid-catalysed dehydration removes water from ethanol, forming ethene under alkene-forming conditions.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-108",
    "section": "Chemistry",
    "topic": "Aldehydes, Ketones and Carboxylic Acids",
    "difficulty": "easy",
    "question": "Which compound gives a positive Tollens test?",
    "options": [
      "benzophenone",
      "ethanal",
      "propanone",
      "diethyl ether"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Aldehydes such as ethanal reduce Tollens reagent and give the silver mirror test; ordinary ketones and ethers do not.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-109",
    "section": "Chemistry",
    "topic": "Aldehydes, Ketones and Carboxylic Acids",
    "difficulty": "medium",
    "question": "The product of oxidation of ethanal under strong oxidising conditions is",
    "options": [
      "ethanoic acid",
      "ethanol",
      "ethene",
      "methanoic acid"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Aldehydes are readily oxidised to carboxylic acids with the same carbon skeleton, so ethanal gives ethanoic acid.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-110",
    "section": "Chemistry",
    "topic": "Amines",
    "difficulty": "medium",
    "question": "Aniline is less basic than ethylamine mainly because in aniline the nitrogen lone pair is",
    "options": [
      "absent",
      "on a positively charged nitrogen",
      "held by hydrogen bonding only",
      "delocalised into the benzene ring"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Resonance delocalises the lone pair into the aromatic ring, reducing its availability for protonation.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-111",
    "section": "Chemistry",
    "topic": "Amines",
    "difficulty": "hard",
    "question": "Benzenediazonium chloride is prepared from aniline using NaNO2 and HCl most safely at",
    "options": [
      "0 to 5 deg C",
      "above 100 deg C",
      "60 to 70 deg C",
      "25 to 30 deg C"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Aryl diazonium salts are prepared and kept at low temperature, typically 0 to 5 deg C, because they decompose on warming.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-112",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "easy",
    "question": "Which is a reducing sugar?",
    "options": [
      "starch",
      "glucose",
      "cellulose",
      "sucrose"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Glucose has a free anomeric carbon in solution and behaves as a reducing sugar; sucrose is non-reducing.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-113",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "medium",
    "question": "The linkage joining amino acids in proteins is called",
    "options": [
      "phosphodiester bond",
      "hydrogen bond only",
      "peptide bond",
      "glycosidic bond"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A peptide bond is the amide linkage formed between the carboxyl group of one amino acid and the amino group of another.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-114",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "easy",
    "question": "Deficiency of vitamin C commonly causes",
    "options": [
      "scurvy",
      "beriberi",
      "rickets",
      "night blindness"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Vitamin C deficiency impairs collagen formation and causes scurvy.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-115",
    "section": "Chemistry",
    "topic": "Principles related to Practical Chemistry-II",
    "difficulty": "medium",
    "question": "When an ammonium salt is warmed with aqueous NaOH, the gas evolved is",
    "options": [
      "hydrogen",
      "carbon dioxide",
      "chlorine",
      "ammonia"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "NH4+ reacts with OH- on warming to release NH3 gas, a standard qualitative test for ammonium ions.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-116",
    "section": "Chemistry",
    "topic": "Principles related to Practical Chemistry-I",
    "difficulty": "medium",
    "question": "In Lassaigne’s test, sodium fusion is used primarily to",
    "options": [
      "remove all carbon as carbon dioxide",
      "neutralise every acidic functional group",
      "make every organic compound volatile",
      "convert covalently bound extra elements into water-soluble ionic sodium salts"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Sodium fusion converts covalently bound nitrogen, sulfur and halogens into ionic sodium salts that can be tested in aqueous solution.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-117",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "medium",
    "question": "Which colligative property is directly used in determining molar mass by osmometry?",
    "options": [
      "refractive index",
      "osmotic pressure",
      "surface tension",
      "viscosity"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Osmotic pressure is a colligative property and can be related to solute molarity through pi=CRT for dilute solutions.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-118",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "medium",
    "question": "In electrolysis of molten NaCl, the product at the cathode is",
    "options": [
      "sodium metal",
      "sodium hydroxide",
      "chlorine gas",
      "hydrogen gas"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Na+ ions are reduced at the cathode to sodium metal in molten NaCl.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-119",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "medium",
    "question": "A catalyst increases reaction rate primarily by",
    "options": [
      "increasing product stability only",
      "providing a pathway with lower activation energy",
      "changing the equilibrium constant",
      "increasing the reaction enthalpy"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A catalyst offers an alternative pathway with lower activation energy; it does not change Delta G° or the equilibrium constant.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-120",
    "section": "Chemistry",
    "topic": "Alcohols, Phenols and Ethers",
    "difficulty": "medium",
    "question": "Phenol treated with CHCl3 and aqueous NaOH followed by acidification gives mainly",
    "options": [
      "o-hydroxybenzaldehyde",
      "anisole",
      "benzoic acid",
      "benzaldehyde"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The Reimer-Tiemann reaction introduces a formyl group mainly at the ortho position of phenol, giving salicylaldehyde after workup.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-121",
    "section": "Mathematics",
    "topic": "Sets",
    "difficulty": "easy",
    "question": "If A={1,2,3,4} and B={3,4,5}, then A intersection B is",
    "options": [
      "{1,2,5}",
      "{3,4,5}",
      "{1,2}",
      "{3,4}"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The common elements of A and B are 3 and 4.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-122",
    "section": "Mathematics",
    "topic": "Relations and Functions",
    "difficulty": "medium",
    "question": "Let f(x)=2x-3. If f(a)=7, then a equals",
    "options": [
      "7",
      "2",
      "5",
      "10"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "2a-3=7 gives 2a=10, so a=5.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-123",
    "section": "Mathematics",
    "topic": "Relations and Functions",
    "difficulty": "medium",
    "question": "The domain of f(x)=1/sqrt(x-2) over the real numbers is",
    "options": [
      "[2,infinity)",
      "[0,infinity)",
      "(2,infinity)",
      "(-infinity,2)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The square root requires x-2>=0 and the denominator cannot be zero, so x>2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-124",
    "section": "Mathematics",
    "topic": "Trigonometric Functions",
    "difficulty": "easy",
    "question": "sin^2 theta + cos^2 theta equals",
    "options": [
      "cos 2theta",
      "1",
      "sin 2theta",
      "0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The fundamental Pythagorean identity is sin^2 theta+cos^2 theta=1.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-125",
    "section": "Mathematics",
    "topic": "Trigonometric Functions",
    "difficulty": "medium",
    "question": "If tan theta=3/4 for an acute angle theta, then sin theta is",
    "options": [
      "4/5",
      "3/5",
      "5/3",
      "3/4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A right triangle with opposite 3 and adjacent 4 has hypotenuse 5, so sin theta=3/5.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-126",
    "section": "Mathematics",
    "topic": "Trigonometric Functions",
    "difficulty": "hard",
    "question": "The value of sin 15 degrees is",
    "options": [
      "(sqrt(6)-sqrt(2))/4",
      "(sqrt(6)+sqrt(2))/4",
      "sqrt(3)/2",
      "(sqrt(3)-1)/2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "sin(45-30)=sin45 cos30-cos45 sin30=(sqrt6-sqrt2)/4.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-127",
    "section": "Mathematics",
    "topic": "Relations and Functions",
    "difficulty": "medium",
    "question": "If set A has 4 elements and set B has 3 elements, then the number of ordered pairs in A x B is",
    "options": [
      "16",
      "12",
      "64",
      "7"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The Cartesian product A x B contains |A||B| ordered pairs, so 4x3=12.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-128",
    "section": "Mathematics",
    "topic": "Complex Numbers and Quadratic Equations",
    "difficulty": "easy",
    "question": "i^23 equals",
    "options": [
      "1",
      "-i",
      "i",
      "-1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Powers of i repeat every 4. Since 23 mod 4=3, i^23=i^3=-i.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-129",
    "section": "Mathematics",
    "topic": "Complex Numbers and Quadratic Equations",
    "difficulty": "medium",
    "question": "If z=1+i, then z times its complex conjugate equals",
    "options": [
      "2",
      "0",
      "sqrt(2)",
      "1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "z zbar=|z|^2=1^2+1^2=2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-130",
    "section": "Mathematics",
    "topic": "Complex Numbers and Quadratic Equations",
    "difficulty": "medium",
    "question": "The roots of x^2-5x+6=0 are",
    "options": [
      "-1 and -6",
      "-2 and -3",
      "1 and 6",
      "2 and 3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "x^2-5x+6=(x-2)(x-3), so roots are 2 and 3.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-131",
    "section": "Mathematics",
    "topic": "Complex Numbers and Quadratic Equations",
    "difficulty": "hard",
    "question": "For x^2+kx+9=0 to have equal real roots, k must satisfy",
    "options": [
      "k=6 or k=-6",
      "k=3 only",
      "k=0",
      "k=9 or -9"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Equal roots require discriminant k^2-36=0, so k=plus or minus 6.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-132",
    "section": "Mathematics",
    "topic": "Linear Inequalities",
    "difficulty": "medium",
    "question": "The solution of 3x-5>7 is",
    "options": [
      "x>2/3",
      "x<4",
      "x<2/3",
      "x>4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "3x>12, hence x>4.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-133",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "medium",
    "question": "How many 3-letter arrangements can be made from A,B,C,D without repetition?",
    "options": [
      "12",
      "4",
      "24",
      "64"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The number is 4P3=4x3x2=24.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-134",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "hard",
    "question": "In how many ways can 5 students sit in a row if two particular students must sit together?",
    "options": [
      "48",
      "120",
      "60",
      "24"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Treat the two particular students as one block: 4! arrangements of blocks and 2! internal orders, giving 48.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-135",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "easy",
    "question": "The coefficient of x^2 in (1+x)^5 is",
    "options": [
      "25",
      "10",
      "5",
      "20"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Coefficient is C(5,2)=10.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-136",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "medium",
    "question": "The middle term of (a+b)^6 is the",
    "options": [
      "4th term",
      "6th term",
      "5th term",
      "3rd term"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "There are 7 terms; the single middle term is the 4th.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-137",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "easy",
    "question": "The 10th term of the AP 3,7,11,... is",
    "options": [
      "39",
      "40",
      "43",
      "35"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "a10=a+9d=3+9x4=39.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-138",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "medium",
    "question": "The sum of the first 20 natural numbers is",
    "options": [
      "200",
      "220",
      "190",
      "210"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "S20=20x21/2=210.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-139",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "hard",
    "question": "If 2, x, 18 are consecutive terms of a geometric progression with positive x, then x is",
    "options": [
      "8",
      "4",
      "6",
      "9"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For consecutive GP terms, x^2=2x18=36, so positive x=6.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-140",
    "section": "Mathematics",
    "topic": "Straight Lines",
    "difficulty": "easy",
    "question": "The slope of the line 2x+3y=6 is",
    "options": [
      "2/3",
      "3/2",
      "-3/2",
      "-2/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Writing y=-(2/3)x+2 gives slope -2/3.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-141",
    "section": "Mathematics",
    "topic": "Straight Lines",
    "difficulty": "medium",
    "question": "The distance between points (1,2) and (4,6) is",
    "options": [
      "4",
      "7",
      "3",
      "5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Distance=sqrt((4-1)^2+(6-2)^2)=sqrt(9+16)=5.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-142",
    "section": "Mathematics",
    "topic": "Straight Lines",
    "difficulty": "hard",
    "question": "The equation of the line through (2,-1) perpendicular to 3x-4y+5=0 is",
    "options": [
      "4x+3y-5=0",
      "3x-4y-10=0",
      "3x+4y-2=0",
      "4x-3y-11=0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Given line has slope 3/4, so perpendicular slope is -4/3. Through (2,-1): y+1=(-4/3)(x-2), giving 4x+3y-5=0.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-143",
    "section": "Mathematics",
    "topic": "Conic Sections",
    "difficulty": "easy",
    "question": "The eccentricity of a parabola is",
    "options": [
      "0",
      "less than 1",
      "1",
      "greater than 1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By definition, a parabola has eccentricity 1.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-144",
    "section": "Mathematics",
    "topic": "Conic Sections",
    "difficulty": "medium",
    "question": "For the circle x^2+y^2-6x+4y-3=0, the centre is",
    "options": [
      "(3,-2)",
      "(-3,2)",
      "(3,2)",
      "(6,-4)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Completing squares gives (x-3)^2+(y+2)^2=16, so centre (3,-2).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-145",
    "section": "Mathematics",
    "topic": "Introduction to Three Dimensional Geometry",
    "difficulty": "medium",
    "question": "A point P=(0,0,z) on the z-axis is equidistant from A=(1,2,3) and B=(2,1,5). The value of z is",
    "options": [
      "3",
      "5",
      "4",
      "6"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Equating squared distances gives 1^2+2^2+(z-3)^2=2^2+1^2+(z-5)^2. Hence (z-3)^2=(z-5)^2, which gives z=4.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-146",
    "section": "Mathematics",
    "topic": "Limits and Derivatives",
    "difficulty": "easy",
    "question": "lim x->0 (sin x)/x equals",
    "options": [
      "infinity",
      "0",
      "1",
      "-1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The standard trigonometric limit is 1 when x is in radians.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-147",
    "section": "Mathematics",
    "topic": "Limits and Derivatives",
    "difficulty": "medium",
    "question": "If f(x)=x^3-2x, then f'(2) equals",
    "options": [
      "12",
      "10",
      "4",
      "8"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "f'(x)=3x^2-2, so f'(2)=12-2=10.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-148",
    "section": "Mathematics",
    "topic": "Limits and Derivatives",
    "difficulty": "hard",
    "question": "lim x->0 (1-cos 2x)/x^2 equals",
    "options": [
      "1",
      "4",
      "0",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using 1-cos2x=2sin^2 x, the limit is 2(sin x/x)^2=2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-149",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "question": "If every observation in a data set is multiplied by 3, its standard deviation becomes",
    "options": [
      "9 times the original",
      "one-third of the original",
      "unchanged",
      "3 times the original"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Multiplying every observation by a positive constant c multiplies every deviation from the mean, and hence the standard deviation, by c. Here c=3.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-150",
    "section": "Mathematics",
    "topic": "Statistics",
    "difficulty": "medium",
    "question": "The variance of the data 1,3,5,7 is",
    "options": [
      "5",
      "20",
      "6",
      "4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The mean is 4. Squared deviations are 9,1,1,9, whose average is 20/4=5.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-151",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "A fair die is thrown once. The probability of getting a prime number is",
    "options": [
      "2/3",
      "5/6",
      "1/2",
      "1/3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Prime outcomes are 2,3,5: three of six equally likely outcomes, giving 1/2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-152",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "Two fair coins are tossed. Given that at least one head occurs, the probability of two heads is",
    "options": [
      "1/4",
      "1/3",
      "2/3",
      "1/2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Conditional sample space is {HH,HT,TH}; one of the three equally likely outcomes is HH.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-153",
    "section": "Mathematics",
    "topic": "Relations and Functions",
    "difficulty": "medium",
    "question": "If f(x)=x^2 on [0,infinity), then f^-1(x) is",
    "options": [
      "x^2",
      "1/x^2",
      "sqrt(x)",
      "-sqrt(x)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "On [0,infinity), x^2 is one-to-one and its inverse is sqrt(x).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-154",
    "section": "Mathematics",
    "topic": "Inverse Trigonometric Functions",
    "difficulty": "easy",
    "question": "sin^-1(1/2) in the principal value range equals",
    "options": [
      "pi/3",
      "pi/6",
      "-pi/6",
      "5pi/6"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The principal value of arcsin(1/2) is pi/6.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-155",
    "section": "Mathematics",
    "topic": "Inverse Trigonometric Functions",
    "difficulty": "medium",
    "question": "tan^-1(1)+tan^-1(1) equals",
    "options": [
      "pi/2",
      "pi/4",
      "pi",
      "0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Each tan^-1(1)=pi/4 in the principal range, so the sum is pi/2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-156",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "easy",
    "question": "If A=[[1,2],[3,4]], then trace(A) is",
    "options": [
      "5",
      "4",
      "10",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Trace is the sum of diagonal entries 1+4=5.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-157",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "If A is a 2x3 matrix and B is a 3x4 matrix, then AB has order",
    "options": [
      "3x4",
      "2x4",
      "3x3",
      "2x3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The inner dimensions 3 match, and the product takes outer dimensions 2x4.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-158",
    "section": "Mathematics",
    "topic": "Determinants",
    "difficulty": "medium",
    "question": "The determinant of [[2,3],[1,4]] is",
    "options": [
      "8",
      "-5",
      "11",
      "5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Determinant=2x4-3x1=8-3=5.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-159",
    "section": "Mathematics",
    "topic": "Determinants",
    "difficulty": "hard",
    "question": "If det(A)=3 for a 2x2 matrix A, then det(2A) equals",
    "options": [
      "9",
      "6",
      "8",
      "12"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For an n x n matrix, det(kA)=k^n det(A). Here n=2, so det(2A)=4x3=12.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-160",
    "section": "Mathematics",
    "topic": "Continuity and Differentiability",
    "difficulty": "medium",
    "question": "The function f(x)=|x| is",
    "options": [
      "continuous but not differentiable at x=0",
      "differentiable but not continuous at x=0",
      "neither continuous nor differentiable anywhere",
      "differentiable at x=0 with derivative 1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "|x| is continuous at 0, but left derivative -1 and right derivative +1 are unequal.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-161",
    "section": "Mathematics",
    "topic": "Continuity and Differentiability",
    "difficulty": "medium",
    "question": "If y=e^(3x), then dy/dx is",
    "options": [
      "3e^(3x)",
      "e^x",
      "3xe^(3x)",
      "e^(3x)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By chain rule, derivative of e^(3x) is 3e^(3x).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-162",
    "section": "Mathematics",
    "topic": "Continuity and Differentiability",
    "difficulty": "hard",
    "question": "If y=x^x for x>0, then dy/dx is",
    "options": [
      "x^(x-1)",
      "x(ln x+1)",
      "x^x(ln x+1)",
      "x^x ln x"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Taking logs, ln y=x ln x. Differentiating gives y'/y=ln x+1, hence y'=x^x(ln x+1).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-163",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "easy",
    "question": "For f(x)=x^2, the function is increasing on",
    "options": [
      "all real numbers with no exception",
      "(0,infinity)",
      "only at x=0",
      "(-infinity,0)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "f'(x)=2x>0 for x>0, so f is increasing on (0,infinity).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-164",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "medium",
    "question": "The slope of the tangent to y=x^2+3x at x=1 is",
    "options": [
      "4",
      "3",
      "2",
      "5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "dy/dx=2x+3, so at x=1 the slope is 5.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-165",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "hard",
    "question": "The maximum value of f(x)=4x-x^2 over all real x is",
    "options": [
      "4",
      "16",
      "2",
      "8"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "f(x)=-(x-2)^2+4, so the maximum value is 4 at x=2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-166",
    "section": "Mathematics",
    "topic": "Integrals",
    "difficulty": "easy",
    "question": "Integral of 2x dx is",
    "options": [
      "2x+C",
      "x^2+C",
      "2x^2+C",
      "x^2/2+C"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Since d(x^2)/dx=2x, the antiderivative is x^2+C.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-167",
    "section": "Mathematics",
    "topic": "Integrals",
    "difficulty": "medium",
    "question": "Integral from 0 to 1 of (3x^2+1) dx is",
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Antiderivative is x^3+x. From 0 to1, the value is 1+1=2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-168",
    "section": "Mathematics",
    "topic": "Integrals",
    "difficulty": "medium",
    "question": "Integral of dx/(1+x^2) is",
    "options": [
      "1/(1+x^2)+C",
      "sin^-1 x+C",
      "tan^-1 x + C",
      "ln(1+x^2)+C"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The standard antiderivative of 1/(1+x^2) is tan^-1 x+C.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-169",
    "section": "Mathematics",
    "topic": "Applications of Integrals",
    "difficulty": "medium",
    "question": "The area bounded by y=x, the x-axis, x=0 and x=2 is",
    "options": [
      "8 square units",
      "1 square unit",
      "4 square units",
      "2 square units"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Area=integral_0^2 x dx=[x^2/2]_0^2=2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-170",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "The general solution of dy/dx=2x is",
    "options": [
      "y=2x^2+C",
      "y=x^2+C",
      "y=x^2",
      "y=2x+C"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Integrating gives y=integral 2x dx=x^2+C.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-171",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "The solution of dy/dx=y with y(0)=3 is",
    "options": [
      "y=3x",
      "y=3e^x",
      "y=3e^(-x)",
      "y=e^(3x)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "General solution is y=Ce^x. Using y(0)=3 gives C=3.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-172",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "easy",
    "question": "If a=(1,2,2), then |a| is",
    "options": [
      "sqrt(5)",
      "2",
      "3",
      "5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Magnitude=sqrt(1+4+4)=3.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-173",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "medium",
    "question": "For a=(1,0,0) and b=(0,1,0), a dot b equals",
    "options": [
      "2",
      "-1",
      "0",
      "1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The vectors are perpendicular standard basis vectors, so their dot product is 0.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-174",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "hard",
    "question": "If |a|=2, |b|=3 and the angle between them is 60 degrees, then |a+b| is",
    "options": [
      "5",
      "sqrt(19)",
      "sqrt(13)",
      "1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "|a+b|^2=|a|^2+|b|^2+2|a||b|cos60=4+9+6=19.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-175",
    "section": "Mathematics",
    "topic": "Three Dimensional Geometry",
    "difficulty": "medium",
    "question": "Direction ratios of the line (x-1)/2=(y+3)/(-1)=(z-4)/5 are",
    "options": [
      "1,-1,4",
      "2,-1,5",
      "2,1,5",
      "1,-3,4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "In symmetric line form, the denominators are direction ratios: 2,-1,5.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-176",
    "section": "Mathematics",
    "topic": "Three Dimensional Geometry",
    "difficulty": "hard",
    "question": "Line L1 is r=lambda(1,0,0) and line L2 is r=(0,2,3)+mu(0,1,0). The shortest distance between the two lines is",
    "options": [
      "5",
      "sqrt(13)",
      "2",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The direction vectors are a=(1,0,0) and b=(0,1,0), so a x b=(0,0,1). With separation vector (0,2,3), shortest distance=|(0,2,3) dot (0,0,1)|/|(0,0,1)|=3.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-177",
    "section": "Mathematics",
    "topic": "Linear Programming",
    "difficulty": "medium",
    "question": "In a linear programming problem, if the feasible region is non-empty and bounded, an optimum value of a linear objective function occurs at",
    "options": [
      "a corner point of the feasible region",
      "the origin necessarily",
      "the midpoint of every edge only",
      "any point outside the feasible region"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a bounded feasible polygon, a linear objective reaches its maximum or minimum at a corner point, possibly along an edge including corner points.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-178",
    "section": "Mathematics",
    "topic": "Integrals",
    "difficulty": "hard",
    "question": "Integral from 0 to pi/2 of sin x cos x dx is",
    "options": [
      "1/2",
      "0",
      "1",
      "pi/4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Let u=sin x, du=cos x dx. Limits 0 to1 give integral_0^1 u du=1/2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-179",
    "section": "Mathematics",
    "topic": "Conic Sections",
    "difficulty": "medium",
    "question": "The focus of the parabola y^2=8x is",
    "options": [
      "(4,0)",
      "(0,2)",
      "(-2,0)",
      "(2,0)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Comparing y^2=4ax gives 4a=8, so a=2 and focus is (2,0).",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
  {
    "id": "kcet-2026-engineering-full-mock-01-180",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "hard",
    "question": "For x>0, the minimum value of x+4/x is",
    "options": [
      "8",
      "6",
      "2",
      "4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By AM-GM, x+4/x >=2sqrt(4)=4, with equality at x=2.",
    "source": {
      "kind": "original",
      "reference": "KCET 2026 official syllabus alignment",
      "url": "https://cetonline.karnataka.gov.in/kea/ugcet2026",
      "checkedOn": "2026-08-21"
    }
  },
];
