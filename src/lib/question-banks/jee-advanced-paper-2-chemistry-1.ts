import type { Question } from '../questions';

type Difficulty = 'easy' | 'medium' | 'hard';
type Mcq = [string, Difficulty, string, string[], number, string];
type Multi = [string, Difficulty, string, string[], number[], string];
type Numeric = [string, Difficulty, string, string, string, number];

const source = {
  kind: 'original' as const,
  reference: 'JEE (Advanced) 2026 syllabus and Paper 2 format',
  url: 'https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf',
  checkedOn: '9 August 2026',
};

const singles: Mcq[] = [
  ['Molecular orbital theory', 'medium', 'The bond order of O2 in its ground state is', ['1', '2', '2.5', '3'], 1, 'O2 has eight bonding and four antibonding electrons, so bond order=(8-4)/2=2.',],
  ['Organic nomenclature', 'medium', 'The IUPAC name of CH3CH2CHO is', ['Propanone', 'Ethanol', 'Propanal', 'Propanoic acid'], 2, 'The three-carbon aldehyde is propanal.',],
  ['Chemical equilibrium', 'medium', 'Adding a catalyst to a system already at equilibrium changes which quantity?', ['Equilibrium constant', 'Equilibrium composition', 'Reaction enthalpy', 'Neither equilibrium constant nor equilibrium composition'], 3, 'A catalyst accelerates forward and reverse reactions equally, changing only the rate of attaining equilibrium.',],
  ['Transition elements', 'medium', 'Many transition-metal ions are coloured mainly because of', ['Electronic transitions involving split d levels', 'Nuclear transitions', 'Proton transfer', 'Metallic conductivity alone'], 0, 'Ligand fields split d orbitals, allowing absorption of visible light through d-level electronic transitions.',],
];

const multis: Multi[] = [
  ['Chemical equilibrium', 'hard', 'Which statements about equilibrium are correct?', ['Increasing pressure favours the side with fewer gas moles when gas mole counts differ', 'A catalyst does not change the equilibrium constant', 'Changing temperature can change the equilibrium constant', 'Adding an inert gas at constant volume does not shift an ideal-gas equilibrium'], [0, 1, 2, 3], 'Pressure, catalyst, temperature, and constant-volume inert-gas effects follow directly from reaction quotient and equilibrium-constant principles.',],
  ['Electrochemistry', 'medium', 'For a galvanic cell operating spontaneously, which statements are correct?', ['Oxidation occurs at the anode', 'Reduction occurs at the cathode', 'Electrons move through the external circuit from anode to cathode', 'The anode is negative relative to the cathode'], [0, 1, 2, 3], 'All four statements describe a discharging galvanic cell.',],
  ['Stereochemistry', 'hard', 'Which statements are correct?', ['2-butanol is chiral', 'A racemic mixture is optically inactive', 'Enantiomers have identical physical properties in an achiral environment except optical rotation', 'An SN1 reaction at a stereocentre often gives substantial racemisation'], [0, 1, 2, 3], 'These are standard consequences of molecular chirality and planar carbocation formation in SN1 reactions.',],
  ['Coordination chemistry', 'medium', 'Which statements about common coordination compounds and ligands are correct?', ['CN- is an anionic ligand', 'NH3 is a neutral ligand', 'EDTA can act as a hexadentate ligand', 'The coordination number of cobalt in [Co(NH3)6]3+ is 6'], [0, 1, 2, 3], 'The ligand charges, denticity of EDTA, and six cobalt-nitrogen coordinate bonds establish all four statements.',],
  ['Solutions', 'medium', 'Which are colligative properties or effects governed by solute-particle number in dilute solution?', ['Relative lowering of vapour pressure', 'Elevation of boiling point', 'Depression of freezing point', 'Osmotic pressure'], [0, 1, 2, 3], 'All four depend on the number of dissolved particles rather than their chemical identity in the ideal dilute limit.',],
];

const numerics: Numeric[] = [
  ['Mole concept', 'easy', 'Using C=12 and O=16, enter the molar mass of CO2 in g/mol.', '44', 'The molar mass is 12+2(16)=44 g/mol.', 4],
  ['Buffer solutions', 'hard', 'A buffer contains equal concentrations of a weak acid and its conjugate base. If pKa=4.76, enter its pH.', '4.76', 'The Henderson-Hasselbalch equation gives pH=pKa+log(1)=4.76.', 4],
  ['Electrochemistry', 'medium', 'Enter the number of faradays required to deposit one mole of silver from Ag+.', '1', 'The reduction Ag+ + e- -> Ag requires one mole of electrons per mole of silver.', 4],
  ['Hydrocarbons', 'medium', 'Enter the number of constitutional isomers of butane.', '2', 'Butane has the straight-chain and 2-methylpropane structures.', 4],
  ['Chemical bonding', 'medium', 'Enter the number of sigma bonds in one molecule of ethane.', '7', 'Ethane has six C-H sigma bonds and one C-C sigma bond.', 4],
  ['Chemical kinetics', 'medium', 'A first-order reaction has rate constant ln(2)/10 per minute. Enter its half-life in minutes.', '10', 'For a first-order process, t_half=ln(2)/k=10 min.', 2],
  ['Chemical kinetics', 'medium', 'A first-order reaction has half-life 10 minutes. Enter the percentage remaining after 30 minutes.', '12.5', 'Thirty minutes is three half-lives, leaving (1/2)^3=1/8=12.5 percent.', 2],
  ['Electrochemistry', 'medium', 'For Zn|Zn2+||Cu2+|Cu, E(Cu2+/Cu)=0.34 V and E(Zn2+/Zn)=-0.76 V. Enter the standard cell potential in volts.', '1.10', 'Ecell=Ecathode-Eanode=0.34-(-0.76)=1.10 V.', 2],
  ['Electrochemistry', 'medium', 'For the Zn-Cu galvanic cell, enter the number of electrons transferred in the balanced cell reaction.', '2', 'Zinc gives two electrons and Cu2+ accepts those two electrons.', 2],
];

export const JEE_ADVANCED_PAPER_2_CHEMISTRY_1: Question[] = [
  ...singles.map(([topic, difficulty, question, options, correctIndex, explanation], index) => ({ id: `jee-advanced-p2-ch-${String(index + 1).padStart(3, '0')}`, section: 'Chemistry', topic, difficulty, question, options, correctIndex, answerType: 'mcq' as const, marks: 3, negativeMarking: 1, explanation, source })),
  ...multis.map(([topic, difficulty, question, options, correctIndices, explanation], index) => ({ id: `jee-advanced-p2-ch-${String(index + 5).padStart(3, '0')}`, section: 'Chemistry', topic, difficulty, question, options, correctIndex: -1, correctIndices, answerType: 'multi-select' as const, partialMarking: true, marks: 4, negativeMarking: 1, explanation, source })),
  ...numerics.map(([topic, difficulty, question, correctValue, explanation, marks], index) => ({ id: `jee-advanced-p2-ch-${String(index + 10).padStart(3, '0')}`, section: 'Chemistry', topic, difficulty, question, options: [], correctIndex: -1, correctValue, answerType: 'numerical' as const, maxDecimalPlaces: 2, marks, negativeMarking: 0, explanation, source })),
];
