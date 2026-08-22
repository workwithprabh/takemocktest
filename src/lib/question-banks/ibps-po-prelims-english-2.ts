import type { Question } from '../questions';

const SOURCE = {
  kind: 'original' as const,
  reference: 'TakeMockTest original practice aligned to the IBPS PO XVI Prelims English Language section',
  url: 'https://www.ibps.in/wp-content/uploads/Detailed-Notification_CRP-PO-XVI_Final_V1_30.06.2026.pdf',
  checkedOn: '22 August 2026',
};

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
    marks: 1,
    negativeMarking: 0.25,
    explanation,
    source: SOURCE,
  };
}

export const IBPS_PO_PRELIMS_ENGLISH_2: Question[] = [
  question('ibps-po-p2-eng-001', 'Subject-verb agreement', 'easy', 'Choose the correct completion: The committee ___ its decision tomorrow.', ['announces', 'announce', 'are announcing', 'have announced'], 0, 'A collective noun like "committee" is treated as a singular unit here, so it takes the singular verb "announces".'),
  question('ibps-po-p2-eng-002', 'Subject-verb agreement', 'easy', 'Choose the correct completion: Each of the boxes ___ labelled clearly.', ['is', 'are', 'were', 'have been'], 0, '"Each" is a singular pronoun and takes the singular verb "is".'),
  question('ibps-po-p2-eng-003', 'Tenses', 'medium', 'Choose the correct completion: By next month, she ___ here for a decade.', ['has worked', 'will have worked', 'will work', 'worked'], 1, 'A future action completed before another future point uses the future perfect tense: "will have worked".'),
  question('ibps-po-p2-eng-004', 'Prepositions', 'easy', 'Choose the correct preposition: He is not eligible ___ this scholarship.', ['to', 'with', 'for', 'at'], 2, '"Eligible for" is the standard idiomatic construction.'),
  question('ibps-po-p2-eng-005', 'Vocabulary', 'medium', 'Choose the word closest in meaning to "lucid".', ['Confusing', 'Clear', 'Vague', 'Complex'], 1, '"Lucid" means expressed clearly and easy to understand; "Clear" is the closest synonym.'),
  question('ibps-po-p2-eng-006', 'Vocabulary', 'medium', 'Choose the word closest in meaning to "obsolete".', ['Outdated', 'Modern', 'Current', 'Popular'], 0, '"Obsolete" means no longer in use; "Outdated" is the closest synonym.'),
  question('ibps-po-p2-eng-007', 'Idioms', 'medium', 'What does the idiom "to call it a day" mean?', ['To celebrate', 'To argue', 'To plan ahead', 'To stop working for now'], 3, '"To call it a day" means to decide to stop doing something, usually work, for the time being.'),
  question('ibps-po-p2-eng-008', 'One-word substitution', 'medium', 'Choose the word that means "one who repairs shoes".', ['Tailor', 'Tanner', 'Cobbler', 'Weaver'], 2, 'A "cobbler" is a person who repairs shoes.'),
  question('ibps-po-p2-eng-009', 'Sentence connectors', 'medium', 'Choose the best connector: The report was late; ___, the board delayed its decision.', ['however', 'consequently', 'meanwhile', 'similarly'], 1, '"Consequently" signals that the delayed decision is a direct result of the late report.'),
  question('ibps-po-p2-eng-010', 'Prepositions', 'easy', 'Choose the correct preposition: The bank is responsible ___ safeguarding deposits.', ['for', 'to', 'of', 'with'], 0, '"Responsible for" is the standard idiomatic construction.'),
  question('ibps-po-p2-eng-011', 'Conjunctions', 'medium', 'Choose the correct conjunction: ___ he apologised, she remained upset.', ['Because', 'Unless', 'So that', 'Although'], 3, '"Although" correctly introduces a contrast between the apology and her continued upset.'),
  question('ibps-po-p2-eng-012', 'Conditionals', 'hard', 'Choose the correct completion: If the branch ___ closed early, customers would have been informed in advance.', ['has', 'have', 'had', 'having'], 2, 'A third conditional describing an unreal past situation uses "if" plus the past perfect: "had closed".'),
  question('ibps-po-p2-eng-013', 'Sentence correction', 'medium', 'Choose the correction for: "She don\'t want to attend the meeting."', ['don\'t want', 'doesn\'t want', 'doesn\'t wants', 'not wanting'], 1, 'The third-person singular subject "She" requires "doesn\'t want", not "don\'t want".'),
  question('ibps-po-p2-eng-014', 'Sentence improvement', 'medium', 'Improve the underlined part: "The number of errors in the report were surprising."', ['was surprising', 'were surprising', 'being surprising', 'surprised'], 0, '"The number of" takes a singular verb, so "were surprising" should be corrected to "was surprising".'),
  question('ibps-po-p2-eng-015', 'Correlative conjunctions', 'medium', 'Choose the correct pair: ___ the manager ___ his assistant attended the seminar.', ['Neither / or', 'Both / or', 'Not only / also', 'Either / or'], 3, '"Either...or" is the correct correlative conjunction pair for presenting two alternatives.'),
  question('ibps-po-p2-eng-016', 'Active and passive voice', 'medium', 'Choose the correct passive form of: "The bank will announce the results tomorrow."', ['The results are announced by the bank tomorrow.', 'The results were announced by the bank tomorrow.', 'The results will be announced by the bank tomorrow.', 'The bank will be announced by the results tomorrow.'], 2, 'The original sentence uses the future simple tense, so the passive form uses "will be" plus the past participle: "will be announced".'),
  question('ibps-po-p2-eng-017', 'Sentence arrangement', 'medium', 'Arrange the parts to form a coherent sentence: P: The clerk verified the signature; Q: matched it with the specimen; R: and approved the withdrawal; S: after checking the balance.', ['Q, P, S, R', 'P, Q, S, R', 'P, S, Q, R', 'R, S, Q, P'], 1, 'The natural sequence is: the clerk verified the signature (P), matched it with the specimen (Q), after checking the balance (S), and approved the withdrawal (R).'),
  question('ibps-po-p2-eng-018', 'Sentence arrangement', 'medium', 'Arrange the parts to form a coherent sentence: P: The bank launched a new app; Q: allowed instant fund transfers; R: and improved customer satisfaction; S: after months of testing.', ['P, S, Q, R', 'Q, P, R, S', 'P, Q, R, S', 'S, Q, P, R'], 0, 'The natural sequence is: the bank launched a new app (P), after months of testing (S), which allowed instant fund transfers (Q) and improved customer satisfaction (R).'),
  question('ibps-po-p2-eng-019', 'Sentence connectors', 'medium', 'Choose the best connector: Interest rates rose sharply; ___, loan demand slowed.', ['however', 'meanwhile', 'similarly', 'consequently'], 3, '"Consequently" signals that the slowdown in loan demand is a direct result of the rate rise.'),
  question('ibps-po-p2-eng-020', 'Inference', 'medium', 'Read the statement: "The bank reduced its processing fee for online applications to encourage digital adoption." What can be inferred?', ['The bank has stopped accepting offline applications.', 'Processing fees increased for offline applications.', 'The bank wants more customers to apply online.', 'The bank no longer charges any fees.'], 2, 'Reducing the online fee specifically to "encourage digital adoption" implies the bank wants more customers to apply online.'),
  question('ibps-po-p2-eng-021', 'Reading comprehension', 'medium', 'Read the passage: "A recent survey found that most customers prefer mobile banking for routine transactions but still visit branches for complex issues like loan applications." What is the main idea?', ['Branches are no longer used by any customer.', 'Customers use mobile banking and branches for different kinds of needs.', 'Mobile banking is unsuitable for all transactions.', 'Loan applications can only be done through mobile banking.'], 1, 'The passage contrasts routine transactions (mobile banking) with complex issues (branch visits), showing customers use each channel for different needs.'),
  question('ibps-po-p2-eng-022', 'Reading comprehension', 'medium', 'Based on the same passage above, why do customers visit branches?', ['For complex issues like loan applications', 'For routine transactions', 'Because mobile banking is unavailable', 'Because they prefer paper forms'], 0, 'The passage states customers "still visit branches for complex issues like loan applications".'),
  question('ibps-po-p2-eng-023', 'Vocabulary in context', 'medium', 'In the sentence "The bank\'s stringent verification process delayed the account opening," the word "stringent" most nearly means:', ['Lenient', 'Simple', 'Optional', 'Strict'], 3, '"Stringent" means strict and rigorously enforced.'),
  question('ibps-po-p2-eng-024', 'Reading comprehension', 'medium', 'Based on the passage in question 21, what does it suggest about mobile banking?', ['It has completely replaced branches.', 'It is only used for loan applications.', 'It is preferred for routine transactions.', 'It is rarely used by customers.'], 2, 'The passage states most customers "prefer mobile banking for routine transactions".'),
  question('ibps-po-p2-eng-025', 'Cloze completion', 'easy', 'Choose the correct word: The manager ___ satisfied with the team\'s performance this quarter.', ['be', 'is', 'being', 'were'], 1, 'The singular subject "The manager" takes the singular verb "is".'),
  question('ibps-po-p2-eng-026', 'Cloze completion', 'easy', 'Choose the correct word: Customers can now ___ their loan status online.', ['track', 'tracking', 'tracked', 'tracks'], 0, 'After the modal "can", the base form of the verb is used: "track".'),
  question('ibps-po-p2-eng-027', 'Cloze completion', 'easy', 'Choose the correct word: The new policy will ___ effect from next month.', ['taking', 'took', 'taken', 'take'], 3, 'After the modal "will", the base form of the verb is used: "take".'),
  question('ibps-po-p2-eng-028', 'Error spotting', 'medium', 'Identify the part containing an error: The bank has recently (A) / introduce a new scheme (B) / for senior citizens (C) / with higher interest rates (D).', ['Part A', 'Part C', 'Part B', 'Part D'], 2, 'The present perfect tense "has recently" requires a past participle, so "introduce" should be corrected to "introduced". The error is in Part B.'),
  question('ibps-po-p2-eng-029', 'Spelling', 'easy', 'Pick the word below that is spelled correctly.', ['Maintainance', 'Maintenance', 'Maintenence', 'Maintanance'], 1, 'The correct spelling is "Maintenance".'),
  question('ibps-po-p2-eng-030', 'Word usage', 'medium', 'Choose the correctly used word: The interest rate is likely to ___ next quarter.', ['effect', 'affected', 'affection', 'affect'], 3, '"Affect" is the verb meaning to influence; "effect" is typically the noun form.'),
];
