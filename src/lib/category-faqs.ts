import type { ExamCatalogCategory } from './exam-catalog';
import type { Faq } from './exam-faqs';

// FAQs for the exam category directories, in the same shape the country home
// uses: a keyword-shaped question, an answer that says something a searcher
// actually wanted, and internal links under it.
//
// Why these pages and not a generic template everywhere. The country home
// already answers "What is the SSC exam?" and "Which MBA entrance exams are
// there?", and those answers belong on the category directory at least as much
// as on the home page, because that is the page a searcher lands on for the
// category term. Until now the twelve category pages carried a one-line
// description and a list, and nothing else.
//
// Two rules the answers hold to. Nothing here restates the home page verbatim,
// because the two pages sit one click apart and duplicate prose between them
// helps neither. And every exam named in the "which exams" answer is read from
// the catalogue's own liveSlug, so an answer can never name an exam this site
// does not publish, and the links under it can never 404.

/** What the category is, in a searcher's words rather than ours. */
const LEAD: Record<string, { q: string; a: string }> = {
  'government-jobs': {
    q: 'What are government job exams in India?',
    a: 'Government job exams are the written recruitment tests that central and state bodies run to fill public-sector posts. There is no single exam. The Staff Selection Commission recruits for central Group B and Group C posts, the Institute of Banking Personnel Selection and the individual banks recruit for public-sector banking, the Railway Recruitment Boards fill posts across Indian Railways, and the Union Public Service Commission and the state public service commissions run the civil services. Each sets its own eligibility, paper pattern and marking scheme, so a candidate preparing for two of them is preparing for two different papers.',
  },
  engineering: {
    q: 'Which engineering entrance exams are there in India?',
    a: 'Engineering admission runs at three levels. National tests such as JEE Main and JEE Advanced feed the NITs, IIITs and IITs. Institute-specific tests are run by individual private universities for their own campuses. State common entrance tests feed the engineering colleges of one state, usually on that state\'s own Class 12 syllabus. GATE sits apart from all three, at postgraduate level, and is used both for M.Tech admission and for recruitment by public-sector undertakings.',
  },
  medical: {
    q: 'Which medical entrance exams are there in India?',
    a: 'NEET UG is the single entrance test for MBBS, BDS and most allied undergraduate courses. Postgraduate admission runs through NEET PG and, for the Institutes of National Importance, INI-CET. FMGE is the separate screening examination that graduates of foreign medical schools must pass before they can register to practise in India. Nursing, pharmacy and AYUSH postgraduate entrances are set separately again.',
  },
  'study-abroad': {
    q: 'Which exams do I need to study abroad?',
    a: 'Most applications need two different things. An admissions test compares you academically: the SAT or ACT for undergraduate study, the GRE, GMAT, LSAT or MCAT for graduate and professional programmes. An English proficiency test proves you can study in the language: IELTS, TOEFL, PTE, or OET for healthcare registration. Which pair you need is set by the university and the course, not by the country.',
  },
  management: {
    q: 'Which MBA entrance exams are there in India?',
    a: 'MBA admission is not one test. Business schools accept different entrance exams, and most candidates sit more than one to keep their options open. The papers differ sharply from each other in ways that matter to preparation: whether sections are separately timed, how heavily wrong answers are penalised, and whether general knowledge counts towards the score at all. Integrated management programmes taken straight after Class 12 use their own separate entrances.',
  },
  'university-science': {
    q: 'What are university and science entrance exams?',
    a: 'This group covers two different things. General university admission tests, chiefly CUET at undergraduate and postgraduate level, are used by central and many state universities in place of board-marks cutoffs. Specialist science and research entrances are narrower: they admit to integrated science programmes at the IISERs and similar institutes, or select candidates for research fellowships and doctoral programmes.',
  },
  defence: {
    q: 'Which defence exams can I apply for?',
    a: 'Defence recruitment splits by entry route. Officer entry runs through written examinations conducted by the UPSC, such as the NDA and CDS examinations, and by the services themselves, such as AFCAT for the Air Force. Agniveer and other-ranks entries are conducted separately by each service. Officer entries do not end with the written paper: a Services Selection Board interview follows, and it carries more weight than the written stage in the final merit.',
  },
  law: {
    q: 'Which entrance exams do I need for law?',
    a: 'Law testing covers four separate things. Five-year integrated LL.B. admission after Class 12 runs mainly through CLAT, with several institutes and states setting their own papers. Three-year LL.B. and postgraduate LL.M. admission use their own tests. The All India Bar Examination is a licensing examination taken after the degree, not an admission test. State judicial services examinations are separate again, set per state for appointment to the subordinate judiciary.',
  },
  'teaching-research': {
    q: 'What is the difference between a teaching eligibility test and a recruitment exam?',
    a: 'They do different jobs. An eligibility test, such as CTET, UGC NET or a state SET, certifies that you are qualified to be appointed; passing it does not give you a post. A recruitment exam, such as those run by Kendriya Vidyalaya Sangathan, Navodaya Vidyalaya Samiti or DSSSB, fills actual advertised vacancies. Most teaching careers need both: the eligibility certificate first, then a recruitment test for the job itself.',
  },
  'commerce-professional': {
    q: 'What are the commerce and professional qualification exams?',
    a: 'These are staged professional qualifications rather than one-off entrance tests. Chartered Accountancy, Company Secretaryship and Cost and Management Accountancy each run Foundation, Intermediate and Final levels, and a candidate clears one level before sitting the next, with practical training alongside. Because the later levels are largely descriptive papers, only their objective components can be reproduced as mock tests.',
  },
  'design-hospitality': {
    q: 'Which design and hospitality entrance exams are there?',
    a: 'Design and fashion entrances test aptitude rather than syllabus recall: visual reasoning, observation, and the ability to develop an idea. Several, including the NID and NIFT routes, pair an objective paper with a hand-drawn studio test or a portfolio round that cannot be sat on screen, so only the objective part is practised as a mock test here. Hotel management admission runs through NCHM JEE, which is fully objective.',
  },
  'university-admission': {
    q: 'What is the JAMB UTME?',
    a: 'The Unified Tertiary Matriculation Examination is the admission test the Joint Admissions and Matriculation Board sets for entry to Nigerian universities, polytechnics and colleges of education. It is a computer-based test, and every candidate sits four subjects, with Use of English compulsory and the other three chosen to match the course applied for.',
  },
};

