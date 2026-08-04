import type { Question } from '../questions';

const source = {
  kind: 'original' as const,
  reference: 'SSC CGL 2026 official notice, paragraph 13.11.2 (Tier 2 Reasoning and General Intelligence syllabus)',
  url: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2026.pdf',
  checkedOn: '3 August 2026',
};

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
    section: 'Reasoning and General Intelligence',
    topic,
    difficulty,
    question: prompt,
    options,
    correctIndex,
    explanation,
    source,
  };
}

export const SSC_CGL_TIER2_REASONING_2: Question[] = [
  question('ssc-cgl-t2-re2-001', 'Semantic analogy', 'easy', 'Architect is related to building in the same way as author is related to:', ['Book', 'Reader', 'Library', 'Printer'], 0, 'An architect creates the design for a building, while an author creates a book.'),
  question('ssc-cgl-t2-re2-002', 'Number analogy', 'medium', 'Select the number related to 11 in the same way that 56 is related to 7.', ['121', '132', '110', '143'], 1, 'The relation is n x (n + 1). Thus 7 x 8 = 56 and 11 x 12 = 132.'),
  question('ssc-cgl-t2-re2-003', 'Classification', 'easy', 'Which shape differs from the other three?', ['Triangle', 'Square', 'Cube', 'Circle'], 2, 'Triangle, square and circle are two-dimensional shapes. A cube is three-dimensional.'),
  question('ssc-cgl-t2-re2-004', 'Number series', 'easy', 'Find the next term in the series: 4, 9, 19, 39, 79, ___.', ['149', '154', '157', '159'], 3, 'Each term is twice the previous term plus 1. Therefore 79 x 2 + 1 = 159.'),
  question('ssc-cgl-t2-re2-005', 'Coding and decoding', 'easy', 'In a code, each letter is moved two places forward in the alphabet. If LAMP is coded as NCOR, how is BOOK coded?', ['DQQM', 'DPPM', 'CPPL', 'DQQL'], 0, 'Moving B, O, O and K two places forward gives D, Q, Q and M: DQQM.'),
  question('ssc-cgl-t2-re2-006', 'Direction sense', 'easy', 'Kabir walks 10 m east, 6 m north and then 10 m west. Where is he from his starting point?', ['6 m south', '6 m north', '10 m east', '10 m west'], 1, 'The eastward and westward movements cancel, leaving Kabir 6 m north of the starting point.'),
  question('ssc-cgl-t2-re2-007', 'Blood relations', 'easy', 'Asha is the sister of Bharat, and Bharat is the father of Charu. How is Asha related to Charu?', ['Mother', 'Sister', 'Aunt', 'Grandmother'], 2, 'Asha is the sister of Charu\'s father, so she is Charu\'s aunt.'),
  question('ssc-cgl-t2-re2-008', 'Ranking', 'easy', 'Neha is 12th from the top and 19th from the bottom in a class. How many students are there?', ['29', '31', '32', '30'], 3, 'Total students = 12 + 19 - 1 = 30 because Neha is counted in both positions.'),
  question('ssc-cgl-t2-re2-009', 'Syllogism', 'medium', 'Statements: All pens are stationery. No stationery is food. Conclusions: I. No pen is food. II. Some food is pen. Which conclusion follows?', ['Only I follows', 'Only II follows', 'Both follow', 'Neither follows'], 0, 'Every pen belongs to stationery, and no stationery is food. Therefore no pen can be food; only conclusion I follows.'),
  question('ssc-cgl-t2-re2-010', 'Inequalities', 'medium', 'If P is less than or equal to Q, Q < R, and R = S, which relation is definitely true?', ['P = S', 'P < S', 'Q = S', 'S < P'], 1, 'Since P is at most Q and Q is less than R, P is less than R. As R = S, P < S.'),
  question('ssc-cgl-t2-re2-011', 'Venn diagrams', 'easy', 'In a survey, 120 students study Mathematics, 90 study Science and 50 study both. How many study at least one of the two subjects?', ['210', '170', '160', '140'], 2, 'Using inclusion-exclusion, 120 + 90 - 50 = 160 students study at least one subject.'),
  question('ssc-cgl-t2-re2-012', 'Statement and assumption', 'medium', 'Statement: The college library will remain open for two additional hours during examinations. Which assumption is most directly implicit?', ['Every student owns all textbooks', 'The library is normally closed during examinations', 'Examinations will be postponed', 'Students may need more library access during examinations'], 3, 'Extending the hours is meaningful only if students may need additional access during the examination period.'),
  question('ssc-cgl-t2-re2-013', 'Linear arrangement', 'easy', 'Five people stand in a row. A is immediately left of B, C is immediately right of B, D is left of A, and E is right of C. Who stands in the middle?', ['B', 'A', 'C', 'D'], 0, 'The only order satisfying all conditions is D, A, B, C, E. Therefore B is in the middle.'),
  question('ssc-cgl-t2-re2-014', 'Alphabet test', 'easy', 'If the letters of STREAM are arranged in alphabetical order, which letter is fifth?', ['R', 'S', 'T', 'M'], 1, 'The alphabetical order is A, E, M, R, S, T. The fifth letter is S.'),
  question('ssc-cgl-t2-re2-015', 'Word building', 'medium', 'Which word cannot be formed from the letters of GOVERNMENT without using any letter more often than it appears?', ['GOVERN', 'TENOR', 'MOVEMENT', 'MENTOR'], 2, 'MOVEMENT requires two Ms, but GOVERNMENT contains only one M. The other words can be formed.'),
  question('ssc-cgl-t2-re2-016', 'Calendar', 'easy', 'If 10 January is a Monday, what day of the week is 31 January of the same year?', ['Friday', 'Saturday', 'Sunday', 'Monday'], 3, 'The dates are 21 days apart, exactly three weeks, so 31 January is also a Monday.'),
  question('ssc-cgl-t2-re2-017', 'Clock reasoning', 'medium', 'What is the smaller angle between the hands of a clock at 4:30?', ['45 degrees', '30 degrees', '60 degrees', '75 degrees'], 0, 'At 4:30, the minute hand is at 180 degrees and the hour hand is at 4.5 x 30 = 135 degrees. Their difference is 45 degrees.'),
  question('ssc-cgl-t2-re2-018', 'Dice', 'easy', 'On a standard die, opposite faces add up to 7. Which face is opposite the face numbered 6?', ['2', '1', '3', '5'], 1, 'The number opposite 6 is 1 because 6 + 1 = 7.'),
  question('ssc-cgl-t2-re2-019', 'Symbolic operations', 'easy', 'If @ means multiplication and # means subtraction, what is the value of 9 @ 4 # 5?', ['27', '29', '31', '36'], 2, 'Replacing the symbols gives 9 x 4 - 5 = 36 - 5 = 31.'),
  question('ssc-cgl-t2-re2-020', 'Dictionary order', 'medium', 'When Manage, Mango, Manner and Manual are arranged in dictionary order, which word comes fourth?', ['Mango', 'Manage', 'Manner', 'Manual'], 3, 'The order is Manage, Mango, Manner, Manual. Therefore Manual comes fourth.'),
  question('ssc-cgl-t2-re2-021', 'Cause and effect', 'easy', 'Event I: A power outage affected the neighbourhood. Event II: The traffic lights in the neighbourhood stopped working. What is the most reasonable relation?', ['Event I is a cause of Event II', 'Event II is a cause of Event I', 'Both are unrelated', 'Both are causes of a third event'], 0, 'A power outage can directly cause traffic lights to stop working, so Event I is a reasonable cause of Event II.'),
  question('ssc-cgl-t2-re2-022', 'Drawing inferences', 'medium', 'Every registered member received a badge. Kiran did not receive a badge. What follows logically?', ['Kiran lost a badge', 'Kiran is not a registered member', 'No member received a badge', 'Kiran refused membership'], 1, 'If every registered member received a badge, someone who did not receive one cannot be a registered member.'),
  question('ssc-cgl-t2-re2-023', 'Logical conclusions', 'medium', 'Statements: Some scientists are writers. All writers are readers. Which conclusion definitely follows?', ['All scientists are readers', 'No scientist is a reader', 'Some scientists are readers', 'Some readers are not writers'], 2, 'The scientists who are writers must also be readers, so some scientists are readers.'),
  question('ssc-cgl-t2-re2-024', 'Emotional intelligence', 'easy', 'A colleague criticises your work in an angry tone during a meeting. Which response best demonstrates emotional intelligence?', ['Interrupt and criticise them in return', 'Ignore all future feedback from them', 'Leave the meeting without explanation', 'Remain calm, clarify the concern and suggest discussing details respectfully'], 3, 'Remaining calm while acknowledging and clarifying the concern manages emotion without avoiding the issue.'),
  question('ssc-cgl-t2-re2-025', 'Social intelligence', 'easy', 'A new group member appears hesitant to speak because they are unfamiliar with the discussion. What is the most socially intelligent response?', ['Briefly summarise the context and invite their view', 'Continue without involving them', 'Ask them to leave the group', 'Speak on their behalf without asking'], 0, 'Providing context and inviting participation supports inclusion without putting words in the person\'s mouth.'),
  question('ssc-cgl-t2-re2-026', 'Data sufficiency', 'medium', 'What is x? Statement I: 2x + y = 11. Statement II: y = 3. Which information is sufficient?', ['Statement I alone', 'Both statements together', 'Statement II alone', 'Either statement alone'], 1, 'Neither statement alone fixes x, but together they give 2x + 3 = 11, so x = 4.'),
  question('ssc-cgl-t2-re2-027', 'Ordering', 'easy', 'P is taller than Q. R is taller than P. S is shorter than Q. Who is the tallest?', ['P', 'Q', 'R', 'S'], 2, 'R is taller than P, while P is taller than Q and S is shorter than Q. Therefore R is tallest.'),
  question('ssc-cgl-t2-re2-028', 'Cube and dice', 'medium', 'A cube is painted on all six faces and cut into 64 equal smaller cubes. How many smaller cubes have exactly three painted faces?', ['4', '12', '24', '8'], 3, 'The cube is divided 4 x 4 x 4. Only the eight corner cubes have exactly three painted faces.'),
  question('ssc-cgl-t2-re2-029', 'Space orientation', 'hard', 'A person faces west, turns 135 degrees clockwise and then 45 degrees anticlockwise. Which direction is the person facing?', ['North', 'Northeast', 'Northwest', 'South'], 0, 'The net turn is 90 degrees clockwise. Turning 90 degrees clockwise from west leads to north.'),
  question('ssc-cgl-t2-re2-030', 'Order arrangement', 'easy', 'Four books W, X, Y and Z are arranged in a row. W is left of X, Y is right of X, and Z is left of W. Which book is second from the left?', ['Z', 'W', 'X', 'Y'], 1, 'The only order satisfying all relations is Z, W, X, Y. Therefore W is second from the left.'),
];
