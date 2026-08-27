import type { Question } from '../questions';

export const NMIMS_CET_2026_PHYSICS_1: Question[] = [
  {
    "id": "nmims-cet-2026-ph-001",
    "section": "Physics",
    "topic": "Physics and Measurement",
    "difficulty": "easy",
    "question": "A measured length is recorded as 0.04720 m. How many significant figures does this measurement contain?",
    "options": [
      "3",
      "5",
      "2",
      "4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Leading zeros are not significant, but the trailing zero to the right of the decimal is. Thus 4, 7, 2 and the final 0 are significant: 4 significant figures.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-002",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "medium",
    "question": "A cyclist moves at 6 m/s, accelerates uniformly at 2 m/s^2 for 4 s, and then continues at the attained speed for 3 s. What total distance does the cyclist cover in these 7 s?",
    "options": [
      "68 m",
      "82 m",
      "76 m",
      "94 m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "During acceleration, s=ut+1/2 at^2=6(4)+1(16)=40 m and the final speed is 14 m/s. The next 3 s cover 42 m, so the total is 82 m.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-003",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "medium",
    "question": "A ball is projected with horizontal and vertical velocity components 18 m/s and 24 m/s respectively. Neglecting air resistance, what is its speed at the highest point?",
    "options": [
      "24 m/s",
      "18 m/s",
      "30 m/s",
      "6 m/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At the highest point the vertical velocity component is zero while the horizontal component remains 18 m/s. Hence the speed is 18 m/s.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-004",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "Two moles of a monatomic ideal gas are heated at constant volume from 300 K to 330 K. Using R=8.31 J mol^-1 K^-1, what is the increase in internal energy?",
    "options": [
      "748 J",
      "499 J",
      "997 J",
      "249 J"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a monatomic ideal gas, Delta U=n(3R/2)Delta T=2(3/2)(8.31)(30)=747.9 J, approximately 748 J.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-005",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "A gas goes from A to B while absorbing 600 J of heat and increasing its internal energy by 250 J. From B to C it loses 100 J of heat while 80 J of work is done on the gas. What total work does the gas do over A to B to C?",
    "options": [
      "190 J",
      "270 J",
      "350 J",
      "430 J"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For A to B, W_by=Q-DeltaU=600-250=350 J. For B to C, 80 J is done on the gas, so W_by=-80 J. Total work done by the gas is 350-80=270 J.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-006",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "A 2.0 L rigid bulb contains an ideal gas at 4.0 bar and 300 K. It is connected to an evacuated 6.0 L rigid bulb and allowed to equilibrate at 300 K. The connected bulbs are then heated to 450 K. What is the final common pressure?",
    "options": [
      "0.75 bar",
      "1.00 bar",
      "1.50 bar",
      "2.00 bar"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At 300 K, free expansion from 2.0 L to 8.0 L gives P=4.0(2/8)=1.0 bar. Heating at fixed total volume from 300 K to 450 K multiplies pressure by 1.5, giving 1.50 bar.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-007",
    "section": "Physics",
    "topic": "Work, Energy and Power",
    "difficulty": "medium",
    "question": "A motor lifts a 120 kg load vertically through 8.0 m in 12 s at constant speed. Taking g=9.8 m/s^2, what average mechanical power does the motor deliver?",
    "options": [
      "960 W",
      "1176 W",
      "653 W",
      "784 W"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Power=mgh/t=120(9.8)(8)/12=784 W.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-008",
    "section": "Physics",
    "topic": "Work, Energy and Power",
    "difficulty": "medium",
    "question": "A 0.50 kg block is launched on a frictionless surface by a spring of force constant 400 N/m compressed by 0.10 m. What speed does the block have when the spring reaches its natural length?",
    "options": [
      "2.83 m/s",
      "4.00 m/s",
      "2.00 m/s",
      "1.41 m/s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Equating 1/2 kx^2 to 1/2 mv^2 gives v=x sqrt(k/m)=0.10 sqrt(400/0.50)=sqrt(8)=2.83 m/s.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-009",
    "section": "Physics",
    "topic": "Work, Energy and Power",
    "difficulty": "medium",
    "question": "A 2.0 kg block moving at 10 m/s crosses a rough horizontal patch 8.0 m long. The friction force is constant at 4.0 N. What is the block speed after the patch?",
    "options": [
      "6.00 m/s",
      "8.25 m/s",
      "9.20 m/s",
      "7.07 m/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Initial KE=100 J. Friction does -32 J, leaving 68 J. Thus v=sqrt(2K/m)=sqrt(68)=8.25 m/s.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-010",
    "section": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "medium",
    "question": "A uniform solid disc of mass 4.0 kg and radius 0.50 m rotates about its central axis. A constant torque of 1.5 N m is applied. What angular acceleration results?",
    "options": [
      "1.5 rad/s^2",
      "6.0 rad/s^2",
      "3.0 rad/s^2",
      "0.75 rad/s^2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a solid disc I=MR^2/2=4(0.25)/2=0.50 kg m^2. Hence alpha=tau/I=1.5/0.50=3.0 rad/s^2.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-011",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "Near the surface of a spherical planet, g=8.0 m/s^2 and the radius is 5.0x10^6 m. What is the gravitational potential per unit mass at the surface, taking zero at infinity?",
    "options": [
      "-8.0x10^7 J/kg",
      "-4.0x10^7 J/kg",
      "-2.0x10^7 J/kg",
      "+4.0x10^7 J/kg"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At the surface, V=-GM/R=-gR=-(8.0)(5.0x10^6)=-4.0x10^7 J/kg.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-012",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "medium",
    "question": "Masses 3 kg and 2 kg are connected by a light string over an ideal pulley. In addition to its weight, a constant 10 N downward force is applied to the 3 kg mass. Take g=10 m/s^2. What is the acceleration of the system?",
    "options": [
      "2 m/s^2",
      "3 m/s^2",
      "4 m/s^2",
      "5 m/s^2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Taking the 3 kg side downward, the net driving force is 3g+10-2g=20 N. The total mass is 5 kg, so a=20/5=4 m/s^2.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-013",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "medium",
    "question": "Two blocks of masses 3 kg and 2 kg are in contact on a frictionless horizontal surface. A 20 N horizontal force pushes the 3 kg block. What contact force acts on the 2 kg block?",
    "options": [
      "8 N",
      "12 N",
      "20 N",
      "4 N"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The common acceleration is 20/(3+2)=4 m/s^2. The contact force needed to accelerate the 2 kg block is 2(4)=8 N.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-014",
    "section": "Physics",
    "topic": "Properties of Solids and Liquids",
    "difficulty": "easy",
    "question": "In a hydraulic press, the small piston has area 4 cm^2 and the large piston has area 80 cm^2. If 120 N is applied to the small piston, what ideal force acts on the large piston?",
    "options": [
      "600 N",
      "9600 N",
      "1500 N",
      "2400 N"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Pascal pressure is transmitted equally: F2/F1=A2/A1=80/4=20. Thus F2=120(20)=2400 N.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-015",
    "section": "Physics",
    "topic": "Electronic Devices",
    "difficulty": "medium",
    "question": "A 6.2 V ideal Zener diode regulates a load connected in parallel with it. The supply is 10 V through a 190 ohm series resistor, and the load is 1.0 kohm. While regulation holds, what current flows through the Zener diode?",
    "options": [
      "6.2 mA",
      "13.8 mA",
      "20.0 mA",
      "26.2 mA"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Series current=(10-6.2)/190=20.0 mA. Load current=6.2 V/1.0 kohm=6.2 mA. The Zener current is 20.0-6.2=13.8 mA.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-016",
    "section": "Physics",
    "topic": "Electronic Devices",
    "difficulty": "easy",
    "question": "Inputs A and B first enter an OR gate. That output and A then enter a NAND gate. The final output is equivalent to which expression?",
    "options": [
      "A OR B",
      "NOT(A OR B)",
      "NOT A",
      "NOT B"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The output is NOT[A(A+B)]. By the absorption law A(A+B)=A, so the final output is NOT A.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-017",
    "section": "Physics",
    "topic": "Kinetic Theory of Gases",
    "difficulty": "medium",
    "question": "The rms speed of molecules in an ideal gas is v at 300 K. At what temperature will the rms speed be 1.5v?",
    "options": [
      "450 K",
      "600 K",
      "675 K",
      "900 K"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "v_rms is proportional to sqrt(T). Thus T2/T1=(1.5)^2=2.25, so T2=675 K.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-018",
    "section": "Physics",
    "topic": "Oscillations and Waves",
    "difficulty": "easy",
    "question": "An ideal SHM oscillator has total mechanical energy 18 mJ. What is its potential energy when the displacement magnitude is A/3, where A is the amplitude?",
    "options": [
      "6 mJ",
      "9 mJ",
      "16 mJ",
      "2 mJ"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "In SHM, U/E=x^2/A^2. At |x|=A/3, U=18(1/9)=2 mJ.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-019",
    "section": "Physics",
    "topic": "Oscillations and Waves",
    "difficulty": "easy",
    "question": "A particle executes simple harmonic motion. Successive crossings of the mean position in opposite directions are 0.25 s apart. What is the frequency of the motion?",
    "options": [
      "2 Hz",
      "1 Hz",
      "4 Hz",
      "0.5 Hz"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Opposite-direction crossings of the mean position are separated by T/2. Thus T/2=0.25 s, so T=0.50 s and f=1/T=2 Hz.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-020",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "A 6 ohm resistor and a 3 ohm resistor are connected in parallel, and this combination is in series with a 2 ohm resistor across a 12 V source. What is the total current?",
    "options": [
      "2 A",
      "4 A",
      "3 A",
      "6 A"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The parallel pair has resistance 2 ohm. In series with 2 ohm, the total is 4 ohm, so I=12/4=3 A.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-021",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "A wire has resistance 8 ohm. It is stretched uniformly to twice its original length without change of volume. What is its new resistance, assuming resistivity is unchanged?",
    "options": [
      "16 ohm",
      "4 ohm",
      "64 ohm",
      "32 ohm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Doubling length at constant volume halves area. Since R=rho L/A, R increases by 2/(1/2)=4, giving 32 ohm.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-022",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "medium",
    "question": "A cell of emf 2.0 V and internal resistance 0.50 ohm is connected to a 3.5 ohm load. What is the terminal voltage of the cell while current flows?",
    "options": [
      "2.00 V",
      "1.50 V",
      "0.50 V",
      "1.75 V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The current is 2.0/(3.5+0.5)=0.50 A. Terminal voltage=E-Ir=2.0-0.25=1.75 V.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-023",
    "section": "Physics",
    "topic": "Magnetic Effects of Current and Magnetism",
    "difficulty": "easy",
    "question": "A proton moves at 2.0x10^6 m/s perpendicular to a 0.20 T magnetic field. What is the magnetic force magnitude? Use e=1.6x10^-19 C.",
    "options": [
      "6.4x10^-14 N",
      "3.2x10^-14 N",
      "1.6x10^-13 N",
      "6.4x10^-13 N"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "F=qvB=(1.6x10^-19)(2.0x10^6)(0.20)=6.4x10^-14 N.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-024",
    "section": "Physics",
    "topic": "Magnetic Effects of Current and Magnetism",
    "difficulty": "easy",
    "question": "A 0.40 m wire carries 5.0 A in a uniform 0.30 T magnetic field. The wire makes 30 degrees with the field. What is the magnetic force on the wire?",
    "options": [
      "0.60 N",
      "0.15 N",
      "0.30 N",
      "1.20 N"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "F=BIL sin(theta)=0.30(5.0)(0.40)(0.5)=0.30 N.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-025",
    "section": "Physics",
    "topic": "Electromagnetic Induction, Alternating Currents and Electromagnetic Waves",
    "difficulty": "medium",
    "question": "The magnetic flux through each turn of a 100-turn coil is Phi=4.0x10^-4 cos(50t) Wb. What is the maximum induced emf in the coil?",
    "options": [
      "2.0 V",
      "0.8 V",
      "4.0 V",
      "20 V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The induced emf is N|dPhi/dt|. Its maximum is N(Phi0 omega)=100(4.0x10^-4)(50)=2.0 V.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-026",
    "section": "Physics",
    "topic": "Electromagnetic Induction, Alternating Currents and Electromagnetic Waves",
    "difficulty": "easy",
    "question": "A sinusoidal household voltage has rms value 230 V. What is its peak value approximately?",
    "options": [
      "230 V",
      "325 V",
      "460 V",
      "163 V"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a sinusoid, V_peak=sqrt(2)V_rms=1.414(230) approximately 325 V.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-027",
    "section": "Physics",
    "topic": "Optics",
    "difficulty": "medium",
    "question": "A ray travelling in glass of refractive index 1.50 reaches a boundary with a transparent liquid of refractive index 1.20 at an incidence angle of 60 degrees. What happens at the boundary?",
    "options": [
      "it refracts into the liquid at 30 degrees",
      "it travels along the boundary",
      "it refracts into the liquid at 45 degrees",
      "total internal reflection occurs"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The critical angle satisfies sin c=1.20/1.50=0.80, so c is about 53.1 degrees. Since the incidence angle is 60 degrees, which exceeds c, total internal reflection occurs.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-028",
    "section": "Physics",
    "topic": "Optics",
    "difficulty": "easy",
    "question": "An observer looks normally from air at the bottom of a vessel containing an 8 cm liquid layer above a 6 cm glass slab. The glass has refractive index 3/2. If the liquid of refractive index 4/3 is replaced by another liquid of the same thickness and refractive index 2, by how much does the apparent depth of the bottom decrease?",
    "options": [
      "2 cm",
      "4 cm",
      "6 cm",
      "8 cm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Initially the apparent depth is 6/(3/2)+8/(4/3)=4+6=10 cm. After replacement it is 6/(3/2)+8/2=4+4=8 cm. The apparent depth therefore decreases by 2 cm.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-029",
    "section": "Physics",
    "topic": "Optics",
    "difficulty": "medium",
    "question": "Unpolarized light of intensity I0 passes successively through ideal polarizers whose transmission axes are at 0 degrees, 30 degrees and 75 degrees to a fixed reference. What is the final intensity?",
    "options": [
      "3I0/8",
      "3I0/16",
      "I0/8",
      "I0/16"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "After the first polarizer the intensity is I0/2. The next two relative angles are 30 degrees and 45 degrees, so Malus law gives (I0/2)(3/4)(1/2)=3I0/16.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ph-030",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "hard",
    "question": "Charges +2 microC and -8 microC are 0.30 m apart. On the line joining them, where can the net electric field be zero?",
    "options": [
      "0.30 m from the +2 microC charge on the side away from the -8 microC charge",
      "At the midpoint between the charges",
      "0.10 m from the +2 microC charge between the charges",
      "0.60 m beyond the -8 microC charge"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For opposite charges the fields add between them, so cancellation must be outside. On the side of +2 microC, let distance from it be x; then 2/x^2=8/(x+0.30)^2, giving x=0.30 m.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  }
];
