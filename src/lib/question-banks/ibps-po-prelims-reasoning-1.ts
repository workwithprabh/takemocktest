import type { Question } from '../questions';

const SOURCE = {
  kind: 'original' as const,
  reference: 'TakeMockTest original practice aligned to the IBPS PO XVI Prelims Reasoning Ability section',
  url: 'https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf',
  checkedOn: '3 August 2026',
};

const MARKS = 8 / 7;
const PENALTY = MARKS / 4;

function question(
  id: string,
  topic: string,
  difficulty: 'easy' | 'medium' | 'hard',
  prompt: string,
  options: string[],
  correctIndex: number,
  explanation: string,
): Question {
  return {
    id,
    section: 'Reasoning Ability',
    topic,
    difficulty,
    question: prompt,
    options,
    correctIndex,
    marks: MARKS,
    negativeMarking: PENALTY,
    explanation,
    source: SOURCE,
  };
}

export const IBPS_PO_PRELIMS_REASONING_1: Question[] = [
  question('ibps-po-p1-re-001', 'Number series', 'easy', 'Find the next term: 2, 6, 12, 20, 30, ___.', ['42', '40', '44', '48'], 0, 'The differences are 4, 6, 8 and 10; the next difference is 12, giving 42.'),
  question('ibps-po-p1-re-002', 'Letter series', 'medium', 'Find the next letter: A, D, H, M, ___.', ['R', 'S', 'T', 'Q'], 1, 'The forward jumps are 3, 4 and 5 letters; a jump of 6 from M reaches S.'),
  question('ibps-po-p1-re-003', 'Coding-decoding', 'easy', 'If BANK is coded as CBOL by moving each letter one step forward, how is LOAN coded?', ['LPAO', 'NQCP', 'MPBO', 'MPBN'], 2, 'Moving L, O, A and N one step forward gives M, P, B and O: MPBO.'),
  question('ibps-po-p1-re-004', 'Classification', 'easy', 'Choose the item that does not belong with the others.', ['Square', 'Triangle', 'Circle', 'Sphere'], 3, 'Square, triangle and circle are two-dimensional figures; a sphere is three-dimensional.'),
  question('ibps-po-p1-re-005', 'Analogy', 'easy', 'Doctor is to hospital as teacher is to:', ['school', 'library', 'court', 'laboratory'], 0, 'A doctor commonly works in a hospital, while a teacher commonly works in a school.'),
  question('ibps-po-p1-re-006', 'Syllogism', 'medium', 'Statements: All pens are tools. Some tools are metal. Conclusions: I. All pens are tools. II. Some pens are metal. Which follows?', ['Both I and II', 'Only I', 'Only II', 'Neither I nor II'], 1, 'Conclusion I restates the first statement. The metal tools need not be pens, so conclusion II does not follow.'),
  question('ibps-po-p1-re-007', 'Inequalities', 'medium', 'Given P > Q = R < S, which relation between P and R is definitely true?', ['P = R', 'P < R', 'P > R', 'Cannot be determined'], 2, 'Because Q=R and P>Q, it follows directly that P>R.'),
  question('ibps-po-p1-re-008', 'Blood relations', 'easy', 'A is the sister of B. B is the father of C. How is A related to C?', ['Mother', 'Sister', 'Maternal aunt', 'Paternal aunt'], 3, 'A is the sister of C’s father, so A is C’s paternal aunt.'),
  question('ibps-po-p1-re-009', 'Direction sense', 'easy', 'Mira walks 5 km north, 3 km east and 5 km south. Where is she from the starting point?', ['3 km east', '3 km west', '5 km north', '5 km south'], 0, 'The north and south movements cancel, leaving Mira 3 km east of the start.'),
  question('ibps-po-p1-re-010', 'Ranking', 'easy', 'Ravi is 12th from the top and 19th from the bottom. How many people are in the row?', ['29', '30', '31', '32'], 1, 'Total = 12 + 19 − 1 = 30 because Ravi is counted in both positions.'),
  question('ibps-po-p1-re-011', 'Alphabet test', 'easy', 'If the letters of BANK are arranged alphabetically, what is the position of N?', ['Second', 'Third', 'Fourth', 'First'], 2, 'Alphabetical order is A, B, K, N, so N is fourth.'),
  question('ibps-po-p1-re-012', 'Linear arrangement', 'medium', 'Five people stand in a row. Q is immediately right of P, R is immediately right of Q, S is left of P, and T is right of R. Who stands in the middle?', ['P', 'R', 'S', 'Q'], 3, 'The only order is S-P-Q-R-T, so Q occupies the middle position.'),
  question('ibps-po-p1-re-013', 'Calendar', 'easy', 'If 1 January is a Monday, what day of the week is 10 January of the same year?', ['Wednesday', 'Tuesday', 'Thursday', 'Friday'], 0, 'Ten January is nine days later. Nine leaves a remainder of two on division by seven, so Monday advances to Wednesday.'),
  question('ibps-po-p1-re-014', 'Clock reasoning', 'medium', 'What is the smaller angle between the hands of a clock at 4:20?', ['20°', '10°', '15°', '30°'], 1, 'At 4:20 the minute hand is at 120° and the hour hand is at 130°, so the difference is 10°.'),
  question('ibps-po-p1-re-015', 'Statement and assumption', 'medium', 'Statement: “Wear a helmet to reduce the risk of serious head injury.” Which assumption is implicit?', ['Helmets prevent every accident.', 'Only riders suffer injuries.', 'A helmet can reduce the severity of a head injury.', 'Helmets are useful only at high speed.'], 2, 'The advice depends on the assumption that helmets can reduce injury severity, not that they prevent all accidents.'),
  question('ibps-po-p1-re-016', 'Cause and effect', 'easy', 'Event I: Heavy rain continued for six hours. Event II: Several low-lying roads were flooded. What is the most reasonable relation?', ['Both events are independent.', 'Event II caused Event I.', 'Both were caused only by road repairs.', 'Event I is a likely cause of Event II.'], 3, 'Prolonged heavy rain can cause water to accumulate on low-lying roads, making Event I a likely cause.'),
  question('ibps-po-p1-re-017', 'Letter series', 'medium', 'Find the next pair: AZ, BY, CX, DW, ___.', ['EV', 'EU', 'FV', 'EW'], 0, 'The first letter moves forward A-B-C-D-E while the second moves backward Z-Y-X-W-V, giving EV.'),
  question('ibps-po-p1-re-018', 'Word formation', 'medium', 'Which word cannot be formed using the letters of BANKING without using any letter more often than it appears?', ['BAKING', 'BINNING', 'BANK', 'GAIN'], 1, 'BANKING has one I and two Ns; BINNING requires two Is and three Ns, so it cannot be formed.'),
  question('ibps-po-p1-re-019', 'Alphabet test', 'easy', 'How many vowels are present in the word CALENDAR?', ['2', '4', '3', '5'], 2, 'The vowels are A, E and A, for a total of three.'),
  question('ibps-po-p1-re-020', 'Alphabet test', 'medium', 'What is the position of G when the English alphabet is counted in reverse order?', ['7', '18', '19', '20'], 3, 'Reverse position = 27 − normal position. G is 7th normally, so its reverse position is 20.'),
  question('ibps-po-p1-re-021', 'Coding-decoding', 'easy', 'If each letter is replaced by its alphabet position, what is the sum of the code for CODE?', ['27', '25', '29', '31'], 0, 'C=3, O=15, D=4 and E=5; their sum is 27.'),
  question('ibps-po-p1-re-022', 'Logical sequence', 'easy', 'Choose the logical order: 1. Seed 2. Plant 3. Flower 4. Fruit.', ['2-1-3-4', '1-2-3-4', '1-3-2-4', '3-2-1-4'], 1, 'A seed develops into a plant, which produces a flower and then a fruit.'),
  question('ibps-po-p1-re-023', 'Syllogism', 'hard', 'Statements: Some books are journals. All journals are printed. Conclusions: I. Some books are printed. II. All books are printed. Which follows?', ['Both I and II', 'Only II', 'Only I', 'Neither I nor II'], 2, 'The books that are journals must be printed, so conclusion I follows. Nothing establishes that all books are printed.'),
  question('ibps-po-p1-re-024', 'Ordering', 'easy', 'Neha lives on a floor above Ravi, and Ravi lives above Sita. Who lives on the highest floor?', ['Ravi', 'Sita', 'Cannot be determined', 'Neha'], 3, 'The stated order from highest to lowest is Neha, Ravi, Sita.'),
  question('ibps-po-p1-re-025', 'Direction sense', 'easy', 'A person walks 6 km east and then 8 km north. What is the shortest distance from the starting point?', ['10 km', '12 km', '14 km', '8 km'], 0, 'The path forms a right triangle, so distance = √(6²+8²) = √100 = 10 km.'),
  question('ibps-po-p1-re-026', 'Blood relations', 'medium', 'P is the mother of Q, and R is the father of P. How is R related to Q?', ['Paternal grandfather', 'Maternal grandfather', 'Maternal uncle', 'Father'], 1, 'R is the father of Q’s mother, so R is Q’s maternal grandfather.'),
  question('ibps-po-p1-re-027', 'Coding-decoding', 'easy', 'If a word is coded by reversing its letters, how is TABLE coded?', ['ELBTA', 'EABLT', 'ELBAT', 'TABEL'], 2, 'Reversing T-A-B-L-E gives E-L-B-A-T: ELBAT.'),
  question('ibps-po-p1-re-028', 'Classification', 'easy', 'Which number pair follows a different rule from the others?', ['2:4', '3:9', '4:16', '5:20'], 3, 'The second number is the square of the first in the first three pairs; 5² is 25, not 20.'),
  question('ibps-po-p1-re-029', 'Analogy', 'easy', '6 is related to 36 in the same way as 9 is related to:', ['81', '72', '54', '90'], 0, '36 is 6², so the corresponding value is 9² = 81.'),
  question('ibps-po-p1-re-030', 'Number series', 'medium', 'Find the next term: 100, 96, 88, 76, ___.', ['58', '60', '62', '64'], 1, 'The differences are −4, −8 and −12; subtracting the next multiple, 16, gives 60.'),
  question('ibps-po-p1-re-031', 'Critical reasoning', 'hard', 'A branch extended its evening hours, and customer visits after work increased. Which explanation best supports a causal link?', ['The branch repainted its walls.', 'Nearby branches use different logos.', 'The added hours made the branch accessible to customers who work during the day.', 'Some customers prefer morning visits.'], 2, 'The explanation directly connects extended hours with access for people unavailable during standard working hours.'),
  question('ibps-po-p1-re-032', 'Statement and assumption', 'medium', 'Statement: “To complete this transaction, enter the OTP sent to your registered mobile.” Which assumption is necessary?', ['Every mobile phone has internet access.', 'The transaction is always successful.', 'The OTP can be reused indefinitely.', 'The user can access the registered mobile number.'], 3, 'The instruction can work only if the user can receive or access the OTP on the registered number.'),
  question('ibps-po-p1-re-033', 'Data sufficiency', 'hard', 'For a positive integer x, what is x? I. x is even. II. x is greater than 7 and less than 9.', ['Statement II alone is sufficient', 'Statement I alone is sufficient', 'Either statement alone is sufficient', 'Both statements are insufficient'], 0, 'Statement II fixes the only positive integer between 7 and 9 as 8. Statement I alone allows many values.'),
  question('ibps-po-p1-re-034', 'Ordering', 'medium', 'Task P is completed before Q, and task R is completed after Q. Which must be true?', ['R is before P', 'P is before R', 'P and R are simultaneous', 'Q is before P'], 1, 'The statements give P before Q before R, so P must be before R.'),
  question('ibps-po-p1-re-035', 'Coding-decoding', 'easy', 'Using A=1, B=2, …, Z=26, which code represents LOAN?', ['12-14-1-15', '11-15-1-14', '12-15-1-14', '12-15-2-14'], 2, 'L=12, O=15, A=1 and N=14, so the code is 12-15-1-14.'),
];
