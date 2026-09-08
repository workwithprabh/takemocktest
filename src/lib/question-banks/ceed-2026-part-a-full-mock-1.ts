import type { Question } from '../questions';

// Frozen Main Brain handoff content, integrated mechanically on 8 September
// 2026. CEED 2026 Part A, 44 questions across the official NAT, MSQ and MCQ sections.
// Records are copied field-for-field from the approved package; stems,
// options, answer keys, explanations, sections, difficulty, marking and
// source metadata are not rewritten here.

export const CEED_2026_PART_A_FULL_MOCK_1: Question[] = [
  {
    "id": "ceed-2026-part-a-nat-001",
    "section": "NAT",
    "topic": "Geometry",
    "difficulty": "medium",
    "question": "A rectangular display board is 84 cm by 60 cm. A uniform border of integer width w cm is painted inside all four edges, leaving an unpainted central rectangle of area 2992 cm². Find w.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "8",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The inner dimensions are (84-2w) and (60-2w). Solving (84-2w)(60-2w)=2992. Substituting w=8 gives 68×44=2992, and the other quadratic root is far outside the feasible border-width range. Thus w=8 cm.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-nat-002",
    "section": "NAT",
    "topic": "Visual measurement",
    "difficulty": "easy",
    "question": "A modular lamp has 5 identical triangular fins. Viewed from above, each fin contributes an exposed isosceles triangle of base 6 cm and height 4 cm, but adjacent fins overlap in five congruent triangles, each of area 3 cm². No region is covered by three fins. What is the total exposed top-view area in cm²?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "45",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Five fin areas contribute 5×(1/2×6×4)=60 cm². Subtract the five pairwise overlaps once: 60-5×3=45 cm².",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-nat-003",
    "section": "NAT",
    "topic": "Spatial reasoning",
    "difficulty": "medium",
    "question": "A cube-shaped package has edge 12 cm. A cylindrical hole of radius 3 cm is drilled straight through from the centre of the top face to the centre of the bottom face. Using π=3.14, what volume of material remains, in cm³? Round to the nearest whole number.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "1389",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Cube volume is 12³=1728. Hole volume is πr²h=3.14×9×12=339.12. Remaining volume=1388.88, which rounds to 1389.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-nat-004",
    "section": "NAT",
    "topic": "Grid reasoning",
    "difficulty": "hard",
    "question": "A typographic grid contains 7 rows and 9 columns of square cells. A designer blackens every cell in the first and last rows and every cell in the first and last columns. How many cells remain unblackened?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "35",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The unblackened cells form the interior rectangle with (7-2)(9-2)=5×7=35 cells.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-nat-005",
    "section": "NAT",
    "topic": "Folding",
    "difficulty": "medium",
    "question": "A paper strip is 96 cm long. It is folded so that each new fold halves the current visible length. After 4 such folds, the folded strip is then cut into 3 equal segments along its visible length. What is the visible length, in cm, of each segment?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "2",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "After four halvings the visible length is 96/16=6 cm. Dividing this into 3 equal visible segments gives 2 cm each.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-nat-006",
    "section": "NAT",
    "topic": "Cyclic patterns",
    "difficulty": "easy",
    "question": "A circular dial is divided into 24 equal sectors. A pointer starts at sector 0 and moves clockwise by 5 sectors after each signal. After how many signals will it first return to sector 0?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "24",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The return time is 24/gcd(24,5)=24 signals because 5 and 24 are coprime.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-nat-007",
    "section": "NAT",
    "topic": "Area reasoning",
    "difficulty": "medium",
    "question": "A 10 cm by 10 cm square tile has four quarter-circles of radius 2 cm removed, one from each corner. Using π=3.14, what is the remaining area in cm²?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "87.44",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The four quarter-circles together make one full circle of radius 2, area 3.14×4=12.56. Remaining area=100-12.56=87.44.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-nat-008",
    "section": "NAT",
    "topic": "Sequences",
    "difficulty": "hard",
    "question": "A sequence of icon widths follows 18, 22, 26, 30, ... mm. A panel can fit icons whose total width is at most 210 mm, with no gaps. What is the greatest number of icons, starting from the first, that fit?",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "7",
    "maxDecimalPlaces": 0,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The first n widths form an arithmetic progression with sum n/2[36+4(n-1)]=n(2n+16). For n=7 the sum is 210; n=8 would exceed the limit.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-msq-001",
    "section": "MSQ",
    "topic": "Symmetry",
    "difficulty": "easy",
    "question": "A logo is required to remain unchanged after a 180° rotation about its centre. Which properties, if present alone, guarantee that requirement?",
    "options": [
      "Every point has a partner at the diametrically opposite position with the same visual treatment",
      "The logo has one vertical mirror axis",
      "The logo has two perpendicular mirror axes through the centre",
      "The logo has threefold rotational symmetry"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      2
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Central half-turn pairing directly gives 180° rotational symmetry. Two perpendicular mirror axes through the same centre compose to a 180° rotation. A single mirror axis does not guarantee it, and threefold rotational symmetry concerns 120° steps.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-msq-002",
    "section": "MSQ",
    "topic": "Communication design",
    "difficulty": "medium",
    "question": "A product instruction card must remain legible after being photocopied in grayscale. Which design choices directly improve this robustness?",
    "options": [
      "Use luminance contrast in addition to hue contrast",
      "Encode categories only by red versus green",
      "Use distinct line patterns as a secondary code",
      "Use text labels for critical categories"
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
    "explanation": "Grayscale removes hue distinctions. Luminance contrast, patterns, and text labels preserve separability without relying solely on color.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-msq-003",
    "section": "MSQ",
    "topic": "Folding",
    "difficulty": "hard",
    "question": "A rectangular sheet is folded exactly in half along a vertical line and then exactly in half along a horizontal line. A single hole is punched away from all fold lines. After complete unfolding, which statements must be true?",
    "options": [
      "There are four holes",
      "Each hole has a partner reflected across the vertical fold line",
      "At least one hole lies on a fold line",
      "The four holes must form a square"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0,
      1
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Each of the two half-folds doubles the image of the punch, so four holes appear. Reflection across the vertical fold line pairs the holes. Because the punch is away from all fold lines, no hole lies on a fold line. The four reflected positions form a rectangle in general, not necessarily a square.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-msq-004",
    "section": "MSQ",
    "topic": "Information design",
    "difficulty": "medium",
    "question": "A sign system uses shape, fill texture, and a short text code for each category. Which changes reduce redundancy rather than increase it?",
    "options": [
      "Removing the text code while keeping shape and texture",
      "Making all shapes identical while retaining texture and text",
      "Adding a second text code that repeats the first",
      "Replacing all textures with one common texture while retaining shape and text"
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
    "explanation": "Each listed removal or homogenization eliminates one independent encoding channel. Adding a second duplicate text code does not reduce redundancy.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-msq-005",
    "section": "MSQ",
    "topic": "Spatial reasoning",
    "difficulty": "easy",
    "question": "A solid is built by joining unit cubes face to face. Which observations are invariant under rigid rotation of the whole solid?",
    "options": [
      "Number of cubes",
      "Number of face-to-face contacts between cubes",
      "Number of exposed unit faces",
      "Connectivity of the cubes' face-adjacency graph"
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
    "explanation": "A rigid rotation changes only the orientation of the solid relative to the viewer. It preserves the cube count, every face-to-face contact, the number of exposed unit faces, and the connectivity of the face-adjacency graph.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-msq-006",
    "section": "MSQ",
    "topic": "Grid systems",
    "difficulty": "medium",
    "question": "A page layout uses a baseline grid of 4 mm. Which vertical distances are exactly compatible with the grid without fractional baselines?",
    "options": [
      "12 mm",
      "18 mm",
      "20 mm",
      "28 mm"
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
    "explanation": "Distances compatible with a 4 mm grid are integer multiples of 4: 12, 20 and 28 mm; 18 mm is not.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-msq-007",
    "section": "MSQ",
    "topic": "Interaction design",
    "difficulty": "hard",
    "question": "A designer wants an interface control to be discoverable without depending on color. Which cues can independently help communicate clickability?",
    "options": [
      "A conventional button shape with a visible boundary",
      "Changing only the hue of otherwise identical text",
      "Placing the control beside non-interactive text with identical typography and no boundary",
      "Adding a decorative shadow to the page background rather than to the control"
    ],
    "correctIndex": -1,
    "answerType": "multi-select",
    "correctIndices": [
      0
    ],
    "partialMarking": true,
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A conventional bounded button shape can signal clickability without relying on color. A hue-only difference depends on color, while identical non-interactive styling and a background shadow do not independently communicate that the control itself is clickable.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-msq-008",
    "section": "MSQ",
    "topic": "Transformations",
    "difficulty": "medium",
    "question": "A pattern is generated by translating a motif repeatedly by the same horizontal vector. Which properties are necessarily preserved from one copy to the next?",
    "options": [
      "Orientation",
      "Size",
      "Distances between corresponding internal points",
      "Absolute x-coordinate"
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
    "explanation": "Translation preserves orientation, size, and all distances. Absolute position changes, including x-coordinate.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-msq-009",
    "section": "MSQ",
    "topic": "Scale",
    "difficulty": "easy",
    "question": "A physical mock-up is scaled uniformly from 1:5 to 1:2 while representing the same real object. Compared with the 1:5 mock-up, which quantities of the mock-up increase by a factor greater than 2?",
    "options": [
      "Every angle",
      "Surface area",
      "Volume",
      "The ratio of any two corresponding linear dimensions within the mock-up"
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
    "explanation": "Changing from 1:5 to 1:2 multiplies linear dimensions by 5/2. Surface area therefore grows by (5/2)^2=6.25 and volume by (5/2)^3=15.625, both greater than 2. Angles and ratios of corresponding linear dimensions are unchanged.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-msq-010",
    "section": "MSQ",
    "topic": "Layout",
    "difficulty": "medium",
    "question": "Four identical square cards are arranged in one row with equal gaps. Which operations preserve the equal-gap relation?",
    "options": [
      "Translate the entire arrangement rigidly",
      "Uniformly scale the whole arrangement",
      "Move only the second card 2 cm to the right",
      "Rotate the entire arrangement as one rigid object"
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
    "explanation": "Rigid translation and rotation preserve all distances, and uniform scaling multiplies all gaps equally. Moving just one card changes adjacent gaps.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-001",
    "section": "MCQ",
    "topic": "Symmetry",
    "difficulty": "medium",
    "question": "A package silhouette is symmetric about a vertical axis. A circular seal is moved 2 cm to the right of the axis without any other change. What is the minimum additional change that restores vertical mirror symmetry?",
    "options": [
      "Add an identical seal 2 cm to the left of the axis",
      "Move the seal another 2 cm right",
      "Add an identical seal on the axis",
      "Rotate the whole package 90°"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "Vertical mirror symmetry requires a matching feature at the reflected position, 2 cm to the left.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-002",
    "section": "MCQ",
    "topic": "Visual comparison",
    "difficulty": "hard",
    "question": "A map legend uses four line weights: 0.25, 0.5, 1.0 and 2.0 mm. Which pair has the largest ratio of thicker to thinner line?",
    "options": [
      "0.5 and 1.0",
      "1.0 and 2.0",
      "0.25 and 2.0",
      "0.25 and 0.5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "The ratios are 2, 2, 2 and 8 respectively, so 0.25 versus 2.0 is largest.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-003",
    "section": "MCQ",
    "topic": "Stability",
    "difficulty": "medium",
    "question": "A chair model has three legs touching the floor at non-collinear points. Ignoring deformation, why can it stand without rocking on a perfectly rigid uneven-free plane?",
    "options": [
      "The three legs must have equal length",
      "Three points determine a plane",
      "Three legs always give a lower centre of mass",
      "Three contacts produce no friction"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "Any three non-collinear contact points define a plane, so all three can contact a planar floor simultaneously.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-004",
    "section": "MCQ",
    "topic": "Pattern transformation",
    "difficulty": "easy",
    "question": "A 6×6 checker grid is colored by alternating black and white cells. If the grid is rotated 90° about its centre, what happens?",
    "options": [
      "The pattern is unchanged",
      "Only corner colors change",
      "The pattern becomes vertically striped",
      "Black and white swap everywhere"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "For an even-by-even checkerboard, a 90° rotation maps each cell to a cell of opposite parity, so black and white swap.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-005",
    "section": "MCQ",
    "topic": "Sequences",
    "difficulty": "medium",
    "question": "A sequence of panels has 1, 3, 6, 10, 15 dots. If the construction rule continues, how many dots are in the next panel?",
    "options": [
      "20",
      "21",
      "24",
      "18"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "The increases are 2,3,4,5, so the next increase is 6 and 15+6=21.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-006",
    "section": "MCQ",
    "topic": "Perception",
    "difficulty": "hard",
    "question": "A poster is viewed from twice the original distance. Under a pinhole-camera approximation with the same eye geometry, the angular height of the poster is approximately what fraction of the original for small angles?",
    "options": [
      "One half",
      "The same",
      "Twice",
      "One quarter"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "For small angles, angular size is approximately physical size divided by distance, so doubling distance halves it.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-007",
    "section": "MCQ",
    "topic": "Bounding geometry",
    "difficulty": "medium",
    "question": "A square icon is rotated 45° about its centre. Its axis-aligned bounding box, compared with the original square, has side length multiplied by what factor?",
    "options": [
      "2",
      "1/√2",
      "1",
      "√2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "The bounding-box side equals the square's diagonal at 45°, giving a factor √2.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-008",
    "section": "MCQ",
    "topic": "Reflection",
    "difficulty": "easy",
    "question": "A printed arrow points northeast. A mirror is placed along a vertical line beside the print. In the mirror image the arrow points",
    "options": [
      "southwest",
      "northeast",
      "northwest",
      "southeast"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "A vertical mirror reverses horizontal direction but preserves vertical direction, so northeast becomes northwest.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-009",
    "section": "MCQ",
    "topic": "Visual hierarchy",
    "difficulty": "medium",
    "question": "A designer wants the perceived hierarchy 'title > subtitle > body'. Which single change most directly risks reversing that hierarchy?",
    "options": [
      "Increasing body text weight above the title weight",
      "Adding more white space around the title",
      "Aligning all text to the same left edge",
      "Reducing paragraph width"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "Making body text visually heavier than the title can undermine or reverse the intended hierarchy.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-010",
    "section": "MCQ",
    "topic": "Symmetry",
    "difficulty": "hard",
    "question": "A 3D object has exactly one plane of mirror symmetry. Which statement must be true?",
    "options": [
      "It also has 180° rotational symmetry",
      "Its two halves across that plane are congruent mirror images",
      "It has no curved surfaces",
      "Its centre of mass lies on the symmetry plane"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "Mirror symmetry means the two halves are reflected congruent counterparts. The other properties are not guaranteed; even centre of mass can depend on nonuniform density not stated.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-011",
    "section": "MCQ",
    "topic": "Nets",
    "difficulty": "medium",
    "question": "A cube net consists of six squares. Which condition is necessary for it to fold into a cube without overlap?",
    "options": [
      "The net must have a line of mirror symmetry",
      "Every square must touch exactly four others in the net",
      "The adjacency graph of squares must be connected",
      "The net must fit inside a 3×3 square"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "All six faces must be connected through shared edges so folding can assemble one cube. The other conditions are not necessary.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-012",
    "section": "MCQ",
    "topic": "Geometry",
    "difficulty": "easy",
    "question": "Two identical circles overlap so that each centre lies on the other circle. The triangle formed by the two centres and either intersection point is",
    "options": [
      "30-60-90",
      "scalene",
      "right isosceles",
      "equilateral"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "All three sides equal the common radius, so the triangle is equilateral.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-013",
    "section": "MCQ",
    "topic": "Pattern repetition",
    "difficulty": "medium",
    "question": "A pattern uses an asymmetric motif that is not identical to its mirror image, followed by that mirror image, then repeats this two-unit block. What is the shortest translation that maps the entire infinite pattern onto itself?",
    "options": [
      "Two motif widths",
      "Half a motif width",
      "No translation exists",
      "One motif width"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "Because the motif is explicitly asymmetric, translating by one motif width swaps it with a different mirror image and does not reproduce the pattern. The two-motif block repeats, so two motif widths is the shortest translation.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-014",
    "section": "MCQ",
    "topic": "Occlusion",
    "difficulty": "hard",
    "question": "A bottle label has information printed around a cylinder. Which feature is most likely to be hidden from a viewer looking from one fixed direction?",
    "options": [
      "A horizontal band around the full circumference",
      "A mark at the top centre of the visible face",
      "Content placed on the rear generatrix",
      "Content centred on the front"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "The rear generatrix lies on the far side of the cylinder and is occluded from a fixed frontal view.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-015",
    "section": "MCQ",
    "topic": "Typography",
    "difficulty": "medium",
    "question": "A typographic word is set in all capitals. Which change generally increases the word's occupied horizontal measure without changing point size?",
    "options": [
      "Replacing every letter by a narrower glyph",
      "Increasing tracking",
      "Reducing tracking",
      "Decreasing the number of letters"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "Positive tracking adds space between letters, increasing total width.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-016",
    "section": "MCQ",
    "topic": "Cube reasoning",
    "difficulty": "easy",
    "question": "A cube has a red face opposite a blue face, and a green face opposite a yellow face. Which pair can share an edge?",
    "options": [
      "Blue and red",
      "Red and blue",
      "Green and yellow",
      "Red and green"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "Opposite faces cannot share edges. Red and green are from different opposite pairs and can be adjacent.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-017",
    "section": "MCQ",
    "topic": "Perspective",
    "difficulty": "medium",
    "question": "In a perspective sketch, parallel railway tracks appear to converge toward a point. That point is called the",
    "options": [
      "orthocentre",
      "centroid",
      "vanishing point",
      "focus of curvature"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "In linear perspective, parallel lines not parallel to the picture plane appear to converge at a vanishing point.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-018",
    "section": "MCQ",
    "topic": "Scale",
    "difficulty": "hard",
    "question": "A circular badge is enlarged so its diameter becomes 150% of the original. Its area becomes what percentage of the original?",
    "options": [
      "225%",
      "300%",
      "150%",
      "200%"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "Area scales with the square of linear scale: 1.5²=2.25, or 225%.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-019",
    "section": "MCQ",
    "topic": "Cropping",
    "difficulty": "medium",
    "question": "A rectangular photograph is cropped to half its width while its height is unchanged. If then uniformly scaled so the cropped width returns to the original width, the new height is",
    "options": [
      "the original height",
      "twice the original height",
      "four times the original height",
      "half the original height"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "Restoring half-width to full width requires scale factor 2, so height doubles.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-020",
    "section": "MCQ",
    "topic": "Information design",
    "difficulty": "easy",
    "question": "A user must distinguish four states on a tiny monochrome indicator. Which encoding is most robust when space is extremely limited?",
    "options": [
      "Four subtle font weights",
      "Four close hatch densities",
      "Four nearly similar grey values",
      "Four distinct geometric symbols"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "Distinct geometric symbols provide strong categorical separation at small size without relying on fine tonal differences.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-021",
    "section": "MCQ",
    "topic": "Light and form",
    "difficulty": "medium",
    "question": "A paper cube is lit by a point light located directly above its top face. Which face receives the most direct illumination if the cube is axis-aligned?",
    "options": [
      "Top face",
      "Bottom face",
      "All vertical faces equally and more than top",
      "Only the front face"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "The top face normal points toward the overhead light, giving the largest incidence; side faces receive grazing or no direct component in the idealized setup.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-022",
    "section": "MCQ",
    "topic": "Spacing",
    "difficulty": "hard",
    "question": "A row of five identical icons has centre-to-centre spacing 18 mm. The distance from the centre of the first icon to the centre of the fifth is",
    "options": [
      "108 mm",
      "54 mm",
      "72 mm",
      "90 mm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "Five centres contain four equal intervals, so the distance is 4×18=72 mm.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-023",
    "section": "MCQ",
    "topic": "Rotational symmetry",
    "difficulty": "medium",
    "question": "A shape has rotational symmetry of order 6. What is the smallest positive rotation that maps it onto itself?",
    "options": [
      "90°",
      "30°",
      "45°",
      "60°"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "Order 6 means six repeats in 360°, so the smallest rotation is 360°/6=60°.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-024",
    "section": "MCQ",
    "topic": "Grid systems",
    "difficulty": "easy",
    "question": "A poster uses a 12-column grid. An image spans columns 2 through 8 inclusive. How many columns wide is the image?",
    "options": [
      "6",
      "7",
      "8",
      "9"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "Inclusive counting gives 8-2+1=7 columns.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-025",
    "section": "MCQ",
    "topic": "Reflection",
    "difficulty": "medium",
    "question": "A transparent sheet carries the letter F. The sheet is flipped about a vertical line lying in its own plane, then viewed from the original viewing side. Which transformation describes the visible letter relative to the starting F?",
    "options": [
      "Reflection across a horizontal line",
      "No change",
      "Reflection across a vertical line",
      "A 180° rotation"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "Flipping the transparent sheet about a vertical in-plane axis reverses left and right while preserving top and bottom, which is reflection across a vertical line.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
  {
    "id": "ceed-2026-part-a-mcq-026",
    "section": "MCQ",
    "topic": "Color",
    "difficulty": "hard",
    "question": "A designer samples a color at RGB (120,120,120). Which description is correct?",
    "options": [
      "It is neutral gray",
      "It is complementary cyan",
      "It is pure black",
      "It is a saturated red"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 0.5,
    "explanation": "Equal R, G and B components produce a neutral gray; 120 is neither 0 nor 255.",
    "source": {
      "kind": "original",
      "reference": "CEED 2026 official question paper",
      "url": "https://www.ceed.iitb.ac.in/2026/downloads/CEED_2026_Question_Paper.pdf",
      "checkedOn": "2026-09-08"
    }
  },
];
