import type { Question } from '../questions';

const source = {
  kind: 'original' as const,
  reference: 'JEE Main 2026 official Paper 1 syllabus for Chemistry',
  url: 'https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf',
  checkedOn: '9 August 2026',
};

type Difficulty = 'easy' | 'medium' | 'hard';
type McqRow = [topic: string, difficulty: Difficulty, question: string, answer: string, distractors: [string, string, string], explanation: string];
type NumericalRow = [topic: string, difficulty: Difficulty, question: string, answer: string, explanation: string];

const mcqRows: McqRow[] = [
  ['Mole concept', 'easy', 'How many moles are present in 18 g of water? Use molar mass 18 g/mol.', '1 mol', ['0.5 mol', '2 mol', '18 mol'], 'Number of moles = mass/molar mass = 18/18 = 1.'],
  ['Atomic structure', 'medium', 'What is the azimuthal quantum number l for a d subshell?', '2', ['0', '1', '3'], 'The subshell labels s, p, d and f correspond to l = 0, 1, 2 and 3.'],
  ['Molecular orbital theory', 'hard', 'What is the bond order of an oxygen molecule in its ground state?', '2', ['1', '1.5', '2.5'], 'The molecular orbital electron configuration of O2 gives bond order (bonding - antibonding)/2 = 2.'],
  ['Chemical bonding', 'easy', 'What is the hybridization of carbon in methane?', 'sp3', ['sp', 'sp2', 'dsp2'], 'Carbon forms four equivalent sigma bonds in a tetrahedral sp3 arrangement.'],
  ['Thermodynamics', 'medium', 'At constant temperature and pressure, which sign of Gibbs energy change indicates a spontaneous process?', 'Negative', ['Positive', 'Always zero', 'Undefined'], 'A process is thermodynamically spontaneous at constant temperature and pressure when delta G is negative.'],
  ['Solutions', 'medium', 'What is the molarity of a solution containing 0.5 mol solute in 2 L of solution?', '0.25 M', ['0.5 M', '1 M', '4 M'], 'Molarity = moles/volume in litres = 0.5/2 = 0.25 M.'],
  ['Ionic equilibrium', 'easy', 'What is the pH of 0.001 M hydrochloric acid, assuming complete ionization?', '3', ['1', '2', '11'], 'The hydrogen ion concentration is 10^-3 M, so pH = 3.'],
  ['Redox reactions', 'medium', 'What is the oxidation number of manganese in potassium permanganate, KMnO4?', '+7', ['+2', '+4', '+6'], 'Charge balance gives +1 + x + 4(-2) = 0, so x = +7.'],
  ['Electrochemistry', 'easy', 'Which process always occurs at the anode of an electrochemical cell?', 'Oxidation', ['Reduction', 'Neutralization', 'Precipitation'], 'Oxidation occurs at the anode in both galvanic and electrolytic cells.'],
  ['Chemical kinetics', 'medium', 'What is the half-life of a first-order reaction with rate constant k?', 'ln(2)/k', ['1/k', '2/k', 'k/ln(2)'], 'Integration of the first-order rate law gives t half = ln(2)/k.'],
  ['Periodicity', 'medium', 'Which element has the highest first ionization enthalpy among Li, B, F and Ne?', 'Ne', ['Li', 'B', 'F'], 'Neon has a closed shell and the highest first ionization enthalpy among these elements.'],
  ['VSEPR theory', 'easy', 'What is the molecular shape of ammonia, NH3?', 'Trigonal pyramidal', ['Trigonal planar', 'Tetrahedral', 'Bent'], 'Three bond pairs and one lone pair around nitrogen produce a trigonal pyramidal shape.'],
  ['Lanthanoids', 'hard', 'Lanthanoid contraction primarily results from poor shielding by which electrons?', '4f electrons', ['3d electrons', '5p electrons', '6s electrons'], 'The 4f electrons shield nuclear charge poorly, causing radii to decrease across the series.'],
  ['Coordination compounds', 'easy', 'What is the coordination number of cobalt in [Co(NH3)6]3+?', '6', ['3', '4', '8'], 'Six monodentate ammonia ligands are directly bonded to cobalt.'],
  ['Organic nomenclature', 'medium', 'What is the IUPAC name of CH3CH(OH)CH3?', 'Propan-2-ol', ['Propan-1-ol', 'Propanone', 'Ethoxy methane'], 'The three-carbon chain has its hydroxyl group on carbon 2.'],
  ['Hydrocarbons', 'medium', 'Propene reacts with HBr in the absence of peroxide. What is the major product?', '2-bromopropane', ['1-bromopropane', '1,2-dibromopropane', 'Propan-1-ol'], 'Markovnikov addition places bromine on the more substituted middle carbon.'],
  ['Phenols', 'hard', 'Why is phenol more acidic than cyclohexanol?', 'The phenoxide ion is resonance-stabilized', ['Phenol has only single bonds', 'Cyclohexanol is aromatic', 'The hydroxyl proton in phenol is positively charged'], 'Delocalization of negative charge stabilizes phenoxide relative to an alkoxide ion.'],
  ['Aldehydes and ketones', 'medium', 'Which class of compounds generally gives a silver mirror with Tollens reagent?', 'Aldehydes', ['Ketones', 'Ethers', 'Alkanes'], 'Tollens reagent oxidizes aldehydes while silver ions are reduced to metallic silver.'],
  ['Biomolecules', 'easy', 'Which linkage joins amino acids in a protein chain?', 'Peptide bond', ['Glycosidic bond', 'Phosphodiester bond', 'Hydrogen bond only'], 'A peptide bond is the -CO-NH- linkage formed between amino acids.'],
  ['Vitamins', 'easy', 'Ascorbic acid is the chemical name of which vitamin?', 'Vitamin C', ['Vitamin A', 'Vitamin B12', 'Vitamin D'], 'Ascorbic acid is vitamin C.'],
];

