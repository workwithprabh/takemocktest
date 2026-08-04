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
const permanentSettlement = source(
  'NCERT, Our Pasts III — Ruling the Countryside, page 28',
  'https://www.ncert.nic.in/textbook/pdf/hess203.pdf',
);
const ncertGeography = source(
  'NCERT, India — Size and Location',
  'https://ncert.nic.in/textbook/pdf/iess101.pdf',
);
const rajasthanArea = source(
  'Rajasthan at a Glance, Government of Rajasthan',
  'https://rising.rajasthan.gov.in/rajasthan-factfile',
);
const narmada = source(
  'Narmada Basin report, Central Water Commission, Government of India',
  'https://cwc.gov.in/sites/default/files/volume-3.pdf',
);
const blackSoil = source(
  'NCERT, Indian Economic Development — Environment and Sustainable Development',
  'https://www.ncert.nic.in/textbook/pdf/keec107.pdf',
);
const photosynthesis = source(
  'NCERT Biology — Photosynthesis in Higher Plants',
  'https://www.ncert.nic.in/textbook/pdf/kebo111.pdf',
);
const vitaminC = source(
  'NCERT Chemistry — Biomolecules, vitamin deficiency table',
  'https://www.ncert.nic.in/textbook/pdf/lech205.pdf',
);
const humanHeart = source(
  'NCERT Science — Transportation in Animals and Plants',
  'https://www.ncert.nic.in/textbook/pdf/gesc107.pdf',
);
const quitIndia = source(
  'Quit India Movement, Ministry of Culture, Government of India',
  'https://amritmahotsav.nic.in/blogdetail.htm?7%2FQuit_India_Movement=',
);
const sanchi = source(
  'Buddhist Monuments at Sanchi, UNESCO World Heritage Centre',
  'https://whc.unesco.org/en/list/524/',
);
const konark = source(
  'Sun Temple, Konark, UNESCO World Heritage Centre',
  'https://whc.unesco.org/en/list/246/',
);
const culture = source(
  'Performing Arts, Centre for Cultural Resources and Training, Government of India',
  'https://ccrtindia.gov.in/performing-arts/',
);
const rbiHistory = source(
  'Reserve Bank of India — Brief History',
  'https://rbi.org.in/scripts/His_brief.aspx',
);
const rbiRepo = source(
  'Reserve Bank of India — Repo/Reverse Repo Rate FAQ',
  'https://m.rbi.org.in/commonman/english/scripts/FAQs.aspx?Id=711',
);
const gst = source(
  'Goods and Services Tax, Central Board of Indirect Taxes and Customs',
  'https://cbic-gst.gov.in/about-gst.html',
);
const gdp = source(
  'National Accounts Statistics methodology, Ministry of Statistics and Programme Implementation',
  'https://www.mospi.gov.in/uploads/announcements/announcements_1765871180213_a27e845f-af91-4f8c-a3a1-2b4b9c439280_Second_Discussion_Paper_on_National_Accounts_Base_Year_Revision.pdf',
);
const ampere = source(
  'SI base unit: ampere, International Bureau of Weights and Measures',
  'https://www.bipm.org/en/si-base-units/ampere',
);
const ozone = source(
  'Ozone, NASA Earth Observatory',
  'https://science.nasa.gov/earth/earth-observatory/ozone/',
);
const marsMission = source(
  'Mars Orbiter Mission FAQ, Indian Space Research Organisation',
  'https://www.isro.gov.in/FAQ_MarsOrbiterMission.html',
);

