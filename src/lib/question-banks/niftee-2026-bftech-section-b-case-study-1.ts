import type { Question } from '../questions';

export const NIFTEE_2026_BFTECH_SECTION_B_CASE_STUDY_1: Question[] = [
  {
    "id": "niftee-2026-bft-bc-001",
    "section": "Section B \u2014 Case Study",
    "topic": "Operations",
    "difficulty": "medium",
    "question": "A small apparel unit has two bottlenecks: cutting can prepare 90 pieces/hour and stitching can finish 60 pieces/hour. Packing can handle 100 pieces/hour. If buffers are available and the line runs steadily, which action most directly raises maximum hourly output?",
    "options": [
      "Increase cutting from 90 to 95 pieces/hour",
      "Increase packing from 100 to 120 pieces/hour",
      "Reduce the buffer before stitching",
      "Increase stitching capacity"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Stitching is the bottleneck at 60 pieces/hour, so raising stitching capacity is the most direct way to increase line throughput.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bc-002",
    "section": "Section B \u2014 Case Study",
    "topic": "Inventory",
    "difficulty": "medium",
    "question": "A brand sells a seasonal scarf. Unsold units lose most of their value after the season, while the supplier can replenish in 5 days. Demand is uncertain. Which policy best addresses the stated risk?",
    "options": [
      "Eliminate all safety stock regardless of replenishment reliability",
      "Ignore sales data until the season ends",
      "Order the maximum possible quantity immediately",
      "Order a smaller initial batch and use rapid replenishment if sales are strong"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "A smaller initial batch limits markdown exposure while short replenishment time preserves responsiveness.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bc-003",
    "section": "Section B \u2014 Case Study",
    "topic": "Quality Control",
    "difficulty": "medium",
    "question": "A factory finds that 70% of seam defects come from one machine, even though that machine produces only 20% of units. What is the most useful first action?",
    "options": [
      "Replace every machine at once",
      "Assume the operator is at fault without checking equipment",
      "Inspect and calibrate that machine before changing the whole process",
      "Increase final inspection only and never investigate the source"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The defect concentration points to a specific source; inspecting/calibrating it is a targeted first step.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bc-004",
    "section": "Section B \u2014 Case Study",
    "topic": "Sourcing",
    "difficulty": "hard",
    "question": "A supplier offers fabric at \u20b9210/m with 2% expected rejection; another offers \u20b9202/m with 8% rejection. Ignoring all other costs, which has the lower expected material cost per usable metre?",
    "options": [
      "The \u20b9202/m supplier",
      "They are exactly equal",
      "The \u20b9210/m supplier",
      "Cannot be compared without knowing colour"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Expected cost per usable metre is price/(1\u2212rejection): 210/0.98\u2248214.29; 202/0.92\u2248219.57, so the first is lower.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bc-005",
    "section": "Section B \u2014 Case Study",
    "topic": "Capacity Planning",
    "difficulty": "medium",
    "question": "A workshop needs 1,200 units in 5 days. One line can produce 210 good units per day. A second identical line can be rented. What is the minimum number of days the second line must operate if both lines maintain that rate?",
    "options": [
      "3 days",
      "1 day",
      "0 days",
      "2 days"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "One line for 5 days makes 1050, leaving 150. The second line makes 210 per day, so one day is enough.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bc-006",
    "section": "Section B \u2014 Case Study",
    "topic": "Pricing",
    "difficulty": "medium",
    "question": "A store tests two price points for the same accessory. At \u20b9500 it sells 80 units; at \u20b9450 it sells 100 units. Ignoring costs, which price produces higher revenue and by how much?",
    "options": [
      "Both produce the same revenue",
      "\u20b9450, by \u20b910,000",
      "\u20b9500, by \u20b95,000",
      "\u20b9450, by \u20b95,000"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Revenue at \u20b9500 is \u20b940,000; at \u20b9450 it is \u20b945,000, higher by \u20b95,000.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bc-007",
    "section": "Section B \u2014 Case Study",
    "topic": "Sustainability",
    "difficulty": "medium",
    "question": "A company wants to cut packaging material without increasing product damage. Trial A reduces material by 25% but damage rises from 1% to 6%. Trial B reduces material by 15% and damage stays at 1%. Which trial better fits the stated objective?",
    "options": [
      "Trial B",
      "Neither, because any reduction is unacceptable",
      "Trial A because damage rate is irrelevant",
      "Trial A because it removes more material"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The objective includes both material reduction and no increase in damage; Trial B satisfies both conditions.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bc-008",
    "section": "Section B \u2014 Case Study",
    "topic": "Forecasting",
    "difficulty": "hard",
    "question": "A retailer forecast 400 units and sold 440. The next month it forecast 500 and sold 450. Using MAPE = average of |actual\u2212forecast|/actual \u00d7100, what is the MAPE for the two months?",
    "options": [
      "10.1%",
      "9.1%",
      "10.0%",
      "11.1%"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Month 1 error=40/440\u00d7100\u22489.09%; month 2=50/450\u00d7100\u224811.11%; their mean is about 10.10%.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bc-009",
    "section": "Section B \u2014 Case Study",
    "topic": "Workflow",
    "difficulty": "medium",
    "question": "In a sample room, designers wait for fabric approval before cutting, but approvals are processed only once at the end of each day. Most waiting time occurs before approval, not during cutting. Which change most directly targets the delay?",
    "options": [
      "Add more packing tables",
      "Process approvals in smaller batches more frequently",
      "Increase finished-goods storage",
      "Buy faster scissors"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The delay is at the approval queue; more frequent approval cycles directly reduce that wait.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bc-010",
    "section": "Section B \u2014 Case Study",
    "topic": "Supplier Risk",
    "difficulty": "hard",
    "question": "A critical zipper is sourced from one supplier with a 14-day lead time. A backup supplier costs 4% more but can deliver in 4 days. The brand\u2019s priority is continuity during unexpected shortages. Which strategy best addresses that priority?",
    "options": [
      "Use only the cheapest supplier and evaluate alternatives after a stock-out",
      "Reduce quality inspection of zippers",
      "Increase advertising spend",
      "Qualify the backup supplier before a shortage occurs"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Pre-qualifying the faster backup creates a ready alternative during disruption, directly supporting continuity.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bc-011",
    "section": "Section B \u2014 Case Study",
    "topic": "Customer Returns",
    "difficulty": "medium",
    "question": "A footwear brand records return reasons. Size issues account for 55% of returns, colour mismatch 10%, delivery damage 8%, and other reasons 27%. Which investigation should receive first priority if the goal is to reduce the largest return driver?",
    "options": [
      "Logo placement",
      "Courier packaging only",
      "Website colour photography only",
      "Fit and size consistency"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Size issues are the largest recorded return category at 55%, so fit/size consistency is the highest-priority investigation.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bc-012",
    "section": "Section B \u2014 Case Study",
    "topic": "Line Balancing",
    "difficulty": "hard",
    "question": "Three sequential operations take 2, 5 and 3 minutes per unit. One worker is assigned to each operation. With ample buffers, which operation determines the maximum steady output rate?",
    "options": [
      "The 3-minute operation",
      "The 5-minute operation",
      "All three equally",
      "The 2-minute operation"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The slowest operation has the longest cycle time and therefore constrains throughput.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bc-013",
    "section": "Section B \u2014 Case Study",
    "topic": "Break-even",
    "difficulty": "hard",
    "question": "A pop-up stall has fixed cost \u20b912,000. Each item sells for \u20b9500 and has variable cost \u20b9300. How many items must be sold to break even?",
    "options": [
      "40",
      "60",
      "75",
      "50"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Contribution per item=500\u2212300=\u20b9200. Break-even units=12,000/200=60.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bc-014",
    "section": "Section B \u2014 Case Study",
    "topic": "Sampling",
    "difficulty": "medium",
    "question": "A buyer wants to estimate the defect rate of a 10,000-piece lot. Which sampling approach is generally less biased than checking only the first 100 pieces produced?",
    "options": [
      "Inspect only pieces from the top carton",
      "Inspect only the final hour of production",
      "Ask the supplier to choose its best-looking pieces",
      "Select pieces randomly across the lot"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Random selection across the lot reduces location/time selection bias compared with convenience samples.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bc-015",
    "section": "Section B \u2014 Case Study",
    "topic": "Product Development",
    "difficulty": "medium",
    "question": "A prototype receives high style ratings but poor scores for opening and closing the fastening. Which next test is most directly justified?",
    "options": [
      "Usability testing focused on the fastening interaction",
      "A larger colour palette test only",
      "A test of shipping carton weight only",
      "A social-media follower count survey"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "The identified weakness is the fastening interaction, so targeted usability testing addresses the observed problem.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bc-016",
    "section": "Section B \u2014 Case Study",
    "topic": "Ethical Sourcing",
    "difficulty": "medium",
    "question": "An audit finds that a supplier meets delivery and quality targets but cannot provide reliable working-hour records. What is the most appropriate interpretation?",
    "options": [
      "Good delivery proves all labour standards are met",
      "The buyer should delete the audit finding",
      "Operational performance does not remove the need to investigate the labour-record gap",
      "The record gap is irrelevant because quality is high"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Delivery and quality performance do not establish labour compliance; missing working-hour records require follow-up.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bc-017",
    "section": "Section B \u2014 Case Study",
    "topic": "Data Interpretation",
    "difficulty": "hard",
    "question": "A store\u2019s conversion rate rises from 20% to 24% while visitor count falls from 1,000 to 800. What happens to the number of purchases?",
    "options": [
      "It stays at 200",
      "It falls from 200 to 192",
      "It rises from 160 to 192",
      "It rises from 200 to 240"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Initial purchases=1000\u00d720%=200. New purchases=800\u00d724%=192, so the count falls despite higher conversion rate.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bc-018",
    "section": "Section B \u2014 Case Study",
    "topic": "Make-or-Buy",
    "difficulty": "hard",
    "question": "Making a component in-house costs \u20b928 variable cost per unit plus \u20b990,000 fixed cost. Buying costs \u20b940 per unit with no fixed cost. At 10,000 units, which option is cheaper and by how much?",
    "options": [
      "Make in-house, by \u20b930,000",
      "Buy, by \u20b930,000",
      "They cost the same",
      "Make in-house, by \u20b990,000"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "Make cost=28\u00d710,000+90,000=\u20b9370,000. Buy cost=40\u00d710,000=\u20b9400,000. Making is cheaper by \u20b930,000.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bc-019",
    "section": "Section B \u2014 Case Study",
    "topic": "Queue Management",
    "difficulty": "medium",
    "question": "At a service desk, average arrival is 18 customers/hour while one clerk can serve 20/hour. Adding promotional traffic would raise arrivals to 22/hour with no staffing change. What is the key operational risk?",
    "options": [
      "The clerk would become underutilised",
      "Demand would exceed service capacity, causing the queue to grow",
      "Waiting time would necessarily fall",
      "Service capacity would automatically rise to 22/hour"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "With arrivals above service capacity, work accumulates and the queue tends to grow.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  },
  {
    "id": "niftee-2026-bft-bc-020",
    "section": "Section B \u2014 Case Study",
    "topic": "Portfolio Decision",
    "difficulty": "hard",
    "question": "A brand compares two products. Product X contributes \u20b9150 per unit and needs 3 machine-hours; Product Y contributes \u20b9120 per unit and needs 2 machine-hours. Machine time is the only scarce resource. Which product gives higher contribution per scarce hour?",
    "options": [
      "Both are equal",
      "Product X",
      "Product Y",
      "Cannot be determined without selling price"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0.25,
    "explanation": "X yields \u20b950 per machine-hour; Y yields \u20b960 per machine-hour. With machine time scarce, Y gives the higher contribution per constrained hour.",
    "source": {
      "kind": "original",
      "reference": "NIFTEE 2026 official NTA Information Bulletin and NIFT Admission Prospectus \u2014 B.FTech GAT Sections A and B",
      "url": "https://nift.ac.in/admission",
      "checkedOn": "2026-08-31"
    }
  }
];
