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
  ['Gravitation', 'medium', 'The time period of a satellite in a circular orbit is proportional to which power of the orbital radius r, for a given central mass?', ['r^(3/2)', 'r^(1/2)', 'r', 'r^2'], 0, 'From Kepler\'s third law, T^2 is proportional to r^3, so T is proportional to r^(3/2).'],
  ['Fluid mechanics', 'medium', 'According to Bernoulli\'s principle, for a horizontal ideal fluid flow, as the flow speed increases, the pressure', ['Increases', 'Decreases', 'Remains constant', 'Becomes zero'], 1, 'Bernoulli\'s equation shows that at the same height, an increase in fluid speed corresponds to a decrease in pressure.'],
  ['Alternating current', 'medium', 'For a pure resistor connected to an AC source, the phase difference between voltage and current is', ['pi/2', 'pi', '0', 'pi/4'], 2, 'In a pure resistor, voltage and current are always in phase, so the phase difference is 0.'],
  ['Atomic physics', 'medium', 'In the Bohr model of hydrogen, the radius of the nth orbit is proportional to', ['n', '1/n', '1/n^2', 'n^2'], 3, 'The Bohr radius formula gives r_n proportional to n^2.'],
];

const multis: Multi[] = [
  ['Projectile motion', 'medium', 'A projectile is launched at angle theta with initial speed u on level ground, with no air resistance. Which statements are correct?', ['Its horizontal velocity component remains constant throughout the flight', 'Its time of flight is 2u sin(theta)/g', 'Its maximum height is u^2 sin^2(theta)/(2g)', 'At the highest point, its speed is zero'], [0, 1, 2], 'Horizontal velocity is unaffected by gravity and stays constant; the time of flight and maximum height follow the standard projectile formulas. At the highest point, the horizontal component u cos(theta) remains nonzero (unless theta=90 degrees).'],
  ['Magnetism', 'medium', 'A current-carrying long straight wire produces a magnetic field around it. Which statements are correct?', ['The field magnitude is proportional to the current', 'The field magnitude is inversely proportional to the distance from the wire', 'The field lines form concentric circles around the wire', 'The field direction is independent of the current direction'], [0, 1, 2], 'The field from a long straight wire is proportional to current and inversely proportional to distance, forming concentric circular field lines. Its direction, given by the right-hand rule, depends on the current direction.'],
  ['Nuclear physics', 'hard', 'Regarding nuclear binding energy and stability, which statements are correct?', ['Binding energy per nucleon is roughly maximum for nuclei near mass number 56 (iron)', 'Fusion of light nuclei can release energy since binding energy per nucleon increases', 'Fission of very heavy nuclei can release energy since binding energy per nucleon increases upon splitting', 'Binding energy per nucleon increases monotonically with mass number across the entire periodic table'], [0, 1, 2], 'Binding energy per nucleon peaks near iron, so both fusion of light nuclei and fission of heavy nuclei can release energy by moving toward this peak; the curve rises then falls, so it is not monotonic.'],
  ['Wave optics', 'medium', 'In Young\'s double-slit experiment, which statements are correct?', ['Fringe width is directly proportional to the wavelength of light used', 'Fringe width is inversely proportional to the slit separation', 'Using white light produces a central white fringe with coloured fringes on either side', 'The fringe pattern is independent of the distance between the slits and the screen'], [0, 1, 2], 'Fringe width beta = (lambda D)/d depends directly on wavelength and screen distance, and inversely on slit separation, so it is not independent of screen distance.'],
  ['Rotational mechanics', 'medium', 'For a rigid body in pure rolling motion on a horizontal surface, which statements are correct?', ['The velocity of the point of contact with the ground is zero', 'The total kinetic energy is the sum of translational and rotational kinetic energies', 'Friction does no work on the body during pure rolling', 'Kinetic friction always acts on the body during pure rolling'], [0, 1, 2], 'Pure rolling means the contact point is instantaneously at rest, total KE splits into translational and rotational parts, and friction (static, not kinetic) does no work since there is no relative sliding.'],
];

