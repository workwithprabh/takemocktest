import type { Question } from '../questions';

export const LPUNEST_2026_CHEMISTRY_1: Question[] = [
  {
    "id": "lpunest-2026-ch-001",
    "section": "Chemistry",
    "topic": "Some Basic Concepts in Chemistry",
    "difficulty": "medium",
    "question": "Aluminium burns according to 4Al + 3O2 -> 2Al2O3. What mass of O2 is required to react completely with 5.4 g of Al? Use Al = 27 g/mol and O = 16 g/mol.",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "5.4 g Al is 0.20 mol. The equation requires (3/4)*0.20=0.15 mol O2, whose mass is 0.15*32=4.8 g.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "4.8 g",
      "3.2 g",
      "6.4 g",
      "9.6 g"
    ],
    "correctIndex": 0
  },
  {
    "id": "lpunest-2026-ch-002",
    "section": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "easy",
    "question": "How many orbitals are present in the shell with principal quantum number n = 4?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The total number of orbitals in a shell is n^2. For n=4, this is 16.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "4",
      "8",
      "16",
      "32"
    ],
    "correctIndex": 2
  },
  {
    "id": "lpunest-2026-ch-003",
    "section": "Chemistry",
    "topic": "Chemical Bonding and Molecular Structure",
    "difficulty": "medium",
    "question": "According to molecular orbital theory, why is O2 paramagnetic?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The MO configuration of O2 places two electrons singly in the degenerate pi* antibonding orbitals, producing paramagnetism.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "It has one unpaired electron in a sigma bonding orbital",
      "All its electrons are paired but it has a permanent dipole",
      "It contains an O-O ionic bond",
      "It has two unpaired electrons in antibonding pi orbitals"
    ],
    "correctIndex": 3
  },
  {
    "id": "lpunest-2026-ch-004",
    "section": "Chemistry",
    "topic": "Chemical Thermodynamics",
    "difficulty": "hard",
    "question": "A reaction has Delta H degrees = +24 kJ/mol and Delta S degrees = +80 J mol^-1 K^-1. At 350 K, what is Delta G degrees and what does it predict under standard conditions?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Convert Delta S degrees to 0.080 kJ mol^-1 K^-1. Then Delta G degrees = Delta H degrees - T Delta S degrees = 24 - 350(0.080) = 24 - 28 = -4 kJ/mol. Negative Delta G degrees predicts spontaneity under standard conditions.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "+4 kJ/mol; non-spontaneous",
      "-4 kJ/mol; spontaneous",
      "+52 kJ/mol; non-spontaneous",
      "-52 kJ/mol; spontaneous"
    ],
    "correctIndex": 1
  },
  {
    "id": "lpunest-2026-ch-005",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "easy",
    "question": "A solution contains 1 mol of solute and 4 mol of solvent. What is the mole fraction of the solute?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Mole fraction of solute = 1/(1+4)=0.20.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "0.25",
      "0.40",
      "0.20",
      "0.80"
    ],
    "correctIndex": 2
  },
  {
    "id": "lpunest-2026-ch-006",
    "section": "Chemistry",
    "topic": "Equilibrium",
    "difficulty": "easy",
    "question": "For N2O4(g) <=> 2NO2(g), what is the effect of increasing pressure at constant temperature?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Higher pressure favours the side with fewer moles of gas. N2O4 side has one mole versus two on the NO2 side, so equilibrium shifts left.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "Equilibrium shifts toward N2O4",
      "Equilibrium shifts toward NO2",
      "The equilibrium constant increases",
      "No equilibrium shift occurs"
    ],
    "correctIndex": 0
  },
  {
    "id": "lpunest-2026-ch-007",
    "section": "Chemistry",
    "topic": "Redox Reactions and Electrochemistry - II",
    "difficulty": "medium",
    "question": "Given E degrees(Cu2+/Cu) = +0.34 V and E degrees(Zn2+/Zn) = -0.76 V, what is the standard emf of a Zn-Cu galvanic cell?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Ecell degrees = Ecathode degrees - Eanode degrees = 0.34 - (-0.76)=1.10 V.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "0.42 V",
      "0.76 V",
      "1.52 V",
      "1.10 V"
    ],
    "correctIndex": 3
  },
  {
    "id": "lpunest-2026-ch-008",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "medium",
    "question": "For a first-order reaction, what happens to the half-life if the rate constant is doubled while temperature and all other conditions are otherwise represented by the new k?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For a first-order reaction, t_1/2 = ln2/k. Doubling k halves the half-life.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "It doubles",
      "It becomes four times",
      "It becomes half",
      "It remains unchanged"
    ],
    "correctIndex": 2
  },
  {
    "id": "lpunest-2026-ch-009",
    "section": "Chemistry",
    "topic": "Classification of Elements and Periodicity in Properties",
    "difficulty": "medium",
    "question": "Which comparison correctly reflects the well-known first-ionization-enthalpy exception across Period 3?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Al loses a 3p electron, which is easier to remove than the 3s electron removed from Mg. Hence the first ionization enthalpy of Mg is slightly higher than that of Al.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "Al has a higher first ionization enthalpy than Mg",
      "Na has a higher first ionization enthalpy than Mg",
      "Cl has a lower first ionization enthalpy than S",
      "Mg has a higher first ionization enthalpy than Al"
    ],
    "correctIndex": 3
  },
  {
    "id": "lpunest-2026-ch-010",
    "section": "Chemistry",
    "topic": "p-Block Elements",
    "difficulty": "medium",
    "question": "What is the molecular geometry of XeF4?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "XeF4 has six electron pairs around Xe, with two lone pairs opposite each other in an octahedral electron-pair arrangement, leaving a square-planar molecular shape.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "Tetrahedral",
      "Square planar",
      "Trigonal bipyramidal",
      "Square pyramidal"
    ],
    "correctIndex": 1
  },
  {
    "id": "lpunest-2026-ch-011",
    "section": "Chemistry",
    "topic": "d- and f-Block Elements",
    "difficulty": "medium",
    "question": "How many unpaired electrons are present in a high-spin Mn2+ ion?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Mn is [Ar]3d5 4s2. Mn2+ loses the two 4s electrons, giving high-spin 3d5 with five unpaired electrons.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "1",
      "5",
      "3",
      "4"
    ],
    "correctIndex": 1
  },
  {
    "id": "lpunest-2026-ch-012",
    "section": "Chemistry",
    "topic": "Co-ordination Compounds",
    "difficulty": "medium",
    "question": "What is the oxidation state of chromium in [Cr(NH3)6]Cl3?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The complex cation [Cr(NH3)6]3+ has overall charge +3 because there are three Cl- counter-ions outside the coordination sphere. NH3 is a neutral ligand, so chromium's oxidation state equals the cation's charge, +3.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "+1",
      "+2",
      "+3",
      "+4"
    ],
    "correctIndex": 2
  },
  {
    "id": "lpunest-2026-ch-013",
    "section": "Chemistry",
    "topic": "Purification and Characterization of Organic Compounds",
    "difficulty": "easy",
    "question": "Chromatographic separation is possible mainly because components of a mixture differ in their",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Chromatography separates components because they distribute or adsorb differently between a stationary phase and a moving phase.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "relative affinities for the stationary and mobile phases",
      "atomic numbers only",
      "boiling points only in every form of chromatography",
      "numbers of covalent bonds"
    ],
    "correctIndex": 0
  },
  {
    "id": "lpunest-2026-ch-014",
    "section": "Chemistry",
    "topic": "Some Basic Principles of Organic Chemistry - II",
    "difficulty": "medium",
    "question": "Among simple alkyl carbocations, which order of stability is generally correct?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Hyperconjugation and the +I effect of alkyl groups stabilize carbocations, so greater alkyl substitution generally gives greater stability.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "primary > secondary > tertiary",
      "tertiary > secondary > primary",
      "secondary > primary > tertiary",
      "primary > tertiary > secondary"
    ],
    "correctIndex": 1
  },
  {
    "id": "lpunest-2026-ch-015",
    "section": "Chemistry",
    "topic": "Hydrocarbons - I",
    "difficulty": "medium",
    "question": "Reductive ozonolysis of 2-methylpropene gives which pair of carbonyl compounds?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Cleavage of CH2=C(CH3)2 gives HCHO from the terminal CH2 carbon and (CH3)2CO from the substituted carbon.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "Propanone and methanal",
      "Ethanal and ethanal",
      "Propanal and methanal",
      "Propanone and ethanal"
    ],
    "correctIndex": 0
  },
  {
    "id": "lpunest-2026-ch-016",
    "section": "Chemistry",
    "topic": "Organic Compounds Containing Halogens",
    "difficulty": "medium",
    "question": "Which substrate generally undergoes an SN1 reaction fastest under comparable polar protic conditions?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "SN1 rate is controlled by carbocation formation. Tertiary carbocations are much more stabilized than primary or methyl carbocations, while vinyl carbocations are strongly unfavourable.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "A methyl halide",
      "A primary alkyl halide",
      "A vinyl halide",
      "A tertiary alkyl halide"
    ],
    "correctIndex": 3
  },
  {
    "id": "lpunest-2026-ch-017",
    "section": "Chemistry",
    "topic": "Organic Compounds Containing Oxygen - I",
    "difficulty": "medium",
    "question": "Phenol is more acidic than ethanol mainly because",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Deprotonation of phenol gives phenoxide, whose negative charge is delocalized by resonance over the aromatic ring. Ethoxide lacks comparable resonance stabilization.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "the O-H bond in phenol is ionic",
      "ethanol cannot form hydrogen bonds",
      "the phenoxide ion is resonance-stabilized",
      "phenol contains more hydrogen atoms"
    ],
    "correctIndex": 2
  },
  {
    "id": "lpunest-2026-ch-018",
    "section": "Chemistry",
    "topic": "Organic Compounds Containing Oxygen - II",
    "difficulty": "medium",
    "question": "Which compound can undergo the Cannizzaro reaction because it has no alpha hydrogen?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Benzaldehyde has no alpha carbon bearing hydrogen next to the carbonyl group, so it can undergo Cannizzaro disproportionation in strong base.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "Propanal",
      "Butanal",
      "Propanone",
      "Benzaldehyde"
    ],
    "correctIndex": 3
  },
  {
    "id": "lpunest-2026-ch-019",
    "section": "Chemistry",
    "topic": "Organic Compounds Containing Nitrogen",
    "difficulty": "medium",
    "question": "At 0-5 C, aniline reacts with nitrous acid to form mainly",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Primary aromatic amines such as aniline are diazotized by nitrous acid at 0-5 C to form relatively stable arenediazonium salts.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "nitrobenzene",
      "benzenediazonium salt",
      "benzamide",
      "phenyl isocyanate"
    ],
    "correctIndex": 1
  },
  {
    "id": "lpunest-2026-ch-020",
    "section": "Chemistry",
    "topic": "Bio Molecules",
    "difficulty": "hard",
    "question": "Why is sucrose classified as a non-reducing sugar?",
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "In sucrose, the anomeric carbon of glucose and the anomeric carbon of fructose are both involved in the glycosidic linkage, leaving no free hemiacetal or hemiketal group for reducing behaviour.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    },
    "options": [
      "Both anomeric carbons are tied up in the glycosidic bond",
      "It contains no oxygen atoms",
      "It is made only of amino acids",
      "It cannot dissolve in water"
    ],
    "correctIndex": 0
  },
  {
    "id": "lpunest-2026-ch-021",
    "section": "Chemistry",
    "topic": "Some Basic Concepts in Chemistry",
    "difficulty": "easy",
    "question": "Enter the number of moles of oxygen atoms present in 0.50 mol of O3.",
    "options": [],
    "correctIndex": -1,
    "correctValue": "1.5",
    "answerType": "numerical",
    "maxDecimalPlaces": 1,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Each mole of O3 contains 3 mol of oxygen atoms. Therefore 0.50 mol O3 contains 0.50*3=1.50 mol oxygen atoms.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "lpunest-2026-ch-022",
    "section": "Chemistry",
    "topic": "Chemical Thermodynamics",
    "difficulty": "medium",
    "question": "For a reaction at 300 K, use Delta G degrees = -RT ln K. Take R = 8 J mol^-1 K^-1 and ln K = 1. Enter Delta G degrees in kJ/mol.",
    "options": [],
    "correctIndex": -1,
    "correctValue": "-2.4",
    "answerType": "numerical",
    "maxDecimalPlaces": 1,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Delta G degrees = -(8)(300)(1) = -2400 J/mol = -2.4 kJ/mol.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "lpunest-2026-ch-023",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "medium",
    "question": "A dilute non-electrolyte solution has concentration 0.25 mol/L at 300 K. Use R = 0.08 L atm mol^-1 K^-1. Enter its osmotic pressure in atm.",
    "options": [],
    "correctIndex": -1,
    "correctValue": "6",
    "answerType": "numerical",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For a non-electrolyte, pi=CRT=(0.25)(0.08)(300)=6 atm.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "lpunest-2026-ch-024",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "easy",
    "question": "For a reaction, doubling the concentration of A while B is fixed doubles the rate, while doubling B at fixed A quadruples the rate. The rate is 0.15 mol L^-1 s^-1 at [A]=a and [B]=b. Enter the rate in mol L^-1 s^-1 when [A]=2a and [B]=3b.",
    "options": [],
    "correctIndex": -1,
    "correctValue": "2.7",
    "answerType": "numerical",
    "maxDecimalPlaces": 1,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The observations imply first order in A and second order in B, so rate is proportional to [A][B]^2. The new rate is 0.15*2*(3^2) = 2.7 mol L^-1 s^-1.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "lpunest-2026-ch-025",
    "section": "Chemistry",
    "topic": "Redox Reactions and Electrochemistry - II",
    "difficulty": "hard",
    "question": "A conductivity cell containing a 0.020 mol L^-1 electrolyte has resistance 500 ohm and cell constant 1.5 cm^-1. Enter the molar conductivity in S cm^2 mol^-1.",
    "options": [],
    "correctIndex": -1,
    "correctValue": "150",
    "answerType": "numerical",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Conductivity is kappa = cell constant/resistance = 1.5/500 = 0.003 S cm^-1. Molar conductivity is kappa*1000/c = 0.003*1000/0.020 = 150 S cm^2 mol^-1.",
    "source": {
      "kind": "original",
      "reference": "LPUNEST B.Tech 2026 official question-paper pattern and syllabus",
      "url": "https://www.lpu.in/nest/btech/question-paper-pattern-for-lpunest.php",
      "checkedOn": "2026-08-27"
    }
  }
];
