// Hand-written, one per exam, for the exam-pattern pages.
//
// Everything else on those pages is derived from the stage's own verified
// pattern. That is honest and it cannot drift, and it is also why two exams
// that publish the same pattern get the same page. KVS PRT and NVS TGT both
// set 100 questions for 300 marks in 120 minutes with a 1-mark deduction over
// the same six sections, so 73% of each page also appeared on the other when
// the section was first measured on 16 September 2026, against 25% for topic
// practice and 11% for the blog. Arithmetic cannot separate papers that are
// arithmetically the same. Only prose can.
//
// The rule here is the same rule the derived prose follows, applied by hand: a
// note says something the numbers in the table cannot, and every claim traces
// to that exam's own recorded pattern, to the notification note stored beside
// it in exams.ts, or to the questions built for it. Nothing is introduced that
// is not already checked: no cut-offs, vacancies, salaries or dates appear here
// that are not already recorded against that exam.
//
// Written for the exams that measured closest to a sibling. The rest of the
// section still runs on derived prose alone.

export const EXAM_PATTERN_NOTES: Record<string, string> = {
  'kvs-teaching-recruitment':
    'Nothing on this paper tests teaching. The six sections are computer literacy, two language competency tests, general knowledge, general reasoning and numeric ability, so a candidate applying for a primary-teaching post answers no question about pedagogy or child development at Tier 1. The weighting repays a second look: Basic Computer Literacy carries 20 questions and 60 marks, the same as General Knowledge and the same as General Reasoning, and double what either language section gets. Preparation built for a teaching-eligibility test will miss most of what is actually asked here.',

  'nvs-teaching-recruitment':
    'This Tier 1 paper contains no mathematics. The post is TGT Mathematics, but the six sections here are computer literacy, English, Hindi, general knowledge, general reasoning and numeric ability, and the subject itself is examined at Tier 2, which this site does not build. Numeric Ability is the closest the paper comes, and at 20 questions it sits inside a general-aptitude battery rather than standing in for a subject paper. The shell is identical to the KVS PRT Tier 1 paper, so practice material for one fits the other at this stage and nowhere beyond it.',

  'rpf-constable':
    'The 120 marks on this page are the only ones that rank you. The CBT screens for RPF and RPSF constable posts, and what follows it, the Physical Efficiency Test and the Physical Measurement Test, is qualifying only: both can remove you and neither adds to your score, with Document Verification and a Medical Examination after them. General Awareness is the largest section at 50 of the 120 questions, ahead of Arithmetic and General Intelligence and Reasoning at 35 apiece, so the section carrying the most marks is the one that cannot be worked out on the day.',

  'rpf-si':
    'This paper publishes a floor. The Sub-Inspector CBT sets a minimum pass percentage of 35% for UR, EWS and OBC-NCL candidates and 30% for SC and ST, and a raw total on its own will not tell you where you stand against it. With a third of a mark deducted per wrong answer, a candidate who attempts widely can finish under a line that a shorter and more accurate attempt would have cleared. The Constable CBT runs the same 120 questions in the same 90 minutes over the same three sections; this one is set at graduation level.',

  'ap-lawcet':
    'AP LAWCET is three examinations under one name and this page covers one of them. The 5-Year LL.B. route shown here runs 120 questions in 90 minutes; the 3-Year LL.B. route for graduates and AP PGLCET for LL.M. admission are separate papers with their own shapes, and a candidate who prepares from the wrong one prepares the wrong weighting. Within this route, Aptitude for the Study of Law is half the paper at 60 questions, with General Knowledge and Mental Ability and Current Affairs taking 30 each. Nothing is deducted anywhere, which the official 2026 question-paper preview confirms.',

  'tg-lawcet':
    'The largest section is really two sections. Aptitude for the Study of Law carries 60 of the 120 questions, and the official structure fixes 10 of those 60 as comprehension of legal passages rather than standalone principles, so a single heading covers 50 questions of one kind and 10 of another. The remaining half is General Knowledge and Mental Ability and Current Affairs at 30 apiece. The official 2026 instruction booklet confirms that no mark is deducted for a wrong answer. TG PGLCET, for LL.M. admission, is a separate paper and is not this one.',

  jcece:
    'Half an hour separates this paper from the polytechnic one. JCECE and Jharkhand PECE both set 150 questions split evenly across Physics, Chemistry and Mathematics for 150 marks, with the same quarter-mark deduction, but JCECE allows 180 minutes where PECE allows 150. That is 72 seconds a question here against 60 there, on papers pitched at different syllabi. The even three-way split leaves no section to build a plan around, which puts the whole plan on the clock and the deduction.',

  'jharkhand-pece':
    'This is a Class 10 paper and it is sat on paper. The JCECEB syllabus and scheme of examination set it on the Secondary syllabus for polytechnic diploma admission and confirm an offline OMR sitting: 150 four-option questions, 50 each in Physics, Chemistry and Mathematics, for 150 marks in 150 minutes. Material aimed at a 10+2 engineering entrance pitches above what is asked. The 60 seconds a question here is also tighter than the 72 that JCECE, the board\'s degree-level paper, allows for the same 150 questions.',

  nift:
    'The score out of 150 is not the score that ranks you. NIFT weights Section A at 30% and Section B at 70% toward merit, so Section B\'s 60 minutes carry more than twice the weight of Section A\'s 120, while a raw practice total out of 150 treats every question as equal. Section A also auto-submits as a group when its 120 minutes end, with no way back into it. One further limit is worth knowing before you read a score: the General Knowledge and Current Affairs content built here is frozen to an 8 February 2026 cutoff and does not follow the news cycle.',

  aiapget:
    'AIAPGET is four papers, one per AYUSH system, and this page shows the Homoeopathy one. Ayurveda, Siddha and Unani candidates sit their own papers and will not find their syllabus here. Within Homoeopathy the paper is a single undivided section of 120 questions for 480 marks, bounded by the National Commission for Homoeopathy\'s graduate curriculum, so there is no section to sequence and no weaker area to leave until last. Pacing across the two hours is the only structural decision the format leaves you.',

  'icar-aieea-pg':
    'Your subject group is chosen at application and it fixes the paper you sit. The pattern on this page is Major Subject Group 05, Agronomy, sub-subject 5.1: 120 questions for 480 marks in two hours, with 4 marks for a correct answer and 1 deducted for a wrong one. Other ICAR postgraduate major subject groups sit their own papers, and the AICE JRF/SRF doctoral examination is different again. Confirm which group your application names before you read these numbers as yours.',

  'rrb-ntpc':
    'CBT 1 decides nothing except whether you sit CBT 2. Its marks are qualifying only and are not carried into the final merit list, which CBT 2 settles on its own, so the 100-question paper that absorbs most of the preparation is a gate rather than a score. Both stages keep the same three sections and the same third-of-a-mark deduction, and CBT 2 adds 20 questions inside the same 90 minutes. Separate CBT 2 papers run for each pay level from Level 2 to Level 6, graded in difficulty rather than in structure.',

  'jee-main':
    'One deduction, two very different risks. Each subject sets 20 multiple-choice questions and 5 numerical-value questions, so 15 of the 75 take a typed integer with no options at all, and NTA applies the same 1-mark deduction in both parts. On a four-option question that deduction still leaves a blind guess marginally ahead. On an integer entry there is nothing to guess between, and a wrong value costs exactly what a wrong option does, which makes Section B the place where an unconsidered attempt is genuinely expensive.',

  'jee-main-paper-2':
    'The two stages below are not the same kind of thing, and the difference matters more than the tables do. Paper 2B is the complete official B.Planning objective structure: Mathematics, Aptitude Test and Planning, 100 questions for 400 marks inside NTA\'s own 180 minutes. Paper 2A is not complete. The official B.Arch paper also carries a 100-mark offline Drawing Test, which requires human evaluation and is excluded here, and the 180 minutes shown against 2A is this site\'s practice timer rather than an NTA duration for those two parts on their own.',

  'rbi-assistant':
    'Every section of the Mains paper is worth the same. Five sections of 40 questions and 40 marks apiece give a flat 1 mark a question throughout, which is unusual among bank mains papers that pay more for reasoning or quantitative work. The minutes are not flat: English Language, Numerical Ability and Reasoning Ability get 30 each, General Awareness 25 and Computer Knowledge 20, and each section closes when its own time ends. The section you are slowest in cannot borrow from the section you are quickest in. Prelims only shortlists; Mains decides the merit list.',

  'sbi-clerk':
    'One section pays more per question than the rest. Reasoning Ability and Computer Aptitude awards 1.2 marks a question against 1 everywhere else, so its 50 questions carry 60 of the 200 marks while Quantitative Aptitude carries 50 from the same 50 questions. That is why Mains is 190 questions for 200 marks rather than 190 for 190, and why an hour spent there is not interchangeable with an hour spent elsewhere. Each section closes separately, and a local-language test sits alongside Mains in settling the final merit list.',

  keam:
    'Mathematics is half this paper and Chemistry a fifth. Seventy-five of the 150 questions carry 300 of the 600 marks, against 45 questions for Physics and 30 for Chemistry, so a revision plan divided three ways gives the deciding subject a third of what it is worth. The options matter here too. KEAM sets five per question rather than four, which its own prospectus states, and that moves the arithmetic: with 4 marks for a correct answer and 1 deducted, break-even sits at 20%, and a blind guess across five options returns exactly 20%. Guessing at random gains nothing on this paper. Ruling one option out is what makes an attempt pay.',

  saeee:
    'SAEEE asks you to choose before you start. The official pattern sets Mathematics or Biology as the first subject, and this stage is the PCM route; a candidate on the Biology route sits a different first section and will not find it here. Past that the paper is unusually plain: 60 questions in 60 minutes, 20 each in Mathematics, Physics and Chemistry, one mark apiece, nothing deducted and nothing locked. A minute a question with no penalty leaves almost no strategy to get wrong, which makes this a test of coverage rather than of nerve.',

  kiitee:
    'The three subjects are weighted identically, which is rarer among private engineering entrances than you might expect. Physics, Chemistry and Mathematics take 40 questions and 160 marks each, so there is no subject to specialise in and a weakness anywhere costs exactly a third of the paper. The 2026 Information Brochure confirms one composite 150-minute timer with free movement between sections, and that is where the plan actually lives: at 75 seconds a question, the surplus from your quickest subject is spendable on your slowest and nothing in the format stops you.',

  'bv-btech':
    'Two hundred questions with nothing deducted makes this a race rather than a gamble. The 2026 Information Brochure sets Mathematics at 80 questions against 60 each for Physics and Chemistry, one mark apiece, no penalty for a wrong answer, across 180 minutes. That is 54 seconds a question, and it is the whole constraint: with nothing to lose by answering, the only way to shed marks here is to run out of clock before reaching the end. Getting to the last question matters more than polishing the first fifty.',

  'ibps-clerk':
    'The Mains split is genuinely unsettled, and this page says so rather than picking a version. Current sources agree on the 2026 revision, 160 questions for 200 marks in 125 minutes, up from 155 questions in 120 minutes, with Quantitative Aptitude raised from 35 questions to 40. They disagree with each other on how Reasoning Ability and Computer Aptitude, English Language and General and Financial Awareness divide the rest, and the IBPS notification itself could not be independently checked. Treat the totals as firm and any per-section figure you find elsewhere as provisional. Prelims is settled: 100 questions across three separately locked 20-minute sections.',

  aeee:
    'Two of the five sections are not science at all. Quantitative Aptitude takes 10 questions and English 5, which is 15 of the 100 questions and 45 of the 300 marks, and a candidate preparing AEEE as a pure PCM paper walks straight past them. They are also the cheapest marks in it, needing no chapter revision to collect. Mathematics is the largest section at 40 questions. One caveat about the topic labels inside these tests: Amrita publishes section names and a State Board and CBSE scope without an exhaustive chapter list, so the granular topics are a preparation map built here rather than an official syllabus.',

  'ca-intermediate':
    'No candidate ever sits this as one paper. The 90 questions counted on this page are this site\'s coverage across six separately sat papers, and ICAI sets each one on its own: Section A is 15 compulsory multiple-choice questions at 2 marks, 30 marks inside a 180-minute paper worth 100, with the other 70 descriptive. The number to take away is 30, not 90. What makes the objective block worth drilling is time rather than marks, because fifteen questions answered quickly protect the two and a half hours the descriptive answers need.',

  'ca-final':
    'Five papers, five identical objective blocks, none of them sat together. ICAI sets Financial Reporting, Advanced Financial Management, Advanced Auditing, Direct Tax Laws and Indirect Tax Laws separately, and Section A of each has the same shape: 15 compulsory multiple-choice questions at 2 marks, 30 of that paper\'s 100. The 75 questions counted here are coverage across all five, not a sitting anyone faces. At Final level the objective block is the smallest part of the hardest papers, which is precisely the argument for making it cost you the least time.',

  'cma-intermediate':
    'Eight papers carry the same fifteen-question block, the most repetition of any qualification on this site. ICMAI sets each of the eight separately, and in every one Section A is 15 compulsory multiple-choice questions at 2 marks each, 30 marks inside a 100-mark paper across 180 minutes. The 120 questions counted on this page are coverage across eight sittings, not anything a candidate meets at once. One habit built once transfers to all eight, and the other 70 marks in each paper are descriptive, which is where the time actually goes.',

  'cma-final':
    'Ten papers, and the objective block in each is identical to the last. That makes 150 questions of coverage spread across ten separate sittings, never 150 in a session. ICMAI fixes Section A at 15 compulsory multiple-choice questions worth 2 marks each in every paper, 30 marks of 100, inside that paper\'s own 180 minutes. With no negative marking on Section A, all 15 should carry an answer; the only way to lose on it is to spend time there that the 70 descriptive marks needed.',

  'ipmat-rohtak':
    'Three sections, exactly equal, and no sectional lock anywhere. Quantitative Ability, Logical Reasoning and Verbal Ability take 40 questions and 160 marks apiece under one composite 120-minute timer, so the paper makes no decision for you about where the two hours go. One detail about the real sitting is worth knowing before you read a score: the 2026 IPM administration carried two null questions and was evaluated out of 472 rather than 480. This mock keeps the full nominal 480-mark shell, so a total here is measured against the shell rather than against that evaluation.',

  'assam-cee':
    'Three hours for 120 questions is 90 seconds each, far more room than most engineering entrances allow. That tells you what kind of paper it is. Assam Science and Technology University sets it on the ASSEB Higher Secondary syllabus and delivers it on OMR, and at this pace the questions expect working rather than instant recognition. The three subjects are exactly equal at 40 questions apiece. Two limits are worth carrying in: a question with more than one marked response scores zero, and while the official paper runs in English and Assamese, this practice is English only.',

  'comedk-uget':
    'The duration on this page is not COMEDK\'s. Its 2026 notification and brochure do not publish a numeric session length in readable public text, so the 180 minutes shown is a TakeMockTest practice timer rather than an official figure, and it is the one number here to check against your own admit card. Everything else is plain: 180 questions, 60 each in Physics, Chemistry and Mathematics, one mark apiece, with nothing deducted for a wrong answer and nothing for an unattempted one. Under that scheme a blank at submission is a mark declined for free.',

  'sbi-po':
    'Marks per question vary more here than on any other bank paper. Data Analysis and Interpretation pays 2 marks a question, Reasoning and Computer Aptitude 1.5, General, Economy and Banking Awareness 1, and English Language 0.5, so 60 General Awareness questions and 30 Data Analysis questions are worth the same 60 marks. English is 40 questions for 20 marks, the lowest return in the paper, and it still takes 40 of the 180 minutes. Every section is separately timed, so those minutes cannot be moved to where they would earn more. A separately timed Descriptive Test follows Mains.',

  'rrb-group-d':
    'Reasoning is the largest section, which is not where most of the preparation goes. General Intelligence and Reasoning takes 30 of the 100 questions, ahead of General Science and Mathematics at 25 each and General Awareness and Current Affairs at 20, and it is the only one of the four that needs no syllabus, just practice at a question type. Ninety minutes for 100 questions leaves 54 seconds each. What follows the CBT adds nothing to your score: the Physical Efficiency Test is qualifying only, then Document Verification and a Medical Examination. This paper is the whole of your rank.',

  'hp-pat':
    'There is an English section on this paper and it is worth 80 marks. HP PAT sets Mathematics and Physics at 50 questions each, Chemistry at 30 and English at 20, so a candidate revising only PCM leaves 80 of the 600 marks untouched. The level is the other thing to get right. This is a polytechnic admission test taken after Class 10, pitched at the NCERT Class 10 Appendix-II syllabus in the board\'s own 2026 prospectus, so material aimed at a 10+2 engineering entrance sits well above what is asked.',

  'navy-ssr':
    'Read the scope before the numbers. The official Agniveer SSR written test is 100 questions in 60 minutes across four equal sections of 25, with 1 mark for a correct answer and 0.25 deducted for a wrong one. This practice covers English and Mathematics only, 24 questions in 14 minutes at the same equal proportion, because Science and General Knowledge both turn on facts that carry a higher correctness risk in self-authored content. Half the official paper is not built here. On pacing, 36 seconds a question is faster than almost any other defence entry asks for.',

  'territorial-army':
    'There is no Mathematics section in the current cycle, which is the first thing to check against any older material you are working from. The official written exam is 100 questions in two hours: Reasoning 40, General Knowledge 30 and English 30, with a third of a mark deducted for a wrong answer. This practice covers Reasoning and English at the same 40:30 proportion, 21 questions in 25 minutes. General Knowledge is not built here because it turns on current affairs, so roughly a third of the official paper sits outside this practice.',

  'tancet-mba':
    'Two of the five sections appear on almost no other MBA entrance. Data Sufficiency gets 20 questions of its own, equal to Quantitative Aptitude, where most entrances scatter a handful of them inside a quantitative section. Business Situations gets another 20. Both ask for judgement rather than calculation, and time spent computing a value that Data Sufficiency never asked for is time gone. Anna University publishes no sectional time limit, so the whole 120 minutes follows whatever order you choose. That comes to 72 seconds a question across all five sections.',

  'amu-btech':
    'AMU does not publish a per-subject split, and this page does not invent one. The Guide to Admissions sets 100 questions across Chemistry, Physics and Mathematics for 100 marks in 120 minutes, delivered on OMR, and says no more. The 34 Chemistry, 33 Physics and 33 Mathematics division used in the practice tests is a pacing structure chosen here, not an AMU figure, so it is not a basis for weighting your revision. What is official: 1 mark for a correct answer, 0.25 deducted for a wrong one, which puts break-even at one in five, and 72 seconds a question.',
};

export function getExamPatternNote(slug: string): string | undefined {
  return EXAM_PATTERN_NOTES[slug];
}
