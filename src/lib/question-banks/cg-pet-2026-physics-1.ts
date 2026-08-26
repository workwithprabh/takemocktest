import type { Question } from '../questions';

export const CG_PET_2026_PHYSICS_1: Question[] = [
  {
    "id": "cg-pet-2026-ph-001",
    "section": "Physics",
    "topic": "Units and dimensions",
    "difficulty": "easy",
    "question": "A quantity X is defined by X = force \u00d7 speed / power. What is the dimension of X?",
    "options": [
      "[L T^-1]",
      "Dimensionless",
      "[M L T^-2]",
      "[T^-1]"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Force \u00d7 speed has dimension (M L T^-2)(L T^-1)=M L^2 T^-3, the same as power, so X is dimensionless.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-002",
    "section": "Physics",
    "topic": "Measurement and errors",
    "difficulty": "medium",
    "question": "The radius of a sphere is measured with a 2% uncertainty. Neglecting all other errors, the percentage uncertainty in its volume is",
    "options": [
      "2%",
      "4%",
      "6%",
      "8%"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Since V is proportional to r^3, the fractional error in V is approximately 3 times that in r: 3\u00d72%=6%.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-003",
    "section": "Physics",
    "topic": "Kinematics",
    "difficulty": "easy",
    "question": "A cyclist travels 18 km at 12 km/h and the next 18 km at 18 km/h. The average speed for the whole trip is",
    "options": [
      "15 km/h",
      "14.4 km/h",
      "13.5 km/h",
      "16 km/h"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Total distance is 36 km. Total time is 18/12 + 18/18 = 2.5 h, so average speed = 36/2.5 = 14.4 km/h.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-004",
    "section": "Physics",
    "topic": "Projectile motion",
    "difficulty": "medium",
    "question": "A projectile is launched with speed 20 m/s at 30\u00b0 above horizontal. Take g = 10 m/s\u00b2. Its maximum height is",
    "options": [
      "5 m",
      "15 m",
      "20 m",
      "10 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Vertical component is 20 sin30\u00b0=10 m/s. H=u_y^2/(2g)=100/20=5 m.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-005",
    "section": "Physics",
    "topic": "Laws of motion",
    "difficulty": "easy",
    "question": "A 60 kg person stands on a scale in a lift accelerating upward at 2 m/s\u00b2. Take g = 10 m/s\u00b2. The scale reads",
    "options": [
      "840 N",
      "480 N",
      "600 N",
      "720 N"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Normal reaction N=m(g+a)=60(10+2)=720 N.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-006",
    "section": "Physics",
    "topic": "Friction",
    "difficulty": "medium",
    "question": "A 4 kg block on a horizontal rough surface has coefficient of kinetic friction 0.25. A horizontal force of 18 N keeps it moving. Take g=10 m/s\u00b2. Its acceleration is",
    "options": [
      "0.5 m/s\u00b2",
      "2.5 m/s\u00b2",
      "1 m/s\u00b2",
      "2 m/s\u00b2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Kinetic friction is \u03bcmg=0.25\u00d74\u00d710=10 N. Net force=8 N, hence a=8/4=2 m/s\u00b2.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-007",
    "section": "Physics",
    "topic": "Work, energy and power",
    "difficulty": "medium",
    "question": "A spring of force constant 200 N/m is compressed by 10 cm and then released. The elastic potential energy stored is",
    "options": [
      "1 J",
      "2 J",
      "0.5 J",
      "10 J"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "U=(1/2)kx^2=(1/2)(200)(0.10)^2=1 J.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-008",
    "section": "Physics",
    "topic": "Power",
    "difficulty": "easy",
    "question": "A motor lifts a 200 kg load vertically through 6 m in 12 s at constant speed. Take g=10 m/s\u00b2. Its useful power is",
    "options": [
      "1000 W",
      "1200 W",
      "2000 W",
      "600 W"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Power=mgh/t=(200\u00d710\u00d76)/12=1000 W.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-009",
    "section": "Physics",
    "topic": "Linear momentum",
    "difficulty": "medium",
    "question": "A 2 kg cart moving at 6 m/s collides perfectly inelastically with a 4 kg cart at rest. Their common speed just after collision is",
    "options": [
      "4 m/s",
      "1 m/s",
      "3 m/s",
      "2 m/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Momentum conservation gives v=(2\u00d76)/(2+4)=2 m/s.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-010",
    "section": "Physics",
    "topic": "Rotational motion",
    "difficulty": "medium",
    "question": "A uniform disc of mass 2 kg and radius 0.5 m rotates about its central axis at 8 rad/s. Its angular momentum is",
    "options": [
      "1 kg m\u00b2/s",
      "8 kg m\u00b2/s",
      "4 kg m\u00b2/s",
      "2 kg m\u00b2/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a disc, I=MR\u00b2/2=2\u00d70.25/2=0.25 kg m\u00b2. Thus L=I\u03c9=0.25\u00d78=2 kg m\u00b2/s.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-011",
    "section": "Physics",
    "topic": "Rolling motion",
    "difficulty": "hard",
    "question": "A solid cylinder rolls without slipping down from rest through a vertical height h. Its speed at the bottom is",
    "options": [
      "sqrt(gh)",
      "sqrt(4gh/3)",
      "sqrt(2gh)",
      "sqrt(gh/2)"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "mgh=(1/2)mv\u00b2+(1/2)(MR\u00b2/2)(v\u00b2/R\u00b2)=(3/4)mv\u00b2, so v\u00b2=4gh/3.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-012",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "A satellite moves in a circular orbit of radius 4R around a planet of radius R. If g is the gravitational acceleration at the surface, its orbital speed is",
    "options": [
      "sqrt(gR)",
      "2sqrt(gR)",
      "sqrt(gR)/2",
      "sqrt(gR/2)"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "GM=gR\u00b2. Orbital speed at r=4R is sqrt(GM/r)=sqrt(gR\u00b2/4R)=sqrt(gR)/2.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-013",
    "section": "Physics",
    "topic": "Gravitation",
    "difficulty": "medium",
    "question": "The escape speed from a planet is 12 km/s. The speed needed for a circular orbit just above its surface is",
    "options": [
      "6 km/s",
      "6sqrt(2) km/s",
      "12sqrt(2) km/s",
      "3sqrt(2) km/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Escape speed is sqrt(2) times the near-surface circular speed, so v_c=12/sqrt(2)=6sqrt(2) km/s.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-014",
    "section": "Physics",
    "topic": "Elasticity",
    "difficulty": "medium",
    "question": "A wire of length 2 m and cross-sectional area 1 mm\u00b2 extends by 1 mm under a force of 100 N. Young modulus of the material is",
    "options": [
      "1\u00d710^11 Pa",
      "5\u00d710^10 Pa",
      "2\u00d710^11 Pa",
      "2\u00d710^10 Pa"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Y=(F/A)/(\u0394L/L)=FL/(A\u0394L)=100\u00d72/(10^-6\u00d710^-3)=2\u00d710^11 Pa.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-015",
    "section": "Physics",
    "topic": "Fluid mechanics",
    "difficulty": "easy",
    "question": "Water flows through a pipe whose cross-sectional area decreases from 6 cm\u00b2 to 2 cm\u00b2. If the speed in the wider part is 1.5 m/s, the speed in the narrower part is",
    "options": [
      "0.5 m/s",
      "4.5 m/s",
      "3 m/s",
      "6 m/s"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For incompressible steady flow, A1v1=A2v2, so v2=(6/2)\u00d71.5=4.5 m/s.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-016",
    "section": "Physics",
    "topic": "Surface tension",
    "difficulty": "medium",
    "question": "The excess pressure inside a soap bubble of radius r and surface tension T is",
    "options": [
      "2T/r",
      "4T/r",
      "8T/r",
      "T/r"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A soap bubble has two liquid surfaces, hence excess pressure \u0394P=4T/r.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-017",
    "section": "Physics",
    "topic": "Calorimetry",
    "difficulty": "medium",
    "question": "A 0.2 kg metal piece at 120\u00b0C is dropped into 0.3 kg water at 20\u00b0C. The final temperature is 30\u00b0C. Taking c_water=4200 J kg^-1 K^-1 and neglecting losses, the specific heat of the metal is",
    "options": [
      "1050 J kg^-1 K^-1",
      "350 J kg^-1 K^-1",
      "700 J kg^-1 K^-1",
      "1400 J kg^-1 K^-1"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Heat lost by metal = heat gained by water: 0.2 c(120-30)=0.3\u00d74200\u00d710. Thus c=12600/18=700 J kg^-1 K^-1.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-018",
    "section": "Physics",
    "topic": "Kinetic theory",
    "difficulty": "easy",
    "question": "For a fixed mass of an ideal gas, the rms molecular speed becomes twice its original value when the absolute temperature becomes",
    "options": [
      "4 times",
      "2 times",
      "8 times",
      "16 times"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "v_rms is proportional to sqrt(T). Doubling v_rms requires T to increase by a factor 4.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-019",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "A gas absorbs 500 J of heat and does 180 J of work on the surroundings. The increase in its internal energy is",
    "options": [
      "680 J",
      "320 J",
      "180 J",
      "500 J"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Using \u0394U=Q-W with work done by the gas positive: \u0394U=500-180=320 J.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-020",
    "section": "Physics",
    "topic": "Thermodynamics",
    "difficulty": "medium",
    "question": "A Carnot engine operates between 500 K and 300 K. Its efficiency is",
    "options": [
      "40%",
      "60%",
      "80%",
      "20%"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "\u03b7=1-T_c/T_h=1-300/500=0.40=40%.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-021",
    "section": "Physics",
    "topic": "Simple harmonic motion",
    "difficulty": "easy",
    "question": "A particle executes SHM with angular frequency 5 rad/s. Its time period is",
    "options": [
      "5pi s",
      "5/(2pi) s",
      "pi/5 s",
      "2pi/5 s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For SHM, T=2\u03c0/\u03c9=2\u03c0/5 s.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-022",
    "section": "Physics",
    "topic": "Simple harmonic motion",
    "difficulty": "medium",
    "question": "A 0.5 kg mass executes SHM with amplitude 0.20 m and angular frequency 4 rad/s. Its total mechanical energy is",
    "options": [
      "0.08 J",
      "0.32 J",
      "0.16 J",
      "0.40 J"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "E=(1/2)m\u03c9\u00b2A\u00b2=(1/2)(0.5)(16)(0.04)=0.16 J.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-023",
    "section": "Physics",
    "topic": "Waves on strings",
    "difficulty": "medium",
    "question": "A stretched string of length 1.2 m fixed at both ends vibrates in its third harmonic. If wave speed is 120 m/s, the frequency is",
    "options": [
      "50 Hz",
      "150 Hz",
      "100 Hz",
      "300 Hz"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For fixed ends, f_n=n v/(2L)=3\u00d7120/(2\u00d71.2)=150 Hz.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-024",
    "section": "Physics",
    "topic": "Doppler effect",
    "difficulty": "hard",
    "question": "A stationary source emits sound of frequency 600 Hz. An observer moves directly toward the source at 15 m/s. If sound speed is 330 m/s, the observed frequency is approximately",
    "options": [
      "573 Hz",
      "600 Hz",
      "627 Hz",
      "655 Hz"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a moving observer approaching a stationary source, f\u2032=f(v+v_o)/v=600\u00d7345/330\u2248627 Hz.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-025",
    "section": "Physics",
    "topic": "Stationary waves",
    "difficulty": "medium",
    "question": "A closed organ pipe has fundamental frequency 170 Hz. The next higher resonance frequency is",
    "options": [
      "340 Hz",
      "510 Hz",
      "680 Hz",
      "850 Hz"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "A closed pipe supports odd harmonics only. After the fundamental f, the next resonance is 3f=510 Hz.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-026",
    "section": "Physics",
    "topic": "Ray optics",
    "difficulty": "easy",
    "question": "An object is placed 30 cm in front of a concave mirror of focal length 15 cm. The image is formed",
    "options": [
      "15 cm behind the mirror",
      "At infinity",
      "30 cm behind the mirror",
      "30 cm in front of the mirror"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The object is at 2f, so a concave mirror forms a real inverted image at 2f, i.e. 30 cm in front.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-027",
    "section": "Physics",
    "topic": "Lenses",
    "difficulty": "hard",
    "question": "A convex lens of focal length 15 cm is followed 40 cm to its right by a concave lens of focal length 30 cm. An object is placed 30 cm to the left of the convex lens. Using the thin-lens approximation, the final image is formed",
    "options": [
      "7.5 cm to the right of the second lens",
      "7.5 cm to the left of the second lens",
      "15 cm to the left of the second lens",
      "30 cm to the right of the second lens"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For the first lens, u=-30 cm and f=+15 cm, so 1/v-1/u=1/f gives v=+30 cm. This point is 10 cm left of the second lens, so u2=-10 cm. With f2=-30 cm, 1/v2+1/10=-1/30, giving v2=-7.5 cm: 7.5 cm left of the second lens.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-028",
    "section": "Physics",
    "topic": "Prism",
    "difficulty": "medium",
    "question": "For a prism of angle 60\u00b0, the angle of minimum deviation is 30\u00b0. The refractive index of its material is",
    "options": [
      "sqrt(2)",
      "3/2",
      "2",
      "sqrt(3)/2"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At minimum deviation, n=sin[(A+\u03b4_m)/2]/sin(A/2)=sin45\u00b0/sin30\u00b0=sqrt(2).",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-029",
    "section": "Physics",
    "topic": "Wave optics",
    "difficulty": "medium",
    "question": "In Young double-slit interference, slit separation is 0.5 mm, screen distance is 2 m and wavelength is 500 nm. Fringe width is",
    "options": [
      "1 mm",
      "0.5 mm",
      "2 mm",
      "4 mm"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "\u03b2=\u03bbD/d=(500\u00d710^-9\u00d72)/(0.5\u00d710^-3)=2\u00d710^-3 m=2 mm.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-030",
    "section": "Physics",
    "topic": "Electrostatics",
    "difficulty": "easy",
    "question": "Two point charges +2 microC and +8 microC are 3 m apart in vacuum. The magnitude of force between them is (k=9\u00d710^9 SI)",
    "options": [
      "0.008 N",
      "0.032 N",
      "0.016 N",
      "0.048 N"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "F=kq1q2/r\u00b2=9\u00d710^9\u00d716\u00d710^-12/9=0.016 N.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-031",
    "section": "Physics",
    "topic": "Electric potential",
    "difficulty": "medium",
    "question": "At a point, electric potentials due to two charges are +40 V and -15 V. The net electric potential there is",
    "options": [
      "25 V",
      "-25 V",
      "55 V",
      "-55 V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Electric potential is a scalar, so potentials add algebraically: 40-15=25 V.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-032",
    "section": "Physics",
    "topic": "Capacitance",
    "difficulty": "medium",
    "question": "Capacitors 6 microF and 3 microF are connected in series across 12 V. The charge on each capacitor is",
    "options": [
      "12 microC",
      "36 microC",
      "24 microC",
      "72 microC"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Series equivalent C=(6\u00d73)/(6+3)=2 microF. Charge Q=C_eq V=2\u00d712=24 microC.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-033",
    "section": "Physics",
    "topic": "Dielectrics",
    "difficulty": "hard",
    "question": "A parallel-plate capacitor remains connected to a battery while a dielectric of relative permittivity 5 completely fills the gap. The electrostatic energy stored becomes",
    "options": [
      "unchanged",
      "1/5 of the initial value",
      "25 times the initial value",
      "5 times the initial value"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "With battery connected, V remains constant and C becomes 5C. Since U=(1/2)CV\u00b2, the energy becomes 5 times.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-034",
    "section": "Physics",
    "topic": "Current electricity",
    "difficulty": "medium",
    "question": "A cell has emf E and internal resistance r. With a 9 ohm load connected, its terminal voltage is 5.4 V. With a 4 ohm load connected, its terminal voltage is 4.8 V. The internal resistance r is",
    "options": [
      "0.5 ohm",
      "1.0 ohm",
      "1.5 ohm",
      "2.0 ohm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The currents are 5.4/9=0.6 A and 4.8/4=1.2 A. Since E=V+Ir, 5.4+0.6r=4.8+1.2r, so r=1.0 ohm.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-035",
    "section": "Physics",
    "topic": "Kirchhoff laws",
    "difficulty": "hard",
    "question": "Two cells of emfs 6 V and 3 V with internal resistances 1 ohm each are connected in parallel with like terminals together. The combination is connected to a 4 ohm external resistor. The current through the 4 ohm resistor is",
    "options": [
      "0.5 A",
      "1 A",
      "1.5 A",
      "2 A"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "The Thevenin emf of the parallel unequal cells is (6/1+3/1)/(1/1+1/1)=4.5 V and internal resistance is 0.5 ohm. Current=4.5/(4+0.5)=1 A.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-036",
    "section": "Physics",
    "topic": "Potentiometer",
    "difficulty": "medium",
    "question": "A potentiometer wire has potential gradient 0.02 V/cm. A cell balances at 75 cm. Its emf is",
    "options": [
      "0.75 V",
      "2.0 V",
      "1.5 V",
      "3.0 V"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At balance, E=k l=0.02\u00d775=1.5 V.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-037",
    "section": "Physics",
    "topic": "Magnetic force",
    "difficulty": "easy",
    "question": "A charge of 2 microC moves at 3\u00d710^6 m/s perpendicular to a magnetic field of 0.5 T. The magnetic force is",
    "options": [
      "6 N",
      "0.3 N",
      "1.5 N",
      "3 N"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "F=qvB=2\u00d710^-6\u00d73\u00d710^6\u00d70.5=3 N.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-038",
    "section": "Physics",
    "topic": "Magnetic field of current",
    "difficulty": "medium",
    "question": "The magnetic field at the centre of a circular loop of radius 0.20 m carrying 4 A is (mu0=4pi\u00d710^-7 SI)",
    "options": [
      "4pi\u00d710^-6 T",
      "2pi\u00d710^-6 T",
      "8pi\u00d710^-6 T",
      "16pi\u00d710^-6 T"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For one loop, B=mu0 I/(2R)=4\u03c0\u00d710^-7\u00d74/0.4=4\u03c0\u00d710^-6 T.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-039",
    "section": "Physics",
    "topic": "Moving coil galvanometer",
    "difficulty": "hard",
    "question": "A galvanometer of resistance 100 ohm gives full-scale deflection at 1 mA. The shunt required to convert it into a 1 A ammeter is approximately",
    "options": [
      "1.0 ohm",
      "0.10 ohm",
      "10 ohm",
      "100 ohm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At full scale, voltage across galvanometer is 0.001\u00d7100=0.1 V. Shunt current is 0.999 A, so S=0.1/0.999\u22480.10 ohm.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-040",
    "section": "Physics",
    "topic": "Electromagnetic induction",
    "difficulty": "medium",
    "question": "A straight conductor of length 0.5 m moves at 8 m/s perpendicular to a 0.25 T magnetic field. The motional emf across its ends is",
    "options": [
      "1 V",
      "2 V",
      "4 V",
      "0.5 V"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Motional emf is Blv=0.25\u00d70.5\u00d78=1 V.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-041",
    "section": "Physics",
    "topic": "Self inductance",
    "difficulty": "medium",
    "question": "The current in a 2 H inductor changes uniformly from 1 A to 5 A in 0.20 s. The magnitude of induced emf is",
    "options": [
      "80 V",
      "20 V",
      "10 V",
      "40 V"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "|e|=L|di/dt|=2\u00d7(4/0.20)=40 V.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-042",
    "section": "Physics",
    "topic": "Alternating current",
    "difficulty": "easy",
    "question": "The rms value of a sinusoidal current whose peak value is 10 A is",
    "options": [
      "10sqrt(2) A",
      "5 A",
      "5sqrt(2) A",
      "10 A"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For a sinusoidal current, I_rms=I_0/sqrt(2)=10/sqrt(2)=5sqrt(2) A.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-043",
    "section": "Physics",
    "topic": "AC circuits",
    "difficulty": "hard",
    "question": "A series RLC circuit at resonance is connected to a 100 V rms supply. If R=20 ohm, the rms current is",
    "options": [
      "2 A",
      "10 A",
      "20 A",
      "5 A"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "At resonance, inductive and capacitive reactances cancel, so impedance equals R. I=V/R=100/20=5 A.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-044",
    "section": "Physics",
    "topic": "Photoelectric effect",
    "difficulty": "medium",
    "question": "Light of photon energy 4.5 eV falls on a metal of work function 2.0 eV. The maximum kinetic energy of emitted photoelectrons is",
    "options": [
      "2.5 eV",
      "4.5 eV",
      "6.5 eV",
      "2.0 eV"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Einstein photoelectric equation gives K_max=E_photon-phi=4.5-2.0=2.5 eV.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-045",
    "section": "Physics",
    "topic": "Bohr model",
    "difficulty": "medium",
    "question": "In the Bohr model of hydrogen, the radius of the nth orbit is proportional to",
    "options": [
      "1/n^2",
      "n",
      "1/n",
      "n^2"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "For hydrogen, r_n=a_0 n\u00b2, so orbital radius varies as n\u00b2.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-046",
    "section": "Physics",
    "topic": "Radioactivity",
    "difficulty": "medium",
    "question": "A radioactive sample has half-life 6 h. The fraction of the original nuclei left after 18 h is",
    "options": [
      "1/2",
      "1/16",
      "1/4",
      "1/8"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "18 h corresponds to three half-lives, so the remaining fraction is (1/2)^3=1/8.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-047",
    "section": "Physics",
    "topic": "Semiconductors",
    "difficulty": "easy",
    "question": "When a pure semiconductor is doped with a pentavalent impurity, the majority charge carriers are",
    "options": [
      "Electrons",
      "Protons",
      "Holes",
      "Ions only"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Pentavalent donor atoms contribute extra electrons, producing an n-type semiconductor with electrons as majority carriers.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-048",
    "section": "Physics",
    "topic": "Semiconductor diode",
    "difficulty": "medium",
    "question": "An ideal diode is connected in series with a 1 kOhm resistor and a 5 V source in forward bias. The circuit current is",
    "options": [
      "5 mA",
      "0.5 mA",
      "50 mA",
      "0 mA"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "An ideal forward-biased diode has zero voltage drop, so I=V/R=5/1000=5 mA.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-049",
    "section": "Physics",
    "topic": "Heating effect of current",
    "difficulty": "easy",
    "question": "A 100 W heater operates for 5 minutes. The electrical energy converted to heat is",
    "options": [
      "50 kJ",
      "5 kJ",
      "20 kJ",
      "30 kJ"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Energy=Pt=100\u00d7(5\u00d760)=30000 J=30 kJ.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  },
  {
    "id": "cg-pet-2026-ph-050",
    "section": "Physics",
    "topic": "Electric power",
    "difficulty": "medium",
    "question": "Two bulbs rated 60 W, 240 V and 100 W, 240 V are connected in series across 240 V. Which bulb dissipates more power?",
    "options": [
      "The 100 W bulb",
      "Neither dissipates power",
      "Both dissipate equal power",
      "The 60 W bulb"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 1,
    "negativeMarking": 0,
    "explanation": "Rated resistance R=V\u00b2/P, so the 60 W bulb has larger resistance. In series the current is the same, and P=I\u00b2R, so the 60 W bulb dissipates more power.",
    "source": {
      "kind": "original",
      "reference": "CG PET 2026 official syllabus",
      "url": "https://vyapamcg.cgstate.gov.in/uploads/pdfs/7d31de1c-ace8-4e49-ba1e-a20cc230039e.pdf",
      "checkedOn": "2026-08-24"
    }
  }
];
