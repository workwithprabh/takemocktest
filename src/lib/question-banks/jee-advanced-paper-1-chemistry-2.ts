import type { Question } from '../questions';

type Difficulty = 'easy' | 'medium' | 'hard';
type Mcq = [string, Difficulty, string, string[], number, string, number];
type Multi = [string, Difficulty, string, string[], number[], string];
type Numeric = [string, Difficulty, string, string, string, number];

const source = {
  kind: 'original' as const,
  reference: 'JEE (Advanced) 2026 syllabus and Paper 1 format',
  url: 'https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf',
  checkedOn: '24 August 2026',
};

const singles: Mcq[] = [
  ['Thermodynamics', 'medium', 'For an exothermic reaction, the standard enthalpy change delta H is', ['Negative', 'Positive', 'Zero', 'Cannot be determined'], 0, 'An exothermic reaction releases heat to the surroundings, so its enthalpy change is negative.', 3],
  ['Chemical kinetics', 'medium', 'For a reaction whose rate constant k has units of mol L^-1 s^-1, the order of the reaction is', ['First order', 'Zero order', 'Second order', 'Third order'], 1, 'For a zero-order reaction, rate=k, so k carries the same units as rate itself: mol L^-1 s^-1.', 3],
  ['p-Block elements', 'medium', 'Among the hydrogen halides, the strongest reducing agent in aqueous solution is', ['HF', 'HCl', 'HI', 'HBr'], 2, 'The H-I bond is weakest among the hydrogen halides, so iodide is most easily oxidized, making HI the strongest reducing agent.', 3],
  ['Coordination chemistry', 'medium', 'The oxidation state of iron in [Fe(CN)6]^4- is', ['+3', '+4', '+6', '+2'], 3, 'Each cyanide ligand carries a -1 charge; with 6 ligands and an overall -4 charge, iron must be +2.', 3],
];

const multis: Multi[] = [
  ['Chemical bonding', 'medium', 'Which statements about NH3 and BF3 are correct?', ['NH3 has a lone pair on nitrogen', 'BF3 is an electron-deficient (Lewis acid) molecule', 'NH3 can act as a Lewis base', 'BF3 has a pyramidal geometry'], [0, 1, 2], 'NH3 has a lone pair enabling Lewis base behaviour, while BF3 is electron-deficient and trigonal planar, not pyramidal.'],
  ['Electrochemistry', 'medium', 'For the electrolysis of aqueous copper sulfate using inert platinum electrodes, which statements are correct?', ['Copper is deposited at the cathode', 'Oxygen gas is evolved at the anode', 'The amount deposited is governed by Faraday\'s laws', 'The process requires no external EMF source'], [0, 1, 2], 'Copper is reduced and deposited at the cathode, oxygen is evolved at the anode, and Faraday\'s laws govern the amounts. Electrolysis, unlike a galvanic cell, requires an external EMF source.'],
  ['Solid state', 'medium', 'Which statements about a face-centred cubic (FCC) unit cell are correct?', ['It contains 4 atoms per unit cell', 'The coordination number is 12', 'Its packing efficiency is about 74%', 'Atoms touch along the body diagonal'], [0, 1, 2], 'FCC has 4 atoms per cell, coordination number 12, and 74% packing efficiency. In FCC, atoms touch along the face diagonal, not the body diagonal (that describes BCC).'],
  ['Organic reaction mechanisms', 'medium', 'Which statements about SN2 reactions are correct?', ['The reaction proceeds via a single concerted step', 'It shows inversion of configuration at the reacting carbon', 'It is favoured by primary alkyl halides over tertiary alkyl halides', 'The rate depends only on the substrate concentration, not the nucleophile'], [0, 1, 2], 'SN2 is a concerted, one-step mechanism with Walden inversion, favoured by less hindered primary substrates. Its rate depends on both substrate and nucleophile concentrations.'],
];

const numerics: Numeric[] = [
  ['Mole concept', 'easy', 'Enter the number of moles of oxygen atoms present in 2 mol of CO2.', '4', 'Each CO2 molecule has 2 oxygen atoms, so 2 mol CO2 contains 4 mol of oxygen atoms.', 4],
  ['Thermochemistry', 'medium', 'For a reaction, delta H = -92 kJ/mol and delta S = -198 J/(K.mol) at 298 K. Enter delta G in kJ/mol, rounded to two decimal places.', '-33.00', 'delta G = delta H - T delta S = -92 - 298(-0.198) = -92 + 59.004, approximately -33.00 kJ/mol.', 4],
  ['Ionic equilibrium', 'medium', 'Enter the pOH of a solution with hydroxide ion concentration 1.0 x 10^-4 M.', '4', 'pOH = -log(1.0 x 10^-4) = 4.', 4],
  ['Chemical kinetics', 'medium', 'A first-order reaction has a rate constant of 0.0693 per minute. Enter its half-life in minutes.', '10', 'Half-life = ln(2)/k = 0.693/0.0693 = 10 minutes.', 4],
];

