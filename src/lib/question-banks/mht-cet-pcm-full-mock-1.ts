import type { Question } from '../questions';

export const MHT_CET_PCM_FULL_MOCK_1: Question[] = [
  {
    "id": "mht-cet-2026-pcm-full-mock-01-001",
    "section": "Physics",
    "topic": "Vectors",
    "difficulty": "easy",
    "question": "A displacement vector has components 6 m east and 8 m north. What is its magnitude?",
    "options": [
      "12 m",
      "2 m",
      "14 m",
      "10 m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Magnitude = sqrt(6^2+8^2)=10 m.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-002",
    "section": "Physics",
    "topic": "Error Analysis",
    "difficulty": "medium",
    "question": "The measured length and breadth of a rectangle are (20.0 +/- 0.2) cm and (10.0 +/- 0.1) cm. What is the maximum percentage error in its area?",
    "options": [
      "4%",
      "1%",
      "3%",
      "2%"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For A=lb, maximum fractional errors add: 0.2/20 + 0.1/10 = 0.02 = 2%.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-003",
    "section": "Physics",
    "topic": "Motion in a Plane",
    "difficulty": "medium",
    "question": "A projectile is fired with the same speed at angles 30 degrees and 60 degrees to the horizontal. Which quantity is the same for the two projectiles?",
    "options": [
      "Horizontal range",
      "Time of flight",
      "Vertical component of initial velocity",
      "Maximum height"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Range is u^2 sin(2theta)/g; sin60 = sin120, so the ranges are equal.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-004",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "hard",
    "question": "A 4 kg block on a rough 30 degree incline is connected by a light string over a smooth pulley to a hanging 3 kg block, and the system is initially at rest. The coefficient of static friction between the 4 kg block and the incline is 1/(2 sqrt(3)). Take g=10 m/s^2. What is the acceleration of the system?",
    "options": [
      "0 m/s^2",
      "5/7 m/s^2",
      "10/7 m/s^2",
      "20/7 m/s^2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For the 4 kg block, the component of weight down the incline is 4*10*sin30=20 N. The hanging block pulls with 30 N, so without friction the tendency is to move the 4 kg block up the incline by a 10 N imbalance. The maximum static friction is mu_s N=[1/(2 sqrt(3))]*(4*10*cos30)=10 N, exactly enough to prevent motion. Hence the acceleration is 0 m/s^2.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-21",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-005",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "A satellite moves in a circular orbit of radius 4R around a planet. Another satellite orbits the same planet at radius R. What is the ratio of their orbital periods T(4R):T(R)?",
    "options": [
      "4:1",
      "8:1",
      "2:1",
      "16:1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Kepler's third law gives T proportional to r^(3/2). Thus ratio = 4^(3/2)=8.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-006",
    "section": "Physics",
    "topic": "Thermal Properties of Matter",
    "difficulty": "easy",
    "question": "A 2.0 m brass rod has coefficient of linear expansion 2.0 x 10^-5 K^-1. By how much does its length increase for a 50 K rise in temperature?",
    "options": [
      "1.0 mm",
      "5.0 mm",
      "2.0 mm",
      "0.2 mm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Delta L=alpha L Delta T=2e-5 x 2 x 50=2e-3 m=2.0 mm.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-007",
    "section": "Physics",
    "topic": "Sound",
    "difficulty": "medium",
    "question": "Two tuning forks of frequencies 256 Hz and 260 Hz are sounded together. How many beats are heard in 5 seconds?",
    "options": [
      "24",
      "20",
      "4",
      "16"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Beat frequency=|260-256|=4 Hz, so beats in 5 s = 4x5=20.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-008",
    "section": "Physics",
    "topic": "Optics",
    "difficulty": "easy",
    "question": "An object is placed 30 cm in front of a concave mirror of focal length 15 cm. Where is the image formed?",
    "options": [
      "15 cm behind the mirror",
      "30 cm in front of the mirror",
      "60 cm in front of the mirror",
      "30 cm behind the mirror"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The object is at 2f, so a real image forms at 2f, i.e. 30 cm in front of the mirror.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-009",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "medium",
    "question": "Two point charges +2 microC and +8 microC are 30 cm apart. At what distance from the +2 microC charge on the line joining them is the electric field zero?",
    "options": [
      "20 cm",
      "15 cm",
      "10 cm",
      "5 cm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Between like charges, k*2/x^2 = k*8/(30-x)^2. Thus (30-x)/x=2, so x=10 cm.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-010",
    "section": "Physics",
    "topic": "Semiconductors",
    "difficulty": "hard",
    "question": "A silicon diode with a 0.7 V forward drop is in series with a 430 ohm resistor across a 5.0 V supply. Approximately what current flows when the diode is forward biased?",
    "options": [
      "10 mA",
      "12 mA",
      "7 mA",
      "5 mA"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The resistor has 5.0-0.7=4.3 V across it. I=4.3/430=0.010 A=10 mA.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-011",
    "section": "Physics",
    "topic": "Rotational Dynamics",
    "difficulty": "medium",
    "question": "A solid cylinder rolls without slipping with speed v. What fraction of its total kinetic energy is rotational?",
    "options": [
      "1/4",
      "2/3",
      "1/2",
      "1/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a solid cylinder I=MR^2/2. Rotational KE=(1/2)I(v/R)^2=Mv^2/4; total=3Mv^2/4, so the fraction is 1/3.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-012",
    "section": "Physics",
    "topic": "Mechanical Properties of Fluids",
    "difficulty": "medium",
    "question": "Water flows through a horizontal pipe whose cross-sectional area decreases from 4A to A. If the speed in the wider part is 2 m/s, what is the speed in the narrower part?",
    "options": [
      "8 m/s",
      "16 m/s",
      "6 m/s",
      "4 m/s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Continuity gives 4A(2)=A v, so v=8 m/s.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-013",
    "section": "Physics",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "easy",
    "question": "At fixed temperature, the rms speed of oxygen molecules is compared with hydrogen molecules. Which is correct?",
    "options": [
      "Both have the same rms speed",
      "Oxygen has four times the rms speed of hydrogen",
      "Hydrogen has twice the rms speed of oxygen",
      "Hydrogen has four times the rms speed of oxygen"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "v_rms is proportional to 1/sqrt(M). With molar masses 32 and 2, ratio v_H2/v_O2=sqrt(32/2)=4.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-014",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "An ideal gas absorbs 500 J of heat and does 180 J of work. What is the increase in its internal energy?",
    "options": [
      "680 J",
      "180 J",
      "320 J",
      "500 J"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "First law: Delta U=Q-W=500-180=320 J.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-015",
    "section": "Physics",
    "topic": "Thermal Radiation",
    "difficulty": "medium",
    "question": "The absolute temperature of a blackbody doubles. By what factor does its total power radiated per unit area increase?",
    "options": [
      "4",
      "8",
      "16",
      "2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Stefan-Boltzmann law gives P/A proportional to T^4, so doubling T increases it by 2^4=16.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-016",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "medium",
    "question": "In Young's double-slit experiment, slit separation is doubled while wavelength and screen distance stay unchanged. What happens to fringe width?",
    "options": [
      "It becomes four times",
      "It is unchanged",
      "It doubles",
      "It becomes half"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Fringe width beta=lambda D/d, so doubling d halves beta.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-017",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "hard",
    "question": "In an interference pattern produced by two coherent sources, the ratio of maximum to minimum intensity is 9:1. At a point where the phase difference between the two waves is 120 degrees, what is the intensity at that point as a fraction of the maximum intensity?",
    "options": [
      "1/9",
      "2/9",
      "2/3",
      "1/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Let the wave amplitudes be a and b with a>b. From Imax/Imin=(a+b)^2/(a-b)^2=9, we get (a+b)/(a-b)=3, hence a=2b. At phase difference 120 degrees, I=a^2+b^2+2ab cos120 =4b^2+b^2-2b^2=3b^2. Since Imax=(2b+b)^2=9b^2, the required fraction is 3/9=1/3.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-21",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-018",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "medium",
    "question": "Two capacitors 3 microF and 6 microF are connected in series across 18 V. What charge is stored on each capacitor?",
    "options": [
      "108 microC",
      "18 microC",
      "36 microC",
      "54 microC"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Series equivalent is (3*6)/(3+6)=2 microF. Charge Q=Ceq V=2*18=36 microC.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-019",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "hard",
    "question": "A parallel-plate capacitor is charged to potential V and disconnected from the battery. A dielectric of constant K is then inserted completely. Which pair correctly gives the new capacitance and stored energy relative to initial values?",
    "options": [
      "C/K and U/K",
      "KC and KU",
      "KC and U/K",
      "C/K and KU"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Disconnected means charge stays fixed. Capacitance becomes KC and U=Q^2/(2C) therefore becomes U/K.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-020",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "A cell of emf 10 V and internal resistance 2 ohm is connected to a variable external resistor R. For what value of R is the power delivered to R maximum?",
    "options": [
      "0.5 ohm",
      "5 ohm",
      "8 ohm",
      "2 ohm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a source with internal resistance r, maximum power is delivered to the external load when R=r. Here r=2 ohm, so the required resistance is 2 ohm.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-21",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-021",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "A wire of resistance R is stretched uniformly to twice its original length, with volume unchanged. What is its new resistance?",
    "options": [
      "2R",
      "4R",
      "8R",
      "R/2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "With volume constant, area halves when length doubles. R'=rho(2L)/(A/2)=4R.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-022",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "hard",
    "question": "Three resistors 2 ohm, 3 ohm and 6 ohm are connected in parallel across 12 V. What total current is drawn?",
    "options": [
      "12 A",
      "8 A",
      "18 A",
      "6 A"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "1/Req=1/2+1/3+1/6=1, so Req=1 ohm and I=12/1=12 A.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-023",
    "section": "Physics",
    "topic": "Magnetic Effects of Current",
    "difficulty": "medium",
    "question": "A proton moves perpendicular to a uniform magnetic field. If its speed is doubled while the field is unchanged, how does the radius of its circular path change?",
    "options": [
      "It doubles",
      "It becomes four times",
      "It is unchanged",
      "It halves"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "r=mv/(qB), so radius is directly proportional to speed.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-024",
    "section": "Physics",
    "topic": "Magnetic Effects of Current",
    "difficulty": "easy",
    "question": "What is the magnetic field at distance r from a long straight wire carrying current I?",
    "options": [
      "mu0 I/(4 pi r)",
      "mu0 I/(2 pi r)",
      "mu0 I r/(2 pi)",
      "mu0 I/(2 pi r^2)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a long straight conductor, B=mu0 I/(2pi r).",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-025",
    "section": "Physics",
    "topic": "Magnetic Effects of Current",
    "difficulty": "medium",
    "question": "A rectangular coil of 20 turns and area 0.01 m^2 carries 2 A in a 0.5 T field. What is the maximum torque on it?",
    "options": [
      "0.20 N m",
      "0.10 N m",
      "2.0 N m",
      "0.50 N m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Maximum torque=N I A B=20*2*0.01*0.5=0.20 N m.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-026",
    "section": "Physics",
    "topic": "Magnetism",
    "difficulty": "medium",
    "question": "A magnetic dipole of moment M is placed in a uniform field B at 60 degrees to the field. What is the magnitude of torque?",
    "options": [
      "(sqrt(3)/2)MB",
      "MB/2",
      "MB",
      "2MB"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Torque=MB sin60=(sqrt3/2)MB.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-027",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "medium",
    "question": "A conducting rod of length 0.5 m moves at 6 m/s perpendicular to a 0.4 T magnetic field. What motional emf is induced?",
    "options": [
      "0.12 V",
      "1.2 V",
      "0.8 V",
      "2.4 V"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "e=Blv=0.4*0.5*6=1.2 V.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-028",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "hard",
    "question": "The magnetic flux through a 50-turn coil changes uniformly from 0.020 Wb to 0.005 Wb in 0.10 s. What is the magnitude of induced emf?",
    "options": [
      "1.5 V",
      "7.5 V",
      "15 V",
      "5.0 V"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "e=N|Delta Phi|/Delta t=50*0.015/0.10=7.5 V.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-029",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "medium",
    "question": "A 40 ohm resistor and a 30 ohm inductive reactance are in series on an AC supply. What is the impedance magnitude?",
    "options": [
      "10 ohm",
      "35 ohm",
      "70 ohm",
      "50 ohm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Z=sqrt(R^2+XL^2)=sqrt(1600+900)=50 ohm.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-030",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "hard",
    "question": "In a series RLC circuit, R=20 ohm, XL=50 ohm and XC=20 ohm. What is the power factor?",
    "options": [
      "2/sqrt(13)",
      "1",
      "3/sqrt(13)",
      "1/sqrt(13)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Net reactance=30 ohm; Z=sqrt(20^2+30^2)=10sqrt13. Power factor=R/Z=2/sqrt13.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-031",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "easy",
    "question": "An ideal transformer has 200 turns on the primary and 50 turns on the secondary. If primary voltage is 240 V, what is secondary voltage?",
    "options": [
      "60 V",
      "30 V",
      "120 V",
      "480 V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Vs/Vp=Ns/Np=50/200=1/4, so Vs=60 V.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-032",
    "section": "Physics",
    "topic": "Dual Nature of Radiation and Matter",
    "difficulty": "medium",
    "question": "Light of photon energy 4.0 eV falls on a metal of work function 2.5 eV. What is the maximum kinetic energy of emitted electrons?",
    "options": [
      "2.5 eV",
      "6.5 eV",
      "4.0 eV",
      "1.5 eV"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Einstein equation gives Kmax=Ephoton-phi=4.0-2.5=1.5 eV.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-033",
    "section": "Physics",
    "topic": "Dual Nature of Radiation and Matter",
    "difficulty": "medium",
    "question": "An electron and a proton have the same de Broglie wavelength. Which quantity must be the same for them?",
    "options": [
      "Kinetic energy",
      "Momentum magnitude",
      "Speed",
      "Acceleration"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "lambda=h/p, so equal wavelength means equal momentum magnitude.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-034",
    "section": "Physics",
    "topic": "Atoms",
    "difficulty": "medium",
    "question": "For hydrogen, the radius of the Bohr orbit is proportional to n^2. What is r3/r1?",
    "options": [
      "9",
      "3",
      "6",
      "27"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "r_n proportional to n^2, so r3/r1=3^2=9.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-035",
    "section": "Physics",
    "topic": "Nuclei",
    "difficulty": "medium",
    "question": "A radioactive sample has a half-life of 6 h. What fraction remains after 18 h?",
    "options": [
      "1/16",
      "1/2",
      "1/8",
      "1/4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "18 h is three half-lives, so remaining fraction=(1/2)^3=1/8.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-036",
    "section": "Physics",
    "topic": "Nuclei",
    "difficulty": "hard",
    "question": "A nucleus has mass defect 0.020 u. Using 1 u c^2 = 931.5 MeV, what is its binding energy approximately?",
    "options": [
      "9.3 MeV",
      "18.6 MeV",
      "46.6 MeV",
      "37.3 MeV"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Binding energy=Delta m c^2=0.020*931.5=18.63 MeV.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-037",
    "section": "Physics",
    "topic": "Semiconductor Electronics",
    "difficulty": "medium",
    "question": "A transistor has current gain beta=80. If base current is 25 microA, what is collector current?",
    "options": [
      "20 mA",
      "3.2 mA",
      "0.32 mA",
      "2.0 mA"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Ic=beta Ib=80*25 microA=2000 microA=2.0 mA.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-038",
    "section": "Physics",
    "topic": "Semiconductor Electronics",
    "difficulty": "easy",
    "question": "Which logic gate gives output 1 only when both inputs are 1?",
    "options": [
      "NOR",
      "NOT",
      "AND",
      "OR"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "An AND gate outputs 1 only for input pair (1,1).",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-039",
    "section": "Physics",
    "topic": "Oscillations",
    "difficulty": "medium",
    "question": "A 0.5 kg mass is attached to a spring of force constant 200 N/m. What is its angular frequency?",
    "options": [
      "100 rad/s",
      "20 rad/s",
      "10 rad/s",
      "40 rad/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "omega=sqrt(k/m)=sqrt(200/0.5)=sqrt400=20 rad/s.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-040",
    "section": "Physics",
    "topic": "Circular Motion",
    "difficulty": "hard",
    "question": "A car moves on a frictionless banked road of radius 50 m at 10 m/s. Take g=10 m/s^2. What should tan(theta) be for no lateral friction?",
    "options": [
      "0.10",
      "0.20",
      "2.0",
      "0.50"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "tan theta=v^2/(rg)=100/(50*10)=0.20.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-041",
    "section": "Physics",
    "topic": "Rotational Dynamics",
    "difficulty": "hard",
    "question": "A disc and a ring of equal mass and radius roll without slipping down the same incline from rest. Which reaches the bottom first?",
    "options": [
      "The ring",
      "It depends only on mass",
      "Both together",
      "The disc"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Rolling acceleration is g sin theta/[1+I/(MR^2)]. For a disc I/(MR^2)=1/2, smaller than the ring's 1, so the disc accelerates more.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-042",
    "section": "Physics",
    "topic": "Surface Tension",
    "difficulty": "medium",
    "question": "The excess pressure inside a soap bubble of radius r and surface tension T is",
    "options": [
      "2T/r",
      "4T/r",
      "T/r",
      "8T/r"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A soap bubble has two liquid surfaces, giving excess pressure 4T/r.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-043",
    "section": "Physics",
    "topic": "Viscosity",
    "difficulty": "medium",
    "question": "For a small sphere falling through a viscous liquid under Stokes' law, terminal speed is proportional to which power of radius?",
    "options": [
      "r^3",
      "1/r",
      "r^2",
      "r"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Balancing Stokes drag with effective weight gives v_t proportional to r^2.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-044",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "hard",
    "question": "A Carnot engine operates between 500 K and 300 K. If it absorbs 1000 J from the hot reservoir, how much work does it perform?",
    "options": [
      "600 J",
      "800 J",
      "200 J",
      "400 J"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Efficiency=1-Tc/Th=1-300/500=0.4. Work=0.4*1000=400 J.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-045",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "medium",
    "question": "In Young's experiment, wavelength is changed from 500 nm to 600 nm with geometry fixed. By what factor does fringe width change?",
    "options": [
      "1.2",
      "2.0",
      "0.83",
      "1.5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Fringe width is proportional to wavelength, so factor=600/500=1.2.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-046",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "medium",
    "question": "Two identical capacitors of capacitance C are first connected in parallel and then in series. What is the ratio of equivalent capacitances C_parallel:C_series?",
    "options": [
      "1:4",
      "2:1",
      "4:1",
      "1:2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Parallel gives 2C, series gives C/2, so ratio=4:1.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-047",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "easy",
    "question": "A 100 W, 200 V appliance is operated at its rated voltage. What current does it draw?",
    "options": [
      "0.05 A",
      "0.5 A",
      "20 A",
      "2 A"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "P=VI, so I=100/200=0.5 A.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-048",
    "section": "Physics",
    "topic": "Moving Coil Galvanometer",
    "difficulty": "hard",
    "question": "A galvanometer has current sensitivity 20 divisions per mA and resistance 50 ohm. It is connected in series with 950 ohm and used as a voltmeter. What potential difference produces a deflection of one division?",
    "options": [
      "0.5 V",
      "0.005 V",
      "0.05 V",
      "5 V"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A sensitivity of 20 divisions per mA means one division requires 1/20 mA=0.05 mA=5*10^-5 A. The total resistance is 50+950=1000 ohm. Thus V=IR=(5*10^-5)(1000)=0.05 V.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-21",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-049",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "medium",
    "question": "Two coils have mutual inductance 0.20 H. If current in one changes at 5 A/s, what emf is induced in the other?",
    "options": [
      "1.0 V",
      "0.04 V",
      "5.0 V",
      "2.5 V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "e=M di/dt=0.20*5=1.0 V.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-050",
    "section": "Physics",
    "topic": "Photoelectric Effect",
    "difficulty": "hard",
    "question": "The threshold wavelength of a metal is 620 nm. Using hc=1240 eV nm, what is its work function?",
    "options": [
      "1.0 eV",
      "4.0 eV",
      "2.0 eV",
      "3.1 eV"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Work function=hc/lambda0=1240/620=2.0 eV.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-051",
    "section": "Chemistry",
    "topic": "Some Basic Concepts of Chemistry",
    "difficulty": "easy",
    "question": "How many moles are present in 9.0 g of water? Take molar mass of H2O as 18 g/mol.",
    "options": [
      "1.0 mol",
      "0.50 mol",
      "2.0 mol",
      "0.25 mol"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Moles=mass/molar mass=9/18=0.50 mol.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-052",
    "section": "Chemistry",
    "topic": "Structure of Atom",
    "difficulty": "medium",
    "question": "Which set of quantum numbers is not allowed for an electron?",
    "options": [
      "n=1, l=0, m=0, s=+1/2",
      "n=2, l=1, m=0, s=-1/2",
      "n=2, l=2, m=0, s=+1/2",
      "n=3, l=2, m=-1, s=+1/2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a given n, l can have values 0 to n-1. For n=2, l=2 is not allowed.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-053",
    "section": "Chemistry",
    "topic": "Chemical Bonding",
    "difficulty": "medium",
    "question": "What is the shape of NH3 according to VSEPR theory?",
    "options": [
      "Linear",
      "Trigonal planar",
      "Trigonal pyramidal",
      "Tetrahedral"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "NH3 has three bond pairs and one lone pair around nitrogen, giving a trigonal pyramidal molecular shape.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-054",
    "section": "Chemistry",
    "topic": "Redox Reactions",
    "difficulty": "easy",
    "question": "What is the oxidation number of sulfur in H2SO4?",
    "options": [
      "-2",
      "+2",
      "+4",
      "+6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "2(+1)+S+4(-2)=0, so S=+6.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-055",
    "section": "Chemistry",
    "topic": "Groups 1 and 2",
    "difficulty": "easy",
    "question": "Which alkali metal ion has the smallest ionic radius among Li+, Na+, K+ and Rb+?",
    "options": [
      "Li+",
      "K+",
      "Na+",
      "Rb+"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Within Group 1, ionic radius increases down the group; Li+ is the smallest.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-056",
    "section": "Chemistry",
    "topic": "States of Matter",
    "difficulty": "medium",
    "question": "At constant temperature, the pressure of an ideal gas is doubled. What happens to its volume?",
    "options": [
      "It doubles",
      "It is unchanged",
      "It becomes four times",
      "It becomes half"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Boyle's law gives PV=constant, so doubling P halves V.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-057",
    "section": "Chemistry",
    "topic": "Surface Chemistry",
    "difficulty": "easy",
    "question": "Which process involves accumulation of molecules only on the surface of a solid or liquid?",
    "options": [
      "Absorption",
      "Adsorption",
      "Sublimation",
      "Distillation"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Adsorption is a surface phenomenon; absorption occurs throughout the bulk.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-058",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "medium",
    "question": "Which reagent can distinguish ethene from ethane under ordinary laboratory conditions?",
    "options": [
      "Bromine water",
      "Aqueous ammonia",
      "Dilute HCl",
      "Sodium chloride solution"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Ethene decolourises bromine water by addition across the double bond; ethane does not.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-059",
    "section": "Chemistry",
    "topic": "Basic Principles of Organic Chemistry",
    "difficulty": "medium",
    "question": "Which intermediate is most stabilised by hyperconjugation?",
    "options": [
      "Tertiary carbocation",
      "Primary carbocation",
      "Methyl carbocation",
      "Carbanion with no alkyl group"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "More alkyl groups provide more hyperconjugative structures, so tertiary carbocations are most stabilised.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-060",
    "section": "Chemistry",
    "topic": "Chemistry in Everyday Life",
    "difficulty": "easy",
    "question": "Which type of drug is commonly used to neutralise excess stomach acid?",
    "options": [
      "Antibiotic",
      "Antacid",
      "Analgesic",
      "Antiseptic"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Antacids neutralise excess gastric acid.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-061",
    "section": "Chemistry",
    "topic": "Solid State",
    "difficulty": "easy",
    "question": "How many atoms are effectively present in one face-centred cubic unit cell?",
    "options": [
      "4",
      "6",
      "1",
      "2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "FCC has 8 corner atoms contributing 1 total and 6 face-centred atoms contributing 3, giving 4 atoms.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-062",
    "section": "Chemistry",
    "topic": "Solid State",
    "difficulty": "medium",
    "question": "A crystal has one atom at each corner and one at the body centre. What is its coordination number?",
    "options": [
      "8",
      "12",
      "4",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A body-centred cubic lattice has coordination number 8.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-063",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "medium",
    "question": "A solution contains 2 mol solute and 8 mol solvent. What is the mole fraction of solute?",
    "options": [
      "0.80",
      "0.20",
      "0.10",
      "0.25"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Mole fraction=2/(2+8)=0.20.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-064",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "hard",
    "question": "A 0.10 molal aqueous solution of a non-electrolyte has Kf for water = 1.86 K kg mol^-1. What is its freezing-point depression?",
    "options": [
      "1.86 K",
      "0.0186 K",
      "0.372 K",
      "0.186 K"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a non-electrolyte, DeltaTf=Kf m=1.86*0.10=0.186 K.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-065",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "medium",
    "question": "For the cell Zn|Zn2+||Cu2+|Cu, which electrode acts as the anode during spontaneous operation?",
    "options": [
      "Salt bridge",
      "Zinc electrode",
      "Copper electrode",
      "Both electrodes alternately"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Zinc is oxidised at the anode: Zn -> Zn2+ + 2e-.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-066",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "medium",
    "question": "If E°cathode=+0.34 V and E°anode=-0.76 V, what is E°cell?",
    "options": [
      "-0.42 V",
      "0.42 V",
      "-1.10 V",
      "1.10 V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "E°cell=E°cathode-E°anode=0.34-(-0.76)=1.10 V.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-067",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "hard",
    "question": "How much charge is required to deposit 1 mol of Ag from Ag+ ions?",
    "options": [
      "3 F",
      "2 F",
      "1 F",
      "0.5 F"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Ag+ + e- -> Ag requires one mole of electrons per mole of Ag, i.e. 1 faraday.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-068",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "medium",
    "question": "For a first-order reaction, which plot is linear with slope -k?",
    "options": [
      "[A] versus time",
      "ln[A] versus time",
      "1/[A] versus time",
      "rate versus [A]"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Integrated first-order law is ln[A]=ln[A]0-kt.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-069",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "easy",
    "question": "The unit of the rate constant for a first-order reaction is",
    "options": [
      "L mol^-1 s^-1",
      "mol L^-1 s^-1",
      "mol^-1 L s^-1",
      "s^-1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a first-order reaction, k has dimensions of time^-1.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-070",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "medium",
    "question": "A first-order reaction has half-life 20 min. What fraction of reactant remains after 60 min?",
    "options": [
      "1/2",
      "1/8",
      "1/4",
      "1/16"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "60 min is three half-lives, so remaining fraction=(1/2)^3=1/8.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-071",
    "section": "Chemistry",
    "topic": "p-Block Elements",
    "difficulty": "easy",
    "question": "Which allotrope of phosphorus is the most reactive?",
    "options": [
      "White phosphorus",
      "Black phosphorus",
      "Violet phosphorus",
      "Red phosphorus"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "White phosphorus has strained P4 tetrahedra and is the most reactive common allotrope.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-072",
    "section": "Chemistry",
    "topic": "p-Block Elements",
    "difficulty": "medium",
    "question": "Which oxide of nitrogen is a neutral oxide?",
    "options": [
      "N2O5",
      "NO2",
      "N2O3",
      "N2O"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "N2O is neutral; the others form acids with water or are acidic oxides.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-073",
    "section": "Chemistry",
    "topic": "d- and f-Block Elements",
    "difficulty": "medium",
    "question": "Why are many transition-metal ions coloured?",
    "options": [
      "Complete absence of unpaired electrons",
      "Electronic transitions between split d orbitals",
      "Nuclear transitions",
      "Presence of only s electrons"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Ligand fields split d orbitals, and d-d electronic transitions can absorb visible light.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-074",
    "section": "Chemistry",
    "topic": "d- and f-Block Elements",
    "difficulty": "easy",
    "question": "Which oxidation state is especially common for lanthanoids?",
    "options": [
      "+2",
      "+1",
      "+3",
      "+6"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The +3 oxidation state is the most characteristic for lanthanoids.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-075",
    "section": "Chemistry",
    "topic": "Coordination Compounds",
    "difficulty": "medium",
    "question": "What is the coordination number of cobalt in [Co(NH3)6]3+?",
    "options": [
      "6",
      "3",
      "4",
      "9"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Six monodentate NH3 ligands are directly bonded to cobalt, so coordination number is 6.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-076",
    "section": "Chemistry",
    "topic": "Coordination Compounds",
    "difficulty": "hard",
    "question": "For the octahedral complex [CoF6]3-, how many unpaired electrons are present in the metal ion?",
    "options": [
      "2",
      "4",
      "0",
      "1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "In [CoF6]3-, cobalt is in the +3 oxidation state, so Co3+ is d6. Fluoride is a weak-field ligand, giving a high-spin octahedral d6 configuration t2g^4 eg^2 with 4 unpaired electrons.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-21",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-077",
    "section": "Chemistry",
    "topic": "Haloalkanes and Haloarenes",
    "difficulty": "medium",
    "question": "Which substrate generally undergoes SN1 reaction fastest?",
    "options": [
      "Primary alkyl halide",
      "Methyl halide",
      "Tertiary alkyl halide",
      "Vinyl halide"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "SN1 rate depends on carbocation stability; tertiary carbocations are the most stable among these.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-078",
    "section": "Chemistry",
    "topic": "Haloalkanes and Haloarenes",
    "difficulty": "easy",
    "question": "Chlorobenzene is less reactive than chloroethane toward nucleophilic substitution mainly because",
    "options": [
      "the C-Cl bond in chlorobenzene has partial double-bond character",
      "chloroethane has resonance stabilisation",
      "benzene is ionic",
      "chlorine is absent from chlorobenzene"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Resonance gives the aryl C-Cl bond partial double-bond character, making it shorter and stronger.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-079",
    "section": "Chemistry",
    "topic": "Alcohols, Phenols and Ethers",
    "difficulty": "medium",
    "question": "Which compound is more acidic?",
    "options": [
      "Phenol",
      "Ethane",
      "Diethyl ether",
      "Ethanol"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Phenoxide ion is resonance-stabilised, making phenol more acidic than ethanol.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-080",
    "section": "Chemistry",
    "topic": "Alcohols, Phenols and Ethers",
    "difficulty": "easy",
    "question": "Ethanol reacts with sodium metal to produce",
    "options": [
      "ethene and water",
      "ethanal and hydrogen",
      "sodium acetate and hydrogen",
      "sodium ethoxide and hydrogen"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Alcohols react with sodium to form alkoxides and H2 gas.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-081",
    "section": "Chemistry",
    "topic": "Aldehydes, Ketones and Carboxylic Acids",
    "difficulty": "medium",
    "question": "Which of the following aldehydes undergoes the Cannizzaro reaction?",
    "options": [
      "Ethanal",
      "Propanal",
      "Benzaldehyde",
      "Butanal"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The Cannizzaro reaction is shown by aldehydes that do not contain an alpha hydrogen. Benzaldehyde has no alpha hydrogen, whereas ethanal, propanal and butanal do.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-21",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-082",
    "section": "Chemistry",
    "topic": "Aldehydes, Ketones and Carboxylic Acids",
    "difficulty": "medium",
    "question": "Which is the strongest acid among the following?",
    "options": [
      "Phenol",
      "Acetic acid",
      "Ethanol",
      "Trichloroacetic acid"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Three electron-withdrawing chlorine atoms strongly stabilise the trichloroacetate ion by the -I effect.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-083",
    "section": "Chemistry",
    "topic": "Amines",
    "difficulty": "medium",
    "question": "Aniline is less basic than methylamine mainly because",
    "options": [
      "methylamine is aromatic",
      "the nitrogen lone pair in aniline is delocalised into the benzene ring",
      "aniline has no lone pair",
      "aniline is positively charged"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Resonance delocalisation makes the lone pair on aniline less available for protonation.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-084",
    "section": "Chemistry",
    "topic": "Amines",
    "difficulty": "easy",
    "question": "Primary aromatic amines react with nitrous acid at 0-5 degrees C to form",
    "options": [
      "ethers",
      "amides",
      "diazonium salts",
      "alkanes"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Aromatic primary amines undergo diazotisation at low temperature.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-085",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "easy",
    "question": "Which monosaccharide is commonly called blood sugar?",
    "options": [
      "Cellulose",
      "Glucose",
      "Sucrose",
      "Fructose"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Glucose is the principal sugar circulating in blood.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-086",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "medium",
    "question": "Which linkage joins amino acids in proteins?",
    "options": [
      "Hydrogen bond only",
      "Phosphodiester bond",
      "Glycosidic bond",
      "Peptide bond"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A peptide bond is the amide linkage formed between amino and carboxyl groups of amino acids.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-087",
    "section": "Chemistry",
    "topic": "Polymers",
    "difficulty": "easy",
    "question": "Which monomer is used to make polyvinyl chloride (PVC)?",
    "options": [
      "Tetrafluoroethene",
      "Styrene",
      "Vinyl chloride",
      "Ethene"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "PVC is formed by addition polymerisation of vinyl chloride, CH2=CHCl.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-088",
    "section": "Chemistry",
    "topic": "Polymers",
    "difficulty": "medium",
    "question": "Nylon-6,6 is classified as a",
    "options": [
      "addition polymer",
      "inorganic polymer",
      "natural polymer",
      "condensation polymer"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Nylon-6,6 forms by condensation of a diamine and a dicarboxylic acid.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-089",
    "section": "Chemistry",
    "topic": "Green Chemistry",
    "difficulty": "easy",
    "question": "A major goal of green chemistry is to",
    "options": [
      "reduce hazardous substances and waste at the source",
      "replace catalysts with excess reagents",
      "maximise by-products",
      "increase use of toxic solvents"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Green chemistry aims to prevent pollution and reduce hazardous materials through better process design.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-090",
    "section": "Chemistry",
    "topic": "Nanochemistry",
    "difficulty": "medium",
    "question": "Nanomaterials often show properties different from bulk materials mainly because of",
    "options": [
      "high surface-area-to-volume ratio and size effects",
      "absence of atoms",
      "complete chemical inertness",
      "zero surface area"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At the nanoscale, surface atoms are a large fraction of total atoms and quantum-size effects can become important.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-091",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "medium",
    "question": "For an ideal dilute solution containing a nonvolatile solute, lowering of vapour pressure is directly related to",
    "options": [
      "molar mass of solvent only",
      "temperature alone",
      "mole fraction of solute",
      "density of solute only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Raoult's law gives relative lowering of vapour pressure equal to solute mole fraction for dilute solutions.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-092",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "medium",
    "question": "During electrolysis of molten NaCl, the product at the cathode is",
    "options": [
      "hydrogen gas",
      "chlorine gas",
      "sodium metal",
      "sodium hydroxide"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Na+ ions are reduced at the cathode: Na+ + e- -> Na.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-093",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "medium",
    "question": "Increasing temperature usually increases a reaction rate mainly because",
    "options": [
      "activation energy becomes zero",
      "a larger fraction of molecules has energy above the activation energy",
      "all collisions become perfectly elastic",
      "reactant concentration necessarily doubles"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Higher temperature shifts the energy distribution so more collisions can cross the activation barrier.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-094",
    "section": "Chemistry",
    "topic": "Coordination Compounds",
    "difficulty": "medium",
    "question": "The ligand NH3 is classified as",
    "options": [
      "neutral bidentate",
      "cationic monodentate",
      "anionic bidentate",
      "neutral monodentate"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "NH3 is neutral and donates one lone pair through nitrogen, so it is monodentate.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-095",
    "section": "Chemistry",
    "topic": "Alcohols, Phenols and Ethers",
    "difficulty": "medium",
    "question": "On vigorous oxidation with acidified potassium dichromate, ethanol is converted mainly into",
    "options": [
      "ethene",
      "methanoic acid",
      "ethanoic acid",
      "ethyne"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A primary alcohol such as ethanol is oxidised through ethanal to ethanoic acid under strong oxidising conditions.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-096",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "easy",
    "question": "Which vitamin is water-soluble?",
    "options": [
      "Vitamin E",
      "Vitamin D",
      "Vitamin C",
      "Vitamin A"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Vitamin C is water-soluble; A, D and E are fat-soluble.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-097",
    "section": "Chemistry",
    "topic": "Polymers",
    "difficulty": "medium",
    "question": "Bakelite is formed from phenol and",
    "options": [
      "adipic acid",
      "ethene",
      "vinyl chloride",
      "formaldehyde"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Bakelite is a phenol-formaldehyde condensation polymer.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-098",
    "section": "Chemistry",
    "topic": "Ionic Equilibria",
    "difficulty": "easy",
    "question": "If [H+]=1.0 x 10^-3 mol L^-1 in an aqueous solution, what is its pH?",
    "options": [
      "11",
      "3",
      "-3",
      "7"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "pH=-log10[H+]=-log10(10^-3)=3.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-099",
    "section": "Chemistry",
    "topic": "Chemical Thermodynamics",
    "difficulty": "medium",
    "question": "For a process at constant temperature and pressure, which condition indicates spontaneity?",
    "options": [
      "Delta G < 0",
      "Delta H must be positive",
      "Delta G > 0",
      "Delta G = 0 always"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At constant temperature and pressure, a process is thermodynamically spontaneous when Gibbs free-energy change is negative.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-100",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "hard",
    "question": "A current of 2.0 A passes through an electrolytic cell for 965 s. Approximately how many moles of electrons pass through the cell? Take F=96500 C/mol.",
    "options": [
      "0.020 mol",
      "0.010 mol",
      "0.20 mol",
      "0.050 mol"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Charge Q=It=2.0*965=1930 C. Moles of electrons=Q/F=1930/96500=0.020 mol.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-101",
    "section": "Mathematics",
    "topic": "Trigonometry II",
    "difficulty": "medium",
    "question": "If sin theta + cos theta = sqrt(2), what is sin 2theta?",
    "options": [
      "0",
      "sqrt(2)/2",
      "1/2",
      "1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "(sin theta+cos theta)^2=1+sin2theta=2, so sin2theta=1.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-102",
    "section": "Mathematics",
    "topic": "Straight Line",
    "difficulty": "easy",
    "question": "What is the slope of the line 3x-2y+6=0?",
    "options": [
      "-3/2",
      "3/2",
      "2/3",
      "-2/3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Writing y=(3/2)x+3 shows slope=3/2.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-103",
    "section": "Mathematics",
    "topic": "Circle",
    "difficulty": "medium",
    "question": "What is the radius of the circle x^2+y^2-6x+8y-11=0?",
    "options": [
      "5",
      "7",
      "4",
      "6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Completing squares gives (x-3)^2+(y+4)^2=36, so radius=6.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-104",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "Two fair dice are thrown. What is the probability that their sum is 9?",
    "options": [
      "1/9",
      "1/12",
      "5/36",
      "1/6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Favourable ordered pairs are (3,6),(4,5),(5,4),(6,3): 4/36=1/9.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-105",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "medium",
    "question": "If a complex number z satisfies |z-2|=|z+2|, what is the locus of z in the Argand plane?",
    "options": [
      "The real axis",
      "The circle |z|=2",
      "The line Re(z)=2",
      "The imaginary axis"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The condition says the point z is equidistant from the points 2 and -2 on the real axis. Their perpendicular bisector is the imaginary axis, so Re(z)=0.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-21",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-106",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "hard",
    "question": "How many four-digit even numbers can be formed from digits 1,2,3,4,5 without repetition?",
    "options": [
      "24",
      "60",
      "72",
      "48"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Last digit has 2 choices (2 or 4). The first three positions then have 4P3=24 arrangements, giving 2*24=48.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-107",
    "section": "Mathematics",
    "topic": "Functions",
    "difficulty": "easy",
    "question": "If f(x)=2x-3, what is f(f(4))?",
    "options": [
      "5",
      "7",
      "8",
      "10"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "f(4)=5 and f(5)=7.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-108",
    "section": "Mathematics",
    "topic": "Limits",
    "difficulty": "medium",
    "question": "Evaluate lim x->0 [sin(5x)/x].",
    "options": [
      "25",
      "5",
      "1",
      "0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "sin(5x)/x=5[sin(5x)/(5x)] ->5.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-109",
    "section": "Mathematics",
    "topic": "Continuity",
    "difficulty": "hard",
    "question": "For f(x)=(x^2-4)/(x-2) when x is not 2 and f(2)=k, what value of k makes f continuous at x=2?",
    "options": [
      "2",
      "0",
      "4",
      "6"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "For x!=2, f=x+2, whose limit at 2 is 4. Continuity requires k=4.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-110",
    "section": "Mathematics",
    "topic": "Conic Section",
    "difficulty": "medium",
    "question": "For the parabola y^2=12x, what is the length of its latus rectum?",
    "options": [
      "12",
      "3",
      "6",
      "24"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Standard form y^2=4ax gives 4a=12; latus rectum length=4a=12.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-111",
    "section": "Mathematics",
    "topic": "Mathematical Logic",
    "difficulty": "easy",
    "question": "The negation of the statement 'All real numbers are positive' is",
    "options": [
      "At least one real number is positive",
      "At least one real number is not positive",
      "All real numbers are non-positive",
      "No real number is positive"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The negation of a universal statement is an existential counterexample.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-112",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "For A=[[2,1],[0,3]], what is trace(A^2)?",
    "options": [
      "5",
      "11",
      "13",
      "25"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A^2=[[4,5],[0,9]]. Therefore trace(A^2)=4+9=13.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-21",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-113",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "hard",
    "question": "If A=[[1,1],[0,1]], what is A^3?",
    "options": [
      "[[1,3],[0,1]]",
      "[[1,2],[0,1]]",
      "[[1,1],[0,1]]",
      "[[1,4],[0,1]]"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "A=I+N with N^2=0, so A^3=I+3N=[[1,3],[0,1]].",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-114",
    "section": "Mathematics",
    "topic": "Determinants",
    "difficulty": "medium",
    "question": "What is the area of the triangle with vertices (0,0), (4,0) and (0,3)?",
    "options": [
      "6",
      "7",
      "12",
      "5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Area=(1/2)*base*height=(1/2)*4*3=6.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-115",
    "section": "Mathematics",
    "topic": "Pair of Straight Lines",
    "difficulty": "medium",
    "question": "The equation x^2-y^2=0 represents",
    "options": [
      "two parallel vertical lines",
      "one repeated line only",
      "a circle",
      "the pair y=x and y=-x"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "x^2-y^2=(x-y)(x+y)=0.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-116",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "medium",
    "question": "If a=(2,1,-1) and b=(1,3,2), what is a dot b?",
    "options": [
      "3",
      "-3",
      "1",
      "5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "a dot b=2*1+1*3+(-1)*2=3.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-117",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "hard",
    "question": "Vectors a=(1,0,1) and b=(0,2,0). What is the magnitude of a x b?",
    "options": [
      "2",
      "2sqrt(2)",
      "sqrt(2)",
      "4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "a x b=(-2,0,2), so |a x b|=sqrt(4+4)=2sqrt(2).",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-118",
    "section": "Mathematics",
    "topic": "Three Dimensional Geometry",
    "difficulty": "medium",
    "question": "Which equation represents the plane passing through (1,-2,3) and having normal vector 2i-j+2k?",
    "options": [
      "2x+y+2z-6=0",
      "x-2y+2z-11=0",
      "2x-y+2z-10=0",
      "2x-y+z-7=0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Using n.(r-r0)=0 gives 2(x-1)-(y+2)+2(z-3)=0. Simplifying gives 2x-y+2z-10=0.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-21",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-119",
    "section": "Mathematics",
    "topic": "Line and Plane",
    "difficulty": "medium",
    "question": "Which vector is normal to the plane 2x-y+3z=7?",
    "options": [
      "(1,2,3)",
      "(2,1,-3)",
      "(-1,2,3)",
      "(2,-1,3)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The coefficients of x,y,z give a normal vector: (2,-1,3).",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-120",
    "section": "Mathematics",
    "topic": "Line and Plane",
    "difficulty": "easy",
    "question": "Find the distance of the point (1,2,3) from the plane 2x+2y-z-3=0.",
    "options": [
      "3",
      "1",
      "2",
      "0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Substitution gives 2+4-3-3=0, so the point lies on the plane and distance is 0.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-121",
    "section": "Mathematics",
    "topic": "Linear Programming",
    "difficulty": "medium",
    "question": "For x>=0, y>=0 and x+y<=6, what is the maximum value of Z=2x+y?",
    "options": [
      "8",
      "12",
      "6",
      "10"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Check vertices (0,0),(6,0),(0,6): Z values 0,12,6. Maximum is 12.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-122",
    "section": "Mathematics",
    "topic": "Continuity",
    "difficulty": "medium",
    "question": "For f(x)=|x|, at which point is f not differentiable?",
    "options": [
      "x=-1",
      "Every real x",
      "x=1",
      "x=0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The left derivative at 0 is -1 and right derivative is +1, so f is not differentiable at 0.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-123",
    "section": "Mathematics",
    "topic": "Differentiation",
    "difficulty": "easy",
    "question": "If y=x^3-4x, what is dy/dx at x=2?",
    "options": [
      "10",
      "4",
      "8",
      "12"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "dy/dx=3x^2-4; at x=2 this is 12-4=8.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-124",
    "section": "Mathematics",
    "topic": "Differentiation",
    "difficulty": "medium",
    "question": "If y=e^(2x), what is d2y/dx2?",
    "options": [
      "2e^(2x)",
      "4e^(2x)",
      "8e^(2x)",
      "e^(2x)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "First derivative=2e^(2x), second derivative=4e^(2x).",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-125",
    "section": "Mathematics",
    "topic": "Differentiation",
    "difficulty": "hard",
    "question": "A curve is given parametrically by x=t^2+1 and y=t^3-3t. What is d2y/dx2 at t=1?",
    "options": [
      "3/4",
      "3",
      "3/2",
      "0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "dy/dx=(3t^2-3)/(2t)=(3/2)(t-1/t). Differentiating with respect to t gives (3/2)(1+1/t^2). Hence d2y/dx2=[(3/2)(1+1/t^2)]/(2t), which at t=1 equals 3/2.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-21",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-126",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "medium",
    "question": "For f(x)=x^2-6x+5, at what x-coordinate does the minimum occur?",
    "options": [
      "6",
      "3",
      "5",
      "-3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "f'(x)=2x-6=0 gives x=3, and f''=2>0.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-127",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "hard",
    "question": "What is the minimum distance from the point (0,3/2) to the parabola y=x^2?",
    "options": [
      "sqrt(2)/2",
      "sqrt(5)/2",
      "1",
      "3/2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "For a point (x,x^2) on the parabola, the squared distance is D^2=x^2+(x^2-3/2)^2=x^4-2x^2+9/4. Its derivative is 4x(x^2-1), so candidates are x=0 and x=+/-1. The minimum occurs at x=+/-1, where D^2=5/4. Thus D=sqrt(5)/2.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-21",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-128",
    "section": "Mathematics",
    "topic": "Indefinite Integration",
    "difficulty": "medium",
    "question": "Evaluate integral (3x^2+2) dx.",
    "options": [
      "x^3+2x+C",
      "x^2+2x+C",
      "3x^3+2x+C",
      "x^3+x^2+C"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Integrate termwise: integral 3x^2 dx=x^3 and integral 2 dx=2x.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-129",
    "section": "Mathematics",
    "topic": "Indefinite Integration",
    "difficulty": "hard",
    "question": "Evaluate integral [2x/(x^2+1)] dx.",
    "options": [
      "x^2/(x^2+1)+C",
      "1/(x^2+1)+C",
      "2ln(x^2+1)+C",
      "ln(x^2+1)+C"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Let u=x^2+1, du=2x dx, so the integral is ln u+C.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-130",
    "section": "Mathematics",
    "topic": "Definite Integration",
    "difficulty": "medium",
    "question": "Evaluate integral from 0 to 1 of x/(1+x^2) dx.",
    "options": [
      "(1/2)ln 2",
      "ln 2",
      "(1/4)ln 2",
      "1/2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Let u=1+x^2, so du=2x dx. The integral is (1/2) integral from 1 to 2 of du/u=(1/2)ln 2.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-21",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-131",
    "section": "Mathematics",
    "topic": "Definite Integration",
    "difficulty": "hard",
    "question": "Evaluate integral from 0 to pi/2 of sin^2 x dx.",
    "options": [
      "pi/2",
      "pi/8",
      "pi/4",
      "1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Using sin^2x=(1-cos2x)/2, the integral is pi/4.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-132",
    "section": "Mathematics",
    "topic": "Applications of Definite Integration",
    "difficulty": "medium",
    "question": "What is the area bounded by y=x, the x-axis, and x=4?",
    "options": [
      "4",
      "16",
      "8",
      "12"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Area=integral_0^4 x dx=8.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-133",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "Solve dy/dx=3x^2 with y(0)=2.",
    "options": [
      "y=x^3+2",
      "y=x^3",
      "y=3x^3+2",
      "y=x^2+2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Integrating gives y=x^3+C. From y(0)=2, C=2.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-134",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "hard",
    "question": "For x>0, y satisfies x(dy/dx)+2y=x^3 and y(1)=2. Find y(2).",
    "options": [
      "31/20",
      "37/20",
      "41/20",
      "49/20"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Dividing by x gives dy/dx+(2/x)y=x^2. The integrating factor is x^2, so d(x^2 y)/dx=x^4. Hence x^2 y=x^5/5+C. Using y(1)=2 gives C=9/5. Therefore y=x^3/5+9/(5x^2), and y(2)=8/5+9/20=41/20.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-21",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-135",
    "section": "Mathematics",
    "topic": "Probability Distribution",
    "difficulty": "medium",
    "question": "A random variable X takes values 0 and 1 with probabilities 0.3 and 0.7 respectively. What is E(X)?",
    "options": [
      "0.49",
      "0.7",
      "0.3",
      "1.0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "E(X)=0(0.3)+1(0.7)=0.7.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-136",
    "section": "Mathematics",
    "topic": "Binomial Distribution",
    "difficulty": "medium",
    "question": "For X~Binomial(n=4,p=1/2), what is P(X=2)?",
    "options": [
      "3/8",
      "1/2",
      "1/8",
      "1/4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "P(X=2)=C(4,2)(1/2)^4=6/16=3/8.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-137",
    "section": "Mathematics",
    "topic": "Binomial Distribution",
    "difficulty": "hard",
    "question": "For a binomial distribution with n=10 and p=0.3, what is the variance?",
    "options": [
      "0.21",
      "7.0",
      "3.0",
      "2.1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Variance=npq=10*0.3*0.7=2.1.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-138",
    "section": "Mathematics",
    "topic": "Trigonometric Functions",
    "difficulty": "medium",
    "question": "If tan theta=3/4 and theta is acute, what is sin theta?",
    "options": [
      "5/4",
      "3/5",
      "3/4",
      "4/5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Use a 3-4-5 right triangle: sin theta=3/5.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-139",
    "section": "Mathematics",
    "topic": "Matrices",
    "difficulty": "medium",
    "question": "If A is a 2x2 matrix with det(A)=5, what is det(2A)?",
    "options": [
      "40",
      "10",
      "25",
      "20"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "For a 2x2 matrix, det(kA)=k^2 det(A). Hence det(2A)=4*5=20.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-140",
    "section": "Mathematics",
    "topic": "Determinants",
    "difficulty": "hard",
    "question": "If det([[x,1],[2,x]])=0, what are the possible values of x?",
    "options": [
      "x=+sqrt(2) or -sqrt(2)",
      "x=0",
      "x=2 only",
      "x=-2 only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Determinant=x^2-2. Setting it to zero gives x=+/-sqrt2.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-141",
    "section": "Mathematics",
    "topic": "Vectors",
    "difficulty": "medium",
    "question": "What is the unit vector in the direction of (3,4,0)?",
    "options": [
      "(4/5,3/5,0)",
      "(3/5,4/5,0)",
      "(1/3,1/4,0)",
      "(3,4,0)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Magnitude is 5, so divide each component by 5.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-142",
    "section": "Mathematics",
    "topic": "Three Dimensional Geometry",
    "difficulty": "hard",
    "question": "What is the cosine of the acute angle between the planes x+2y+2z=5 and 2x-y+2z=7?",
    "options": [
      "2/3",
      "1/3",
      "4/9",
      "5/9"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The normal vectors are n1=(1,2,2) and n2=(2,-1,2). Their dot product is 4 and each has magnitude 3. Hence cos theta=|n1.n2|/(|n1||n2|)=4/9.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-21",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-143",
    "section": "Mathematics",
    "topic": "Linear Programming",
    "difficulty": "medium",
    "question": "For x>=0, y>=0, 2x+y<=8 and x+2y<=8, which point is a common feasible vertex where both constraint lines meet?",
    "options": [
      "(2,2)",
      "(4,4)",
      "(8/3,8/3)",
      "(8,0)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Solve 2x+y=8 and x+2y=8. Subtraction gives x=y, hence 3x=8 and x=y=8/3.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-144",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "medium",
    "question": "For f(x)=x^3-3x, what are the critical points?",
    "options": [
      "x=+1 and x=-1",
      "x=3 only",
      "x=+sqrt(3) and -sqrt(3)",
      "x=0 only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "f'(x)=3x^2-3=0 gives x=+/-1.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-145",
    "section": "Mathematics",
    "topic": "Indefinite Integration",
    "difficulty": "easy",
    "question": "Evaluate integral cos x dx.",
    "options": [
      "sin x + C",
      "-cos x + C",
      "cos x + C",
      "-sin x + C"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The derivative of sin x is cos x.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-146",
    "section": "Mathematics",
    "topic": "Definite Integration",
    "difficulty": "medium",
    "question": "If f is odd, what is integral from -a to a of f(x) dx?",
    "options": [
      "2 integral from 0 to a f(x) dx",
      "It is always positive",
      "0",
      "a"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The integral of an odd function over symmetric limits is zero.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-147",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "medium",
    "question": "What is the order of the differential equation d3y/dx3 + (dy/dx)^2 = 0?",
    "options": [
      "3",
      "1",
      "2",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The highest derivative present is the third derivative, so the order is 3.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-148",
    "section": "Mathematics",
    "topic": "Probability Distribution",
    "difficulty": "hard",
    "question": "A random variable X has P(X=1)=k, P(X=2)=2k and P(X=3)=3k. What is k?",
    "options": [
      "1/3",
      "1/6",
      "1/5",
      "1/9"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Probabilities sum to 1: k+2k+3k=6k=1, so k=1/6.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-149",
    "section": "Mathematics",
    "topic": "Binomial Distribution",
    "difficulty": "medium",
    "question": "For X~Binomial(n,p), what is the mean?",
    "options": [
      "p/n",
      "np(1-p)",
      "np",
      "n/p"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The mean of a binomial distribution is np.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
  {
    "id": "mht-cet-2026-pcm-full-mock-01-150",
    "section": "Mathematics",
    "topic": "Applications of Definite Integration",
    "difficulty": "hard",
    "question": "What is the area between y=x^2 and y=2x from x=0 to x=2?",
    "options": [
      "8/3",
      "2",
      "2/3",
      "4/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "On [0,2], 2x>=x^2. Area=integral_0^2 (2x-x^2)dx=[x^2-x^3/3]_0^2=4-8/3=4/3.",
    "source": {
      "reference": "MHT CET 2026 PCM syllabus alignment",
      "url": "https://cetcell.mahacet.org/syllabus-and-marking-scheme/",
      "checkedOn": "2026-08-20",
      "kind": "original"
    }
  },
];
