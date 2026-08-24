import type { Question } from '../questions';

const source = {
  kind: 'original' as const,
  reference: 'JEE Main 2026 official Paper 1 syllabus for Physics',
  url: 'https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf',
  checkedOn: '24 August 2026',
};

type Difficulty = 'easy' | 'medium' | 'hard';
type McqRow = [topic: string, difficulty: Difficulty, question: string, answer: string, distractors: [string, string, string], explanation: string];
type NumericalRow = [topic: string, difficulty: Difficulty, question: string, answer: string, explanation: string];

const mcqRows: McqRow[] = [
  ['Units and measurements', 'easy', 'Which of the following is a derived unit in the SI system, rather than a base unit?', 'Newton', ['Kilogram', 'Metre', 'Second'], 'The newton (force) is derived from the base units kilogram, metre, and second; the others are base units themselves.'],
  ['Kinematics', 'medium', 'A ball is thrown vertically upward with a speed of 20 m/s. Taking g = 10 m/s squared, how long does it take to return to the point of projection?', '4 s', ['2 s', '1 s', '8 s'], 'Time of flight = 2u/g = 40/10 = 4 s.'],
  ['Laws of motion', 'medium', 'A 5 kg block on a frictionless surface is pushed with a 15 N force. What is its acceleration?', '3 m/s squared', ['1 m/s squared', '5 m/s squared', '15 m/s squared'], 'Acceleration = Force/mass = 15/5 = 3 m/s squared.'],
  ['Work, energy and power', 'medium', 'A machine delivers 500 J of work in 10 s. What is its power output?', '50 W', ['500 W', '5 W', '5000 W'], 'Power = Work/time = 500/10 = 50 W.'],
  ['Rotational motion', 'hard', "What is the moment of inertia of a thin uniform rod of mass M and length L about an axis through its centre, perpendicular to its length?", 'ML squared/12', ['ML squared/3', 'ML squared/2', 'ML squared'], 'The standard result for a rod about a perpendicular axis through its centre is ML squared/12.'],
  ['Gravitation', 'medium', "For a planet of constant density, how does escape velocity from its surface depend on the planet's radius R?", 'It is proportional to R', ['It is proportional to R squared', 'It is inversely proportional to R', 'It is independent of R'], 'For constant density, escape velocity is proportional to R times the square root of density, so it scales directly with R.'],
  ['Elasticity', 'medium', "Young's modulus of a material relates stress to which other quantity?", 'Strain', ['Pressure', 'Density', 'Volume'], "Young's modulus is defined as the ratio of longitudinal stress to longitudinal strain."],
  ['Surface tension', 'medium', 'A soap bubble in air has two free surfaces. What is the excess pressure inside it, in terms of surface tension T and radius r?', '4T/r', ['2T/r', 'T/r', '8T/r'], 'A soap bubble has two surfaces, doubling the usual single-surface excess pressure of 2T/r to 4T/r.'],
  ['Thermodynamics', 'medium', 'What is the value of heat transferred to a system undergoing a strictly adiabatic process?', 'Zero', ['Equal to the work done by the gas', 'Always positive', 'Always negative'], 'By definition, an adiabatic process involves no heat exchange with the surroundings, so Q = 0.'],
  ['Kinetic theory of gases', 'medium', 'According to kinetic theory, the average kinetic energy per mole of an ideal gas depends only on:', 'Absolute temperature', ['Pressure', 'Volume', 'Molar mass'], 'Average kinetic energy per mole equals (3/2)RT, which depends only on absolute temperature.'],
  ['Simple harmonic motion', 'medium', "A simple pendulum has a time period of 2 s on Earth. If taken to a location where g is one-fourth of Earth's value, what is its new time period?", '4 s', ['1 s', '2 s', '8 s'], 'Time period is proportional to 1/(square root of g); a fourfold decrease in g increases the period by a factor of 2, giving 4 s.'],
  ['Waves', 'medium', 'Two sound waves of frequency 360 Hz and 365 Hz are sounded together. What beat frequency is produced?', '5 Hz', ['2 Hz', '362.5 Hz', '725 Hz'], 'Beat frequency equals the magnitude of the difference of the two frequencies: 365 - 360 = 5 Hz.'],
  ['Electrostatics', 'medium', 'Two point charges of equal magnitude but opposite sign are placed close together, separated by a small distance. What is this arrangement called?', 'An electric dipole', ['A capacitor', 'A conductor', 'An insulator'], 'Two equal and opposite charges separated by a small fixed distance form an electric dipole.'],
  ['Current electricity', 'medium', 'Three resistors, each of resistance 2 ohm, are connected in parallel. What is their equivalent resistance?', '2/3 ohm', ['6 ohm', '2 ohm', '3/2 ohm'], '1/R(eq) = 1/2 + 1/2 + 1/2 = 3/2, so R(eq) = 2/3 ohm.'],
  ['Magnetic effects of current', 'medium', "According to Fleming's left-hand rule, the magnetic force on a current-carrying conductor placed in a magnetic field acts:", 'Perpendicular to both the current and the field', ['Parallel to the current', 'Parallel to the field', 'Opposite to the current'], 'The force F = IL x B is always perpendicular to both the current direction and the magnetic field.'],
  ['Electromagnetic induction', 'medium', "Lenz's law, which gives the direction of an induced current, is a direct consequence of which fundamental principle?", 'Conservation of energy', ['Conservation of momentum', 'Conservation of charge', 'Conservation of mass'], "Lenz's law ensures induced effects oppose the change producing them, consistent with the conservation of energy."],
  ['Electromagnetic waves', 'medium', 'In an electromagnetic wave travelling through vacuum, how are the electric field, magnetic field, and direction of propagation oriented relative to each other?', 'Mutually perpendicular', ['Parallel to each other', 'Parallel to the direction of propagation', 'Antiparallel to each other'], 'Electromagnetic waves are transverse, with E, B, and the propagation direction mutually perpendicular.'],
  ['Ray optics', 'medium', 'An object placed in front of a concave mirror produces a real, inverted image of the same size as the object. Where must the object be located?', 'At the centre of curvature', ['At the focus', 'Between the pole and the focus', 'At infinity'], 'An object placed at the centre of curvature of a concave mirror forms a real, inverted, same-size image at the same point.'],
  ['Dual nature of matter', 'hard', "What happens to an electron's de Broglie wavelength when its speed is doubled, with its mass unchanged?", 'It is halved', ['It doubles', 'It remains unchanged', 'It becomes four times as large'], 'De Broglie wavelength = h/(mv), which is inversely proportional to speed, so doubling v halves the wavelength.'],
  ['Semiconductor devices', 'medium', 'A silicon crystal is doped with a trivalent impurity to form a p-type semiconductor. What are the majority charge carriers in this material?', 'Holes', ['Electrons', 'Neutrons', 'Photons'], 'Trivalent (acceptor) doping creates an excess of holes, which become the majority charge carriers in a p-type semiconductor.'],
];

