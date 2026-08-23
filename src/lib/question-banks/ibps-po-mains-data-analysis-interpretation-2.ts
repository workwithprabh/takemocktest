import type { Question } from '../questions';

const SOURCE = {
  kind: 'original' as const,
  reference: 'TakeMockTest original practice aligned to the IBPS PO XVI Mains Data Analysis and Interpretation section',
  url: 'https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf',
  checkedOn: '23 August 2026',
};

const MARKS = 60 / 40;
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
    section: 'Data Analysis and Interpretation',
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

const TABLE_A = "A company's quarterly expenses (in ₹ lakh) were: Q1 = 40, Q2 = 55, Q3 = 70, Q4 = 75.";
const BAR_B = 'The number of complaints resolved by a helpdesk each month was: March = 45, April = 65, May = 55, June = 75, July = 35.';
const LINE_C = "A store's daily footfall (number of visitors) over five days was: Monday = 180, Tuesday = 220, Wednesday = 160, Thursday = 260, Friday = 200.";
const PIE_D = 'A budget of total size ₹800 crore is divided among 5 departments by share: Health = 35%, Education = 25%, Infrastructure = 20%, Defence = 15%, Others = 5%.';
const TABLE_E = 'In a badminton tournament, five players scored the following points: A = 52, B = 68, C = 41, D = 59, E = 35.';
const BAR_F = "A warehouse's monthly dispatches (in units) were: May = 240, June = 300, July = 270, August = 360.";
const RATIO_G = 'Two partners M and N share profits in the ratio 5:7, with a combined profit of ₹9,60,000.';
const TABLE_H = 'A college has three departments with the following students: Department X has 40 boys and 35 girls; Department Y has 45 boys and 30 girls; Department Z has 35 boys and 40 girls.';

