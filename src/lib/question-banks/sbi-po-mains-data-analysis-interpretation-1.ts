import type { Question } from '../questions';

const SOURCE = {
  kind: 'original' as const,
  reference: 'TakeMockTest original practice aligned to the SBI PO 2026 Mains Data Analysis & Interpretation section',
  url: 'https://sbi.bank.in/web/careers/current-openings',
  checkedOn: '26 August 2026',
};

const MARKS = 60 / 30;
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

const TABLE_PREFIX =
  'A bank branch recorded the number of loan applications received over 5 days: Monday 120, Tuesday 150, Wednesday 90, Thursday 180, Friday 160. ';
const PIE_PREFIX =
  'A company\'s annual expenditure of ₹60 lakh is split across departments in a pie chart: Marketing 25%, Operations 35%, HR 15%, R&D 15%, Admin 10%. ';
const BAR_PREFIX =
  'A bar chart shows the number of new savings accounts opened at a bank over 4 quarters: Q1 = 800, Q2 = 950, Q3 = 700, Q4 = 1100. ';
const LINE_PREFIX =
  'A line graph shows a company\'s monthly revenue (in ₹ lakh) over 5 months: Jan 40, Feb 55, Mar 45, Apr 70, May 60. ';

export const SBI_PO_MAINS_DATA_ANALYSIS_INTERPRETATION_1: Question[] = [
  question('sbi-po-m-dai-001', 'Tabular DI', 'easy', TABLE_PREFIX + 'What is the total number of loan applications received over the 5 days?', ['600', '650', '750', '700'], 3, '120+150+90+180+160 = 700.'),
  question('sbi-po-m-dai-002', 'Tabular DI', 'medium', TABLE_PREFIX + 'What is the average number of applications received per day?', ['130', '135', '145', '140'], 3, 'Total applications = 700; average = 700 / 5 = 140.'),
  question('sbi-po-m-dai-003', 'Tabular DI', 'medium', TABLE_PREFIX + 'What percentage of the week\'s total applications were received on Thursday?', ['~25.7%', '~20%', '~30%', '~18%'], 0, 'Thursday\'s share = 180/700 * 100 ≈ 25.7%.'),
  question('sbi-po-m-dai-004', 'Tabular DI', 'hard', TABLE_PREFIX + 'What is the ratio of applications received on Tuesday and Friday combined to applications received on Monday and Wednesday combined?', ['31:21', '21:31', '3:2', '2:3'], 0, 'Tuesday + Friday = 150+160 = 310. Monday + Wednesday = 120+90 = 210. Ratio = 310:210 = 31:21.'),
  question('sbi-po-m-dai-005', 'Tabular DI', 'medium', TABLE_PREFIX + 'By what percentage did applications increase from Wednesday to Thursday?', ['80%', '90%', '75%', '100%'], 3, 'Increase = 180 - 90 = 90. Percentage increase = 90/90 * 100 = 100%.'),
  question('sbi-po-m-dai-006', 'Pie chart DI', 'easy', PIE_PREFIX + 'What is the amount (in ₹ lakh) spent on Operations?', ['15', '18', '25', '21'], 3, 'Operations = 35% of ₹60 lakh = 0.35 * 60 = ₹21 lakh.'),
  question('sbi-po-m-dai-007', 'Pie chart DI', 'medium', PIE_PREFIX + 'How much more (in ₹ lakh) is spent on Marketing than on HR?', ['4', '5', '9', '6'], 3, 'Marketing = 25% of 60 = 15 lakh. HR = 15% of 60 = 9 lakh. Difference = 15 - 9 = 6 lakh.'),
  question('sbi-po-m-dai-008', 'Pie chart DI', 'medium', PIE_PREFIX + 'What is the combined percentage spent on R&D and Admin together?', ['25%', '20%', '30%', '35%'], 0, 'R&D (15%) + Admin (10%) = 25%.'),
  question('sbi-po-m-dai-009', 'Pie chart DI', 'hard', PIE_PREFIX + 'If the company increases its total annual expenditure to ₹72 lakh next year while keeping the same percentage split, what will be the new amount spent on Operations?', ['₹23.4 lakh', '₹24 lakh', '₹27 lakh', '₹25.2 lakh'], 3, 'Operations remains 35% of the new total: 0.35 * 72 = ₹25.2 lakh.'),
  question('sbi-po-m-dai-010', 'Bar graph DI', 'easy', BAR_PREFIX + 'What is the total number of new savings accounts opened across all 4 quarters?', ['3350', '3450', '3650', '3550'], 3, '800+950+700+1100 = 3550.'),
  question('sbi-po-m-dai-011', 'Bar graph DI', 'medium', BAR_PREFIX + 'What is the percentage decline in new accounts from Q2 to Q3?', ['~26.3%', '~20%', '~30%', '~24%'], 0, 'Decline = 950 - 700 = 250. Percentage decline = 250/950 * 100 ≈ 26.3%.'),
  question('sbi-po-m-dai-012', 'Bar graph DI', 'medium', BAR_PREFIX + 'What is the average number of new accounts opened per quarter?', ['837.5', '850', '887.5', '900'], 2, 'Total = 3550; average = 3550/4 = 887.5.'),
  question('sbi-po-m-dai-013', 'Bar graph DI', 'medium', BAR_PREFIX + 'What is the ratio of accounts opened in Q4 to accounts opened in Q3?', ['11:7', '7:11', '10:7', '7:10'], 0, 'Q4 = 1100 and Q3 = 700. Ratio = 1100:700, which simplifies (dividing both by 100) to 11:7.'),
  question('sbi-po-m-dai-014', 'Line graph DI', 'easy', LINE_PREFIX + 'In which month was the revenue highest?', ['January', 'February', 'April', 'May'], 2, 'April recorded the highest revenue at ₹70 lakh, more than any other listed month.'),
  question('sbi-po-m-dai-015', 'Line graph DI', 'medium', LINE_PREFIX + 'What is the average monthly revenue over the 5 months?', ['₹50 lakh', '₹52 lakh', '₹54 lakh', '₹56 lakh'], 2, 'Total = 40+55+45+70+60 = 270. Average = 270/5 = ₹54 lakh.'),
  question('sbi-po-m-dai-016', 'Line graph DI', 'medium', LINE_PREFIX + 'What is the percentage increase in revenue from March to April?', ['~50%', '~55.6%', '~60%', '~45%'], 1, 'Increase = 70 - 45 = 25. Percentage increase = 25/45 * 100 ≈ 55.6%.'),
  question('sbi-po-m-dai-017', 'Line graph DI', 'medium', LINE_PREFIX + 'What is the ratio of April\'s revenue to January\'s revenue?', ['7:4', '4:7', '7:5', '5:7'], 0, 'April = ₹70 lakh and January = ₹40 lakh. Ratio = 70:40, which simplifies (dividing both by 10) to 7:4.'),
  question('sbi-po-m-dai-018', 'Data sufficiency (quant)', 'medium', 'What is the value of x? Statement I: x is an even number between 20 and 30. Statement II: x is divisible by 7.', ['Statement I alone is sufficient', 'Statement II alone is sufficient', 'Both statements together are sufficient, but neither alone', 'Both statements together are still not sufficient'], 2, 'Statement I alone allows several even numbers (22, 24, 26, 28), so it is not sufficient by itself. Statement II alone allows many multiples of 7 (7, 14, 21, 28, 35, ...), also not sufficient by itself. Combined, the only number that is both even, between 20 and 30, and divisible by 7 is 28, so both statements together are needed and sufficient.'),
  question('sbi-po-m-dai-019', 'Data sufficiency (quant)', 'medium', 'Is the number of employees in Department A more than in Department B? Statement I: Department A has 45 employees. Statement II: Department B has 15% fewer employees than Department A.', ['Statement I alone is sufficient', 'Statement II alone is sufficient', 'Both statements together are sufficient, but neither alone', 'Both statements together are still not sufficient'], 1, 'Statement II alone directly states that Department B has fewer employees than Department A (15% fewer), which answers the yes/no comparison question by itself without needing the exact count from Statement I.'),
  question('sbi-po-m-dai-020', 'Caselet DI', 'medium', 'In a survey of 500 bank customers, 60% preferred mobile banking, 25% preferred branch banking, and the remaining preferred net banking. How many customers preferred net banking?', ['50', '65', '75', '85'], 2, 'Mobile banking = 60% of 500 = 300. Branch banking = 25% of 500 = 125. Remaining = 500 - 300 - 125 = 75.'),
  question('sbi-po-m-dai-021', 'Caselet DI', 'hard', 'A company has 800 employees, of whom 55% are male. Of the male employees, 40% are in technical roles. Of the female employees, 30% are in technical roles. How many employees in total are in technical roles?', ['272', '284', '296', '308'], 1, 'Male employees = 55% of 800 = 440; technical males = 40% of 440 = 176. Female employees = 45% of 800 = 360; technical females = 30% of 360 = 108. Total technical = 176 + 108 = 284.'),
  question('sbi-po-m-dai-022', 'Probability', 'medium', 'A bag contains 5 red balls and 7 blue balls. If one ball is drawn at random, what is the probability that it is red?', ['5/12', '7/12', '5/7', '1/2'], 0, 'Total balls = 5 + 7 = 12. Probability of red = 5/12.'),
  question('sbi-po-m-dai-023', 'Probability', 'hard', 'Two dice are rolled together. What is the probability that the sum of the numbers shown is 8?', ['5/36', '6/36', '4/36', '7/36'], 0, 'Combinations summing to 8: (2,6),(3,5),(4,4),(5,3),(6,2) = 5 combinations out of 36 total, so probability = 5/36.'),
  question('sbi-po-m-dai-024', 'Missing data DI', 'medium', 'In a data set of 5 values, 4 are known: 22, 35, 18, 29, and the mean of all 5 values is 26. What is the 5th value?', ['24', '26', '28', '30'], 1, 'Sum of all 5 values = 26 * 5 = 130. Sum of the known 4 values = 22+35+18+29 = 104. Missing value = 130 - 104 = 26.'),
  question('sbi-po-m-dai-025', 'Ratio and proportion (DI)', 'medium', 'The ratio of male to female employees in a company is 7:5. If there are 84 male employees, how many female employees are there?', ['48', '54', '60', '65'], 2, 'Ratio 7:5 means each part = 84/7 = 12. Female employees = 5 * 12 = 60.'),
  question('sbi-po-m-dai-026', 'Simple and compound interest (DI)', 'medium', 'A sum of ₹40,000 is invested at 10% per annum simple interest for 2 years. What is the total interest earned?', ['₹7,000', '₹8,000', '₹8,400', '₹9,000'], 1, 'Simple interest = P * R * T / 100 = 40000 * 10 * 2 / 100 = ₹8,000.'),
  question('sbi-po-m-dai-027', 'Simple and compound interest (DI)', 'hard', 'What is the compound interest on ₹20,000 for 2 years at 10% per annum, compounded annually?', ['₹4,000', '₹4,100', '₹4,200', '₹4,400'], 2, 'Amount = 20000 * (1.1)^2 = 20000 * 1.21 = ₹24,200. Compound interest = 24,200 - 20,000 = ₹4,200.'),
  question('sbi-po-m-dai-028', 'Averages (DI)', 'medium', 'The average monthly savings of a family for the first 4 months was ₹5,000. In the 5th month, the family saved ₹8,000. What is the new average savings over the 5 months?', ['₹5,400', '₹5,600', '₹5,800', '₹6,000'], 1, 'Total for first 4 months = 5000 * 4 = 20,000. Adding month 5 (8,000) gives 28,000 over 5 months. New average = 28,000 / 5 = ₹5,600.'),
  question('sbi-po-m-dai-029', 'Profit and loss (DI)', 'medium', 'A shopkeeper buys an item for ₹1,200 and sells it at a 15% profit. What is the selling price?', ['₹1,320', '₹1,350', '₹1,380', '₹1,400'], 2, 'Selling price = Cost price * (1 + profit%) = 1200 * 1.15 = ₹1,380.'),
  question('sbi-po-m-dai-030', 'Time and work (DI)', 'hard', 'A can complete a task in 20 days, and B can complete the same task in 30 days. If they work together, in how many days will they complete the task?', ['10 days', '12 days', '14 days', '15 days'], 1, 'A\'s rate = 1/20, B\'s rate = 1/30. Combined rate = 1/20 + 1/30 = 3/60 + 2/60 = 5/60 = 1/12. So together they complete the task in 12 days.'),
];
