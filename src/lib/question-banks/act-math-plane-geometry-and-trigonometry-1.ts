import type { Question } from '../questions';

const source = {
  kind: 'original' as const,
  reference: 'Original ACT Math practice questions covering Plane Geometry and Trigonometry content, in the 4-option multiple-choice format used since the 2026 Enhanced ACT Math section.',
  url: 'https://www.act.org/content/act/en/products-and-services/the-act-educator/the-act-test/enhancements-k12/faqs.html',
  checkedOn: '15 August 2026',
};

export const ACT_MATH_PLANE_GEOMETRY_AND_TRIGONOMETRY_1: Question[] = [
  { id: 'act-math-plane-geometry-and-trigonometry-01-001', section: 'Plane Geometry and Trigonometry', topic: 'Pythagorean Theorem', difficulty: 'easy', question: 'A right triangle has legs of length 9 and 12. What is the length of the hypotenuse?', options: ['15', '18', '21', '225'], correctIndex: 0, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'By the Pythagorean theorem, the hypotenuse = √(9² + 12²) = √(81 + 144) = √225 = 15.', source },
  { id: 'act-math-plane-geometry-and-trigonometry-01-002', section: 'Plane Geometry and Trigonometry', topic: 'Circle Area', difficulty: 'medium', question: 'What is the area of a circle with radius 7? (Use π ≈ 22/7.)', options: ['44', '154', '144', '49'], correctIndex: 1, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'Area = πr² = (22/7) × 7² = (22/7) × 49 = 154.', source },
  { id: 'act-math-plane-geometry-and-trigonometry-01-003', section: 'Plane Geometry and Trigonometry', topic: 'Triangle Angle Sum', difficulty: 'easy', question: 'In a triangle, one angle measures 50° and another measures 65°. What is the measure of the third angle?', options: ['55°', '60°', '65°', '70°'], correctIndex: 2, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'The angles of a triangle sum to 180°, so the third angle = 180° − 50° − 65° = 65°.', source },
  { id: 'act-math-plane-geometry-and-trigonometry-01-004', section: 'Plane Geometry and Trigonometry', topic: 'Volume', difficulty: 'easy', question: 'What is the volume of a rectangular box with length 5, width 4, and height 3?', options: ['12', '35', '47', '60'], correctIndex: 3, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'Volume = length × width × height = 5 × 4 × 3 = 60.', source },
  { id: 'act-math-plane-geometry-and-trigonometry-01-005', section: 'Plane Geometry and Trigonometry', topic: 'Trigonometric Ratios', difficulty: 'medium', question: 'In a right triangle, the side opposite a 30° angle is 5. What is the length of the hypotenuse? (sin 30° = 0.5)', options: ['10', '8.66', '5', '2.5'], correctIndex: 0, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'sin(30°) = opposite/hypotenuse, so hypotenuse = 5 / 0.5 = 10.', source },
  { id: 'act-math-plane-geometry-and-trigonometry-01-006', section: 'Plane Geometry and Trigonometry', topic: 'Similar Figures', difficulty: 'medium', question: 'Two similar triangles have a scale factor of 3:5. If the smaller triangle has a side of length 6, what is the corresponding side of the larger triangle?', options: ['8', '10', '12', '15'], correctIndex: 1, answerType: 'mcq', marks: 1, negativeMarking: 0, explanation: 'The larger side = 6 × (5/3) = 10.', source },
];
