import type { Question } from '../questions';

export const ATIT_2026_LOGICAL_REASONING_1: Question[] = [
  {
    "id": "atit-2026-lr-001",
    "section": "Logical Reasoning",
    "topic": "Number series",
    "difficulty": "easy",
    "question": "A monitoring sequence records 5, 11, 23, 47, \u2026 . If the same rule continues, what is the next value?",
    "options": [
      "95",
      "94",
      "71",
      "96"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Each term is twice the previous term plus 1: 5\u219211\u219223\u219247, so the next is 2\u00b747+1=95.",
    "source": {
      "kind": "original",
      "reference": "ATIT 2026 official B.Tech test pattern and current IcfaiTech syllabus",
      "url": "https://www.ifheindia.org/icfaitech-school-hyderabad/icfaitech/ugprograms/btech",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "atit-2026-lr-002",
    "section": "Logical Reasoning",
    "topic": "Number series",
    "difficulty": "medium",
    "question": "A sequence is 2, 6, 15, 31, 56, \u2026 . What comes next?",
    "options": [
      "101",
      "92",
      "81",
      "87"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Successive differences are 4,9,16,25, which are 2\u00b2,3\u00b2,4\u00b2,5\u00b2. The next difference is 6\u00b2=36, so 56+36=92.",
    "source": {
      "kind": "original",
      "reference": "ATIT 2026 official B.Tech test pattern and current IcfaiTech syllabus",
      "url": "https://www.ifheindia.org/icfaitech-school-hyderabad/icfaitech/ugprograms/btech",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "atit-2026-lr-003",
    "section": "Logical Reasoning",
    "topic": "Alphabet series",
    "difficulty": "medium",
    "question": "Consider the letter positions B, E, J, Q, \u2026 . Which letter comes next?",
    "options": [
      "Y",
      "X",
      "Z",
      "A"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Positions are 2,5,10,17 with increments 3,5,7. The next increment is 9, giving position 26, which is Z.",
    "source": {
      "kind": "original",
      "reference": "ATIT 2026 official B.Tech test pattern and current IcfaiTech syllabus",
      "url": "https://www.ifheindia.org/icfaitech-school-hyderabad/icfaitech/ugprograms/btech",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "atit-2026-lr-004",
    "section": "Logical Reasoning",
    "topic": "Coding-decoding",
    "difficulty": "medium",
    "question": "A code changes the 1st, 2nd, 3rd and 4th letters of a four-letter word by +1, +2, \u22121 and \u22122 alphabet positions respectively, wrapping around if needed. Under this rule, how is MATH coded?",
    "options": [
      "OCSG",
      "NDTD",
      "NBTF",
      "NCSF"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "M\u2192N (+1), A\u2192C (+2), T\u2192S (\u22121), H\u2192F (\u22122), giving NCSF.",
    "source": {
      "kind": "original",
      "reference": "ATIT 2026 official B.Tech test pattern and current IcfaiTech syllabus",
      "url": "https://www.ifheindia.org/icfaitech-school-hyderabad/icfaitech/ugprograms/btech",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "atit-2026-lr-005",
    "section": "Logical Reasoning",
    "topic": "Syllogism",
    "difficulty": "medium",
    "question": "All sensors are devices. Some devices are portable. No portable item is submerged. Which conclusion must follow?",
    "options": [
      "Some devices are not submerged.",
      "All devices are portable.",
      "Some sensors are portable.",
      "No sensor is submerged."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The devices that are portable cannot be submerged, so at least some devices are not submerged. Nothing forces sensors to be portable or non-submerged.",
    "source": {
      "kind": "original",
      "reference": "ATIT 2026 official B.Tech test pattern and current IcfaiTech syllabus",
      "url": "https://www.ifheindia.org/icfaitech-school-hyderabad/icfaitech/ugprograms/btech",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "atit-2026-lr-006",
    "section": "Logical Reasoning",
    "topic": "Direction sense",
    "difficulty": "easy",
    "question": "A technician walks 12 m north, then 5 m east, then 12 m south. How far and in which direction is the technician from the starting point?",
    "options": [
      "17 m east",
      "5 m east",
      "5 m west",
      "12 m east"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The north and south movements cancel. The only net displacement is 5 m east.",
    "source": {
      "kind": "original",
      "reference": "ATIT 2026 official B.Tech test pattern and current IcfaiTech syllabus",
      "url": "https://www.ifheindia.org/icfaitech-school-hyderabad/icfaitech/ugprograms/btech",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "atit-2026-lr-007",
    "section": "Logical Reasoning",
    "topic": "Blood relations",
    "difficulty": "medium",
    "question": "Anita is the sister of Bharat. Bharat is the father of Charu. Dev is Anita\u2019s only son. How is Dev related to Charu?",
    "options": [
      "Nephew",
      "Brother",
      "Cousin",
      "Uncle"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Anita and Bharat are siblings. Their children Dev and Charu are therefore first cousins.",
    "source": {
      "kind": "original",
      "reference": "ATIT 2026 official B.Tech test pattern and current IcfaiTech syllabus",
      "url": "https://www.ifheindia.org/icfaitech-school-hyderabad/icfaitech/ugprograms/btech",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "atit-2026-lr-008",
    "section": "Logical Reasoning",
    "topic": "Ranking",
    "difficulty": "easy",
    "question": "In a class ranking, Neel is 18th from the top and 27th from the bottom. How many students are in the class?",
    "options": [
      "46",
      "45",
      "43",
      "44"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Total=18+27\u22121=44 because Neel is counted in both positions.",
    "source": {
      "kind": "original",
      "reference": "ATIT 2026 official B.Tech test pattern and current IcfaiTech syllabus",
      "url": "https://www.ifheindia.org/icfaitech-school-hyderabad/icfaitech/ugprograms/btech",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "atit-2026-lr-009",
    "section": "Logical Reasoning",
    "topic": "Linear arrangement",
    "difficulty": "hard",
    "question": "Five files A, B, C, D and E are placed left to right. C is immediately right of A. B is somewhere left of A. E is at the far right. D is not at the far left. Which file must be at the far left?",
    "options": [
      "B",
      "A",
      "C",
      "D"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "E occupies position 5. Since C is immediately right of A, A cannot be position 1 if B must be left of A. D is explicitly not position 1. Therefore B must be at the far left.",
    "source": {
      "kind": "original",
      "reference": "ATIT 2026 official B.Tech test pattern and current IcfaiTech syllabus",
      "url": "https://www.ifheindia.org/icfaitech-school-hyderabad/icfaitech/ugprograms/btech",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "atit-2026-lr-010",
    "section": "Logical Reasoning",
    "topic": "Scheduling puzzle",
    "difficulty": "medium",
    "question": "Four workshops P, Q, R and S are scheduled Monday through Thursday, one per day. Q is immediately after P, R is after P, and S is before P. Which workshop is on Wednesday?",
    "options": [
      "S",
      "Q",
      "P",
      "R"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "S must be Monday, P Tuesday, Q Wednesday, and R Thursday. Hence Q is on Wednesday.",
    "source": {
      "kind": "original",
      "reference": "ATIT 2026 official B.Tech test pattern and current IcfaiTech syllabus",
      "url": "https://www.ifheindia.org/icfaitech-school-hyderabad/icfaitech/ugprograms/btech",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "atit-2026-lr-011",
    "section": "Logical Reasoning",
    "topic": "Set reasoning",
    "difficulty": "medium",
    "question": "Among 40 trainees, 22 know Python, 18 know Java, and 8 know both. How many know neither language?",
    "options": [
      "12",
      "6",
      "8",
      "10"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At least one language=22+18\u22128=32. Therefore neither=40\u221232=8.",
    "source": {
      "kind": "original",
      "reference": "ATIT 2026 official B.Tech test pattern and current IcfaiTech syllabus",
      "url": "https://www.ifheindia.org/icfaitech-school-hyderabad/icfaitech/ugprograms/btech",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "atit-2026-lr-012",
    "section": "Logical Reasoning",
    "topic": "Conditional reasoning",
    "difficulty": "medium",
    "question": "If every completed design review implies a signed checklist, and every signed checklist implies archived documentation, what follows if the documentation is not archived?",
    "options": [
      "The checklist must have been signed.",
      "The design review was completed but the checklist was lost.",
      "Nothing can be concluded about the review.",
      "The design review was not completed."
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Review completed \u21d2 checklist signed \u21d2 documentation archived. By contraposition, not archived \u21d2 checklist not signed \u21d2 review not completed.",
    "source": {
      "kind": "original",
      "reference": "ATIT 2026 official B.Tech test pattern and current IcfaiTech syllabus",
      "url": "https://www.ifheindia.org/icfaitech-school-hyderabad/icfaitech/ugprograms/btech",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "atit-2026-lr-013",
    "section": "Logical Reasoning",
    "topic": "Data sufficiency",
    "difficulty": "medium",
    "question": "What is the value of x? Statement I: x+y=10. Statement II: x\u2212y=4.",
    "options": [
      "Both statements together are sufficient, but neither alone is sufficient.",
      "Statement II alone is sufficient.",
      "Each statement alone is sufficient.",
      "Statement I alone is sufficient."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Each statement alone contains two unknowns. Together, adding the equations gives 2x=14, so x=7.",
    "source": {
      "kind": "original",
      "reference": "ATIT 2026 official B.Tech test pattern and current IcfaiTech syllabus",
      "url": "https://www.ifheindia.org/icfaitech-school-hyderabad/icfaitech/ugprograms/btech",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "atit-2026-lr-014",
    "section": "Logical Reasoning",
    "topic": "Clock reasoning",
    "difficulty": "medium",
    "question": "What is the smaller angle between the hour and minute hands at 3:40?",
    "options": [
      "120\u00b0",
      "130\u00b0",
      "140\u00b0",
      "110\u00b0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At 3:40, the minute hand is at 240\u00b0. The hour hand is at 3\u00d730+40\u00d70.5=110\u00b0. The difference is 130\u00b0.",
    "source": {
      "kind": "original",
      "reference": "ATIT 2026 official B.Tech test pattern and current IcfaiTech syllabus",
      "url": "https://www.ifheindia.org/icfaitech-school-hyderabad/icfaitech/ugprograms/btech",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "atit-2026-lr-015",
    "section": "Logical Reasoning",
    "topic": "Calendar reasoning",
    "difficulty": "easy",
    "question": "In a non-leap year, January 1 is a Monday. What day of the week is February 1?",
    "options": [
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "January has 31 days, which shifts the weekday by 31 mod 7=3 days. Monday+3=Thursday.",
    "source": {
      "kind": "original",
      "reference": "ATIT 2026 official B.Tech test pattern and current IcfaiTech syllabus",
      "url": "https://www.ifheindia.org/icfaitech-school-hyderabad/icfaitech/ugprograms/btech",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "atit-2026-lr-016",
    "section": "Logical Reasoning",
    "topic": "Numerical pattern",
    "difficulty": "medium",
    "question": "In each row, the third number equals the square of the first number minus the second. Two rows are (5,7,18) and (8,10,54). What is the missing number in (7,9,?)?",
    "options": [
      "58",
      "32",
      "42",
      "40"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The rule is c=a\u00b2\u2212b. Thus 7\u00b2\u22129=49\u22129=40.",
    "source": {
      "kind": "original",
      "reference": "ATIT 2026 official B.Tech test pattern and current IcfaiTech syllabus",
      "url": "https://www.ifheindia.org/icfaitech-school-hyderabad/icfaitech/ugprograms/btech",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "atit-2026-lr-017",
    "section": "Logical Reasoning",
    "topic": "Statement and conclusion",
    "difficulty": "medium",
    "question": "Statement: \u201cThe company will add a second verification step for high-value transactions because several recent errors were detected only after processing.\u201d Which conclusion is most directly supported?",
    "options": [
      "The added verification is intended to catch some errors before processing is complete.",
      "All past transactions contained errors.",
      "A second verification step guarantees that no error will ever occur.",
      "Low-value transactions will no longer be verified."
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The stated reason for the extra step is that errors were detected too late, so the direct purpose is earlier detection. The absolute claims are unsupported.",
    "source": {
      "kind": "original",
      "reference": "ATIT 2026 official B.Tech test pattern and current IcfaiTech syllabus",
      "url": "https://www.ifheindia.org/icfaitech-school-hyderabad/icfaitech/ugprograms/btech",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "atit-2026-lr-018",
    "section": "Logical Reasoning",
    "topic": "Truth and lie",
    "difficulty": "medium",
    "question": "Exactly one of Arjun and Beena is telling the truth. Arjun says, \u201cBeena is lying.\u201d Beena says, \u201cArjun and I are both lying.\u201d Who is telling the truth?",
    "options": [
      "Neither Arjun nor Beena",
      "Arjun only",
      "Beena only",
      "Both Arjun and Beena"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "If Arjun is truthful, Beena is lying; Beena\u2019s claim that both lie is then false, which is consistent. If Beena were truthful, her statement would make herself a liar, impossible. So Arjun alone tells the truth.",
    "source": {
      "kind": "original",
      "reference": "ATIT 2026 official B.Tech test pattern and current IcfaiTech syllabus",
      "url": "https://www.ifheindia.org/icfaitech-school-hyderabad/icfaitech/ugprograms/btech",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "atit-2026-lr-019",
    "section": "Logical Reasoning",
    "topic": "Inequalities",
    "difficulty": "medium",
    "question": "Given A>B, B=C, and C>D, which relation must be true?",
    "options": [
      "D>A",
      "A=C",
      "A>D",
      "B<D"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "From A>B=C>D, transitivity gives A>D.",
    "source": {
      "kind": "original",
      "reference": "ATIT 2026 official B.Tech test pattern and current IcfaiTech syllabus",
      "url": "https://www.ifheindia.org/icfaitech-school-hyderabad/icfaitech/ugprograms/btech",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "atit-2026-lr-020",
    "section": "Logical Reasoning",
    "topic": "Selection logic",
    "difficulty": "medium",
    "question": "A two-person team is chosen from W, X, Y and Z. If W is chosen, X must also be chosen; Y and Z cannot be chosen together. How many valid two-person teams are possible?",
    "options": [
      "2",
      "4",
      "5",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The six pairs are WX, WY, WZ, XY, XZ, YZ. WY and WZ violate W\u21d2X, and YZ is forbidden. Valid pairs are WX, XY and XZ: three teams.",
    "source": {
      "kind": "original",
      "reference": "ATIT 2026 official B.Tech test pattern and current IcfaiTech syllabus",
      "url": "https://www.ifheindia.org/icfaitech-school-hyderabad/icfaitech/ugprograms/btech",
      "checkedOn": "2026-08-28"
    }
  }
];
