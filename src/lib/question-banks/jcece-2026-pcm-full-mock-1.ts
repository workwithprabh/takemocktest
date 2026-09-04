import type { Question } from '../questions';

export const JCECE_2026_PCM_FULL_MOCK_1: Question[] = [
    {
      "id": "jcece-2026-pcm-physics-001",
      "section": "Physics",
      "topic": "Units and dimensions",
      "difficulty": "easy",
      "question": "Which expression is dimensionless when v is speed, g is acceleration due to gravity and r is length?",
      "options": [
        "vr/g",
        "vg/r",
        "gr/v",
        "v²/(gr)"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Since [v²]=L²T⁻² and [gr]=L²T⁻², their ratio is dimensionless.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-002",
      "section": "Physics",
      "topic": "Measurement errors",
      "difficulty": "medium",
      "question": "A measured quantity Q is calculated as Q = ab²/c. If the percentage uncertainties in a, b and c are 1%, 2% and 3%, the maximum percentage uncertainty in Q is:",
      "options": [
        "6%",
        "8%",
        "7%",
        "9%"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "For products and powers, maximum fractional uncertainties add: 1 + 2×2 + 3 = 8%.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-003",
      "section": "Physics",
      "topic": "Kinematics",
      "difficulty": "easy",
      "question": "The position of a particle is x = 4t² + 2t − 1 metres. What is its speed at t = 3 s?",
      "options": [
        "18 m/s",
        "22 m/s",
        "30 m/s",
        "26 m/s"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "v = dx/dt = 8t + 2, so at 3 s the speed is 26 m/s.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-004",
      "section": "Physics",
      "topic": "Projectile motion",
      "difficulty": "medium",
      "question": "A projectile is launched at 20 m/s at 30° above horizontal. Taking g = 10 m/s², its horizontal range is:",
      "options": [
        "10√3 m",
        "20 m",
        "40 m",
        "20√3 m"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "R=u² sin(2θ)/g=400 sin60°/10=20√3 m.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-005",
      "section": "Physics",
      "topic": "Relative motion",
      "difficulty": "medium",
      "question": "A cyclist moves east at 8 m/s while a steady wind-driven cart moves north at 6 m/s. The cyclist’s velocity relative to the cart has magnitude:",
      "options": [
        "10 m/s",
        "2 m/s",
        "7 m/s",
        "14 m/s"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Relative velocity components are 8 east and 6 south; magnitude √(8²+6²)=10 m/s.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-006",
      "section": "Physics",
      "topic": "Laws of motion",
      "difficulty": "easy",
      "question": "A 60 kg person stands in a lift accelerating upward at 2 m/s². Taking g = 10 m/s², the normal reaction on the person is:",
      "options": [
        "480 N",
        "600 N",
        "840 N",
        "720 N"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "N=m(g+a)=60×12=720 N.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-007",
      "section": "Physics",
      "topic": "Friction",
      "difficulty": "medium",
      "question": "A 5 kg block rests on a horizontal surface with coefficient of static friction 0.4. Taking g=10 m/s², the largest horizontal force that can be applied without motion is:",
      "options": [
        "10 N",
        "25 N",
        "20 N",
        "50 N"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Maximum static friction is μsN=0.4×5×10=20 N.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-008",
      "section": "Physics",
      "topic": "Circular motion",
      "difficulty": "medium",
      "question": "A car moves on a level circular road of radius 50 m at 10 m/s. Its centripetal acceleration is:",
      "options": [
        "2 m/s²",
        "0.5 m/s²",
        "5 m/s²",
        "20 m/s²"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "a=v²/r=100/50=2 m/s².",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-009",
      "section": "Physics",
      "topic": "Work, energy and power",
      "difficulty": "medium",
      "question": "A spring of force constant 200 N/m is compressed by 0.10 m. The elastic potential energy stored is:",
      "options": [
        "0.5 J",
        "2 J",
        "1 J",
        "10 J"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "U=½kx²=½×200×0.01=1 J.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-010",
      "section": "Physics",
      "topic": "Power",
      "difficulty": "easy",
      "question": "A motor does 18 kJ of useful work in 30 s. Its average useful power is:",
      "options": [
        "60 W",
        "300 W",
        "900 W",
        "600 W"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "P=W/t=18000/30=600 W.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-011",
      "section": "Physics",
      "topic": "Centre of mass",
      "difficulty": "medium",
      "question": "Masses 2 kg and 3 kg are placed at x=0 m and x=5 m respectively. The x-coordinate of their centre of mass is:",
      "options": [
        "3 m",
        "2 m",
        "2.5 m",
        "4 m"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "x_cm=(2×0+3×5)/(2+3)=3 m.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-012",
      "section": "Physics",
      "topic": "Rotational dynamics",
      "difficulty": "medium",
      "question": "A perpendicular force of 12 N is applied 0.25 m from a fixed axis. The torque magnitude is:",
      "options": [
        "0.48 N·m",
        "3 N·m",
        "12.25 N·m",
        "48 N·m"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "τ=rF=0.25×12=3 N·m.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-013",
      "section": "Physics",
      "topic": "Angular impulse",
      "difficulty": "medium",
      "question": "A laboratory rotor initially has angular momentum 18 kg·m²/s. A braking torque of 3 N·m acts opposite the rotation for 4 s. Its final angular momentum magnitude is:",
      "options": [
        "12 kg·m²/s",
        "6 kg·m²/s",
        "15 kg·m²/s",
        "30 kg·m²/s"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Angular impulse is τΔt=3×4=12 kg·m²/s opposite the initial angular momentum, so the final magnitude is 18−12=6 kg·m²/s.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-014",
      "section": "Physics",
      "topic": "Gravitation",
      "difficulty": "medium",
      "question": "Two satellites orbit the same planet in circular paths of radii R and 4R. The ratio of their orbital speeds v(R):v(4R) is:",
      "options": [
        "2:1",
        "1:2",
        "1:4",
        "4:1"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Orbital speed varies as r⁻¹ᐟ², giving √(4R/R)=2.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-015",
      "section": "Physics",
      "topic": "Escape speed",
      "difficulty": "easy",
      "question": "For a planet of mass M and radius R, escape speed from the surface is:",
      "options": [
        "√(GM/R)",
        "2GM/R",
        "GM/(2R)",
        "√(2GM/R)"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Equating initial kinetic energy to the gravitational binding energy gives v_e=√(2GM/R).",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-016",
      "section": "Physics",
      "topic": "Fluid mechanics",
      "difficulty": "easy",
      "question": "Water flows steadily through a pipe whose cross-sectional area narrows from 12 cm² to 4 cm². If the speed in the wider part is 1.5 m/s, the speed in the narrow part is:",
      "options": [
        "0.5 m/s",
        "3.0 m/s",
        "6.0 m/s",
        "4.5 m/s"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Continuity gives A₁v₁=A₂v₂, so v₂=(12/4)×1.5=4.5 m/s.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-017",
      "section": "Physics",
      "topic": "Bernoulli principle",
      "difficulty": "medium",
      "question": "In a horizontal ideal-fluid streamline, the speed increases while density is constant. What happens to static pressure?",
      "options": [
        "It increases",
        "It remains unchanged",
        "It decreases",
        "It must become zero"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "For constant height, P + ½ρv² is constant, so higher speed means lower pressure.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-018",
      "section": "Physics",
      "topic": "Surface tension",
      "difficulty": "medium",
      "question": "For a liquid that wets glass, reducing the radius of a capillary tube while other factors stay fixed causes the capillary rise to:",
      "options": [
        "decrease in proportion to radius",
        "remain unchanged",
        "increase in proportion to radius squared",
        "increase inversely with radius"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Capillary rise h=2T cosθ/(ρgr), so h∝1/r.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-019",
      "section": "Physics",
      "topic": "Thermal expansion",
      "difficulty": "easy",
      "question": "A metal rod of length 2.0 m has linear expansion coefficient 1.2×10⁻⁵ K⁻¹. For a temperature rise of 50 K, the increase in length is:",
      "options": [
        "0.12 mm",
        "2.4 mm",
        "1.2 mm",
        "12 mm"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "ΔL=αLΔT=1.2×10⁻⁵×2×50=1.2×10⁻³ m=1.2 mm.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-020",
      "section": "Physics",
      "topic": "Calorimetry",
      "difficulty": "medium",
      "question": "Equal masses of the same liquid at 20°C and 60°C are mixed in an insulated vessel. Neglecting heat capacity of the vessel, the final temperature is:",
      "options": [
        "30°C",
        "40°C",
        "45°C",
        "50°C"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "With equal masses and specific heats, the equilibrium temperature is the arithmetic mean, 40°C.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-021",
      "section": "Physics",
      "topic": "Thermodynamics",
      "difficulty": "medium",
      "question": "A gas absorbs 500 J of heat and does 180 J of work on its surroundings. Its increase in internal energy is:",
      "options": [
        "180 J",
        "500 J",
        "320 J",
        "680 J"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Using ΔU=Q−W, ΔU=500−180=320 J.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-022",
      "section": "Physics",
      "topic": "Kinetic theory",
      "difficulty": "medium",
      "question": "At what temperature would the rms speed of an ideal gas be twice its value at 300 K?",
      "options": [
        "1200 K",
        "600 K",
        "900 K",
        "1500 K"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "v_rms∝√T; doubling speed requires four times the absolute temperature.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-023",
      "section": "Physics",
      "topic": "Simple harmonic motion",
      "difficulty": "easy",
      "question": "A 0.50 kg mass is attached to a spring of constant 200 N/m. Its SHM angular frequency is:",
      "options": [
        "20 rad/s",
        "10 rad/s",
        "14.1 rad/s",
        "40 rad/s"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "ω=√(k/m)=√(200/0.5)=√400=20 rad/s.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-024",
      "section": "Physics",
      "topic": "Simple pendulum",
      "difficulty": "easy",
      "question": "A simple pendulum has period T. If its length is made four times as large at the same place, its new period is:",
      "options": [
        "T/2",
        "2T",
        "4T",
        "T"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "T∝√L, so quadrupling L doubles the period.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-025",
      "section": "Physics",
      "topic": "Waves on a string",
      "difficulty": "medium",
      "question": "A stretched string has tension 80 N and linear mass density 0.20 kg/m. The wave speed is:",
      "options": [
        "10 m/s",
        "40 m/s",
        "20 m/s",
        "400 m/s"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "v=√(T/μ)=√(80/0.20)=√400=20 m/s.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-026",
      "section": "Physics",
      "topic": "Sound and beats",
      "difficulty": "medium",
      "question": "Two tuning forks produce frequencies 256 Hz and 262 Hz together. The beat frequency is:",
      "options": [
        "6 Hz",
        "3 Hz",
        "256 Hz",
        "518 Hz"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Beat frequency equals the absolute difference, 262−256=6 Hz.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-027",
      "section": "Physics",
      "topic": "Electrostatics",
      "difficulty": "easy",
      "question": "The electric field magnitude 0.30 m from a point charge 2 μC in vacuum is closest to:",
      "options": [
        "2.0×10⁴ N/C",
        "6.0×10⁴ N/C",
        "6.0×10⁵ N/C",
        "2.0×10⁵ N/C"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "E=kq/r²=9×10⁹×2×10⁻⁶/0.09=2×10⁵ N/C.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-028",
      "section": "Physics",
      "topic": "Electric potential",
      "difficulty": "medium",
      "question": "Two charges +2 μC and −2 μC are at equal distances from a point P. The electric potential at P due to the pair is:",
      "options": [
        "zero",
        "positive",
        "negative",
        "infinite"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Potential is scalar and the equal, opposite contributions cancel.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-029",
      "section": "Physics",
      "topic": "Capacitance",
      "difficulty": "medium",
      "question": "Capacitors 3 μF and 6 μF are connected in series. Their equivalent capacitance is:",
      "options": [
        "3 μF",
        "4.5 μF",
        "2 μF",
        "9 μF"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "For series capacitors, C_eq=(3×6)/(3+6)=2 μF.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-030",
      "section": "Physics",
      "topic": "Dielectrics",
      "difficulty": "medium",
      "question": "A dielectric of relative permittivity 5 completely fills an isolated parallel-plate capacitor after it is disconnected from a battery. Its capacitance becomes:",
      "options": [
        "one-fifth the original",
        "unchanged",
        "five times the original",
        "twenty-five times the original"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Capacitance is multiplied by dielectric constant K when the dielectric fills the gap.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-031",
      "section": "Physics",
      "topic": "Current electricity",
      "difficulty": "easy",
      "question": "Resistors 4 Ω and 12 Ω are connected in parallel. Their equivalent resistance is:",
      "options": [
        "4 Ω",
        "8 Ω",
        "16 Ω",
        "3 Ω"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "R_eq=(4×12)/(4+12)=3 Ω.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-032",
      "section": "Physics",
      "topic": "Electrical power",
      "difficulty": "easy",
      "question": "A 6 Ω resistor carries 2 A. The power dissipated is:",
      "options": [
        "24 W",
        "12 W",
        "18 W",
        "36 W"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "P=I²R=4×6=24 W.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-033",
      "section": "Physics",
      "topic": "Potentiometer",
      "difficulty": "medium",
      "question": "In a potentiometer, cells E₁ and E₂ balance at wire lengths 60 cm and 75 cm under identical conditions. The ratio E₁/E₂ is:",
      "options": [
        "4/5",
        "5/4",
        "3/5",
        "5/3"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Potentiometer emf is proportional to balance length, so 60/75=4/5.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-034",
      "section": "Physics",
      "topic": "Magnetic force",
      "difficulty": "medium",
      "question": "A charge 3 μC moves at 2×10⁶ m/s perpendicular to a 0.50 T magnetic field. The magnetic force is:",
      "options": [
        "0.3 N",
        "3 N",
        "1.5 N",
        "6 N"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "F=qvB=3×10⁻⁶×2×10⁶×0.5=3 N.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-035",
      "section": "Physics",
      "topic": "Magnetic field of current",
      "difficulty": "medium",
      "question": "At a point 0.10 m from a long straight wire carrying 5 A, the magnetic field magnitude is:",
      "options": [
        "1.0×10⁻⁵ T",
        "5.0×10⁻⁶ T",
        "2.0×10⁻⁵ T",
        "1.0×10⁻⁴ T"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "B=μ₀I/(2πr)=4π×10⁻⁷×5/(2π×0.1)=10⁻⁵ T.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-036",
      "section": "Physics",
      "topic": "Magnetic dipole",
      "difficulty": "medium",
      "question": "A single-turn loop of area 0.020 m² carries 3 A in a uniform 0.50 T field. Its maximum torque is:",
      "options": [
        "0.030 N·m",
        "0.003 N·m",
        "0.015 N·m",
        "0.30 N·m"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "τ_max=IAB=3×0.020×0.50=0.030 N·m.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-037",
      "section": "Physics",
      "topic": "Electromagnetic induction",
      "difficulty": "medium",
      "question": "Magnetic flux through a 50-turn coil changes uniformly from 0.12 Wb to 0.04 Wb in 0.20 s. The magnitude of induced emf is:",
      "options": [
        "4 V",
        "10 V",
        "40 V",
        "20 V"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "|E|=N|ΔΦ|/Δt=50×0.08/0.20=20 V.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-038",
      "section": "Physics",
      "topic": "Alternating current",
      "difficulty": "easy",
      "question": "A sinusoidal voltage has peak value 200 V. Its rms value is closest to:",
      "options": [
        "100 V",
        "141 V",
        "173 V",
        "283 V"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "V_rms=V₀/√2≈141 V.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-039",
      "section": "Physics",
      "topic": "Transformer",
      "difficulty": "medium",
      "question": "An ideal transformer has 500 primary turns and 100 secondary turns. With 250 V applied to the primary, the secondary voltage is:",
      "options": [
        "50 V",
        "25 V",
        "125 V",
        "500 V"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "V_s/V_p=N_s/N_p=100/500=1/5, so V_s=50 V.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-040",
      "section": "Physics",
      "topic": "Electromagnetic waves",
      "difficulty": "easy",
      "question": "Which electromagnetic radiation has a longer wavelength than visible red light?",
      "options": [
        "ultraviolet",
        "X-rays",
        "gamma rays",
        "infrared"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Infrared lies beyond red at longer wavelengths; the others listed have shorter wavelengths.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-041",
      "section": "Physics",
      "topic": "Geometrical optics",
      "difficulty": "medium",
      "question": "A convex lens of focal length 20 cm forms a real image of an object placed 60 cm from the lens. The image distance is:",
      "options": [
        "30 cm",
        "15 cm",
        "20 cm",
        "40 cm"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "1/f=1/v−1/u with u=−60 cm gives 1/v=1/20−1/60=1/30.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-042",
      "section": "Physics",
      "topic": "Spherical mirrors",
      "difficulty": "medium",
      "question": "An object 30 cm in front of a concave mirror of focal length 15 cm forms an image at:",
      "options": [
        "15 cm in front",
        "30 cm behind",
        "60 cm behind",
        "30 cm in front of the mirror"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "At u=2f, a concave mirror forms a real image at 2f, 30 cm in front.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-043",
      "section": "Physics",
      "topic": "Interference",
      "difficulty": "medium",
      "question": "In Young’s double-slit experiment, λ=600 nm, slit separation=0.50 mm and screen distance=2.0 m. The fringe width is:",
      "options": [
        "0.24 mm",
        "1.2 mm",
        "2.4 mm",
        "4.8 mm"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "β=λD/d=600×10⁻⁹×2/(0.5×10⁻³)=2.4×10⁻³ m.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-044",
      "section": "Physics",
      "topic": "Diffraction",
      "difficulty": "medium",
      "question": "For a single slit of width a, the first minimum for light of wavelength λ occurs when:",
      "options": [
        "a cosθ = λ",
        "a sinθ = λ",
        "a sinθ = λ/2",
        "2a sinθ = λ/2"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Single-slit minima satisfy a sinθ=mλ; for the first minimum m=1.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-045",
      "section": "Physics",
      "topic": "Photoelectric effect",
      "difficulty": "medium",
      "question": "If the stopping potential for photoelectrons is 1.8 V, their maximum kinetic energy is:",
      "options": [
        "0.9 eV",
        "1.8 eV",
        "1.8 J",
        "3.6 eV"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "K_max=eV_s, which is 1.8 eV when V_s=1.8 V.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-046",
      "section": "Physics",
      "topic": "Matter waves",
      "difficulty": "easy",
      "question": "If a particle’s momentum doubles, its de Broglie wavelength becomes:",
      "options": [
        "half",
        "double",
        "four times",
        "unchanged"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "λ=h/p, so doubling p halves λ.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-047",
      "section": "Physics",
      "topic": "Atoms",
      "difficulty": "medium",
      "question": "In the Bohr model of hydrogen, the energy of the n=2 level is:",
      "options": [
        "−13.6 eV",
        "−6.8 eV",
        "+3.4 eV",
        "−3.4 eV"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "E_n=−13.6/n² eV, so E_2=−3.4 eV.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-048",
      "section": "Physics",
      "topic": "Nuclei",
      "difficulty": "medium",
      "question": "A radioactive sample has a half-life of 6 h. What fraction remains after 18 h?",
      "options": [
        "1/2",
        "1/8",
        "1/4",
        "1/16"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "18 h is three half-lives, leaving (1/2)³=1/8.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-049",
      "section": "Physics",
      "topic": "Semiconductors",
      "difficulty": "easy",
      "question": "A silicon p–n junction diode is strongly forward biased when:",
      "options": [
        "the p-side is at higher potential than the n-side",
        "the n-side is at higher potential than the p-side",
        "both sides are grounded regardless of circuit",
        "no external voltage is applied"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Forward bias connects p to higher potential and reduces the junction barrier.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-physics-050",
      "section": "Physics",
      "topic": "Digital electronics",
      "difficulty": "easy",
      "question": "The output of an AND gate for inputs 1 and 0 is:",
      "options": [
        "0",
        "1",
        "undefined",
        "the complement of 0"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "An AND gate outputs 1 only when all inputs are 1; hence 1 AND 0 = 0.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-001",
      "section": "Chemistry",
      "topic": "Mole concept",
      "difficulty": "easy",
      "question": "How many moles are present in 9.0 g of water? (Molar mass H₂O = 18 g mol⁻¹)",
      "options": [
        "0.25 mol",
        "1.0 mol",
        "0.50 mol",
        "2.0 mol"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "n=m/M=9/18=0.50 mol.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-002",
      "section": "Chemistry",
      "topic": "Gas laws",
      "difficulty": "medium",
      "question": "An ideal gas occupies 4.0 L at 300 K at constant pressure. Its volume at 450 K is:",
      "options": [
        "2.67 L",
        "4.5 L",
        "6.0 L",
        "9.0 L"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "At constant pressure V/T is constant, so V₂=4×450/300=6 L.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-003",
      "section": "Chemistry",
      "topic": "Atomic structure",
      "difficulty": "medium",
      "question": "For an electron in a 3p orbital, the allowed orbital angular momentum quantum number l is:",
      "options": [
        "1",
        "0",
        "2",
        "3"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "For p orbitals, l=1.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-004",
      "section": "Chemistry",
      "topic": "Atomic structure",
      "difficulty": "easy",
      "question": "The maximum number of electrons that can occupy the n=3 shell is:",
      "options": [
        "8",
        "9",
        "32",
        "18"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "A shell with principal quantum number n accommodates at most 2n²=18 electrons.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-005",
      "section": "Chemistry",
      "topic": "Periodic trends",
      "difficulty": "medium",
      "question": "Across a period from left to right, the first ionization enthalpy generally:",
      "options": [
        "decreases steadily to zero",
        "increases",
        "remains exactly constant",
        "depends only on neutron number"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Effective nuclear charge generally rises across a period, increasing ionization enthalpy with known local exceptions.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-006",
      "section": "Chemistry",
      "topic": "Chemical bonding",
      "difficulty": "easy",
      "question": "According to VSEPR theory, the molecular shape of BF₃ is:",
      "options": [
        "tetrahedral",
        "trigonal pyramidal",
        "trigonal planar",
        "bent"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Boron has three bonding pairs and no lone pair in BF₃, giving trigonal planar geometry.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-007",
      "section": "Chemistry",
      "topic": "Hybridisation",
      "difficulty": "medium",
      "question": "The carbon atoms in ethyne, C₂H₂, are primarily:",
      "options": [
        "sp² hybridised",
        "sp hybridised",
        "sp³ hybridised",
        "dsp² hybridised"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Each carbon has two electron domains and linear geometry, corresponding to sp hybridisation.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-008",
      "section": "Chemistry",
      "topic": "Molecular orbital theory",
      "difficulty": "medium",
      "question": "The bond order of O₂ according to molecular orbital theory is:",
      "options": [
        "1",
        "2",
        "1.5",
        "2.5"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "O₂ has bond order (N_b−N_a)/2 = 2.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-009",
      "section": "Chemistry",
      "topic": "Intermolecular forces",
      "difficulty": "easy",
      "question": "Among the following, which substance can form the strongest hydrogen bonding between its own molecules?",
      "options": [
        "HCl",
        "HBr",
        "HF",
        "HI"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Fluorine’s high electronegativity makes H–F highly polar and capable of strong hydrogen bonding.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-010",
      "section": "Chemistry",
      "topic": "Thermochemistry",
      "difficulty": "medium",
      "question": "A reaction releases 75 kJ of heat at constant pressure. Its enthalpy change is:",
      "options": [
        "+75 kJ",
        "−75 kJ",
        "0 kJ",
        "−150 kJ"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Heat released by the system corresponds to a negative enthalpy change.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-011",
      "section": "Chemistry",
      "topic": "Thermodynamics",
      "difficulty": "medium",
      "question": "At constant temperature and pressure, a process is thermodynamically spontaneous when:",
      "options": [
        "ΔG > 0",
        "ΔH = 0 always",
        "ΔS = 0 always",
        "ΔG < 0"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Negative Gibbs free-energy change is the criterion for spontaneity at constant T and P.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-012",
      "section": "Chemistry",
      "topic": "Chemical equilibrium",
      "difficulty": "medium",
      "question": "For N₂(g)+3H₂(g)⇌2NH₃(g), the relation between Kp and Kc is:",
      "options": [
        "Kp = Kc(RT)²",
        "Kp = Kc(RT)⁻²",
        "Kp = KcRT",
        "Kp = Kc"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Δn_gas=2−4=−2, so Kp=Kc(RT)^Δn=Kc(RT)⁻².",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-013",
      "section": "Chemistry",
      "topic": "Le Chatelier principle",
      "difficulty": "easy",
      "question": "For an exothermic equilibrium, increasing temperature shifts equilibrium predominantly toward:",
      "options": [
        "products",
        "neither side under any condition",
        "the side with more catalyst",
        "reactants"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Heat behaves as a product for an exothermic reaction; adding heat shifts equilibrium to reactants.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-014",
      "section": "Chemistry",
      "topic": "Acid-base chemistry",
      "difficulty": "easy",
      "question": "The pH of 1.0×10⁻³ M HCl at 25°C, assuming complete dissociation, is:",
      "options": [
        "3",
        "1",
        "7",
        "11"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "[H⁺]=10⁻³ M, so pH=3.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-015",
      "section": "Chemistry",
      "topic": "Buffers",
      "difficulty": "medium",
      "question": "A buffer contains equal concentrations of a weak acid HA and its salt A⁻. Its pH is approximately:",
      "options": [
        "7 regardless of acid",
        "2pKa",
        "pKa/2",
        "pKa"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Henderson–Hasselbalch gives pH=pKa+log([A⁻]/[HA])=pKa.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-016",
      "section": "Chemistry",
      "topic": "Solubility product",
      "difficulty": "medium",
      "question": "For AgCl(s)⇌Ag⁺+Cl⁻ in pure water, if its molar solubility is s, then Ksp equals:",
      "options": [
        "2s",
        "s²",
        "2s²",
        "s/2"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Both ion concentrations equal s, so Ksp=[Ag⁺][Cl⁻]=s².",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-017",
      "section": "Chemistry",
      "topic": "Redox chemistry",
      "difficulty": "easy",
      "question": "The oxidation number of sulfur in H₂SO₄ is:",
      "options": [
        "+2",
        "+4",
        "−2",
        "+6"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "2(+1)+S+4(−2)=0 gives S=+6.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-018",
      "section": "Chemistry",
      "topic": "Redox stoichiometry",
      "difficulty": "medium",
      "question": "In acidic solution, one MnO₄⁻ ion gains how many electrons when reduced to Mn²⁺?",
      "options": [
        "2",
        "3",
        "5",
        "7"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Mn changes from +7 to +2, a gain of five electrons.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-019",
      "section": "Chemistry",
      "topic": "Solutions",
      "difficulty": "medium",
      "question": "A solution is prepared by dissolving 1 mol solute in 4 mol solvent. The mole fraction of solute is:",
      "options": [
        "0.25",
        "0.20",
        "0.40",
        "0.80"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Mole fraction=1/(1+4)=0.20.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-020",
      "section": "Chemistry",
      "topic": "Raoult law",
      "difficulty": "medium",
      "question": "For an ideal solution containing a nonvolatile solute, adding more solute at fixed temperature causes the solvent vapour pressure to:",
      "options": [
        "increase",
        "remain exactly unchanged",
        "decrease",
        "become independent of mole fraction"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Raoult’s law gives P_solvent=x_solvent P°; adding solute lowers x_solvent.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-021",
      "section": "Chemistry",
      "topic": "Colligative properties",
      "difficulty": "medium",
      "question": "If 0.50 mol of a non-electrolyte is dissolved in 1.0 kg water, the molality is:",
      "options": [
        "0.25 m",
        "1.0 m",
        "2.0 m",
        "0.50 m"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Molality is moles of solute per kilogram of solvent: 0.50/1.0=0.50 m.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-022",
      "section": "Chemistry",
      "topic": "Electrochemistry",
      "difficulty": "medium",
      "question": "A galvanic cell has E°cathode=+0.80 V and E°anode=+0.34 V as reduction potentials. E°cell is:",
      "options": [
        "0.46 V",
        "0.34 V",
        "1.14 V",
        "−0.46 V"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "E°cell=E°cathode−E°anode=0.80−0.34=0.46 V.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-023",
      "section": "Chemistry",
      "topic": "Nernst equation",
      "difficulty": "hard",
      "question": "For a one-electron cell reaction at 298 K with reaction quotient Q=10, E is lower than E° by approximately:",
      "options": [
        "0.0059 V",
        "0.118 V",
        "0.059 V",
        "0.590 V"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "At 298 K, E=E°−(0.0591/n)logQ; with n=1 and Q=10, decrease≈0.059 V.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-024",
      "section": "Chemistry",
      "topic": "Electrolysis",
      "difficulty": "medium",
      "question": "Passing 1 Faraday of charge through Ag⁺ solution deposits approximately how many moles of silver?",
      "options": [
        "0.5 mol",
        "1 mol",
        "2 mol",
        "108 mol"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Ag⁺+e⁻→Ag; one mole of electrons deposits one mole Ag.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-025",
      "section": "Chemistry",
      "topic": "Chemical kinetics",
      "difficulty": "medium",
      "question": "For a first-order reaction, the half-life is:",
      "options": [
        "directly proportional to initial concentration",
        "inversely proportional to initial concentration",
        "zero when concentration halves",
        "independent of initial concentration"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "For first order, t½=0.693/k and does not contain the initial concentration.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-026",
      "section": "Chemistry",
      "topic": "Arrhenius equation",
      "difficulty": "medium",
      "question": "Increasing temperature usually increases a reaction rate constant mainly because:",
      "options": [
        "a larger fraction of molecules exceed the activation energy",
        "activation energy becomes exactly zero",
        "collision frequency becomes zero",
        "the equilibrium constant must become one"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "The Boltzmann distribution shifts so more molecules have enough energy to cross the activation barrier.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-027",
      "section": "Chemistry",
      "topic": "Surface chemistry",
      "difficulty": "easy",
      "question": "A catalyst speeds a reaction primarily by providing a pathway with:",
      "options": [
        "higher enthalpy change",
        "larger equilibrium constant in every case",
        "lower activation energy",
        "zero molecular collisions"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "A catalyst changes the mechanism and lowers activation energy without changing the equilibrium thermodynamics.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-028",
      "section": "Chemistry",
      "topic": "Metallurgy",
      "difficulty": "medium",
      "question": "Froth flotation is particularly useful for concentrating:",
      "options": [
        "carbonate ores only",
        "native gold only",
        "oxide ores only",
        "sulphide ores"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Froth flotation exploits differential wettability and is widely used for sulphide ores.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-029",
      "section": "Chemistry",
      "topic": "p-block elements",
      "difficulty": "medium",
      "question": "Which chlorine oxoacid has chlorine in the +7 oxidation state?",
      "options": [
        "HClO",
        "HClO₄",
        "HClO₂",
        "HClO₃"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "In HClO₄, +1 + x +4(−2)=0, so x=+7.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-030",
      "section": "Chemistry",
      "topic": "Transition elements",
      "difficulty": "medium",
      "question": "Which feature is characteristic of many transition-metal ions?",
      "options": [
        "completely absent d orbitals",
        "partially filled d subshells",
        "only +1 oxidation state",
        "inability to form complexes"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Many transition ions have partially filled d orbitals, underpinning variable oxidation states and complex formation.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-031",
      "section": "Chemistry",
      "topic": "Lanthanides",
      "difficulty": "medium",
      "question": "Lanthanide contraction refers to the gradual decrease in:",
      "options": [
        "atomic number across the series",
        "number of 4f electrons",
        "atomic and ionic radii across the lanthanide series",
        "nuclear charge across the series"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Imperfect shielding by 4f electrons causes effective nuclear charge to rise and radii to contract.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-032",
      "section": "Chemistry",
      "topic": "Coordination chemistry",
      "difficulty": "medium",
      "question": "In [Co(NH₃)₆]Cl₃, the coordination number of cobalt is:",
      "options": [
        "6",
        "3",
        "4",
        "9"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Six ammonia ligands are directly coordinated to cobalt.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-033",
      "section": "Chemistry",
      "topic": "Coordination isomerism",
      "difficulty": "medium",
      "question": "Geometrical cis–trans isomerism is possible for which square-planar type?",
      "options": [
        "[MA₂B₂]",
        "[MA₄]",
        "[MAB₃] only with identical positions",
        "[M] without ligands"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "A square-planar [MA₂B₂] complex can arrange identical ligands adjacent (cis) or opposite (trans).",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-034",
      "section": "Chemistry",
      "topic": "Haloalkanes",
      "difficulty": "medium",
      "question": "For a simple tertiary alkyl halide in a polar protic solvent, which substitution pathway is generally favoured?",
      "options": [
        "SN2 exclusively",
        "electrophilic addition",
        "free-radical polymerisation",
        "SN1"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Tertiary carbocations are relatively stabilized and polar protic media favour ionization, supporting SN1.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-035",
      "section": "Chemistry",
      "topic": "Alcohols",
      "difficulty": "easy",
      "question": "Oxidation of a primary alcohol under controlled conditions first gives mainly a:",
      "options": [
        "aldehyde",
        "ketone",
        "tertiary amine",
        "alkene only"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Primary alcohols oxidize first to aldehydes before further oxidation to acids.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-036",
      "section": "Chemistry",
      "topic": "Phenols",
      "difficulty": "medium",
      "question": "Phenol is more acidic than cyclohexanol mainly because:",
      "options": [
        "phenoxide ion is resonance-stabilized",
        "phenol has no O–H bond",
        "cyclohexanol is aromatic",
        "phenol cannot hydrogen-bond"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "The conjugate base phenoxide delocalizes negative charge over the aromatic ring.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-037",
      "section": "Chemistry",
      "topic": "Ethers",
      "difficulty": "medium",
      "question": "Heating an unsymmetrical ether with excess HI generally cleaves a C–O bond to form:",
      "options": [
        "only an alkene and water",
        "two carboxylic acids",
        "an alkyl iodide and an alcohol initially",
        "an amide and iodine"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Protonation of ether followed by iodide attack cleaves the ether, yielding an iodide and alcohol; excess HI may further convert the alcohol.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-038",
      "section": "Chemistry",
      "topic": "Aldehydes and ketones",
      "difficulty": "easy",
      "question": "Tollens’ reagent is commonly used to distinguish an aldehyde from a simple ketone because aldehydes typically:",
      "options": [
        "reduce Ag⁺ to metallic silver",
        "form no reaction with any oxidant",
        "release chlorine gas",
        "convert Ag to Ag⁺"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Aldehydes are readily oxidized and reduce the diamminesilver(I) reagent to silver.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-039",
      "section": "Chemistry",
      "topic": "Carbonyl compounds",
      "difficulty": "medium",
      "question": "A carbonyl compound can undergo a simple aldol reaction only if it has at least one:",
      "options": [
        "halogen atom",
        "α-hydrogen",
        "nitro group",
        "quaternary carbon"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Formation of the enolate/enol required for aldol chemistry needs an α-hydrogen.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-040",
      "section": "Chemistry",
      "topic": "Carboxylic acid derivatives",
      "difficulty": "medium",
      "question": "Which derivative is generally most reactive toward nucleophilic acyl substitution?",
      "options": [
        "amide",
        "carboxylate ion",
        "alkane",
        "acid chloride"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Acid chlorides have a strongly electron-withdrawing acyl centre and chloride is a good leaving group.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-041",
      "section": "Chemistry",
      "topic": "Amines",
      "difficulty": "medium",
      "question": "In aqueous solution, methylamine acts as a Brønsted base because nitrogen can:",
      "options": [
        "accept a proton using its lone pair",
        "donate an electron pair only to oxygen atoms",
        "release H⁺ from a carboxyl group",
        "lose all valence electrons"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "The nitrogen lone pair can bind H⁺, forming CH₃NH₃⁺.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-042",
      "section": "Chemistry",
      "topic": "Diazonium salts",
      "difficulty": "medium",
      "question": "Aromatic diazonium salts are useful in synthesis because the diazonium group can be:",
      "options": [
        "retained only as a permanent group",
        "converted only into alkanes",
        "formed only from tertiary amines",
        "replaced by several other substituents"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Aryl diazonium ions undergo substitutions that introduce groups such as OH, Cl, Br or CN.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-043",
      "section": "Chemistry",
      "topic": "Aromatic substitution",
      "difficulty": "medium",
      "question": "The –NO₂ group on benzene is generally:",
      "options": [
        "activating and ortho/para-directing",
        "activating and meta-directing",
        "neutral and without directing effect",
        "deactivating and meta-directing"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Nitro strongly withdraws electron density and destabilizes ortho/para sigma complexes, making it meta-directing.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-044",
      "section": "Chemistry",
      "topic": "Biomolecules",
      "difficulty": "easy",
      "question": "Which common disaccharide is a reducing sugar?",
      "options": [
        "sucrose",
        "maltose",
        "cellulose",
        "starch"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Maltose has a free anomeric carbon and can reduce mild oxidizing reagents; sucrose does not.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-045",
      "section": "Chemistry",
      "topic": "Amino acids",
      "difficulty": "medium",
      "question": "At its isoelectric point, a simple amino acid in water is present predominantly as a:",
      "options": [
        "zwitterion",
        "free radical",
        "carbanion only",
        "neutral molecule with no charges anywhere"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "At pI, the protonated amino and deprotonated carboxyl groups give an internal salt with net zero charge.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-046",
      "section": "Chemistry",
      "topic": "Polymers",
      "difficulty": "easy",
      "question": "The monomer used to make polyvinyl chloride is:",
      "options": [
        "vinyl chloride",
        "ethylene glycol",
        "styrene oxide",
        "tetrafluoroethylene"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "PVC is formed by addition polymerization of CH₂=CHCl, vinyl chloride.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-047",
      "section": "Chemistry",
      "topic": "Chemistry in everyday life",
      "difficulty": "easy",
      "question": "An antacid is intended primarily to:",
      "options": [
        "increase gastric acidity",
        "polymerize stomach proteins",
        "neutralize excess gastric acid",
        "supply strong oxidants"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Antacids are mild bases that neutralize excess hydrochloric acid in the stomach.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-048",
      "section": "Chemistry",
      "topic": "Green chemistry",
      "difficulty": "medium",
      "question": "A synthetic route with higher atom economy is preferred because it:",
      "options": [
        "necessarily uses more solvent",
        "always requires a metal catalyst",
        "produces more stoichiometric waste",
        "incorporates a larger fraction of reactant atoms into the desired product"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Atom economy measures the fraction of reactant atoms ending up in the desired product, so higher values imply less inherent waste.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-049",
      "section": "Chemistry",
      "topic": "Organic qualitative analysis",
      "difficulty": "medium",
      "question": "A compound that rapidly decolourises bromine water without light is most directly indicating the presence of:",
      "options": [
        "a saturated alkane only",
        "a noble gas",
        "a metal carbonate exclusively",
        "a carbon–carbon multiple bond"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Alkenes and alkynes add bromine across unsaturated bonds, decolourising bromine solution.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-chemistry-050",
      "section": "Chemistry",
      "topic": "Chemical bonding",
      "difficulty": "medium",
      "question": "Which species is expected to have the shortest bond length?",
      "options": [
        "N₂⁺",
        "N₂",
        "N₂⁻",
        "O₂"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "N₂ has a high bond order of 3; higher bond order generally corresponds to shorter bond length.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-001",
      "section": "Mathematics",
      "topic": "Sets",
      "difficulty": "easy",
      "question": "If A has 18 elements, B has 15 elements and A∩B has 6 elements, then A∪B has:",
      "options": [
        "27 elements",
        "21 elements",
        "33 elements",
        "39 elements"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "n(A∪B)=n(A)+n(B)−n(A∩B)=18+15−6=27.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-002",
      "section": "Mathematics",
      "topic": "Functions",
      "difficulty": "medium",
      "question": "Which function from R to R is one-to-one?",
      "options": [
        "f(x)=x²",
        "f(x)=3x−2",
        "f(x)=|x|",
        "f(x)=x²+1"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "A nonzero linear function is injective on R; the other listed functions take equal values at x and −x.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-003",
      "section": "Mathematics",
      "topic": "Inverse functions",
      "difficulty": "medium",
      "question": "If f(x)=2x+5, then f⁻¹(11) equals:",
      "options": [
        "6",
        "8",
        "3",
        "16"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Solve 2x+5=11 to get x=3.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-004",
      "section": "Mathematics",
      "topic": "Complex numbers",
      "difficulty": "easy",
      "question": "The modulus of 3−4i is:",
      "options": [
        "1",
        "7",
        "5",
        "25"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "|3−4i|=√(3²+4²)=5.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-005",
      "section": "Mathematics",
      "topic": "Quadratic equations",
      "difficulty": "medium",
      "question": "If the roots of x²−7x+10=0 are α and β, then αβ is:",
      "options": [
        "−10",
        "7",
        "−7",
        "10"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "For ax²+bx+c=0, product of roots is c/a=10.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-006",
      "section": "Mathematics",
      "topic": "Arithmetic progression",
      "difficulty": "easy",
      "question": "The 12th term of the AP 5, 8, 11, ... is:",
      "options": [
        "38",
        "35",
        "41",
        "44"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "a₁₂=5+(12−1)3=38.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-007",
      "section": "Mathematics",
      "topic": "Geometric progression",
      "difficulty": "medium",
      "question": "The sum of the first five terms of 2, 6, 18, ... is:",
      "options": [
        "162",
        "240",
        "242",
        "486"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "S₅=2(3⁵−1)/(3−1)=243−1=242.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-008",
      "section": "Mathematics",
      "topic": "Matrices",
      "difficulty": "easy",
      "question": "If A=[[1,2],[3,4]], the determinant of A is:",
      "options": [
        "2",
        "10",
        "−10",
        "−2"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "det A=1×4−2×3=−2.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-009",
      "section": "Mathematics",
      "topic": "Matrices",
      "difficulty": "medium",
      "question": "For A=[[2,0],[0,5]], the (1,1) entry of A⁻¹ is:",
      "options": [
        "1/2",
        "2",
        "1/5",
        "5"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "The inverse of a diagonal matrix contains reciprocal diagonal entries.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-010",
      "section": "Mathematics",
      "topic": "Linear equations",
      "difficulty": "medium",
      "question": "The system x+y=7 and x−y=1 has solution:",
      "options": [
        "x=3, y=4",
        "x=6, y=1",
        "x=7, y=0",
        "x=4, y=3"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Adding the equations gives 2x=8, so x=4 and y=3.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-011",
      "section": "Mathematics",
      "topic": "Permutations",
      "difficulty": "medium",
      "question": "How many distinct arrangements can be made from the letters of LEVEL?",
      "options": [
        "20",
        "30",
        "60",
        "120"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "LEVEL has 5 letters with L repeated twice and E repeated twice: 5!/(2!2!)=30.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-012",
      "section": "Mathematics",
      "topic": "Combinations",
      "difficulty": "easy",
      "question": "The number of ways to choose 3 students from 8 is:",
      "options": [
        "24",
        "336",
        "56",
        "512"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "C(8,3)=8×7×6/(3×2×1)=56.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-013",
      "section": "Mathematics",
      "topic": "Binomial theorem",
      "difficulty": "medium",
      "question": "The coefficient of x² in (1+2x)⁵ is:",
      "options": [
        "20",
        "40",
        "80",
        "160"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Coefficient=C(5,2)2²=10×4=40.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-014",
      "section": "Mathematics",
      "topic": "Probability",
      "difficulty": "easy",
      "question": "A fair six-sided die is rolled once. The probability of obtaining a prime number is:",
      "options": [
        "1/3",
        "2/3",
        "1/2",
        "5/6"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Prime outcomes are 2,3,5: 3 of 6, so probability=1/2.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-015",
      "section": "Mathematics",
      "topic": "Conditional probability",
      "difficulty": "medium",
      "question": "In a class, 18 students study Physics, 12 study Chemistry and 6 study both. If one Physics student is chosen at random, the probability that the student also studies Chemistry is:",
      "options": [
        "1/6",
        "1/2",
        "2/3",
        "1/3"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Among 18 Physics students, 6 also study Chemistry, so 6/18=1/3.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-016",
      "section": "Mathematics",
      "topic": "Trigonometric identities",
      "difficulty": "easy",
      "question": "For an angle θ where defined, (1−cos²θ) equals:",
      "options": [
        "cos²θ",
        "sin²θ",
        "tan²θ",
        "1+sin²θ"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "From sin²θ+cos²θ=1, 1−cos²θ=sin²θ.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-017",
      "section": "Mathematics",
      "topic": "Trigonometric equations",
      "difficulty": "medium",
      "question": "For 0≤x<2π, the equation sin x = 0 has how many solutions?",
      "options": [
        "2",
        "1",
        "3",
        "4"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "The solutions in the interval are x=0 and x=π; 2π is excluded.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-018",
      "section": "Mathematics",
      "topic": "Inverse trigonometry",
      "difficulty": "medium",
      "question": "The principal value of tan⁻¹(1) is:",
      "options": [
        "−π/4",
        "π/2",
        "π/4",
        "3π/4"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "On the principal range (−π/2,π/2), tan(π/4)=1.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-019",
      "section": "Mathematics",
      "topic": "Straight lines",
      "difficulty": "easy",
      "question": "The slope of the line 3x−2y+6=0 is:",
      "options": [
        "3/2",
        "−3/2",
        "2/3",
        "−2/3"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Rearrange to y=(3/2)x+3.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-020",
      "section": "Mathematics",
      "topic": "Coordinate geometry",
      "difficulty": "medium",
      "question": "The distance from the point (2,−1) to the line 3x+4y−10=0 is:",
      "options": [
        "4/5",
        "8/5",
        "6/5",
        "2"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Distance=|3(2)+4(−1)−10|/√(3²+4²)=8/5.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-021",
      "section": "Mathematics",
      "topic": "Circle",
      "difficulty": "medium",
      "question": "The circle x²+y²−6x+8y=0 has radius:",
      "options": [
        "3",
        "5",
        "4",
        "7"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Completing squares gives (x−3)²+(y+4)²=25.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-022",
      "section": "Mathematics",
      "topic": "Parabola",
      "difficulty": "medium",
      "question": "For the parabola y²=12x, the focal length a is:",
      "options": [
        "6",
        "12",
        "3",
        "24"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Standard form y²=4ax; hence 4a=12 and a=3.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-023",
      "section": "Mathematics",
      "topic": "Ellipse",
      "difficulty": "medium",
      "question": "For x²/25 + y²/9 = 1, the eccentricity is:",
      "options": [
        "3/5",
        "5/4",
        "4/5",
        "2/5"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "e=√(1−b²/a²)=√(1−9/25)=4/5.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-024",
      "section": "Mathematics",
      "topic": "Hyperbola",
      "difficulty": "medium",
      "question": "For x²/16 − y²/9 = 1, the value of c is:",
      "options": [
        "5",
        "3",
        "4",
        "7"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "For a hyperbola c²=a²+b²=16+9=25, so c=5.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-025",
      "section": "Mathematics",
      "topic": "Vectors",
      "difficulty": "easy",
      "question": "If a=(1,2,2) and b=(2,0,1), then a·b is:",
      "options": [
        "2",
        "5",
        "4",
        "6"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "a·b=1×2+2×0+2×1=4.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-026",
      "section": "Mathematics",
      "topic": "Vectors",
      "difficulty": "medium",
      "question": "The magnitude of i×j is:",
      "options": [
        "0",
        "√2",
        "1",
        "2"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "i and j are perpendicular unit vectors, so |i×j|=1.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-027",
      "section": "Mathematics",
      "topic": "Three-dimensional geometry",
      "difficulty": "medium",
      "question": "The distance between points (1,2,3) and (4,6,3) is:",
      "options": [
        "4",
        "6",
        "7",
        "5"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Distance=√[(3)²+(4)²+0²]=5.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-028",
      "section": "Mathematics",
      "topic": "Limits",
      "difficulty": "medium",
      "question": "lim(x→2) (x²−4)/(x−2) equals:",
      "options": [
        "0",
        "2",
        "8",
        "4"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Factor x²−4=(x−2)(x+2); the limit is x+2→4.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-029",
      "section": "Mathematics",
      "topic": "Continuity",
      "difficulty": "medium",
      "question": "For f(x)=(x²−1)/(x−1) when x≠1, what value of f(1) makes f continuous at x=1?",
      "options": [
        "0",
        "1",
        "2",
        "−2"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "For x≠1, f=x+1; its limit at 1 is 2.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-030",
      "section": "Mathematics",
      "topic": "Differentiation",
      "difficulty": "easy",
      "question": "d/dx (x³−4x) is:",
      "options": [
        "x²−4",
        "3x−4",
        "3x²−4",
        "3x²−1"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Differentiate termwise: 3x²−4.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-031",
      "section": "Mathematics",
      "topic": "Chain rule",
      "difficulty": "medium",
      "question": "If y=(2x+1)⁵, dy/dx is:",
      "options": [
        "5(2x+1)⁴",
        "10(2x+1)⁴",
        "10(2x+1)⁵",
        "5(2x+1)⁶"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Chain rule: 5(2x+1)⁴×2.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-032",
      "section": "Mathematics",
      "topic": "Implicit differentiation",
      "difficulty": "medium",
      "question": "For x²+y²=25, dy/dx equals:",
      "options": [
        "−x/y",
        "x/y",
        "−y/x",
        "y/x"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Differentiate: 2x+2y y′=0, so y′=−x/y.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-033",
      "section": "Mathematics",
      "topic": "Applications of derivatives",
      "difficulty": "medium",
      "question": "For f(x)=−x²+6x+1, the x-coordinate of the maximum is:",
      "options": [
        "3",
        "1",
        "6",
        "9"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "The vertex of −x²+6x+1 occurs at x=−b/(2a)=3.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-034",
      "section": "Mathematics",
      "topic": "Tangents",
      "difficulty": "medium",
      "question": "The slope of the tangent to y=x²+2x at x=1 is:",
      "options": [
        "2",
        "3",
        "4",
        "5"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "dy/dx=2x+2, giving 4 at x=1.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-035",
      "section": "Mathematics",
      "topic": "Indefinite integration",
      "difficulty": "easy",
      "question": "∫(3x²+2) dx is:",
      "options": [
        "3x³+2x+C",
        "x³+2x+C",
        "x³+2+C",
        "x²+2x+C"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Integrate termwise: x³+2x+C.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-036",
      "section": "Mathematics",
      "topic": "Definite integration",
      "difficulty": "medium",
      "question": "∫₀² x dx equals:",
      "options": [
        "1",
        "2",
        "4",
        "8"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "The antiderivative is x²/2; evaluating 0 to 2 gives 2.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-037",
      "section": "Mathematics",
      "topic": "Area under curves",
      "difficulty": "medium",
      "question": "The area bounded by y=x, the x-axis and x=0 to x=3 is:",
      "options": [
        "3",
        "6",
        "9/2 square units",
        "9"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Area=∫₀³x dx=9/2.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-038",
      "section": "Mathematics",
      "topic": "Differential equations",
      "difficulty": "easy",
      "question": "The order of d²y/dx² + (dy/dx)³ = x is:",
      "options": [
        "1",
        "3",
        "4",
        "2"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "The highest derivative present is the second derivative.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-039",
      "section": "Mathematics",
      "topic": "Differential equations",
      "difficulty": "medium",
      "question": "The general solution of dy/dx=3x² is:",
      "options": [
        "y=x³+C",
        "y=3x+C",
        "y=x²+C",
        "y=3x³+C"
      ],
      "correctIndex": 0,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Integrating 3x² gives x³+C.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-040",
      "section": "Mathematics",
      "topic": "Differential equations",
      "difficulty": "medium",
      "question": "If dy/dx=2y and y(0)=3, then y is:",
      "options": [
        "2e^(3x)",
        "3e^x",
        "3e^(2x)",
        "6e^(2x)"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "dy/y=2dx gives y=Ce^(2x); y(0)=3 gives C=3.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-041",
      "section": "Mathematics",
      "topic": "Statistics",
      "difficulty": "easy",
      "question": "The mean of 4, 7, 9, 10 is:",
      "options": [
        "6.5",
        "7.5",
        "8",
        "8.5"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Mean=(4+7+9+10)/4=30/4=7.5.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-042",
      "section": "Mathematics",
      "topic": "Statistics",
      "difficulty": "medium",
      "question": "For data 2,2,5,7,9, the median is:",
      "options": [
        "2",
        "4",
        "7",
        "5"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "With five ordered observations, the third value is the median, 5.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-043",
      "section": "Mathematics",
      "topic": "Random variables",
      "difficulty": "medium",
      "question": "A random variable X takes values 0 and 2 with probabilities 0.25 and 0.75. E(X) is:",
      "options": [
        "0.5",
        "1.0",
        "1.5",
        "2.0"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "E(X)=0×0.25+2×0.75=1.5.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-044",
      "section": "Mathematics",
      "topic": "Linear programming",
      "difficulty": "medium",
      "question": "For constraints x≥0, y≥0, x+y≤6, the point that maximizes Z=2x+y is:",
      "options": [
        "(0,0)",
        "(6,0)",
        "(0,6)",
        "(3,3)"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Evaluate vertices: Z(0,0)=0, Z(0,6)=6, Z(6,0)=12; (3,3) gives 9 but is not a vertex maximum.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-045",
      "section": "Mathematics",
      "topic": "Mathematical reasoning",
      "difficulty": "easy",
      "question": "The negation of “Every student submitted the form” is:",
      "options": [
        "No student submitted the form",
        "At least one student did not submit the form",
        "Every student failed to submit the form",
        "At least one student submitted the form"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "The negation of a universal statement is an existential counterexample.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-046",
      "section": "Mathematics",
      "topic": "Relations",
      "difficulty": "medium",
      "question": "On the integers, the relation aRb if a−b is divisible by 5 is:",
      "options": [
        "reflexive but not symmetric",
        "symmetric but not transitive",
        "an equivalence relation",
        "neither reflexive nor symmetric"
      ],
      "correctIndex": 2,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Congruence modulo 5 is reflexive, symmetric and transitive.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-047",
      "section": "Mathematics",
      "topic": "Determinants",
      "difficulty": "medium",
      "question": "If a row of a determinant is multiplied by 4 while all other entries stay fixed, the determinant is:",
      "options": [
        "divided by 4",
        "multiplied by 4",
        "unchanged",
        "multiplied by 16"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "A determinant is linear in each row, so scaling one row by 4 scales the determinant by 4.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-048",
      "section": "Mathematics",
      "topic": "Rates of change",
      "difficulty": "medium",
      "question": "The radius of a circle increases at 0.5 cm/s. When r=4 cm, the area is increasing at:",
      "options": [
        "2π cm²/s",
        "4π cm²/s",
        "8π cm²/s",
        "16π cm²/s"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "A=πr², so dA/dt=2πr dr/dt=2π×4×0.5=4π.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-049",
      "section": "Mathematics",
      "topic": "Integration by substitution",
      "difficulty": "medium",
      "question": "∫ 2x cos(x²) dx is:",
      "options": [
        "2sin x+C",
        "cos(x²)+C",
        "x²sin(x²)+C",
        "sin(x²)+C"
      ],
      "correctIndex": 3,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Let u=x², du=2x dx, giving ∫cos u du=sin u+C.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    },
    {
      "id": "jcece-2026-pcm-mathematics-050",
      "section": "Mathematics",
      "topic": "Differential equations",
      "difficulty": "hard",
      "question": "The solution of dy/dx + y = e^x with y(0)=0 is:",
      "options": [
        "e^x−1",
        "(e^x−e^(−x))/2",
        "e^(−x)",
        "(e^x+e^(−x))/2"
      ],
      "correctIndex": 1,
      "answerType": "mcq",
      "marks": 1,
      "negativeMarking": 0.25,
      "explanation": "Integrating factor e^x gives d(ye^x)/dx=e^(2x); y e^x=(e^(2x)−1)/2, hence y=(e^x−e^(−x))/2.",
      "source": {
        "kind": "original",
        "reference": "JCECEB 2026 Information Bulletin — PCM Group",
        "url": "https://jceceb.jharkhand.gov.in/download/2033.pdf",
        "checkedOn": "2026-09-02"
      }
    }
  ];
