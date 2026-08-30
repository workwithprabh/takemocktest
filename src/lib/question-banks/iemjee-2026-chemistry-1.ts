import type { Question } from '../questions';

export const IEMJEE_2026_CHEMISTRY_1: Question[] = [
  {
    "id": "iemjee-2026-ch-001",
    "section": "Chemistry",
    "topic": "Some Basic Concepts in Chemistry",
    "difficulty": "medium",
    "question": "A gas mixture contains only CH4 and C2H6 and has an average molar mass of 22 g/mol. What is the mole fraction of C2H6 in the mixture?",
    "options": [
      "2/7",
      "4/7",
      "3/7",
      "5/7"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let the mole fraction of C2H6 be x. Then the average molar mass is 16(1-x)+30x=22. Thus 16+14x=22, so x=6/14=3/7.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-002",
    "section": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "medium",
    "question": "How many orbitals in the n = 4 shell have |m_l| = 1?",
    "options": [
      "6",
      "3",
      "4",
      "8"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For n=4, l can be 0,1,2,3. Orbitals with |m_l|=1 occur for l=1,2,3, and for each such l there are two values m_l=+1 and -1. Hence there are 3\u00d72=6 orbitals.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-003",
    "section": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "medium",
    "question": "A proton and an alpha particle have the same kinetic energy. Neglecting relativistic effects, what is the ratio of their de Broglie wavelengths \u03bb_p/\u03bb_\u03b1?",
    "options": [
      "1/2",
      "1",
      "4",
      "2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For the same kinetic energy, p = \u221a(2mK), so \u03bb=h/p \u221d 1/\u221am. An alpha particle has approximately four times the proton mass, hence \u03bb_p/\u03bb_\u03b1=\u221a(4)=2.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-004",
    "section": "Chemistry",
    "topic": "Chemical Bonding and Molecular Structure",
    "difficulty": "easy",
    "question": "Which description is correct for IF5 according to VSEPR theory?",
    "options": [
      "Trigonal bipyramidal with no lone pair",
      "Square pyramidal with one lone pair on iodine",
      "Square planar with two lone pairs on iodine",
      "Octahedral with no lone pair"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Iodine has six electron domains in IF5: five I-F bonds and one lone pair. The electron-pair geometry is octahedral, and one lone pair gives a square-pyramidal molecular shape.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-005",
    "section": "Chemistry",
    "topic": "Chemical Bonding and Molecular Structure",
    "difficulty": "medium",
    "question": "According to molecular orbital theory, which statement about O2+ is correct?",
    "options": [
      "Bond order 2 and diamagnetic",
      "Bond order 1.5 and paramagnetic",
      "Bond order 2.5 and paramagnetic",
      "Bond order 3 and diamagnetic"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Removing one electron from O2 removes it from an antibonding \u03c0* orbital. The bond order rises from 2 to 2.5, and one unpaired electron remains, so O2+ is paramagnetic.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-006",
    "section": "Chemistry",
    "topic": "Chemical Thermodynamics",
    "difficulty": "medium",
    "question": "For the ideal-gas reaction A(g) + 2B(g) -> C(g), \u0394H = -60.0 kJ mol^-1 at 300 K. What is \u0394U for the reaction? Use R = 8.314 J mol^-1 K^-1.",
    "options": [
      "-65.0 kJ mol^-1",
      "-55.0 kJ mol^-1",
      "-60.0 kJ mol^-1",
      "-50.0 kJ mol^-1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For ideal gases, \u0394H = \u0394U + \u0394n_gRT. Here \u0394n_g = 1-3 = -2. Therefore \u0394U = \u0394H - \u0394n_gRT = -60.0 kJ mol^-1 + 2(8.314)(300)/1000 \u2248 -55.0 kJ mol^-1.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-007",
    "section": "Chemistry",
    "topic": "Chemical Thermodynamics",
    "difficulty": "medium",
    "question": "For a reaction at 298 K, \u0394G\u00b0 = -5.70 kJ mol^-1. What is the approximate equilibrium constant K? Use R = 8.314 J mol^-1 K^-1 and ln 10 = 2.303.",
    "options": [
      "10",
      "0.10",
      "1",
      "100"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "\u0394G\u00b0 = -RT lnK, so lnK = 5700/(8.314\u00d7298) \u2248 2.30. Since ln10 = 2.303, K is approximately 10.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-008",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "medium",
    "question": "A solution is prepared by dissolving 9.2 g of glycerol (molar mass 92 g/mol) in 90 g of water. What is the mole fraction of glycerol?",
    "options": [
      "0.0098",
      "0.0500",
      "0.1000",
      "0.0196"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Glycerol moles = 9.2/92=0.10 and water moles = 90/18=5.00. Mole fraction of glycerol = 0.10/(5.10)=0.0196.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-009",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "medium",
    "question": "What is the osmotic pressure of a 0.050 M glucose solution at 300 K? Use R = 0.082 L atm mol^-1 K^-1.",
    "options": [
      "0.615 atm",
      "2.46 atm",
      "1.23 atm",
      "12.3 atm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a non-electrolyte, \u03c0=MRT = 0.050\u00d70.082\u00d7300 = 1.23 atm.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-010",
    "section": "Chemistry",
    "topic": "Equilibrium",
    "difficulty": "medium",
    "question": "For the equilibrium A(g) <=> 2B(g), a vessel initially contains A at 1.0 M and no B. At equilibrium 20% of A has dissociated. What is Kc?",
    "options": [
      "0.20",
      "0.05",
      "0.40",
      "0.80"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At equilibrium [A]=0.80 M and [B]=0.40 M. Therefore Kc=[B]^2/[A] = 0.16/0.80 = 0.20.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-011",
    "section": "Chemistry",
    "topic": "Ionic Equilibrium",
    "difficulty": "medium",
    "question": "A 0.10 M monoprotic weak acid has Ka = 1.0\u00d710^-5. Using the usual weak-ionization approximation, what is its pH?",
    "options": [
      "2.0",
      "3.0",
      "4.0",
      "5.0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "[H+] \u2248 \u221a(Ka C)=\u221a(10^-5\u00d710^-1)=\u221a10^-6=10^-3 M, so pH=3.0.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-012",
    "section": "Chemistry",
    "topic": "Ionic Equilibrium",
    "difficulty": "hard",
    "question": "100.0 mL of 0.20 M weak monoprotic acid HA (pKa = 5.00) is mixed with 50.0 mL of 0.10 M NaOH. Assuming volumes are additive, what is the resulting pH? Use log 3 = 0.477.",
    "options": [
      "5.48",
      "5.00",
      "3.52",
      "4.52"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Initially HA = 0.020 mol and OH- = 0.005 mol. Neutralization leaves 0.015 mol HA and forms 0.005 mol A-. The buffer ratio is [A-]/[HA]=1/3. Thus pH=pKa+log(1/3)=5.00-0.477=4.52.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-013",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "hard",
    "question": "The standard reduction potentials are E\u00b0(X2+/X) = -0.20 V and E\u00b0(Y+/Y) = +0.40 V. For the standard cell reaction X + 2Y+ -> X2+ + 2Y, what is \u0394G\u00b0? Use F = 96500 C mol^-1.",
    "options": [
      "-115.8 kJ mol^-1",
      "-57.9 kJ mol^-1",
      "+115.8 kJ mol^-1",
      "-193.0 kJ mol^-1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The cell potential is E\u00b0cell = 0.40 - (-0.20) = 0.60 V. The reaction transfers n=2 electrons. Therefore \u0394G\u00b0 = -nFE\u00b0 = -2(96500)(0.60) J mol^-1 = -115.8 kJ mol^-1.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-014",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "medium",
    "question": "A nickel coating is to be deposited uniformly over a total area of 200 cm\u00b2 to a thickness of 5.0 \u03bcm. The density of nickel is 8.9 g cm^-3. Using a 2.0 A current with 100% efficiency, how long will electroplating take? Assume Ni2+ + 2e- -> Ni, Ni = 58.7 g mol^-1 and F = 96500 C mol^-1.",
    "options": [
      "12.2 min",
      "48.8 min",
      "24.4 min",
      "97.6 min"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The thickness is 5.0\u00d710^-4 cm, so the deposited volume is 200\u00d75.0\u00d710^-4=0.100 cm\u00b3 and its mass is 0.890 g. Moles of Ni =0.890/58.7=0.01516, requiring 0.03032 mol e-, or about 2926 C. At 2.0 A, t=2926/2=1463 s=24.4 min.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-015",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "easy",
    "question": "For a reaction A + B -> products, the following initial-rate data are measured at one temperature:\nExp 1: [A]=0.15 M, [B]=0.20 M, rate=2.7\u00d710^-4 M s^-1\nExp 2: [A]=0.30 M, [B]=0.20 M, rate=1.08\u00d710^-3 M s^-1\nExp 3: [A]=0.30 M, [B]=0.60 M, rate=1.08\u00d710^-3 M s^-1\nWhat is the overall order of the reaction?",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Comparing experiments 1 and 2, doubling [A] makes the rate four times as large, so the order in A is 2. Comparing experiments 2 and 3, tripling [B] leaves the rate unchanged, so the order in B is 0. Overall order = 2+0=2.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-016",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "hard",
    "question": "A reaction obeys -d[A]/dt = k[A]^2. Starting from [A]0 = 0.40 M, the concentration falls to 0.25 M in 3.0 min. How long from the start will it take for [A] to reach 0.10 M?",
    "options": [
      "6 min",
      "9 min",
      "12 min",
      "15 min"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a second-order reaction, 1/[A] - 1/[A]0 = kt. From the first data, k=(1/0.25-1/0.40)/3=(4-2.5)/3=0.50 M^-1 min^-1. For [A]=0.10 M, t=(10-2.5)/0.50=15 min.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-017",
    "section": "Chemistry",
    "topic": "Classification of Elements and Periodicity",
    "difficulty": "easy",
    "question": "Which is the correct order of ionic radii for the isoelectronic ions Na+, Mg2+ and Al3+?",
    "options": [
      "Al3+ > Mg2+ > Na+",
      "Mg2+ > Na+ > Al3+",
      "Na+ > Mg2+ > Al3+",
      "Na+ > Al3+ > Mg2+"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "All three ions have 10 electrons. Within an isoelectronic series, radius decreases as nuclear charge increases. Therefore Na+ is largest and Al3+ is smallest.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-018",
    "section": "Chemistry",
    "topic": "p-Block Elements",
    "difficulty": "medium",
    "question": "Which molecular shape is expected for ClF3?",
    "options": [
      "T-shaped",
      "Trigonal planar",
      "Tetrahedral",
      "Square planar"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "ClF3 has five electron domains around chlorine: three bonding pairs and two lone pairs. In a trigonal-bipyramidal electron arrangement the two lone pairs occupy equatorial sites, leaving a T-shaped molecule.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-019",
    "section": "Chemistry",
    "topic": "d- and f-Block Elements",
    "difficulty": "medium",
    "question": "In acidic solution, one mole of MnO4- is reduced to Mn2+. How many moles of Fe2+ can it oxidize to Fe3+?",
    "options": [
      "1",
      "5",
      "3",
      "8"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The balanced redox relation is MnO4- + 8H+ + 5Fe2+ -> Mn2+ + 4H2O + 5Fe3+. Hence one mole of permanganate oxidizes five moles of Fe2+.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-020",
    "section": "Chemistry",
    "topic": "d- and f-Block Elements",
    "difficulty": "easy",
    "question": "Which observation is a well-known consequence of lanthanoid contraction?",
    "options": [
      "Na and K have nearly identical radii",
      "F and Cl have the same electronegativity",
      "Cu and Ag have identical ionization enthalpies",
      "Zr and Hf have very similar atomic radii"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The progressive contraction across the lanthanoids makes Hf unexpectedly similar in size to Zr, leading to very similar atomic radii and chemistry.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-021",
    "section": "Chemistry",
    "topic": "Coordination Compounds",
    "difficulty": "medium",
    "question": "For the complex [Co(NH3)5Cl]Cl2, what are the oxidation state of cobalt and its coordination number?",
    "options": [
      "+2 and 5",
      "+2 and 6",
      "+3 and 6",
      "+3 and 5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The complex cation has charge +2. With NH3 neutral and coordinated Cl- equal to -1, x-1=+2, so Co is +3. Five NH3 plus one Cl ligand give coordination number 6.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-022",
    "section": "Chemistry",
    "topic": "Coordination Compounds",
    "difficulty": "medium",
    "question": "Which description is correct for [Fe(CN)6]4-?",
    "options": [
      "High-spin d6 and paramagnetic",
      "Low-spin d6 and diamagnetic",
      "Low-spin d5 and paramagnetic",
      "High-spin d5 and diamagnetic"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The oxidation state of Fe is +2, so it is d6. CN- is a strong-field ligand, producing low-spin t2g^6 with no unpaired electrons; the complex is diamagnetic.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-023",
    "section": "Chemistry",
    "topic": "Purification of Organic Compounds",
    "difficulty": "medium",
    "question": "A neutral organic compound is mixed with benzoic acid in an organic solvent. Which operation best separates the benzoic acid into an aqueous layer?",
    "options": [
      "Extract with aqueous NaHCO3",
      "Wash with distilled water only",
      "Add saturated NaCl solution",
      "Dry with anhydrous CaCl2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "NaHCO3 converts benzoic acid into water-soluble sodium benzoate while a neutral organic compound remains mainly in the organic layer. Acidifying the aqueous layer can then recover benzoic acid.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-024",
    "section": "Chemistry",
    "topic": "Some Basic Principles of Organic Chemistry",
    "difficulty": "medium",
    "question": "Which is the correct acidity order among p-nitrophenol, phenol and p-cresol?",
    "options": [
      "Phenol > p-nitrophenol > p-cresol",
      "p-Cresol > phenol > p-nitrophenol",
      "p-Nitrophenol > p-cresol > phenol",
      "p-Nitrophenol > phenol > p-cresol"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The nitro group stabilizes the phenoxide ion by strong electron withdrawal, increasing acidity. The methyl group donates electron density and destabilizes phenoxide, decreasing acidity. Thus p-nitrophenol > phenol > p-cresol.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-025",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "hard",
    "question": "An acyclic hydrocarbon consumes exactly 2 mol of H2 per mole on complete catalytic hydrogenation. Complete combustion of 0.10 mol of the hydrocarbon produces 0.60 mol of CO2. What is its molecular formula?",
    "options": [
      "C6H12",
      "C5H8",
      "C6H10",
      "C6H14"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Combustion of 0.10 mol producing 0.60 mol CO2 shows that the hydrocarbon contains 6 carbon atoms. Uptake of 2 mol H2 means two degrees of unsaturation are removed. For an acyclic C6 hydrocarbon, H = 2n+2-2(DBE) = 14-4 = 10, so the formula is C6H10.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-026",
    "section": "Chemistry",
    "topic": "Organic Compounds Containing Halogens",
    "difficulty": "medium",
    "question": "Which substrate would generally undergo an SN1 substitution fastest in a polar protic solvent?",
    "options": [
      "1-bromobutane",
      "2-bromobutane",
      "2-bromo-2-methylpropane",
      "bromobenzene"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "SN1 rate is governed mainly by carbocation stability. 2-Bromo-2-methylpropane forms a tertiary carbocation, which is much more stable than primary or secondary carbocations; bromobenzene does not form a normal phenyl carbocation.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-027",
    "section": "Chemistry",
    "topic": "Organic Compounds Containing Oxygen",
    "difficulty": "medium",
    "question": "On heating 2-methyl-2-butanol with concentrated sulfuric acid, what is the major alkene product?",
    "options": [
      "2-methyl-2-butene",
      "2-methyl-1-butene",
      "3-methyl-1-butene",
      "but-2-ene"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Acid-catalysed dehydration proceeds mainly by elimination from the tertiary carbocation. The more substituted Zaitsev alkene, 2-methyl-2-butene, is the major product.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-028",
    "section": "Chemistry",
    "topic": "Aldehydes and Ketones",
    "difficulty": "medium",
    "question": "In a crossed Cannizzaro reaction between benzaldehyde and excess formaldehyde in concentrated base, which alcohol is formed from benzaldehyde?",
    "options": [
      "Phenol",
      "Cyclohexanol",
      "Methanol",
      "Benzyl alcohol"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Formaldehyde is preferentially oxidized to formate, while benzaldehyde is reduced. Reduction of C6H5CHO gives C6H5CH2OH, benzyl alcohol.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-029",
    "section": "Chemistry",
    "topic": "Organic Compounds Containing Nitrogen",
    "difficulty": "easy",
    "question": "Which compound gives a positive carbylamine test?",
    "options": [
      "Dimethylamine",
      "Triethylamine",
      "Aniline",
      "Acetamide"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The carbylamine test is given by primary amines. Aniline is a primary aromatic amine; secondary amines, tertiary amines and amides do not give this test.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  },
  {
    "id": "iemjee-2026-ch-030",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "medium",
    "question": "A double-stranded DNA sample contains 120 base pairs. Adenine constitutes 30% of all nucleotides. How many G-C base pairs are present?",
    "options": [
      "36",
      "48",
      "60",
      "72"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are 240 nucleotides total. A = 30% gives 72 adenines, so T=72. The remaining 96 nucleotides are G and C equally: 48 each. Therefore there are 48 G-C base pairs.",
    "source": {
      "kind": "original",
      "reference": "IEMJEE 2026 current official B.Tech online syllabus and pattern control",
      "url": "https://iem.edu.in/iemjee-2026/",
      "checkedOn": "2026-08-29"
    }
  }
];
