import type { Question, QuestionSource } from '../questions';

const checkedOn = '3 August 2026';
const source = (reference: string, url: string): QuestionSource => ({ kind: 'original', reference, url, checkedOn });

const constitution = source('Constitution of India 2026, Legislative Department, Government of India', 'https://www.legislative.gov.in/documents/constitution-of-india/constitution-of-india-AjN2EjMtQWa?pageTitle=Constitution-of-India');
const permanentSettlement = source('NCERT, Our Pasts III - Ruling the Countryside', 'https://www.ncert.nic.in/textbook/pdf/hess203.pdf');
const sanchi = source('Buddhist Monuments at Sanchi, UNESCO World Heritage Centre', 'https://whc.unesco.org/en/list/524/');
const performingArts = source('Performing Arts, Centre for Cultural Resources and Training, Government of India', 'https://ccrtindia.gov.in/performing-arts/');
const fatehpurSikri = source('Fatehpur Sikri, UNESCO World Heritage Centre', 'https://whc.unesco.org/en/list/255/');
const ajanta = source('Ajanta Caves, UNESCO World Heritage Centre', 'https://whc.unesco.org/en/list/242/');
const physicalFeatures = source('NCERT, Contemporary India I - Physical Features of India', 'https://www.ncert.nic.in/textbook/pdf/iess102.pdf');
const environment = source('NCERT, Indian Economic Development - Environment and Sustainable Development', 'https://www.ncert.nic.in/textbook/pdf/keec107.pdf');
const openMarketOperations = source('Reserve Bank of India - Repo and open market operations overview', 'https://www.rbi.org.in/commonman/English/Scripts/FAQs.aspx?Id=711');
const acidsBases = source('NCERT Science - Acids, Bases and Salts', 'https://www.ncert.nic.in/textbook/pdf/jesc102.pdf');
const hormones = source('NCERT Biology - Chemical Coordination and Integration', 'https://www.ncert.nic.in/textbook/pdf/kebo119.pdf');
const vitamins = source('NCERT Chemistry - Biomolecules', 'https://www.ncert.nic.in/textbook/pdf/lech205.pdf');
const electricity = source('NCERT Science - Electricity', 'https://www.ncert.nic.in/textbook/pdf/jesc111.pdf');
const light = source('NCERT Mathematics Exemplar - Exponents and Powers', 'https://www.ncert.nic.in/pdf/publication/exemplarproblem/classVII/Mathematics/gemp111.pdf');
const aditya = source('Aditya-L1 mission overview, Indian Space Research Organisation', 'https://www.isro.gov.in/PrincipalScientist_of_theAditya.html');
const spacecraft = source('Spacecraft Missions, Indian Space Research Organisation', 'https://www.isro.gov.in/ISRO_EN/SpacecraftMissions.html');
const digitalRupee = source('Digital Rupee FAQs, Reserve Bank of India', 'https://www.rbi.org.in/scripts/FAQView.aspx/upload/FAQView.aspx?Id=169');
const retailDigitalRupee = source('Operationalisation of Central Bank Digital Currency - Retail Pilot, Reserve Bank of India', 'https://rbi.org.in/scripts/BS_PressReleaseDisplay.aspx?prid=54773');

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

