import type { Question } from '../questions';

export const CHANDIGARH_CUCET_2026_PHYSICS_1: Question[] = [
  {
    "id": "chandigarh-cucet-2026-ph-001",
    "section": "Physics",
    "topic": "Units and measurements",
    "difficulty": "medium",
    "question": "A quantity X is defined by X = (force \u00d7 time)/(density \u00d7 volume). What are the dimensions of X?",
    "options": [
      "[L T^-2]",
      "[M L T^-1]",
      "[L T^-1]",
      "[L^2 T^-1]"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Force \u00d7 time has dimensions [M L T^-2][T] = [M L T^-1]. Density \u00d7 volume has [M L^-3][L^3] = [M]. Their ratio is [L T^-1].",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-002",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "medium",
    "question": "A maintenance cart moves east at 6 m/s while a drone flies north at 8 m/s. To an observer on the cart, the magnitude of the drone\u2019s velocity is:",
    "options": [
      "10 m/s",
      "2 m/s",
      "48 m/s",
      "14 m/s"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Relative velocity is v_drone - v_cart = 8 j - 6 i m/s. Its magnitude is sqrt(8^2 + 6^2) = 10 m/s.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-003",
    "section": "Physics",
    "topic": "Laws of motion",
    "difficulty": "medium",
    "question": "A crate rests on a horizontal floor with coefficient of static friction 0.40. Its weight is 200 N. A horizontal pull is increased slowly from zero. The largest pull for which the crate can still remain at rest is:",
    "options": [
      "120 N",
      "200 N",
      "80 N",
      "50 N"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The maximum static friction is mu_s N = 0.40 \u00d7 200 = 80 N. Static friction can balance the pull only up to this value.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-004",
    "section": "Physics",
    "topic": "Work, energy and power",
    "difficulty": "medium",
    "question": "A spring of force constant 250 N/m is compressed by 8.0 cm and launches a 0.50 kg slider on a frictionless track. The slider\u2019s speed when the spring reaches its natural length is closest to:",
    "options": [
      "2.53 m/s",
      "0.80 m/s",
      "3.20 m/s",
      "1.79 m/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Conservation of energy gives (1/2)kx^2 = (1/2)mv^2. Thus v = x sqrt(k/m) = 0.08 sqrt(250/0.50) \u2248 1.79 m/s.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-005",
    "section": "Physics",
    "topic": "Rotational motion",
    "difficulty": "medium",
    "question": "A uniform disc and a thin ring have the same mass and radius. If equal torques act on them about their central axes, the ratio of the disc\u2019s angular acceleration to the ring\u2019s angular acceleration is:",
    "options": [
      "1 : 1",
      "4 : 1",
      "2 : 1",
      "1 : 2"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a disc I = (1/2)MR^2; for a ring I = MR^2. Since alpha = tau/I, alpha_disc/alpha_ring = I_ring/I_disc = 2.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-006",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "A small satellite is moved from a circular orbit of radius R to another circular orbit of radius 4R around the same planet. Its orbital speed becomes:",
    "options": [
      "one-half of its original value",
      "one-fourth of its original value",
      "four times its original value",
      "twice its original value"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a circular orbit v = sqrt(GM/r). Increasing r from R to 4R multiplies v by 1/sqrt(4) = 1/2.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-007",
    "section": "Physics",
    "topic": "Properties of bulk matter - fluids",
    "difficulty": "hard",
    "question": "Water flows steadily through a horizontal pipe. At one section the cross-sectional area is 4.0 cm^2 and the speed is 2.0 m/s; at a narrower section the area is 1.0 cm^2. Neglecting viscosity, the pressure at the wider section exceeds that at the narrow section by:",
    "options": [
      "30 kPa",
      "15 kPa",
      "60 kPa",
      "6 kPa"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Continuity gives v2 = (A1/A2)v1 = 8 m/s. Bernoulli at equal height gives P1-P2 = (1/2)rho(v2^2-v1^2) = 0.5\u00d71000\u00d7(64-4) = 30000 Pa = 30 kPa.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-008",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "easy",
    "question": "An ideal Carnot engine operates between reservoirs at 500 K and 300 K. Its maximum possible efficiency is:",
    "options": [
      "80%",
      "40%",
      "60%",
      "20%"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Carnot efficiency is 1 - Tc/Th = 1 - 300/500 = 0.40, or 40%.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-009",
    "section": "Physics",
    "topic": "Kinetic theory of gases",
    "difficulty": "medium",
    "question": "For the same ideal gas, the absolute temperature is raised from 300 K to 675 K. The ratio of the new rms molecular speed to the old rms speed is:",
    "options": [
      "2.25",
      "1.5",
      "2.0",
      "1.25"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a fixed gas, v_rms is proportional to sqrt(T). The ratio is sqrt(675/300) = sqrt(2.25) = 1.5.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-010",
    "section": "Physics",
    "topic": "Oscillations",
    "difficulty": "medium",
    "question": "In simple harmonic motion with amplitude A, the kinetic energy equals the potential energy when the displacement magnitude is:",
    "options": [
      "A/4",
      "sqrt(3)A/2",
      "A/2",
      "A/sqrt(2)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Total energy is (1/2)kA^2 and potential energy is (1/2)kx^2. Equality K=U means U is half the total: x^2=A^2/2, so |x|=A/sqrt(2).",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-011",
    "section": "Physics",
    "topic": "Waves",
    "difficulty": "medium",
    "question": "A string fixed at both ends is 1.20 m long. If transverse waves travel along it at 240 m/s, the frequency of its third harmonic is:",
    "options": [
      "100 Hz",
      "300 Hz",
      "200 Hz",
      "600 Hz"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The fundamental frequency is v/(2L)=240/(2.4)=100 Hz. The third harmonic is 3\u00d7100=300 Hz.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-012",
    "section": "Physics",
    "topic": "Electrostatics - capacitance",
    "difficulty": "hard",
    "question": "A charged parallel-plate capacitor is disconnected from its battery. A dielectric of constant 3 is then inserted fully between the plates. The stored electrostatic energy becomes:",
    "options": [
      "unchanged",
      "one-third of its initial value",
      "three times its initial value",
      "one-ninth of its initial value"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "With the battery disconnected, charge Q remains constant. Inserting the dielectric makes C three times larger. Since U=Q^2/(2C), the energy becomes one-third.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-013",
    "section": "Physics",
    "topic": "Current electricity",
    "difficulty": "medium",
    "question": "Two resistors, 6 ohm and 3 ohm, are connected in parallel and the combination is placed in series with a 4 ohm resistor across a 12 V source. The current through the 3 ohm resistor is:",
    "options": [
      "4/3 A",
      "2 A",
      "8/3 A",
      "2/3 A"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The parallel equivalent is 2 ohm, so total resistance is 6 ohm and source current is 2 A. The parallel branch voltage is 2 A \u00d7 2 ohm = 4 V, giving 4/3 A through 3 ohm.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-014",
    "section": "Physics",
    "topic": "Magnetic effects of current",
    "difficulty": "medium",
    "question": "A proton enters a uniform magnetic field perpendicular to the field with speed v. If its speed is doubled while the field is unchanged, the radius of its circular path becomes:",
    "options": [
      "half as large",
      "four times as large",
      "twice as large",
      "unchanged"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For perpendicular motion in a magnetic field, r = mv/(qB). With m, q and B fixed, doubling v doubles r.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-015",
    "section": "Physics",
    "topic": "Moving coil galvanometer",
    "difficulty": "hard",
    "question": "A galvanometer of resistance 90 ohm gives full-scale deflection at 1 mA. What shunt resistance is needed to convert it into a 10 mA ammeter?",
    "options": [
      "9 ohm",
      "90 ohm",
      "10 ohm",
      "900 ohm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At full scale, 1 mA flows through the galvanometer and 9 mA through the shunt. Equal voltage gives (0.001)(90) = (0.009)Rs, hence Rs = 10 ohm.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-016",
    "section": "Physics",
    "topic": "Electromagnetic waves",
    "difficulty": "easy",
    "question": "A remote-control transmitter commonly uses radiation with wavelength longer than visible red light but shorter than microwaves. This radiation lies in the:",
    "options": [
      "ultraviolet region",
      "X-ray region",
      "gamma-ray region",
      "infrared region"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Infrared radiation lies just beyond red in the electromagnetic spectrum, with wavelengths longer than visible light and shorter than microwaves.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-017",
    "section": "Physics",
    "topic": "Ray optics",
    "difficulty": "medium",
    "question": "Two thin lenses of powers +5 D and -2 D are kept in contact. The focal length of the combination is:",
    "options": [
      "-33.3 cm",
      "20 cm",
      "about 33.3 cm",
      "50 cm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "P_total = +5 - 2 = +3 D. Therefore f = 1/P = 1/3 m = 0.333 m, about 33.3 cm.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-018",
    "section": "Physics",
    "topic": "Wave optics",
    "difficulty": "medium",
    "question": "In an interference experiment, the slit separation is increased by 25% while wavelength and screen distance remain unchanged. The fringe width becomes:",
    "options": [
      "75% of its original value",
      "125% of its original value",
      "unchanged",
      "80% of its original value"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Fringe width beta = lambda D/d. Replacing d by 1.25d gives beta_new = beta/1.25 = 0.8 beta.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-019",
    "section": "Physics",
    "topic": "Dual nature of matter and radiation",
    "difficulty": "medium",
    "question": "Light of photon energy 3.2 eV falls on a metal whose work function is 2.0 eV. The stopping potential is:",
    "options": [
      "1.2 V",
      "2.0 V",
      "3.2 V",
      "0.625 V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The maximum photoelectron kinetic energy is 3.2-2.0 = 1.2 eV. Since eV_s = K_max, the stopping potential is 1.2 V.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-020",
    "section": "Physics",
    "topic": "Atoms and nuclei",
    "difficulty": "medium",
    "question": "A radioactive tracer has a half-life of 6 h. If its activity is initially 640 counts/s, what activity is expected after 18 h?",
    "options": [
      "320 counts/s",
      "40 counts/s",
      "160 counts/s",
      "80 counts/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Eighteen hours is three half-lives. Activity is proportional to the number of undecayed nuclei, so it becomes 640(1/2)^3 = 80 counts/s.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-021",
    "section": "Physics",
    "topic": "Electronic devices",
    "difficulty": "easy",
    "question": "In a p-n junction diode under forward bias, the depletion region typically:",
    "options": [
      "widens while the junction resistance decreases",
      "narrows and the junction resistance decreases",
      "widens and the junction resistance increases",
      "remains unchanged in width"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Forward bias reduces the junction barrier potential, narrows the depletion layer, and allows much larger current, so the effective junction resistance falls.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-022",
    "section": "Physics",
    "topic": "Electromagnetic induction",
    "difficulty": "medium",
    "question": "The magnetic flux through each turn of a 50-turn coil changes uniformly from 8 mWb to 2 mWb in 0.020 s. The magnitude of the induced emf is:",
    "options": [
      "15 V",
      "3 V",
      "30 V",
      "150 V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Faraday\u2019s law gives |E| = N|Delta Phi|/Delta t = 50\u00d7(6\u00d710^-3)/0.020 = 15 V.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-023",
    "section": "Physics",
    "topic": "Alternating current",
    "difficulty": "hard",
    "question": "A series AC circuit has resistance 30 ohm and net reactance 40 ohm. If the rms applied voltage is 100 V, the rms current is:",
    "options": [
      "2.5 A",
      "2.0 A",
      "3.33 A",
      "4.0 A"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The impedance magnitude is sqrt(30^2+40^2)=50 ohm. Therefore I_rms=V_rms/Z=100/50=2.0 A.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-024",
    "section": "Physics",
    "topic": "Electrostatics - electric field",
    "difficulty": "medium",
    "question": "At a point on the axial line of an electric dipole far from the dipole, the distance from the dipole centre is doubled. The electric field magnitude becomes approximately:",
    "options": [
      "one-half of its original value",
      "one-sixteenth of its original value",
      "one-fourth of its original value",
      "one-eighth of its original value"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "In the far-field approximation, the axial electric field of a dipole varies as 1/r^3. Doubling r reduces the field by 2^3=8.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  },
  {
    "id": "chandigarh-cucet-2026-ph-025",
    "section": "Physics",
    "topic": "Current electricity - potentiometer",
    "difficulty": "medium",
    "question": "A potentiometer wire has a potential gradient of 2.5 mV/cm. A cell balances at 64 cm. The emf of the cell is:",
    "options": [
      "0.025 V",
      "0.400 V",
      "0.160 V",
      "1.60 V"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At balance, E = k l = 2.5 mV/cm \u00d7 64 cm = 160 mV = 0.160 V.",
    "source": {
      "kind": "original",
      "reference": "CUCET 2026 official 10+2 Non-Medical question-paper pattern and syllabus",
      "url": "https://cucet.cuchd.in/question-paper.php?L_mx_Visit_Source=www.cuchd.in%2F",
      "checkedOn": "2026-08-27"
    }
  }
];
