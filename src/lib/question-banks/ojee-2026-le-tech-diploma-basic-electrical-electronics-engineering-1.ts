import type { Question } from '../questions';

export const OJEE_2026_LE_TECH_DIPLOMA_BASIC_ELECTRICAL_ELECTRONICS_ENGINEERING_1: Question[] = [
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electrical Engineering - DC Circuits",
    "difficulty": "medium",
    "question": "A 66 V source feeds an 18 ohm resistor in series with a parallel combination of 24 ohm and 40 ohm. The source current is",
    "options": [
      "1.5 A",
      "3.0 A",
      "2.5 A",
      "2.0 A"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The parallel resistance is (24*40)/(24+40)=15 ohm. Total resistance=18+15=33 ohm, so current=66/33=2 A.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-001"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electrical Engineering - Kirchhoff's Laws",
    "difficulty": "easy",
    "question": "At a junction, 7.2 A enters. Two outgoing branch currents are 2.5 A and 1.8 A. The third outgoing current is",
    "options": [
      "2.1 A",
      "4.7 A",
      "2.9 A",
      "3.5 A"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By Kirchhoff's current law, total outgoing current equals 7.2 A. Thus I3=7.2-2.5-1.8=2.9 A.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-002"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electrical Engineering - Electromagnetic Induction",
    "difficulty": "medium",
    "question": "A 75-turn coil experiences a uniform flux change from 1.8 mWb to 0.6 mWb per turn in 0.030 s. The magnitude of the average induced emf is",
    "options": [
      "2.0 V",
      "3.0 V",
      "1.5 V",
      "4.5 V"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Average emf=N|DeltaPhi|/Deltat=75*(1.2x10^-3)/0.030=3.0 V.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-003"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electrical Engineering - AC Theory",
    "difficulty": "medium",
    "question": "A series RLC circuit has R=18 ohm, inductive reactance X_L=35 ohm and capacitive reactance X_C=11 ohm. If it is connected to a 120 V rms supply, the rms current is",
    "options": [
      "2 A",
      "3 A",
      "5 A",
      "4 A"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The net reactance is X=35-11=24 ohm. Therefore |Z|=sqrt(18^2+24^2)=30 ohm, so I=V/|Z|=120/30=4 A.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-004"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electrical Engineering - AC Theory",
    "difficulty": "medium",
    "question": "A series RL circuit has R=24 ohm and inductive reactance XL=32 ohm. With 200 V RMS applied, the current is",
    "options": [
      "6.25 A",
      "4 A",
      "5 A",
      "8 A"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Impedance=sqrt(24^2+32^2)=40 ohm. Current=200/40=5 A.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-005"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electrical Engineering - AC Theory",
    "difficulty": "medium",
    "question": "A series RC circuit has R=30 ohm and capacitive reactance XC=40 ohm. A 250 V RMS supply produces current",
    "options": [
      "8.33 A",
      "4 A",
      "6 A",
      "5 A"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The impedance magnitude is sqrt(30^2+40^2)=50 ohm, so I=250/50=5 A.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-006"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electrical Engineering - RLC Circuits",
    "difficulty": "medium",
    "question": "A series RLC circuit has R=20 ohm, XL=45 ohm and XC=45 ohm at a certain frequency. If the applied RMS voltage is 100 V, the current is",
    "options": [
      "2.22 A",
      "5 A",
      "4 A",
      "10 A"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Since XL=XC, the reactive terms cancel. The impedance equals R=20 ohm, so I=100/20=5 A.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-007"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electrical Engineering - AC Power and Power Factor",
    "difficulty": "medium",
    "question": "A single-phase load draws 6.5 A from a 143 V supply at a lagging power factor of 0.80. Its reactive power is approximately",
    "options": [
      "558 VAr",
      "744 VAr",
      "372 VAr",
      "929 VAr"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For power factor cos(phi)=0.80, sin(phi)=0.60. Reactive power Q=VI sin(phi)=143\u00d76.5\u00d70.60=557.7 VAr, approximately 558 VAr.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-008"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electrical Engineering - DC Motor",
    "difficulty": "medium",
    "question": "A 220 V DC motor has armature resistance 0.50 ohm and armature current 18 A while running at 900 rpm. Neglecting mechanical losses, the electromagnetic torque developed is approximately",
    "options": [
      "34.0 N m",
      "40.3 N m",
      "52.0 N m",
      "46.5 N m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Back emf E_b=V-I_a R_a=220-18\u00d70.50=211 V. Electromagnetic power developed is E_b I_a=211\u00d718=3798 W. Angular speed is 2\u03c0N/60=2\u03c0\u00d7900/60 rad/s. Hence torque=3798/(30\u03c0)\u224840.3 N m.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-009"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electrical Engineering - DC Motor",
    "difficulty": "medium",
    "question": "For a DC motor, electromagnetic torque is proportional to flux times armature current. If flux becomes 0.80 of its initial value while armature current becomes 1.25 times its initial value, the new torque is",
    "options": [
      "1.25 times the original",
      "the same as the original",
      "1.05 times the original",
      "0.80 times the original"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Torque ratio=(0.80Phi)(1.25Ia)/(Phi Ia)=1.00, so the electromagnetic torque is unchanged.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-010"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electrical Engineering - Transformer",
    "difficulty": "medium",
    "question": "An ideal transformer has 840 primary turns and 210 secondary turns. With 264 V applied to the primary, the secondary voltage is",
    "options": [
      "66 V",
      "55 V",
      "44 V",
      "88 V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Vs/Vp=Ns/Np=210/840=1/4. Therefore Vs=264/4=66 V.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-011"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electrical Engineering - Induction Motor",
    "difficulty": "medium",
    "question": "A three-phase induction motor develops 12.6 kW of mechanical power in the rotor while the rotor copper loss is 0.9 kW. Neglecting mechanical losses for this calculation, the slip is",
    "options": [
      "6.67%",
      "7.14%",
      "5.00%",
      "7.69%"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Rotor input (air-gap power) equals mechanical power developed plus rotor copper loss: P2=12.6+0.9=13.5 kW. Since rotor copper loss=sP2, s=0.9/13.5=1/15=0.0667, or about 6.67%.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-012"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electrical Engineering - DC Motor",
    "difficulty": "easy",
    "question": "The main purpose of a starter in a DC motor is to",
    "options": [
      "increase supply frequency",
      "reverse field polarity automatically",
      "eliminate armature resistance",
      "limit the large starting armature current"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At start, back emf is zero, so the armature current would be very large. A starter inserts resistance initially to limit this current.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-013"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electrical Engineering - Power Billing",
    "difficulty": "medium",
    "question": "A 1.2 kW heater runs for 1.5 h, an 80 W fan for 5 h, and a 12 W lamp for 8 h. The total electrical energy consumed is",
    "options": [
      "2.496 kWh",
      "2.096 kWh",
      "2.896 kWh",
      "2.296 kWh"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Energy=1.2*1.5+0.080*5+0.012*8=1.8+0.4+0.096=2.296 kWh.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-014"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electrical Engineering - Power Billing",
    "difficulty": "easy",
    "question": "An installation consumes 6 kWh per day for 30 days. At an energy charge of 6.20 currency units per kWh, the energy charge is",
    "options": [
      "1080",
      "930",
      "1240",
      "1116"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Monthly energy=6*30=180 kWh. Charge=180*6.20=1116 currency units.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-015"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electrical Engineering - Earthing",
    "difficulty": "easy",
    "question": "The primary safety purpose of pipe or plate earthing in an electrical installation is to",
    "options": [
      "replace the circuit fuse",
      "provide a low-resistance path for fault current to ground",
      "raise the supply voltage",
      "increase the normal load current"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Earthing connects exposed conductive parts to earth through a low-resistance path so fault current can flow safely and protective devices can operate.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-016"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electrical Engineering - Measuring Instruments",
    "difficulty": "medium",
    "question": "A PMMC movement has resistance 90 ohm and full-scale current 2 mA. The series resistance needed to make a 10 V voltmeter is",
    "options": [
      "4.10 kOhm",
      "4.91 kOhm",
      "4.50 kOhm",
      "5.09 kOhm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Total resistance required=V/I=10/0.002=5000 ohm. Series resistance=5000-90=4910 ohm=4.91 kOhm.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-017"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electrical Engineering - Measuring Instruments",
    "difficulty": "easy",
    "question": "A moving-iron (MI) instrument can measure both AC and DC mainly because its deflecting torque",
    "options": [
      "is zero on DC",
      "requires permanent-magnet polarity reversal",
      "is proportional only to voltage frequency",
      "does not reverse when current reverses"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "MI torque depends on the magnetic effect roughly proportional to current squared, so its direction is unchanged when current reverses.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-018"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electrical Engineering - Storage Devices",
    "difficulty": "easy",
    "question": "Six identical 2 V, 80 Ah lead-acid cells are connected in series. The battery rating is ideally",
    "options": [
      "12 V, 80 Ah",
      "80 V, 12 Ah",
      "12 V, 480 Ah",
      "2 V, 480 Ah"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Series connection adds cell voltages, giving 12 V, while the ampere-hour capacity remains 80 Ah.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-019"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electrical Engineering - Storage Devices",
    "difficulty": "easy",
    "question": "Ignoring rate and efficiency effects, a 60 Ah battery supplying a steady 5 A would ideally last",
    "options": [
      "12 h",
      "8 h",
      "10 h",
      "15 h"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Ideal discharge time=capacity/current=60 Ah/5 A=12 h.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-020"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electronics Engineering - Electronic Devices",
    "difficulty": "easy",
    "question": "In the energy-band picture, an electrical insulator is characterized by",
    "options": [
      "a partially filled conduction band at all temperatures",
      "overlapping valence and conduction bands",
      "a large forbidden energy gap between valence and conduction bands",
      "zero forbidden gap"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Insulators have a large band gap, making thermal excitation of electrons into the conduction band difficult under ordinary conditions.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-021"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electronics Engineering - PN Junction Diode",
    "difficulty": "medium",
    "question": "A silicon diode with 0.7 V forward drop is connected in series with a 1.0 kOhm resistor across an 8.0 V DC source in forward bias. The current is approximately",
    "options": [
      "7.3 mA",
      "6.3 mA",
      "8.7 mA",
      "8.0 mA"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The resistor voltage is 8.0-0.7=7.3 V. Current=7.3 V/1.0 kOhm=7.3 mA.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-022"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electronics Engineering - Zener Diode",
    "difficulty": "medium",
    "question": "A 6.2 V Zener diode is connected through 480 ohm to a 15.8 V supply with negligible load current. The Zener current is",
    "options": [
      "15 mA",
      "25 mA",
      "10 mA",
      "20 mA"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The series resistor drops 15.8-6.2=9.6 V. Hence current=9.6/480=0.020 A=20 mA.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-023"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electronics Engineering - LED",
    "difficulty": "medium",
    "question": "An LED has forward drop 2.0 V and is powered from 9.0 V through 350 ohm. Its forward current is",
    "options": [
      "14 mA",
      "18 mA",
      "26 mA",
      "20 mA"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The resistor voltage is 9-2=7 V, so current=7/350=0.020 A=20 mA.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-024"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electronics Engineering - Integrated Circuits",
    "difficulty": "easy",
    "question": "A typical advantage of integrated circuits over equivalent circuits built from many discrete components is",
    "options": [
      "unlimited power dissipation",
      "smaller size and improved component matching",
      "need for much higher supply voltage",
      "complete immunity to temperature"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "IC fabrication places many components on one chip, reducing size and often improving matching and reliability.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-025"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electronics Engineering - Semiconductors",
    "difficulty": "easy",
    "question": "For an intrinsic semiconductor over the ordinary operating range, increasing temperature generally",
    "options": [
      "increases conductivity",
      "decreases conductivity to zero",
      "leaves conductivity exactly unchanged",
      "turns it into a perfect conductor"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Higher temperature generates more electron-hole pairs, increasing intrinsic semiconductor conductivity.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-026"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electronics Engineering - Rectifiers",
    "difficulty": "easy",
    "question": "A conventional single-phase bridge rectifier uses",
    "options": [
      "one diode and both half-cycles",
      "two diodes and only one half-cycle",
      "four diodes and both half-cycles",
      "four diodes but only one half-cycle"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A bridge rectifier uses four diodes arranged so that load current has the same direction during both input half-cycles.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-027"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electronics Engineering - Transistors",
    "difficulty": "easy",
    "question": "A transistor has emitter current 5.08 mA and base current 80 microA. Its collector current is",
    "options": [
      "5.16 mA",
      "4.92 mA",
      "5.00 mA",
      "5.08 mA"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "IE=IC+IB. Since 80 microA=0.08 mA, IC=5.08-0.08=5.00 mA.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-028"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electronics Engineering - Transistors",
    "difficulty": "medium",
    "question": "A CE transistor has current gain beta=120 and base current 35 microA. Neglecting leakage, collector current is",
    "options": [
      "4.2 mA",
      "2.9 mA",
      "5.6 mA",
      "3.5 mA"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "IC=beta IB=120*35 microA=4200 microA=4.2 mA.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-029"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electronics Engineering - Transistors",
    "difficulty": "medium",
    "question": "A transistor in common-base operation has alpha=0.98 and collector current 4.9 mA. Its emitter current is",
    "options": [
      "4.90 mA",
      "5.00 mA",
      "5.10 mA",
      "4.80 mA"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "alpha=IC/IE, so IE=IC/alpha=4.9/0.98=5.0 mA.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-030"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electronics Engineering - Biasing",
    "difficulty": "easy",
    "question": "The main purpose of biasing a transistor amplifier is to",
    "options": [
      "make the transistor junctions permanently open-circuit",
      "force the output to zero for every input",
      "establish a suitable quiescent operating point",
      "eliminate the need for a supply"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Biasing sets the DC operating or Q point so the transistor can amplify the intended signal with suitable swing and stability.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-031"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electronics Engineering - CE Amplifier",
    "difficulty": "easy",
    "question": "In a basic common-emitter voltage amplifier, the output voltage is ideally",
    "options": [
      "in phase with the input",
      "90 degrees ahead of the input",
      "180 degrees out of phase with the input",
      "independent of the input phase"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "An increase in base signal increases collector current and collector resistor drop, lowering collector voltage. Thus the CE stage inverts voltage phase by 180 degrees.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-032"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electronics Engineering - Communication System",
    "difficulty": "easy",
    "question": "A principal reason for modulating a low-frequency information signal onto a higher-frequency carrier is to",
    "options": [
      "enable practical radiation and transmission using a suitable carrier frequency",
      "remove all noise from the information",
      "avoid using any receiver tuning",
      "make the message frequency exactly zero"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Modulation translates information to a carrier band suitable for efficient radiation, channel allocation and reception.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-033"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electronics Engineering - Communication System",
    "difficulty": "easy",
    "question": "In ideal frequency modulation (FM), the carrier quantity that varies with the message is primarily its",
    "options": [
      "amplitude",
      "average DC level",
      "frequency",
      "physical propagation speed"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "In FM the instantaneous carrier frequency varies with the message while the carrier amplitude is ideally constant.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-034"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electronics Engineering - Communication System",
    "difficulty": "easy",
    "question": "In phase modulation (PM), the information signal directly varies the carrier's",
    "options": [
      "propagation medium",
      "mean power supply voltage",
      "amplitude only",
      "phase"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "PM encodes the message through changes in the instantaneous phase of the carrier.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-035"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electronics Engineering - Communication System",
    "difficulty": "easy",
    "question": "Demodulation at a receiver is the process of",
    "options": [
      "increasing the transmitter antenna height",
      "recovering the information signal from the modulated carrier",
      "converting DC into AC supply power",
      "measuring transistor beta"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Demodulation is the inverse communication function that extracts the baseband information from a received modulated waveform.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-036"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electronics Engineering - Transducers",
    "difficulty": "easy",
    "question": "A transducer used in measurement is best described as a device that",
    "options": [
      "always amplifies voltage by a fixed factor",
      "converts a physical quantity into a usable signal form",
      "works only with optical input",
      "stores electric charge indefinitely"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A transducer converts a measurand or one form of energy into another usable signal, commonly an electrical quantity.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-037"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electronics Engineering - Photoelectric Transducers",
    "difficulty": "easy",
    "question": "A photovoltaic transducer differs from many photoconductive devices because it can",
    "options": [
      "generate an emf from incident light without an external bias supply",
      "operate only in complete darkness",
      "increase resistance whenever light rises",
      "measure current only through a moving coil"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A photovoltaic device converts light directly into electrical emf/energy and can operate without an external bias source.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-038"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electronics Engineering - Photoelectric Transducers",
    "difficulty": "easy",
    "question": "For a typical photoconductive sensor, increasing illumination causes its electrical resistance to",
    "options": [
      "alternate between zero and infinity",
      "increase without limit",
      "remain exactly constant",
      "decrease"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Incident light creates additional charge carriers in a photoconductive material, increasing conductance and therefore decreasing resistance.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-039"
  },
  {
    "section": "Basic Electrical and Electronics Engineering",
    "topic": "Basic Electronics Engineering - Measuring Instruments",
    "difficulty": "easy",
    "question": "A standard multimeter is commonly used to measure",
    "options": [
      "only mechanical speed",
      "only optical wavelength",
      "voltage, current and resistance",
      "only fluid pressure"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The basic multimeter combines voltmeter, ammeter and ohmmeter functions for common electrical measurements.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-ee-040"
  }
];
