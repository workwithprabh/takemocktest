import type { Question } from '../questions';

const source = {
  kind: 'original' as const,
  reference: 'JEE Main 2026 official Paper 1 syllabus for Physics',
  url: 'https://cdnbbsr.s3waas.gov.in/s3f8e59f4b2fe7c5705bf878bbd494ccdf/uploads/2025/10/202510311323551056.pdf',
  checkedOn: '9 August 2026',
};

type Difficulty = 'easy' | 'medium' | 'hard';
type McqRow = [topic: string, difficulty: Difficulty, question: string, answer: string, distractors: [string, string, string], explanation: string];
type NumericalRow = [topic: string, difficulty: Difficulty, question: string, answer: string, explanation: string];

const mcqRows: McqRow[] = [
  ['Units and dimensions', 'medium', 'Which dimensional formula represents Planck constant?', 'M L^2 T^-1', ['M L T^-1', 'M L^2 T^-2', 'M L^-1 T^-2'], 'Planck constant has the dimensions of energy multiplied by time, giving M L squared T to the power -1.'],
  ['Projectile motion', 'medium', 'A projectile is launched at 20 m/s at 30 degrees above the horizontal. Taking g = 10 m/s squared, what is its time of flight?', '2 s', ['1 s', 'sqrt(3) s', '4 s'], 'Time of flight = 2u sin theta/g = 2 x 20 x 1/2 divided by 10 = 2 s.'],
  ['Laws of motion', 'easy', 'The limiting friction between two dry surfaces is equal to which expression?', 'Coefficient of friction x normal reaction', ['Normal reaction/coefficient of friction', 'Mass x acceleration only', 'Weight x contact area'], 'Limiting friction is proportional to the normal reaction and equals mu N.'],
  ['Work and energy', 'medium', 'A 2 kg body speeds up from 3 m/s to 5 m/s. What is the net work done on it?', '16 J', ['8 J', '25 J', '32 J'], 'Net work equals the change in kinetic energy: one-half x 2 x (25 - 9) = 16 J.'],
  ['Rotational motion', 'hard', 'What is the moment of inertia of a uniform solid sphere about a diameter?', '(2/5)MR^2', ['(1/2)MR^2', '(2/3)MR^2', 'MR^2'], 'The standard moment of inertia of a uniform solid sphere about a diameter is (2/5)MR squared.'],
  ['Gravitation', 'medium', 'Which expression gives the orbital speed of a satellite in a circular orbit of radius R around mass M?', 'sqrt(GM/R)', ['sqrt(GMR)', 'GM/R^2', '2piR'], 'Equating gravitational force with centripetal force gives v = sqrt(GM/R).'],
  ['Fluid mechanics', 'medium', 'In steady horizontal flow of an ideal fluid, what happens to static pressure where the fluid speed increases?', 'It decreases', ['It increases', 'It remains unchanged', 'It becomes zero in every case'], 'Bernoulli equation requires pressure to fall as kinetic energy per unit volume rises.'],
  ['Thermodynamics', 'easy', 'What is the change in internal energy of an ideal gas during an isothermal process?', 'Zero', ['Positive', 'Negative', 'Equal to the work done'], 'The internal energy of an ideal gas depends only on temperature, which remains constant.'],
  ['Kinetic theory', 'medium', 'If the absolute temperature of an ideal gas becomes four times its initial value, how does its rms molecular speed change?', 'It doubles', ['It halves', 'It becomes four times', 'It remains unchanged'], 'Rms speed is proportional to the square root of absolute temperature.'],
  ['Simple harmonic motion', 'medium', 'What is the time period of a mass m attached to an ideal spring of force constant k?', '2pi sqrt(m/k)', ['2pi sqrt(k/m)', 'pi sqrt(m/k)', 'sqrt(mk)'], 'For a mass-spring oscillator, angular frequency is sqrt(k/m), so T = 2pi sqrt(m/k).'],
  ['Electrostatics', 'medium', 'What is the total electric flux through a closed surface enclosing charge q in vacuum?', 'q/epsilon0', ['q epsilon0', '4piq/epsilon0', 'Zero'], 'Gauss law gives total flux equal to enclosed charge divided by epsilon0.'],
  ['Capacitance', 'medium', 'Capacitors of 6 microfarad and 3 microfarad are connected in series. What is their equivalent capacitance?', '2 microfarad', ['3 microfarad', '4 microfarad', '9 microfarad'], 'For series capacitors, C = (6 x 3)/(6 + 3) = 2 microfarad.'],
  ['Current electricity', 'easy', 'A 5 ohm resistor carries a current of 2 A. What electrical power does it dissipate?', '20 W', ['10 W', '25 W', '40 W'], 'Power = I squared R = 4 x 5 = 20 W.'],
  ['Magnetism', 'easy', 'A charged particle moves exactly parallel to a uniform magnetic field. What magnetic force acts on it?', 'Zero', ['qvB', 'qvB/2', 'It depends only on the mass'], 'Magnetic force qvB sin theta is zero when theta is zero.'],
  ['Electromagnetic induction', 'medium', 'According to Faraday law, induced emf is determined by the rate of change of what quantity?', 'Magnetic flux', ['Electric charge', 'Resistance', 'Magnetic pole strength'], 'Induced emf equals the negative time rate of change of magnetic flux.'],
  ['Alternating current', 'medium', 'An alternating voltage has peak value 10 V. What is its rms value?', '5sqrt(2) V', ['5 V', '10sqrt(2) V', '20 V'], 'For a sinusoidal voltage, Vrms = V0/sqrt(2) = 5sqrt(2) V.'],
  ['Wave optics', 'hard', 'Which expression gives fringe width in Young double-slit experiment?', 'lambda D/d', ['lambda d/(D^2)', 'dD/lambda', 'lambda/(dD)'], 'Fringe width equals wavelength times screen distance divided by slit separation.'],
  ['Photoelectric effect', 'hard', 'The stopping potential in a photoelectric experiment directly measures which quantity per unit charge?', 'Maximum kinetic energy of photoelectrons', ['Intensity of incident light', 'Number of emitted electrons', 'Work function alone'], 'eV0 equals the maximum kinetic energy of emitted photoelectrons.'],
  ['Atoms', 'medium', 'In the Bohr model of hydrogen, how does orbit radius vary with principal quantum number n?', 'It is proportional to n squared', ['It is proportional to n', 'It is proportional to 1/n', 'It is independent of n'], 'For hydrogen, rn = n squared times the first Bohr radius.'],
  ['Semiconductors', 'easy', 'A p-n junction diode in forward bias ideally behaves as which type of circuit element?', 'A low-resistance path', ['An open circuit', 'A perfect capacitor', 'A high-resistance path'], 'Forward bias lowers the junction barrier and permits substantial current.'],
];

