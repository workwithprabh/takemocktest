import type { Question, QuestionSource } from '../questions';

const checkedOn = '3 August 2026';
const source = (reference: string, url: string): QuestionSource => ({ kind: 'original', reference, url, checkedOn });

const nielit = source(
  'NIELIT Course on Computer Concepts syllabus and computer-literacy modules',
  'https://www.nielit.gov.in/sites/default/files/syllabus_CCC.pdf',
);
const nielitPlus = source(
  'NIELIT Course on Computer Concepts Plus syllabus outline',
  'https://www.nielit.gov.in/aizawl/aizawl/content/course-computer-concepts-plus-ccc-plus',
);
const windowsShortcuts = source(
  'Keyboard shortcuts in Windows, Microsoft Support',
  'https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec',
);
const officeFormats = source(
  'Learn about file formats, Microsoft Support',
  'https://support.microsoft.com/en-gb/office/learn-about-file-formats-56dc3b55-7681-402e-a727-c59fa0884b30',
);
const mailMerge = source(
  'Set up a new mail merge list with Word, Microsoft Support',
  'https://support.microsoft.com/en-gb/office/set-up-a-new-mail-merge-list-with-word-1a752328-b1b5-4865-96a2-e0acd561fe6f',
);
const excelFormulas = source(
  'Overview of formulas in Excel, Microsoft Support',
  'https://support.microsoft.com/en-us/Excel/get-started/overview-of-formulas-in-excel',
);
const powerpointShortcuts = source(
  'Use keyboard shortcuts to create PowerPoint presentations, Microsoft Support',
  'https://support.microsoft.com/en-us/accessibility/powerpoint/use-keyboard-shortcuts-to-create-powerpoint-presentations',
);
const outlookBcc = source(
  'Create, reply to, or forward email messages in Outlook.com, Microsoft Support',
  'https://support.microsoft.com/en-us/outlook/create-reply-to-or-forward-email-messages-in-outlook-com',
);
const dns = source(
  'What is DNS?, Cloudflare Learning Paths',
  'https://developers.cloudflare.com/learning-paths/cybersafe/concepts/what-is-dns/',
);
const secureOurWorld = source(
  'Secure Our World, Cybersecurity and Infrastructure Security Agency',
  'https://www.cisa.gov/secure-our-world',
);
const ransomware = source(
  'Ransomware guidance, Cybersecurity and Infrastructure Security Agency',
  'https://www.cisa.gov/sites/default/files/publications/Ransomware%20General%20Security%20Postcard%206.23.2021_508c.pdf',
);

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
    section: 'Computer Knowledge Test',
    topic,
    difficulty,
    question: prompt,
    options,
    correctIndex,
    explanation,
    source: provenance,
  };
}

