import type { Question } from '../questions';

type Difficulty = 'easy' | 'medium' | 'hard';
type Mcq = [string, Difficulty, string, string[], number, string, number];
type Multi = [string, Difficulty, string, string[], number[], string];
type Numeric = [string, Difficulty, string, string, string, number];

const source = {
  kind: 'original' as const,
  reference: 'JEE (Advanced) 2026 syllabus and Paper 1 format',
  url: 'https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf',
  checkedOn: '9 August 2026',
};

const singles: Mcq[] = [
  ['Atomic structure', 'medium', 'The maximum number of electrons that can occupy all orbitals with principal quantum number n=3 is', ['18', '8', '9', '32'], 0, 'A shell with principal quantum number n accommodates at most 2n^2 electrons, so n=3 gives 18.', 3],
  ['Ionic equilibrium', 'medium', 'At 25 degrees Celsius, the pH of 1.0 x 10^-3 M HCl is', ['2', '3', '11', '1'], 1, 'HCl is a strong acid, so [H+]=10^-3 M and pH=3.', 3],
  ['Chemical bonding', 'medium', 'The molecular geometry of SF6 is', ['Tetrahedral', 'Trigonal bipyramidal', 'Octahedral', 'Square planar'], 2, 'Six S-F bonding pairs and no lone pair on sulfur produce an octahedral arrangement.', 3],
  ['Redox chemistry', 'medium', 'The oxidation state of chromium in K2Cr2O7 is', ['+2', '+3', '+4', '+6'], 3, 'Charge balance gives 2(+1)+2x+7(-2)=0, hence x=+6.', 3],
];

const multis: Multi[] = [
  ['Gaseous state', 'medium', 'Which statements are valid for an ideal gas?', ['Internal energy depends only on temperature', 'For one mole, Cp-Cv=R', 'Its compressibility factor is 1', 'Intermolecular forces are neglected'], [0, 1, 2, 3], 'All four statements are defining consequences of the ideal-gas model.',],
  ['Periodic properties', 'hard', 'Which statements about the halogens are correct?', ['Fluorine is the most electronegative element', 'The electron-gain enthalpy of chlorine is more negative than that of fluorine', 'Atomic radius generally increases down the group', 'Oxidizing strength generally decreases from F2 to I2'], [0, 1, 2, 3], 'Fluorine is most electronegative, but its compact shell makes chlorine electron gain more exothermic. Size increases and oxidizing strength decreases down the group.',],
  ['Aromatic compounds', 'medium', 'Which statements about benzene are correct?', ['It commonly undergoes electrophilic substitution', 'Nitration gives nitrobenzene', 'Complete catalytic hydrogenation gives cyclohexane', 'It readily decolorizes bromine water without a catalyst'], [0, 1, 2], 'Aromatic stabilization favours substitution. Nitration and complete hydrogenation give the stated products, while uncatalysed bromine water is not readily decolorized.',],
  ['Biomolecules', 'medium', 'Which statements about alpha-amino acids and proteins are correct?', ['Amino acids can exist as zwitterions', 'A peptide bond is an amide linkage', 'Glycine is achiral', 'Proteins are polymers of alpha-amino acids'], [0, 1, 2, 3], 'Each statement is a standard structural property of amino acids or proteins.',],
];

const numerics: Numeric[] = [
  ['Mole concept', 'easy', 'Enter the number of moles in 18 g of water.', '1', 'The molar mass of water is 18 g/mol, so the amount is 1 mol.', 4],
  ['Mole concept', 'medium', 'A sample contains 0.5 mol of helium atoms. Enter the number of atoms as a multiple of Avogadro constant.', '0.5', 'The number of atoms is 0.5 times the Avogadro constant.', 4],
  ['Redox chemistry', 'medium', 'Enter the oxidation state of manganese in KMnO4.', '7', 'Charge balance gives +1+x+4(-2)=0, so x=+7.', 4],
  ['Ionic equilibrium', 'medium', 'At 25 degrees Celsius, enter the pH of 0.010 M NaOH.', '12', 'pOH=2 for a strong base concentration of 10^-2 M, hence pH=14-2=12.', 4],
];