export const SSC_CGL_TIER1_GENERAL_AWARENESS_1: Question[] = [
  {
    id: 'ssc-cgl-t1-ga-001',
    section: 'General Awareness',
    topic: 'Indian Polity',
    difficulty: 'easy',
    question: 'What does Article 14 of the Constitution of India guarantee?',
    options: [
      'Freedom of religion',
      'Equality before the law and equal protection of the laws',
      'Protection against arrest and detention',
      'Freedom of speech and expression',
    ],
    correctIndex: 1,
    explanation: 'Article 14 guarantees equality before the law and equal protection of the laws within India.',
    source: constitution,
  },
  {
    id: 'ssc-cgl-t1-ga-002',
    section: 'General Awareness',
    topic: 'Indian Polity',
    difficulty: 'easy',
    question: 'In which part of the Constitution of India are the Fundamental Duties listed?',
    options: ['Part III', 'Part IV', 'Part IV-A', 'Part V'],
    correctIndex: 2,
    explanation: 'The Fundamental Duties are listed in Part IV-A of the Constitution.',
    source: constitution,
  },
  {
    id: 'ssc-cgl-t1-ga-003',
    section: 'General Awareness',
    topic: 'Indian Polity',
    difficulty: 'medium',
    question: 'Which article of the Constitution provides for the Finance Commission?',
    options: ['Article 263', 'Article 324', 'Article 356', 'Article 280'],
    correctIndex: 3,
    explanation: 'Article 280 provides for a Finance Commission constituted by the President.',
    source: constitution,
  },
  {
    id: 'ssc-cgl-t1-ga-004',
    section: 'General Awareness',
    topic: 'Indian Polity',
    difficulty: 'easy',
    question: 'In which House of Parliament can a Money Bill be introduced?',
    options: ['Lok Sabha only', 'Rajya Sabha only', 'Either House', 'A joint sitting only'],
    correctIndex: 0,
    explanation: 'Under Article 109, a Money Bill cannot be introduced in the Rajya Sabha; it is introduced only in the Lok Sabha.',
    source: constitution,
  },
  {
    id: 'ssc-cgl-t1-ga-005',
    section: 'General Awareness',
    topic: 'Indian Polity',
    difficulty: 'easy',
    question: 'On which date was the Constitution of India adopted by the Constituent Assembly?',
    options: ['15 August 1947', '26 November 1949', '24 January 1950', '26 January 1950'],
    correctIndex: 1,
    explanation: 'The Constituent Assembly adopted the Constitution on 26 November 1949; it came into force on 26 January 1950.',
    source: constitution,
  },
  {
    id: 'ssc-cgl-t1-ga-006',
    section: 'General Awareness',
    topic: 'Modern History',
    difficulty: 'easy',
    question: 'In which year was the Quit India Movement launched?',
    options: ['1930', '1935', '1946', '1942'],
    correctIndex: 3,
    explanation: 'The Quit India Movement was launched in August 1942.',
    source: quitIndia,
  },
  {
    id: 'ssc-cgl-t1-ga-007',
    section: 'General Awareness',
    topic: 'Modern History',
    difficulty: 'medium',
    question: 'Who introduced the Permanent Settlement in Bengal in 1793?',
    options: ['Lord Wellesley', 'Lord Dalhousie', 'Lord Curzon', 'Lord Cornwallis'],
    correctIndex: 3,
    explanation: 'Lord Cornwallis introduced the Permanent Settlement in Bengal in 1793.',
    source: permanentSettlement,
  },
  {
    id: 'ssc-cgl-t1-ga-008',
    section: 'General Awareness',
    topic: 'Ancient History',
    difficulty: 'easy',
    question: 'The earliest work on the Great Stupa at Sanchi is associated with which ruler?',
    options: ['Kanishka', 'Ashoka', 'Harshavardhana', 'Samudragupta'],
    correctIndex: 1,
    explanation: 'The Great Stupa at Sanchi was originally commissioned by the Mauryan emperor Ashoka.',
    source: sanchi,
  },
  {
    id: 'ssc-cgl-t1-ga-009',
    section: 'General Awareness',
    topic: 'Art and Culture',
    difficulty: 'easy',
    question: 'In which present-day Indian state is the Konark Sun Temple located?',
    options: ['Odisha', 'Gujarat', 'Madhya Pradesh', 'Tamil Nadu'],
    correctIndex: 0,
    explanation: 'The Konark Sun Temple is located in Odisha.',
    source: konark,
  },
  {
    id: 'ssc-cgl-t1-ga-010',
    section: 'General Awareness',
    topic: 'Art and Culture',
    difficulty: 'easy',
    question: 'Bharatanatyam is a classical dance form traditionally associated with which state?',
    options: ['Assam', 'Kerala', 'Uttar Pradesh', 'Tamil Nadu'],
    correctIndex: 3,
    explanation: 'Bharatanatyam developed in Tamil Nadu and is one of India’s major classical dance traditions.',
    source: culture,
  },
  {
    id: 'ssc-cgl-t1-ga-011',
    section: 'General Awareness',
    topic: 'Indian Geography',
    difficulty: 'easy',
    question: 'Which longitude is used as the Standard Meridian of India?',
    options: ['68°7′ E', '82°30′ E', '75°30′ E', '97°25′ E'],
    correctIndex: 1,
    explanation: 'India’s standard time is based on the Standard Meridian at 82°30′ east longitude.',
    source: ncertGeography,
  },
  {
    id: 'ssc-cgl-t1-ga-012',
    section: 'General Awareness',
    topic: 'Indian Geography',
    difficulty: 'easy',
    question: 'Which is the largest Indian state by area?',
    options: ['Madhya Pradesh', 'Rajasthan', 'Maharashtra', 'Uttar Pradesh'],
    correctIndex: 1,
    explanation: 'Rajasthan is India’s largest state by area.',
    source: rajasthanArea,
  },
  {
    id: 'ssc-cgl-t1-ga-013',
    section: 'General Awareness',
    topic: 'Indian Geography',
    difficulty: 'easy',
    question: 'The Narmada River drains into which body of water?',
    options: ['Arabian Sea', 'Bay of Bengal', 'Indian Ocean', 'Gulf of Mannar'],
    correctIndex: 0,
    explanation: 'The Narmada flows westwards and empties into the Arabian Sea.',
    source: narmada,
  },
  {
    id: 'ssc-cgl-t1-ga-014',
    section: 'General Awareness',
    topic: 'Indian Geography',
    difficulty: 'easy',
    question: 'Black soil is especially suitable for the cultivation of which crop?',
    options: ['Cotton', 'Jute', 'Tea', 'Wheat'],
    correctIndex: 0,
    explanation: 'Black soil retains moisture well and is especially suitable for cotton cultivation.',
    source: blackSoil,
  },
  {
    id: 'ssc-cgl-t1-ga-015',
    section: 'General Awareness',
    topic: 'Indian Geography',
    difficulty: 'medium',
    question: 'Through how many Indian states does the Tropic of Cancer pass?',
    options: ['Six', 'Seven', 'Eight', 'Nine'],
    correctIndex: 2,
    explanation: 'The Tropic of Cancer passes through eight Indian states.',
    source: ncertGeography,
  },
  {
    id: 'ssc-cgl-t1-ga-016',
    section: 'General Awareness',
    topic: 'Indian Economy',
    difficulty: 'easy',
    question: 'In which year did the Reserve Bank of India begin operations?',
    options: ['1935', '1947', '1949', '1950'],
    correctIndex: 0,
    explanation: 'The Reserve Bank of India commenced operations on 1 April 1935.',
    source: rbiHistory,
  },
  {
    id: 'ssc-cgl-t1-ga-017',
    section: 'General Awareness',
    topic: 'Indian Economy',
    difficulty: 'medium',
    question: 'Which statement best describes a repo transaction?',
    options: [
      'A bank borrows funds by selling securities with an agreement to repurchase them',
      'A company issues shares to the public for the first time',
      'The government collects direct tax from companies',
      'A bank converts a savings account into a fixed deposit',
    ],
    correctIndex: 0,
    explanation: 'In a repo transaction, securities are sold for cash with an agreement to repurchase them later at a predetermined price.',
    source: rbiRepo,
  },
  {
    id: 'ssc-cgl-t1-ga-018',
    section: 'General Awareness',
    topic: 'Indian Economy',
    difficulty: 'easy',
    question: 'Goods and Services Tax in India is primarily which type of tax?',
    options: [
      'An origin-based direct tax',
      'A wealth tax',
      'An agricultural income tax',
      'A destination-based indirect tax',
    ],
    correctIndex: 3,
    explanation: 'GST is a destination-based indirect tax on the consumption of goods and services.',
    source: gst,
  },
  {
    id: 'ssc-cgl-t1-ga-019',
    section: 'General Awareness',
    topic: 'Indian Economy',
    difficulty: 'medium',
    question: 'Gross Domestic Product measures the value of which of the following?',
    options: [
      'All intermediate goods traded during a year',
      'Final goods and services produced within the domestic territory during a specified period',
      'Only goods exported by residents',
      'Only the output of government-owned enterprises',
    ],
    correctIndex: 1,
    explanation: 'GDP measures the value of final goods and services produced within a country’s domestic territory during a specified period.',
    source: gdp,
  },
  {
    id: 'ssc-cgl-t1-ga-020',
    section: 'General Awareness',
    topic: 'Physics',
    difficulty: 'easy',
    question: 'What is the SI base unit of electric current?',
    options: ['Coulomb', 'Ohm', 'Volt', 'Ampere'],
    correctIndex: 3,
    explanation: 'The ampere is the SI base unit of electric current.',
    source: ampere,
  },
  {
    id: 'ssc-cgl-t1-ga-021',
    section: 'General Awareness',
    topic: 'Biology',
    difficulty: 'easy',
    question: 'In which cell organelle does photosynthesis mainly take place?',
    options: ['Chloroplast', 'Mitochondrion', 'Nucleus', 'Ribosome'],
    correctIndex: 0,
    explanation: 'Photosynthesis mainly occurs in chloroplasts, which contain chlorophyll.',
    source: photosynthesis,
  },
  {
    id: 'ssc-cgl-t1-ga-022',
    section: 'General Awareness',
    topic: 'Biology',
    difficulty: 'easy',
    question: 'Deficiency of vitamin C causes which disease?',
    options: ['Beriberi', 'Rickets', 'Scurvy', 'Night blindness'],
    correctIndex: 2,
    explanation: 'A prolonged deficiency of vitamin C causes scurvy.',
    source: vitaminC,
  },
  {
    id: 'ssc-cgl-t1-ga-023',
    section: 'General Awareness',
    topic: 'Environmental Science',
    difficulty: 'easy',
    question: 'Most atmospheric ozone is found in which layer of the atmosphere?',
    options: ['Troposphere', 'Mesosphere', 'Thermosphere', 'Stratosphere'],
    correctIndex: 3,
    explanation: 'Most atmospheric ozone is concentrated in the stratosphere, forming the ozone layer.',
    source: ozone,
  },
  {
    id: 'ssc-cgl-t1-ga-024',
    section: 'General Awareness',
    topic: 'Biology',
    difficulty: 'easy',
    question: 'How many chambers are present in a normal human heart?',
    options: ['Two', 'Three', 'Four', 'Five'],
    correctIndex: 2,
    explanation: 'The human heart has four chambers: two atria and two ventricles.',
    source: humanHeart,
  },
  {
    id: 'ssc-cgl-t1-ga-025',
    section: 'General Awareness',
    topic: 'Space Science',
    difficulty: 'easy',
    question: 'In which year did India’s Mars Orbiter Mission enter Martian orbit?',
    options: ['2012', '2013', '2014', '2015'],
    correctIndex: 2,
    explanation: 'India’s Mars Orbiter Mission entered Martian orbit on 24 September 2014.',
    source: marsMission,
  },
];
