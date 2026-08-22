import type { Question } from '../questions';

const SOURCE = {
  kind: 'original' as const,
  reference: 'TakeMockTest original practice aligned to the IBPS PO XVI Prelims Quantitative Aptitude section',
  url: 'https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf',
  checkedOn: '22 August 2026',
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

export const IBPS_PO_PRELIMS_QUANTITATIVE_2: Question[] = [
  question('ibps-po-p2-qa-001', 'Simplification', 'easy', 'Evaluate: 90 ÷ 6 × 4.', ['56', '58', '60', '62'], 2, 'Division and multiplication have equal precedence, so work left to right: 90 ÷ 6 = 15 and 15 × 4 = 60.'),
  question('ibps-po-p2-qa-002', 'Number series', 'medium', 'Find the next term: 9, 19, 39, 79, ___.', ['155', '157', '159', '161'], 2, 'Each term is double the previous term plus 1: 79 × 2 + 1 = 159.'),
  question('ibps-po-p2-qa-003', 'Quadratic equations', 'medium', 'What is the sum of the roots of x² − 13x + 40 = 0?', ['10', '13', '12', '14'], 1, 'For ax² + bx + c = 0, the sum of roots is −b/a. Here it is −(−13)/1 = 13.'),
  question('ibps-po-p2-qa-004', 'Percentages', 'easy', 'What is 24% of 650?', ['150', '156', '153', '159'], 1, '24% of 650 = 0.24 × 650 = 156.'),
  question('ibps-po-p2-qa-005', 'Ratio and proportion', 'medium', 'Two numbers are in the ratio 4:7 and their sum is 99. What is the smaller number?', ['36', '32', '34', '38'], 0, 'There are 11 equal parts, so one part is 99/11 = 9. The smaller number is 4 × 9 = 36.'),
  question('ibps-po-p2-qa-006', 'Averages', 'easy', 'Find the average of 22, 28, 34, 40 and 46.', ['30', '32', '36', '34'], 3, 'The sum is 170 and there are five values, so the average is 170/5 = 34.'),
  question('ibps-po-p2-qa-007', 'Profit and loss', 'easy', 'An item bought for ₹560 is sold for ₹672. What is the profit percentage?', ['15%', '18%', '20%', '22%'], 2, 'Profit is ₹112. Profit percentage = 112/560 × 100 = 20%.'),
  question('ibps-po-p2-qa-008', 'Simple interest', 'medium', 'Find the simple interest on ₹8,000 at 9% per annum for 3 years.', ['₹2,100', '₹2,160', '₹2,140', '₹2,180'], 1, 'Simple interest = PRT/100 = 8000 × 9 × 3 / 100 = ₹2,160.'),
  question('ibps-po-p2-qa-009', 'Compound interest', 'medium', 'Find the compound interest on ₹5,000 at 8% per annum for 2 years, compounded annually.', ['₹832', '₹800', '₹816', '₹848'], 0, 'Amount = 5000 × (1.08)² = ₹5,832. Compound interest = 5832 − 5000 = ₹832.'),
  question('ibps-po-p2-qa-010', 'Time and work', 'medium', 'A can complete a task in 18 days and B can complete it in 9 days. How long will they take working together?', ['5 days', '7 days', '8 days', '6 days'], 3, 'Combined rate = 1/18 + 1/9 = 1/18 + 2/18 = 3/18 = 1/6 of the task per day, so together they take 6 days.'),
  question('ibps-po-p2-qa-011', 'Time and work', 'medium', 'A pipe fills a tank in 15 hours while another pipe empties it in 30 hours. If both are opened together, how long will the tank take to fill?', ['25 hours', '28 hours', '30 hours', '32 hours'], 2, 'Net rate = 1/15 − 1/30 = 2/30 − 1/30 = 1/30 of the tank per hour, so the tank fills in 30 hours.'),
  question('ibps-po-p2-qa-012', 'Time, speed and distance', 'medium', 'A 210-metre train crosses a pole in 7 seconds. What is its speed?', ['100 km/h', '108 km/h', '104 km/h', '112 km/h'], 1, 'Speed = 210 m ÷ 7 s = 30 m/s. Converting: 30 × 18/5 = 108 km/h.'),
  question('ibps-po-p2-qa-013', 'Time, speed and distance', 'easy', 'How far does a car travel at 75 km/h in 4 hours?', ['300 km', '290 km', '295 km', '305 km'], 0, 'Distance = Speed × Time = 75 × 4 = 300 km.'),
  question('ibps-po-p2-qa-014', 'Time, speed and distance', 'easy', 'A boat moves at 22 km/h in still water and the stream flows at 4 km/h. Find its downstream speed.', ['24 km/h', '25 km/h', '27 km/h', '26 km/h'], 3, 'Downstream speed = boat\'s speed + stream\'s speed = 22 + 4 = 26 km/h.'),
  question('ibps-po-p2-qa-015', 'Mensuration', 'easy', 'Find the area of a rectangle with length 20 cm and breadth 9 cm.', ['170 cm²', '175 cm²', '180 cm²', '185 cm²'], 2, 'Area of a rectangle = length × breadth = 20 × 9 = 180 cm².'),
  question('ibps-po-p2-qa-016', 'Mensuration', 'medium', 'Using π = 22/7, find the area of a circle with radius 14 cm.', ['600 cm²', '616 cm²', '610 cm²', '624 cm²'], 1, 'Area = πr² = (22/7) × 14 × 14 = 22 × 14 × 2 = 616 cm².'),
  question('ibps-po-p2-qa-017', 'Mensuration', 'easy', 'What is the volume of a cube with side 9 cm?', ['729 cm³', '719 cm³', '739 cm³', '749 cm³'], 0, 'Volume of a cube = side³ = 9³ = 729 cm³.'),
  question('ibps-po-p2-qa-018', 'Elementary algebra', 'easy', 'Solve for x: 8x − 13 = 51.', ['6', '7', '9', '8'], 3, '8x = 51 + 13 = 64, so x = 64 / 8 = 8.'),
  question('ibps-po-p2-qa-019', 'Number series', 'medium', 'Find the next term: 100, 95, 85, 70, ___.', ['45', '48', '50', '52'], 2, 'The differences increase in magnitude by 5 each time (-5, -10, -15), so the next difference is -20, giving 70 - 20 = 50.'),
  question('ibps-po-p2-qa-020', 'Percentages', 'medium', '30% of a number is 111. What is the number?', ['350', '370', '360', '380'], 1, 'If 30% of the number is 111, the number = 111 ÷ 0.30 = 370.'),
  question('ibps-po-p2-qa-021', 'Ratio and proportion', 'easy', 'Simplify the ratio 96:144 to its lowest terms.', ['2 : 3', '3 : 4', '4 : 5', '1 : 2'], 0, 'Dividing both terms by their HCF, 48, gives 96:144 = 2:3.'),
  question('ibps-po-p2-qa-022', 'Averages', 'medium', 'Find the average of the first 18 natural numbers.', ['9', '10', '10.5', '9.5'], 3, 'The first 18 natural numbers (1 to 18) sum to 171. Average = 171 / 18 = 9.5.'),
  question('ibps-po-p2-qa-023', 'Profit and loss', 'medium', 'A shopkeeper sells an article at a 15% loss on a cost price of ₹900. What is the selling price?', ['₹755', '₹760', '₹765', '₹770'], 2, 'Selling price = Cost price × (1 − loss%) = 900 × 0.85 = ₹765.'),
  question('ibps-po-p2-qa-024', 'Data interpretation', 'easy', 'A branch opened 60 accounts in April, 80 in May, and 100 in June. What was the monthly average?', ['75', '80', '78', '82'], 1, 'Average = (60 + 80 + 100) / 3 = 240 / 3 = 80.'),
  question('ibps-po-p2-qa-025', 'Data interpretation', 'medium', 'Using the account data of 60 in April and 80 in May, what was the approximate percentage increase from April to May?', ['33.33%', '30%', '35%', '36%'], 0, 'Percentage increase = (80 − 60) / 60 × 100 ≈ 33.33%.'),
  question('ibps-po-p2-qa-026', 'Ratio and proportion', 'easy', 'Branch P processed 450 applications and Branch Q processed 300. What is the ratio P:Q in simplest form?', ['2 : 3', '5 : 3', '4 : 3', '3 : 2'], 3, 'The ratio 450:300 simplifies, by dividing both by their HCF of 150, to 3:2.'),
  question('ibps-po-p2-qa-027', 'Ages', 'medium', 'A father and son are in the age ratio 7:2, and their ages total 63 years. How old is the son?', ['12', '13', '14', '16'], 2, 'Total parts = 7 + 2 = 9. Each part = 63 ÷ 9 = 7. The son\'s age = 2 × 7 = 14 years.'),
  question('ibps-po-p2-qa-028', 'Probability', 'medium', 'A fair die is rolled once. What is the probability of obtaining a multiple of 3?', ['1/6', '1/3', '1/2', '2/3'], 1, 'Multiples of 3 on a die are 3 and 6, giving 2 favourable outcomes out of 6, which simplifies to 1/3.'),
  question('ibps-po-p2-qa-029', 'Permutation and combination', 'medium', 'In how many different ways can 6 distinct books be arranged on a shelf?', ['720', '600', '650', '700'], 0, 'The number of arrangements of 6 distinct items is 6! = 720.'),
  question('ibps-po-p2-qa-030', 'Mixtures and alligations', 'medium', 'A vessel contains 40 litres of milk. If 8 litres of water is added, what percentage of the resulting mixture is milk?', ['80%', '81.5%', '85%', '83.33%'], 3, 'Total mixture = 40 + 8 = 48 litres. Milk percentage = (40 ÷ 48) × 100 ≈ 83.33%.'),
  question('ibps-po-p2-qa-031', 'Partnership', 'hard', 'A invests ₹60,000 for 6 months and B invests ₹40,000 for 9 months. If the profit is ₹31,000, what is A\'s share?', ['₹14,500', '₹15,000', '₹15,500', '₹16,000'], 2, 'A\'s investment-months = 60,000 × 6 = 3,60,000. B\'s = 40,000 × 9 = 3,60,000. Since both are equal, the profit is split equally: A\'s share = 31,000 / 2 = ₹15,500.'),
  question('ibps-po-p2-qa-032', 'Mensuration', 'medium', 'A rectangle has perimeter 60 cm and length 18 cm. What is its area?', ['206 cm²', '216 cm²', '211 cm²', '221 cm²'], 1, 'Perimeter = 2(length + breadth), so breadth = (60/2) − 18 = 12 cm. Area = 18 × 12 = 216 cm².'),
  question('ibps-po-p2-qa-033', 'Elementary algebra', 'easy', 'Solve for x: 5x + 9 = 54.', ['9', '7', '8', '10'], 0, '5x = 54 − 9 = 45, so x = 45 / 5 = 9.'),
  question('ibps-po-p2-qa-034', 'Number series', 'easy', 'Find the next term: 6, 12, 24, 48, ___.', ['90', '92', '94', '96'], 3, 'Each term is multiplied by 2: 48 × 2 = 96.'),
  question('ibps-po-p2-qa-035', 'Time, speed and distance', 'easy', 'A cyclist covers 45 km in 3 hours. What is the cyclist\'s speed?', ['12 km/h', '13 km/h', '15 km/h', '14 km/h'], 2, 'Speed = Distance / Time = 45 / 3 = 15 km/h.'),
];
