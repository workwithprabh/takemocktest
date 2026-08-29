import type { Question } from '../questions';

const SOURCE = {
  kind: 'original' as const,
  reference: 'TakeMockTest original practice aligned to the SBI PO 2026 Mains Data Analysis & Interpretation section',
  url: 'https://sbi.bank.in/web/careers/current-openings',
  checkedOn: '29 August 2026',
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
  'A bank branch recorded the number of cheque-book requests received over 5 days: Monday 140, Tuesday 110, Wednesday 190, Thursday 100, Friday 160. ';
const PIE_PREFIX =
  'A company\'s annual expenditure of ₹80 lakh is split across departments in a pie chart: Marketing 25%, Operations 30%, HR 15%, R&D 20%, Admin 10%. ';
const BAR_PREFIX =
  'A bar chart shows the number of fixed deposits opened at a bank over 4 quarters: Q1 = 900, Q2 = 750, Q3 = 1050, Q4 = 800. ';
const LINE_PREFIX =
  'A line graph shows a company\'s monthly revenue (in ₹ lakh) over 5 months: Jan 50, Feb 65, Mar 55, Apr 80, May 70. ';

export const SBI_PO_MAINS_DATA_ANALYSIS_INTERPRETATION_2: Question[] = [
  question('sbi-po-m2-dai-001', 'Tabular DI', 'easy', TABLE_PREFIX + 'What is the total number of cheque-book requests received over the 5 days?', ['700', '720', '650', '680'], 0, '140+110+190+100+160 = 700.'),
  question('sbi-po-m2-dai-002', 'Tabular DI', 'medium', TABLE_PREFIX + 'What is the average number of requests received per day?', ['135', '140', '145', '130'], 1, 'Total requests = 700; average = 700 / 5 = 140.'),
  question('sbi-po-m2-dai-003', 'Tabular DI', 'medium', TABLE_PREFIX + 'What percentage of the week\'s total requests were received on Thursday?', ['~20%', '~25%', '~14.3%', '~18%'], 2, "Thursday's share = 100/700 * 100 ≈ 14.3%."),
  question('sbi-po-m2-dai-004', 'Tabular DI', 'hard', TABLE_PREFIX + 'What is the ratio of requests received on Tuesday and Friday combined to requests received on Monday and Wednesday combined?', ['11:9', '3:4', '4:3', '9:11'], 3, 'Tuesday + Friday = 110+160 = 270. Monday + Wednesday = 140+190 = 330. Ratio = 270:330, which simplifies (dividing both by 30) to 9:11.'),
  question('sbi-po-m2-dai-005', 'Tabular DI', 'medium', TABLE_PREFIX + 'By what percentage did requests change from Wednesday to Thursday?', ['A decrease of about 47.4%', 'An increase of about 47.4%', 'A decrease of about 90%', 'No change'], 0, 'Change = 100 - 190 = -90. Percentage change = -90/190 * 100 ≈ -47.4%, a decrease.'),
  question('sbi-po-m2-dai-006', 'Pie chart DI', 'easy', PIE_PREFIX + 'What is the amount (in ₹ lakh) spent on Operations?', ['22', '24', '26', '20'], 1, 'Operations = 30% of ₹80 lakh = 0.30 * 80 = ₹24 lakh.'),
  question('sbi-po-m2-dai-007', 'Pie chart DI', 'medium', PIE_PREFIX + 'How much more (in ₹ lakh) is spent on Marketing than on HR?', ['6', '7', '8', '9'], 2, 'Marketing = 25% of 80 = 20 lakh. HR = 15% of 80 = 12 lakh. Difference = 20 - 12 = 8 lakh.'),
  question('sbi-po-m2-dai-008', 'Pie chart DI', 'medium', PIE_PREFIX + 'What is the combined percentage spent on R&D and Admin together?', ['35%', '40%', '25%', '30%'], 3, 'R&D (20%) + Admin (10%) = 30%.'),
  question('sbi-po-m2-dai-009', 'Pie chart DI', 'hard', PIE_PREFIX + 'If the company increases its total annual expenditure to ₹100 lakh next year while keeping the same percentage split, what will be the new amount spent on Operations?', ['₹30 lakh', '₹31 lakh', '₹28 lakh', '₹29 lakh'], 0, 'Operations remains 30% of the new total: 0.30 * 100 = ₹30 lakh.'),
  question('sbi-po-m2-dai-010', 'Bar graph DI', 'easy', BAR_PREFIX + 'What is the total number of fixed deposits opened across all 4 quarters?', ['3450', '3500', '3550', '3400'], 1, '900+750+1050+800 = 3500.'),
  question('sbi-po-m2-dai-011', 'Bar graph DI', 'medium', BAR_PREFIX + 'What is the percentage decline in deposits from Q1 to Q2?', ['~20%', '~15%', '~16.7%', '~18%'], 2, 'Decline = 900 - 750 = 150. Percentage decline = 150/900 * 100 ≈ 16.7%.'),
  question('sbi-po-m2-dai-012', 'Bar graph DI', 'medium', BAR_PREFIX + 'What is the average number of deposits opened per quarter?', ['887.5', '850', '862.5', '875'], 3, 'Total = 3500; average = 3500/4 = 875.'),
  question('sbi-po-m2-dai-013', 'Bar graph DI', 'medium', BAR_PREFIX + 'What is the ratio of deposits opened in Q3 to deposits opened in Q4?', ['21:16', '4:3', '3:4', '16:21'], 0, 'Q3 = 1050 and Q4 = 800. Ratio = 1050:800, which simplifies (dividing both by 50) to 21:16.'),
  question('sbi-po-m2-dai-014', 'Line graph DI', 'easy', LINE_PREFIX + 'In which month was the revenue highest?', ['February', 'April', 'May', 'January'], 1, 'April recorded the highest revenue at ₹80 lakh, more than any other listed month.'),
  question('sbi-po-m2-dai-015', 'Line graph DI', 'medium', LINE_PREFIX + 'What is the average monthly revenue over the 5 months?', ['₹60 lakh', '₹62 lakh', '₹64 lakh', '₹66 lakh'], 2, 'Total = 50+65+55+80+70 = 320. Average = 320/5 = ₹64 lakh.'),
  question('sbi-po-m2-dai-016', 'Line graph DI', 'medium', LINE_PREFIX + 'What is the percentage increase in revenue from March to April?', ['~50%', '~54.5%', '~40.9%', '~45.5%'], 3, 'Increase = 80 - 55 = 25. Percentage increase = 25/55 * 100 ≈ 45.5%.'),
  question('sbi-po-m2-dai-017', 'Line graph DI', 'medium', LINE_PREFIX + 'What is the ratio of April\'s revenue to January\'s revenue?', ['8:5', '3:5', '5:3', '5:8'], 0, "April = ₹80 lakh and January = ₹50 lakh. Ratio = 80:50, which simplifies (dividing both by 10) to 8:5."),
  question('sbi-po-m2-dai-018', 'Data sufficiency (quant)', 'medium', 'What is the value of y? Statement I: y is an even number between 30 and 40. Statement II: y is divisible by 9.', ['Statement II alone is sufficient', 'Both statements together are sufficient, but neither alone', 'Both statements together are still not sufficient', 'Statement I alone is sufficient'], 1, 'Statement I alone allows several even numbers (32, 34, 36, 38), not sufficient by itself. Statement II alone allows many multiples of 9 (9, 18, 27, 36, 45, ...), also not sufficient by itself. Combined, the only number that is both even, between 30 and 40, and divisible by 9 is 36, so both statements together are needed and sufficient.'),
  question('sbi-po-m2-dai-019', 'Data sufficiency (quant)', 'medium', 'Is the number of employees in Department C more than in Department D? Statement I: Department C has 60 employees. Statement II: Department D has 20% fewer employees than Department C.', ['Both statements together are still not sufficient', 'Statement I alone is sufficient', 'Statement II alone is sufficient', 'Both statements together are sufficient, but neither alone'], 2, 'Statement II alone directly states that Department D has fewer employees than Department C (20% fewer), which answers the yes/no comparison question by itself without needing the exact count from Statement I.'),
  question('sbi-po-m2-dai-020', 'Caselet DI', 'medium', 'In a survey of 600 bank customers, 55% preferred mobile banking, 30% preferred branch banking, and the remaining preferred net banking. How many customers preferred net banking?', ['95', '80', '85', '90'], 3, 'Mobile banking = 55% of 600 = 330. Branch banking = 30% of 600 = 180. Remaining = 600 - 330 - 180 = 90.'),
  question('sbi-po-m2-dai-021', 'Caselet DI', 'hard', 'A company has 900 employees, of whom 60% are male. Of the male employees, 35% are in technical roles. Of the female employees, 25% are in technical roles. How many employees in total are in technical roles?', ['279', '289', '299', '269'], 0, 'Male employees = 60% of 900 = 540; technical males = 35% of 540 = 189. Female employees = 40% of 900 = 360; technical females = 25% of 360 = 90. Total technical = 189 + 90 = 279.'),
  question('sbi-po-m2-dai-022', 'Probability', 'medium', 'A bag contains 6 red balls and 9 blue balls. If one ball is drawn at random, what is the probability that it is red?', ['3/8', '2/5', '3/5', '1/3'], 1, 'Total balls = 6 + 9 = 15. Probability of red = 6/15 = 2/5.'),
  question('sbi-po-m2-dai-023', 'Probability', 'hard', 'Two dice are rolled together. What is the probability that the sum of the numbers shown is 9?', ['6/36', '3/36', '4/36', '5/36'], 2, 'Combinations summing to 9: (3,6),(4,5),(5,4),(6,3) = 4 combinations out of 36 total, so probability = 4/36.'),
  question('sbi-po-m2-dai-024', 'Missing data DI', 'medium', 'In a data set of 5 values, 4 are known: 25, 40, 20, 32, and the mean of all 5 values is 28. What is the 5th value?', ['26', '29', '20', '23'], 3, 'Sum of all 5 values = 28 * 5 = 140. Sum of the known 4 values = 25+40+20+32 = 117. Missing value = 140 - 117 = 23.'),
  question('sbi-po-m2-dai-025', 'Ratio and proportion (DI)', 'medium', 'The ratio of male to female employees in a company is 8:5. If there are 96 male employees, how many female employees are there?', ['60', '65', '50', '55'], 0, 'Ratio 8:5 means each part = 96/8 = 12. Female employees = 5 * 12 = 60.'),
  question('sbi-po-m2-dai-026', 'Simple and compound interest (DI)', 'medium', 'A sum of ₹35,000 is invested at 4% per annum simple interest for 3 years. What is the total interest earned?', ['₹4,000', '₹4,200', '₹4,400', '₹3,800'], 1, 'Simple interest = P * R * T / 100 = 35000 * 4 * 3 / 100 = ₹4,200.'),
  question('sbi-po-m2-dai-027', 'Simple and compound interest (DI)', 'hard', 'What is the compound interest on ₹25,000 for 2 years at 8% per annum, compounded annually?', ['₹3,960', '₹4,060', '₹4,160', '₹4,260'], 2, 'Amount = 25000 * (1.08)^2 = 25000 * 1.1664 = ₹29,160. Compound interest = 29,160 - 25,000 = ₹4,160.'),
  question('sbi-po-m2-dai-028', 'Averages (DI)', 'medium', 'The average monthly savings of a family for the first 5 months was ₹4,200. In the 6th month, the family saved ₹7,200. What is the new average savings over the 6 months?', ['₹4,800', '₹4,500', '₹4,600', '₹4,700'], 3, 'Total for first 5 months = 4200 * 5 = 21,000. Adding month 6 (7,200) gives 28,200 over 6 months. New average = 28,200 / 6 = ₹4,700.'),
  question('sbi-po-m2-dai-029', 'Profit and loss (DI)', 'medium', 'A shopkeeper buys an item for ₹1,500 and sells it at an 18% profit. What is the selling price?', ['₹1,770', '₹1,790', '₹1,730', '₹1,750'], 0, 'Selling price = Cost price * (1 + profit%) = 1500 * 1.18 = ₹1,770.'),
  question('sbi-po-m2-dai-030', 'Time and work (DI)', 'hard', 'A can complete a task in 24 days, and B can complete the same task in 40 days. If they work together, in how many days will they complete the task?', ['14 days', '15 days', '12 days', '13 days'], 1, "A's rate = 1/24, B's rate = 1/40. Combined rate = 1/24 + 1/40 = 5/120 + 3/120 = 8/120 = 1/15. So together they complete the task in 15 days."),
];
