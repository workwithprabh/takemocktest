import type { Question } from '../questions';

const SOURCE = {
  kind: 'original' as const,
  reference: 'TakeMockTest original practice aligned to the IBPS PO XVI Mains English Language section',
  url: 'https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf',
  checkedOn: '23 August 2026',
};

const MARKS = 20 / 40;
const PENALTY = MARKS / 4;

function question(
  id: string,
  topic: string,
  difficulty: 'easy' | 'medium' | 'hard',
  prompt: string,
  options: string[],
  correctIndex: number,
  explanation: string,
): Question {
  return {
    id,
    section: 'English Language',
    topic,
    difficulty,
    question: prompt,
    options,
    correctIndex,
    marks: MARKS,
    negativeMarking: PENALTY,
    explanation,
    source: SOURCE,
  };
}

export const IBPS_PO_MAINS_ENGLISH_2: Question[] = [
  question('ibps-po-m-en2-001', 'Subject-verb agreement', 'easy', 'Choose the correct completion: Neither the manager nor the clerks ___ aware of the new circular.', ['are', 'is', 'was', 'were'], 0, 'With "neither...nor", the verb agrees with the nearer subject "clerks" (plural), so "are" is correct.'),
  question('ibps-po-m-en2-002', 'Tense', 'medium', 'Choose the correct completion: By the time the officer reaches the counter tomorrow, the queue ___ already formed.', ['is', 'will have', 'has', 'was'], 1, 'An action completed before another future point uses the future perfect tense: "will have already formed".'),
  question('ibps-po-m-en2-003', 'Tense', 'medium', 'Choose the correct completion: She ___ for this bank since 2015.', ['works', 'is working', 'has been working', 'worked'], 2, 'An action that began in the past and continues to the present takes the present perfect continuous: "has been working".'),
  question('ibps-po-m-en2-004', 'Tense', 'medium', 'Choose the correct completion: The clerk ___ the ledger when the power went off.', ['updates', 'has updated', 'is updating', 'was updating'], 3, 'An action in progress when another past action interrupted it takes the past continuous: "was updating".'),
  question('ibps-po-m-en2-005', 'Preposition', 'easy', 'Choose the correct preposition: The applicant is eligible ___ a loan of up to five lakh rupees.', ['for', 'to', 'with', 'of'], 0, '"Eligible" is idiomatically followed by the preposition "for".'),
  question('ibps-po-m-en2-006', 'Preposition', 'easy', 'Choose the correct preposition: The staff was informed ___ the change in office timings.', ['of', 'about', 'on', 'at'], 1, '"Informed" is idiomatically followed by the preposition "about" when referring to a subject of information.'),
  question('ibps-po-m-en2-007', 'Preposition', 'easy', 'Choose the correct preposition: The new recruit is keen ___ learning the software quickly.', ['at', 'for', 'on', 'to'], 2, '"Keen" is idiomatically followed by the preposition "on".'),
  question('ibps-po-m-en2-008', 'Synonym', 'medium', 'Select the option nearest in meaning to the word "diligent".', ['Careless', 'Lazy', 'Indifferent', 'Hardworking'], 3, '"Diligent" means showing careful and persistent effort, closest in meaning to "hardworking".'),
  question('ibps-po-m-en2-009', 'Synonym', 'medium', 'Select the option nearest in meaning to the word "lucrative".', ['Profitable', 'Wasteful', 'Costly', 'Modest'], 0, '"Lucrative" means producing a great deal of profit, closest in meaning to "profitable".'),
  question('ibps-po-m-en2-010', 'Synonym', 'easy', 'Select the option nearest in meaning to the word "amicable".', ['Hostile', 'Friendly', 'Distant', 'Formal'], 1, '"Amicable" means characterized by friendliness and goodwill, closest in meaning to "friendly".'),
  question('ibps-po-m-en2-011', 'Antonym', 'medium', 'Choose the word opposite in meaning to "authentic".', ['Genuine', 'Original', 'Fake', 'Verified'], 2, '"Authentic" means genuine or real; its opposite is "fake".'),
  question('ibps-po-m-en2-012', 'Antonym', 'medium', 'Choose the word opposite in meaning to "abundant".', ['Plentiful', 'Ample', 'Copious', 'Scarce'], 3, '"Abundant" means present in great quantity; its opposite is "scarce".'),
  question('ibps-po-m-en2-013', 'Antonym', 'easy', 'Choose the word opposite in meaning to "cordial".', ['Hostile', 'Friendly', 'Warm', 'Pleasant'], 0, '"Cordial" means warm and friendly; its opposite is "hostile".'),
  question('ibps-po-m-en2-014', 'Idioms', 'medium', 'What does the idiom "to spill the beans" mean?', ['To spend money quickly', 'To reveal secret information', 'To cook a meal', 'To finish a task early'], 1, '"To spill the beans" means to reveal secret or confidential information, often unintentionally.'),
  question('ibps-po-m-en2-015', 'Idioms', 'medium', 'What does the idiom "to be on the same page" mean?', ['To read a book together', 'To disagree strongly', 'To have the same understanding', 'To sit in the same room'], 2, '"To be on the same page" means to have the same understanding or agreement about something.'),
  question('ibps-po-m-en2-016', 'Idioms', 'medium', 'What does the idiom "to go the extra mile" mean?', ['To travel a long distance', 'To finish work quickly', 'To take a shortcut', 'To make additional effort beyond what is required'], 3, '"To go the extra mile" means to make a greater effort than expected to achieve something.'),
  question('ibps-po-m-en2-017', 'One-word substitution', 'medium', 'Choose the word that means "one who cannot be corrected or reformed".', ['Incorrigible', 'Impeccable', 'Indelible', 'Inevitable'], 0, '"Incorrigible" describes a person or habit that cannot be corrected, improved, or reformed.'),
  question('ibps-po-m-en2-018', 'One-word substitution', 'medium', 'Choose the word that means "a person who is easily deceived or fooled".', ['Vigilant', 'Gullible', 'Shrewd', 'Skeptical'], 1, '"Gullible" describes someone who is easily deceived or tricked.'),
  question('ibps-po-m-en2-019', 'One-word substitution', 'easy', 'Choose the word that means "a person who loves and collects books".', ['Bibliographer', 'Biographer', 'Bibliophile', 'Bibliophobe'], 2, 'A "bibliophile" is a person who loves and collects books.'),
  question('ibps-po-m-en2-020', 'Error spotting', 'medium', 'Identify the part containing an error: The board of directors (A) / have approved (B) / the annual budget (C) / for the coming year (D).', ['Part B', 'Part A', 'Part C', 'Part D'], 0, '"Board of directors" is treated as a singular collective body here, so the verb should be "has approved". The error is in Part B.'),
  question('ibps-po-m-en2-021', 'Error spotting', 'medium', 'Identify the part containing an error: Each of the employees (A) / were given (B) / a performance bonus (C) / this quarter (D).', ['Part A', 'Part B', 'Part C', 'Part D'], 1, '"Each" is a singular pronoun and requires the singular verb "was given", not "were given". The error is in Part B.'),
  question('ibps-po-m-en2-022', 'Error spotting', 'medium', 'Identify the part containing an error: The customer, along with his family members, (A) / were waiting (B) / at the counter (C) / for nearly an hour (D).', ['Part A', 'Part C', 'Part D', 'Part B'], 3, 'A phrase introduced by "along with" does not change the number of the main subject, so the singular verb "was waiting" is required. The error is in Part B.'),
  question('ibps-po-m-en2-023', 'Sentence improvement', 'medium', 'Improve the underlined part: "The policy is beneficial for all customers."', ['beneficial with all customers', 'beneficial upon all customers', 'beneficial to all customers', 'beneficial at all customers'], 2, '"Beneficial" is idiomatically followed by the preposition "to".'),
  question('ibps-po-m-en2-024', 'Sentence improvement', 'medium', 'Improve the underlined part: "He has been working here since five years."', ['since five years', 'from five years', 'during five years', 'for five years'], 3, 'A duration of time (such as "five years") is introduced by "for", while "since" is used with a specific point in time.'),
  question('ibps-po-m-en2-025', 'Sentence improvement', 'hard', 'Improve the underlined part: "The manager insisted that the report was submitted immediately."', ['be submitted immediately', 'was submitted immediately', 'is submitted immediately', 'will submitted immediately'], 0, 'After "insisted that", the mandative subjunctive form "be submitted" is required.'),
  question('ibps-po-m-en2-026', 'Active and passive voice', 'easy', 'Choose the correct passive form of: "The auditor examined the accounts."', ['The accounts are examined by the auditor.', 'The accounts were examined by the auditor.', 'The auditor was examined by the accounts.', 'The accounts had examined the auditor.'], 1, 'The original sentence is in the past simple active voice, so the passive form uses "were" plus the past participle: "were examined".'),
  question('ibps-po-m-en2-027', 'Active and passive voice', 'medium', 'Choose the correct active form of: "The cheque was signed by the director."', ['The director was signing the cheque.', 'The cheque signed the director.', 'The director signed the cheque.', 'The director has signed by the cheque.'], 2, 'The passive "was signed" is past simple, so the active form uses the past simple verb with the doer as subject: "The director signed the cheque."'),
  question('ibps-po-m-en2-028', 'Active and passive voice', 'medium', 'Choose the correct passive form of: "The bank will launch a new scheme next month."', ['A new scheme is launched by the bank next month.', 'A new scheme will launch the bank next month.', 'The bank will be launched by a new scheme next month.', 'A new scheme will be launched by the bank next month.'], 3, 'The future active voice becomes "will be + past participle" in the passive: "will be launched".'),
  question('ibps-po-m-en2-029', 'Para-jumbles', 'hard', 'Arrange the parts to form a coherent sentence: P: reviewed the loan file; Q: before forwarding it; R: the officer carefully; S: to the sanctioning authority.', ['R, P, Q, S', 'P, R, Q, S', 'Q, R, P, S', 'S, R, P, Q'], 0, 'The logical order is: the officer carefully (R) reviewed the loan file (P) before forwarding it (Q) to the sanctioning authority (S) — giving R, P, Q, S.'),
  question('ibps-po-m-en2-030', 'Para-jumbles', 'hard', 'Arrange the parts to form a coherent sentence: P: The manager reviewed the application; Q: verified the documents; R: and approved the loan; S: within three days.', ['Q, P, R, S', 'P, Q, R, S', 'R, P, Q, S', 'P, R, Q, S'], 1, 'The parts read in order as a single coherent sentence: the manager reviewed the application (P), verified the documents (Q), and approved the loan (R), within three days (S).'),
  question('ibps-po-m-en2-031', 'Para-jumbles', 'hard', 'Arrange the sentences logically: A. the technician then tested each connection; B. before finally restoring power to the building; C. carefully inspected the wiring; D. the electrician first switched off the mains.', ['C, D, A, B', 'A, C, D, B', 'D, C, A, B', 'B, D, C, A'], 2, 'The logical sequence is: the electrician first switched off the mains (D), carefully inspected the wiring (C), the technician then tested each connection (A), before finally restoring power to the building (B) — giving D, C, A, B.'),
  question('ibps-po-m-en2-032', 'Connectors', 'medium', 'Choose the best connector: The train was delayed by an hour; ___, most passengers reached their meetings on time.', ['therefore', 'similarly', 'moreover', 'nevertheless'], 3, '"Nevertheless" signals a contrast between the delay and the on-time arrival that followed despite it.'),
  question('ibps-po-m-en2-033', 'Connectors', 'medium', 'Choose the best connector: Interest rates increased sharply; ___, loan applications declined.', ['consequently', 'although', 'unlike', 'whereas'], 0, '"Consequently" signals that the second clause is a direct result of the first — higher rates led to fewer applications.'),
  question('ibps-po-m-en2-034', 'Connectors', 'medium', 'Choose the best connector: The manager praised the team\'s effort; ___, she pointed out a few areas for improvement.', ['similarly', 'however', 'therefore', 'moreover'], 1, '"However" signals a contrast between the praise given and the improvement areas that followed.'),
  question('ibps-po-m-en2-035', 'Cloze test', 'easy', 'Choose the correct word: The revised charges will come ___ effect from the first of next month.', ['in', 'at', 'into', 'on'], 2, '"Come into effect" is the standard idiomatic phrase meaning to become operative or valid.'),
  question('ibps-po-m-en2-036', 'Cloze test', 'easy', 'Choose the correct word: Customers are requested to keep their KYC documents ___ to date.', ['at', 'on', 'in', 'up'], 3, '"Up to date" is the standard idiomatic phrase meaning current or updated.'),
  question('ibps-po-m-en2-037', 'Spelling', 'easy', 'Pick the option that is spelled correctly.', ['Necessary', 'Neccessary', 'Necesary', 'Neccesary'], 0, '"Necessary" is the correct spelling, with a single "c" and a double "s".'),
  question('ibps-po-m-en2-038', 'Spelling', 'easy', 'Identify the correctly spelled word from the options below.', ['Comittee', 'Committee', 'Commitee', 'Committe'], 1, '"Committee" is the correct spelling, with a double "m", double "t", and double "e".'),
  question('ibps-po-m-en2-039', 'Reading comprehension', 'medium', 'Read the statement: "Mobile banking apps allow customers to transfer funds instantly, but banks still require additional authentication for amounts above a certain limit." What can be inferred?', ['Mobile apps never require authentication.', 'Larger transfers are always instant.', 'There is a trade-off between transaction speed and security for larger amounts.', 'Banks have removed authentication for all transactions.'], 2, 'The statement links the convenience of instant transfers to an additional authentication requirement above a limit, indicating a deliberate trade-off between speed and security for larger amounts.'),
  question('ibps-po-m-en2-040', 'Direct and indirect speech', 'medium', 'Choose the correct indirect speech form of: The manager said, "I will review the file tomorrow."', ['The manager said that he will review the file tomorrow.', 'The manager said that he reviews the file the next day.', 'The manager said that he has reviewed the file tomorrow.', 'The manager said that he would review the file the next day.'], 3, 'In reported speech, "will" shifts back to "would" and the time reference "tomorrow" shifts to "the next day", since the reporting happens after the original moment of speech.'),
];
