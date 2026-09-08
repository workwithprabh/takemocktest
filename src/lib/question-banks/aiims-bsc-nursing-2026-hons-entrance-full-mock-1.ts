import type { Question } from '../questions';

// Frozen Main Brain handoff content, integrated mechanically on 8 September
// 2026. AIIMS B.Sc. (Hons.) Nursing 2026, 100 questions on the official 30/30/30/10 shell.
// Records are copied field-for-field from the approved package; stems,
// options, answer keys, explanations, sections, difficulty, marking and
// source metadata are not rewritten here.

export const AIIMS_BSC_NURSING_2026_HONS_ENTRANCE_FULL_MOCK_1: Question[] = [
  {
    "id": "aiims-bsc-nursing-2026-physics-001",
    "section": "Physics",
    "topic": "Units and dimensions",
    "difficulty": "easy",
    "question": "A quantity is defined as Q = force × time / area. Its SI unit is",
    "options": [
      "N m",
      "Pa s",
      "J s",
      "kg m s^-2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Force per area is pressure, so force × time / area has unit pascal-second, Pa s.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-002",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "medium",
    "question": "A scooter starts from rest with constant acceleration 2.5 m/s². What speed does it reach after 8 s?",
    "options": [
      "16 m/s",
      "25 m/s",
      "20 m/s",
      "10 m/s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Using v=u+at gives v=0+2.5×8=20 m/s.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-003",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "hard",
    "question": "A ball is thrown vertically upward at 19.6 m/s. Taking g=9.8 m/s², the time to reach the highest point is",
    "options": [
      "9.8 s",
      "2 s",
      "1 s",
      "4 s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "At the top v=0, so t=u/g=19.6/9.8=2 s.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-004",
    "section": "Physics",
    "topic": "Newton laws",
    "difficulty": "medium",
    "question": "A 6 kg box on a horizontal frictionless floor is pulled by a 24 N horizontal force. Its acceleration is",
    "options": [
      "0.25 m/s²",
      "4 m/s²",
      "18 m/s²",
      "144 m/s²"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Newton's second law gives a=F/m=24/6=4 m/s².",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-005",
    "section": "Physics",
    "topic": "Friction",
    "difficulty": "easy",
    "question": "A 10 kg block rests on a horizontal surface with coefficient of static friction 0.30. Taking g=10 m/s², the greatest horizontal force that can be applied without moving it is",
    "options": [
      "100 N",
      "300 N",
      "30 N",
      "3 N"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Maximum static friction is μsN=0.30×100=30 N.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-006",
    "section": "Physics",
    "topic": "Work energy",
    "difficulty": "medium",
    "question": "A 2 kg object moving at 6 m/s is brought to rest. The magnitude of the work done by the retarding force is",
    "options": [
      "36 J",
      "72 J",
      "12 J",
      "18 J"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "The loss of kinetic energy is 1/2 mv²=1/2×2×36=36 J.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-007",
    "section": "Physics",
    "topic": "Work, power and efficiency",
    "difficulty": "hard",
    "question": "A motor raises a 150 kg equipment cart vertically by 4 m in 12 s while drawing 800 W of electrical power. Taking g=10 m/s², the mechanical efficiency of the lifting process is closest to",
    "options": [
      "50%",
      "75%",
      "62.5%",
      "80%"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Useful mechanical power is mgh/t=(150×10×4)/12=500 W. Efficiency=500/800=0.625=62.5%.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-008",
    "section": "Physics",
    "topic": "Circular motion",
    "difficulty": "medium",
    "question": "A stone moves in a circle of radius 2 m at speed 4 m/s. Its centripetal acceleration is",
    "options": [
      "4 m/s²",
      "16 m/s²",
      "2 m/s²",
      "8 m/s²"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Centripetal acceleration v²/r=16/2=8 m/s².",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-009",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "easy",
    "question": "If the distance between two point masses is doubled while the masses are unchanged, their gravitational force becomes",
    "options": [
      "one fourth",
      "four times",
      "one half",
      "twice"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Newtonian gravitational force varies inversely as the square of separation, so doubling r gives F/4.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-010",
    "section": "Physics",
    "topic": "Elasticity",
    "difficulty": "medium",
    "question": "A wire of original length 2.0 m extends by 1.0 mm under load. The strain is",
    "options": [
      "2×10^-3",
      "5×10^-3",
      "5×10^-4",
      "2×10^-4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Strain=ΔL/L=0.001/2=5×10^-4.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-011",
    "section": "Physics",
    "topic": "Fluids",
    "difficulty": "hard",
    "question": "Water flows through a horizontal pipe whose cross-sectional area narrows from 6 cm² to 2 cm². If the speed in the wider part is 1.5 m/s, the speed in the narrow part is",
    "options": [
      "3.0 m/s",
      "6.0 m/s",
      "0.5 m/s",
      "4.5 m/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Continuity A1v1=A2v2 gives v2=(6/2)×1.5=4.5 m/s.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-012",
    "section": "Physics",
    "topic": "Surface tension",
    "difficulty": "medium",
    "question": "Small liquid drops tend to become spherical mainly because a sphere",
    "options": [
      "has no internal pressure",
      "maximizes volume for a given mass only",
      "minimizes surface area for a given volume",
      "has zero surface tension"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Surface energy is proportional to surface area, and the sphere has the least area for a given volume.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-013",
    "section": "Physics",
    "topic": "Thermal physics",
    "difficulty": "easy",
    "question": "A 0.20 kg metal piece with specific heat 500 J kg^-1 K^-1 is heated by 25 K. The heat absorbed is",
    "options": [
      "1000 J",
      "2500 J",
      "5000 J",
      "250 J"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Q=mcΔT=0.20×500×25=2500 J.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-014",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "An ideal gas absorbs 600 J of heat and does 240 J of work. Its increase in internal energy is",
    "options": [
      "240 J",
      "600 J",
      "840 J",
      "360 J"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Using ΔU=Q-W, ΔU=600-240=360 J.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-015",
    "section": "Physics",
    "topic": "Kinetic theory",
    "difficulty": "hard",
    "question": "At the same absolute temperature, which gas particles have the greatest root-mean-square speed?",
    "options": [
      "Only monatomic gases move",
      "The particles with the largest molar mass",
      "All gases have the same rms speed",
      "The particles with the smallest molar mass"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "vrms is proportional to 1/sqrt(M) at fixed temperature.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-016",
    "section": "Physics",
    "topic": "Oscillations",
    "difficulty": "medium",
    "question": "For a simple pendulum of small amplitude, if its length is made four times larger, its time period becomes",
    "options": [
      "four times as large",
      "twice as large",
      "half as large",
      "unchanged"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "T=2πsqrt(L/g), so increasing L by 4 multiplies T by 2.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-017",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "easy",
    "question": "A wave has frequency 250 Hz and wavelength 1.2 m. Its speed is",
    "options": [
      "251.2 m/s",
      "300 m/s",
      "30 m/s",
      "208 m/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Wave speed v=fλ=250×1.2=300 m/s.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-018",
    "section": "Physics",
    "topic": "Sound",
    "difficulty": "medium",
    "question": "When a stationary listener hears a higher frequency from an approaching source, the effect is called",
    "options": [
      "polarization",
      "resonance only",
      "diffraction",
      "Doppler effect"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Relative motion between source and observer changes observed frequency through the Doppler effect.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-019",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "hard",
    "question": "Two point charges +2 μC and +8 μC are 30 cm apart. The force on each has",
    "options": [
      "a larger magnitude on the +8 μC charge",
      "a larger magnitude on the +2 μC charge",
      "the same magnitude and opposite direction",
      "the same direction"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "By Newton's third law, electrostatic interaction forces are equal in magnitude and opposite in direction.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-020",
    "section": "Physics",
    "topic": "Electric potential",
    "difficulty": "medium",
    "question": "Moving a charge along an equipotential surface requires electrostatic work equal to",
    "options": [
      "infinity",
      "zero",
      "the electric field magnitude",
      "qV"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Potential difference along an equipotential surface is zero, so W=qΔV=0.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-021",
    "section": "Physics",
    "topic": "Capacitance",
    "difficulty": "easy",
    "question": "Two identical capacitors of capacitance C are connected in series. Their equivalent capacitance is",
    "options": [
      "C/2",
      "C/4",
      "2C",
      "C"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "For two equal capacitors in series, 1/Ceq=2/C, so Ceq=C/2.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-022",
    "section": "Physics",
    "topic": "Current electricity",
    "difficulty": "medium",
    "question": "A 12 V battery is connected across a 4 Ω resistor. The current is",
    "options": [
      "3 A",
      "48 A",
      "0.33 A",
      "8 A"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Ohm's law gives I=V/R=12/4=3 A.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-023",
    "section": "Physics",
    "topic": "Current electricity",
    "difficulty": "hard",
    "question": "Two resistors 6 Ω and 3 Ω are connected in parallel. Their equivalent resistance is",
    "options": [
      "4.5 Ω",
      "2 Ω",
      "1 Ω",
      "9 Ω"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "1/R=1/6+1/3=1/2, so R=2 Ω.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-024",
    "section": "Physics",
    "topic": "Electrical power",
    "difficulty": "medium",
    "question": "A 100 W lamp operates for 5 hours. The electrical energy used is",
    "options": [
      "5 kWh",
      "500 kWh",
      "20 kWh",
      "0.5 kWh"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Energy=power×time=0.1 kW×5 h=0.5 kWh.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-025",
    "section": "Physics",
    "topic": "Magnetism",
    "difficulty": "easy",
    "question": "A charged particle moving parallel to a uniform magnetic field experiences magnetic force",
    "options": [
      "qvB",
      "maximum possible",
      "opposite to the field",
      "zero"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Magnetic force qvB sinθ is zero for θ=0 when velocity is parallel to the field.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-026",
    "section": "Physics",
    "topic": "Electromagnetic induction",
    "difficulty": "medium",
    "question": "A coil experiences an induced emf when the magnetic flux linked with it",
    "options": [
      "is always zero only",
      "changes with time",
      "has no direction",
      "is constant and nonzero"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Faraday's law states that induced emf is proportional to the rate of change of magnetic flux.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-027",
    "section": "Physics",
    "topic": "Optics",
    "difficulty": "hard",
    "question": "A concave mirror has focal length 20 cm. An object is placed 60 cm in front of it. The magnitude of image distance is",
    "options": [
      "60 cm",
      "15 cm",
      "30 cm",
      "40 cm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Using 1/f=1/v+1/u in magnitudes for a real object and image, 1/20=1/v+1/60, giving v=30 cm.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-028",
    "section": "Physics",
    "topic": "Optics",
    "difficulty": "medium",
    "question": "A convex lens of focal length 25 cm has power",
    "options": [
      "-4 D",
      "+0.25 D",
      "+25 D",
      "+4 D"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Power P=1/f in metres=1/0.25=+4 dioptres.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-029",
    "section": "Physics",
    "topic": "Wave optics",
    "difficulty": "easy",
    "question": "In Young's double-slit experiment, fringe spacing increases if",
    "options": [
      "wavelength is decreased",
      "the screen distance is increased",
      "both wavelength and screen distance are decreased",
      "slit separation is increased"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Fringe width β=λD/d, so increasing D increases spacing.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-physics-030",
    "section": "Physics",
    "topic": "Modern physics",
    "difficulty": "medium",
    "question": "A photon of frequency f has energy",
    "options": [
      "mc² only",
      "h/f",
      "f/h",
      "hf"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Planck's relation is E=hf.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-001",
    "section": "Chemistry",
    "topic": "Mole concept",
    "difficulty": "easy",
    "question": "How many moles are present in 18 g of water, H2O?",
    "options": [
      "18 mol",
      "1 mol",
      "0.5 mol",
      "2 mol"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "The molar mass of water is 18 g/mol, so 18 g is 1 mol.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-002",
    "section": "Chemistry",
    "topic": "Atomic structure",
    "difficulty": "medium",
    "question": "For an electron in a hydrogen atom, the principal quantum number n mainly specifies the",
    "options": [
      "spin direction only",
      "nuclear charge",
      "orientation of orbital only",
      "main energy level"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "The principal quantum number labels the main shell and strongly determines energy and size.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-003",
    "section": "Chemistry",
    "topic": "Periodic properties",
    "difficulty": "hard",
    "question": "Across a period from left to right, atomic radius generally",
    "options": [
      "decreases",
      "first becomes infinite",
      "increases",
      "remains exactly constant"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Increasing effective nuclear charge pulls electrons closer across a period.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-004",
    "section": "Chemistry",
    "topic": "Chemical bonding",
    "difficulty": "medium",
    "question": "The shape of methane, CH4, is",
    "options": [
      "square planar",
      "tetrahedral",
      "trigonal planar",
      "linear"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Four bonding pairs around carbon with sp3 hybridization give a tetrahedral geometry.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-005",
    "section": "Chemistry",
    "topic": "Chemical bonding",
    "difficulty": "easy",
    "question": "Which molecule has a bent molecular shape?",
    "options": [
      "BeCl2",
      "BF3",
      "H2O",
      "CO2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Water has two bonds and two lone pairs on oxygen, giving a bent molecular shape.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-006",
    "section": "Chemistry",
    "topic": "States of matter",
    "difficulty": "medium",
    "question": "At constant temperature, Boyle's law states that for a fixed amount of ideal gas",
    "options": [
      "V/T is constant",
      "PV is constant",
      "P/V is constant",
      "P+V is constant"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Boyle's law gives P∝1/V at constant temperature, so PV is constant.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-007",
    "section": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "hard",
    "question": "For an exothermic reaction at constant pressure, the enthalpy change ΔH is",
    "options": [
      "positive",
      "zero in every case",
      "negative",
      "equal to entropy"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Exothermic processes release heat, so products have lower enthalpy and ΔH<0.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-008",
    "section": "Chemistry",
    "topic": "Equilibrium",
    "difficulty": "medium",
    "question": "For N2(g)+3H2(g)⇌2NH3(g), increasing pressure at constant temperature shifts equilibrium toward",
    "options": [
      "no direction ever",
      "solid nitrogen",
      "NH3",
      "N2 and H2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "The product side has fewer moles of gas, so higher pressure favors ammonia formation.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-009",
    "section": "Chemistry",
    "topic": "Ionic equilibrium",
    "difficulty": "easy",
    "question": "A solution with pH 3 has hydrogen ion concentration",
    "options": [
      "0.3 M",
      "1×10^-3 M",
      "3 M",
      "1×10^3 M"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "pH=-log[H+], so [H+]=10^-3 M.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-010",
    "section": "Chemistry",
    "topic": "Redox",
    "difficulty": "medium",
    "question": "In the reaction Zn + Cu2+ → Zn2+ + Cu, zinc is",
    "options": [
      "reduced",
      "unchanged in oxidation state",
      "a catalyst",
      "oxidized"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Zinc loses two electrons as its oxidation state rises from 0 to +2, so it is oxidized.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-011",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "hard",
    "question": "At the cathode of an electrolytic cell, the process is always",
    "options": [
      "neutralization",
      "reduction",
      "precipitation only",
      "oxidation"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Cathodes are sites of reduction in both galvanic and electrolytic cells.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-012",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "medium",
    "question": "If 1 mol of glucose is dissolved to make 2 L of solution, the molarity is",
    "options": [
      "0.25 M",
      "2 M",
      "0.5 M",
      "1 M"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Molarity=moles/volume in litres=1/2=0.5 M.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-013",
    "section": "Chemistry",
    "topic": "Colligative properties",
    "difficulty": "easy",
    "question": "Adding a nonvolatile solute to a solvent at fixed temperature causes the solvent vapor pressure to",
    "options": [
      "decrease",
      "increase",
      "remain exactly unchanged",
      "become zero for any amount"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "A nonvolatile solute lowers solvent mole fraction and therefore lowers vapor pressure.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-014",
    "section": "Chemistry",
    "topic": "Chemical kinetics",
    "difficulty": "medium",
    "question": "For a first-order reaction, the half-life is",
    "options": [
      "zero at high concentration",
      "equal to rate constant",
      "directly proportional to initial concentration",
      "independent of initial concentration"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "For first-order kinetics t1/2=ln2/k and does not depend on initial concentration.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-015",
    "section": "Chemistry",
    "topic": "Surface chemistry",
    "difficulty": "hard",
    "question": "Adsorption differs from absorption because adsorption is primarily a",
    "options": [
      "gas law",
      "bulk-only phenomenon",
      "nuclear process",
      "surface phenomenon"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Adsorption concentrates species at a surface, whereas absorption involves the bulk phase.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-016",
    "section": "Chemistry",
    "topic": "Hydrogen",
    "difficulty": "medium",
    "question": "Hydrogen peroxide can act as both an oxidizing and reducing agent because oxygen in H2O2 has oxidation state",
    "options": [
      "-1",
      "-2",
      "0",
      "+2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "The -1 oxidation state is intermediate, allowing peroxide oxygen to be oxidized or reduced.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-017",
    "section": "Chemistry",
    "topic": "s-Block",
    "difficulty": "easy",
    "question": "Sodium is stored under kerosene mainly because it",
    "options": [
      "is denser than mercury",
      "is radioactive",
      "reacts rapidly with air and moisture",
      "dissolves in kerosene to form salt"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Sodium reacts vigorously with oxygen and water, so kerosene isolates it from air and moisture.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-018",
    "section": "Chemistry",
    "topic": "p-Block",
    "difficulty": "medium",
    "question": "The unusually high boiling point of water compared with H2S is mainly due to",
    "options": [
      "metallic bonding",
      "ionic bonding in water",
      "intermolecular hydrogen bonding",
      "greater molar mass of water"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Strong hydrogen bonding between water molecules raises the energy needed for vaporization.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-019",
    "section": "Chemistry",
    "topic": "d-Block",
    "difficulty": "hard",
    "question": "Transition metal ions are often colored because of",
    "options": [
      "electronic transitions involving partially filled d levels",
      "radioactive decay",
      "proton transfer only",
      "s-orbital absence"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Splitting of d orbitals in ligand fields permits absorption of visible light through d-electron transitions.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-020",
    "section": "Chemistry",
    "topic": "Coordination chemistry",
    "difficulty": "medium",
    "question": "In [Co(NH3)6]3+, the coordination number of cobalt is",
    "options": [
      "9",
      "6",
      "12",
      "3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Six monodentate ammonia ligands each donate one pair, giving coordination number 6.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-021",
    "section": "Chemistry",
    "topic": "Organic chemistry",
    "difficulty": "easy",
    "question": "The carbon atoms in ethene, C2H4, are predominantly",
    "options": [
      "unhybridized",
      "sp3 hybridized",
      "sp hybridized",
      "sp2 hybridized"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Each alkene carbon has three sigma domains and one unhybridized p orbital, corresponding to sp2 hybridization.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-022",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "medium",
    "question": "Benzene most characteristically undergoes",
    "options": [
      "electrophilic substitution",
      "nucleophilic addition across three isolated double bonds",
      "free-radical polymerization under all conditions",
      "simple ionic dissociation"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Aromatic stabilization favors substitution reactions that preserve the benzene ring.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-023",
    "section": "Chemistry",
    "topic": "Haloalkanes",
    "difficulty": "hard",
    "question": "A tertiary alkyl halide in a polar protic solvent is comparatively favorable for",
    "options": [
      "SN1 substitution",
      "direct formation of an alkyne only",
      "electrophilic aromatic substitution",
      "SN2 backside attack"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Tertiary carbocations are relatively stabilized, and polar protic solvents favor ionization in SN1 reactions.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-024",
    "section": "Chemistry",
    "topic": "Alcohols",
    "difficulty": "medium",
    "question": "Oxidation of a primary alcohol under controlled conditions can first produce an",
    "options": [
      "amide",
      "ketone only",
      "alkane",
      "aldehyde"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Primary alcohols are first oxidized to aldehydes before further oxidation to carboxylic acids.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-025",
    "section": "Chemistry",
    "topic": "Aldehydes and ketones",
    "difficulty": "easy",
    "question": "Tollens reagent is commonly used to distinguish an aldehyde from a ketone because aldehydes can",
    "options": [
      "produce nitrogen gas",
      "form sodium chloride",
      "reduce Ag+ to metallic silver",
      "dehydrate instantly"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Aldehydes reduce Tollens reagent, depositing metallic silver, while ordinary ketones do not.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-026",
    "section": "Chemistry",
    "topic": "Carboxylic acids",
    "difficulty": "medium",
    "question": "Ethanoic acid reacts with ethanol in the presence of acid catalyst to form",
    "options": [
      "an alkane and oxygen",
      "a ketone only",
      "an ester and water",
      "an amide and hydrogen"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Fischer esterification of a carboxylic acid with an alcohol produces an ester plus water.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-027",
    "section": "Chemistry",
    "topic": "Amines",
    "difficulty": "hard",
    "question": "Aniline is less basic than ethylamine mainly because the nitrogen lone pair in aniline is",
    "options": [
      "in a d orbital",
      "delocalized into the benzene ring",
      "absent",
      "protonated permanently"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Resonance delocalization makes the aniline lone pair less available to bind a proton.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-028",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "medium",
    "question": "The linkage joining amino acids in a protein is a",
    "options": [
      "peptide bond",
      "glycosidic bond",
      "phosphodiester bond",
      "hydrogen bond only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "A peptide bond is an amide linkage formed between the carboxyl group of one amino acid and amino group of another.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-029",
    "section": "Chemistry",
    "topic": "Polymers",
    "difficulty": "easy",
    "question": "The monomer used to make polyvinyl chloride is",
    "options": [
      "caprolactam",
      "styrene oxide",
      "ethylene glycol",
      "vinyl chloride"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "PVC forms by addition polymerization of chloroethene, commonly called vinyl chloride.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-chemistry-030",
    "section": "Chemistry",
    "topic": "Chemistry in everyday life",
    "difficulty": "medium",
    "question": "Antacids relieve excess gastric acidity mainly by",
    "options": [
      "stopping all digestion",
      "neutralizing hydrochloric acid",
      "increasing acid secretion",
      "oxidizing stomach proteins"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Basic antacid ingredients react with and neutralize excess gastric HCl.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-001",
    "section": "Biology",
    "topic": "Cell biology",
    "difficulty": "easy",
    "question": "The organelle most directly responsible for oxidative phosphorylation in eukaryotic cells is the",
    "options": [
      "Golgi apparatus",
      "lysosome",
      "mitochondrion",
      "centriole"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "The electron transport chain and ATP synthase are located in the inner mitochondrial membrane.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-002",
    "section": "Biology",
    "topic": "Cell biology",
    "difficulty": "medium",
    "question": "Ribosomes are the cellular sites of",
    "options": [
      "lipid storage",
      "glycogen breakdown only",
      "DNA replication only",
      "protein synthesis"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Ribosomes translate mRNA into polypeptide chains.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-003",
    "section": "Biology",
    "topic": "Cell cycle",
    "difficulty": "hard",
    "question": "DNA replication occurs mainly during which phase of the cell cycle?",
    "options": [
      "S phase",
      "M phase",
      "G1 phase",
      "G2 phase"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Chromosomal DNA is duplicated during the synthesis or S phase.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-004",
    "section": "Biology",
    "topic": "Biomolecules",
    "difficulty": "medium",
    "question": "The monomers of DNA are",
    "options": [
      "amino acids",
      "fatty acids",
      "deoxyribonucleotides",
      "monosaccharides only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "DNA is a polymer of deoxyribonucleotides linked by phosphodiester bonds.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-005",
    "section": "Biology",
    "topic": "Genetics",
    "difficulty": "easy",
    "question": "If T is dominant to t, the cross Tt × tt produces what expected fraction of dominant-phenotype offspring?",
    "options": [
      "3/4",
      "all",
      "1/4",
      "1/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Half the offspring are expected Tt and show the dominant phenotype; half are tt.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-006",
    "section": "Biology",
    "topic": "Genetics",
    "difficulty": "medium",
    "question": "A test cross is performed by crossing an individual with dominant phenotype and unknown genotype with a",
    "options": [
      "homozygous recessive individual",
      "different species",
      "homozygous dominant individual only",
      "heterozygous individual"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "A homozygous recessive partner reveals whether the tested individual carries a recessive allele.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-007",
    "section": "Biology",
    "topic": "Molecular genetics",
    "difficulty": "hard",
    "question": "During transcription, RNA polymerase uses which strand as a template?",
    "options": [
      "both DNA strands simultaneously for one RNA",
      "one DNA strand",
      "the newly made RNA strand",
      "a protein strand"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "RNA polymerase reads one DNA template strand to synthesize complementary RNA.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-008",
    "section": "Biology",
    "topic": "Molecular genetics",
    "difficulty": "medium",
    "question": "In translation, the anticodon is located on",
    "options": [
      "rRNA only",
      "DNA polymerase",
      "tRNA",
      "mRNA"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Each tRNA carries an anticodon that base-pairs with an mRNA codon.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-009",
    "section": "Biology",
    "topic": "Evolution",
    "difficulty": "easy",
    "question": "Homologous structures in different species provide evidence primarily for",
    "options": [
      "common ancestry",
      "no evolutionary relationship",
      "identical habitat only",
      "spontaneous generation"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Shared structural plans modified for different functions support descent from a common ancestor.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-010",
    "section": "Biology",
    "topic": "Plant physiology",
    "difficulty": "medium",
    "question": "The primary photosynthetic pigment in green plants is",
    "options": [
      "chlorophyll a",
      "carotene only",
      "xanthophyll only",
      "anthocyanin"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Chlorophyll a is the central reaction-center pigment in oxygenic photosynthesis.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-011",
    "section": "Biology",
    "topic": "Plant physiology",
    "difficulty": "hard",
    "question": "The immediate source of oxygen released during photosynthesis is",
    "options": [
      "glucose",
      "chlorophyll",
      "carbon dioxide",
      "water"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Photolysis of water at photosystem II releases molecular oxygen.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-012",
    "section": "Biology",
    "topic": "Plant physiology",
    "difficulty": "medium",
    "question": "Stomatal opening is promoted when guard cells",
    "options": [
      "lose ATP permanently",
      "lose all potassium and water",
      "become plasmolyzed",
      "gain solutes and water, becoming turgid"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Solute accumulation lowers guard-cell water potential, water enters, and turgor opens the pore.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-013",
    "section": "Biology",
    "topic": "Plant physiology",
    "difficulty": "easy",
    "question": "Water ascent through xylem in tall plants is explained mainly by",
    "options": [
      "active pumping by every xylem vessel",
      "cohesion-tension generated by transpiration",
      "phloem pressure only",
      "root pressure alone in all tall trees"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Transpiration creates negative pressure transmitted through cohesive water columns in xylem.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-014",
    "section": "Biology",
    "topic": "Plant growth",
    "difficulty": "medium",
    "question": "Auxin is strongly associated with",
    "options": [
      "stomatal closure only",
      "cell elongation and apical dominance",
      "fruit ripening only",
      "seed dormancy only"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Auxin promotes elongation and contributes to apical dominance among several growth responses.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-015",
    "section": "Biology",
    "topic": "Plant reproduction",
    "difficulty": "hard",
    "question": "Double fertilization in angiosperms produces a zygote and",
    "options": [
      "a seed coat directly",
      "two embryos always",
      "a pollen grain",
      "endosperm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "One sperm fuses with the egg to form the zygote; another fuses with central-cell nuclei to form endosperm.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-016",
    "section": "Biology",
    "topic": "Human physiology",
    "difficulty": "medium",
    "question": "The normal pacemaker of the human heart is the",
    "options": [
      "sinoatrial node",
      "atrioventricular node",
      "bundle of His",
      "Purkinje fibers"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "The sinoatrial node has the highest intrinsic firing rate and normally initiates each heartbeat.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-017",
    "section": "Biology",
    "topic": "Human physiology",
    "difficulty": "easy",
    "question": "Oxygen is transported in blood mainly bound to",
    "options": [
      "hemoglobin",
      "albumin",
      "platelets",
      "plasma sodium"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Most oxygen is carried reversibly bound to hemoglobin in red blood cells.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-018",
    "section": "Biology",
    "topic": "Human physiology",
    "difficulty": "medium",
    "question": "The valve between the left atrium and left ventricle is the",
    "options": [
      "aortic semilunar valve",
      "tricuspid valve",
      "pulmonary valve",
      "mitral valve"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "The bicuspid or mitral valve separates the left atrium from the left ventricle.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-019",
    "section": "Biology",
    "topic": "Human physiology",
    "difficulty": "hard",
    "question": "Filtration of plasma in the nephron begins at the",
    "options": [
      "glomerulus",
      "loop of Henle",
      "collecting duct",
      "distal convoluted tubule"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Blood pressure drives ultrafiltration across the glomerular capillary barrier into Bowman's space.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-020",
    "section": "Biology",
    "topic": "Human physiology",
    "difficulty": "medium",
    "question": "Antidiuretic hormone increases water reabsorption mainly in the",
    "options": [
      "glomerulus",
      "renal artery",
      "collecting ducts",
      "proximal tubule only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "ADH promotes aquaporin insertion in collecting-duct principal cells, increasing water permeability.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-021",
    "section": "Biology",
    "topic": "Human physiology",
    "difficulty": "easy",
    "question": "The hormone that lowers blood glucose by promoting cellular uptake and storage is",
    "options": [
      "cortisol",
      "glucagon",
      "insulin",
      "adrenaline"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Insulin promotes glucose uptake in responsive tissues and storage as glycogen and fat.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-022",
    "section": "Biology",
    "topic": "Human physiology",
    "difficulty": "medium",
    "question": "The functional unit of the nervous system is the",
    "options": [
      "nephron",
      "osteon",
      "alveolus",
      "neuron"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Neurons are specialized cells that receive, process and transmit nerve signals.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-023",
    "section": "Biology",
    "topic": "Human physiology",
    "difficulty": "hard",
    "question": "At a chemical synapse, neurotransmitter is released from the presynaptic terminal mainly after influx of",
    "options": [
      "iron ions",
      "phosphate ions",
      "calcium ions",
      "chloride ions"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Depolarization opens voltage-gated calcium channels; calcium triggers synaptic-vesicle fusion.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-024",
    "section": "Biology",
    "topic": "Human reproduction",
    "difficulty": "medium",
    "question": "Ovulation is triggered by a mid-cycle surge of",
    "options": [
      "aldosterone",
      "prolactin",
      "luteinizing hormone",
      "thyroxine"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "A surge in LH causes final follicular maturation and ovulation.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-025",
    "section": "Biology",
    "topic": "Human reproduction",
    "difficulty": "easy",
    "question": "The site where fertilization most commonly occurs in the human female reproductive tract is the",
    "options": [
      "uterine cervix",
      "vagina",
      "ovarian cortex",
      "ampulla of the uterine tube"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Fertilization usually occurs in the ampullary region of the fallopian tube.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-026",
    "section": "Biology",
    "topic": "Immunity",
    "difficulty": "medium",
    "question": "Antibodies are secreted primarily by",
    "options": [
      "erythrocytes",
      "platelets",
      "plasma cells",
      "neutrophils"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Activated B cells differentiate into plasma cells that secrete immunoglobulins.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-027",
    "section": "Biology",
    "topic": "Immunity",
    "difficulty": "hard",
    "question": "Vaccination protects primarily by generating",
    "options": [
      "nonspecific anemia",
      "permanent fever",
      "loss of lymphocytes",
      "immunological memory"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Adaptive immune memory enables a faster and stronger response on later exposure to the same antigen.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-028",
    "section": "Biology",
    "topic": "Microbiology",
    "difficulty": "medium",
    "question": "Bacteria reproduce most commonly by",
    "options": [
      "binary fission",
      "mitosis with a spindle",
      "meiosis",
      "budding only in every species"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Most bacteria divide asexually by binary fission.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-029",
    "section": "Biology",
    "topic": "Ecology",
    "difficulty": "easy",
    "question": "A group of organisms of the same species living in the same area is a",
    "options": [
      "ecosystem",
      "population",
      "biome",
      "community"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "A population consists of individuals of one species occupying a defined area.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-biology-030",
    "section": "Biology",
    "topic": "Ecology",
    "difficulty": "medium",
    "question": "Energy transfer between successive trophic levels is inefficient mainly because much energy is",
    "options": [
      "returned to the Sun",
      "destroyed as matter",
      "lost as heat through metabolism",
      "converted entirely to DNA"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Organisms use much chemical energy for metabolism and release heat, leaving less biomass energy for the next trophic level.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-general-knowledge-001",
    "section": "General Knowledge",
    "topic": "Indian Constitution",
    "difficulty": "easy",
    "question": "The Constitution of India came into force on",
    "options": [
      "26 January 1950",
      "15 August 1947",
      "26 November 1949",
      "2 October 1950"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "The Constitution was adopted on 26 November 1949 and came into force on 26 January 1950.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-general-knowledge-002",
    "section": "General Knowledge",
    "topic": "Indian polity",
    "difficulty": "medium",
    "question": "The constitutional head of the Union executive in India is the",
    "options": [
      "Chief Justice of India",
      "President of India",
      "Speaker of Lok Sabha",
      "Prime Minister alone"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "The President is the constitutional head of the Union executive; executive power is exercised according to the Constitution and ministerial advice.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-general-knowledge-003",
    "section": "General Knowledge",
    "topic": "Indian geography",
    "difficulty": "hard",
    "question": "The river that flows through the city of Varanasi is the",
    "options": [
      "Ganga",
      "Kaveri",
      "Godavari",
      "Narmada"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Varanasi lies on the banks of the Ganga.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-general-knowledge-004",
    "section": "General Knowledge",
    "topic": "Indian geography",
    "difficulty": "medium",
    "question": "The Western Ghats run roughly parallel to India's",
    "options": [
      "western coast",
      "eastern border with Myanmar",
      "northern Himalayan arc",
      "Indo-Gangetic plain only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "The Western Ghats form a mountain chain near and roughly parallel to the western coast of peninsular India.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-general-knowledge-005",
    "section": "General Knowledge",
    "topic": "Science institutions",
    "difficulty": "easy",
    "question": "The Indian Space Research Organisation is headquartered in",
    "options": [
      "Lucknow",
      "Jaipur",
      "Bengaluru",
      "Mumbai"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "ISRO headquarters is in Bengaluru, Karnataka.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-general-knowledge-006",
    "section": "General Knowledge",
    "topic": "History of science",
    "difficulty": "medium",
    "question": "The discovery of the Raman effect is associated with",
    "options": [
      "C. V. Raman",
      "S. N. Bose only",
      "Homi J. Bhabha",
      "Meghnad Saha"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "C. V. Raman discovered the scattering phenomenon now called the Raman effect.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-general-knowledge-007",
    "section": "General Knowledge",
    "topic": "Public institutions",
    "difficulty": "hard",
    "question": "The Reserve Bank of India primarily serves as India's",
    "options": [
      "central bank",
      "supreme court",
      "national legislature",
      "space agency"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "The RBI is the central bank responsible for monetary policy and key banking and currency functions.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-general-knowledge-008",
    "section": "General Knowledge",
    "topic": "World geography",
    "difficulty": "medium",
    "question": "The largest ocean on Earth is the",
    "options": [
      "Indian Ocean",
      "Pacific Ocean",
      "Arctic Ocean",
      "Atlantic Ocean"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "The Pacific Ocean is the largest and deepest of Earth's oceans.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-general-knowledge-009",
    "section": "General Knowledge",
    "topic": "International organizations",
    "difficulty": "easy",
    "question": "The headquarters of the World Health Organization is in",
    "options": [
      "Geneva",
      "Vienna",
      "New York",
      "Paris"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "WHO is headquartered in Geneva, Switzerland.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "aiims-bsc-nursing-2026-general-knowledge-010",
    "section": "General Knowledge",
    "topic": "Indian symbols",
    "difficulty": "medium",
    "question": "The national animal of India is the",
    "options": [
      "Asiatic lion",
      "Bengal tiger",
      "Indian elephant",
      "one-horned rhinoceros"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "The Bengal tiger is India's national animal.",
    "source": {
      "kind": "original",
      "reference": "AIIMS B.Sc. (Hons.) Nursing 2026 prospectus / exam cycle",
      "url": "https://aiimsexams.ac.in/prospectus/68dbf1add6fe8f55c65468ab",
      "checkedOn": "2026-09-08"
    }
  },
];