const matches: Mcq[] = [
  ['Electrochemistry', 'medium', 'Match each term with its definition: P: standard hydrogen electrode; Q: salt bridge; R: molar conductivity; S: EMF of a cell. List II: (1) conductivity divided by molar concentration, (2) reference electrode assigned 0 V potential, (3) maintains electrical neutrality between half-cells, (4) potential difference between electrodes at zero current, (5) potential difference under load.', ['P-2, Q-3, R-1, S-4', 'P-1, Q-3, R-2, S-4', 'P-3, Q-2, R-4, S-1', 'P-4, Q-1, R-3, S-2'], 0, 'The SHE is a reference electrode at 0 V, the salt bridge maintains neutrality, molar conductivity is conductivity per unit concentration, and EMF is the zero-current potential difference.', 4],
  ['Periodic table', 'medium', 'Match each element with its group classification: P: sodium; Q: calcium; R: fluorine; S: argon. List II: (1) noble gas, (2) halogen, (3) alkali metal, (4) alkaline earth metal, (5) transition metal.', ['P-4, Q-3, R-1, S-2', 'P-3, Q-4, R-2, S-1', 'P-2, Q-4, R-3, S-1', 'P-1, Q-4, R-2, S-3'], 1, 'Sodium is an alkali metal, calcium is an alkaline earth metal, fluorine is a halogen, and argon is a noble gas.', 4],
  ['Organic reactions', 'medium', 'Match each reagent with its primary use: P: Tollens\' reagent; Q: Lucas reagent; R: Grignard reagent; S: Fehling\'s solution. List II: (1) distinguishing alcohols by reactivity, (2) test for aldehydes (silver mirror), (3) forms carbon-carbon bonds with carbonyl compounds, (4) test for reducing sugars and aldehydes, (5) test for alkenes.', ['P-1, Q-2, R-4, S-3', 'P-4, Q-1, R-2, S-3', 'P-2, Q-1, R-3, S-4', 'P-2, Q-3, R-1, S-4'], 2, 'Tollens\' reagent gives the silver mirror test for aldehydes, Lucas reagent distinguishes alcohols by reactivity, Grignard reagent forms C-C bonds, and Fehling\'s solution tests reducing sugars.', 4],
  ['Chemical bonding', 'medium', 'Match each species with the hybridisation of its central atom: P: NH3 nitrogen; Q: BF3 boron; R: BeCl2 beryllium; S: PCl5 phosphorus. List II: (1) sp, (2) sp2, (3) sp3, (4) sp3d, (5) sp3d2.', ['P-2, Q-3, R-4, S-1', 'P-1, Q-3, R-2, S-4', 'P-4, Q-2, R-1, S-3', 'P-3, Q-2, R-1, S-4'], 3, 'NH3 nitrogen is sp3, BF3 boron is sp2, BeCl2 beryllium is sp, and PCl5 phosphorus is sp3d.', 4],
];

export const JEE_ADVANCED_PAPER_1_CHEMISTRY_2: Question[] = [
  ...singles.map(([topic, difficulty, question, options, correctIndex, explanation, marks], index) => ({ id: `jee-advanced-p1-ch2-${String(index + 1).padStart(3, '0')}`, section: 'Chemistry', topic, difficulty, question, options, correctIndex, answerType: 'mcq' as const, marks, negativeMarking: 1, explanation, source })),
  ...multis.map(([topic, difficulty, question, options, correctIndices, explanation], index) => ({ id: `jee-advanced-p1-ch2-${String(index + 5).padStart(3, '0')}`, section: 'Chemistry', topic, difficulty, question, options, correctIndex: -1, correctIndices, answerType: 'multi-select' as const, partialMarking: true, marks: 4, negativeMarking: 1, explanation, source })),
  ...numerics.map(([topic, difficulty, question, correctValue, explanation, marks], index) => ({ id: `jee-advanced-p1-ch2-${String(index + 9).padStart(3, '0')}`, section: 'Chemistry', topic, difficulty, question, options: [], correctIndex: -1, correctValue, answerType: 'numerical' as const, maxDecimalPlaces: 2, marks, negativeMarking: 0, explanation, source })),
  ...matches.map(([topic, difficulty, question, options, correctIndex, explanation, marks], index) => ({ id: `jee-advanced-p1-ch2-${String(index + 13).padStart(3, '0')}`, section: 'Chemistry', topic, difficulty, question, options, correctIndex, answerType: 'mcq' as const, marks, negativeMarking: 1, explanation, source })),
];