/** How to prepare, phrased for this category rather than in general. */
const PREPARE: Record<string, { q: string; a: string }> = {
  'government-jobs': {
    q: 'How should I prepare for a government job exam?',
    a: 'Sit a full mock of the first stage before you study anything, because almost every one of these recruitments screens with a timed objective paper and the thing that fails candidates is pace, not knowledge. The mock tells you which section is eating your time. Then rebuild that section with sectional tests, and come back to the full paper to check the fix held under the clock.',
  },
  engineering: {
    q: 'How should I use mock tests for engineering entrances?',
    a: 'Take the full paper under its real timing first, including any subject locks the exam imposes, since a paper that separates Mathematics from Physics and Chemistry rewards a different plan from one unrestricted timer. After that, subject-wise tests are the efficient unit of practice: they let you rebuild one subject without spending three hours to find out whether it worked.',
  },
  medical: {
    q: 'How should I practise for a medical entrance exam?',
    a: 'These papers are long and heavily penalised for wrong answers, so the skill being tested is judgement about when not to answer as much as recall. Full mocks are the only way to practise that, because it only appears under time pressure. Sit the paper whole, then review every question you got wrong and every one you guessed right, which is the set most candidates skip.',
  },
  'study-abroad': {
    q: 'How should I practise for an admissions or English test?',
    a: 'Both kinds are scored on a scale rather than a raw mark, so a percentage out of the questions you attempted tells you very little. What practice is for is format: knowing how the sections are timed, whether you can return to a section you have left, and how wrong answers are treated. Sit a full paper first for that, then work on the section that is costing the most.',
  },
  management: {
    q: 'How should I prepare for MBA entrance exams?',
    a: 'Start with the paper you are most likely to sit, and take it whole under its own timing rules rather than a generic three-section mock. Sectional locks change preparation completely: where a section is separately timed you cannot bank minutes by rushing an easy one, so you have to be able to finish each part within its own window. Once one paper is stable, the second exam is mostly a format adjustment.',
  },
  'university-science': {
    q: 'How should I prepare for a university admission test?',
    a: 'CUET-style papers reward coverage over depth: many subjects, each at board level, with little time per question. Practise breadth first, and use sectional tests to find the subject that is dragging your aggregate rather than the one you enjoy revising. Specialist science entrances are the opposite, and need depth in a narrow syllabus.',
  },
  defence: {
    q: 'How should I prepare for defence entrance exams?',
    a: 'The written papers are speed tests with negative marking, so accuracy under pace is the thing to build, and a full mock is what measures it. Preparation for the written stage is not preparation for the Services Selection Board, which follows it and assesses something else entirely, so treat the two as separate projects rather than one.',
  },
  law: {
    q: 'How should I prepare for a law entrance exam?',
    a: 'These papers are comprehension tests wearing legal clothing. Most questions give you the principle in the passage and ask you to apply it, so no prior knowledge of law is needed and memorising sections is wasted effort. Reading speed and careful application are what decide the score, and long passage-based sets under the clock are how to build both.',
  },
  'teaching-research': {
    q: 'How should I prepare for a teaching eligibility test?',
    a: 'Child development and pedagogy carries as much weight as the subject paper in most of these tests and is where prepared candidates separate from unprepared ones, because the subject content is usually at a level a graduate already knows. Sit a full paper to see the split for yourself, then spend the time on pedagogy rather than re-revising the subject.',
  },
  'commerce-professional': {
    q: 'How should I practise for a professional accountancy exam?',
    a: 'Only the objective components of these papers can be practised as timed multiple-choice tests, and they are worth a defined share of the mark rather than the whole paper. Use them for what they measure: quick recall of definitions, rates and treatments under time pressure. The descriptive answers, which carry the rest of the mark, need a different kind of practice than anything here.',
  },
  'design-hospitality': {
    q: 'How should I prepare for a design entrance exam?',
    a: 'The objective paper rewards observation and reasoning rather than revision, so practice is about getting used to the question types instead of covering a syllabus. Where an exam also has a studio or portfolio round, that round usually carries the larger share of the decision, and no amount of objective practice substitutes for drawing regularly.',
  },
  'university-admission': {
    q: 'How should I practise for the JAMB UTME?',
    a: 'Sit a full mock under the real clock first. The UTME is a timed computer-based paper across four subjects, and pacing across them is what most candidates lose marks to rather than any single topic. Once the full paper has shown you where the time goes, subject-wise tests let you rebuild one subject at a time.',
  },
};

