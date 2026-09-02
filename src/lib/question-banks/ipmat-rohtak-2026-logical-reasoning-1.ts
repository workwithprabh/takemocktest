import type { Question } from '../questions';

export const IPMAT_ROHTAK_2026_LOGICAL_REASONING_1: Question[] = [
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-001",
    "section": "Logical Reasoning",
    "topic": "Graph Reasoning",
    "difficulty": "medium",
    "question": "A lab has five stations P, Q, R, S and T. Direct sample transfers are allowed only P→Q, P→R, Q→S, R→S and S→T. A sample may pass through intermediate stations. From P, which station is not reachable?",
    "options": [
      "Only Q",
      "Only R",
      "None; all four other stations are reachable",
      "T"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P reaches Q and R directly, S through either Q or R, and T through S.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-002",
    "section": "Logical Reasoning",
    "topic": "Graph Reasoning",
    "difficulty": "medium",
    "question": "A lab has five stations P, Q, R, S and T. Direct sample transfers are allowed only P→Q, P→R, Q→S, R→S and S→T. A sample may pass through intermediate stations. Which station can receive a sample directly from both Q and R?",
    "options": [
      "S",
      "P",
      "Q",
      "T"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Both Q→S and R→S are allowed direct transfers.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-003",
    "section": "Logical Reasoning",
    "topic": "Graph Reasoning",
    "difficulty": "medium",
    "question": "A lab has five stations P, Q, R, S and T. Direct sample transfers are allowed only P→Q, P→R, Q→S, R→S and S→T. A sample may pass through intermediate stations. What is the minimum number of transfers needed to move a sample from P to T?",
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A shortest path is P→Q→S→T or P→R→S→T: three transfers.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-004",
    "section": "Logical Reasoning",
    "topic": "Graph Reasoning",
    "difficulty": "medium",
    "question": "A lab has five stations P, Q, R, S and T. Direct sample transfers are allowed only P→Q, P→R, Q→S, R→S and S→T. A sample may pass through intermediate stations. If the link S→T is unavailable, which station becomes unreachable from P?",
    "options": [
      "Q",
      "R",
      "S",
      "T"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "All paths to T end with S→T; the other stations remain reachable.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-005",
    "section": "Logical Reasoning",
    "topic": "Graph Reasoning",
    "difficulty": "hard",
    "question": "A lab has five stations P, Q, R, S and T. Direct sample transfers are allowed only P→Q, P→R, Q→S, R→S and S→T. A sample may pass through intermediate stations. A new direct link T→P is added. What structural feature is created?",
    "options": [
      "A disconnected component",
      "A directed cycle",
      "A source with no incoming link",
      "A graph with no path from T"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P→Q→S→T→P (and similarly through R) forms a directed cycle.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-006",
    "section": "Logical Reasoning",
    "topic": "Scheduling Logic",
    "difficulty": "medium",
    "question": "Five tasks—draft, review, budget, pilot and launch—follow these rules: review starts after draft; pilot starts after both review and budget; launch starts after pilot. Draft and budget may start independently. Which task must finish immediately before launch can start?",
    "options": [
      "Draft",
      "Pilot",
      "Review",
      "Budget"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The rule directly requires launch after pilot.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-007",
    "section": "Logical Reasoning",
    "topic": "Scheduling Logic",
    "difficulty": "medium",
    "question": "Five tasks—draft, review, budget, pilot and launch—follow these rules: review starts after draft; pilot starts after both review and budget; launch starts after pilot. Draft and budget may start independently. Which two tasks may begin without waiting for another listed task?",
    "options": [
      "Draft and review",
      "Review and budget",
      "Budget and pilot",
      "Draft and budget"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Only draft and budget have no prerequisite stated.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-008",
    "section": "Logical Reasoning",
    "topic": "Scheduling Logic",
    "difficulty": "hard",
    "question": "Five tasks—draft, review, budget, pilot and launch—follow these rules: review starts after draft; pilot starts after both review and budget; launch starts after pilot. Draft and budget may start independently. If budget is delayed but draft and review finish, which task is blocked next?",
    "options": [
      "Draft",
      "Pilot",
      "Review",
      "Launch only"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Pilot requires both review and budget; a delayed budget therefore blocks pilot (and consequently launch).",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-009",
    "section": "Logical Reasoning",
    "topic": "Scheduling Logic",
    "difficulty": "medium",
    "question": "Five tasks—draft, review, budget, pilot and launch—follow these rules: review starts after draft; pilot starts after both review and budget; launch starts after pilot. Draft and budget may start independently. Which ordering is valid?",
    "options": [
      "Budget, Draft, Review, Pilot, Launch",
      "Draft, Pilot, Review, Budget, Launch",
      "Review, Draft, Budget, Pilot, Launch",
      "Draft, Review, Pilot, Budget, Launch"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The valid order respects draft→review, both review & budget→pilot, then pilot→launch.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-010",
    "section": "Logical Reasoning",
    "topic": "Scheduling Logic",
    "difficulty": "hard",
    "question": "Five tasks—draft, review, budget, pilot and launch—follow these rules: review starts after draft; pilot starts after both review and budget; launch starts after pilot. Draft and budget may start independently. What is the minimum number of prerequisite links that must be completed before pilot can start, counting direct prerequisite relations only?",
    "options": [
      "2",
      "1",
      "3",
      "4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Pilot has two direct prerequisites: review and budget.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-011",
    "section": "Logical Reasoning",
    "topic": "Data Logic",
    "difficulty": "medium",
    "question": "Four prototypes W, X, Y and Z were scored on speed and reliability: W=(8,6), X=(6,9), Y=(7,7), Z=(9,5). A prototype dominates another only if it is at least as high on both measures and strictly higher on at least one. Which prototype dominates Y?",
    "options": [
      "W",
      "X",
      "None",
      "Z"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Each of W, X and Z is higher on one measure but lower on the other relative to Y.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-012",
    "section": "Logical Reasoning",
    "topic": "Data Logic",
    "difficulty": "medium",
    "question": "Four prototypes W, X, Y and Z were scored on speed and reliability: W=(8,6), X=(6,9), Y=(7,7), Z=(9,5). A prototype dominates another only if it is at least as high on both measures and strictly higher on at least one. Which prototype has the highest speed score?",
    "options": [
      "W",
      "Z",
      "X",
      "Y"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Z has speed 9, the largest.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-013",
    "section": "Logical Reasoning",
    "topic": "Data Logic",
    "difficulty": "medium",
    "question": "Four prototypes W, X, Y and Z were scored on speed and reliability: W=(8,6), X=(6,9), Y=(7,7), Z=(9,5). A prototype dominates another only if it is at least as high on both measures and strictly higher on at least one. Which prototype has the highest reliability score?",
    "options": [
      "W",
      "X",
      "Y",
      "Z"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "X has reliability 9, the largest.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-014",
    "section": "Logical Reasoning",
    "topic": "Data Logic",
    "difficulty": "hard",
    "question": "Four prototypes W, X, Y and Z were scored on speed and reliability: W=(8,6), X=(6,9), Y=(7,7), Z=(9,5). A prototype dominates another only if it is at least as high on both measures and strictly higher on at least one. If a combined score is speed + reliability, which prototype has the highest total?",
    "options": [
      "X",
      "W",
      "Y",
      "Z"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Totals are W=14, X=15, Y=14 and Z=14; X is highest.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-015",
    "section": "Logical Reasoning",
    "topic": "Data Logic",
    "difficulty": "medium",
    "question": "Four prototypes W, X, Y and Z were scored on speed and reliability: W=(8,6), X=(6,9), Y=(7,7), Z=(9,5). A prototype dominates another only if it is at least as high on both measures and strictly higher on at least one. If reliability is weighted twice as much as speed, which prototype has the largest weighted score speed+2×reliability?",
    "options": [
      "W",
      "X",
      "Y",
      "Z"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Weighted scores: W=20, X=24, Y=21, Z=19; X is largest.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-016",
    "section": "Logical Reasoning",
    "topic": "State Transitions",
    "difficulty": "medium",
    "question": "A control panel has switches A, B and C, initially all OFF. Command α toggles A and B; command β toggles B and C; command γ toggles A and C. Toggling changes OFF to ON and ON to OFF. Starting from all OFF, after α then β, which switches are ON?",
    "options": [
      "A and B only",
      "B and C only",
      "A and C only",
      "All three"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "After α: A,B ON. After β: B turns OFF and C ON, leaving A and C ON.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-017",
    "section": "Logical Reasoning",
    "topic": "State Transitions",
    "difficulty": "medium",
    "question": "A control panel has switches A, B and C, initially all OFF. Command α toggles A and B; command β toggles B and C; command γ toggles A and C. Toggling changes OFF to ON and ON to OFF. Starting from all OFF, after α then α, the final state is",
    "options": [
      "all OFF",
      "A and B ON",
      "B and C ON",
      "A and C ON"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The same two switches are toggled twice, returning to the initial state.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-018",
    "section": "Logical Reasoning",
    "topic": "State Transitions",
    "difficulty": "hard",
    "question": "A control panel has switches A, B and C, initially all OFF. Command α toggles A and B; command β toggles B and C; command γ toggles A and C. Toggling changes OFF to ON and ON to OFF. Starting from all OFF, after α, β and γ once each, the final state is",
    "options": [
      "only A ON",
      "only B ON",
      "all ON",
      "all OFF"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Each switch is toggled exactly twice across α,β,γ, so all return OFF.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-019",
    "section": "Logical Reasoning",
    "topic": "State Transitions",
    "difficulty": "medium",
    "question": "A control panel has switches A, B and C, initially all OFF. Command α toggles A and B; command β toggles B and C; command γ toggles A and C. Toggling changes OFF to ON and ON to OFF. Starting from all OFF, which single command leaves B OFF?",
    "options": [
      "α",
      "γ",
      "β",
      "No command does"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "γ toggles A and C but not B, so B remains OFF.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-020",
    "section": "Logical Reasoning",
    "topic": "State Transitions",
    "difficulty": "hard",
    "question": "A control panel has switches A, B and C, initially all OFF. Command α toggles A and B; command β toggles B and C; command γ toggles A and C. Toggling changes OFF to ON and ON to OFF. Starting from all OFF, which two-command sequence leaves only A and C ON?",
    "options": [
      "α followed by γ",
      "β followed by γ",
      "γ followed by γ",
      "α followed by β"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "αβ leaves A,C ON; αγ leaves B,C ON; βγ leaves A,B ON; γγ returns all OFF.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-021",
    "section": "Logical Reasoning",
    "topic": "State Transformation",
    "difficulty": "medium",
    "question": "A four-bit display starts as 1011. Operation F flips the first and third bits, counting from the left, and operation R reverses the order of all four bits. What is the display after F followed by R?",
    "options": [
      "0001",
      "0010",
      "0100",
      "1000"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Applying F to 1011 flips positions 1 and 3, giving 0001. Reversing 0001 gives 1000.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-022",
    "section": "Logical Reasoning",
    "topic": "Directed Networks",
    "difficulty": "medium",
    "question": "A one-way shuttle map has links P→Q, P→S, Q→R and S→R. Which stop can be reached from P by two different routes of exactly two links each?",
    "options": [
      "Q",
      "R",
      "S",
      "P"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are exactly two two-link routes from P to R: P→Q→R and P→S→R. No other listed stop has two such routes.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-023",
    "section": "Logical Reasoning",
    "topic": "Letter Logic",
    "difficulty": "medium",
    "question": "If each letter in MANGO is shifted one position backward in the alphabet, the code becomes",
    "options": [
      "LZNFM",
      "NBOPH",
      "LZMGO",
      "LZMFN"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "M→L, A→Z, N→M, G→F, O→N.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-024",
    "section": "Logical Reasoning",
    "topic": "Syllogism",
    "difficulty": "medium",
    "question": "All analysts are readers. Some readers are musicians. Which conclusion is definitely valid?",
    "options": [
      "Some analysts are musicians",
      "All musicians are analysts",
      "Some musicians are readers",
      "No reader is an analyst"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "“Some readers are musicians” converts to “some musicians are readers”; no analyst-musician overlap is forced.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-025",
    "section": "Logical Reasoning",
    "topic": "Syllogism",
    "difficulty": "medium",
    "question": "No ceramic item is flexible. Some prototypes are flexible. What must follow?",
    "options": [
      "No prototype is ceramic",
      "All prototypes are flexible",
      "Some prototypes are not ceramic",
      "Some ceramic items are prototypes"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The flexible prototypes cannot be ceramic, so at least some prototypes are not ceramic.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-026",
    "section": "Logical Reasoning",
    "topic": "Direction Sense",
    "difficulty": "medium",
    "question": "Kavya walks 4 km south, 7 km east, 1 km north and 3 km west. Her final position from the start is",
    "options": [
      "4 km east and 3 km south",
      "3 km east and 4 km south",
      "4 km west and 3 km north",
      "10 km east and 5 km south"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Net east=7−3=4 km; net south=4−1=3 km.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-027",
    "section": "Logical Reasoning",
    "topic": "Ranking",
    "difficulty": "easy",
    "question": "In a list of 36 candidates, Dev is 11th from the top. His rank from the bottom is",
    "options": [
      "25th",
      "27th",
      "28th",
      "26th"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "36−11+1=26.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-028",
    "section": "Logical Reasoning",
    "topic": "Data Sufficiency",
    "difficulty": "hard",
    "question": "Is n even? I: n is divisible by 6. II: n is divisible by 3.",
    "options": [
      "Statement II alone is sufficient",
      "Both together are necessary",
      "Statement I alone is sufficient",
      "Neither statement is sufficient"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Divisibility by 6 guarantees evenness; divisibility by 3 does not.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-029",
    "section": "Logical Reasoning",
    "topic": "Statement-Assumption",
    "difficulty": "medium",
    "question": "Proposal: “Extend the library closing time during examination week.” Which assumption is most necessary?",
    "options": [
      "Some students need study access later than the current closing time",
      "Every student studies only in the library",
      "Electricity after closing is free",
      "No staff member has any other duty"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The proposal addresses a need only if some students value access beyond current hours.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-030",
    "section": "Logical Reasoning",
    "topic": "Statement-Conclusion",
    "difficulty": "medium",
    "question": "All orders placed before noon were dispatched today. Order K was not dispatched today. If the statement is true, what follows?",
    "options": [
      "Order K was cancelled",
      "Order K was placed after midnight",
      "No orders were dispatched",
      "Order K was not placed before noon"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By contraposition, not dispatched implies it was not among orders placed before noon.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-031",
    "section": "Logical Reasoning",
    "topic": "Analogy",
    "difficulty": "easy",
    "question": "Blueprint : Building :: Score : ?",
    "options": [
      "Music performance",
      "Painter",
      "Audience",
      "Ticket"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A blueprint guides realization of a building; a score guides realization of a musical performance.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-032",
    "section": "Logical Reasoning",
    "topic": "Odd One Out",
    "difficulty": "easy",
    "question": "Which is the odd one out?",
    "options": [
      "Cube",
      "Square",
      "Rectangle",
      "Rhombus"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Cube is three-dimensional; the others are plane figures.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-033",
    "section": "Logical Reasoning",
    "topic": "Set Reasoning",
    "difficulty": "medium",
    "question": "Of 70 participants, 42 use app A, 35 use app B and 18 use both. How many use neither?",
    "options": [
      "7",
      "13",
      "11",
      "17"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At least one=42+35−18=59; neither=70−59=11.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-034",
    "section": "Logical Reasoning",
    "topic": "Conditional Logic",
    "difficulty": "hard",
    "question": "If a file is encrypted, access requires a key. Access to file F did not require a key. Which conclusion follows under the rule?",
    "options": [
      "File F was not encrypted",
      "File F was public",
      "The key was lost",
      "All unencrypted files are public"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Contraposition of encrypted→key-required gives no-key-required→not-encrypted.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-035",
    "section": "Logical Reasoning",
    "topic": "Counting Logic",
    "difficulty": "medium",
    "question": "A three-digit code uses distinct digits chosen from {1,2,3,4}. How many such codes are possible?",
    "options": [
      "12",
      "18",
      "24",
      "36"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Choose and order 3 of 4 digits: 4P3=24.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-036",
    "section": "Logical Reasoning",
    "topic": "Clock Reasoning",
    "difficulty": "medium",
    "question": "At 3:30, the smaller angle between the hour and minute hands is",
    "options": [
      "60°",
      "90°",
      "105°",
      "75°"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Minute hand=180°. Hour hand=3.5×30=105°. Difference=75°.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-037",
    "section": "Logical Reasoning",
    "topic": "Calendar Reasoning",
    "difficulty": "medium",
    "question": "If 1 July is a Wednesday, what day is 1 August of the same year?",
    "options": [
      "Friday",
      "Sunday",
      "Saturday",
      "Monday"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "July has 31 days, shifting weekday by 3: Wednesday→Saturday.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-038",
    "section": "Logical Reasoning",
    "topic": "Binary Logic",
    "difficulty": "medium",
    "question": "A statement is true exactly when two switches have the same state. Which pair makes the statement false?",
    "options": [
      "ON, ON",
      "ON, OFF",
      "OFF, OFF",
      "Either same-state pair"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The condition is equality; ON/OFF are different, so the statement is false.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-039",
    "section": "Logical Reasoning",
    "topic": "Cause and Effect",
    "difficulty": "medium",
    "question": "A firm shortened a form from 18 fields to 8, while all other onboarding steps stayed unchanged. Completion rates rose immediately. Which inference is best supported?",
    "options": [
      "The shorter form guarantees every applicant is qualified",
      "Advertising caused the rise",
      "Form length may have been a barrier to completion",
      "All eight remaining fields are unnecessary"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "With other steps unchanged, the timing supports form length as a plausible barrier, not the stronger claims.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  },
  {
    "id": "ipmat-rohtak-2026-logical-reasoning-040",
    "section": "Logical Reasoning",
    "topic": "Critical Reasoning",
    "difficulty": "hard",
    "question": "A café claims a new layout reduced waiting because average queue time fell. Which additional fact most weakens that claim?",
    "options": [
      "The new layout uses the same furniture",
      "Staff liked the new layout",
      "The café changed its wall color",
      "Customer volume fell by 60% during the measurement period"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A large fall in demand could explain shorter queues independently of the layout.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak IPM Batch 08 Admission Prospectus 2026",
      "url": "https://www.iimrohtak.ac.in/panel/assets/images/prospectus/17689678733505.pdf",
      "checkedOn": "2026-09-01"
    }
  }
];
