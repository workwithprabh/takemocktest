import type { Question } from '../questions';

// Frozen Main Brain handoff content, integrated mechanically on 8 September
// 2026. AIIMS NORCET-10 Stage I, 100 questions across the five sequentially locked blocks.
// Records are copied field-for-field from the approved package; stems,
// options, answer keys, explanations, sections, difficulty, marking and
// source metadata are not rewritten here.

export const AIIMS_NORCET_10_STAGE_1_FULL_MOCK_1: Question[] = [
  {
    "id": "aiims-norcet-10-stage-1-001",
    "section": "Block A",
    "topic": "Quantitative aptitude",
    "difficulty": "medium",
    "question": "A supply cart has 3 trays with 18 packs each and 4 trays with 12 packs each. If 25 packs are issued before the cart reaches the ward, how many packs remain?",
    "options": [
      "81",
      "73",
      "77",
      "89"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "The cart starts with 3×18 + 4×12 = 54 + 48 = 102 packs. After 25 are issued, 102−25 = 77 remain.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-002",
    "section": "Block A",
    "topic": "Logical reasoning",
    "difficulty": "medium",
    "question": "Five badges J, K, L, M and N are arranged in a row. L is immediately to the right of K, M is at the right end, and J is not adjacent to M. Which arrangement satisfies all three rules?",
    "options": [
      "K, J, L, N, M",
      "N, J, K, L, M",
      "J, K, L, N, M",
      "K, L, N, J, M"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "J-K-L-N-M has K immediately followed by L, places M at the right end, and keeps J away from M. Each other choice violates at least one rule.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-003",
    "section": "Block A",
    "topic": "Percentages",
    "difficulty": "medium",
    "question": "A unit uses 250 pairs of gloves in a baseline week. Use falls by 20% the next week and then rises by 10% from that reduced level. The final use is what percentage of the baseline?",
    "options": [
      "88%",
      "92%",
      "90%",
      "96%"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "After a 20% fall, use is 250×0.8 = 200. A 10% rise gives 220. Since 220/250 = 0.88, the final level is 88% of baseline.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-004",
    "section": "Block A",
    "topic": "Number reasoning",
    "difficulty": "hard",
    "question": "A four-digit locker code uses distinct digits p, q, r and s. It satisfies p+q=7, q+r=10, r+s=9, q is even, and p>s. What is p+r+s?",
    "options": [
      "12",
      "13",
      "14",
      "15"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "From p+q=7, q+r=10 and r+s=9, we get p=7-q, r=10-q and s=q-1. The valid even digit choices for q are checked against digit range, distinctness and p>s. q=2 gives (p,q,r,s)=(5,2,8,1), which satisfies all conditions. q=4 makes p=s, q=6 violates p>s, and the other even choices make a digit invalid. Hence p+r+s=5+8+1=14.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-005",
    "section": "Block A",
    "topic": "Fundamentals of nursing",
    "difficulty": "easy",
    "question": "Before administering an oral medication, which action most directly verifies the right patient?",
    "options": [
      "Use at least two approved patient identifiers",
      "Use room location as the sole identifier",
      "Ask another patient to confirm the name",
      "Identify the patient by bed number only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Medication safety standards use at least two identifiers, not bed or room number alone.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-006",
    "section": "Block A",
    "topic": "Fundamentals of nursing",
    "difficulty": "medium",
    "question": "A bedbound patient is at high risk for pressure injury. Which nursing action is most appropriate?",
    "options": [
      "Regular repositioning plus skin inspection and pressure redistribution",
      "Massage persistently reddened bony prominences",
      "Use donut rings under every bony prominence",
      "Keep the skin continuously moist"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Pressure-injury prevention uses repositioning, skin assessment and pressure redistribution; massage of reddened tissue can worsen damage.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-007",
    "section": "Block A",
    "topic": "Fundamentals of nursing",
    "difficulty": "medium",
    "question": "Which position most reduces aspiration risk during enteral feeding in a patient without contraindication?",
    "options": [
      "Trendelenburg",
      "Flat supine",
      "Prone with head down",
      "Head of bed elevated about 30–45 degrees"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Head elevation during and after feeding helps reduce regurgitation and aspiration risk.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-008",
    "section": "Block A",
    "topic": "Fundamentals of nursing",
    "difficulty": "hard",
    "question": "A patient has a new peripheral IV with swelling, cool skin and slowed infusion but no redness. What is most likely?",
    "options": [
      "Phlebitis",
      "Catheter-related bloodstream infection",
      "Arterial thrombosis",
      "Infiltration"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Cool swelling and poor flow suggest nonvesicant fluid leaking into tissue, i.e. infiltration.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-009",
    "section": "Block A",
    "topic": "Fundamentals of nursing",
    "difficulty": "medium",
    "question": "Which sequence best reflects safe hand hygiene when hands are visibly soiled?",
    "options": [
      "Wipe hands on a dry towel only",
      "Wash with soap and water",
      "Wear gloves without cleaning hands",
      "Use alcohol rub only"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "When hands are visibly soiled, washing with soap and water is preferred over alcohol rub alone.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-010",
    "section": "Block A",
    "topic": "Fundamentals of nursing",
    "difficulty": "medium",
    "question": "A patient reports pain 8/10 but is smiling and conversing. What should the nurse do?",
    "options": [
      "Delay assessment until vital signs change",
      "Assume the pain score is false",
      "Accept the patient’s report and assess further",
      "Record pain as zero because behavior is calm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Pain is subjective; the patient’s report should be accepted and evaluated in context.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-011",
    "section": "Block A",
    "topic": "Fundamentals of nursing",
    "difficulty": "hard",
    "question": "Which finding best indicates effective use of an incentive spirometer after abdominal surgery?",
    "options": [
      "Breath-holding before inhalation only",
      "Continuous coughing into the mouthpiece",
      "Sustained slow inspiration with progressive volume goal",
      "Rapid shallow exhalations into the device"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Incentive spirometry encourages slow deep inspiration and brief inspiratory hold to promote lung expansion.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-012",
    "section": "Block A",
    "topic": "Fundamentals of nursing",
    "difficulty": "easy",
    "question": "When measuring an adult radial pulse manually, which feature should be documented in addition to rate?",
    "options": [
      "Body mass index only",
      "Pupil size only",
      "Serum sodium",
      "Rhythm and strength"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Pulse assessment commonly includes rate, rhythm and amplitude/strength.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-013",
    "section": "Block A",
    "topic": "Medical-surgical nursing",
    "difficulty": "medium",
    "question": "A patient with heart failure has increasing dyspnea and bilateral basal crackles. Which assessment trend most directly reflects fluid retention?",
    "options": [
      "Reduced hair growth",
      "Daily weight increase",
      "Stable pupil size",
      "Improved hearing"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Daily weight is a sensitive practical indicator of short-term fluid balance in heart failure.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-014",
    "section": "Block A",
    "topic": "Medical-surgical nursing",
    "difficulty": "hard",
    "question": "A patient with COPD receives excess oxygen and becomes drowsier with rising PaCO2. Which principle is most relevant?",
    "options": [
      "All COPD patients depend solely on hypoxic drive",
      "Oxygen should be titrated to a prescribed target while ventilation is reassessed",
      "Oxygen must always be stopped completely",
      "Pulse oximetry alone proves ventilation is adequate"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "In susceptible COPD patients, excessive oxygen can worsen hypercapnia; oxygen is titrated while ventilation and gases are reassessed.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-015",
    "section": "Block A",
    "topic": "Medical-surgical nursing",
    "difficulty": "medium",
    "question": "Which ECG-related electrolyte disturbance is classically associated with tall peaked T waves?",
    "options": [
      "Hypokalemia",
      "Hypercalcemia",
      "Hyperkalemia",
      "Hyponatremia"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Hyperkalemia can produce tall peaked T waves and progress to conduction abnormalities.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-016",
    "section": "Block A",
    "topic": "Medical-surgical nursing",
    "difficulty": "medium",
    "question": "A patient with hypoglycemia is conscious and able to swallow. What is an appropriate initial action?",
    "options": [
      "Withhold all carbohydrate",
      "Start fluid restriction",
      "Give long-acting insulin",
      "Give a measured fast-acting carbohydrate source"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Conscious patients who can swallow are treated promptly with fast-acting carbohydrate, followed by recheck and longer-acting food if needed.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-017",
    "section": "Block A",
    "topic": "Medical-surgical nursing",
    "difficulty": "hard",
    "question": "A patient with diabetic ketoacidosis begins insulin therapy. Which electrolyte requires particularly close monitoring because it can fall rapidly?",
    "options": [
      "Calcium only",
      "Chloride cannot change",
      "Magnesium never changes",
      "Potassium"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Insulin shifts potassium into cells; total body potassium is depleted in DKA, so serum potassium can fall during treatment.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-018",
    "section": "Block A",
    "topic": "Medical-surgical nursing",
    "difficulty": "medium",
    "question": "Which finding suggests left-sided heart failure more than isolated right-sided failure?",
    "options": [
      "Pulmonary crackles and orthopnea",
      "Raised jugular venous pressure only",
      "Dependent ankle edema only",
      "Hepatomegaly only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Left-sided failure commonly causes pulmonary congestion, crackles and orthopnea.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-019",
    "section": "Block A",
    "topic": "Medical-surgical nursing",
    "difficulty": "hard",
    "question": "A patient with suspected acute stroke has symptom onset 45 minutes ago. What information is especially time-critical to establish?",
    "options": [
      "Remote childhood weight",
      "Hair color",
      "Last known well time",
      "Favorite food"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Eligibility for time-sensitive reperfusion pathways depends strongly on the last-known-well time.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-020",
    "section": "Block A",
    "topic": "Medical-surgical nursing",
    "difficulty": "medium",
    "question": "Which sign is expected in dehydration?",
    "options": [
      "Bounding pulse with generalized edema",
      "Orthostatic tachycardia with dry mucous membranes",
      "Bradycardia with moist mucosa as a defining pattern",
      "Rapid weight gain"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Volume depletion commonly causes dry mucosa, tachycardia and orthostatic changes.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-021",
    "section": "Block B",
    "topic": "Data interpretation",
    "difficulty": "medium",
    "question": "Four shift counts are 18, 23, 17 and 26. A fifth count makes the five-shift mean exactly 22, and the sixth count is 4 higher than the fifth. What is the sum of the fifth and sixth counts?",
    "options": [
      "52",
      "54",
      "56",
      "58"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "The first four total 84. A five-shift mean of 22 requires total 110, so the fifth count is 26. The sixth is 30, and 26+30=56.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-022",
    "section": "Block B",
    "topic": "Ratios",
    "difficulty": "easy",
    "question": "A tray contains blue and white labels in the ratio 2:3, with 45 labels in all. Six white labels are removed. What is the new blue:white ratio?",
    "options": [
      "2:3",
      "3:4",
      "4:5",
      "6:7"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Initially there are 18 blue and 27 white labels. Removing 6 white leaves 21 white, so the ratio is 18:21 = 6:7.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-023",
    "section": "Block B",
    "topic": "Logic",
    "difficulty": "hard",
    "question": "Every urgent file is red-tagged. No red-tagged file is archived. Some archived files are signed. Which statement must be true?",
    "options": [
      "No signed file is red-tagged.",
      "Every signed file is archived.",
      "Some signed file is not urgent.",
      "Some urgent file is signed."
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "At least one signed file is archived. Archived files cannot be red-tagged, while every urgent file must be red-tagged. Therefore that signed archived file cannot be urgent.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-024",
    "section": "Block B",
    "topic": "Arithmetic",
    "difficulty": "medium",
    "question": "A scanner processes 14 forms per minute for 6 minutes, pauses, and then processes 18 forms per minute for 5 minutes. How many forms are processed in the two active periods?",
    "options": [
      "168",
      "174",
      "164",
      "180"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "The first period processes 14×6=84 forms and the second 18×5=90 forms. Total =174.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-025",
    "section": "Block B",
    "topic": "Medical-surgical nursing",
    "difficulty": "hard",
    "question": "A chest tube for pneumothorax shows continuous bubbling in the water-seal chamber. What should the nurse suspect?",
    "options": [
      "Tube obstruction by definition",
      "An air leak somewhere in the system or from the patient",
      "Excessive pleural fluid only",
      "Normal finding in every breath indefinitely"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Continuous bubbling in the water seal suggests an ongoing air leak and warrants systematic assessment.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-026",
    "section": "Block B",
    "topic": "Medical-surgical nursing",
    "difficulty": "medium",
    "question": "Which position often helps a patient with acute pulmonary edema breathe more comfortably if blood pressure permits?",
    "options": [
      "Prone head-down",
      "Trendelenburg",
      "Upright sitting position",
      "Flat supine"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Upright positioning reduces venous return and improves diaphragmatic mechanics, often easing dyspnea.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-027",
    "section": "Block B",
    "topic": "Medical-surgical nursing",
    "difficulty": "medium",
    "question": "A patient with cirrhosis becomes confused and has asterixis. Which complication is most likely?",
    "options": [
      "Nephrotic syndrome",
      "Acute glaucoma",
      "Hepatic encephalopathy",
      "Otitis media"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Confusion with asterixis in advanced liver disease is characteristic of hepatic encephalopathy.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-028",
    "section": "Block B",
    "topic": "Medical-surgical nursing",
    "difficulty": "hard",
    "question": "A patient after thyroidectomy develops perioral tingling and carpopedal spasm. Which complication should be suspected?",
    "options": [
      "Hypermagnesemia",
      "Hypernatremia",
      "Hyperkalemia",
      "Hypocalcemia from parathyroid dysfunction"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Perioral tingling and tetany after thyroid surgery suggest acute hypocalcemia, often from transient parathyroid dysfunction.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-029",
    "section": "Block B",
    "topic": "Medical-surgical nursing",
    "difficulty": "medium",
    "question": "Which finding is most concerning for compartment syndrome in a limb cast?",
    "options": [
      "Comfort improved by elevation",
      "Severe pain out of proportion, especially with passive stretch",
      "Mild itching under the cast",
      "Warm toes with brisk capillary refill"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Pain out of proportion and pain with passive stretch are early warning signs of compartment syndrome.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-030",
    "section": "Block B",
    "topic": "Medical-surgical nursing",
    "difficulty": "hard",
    "question": "A patient with acute kidney injury has oliguria and potassium 6.5 mmol/L with ECG changes. Which issue has highest immediate priority?",
    "options": [
      "Long-term dietary education first",
      "Hyperkalemia because of arrhythmia risk",
      "Scheduling an eye examination",
      "Routine weight counseling"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Severe hyperkalemia with ECG changes is immediately life-threatening and requires urgent treatment.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-031",
    "section": "Block B",
    "topic": "Medical-surgical nursing",
    "difficulty": "medium",
    "question": "Which instruction is appropriate for a patient with a new arteriovenous fistula for hemodialysis?",
    "options": [
      "Report a palpable thrill as abnormal",
      "Allow routine IV insertion into the fistula arm",
      "Avoid blood pressure measurement and venipuncture in that arm",
      "Sleep with tight compression over the fistula"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Protect the fistula arm from compression and needle trauma; a palpable thrill is expected and should be monitored.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-032",
    "section": "Block B",
    "topic": "Medical-surgical nursing",
    "difficulty": "easy",
    "question": "Which laboratory value most directly reflects hemoglobin concentration?",
    "options": [
      "Serum amylase",
      "Troponin only",
      "TSH only",
      "Complete blood count hemoglobin value"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Hemoglobin is directly reported on the complete blood count.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-033",
    "section": "Block B",
    "topic": "Maternal health nursing",
    "difficulty": "medium",
    "question": "A postpartum uterus is boggy with increased vaginal bleeding. What is the first nursing action while summoning help and following protocol?",
    "options": [
      "Apply ice to the forehead only",
      "Place the patient prone and wait",
      "Massage the uterine fundus and assess tone",
      "Encourage ambulation immediately"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "A boggy uterus suggests uterine atony; fundal massage helps stimulate contraction while hemorrhage management proceeds.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-034",
    "section": "Block B",
    "topic": "Maternal health nursing",
    "difficulty": "hard",
    "question": "A pregnant patient at 34 weeks has severe hypertension, headache and visual symptoms. What complication is most concerning?",
    "options": [
      "Hyperemesis gravidarum",
      "Severe preeclampsia with risk of eclampsia",
      "Uncomplicated Braxton Hicks contractions",
      "Normal physiologic pregnancy"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Severe hypertension with neurologic symptoms after 20 weeks is concerning for severe preeclampsia and seizure risk.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-035",
    "section": "Block B",
    "topic": "Maternal health nursing",
    "difficulty": "medium",
    "question": "Which finding supports true labor rather than false labor?",
    "options": [
      "Progressive cervical dilation with regular contractions",
      "Contractions that disappear with rest and no cervical change",
      "No change in contraction pattern over time",
      "Irregular discomfort only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "True labor is characterized by regular contractions associated with progressive cervical effacement and dilation.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-036",
    "section": "Block B",
    "topic": "Maternal health nursing",
    "difficulty": "hard",
    "question": "During oxytocin infusion, contractions become excessively frequent and fetal heart rate shows recurrent late decelerations. What is an immediate nursing response?",
    "options": [
      "Place the patient supine and leave unattended",
      "Stop oxytocin and initiate intrauterine resuscitative measures per protocol",
      "Encourage pushing regardless of dilation",
      "Increase the oxytocin rate"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Uterine tachysystole with fetal compromise requires stopping oxytocin and prompt resuscitative actions and escalation.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-037",
    "section": "Block B",
    "topic": "Maternal health nursing",
    "difficulty": "medium",
    "question": "What does a positive fetal movement count generally reassure about?",
    "options": [
      "Exact fetal weight",
      "Placental location",
      "Current fetal activity, while not replacing other indicated assessment",
      "Guaranteed absence of all fetal compromise"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Maternal perception of fetal movement is a useful surveillance tool but does not replace indicated clinical evaluation.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-038",
    "section": "Block B",
    "topic": "Maternal health nursing",
    "difficulty": "medium",
    "question": "Which postpartum finding requires urgent assessment for hemorrhage?",
    "options": [
      "Transient fatigue after delivery",
      "Small amount of lochia rubra",
      "Mild uterine cramping during breastfeeding",
      "Rapidly saturating perineal pads with tachycardia"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Heavy ongoing bleeding with tachycardia suggests significant postpartum hemorrhage.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-039",
    "section": "Block B",
    "topic": "Maternal health nursing",
    "difficulty": "hard",
    "question": "A woman receiving magnesium sulfate for preeclampsia develops absent patellar reflexes and respiratory depression. What is suspected?",
    "options": [
      "Oxytocin toxicity",
      "Magnesium toxicity",
      "Iron deficiency",
      "Normal treatment effect requiring no action"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Loss of deep tendon reflexes and respiratory depression are important signs of magnesium toxicity.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-040",
    "section": "Block B",
    "topic": "Maternal health nursing",
    "difficulty": "easy",
    "question": "Which hormone is primarily responsible for milk ejection during breastfeeding?",
    "options": [
      "Aldosterone",
      "Oxytocin",
      "Insulin",
      "Thyroxine"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Oxytocin causes contraction of myoepithelial cells and milk let-down; prolactin primarily supports milk production.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-041",
    "section": "Block C",
    "topic": "Probability",
    "difficulty": "medium",
    "question": "A box contains 4 blue, 3 amber and 2 green tokens. One token is drawn, observed to be non-amber, and not replaced. What is the probability that the next token is amber?",
    "options": [
      "3/8",
      "3/7",
      "1/2",
      "1/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "After a non-amber token is removed, 8 tokens remain and all 3 amber tokens are still present. The probability is therefore 3/8.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-042",
    "section": "Block C",
    "topic": "Algebra",
    "difficulty": "medium",
    "question": "Two identical carts plus three identical bins weigh 78 kg. One cart plus the same three bins weigh 48 kg. What is the combined weight of one cart and one bin?",
    "options": [
      "36 kg",
      "38 kg",
      "34 kg",
      "40 kg"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Subtracting the equations gives one cart =30 kg. Then three bins weigh 18 kg, so one bin weighs 6 kg. Together they weigh 36 kg.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-043",
    "section": "Block C",
    "topic": "Sequences",
    "difficulty": "hard",
    "question": "A sequence starts at 3. The operations then alternate: multiply by 2 and add 1; add 4; multiply by 2 and add 1; add 4; and so on. What is the sixth term?",
    "options": [
      "57",
      "51",
      "53",
      "55"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "The terms are 3, 7, 11, 23, 27, 55.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-044",
    "section": "Block C",
    "topic": "Spatial reasoning",
    "difficulty": "medium",
    "question": "A transparent badge has three marks around its centre: a circle directly above the centre, a triangle directly to the right, and a square directly below. The badge is rotated 90° clockwise. Which mark is now directly to the left of the centre?",
    "options": [
      "Square",
      "None of the three",
      "Triangle",
      "Circle"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "A 90° clockwise rotation moves the original bottom position to the left position. The square started below the centre, so it moves directly left of the centre.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-045",
    "section": "Block C",
    "topic": "Child health nursing",
    "difficulty": "medium",
    "question": "A child with acute diarrhea is alert but thirsty with mild dehydration. What is preferred initial rehydration when oral intake is feasible?",
    "options": [
      "Plain water only in large amounts",
      "Oral rehydration solution",
      "Undiluted fruit juice only",
      "Routine IV fluid regardless of severity"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "ORS replaces water and electrolytes effectively and is preferred for mild-to-moderate dehydration when oral therapy is feasible.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-046",
    "section": "Block C",
    "topic": "Child health nursing",
    "difficulty": "hard",
    "question": "A child with suspected epiglottitis is sitting forward, drooling and distressed. Which action should be avoided outside a controlled airway setting?",
    "options": [
      "Providing oxygen as tolerated",
      "Calling for experienced airway support",
      "Keeping the child calm",
      "Forcing throat examination with a tongue depressor"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Agitating the child or forcing oropharyngeal examination can precipitate complete airway obstruction in epiglottitis.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-047",
    "section": "Block C",
    "topic": "Child health nursing",
    "difficulty": "medium",
    "question": "Which sign is a useful indicator of increased work of breathing in an infant?",
    "options": [
      "Slow hair growth",
      "Warm hands alone",
      "Nasal flaring and intercostal retractions",
      "Mild hiccups"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Nasal flaring and chest retractions indicate increased respiratory effort.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-048",
    "section": "Block C",
    "topic": "Child health nursing",
    "difficulty": "hard",
    "question": "A child with nephrotic syndrome has generalized edema. Which urinary finding is expected?",
    "options": [
      "Heavy proteinuria",
      "Myoglobinuria only",
      "Absent urinary protein",
      "Marked glycosuria as defining feature"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Nephrotic syndrome is characterized by significant proteinuria, hypoalbuminemia and edema.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-049",
    "section": "Block C",
    "topic": "Child health nursing",
    "difficulty": "medium",
    "question": "A child with fever has a brief generalized seizure lasting 2 minutes and then rapidly recovers. What is the immediate nursing priority during the seizure?",
    "options": [
      "Protect airway and prevent injury without restraining the child",
      "Place an object in the mouth",
      "Hold the child down firmly",
      "Give food during the seizure"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Seizure first aid focuses on airway safety, positioning and injury prevention; nothing should be forced into the mouth.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-050",
    "section": "Block C",
    "topic": "Child health nursing",
    "difficulty": "medium",
    "question": "Which finding suggests dehydration in an infant?",
    "options": [
      "Rapid weight gain",
      "Reduced wet diapers and dry mucous membranes",
      "Bounding peripheral pulses only",
      "Increased urine output with moist mucosa"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Reduced urine output and dry mucous membranes are common signs of dehydration.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-051",
    "section": "Block C",
    "topic": "Child health nursing",
    "difficulty": "hard",
    "question": "A child with tetralogy of Fallot develops a hypercyanotic spell. Which positioning can help increase systemic vascular resistance?",
    "options": [
      "Flat supine with legs extended",
      "Trendelenburg only",
      "Knee-chest position",
      "Prone with head down"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Knee-chest positioning increases systemic vascular resistance and can reduce right-to-left shunting during a tet spell.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-052",
    "section": "Block C",
    "topic": "Child health nursing",
    "difficulty": "easy",
    "question": "Which anthropometric measurement is especially important for monitoring infant head growth?",
    "options": [
      "Foot length only",
      "Head circumference",
      "Chest circumference only after age 18",
      "Arm span only"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Serial head circumference tracks skull and brain growth during infancy.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-053",
    "section": "Block C",
    "topic": "Community health nursing",
    "difficulty": "medium",
    "question": "Which measure is an example of primary prevention?",
    "options": [
      "Treating established tuberculosis",
      "Screening mammography",
      "Rehabilitation after stroke",
      "Immunization before disease occurs"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Primary prevention prevents disease before it occurs, as with immunization.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-054",
    "section": "Block C",
    "topic": "Community health nursing",
    "difficulty": "hard",
    "question": "In an outbreak, attack rate is best described as what?",
    "options": [
      "Proportion of an at-risk exposed population that becomes ill during the outbreak",
      "Prevalence at birth only",
      "Number of hospital beds per district",
      "Annual deaths divided by total population only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Attack rate is an incidence proportion used for outbreaks among a defined at-risk group.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-055",
    "section": "Block C",
    "topic": "Community health nursing",
    "difficulty": "medium",
    "question": "Which action most directly interrupts fecal-oral transmission in a community?",
    "options": [
      "Routine bed rest",
      "Reducing daylight exposure",
      "Increasing ambient noise",
      "Safe water, sanitation and hand hygiene"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Fecal-oral spread is reduced by sanitation, safe water, hygiene and safe food practices.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-056",
    "section": "Block C",
    "topic": "Community health nursing",
    "difficulty": "medium",
    "question": "What is the main purpose of contact tracing in a communicable disease outbreak?",
    "options": [
      "Identify exposed people for assessment, testing or preventive action",
      "Determine hospital electricity use",
      "Measure population height",
      "Replace laboratory diagnosis"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Contact tracing identifies people who may have been exposed so they can receive timely public-health actions.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-057",
    "section": "Block C",
    "topic": "Community health nursing",
    "difficulty": "hard",
    "question": "A screening test with very high sensitivity is particularly useful when the priority is to minimize what?",
    "options": [
      "Disease prevalence",
      "Sample size",
      "False positives only",
      "False negatives"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "High sensitivity means most true cases test positive, so false negatives are minimized.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-058",
    "section": "Block C",
    "topic": "Community health nursing",
    "difficulty": "medium",
    "question": "Which denominator is used in crude birth rate?",
    "options": [
      "Number of pregnant women only",
      "Number of live births only",
      "Mid-year population",
      "Number of hospital deliveries only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Crude birth rate is live births in a year divided by the mid-year population, commonly per 1000.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-059",
    "section": "Block C",
    "topic": "Community health nursing",
    "difficulty": "hard",
    "question": "Why can prevalence rise even if incidence is unchanged?",
    "options": [
      "All cases must recover faster",
      "Population size must become zero",
      "Sensitivity must fall",
      "Average disease duration can increase"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Prevalence depends on both incidence and duration; longer survival/duration can raise prevalence without higher incidence.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-060",
    "section": "Block C",
    "topic": "Community health nursing",
    "difficulty": "easy",
    "question": "Which household practice reduces mosquito breeding around the home?",
    "options": [
      "Remove standing water from containers",
      "Store uncovered water outdoors",
      "Keep discarded tires filled with rainwater",
      "Allow gutters to remain blocked"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Many mosquitoes breed in stagnant water; eliminating such sites reduces breeding.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-061",
    "section": "Block D",
    "topic": "Quantitative reasoning",
    "difficulty": "medium",
    "question": "Three storage racks contain 8, 12 and 10 instrument trays. An audit finds that 1/4 of the trays on the first rack, 1/3 on the second rack and 1/5 on the third rack have incorrect labels. A corrective pass fixes exactly half of the incorrectly labelled trays on each rack. How many trays remain incorrectly labelled?",
    "options": [
      "4",
      "5",
      "6",
      "8"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "The three racks initially have 2, 4 and 2 incorrectly labelled trays, respectively. Fixing half on each rack leaves 1, 2 and 1 incorrect trays. The total remaining is 1+2+1=4.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-062",
    "section": "Block D",
    "topic": "Language",
    "difficulty": "medium",
    "question": "Which sentence makes the comparison most precise?",
    "options": [
      "Compared with last month, the checklist is shortest.",
      "The revised checklist is shorter than last month.",
      "The revised checklist is more shorter than the old one.",
      "The revised checklist is shorter than the checklist used last month."
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "The sentence compares like with like: one checklist with another checklist, using the standard comparative form 'shorter than'.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-063",
    "section": "Block D",
    "topic": "Combinatorics",
    "difficulty": "hard",
    "question": "A four-symbol wristband code uses four distinct symbols from A, B, C, D and E. It must start with A or E, and B may not be the last symbol. How many codes are possible?",
    "options": [
      "32",
      "30",
      "40",
      "36"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "For a fixed allowed first symbol there are 4P3=24 completions. Of these, 6 have B last, leaving 18. There are two choices for the first symbol, so 2×18=36.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-064",
    "section": "Block D",
    "topic": "Fractions",
    "difficulty": "easy",
    "question": "Of 84 files in a queue, 3/7 are reviewed in the morning. How many files remain for later review?",
    "options": [
      "48",
      "36",
      "54",
      "42"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Reviewed files =84×3/7=36. Remaining files =84−36=48.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-065",
    "section": "Block D",
    "topic": "Mental health nursing",
    "difficulty": "medium",
    "question": "A patient says, “The television is sending me secret instructions.” This is best classified as what?",
    "options": [
      "Compulsion",
      "Delusion of reference",
      "Flight of ideas",
      "Echolalia"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "A delusion of reference is a false belief that neutral events or media have special personal meaning.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-066",
    "section": "Block D",
    "topic": "Mental health nursing",
    "difficulty": "hard",
    "question": "A severely depressed patient suddenly gives away possessions and says family would be better off without them. What is the priority?",
    "options": [
      "Immediate suicide-risk assessment and safety measures",
      "Encourage the patient to stay alone",
      "Assume improvement because possessions are organized",
      "Delay assessment until discharge"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Giving away possessions and hopeless statements can indicate imminent suicide risk and require immediate assessment and protection.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-067",
    "section": "Block D",
    "topic": "Mental health nursing",
    "difficulty": "medium",
    "question": "Which communication is most therapeutic for an anxious patient?",
    "options": [
      "Argue that anxiety is irrational",
      "Ask several complex questions at once",
      "Change the subject whenever fear is mentioned",
      "Use short, clear statements and allow time to respond"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Anxiety reduces information processing; concise calm communication and time to respond are helpful.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-068",
    "section": "Block D",
    "topic": "Mental health nursing",
    "difficulty": "medium",
    "question": "A patient with mania is constantly moving and will not sit for meals. Which nutrition approach is practical?",
    "options": [
      "Insist on a three-hour seated meal",
      "Offer high-calorie finger foods and fluids that can be taken while moving",
      "Provide only low-calorie clear liquids",
      "Restrict all fluids"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Portable nutrient-dense foods and frequent fluids support intake when sustained sitting is difficult during mania.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-069",
    "section": "Block D",
    "topic": "Mental health nursing",
    "difficulty": "hard",
    "question": "A patient taking lithium develops coarse tremor, ataxia and vomiting. What should be suspected?",
    "options": [
      "Serotonin deficiency",
      "Expected harmless therapeutic effects",
      "Lithium toxicity",
      "Opioid withdrawal"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Neurologic worsening and gastrointestinal symptoms can signal lithium toxicity and require prompt evaluation and level assessment.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-070",
    "section": "Block D",
    "topic": "Mental health nursing",
    "difficulty": "medium",
    "question": "Which symptom is a negative symptom of schizophrenia?",
    "options": [
      "Avolition",
      "Disorganized speech",
      "Delusion of persecution",
      "Auditory hallucination"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Avolition, reduced motivation and goal-directed activity, is a negative symptom; hallucinations and delusions are positive symptoms.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-071",
    "section": "Block D",
    "topic": "Mental health nursing",
    "difficulty": "hard",
    "question": "A patient on an antipsychotic develops high fever, lead-pipe rigidity and autonomic instability. What syndrome is most concerning?",
    "options": [
      "Neuroleptic malignant syndrome",
      "Panic attack",
      "Lithium withdrawal",
      "Simple akathisia"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Fever, severe rigidity and autonomic instability after dopamine antagonist exposure suggest neuroleptic malignant syndrome.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-072",
    "section": "Block D",
    "topic": "Mental health nursing",
    "difficulty": "easy",
    "question": "Which intervention is appropriate when a patient reports hearing threatening voices but is not imminently dangerous?",
    "options": [
      "Demand that the patient stop hearing them",
      "Mock the experience",
      "Agree that the voices are definitely external",
      "Acknowledge the distress without validating the hallucination as real"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Therapeutic communication validates the patient’s distress while presenting reality without reinforcing the hallucination.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-073",
    "section": "Block D",
    "topic": "Nursing pharmacology",
    "difficulty": "medium",
    "question": "A patient on warfarin has unexpectedly high INR and bleeding. Which vitamin is the specific antidotal cofactor used for reversal?",
    "options": [
      "Vitamin C",
      "Vitamin D",
      "Vitamin B12",
      "Vitamin K"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Vitamin K restores synthesis of vitamin K-dependent clotting factors and is used in warfarin reversal according to severity and protocol.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-074",
    "section": "Block D",
    "topic": "Nursing pharmacology",
    "difficulty": "hard",
    "question": "Which adverse effect is particularly important when starting an ACE inhibitor?",
    "options": [
      "Hyperkalemia",
      "Permanent tachycardia",
      "Hypokalemia as the usual defining effect",
      "Severe hypoglycemia in all patients"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "ACE inhibitors reduce aldosterone and can cause hyperkalemia, especially with renal impairment or potassium-sparing therapy.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-075",
    "section": "Block D",
    "topic": "Nursing pharmacology",
    "difficulty": "medium",
    "question": "Before giving digoxin, which assessment is especially relevant?",
    "options": [
      "Visual acuity only with no cardiac assessment",
      "Apical pulse and signs of toxicity",
      "Body height only",
      "Hair color"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Digoxin affects cardiac conduction; pulse assessment and monitoring for toxicity are important.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-076",
    "section": "Block D",
    "topic": "Nursing pharmacology",
    "difficulty": "hard",
    "question": "A patient taking an aminoglycoside develops rising creatinine and tinnitus. Which toxicities are suggested?",
    "options": [
      "Bone-marrow failure only",
      "Hepatotoxicity and cataract only",
      "Nephrotoxicity and ototoxicity",
      "Hypoglycemia and alopecia"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Aminoglycosides can damage kidneys and the vestibulocochlear system, causing nephrotoxicity and ototoxicity.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-077",
    "section": "Block D",
    "topic": "Nursing pharmacology",
    "difficulty": "medium",
    "question": "Which insulin is commonly used intravenously for treatment of diabetic ketoacidosis?",
    "options": [
      "Insulin degludec",
      "Regular insulin",
      "NPH as continuous IV therapy",
      "Insulin glargine"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Regular insulin is used in IV infusion protocols for DKA because it can be titrated rapidly.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-078",
    "section": "Block D",
    "topic": "Nursing pharmacology",
    "difficulty": "medium",
    "question": "A patient receiving morphine becomes difficult to arouse with respiratory rate 6/min. Which medication reverses opioid effect?",
    "options": [
      "Atropine",
      "Naloxone",
      "Protamine",
      "Flumazenil"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Naloxone antagonizes opioid receptors and is used for clinically significant opioid-induced respiratory depression.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-079",
    "section": "Block D",
    "topic": "Nursing pharmacology",
    "difficulty": "hard",
    "question": "Why should a beta blocker generally not be stopped abruptly after long-term use in coronary disease?",
    "options": [
      "It produces vitamin deficiency",
      "It causes immediate insulin deficiency",
      "Rebound sympathetic activity can precipitate tachycardia or ischemia",
      "It permanently blocks renal function"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Chronic beta blockade leads to receptor adaptation; abrupt withdrawal can produce rebound adrenergic effects and ischemia.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-080",
    "section": "Block D",
    "topic": "Nursing pharmacology",
    "difficulty": "easy",
    "question": "Which route bypasses first-pass hepatic metabolism most directly?",
    "options": [
      "Oral tablet swallowed",
      "Intravenous administration",
      "Enteric-coated oral capsule",
      "Oral solution swallowed"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "IV administration enters systemic circulation directly and therefore bypasses gastrointestinal absorption and first-pass hepatic metabolism.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-081",
    "section": "Block E",
    "topic": "Calendar reasoning",
    "difficulty": "medium",
    "question": "In a 31-day month, checklist A is done every 5 days starting on day 3, and checklist B every 7 days starting on day 4. On how many distinct dates does at least one checklist occur?",
    "options": [
      "8",
      "10",
      "11",
      "9"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "A occurs on 3,8,13,18,23,28 (6 dates). B occurs on 4,11,18,25 (4 dates). Day 18 is shared, so there are 6+4−1=9 distinct dates.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-082",
    "section": "Block E",
    "topic": "Set reasoning",
    "difficulty": "hard",
    "question": "Among 70 staff, 34 know skill A, 30 know B and 28 know C. The pairwise overlaps are 12 for A∩B, 10 for A∩C and 9 for B∩C, and 4 know all three. How many know none of the three skills?",
    "options": [
      "6",
      "4",
      "7",
      "5"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "By inclusion-exclusion, the union is 34+30+28−12−10−9+4=65. Therefore 70−65=5 know none.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-083",
    "section": "Block E",
    "topic": "Unit conversion",
    "difficulty": "medium",
    "question": "A conveyor moves at 1.8 metres per second for 2 minutes 30 seconds. How far does it move, in metres?",
    "options": [
      "270",
      "240",
      "288",
      "252"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "2 minutes 30 seconds is 150 seconds. Distance =1.8×150=270 metres.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-084",
    "section": "Block E",
    "topic": "Logical ordering",
    "difficulty": "hard",
    "question": "Five tasks A, B, C, D and E must be completed once each. C is immediately before A, D is before C, B is after A, and E is after B. Which complete order is forced?",
    "options": [
      "C, D, A, B, E",
      "D, A, C, B, E",
      "D, C, B, A, E",
      "D, C, A, B, E"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "C must be immediately before A; D must precede C; B must follow A; and E must follow B. With five tasks these constraints force D-C-A-B-E.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-085",
    "section": "Block E",
    "topic": "Infection control",
    "difficulty": "medium",
    "question": "Which transmission-based precaution is required for pulmonary tuberculosis in addition to standard precautions?",
    "options": [
      "Droplet precautions only",
      "Contact precautions only",
      "Airborne precautions",
      "No isolation precautions"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Pulmonary TB spreads via airborne droplet nuclei; airborne precautions and appropriate respiratory protection are required.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-086",
    "section": "Block E",
    "topic": "Infection control",
    "difficulty": "hard",
    "question": "A sterile field is prepared for a procedure. The nurse reaches across it with an unsterile sleeve. How should the field be regarded?",
    "options": [
      "Contaminated",
      "Still sterile because only air was crossed",
      "Sterile after waiting one minute",
      "Sterile if the sleeve looked clean"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Contact or crossing by nonsterile material contaminates a sterile field.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-087",
    "section": "Block E",
    "topic": "Infection control",
    "difficulty": "medium",
    "question": "Which action is central to preventing catheter-associated urinary tract infection?",
    "options": [
      "Irrigate routinely without indication",
      "Avoid unnecessary catheters and remove them as soon as possible",
      "Disconnect the drainage system daily",
      "Keep the drainage bag above bladder level"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Minimizing catheter use and duration is a key preventive strategy; closed drainage and dependent bag position are also important.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-088",
    "section": "Block E",
    "topic": "Infection control",
    "difficulty": "medium",
    "question": "After a needlestick from a used hollow-bore needle, what is the appropriate first response?",
    "options": [
      "Apply caustic bleach to the skin",
      "Squeeze the wound aggressively for 30 minutes",
      "Wash the site and report immediately for exposure assessment",
      "Hide the injury if the source seems healthy"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Prompt washing and occupational exposure reporting allow risk assessment and timely post-exposure management.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-089",
    "section": "Block E",
    "topic": "Infection control",
    "difficulty": "hard",
    "question": "Which finding most suggests central-line associated bloodstream infection rather than simple local irritation?",
    "options": [
      "Mild tape itch only",
      "Stable temperature and negative cultures",
      "Fever with positive blood cultures and no better source in a patient with a central line",
      "Dry intact dressing"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Systemic infection evidence with an indwelling central line and no alternate source raises concern for CLABSI.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-090",
    "section": "Block E",
    "topic": "Infection control",
    "difficulty": "medium",
    "question": "What is the purpose of using a surgical mask for droplet precautions?",
    "options": [
      "Reduce exposure to larger respiratory droplets at close range",
      "Replace hand hygiene",
      "Sterilize inhaled air",
      "Filter all airborne nuclei exactly like a fit-tested respirator"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Droplet precautions use a medical mask to reduce mucous-membrane exposure to larger respiratory droplets; airborne pathogens require respirators and special rooms.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-091",
    "section": "Block E",
    "topic": "Infection control",
    "difficulty": "hard",
    "question": "Which cleaning principle is most appropriate for visible blood contamination on a surface?",
    "options": [
      "Ignore small spills",
      "Dry dust only",
      "Use appropriate PPE and a disinfectant effective for bloodborne pathogens after removing organic material",
      "Use plain water only and leave residue"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Blood spills require safe cleanup with PPE and an appropriate disinfectant according to infection-control policy.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-092",
    "section": "Block E",
    "topic": "Infection control",
    "difficulty": "easy",
    "question": "Which item belongs in a puncture-resistant sharps container immediately after use?",
    "options": [
      "Uncontaminated tissue",
      "Clean gauze wrapper",
      "Paper medication label",
      "Used injection needle"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Used needles and other sharps must be disposed of promptly in puncture-resistant sharps containers.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-093",
    "section": "Block E",
    "topic": "Critical care nursing",
    "difficulty": "medium",
    "question": "A ventilated patient has a sudden high-pressure alarm and unilateral absent breath sounds after central-line insertion. Which complication should be considered urgently?",
    "options": [
      "Pneumothorax",
      "Otitis externa",
      "Simple constipation",
      "Hypoglycemia"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Sudden increased airway pressure with unilateral absent breath sounds after a line procedure raises concern for pneumothorax.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-094",
    "section": "Block E",
    "topic": "Critical care nursing",
    "difficulty": "hard",
    "question": "A septic patient remains hypotensive after adequate initial fluid resuscitation. Which vasopressor is commonly first-line to support mean arterial pressure?",
    "options": [
      "Norepinephrine",
      "Nitroglycerin",
      "Furosemide",
      "Dobutamine as the default sole first-line vasopressor"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Norepinephrine is commonly used as the first-line vasopressor in septic shock after appropriate fluid resuscitation.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-095",
    "section": "Block E",
    "topic": "Critical care nursing",
    "difficulty": "medium",
    "question": "Which bedside change most strongly suggests worsening tissue perfusion in shock?",
    "options": [
      "Improving mental status and urine output",
      "Normal capillary refill alone",
      "Rising lactate with cool mottled extremities and reduced urine output",
      "Warm dry skin with stable lactate"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "A rising lactate together with oliguria and peripheral hypoperfusion suggests inadequate tissue perfusion.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-096",
    "section": "Block E",
    "topic": "Critical care nursing",
    "difficulty": "hard",
    "question": "A patient on a ventilator becomes restless and the oxygen saturation falls. What should the nurse assess first?",
    "options": [
      "Whether discharge paperwork is complete",
      "Airway, breathing and ventilator connection",
      "Long-term rehabilitation goals",
      "The next meal choice"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Acute deterioration in a ventilated patient requires immediate airway and breathing assessment, including tube patency and circuit connection.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-097",
    "section": "Block E",
    "topic": "Critical care nursing",
    "difficulty": "medium",
    "question": "Which intervention helps reduce ventilator-associated pneumonia risk?",
    "options": [
      "Keeping the patient flat unless eating",
      "Instilling saline before every suction pass without indication",
      "Routine circuit disconnection every hour",
      "Head-of-bed elevation and regular oral care as part of a prevention bundle"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Prevention bundles commonly include head elevation, oral care and minimizing unnecessary ventilation-related risk factors.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-098",
    "section": "Block E",
    "topic": "Critical care nursing",
    "difficulty": "hard",
    "question": "A patient with an arterial line has a damped waveform and difficulty aspirating blood. What should be checked first?",
    "options": [
      "Ignore the waveform if the monitor is powered on",
      "Tubing for kinks, clots, stopcock position and pressure-bag function",
      "Give oral fluids immediately",
      "Remove the patient identification band"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "A damped arterial waveform commonly reflects mechanical problems in the monitoring system and should be systematically checked.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-099",
    "section": "Block E",
    "topic": "Critical care nursing",
    "difficulty": "medium",
    "question": "Which sign is compatible with delirium rather than a stable chronic dementia pattern?",
    "options": [
      "Acute fluctuating attention and cognition over hours",
      "Isolated chronic hearing loss",
      "Stable lifelong personality trait",
      "Years-long slowly progressive memory decline only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Delirium is characterized by acute onset and fluctuating disturbance of attention and cognition.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "aiims-norcet-10-stage-1-100",
    "section": "Block E",
    "topic": "Critical care nursing",
    "difficulty": "easy",
    "question": "Which nursing measurement is a simple indicator of renal perfusion trend in a critically ill adult?",
    "options": [
      "Pupil color",
      "Hourly urine output",
      "Voice pitch",
      "Nail length"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.3333333333333333,
    "explanation": "Urine output is an accessible trend marker of renal perfusion and overall hemodynamic status, although it is not perfectly specific.",
    "source": {
      "kind": "original",
      "reference": "NORCET-10 Notice No.17/2026",
      "url": "https://vmmc-sjh.mohfw.gov.in/notice-dated-24022026-nursing-officer-recruitment-common-eligibility-test-norcet-10",
      "checkedOn": "2026-09-07"
    }
  },
];
