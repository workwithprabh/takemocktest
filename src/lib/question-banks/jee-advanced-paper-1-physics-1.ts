import type { Question } from '../questions';

export const JEE_ADVANCED_PAPER_1_PHYSICS_1: Question[] = [
  {
    "id": "jee-advanced-p1-ph-001",
    "section": "Physics",
    "topic": "Mechanics",
    "difficulty": "easy",
    "question": "A 2 kg particle moves along the x-axis. Its speed at x=0 is 3 m/s. For 0<=x<=2 m, the net force along +x is F(x)=6x-2 newton. The speed of the particle at x=2 m is",
    "options": [
      "3 m/s",
      "4 m/s",
      "sqrt(17) m/s",
      "5 m/s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The work done is integral_0^2 (6x-2) dx = [3x^2-2x]_0^2 = 8 J. Initial kinetic energy is (1/2)(2)(3^2)=9 J, so final kinetic energy is 17 J. Since K=(1/2)mv^2=v^2 for m=2 kg, v=sqrt(17) m/s.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ph-002",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "medium",
    "question": "Two identical small conducting spheres carry charges +6q and -2q and are separated by a large distance r. They are touched, separated back to r, and the magnitude of the electrostatic force after touching divided by that before touching is",
    "options": [
      "1/3",
      "1/2",
      "2/3",
      "1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Initially |F_i|=k|(+6q)(-2q)|/r^2=12kq^2/r^2. After touching, total charge 4q is shared equally, giving +2q on each sphere, so F_f=4kq^2/r^2. The ratio is 4/12=1/3.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ph-003",
    "section": "Physics",
    "topic": "Rotation and rolling",
    "difficulty": "hard",
    "question": "A uniform solid sphere of mass M and radius R is projected on a rough horizontal surface with speed v0 and zero angular speed. It slips until pure rolling begins. Assuming kinetic friction is the only dissipative force, the fraction of the initial kinetic energy lost before pure rolling begins is",
    "options": [
      "1/7",
      "2/7",
      "5/14",
      "3/7"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Let J be the friction impulse. Translation gives M(v0-v)=J. Angular impulse gives JR=I\u03c9=(2/5)MR^2(v/R), so J=(2/5)Mv. Hence v0-v=(2/5)v and v=5v0/7. Final kinetic energy is (1/2)Mv^2+(1/2)(2/5 MR^2)(v^2/R^2)=(7/10)Mv^2=(5/14)Mv0^2. Initial kinetic energy is (1/2)Mv0^2=(7/14)Mv0^2, so the lost fraction is (2/14)/(7/14)=2/7.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ph-004",
    "section": "Physics",
    "topic": "Geometrical optics",
    "difficulty": "hard",
    "question": "Two thin converging lenses L1 and L2 of focal lengths 18 cm and 12 cm are coaxial and separated by 36 cm. An object is placed 27 cm to the left of L1. The final image formed by L2 is located",
    "options": [
      "36/5 cm to the right of L2",
      "36/5 cm to the left of L2",
      "18 cm to the right of L2",
      "18 cm to the left of L2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For L1, 1/18=1/27+1/v1 gives v1=54 cm to the right of L1. Since L2 is 36 cm to the right of L1, this intermediate image lies 18 cm to the right of L2 and is therefore a virtual object for L2. With Cartesian signs, u2=+18 cm and f2=+12 cm, so 1/12=1/v2-1/18. Hence 1/v2=5/36 and v2=36/5 cm to the right of L2.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ph-005",
    "section": "Physics",
    "topic": "Current electricity",
    "difficulty": "hard",
    "question": "Two cells of emfs E and 2E and internal resistances r and 2r, respectively, are connected in parallel with the same polarity and feed a variable load R. Which statements are correct?",
    "options": [
      "The open-circuit terminal voltage of the pair is 4E/3",
      "The Thevenin internal resistance seen by the load is 2r/3",
      "With the load open, current enters the positive terminal of the cell of emf E",
      "The maximum power delivered to the load is E^2/(2r)"
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
    "explanation": "The open-circuit voltage is the conductance-weighted emf: [(E/r)+(2E/2r)]/[1/r+1/(2r)]=4E/3. With ideal voltage sources suppressed, r is in parallel with 2r, giving 2r/3. Because the terminal voltage 4E/3 exceeds E, the lower-emf cell is being charged, so current enters its positive terminal. Maximum load power is Vth^2/(4Rth)=(16E^2/9)/(8r/3)=2E^2/(3r), not E^2/(2r).",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ph-006",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "hard",
    "question": "One mole of a monatomic ideal gas follows the quasistatic path P=(P0/V0)V from (V0,P0) to (2V0,2P0). Which statements are true?",
    "options": [
      "The final temperature is 4 times the initial temperature",
      "The work done by the gas is (3/2)P0V0",
      "The increase in internal energy is (9/2)P0V0",
      "The heat supplied to the gas is 6P0V0"
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
    "explanation": "Because PV=nRT and n=1, T_i=P0V0/R while T_f=(2P0)(2V0)/R=4T_i, so statement 1 is true. Work is integral from V0 to 2V0 of (P0/V0)V dV=(P0/2V0)(4V0^2-V0^2)=(3/2)P0V0, so statement 2 is true. For a monatomic gas, Delta U=(3/2)R(3T_i)=(9/2)P0V0, so statement 3 is true. Hence Q=Delta U+W=6P0V0, making statement 4 true.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ph-007",
    "section": "Physics",
    "topic": "Electric and magnetic fields",
    "difficulty": "hard",
    "question": "A particle of charge q>0 and mass m is accelerated from rest through a potential difference V, then passes undeflected through a velocity selector with mutually perpendicular fields of magnitudes E and B. It next enters a uniform analysing magnetic field Ba perpendicular to its velocity. Which statements are correct?",
    "options": [
      "Its selected speed is E/B",
      "q/m=E^2/(2VB^2)",
      "Its radius in the analysing field is 2VB/(E Ba)",
      "If V is doubled while E and B in the selector are unchanged, the same particle still passes undeflected"
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
    "explanation": "Undeflected motion in the selector requires qE=qvB, so v=E/B. Acceleration through V gives qV=(1/2)mv^2, hence q/m=E^2/(2VB^2). In Ba, r=mv/(qBa)=v/[(q/m)Ba]=2VB/(E Ba). Doubling the accelerating voltage changes the particle speed by sqrt2 while the selector still transmits only speed E/B, so the same particle is no longer undeflected.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ph-008",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "hard",
    "question": "A stretched string consists of two segments, each of length L, joined end to end and fixed at the two outer ends. The tension is T in both segments; their linear densities are \u03bc and 4\u03bc. Consider normal modes for which the junction is a node. Which statements are correct?",
    "options": [
      "In the lowest such mode, the lighter segment has one loop and the heavier segment has two loops",
      "For any such mode, the wavelength in the lighter segment is twice that in the heavier segment",
      "The frequency of the lowest such mode is (1/2L)sqrt(T/\u03bc)",
      "If the heavier segment density is changed from 4\u03bc to 9\u03bc, the lowest junction-node frequency becomes one-third of its previous value"
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
    "explanation": "Wave speeds are v1=sqrt(T/\u03bc)=v and v2=v/2. If the two segments contain n and m half-wavelengths, equality of frequency gives n v/(2L)=m(v/2)/(2L), so m=2n. The lowest case is n=1,m=2 and f=v/(2L). At a common frequency \u03bb1/\u03bb2=v1/v2=2. If the second density becomes 9\u03bc, v2=v/3 and the node condition becomes m=3n; the lowest frequency is still v/(2L), not one-third as large.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ph-009",
    "section": "Physics",
    "topic": "Mechanics",
    "difficulty": "medium",
    "question": "A 2 kg block initially at rest is pulled on a frictionless horizontal surface by a force F=6t newton, where t is in seconds. The speed of the block at t=2 s, in m/s, is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "6",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Impulse=int_0^2 6t dt=12 N s. Since initial momentum is zero, mv=12 and v=12/2=6 m/s.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ph-010",
    "section": "Physics",
    "topic": "Capacitance",
    "difficulty": "hard",
    "question": "A 3 microF capacitor charged to 10 V and a 6 microF capacitor charged to 4 V are disconnected from their sources and then connected positive plate to positive plate. The energy dissipated during charge redistribution, in microjoule, is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "36",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Initial energy is (1/2)(3)(10^2)+(1/2)(6)(4^2)=150+48=198 microJ. Total charge on the joined positive plates is 30+24=54 microC, so the common final voltage is 54/(3+6)=6 V. Final energy is (1/2)(9)(6^2)=162 microJ. The loss is 198-162=36 microJ.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ph-011",
    "section": "Physics",
    "topic": "Thermal physics",
    "difficulty": "hard",
    "question": "One mole of an ideal monatomic gas executes the cycle A(P0,V0)\u2192B(3P0,V0)\u2192C(P0,3V0)\u2192A. AB is isochoric, BC is a straight line in the P-V plane, and CA is isobaric at P0. The thermal efficiency of the cycle, in percent, is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "28.57",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "For a monatomic ideal gas U=(3/2)PV. Along AB, W=0 and \u0394U=3P0V0, so Qin,AB=3P0V0. Along BC, PBVB=PCVC=3P0V0, so \u0394U=0; the straight-line work is average pressure 2P0 times \u0394V=2V0, hence W=Q=4P0V0. Along CA, W=P0(V0-3V0)=-2P0V0 and \u0394U=(3/2)(P0V0-3P0V0)=-3P0V0, so Q=-5P0V0. Net work is 2P0V0 and total heat absorbed is 7P0V0. Efficiency=2/7=0.285714, or 28.57%.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ph-012",
    "section": "Physics",
    "topic": "Modern physics",
    "difficulty": "medium",
    "question": "A photon has energy 4.0 eV. Taking h c=1240 eV nm, its wavelength in nm is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "310",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "lambda=hc/E=1240/4=310 nm exactly.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ph-013",
    "section": "Physics",
    "topic": "Mechanics",
    "difficulty": "medium",
    "question": "All bodies mentioned below roll without slipping. Match List I with List II. List I: (P) a uniform solid cylinder starts from rest and descends through vertical height h; find v^2/(gh) at the bottom; (Q) a uniform solid sphere starts from rest and descends through the same height h; find v^2/(gh); (R) a thin ring rolling with centre-of-mass speed v climbs a rough incline until it momentarily stops; find h_max/(v^2/g); (S) a uniform solid disc rolling with centre-of-mass speed v similarly climbs until it stops; find h_max/(v^2/g). List II: (1) 3/4; (2) 1; (3) 4/3; (4) 10/7; (5) 2/3. Choose the correct code.",
    "options": [
      "P-3,Q-4,R-1,S-2",
      "P-3,Q-4,R-2,S-1",
      "P-4,Q-3,R-2,S-1",
      "P-3,Q-5,R-2,S-1"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For rolling energy, K=(1/2)Mv^2[1+I/(MR^2)]. A solid cylinder has I/(MR^2)=1/2, so mgh=(3/4)Mv^2 and v^2/(gh)=4/3: P-3. For a solid sphere I/(MR^2)=2/5, giving v^2/(gh)=10/7: Q-4. A rolling ring has total kinetic energy Mv^2, so h_max=v^2/g: R-2. A rolling disc has total kinetic energy (3/4)Mv^2, so h_max=(3/4)(v^2/g): S-1.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ph-014",
    "section": "Physics",
    "topic": "Electromagnetism",
    "difficulty": "medium",
    "question": "Match each electromagnetism setup in List I with the dimensionless result in List II. List I: (P) charges +q, -2q and +3q are fixed at (3a,0), (0,4a) and (3a,4a), respectively; find the potential at the origin divided by kq/a; (Q) two identical cells of emf E and internal resistance r are connected in parallel to a load resistance r; find the load voltage divided by E; (R) a conducting rod of length l rotates with angular speed omega about one end in a uniform magnetic field perpendicular to its plane; find emf/(B omega l^2); (S) a loop of area A and resistance R is in a perpendicular uniform field that changes quasistatically from 0 to B0; find the total charge that passes, divided by AB0/R. List II: (1) 1/2; (2) 2/3; (3) 1; (4) 13/30; (5) 3/5. Choose the correct code.",
    "options": [
      "P-4,Q-1,R-2,S-3",
      "P-2,Q-4,R-1,S-3",
      "P-4,Q-2,R-3,S-1",
      "P-4,Q-2,R-1,S-3"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The three distances from the origin are 3a, 4a and 5a, so V/(kq/a)=1/3-2/4+3/5=13/30: P-4. Two identical parallel cells have equivalent emf E and internal resistance r/2; with load r, V/E=r/(r+r/2)=2/3: Q-2. For a rotating rod, emf=integral_0^l B omega x dx=(1/2)B omega l^2: R-1. The total induced charge is integral I dt=(1/R) integral emf dt=Delta Phi/R=AB0/R: S-3.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ph-015",
    "section": "Physics",
    "topic": "Optics",
    "difficulty": "medium",
    "question": "Match each optical setup in List I with the requested result in List II. List I: (P) a +20 cm lens and a -30 cm lens are coaxial and separated by 10 cm; find the equivalent focal length; (Q) a thin glass lens of refractive index 3/2 has focal length 20 cm in air and is immersed in a liquid of refractive index 4/3; find its new focal length; (R) an object at the bottom of a 12 cm thick glass slab of refractive index 3/2 is viewed normally from air; find the apparent upward shift; (S) a prism of angle 60 degree has refractive index sqrt(3); find its minimum deviation. List II: (1) 30 cm; (2) 80 cm; (3) 4 cm; (4) 60 degree; (5) 20 cm. Choose the correct code.",
    "options": [
      "P-1,Q-2,R-3,S-4",
      "P-2,Q-1,R-3,S-4",
      "P-1,Q-2,R-4,S-3",
      "P-3,Q-2,R-1,S-4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For separated thin lenses, P_eq=P1+P2-dP1P2=5-10/3-(0.10)(5)(-10/3)=10/3 D, so f_eq=0.30 m: P-1. Lens power is proportional to (n_lens/n_medium-1). The factor changes from 1/2 in air to 1/8 in the liquid, so the power becomes one-fourth and the focal length becomes 80 cm: Q-2. Normal apparent depth is 12/(3/2)=8 cm, so shift=4 cm: R-3. At minimum deviation, sqrt3=sin[(60+delta_m)/2]/sin30 gives delta_m=60 degree: S-4.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p1-ph-016",
    "section": "Physics",
    "topic": "Modern physics",
    "difficulty": "medium",
    "question": "Match List I with List II. List I: (P) for a hydrogen atom, photon energy in the n=3\u21922 transition divided by 13.6 eV; (Q) ratio of de Broglie wavelengths \u03bb(V)/\u03bb(4V) for electrons accelerated from rest through potentials V and 4V; (R) for a radioactive parent with stable daughter initially absent, Ndaughter/Nparent after three parent half-lives; (S) stopping potential in volts for photoelectrons when photon energy is 5 eV and work function is 2 eV. List II: (1) 5/36; (2) 2; (3) 3; (4) 7; (5) 4. Choose the correct code.",
    "options": [
      "P-1,Q-3,R-4,S-2",
      "P-1,Q-2,R-4,S-3",
      "P-2,Q-1,R-4,S-3",
      "P-1,Q-2,R-3,S-4"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "P: \u0394E/13.6=1/2^2-1/3^2=5/36, so P-1. Q: \u03bb is proportional to 1/sqrt(V), so \u03bb(V)/\u03bb(4V)=2, giving Q-2. R: after three half-lives, parent fraction is 1/8 and daughter fraction is 7/8, hence Nd/Np=7, so R-4. S: Kmax=5-2=3 eV, so the stopping potential is 3 V, giving S-3.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  }
];
