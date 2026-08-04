import type { Question } from '../questions';

const source = {
  kind: 'original' as const,
  reference: 'SSC CGL 2026 official notice, paragraph 13.11.3 (Tier 2 English Language and Comprehension syllabus)',
  url: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2026.pdf',
  checkedOn: '3 August 2026',
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
    section: 'English Language and Comprehension',
    topic,
    difficulty,
    question: prompt,
    options,
    correctIndex,
    explanation,
    source,
  };
}

const APPRENTICESHIP =
  'When Dev joined a bicycle-repair workshop as an apprentice, the owner first asked him to observe each repair and record the steps in a notebook. For two weeks, Dev handled only routine tasks while an experienced mechanic checked his work. The owner valued accuracy before speed and treated mistakes as material for the next lesson. By the third month, Dev could diagnose common faults independently and explain his reasoning to customers.';

const WETLANDS =
  'Urban wetlands absorb rainwater, slow runoff and provide habitat for birds and aquatic life. They can also improve water quality by trapping sediment and supporting natural filtration. Yet construction and altered drainage often divide wetlands into isolated patches. Effective restoration requires more than planting attractive vegetation: planners must restore water flow, protect surrounding land and monitor seasonal changes. Protecting intact wetlands is usually easier and less costly than rebuilding their functions after severe damage.';

const FLEXIBLE_WORK =
  'A software company reviewing its flexible-work policy found that employees completed focused tasks more efficiently at home, but informal mentoring and rapid group problem-solving had weakened. Instead of requiring everyone to return daily, the company scheduled shared office days for collaborative work and left other days available for tasks requiring concentration. Teams could adjust the balance according to their work, and the policy would be reviewed after six months using project outcomes and employee feedback.';

