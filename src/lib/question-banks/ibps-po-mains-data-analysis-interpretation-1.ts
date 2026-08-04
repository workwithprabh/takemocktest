import type { Question } from '../questions';

const SOURCE = {
  kind: 'original' as const,
  reference: 'TakeMockTest original practice aligned to the IBPS PO XVI Mains Data Analysis and Interpretation section',
  url: 'https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf',
  checkedOn: '3 August 2026',
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

const TABLE_A = 'A company\'s quarterly sales (in ₹ lakh) were: Q1 = 50, Q2 = 65, Q3 = 80, Q4 = 85.';
const BAR_B = 'The number of employees joining a company each year was: 2021 = 30, 2022 = 50, 2023 = 40, 2024 = 60, 2025 = 20.';
const LINE_C = 'A company\'s monthly revenue (in ₹ thousand) was: January = 120, February = 150, March = 100, April = 200, May = 130.';
const PIE_D = 'A market of total size ₹500 crore is divided among 5 companies by share: P = 30%, Q = 25%, R = 20%, S = 15%, T = 10%.';
const TABLE_E = 'In a cricket match, four batsmen scored the following runs: A = 45, B = 60, C = 38, D = 77.';
const BAR_F = 'A factory\'s monthly production (in units) was: January = 200, February = 250, March = 225, April = 275.';
const RATIO_G = 'Two companies X and Y have profits in the ratio 3:4, with a combined profit of ₹7,00,000.';
const TABLE_H = 'A school has three sections with the following students: Section A has 25 boys and 20 girls; Section B has 30 boys and 15 girls; Section C has 20 boys and 25 girls.';

export const IBPS_PO_MAINS_DATA_ANALYSIS_INTERPRETATION_1: Question[] = [
  question('ibps-po-m-dai-001', 'Table', 'easy', `${TABLE_A} What was the company's total sales for the year?`, ['280', '275', '290', '265'], 0, 'Total sales = 50 + 65 + 80 + 85 = 280 (₹ lakh).'),
  question('ibps-po-m-dai-002', 'Table', 'medium', `${TABLE_A} What was the percentage increase in sales from Q1 to Q4?`, ['60%', '70%', '75%', '65%'], 1, 'Percentage increase = (85 − 50) / 50 × 100 = 70%.'),
  question('ibps-po-m-dai-003', 'Table', 'easy', `${TABLE_A} What was the average quarterly sales for the year?`, ['65', '72', '70', '75'], 2, 'Average = (50 + 65 + 80 + 85) / 4 = 280 / 4 = 70 (₹ lakh).'),
  question('ibps-po-m-dai-004', 'Table', 'medium', `${TABLE_A} What is the ratio of Q3 sales to Q1 sales?`, ['5 : 8', '4 : 3', '3 : 2', '8 : 5'], 3, 'Ratio = 80 : 50, which simplifies by dividing both by 10 to 8 : 5.'),
  question('ibps-po-m-dai-005', 'Table', 'easy', `${TABLE_A} Which quarter recorded the highest sales?`, ['Q4', 'Q1', 'Q2', 'Q3'], 0, 'Q4 had sales of 85, the highest of the four quarters.'),
  question('ibps-po-m-dai-006', 'Bar graph', 'easy', `${BAR_B} What was the total number of employees who joined over the five years?`, ['190', '200', '210', '220'], 1, 'Total = 30 + 50 + 40 + 60 + 20 = 200.'),
  question('ibps-po-m-dai-007', 'Bar graph', 'easy', `${BAR_B} In which year did the company see the lowest number of new joinings?`, ['2021', '2023', '2025', '2022'], 2, '2025 had the lowest joinings at 20 employees.'),
  question('ibps-po-m-dai-008', 'Bar graph', 'medium', `${BAR_B} What percentage of the total joinings over the five years happened in 2024?`, ['25%', '20%', '35%', '30%'], 3, '2024 joinings as a share of the total = 60 / 200 × 100 = 30%.'),
  question('ibps-po-m-dai-009', 'Bar graph', 'easy', `${BAR_B} What was the average number of employees joining per year?`, ['40', '45', '35', '50'], 0, 'Average = 200 / 5 = 40 employees per year.'),
  question('ibps-po-m-dai-010', 'Bar graph', 'medium', `${BAR_B} What percentage of the total joinings did 2022 and 2023 together account for?`, ['40%', '45%', '50%', '55%'], 1, '2022 and 2023 combined = 50 + 40 = 90. As a share of the total: 90 / 200 × 100 = 45%.'),
  question('ibps-po-m-dai-011', 'Line graph', 'easy', `${LINE_C} What was the total revenue over the five months?`, ['650', '690', '700', '710'], 2, 'Total = 120 + 150 + 100 + 200 + 130 = 700 (₹ thousand).'),
  question('ibps-po-m-dai-012', 'Line graph', 'easy', `${LINE_C} In which month was the revenue the lowest?`, ['January', 'February', 'May', 'March'], 3, 'March had the lowest revenue at 100 (₹ thousand).'),
  question('ibps-po-m-dai-013', 'Line graph', 'medium', `${LINE_C} What was the percentage increase in revenue from March to April?`, ['100%', '90%', '80%', '120%'], 0, 'Percentage increase = (200 − 100) / 100 × 100 = 100%.'),
  question('ibps-po-m-dai-014', 'Line graph', 'easy', `${LINE_C} What was the average monthly revenue over the five months?`, ['130', '140', '150', '135'], 1, 'Average = 700 / 5 = 140 (₹ thousand).'),
  question('ibps-po-m-dai-015', 'Line graph', 'medium', `${LINE_C} What was the approximate percentage decrease in revenue from April to May?`, ['30%', '32%', '35%', '40%'], 2, 'Percentage decrease = (200 − 130) / 200 × 100 = 35%.'),
  question('ibps-po-m-dai-016', 'Pie chart', 'easy', `${PIE_D} Which company holds the largest market share?`, ['Q', 'R', 'S', 'P'], 3, 'Company P holds the largest share at 30%.'),
  question('ibps-po-m-dai-017', 'Pie chart', 'medium', `${PIE_D} What is company R's revenue in absolute terms?`, ['₹100 crore', '₹120 crore', '₹90 crore', '₹110 crore'], 0, "R's revenue = 20% of ₹500 crore = ₹100 crore."),
  question('ibps-po-m-dai-018', 'Pie chart', 'easy', `${PIE_D} What is the combined market share of companies S and T?`, ['20%', '25%', '30%', '35%'], 1, 'Combined share = 15% + 10% = 25%.'),
  question('ibps-po-m-dai-019', 'Pie chart', 'medium', `${PIE_D} What is the ratio of company P's market share to company S's market share?`, ['3 : 2', '1 : 1', '2 : 1', '3 : 1'], 2, "Ratio = 30% : 15%, which simplifies to 2 : 1."),
  question('ibps-po-m-dai-020', 'Pie chart', 'hard', `${PIE_D} If the total market grows to ₹600 crore next year with the same percentage shares, what would be company Q's revenue?`, ['₹120 crore', '₹130 crore', '₹140 crore', '₹150 crore'], 3, "Q's revenue = 25% of ₹600 crore = ₹150 crore."),
  question('ibps-po-m-dai-021', 'Table', 'easy', `${TABLE_E} What was the total runs scored by all four batsmen?`, ['220', '210', '225', '215'], 0, 'Total = 45 + 60 + 38 + 77 = 220 runs.'),
  question('ibps-po-m-dai-022', 'Table', 'easy', `${TABLE_E} Which batsman scored the highest runs?`, ['B', 'D', 'A', 'C'], 1, 'Batsman D scored 77 runs, the highest among the four.'),
  question('ibps-po-m-dai-023', 'Table', 'easy', `${TABLE_E} What was the average runs scored per batsman?`, ['50', '52', '55', '58'], 2, 'Average = 220 / 4 = 55 runs.'),
  question('ibps-po-m-dai-024', 'Table', 'medium', `${TABLE_E} What was the difference between the highest and the lowest scores?`, ['35', '37', '41', '39'], 3, 'Difference = 77 (highest, D) − 38 (lowest, C) = 39 runs.'),
  question('ibps-po-m-dai-025', 'Table', 'medium', `${TABLE_E} Batsman A's score is approximately what percentage of the total runs?`, ['about 20%', 'about 25%', 'about 15%', 'about 30%'], 0, "A's share = 45 / 220 × 100 ≈ 20.5%, closest to \"about 20%\"."),
  question('ibps-po-m-dai-026', 'Bar graph', 'easy', `${BAR_F} What was the total production over the four months?`, ['900', '950', '975', '925'], 1, 'Total = 200 + 250 + 225 + 275 = 950 units.'),
  question('ibps-po-m-dai-027', 'Bar graph', 'medium', `${BAR_F} What was the percentage increase in production from January to April?`, ['30%', '35%', '37.5%', '40%'], 2, 'Percentage increase = (275 − 200) / 200 × 100 = 37.5%.'),
  question('ibps-po-m-dai-028', 'Bar graph', 'easy', `${BAR_F} What was the average monthly production over the four months?`, ['225', '230', '235', '237.5'], 3, 'Average = 950 / 4 = 237.5 units.'),
  question('ibps-po-m-dai-029', 'Bar graph', 'easy', `${BAR_F} Which month recorded the second-highest production?`, ['February', 'March', 'January', 'April'], 0, 'Ordering the months by production: April (275) > February (250) > March (225) > January (200). February is second-highest.'),
  question('ibps-po-m-dai-030', 'Bar graph', 'medium', `${BAR_F} March's production is approximately what percentage of the total production?`, ['about 21%', 'about 24%', 'about 27%', 'about 30%'], 1, "March's share = 225 / 950 × 100 ≈ 23.7%, closest to \"about 24%\"."),
  question('ibps-po-m-dai-031', 'Ratio and proportion', 'medium', `${RATIO_G} What is company X's profit?`, ['₹2,80,000', '₹2,90,000', '₹3,00,000', '₹3,10,000'], 2, "X's share = 3/7 × 7,00,000 = ₹3,00,000."),
  question('ibps-po-m-dai-032', 'Ratio and proportion', 'medium', `${RATIO_G} What is company Y's profit?`, ['₹3,80,000', '₹3,90,000', '₹4,10,000', '₹4,00,000'], 3, "Y's share = 4/7 × 7,00,000 = ₹4,00,000."),
  question('ibps-po-m-dai-033', 'Ratio and proportion', 'easy', `${RATIO_G} What is the difference between company Y's and company X's profit?`, ['₹1,00,000', '₹90,000', '₹1,10,000', '₹1,20,000'], 0, "Difference = ₹4,00,000 − ₹3,00,000 = ₹1,00,000."),
  question('ibps-po-m-dai-034', 'Ratio and proportion', 'hard', `${RATIO_G} If the combined profit rises to ₹9,80,000 while the ratio stays the same, what would be company Y's new profit?`, ['₹5,40,000', '₹5,60,000', '₹5,80,000', '₹6,00,000'], 1, "Y's new share = 4/7 × 9,80,000 = ₹5,60,000."),
  question('ibps-po-m-dai-035', 'Ratio and proportion', 'medium', `${RATIO_G} Company X's profit is approximately what percentage of the combined profit?`, ['about 40%', 'about 38%', 'about 43%', 'about 46%'], 2, "X's share = 3/7 × 100 ≈ 42.9%, closest to \"about 43%\"."),
  question('ibps-po-m-dai-036', 'Table', 'easy', `${TABLE_H} What is the total number of students across all three sections?`, ['130', '125', '140', '135'], 3, 'Total = (25 + 20) + (30 + 15) + (20 + 25) = 45 + 45 + 45 = 135 students.'),
  question('ibps-po-m-dai-037', 'Table', 'easy', `${TABLE_H} What is the total number of boys across all three sections?`, ['75', '70', '80', '65'], 0, 'Total boys = 25 + 30 + 20 = 75.'),
  question('ibps-po-m-dai-038', 'Table', 'easy', `${TABLE_H} What is the total number of girls across all three sections?`, ['55', '60', '65', '50'], 1, 'Total girls = 20 + 15 + 25 = 60.'),
  question('ibps-po-m-dai-039', 'Table', 'medium', `${TABLE_H} Which section has the highest number of girls?`, ['Section A', 'Section B', 'Section C', 'All sections are equal'], 2, 'Section C has 25 girls, more than Section A (20) and Section B (15).'),
  question('ibps-po-m-dai-040', 'Table', 'medium', `${TABLE_H} What is the overall ratio of boys to girls across all three sections?`, ['4 : 5', '6 : 5', '5 : 6', '5 : 4'], 3, 'Overall ratio = 75 boys : 60 girls, which simplifies by dividing both by 15 to 5 : 4.'),
];
