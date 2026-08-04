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

const STORY =
  'During her first week as a librarian, Mira noticed that many children repeatedly chose the same illustrated books. Instead of removing those favourites, she created a discovery shelf beside them with short, inviting notes about unfamiliar genres. She also held a ten-minute reading circle each Saturday. After a month, the children still borrowed their favourite books, but they also began trying biographies, science writing and folktales.';

const URBAN_HEAT_REPORT =
  'A city survey measured afternoon temperatures across neighbourhoods during a heatwave. Streets with mature tree cover were generally two to four degrees cooler than nearby streets with little shade. The report cautioned that tree planting was not a complete solution: young trees take time to mature and need regular care. It recommended reflective roofs, shaded bus stops and accessible drinking water alongside long-term expansion of green cover.';

const DIGITAL_SERVICES_EDITORIAL =
  'Digital public services can reduce waiting time and paperwork, but efficiency alone should not define success. People with limited connectivity, disabilities or little digital experience may be excluded by an online-only system. Governments should therefore offer low-bandwidth options, plain-language instructions and assisted service centres. Regular audits and transparent correction processes are also necessary so that technical errors do not silently deny people access to essential services.';

export const SSC_CGL_TIER2_ENGLISH_1: Question[] = [
  question('ssc-cgl-t2-en1-001', 'Synonyms', 'easy', 'Choose the word closest in meaning to "prudent".', ['Wise', 'Reckless', 'Noisy', 'Temporary'], 0, 'Prudent means showing care and good judgement, so wise is the closest synonym.'),
  question('ssc-cgl-t2-en1-002', 'Antonyms', 'easy', 'Choose the word opposite in meaning to "transient".', ['Brief', 'Permanent', 'Passing', 'Momentary'], 1, 'Transient means temporary or short-lived. Permanent is its opposite.'),
  question('ssc-cgl-t2-en1-003', 'Homonyms', 'easy', 'Choose the correct word: The school ___ addressed the morning assembly.', ['principle', 'principel', 'principal', 'princapal'], 2, 'Principal is the correct word for the head of a school; principle means a rule or belief.'),
  question('ssc-cgl-t2-en1-004', 'Spellings', 'easy', 'Choose the spelling that correctly completes the sentence: The hotel can ___ two hundred guests.', ['acommodate', 'accomodate', 'accommoddate', 'accommodate'], 3, 'Accommodate is spelled with two cs and two ms.'),
  question('ssc-cgl-t2-en1-005', 'Synonyms', 'medium', 'Choose the word closest in meaning to "alleviate".', ['Lessen', 'Intensify', 'Postpone', 'Measure'], 0, 'Alleviate means to make pain, difficulty or a problem less severe.'),
  question('ssc-cgl-t2-en1-006', 'Subject-verb agreement', 'easy', 'Choose the correct completion: Each of the reports ___ reviewed carefully.', ['have been', 'has been', 'were', 'are being'], 1, 'Each is singular, so it takes the singular verb phrase has been.'),
  question('ssc-cgl-t2-en1-007', 'Spot the error', 'medium', 'Identify the part containing an error: Neither of / the proposals / are acceptable / to the committee.', ['Neither of', 'the proposals', 'are acceptable', 'to the committee'], 2, 'Neither is singular here, so are acceptable should be is acceptable.'),
  question('ssc-cgl-t2-en1-008', 'Fill in the blanks', 'medium', 'Choose the correct word: Hardly had the train left ___ the rain began.', ['than', 'then', 'as', 'when'], 3, 'The standard construction is hardly...when.'),
  question('ssc-cgl-t2-en1-009', 'Articles', 'easy', 'Choose the correct article: She gave ___ honest account of the incident.', ['an', 'a', 'the', 'no article'], 0, 'Honest begins with a vowel sound because h is silent, so an is required.'),
  question('ssc-cgl-t2-en1-010', 'Prepositions', 'easy', 'Choose the correct preposition: The contractor complied ___ every safety requirement.', ['to', 'with', 'for', 'at'], 1, 'The verb comply is followed by with.'),
  question('ssc-cgl-t2-en1-011', 'Idioms and phrases', 'easy', 'What does the idiom "spill the beans" mean?', ['Waste food', 'Make a complaint', 'Reveal a secret', 'Start an argument'], 2, 'To spill the beans means to reveal information that was meant to remain secret.'),
  question('ssc-cgl-t2-en1-012', 'Idioms and phrases', 'medium', 'What does the expression "at sixes and sevens" mean?', ['In complete agreement', 'Very early', 'In equal groups', 'In confusion or disorder'], 3, 'At sixes and sevens describes a state of confusion or disorganisation.'),
  question('ssc-cgl-t2-en1-013', 'One-word substitution', 'medium', 'Choose the one-word substitute for "a person who compiles a dictionary".', ['Lexicographer', 'Biographer', 'Calligrapher', 'Cartographer'], 0, 'A lexicographer writes or compiles dictionaries.'),
  question('ssc-cgl-t2-en1-014', 'One-word substitution', 'easy', 'Choose the one-word substitute for "that which cannot be heard".', ['Invisible', 'Inaudible', 'Illegible', 'Intangible'], 1, 'Inaudible means unable to be heard.'),
  question('ssc-cgl-t2-en1-015', 'One-word substitution', 'medium', 'A government controlled by a small group of powerful people is called:', ['Democracy', 'Monarchy', 'Oligarchy', 'Theocracy'], 2, 'Oligarchy is government by a small group of people.'),
  question('ssc-cgl-t2-en1-016', 'Sentence improvement', 'easy', 'Choose the correct replacement for the underlined idea in: "Arun is senior than me."', ['senior from me', 'more senior than me', 'senior over me', 'senior to me'], 3, 'Senior is followed by to, not than.'),
  question('ssc-cgl-t2-en1-017', 'Active and passive voice', 'medium', 'Choose the passive form of: "They are repairing the road."', ['The road is being repaired by them.', 'The road was repaired by them.', 'The road has repaired them.', 'The road is repairing by them.'], 0, 'Present continuous active changes to is being + past participle in the passive voice.'),
  question('ssc-cgl-t2-en1-018', 'Active and passive voice', 'easy', 'Choose the active form of: "The letter was written by Neha."', ['Neha has written the letter.', 'Neha wrote the letter.', 'Neha writes the letter.', 'Neha was writing the letter.'], 1, 'The simple past passive was written becomes the simple past active wrote.'),
  question('ssc-cgl-t2-en1-019', 'Direct and indirect speech', 'medium', 'Choose the indirect form of: Ravi said, "I will return tomorrow."', ['Ravi said that I will return tomorrow.', 'Ravi says that he would return tomorrow.', 'Ravi said that he would return the next day.', 'Ravi said that he will return the next day.'], 2, 'With a past reporting verb, will changes to would, I changes to he, and tomorrow changes to the next day.'),
  question('ssc-cgl-t2-en1-020', 'Sentence improvement', 'medium', 'Choose the correct replacement: "No sooner did the meeting begin when the fire alarm rang."', ['began as', 'began then', 'began when', 'begin than'], 3, 'The construction is no sooner...than, and did is followed by the base verb begin.'),
  question('ssc-cgl-t2-en1-021', 'Sentence parts', 'easy', 'Arrange the parts into a correct sentence: P. because it was raining; Q. the match; R. was postponed.', ['Q-R-P', 'P-Q-R', 'R-P-Q', 'Q-P-R'], 0, 'The correct sentence is: The match was postponed because it was raining.'),
  question('ssc-cgl-t2-en1-022', 'Sentence ordering', 'medium', 'Arrange the sentences logically. P. Solar panels convert sunlight into electricity. Q. This electricity can be used immediately or stored. R. As a result, homes can reduce their reliance on grid power. S. Battery systems make such storage possible.', ['Q-P-R-S', 'P-Q-S-R', 'P-S-Q-R', 'S-P-R-Q'], 1, 'P introduces solar generation, Q refers to this electricity, S explains storage, and R states the result.'),
  question('ssc-cgl-t2-en1-023', 'Sentence parts', 'easy', 'Arrange the words into a correct sentence: always / arrives / she / on time.', ['Always she on time arrives.', 'She arrives on time always.', 'She always arrives on time.', 'On time always she arrives.'], 2, 'The natural word order is subject + frequency adverb + verb + complement: She always arrives on time.'),
  question('ssc-cgl-t2-en1-024', 'Word usage', 'easy', 'Choose the correct word: The new policy will ___ small businesses.', ['effected', 'effects', 'effect', 'affect'], 3, 'Affect is the verb meaning to influence. Effect is usually a noun in this context.'),
  question('ssc-cgl-t2-en1-025', 'Punctuation', 'easy', 'Which sentence correctly uses punctuation when directly addressing Rohan?', ['Rohan, please close the window.', 'Rohan please, close the window.', 'Rohan please close, the window.', 'Rohan; please, close the window.'], 0, 'A comma follows the directly addressed name Rohan.'),
  question('ssc-cgl-t2-en1-026', 'Cloze passage', 'easy', 'Complete the passage: Reading regularly ___ a person\'s vocabulary.', ['restricts', 'expands', 'forgets', 'avoids'], 1, 'Expands correctly expresses that regular reading increases vocabulary.'),
  question('ssc-cgl-t2-en1-027', 'Cloze passage', 'easy', 'Complete the passage: It also ___ concentration over time.', ['reduces', 'divides', 'improves', 'interrupts'], 2, 'Improves fits both the meaning and the singular subject it.'),
  question('ssc-cgl-t2-en1-028', 'Cloze passage', 'medium', 'Complete the passage: A thoughtful reader learns to ___ ideas rather than accept them immediately.', ['repeat', 'hide', 'discard', 'evaluate'], 3, 'Evaluate means to assess ideas carefully, which fits the context.'),
  question('ssc-cgl-t2-en1-029', 'Cloze passage', 'easy', 'Complete the passage: The reading habit should be ___ early in life.', ['developed', 'destroyed', 'delayed', 'ignored'], 0, 'Developed correctly describes forming a useful habit.'),
  question('ssc-cgl-t2-en1-030', 'Cloze passage', 'easy', 'Complete the passage: Even fifteen minutes ___ day can make a difference.', ['the', 'a', 'some', 'each of'], 1, 'The fixed expression is fifteen minutes a day.'),
  question('ssc-cgl-t2-en1-031', 'Reading comprehension', 'easy', `${STORY}\n\nWhy did Mira create the discovery shelf?`, ['To remove illustrated books', 'To shorten library hours', 'To encourage children to explore unfamiliar genres', 'To display only biographies'], 2, 'The shelf placed inviting notes about unfamiliar genres beside the children\'s favourites, encouraging exploration.'),
  question('ssc-cgl-t2-en1-032', 'Reading comprehension', 'easy', `${STORY}\n\nWhat did Mira deliberately avoid doing?`, ['Holding a reading circle', 'Writing short notes', 'Adding science books', 'Taking away the children\'s favourite books'], 3, 'The passage explicitly says she did not remove the favourite illustrated books.'),
  question('ssc-cgl-t2-en1-033', 'Reading comprehension', 'medium', `${STORY}\n\nWhich word best describes Mira\'s approach?`, ['Gradual', 'Punitive', 'Indifferent', 'Secretive'], 0, 'She preserved existing preferences while gently introducing alternatives, making her approach gradual.'),
  question('ssc-cgl-t2-en1-034', 'Reading comprehension', 'easy', `${STORY}\n\nWhat changed after a month?`, ['Children stopped borrowing books.', 'Children began borrowing from a wider range of genres.', 'The library removed the discovery shelf.', 'Only folktales remained popular.'], 1, 'The children continued with favourites but also tried biographies, science writing and folktales.'),
  question('ssc-cgl-t2-en1-035', 'Reading comprehension', 'medium', `${STORY}\n\nWhich inference is best supported by the passage?`, ['Children dislike illustrated books.', 'Reading circles replace independent reading.', 'Choice combined with guidance can broaden reading habits.', 'Libraries should restrict popular books.'], 2, 'Mira retained choice and added gentle guidance, after which the children diversified their reading.'),
  question('ssc-cgl-t2-en1-036', 'Reading comprehension', 'easy', `${URBAN_HEAT_REPORT}\n\nWhat was the survey\'s main finding?`, ['All streets had identical temperatures.', 'Young trees cooled streets immediately.', 'Drinking water reduced roof temperature.', 'Streets with mature tree cover were generally cooler.'], 3, 'The report found that tree-covered streets were generally two to four degrees cooler.'),
  question('ssc-cgl-t2-en1-037', 'Reading comprehension', 'medium', `${URBAN_HEAT_REPORT}\n\nWhat caution did the report give?`, ['Tree planting is not sufficient by itself.', 'Reflective roofs always increase heat.', 'Mature trees require no care.', 'Heatwaves affect only unshaded streets.'], 0, 'The report said tree planting was not a complete solution and explained its practical limits.'),
  question('ssc-cgl-t2-en1-038', 'Reading comprehension', 'easy', `${URBAN_HEAT_REPORT}\n\nWhich word is closest in meaning to "cautioned" as used in the passage?`, ['Celebrated', 'Warned', 'Measured', 'Denied'], 1, 'Cautioned means warned or advised care.'),
  question('ssc-cgl-t2-en1-039', 'Reading comprehension', 'easy', `${URBAN_HEAT_REPORT}\n\nWhich measure was recommended alongside expanding green cover?`, ['Removing bus stops', 'Painting roads black', 'Using reflective roofs and shaded bus stops', 'Reducing access to drinking water'], 2, 'The report recommended reflective roofs, shaded bus stops and drinking water in addition to green cover.'),
  question('ssc-cgl-t2-en1-040', 'Reading comprehension', 'medium', `${URBAN_HEAT_REPORT}\n\nWhich conclusion best reflects the report?`, ['Only mature trees should be used.', 'Short-term measures make trees unnecessary.', 'Cities cannot reduce heat risk.', 'Heat reduction requires both immediate and long-term measures.'], 3, 'The recommendations combine near-term infrastructure with the long-term growth of tree cover.'),
  question('ssc-cgl-t2-en1-041', 'Reading comprehension', 'medium', `${DIGITAL_SERVICES_EDITORIAL}\n\nWhat is the central argument of the editorial?`, ['Digital efficiency should be combined with accessibility and accountability.', 'All public services should become online-only.', 'Paperwork is always more efficient than digital systems.', 'Technical errors are too rare to review.'], 0, 'The passage supports digital efficiency but argues that access, assistance and error correction are equally necessary.'),
  question('ssc-cgl-t2-en1-042', 'Reading comprehension', 'easy', `${DIGITAL_SERVICES_EDITORIAL}\n\nWho may be excluded by an online-only system?`, ['Only government employees', 'People with limited connectivity, disabilities or little digital experience', 'Only people who prefer paper forms', 'People who use low-bandwidth websites'], 1, 'The passage explicitly identifies those three groups as being at risk of exclusion.'),
  question('ssc-cgl-t2-en1-043', 'Reading comprehension', 'easy', `${DIGITAL_SERVICES_EDITORIAL}\n\nWhy does the writer recommend assisted service centres?`, ['To eliminate digital services', 'To make applications longer', 'To provide support and an alternative access route', 'To prevent audits'], 2, 'Assisted centres help people who cannot comfortably complete an online process without support.'),
  question('ssc-cgl-t2-en1-044', 'Reading comprehension', 'medium', `${DIGITAL_SERVICES_EDITORIAL}\n\nWhat purpose do regular audits and transparent correction processes serve?`, ['They increase waiting time.', 'They remove low-bandwidth options.', 'They hide technical failures.', 'They help detect and correct errors that could deny access.'], 3, 'The final sentence links audits and correction processes to preventing silent denial of essential services.'),
  question('ssc-cgl-t2-en1-045', 'Reading comprehension', 'medium', `${DIGITAL_SERVICES_EDITORIAL}\n\nWhich description best fits the tone of the passage?`, ['Balanced and constructive', 'Mocking and dismissive', 'Alarmist and hopeless', 'Celebratory without qualification'], 0, 'The passage recognises benefits, identifies risks and proposes practical improvements, giving it a balanced and constructive tone.'),
];
