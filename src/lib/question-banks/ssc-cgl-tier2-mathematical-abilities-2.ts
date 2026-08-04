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

export const SSC_CGL_TIER2_MATHEMATICAL_ABILITIES_2: Question[] = [
  question('ssc-cgl-t2-ma2-001', 'Number systems', 'easy', 'What is the least positive number that is exactly divisible by 12, 15 and 18?', ['180', '90', '120', '360'], 0, 'The prime-power LCM is 2 squared x 3 squared x 5 = 180.'),
  question('ssc-cgl-t2-ma2-002', 'Fractions', 'easy', 'Five-eighths of a number is 75. What is the number?', ['110', '120', '125', '130'], 1, 'The number is 75 x 8/5 = 120.'),
  question('ssc-cgl-t2-ma2-003', 'Percentages', 'medium', 'A value is reduced by 20%. By what percentage must the reduced value be increased to restore the original value?', ['20%', '22.5%', '25%', '30%'], 2, 'After a 20% reduction, 80 remains from an original 100. The required increase is 20/80 x 100 = 25%.'),
  question('ssc-cgl-t2-ma2-004', 'Ratio and proportion', 'medium', 'If x:y = 3:5 and y:z = 10:7, what is x:z?', ['3:7', '5:7', '6:5', '6:7'], 3, 'Make the common y-term equal: x:y = 6:10 and y:z = 10:7. Therefore x:z = 6:7.'),
  question('ssc-cgl-t2-ma2-005', 'Average', 'hard', 'The average of 15 numbers is 32. The average of the first 8 numbers is 30 and that of the last 8 numbers is 35. What is the eighth number?', ['40', '35', '45', '30'], 0, 'The eighth number is counted in both groups. It equals 8 x 30 + 8 x 35 - 15 x 32 = 40.'),
  question('ssc-cgl-t2-ma2-006', 'Simple interest', 'easy', 'A sum of Rs 10,000 amounts to Rs 12,400 in 3 years at simple interest. What is the annual rate?', ['6%', '8%', '10%', '12%'], 1, 'The interest is Rs 2,400. Rate = 2,400 x 100 / (10,000 x 3) = 8%.'),
  question('ssc-cgl-t2-ma2-007', 'Compound interest', 'medium', 'What is the difference between compound interest and simple interest on Rs 20,000 at 10% per annum for 2 years?', ['Rs 100', 'Rs 150', 'Rs 200', 'Rs 220'], 2, 'For two years, the difference is P x (R/100) squared = 20,000 x 0.1 squared = Rs 200.'),
  question('ssc-cgl-t2-ma2-008', 'Profit, loss and discount', 'easy', 'Two successive discounts of 20% and 15% are equivalent to a single discount of:', ['30%', '33%', '35%', '32%'], 3, 'The net price factor is 0.80 x 0.85 = 0.68, so the equivalent discount is 32%.'),
  question('ssc-cgl-t2-ma2-009', 'Partnership', 'medium', 'A invests Rs 50,000 for 12 months and B invests Rs 80,000 for 9 months. If they earn Rs 44,000, what is B\'s share?', ['Rs 24,000', 'Rs 20,000', 'Rs 26,400', 'Rs 28,000'], 0, 'Their capital-time ratio is 600,000:720,000 = 5:6. B receives 6/11 of Rs 44,000 = Rs 24,000.'),
  question('ssc-cgl-t2-ma2-010', 'Mixture and alligation', 'hard', 'A 40-litre mixture contains milk and water in the ratio 7:3. Eight litres are removed and replaced with water. What is the new ratio of milk to water?', ['7:5', '14:11', '4:3', '21:19'], 1, 'Initially there are 28 L milk and 12 L water. The removed 8 L contains 5.6 L milk and 2.4 L water. After adding 8 L water, the amounts are 22.4 L and 17.6 L, or 14:11.'),
  question('ssc-cgl-t2-ma2-011', 'Time and work', 'medium', 'A can complete a job in 16 days and B in 24 days. How long will they take together?', ['8 days', '9 days', '9.6 days', '12 days'], 2, 'Their combined daily rate is 1/16 + 1/24 = 5/48. Time required is 48/5 = 9.6 days.'),
  question('ssc-cgl-t2-ma2-012', 'Pipes and cisterns', 'medium', 'Two pipes fill a tank in 10 hours and 15 hours, while a drain empties it in 30 hours. How long will all three take to fill the empty tank?', ['5 hours', '6 hours', '10 hours', '7.5 hours'], 3, 'The net rate is 1/10 + 1/15 - 1/30 = 2/15 tank per hour, so the tank fills in 15/2 = 7.5 hours.'),
  question('ssc-cgl-t2-ma2-013', 'Trains', 'easy', 'A 180-metre train moving at 54 km/h crosses a standing person in how many seconds?', ['12 seconds', '10 seconds', '15 seconds', '18 seconds'], 0, 'A speed of 54 km/h equals 15 m/s. Time = 180/15 = 12 seconds.'),
  question('ssc-cgl-t2-ma2-014', 'Boats and streams', 'easy', 'A boat travels at 15 km/h downstream and 9 km/h upstream. What is the speed of the stream?', ['2 km/h', '3 km/h', '4 km/h', '6 km/h'], 1, 'Stream speed is half the difference between downstream and upstream speeds: (15 - 9)/2 = 3 km/h.'),
  question('ssc-cgl-t2-ma2-015', 'Linear equations', 'medium', 'If 3x + 2y = 23 and x - y = 1, what is x + y?', ['7', '8', '9', '10'], 2, 'From x - y = 1, x = y + 1. Substitution gives 5y + 3 = 23, so y = 4 and x = 5. Thus x + y = 9.'),
  question('ssc-cgl-t2-ma2-016', 'Quadratic equations', 'easy', 'What is the difference between the roots of x squared - 11x + 24 = 0?', ['3', '4', '6', '5'], 3, 'The equation factors as (x - 3)(x - 8) = 0. The difference between the roots is 8 - 3 = 5.'),
  question('ssc-cgl-t2-ma2-017', 'Surds', 'medium', 'What is the rationalised form of 1 divided by (square root of 5 minus 2)?', ['Square root of 5 plus 2', 'Square root of 5 minus 2', '(Square root of 5 plus 2) divided by 5', '1 divided by (square root of 5 plus 2)'], 0, 'Multiplying numerator and denominator by square root of 5 plus 2 gives (square root of 5 + 2)/(5 - 4) = square root of 5 + 2.'),
  question('ssc-cgl-t2-ma2-018', 'Triangles', 'easy', 'A right triangle has perpendicular sides of 9 cm and 12 cm. What is its perimeter?', ['30 cm', '36 cm', '39 cm', '42 cm'], 1, 'The hypotenuse is square root of (9 squared + 12 squared) = 15 cm. The perimeter is 9 + 12 + 15 = 36 cm.'),
  question('ssc-cgl-t2-ma2-019', 'Similarity of triangles', 'medium', 'The corresponding sides of two similar triangles are in the ratio 4:7. If the larger triangle has perimeter 84 cm, what is the smaller triangle\'s perimeter?', ['42 cm', '56 cm', '48 cm', '52 cm'], 2, 'Perimeters of similar triangles have the same ratio as corresponding sides. The smaller perimeter is 84 x 4/7 = 48 cm.'),
  question('ssc-cgl-t2-ma2-020', 'Circles and chords', 'medium', 'A chord of a circle of radius 13 cm is 5 cm from the centre. What is the length of the chord?', ['12 cm', '18 cm', '26 cm', '24 cm'], 3, 'The perpendicular from the centre bisects the chord. Half its length is square root of (13 squared - 5 squared) = 12 cm, so the chord is 24 cm.'),
  question('ssc-cgl-t2-ma2-021', 'Circles and sectors', 'medium', 'Using pi = 22/7, what is the area of a 90-degree sector of a circle of radius 14 cm?', ['154 square cm', '308 square cm', '77 square cm', '616 square cm'], 0, 'The sector is one-fourth of the circle. Its area is 1/4 x 22/7 x 14 squared = 154 square cm.'),
  question('ssc-cgl-t2-ma2-022', 'Mensuration', 'easy', 'What is the length of the space diagonal of a cuboid measuring 3 cm by 4 cm by 12 cm?', ['12 cm', '13 cm', '14 cm', '15 cm'], 1, 'The space diagonal is square root of (3 squared + 4 squared + 12 squared) = square root of 169 = 13 cm.'),
  question('ssc-cgl-t2-ma2-023', 'Mensuration', 'medium', 'Using pi = 22/7, what is the total surface area of a closed cylinder with radius 7 cm and height 10 cm?', ['704 square cm', '726 square cm', '748 square cm', '770 square cm'], 2, 'Total surface area = 2 x pi x r x (r + h) = 2 x 22/7 x 7 x 17 = 748 square cm.'),
  question('ssc-cgl-t2-ma2-024', 'Mensuration', 'easy', 'A right circular cone has radius 5 cm and height 12 cm. What is its slant height?', ['10 cm', '11 cm', '12 cm', '13 cm'], 3, 'The slant height is square root of (5 squared + 12 squared) = 13 cm.'),
  question('ssc-cgl-t2-ma2-025', 'Trigonometric ratios', 'easy', 'If tan theta = 5/12 and theta is acute, what is sec theta?', ['13/12', '12/13', '5/13', '13/5'], 0, 'A right triangle with opposite and adjacent sides 5 and 12 has hypotenuse 13. Therefore sec theta = hypotenuse/adjacent = 13/12.'),
  question('ssc-cgl-t2-ma2-026', 'Heights and distances', 'medium', 'A vertical pole casts a shadow 10 square root of 3 metres long when the angle of elevation of the sun is 30 degrees. What is the pole\'s height?', ['5 m', '10 m', '15 m', '20 m'], 1, 'Height = shadow x tan 30 degrees = 10 square root of 3 x 1/square root of 3 = 10 m.'),
  question('ssc-cgl-t2-ma2-027', 'Mean', 'easy', 'What is the arithmetic mean of 12, 15, 18, 21 and 24?', ['16', '17', '18', '19'], 2, 'The sum is 90 and there are five observations, so the mean is 90/5 = 18.'),
  question('ssc-cgl-t2-ma2-028', 'Median', 'easy', 'What is the median of 3, 7, 8, 12, 13, 14, 18 and 21?', ['11.5', '12', '13', '12.5'], 3, 'There are eight values, so the median is the average of the fourth and fifth values: (12 + 13)/2 = 12.5.'),
  question('ssc-cgl-t2-ma2-029', 'Standard deviation', 'easy', 'What is the standard deviation of 9, 9, 9, 9 and 9?', ['0', '1', '3', '9'], 0, 'Every value equals the mean, so every deviation is zero and the standard deviation is 0.'),
  question('ssc-cgl-t2-ma2-030', 'Probability', 'medium', 'A bag contains 5 red and 3 blue balls. Two balls are drawn without replacement. What is the probability that both are blue?', ['5/28', '3/28', '3/14', '1/8'], 1, 'The probability is 3/8 x 2/7 = 6/56 = 3/28.'),
];
