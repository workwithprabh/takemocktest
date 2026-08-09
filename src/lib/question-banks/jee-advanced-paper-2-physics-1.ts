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
  ['Rotational dynamics', 'hard', 'A solid sphere rolls without slipping down an incline of angle theta. Its centre-of-mass acceleration is', ['(2/3)g sin(theta)', '(5/7)g sin(theta)', 'g sin(theta)', '(7/5)g sin(theta)'], 1, 'For rolling, a=g sin(theta)/(1+I/MR^2). With I=2MR^2/5, this gives 5g sin(theta)/7.',],
  ['Gravitation', 'medium', 'At a fixed radius around a spherical planet, the escape speed is related to circular orbital speed v_o by', ['v_o/2', '2v_o', 'sqrt(2)v_o', 'v_o/sqrt(2)'], 2, 'Escape speed is sqrt(2GM/r), while circular speed is sqrt(GM/r).',],
  ['RC circuits', 'medium', 'The time constant of a series RC circuit is', ['R/C', '1/(RC)', 'sqrt(RC)', 'RC'], 3, 'The charging or discharging time constant is the product RC.',],
  ['Matter waves', 'medium', 'If a particle momentum is doubled, its de Broglie wavelength becomes', ['Half', 'Double', 'Four times', 'Unchanged'], 0, 'The de Broglie relation lambda=h/p makes wavelength inversely proportional to momentum.',],
];

const multis: Multi[] = [
  ['Collisions', 'hard', 'For a collision in an isolated system, which statements are correct?', ['Total linear momentum is conserved', 'Kinetic energy is conserved in an elastic collision', 'For ordinary passive collisions, coefficient of restitution lies from 0 to 1', 'The centre-of-mass velocity remains constant'], [0, 1, 2, 3], 'Isolation conserves momentum and centre-of-mass velocity. Elastic collisions also conserve kinetic energy, and ordinary restitution values lie between zero and one.',],
  ['Electrostatics', 'hard', 'Which statements follow from Gauss law?', ['Net flux through a closed surface equals enclosed charge divided by epsilon_0', 'The flux is independent of the shape of the closed surface', 'External charges can affect the field on the surface but not the net flux', 'Zero enclosed net charge implies zero electric field everywhere on the surface'], [0, 1, 2], 'Gauss law fixes net flux by enclosed charge only. External fields may be nonzero locally even when the net enclosed charge is zero.',],
  ['Oscillations', 'medium', 'For ideal SHM, which statements are correct?', ['Total mechanical energy is constant', 'Potential energy is maximum at extreme positions', 'Speed is maximum at equilibrium', 'Acceleration is always in the same direction as displacement'], [0, 1, 2], 'SHM conserves energy, exchanges kinetic and potential energy, and has restoring acceleration opposite to displacement.',],
  ['Semiconductors', 'medium', 'Which statements about a p-n junction diode are correct?', ['Forward bias lowers the barrier potential', 'Reverse bias normally produces a small saturation current', 'A Zener diode is operated in reverse breakdown for regulation', 'An ideal forward-biased diode conducts'], [0, 1, 2, 3], 'All four are standard consequences or applications of p-n junction behaviour.',],
  ['Rigid-body rotation', 'hard', 'For a rigid body rotating about a fixed principal axis, which statements are correct?', ['Angular momentum magnitude is I omega', 'Rotational kinetic energy is I omega^2/2', 'External torque equals the time rate of angular momentum', 'All points have the same linear speed'], [0, 1, 2], 'All points share angular speed, not linear speed. The remaining relations are standard fixed-axis results.',],
];

const numerics: Numeric[] = [
  ['Impulse', 'easy', 'A constant force of 20 N acts for 0.5 s. Enter the impulse in N s.', '10', 'Impulse equals force times duration: 20(0.5)=10.', 4],
  ['Photons', 'medium', 'Using hc=1240 eV nm, enter the energy in eV of a 620 nm photon.', '2', 'E=hc/lambda=1240/620=2 eV.', 4],
  ['Pendulum', 'medium', 'For g=pi^2 m/s^2, enter the period in seconds of a simple pendulum of length 1 m.', '2', 'T=2pi sqrt(L/g)=2pi/pi=2 s.', 4],
  ['Thermodynamics', 'hard', 'An ideal gas expands reversibly and isothermally to twice its volume with nRT=10 J. Enter the work in joules, rounded to two decimals.', '6.93', 'W=nRT ln(V2/V1)=10 ln 2, which is approximately 6.93 J.', 4],
  ['Geometrical optics', 'medium', 'A converging lens has focal length 20 cm and an object is 30 cm away. Enter the real image distance in cm.', '60', 'Using 1/f=1/v+1/u with magnitudes gives 1/v=1/20-1/30=1/60.', 4],
  ['Current electricity', 'medium', 'A 4 ohm resistor is connected across an ideal 12 V source. Enter the current in amperes.', '3', 'Ohm law gives I=V/R=12/4=3 A.', 2],
  ['Current electricity', 'medium', 'A 4 ohm resistor is connected across an ideal 12 V source. Enter the power dissipated in watts.', '36', 'P=V^2/R=144/4=36 W.', 2],
  ['Kinematics', 'medium', 'A particle starts from rest with constant acceleration 2 m/s^2. Enter its speed after 5 s in m/s.', '10', 'v=u+at=0+2(5)=10 m/s.', 2],
  ['Kinematics', 'medium', 'A particle starts from rest with constant acceleration 2 m/s^2. Enter its displacement in the first 5 s in metres.', '25', 's=ut+at^2/2=0+2(25)/2=25 m.', 2],
];

export const JEE_ADVANCED_PAPER_2_PHYSICS_1: Question[] = [
  ...singles.map(([topic, difficulty, question, options, correctIndex, explanation], index) => ({ id: `jee-advanced-p2-ph-${String(index + 1).padStart(3, '0')}`, section: 'Physics', topic, difficulty, question, options, correctIndex, answerType: 'mcq' as const, marks: 3, negativeMarking: 1, explanation, source })),
  ...multis.map(([topic, difficulty, question, options, correctIndices, explanation], index) => ({ id: `jee-advanced-p2-ph-${String(index + 5).padStart(3, '0')}`, section: 'Physics', topic, difficulty, question, options, correctIndex: -1, correctIndices, answerType: 'multi-select' as const, partialMarking: true, marks: 4, negativeMarking: 1, explanation, source })),
  ...numerics.map(([topic, difficulty, question, correctValue, explanation, marks], index) => ({ id: `jee-advanced-p2-ph-${String(index + 10).padStart(3, '0')}`, section: 'Physics', topic, difficulty, question, options: [], correctIndex: -1, correctValue, answerType: 'numerical' as const, maxDecimalPlaces: 2, marks, negativeMarking: 0, explanation, source })),
];
