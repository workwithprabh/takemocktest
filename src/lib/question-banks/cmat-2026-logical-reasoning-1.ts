import type { Question } from '../questions';

export const CMAT_2026_LOGICAL_REASONING_1: Question[] = [
  {
    "id": "cmat-2026-logical-reasoning-001",
    "section": "Logical Reasoning",
    "topic": "Deductive Logic",
    "difficulty": "medium",
    "question": "A project rule says: if a proposal is fast-tracked, it must have both a technical review and a budget review. Proposal K was fast-tracked. Which conclusion necessarily follows?",
    "options": [
      "K had only a technical review",
      "K had only a budget review",
      "K had both reviews",
      "K was automatically funded"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The rule makes both reviews necessary conditions for any fast-tracked proposal.",
    "source": {
      "kind": "original",
      "reference": "NTA CMAT 2026 official Information Bulletin",
      "url": "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "cmat-2026-logical-reasoning-002",
    "section": "Logical Reasoning",
    "topic": "Deductive Logic",
    "difficulty": "medium",
    "question": "Every blue-tagged file is archived. No archived file is editable. File M is blue-tagged. What follows?",
    "options": [
      "File M is editable",
      "File M is not archived",
      "File M is not editable",
      "No conclusion about editability is possible"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Blue-tagged implies archived, and archived implies not editable.",
    "source": {
      "kind": "original",
      "reference": "NTA CMAT 2026 official Information Bulletin",
      "url": "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "cmat-2026-logical-reasoning-003",
    "section": "Logical Reasoning",
    "topic": "Deductive Logic",
    "difficulty": "medium",
    "question": "If a machine passes calibration, its green indicator turns on. The green indicator on Machine T is off. Assuming the rule is reliable, what can be inferred?",
    "options": [
      "Machine T definitely failed every test",
      "Machine T did not pass calibration",
      "Machine T was not switched on",
      "Machine T passed calibration"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By contraposition, if passing guarantees green-on, green-off means it did not pass calibration.",
    "source": {
      "kind": "original",
      "reference": "NTA CMAT 2026 official Information Bulletin",
      "url": "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "cmat-2026-logical-reasoning-004",
    "section": "Logical Reasoning",
    "topic": "Deductive Logic",
    "difficulty": "hard",
    "question": "A policy states: a request is escalated only if it is urgent, and every urgent request is logged. Request R was escalated. Which statement must be true?",
    "options": [
      "R was logged",
      "R was rejected",
      "R was not urgent",
      "R was escalated before being logged"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Escalated implies urgent; urgent implies logged.",
    "source": {
      "kind": "original",
      "reference": "NTA CMAT 2026 official Information Bulletin",
      "url": "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "cmat-2026-logical-reasoning-005",
    "section": "Logical Reasoning",
    "topic": "Sequences",
    "difficulty": "easy",
    "question": "A display cycles through the symbols ▲, ●, ■, ●, ◆ and then repeats. What symbol appears in position 38?",
    "options": [
      "▲",
      "●",
      "◆",
      "■"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "38 mod 5 = 3, so position 38 matches the third symbol, ■.",
    "source": {
      "kind": "original",
      "reference": "NTA CMAT 2026 official Information Bulletin",
      "url": "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "cmat-2026-logical-reasoning-006",
    "section": "Logical Reasoning",
    "topic": "Sequences",
    "difficulty": "medium",
    "question": "A numeric log begins 4, 7, 13, 22, 34, ... The successive increases are 3, 6, 9, 12. What is the next term?",
    "options": [
      "49",
      "46",
      "48",
      "52"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The next increase is 15, so 34+15=49.",
    "source": {
      "kind": "original",
      "reference": "NTA CMAT 2026 official Information Bulletin",
      "url": "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "cmat-2026-logical-reasoning-007",
    "section": "Logical Reasoning",
    "topic": "Sequences",
    "difficulty": "medium",
    "question": "A code transforms 2→5, 5→11, 11→23 by multiplying by 2 and adding 1. Applying the same rule once more gives:",
    "options": [
      "35",
      "45",
      "48",
      "47"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "23×2+1=47.",
    "source": {
      "kind": "original",
      "reference": "NTA CMAT 2026 official Information Bulletin",
      "url": "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "cmat-2026-logical-reasoning-008",
    "section": "Logical Reasoning",
    "topic": "Sequences",
    "difficulty": "hard",
    "question": "A sequence starts 81, 54, 36, 24, ... Each term is two-thirds of the previous term. What is the sixth term?",
    "options": [
      "32/3",
      "12",
      "16/3",
      "64/9"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Terms: 81,54,36,24,16,32/3; the sixth is 32/3.",
    "source": {
      "kind": "original",
      "reference": "NTA CMAT 2026 official Information Bulletin",
      "url": "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "cmat-2026-logical-reasoning-009",
    "section": "Logical Reasoning",
    "topic": "Ordering",
    "difficulty": "medium",
    "question": "Four reports J, K, L and M are reviewed one per hour. J is before K; L is immediately after J; M is after K. Which order is possible?",
    "options": [
      "L, J, K, M",
      "J, L, K, M",
      "J, K, L, M",
      "M, J, L, K"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Only J,L,K,M satisfies J before K, L immediately after J, and M after K.",
    "source": {
      "kind": "original",
      "reference": "NTA CMAT 2026 official Information Bulletin",
      "url": "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "cmat-2026-logical-reasoning-010",
    "section": "Logical Reasoning",
    "topic": "Ordering",
    "difficulty": "medium",
    "question": "Five lockers are numbered 1 to 5. A is in a lower-numbered locker than B; C is immediately above B; D is in locker 1. If B is in locker 3, where must C be?",
    "options": [
      "Locker 4",
      "Locker 2",
      "Locker 3",
      "Locker 5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Immediately above locker 3 is locker 4.",
    "source": {
      "kind": "original",
      "reference": "NTA CMAT 2026 official Information Bulletin",
      "url": "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "cmat-2026-logical-reasoning-011",
    "section": "Logical Reasoning",
    "topic": "Ordering",
    "difficulty": "hard",
    "question": "Three talks—Finance, Design and Operations—are scheduled at 10, 11 and 12. Design is later than Finance. Operations is not at 12. Which schedule is possible?",
    "options": [
      "Design 10, Finance 11, Operations 12",
      "Operations 10, Design 11, Finance 12",
      "Finance 10, Design 11, Operations 12",
      "Finance 10, Operations 11, Design 12"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The stated schedule has Design after Finance and Operations not at 12; the others violate at least one rule.",
    "source": {
      "kind": "original",
      "reference": "NTA CMAT 2026 official Information Bulletin",
      "url": "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "cmat-2026-logical-reasoning-012",
    "section": "Logical Reasoning",
    "topic": "Ordering",
    "difficulty": "medium",
    "question": "On a shelf, P is somewhere left of Q. R is immediately right of P. S is left of P. Which relation is certain?",
    "options": [
      "Q is left of R",
      "R is right of Q",
      "S is left of R",
      "P is left of S"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "S is left of P and R is right of P, so S must be left of R.",
    "source": {
      "kind": "original",
      "reference": "NTA CMAT 2026 official Information Bulletin",
      "url": "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "cmat-2026-logical-reasoning-013",
    "section": "Logical Reasoning",
    "topic": "Set Logic",
    "difficulty": "easy",
    "question": "In a survey, every respondent who chose Option X also chose Option Y. Which set relation represents this?",
    "options": [
      "Y is a subset of X",
      "X is a subset of Y",
      "X and Y are disjoint",
      "X and Y are equal"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Every X-member is a Y-member, so X⊆Y.",
    "source": {
      "kind": "original",
      "reference": "NTA CMAT 2026 official Information Bulletin",
      "url": "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "cmat-2026-logical-reasoning-014",
    "section": "Logical Reasoning",
    "topic": "Set Logic",
    "difficulty": "medium",
    "question": "Among 60 applicants, 34 know Python, 28 know SQL and 12 know both. How many know at least one of the two?",
    "options": [
      "46",
      "50",
      "52",
      "62"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By inclusion-exclusion, 34+28−12=50.",
    "source": {
      "kind": "original",
      "reference": "NTA CMAT 2026 official Information Bulletin",
      "url": "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "cmat-2026-logical-reasoning-015",
    "section": "Logical Reasoning",
    "topic": "Set Logic",
    "difficulty": "medium",
    "question": "A class has 40 students. Twenty-two joined the analytics club, 18 joined the debate club, and 9 joined both. How many joined neither club?",
    "options": [
      "7",
      "11",
      "13",
      "9"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Joined at least one =22+18−9=31; neither=40−31=9.",
    "source": {
      "kind": "original",
      "reference": "NTA CMAT 2026 official Information Bulletin",
      "url": "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "cmat-2026-logical-reasoning-016",
    "section": "Logical Reasoning",
    "topic": "Set Logic",
    "difficulty": "hard",
    "question": "In a group of 80, 46 use service A, 39 use service B, and 17 use neither. How many use both A and B?",
    "options": [
      "19",
      "24",
      "22",
      "26"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At least one=63. Intersection=46+39−63=22.",
    "source": {
      "kind": "original",
      "reference": "NTA CMAT 2026 official Information Bulletin",
      "url": "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "cmat-2026-logical-reasoning-017",
    "section": "Logical Reasoning",
    "topic": "Directions",
    "difficulty": "easy",
    "question": "Rina walks 7 m north, 4 m east, then 7 m south. Where is she relative to her starting point?",
    "options": [
      "4 m west",
      "7 m north",
      "7 m south",
      "4 m east"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The north and south movements cancel, leaving 4 m east.",
    "source": {
      "kind": "original",
      "reference": "NTA CMAT 2026 official Information Bulletin",
      "url": "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "cmat-2026-logical-reasoning-018",
    "section": "Logical Reasoning",
    "topic": "Directions",
    "difficulty": "medium",
    "question": "A drone faces east. It turns left, then right, then right again. Which direction does it finally face?",
    "options": [
      "North",
      "South",
      "East",
      "West"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "East→North→East→South.",
    "source": {
      "kind": "original",
      "reference": "NTA CMAT 2026 official Information Bulletin",
      "url": "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "cmat-2026-logical-reasoning-019",
    "section": "Logical Reasoning",
    "topic": "Analogy",
    "difficulty": "easy",
    "question": "Blueprint is to building as recipe is to:",
    "options": [
      "kitchen",
      "chef",
      "dish",
      "ingredient"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A blueprint guides creation of a building; a recipe guides creation of a dish.",
    "source": {
      "kind": "original",
      "reference": "NTA CMAT 2026 official Information Bulletin",
      "url": "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "cmat-2026-logical-reasoning-020",
    "section": "Logical Reasoning",
    "topic": "Critical Reasoning",
    "difficulty": "hard",
    "question": "A café extends opening hours, and weekly revenue rises. Which fact most weakens the claim that the longer hours caused the rise?",
    "options": [
      "A major festival began the same week and sharply increased foot traffic",
      "The café used the same menu",
      "Staff wore the same uniforms",
      "The café had extended hours printed on its door"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A simultaneous festival is a plausible confounding cause of the revenue increase.",
    "source": {
      "kind": "original",
      "reference": "NTA CMAT 2026 official Information Bulletin",
      "url": "https://cdnbbsr.s3waas.gov.in/s3a381c2c35c9157f6b67fd07d5a200ae1/uploads/2025/10/202510171049586023.pdf",
      "checkedOn": "2026-09-01"
    }
  }
];
