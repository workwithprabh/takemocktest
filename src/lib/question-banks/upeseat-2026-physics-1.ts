import type { Question } from '../questions';

export const UPESEAT_2026_PHYSICS_1: Question[] = [
  {
    "id": "upeseat-2026-ph-001",
    "section": "Physics",
    "topic": "Units and Measurements",
    "difficulty": "easy",
    "question": "A resistive force is modeled as F=kv^2, where v is speed. What are the dimensions of k?",
    "options": [
      "M L^-1",
      "M L",
      "M T^-1",
      "M L^-1 T^-1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "[k]=[F]/[v^2]=(M L T^-2)/(L^2 T^-2)=M L^-1.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-002",
    "section": "Physics",
    "topic": "Units and Measurements",
    "difficulty": "medium",
    "question": "The side of a square is measured with a maximum percentage error of 2%. What is the maximum percentage error in its calculated area?",
    "options": [
      "4%",
      "2%",
      "1%",
      "8%"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For A=l^2, fractional error in A is approximately twice the fractional error in l, so 4%.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-003",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "easy",
    "question": "A car starts at 5 m/s and accelerates uniformly at 3 m/s^2 for 4 s. What is its final speed?",
    "options": [
      "12 m/s",
      "20 m/s",
      "17 m/s",
      "8 m/s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "v=u+at=5+3x4=17 m/s.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-004",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "hard",
    "question": "A particle starts from rest, accelerates uniformly at 4 m/s^2 for 3 s, and then decelerates uniformly at 2 m/s^2 until it stops. What total distance does it travel?",
    "options": [
      "54 m",
      "36 m",
      "72 m",
      "90 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "First stage: s1=(1/2)(4)(3^2)=18 m and final speed is 12 m/s. During deceleration, 0=12^2+2(-2)s2 gives s2=36 m. Total distance=54 m.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-005",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "easy",
    "question": "A 2 kg block on a frictionless horizontal table is connected by a light string over a frictionless pulley to a hanging 3 kg block. Take g=10 m/s^2. What is the string tension?",
    "options": [
      "12 N",
      "18 N",
      "20 N",
      "24 N"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The acceleration is (3g)/(2+3)=6 m/s^2. For the 2 kg block on the table, tension T=ma=2×6=12 N.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-006",
    "section": "Physics",
    "topic": "Friction",
    "difficulty": "medium",
    "question": "A block is just about to slide down a rough incline when the angle of inclination is 30 degrees. What is the coefficient of static friction?",
    "options": [
      "sqrt(3)",
      "1/2",
      "1",
      "1/sqrt(3)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At limiting equilibrium on an incline, mu_s=tan theta=tan30=1/sqrt(3).",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-007",
    "section": "Physics",
    "topic": "Work Energy and Power",
    "difficulty": "medium",
    "question": "A 2 kg block moving at 6 m/s on a horizontal rough surface comes to rest after sliding 9 m. What is the magnitude of the average friction force?",
    "options": [
      "2 N",
      "8 N",
      "18 N",
      "4 N"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The initial kinetic energy is (1/2)(2)(6^2)=36 J. Friction removes 36 J over 9 m, so average friction force=36/9=4 N.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-008",
    "section": "Physics",
    "topic": "Work Energy and Power",
    "difficulty": "easy",
    "question": "A 20 kg load is lifted vertically at a constant speed of 2 m/s. Take g=10 m/s^2. What power is required?",
    "options": [
      "200 W",
      "800 W",
      "400 W",
      "100 W"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Power=mgv=20x10x2=400 W.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-009",
    "section": "Physics",
    "topic": "Circular Motion",
    "difficulty": "medium",
    "question": "A particle moves uniformly around a circle of radius 0.50 m with speed pi m/s. What is the time for one complete revolution?",
    "options": [
      "0.5 s",
      "2.0 s",
      "1.0 s",
      "pi s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The circumference is 2pi r=pi m. Time=circumference/speed=pi/pi=1.0 s.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-010",
    "section": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "medium",
    "question": "A solid cylinder of mass 2 kg rolls without slipping at 4 m/s. What is its total kinetic energy?",
    "options": [
      "16 J",
      "24 J",
      "32 J",
      "8 J"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a solid cylinder, I=(1/2)MR^2 and ω=v/R. Total kinetic energy=(1/2)Mv^2+(1/2)Iω^2=(1/2)Mv^2+(1/4)Mv^2=(3/4)Mv^2=24 J.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-011",
    "section": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "medium",
    "question": "A rotating system has no external torque. If its moment of inertia is reduced to half, what happens to its angular speed?",
    "options": [
      "It halves",
      "It remains unchanged",
      "It doubles",
      "It becomes four times"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Angular momentum I omega is conserved. If I becomes I/2, omega must become 2omega.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-012",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "Planet A has radius R and mean density rho. Planet B has radius 3R and mean density rho/2. What is the ratio of their surface escape speeds v_B/v_A?",
    "options": [
      "sqrt(2)",
      "3/sqrt(2)",
      "3sqrt(2)",
      "1/sqrt(2)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a spherical planet, v_e=sqrt(2GM/R) and M is proportional to rho R^3, so v_e is proportional to R sqrt(rho). Therefore v_B/v_A=3 sqrt(1/2)=3/sqrt(2).",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-013",
    "section": "Physics",
    "topic": "Fluid Mechanics",
    "difficulty": "easy",
    "question": "Water flows through a pipe of cross-sectional area 4.0 cm^2 with speed 2.0 m/s. What is the volume flow rate?",
    "options": [
      "8.0x10^-3 m^3/s",
      "2.0x10^-4 m^3/s",
      "8.0x10^-4 m^3/s",
      "4.0x10^-4 m^3/s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Volume flow rate Q=Av=(4.0x10^-4 m^2)(2.0 m/s)=8.0x10^-4 m^3/s.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-014",
    "section": "Physics",
    "topic": "Fluid Mechanics",
    "difficulty": "hard",
    "question": "What is the gauge pressure 3.0 m below the free surface of water? Take rho=1000 kg/m^3 and g=10 m/s^2.",
    "options": [
      "3.0x10^3 Pa",
      "1.0x10^4 Pa",
      "3.0x10^5 Pa",
      "3.0x10^4 Pa"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Gauge pressure at depth h is rho gh=(1000)(10)(3.0)=3.0x10^4 Pa.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-015",
    "section": "Physics",
    "topic": "Thermal Properties",
    "difficulty": "medium",
    "question": "Two cylindrical rods of the same material and equal length have radii r and 2r. Under the same temperature difference, what is the ratio of their steady heat-conduction rates Q2/Q1?",
    "options": [
      "4",
      "2",
      "8",
      "1/4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For steady conduction Q/t is proportional to cross-sectional area A for fixed material, length and temperature difference. Area is proportional to r^2, so doubling radius makes the rate four times as large.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-016",
    "section": "Physics",
    "topic": "Calorimetry",
    "difficulty": "medium",
    "question": "Equal masses of water at 20 degrees C and 80 degrees C are mixed in an insulated container. Neglect heat loss. What is the final temperature?",
    "options": [
      "50 degrees C",
      "40 degrees C",
      "60 degrees C",
      "30 degrees C"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For equal masses of the same substance, the equilibrium temperature is the average: 50 degrees C.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-017",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "An ideal gas is heated at constant pressure until its absolute temperature doubles. What happens to its volume?",
    "options": [
      "It halves",
      "It remains unchanged",
      "It becomes four times",
      "It doubles"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At constant pressure for an ideal gas, V is proportional to absolute temperature.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-018",
    "section": "Physics",
    "topic": "Kinetic Theory",
    "difficulty": "medium",
    "question": "A gas has mass density 1.2 kg/m^3 and rms molecular speed 500 m/s. Using P=(1/3)rho v_rms^2, what is its pressure?",
    "options": [
      "1.0x10^5 Pa",
      "3.0x10^5 Pa",
      "5.0x10^4 Pa",
      "2.0x10^5 Pa"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "P=(1/3)(1.2)(500^2)=0.4×250000=1.0×10^5 Pa.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-019",
    "section": "Physics",
    "topic": "Oscillations",
    "difficulty": "medium",
    "question": "A simple pendulum has period T in a stationary lift. If the lift accelerates upward with acceleration g, what is the new period?",
    "options": [
      "2T",
      "T/sqrt(2)",
      "sqrt(2)T",
      "T/2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The effective downward acceleration is g_eff=g+g=2g. Since pendulum period is proportional to 1/sqrt(g_eff), the new period is T/sqrt(2).",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-020",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "easy",
    "question": "In a standing wave, the distance between an adjacent node and antinode is 0.30 m. What is the wavelength?",
    "options": [
      "0.60 m",
      "1.20 m",
      "0.30 m",
      "2.40 m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The separation of an adjacent node and antinode is lambda/4. Hence lambda=4(0.30)=1.20 m.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-021",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "medium",
    "question": "Charges +4q and +q are fixed at x=-a and x=+a respectively. What is the electric field at the origin?",
    "options": [
      "5kq/a^2 in the +x direction",
      "3kq/a^2 in the -x direction",
      "3kq/a^2 in the +x direction",
      "0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At the origin, +4q produces 4kq/a^2 toward +x, while +q produces kq/a^2 toward -x. Net field=3kq/a^2 toward +x.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-022",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "easy",
    "question": "Equal charges +q and -q are fixed at two points. What is the electric potential at their midpoint?",
    "options": [
      "kq/r",
      "2kq/r",
      "Infinity",
      "0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The two potentials are equal in magnitude and opposite in sign, so they cancel.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-023",
    "section": "Physics",
    "topic": "Capacitance",
    "difficulty": "medium",
    "question": "A capacitor remains connected to an ideal battery while the battery voltage is doubled. If its initial stored energy is U, what is the new stored energy?",
    "options": [
      "2U",
      "U/2",
      "U",
      "4U"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Stored energy is (1/2)CV^2. With C unchanged and voltage doubled, energy becomes four times, or 4U.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-024",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "A wire is replaced by another wire of the same material with twice the length and half the cross-sectional area. By what factor does its resistance change?",
    "options": [
      "2",
      "1/2",
      "4",
      "8"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "R=rho L/A. Doubling L and halving A multiplies R by 2/(1/2)=4.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-025",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "A 6 ohm resistor and a 3 ohm resistor are connected in parallel across a 12 V source. What is the total current drawn?",
    "options": [
      "2 A",
      "4 A",
      "8 A",
      "6 A"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The branch currents are 12/6=2 A and 12/3=4 A, so total current is 6 A.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-026",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "In a meter bridge, a 6 ohm resistance in the left gap balances an unknown resistance in the right gap when the balance point is 40 cm from the left end. What is the unknown resistance?",
    "options": [
      "4 ohm",
      "9 ohm",
      "6 ohm",
      "12 ohm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At balance, R/X=l/(100-l)=40/60=2/3. Thus 6/X=2/3, giving X=9 ohm.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-027",
    "section": "Physics",
    "topic": "Magnetism",
    "difficulty": "medium",
    "question": "A single-turn current loop has area 0.020 m^2 and carries 3.0 A in a 0.50 T uniform magnetic field. The loop normal makes 30 degrees with the field. What is the magnetic torque magnitude?",
    "options": [
      "0.030 N m",
      "0.060 N m",
      "0.015 N m",
      "0.010 N m"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Torque is tau=IAB sin(theta)=(3.0)(0.020)(0.50)sin30 degrees=0.015 N m.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-028",
    "section": "Physics",
    "topic": "Magnetic Effects of Current",
    "difficulty": "medium",
    "question": "A long straight wire carries 5 A. What magnetic field is produced 0.10 m from it? Take mu0=4pi x10^-7 SI.",
    "options": [
      "1.0x10^-5 T",
      "5.0x10^-6 T",
      "2.0x10^-5 T",
      "1.0x10^-6 T"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "B=mu0 I/(2pi r)=(4pi x10^-7 x5)/(2pi x0.1)=1.0x10^-5 T.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-029",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "hard",
    "question": "Two magnetically coupled coils have self-inductances 0.18 H and 0.32 H and mutual inductance 0.06 H. They are connected in series so that their mutual fluxes oppose. The current through the combination rises uniformly from 0.50 A to 2.50 A in 0.050 s. What is the magnitude of the induced voltage across the two-coil combination during the rise?",
    "options": [
      "9.6 V",
      "20.0 V",
      "15.2 V",
      "24.8 V"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For series-opposing coupled coils, the equivalent inductance is L_eq=L1+L2-2M=0.18+0.32-0.12=0.38 H. The current changes at (2.50-0.50)/0.050=40 A/s. Hence the induced-voltage magnitude is L_eq(di/dt)=0.38x40=15.2 V.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-030",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "easy",
    "question": "A sinusoidal current i=4 sin(100pi t) A flows through a 10 ohm resistor. What is the average power dissipated?",
    "options": [
      "160 W",
      "80 W",
      "40 W",
      "20 W"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The rms current is 4/sqrt(2) A. Average power in a resistor is I_rms^2 R=(16/2)(10)=80 W.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-031",
    "section": "Physics",
    "topic": "Ray Optics",
    "difficulty": "medium",
    "question": "A thin prism has a small refracting angle of 8 degrees and refractive index 1.625. Using the small-angle prism approximation, what is the deviation produced for near-normal incidence?",
    "options": [
      "5 degrees",
      "8 degrees",
      "13 degrees",
      "3 degrees"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a thin prism at small angles, delta=(mu-1)A. Thus delta=(1.625-1)x8=0.625x8=5 degrees.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-032",
    "section": "Physics",
    "topic": "Ray Optics",
    "difficulty": "easy",
    "question": "A thin converging lens has power +2.5 D. What is its focal length?",
    "options": [
      "2.5 m",
      "0.40 m",
      "0.25 m",
      "4.0 m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "P=1/f in metres, so f=1/2.5=0.40 m.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-033",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "hard",
    "question": "In a Fraunhofer double-slit arrangement, each slit has width a and the distance between the slit centres is 7a/2. How many interference maxima lie inside the central diffraction maximum?",
    "options": [
      "5",
      "6",
      "8",
      "7"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Interference maxima satisfy sin(theta)=m lambda/d, while the central single-slit diffraction maximum extends over |sin(theta)|<lambda/a. Hence |m|<d/a=7/2=3.5, so m=0, +/-1, +/-2 and +/-3 are allowed: 7 maxima.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-034",
    "section": "Physics",
    "topic": "Dual Nature",
    "difficulty": "medium",
    "question": "Photoelectrons from a metal have maximum kinetic energy 3.0 eV. What stopping potential is required?",
    "options": [
      "1.5 V",
      "3.0 V",
      "6.0 V",
      "0.33 V"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "In electron-volt units, eV_s=K_max, so a 3.0 eV maximum kinetic energy requires 3.0 V stopping potential.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "upeseat-2026-ph-035",
    "section": "Physics",
    "topic": "Semiconductor Electronics",
    "difficulty": "easy",
    "question": "A p-n junction diode is strongly conducting when it is",
    "options": [
      "reverse biased",
      "forward biased",
      "unbiased at room temperature",
      "cooled to 0 K"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Forward bias lowers the junction barrier and allows significant current to flow.",
    "source": {
      "kind": "original",
      "reference": "UPESEAT 2026 official B.Tech online test pattern framework",
      "url": "https://www.upes.ac.in/admissions/admission-alerts/upeseat",
      "checkedOn": "2026-08-26"
    }
  }
];
