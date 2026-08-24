import type { Question } from '../questions';

const source = {
  kind: 'original' as const,
  reference: 'JEE Main 2026 official Paper 1 syllabus for Chemistry',
  url: 'https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf',
  checkedOn: '24 August 2026',
};

type Difficulty = 'easy' | 'medium' | 'hard';
type McqRow = [topic: string, difficulty: Difficulty, question: string, answer: string, distractors: [string, string, string], explanation: string];
type NumericalRow = [topic: string, difficulty: Difficulty, question: string, answer: string, explanation: string];

const mcqRows: McqRow[] = [
  ['Some basic concepts of chemistry', 'easy', 'What is the molecular mass of calcium carbonate, CaCO3? (Ca = 40, C = 12, O = 16)', '100', ['60', '84', '116'], 'Molecular mass = 40 + 12 + 3(16) = 40 + 12 + 48 = 100.'],
  ['Atomic structure', 'medium', 'What is the maximum number of electrons that can occupy the n = 3 shell?', '18', ['8', '9', '32'], 'The maximum number of electrons in a shell is 2n squared = 2(9) = 18.'],
  ['Chemical bonding', 'medium', 'What is the molecular shape of SF6 according to VSEPR theory?', 'Octahedral', ['Trigonal bipyramidal', 'Square planar', 'Tetrahedral'], 'SF6 has six bond pairs and no lone pairs around sulfur, giving an octahedral geometry.'],
  ['States of matter', 'medium', 'At constant temperature, what happens to the pressure of a fixed amount of an ideal gas if its volume is halved?', 'It doubles', ['It halves', 'It remains the same', 'It becomes four times as large'], "By Boyle's law, pressure is inversely proportional to volume at constant temperature."],
  ['Thermodynamics', 'medium', 'For a reaction with negative enthalpy change and positive entropy change, what is true of the Gibbs free energy change at every temperature?', 'It is always negative, so the reaction is spontaneous', ['It is always positive', 'It is zero at every temperature', 'It depends only on pressure'], 'Delta G = Delta H - T Delta S; a negative Delta H combined with a positive Delta S makes Delta G negative at every temperature.'],
  ['Equilibrium', 'medium', 'For the reaction N2 + 3H2 in equilibrium with 2NH3, in which direction does increasing pressure shift the equilibrium?', 'Towards the side with fewer moles of gas (forward)', ['Towards the side with more moles of gas', 'No shift occurs', 'Towards decomposition of ammonia only'], 'By Le Chatelier principle, raising pressure favours the side with fewer gas moles: 4 mol of reactants shift toward 2 mol of ammonia.'],
  ['Redox reactions', 'medium', 'What is the oxidation number of chromium in the dichromate ion, Cr2O7 with a 2- charge?', '+6', ['+3', '+4', '+7'], 'Charge balance gives 2x + 7(-2) = -2, so 2x = 12 and x = +6.'],
  ['Electrochemistry', 'medium', 'In a galvanic cell, at which electrode does reduction take place?', 'Cathode', ['Anode', 'Salt bridge', 'Both electrodes equally'], 'Reduction occurs at the cathode in every electrochemical cell, galvanic or electrolytic.'],
  ['Chemical kinetics', 'medium', 'How does the rate of a zero-order reaction depend on reactant concentration?', 'It is independent of concentration', ['It is directly proportional to concentration', 'It is proportional to the square of concentration', 'It decreases as concentration increases'], 'A zero-order reaction has rate = k, a constant that does not depend on reactant concentration.'],
  ['Surface chemistry', 'medium', 'Which type of adsorption involves the formation of chemical bonds between the adsorbate and the adsorbent surface?', 'Chemisorption', ['Physisorption', 'Absorption', 'Diffusion'], 'Chemisorption involves strong chemical bonding, unlike physisorption, which relies on weaker van der Waals forces.'],
  ['Periodic table', 'easy', 'Elements placed in the same group of the periodic table share the same number of:', 'Valence electrons', ['Protons', 'Neutrons', 'Energy levels'], 'Elements in a group have the same valence electron configuration, giving them similar chemical behaviour.'],
  ['s-Block elements', 'easy', 'Which of the following is classified as an alkaline earth metal?', 'Calcium', ['Sodium', 'Potassium', 'Aluminium'], 'Calcium belongs to Group 2, the alkaline earth metals; sodium and potassium are Group 1 alkali metals.'],
  ['p-Block elements', 'medium', 'Which allotrope of phosphorus is more chemically reactive?', 'White phosphorus', ['Red phosphorus', 'Black phosphorus', 'Violet phosphorus'], 'White phosphorus is more reactive owing to angular strain in its tetrahedral P4 molecules.'],
  ['d and f block elements', 'medium', 'Transition metals commonly display variable oxidation states mainly because of:', 'Comparable energies of the (n-1)d and ns orbitals', ['Their large atomic size', 'Their high melting points', 'Their metallic lustre'], 'Because (n-1)d and ns electrons have similar energies, a variable number can take part in bonding.'],
  ['Coordination compounds', 'medium', 'What is the oxidation state of nickel in the complex [Ni(CO)4]?', '0', ['+2', '+4', '-2'], 'Carbon monoxide is a neutral ligand, and the overall complex is neutral, so nickel is in the zero oxidation state.'],
  ['Environmental chemistry', 'easy', 'Which class of compounds is primarily responsible for depleting the ozone layer through catalytic breakdown reactions?', 'Chlorofluorocarbons', ['Carbon dioxide', 'Nitrogen', 'Methane'], 'Chlorofluorocarbons release chlorine atoms in the stratosphere that catalytically destroy ozone molecules.'],
  ['Basic principles of organic chemistry', 'medium', 'Which type of reaction converts an alkyl halide into an alkene by removing a hydrogen atom and the halogen?', 'Elimination', ['Substitution', 'Addition', 'Rearrangement'], 'Elimination reactions remove a hydrogen and a leaving group from adjacent carbons to form a carbon-carbon double bond.'],
  ['Alcohols, phenols and ethers', 'medium', 'Which reagent is commonly used in a test to distinguish between primary, secondary, and tertiary alcohols by the differing rate of turbidity formation?', 'Lucas reagent', ['Tollens reagent', 'Fehling solution', 'Grignard reagent'], 'Lucas reagent (concentrated hydrochloric acid with anhydrous zinc chloride) reacts at different rates with primary, secondary, and tertiary alcohols.'],
  ['Amines', 'medium', 'Which functional group is characteristic of a primary amine?', '-NH2 bonded to a carbon chain', ['-OH', '-COOH', '-CHO'], 'A primary amine has a nitrogen atom bonded to one alkyl or aryl group and two hydrogen atoms, written as -NH2.'],
  ['Polymers', 'easy', 'Nylon-6,6 is formed by which type of polymerisation process?', 'Condensation polymerisation', ['Addition polymerisation', 'Natural polymerisation', 'Elastomeric polymerisation'], 'Nylon-6,6 forms through condensation polymerisation of hexamethylenediamine and adipic acid, releasing water.'],
];

