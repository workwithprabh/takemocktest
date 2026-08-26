import type { Question } from '../questions';

export const JEE_ADVANCED_PAPER_2_CHEMISTRY_1: Question[] = [
  {
    "id": "jee-advanced-p2-ch-001",
    "section": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "easy",
    "question": "For an ideal gas, which quantity depends only on temperature?",
    "options": [
      "Pressure",
      "Internal energy",
      "Volume",
      "Density"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For an ideal gas, internal energy is a function only of temperature. Pressure, volume and density also depend on the state constraints.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ch-002",
    "section": "Chemistry",
    "topic": "Chemical bonding",
    "difficulty": "medium",
    "question": "The species with the smallest bond angle is",
    "options": [
      "NH3",
      "CH4",
      "BF3",
      "H2O"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Approximate bond angles are CH4 109.5 degrees, NH3 107 degrees, H2O 104.5 degrees, BF3 120 degrees. Lone-pair repulsion is strongest in water because oxygen has two lone pairs, so H2O has the smallest angle.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ch-003",
    "section": "Chemistry",
    "topic": "Organic chemistry",
    "difficulty": "hard",
    "question": "A hydrocarbon A has molecular formula C4H8 and on ozonolysis gives methanal and propanone. A is treated with HBr in the presence of peroxide, the product is hydrolysed with aqueous KOH, and the alcohol obtained is oxidized with PCC. The final major organic product is",
    "options": [
      "Butan-2-one",
      "2-methylpropanal",
      "Butanal",
      "2-methylpropan-2-ol"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The ozonolysis products identify A as 2-methylpropene, CH2=C(CH3)2. Peroxide-mediated addition of HBr is anti-Markovnikov, giving 1-bromo-2-methylpropane. Aqueous KOH gives 2-methylpropan-1-ol, and PCC oxidizes this primary alcohol to 2-methylpropanal.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ch-004",
    "section": "Chemistry",
    "topic": "Coordination chemistry",
    "difficulty": "hard",
    "question": "Ignoring pairing-energy terms and writing CFSE only in units of \u0394o, which pair correctly gives (number of unpaired electrons, CFSE) for [Fe(CN)6]4- and [FeF6]4-, respectively?",
    "options": [
      "(0, -2.4\u0394o) and (4, -0.4\u0394o)",
      "(2, -1.6\u0394o) and (4, -0.4\u0394o)",
      "(0, -2.4\u0394o) and (0, -2.4\u0394o)",
      "(4, -0.4\u0394o) and (0, -2.4\u0394o)"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Fe is +2 in both complexes, hence d6. CN- is strong field, so low-spin octahedral d6 is t2g^6eg^0: zero unpaired electrons and CFSE=6(-0.4\u0394o)=-2.4\u0394o. F- is weak field, so high-spin d6 is t2g^4eg^2: four unpaired electrons and CFSE=4(-0.4)+2(0.6)=-0.4\u0394o.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ch-005",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "hard",
    "question": "A dilute solution contains a solute that dimerizes reversibly, 2A <=> A2. Relative to an equal analytical concentration of a nonassociating solute at the same temperature, which statements are true after partial dimerization?",
    "options": [
      "The van't Hoff factor is less than 1",
      "The osmotic pressure is reduced",
      "The magnitude of freezing-point depression is reduced",
      "The boiling-point elevation is increased"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Dimerization reduces the number of solute particles, so the van't Hoff factor i is below 1. Colligative properties proportional to particle count, including osmotic pressure, freezing-point depression magnitude and boiling-point elevation, are all reduced. Hence statements 1,2,3 are true and 4 is false.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ch-006",
    "section": "Chemistry",
    "topic": "Chemical kinetics",
    "difficulty": "hard",
    "question": "A first-order reaction is studied at two temperatures. At T1, [A] falls from 0.80 M to 0.20 M in 40 min. At T2, it falls from 0.80 M to 0.10 M in 30 min. Which statements are correct?",
    "options": [
      "The half-life at T1 is 20 min",
      "k(T2)=2k(T1)",
      "If T2>T1 and the same Arrhenius mechanism applies, the activation energy is positive",
      "After 10 min at T1 followed immediately by 10 min at T2, the fraction of A remaining is 1/4"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At T1 the concentration falls by a factor 4 in 40 min, i.e. two half-lives, so t1/2=20 min. At T2 it falls by a factor 8 in 30 min, i.e. three half-lives, so t1/2=10 min and k2=2k1. If T2>T1, the observed increase of k is consistent with positive activation energy in the Arrhenius equation. The sequential remaining fraction is 2^(-10/20)\u00d72^(-10/10)=2^-3/2=1/(2\u221a2), not 1/4.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ch-007",
    "section": "Chemistry",
    "topic": "Coordination chemistry",
    "difficulty": "hard",
    "question": "Consider X=[Co(NH3)5Br]SO4 and Y=[Co(NH3)5SO4]Br, with sulfate acting as a coordinated monodentate ligand in Y. Which statements are correct?",
    "options": [
      "X and Y are ionization isomers",
      "The oxidation state of cobalt is +3 in both X and Y",
      "In aqueous solution X can give an immediate sulfate precipitate with Ba2+, whereas Y can give an immediate bromide precipitate with Ag+",
      "X and Y are a cis-trans pair"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The compounds differ by interchange of an inner-sphere anion and a counter-ion, so they are ionization isomers. Charge balance gives Co(III) in both. X supplies free SO4^2- in solution and can precipitate BaSO4; Y supplies free Br- and can precipitate AgBr. They are not geometrical cis-trans isomers.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ch-008",
    "section": "Chemistry",
    "topic": "Organic chemistry",
    "difficulty": "hard",
    "question": "Which reagents can oxidize a primary alcohol under suitable conditions?",
    "options": [
      "PCC",
      "Acidified K2Cr2O7",
      "KMnO4",
      "NaBH4"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "PCC oxidizes primary alcohols to aldehydes. Acidified dichromate and permanganate oxidize primary alcohols, often further to acids. NaBH4 is a reducing agent, not an oxidant. Hence 1,2,3 are true.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ch-009",
    "section": "Chemistry",
    "topic": "Atomic structure",
    "difficulty": "hard",
    "question": "A hydrogen atom is excited to n=4 and then returns to lower levels through all allowed downward transitions among n=4,3,2,1. Which statements are correct?",
    "options": [
      "At most six distinct emission lines can occur",
      "Among these lines, the 4\u21923 transition has the longest wavelength",
      "Among these lines, the 4\u21921 transition has the shortest wavelength",
      "The frequency of the 4\u21922 photon is one-third of the frequency of the 2\u21921 photon"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Four levels can generate 4\u00d73/2=6 distinct downward transitions. Photon energy increases with the difference in 1/n^2, so 4\u21923 has the smallest energy and longest wavelength, whereas 4\u21921 has the largest energy and shortest wavelength. For 4\u21922, \u0394E=13.6(1/4-1/16)=2.55 eV; for 2\u21921, \u0394E=10.2 eV. The frequency ratio is therefore 1/4, not 1/3.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ch-010",
    "section": "Chemistry",
    "topic": "Mole concept",
    "difficulty": "medium",
    "question": "Complete combustion of 0.20 mol of C2H6 requires oxygen. The required amount of O2, in mol, multiplied by 10 is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "7",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "C2H6+(7/2)O2->2CO2+3H2O. Thus 0.20 mol ethane needs 0.70 mol O2. Multiplying by 10 gives 7.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ch-011",
    "section": "Chemistry",
    "topic": "Equilibrium",
    "difficulty": "hard",
    "question": "For the reaction A(g)<=>2B(g), Kc=2 at a certain temperature. Starting with 1.0 mol A in a 1.0 L vessel and no B, the equilibrium concentration of B, in mol L^-1, is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "1",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Let x mol L^-1 of A dissociate. At equilibrium [A]=1-x and [B]=2x. Therefore Kc=(2x)^2/(1-x). With Kc=2, 4x^2=2(1-x), or 2x^2+x-1=0. The physical root is x=1/2, hence [B]=2x=1.0 mol L^-1.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ch-012",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "hard",
    "question": "A 1.0 A current is passed through AgNO3 solution for 9650 s. Taking F=96500 C mol^-1, the amount of Ag deposited, in millimole, is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "100",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Charge=9650 C=0.10 mol electron. Ag+ requires one electron per Ag atom, so 0.10 mol=100 mmol Ag is deposited.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ch-013",
    "section": "Chemistry",
    "topic": "Chemical kinetics",
    "difficulty": "hard",
    "question": "A reactant A disappears by two independent first-order pathways with rate constants 0.02 min^-1 and 0.03 min^-1. Taking ln 2=0.70, the half-life of A in minute is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "14",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Parallel first-order pathways add: k_total=0.02+0.03=0.05 min^-1. Thus t_1/2=ln2/k_total=0.70/0.05=14 min.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ch-014",
    "section": "Chemistry",
    "topic": "Atomic structure",
    "difficulty": "hard",
    "question": "A hydrogen atom initially in n=2 absorbs a photon of exactly the energy required to reach n=5. It later emits a photon in the 5\u21923 transition. The ratio (wavelength of the emitted photon)/(wavelength of the absorbed photon) is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "2.95",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Photon wavelength is inversely proportional to the level-energy difference. For absorption 2\u21925, \u0394Eabs/13.6=(1/4-1/25)=21/100. For emission 5\u21923, \u0394Eem/13.6=(1/9-1/25)=16/225. Hence \u03bbem/\u03bbabs=\u0394Eabs/\u0394Eem=(21/100)/(16/225)=4725/1600=2.953125, which is 2.95 to two decimals.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ch-015",
    "section": "Chemistry",
    "topic": "States of matter",
    "difficulty": "medium",
    "question": "Shared Stem A: One mole of a monoatomic ideal gas initially has pressure P0, volume V0 and temperature T0, with P0V0=2400 J. It undergoes a quasistatic expansion along the straight-line path P=P0(2-V/V0) from V=V0 to V=1.5V0. No other process occurs. Find 100 times the ratio T_final/T0.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "75",
    "maxDecimalPlaces": 2,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "At V_final=1.5V0, the path gives P_final=0.5P0. For an ideal gas, T is proportional to PV, so T_final/T0=(0.5P0)(1.5V0)/(P0V0)=0.75. Therefore 100(T_final/T0)=75.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ch-016",
    "section": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "hard",
    "question": "Shared Stem A: One mole of a monoatomic ideal gas initially has pressure P0, volume V0 and temperature T0, with P0V0=2400 J. It undergoes a quasistatic expansion along the straight-line path P=P0(2-V/V0) from V=V0 to V=1.5V0. No other process occurs. Find the heat supplied to the gas during this expansion, in joule.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "0",
    "maxDecimalPlaces": 2,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The work done by the gas is integral P dV = P0V0 integral_1^1.5 (2-x) dx =0.375P0V0=900 J. Since T_final/T0=0.75, Delta U=(3/2)R(T_final-T0)=(3/2)(P0V0)(-0.25)=-900 J. Using Q=Delta U+W_by gives Q=0 J.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ch-017",
    "section": "Chemistry",
    "topic": "Ionic equilibrium",
    "difficulty": "medium",
    "question": "Shared Stem B: A solution is prepared by mixing 30.0 mmol of a weak monoprotic acid HA, with pKa=5.00, and 20.0 mmol of NaOH. Assume neutralization is complete before acid-base equilibrium is established, volume changes do not affect concentration ratios, and Henderson-Hasselbalch is applicable. Use log10 2=0.3010 and log10 1.5=0.1761. Find the pH of the resulting buffer.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "5.30",
    "maxDecimalPlaces": 2,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "NaOH consumes 20.0 mmol HA, leaving 10.0 mmol HA and forming 20.0 mmol A-. Thus [A-]/[HA]=2. pH=pKa+log2=5.00+0.3010=5.301, which is 5.30 to two decimal places.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ch-018",
    "section": "Chemistry",
    "topic": "Ionic equilibrium",
    "difficulty": "hard",
    "question": "Shared Stem B: A solution is prepared by mixing 30.0 mmol of a weak monoprotic acid HA, with pKa=5.00, and 20.0 mmol of NaOH. Assume neutralization is complete before acid-base equilibrium is established, volume changes do not affect concentration ratios, and Henderson-Hasselbalch is applicable. Use log10 2=0.3010 and log10 1.5=0.1761. After the buffer is formed, 5.0 mmol HCl is added, followed by 1.5 mmol Ca(OH)2. Find the final pH.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "5.18",
    "maxDecimalPlaces": 2,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Initially after neutralization, HA=10 and A-=20 mmol. Adding 5 mmol HCl converts A- to HA, giving HA=15 and A-=15. Then 1.5 mmol Ca(OH)2 supplies 3.0 mmol OH-, converting 3 mmol HA to A-, so HA=12 and A-=18 mmol. The ratio is 1.5, hence pH=5.00+log1.5=5.1761, or 5.18.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  }
];
