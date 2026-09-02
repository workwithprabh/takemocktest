import type { Question } from '../questions';

export const NIFTEE_2026_BFTECH_SECTION_B_ANALYTICAL_LOGICAL_1: Question[] = [
  {
    "id": "niftee-2026-bft-bl-001",
    "section": "Section B \u2014 Analytical & Logical Ability",
    "topic": "Seating Arrangement",
    "difficulty": "hard",
    "question": "Five people A, B, C, D and E sit in a row facing north. C sits immediately right of A. B sits at an end. D is not adjacent to B. E sits immediately left of D. Which arrangement is possible?",
    "options": [
      "B-A-C-E-D",
      "B-E-D-C-A",
      "A-C-B-E-D",
      "E-D-B-A-C"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "B-A-C-E-D satisfies C immediately right of A, B at an end, E immediately left of D, and D not adjacent to B.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bl-002",
    "section": "Section B \u2014 Analytical & Logical Ability",
    "topic": "Scheduling",
    "difficulty": "hard",
    "question": "Four inspections P, Q, R and S occur on Monday through Thursday, one per day. P is before R. Q is immediately after P. S is not on Thursday. Which schedule is possible?",
    "options": [
      "S Monday, P Tuesday, R Wednesday, Q Thursday",
      "P Monday, R Tuesday, Q Wednesday, S Thursday",
      "Q Monday, P Tuesday, S Wednesday, R Thursday",
      "P Monday, Q Tuesday, S Wednesday, R Thursday"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Only P-Mon, Q-Tue, S-Wed, R-Thu satisfies Q immediately after P, P before R, and S not Thursday.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bl-003",
    "section": "Section B \u2014 Analytical & Logical Ability",
    "topic": "Conditional Logic",
    "difficulty": "hard",
    "question": "Rules: If a shipment is urgent, it is inspected today. If it is inspected today, its documents are scanned. Shipment Z\u2019s documents were not scanned. What must be true if the rules have no exceptions?",
    "options": [
      "Shipment Z was inspected today.",
      "Shipment Z was urgent but skipped inspection.",
      "Every non-urgent shipment is never inspected.",
      "Shipment Z was not urgent."
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Urgent -> inspected today -> documents scanned. Not scanned implies not inspected today, and therefore not urgent.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bl-004",
    "section": "Section B \u2014 Analytical & Logical Ability",
    "topic": "Matrix Reasoning",
    "difficulty": "medium",
    "question": "Three teams X, Y and Z each choose one material: cotton, wool or linen, with no repetition. X does not choose cotton. Y does not choose wool. Z chooses linen. What does X choose?",
    "options": [
      "cotton",
      "wool",
      "linen",
      "cannot be determined"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Z has linen. X cannot cotton, so X must wool; then Y is cotton.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bl-005",
    "section": "Section B \u2014 Analytical & Logical Ability",
    "topic": "Input-Output Logic",
    "difficulty": "medium",
    "question": "A machine transforms 4827 by moving the last digit to the front and then adding 3 to the new number. What is the output?",
    "options": [
      "7485",
      "7482",
      "48210",
      "7285"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Moving 7 to front gives 7482; adding 3 gives 7485.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bl-006",
    "section": "Section B \u2014 Analytical & Logical Ability",
    "topic": "Binary Conditions",
    "difficulty": "hard",
    "question": "A product is approved only if it passes both Test X and Test Y. Product M is approved. Which statement must be true?",
    "options": [
      "M passed both X and Y.",
      "Approval gives no information about the tests.",
      "M failed X but passed Y.",
      "M passed exactly one of the tests."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Approval requires both tests; if M is approved, both conditions must have been satisfied.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bl-007",
    "section": "Section B \u2014 Analytical & Logical Ability",
    "topic": "Syllogism",
    "difficulty": "hard",
    "question": "Statements: No recycled item is disposable. Some packaging is recycled. All disposable items are single-use. Which conclusion must follow?",
    "options": [
      "Some packaging is single-use.",
      "No packaging is single-use.",
      "All recycled items are packaging.",
      "Some packaging is not disposable."
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Some packaging is recycled, and no recycled item is disposable, so that packaging is not disposable.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bl-008",
    "section": "Section B \u2014 Analytical & Logical Ability",
    "topic": "Ordering",
    "difficulty": "hard",
    "question": "Six boxes P, Q, R, S, T and U are stacked top to bottom. P is above Q. R is immediately below P. S is below Q. T is above P. U is at the bottom. Which box must be above R?",
    "options": [
      "U",
      "T",
      "S",
      "Q"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Because T is above P and R is immediately below P, T must be above R.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bl-009",
    "section": "Section B \u2014 Analytical & Logical Ability",
    "topic": "Critical Reasoning",
    "difficulty": "hard",
    "question": "A store\u2019s weekend trial of a new layout raised average transaction value, but the store also ran a one-day festival discount during the same weekend. Which additional evidence would best isolate the layout\u2019s effect?",
    "options": [
      "Compare the trial weekend with a weekday from another season.",
      "Ask only customers who spent the most whether they liked the layout.",
      "Assume the discount had no effect because it lasted only one day.",
      "Compare similar weekends with and without the new layout while holding discount policy constant."
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "A controlled comparison that keeps discount policy constant helps separate the layout effect from the festival discount.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bl-010",
    "section": "Section B \u2014 Analytical & Logical Ability",
    "topic": "Pattern Recognition",
    "difficulty": "medium",
    "question": "Find the next number in the series: 13, 17, 26, 32, 45, 53, ?",
    "options": [
      "68",
      "70",
      "72",
      "74"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The successive increases alternate between two growing sequences: +4, +9, +6, +13, +8, ... . The first set is 4,6,8 (rising by 2) and the second is 9,13,17 (rising by 4). Therefore the next increase is 17, giving 53+17=70.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bl-011",
    "section": "Section B \u2014 Analytical & Logical Ability",
    "topic": "Code Relationship",
    "difficulty": "medium",
    "question": "In a code, FABRIC is written as 6-1-2-18-9-3 using letter positions. What is DYE?",
    "options": [
      "4-24-5",
      "5-25-4",
      "4-25-5",
      "3-25-5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Using A=1,...,Z=26: D=4, Y=25, E=5.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bl-012",
    "section": "Section B \u2014 Analytical & Logical Ability",
    "topic": "Set Reasoning",
    "difficulty": "hard",
    "question": "Of 60 applicants, 34 know Excel, 29 know CAD, and 12 know neither. How many know both Excel and CAD?",
    "options": [
      "17",
      "5",
      "15",
      "23"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "At least one=60\u221212=48. By inclusion-exclusion, both=34+29\u221248=15.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bl-013",
    "section": "Section B \u2014 Analytical & Logical Ability",
    "topic": "Direction Sense",
    "difficulty": "medium",
    "question": "Karan faces west. He turns 90\u00b0 clockwise, then 180\u00b0, then 90\u00b0 anticlockwise. Which direction is he facing?",
    "options": [
      "east",
      "west",
      "south",
      "north"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "West -> clockwise 90\u00b0 = north -> 180\u00b0 = south -> anticlockwise 90\u00b0 = east.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bl-014",
    "section": "Section B \u2014 Analytical & Logical Ability",
    "topic": "Data Sufficiency",
    "difficulty": "hard",
    "question": "Question: Is n even? I: n is divisible by 6. II: n is divisible by 3. Which is correct?",
    "options": [
      "Both together are needed.",
      "Neither statement is sufficient even together.",
      "Statement II alone is sufficient.",
      "Statement I alone is sufficient; Statement II alone is not."
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Divisible by 6 guarantees even. Divisible by 3 alone can be odd or even.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bl-015",
    "section": "Section B \u2014 Analytical & Logical Ability",
    "topic": "Logical Consistency",
    "difficulty": "hard",
    "question": "Exactly one of the following statements is true: (1) The red sample passed. (2) The blue sample passed. (3) Both samples passed. If the red sample passed, what follows?",
    "options": [
      "The blue sample did not pass.",
      "The blue sample also passed.",
      "No conclusion about the blue sample is possible.",
      "Statement 3 must be true."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "If red passed and blue also passed, statements 1,2,3 would all be true. Since exactly one statement is true, blue must not have passed; then only statement 1 is true.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  }
];
