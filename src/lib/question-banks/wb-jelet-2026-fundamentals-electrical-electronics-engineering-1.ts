import type { Question } from '../questions';

export const WB_JELET_2026_FUNDAMENTALS_ELECTRICAL_ELECTRONICS_ENGINEERING_1: Question[] = [
  {
    "id": "wb-jelet-2026-ee-001",
    "section": "Fundamentals of Electrical & Electronics Engineering",
    "topic": "Electrical components and measuring instruments",
    "difficulty": "easy",
    "question": "Resistors 4 ohm and 6 ohm are in series across 20 V. The voltage across the 6 ohm resistor is",
    "options": [
      "12 V",
      "8 V",
      "10 V",
      "6 V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Series resistance is 10 ohm, so current is 20/10=2 A. Voltage across 6 ohm is 2\u00d76=12 V.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ee-002",
    "section": "Fundamentals of Electrical & Electronics Engineering",
    "topic": "Electrical components and measuring instruments",
    "difficulty": "medium",
    "question": "A PMMC movement has resistance 75 ohm and full-scale current 1.5 mA. The series resistance required to convert it into a 15 V voltmeter is",
    "options": [
      "9.85 kOhm",
      "10.0 kOhm",
      "9.925 kOhm",
      "7.50 kOhm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The total resistance needed at full scale is V/I = 15/0.0015 = 10000 ohm. Subtract the movement resistance: R_s=10000-75=9925 ohm=9.925 kOhm.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ee-003",
    "section": "Fundamentals of Electrical & Electronics Engineering",
    "topic": "Electrical components and measuring instruments",
    "difficulty": "easy",
    "question": "A basic PMMC instrument is directly suited for measuring",
    "options": [
      "AC only",
      "DC",
      "both AC and DC without modification",
      "frequency only"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Permanent-magnet moving-coil instruments respond to unidirectional current and are directly used for DC measurement.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ee-004",
    "section": "Fundamentals of Electrical & Electronics Engineering",
    "topic": "Transformers",
    "difficulty": "medium",
    "question": "An ideal transformer has 575 primary turns and 125 secondary turns. If the secondary current is 9.2 A, the primary current is",
    "options": [
      "2 A",
      "4.6 A",
      "42.32 A",
      "1.15 A"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For an ideal transformer Ip/Is=Ns/Np. Thus Ip=9.2\u00d7125/575=2 A.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ee-005",
    "section": "Fundamentals of Electrical & Electronics Engineering",
    "topic": "Electrical machines",
    "difficulty": "medium",
    "question": "A separately excited DC motor runs at 800 rpm with back emf 240 V at flux Phi. After adjustment, its back emf is 216 V and its flux is 0.80Phi. Assuming back emf is proportional to flux times speed, the new speed is",
    "options": [
      "720 rpm",
      "800 rpm",
      "900 rpm",
      "1000 rpm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Because E_b is proportional to Phi N, N2/N1=(E2/E1)(Phi1/Phi2)=(216/240)(1/0.80)=0.9/0.8=1.125. Thus N2=800\u00d71.125=900 rpm.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ee-006",
    "section": "Fundamentals of Electrical & Electronics Engineering",
    "topic": "DC sources and circuits",
    "difficulty": "medium",
    "question": "An ideal 12 V source in series with a 3 ohm resistor is viewed from its output terminals. Its Thevenin equivalent is",
    "options": [
      "Vth=4 V, Rth=3 ohm",
      "Vth=12 V, Rth=0",
      "Vth=12 V, Rth=3 ohm",
      "Vth=36 V, Rth=3 ohm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "With open circuit, no current flows, so terminal voltage is 12 V. Deactivating the ideal voltage source leaves 3 ohm, hence Vth=12 V and Rth=3 ohm.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ee-007",
    "section": "Fundamentals of Electrical & Electronics Engineering",
    "topic": "DC sources and circuits",
    "difficulty": "easy",
    "question": "At a node, 5 A enters while 2 A and 1 A leave. The remaining current leaving the node is",
    "options": [
      "1 A",
      "2 A",
      "3 A",
      "4 A"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "By KCL, total entering equals total leaving: 5=2+1+I, so I=2 A.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ee-008",
    "section": "Fundamentals of Electrical & Electronics Engineering",
    "topic": "AC sources and circuits",
    "difficulty": "easy",
    "question": "A sinusoidal current has rms value 10 A. Its peak value is",
    "options": [
      "10sqrt(2) A",
      "5sqrt(2) A",
      "20 A",
      "10/sqrt(2) A"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For a sinusoid, Irms=I0/sqrt(2), so I0=sqrt(2)Irms=10sqrt(2) A.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ee-009",
    "section": "Fundamentals of Electrical & Electronics Engineering",
    "topic": "Analog Circuits",
    "difficulty": "medium",
    "question": "An ideal inverting op-amp has Rin=10 kOhm and Rf=40 kOhm. For Vin=0.2 V, Vout is",
    "options": [
      "+0.8 V",
      "-0.2 V",
      "+0.2 V",
      "-0.8 V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For an inverting amplifier, gain=-Rf/Rin=-4. Therefore Vout=-4\u00d70.2=-0.8 V.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "wb-jelet-2026-ee-010",
    "section": "Fundamentals of Electrical & Electronics Engineering",
    "topic": "Digital Electronics",
    "difficulty": "easy",
    "question": "The output of a NAND gate for inputs A=1 and B=1 is",
    "options": [
      "1",
      "0",
      "A",
      "undefined"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "AND(1,1)=1, and NAND is its complement, so the output is 0.",
    "source": {
      "kind": "original",
      "reference": "WB JELET 2026 current official Paper-I information bulletin and syllabus",
      "url": "https://cdnbbsr.s3waas.gov.in/s3d2a27e83d429f0dcae6b937cf440aeb1/uploads/2026/03/20260318287108702.pdf",
      "checkedOn": "2026-08-29"
    }
  }
];