const numericalRows: NumericalRow[] = [
  ['Kinematics', 'easy', 'Enter the distance in metres travelled by a body moving at a constant speed of 15 m/s for 6 s.', '90', 'Distance = speed x time = 15 x 6 = 90 m.'],
  ['Work, energy and power', 'medium', 'Enter the kinetic energy in joules of a 4 kg object moving at 5 m/s.', '50', 'Kinetic energy = 0.5 x 4 x 25 = 50 J.'],
  ['Current electricity', 'easy', 'Enter the resistance in ohms of a conductor that draws a current of 5 A when connected to a 20 V source.', '4', 'Resistance = Voltage/Current = 20/5 = 4 ohm.'],
  ['Simple harmonic motion', 'medium', 'Enter the frequency in Hz of a simple pendulum with a time period of 0.5 s.', '2', 'Frequency = 1/Time period = 1/0.5 = 2 Hz.'],
  ['Ray optics', 'medium', 'A convex lens forms a real image at 30 cm for an object placed 15 cm from the lens. Enter the magnitude of the focal length in cm.', '10', 'Using 1/f = 1/v - 1/u with u = -15 cm and v = 30 cm: 1/f = 1/30 + 1/15 = 1/10, so f = 10 cm.'],
];

function buildQuestions(): Question[] {
  const mcqs = mcqRows.map<Question>(([topic, difficulty, question, answer, distractors, explanation], index) => {
    const correctIndex = index % 4;
    const options = [...distractors];
    options.splice(correctIndex, 0, answer);
    return { id: `jee-main-p1-ph2-${String(index + 1).padStart(3, '0')}`, section: 'Physics', topic, difficulty, question, options, correctIndex, answerType: 'mcq', explanation, source };
  });
  const numerical = numericalRows.map<Question>(([topic, difficulty, question, correctValue, explanation], index) => ({
    id: `jee-main-p1-ph2-${String(index + 21).padStart(3, '0')}`, section: 'Physics', topic, difficulty, question,
    options: [], correctIndex: -1, answerType: 'numerical', correctValue, explanation, source,
  }));
  return [...mcqs, ...numerical];
}

export const JEE_MAIN_PAPER_1_PHYSICS_2 = buildQuestions();
