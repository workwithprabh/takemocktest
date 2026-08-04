import type { Question, QuestionSource } from '../questions';

const checkedOn = '3 August 2026';
const source = (reference: string, url: string): QuestionSource => ({ kind: 'original', reference, url, checkedOn });

const constitution = source('Constitution of India, Legislative Department, Government of India', 'https://www.legislative.gov.in/documents/constitution-of-india/constitution-of-india-AjN2EjMtQWa?pageTitle=Constitution-of-India');
const dandiMarch = source('Dandi March, Press Information Bureau, Government of India', 'https://www.pib.gov.in/newsite/erelcontent.aspx?lang=2&reg=48&relid=8343');
const vijayanagara = source('NCERT, Themes in Indian History II - An Imperial Capital: Vijayanagara', 'https://www.ncert.nic.in/textbook/pdf/lehs203.pdf');
const ajanta = source('Ajanta Caves, UNESCO World Heritage Centre', 'https://whc.unesco.org/en/list/242/');
const cholaTemples = source('Great Living Chola Temples, UNESCO World Heritage Centre', 'https://whc.unesco.org/en/list/250/');
const performingArts = source('Performing Arts, Centre for Cultural Resources and Training, Government of India', 'https://ccrtindia.gov.in/performing-arts/');
const physicalFeatures = source('NCERT, Contemporary India I - Physical Features of India', 'https://www.ncert.nic.in/textbook/pdf/iess102.pdf');
const drainage = source('NCERT, Contemporary India I - Drainage', 'https://www.ncert.nic.in/textbook/pdf/iess103.pdf');
const climate = source('NCERT, Contemporary India I - Climate', 'https://www.ncert.nic.in/textbook/pdf/iess104.pdf');
const sebi = source('About SEBI, Securities and Exchange Board of India', 'https://www.sebi.gov.in/about-sebi.html');
const nabard = source('About NABARD, National Bank for Agriculture and Rural Development', 'https://www.nabard.org/content1.aspx?id=2&catid=23&mid=23');
const cacp = source('Commission for Agricultural Costs and Prices, Government of India', 'https://cacp.dacnet.nic.in/');
const rbi = source('Reserve Bank of India - Monetary Policy: Overview and Instruments', 'https://www.rbi.org.in/Scripts/FS_Overview.aspx?fn=2752');
const openEconomy = source('NCERT, Introductory Macroeconomics - Open Economy Macroeconomics', 'https://www.ncert.nic.in/textbook/pdf/leec106.pdf');
const periodicTable = source('NCERT Science - Periodic Classification of Elements', 'https://www.ncert.nic.in/textbook/pdf/jesc105.pdf');
const hormones = source('NCERT Biology - Chemical Coordination and Integration', 'https://www.ncert.nic.in/textbook/pdf/kebo119.pdf');
const acidsBases = source('NCERT Science - Acids, Bases and Salts', 'https://www.ncert.nic.in/textbook/pdf/jesc102.pdf');
const light = source('NCERT Science - Light: Reflection and Refraction', 'https://www.ncert.nic.in/textbook/pdf/jesc109.pdf');
const gaganyaan = source('Gaganyaan programme FAQ, Indian Space Research Organisation', 'https://www.isro.gov.in/FAQ_Gaganyaan.html');

function question(
  id: string,
  topic: string,
  difficulty: 'easy' | 'medium' | 'hard',
  prompt: string,
  options: string[],
  correctIndex: number,
  explanation: string,
  provenance: QuestionSource,
): Question {
  return {
    id,
    section: 'General Awareness',
    topic,
    difficulty,
    question: prompt,
    options,
    correctIndex,
    explanation,
    source: provenance,
  };
}

