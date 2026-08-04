import type { Question, QuestionSource } from '../questions';

const checkedOn = '30 July 2026';

const source = (reference: string, url: string): QuestionSource => ({
  kind: 'original',
  reference,
  url,
  checkedOn,
});

const constitution = source(
  'Constitution of India, Legislative Department, Government of India',
  'https://www.legislative.gov.in/documents/constitution-of-india/constitution-of-india-AjN2EjMtQWa?pageTitle=Constitution-of-India',
);
const dandiMarch = source(
  'Dandi March, Press Information Bureau, Government of India',
  'https://www.pib.gov.in/newsite/erelcontent.aspx?lang=2&reg=48&relid=8343',
);
const subsidiaryAlliance = source(
  'NCERT, Our Pasts III — From Trade to Territory',
  'https://www.ncert.nic.in/textbook/pdf/hess202.pdf',
);
const ajanta = source(
  'Ajanta Caves, UNESCO World Heritage Centre',
  'https://whc.unesco.org/en/list/242/',
);
const cholaTemples = source(
  'Great Living Chola Temples, UNESCO World Heritage Centre',
  'https://whc.unesco.org/en/list/250/',
);
const kathak = source(
  'Performing Arts, Centre for Cultural Resources and Training, Government of India',
  'https://ccrtindia.gov.in/performing-arts/',
);
const indiaLocation = source(
  'NCERT, India — Size and Location',
  'https://www.ncert.nic.in/textbook/pdf/iess101.pdf',
);
const gujaratCoast = source(
  'Gujarat — An Entrepreneur’s Dream, Gujarat Industrial Development Corporation',
  'https://gidc.gujarat.gov.in/Pages/Contents/Gujarat%20-%20An%20Entrepreneur%20Dream',
);
const drainage = source(
  'NCERT, Contemporary India I — Drainage',
  'https://www.ncert.nic.in/textbook/pdf/iess103.pdf',
);
const soils = source(
  'NCERT, Contemporary India II — Resources and Development',
  'https://www.ncert.nic.in/textbook/pdf/jess101.pdf',
);
const rbiHistory = source(
  'Reserve Bank of India — Brief History',
  'https://rbi.org.in/scripts/His_brief.aspx',
);
const rbiCrr = source(
  'Reserve Bank of India — Evolution of Monetary Policy Framework',
  'https://rbi.org.in/scripts/PublicationsView.aspx?Id=18086',
);
const gstLaunch = source(
  'GST launch press note, Central Board of Indirect Taxes and Customs',
  'https://cbic-gst.gov.in/pdf/press-release/Fresh%20Press%20note%20on%20GST%20Rev.%20Fif.%20for%20July%2017.pdf',
);
const cpi = source(
  'Consumer Price Index metadata, National Statistics Office, MoSPI',
  'https://nmds.mospi.gov.in/',
);
const candela = source(
  'SI base unit: candela, International Bureau of Weights and Measures',
  'https://www.bipm.org/en/si-base-units/candela',
);
const mitochondria = source(
  'NCERT Biology Exemplar — Respiration in Plants',
  'https://www.ncert.nic.in/pdf/publication/exemplarproblem/classXI/biology/keep414.pdf',
);
const vitaminD = source(
  'NCERT Chemistry — Biomolecules, vitamin deficiency table',
  'https://www.ncert.nic.in/textbook/pdf/lech205.pdf',
);
const greenhouseEffect = source(
  'The Greenhouse Effect, NASA Science',
  'https://science.nasa.gov/climate-change/faq/what-is-the-greenhouse-effect/',
);
const redBloodCells = source(
  'NCERT Science — Transportation in Animals and Plants',
  'https://www.ncert.nic.in/textbook/pdf/gesc107.pdf',
);
const chandrayaan3 = source(
  'Chandrayaan-3 science data release, Indian Space Research Organisation',
  'https://www.isro.gov.in/Release_of_Chandrayaan-3_science_data_to_the_Scientific_Community.html',
);

