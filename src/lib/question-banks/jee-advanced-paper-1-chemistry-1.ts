import type { Question } from '../questions';

export const JEE_ADVANCED_PAPER_1_CHEMISTRY_1: Question[] = [
  {
    "id": "jee-advanced-p1-ch-001",
    "section": "Chemistry",
    "topic": "Chemical equilibrium",
    "difficulty": "hard",
    "question": "One mole of PCl5 is placed in a 1.0 L vessel and allowed to reach equilibrium for PCl5(g) <=> PCl3(g)+Cl2(g). If Kc=1/3, the degree of dissociation alpha is",
    "options": [
      "(sqrt(13)-1)/6",
      "(sqrt(5)-1)/2",
      "1/3",
      "1/2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "At equilibrium [PCl5]=1-alpha and [PCl3]=[Cl2]=alpha. Thus Kc=alpha^2/(1-alpha)=1/3, giving 3alpha^2+alpha-1=0. The physically acceptable root is alpha=(-1+sqrt(13))/6.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ch-002",
    "section": "Chemistry",
    "topic": "Atomic structure",
    "difficulty": "easy",
    "question": "Among the hydrogen-like species H, He+, Li2+, the radius of the n=2 Bohr orbit is largest for",
    "options": [
      "H",
      "He+",
      "Li2+",
      "all are equal"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For a hydrogen-like ion, r_n is proportional to n^2/Z. At the same n=2, radius decreases with nuclear charge Z, so H has the largest radius.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ch-003",
    "section": "Chemistry",
    "topic": "Organic chemistry",
    "difficulty": "hard",
    "question": "Phenol is treated successively with CHCl3/aqueous NaOH followed by acidification, then the major organic product is oxidized under conditions that convert -CHO to -COOH without destroying the aromatic ring, and finally it is treated with excess acetic anhydride. The principal final product is",
    "options": [
      "2-acetoxybenzoic acid",
      "4-acetoxybenzoic acid",
      "2-formylphenyl acetate",
      "methyl 2-hydroxybenzoate"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "CHCl3/NaOH followed by acidification gives mainly o-hydroxybenzaldehyde by the Reimer-Tiemann reaction. Oxidation converts its aldehyde group to give 2-hydroxybenzoic acid. Acetic anhydride then acetylates the phenolic -OH, producing 2-acetoxybenzoic acid.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ch-004",
    "section": "Chemistry",
    "topic": "Coordination chemistry",
    "difficulty": "hard",
    "question": "A divalent first-row transition metal M forms [MCl4]2-, which is tetrahedral and has two unpaired electrons, and also forms [M(CN)4]2-, which is square planar and diamagnetic. The metal M is",
    "options": [
      "Fe",
      "Co",
      "Ni",
      "Cu"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Both complexes contain M in the +2 oxidation state. Ni2+ is d8. With weak-field Cl- in a tetrahedral complex, d8 has two unpaired electrons. With strong-field CN- in a four-coordinate d8 complex, square-planar splitting gives a diamagnetic configuration. The stated pair is therefore characteristic of Ni2+.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ch-005",
    "section": "Chemistry",
    "topic": "Thermodynamics",
    "difficulty": "hard",
    "question": "For a spontaneous process at constant temperature and pressure, which statements are necessarily true?",
    "options": [
      "Delta G<0 for the system",
      "Delta S_universe>0",
      "The process must be exothermic",
      "At equilibrium Delta G=0"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      3
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At constant T,P, spontaneity requires Delta G<0, equivalent to Delta S_universe>0. A spontaneous process need not be exothermic because entropy can drive an endothermic process. At equilibrium the driving force vanishes and Delta G=0. Thus statements 1,2,4 are true.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ch-006",
    "section": "Chemistry",
    "topic": "Chemical bonding",
    "difficulty": "medium",
    "question": "Which species are linear in their ground-state molecular geometry?",
    "options": [
      "CO2",
      "BeCl2(g)",
      "SO2",
      "XeF2"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      3
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "CO2 is linear by sp hybridization at carbon. Gas-phase BeCl2 is linear. SO2 is bent because sulfur has a lone pair. XeF2 has five electron domains with three equatorial lone pairs, leaving two axial F atoms and a linear molecular shape. Thus 1,2,4 are linear.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ch-007",
    "section": "Chemistry",
    "topic": "Electrochemistry and ionic equilibrium",
    "difficulty": "hard",
    "question": "At 298 K consider the cell Zn(s)|Zn2+(0.010 M)||Ag+(aq)|Ag(s). In the silver half-cell solid AgCl is present and [Cl-]=0.10 M. Take E\u00b0(Ag+/Ag)=0.80 V, E\u00b0(Zn2+/Zn)=-0.76 V, Ksp(AgCl)=1.0\u00d710^-10 and 0.0591 V for 2.303RT/F. Which statements are correct?",
    "options": [
      "[Ag+]=1.0\u00d710^-9 M",
      "The cell emf is approximately 1.09 V",
      "Zinc acts as the anode",
      "Increasing [Cl-] while solid AgCl remains present increases the cell emf"
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
    "explanation": "AgCl(s) imposes [Ag+][Cl-]=10^-10, so [Ag+]=10^-9 M. For Zn+2Ag+\u2192Zn2++2Ag, E\u00b0cell=1.56 V and Q=[Zn2+]/[Ag+]^2=10^-2/10^-18=10^16. Hence E=1.56-(0.0591/2)log10(10^16)=1.0872 V, so zinc is oxidized at the anode. Raising [Cl-] lowers [Ag+] through Ksp and therefore lowers, rather than raises, the cell emf.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ch-008",
    "section": "Chemistry",
    "topic": "Organic chemistry",
    "difficulty": "hard",
    "question": "An aromatic compound A has molecular formula C7H8O, gives the characteristic FeCl3 test of a phenol, and on oxidation of its benzylic side chain gives 4-hydroxybenzoic acid after acidification. Which statements about A are correct?",
    "options": [
      "Heating A with zinc dust can give toluene",
      "Bromine water gives predominantly 2,6-dibromo-4-methylphenol",
      "Oxidation of the side chain with alkaline KMnO4 followed by acidification gives benzoic acid",
      "CHCl3/NaOH followed by acidification can introduce a formyl group ortho to the phenolic -OH"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      3
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The data identify A as p-cresol (4-methylphenol). Zinc dust removes the phenolic oxygen to give toluene. Because the para position to -OH is occupied by CH3, bromination occurs at the two ortho positions, giving 2,6-dibromo-4-methylphenol. Side-chain oxidation retains the phenolic substituent and gives 4-hydroxybenzoic acid, not benzoic acid. Reimer-Tiemann formylation introduces -CHO at an available ortho position.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ch-009",
    "section": "Chemistry",
    "topic": "Mole concept",
    "difficulty": "medium",
    "question": "A 10.0 g mixture contains only Na2CO3 and NaHCO3. On strong heating to constant mass, 1.10 g of CO2 is released. The mass of NaHCO3 initially present, in gram, is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "4.2",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Only NaHCO3 releases CO2: 2NaHCO3 -> Na2CO3+CO2+H2O. Moles CO2=1.10/44=0.025, so moles NaHCO3=0.050. Its mass is 0.050x84=4.20 g.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ch-010",
    "section": "Chemistry",
    "topic": "Electrochemistry and chemical equilibrium",
    "difficulty": "hard",
    "question": "At 298 K, a metal M can exist as M(s), M+(aq) and M2+(aq). The standard reduction potentials are E\u00b0(M+/M)=+0.3000 V and E\u00b0(M2+/M+)=+0.1818 V. A solution initially containing 0.200 M M+ and no M2+ is allowed to reach equilibrium in contact with excess M(s). Assume activities equal molar concentrations and take 2.303RT/F=0.0591 V. The equilibrium concentration of M+, in mmol L^-1, is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "29.22",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The relevant disproportionation is 2M+ -> M2+ + M(s). Its standard cell potential is 0.3000-0.1818=0.1182 V. One electron is transferred, so log10 K=E\u00b0/0.0591=2 and K=100. Let x=[M2+] at equilibrium. Then [M+]=0.200-2x and K=x/(0.200-2x)^2=100. Writing y=[M+], x=(0.200-y)/2 gives 200y^2+y-0.200=0. The physical root is y=(-1+sqrt(161))/400=0.0292214 M. Therefore [M+]=29.22 mmol L^-1.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-advanced-p1-ch-011",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "hard",
    "question": "At 298 K the cell Pt|H2(g, 0.010 bar)|H+(aq)||Ag+(1.0\u00d710^-3 M)|Ag has emf 0.7409 V, with the silver electrode as cathode. Take E\u00b0(Ag+/Ag)=0.800 V and 0.0591 V for 2.303RT/F. The pH of the hydrogen half-cell is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "3.00",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For Ag+/Ag, EAg=0.800+0.0591log10(10^-3)=0.6227 V. For 2H++2e-\u2192H2, EH=-0.0591 pH-(0.0591/2)log10(0.010)=0.0591-0.0591 pH. Therefore Ecell=0.6227-(0.0591-0.0591pH)=0.5636+0.0591pH. Setting this equal to 0.7409 gives pH=3.00.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ch-012",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "medium",
    "question": "A nonvolatile solute of molar mass 100 g mol^-1 is dissolved: 10 g solute in 90 g water. The mole fraction of solute, multiplied by 51, is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "1",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Moles solute=10/100=0.10 mol and moles water=90/18=5 mol. Thus mole fraction of solute=0.10/5.10=1/51. Multiplying by 51 gives exactly 1.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ch-013",
    "section": "Chemistry",
    "topic": "Periodic properties",
    "difficulty": "medium",
    "question": "Match List I with List II. Each item in List I describes a Period 3 element through more than one property. List I: (P) element whose second ionization enthalpy is exceptionally high because its +1 ion has a noble-gas configuration; (Q) element whose first ionization enthalpy is lower than that of Mg and whose oxide is amphoteric; (R) element whose highest oxide has formula XO3 and whose hydride is H2X; (S) element whose monovalent anion is isoelectronic with Ar and which is the most electronegative element of Period 3. List II: (1) Na, (2) Mg, (3) Al, (4) S, (5) Cl. Choose the correct code.",
    "options": [
      "P-1,Q-2,R-4,S-5",
      "P-2,Q-3,R-4,S-5",
      "P-1,Q-3,R-5,S-4",
      "P-1,Q-3,R-4,S-5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Na gives Na+ with the [Ne] configuration, so its second ionization is very large: P-1. Al has lower first ionization enthalpy than Mg because its electron is removed from 3p, and Al2O3 is amphoteric: Q-3. Sulfur forms SO3 and H2S: R-4. Chlorine forms Cl-, which is isoelectronic with Ar, and is the most electronegative Period 3 element: S-5.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ch-014",
    "section": "Chemistry",
    "topic": "Organic chemistry",
    "difficulty": "medium",
    "question": "Match each reaction sequence in List I with its major organic product in List II. List I: (P) CH3CH2OH --PCC--> product A --HCN--> product P; (Q) CH3CH=CH2 --BH3/THF, then H2O2/OH- --> product B --PCC--> product Q; (R) phenol --CHCl3/NaOH, heat; then H+ --> product R; (S) aniline --NaNO2/HCl at 0-5 degree C; then CuCN --> product S. List II: (1) propanal, (2) 2-hydroxybenzaldehyde, (3) benzonitrile, (4) 2-hydroxypropanenitrile, (5) propanone. Choose the correct code.",
    "options": [
      "P-4,Q-5,R-2,S-3",
      "P-4,Q-1,R-2,S-3",
      "P-1,Q-4,R-2,S-3",
      "P-4,Q-1,R-3,S-2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "PCC converts ethanol to ethanal, and HCN gives CH3CH(OH)CN, 2-hydroxypropanenitrile: P-4. Hydroboration-oxidation of propene gives propan-1-ol, which PCC oxidizes to propanal: Q-1. Reimer-Tiemann formylation of phenol gives mainly 2-hydroxybenzaldehyde: R-2. Diazotization followed by CuCN replaces N2+ by CN to give benzonitrile: S-3.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ch-015",
    "section": "Chemistry",
    "topic": "Coordination chemistry",
    "difficulty": "medium",
    "question": "For each complex in List I, let mu_so=sqrt(n(n+2)) BM be its spin-only magnetic moment, where n is the number of unpaired electrons. Match each complex with the value of mu_so^2 in List II. List I: (P) [Cr(H2O)6]3+; (Q) [Co(NH3)6]3+; (R) [FeCl4]-; (S) [Ni(NH3)6]2+. List II: (1) 0; (2) 8; (3) 15; (4) 24; (5) 35. Choose the correct code.",
    "options": [
      "P-3,Q-2,R-5,S-1",
      "P-5,Q-1,R-3,S-2",
      "P-3,Q-1,R-5,S-2",
      "P-3,Q-1,R-2,S-5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Cr3+ is d3 with three unpaired electrons, so mu_so^2=3(3+2)=15: P-3. Co3+ is d6 and [Co(NH3)6]3+ is low spin, so n=0 and mu_so^2=0: Q-1. Fe3+ is d5; tetrahedral [FeCl4]- is high spin with five unpaired electrons, so mu_so^2=35: R-5. Ni2+ is d8 octahedral with two unpaired electrons, so mu_so^2=2(2+2)=8: S-2.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ch-016",
    "section": "Chemistry",
    "topic": "Physical chemistry",
    "difficulty": "medium",
    "question": "Match each physical-chemistry situation in List I with the correct result in List II. List I: (P) one mole of an ideal gas expands reversibly and isothermally from V to 2V; (Q) an ideal gas undergoes free expansion into vacuum in an insulated container; (R) a first-order reaction is allowed to proceed for three half-lives; (S) a galvanic cell is at equilibrium at fixed temperature and pressure. List II: (1) Delta U=0 and heat absorbed equals nRT ln2; (2) q=0, w=0 and Delta U=0; (3) fraction of reactant remaining is 1/8; (4) Ecell=0 and Delta G=0; (5) fraction of reactant remaining is 1/4. Choose the correct code.",
    "options": [
      "P-1,Q-2,R-3,S-4",
      "P-2,Q-1,R-3,S-4",
      "P-1,Q-2,R-5,S-4",
      "P-1,Q-4,R-3,S-2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For an ideal gas in a reversible isothermal expansion, Delta U=0 and q=w_by=nRT ln2: P-1. In insulated free expansion of an ideal gas, q=w=Delta U=0: Q-2. Three first-order half-lives leave (1/2)^3=1/8: R-3. At electrochemical equilibrium, Delta G=0 and therefore Ecell=0: S-4.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  }
];
