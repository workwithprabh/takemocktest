import type { Question } from '../questions';

export const OJEE_2026_LE_TECH_DIPLOMA_ENGINEERING_MECHANICS_1: Question[] = [
  {
    "section": "Engineering Mechanics",
    "topic": "Force and Moments",
    "difficulty": "medium",
    "question": "Three coplanar concurrent forces act at a point: 18 N east, 24 N north, and 6 N west. The magnitude of their resultant is",
    "options": [
      "30 N",
      "18sqrt(2) N",
      "24 N",
      "12sqrt(5) N"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The net horizontal component is 18-6=12 N and the vertical component is 24 N. Resultant magnitude=sqrt(12^2+24^2)=12sqrt5 N.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-001"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Force and Moments",
    "difficulty": "medium",
    "question": "Two concurrent forces are 50 N at +60 degrees and 80 N at -30 degrees measured from the +x-axis. The magnitude of their resultant is",
    "options": [
      "10sqrt(61) N",
      "130 N",
      "10sqrt(89) N",
      "90 N"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Components are Rx=25+40sqrt3 and Ry=25sqrt3-40. Squaring and adding gives R^2=8900, so R=10sqrt89 N.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-002"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Force and Moments",
    "difficulty": "easy",
    "question": "A 15 N downward force acts at x=2 m and a 9 N upward force at x=5 m on a horizontal member. Taking counterclockwise moment as positive, the net moment about x=0 is",
    "options": [
      "-15 N m",
      "-75 N m",
      "15 N m",
      "75 N m"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The downward force gives -15*2=-30 N m and the upward force gives +9*5=+45 N m. Net moment=+15 N m.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-003"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Force and Moments",
    "difficulty": "easy",
    "question": "A couple consists of two equal opposite 35 N forces whose lines of action are 0.18 m apart. The couple moment is",
    "options": [
      "7.0 N m",
      "5.4 N m",
      "6.3 N m",
      "4.5 N m"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Moment of a couple equals one force times the perpendicular separation: 35*0.18=6.3 N m.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-004"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Force and Moments",
    "difficulty": "medium",
    "question": "A simply supported 8 m beam carries downward point loads of 12 kN at 2 m and 20 kN at 6 m from the left support. The right-support reaction is",
    "options": [
      "14 kN",
      "18 kN",
      "20 kN",
      "16 kN"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Taking moments about the left support: R_B*8=12*2+20*6=144. Hence R_B=18 kN.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-005"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Force and Moments - Lami's Theorem",
    "difficulty": "medium",
    "question": "A 860 N load is held by two cables making 30 degrees and 60 degrees with the horizontal. If the 30-degree cable tension is T1 and equilibrium is maintained, T1 is",
    "options": [
      "860 N",
      "430 N",
      "496 N",
      "745 N"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Horizontal equilibrium gives T2=sqrt3 T1. Vertical equilibrium gives T1 sin30+T2 sin60=(1/2+3/2)T1=2T1=860, so T1=430 N.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-006"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Force and Moments",
    "difficulty": "medium",
    "question": "Two downward parallel forces of 12 N and 28 N act at x=0 and x=5 m respectively. The line of action of their resultant is at",
    "options": [
      "4.0 m",
      "2.5 m",
      "3.5 m",
      "3.0 m"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The resultant is 40 N. Equating moments about x=0: 40*x=28*5, so x=3.5 m.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-007"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Force and Moments",
    "difficulty": "easy",
    "question": "A force has components Fx=-24 N and Fy=7 N. Its magnitude is",
    "options": [
      "23 N",
      "17 N",
      "31 N",
      "25 N"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Magnitude=sqrt((-24)^2+7^2)=sqrt625=25 N.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-008"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Center of Gravity and Moment of Inertia",
    "difficulty": "medium",
    "question": "A 4 m by 6 m rectangle has an isosceles triangular lamina of base 4 m and height 3 m attached on top of it. Measured from the rectangle's bottom edge, the centroid of the combined area is at",
    "options": [
      "4.6 m",
      "3.4 m",
      "4.2 m",
      "3.8 m"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Rectangle: area 24, centroid y=3. Triangle: area 6, centroid y=6+3/3=7. Thus ybar=(24*3+6*7)/(30)=114/30=3.8 m.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-009"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Center of Gravity and Moment of Inertia",
    "difficulty": "easy",
    "question": "The centroid of a semicircular lamina of radius r lies on its symmetry axis at a distance from the diameter equal to",
    "options": [
      "r/2",
      "2r/pi",
      "3r/8",
      "4r/(3pi)"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a semicircular area, the centroid is located at 4r/(3pi) from the diameter along the symmetry axis.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-010"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Center of Gravity and Moment of Inertia",
    "difficulty": "hard",
    "question": "A rectangle 0.30 m wide and 0.60 m deep has centroidal second moment Ix=0.0054 m^4. The second moment about an axis parallel to that centroidal axis and 0.20 m away is",
    "options": [
      "0.0126 m^4",
      "0.0108 m^4",
      "0.0162 m^4",
      "0.0090 m^4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Area=0.30*0.60=0.18 m^2. By the parallel-axis theorem, I=Ic+Ad^2=0.0054+0.18(0.20)^2=0.0126 m^4.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-011"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Center of Gravity and Moment of Inertia",
    "difficulty": "medium",
    "question": "For a plane lamina, Ix=0.004 m^4 and Iy=0.006 m^4 about mutually perpendicular centroidal axes. The polar second moment about their intersection is",
    "options": [
      "0.010 m^4",
      "0.024 m^4",
      "0.002 m^4",
      "0.001 m^4"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "By the perpendicular-axis theorem, J=Ix+Iy=0.004+0.006=0.010 m^4.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-012"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Center of Gravity and Moment of Inertia",
    "difficulty": "medium",
    "question": "An L-shaped area is formed by a 6 m x 2 m horizontal rectangle and a 2 m x 4 m vertical rectangle placed directly above its left end without overlap. The x-coordinate of the centroid from the left edge is",
    "options": [
      "2.2 m",
      "2.6 m",
      "1.8 m",
      "2.0 m"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The areas are 12 and 8 m^2 with x-centroids 3 m and 1 m. Thus xbar=(12*3+8*1)/(20)=44/20=2.2 m.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-013"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Center of Gravity and Moment of Inertia",
    "difficulty": "easy",
    "question": "The center of gravity of a uniform solid right circular cone lies on its axis at what distance from the base?",
    "options": [
      "3h/4",
      "h/2",
      "h/3",
      "h/4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For a uniform solid cone, the center of gravity is on the axis at h/4 from the base.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-014"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Friction",
    "difficulty": "medium",
    "question": "A 500 N block rests on a rough plane inclined so that sin(theta)=3/5 and cos(theta)=4/5. If mu=0.25, the force parallel to the plane required for impending upward motion is",
    "options": [
      "425 N",
      "300 N",
      "400 N",
      "350 N"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For impending upward motion, friction acts down the plane. Required force=W sin\u03b8+mu W cos\u03b8=500(3/5)+0.25*500(4/5)=300+100=400 N.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-015"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Friction",
    "difficulty": "easy",
    "question": "If the coefficient of limiting friction is 3/4, the angle of friction phi satisfies",
    "options": [
      "sin phi=3/5",
      "sin phi=4/5",
      "cos phi=3/5",
      "tan phi=4/3"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "tan phi=mu=3/4. A 3-4-5 triangle then gives sin phi=3/5.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-016"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Friction - Ladder",
    "difficulty": "hard",
    "question": "A uniform 4.8 m ladder of weight 180 N rests against a smooth vertical wall at 45 degrees to the floor. A 540 N person stands 3.2 m from the foot along the ladder. If the ladder is on the point of slipping, the coefficient of friction at the floor is",
    "options": [
      "0.50",
      "0.625",
      "0.75",
      "0.80"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At the floor, N=180+540=720 N and limiting friction F=mu N. The smooth-wall reaction R equals F. Taking moments about the foot and using sin45=cos45: R(4.8)=180(2.4)+540(3.2)=2160. Hence R=450 N, so mu=R/N=450/720=0.625.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-017"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Friction",
    "difficulty": "medium",
    "question": "A 900 N crate is on a horizontal floor with coefficient of static friction 0.28. The largest horizontal force that can be applied without motion is",
    "options": [
      "252 N",
      "196 N",
      "224 N",
      "280 N"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "On a horizontal floor N=W=900 N. Limiting friction=mu N=0.28*900=252 N.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-018"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Friction",
    "difficulty": "easy",
    "question": "A body is just about to slide down an inclined plane at angle theta. If no other force acts parallel to the plane, the coefficient of friction equals",
    "options": [
      "cos theta",
      "tan theta",
      "sin theta",
      "cot theta"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "At limiting equilibrium down the plane, W sin\u03b8=mu W cos\u03b8, hence mu=tan\u03b8.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-019"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Gear Drive",
    "difficulty": "medium",
    "question": "A 20-tooth pinion rotating at 900 rpm drives a 45-tooth gear. The driven gear speed is",
    "options": [
      "400 rpm",
      "300 rpm",
      "600 rpm",
      "450 rpm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For meshing gears, N1 T1=N2 T2. Thus N2=900*20/45=400 rpm.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-020"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Gear Drive",
    "difficulty": "easy",
    "question": "In a simple gear train, inserting an idler gear between driver and driven gears changes",
    "options": [
      "both velocity ratio and torque ratio only",
      "only the direction of rotation, not the magnitude of the velocity ratio",
      "neither direction nor velocity ratio",
      "the velocity ratio but not direction"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "An idler changes the rotation direction according to the number of meshes, but its tooth count cancels from the overall speed ratio.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-021"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Gear Drive",
    "difficulty": "medium",
    "question": "In a compound train, gear A (20 teeth) drives B (50 teeth). B shares a shaft with C (15 teeth), which drives D (45 teeth). If A runs at 1500 rpm, D runs at",
    "options": [
      "300 rpm",
      "200 rpm",
      "150 rpm",
      "250 rpm"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "N_D=N_A*(T_A/T_B)*(T_C/T_D)=1500*(20/50)*(15/45)=200 rpm.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-022"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Gear Drive",
    "difficulty": "easy",
    "question": "A spur gear has module 4 mm and 36 teeth. Its pitch-circle diameter is",
    "options": [
      "144 mm",
      "40 mm",
      "9 mm",
      "160 mm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Module m=d/T, so d=mT=4*36=144 mm.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-023"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Simple Lifting Machine",
    "difficulty": "easy",
    "question": "A lifting machine raises a 1200 N load with an effort of 150 N. Its mechanical advantage is",
    "options": [
      "12",
      "6",
      "8",
      "10"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Mechanical advantage=load/effort=1200/150=8.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-024"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Simple Lifting Machine",
    "difficulty": "medium",
    "question": "A machine has velocity ratio 12 and efficiency 75%. Its mechanical advantage is",
    "options": [
      "16",
      "8",
      "10",
      "9"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Efficiency=MA/VR. Hence MA=0.75*12=9.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-025"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Simple Lifting Machine",
    "difficulty": "medium",
    "question": "A machine follows P=mW+C. It needs 80 N effort for 500 N load and 130 N for 1000 N load. The effort for a 750 N load is",
    "options": [
      "95 N",
      "110 N",
      "105 N",
      "100 N"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "From the two points, m=(130-80)/(1000-500)=0.1 and C=30 N. For W=750 N, P=0.1(750)+30=105 N.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-026"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Simple Lifting Machine",
    "difficulty": "easy",
    "question": "A lifting machine is reversible when its efficiency is",
    "options": [
      "exactly 100% only",
      "greater than 50%",
      "less than 25%",
      "less than 50%"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For idealized lifting-machine theory, a machine is reversible if its efficiency exceeds 50%; below 50% it is self-locking.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-027"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Simple Lifting Machine - Screw Jack",
    "difficulty": "medium",
    "question": "A screw jack has handle length 0.28 m and screw pitch 6 mm. Neglecting friction, its velocity ratio is approximately",
    "options": [
      "293",
      "220",
      "147",
      "440"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "For one turn, effort moves 2pi l while load rises by pitch p. VR=2pi(0.28)/0.006\u2248293.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-028"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Simple Stress and Strain",
    "difficulty": "medium",
    "question": "An 18 mm diameter pin carries a 36 kN load in double shear. The average shear stress in the pin is approximately",
    "options": [
      "141.5 MPa",
      "70.7 MPa",
      "35.4 MPa",
      "282.9 MPa"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Double shear provides two shear areas. Total area=2*(pi d^2/4)=pi(18^2)/2\u2248508.94 mm^2. Stress=36000/508.94\u224870.7 N/mm^2=70.7 MPa.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-029"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Simple Stress and Strain",
    "difficulty": "easy",
    "question": "A 1.5 m long bar elongates by 0.45 mm. Its longitudinal strain is",
    "options": [
      "7.5x10^-4",
      "3x10^-3",
      "1.5x10^-4",
      "3x10^-4"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Strain=deltaL/L=0.45 mm/1500 mm=0.0003=3x10^-4.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-030"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Simple Stress and Strain",
    "difficulty": "medium",
    "question": "A prismatic bar 1.8 m long and 250 mm^2 in area carries a tensile load of 35 kN. If E=210 GPa, its extension is",
    "options": [
      "1.20 mm",
      "0.80 mm",
      "1.50 mm",
      "2.40 mm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Using delta=PL/(AE) with P=35000 N, L=1800 mm, A=250 mm^2 and E=210000 N/mm^2, delta=(35000*1800)/(250*210000)=1.20 mm.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-031"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Simple Stress and Strain",
    "difficulty": "medium",
    "question": "For an isotropic material, E=210 GPa and Poisson's ratio is 0.30. The shear modulus G is approximately",
    "options": [
      "70.0 GPa",
      "80.8 GPa",
      "91.3 GPa",
      "105 GPa"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "E=2G(1+nu), so G=210/[2(1.30)]=80.77 GPa\u224880.8 GPa.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-032"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Simple Stress and Strain",
    "difficulty": "medium",
    "question": "A 45 kN axial load acts on a 2.4 m long bar of area 600 mm^2 and E=180 GPa. Its elastic extension is",
    "options": [
      "1.0 mm",
      "1.5 mm",
      "2.0 mm",
      "0.5 mm"
    ],
    "correctIndex": 0,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "delta=PL/(AE)=45000*2.4/[600x10^-6*180x10^9]=0.001 m=1.0 mm.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-033"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Dynamics - Kinematics",
    "difficulty": "medium",
    "question": "A particle has initial speed 7 m/s and constant acceleration 3 m/s^2 for 5 s. Its displacement is",
    "options": [
      "65.0 m",
      "57.5 m",
      "72.5 m",
      "82.5 m"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "s=ut+(1/2)at^2=7*5+0.5*3*25=35+37.5=72.5 m.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-034"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Dynamics - Newton's Laws",
    "difficulty": "medium",
    "question": "Blocks of masses 7 kg and 11 kg are connected by a light string on a smooth horizontal table. A horizontal force of 90 N is applied to the 11 kg block, pulling both blocks. The tension in the string is",
    "options": [
      "25 N",
      "40 N",
      "55 N",
      "35 N"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The common acceleration is 90/(7+11)=5 m/s^2. The only horizontal force accelerating the 7 kg block is the string tension, so T=7x5=35 N.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-035"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Dynamics - Work",
    "difficulty": "medium",
    "question": "A force F(x)=4x+3 N acts along the x-direction. The work done from x=1 m to x=4 m is",
    "options": [
      "33 J",
      "42 J",
      "39 J",
      "36 J"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "W=integral_1^4(4x+3)dx=[2x^2+3x]_1^4=(32+12)-(2+3)=39 J.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-036"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Dynamics - Work and Energy",
    "difficulty": "medium",
    "question": "A 4 kg cart is moving at 2 m/s before descending a track through a vertical height of 2.4 m. During the descent, 32 J of mechanical energy is dissipated by resistance. Taking g=10 m/s^2, the cart's speed at the bottom is",
    "options": [
      "4 m/s",
      "5 m/s",
      "8 m/s",
      "6 m/s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Initial kinetic energy is (1/2)(4)(2^2)=8 J and the loss of gravitational potential energy is (4)(10)(2.4)=96 J. After 32 J is dissipated, final kinetic energy is 8+96-32=72 J. Thus (1/2)(4)v^2=72, giving v=6 m/s.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-037"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Dynamics - Power",
    "difficulty": "easy",
    "question": "A machine exerts a steady driving force of 1.6 kN while moving at 3.5 m/s in the force direction. Its mechanical power is",
    "options": [
      "6.4 kW",
      "5.6 kW",
      "4.2 kW",
      "8.0 kW"
    ],
    "correctIndex": 1,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Power=Fv=1600*3.5=5600 W=5.6 kW.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-038"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Dynamics - Impulse and Momentum",
    "difficulty": "medium",
    "question": "A force-time pulse is triangular: force rises linearly from 0 to 120 N in 0.4 s and then falls linearly to 0 in the next 0.2 s. The impulse is",
    "options": [
      "48 N s",
      "30 N s",
      "24 N s",
      "36 N s"
    ],
    "correctIndex": 3,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "Impulse is the area under the force-time graph: (1/2)*(0.6 s)*(120 N)=36 N s.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-039"
  },
  {
    "section": "Engineering Mechanics",
    "topic": "Dynamics - Impact with a Fixed Plane",
    "difficulty": "hard",
    "question": "A 3.2 kg body strikes a fixed smooth plane normally at 7.5 m/s. If the coefficient of restitution is 0.40, the magnitude of the impulse exerted by the plane on the body is",
    "options": [
      "24.0 N s",
      "14.4 N s",
      "33.6 N s",
      "30.0 N s"
    ],
    "correctIndex": 2,
    "answerType": "mcq",
    "marks": 4,
    "negativeMarking": 1,
    "explanation": "The rebound speed is e times the approach speed: 0.40\u00d77.5=3.0 m/s in the opposite direction. The magnitude of the velocity change is 7.5+3.0=10.5 m/s, so impulse = m\u0394v = 3.2\u00d710.5 = 33.6 N s.",
    "source": {
      "kind": "original",
      "reference": "OJEE 2026 current official LE-Tech (Diploma) brochure and syllabus",
      "url": "https://ojee.nic.in/document/information-brochure-for-ojee-2026/",
      "checkedOn": "2026-08-29"
    },
    "id": "ojee-2026-em-040"
  }
];