export const SSC_CGL_TIER2_GENERAL_AWARENESS_1: Question[] = [
  question('ssc-cgl-t2-ga1-001', 'Indian polity', 'medium', 'The anti-defection provisions of the Constitution are contained in which Schedule?', ['Tenth Schedule', 'Eighth Schedule', 'Ninth Schedule', 'Twelfth Schedule'], 0, 'The Tenth Schedule contains provisions relating to disqualification on the ground of defection.', constitution),
  question('ssc-cgl-t2-ga1-002', 'Indian polity', 'easy', 'Which Part of the Constitution deals with Panchayats?', ['Part VIII', 'Part IX', 'Part X', 'Part XI'], 1, 'Part IX contains the constitutional provisions relating to Panchayats.', constitution),
  question('ssc-cgl-t2-ga1-003', 'Indian polity', 'easy', 'Who appoints the Attorney-General for India?', ['The Chief Justice of India', 'The Prime Minister', 'The President of India', 'The Speaker of the Lok Sabha'], 2, 'Article 76 provides that the President appoints the Attorney-General for India.', constitution),
  question('ssc-cgl-t2-ga1-004', 'Indian polity', 'medium', 'What fraction of the total membership of a House of Parliament constitutes its quorum?', ['One-third', 'One-fourth', 'One-fifth', 'One-tenth'], 3, 'Article 100 sets the quorum at one-tenth of the total number of members of the House.', constitution),
  question('ssc-cgl-t2-ga1-005', 'Indian polity', 'easy', 'The Vice-President of India is the ex officio Chairperson of which body?', ['Rajya Sabha', 'Lok Sabha', 'NITI Aayog', 'Finance Commission'], 0, 'Article 64 makes the Vice-President the ex officio Chairperson of the Council of States, or Rajya Sabha.', constitution),
  question('ssc-cgl-t2-ga1-006', 'Modern Indian history', 'easy', 'From which place did Mahatma Gandhi begin the Dandi March in 1930?', ['Sevagram Ashram', 'Sabarmati Ashram', 'Wardha', 'Champaran'], 1, 'Gandhi began the Salt March from Sabarmati Ashram and walked to Dandi.', dandiMarch),
  question('ssc-cgl-t2-ga1-007', 'Medieval Indian history', 'medium', 'According to tradition and epigraphic evidence, who founded the Vijayanagara Empire in 1336?', ['Krishnadevaraya and Achyuta Raya', 'Rajaraja I and Rajendra I', 'Harihara and Bukka', 'Alauddin Khalji and Malik Kafur'], 2, 'NCERT records that the brothers Harihara and Bukka founded the Vijayanagara Empire in 1336.', vijayanagara),
  question('ssc-cgl-t2-ga1-008', 'Art and culture', 'medium', 'The Brihadisvara Temple at Thanjavur was built during the reign of which Chola ruler?', ['Ashoka', 'Pulakeshin II', 'Rajendra II', 'Rajaraja I'], 3, 'The great temple at Thanjavur was built during the reign of Rajaraja I.', cholaTemples),
  question('ssc-cgl-t2-ga1-009', 'Art and culture', 'easy', 'The paintings and sculptures of the Ajanta Caves are primarily associated with which religion?', ['Buddhism', 'Jainism', 'Sikhism', 'Zoroastrianism'], 0, 'Ajanta is renowned for Buddhist cave monuments, paintings and sculptures.', ajanta),
  question('ssc-cgl-t2-ga1-010', 'Art and culture', 'easy', 'Kuchipudi is a classical dance tradition associated with which state?', ['Odisha', 'Andhra Pradesh', 'Assam', 'Kerala'], 1, 'Kuchipudi developed in present-day Andhra Pradesh.', performingArts),
  question('ssc-cgl-t2-ga1-011', 'Indian geography', 'easy', 'The Coromandel Coast lies mainly along which part of India?', ['The northwestern coast', 'The northeastern Himalayan belt', 'The southeastern coast', 'The western desert margin'], 2, 'The Coromandel Coast forms part of India\'s southeastern coastal plain along the Bay of Bengal.', physicalFeatures),
  question('ssc-cgl-t2-ga1-012', 'Indian geography', 'easy', 'Chilika Lake is located in which state?', ['West Bengal', 'Andhra Pradesh', 'Kerala', 'Odisha'], 3, 'Chilika is a large brackish-water lagoon on the Odisha coast.', drainage),
  question('ssc-cgl-t2-ga1-013', 'Indian geography', 'easy', 'Into which body of water does the Narmada River drain?', ['Arabian Sea', 'Bay of Bengal', 'Indian Ocean south of Kanyakumari', 'Gulf of Mannar'], 0, 'The Narmada flows west through a rift valley and drains into the Arabian Sea.', drainage),
  question('ssc-cgl-t2-ga1-014', 'Indian geography', 'medium', 'In which general direction does the Aravalli Range extend?', ['Northwest to southeast', 'Southwest to northeast', 'East to west', 'North to south'], 1, 'The Aravalli Range runs broadly from southwest to northeast across western India.', physicalFeatures),
  question('ssc-cgl-t2-ga1-015', 'Indian geography', 'medium', 'Which state receives a substantial share of its rainfall from the retreating northeast monsoon?', ['Punjab', 'Gujarat', 'Tamil Nadu', 'Bihar'], 2, 'Tamil Nadu receives much of its cool-season rainfall from the retreating or northeast monsoon.', climate),
  question('ssc-cgl-t2-ga1-016', 'Indian economy', 'easy', 'Which institution regulates India\'s securities market?', ['Reserve Bank of India', 'NABARD', 'Competition Commission of India', 'Securities and Exchange Board of India'], 3, 'SEBI is the statutory regulator of India\'s securities market.', sebi),
  question('ssc-cgl-t2-ga1-017', 'Indian economy', 'easy', 'Which institution is primarily associated with agricultural and rural development finance in India?', ['NABARD', 'SEBI', 'IRDAI', 'EXIM Bank'], 0, 'NABARD is India\'s apex development bank for agriculture and rural development.', nabard),
  question('ssc-cgl-t2-ga1-018', 'Indian economy', 'medium', 'Which body recommends Minimum Support Prices for major agricultural commodities to the Government of India?', ['Finance Commission', 'Commission for Agricultural Costs and Prices', 'GST Council', 'National Statistical Commission'], 1, 'The Commission for Agricultural Costs and Prices makes MSP recommendations for major crops.', cacp),
  question('ssc-cgl-t2-ga1-019', 'Indian economy', 'medium', 'The Marginal Standing Facility allows scheduled commercial banks to borrow funds overnight from which institution?', ['SEBI', 'NABARD', 'Reserve Bank of India', 'Ministry of Finance'], 2, 'The MSF is an RBI facility through which eligible banks can obtain overnight liquidity.', rbi),
  question('ssc-cgl-t2-ga1-020', 'Indian economy', 'medium', 'Which of the following is recorded in the current account of India\'s balance of payments?', ['Only changes in foreign-exchange reserves', 'Only foreign direct investment', 'Only external commercial borrowing', 'Trade in goods and services, income and current transfers'], 3, 'The current account records trade in goods and services along with primary income and current transfers.', openEconomy),
  question('ssc-cgl-t2-ga1-021', 'Chemistry', 'easy', 'What is the atomic number of sodium?', ['11', '10', '12', '23'], 0, 'Sodium has 11 protons and therefore atomic number 11.', periodicTable),
  question('ssc-cgl-t2-ga1-022', 'Biology', 'easy', 'Which cells of the pancreas secrete insulin?', ['Alpha cells', 'Beta cells', 'Acinar cells', 'Platelets'], 1, 'Beta cells in the islets of Langerhans secrete insulin.', hormones),
  question('ssc-cgl-t2-ga1-023', 'Chemistry', 'easy', 'A solution with a pH below 7 is generally classified as:', ['Neutral', 'Basic', 'Acidic', 'Saturated'], 2, 'On the pH scale, values below 7 indicate an acidic solution.', acidsBases),
  question('ssc-cgl-t2-ga1-024', 'Physics', 'medium', 'Which optical phenomenon is chiefly used to guide light through an optical fibre?', ['Diffraction', 'Dispersion', 'Interference', 'Total internal reflection'], 3, 'Light remains guided within an optical fibre through repeated total internal reflection.', light),
  question('ssc-cgl-t2-ga1-025', 'Space science', 'easy', 'The Gaganyaan programme is intended to demonstrate Indian human-spaceflight capability to which region?', ['Low Earth orbit', 'Geostationary orbit', 'Lunar orbit', 'The Sun-Earth L1 point'], 0, 'ISRO describes Gaganyaan as a programme to demonstrate indigenous human-spaceflight capability to low Earth orbit.', gaganyaan),
];