export const IBPS_PO_MAINS_DATA_ANALYSIS_INTERPRETATION_2: Question[] = [
  question('ibps-po-m-dai2-001', 'Table', 'easy', `${TABLE_A} What was the company's total expenses for the year?`, ['240', '235', '245', '250'], 0, 'Total expenses = 40 + 55 + 70 + 75 = 240 (₹ lakh).'),
  question('ibps-po-m-dai2-002', 'Table', 'medium', `${TABLE_A} What was the percentage increase in expenses from Q1 to Q4?`, ['80%', '87.5%', '90%', '85%'], 1, 'Percentage increase = (75 − 40) / 40 × 100 = 87.5%.'),
  question('ibps-po-m-dai2-003', 'Table', 'easy', `${TABLE_A} What was the average quarterly expenses for the year?`, ['58', '59', '60', '61'], 2, 'Average = (40 + 55 + 70 + 75) / 4 = 240 / 4 = 60 (₹ lakh).'),
  question('ibps-po-m-dai2-004', 'Table', 'medium', `${TABLE_A} What is the ratio of Q3 expenses to Q1 expenses?`, ['5 : 3', '3 : 2', '8 : 5', '7 : 4'], 3, 'Ratio = 70 : 40, which simplifies by dividing both by 10 to 7 : 4.'),
  question('ibps-po-m-dai2-005', 'Table', 'easy', `${TABLE_A} Which quarter recorded the highest expenses?`, ['Q4', 'Q1', 'Q2', 'Q3'], 0, 'Q4 had expenses of 75, the highest of the four quarters.'),
  question('ibps-po-m-dai2-006', 'Bar graph', 'easy', `${BAR_B} What was the total number of complaints resolved over the five months?`, ['265', '275', '285', '295'], 1, 'Total = 45 + 65 + 55 + 75 + 35 = 275.'),
  question('ibps-po-m-dai2-007', 'Bar graph', 'easy', `${BAR_B} In which month did the helpdesk resolve the fewest complaints?`, ['March', 'April', 'July', 'May'], 2, 'July had the fewest resolved complaints, at 35.'),
  question('ibps-po-m-dai2-008', 'Bar graph', 'medium', `${BAR_B} What percentage of the total complaints resolved over the five months happened in June?`, ['about 20%', 'about 23%', 'about 30%', 'about 27%'], 3, "June's share of the total = 75 / 275 × 100 ≈ 27.3%, closest to \"about 27%\"."),
  question('ibps-po-m-dai2-009', 'Bar graph', 'easy', `${BAR_B} What was the average number of complaints resolved per month?`, ['55', '50', '60', '45'], 0, 'Average = 275 / 5 = 55 complaints per month.'),
  question('ibps-po-m-dai2-010', 'Bar graph', 'medium', `${BAR_B} What percentage of the total resolved complaints did April and May together account for?`, ['40%', 'about 44%', '48%', '50%'], 1, 'April and May combined = 65 + 55 = 120. As a share of the total: 120 / 275 × 100 ≈ 43.6%, closest to "about 44%".'),
  question('ibps-po-m-dai2-011', 'Line graph', 'easy', `${LINE_C} What was the total footfall over the five days?`, ['990', '1010', '1020', '1030'], 2, 'Total = 180 + 220 + 160 + 260 + 200 = 1020 visitors.'),
  question('ibps-po-m-dai2-012', 'Line graph', 'easy', `${LINE_C} On which day was the footfall the lowest?`, ['Monday', 'Tuesday', 'Friday', 'Wednesday'], 3, 'Wednesday had the lowest footfall, at 160 visitors.'),
  question('ibps-po-m-dai2-013', 'Line graph', 'medium', `${LINE_C} What was the percentage increase in footfall from Wednesday to Thursday?`, ['62.5%', '60%', '65%', '58%'], 0, 'Percentage increase = (260 − 160) / 160 × 100 = 62.5%.'),
  question('ibps-po-m-dai2-014', 'Line graph', 'easy', `${LINE_C} What was the average daily footfall over the five days?`, ['200', '204', '208', '210'], 1, 'Average = 1020 / 5 = 204 visitors.'),
  question('ibps-po-m-dai2-015', 'Line graph', 'medium', `${LINE_C} What was the approximate percentage decrease in footfall from Thursday to Friday?`, ['about 18%', 'about 20%', 'about 23%', 'about 27%'], 2, 'Percentage decrease = (260 − 200) / 260 × 100 ≈ 23.1%, closest to "about 23%".'),
  question('ibps-po-m-dai2-016', 'Pie chart', 'easy', `${PIE_D} Which department holds the largest budget share?`, ['Education', 'Infrastructure', 'Defence', 'Health'], 3, 'The Health department holds the largest share, at 35%.'),
  question('ibps-po-m-dai2-017', 'Pie chart', 'medium', `${PIE_D} What is the Infrastructure department's budget in absolute terms?`, ['₹160 crore', '₹150 crore', '₹170 crore', '₹140 crore'], 0, "Infrastructure's budget = 20% of ₹800 crore = ₹160 crore."),
  question('ibps-po-m-dai2-018', 'Pie chart', 'easy', `${PIE_D} What is the combined budget share of the Defence and Others departments?`, ['15%', '20%', '25%', '30%'], 1, 'Combined share = 15% + 5% = 20%.'),
  question('ibps-po-m-dai2-019', 'Pie chart', 'medium', `${PIE_D} What is the ratio of the Health department's budget share to the Defence department's budget share?`, ['5 : 2', '2 : 1', '7 : 3', '3 : 1'], 2, 'Ratio = 35% : 15%, which simplifies to 7 : 3.'),
  question('ibps-po-m-dai2-020', 'Pie chart', 'hard', `${PIE_D} If the total budget grows to ₹960 crore next year with the same percentage shares, what would be the Education department's budget?`, ['₹200 crore', '₹220 crore', '₹260 crore', '₹240 crore'], 3, "Education's budget = 25% of ₹960 crore = ₹240 crore."),
  question('ibps-po-m-dai2-021', 'Table', 'easy', `${TABLE_E} What was the total points scored by all five players?`, ['255', '245', '265', '250'], 0, 'Total = 52 + 68 + 41 + 59 + 35 = 255 points.'),
  question('ibps-po-m-dai2-022', 'Table', 'easy', `${TABLE_E} Which player scored the highest points?`, ['A', 'B', 'D', 'C'], 1, 'Player B scored 68 points, the highest among the five.'),
  question('ibps-po-m-dai2-023', 'Table', 'easy', `${TABLE_E} What was the average points scored per player?`, ['48', '50', '51', '54'], 2, 'Average = 255 / 5 = 51 points.'),
  question('ibps-po-m-dai2-024', 'Table', 'medium', `${TABLE_E} What was the difference between the highest and the lowest scores?`, ['29', '31', '35', '33'], 3, 'Difference = 68 (highest, B) − 35 (lowest, E) = 33 points.'),
  question('ibps-po-m-dai2-025', 'Table', 'medium', `${TABLE_E} Player E's score is approximately what percentage of the total points?`, ['about 14%', 'about 18%', 'about 22%', 'about 26%'], 0, "E's share = 35 / 255 × 100 ≈ 13.7%, closest to \"about 14%\"."),
  question('ibps-po-m-dai2-026', 'Bar graph', 'easy', `${BAR_F} What was the total dispatches over the four months?`, ['1150', '1170', '1190', '1210'], 1, 'Total = 240 + 300 + 270 + 360 = 1170 units.'),
  question('ibps-po-m-dai2-027', 'Bar graph', 'medium', `${BAR_F} What was the percentage increase in dispatches from May to August?`, ['40%', '45%', '50%', '55%'], 2, 'Percentage increase = (360 − 240) / 240 × 100 = 50%.'),
  question('ibps-po-m-dai2-028', 'Bar graph', 'easy', `${BAR_F} What was the average monthly dispatches over the four months?`, ['285', '288.75', '290', '292.5'], 3, 'Average = 1170 / 4 = 292.5 units.'),
  question('ibps-po-m-dai2-029', 'Bar graph', 'easy', `${BAR_F} Which month recorded the second-highest dispatches?`, ['June', 'May', 'July', 'August'], 0, 'Ordering the months by dispatches: August (360) > June (300) > July (270) > May (240). June is second-highest.'),
  question('ibps-po-m-dai2-030', 'Bar graph', 'medium', `${BAR_F} July's dispatches are approximately what percentage of the total dispatches?`, ['about 18%', 'about 23%', 'about 28%', 'about 33%'], 1, "July's share = 270 / 1170 × 100 ≈ 23.1%, closest to \"about 23%\"."),
  question('ibps-po-m-dai2-031', 'Ratio and proportion', 'medium', `${RATIO_G} What is partner M's profit?`, ['₹3,60,000', '₹3,80,000', '₹4,00,000', '₹4,20,000'], 2, "M's share = 5/12 × 9,60,000 = ₹4,00,000."),
  question('ibps-po-m-dai2-032', 'Ratio and proportion', 'medium', `${RATIO_G} What is partner N's profit?`, ['₹5,20,000', '₹5,40,000', '₹5,80,000', '₹5,60,000'], 3, "N's share = 7/12 × 9,60,000 = ₹5,60,000."),
  question('ibps-po-m-dai2-033', 'Ratio and proportion', 'easy', `${RATIO_G} What is the difference between partner N's and partner M's profit?`, ['₹1,60,000', '₹1,40,000', '₹1,80,000', '₹2,00,000'], 0, "Difference = ₹5,60,000 − ₹4,00,000 = ₹1,60,000."),
  question('ibps-po-m-dai2-034', 'Ratio and proportion', 'hard', `${RATIO_G} If the combined profit rises to ₹14,40,000 while the ratio stays the same, what would be partner N's new profit?`, ['₹8,00,000', '₹8,40,000', '₹8,80,000', '₹9,20,000'], 1, "N's new share = 7/12 × 14,40,000 = ₹8,40,000."),
  question('ibps-po-m-dai2-035', 'Ratio and proportion', 'medium', `${RATIO_G} Partner M's profit is approximately what percentage of the combined profit?`, ['about 33%', 'about 38%', 'about 42%', 'about 46%'], 2, "M's share = 5/12 × 100 ≈ 41.7%, closest to \"about 42%\"."),
  question('ibps-po-m-dai2-036', 'Table', 'easy', `${TABLE_H} What is the total number of students across all three departments?`, ['210', '215', '220', '225'], 3, 'Total = (40 + 35) + (45 + 30) + (35 + 40) = 75 + 75 + 75 = 225 students.'),
  question('ibps-po-m-dai2-037', 'Table', 'easy', `${TABLE_H} What is the total number of boys across all three departments?`, ['120', '110', '115', '125'], 0, 'Total boys = 40 + 45 + 35 = 120.'),
  question('ibps-po-m-dai2-038', 'Table', 'easy', `${TABLE_H} What is the total number of girls across all three departments?`, ['95', '105', '100', '110'], 1, 'Total girls = 35 + 30 + 40 = 105.'),
  question('ibps-po-m-dai2-039', 'Table', 'medium', `${TABLE_H} Which department has the highest number of girls?`, ['Department X', 'Department Y', 'Department Z', 'All departments are equal'], 2, 'Department Z has 40 girls, more than Department X (35) and Department Y (30).'),
  question('ibps-po-m-dai2-040', 'Table', 'medium', `${TABLE_H} What is the overall ratio of boys to girls across all three departments?`, ['7 : 8', '9 : 7', '7 : 6', '8 : 7'], 3, 'Overall ratio = 120 boys : 105 girls, which simplifies by dividing both by 15 to 8 : 7.'),
];
