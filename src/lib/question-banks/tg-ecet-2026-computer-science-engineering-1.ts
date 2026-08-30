import type { Question } from '../questions';

export const TG_ECET_2026_COMPUTER_SCIENCE_ENGINEERING_1: Question[] = [
  {
    "id": "tg-ecet-2026-cs-001",
    "section": "Computer Science and Engineering",
    "topic": "Digital Electronics",
    "difficulty": "medium",
    "question": "The decimal number 156 is equal to which octal number?",
    "options": [
      "234",
      "246",
      "216",
      "314"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "156 \u00f7 8 gives remainders 4, 3 and 2 from least to most significant, so 156_10 = 234_8.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-002",
    "section": "Computer Science and Engineering",
    "topic": "Digital Electronics",
    "difficulty": "medium",
    "question": "The Gray code corresponding to binary 1011 is",
    "options": [
      "1001",
      "1110",
      "1101",
      "1010"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For binary b3b2b1b0=1011, Gray bits are g3=b3=1, g2=b3 xor b2=1, g1=b2 xor b1=1, g0=b1 xor b0=0, giving 1110.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-003",
    "section": "Computer Science and Engineering",
    "topic": "Digital Electronics",
    "difficulty": "easy",
    "question": "By De Morgan's theorem, (A + B)' equals",
    "options": [
      "A'+B'",
      "A+B",
      "A'B'",
      "AB"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The complement of an OR is the AND of the complements: (A+B)'=A'B'.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-004",
    "section": "Computer Science and Engineering",
    "topic": "Digital Electronics",
    "difficulty": "hard",
    "question": "For F(A,B,C,D)=\u03a3m(2,4,5,6,7,10,14), the minimized SOP expression is",
    "options": [
      "A'B' + CD",
      "AB + C'D",
      "B + CD'",
      "A'B + CD'"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Minterms 4,5,6,7 form a four-cell group with A=0 and B=1, giving A'B. Minterms 2,6,10,14 form a four-cell group with C=1 and D=0, giving CD'. Their overlap at minterm 6 is allowed, so F=A'B+CD'.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-005",
    "section": "Computer Science and Engineering",
    "topic": "Digital Electronics",
    "difficulty": "medium",
    "question": "For a 1-bit magnitude comparator with A=0 and B=1, which output is asserted?",
    "options": [
      "A < B",
      "A > B",
      "A = B",
      "all three outputs"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Since binary 0 is less than binary 1, the comparator's A<B output is 1 and the other comparison outputs are 0.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-006",
    "section": "Computer Science and Engineering",
    "topic": "Digital Electronics",
    "difficulty": "easy",
    "question": "A 3-to-8 decoder has how many output lines?",
    "options": [
      "3",
      "8",
      "16",
      "6"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "An n-to-2^n decoder has 2^n outputs. For n=3, there are 8 outputs.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-007",
    "section": "Computer Science and Engineering",
    "topic": "Digital Electronics",
    "difficulty": "easy",
    "question": "For a D flip-flop, the next state Q(next) at the active clock edge is",
    "options": [
      "always the complement of D",
      "always 0",
      "equal to D",
      "equal to the previous Q regardless of D"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A D flip-flop transfers the D input to Q on the active clock edge, so Q(next)=D.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-008",
    "section": "Computer Science and Engineering",
    "topic": "Digital Electronics",
    "difficulty": "medium",
    "question": "A decade counter has how many distinct states in one full counting cycle?",
    "options": [
      "8",
      "100",
      "16",
      "10"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A decade counter is a modulo-10 counter, so it cycles through 10 states.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-009",
    "section": "Computer Science and Engineering",
    "topic": "Digital Electronics",
    "difficulty": "easy",
    "question": "Which memory is normally volatile?",
    "options": [
      "RAM",
      "Flash ROM",
      "ROM",
      "PROM"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Ordinary RAM loses stored information when power is removed, whereas ROM-family memories are nonvolatile.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-010",
    "section": "Computer Science and Engineering",
    "topic": "Digital Electronics",
    "difficulty": "medium",
    "question": "Compared with TTL, a typical CMOS logic input is especially known for",
    "options": [
      "having no noise margin",
      "very high input impedance",
      "being inherently analog only",
      "requiring large steady input current"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "MOS gate insulation makes CMOS inputs draw extremely small steady current, giving very high input impedance.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-011",
    "section": "Computer Science and Engineering",
    "topic": "Computer Architecture",
    "difficulty": "easy",
    "question": "The stored-program concept means that instructions and data are",
    "options": [
      "entered manually before every instruction",
      "always kept on separate physical computers",
      "stored in memory in machine-readable form",
      "available only in CPU registers"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "In a stored-program computer, instructions are encoded and stored in memory along with data for automatic fetching and execution.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-012",
    "section": "Computer Science and Engineering",
    "topic": "Computer Architecture",
    "difficulty": "easy",
    "question": "The range of an 8-bit unsigned integer is",
    "options": [
      "1 to 256",
      "0 to 127",
      "-128 to 127",
      "0 to 255"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Eight unsigned bits represent 2^8=256 values, from 0 through 255.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-013",
    "section": "Computer Science and Engineering",
    "topic": "Computer Architecture",
    "difficulty": "medium",
    "question": "The 1's complement of the 6-bit pattern 101001 is",
    "options": [
      "010110",
      "110100",
      "010111",
      "101110"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "One's complement flips every bit: 1\u21940, giving 010110.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-014",
    "section": "Computer Science and Engineering",
    "topic": "Computer Architecture",
    "difficulty": "easy",
    "question": "In an instruction format, the opcode field specifies",
    "options": [
      "the physical size of RAM",
      "the operation to be performed",
      "only the program name",
      "the clock frequency"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The opcode identifies the machine operation such as add, load or branch.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-015",
    "section": "Computer Science and Engineering",
    "topic": "Computer Architecture",
    "difficulty": "medium",
    "question": "In immediate addressing, the operand value is",
    "options": [
      "always stored in cache line 0",
      "necessarily on an I/O device",
      "contained in the instruction itself",
      "found only through an index register"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Immediate addressing embeds the actual constant operand in the instruction.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-016",
    "section": "Computer Science and Engineering",
    "topic": "Computer Architecture",
    "difficulty": "easy",
    "question": "Which storage is normally fastest in the memory hierarchy?",
    "options": [
      "optical disk",
      "hard disk",
      "main memory",
      "CPU register"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "CPU registers are located inside the processor and have the lowest access latency among these choices.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-017",
    "section": "Computer Science and Engineering",
    "topic": "Computer Architecture",
    "difficulty": "hard",
    "question": "A direct-mapped cache of size 2 KiB (2048 bytes) uses 16-byte blocks with an 18-bit byte address. How many address bits are used for the tag?",
    "options": [
      "7",
      "5",
      "8",
      "10"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The cache has 2048/16 = 128 = 2^7 lines, so the index uses 7 bits. A 16-byte block needs 4 offset bits. Therefore tag bits = 18 - 7 - 4 = 7.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-018",
    "section": "Computer Science and Engineering",
    "topic": "Computer Architecture",
    "difficulty": "medium",
    "question": "Interrupt-initiated I/O differs from programmed polling because the CPU",
    "options": [
      "must continuously test the device status",
      "can do other work until the device requests attention",
      "transfers every byte through DMA only",
      "cannot execute instructions during I/O"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "With interrupts, the CPU need not repeatedly poll; it can continue execution until an interrupt signals service is needed.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-019",
    "section": "Computer Science and Engineering",
    "topic": "Computer Architecture",
    "difficulty": "medium",
    "question": "In Flynn's classification, a SIMD machine uses",
    "options": [
      "no instruction stream",
      "one instruction on one data item only",
      "one instruction stream on multiple data streams",
      "multiple instructions on one data stream"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "SIMD stands for Single Instruction, Multiple Data.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-020",
    "section": "Computer Science and Engineering",
    "topic": "Computer Architecture",
    "difficulty": "medium",
    "question": "Which is most characteristic of a RISC design?",
    "options": [
      "many highly complex variable-length instructions by design",
      "no registers",
      "no pipelining capability",
      "a relatively small set of simple instructions"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "RISC emphasizes a small, simple instruction set that is efficient to decode and pipeline.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-021",
    "section": "Computer Science and Engineering",
    "topic": "C Programming and Data Structures",
    "difficulty": "easy",
    "question": "In C, the value of 2 + 3 * 4 is",
    "options": [
      "14",
      "24",
      "11",
      "20"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Multiplication has higher precedence than addition, so 3\u00d74 is evaluated first: 2+12=14.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-022",
    "section": "Computer Science and Engineering",
    "topic": "C Programming and Data Structures",
    "difficulty": "easy",
    "question": "Inside a C loop, the continue statement causes control to",
    "options": [
      "restart the program from main",
      "skip the rest of the current iteration",
      "exit the loop permanently",
      "terminate the entire program"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "continue bypasses the remaining statements in the current iteration and proceeds with the next iteration.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-023",
    "section": "Computer Science and Engineering",
    "topic": "C Programming and Data Structures",
    "difficulty": "medium",
    "question": "A local variable declared static inside a C function generally",
    "options": [
      "is re-created with an indeterminate address on every statement",
      "must be stored on disk",
      "retains its value between function calls",
      "is visible in every source file"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A static local has block scope but static storage duration, so its value persists between calls.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-024",
    "section": "Computer Science and Engineering",
    "topic": "C Programming and Data Structures",
    "difficulty": "easy",
    "question": "What is strlen(\"ECET26\") in C?",
    "options": [
      "7",
      "8",
      "5",
      "6"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The string contains six characters: E, C, E, T, 2 and 6. strlen excludes the terminating null character.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-025",
    "section": "Computer Science and Engineering",
    "topic": "C Programming and Data Structures",
    "difficulty": "medium",
    "question": "If a recursive C function computes n! using n * f(n-1) with f(0)=1, then f(4) is",
    "options": [
      "24",
      "12",
      "16",
      "20"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "f(4)=4\u00d73\u00d72\u00d71=24.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-026",
    "section": "Computer Science and Engineering",
    "topic": "C Programming and Data Structures",
    "difficulty": "medium",
    "question": "If sizeof(int)=4 bytes, malloc(5 * sizeof(int)) requests",
    "options": [
      "5 bytes",
      "20 bytes",
      "40 bytes",
      "9 bytes"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The request is 5\u00d74=20 bytes.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-027",
    "section": "Computer Science and Engineering",
    "topic": "C Programming and Data Structures",
    "difficulty": "easy",
    "question": "The time complexity of binary search on a sorted array is",
    "options": [
      "O(1) for every input size",
      "O(n)",
      "O(log n)",
      "O(n^2)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Each comparison discards about half the remaining search interval, giving logarithmic growth.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-028",
    "section": "Computer Science and Engineering",
    "topic": "C Programming and Data Structures",
    "difficulty": "easy",
    "question": "A queue follows which service order?",
    "options": [
      "LIFO",
      "priority always",
      "random only",
      "FIFO"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A standard queue is First In, First Out.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-029",
    "section": "Computer Science and Engineering",
    "topic": "C Programming and Data Structures",
    "difficulty": "medium",
    "question": "A binary tree has root M, left child C and right child T. Its inorder traversal is",
    "options": [
      "C, M, T",
      "T, M, C",
      "M, C, T",
      "C, T, M"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Inorder traversal visits left subtree, root, then right subtree, giving C, M, T.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-030",
    "section": "Computer Science and Engineering",
    "topic": "C Programming and Data Structures",
    "difficulty": "medium",
    "question": "The worst-case time complexity of merge sort is",
    "options": [
      "O(n^2)",
      "O(n log n)",
      "O(log n)",
      "O(1)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Merge sort recursively divides the data into logarithmic levels and does linear merging per level, yielding O(n log n).",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-031",
    "section": "Computer Science and Engineering",
    "topic": "Object Oriented Programming through C++",
    "difficulty": "easy",
    "question": "Bundling data and the functions that operate on that data inside a class is called",
    "options": [
      "tokenization",
      "normalization",
      "encapsulation",
      "recursion"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Encapsulation packages state and related behavior inside a class.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-032",
    "section": "Computer Science and Engineering",
    "topic": "Object Oriented Programming through C++",
    "difficulty": "easy",
    "question": "Inside a non-static C++ member function, this points to",
    "options": [
      "the global namespace",
      "the next array element",
      "the base class only",
      "the current object"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "this is an implicit pointer to the object on which the member function was invoked.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-033",
    "section": "Computer Science and Engineering",
    "topic": "Object Oriented Programming through C++",
    "difficulty": "easy",
    "question": "A C++ constructor has",
    "options": [
      "the same name as its class",
      "a compulsory return type int",
      "the name destructor",
      "no relation to the class name"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Constructors are special member functions whose name is exactly the class name.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-034",
    "section": "Computer Science and Engineering",
    "topic": "Object Oriented Programming through C++",
    "difficulty": "easy",
    "question": "The name of a destructor for class Box is",
    "options": [
      "delete Box",
      "~Box",
      "destroy(Box)",
      "Box~"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A C++ destructor is named by prefixing the class name with ~, so ~Box.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-035",
    "section": "Computer Science and Engineering",
    "topic": "Object Oriented Programming through C++",
    "difficulty": "medium",
    "question": "Function overloading means defining functions with",
    "options": [
      "different names and identical parameter lists only",
      "the same name and necessarily the same parameters",
      "the same name but different parameter lists",
      "no parameters at all"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Overloaded functions share a name but differ in their parameter signatures so the compiler can select the appropriate version.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-036",
    "section": "Computer Science and Engineering",
    "topic": "Object Oriented Programming through C++",
    "difficulty": "medium",
    "question": "Operator overloading in C++ can",
    "options": [
      "create completely new operator symbols",
      "change operator precedence",
      "change the number of operands an operator takes",
      "define how an existing operator works for user-defined types"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Overloading customizes existing operators for user-defined types but cannot invent operators or change their precedence/arity.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-037",
    "section": "Computer Science and Engineering",
    "topic": "Object Oriented Programming through C++",
    "difficulty": "easy",
    "question": "If class D inherits directly from both class B1 and class B2, the inheritance is",
    "options": [
      "multiple inheritance",
      "single inheritance",
      "multilevel inheritance",
      "hierarchical inheritance only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A class with more than one direct base class uses multiple inheritance.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-038",
    "section": "Computer Science and Engineering",
    "topic": "Object Oriented Programming through C++",
    "difficulty": "hard",
    "question": "Consider C++ classes where Base defines virtual int value(){return 1;} and Derived overrides it with int value(){return 2;}. If Derived d; Base* p=&d; then p->value() returns",
    "options": [
      "0",
      "2",
      "1",
      "a compile-time error"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Because value is virtual, the call through Base* is dynamically dispatched to Derived::value(), which returns 2.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-039",
    "section": "Computer Science and Engineering",
    "topic": "Object Oriented Programming through C++",
    "difficulty": "medium",
    "question": "A friend function of a C++ class may",
    "options": [
      "become a member function automatically",
      "change operator precedence",
      "access the class's private members if declared as a friend",
      "inherit the class"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Friend declaration grants a non-member function access to private and protected members without making it a class member.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-040",
    "section": "Computer Science and Engineering",
    "topic": "Object Oriented Programming through C++",
    "difficulty": "easy",
    "question": "C++ templates are mainly used for",
    "options": [
      "creating only runtime errors",
      "forcing all variables to be global",
      "disabling type checking",
      "generic programming"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Templates let functions and classes operate with different types using a common definition.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-041",
    "section": "Computer Science and Engineering",
    "topic": "Relational Database Management Systems",
    "difficulty": "easy",
    "question": "Which level of data abstraction describes how data is physically stored?",
    "options": [
      "physical level",
      "transaction level",
      "view level",
      "logical level only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The physical level describes storage structures and low-level organization.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-042",
    "section": "Computer Science and Engineering",
    "topic": "Relational Database Management Systems",
    "difficulty": "easy",
    "question": "A foreign key is used mainly to",
    "options": [
      "store only floating-point values",
      "reference a key in another or the same relation",
      "guarantee every value is unique by itself",
      "replace every primary key"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A foreign key links rows by referencing a candidate/primary key in a related relation.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-043",
    "section": "Computer Science and Engineering",
    "topic": "Relational Database Management Systems",
    "difficulty": "medium",
    "question": "A relation is in first normal form (1NF) when each attribute value is",
    "options": [
      "always a primary key",
      "a repeating list",
      "atomic",
      "always numeric"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "1NF requires each table cell to contain a single atomic value rather than a repeating group or list.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-044",
    "section": "Computer Science and Engineering",
    "topic": "Relational Database Management Systems",
    "difficulty": "hard",
    "question": "Relation R(A,B,C) has composite key (A,B) and functional dependency A -> C. Assuming atomic attributes, R violates 2NF because",
    "options": [
      "all dependencies are transitive",
      "the relation has three attributes",
      "A and B form a key",
      "C depends on only part of the composite key"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A non-key attribute C depends on A, which is a proper subset of key (A,B). That partial dependency violates 2NF.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-045",
    "section": "Computer Science and Engineering",
    "topic": "Relational Database Management Systems",
    "difficulty": "easy",
    "question": "In ACID, durability means that after a transaction commits, its changes",
    "options": [
      "survive subsequent system failures",
      "are immediately rolled back",
      "must violate constraints",
      "remain visible only to one user"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Durability ensures committed results are permanently recorded even if a later failure occurs.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-046",
    "section": "Computer Science and Engineering",
    "topic": "Relational Database Management Systems",
    "difficulty": "easy",
    "question": "Which SQL command belongs to DDL?",
    "options": [
      "UPDATE",
      "CREATE TABLE",
      "DELETE",
      "INSERT INTO"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "CREATE defines database structure and is a Data Definition Language command; INSERT, UPDATE and DELETE are DML.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-047",
    "section": "Computer Science and Engineering",
    "topic": "Relational Database Management Systems",
    "difficulty": "medium",
    "question": "Which SQL clause groups rows before applying aggregate functions such as COUNT or SUM?",
    "options": [
      "VALUES",
      "ORDER BY",
      "GROUP BY",
      "WHERE only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "GROUP BY partitions rows into groups on which aggregate functions are evaluated.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-048",
    "section": "Computer Science and Engineering",
    "topic": "Relational Database Management Systems",
    "difficulty": "medium",
    "question": "Table Marks has scores 42, 67, 67, 81. What does SELECT COUNT(*) FROM Marks WHERE score >= 67; return?",
    "options": [
      "2",
      "4",
      "67",
      "3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The rows with scores 67, 67 and 81 satisfy score>=67, so COUNT(*) returns 3.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-049",
    "section": "Computer Science and Engineering",
    "topic": "Relational Database Management Systems",
    "difficulty": "easy",
    "question": "A database view is best described as",
    "options": [
      "a virtual table defined by a query",
      "a network cable",
      "a physical disk sector",
      "a mandatory copy of the whole database"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A view presents query results as a table-like object without necessarily storing all result rows separately.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-050",
    "section": "Computer Science and Engineering",
    "topic": "Relational Database Management Systems",
    "difficulty": "medium",
    "question": "A database trigger is code that",
    "options": [
      "must be started manually by every SELECT",
      "runs automatically in response to specified database events",
      "can never access table data",
      "replaces all constraints"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Triggers are associated with events such as INSERT, UPDATE or DELETE and execute automatically when the event occurs.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-051",
    "section": "Computer Science and Engineering",
    "topic": "Computer Hardware & Networking",
    "difficulty": "easy",
    "question": "During startup, BIOS/firmware primarily helps by",
    "options": [
      "serving web pages",
      "formatting every storage device",
      "initializing hardware and starting the boot process",
      "deleting the operating system"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Firmware performs hardware initialization/POST and transfers control toward the boot loader or operating system.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-052",
    "section": "Computer Science and Engineering",
    "topic": "Computer Hardware & Networking",
    "difficulty": "easy",
    "question": "An SMPS in a desktop computer mainly converts",
    "options": [
      "DC into mechanical rotation",
      "audio into video",
      "network packets into files",
      "AC mains power into regulated DC outputs"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The switched-mode power supply converts incoming AC power to the regulated DC voltages required by computer components.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-053",
    "section": "Computer Science and Engineering",
    "topic": "Computer Hardware & Networking",
    "difficulty": "easy",
    "question": "Which storage device normally has no moving mechanical parts?",
    "options": [
      "SSD",
      "magnetic tape drive",
      "DVD drive",
      "hard disk drive"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "An SSD stores data in semiconductor flash memory and has no moving mechanical media or heads.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-054",
    "section": "Computer Science and Engineering",
    "topic": "Computer Hardware & Networking",
    "difficulty": "easy",
    "question": "Which is an output device?",
    "options": [
      "mouse",
      "laser printer",
      "scanner",
      "keyboard"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A printer produces output from the computer, whereas keyboard, mouse and scanner are input devices.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-055",
    "section": "Computer Science and Engineering",
    "topic": "Computer Hardware & Networking",
    "difficulty": "medium",
    "question": "Which topology provides many redundant direct paths between nodes and is therefore highly fault tolerant but expensive?",
    "options": [
      "single-star with no backup links",
      "ring",
      "mesh",
      "bus"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A mesh topology uses many interconnections, improving redundancy at the cost of cabling and ports.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-056",
    "section": "Computer Science and Engineering",
    "topic": "Computer Hardware & Networking",
    "difficulty": "medium",
    "question": "In the OSI model, end-to-end process communication is primarily the responsibility of the",
    "options": [
      "presentation layer",
      "physical layer",
      "data-link layer",
      "transport layer"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The transport layer provides end-to-end delivery between processes, including segmentation and reliability mechanisms.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-057",
    "section": "Computer Science and Engineering",
    "topic": "Computer Hardware & Networking",
    "difficulty": "easy",
    "question": "Which device primarily forwards IP packets between different networks?",
    "options": [
      "router",
      "hub",
      "repeater",
      "passive connector"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Routers make forwarding decisions using network-layer addresses and connect distinct IP networks.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-058",
    "section": "Computer Science and Engineering",
    "topic": "Computer Hardware & Networking",
    "difficulty": "easy",
    "question": "FTP is primarily used for",
    "options": [
      "clock synchronization only",
      "file transfer",
      "assigning MAC addresses",
      "compressing images"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "FTP stands for File Transfer Protocol and is designed for transferring files.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-059",
    "section": "Computer Science and Engineering",
    "topic": "Computer Hardware & Networking",
    "difficulty": "medium",
    "question": "In classful IPv4 addressing, a Class C address has first-octet decimal values from",
    "options": [
      "128 to 191",
      "224 to 239",
      "192 to 223",
      "1 to 126"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Class C addresses traditionally have first octet 192 through 223.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-060",
    "section": "Computer Science and Engineering",
    "topic": "Computer Hardware & Networking",
    "difficulty": "medium",
    "question": "An IPv4 subnet with prefix /27 contains how many total addresses?",
    "options": [
      "64",
      "27",
      "16",
      "32"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A /27 prefix leaves 5 host bits, so each subnet contains 2^5=32 total addresses.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-061",
    "section": "Computer Science and Engineering",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "question": "A system call provides a controlled interface between",
    "options": [
      "a user program and the operating-system kernel",
      "two unrelated keyboards",
      "a compiler and a printer cable only",
      "two web browsers only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "User programs request privileged OS services through system calls that transfer control to the kernel.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-062",
    "section": "Computer Science and Engineering",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "question": "A Process Control Block typically stores a process's",
    "options": [
      "database schema only",
      "state and scheduling/context information",
      "monitor screen resolution only",
      "only source-code comments"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The PCB records information such as process state, program counter, registers and scheduling/accounting data.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-063",
    "section": "Computer Science and Engineering",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "Round-robin CPU scheduling uses a fixed time slice called a",
    "options": [
      "page frame",
      "disk cylinder",
      "time quantum",
      "semaphore count only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Round robin gives each ready process a bounded CPU time quantum before preemption.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-064",
    "section": "Computer Science and Engineering",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "When all jobs arrive together and CPU burst times are known exactly, which non-preemptive algorithm minimizes average waiting time?",
    "options": [
      "FCFS",
      "C-SCAN",
      "Round Robin",
      "Shortest Job First"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Ordering jobs by increasing CPU burst length minimizes average waiting time under these assumptions.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-065",
    "section": "Computer Science and Engineering",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "A counting semaphore is especially useful for controlling access to",
    "options": [
      "a pool containing multiple identical resource instances",
      "a read-only comment",
      "the CPU instruction set",
      "a constant string literal"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A counting semaphore can represent the number of available instances of a resource.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-066",
    "section": "Computer Science and Engineering",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "question": "Banker's algorithm is associated with deadlock",
    "options": [
      "mandatory detection only",
      "avoidance",
      "creation",
      "file compression"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Banker's algorithm grants requests only when the resulting state remains safe, so it is a deadlock-avoidance method.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-067",
    "section": "Computer Science and Engineering",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "Fixed-size paging can cause",
    "options": [
      "external fragmentation only and never internal",
      "no wasted memory of any kind",
      "internal fragmentation",
      "compiler syntax errors"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A process's last page may not fill its allocated frame, creating unused space inside an allocated block.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-068",
    "section": "Computer Science and Engineering",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "question": "LRU page replacement removes the page that",
    "options": [
      "entered memory first regardless of use",
      "will be used farthest in the future with perfect knowledge",
      "has the largest page number",
      "has not been used for the longest recent time"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "LRU approximates temporal locality by evicting the page whose last access is least recent.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-069",
    "section": "Computer Science and Engineering",
    "topic": "Operating Systems",
    "difficulty": "medium",
    "question": "SCAN disk scheduling is often compared to",
    "options": [
      "an elevator moving back and forth",
      "a compiler pass",
      "a random coin toss",
      "a stack pop operation"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "SCAN services requests while the head moves in one direction, then reverses, resembling elevator movement.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-070",
    "section": "Computer Science and Engineering",
    "topic": "Operating Systems",
    "difficulty": "easy",
    "question": "A tree-structured directory allows",
    "options": [
      "only one file in the entire system",
      "hierarchical organization of files and subdirectories",
      "no directories inside directories",
      "no path names"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Tree directories organize objects into nested directories and subdirectories.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-071",
    "section": "Computer Science and Engineering",
    "topic": "Java Programming",
    "difficulty": "easy",
    "question": "Java source code is compiled to bytecode that is normally executed by the",
    "options": [
      "SQL parser",
      "BIOS",
      "JVM",
      "CSS engine"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The Java Virtual Machine loads and executes Java bytecode, enabling platform portability.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-072",
    "section": "Computer Science and Engineering",
    "topic": "Java Programming",
    "difficulty": "easy",
    "question": "A Java variable declared final",
    "options": [
      "must always be public",
      "is automatically a thread",
      "must be an array",
      "cannot be reassigned after initialization"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "final prevents assignment of a new value after initialization for a variable.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-073",
    "section": "Computer Science and Engineering",
    "topic": "Java Programming",
    "difficulty": "easy",
    "question": "Inside an instance method, the Java keyword this refers to",
    "options": [
      "the current object",
      "the current package",
      "the JVM process",
      "the parent class only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "this is the reference to the current object whose instance method or constructor is executing.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-074",
    "section": "Computer Science and Engineering",
    "topic": "Java Programming",
    "difficulty": "medium",
    "question": "A Java class can implement multiple interfaces, which supports",
    "options": [
      "removal of all method declarations",
      "multiple inheritance of type/behavior contracts",
      "automatic database normalization",
      "multiple class inheritance with many extends clauses"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Java prohibits extending multiple classes but permits implementing multiple interfaces.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-075",
    "section": "Computer Science and Engineering",
    "topic": "Java Programming",
    "difficulty": "easy",
    "question": "A Java package is mainly used to",
    "options": [
      "disable access control",
      "replace the JVM",
      "organize related classes and interfaces",
      "format hard disks"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Packages provide namespaces and group related Java types.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-076",
    "section": "Computer Science and Engineering",
    "topic": "Java Programming",
    "difficulty": "medium",
    "question": "A top-level Java member with no explicit access modifier has",
    "options": [
      "private access to its class only",
      "protected access outside every package",
      "public access everywhere",
      "package-private access"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The default access level permits access within the same package.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-077",
    "section": "Computer Science and Engineering",
    "topic": "Java Programming",
    "difficulty": "medium",
    "question": "Which statement about Java String objects is correct?",
    "options": [
      "String objects are immutable",
      "String objects can never be created",
      "String has no methods",
      "every String is a numeric array"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Operations that appear to modify a String actually produce a new String because String is immutable.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-078",
    "section": "Computer Science and Engineering",
    "topic": "Java Programming",
    "difficulty": "medium",
    "question": "To start a new Java Thread so its run() method executes concurrently, code normally calls",
    "options": [
      "stop() only",
      "start()",
      "finalize()",
      "paint()"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Thread.start() creates the new execution path and then invokes run() on that thread.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-079",
    "section": "Computer Science and Engineering",
    "topic": "Java Programming",
    "difficulty": "medium",
    "question": "In JDBC, which method is commonly used through DriverManager to open a database connection?",
    "options": [
      "parseInt()",
      "getLayout()",
      "getConnection()",
      "repaint()"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "DriverManager.getConnection(...) establishes a JDBC Connection using the supplied URL and credentials.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-080",
    "section": "Computer Science and Engineering",
    "topic": "Java Programming",
    "difficulty": "hard",
    "question": "In the basic servlet lifecycle, the method that handles incoming requests after initialization is",
    "options": [
      "paint()",
      "clone()",
      "main()",
      "service()"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The container calls init() once, then service() for requests, and destroy() before removal.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-081",
    "section": "Computer Science and Engineering",
    "topic": "Python Programming",
    "difficulty": "easy",
    "question": "Python uses indentation primarily to",
    "options": [
      "define code blocks",
      "terminate every statement with braces",
      "allocate network addresses",
      "declare variable types"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Indentation is syntactically significant in Python and delimits suites such as loop, function and conditional bodies.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-082",
    "section": "Computer Science and Engineering",
    "topic": "Python Programming",
    "difficulty": "easy",
    "question": "Which Python object is immutable?",
    "options": [
      "set",
      "tuple",
      "list",
      "dictionary"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Tuples cannot have their elements reassigned after creation, unlike lists, sets and dictionaries.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-083",
    "section": "Computer Science and Engineering",
    "topic": "Python Programming",
    "difficulty": "easy",
    "question": "A Python set is especially useful when you need",
    "options": [
      "a fixed immutable sequence only",
      "ordered duplicate preservation by index only",
      "unique elements without duplicate entries",
      "key-value mapping only"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Sets represent collections of unique hashable elements and automatically eliminate duplicates.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-084",
    "section": "Computer Science and Engineering",
    "topic": "Python Programming",
    "difficulty": "medium",
    "question": "If a = [10, 20, 30, 40], what is a[1:3]?",
    "options": [
      "[20, 30, 40]",
      "[10, 20, 30]",
      "[10, 20]",
      "[20, 30]"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Slice 1:3 includes indices 1 and 2 but excludes index 3, giving [20,30].",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-085",
    "section": "Computer Science and Engineering",
    "topic": "Python Programming",
    "difficulty": "easy",
    "question": "What does math.sqrt(49) return after import math?",
    "options": [
      "7.0",
      "'7'",
      "24.5",
      "49"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "math.sqrt returns the square root as a floating-point number, so sqrt(49) is 7.0.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-086",
    "section": "Computer Science and Engineering",
    "topic": "Python Programming",
    "difficulty": "medium",
    "question": "Which special method commonly initializes a newly created Python object?",
    "options": [
      "__start__",
      "__init__",
      "__deleteall__",
      "__main__"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "__init__ is invoked after object creation to initialize instance state.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-087",
    "section": "Computer Science and Engineering",
    "topic": "Python Programming",
    "difficulty": "medium",
    "question": "What is the result of len({2, 2, 5, 7, 7}) in Python?",
    "options": [
      "5",
      "2",
      "3",
      "4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A set keeps unique values only: {2,5,7}, whose length is 3.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-088",
    "section": "Computer Science and Engineering",
    "topic": "Python Programming",
    "difficulty": "medium",
    "question": "Using re.fullmatch(r\"\\d{3}\", \"482\") returns a match because the string contains",
    "options": [
      "three letters",
      "a decimal point",
      "at least four digits",
      "exactly three digits"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "\\d matches a digit and {3} requires exactly three; fullmatch requires the entire string to fit.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-089",
    "section": "Computer Science and Engineering",
    "topic": "Python Programming",
    "difficulty": "easy",
    "question": "Opening a file with mode 'a' in Python is used to",
    "options": [
      "append data to the end of the file",
      "rename the file automatically",
      "truncate and overwrite without writing",
      "read only from the beginning"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Append mode writes new data at the end and preserves existing content.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-090",
    "section": "Computer Science and Engineering",
    "topic": "Python Programming",
    "difficulty": "medium",
    "question": "Which Tkinter geometry manager arranges widgets in rows and columns?",
    "options": [
      "place only in table cells",
      "grid",
      "canvas",
      "pack only in absolute coordinates"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "grid organizes widgets in a row-and-column layout; pack and place use different positioning strategies.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-091",
    "section": "Computer Science and Engineering",
    "topic": "Web Technologies",
    "difficulty": "easy",
    "question": "In HTML, the <strong> element normally indicates",
    "options": [
      "a line break only",
      "an image source",
      "strong importance",
      "a table row"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "<strong> marks content of strong importance and is typically rendered with strong emphasis.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-092",
    "section": "Computer Science and Engineering",
    "topic": "Web Technologies",
    "difficulty": "easy",
    "question": "The main purpose of the HTML <form> element is to",
    "options": [
      "set an IP address",
      "create operating-system files",
      "define only page titles",
      "collect and submit user input"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Forms group input controls and provide a mechanism for submitting user-entered data.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-093",
    "section": "Computer Science and Engineering",
    "topic": "Web Technologies",
    "difficulty": "easy",
    "question": "In the CSS box model, the space between an element's content and its border is controlled by",
    "options": [
      "padding",
      "z-index",
      "margin",
      "font-family"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Padding lies inside the border around the content; margin lies outside the border.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-094",
    "section": "Computer Science and Engineering",
    "topic": "Web Technologies",
    "difficulty": "medium",
    "question": "XML element names are generally",
    "options": [
      "case-insensitive in all parsers",
      "case-sensitive",
      "restricted to one character",
      "always converted to uppercase"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "XML is case-sensitive, so <Item> and <item> are different element names.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-095",
    "section": "Computer Science and Engineering",
    "topic": "Web Technologies",
    "difficulty": "medium",
    "question": "In JavaScript, the operator === tests",
    "options": [
      "inequality after mandatory conversion",
      "string concatenation only",
      "strict equality without type coercion",
      "assignment"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "=== compares both value and type without the loose coercion performed by ==.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-096",
    "section": "Computer Science and Engineering",
    "topic": "Web Technologies",
    "difficulty": "easy",
    "question": "In JavaScript, arr.push(x) normally",
    "options": [
      "sorts arr automatically",
      "removes the first element",
      "creates a CSS rule",
      "adds x to the end of arr"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Array.push appends one or more elements to the end of an array.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-097",
    "section": "Computer Science and Engineering",
    "topic": "Web Technologies",
    "difficulty": "easy",
    "question": "A PHP variable name normally begins with",
    "options": [
      "$",
      "@",
      "%",
      "#"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "PHP variables are written with a leading dollar sign, such as $name.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-098",
    "section": "Computer Science and Engineering",
    "topic": "Web Technologies",
    "difficulty": "medium",
    "question": "In PHP, count([4, 8, 12, 16]) returns",
    "options": [
      "3",
      "4",
      "40",
      "16"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "count returns the number of elements in the array, which is 4.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-099",
    "section": "Computer Science and Engineering",
    "topic": "Web Technologies",
    "difficulty": "medium",
    "question": "A web cookie is commonly stored",
    "options": [
      "inside an Ethernet cable",
      "only inside the CPU cache",
      "on the client and sent with matching HTTP requests",
      "only in a database server with no client copy"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Cookies are client-side name-value data associated with a site and are included in applicable HTTP requests.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  },
  {
    "id": "tg-ecet-2026-cs-100",
    "section": "Computer Science and Engineering",
    "topic": "Web Technologies",
    "difficulty": "medium",
    "question": "A server-side session is useful because it can",
    "options": [
      "replace all HTML tags",
      "make HTTP inherently connectionless disappear",
      "assign physical RAM addresses to browsers",
      "maintain user-specific state across multiple HTTP requests"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Sessions associate a sequence of requests with server-maintained state, usually via a session identifier.",
    "source": {
      "kind": "original",
      "reference": "TG ECET 2026 current CSE syllabus and official examination pattern",
      "url": "https://ecet.tgche.ac.in/UI/Syllabus.aspx",
      "checkedOn": "2026-08-28"
    }
  }
];
