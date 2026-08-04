import type { Question, QuestionSource } from '../questions';

const checkedOn = '3 August 2026';
const source = (reference: string, url: string): QuestionSource => ({ kind: 'original', reference, url, checkedOn });

const nielit = source('NIELIT Course on Computer Concepts syllabus and computer-literacy modules', 'https://www.nielit.gov.in/sites/default/files/syllabus_CCC.pdf');
const nielitPlus = source('NIELIT Course on Computer Concepts Plus syllabus outline', 'https://www.nielit.gov.in/aizawl/aizawl/content/course-computer-concepts-plus-ccc-plus');
const windowsShortcuts = source('Keyboard shortcuts in Windows, Microsoft Support', 'https://support.microsoft.com/en-us/windows/keyboard-shortcuts-in-windows-dcc61a57-8ff0-cffe-9796-cb9706c75eec');
const officeFormats = source('Learn about file formats, Microsoft Support', 'https://support.microsoft.com/en-gb/office/learn-about-file-formats-56dc3b55-7681-402e-a727-c59fa0884b30');
const excelSum = source('SUM function, Microsoft Support', 'https://support.microsoft.com/en-us/excel/functions/sum-function');
const excelReferences = source('Overview of formulas in Excel, Microsoft Support', 'https://support.microsoft.com/en-us/Excel/get-started/overview-of-formulas-in-excel');
const powerpointShortcuts = source('Use keyboard shortcuts to create PowerPoint presentations, Microsoft Support', 'https://support.microsoft.com/en-us/accessibility/powerpoint/use-keyboard-shortcuts-to-create-powerpoint-presentations');
const outlookAttachments = source('Add pictures or attach files to emails in Outlook, Microsoft Support', 'https://support.microsoft.com/en-US/Outlook/mail/add-pictures-or-attach-files-to-emails-in-outlook');
const secureOurWorld = source('Secure Our World, Cybersecurity and Infrastructure Security Agency', 'https://www.cisa.gov/secure-our-world');

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

