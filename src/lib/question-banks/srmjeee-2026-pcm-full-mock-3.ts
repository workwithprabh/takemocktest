import type { Question } from '../questions';

// Frozen Main Brain handoff content, integrated mechanically on 8 September
// 2026. SRMJEEE 2026 UG Mathematics route, 130 questions, no negative marking.
// Records are copied field-for-field from the approved package; stems,
// options, answer keys, explanations, sections, difficulty, marking and
// source metadata are not rewritten here.

export const SRMJEEE_2026_PCM_FULL_MOCK_3: Question[] = [
  {
    "id": "srmjeee-2026-ug-mathematics-physics-001",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "hard",
    "question": "A current waveform is i(t)=2+3 sin(ωt) A. What is its RMS value over one complete cycle?",
    "options": [
      "5/√2 A",
      "√(17/2) A",
      "√13 A",
      "7/2 A"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a DC offset plus a zero-mean sinusoid, I_rms²=I_DC²+I_ac,rms²=2²+(3/√2)²=4+9/2=17/2. Hence I_rms=√(17/2) A.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-002",
    "section": "Physics",
    "topic": "Alternating Current",
    "difficulty": "hard",
    "question": "An ideal transformer steps 240 V rms down to 24 V rms. Its secondary supplies 2.0 A rms. What primary current is drawn?",
    "options": [
      "0.02 A",
      "2.0 A",
      "20 A",
      "0.20 A"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For an ideal transformer, input power equals output power: 240 I_p=24×2.0, so I_p=0.20 A.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-003",
    "section": "Physics",
    "topic": "Ray Optics",
    "difficulty": "hard",
    "question": "A mark lies beneath a 3 cm glass layer of refractive index 1.5 and a 4 cm liquid layer of refractive index 4/3. Viewed normally from air, what is the total apparent depth below the top surface?",
    "options": [
      "5 cm",
      "4 cm",
      "6 cm",
      "7 cm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For normal viewing through plane layers, apparent depth is the sum t_i/n_i: 3/1.5+4/(4/3)=2+3=5 cm.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-004",
    "section": "Physics",
    "topic": "Ray Optics",
    "difficulty": "hard",
    "question": "A 6 cm thick glass plate of refractive index 1.5 lies on a printed scale. A 2 cm thick liquid layer of refractive index 4/3 is poured on top. Viewed normally from air, by how much is the scale raised in apparent position relative to its true depth?",
    "options": [
      "1.5 cm",
      "2.5 cm",
      "2.0 cm",
      "3.0 cm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Real depth is 8 cm. Apparent depth=6/1.5+2/(4/3)=4+1.5=5.5 cm. Apparent upward shift=8−5.5=2.5 cm.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-005",
    "section": "Physics",
    "topic": "Ray Optics",
    "difficulty": "hard",
    "question": "A ray in glass (n=1.50) strikes a glass–liquid boundary. The liquid has n=1.20. For which incident angle is the refracted ray at 90°?",
    "options": [
      "sin⁻¹(0.80)",
      "sin⁻¹(0.60)",
      "sin⁻¹(0.75)",
      "sin⁻¹(1.25)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At critical incidence, n_g sinC=n_l, so sinC=1.20/1.50=0.80.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-006",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "hard",
    "question": "In a Young setup, a glass sheet inserted before one slit produces a shift of 5 fringes. If the sheet thickness is halved and its refractive index excess (μ−1) is doubled, what fringe shift results?",
    "options": [
      "5 fringes",
      "2.5 fringes",
      "10 fringes",
      "20 fringes"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Fringe shift N=(μ−1)t/λ. Halving t and doubling μ−1 leaves the product unchanged, so N remains 5.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-007",
    "section": "Physics",
    "topic": "Wave Optics",
    "difficulty": "hard",
    "question": "A single-slit pattern has its first minimum at 3.0 mm from the centre on a screen. Without changing wavelength or screen distance, the slit is narrowed to 3/4 of its original width. Where will the first minimum now appear?",
    "options": [
      "2.25 mm",
      "3.0 mm",
      "5.25 mm",
      "4.0 mm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For small angles, y₁=λD/a. Reducing a to 3a/4 multiplies y₁ by 4/3: 3.0 mm→4.0 mm.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-008",
    "section": "Physics",
    "topic": "Dual Nature of Radiation",
    "difficulty": "medium",
    "question": "A photon detector is recalibrated from 480 nm light to 720 nm light. If it counts the same number of photons per second, the incident optical power becomes what fraction of its former value?",
    "options": [
      "1/2",
      "3/2",
      "9/4",
      "2/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Power for a fixed photon rate is proportional to photon energy hc/λ. Thus P₂/P₁=480/720=2/3.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-009",
    "section": "Physics",
    "topic": "Dual Nature of Matter",
    "difficulty": "hard",
    "question": "An electron and a proton are adjusted to have the same de Broglie wavelength. If the electron speed is nonrelativistic and equals v, what is the proton speed approximately?",
    "options": [
      "v",
      "v/43",
      "v/1836",
      "1836v"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Equal wavelength means equal momentum. Thus m_e v=m_p v_p, so v_p≈v/1836.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-010",
    "section": "Physics",
    "topic": "Atoms",
    "difficulty": "hard",
    "question": "In the Bohr model of hydrogen, an electron is in an orbit whose radius is 25 times the ground-state Bohr radius. What is the ratio of its orbital angular momentum to that in the ground state?",
    "options": [
      "5",
      "25",
      "1/5",
      "1/25"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For hydrogen, r_n/r_1=n^2. A radius ratio of 25 gives n=5. Bohr angular momentum is L_n=nħ, so L_n/L_1=5.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-011",
    "section": "Physics",
    "topic": "Nuclei",
    "difficulty": "hard",
    "question": "A tracer falls to 12.5% of its initial activity in 15 h. If a measurement is made 5 h later, what fraction of the initial activity remains?",
    "options": [
      "1/16",
      "1/8",
      "1/12",
      "1/32"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "12.5%=1/8 after 15 h, so the half-life is 5 h. Five hours later one more half-life has passed, leaving 1/16.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-012",
    "section": "Physics",
    "topic": "Nuclei",
    "difficulty": "hard",
    "question": "Two nuclei have mass numbers 27 and 216. Under the usual R=r₀A^(1/3) model, what is the ratio of their radii R₂₁₆/R₂₇?",
    "options": [
      "4",
      "6",
      "8",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The ratio is (216/27)^(1/3)=8^(1/3)=2.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-013",
    "section": "Physics",
    "topic": "Semiconductors",
    "difficulty": "hard",
    "question": "A silicon diode with a 0.7 V forward drop is in series with a 430 Ω resistor across a 5.0 V source. Approximately what current flows?",
    "options": [
      "1 mA",
      "10 mA",
      "5 mA",
      "20 mA"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The resistor sees about 5.0−0.7=4.3 V, so I=4.3/430=0.010 A=10 mA.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-014",
    "section": "Physics",
    "topic": "Logic Gates",
    "difficulty": "hard",
    "question": "A safety interlock must output 1 only when exactly one of sensors A and B is 1, but an available chip provides only NAND gates. Which Boolean function is required at the output?",
    "options": [
      "A XOR B",
      "A AND B",
      "A OR B",
      "A XNOR B"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "“Exactly one input is 1” is the XOR truth condition. NAND gates can synthesize XOR, but the required logical function is A XOR B.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-015",
    "section": "Physics",
    "topic": "Experimental Skills",
    "difficulty": "hard",
    "question": "A screw gauge has pitch 0.5 mm and 50 circular-scale divisions. A wire reading is 2.30 mm before zero correction; the instrument has +0.04 mm zero error. What corrected diameter should be reported?",
    "options": [
      "2.30 mm",
      "2.34 mm",
      "2.24 mm",
      "2.26 mm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A positive zero error is subtracted. Corrected reading=2.30−0.04=2.26 mm.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-016",
    "section": "Physics",
    "topic": "Electromagnetic Waves",
    "difficulty": "medium",
    "question": "A remote sensor uses radiation at 3×10¹¹ Hz. Taking c=3×10⁸ m/s, its wavelength is:",
    "options": [
      "0.1 mm",
      "1 mm",
      "1 cm",
      "10 cm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "λ=c/f=10⁻³ m=1 mm, which lies in the microwave/submillimetre region.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-017",
    "section": "Physics",
    "topic": "Magnetism",
    "difficulty": "hard",
    "question": "A dipole initially makes 120° with a uniform field B. It is rotated quasistatically to 60°. What is the decrease in magnetic potential energy?",
    "options": [
      "mB/2",
      "mB",
      "3mB/2",
      "2mB"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "U=−mBcosθ. U_i=+mB/2 and U_f=−mB/2, so the decrease U_i−U_f=mB.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-018",
    "section": "Physics",
    "topic": "Circular Motion",
    "difficulty": "hard",
    "question": "A car rounds a level circular track. At speed v it needs friction coefficient μ. If the radius is tripled and speed doubled, the required coefficient becomes:",
    "options": [
      "2μ/3",
      "3μ/2",
      "4μ",
      "4μ/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "μ∝v²/r. The factor is 2²/3=4/3.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-019",
    "section": "Physics",
    "topic": "Work Energy and Power",
    "difficulty": "hard",
    "question": "A spring of constant 40 N/m is already stretched 0.10 m. How much additional work is required to stretch it to 0.30 m?",
    "options": [
      "1.6 J",
      "0.8 J",
      "2.0 J",
      "3.2 J"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Additional work equals the increase in elastic potential energy: ½k(0.30²−0.10²)=20(0.08)=1.6 J.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-020",
    "section": "Physics",
    "topic": "Units and Measurements",
    "difficulty": "hard",
    "question": "A measured quantity is Q=A²/(BC³). If percentage uncertainties are 1% in A, 2% in B and 1% in C, what maximum percentage uncertainty should be assigned to Q?",
    "options": [
      "4%",
      "7%",
      "5%",
      "6%"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Maximum percentage uncertainty is 2(1%)+1(2%)+3(1%)=7%.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-021",
    "section": "Physics",
    "topic": "Units and Measurements",
    "difficulty": "hard",
    "question": "An experimentally fitted constant has dimensions M⁰L²T⁻¹. Which SI unit is compatible with it?",
    "options": [
      "m s⁻²",
      "kg m² s⁻¹",
      "m² s⁻²",
      "m² s⁻¹"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "M⁰L²T⁻¹ corresponds directly to m²/s.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-022",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "hard",
    "question": "A cart has velocity v(t)=6−2t m/s from t=0 to 5 s. What is its net displacement over those 5 s?",
    "options": [
      "0 m",
      "10 m",
      "15 m",
      "5 m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Displacement=∫₀⁵(6−2t)dt=[6t−t²]₀⁵=30−25=5 m. The cart reverses after 3 s, so distance would be different.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-023",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "hard",
    "question": "A particle’s position is x=t³−6t²+9t+4. At the instant its velocity first becomes zero for t>0, what is its acceleration?",
    "options": [
      "0",
      "-6 m/s²",
      "6 m/s²",
      "12 m/s²"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "v=3(t−1)(t−3), so first rest occurs at t=1. Acceleration a=6t−12, hence a(1)=−6 m/s².",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-024",
    "section": "Physics",
    "topic": "Projectile Motion",
    "difficulty": "hard",
    "question": "A projectile is launched at 20 m/s at 30° from a platform. At the top of its trajectory, its kinetic energy is what fraction of its launch kinetic energy?",
    "options": [
      "3/4",
      "1/4",
      "1/2",
      "√3/2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At the top only horizontal speed remains: v=u cos30°. Since K∝v², K_top/K_0=cos²30°=3/4.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-025",
    "section": "Physics",
    "topic": "Relative Motion",
    "difficulty": "hard",
    "question": "A boat can move at 10 m/s in still water. A river flows east at 6 m/s. To travel due north relative to the bank, what northward speed will the boat have?",
    "options": [
      "8 m/s",
      "4 m/s",
      "6 m/s",
      "10 m/s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The boat must aim with a 6 m/s west component to cancel the current. Its north component is √(10²−6²)=8 m/s.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-026",
    "section": "Physics",
    "topic": "Laws of Motion",
    "difficulty": "hard",
    "question": "Blocks of 3 kg and 5 kg remain in contact on a rough horizontal table. Their coefficients of kinetic friction are 0.20 and 0.10 respectively. A 31 N horizontal force pushes the 3 kg block to the right. Taking g=10 m s^-2, what is the contact force between the blocks?",
    "options": [
      "25/2 N",
      "15 N",
      "35/2 N",
      "20 N"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Friction forces are 0.20·3·10=6 N and 0.10·5·10=5 N. The system acceleration is (31-11)/8=2.5 m s^-2. For the 5 kg block, N-5=5(2.5)=12.5, so N=17.5=35/2 N.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-027",
    "section": "Physics",
    "topic": "Friction",
    "difficulty": "hard",
    "question": "A 5 kg block on a horizontal floor has μs=0.4 and μk=0.3. With g=10 m/s², a 25 N horizontal pull is applied. What is the block’s acceleration after motion begins?",
    "options": [
      "0",
      "1 m/s²",
      "5 m/s²",
      "2 m/s²"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Maximum static friction=20 N, so motion begins. Kinetic friction=15 N, net force=10 N, giving a=10/5=2 m/s².",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-028",
    "section": "Physics",
    "topic": "Work Energy and Power",
    "difficulty": "hard",
    "question": "A 1.5 kg object is accelerated from 2 m/s to 6 m/s while 6 J of energy is lost to friction. How much work does the applied force do?",
    "options": [
      "18 J",
      "24 J",
      "30 J",
      "36 J"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "ΔK=½(1.5)(36−4)=24 J. Applied work must supply ΔK plus 6 J lost to friction, so 30 J.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-029",
    "section": "Physics",
    "topic": "Work Energy and Power",
    "difficulty": "hard",
    "question": "A pump lifts 200 kg of water per minute through 12 m. Taking g=10 m/s² and 80% efficiency, what input power is required?",
    "options": [
      "320 W",
      "400 W",
      "500 W",
      "600 W"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Useful power=(200×10×12)/60=400 W. Input=400/0.8=500 W.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-030",
    "section": "Physics",
    "topic": "Collisions",
    "difficulty": "hard",
    "question": "A 2 kg cart at 5 m/s collides and sticks to a 3 kg cart moving in the same direction at 1 m/s. How much kinetic energy is lost?",
    "options": [
      "4.8 J",
      "12 J",
      "16 J",
      "9.6 J"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Final speed=(10+3)/5=2.6 m/s. Initial KE=25+1.5=26.5 J; final KE=½·5·2.6²=16.9 J; loss=9.6 J.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-031",
    "section": "Physics",
    "topic": "Centre of Mass",
    "difficulty": "hard",
    "question": "Masses 1 kg, 2 kg and 3 kg are at x=−4 m, 1 m and 6 m. What is x-coordinate of the centre of mass?",
    "options": [
      "2 m",
      "3 m",
      "10/3 m",
      "8/3 m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "x_cm=[1(−4)+2(1)+3(6)]/6=16/6=8/3 m.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-032",
    "section": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "hard",
    "question": "A solid cylinder and a ring roll without slipping down the same incline from rest. Which reaches the bottom first, neglecting losses?",
    "options": [
      "The solid cylinder",
      "The ring",
      "They arrive together",
      "The result depends only on mass"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For rolling, a=g sinθ/[1+I/(MR²)]. The cylinder has I/(MR²)=1/2 versus 1 for the ring, so the cylinder accelerates more.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-033",
    "section": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "hard",
    "question": "A wheel with moment of inertia 0.50 kg·m² speeds from 4 to 10 rad/s under a constant 3 N·m torque. How long does this take?",
    "options": [
      "1 s",
      "0.5 s",
      "2 s",
      "3 s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "α=τ/I=6 rad/s². Time=(10−4)/6=1 s.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-034",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "hard",
    "question": "A planet has the same density as Earth but twice Earth’s radius. Ignoring rotation, its surface gravitational acceleration is:",
    "options": [
      "g/2",
      "2g",
      "g",
      "4g"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For constant density, M∝R³, so g=GM/R²∝R. Doubling radius doubles surface g.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-physics-035",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "hard",
    "question": "Two circular satellite orbits have radii R and 9R. What is the ratio of orbital speeds v_R/v_9R?",
    "options": [
      "1/3",
      "9",
      "3",
      "27"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Circular orbital speed v=√(GM/r), so v_R/v_9R=√9=3.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-001",
    "section": "Chemistry",
    "topic": "Ionic Equilibrium",
    "difficulty": "hard",
    "question": "A 0.040 M solution of NaA, the sodium salt of a weak monoprotic acid HA, is mixed with an equal volume of water at 25°C. If Ka(HA)=4.0×10^-5 and Kw=1.0×10^-14, what is the approximate pH after dilution?",
    "options": [
      "7.65",
      "8.00",
      "8.35",
      "8.70"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "After equal-volume dilution, [A-]=0.020 M. Kb=Kw/Ka=2.5×10^-10, so [OH-]≈sqrt(KbC)=sqrt(5.0×10^-12)=2.24×10^-6 M. Thus pOH≈5.65 and pH≈8.35.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-002",
    "section": "Chemistry",
    "topic": "Solubility Equilibrium",
    "difficulty": "hard",
    "question": "For MX₂, Ksp=4.0×10⁻¹². In pure water its molar solubility s satisfies Ksp=4s³. What is s?",
    "options": [
      "1.0×10⁻⁴ M",
      "5.0×10⁻⁵ M",
      "2.0×10⁻⁴ M",
      "1.0×10⁻³ M"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "4s³=4×10⁻¹² gives s³=10⁻¹² and s=10⁻⁴ M.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-003",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "hard",
    "question": "A galvanic reaction transfers 2 electrons and has E°cell=0.80 V. If the reaction quotient Q rises above 1 at 298 K, compared with E°cell the actual cell potential E will be:",
    "options": [
      "greater than 0.80 V",
      "less than 0.80 V",
      "exactly 0.80 V for all Q",
      "zero for any Q>1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The Nernst equation E=E°−(0.0592/n)logQ. For Q>1, logQ>0, so E<E°.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-004",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "hard",
    "question": "A current of 2.0 A passes through molten AgCl for 965 s. Taking F=96500 C mol⁻¹, how many moles of Ag are deposited?",
    "options": [
      "0.010 mol",
      "0.040 mol",
      "0.020 mol",
      "0.200 mol"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Charge=2×965=1930 C=0.020F. Since Ag⁺ requires one electron per Ag, 0.020 mol is deposited.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-005",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "hard",
    "question": "A first-order reaction leaves 40% reactant after time t. What fraction remains after an additional equal time t?",
    "options": [
      "0.20",
      "0.16",
      "0.24",
      "0.32"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For first-order decay, the same multiplicative fraction remains over equal intervals. After another t, fraction=(0.40)²=0.16.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-006",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "hard",
    "question": "A reaction rate law is r=k[A][B]². If [A] is doubled while [B] is halved, the rate becomes what fraction of its original value?",
    "options": [
      "1/4",
      "1",
      "1/2",
      "2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Rate factor=2×(1/2)²=1/2.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-007",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "hard",
    "question": "A mixture contains 1 mol ethanol and 3 mol water. Assuming ideal mixing, the mole fraction ratio x_water/x_ethanol is:",
    "options": [
      "1/3",
      "2",
      "4",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Mole fractions are 3/4 and 1/4, so their ratio is 3.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-008",
    "section": "Chemistry",
    "topic": "Colligative Properties",
    "difficulty": "hard",
    "question": "Two nonelectrolyte aqueous solutions use the same solvent and have molalities 0.20 m and 0.50 m. What is the ratio of their freezing-point depressions ΔT₂/ΔT₁?",
    "options": [
      "2.5",
      "0.4",
      "1.5",
      "5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For the same solvent and i=1, ΔTf=Kfm, so the ratio is 0.50/0.20=2.5.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-009",
    "section": "Chemistry",
    "topic": "Solid State",
    "difficulty": "hard",
    "question": "A cubic crystal has 8 corner atoms and one atom at the body centre. If each atom has mass m, what mass belongs effectively to one unit cell?",
    "options": [
      "m",
      "4m",
      "9m",
      "2m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Corner contribution is 8×m/8=m; the body-centred atom contributes m, total 2m.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-010",
    "section": "Chemistry",
    "topic": "Coordination Chemistry",
    "difficulty": "hard",
    "question": "A complex [Co(NH₃)₅Cl]Cl₂ is dissolved completely. Ignoring secondary reactions, how many moles of chloride ions are immediately outside the coordination sphere per mole of complex?",
    "options": [
      "1",
      "3",
      "2",
      "5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The formula has two counter-ion Cl⁻ outside the bracket; the bracketed chloride is coordinated and not initially a free counter-ion.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-011",
    "section": "Chemistry",
    "topic": "Coordination Chemistry",
    "difficulty": "hard",
    "question": "For [Fe(CN)₆]⁴⁻, suppose each CN⁻ contributes −1 charge. What oxidation state must Fe have so the complex charge is −4?",
    "options": [
      "0",
      "+2",
      "+3",
      "+6"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "x−6=−4, so x=+2. The construction explicitly balances the ligand and complex charges.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-012",
    "section": "Chemistry",
    "topic": "d- and f-Block Elements",
    "difficulty": "hard",
    "question": "A transition-metal ion is colourless in one oxidation state with a d⁰ configuration but coloured after one-electron reduction to d¹. Which explanation best fits the change?",
    "options": [
      "Reduction eliminates all orbital splitting.",
      "The d⁰ ion has more unpaired d electrons.",
      "The d¹ ion can undergo ligand-field d–d excitation whereas d⁰ cannot.",
      "Colour must come from nuclear emission."
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A d⁰ ion has no d electron for a d–d transition; adding one d electron can enable transitions between split d levels.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-013",
    "section": "Chemistry",
    "topic": "Metallurgy",
    "difficulty": "hard",
    "question": "In a flotation trial, sulphide particles attach poorly to bubbles until a collector is added. Which surface change is the collector intended to produce?",
    "options": [
      "Complete dissolution of the mineral",
      "Greater hydrophobicity of selected mineral particles",
      "Conversion of gangue into metal",
      "Strong magnetic ordering of all particles"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Collectors adsorb selectively and make target mineral surfaces water-repellent, improving bubble attachment.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-014",
    "section": "Chemistry",
    "topic": "Organic Nomenclature",
    "difficulty": "hard",
    "question": "A four-carbon chain contains both a double bond and an alcohol. For CH₂=CH–CH(OH)–CH₃, numbering gives the alcohol priority. What is the IUPAC name?",
    "options": [
      "but-1-en-3-ol",
      "but-2-en-1-ol",
      "but-3-en-2-ol",
      "but-3-en-1-ol"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Number from the end nearer OH: OH at C2 and double bond between C3–C4, giving but-3-en-2-ol.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-015",
    "section": "Chemistry",
    "topic": "Isomerism",
    "difficulty": "hard",
    "question": "A carbon atom is attached to H, OH, CH₃ and CH₂CH₃. Which statement follows?",
    "options": [
      "It is a stereogenic centre because all four substituents differ.",
      "It cannot show optical isomerism because it contains H.",
      "It has two identical carbon substituents.",
      "It must be trigonal planar."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A tetrahedral carbon with four different groups is chiral/stereogenic and can give enantiomers.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-016",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "hard",
    "question": "A hydrocarbon consumes exactly 2 mol H₂ per mole on complete catalytic hydrogenation and yields butane without carbon–carbon bond cleavage. Which starting formula is consistent?",
    "options": [
      "C₄H₈",
      "C₄H₆",
      "C₄H₁₀",
      "C₄H₁₂"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Adding 2H₂ contributes four H atoms, so C₄H₆ becomes C₄H₁₀. This corresponds to two degrees of unsaturation removed by hydrogenation.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-017",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "hard",
    "question": "Reductive ozonolysis of an alkene gives only acetone as the carbonyl product. Which symmetric alkene fits?",
    "options": [
      "2,3-dimethylbut-2-ene",
      "but-2-ene",
      "propene",
      "2-methylpropene"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Cleaving (CH₃)₂C=C(CH₃)₂ produces two identical acetone molecules.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-018",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "hard",
    "question": "An alkene decolourizes cold dilute alkaline KMnO₄ and forms a vicinal diol without carbon-skeleton cleavage. What type of transformation occurred?",
    "options": [
      "Oxidative addition of two hydroxyl groups across C=C",
      "Substitution of H by Cl",
      "Reduction of C=C to C–C",
      "Elimination of water"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Under mild Baeyer-test conditions, permanganate adds OH to both alkene carbons, giving a vicinal diol.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-019",
    "section": "Chemistry",
    "topic": "Aromatic Compounds",
    "difficulty": "hard",
    "question": "In two separate nitrations under identical conditions, toluene reacts faster than benzene. Which intermediate is preferentially stabilized by the methyl substituent?",
    "options": [
      "A free methyl anion",
      "A nonaromatic benzene dianion",
      "The nitrate ion only",
      "The arenium (σ) complex formed during electrophilic substitution"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The methyl group donates electron density and stabilizes the positively charged σ-complex, lowering the activation barrier.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-020",
    "section": "Chemistry",
    "topic": "Haloalkanes",
    "difficulty": "hard",
    "question": "A tertiary chloride and a primary chloride are placed separately in the same polar protic solvent with a weak nucleophile. Which observation most supports an SN1 pathway?",
    "options": [
      "The primary chloride reacts faster by forming a primary carbocation.",
      "The tertiary chloride reacts much faster because it forms a more stable carbocation.",
      "Both react at exactly the same rate independent of structure.",
      "Neither can ionize in a polar solvent."
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "SN1 rate depends strongly on carbocation stability; tertiary substrates ionize much more readily than primary ones.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-021",
    "section": "Chemistry",
    "topic": "Alcohols",
    "difficulty": "hard",
    "question": "Dehydration of 2-methylbutan-2-ol can give more than one alkene. Which product is favoured by Zaitsev orientation?",
    "options": [
      "2-methylbut-1-ene",
      "but-1-ene",
      "2-methylbut-2-ene",
      "2-methylpropene"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Elimination favouring the more substituted alkene gives 2-methylbut-2-ene as the major product.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-022",
    "section": "Chemistry",
    "topic": "Phenols",
    "difficulty": "hard",
    "question": "Equal moles of phenol and cyclohexanol are treated separately with aqueous NaOH. Phenol reacts appreciably while cyclohexanol does not. Which structural effect best accounts for the difference?",
    "options": [
      "Resonance stabilization of phenoxide",
      "Resonance destabilization of phenoxide",
      "Aromaticity of cyclohexanol",
      "Ionic bonding in neutral phenol"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Phenoxide delocalizes negative charge over the aromatic ring, stabilizing the conjugate base and increasing acidity relative to ordinary alcohols.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-023",
    "section": "Chemistry",
    "topic": "Ethers",
    "difficulty": "hard",
    "question": "When anisole is heated with excess HI, iodide attacks the methyl group rather than the aromatic carbon. What mechanistic constraint explains this selectivity?",
    "options": [
      "SN2 attack is feasible at methyl carbon but not at the sp² aryl carbon.",
      "The aryl carbon is more electrophilic because of aromaticity.",
      "Iodide cannot attack any saturated carbon.",
      "The C–O bond to methyl has partial triple-bond character."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Backside SN2 attack is accessible at the methyl carbon, whereas the aryl sp² carbon does not undergo ordinary SN2 displacement.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-024",
    "section": "Chemistry",
    "topic": "Aldehydes and Ketones",
    "difficulty": "hard",
    "question": "An unknown C₃H₆O compound gives a positive Tollens test and is oxidized to propanoic acid. Which compound is it?",
    "options": [
      "propanone",
      "propan-2-ol",
      "propanal",
      "methoxyethane"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "An aldehyde gives Tollens test and oxidizes to the corresponding acid; propanal gives propanoic acid.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-025",
    "section": "Chemistry",
    "topic": "Carboxylic Acids",
    "difficulty": "hard",
    "question": "Three para-substituted benzoic acids carry NO₂, H, and CH₃. Which order of acidity is expected?",
    "options": [
      "p-CH₃ > H > p-NO₂",
      "H > p-NO₂ > p-CH₃",
      "p-NO₂ > H > p-CH₃",
      "p-NO₂ > p-CH₃ > H"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "NO₂ withdraws electron density and stabilizes benzoate; CH₃ donates electron density and destabilizes it. Thus nitro is most acidic and methyl least.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-026",
    "section": "Chemistry",
    "topic": "Amines",
    "difficulty": "hard",
    "question": "Aniline and ethylamine are compared in water. Which change would make aniline’s nitrogen lone pair less available for protonation?",
    "options": [
      "Breaking the C–N bond homolytically",
      "Delocalization of the lone pair into the benzene ring",
      "Replacing H₂O by a noble gas without changing molecule",
      "Removing all π orbitals from the ring"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Resonance delocalization shares the lone pair with the aromatic π system, reducing its basic availability.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-027",
    "section": "Chemistry",
    "topic": "Diazonium Salts",
    "difficulty": "hard",
    "question": "A synthetic route converts aniline to benzonitrile via a diazonium intermediate. After diazotization, which reagent pair performs the CN substitution?",
    "options": [
      "CuCN",
      "NaCl only",
      "H₂/Pd",
      "KMnO₄/H⁺"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "CuCN carries out a Sandmeyer-type replacement of the diazonium group by CN.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-028",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "hard",
    "question": "A dipeptide is hydrolyzed completely into two amino acids. Which bond is directly cleaved by adding water during this process?",
    "options": [
      "A C=C bond in an aromatic ring",
      "Every C–H bond",
      "A phosphate ester bond",
      "The peptide amide C–N bond"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Peptide hydrolysis reverses condensation at the amide linkage joining the amino-acid residues.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-029",
    "section": "Chemistry",
    "topic": "Polymers",
    "difficulty": "hard",
    "question": "A polymerization uses equimolar adipic acid and hexamethylenediamine and eliminates small molecules during chain growth. The product class is best described as:",
    "options": [
      "an addition polyalkene",
      "a polysaccharide",
      "a condensation polyamide",
      "a silicone formed from siloxanes"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A diacid and diamine form amide links with elimination, producing nylon-6,6, a condensation polyamide.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-030",
    "section": "Chemistry",
    "topic": "Chemistry in Everyday Life",
    "difficulty": "hard",
    "question": "An antacid tablet contains Mg(OH)₂. Which net chemical role explains relief from excess gastric HCl?",
    "options": [
      "It generates extra HCl.",
      "It oxidizes chloride to chlorine.",
      "It catalyzes protein hydrolysis without changing acidity.",
      "It consumes H⁺ by acid–base neutralization."
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Hydroxide neutralizes hydrogen ions, reducing gastric acidity.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-031",
    "section": "Chemistry",
    "topic": "Environmental Chemistry",
    "difficulty": "hard",
    "question": "A sunny urban air sample contains NOx and volatile organic compounds. Ozone rises during the afternoon even though no ozone was emitted directly. Which description fits?",
    "options": [
      "Primary emission of ozone from fuel tanks",
      "Secondary photochemical pollutant formation",
      "Neutralization by limestone dust",
      "Radioactive production of ozone"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Sunlight drives NOx/VOC chemistry that produces ozone as a secondary pollutant.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-032",
    "section": "Chemistry",
    "topic": "Surface Chemistry",
    "difficulty": "hard",
    "question": "A catalyst lowers activation energy from 80 to 55 kJ mol⁻¹ but does not alter reactant or product energies. Which statement about ΔH and equilibrium is correct?",
    "options": [
      "ΔH becomes 25 kJ mol⁻¹ smaller.",
      "The catalyst forces equilibrium entirely to products.",
      "ΔH and the equilibrium constant at a fixed temperature are unchanged.",
      "Only the forward activation energy changes while reverse remains fixed."
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A catalyst changes kinetics by lowering barriers for both directions, but does not change state-function ΔH or the thermodynamic equilibrium constant.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-033",
    "section": "Chemistry",
    "topic": "Colloids",
    "difficulty": "hard",
    "question": "A laser beam becomes visible as a bright path through a colloidal sol but not through a true molecular solution of the same colour. What causes the difference?",
    "options": [
      "Complete reflection at the container wall",
      "Fluorescence from every solvent molecule",
      "Absence of any light in the true solution",
      "Scattering by dispersed colloidal particles"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Colloidal particles scatter the beam (Tyndall effect), whereas molecular-scale solute particles generally do not scatter it visibly.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-034",
    "section": "Chemistry",
    "topic": "Redox Reactions",
    "difficulty": "hard",
    "question": "In Zn(s)+Cu²⁺(aq)→Zn²⁺(aq)+Cu(s), a student tracks electron flow. Which species accepts electrons and therefore acts as the oxidizing agent?",
    "options": [
      "Zn",
      "Cu²⁺",
      "Zn²⁺",
      "Cu"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Cu²⁺+2e⁻→Cu is reduction. The electron acceptor is the oxidizing agent.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-chemistry-035",
    "section": "Chemistry",
    "topic": "p-Block Elements",
    "difficulty": "hard",
    "question": "NH₃ and PH₃ have similar shapes, but NH₃ boils much higher. Which intermolecular interaction present strongly in NH₃ accounts for the anomaly?",
    "options": [
      "Metallic bonding",
      "Ion–ion attraction in neutral gas",
      "Hydrogen bonding",
      "A stronger London force caused by phosphorus being lighter"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "N–H bonds with electronegative N and a lone pair allow substantial intermolecular hydrogen bonding; PH₃ lacks comparable hydrogen bonding.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-001",
    "section": "Mathematics",
    "topic": "Relations",
    "difficulty": "medium",
    "question": "On A={1,2,3,4}, define aRb when a+b is odd and a<b. How many ordered pairs belong to R?",
    "options": [
      "2",
      "4",
      "3",
      "5"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The valid pairs are (1,2),(1,4),(2,3),(3,4), so |R|=4.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-002",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "Three fair coins are tossed. Given that at least one head appears, what is the probability that the number of heads is odd?",
    "options": [
      "3/7",
      "1/2",
      "5/7",
      "4/7"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Among the 7 non-all-tail outcomes, odd head count means exactly 1 head (3 outcomes) or 3 heads (1 outcome), so 4/7.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-003",
    "section": "Mathematics",
    "topic": "Circle",
    "difficulty": "medium",
    "question": "The circle x²+y²−6x+4y−3=0 is translated so that its centre moves to the origin. Which equation represents the translated circle?",
    "options": [
      "X²+Y²=4",
      "X²+Y²=8",
      "X²+Y²=16",
      "X²+Y²=25"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Completing squares gives (x−3)²+(y+2)²=16. With X=x−3 and Y=y+2, the equation is X²+Y²=16.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-004",
    "section": "Mathematics",
    "topic": "Conic Sections",
    "difficulty": "hard",
    "question": "For the parabola y²=12x, a focal chord has endpoints whose y-coordinates are 6 and k. Find k.",
    "options": [
      "-3",
      "3",
      "-6",
      "12"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For y²=4ax with a=3, points can be parameterized (at²,2at). A focal chord corresponds to t1 t2 = −1. Since 2at1=6, t1=1, hence t2=−1 and k=−6.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-005",
    "section": "Mathematics",
    "topic": "Conic Sections",
    "difficulty": "medium",
    "question": "An ellipse has semi-major axis 5 and eccentricity 3/5. What is the length of its latus rectum?",
    "options": [
      "16/5",
      "32/5",
      "24/5",
      "8"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Here b²=a²(1−e²)=25(1−9/25)=16. Latus rectum length is 2b²/a=32/5.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-006",
    "section": "Mathematics",
    "topic": "Differential Equations",
    "difficulty": "hard",
    "question": "A differentiable function satisfies dy/dx=(x+1)(y+2) and y(0)=−1. What is y at x=1?",
    "options": [
      "e−2",
      "e²−2",
      "e^(3/2)−2",
      "e^(1/2)−2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Separate: d(y+2)/(y+2)=(x+1)dx. Thus ln(y+2)=x²/2+x+C. From y(0)=−1, C=0. At x=1, y+2=e^(3/2).",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-007",
    "section": "Mathematics",
    "topic": "Definite Integrals",
    "difficulty": "medium",
    "question": "Evaluate ∫₀¹ x(1−x²)² dx.",
    "options": [
      "1/8",
      "1/4",
      "1/6",
      "1/3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Let u=1−x², du=−2x dx. The integral is 1/2∫₀¹u²du=1/6.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-008",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "If A=[[1,2],[3,5]], what is the (1,2) entry of A⁻¹?",
    "options": [
      "-2",
      "2",
      "-1",
      "3"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "det A=−1. A⁻¹=(−1)⁻¹[[5,−2],[−3,1]]=[[-5,2],[3,−1]], so the (1,2) entry is 2.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-009",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "hard",
    "question": "If z=(1+i)/(1−i), what is z^2026?",
    "options": [
      "1",
      "i",
      "-1",
      "-i"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "z=i. Since 2026≡2 mod 4, i^2026=i²=−1.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-010",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "medium",
    "question": "A geometric progression has second term 12 and fifth term 96. What is its third term, assuming a positive common ratio?",
    "options": [
      "18",
      "36",
      "24",
      "48"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "ar=12 and ar⁴=96, so r³=8 and r=2. The third term is ar²=24.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-011",
    "section": "Mathematics",
    "topic": "Sets",
    "difficulty": "medium",
    "question": "In a class of 50, 31 study Mathematics, 27 study Physics and 12 study both. How many study neither?",
    "options": [
      "2",
      "4",
      "6",
      "8"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "|M∪P|=31+27−12=46, so 50−46=4 study neither.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-012",
    "section": "Mathematics",
    "topic": "Functions",
    "difficulty": "hard",
    "question": "For every real x, a function satisfies f(x)+f(-x)=2x^2+6 and f(x)-f(-x)=4x. What is f(3)?",
    "options": [
      "18",
      "12",
      "15",
      "21"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Adding the two given equations gives 2f(x)=2x^2+4x+6, so f(x)=x^2+2x+3. Therefore f(3)=18.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-013",
    "section": "Mathematics",
    "topic": "Functions",
    "difficulty": "medium",
    "question": "A function f satisfies f(x+2)=3x+7 for all real x. What is f(5)?",
    "options": [
      "13",
      "18",
      "16",
      "22"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Set x+2=5, so x=3. Then f(5)=3(3)+7=16.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-014",
    "section": "Mathematics",
    "topic": "Complex Numbers",
    "difficulty": "medium",
    "question": "For z=3−4i, what is |z−conj(z)|?",
    "options": [
      "4",
      "8",
      "5",
      "6"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "z−conj(z)=−8i, whose modulus is 8.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-015",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "hard",
    "question": "For m>2, the two roots of x^2-(m+2)x+2m=0 differ by 3. What is m?",
    "options": [
      "5",
      "4",
      "6",
      "7"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The discriminant is (m+2)^2-8m=(m-2)^2. Since the root difference is sqrt(D)=3 and m>2, m-2=3, so m=5.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-016",
    "section": "Mathematics",
    "topic": "Quadratic Equations",
    "difficulty": "medium",
    "question": "For what value of m does x²−(m+1)x+m=0 have equal roots?",
    "options": [
      "0",
      "1",
      "2",
      "4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The discriminant is (m+1)²−4m=(m−1)², which is zero only for m=1.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-017",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "hard",
    "question": "The partial sums of a sequence are S_n=2n²−n. What is the 12th term?",
    "options": [
      "43",
      "45",
      "44",
      "46"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "a_n=S_n−S_{n−1}. Thus a_n=(2n²−n)−[2(n−1)²−(n−1)]=4n−3; a_12=45.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-018",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "medium",
    "question": "In an arithmetic progression, the 4th, 8th and 12th terms have sum 72, and the 12th term exceeds the 4th by 16. What is the first term?",
    "options": [
      "10",
      "8",
      "12",
      "14"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The symmetric sum is 3t8=72, so a+7d=24. Also t12−t4=8d=16, so d=2. Hence a=24−14=10.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-019",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "hard",
    "question": "A sequence begins a₁=2 and obeys a_{n+1}=a_n+n². What is a₅?",
    "options": [
      "22",
      "32",
      "26",
      "36"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "a₂=3, a₃=7, a₄=16, and a₅=32 after adding 1²,2²,3²,4² successively.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-020",
    "section": "Mathematics",
    "topic": "Sequences and Series",
    "difficulty": "medium",
    "question": "The sum 3+6+12+... has 8 terms. What is the sum?",
    "options": [
      "381",
      "510",
      "768",
      "765"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "This is a GP with a=3,r=2. S₈=3(2⁸−1)=3×255=765.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-021",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "medium",
    "question": "What is the coefficient of x³ in (2+x)^5?",
    "options": [
      "40",
      "20",
      "80",
      "120"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The x³ coefficient is C(5,3)2²=10×4=40.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-022",
    "section": "Mathematics",
    "topic": "Binomial Theorem",
    "difficulty": "hard",
    "question": "In the expansion of (1+x)^8(1−x)^3, what is the coefficient of x¹?",
    "options": [
      "3",
      "8",
      "11",
      "5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The x coefficient is 8 from the first factor plus −3 from the second factor, giving 5.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-023",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "hard",
    "question": "How many 5-digit numbers can be formed from digits 0,1,2,3,4,5 without repetition if the number is divisible by 5?",
    "options": [
      "180",
      "240",
      "216",
      "264"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Case last digit 0: first digit 5 choices, then 4·3·2 for middle places =120. Case last digit 5: first digit 4 choices (1–4), then 4·3·2=24 for middle =96. Total 216.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-024",
    "section": "Mathematics",
    "topic": "Permutations and Combinations",
    "difficulty": "medium",
    "question": "Seven students include two siblings. In how many linear arrangements are the siblings not adjacent?",
    "options": [
      "720",
      "2880",
      "4320",
      "3600"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Total 7!=5040. Adjacent arrangements treat siblings as one block: 6!×2=1440. Difference=3600.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-025",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "A fair die is rolled twice. Given that the second result exceeds the first, what is the probability their sum is 7?",
    "options": [
      "1/5",
      "1/6",
      "2/5",
      "1/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "There are 15 ordered outcomes with second>first. Sum 7 occurs for (1,6),(2,5),(3,4), three of them, so probability 3/15=1/5.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-026",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "A bag has 3 red, 4 blue and 5 green balls. One ball is drawn. What is the probability that it is not blue?",
    "options": [
      "1/3",
      "5/12",
      "7/12",
      "2/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "There are 12 balls, of which 8 are not blue. Probability=8/12=2/3.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-027",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "hard",
    "question": "Let A=[[0,1],[-2,3]]. If A^2=uA+vI, what is u-v?",
    "options": [
      "4",
      "5",
      "6",
      "7"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The characteristic polynomial is λ^2-3λ+2. Cayley-Hamilton gives A^2-3A+2I=0, so A^2=3A-2I. Thus u=3, v=-2, and u-v=5.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-028",
    "section": "Mathematics",
    "topic": "Matrices and Determinants",
    "difficulty": "medium",
    "question": "For A=[[2,1],[1,2]], what is det(A²)?",
    "options": [
      "3",
      "9",
      "6",
      "12"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "det(A)=4−1=3. Therefore det(A²)=det(A)²=9.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-029",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "A line through (2,−1) is perpendicular to 3x−4y+7=0. Which equation can represent it?",
    "options": [
      "3x−4y−10=0",
      "4x−3y−11=0",
      "3x+4y−2=0",
      "4x+3y−5=0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The given line has slope 3/4, so a perpendicular line has slope −4/3. Through (2,−1): 4x+3y−5=0.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-030",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "hard",
    "question": "Point P divides A(−2,5) and B(7,−1) internally in ratio 2:1 (AP:PB=2:1). What is P?",
    "options": [
      "(1,3)",
      "(3,1)",
      "(5,0)",
      "(4,1)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Section formula gives P=((1)(−2)+2(7), (1)(5)+2(−1))/3=(4,1).",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-031",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "medium",
    "question": "The area of the triangle with vertices (0,0),(4,1),(2,5) is:",
    "options": [
      "9",
      "7",
      "8",
      "10"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Area=1/2|4·5−1·2|=9.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-032",
    "section": "Mathematics",
    "topic": "Coordinate Geometry",
    "difficulty": "hard",
    "question": "A point P=(p,2) is equidistant from A=(-1,1) and B=(3,5). What is p?",
    "options": [
      "-2",
      "1/2",
      "3/2",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Equating squared distances gives (p+1)^2+1=(p-3)^2+9. Simplifying yields 8p=16, hence p=2.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-033",
    "section": "Mathematics",
    "topic": "Probability",
    "difficulty": "hard",
    "question": "A bag initially contains 3 red and 2 blue balls. One ball is drawn. If it is red, it is replaced and one blue ball is added; if it is blue, it is not replaced and one red ball is added. A second ball is then drawn. What is the probability that the two draws have different colours?",
    "options": [
      "31/50",
      "3/5",
      "16/25",
      "7/10"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "If the first ball is red (probability 3/5), the bag becomes 3 red and 3 blue, so the second is blue with probability 1/2, contributing 3/10. If the first is blue (probability 2/5), the bag becomes 4 red and 1 blue, so the second is red with probability 4/5, contributing 8/25. The total is 3/10+8/25=31/50.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-034",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "hard",
    "question": "Let p(x)=3x⁴-7x³+ax²+bx+2. It is known that p'(1)=-4 and ∫₀²p(x) dx=-2/15. What is a-b?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Since p'(x)=12x³-21x²+2ax+b, p'(1)=-4 gives 2a+b=5. Also ∫₀²p(x) dx = 96/5-28+8a/3+2b+4 = -24/5+8a/3+2b. Setting this equal to -2/15 gives 40a+30b=70, or 4a+3b=7. Solving with 2a+b=5 gives a=4 and b=-3, so a-b=7.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-035",
    "section": "Mathematics",
    "topic": "Vector Algebra",
    "difficulty": "medium",
    "question": "For a=(1,2,0), b=(0,1,3) and c=(2,−1,1), what is the scalar triple product a·(b×c)?",
    "options": [
      "8",
      "16",
      "12",
      "20"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "b×c=(4,6,−2). Dotting with a gives 1·4+2·6=16.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-036",
    "section": "Mathematics",
    "topic": "Three-Dimensional Geometry",
    "difficulty": "hard",
    "question": "The line (x−1)/2=(y+2)/(−1)=(z−3)/2 makes angle θ with the z-axis. What is cos θ?",
    "options": [
      "1/3",
      "√5/3",
      "2/3",
      "2/√5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Direction vector is (2,−1,2), of length 3. Its cosine with z-axis is 2/3.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-037",
    "section": "Mathematics",
    "topic": "Differentiation",
    "difficulty": "medium",
    "question": "If y=x^x for x>0, what is y′ at x=1?",
    "options": [
      "0",
      "e",
      "1",
      "2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "ln y=x ln x, so y′/y=ln x+1. At x=1, y=1 and y′=1.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-038",
    "section": "Mathematics",
    "topic": "Functions",
    "difficulty": "hard",
    "question": "Let f(x)=(3x-1)/(x+1), with x≠-1. If f(f(x))=3/2 and all expressions are defined, what is x?",
    "options": [
      "1/2",
      "1",
      "3/2",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Substitution gives f(f(x))=2-1/x (for the allowed x values). Setting 2-1/x=3/2 gives 1/x=1/2, so x=2, which is in the domain of both compositions.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-039",
    "section": "Mathematics",
    "topic": "Applications of Derivatives",
    "difficulty": "medium",
    "question": "A rectangle has perimeter 20. What side length makes its area maximum?",
    "options": [
      "4",
      "6",
      "5",
      "10"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Let sides be x and 10−x. Area x(10−x) is maximized at x=5, giving a square.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-mathematics-040",
    "section": "Mathematics",
    "topic": "Integral Calculus",
    "difficulty": "hard",
    "question": "If F(x)=∫₀ˣ (t²+1)/(t⁴+2t²+2) dt, what is F′(1)?",
    "options": [
      "2/5",
      "1/3",
      "1/2",
      "3/5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "By the Fundamental Theorem of Calculus, F′(x) equals the integrand. At x=1 it is 2/(1+2+2)=2/5.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-english-aptitude-001",
    "section": "English & Aptitude",
    "topic": "Grammar",
    "difficulty": "medium",
    "question": "Choose the sentence with correct subject–verb agreement.",
    "options": [
      "Neither the manager nor the assistants are available.",
      "Neither the manager nor the assistants is available.",
      "Neither the manager or the assistants are available.",
      "Neither manager nor the assistants is available."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "With neither...nor, the verb usually agrees with the nearer subject; “assistants” is plural, so “are” is correct.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-english-aptitude-002",
    "section": "English & Aptitude",
    "topic": "Calendar",
    "difficulty": "hard",
    "question": "A workshop begins on a Wednesday and lasts 45 consecutive days, counting the starting day as day 1. On which weekday does day 45 fall?",
    "options": [
      "Thursday",
      "Saturday",
      "Sunday",
      "Friday"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Day 45 is 44 days after Wednesday. Since 44≡2 (mod 7), it falls on Friday.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-english-aptitude-003",
    "section": "English & Aptitude",
    "topic": "Grammar",
    "difficulty": "medium",
    "question": "Choose the sentence with the modifier placed most clearly.",
    "options": [
      "After reviewing the data, the chart was revised by Mira.",
      "After reviewing the data, Mira revised the chart.",
      "Mira revised, after reviewing, the chart data.",
      "The data, after reviewing, made Mira revise the chart."
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The opening participial phrase logically modifies Mira, the person who reviewed the data.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-english-aptitude-004",
    "section": "English & Aptitude",
    "topic": "Data Interpretation",
    "difficulty": "hard",
    "question": "A lab records outputs 18, 24, 30 and 48 units on four runs. If the largest value is reduced by 25%, what is the new mean?",
    "options": [
      "27",
      "25.5",
      "28.5",
      "30"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Reducing 48 by 25% gives 36. New total=18+24+30+36=108, so mean=27.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-english-aptitude-005",
    "section": "English & Aptitude",
    "topic": "Reading Comprehension",
    "difficulty": "medium",
    "question": "A note states: “The new sensor costs more initially, but it draws 40% less power and needs replacement half as often.” Which conclusion is supported?",
    "options": [
      "Higher purchase cost may be offset by lower operating and replacement costs.",
      "The new sensor is always cheaper on day one.",
      "The old sensor uses 40% less power.",
      "Replacement frequency is unchanged."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The note explicitly contrasts higher initial cost with lower power use and less frequent replacement, supporting a possible lifecycle-cost tradeoff.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-english-aptitude-006",
    "section": "English & Aptitude",
    "topic": "Arithmetic",
    "difficulty": "hard",
    "question": "A container is 3/5 full. After 12 L is added, it is 4/5 full. What is its capacity?",
    "options": [
      "48 L",
      "72 L",
      "80 L",
      "60 L"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The added 12 L is 1/5 of capacity, so capacity=60 L.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-english-aptitude-007",
    "section": "English & Aptitude",
    "topic": "Vocabulary",
    "difficulty": "medium",
    "question": "In the sentence “The evidence was fragmentary, so the team avoided a definitive claim,” fragmentary most nearly means:",
    "options": [
      "contradictory",
      "incomplete",
      "fabricated",
      "irrelevant"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Fragmentary evidence exists only in pieces and is incomplete.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-english-aptitude-008",
    "section": "English & Aptitude",
    "topic": "Logical Reasoning",
    "difficulty": "hard",
    "question": "Four devices P,Q,R,S are tested once each. P is before R; Q is immediately after P; S is not first. Which order is possible?",
    "options": [
      "Q-P-R-S",
      "S-P-R-Q",
      "P-Q-S-R",
      "P-S-Q-R"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "P-Q must be adjacent with P first, and P must precede R. Only P-Q-S-R satisfies all conditions.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-english-aptitude-009",
    "section": "English & Aptitude",
    "topic": "Vocabulary",
    "difficulty": "medium",
    "question": "Choose the word that best completes: “The committee sought a ____ explanation that accounted for all three observations without extra assumptions.”",
    "options": [
      "ornamental",
      "ambiguous",
      "sporadic",
      "parsimonious"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A parsimonious explanation is economical and avoids unnecessary assumptions.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-english-aptitude-010",
    "section": "English & Aptitude",
    "topic": "Patterns",
    "difficulty": "hard",
    "question": "A code sequence is formed by repeatedly multiplying by 2 and then adding successive odd numbers 1,3,5,... Starting from 2, the next terms are 5,13,31. What follows?",
    "options": [
      "69",
      "63",
      "67",
      "71"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The next odd addend is 7, so 31×2+7=69.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-english-aptitude-011",
    "section": "English & Aptitude",
    "topic": "Grammar",
    "difficulty": "medium",
    "question": "A report draft reads: “The prototype failed however the backup unit worked.” Which revision most clearly separates the two independent clauses while keeping “however” as a conjunctive adverb?",
    "options": [
      "The prototype failed, however the backup unit worked.",
      "The prototype failed however; the backup unit worked.",
      "The prototype failed: however the backup unit worked.",
      "The prototype failed; however, the backup unit worked."
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A semicolon can join the independent clauses, and the conjunctive adverb “however” is followed by a comma.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-english-aptitude-012",
    "section": "English & Aptitude",
    "topic": "Ratios",
    "difficulty": "hard",
    "question": "Two alloys contain copper and zinc in ratios 3:2 and 5:3. Equal masses of the alloys are mixed. What is the copper:zinc ratio in the mixture?",
    "options": [
      "8:5",
      "4:3",
      "49:31",
      "31:49"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Copper fractions are 3/5 and 5/8. For equal masses, combined copper fraction=(3/5+5/8)/2=49/80, zinc=31/80, giving 49:31.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-english-aptitude-013",
    "section": "English & Aptitude",
    "topic": "Grammar",
    "difficulty": "medium",
    "question": "Choose the sentence in which the pronoun reference is unambiguous.",
    "options": [
      "When Lina called Priya, she was already at the station.",
      "When Lina called Priya, Lina was already at the station.",
      "Priya told Lina that she should hurry.",
      "After Lina met Priya, she left."
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Repeating “Lina” removes the ambiguity created by “she”.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-english-aptitude-014",
    "section": "English & Aptitude",
    "topic": "Speed and Time",
    "difficulty": "hard",
    "question": "A cyclist covers the first half of a route at 12 km/h and the second half at 18 km/h. What is the average speed for the whole route?",
    "options": [
      "15 km/h",
      "15.6 km/h",
      "16 km/h",
      "14.4 km/h"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For equal distances, average speed is the harmonic mean: 2ab/(a+b)=2·12·18/30=14.4 km/h.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-english-aptitude-015",
    "section": "English & Aptitude",
    "topic": "Grammar",
    "difficulty": "medium",
    "question": "Choose the sentence using “fewer” and “less” correctly.",
    "options": [
      "Less samples were rejected, and fewer material was wasted.",
      "Fewer samples were rejected, and fewer material was wasted.",
      "Fewer samples were rejected, and less material was wasted.",
      "Less samples were rejected, and less material were wasted."
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "“Fewer” modifies countable plural samples; “less” modifies uncountable material.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-english-aptitude-016",
    "section": "English & Aptitude",
    "topic": "Simple Interest",
    "difficulty": "hard",
    "question": "An amount grows from ₹8,000 to ₹9,440 in 3 years at simple interest. What annual rate was used?",
    "options": [
      "6%",
      "5%",
      "7%",
      "8%"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Interest=₹1,440. Rate=1440×100/(8000×3)=6%.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-english-aptitude-017",
    "section": "English & Aptitude",
    "topic": "Reading Comprehension",
    "difficulty": "hard",
    "question": "A memo says: “During the pilot, defect rates fell after inspection frequency doubled, but production volume also fell by 15%. The pilot alone cannot show which change caused the lower defect rate.” Which inference is strongest?",
    "options": [
      "Doubling inspections definitely caused the improvement.",
      "Lower production volume definitely had no effect.",
      "The defect rate did not actually fall.",
      "The pilot contains a confounding change that limits causal attribution."
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Two factors changed at once, so the pilot cannot isolate the causal contribution of either factor.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-english-aptitude-018",
    "section": "English & Aptitude",
    "topic": "Number Series",
    "difficulty": "hard",
    "question": "Find the next term: 4, 7, 13, 25, 49, __.",
    "options": [
      "97",
      "73",
      "81",
      "99"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Each term after the first is double the previous term minus 1: 4→7→13→25→49→97.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-english-aptitude-019",
    "section": "English & Aptitude",
    "topic": "Grammar",
    "difficulty": "medium",
    "question": "A report describes a missed opportunity in the past. Which sentence uses the appropriate past unreal conditional?",
    "options": [
      "If the calibration finished earlier, we would have started the trial on time.",
      "If the calibration had finished earlier, we would have started the trial on time.",
      "If the calibration had finished earlier, we will start the trial on time.",
      "If the calibration would finish earlier, we had started the trial on time."
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A past unreal condition uses “if + past perfect” with “would have + past participle”: “If ... had finished ..., we would have started ...”.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
  {
    "id": "srmjeee-2026-ug-mathematics-english-aptitude-020",
    "section": "English & Aptitude",
    "topic": "Direction Sense",
    "difficulty": "hard",
    "question": "A robot moves 4 m east, 3 m north, 4 m west, and then 1 m south. Where is it relative to its start?",
    "options": [
      "2 m south",
      "2 m north",
      "1 m north",
      "1 m south"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "East and west cancel. Net vertical displacement is 3−1=2 m north.",
    "source": {
      "kind": "original",
      "reference": "SRMJEEE 2026 official syllabus and examination pattern",
      "url": "https://webstor.srmist.edu.in/web_assets/downloads/2026/srmjeee-syllabus.pdf",
      "checkedOn": "2026-09-03"
    }
  },
];
