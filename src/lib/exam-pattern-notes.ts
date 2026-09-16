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
    'Five sections, 30 questions each, 30 marks each, and no sectional time limit anywhere. MAT is unusually hands-off: it weights nothing for you and locks nothing, so every decision about order and allocation belongs to you rather than to the paper. The pace is what makes that decision matter. One hundred and fifty questions in 120 minutes is 48 seconds each, faster than most entrances at this level, so a section you drift into can quietly swallow the time two others needed. With 0.25 deducted against 1 for a correct answer, break-even sits at one in five.',

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
    'Half this paper is your own discipline. General Engineering carries 100 of the 200 questions in the branch you choose, Civil, Mechanical or Electrical, against 50 each for General Intelligence and Reasoning and General Awareness, so the branch paper decides the result and the two general sections decide the margin. One thing the notice does not settle: it gives a single two-hour duration and no per-section times, so whether the parts are separately timed is not established here and this page does not assert it either way. Prepare to a composite two hours and check your own admit card.',

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
};

export function getExamPatternNote(slug: string): string | undefined {
  return EXAM_PATTERN_NOTES[slug];
}
