import type { Question } from '../questions';

const SOURCE = {
  kind: 'original' as const,
  reference: 'TakeMockTest original practice aligned to the IBPS PO XVI Prelims Quantitative Aptitude section',
  url: 'https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf',
  checkedOn: '3 August 2026',
};

const MARKS = 6 / 7;
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
    section: 'Quantitative Aptitude',
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

export const IBPS_PO_PRELIMS_QUANTITATIVE_1: Question[] = [
  question('ibps-po-p1-qa-001', 'Simplification', 'easy', 'Evaluate: 48 ÷ 6 × 3.', ['24', '8', '18', '144'], 0, 'Division and multiplication have equal precedence, so work left to right: 48 ÷ 6 = 8 and 8 × 3 = 24.'),
  question('ibps-po-p1-qa-002', 'Number series', 'easy', 'Find the next term: 7, 14, 28, 56, ___.', ['84', '112', '98', '120'], 1, 'Each term is twice the preceding term, so 56 × 2 = 112.'),
  question('ibps-po-p1-qa-003', 'Quadratic equations', 'medium', 'What is the sum of the roots of x² − 7x + 12 = 0?', ['12', '−7', '7', '−12'], 2, 'For ax² + bx + c = 0, the sum of roots is −b/a. Here it is −(−7)/1 = 7.'),
  question('ibps-po-p1-qa-004', 'Percentages', 'easy', 'What is 16% of 875?', ['125', '130', '135', '140'], 3, '16% of 875 = 0.16 × 875 = 140.'),
  question('ibps-po-p1-qa-005', 'Ratio and proportion', 'easy', 'Two numbers are in the ratio 3:5 and their sum is 64. What is the smaller number?', ['24', '32', '40', '18'], 0, 'There are 8 equal parts, so one part is 64/8 = 8. The smaller number is 3 × 8 = 24.'),
  question('ibps-po-p1-qa-006', 'Averages', 'easy', 'Find the average of 18, 24, 30, 36 and 42.', ['28', '30', '32', '34'], 1, 'The sum is 150 and there are five values, so the average is 150/5 = 30.'),
  question('ibps-po-p1-qa-007', 'Profit and loss', 'easy', 'An item bought for ₹800 is sold for ₹920. What is the profit percentage?', ['12%', '14%', '15%', '18%'], 2, 'Profit is ₹120. Profit percentage = 120/800 × 100 = 15%.'),
  question('ibps-po-p1-qa-008', 'Simple interest', 'easy', 'Find the simple interest on ₹6,000 at 7% per annum for 3 years.', ['₹1,120', '₹1,200', '₹1,320', '₹1,260'], 3, 'Simple interest = PRT/100 = 6000 × 7 × 3 / 100 = ₹1,260.'),
  question('ibps-po-p1-qa-009', 'Compound interest', 'medium', 'Find the compound interest on ₹8,000 at 5% per annum for 2 years, compounded annually.', ['₹820', '₹800', '₹840', '₹860'], 0, 'Amount = 8000 × 1.05² = ₹8,820, so compound interest is ₹820.'),
  question('ibps-po-p1-qa-010', 'Time and work', 'medium', 'A can finish a job in 12 days and B in 18 days. How long will they take together?', ['6 days', '7.2 days', '8 days', '9 days'], 1, 'Their combined rate is 1/12 + 1/18 = 5/36 job per day, so time = 36/5 = 7.2 days.'),
  question('ibps-po-p1-qa-011', 'Pipes and cisterns', 'medium', 'One pipe fills a tank in 20 hours and another in 30 hours. How long do they take together?', ['10 hours', '15 hours', '12 hours', '25 hours'], 2, 'Combined rate = 1/20 + 1/30 = 1/12 tank per hour, so they take 12 hours.'),
  question('ibps-po-p1-qa-012', 'Speed, time and distance', 'medium', 'A 180-metre train crosses a pole in 12 seconds. What is its speed?', ['45 km/h', '48 km/h', '60 km/h', '54 km/h'], 3, 'Speed = 180/12 = 15 m/s. Multiplying by 3.6 gives 54 km/h.'),
  question('ibps-po-p1-qa-013', 'Boats and streams', 'easy', 'A boat moves at 12 km/h in still water and the stream flows at 3 km/h. Find its downstream speed.', ['15 km/h', '9 km/h', '12 km/h', '18 km/h'], 0, 'Downstream speed equals boat speed plus stream speed: 12 + 3 = 15 km/h.'),
  question('ibps-po-p1-qa-014', 'Speed, time and distance', 'easy', 'How far does a car travel at 72 km/h in 2.5 hours?', ['160 km', '180 km', '150 km', '200 km'], 1, 'Distance = speed × time = 72 × 2.5 = 180 km.'),
  question('ibps-po-p1-qa-015', 'Mixtures', 'medium', 'A vessel contains 20 litres of milk. If 5 litres of water is added, what percentage of the mixture is milk?', ['75%', '85%', '80%', '70%'], 2, 'The total mixture is 25 litres, of which 20 litres is milk. Thus 20/25 × 100 = 80%.'),
  question('ibps-po-p1-qa-016', 'Partnership', 'hard', 'A invests ₹50,000 for 12 months and B invests ₹80,000 for 6 months. If the profit is ₹36,000, what is B’s share?', ['₹18,000', '₹20,000', '₹14,000', '₹16,000'], 3, 'Capital-time ratio is 50000×12 : 80000×6 = 600:480 = 5:4. B receives 4/9 of ₹36,000 = ₹16,000.'),
  question('ibps-po-p1-qa-017', 'Data interpretation', 'easy', 'A branch opened 120 accounts in April, 150 in May and 180 in June. What was the monthly average?', ['150', '140', '160', '170'], 0, 'Average = (120 + 150 + 180)/3 = 450/3 = 150.'),
  question('ibps-po-p1-qa-018', 'Data interpretation', 'medium', 'Using the account data 120 in April and 150 in May, what was the percentage increase from April to May?', ['20%', '25%', '30%', '22.5%'], 1, 'Increase = 30. Percentage increase = 30/120 × 100 = 25%.'),
  question('ibps-po-p1-qa-019', 'Data interpretation', 'easy', 'Branch X processed 240 applications and Branch Y processed 160. What is the ratio X:Y in simplest form?', ['2:1', '4:3', '3:2', '5:3'], 2, '240:160 simplifies by dividing both terms by 80, giving 3:2.'),
  question('ibps-po-p1-qa-020', 'Data interpretation', 'medium', 'Quarterly deposits were ₹120 lakh, ₹150 lakh, ₹180 lakh and ₹210 lakh. What was the annual total?', ['₹620 lakh', '₹640 lakh', '₹650 lakh', '₹660 lakh'], 3, 'The total is 120 + 150 + 180 + 210 = ₹660 lakh.'),
  question('ibps-po-p1-qa-021', 'Ages', 'medium', 'A father and son are in the age ratio 5:2, and their ages total 49 years. How old is the son?', ['14 years', '21 years', '35 years', '12 years'], 0, 'Seven ratio parts equal 49, so one part is 7. The son is 2 × 7 = 14 years old.'),
  question('ibps-po-p1-qa-022', 'Probability', 'easy', 'A fair die is rolled once. What is the probability of obtaining a number greater than 4?', ['1/2', '1/3', '2/3', '1/6'], 1, 'The favourable outcomes are 5 and 6, so probability = 2/6 = 1/3.'),
  question('ibps-po-p1-qa-023', 'Permutation', 'medium', 'In how many different ways can five distinct books be arranged on a shelf?', ['25', '60', '120', '240'], 2, 'Five distinct objects can be arranged in 5! = 5×4×3×2×1 = 120 ways.'),
  question('ibps-po-p1-qa-024', 'Mensuration', 'medium', 'A rectangle has length 16 cm and perimeter 54 cm. What is its area?', ['160 cm²', '168 cm²', '192 cm²', '176 cm²'], 3, '2(l+w)=54 gives l+w=27, so width=11 cm. Area = 16×11 = 176 cm².'),
  question('ibps-po-p1-qa-025', 'Mensuration', 'easy', 'Using π = 22/7, find the area of a circle with radius 7 cm.', ['154 cm²', '144 cm²', '308 cm²', '44 cm²'], 0, 'Area = πr² = 22/7 × 7 × 7 = 154 cm².'),
  question('ibps-po-p1-qa-026', 'Mensuration', 'easy', 'What is the volume of a cube with side 5 cm?', ['100 cm³', '125 cm³', '150 cm³', '25 cm³'], 1, 'Volume of a cube is side³, so 5³ = 125 cm³.'),
  question('ibps-po-p1-qa-027', 'Linear equations', 'easy', 'Solve: 3x − 7 = 20.', ['7', '8', '9', '10'], 2, 'Adding 7 gives 3x=27, so x=9.'),
  question('ibps-po-p1-qa-028', 'Inequalities', 'medium', 'Solve the inequality: 2x + 3 > 11.', ['x < 4', 'x ≥ 4', 'x ≤ 4', 'x > 4'], 3, 'Subtracting 3 gives 2x>8; dividing by 2 gives x>4.'),
  question('ibps-po-p1-qa-029', 'HCF and LCM', 'easy', 'Find the highest common factor of 72 and 120.', ['24', '12', '18', '36'], 0, '72 = 2³×3² and 120 = 2³×3×5. Their HCF is 2³×3 = 24.'),
  question('ibps-po-p1-qa-030', 'HCF and LCM', 'medium', 'Find the least common multiple of 12, 15 and 20.', ['120', '60', '40', '30'], 1, '12=2²×3, 15=3×5 and 20=2²×5, so the LCM is 2²×3×5 = 60.'),
  question('ibps-po-p1-qa-031', 'Fractions and decimals', 'easy', 'Express 0.375 as a fraction in simplest form.', ['5/8', '3/5', '3/8', '7/20'], 2, '0.375 = 375/1000. Dividing numerator and denominator by 125 gives 3/8.'),
  question('ibps-po-p1-qa-032', 'Data sufficiency', 'hard', 'What is x? Statement I: x + y = 10. Statement II: x − y = 2.', ['Statement I alone is sufficient', 'Statement II alone is sufficient', 'Either statement alone is sufficient', 'Both statements together are sufficient'], 3, 'Neither equation alone fixes x. Together, adding the equations gives 2x=12, so x=6.'),
  question('ibps-po-p1-qa-033', 'Approximation', 'easy', 'What is the square root of 2025?', ['45', '35', '55', '40'], 0, '45² = 2025, so √2025 = 45.'),
  question('ibps-po-p1-qa-034', 'Discount', 'easy', 'An article marked at ₹2,000 is sold at a 15% discount. Find the selling price.', ['₹1,750', '₹1,700', '₹1,650', '₹1,800'], 1, 'Discount = 15% of ₹2,000 = ₹300, so selling price = ₹1,700.'),
  question('ibps-po-p1-qa-035', 'Income and expenditure', 'hard', 'A person’s income and expenditure are in the ratio 5:4. If monthly savings are ₹6,000, what is the monthly income?', ['₹24,000', '₹36,000', '₹30,000', '₹42,000'], 2, 'Savings represent one ratio part. If one part is ₹6,000, income is 5 parts = ₹30,000.'),
];
