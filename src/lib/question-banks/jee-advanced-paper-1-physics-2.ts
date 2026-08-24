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
  ['Electrostatics', 'medium', 'Two point charges of +4 microC and -4 microC are separated by 3 cm, forming a dipole. Its dipole moment magnitude is', ['1.2 x 10^-7 C.m', '4 x 10^-6 C.m', '3 x 10^-2 C.m', '1.2 x 10^-6 C.m'], 0, 'Dipole moment p=qd = (4 x 10^-6)(0.03) = 1.2 x 10^-7 C.m.', 3],
  ['Current electricity', 'medium', 'A wire of resistance R is stretched to double its length, keeping its volume constant. Its new resistance is', ['2R', '4R', 'R/2', 'R/4'], 1, 'With volume fixed, doubling length halves the cross-section, so R proportional to L/A becomes (2L)/(A/2) = 4R.', 3],
  ['Ray optics', 'medium', 'An object is placed at the centre of curvature of a concave mirror. The image formed is', ['Virtual, erect, magnified', 'Real, inverted, diminished', 'Real, inverted, same size', 'Virtual, erect, same size'], 2, 'At the centre of curvature, a concave mirror forms a real, inverted image of the same size at the same point.', 3],
  ['Nuclear physics', 'medium', 'A radioactive nucleus has decay constant 0.0231 per year. Its half-life is approximately', ['15 years', '60 years', '45 years', '30 years'], 3, 'Half-life = ln(2)/lambda = 0.693/0.0231, approximately 30 years.', 3],
];

const multis: Multi[] = [
  ['Laws of motion', 'medium', 'A block of mass m rests on a rough horizontal surface with coefficient of static friction mu_s. Which statements are correct?', ['The maximum static friction force is mu_s times m times g', 'The block starts moving once the applied force exceeds mu_s times m times g', 'Static friction always equals mu_s times m times g even before the block moves', 'Kinetic friction after motion begins is generally less than or equal to the maximum static friction'], [0, 1, 3], 'Static friction adjusts up to its maximum value mu_s mg; below that limit it equals the applied force, not always the maximum. Kinetic friction is typically less than or equal to the maximum static friction.'],
  ['Thermodynamics', 'medium', 'For an ideal diatomic gas (rigid, no vibration), which statements are correct?', ['Cv equals 5R/2', 'Cp equals 7R/2', 'The ratio Cp/Cv is 1.4', 'Its molar internal energy depends on both temperature and pressure'], [0, 1, 2], 'A rigid diatomic gas has Cv=5R/2 and Cp=7R/2, giving gamma=1.4. Ideal-gas internal energy depends only on temperature, not pressure.'],
  ['Electromagnetic induction', 'medium', 'A conducting rod slides on frictionless rails in a uniform magnetic field perpendicular to the plane, with the circuit closed by a resistor. Which statements are correct?', ['An emf is induced proportional to the rod\'s velocity', 'The induced current opposes the rod\'s motion (Lenz\'s law)', 'A retarding force acts on the rod due to the induced current', 'The induced emf is independent of the magnetic field strength'], [0, 1, 2], 'The motional emf Bvl depends on velocity and field strength, and the induced current opposes the motion, producing a retarding force.'],
  ['Waves', 'medium', 'A stretched string of length L, fixed at both ends, vibrates in its fundamental mode. Which statements are correct?', ['The fundamental frequency is v/(2L), where v is the wave speed', 'There is a node at each fixed end', 'There is exactly one antinode located at the midpoint', 'The wavelength of the fundamental mode equals L'], [0, 1, 2], 'The fundamental mode has nodes at both fixed ends, one central antinode, and a wavelength of 2L, giving frequency v/(2L).'],
];

const numerics: Numeric[] = [
  ['Kinematics', 'easy', 'A car accelerates uniformly from 10 m/s to 30 m/s in 4 s. Enter the distance covered in metres.', '80', 'Average velocity = (10+30)/2 = 20 m/s, so distance = 20 x 4 = 80 m.', 4],
  ['Work and energy', 'medium', 'A ball is dropped from height 5 m. Using g=10 m/s^2 and ignoring air resistance, enter its speed in m/s just before hitting the ground.', '10', 'v = sqrt(2gh) = sqrt(2 x 10 x 5) = sqrt(100) = 10.', 4],
  ['Current electricity', 'medium', 'An EMF source of 10 V with internal resistance 1 ohm is connected to an external resistor of 4 ohm. Enter the current in amperes.', '2', 'Current = EMF/(R+r) = 10/(4+1) = 2 A.', 4],
  ['Simple harmonic motion', 'medium', 'A particle in SHM has amplitude 5 cm and time period 2 s. Using pi=3.14, enter its maximum speed in cm/s, rounded to two decimal places.', '15.70', 'Maximum speed = (2 pi/T) x A = (2 x 3.14/2) x 5 = 3.14 x 5 = 15.70 cm/s.', 4],
];

