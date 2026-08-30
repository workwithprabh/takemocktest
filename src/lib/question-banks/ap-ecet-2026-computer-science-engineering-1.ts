import type { Question } from '../questions';

export const AP_ECET_2026_COMPUTER_SCIENCE_ENGINEERING_1: Question[] = [
  {
    "id": "ap-ecet-2026-cs-001",
    "section": "Computer Science and Engineering",
    "topic": "Digital Electronics",
    "difficulty": "easy",
    "question": "The hexadecimal number 3A is equal to which binary number?",
    "options": [
      "00111010",
      "00111100",
      "00110110",
      "00101011"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Hex 3 is 0011 and hex A is 1010, so 3A = 00111010.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-002",
    "section": "Computer Science and Engineering",
    "topic": "Digital Electronics",
    "difficulty": "medium",
    "question": "Simplify the Boolean expression A'B + AB + AB'.",
    "options": [
      "A' + B",
      "A + B",
      "A + B'",
      "AB"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "AB+AB'=A(B+B')=A. Then A+A'B=(A+A')(A+B)=A+B.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-003",
    "section": "Computer Science and Engineering",
    "topic": "Digital Electronics",
    "difficulty": "medium",
    "question": "For a full adder with inputs A=1, B=1 and Cin=0, the Sum and Carry outputs are",
    "options": [
      "Sum=1, Carry=0",
      "Sum=1, Carry=1",
      "Sum=0, Carry=1",
      "Sum=0, Carry=0"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "1+1+0 in binary is 10, so sum bit is 0 and carry is 1.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-004",
    "section": "Computer Science and Engineering",
    "topic": "Digital Electronics",
    "difficulty": "easy",
    "question": "A JK flip-flop with J=1 and K=1 will, on the active clock edge,",
    "options": [
      "always set",
      "hold its previous output",
      "always reset",
      "toggle its output"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a JK flip-flop, J=K=1 is the toggle condition.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-005",
    "section": "Computer Science and Engineering",
    "topic": "Digital Electronics",
    "difficulty": "medium",
    "question": "What is the minimum number of flip-flops required for a binary counter that must represent 12 distinct states?",
    "options": [
      "4",
      "3",
      "12",
      "5"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Three flip-flops provide only 2^3=8 states, while four provide 16, enough for 12 states.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-006",
    "section": "Computer Science and Engineering",
    "topic": "Digital Electronics",
    "difficulty": "medium",
    "question": "A 4-to-1 multiplexer has data inputs D0=0, D1=1, D2=1, D3=0. If select lines S1S0=10, the output is",
    "options": [
      "undefined",
      "1",
      "0",
      "the complement of D2"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Select code 10 chooses D2, whose value is 1.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-007",
    "section": "Computer Science and Engineering",
    "topic": "Software Engineering",
    "difficulty": "medium",
    "question": "A prototype is built before detailed design mainly to clarify uncertain user-interface requirements. What is the strongest reason for doing this?",
    "options": [
      "to eliminate the need for requirements documentation",
      "to replace all testing with demonstrations",
      "to obtain early user feedback on unclear requirements",
      "to guarantee that no later change will occur"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A prototype lets users react to an early representation of the system, helping the team discover and refine unclear requirements before committing to detailed design.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-008",
    "section": "Computer Science and Engineering",
    "topic": "Software Engineering",
    "difficulty": "medium",
    "question": "A project has path A(3 days) -> B(5 days) -> D(2 days), while independent activity C(6 days) also must finish before D can start. What is the minimum project duration?",
    "options": [
      "8 days",
      "11 days",
      "16 days",
      "10 days"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Path A->B reaches D after 8 days; C finishes after 6 days. D starts at day 8 and takes 2 days, so total duration is 10 days.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-009",
    "section": "Computer Science and Engineering",
    "topic": "Software Engineering",
    "difficulty": "medium",
    "question": "Which statement best describes a good Software Requirements Specification (SRS)?",
    "options": [
      "It should be unambiguous, verifiable and internally consistent",
      "It should be changed only after coding is complete",
      "It should contain source code for every module",
      "It should avoid all measurable acceptance criteria"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A useful SRS clearly states requirements so they can be understood and tested without contradiction.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-010",
    "section": "Computer Science and Engineering",
    "topic": "Software Engineering",
    "difficulty": "medium",
    "question": "A module's cyclomatic complexity is 5. What is the minimum number of linearly independent execution paths needed for basis-path testing?",
    "options": [
      "6",
      "5",
      "4",
      "10"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Cyclomatic complexity gives the number of linearly independent paths through the module, so a complexity of 5 requires five basis paths.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-011",
    "section": "Computer Science and Engineering",
    "topic": "Software Engineering",
    "difficulty": "medium",
    "question": "Testing an individual function in isolation is primarily",
    "options": [
      "system testing",
      "acceptance testing",
      "unit testing",
      "installation testing"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Unit testing checks the smallest testable program components in isolation.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-012",
    "section": "Computer Science and Engineering",
    "topic": "Software Engineering",
    "difficulty": "easy",
    "question": "Changing software so that it works on a new operating-system version is mainly an example of",
    "options": [
      "requirements elicitation",
      "perfective maintenance only",
      "preventive testing only",
      "adaptive maintenance"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Adaptive maintenance modifies software to remain usable in a changed environment.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-013",
    "section": "Computer Science and Engineering",
    "topic": "Computer Organisation and Microprocessors",
    "difficulty": "easy",
    "question": "During a memory-read operation, which bus carries the address of the memory location that the CPU wants to access?",
    "options": [
      "address bus",
      "power bus",
      "control bus only",
      "data bus only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The CPU places the target memory address on the address bus; the data bus carries the value being transferred and control signals indicate the operation.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-014",
    "section": "Computer Science and Engineering",
    "topic": "Computer Organisation and Microprocessors",
    "difficulty": "medium",
    "question": "In 8-bit two's-complement representation, the decimal value of 11110110 is",
    "options": [
      "246",
      "-10",
      "10",
      "-118"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Invert 11110110 to 00001001 and add 1 to get 00001010=10, so the signed value is -10.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-015",
    "section": "Computer Science and Engineering",
    "topic": "Computer Organisation and Microprocessors",
    "difficulty": "medium",
    "question": "Adding 01111100 and 00001010 as 8-bit signed two's-complement numbers produces",
    "options": [
      "an exact result of -118 with no overflow",
      "zero",
      "signed overflow",
      "a carry that proves the result is valid"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "124+10=134 is outside the 8-bit signed range -128 to 127. Two positive operands produce a negative sign bit, indicating overflow.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-016",
    "section": "Computer Science and Engineering",
    "topic": "Computer Organisation and Microprocessors",
    "difficulty": "medium",
    "question": "A byte-addressable memory has 16 address lines. Its maximum directly addressable capacity is",
    "options": [
      "16 KB",
      "32 KB",
      "128 KB",
      "64 KB"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Sixteen address lines select 2^16 byte locations = 65536 bytes = 64 KB.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-017",
    "section": "Computer Science and Engineering",
    "topic": "Computer Organisation and Microprocessors",
    "difficulty": "medium",
    "question": "A direct-mapped cache has 8 lines numbered 0 to 7. Memory block 21 maps to which cache line?",
    "options": [
      "5",
      "6",
      "2",
      "7"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For direct mapping, cache line = block number mod number of lines. Thus 21 mod 8 = 5.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-018",
    "section": "Computer Science and Engineering",
    "topic": "Computer Organisation and Microprocessors",
    "difficulty": "medium",
    "question": "DMA is useful because it allows",
    "options": [
      "memory to operate without addresses",
      "an I/O device to transfer blocks to or from memory with limited CPU intervention",
      "the CPU to execute only arithmetic instructions",
      "all interrupts to be permanently disabled"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Direct Memory Access transfers data between I/O and memory without the CPU handling each byte/word.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-019",
    "section": "Computer Science and Engineering",
    "topic": "Computer Organisation and Microprocessors",
    "difficulty": "hard",
    "question": "In 8086 real-mode addressing, if the segment register contains 1200H and the offset is 0340H, the physical address is",
    "options": [
      "12034H",
      "15340H",
      "12340H",
      "03400H"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Physical address = segment x 10H + offset = 12000H + 0340H = 12340H.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-020",
    "section": "Computer Science and Engineering",
    "topic": "Computer Organisation and Microprocessors",
    "difficulty": "easy",
    "question": "Pipelining improves processor throughput mainly by",
    "options": [
      "removing the need for memory",
      "making every instruction use one transistor",
      "eliminating all branches",
      "overlapping stages of multiple instructions"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Different pipeline stages work on different instructions simultaneously, increasing completed instructions per unit time.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-021",
    "section": "Computer Science and Engineering",
    "topic": "Data Structures through C",
    "difficulty": "easy",
    "question": "For int a[5] = {2,4,6,8,10}; what is the value of *(a+3) in C?",
    "options": [
      "8",
      "10",
      "the address of a[3]",
      "6"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Array name a points to a[0]; adding 3 points to a[3], whose stored value is 8.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-022",
    "section": "Computer Science and Engineering",
    "topic": "Data Structures through C",
    "difficulty": "medium",
    "question": "Using binary search on a sorted array of 32 elements, the worst-case number of key comparisons is at most",
    "options": [
      "5",
      "6",
      "16",
      "32"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Binary search needs floor(log2 n)+1 comparisons in the worst case for n=32, giving 5+1=6.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-023",
    "section": "Computer Science and Engineering",
    "topic": "Data Structures through C",
    "difficulty": "medium",
    "question": "Which sorting method repeatedly selects the smallest remaining element and places it in the next position?",
    "options": [
      "quick sort",
      "merge sort",
      "selection sort",
      "radix sort"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Selection sort scans the unsorted part to select its minimum and places it at the boundary.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-024",
    "section": "Computer Science and Engineering",
    "topic": "Data Structures through C",
    "difficulty": "medium",
    "question": "In a singly linked list, inserting a new node immediately after a known node p requires the essential pointer updates",
    "options": [
      "p->next = NULL only",
      "new->next = p; p = NULL",
      "p = new; new = p->next",
      "new->next = p->next; p->next = new"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The new node must first point to p's former successor, then p must point to the new node.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-025",
    "section": "Computer Science and Engineering",
    "topic": "Data Structures through C",
    "difficulty": "easy",
    "question": "Which data structure is naturally used to implement function-call nesting?",
    "options": [
      "stack",
      "queue",
      "hashless table",
      "undirected graph"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Function calls follow last-in, first-out behavior, which is modeled by a stack.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-026",
    "section": "Computer Science and Engineering",
    "topic": "Data Structures through C",
    "difficulty": "medium",
    "question": "What is the postfix form of the infix expression A*(B+C)?",
    "options": [
      "AB*C+",
      "ABC+*",
      "ABC*+",
      "A*BC+"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The parentheses give B C + first, then multiply by A: A B C + *.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-027",
    "section": "Computer Science and Engineering",
    "topic": "Data Structures through C",
    "difficulty": "medium",
    "question": "A circular queue of size 5 uses indices 0 to 4. If rear=4 and one new element is inserted into a non-full queue, the new rear index becomes",
    "options": [
      "5",
      "1",
      "0",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Circular indexing advances as (rear+1) mod 5, so (4+1) mod 5=0.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-028",
    "section": "Computer Science and Engineering",
    "topic": "Data Structures through C",
    "difficulty": "medium",
    "question": "A binary tree has 7 nodes. What is the minimum possible height in levels, counting the root as level 1?",
    "options": [
      "2",
      "7",
      "4",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A binary tree with 2 levels can hold at most 3 nodes; with 3 levels it can hold up to 7, so minimum height is 3 levels.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-029",
    "section": "Computer Science and Engineering",
    "topic": "Data Structures through C",
    "difficulty": "medium",
    "question": "In a binary search tree, inserting keys 40, 20, 60, 10, 30 in that order makes the parent of key 30",
    "options": [
      "20",
      "40",
      "60",
      "10"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "30<40 so go left to 20; 30>20 so it becomes the right child of 20.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-030",
    "section": "Computer Science and Engineering",
    "topic": "Data Structures through C",
    "difficulty": "hard",
    "question": "Evaluate the postfix expression 8 3 2 * + 5 -.",
    "options": [
      "4",
      "9",
      "25",
      "11"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "3*2=6, then 8+6=14, then 14-5=9.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-031",
    "section": "Computer Science and Engineering",
    "topic": "Computer Networks & Cyber Security",
    "difficulty": "easy",
    "question": "In a star LAN, failure of one end-device cable normally",
    "options": [
      "turns the topology into a ring",
      "changes all IP addresses automatically",
      "disconnects only that end device",
      "breaks every link in the LAN"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Each device has its own link to the central device, so one access cable failure affects that node only.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-032",
    "section": "Computer Science and Engineering",
    "topic": "Computer Networks & Cyber Security",
    "difficulty": "medium",
    "question": "Which network device forwards Ethernet frames primarily by learning and using destination MAC addresses?",
    "options": [
      "repeater",
      "router using only IP addresses",
      "modem",
      "switch"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "An Ethernet switch learns MAC addresses on its ports and forwards frames using its MAC address table; routers make Layer-3 forwarding decisions using network-layer addresses.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-033",
    "section": "Computer Science and Engineering",
    "topic": "Computer Networks & Cyber Security",
    "difficulty": "hard",
    "question": "A host has IPv4 address 192.168.10.70 with subnet mask 255.255.255.192. What is its network address?",
    "options": [
      "192.168.10.64",
      "192.168.10.128",
      "192.168.10.0",
      "192.168.10.70"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The /26 mask gives blocks of 64 addresses: 0-63, 64-127, etc. Address 70 lies in the 64-127 block, so network address is .64.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-034",
    "section": "Computer Science and Engineering",
    "topic": "Computer Networks & Cyber Security",
    "difficulty": "medium",
    "question": "Which statement correctly distinguishes TCP from UDP?",
    "options": [
      "UDP requires a connection setup handshake",
      "TCP is connection-oriented and provides reliable ordered delivery; UDP does not guarantee this",
      "UDP always retransmits lost segments",
      "TCP has no headers"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "TCP establishes a connection and manages reliability/ordering, while UDP is connectionless and best-effort.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-035",
    "section": "Computer Science and Engineering",
    "topic": "Computer Networks & Cyber Security",
    "difficulty": "easy",
    "question": "Which service translates domain names such as example.com into IP addresses?",
    "options": [
      "FTP",
      "DHCP relay only",
      "DNS",
      "ARP"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The Domain Name System resolves host/domain names to IP addresses.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-036",
    "section": "Computer Science and Engineering",
    "topic": "Computer Networks & Cyber Security",
    "difficulty": "medium",
    "question": "Encrypting the same plaintext with a secret key so that only holders of that same key can decrypt it is",
    "options": [
      "digital compression",
      "public hashing only",
      "plain-text routing",
      "symmetric-key encryption"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Symmetric encryption uses the same shared secret key for encryption and decryption.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-037",
    "section": "Computer Science and Engineering",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "question": "A process that is waiting for CPU time but has all other required resources is in the",
    "options": [
      "ready state",
      "terminated state",
      "running state",
      "blocked state for I/O"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A ready process can run as soon as the scheduler assigns it a CPU.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-038",
    "section": "Computer Science and Engineering",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "Three jobs arrive together with CPU bursts 4, 2 and 6 ms and are scheduled FCFS in that order. The average waiting time is",
    "options": [
      "14/3 ms",
      "10/3 ms",
      "2 ms",
      "4 ms"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Waiting times are 0,4,6 ms. Average=(0+4+6)/3=10/3 ms.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-039",
    "section": "Computer Science and Engineering",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "A binary semaphore initialized to 1 is commonly used to",
    "options": [
      "compress executable files",
      "translate virtual addresses",
      "provide mutual exclusion to a critical section",
      "increase disk capacity"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A binary semaphore can allow one process/thread at a time to enter a critical section.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-040",
    "section": "Computer Science and Engineering",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "Which is one of the necessary Coffman conditions for deadlock?",
    "options": [
      "all resources must be shareable",
      "preemption must always be possible",
      "every process must be running",
      "circular wait"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Deadlock requires mutual exclusion, hold-and-wait, no preemption, and circular wait.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-041",
    "section": "Computer Science and Engineering",
    "topic": "Operating Systems",
    "difficulty": "hard",
    "question": "A system has 3 processes with remaining resource needs P1=4, P2=1, P3=3 units of one resource, and 2 units are currently available. Which process can definitely finish immediately under Banker's safety reasoning?",
    "options": [
      "P2",
      "none of them",
      "P3",
      "P1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A process can finish immediately if its remaining need is no more than the 2 available units. Only P2 needs 1; P1 needs 4 and P3 needs 3.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-042",
    "section": "Computer Science and Engineering",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "With page size 1024 bytes, the offset field of a logical address requires",
    "options": [
      "8 bits",
      "10 bits",
      "16 bits",
      "11 bits"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "1024=2^10, so 10 bits are needed to select a byte within a page.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-043",
    "section": "Computer Science and Engineering",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "For the page-reference string 1,2,3,1,4 with 3 empty frames and FIFO replacement, how many page faults occur?",
    "options": [
      "3",
      "2",
      "4",
      "5"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Faults occur for 1,2,3; reference 1 hits; reference 4 faults and replaces the oldest page. Total 4.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-044",
    "section": "Computer Science and Engineering",
    "topic": "Operating Systems",
    "difficulty": "hard",
    "question": "Disk requests are at tracks 40, 10 and 90. The head starts at track 50 and FCFS serves requests in the given order. Total head movement is",
    "options": [
      "80 tracks",
      "100 tracks",
      "160 tracks",
      "120 tracks"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "FCFS movement is |50-40|+|40-10|+|10-90|=10+30+80=120 tracks.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-045",
    "section": "Computer Science and Engineering",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "question": "Which file-allocation method stores each file as a chain of disk blocks that may be scattered?",
    "options": [
      "linked allocation",
      "contiguous allocation only",
      "fixed partitioning",
      "single-level indexing only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Linked allocation keeps pointers connecting a file's blocks, allowing noncontiguous placement.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-046",
    "section": "Computer Science and Engineering",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "Thrashing is most closely associated with",
    "options": [
      "a CPU executing too many arithmetic operations",
      "excessive paging caused by too few frames for active working sets",
      "a disk having no file names",
      "a compiler removing comments"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "When processes lack enough frames, page faults dominate execution and the system spends excessive time paging.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-047",
    "section": "Computer Science and Engineering",
    "topic": "DBMS",
    "difficulty": "easy",
    "question": "A primary key in a relation must be",
    "options": [
      "null in all rows",
      "duplicated in at least two rows",
      "unique and non-null for every row",
      "restricted to text values only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A primary key uniquely identifies each row and cannot be null.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-048",
    "section": "Computer Science and Engineering",
    "topic": "DBMS",
    "difficulty": "medium",
    "question": "Given Student(id, name, dept), which SQL query returns only the names of students in CSE?",
    "options": [
      "DELETE name FROM Student WHERE dept='CSE';",
      "SELECT * FROM Student GROUP BY name='CSE';",
      "SELECT dept FROM Student WHERE name='CSE';",
      "SELECT name FROM Student WHERE dept='CSE';"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The SELECT list chooses name and the WHERE condition filters rows whose dept is CSE.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-049",
    "section": "Computer Science and Engineering",
    "topic": "DBMS",
    "difficulty": "medium",
    "question": "Table Orders(cust, amount) contains rows (A,100), (B,50), (A,80). What does SELECT SUM(amount) FROM Orders WHERE cust='A'; return?",
    "options": [
      "180",
      "100",
      "230",
      "150"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Only A's rows are included: 100+80=180.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-050",
    "section": "Computer Science and Engineering",
    "topic": "DBMS",
    "difficulty": "medium",
    "question": "Which SQL operation combines rows from two tables based on a related column?",
    "options": [
      "COMMIT only",
      "JOIN",
      "DROP",
      "RENAME only"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A JOIN combines related rows according to a join condition.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-051",
    "section": "Computer Science and Engineering",
    "topic": "DBMS",
    "difficulty": "medium",
    "question": "In PL/SQL, which section is used to handle run-time exceptions?",
    "options": [
      "DECLARE keyword alone",
      "INDEX section",
      "EXCEPTION section",
      "TABLESPACE section"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "PL/SQL blocks can include an EXCEPTION section containing handlers for run-time errors.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-052",
    "section": "Computer Science and Engineering",
    "topic": "DBMS",
    "difficulty": "hard",
    "question": "A PL/SQL cursor is most useful when a query returns",
    "options": [
      "a single arithmetic operator",
      "no SQL statement at all",
      "only a compile-time constant",
      "multiple rows that must be processed one at a time"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "An explicit cursor lets a PL/SQL program fetch and process multiple query rows sequentially.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-053",
    "section": "Computer Science and Engineering",
    "topic": "DBMS",
    "difficulty": "easy",
    "question": "MongoDB primarily stores records as",
    "options": [
      "document-like BSON objects",
      "only two-dimensional numeric arrays",
      "CPU instructions",
      "fixed-width punched cards"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "MongoDB is a document database and stores BSON documents grouped in collections.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-054",
    "section": "Computer Science and Engineering",
    "topic": "DBMS",
    "difficulty": "medium",
    "question": "Which MongoDB query condition selects documents whose age field is greater than 18?",
    "options": [
      "{ age: 18 } only",
      "{ age: { $gt: 18 } }",
      "{ $age: { gt: 18 } }",
      "{ age: { $lt: 18 } }"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "MongoDB's $gt comparison operator means 'greater than'.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-055",
    "section": "Computer Science and Engineering",
    "topic": "Java Programming",
    "difficulty": "easy",
    "question": "Method overloading in Java means",
    "options": [
      "creating two packages with one name",
      "redefining a method with exactly the same signature in the same class",
      "using the same method name with different parameter lists",
      "running two threads with one object"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Overloading is resolved by the parameter list at compile time.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-056",
    "section": "Computer Science and Engineering",
    "topic": "Java Programming",
    "difficulty": "medium",
    "question": "If class B extends class A, which statement is true?",
    "options": [
      "B cannot define new methods",
      "Java uses only multiple class inheritance",
      "A automatically inherits all members of B",
      "B inherits accessible members of A"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A subclass inherits accessible members of its superclass and may add or override behavior.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-057",
    "section": "Computer Science and Engineering",
    "topic": "Java Programming",
    "difficulty": "medium",
    "question": "Method overriding occurs when a subclass",
    "options": [
      "provides a new implementation with the same method signature as an inherited method",
      "declares two constructors",
      "changes only a local variable name",
      "uses a different method name"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Overriding replaces inherited behavior polymorphically using the same method signature.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-058",
    "section": "Computer Science and Engineering",
    "topic": "Java Programming",
    "difficulty": "easy",
    "question": "Which statement about a Java constructor is correct?",
    "options": [
      "It may have any name if it returns the class type",
      "It has the same name as the class and has no return type",
      "It must always be declared static",
      "It is inherited exactly like an ordinary instance method"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A constructor is identified by the class name and has no declared return type; it initializes a new object.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-059",
    "section": "Computer Science and Engineering",
    "topic": "Java Programming",
    "difficulty": "medium",
    "question": "An ArrayList<Integer> x initially contains [4, 9]. After x.add(1, 7), what does x contain?",
    "options": [
      "[4, 9, 7]",
      "[4, 1, 7, 9]",
      "[4, 7, 9]",
      "[7, 4, 9]"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "add(index, element) inserts at the specified position and shifts later elements right, so 7 is inserted at index 1.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-060",
    "section": "Computer Science and Engineering",
    "topic": "Java Programming",
    "difficulty": "medium",
    "question": "Which class hierarchy is used for byte-oriented input in Java?",
    "options": [
      "Writer only",
      "ThreadGroup",
      "Reader only",
      "InputStream"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "InputStream and its subclasses handle byte-oriented input; Reader handles characters.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-061",
    "section": "Computer Science and Engineering",
    "topic": "Java Programming",
    "difficulty": "medium",
    "question": "What does a catch block do?",
    "options": [
      "handles an exception thrown from the associated try block",
      "starts the garbage collector permanently",
      "creates a new package",
      "forces every statement to run twice"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A catch block receives and handles matching exceptions from the try block.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-062",
    "section": "Computer Science and Engineering",
    "topic": "Java Programming",
    "difficulty": "hard",
    "question": "Two Java threads both execute a synchronized instance method on the same object. What is guaranteed?",
    "options": [
      "both always execute simultaneously",
      "only one of those threads can execute that synchronized method on the object at a time",
      "the JVM creates two copies of every field",
      "deadlock is guaranteed"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "An instance synchronized method acquires the object's monitor, so only one thread can hold that monitor at a time.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-063",
    "section": "Computer Science and Engineering",
    "topic": "Java Programming",
    "difficulty": "easy",
    "question": "Which AWT layout manager provides the five regions North, South, East, West and Center?",
    "options": [
      "CardLayout",
      "FlowLayout",
      "BorderLayout",
      "GridLayout"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "BorderLayout divides a container into five named regions: North, South, East, West and Center.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-064",
    "section": "Computer Science and Engineering",
    "topic": "Java Programming",
    "difficulty": "medium",
    "question": "Which access modifier makes a Java member accessible in the same package and in subclasses outside the package?",
    "options": [
      "local",
      "no modifier only",
      "private",
      "protected"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "protected gives package access and also subclass access across packages, subject to Java's protected rules.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-065",
    "section": "Computer Science and Engineering",
    "topic": "Web Technologies",
    "difficulty": "easy",
    "question": "Which HTML table-cell attribute lets one cell span across two columns?",
    "options": [
      "colspan",
      "rowspan only",
      "cellpadding",
      "href"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The colspan attribute specifies how many columns a td or th cell spans.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-066",
    "section": "Computer Science and Engineering",
    "topic": "Web Technologies",
    "difficulty": "medium",
    "question": "Which CSS declaration makes all elements with class name note use bold text?",
    "options": [
      "*note { font-style: bold; }",
      ".note { font-weight: bold; }",
      "#note { text: bold; }",
      "note { weight: strong; }"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A class selector begins with '.', and font-weight:bold sets bold weight.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-067",
    "section": "Computer Science and Engineering",
    "topic": "Web Technologies",
    "difficulty": "medium",
    "question": "What is the main purpose of a DTD used with XML?",
    "options": [
      "to style the document with CSS colors",
      "to store relational rows in SQL",
      "to define the permitted structure and elements of the XML document",
      "to execute JavaScript in the browser"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A Document Type Definition specifies structural rules such as allowed elements, attributes and their relationships for an XML document.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-068",
    "section": "Computer Science and Engineering",
    "topic": "Web Technologies",
    "difficulty": "medium",
    "question": "What is the value of x after JavaScript executes: let x=3; x += 2*4; ?",
    "options": [
      "20",
      "14",
      "8",
      "11"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Multiplication occurs first: 2*4=8, then x becomes 3+8=11.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-069",
    "section": "Computer Science and Engineering",
    "topic": "Web Technologies",
    "difficulty": "medium",
    "question": "AJAX is useful because it allows a web page to",
    "options": [
      "exchange data with a server without reloading the entire page",
      "disable all network communication",
      "replace HTML with a database file",
      "compile Java bytecode in the browser only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "AJAX performs asynchronous requests so parts of a page can update without a full reload.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-070",
    "section": "Computer Science and Engineering",
    "topic": "Web Technologies",
    "difficulty": "easy",
    "question": "In jQuery, which selector targets the element whose id is result?",
    "options": [
      "$('id=result')",
      "$('#result')",
      "$('result#')",
      "$('.result')"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The CSS id selector uses #, so jQuery selects it with $('#result').",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-071",
    "section": "Computer Science and Engineering",
    "topic": "Web Technologies",
    "difficulty": "medium",
    "question": "Which statement about PHP is correct?",
    "options": [
      "PHP cannot read form data",
      "PHP can run only inside an Android Activity",
      "PHP code is commonly executed on the server to generate a response sent to the browser",
      "PHP is only a CSS selector language"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "PHP is a server-side scripting language commonly used to process requests and generate HTML or other responses.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-072",
    "section": "Computer Science and Engineering",
    "topic": "Web Technologies",
    "difficulty": "easy",
    "question": "Which HTTP method is conventionally used to retrieve a resource without requesting a state-changing operation?",
    "options": [
      "CONNECT only",
      "DELETE",
      "PATCH only",
      "GET"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "GET is the standard retrieval method and is intended to be safe and idempotent with respect to server state.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-073",
    "section": "Computer Science and Engineering",
    "topic": "Big-data & Cloud Computing",
    "difficulty": "medium",
    "question": "Finding that customers who buy item X frequently also buy item Y is most directly an example of",
    "options": [
      "association-rule mining",
      "round-robin CPU scheduling",
      "lossless compression only",
      "disk scheduling"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Association-rule mining discovers co-occurrence relationships such as items that tend to appear together in transactions.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-074",
    "section": "Computer Science and Engineering",
    "topic": "Big-data & Cloud Computing",
    "difficulty": "medium",
    "question": "In a data warehouse, ETL stands for",
    "options": [
      "Execute, Translate, Locate",
      "Extract, Transform, Load",
      "Encrypt, Transfer, Link",
      "Evaluate, Test, Log"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "ETL extracts source data, transforms it, and loads it into the target warehouse.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-075",
    "section": "Computer Science and Engineering",
    "topic": "Big-data & Cloud Computing",
    "difficulty": "medium",
    "question": "In HDFS, which component primarily maintains filesystem metadata such as file names and block locations?",
    "options": [
      "DataNode only",
      "Reducer",
      "NameNode",
      "hypervisor"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The HDFS NameNode maintains namespace and block-location metadata, while DataNodes store the actual data blocks.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-076",
    "section": "Computer Science and Engineering",
    "topic": "Big-data & Cloud Computing",
    "difficulty": "medium",
    "question": "In the MapReduce model, the Reduce phase primarily",
    "options": [
      "allocates Android activities",
      "formats HTML tags",
      "captures keyboard input",
      "aggregates or combines intermediate values grouped by key"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Map produces intermediate key-value pairs; Reduce processes values associated with each key to produce combined results.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-077",
    "section": "Computer Science and Engineering",
    "topic": "Big-data & Cloud Computing",
    "difficulty": "medium",
    "question": "A hypervisor in a cloud platform primarily enables",
    "options": [
      "multiple virtual machines to share the same physical host",
      "all databases to become relational",
      "HTML tags to be parsed by a browser",
      "network packets to avoid addressing"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A hypervisor virtualizes physical hardware so multiple isolated virtual machines can run on one host.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-078",
    "section": "Computer Science and Engineering",
    "topic": "Big-data & Cloud Computing",
    "difficulty": "medium",
    "question": "Cloud elasticity means a system can",
    "options": [
      "use only one fixed server forever",
      "scale resources up or down as demand changes",
      "avoid all network connections",
      "guarantee zero software bugs"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Elastic cloud services adjust allocated resources in response to workload demand.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-079",
    "section": "Computer Science and Engineering",
    "topic": "Android Programming",
    "difficulty": "easy",
    "question": "Android interface dimensions are commonly specified in dp because dp is designed to",
    "options": [
      "encrypt network traffic",
      "store database pages",
      "provide density-independent sizing across screens",
      "name Java packages"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Density-independent pixels scale with screen density, helping interface elements keep similar physical size across devices.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-080",
    "section": "Computer Science and Engineering",
    "topic": "Android Programming",
    "difficulty": "medium",
    "question": "When an Activity moves from stopped state back to the foreground, which callback occurs before onResume()?",
    "options": [
      "onDestroy() only",
      "onPause() only",
      "onCreate() must always be called first",
      "onRestart() followed by onStart()"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A stopped activity returning to the foreground typically receives onRestart(), onStart(), then onResume().",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-081",
    "section": "Computer Science and Engineering",
    "topic": "Android Programming",
    "difficulty": "medium",
    "question": "An explicit Intent is used when the app",
    "options": [
      "names the specific component that should handle the Intent",
      "must broadcast to every installed app",
      "wants to store only a database row",
      "has no target information at all"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Explicit intents identify the target component directly, commonly for navigation within an app.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-082",
    "section": "Computer Science and Engineering",
    "topic": "Android Programming",
    "difficulty": "easy",
    "question": "Which Android layout arranges child views in a single row or column?",
    "options": [
      "AbsoluteDatabase",
      "LinearLayout",
      "IntentLayout",
      "ServiceGroup"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "LinearLayout places children sequentially in horizontal or vertical orientation.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-083",
    "section": "Computer Science and Engineering",
    "topic": "Android Programming",
    "difficulty": "medium",
    "question": "Which listener is commonly attached to a Button to respond to taps?",
    "options": [
      "OnDiskListener",
      "OnPackageListener",
      "OnClickListener",
      "OnSqlListener"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Button click events are commonly handled by an OnClickListener.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-084",
    "section": "Computer Science and Engineering",
    "topic": "Android Programming",
    "difficulty": "medium",
    "question": "Which Android UI control is intended for editable text input by the user?",
    "options": [
      "ProgressBar",
      "ImageView",
      "TextView",
      "EditText"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "EditText is the standard Android text-entry control; TextView mainly displays text, ImageView displays images, and ProgressBar shows progress.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-085",
    "section": "Computer Science and Engineering",
    "topic": "Internet of Things (IoT)",
    "difficulty": "easy",
    "question": "An IoT gateway placed between a local sensor network and the cloud commonly performs",
    "options": [
      "protocol translation and local aggregation",
      "mechanical actuation with no communication",
      "only source-code compilation",
      "relational normalization only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "An IoT gateway can bridge different protocols and aggregate or preprocess device data before forwarding it upstream.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-086",
    "section": "Computer Science and Engineering",
    "topic": "Internet of Things (IoT)",
    "difficulty": "medium",
    "question": "In an IoT control loop, an actuator primarily",
    "options": [
      "performs DNS name resolution",
      "converts a control signal into a physical action",
      "stores only source code",
      "assigns SQL primary keys"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "An actuator receives a control command and produces a physical effect such as moving a valve, motor or relay.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-087",
    "section": "Computer Science and Engineering",
    "topic": "Internet of Things (IoT)",
    "difficulty": "medium",
    "question": "Which statement best matches AMQP?",
    "options": [
      "It is a video compression format",
      "It is an Android layout",
      "It is a messaging protocol designed for reliable message-oriented communication",
      "It is a CPU register"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "AMQP is an application-layer messaging protocol used for reliable message exchange and queuing.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-088",
    "section": "Computer Science and Engineering",
    "topic": "Internet of Things (IoT)",
    "difficulty": "medium",
    "question": "Zigbee commonly builds low-power wireless networks on top of",
    "options": [
      "IEEE 802.3 only",
      "SATA",
      "USB mass storage",
      "IEEE 802.15.4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Zigbee uses IEEE 802.15.4 at the lower layers for low-rate wireless personal-area networking.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-089",
    "section": "Computer Science and Engineering",
    "topic": "Internet of Things (IoT)",
    "difficulty": "easy",
    "question": "NFC is intended mainly for",
    "options": [
      "very short-range wireless communication",
      "long-haul fibre routing",
      "intercontinental satellite links",
      "disk defragmentation"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Near Field Communication operates over very short distances, typically a few centimetres.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-090",
    "section": "Computer Science and Engineering",
    "topic": "Internet of Things (IoT)",
    "difficulty": "medium",
    "question": "A wireless sensor network node typically contains sensing, processing and",
    "options": [
      "no power source or radio",
      "wireless communication capabilities",
      "a mechanical printer only",
      "a full data centre"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Sensor nodes combine sensing, local processing, communication and a power source.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-091",
    "section": "Computer Science and Engineering",
    "topic": "Internet of Things (IoT)",
    "difficulty": "medium",
    "question": "In a smart factory, vibration sensors on motors are most directly useful for",
    "options": [
      "creating database primary keys",
      "solving trigonometric identities",
      "predictive maintenance",
      "changing HTML font size"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Monitoring vibration trends can reveal developing mechanical faults before failure.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-092",
    "section": "Computer Science and Engineering",
    "topic": "Internet of Things (IoT)",
    "difficulty": "hard",
    "question": "An IoT gateway receives 120-byte sensor messages from 25 devices once every 10 seconds. Ignoring protocol overhead, the average incoming payload rate is",
    "options": [
      "30 bytes/s",
      "1200 bytes/s",
      "3000 bytes/s",
      "300 bytes/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Each 10 s interval carries 25x120=3000 bytes, so the average rate is 3000/10=300 bytes/s.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-093",
    "section": "Computer Science and Engineering",
    "topic": "Python Programming",
    "difficulty": "easy",
    "question": "What is printed by the following Python code?\n\nx = 7\nif x % 3 == 1:\n    print('P')\nelif x % 3 == 2:\n    print('Q')\nelse:\n    print('R')",
    "options": [
      "P",
      "Q",
      "R",
      "7"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Here 7 % 3 equals 1, so the first condition is true and the program prints P.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-094",
    "section": "Computer Science and Engineering",
    "topic": "Python Programming",
    "difficulty": "medium",
    "question": "What is the value of sum([n*n for n in range(4)])?",
    "options": [
      "30",
      "14",
      "16",
      "6"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "range(4) gives 0,1,2,3; squares sum to 0+1+4+9=14.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-095",
    "section": "Computer Science and Engineering",
    "topic": "Python Programming",
    "difficulty": "easy",
    "question": "Which Python data structure stores key-value pairs?",
    "options": [
      "tuple only",
      "set only",
      "dictionary",
      "string only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A dict maps keys to values.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-096",
    "section": "Computer Science and Engineering",
    "topic": "Python Programming",
    "difficulty": "medium",
    "question": "What is printed by the following Python code?\n\nx = 4\ndef f():\n    x = 7\n    return x\nprint(f(), x)",
    "options": [
      "4 7",
      "7 7",
      "4 4",
      "7 4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The assignment x = 7 creates a local variable inside f(), so f() returns 7 without changing the global x, which remains 4. print(f(), x) therefore prints 7 4.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-097",
    "section": "Computer Science and Engineering",
    "topic": "Python Programming",
    "difficulty": "medium",
    "question": "If class Child(Parent): is declared, which OOP relation is being used?",
    "options": [
      "inheritance",
      "encapsulation only",
      "exception suppression",
      "file handling"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Child derives from Parent, which is inheritance.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-098",
    "section": "Computer Science and Engineering",
    "topic": "Python Programming",
    "difficulty": "medium",
    "question": "Using with open('data.txt','r') as f: is useful because it",
    "options": [
      "encrypts the file automatically",
      "automatically closes the file when the block finishes",
      "converts text to SQL",
      "prevents all exceptions"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A context manager handles cleanup and closes the file when leaving the with block.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-099",
    "section": "Computer Science and Engineering",
    "topic": "Python Programming",
    "difficulty": "medium",
    "question": "Which exception is raised by int('abc')?",
    "options": [
      "KeyError",
      "IndexError",
      "ValueError",
      "ZeroDivisionError"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The string 'abc' is not a valid integer literal, so int() raises ValueError.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "ap-ecet-2026-cs-100",
    "section": "Computer Science and Engineering",
    "topic": "Python Programming",
    "difficulty": "hard",
    "question": "What is the output of: a=[1,2]; b=a; b.append(3); print(a) ?",
    "options": [
      "[3]",
      "Error because lists are immutable",
      "[1, 2]",
      "[1, 2, 3]"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "b and a refer to the same list object, so mutating through b is visible through a.",
    "source": {
      "kind": "original",
      "reference": "AP ECET 2026 official syllabus and CSE paper framework for Diploma Holders in Engineering",
      "url": "https://cets.apsche.ap.gov.in/ECET/UI/Syllabus",
      "checkedOn": "2026-08-28"
    }
  }
];
