import type { Question } from '../questions';

export const IIIT_HYDERABAD_UGEE_2026_REAP_SECTIONAL_1: Question[] = [
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-001",
    "section": "REAP",
    "topic": "Data and described-graph interpretation",
    "difficulty": "medium",
    "question": "For solutions with concentrations 1,2,3,4 units, a measured signal is 2,4,8,16 units. Which simple relation best fits the data?",
    "explanation": "For concentrations 1,2,3,4, 2^c gives 2,4,8,16 exactly.",
    "options": [
      "signal = 2 x concentration",
      "signal = 2^concentration",
      "signal = concentration^2",
      "signal = concentration + 1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-002",
    "section": "REAP",
    "topic": "Data and described-graph interpretation",
    "difficulty": "medium",
    "question": "A battery is tested with load resistances 2,4,6 ohm. The terminal voltages are 4,6,7 V respectively. Which trend is supported by these data?",
    "explanation": "The measured terminal voltages rise from 4 to 6 to 7 V as resistance rises. No stronger relationship is justified by only these points.",
    "options": [
      "Terminal voltage is constant",
      "Terminal voltage decreases linearly with load resistance",
      "Current is the same for all loads",
      "Terminal voltage increases as load resistance increases"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-003",
    "section": "REAP",
    "topic": "Mathematical reasoning and novel application",
    "difficulty": "medium",
    "question": "The graph of y=x^2 is reflected across the x-axis and then shifted upward by 3. Which equation results?",
    "explanation": "Reflection gives y=-x^2. Shifting up by 3 gives y=3-x^2.",
    "options": [
      "y=(x-3)^2",
      "y=3-x^2",
      "y=x^2+3",
      "y=-(x-3)^2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-004",
    "section": "REAP",
    "topic": "Scientific inference and experiment reasoning",
    "difficulty": "medium",
    "question": "A student measures the same resistor five times and obtains 9.9, 10.1, 10.0, 10.0 and 10.0 ohm. A calibrated standard says the true resistance is 12.0 ohm. Which description best fits the student's measurements?",
    "explanation": "The repeated values cluster tightly near 10.0 ohm, so precision is high. They are far from the true 12.0 ohm value, so accuracy is poor.",
    "options": [
      "High accuracy but poor precision",
      "High precision but poor accuracy",
      "Both high accuracy and high precision",
      "Neither precision nor accuracy can be discussed"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-005",
    "section": "REAP",
    "topic": "Multi-step combinatorial, probability and structured reasoning",
    "difficulty": "hard",
    "question": "Five different books A,B,C,D,E are arranged on a shelf. In how many arrangements does A appear before B while C and D are not adjacent?",
    "explanation": "There are 5!/2=60 arrangements with A before B. If C and D are adjacent, treat them as one block: 4! x 2=48 arrangements, and by symmetry half of these, 24, have A before B. Therefore 60-24=36.",
    "options": [
      "24",
      "48",
      "36",
      "60"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-006",
    "section": "REAP",
    "topic": "Data and described-graph interpretation",
    "difficulty": "hard",
    "question": "A measured quantity is known to follow a quadratic model y=ax^2+bx+c. The measurements are y=7 at x=0, y=3 at x=2, and y=12 at x=5. What is the x-coordinate of the model's vertex?",
    "explanation": "From x=0, c=7. The other data give 4a+2b=-4 and 25a+5b=5. These reduce to 2a+b=-2 and 5a+b=1, so a=1 and b=-4. The vertex is at x=-b/(2a)=2.",
    "options": [
      "1",
      "3",
      "2",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-007",
    "section": "REAP",
    "topic": "Constraint, pattern and logical reasoning",
    "difficulty": "medium",
    "question": "A sequence of symbols is AB, ABB, ABBB, ABBBB, ... What is the 8th symbol in the 5th term?",
    "explanation": "The 5th term is A followed by five B symbols, so it has only 6 symbols.",
    "options": [
      "There is no 8th symbol",
      "A",
      "B",
      "The symbol alternates"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-008",
    "section": "REAP",
    "topic": "Data and described-graph interpretation",
    "difficulty": "hard",
    "question": "A described velocity-time graph has v=+3 m/s from 0 to 2 s, v=-1 m/s from 2 to 6 s, and v=+2 m/s from 6 to 8 s. What is the ratio of average speed to the magnitude of average velocity over the full 8 s?",
    "explanation": "Total distance is 3x2+1x4+2x2=14 m. Net displacement is 6-4+4=6 m. Since both averages use the same total time, their ratio is 14/6=7/3.",
    "options": [
      "5/3",
      "2",
      "7/3",
      "3"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-009",
    "section": "REAP",
    "topic": "Constraint, pattern and logical reasoning",
    "difficulty": "medium",
    "question": "A scientist states: 'Whenever sample P contains copper, test T is positive.' Test T is negative for P. Assuming the statement is reliable, what follows?",
    "explanation": "The statement is copper -> T positive. Its contrapositive is T not positive -> no copper.",
    "options": [
      "P definitely contains copper",
      "Test T is irrelevant",
      "Copper causes every possible test to be negative",
      "P does not contain copper"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-010",
    "section": "REAP",
    "topic": "Mathematical reasoning and novel application",
    "difficulty": "easy",
    "question": "If a positive number is multiplied by 3 and then divided by 6, the final result is what fraction of the original?",
    "explanation": "The net multiplier is 3/6=1/2.",
    "options": [
      "1/3",
      "2",
      "3/2",
      "1/2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-011",
    "section": "REAP",
    "topic": "Mathematical reasoning and novel application",
    "difficulty": "medium",
    "question": "For positive real x and y with x+y=10, what is the maximum possible value of xy?",
    "explanation": "By AM-GM, xy <= ((x+y)/2)^2 = 25, with equality at x=y=5.",
    "options": [
      "20",
      "50",
      "25",
      "100"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-012",
    "section": "REAP",
    "topic": "Scientific inference and experiment reasoning",
    "difficulty": "medium",
    "question": "Two identical beakers contain equal masses of water initially at the same temperature. Beaker P is blackened on the outside and beaker Q is shiny. Both are placed under the same radiant heater for the same time. P reaches a higher temperature. Which inference is best supported?",
    "explanation": "With mass, initial temperature and heating conditions controlled, the higher final temperature of P supports greater absorption of incident radiation by the blackened surface.",
    "options": [
      "Water in P must have a larger specific heat",
      "The blackened surface absorbed radiant energy more effectively under these conditions",
      "The shiny beaker emitted no radiation",
      "The masses of water must have changed"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-013",
    "section": "REAP",
    "topic": "Scientific inference and experiment reasoning",
    "difficulty": "hard",
    "question": "A signal S turns on proteins P and Q. Three causal models fit the existing observations: M1: S activates P, and P activates Q; M2: S activates Q, and Q activates P; M3: S activates P and Q independently. With S on, both proteins are on; blocking S turns both off. You can block S and, in separate trials, force either P or Q to remain on. Which experimental plan is minimally sufficient to distinguish all three models?",
    "explanation": "With S blocked, forcing P on gives Q on only in M1. Forcing Q on gives P on only in M2. M3 gives no rescue in either direction. Therefore the pair of intervention trials yields distinct outcome patterns for all three models; either trial alone leaves two models indistinguishable.",
    "options": [
      "Only force P on and observe Q",
      "Only force Q on and observe P",
      "Repeat the S-on baseline and then force P on",
      "Perform both trials: force P on and observe Q, and force Q on and observe P"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-014",
    "section": "REAP",
    "topic": "Mathematical reasoning and novel application",
    "difficulty": "medium",
    "question": "A circle has center (2,-1) and passes through (5,3). What is its radius?",
    "explanation": "The radius is the distance between (2,-1) and (5,3): sqrt(3^2+4^2)=5.",
    "options": [
      "4",
      "5",
      "sqrt(13)",
      "25"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-015",
    "section": "REAP",
    "topic": "Multi-step combinatorial, probability and structured reasoning",
    "difficulty": "medium",
    "question": "A bag has 2 red, 2 green and 1 blue ball. One ball is drawn at random. Given that it is not blue, what is the probability it is red?",
    "explanation": "Conditioning on not blue leaves 4 equally likely balls: 2 red and 2 green. The probability of red is 2/4=1/2.",
    "options": [
      "1/2",
      "2/5",
      "1/3",
      "2/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-016",
    "section": "REAP",
    "topic": "Multi-step combinatorial, probability and structured reasoning",
    "difficulty": "hard",
    "question": "A condition is present in 10% of a population. A test has sensitivity 0.9 and specificity 0.8. A person takes the test twice, with the two test outcomes independent conditional on whether the condition is present. Given two positive results, what is the probability the person has the condition?",
    "explanation": "For a person with the condition, two positives have probability 0.9^2=0.81; weighted by prevalence this is 0.081. Without the condition, a false positive has probability 0.2, so two positives have probability 0.04; weighted by 0.9 this is 0.036. The posterior is 0.081/(0.081+0.036)=81/117=9/13.",
    "options": [
      "4/5",
      "9/13",
      "1/2",
      "81/100"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-017",
    "section": "REAP",
    "topic": "Linguistic, code and mapping reasoning",
    "difficulty": "medium",
    "question": "A robot language uses 'fo' for forward, 'ba' for backward, and suffix '2' for two steps. Which command means 'backward two steps'?",
    "explanation": "The root ba means backward and the suffix 2 specifies two steps, so ba2 is correct.",
    "options": [
      "fo2",
      "2ba",
      "ba",
      "ba2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-018",
    "section": "REAP",
    "topic": "Linguistic, code and mapping reasoning",
    "difficulty": "medium",
    "question": "In a notation, [ab] means 'a is immediately before b' and {ab} means 'a and b are separated by exactly one symbol'. In the string XYZWT, which statement is true?",
    "explanation": "X is immediately before Y, so [XY] is true. X and Y are not separated by one symbol, X is not immediately before Z, and W,T are adjacent rather than separated by one symbol.",
    "options": [
      "[XY]",
      "{XY}",
      "[XZ]",
      "{WT}"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-019",
    "section": "REAP",
    "topic": "Scientific inference and experiment reasoning",
    "difficulty": "easy",
    "question": "A spring extends 2 cm under a 1 N load and 6 cm under a 3 N load. Within this range, which model is consistent with the measurements?",
    "explanation": "Tripling the load from 1 N to 3 N triples the extension from 2 cm to 6 cm, consistent with proportionality.",
    "options": [
      "Extension is proportional to load squared",
      "Extension is independent of load",
      "Extension is inversely proportional to load",
      "Extension is proportional to load"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-020",
    "section": "REAP",
    "topic": "Linguistic, code and mapping reasoning",
    "difficulty": "medium",
    "question": "A code maps each digit d to 9-d and then reverses the digit order. Under this code, 230 becomes 967. What is the code for 541?",
    "explanation": "First map digits: 5->4, 4->5, 1->8, giving 458. Reverse the order to get 854.",
    "options": [
      "458",
      "854",
      "145",
      "548"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-021",
    "section": "REAP",
    "topic": "Linguistic, code and mapping reasoning",
    "difficulty": "medium",
    "question": "In an invented language, 'mok li' means 'small cube', 'mok ra' means 'small sphere', and 'zen ra' means 'large sphere'. Which word means 'large'?",
    "explanation": "ra is shared by the two sphere phrases, so ra means sphere. mok then means small, leaving zen as large.",
    "options": [
      "mok",
      "li",
      "zen",
      "ra"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-022",
    "section": "REAP",
    "topic": "Mathematical reasoning and novel application",
    "difficulty": "medium",
    "question": "A point moves from (0,0) to (3,4) and then to (3,0). What is the ratio of total path length to straight-line displacement from start to finish?",
    "explanation": "The first segment has length 5 and the second length 4, so path length is 9. Net displacement from (0,0) to (3,0) has length 3. Ratio=9/3=3.",
    "options": [
      "3",
      "5/3",
      "7/3",
      "7/5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-023",
    "section": "REAP",
    "topic": "Mathematical reasoning and novel application",
    "difficulty": "easy",
    "question": "A function g satisfies g(x)+g(1-x)=1 for every real x. What is g(1/2)?",
    "explanation": "Putting x=1/2 gives g(1/2)+g(1/2)=1, so g(1/2)=1/2.",
    "options": [
      "0",
      "1",
      "1/2",
      "Cannot be determined"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-024",
    "section": "REAP",
    "topic": "Linguistic, code and mapping reasoning",
    "difficulty": "easy",
    "question": "In a code, prefix 'un' means reverse and 'lat' means left. What does 'unlat' mean?",
    "explanation": "The prefix explicitly reverses the meaning of the following direction, so reverse of left is right.",
    "options": [
      "left twice",
      "forward left",
      "no movement",
      "reverse left, interpreted as right"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-025",
    "section": "REAP",
    "topic": "Constraint, pattern and logical reasoning",
    "difficulty": "easy",
    "question": "A machine alternates operations: add 2, then multiply by 2, then add 2, then multiply by 2, and so on. Starting at 1, what is the value after three operations?",
    "explanation": "1 -> 3 after +2, then 6 after x2, then 8 after +2.",
    "options": [
      "8",
      "6",
      "10",
      "12"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-026",
    "section": "REAP",
    "topic": "Constraint, pattern and logical reasoning",
    "difficulty": "medium",
    "question": "Four components W,X,Y,Z must be assembled in an order. W must precede X, Y must precede Z, and X must precede Z. Which order is valid?",
    "explanation": "Y,W,X,Z satisfies W before X, Y before Z and X before Z.",
    "options": [
      "X, W, Y, Z",
      "Y, W, X, Z",
      "W, Z, X, Y",
      "Y, Z, W, X"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-027",
    "section": "REAP",
    "topic": "Linguistic, code and mapping reasoning",
    "difficulty": "medium",
    "question": "An artificial grammar uses suffix -k for past tense and suffix -m for plural subject. Root 'dav' means run. Which form most naturally encodes 'they ran' if suffixes are written in the order plural then tense?",
    "explanation": "Start with root dav, append plural -m, then past -k, giving davmk.",
    "options": [
      "davkm",
      "davk",
      "davmk",
      "davm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-028",
    "section": "REAP",
    "topic": "Scientific inference and experiment reasoning",
    "difficulty": "medium",
    "question": "A metal wire is measured to have resistance 5.0 ohm at 20 C and 5.4 ohm at 40 C. Assuming a linear temperature dependence over this range, what resistance is predicted at 30 C?",
    "explanation": "30 C is halfway between 20 C and 40 C, so linear interpolation gives halfway between 5.0 and 5.4 ohm, namely 5.2 ohm.",
    "options": [
      "5.1 ohm",
      "5.2 ohm",
      "5.3 ohm",
      "5.8 ohm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-029",
    "section": "REAP",
    "topic": "Data and described-graph interpretation",
    "difficulty": "medium",
    "question": "A table gives time t in s and velocity v in m/s: (0,4), (2,8), (4,12), (6,16). What constant acceleration is consistent with the table?",
    "explanation": "Velocity increases by 4 m/s every 2 s, so acceleration is 2 m/s^2.",
    "options": [
      "2 m/s^2",
      "1 m/s^2",
      "4 m/s^2",
      "6 m/s^2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-030",
    "section": "REAP",
    "topic": "Data and described-graph interpretation",
    "difficulty": "easy",
    "question": "Four equal-length time intervals contain 5, 7, 9 and 11 detected events. If the pattern is arithmetic, how many events are expected in the next interval?",
    "explanation": "The counts increase by 2 each interval, so the next is 13.",
    "options": [
      "12",
      "14",
      "15",
      "13"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-031",
    "section": "REAP",
    "topic": "Multi-step combinatorial, probability and structured reasoning",
    "difficulty": "hard",
    "question": "Two fair six-sided dice are rolled. Given that their product is divisible by 6, what is the probability that their sum is even?",
    "explanation": "There are 15 ordered outcomes for which the product is divisible by 6. Among them, (2,6),(4,6),(6,2),(6,4),(6,6) have even sum, giving 5 favorable outcomes. Thus the conditional probability is 5/15=1/3.",
    "options": [
      "2/5",
      "1/2",
      "1/3",
      "5/12"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-032",
    "section": "REAP",
    "topic": "Constraint, pattern and logical reasoning",
    "difficulty": "hard",
    "question": "Exactly one of locations A,B,C,D contains a sensor. Four statements are made: (i) the sensor is in A or B; (ii) the sensor is not in A; (iii) the sensor is in C; (iv) the sensor is not in D. Exactly two statements are true. Where is the sensor?",
    "explanation": "If the sensor is in A, statements (i) and (iv) are true and the other two are false, giving exactly two truths. For B or C there are three truths, and for D there is only one. Hence A is the unique location.",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-033",
    "section": "REAP",
    "topic": "Linguistic, code and mapping reasoning",
    "difficulty": "easy",
    "question": "In a custom operator language, 'A vel B' means A+B and 'A nor B' means A-B. Operations are evaluated left to right. What is 10 nor 3 vel 2?",
    "explanation": "Left to right: 10 nor 3 = 7, then 7 vel 2 = 9.",
    "options": [
      "5",
      "11",
      "9",
      "15"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-034",
    "section": "REAP",
    "topic": "Constraint, pattern and logical reasoning",
    "difficulty": "hard",
    "question": "Six experimental stages A,B,C,D,E,F must be ordered. B must occur immediately after A; D must occur before C; E is neither first nor last; and F must occur after C. Which order satisfies all conditions?",
    "explanation": "A B D E C F has B immediately after A, D before C, E in an interior position, and F after C. Each other option violates at least one stated condition.",
    "options": [
      "D A B C F E",
      "A B D E C F",
      "A D B E C F",
      "A B C E D F"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-035",
    "section": "REAP",
    "topic": "Multi-step combinatorial, probability and structured reasoning",
    "difficulty": "medium",
    "question": "A four-character code contains exactly two A's and two B's and is chosen uniformly from all distinct arrangements. Given that the code starts with A, what is the probability that it ends with B?",
    "explanation": "Given that the first symbol is A, the remaining A can be in position 2, 3, or 4, giving three equally likely codes: AABB, ABAB and ABBA. The first two end in B, so the conditional probability is 2/3.",
    "options": [
      "1/3",
      "1/2",
      "3/4",
      "2/3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-036",
    "section": "REAP",
    "topic": "Constraint, pattern and logical reasoning",
    "difficulty": "medium",
    "question": "Three statements are made about an integer n: P: n is even. Q: n is divisible by 4. R: n^2 is even. Which implication is always valid?",
    "explanation": "Divisibility by 4 implies evenness. If n is even, n^2 is even. The reverse implications involving divisibility by 4 need not hold.",
    "options": [
      "P implies Q",
      "R implies Q",
      "R implies n is divisible by 4",
      "Q implies P and P implies R"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-037",
    "section": "REAP",
    "topic": "Scientific inference and experiment reasoning",
    "difficulty": "hard",
    "question": "A gas sample is compressed slowly at constant temperature from volume V to V/2. A pressure sensor reports that pressure rises from P to about 2P. Which observation would most directly challenge the assumption that the gas behaved ideally during this process?",
    "explanation": "Ideal isothermal behavior requires PV constant, predicting pressure 4P/3 at volume 3V/4. A large deviation there would directly challenge the model.",
    "options": [
      "The final pressure is close to 2P",
      "At an intermediate volume 3V/4, the measured pressure is far from 4P/3",
      "The temperature remains constant",
      "The amount of gas remains fixed"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-038",
    "section": "REAP",
    "topic": "Scientific inference and experiment reasoning",
    "difficulty": "medium",
    "question": "A radioactive sample is counted for equal one-minute intervals and gives 820, 620, 470 and 360 counts. A separate background measurement is 100 counts per minute. Why should the background be subtracted before estimating the decay trend?",
    "explanation": "The observed count is sample plus background. Removing the approximately constant background better isolates the sample contribution.",
    "options": [
      "The detector records background events that are not produced by the sample",
      "Background subtraction increases the sample's true activity",
      "Radioactive decay stops below 100 counts",
      "The background changes the sample half-life"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-039",
    "section": "REAP",
    "topic": "Mathematical reasoning and novel application",
    "difficulty": "medium",
    "question": "A cubic polynomial has roots 1,2 and 4 and leading coefficient 1. What is its value at x=0?",
    "explanation": "The polynomial is (x-1)(x-2)(x-4). At x=0 its value is (-1)(-2)(-4)=-8.",
    "options": [
      "8",
      "-7",
      "7",
      "-8"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-040",
    "section": "REAP",
    "topic": "Scientific inference and experiment reasoning",
    "difficulty": "medium",
    "question": "In an interference experiment, changing one experimental setting doubles the spacing between adjacent bright fringes while wavelength and screen distance remain fixed. Which change is consistent with this observation?",
    "explanation": "Fringe spacing is beta=lambda D/d. With lambda and D fixed, doubling beta requires halving d.",
    "options": [
      "Halving the slit separation",
      "Doubling the slit separation",
      "Doubling both slit separation and wavelength",
      "Halving the screen distance"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-041",
    "section": "REAP",
    "topic": "Scientific inference and experiment reasoning",
    "difficulty": "medium",
    "question": "A reaction is monitored by measuring concentration of a reactant. The values are 1.00 M at 0 min, 0.50 M at 10 min and 0.25 M at 20 min. Which kinetic behavior is most strongly suggested over this interval?",
    "explanation": "The concentration halves every 10 minutes. A constant half-life is characteristic of first-order behavior.",
    "options": [
      "A constant amount consumed per minute, consistent with zero order",
      "A constant half-life, consistent with first-order decay",
      "A rate independent of concentration",
      "An increasing half-life"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-042",
    "section": "REAP",
    "topic": "Linguistic, code and mapping reasoning",
    "difficulty": "hard",
    "question": "In a small coded language, 'ka mi su' means 'three red stones', 'ka no su' means 'three blue stones', 'te no su' means 'five blue stones', and 'te no ra' means 'five blue cups'. Which phrase means 'three red cups'?",
    "explanation": "Comparing the phrases gives ka=three, mi=red, no=blue, te=five, su=stones and ra=cups. Therefore 'three red cups' is ka mi ra.",
    "options": [
      "ka mi ra",
      "te mi ra",
      "ka no ra",
      "mi ka su"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-043",
    "section": "REAP",
    "topic": "Data and described-graph interpretation",
    "difficulty": "hard",
    "question": "At equally spaced times, a cooling object has temperatures 90 C, 70 C and 55 C. Assume the excess temperature above a constant surrounding temperature is multiplied by the same factor in each interval. What surrounding temperature is implied by the data?",
    "explanation": "Let the surrounding temperature be S. A constant ratio requires (70-S)/(90-S)=(55-S)/(70-S). Thus (70-S)^2=(90-S)(55-S). Expanding gives S=10 C.",
    "options": [
      "10 C",
      "20 C",
      "30 C",
      "40 C"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-044",
    "section": "REAP",
    "topic": "Scientific inference and experiment reasoning",
    "difficulty": "hard",
    "question": "For a weak monoprotic acid at concentration c, the molar conductivity is 78 units and the limiting molar conductivity is 390 units. After tenfold dilution, the molar conductivity is 156 units. Using alpha approximately equal to Lambda_m/Lambda_m^0 and K approximately equal to c alpha^2/(1-alpha), which conclusion follows?",
    "explanation": "Initially alpha=78/390=0.20, so K1 is approximately c(0.20)^2/0.80=0.05c. After dilution alpha=156/390=0.40 and concentration is c/10, so K2 is approximately (c/10)(0.40)^2/0.60=0.0267c. The estimates differ, so the measurements and approximations are not mutually consistent with one constant K.",
    "options": [
      "The second estimate of K is exactly twice the first",
      "K must be zero after dilution",
      "The two estimates of K disagree, so the data are not mutually consistent with one constant K under these approximations",
      "The acid necessarily becomes a strong electrolyte after dilution"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-045",
    "section": "REAP",
    "topic": "Mathematical reasoning and novel application",
    "difficulty": "easy",
    "question": "For every integer n, the number n^2+n is even. Which observation proves this directly?",
    "explanation": "n^2+n=n(n+1). The factors n and n+1 are consecutive integers, so one of them must be even. Their product is therefore even.",
    "options": [
      "n^2 is always even",
      "n+1 is always even",
      "n and n+1 are consecutive, so one is even",
      "Every integer is divisible by 2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-046",
    "section": "REAP",
    "topic": "Mathematical reasoning and novel application",
    "difficulty": "medium",
    "question": "A number is transformed repeatedly by the rule x -> 3x+1. Starting from 2, which of the following values can appear after exactly three transformations?",
    "explanation": "2 -> 7 -> 22 -> 67, so after three transformations the value is 67.",
    "options": [
      "22",
      "67",
      "46",
      "64"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-047",
    "section": "REAP",
    "topic": "Mathematical reasoning and novel application",
    "difficulty": "hard",
    "question": "What is the smallest integer n such that every choice of n distinct integers from 1 through 30 must contain two whose sum is divisible by 10?",
    "explanation": "Group residues modulo 10 into complementary pairs (1,9), (2,8), (3,7), (4,6), plus self-complementary residues 0 and 5. To avoid a divisible-by-10 pair, choose numbers from at most one residue class in each complementary pair, giving at most 4x3=12 numbers, and at most one number each from residues 0 and 5. Thus 14 can avoid such a pair, while any 15 force one.",
    "options": [
      "13",
      "14",
      "16",
      "15"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-048",
    "section": "REAP",
    "topic": "Data and described-graph interpretation",
    "difficulty": "medium",
    "question": "In an experiment, measured output y changes from 3 to 6 when input x changes from 1 to 2, and from 6 to 12 when x changes from 2 to 4. Which statement is supported?",
    "explanation": "Doubling x from 1 to 2 doubles y, and doubling x from 2 to 4 again doubles y. This supports y proportional to x.",
    "options": [
      "y is proportional to x^2",
      "y is independent of x",
      "y is proportional to x over these measurements",
      "y is proportional to 1/x"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-049",
    "section": "REAP",
    "topic": "Multi-step combinatorial, probability and structured reasoning",
    "difficulty": "medium",
    "question": "Six different samples are to be assigned to two labeled trays, three samples per tray. How many assignments are possible?",
    "explanation": "Choose the 3 samples for the first labeled tray in C(6,3)=20 ways; the rest go to the second tray.",
    "options": [
      "20",
      "10",
      "40",
      "120"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  },
  {
    "id": "iiit-hyderabad-ugee-2026-reap-sectional-01-050",
    "section": "REAP",
    "topic": "Constraint, pattern and logical reasoning",
    "difficulty": "hard",
    "question": "A five-bit register starts at 00000. A move flips two bits whose positions differ by exactly 2, so the allowed pairs are (1,3), (2,4), and (3,5). Which state is unreachable after any number of moves?",
    "explanation": "Each move flips either two odd-position bits or two even-position bits. Therefore the parity of the number of 1s on odd positions and the parity on even positions are separately invariant and both start even. State 11000 has one 1 on odd positions and one on even positions, so both parities are odd and it is unreachable. The other listed states are reachable.",
    "options": [
      "00000",
      "10100",
      "01010",
      "11000"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 2,
    "negativeMarking": 0.5,
    "source": {
      "kind": "original",
      "reference": "Original TakeMockTest question aligned to IIIT Hyderabad UGEE 2026 REAP critical and creative reasoning emphasis and current official sample style",
      "url": "https://ugadmissions.iiit.ac.in/ugee/",
      "checkedOn": "2026-08-19"
    }
  }
];
