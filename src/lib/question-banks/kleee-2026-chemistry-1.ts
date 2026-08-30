import type { Question } from '../questions';

export const KLEEE_2026_CHEMISTRY_1: Question[] = [
  {
    "id": "kleee-2026-ch-001",
    "section": "Chemistry",
    "topic": "Stoichiometry",
    "difficulty": "easy",
    "question": "A mixture contains 4.0 g of H2 and 16.0 g of O2. It is ignited to form water completely. The mass of water formed is",
    "options": [
      "9 g",
      "16 g",
      "18 g",
      "36 g"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "4.0 g H2 is 2 mol and 16.0 g O2 is 0.5 mol. O2 is limiting; 0.5 mol O2 forms 1 mol H2O, whose mass is 18 g.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-002",
    "section": "Chemistry",
    "topic": "Atomic Structure",
    "difficulty": "medium",
    "question": "Using the approximate relation lambda(angstrom)=12.27/sqrt(V) for an electron accelerated through V volts, the de Broglie wavelength for 150 V is closest to",
    "options": [
      "1.00 angstrom",
      "0.50 angstrom",
      "1.50 angstrom",
      "2.00 angstrom"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "lambda=12.27/sqrt(150) angstrom, which is approximately 1.00 angstrom.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-003",
    "section": "Chemistry",
    "topic": "Thermochemistry",
    "difficulty": "hard",
    "question": "Given standard enthalpies of combustion: CH4 = -890 kJ mol^-1, C(graphite) = -394 kJ mol^-1 and H2 = -286 kJ mol^-1, the standard enthalpy of formation of CH4 is",
    "options": [
      "+76 kJ mol^-1",
      "-76 kJ mol^-1",
      "-104 kJ mol^-1",
      "-152 kJ mol^-1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For combustion of CH4, -890=[-394+2(-286)]-Delta H_f(CH4)=-966-Delta H_f. Therefore Delta H_f(CH4)=-76 kJ mol^-1.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-004",
    "section": "Chemistry",
    "topic": "Chemical Equilibrium",
    "difficulty": "medium",
    "question": "For H2(g)+I2(g) <=> 2HI(g), the equilibrium concentrations are [H2]=0.20 M, [I2]=0.20 M and [HI]=1.60 M. The value of Kc is",
    "options": [
      "16",
      "32",
      "48",
      "64"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Kc=[HI]^2/([H2][I2])=(1.60)^2/(0.20*0.20)=2.56/0.04=64.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-005",
    "section": "Chemistry",
    "topic": "Ionic Equilibrium",
    "difficulty": "medium",
    "question": "100 mL of 0.10 M HCl is mixed with 100 mL of 0.05 M NaOH at 25 C. The pH of the final solution is approximately",
    "options": [
      "1.30",
      "1.60",
      "2.00",
      "12.40"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "H+ moles=0.010 and OH- moles=0.005, leaving 0.005 mol H+ in 0.200 L, so [H+]=0.025 M. pH=-log(0.025) approximately 1.60.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-006",
    "section": "Chemistry",
    "topic": "Electrochemistry",
    "difficulty": "hard",
    "question": "For the cell Zn|Zn2+(0.10 M)||Cu2+(1.0 M)|Cu at 298 K, E degree cell=1.10 V. Using E=E degree-(0.0591/n)log Q, the cell emf is closest to",
    "options": [
      "1.07 V",
      "1.10 V",
      "1.13 V",
      "1.16 V"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For Zn+Cu2+ -> Zn2+ + Cu, Q=[Zn2+]/[Cu2+]=0.10 and n=2. Hence E=1.10-(0.0591/2)log(0.10)=1.10+0.02955 approximately 1.13 V.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-007",
    "section": "Chemistry",
    "topic": "Chemical Kinetics",
    "difficulty": "easy",
    "question": "A first-order reaction has a half-life of 20 min. The time required for 87.5% completion is",
    "options": [
      "60 min",
      "40 min",
      "80 min",
      "100 min"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "87.5% completion means 12.5%=1/8 remains. That is three half-lives, so time=3*20=60 min.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-008",
    "section": "Chemistry",
    "topic": "Solutions",
    "difficulty": "medium",
    "question": "0.10 mol of urea is dissolved in 900 g of water. If Kf for water is 1.86 K kg mol^-1, the depression in freezing point is closest to",
    "options": [
      "0.10 K",
      "0.15 K",
      "0.18 K",
      "0.21 K"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Molality=0.10/0.900=0.111 mol kg^-1. For urea i=1, so Delta Tf=1.86*0.111 approximately 0.207 K, closest to 0.21 K.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-009",
    "section": "Chemistry",
    "topic": "Periodic Trends",
    "difficulty": "easy",
    "question": "Among Na, Mg and Al in the same period, the smallest atomic radius is that of",
    "options": [
      "Na",
      "Mg",
      "Al",
      "All are equal"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Across a period, effective nuclear charge generally increases and atomic radius decreases. Hence Al is smallest among Na, Mg and Al.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-010",
    "section": "Chemistry",
    "topic": "Molecular Orbital Theory",
    "difficulty": "medium",
    "question": "According to molecular orbital theory, the bond order of O2+ is",
    "options": [
      "2.0",
      "2.5",
      "1.5",
      "3.0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "O2 has bond order 2. Removing one electron from an antibonding pi* orbital to form O2+ increases bond order by 0.5, giving 2.5.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-011",
    "section": "Chemistry",
    "topic": "Chemical Bonding and VSEPR",
    "difficulty": "medium",
    "question": "The molecular shape of SF4 is",
    "options": [
      "Tetrahedral",
      "Square planar",
      "Trigonal planar",
      "See-saw"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "SF4 has five electron domains around sulfur: four bonding pairs and one lone pair. In a trigonal-bipyramidal electron arrangement, one equatorial lone pair gives a see-saw molecular shape.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-012",
    "section": "Chemistry",
    "topic": "Coordination Compounds",
    "difficulty": "medium",
    "question": "For [Co(NH3)5Cl]Cl2, the oxidation state of Co and the coordination number of Co are respectively",
    "options": [
      "+3 and 6",
      "+2 and 6",
      "+3 and 5",
      "+2 and 5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The complex ion has charge +2. With NH3 neutral and coordinated Cl carrying -1, x-1=+2 so Co is +3. Five NH3 plus one Cl give coordination number 6.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-013",
    "section": "Chemistry",
    "topic": "Coordination Isomerism",
    "difficulty": "easy",
    "question": "The number of geometrical isomers possible for square-planar [Pt(NH3)2Cl2] is",
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Two arrangements are possible: cis, with like ligands adjacent, and trans, with like ligands opposite. Hence there are 2 geometrical isomers.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-014",
    "section": "Chemistry",
    "topic": "d-Block Elements",
    "difficulty": "medium",
    "question": "The spin-only magnetic moment of a high-spin Fe3+ ion is closest to",
    "options": [
      "4.90 BM",
      "5.92 BM",
      "3.87 BM",
      "6.93 BM"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Fe3+ is 3d5 and high spin, so it has 5 unpaired electrons. mu=sqrt[n(n+2)]=sqrt(35)=5.92 BM.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-015",
    "section": "Chemistry",
    "topic": "p-Block Elements",
    "difficulty": "medium",
    "question": "When chlorine reacts with cold dilute NaOH, the chlorine atoms in the products have oxidation states",
    "options": [
      "-1 and +1",
      "0 and +1",
      "-1 and +5",
      "+1 and +5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Cold dilute alkali disproportionates Cl2 to chloride and hypochlorite: Cl2+2OH- -> Cl-+ClO-+H2O. Chlorine is therefore in -1 and +1 states.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-016",
    "section": "Chemistry",
    "topic": "Transition Elements",
    "difficulty": "easy",
    "question": "The oxidation state of Mn in KMnO4 is",
    "options": [
      "+4",
      "+5",
      "+6",
      "+7"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "K is +1 and each O is -2. Charge balance gives 1+x-8=0, so x=+7.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-017",
    "section": "Chemistry",
    "topic": "General Organic Chemistry",
    "difficulty": "medium",
    "question": "Which of the following is the strongest acid?",
    "options": [
      "p-Cresol",
      "p-Nitrophenol",
      "Phenol",
      "Cyclohexanol"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The nitro group strongly withdraws electron density and stabilizes the p-nitrophenoxide ion by resonance and induction. Thus p-nitrophenol is more acidic than phenol, p-cresol and cyclohexanol.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-018",
    "section": "Chemistry",
    "topic": "Stereochemistry",
    "difficulty": "medium",
    "question": "Ignoring conformers, the number of stereoisomers of 2-butanol is",
    "options": [
      "1",
      "4",
      "2",
      "3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Carbon-2 is attached to four different groups, so it is one stereogenic center. A molecule with one such center has two enantiomers.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-019",
    "section": "Chemistry",
    "topic": "Hydrocarbons",
    "difficulty": "hard",
    "question": "Reductive ozonolysis of 2-methylpropene gives",
    "options": [
      "Acetone and formaldehyde",
      "Two molecules of acetaldehyde",
      "Acetone only",
      "Formaldehyde only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Cleavage of CH2=C(CH3)2 gives HCHO from the terminal CH2 carbon and (CH3)2CO from the substituted carbon.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-020",
    "section": "Chemistry",
    "topic": "Haloalkanes",
    "difficulty": "medium",
    "question": "Under conditions favoring an SN1 reaction, which substrate reacts fastest?",
    "options": [
      "Ethyl chloride",
      "Isopropyl chloride",
      "n-Propyl chloride",
      "tert-Butyl chloride"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "SN1 rate is controlled by carbocation formation. tert-Butyl chloride forms a tertiary carbocation, which is much more stable than secondary or primary carbocations.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-021",
    "section": "Chemistry",
    "topic": "Alcohols and Ethers",
    "difficulty": "medium",
    "question": "Oxidation of 1-propanol with PCC gives mainly",
    "options": [
      "Propanoic acid",
      "Propanone",
      "Propanal",
      "Propene"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "PCC oxidizes a primary alcohol to the aldehyde without normally continuing to the carboxylic acid. Thus 1-propanol gives propanal.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-022",
    "section": "Chemistry",
    "topic": "Aldehydes and Ketones",
    "difficulty": "medium",
    "question": "The aldol addition product formed from ethanal under dilute base, before dehydration, is",
    "options": [
      "3-Hydroxybutanal",
      "But-2-enal",
      "Butan-2-one",
      "Ethane-1,2-diol"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The enolate of ethanal adds to another ethanal molecule to give CH3-CH(OH)-CH2-CHO, which is 3-hydroxybutanal.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-023",
    "section": "Chemistry",
    "topic": "Aldehydes and Ketones",
    "difficulty": "hard",
    "question": "Benzaldehyde is treated with concentrated KOH. The principal organic products are",
    "options": [
      "Benzoic acid and benzene",
      "Benzyl alcohol and potassium benzoate",
      "Phenol and potassium formate",
      "Benzyl alcohol and acetophenone"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Benzaldehyde has no alpha hydrogen, so it undergoes the Cannizzaro reaction. One molecule is reduced to benzyl alcohol and another is oxidized to benzoate, present as potassium benzoate.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-024",
    "section": "Chemistry",
    "topic": "Amines",
    "difficulty": "medium",
    "question": "Aniline is treated with NaNO2 and HCl at 0-5 C. The main product is",
    "options": [
      "Nitrobenzene",
      "Phenol",
      "Chlorobenzene",
      "Benzenediazonium chloride"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Nitrous acid generated in situ diazotizes aniline at 0-5 C to benzenediazonium chloride.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "kleee-2026-ch-025",
    "section": "Chemistry",
    "topic": "Biomolecules",
    "difficulty": "easy",
    "question": "Which of the following is a non-reducing sugar?",
    "options": [
      "Glucose",
      "Fructose",
      "Sucrose",
      "Maltose"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Sucrose has both anomeric carbons tied up in the glycosidic bond, so it cannot open to a free reducing carbonyl form. It is non-reducing.",
    "source": {
      "kind": "original",
      "reference": "KLEEE 2026 official question-count/duration framework and current official-linked model-paper calibration",
      "url": "https://admissions.kluniversity.in/",
      "checkedOn": "2026-08-27"
    }
  }
];
