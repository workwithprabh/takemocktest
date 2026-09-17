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
    'Five papers, five identical objective blocks, none of them sat together. The 75 questions counted on this page are coverage across all five, and no candidate ever answers more than 15 of them in a session. Each block is worth 30 marks of a 100-mark paper with the other 70 descriptive, so the objective part carries under a third of the scoring and should take far less than a third of the three hours. Because the shape repeats across every paper, one drilled habit carries to all five regardless of which subject the day brings.',

  'cma-intermediate':
    'Eight papers carry the same fifteen-question block, the most repetition of any qualification on this site. That makes 120 questions of coverage spread across eight separate sittings, and no candidate meets more than 15 of them in a day. Each block is worth 30 marks of a 100-mark paper and the remaining 70 are descriptive, so the objective work is under a third of what a paper is scored on and takes far less than a third of its three hours once it is drilled. The eight subjects differ; the format does not.',

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
    'Two of the five sections appear on almost no other MBA entrance. Data Sufficiency stands as a full section of 20 questions, ranked level with Quantitative Aptitude rather than folded inside it, and Business Situations takes another 20. Both ask for judgement rather than calculation, and time spent computing a value that Data Sufficiency never asked for is time gone. Anna University publishes no sectional time limit, so the whole 120 minutes follows whatever order you choose. That comes to 72 seconds a question across all five sections.',

  'amu-btech':
    'AMU does not publish a per-subject split, and this page does not invent one. The Guide to Admissions sets 100 questions across Chemistry, Physics and Mathematics for 100 marks in 120 minutes, delivered on OMR, and says no more. The 34 Chemistry, 33 Physics and 33 Mathematics division used in the practice tests is a pacing structure chosen here, not an AMU figure, so it is not a basis for weighting your revision. What is official: 1 mark for a correct answer, 0.25 deducted for a wrong one, which puts break-even at one in five, and 72 seconds a question.',

  mat:
    'Five sections, 30 questions each, 30 marks each, and no sectional time limit anywhere. MAT is unusually hands-off: it weights nothing for you and locks nothing, so every decision about order and allocation belongs to you rather than to the paper. The pace is what makes that decision matter. One hundred and fifty questions in 120 minutes is 48 seconds each, faster than most entrances at this level, so a section you drift into can take the time two others needed. With 0.25 deducted against 1 for a correct answer, break-even sits at one in five.',

  'rbi-grade-b':
    'General Awareness is 80 of the 200 questions and gets 25 minutes. That single line is the shape of the paper: the largest section by a wide margin, with the least time per question of the four, because the Bank is testing recall rather than working. Reasoning takes 60 questions and 45 minutes, while English Language and Quantitative Aptitude get 30 questions and 25 minutes apiece. Every window locks separately, so nothing saved in one can be spent in another. Phase I only shortlists: its marks are not carried into the final merit list, which Phase II decides, and the Phase II pattern is still under review here.',

  'state-set':
    'Two papers in one sitting, and the subject paper is two thirds of it. Paper II in Commerce carries 100 questions and 200 of the 300 marks, against 50 questions and 100 marks for Paper I on Teaching and Research Aptitude, so a strong general paper cannot rescue a weak subject one. Three hours covers both, which leaves 72 seconds a question across the whole sitting. One gap is worth naming: the source checked for this pattern does not state a deduction for a wrong answer, so the negative-marking row above says nothing rather than assuming there is none.',

  'iiser-iat':
    'Four subjects at exactly 15 questions each, and one of them is Biology. That combination is unusual at this level, where most candidates arrive having prepared three subjects, and IAT gives Biology the same 60 marks it gives Physics, Chemistry and Mathematics. There is no section to specialise in and no quarter of the paper to write off. The syllabus runs mainly on NCERT Classes XI and XII with some Class X foundation, and there is no current-affairs component at all, so nothing here depends on the news cycle. The official paper is bilingual English and Hindi; this practice is English only.',

  'mah-bhmct-bca-bba-bms-bbm-cet':
    'One CET admits to five different degrees, which is what the name is telling you. Hotel management, computer applications and three business-administration streams all take the same 100-question paper: English Language 30, Reasoning 30, General Knowledge and Awareness 20, Computer Basics 20. Nothing in it is specific to the course you applied for, so this cannot be prepared by subject and has to be prepared by aptitude. Two hours for 100 questions leaves 72 seconds each. The source checked here does not state a deduction for a wrong answer, so the negative-marking row says nothing rather than assuming none.',

  'ssc-cht':
    'Two languages, two locked hours, nothing else. Paper I sets 100 General Hindi questions and 100 General English questions, each part inside its own 60-minute window, and when a part closes its unused time cannot move to the other. That symmetry is the whole paper. There is no reasoning section and no general awareness to fall back on, so a candidate strong in one language and weak in the other has nowhere to hide. Paper I only shortlists. Paper II is a 200-mark descriptive translation and essay paper, which a multiple-choice interface cannot reproduce and which is not built here.',

  siteee:
    'Mathematics is half this paper on its own: 30 of the 60 questions and 60 of the 120 marks, against 15 apiece for Physics and Chemistry. The published structure implies 2 marks for a correct answer and there is no deduction, so an unmarked question is a mark declined for nothing. One thing this page cannot confirm: Symbiosis does not separately publish a fixed option count, so the four options used in the practice here are a platform choice rather than a stated feature of the real paper. With a minute a question and free movement between subjects, the surplus from the lighter sections belongs to the one carrying half the marks.',

  'kmat-karnataka':
    'Everything about this paper is a multiple of 40. Language Comprehension, Mathematical Skills and Basic Aptitude take 40 questions apiece for 40 marks each, across 120 minutes with no sectional time limit, which leaves exactly a minute a question and no structural reason to prefer one section over another. Nothing is deducted for a wrong answer either, so an unmarked question scores the same zero that a wrong one does. Between the flat weighting, the flat clock and the absent penalty, this paper removes almost every decision except how fast you read.',

  'ssc-je':
    'Half this paper is your own discipline. General Engineering carries 100 of the 200 questions in the branch you choose, Civil, Mechanical or Electrical, against 50 each for General Intelligence and Reasoning and General Awareness, so the branch paper decides the result and the two general sections decide the margin. The notice leaves one thing open. It states a single two-hour duration with no per-section times, so nothing establishes whether the three parts are separately timed, and this page does not assert it either way. Prepare to a composite two hours and check your own admit card.',

  'ap-pgecet':
    'A single undivided section of 120 questions means there is nothing to sequence. The Computer Science and Information Technology paper runs 120 four-option questions for 120 marks in 120 minutes, a clean minute each, with one mark for a correct answer and nothing deducted for a wrong one, so every question should carry an answer by the time you submit. What the official material does not publish is a per-topic distribution. The nineteen domains used to balance the practice here are an editorial choice made on this site, not APPGECET weightage to revise against.',

  cds:
    'The two papers here are not scored the same way, and the English one is the odd case. Elementary Mathematics is 100 questions for 100 marks, a clean mark each, with a third deducted for a wrong answer. English is 120 questions for 100 marks, roughly 0.83 a question, so a wrong answer there costs about 0.28 rather than 0.33. Both run two hours. The practice sets built on this site are deliberately shorter than either official paper, 18 Mathematics questions and 12 English, and the English set scores at a clean 1 mark a question rather than at the official fractional value.',

  'tg-polycet':
    'The paper you sit holds 150 questions; the rank you want is computed from 120. The official booklet contains Mathematics 60, Physics 30, Chemistry 30 and a separate Biology 30 for the agriculture, veterinary and horticulture route, and the Polytechnic Engineering MPC rank is generated from the 120 that exclude Biology. Those 120 are what this page shows. Mathematics is half of them, heavier than most polytechnic entrances weight it, so a revision plan divided three ways gives the deciding section a third of its due. Nothing is deducted for a wrong answer.',

  afcat:
    'Four sections, exactly equal, and one of them is not built here. The official AFCAT gives General Awareness, Verbal Ability, Numerical Ability, and Reasoning and Military Aptitude 25 questions and 75 marks apiece, each question worth 3 marks with 1 deducted for a wrong answer, inside one continuous two-hour window with no sectional lock. This practice covers the three sections other than General Awareness at the same proportion, 24 questions in 29 minutes, so a quarter of the official paper sits outside it. Reasoning and Military Aptitude is the section with no equivalent on any civilian entrance.',

  'cuet-pg':
    'CUET (PG) is not one examination. It is a large family of domain-specific papers, and this page covers exactly one of them: COQP12, the General Paper used for MBA and other management-adjacent admissions. A candidate sitting a subject paper will find none of their syllabus here. Within COQP12 the shape is simple, 75 compulsory questions for 300 marks in 90 minutes with 4 marks for a correct answer and 1 deducted, which comes to 72 seconds a question and break-even at one in five. The official medium is English and Hindi; this practice is English only.',

  puleet:
    'This is a lateral-entry route rather than a freshman engineering entrance, and the weighting says so plainly. General Engineering takes 60 of the 100 questions, drawn from basic electrical engineering, basic electronics, programming fundamentals and mechanical fundamentals, while Physics, Chemistry, Mathematics and General Aptitude take 10 apiece. Your diploma coursework is the preparation here, and Class 12 or JEE material reaches 30 questions of the 100. Panjab University admits on this into the second year of a B.E. programme, and its 2026 prospectus confirms the split. One hundred questions in 100 minutes leaves a clean minute each.',

  inet:
    'Each of the four sections carries its own 40% qualifying minimum, which changes what a total means. English, Reasoning and Numerical Ability, General Science and Mathematical Aptitude, and General Knowledge take 25 questions and 100 marks apiece, and a candidate scoring heavily in three while falling under 40% in the fourth does not qualify, whatever the aggregate says. The weakest section sets the outcome, not the strongest. Two of the four are built here, English and Reasoning and Numerical Ability, at the same proportion as the official paper; the other two are not, which leaves half of it outside this practice.',

  'niacl-ao':
    'General Awareness gets the same 50 questions as every other section and ten minutes less to answer them. The Main objective paper runs Reasoning, English Language and Quantitative Aptitude at 40 minutes each and General Awareness at 30, all separately locked, which prices recall at 36 seconds a question against 48 everywhere else. Prelims shortlists roughly fifteen candidates per vacancy and its marks do not carry forward. The Main examination also carries a separate 30-minute descriptive test of letter writing and essay, which candidates must qualify but which counts toward neither shortlisting nor final selection, and which is not built here.',

  ksdat:
    'Design Awareness is the largest section and the one nothing else prepares you for. It takes 30 of the 100 questions, ahead of General Knowledge, English Language, and Numerical Ability and Analytical Aptitude at 20 each, with Social and Basic Sciences at 10. Seventy questions are general aptitude that transfers from any other entrance; the remaining 30 transfer from nowhere. One hundred questions in 100 minutes is a clean minute each. The source checked for this pattern does not state a deduction for a wrong answer, so the negative-marking row says nothing rather than assuming none.',

  'dnb-pdcet':
    'The real paper locks its sections and this practice does not, which is the gap to rehearse around. NBEMS delivers PDCET in sequentially locked time-bound blocks, and the bulletin offers three blocks of 40 questions in 40 minutes only as an example while saying the actual split may vary, so nothing here freezes that example into a rule and the mock runs one composite 120-minute timer instead. Practise to a minute a question rather than to any particular block size. All 120 questions come from Anaesthesiology at Post Diploma exit level across the whole Diploma curriculum, with no per-topic quota, and the other PDCET specialties sit their own papers.',

  'ssc-cgl':
    'Tier 1 gives each subject 15 minutes and nothing more. Four sections of 25 questions run in four separate quarter-hour windows, so a question you cannot crack in 36 seconds is a question to leave, and time saved on Reasoning cannot be spent rescuing Quantitative Aptitude. Tier 2 Paper I is a different animal. English Language and Comprehension alone carries 45 questions and 135 of the 450 marks, more than Mathematical Abilities and Reasoning at 90 apiece, and its sections are separately timed as well. The 15-minute Data Entry Speed Test attached to Paper I is qualifying and sits outside the totals above.',

  met:
    'English is a sixth of this engineering paper. Ten questions carry 40 of the 240 marks, more than most B.Tech entrances give language at all, and a candidate revising PCM alone leaves those 40 untouched. Every question is worth the same 4 marks whatever section it sits in, so a question of English pays exactly what a question of Mathematics pays. Mathematics is still the largest block at 20 questions and 80 marks, with Physics and Chemistry at 15 and 60 each. Two minutes a question across 60 questions is generous for this level.',

  'neet-ug':
    'Two of every four questions here are Biology: 90 of the 180, carrying 360 of the 720 marks, which is what Physics and Chemistry carry between them. Two things this page is careful about beyond the weighting. No mandatory internal split between Botany and Zoology is built into the Biology block, because the paper asserts none. And the delivery mode differs from the practice, since NTA runs this on OMR sheets in a hall while everything on this site is on screen, so the seconds an answer sheet costs a candidate are reproduced in none of these timings.',

  'ssc-gd-constable':
    'Each question is worth 2 marks, which is worth noticing because the deduction is not. A wrong answer costs 0.25 against a correct answer\'s 2, so break-even sits at about one in nine, far more forgiving than the one in five or one in four most government papers use, and anything you can narrow at all is clearly worth attempting. The four sections are exactly equal at 20 questions and 40 marks apiece, all pitched at Matriculation level, and 60 minutes across 80 questions leaves 45 seconds each. Everything after the CBE is physical, medical or documentary, and none of it is written.',

  'mh-cet-law':
    'Five sections, five different sizes, one mark a question throughout, so section size is section weight here with nothing else to adjust for. Legal Aptitude and Legal Reasoning and Logical and Analytical Reasoning take 32 questions each, General Knowledge and Current Affairs and English Language take 24 each, and Mathematics Aptitude just 8. The 3-Year paper inverts that balance almost exactly, so a candidate who picks up material for the wrong route prepares the wrong half of a syllabus. Nothing is deducted for a wrong answer, and two hours across 120 questions leaves a clean minute each.',

  'chandigarh-cucet':
    'Twenty-five of these 100 questions sit outside Physics, Chemistry and Mathematics, which take 25 apiece. English accounts for 10 of them and Aptitude for 15, and they are the cheapest marks in the paper because neither needs chapter revision to collect. Nothing is deducted for a wrong answer, which removes the only reason to leave anything blank. One hundred and twenty minutes across 100 questions gives 72 seconds each, comfortable enough to reach the end and still sweep back for whatever is unmarked.',

  'dsssb-teaching-recruitment':
    'Half this paper is one block. Mathematics and Teaching Methodology carries 100 of the 200 questions, against 20 apiece for Arithmetical and Numerical Ability, English, General Awareness, Hindi, and General Intelligence and Reasoning. That block decides the result and the five small sections decide the margin, which is the reverse of how revision usually gets split. DSSSB publishes no per-section time limits, so the sectional durations on this site are practice allowances in proportion to question share rather than official figures. Two hours across 200 questions is 36 seconds each, and that is the real pressure.',

  'jain-jet':
    'Six sections, and 60 of the 150 questions sit outside science entirely. Physics, Chemistry and Mathematics take 30 questions each, but so does English, with Aptitude and Logical Reasoning at 15 apiece. One caveat about the structure: JAIN\'s live admissions page controls this six-section split, while the official 2026 model paper groups its last 30 sample questions under a single Logical Reasoning heading, and this site follows the admissions page. Nothing is deducted for a wrong answer, and 150 questions in 150 minutes is a clean minute each with free movement across all six sections.',

  cmat:
    'One hundred and eighty minutes for 100 questions is 108 seconds each, unusually generous at this level, and there is no sectional time limit to spend it for you. All five sections are exactly equal at 20 questions and 80 marks, including Innovation and Entrepreneurship, which appears on no other major MBA entrance and is worth precisely what Quantitative Techniques is worth. Flat weighting and a free clock together mean nothing in the format rewards or punishes the order you choose. With 4 marks up and 1 deducted, break-even sits at one in five.',

  'nchm-jee':
    'Two limits are worth reading before the table. The General Knowledge and Current Affairs questions built here are frozen to a 25 April 2026 cutoff and do not follow later events, and the official paper runs in English and Hindi while this practice is English only. The structure itself is lopsided by design: 75 of the 120 questions sit in English Language and Aptitude for the Service Sector, while Numerical Ability, Reasoning and General Knowledge take 15 apiece. That is a minute a question across the paper, with 4 marks up and 1 deducted.',

  'kerala-mca':
    'The smallest section here is five questions. General Knowledge takes 5 of the 120 and English 15, while Computer Science alone takes 50, with Mathematics and Statistics and Quantitative Aptitude and Logical Ability at 25 each. The 20 questions at the bottom of that spread can absorb far more time than they are worth if you let them, which is the argument for leaving both until last. A clean minute a question across 120 leaves room to reach the end. One gap: the source checked for this pattern does not state a deduction for a wrong answer, so the negative-marking row says nothing rather than assuming none.',

  'ca-foundation':
    'The numbers in the table are this site\'s set, not ICAI\'s paper. The official Paper 3 on Quantitative Aptitude is 100 objective questions for 100 marks in two hours, split Business Mathematics 40, Logical Reasoning 20 and Statistics 40, with a quarter mark deducted for a wrong answer. What is built here is a shorter set at the same three-way proportion, 30 questions in 36 minutes, so the shape is the thing to learn from it and the length is practice rather than rehearsal. On the marking, 0.25 against 1 puts break-even at one in five. Paper 4 is a separate paper.',

  'mah-mba-cet':
    'The questions here carry five options rather than four, which the notification states and which lowers what a blind guess returns on a paper this long. Beyond that the weighting is the story. Two reasoning sections between them account for 100 of the 200 questions, Logical Reasoning at 75 and Abstract Reasoning at 25, while Quantitative Aptitude and Verbal Ability with Reading Comprehension take 50 each. Abstract Reasoning is pattern and sequence work rather than verbal logic and repays practice of its own. The source checked here does not state a deduction, so the negative-marking row says nothing rather than assuming none.',

  micat:
    'Divergent and Convergent Thinking is a third of this paper and exists on no other management entrance. It takes 20 questions, exactly as many as Verbal Ability and as Quantitative Ability and Data Interpretation, so a candidate preparing MICAT on CAT material covers two sections of the three. A minute a question across 60 questions leaves no room to work out the format on the day, which makes that third section the one to meet in advance. A wrong answer costs 0.25 against 1, which puts the attempt threshold at one in five.',

  'aiims-bsc-nursing':
    'Ten questions here are General Knowledge, and they are the ones this site handles most carefully: the content is held to stable, evergreen facts rather than current affairs, because an answer that changes between cycles cannot be checked. The other 90 split evenly across Physics, Chemistry and Biology at 30 apiece, so nothing repays disproportionate revision. Two hours across 100 questions is 72 seconds each. A wrong answer costs a third of a mark against 1, putting break-even at one in four, exactly what a blind guess across four options returns. The Post-Basic and Allied papers are separate and not covered here.',

  'mh-cet-law-3-year':
    'General Knowledge and Current Affairs takes 32 of the 120 questions here, more than either reasoning section gets. That is the heaviest current-affairs load of any law entrance on this site, and it is the part no amount of aptitude practice reaches. English is larger still at 40 questions, so 72 of the 120 reward reading and recall rather than reasoning, while Legal Aptitude and Logical Reasoning take 24 apiece. The 5-Year paper reverses that balance, which is why material written for one route misleads on the other. Nothing is deducted, and a minute a question across two hours.',

  'nmims-cet':
    'The handout publishes per-section times, and this page is deliberate about what that does and does not establish. NMIMS sets 30 minutes each for Physics, Chemistry and Mathematics, 20 for Logical Intelligence and 10 for Verbal Reasoning, but it does not say those windows lock or that a section auto-submits, so the practice runs one unrestricted 120-minute timer and treats the split as a budget rather than a rule. Three quarters of the paper is PCM at 30 questions a subject, and the remaining 30 go to Logical Intelligence and Verbal Reasoning, which is more non-science weight than most engineering entrances carry. This stage follows the Mathematics track.',

  jeecup:
    'Two sections, and one of them is a single subject. Mathematics takes 50 questions and 200 of the 400 marks on its own, while Physics and Chemistry share the other 50 questions and 200 marks between them, so one subject is worth as much as the two sciences together and a plan divided three ways gives it a third of its due. The level is polytechnic rather than 10+2, so the syllabus sits at school-leaving standard and material written for an engineering entrance pitches above it. Nothing is deducted for a wrong answer, and 150 minutes across 100 questions leaves 90 seconds each.',

  viteee:
    'The 2026 pattern introduced negative marking, and material from 2025 will tell you otherwise. A wrong answer now deducts 1 against 4 for a correct one, where the previous cycle deducted nothing at all, so a habit built on last year\'s paper of answering everything regardless has become expensive. Fifteen of the 125 questions are Aptitude and English rather than science, worth 60 of the 500 marks between them. Mathematics is the largest block at 40 questions and 160 marks. This is the MPCEA Mathematics stream, and 150 minutes across 125 questions leaves 72 seconds each.',

  'aiims-norcet':
    'Five blocks of 18 minutes, each disabled the moment its time runs out. That is the defining feature of Stage I: 20 questions to a block with no way back, so a question left in Block A cannot be revisited from Block C and there is no end-of-paper sweep to rely on. AIIMS fixes the overall composition at 20 General Knowledge and Aptitude questions against 80 Nursing questions but does not publish how those spread across the blocks, so the even four-and-sixteen mix used inside every block here is a choice made on this site. Stage I only decides who sits Stage II, which is a separate paper.',

  jipmat:
    'Three sections split as evenly as 100 questions allow: Quantitative Aptitude 33, Data Interpretation and Logical Reasoning 33, Verbal Ability and Reading Comprehension 34. Nothing in the weighting favours one over another and there is no sectional time limit, so the whole 150 minutes follows whatever order you set for yourself. That comes to 90 seconds a question, roomier than most entrances at this level. With 4 marks for a correct answer and 1 deducted, break-even sits at one in five. This is the joint entrance for the integrated programmes at IIM Bodh Gaya and IIM Jammu.',

  'ap-ecet':
    'Half this paper is your diploma subject. Computer Science and Engineering carries 100 of the 200 questions, against 50 for Mathematics and 25 each for Physics and Chemistry, so a freshman science revision reaches a quarter of what is asked and the branch paper settles the rest. Nothing is deducted for a wrong answer, which makes an unmarked question a mark declined for free. Three hours across 200 questions leaves 54 seconds each, tight enough that reaching the end matters more than perfecting the opening.',

  'ssc-steno':
    'English is half this paper and gets half the clock. The Commission sets the three windows itself, 30 minutes each for General Intelligence and Reasoning and for General Awareness and 60 for English Language and Comprehension, so the 100 English questions have a full hour of their own with nothing borrowed from either side. That works out at 36 seconds a question evenly throughout. The windows come from the notice rather than from arithmetic done here, which is rarer in this data than you would expect, so the per-section budget on this page is the real one.',

  htet:
    'Ten of these questions are Haryana-specific, and no national teaching-eligibility material covers them. Haryana General Knowledge and Awareness is the section nothing else prepares, while Child Development and Pedagogy, Environmental Studies and Mathematics take 30 apiece and the two language sections 15 each. Level 1 qualifies a candidate to teach Classes I to V. Nothing is deducted for a wrong answer, so a blank scores what a wrong answer scores, and the Board publishes no per-section time limits, which makes the sectional durations on this site practice allowances rather than official figures.',

  'ugc-net':
    'Two papers run back to back with no break between them under a single three-hour timer. Paper II on Computer Science and Applications carries 100 questions and 200 of the 300 marks, twice what Paper I on Teaching and Research Aptitude carries at 50 and 100, so the subject paper settles the outcome and the aptitude paper settles the margin. Nothing is deducted for a wrong answer anywhere in either, which removes the only reason to leave a question blank. Three hours across 150 questions leaves 72 seconds each.',

  'mppsc-state-service':
    'Three marks a question is unusual at this level, and it changes what the deduction means. Most state services aptitude papers pay 2; this one pays 3 and takes 1 off, so the ratio is wider and a narrowed guess is worth more here than the same guess is elsewhere. The paper is also a single undivided section of 100 questions, which leaves nothing to sequence and no weak area to save until last. Two hours across those 100 questions gives 72 seconds each, so the format tests accuracy rather than pace.',

  'nabard-grade-a':
    'Five of the eight tests do not count toward your rank. Reasoning, English Language, Computer Knowledge, Quantitative Aptitude and Decision Making are qualifying only, while General Awareness, Economic and Social Issues, and Agriculture and Rural Development decide the merit ranking that shortlists for Mains. You must still clear a minimum in every qualifying test, so none can be abandoned, but hours spent pushing a qualifying score well past its cut-off are hours taken from the three that actually rank you. One composite 120-minute timer covers all eight, so the allocation is yours to make.',

  'agniveer-vayu':
    'Eighty-five minutes for 100 questions is 51 seconds each, and the official paper covers the combined Science and Other-than-Science route: English 20 questions, Physics 25, Mathematics 25, and Reasoning and General Awareness 30. This practice covers English and Mathematics only, at the same proportion, so a little under half the official paper is built here. On marking, 0.25 comes off against 1 for a correct answer, which puts break-even at one in five and makes a narrowed guess worth taking even at that pace.',

  'rrb-technician':
    'There is only one CBT here, and it decides the shortlist directly. No second stage filters afterwards: this paper sends candidates to Document Verification, capped at the number of notified vacancies. Minimum pass percentages apply, 40% for UR and EWS, 30% for OBC (NCL) and SC, and 25% for ST, so a raw total on its own will not tell you where you stand. One caution about the tables below: the notification labels its subject-wise split as indicative and says the papers may vary, so treat the per-section counts as a guide rather than a guarantee.',

  ctet:
    'Five sections of exactly 30 questions, with nothing weighted above anything else. Child Development and Pedagogy, Mathematics, Environmental Studies, Language I and Language II each carry 30 questions and 30 marks, so a weakness anywhere costs the same fifth of the paper. The official paper has a substructure this page does not reproduce: Mathematics and Environmental Studies are each 15 content and 15 pedagogy, both languages 15 comprehension and 15 pedagogy, and Child Development splits three ways. Those divisions are real but are not built as separate sections here. Nothing is deducted, and a minute a question across all 150.',

  slat:
    'Five sections of twelve questions each, an hour in total, one mark apiece and nothing deducted. SLAT is the flattest law entrance on this site: Logical Reasoning, Legal Reasoning, Analytical Reasoning, Reading Comprehension and General Knowledge all carry identical weight, so there is no section to specialise in and no penalty to weigh against attempting. Three of the five are reasoning of one kind or another, a heavier reasoning load than the section count alone suggests. A minute a question leaves no room to work out the format on the day.',

  'rrb-paramedical':
    'Seventy of these 100 questions are not built here, and the reason is worth understanding. Professional Ability is the largest section by a wide margin, but RRB Paramedical covers roughly seven to nine distinct posts, from Staff Nurse to Radiographer to ECG Technician, each with its own technical syllabus, so no single Professional Ability content would be accurate for every candidate. This site builds the three common subjects only, 30 of the 100 questions. The table below is the whole official paper; the practice covers the part that is the same for everyone.',

  'mah-mca-cet':
    'Every question here is worth 2 marks, which is how 100 questions make 200. Mathematics and Statistics and Logical or Abstract Reasoning take 30 questions apiece for 60 marks each, while English Comprehension and Verbal Ability and Computer Concepts take 20 each for 40. Ninety minutes across 100 questions is 54 seconds each, faster than most MCA entrances and faster than the marks-per-question figure makes it feel. One gap: the source checked here does not state a deduction for a wrong answer, so the negative-marking row says nothing rather than assuming none.',

  nda:
    'Two papers, both scored in fractions, and the practice on this site is shorter than either. Mathematics is 120 questions for 300 marks at 2.5 apiece with about 0.83 deducted; the General Ability Test is 150 questions for 600 marks at 4 apiece with about 1.33 deducted. Both land break-even at one in four. The GAT splits English 50 questions and General Knowledge 100, and only the English part is built here, so two thirds of that paper sits outside this practice. The Mathematics set here is 18 questions in 23 minutes against an official 120 in 150.',

  'ssc-cpo':
    'Both papers run on 30-minute windows, including the one that looks like a single subject. Paper 1 gives each of its four sections its own half hour with no shifting between them. Paper 2 is 200 English Language and Comprehension questions and is also divided into four 30-minute parts rather than one continuous two hours, which is easy to miss on a paper that never changes subject. Thirty-six seconds a question throughout, in both. Between the two papers sit a Physical Standard Test and a Physical Endurance Test.',

  'rrb-alp':
    'CBT 1 is a screening exam and its marks never reach the final panel. Seventy-five questions in 60 minutes decide only who proceeds, with roughly fifteen times the notified vacancies per board shortlisted on normalised merit, and minimum pass percentages of 40% for UR and EWS, 30% for OBC (NCL) and SC, and 25% for ST. CBT 2 Part A then runs 100 questions in 90 minutes, where Basic Science and Engineering alone carries 50. Part B and the Computer Based Aptitude Test are later stages and are not covered here.',

  ojee:
    'One hour for 60 questions and two hours for 120: the two stages here run at the same pace but are not the same exam, and they are not for the same candidate. One is a vacant-seat route: Odisha fills first-year B.Tech places on JEE Main, and the 2nd/Special paper only ranks candidates for whatever is left afterwards. The other, LE-Tech, admits Diploma holders straight into the second year, and its three subjects are engineering coursework rather than school science. The marking is 4 up against 1 off in both, so the attempt threshold is one in five either way. Confirm which route your application names before reading either table as yours.',

  'cma-foundation':
    'Statistics outweighs Business Mathematics by half again. ICMAI weights Paper 3 at roughly 40% Business Mathematics and 60% Statistics, the latter covering data representation, central tendency and dispersion, correlation and regression, probability, index numbers and time series, so a candidate revising arithmetic and algebra alone prepares the smaller share. The official paper is 50 objective questions for 100 marks in one hour with no negative marking. What is built here is shorter, 30 questions in 36 minutes at the same proportion, so the shape carries across and the length does not.',

  ailet:
    'Logical Reasoning is the largest section on the UG paper at 70 of the 150 questions, ahead of English at 50 and Current Affairs and General Knowledge at 30. That is a heavier reasoning load than most law entrances set, and it is the section that rewards drilling rather than reading. Current Affairs is the part this site does not build, so the practice covers English and Logical Reasoning at the official 5:7 proportion and leaves a fifth of the paper outside it. A wrong answer costs 0.25 against 1, putting break-even at one in five.',

  'rrb-je':
    'Two thirds of the second paper is one section. CBT 2 gives Technical Abilities 100 of its 150 questions, with General Awareness and Physics and Chemistry at 15 each and Computers and Environment at 10 apiece, so the branch-specific block settles that stage almost on its own. CBT 1 is the common screening test across every Junior Engineer, Depot Material Superintendent and Chemical and Metallurgical Assistant post, and it spreads far more evenly: Mathematics and General Science at 30 each, Reasoning 25, General Awareness 15. Both run one composite timer with no sectional lock.',

  bitsat:
    'Thirty of these 130 questions are English Proficiency and Logical Reasoning, worth 90 of the 390 marks between them, and a candidate revising PCM alone leaves every one of them untouched. Mathematics is the biggest block at 40 questions and 120 marks. One thing the table does not show: BITSAT offers 12 optional extra questions to candidates who finish early, and they are not part of this variant, so 130 here is the whole of what is built. Three marks for a correct answer against 1 deducted puts break-even at one in four, exactly what four options return to a blind guess.',

  'cusat-cat':
    'The three subjects step down in size rather than splitting evenly: Mathematics 90 questions, Physics 75, Chemistry 60, worth 360, 300 and 240 marks. That ladder means an even three-way revision plan overweights Chemistry by half and shortchanges Mathematics by the same margin. The syllabus stays inside Plus Two, so difficulty is not the problem; volume is, at 225 questions in 180 minutes. This page covers B.Tech Test Code 101 only, and CUSAT\'s Marine Engineering route and its lateral-entry admission test are separate papers.',

  snap:
    'The notice publishes no per-section durations, so none are shown above, and that absence is the point rather than a gap. SNAP gives one 60-minute window to all four sections and lets candidates attempt them in any order, which makes the order itself a decision worth settling before the day. Analytical and Logical Reasoning and the Quantitative section take 20 questions each, with General English and Ethics, Morality and Values at 10 apiece. A minute a question, and 0.25 deducted against 1 puts break-even at one in five.',

  nism:
    'This is a certification examination rather than an entrance, and it behaves accordingly. One hundred questions in 120 minutes is 72 seconds each with nothing deducted for a wrong answer, so there is no guessing calculus to manage and no reason to submit with anything blank. What is built here covers the calculation-heavy part of Series V-A, net asset value and returns alongside systematic investment plans and growth, rather than the whole syllabus, so read a score as a measure of that slice rather than of the certification.',

  'nerist-nee':
    'Questions and marks do not move together here. Physics and Chemistry take 35 questions for 45 marks each, Mathematics 45 questions for 60, so 115 questions make 150 marks and no section pays a round number per question. Mathematics is the largest block on both counts. Three hours across 115 questions leaves 94 seconds each, roomier than most engineering entrances allow, and a quarter mark comes off for a wrong answer, which puts break-even near one in six.',

  'bits-hd':
    'The 150 minutes is two windows rather than one. BITS runs Test I as 30 questions in 45 minutes, Core Mathematics together with English Language Skills and Logical Reasoning with free movement between them, and it auto-submits as a group; Computer Science Test II then takes its own 105 minutes with no way back. Seventy of the 100 questions and 210 of the 300 marks sit in that second window, which makes the first 45 minutes a gate rather than the paper. Only the M.E. Computer Science pathway is covered here.',

  atma:
    'Six locked sections in a fixed order, half an hour each, no carryover anywhere. ATMA splits its three skills into two parts apiece, Analytical Reasoning I and II, Verbal I and II, Quantitative I and II, and runs them in that order with every window closing for good, so a candidate cannot bank time from an easy section against a hard one later. Thirty questions in 30 minutes is a flat minute a question, six times over. With 0.25 deducted against 1, break-even sits at one in five.',

  toefl:
    'The official Reading section changed on 21 January 2026 and this practice does not reproduce the new shape. Up to 50 scored items can now appear in roughly 27 to 30 minutes, because the section adapts in two stages and draws on three different task types. Complete the Words, where a candidate types missing letters, accounts for about 30 of those items on its own. What is built here is a fixed set of 30 questions in 30 minutes across the two comprehension task types. Use it for the reading itself rather than as a rehearsal of the format.',

  'niper-jee':
    'Each question is worth half a mark, which is how 200 questions make 100. Section B, mainly the B.Pharm. syllabus, carries 120 of those questions and 60 of the marks, against 80 questions and 40 marks for Section A on general English, aptitude, reasoning and general knowledge. The deduction is 0.125, a quarter of what a correct answer pays, so break-even sits at one in five. One hundred and fifty minutes across 200 questions is 45 seconds each, fast for a postgraduate paper and enough to make recall rather than derivation the thing that pays.',

  'dbt-bet':
    'The 90 minutes shown is not an official limit. The real paper gives one unrestricted 180-minute window covering both sections, and the figure here is a proportional timer for the Section A half of it. Section B is excluded for a mechanical reason rather than a content one: the official paper displays 150 Section B questions and lets a candidate attempt any 50 of them, and this engine has no attempt cap, so a Section B mock could not enforce the rule that defines it. Section A\'s 50 questions are all compulsory and set at 10+2 level.',

  aibe:
    'Nineteen subjects, 100 questions, three hours. That is 108 seconds a question, unusually generous, and it reflects a qualifying examination rather than a ranked entrance, sat on paper with an OMR sheet. Nothing is deducted for a wrong answer, so every question should carry one by the end. The spread across nineteen subjects is the real difficulty: no single area carries enough weight to repay deep preparation, and none can be written off entirely either.',

  kcet:
    'These are three separate papers, not one four-hour sitting. Physics gets 80 minutes and auto-submits, then Chemistry takes its own 80 with no return, then Mathematics. The official schedule spreads them across two exam days with gaps between, which this practice compresses into a single run. Each paper is 60 questions for 60 marks with nothing deducted, so a blank scores what a wrong answer scores and there is no reason to leave one. A question with more than one marked answer earns no credit, which is the only way to shed marks here.',

  'ibps-po':
    'The Prelims marks are no longer flat across sections. In 2026 Reasoning Ability carries 40 marks from 35 questions, Quantitative Aptitude 30 from 35, and English Language 30 from 30, so a reasoning question pays more than a quantitative one and the three 20-minute windows do not buy equal marks. Mains runs 170 objective questions for 200 marks plus two descriptive tasks for 25, with English Language paying 20 marks from 40 questions, the lowest return in the paper. Every test is separately timed, the descriptive paper included.',

  'lic-aao':
    'English Language is scored and then set aside. It is a qualifying section only, so its 30 marks never enter the Prelims ranking, and the 70 marks from Reasoning Ability and Quantitative Aptitude decide who advances to Mains between them. That makes the 20 minutes English gets a cost rather than an investment: clear its cut-off and move on. There is no negative marking anywhere in the paper either, so nothing should be left blank in any of the three windows.',

  jest:
    'Every part pays the same 2.5 marks a question, which is how 40 questions make 100 and why the three parts differ only in how many questions they hold. That uniformity is unusual, since a paper that splits into parts usually changes what a question is worth as well. No deduction is recorded in the source checked for this pattern, and an absence is not a zero, so confirm that figure against your own call letter before planning to attempt everything. The clock is generous enough to derive rather than recall, which is what a doctoral screening test asks for.',

  acet:
    'Fifty minutes for 20 questions is two and a half minutes each, because this is a short focused set rather than a replica of the full Actuarial Common Entrance Test. Mathematics and Statistics take 10 questions apiece. Nothing is deducted for a wrong answer, so a blank scores exactly what a wrong answer scores. Read a result here as a measure of those two areas rather than as a prediction of the examination itself.',

  'tifr-gs':
    'The official paper is 45 questions in 180 minutes, and only 30 of them count here. For Computer Science admission TIFR reads Part A and Part B and ignores Part C on Learning, Information and Data Science, so Part C is not built, and the 120 minutes shown is a proportional timer rather than an official sectional limit. The two parts that do count carry 15 questions and 60 marks each. Questions come with five options, the official width for this paper, which puts a blind guess at 20% against a break-even of exactly 20%.',

  'sidbi-grade-a-b':
    'Half the marks in Phase I come from sections that rank you and half from sections that only qualify you. English Language, Reasoning Aptitude, Quantitative Aptitude and Computer Knowledge are qualifying only; General Awareness, the MSMEs paper and the Stream Specific Test carry the merit, with the Stream Specific Test alone worth 100 of the 200 marks. One composite 120-minute timer covers all seven, so nothing in the format stops you spending the hour where it ranks. Phase II is partly descriptive, and only its objective MSME section is built here.',

  'cuet-ug':
    'Each question is worth 5 marks, which is how 50 questions make 250. CUET UG is a large multi-subject examination and this page covers two of its papers, the General Aptitude Test and English under subject code 101; a candidate sitting domain papers will find none of that syllabus here. Sixty minutes across 50 questions gives 72 seconds each. With 5 marks up and 1 deducted, break-even sits at one in six, more forgiving than most entrances and enough to make a narrowed guess clearly worth taking.',

  clat:
    'Quantitative Techniques is 12 questions of 120 and attracts far more worry than its weight deserves. The UG paper runs on reading: Legal Reasoning 30 questions, Current Affairs and General Knowledge 28, Logical Reasoning 26, English Language 24, so 108 of the 120 questions reward comprehension and judgement rather than calculation. The PG paper is a different shape entirely, 120 questions of legal comprehension in a single undivided section. Both run two hours with 0.25 deducted against 1, putting break-even at one in five.',

  pte:
    'This is a subset rather than the Reading section. PTE Academic runs Reading across 32 to 41 minutes and several task types; what is built here is the multiple-choice part alone, 12 single-answer and 8 multiple-answer questions inside a 25-minute practice window set on this site. Nothing is deducted in this set. The multiple-answer questions repay deliberate practice, because choosing among several correct options is a different task from picking one, and the official scoring rules for that task type are not reproduced here.',

  act:
    'Science is now optional and Math has dropped a fifth option. The 2026 Enhanced rollout changed both: a student can sit the college-reportable core of English, Math and Reading without Science, and Math questions now offer four choices rather than the traditional five. Every section runs in a fixed order with its own timer and no way back into a closed one. Nothing is deducted for a wrong answer anywhere. The sets built here are shorter than the official counts, for focused practice rather than a full sitting.',

  'ap-eapcet':
    'Mathematics is half this paper and the two sciences share the other half. Eighty questions against 40 each for Physics and Chemistry means an even three-way revision plan gives the deciding subject two thirds of what it is worth. Nothing is deducted for a wrong answer, so a blank and a wrong answer score the same zero and there is no reason to leave one. Three hours across 160 questions leaves 68 seconds each, comfortable enough to reach the end and still sweep back for what is unmarked.',

  ceed:
    'Part A takes a third of the exam\'s clock and is the only third a machine can score. Sixty of the 180 minutes go to these 44 compulsory questions, and the remaining 120 belong to Part B, a sketching, creativity and visual-sensitivity paper answered in a booklet, which is why it is not built here. Inside Part A the multiple-choice block is the bulk: 26 questions and 78 of the 150 marks, against 40 marks for the ten multiple-select questions and 32 for the eight numerical ones. Part A cannot be revisited once Part B begins.',

  'cgpsc-state-service':
    'This paper qualifies you and nothing more. A candidate needs 33 per cent to clear it, or 23 per cent in the reserved categories, and the marks never join the preliminary total, so everything scored above that line is effort that does not rank you. Each question pays 2 marks with a third of that, about 0.67, deducted for a wrong one, which puts break-even at exactly one in four and leaves random marking neutral across 100 questions. Two hours gives 72 seconds each, with no sectional lock to structure them.',

  'csir-ugc-net':
    'Twenty questions are displayed and you may attempt fifteen. That cap is the whole shape of Part A: the extra five exist so you can choose, which makes picking your fifteen well the skill being tested rather than answering everything in front of you. Each carries 2 marks with 0.5 deducted, so break-even sits at one in five and Part A contributes at most 30 marks. The syllabus runs to logical reasoning, graphical analysis, analytical and numerical ability, quantitative comparison and series, and it is common to every CSIR-UGC NET subject paper.',

  frm:
    'Two sub-topics inside one of four areas: that is the whole scope here. Part I officially sets 100 equally weighted four-option questions spread evenly over four topic areas, and Quantitative Analysis is one of them. What is built on this site sits inside that area alone: ten questions on probability and distributions and ten on regression and estimation, in 48 minutes. No mark comes off for a wrong answer. Read a result as a measure of those two topics rather than as a prediction of Part I.',

  gate:
    'The deduction depends on both the question type and what the question is worth. GATE mixes single-correct multiple choice, multiple-select questions and numerical answers, and only the first of those carries a penalty, scaled to the mark value: a third off a one-mark question, two thirds off a two-mark one. Multiple-select and numerical-answer questions deduct nothing at all, which makes them the free attempts in the paper. General Aptitude is 10 questions and 15 of the 100 marks. Only Computer Science and Information Technology is built here.',

  gre:
    'The official test adapts between sections and this practice does not. GRE Quantitative Reasoning sets the second section\'s difficulty from how the first went, so no fixed-form set reproduces the experience; what is built here is 20 questions in 35 minutes across Quantitative Comparison and Numeric Entry. No mark comes off for a wrong answer anywhere on the test. Numeric Entry is the part worth noticing, because it offers nothing to eliminate, which makes it the one place where an uninformed guess is worth almost nothing.',

  'ibps-so':
    'English questions are worth half a mark and still take a third of the clock. All three Prelims sections get 50 questions and 40 minutes each, but English Language pays 25 marks across its 50 while Reasoning and Quantitative Aptitude pay 50 apiece, so 40 minutes on English buys half what the same 40 minutes buys elsewhere, and the sectional lock means those minutes cannot be moved. This pattern covers the IT, Agriculture Field, HR and Marketing Officer posts; the Law Officer and Rajbhasha track substitutes General Awareness for Quantitative Aptitude.',

  ibsat:
    'Verbal Ability alone is 50 of the 140 questions, and with Reading Comprehension at 30 the paper runs 80 questions of language against 60 of everything else. That is a heavier verbal load than most MBA entrances set. Nothing is deducted for a wrong answer and there is no sectional time limit, so the clock is the only real constraint: 140 questions in 120 minutes leaves 51 seconds each, fast for a paper that asks this much reading.',

  ielts:
    'Both reading papers run 40 questions in 60 minutes with free movement between passages, exactly as the real test allows, and neither deducts anything for a wrong answer. What differs is the material. Academic uses three passages of the kind found in journals and textbooks; General Training moves through three sections of rising difficulty, from notices and advertisements to workplace texts to one longer general-interest piece. The raw score out of 40 converts to a band afterwards, so a total here feeds that conversion rather than being the band itself.',

  'jee-advanced':
    'Four question types per subject, each scored differently, and both papers compulsory. Paper 1 sets four single-correct questions at 3 marks with 1 off, four multiple-select at 4 with partial marks and 1 off otherwise, four numerical-value at 4 with no penalty, and four matching-list at 4 with 1 off. Paper 2 shifts the mix to five multiple-select, five numerical-value and four stem-based numerical questions at 2 marks with no penalty. The numerical types never deduct, which makes them the only free attempts in either paper.',

  mcat:
    'CARS is the section you cannot revise for. Fifty-three questions across nine short passages in 90 minutes, drawn equally from humanities and social science disciplines, all answered strictly from the passage with no outside subject knowledge required or rewarded. That makes it the one MCAT section where content study does not help and reading practice does. Sections run in a fixed order with no return once a block closes. Nothing is deducted for a wrong answer, so every question should carry one.',

  nmat:
    'Three equal sections, three very different time allowances. Language Skills, Logical Reasoning and Quantitative Skills each carry 36 questions and 108 marks, but they get 28, 40 and 52 minutes respectively with no carryover between them. That is 47 seconds a question in Language against 87 in Quantitative, so the same 36 questions are paced almost twice as tightly at one end of the paper as at the other. Nothing is deducted for a wrong answer anywhere, which removes the only reason to leave one blank.',

  oet:
    'This is a short focused set rather than the OET Reading section. Sixteen questions across two texts in 32 minutes, two minutes each, with nothing deducted for a wrong answer. OET is built for healthcare professionals and draws its reading material from that setting, which is what separates it from a general English test. Read a score here as practice on those text types rather than as a prediction of the graded result.',

  sat:
    'The Digital SAT adapts and this practice does not. Each official section runs in two modules where the second module\'s difficulty follows from the first, so no fixed-form set reproduces it; what is built here is 54 Reading and Writing questions in 64 minutes and 44 Math questions in 70. Nothing is deducted for a wrong answer, which makes leaving a question blank strictly worse than marking something on it, however little time is left when you reach it.',

  'sebi-grade-a':
    'Paper 1 has no sectional cut-off, only an overall 30 per cent. That is unusual among regulator and banking papers, and it means a weak section can be carried by a strong one, so this paper genuinely rewards playing to your strengths. All four sections are equal at 20 questions and 25 marks. Each question is worth 1.25 marks with 0.3125 deducted, which holds break-even at one in five. Paper 1 and Paper 2 are separately timed: once Paper 1 ends, Paper 2 starts as its own block.',

  srmjeee:
    'Twenty of these questions are English and Aptitude, and a candidate revising PCM alone leaves every one of them untouched. Physics and Chemistry take 35 each and Mathematics 40, so the non-science block is a sixth of the paper and the cheapest sixth to collect. Nothing is deducted for a wrong answer, and 150 minutes across 130 questions gives 69 seconds each. This is the PCM route; SRMJEEE also offers a Biology alternative for the fourth subject, which is not covered here, and the exam is delivered remote-proctored online.',

  'ssc-mts':
    'The two sessions are scored differently, and only one of them is conditional. Session 1, Numerical and Reasoning, carries no negative marking. Session 2, General Awareness and English, deducts 1 mark for a wrong answer and is evaluated only for candidates who clear Session 1 first, which makes Session 1 both a scoring paper and a gate. The real exam runs them as two separately timed 45-minute sessions on the same day, while this practice combines them under one continuous timer, and that is the one thing here that does not match.',

  'ssc-selection-post':
    'Three papers, identical in shape, different in level. Matriculation, Higher Secondary and Graduation posts each sit 100 questions for 200 marks across four locked 15-minute parts, and the structure never varies; what changes is the standard the questions are set at. One detail on the graduation paper: General Intelligence, General Awareness and English are set at graduation level while Quantitative Aptitude stays at Class 10 under the official syllabus. Fifteen minutes for 25 questions is 36 seconds each, with no way to move unused time between parts.',

  uceed:
    'Three marking rules across 57 questions, and the multiple-choice block is where the arithmetic bites. Those 28 questions pay 3 marks and deduct 0.71, putting break-even near one in five. The 15 multiple-select questions pay up to 4 with partial credit and take 1 off otherwise, and the 14 numerical-answer questions pay 4 and deduct nothing. Part A takes 120 of the exam\'s 180 minutes; the hand-marked Part B takes the remaining 60, and it is compulsory in the real exam though not built here.',

  'ukpsc-pcs':
    'Twenty of the 100 questions are language, split unevenly at 13 Hindi and 7 English, worth 19.5 and 10.5 marks against 120 for the General Aptitude core. Each question pays 1.5 marks with 0.375 deducted, which holds break-even at one in five throughout the paper. The fractional marks are what make those section totals look odd, and they are the paper\'s own rather than anything rounded here. One composite two-hour timer covers all three parts, so the 20 language questions can be taken whenever they suit you.',

  'upsc-cse':
    'Neither preliminary paper is sectionally timed, despite the section tables below. General Studies Paper I runs 100 questions for 200 marks and CSAT 80 questions for 200, each on one unbroken two-hour clock, and the per-section rows show composition rather than a schedule. The deductions scale with the marks: a third of 2 on Paper I, about 0.67, and a third of 2.5 on CSAT, about 0.83. Both land break-even at exactly one in four, which is what four options return to a blind guess, so random marking is neutral and only elimination pays.',

  'wb-jelet':
    'Two scoring categories run inside every section here. Category 1 is single-correct at 1 mark with 0.25 deducted. Category 2 is multi-select, paying 2 for selecting all and only the correct options, nothing at all if you include an incorrect one, and a partial share otherwise. That asymmetry is worth planning around, because on Category 2 a cautious partial selection beats a complete but contaminated one. Paper I admits Diploma, B.Sc., D.Voc. and B.Voc. candidates by lateral entry, and Mathematics is its largest section at 40 questions and 50 of the 120 marks.',

  wbjee:
    'Three scoring categories and two locked papers. Category 1 pays 1 mark with 0.25 deducted, Category 2 pays 2 with 0.5 deducted, and Category 3 is multi-select with a maximum of 2 and no negative marking at all, so a single subject mixes three different risk profiles. On timing, Paper I is Mathematics alone for 120 minutes and auto-submits, then Paper II gives Physics and Chemistry a separate 120 with no return. The official schedule puts an hour between the papers on exam day, which this practice does not add as working time.',
};

export function getExamPatternNote(slug: string): string | undefined {
  return EXAM_PATTERN_NOTES[slug];
}
