import type { Question } from '../questions';

export const SLAT_2026_ANALYTICAL_REASONING_1: Question[] = [
  {
    "id": "slat-2026-analytical-reasoning-001",
    "section": "Analytical Reasoning",
    "topic": "State transitions",
    "difficulty": "medium",
    "question": "A display starts at 2. Button A adds 3; Button B doubles the current value. If A, then B, then A are pressed, what is displayed?",
    "options": [
      "10",
      "13",
      "12",
      "16"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "2+3=5; doubled to 10; +3 gives 13.",
    "source": {
      "kind": "original",
      "reference": "SLAT 2026 official Test Day Guide",
      "url": "https://www.slat-test.org/images/pdf/SLAT-2026-test-day.pdf",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "slat-2026-analytical-reasoning-002",
    "section": "Analytical Reasoning",
    "topic": "Selection constraints",
    "difficulty": "medium",
    "question": "Exactly three of five interns A, B, C, D and E are assigned to a review team. If A is chosen, C is not chosen. B and D must either both be chosen or both be left out. E can be chosen only if C is chosen. Which team can be selected?",
    "options": [
      "A, B and D",
      "A, C and D",
      "B, C and E",
      "C, D and E"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A, B and D satisfies every rule: A is present with C absent; B and D are both present; and E is absent. Each other option violates at least one stated condition.",
    "source": {
      "kind": "original",
      "reference": "SLAT 2026 official Test Day Guide",
      "url": "https://www.slat-test.org/images/pdf/SLAT-2026-test-day.pdf",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "slat-2026-analytical-reasoning-003",
    "section": "Analytical Reasoning",
    "topic": "Grid reasoning",
    "difficulty": "medium",
    "question": "A sensor records temperatures 18, 21, 19, 24 over four hours. What is the range?",
    "options": [
      "3",
      "6",
      "5",
      "42"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Range = maximum 24 minus minimum 18 = 6.",
    "source": {
      "kind": "original",
      "reference": "SLAT 2026 official Test Day Guide",
      "url": "https://www.slat-test.org/images/pdf/SLAT-2026-test-day.pdf",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "slat-2026-analytical-reasoning-004",
    "section": "Analytical Reasoning",
    "topic": "Rule sequence",
    "difficulty": "medium",
    "question": "A code starts with M. Rule 1 moves one letter forward; Rule 2 moves two letters backward. Applying Rule 1, Rule 1, Rule 2 gives:",
    "options": [
      "M",
      "N",
      "L",
      "O"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "M→N→O→M.",
    "source": {
      "kind": "original",
      "reference": "SLAT 2026 official Test Day Guide",
      "url": "https://www.slat-test.org/images/pdf/SLAT-2026-test-day.pdf",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "slat-2026-analytical-reasoning-005",
    "section": "Analytical Reasoning",
    "topic": "Table interpretation",
    "difficulty": "medium",
    "question": "A shuttle log shows Route P: 48 riders, Q: 36, R: 60. If 12 riders move from R to Q, what is true?",
    "options": [
      "Only P and Q tie.",
      "Only Q and R tie.",
      "All three routes then have 48 riders.",
      "P remains the largest route."
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Q becomes 48 and R becomes 48, matching P at 48.",
    "source": {
      "kind": "original",
      "reference": "SLAT 2026 official Test Day Guide",
      "url": "https://www.slat-test.org/images/pdf/SLAT-2026-test-day.pdf",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "slat-2026-analytical-reasoning-006",
    "section": "Analytical Reasoning",
    "topic": "Table interpretation",
    "difficulty": "medium",
    "question": "A workshop has Team A=18, B=22, C=26. Four members move from C to A. What is true afterward?",
    "options": [
      "Only A and B are equal.",
      "Only A and C are equal.",
      "B remains larger than both.",
      "All three teams have 22 members."
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A becomes 22 and C becomes 22, matching B at 22.",
    "source": {
      "kind": "original",
      "reference": "SLAT 2026 official Test Day Guide",
      "url": "https://www.slat-test.org/images/pdf/SLAT-2026-test-day.pdf",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "slat-2026-analytical-reasoning-007",
    "section": "Analytical Reasoning",
    "topic": "Binary toggles",
    "difficulty": "medium",
    "question": "Three lamps X,Y,Z start OFF. Switch 1 toggles X and Y; Switch 2 toggles Y and Z. Press 1, then 2. Which lamps are ON?",
    "options": [
      "X only",
      "Y only",
      "X, Y and Z",
      "X and Z only"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "After Switch 1: X,Y on. After Switch 2: Y off, Z on, leaving X and Z.",
    "source": {
      "kind": "original",
      "reference": "SLAT 2026 official Test Day Guide",
      "url": "https://www.slat-test.org/images/pdf/SLAT-2026-test-day.pdf",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "slat-2026-analytical-reasoning-008",
    "section": "Analytical Reasoning",
    "topic": "Ordering constraints",
    "difficulty": "medium",
    "question": "Five reports P,Q,R,S,T are reviewed once each. P is before Q; S is immediately before T; R is last. Which sequence is valid?",
    "options": [
      "Q, P, S, T, R",
      "P, Q, S, T, R",
      "S, T, Q, R, P",
      "P, S, Q, T, R"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Only the first satisfies P<Q, adjacent S-T, and R last.",
    "source": {
      "kind": "original",
      "reference": "SLAT 2026 official Test Day Guide",
      "url": "https://www.slat-test.org/images/pdf/SLAT-2026-test-day.pdf",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "slat-2026-analytical-reasoning-009",
    "section": "Analytical Reasoning",
    "topic": "Rate table",
    "difficulty": "medium",
    "question": "Machine A packs 24 boxes/hour and B packs 18 boxes/hour. Working together for 2 hours, how many boxes do they pack?",
    "options": [
      "42",
      "72",
      "96",
      "84"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Combined rate is 42 boxes/hour; over 2 hours that is 84.",
    "source": {
      "kind": "original",
      "reference": "SLAT 2026 official Test Day Guide",
      "url": "https://www.slat-test.org/images/pdf/SLAT-2026-test-day.pdf",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "slat-2026-analytical-reasoning-010",
    "section": "Analytical Reasoning",
    "topic": "Constraint satisfaction",
    "difficulty": "medium",
    "question": "A 3-digit code has distinct digits. The hundreds digit is 2 more than the tens digit; the units digit is 1 less than the tens digit. Which code fits?",
    "options": [
      "532",
      "642",
      "421",
      "310"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For 421: 4 is 2 more than 2, and 1 is 1 less than 2; digits are distinct.",
    "source": {
      "kind": "original",
      "reference": "SLAT 2026 official Test Day Guide",
      "url": "https://www.slat-test.org/images/pdf/SLAT-2026-test-day.pdf",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "slat-2026-analytical-reasoning-011",
    "section": "Analytical Reasoning",
    "topic": "Matrix pattern",
    "difficulty": "medium",
    "question": "Rows of a number grid are (2,5,7), (4,3,7), (6,1,?). If the third number in each row is the sum of the first two, ? equals:",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "6+1=7.",
    "source": {
      "kind": "original",
      "reference": "SLAT 2026 official Test Day Guide",
      "url": "https://www.slat-test.org/images/pdf/SLAT-2026-test-day.pdf",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "slat-2026-analytical-reasoning-012",
    "section": "Analytical Reasoning",
    "topic": "Data sufficiency",
    "difficulty": "medium",
    "question": "Question: Is n greater than 10? Statement 1: n is an integer greater than 10. Statement 2: n is an even integer. Which statement is sufficient?",
    "options": [
      "Statement 1 alone is sufficient.",
      "Statement 2 alone is sufficient.",
      "Both together are necessary.",
      "Neither statement is sufficient."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Statement 1 directly establishes n>10; statement 2 alone does not.",
    "source": {
      "kind": "original",
      "reference": "SLAT 2026 official Test Day Guide",
      "url": "https://www.slat-test.org/images/pdf/SLAT-2026-test-day.pdf",
      "checkedOn": "2026-08-31"
    }
  }
];
