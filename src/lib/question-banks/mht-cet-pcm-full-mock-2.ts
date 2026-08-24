import type { Question } from '../questions';

export const MHT_CET_PCM_FULL_MOCK_2: Question[] = [
  {
    "id": "mht-cet-2026-pcm-full-mock-02-001",
    "section": "Physics",
    "topic": "Units and Measurement",
    "difficulty": "medium",
    "question": "What is the dimensional formula of Planck's constant h?",
    "options": [
      "[ML^2T^-1]",
      "[MLT^-1]",
      "[ML^2T^-2]",
      "[ML^0T^-1]"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "E=hf gives h=E/f; energy has dimension [ML^2T^-2] and frequency has [T^-1], so h=[ML^2T^-1].",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-002",
    "section": "Physics",
    "topic": "Vectors",
    "difficulty": "easy",
    "question": "For two vectors A and B, if |A+B| = |A-B|, what is the angle between them?",
    "options": [
      "0 degrees",
      "90 degrees",
      "180 degrees",
      "60 degrees"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "|A+B|^2=|A-B|^2 leads to 4(A.B)=0, so A and B are perpendicular, i.e. 90 degrees apart.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-003",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "medium",
    "question": "A ball dropped from rest from height h reaches the ground in time t. From what height should it be dropped to take time 2t (ignore air resistance)?",
    "options": [
      "2h",
      "8h",
      "4h",
      "16h"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Since h=(1/2)g t^2, t is proportional to sqrt(h). Doubling t requires quadrupling h, i.e. the new height is 4h.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-004",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "easy",
    "question": "A 2 kg block moving at 3 m/s is brought to rest in 0.5 s by a constant force. What is the magnitude of that force?",
    "options": [
      "3 N",
      "6 N",
      "1.5 N",
      "12 N"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "a=delta v/delta t=3/0.5=6 m/s^2 (deceleration). F=ma=2*6=12 N.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-005",
    "section": "Physics",
    "topic": "Friction",
    "difficulty": "easy",
    "question": "A block of mass 5 kg rests on a horizontal surface with coefficient of static friction 0.4. Take g=10 m/s^2. What is the minimum horizontal force needed to just start moving the block?",
    "options": [
      "20 N",
      "10 N",
      "2 N",
      "50 N"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Maximum static friction = mu_s * m * g = 0.4*5*10=20 N, which is the minimum force needed to overcome it.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-006",
    "section": "Physics",
    "topic": "Work, Energy and Power",
    "difficulty": "medium",
    "question": "A 1000 kg car increases its speed from 10 m/s to 20 m/s. What is the work done by the net force on it?",
    "options": [
      "50000 J",
      "150000 J",
      "100000 J",
      "200000 J"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "W=Delta KE=(1/2)(1000)(20^2-10^2)=(500)(300)=150000 J.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-007",
    "section": "Physics",
    "topic": "Systems of Particles",
    "difficulty": "medium",
    "question": "A 2 kg ball moving at 6 m/s collides head-on with a stationary 4 kg ball and they stick together. What is their common velocity after collision?",
    "options": [
      "1 m/s",
      "3 m/s",
      "2 m/s",
      "6 m/s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By momentum conservation, (2)(6)=(2+4)v, so v=12/6=2 m/s.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-008",
    "section": "Physics",
    "topic": "Rotational Dynamics",
    "difficulty": "easy",
    "question": "A uniform rod of mass M and length L rotates about an axis through one end perpendicular to its length. What is its moment of inertia?",
    "options": [
      "ML^2/12",
      "ML^2/2",
      "ML^2",
      "ML^2/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a rod about an axis through one end, I=ML^2/3 (found from ML^2/12 about the centre using the parallel axis theorem).",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-009",
    "section": "Physics",
    "topic": "Rotational Dynamics",
    "difficulty": "medium",
    "question": "A figure skater spinning with arms extended has moment of inertia 4 kg m^2 at angular speed 2 rad/s. She pulls her arms in, reducing the moment of inertia to 1 kg m^2. What is her new angular speed?",
    "options": [
      "8 rad/s",
      "2 rad/s",
      "0.5 rad/s",
      "4 rad/s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Angular momentum is conserved: I1*w1=I2*w2, so w2=4*2/1=8 rad/s.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-010",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "The escape velocity from Earth's surface is about 11.2 km/s. What would be the escape velocity from a planet with the same mass but twice the radius of Earth?",
    "options": [
      "22.4 km/s",
      "11.2/sqrt(2) km/s",
      "5.6 km/s",
      "11.2 km/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "v_esc=sqrt(2GM/R), so for the same mass and doubled radius, v_esc scales by a factor 1/sqrt(2).",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-011",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "At what height above Earth's surface does the acceleration due to gravity become one-fourth of its surface value g (Earth's radius R)?",
    "options": [
      "R/2",
      "2R",
      "R",
      "3R"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "g'=g R^2/(R+h)^2=g/4 requires (R+h)=2R, so h=R.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-012",
    "section": "Physics",
    "topic": "Mechanical Properties of Solids",
    "difficulty": "hard",
    "question": "A wire of length 2 m and cross-sectional area 1 mm^2 stretches by 0.5 mm under a 100 N load. What is its Young's modulus?",
    "options": [
      "2x10^11 N/m^2",
      "1x10^11 N/m^2",
      "8x10^10 N/m^2",
      "4x10^11 N/m^2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Y=(F/A)/(deltaL/L)=(100/1e-6)/(0.5e-3/2)=1e8/2.5e-4=4x10^11 N/m^2.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-013",
    "section": "Physics",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "easy",
    "question": "In a hydraulic lift, the smaller piston has area 5 cm^2 and the larger piston has area 100 cm^2. What force on the smaller piston is needed to support a 2000 N load on the larger piston?",
    "options": [
      "100 N",
      "40000 N",
      "400 N",
      "20 N"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By Pascal's law, F1/A1=F2/A2, so F1=2000*(5/100)=100 N.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-014",
    "section": "Physics",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "hard",
    "question": "Water flows through a horizontal pipe. At a point where speed is 2 m/s, gauge pressure is 5000 Pa. At a narrower section, speed becomes 4 m/s. Taking density=1000 kg/m^3, what is the gauge pressure there?",
    "options": [
      "5000 Pa",
      "-1000 Pa",
      "11000 Pa",
      "2000 Pa"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Bernoulli: P1+(1/2)rho v1^2=P2+(1/2)rho v2^2. 5000+2000=P2+8000, so P2=-1000 Pa.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-015",
    "section": "Physics",
    "topic": "Surface Tension",
    "difficulty": "hard",
    "question": "A capillary tube of radius 0.2 mm is dipped in water of surface tension 0.07 N/m, contact angle 0, density 1000 kg/m^3, g=10 m/s^2. What is the approximate height of capillary rise?",
    "options": [
      "0.035 m",
      "0.14 m",
      "0.07 m",
      "0.014 m"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "h=2T/(rho g r)=2*0.07/(1000*10*0.0002)=0.14/2=0.07 m.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-016",
    "section": "Physics",
    "topic": "Thermal Properties of Matter",
    "difficulty": "easy",
    "question": "A steel scale reads correctly at 20 degC. At 40 degC, its readings of a fixed true length will be",
    "options": [
      "slightly more than the true length",
      "exactly correct",
      "unpredictable",
      "slightly less than the true length (each division has expanded)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At a higher temperature the scale itself expands, so each marked division becomes longer, making the scale under-read the true length.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-017",
    "section": "Physics",
    "topic": "Calorimetry",
    "difficulty": "easy",
    "question": "50 g of water at 60 degC is mixed with 50 g of water at 20 degC. What is the final temperature (assume no heat loss)?",
    "options": [
      "40 degC",
      "30 degC",
      "50 degC",
      "35 degC"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Equal masses of the same liquid mix to the average temperature: (60+20)/2=40 degC.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-018",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "One mole of an ideal monatomic gas is heated at constant volume so that its temperature rises by 100 K. Using R=8.31 J/mol K, how much heat is absorbed?",
    "options": [
      "831 J",
      "1246.5 J",
      "2077.5 J",
      "1662 J"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At constant volume, Q=n Cv deltaT=(1)(3R/2)(100)=1.5*8.31*100=1246.5 J.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-019",
    "section": "Physics",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "easy",
    "question": "The average kinetic energy of an ideal gas molecule at temperature T is",
    "options": [
      "kB T",
      "(1/2) kB T",
      "(3/2) kB T",
      "3 kB T"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Kinetic theory gives the average translational kinetic energy per molecule as (3/2) kB T.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-020",
    "section": "Physics",
    "topic": "Oscillations",
    "difficulty": "medium",
    "question": "A particle executes SHM with amplitude 5 cm and period 4 s. What is its maximum speed?",
    "options": [
      "5 cm/s",
      "10 cm/s",
      "pi cm/s",
      "(5*pi/2) cm/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "v_max=A*omega=A*(2*pi/T)=5*(2*pi/4)=5*pi/2 cm/s.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-021",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "medium",
    "question": "A string fixed at both ends of length 1 m vibrates in its third harmonic. What is the wavelength?",
    "options": [
      "2/3 m",
      "1 m",
      "1/3 m",
      "2 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For the nth harmonic of a string fixed at both ends, wavelength=2L/n=2(1)/3=2/3 m.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-022",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "hard",
    "question": "A source of sound of frequency 500 Hz moves toward a stationary listener at 34 m/s. Taking the speed of sound as 340 m/s, what frequency does the listener hear?",
    "options": [
      "500 Hz",
      "approximately 556 Hz",
      "450 Hz",
      "600 Hz"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "f'=f*v/(v-vs)=500*340/(340-34)=500*340/306, which is approximately 556 Hz.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-023",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "medium",
    "question": "Two point charges each of 2 microC are placed 0.3 m apart. Using k=9x10^9 N m^2/C^2, what is the force between them?",
    "options": [
      "0.04 N",
      "4 N",
      "0.4 N",
      "0.036 N"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "F=k q1 q2/r^2=9e9*(2e-6)^2/0.09=9e9*4e-12/0.09=0.4 N.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-024",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "easy",
    "question": "A point charge produces an electric potential of 900 V at a distance of 1 m. What is the potential at 3 m from the same charge?",
    "options": [
      "900 V",
      "100 V",
      "2700 V",
      "300 V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "V is proportional to 1/r, so V(3 m)=900*(1/3)=300 V.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-025",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "easy",
    "question": "A parallel plate capacitor has capacitance 10 microF. If the plate separation is doubled while the area is kept the same, what is the new capacitance?",
    "options": [
      "5 microF",
      "20 microF",
      "10 microF",
      "2.5 microF"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "C=epsilon0 A/d, so doubling d halves C: 10/2=5 microF.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-026",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "easy",
    "question": "A 12 V battery is connected across a 4 ohm resistor in series with an ammeter of negligible resistance. What current does the ammeter read?",
    "options": [
      "0.33 A",
      "3 A",
      "48 A",
      "4 A"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "I=V/R=12/4=3 A.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-027",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "A copper wire of length L and radius r has resistance R. What is the resistance of another copper wire of the same material with length 2L and radius 2r?",
    "options": [
      "R",
      "2R",
      "R/2",
      "4R"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "R=rho L/A. The new resistance R'=rho(2L)/(pi(2r)^2)=(1/2)*rho L/(pi r^2)=R/2.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-028",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "easy",
    "question": "In a circuit, a junction has three currents: 5 A and 3 A flowing in, and one current flowing out. What is the magnitude of the outgoing current?",
    "options": [
      "2 A",
      "15 A",
      "1.67 A",
      "8 A"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By Kirchhoff's current law, the sum of currents entering a junction equals the sum leaving: 5+3=8 A.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-029",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "easy",
    "question": "A heater has resistance 40 ohm and operates at 200 V. What power does it dissipate?",
    "options": [
      "1000 W",
      "500 W",
      "2000 W",
      "800 W"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "P=V^2/R=200^2/40=1000 W.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-030",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "In a meter bridge, the balance point is obtained at 40 cm from the left end when a resistance of 6 ohm is in the left gap. What is the unknown resistance in the right gap?",
    "options": [
      "4 ohm",
      "9 ohm",
      "6 ohm",
      "15 ohm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "R_left/R_right=l/(100-l): 6/R=40/60, so R=6*60/40=9 ohm.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-031",
    "section": "Physics",
    "topic": "Magnetic Effects of Current",
    "difficulty": "easy",
    "question": "A charge of 2 C moves at 5 m/s perpendicular to a magnetic field of 0.5 T. What is the magnitude of the magnetic force on it?",
    "options": [
      "1 N",
      "0.5 N",
      "5 N",
      "10 N"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "F=qvB sin90=2*5*0.5=5 N.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-032",
    "section": "Physics",
    "topic": "Magnetic Effects of Current",
    "difficulty": "hard",
    "question": "Two long parallel wires carrying currents 3 A and 5 A in the same direction are 0.2 m apart. Using mu0/(2 pi)=2x10^-7 T m/A, what is the force per unit length between them?",
    "options": [
      "3x10^-5 N/m",
      "6x10^-6 N/m",
      "7.5x10^-6 N/m",
      "1.5x10^-5 N/m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "F/L=mu0 I1 I2/(2 pi d)=2e-7*3*5/0.2=2e-7*75=1.5e-5 N/m.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-033",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "medium",
    "question": "A coil of 100 turns has its magnetic flux change from 2x10^-3 Wb to 6x10^-3 Wb in 0.2 s. What is the magnitude of the induced emf?",
    "options": [
      "2 V",
      "0.4 V",
      "4 V",
      "0.02 V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "e=N|delta Phi|/delta t=100*(4e-3)/0.2=2 V.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-034",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "easy",
    "question": "A coil has self-inductance 2 H. If the current through it changes at 3 A/s, what is the magnitude of the self-induced emf?",
    "options": [
      "1.5 V",
      "6 V",
      "0.67 V",
      "5 V"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "e=L di/dt=2*3=6 V.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-035",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "hard",
    "question": "A series LCR circuit has L=0.5 H and C=8 microF. What is its resonant angular frequency?",
    "options": [
      "250 rad/s",
      "1000 rad/s",
      "500 rad/s",
      "2000 rad/s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "omega0=1/sqrt(LC)=1/sqrt(0.5*8e-6)=1/sqrt(4e-6)=1/(2e-3)=500 rad/s.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-036",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "easy",
    "question": "An AC source of rms voltage 220 V is connected to a pure resistor of 110 ohm. What is the rms power dissipated?",
    "options": [
      "220 W",
      "880 W",
      "110 W",
      "440 W"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "P=Vrms^2/R=220^2/110=440 W.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-037",
    "section": "Physics",
    "topic": "Electromagnetic Waves",
    "difficulty": "easy",
    "question": "In an electromagnetic wave travelling in vacuum, which two quantities are always perpendicular to the direction of propagation and to each other?",
    "options": [
      "Electric field E and magnetic field B",
      "Electric field E and current density",
      "Magnetic field and permittivity",
      "Wavelength and frequency"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "An electromagnetic wave is transverse: E and B oscillate perpendicular to each other and to the direction of propagation.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-038",
    "section": "Physics",
    "topic": "Ray Optics",
    "difficulty": "medium",
    "question": "A convex lens of focal length 20 cm forms a real image of an object placed 30 cm from it. Where is the image formed?",
    "options": [
      "12 cm on the other side",
      "60 cm on the other side",
      "20 cm on the other side",
      "50 cm on the other side"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "1/v-1/(-30)=1/20 gives 1/v=1/20-1/30=1/60, so v=60 cm (a real image).",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-039",
    "section": "Physics",
    "topic": "Ray Optics",
    "difficulty": "medium",
    "question": "Light travels from air (n=1) into glass (n=1.5) at an angle of incidence such that sin(incidence)=0.6. What is sin(refraction) inside the glass?",
    "options": [
      "0.6",
      "0.9",
      "0.4",
      "1.5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By Snell's law, n1 sin(i)=n2 sin(r): 1*0.6=1.5*sin(r), so sin(r)=0.4.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-040",
    "section": "Physics",
    "topic": "Ray Optics",
    "difficulty": "hard",
    "question": "A prism has angle of minimum deviation equal to its prism angle, A=60 degrees. Using n=sin[(A+Dm)/2]/sin(A/2), what is the refractive index?",
    "options": [
      "1.5",
      "2",
      "1.33",
      "sqrt(3)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "With Dm=A=60, n=sin(60)/sin(30)=(sqrt3/2)/(1/2)=sqrt(3).",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-041",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "medium",
    "question": "In Young's double-slit experiment, two slits are 0.5 mm apart and the screen is 1 m away. If the fringe width is 1.2 mm, what is the wavelength of light used?",
    "options": [
      "600 nm",
      "500 nm",
      "300 nm",
      "1200 nm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "beta=lambda D/d, so lambda=beta d/D=1.2e-3*0.5e-3/1=6e-7 m=600 nm.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-042",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "hard",
    "question": "Unpolarised light of intensity I0 passes through a polarizer and then through a second polarizer whose axis is at 60 degrees to the first. What is the intensity after the second polarizer?",
    "options": [
      "I0/2",
      "I0/8",
      "I0/4",
      "I0/16"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "After the first polarizer the intensity is I0/2. Malus's law then gives (I0/2)cos^2(60)=(I0/2)(1/4)=I0/8.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-043",
    "section": "Physics",
    "topic": "Dual Nature of Radiation and Matter",
    "difficulty": "easy",
    "question": "The stopping potential for a photoelectric surface is 2.0 V when illuminated by light of a certain frequency. What is the maximum kinetic energy of the emitted electrons?",
    "options": [
      "1.0 eV",
      "4.0 eV",
      "2.0 eV",
      "0.5 eV"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Kmax=e*V_stop, so in electron-volts Kmax numerically equals the stopping potential, 2.0 eV.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-044",
    "section": "Physics",
    "topic": "Dual Nature of Radiation and Matter",
    "difficulty": "medium",
    "question": "An electron is accelerated from rest through a potential difference V. As V increases, its de Broglie wavelength is proportional to which quantity?",
    "options": [
      "V",
      "sqrt(V)",
      "1/V",
      "1/sqrt(V)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "KE=eV=p^2/2m gives p proportional to sqrt(V); since lambda=h/p, lambda is proportional to 1/sqrt(V).",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-045",
    "section": "Physics",
    "topic": "Atoms",
    "difficulty": "medium",
    "question": "According to the Bohr model, the energy of the hydrogen atom in its ground state is -13.6 eV. What is its energy in the second excited state (n=3)?",
    "options": [
      "approximately -1.51 eV",
      "-6.8 eV",
      "-3.4 eV",
      "-13.6 eV"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "E_n=-13.6/n^2 eV. For n=3, E=-13.6/9, which is approximately -1.51 eV.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-046",
    "section": "Physics",
    "topic": "Nuclei",
    "difficulty": "medium",
    "question": "A radioactive isotope has a decay constant of 0.0231 per year. What is its approximate half-life?",
    "options": [
      "15 years",
      "30 years",
      "60 years",
      "23 years"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "T_half=ln2/lambda=0.693/0.0231, which is approximately 30 years.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-047",
    "section": "Physics",
    "topic": "Nuclei",
    "difficulty": "easy",
    "question": "Which process releases energy by combining light nuclei into a heavier nucleus?",
    "options": [
      "Nuclear fission",
      "Beta decay",
      "Nuclear fusion",
      "Alpha decay"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Fusion combines light nuclei, such as hydrogen isotopes, into heavier nuclei, releasing energy.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-048",
    "section": "Physics",
    "topic": "Semiconductor Electronics",
    "difficulty": "medium",
    "question": "A p-n junction diode is reverse biased. What is the dominant current mechanism across the junction?",
    "options": [
      "A large current due to majority charge carriers",
      "No current flows under any condition",
      "A current due to displacement current alone",
      "A small current due to minority charge carriers"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Under reverse bias, only a small reverse saturation current flows, carried by minority charge carriers.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-049",
    "section": "Physics",
    "topic": "Semiconductor Electronics",
    "difficulty": "easy",
    "question": "A NAND gate has both inputs tied together and driven by the same signal X. What is the output?",
    "options": [
      "NOT X",
      "X",
      "always 0",
      "always 1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Tying both inputs of a NAND gate together makes it behave as a NOT gate: output=NOT X.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-050",
    "section": "Physics",
    "topic": "Communication Systems",
    "difficulty": "medium",
    "question": "In amplitude modulation, a carrier of frequency 1000 kHz is modulated by a signal of frequency 5 kHz. What are the frequencies of the two sidebands?",
    "options": [
      "1000 kHz and 1005 kHz",
      "995 kHz and 1005 kHz",
      "990 kHz and 1010 kHz",
      "5 kHz and 1000 kHz"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "AM sidebands occur at fc-fm and fc+fm: 1000-5=995 kHz and 1000+5=1005 kHz.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-051",
    "section": "Chemistry",
    "topic": "Some Basic Concepts of Chemistry",
    "difficulty": "easy",
    "question": "What is the number of moles of oxygen atoms in 4.4 g of CO2 (molar mass 44 g/mol)?",
    "options": [
      "0.2 mol",
      "0.1 mol",
      "0.4 mol",
      "0.05 mol"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Moles of CO2=4.4/44=0.1 mol; each CO2 molecule has 2 oxygen atoms, so oxygen atoms=0.2 mol.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-052",
    "section": "Chemistry",
    "topic": "Some Basic Concepts of Chemistry",
    "difficulty": "easy",
    "question": "For the reaction N2 + 3H2 -> 2NH3, how many moles of NH3 are produced from 3 moles of H2 (with excess N2)?",
    "options": [
      "3 mol",
      "2 mol",
      "1 mol",
      "6 mol"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "3 mol of H2 reacts completely with N2 in the 1:3 ratio to give 2 mol of NH3, per the balanced equation.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-053",
    "section": "Chemistry",
    "topic": "Structure of Atom",
    "difficulty": "easy",
    "question": "What is the maximum number of electrons that can occupy the n=3 shell?",
    "options": [
      "8",
      "9",
      "18",
      "32"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Maximum electrons in a shell=2n^2=2(3)^2=18.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-054",
    "section": "Chemistry",
    "topic": "Periodic Table",
    "difficulty": "easy",
    "question": "Which of the following has the largest atomic radius?",
    "options": [
      "Na",
      "Mg",
      "Al",
      "K"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Atomic radius increases down a group; K lies below Na in Group 1 and is the largest of these four.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-055",
    "section": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "medium",
    "question": "What is the bond order of the O2 molecule according to molecular orbital theory?",
    "options": [
      "2",
      "1",
      "3",
      "1.5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "O2 has 8 bonding and 4 antibonding electrons in MOT, giving bond order=(8-4)/2=2.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-056",
    "section": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "easy",
    "question": "What is the hybridization of the central carbon atom in CO2?",
    "options": [
      "sp2",
      "sp",
      "sp3",
      "sp3d"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Carbon in CO2 forms two sigma bonds with no lone pairs, giving sp hybridization.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-057",
    "section": "Chemistry",
    "topic": "States of Matter",
    "difficulty": "easy",
    "question": "A fixed mass of gas occupies 2 L at 300 K and 1 atm. What volume will it occupy at 600 K and 1 atm?",
    "options": [
      "1 L",
      "2 L",
      "4 L",
      "8 L"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By Charles's law at constant pressure, V/T=constant, so V2=2*(600/300)=4 L.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-058",
    "section": "Chemistry",
    "topic": "States of Matter",
    "difficulty": "medium",
    "question": "The van der Waals equation corrects the ideal gas law for which two factors?",
    "options": [
      "Only temperature variation",
      "Only pressure variation",
      "Molecular color and mass",
      "Intermolecular forces and finite molecular volume"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The van der Waals equation adds correction terms for intermolecular attractive forces (a) and finite molecular volume (b).",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-059",
    "section": "Chemistry",
    "topic": "Thermodynamics (Chemical)",
    "difficulty": "medium",
    "question": "For a reaction, delta H=-40 kJ/mol and delta S=-100 J/(mol K). At what temperature does delta G become zero (approximately)?",
    "options": [
      "400 K",
      "40 K",
      "4000 K",
      "0.4 K"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At equilibrium delta G=0, so T=delta H/delta S=(-40000 J)/(-100 J/K)=400 K.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-060",
    "section": "Chemistry",
    "topic": "Thermodynamics (Chemical)",
    "difficulty": "hard",
    "question": "Given C(s)+O2(g)->CO2(g), delta H=-393 kJ/mol and CO(g)+1/2 O2(g)->CO2(g), delta H=-283 kJ/mol, what is delta H for C(s)+1/2 O2(g)->CO(g)?",
    "options": [
      "-676 kJ/mol",
      "-110 kJ/mol",
      "110 kJ/mol",
      "-393 kJ/mol"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By Hess's law, delta H(C->CO)=delta H(C->CO2)-delta H(CO->CO2)=-393-(-283)=-110 kJ/mol.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-061",
    "section": "Chemistry",
    "topic": "Chemical Equilibrium",
    "difficulty": "medium",
    "question": "For the equilibrium N2O4(g) <-> 2NO2(g), increasing pressure by decreasing volume will shift the equilibrium toward",
    "options": [
      "the side with more moles of gas (NO2)",
      "no shift occurs",
      "the side with fewer moles of gas (N2O4)",
      "the reaction stops completely"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By Le Chatelier's principle, increasing pressure favours the side with fewer gas moles, i.e. N2O4.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-062",
    "section": "Chemistry",
    "topic": "Ionic Equilibrium",
    "difficulty": "easy",
    "question": "What is the pH of a 0.001 M HCl solution (assume complete dissociation)?",
    "options": [
      "1",
      "11",
      "7",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "[H+]=0.001=10^-3 M, so pH=-log(10^-3)=3.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-063",
    "section": "Chemistry",
    "topic": "Ionic Equilibrium",
    "difficulty": "medium",
    "question": "A buffer contains equal concentrations of acetic acid (pKa=4.74) and sodium acetate. What is the pH of this buffer?",
    "options": [
      "4.74",
      "7.00",
      "9.26",
      "3.74"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By the Henderson-Hasselbalch equation, pH=pKa+log([salt]/[acid]), which equals pKa when the concentrations are equal.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-064",
    "section": "Chemistry",
    "topic": "Ionic Equilibrium",
    "difficulty": "medium",
    "question": "The solubility product of AgCl is 1.0x10^-10. What is the molar solubility of AgCl in pure water?",
    "options": [
      "1.0x10^-10 mol/L",
      "1.0x10^-5 mol/L",
      "1.0x10^-20 mol/L",
      "1.0x10^-2 mol/L"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Ksp=s^2 for AgCl, so s=sqrt(1.0e-10)=1.0e-5 mol/L.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-065",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "medium",
    "question": "A galvanic cell has E(cathode)=+0.80 V and E(anode)=-0.76 V (both standard reduction potentials). What is the standard cell potential?",
    "options": [
      "0.04 V",
      "1.52 V",
      "1.56 V",
      "0.76 V"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "E_cell=E_cathode-E_anode=0.80-(-0.76)=1.56 V.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-066",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "medium",
    "question": "A current of 2 A is passed through a solution of CuSO4 for 965 seconds. Using F=96500 C/mol, how many moles of electrons are passed?",
    "options": [
      "0.01 mol",
      "2 mol",
      "0.2 mol",
      "0.02 mol"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Charge=It=2*965=1930 C. Moles of electrons=1930/96500=0.02 mol.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-067",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "easy",
    "question": "For a reaction, rate=k[A]^2[B]. If the concentration of A is doubled and B is unchanged, by what factor does the rate increase?",
    "options": [
      "4",
      "2",
      "8",
      "16"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Rate is proportional to [A]^2, so doubling A increases the rate by a factor of 2^2=4.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-068",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "medium",
    "question": "A first-order reaction has a rate constant of 0.0231 per minute. What is its half-life?",
    "options": [
      "15 minutes",
      "approximately 30 minutes",
      "60 minutes",
      "0.0231 minutes"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a first-order reaction, t_half=0.693/k=0.693/0.0231, which is approximately 30 minutes.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-069",
    "section": "Chemistry",
    "topic": "Surface Chemistry",
    "difficulty": "easy",
    "question": "Which type of adsorption is characterised by high enthalpy of adsorption and formation of chemical bonds between adsorbate and adsorbent?",
    "options": [
      "Physisorption",
      "Absorption",
      "Chemisorption",
      "Effusion"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Chemisorption involves chemical bond formation and has a much higher enthalpy than physisorption.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-070",
    "section": "Chemistry",
    "topic": "Surface Chemistry",
    "difficulty": "easy",
    "question": "What is the term for the phenomenon in which colloidal particles coagulate when an electrolyte is added?",
    "options": [
      "Peptization",
      "Dialysis",
      "Tyndall effect",
      "Coagulation (flocculation)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Adding an electrolyte neutralises the charge on colloidal particles, causing them to coagulate.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-071",
    "section": "Chemistry",
    "topic": "s-Block Elements",
    "difficulty": "medium",
    "question": "Which alkaline earth metal carbonate is most thermally stable?",
    "options": [
      "BaCO3",
      "MgCO3",
      "CaCO3",
      "BeCO3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Thermal stability of Group 2 carbonates increases down the group, so BaCO3 is the most stable among these.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-072",
    "section": "Chemistry",
    "topic": "p-Block Elements",
    "difficulty": "medium",
    "question": "Which oxidation state is most stable for lead due to the inert pair effect?",
    "options": [
      "+4",
      "+2",
      "+1",
      "0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The inert pair effect makes the +2 state more stable than +4 for heavier Group 14 elements such as lead.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-073",
    "section": "Chemistry",
    "topic": "p-Block Elements",
    "difficulty": "easy",
    "question": "Which allotrope of phosphorus is more reactive and is stored under water?",
    "options": [
      "Red phosphorus",
      "Black phosphorus",
      "White phosphorus",
      "Violet phosphorus"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "White phosphorus is highly reactive and pyrophoric in air, so it is stored under water.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-074",
    "section": "Chemistry",
    "topic": "p-Block Elements",
    "difficulty": "easy",
    "question": "Which halogen exists as a liquid at room temperature?",
    "options": [
      "Chlorine",
      "Fluorine",
      "Iodine",
      "Bromine"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Among halogens, only bromine is a liquid at room temperature; fluorine and chlorine are gases and iodine is a solid.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-075",
    "section": "Chemistry",
    "topic": "d and f Block Elements",
    "difficulty": "medium",
    "question": "What is the number of unpaired electrons in the ground state of Fe (Z=26), configuration [Ar]3d6 4s2?",
    "options": [
      "4",
      "2",
      "6",
      "0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The 3d6 configuration fills as per Hund's rule to give 4 unpaired electrons among the 6 d-electrons.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-076",
    "section": "Chemistry",
    "topic": "Coordination Compounds",
    "difficulty": "easy",
    "question": "What is the coordination number of the central metal ion in [Co(NH3)6]3+?",
    "options": [
      "4",
      "6",
      "3",
      "2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Six NH3 ligands are directly bonded to cobalt, giving a coordination number of 6.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-077",
    "section": "Chemistry",
    "topic": "Coordination Compounds",
    "difficulty": "medium",
    "question": "Which type of isomerism arises in coordination compounds when a ligand attaches to the metal through different donor atoms?",
    "options": [
      "Ionisation isomerism",
      "Geometrical isomerism",
      "Linkage isomerism",
      "Optical isomerism"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Linkage isomerism occurs with ambidentate ligands (such as NO2-/ONO-) that can bind through different atoms.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-078",
    "section": "Chemistry",
    "topic": "Solid State",
    "difficulty": "medium",
    "question": "Which defect occurs when an ion moves from its lattice site to an interstitial site, common in AgBr crystals?",
    "options": [
      "Schottky defect",
      "Metal excess defect",
      "Substitutional defect",
      "Frenkel defect"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A Frenkel defect involves an ion displaced to an interstitial position, common in AgBr owing to the size difference of its ions.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-079",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "easy",
    "question": "1 mole of a non-volatile, non-electrolyte solute is dissolved in 1 kg of water (Kf=1.86 K kg/mol). What is the depression in freezing point?",
    "options": [
      "1.86 K",
      "0.93 K",
      "3.72 K",
      "1.0 K"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "delta Tf=Kf*m=1.86*1=1.86 K.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-080",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "medium",
    "question": "A solution is prepared with mole fraction 0.2 of a non-volatile solute in a volatile solvent of pure vapor pressure 100 mmHg. What is the vapor pressure of the solution?",
    "options": [
      "100 mmHg",
      "80 mmHg",
      "20 mmHg",
      "120 mmHg"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By Raoult's law, P=P0*x_solvent=100*(1-0.2)=80 mmHg.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-081",
    "section": "Chemistry",
    "topic": "Basic Principles of Organic Chemistry",
    "difficulty": "easy",
    "question": "Which pair of compounds are chain isomers of C4H10?",
    "options": [
      "Ethanol and dimethyl ether",
      "1-butene and 2-butene",
      "n-Butane and isobutane",
      "Propanal and propanone"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "n-Butane and isobutane (2-methylpropane) share the molecular formula C4H10 but differ in carbon-chain skeleton, so they are chain isomers.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-082",
    "section": "Chemistry",
    "topic": "Basic Principles of Organic Chemistry",
    "difficulty": "medium",
    "question": "Which type of mechanism does the reaction of tertiary alkyl halides with weak nucleophiles typically follow?",
    "options": [
      "SN2",
      "E2 only",
      "Free radical substitution",
      "SN1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Tertiary alkyl halides favour SN1 owing to the stability of the tertiary carbocation intermediate.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-083",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "medium",
    "question": "What is the major product of the addition of HBr to propene in the absence of peroxides, per Markovnikov's rule?",
    "options": [
      "2-bromopropane",
      "1-bromopropane",
      "1,2-dibromopropane",
      "Propane"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Markovnikov's rule places Br on the more substituted carbon, giving 2-bromopropane as the major product.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-084",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "medium",
    "question": "Which reagent converts acetylene (ethyne) to acetaldehyde via Markovnikov hydration?",
    "options": [
      "H2/Pd (Lindlar catalyst)",
      "H2O/H2SO4/HgSO4",
      "Br2/CCl4",
      "O3 then Zn/H2O"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Hg2+-catalysed hydration of ethyne (H2O/H2SO4/HgSO4) gives acetaldehyde via an unstable enol intermediate.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-085",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "medium",
    "question": "Which directing effect does the -NO2 group have on electrophilic aromatic substitution of nitrobenzene?",
    "options": [
      "ortho/para-directing and activating",
      "ortho/para-directing and deactivating",
      "meta-directing and deactivating",
      "meta-directing and activating"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The strongly electron-withdrawing -NO2 group deactivates the ring and directs incoming electrophiles to the meta position.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-086",
    "section": "Chemistry",
    "topic": "Haloalkanes and Haloarenes",
    "difficulty": "medium",
    "question": "Which alkyl halide reacts fastest in an SN2 reaction with a strong nucleophile?",
    "options": [
      "tert-Butyl bromide",
      "Isopropyl bromide",
      "sec-Butyl bromide",
      "Methyl bromide (CH3Br)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "SN2 reactions are fastest with the least steric hindrance; methyl halides react fastest, while tertiary halides essentially do not undergo SN2.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-087",
    "section": "Chemistry",
    "topic": "Haloalkanes and Haloarenes",
    "difficulty": "hard",
    "question": "Why is chlorobenzene less reactive than chloroethane toward nucleophilic substitution?",
    "options": [
      "Resonance delocalizes the lone pair of Cl into the ring, strengthening and shortening the C-Cl bond",
      "Chlorine is less electronegative in chlorobenzene",
      "The benzene ring has no effect on reactivity",
      "Chlorobenzene has a weaker C-Cl bond"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "In chlorobenzene, resonance gives partial double-bond character to the C-Cl bond, making it shorter and stronger, hence less reactive toward substitution.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-088",
    "section": "Chemistry",
    "topic": "Alcohols, Phenols and Ethers",
    "difficulty": "medium",
    "question": "Which reagent is used to distinguish primary, secondary, and tertiary alcohols in the Lucas test?",
    "options": [
      "Dilute NaOH",
      "Concentrated HCl with anhydrous ZnCl2",
      "Tollens' reagent",
      "Fehling's solution"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The Lucas reagent (conc. HCl + anhydrous ZnCl2) distinguishes alcohols by the differing rates at which they form insoluble alkyl chlorides.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-089",
    "section": "Chemistry",
    "topic": "Alcohols, Phenols and Ethers",
    "difficulty": "medium",
    "question": "Which reason best explains why phenol is more acidic than a typical aliphatic alcohol like ethanol?",
    "options": [
      "Phenol has an extra oxygen atom",
      "Phenol is a stronger base",
      "Its -OH is attached to an aromatic ring, and the conjugate base is resonance-stabilised",
      "Aliphatic alcohols are unstable"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The phenoxide ion formed after deprotonation is stabilised by resonance delocalisation into the aromatic ring, increasing phenol's acidity relative to ethanol.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-090",
    "section": "Chemistry",
    "topic": "Alcohols, Phenols and Ethers",
    "difficulty": "hard",
    "question": "Which reagent cleaves diethyl ether at high temperature to give ethanol and ethyl iodide?",
    "options": [
      "Dilute NaOH",
      "Cold dilute HCl",
      "Aqueous KMnO4",
      "Excess concentrated HI"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Excess hot concentrated HI cleaves the ether linkage, giving ethanol (and further, ethyl iodide) from diethyl ether.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-091",
    "section": "Chemistry",
    "topic": "Aldehydes, Ketones and Carboxylic Acids",
    "difficulty": "medium",
    "question": "Which test distinguishes an aldehyde from a ketone by giving a red-brown precipitate?",
    "options": [
      "Fehling's test (aldehydes reduce Cu2+ to a red-brown precipitate of Cu2O)",
      "Iodoform test",
      "Ketones also give a metallic mirror with Tollens' reagent",
      "Lucas test"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Aldehydes reduce Fehling's solution (Cu2+) to a red-brown precipitate of Cu2O; ketones generally do not give this test.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-092",
    "section": "Chemistry",
    "topic": "Aldehydes, Ketones and Carboxylic Acids",
    "difficulty": "medium",
    "question": "Which carboxylic acid derivative reacts most readily with a nucleophile: acid chloride, amide, or ester?",
    "options": [
      "Amide",
      "Acid chloride",
      "Carboxylate ion",
      "Ester is more reactive than acid chloride"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Acid chlorides are the most reactive toward nucleophilic acyl substitution because chloride is the best leaving group among these derivatives.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-093",
    "section": "Chemistry",
    "topic": "Amines",
    "difficulty": "hard",
    "question": "Which method converts an alkyl halide to a pure primary amine with minimal over-alkylation, via a phthalimide intermediate?",
    "options": [
      "Hofmann bromamide degradation",
      "Direct ammonolysis with excess NH3",
      "Gabriel phthalimide synthesis",
      "Friedel-Crafts amination"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The Gabriel phthalimide synthesis converts alkyl halides to pure primary amines without over-alkylation.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-094",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "hard",
    "question": "Which glycosidic linkage joins glucose and fructose to form sucrose?",
    "options": [
      "alpha-1,4-glycosidic linkage",
      "beta-1,4-glycosidic linkage",
      "peptide linkage",
      "alpha-1,2-glycosidic linkage"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Sucrose is formed by an alpha-1,2-glycosidic bond between the anomeric carbons of glucose and fructose.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-095",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "easy",
    "question": "Which bond links amino acids together to form a protein chain?",
    "options": [
      "Peptide bond",
      "Glycosidic bond",
      "Hydrogen bond only",
      "Ionic bond"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Amino acids are joined by peptide (amide) bonds formed between the -COOH of one residue and the -NH2 of the next.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-096",
    "section": "Chemistry",
    "topic": "Polymers",
    "difficulty": "medium",
    "question": "Which polymer is a condensation polymer formed by the reaction of a diacid and a diamine?",
    "options": [
      "Polyethylene",
      "Nylon-6,6",
      "Polystyrene",
      "Teflon"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Nylon-6,6 is a condensation polymer formed from hexamethylenediamine and adipic acid, with loss of water.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-097",
    "section": "Chemistry",
    "topic": "Chemistry in Everyday Life",
    "difficulty": "easy",
    "question": "Which class of drugs relieves pain without affecting consciousness, e.g. aspirin and ibuprofen?",
    "options": [
      "Antihistamines",
      "Tranquilizers",
      "Non-narcotic analgesics",
      "Antibiotics"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Non-narcotic analgesics such as aspirin and ibuprofen relieve mild to moderate pain without affecting consciousness.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-098",
    "section": "Chemistry",
    "topic": "Environmental Chemistry",
    "difficulty": "easy",
    "question": "Which gas is primarily responsible for the depletion of the stratospheric ozone layer?",
    "options": [
      "Carbon dioxide",
      "Methane",
      "Nitrogen",
      "Chlorofluorocarbons (CFCs)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "CFCs release chlorine radicals in the stratosphere that catalytically destroy ozone molecules.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-099",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "medium",
    "question": "According to the Arrhenius equation, increasing temperature increases the rate constant mainly because",
    "options": [
      "a larger fraction of molecules acquire energy greater than or equal to the activation energy",
      "the activation energy itself decreases with temperature",
      "the frequency factor becomes infinite",
      "molecular mass decreases"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The Boltzmann factor exp(-Ea/RT) increases with T, so more molecules have sufficient energy to react, raising k.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-100",
    "section": "Chemistry",
    "topic": "p-Block Elements",
    "difficulty": "easy",
    "question": "Which noble gas is used to fill electric bulbs because of its chemical inertness and low thermal conductivity?",
    "options": [
      "Helium",
      "Argon",
      "Neon",
      "Xenon"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Argon, being chemically inert with low thermal conductivity, is commonly used to fill incandescent light bulbs.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-101",
    "section": "Mathematics",
    "topic": "Sets",
    "difficulty": "easy",
    "question": "If A={1,2,3,4} and B={3,4,5,6}, what is A intersection B?",
    "options": [
      "{3,4}",
      "{1,2,5,6}",
      "{1,2,3,4,5,6}",
      "{}"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The intersection contains elements common to both sets: {3,4}.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-102",
    "section": "Mathematics",
    "topic": "Mathematical Logic",
    "difficulty": "medium",
    "question": "What is the negation of the statement 'All students passed the exam'?",
    "options": [
      "No student passed the exam",
      "At least one student did not pass the exam",
      "All students failed the exam",
      "Some students passed the exam"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The negation of a universal statement 'All x have P' is 'There exists an x that does not have P', i.e. at least one student did not pass.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-103",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "easy",
    "question": "What is the modulus of the complex number z=3-4i?",
    "options": [
      "7",
      "1",
      "5",
      "25"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "|z|=sqrt(3^2+4^2)=sqrt(25)=5.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-104",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "medium",
    "question": "What is the sum of the first 20 terms of the arithmetic progression 3,7,11,...?",
    "options": [
      "400",
      "760",
      "900",
      "820"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Sum=n/2[2a+(n-1)d]=10[6+19*4]=10*82=820.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-105",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "easy",
    "question": "What is the sum to infinity of the geometric series 8+4+2+1+...?",
    "options": [
      "16",
      "15",
      "8",
      "32"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Sum to infinity=a/(1-r)=8/(1-1/2)=16.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-106",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "easy",
    "question": "How many ways can a committee of 3 be chosen from 8 people?",
    "options": [
      "336",
      "56",
      "24",
      "512"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Number of ways=C(8,3)=56.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-107",
    "section": "Mathematics",
    "topic": "Functions",
    "difficulty": "easy",
    "question": "What is the domain of f(x)=sqrt(x-3)?",
    "options": [
      "x>3 only (strict)",
      "x<=3",
      "x>=3",
      "all real x"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The expression under the square root must be non-negative, so x-3>=0, i.e. x>=3.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-108",
    "section": "Mathematics",
    "topic": "Functions",
    "difficulty": "medium",
    "question": "For f(x)=2x+5, what is f^-1(x)?",
    "options": [
      "2x-5",
      "(x+5)/2",
      "x/2-5",
      "(x-5)/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Setting y=2x+5 and solving for x gives x=(y-5)/2, so f^-1(x)=(x-5)/2.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-109",
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "easy",
    "question": "Evaluate lim x->0 (sin 3x)/x.",
    "options": [
      "3",
      "1",
      "0",
      "1/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "lim x->0 (sin kx)/x = k, so the limit equals 3.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-110",
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "medium",
    "question": "Evaluate lim x->infinity (3x^2+2x)/(x^2-5).",
    "options": [
      "0",
      "3",
      "infinity",
      "2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Dividing numerator and denominator by x^2, the limit approaches 3/1=3 as x->infinity.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-111",
    "section": "Mathematics",
    "topic": "Continuity",
    "difficulty": "medium",
    "question": "For what value of k is f(x)=(x^2-9)/(x-3) for x!=3 and f(3)=k continuous at x=3?",
    "options": [
      "3",
      "9",
      "6",
      "0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "lim x->3 (x^2-9)/(x-3)=lim(x+3)=6, so k must equal 6.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-112",
    "section": "Mathematics",
    "topic": "Differentiation",
    "difficulty": "medium",
    "question": "If y=x^2 sin x, what is dy/dx?",
    "options": [
      "2x cos x",
      "x^2 cos x",
      "2x sin x - x^2 cos x",
      "2x sin x + x^2 cos x"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "By the product rule, d/dx(x^2 sin x)=2x sin x + x^2 cos x.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-113",
    "section": "Mathematics",
    "topic": "Differentiation",
    "difficulty": "easy",
    "question": "If y=(3x+1)^5, what is dy/dx?",
    "options": [
      "15(3x+1)^4",
      "5(3x+1)^4",
      "3(3x+1)^4",
      "15(3x+1)^5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "By the chain rule, dy/dx=5(3x+1)^4*3=15(3x+1)^4.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-114",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "medium",
    "question": "What is the slope of the tangent to the curve y=x^3-3x at x=2?",
    "options": [
      "6",
      "9",
      "2",
      "12"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "y'=3x^2-3; at x=2, y'=3(4)-3=9.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-115",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "easy",
    "question": "What is the maximum value of f(x)=9-(x-2)^2?",
    "options": [
      "2",
      "-9",
      "9",
      "0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Since (x-2)^2>=0, f(x)<=9, with equality at x=2, so the maximum value is 9.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-116",
    "section": "Mathematics",
    "topic": "Indefinite Integration",
    "difficulty": "easy",
    "question": "Evaluate integral of 3x^2 dx.",
    "options": [
      "3x^3+C",
      "x^3/3+C",
      "6x+C",
      "x^3+C"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The antiderivative of 3x^2 is x^3+C.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-117",
    "section": "Mathematics",
    "topic": "Indefinite Integration",
    "difficulty": "medium",
    "question": "Evaluate integral of x e^x dx.",
    "options": [
      "x e^x - e^x + C",
      "x e^x + C",
      "e^x + C",
      "x^2 e^x/2 + C"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Using integration by parts with u=x, dv=e^x dx: integral = x e^x - integral e^x dx = x e^x - e^x + C.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-118",
    "section": "Mathematics",
    "topic": "Definite Integration",
    "difficulty": "easy",
    "question": "Evaluate the definite integral from 1 to 3 of 2x dx.",
    "options": [
      "4",
      "8",
      "9",
      "6"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "integral 2x dx=x^2; evaluating from 1 to 3 gives 9-1=8.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-119",
    "section": "Mathematics",
    "topic": "Applications of Definite Integration",
    "difficulty": "hard",
    "question": "What is the area enclosed between the curve y=x^2 and the line y=4 (for x between -2 and 2)?",
    "options": [
      "16/3 square units",
      "8 square units",
      "32/3 square units",
      "4 square units"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Area=integral from -2 to 2 of (4-x^2)dx=2*integral 0 to 2 (4-x^2)dx=2[4x-x^3/3]_0^2=2[8-8/3]=32/3.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-120",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "easy",
    "question": "What is the order of the differential equation d3y/dx3 + (dy/dx)^2 = x?",
    "options": [
      "1",
      "2",
      "6",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The order is the highest derivative present, which is the third derivative, so order=3.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-121",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "What is the general solution of dy/dx = 2x, given y(0)=1?",
    "options": [
      "y=x^2+1",
      "y=x^2",
      "y=2x^2+1",
      "y=x^2+2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Integrating gives y=x^2+C; using y(0)=1 gives C=1, so y=x^2+1.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-122",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "easy",
    "question": "A fair die is rolled once. What is the probability of getting a number greater than 4?",
    "options": [
      "1/2",
      "1/3",
      "2/3",
      "1/6"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Numbers greater than 4 are 5 and 6, so the probability is 2/6=1/3.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-123",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "Two fair coins are tossed. Given that at least one head appears, what is the probability that both are heads?",
    "options": [
      "1/2",
      "1/4",
      "1/3",
      "2/3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The sample space with at least one head is {HH,HT,TH}, 3 equally likely outcomes, so P(both heads)=1/3.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-124",
    "section": "Mathematics",
    "topic": "Probability Distribution",
    "difficulty": "medium",
    "question": "A random variable X takes values 1,2,3 with probabilities 0.2,0.5,0.3 respectively. What is E(X)?",
    "options": [
      "2.0",
      "1.8",
      "2.5",
      "2.1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "E(X)=1(0.2)+2(0.5)+3(0.3)=0.2+1.0+0.9=2.1.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-125",
    "section": "Mathematics",
    "topic": "Binomial Distribution",
    "difficulty": "medium",
    "question": "For X~Binomial(4,0.5), what is P(X=2)?",
    "options": [
      "3/8",
      "1/4",
      "1/2",
      "1/16"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "P(X=2)=C(4,2)(0.5)^2(0.5)^2=6/16=3/8.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-126",
    "section": "Mathematics",
    "topic": "Straight Line",
    "difficulty": "easy",
    "question": "What is the equation of the line passing through (1,2) with slope 3?",
    "options": [
      "y=3x+1",
      "y=3x-1",
      "y=x+3",
      "y=3x+2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Using point-slope form, y-2=3(x-1), which simplifies to y=3x-1.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-127",
    "section": "Mathematics",
    "topic": "Straight Line",
    "difficulty": "medium",
    "question": "What is the slope of a line perpendicular to 2x+3y=6?",
    "options": [
      "-2/3",
      "2/3",
      "3/2",
      "-3/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The given line has slope -2/3; a perpendicular line has slope equal to the negative reciprocal, 3/2.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-128",
    "section": "Mathematics",
    "topic": "Circle",
    "difficulty": "medium",
    "question": "What is the radius of the circle x^2+y^2-6x+8y=0?",
    "options": [
      "3",
      "4",
      "25",
      "5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Completing squares gives (x-3)^2+(y+4)^2=25, so the radius is 5.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-129",
    "section": "Mathematics",
    "topic": "Circle",
    "difficulty": "hard",
    "question": "For what value of c is the line y=x+c tangent to the circle x^2+y^2=8?",
    "options": [
      "4 (or -4)",
      "2 (or -2)",
      "8 (or -8)",
      "0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Tangency requires the distance from the centre to the line equal the radius: |c|/sqrt(2)=sqrt(8)=2sqrt(2), giving |c|=4.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-130",
    "section": "Mathematics",
    "topic": "Conic Section",
    "difficulty": "medium",
    "question": "What is the focus of the parabola y^2=12x?",
    "options": [
      "(0,3)",
      "(3,0)",
      "(6,0)",
      "(12,0)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "For y^2=4ax, 4a=12 so a=3; the focus is at (a,0)=(3,0).",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-131",
    "section": "Mathematics",
    "topic": "Conic Section",
    "difficulty": "medium",
    "question": "What is the eccentricity of the ellipse x^2/25 + y^2/16 = 1?",
    "options": [
      "4/5",
      "1/5",
      "3/5",
      "5/3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "b^2=a^2(1-e^2): 16=25(1-e^2), so e^2=9/25, e=3/5.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-132",
    "section": "Mathematics",
    "topic": "Conic Section",
    "difficulty": "medium",
    "question": "What are the coordinates of the vertices of the hyperbola x^2/9 - y^2/16 = 1?",
    "options": [
      "(4,0) and (-4,0)",
      "(0,3) and (0,-3)",
      "(5,0) and (-5,0)",
      "(3,0) and (-3,0)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "For x^2/a^2-y^2/b^2=1, a^2=9 so a=3; the vertices are at (+/-a,0)=(+/-3,0).",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-133",
    "section": "Mathematics",
    "topic": "Pair of Straight Lines",
    "difficulty": "medium",
    "question": "For the pair of lines ax^2+2hxy+by^2=0 to be mutually perpendicular, what condition must hold?",
    "options": [
      "a+b=0",
      "h^2=ab",
      "a=b",
      "h=0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Two lines represented by ax^2+2hxy+by^2=0 are perpendicular when the sum of the coefficients of x^2 and y^2 is zero, i.e. a+b=0.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-134",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "easy",
    "question": "What is the unit vector in the direction of a=(3,4,0)?",
    "options": [
      "(3,4,0)",
      "(3/5, 4/5, 0)",
      "(3/25,4/25,0)",
      "(4/5,3/5,0)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "|a|=sqrt(9+16)=5, so the unit vector is a/|a|=(3/5,4/5,0).",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-135",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "easy",
    "question": "What is a x b for a=(1,0,0) and b=(0,1,0)?",
    "options": [
      "(1,1,0)",
      "(0,1,0)",
      "(0,0,1)",
      "(0,0,-1)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Since i x j = k, a x b = (0,0,1).",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-136",
    "section": "Mathematics",
    "topic": "Three Dimensional Geometry",
    "difficulty": "medium",
    "question": "If direction ratios of a line are (1,-2,2), what are its direction cosines?",
    "options": [
      "(1,-2,2)",
      "(1/5,-2/5,2/5)",
      "(1/9,-2/9,2/9)",
      "(1/3, -2/3, 2/3)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The magnitude is sqrt(1+4+4)=3, so the direction cosines are the ratios divided by 3: (1/3,-2/3,2/3).",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-137",
    "section": "Mathematics",
    "topic": "Line and Plane",
    "difficulty": "medium",
    "question": "What is the equation of the plane passing through (1,0,0), (0,1,0), (0,0,1)?",
    "options": [
      "x+y+z=1",
      "x+y+z=0",
      "x+y+z=3",
      "x-y+z=1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The intercept form of a plane with intercepts a=b=c=1 is x/1+y/1+z/1=1, i.e. x+y+z=1.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-138",
    "section": "Mathematics",
    "topic": "Line and Plane",
    "difficulty": "hard",
    "question": "What is the angle between the line with direction ratios (1,1,0) and the plane z=0 (normal (0,0,1))?",
    "options": [
      "90 degrees",
      "0 degrees",
      "45 degrees",
      "30 degrees"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The line (1,1,0) lies in the plane z=0 since its direction is perpendicular to the plane's normal (0,0,1); the angle between the line and the plane is 0 degrees.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-139",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "If A=[[1,2],[3,4]] and B=[[0,1],[1,0]], what is AB?",
    "options": [
      "[[1,2],[3,4]]",
      "[[0,2],[3,0]]",
      "[[2,1],[4,3]]",
      "[[2,4],[1,3]]"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Row 1 of A times B gives (2,1); row 2 gives (4,3). So AB=[[2,1],[4,3]].",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-140",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "easy",
    "question": "A square matrix A satisfies A=A^T. What is such a matrix called?",
    "options": [
      "Skew-symmetric matrix",
      "Orthogonal matrix",
      "Singular matrix",
      "Symmetric matrix"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A matrix equal to its own transpose is called a symmetric matrix.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-141",
    "section": "Mathematics",
    "topic": "Determinants",
    "difficulty": "medium",
    "question": "If det(A)=5 for a 3x3 matrix A, what is det(2A)?",
    "options": [
      "40",
      "10",
      "20",
      "5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "For an nxn matrix, det(kA)=k^n det(A). Here n=3, so det(2A)=2^3*5=40.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-142",
    "section": "Mathematics",
    "topic": "Determinants",
    "difficulty": "easy",
    "question": "Using Cramer's rule for x+y=5 and x-y=1, what is the value of x?",
    "options": [
      "2",
      "3",
      "5",
      "1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Adding the two equations gives 2x=6, so x=3.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-143",
    "section": "Mathematics",
    "topic": "Trigonometric Functions",
    "difficulty": "hard",
    "question": "What is the value of sin(75 degrees)?",
    "options": [
      "(sqrt6-sqrt2)/4",
      "1/2",
      "(sqrt6+sqrt2)/4",
      "sqrt3/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "sin75=sin(45+30)=sin45cos30+cos45sin30=(sqrt2/2)(sqrt3/2)+(sqrt2/2)(1/2)=(sqrt6+sqrt2)/4.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-144",
    "section": "Mathematics",
    "topic": "Trigonometric Functions",
    "difficulty": "hard",
    "question": "What is the general solution of sin x = 1/2?",
    "options": [
      "x = 2n*pi + pi/6, n integer only",
      "x = n*pi + pi/6, n integer",
      "x = pi/6 only",
      "x = n*pi + (-1)^n * (pi/6), n integer"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The general solution of sin x = sin(pi/6) is x = n*pi + (-1)^n (pi/6) for integer n.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-145",
    "section": "Mathematics",
    "topic": "Trigonometric Functions",
    "difficulty": "easy",
    "question": "What is the value of tan^-1(1) + tan^-1(0)?",
    "options": [
      "pi/4",
      "pi/2",
      "0",
      "3pi/4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "tan^-1(1)=pi/4 and tan^-1(0)=0, so the sum is pi/4.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-146",
    "section": "Mathematics",
    "topic": "Linear Programming",
    "difficulty": "hard",
    "question": "Minimise Z=2x+3y subject to x>=0, y>=0, x+y>=4. What is the minimum value of Z at a vertex of the feasible boundary?",
    "options": [
      "12 (at x=0,y=4)",
      "8 (at x=4,y=0)",
      "10 (at x=2,y=2)",
      "6 (unattainable on the boundary)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Checking vertices on the boundary line x+y=4, Z=2x+3y is minimised at (4,0), giving Z=8, since increasing y raises Z faster (coefficient 3>2).",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-147",
    "section": "Mathematics",
    "topic": "Sets",
    "difficulty": "easy",
    "question": "How many subsets does a set with 5 elements have (including the empty set and the set itself)?",
    "options": [
      "25",
      "16",
      "32",
      "10"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A set with n elements has 2^n subsets; here 2^5=32.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-148",
    "section": "Mathematics",
    "topic": "Mathematical Logic",
    "difficulty": "medium",
    "question": "What is the truth value of (p AND q) OR (NOT p) when p is false and q is true?",
    "options": [
      "False",
      "Cannot be determined",
      "Both true and false",
      "True"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "p is false, so NOT p is true, making the whole disjunction true regardless of q.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-149",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "easy",
    "question": "What is the 10th term of the arithmetic progression with first term 5 and common difference 3?",
    "options": [
      "32",
      "35",
      "30",
      "27"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "a_n=a+(n-1)d=5+9*3=32.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-02-150",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "medium",
    "question": "The radius of a circle increases at 2 cm/s. At the instant the radius is 5 cm, how fast is the area increasing?",
    "options": [
      "10*pi cm^2/s",
      "20*pi cm^2/s",
      "25*pi cm^2/s",
      "5*pi cm^2/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A=pi r^2, so dA/dt=2 pi r (dr/dt)=2*pi*5*2=20*pi cm^2/s.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-24",
      "kind": "original"
    }
  },
];
