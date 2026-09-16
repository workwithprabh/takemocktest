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
};

export function getExamPatternNote(slug: string): string | undefined {
  return EXAM_PATTERN_NOTES[slug];
}
