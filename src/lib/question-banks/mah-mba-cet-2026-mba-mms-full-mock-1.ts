import type { Question } from '../questions';

export const MAH_MBA_CET_2026_MBA_MMS_FULL_MOCK_1: Question[] = [
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-001",
      "section": "Logical Reasoning",
      "topic": "Conditional reasoning",
      "difficulty": "medium",
      "question": "A design review follows two rules: if the prototype uses a metal casing, it must pass a thermal test; if it passes the thermal test, the compliance note is signed. The prototype uses a metal casing. Which conclusion must follow?",
      "options": [
        "The prototype cannot use plastic parts.",
        "The compliance note is signed.",
        "The thermal test must fail.",
        "The compliance note was signed before testing.",
        "No other test is required."
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Metal casing implies thermal test, and thermal test implies a signed compliance note; chaining the two rules gives the conclusion.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-002",
      "section": "Logical Reasoning",
      "topic": "Conditional reasoning",
      "difficulty": "medium",
      "question": "At a research desk, any file marked urgent is reviewed the same day. Any file reviewed the same day is logged before 6 p.m. File R is marked urgent. What must be true?",
      "options": [
        "File R was created before noon.",
        "File R is logged before 6 p.m.",
        "File R is the only urgent file.",
        "File R needs no reviewer.",
        "File R is logged only if it is confidential."
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Urgent → same-day review → logged before 6 p.m.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-003",
      "section": "Logical Reasoning",
      "topic": "Conditional reasoning",
      "difficulty": "medium",
      "question": "A warehouse rule says: if a parcel is fragile, it receives a red tag; if a parcel receives a red tag, it is not placed on the top rack. Parcel P is fragile. Which statement is forced?",
      "options": [
        "Parcel P is the heaviest parcel.",
        "Parcel P must be stored outdoors.",
        "Parcel P has no red tag.",
        "Every parcel off the top rack is fragile.",
        "Parcel P is not placed on the top rack."
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Fragile implies red tag, and red tag implies not top rack.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-004",
      "section": "Logical Reasoning",
      "topic": "Contrapositive",
      "difficulty": "medium",
      "question": "A grant committee uses the rule: every proposal that reaches the interview stage has passed the methods screen. Proposal Z did not pass the methods screen. What follows logically?",
      "options": [
        "Proposal Z was rejected for budget reasons.",
        "Proposal Z did not reach the interview stage.",
        "Every proposal that passed the methods screen was interviewed.",
        "Proposal Z had no methods section.",
        "The committee interviewed no proposals."
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The contrapositive of interview → passed methods is not passed methods → not interviewed.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-005",
      "section": "Logical Reasoning",
      "topic": "Contrapositive",
      "difficulty": "medium",
      "question": "Every shipment released before noon has a completed customs code. Shipment K has no completed customs code. Which conclusion is valid?",
      "options": [
        "Shipment K was released exactly at noon.",
        "Shipment K is international.",
        "No shipment had a customs code.",
        "Shipment K was not released before noon.",
        "A customs code guarantees early release."
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "From early release → completed code, contraposition yields no completed code → not early release.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-006",
      "section": "Logical Reasoning",
      "topic": "Exclusive conditions",
      "difficulty": "medium",
      "question": "A software build can be deployed only if exactly one of modules X and Y is enabled. Build B has both X and Y enabled. What is certain?",
      "options": [
        "Module X must be disabled permanently.",
        "Module Y is defective.",
        "Build B cannot be deployed under the rule.",
        "Build B was already deployed.",
        "Exactly one module is required in every software system."
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Having both modules enabled violates the exactly-one condition for deployment.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-007",
      "section": "Logical Reasoning",
      "topic": "Necessary conditions",
      "difficulty": "medium",
      "question": "A candidate may enter the final round only if both the portfolio and the reference check are complete. Mira’s reference check is incomplete. Which statement must be true?",
      "options": [
        "Mira’s portfolio is incomplete.",
        "Mira may not enter the final round yet.",
        "Mira failed the first round.",
        "The reference check can be ignored.",
        "All other candidates have completed both checks."
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Both conditions are necessary; one incomplete condition blocks entry.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-008",
      "section": "Logical Reasoning",
      "topic": "Implication",
      "difficulty": "easy",
      "question": "Every audited branch submits a reconciliation sheet. Branch D was audited. Therefore:",
      "options": [
        "Branch D submits a reconciliation sheet.",
        "Branch D is the largest branch.",
        "Only audited branches submit sheets.",
        "Branch D was audited twice.",
        "No unaudited branch can reconcile accounts."
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "This is the direct consequence of the universal rule.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-009",
      "section": "Logical Reasoning",
      "topic": "Logical equivalence",
      "difficulty": "medium",
      "question": "A sensor alarm sounds if and only if both pressure P and temperature T exceed their thresholds. The alarm is silent. Which conclusion is justified?",
      "options": [
        "Both P and T are below threshold.",
        "Exactly one of P and T is below threshold.",
        "The sensor has failed.",
        "At least one of P or T does not exceed its threshold.",
        "Neither threshold is defined."
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "If alarm ↔ (P and T), a silent alarm means it is not true that both exceed thresholds; at least one does not.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-010",
      "section": "Logical Reasoning",
      "topic": "Disjunction",
      "difficulty": "easy",
      "question": "A courier will use either Route A or Route B, but not both. The courier does not use Route A. Which route is used?",
      "options": [
        "Neither route",
        "Route B",
        "Both routes",
        "A third route",
        "Route A after Route B"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "An exclusive either/or plus not A forces B.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-011",
      "section": "Logical Reasoning",
      "topic": "Chain reasoning",
      "difficulty": "medium",
      "question": "If a report contains a sampling error, its confidence interval is recalculated. If the interval is recalculated, the executive summary is revised. The executive summary was not revised. What can be concluded?",
      "options": [
        "The report did not contain a sampling error.",
        "The report had no numerical data.",
        "The report was never read.",
        "The interval was certainly recalculated.",
        "Sampling errors never matter."
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "By contraposition through the chain, not revised → interval not recalculated → no sampling error.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-012",
      "section": "Logical Reasoning",
      "topic": "Necessary and sufficient",
      "difficulty": "hard",
      "question": "A machine enters safe mode exactly when coolant flow is below 4 L/min or chamber pressure exceeds 9 bar. It is not in safe mode. What must be true?",
      "options": [
        "Coolant flow is below 4 L/min.",
        "Pressure exceeds 9 bar.",
        "Exactly one threshold is violated.",
        "Both readings equal zero.",
        "Coolant flow is at least 4 L/min and chamber pressure is at most 9 bar."
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Negating (flow<4 OR pressure>9) gives flow≥4 AND pressure≤9.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-013",
      "section": "Logical Reasoning",
      "topic": "Quantifiers",
      "difficulty": "medium",
      "question": "All mentors in Program Q are certified. Some certified staff are analysts. Which statement is definitely true?",
      "options": [
        "Some mentors in Program Q are analysts.",
        "Every analyst is a mentor.",
        "No certified staff member is an analyst.",
        "Program Q has at least one mentor.",
        "Every mentor in Program Q is certified."
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The first premise itself is guaranteed; the existential analyst statement does not establish overlap with mentors or mentor existence.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-014",
      "section": "Logical Reasoning",
      "topic": "Quantifiers",
      "difficulty": "medium",
      "question": "No electric forklift in Depot S uses diesel. Vehicle V in Depot S is an electric forklift. Which conclusion follows?",
      "options": [
        "Vehicle V has no battery.",
        "Every non-diesel vehicle is electric.",
        "Depot S has no diesel vehicles at all.",
        "Vehicle V does not use diesel.",
        "Vehicle V is the only forklift."
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "V belongs to the class that is stated to use no diesel.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-015",
      "section": "Logical Reasoning",
      "topic": "Quantifiers",
      "difficulty": "hard",
      "question": "Some, but not all, members of a committee are economists. Which statement must be true?",
      "options": [
        "No economist is on the committee.",
        "Exactly one member is an economist.",
        "At least one committee member is not an economist.",
        "Most members are economists.",
        "Every non-economist is a lawyer."
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "“Some, but not all” directly entails that at least one member is outside the economist group.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-016",
      "section": "Logical Reasoning",
      "topic": "Selection constraints",
      "difficulty": "medium",
      "question": "A four-person panel is chosen from A,B,C,D,E,F. A and B cannot both be chosen; C must be chosen if D is chosen; E and F must either both be chosen or both be omitted. Which panel is feasible?",
      "options": [
        "A, B, C, D",
        "B, D, E, F",
        "A, C, E, F",
        "A, D, E, F",
        "B, C, D, E"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "A,C,E,F satisfies all three constraints. The other options violate A/B, D→C, or the E/F pairing.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-017",
      "section": "Logical Reasoning",
      "topic": "Ordering constraints",
      "difficulty": "medium",
      "question": "Four presentations J,K,L,M occupy slots 1–4. J is before K; L is not first; M is immediately after J. Which order is possible?",
      "options": [
        "L, J, K, M",
        "J, L, M, K",
        "M, J, L, K",
        "K, J, M, L",
        "J, M, L, K"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "J,M,L,K respects J before K, L not first, and M immediately after J.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-018",
      "section": "Logical Reasoning",
      "topic": "Assignment constraints",
      "difficulty": "medium",
      "question": "Three analysts P,Q,R are assigned one each to Audit, Forecast, and Pricing. P is not on Audit; Q is not on Pricing; R is not on Forecast. Which assignment is possible?",
      "options": [
        "P–Pricing, Q–Audit, R–Forecast",
        "P–Audit, Q–Forecast, R–Pricing",
        "P–Forecast, Q–Pricing, R–Audit",
        "P–Audit, Q–Pricing, R–Forecast",
        "P–Forecast, Q–Audit, R–Pricing"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Only P-Forecast, Q-Audit, R-Pricing satisfies all three exclusions.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-019",
      "section": "Logical Reasoning",
      "topic": "Grouping",
      "difficulty": "medium",
      "question": "Six cards A–F are split into two groups of three. A must be with C; B must be separated from D; E must be with F. Which grouping is possible?",
      "options": [
        "{A,C,D} and {B,E,F}",
        "{A,B,D} and {C,E,F}",
        "{A,C,E} and {B,D,F}",
        "{A,D,E} and {B,C,F}",
        "{A,B,E} and {C,D,F}"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The correct grouping keeps A/C together, separates B/D, and keeps E/F together.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-020",
      "section": "Logical Reasoning",
      "topic": "Sequencing",
      "difficulty": "medium",
      "question": "Five tasks R,S,T,U,V are scheduled in that order positions 1–5 with constraints: R before T, S immediately before U, and V is not last. Which sequence works?",
      "options": [
        "R, T, S, V, U",
        "S, U, R, V, T",
        "V, R, T, U, S",
        "R, S, V, U, T",
        "S, R, U, T, V"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "S,U,R,V,T has S immediately before U, R before T, and V not last.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-021",
      "section": "Logical Reasoning",
      "topic": "Selection constraints",
      "difficulty": "hard",
      "question": "Exactly three initiatives are funded from P,Q,R,S,T. If P is funded, Q is not. R and S are funded together or not at all. T can be funded only if Q is funded. P cannot be funded with R. Which set is feasible?",
      "options": [
        "Q, R, S",
        "P, R, S",
        "P, Q, T",
        "Q, S, T",
        "R, S, T"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Q,R,S satisfies all rules; every other option violates P/Q, R/S pairing, T→Q, or the P/R exclusion.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-022",
      "section": "Logical Reasoning",
      "topic": "Circular constraints",
      "difficulty": "medium",
      "question": "Four departments A,B,C,D occupy four sides of a square floor plan. A must share an edge with B; C must be opposite A. Which statement must be true?",
      "options": [
        "B is opposite A.",
        "C shares an edge with A.",
        "D is opposite B.",
        "A is opposite D.",
        "B is opposite C only if A moves."
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "If C is opposite A, the remaining opposite pair is B and D; A/B adjacency is compatible with that placement.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-023",
      "section": "Logical Reasoning",
      "topic": "Capacity constraints",
      "difficulty": "medium",
      "question": "A van has capacity for exactly 10 load units. Each type X crate uses 2 units and each type Y crate uses 1 unit. If 3 X crates are loaded, how many Y crates fill the remaining capacity?",
      "options": [
        "2",
        "3",
        "4",
        "5",
        "7"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Three X crates use 6 capacity units, leaving 4 for four Y crates.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-024",
      "section": "Logical Reasoning",
      "topic": "Ranking constraints",
      "difficulty": "medium",
      "question": "In a five-team ranking, A is above B, C is below D, and B is above D. Which relation must hold?",
      "options": [
        "C is above A.",
        "D is above A.",
        "B is below C.",
        "A is above C.",
        "A is immediately above B."
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "A>B>D>C, so A must be above C; no immediacy is implied.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-025",
      "section": "Logical Reasoning",
      "topic": "Allocation constraints",
      "difficulty": "medium",
      "question": "Four lockers 1–4 receive W,X,Y,Z. W is in an odd-numbered locker; X is immediately after W; Z is not in locker 4. Which placement is possible?",
      "options": [
        "1:Z, 2:W, 3:X, 4:Y",
        "1:W, 2:Y, 3:X, 4:Z",
        "1:Y, 2:W, 3:X, 4:Z",
        "1:X, 2:W, 3:Y, 4:Z",
        "1:W, 2:X, 3:Z, 4:Y"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Only W1-X2 with Z3 satisfies all conditions; W3-X4 would force Z not 4 but options conflict as shown.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-026",
      "section": "Logical Reasoning",
      "topic": "Scheduling constraints",
      "difficulty": "medium",
      "question": "A two-day workshop has sessions A,B,C,D, two per day. A and B must be on different days; C must be on the same day as A. Which pair must be together?",
      "options": [
        "A and C",
        "A and B",
        "B and C",
        "B and D",
        "C and D"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The rule directly requires A and C to share a day.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-027",
      "section": "Logical Reasoning",
      "topic": "Selection constraints",
      "difficulty": "medium",
      "question": "A project team must contain exactly two of engineers J,K,L and exactly one of designers M,N. J cannot serve with M; K must serve if N is selected. Which team is possible?",
      "options": [
        "J, K, M",
        "J, L, M",
        "J, L, N",
        "K, L, N",
        "J, K, L"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "K,L,N has exactly two engineers and one designer; N requires K, and J/M conflict is irrelevant. Each other option violates a rule.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-028",
      "section": "Logical Reasoning",
      "topic": "Ordering constraints",
      "difficulty": "hard",
      "question": "Six reports A–F are filed in a row. A is immediately before B. C is somewhere after D. E is first. F is not last. Which sequence is possible?",
      "options": [
        "E, A, B, C, D, F",
        "E, F, C, A, B, D",
        "E, C, D, F, A, B",
        "E, D, A, B, F, C",
        "A, B, E, D, F, C"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "E,D,A,B,F,C satisfies adjacency, C after D, E first, and F not last.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-029",
      "section": "Logical Reasoning",
      "topic": "Binary classification",
      "difficulty": "medium",
      "question": "Each of four samples P,Q,R,S is either acidic or neutral. P and Q have different classifications; Q and R are the same; R and S are different. If P is acidic, S is:",
      "options": [
        "neutral",
        "acidic",
        "necessarily basic",
        "both acidic and neutral",
        "indeterminate"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "P acidic → Q neutral → R neutral → S acidic.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-030",
      "section": "Logical Reasoning",
      "topic": "Network constraints",
      "difficulty": "medium",
      "question": "A message can travel along directed links A→B, A→C, B→D, C→D, D→E. Starting at A, which node other than D cannot be reached by any route that avoids D entirely?",
      "options": [
        "E",
        "B",
        "C",
        "D",
        "A"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Every route from A to E uses D immediately before E; B and C are reachable directly.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-031",
      "section": "Logical Reasoning",
      "topic": "Resource constraints",
      "difficulty": "medium",
      "question": "A lab has 9 hours. Experiment X uses 4 hours, Y uses 3, Z uses 5. Exactly two experiments must be run without exceeding 9 hours. Which pair leaves the least unused time?",
      "options": [
        "X and Y",
        "X and Z",
        "Y and Z",
        "X only",
        "Z only"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "X+Z uses all 9 hours; the other two-experiment pairs use 7 or 8 hours.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-032",
      "section": "Logical Reasoning",
      "topic": "Parity constraints",
      "difficulty": "medium",
      "question": "Three switches A,B,C are either ON or OFF. Exactly two are ON. If A is OFF, what must be true?",
      "options": [
        "B is OFF",
        "C is OFF",
        "B and C are ON",
        "Exactly one of B,C is ON",
        "All three are OFF"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "With exactly two ON and A OFF, the two ON switches must be B and C.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-033",
      "section": "Logical Reasoning",
      "topic": "Set constraints",
      "difficulty": "medium",
      "question": "All members of Team X know SQL. Exactly two members of Team X also know Python. If Team X has five members, how many know SQL but not Python?",
      "options": [
        "2",
        "3",
        "4",
        "5",
        "7"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "All five know SQL and two also know Python, leaving three SQL-only members.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-034",
      "section": "Logical Reasoning",
      "topic": "Pairing constraints",
      "difficulty": "medium",
      "question": "Four speakers P,Q,R,S are paired into two debates. P cannot be paired with Q; Q also cannot be paired with R; R must be paired with either P or Q. Which pairing is possible?",
      "options": [
        "P–Q and R–S",
        "P–S and Q–R",
        "P–Q and S–R",
        "P–S and R–Q",
        "P–R and Q–S"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "P–R and Q–S satisfies P≠Q, Q≠R, and R paired with P or Q; the alternatives violate at least one rule.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-035",
      "section": "Logical Reasoning",
      "topic": "Temporal constraints",
      "difficulty": "hard",
      "question": "A maintenance cycle has checks L,M,N on three consecutive days, one per day. M cannot be on day 1; N must be earlier than L. If L is on day 3, which check is on day 1?",
      "options": [
        "N",
        "L",
        "M",
        "either M or N",
        "none"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "With L day 3, N must be before L. If N day 2, M would be day 1, prohibited; therefore N is day 1.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-036",
      "section": "Logical Reasoning",
      "topic": "Direction sense",
      "difficulty": "medium",
      "question": "A surveyor walks 7 m east, 4 m north, 2 m west, and 4 m south. Where is the endpoint relative to the start?",
      "options": [
        "5 m west",
        "3 m east",
        "3 m north",
        "5 m east",
        "9 m east"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "North/south cancel; east-west net=7−2=5 m east.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-037",
      "section": "Logical Reasoning",
      "topic": "Direction sense",
      "difficulty": "medium",
      "question": "From a marker, Isha walks 6 m south, turns left for 8 m, then turns left for 6 m. Her final position is:",
      "options": [
        "8 m west",
        "6 m north",
        "8 m east of the marker",
        "10 m east",
        "14 m south"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "South then east then north cancels vertical displacement, leaving 8 m east.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-038",
      "section": "Logical Reasoning",
      "topic": "Family relations",
      "difficulty": "medium",
      "question": "Ria says, “The man in the photograph is the only son of my mother’s only brother.” The man is Ria’s:",
      "options": [
        "brother",
        "cousin",
        "uncle",
        "father",
        "nephew"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Mother’s only brother is Ria’s maternal uncle; his only son is Ria’s cousin.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-039",
      "section": "Logical Reasoning",
      "topic": "Family relations",
      "difficulty": "medium",
      "question": "Arun is the father of Bina. Chetan is Bina’s brother. Deepa is Chetan’s daughter. Arun is Deepa’s:",
      "options": [
        "uncle",
        "grandfather",
        "father",
        "brother",
        "cousin"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Chetan is Arun’s son, so Chetan’s daughter Deepa is Arun’s granddaughter.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-040",
      "section": "Logical Reasoning",
      "topic": "Ranking",
      "difficulty": "easy",
      "question": "In a queue of 23 people, Neel is 7th from the front. What is his position from the back?",
      "options": [
        "17",
        "15",
        "16",
        "18",
        "19"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Position from back=23−7+1=17.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-041",
      "section": "Logical Reasoning",
      "topic": "Ranking",
      "difficulty": "medium",
      "question": "Tara ranks 12th from the top and 19th from the bottom in a class. How many students are in the class?",
      "options": [
        "30",
        "29",
        "31",
        "32",
        "33"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Total=12+19−1=30.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-042",
      "section": "Logical Reasoning",
      "topic": "Coding logic",
      "difficulty": "medium",
      "question": "A code assigns each word the sum of alphabetical positions of its first and last letters. Under this rule, MARKET is coded as:",
      "options": [
        "31",
        "32",
        "34",
        "33",
        "39"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "M=13 and T=20, giving 33.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-043",
      "section": "Logical Reasoning",
      "topic": "Symbolic coding",
      "difficulty": "medium",
      "question": "A machine replaces every digit d by 9−d. What output does it give for 5072?",
      "options": [
        "4027",
        "5927",
        "4972",
        "4927",
        "5178"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Digitwise: 5→4,0→9,7→2,2→7, so 4927.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-044",
      "section": "Logical Reasoning",
      "topic": "Comparison",
      "difficulty": "medium",
      "question": "P is taller than Q; R is shorter than Q; S is taller than P. Which person is definitely tallest among P,Q,R,S?",
      "options": [
        "S",
        "P",
        "Q",
        "R",
        "cannot be determined"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "S>P>Q>R, so S is tallest.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-045",
      "section": "Logical Reasoning",
      "topic": "Age ordering",
      "difficulty": "easy",
      "question": "K is older than L but younger than M. N is younger than L. Who is oldest?",
      "options": [
        "K",
        "L",
        "N",
        "cannot be determined",
        "M"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "M>K>L>N.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-046",
      "section": "Logical Reasoning",
      "topic": "Data sufficiency",
      "difficulty": "medium",
      "question": "What is x? Statement I: x+y=14. Statement II: x−y=4.",
      "options": [
        "Statement I alone is sufficient.",
        "Statement II alone is sufficient.",
        "Both statements together are sufficient; neither alone is sufficient.",
        "Either statement alone is sufficient.",
        "Even both together are insufficient."
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Together, adding equations gives 2x=18 → x=9; each single equation has two unknowns.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-047",
      "section": "Logical Reasoning",
      "topic": "Data sufficiency",
      "difficulty": "medium",
      "question": "Is integer n even? I: n is divisible by 6. II: n is divisible by 3.",
      "options": [
        "Statement II alone is sufficient.",
        "Both together are needed.",
        "Statement I alone is sufficient.",
        "Either alone is sufficient.",
        "Even both are insufficient."
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Divisibility by 6 guarantees evenness. Divisibility by 3 alone does not.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-048",
      "section": "Logical Reasoning",
      "topic": "Data sufficiency",
      "difficulty": "medium",
      "question": "What is the area of a rectangle? I: its length is 12 cm. II: its perimeter is 40 cm.",
      "options": [
        "I alone",
        "Both statements together are sufficient; neither alone is sufficient.",
        "II alone",
        "Either alone",
        "Both still insufficient"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Together, 2(12+w)=40 gives w=8 and area=96; neither statement alone determines both dimensions.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-049",
      "section": "Logical Reasoning",
      "topic": "Data sufficiency",
      "difficulty": "medium",
      "question": "Is p>0? I: p²=16. II: p+4=8.",
      "options": [
        "Statement I alone is sufficient.",
        "Statement II alone is sufficient.",
        "Both together are required.",
        "Either alone is sufficient.",
        "Neither statement helps."
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "I permits p=±4; II uniquely gives p=4>0.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-050",
      "section": "Logical Reasoning",
      "topic": "Data sufficiency",
      "difficulty": "medium",
      "question": "What is the value of a+b? I: a=5. II: b=7.",
      "options": [
        "I alone",
        "II alone",
        "Either alone",
        "Both statements together are sufficient; neither alone is sufficient.",
        "Both insufficient"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Each statement supplies one addend; together they give 12.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-051",
      "section": "Logical Reasoning",
      "topic": "Numerical logic",
      "difficulty": "medium",
      "question": "A display uses ordered pairs. Its update rule is (a,b)→(b−a,a+b). If the current display is (7,12), what is the next display?",
      "options": [
        "(5,19)",
        "(19,5)",
        "(5,12)",
        "(7,19)",
        "(−5,19)"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Apply the stated rule: b−a=12−7=5 and a+b=19, giving (5,19).",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-052",
      "section": "Logical Reasoning",
      "topic": "Numerical logic",
      "difficulty": "medium",
      "question": "The successive differences in 4,9,17,28,42 are 5,8,11,14. If the difference pattern continues, the next term is:",
      "options": [
        "56",
        "57",
        "59",
        "58",
        "60"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Differences rise by 3, so next difference=17 and next term=42+17=59.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-053",
      "section": "Logical Reasoning",
      "topic": "Numerical logic",
      "difficulty": "medium",
      "question": "A counter displays 2, 6, 18, 54,... while a second displays 5,10,20,40,... Which first exceeds 100?",
      "options": [
        "The second counter, at its fifth display.",
        "Both at the fifth display.",
        "The first at its sixth display.",
        "Neither ever exceeds 100.",
        "The first counter, at its fifth display."
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "First: 2,6,18,54,162 exceeds 100 at fifth; second is 80 at fifth and 160 at sixth.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-054",
      "section": "Logical Reasoning",
      "topic": "Numerical logic",
      "difficulty": "medium",
      "question": "A score starts at 100. It is increased by 20%, then decreased by 20%. The final score is:",
      "options": [
        "80",
        "100",
        "104",
        "96",
        "120"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "100×1.2×0.8=96.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-055",
      "section": "Logical Reasoning",
      "topic": "Numerical logic",
      "difficulty": "medium",
      "question": "Three bins contain 18, 24, and 30 parts. The same number is removed from each so that the new totals are in the ratio 2:3:4. How many are removed from each?",
      "options": [
        "6",
        "3",
        "4",
        "8",
        "10"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "18−x : 24−x : 30−x =2:3:4. From first two, 3(18−x)=2(24−x) gives x=6; then values 12:18:24 fit.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-056",
      "section": "Logical Reasoning",
      "topic": "Table reasoning",
      "difficulty": "medium",
      "question": "A dashboard shows defects by line: L1=12, L2=8, L3=15, L4=5. If only lines with more than 10 defects are escalated, how many lines are escalated?",
      "options": [
        "2",
        "1",
        "3",
        "4",
        "5"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Only L1 and L3 exceed 10.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-057",
      "section": "Logical Reasoning",
      "topic": "Ratio reasoning",
      "difficulty": "medium",
      "question": "A budget is split among A,B,C in ratio 2:3:5. If C receives ₹40,000, the total budget is:",
      "options": [
        "60000",
        "70000",
        "100000",
        "120000",
        "80000"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Five ratio parts are ₹40,000, so one part is ₹8,000 and ten parts total ₹80,000.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-058",
      "section": "Logical Reasoning",
      "topic": "Set counting",
      "difficulty": "medium",
      "question": "In a group of 60, 34 use tool A, 29 use tool B, and 11 use neither. How many use both?",
      "options": [
        "10",
        "12",
        "16",
        "18",
        "14"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "At least one=49. Intersection=34+29−49=14.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-059",
      "section": "Logical Reasoning",
      "topic": "Weighted reasoning",
      "difficulty": "medium",
      "question": "A rating is 40% quality and 60% speed. A supplier scores 80 on quality and 70 on speed. Its weighted rating is:",
      "options": [
        "72",
        "75",
        "76",
        "74",
        "78"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "0.4×80+0.6×70=32+42=74.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-060",
      "section": "Logical Reasoning",
      "topic": "Rate reasoning",
      "difficulty": "medium",
      "question": "A scanner processes 240 pages in 8 minutes at a constant rate. How many pages does it process in 15 minutes?",
      "options": [
        "360",
        "420",
        "450",
        "480",
        "525"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Rate=30 pages/min; in 15 min it processes 450 pages.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-061",
      "section": "Logical Reasoning",
      "topic": "Strengthen argument",
      "difficulty": "medium",
      "question": "A city library argues that extending Sunday hours will raise weekend visits. Which fact most strengthens the argument?",
      "options": [
        "A survey finds many non-visitors cite the current Sunday closing time as the main barrier.",
        "The library repainted its reading room last year.",
        "Weekday visits rose after a new catalogue was installed.",
        "Some residents prefer digital books.",
        "The library owns more history books than science books."
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Evidence that the present Sunday hours are the limiting factor directly supports the causal claim.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-062",
      "section": "Logical Reasoning",
      "topic": "Weaken argument",
      "difficulty": "medium",
      "question": "A retailer claims a new shelf layout caused a 12% sales increase because sales rose immediately after the redesign. Which fact most weakens the claim?",
      "options": [
        "A major festival promotion began on the same day as the redesign.",
        "The shelves are slightly wider.",
        "The store sells many product categories.",
        "Employees prefer the new layout.",
        "The redesign took two nights to install."
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "A simultaneous promotion is a plausible alternative cause of the sales increase.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-063",
      "section": "Logical Reasoning",
      "topic": "Assumption",
      "difficulty": "medium",
      "question": "A manager says, “We should replace the paper checklist with an app because digital entry will reduce transcription errors.” Which assumption is necessary?",
      "options": [
        "All workers own expensive phones.",
        "Paper can never be accurate.",
        "The app will eliminate every type of error.",
        "Most transcription errors arise when handwritten entries are later re-entered digitally.",
        "The checklist contains no numerical fields."
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The proposed benefit depends on removing a transcription step that is a material source of the errors.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-064",
      "section": "Logical Reasoning",
      "topic": "Inference",
      "difficulty": "medium",
      "question": "After a cafeteria introduced pre-order pickup, average queue length fell, while the number of meals sold stayed almost unchanged. What is most reasonably inferred?",
      "options": [
        "Meal demand collapsed.",
        "The cafeteria reduced its menu to one item.",
        "Every customer used pre-ordering.",
        "Queue length is unrelated to ordering method.",
        "Some customers shifted from waiting in the ordering queue to pre-ordering."
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Stable sales with shorter queues is consistent with part of demand moving to a non-queue ordering channel.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-065",
      "section": "Logical Reasoning",
      "topic": "Explain paradox",
      "difficulty": "medium",
      "question": "A factory produced fewer units this month but used more electricity than last month. Which fact best explains the apparent paradox?",
      "options": [
        "The factory ran energy-intensive calibration cycles on several days.",
        "The unit price was unchanged.",
        "Workers wore new uniforms.",
        "The factory shipped fewer boxes.",
        "The accounting month had the same number of days."
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Calibration can consume substantial electricity without increasing units produced.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-066",
      "section": "Logical Reasoning",
      "topic": "Assumption",
      "difficulty": "medium",
      "question": "A college plans to add bicycle racks to reduce short car trips to campus. Which assumption underlies the plan?",
      "options": [
        "All students live within one kilometre.",
        "Bicycles require no maintenance.",
        "Car parking will be abolished.",
        "A meaningful number of people would cycle if secure parking were available.",
        "Cycling is faster than driving in every condition."
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The intervention works only if lack of secure bicycle parking is a barrier for some potential cyclists.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-067",
      "section": "Logical Reasoning",
      "topic": "Strengthen argument",
      "difficulty": "medium",
      "question": "A subscription service believes a simpler cancellation page will reduce support calls. Which observation most strengthens this belief?",
      "options": [
        "The company changed its logo.",
        "Most users pay monthly.",
        "A large share of support calls currently ask how to cancel.",
        "Support agents work in shifts.",
        "The service has competitors."
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "If many calls are specifically about cancellation, making cancellation self-service simpler should plausibly reduce those calls.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-068",
      "section": "Logical Reasoning",
      "topic": "Weaken argument",
      "difficulty": "medium",
      "question": "A school concludes that a new study room improved exam scores because students using the room scored higher than non-users. Which fact most weakens the conclusion?",
      "options": [
        "The room has bright lighting.",
        "Students who chose the room already had substantially higher prior grades.",
        "Exam scores are numerical.",
        "Some non-users studied at home.",
        "The room opens in the morning."
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Pre-existing achievement differences create selection bias and weaken the causal inference.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-069",
      "section": "Logical Reasoning",
      "topic": "Inference",
      "difficulty": "medium",
      "question": "A courier company reports that 80% of late deliveries occurred on routes longer than 20 km, but only 30% of all deliveries use such routes. Which inference is best supported?",
      "options": [
        "Every long route is late.",
        "Short routes are never late.",
        "Route length is the sole cause of lateness.",
        "Long routes are overrepresented among late deliveries.",
        "Exactly 80% of long routes are late."
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Long routes form 30% of all deliveries but 80% of late ones, so they are disproportionately represented; causation is not proved.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-070",
      "section": "Logical Reasoning",
      "topic": "Resolve discrepancy",
      "difficulty": "medium",
      "question": "A website’s average session duration rose after a redesign, but total page views per user fell. Which fact can reconcile both observations?",
      "options": [
        "The site changed its favicon.",
        "Users received the same internet speed.",
        "The company hired more developers.",
        "The redesign put more content on each page, so users spent longer on fewer pages.",
        "All users visited exactly one page before and after."
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Longer, richer pages can increase time per session while reducing the number of page loads.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-071",
      "section": "Logical Reasoning",
      "topic": "Assumption",
      "difficulty": "medium",
      "question": "A clinic proposes reminder texts to reduce missed appointments. Which assumption is required?",
      "options": [
        "Every patient owns two phones.",
        "Texts are free for the clinic.",
        "At least some missed appointments are due to patients forgetting the time.",
        "No patient ever changes a number.",
        "Missed appointments are caused only by forgetting."
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "If forgetting contributes to some no-shows, reminders can plausibly reduce them; exclusivity is unnecessary.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-072",
      "section": "Logical Reasoning",
      "topic": "Strengthen argument",
      "difficulty": "medium",
      "question": "A warehouse wants to mark floor lanes more clearly to reduce near-collisions between carts. Which evidence most strengthens the proposal?",
      "options": [
        "Incident reports frequently mention carts drifting across poorly visible lane boundaries.",
        "The warehouse ceiling was repaired.",
        "Cart batteries last eight hours.",
        "Some workers prefer blue uniforms.",
        "The building has two entrances."
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The proposed fix directly targets a recurring factor documented in incidents.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-073",
      "section": "Logical Reasoning",
      "topic": "Weaken argument",
      "difficulty": "medium",
      "question": "A café credits a new menu board for higher morning revenue. Which fact most weakens that claim?",
      "options": [
        "The board uses larger fonts.",
        "The café opens at 7 a.m.",
        "Tea remains on the menu.",
        "Coffee prices were raised 15% at the same time, while the number of transactions stayed flat.",
        "Customers can pay by card."
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Higher prices can raise revenue even with unchanged demand, providing an alternative explanation.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-074",
      "section": "Logical Reasoning",
      "topic": "Inference",
      "difficulty": "medium",
      "question": "A team reduced meeting length from 60 to 30 minutes, and the number of agenda items completed per meeting stayed the same. Which statement is supported?",
      "options": [
        "The team completed twice as many agenda items.",
        "Every meeting ended early before the change.",
        "All agenda items became easier.",
        "Meeting length has no effect on work.",
        "The team completed agenda items at a higher average rate per minute."
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Same output in half the time means completed items per minute increased.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-logical-reasoning-075",
      "section": "Logical Reasoning",
      "topic": "Principle application",
      "difficulty": "hard",
      "question": "Principle: when two explanations fit the same evidence, prefer the one that requires fewer unsupported assumptions. A sensor failure can be explained either by one loose connector or by three independent component failures with no extra evidence. Which explanation does the principle favour?",
      "options": [
        "The three-component explanation.",
        "The loose-connector explanation.",
        "Both must be equally likely.",
        "Neither can be considered.",
        "Whichever explanation is longer."
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The loose-connector account fits the evidence while requiring fewer independent assumptions.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-001",
      "section": "Abstract Reasoning",
      "topic": "Number-letter pattern",
      "difficulty": "medium",
      "question": "Pairs follow a rule: (2,B), (5,D), (10,G), (17,K). What pair comes next?",
      "options": [
        "(26,P)",
        "(24,O)",
        "(25,P)",
        "(26,O)",
        "(27,Q)"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Numbers increase by +3,+5,+7, so next +9=26. Letter positions increase +2,+3,+4, so next +5: K→P.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-002",
      "section": "Abstract Reasoning",
      "topic": "Symbol transformation",
      "difficulty": "medium",
      "question": "A transformer changes ABCD to DABC, and PQRS to SPQR. What is the output for WXYZ?",
      "options": [
        "YZWX",
        "XYZW",
        "ZYXW",
        "ZWXY",
        "WZXY"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The last character moves to the front while the first three shift right.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-003",
      "section": "Abstract Reasoning",
      "topic": "Symbol transformation",
      "difficulty": "medium",
      "question": "A four-position register keeps positions 1 and 4 fixed and swaps positions 2 and 3. Thus 3142→3412 and 5078→5708. What is the output for 9261?",
      "options": [
        "9261",
        "2691",
        "9621",
        "9612",
        "6291"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Swapping only the two middle positions changes 9-2-6-1 to 9-6-2-1.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-004",
      "section": "Abstract Reasoning",
      "topic": "Alternating pattern",
      "difficulty": "medium",
      "question": "Complete the sequence: A2, C4, F8, J16, O32, ...",
      "options": [
        "T64",
        "U64",
        "U48",
        "V64",
        "U62"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Letter jumps are +2,+3,+4,+5, so next +6: O→U. Numbers double.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-005",
      "section": "Abstract Reasoning",
      "topic": "Matrix rule",
      "difficulty": "medium",
      "question": "In each row, the third number equals the first multiplied by 2, then increased by the second: (3,4,10), (5,2,12), (7,6,?).",
      "options": [
        "18",
        "19",
        "20",
        "21",
        "26"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "2×7+6=20.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-006",
      "section": "Abstract Reasoning",
      "topic": "Matrix rule",
      "difficulty": "medium",
      "question": "Rows follow the same rule: (8,3,5), (14,6,8), (19,7,?). The third entry is:",
      "options": [
        "10",
        "11",
        "13",
        "12",
        "26"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Third=first−second, so 19−7=12.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-007",
      "section": "Abstract Reasoning",
      "topic": "Count pattern",
      "difficulty": "easy",
      "question": "A figure code records “number of triangles : number of circles”. Codes are 2:5, 3:7, 4:9. If the pattern continues, the code for five triangles is:",
      "options": [
        "5:10",
        "5:12",
        "6:11",
        "6:13",
        "5:11"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Each added triangle is paired with two additional circles, so circles=2t+1; for t=5, 11.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-008",
      "section": "Abstract Reasoning",
      "topic": "Nested operation",
      "difficulty": "medium",
      "question": "Define a◇b=2a+b. Then the sequence 1◇2, 2◇3, 3◇4, 4◇5 equals 4,7,10,13. What is 5◇6?",
      "options": [
        "16",
        "14",
        "15",
        "17",
        "18"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "2×5+6=16.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-009",
      "section": "Abstract Reasoning",
      "topic": "Odd one out",
      "difficulty": "medium",
      "question": "Which string differs in structure from the other four?",
      "options": [
        "ABBA",
        "IJKI",
        "CDDC",
        "EFFE",
        "GHHG"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "ABBA, CDDC, EFFE and GHHG all have pattern XYYX; IJKI has pattern XYZI.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-010",
      "section": "Abstract Reasoning",
      "topic": "Rotation code",
      "difficulty": "medium",
      "question": "A four-position dial transforms [1,2,3,4] to [3,4,1,2]. Applying the same rotation to [A,B,C,D] gives:",
      "options": [
        "[B,C,D,A]",
        "[D,A,B,C]",
        "[C,B,A,D]",
        "[A,D,C,B]",
        "[C,D,A,B]"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Positions shift left by two places.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-011",
      "section": "Abstract Reasoning",
      "topic": "Position permutation",
      "difficulty": "medium",
      "question": "A five-slot sorter outputs input positions in the order 2,5,1,4,3. Thus [A,B,C,D,E] becomes [B,E,A,D,C]. What does [P,Q,R,S,T] become?",
      "options": [
        "[Q,T,R,S,P]",
        "[T,Q,P,R,S]",
        "[Q,T,P,S,R]",
        "[R,P,T,S,Q]",
        "[Q,P,T,S,R]"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Read the input in positions 2,5,1,4,3: Q,T,P,S,R.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-012",
      "section": "Abstract Reasoning",
      "topic": "Interleaved sequence",
      "difficulty": "medium",
      "question": "Complete: 2, 20, 4, 17, 6, 14, 8, ...",
      "options": [
        "9",
        "10",
        "12",
        "16",
        "11"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Odd-position terms are 2,4,6,8; even-position terms are 20,17,14,11.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-013",
      "section": "Abstract Reasoning",
      "topic": "Letter arithmetic",
      "difficulty": "medium",
      "question": "Letters are converted to positions and then summed. Under this code, BAD=7 and FACE=15. What is CAGE?",
      "options": [
        "16",
        "14",
        "15",
        "17",
        "18"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "C+A+G+E=3+1+7+5=16.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-014",
      "section": "Abstract Reasoning",
      "topic": "Mirror mapping",
      "difficulty": "medium",
      "question": "A code maps 1↔9, 2↔8, 3↔7, 4↔6, and 5↔5. What is the code for 2735?",
      "options": [
        "8375",
        "7235",
        "8374",
        "8275",
        "9375"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Apply each mirror pair: 2→8,7→3,3→7,5→5.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-015",
      "section": "Abstract Reasoning",
      "topic": "Pair progression",
      "difficulty": "medium",
      "question": "Ordered pairs are (1,4), (2,7), (4,13), (7,22). The first coordinates increase by 1,2,3; the second by 3,6,9. What comes next?",
      "options": [
        "(10,31)",
        "(11,31)",
        "(11,34)",
        "(11,33)",
        "(12,34)"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Next first increase is 4: 7→11. Next second increase is 12: 22→34.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-016",
      "section": "Abstract Reasoning",
      "topic": "Symbol substitution",
      "difficulty": "medium",
      "question": "If ▲ means +2 and ■ means ×3, operations are applied left to right. Starting from 4, what is the result of ▲, ■, ▲?",
      "options": [
        "18",
        "22",
        "24",
        "30",
        "20"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "4+2=6; 6×3=18; 18+2=20.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-017",
      "section": "Abstract Reasoning",
      "topic": "State transformation",
      "difficulty": "medium",
      "question": "A state machine updates (a,b) to (b,a+2b). Starting from (1,2), it produces (2,5), then (5,12). What state comes next?",
      "options": [
        "(12,24)",
        "(17,29)",
        "(29,12)",
        "(12,22)",
        "(12,29)"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "From (5,12), the new first entry is 12 and the new second entry is 5+2×12=29.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-018",
      "section": "Abstract Reasoning",
      "topic": "Binary pattern",
      "difficulty": "medium",
      "question": "A binary string changes by toggling exactly the two middle bits: 1001→1111 and 0110→0000. What does 1101 become?",
      "options": [
        "1001",
        "1011",
        "1111",
        "1100",
        "1110"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "For 1101, middle bits 1 and 0 toggle to 0 and 1, giving 1011.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-019",
      "section": "Abstract Reasoning",
      "topic": "Grid rule",
      "difficulty": "medium",
      "question": "In a 2×2 block, the bottom-right value equals top-left + top-right − bottom-left. If the other entries are 12 (top-left), 9 (top-right), and 7 (bottom-left), bottom-right is:",
      "options": [
        "10",
        "12",
        "16",
        "14",
        "28"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "12+9−7=14.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-020",
      "section": "Abstract Reasoning",
      "topic": "Directional transformation",
      "difficulty": "medium",
      "question": "An arrow sequence rotates 90° clockwise, then 180° clockwise, then 90° clockwise, repeating. Starting North, the first four directions are N,E,W,N. The fifth is:",
      "options": [
        "N",
        "E",
        "S",
        "W",
        "NE"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The rotation cycle repeats; after the fourth direction N, apply 90° clockwise to get E.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-021",
      "section": "Abstract Reasoning",
      "topic": "String growth",
      "difficulty": "medium",
      "question": "A string is built by appending the next vowel then reversing: start B; append A→BA then reverse→AB; append E→ABE then reverse→EBA. After appending I and reversing, the string is:",
      "options": [
        "EBAI",
        "IEBA",
        "IABE",
        "ABEI",
        "BAEI"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "From EBA, append I to get EBAI; reversing gives IABE.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-022",
      "section": "Abstract Reasoning",
      "topic": "Digit relation",
      "difficulty": "medium",
      "question": "In each pair, the second number equals the sum of squares of the digits of the first: 23→13, 41→17. Then 32→",
      "options": [
        "9",
        "13",
        "11",
        "15",
        "25"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "3²+2²=9+4=13.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-023",
      "section": "Abstract Reasoning",
      "topic": "Cyclic positions",
      "difficulty": "medium",
      "question": "Five symbols occupy positions 1–5. A transformation sends each symbol two positions forward cyclically. A symbol starting at position 4 moves to:",
      "options": [
        "2",
        "3",
        "4",
        "5",
        "1"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Two steps from 4 are 5 then 1, with wraparound.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-024",
      "section": "Abstract Reasoning",
      "topic": "Rule identification",
      "difficulty": "hard",
      "question": "Which pair follows the rule “second number = first number × (first number−1)”?",
      "options": [
        "7→42",
        "5→25",
        "6→30",
        "8→54",
        "9→81"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "For 7, 7×6=42. The other listed results do not equal n(n−1).",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-abstract-reasoning-025",
      "section": "Abstract Reasoning",
      "topic": "Pair transformation",
      "difficulty": "medium",
      "question": "A two-channel transformer maps input (a,b) to output (a+b,2a−b). What is the output for (7,4)?",
      "options": [
        "(11,10)",
        "(11,3)",
        "(10,11)",
        "(3,10)",
        "(14,3)"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The first output is 7+4=11 and the second is 2×7−4=10.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-001",
      "section": "Quantitative Aptitude",
      "topic": "Percentages",
      "difficulty": "easy",
      "question": "A service fee rises from ₹1,250 to ₹1,400. The percentage increase is:",
      "options": [
        "10",
        "15",
        "18",
        "12",
        "20"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Increase=150; 150/1250×100=12%.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-002",
      "section": "Quantitative Aptitude",
      "topic": "Ratio",
      "difficulty": "easy",
      "question": "A 72-litre mixture contains water and concentrate in ratio 5:3. How many litres are concentrate?",
      "options": [
        "24",
        "30",
        "27",
        "36",
        "45"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "There are 8 parts; concentrate=3/8×72=27 L.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-003",
      "section": "Quantitative Aptitude",
      "topic": "Averages",
      "difficulty": "medium",
      "question": "The average of six monthly scores is 74. If five scores total 355, the sixth score is:",
      "options": [
        "79",
        "84",
        "94",
        "99",
        "89"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Total=6×74=444; sixth=444−355=89.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-004",
      "section": "Quantitative Aptitude",
      "topic": "Profit and loss",
      "difficulty": "medium",
      "question": "A device costs ₹2,400 and is sold at 15% profit after a ₹120 packaging cost is included in the effective cost. The selling price is:",
      "options": [
        "2760",
        "2820",
        "2940",
        "3024",
        "2898"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Effective cost=2520; 15% profit gives 2520×1.15=2898.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-005",
      "section": "Quantitative Aptitude",
      "topic": "Simple interest",
      "difficulty": "easy",
      "question": "Simple interest on ₹8,000 at 7.5% per year for 18 months is:",
      "options": [
        "750",
        "800",
        "900",
        "1000",
        "1200"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "SI=8000×0.075×1.5=₹900.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-006",
      "section": "Quantitative Aptitude",
      "topic": "Compound growth",
      "difficulty": "medium",
      "question": "A value grows by 10% in each of two years from 5,000. Its value after two years is:",
      "options": [
        "5500",
        "6050",
        "6000",
        "6100",
        "6250"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "5000×1.1²=6050.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-007",
      "section": "Quantitative Aptitude",
      "topic": "Time and work",
      "difficulty": "medium",
      "question": "A team completes 3/8 of a job in 6 days at a constant rate. How many days are needed for the whole job?",
      "options": [
        "16",
        "12",
        "14",
        "18",
        "24"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "6 days corresponds to 3/8; total time=6×8/3=16 days.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-008",
      "section": "Quantitative Aptitude",
      "topic": "Rates",
      "difficulty": "medium",
      "question": "A printer produces 840 labels in 35 minutes. At the same rate, how many in 50 minutes?",
      "options": [
        "1000",
        "1100",
        "1200",
        "1250",
        "1400"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Rate=24 labels/min; 24×50=1200.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-009",
      "section": "Quantitative Aptitude",
      "topic": "Algebra",
      "difficulty": "easy",
      "question": "Solve 4x−7=29.",
      "options": [
        "7",
        "8",
        "10",
        "9",
        "11"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "4x=36, so x=9.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-010",
      "section": "Quantitative Aptitude",
      "topic": "Algebra",
      "difficulty": "medium",
      "question": "If x+y=17 and x−y=5, then xy equals:",
      "options": [
        "54",
        "66",
        "60",
        "72",
        "77"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "x=11,y=6, so xy=66.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-011",
      "section": "Quantitative Aptitude",
      "topic": "Quadratic equations",
      "difficulty": "medium",
      "question": "The larger root of x²−13x+36=0 is:",
      "options": [
        "4",
        "6",
        "12",
        "9",
        "13"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "(x−4)(x−9)=0, so larger root=9.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-012",
      "section": "Quantitative Aptitude",
      "topic": "Number properties",
      "difficulty": "medium",
      "question": "The remainder when 7³+5² is divided by 6 is:",
      "options": [
        "0",
        "2",
        "1",
        "3",
        "4"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "343+25=368; 368 mod 6=2.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-013",
      "section": "Quantitative Aptitude",
      "topic": "LCM/HCF",
      "difficulty": "medium",
      "question": "Two machine checks repeat every 14 and 20 days. If they occur together today, after how many days will they next coincide?",
      "options": [
        "70",
        "100",
        "120",
        "280",
        "140"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "LCM(14,20)=140.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-014",
      "section": "Quantitative Aptitude",
      "topic": "Geometry",
      "difficulty": "easy",
      "question": "A rectangle is 18 m by 11 m. Its perimeter is:",
      "options": [
        "29",
        "58",
        "36",
        "48",
        "198"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Perimeter=2(18+11)=58 m.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-015",
      "section": "Quantitative Aptitude",
      "topic": "Geometry",
      "difficulty": "medium",
      "question": "A right triangle has legs 9 cm and 12 cm. Its hypotenuse is:",
      "options": [
        "13",
        "14",
        "16",
        "21",
        "15"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "√(9²+12²)=√225=15.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-016",
      "section": "Quantitative Aptitude",
      "topic": "Mensuration",
      "difficulty": "medium",
      "question": "A cylinder has radius 3 cm and height 10 cm. Its volume is:",
      "options": [
        "30π cm³",
        "60π cm³",
        "120π cm³",
        "90π cm³",
        "180π cm³"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Volume=πr²h=π×9×10=90π.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-017",
      "section": "Quantitative Aptitude",
      "topic": "Mensuration",
      "difficulty": "medium",
      "question": "A square’s area is 196 cm². Its diagonal length is:",
      "options": [
        "7√2 cm",
        "14 cm",
        "28 cm",
        "14√2 cm",
        "28√2 cm"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Side=14 cm; diagonal=14√2 cm.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-018",
      "section": "Quantitative Aptitude",
      "topic": "Probability",
      "difficulty": "medium",
      "question": "A bag has 5 orange, 4 white and 3 black counters. The probability of drawing a white counter is:",
      "options": [
        "1/4",
        "1/3",
        "3/8",
        "4/9",
        "2/3"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "There are 12 counters; 4 are white, so 4/12=1/3.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-019",
      "section": "Quantitative Aptitude",
      "topic": "Combinatorics",
      "difficulty": "medium",
      "question": "How many 3-person committees can be chosen from 8 people?",
      "options": [
        "24",
        "48",
        "56",
        "64",
        "336"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "C(8,3)=56.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-020",
      "section": "Quantitative Aptitude",
      "topic": "Coordinate geometry",
      "difficulty": "medium",
      "question": "The midpoint of (−4,7) and (8,−1) is:",
      "options": [
        "(2,3)",
        "(4,3)",
        "(2,4)",
        "(6,6)",
        "(−2,3)"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Average coordinates: ((−4+8)/2,(7−1)/2)=(2,3).",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-021",
      "section": "Quantitative Aptitude",
      "topic": "Statistics",
      "difficulty": "medium",
      "question": "For the data 3,5,7,7,8,10, the median is:",
      "options": [
        "6",
        "7.5",
        "8",
        "7",
        "8.5"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The middle two values are 7 and 7, so median=7.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-022",
      "section": "Quantitative Aptitude",
      "topic": "Statistics",
      "difficulty": "medium",
      "question": "A weighted score uses 30% test A and 70% test B. Scores are 80 and 65. The weighted score is:",
      "options": [
        "69.5",
        "68",
        "70",
        "72.5",
        "75.5"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "0.3×80+0.7×65=24+45.5=69.5.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-023",
      "section": "Quantitative Aptitude",
      "topic": "Logarithms",
      "difficulty": "medium",
      "question": "If 10^x=1000√10, then x=",
      "options": [
        "3",
        "4",
        "3.5",
        "4.5",
        "5"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "1000√10=10³×10^{1/2}=10^{3.5}.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-024",
      "section": "Quantitative Aptitude",
      "topic": "Sequences",
      "difficulty": "medium",
      "question": "An AP has 4th term 17 and common difference 5. Its first term is:",
      "options": [
        "3",
        "5",
        "7",
        "12",
        "2"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "a+3d=17 → a=2.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-025",
      "section": "Quantitative Aptitude",
      "topic": "Mixtures",
      "difficulty": "medium",
      "question": "A 30 L solution is 40% solute. How much pure water must be added to make it 30% solute?",
      "options": [
        "5",
        "8",
        "12",
        "15",
        "10"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Solute=12 L. For 30%, total volume must be 40 L, so add 10 L water.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-026",
      "section": "Quantitative Aptitude",
      "topic": "Partnership",
      "difficulty": "medium",
      "question": "A and B invest ₹60,000 and ₹40,000 for the same period. A profit of ₹25,000 is divided in their investment ratio. B receives:",
      "options": [
        "9000",
        "12000",
        "15000",
        "10000",
        "16000"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Ratio 3:2; B gets 2/5×25,000=10,000.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-027",
      "section": "Quantitative Aptitude",
      "topic": "Speed distance",
      "difficulty": "medium",
      "question": "A cyclist covers 36 km at 18 km/h and 24 km at 12 km/h. The average speed for the whole trip is:",
      "options": [
        "14",
        "16",
        "18",
        "20",
        "15"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Times are 2 h and 2 h; total 60 km/4 h=15 km/h.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-028",
      "section": "Quantitative Aptitude",
      "topic": "Pipes and flow",
      "difficulty": "medium",
      "question": "A tank is filled at 12 L/min while a drain removes 3 L/min. Starting empty, how long to reach 270 L?",
      "options": [
        "18",
        "30",
        "22.5",
        "27",
        "36"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Net inflow=9 L/min; 270/9=30 min.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-029",
      "section": "Quantitative Aptitude",
      "topic": "Linear equations",
      "difficulty": "medium",
      "question": "Three notebooks and two pens cost ₹190. One notebook and two pens cost ₹90. A notebook costs:",
      "options": [
        "40",
        "45",
        "50",
        "55",
        "60"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Subtract equations: 2 notebooks=100, so one notebook=50.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-030",
      "section": "Quantitative Aptitude",
      "topic": "Inequalities",
      "difficulty": "medium",
      "question": "Which integer satisfies 3x+2<20 and x≥5?",
      "options": [
        "4",
        "6",
        "5",
        "7",
        "8"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "First inequality gives x<6; with x≥5, the only integer is 5.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-031",
      "section": "Quantitative Aptitude",
      "topic": "Data Interpretation",
      "difficulty": "medium",
      "question": "A coworking hub recorded desk bookings Q1=120, Q2=150, Q3=135, Q4=195. What is the annual total?",
      "options": [
        "570",
        "585",
        "615",
        "600",
        "630"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "120+150+135+195=600.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-032",
      "section": "Quantitative Aptitude",
      "topic": "Data Interpretation",
      "difficulty": "medium",
      "question": "Using Q1=120, Q2=150, Q3=135, Q4=195 desk bookings, by what percentage did Q4 exceed Q1?",
      "options": [
        "50",
        "62.5",
        "55",
        "60",
        "75"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Increase=75; 75/120×100=62.5%.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-033",
      "section": "Quantitative Aptitude",
      "topic": "Data Interpretation",
      "difficulty": "medium",
      "question": "For desk bookings Q1=120, Q2=150, Q3=135, Q4=195, the average per quarter is:",
      "options": [
        "145",
        "155",
        "160",
        "150",
        "165"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Total 600/4=150.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-034",
      "section": "Quantitative Aptitude",
      "topic": "Data Interpretation",
      "difficulty": "medium",
      "question": "For desk bookings Q1=120, Q2=150, Q3=135, Q4=195, what fraction of the annual total occurred in Q4?",
      "options": [
        "1/4",
        "3/10",
        "13/40",
        "7/20",
        "2/5"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Q4 share=195/600=13/40.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-035",
      "section": "Quantitative Aptitude",
      "topic": "Data Interpretation",
      "difficulty": "medium",
      "question": "A parcel network handled North=480, South=360, East=420, West=540 parcels. Which region handled 30% of the total?",
      "options": [
        "North",
        "South",
        "East",
        "No region",
        "West"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Total=1800; 30%=540, which is West.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-036",
      "section": "Quantitative Aptitude",
      "topic": "Data Interpretation",
      "difficulty": "medium",
      "question": "For parcel counts North=480, South=360, East=420, West=540, the difference between the highest and lowest is:",
      "options": [
        "120",
        "150",
        "210",
        "180",
        "240"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "540−360=180.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-037",
      "section": "Quantitative Aptitude",
      "topic": "Data Interpretation",
      "difficulty": "medium",
      "question": "For parcel counts North=480, South=360, East=420, West=540, the ratio North:South simplifies to:",
      "options": [
        "3:2",
        "5:4",
        "6:5",
        "8:7",
        "4:3"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "480:360 divides by 120 to 4:3.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-038",
      "section": "Quantitative Aptitude",
      "topic": "Data Interpretation",
      "difficulty": "medium",
      "question": "If East parcel count (420) rises by 10% while other regions remain unchanged, the new East count is:",
      "options": [
        "441",
        "462",
        "450",
        "468",
        "480"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "420×1.10=462.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-039",
      "section": "Quantitative Aptitude",
      "topic": "Data Interpretation",
      "difficulty": "medium",
      "question": "Solar output was Mon=72, Tue=84, Wed=66, Thu=90 units. What is the median daily output?",
      "options": [
        "78",
        "75",
        "81",
        "84",
        "87"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Sorted: 66,72,84,90; median=(72+84)/2=78.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-040",
      "section": "Quantitative Aptitude",
      "topic": "Data Interpretation",
      "difficulty": "medium",
      "question": "Solar output Mon=72, Tue=84, Wed=66, Thu=90. By how many units did Thu exceed Wed?",
      "options": [
        "18",
        "20",
        "22",
        "26",
        "24"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "90−66=24.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-041",
      "section": "Quantitative Aptitude",
      "topic": "Data Interpretation",
      "difficulty": "medium",
      "question": "Solar output Mon=72, Tue=84, Wed=66, Thu=90. The four-day total is:",
      "options": [
        "302",
        "306",
        "318",
        "312",
        "324"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "72+84+66+90=312.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-042",
      "section": "Quantitative Aptitude",
      "topic": "Data Interpretation",
      "difficulty": "medium",
      "question": "Solar output Mon=72, Tue=84, Wed=66, Thu=90. Tuesday’s output is what percentage of the four-day total?",
      "options": [
        "23.08%",
        "25%",
        "28.85%",
        "30%",
        "26.92%"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "84/312×100≈26.92%.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-043",
      "section": "Quantitative Aptitude",
      "topic": "Data Interpretation",
      "difficulty": "medium",
      "question": "Training completions were Alpha=48, Beta=60, Gamma=54, Delta=78. What is the average?",
      "options": [
        "57",
        "58",
        "62",
        "60",
        "65"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Total=240; average=60.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-044",
      "section": "Quantitative Aptitude",
      "topic": "Data Interpretation",
      "difficulty": "medium",
      "question": "Training completions Alpha=48, Beta=60, Gamma=54, Delta=78. Delta exceeds Alpha by what percentage of Alpha?",
      "options": [
        "50",
        "62.5",
        "55",
        "60",
        "75"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Difference=30; 30/48×100=62.5%.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-045",
      "section": "Quantitative Aptitude",
      "topic": "Data Interpretation",
      "difficulty": "medium",
      "question": "Training completions Alpha=48, Beta=60, Gamma=54, Delta=78. Beta and Gamma together account for what fraction of the total?",
      "options": [
        "9/20",
        "1/2",
        "21/40",
        "3/5",
        "19/40"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Beta+Gamma=114; total=240; 114/240=19/40.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-046",
      "section": "Quantitative Aptitude",
      "topic": "Data Interpretation",
      "difficulty": "medium",
      "question": "If six more participants complete Gamma, its completion count becomes what percentage of Beta’s 60?",
      "options": [
        "90",
        "95",
        "105",
        "100",
        "110"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Gamma becomes 60, equal to Beta, hence 100%.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-047",
      "section": "Quantitative Aptitude",
      "topic": "Data Interpretation",
      "difficulty": "medium",
      "question": "Lunch orders were Wrap=96, Bowl=72, Soup=48, Sandwich=84. What is the total number of orders?",
      "options": [
        "288",
        "300",
        "306",
        "312",
        "324"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "96+72+48+84=300.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-048",
      "section": "Quantitative Aptitude",
      "topic": "Data Interpretation",
      "difficulty": "medium",
      "question": "Lunch orders Wrap=96, Bowl=72, Soup=48, Sandwich=84. The ratio Wrap:Soup is:",
      "options": [
        "3:2",
        "2:1",
        "4:3",
        "5:2",
        "7:4"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "96:48=2:1.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-049",
      "section": "Quantitative Aptitude",
      "topic": "Data Interpretation",
      "difficulty": "medium",
      "question": "Lunch orders Wrap=96, Bowl=72, Soup=48, Sandwich=84. Which item represents 28% of total orders?",
      "options": [
        "Sandwich",
        "Wrap",
        "Bowl",
        "Soup",
        "None"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Total=300; 28% of 300=84, matching Sandwich.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-quantitative-aptitude-050",
      "section": "Quantitative Aptitude",
      "topic": "Data Interpretation",
      "difficulty": "medium",
      "question": "If Bowl orders rise from 72 to 90, the percentage increase is:",
      "options": [
        "20",
        "22.5",
        "27.5",
        "25",
        "30"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Increase=18; 18/72×100=25%.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-001",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Reading comprehension",
      "difficulty": "medium",
      "question": "Passage: A grocery cooperative replaced one large suburban storeroom with three small neighbourhood micro-warehouses. The change did not reduce the total amount of inventory held, but it shortened the final delivery leg for many orders. Managers initially expected transport costs to fall sharply; instead, the savings were modest because the smaller sites required separate staffing and replenishment. Even so, customer complaints about late evening deliveries declined, and the cooperative decided to keep the model while testing shared night-shift staff across two sites.\n\nWhat is the main idea?",
      "options": [
        "The initiative achieved only its originally predicted benefit.",
        "The micro-warehouse model brought service benefits but also offsetting operating costs.",
        "The passage argues that every organisation should adopt the same model.",
        "The initiative failed because one limitation remained.",
        "The passage focuses mainly on a legal dispute."
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The main idea combines the central outcome and the important qualification or secondary effect described in the passage.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-002",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Reading comprehension",
      "difficulty": "medium",
      "question": "Passage: A grocery cooperative replaced one large suburban storeroom with three small neighbourhood micro-warehouses. The change did not reduce the total amount of inventory held, but it shortened the final delivery leg for many orders. Managers initially expected transport costs to fall sharply; instead, the savings were modest because the smaller sites required separate staffing and replenishment. Even so, customer complaints about late evening deliveries declined, and the cooperative decided to keep the model while testing shared night-shift staff across two sites.\n\nWhich statement is supported by the passage?",
      "options": [
        "Late-evening delivery complaints declined after the change.",
        "The initiative eliminated every problem mentioned.",
        "The organisation abandoned the experiment immediately.",
        "The passage states that costs fell to zero.",
        "All users reacted in exactly the same way."
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The correct statement is explicitly stated; the alternatives overgeneralize or contradict the passage.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-003",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Reading comprehension",
      "difficulty": "medium",
      "question": "Passage: A grocery cooperative replaced one large suburban storeroom with three small neighbourhood micro-warehouses. The change did not reduce the total amount of inventory held, but it shortened the final delivery leg for many orders. Managers initially expected transport costs to fall sharply; instead, the savings were modest because the smaller sites required separate staffing and replenishment. Even so, customer complaints about late evening deliveries declined, and the cooperative decided to keep the model while testing shared night-shift staff across two sites.\n\nWhich inference is most reasonable?",
      "options": [
        "Any intervention with a limitation is worthless.",
        "The organisation had perfect information before the experiment.",
        "Every outcome described was predicted in advance.",
        "A shorter delivery leg can improve punctuality even when total operating cost savings are limited.",
        "Users prefer the same experience in all circumstances."
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The inference follows from the pattern of evidence without claiming more than the passage supports.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-004",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Vocabulary in context",
      "difficulty": "easy",
      "question": "Passage: A grocery cooperative replaced one large suburban storeroom with three small neighbourhood micro-warehouses. The change did not reduce the total amount of inventory held, but it shortened the final delivery leg for many orders. Managers initially expected transport costs to fall sharply; instead, the savings were modest because the smaller sites required separate staffing and replenishment. Even so, customer complaints about late evening deliveries declined, and the cooperative decided to keep the model while testing shared night-shift staff across two sites.\n\nIn context, the word “modest” is closest in meaning to:",
      "options": [
        "entirely absent",
        "legally prohibited",
        "limited in size",
        "randomly concealed",
        "impossible to measure"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The surrounding sentence fixes the contextual meaning used in the passage.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-005",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Reading comprehension",
      "difficulty": "medium",
      "question": "Passage: A city museum experimented with shorter object labels in one gallery. Curators worried that removing detail would make the exhibition feel superficial, yet visitor interviews suggested a different effect: many people read more labels when each was concise, then used optional QR links for deeper context on the objects that interested them most. The museum therefore concluded that brevity and depth need not be opposites when information is layered rather than forced into a single block of text.\n\nWhat is the main idea?",
      "options": [
        "The initiative achieved only its originally predicted benefit.",
        "Layered information can combine concise labels with optional depth.",
        "The passage argues that every organisation should adopt the same model.",
        "The initiative failed because one limitation remained.",
        "The passage focuses mainly on a legal dispute."
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The main idea combines the central outcome and the important qualification or secondary effect described in the passage.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-006",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Reading comprehension",
      "difficulty": "medium",
      "question": "Passage: A city museum experimented with shorter object labels in one gallery. Curators worried that removing detail would make the exhibition feel superficial, yet visitor interviews suggested a different effect: many people read more labels when each was concise, then used optional QR links for deeper context on the objects that interested them most. The museum therefore concluded that brevity and depth need not be opposites when information is layered rather than forced into a single block of text.\n\nWhich statement is supported by the passage?",
      "options": [
        "Some visitors used QR links when they wanted more detail.",
        "The initiative eliminated every problem mentioned.",
        "The organisation abandoned the experiment immediately.",
        "The passage states that costs fell to zero.",
        "All users reacted in exactly the same way."
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The correct statement is explicitly stated; the alternatives overgeneralize or contradict the passage.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-007",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Reading comprehension",
      "difficulty": "medium",
      "question": "Passage: A city museum experimented with shorter object labels in one gallery. Curators worried that removing detail would make the exhibition feel superficial, yet visitor interviews suggested a different effect: many people read more labels when each was concise, then used optional QR links for deeper context on the objects that interested them most. The museum therefore concluded that brevity and depth need not be opposites when information is layered rather than forced into a single block of text.\n\nWhich inference is most reasonable?",
      "options": [
        "Any intervention with a limitation is worthless.",
        "The organisation had perfect information before the experiment.",
        "Giving readers a choice of depth can increase engagement with basic information.",
        "Every outcome described was predicted in advance.",
        "Users prefer the same experience in all circumstances."
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The inference follows from the pattern of evidence without claiming more than the passage supports.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-008",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Vocabulary in context",
      "difficulty": "easy",
      "question": "Passage: A city museum experimented with shorter object labels in one gallery. Curators worried that removing detail would make the exhibition feel superficial, yet visitor interviews suggested a different effect: many people read more labels when each was concise, then used optional QR links for deeper context on the objects that interested them most. The museum therefore concluded that brevity and depth need not be opposites when information is layered rather than forced into a single block of text.\n\nIn context, the word “layered” is closest in meaning to:",
      "options": [
        "entirely absent",
        "legally prohibited",
        "arranged in levels",
        "randomly concealed",
        "impossible to measure"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The surrounding sentence fixes the contextual meaning used in the passage.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-009",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Reading comprehension",
      "difficulty": "medium",
      "question": "Passage: Several apartment complexes installed shallow rain gardens beside their parking areas. During ordinary showers, runoff that once moved quickly into street drains now pooled briefly among grasses and soil before soaking away. The gardens did not eliminate flooding during an exceptional cloudburst, but maintenance teams observed less standing water after moderate storms. Residents also reported more birds near the planted areas, an outcome that had not been part of the original drainage plan.\n\nWhat is the main idea?",
      "options": [
        "The initiative achieved only its originally predicted benefit.",
        "The passage argues that every organisation should adopt the same model.",
        "The initiative failed because one limitation remained.",
        "The passage focuses mainly on a legal dispute.",
        "Rain gardens improved ordinary runoff handling and produced an unexpected ecological benefit."
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The main idea combines the central outcome and the important qualification or secondary effect described in the passage.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-010",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Reading comprehension",
      "difficulty": "medium",
      "question": "Passage: Several apartment complexes installed shallow rain gardens beside their parking areas. During ordinary showers, runoff that once moved quickly into street drains now pooled briefly among grasses and soil before soaking away. The gardens did not eliminate flooding during an exceptional cloudburst, but maintenance teams observed less standing water after moderate storms. Residents also reported more birds near the planted areas, an outcome that had not been part of the original drainage plan.\n\nWhich statement is supported by the passage?",
      "options": [
        "The initiative eliminated every problem mentioned.",
        "The organisation abandoned the experiment immediately.",
        "The passage states that costs fell to zero.",
        "The gardens did not prevent flooding during an exceptional cloudburst.",
        "All users reacted in exactly the same way."
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The correct statement is explicitly stated; the alternatives overgeneralize or contradict the passage.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-011",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Reading comprehension",
      "difficulty": "medium",
      "question": "Passage: Several apartment complexes installed shallow rain gardens beside their parking areas. During ordinary showers, runoff that once moved quickly into street drains now pooled briefly among grasses and soil before soaking away. The gardens did not eliminate flooding during an exceptional cloudburst, but maintenance teams observed less standing water after moderate storms. Residents also reported more birds near the planted areas, an outcome that had not been part of the original drainage plan.\n\nWhich inference is most reasonable?",
      "options": [
        "Any intervention with a limitation is worthless.",
        "The organisation had perfect information before the experiment.",
        "Every outcome described was predicted in advance.",
        "A measure can be useful for common conditions without solving the most extreme event.",
        "Users prefer the same experience in all circumstances."
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The inference follows from the pattern of evidence without claiming more than the passage supports.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-012",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Vocabulary in context",
      "difficulty": "easy",
      "question": "Passage: Several apartment complexes installed shallow rain gardens beside their parking areas. During ordinary showers, runoff that once moved quickly into street drains now pooled briefly among grasses and soil before soaking away. The gardens did not eliminate flooding during an exceptional cloudburst, but maintenance teams observed less standing water after moderate storms. Residents also reported more birds near the planted areas, an outcome that had not been part of the original drainage plan.\n\nIn context, the word “exceptional” is closest in meaning to:",
      "options": [
        "unusually extreme",
        "entirely absent",
        "legally prohibited",
        "randomly concealed",
        "impossible to measure"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The surrounding sentence fixes the contextual meaning used in the passage.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-013",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Reading comprehension",
      "difficulty": "medium",
      "question": "Passage: A neighbourhood repair library lends tools instead of books. Members reserve drills, sanders, measuring devices, and sewing machines for short periods, paying a small annual fee that covers maintenance. The organisers once assumed the main benefit would be saving members money. Over time they discovered another effect: weekend demonstrations on safe tool use became informal meeting points where experienced members helped beginners plan repairs, so the service increasingly functioned as both an equipment pool and a skills exchange.\n\nWhat is the main idea?",
      "options": [
        "The initiative achieved only its originally predicted benefit.",
        "The passage argues that every organisation should adopt the same model.",
        "The initiative failed because one limitation remained.",
        "The passage focuses mainly on a legal dispute.",
        "The tool-lending service evolved into both an equipment resource and a community skills exchange."
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The main idea combines the central outcome and the important qualification or secondary effect described in the passage.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-014",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Reading comprehension",
      "difficulty": "medium",
      "question": "Passage: A neighbourhood repair library lends tools instead of books. Members reserve drills, sanders, measuring devices, and sewing machines for short periods, paying a small annual fee that covers maintenance. The organisers once assumed the main benefit would be saving members money. Over time they discovered another effect: weekend demonstrations on safe tool use became informal meeting points where experienced members helped beginners plan repairs, so the service increasingly functioned as both an equipment pool and a skills exchange.\n\nWhich statement is supported by the passage?",
      "options": [
        "The initiative eliminated every problem mentioned.",
        "The organisation abandoned the experiment immediately.",
        "Membership fees help cover maintenance of the tools.",
        "The passage states that costs fell to zero.",
        "All users reacted in exactly the same way."
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The correct statement is explicitly stated; the alternatives overgeneralize or contradict the passage.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-015",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Reading comprehension",
      "difficulty": "medium",
      "question": "Passage: A neighbourhood repair library lends tools instead of books. Members reserve drills, sanders, measuring devices, and sewing machines for short periods, paying a small annual fee that covers maintenance. The organisers once assumed the main benefit would be saving members money. Over time they discovered another effect: weekend demonstrations on safe tool use became informal meeting points where experienced members helped beginners plan repairs, so the service increasingly functioned as both an equipment pool and a skills exchange.\n\nWhich inference is most reasonable?",
      "options": [
        "Any intervention with a limitation is worthless.",
        "The organisation had perfect information before the experiment.",
        "Every outcome described was predicted in advance.",
        "Access to shared equipment can create opportunities for peer learning.",
        "Users prefer the same experience in all circumstances."
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The inference follows from the pattern of evidence without claiming more than the passage supports.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-016",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Vocabulary in context",
      "difficulty": "easy",
      "question": "Passage: A neighbourhood repair library lends tools instead of books. Members reserve drills, sanders, measuring devices, and sewing machines for short periods, paying a small annual fee that covers maintenance. The organisers once assumed the main benefit would be saving members money. Over time they discovered another effect: weekend demonstrations on safe tool use became informal meeting points where experienced members helped beginners plan repairs, so the service increasingly functioned as both an equipment pool and a skills exchange.\n\nIn context, the word “informal” is closest in meaning to:",
      "options": [
        "entirely absent",
        "legally prohibited",
        "not highly formalized",
        "randomly concealed",
        "impossible to measure"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The surrounding sentence fixes the contextual meaning used in the passage.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-017",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Reading comprehension",
      "difficulty": "medium",
      "question": "Passage: A regional rail operator introduced a designated quiet carriage on selected trains. The rule did not ban conversation everywhere; it simply asked passengers in one carriage to keep calls silent and speech brief. Surveys showed strong approval among commuters who wanted to read or work, while families often preferred other carriages. Because the policy offered a choice rather than imposing silence train-wide, complaints remained low even as use of the quiet carriage grew.\n\nWhat is the main idea?",
      "options": [
        "The initiative achieved only its originally predicted benefit.",
        "A choice-based quiet-carriage policy met different passenger preferences with few complaints.",
        "The passage argues that every organisation should adopt the same model.",
        "The initiative failed because one limitation remained.",
        "The passage focuses mainly on a legal dispute."
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The main idea combines the central outcome and the important qualification or secondary effect described in the passage.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-018",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Reading comprehension",
      "difficulty": "medium",
      "question": "Passage: A regional rail operator introduced a designated quiet carriage on selected trains. The rule did not ban conversation everywhere; it simply asked passengers in one carriage to keep calls silent and speech brief. Surveys showed strong approval among commuters who wanted to read or work, while families often preferred other carriages. Because the policy offered a choice rather than imposing silence train-wide, complaints remained low even as use of the quiet carriage grew.\n\nWhich statement is supported by the passage?",
      "options": [
        "The initiative eliminated every problem mentioned.",
        "Families often preferred carriages other than the quiet one.",
        "The organisation abandoned the experiment immediately.",
        "The passage states that costs fell to zero.",
        "All users reacted in exactly the same way."
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The correct statement is explicitly stated; the alternatives overgeneralize or contradict the passage.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-019",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Reading comprehension",
      "difficulty": "medium",
      "question": "Passage: A regional rail operator introduced a designated quiet carriage on selected trains. The rule did not ban conversation everywhere; it simply asked passengers in one carriage to keep calls silent and speech brief. Surveys showed strong approval among commuters who wanted to read or work, while families often preferred other carriages. Because the policy offered a choice rather than imposing silence train-wide, complaints remained low even as use of the quiet carriage grew.\n\nWhich inference is most reasonable?",
      "options": [
        "Any intervention with a limitation is worthless.",
        "The organisation had perfect information before the experiment.",
        "Offering differentiated spaces can reduce conflict between users with different preferences.",
        "Every outcome described was predicted in advance.",
        "Users prefer the same experience in all circumstances."
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The inference follows from the pattern of evidence without claiming more than the passage supports.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-020",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Vocabulary in context",
      "difficulty": "easy",
      "question": "Passage: A regional rail operator introduced a designated quiet carriage on selected trains. The rule did not ban conversation everywhere; it simply asked passengers in one carriage to keep calls silent and speech brief. Surveys showed strong approval among commuters who wanted to read or work, while families often preferred other carriages. Because the policy offered a choice rather than imposing silence train-wide, complaints remained low even as use of the quiet carriage grew.\n\nIn context, the word “designated” is closest in meaning to:",
      "options": [
        "entirely absent",
        "legally prohibited",
        "randomly concealed",
        "impossible to measure",
        "specifically assigned"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The surrounding sentence fixes the contextual meaning used in the passage.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-021",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Grammar",
      "difficulty": "medium",
      "question": "Which sentence correctly describes the team’s afternoon availability?",
      "options": [
        "Neither the manager nor the analysts is available this afternoon.",
        "Neither the manager or the analysts are available this afternoon.",
        "Neither manager nor analysts was available this afternoons.",
        "Neither the manager nor the analysts are available this afternoon.",
        "Neither the managers nor the analyst are available this afternoon."
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "With neither...nor, the verb agrees with the nearer subject “analysts,” so “are” is correct.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-022",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Grammar",
      "difficulty": "medium",
      "question": "Choose the correctly punctuated sentence.",
      "options": [
        "After the meeting, however, the team revised its estimate.",
        "After the meeting however the team, revised its estimate.",
        "After the meeting however, the team revised its estimate.",
        "After the meeting; however the team revised, its estimate.",
        "After, the meeting however the team revised its estimate."
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The introductory phrase and parenthetical conjunctive adverb are correctly set off by commas.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-023",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "“Pragmatic” is closest in meaning to:",
      "options": [
        "ceremonial",
        "uncertain",
        "practical",
        "ornamental",
        "hostile"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Pragmatic means practical and focused on workable results.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-024",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Vocabulary",
      "difficulty": "easy",
      "question": "The opposite of “rigid” is:",
      "options": [
        "flexible",
        "fragile",
        "costly",
        "hidden",
        "brief"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Rigid can mean inflexible; flexible is its opposite in this context.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-025",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Sentence correction",
      "difficulty": "medium",
      "question": "Choose the best revision: “The report is more clearer than the draft.”",
      "options": [
        "The report is more clear than the draft is clearer.",
        "The report is clearer than the draft.",
        "The report is clearest than the draft.",
        "The report clearer more than the draft.",
        "The report is much more clearest than the draft."
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "“Clearer” already expresses the comparative, so “more” is redundant.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-026",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Usage",
      "difficulty": "medium",
      "question": "Choose the sentence that uses “affect” correctly.",
      "options": [
        "The delay may effect the launch date emotionally.",
        "The delay may affect the launch date.",
        "The affect of the delay was two days.",
        "The launch date is an affect of weather.",
        "The delay was affect by traffic."
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "As a verb meaning influence, “affect” is correct in the first sentence.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-027",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Idioms",
      "difficulty": "medium",
      "question": "“To draw a line under the issue” most nearly means:",
      "options": [
        "to illustrate the issue literally",
        "to make the issue more confusing",
        "to delay all discussion indefinitely",
        "to write the issue in smaller letters",
        "to treat the matter as concluded"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The idiom means to regard a matter as finished and move on.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-028",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Sentence arrangement",
      "difficulty": "medium",
      "question": "Arrange the sentences logically: P. The pilot test used only two branches. Q. The company then expanded the system nationwide. R. Results showed shorter waiting times. S. Managers first wanted evidence before a full rollout.",
      "options": [
        "S-P-R-Q",
        "P-S-Q-R",
        "R-P-S-Q",
        "S-R-P-Q",
        "Q-S-P-R"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Desire for evidence leads to pilot, pilot yields results, results lead to expansion.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-029",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Sentence arrangement",
      "difficulty": "medium",
      "question": "Arrange: P. The seedlings were transferred to larger pots. Q. Roots had begun to crowd the starter trays. R. Growth improved over the next two weeks. S. The gardener noticed the crowding during inspection.",
      "options": [
        "Q-S-R-P",
        "P-Q-S-R",
        "S-Q-P-R",
        "S-P-Q-R",
        "R-S-Q-P"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Inspection reveals crowding, explaining transfer, followed by improved growth.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-030",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Fill in the blank",
      "difficulty": "easy",
      "question": "The committee postponed the vote ___ several members had not read the revised proposal.",
      "options": [
        "although",
        "unless",
        "whereas",
        "despite",
        "because"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "“Because” introduces the reason for postponement.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-031",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Fill in the blank",
      "difficulty": "medium",
      "question": "The new policy is intended to be flexible ___ still providing clear minimum standards.",
      "options": [
        "because",
        "unless",
        "until",
        "therefore",
        "while"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "“While” correctly links two simultaneous/contrasting aims.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-032",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "One-word substitution",
      "difficulty": "medium",
      "question": "A person who studies the origin and history of words is an:",
      "options": [
        "etymologist",
        "entomologist",
        "epidemiologist",
        "ornithologist",
        "cartographer"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Etymology is the study of word origins and histories.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-033",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Vocabulary",
      "difficulty": "medium",
      "question": "“Mitigate” most nearly means:",
      "options": [
        "make permanent",
        "measure exactly",
        "make less severe",
        "hide completely",
        "repeat frequently"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "To mitigate is to reduce severity or harmfulness.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-034",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Grammar",
      "difficulty": "medium",
      "question": "Which version keeps the three job duties in parallel grammatical form?",
      "options": [
        "The role requires planning campaigns, analysis of results, and to present recommendations.",
        "The role requires to plan campaigns, analysing results, and presentations.",
        "The role requires planning campaigns, to analyse results, and presentation of recommendations.",
        "The role requires campaigns, analysing, and to present.",
        "The role requires planning campaigns, analysing results, and presenting recommendations."
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "All three items use parallel gerund phrases.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-035",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Grammar",
      "difficulty": "medium",
      "question": "Which sentence is grammatically correct about the proposals and their cost estimates?",
      "options": [
        "Each of the proposals have a separate cost estimate.",
        "Each of the proposal have separate cost estimate.",
        "Each proposals has a separate cost estimates.",
        "Each of proposals are having a cost estimate.",
        "Each of the proposals has a separate cost estimate."
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "“Each” is singular, so it takes “has.”",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-036",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Vocabulary",
      "difficulty": "medium",
      "question": "“Ambiguous” is closest in meaning to:",
      "options": [
        "open to more than one interpretation",
        "completely transparent",
        "strictly numerical",
        "physically distant",
        "strongly approved"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Ambiguous language can reasonably be understood in more than one way.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-037",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Error spotting",
      "difficulty": "medium",
      "question": "Which delivery sentence contains a subject–verb agreement error?",
      "options": [
        "The equipment was delivered before noon.",
        "The boxes were delivered before noon.",
        "The equipment were delivered before noon.",
        "The machine was delivered before noon.",
        "The supplies were delivered before noon."
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "“Equipment” is an uncountable singular mass noun here, so it takes “was,” not “were.”",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-038",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Error spotting",
      "difficulty": "medium",
      "question": "Which sentence misuses a verb with an unnecessary preposition?",
      "options": [
        "She discussed about the schedule with the coordinator.",
        "She discussed the schedule with the coordinator.",
        "She spoke about the schedule with the coordinator.",
        "She reviewed the schedule with the coordinator.",
        "She asked the coordinator about the schedule."
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "“Discuss” is transitive and normally takes the object directly; “discussed about” is nonstandard here.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-039",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Sentence completion",
      "difficulty": "medium",
      "question": "Although the first prototype failed the stress test, the engineers ___ .",
      "options": [
        "used the results to redesign the weak joint",
        "concluded that testing was unnecessary",
        "proved that the joint had never existed",
        "stopped collecting all evidence",
        "declared every future prototype identical"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "“Although” sets up a contrast: failure is followed by a constructive response.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-040",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Sentence completion",
      "difficulty": "medium",
      "question": "Because demand varied sharply by hour, the café decided to ___ .",
      "options": [
        "keep identical staffing regardless of traffic",
        "close before collecting any data",
        "adjust staffing levels across shifts",
        "remove all clocks from the kitchen",
        "assume every hour was equally busy"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Variable hourly demand logically motivates variable staffing.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-041",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Para summary",
      "difficulty": "medium",
      "question": "“A small firm cannot match a large rival’s advertising budget, so it focuses on a narrow customer group, learns that group’s needs in detail, and builds products specifically for them.” The best summary is:",
      "options": [
        "A smaller firm can compete by specializing deeply in a focused market.",
        "Advertising spending is the only source of competitive advantage.",
        "Small firms should copy every large rival.",
        "Customer needs are identical across all markets.",
        "Specialization always requires a larger budget."
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The passage describes focused differentiation as a strategy for a smaller firm.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-042",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Para summary",
      "difficulty": "medium",
      "question": "“Remote sensors reduce the need for routine site visits, but they do not remove the need for inspection. A faulty sensor can itself create misleading data, so periodic physical checks remain valuable.” The best summary is:",
      "options": [
        "Sensors make all inspections unnecessary.",
        "Physical checks are always more frequent with sensors.",
        "Faulty sensors never affect decisions.",
        "Sensors can reduce routine visits, but physical verification is still needed.",
        "Remote data should never be used."
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "The passage balances efficiency gains with the need for verification.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-043",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Analogy",
      "difficulty": "easy",
      "question": "Blueprint : Building :: Recipe : ___",
      "options": [
        "Kitchen",
        "Chef",
        "Menu",
        "Plate",
        "Dish"
      ],
      "correctIndex": 4,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "A blueprint guides construction of a building; a recipe guides preparation of a dish.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-044",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Analogy",
      "difficulty": "easy",
      "question": "Thermometer : Temperature :: Scale : ___",
      "options": [
        "Length",
        "Weight",
        "Speed",
        "Colour",
        "Time"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "A thermometer measures temperature; a scale measures weight/mass in common usage.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-045",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Vocabulary in context",
      "difficulty": "medium",
      "question": "In “The board adopted a cautious stance until the audit was complete,” “stance” means:",
      "options": [
        "physical height only",
        "position or attitude",
        "financial statement",
        "legal witness",
        "temporary building"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Here “stance” refers to the board’s position or attitude toward action.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-046",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Connector",
      "difficulty": "medium",
      "question": "The sample was small; ___, the result should be interpreted cautiously.",
      "options": [
        "therefore",
        "meanwhile",
        "otherwise",
        "likewise",
        "instead"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "A small sample is a reason for caution, so “therefore” expresses consequence.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-047",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Connector",
      "difficulty": "medium",
      "question": "The route is longer; ___, it avoids the construction zone and is often faster.",
      "options": [
        "therefore",
        "because",
        "however",
        "similarly",
        "unless"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "“However” marks the contrast between greater distance and faster travel.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-048",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Tense",
      "difficulty": "medium",
      "question": "By the time the client arrived, the team ___ the presentation.",
      "options": [
        "finishes",
        "has finish",
        "had finished",
        "will finishing",
        "finished tomorrow"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Past perfect marks an action completed before another past event.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-049",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Pronoun reference",
      "difficulty": "medium",
      "question": "Choose the clearest sentence.",
      "options": [
        "When Priya called Neha, she said it had arrived.",
        "When Priya called Neha, Priya said that the shipment had arrived.",
        "Priya called Neha because she had arrived.",
        "When she called her, she said it arrived.",
        "Priya told Neha that she had called her because it arrived."
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Repeating the name removes ambiguity about who spoke.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "mah-mba-mms-cet-2026-verbal-ability-reading-comprehension-050",
      "section": "Verbal Ability / Reading Comprehension",
      "topic": "Word choice",
      "difficulty": "medium",
      "question": "Choose the correct word: “The new rule will ___ all contractors, not only new ones.”",
      "options": [
        "imply on",
        "affect to",
        "apply to",
        "comprise of",
        "consist to"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0,
      "explanation": "Rules “apply to” the people or situations they govern.",
      "source": {
        "kind": "original",
        "reference": "MAH-MBA/MMS-CET 2026 Information Brochure",
        "url": "https://cetcell.mahacet.org/wp-content/uploads/2023/12/MAH-MBA-MMS-CET-2026-Information-Brochure.pdf",
        "checkedOn": "2026-09-02"
      }
    }
  ];
