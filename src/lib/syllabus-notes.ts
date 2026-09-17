// Hand-written, one per exam, for the derived syllabus pages.
//
// A page built from the coverage module alone would be a table of the official
// pattern and a list of topic labels, and two exams with the same pattern shape
// would read alike. These notes are what makes each page worth its own URL:
// they say the thing about this exam's syllabus that the section table and the
// topic list cannot, grounded in that exam's own recorded pattern, the
// notification note stored beside it in exams.ts, or the questions built for it.
//
// A note is also the switch. A derived syllabus page is indexed only where one
// exists, so nothing is published until somebody has read the exam and written
// a line about it. Exams without a note keep the noindexed placeholder.

export const SYLLABUS_NOTES: Record<string, string> = {
  srmjeee:
    'Read the fourth section before you plan around the first three. English and Aptitude is 20 questions of the 130, and it is the only part of this paper that no Class 12 revision touches: the coverage below runs to numerical and logical reasoning, data interpretation, grammar and comprehension rather than anything from the PCM syllabus. Physics carries the widest spread of chapters in the bank by a distance, which is a reflection of how broadly the paper samples rather than of how many marks it holds.',

  viteee:
    'The labels here follow VIT\'s own chapter families rather than a flat list, which is worth knowing when you read them: Physics arrives grouped as Electrostatics, Current Electricity and Magnetic Effects, Mechanics and Properties of Matter, and so on, and Chemistry the same way. That structure comes from the syllabus the university publishes by unit. Aptitude and English together are 15 of the 125 questions and 60 of the 500 marks, small enough to skip in revision and large enough to regret skipping.',

  ailet:
    'Law is where this paper actually lives, and the coverage reflects it: the bank tags nearly two hundred distinct legal topics under that section, grouped below into the families they belong to, against a couple of dozen across English and Logical Reasoning combined. That is not a claim about NLU Delhi\'s weighting. It is a statement about where the reading is, and it matches a paper whose largest section is Logical Reasoning at 70 of 150 questions with Legal alongside it.',

  'niper-jee':
    'Section B is the pharmacy degree and Section A is everything else. The coverage below reflects that split honestly: Section B runs through pharmacognosy, medicinal chemistry, biochemistry, microbiology, quality assurance and the rest of a B.Pharm. curriculum, while Section A gathers English, aptitude, reasoning, general knowledge and research method. With 120 of the 200 questions in Section B and every question worth half a mark, the degree subject is where the paper is decided.',

  'sebi-grade-a':
    'Eleven sections across two papers, and the coverage below separates them because the exam does. Paper 1 is the common aptitude battery every stream sits; Paper 2 for the General Stream is the subject paper, running through commerce, accountancy, management, finance, costing, the Companies Act and economics. A candidate who prepares the aptitude sections alone prepares for the qualifying half of a paper whose other half carries the marks that rank them.',

  'dsssb-teaching-recruitment':
    'The subject block is half the paper and the coverage shows why that matters. Mathematics and Teaching Methodology carries 100 of the 200 questions, and the topics under it mix school mathematics with pedagogy rather than keeping them apart, which is how the paper asks them. The five 20-question sections around it are general: arithmetic, English, Hindi, general awareness and reasoning. Revision split evenly across six headings gives the deciding block a sixth of the attention it is worth.',

  'neet-ug':
    'Biology is half the paper and roughly half the topic labels in the bank, which for once means the coverage and the weighting agree. The Botany and Zoology content runs wide rather than deep: cell structure, plant hormones, DNA replication, evolution, ecology and human physiology all appear, because the paper samples the whole NCERT syllabus rather than concentrating on favourite chapters. Physics and Chemistry each take 45 questions and are covered to a comparable spread on a quarter of the marks apiece.',

  'nabard-grade-a':
    'Three of these eight sections decide your rank and five only qualify you, so read the coverage with that split in mind. Economic and Social Issues, Agriculture and Rural Development, and General Awareness are the ranking sections, and they are also the ones no general banking preparation covers. Reasoning, English, Computer Knowledge, Quantitative Aptitude and Decision Making carry minimum cut-offs you must clear and nothing above them that counts.',

  'ssc-selection-post':
    'One syllabus, three levels. The Commission sets the same four sections for Matriculation, Higher Secondary and Graduation posts, and the coverage below is shared across them, because the topics do not change between levels; the standard the questions are pitched at does. On the graduation paper, General Intelligence, General Awareness and English are set at graduation level while Quantitative Aptitude stays at Class 10 under the official syllabus, which is the one asymmetry worth planning around.',

  wbjee:
    'Mathematics is a paper of its own here, and the coverage is weighted accordingly: 75 of the 155 questions and 100 of the 200 marks, sat in its own 120-minute window before Physics and Chemistry share a second. So the topic list under Mathematics is not competing with the other two for revision time in the way a single-sitting paper would. Within all three subjects the questions arrive in three scoring categories, which means the same chapter can appear as a one-mark single-correct question and as a two-mark multi-select one.',

  jcece:
    'An even three-way split across Physics, Chemistry and Mathematics, 50 questions each, means the coverage below is the closest thing on this site to a balanced engineering syllabus: no section repays disproportionate revision and a weakness anywhere costs the same third. The topics are pitched at 10+2 rather than at the polytechnic level the same board uses for its PECE paper, which is the distinction to check before picking up material.',

  'cusat-cat':
    'The subjects step down in size and the coverage follows: Mathematics 90 questions, Physics 75, Chemistry 60. Everything below stays inside the Plus Two syllabus, so the difficulty is not what makes this paper hard. Volume is. Two hundred and twenty-five questions in 180 minutes leaves 48 seconds each, which means the topic list is better used to check for gaps than to plan depth: a chapter you half know costs more here than on a paper with time to think.',

  htet:
    'Ten of these questions are Haryana-specific and no national teaching-eligibility material covers them, which is the one gap a candidate moving from CTET preparation will not notice until the paper. Beyond that the coverage splits between the pedagogy sections, Child Development and Pedagogy and Environmental Studies, and the subject and language sections. Level 1 qualifies a candidate to teach Classes I to V, so the content sits at that level rather than at the level of the person teaching it.',

  'cma-final':
    'Ten papers, and the coverage below is spread across all of them rather than describing a single sitting. ICMAI sets each paper separately, and the objective block in every one is 15 compulsory multiple-choice questions worth 30 of that paper\'s 100 marks. So a topic list this long is a map of ten syllabuses, not one, and the practical use of it is checking which of the ten you have left untouched rather than planning a single revision cycle.',

  'jain-jet':
    'Six sections, and half the questions sit outside science. Physics, Chemistry and Mathematics take 30 questions each, English takes another 30, and Aptitude and Logical Reasoning take 15 apiece, so the coverage below spreads across language and reasoning as much as it does across the PCM syllabus. One caveat on the structure itself: JAIN\'s live admissions page controls this six-section split while the official 2026 model paper groups its last 30 sample questions differently, and this site follows the admissions page.',

  'sidbi-grade-a-b':
    'Seven sections, and the coverage below mixes a general aptitude battery with a specialist one. English, Reasoning, Quantitative Aptitude and Computer Knowledge are qualifying only. General Awareness, the MSMEs paper on policy, regulatory and legal framework, and the Stream Specific Test carry the merit, and the Stream Specific Test alone is worth 100 of the 200 marks. The MSME material is the part with no equivalent on any other banking paper, and it is half of what ranks you.',

  ojee:
    'Two different exams share this page and they are not for the same candidate. The 2nd/Special B.Tech paper covers Physics, Chemistry and Mathematics at school level, and exists to fill seats left vacant after JEE Main counselling. LE-Tech covers Engineering Mathematics, Engineering Mechanics, and Basic Electrical and Electronics Engineering, which is diploma coursework, and admits Diploma holders straight into the second year. Check which route your application names before reading either topic list as yours.',

  'mah-mba-cet':
    'Half this paper is reasoning and the coverage says so. Logical Reasoning takes 75 of the 200 questions and Abstract Reasoning another 25, against 50 each for Quantitative Aptitude and Verbal Ability with Reading Comprehension. Abstract Reasoning is the section with the least in common with other MBA entrances: it is pattern and sequence work rather than verbal logic, and material ported from CAT preparation does not reach it.',

  'cma-intermediate':
    'Eight papers, one shape. ICMAI fixes the objective block at 15 compulsory multiple-choice questions worth 30 marks in every one of the eight, so the coverage below maps eight separate syllabuses rather than a single paper. Corporate accounting and auditing, financial management, management accounting, business laws and ethics and financial accounting all appear because all of them are sat, on different days, with the same 30 objective marks riding on each.',

  'ap-eapcet':
    'Mathematics is half this paper and the two sciences share the other half, 80 questions against 40 each, so the coverage under Mathematics is doing twice the work of the coverage under Physics or Chemistry. Nothing is deducted for a wrong answer anywhere, which changes how to use a topic list: a chapter you know only partly is still worth attempting on the day, so the list is better read as a checklist of what to meet at least once than as a ranking of what to master.',
};

export function getSyllabusNote(slug: string): string | undefined {
  return SYLLABUS_NOTES[slug];
}