const numericalRows: NumericalRow[] = [
  ['Kinematics', 'easy', 'A car increases its speed uniformly from 0 to 20 m/s in 5 s. Enter its acceleration in m/s squared.', '4', 'Acceleration = change in velocity/time = 20/5 = 4 m/s squared.'],
  ['Work', 'medium', 'A 10 N force moves an object 3 m while making 60 degrees with the displacement. Enter the work done in joules.', '15', 'Work = Fs cos theta = 10 x 3 x 1/2 = 15 J.'],
  ['Calorimetry', 'medium', 'Enter the heat in joules required to raise 2 kg of water by 5 degrees Celsius. Use specific heat 4200 J per kg per degree Celsius.', '42000', 'Heat = mc delta T = 2 x 4200 x 5 = 42000 J.'],
  ['Current electricity', 'easy', 'A 4 ohm resistor is connected across 12 V. Enter the current in amperes.', '3', 'Ohm law gives I = V/R = 12/4 = 3 A.'],
  ['Ray optics', 'medium', 'A converging lens has focal length 20 cm. Enter the magnitude of its power in dioptres.', '5', 'Focal length is 0.20 m, so power = 1/f = 5 dioptres.'],
];

function buildQuestions(): Question[] {
  const mcqs = mcqRows.map<Question>(([topic, difficulty, question, answer, distractors, explanation], index) => {
    const correctIndex = index % 4;
    const options = [...distractors];
    options.splice(correctIndex, 0, answer);
    return { id: `jee-main-p1-ph-${String(index + 1).padStart(3, '0')}`, section: 'Physics', topic, difficulty, question, options, correctIndex, answerType: 'mcq', explanation, source };
  });
  const numerical = numericalRows.map<Question>(([topic, difficulty, question, correctValue, explanation], index) => ({
    id: `jee-main-p1-ph-${String(index + 21).padStart(3, '0')}`, section: 'Physics', topic, difficulty, question,
    options: [], correctIndex: -1, answerType: 'numerical', correctValue, explanation, source,
  }));
  return [...mcqs, ...numerical];
}

export const JEE_MAIN_PAPER_1_PHYSICS_1 = buildQuestions();