const numericalRows: NumericalRow[] = [
  ['Some basic concepts of chemistry', 'easy', 'Enter the number of moles present in 44 g of carbon dioxide. Use molar mass 44 g/mol.', '1', 'Number of moles = mass/molar mass = 44/44 = 1.'],
  ['States of matter', 'medium', 'A gas occupies 4 L at a pressure of 2 atm. Enter its new volume in litres if the pressure is increased to 8 atm at constant temperature.', '1', "By Boyle's law, P1V1 = P2V2: 2 x 4 = 8 x V2, so V2 = 1 L."],
  ['Ionic equilibrium', 'easy', 'Enter the pH of a solution with hydrogen ion concentration equal to 1 x 10 to the power -5 mol/L.', '5', 'pH = -log[H+] = -log(10 to the power -5) = 5.'],
  ['Electrochemistry', 'medium', 'A cell has a standard reduction potential of +0.80 V at the cathode and +0.34 V at the anode. Enter the standard cell potential in volts.', '0.46', 'E(cell) = E(cathode) - E(anode) = 0.80 - 0.34 = 0.46 V.'],
  ['Some basic concepts of chemistry', 'medium', 'Enter the mass in grams of NaOH (molar mass 40 g/mol) needed to prepare 250 mL of a 0.4 M solution.', '4', 'Moles = Molarity x Volume in litres = 0.4 x 0.25 = 0.1 mol; mass = 0.1 x 40 = 4 g.'],
];

function buildQuestions(): Question[] {
  const mcqs = mcqRows.map<Question>(([topic, difficulty, question, answer, distractors, explanation], index) => {
    const correctIndex = index % 4;
    const options = [...distractors];
    options.splice(correctIndex, 0, answer);
    return { id: `jee-main-p1-ch2-${String(index + 1).padStart(3, '0')}`, section: 'Chemistry', topic, difficulty, question, options, correctIndex, answerType: 'mcq', explanation, source };
  });
  const numerical = numericalRows.map<Question>(([topic, difficulty, question, correctValue, explanation], index) => ({
    id: `jee-main-p1-ch2-${String(index + 21).padStart(3, '0')}`, section: 'Chemistry', topic, difficulty, question,
    options: [], correctIndex: -1, answerType: 'numerical', correctValue, explanation, source,
  }));
  return [...mcqs, ...numerical];
}

export const JEE_MAIN_PAPER_1_CHEMISTRY_2 = buildQuestions();
