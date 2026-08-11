import type { Question } from '../questions';

export const BITSAT_2026_MATHEMATICS_CHEMISTRY_1: Question[] = [
  {
    "id": "bitsat-2026-chemistry-001",
    "section": "Chemistry",
    "topic": "States of Matter",
    "difficulty": "easy",
    "question": "An 11.0 g sample of CO2 is kept in a 2.46 L vessel at 300 K. Assuming ideal-gas behavior and using R = 0.0821 L atm mol^-1 K^-1, what is the pressure of the gas?",
    "options": [
      "1.25 atm",
      "5.00 atm",
      "2.50 atm",
      "10.0 atm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The amount of CO2 is n = 11.0/44.0 = 0.250 mol. From PV = nRT, P = nRT/V = (0.250)(0.0821)(300)/2.46 = 2.50 atm, to three significant figures.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-002",
    "section": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "medium",
    "question": "A hydrogen atom emits a photon when its electron falls from n = 4 to n = 2. Using 13.6 eV for the magnitude of the ground-state energy and hc = 1240 eV nm, what is the wavelength of the photon?",
    "options": [
      "486 nm",
      "656 nm",
      "434 nm",
      "365 nm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For hydrogen, En = -13.6/n^2 eV. The emitted photon energy is 13.6(1/2^2 - 1/4^2) = 13.6(3/16) = 2.55 eV. Hence lambda = hc/E = 1240/2.55 = about 486 nm.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-003",
    "section": "Chemistry",
    "topic": "Chemical Bonding and Molecular Structure",
    "difficulty": "easy",
    "question": "VSEPR theory predicts which molecular geometry for SF4?",
    "options": [
      "Tetrahedral",
      "Square planar",
      "Trigonal bipyramidal",
      "Seesaw"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Sulfur has five electron domains in SF4: four bonding pairs and one lone pair. The electron-domain geometry is trigonal bipyramidal, and placing the lone pair in an equatorial position gives a seesaw molecular shape.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-004",
    "section": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "For the combustion reaction CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l), the standard enthalpies of formation are -75 kJ mol^-1 for CH4(g), -394 kJ mol^-1 for CO2(g), and -286 kJ mol^-1 for H2O(l). What is the standard enthalpy change of combustion of methane?",
    "options": [
      "-319 kJ mol^-1",
      "-966 kJ mol^-1",
      "-891 kJ mol^-1",
      "+891 kJ mol^-1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Using Delta H = sum Delta Hf(products) - sum Delta Hf(reactants), Delta H = [-394 + 2(-286)] - [-75 + 0] = -966 + 75 = -891 kJ mol^-1.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-005",
    "section": "Chemistry",
    "topic": "Physical and Chemical Equilibria",
    "difficulty": "medium",
    "question": "A 0.10 M aqueous solution of NH3 has Kb = 1.0 x 10^-5 at 25 C. What is its approximate pH?",
    "options": [
      "3.0",
      "5.0",
      "9.0",
      "11.0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For NH3 + H2O <-> NH4+ + OH-, let [OH-] = x. Since Kb is small, x is approximately sqrt(Kb C) = sqrt(10^-5 x 0.10) = 10^-3 M. Thus pOH = 3.0 and pH = 14.0 - 3.0 = 11.0.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-006",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "hard",
    "question": "At 298 K, a galvanic cell is Zn(s) | Zn2+(0.10 M) || Cu2+(0.010 M) | Cu(s). The standard cell potential is 1.10 V. Using F = 96500 C mol^-1 and E = E0 - (0.0591/n) log Q, what is the magnitude of the maximum electrical work obtainable per mole of Zn consumed?",
    "options": [
      "103 kJ mol^-1",
      "212 kJ mol^-1",
      "107 kJ mol^-1",
      "207 kJ mol^-1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The cell reaction is Zn + Cu2+ -> Zn2+ + Cu, so n = 2 and Q = [Zn2+]/[Cu2+] = 0.10/0.010 = 10. The cell potential is E = 1.10 - (0.0591/2)log(10) = 1.07045 V. The maximum electrical work magnitude per mole of Zn is nFE = 2(96500)(1.07045) = 2.066 x 10^5 J mol^-1, or about 207 kJ mol^-1.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-007",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "medium",
    "question": "A first-order reaction is 75% complete in 40 minutes. What is its half-life?",
    "options": [
      "10 min",
      "40 min",
      "80 min",
      "20 min"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "If the reaction is 75% complete, 25% of the reactant remains. A first-order process reaches 1/4 of its initial concentration after two half-lives. Therefore 2t1/2 = 40 min and t1/2 = 20 min.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-008",
    "section": "Chemistry",
    "topic": "Surface Chemistry",
    "difficulty": "easy",
    "question": "The Tyndall effect shown by a colloidal sol is primarily due to which phenomenon?",
    "options": [
      "Absorption of light",
      "Refraction of light",
      "Scattering of light",
      "Interference of light"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Colloidal particles are large enough to scatter visible light passing through the dispersion. This scattering makes the light path visible and is called the Tyndall effect.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-009",
    "section": "Chemistry",
    "topic": "Hydrogen and s-block Elements",
    "difficulty": "easy",
    "question": "What is the oxidation state of hydrogen in sodium hydride, NaH?",
    "options": [
      "-1",
      "+1",
      "0",
      "+2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "NaH is an ionic or saline hydride containing Na+ and H-. Therefore hydrogen has oxidation state -1.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-010",
    "section": "Chemistry",
    "topic": "p-, d-, and f-block Elements",
    "difficulty": "easy",
    "question": "In acidic solution, MnO4- is reduced to Mn2+. How many electrons are accepted by each MnO4- ion in this reduction?",
    "options": [
      "5",
      "3",
      "1",
      "7"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Manganese is in the +7 oxidation state in MnO4- and becomes +2 in Mn2+. The decrease of five oxidation-state units means each manganese atom gains 5 electrons.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-011",
    "section": "Chemistry",
    "topic": "Principles of Organic Chemistry and Hydrocarbons",
    "difficulty": "medium",
    "question": "Ozonolysis of 2-methylpropene followed by reductive workup with Zn/H2O gives which carbonyl products?",
    "options": [
      "Ethanal only",
      "Propanone only",
      "Methanal and ethanal",
      "Propanone and methanal"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Cleavage of the C=C bond converts the substituted carbon, which bears two methyl groups, into propanone. The terminal CH2 carbon becomes methanal. Therefore the products are propanone and methanal.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-012",
    "section": "Chemistry",
    "topic": "Stereochemistry",
    "difficulty": "hard",
    "question": "A sample contains 2-butene and 2,4-hexadiene as separate constitutional compounds. Counting only distinct geometrical isomers arising from alkene E/Z geometry, how many geometrical isomers are possible in total for these two compounds?",
    "options": [
      "5",
      "4",
      "6",
      "7"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "2-Butene has one C=C bond with two different substituents on each double-bond carbon, so it has two geometrical isomers, E and Z. In 2,4-hexadiene, both C=C bonds can independently be E or Z, but molecular symmetry makes the E,Z and Z,E descriptions identical. Its distinct geometrical isomers are therefore E,E, Z,Z, and E,Z, giving three. The total is 2 + 3 = 5.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-013",
    "section": "Chemistry",
    "topic": "Organic Compounds with Functional Groups Containing Oxygen and Nitrogen",
    "difficulty": "medium",
    "question": "Which carbonyl compound gives a positive iodoform test but a negative Tollens test?",
    "options": [
      "Ethanal",
      "Propanone",
      "Benzaldehyde",
      "Propanal"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Propanone contains the CH3CO- group required for the iodoform reaction, so it gives a positive iodoform test. It is a ketone and does not reduce Tollens reagent under the usual test conditions. The three aldehydes listed give positive Tollens tests.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-014",
    "section": "Chemistry",
    "topic": "Biological, Industrial and Environmental Chemistry",
    "difficulty": "easy",
    "question": "Which of the following is a non-reducing sugar?",
    "options": [
      "Glucose",
      "Maltose",
      "Lactose",
      "Sucrose"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "In sucrose, the glycosidic bond joins the anomeric carbon of glucose to the anomeric carbon of fructose. No free hemiacetal or hemiketal group remains, so sucrose is non-reducing.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-015",
    "section": "Chemistry",
    "topic": "Theoretical Principles of Experimental Chemistry",
    "difficulty": "medium",
    "question": "In acidic medium, 20.0 mL of 0.100 M Fe2+ solution is titrated with 0.0200 M KMnO4. Using MnO4- + 5Fe2+ + 8H+ -> Mn2+ + 5Fe3+ + 4H2O, what volume of KMnO4 is required at the equivalence point?",
    "options": [
      "10.0 mL",
      "20.0 mL",
      "40.0 mL",
      "50.0 mL"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Moles of Fe2+ are 0.0200 L x 0.100 mol L^-1 = 0.00200 mol. The stoichiometric ratio is 5 mol Fe2+ to 1 mol MnO4-, so moles of MnO4- needed are 0.00200/5 = 0.000400 mol. At 0.0200 M, V = n/M = 0.000400/0.0200 = 0.0200 L = 20.0 mL.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-016",
    "section": "Chemistry",
    "topic": "States of Matter",
    "difficulty": "medium",
    "question": "Equal masses of H2 and O2 are mixed in a vessel. If the total pressure is 9.00 atm and the gases behave ideally, what is the partial pressure of H2?",
    "options": [
      "0.53 atm",
      "8.47 atm",
      "4.50 atm",
      "8.00 atm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Let the mass of each gas be m. Then n(H2) = m/2 and n(O2) = m/32, so their mole ratio is 16:1. The mole fraction of H2 is 16/17. By Dalton's law, p(H2) = (16/17)(9.00) = 8.47 atm.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-017",
    "section": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "easy",
    "question": "What is the maximum number of electrons that can occupy the shell with principal quantum number n = 4?",
    "options": [
      "18",
      "32",
      "16",
      "8"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The maximum number of electrons in a shell with principal quantum number n is 2n^2. For n = 4, this is 2(4^2) = 32.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-018",
    "section": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "hard",
    "question": "Use Hess's law for C(graphite) + 2H2(g) -> CH4(g). The combustion enthalpies of C(graphite), H2(g), and CH4(g) are -393.5, -285.8, and -890.3 kJ mol^-1, respectively. What is Delta H for the stated formation reaction?",
    "options": [
      "+74.8 kJ mol^-1",
      "-890.3 kJ mol^-1",
      "-74.8 kJ mol^-1",
      "-965.1 kJ mol^-1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For C + 2H2 -> CH4, combustion of the elements directly to CO2 + 2H2O releases -393.5 + 2(-285.8) = -965.1 kJ mol^-1. The alternative Hess path is formation of CH4 followed by its combustion, so Delta Hf(CH4) + (-890.3) = -965.1. Therefore Delta Hf(CH4) = -74.8 kJ mol^-1.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-019",
    "section": "Chemistry",
    "topic": "Physical and Chemical Equilibria",
    "difficulty": "medium",
    "question": "At a certain temperature, Ksp for CaF2 is 4.0 x 10^-12. Neglecting hydrolysis and other equilibria, what is the molar solubility of CaF2 in pure water?",
    "options": [
      "2.0 x 10^-4 M",
      "4.0 x 10^-4 M",
      "1.0 x 10^-4 M",
      "1.0 x 10^-6 M"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "If the molar solubility is s, then [Ca2+] = s and [F-] = 2s. Thus Ksp = s(2s)^2 = 4s^3. Given 4s^3 = 4.0 x 10^-12, s^3 = 1.0 x 10^-12 and s = 1.0 x 10^-4 M.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-020",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "medium",
    "question": "A current of 2.00 A is passed through aqueous AgNO3 for 965 s. Assuming 100% current efficiency, F = 96500 C mol^-1, and molar mass of Ag = 108 g mol^-1, what mass of silver is deposited?",
    "options": [
      "1.08 g",
      "2.16 g",
      "4.32 g",
      "0.54 g"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The charge passed is Q = It = 2.00 x 965 = 1930 C. This is 1930/96500 = 0.0200 mol of electrons. Since Ag+ + e- -> Ag, 0.0200 mol Ag is deposited. Its mass is 0.0200 x 108 = 2.16 g.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-021",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "easy",
    "question": "What are the units of the rate constant for a first-order reaction?",
    "options": [
      "s^-1",
      "mol L^-1 s^-1",
      "L mol^-1 s^-1",
      "L^2 mol^-2 s^-1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For a first-order reaction, rate = k[A]. Since rate has units of concentration per time, dividing by concentration leaves k with units of inverse time, such as s^-1.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-022",
    "section": "Chemistry",
    "topic": "Chemical Bonding and Molecular Structure",
    "difficulty": "medium",
    "question": "According to molecular orbital theory, what is the bond order of O2+?",
    "options": [
      "2.5",
      "2.0",
      "1.5",
      "3.0"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "O2 has bond order 2. Formation of O2+ removes one electron from a pi antibonding molecular orbital. Removing one antibonding electron increases bond order by 1/2, so the bond order becomes 2.5.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-023",
    "section": "Chemistry",
    "topic": "p-, d-, and f-block Elements",
    "difficulty": "easy",
    "question": "Which of the following aqueous ions is expected to be colorless because it has a d0 electronic configuration?",
    "options": [
      "Ti3+",
      "Sc3+",
      "Cu2+",
      "Ni2+"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Sc has atomic number 21 and ground-state configuration [Ar]3d1 4s2. Sc3+ loses all three valence electrons and becomes [Ar], which is d0. With no d electrons, d-d transitions are absent, so Sc3+ is colorless in aqueous solution.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-024",
    "section": "Chemistry",
    "topic": "Organic Compounds with Functional Groups Containing Oxygen and Nitrogen",
    "difficulty": "hard",
    "question": "Propene is treated successively with HBr in the presence of peroxide, alcoholic KCN, and then aqueous acid under reflux. What is the final major organic product?",
    "options": [
      "Propan-1-ol",
      "Propanoic acid",
      "Butanoic acid",
      "Butan-2-one"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "In the presence of peroxide, HBr adds to propene by the anti-Markovnikov radical route to give 1-bromopropane. Cyanide then substitutes Br to form CH3CH2CH2CN, adding one carbon and giving butanenitrile. Acidic hydrolysis of the nitrile gives butanoic acid.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-025",
    "section": "Chemistry",
    "topic": "Biological, Industrial and Environmental Chemistry",
    "difficulty": "easy",
    "question": "Which monomer is used to prepare nylon-6?",
    "options": [
      "Ethylene glycol",
      "Caprolactam",
      "Adipic acid",
      "Styrene"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Nylon-6 is produced by ring-opening polymerization of caprolactam. Adipic acid is used with hexamethylenediamine to make nylon-6,6, while styrene gives polystyrene.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-026",
    "section": "Chemistry",
    "topic": "Theoretical Principles of Experimental Chemistry",
    "difficulty": "medium",
    "question": "In paper chromatography, a solute spot moves 6.0 cm from the origin while the solvent front moves 8.0 cm. What is the Rf value of the solute?",
    "options": [
      "0.60",
      "0.75",
      "1.33",
      "0.25"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The retention factor is Rf = distance travelled by solute/distance travelled by solvent front. Therefore Rf = 6.0/8.0 = 0.75.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-027",
    "section": "Chemistry",
    "topic": "Principles of Organic Chemistry and Hydrocarbons",
    "difficulty": "medium",
    "question": "1-Butyne is treated with H2O in the presence of HgSO4 and dilute H2SO4. What is the major final product after tautomerization?",
    "options": [
      "Butan-2-one",
      "Butanal",
      "Butan-1-ol",
      "But-1-en-2-ol"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Mercuric-ion-catalyzed hydration of a terminal alkyne follows Markovnikov orientation and first produces an enol. For 1-butyne the enol rapidly undergoes keto-enol tautomerization to the methyl ketone butan-2-one.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-028",
    "section": "Chemistry",
    "topic": "Hydrogen and s-block Elements",
    "difficulty": "medium",
    "question": "A 16.8 g sample of pure NaHCO3 is heated completely according to 2NaHCO3(s) -> Na2CO3(s) + CO2(g) + H2O(g). What mass is lost from the solid sample?",
    "options": [
      "4.4 g",
      "1.8 g",
      "10.6 g",
      "6.2 g"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Two moles of NaHCO3 have mass 2 x 84 = 168 g and release 44 g CO2 plus 18 g H2O, a total gaseous mass of 62 g. A 16.8 g sample is one-tenth of this amount, so the mass lost is 62/10 = 6.2 g.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-029",
    "section": "Chemistry",
    "topic": "p-, d-, and f-block Elements: Coordination Compounds",
    "difficulty": "hard",
    "question": "How many stereoisomers are possible for the octahedral complex [Co(en)2Cl2]+, where en is ethane-1,2-diamine?",
    "options": [
      "3",
      "2",
      "4",
      "5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The complex has cis and trans geometrical forms. The trans form has symmetry that makes it achiral, so it contributes one stereoisomer. The cis form is chiral and exists as two non-superimposable mirror images, conventionally called Delta and Lambda. Therefore the total number of stereoisomers is 1 + 2 = 3.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-chemistry-030",
    "section": "Chemistry",
    "topic": "Organic Compounds with Functional Groups Containing Oxygen and Nitrogen",
    "difficulty": "medium",
    "question": "Aniline is treated with NaNO2 and HCl at 0 to 5 C, and the resulting product is then warmed with water. What is the final major organic product?",
    "options": [
      "Chlorobenzene",
      "Nitrobenzene",
      "Phenol",
      "Benzene"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "NaNO2 and HCl at 0 to 5 C convert aniline into benzenediazonium chloride. On warming with water, the diazonium group is hydrolyzed and replaced by OH, releasing N2 and forming phenol.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Chemistry syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  }
];