export const SSC_CGL_TIER1_GENERAL_AWARENESS_2: Question[] = [
  {
    id: 'ssc-cgl-t1-ga2-001',
    section: 'General Awareness',
    topic: 'Indian Polity',
    difficulty: 'easy',
    question: 'Which right is protected by Article 21 of the Constitution of India?',
    options: [
      'Protection of life and personal liberty',
      'Freedom to manage religious affairs',
      'Equality of opportunity in public employment',
      'Protection against double jeopardy',
    ],
    correctIndex: 0,
    explanation: 'Article 21 says that no person shall be deprived of life or personal liberty except according to procedure established by law.',
    source: constitution,
  },
  {
    id: 'ssc-cgl-t1-ga2-002',
    section: 'General Awareness',
    topic: 'Indian Polity',
    difficulty: 'easy',
    question: 'In which part of the Constitution of India are the Directive Principles of State Policy contained?',
    options: ['Part III', 'Part IV', 'Part IV-A', 'Part V'],
    correctIndex: 1,
    explanation: 'The Directive Principles of State Policy are contained in Part IV of the Constitution.',
    source: constitution,
  },
  {
    id: 'ssc-cgl-t1-ga2-003',
    section: 'General Awareness',
    topic: 'Indian Polity',
    difficulty: 'medium',
    question: 'Which article of the Constitution provides for the Election Commission of India?',
    options: ['Article 280', 'Article 315', 'Article 324', 'Article 356'],
    correctIndex: 2,
    explanation: 'Article 324 vests the superintendence, direction and control of elections in the Election Commission.',
    source: constitution,
  },
  {
    id: 'ssc-cgl-t1-ga2-004',
    section: 'General Awareness',
    topic: 'Indian Polity',
    difficulty: 'medium',
    question: 'A bill to amend the Constitution of India may be introduced in:',
    options: [
      'The Lok Sabha only',
      'The Rajya Sabha only',
      'A joint sitting of Parliament only',
      'Either House of Parliament',
    ],
    correctIndex: 3,
    explanation: 'Under Article 368, a Constitution Amendment Bill may be introduced in either House of Parliament.',
    source: constitution,
  },
  {
    id: 'ssc-cgl-t1-ga2-005',
    section: 'General Awareness',
    topic: 'Indian Polity',
    difficulty: 'easy',
    question: 'On which date did the Constitution of India come into force?',
    options: ['26 January 1950', '26 November 1949', '15 August 1947', '24 January 1950'],
    correctIndex: 0,
    explanation: 'The Constitution came into force on 26 January 1950.',
    source: constitution,
  },
  {
    id: 'ssc-cgl-t1-ga2-006',
    section: 'General Awareness',
    topic: 'Modern History',
    difficulty: 'easy',
    question: 'In which year did Mahatma Gandhi begin the Dandi March?',
    options: ['1928', '1930', '1932', '1942'],
    correctIndex: 1,
    explanation: 'Mahatma Gandhi began the Dandi March on 12 March 1930.',
    source: dandiMarch,
  },
  {
    id: 'ssc-cgl-t1-ga2-007',
    section: 'General Awareness',
    topic: 'Modern History',
    difficulty: 'medium',
    question: 'The Subsidiary Alliance system is most closely associated with which Governor-General?',
    options: ['Lord Cornwallis', 'Lord Dalhousie', 'Lord Wellesley', 'Lord Curzon'],
    correctIndex: 2,
    explanation: 'Lord Wellesley expanded British control over Indian states through the Subsidiary Alliance system.',
    source: subsidiaryAlliance,
  },
  {
    id: 'ssc-cgl-t1-ga2-008',
    section: 'General Awareness',
    topic: 'Art and Culture',
    difficulty: 'easy',
    question: 'The Ajanta Caves are located in which Indian state?',
    options: ['Madhya Pradesh', 'Odisha', 'Karnataka', 'Maharashtra'],
    correctIndex: 3,
    explanation: 'The Ajanta Caves are located in Maharashtra.',
    source: ajanta,
  },
  {
    id: 'ssc-cgl-t1-ga2-009',
    section: 'General Awareness',
    topic: 'Art and Culture',
    difficulty: 'easy',
    question: 'The Brihadisvara Temple at Thanjavur is located in which state?',
    options: ['Tamil Nadu', 'Kerala', 'Karnataka', 'Andhra Pradesh'],
    correctIndex: 0,
    explanation: 'The Brihadisvara Temple at Thanjavur is one of the Great Living Chola Temples in Tamil Nadu.',
    source: cholaTemples,
  },
  {
    id: 'ssc-cgl-t1-ga2-010',
    section: 'General Awareness',
    topic: 'Art and Culture',
    difficulty: 'easy',
    question: 'Kathak is a classical dance tradition associated primarily with which region of India?',
    options: ['Northeastern India', 'Northern India', 'Southern India', 'Western coastal India'],
    correctIndex: 1,
    explanation: 'Kathak developed as a major classical dance tradition of northern India.',
    source: kathak,
  },
  {
    id: 'ssc-cgl-t1-ga2-011',
    section: 'General Awareness',
    topic: 'Indian Geography',
    difficulty: 'easy',
    question: 'What is the southernmost point of the Indian mainland?',
    options: ['Indira Point', 'Rameswaram', 'Kanyakumari', 'Minicoy'],
    correctIndex: 2,
    explanation: 'Kanyakumari is the southernmost point of the Indian mainland; Indira Point is farther south but lies on an island.',
    source: indiaLocation,
  },
  {
    id: 'ssc-cgl-t1-ga2-012',
    section: 'General Awareness',
    topic: 'Indian Geography',
    difficulty: 'easy',
    question: 'Which Indian state has the longest coastline?',
    options: ['Andhra Pradesh', 'Tamil Nadu', 'Maharashtra', 'Gujarat'],
    correctIndex: 3,
    explanation: 'Gujarat has the longest coastline among Indian states.',
    source: gujaratCoast,
  },
  {
    id: 'ssc-cgl-t1-ga2-013',
    section: 'General Awareness',
    topic: 'Indian Geography',
    difficulty: 'easy',
    question: 'The Godavari River drains into which body of water?',
    options: ['Bay of Bengal', 'Arabian Sea', 'Gulf of Kachchh', 'Gulf of Khambhat'],
    correctIndex: 0,
    explanation: 'The Godavari flows eastwards and drains into the Bay of Bengal.',
    source: drainage,
  },
  {
    id: 'ssc-cgl-t1-ga2-014',
    section: 'General Awareness',
    topic: 'Indian Geography',
    difficulty: 'medium',
    question: 'Laterite soil typically develops under which climatic conditions?',
    options: [
      'Low temperature and low rainfall',
      'High temperature and heavy rainfall',
      'Low temperature and heavy snowfall',
      'Moderate temperature and arid conditions',
    ],
    correctIndex: 1,
    explanation: 'Laterite soil develops in tropical and subtropical climates with high temperature and heavy rainfall.',
    source: soils,
  },
  {
    id: 'ssc-cgl-t1-ga2-015',
    section: 'General Awareness',
    topic: 'Indian Geography',
    difficulty: 'medium',
    question: 'The Standard Meridian of India passes near which city?',
    options: ['Nagpur', 'Bhopal', 'Mirzapur', 'Jaipur'],
    correctIndex: 2,
    explanation: 'The Standard Meridian at 82 degrees 30 minutes east passes through Mirzapur in Uttar Pradesh.',
    source: indiaLocation,
  },
  {
    id: 'ssc-cgl-t1-ga2-016',
    section: 'General Awareness',
    topic: 'Indian Economy',
    difficulty: 'easy',
    question: 'In which year was the Reserve Bank of India nationalised?',
    options: ['1935', '1947', '1950', '1949'],
    correctIndex: 3,
    explanation: 'The Reserve Bank of India was nationalised in 1949.',
    source: rbiHistory,
  },
  {
    id: 'ssc-cgl-t1-ga2-017',
    section: 'General Awareness',
    topic: 'Indian Economy',
    difficulty: 'medium',
    question: 'What does the Cash Reserve Ratio require a bank to maintain?',
    options: [
      'A specified proportion of its net demand and time liabilities with the Reserve Bank of India',
      'All customer deposits as cash in its own branches',
      'A fixed share of profits with the Government of India',
      'Only foreign-currency deposits with the Reserve Bank of India',
    ],
    correctIndex: 0,
    explanation: 'CRR is the specified proportion of a bank’s net demand and time liabilities that it must maintain with the Reserve Bank.',
    source: rbiCrr,
  },
  {
    id: 'ssc-cgl-t1-ga2-018',
    section: 'General Awareness',
    topic: 'Indian Economy',
    difficulty: 'easy',
    question: 'On which date was the Goods and Services Tax introduced across India?',
    options: ['1 April 2017', '1 July 2017', '15 August 2017', '1 January 2018'],
    correctIndex: 1,
    explanation: 'GST was introduced across India on 1 July 2017.',
    source: gstLaunch,
  },
  {
    id: 'ssc-cgl-t1-ga2-019',
    section: 'General Awareness',
    topic: 'Indian Economy',
    difficulty: 'medium',
    question: 'Which organisation compiles the all-India Consumer Price Index for rural, urban and combined sectors?',
    options: ['Reserve Bank of India', 'Labour Bureau only', 'National Statistics Office', 'NITI Aayog'],
    correctIndex: 2,
    explanation: 'The Price Statistics Division of the National Statistics Office compiles the broad-based CPI for rural, urban and combined sectors.',
    source: cpi,
  },
  {
    id: 'ssc-cgl-t1-ga2-020',
    section: 'General Awareness',
    topic: 'Physics',
    difficulty: 'easy',
    question: 'What is the SI base unit of luminous intensity?',
    options: ['Lumen', 'Lux', 'Watt', 'Candela'],
    correctIndex: 3,
    explanation: 'The candela is the SI base unit of luminous intensity in a given direction.',
    source: candela,
  },
  {
    id: 'ssc-cgl-t1-ga2-021',
    section: 'General Awareness',
    topic: 'Biology',
    difficulty: 'easy',
    question: 'Which cell organelle produces most of the ATP during aerobic respiration?',
    options: ['Mitochondrion', 'Ribosome', 'Golgi apparatus', 'Lysosome'],
    correctIndex: 0,
    explanation: 'Mitochondria carry out major stages of aerobic respiration and synthesise ATP.',
    source: mitochondria,
  },
  {
    id: 'ssc-cgl-t1-ga2-022',
    section: 'General Awareness',
    topic: 'Biology',
    difficulty: 'easy',
    question: 'Deficiency of vitamin D in children can cause which disease?',
    options: ['Scurvy', 'Rickets', 'Beriberi', 'Pellagra'],
    correctIndex: 1,
    explanation: 'Vitamin D deficiency can cause rickets, which affects bone development in children.',
    source: vitaminD,
  },
  {
    id: 'ssc-cgl-t1-ga2-023',
    section: 'General Awareness',
    topic: 'Environmental Science',
    difficulty: 'easy',
    question: 'Which of the following gases contributes to the greenhouse effect?',
    options: ['Helium', 'Neon', 'Carbon dioxide', 'Argon'],
    correctIndex: 2,
    explanation: 'Carbon dioxide absorbs and re-emits infrared radiation and is an important greenhouse gas.',
    source: greenhouseEffect,
  },
  {
    id: 'ssc-cgl-t1-ga2-024',
    section: 'General Awareness',
    topic: 'Biology',
    difficulty: 'easy',
    question: 'Which blood cells mainly transport oxygen around the human body?',
    options: ['Platelets', 'Lymphocytes', 'White blood cells', 'Red blood cells'],
    correctIndex: 3,
    explanation: 'Red blood cells contain haemoglobin, which carries oxygen from the lungs to body tissues.',
    source: redBloodCells,
  },
  {
    id: 'ssc-cgl-t1-ga2-025',
    section: 'General Awareness',
    topic: 'Space Science',
    difficulty: 'easy',
    question: 'On which date did the Chandrayaan-3 lander make its soft landing on the Moon?',
    options: ['23 August 2023', '14 July 2023', '2 September 2023', '6 September 2019'],
    correctIndex: 0,
    explanation: 'The Chandrayaan-3 lander made a successful soft landing on the Moon on 23 August 2023.',
    source: chandrayaan3,
  },
];
