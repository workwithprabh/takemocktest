import type { Question } from '../questions';

const source = {
  kind: 'original' as const,
  reference: 'SEBI Officer Grade A (Assistant Manager) Recruitment 2025 official notification — Phase I, Paper 2, General Stream (Companies Act)',
  url: 'https://www.sebi.gov.in/sebi_data/careerfiles/oct-2025/1761782417659.pdf',
  checkedOn: '6 August 2026',
};

export const SEBI_GRADE_A_PHASE_1_PAPER_2_COMPANIES_ACT_1: Question[] = [
  { id: 'sebi-ga-p2-ca-001', section: 'Companies Act', topic: 'Types of Companies', difficulty: 'medium', question: 'Under the Companies Act, 2013, a Private Limited Company must have a minimum of how many members?', options: ['1', '2', '3', '7'], correctIndex: 1, explanation: 'The Companies Act, 2013 requires a Private Limited Company to have a minimum of 2 members (and a maximum of 200).', source },
  { id: 'sebi-ga-p2-ca-002', section: 'Companies Act', topic: 'Types of Companies', difficulty: 'medium', question: 'Under the Companies Act, 2013, a Public Limited Company must have a minimum of how many members?', options: ['2', '5', '7', '10'], correctIndex: 2, explanation: 'The Companies Act, 2013 requires a Public Limited Company to have a minimum of 7 members, with no upper limit.', source },
  { id: 'sebi-ga-p2-ca-003', section: 'Companies Act', topic: 'Board of Directors', difficulty: 'medium', question: 'As per the Companies Act, 2013, a private company must have a minimum of how many directors?', options: ['1', '2', '3', '5'], correctIndex: 1, explanation: 'The Companies Act, 2013 requires a private company to have a minimum of 2 directors on its board.', source },
  { id: 'sebi-ga-p2-ca-004', section: 'Companies Act', topic: 'Constitutional Documents', difficulty: 'medium', question: "The document that defines the scope of a company's business activities and its relationship with the outside world is called the:", options: ['Memorandum of Association', 'Articles of Association', 'Prospectus', 'Annual Report'], correctIndex: 0, explanation: "The Memorandum of Association defines a company's objects, scope of activities, and its relationship with the outside world.", source },
  { id: 'sebi-ga-p2-ca-005', section: 'Companies Act', topic: 'Constitutional Documents', difficulty: 'medium', question: "The document that contains the internal rules and regulations governing the management of a company's affairs is called the:", options: ['Articles of Association', 'Memorandum of Association', 'Certificate of Incorporation', 'Statutory Declaration'], correctIndex: 0, explanation: "The Articles of Association contain the internal rules and regulations governing a company's day-to-day management and administration.", source },
  { id: 'sebi-ga-p2-ca-006', section: 'Companies Act', topic: 'Company Meetings', difficulty: 'medium', question: 'As per the Companies Act, 2013, every company (other than a One Person Company) must hold an Annual General Meeting (AGM) at least once every:', options: ['Financial quarter', 'Two calendar years', 'Six months', 'Calendar year'], correctIndex: 3, explanation: 'The Companies Act, 2013 requires every company, except a One Person Company, to hold an Annual General Meeting at least once every calendar year.', source },
];
