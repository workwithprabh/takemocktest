import type { Question } from '../questions';

export const JEE_ADVANCED_PAPER_2_PHYSICS_1: Question[] = [
  {
    "id": "jee-advanced-p2-ph-001",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "easy",
    "question": "A projectile is launched with speed u at angle 45 degrees on level ground. Neglect air resistance. Its maximum height divided by its horizontal range is",
    "options": [
      "1/4",
      "1/8",
      "1/2",
      "1"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "At 45 degrees, H=u^2 sin^2 45/(2g)=u^2/(4g), while R=u^2 sin90/g=u^2/g. Hence H/R=1/4.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ph-002",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "A satellite in a circular orbit around Earth has orbital speed v. If its orbital radius is increased to four times the original radius, the new speed is",
    "options": [
      "v/4",
      "v/sqrt(2)",
      "v/2",
      "2v"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For a circular orbit v=sqrt(GM/r). Replacing r by 4r reduces the speed by sqrt(4)=2, giving v/2.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ph-003",
    "section": "Physics",
    "topic": "Electromagnetic induction",
    "difficulty": "hard",
    "question": "A conducting rod of length L slides with speed v on frictionless parallel rails in a uniform magnetic field B perpendicular to the rail plane. The rails are connected by resistance R. Neglect rail and rod resistance. The external force needed to maintain constant speed is",
    "options": [
      "BLv/R",
      "B^2Lv^2/R",
      "BLv^2/R",
      "B^2L^2v/R"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The motional emf is BLv, so current I=BLv/R. Magnetic force on the rod is BIL=B(BLv/R)L=B^2L^2v/R opposite motion. The external force must have this magnitude.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ph-004",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "hard",
    "question": "One mole of an ideal monatomic gas follows a straight-line path in the P-V plane from (V0,3P0) to (3V0,P0). If P0V0=RT0, the heat supplied to the gas along this path is",
    "options": [
      "2RT0",
      "4RT0",
      "3RT0",
      "5RT0"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The initial and final values of PV are both 3P0V0, so the initial and final temperatures are equal and Delta U=0. The work is the area under the straight line: average pressure times volume change =[(3P0+P0)/2](2V0)=4P0V0=4RT0. Therefore Q=Delta U+W=4RT0.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ph-005",
    "section": "Physics",
    "topic": "Rotation and rigid-body dynamics",
    "difficulty": "hard",
    "question": "Masses m and 2m hang from the two ends of a light inextensible string passing over a uniform-disc pulley of mass 2m and radius R. The string does not slip and the axle is frictionless. Let the 2m mass move downward with acceleration a; tensions on the m and 2m sides are T1 and T2. Which statements are correct?",
    "options": [
      "a=g/4",
      "T2/T1=6/5",
      "The angular acceleration of the pulley is g/(4R)",
      "T2-T1=mg/2"
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
    "explanation": "For the masses, T1-mg=ma and 2mg-T2=2ma. For the pulley, (T2-T1)R=I\u03b1 with I=(1/2)(2m)R^2=mR^2 and \u03b1=a/R, so T2-T1=ma. Substitution gives a=g/4, T1=5mg/4 and T2=3mg/2, hence T2/T1=6/5 and \u03b1=g/(4R). The tension difference is mg/4, not mg/2.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ph-006",
    "section": "Physics",
    "topic": "Electrostatics and capacitance",
    "difficulty": "hard",
    "question": "Two identical capacitors of capacitance C are connected in series across a battery of voltage V and allowed to charge. The battery is then disconnected, leaving the outer plates isolated. A dielectric of constant k>1 is inserted so as to completely fill one capacitor. Which statements are correct?",
    "options": [
      "The magnitude of charge on each capacitor remains CV/2",
      "The total voltage across the series pair becomes V(k+1)/(2k)",
      "The stored electrostatic energy becomes (k+1)/(2k) times its value just before dielectric insertion",
      "During quasistatic insertion, the external agent must do positive work on the capacitor system"
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
    "explanation": "Initially the series equivalent capacitance is C/2, so each capacitor carries Q=CV/2. After battery disconnection, the isolated outer-plate charges fix this series charge. The new voltages are Q/C and Q/(kC), giving V'=V(k+1)/(2k). The new energy is Q^2/(2C)+Q^2/(2kC)=CV^2(k+1)/(8k), while the initial energy was CV^2/4, giving ratio (k+1)/(2k)<1. Thus field energy decreases; for quasistatic insertion the field does positive work and the external agent's work is negative, not positive.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ph-007",
    "section": "Physics",
    "topic": "Optics",
    "difficulty": "medium",
    "question": "For Young's double-slit interference with monochromatic light in air, which changes individually increase the fringe width?",
    "options": [
      "Increasing wavelength",
      "Increasing screen distance",
      "Increasing slit separation",
      "Immersing the entire setup in a liquid of refractive index greater than 1"
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
    "explanation": "Fringe width beta=lambda D/d. Increasing lambda or D increases beta. Increasing d decreases it. Immersion changes wavelength to lambda/n and therefore decreases beta. Only the first two are true.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ph-008",
    "section": "Physics",
    "topic": "Modern physics",
    "difficulty": "hard",
    "question": "Compare a hydrogen atom in the n=2 Bohr orbit with a He+ ion in the n=4 Bohr orbit. Neglect reduced-mass differences. Which statements are correct?",
    "options": [
      "The orbital energies are equal",
      "The electron speeds are equal",
      "The orbital radii are equal",
      "The photon energy for He+ transition 4\u21922 equals that for H transition 2\u21921"
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
    "explanation": "Bohr energy scales as -Z^2/n^2: H(n=2) gives -13.6/4=-3.4 eV and He+(n=4) gives -13.6\u00d74/16=-3.4 eV. Speed scales as Z/n, giving 1/2 for both. Radius scales as n^2/Z, giving 4a0 for H and 8a0 for He+, so the radii differ by a factor 2. For He+ 4\u21922, \u0394E=54.4(1/4-1/16)=10.2 eV, equal to H 2\u21921.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ph-009",
    "section": "Physics",
    "topic": "Oscillations",
    "difficulty": "hard",
    "question": "A mass m attached to a horizontal spring of force constant k is initially at rest with the spring unstretched. At t=0 a constant horizontal force F is suddenly applied and then maintained. With \u03c9=sqrt(k/m), which statements are correct?",
    "options": [
      "The maximum extension of the spring is 2F/k",
      "The maximum speed of the mass is F/sqrt(km)",
      "The first time after t=0 at which the spring is again unstretched is 2\u03c0/\u03c9",
      "The quantity (1/2)mv^2+(1/2)kx^2 remains constant after t=0"
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
    "explanation": "The equation is mx''+kx=F with x(0)=v(0)=0, giving x=(F/k)(1-cos\u03c9t). Hence xmax=2F/k. Differentiation gives vmax=(F/k)\u03c9=F/sqrt(km). The next x=0 occurs at \u03c9t=2\u03c0. The ordinary spring-plus-kinetic mechanical energy is not conserved because the maintained external force does work; conservation applies only after including the potential -Fx.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ph-010",
    "section": "Physics",
    "topic": "Current electricity",
    "difficulty": "hard",
    "question": "Two cells of emfs 12 V and 6 V with internal resistances 2 ohm and 1 ohm respectively are connected in parallel with like terminals together. This combination supplies a 2 ohm external resistor. The current through the external resistor, in ampere, is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "3",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The parallel cells have Thevenin emf E_eq=(E1/r1+E2/r2)/(1/r1+1/r2)=(12/2+6/1)/(1/2+1)=8 V and internal resistance r_eq=(2x1)/(2+1)=2/3 ohm. The load current is 8/(2+2/3)=3 A.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ph-011",
    "section": "Physics",
    "topic": "Collision of a particle with a rigid body",
    "difficulty": "hard",
    "question": "A uniform rod of length L and mass 3m is hinged frictionlessly at one end and hangs vertically downward at rest. A particle of mass m moving horizontally with speed v strikes the free end perpendicularly to the rod. The coefficient of restitution between the particle and the rod at impact is 1/2. After the collision the particle separates. If the rod just reaches the horizontal position, the value of v/sqrt(gL) is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "2.31",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Let u be the particle speed just after impact in its original direction and omega the rod's angular speed. About the hinge, angular momentum is conserved during impact. Since Irod=(1/3)(3m)L^2=mL^2, mvL=muL+mL^2 omega, so v=u+L omega. Restitution along the impact direction gives L omega-u=v/2. Hence u=v/4 and L omega=3v/4. The rod's rotational kinetic energy just after impact is (1/2)mL^2 omega^2=9mv^2/32. To just reach horizontal, this equals the increase in the rod's gravitational potential energy, (3m)g(L/2)=3mgL/2. Therefore v^2=(16/3)gL and v/sqrt(gL)=4/sqrt(3)=2.3094..., which rounds to 2.31.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "jee-advanced-p2-ph-012",
    "section": "Physics",
    "topic": "Waves and sound",
    "difficulty": "hard",
    "question": "An unknown tuning fork produces 6 beats per second with a 256 Hz fork. When a small amount of wax is attached to the unknown fork, the beat frequency becomes 2 Hz. Before loading, the unknown fork resonates in the fundamental mode with a closed organ pipe. Taking the speed of sound as 344 m/s, the pipe length in centimetres is",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "32.82",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "The unknown frequency is initially either 250 or 262 Hz. Wax lowers its frequency. A reduction of the beat frequency from 6 to 2 is possible only if the unknown fork started above 256 Hz, so f=262 Hz. For the fundamental of a closed pipe, f=v/(4L), hence L=344/(4\u00d7262)=0.328244... m=32.82 cm.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ph-013",
    "section": "Physics",
    "topic": "Thermal physics",
    "difficulty": "hard",
    "question": "A small black body is inside a large enclosure maintained at 300 K. A heater of power P keeps the body at 600 K in steady state. If the heater power is changed to 3P and all other conditions remain unchanged, find (T/300)^4 for the new steady temperature T.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "46",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "Net radiative loss is proportional to T^4-T_s^4. Initially P is proportional to 600^4-300^4 =300^4(16-1)=15(300^4). With heater power 3P, T^4-300^4=45(300^4), so T^4=46(300^4). Hence (T/300)^4=46.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ph-014",
    "section": "Physics",
    "topic": "Optics",
    "difficulty": "hard",
    "question": "A convex lens of focal length 25 cm forms a real image on a screen 100 cm from the lens. Enter three times the object distance from the lens, in cm.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "100",
    "maxDecimalPlaces": 2,
    "marks": 4,
    "negativeMarking": 0,
    "explanation": "In magnitudes, 1/25=1/u+1/100, so 1/u=3/100 and u=100/3 cm. Therefore 3u=100 cm exactly.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ph-015",
    "section": "Physics",
    "topic": "Mechanics",
    "difficulty": "hard",
    "question": "Shared Stem A: Two blocks of masses 1 kg and 3 kg lie on a smooth horizontal line and are connected by a light spring of force constant 12 N/m. Initially the spring is at its natural length and both blocks are at rest. At t=0 an impulse gives the 1 kg block a velocity of 4 m/s toward the 3 kg block; the 3 kg block is still at rest immediately after the impulse. Find the maximum compression of the spring, in metre.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "1",
    "maxDecimalPlaces": 2,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "For the relative motion, the reduced mass is mu=(1x3)/(1+3)=3/4 kg and the initial relative speed is 4 m/s. The relative angular frequency is sqrt(k/mu)=sqrt(12/(3/4))=4 rad/s. Starting from zero compression with relative speed 4 m/s, the amplitude is v_rel/omega=4/4=1 m.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ph-016",
    "section": "Physics",
    "topic": "Mechanics",
    "difficulty": "hard",
    "question": "Shared Stem A: Two blocks of masses 1 kg and 3 kg lie on a smooth horizontal line and are connected by a light spring of force constant 12 N/m. Initially the spring is at its natural length and both blocks are at rest. At t=0 an impulse gives the 1 kg block a velocity of 4 m/s toward the 3 kg block; the 3 kg block is still at rest immediately after the impulse. When the spring first returns to its natural length after reaching maximum compression, find the speed of the 3 kg block, in m/s.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "2",
    "maxDecimalPlaces": 2,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "The centre-of-mass speed is Vcm=(1x4+3x0)/4=1 m/s. When the spring first returns to natural length after compression, the relative velocity has reversed, so v1-v2=-4 m/s. Together with v1+3v2=4, this gives v2=2 m/s.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ph-017",
    "section": "Physics",
    "topic": "Capacitance",
    "difficulty": "medium",
    "question": "Shared Stem B: A 3 microF capacitor C1 is charged to 12 V and disconnected from its battery. A 6 microF capacitor C2 is initially uncharged. The capacitors are then connected in parallel with like plates together and allowed to reach equilibrium. After that, while the pair remains isolated from all external circuits, a dielectric of constant 3 is inserted fully into C1. Find the common potential difference immediately after the first parallel connection and before dielectric insertion, in volt.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "4",
    "maxDecimalPlaces": 2,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "Initial total charge is Q=(3 microF)(12 V)=36 microC. After parallel connection, total capacitance is 3+6=9 microF. Hence the common voltage is 36/9=4 V.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  },
  {
    "id": "jee-advanced-p2-ph-018",
    "section": "Physics",
    "topic": "Capacitance",
    "difficulty": "hard",
    "question": "Shared Stem B: A 3 microF capacitor C1 is charged to 12 V and disconnected from its battery. A 6 microF capacitor C2 is initially uncharged. The capacitors are then connected in parallel with like plates together and allowed to reach equilibrium. After that, while the pair remains isolated from all external circuits, a dielectric of constant 3 is inserted fully into C1. Find the decrease in total electrostatic energy caused by the dielectric insertion, in microjoule.",
    "options": [],
    "correctIndex": -1,
    "answerType": "numerical",
    "correctValue": "28.8",
    "maxDecimalPlaces": 2,
    "marks": 2,
    "negativeMarking": 0,
    "explanation": "After the first connection, U_i=(1/2)(9 microF)(4^2)=72 microJ. With dielectric constant 3 in C1, its capacitance becomes 9 microF, so total capacitance is 15 microF. The isolated pair retains total charge 36 microC, so U_f=Q^2/(2C)=36^2/(2x15)=43.2 microJ. The decrease is 72-43.2=28.8 microJ.",
    "source": {
      "kind": "original",
      "reference": "JEE (Advanced) 2026 official syllabus",
      "url": "https://jeeadv.ac.in/documents/jee-advanced-2026-syllabus.pdf",
      "checkedOn": "2026-08-23"
    }
  }
];