const numerics: Numeric[] = [
  ['Circular motion', 'medium', 'A car of mass 1000 kg moves in a circular path of radius 50 m at speed 10 m/s. Enter the centripetal force in newtons.', '2000', 'Centripetal force = mv^2/r = 1000(100)/50 = 2000 N.', 4],
  ['Calorimetry', 'medium', 'Enter the heat in joules required to raise the temperature of 2 kg of water by 5 degrees Celsius. Use specific heat capacity 4200 J/(kg.K).', '42000', 'Heat = mc(delta T) = 2(4200)(5) = 42000 J.', 4],
  ['Current electricity', 'medium', 'A 100 W bulb operates at 200 V. Enter its resistance in ohms.', '400', 'Resistance = V^2/P = 40000/100 = 400 ohm.', 4],
  ['Wave optics', 'medium', 'Enter the wavelength in nanometres of light with frequency 5 x 10^14 Hz. Use c = 3 x 10^8 m/s.', '600', 'Wavelength = c/f = (3 x 10^8)/(5 x 10^14) = 6 x 10^-7 m = 600 nm.', 4],
  ['Electrostatics', 'medium', 'Two charges of +2 mC each are placed 3 m apart. Using k = 9 x 10^9 N.m^2/C^2, enter the force between them in newtons.', '4000', 'Force = kq1q2/r^2 = (9 x 10^9)(2 x 10^-3)(2 x 10^-3)/9 = 4000 N.', 4],
  ['Simple harmonic motion', 'medium', 'A simple pendulum has length 2.5 m. Using g = 10 m/s^2, enter its time period in seconds, rounded to two decimal places.', '3.14', 'T = 2 pi sqrt(L/g) = 2 pi sqrt(0.25) = 2 pi (0.5) = pi, approximately 3.14 s.', 2],
  ['Simple harmonic motion', 'medium', 'For the same pendulum (length 2.5 m, g = 10 m/s^2), enter its frequency in Hz, rounded to two decimal places.', '0.32', 'Frequency = 1/T = 1/pi, approximately 0.32 Hz.', 2],
  ['Photoelectric effect', 'medium', 'The work function of a metal is 2 eV, and it is illuminated by light of photon energy 5 eV. Enter the maximum kinetic energy of the emitted photoelectrons in eV.', '3', 'Maximum kinetic energy = photon energy - work function = 5-2 = 3 eV.', 2],
  ['Photoelectric effect', 'medium', 'For the same metal and light (work function 2 eV, photon energy 5 eV), enter the stopping potential in volts.', '3', 'Stopping potential equals the maximum kinetic energy in eV divided by the electron charge, numerically 3 V.', 2],
];

export const JEE_ADVANCED_PAPER_2_PHYSICS_2: Question[] = [
  ...singles.map(([topic, difficulty, question, options, correctIndex, explanation], index) => ({ id: `jee-advanced-p2-ph2-${String(index + 1).padStart(3, '0')}`, section: 'Physics', topic, difficulty, question, options, correctIndex, answerType: 'mcq' as const, marks: 3, negativeMarking: 1, explanation, source })),
  ...multis.map(([topic, difficulty, question, options, correctIndices, explanation], index) => ({ id: `jee-advanced-p2-ph2-${String(index + 5).padStart(3, '0')}`, section: 'Physics', topic, difficulty, question, options, correctIndex: -1, correctIndices, answerType: 'multi-select' as const, partialMarking: true, marks: 4, negativeMarking: 1, explanation, source })),
  ...numerics.map(([topic, difficulty, question, correctValue, explanation, marks], index) => ({ id: `jee-advanced-p2-ph2-${String(index + 10).padStart(3, '0')}`, section: 'Physics', topic, difficulty, question, options: [], correctIndex: -1, correctValue, answerType: 'numerical' as const, maxDecimalPlaces: 2, marks, negativeMarking: 0, explanation, source })),
];
