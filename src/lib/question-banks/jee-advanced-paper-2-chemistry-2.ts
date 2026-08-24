import type { Question } from '../questions';

type Difficulty = 'easy' | 'medium' | 'hard';
type Mcq = [string, Difficulty, string, string[], number, string];
type Multi = [string, Difficulty, string, string[], number[], string];
type Numeric = [string, Difficulty, string, string, string, number];

const source = {
  kind: 'original' as const,
  reference: 'JEE (Advanced) 2026 syllabus and Paper 2 format',
  url: 'https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf',
  checkedOn: '24 August 2026',
};

const singles: Mcq[] = [
  ['Chemical equilibrium', 'medium', 'For the reaction A + B in equilibrium with C + D, if additional A is added to the system at constant volume, the equilibrium shifts', ['Towards the products', 'Towards the reactants', 'Does not shift', 'Shifts unpredictably'], 0, 'Adding a reactant increases the reaction quotient relative to K, shifting the equilibrium towards the products by Le Chatelier\'s principle.'],
  ['Surface chemistry', 'medium', 'The type of adsorption that generally increases with rising temperature, at least initially, is', ['Physisorption', 'Chemisorption', 'Absorption', 'Neither'], 1, 'Chemisorption has an activation energy and typically increases with temperature before decreasing, unlike physisorption which decreases with temperature throughout.'],
  ['Coordination chemistry', 'medium', 'The coordination number of the central metal ion in [Co(en)3]^3+, where en (ethylenediamine) is a bidentate ligand, is', ['3', '4', '6', '2'], 2, 'Three bidentate ligands each form two coordinate bonds, giving a coordination number of 3 x 2 = 6.'],
  ['p-Block elements', 'medium', 'Among the following oxides, the amphoteric oxide is', ['Na2O', 'SO3', 'MgO', 'Al2O3'], 3, 'Al2O3 reacts with both acids and bases, making it amphoteric, unlike the basic oxides Na2O and MgO or the acidic oxide SO3.'],
];

const multis: Multi[] = [
  ['Chemical kinetics', 'medium', 'For a second-order reaction, which statements are correct?', ['The rate depends on the square of a single reactant\'s concentration or the product of two reactant concentrations', 'Its rate constant has units of L mol^-1 s^-1', 'A plot of 1/[A] versus time is linear for a simple second-order reaction', 'Its half-life is independent of initial concentration'], [0, 1, 2], 'Second-order kinetics gives rate constant units L mol^-1 s^-1 and a linear 1/[A] versus time plot. Unlike first-order reactions, its half-life depends on the initial concentration.'],
  ['p-Block elements', 'medium', 'Which statements about ammonia (NH3) are correct?', ['It has a pyramidal shape', 'It acts as a Lewis base due to the lone pair on nitrogen', 'It can form coordinate bonds with metal ions', 'Its bond angle is exactly 109.5 degrees'], [0, 1, 2], 'NH3 is pyramidal and acts as a Lewis base, forming coordinate bonds with metal ions. Its bond angle is about 107 degrees, less than the ideal tetrahedral angle, due to lone-pair repulsion.'],
  ['Solutions', 'medium', 'For a solution showing positive deviation from Raoult\'s law, which statements are correct?', ['Solute-solvent interactions are weaker than solute-solute and solvent-solvent interactions', 'The observed vapour pressure is higher than that predicted by Raoult\'s law', 'The mixing process for such a solution is generally endothermic', 'Such a solution always forms an ideal solution'], [0, 1, 2], 'Weaker solute-solvent interactions raise the observed vapour pressure above the ideal prediction and typically make mixing endothermic; by definition, this is a non-ideal, not ideal, solution.'],
  ['d-Block elements', 'medium', 'Which statements about transition elements are correct?', ['They generally show variable oxidation states', 'Many of their compounds are coloured', 'They often act as catalysts due to variable oxidation states and available d-orbitals', 'They generally have low melting points compared to alkali metals'], [0, 1, 2], 'Transition elements typically show variable oxidation states, coloured compounds, and catalytic activity. They generally have higher, not lower, melting points than alkali metals.'],
  ['Biomolecules', 'medium', 'Which statements about carbohydrates are correct?', ['Glucose is an aldohexose', 'Fructose is a ketohexose', 'Sucrose is a disaccharide formed from glucose and fructose', 'Starch and cellulose, both glucose polymers, have identical properties'], [0, 1, 2], 'Glucose and fructose are an aldohexose and ketohexose respectively, and sucrose combines both in a disaccharide. Starch and cellulose differ in glycosidic linkage type and therefore in properties, despite both being glucose polymers.'],
];