export const SSC_CGL_TIER2_COMPUTER_KNOWLEDGE_1: Question[] = [
  question('ssc-cgl-t2-ck1-001', 'Computer fundamentals', 'easy', 'Which component primarily executes program instructions and coordinates a computer\'s operations?', ['Central Processing Unit', 'Monitor', 'Keyboard', 'Printer'], 0, 'The Central Processing Unit executes program instructions and coordinates the computer\'s processing operations.', nielit),
  question('ssc-cgl-t2-ck1-002', 'Computer memory', 'easy', 'Which memory normally loses its stored data when power is switched off?', ['ROM', 'RAM', 'Solid-state drive', 'Optical disc'], 1, 'RAM is volatile working memory, so its contents normally disappear when power is removed.', nielit),
  question('ssc-cgl-t2-ck1-003', 'Input and output devices', 'easy', 'Which of the following is an input device?', ['Projector', 'Speaker', 'Scanner', 'Printer'], 2, 'A scanner captures text or images and sends that data into the computer, making it an input device.', nielit),
  question('ssc-cgl-t2-ck1-004', 'Input and output devices', 'easy', 'Which device produces a hard copy of a document?', ['Microphone', 'Webcam', 'Mouse', 'Printer'], 3, 'A printer produces a physical, or hard-copy, output from digital content.', nielit),
  question('ssc-cgl-t2-ck1-005', 'Backups', 'medium', 'Which option is best suited to keeping a separate offline backup of important files?', ['An external drive disconnected after backup', 'A second shortcut on the same desktop', 'The Recycle Bin on the same computer', 'Another folder on the same drive'], 0, 'A separate drive that is disconnected after the backup keeps another copy away from the computer and reduces exposure to failures or ransomware affecting the main system.', ransomware),
  question('ssc-cgl-t2-ck1-006', 'Windows and File Explorer', 'easy', 'Which Windows keyboard shortcut opens File Explorer?', ['Windows key + R', 'Windows key + E', 'Windows key + L', 'Windows key + P'], 1, 'Windows key + E opens File Explorer.', windowsShortcuts),
  question('ssc-cgl-t2-ck1-007', 'Keyboard shortcuts', 'easy', 'Which shortcut normally reverses the most recent editable action in Windows applications?', ['Ctrl + P', 'Ctrl + S', 'Ctrl + Z', 'Ctrl + F'], 2, 'Ctrl + Z is the standard shortcut for Undo in Windows and Microsoft Office applications.', windowsShortcuts),
  question('ssc-cgl-t2-ck1-008', 'Keyboard shortcuts', 'easy', 'What does Alt + F4 normally do in Windows?', ['Opens Search', 'Locks the computer', 'Opens File Explorer', 'Closes the active window'], 3, 'Alt + F4 closes the active window; when no windows are open, Windows may show the shutdown prompt.', windowsShortcuts),
  question('ssc-cgl-t2-ck1-009', 'Microsoft Office file formats', 'easy', 'Which extension is the default Open XML format for a standard Microsoft Excel workbook?', ['.xlsx', '.docx', '.pptx', '.txt'], 0, 'The default Open XML workbook format used by Excel is .xlsx.', officeFormats),
  question('ssc-cgl-t2-ck1-010', 'Microsoft Word', 'medium', 'What is the main purpose of Mail Merge in Microsoft Word?', ['To calculate values in a table', 'To create personalised documents from a main document and recipient list', 'To compress images in a document', 'To convert slides into a video'], 1, 'Mail Merge combines a main document with recipient data so Word can create personalised letters, labels, or similar bulk documents.', mailMerge),
  question('ssc-cgl-t2-ck1-011', 'Microsoft Excel', 'easy', 'Which symbol must appear first when entering a formula in Microsoft Excel?', ['#', '@', '=', '&'], 2, 'Excel formulas begin with an equal sign, which tells Excel to calculate the expression that follows.', excelFormulas),
  question('ssc-cgl-t2-ck1-012', 'Microsoft Excel', 'medium', 'Which Excel reference remains fixed when a formula is copied to another cell?', ['A1', 'A$1', '$A1', '$A$1'], 3, '$A$1 is an absolute reference, so neither its row nor its column changes when the formula is copied.', excelFormulas),
  question('ssc-cgl-t2-ck1-013', 'Microsoft PowerPoint', 'easy', 'Which key starts a PowerPoint slide show from the beginning?', ['F5', 'F2', 'F7', 'F12'], 0, 'In PowerPoint, F5 starts the slide show from the beginning.', powerpointShortcuts),
  question('ssc-cgl-t2-ck1-014', 'Email', 'medium', 'What is the defining feature of the Bcc field in an email?', ['It blocks every attachment', 'Its recipient names are hidden from the other recipients', 'It sends the message without a subject', 'It marks the message as spam'], 1, 'Recipients entered in Bcc receive the message, but their names are hidden from the other recipients.', outlookBcc),
  question('ssc-cgl-t2-ck1-015', 'Internet fundamentals', 'medium', 'What does the Domain Name System mainly do when you open a website?', ['Encrypts every file on the device', 'Creates the webpage layout', 'Translates a domain name into an IP address', 'Stores the website permanently on the keyboard'], 2, 'DNS translates a human-readable domain name into the IP address used to locate the website\'s server.', dns),
  question('ssc-cgl-t2-ck1-016', 'Computer networks', 'easy', 'Which network type is commonly used to connect devices within a limited area such as one office or building?', ['WAN', 'MAN', 'PAN over a whole country', 'LAN'], 3, 'A Local Area Network, or LAN, connects devices within a relatively limited area such as an office, laboratory, or building.', nielitPlus),
  question('ssc-cgl-t2-ck1-017', 'Cybersecurity', 'easy', 'Which description best matches phishing?', ['A deceptive message designed to make someone reveal information or open harmful content', 'A method of cooling a processor', 'A feature for arranging files alphabetically', 'A spreadsheet calculation error'], 0, 'Phishing uses deceptive messages to trick people into revealing sensitive information, opening harmful attachments, or following malicious links.', secureOurWorld),
  question('ssc-cgl-t2-ck1-018', 'Cybersecurity', 'easy', 'What does multi-factor authentication require?', ['Only a longer username', 'More than one type of proof to access an account', 'A public password shared by the team', 'Disabling every security update'], 1, 'Multi-factor authentication adds another form of verification beyond a password, such as a code, device, or biometric factor.', secureOurWorld),
  question('ssc-cgl-t2-ck1-019', 'Cybersecurity', 'medium', 'Which password practice is recommended for protecting several online accounts?', ['Reuse one short password everywhere', 'Store every password in an unprotected public document', 'Use strong unique passwords and a password manager', 'Share passwords by email for safekeeping'], 2, 'Strong unique passwords limit the damage from one compromised account, and a password manager helps create and store them safely.', secureOurWorld),
  question('ssc-cgl-t2-ck1-020', 'Cybersecurity', 'medium', 'Which type of malware commonly encrypts files or blocks access and then demands payment?', ['Adware', 'A browser bookmark', 'A device driver', 'Ransomware'], 3, 'Ransomware is malicious software that denies access to data or systems, often through encryption, and demands a ransom.', ransomware),
];