const matches: Mcq[] = [
  ['Fundamental laws', 'medium', 'Match each law with its statement: P: Gauss law (electrostatics); Q: Ampere circuital law; R: Faraday law; S: Lenz law. List II: (1) induced emf equals negative rate of change of flux, (2) closed line integral of B equals mu0 times enclosed current, (3) induced effects oppose the change producing them, (4) closed surface flux equals enclosed charge over epsilon0, (5) force between charges follows inverse square law.', ['P-4, Q-2, R-1, S-3', 'P-2, Q-4, R-3, S-1', 'P-1, Q-2, R-4, S-3', 'P-4, Q-1, R-2, S-3'], 0, 'Gauss law relates flux to enclosed charge, Ampere law relates B to enclosed current, Faraday law gives induced emf, and Lenz law states induced effects oppose their cause.', 4],
  ['Units and measurements', 'medium', 'Match each physical quantity with its SI unit: P: electric charge; Q: magnetic flux; R: capacitance; S: inductance. List II: (1) farad, (2) henry, (3) coulomb, (4) weber, (5) tesla.', ['P-4, Q-3, R-2, S-1', 'P-3, Q-4, R-1, S-2', 'P-3, Q-1, R-4, S-2', 'P-1, Q-4, R-3, S-2'], 1, 'Charge is measured in coulomb, magnetic flux in weber, capacitance in farad, and inductance in henry.', 4],
  ['Ray optics', 'medium', 'Match each optical instrument or phenomenon with its principal use: P: convex lens; Q: concave mirror; R: prism; S: convex mirror. List II: (1) dispersion of light, (2) wide field-of-view viewing (vehicle mirrors), (3) converging light rays (magnifier), (4) shaving/dental mirror (magnified image), (5) diverging light rays always.', ['P-1, Q-2, R-3, S-4', 'P-4, Q-3, R-2, S-1', 'P-3, Q-4, R-1, S-2', 'P-2, Q-4, R-1, S-3'], 2, 'A convex lens converges rays for magnification, a concave mirror gives a magnified image used for shaving, a prism disperses light, and a convex mirror gives a wide field of view.', 4],
  ['Modern physics', 'medium', 'Match each phenomenon with its correct description: P: photoelectric effect; Q: Compton effect; R: pair production; S: de Broglie hypothesis. List II: (1) matter has an associated wavelength, (2) a photon converts into an electron-positron pair, (3) ejection of electrons from a metal surface by light, (4) scattering of a photon by a free electron with a wavelength shift, (5) emission of a continuous X-ray spectrum.', ['P-4, Q-3, R-1, S-2', 'P-1, Q-2, R-4, S-3', 'P-2, Q-1, R-3, S-4', 'P-3, Q-4, R-2, S-1'], 3, 'The photoelectric effect ejects electrons by light, the Compton effect is photon scattering by a free electron, pair production converts a photon to an electron-positron pair, and de Broglie relates matter to wavelength.', 4],
];

export const JEE_ADVANCED_PAPER_1_PHYSICS_2: Question[] = [
  ...singles.map(([topic, difficulty, question, options, correctIndex, explanation, marks], index) => ({ id: `jee-advanced-p1-ph2-${String(index + 1).padStart(3, '0')}`, section: 'Physics', topic, difficulty, question, options, correctIndex, answerType: 'mcq' as const, marks, negativeMarking: 1, explanation, source })),
  ...multis.map(([topic, difficulty, question, options, correctIndices, explanation], index) => ({ id: `jee-advanced-p1-ph2-${String(index + 5).padStart(3, '0')}`, section: 'Physics', topic, difficulty, question, options, correctIndex: -1, correctIndices, answerType: 'multi-select' as const, partialMarking: true, marks: 4, negativeMarking: 1, explanation, source })),
  ...numerics.map(([topic, difficulty, question, correctValue, explanation, marks], index) => ({ id: `jee-advanced-p1-ph2-${String(index + 9).padStart(3, '0')}`, section: 'Physics', topic, difficulty, question, options: [], correctIndex: -1, correctValue, answerType: 'numerical' as const, maxDecimalPlaces: 2, marks, negativeMarking: 0, explanation, source })),
  ...matches.map(([topic, difficulty, question, options, correctIndex, explanation, marks], index) => ({ id: `jee-advanced-p1-ph2-${String(index + 13).padStart(3, '0')}`, section: 'Physics', topic, difficulty, question, options, correctIndex, answerType: 'mcq' as const, marks, negativeMarking: 1, explanation, source })),
];