const numerics: Numeric[] = [
  ['Electrochemistry', 'easy', 'Enter the number of moles of electrons required to reduce 1 mol of Al^3+ to Al.', '3', 'The reduction Al^3+ + 3e- -> Al requires 3 mol of electrons per mole of aluminium.', 4],
  ['Thermochemistry', 'medium', 'For a reaction, delta H = -50 kJ/mol and delta S = 100 J/(K.mol) at T = 300 K. Enter delta G in kJ/mol, rounded to two decimal places.', '-80.00', 'delta G = delta H - T delta S = -50 - 300(0.1) = -50 - 30 = -80.00 kJ/mol.', 4],
  ['Ionic equilibrium', 'medium', 'Enter the pH of a solution with hydrogen ion concentration 1 x 10^-9 M.', '9', 'pH = -log(1 x 10^-9) = 9.', 4],
  ['Chemical kinetics', 'medium', 'Enter the order of a reaction whose rate constant has units of s^-1.', '1', 'A rate constant with units of s^-1 (inverse time only) corresponds to a first-order reaction.', 4],
  ['Mole concept', 'medium', 'Enter the mass in grams of 0.25 mol of glucose (C6H12O6), molar mass 180 g/mol.', '45', 'Mass = moles x molar mass = 0.25 x 180 = 45 g.', 4],
  ['Electrochemistry', 'medium', 'A conductivity cell has electrodes 2 cm apart with cross-sectional area 1 cm^2, filled with a solution of conductivity 0.02 S/cm. Enter the cell constant in cm^-1.', '2', 'Cell constant = l/A = 2/1 = 2 cm^-1.', 2],
  ['Electrochemistry', 'medium', 'For the same cell (conductivity 0.02 S/cm, cell constant 2 cm^-1), enter the conductance in siemens.', '0.01', 'Conductance = conductivity/cell constant = 0.02/2 = 0.01 S.', 2],
  ['Nuclear chemistry', 'medium', 'A radioactive sample has an initial activity of 800 disintegrations per minute and a half-life of 10 minutes. Enter its activity in disintegrations per minute after 20 minutes.', '200', 'Twenty minutes is 2 half-lives, so activity = 800/(2^2) = 200 disintegrations per minute.', 2],
  ['Nuclear chemistry', 'medium', 'For the same sample (initial activity 800, half-life 10 minutes), enter its activity in disintegrations per minute after 30 minutes.', '100', 'Thirty minutes is 3 half-lives, so activity = 800/(2^3) = 100 disintegrations per minute.', 2],
];

export const JEE_ADVANCED_PAPER_2_CHEMISTRY_2: Question[] = [
  ...singles.map(([topic, difficulty, question, options, correctIndex, explanation], index) => ({ id: `jee-advanced-p2-ch2-${String(index + 1).padStart(3, '0')}`, section: 'Chemistry', topic, difficulty, question, options, correctIndex, answerType: 'mcq' as const, marks: 3, negativeMarking: 1, explanation, source })),
  ...multis.map(([topic, difficulty, question, options, correctIndices, explanation], index) => ({ id: `jee-advanced-p2-ch2-${String(index + 5).padStart(3, '0')}`, section: 'Chemistry', topic, difficulty, question, options, correctIndex: -1, correctIndices, answerType: 'multi-select' as const, partialMarking: true, marks: 4, negativeMarking: 1, explanation, source })),
  ...numerics.map(([topic, difficulty, question, correctValue, explanation, marks], index) => ({ id: `jee-advanced-p2-ch2-${String(index + 10).padStart(3, '0')}`, section: 'Chemistry', topic, difficulty, question, options: [], correctIndex: -1, correctValue, answerType: 'numerical' as const, maxDecimalPlaces: 2, marks, negativeMarking: 0, explanation, source })),
];
