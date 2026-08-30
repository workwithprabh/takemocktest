import type { Question } from '../questions';

export const PULEET_2026_GENERAL_ENGINEERING_1: Question[] = [
  {
    "id": "puleet-2026-ge-001",
    "section": "General Engineering",
    "topic": "Basic Electrical Engineering \u2014 DC circuits",
    "difficulty": "easy",
    "question": "During a test, 84 C of charge passes through a component in 28 s while the voltage across it is 17 V. What average power does the component absorb?",
    "options": [
      "34 W",
      "51 W",
      "5.7 W",
      "238 W"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The current is I=Q/t=84/28=3 A. Hence the absorbed power is P=VI=17\u00d73=51 W.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-002",
    "section": "General Engineering",
    "topic": "Basic Electrical Engineering \u2014 RC transient",
    "difficulty": "medium",
    "question": "A 4.7 kohm resistor is in series with a 20 microfarad capacitor. What is the circuit time constant?",
    "options": [
      "0.094 s",
      "94 s",
      "0.0094 s",
      "0.47 s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For an RC circuit, tau=RC=(4.7\u00d710^3)(20\u00d710^-6)=9.4\u00d710^-2 s=0.094 s.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-003",
    "section": "General Engineering",
    "topic": "Basic Electrical Engineering \u2014 single-phase AC",
    "difficulty": "medium",
    "question": "A series RL circuit has resistance 12 ohm and inductive reactance 5 ohm. If it is supplied at 26 V rms, what is the rms current?",
    "options": [
      "2.17 A",
      "5.2 A",
      "1 A",
      "2 A"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The impedance magnitude is sqrt(12^2+5^2)=13 ohm. Hence I=26/13=2 A.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-004",
    "section": "General Engineering",
    "topic": "Basic Electrical Engineering \u2014 AC power",
    "difficulty": "easy",
    "question": "A single-phase load has apparent power 4.25 kVA and real power 3.40 kW. What is the magnitude of its reactive power?",
    "options": [
      "2.55 kVAr",
      "0.85 kVAr",
      "3.40 kVAr",
      "4.25 kVAr"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For AC power, S^2=P^2+Q^2. Thus Q=sqrt(4.25^2-3.40^2)=sqrt(6.5025)=2.55 kVAr.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-005",
    "section": "General Engineering",
    "topic": "Basic Electrical Engineering \u2014 three-phase AC",
    "difficulty": "medium",
    "question": "A balanced star-connected load has 8 ohm impedance per phase and is supplied from a 400 V three-phase line. Approximately what is the line current?",
    "options": [
      "16.7 A",
      "28.9 A",
      "86.6 A",
      "50.0 A"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For a star load, V_phase=V_line/sqrt(3)=400/sqrt(3) V and I_line=I_phase. Thus I=400/(sqrt(3)\u00d78)=28.9 A.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-006",
    "section": "General Engineering",
    "topic": "Basic Electrical Engineering \u2014 magnetic circuit",
    "difficulty": "medium",
    "question": "A magnetic material has relative permeability 800 and is subjected to magnetic field strength H=400 A/m. Taking mu0=4pi\u00d710^-7 H/m, the flux density is closest to",
    "options": [
      "4.02 T",
      "0.0402 T",
      "0.000402 T",
      "0.402 T"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "B=mu0 mu_r H=(4pi\u00d710^-7)(800)(400)\u22480.402 T.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-007",
    "section": "General Engineering",
    "topic": "Basic Electrical Engineering \u2014 transformer EMF ratio",
    "difficulty": "medium",
    "question": "An ideal transformer has 720 primary turns and 198 secondary turns. If the primary voltage is 220 V, what is the secondary voltage?",
    "options": [
      "55.0 V",
      "60.5 V",
      "72.0 V",
      "80.0 V"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For an ideal transformer, Vs/Vp=Ns/Np. Hence Vs=220\u00d7198/720=60.5 V.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-008",
    "section": "General Engineering",
    "topic": "Basic Electrical Engineering \u2014 transformer efficiency",
    "difficulty": "medium",
    "question": "A transformer supplies 4.5 kW to a load while its total losses are 0.30 kW. What is its efficiency?",
    "options": [
      "96.8%",
      "94.5%",
      "93.75%",
      "90.0%"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Input power is 4.5+0.30=4.8 kW. Efficiency=4.5/4.8=0.9375=93.75%.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-009",
    "section": "General Engineering",
    "topic": "Basic Electrical Engineering \u2014 DC motor",
    "difficulty": "medium",
    "question": "A 240 V DC motor draws armature current 20 A. If armature resistance is 0.50 ohm, neglecting brush drop, what is the back emf?",
    "options": [
      "240 V",
      "220 V",
      "230 V",
      "250 V"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For a motor, V=E_b+I_aR_a. Thus E_b=240-(20)(0.50)=230 V.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-010",
    "section": "General Engineering",
    "topic": "Basic Electrical Engineering \u2014 stepper motor",
    "difficulty": "easy",
    "question": "A stepper motor requires 200 equal command steps for one complete revolution. What is its step angle?",
    "options": [
      "1.8\u00b0",
      "2.0\u00b0",
      "3.6\u00b0",
      "0.9\u00b0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Step angle=360\u00b0/steps per revolution=360\u00b0/200=1.8\u00b0.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-011",
    "section": "General Engineering",
    "topic": "Basic Electronics \u2014 rectifiers",
    "difficulty": "easy",
    "question": "A full-wave rectifier is supplied from a 50 Hz sinusoidal source. What is the fundamental ripple frequency at its output?",
    "options": [
      "50 Hz",
      "150 Hz",
      "100 Hz",
      "25 Hz"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "A full-wave rectifier produces two output pulses per input cycle, so the ripple frequency is 2\u00d750=100 Hz.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-012",
    "section": "General Engineering",
    "topic": "Basic Electronics \u2014 Zener diode",
    "difficulty": "medium",
    "question": "A 15 V supply feeds a 6.8 V Zener regulator through a series resistor. The load needs 20 mA and the Zener must carry at least 5 mA. What is the largest series resistance that still maintains regulation?",
    "options": [
      "164 ohm",
      "328 ohm",
      "410 ohm",
      "820 ohm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The resistor current must be at least 20+5=25 mA. Therefore R_max=(15-6.8)/0.025=328 ohm.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-013",
    "section": "General Engineering",
    "topic": "Basic Electronics \u2014 BJT",
    "difficulty": "easy",
    "question": "A transistor operates with common-emitter current gain beta=80 and base current 25 microampere. Neglecting leakage current, its collector current is",
    "options": [
      "0.3125 mA",
      "20 mA",
      "3.2 mA",
      "2.0 mA"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "I_C=beta I_B=80\u00d725 microampere=2000 microampere=2.0 mA.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-014",
    "section": "General Engineering",
    "topic": "Basic Electronics \u2014 FET",
    "difficulty": "easy",
    "question": "Which statement best describes the gate current of an ideal junction field-effect transistor operating with its gate-source junction reverse biased?",
    "options": [
      "It equals the drain current",
      "It is fixed by the drain resistor",
      "It is approximately zero",
      "It is larger than the source current"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The JFET gate-source junction is reverse biased, so only a negligible leakage current flows into the gate.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-015",
    "section": "General Engineering",
    "topic": "Basic Electronics \u2014 operational amplifier",
    "difficulty": "medium",
    "question": "An ideal op-amp is used as an open-loop comparator with supply rails at +10 V and -10 V. If V+ = 1.6 V and V- = 2.3 V, the output will be closest to",
    "options": [
      "0 V",
      "+10 V",
      "+1.6 V",
      "-10 V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Because V+ < V-, the differential input is negative. An ideal open-loop comparator therefore drives its output toward the negative supply rail, about -10 V.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-016",
    "section": "General Engineering",
    "topic": "Basic Electronics \u2014 operational amplifier",
    "difficulty": "medium",
    "question": "An ideal non-inverting op-amp uses Rf=36 kohm and R1=12 kohm. If Vin=0.50 V, the output voltage is",
    "options": [
      "2.0 V",
      "4.0 V",
      "0.667 V",
      "1.5 V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The non-inverting gain is 1+Rf/R1=1+36/12=4, so Vout=4\u00d70.50=2.0 V.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-017",
    "section": "General Engineering",
    "topic": "Basic Electronics \u2014 sensors and transducers",
    "difficulty": "easy",
    "question": "For a typical light-dependent resistor (LDR), what happens to its resistance when incident light intensity increases?",
    "options": [
      "It decreases",
      "It increases linearly",
      "It becomes infinite",
      "It remains exactly constant"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "An LDR is photoconductive: greater illumination generates more charge carriers, so its resistance decreases.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-018",
    "section": "General Engineering",
    "topic": "Basic Electronics \u2014 digital logic",
    "difficulty": "easy",
    "question": "For a half-adder with inputs A and B, the SUM output is generated by which logic operation?",
    "options": [
      "A AND B",
      "A OR B",
      "A XOR B",
      "NOT(A OR B)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "A half-adder produces SUM=A XOR B and CARRY=A AND B.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-019",
    "section": "General Engineering",
    "topic": "Basic Electronics \u2014 flip-flops",
    "difficulty": "easy",
    "question": "For a JK flip-flop, which input condition causes the output to toggle on the active clock edge?",
    "options": [
      "J=0, K=1",
      "J=0, K=0",
      "J=1, K=1",
      "J=1, K=0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The JK truth table gives toggle operation when both J and K are 1.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-020",
    "section": "General Engineering",
    "topic": "Basic Electronics \u2014 communication",
    "difficulty": "medium",
    "question": "In ideal frequency modulation, which carrier property remains constant while the modulating signal varies?",
    "options": [
      "Amplitude",
      "Instantaneous frequency",
      "Instantaneous phase",
      "Frequency deviation"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "In ideal FM the carrier amplitude is constant. The instantaneous frequency, and therefore phase and frequency deviation, vary with the modulating signal.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-021",
    "section": "General Engineering",
    "topic": "Programming Fundamentals \u2014 Linux shell commands",
    "difficulty": "easy",
    "question": "Which Linux shell command prints the pathname of the current working directory?",
    "options": [
      "grep",
      "cd",
      "pwd",
      "mkdir"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The `pwd` command means 'print working directory' and displays the current directory path.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-022",
    "section": "General Engineering",
    "topic": "Programming Fundamentals \u2014 C operators",
    "difficulty": "easy",
    "question": "In C, what is the value of the integer expression 17 % 5 + 3 * 2?",
    "options": [
      "4",
      "14",
      "10",
      "8"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Multiplication and remainder are evaluated before addition: 17%5=2 and 3\u00d72=6, so the result is 8.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-023",
    "section": "General Engineering",
    "topic": "Programming Fundamentals \u2014 loops",
    "difficulty": "medium",
    "question": "What is printed by this C code?\n\nint s=0;\nfor(int i=1;i<=5;i+=2) s+=i;\nprintf(\"%d\",s);",
    "options": [
      "9",
      "15",
      "8",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The loop visits i=1,3,5. Their sum is 1+3+5=9.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-024",
    "section": "General Engineering",
    "topic": "Programming Fundamentals \u2014 program control flow",
    "difficulty": "medium",
    "question": "What is printed by this C code?\n\nint x=8, c=0;\ndo { x-=3; c++; } while(x>0);\nprintf(\"%d\",c);",
    "options": [
      "4",
      "3",
      "5",
      "2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The loop executes with x becoming 5, then 2, then -1. The counter is incremented three times, so it prints 3.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-025",
    "section": "General Engineering",
    "topic": "Programming Fundamentals \u2014 pointers and arrays",
    "difficulty": "medium",
    "question": "What is printed by this C code?\n\nint a[]={3,5,8,13};\nint *p=a+1;\nprintf(\"%d\",*(p+2)-*p);",
    "options": [
      "13",
      "8",
      "5",
      "10"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "p points to a[1]=5 and p+2 points to a[3]=13. The printed difference is 13-5=8.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-026",
    "section": "General Engineering",
    "topic": "Programming Fundamentals \u2014 functions and call by value",
    "difficulty": "easy",
    "question": "What is printed by this C program?\n\nvoid f(int x){ x += 5; }\nint main(void){ int a=7; f(a); printf(\"%d\",a); }",
    "options": [
      "7",
      "12",
      "Compilation error",
      "5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "C passes the integer argument by value. The function modifies only its local copy x, so a remains 7.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-027",
    "section": "General Engineering",
    "topic": "Programming Fundamentals \u2014 static variables",
    "difficulty": "medium",
    "question": "What is printed by this C program?\n\nint f(void){ static int x=5; x+=2; return x; }\nint main(void){ int a=f(); int b=f(); printf(\"%d %d\",a,b); }",
    "options": [
      "9 7",
      "7 7",
      "9 9",
      "7 9"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The static variable x retains its value between calls. The first call changes x from 5 to 7; the second changes it from 7 to 9. Therefore the program prints 7 9.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-028",
    "section": "General Engineering",
    "topic": "Programming Fundamentals \u2014 structures and unions",
    "difficulty": "easy",
    "question": "Which statement correctly distinguishes a C union from a C structure?",
    "options": [
      "Union members must all have the same data type",
      "A union cannot contain arrays",
      "A structure can store only one member value at a time",
      "Union members share the same storage, while structure members have separate storage"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "All union members overlay the same memory region, whereas each structure member has its own storage within the structure object.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-029",
    "section": "General Engineering",
    "topic": "Programming Fundamentals \u2014 file I/O",
    "difficulty": "easy",
    "question": "In C, opening a text file with mode \"a\" using fopen primarily means that",
    "options": [
      "the file is truncated to zero length before writing",
      "all writes occur at the beginning of the file",
      "writes are appended at the end of the file",
      "the existing file must be read-only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Mode \"a\" opens a file for writing in append mode; output is written at the end, and the file is created if it does not exist.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-030",
    "section": "General Engineering",
    "topic": "Programming Fundamentals \u2014 object-oriented programming",
    "difficulty": "easy",
    "question": "In object-oriented programming, the practice of bundling data with the operations that act on that data inside a class is called",
    "options": [
      "Recursion",
      "Tokenization",
      "Encapsulation",
      "Linking"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Encapsulation groups state and related behavior within a class and controls how that state is accessed.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-031",
    "section": "General Engineering",
    "topic": "Fundamentals of Mechanical Engineering \u2014 first law",
    "difficulty": "medium",
    "question": "In a steady-flow turbine, fluid enthalpy decreases from 3200 to 2600 kJ/kg while 50 kJ/kg of heat is lost to the surroundings. Neglect kinetic and potential energy changes. The turbine work output is",
    "options": [
      "600 kJ/kg",
      "550 kJ/kg",
      "50 kJ/kg",
      "650 kJ/kg"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For steady flow, q-w=h2-h1. Here q=-50 kJ/kg and h2-h1=-600 kJ/kg, so -50-w=-600 and w=550 kJ/kg.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-032",
    "section": "General Engineering",
    "topic": "Fundamentals of Mechanical Engineering \u2014 refrigerator",
    "difficulty": "easy",
    "question": "A refrigerator removes heat at 3.0 kW while consuming 1.2 kW of power. Its coefficient of performance is",
    "options": [
      "1.5",
      "2.5",
      "3.6",
      "4.2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "COP_R=Q_L/W=3.0/1.2=2.5.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-033",
    "section": "General Engineering",
    "topic": "Fundamentals of Mechanical Engineering \u2014 steam",
    "difficulty": "easy",
    "question": "A vessel contains 2.0 kg of wet steam of dryness fraction 0.80. What mass of dry saturated vapour is present?",
    "options": [
      "2.5 kg",
      "0.4 kg",
      "0.8 kg",
      "1.6 kg"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Dryness fraction x=m_vapour/m_total. Thus m_vapour=0.80\u00d72.0=1.6 kg.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-034",
    "section": "General Engineering",
    "topic": "Fundamentals of Mechanical Engineering \u2014 Otto cycle",
    "difficulty": "medium",
    "question": "During the constant-volume heat-addition process of an air-standard Otto cycle, the air temperature rises from 680 K to 1430 K. If Cv = 0.72 kJ/(kg K), the heat added per kilogram is",
    "options": [
      "375 kJ/kg",
      "750 kJ/kg",
      "1030 kJ/kg",
      "540 kJ/kg"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "At constant volume, q_in=Cv(T3-T2)=0.72(1430-680)=0.72\u00d7750=540 kJ/kg.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-035",
    "section": "General Engineering",
    "topic": "Fundamentals of Mechanical Engineering \u2014 fluid kinematics",
    "difficulty": "medium",
    "question": "For a two-dimensional velocity field u=3x and v=-3y, the value of du/dx + dv/dy is",
    "options": [
      "0",
      "3",
      "6",
      "-3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "du/dx=3 and dv/dy=-3, so their sum is zero. This is the two-dimensional incompressibility condition.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-036",
    "section": "General Engineering",
    "topic": "Fundamentals of Mechanical Engineering \u2014 Bernoulli equation",
    "difficulty": "medium",
    "question": "Water flows steadily through a horizontal pipe. At section 1, pressure is 175 kPa and speed is 2.5 m/s; at section 2, speed is 5.5 m/s. Neglecting losses and taking density as 1000 kg/m^3, the pressure at section 2 is",
    "options": [
      "187 kPa",
      "163 kPa",
      "151 kPa",
      "175 kPa"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For a horizontal lossless flow, p1+rho v1^2/2=p2+rho v2^2/2. Hence p2=175 kPa + 0.5(1000)(2.5^2-5.5^2)/1000 = 163 kPa.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-037",
    "section": "General Engineering",
    "topic": "Fundamentals of Mechanical Engineering \u2014 flow measurement",
    "difficulty": "easy",
    "question": "Which flowmeter works on the variable-area principle, with a float rising in a tapered tube as flow rate increases?",
    "options": [
      "Rotameter",
      "Venturimeter",
      "Orificemeter",
      "Pitot tube"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "A rotameter is a variable-area flowmeter: the float position in a tapered tube changes with flow rate.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-038",
    "section": "General Engineering",
    "topic": "Fundamentals of Mechanical Engineering \u2014 stress and strain",
    "difficulty": "easy",
    "question": "An axial tensile load of 24 kN acts on a bar of cross-sectional area 300 mm^2. The normal stress is",
    "options": [
      "120 MPa",
      "80 MPa",
      "8 MPa",
      "72 MPa"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Stress=P/A=24000 N/300 mm^2=80 N/mm^2=80 MPa.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-039",
    "section": "General Engineering",
    "topic": "Fundamentals of Mechanical Engineering \u2014 bending moment",
    "difficulty": "medium",
    "question": "At a section of a beam, the shear force passes continuously through zero from positive to negative. What does this indicate about the bending moment at that section?",
    "options": [
      "It is necessarily zero",
      "It has a local maximum",
      "It has a local minimum",
      "It is discontinuous"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Since dM/dx equals the shear force, a change of shear from positive to negative makes the slope of the bending-moment diagram change from positive to negative. Therefore the bending moment has a local maximum.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-040",
    "section": "General Engineering",
    "topic": "Fundamentals of Mechanical Engineering \u2014 torsion",
    "difficulty": "hard",
    "question": "A solid circular shaft of diameter 40 mm transmits a torque of 1.0 kN m. Using tau_max=16T/(pi d^3), the maximum shear stress is closest to",
    "options": [
      "79.6 MPa",
      "39.8 MPa",
      "63.7 MPa",
      "159 MPa"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "With T=1.0\u00d710^6 N mm and d=40 mm, tau_max=16\u00d710^6/[pi(40)^3]\u224879.6 N/mm^2=79.6 MPa.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-041",
    "section": "General Engineering",
    "topic": "Fundamentals of Civil Engineering \u2014 construction materials",
    "difficulty": "easy",
    "question": "Which constituent of ordinary concrete is primarily responsible for binding the aggregate particles after hydration?",
    "options": [
      "Formwork oil",
      "Coarse aggregate",
      "Air voids",
      "Cement paste"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Hydrated cement paste forms the binding matrix that holds fine and coarse aggregates together.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-042",
    "section": "General Engineering",
    "topic": "Fundamentals of Civil Engineering \u2014 hydraulics",
    "difficulty": "easy",
    "question": "For a vertical plane surface fully submerged in a static liquid, the centre of pressure is generally located",
    "options": [
      "at the free surface",
      "above the centroid",
      "below the centroid",
      "exactly at the centroid for every depth"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Hydrostatic pressure increases with depth, so the resultant force acts below the geometric centroid of a vertical submerged plane surface.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-043",
    "section": "General Engineering",
    "topic": "Fundamentals of Civil Engineering \u2014 concrete",
    "difficulty": "medium",
    "question": "For otherwise identical concrete mixes, increasing the water-cement ratio substantially beyond that required for workability generally causes the hardened compressive strength to",
    "options": [
      "become independent of curing",
      "remain exactly unchanged",
      "increase without limit",
      "decrease"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Excess mixing water leaves additional capillary voids after hardening, so a higher water-cement ratio generally lowers strength.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-044",
    "section": "General Engineering",
    "topic": "Fundamentals of Civil Engineering \u2014 RCC",
    "difficulty": "easy",
    "question": "In a simply supported singly reinforced RCC beam carrying downward gravity load, the main tensile reinforcement is normally placed near the",
    "options": [
      "top face at midspan",
      "neutral axis only",
      "bottom face at midspan",
      "top and bottom faces equally"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Positive bending at midspan puts the lower region in tension, so the principal tension steel is placed near the bottom face.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-045",
    "section": "General Engineering",
    "topic": "Fundamentals of Civil Engineering \u2014 steel structures",
    "difficulty": "medium",
    "question": "A steel tension member has a net cross-sectional area of 1200 mm^2 and carries an average tensile stress of 150 MPa. What axial force does it carry?",
    "options": [
      "180 kN",
      "125 kN",
      "80 kN",
      "300 kN"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Force=stress\u00d7area=150 N/mm^2\u00d71200 mm^2=180000 N=180 kN.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-046",
    "section": "General Engineering",
    "topic": "Fundamentals of Civil Engineering \u2014 surveying",
    "difficulty": "easy",
    "question": "In compass surveying, a line has whole-circle fore bearing 72\u00b0. If local attraction is absent, its back bearing is",
    "options": [
      "108\u00b0",
      "162\u00b0",
      "252\u00b0",
      "288\u00b0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For whole-circle bearings, back bearing differs from fore bearing by 180\u00b0. Thus 72\u00b0+180\u00b0=252\u00b0.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-047",
    "section": "General Engineering",
    "topic": "Fundamentals of Civil Engineering \u2014 irrigation",
    "difficulty": "easy",
    "question": "An irrigation channel carries 0.50 m^3/s and the duty at the field is 1200 hectares per cumec. What area can be irrigated at that discharge?",
    "options": [
      "2400 hectares",
      "600 hectares",
      "240 hectares",
      "1200 hectares"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Area=duty\u00d7discharge=1200 ha/(m^3/s)\u00d70.50 m^3/s=600 ha.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-048",
    "section": "General Engineering",
    "topic": "Fundamentals of Civil Engineering \u2014 transportation",
    "difficulty": "medium",
    "question": "Using e=v^2/(225R), what superelevation e is required for a road curve of radius 300 m at design speed 60 km/h?",
    "options": [
      "0.0267",
      "0.1200",
      "0.0533",
      "0.0800"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "e=60^2/(225\u00d7300)=3600/67500=0.0533.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-049",
    "section": "General Engineering",
    "topic": "Fundamentals of Civil Engineering \u2014 soil mechanics",
    "difficulty": "medium",
    "question": "A moist soil has bulk density 1.90 Mg/m^3 and water content 10% by dry mass. Its dry density is closest to",
    "options": [
      "2.09 Mg/m^3",
      "1.71 Mg/m^3",
      "1.90 Mg/m^3",
      "1.73 Mg/m^3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "rho_bulk=rho_d(1+w), so rho_d=1.90/1.10=1.727 Mg/m^3\u22481.73 Mg/m^3.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-050",
    "section": "General Engineering",
    "topic": "Fundamentals of Civil Engineering \u2014 estimation and costing",
    "difficulty": "medium",
    "question": "A brick wall is 5.0 m long, 3.0 m high and 0.23 m thick. It contains one opening 1.2 m by 1.5 m through the full wall thickness. The net brickwork volume is",
    "options": [
      "2.622 m^3",
      "4.140 m^3",
      "3.450 m^3",
      "3.036 m^3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Gross volume=5\u00d73\u00d70.23=3.45 m^3. Opening volume=1.2\u00d71.5\u00d70.23=0.414 m^3. Net=3.45-0.414=3.036 m^3.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-051",
    "section": "General Engineering",
    "topic": "Fundamentals of Chemical Engineering \u2014 units and dimensions",
    "difficulty": "easy",
    "question": "Which SI base-dimension expression represents pressure?",
    "options": [
      "M L^-1 T^-2",
      "M L^2 T^-2",
      "M^0 L^-1 T^-1",
      "M L T^-2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Pressure=force/area. Since force has dimensions MLT^-2 and area L^2, pressure has ML^-1T^-2.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-052",
    "section": "General Engineering",
    "topic": "Fundamentals of Chemical Engineering \u2014 unit conversion",
    "difficulty": "easy",
    "question": "A liquid stream flows at 7200 kg/h. What is the same mass flow rate in kg/s?",
    "options": [
      "0.5 kg/s",
      "120 kg/s",
      "7.2 kg/s",
      "2.0 kg/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "There are 3600 seconds in an hour, so 7200 kg/h divided by 3600 equals 2.0 kg/s.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-053",
    "section": "General Engineering",
    "topic": "Fundamentals of Chemical Engineering \u2014 chemical composition",
    "difficulty": "easy",
    "question": "A gas mixture contains 2 kmol of A, 3 kmol of B and 5 kmol of C. What is the mole fraction of B?",
    "options": [
      "0.30",
      "0.20",
      "0.60",
      "0.50"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Total amount=2+3+5=10 kmol. Mole fraction of B=3/10=0.30.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-054",
    "section": "General Engineering",
    "topic": "Fundamentals of Chemical Engineering \u2014 material balance",
    "difficulty": "medium",
    "question": "A mixer combines 100 kg of a 30 wt% salt solution with 50 kg of a 10 wt% salt solution. What is the salt mass fraction in the product?",
    "options": [
      "20.0 wt%",
      "40.0 wt%",
      "26.7 wt%",
      "23.3 wt%"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Salt mass=0.30\u00d7100+0.10\u00d750=35 kg. Total mass=150 kg, so salt fraction=35/150=0.233=23.3 wt%.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-055",
    "section": "General Engineering",
    "topic": "Fundamentals of Chemical Engineering \u2014 evaporation balance",
    "difficulty": "medium",
    "question": "An evaporator concentrates 1000 kg/h of solution containing 10 wt% nonvolatile solids to a product containing 40 wt% solids. What is the product flow rate?",
    "options": [
      "400 kg/h",
      "100 kg/h",
      "250 kg/h",
      "750 kg/h"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The nonvolatile solids flow is 100 kg/h and is conserved. Thus 0.40P=100, giving P=250 kg/h.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-056",
    "section": "General Engineering",
    "topic": "Fundamentals of Chemical Engineering \u2014 recycle balance",
    "difficulty": "hard",
    "question": "Fresh feed enters a process at 100 kmol/h. A recycle stream is 25% of the total stream entering the reactor. What is the recycle flow rate?",
    "options": [
      "75.0 kmol/h",
      "33.3 kmol/h",
      "125 kmol/h",
      "25.0 kmol/h"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "If R is recycle, R=0.25(100+R). Thus 0.75R=25 and R=33.3 kmol/h.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-057",
    "section": "General Engineering",
    "topic": "Fundamentals of Chemical Engineering \u2014 limiting reactant",
    "difficulty": "medium",
    "question": "For N2 + 3H2 -> 2NH3, a feed contains 10 mol N2 and 24 mol H2. Assuming complete reaction of the limiting reactant, how many moles of NH3 can form?",
    "options": [
      "24 mol",
      "20 mol",
      "16 mol",
      "8 mol"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Twenty-four moles H2 can react with 8 mol N2 and produces (2/3)\u00d724=16 mol NH3. Hydrogen is limiting.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-058",
    "section": "General Engineering",
    "topic": "Fundamentals of Chemical Engineering \u2014 ideal gas law",
    "difficulty": "medium",
    "question": "A fixed amount of ideal gas changes state so that its absolute temperature becomes 1.20 times the initial value and its pressure becomes 1.50 times the initial value. The ratio V2/V1 is",
    "options": [
      "1.25",
      "0.80",
      "1.80",
      "0.50"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "For a fixed amount of ideal gas, V is proportional to T/P. Thus V2/V1=(T2/T1)(P1/P2)=1.20/1.50=0.80.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-059",
    "section": "General Engineering",
    "topic": "Fundamentals of Chemical Engineering \u2014 vapour-liquid equilibrium",
    "difficulty": "medium",
    "question": "An ideal liquid mixture has x_A=0.40 and x_B=0.60. At the same temperature, pure-component vapour pressures are 100 kPa for A and 40 kPa for B. By Raoult's law, the total vapour pressure is",
    "options": [
      "40 kPa",
      "64 kPa",
      "56 kPa",
      "76 kPa"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "P=x_A P_A^sat+x_B P_B^sat=0.40\u00d7100+0.60\u00d740=40+24=64 kPa.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "puleet-2026-ge-060",
    "section": "General Engineering",
    "topic": "Fundamentals of Chemical Engineering \u2014 humidity",
    "difficulty": "easy",
    "question": "At a given temperature, water-vapour partial pressure in air is 1.8 kPa while the saturation vapour pressure is 3.0 kPa. The relative humidity is",
    "options": [
      "60%",
      "80%",
      "40%",
      "66.7%"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Relative humidity=(actual vapour pressure/saturation vapour pressure)\u00d7100=(1.8/3.0)\u00d7100=60%.",
    "source": {
      "kind": "original",
      "reference": "PULEET 2026 current official prospectus, scheme of test and syllabus",
      "url": "https://puleet.puchd.ac.in/pdf/puleet2026.pdf",
      "checkedOn": "2026-08-29"
    }
  }
];
