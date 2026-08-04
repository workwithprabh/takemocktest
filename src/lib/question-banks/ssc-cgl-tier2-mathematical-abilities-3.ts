import type { Question } from '../questions';

const source = {
  kind: 'original' as const,
  reference: 'SSC CGL 2026 official notice, paragraph 13.11.1 (Tier 2 Mathematical Abilities syllabus)',
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
    section: 'Mathematical Abilities',
    topic,
    difficulty,
    question: prompt,
    options,
    correctIndex,
    explanation,
    source,
  };
}

export const SSC_CGL_TIER2_MATHEMATICAL_ABILITIES_3: Question[] = [
  question('ssc-cgl-t2-ma3-001', 'Number systems', 'easy', 'Find the largest four-digit multiple of 18.', ['9990', '9982', '9972', '9996'], 0, 'The greatest integer not exceeding 9999/18 is 555. Therefore the required number is 18 x 555 = 9990.'),
  question('ssc-cgl-t2-ma3-002', 'Decimals and fractions', 'easy', 'What is the value of 0.375 + 5/8?', ['0.875', '1', '1.125', '1.25'], 1, 'Since 0.375 = 3/8, the sum is 3/8 + 5/8 = 1.'),
  question('ssc-cgl-t2-ma3-003', 'Percentages', 'easy', 'A salary is increased by 25% and then reduced by 20%. What is the net percentage change?', ['5% increase', '5% decrease', 'No change', '10% increase'], 2, 'Starting from 100, a 25% increase gives 125. A 20% reduction of 125 gives 100, so there is no net change.'),
  question('ssc-cgl-t2-ma3-004', 'Ratio and proportion', 'medium', 'The present ages of two people are in the ratio 4:7. After 8 years, their ages will be in the ratio 2:3. What is the younger person\'s present age?', ['12 years', '20 years', '24 years', '16 years'], 3, 'Let the ages be 4x and 7x. Then (4x + 8)/(7x + 8) = 2/3, giving x = 4. The younger age is 4x = 16 years.'),
  question('ssc-cgl-t2-ma3-005', 'Average', 'easy', 'The average of 12 numbers is 45. If 62 is replaced by 38, what is the new average?', ['43', '41', '44', '42'], 0, 'The total decreases by 62 - 38 = 24, so the average decreases by 24/12 = 2, from 45 to 43.'),
  question('ssc-cgl-t2-ma3-006', 'Simple interest', 'medium', 'A sum earns Rs 3,600 as simple interest at 12% per annum in 2.5 years. What is the principal?', ['Rs 10,000', 'Rs 12,000', 'Rs 14,400', 'Rs 15,000'], 1, 'Principal = 3,600 x 100 / (12 x 2.5) = Rs 12,000.'),
  question('ssc-cgl-t2-ma3-007', 'Compound interest', 'easy', 'At what annual compound-interest rate will Rs 10,000 amount to Rs 13,310 in 3 years?', ['8%', '12%', '10%', '15%'], 2, '13,310/10,000 = 1.331 = 1.1 cubed, so the annual rate is 10%.'),
  question('ssc-cgl-t2-ma3-008', 'Profit and loss', 'easy', 'An article is sold for Rs 1,840 at a loss of 8%. What was its cost price?', ['Rs 1,900', 'Rs 2,100', 'Rs 2,200', 'Rs 2,000'], 3, 'The selling price is 92% of cost price. Therefore cost price = 1,840/0.92 = Rs 2,000.'),
  question('ssc-cgl-t2-ma3-009', 'Partnership', 'medium', 'A invests Rs 60,000 for 10 months and B invests Rs 80,000 for 6 months. If the profit is Rs 45,000, what is A\'s share?', ['Rs 25,000', 'Rs 20,000', 'Rs 27,000', 'Rs 30,000'], 0, 'Their capital-time ratio is 600,000:480,000 = 5:4. A receives 5/9 of Rs 45,000 = Rs 25,000.'),
  question('ssc-cgl-t2-ma3-010', 'Mixture and alligation', 'easy', 'A 25-litre solution contains acid and water in the ratio 3:2. How much water must be added to make the ratio 1:1?', ['3 litres', '5 litres', '7.5 litres', '10 litres'], 1, 'The solution contains 15 L acid and 10 L water. Water must become 15 L, so 5 L must be added.'),
  question('ssc-cgl-t2-ma3-011', 'Time and work', 'easy', 'A can finish a job in 20 days and B in 30 days. How long will they take working together?', ['10 days', '15 days', '12 days', '18 days'], 2, 'Their combined rate is 1/20 + 1/30 = 1/12 of the job per day, so they take 12 days.'),
  question('ssc-cgl-t2-ma3-012', 'Pipes and cisterns', 'medium', 'Two pipes fill a tank in 8 hours and 12 hours, while a drain empties it in 24 hours. How long will all three take to fill the empty tank?', ['4 hours', '8 hours', '12 hours', '6 hours'], 3, 'The net rate is 1/8 + 1/12 - 1/24 = 1/6 tank per hour, so the tank fills in 6 hours.'),
  question('ssc-cgl-t2-ma3-013', 'Trains', 'easy', 'A 150-metre train crosses a 250-metre bridge in 20 seconds. What is the train\'s speed?', ['72 km/h', '60 km/h', '54 km/h', '80 km/h'], 0, 'The train covers 150 + 250 = 400 m in 20 seconds, or 20 m/s. Multiplying by 18/5 gives 72 km/h.'),
  question('ssc-cgl-t2-ma3-014', 'Boats and streams', 'easy', 'A boat moves at 14 km/h in still water and the stream flows at 4 km/h. What is the upstream speed?', ['8 km/h', '10 km/h', '14 km/h', '18 km/h'], 1, 'Upstream speed equals still-water speed minus stream speed: 14 - 4 = 10 km/h.'),
  question('ssc-cgl-t2-ma3-015', 'Algebraic identities', 'medium', 'If x + 1/x = 5, what is x squared + 1/x squared?', ['21', '25', '23', '27'], 2, 'Squaring gives x squared + 2 + 1/x squared = 25. Therefore x squared + 1/x squared = 23.'),
  question('ssc-cgl-t2-ma3-016', 'Quadratic equations', 'easy', 'What is the smaller root of x squared - 9x + 20 = 0?', ['2', '3', '5', '4'], 3, 'The equation factors as (x - 4)(x - 5) = 0, so its roots are 4 and 5. The smaller root is 4.'),
  question('ssc-cgl-t2-ma3-017', 'Surds', 'easy', 'Simplify: square root of 50 plus square root of 8.', ['7 square root of 2', '6 square root of 2', '8 square root of 2', '9 square root of 2'], 0, 'Square root of 50 is 5 square root of 2 and square root of 8 is 2 square root of 2. Their sum is 7 square root of 2.'),
  question('ssc-cgl-t2-ma3-018', 'Linear equations', 'easy', 'If 2x + 3y = 17 and x = 4, what is y?', ['2', '3', '4', '5'], 1, 'Substituting x = 4 gives 8 + 3y = 17, so 3y = 9 and y = 3.'),
  question('ssc-cgl-t2-ma3-019', 'Triangles', 'medium', 'The angles of a triangle are in the ratio 2:3:4. What is the largest angle?', ['60 degrees', '70 degrees', '80 degrees', '90 degrees'], 2, 'The nine ratio-parts total 180 degrees, so each part is 20 degrees. The largest angle is 4 x 20 = 80 degrees.'),
  question('ssc-cgl-t2-ma3-020', 'Circles', 'easy', 'Using pi = 22/7, what is the circumference of a circle of radius 7 cm?', ['22 cm', '88 cm', '154 cm', '44 cm'], 3, 'Circumference = 2 x pi x radius = 2 x 22/7 x 7 = 44 cm.'),
  question('ssc-cgl-t2-ma3-021', 'Mensuration', 'easy', 'A rectangle has length 12 cm and diagonal 13 cm. What is its area?', ['60 square cm', '72 square cm', '78 square cm', '156 square cm'], 0, 'The breadth is square root of (13 squared - 12 squared) = 5 cm. Area = 12 x 5 = 60 square cm.'),
  question('ssc-cgl-t2-ma3-022', 'Mensuration', 'medium', 'Using pi = 22/7, what is the curved surface area of a cylinder with radius 7 cm and height 5 cm?', ['154 square cm', '220 square cm', '308 square cm', '440 square cm'], 1, 'Curved surface area = 2 x pi x r x h = 2 x 22/7 x 7 x 5 = 220 square cm.'),
  question('ssc-cgl-t2-ma3-023', 'Mensuration', 'medium', 'What is the volume of a hemisphere of radius 3 cm, expressed in terms of pi?', ['9 pi cubic cm', '12 pi cubic cm', '18 pi cubic cm', '36 pi cubic cm'], 2, 'Volume of a hemisphere = 2/3 x pi x radius cubed = 2/3 x pi x 27 = 18 pi cubic cm.'),
  question('ssc-cgl-t2-ma3-024', 'Mensuration', 'medium', 'Using pi = 22/7, what is the total surface area of a cone with radius 7 cm and slant height 10 cm?', ['220 square cm', '308 square cm', '440 square cm', '374 square cm'], 3, 'Total surface area = pi x r x (l + r) = 22/7 x 7 x 17 = 374 square cm.'),
  question('ssc-cgl-t2-ma3-025', 'Trigonometric ratios', 'easy', 'If cos theta = 8/17 and theta is acute, what is sin theta?', ['15/17', '8/15', '17/15', '9/17'], 0, 'The corresponding right triangle has adjacent side 8, hypotenuse 17 and opposite side 15. Therefore sin theta = 15/17.'),
  question('ssc-cgl-t2-ma3-026', 'Heights and distances', 'easy', 'A vertical pole casts a shadow equal to its own height. What is the angle of elevation of the sun?', ['30 degrees', '45 degrees', '60 degrees', '90 degrees'], 1, 'The tangent of the angle is height/shadow = 1. Therefore the angle is 45 degrees.'),
  question('ssc-cgl-t2-ma3-027', 'Mode', 'easy', 'What is the mode of the data 2, 3, 3, 4, 4, 4, 5?', ['3', '3.5', '4', '5'], 2, 'The value 4 occurs three times, more often than any other value, so the mode is 4.'),
  question('ssc-cgl-t2-ma3-028', 'Median', 'easy', 'What is the median of 5, 8, 11, 14, 17, 20 and 23?', ['11', '12.5', '17', '14'], 3, 'There are seven ordered observations, so the fourth value is the median: 14.'),
  question('ssc-cgl-t2-ma3-029', 'Variance', 'medium', 'What is the population variance of the data 1, 3 and 5?', ['8/3', '2', '4', '8'], 0, 'The mean is 3. The squared deviations are 4, 0 and 4, so the population variance is (4 + 0 + 4)/3 = 8/3.'),
  question('ssc-cgl-t2-ma3-030', 'Probability', 'medium', 'Two fair dice are thrown. What is the probability that their sum is 8?', ['1/6', '5/36', '1/9', '7/36'], 1, 'The favourable ordered pairs are (2,6), (3,5), (4,4), (5,3) and (6,2): five outcomes out of 36.'),
];
