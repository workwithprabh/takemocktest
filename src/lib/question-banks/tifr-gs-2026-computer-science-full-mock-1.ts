import type { Question } from '../questions';

// Frozen Main Brain handoff content, integrated mechanically on 8 September
// 2026. TIFR GS 2026 Computer Science route, the 30 score-bearing questions of Parts A and B.
// Records are copied field-for-field from the approved package; stems,
// options, answer keys, explanations, sections, difficulty, marking and
// source metadata are not rewritten here.

export const TIFR_GS_2026_COMPUTER_SCIENCE_FULL_MOCK_1: Question[] = [
  {
    "id": "tifr-gs-2026-common-001",
    "section": "Part A Common",
    "topic": "Combinatorial reasoning",
    "difficulty": "medium",
    "question": "A 6-character code uses exactly three A symbols, two B symbols, and one C symbol. How many distinct codes are possible?",
    "options": [
      "60",
      "120",
      "30",
      "20",
      "90"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The number of distinct permutations of the multiset is 6!/(3!2!1!) = 60.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-common-002",
    "section": "Part A Common",
    "topic": "Combinatorial probability",
    "difficulty": "hard",
    "question": "Three distinct cards are chosen uniformly from cards labelled 1 through 8. What is the probability that their sum is even and exactly one chosen number is a multiple of 3?",
    "options": [
      "3/14",
      "15/56",
      "5/16",
      "9/28",
      "3/8"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are C(8,3)=56 equally likely triples. If 3 is the unique multiple of 3 chosen, the other two must have odd sum: one from {1,5,7} and one from {2,4,8}, giving 9 triples. If 6 is the unique multiple of 3, the other two must have even sum: either two of the three odd nonmultiples or two of the three even nonmultiples, giving C(3,2)+C(3,2)=6. Thus 15 triples qualify, so the probability is 15/56.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-common-003",
    "section": "Part A Common",
    "topic": "Number theory",
    "difficulty": "hard",
    "question": "How many integers n with 1 ≤ n ≤ 500 satisfy gcd(n,30)=1?",
    "options": [
      "134",
      "133",
      "132",
      "136",
      "128"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are 16 complete blocks of length 30, each contributing phi(30)=8 values, giving 128. The remainder 481–500 corresponds to residues 1–20; six of them (1,7,11,13,17,19) are coprime to 30. Total 134.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-common-004",
    "section": "Part A Common",
    "topic": "Logic",
    "difficulty": "medium",
    "question": "Exactly one of the statements P, Q, R is true. In addition, P implies Q. Which statement must be false?",
    "options": [
      "Q",
      "R",
      "Q and R",
      "P",
      "None of P,Q,R is forced false"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "If P were true, P→Q would force Q true, contradicting that exactly one statement is true. Hence P must be false.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-common-005",
    "section": "Part A Common",
    "topic": "Recursive sequences",
    "difficulty": "medium",
    "question": "A sequence is defined by a1 = 4 and a(n+1) = a(n) + d(a(n)), where d(m) is the number of positive divisors of m. What is a6?",
    "options": [
      "20",
      "21",
      "22",
      "23",
      "24"
    ],
    "correctIndex": 4,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "d(4)=3, d(7)=2, d(9)=3, d(12)=6 and d(18)=6. Hence the sequence begins 4, 7, 9, 12, 18, 24, so a6=24.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-common-006",
    "section": "Part A Common",
    "topic": "Graph reasoning",
    "difficulty": "medium",
    "question": "A connected undirected graph has 10 vertices and 12 edges. If exactly three edges are removed and the resulting graph is still connected, how many independent cycles does the resulting graph have?",
    "options": [
      "1",
      "0",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "After removal there are 9 edges. A connected graph on 10 vertices with 9 edges is a tree, whose cycle rank E−V+1 is 0.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-common-007",
    "section": "Part A Common",
    "topic": "Functional reasoning",
    "difficulty": "medium",
    "question": "An affine function T(x)=ax+b satisfies T(2)=7 and T(5)=16. What is T(T(1))?",
    "options": [
      "10",
      "13",
      "12",
      "15",
      "16"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "From T(5)-T(2)=3a=9, a=3. Then 2a+b=7 gives b=1. Thus T(1)=4 and T(T(1))=T(4)=13.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-common-008",
    "section": "Part A Common",
    "topic": "Set reasoning",
    "difficulty": "medium",
    "question": "In a group of 80 people, 46 know Python, 38 know R, and 12 know neither language. How many know both Python and R?",
    "options": [
      "12",
      "14",
      "16",
      "18",
      "20"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The union has 80−12=68 people. By inclusion–exclusion, both =46+38−68=16.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-common-009",
    "section": "Part A Common",
    "topic": "Vector geometry",
    "difficulty": "hard",
    "question": "From the origin O, adjacent sides of a parallelogram are the vectors u=(3,1) and v=(1,4). A point P divides the diagonal from O to u+v internally in the ratio OP:P(u+v)=2:1. What is the area of the triangle with vertices u, v and P?",
    "options": [
      "11/3",
      "22/3",
      "11/6",
      "11/2",
      "22/9"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The diagonal endpoint is u+v=(4,5), so P=(2/3)(4,5)=(8/3,10/3). Using u=(3,1), the vectors v-u=(-2,3) and P-u=(-1/3,7/3). Their determinant has magnitude |(-2)(7/3)-3(-1/3)|=11/3. Triangle area is half of this, 11/6.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-common-010",
    "section": "Part A Common",
    "topic": "Counting",
    "difficulty": "medium",
    "question": "How many 4-digit positive integers have strictly increasing digits from left to right?",
    "options": [
      "210",
      "84",
      "120",
      "70",
      "126"
    ],
    "correctIndex": 4,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A strictly increasing 4-digit number cannot contain 0 because 0 would have to be first. Choose any 4 digits from 1,…,9; each choice has exactly one increasing arrangement. Thus C(9,4)=126.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-common-011",
    "section": "Part A Common",
    "topic": "Conditional probability",
    "difficulty": "hard",
    "question": "Two distinct cards are drawn uniformly from cards labelled 1, 2, 3, 4 and 5. Given that the product of the two labels is even, what is the probability that their sum exceeds 5?",
    "options": [
      "4/7",
      "3/7",
      "1/2",
      "5/7",
      "2/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "There are C(5,2)=10 unordered pairs. A product is odd only when both cards are from {1,3,5}, giving C(3,2)=3 pairs, so 7 pairs satisfy the condition. Among these, the pairs with sum above 5 are {2,4}, {2,5}, {3,4} and {4,5}, four pairs. The conditional probability is 4/7.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-common-012",
    "section": "Part A Common",
    "topic": "Discrete process reasoning",
    "difficulty": "hard",
    "question": "Nine vertices labelled 0, 1, ..., 8 lie on a directed cycle in clockwise order. A token starts at vertex 0. On each of exactly seven moves it advances clockwise by either one edge or two edges. After the seventh move it must be back at vertex 0, and it must have visited vertex 4 at least once before returning. How many move sequences satisfy these conditions?",
    "options": [
      "5",
      "10",
      "15",
      "21",
      "16"
    ],
    "correctIndex": 4,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Across seven moves the total clockwise distance is between 7 and 14. Returning to 0 on a 9-cycle therefore forces total distance 9, so exactly two moves have length 2 and the other five have length 1. There are C(7,2)=21 such sequences. Because the cumulative distance rises from 0 to 9, vertex 4 is missed only if a length-2 move jumps from cumulative distance 3 to 5. If the distance 3 is reached by 1+1+1, the crossing 2 is followed by three moves containing the other length-2 move, giving 3 sequences. If distance 3 is reached by 1+2 or 2+1, the crossing move is the second length-2 move, giving 2 more sequences. Thus 5 sequences miss vertex 4, and 21-5=16 visit it.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-common-013",
    "section": "Part A Common",
    "topic": "Discrete process reasoning",
    "difficulty": "easy",
    "question": "A counter starts at 0. Each operation either adds 4 or adds 7. Exactly five operations are performed, and each type of operation is used at least once. How many distinct final counter values are possible?",
    "options": [
      "3",
      "5",
      "4",
      "6",
      "7"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "If the +7 operation is used k times, then k can be 1,2,3 or 4. The final value is 7k+4(5-k)=20+3k, producing four distinct values. Hence there are 4 possible final values.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-common-014",
    "section": "Part A Common",
    "topic": "Logical consistency",
    "difficulty": "hard",
    "question": "Three switches A, B, C are each either ON or OFF. The following conditions hold: if A is ON then B is OFF; if B is OFF then C is ON; and C is OFF. Which switch state is forced?",
    "options": [
      "A is ON",
      "B is OFF",
      "B is ON and A is ON",
      "A is OFF",
      "No switch state is forced"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Since C is OFF, the implication “if B is OFF then C is ON” means B cannot be OFF, so B is ON. If A were ON then B would be OFF, contradiction. Therefore A is forced OFF.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-common-015",
    "section": "Part A Common",
    "topic": "Expected value",
    "difficulty": "medium",
    "question": "A game pays ₹8 with probability 1/4, pays ₹2 with probability 1/2, and loses ₹4 with probability 1/4. What is the expected net payoff?",
    "options": [
      "₹1",
      "₹3",
      "₹2.50",
      "₹2",
      "₹0"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Expected payoff =8(1/4)+2(1/2)−4(1/4)=2+1−1=₹2.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-computer-science-001",
    "section": "Part B Computer Science",
    "topic": "Discrete Mathematics",
    "difficulty": "medium",
    "question": "A reciprocal-token system defines a relation R on user IDs: uRv means u and v exchanged matching tokens. The system guarantees R is both symmetric and antisymmetric. A log entry shows uRv. What must follow?",
    "options": [
      "u and v are the same user ID",
      "R contains no pairs at all",
      "Every user ID is related to itself",
      "Every pair of user IDs is related",
      "R must be transitive"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Symmetry gives vRu whenever uRv. Antisymmetry then forces u=v, so any recorded related pair must lie on the diagonal.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-computer-science-002",
    "section": "Part B Computer Science",
    "topic": "Automata Theory",
    "difficulty": "medium",
    "question": "Which language over {0,1} is regular?",
    "options": [
      "{0^n1^n : n≥0}",
      "Strings containing an even number of 1s",
      "Palindromes over {0,1}",
      "{ww : w∈{0,1}*}",
      "Strings with equal numbers of 0s and 1s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Parity of the number of 1s is tracked by a two-state DFA. The other listed languages require unbounded matching/counting and are not regular.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-computer-science-003",
    "section": "Part B Computer Science",
    "topic": "Algorithms",
    "difficulty": "medium",
    "question": "A comparison-based sorting algorithm is guaranteed to use O(n log n) comparisons in the worst case and is stable in its standard array implementation. Which algorithm fits both properties?",
    "options": [
      "Merge sort",
      "Heap sort",
      "Quick sort with first-element pivot",
      "Selection sort",
      "Insertion sort"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Merge sort has worst-case O(n log n) comparisons and can be implemented stably on arrays. Heap/selection are not stable; insertion is O(n²) worst case; standard quicksort is O(n²) worst case.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-computer-science-004",
    "section": "Part B Computer Science",
    "topic": "Data Structures",
    "difficulty": "medium",
    "question": "A binary min-heap contains distinct keys. Which operation can be implemented in O(log n) worst-case time?",
    "options": [
      "Find the maximum element",
      "Search for an arbitrary specified key",
      "Print all keys in sorted order",
      "Delete the minimum element",
      "Find the median key"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Deleting the root and restoring heap order takes O(log n). The other tasks generally require scanning many elements or more work.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-computer-science-005",
    "section": "Part B Computer Science",
    "topic": "Computability",
    "difficulty": "hard",
    "question": "Suppose L is decidable. Which language is necessarily decidable?",
    "options": [
      "An arbitrary superset of L",
      "An arbitrary subset of L",
      "The halting problem",
      "Every recursively enumerable language",
      "The complement of L"
    ],
    "correctIndex": 4,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A decider for L can be complemented by swapping accept and reject outcomes, so the complement is decidable. None of the other classes listed is guaranteed decidable.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-computer-science-006",
    "section": "Part B Computer Science",
    "topic": "Graph Algorithms",
    "difficulty": "medium",
    "question": "For a connected weighted undirected graph with distinct edge weights, which statement is true?",
    "options": [
      "Every shortest-path tree is unique",
      "The minimum spanning tree is unique",
      "The minimum spanning tree must contain the globally lightest edge only if that edge is incident to a leaf",
      "Prim and Kruskal can return different total weights",
      "The heaviest edge is never in the minimum spanning tree"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Distinct edge weights imply a unique MST by the cut/cycle properties. The globally lightest edge is always safe; the heaviest edge may be required if it is a bridge.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-computer-science-007",
    "section": "Part B Computer Science",
    "topic": "Programming Languages",
    "difficulty": "medium",
    "question": "In lexical scoping, the binding of a free variable reference inside a function is determined primarily by",
    "options": [
      "the most recent caller at run time",
      "the program text surrounding the function definition",
      "the current call-stack depth",
      "the value stored in the variable",
      "the order in which functions return"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Lexical (static) scope resolves names using the syntactic nesting of definitions, unlike dynamic scope which uses the call chain.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-computer-science-008",
    "section": "Part B Computer Science",
    "topic": "Compilers",
    "difficulty": "hard",
    "question": "In an LR parser, a shift-reduce conflict means the parsing table contains a state/lookahead entry for which the parser could",
    "options": [
      "reduce by two different productions only",
      "accept or reject without reading input",
      "either shift the lookahead token or reduce by a production",
      "shift two different tokens simultaneously",
      "expand a nonterminal top-down in two ways"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "A shift-reduce conflict is precisely the ambiguity between shifting the current lookahead and applying a reduction in the same table entry.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-computer-science-009",
    "section": "Part B Computer Science",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "Which condition is necessary for deadlock in the classic Coffman characterization?",
    "options": [
      "Preemption is always possible",
      "Every resource has multiple instances",
      "All processes are CPU-bound",
      "Scheduling is round-robin",
      "Circular wait"
    ],
    "correctIndex": 4,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Deadlock requires mutual exclusion, hold-and-wait, no preemption, and circular wait. The other options are not necessary conditions.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-computer-science-010",
    "section": "Part B Computer Science",
    "topic": "Concurrency",
    "difficulty": "hard",
    "question": "Two threads execute x = x + 1 once each on a shared integer x initially 0, with no synchronization. Assuming each increment is a non-atomic read-modify-write sequence, which final value is possible?",
    "options": [
      "0",
      "3",
      "4",
      "-1",
      "1"
    ],
    "correctIndex": 4,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Both threads may read 0 before either writes, then each writes 1. Thus a lost update makes final x=1 possible; x=2 is also possible but is not listed.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-computer-science-011",
    "section": "Part B Computer Science",
    "topic": "Digital Circuits",
    "difficulty": "medium",
    "question": "A 4-bit two’s-complement adder computes 0111 + 0001. The 4-bit result is 1000. What occurred?",
    "options": [
      "Signed overflow",
      "Unsigned carry-out without signed overflow",
      "No overflow of either interpretation",
      "A borrow",
      "Saturation to the maximum positive value"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "7+1=8 is outside the signed 4-bit range −8…7. Two positive operands produced a negative-sign result, which signals signed overflow.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-computer-science-012",
    "section": "Part B Computer Science",
    "topic": "Databases",
    "difficulty": "medium",
    "question": "A relation schema R(A,B,C) has functional dependencies A→B and B→C. If A is a candidate key, which normal-form issue can still occur if B is not a superkey and C is non-prime?",
    "options": [
      "Violation of 1NF only",
      "No violation because A is a key",
      "Violation of BCNF and 3NF due to B→C",
      "Only a multivalued-dependency violation",
      "Only a join-dependency violation"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "B→C is nontrivial, B is not a superkey, and C is non-prime. This violates BCNF and also 3NF.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-computer-science-013",
    "section": "Part B Computer Science",
    "topic": "Logic",
    "difficulty": "hard",
    "question": "Which formula is logically equivalent to ¬(P → Q)?",
    "options": [
      "¬P ∧ Q",
      "¬P ∨ Q",
      "P ∧ ¬Q",
      "P ∨ ¬Q",
      "P ↔ Q"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P→Q is equivalent to ¬P∨Q. Negating gives P∧¬Q.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-computer-science-014",
    "section": "Part B Computer Science",
    "topic": "Algorithms",
    "difficulty": "hard",
    "question": "For a directed acyclic graph, a topological ordering can be found in O(V+E) time by repeatedly",
    "options": [
      "removing a vertex of maximum outdegree",
      "contracting the lightest edge",
      "running Dijkstra from every source",
      "removing a vertex of indegree zero and deleting its outgoing edges",
      "sorting vertices by label"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Kahn’s algorithm repeatedly processes indegree-zero vertices; each vertex and edge is handled O(1) times, giving O(V+E).",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
  {
    "id": "tifr-gs-2026-computer-science-015",
    "section": "Part B Computer Science",
    "topic": "Formal Languages",
    "difficulty": "medium",
    "question": "Which grammar rule form is compatible with a context-free grammar?",
    "options": [
      "AB → BA",
      "aA → Aa",
      "AB → a",
      "A → aAbB",
      "εA → A"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "In a CFG each production has exactly one nonterminal on the left. A→aAbB satisfies that requirement.",
    "source": {
      "kind": "original",
      "reference": "TIFR CS/LIDS syllabus and exam instructions + GS-2026 official paper",
      "url": "https://www.tifr.res.in/academics/docs/CS_LIDS_syllabus_exam_instructions.pdf",
      "checkedOn": "2026-09-07"
    }
  },
];
