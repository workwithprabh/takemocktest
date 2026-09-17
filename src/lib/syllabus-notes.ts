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
    'General Awareness is the section that does not shrink. The coverage under it runs to geography, polity, history, the Constitution, biology, chemistry, physics, environment, economics and sports, which is a wider spread than the three skill sections put together and the only part of this paper that cannot be practised into shape by method alone. The same four sections serve the Matriculation, Higher Secondary and Graduation papers, so the list below is shared across all three; what changes between them is the level the questions are pitched at.',

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
    'English is as large as any science section here, 30 questions matching Physics, Chemistry and Mathematics apiece, and the coverage runs to comprehension, grammar and usage rather than literature. Aptitude and Logical Reasoning add 15 each. So 60 of the 150 questions come from outside the PCM syllabus, and they are the ones needing no chapter revision to collect. The topic list below follows JAIN\'s live admissions structure, which is what this site builds to.',

  'sidbi-grade-a-b':
    'Seven sections, and the coverage below mixes a general aptitude battery with a specialist one. English, Reasoning, Quantitative Aptitude and Computer Knowledge are qualifying only. General Awareness, the MSMEs paper on policy, regulatory and legal framework, and the Stream Specific Test carry the merit, and the Stream Specific Test alone is worth 100 of the 200 marks. The MSME material is the part with no equivalent on any other banking paper, and it is half of what ranks you.',

  ojee:
    'Two syllabuses share this page and only one of them is school science. The 2nd/Special B.Tech route covers Physics, Chemistry and Mathematics at Plus Two level. LE-Tech covers Engineering Mathematics, Engineering Mechanics and Basic Electrical and Electronics Engineering, and the coverage under those reads like diploma coursework: force and moments, centre of gravity, simple stress and strain, friction, gear drives, AC theory, DC motors and transistors. A candidate reading the wrong half of this page is preparing for somebody else\'s exam.',

  'mah-mba-cet':
    'Abstract Reasoning is the section with nothing to port into it. The coverage under it is symbol transformation, matrix rules, rotation codes, nested operations and interleaved sequences, none of which appears on CAT and none of which rewards the verbal-logic habits that Logical Reasoning does. Data Interpretation dominates Quantitative Aptitude by a wide margin in what is built here, and Reading Comprehension does the same inside the verbal section, so two of the four sections reward sustained reading of a single stimulus rather than quick individual questions.',

  'cma-intermediate':
    'Eight papers, one shape. ICMAI fixes the objective block at 15 compulsory multiple-choice questions worth 30 marks in every one of the eight, so the coverage below maps eight separate syllabuses rather than a single paper. Corporate accounting and auditing, financial management, management accounting, business laws and ethics and financial accounting all appear because all of them are sat, on different days, with the same 30 objective marks riding on each.',

  'ap-eapcet':
    'Mathematics is half this paper and the two sciences share the other half, 80 questions against 40 each, so the coverage under Mathematics is doing twice the work of the coverage under Physics or Chemistry. Nothing is deducted for a wrong answer anywhere, which changes how to use a topic list: a chapter you know only partly is still worth attempting on the day, so the list is better read as a checklist of what to meet at least once than as a ranking of what to master.',

  nift:
    'Section B is 70% of the merit and Section A is 30%, which is the first thing to know before reading a topic list that gives them similar space. The Case Study block under Section B has no equivalent anywhere else on this site: operations, inventory, sourcing, pricing, forecasting and supplier risk, asked as a business problem rather than as a question with a formula. One limit worth carrying in: the General Knowledge and Current Affairs coverage here is frozen to an 8 February 2026 cutoff, so read it for the recurring subject areas rather than for the news.',

  'jee-main':
    'Three subjects, 25 questions each, and the coverage below is the same NCERT Class 11 and 12 ground you would expect. What a topic list cannot show is the split inside each subject: 20 multiple-choice questions and 5 numerical-value ones, where the numerical questions take a typed integer with no options to eliminate and still carry the same 1-mark deduction. So a chapter you know well enough to recognise an answer is not the same as a chapter you know well enough to produce one, and the second is what Section B asks.',

  keam:
    'Mathematics is half this paper and the coverage reflects the weighting: 75 questions against 45 for Physics and 30 for Chemistry. Everything below stays inside the Plus Two syllabus, so a topic list is more useful here as a checklist than as a ranking, because the difficulty is not what makes KEAM hard. Volume is, at 225 questions in 180 minutes. The one structural thing to carry in from elsewhere on this site: KEAM sets five options a question rather than four, which its own prospectus states.',

  ctet:
    'Every section here carries pedagogy as well as content, and the coverage shows it: teaching method appears under Mathematics, under Environmental Studies and under both languages, not only under Child Development and Pedagogy. That matches the official structure, which splits Mathematics and Environmental Studies into 15 content questions and 15 pedagogy, and each language into 15 comprehension and 15 pedagogy. The Language II topics below are in Hindi because the questions are, and a candidate choosing a different Language II will sit a different paper.',

  'rrb-technician':
    'Basic Science and Engineering is the largest section at 35 of the 100 questions, and the coverage under it is the part that separates this paper from every other railway recruitment exam: units and measurement and work and energy sit alongside Ohm\'s law, resistances in series and parallel, and basic and digital electronics. Two cautions. The notification labels its subject-wise split as indicative rather than fixed, and the General Awareness topics here cover recurring subject areas rather than the news of any particular month.',

  'amu-btech':
    'AMU publishes no per-subject question split, so read the coverage below as three subject areas rather than as three weightings. The Guide to Admissions sets 100 questions across Chemistry, Physics and Mathematics for 100 marks in 120 minutes and stops there; the even division used in the practice tests on this site is a pacing choice made here, not an AMU figure. The topics themselves are ordinary Class 11 and 12 ground, which is the useful part: nothing in this paper asks for material outside it.',

  'chandigarh-cucet':
    'A quarter of this paper is not science, and the coverage makes that visible: English takes 10 questions and Aptitude 15, against 25 apiece for Physics, Chemistry and Mathematics. The English topics run to grammar, contextual vocabulary and sentence rearrangement rather than literature, and the Aptitude ones to arithmetic, series, coding and syllogism. Neither needs chapter revision, and nothing is deducted for a wrong answer anywhere on this paper, which makes those 25 questions the cheapest on it.',

  'comedk-uget':
    'Three subjects at 60 questions each and nothing deducted for a wrong answer, so the coverage below is best read as a checklist of what to meet at least once rather than as a ranking of what to master: a chapter you half know is still worth attempting on the day. One number on this page is not COMEDK\'s own. The 2026 notification and brochure publish no session duration in readable public text, so the figure shown elsewhere on this site is a practice timer, and your admit card is the authority.',

  'nvs-teaching-recruitment':
    'The post is TGT Mathematics and this paper sets no mathematics. What the coverage below shows instead is a general-competency battery: computer literacy, two languages, general knowledge, general reasoning and numeric ability, with the subject examined at Tier 2, which this site does not build. So the topic list is worth reading for what it does not contain as much as for what it does, and a candidate revising graduate mathematics for this stage is revising for the next one.',

  puleet:
    'The topic list here is diploma coursework, not school science, which is the whole point of a lateral-entry paper. General Engineering is 60 of the 100 questions and the coverage under it spans basic electrical engineering, electronics, programming fundamentals and mechanical fundamentals. Physics, Chemistry, Mathematics and General Aptitude take 10 questions each between them, so a candidate working from JEE material reaches under a third of the paper and none of the part that decides it.',

  'kvs-teaching-recruitment':
    'Nothing in this coverage tests teaching. A candidate applying to teach primary classes answers questions on computer literacy, two languages, general knowledge, general reasoning and numeric ability, and none on pedagogy or child development, which are examined nowhere in Tier 1. Read the topic list against your revision plan rather than against your expectations of a teaching exam: the sections that look peripheral are the paper, and the subject knowledge you were hired for is not on it.',

  'jee-advanced':
    'A topic list flattens what makes this paper hard, so read it alongside the marking. Each subject sets four question types: single-correct at 3 marks with 1 off, multiple-select at 4 with partial marks, numerical-value at 4 with no penalty, and matching-list or stem-based numerical depending on the paper. The same chapter therefore arrives in up to four different shapes, and the coverage below names the chapter without naming the shape. Both papers are compulsory and each runs three hours.',

  'assam-cee':
    'Three subjects, 40 questions each, pitched at the ASSEB Higher Secondary syllabus, and the coverage below is the whole of it rather than a selection. Ninety seconds a question is generous enough that the paper expects working rather than recognition, which makes the topic list worth reading for depth: a chapter met once is not the same as a chapter you can derive from. The questions built here are English only, while the official paper runs in English and Assamese.',

  'ca-intermediate':
    'Six papers, not one sitting, and the coverage below maps all six. ICAI sets Advanced Accounting, Corporate and Other Laws, Taxation, Cost and Management Accounting, Auditing and Ethics, and Financial Management and Strategic Management separately, and the objective block in each is 15 compulsory multiple-choice questions worth 30 of that paper\'s 100 marks. So this is a list of six syllabuses, and its practical use is spotting which of the six you have left untouched rather than planning one revision cycle across them.',

  kcet:
    'The coverage below is three separate revisions, not one. Each subject is sat as its own 80-minute paper on its own morning, so the Physics list is prepared for one sitting and the Chemistry list for another, and nothing in the schedule asks you to hold all three at once. That is unusual enough to change how a topic list gets used. Nothing is deducted for a wrong answer, so a chapter you know partly is still worth meeting, and a question with more than one marked answer earns no credit.',

  'nchm-jee':
    'English and Aptitude for the Service Sector carry 75 of the 120 questions between them, and the coverage under the second is what makes this paper unlike any other on the site: it tests judgement about service situations rather than a body of knowledge, so no chapter list prepares it. Numerical Ability, Reasoning and General Knowledge take 15 each. One limit on the last of those: the questions built here stop at a 25 April 2026 cutoff, so use them for the recurring subject areas rather than for the news.',

  'rbi-assistant':
    'Prelims is three sections of equal weight and the coverage treats them that way, but the paper does not treat your time that way: each section is separately locked at 20 minutes, so the topics below cannot be traded across section boundaries however well you know them. Mains adds Computer Knowledge and General Awareness and pays a flat 1 mark a question across all five sections, which is unusual among bank papers and means no section there repays disproportionate revision either.',

  'rrb-alp':
    'The coverage spans two papers that ask for different things. CBT 1 is general: mathematics, mental ability, general science and general awareness, and its marks are never carried into the final panel. CBT 2 Part A then puts 50 of its 100 questions into Basic Science and Engineering, which is where the topic list starts to earn its keep, because that content appears nowhere in the first paper and is the part a candidate is most likely to leave until too late.',

  'ap-lawcet':
    'Aptitude for the Study of Law is half this paper at 60 questions, and the coverage under it is the part that transfers from no other entrance. General Knowledge and Mental Ability and Current Affairs take 30 each and are recall rather than reasoning, which makes them the quickest marks on a paper that allows 45 seconds a question. This page covers the 5-Year LL.B. route; the 3-Year route and AP PGLCET are separate papers with their own shapes.',

  'kerala-mca':
    'Half this paper is computing. Computer Science takes 50 of the 120 questions, against 25 each for Mathematics and Statistics and for Quantitative Aptitude and Logical Ability, which inverts the split many candidates assume from other MCA entrances where general aptitude dominates. The coverage below is worth reading in that order: the computing topics decide the paper, the two 25-question sections decide the margin, and English and General Knowledge together are 20 questions that nothing much can be done about in advance.',
};

export function getSyllabusNote(slug: string): string | undefined {
  return SYLLABUS_NOTES[slug];
}
