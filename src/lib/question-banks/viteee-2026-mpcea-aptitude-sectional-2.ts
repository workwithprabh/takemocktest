import type { Question } from '../questions';

export const VITEEE_2026_MPCEA_APTITUDE_SECTIONAL_2: Question[] = [
  {
    "id": "viteee-2026-mpcea-aptitude-sectional-02-001",
    "section": "Aptitude",
    "topic": "Data Interpretation",
    "difficulty": "easy",
    "question": "A store sold 80 units in week 1, 100 in week 2, and 120 in week 3. What is the average weekly sales?",
    "options": [
      "100",
      "90",
      "110",
      "120"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Total sales = 80 + 100 + 120 = 300. Average = 300/3 = 100 units per week.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-aptitude-sectional-02-002",
    "section": "Aptitude",
    "topic": "Data Interpretation",
    "difficulty": "medium",
    "question": "Machine A produced 150 units in March and 180 in April; Machine B produced 200 in March and 220 in April. By what percentage did the combined output grow from March to April?",
    "options": [
      "about 14.3%",
      "12.5%",
      "20%",
      "10%"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "March total = 350, April total = 400. The increase is 50, so the percentage increase is 50/350 x 100, approximately 14.3%.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-aptitude-sectional-02-003",
    "section": "Aptitude",
    "topic": "Data Sufficiency",
    "difficulty": "easy",
    "question": "Question: Is x positive? Statement 1: x^2 = 9. Statement 2: x^3 = 27. Which is sufficient?",
    "options": [
      "Statement 2 alone is sufficient, but Statement 1 alone is not",
      "Statement 1 alone is sufficient, but Statement 2 alone is not",
      "Either statement alone is sufficient",
      "Neither statement is sufficient"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "x^2=9 gives x=3 or x=-3 (insufficient), but x^3=27 has the unique real solution x=3, so Statement 2 alone determines that x is positive.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-aptitude-sectional-02-004",
    "section": "Aptitude",
    "topic": "Data Sufficiency",
    "difficulty": "medium",
    "question": "Question: What is the value of y? Statement 1: 2y + 3 = 11. Statement 2: y^2 = 16. Which is sufficient?",
    "options": [
      "Statement 2 alone is sufficient, but Statement 1 alone is not",
      "Both statements together are needed",
      "Statement 1 alone is sufficient, but Statement 2 alone is not",
      "Neither statement is sufficient"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Statement 1 gives the unique value y=4. Statement 2 allows y=4 or y=-4, so it alone is not sufficient.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-aptitude-sectional-02-005",
    "section": "Aptitude",
    "topic": "Syllogism",
    "difficulty": "easy",
    "question": "Statements: All doctors are educated. Some educated people are wealthy. Which conclusion definitely follows?",
    "options": [
      "All doctors are wealthy",
      "No definite conclusion about doctors being wealthy follows",
      "Some doctors are wealthy",
      "No doctor is wealthy"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The two premises do not guarantee that any doctor is among the wealthy educated people, so no definite conclusion follows about doctors and wealth.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-aptitude-sectional-02-006",
    "section": "Aptitude",
    "topic": "Syllogism",
    "difficulty": "hard",
    "question": "Statements: All squares are rectangles. No rectangle is a triangle. Some quadrilaterals are squares. Which conclusions follow? I. No square is a triangle. II. Some quadrilaterals are not triangles.",
    "options": [
      "Only I follows",
      "Only II follows",
      "Both I and II follow",
      "Neither follows"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Since all squares are rectangles and no rectangle is a triangle, no square is a triangle (I). Because some quadrilaterals are squares, and squares are never triangles, some quadrilaterals are not triangles (II).",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-aptitude-sectional-02-007",
    "section": "Aptitude",
    "topic": "Number Series, Coding and Decoding",
    "difficulty": "easy",
    "question": "Find the next term: 2, 6, 12, 20, 30, ...",
    "options": [
      "40",
      "42",
      "36",
      "44"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The differences between terms are 4, 6, 8, 10, increasing by 2, so the next difference is 12, giving 30+12=42.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-aptitude-sectional-02-008",
    "section": "Aptitude",
    "topic": "Number Series, Coding and Decoding",
    "difficulty": "medium",
    "question": "In a code, each letter is shifted forward by one position in the alphabet, so 'TABLE' is written as 'UBCMF'. How is 'CHAIR' coded using the same rule?",
    "options": [
      "DIBJT",
      "DIBJS",
      "CIBJS",
      "DIAJS"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Each letter is shifted forward by one position: C->D, H->I, A->B, I->J, R->S, giving DIBJS.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-aptitude-sectional-02-009",
    "section": "Aptitude",
    "topic": "Clocks, Calendars and Directions",
    "difficulty": "easy",
    "question": "A person walks 5 km north, then 5 km east, then 5 km south. How far is the person from the starting point?",
    "options": [
      "10 km",
      "15 km",
      "0 km",
      "5 km"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The northward and southward legs cancel out, leaving only the 5 km eastward displacement.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "viteee-2026-mpcea-aptitude-sectional-02-010",
    "section": "Aptitude",
    "topic": "Clocks, Calendars and Directions",
    "difficulty": "medium",
    "question": "If today is Wednesday, what day of the week will it be after 17 days?",
    "options": [
      "Friday",
      "Sunday",
      "Thursday",
      "Saturday"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "17 days is 2 weeks (14 days) plus 3 extra days. Three days after Wednesday is Saturday.",
    "source": {
      "kind": "original",
      "reference": "Original question written to the official VITEEE 2026 Aptitude syllabus and approved MPCEA pattern",
      "url": "https://vit.ac.in/sites/default/files/VITEEE-2026/English_and_Aptitude_VITEEE2026.pdf",
      "checkedOn": "2026-08-24"
    }
  }
];
