import type { Question } from '../questions';

// Frozen Main Brain handoff content, integrated mechanically on 8 September
// 2026. UCEED 2026 Part A, 57 questions across the official NAT, MSQ and MCQ sections.
// Records are copied field-for-field from the approved package; stems,
// options, answer keys, explanations, sections, difficulty, marking and
// source metadata are not rewritten here.

export const UCEED_2026_PART_A_FULL_MOCK_1: Question[] = [
  {
    "id": "uceed-2026-part-a-nat-001",
    "section": "NAT",
    "topic": "Visualization and spatial reasoning",
    "difficulty": "medium",
    "question": "A 5-by-4 rectangle of unit square tiles has all four corner tiles removed. How many unit-length boundary segments does the remaining shape have?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "18",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The original rectangle has perimeter 2(5+4)=18. Removing a corner tile deletes two outer boundary segments but exposes two new inner segments, so each corner removal leaves the total unchanged. The boundary length remains 18.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-nat-002",
    "section": "NAT",
    "topic": "Analytical and logical reasoning",
    "difficulty": "medium",
    "question": "Start with the number 5. One cycle consists of: add 2, then double, then subtract 3. Apply two complete cycles. What number results?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "23",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "First cycle: 5→7→14→11. Second cycle: 11→13→26→23.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-nat-003",
    "section": "NAT",
    "topic": "Practical and scientific knowledge",
    "difficulty": "medium",
    "question": "A 90 cm strip is cut, from one end, into pieces of lengths 8 cm, 12 cm, 8 cm, 12 cm, and so on. How many complete pieces can be cut before the remaining strip is shorter than the next required piece?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "9",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Four 8+12 pairs use 80 cm and make 8 pieces. One more 8 cm piece can be cut, leaving 2 cm, which is shorter than the next required 12 cm. Total pieces =9.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-nat-004",
    "section": "NAT",
    "topic": "Visualization and spatial reasoning",
    "difficulty": "hard",
    "question": "A solid 3×3×2 block is built from unit cubes. The top-centre cube and one top-corner cube are removed; these two removed cubes do not share a face. How many unit-cube faces are exposed to air?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "46",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The intact 3×3×2 cuboid has surface area 42. Removing the top-centre cube removes one exposed face and reveals five faces, a net gain of 4. Removing a nonadjacent top-corner cube removes three exposed faces and reveals three, net 0. Total =46.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-nat-005",
    "section": "NAT",
    "topic": "Analytical and logical reasoning",
    "difficulty": "medium",
    "question": "How many two-digit numbers have digit sum 9 and an even units digit?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "5",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The even units digits 0,2,4,6,8 give tens digits 9,7,5,3,1 respectively. All five are valid two-digit numbers.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-nat-006",
    "section": "NAT",
    "topic": "Visualization and spatial reasoning",
    "difficulty": "hard",
    "question": "In a 6×6 array of cells, a cell is marked if its row number equals its column number or if its row number plus column number equals 7. How many cells are marked?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "12",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Each condition marks one full diagonal of 6 cells. In an even 6×6 grid the two diagonals do not share a cell, so 6+6=12.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-nat-007",
    "section": "NAT",
    "topic": "Practical and scientific knowledge",
    "difficulty": "medium",
    "question": "Three 8 W lamps operate for 5 hours and two 12 W lamps operate for 3 hours. How many watt-hours of electrical energy are used in total?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "192",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The 8 W lamps use 3×8×5=120 Wh. The 12 W lamps use 2×12×3=72 Wh. Total =192 Wh.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-nat-008",
    "section": "NAT",
    "topic": "Observation and design sensitivity",
    "difficulty": "medium",
    "question": "A sign layout has 8 rows and 6 columns of equal cells. A one-cell border is removed, then four cells are removed from the remaining interior. How many cells remain?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "20",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "After removing the one-cell border, the interior is 6×4=24 cells. Removing four more leaves 20.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-nat-009",
    "section": "NAT",
    "topic": "Analytical and logical reasoning",
    "difficulty": "hard",
    "question": "A route has five travel legs taking 6, 9, 7, 8 and 10 minutes. There is a 2-minute pause after each of the first four legs, except the pause after the third leg is 4 minutes. What is the total journey time in minutes?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "50",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Travel time totals 40 minutes. Pauses total 2+2+4+2=10 minutes. Total =50.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-nat-010",
    "section": "NAT",
    "topic": "Visualization and spatial reasoning",
    "difficulty": "hard",
    "question": "In a 5×5 cell grid, mark every cell on the main diagonal or on either diagonal immediately adjacent to it. The central cell is reserved and must remain unmarked. How many cells are marked?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "12",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The main diagonal has 5 cells and the two adjacent diagonals have 4 cells each, for 13 distinct cells. Removing the central cell leaves 12.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-nat-011",
    "section": "NAT",
    "topic": "Practical and scientific knowledge",
    "difficulty": "medium",
    "question": "A drawing uses scale 1:50. A rectangular shelf measures 3.2 cm by 1.4 cm on the drawing. What is the real perimeter of the shelf in centimetres?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "460",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Real dimensions are 160 cm and 70 cm. Perimeter =2(160+70)=460 cm.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-nat-012",
    "section": "NAT",
    "topic": "Analytical and logical reasoning",
    "difficulty": "hard",
    "question": "A four-slot icon strip uses four distinct symbols chosen from S, T, A, B, C and D. Symbol S must appear and cannot be in an end slot. If T is used, it must be somewhere to the right of S. How many valid strips are possible?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "84",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "If S is in slot 2, there are 5P3=60 fillings of the other slots, but 12 place T in slot 1, leaving 48. If S is in slot 3, 24 of the 60 fillings put T in slot 1 or 2, leaving 36. Total =48+36=84.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-nat-013",
    "section": "NAT",
    "topic": "Visualization and spatial reasoning",
    "difficulty": "medium",
    "question": "A storage space measures 6 cm by 4 cm by 3 cm. Identical cubes of side 2 cm are placed with edges parallel to the box. What is the maximum number of complete cubes that fit without overlap?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "6",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Along the three dimensions, floor(6/2)=3, floor(4/2)=2 and floor(3/2)=1 cubes fit. Total =3×2×1=6.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-nat-014",
    "section": "NAT",
    "topic": "Language",
    "difficulty": "medium",
    "question": "A label contains 120 characters including 18 spaces. An editor removes one-third of the spaces and then adds 4 punctuation marks. How many characters does the revised label contain?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "118",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "One-third of 18 spaces is 6, so the count falls to 114. Adding 4 punctuation marks gives 118.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-msq-001",
    "section": "MSQ",
    "topic": "Visualization and spatial reasoning",
    "difficulty": "medium",
    "question": "A cube is viewed in orthographic projection. Which statements are necessarily true for an ideal axis-aligned front view?",
    "options": [
      "The visible square face can appear as a square.",
      "Depth is not directly represented in the 2D outline.",
      "Parallel vertical edges remain parallel in the projection.",
      "Perspective convergence must occur."
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Orthographic projection suppresses perspective convergence; depth is not directly encoded by convergence, parallel verticals remain parallel, and an aligned square face can project as a square.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-msq-002",
    "section": "MSQ",
    "topic": "Practical and scientific knowledge",
    "difficulty": "medium",
    "question": "Which changes generally reduce heat gain through a sun-exposed window?",
    "options": [
      "Replacing an external shade with clear uncoated glass while keeping the opening unchanged.",
      "Adding an external shading device that blocks direct sun before it reaches the glass.",
      "Using glazing with a lower solar-heat-gain coefficient.",
      "Painting only the interior wall behind the window black while leaving the glazing and shading unchanged."
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      1,
      2
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "External shading intercepts direct solar radiation before it reaches the glass, and lower-solar-gain glazing reduces transmitted solar heat. Removing a shade does not reduce gain, and changing only the colour of an interior wall does not prevent solar radiation from entering through the window.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-msq-003",
    "section": "MSQ",
    "topic": "Observation and design sensitivity",
    "difficulty": "hard",
    "question": "A public sign must be legible from a distance. Which choices generally improve legibility?",
    "options": [
      "A clear typeface with distinguishable letterforms.",
      "Sufficient character size for viewing distance.",
      "Very tight spacing that merges adjacent letters.",
      "Adequate contrast between text and background."
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      3
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Contrast, suitable size and distinguishable forms aid legibility; overly tight spacing reduces it.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-msq-004",
    "section": "MSQ",
    "topic": "Analytical and logical reasoning",
    "difficulty": "hard",
    "question": "For the statement “If the sensor is active, the indicator glows,” which situations are logically consistent?",
    "options": [
      "Sensor inactive and indicator does not glow.",
      "Sensor inactive and indicator glows.",
      "Sensor active and indicator glows.",
      "Sensor inactive, indicator glows, and an unrelated warning lamp is off."
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2,
      3
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The implication “if the sensor is active, the indicator glows” rules out only the case in which the sensor is active and the indicator does not glow. Every listed situation avoids that forbidden combination; the unrelated warning lamp in the fourth option does not affect the implication.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-msq-005",
    "section": "MSQ",
    "topic": "Environment and society",
    "difficulty": "medium",
    "question": "Which are examples of designing for reduced material waste?",
    "options": [
      "Standardizing component sizes to improve cutting yield.",
      "Designing parts for repair and replacement.",
      "Using modular components that can be reused.",
      "Adding decorative layers solely to make disassembly harder."
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Efficient cutting, repairability and reuse reduce waste; unnecessary layers that obstruct disassembly do not.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-msq-006",
    "section": "MSQ",
    "topic": "Visualization and spatial reasoning",
    "difficulty": "hard",
    "question": "A planar shape has exactly one vertical line of symmetry and no horizontal line of symmetry. Which statements can be true?",
    "options": [
      "There is a second, distinct vertical line of symmetry.",
      "The shape is unchanged by reflection across some horizontal line.",
      "Reflecting the shape across its vertical symmetry line reproduces the shape.",
      "The shape has no line of symmetry."
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      2
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The premise states that there is exactly one vertical line of symmetry and no horizontal line of symmetry. Therefore a second vertical symmetry line is impossible, horizontal-reflection invariance is impossible, and having no line of symmetry is impossible. Reflection across the stated vertical symmetry line must reproduce the shape, so only option index 2 can be true.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-msq-007",
    "section": "MSQ",
    "topic": "Practical and scientific knowledge",
    "difficulty": "medium",
    "question": "Which statements about a simple lever are correct?",
    "options": [
      "The fulcrum must always lie exactly midway between effort and load.",
      "Mechanical advantage is always exactly 1.",
      "A lever can trade force for movement distance.",
      "Increasing the effort arm can reduce the effort needed for a given load."
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      2,
      3
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Lever geometry can exchange force for displacement, and a longer effort arm can reduce the effort required for a fixed load. The fulcrum need not be midway, and mechanical advantage is not fixed at 1.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-msq-008",
    "section": "MSQ",
    "topic": "Language",
    "difficulty": "medium",
    "question": "Which revisions make the instruction “Turn it there after you finish it” less ambiguous?",
    "options": [
      "Name the object to be turned.",
      "Keep both pronouns but add more punctuation only.",
      "Name the destination instead of “there.”",
      "Specify what task must be finished first."
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      2,
      3
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Replacing vague references and specifying sequence reduces ambiguity; punctuation alone does not resolve unclear referents.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-msq-009",
    "section": "MSQ",
    "topic": "Creativity",
    "difficulty": "hard",
    "question": "A brief asks for a reusable package that can transform into a display stand. Which ideas directly address both requirements?",
    "options": [
      "Use snap-fit tabs that can be opened and reclosed, then lock those tabs into positions that form the stand legs.",
      "Use reversible scored folds that convert package panels into the stand without tearing them.",
      "Choose a durable sheet material that tolerates repeated folding and unfolding during package and stand use.",
      "Design locking slots that serve as package closures and later as braces for the display stand."
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      2,
      3
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Each proposal supports repeated use and also contributes directly to the transformation into a stand: reusable tabs become structural legs, reversible folds create the stand form, durable material enables repeated transformations, and dual-purpose slots act as closures and stand braces.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-msq-010",
    "section": "MSQ",
    "topic": "Observation and design sensitivity",
    "difficulty": "medium",
    "question": "Which features can help a touchscreen control remain usable for people with limited fine motor control?",
    "options": [
      "Clear feedback after activation.",
      "Larger touch targets.",
      "Critical controls placed as tiny adjacent icons.",
      "Adequate spacing between controls."
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      3
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Larger spaced targets and feedback improve usability; tiny adjacent controls increase accidental activation.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-msq-011",
    "section": "MSQ",
    "topic": "Analytical and logical reasoning",
    "difficulty": "hard",
    "question": "A process has three stages X→Y→Z. Which changes preserve the precedence that X must occur before Z?",
    "options": [
      "Move Z to the beginning while leaving X and Y after it.",
      "Repeat Y one or more times while keeping X first and Z last.",
      "Swap the positions of X and Z.",
      "Insert a new stage between X and Y while keeping the relative order X before Z."
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      1,
      3
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Repeating Y with X first and Z last preserves X before Z, as does inserting another stage between X and Y. Moving Z to the beginning or swapping X and Z puts Z before X and violates the required precedence.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-msq-012",
    "section": "MSQ",
    "topic": "Environment and society",
    "difficulty": "medium",
    "question": "Which design decisions can improve accessibility in a public entrance?",
    "options": [
      "Use handrails with graspable profiles where needed.",
      "Provide sufficient maneuvering space at doors.",
      "Rely only on color to communicate all wayfinding information.",
      "Provide a step-free route."
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1,
      3
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Step-free access, usable handrails and maneuvering space improve accessibility; color-only communication excludes users with color-vision limitations.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-msq-013",
    "section": "MSQ",
    "topic": "Practical and scientific knowledge",
    "difficulty": "hard",
    "question": "For a stable freestanding object on a horizontal surface, which changes generally increase resistance to tipping?",
    "options": [
      "Raise the centre of mass while keeping the support base unchanged.",
      "Narrow the support base while keeping the centre of mass unchanged.",
      "Shift the centre-of-mass projection closer to the expected tipping edge.",
      "Lower the centre of mass while keeping the support base unchanged."
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      3
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Lowering the centre of mass generally increases the tilt needed before its vertical projection reaches a tipping edge. Raising it, narrowing the base, or moving its projection closer to an edge generally reduces tipping resistance.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-msq-014",
    "section": "MSQ",
    "topic": "Visualization and spatial reasoning",
    "difficulty": "hard",
    "question": "A transparent sheet carries an asymmetric letterform. Which transformations can reverse its left-right orientation as seen by an observer?",
    "options": [
      "Reflecting the graphic across a vertical axis.",
      "Translating the sheet sideways without turning it.",
      "Producing a mirror image of the graphic.",
      "Viewing the sheet from the opposite side."
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      2,
      3
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Reflection, back-side viewing of a transparent graphic, and mirror imaging can reverse handedness; pure translation cannot.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-msq-015",
    "section": "MSQ",
    "topic": "Language",
    "difficulty": "medium",
    "question": "Which statements use parallel grammatical structure?",
    "options": [
      "The goals are reducing waste, to improve access, and lower cost.",
      "The device is easy to clean, easy to store, and easy to repair.",
      "The team measured width, recorded mass, and compared results.",
      "The plan includes testing prototypes, user interviews, and to revise drawings."
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      1,
      2
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The second option repeats the same adjective-complement form, and the third coordinates three past-tense verbs. The first and fourth options mix grammatical forms within their lists, so they are not parallel.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-001",
    "section": "MCQ",
    "topic": "Visualization and spatial reasoning",
    "difficulty": "medium",
    "question": "A square tile has identical triangular tabs at the top-left and bottom-right corners, each pointing toward the tile centre. The whole tile is rotated 90° clockwise. At which corners are the tabs now located?",
    "options": [
      "Top-right and bottom-left",
      "Top-left and top-right",
      "Top-left and bottom-right",
      "Bottom-left and bottom-right"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "Under a 90° clockwise rotation, the top-left corner moves to top-right and the bottom-right corner moves to bottom-left.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-002",
    "section": "MCQ",
    "topic": "Observation and design sensitivity",
    "difficulty": "medium",
    "question": "A warning label is often missed because it is visually identical to surrounding notes. Which change most directly improves visual hierarchy?",
    "options": [
      "Decrease spacing around the warning",
      "Reduce all text to the same size",
      "Increase contrast and give the warning a distinct placement",
      "Add more unrelated decorative elements"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "Contrast and distinct placement create salience and hierarchy.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-003",
    "section": "MCQ",
    "topic": "Practical and scientific knowledge",
    "difficulty": "medium",
    "question": "Which material property is most directly relevant when designing a spring that should return to its original shape after moderate deformation?",
    "options": [
      "Solubility",
      "Elasticity",
      "Opacity",
      "Electrical resistance only"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "Elasticity describes the ability to recover shape after deforming within the elastic range.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-004",
    "section": "MCQ",
    "topic": "Analytical and logical reasoning",
    "difficulty": "hard",
    "question": "A prototype rule says exactly one of switches P and Q may be ON. Lamp R is ON exactly when P is ON, and lamp S is ON exactly when Q is ON. If R is ON, which statement must be true?",
    "options": [
      "P is ON and S is OFF",
      "P and Q are both ON",
      "Q is ON and S is ON",
      "R is OFF and Q is ON"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "R ON means P ON. Because exactly one of P and Q may be ON, Q must be OFF; since S follows Q exactly, S is also OFF.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-005",
    "section": "MCQ",
    "topic": "Environment and society",
    "difficulty": "medium",
    "question": "Which product change best supports a circular-economy approach?",
    "options": [
      "Designing components for disassembly and reuse",
      "Bonding all parts permanently so none can be separated",
      "Using more material than necessary",
      "Preventing repair access"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "Disassembly and reuse help retain component value and reduce waste.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-006",
    "section": "MCQ",
    "topic": "Language",
    "difficulty": "medium",
    "question": "Choose the clearest instruction.",
    "options": [
      "Green button two seconds release maybe.",
      "Press it for a while and then do that.",
      "After doing it, release whichever button is relevant.",
      "Press the green button for two seconds, then release it."
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "The selected instruction names the control, duration and sequence explicitly.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-007",
    "section": "MCQ",
    "topic": "Visualization and spatial reasoning",
    "difficulty": "hard",
    "question": "A square base plate carries a vertical cylindrical peg at its centre and a smaller vertical circular hole near one corner. In an ideal orthographic view from directly above, which set of boundaries should be visible?",
    "options": [
      "An outer square, a central circle, and an off-centre circle",
      "Only the outer square",
      "A rectangle with two parallel lines only",
      "Only one circle"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "The plate contributes the outer square. Looking down the axes of the peg and the drilled hole produces two circular boundaries, one central and one off-centre.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-008",
    "section": "MCQ",
    "topic": "Practical and scientific knowledge",
    "difficulty": "medium",
    "question": "Why is a hollow tube often stiffer in bending than a solid rod of the same material and mass distributed near the center?",
    "options": [
      "Hollow shapes have no neutral axis",
      "More material can be placed farther from the neutral axis",
      "Mass near the center always increases bending stiffness most",
      "Air inside the tube is intrinsically rigid"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "Bending stiffness depends strongly on second moment of area; placing material farther from the neutral axis is efficient.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-009",
    "section": "MCQ",
    "topic": "Observation and design sensitivity",
    "difficulty": "hard",
    "question": "A door handle is easy to see but difficult to operate for users with weak grip. Which redesign most directly addresses the problem?",
    "options": [
      "Hide the handle behind a panel",
      "Make the knob smoother and more spherical",
      "Use a smaller round knob",
      "Use a lever handle requiring less grasping force"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "A lever can be operated with the palm or forearm and requires less gripping than a small round knob.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-010",
    "section": "MCQ",
    "topic": "Analytical and logical reasoning",
    "difficulty": "medium",
    "question": "Three symbols begin in the order A-B-C. The first operation swaps the left pair, the next swaps the right pair, and these two operations alternate. What is the order after five swaps?",
    "options": [
      "C-A-B",
      "A-C-B",
      "B-A-C",
      "C-B-A"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "ABC → BAC → BCA → CBA → CAB → ACB.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-011",
    "section": "MCQ",
    "topic": "Creativity",
    "difficulty": "hard",
    "question": "A brief asks for a lamp that works as both task lighting and an ambient wall light without adding a second light source. Which concept most directly addresses the brief?",
    "options": [
      "A fixed opaque box",
      "Two permanently separate lamps",
      "A pivoting reflector that redirects the same light source",
      "A decorative pattern unrelated to light direction"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "A movable reflector changes distribution of one source to satisfy two lighting modes.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-012",
    "section": "MCQ",
    "topic": "Environment and society",
    "difficulty": "medium",
    "question": "Which urban design feature most directly encourages short walking trips?",
    "options": [
      "Removing crossings near destinations",
      "Connected, safe pedestrian routes between destinations",
      "Long discontinuous sidewalks with frequent dead ends",
      "Separating every use by large inaccessible barriers"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "Connectivity and safety reduce walking distance and friction between nearby destinations.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-013",
    "section": "MCQ",
    "topic": "Visualization and spatial reasoning",
    "difficulty": "hard",
    "question": "A graphic is first reflected across a vertical axis through its centre and then rotated 180° about the same centre. The combined effect is equivalent to which single transformation?",
    "options": [
      "Rotation by 90° clockwise",
      "Reflection across the vertical axis",
      "Translation only",
      "Reflection across the horizontal axis"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "Vertical reflection maps (x,y) to (−x,y); a 180° rotation then maps that to (x,−y), which is reflection across the horizontal axis.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-014",
    "section": "MCQ",
    "topic": "Practical and scientific knowledge",
    "difficulty": "medium",
    "question": "A matte surface is preferred over a glossy surface for a display under strong overhead lights mainly because matte finishes tend to do what?",
    "options": [
      "Scatter reflected light and reduce sharp glare",
      "Emit their own light",
      "Eliminate all reflection",
      "Increase transparency"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "Matte surfaces diffuse reflected light, reducing concentrated specular glare.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-015",
    "section": "MCQ",
    "topic": "Language",
    "difficulty": "hard",
    "question": "Which caption is least ambiguous?",
    "options": [
      "It shows this and that.",
      "The red line shows temperature; the blue line shows humidity.",
      "The red and blue line shows things.",
      "Temperature and humidity are shown by it."
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "The selected caption assigns each variable to a specific visual encoding.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-016",
    "section": "MCQ",
    "topic": "Analytical and logical reasoning",
    "difficulty": "hard",
    "question": "Four prototypes A, B, C, D are ranked with A above C, D below B, and B below C. Which prototype must rank highest?",
    "options": [
      "C",
      "D",
      "A",
      "B"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "The constraints give A>C>B>D, so A must be highest.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-017",
    "section": "MCQ",
    "topic": "Observation and design sensitivity",
    "difficulty": "medium",
    "question": "A control panel is used in low light. Which feature most improves immediate identification of an emergency stop?",
    "options": [
      "Placement behind a cover requiring tools",
      "Smaller label text",
      "Same shape and color as every other control",
      "A distinct shape plus high visual contrast"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "Redundant cues such as distinctive shape and contrast improve rapid identification beyond color alone.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-018",
    "section": "MCQ",
    "topic": "Visualization and spatial reasoning",
    "difficulty": "medium",
    "question": "A transparent rectangular panel has a notch on the top edge closer to the left corner and a circular hole near the bottom-right corner. If the panel is viewed from its back without turning it upside down, where do these features appear?",
    "options": [
      "Notch nearer the right; hole near bottom-left",
      "Notch nearer the right; hole near top-left",
      "Notch nearer the left; hole near top-right",
      "Notch nearer the left; hole near bottom-right"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "Viewing the back of a transparent panel reverses left and right while preserving top and bottom. The top-left-biased notch shifts to the right side, and the bottom-right hole appears bottom-left.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-019",
    "section": "MCQ",
    "topic": "Practical and scientific knowledge",
    "difficulty": "hard",
    "question": "A chair feels unstable because its center of mass moves beyond the support polygon when a user leans slightly. Which change most directly increases stability?",
    "options": [
      "Raise the seat and narrow the base",
      "Move mass upward",
      "Widen the base in the direction of likely lean",
      "Reduce contact area further"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "A wider support polygon provides a larger margin before the center-of-mass projection crosses an edge.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-020",
    "section": "MCQ",
    "topic": "Environment and society",
    "difficulty": "medium",
    "question": "Which packaging choice generally reduces transport-related volume for an empty reusable container?",
    "options": [
      "A permanently expanded rigid form with unused air volume",
      "Adding decorative spacers",
      "Increasing empty internal volume",
      "A collapsible or nestable geometry"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "Collapsible or nestable forms reduce empty shipping volume and can improve transport efficiency.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-021",
    "section": "MCQ",
    "topic": "Analytical and logical reasoning",
    "difficulty": "hard",
    "question": "An indicator lights only when exactly one of two sensors P and Q is active. P is active, but the indicator is dark. What must be true about Q?",
    "options": [
      "The condition is impossible",
      "Q may be either active or inactive",
      "Q is active",
      "Q is inactive"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "With exactly one active sensor the indicator would light. Since P is active and the indicator is dark, Q must also be active.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-022",
    "section": "MCQ",
    "topic": "Language",
    "difficulty": "medium",
    "question": "Which word best completes: “The prototype was revised ___ repeated user feedback.”",
    "options": [
      "with although",
      "in response to",
      "because from",
      "despite of"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "“In response to” correctly expresses that feedback motivated the revision.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-023",
    "section": "MCQ",
    "topic": "Visualization and spatial reasoning",
    "difficulty": "hard",
    "question": "A rectangular base 6 units by 4 units has a vertical cylindrical post at its centre. A circular hole is drilled vertically through the base near one corner. Which ideal top view is consistent with the object?",
    "options": [
      "A 6×4 rectangle with no internal boundaries",
      "A circle containing two rectangles",
      "A 6×4 rectangle containing one central circle and one off-centre circle",
      "Two circles with no outer rectangle"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "The top view preserves the rectangular outline of the base and shows circular boundaries for both the central post and the off-centre vertical hole.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-024",
    "section": "MCQ",
    "topic": "Practical and scientific knowledge",
    "difficulty": "medium",
    "question": "Why does a bicycle become easier to balance dynamically once it is moving, compared with standing still?",
    "options": [
      "The tires become wider automatically",
      "Steering corrections and dynamic effects provide additional stabilizing mechanisms",
      "Gravity stops acting at speed",
      "The center of mass disappears"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "A moving bicycle can be stabilized through steering corrections and dynamic interactions; gravity remains present.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-025",
    "section": "MCQ",
    "topic": "Observation and design sensitivity",
    "difficulty": "medium",
    "question": "A mobile app uses light gray text on a white background. Users struggle to read it. What is the most direct problem?",
    "options": [
      "Insufficient luminance contrast",
      "Excessive line length only",
      "Too many physical buttons",
      "Too much tactile feedback"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "Low luminance contrast between text and background reduces readability.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-026",
    "section": "MCQ",
    "topic": "Creativity",
    "difficulty": "hard",
    "question": "A product must indicate “open” or “closed” to both sighted and visually impaired users without electronics. Which concept is most inclusive?",
    "options": [
      "Use a tiny printed word only",
      "Use color alone",
      "Use a silent internal magnet with no external cue",
      "Combine a visible marker with a tactile position change"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "Combining visual and tactile cues communicates state through more than one sensory channel.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-027",
    "section": "MCQ",
    "topic": "Environment and society",
    "difficulty": "medium",
    "question": "A refill system reduces packaging waste only if what happens in practice?",
    "options": [
      "Users cannot access refills",
      "The container is discarded after one use",
      "Refills require more packaging than the original every time",
      "The durable container is reused enough times to offset its added material and transport impacts"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "Reuse systems depend on actual repeated reuse and an efficient refill loop to realize environmental benefits.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "uceed-2026-part-a-mcq-028",
    "section": "MCQ",
    "topic": "Analytical and logical reasoning",
    "difficulty": "hard",
    "question": "A direction marker starts pointing north. Operation 1 rotates it 90° clockwise; operation 2 reflects it across a vertical mirror line; these two operations then alternate. After six operations, which way does it point?",
    "options": [
      "South",
      "North",
      "West",
      "East"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.71,
    "explanation": "N → E after rotation; E → W after vertical reflection; W → N; N → N; N → E; E → W.",
    "source": {
      "kind": "original",
      "reference": "UCEED 2026 official question paper structure",
      "url": "https://www.uceed.iitb.ac.in/2026/question-paper.html",
      "checkedOn": "2026-09-07"
    }
  },
];