export const SSC_CGL_TIER2_COMPUTER_KNOWLEDGE_2: Question[] = [
  question('ssc-cgl-t2-ck2-001', 'Computer fundamentals', 'easy', 'Which part of the CPU performs arithmetic calculations and logical comparisons?', ['Arithmetic Logic Unit', 'Power supply unit', 'Hard disk drive', 'Display adapter'], 0, 'The Arithmetic Logic Unit, or ALU, performs arithmetic and logical operations inside the CPU.', nielit),
  question('ssc-cgl-t2-ck2-002', 'Computer memory', 'easy', 'Which type of memory normally retains its contents when the computer is switched off?', ['RAM', 'ROM', 'Cache used as working memory', 'CPU register'], 1, 'ROM is non-volatile memory and normally retains stored instructions without power.', nielit),
  question('ssc-cgl-t2-ck2-003', 'Input and output devices', 'medium', 'Which technology converts scanned printed characters into machine-readable text?', ['OMR', 'MICR', 'OCR', 'Plotting'], 2, 'Optical Character Recognition, or OCR, identifies printed characters in an image and converts them into editable or searchable text.', nielit),
  question('ssc-cgl-t2-ck2-004', 'Input and output devices', 'easy', 'Which output device is commonly used for large engineering drawings and maps?', ['Joystick', 'Barcode reader', 'Webcam', 'Plotter'], 3, 'A plotter produces large, precise line drawings such as engineering plans and maps.', nielit),
  question('ssc-cgl-t2-ck2-005', 'Windows and File Explorer', 'medium', 'What does Shift + Delete do to a selected item in Windows?', ['Deletes it without first moving it to the Recycle Bin', 'Renames it', 'Copies it to the clipboard', 'Opens its properties'], 0, 'Shift + Delete deletes the selected item without moving it to the Recycle Bin first.', windowsShortcuts),
  question('ssc-cgl-t2-ck2-006', 'Keyboard shortcuts', 'easy', 'Which Windows shortcut displays or hides the desktop?', ['Windows key + L', 'Windows key + D', 'Windows key + E', 'Windows key + R'], 1, 'Windows key + D displays the desktop and can be pressed again to restore the windows.', windowsShortcuts),
  question('ssc-cgl-t2-ck2-007', 'Keyboard shortcuts', 'easy', 'Which shortcut opens Task Manager directly in Windows?', ['Ctrl + Alt + A', 'Ctrl + Shift + T', 'Ctrl + Shift + Esc', 'Alt + Shift + Esc'], 2, 'Ctrl + Shift + Esc opens Task Manager.', windowsShortcuts),
  question('ssc-cgl-t2-ck2-008', 'Keyboard shortcuts', 'easy', 'Which shortcut starts a screen snip for part of the screen in Windows?', ['Windows key + P', 'Windows key + F', 'Windows key + Ctrl + S', 'Windows key + Shift + S'], 3, 'Windows key + Shift + S opens screen snipping so the user can capture part of the screen.', windowsShortcuts),
  question('ssc-cgl-t2-ck2-009', 'Microsoft Office file formats', 'easy', 'Which extension is the standard Open XML format for a Microsoft Word document?', ['.docx', '.xlsx', '.pptx', '.csv'], 0, 'The standard Open XML document format used by Word is .docx.', officeFormats),
  question('ssc-cgl-t2-ck2-010', 'Microsoft Excel', 'easy', 'Which Excel formula correctly adds the values from cells A1 through A5?', ['=ADD(A1-A5)', '=SUM(A1:A5)', '=TOTAL(A1;A5)', '=A1:A5+'], 1, 'SUM adds values in a range, and A1:A5 denotes every cell from A1 through A5.', excelSum),
  question('ssc-cgl-t2-ck2-011', 'Microsoft Excel', 'medium', 'Which Excel cell reference is relative and normally adjusts when copied to another cell?', ['$A$1', '$A1', 'A1', 'A$1'], 2, 'A1 is a relative reference. Its row and column can both adjust when the formula is copied.', excelReferences),
  question('ssc-cgl-t2-ck2-012', 'Microsoft PowerPoint', 'easy', 'Which PowerPoint shortcut inserts a new slide?', ['Ctrl + N', 'Ctrl + Shift + N', 'Alt + M', 'Ctrl + M'], 3, 'Ctrl + M inserts a new slide in a PowerPoint presentation.', powerpointShortcuts),
  question('ssc-cgl-t2-ck2-013', 'Email', 'easy', 'What is an email attachment?', ['A file sent along with an email message', 'The recipient address', 'A folder that stores deleted mail', 'A rule that blocks every message'], 0, 'An attachment is a file, such as a document or picture, included with an email message.', outlookAttachments),
  question('ssc-cgl-t2-ck2-014', 'Internet fundamentals', 'easy', 'What does a URL identify on the internet?', ['Only the computer\'s keyboard layout', 'The address of a resource', 'The speed of a processor', 'A printer cartridge type'], 1, 'A Uniform Resource Locator identifies the address or location of a resource on a network such as the web.', nielit),
  question('ssc-cgl-t2-ck2-015', 'Internet fundamentals', 'medium', 'Which protocol is the secure, encrypted form commonly used for web browsing?', ['FTP', 'HTTP without encryption', 'HTTPS', 'SMTP'], 2, 'HTTPS is HTTP used over an encrypted connection, helping protect data exchanged between a browser and website.', nielitPlus),
  question('ssc-cgl-t2-ck2-016', 'Computer networks', 'medium', 'In which network topology are devices commonly connected to one central hub or switch?', ['Bus topology', 'Ring topology', 'Mesh topology', 'Star topology'], 3, 'In a star topology, each device connects to a central hub or switch.', nielitPlus),
  question('ssc-cgl-t2-ck2-017', 'Cybersecurity', 'easy', 'Which action is most appropriate when antivirus software reports a suspicious file?', ['Quarantine or remove it according to the security tool\'s guidance', 'Email it to every contact', 'Rename it and open it immediately', 'Disable the antivirus permanently'], 0, 'Quarantining or removing a detected threat prevents it from running while preserving a controlled security response.', secureOurWorld),
  question('ssc-cgl-t2-ck2-018', 'Cybersecurity', 'easy', 'Why should operating-system and application updates be installed promptly?', ['To make passwords public', 'To receive security fixes and patches', 'To disable backups', 'To remove all file permissions'], 1, 'Software updates often patch known security weaknesses and should be applied promptly.', secureOurWorld),
  question('ssc-cgl-t2-ck2-019', 'Cybersecurity', 'medium', 'An unexpected message links to a look-alike login page and asks for your password. What type of attack is this?', ['Data compression', 'Defragmentation', 'Phishing', 'File indexing'], 2, 'A deceptive message and fake login page designed to steal credentials are characteristic of phishing.', secureOurWorld),
  question('ssc-cgl-t2-ck2-020', 'Cybersecurity', 'medium', 'What is the main purpose of a firewall?', ['To create presentation slides', 'To increase monitor brightness', 'To correct spelling in documents', 'To monitor and control network traffic according to security rules'], 3, 'A firewall filters incoming and outgoing network traffic according to configured security rules.', nielitPlus),
];