// The category's display name does not survive being lowercased into a
// sentence: "Government Jobs" becomes "government jobs exams", and
// "Design, Fashion & Hospitality" drags a comma and an ampersand into a
// question. These are the same categories said as a noun phrase.
const NOUN: Record<string, string> = {
  'government-jobs': 'government job',
  engineering: 'engineering entrance',
  medical: 'medical and healthcare',
  'study-abroad': 'study abroad',
  management: 'MBA and management',
  'university-science': 'university and science',
  defence: 'defence',
  law: 'law',
  'teaching-research': 'teaching and research',
  'commerce-professional': 'commerce and professional',
  'design-hospitality': 'design and hospitality',
  'university-admission': 'university admission',
};

export function getCategoryFaqs(category: ExamCatalogCategory, country: string): Faq[] {
  const noun = NOUN[category.slug] ?? category.name.toLowerCase();
  const lead = LEAD[category.slug];
  const prepare = PREPARE[category.slug];
  const live = category.groups.flatMap((group) =>
    group.exams.filter((exam) => exam.liveSlug).map((exam) => ({ name: exam.name, slug: exam.liveSlug as string })),
  );
  const listOf = (values: string[]) =>
    values.length > 1 ? `${values.slice(0, -1).join(', ')} and ${values[values.length - 1]}` : values[0] ?? '';
  const mockLink = (exam: { name: string; slug: string }) => ({
    href: `/${country}/${exam.slug}/mock-test`,
    label: `${exam.name} mock test`,
  });

  const faqs: Faq[] = [];

  if (lead) {
    faqs.push({
      ...lead,
      links: [
        { href: `/${country}/exams`, label: 'Browse all exams' },
        ...live.slice(0, 3).map(mockLink),
      ],
    });
  }

  // Which of them we actually publish. Named from the catalogue's own liveSlug,
  // so this answer cannot promise an exam that has no page behind it.
  if (live.length > 0) {
    const shown = live.slice(0, 12).map((exam) => exam.name);
    const rest = live.length - shown.length;
    faqs.push({
      q: `Which ${noun} exams have free mock tests?`,
      a: `${live.length === 1 ? 'One exam in this category has' : `${live.length} exams in this category have`} free mock tests on TakeMockTest: ${listOf(shown)}${rest > 0 ? `, and ${rest} more` : ''}. Every test is free, needs no sign-up, and is marked to the exam's own scheme rather than a flat one mark per question.`,
      links: live.slice(0, 4).map(mockLink),
    });
  }

  // The group structure is the answer to "what kinds are there", and it is read
  // from the catalogue rather than restated, so it follows the directory below.
  const groups = category.groups
    .map((group) => ({ name: group.name, live: group.exams.filter((exam) => exam.liveSlug).length }))
    .filter((group) => group.live > 0);
  if (groups.length > 1) {
    faqs.push({
      q: `What types of ${noun} exams are there?`,
      a: `This directory groups them into ${groups.length}: ${listOf(groups.map((group) => `${group.name} (${group.live} live)`))}. The grouping follows how the exams are actually conducted rather than how they are marketed, so exams that share a conducting body and a paper shape sit together.`,
      links: [{ href: `/${country}/exams/${category.slug}`, label: `All ${noun} exams` }],
    });
  }

  if (prepare) {
    faqs.push({
      ...prepare,
      links: [
        ...live.slice(0, 2).map(mockLink),
        { href: `/${country}/practice`, label: 'Topic-wise practice' },
      ],
    });
  }

  return faqs;
}