export const SSC_CGL_TIER2_GENERAL_AWARENESS_2: Question[] = [
  question('ssc-cgl-t2-ga2-001', 'Indian polity', 'easy', 'Fundamental Rights are primarily contained in which Part of the Constitution of India?', ['Part III', 'Part IV', 'Part IVA', 'Part V'], 0, 'Part III of the Constitution contains the Fundamental Rights.', constitution),
  question('ssc-cgl-t2-ga2-002', 'Indian polity', 'medium', 'Under Article 110, whose decision is final if a question arises whether a Bill is a Money Bill?', ['The President of India', 'The Speaker of the Lok Sabha', 'The Chairperson of the Rajya Sabha', 'The Chief Justice of India'], 1, 'Article 110(3) states that the decision of the Speaker of the Lok Sabha is final on whether a Bill is a Money Bill.', constitution),
  question('ssc-cgl-t2-ga2-003', 'Indian polity', 'easy', 'Who appoints the Comptroller and Auditor-General of India under Article 148?', ['The Prime Minister', 'The Chief Justice of India', 'The President of India', 'The Finance Minister'], 2, 'Article 148 provides that the President appoints the Comptroller and Auditor-General of India.', constitution),
  question('ssc-cgl-t2-ga2-004', 'Indian polity', 'medium', 'Article 123 empowers the President to promulgate an Ordinance in which situation?', ['Only during a national emergency', 'Only after approval by the Supreme Court', 'Only when both Houses are in session', 'When both Houses of Parliament are not in session together'], 3, 'Article 123 permits an Ordinance except when both Houses of Parliament are in session.', constitution),
  question('ssc-cgl-t2-ga2-005', 'Indian polity', 'easy', 'The Union List, State List and Concurrent List are contained in which Schedule of the Constitution?', ['Seventh Schedule', 'Fifth Schedule', 'Ninth Schedule', 'Eleventh Schedule'], 0, 'The Seventh Schedule distributes subjects through the Union, State and Concurrent Lists.', constitution),
  question('ssc-cgl-t2-ga2-006', 'Modern Indian history', 'easy', 'In which year did the East India Company introduce the Permanent Settlement?', ['1784', '1793', '1813', '1853'], 1, 'The Permanent Settlement was introduced in 1793 during the tenure of Lord Cornwallis.', permanentSettlement),
  question('ssc-cgl-t2-ga2-007', 'Ancient Indian history', 'easy', 'The inception of Sanchi as a sacred Buddhist centre is attributed to which Mauryan emperor?', ['Bindusara', 'Chandragupta Maurya', 'Ashoka', 'Dasharatha'], 2, 'UNESCO attributes the inception of Sanchi as a sacred centre to Emperor Ashoka.', sanchi),
  question('ssc-cgl-t2-ga2-008', 'Art and culture', 'easy', 'Bharatanatyam originated particularly in the southeastern area of which state?', ['Kerala', 'Odisha', 'Assam', 'Tamil Nadu'], 3, 'CCRT identifies southeastern Tamil Nadu as the principal region of origin of Bharatanatyam.', performingArts),
  question('ssc-cgl-t2-ga2-009', 'Medieval Indian history', 'easy', 'Which Mughal emperor built Fatehpur Sikri during the second half of the sixteenth century?', ['Akbar', 'Babur', 'Shah Jahan', 'Aurangzeb'], 0, 'Fatehpur Sikri was built by Emperor Akbar and served briefly as the Mughal capital.', fatehpurSikri),
  question('ssc-cgl-t2-ga2-010', 'Art and culture', 'easy', 'The Ajanta Caves are located in which state?', ['Madhya Pradesh', 'Maharashtra', 'Karnataka', 'Odisha'], 1, 'The Ajanta Caves are located in Maharashtra.', ajanta),
  question('ssc-cgl-t2-ga2-011', 'Indian geography', 'medium', 'The rocks of the Deccan Trap are primarily of which origin?', ['Sedimentary', 'Metamorphic', 'Volcanic', 'Glacial'], 2, 'NCERT describes the Deccan Trap as volcanic in origin, with igneous rocks.', physicalFeatures),
  question('ssc-cgl-t2-ga2-012', 'Indian geography', 'medium', 'In which general direction do the Aravalli Hills extend?', ['North to south', 'Southeast to northwest', 'East to west', 'Southwest to northeast'], 3, 'The Aravalli Hills extend broadly from Gujarat towards Delhi in a southwest-to-northeast direction.', physicalFeatures),
  question('ssc-cgl-t2-ga2-013', 'Indian geography', 'easy', 'Which is the only large river identified by NCERT in the Indian Desert region?', ['Luni', 'Sabarmati', 'Mahi', 'Banas'], 0, 'NCERT identifies the Luni as the only large river in the Indian Desert region.', physicalFeatures),
  question('ssc-cgl-t2-ga2-014', 'Indian geography', 'easy', 'The black soil of the Deccan Plateau is particularly suitable for cultivating which crop?', ['Tea', 'Cotton', 'Jute', 'Coffee'], 1, 'Black soil retains moisture well and is particularly suitable for cotton cultivation.', environment),
  question('ssc-cgl-t2-ga2-015', 'Indian economy', 'medium', 'Open market operations by the Reserve Bank of India involve which activity?', ['Changing income-tax rates', 'Issuing company shares', 'Buying and selling government securities', 'Fixing crop procurement quantities'], 2, 'RBI conducts open market operations by purchasing or selling government securities to adjust durable liquidity conditions.', openMarketOperations),
  question('ssc-cgl-t2-ga2-016', 'Chemistry', 'easy', 'An aqueous solution is acidic when its pH is:', ['Exactly 7', 'Greater than 14', 'Greater than 7', 'Less than 7'], 3, 'On the pH scale, an acidic solution has pH below 7.', acidsBases),
  question('ssc-cgl-t2-ga2-017', 'Biology', 'medium', 'Which cells of the Islets of Langerhans secrete insulin?', ['Beta cells', 'Alpha cells', 'Red blood cells', 'Platelets'], 0, 'The beta cells of the pancreatic Islets of Langerhans secrete insulin.', hormones),
  question('ssc-cgl-t2-ga2-018', 'Biology', 'easy', 'A child develops bone deformities because of prolonged vitamin D deficiency. Which condition does this describe?', ['Scurvy', 'Rickets', 'Beri-beri', 'Night blindness'], 1, 'Vitamin D deficiency can cause rickets, which involves bone deformities in children.', vitamins),
  question('ssc-cgl-t2-ga2-019', 'Physics', 'easy', 'What is the SI unit of electrical resistance?', ['Volt', 'Ampere', 'Ohm', 'Watt'], 2, 'Electrical resistance is measured in ohms, represented by the symbol Ω.', electricity),
  question('ssc-cgl-t2-ga2-020', 'Physics', 'easy', 'What is the approximate speed of light in vacuum?', ['3 x 10 to the power 4 m/s', '3 x 10 to the power 6 m/s', '3 x 10 to the power 7 m/s', '3 x 10 to the power 8 m/s'], 3, 'The approximate speed of light in vacuum is 3 x 10 to the power 8 metres per second.', light),
  question('ssc-cgl-t2-ga2-021', 'Space science', 'easy', 'Aditya-L1 is India\'s first observatory-class space mission dedicated to studying which celestial body?', ['The Sun', 'Mars', 'Venus', 'The Moon'], 0, 'Aditya-L1 is India\'s first observatory-class space-based solar mission.', aditya),
  question('ssc-cgl-t2-ga2-022', 'Space science', 'medium', 'Aditya-L1 operates in a halo orbit around which point of the Sun-Earth system?', ['L2', 'L1', 'L4', 'L5'], 1, 'Aditya-L1 is placed in a halo orbit around the first Lagrange point, L1, of the Sun-Earth system.', aditya),
  question('ssc-cgl-t2-ga2-023', 'Space science', 'easy', 'Which launch vehicle placed Chandrayaan-3 on its mission in July 2023?', ['PSLV-C57', 'GSLV-F12', 'LVM3 M4', 'SSLV-D2'], 2, 'ISRO launched Chandrayaan-3 aboard LVM3 M4 on 14 July 2023.', spacecraft),
  question('ssc-cgl-t2-ga2-024', 'Indian economy', 'easy', 'Which institution creates and issues India\'s Digital Rupee, or e-rupee?', ['SEBI', 'NPCI', 'Ministry of Electronics and Information Technology', 'Reserve Bank of India'], 3, 'The Digital Rupee is India\'s central bank digital currency and is issued by the Reserve Bank of India.', digitalRupee),
  question('ssc-cgl-t2-ga2-025', 'Indian economy', 'medium', 'On which date did the Reserve Bank of India launch the first retail Digital Rupee pilot?', ['1 December 2022', '15 August 2022', '26 January 2023', '1 April 2023'], 0, 'RBI announced that the first retail Digital Rupee pilot would begin on 1 December 2022.', retailDigitalRupee),
];