const numericalRows: NumericalRow[] = [
  ['Mole concept', 'easy', 'Enter the number of Avogadro-number units of atoms present in 2 mol of helium atoms.', '2', 'Two moles contain 2 times Avogadro number atoms, so the requested coefficient is 2.'],
  ['Atomic structure', 'easy', 'A sodium-23 atom has atomic number 11. Enter its number of neutrons.', '12', 'Neutrons = mass number - atomic number = 23 - 11 = 12.'],
  ['Oxidation number', 'medium', 'Enter the oxidation number of sulfur in H2SO4.', '6', 'Charge balance gives 2(+1) + x + 4(-2) = 0, hence x = +6.'],
  ['Ionic equilibrium', 'easy', 'Enter the pH of 0.0001 M HCl, assuming complete ionization.', '4', 'The hydrogen ion concentration is 10^-4 M, so pH = 4.'],
  ['Chemical bonding', 'medium', 'Enter the total number of sigma bonds in one molecule of ethane, C2H6.', '7', 'Ethane contains six C-H sigma bonds and one C-C sigma bond.'],
];

function buildQuestions(): Question[] {
  const mcqs = mcqRows.map<Question>(([topic, difficulty, question, answer, distractors, explanation], index) => {
    const correctIndex = index % 4;
    const options = [...distractors];
    options.splice(correctIndex, 0, answer);
    return { id: `jee-main-p1-ch-${String(index + 1).padStart(3, '0')}`, section: 'Chemistry', topic, difficulty, question, options, correctIndex, answerType: 'mcq', explanation, source };
  });
  const numerical = numericalRows.map<Question>(([topic, difficulty, question, correctValue, explanation], index) => ({
    id: `jee-main-p1-ch-${String(index + 21).padStart(3, '0')}`, section: 'Chemistry', topic, difficulty, question,
    options: [], correctIndex: -1, answerType: 'numerical', correctValue, explanation, source,
  }));
  return [...mcqs, ...numerical];
}

export const JEE_MAIN_PAPER_1_CHEMISTRY_1 = buildQuestions();
