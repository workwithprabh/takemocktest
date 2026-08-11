import type { Question } from '../questions';

export const BITSAT_2026_MATHEMATICS_PHYSICS_1: Question[] = [
  {
    "id": "bitsat-2026-physics-001",
    "section": "Physics",
    "topic": "Units and Measurement",
    "difficulty": "medium",
    "question": "A rectangle has measured length (2.50 ± 0.02) m and breadth (1.20 ± 0.01) m. Using maximum fractional error addition, what is the approximate percentage uncertainty in its area?",
    "options": [
      "0.80%",
      "1.20%",
      "1.63%",
      "2.40%"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For A = lb, the maximum fractional uncertainty is ΔA/A = Δl/l + Δb/b. Thus ΔA/A = 0.02/2.50 + 0.01/1.20 = 0.008 + 0.00833 = 0.01633. As a percentage, this is about 1.63%.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-002",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "easy",
    "question": "The position of a particle moving along the x-axis is x = 4t^2 - 2t + 3, where x is in metres and t is in seconds. What is its velocity at t = 2 s?",
    "options": [
      "14 m/s",
      "10 m/s",
      "16 m/s",
      "18 m/s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Velocity is v = dx/dt = 8t - 2. At t = 2 s, v = 8(2) - 2 = 14 m/s.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-003",
    "section": "Physics",
    "topic": "Newton's Laws of Motion",
    "difficulty": "medium",
    "question": "Two blocks of masses 2 kg and 3 kg are in contact on a smooth horizontal surface. A horizontal force of 20 N pushes the 3 kg block toward the 2 kg block. Both blocks move together. What is the magnitude of the contact force between the blocks?",
    "options": [
      "4 N",
      "6 N",
      "10 N",
      "8 N"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The common acceleration is a = 20/(2 + 3) = 4 m/s^2. The 20 N force pushes the 3 kg block into the 2 kg block, so the contact force is the only horizontal force accelerating the 2 kg block. Therefore F = ma = 2 × 4 = 8 N.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-004",
    "section": "Physics",
    "topic": "Impulse and Momentum",
    "difficulty": "easy",
    "question": "A 0.20 kg ball moving at 15 m/s along the positive x-direction rebounds along the negative x-direction at 10 m/s. What is the magnitude of the impulse delivered to the ball?",
    "options": [
      "5 N s",
      "1 N s",
      "2 N s",
      "25 N s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Impulse equals the change in momentum. Taking the initial direction as positive, J = m(vf - vi) = 0.20(-10 - 15) = -5 N s. Its magnitude is 5 N s.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-005",
    "section": "Physics",
    "topic": "Work and Energy",
    "difficulty": "medium",
    "question": "A particle moves along the x-axis under a force F = 6x N, where x is in metres. How much work is done by this force as the particle moves from x = 0 to x = 2 m?",
    "options": [
      "6 J",
      "12 J",
      "18 J",
      "24 J"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The work is W = integral from 0 to 2 of 6x dx = 3x^2 evaluated from 0 to 2 = 3(4) = 12 J.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-006",
    "section": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "hard",
    "question": "A uniform horizontal disc of mass M and radius R rotates freely about its vertical central axis with angular speed omega. A small lump of putty of mass M/2 is dropped vertically onto the rim and sticks there. What fraction of the disc's initial rotational kinetic energy is lost in the process?",
    "options": [
      "1/4",
      "1/3",
      "1/2",
      "3/4"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Initially, the disc has moment of inertia Ii = MR^2/2. Because the putty falls vertically parallel to the disc's vertical rotation axis, its angular momentum about that axis is zero just before impact. After it sticks at the rim, If = MR^2/2 + (M/2)R^2 = MR^2. Conserving angular momentum about the vertical axis, (MR^2/2)omega = (MR^2)omegaf, so omegaf = omega/2. The initial rotational kinetic energy of the disc is Ki = (1/2)(MR^2/2)omega^2 = MR^2 omega^2/4. The final rotational kinetic energy is Kf = (1/2)(MR^2)(omega/2)^2 = MR^2 omega^2/8. Thus the fraction of the disc's initial rotational kinetic energy lost is (Ki - Kf)/Ki = 1/2.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-007",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "easy",
    "question": "At a given distance from the centre of a planet, the speed required for a circular orbit is v. What is the escape speed from the same point, neglecting atmospheric effects?",
    "options": [
      "v/sqrt(2)",
      "sqrt(2)v",
      "2v",
      "v"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The circular orbital speed is v = sqrt(GM/r), while escape speed is ve = sqrt(2GM/r). Therefore ve = sqrt(2)v.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-008",
    "section": "Physics",
    "topic": "Mechanics of Solids and Fluids",
    "difficulty": "medium",
    "question": "Water flows steadily through a horizontal pipe. The pipe radius decreases from r to r/2. If the speed in the wider section is 1 m/s and the water density is 1000 kg/m^3, what is P1 - P2 between the wider and narrower sections?",
    "options": [
      "1500 Pa",
      "3000 Pa",
      "6000 Pa",
      "7500 Pa"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Continuity gives A1v1 = A2v2. Since A2 = A1/4, v2 = 4 m/s. For a horizontal pipe, Bernoulli's equation gives P1 - P2 = (1/2)rho(v2^2 - v1^2) = 500(16 - 1) = 7500 Pa.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-009",
    "section": "Physics",
    "topic": "Oscillations",
    "difficulty": "easy",
    "question": "A particle executes simple harmonic motion described by x = 0.05 cos(4t) m. What is its maximum acceleration?",
    "options": [
      "0.80 m/s^2",
      "0.20 m/s^2",
      "3.20 m/s^2",
      "4.00 m/s^2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For SHM, the maximum acceleration is amax = omega^2 A. Here omega = 4 rad/s and A = 0.05 m, so amax = 16 × 0.05 = 0.80 m/s^2.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-010",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "medium",
    "question": "A string of length 2 m is fixed at both ends. Its tension is 100 N and its linear mass density is 0.010 kg/m. What is its fundamental frequency?",
    "options": [
      "20 Hz",
      "25 Hz",
      "50 Hz",
      "100 Hz"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The wave speed is v = sqrt(T/mu) = sqrt(100/0.010) = 100 m/s. For a string fixed at both ends, the fundamental frequency is f = v/(2L) = 100/(4) = 25 Hz.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-011",
    "section": "Physics",
    "topic": "Heat and Thermodynamics",
    "difficulty": "medium",
    "question": "Two moles of an ideal monatomic gas are heated at constant volume from 300 K to 400 K. What is the increase in internal energy, in terms of the gas constant R?",
    "options": [
      "100R",
      "150R",
      "200R",
      "300R"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For a monatomic ideal gas, ΔU = (3/2)nRΔT. Here n = 2 and ΔT = 100 K, so ΔU = (3/2)(2)R(100) = 300R.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-012",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "medium",
    "question": "Two point charges +q and -q are separated by a distance 2a. At the midpoint between them, which statement about electric potential V and electric field magnitude E is correct?",
    "options": [
      "V is zero and E is nonzero",
      "V and E are both zero",
      "V is nonzero and E is zero",
      "V and E are both nonzero because the charges do not cancel"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Potential is a scalar, so the equal contributions kq/a and -kq/a cancel, giving V = 0. The electric fields at the midpoint point in the same direction, from +q toward -q, so their magnitudes add and E is nonzero.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-013",
    "section": "Physics",
    "topic": "Current Electricity",
    "difficulty": "easy",
    "question": "A 6 ohm resistor and a 3 ohm resistor are connected in parallel. What is their equivalent resistance?",
    "options": [
      "9 ohm",
      "4 ohm",
      "2 ohm",
      "18 ohm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For parallel resistors, 1/Req = 1/6 + 1/3 = 1/6 + 2/6 = 1/2. Therefore Req = 2 ohm.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-014",
    "section": "Physics",
    "topic": "Magnetic Effect of Current",
    "difficulty": "medium",
    "question": "A charged particle enters a uniform magnetic field perpendicular to the field and moves in a circular path. If its speed is doubled while the magnetic field magnitude is halved, by what factor does the radius of the path change?",
    "options": [
      "It remains unchanged",
      "It doubles",
      "It becomes four times",
      "It becomes half"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For perpendicular motion in a magnetic field, r = mv/(|q|B). Thus r is proportional to v/B. Replacing v by 2v and B by B/2 multiplies the radius by 2/(1/2) = 4.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-015",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "medium",
    "question": "The plane of a single-turn loop of area 0.020 m^2 is perpendicular to a uniform magnetic field. The field decreases uniformly from 0.50 T to 0.10 T in 0.20 s. What is the magnitude of the induced emf?",
    "options": [
      "0.01 V",
      "0.04 V",
      "0.08 V",
      "0.20 V"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Because the plane of the loop is perpendicular to the magnetic field, the field is parallel to the area vector and the flux magnitude is Phi = BA. Faraday's law gives |emf| = A|Delta B|/Delta t = 0.020 × 0.40/0.20 = 0.040 V.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-016",
    "section": "Physics",
    "topic": "Optics",
    "difficulty": "easy",
    "question": "Two thin lenses of powers +5 D and -2 D are placed in contact. What is the focal length of the combination?",
    "options": [
      "20 cm",
      "50 cm",
      "100 cm",
      "33.3 cm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For thin lenses in contact, powers add: P = +5 - 2 = +3 D. Hence f = 1/P = 1/3 m = 0.333 m, which is about 33.3 cm.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-017",
    "section": "Physics",
    "topic": "Modern Physics",
    "difficulty": "medium",
    "question": "A metal has a threshold wavelength of 500 nm. Light of wavelength 400 nm is incident on it. Using hc = 1240 eV nm, what is the maximum kinetic energy of the emitted photoelectrons?",
    "options": [
      "0.31 eV",
      "0.62 eV",
      "1.24 eV",
      "2.48 eV"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The work function is hc/lambda0, so Kmax = hc(1/lambda - 1/lambda0). Thus Kmax = 1240(1/400 - 1/500) eV = 1240(0.0005) eV = 0.62 eV.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-018",
    "section": "Physics",
    "topic": "Electronic Devices",
    "difficulty": "medium",
    "question": "For a transistor, the common-base current gain is alpha = 0.98. What is the corresponding common-emitter current gain beta?",
    "options": [
      "49",
      "50",
      "98",
      "0.49"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The relation between the current gains is beta = alpha/(1 - alpha). Therefore beta = 0.98/0.02 = 49.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-019",
    "section": "Physics",
    "topic": "Units and Measurement",
    "difficulty": "easy",
    "question": "What is the dimensional formula of Planck's constant h?",
    "options": [
      "[M L T^-1]",
      "[M L^2 T^-2]",
      "[M L^2 T^-1]",
      "[M^0 L^2 T^-1]"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "From E = h nu, h = E/nu. Energy has dimensions [M L^2 T^-2] and frequency has dimensions [T^-1]. Therefore h has dimensions [M L^2 T^-1].",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-020",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "hard",
    "question": "A projectile is launched from the top of a 15 m high platform with speed 20 m/s at 30 degrees above the horizontal. Take g = 10 m/s^2. How far horizontally from the point of projection does it strike the ground?",
    "options": [
      "30sqrt(3) m",
      "25sqrt(3) m",
      "40sqrt(3) m",
      "20sqrt(3) m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The vertical component of launch velocity is uy = 20 sin 30 degrees = 10 m/s. Taking the launch point as y = 0 and upward as positive, the ground is at y = -15 m. Thus -15 = 10t - 5t^2, so t^2 - 2t - 3 = 0 and the physical root is t = 3 s. The horizontal component is ux = 20 cos 30 degrees = 10sqrt(3) m/s. Therefore the horizontal distance is x = uxt = 10sqrt(3) × 3 = 30sqrt(3) m.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-021",
    "section": "Physics",
    "topic": "Newton's Laws of Motion",
    "difficulty": "medium",
    "question": "A car travels on a level circular road of radius 25 m. If the coefficient of static friction between the tyres and road is 0.40 and g = 10 m/s^2, what is the maximum speed without skidding?",
    "options": [
      "25 m/s",
      "5 m/s",
      "20 m/s",
      "10 m/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Static friction supplies the centripetal force. At the limiting speed, mu mg = mv^2/r, so v = sqrt(mu rg) = sqrt(0.40 × 25 × 10) = sqrt(100) = 10 m/s.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-022",
    "section": "Physics",
    "topic": "Impulse and Momentum",
    "difficulty": "hard",
    "question": "A 20 g bullet moving at 200 m/s embeds in a 980 g block initially at rest on a smooth horizontal surface. The combined body then compresses a horizontal spring of force constant 400 N/m. What is the maximum compression of the spring?",
    "options": [
      "0.10 m",
      "0.20 m",
      "0.40 m",
      "0.80 m"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "During the inelastic collision, horizontal momentum is conserved. The bullet momentum is 0.020 × 200 = 4 kg m/s and the combined mass is 1.000 kg, so the speed just after impact is 4 m/s. After the collision, the combined body's kinetic energy is converted into spring potential energy: (1/2)(1)(4^2) = (1/2)(400)x^2. Hence 8 = 200x^2, giving x^2 = 0.04 and x = 0.20 m.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-023",
    "section": "Physics",
    "topic": "Optics",
    "difficulty": "medium",
    "question": "In a Young double-slit experiment, monochromatic light of wavelength 600 nm is used. The slit separation is 0.50 mm and the screen is 1.5 m away. What is the fringe width?",
    "options": [
      "0.90 mm",
      "1.20 mm",
      "1.80 mm",
      "3.60 mm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "The fringe width is beta = lambda D/d. Therefore beta = (600 × 10^-9)(1.5)/(0.50 × 10^-3) m = 1.8 × 10^-3 m = 1.80 mm.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-024",
    "section": "Physics",
    "topic": "Rotational Motion",
    "difficulty": "medium",
    "question": "A uniform disc of mass 2 kg and radius 0.50 m rotates about its central axis with angular speed 8 rad/s. What is its rotational kinetic energy?",
    "options": [
      "2 J",
      "4 J",
      "16 J",
      "8 J"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For a uniform disc, I = MR^2/2 = 2(0.50)^2/2 = 0.25 kg m^2. Rotational kinetic energy is K = Iomega^2/2 = 0.25(64)/2 = 8 J.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-025",
    "section": "Physics",
    "topic": "Modern Physics",
    "difficulty": "easy",
    "question": "A radioactive sample has a half-life of 6 hours. What fraction of the original undecayed nuclei remains after 18 hours?",
    "options": [
      "1/4",
      "1/8",
      "1/16",
      "1/32"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Eighteen hours corresponds to 18/6 = 3 half-lives. The remaining fraction is (1/2)^3 = 1/8.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-026",
    "section": "Physics",
    "topic": "Mechanics of Solids and Fluids",
    "difficulty": "hard",
    "question": "Eight identical spherical drops of a liquid, each of radius r, fall separately through a viscous liquid with the same terminal speed v. The eight drops then coalesce into one spherical drop without loss of liquid. Assuming Stokes' law applies in both cases and the density difference is unchanged, what is the terminal speed of the larger drop?",
    "options": [
      "4v",
      "2v",
      "8v",
      "16v"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Conservation of liquid volume gives (4/3)pi R^3 = 8(4/3)pi r^3, hence R^3 = 8r^3 and R = 2r. For a spherical body obeying Stokes' law, terminal speed is proportional to the square of its radius when the density difference and viscosity are unchanged. Therefore V/v = R^2/r^2 = 4, so the new terminal speed is 4v.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-027",
    "section": "Physics",
    "topic": "Oscillations",
    "difficulty": "hard",
    "question": "A particle executes simple harmonic motion. Its speed is 8 cm/s when its displacement from equilibrium is 3 cm, and 6 cm/s when its displacement is 4 cm. What is the amplitude of the motion?",
    "options": [
      "3 cm",
      "4 cm",
      "sqrt(41) cm",
      "5 cm"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For SHM, v^2 = omega^2(A^2 - x^2). The two observations give 64 = omega^2(A^2 - 9) and 36 = omega^2(A^2 - 16), with lengths in cm. Subtracting the equations gives 28 = 7omega^2, so omega^2 = 4 s^-2. Substituting into the second equation gives 36 = 4(A^2 - 16), so A^2 = 25 and A = 5 cm.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-028",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "easy",
    "question": "An open organ pipe of length 0.85 m contains air in which the speed of sound is 340 m/s. What is its fundamental frequency?",
    "options": [
      "200 Hz",
      "170 Hz",
      "100 Hz",
      "400 Hz"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For an open pipe, the fundamental wavelength is lambda = 2L = 1.70 m. Hence f = v/lambda = 340/1.70 = 200 Hz.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-029",
    "section": "Physics",
    "topic": "Heat and Thermodynamics",
    "difficulty": "easy",
    "question": "An ideal Carnot engine operates between a hot reservoir at 500 K and a cold reservoir at 300 K. What is its efficiency?",
    "options": [
      "20%",
      "60%",
      "40%",
      "80%"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "Carnot efficiency is eta = 1 - Tc/Th = 1 - 300/500 = 1 - 0.60 = 0.40, or 40%.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  },
  {
    "id": "bitsat-2026-physics-030",
    "section": "Physics",
    "topic": "Electromagnetic Induction",
    "difficulty": "medium",
    "question": "An ideal transformer has 500 turns in its primary coil and is connected to 220 V AC. How many turns should the secondary coil have to produce 22 V AC?",
    "options": [
      "25",
      "50",
      "100",
      "250"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 3,
    "negativeMarking": 1,
    "explanation": "For an ideal transformer, Vs/Vp = Ns/Np. Thus Ns = Np(Vs/Vp) = 500(22/220) = 50 turns.",
    "source": {
      "kind": "original",
      "reference": "Written to the official BITSAT-2026 Physics syllabus and approved exam brief",
      "url": "https://admissions.bits-pilani.ac.in/FD/downloads/BITSAT-2026_brochure.pdf",
      "checkedOn": "2026-08-10"
    }
  }
];
