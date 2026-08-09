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
  ['Projectile motion', 'medium', 'A projectile is launched with speed u at 45 degrees above the horizontal on level ground. Neglecting air resistance, its range is', ['u^2/g', 'u^2/(2g)', '2u^2/g', 'u/g'], 0, 'The range is u^2 sin(2 theta)/g. At theta=45 degrees, sin(90 degrees)=1.', 3],
  ['Capacitance', 'medium', 'Two identical capacitors, each of capacitance C, are connected in series. Their equivalent capacitance is', ['2C', 'C/2', 'C', 'C/4'], 1, 'For series capacitors, 1/Ceq=1/C+1/C=2/C, so Ceq=C/2.', 3],
  ['Photoelectric effect', 'medium', 'If the incident photon energy is 5 eV and the metal work function is 2 eV, the stopping potential is', ['2 V', '5 V', '3 V', '7 V'], 2, 'The maximum kinetic energy is 5-2=3 eV, corresponding to a stopping potential of 3 V.', 3],
  ['Simple harmonic motion', 'medium', 'A particle executes SHM with amplitude A and angular frequency omega. Its maximum acceleration is', ['omega A', 'omega^2/A', 'A/omega', 'omega^2 A'], 3, 'In SHM, a=-omega^2 x, so the maximum magnitude occurs at |x|=A.', 3],
];

const multis: Multi[] = [
  ['Circular motion', 'medium', 'For uniform circular motion under a central force, which statements are correct?', ['The speed is constant', 'Acceleration points towards the centre', 'The centripetal force does zero work', 'Angular momentum about the centre is constant'], [0, 1, 2, 3], 'Velocity changes direction but not magnitude. Force and acceleration are radial, perpendicular to displacement, and the central torque is zero.',],
  ['Thermodynamics', 'hard', 'An ideal gas undergoes a reversible isothermal expansion. Which statements are correct?', ['Its internal energy does not change', 'Heat absorbed equals work done by the gas', 'PV remains constant', 'Its entropy change must be zero'], [0, 1, 2], 'Ideal-gas internal energy depends only on temperature. Thus delta U=0 and Q=W, while PV is constant. The gas entropy increases during reversible expansion.',],
  ['Electromagnetic waves', 'medium', 'For a plane electromagnetic wave in vacuum, which statements are correct?', ['Electric and magnetic fields are mutually perpendicular', 'The ratio E/B equals c', 'The wave carries momentum', 'A material medium is required'], [0, 1, 2], 'Vacuum electromagnetic waves are transverse, obey E=cB, and transport energy and momentum without a material medium.',],
  ['Ray optics', 'medium', 'A real object is placed beyond 2f of a thin converging lens. Which statements describe its image?', ['It lies between f and 2f', 'It is real', 'It is inverted and diminished', 'It forms on the same side as the object'], [0, 1, 2], 'The standard convex-lens construction gives a real, inverted, diminished image between f and 2f on the opposite side.',],
];

const numerics: Numeric[] = [
  ['Newtonian mechanics', 'easy', 'A net force of 10 N acts on a 2 kg body. Enter the acceleration in m/s^2.', '5', 'Newton\'s second law gives a=F/m=10/2=5.', 4],
  ['Current electricity', 'medium', 'A 6 ohm resistor and a 3 ohm resistor are connected in parallel. Enter the equivalent resistance in ohms.', '2', 'The reciprocal resistance is 1/6+1/3=1/2, so the equivalent is 2 ohms.', 4],
  ['Oscillations', 'medium', 'A 2 kg mass is attached to a spring of force constant 200 N/m. Enter the angular frequency in rad/s.', '10', 'omega=sqrt(k/m)=sqrt(200/2)=10.', 4],
  ['Radioactivity', 'medium', 'A sample has a half-life of 4 days. After 12 days, the remaining fraction is 1/n. Enter n.', '8', 'Twelve days is three half-lives, so the remaining fraction is (1/2)^3=1/8.', 4],
];

