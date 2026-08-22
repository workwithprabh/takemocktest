import type { Question } from '../questions';

const SOURCE = {
  kind: 'original' as const,
  reference: 'TakeMockTest original practice aligned to the IBPS PO XVI Prelims Reasoning Ability section',
  url: 'https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf',
  checkedOn: '22 August 2026',
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

export const IBPS_PO_PRELIMS_REASONING_2: Question[] = [
  question('ibps-po-p2-re-001', 'Number series', 'medium', 'Find the next term: 10, 21, 43, 87, ___.', ['175', '171', '173', '177'], 0, 'Each term is double the previous term plus 1: 87 × 2 + 1 = 175.'),
  question('ibps-po-p2-re-002', 'Letter series', 'medium', 'Find the next letter: B, E, I, N, ___.', ['R', 'S', 'T', 'U'], 2, 'The forward jumps increase by one each time (3, 4, 5); a jump of 6 from N reaches T.'),
  question('ibps-po-p2-re-003', 'Coding-decoding', 'medium', 'If WORLD is coded as XPSME by moving each letter one step forward, how is TRAIN coded?', ['USBJP', 'USBJO', 'UTBJO', 'USBIO'], 1, 'Moving T, R, A, I and N one step forward gives U, S, B, J and O: USBJO.'),
  question('ibps-po-p2-re-004', 'Classification', 'easy', 'Choose the item that does not belong with the others.', ['Apple', 'Carrot', 'Banana', 'Mango'], 1, 'Apple, Banana, and Mango are fruits; Carrot is a vegetable.'),
  question('ibps-po-p2-re-005', 'Analogy', 'easy', 'Author is to Book as Composer is to:', ['Music', 'Instrument', 'Orchestra', 'Audience'], 0, 'An author creates a book, while a composer creates music.'),
  question('ibps-po-p2-re-006', 'Blood relations', 'medium', 'P is the son of Q. R is the daughter of Q. How is P related to R?', ['Father', 'Uncle', 'Cousin', 'Brother'], 3, 'P and R are both children of Q, and since P is described as a son, P is R\'s brother.'),
  question('ibps-po-p2-re-007', 'Blood relations', 'medium', 'A\'s mother is B. B\'s only sister is C. How is C related to A?', ['Mother', 'Sister', 'Aunt', 'Grandmother'], 2, 'B\'s only sister C is A\'s maternal aunt.'),
  question('ibps-po-p2-re-008', 'Direction sense', 'medium', 'A person walks 12 km east, then 5 km north. How far is he from his starting point?', ['11 km', '13 km', '12 km', '14 km'], 1, 'The path forms a right triangle with legs 12 km and 5 km, so the direct distance is √(12² + 5²) = √169 = 13 km.'),
  question('ibps-po-p2-re-009', 'Direction sense', 'hard', 'Facing east, a person turns 90 degrees clockwise, then 90 degrees anticlockwise. Which direction is the person facing now?', ['East', 'North', 'South', 'West'], 0, 'Starting from east, turning 90° clockwise gives south, and turning 90° anticlockwise from there returns to east.'),
  question('ibps-po-p2-re-010', 'Ranking', 'medium', 'In a class of 45 students, Rahul ranks 20th from the top. What is his rank from the bottom?', ['24', '25', '27', '26'], 3, 'Rank from the bottom = total students − rank from the top + 1 = 45 − 20 + 1 = 26.'),
  question('ibps-po-p2-re-011', 'Ranking', 'medium', 'Sneha is 12th from the left and 18th from the right in a row. How many people are in the row?', ['27', '28', '29', '30'], 2, 'Total people = position from left + position from right − 1 = 12 + 18 − 1 = 29.'),
  question('ibps-po-p2-re-012', 'Letter series', 'medium', 'Find the next letter: D, H, M, S, ___.', ['X', 'Z', 'Y', 'W'], 1, 'The gaps between letters increase by one each time (4, 5, 6), so the next gap is 7: S(19) + 7 = Z(26).'),
  question('ibps-po-p2-re-013', 'Syllogism', 'medium', 'Statements: All lions are animals. All animals are living things. Conclusion: All lions are living things. Is this conclusion valid?', ['Valid', 'Invalid', 'Cannot be determined', 'Partially valid'], 0, 'Chaining the two statements directly gives "All lions are living things", which is a valid conclusion.'),
  question('ibps-po-p2-re-014', 'Syllogism', 'medium', 'Statements: Some doctors are professors. All professors are researchers. Conclusion: Some researchers are doctors. Is this conclusion valid?', ['Invalid', 'Cannot be determined', 'Partially valid', 'Valid'], 3, '"Some doctors are professors" and "all professors are researchers" give "some doctors are researchers", which converts validly to "some researchers are doctors".'),
  question('ibps-po-p2-re-015', 'Number series', 'medium', 'Find the next term: 14, 29, 59, 119, ___.', ['235', '237', '239', '241'], 2, 'Each term is double the previous term plus 1: 119 × 2 + 1 = 239.'),
  question('ibps-po-p2-re-016', 'Symbol substitution', 'hard', 'If "X" means "+", "Y" means "−", "Z" means "×", and "W" means "÷", what is the value of 30 W 5 Z 2?', ['10', '12', '11', '13'], 1, 'Substituting the symbols: 30 ÷ 5 × 2. Following order of operations: 30 ÷ 5 = 6, then 6 × 2 = 12.'),
  question('ibps-po-p2-re-017', 'Alphanumeric series', 'medium', 'In the word "BANKER", if all the letters are arranged in alphabetical order, which letter occupies the 2nd position?', ['B', 'A', 'E', 'K'], 0, 'Alphabetical order of B, A, N, K, E, R is A, B, E, K, N, R — the 2nd letter is B.'),
  question('ibps-po-p2-re-018', 'Ranking', 'easy', 'Meera is shorter than Kavya but taller than Nisha. Who is the shortest of the three?', ['Meera', 'Kavya', 'Cannot be determined', 'Nisha'], 3, 'From Kavya > Meera > Nisha, Nisha is the shortest of the three.'),
  question('ibps-po-p2-re-019', 'Number series', 'hard', 'Find the next term: 200, 190, 172, 144, ___.', ['100', '102', '104', '106'], 2, 'The differences are -10, -18, -28 (each increasing in magnitude by a growing step), so the next difference is -40, giving 144 - 40 = 104.'),
  question('ibps-po-p2-re-020', 'Coding-decoding', 'hard', 'In a code, "quick brown fox" is written as "mx tp lr" and "brown jumps high" is written as "tp qz sv". What is the code for "brown"?', ['mx', 'tp', 'lr', 'qz'], 1, '"Brown" appears in both statements, which share only the code "tp", so "tp" codes for "brown".'),
  question('ibps-po-p2-re-021', 'Blood relations', 'medium', 'X is the father of Y\'s husband. How is X related to Y?', ['Father-in-law', 'Father', 'Grandfather', 'Uncle'], 0, 'Y\'s husband\'s father is Y\'s father-in-law.'),
  question('ibps-po-p2-re-022', 'Puzzle', 'hard', 'Five students P, Q, R, S and T scored different marks. P scored more than Q but less than R. S scored more than R. T scored less than Q. Who scored the second highest?', ['S', 'P', 'Q', 'R'], 3, 'From S > R > P > Q > T, R has the second-highest score of the five.'),
  question('ibps-po-p2-re-023', 'Number series', 'medium', 'Find the next term: 3, 7, 15, 31, ___.', ['59', '61', '63', '65'], 2, 'Each term is double the previous term plus 1: 31 × 2 + 1 = 63.'),
  question('ibps-po-p2-re-024', 'Classification', 'easy', 'Find the odd one out from the group below.', ['Delhi', 'India', 'Mumbai', 'Chennai'], 1, 'Delhi, Mumbai, and Chennai are cities; India is a country.'),
  question('ibps-po-p2-re-025', 'Coding-decoding', 'medium', 'If HORSE is coded as IPSTF by moving each letter one step forward, how is CAMEL coded?', ['DBNFM', 'DBNFN', 'DCNFM', 'DBMFM'], 0, 'Moving C, A, M, E and L one step forward gives D, B, N, F and M: DBNFM.'),
  question('ibps-po-p2-re-026', 'Ranking', 'medium', 'In a queue, Amit is 8th from the front and 15th from the back. How many people are in the queue?', ['20', '21', '23', '22'], 3, 'Total people = position from front + position from back − 1 = 8 + 15 − 1 = 22.'),
  question('ibps-po-p2-re-027', 'Direction sense', 'medium', 'A man walks 15 km south, then 8 km west. How far is he from his starting point?', ['15 km', '16 km', '17 km', '18 km'], 2, 'The path forms a right triangle with legs 15 km and 8 km, so the direct distance is √(15² + 8²) = √289 = 17 km.'),
  question('ibps-po-p2-re-028', 'Number series', 'medium', 'Find the next term: 500, 250, 125, 62.5, ___.', ['30', '31.25', '31', '31.5'], 1, 'Each term is divided by 2: 62.5 ÷ 2 = 31.25.'),
  question('ibps-po-p2-re-029', 'Analogy', 'easy', 'Thermometer is to Temperature as Speedometer is to:', ['Speed', 'Distance', 'Time', 'Fuel'], 0, 'A thermometer measures temperature, while a speedometer measures speed.'),
  question('ibps-po-p2-re-030', 'Blood relations', 'medium', 'M is the sister of N. N is the son of P. How is M related to P?', ['Sister', 'Niece', 'Mother', 'Daughter'], 3, 'N is P\'s son, and M is N\'s sibling, so M is also P\'s child, specifically P\'s daughter.'),
  question('ibps-po-p2-re-031', 'Alphanumeric series', 'medium', 'In the word "PICTURE" (in its original order), how many letters lie between the 3rd letter and the 6th letter?', ['1', '3', '2', '4'], 2, 'The word P-I-C-T-U-R-E has C as the 3rd letter and R as the 6th letter. Between them lie T and U — 2 letters.'),
  question('ibps-po-p2-re-032', 'Symbol substitution', 'hard', 'If "A" means "×", "B" means "+", "C" means "÷", and "D" means "−", what is the value of 16 C 4 A 3?', ['10', '12', '11', '13'], 1, 'Substituting the symbols: 16 ÷ 4 × 3. Following order of operations: 16 ÷ 4 = 4, then 4 × 3 = 12.'),
  question('ibps-po-p2-re-033', 'Ranking', 'easy', 'Vikram is older than Aditya but younger than Rohan. Who is the youngest of the three?', ['Aditya', 'Vikram', 'Rohan', 'Cannot be determined'], 0, 'From Rohan > Vikram > Aditya, Aditya is the youngest of the three.'),
  question('ibps-po-p2-re-034', 'Number series', 'medium', 'Find the next term: 7, 16, 34, 70, ___.', ['138', '140', '144', '142'], 3, 'Each term is double the previous term plus 2: 70 × 2 + 2 = 142.'),
  question('ibps-po-p2-re-035', 'Coding-decoding', 'hard', 'If PLANET is coded as QMBOFU by moving each letter one step forward, how is GALAXY coded?', ['HBMBYY', 'HAMBYZ', 'HBMBYZ', 'HBNBYZ'], 2, 'Moving G, A, L, A, X and Y one step forward gives H, B, M, B, Y and Z: HBMBYZ.'),
];
