import type { Question } from '../questions';

const source = {
  kind: 'original' as const,
  reference: 'SEBI Officer Grade A (Assistant Manager) Recruitment 2025 official notification — Phase I, Paper 2, General Stream (Companies Act)',
  url: 'https://www.sebi.gov.in/sebi_data/careerfiles/oct-2025/1761782417659.pdf',
  checkedOn: '24 August 2026',
};

export const SEBI_GRADE_A_PHASE_1_PAPER_2_COMPANIES_ACT_2: Question[] = [
  { id: 'sebi-ga-p2-ca2-001', section: 'Companies Act', topic: 'Types of Companies', difficulty: 'medium', question: 'Under the Companies Act, 2013, a Private Limited Company can have a maximum of how many members?', options: ['200', '50', '100', '7'], correctIndex: 0, explanation: 'The Companies Act, 2013 permits a Private Limited Company to have a maximum of 200 members.', source },
  { id: 'sebi-ga-p2-ca2-002', section: 'Companies Act', topic: 'Board of Directors', difficulty: 'medium', question: 'As per the Companies Act, 2013, a public company must have a minimum of how many directors?', options: ['2', '1', '5', '3'], correctIndex: 3, explanation: 'The Companies Act, 2013 requires a public company to have a minimum of 3 directors on its board.', source },
  { id: 'sebi-ga-p2-ca2-003', section: 'Companies Act', topic: 'Types of Companies', difficulty: 'medium', question: 'A One Person Company (OPC), introduced by the Companies Act, 2013, can be formed with a minimum of how many members?', options: ['3', '2', '1', '5'], correctIndex: 2, explanation: 'A One Person Company (OPC) can be formed with just a single member, a category introduced by the Companies Act, 2013.', source },
  { id: 'sebi-ga-p2-ca2-004', section: 'Companies Act', topic: 'Constitutional Documents', difficulty: 'medium', question: "The clause in the Memorandum of Association that states the objects for which a company is established is called the:", options: ['Name Clause', 'Objects Clause', 'Liability Clause', 'Capital Clause'], correctIndex: 1, explanation: 'The Objects Clause of the Memorandum of Association states the purposes and objects for which the company is established.', source },
  { id: 'sebi-ga-p2-ca2-005', section: 'Companies Act', topic: 'Company Meetings', difficulty: 'medium', question: 'As per the Companies Act, 2013, the first Annual General Meeting (AGM) of a company must be held within how many months of the close of its first financial year?', options: ['9 months', '6 months', '12 months', '3 months'], correctIndex: 0, explanation: "The Companies Act, 2013 requires a company's first AGM to be held within 9 months of the close of its first financial year.", source },
  { id: 'sebi-ga-p2-ca2-006', section: 'Companies Act', topic: 'Constitutional Documents', difficulty: 'medium', question: "A company's Articles of Association can generally be altered by passing which type of resolution at a general meeting?", options: ['An ordinary resolution', 'A special resolution', 'A board resolution alone, with no shareholder approval', 'A resolution requiring unanimous consent of all members'], correctIndex: 1, explanation: "A company's Articles of Association are generally altered by passing a special resolution at a general meeting.", source },
];