const matches: Mcq[] = [
  ['Units and dimensions', 'hard', 'Match each quantity with its dimensions: P: force; Q: pressure; R: energy; S: power. List II: (1) ML^2T^-3, (2) MLT^-2, (3) ML^-1T^-2, (4) ML^2T^-2, (5) LT^-1.', ['P-2, Q-3, R-4, S-1', 'P-3, Q-2, R-1, S-4', 'P-2, Q-4, R-3, S-1', 'P-1, Q-3, R-4, S-2'], 3, 'Force, pressure, energy, and power have dimensions MLT^-2, ML^-1T^-2, ML^2T^-2, and ML^2T^-3 respectively.', 4],
  ['Wave optics', 'medium', 'Match the phenomenon with its principal idea: P: Young double slit; Q: single-slit diffraction; R: polarization; S: photoelectric effect. List II: (1) transverse nature, (2) photon energy, (3) two-source interference, (4) finite aperture spreading, (5) total internal reflection.', ['P-4, Q-3, R-1, S-2', 'P-3, Q-1, R-4, S-2', 'P-3, Q-4, R-1, S-2', 'P-2, Q-4, R-3, S-1'], 2, 'The four associations are interference, aperture diffraction, transverse-wave polarization, and photon energy.', 4],
  ['Thermodynamic processes', 'medium', 'Match each ideal-gas process with its fixed quantity: P: isothermal; Q: isobaric; R: isochoric; S: adiabatic. List II: (1) pressure, (2) volume, (3) temperature, (4) heat exchange is zero, (5) internal energy is zero.', ['P-3, Q-2, R-1, S-4', 'P-3, Q-1, R-2, S-4', 'P-1, Q-3, R-2, S-5', 'P-2, Q-1, R-3, S-4'], 1, 'Temperature, pressure, and volume are fixed in the first three processes, while an adiabatic process has zero heat transfer.', 4],
  ['Fundamental laws', 'medium', 'Match each law with its expression: P: Newton second law; Q: Ohm law; R: Coulomb law; S: Snell law. List II: (1) V=IR, (2) F=ma, (3) n1 sin i=n2 sin r, (4) F=kq1q2/r^2, (5) P=VI.', ['P-2, Q-1, R-4, S-3', 'P-1, Q-2, R-3, S-4', 'P-2, Q-4, R-1, S-3', 'P-3, Q-1, R-4, S-2'], 0, 'The expressions directly identify Newton, Ohm, Coulomb, and Snell laws.', 4],
];

export const JEE_ADVANCED_PAPER_1_PHYSICS_1: Question[] = [
  ...singles.map(([topic, difficulty, question, options, correctIndex, explanation, marks], index) => ({ id: `jee-advanced-p1-ph-${String(index + 1).padStart(3, '0')}`, section: 'Physics', topic, difficulty, question, options, correctIndex, answerType: 'mcq' as const, marks, negativeMarking: 1, explanation, source })),
  ...multis.map(([topic, difficulty, question, options, correctIndices, explanation], index) => ({ id: `jee-advanced-p1-ph-${String(index + 5).padStart(3, '0')}`, section: 'Physics', topic, difficulty, question, options, correctIndex: -1, correctIndices, answerType: 'multi-select' as const, partialMarking: true, marks: 4, negativeMarking: 1, explanation, source })),
  ...numerics.map(([topic, difficulty, question, correctValue, explanation, marks], index) => ({ id: `jee-advanced-p1-ph-${String(index + 9).padStart(3, '0')}`, section: 'Physics', topic, difficulty, question, options: [], correctIndex: -1, correctValue, answerType: 'numerical' as const, maxDecimalPlaces: 2, marks, negativeMarking: 0, explanation, source })),
  ...matches.map(([topic, difficulty, question, options, correctIndex, explanation, marks], index) => ({ id: `jee-advanced-p1-ph-${String(index + 13).padStart(3, '0')}`, section: 'Physics', topic, difficulty, question, options, correctIndex, answerType: 'mcq' as const, marks, negativeMarking: 1, explanation, source })),
];
