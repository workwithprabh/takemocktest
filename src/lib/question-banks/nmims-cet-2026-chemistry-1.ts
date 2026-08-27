import type { Question } from '../questions';

export const NMIMS_CET_2026_CHEMISTRY_1: Question[] = [
  {
    "id": "nmims-cet-2026-ch-001",
    "section": "Chemistry",
    "topic": "Some Basic Concepts in Chemistry and States of Matter",
    "difficulty": "medium",
    "question": "An ideal gas sample contains 0.20 mol at 300 K in a 2.46 L vessel. Using R=0.082 L atm mol^-1 K^-1, what is its pressure?",
    "options": [
      "2.0 atm",
      "1.0 atm",
      "4.0 atm",
      "0.5 atm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "P=nRT/V=0.20(0.082)(300)/2.46=2.0 atm.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-002",
    "section": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "medium",
    "question": "What is the ground-state electronic configuration of chromium (Z=24)?",
    "options": [
      "[Ar] 3d5 4s1",
      "[Ar] 3d4 4s2",
      "[Ar] 3d6",
      "[Ar] 3d3 4s3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Chromium gains extra stability from a half-filled 3d subshell, so its ground state is [Ar] 3d5 4s1.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-003",
    "section": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "medium",
    "question": "What is the energy of one photon of wavelength 400 nm? Use h=6.63x10^-34 J s and c=3.00x10^8 m/s.",
    "options": [
      "3.31x10^-19 J",
      "7.46x10^-19 J",
      "4.97x10^-19 J",
      "1.66x10^-19 J"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "E=hc/lambda=(6.63x10^-34)(3.00x10^8)/(400x10^-9)=4.97x10^-19 J.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-004",
    "section": "Chemistry",
    "topic": "Chemical Bonding and Molecular Structure",
    "difficulty": "medium",
    "question": "What are the molecular shape and central-atom hybridization in BF3?",
    "options": [
      "Tetrahedral, sp3",
      "Trigonal pyramidal, sp3",
      "Trigonal planar, sp2",
      "Linear, sp"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Boron has three sigma bonds and no lone pair in BF3, giving three electron domains: trigonal planar geometry and sp2 hybridization.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-005",
    "section": "Chemistry",
    "topic": "Chemical Bonding and Molecular Structure",
    "difficulty": "medium",
    "question": "In one Lewis resonance contributor for SO2, sulfur has one S=O double bond, one S-O single bond and one lone pair. What is the formal charge on sulfur in that contributor?",
    "options": [
      "+1",
      "0",
      "-1",
      "+2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Sulfur has 6 valence electrons. In this contributor it has 2 nonbonding electrons and 6 bonding electrons, so formal charge = 6-2-(6/2)=+1.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-006",
    "section": "Chemistry",
    "topic": "Chemical Thermodynamics",
    "difficulty": "hard",
    "question": "The standard enthalpy of combustion of methane is -890 kJ/mol. Given DeltaHf degrees of CO2(g)=-394 kJ/mol and H2O(l)=-286 kJ/mol, what is DeltaHf degrees of CH4(g)?",
    "options": [
      "-76 kJ/mol",
      "+76 kJ/mol",
      "-966 kJ/mol",
      "-110 kJ/mol"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For CH4+2O2->CO2+2H2O, -890=[-394+2(-286)]-DeltaHf(CH4). Thus DeltaHf(CH4)=-76 kJ/mol.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-007",
    "section": "Chemistry",
    "topic": "Solutions and Equilibrium",
    "difficulty": "easy",
    "question": "9.8 g of H2SO4 is dissolved in 100 g of water. What is the molality of the solution? Molar mass H2SO4=98 g/mol.",
    "options": [
      "0.10 mol kg^-1",
      "0.98 mol kg^-1",
      "9.8 mol kg^-1",
      "1.0 mol kg^-1"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Moles H2SO4=9.8/98=0.10 mol. Solvent mass=0.100 kg, so molality=0.10/0.100=1.0 mol kg^-1.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-008",
    "section": "Chemistry",
    "topic": "Solutions and Equilibrium",
    "difficulty": "medium",
    "question": "One mole of PCl5 is placed in a 2.0 L vessel. At equilibrium, 40% of it has dissociated according to PCl5 reversible PCl3+Cl2. What is Kc?",
    "options": [
      "0.133",
      "0.067",
      "0.267",
      "0.400"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Initially [PCl5]=0.50 M. At 40% dissociation, [PCl5]=0.30 M and [PCl3]=[Cl2]=0.20 M. Thus Kc=(0.20)(0.20)/0.30=0.133.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-009",
    "section": "Chemistry",
    "topic": "Redox Reactions and Electrochemistry",
    "difficulty": "medium",
    "question": "Two electrolytic cells carry the same charge. One deposits 0.54 g of Ag from Ag+ ions; the other deposits 0.090 g of a metal M from M3+ ions. If Ag=108, what is the molar mass of M?",
    "options": [
      "27 g mol^-1",
      "54 g mol^-1",
      "81 g mol^-1",
      "108 g mol^-1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "0.54 g Ag is 0.005 mol Ag, corresponding to 0.005 mol electrons. M3+ therefore deposits 0.005/3 mol M. Hence M=0.090/(0.005/3)=54 g mol^-1.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-010",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "medium",
    "question": "In a zero-order reaction, the reactant concentration falls from 0.80 M to 0.50 M in 15 min. How much additional time is required for it to fall from 0.50 M to 0.20 M?",
    "options": [
      "7.5 min",
      "30 min",
      "15 min",
      "10 min"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a zero-order reaction the concentration decreases linearly. A drop of 0.30 M takes 15 min, so another 0.30 M drop also takes 15 min.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-011",
    "section": "Chemistry",
    "topic": "Purification and Characterization of Organic Compounds",
    "difficulty": "medium",
    "question": "A mixture contains aniline and naphthalene dissolved in ether. Which treatment selectively transfers aniline into an aqueous layer?",
    "options": [
      "Shake with dilute NaOH",
      "Shake with dilute HCl",
      "Add anhydrous CaCl2",
      "Distil the ether at atmospheric pressure"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Dilute HCl protonates aniline to the water-soluble anilinium salt; neutral naphthalene remains in the ether layer.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-012",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "medium",
    "question": "An acyclic hydrocarbon X has molar mass 54 g mol^-1 and consumes 2 mol of H2 per mole of X on complete catalytic hydrogenation. Which formula is consistent with these data?",
    "options": [
      "C4H10",
      "C3H6",
      "C4H8",
      "C4H6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "C4H6 has molar mass 4(12)+6=54. Being acyclic, it has two degrees of unsaturation that can be two pi bonds, so complete hydrogenation consumes 2 mol H2 per mole.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-013",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "medium",
    "question": "A 0.40 mol mixture contains only benzene and cyclohexene. Under mild conditions without a Lewis-acid catalyst, it consumes 0.10 mol of Br2. How many moles of H2 are required to hydrogenate the entire original mixture completely to cyclohexane?",
    "options": [
      "0.40 mol",
      "0.80 mol",
      "1.00 mol",
      "1.20 mol"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Only cyclohexene consumes Br2 under the stated mild conditions, so there are 0.10 mol cyclohexene and 0.30 mol benzene. Hydrogenation requires 1 mol H2 per mol cyclohexene and 3 per mol benzene: 0.10+3(0.30)=1.00 mol.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-014",
    "section": "Chemistry",
    "topic": "Chemistry in Everyday Life",
    "difficulty": "easy",
    "question": "Which compound is commonly used as an antacid because it neutralizes excess stomach acid?",
    "options": [
      "Sodium chloride",
      "Glucose",
      "Urea",
      "Magnesium hydroxide"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Magnesium hydroxide is a weak base used in antacid formulations to neutralize excess gastric acid.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-015",
    "section": "Chemistry",
    "topic": "Chemistry in Everyday Life",
    "difficulty": "easy",
    "question": "Aspirin is primarily classified as which type of drug?",
    "options": [
      "Antibiotic",
      "Antacid",
      "Analgesic and antipyretic",
      "Tranquilizer"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Aspirin relieves pain and reduces fever, so it is an analgesic and antipyretic.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-016",
    "section": "Chemistry",
    "topic": "Principles Related to Practical Chemistry",
    "difficulty": "medium",
    "question": "In Lassaigne test for nitrogen, the sodium extract is ultimately treated so that formation of which color supports the presence of nitrogen?",
    "options": [
      "Blood red",
      "Canary yellow",
      "Prussian blue",
      "Violet"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Nitrogen in the sodium extract is converted to cyanide, which through ferrocyanide/ferric chemistry gives Prussian blue.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-017",
    "section": "Chemistry",
    "topic": "Principles Related to Practical Chemistry",
    "difficulty": "easy",
    "question": "An unknown solid is one of NaCl, KNO3, Na2CO3 and NH4Cl. When it is warmed with aqueous NaOH, the evolved gas turns moist red litmus paper blue. Which solid is it?",
    "options": [
      "NaCl",
      "KNO3",
      "Na2CO3",
      "NH4Cl"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Only the ammonium salt releases NH3 on warming with aqueous NaOH. Ammonia is basic and turns moist red litmus paper blue, so the solid is NH4Cl.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-018",
    "section": "Chemistry",
    "topic": "Organic Compounds Containing Halogens, Oxygen and Nitrogen",
    "difficulty": "easy",
    "question": "What is the major product when 2-bromobutane is heated with aqueous KOH?",
    "options": [
      "But-2-ene",
      "Butan-1-ol",
      "Butane",
      "Butan-2-ol"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Aqueous KOH favors nucleophilic substitution, replacing Br by OH at C-2 to form butan-2-ol.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-019",
    "section": "Chemistry",
    "topic": "Organic Compounds Containing Halogens, Oxygen and Nitrogen",
    "difficulty": "medium",
    "question": "Two isomeric amines X and Y both have molecular formula C3H9N. X reacts with nitrous acid to evolve nitrogen gas, whereas Y forms an N-nitrosamine without evolving nitrogen. Which pair is X and Y, respectively?",
    "options": [
      "trimethylamine and propan-1-amine",
      "propan-1-amine and ethylmethylamine",
      "ethylmethylamine and propan-1-amine",
      "propan-2-amine and trimethylamine"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A primary aliphatic amine evolves N2 with nitrous acid, while a secondary amine forms an N-nitrosamine. Propan-1-amine is primary and ethylmethylamine is secondary, so the second pair fits both observations.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-020",
    "section": "Chemistry",
    "topic": "Polymers",
    "difficulty": "easy",
    "question": "Buna-S is a copolymer formed from which pair of monomers?",
    "options": [
      "Ethene and propene",
      "Tetrafluoroethene and styrene",
      "Vinyl chloride and butadiene",
      "1,3-butadiene and styrene"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Buna-S (SBR) is produced by copolymerizing 1,3-butadiene with styrene.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-021",
    "section": "Chemistry",
    "topic": "Classification of Elements and Periodicity in Properties",
    "difficulty": "easy",
    "question": "Across a period from left to right, the general trend in atomic radius is to",
    "options": [
      "increase steadily",
      "remain constant",
      "decrease",
      "first decrease and then always double"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Increasing effective nuclear charge draws electrons closer across a period, so atomic radius generally decreases.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-022",
    "section": "Chemistry",
    "topic": "Classification of Elements and Periodicity in Properties",
    "difficulty": "easy",
    "question": "Which element has the greatest electronegativity on the Pauling scale?",
    "options": [
      "Oxygen",
      "Fluorine",
      "Chlorine",
      "Nitrogen"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Fluorine is the most electronegative element on the Pauling scale.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-023",
    "section": "Chemistry",
    "topic": "Alkali and Alkaline Earth Metals",
    "difficulty": "medium",
    "question": "Which pair of trends is correct on moving down Group 2 from Mg to Ba?",
    "options": [
      "carbonate thermal stability increases; sulfate solubility decreases",
      "carbonate thermal stability decreases; sulfate solubility decreases",
      "carbonate thermal stability decreases; sulfate solubility increases",
      "carbonate thermal stability increases; sulfate solubility increases"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Down Group 2, carbonates become more thermally stable as cation polarizing power falls, while sulfates become less soluble because hydration enthalpy falls faster than lattice effects compensate.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-024",
    "section": "Chemistry",
    "topic": "Alkali and Alkaline Earth Metals",
    "difficulty": "medium",
    "question": "Why is BeCl2 much more covalent than BaCl2?",
    "options": [
      "Be has lower ionization energy than Ba",
      "Be2+ has much higher polarizing power",
      "Cl- is smaller near Be than near Ba",
      "Ba2+ has higher charge than Be2+"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The very small Be2+ ion has high charge density and strongly polarizes Cl-, giving BeCl2 substantial covalent character.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-025",
    "section": "Chemistry",
    "topic": "P-Block, d-Block and f-Block Elements",
    "difficulty": "easy",
    "question": "For free gaseous ions, how many unpaired d electrons are present in Mn2+ and Ni2+ together?",
    "options": [
      "5",
      "7",
      "8",
      "10"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Mn2+ is 3d5 and has five unpaired electrons. Ni2+ is 3d8 and has two unpaired electrons in the free-ion configuration. Together they have 7.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-026",
    "section": "Chemistry",
    "topic": "P-Block, d-Block and f-Block Elements",
    "difficulty": "medium",
    "question": "An atom has atomic number 22. After formation of its 3+ ion, which description is correct?",
    "options": [
      "3d1; d-d absorption is possible",
      "3d0; d-d absorption is possible",
      "3d10; the ion has one unpaired electron",
      "3d2; the ion is necessarily diamagnetic"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Atomic number 22 is Ti: [Ar]3d2 4s2. Removing three electrons gives Ti3+=[Ar]3d1, a partially filled d subshell for which d-d excitation is possible.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-027",
    "section": "Chemistry",
    "topic": "Coordination Compounds",
    "difficulty": "easy",
    "question": "What is the oxidation state of cobalt in the complex ion [Co(en)2(NO2)Cl]+, where en is neutral ethane-1,2-diamine?",
    "options": [
      "+3",
      "+2",
      "+1",
      "+4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Both en ligands are neutral, while NO2- and Cl- contribute -2 in total. If cobalt is x, then x-2=+1, giving x=+3.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-028",
    "section": "Chemistry",
    "topic": "Environmental Chemistry",
    "difficulty": "easy",
    "question": "A lake receives sustained nitrate- and phosphate-rich runoff. A dense algal bloom appears, and several days later fish deaths increase. Which process best links these observations?",
    "options": [
      "photosynthesis permanently raises dissolved oxygen",
      "decomposition of excess biomass consumes dissolved oxygen",
      "nitrate directly converts water into a strong acid",
      "phosphate stops all microbial respiration"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Nutrient enrichment can drive an algal bloom. When excess biomass dies, microbial decomposition consumes dissolved oxygen, which can cause hypoxia and fish deaths.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-029",
    "section": "Chemistry",
    "topic": "General Principles and Processes of Isolation of Metals",
    "difficulty": "easy",
    "question": "Froth flotation is especially useful for concentrating",
    "options": [
      "carbonate ores",
      "sulphide ores",
      "oxide ores only",
      "native metals only"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Sulphide ore particles can be selectively wetted by oil and carried into froth, enabling concentration by froth flotation.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  },
  {
    "id": "nmims-cet-2026-ch-030",
    "section": "Chemistry",
    "topic": "General Principles and Processes of Isolation of Metals",
    "difficulty": "medium",
    "question": "Why is cryolite added during electrolytic extraction of aluminium from alumina?",
    "options": [
      "It oxidizes aluminium metal",
      "It removes iron by magnetic separation",
      "It converts aluminium into a volatile chloride",
      "It lowers the operating temperature and improves electrolyte conductivity"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Dissolving alumina in molten cryolite lowers the effective melting temperature and improves ionic conductivity for electrolysis.",
    "source": {
      "kind": "original",
      "reference": "NMIMS-CET 2026 official engineering test design and syllabus framework",
      "url": "https://ncet.nmims.edu/",
      "checkedOn": "2026-08-26"
    }
  }
];