const matches: Mcq[] = [
  ['Organic functional groups', 'medium', 'Match each compound with its principal functional group: P: ethanol; Q: propanone; R: ethanoic acid; S: aniline. List II: (1) hydroxyl, (2) ketone carbonyl, (3) carboxyl, (4) amino, (5) ether.', ['P-2, Q-1, R-3, S-4', 'P-1, Q-3, R-2, S-4', 'P-4, Q-2, R-3, S-1', 'P-1, Q-2, R-3, S-4'], 3, 'Ethanol, propanone, ethanoic acid, and aniline contain hydroxyl, ketone, carboxyl, and amino groups respectively.', 4],
  ['Hybridisation', 'medium', 'Match the central carbon or atom with hybridisation: P: CH4 carbon; Q: C2H4 carbon; R: C2H2 carbon; S: BF3 boron. List II: (1) sp, (2) sp2, (3) sp3, (4) dsp2, (5) sp3d.', ['P-3, Q-1, R-2, S-2', 'P-2, Q-3, R-1, S-2', 'P-3, Q-2, R-1, S-2', 'P-3, Q-2, R-1, S-4'], 2, 'The hybridisations are sp3, sp2, sp, and sp2 respectively.', 4],
  ['Separation methods', 'medium', 'Match each method with its main basis: P: distillation; Q: chromatography; R: filtration; S: sublimation. List II: (1) particle size, (2) volatility or boiling point, (3) differential adsorption or partition, (4) direct solid-vapour transition, (5) magnetic property.', ['P-3, Q-2, R-1, S-4', 'P-2, Q-3, R-1, S-4', 'P-2, Q-1, R-3, S-4', 'P-4, Q-3, R-1, S-2'], 1, 'The methods rely on boiling-point difference, differential partition, particle-size exclusion, and sublimability respectively.', 4],
  ['Thermodynamics', 'hard', 'Match each quantity with its relation: P: enthalpy H; Q: Gibbs energy G; R: entropy change for reversible heat; S: internal-energy change. List II: (1) U+PV, (2) H-TS, (3) q_rev/T, (4) q+w, (5) PV=nRT.', ['P-1, Q-2, R-3, S-4', 'P-2, Q-1, R-4, S-3', 'P-1, Q-3, R-2, S-4', 'P-4, Q-2, R-3, S-1'], 0, 'These are the definitions of enthalpy and Gibbs energy, the reversible entropy relation, and the first-law expression.', 4],
];

export const JEE_ADVANCED_PAPER_1_CHEMISTRY_1: Question[] = [
  ...singles.map(([topic, difficulty, question, options, correctIndex, explanation, marks], index) => ({ id: `jee-advanced-p1-ch-${String(index + 1).padStart(3, '0')}`, section: 'Chemistry', topic, difficulty, question, options, correctIndex, answerType: 'mcq' as const, marks, negativeMarking: 1, explanation, source })),
  ...multis.map(([topic, difficulty, question, options, correctIndices, explanation], index) => ({ id: `jee-advanced-p1-ch-${String(index + 5).padStart(3, '0')}`, section: 'Chemistry', topic, difficulty, question, options, correctIndex: -1, correctIndices, answerType: 'multi-select' as const, partialMarking: true, marks: 4, negativeMarking: 1, explanation, source })),
  ...numerics.map(([topic, difficulty, question, correctValue, explanation, marks], index) => ({ id: `jee-advanced-p1-ch-${String(index + 9).padStart(3, '0')}`, section: 'Chemistry', topic, difficulty, question, options: [], correctIndex: -1, correctValue, answerType: 'numerical' as const, maxDecimalPlaces: 2, marks, negativeMarking: 0, explanation, source })),
  ...matches.map(([topic, difficulty, question, options, correctIndex, explanation, marks], index) => ({ id: `jee-advanced-p1-ch-${String(index + 13).padStart(3, '0')}`, section: 'Chemistry', topic, difficulty, question, options, correctIndex, answerType: 'mcq' as const, marks, negativeMarking: 1, explanation, source })),
];