export const SSC_CGL_TIER2_ENGLISH_2: Question[] = [
  question('ssc-cgl-t2-en2-001', 'Synonyms', 'easy', 'Choose the word closest in meaning to "meticulous".', ['Careful', 'Careless', 'Hasty', 'Vague'], 0, 'Meticulous means very careful and attentive to detail.'),
  question('ssc-cgl-t2-en2-002', 'Antonyms', 'easy', 'Choose the word opposite in meaning to "scarce".', ['Rare', 'Abundant', 'Limited', 'Insufficient'], 1, 'Scarce means insufficient or hard to find; abundant means plentiful and is its opposite.'),
  question('ssc-cgl-t2-en2-003', 'Homophones', 'easy', 'Choose the correct word: The shop sells office ___.', ['stationary', 'stationairy', 'stationery', 'stationory'], 2, 'Stationery means writing and office materials. Stationary means not moving.'),
  question('ssc-cgl-t2-en2-004', 'Spellings', 'medium', 'Which option correctly spells the word meaning "careful to do what is right"?', ['consciencious', 'conscientous', 'consientious', 'conscientious'], 3, 'Conscientious is the correct spelling.'),
  question('ssc-cgl-t2-en2-005', 'Synonyms', 'medium', 'Choose the word closest in meaning to "obstinate".', ['Stubborn', 'Flexible', 'Cheerful', 'Polite'], 0, 'Obstinate describes someone who stubbornly refuses to change an opinion or course of action.'),
  question('ssc-cgl-t2-en2-006', 'Subject-verb agreement', 'easy', 'Choose the correct completion: A bouquet of roses ___ placed on the table.', ['were', 'was', 'have been', 'are'], 1, 'The head noun bouquet is singular, so the singular verb was is required.'),
  question('ssc-cgl-t2-en2-007', 'Spot the error', 'medium', 'Identify the part containing an error: The quality / of these products / have improved / significantly.', ['The quality', 'of these products', 'have improved', 'significantly'], 2, 'The singular subject quality requires has improved, not have improved.'),
  question('ssc-cgl-t2-en2-008', 'Fill in the blanks', 'medium', 'Choose the correct word: Scarcely had we reached the shelter ___ the storm began.', ['than', 'then', 'as', 'when'], 3, 'The standard correlative construction is scarcely...when.'),
  question('ssc-cgl-t2-en2-009', 'Articles', 'easy', 'Choose the correct article: Priya hopes to earn ___ MBA after graduation.', ['an', 'a', 'the', 'no article'], 0, 'MBA begins with the vowel sound "em", so it takes the article an.'),
  question('ssc-cgl-t2-en2-010', 'Prepositions', 'easy', 'Choose the correct preposition: This design is different ___ the earlier one.', ['than', 'from', 'with', 'by'], 1, 'In standard usage, different is followed by from.'),
  question('ssc-cgl-t2-en2-011', 'Idioms and phrases', 'easy', 'In the sentence "The analyst hit the nail on the head when she identified the delay," what does the idiom mean?', ['To damage something', 'To work as a carpenter', 'To identify the exact cause or answer', 'To avoid a difficult issue'], 2, 'The idiom means to identify or express something exactly.'),
  question('ssc-cgl-t2-en2-012', 'Idioms and phrases', 'easy', 'What does the expression "once in a blue moon" mean?', ['Every evening', 'Without warning', 'At the correct time', 'Very rarely'], 3, 'Once in a blue moon means very rarely.'),
  question('ssc-cgl-t2-en2-013', 'One-word substitution', 'easy', 'Choose the one-word substitute for "a person who studies birds".', ['Ornithologist', 'Entomologist', 'Geologist', 'Anthropologist'], 0, 'An ornithologist studies birds.'),
  question('ssc-cgl-t2-en2-014', 'One-word substitution', 'medium', 'Choose the one-word substitute for "incapable of being corrected".', ['Incredible', 'Incorrigible', 'Invisible', 'Infallible'], 1, 'Incorrigible means not able to be corrected or reformed.'),
  question('ssc-cgl-t2-en2-015', 'One-word substitution', 'easy', 'A speech delivered without prior preparation is called:', ['A eulogy', 'A monologue', 'An extempore speech', 'An obituary'], 2, 'An extempore speech is delivered with little or no preparation.'),
  question('ssc-cgl-t2-en2-016', 'Sentence improvement', 'easy', 'Choose the correct replacement for the underlined idea in: "We discussed about the issue yesterday."', ['discussed on the issue', 'had discussed about the issue', 'discussed regarding the issue', 'discussed the issue'], 3, 'Discuss is a transitive verb and takes a direct object; about is unnecessary.'),
  question('ssc-cgl-t2-en2-017', 'Active and passive voice', 'easy', 'Choose the passive form of: "Someone has stolen my bicycle."', ['My bicycle has been stolen.', 'My bicycle had stolen someone.', 'My bicycle was being stolen.', 'Someone was stolen by my bicycle.'], 0, 'The present perfect passive uses has been + past participle: has been stolen.'),
  question('ssc-cgl-t2-en2-018', 'Active and passive voice', 'easy', 'Choose the active form of: "The results will be announced by the committee."', ['The committee announces the results.', 'The committee will announce the results.', 'The committee has announced the results.', 'The committee was announcing the results.'], 1, 'The future passive will be announced becomes the future active will announce.'),
  question('ssc-cgl-t2-en2-019', 'Direct and indirect speech', 'medium', 'Choose the indirect form of: She said, "I am reading now."', ['She said that I am reading now.', 'She says that she was reading then.', 'She said that she was reading then.', 'She said that she is reading now.'], 2, 'With the past reporting verb said, am reading changes to was reading, I to she, and now to then.'),
  question('ssc-cgl-t2-en2-020', 'Sentence improvement', 'medium', 'Choose the correct replacement: "He is one of those writers who has won several awards."', ['who winning several awards', 'who had wins several awards', 'who has been won several awards', 'who have won several awards'], 3, 'The relative pronoun who refers to the plural noun writers, so the verb must be have won.'),
  question('ssc-cgl-t2-en2-021', 'Sentence parts', 'easy', 'Arrange the parts into a correct sentence: P. before sunset; Q. the hikers; R. reached the village.', ['Q-R-P', 'P-Q-R', 'R-P-Q', 'Q-P-R'], 0, 'The correct sentence is: The hikers reached the village before sunset.'),
  question('ssc-cgl-t2-en2-022', 'Sentence ordering', 'medium', 'Arrange the sentences logically. P. Rainwater is collected from rooftops. Q. It is then filtered to remove debris. R. The filtered water is stored in a tank. S. It can later be used for gardening.', ['Q-P-R-S', 'P-Q-R-S', 'P-R-Q-S', 'R-P-S-Q'], 1, 'P introduces collection, Q filters the collected water, R stores it, and S describes its later use.'),
  question('ssc-cgl-t2-en2-023', 'Sentence parts', 'easy', 'Arrange the words into a correct sentence: seldom / is / late / he.', ['Seldom late he is.', 'He seldom late is.', 'He is seldom late.', 'Late he is seldom.'], 2, 'The natural order is subject + verb + adverb + complement: He is seldom late.'),
  question('ssc-cgl-t2-en2-024', 'Word usage', 'medium', 'Choose the correct word: The curtains ___ the colour of the walls.', ['complimentary', 'compliment', 'complimented', 'complement'], 3, 'Complement is the verb meaning to combine well with or enhance something.'),
  question('ssc-cgl-t2-en2-025', 'Punctuation', 'medium', 'Which sentence correctly joins two closely related independent clauses?', ['The sky darkened; rain began to fall.', 'The sky darkened,; rain began to fall.', 'The sky darkened rain; began to fall.', 'The sky; darkened, rain began to fall.'], 0, 'A semicolon can correctly join the two closely related independent clauses.'),
  question('ssc-cgl-t2-en2-026', 'Cloze passage', 'easy', 'Complete the passage: Cities that build safe cycling lanes ___ more people to ride.', ['prevent', 'encourage', 'confuse', 'forbid'], 1, 'Encourage correctly expresses that safe lanes make cycling more likely.'),
  question('ssc-cgl-t2-en2-027', 'Cloze passage', 'easy', 'Complete the passage: Greater bicycle use can ___ traffic congestion.', ['create', 'measure', 'reduce', 'ignore'], 2, 'Reduce fits the idea that bicycle use can lessen congestion.'),
  question('ssc-cgl-t2-en2-028', 'Cloze passage', 'easy', 'Complete the passage: However, the lanes must be ___ maintained.', ['rarely', 'never', 'roughly', 'properly'], 3, 'Properly is the appropriate adverb describing how lanes should be maintained.'),
  question('ssc-cgl-t2-en2-029', 'Cloze passage', 'medium', 'Complete the passage: Clear signs and markings ___ conflicts at junctions.', ['prevent', 'invite', 'increase', 'hide'], 0, 'Prevent fits the context: clear guidance helps avoid conflicts.'),
  question('ssc-cgl-t2-en2-030', 'Cloze passage', 'medium', 'Complete the passage: Transport planning works best when local residents are ___.', ['avoided', 'consulted', 'delayed', 'replaced'], 1, 'Consulted means asked for views, which fits participatory transport planning.'),
  question('ssc-cgl-t2-en2-031', 'Reading comprehension', 'easy', `${APPRENTICESHIP}\n\nWhy was Dev asked to keep a notebook?`, ['To advertise the workshop', 'To record customer payments', 'To record repair steps and support learning', 'To avoid observing repairs'], 2, 'The owner asked Dev to observe each repair and record its steps, making the notebook a learning tool.'),
  question('ssc-cgl-t2-en2-032', 'Reading comprehension', 'easy', `${APPRENTICESHIP}\n\nWhat did the owner avoid prioritising at the beginning?`, ['Routine work', 'Careful checking', 'Learning from mistakes', 'Speed'], 3, 'The passage explicitly says the owner valued accuracy before speed.'),
  question('ssc-cgl-t2-en2-033', 'Reading comprehension', 'medium', `${APPRENTICESHIP}\n\nWhich description best fits the training method?`, ['Systematic and patient', 'Punitive and hurried', 'Unsupervised and random', 'Theoretical without practice'], 0, 'Observation, limited tasks, checking and gradual independence show a systematic and patient method.'),
  question('ssc-cgl-t2-en2-034', 'Reading comprehension', 'easy', `${APPRENTICESHIP}\n\nWhat could Dev do by the third month?`, ['Own the workshop', 'Diagnose common faults independently', 'Repair only under constant instruction', 'Train the owner'], 1, 'The final sentence states that Dev could diagnose common faults independently.'),
  question('ssc-cgl-t2-en2-035', 'Reading comprehension', 'medium', `${APPRENTICESHIP}\n\nWhich inference is best supported by the passage?`, ['Mistakes should always be concealed.', 'Speed is the only measure of skill.', 'Practice combined with reflection can build independent judgement.', 'Customers should diagnose every fault themselves.'], 2, 'Dev improved through observed practice, checked work and lessons drawn from mistakes.'),
  question('ssc-cgl-t2-en2-036', 'Reading comprehension', 'easy', `${WETLANDS}\n\nWhat is the main idea of the passage?`, ['Wetlands exist only as bird habitats.', 'Urban construction always improves drainage.', 'Planting decorative vegetation is sufficient restoration.', 'Wetlands provide several services and need process-based protection and restoration.'], 3, 'The passage outlines multiple wetland functions and explains that restoration must recover ecological processes.'),
  question('ssc-cgl-t2-en2-037', 'Reading comprehension', 'easy', `${WETLANDS}\n\nWhich word is closest in meaning to "divide" as used in the passage?`, ['Fragment', 'Unite', 'Protect', 'Expand'], 0, 'Fragment means to break or divide something into smaller, disconnected parts.'),
  question('ssc-cgl-t2-en2-038', 'Reading comprehension', 'medium', `${WETLANDS}\n\nWhy is planting vegetation alone insufficient for restoration?`, ['Wetlands contain no plants.', 'Water flow, surrounding land and seasonal conditions also matter.', 'All vegetation prevents filtration.', 'Birds avoid restored wetlands.'], 1, 'The passage says restoration also requires restored water flow, protected surrounding land and seasonal monitoring.'),
  question('ssc-cgl-t2-en2-039', 'Reading comprehension', 'easy', `${WETLANDS}\n\nWhich activity is identified as a threat to urban wetlands?`, ['Monitoring seasonal change', 'Protecting surrounding land', 'Construction and altered drainage', 'Natural filtration'], 2, 'The passage identifies construction and altered drainage as causes of wetland fragmentation.'),
  question('ssc-cgl-t2-en2-040', 'Reading comprehension', 'medium', `${WETLANDS}\n\nWhich conclusion best reflects the passage?`, ['Damaged wetlands always recover by themselves.', 'Restoration is cheaper than prevention in every case.', 'Wetlands should be replaced with storage tanks.', 'Conservation should protect intact wetlands while restoring ecological functions where needed.'], 3, 'The passage favours protecting intact wetlands and restoring water flow and other functions in damaged areas.'),
  question('ssc-cgl-t2-en2-041', 'Reading comprehension', 'medium', `${FLEXIBLE_WORK}\n\nWhat is the central idea of the passage?`, ['A flexible policy can balance focused work with collaboration.', 'All employees should work from home permanently.', 'Daily office attendance solved every problem.', 'Employee feedback should not influence policy.'], 0, 'The company combines home-based focus with scheduled office collaboration and plans to review the balance.'),
  question('ssc-cgl-t2-en2-042', 'Reading comprehension', 'easy', `${FLEXIBLE_WORK}\n\nWhat had weakened under the earlier arrangement?`, ['Focused individual tasks', 'Informal mentoring and rapid group problem-solving', 'Project measurement', 'Employee concentration at home'], 1, 'The passage directly states that informal mentoring and rapid group problem-solving had weakened.'),
  question('ssc-cgl-t2-en2-043', 'Reading comprehension', 'easy', `${FLEXIBLE_WORK}\n\nWhy were shared office days scheduled?`, ['To eliminate home working', 'To reduce all communication', 'To support collaborative work', 'To avoid reviewing the policy'], 2, 'Shared office days were assigned to collaborative work that benefits from people being together.'),
  question('ssc-cgl-t2-en2-044', 'Reading comprehension', 'medium', `${FLEXIBLE_WORK}\n\nWhat does the passage say about the balance between office and home days?`, ['It must be identical for every team.', 'It should never change.', 'Managers alone should set it without evidence.', 'Teams may adjust it according to their work.'], 3, 'The passage explicitly allows teams to adjust the balance according to the nature of their work.'),
  question('ssc-cgl-t2-en2-045', 'Reading comprehension', 'medium', `${FLEXIBLE_WORK}\n\nWhich description best fits the company\'s approach?`, ['Pragmatic and evidence-based', 'Rigid and punitive', 'Indifferent to outcomes', 'Entirely speculative'], 0, 'The company responds to observed strengths and weaknesses, permits adjustment and schedules a measured review.'),
];
