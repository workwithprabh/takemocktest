import type { ExamSlug } from './exams';

export type ExamScope = 'National' | 'State' | 'Institute' | 'International';

export interface CatalogExam {
  name: string;
  scope: ExamScope;
  liveSlug?: ExamSlug;
}

export interface ExamCatalogGroup {
  name: string;
  exams: CatalogExam[];
}

export interface ExamCatalogCategory {
  slug: string;
  name: string;
  description: string;
  icon: string;
  tone: 'blue' | 'orange' | 'green' | 'violet' | 'rose';
  groups: ExamCatalogGroup[];
  sources: { label: string; url: string }[];
}

const exam = (name: string, scope: ExamScope, liveSlug?: ExamSlug): CatalogExam => ({ name, scope, liveSlug });

export const EXAM_CATEGORIES: ExamCatalogCategory[] = [
  {
    slug: 'government-jobs',
    name: 'Government Jobs',
    description: 'SSC, banking, railways, civil services, regulators, and state recruitment exams.',
    icon: 'building',
    tone: 'blue',
    groups: [
      {
        name: 'SSC exams',
        exams: [
          exam('SSC CGL', 'National', 'ssc-cgl'),
          exam('SSC CHSL', 'National', 'ssc-chsl'),
          exam('SSC MTS & Havaldar', 'National', 'ssc-mts'),
          exam('SSC CPO', 'National', 'ssc-cpo'),
          exam('SSC GD Constable', 'National', 'ssc-gd-constable'),
          exam('SSC Junior Engineer', 'National'),
          exam('SSC Stenographer Grade C & D', 'National'),
          exam('SSC Combined Hindi Translators', 'National'),
          exam('SSC Selection Post', 'National'),
        ],
      },
      {
        name: 'Banking, insurance & regulators',
        exams: [
          exam('IBPS PO', 'National', 'ibps-po'),
          exam('IBPS Clerk / Customer Service Associate', 'National', 'ibps-clerk'),
          exam('IBPS Specialist Officer', 'National', 'ibps-so'),
          exam('IBPS RRB Officer Scale I', 'National', 'ibps-rrb-officer-scale-1'),
          exam('IBPS RRB Office Assistant', 'National', 'ibps-rrb-office-assistant'),
          exam('SBI PO', 'National', 'sbi-po'),
          exam('SBI Clerk', 'National', 'sbi-clerk'),
          exam('RBI Grade B', 'National', 'rbi-grade-b'),
          exam('RBI Assistant', 'National', 'rbi-assistant'),
          exam('NABARD Grade A', 'National', 'nabard-grade-a'),
          exam('SEBI Grade A', 'National', 'sebi-grade-a'),
          exam('SIDBI Grade A & B', 'National', 'sidbi-grade-a-b'),
          exam('LIC AAO', 'National', 'lic-aao'),
          exam('NIACL Administrative Officer', 'National', 'niacl-ao'),
        ],
      },
      {
        name: 'Railway recruitment',
        exams: [
          exam('RRB NTPC', 'National', 'rrb-ntpc'),
          exam('RRB Group D / Level 1', 'National', 'rrb-group-d'),
          exam('RRB Assistant Loco Pilot', 'National', 'rrb-alp'),
          exam('RRB Technician', 'National', 'rrb-technician'),
          exam('RRB Junior Engineer / DMS / CMA', 'National', 'rrb-je'),
          exam('RRB Paramedical Categories', 'National', 'rrb-paramedical'),
          exam('RPF Sub-Inspector', 'National'),
          exam('RPF Constable', 'National', 'rpf-constable'),
        ],
      },
      {
        name: 'UPSC & central services',
        exams: [
          exam('UPSC Civil Services Preliminary', 'National', 'upsc-cse'),
          exam('UPSC Civil Services Main', 'National'),
          exam('UPSC Indian Forest Service', 'National'),
          exam('UPSC Engineering Services', 'National'),
          exam('UPSC Combined Geo-Scientist', 'National'),
          exam('UPSC Indian Economic Service / Indian Statistical Service', 'National'),
          exam('UPSC Combined Medical Services', 'National'),
          exam('UPSC EPFO EO/AO & APFC', 'National'),
        ],
      },
      {
        name: 'State civil services',
        exams: [
          exam('UPPSC PCS', 'State'),
          exam('BPSC Combined Competitive Examination', 'State'),
          exam('MPPSC State Service', 'State'),
          exam('RPSC RAS', 'State'),
          exam('MPSC State Services', 'State'),
          exam('WBPSC Civil Services', 'State'),
          exam('TNPSC Group I & II', 'State'),
          exam('Karnataka PSC KAS', 'State'),
          exam('APPSC Group I & II', 'State'),
          exam('TSPSC Group I & II', 'State'),
          exam('OPSC Odisha Civil Services', 'State'),
          exam('JPSC Combined Civil Services', 'State'),
          exam('CGPSC State Service', 'State'),
          exam('HPSC Haryana Civil Services', 'State'),
          exam('UKPSC Combined State Civil Services', 'State'),
        ],
      },
    ],
    sources: [
      { label: 'Staff Selection Commission', url: 'https://ssc.gov.in/' },
      { label: 'UPSC active examinations', url: 'https://www.upsc.gov.in/examinations/active-exams' },
      { label: 'IBPS', url: 'https://www.ibps.in/' },
      { label: 'Railway Recruitment Board', url: 'https://www.rrbcdg.gov.in/' },
    ],
  },
  {
    slug: 'engineering',
    name: 'Engineering & Technology',
    description: 'Undergraduate, postgraduate, architecture, and major state engineering entrances.',
    icon: 'gear',
    tone: 'orange',
    groups: [
      {
        name: 'National & institute entrances',
        exams: [
          exam('JEE Main', 'National'),
          exam('JEE Advanced', 'National'),
          exam('BITSAT', 'Institute'),
          exam('VITEEE', 'Institute'),
          exam('SRMJEEE', 'Institute'),
          exam('Manipal Entrance Test', 'Institute'),
          exam('AEEE', 'Institute'),
          exam('KIITEE', 'Institute'),
          exam('COMEDK UGET', 'State'),
          exam('IIIT Hyderabad UGEE', 'Institute'),
          exam('JEE Main Paper 2: B.Arch & B.Planning', 'National'),
          exam('NATA', 'National'),
        ],
      },
      {
        name: 'State engineering entrances',
        exams: [
          exam('MHT CET', 'State'),
          exam('WBJEE', 'State'),
          exam('KCET', 'State'),
          exam('KEAM', 'State'),
          exam('AP EAPCET', 'State'),
          exam('TG EAPCET', 'State'),
          exam('GUJCET', 'State'),
          exam('OJEE', 'State'),
          exam('BCECE', 'State'),
          exam('JCECE', 'State'),
        ],
      },
      {
        name: 'Postgraduate & careers',
        exams: [
          exam('GATE', 'National'),
          exam('BITS HD', 'Institute'),
        ],
      },
    ],
    sources: [
      { label: 'NTA JEE Main', url: 'https://jeemain.nta.nic.in/' },
      { label: 'JEE Advanced', url: 'https://jeeadv.ac.in/' },
      { label: 'BITSAT', url: 'https://admissions.bits-pilani.ac.in/BITSAT_LP/' },
      { label: 'COMEDK', url: 'https://www.comedk.org/' },
    ],
  },
  {
    slug: 'medical',
    name: 'Medical & Healthcare',
    description: 'Medical, dental, nursing, pharmacy, and postgraduate healthcare entrances.',
    icon: 'medical',
    tone: 'green',
    groups: [
      {
        name: 'Medical admissions',
        exams: [
          exam('NEET UG', 'National'),
          exam('NEET PG', 'National'),
          exam('INI-CET', 'National'),
          exam('NEET SS', 'National'),
          exam('FMGE', 'National'),
          exam('DNB PDCET', 'National'),
        ],
      },
      {
        name: 'Nursing, pharmacy & allied health',
        exams: [
          exam('AIIMS BSc Nursing Entrance', 'Institute'),
          exam('AIIMS NORCET', 'National'),
          exam('GPAT', 'National'),
          exam('NIPER JEE', 'National'),
        ],
      },
    ],
    sources: [
      { label: 'NTA NEET UG', url: 'https://neet.nta.nic.in/' },
      { label: 'NBEMS examinations', url: 'https://natboard.edu.in/' },
      { label: 'AIIMS examinations', url: 'https://www.aiimsexams.ac.in/' },
    ],
  },
  {
    slug: 'study-abroad',
    name: 'Study Abroad',
    description: 'Admissions and English-language tests used for overseas study applications.',
    icon: 'globe',
    tone: 'violet',
    groups: [
      {
        name: 'Admissions tests',
        exams: [
          exam('GRE General Test', 'International'),
          exam('GMAT', 'International'),
          exam('SAT', 'International'),
          exam('ACT', 'International'),
          exam('LSAT', 'International'),
          exam('MCAT', 'International'),
        ],
      },
      {
        name: 'English proficiency',
        exams: [
          exam('IELTS Academic', 'International'),
          exam('TOEFL iBT', 'International'),
          exam('PTE Academic', 'International'),
          exam('Duolingo English Test', 'International'),
          exam('OET', 'International'),
        ],
      },
    ],
    sources: [
      { label: 'ETS: GRE', url: 'https://www.ets.org/gre/test-takers/general-test/about.html' },
      { label: 'ETS: TOEFL', url: 'https://www.ets.org/toefl/' },
      { label: 'GMAT', url: 'https://www.mba.com/exams/gmat-exam' },
      { label: 'IELTS', url: 'https://ielts.org/' },
    ],
  },
  {
    slug: 'management',
    name: 'Management & Business',
    description: 'MBA, integrated management, and major national or institute-level business entrances.',
    icon: 'chart',
    tone: 'rose',
    groups: [
      {
        name: 'MBA entrances',
        exams: [
          exam('CAT', 'National'),
          exam('XAT', 'National'),
          exam('CMAT', 'National'),
          exam('MAT', 'National'),
          exam('NMAT by GMAC', 'National'),
          exam('SNAP', 'Institute'),
          exam('ATMA', 'National'),
          exam('MICAT', 'Institute'),
          exam('IBSAT', 'Institute'),
          exam('MAH MBA CET', 'State'),
          exam('TANCET MBA', 'State'),
          exam('KMAT Karnataka', 'State'),
        ],
      },
      {
        name: 'Integrated management',
        exams: [
          exam('JIPMAT', 'National'),
          exam('IPMAT Indore', 'Institute'),
          exam('IPMAT Rohtak', 'Institute'),
        ],
      },
    ],
    sources: [
      { label: 'Common Admission Test', url: 'https://iimcat.ac.in/' },
      { label: 'NTA CMAT', url: 'https://cmat.nta.nic.in/' },
      { label: 'AIMA MAT', url: 'https://mat.aima.in/' },
      { label: 'XAT', url: 'https://xatonline.in/' },
    ],
  },
  {
    slug: 'university-science',
    name: 'University & Science',
    description: 'General university admissions and specialist science or research entrances.',
    icon: 'book',
    tone: 'blue',
    groups: [
      {
        name: 'University admissions',
        exams: [
          exam('CUET UG', 'National'),
          exam('CUET PG', 'National'),
          exam('ICAR AIEEA PG', 'National'),
          exam('JAM', 'National'),
        ],
      },
      {
        name: 'Science & research entrances',
        exams: [
          exam('IISER Aptitude Test', 'National'),
          exam('NEST', 'National'),
          exam('JEST', 'National'),
          exam('ISI Admission Test', 'Institute'),
          exam('CMI Entrance Examination', 'Institute'),
          exam('TIFR Graduate School Admissions', 'Institute'),
        ],
      },
    ],
    sources: [
      { label: 'NTA CUET UG', url: 'https://cuet.nta.nic.in/' },
      { label: 'CUET PG', url: 'https://exams.nta.ac.in/CUET-PG/' },
      { label: 'GATE & JAM', url: 'https://www.iitg.ac.in/gate-jam/' },
      { label: 'JEST', url: 'https://www.jest.org.in/' },
    ],
  },
  {
    slug: 'defence',
    name: 'Defence & Uniformed Services',
    description: 'Officer, Agniveer, paramilitary, Coast Guard, and armed-forces recruitment tests.',
    icon: 'shield',
    tone: 'green',
    groups: [
      {
        name: 'Officer entry',
        exams: [
          exam('UPSC NDA & Naval Academy', 'National'),
          exam('UPSC Combined Defence Services', 'National'),
          exam('UPSC CAPF Assistant Commandant', 'National'),
          exam('AFCAT', 'National'),
          exam('Territorial Army Officer', 'National'),
          exam('Indian Navy Entrance Test', 'National'),
        ],
      },
      {
        name: 'Agniveer & other entries',
        exams: [
          exam('Indian Army Agniveer Common Entrance Examination', 'National'),
          exam('Indian Navy Agniveer SSR & MR', 'National'),
          exam('Indian Air Force Agniveervayu', 'National'),
          exam('Indian Coast Guard CGEPT', 'National'),
        ],
      },
    ],
    sources: [
      { label: 'UPSC active examinations', url: 'https://www.upsc.gov.in/examinations/active-exams' },
      { label: 'Agniveer recruitment', url: 'https://www.india.gov.in/category/defence-foreign-affairs/subcategory/defence/details/website-of-agniveer-recruitment-scheme' },
      { label: 'AFCAT', url: 'https://afcat.cdac.in/' },
    ],
  },
  {
    slug: 'law',
    name: 'Law & Judiciary',
    description: 'Undergraduate and postgraduate law admissions, bar, and state judiciary tests.',
    icon: 'scale',
    tone: 'orange',
    groups: [
      {
        name: 'Law admissions',
        exams: [
          exam('CLAT UG', 'National'),
          exam('CLAT PG', 'National'),
          exam('AILET UG', 'Institute'),
          exam('AILET PG', 'Institute'),
          exam('SLAT', 'Institute'),
          exam('MH CET Law: 5 Year LLB', 'State'),
          exam('MH CET Law: 3 Year LLB', 'State'),
          exam('AP LAWCET', 'State'),
          exam('TG LAWCET', 'State'),
        ],
      },
      {
        name: 'Professional & judiciary',
        exams: [
          exam('All India Bar Examination', 'National'),
          exam('State Judicial Services Examinations', 'State'),
        ],
      },
    ],
    sources: [
      { label: 'Consortium of NLUs: CLAT', url: 'https://consortiumofnlus.ac.in/' },
      { label: 'NLU Delhi: AILET', url: 'https://nationallawuniversitydelhi.in/' },
      { label: 'All India Bar Examination', url: 'https://www.allindiabarexamination.com/' },
    ],
  },
  {
    slug: 'teaching-research',
    name: 'Teaching & Research',
    description: 'Teacher eligibility, lecturer eligibility, school recruitment, and research fellowship tests.',
    icon: 'teacher',
    tone: 'violet',
    groups: [
      {
        name: 'Eligibility & research',
        exams: [
          exam('CTET', 'National'),
          exam('UGC NET', 'National'),
          exam('CSIR UGC NET', 'National'),
          exam('State Eligibility Test / SLET', 'State'),
          exam('DBT BET', 'National'),
          exam('ICMR JRF Entrance', 'National'),
        ],
      },
      {
        name: 'Teacher recruitment',
        exams: [
          exam('KVS Teaching Recruitment', 'National'),
          exam('NVS Teaching Recruitment', 'National'),
          exam('DSSSB Teaching Recruitment', 'State'),
          exam('REET', 'State'),
          exam('UPTET', 'State'),
          exam('HTET', 'State'),
        ],
      },
    ],
    sources: [
      { label: 'CTET', url: 'https://ctet.nic.in/' },
      { label: 'NTA UGC NET', url: 'https://ugcnet.nta.ac.in/' },
      { label: 'NTA CSIR NET', url: 'https://csirnet.nta.ac.in/' },
    ],
  },
  {
    slug: 'commerce-professional',
    name: 'Commerce & Professional',
    description: 'Accounting, company secretaryship, cost accounting, actuarial, finance, and certification exams.',
    icon: 'briefcase',
    tone: 'rose',
    groups: [
      {
        name: 'Indian professional qualifications',
        exams: [
          exam('CA Foundation', 'National'),
          exam('CA Intermediate', 'National'),
          exam('CA Final', 'National'),
          exam('CSEET', 'National'),
          exam('CS Executive', 'National'),
          exam('CS Professional', 'National'),
          exam('CMA Foundation', 'National'),
          exam('CMA Intermediate', 'National'),
          exam('CMA Final', 'National'),
          exam('ACET', 'National'),
        ],
      },
      {
        name: 'Finance certifications',
        exams: [
          exam('CFA Level I, II & III', 'International'),
          exam('FRM Part I & II', 'International'),
          exam('NISM Certification Examinations', 'National'),
        ],
      },
    ],
    sources: [
      { label: 'ICAI examinations', url: 'https://www.icai.org/post/exam' },
      { label: 'ICSI', url: 'https://www.icsi.edu/' },
      { label: 'ICMAI examinations', url: 'https://icmai.in/studentswebsite/exam.php' },
      { label: 'Institute of Actuaries of India', url: 'https://actuariesindia.org/' },
    ],
  },
  {
    slug: 'design-hospitality',
    name: 'Design, Fashion & Hospitality',
    description: 'Design, fashion, creative aptitude, footwear, and hotel-management entrances.',
    icon: 'pencil',
    tone: 'orange',
    groups: [
      {
        name: 'Design & fashion',
        exams: [
          exam('NIFT Entrance Examination', 'National'),
          exam('NID Design Aptitude Test', 'National'),
          exam('UCEED', 'National'),
          exam('CEED', 'National'),
          exam('Pearl Academy Entrance', 'Institute'),
          exam('IIAD Design Aptitude Test', 'Institute'),
          exam('AIEED', 'Institute'),
          exam('Symbiosis Entrance Exam for Design', 'Institute'),
          exam('FDDI AIST', 'National'),
        ],
      },
      {
        name: 'Hospitality',
        exams: [
          exam('NCHM JEE', 'National'),
        ],
      },
    ],
    sources: [
      { label: 'NIFT admissions', url: 'https://www.nift.ac.in/admission' },
      { label: 'NID admissions', url: 'https://admissions.nid.edu/' },
      { label: 'UCEED', url: 'https://www.uceed.iitb.ac.in/' },
      { label: 'NCHM JEE', url: 'https://www.nchm.gov.in/information-about-nchm-jee-2026' },
    ],
  },
];

export const FEATURED_EXAM_CATEGORIES = EXAM_CATEGORIES.filter((category) =>
  ['government-jobs', 'engineering', 'medical', 'study-abroad', 'management', 'defence'].includes(category.slug),
);

export const CATALOG_EXAM_COUNT = EXAM_CATEGORIES.reduce(
  (total, category) => total + category.groups.reduce((groupTotal, group) => groupTotal + group.exams.length, 0),
  0,
);

export function getExamCategory(slug: string) {
  return EXAM_CATEGORIES.find((category) => category.slug === slug);
}

export function getCategoryExamCount(category: ExamCatalogCategory) {
  return category.groups.reduce((total, group) => total + group.exams.length, 0);
}
