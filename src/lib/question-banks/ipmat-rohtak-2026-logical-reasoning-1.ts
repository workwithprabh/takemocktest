import type { Question } from '../questions';

export const IPMAT_ROHTAK_2026_LOGICAL_REASONING_1: Question[] = [
  {
    "id": "ipmat-rohtak-2026-lr-001",
    "section": "Logical Reasoning",
    "topic": "Ordering",
    "difficulty": "easy",
    "question": "Four prototypes P, Q, R and S are reviewed one at a time. Q is reviewed after P but before R, and S is reviewed after R. Which prototype must be reviewed first?",
    "options": [
      "R",
      "P",
      "Q",
      "S"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The constraints force P before Q before R before S, so P is first.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-002",
    "section": "Logical Reasoning",
    "topic": "Linear arrangement",
    "difficulty": "medium",
    "question": "Five interns J, K, L, M and N sit in a row facing north. L sits in the middle. J sits immediately left of K. N sits at the far right. M sits immediately right of L. Who sits at the far left?",
    "options": [
      "L",
      "M",
      "J",
      "K"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "L=3, M=4 and N=5. The only seats left are 1 and 2, and J must be immediately left of K, so J=1 and K=2.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-003",
    "section": "Logical Reasoning",
    "topic": "Direction sense",
    "difficulty": "easy",
    "question": "A runner goes 6 km east, turns left and goes 4 km, then turns left and goes 6 km. Where is the runner relative to the starting point?",
    "options": [
      "4 km south",
      "6 km north",
      "6 km west",
      "4 km north"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The 6 km east and 6 km west legs cancel, leaving 4 km north.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-004",
    "section": "Logical Reasoning",
    "topic": "Family relationships",
    "difficulty": "medium",
    "question": "Meera is the sister of Rohan. Rohan is the father of Dev, and Dev is the brother of Anya. How is Meera related to Anya?",
    "options": [
      "Aunt",
      "Sister",
      "Cousin",
      "Grandmother"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Rohan is Anya's father because Dev and Anya are siblings. Meera is Rohan's sister, so Meera is Anya's aunt.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-005",
    "section": "Logical Reasoning",
    "topic": "Syllogism",
    "difficulty": "medium",
    "question": "Statements: All ceramic cups are reusable. Some reusable items are fragile. No fragile item is metal. Which conclusion is definitely valid?",
    "options": [
      "No ceramic cup is metal",
      "Some ceramic cups are fragile",
      "Some reusable items are not metal",
      "All reusable items are ceramic cups"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Some reusable items are fragile, and no fragile item is metal; therefore those reusable items are not metal.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-006",
    "section": "Logical Reasoning",
    "topic": "Set reasoning",
    "difficulty": "medium",
    "question": "Every member of Group X is in Group Y. No member of Group Y is in Group Z. Which statement must be true?",
    "options": [
      "All Z are X",
      "No X are Z",
      "Some X are Z",
      "Some Y are X"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Since X is a subset of Y and Y is disjoint from Z, X must also be disjoint from Z.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-007",
    "section": "Logical Reasoning",
    "topic": "Conditional logic",
    "difficulty": "medium",
    "question": "A studio rule says: if a design is approved, then its cost sheet is signed. Design D has an unsigned cost sheet. What follows logically?",
    "options": [
      "Nothing can be inferred",
      "D was rejected for cost reasons",
      "D is not approved",
      "D is approved"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By contraposition, if the cost sheet is not signed, the design was not approved.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-008",
    "section": "Logical Reasoning",
    "topic": "Scheduling",
    "difficulty": "medium",
    "question": "A meeting must be held on one of Monday, Tuesday, Wednesday or Thursday. It cannot be Monday. If it is Wednesday, Priya cannot attend. Priya must attend. Thursday is already booked. On which day must the meeting be held?",
    "options": [
      "Thursday",
      "Tuesday",
      "Wednesday",
      "Monday"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Monday is excluded, Wednesday would exclude required attendee Priya, and Thursday is booked. Tuesday remains.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-009",
    "section": "Logical Reasoning",
    "topic": "Coding rule",
    "difficulty": "medium",
    "question": "A label code is made by writing the last letter of a word first, then the first letter, then the remaining letters in their original order. Under this rule, how is MANGO coded?",
    "options": [
      "OGMAN",
      "OMANG",
      "OMAGN",
      "OAMNG"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "MANGO → last O, first M, then remaining A N G: OMANG.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-010",
    "section": "Logical Reasoning",
    "topic": "Number pattern",
    "difficulty": "medium",
    "question": "Which number should come next in the sequence 12, 19, 31, 50, 78, 117, ...?",
    "options": [
      "169",
      "165",
      "171",
      "175"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The successive increases are 7, 12, 19, 28 and 39. These are 2²+3, 3²+3, 4²+3, 5²+3 and 6²+3. The next increase is 7²+3=52, so the next term is 117+52=169.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-011",
    "section": "Logical Reasoning",
    "topic": "Pattern reasoning",
    "difficulty": "easy",
    "question": "A sequence of symbols repeats every four positions as circle, triangle, square, star. Which symbol is at position 18?",
    "options": [
      "Square",
      "Circle",
      "Star",
      "Triangle"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "18 leaves remainder 2 when divided by 4, so it matches the second symbol, triangle.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-012",
    "section": "Logical Reasoning",
    "topic": "Process logic",
    "difficulty": "medium",
    "question": "A machine transforms an input number by first adding 3, then doubling the result, then subtracting 4. If the output is 20, what was the input?",
    "options": [
      "9",
      "8",
      "7",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Let input x. 2(x+3)−4=20, so 2x+2=20, giving x=9.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-013",
    "section": "Logical Reasoning",
    "topic": "Ranking",
    "difficulty": "medium",
    "question": "Mira is 12th from the left in a row. She moves 7 places to the right and is then 15th from the right. How many people are in the row?",
    "options": [
      "34",
      "32",
      "35",
      "33"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "After moving 7 places right, Mira is 19th from the left. Total people = 19+15−1 = 33.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-014",
    "section": "Logical Reasoning",
    "topic": "Assumption",
    "difficulty": "medium",
    "question": "Claim: “The company should extend customer-support hours because many users contact support after 6 p.m.” Which assumption is required?",
    "options": [
      "All users prefer phone support",
      "Some after-6 p.m. demand is currently unmet",
      "Extended hours always increase profit",
      "Support staff never work remotely"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The recommendation depends on the idea that after-6 p.m. demand exists and is not adequately served now.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-015",
    "section": "Logical Reasoning",
    "topic": "Conclusion",
    "difficulty": "medium",
    "question": "A survey found that every respondent who used the new checkout completed payment in under four minutes. Rohan used the new checkout. Which conclusion follows?",
    "options": [
      "Rohan used a credit card",
      "Rohan bought more than one item",
      "Rohan completed payment in under four minutes",
      "Rohan preferred the new checkout"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The universal survey statement applies directly to Rohan; the other details are not given.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-016",
    "section": "Logical Reasoning",
    "topic": "Cause and effect",
    "difficulty": "medium",
    "question": "After a shop moved its pickup counter closer to the entrance, average pickup time fell, while staffing and order volume stayed unchanged. Which explanation is most directly supported?",
    "options": [
      "Staff became more experienced overnight",
      "Customers bought fewer items",
      "Orders became simpler",
      "The shorter walking route reduced pickup time"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "With staffing and volume unchanged, the location change directly reduces the customer movement needed for pickup.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-017",
    "section": "Logical Reasoning",
    "topic": "Data sufficiency",
    "difficulty": "hard",
    "question": "What is the value of x? Statement I: x + y = 18. Statement II: x − y = 4. Choose the correct sufficiency judgment.",
    "options": [
      "Both together are sufficient, neither alone is sufficient",
      "II alone is sufficient",
      "Even both together are insufficient",
      "I alone is sufficient"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Each statement alone has infinitely many pairs. Together, adding gives 2x=22, so x=11.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-018",
    "section": "Logical Reasoning",
    "topic": "Distribution puzzle",
    "difficulty": "medium",
    "question": "Three awards—Gold, Silver and Bronze—go to P, Q and R, one each. P does not get Gold. Q does not get Bronze. R gets Silver. Who gets Gold?",
    "options": [
      "Cannot be determined",
      "R",
      "P",
      "Q"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "R=Silver. Remaining Gold/Bronze go to P/Q. P cannot Gold, so P=Bronze and Q=Gold.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-019",
    "section": "Logical Reasoning",
    "topic": "Matching",
    "difficulty": "hard",
    "question": "Three consultants A, B and C each lead one project: retail, logistics or media. A does not lead retail. B does not lead media. The logistics project is led by C. Which project does A lead?",
    "options": [
      "Retail",
      "Media",
      "Cannot be determined",
      "Logistics"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "C=logistics. A cannot retail, so among remaining retail/media A must be media. B then retail.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-020",
    "section": "Logical Reasoning",
    "topic": "Route logic",
    "difficulty": "medium",
    "question": "A courier can travel from Hub H to Store S only through either junction J or junction K. The road H–J is closed and there is no connection between J and K. Which route is still possible?",
    "options": [
      "H–K–S only",
      "H–J–S only",
      "Neither route",
      "Both routes"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The J route is blocked at H–J, while the K route remains available.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-021",
    "section": "Logical Reasoning",
    "topic": "Calendar reasoning",
    "difficulty": "medium",
    "question": "A workshop is held every third day starting on a Monday. On which day of the week is the fourth workshop held?",
    "options": [
      "Tuesday",
      "Monday",
      "Wednesday",
      "Sunday"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Adding three days each time gives Monday, Thursday, Sunday, Wednesday. The fourth workshop is Wednesday.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-022",
    "section": "Logical Reasoning",
    "topic": "Truth and lie",
    "difficulty": "hard",
    "question": "Exactly one of two statements is true. A says, “B is lying.” B says, “A and I are both telling the truth.” Who is telling the truth?",
    "options": [
      "Both",
      "B only",
      "Neither",
      "A only"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "If B were true, then both would be true, contradicting “exactly one.” So B is false. Then A’s statement that B is lying is true.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-023",
    "section": "Logical Reasoning",
    "topic": "Selection constraints",
    "difficulty": "hard",
    "question": "A committee of three must be chosen from A, B, C, D and E. If A is chosen, B must also be chosen. C and D cannot both be chosen. E must be chosen. Which committee is valid?",
    "options": [
      "A, C, E",
      "B, C, E",
      "A, D, E",
      "C, D, E"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A requires B, so the first two are invalid. C and D cannot both appear, so option 4 is invalid. B,C,E is valid.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-024",
    "section": "Logical Reasoning",
    "topic": "Grouping",
    "difficulty": "medium",
    "question": "Six files P, Q, R, S, T and U are split into two groups of three. P and Q must be together. R and S must be in different groups. If P, Q and R are in Group 1, which set is Group 2?",
    "options": [
      "P, T, U",
      "R, S, T",
      "Q, S, U",
      "S, T, U"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Group 1 is P,Q,R. The remaining files S,T,U form Group 2, and R/S are separated as required.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-025",
    "section": "Logical Reasoning",
    "topic": "Sequence constraints",
    "difficulty": "medium",
    "question": "Five presentations P, Q, R, S and T are scheduled once each. Q is immediately after P. T is before P. R is after S. S is not first. Which order is possible?",
    "options": [
      "T, S, R, P, Q",
      "S, R, T, Q, P",
      "T, P, Q, R, S",
      "P, Q, T, S, R"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Option 1 satisfies all constraints: Q is immediately after P, T is before P, R is after S, and S is not first. Each other option violates at least one stated constraint.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-026",
    "section": "Logical Reasoning",
    "topic": "Logical consistency",
    "difficulty": "medium",
    "question": "Which pair of statements can both be true?",
    "options": [
      "Some A are B; No A are B",
      "All A are B; No A are B, with at least one A",
      "All A are B; Some A are not B",
      "Some A are B; Some A are not B"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "It is logically possible for some A to be B and other A not to be B. The other pairs contradict each other.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-027",
    "section": "Logical Reasoning",
    "topic": "Inference",
    "difficulty": "medium",
    "question": "All premium orders receive tracking. Some tracked orders arrive the same day. Which statement is guaranteed?",
    "options": [
      "Premium orders are tracked",
      "No non-premium order is tracked",
      "Some premium orders arrive the same day",
      "Every tracked order is premium"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The first statement directly guarantees that every premium order is tracked. No further overlap is forced.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-028",
    "section": "Logical Reasoning",
    "topic": "Circular arrangement",
    "difficulty": "hard",
    "question": "Four people A, B, C and D sit around a circular table facing the centre. A sits opposite C. B sits immediately clockwise from A. Who sits immediately clockwise from C?",
    "options": [
      "C",
      "D",
      "B",
      "A"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Place A, then B clockwise. C is opposite A. The remaining seat is D, which lies immediately clockwise from C.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-029",
    "section": "Logical Reasoning",
    "topic": "Network reasoning",
    "difficulty": "medium",
    "question": "A network has direct links A–B, B–C, C–D and A–D. Which node can be reached from B in exactly one direct link?",
    "options": [
      "A and C",
      "C and D",
      "D only",
      "A and D"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "B has direct links only to A and C.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-030",
    "section": "Logical Reasoning",
    "topic": "Counting arrangements",
    "difficulty": "medium",
    "question": "A four-digit access code uses each of the digits 2, 4, 6 and 8 exactly once. How many such codes begin with 2?",
    "options": [
      "12",
      "6",
      "4",
      "8"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Fix 2 first. The remaining 3 digits can be arranged in 3! = 6 ways.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-031",
    "section": "Logical Reasoning",
    "topic": "Transformation rule",
    "difficulty": "medium",
    "question": "A device maps 4→19, 6→39 and 8→67. Which rule fits all three mappings?",
    "options": [
      "2n²−13",
      "n²+2n−5",
      "n²+3",
      "n²+n−1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "4²+3=19, 6²+3=39 and 8²+3=67.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-032",
    "section": "Logical Reasoning",
    "topic": "Symbol operations",
    "difficulty": "medium",
    "question": "Suppose △ means “add 5” and ○ means “multiply by 2”. Starting from 7, what is the result of applying △ and then ○?",
    "options": [
      "19",
      "24",
      "28",
      "26"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "7+5=12, then 12×2=24.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-033",
    "section": "Logical Reasoning",
    "topic": "Team assignment",
    "difficulty": "hard",
    "question": "Four teams A, B, C and D present in four slots. A is before B. C is immediately after A. D is not last. Which order is possible?",
    "options": [
      "D, A, B, C",
      "C, A, D, B",
      "A, B, C, D",
      "A, C, D, B"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A,C must be consecutive in that order; A must also precede B. Option 1 satisfies this and D is not last.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-034",
    "section": "Logical Reasoning",
    "topic": "Relative ages",
    "difficulty": "medium",
    "question": "K is older than L. M is younger than K but older than L. N is older than K. Who is the second oldest?",
    "options": [
      "K",
      "L",
      "M",
      "N"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Order is N > K > M > L, so K is second oldest.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-035",
    "section": "Logical Reasoning",
    "topic": "Clock reasoning",
    "difficulty": "medium",
    "question": "At exactly 3:00, what is the smaller angle between the hour and minute hands of a clock?",
    "options": [
      "60°",
      "150°",
      "90°",
      "120°"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At 3:00 the minute hand is at 12 and the hour hand at 3, a right angle of 90°.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-036",
    "section": "Logical Reasoning",
    "topic": "Binary choices",
    "difficulty": "medium",
    "question": "A customer chooses exactly one plan, Basic or Plus, and exactly one billing cycle, Monthly or Annual. How many distinct combinations are possible?",
    "options": [
      "2",
      "6",
      "4",
      "3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are 2 plan choices × 2 billing choices = 4 combinations.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-037",
    "section": "Logical Reasoning",
    "topic": "Table deduction",
    "difficulty": "medium",
    "question": "Three stores have different closing times: 8 p.m., 9 p.m. and 10 p.m. Store R closes later than Store S. Store T closes at 9 p.m. Store R does not close at 9 p.m. When does Store S close?",
    "options": [
      "8 p.m.",
      "9 p.m.",
      "10 p.m.",
      "Cannot be determined"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "T=9. R is later than S and not 9, so R=10. Therefore S=8.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-038",
    "section": "Logical Reasoning",
    "topic": "Arrangement",
    "difficulty": "hard",
    "question": "Six books A, B, C, D, E and F are placed on a shelf. A is immediately before B. C is at the far left. F is at the far right. D is somewhere after B. Which pair could occupy positions 2 and 3 respectively?",
    "options": [
      "D, E",
      "E, D",
      "B, A",
      "A, B"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "C is position 1 and F position 6. A,B can occupy 2,3 while leaving D after B. The reversed pair violates A immediately before B; D,E at 2,3 can still maybe possible but then A,B must 4,5 and D before? D only after B would fail because D=2. E,D at 2,3 gives D before possible A,B 4,5, so D not after B. Thus only A,B.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-039",
    "section": "Logical Reasoning",
    "topic": "Critical reasoning - strengthen",
    "difficulty": "hard",
    "question": "A company believes offering a free trial will increase paid subscriptions. Which finding most strengthens the belief?",
    "options": [
      "Some users cancel after a year",
      "The service has three pricing tiers",
      "In a pilot, users randomly offered a trial subscribed at a higher rate than similar users not offered one",
      "Most current subscribers use the service weekly"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A randomized pilot directly links the trial offer to a higher subscription rate, strongly supporting the causal claim.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "ipmat-rohtak-2026-lr-040",
    "section": "Logical Reasoning",
    "topic": "Critical reasoning - weaken",
    "difficulty": "hard",
    "question": "A manager argues that a new meeting format caused productivity to rise because productivity was higher in the month after the format was introduced. Which fact most weakens the argument?",
    "options": [
      "The new meetings are shorter",
      "The format uses a fixed agenda",
      "A major seasonal sales surge occurred in the same month",
      "Most employees attended the meetings"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A seasonal surge is an alternative cause for the productivity increase, weakening attribution to the meeting format.",
    "source": {
      "kind": "original",
      "reference": "IIM Rohtak official IPM Admission 2026-31 — IPM Aptitude Test pattern",
      "url": "https://www.iimrohtak.ac.in/ipm-admission.php",
      "checkedOn": "2026-08-31"
    }
  }
];
