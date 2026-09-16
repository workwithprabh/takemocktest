import { formatMarks, getCheckedTestCount, getExam } from './exams';
import type { Faq } from './exam-faqs';
import type { UpdateCategory, UpdateEntry } from './updates';

// FAQs for the exam-update detail pages, in the same shape the country home and
// the category directories use.
//
// The constraint here is different from those pages. An update page already
// prints the notice summary, the important dates, the "what students should do"
// steps and the official-source panel, so an FAQ that restates any of them is
// worse than no FAQ at all. These answer the things the page does not: what the
// kind of notice actually is, what the exam's paper looks like, and how much
// practice for it exists here.
//
// The first question is the one that earns the page traffic it does not have
// yet. Someone searching "what is city intimation" or "what is a response
// sheet" is asking about the notice type, not about one cycle of one exam, and
// nothing on the site answered that anywhere.

/**
 * What a notice of this kind is. Written once per category rather than per
 * update, because the answer is a property of the notice type: a corrigendum is
 * the same object whether it amends an SSC advertisement or an IBPS one.
 */
const CATEGORY: Record<UpdateCategory, { q: (exam: string) => string; a: (exam: string) => string }> = {
  Notification: {
    q: (exam) => `What is an exam notification, and what does the ${exam} one contain?`,
    a: (exam) => `A notification is the advertisement a conducting body publishes to open a recruitment or admission cycle. It is the governing document for that cycle: it fixes the vacancies or seats, the eligibility conditions, the application window and fee, the examination scheme, and the reservation and relaxation rules. Where a later notice and the notification disagree, the notification is what counts until a corrigendum amends it. Anything published about ${exam} before its notification, including the pattern reproduced on this site, describes the previous cycle until the new one is read.`,
  },
  Application: {
    q: (exam) => `How does the ${exam} application process work?`,
    a: (exam) => `Applications are submitted online on the conducting body's own portal, within a window fixed by the notification, and usually in stages: registration to get credentials, then the detailed form, then the fee, then a final submission that locks the form. An application that is registered but not paid for is not an application. Most bodies open a correction window afterwards for a limited set of fields, and a few fields, commonly name, category and examination centre, are often excluded from correction. Complete every step for ${exam} on the official site rather than on any aggregator.`,
  },
  'Exam Date': {
    q: (exam) => `When is the ${exam} exam, and how firm is the date?`,
    a: (exam) => `An announced examination date is firm enough to plan around and not firm enough to treat as final. Conducting bodies revise dates when application volumes, court directions or centre availability force it, and a revised date is published as a fresh notice rather than as an edit to the old one. Treat the date on this page as correct as of the check date shown, confirm it against the official notice before making travel or leave arrangements, and keep preparing to the earlier of any two ${exam} dates in circulation.`,
  },
  Schedule: {
    q: (exam) => `What does the ${exam} schedule tell me?`,
    a: (exam) => `A schedule sets out the sequence of a cycle rather than a single date: when applications open and close, when the examination is held, and often when results and subsequent stages follow. Its value in preparation is working backwards from it. A tentative schedule is a planning document, not a commitment, and the interval between one stage and the next is usually the more reliable part of it, because that gap tends to hold even when the dates themselves move. Where the ${exam} schedule is marked tentative, treat every date on it that way.`,
  },
  Corrigendum: {
    q: (exam) => `What is a corrigendum, and does it change my ${exam} application?`,
    a: (exam) => `A corrigendum is a formal amendment to a notice already published. It carries the same authority as the document it amends, and it replaces the corrected part rather than sitting alongside it, so the original notice read on its own is out of date from the moment a corrigendum issues. Corrigenda most often revise vacancy counts, eligibility conditions, dates or the examination scheme. Read it against the original ${exam} notification and check specifically whether anything it changes affects eligibility you have already relied on.`,
  },
  'City Intimation': {
    q: () => 'What is city intimation, and is it the same as an admit card?',
    a: (exam) => `No, and confusing the two costs candidates money. City intimation is an advance notice of the city a candidate has been allotted, published days or weeks before the admit card so that travel and accommodation can be arranged. It is not an entry document: it carries no examination centre address, no reporting time and no shift, and it will not get you into the hall. The admit card for ${exam} is issued separately and closer to the date, and it is the only document that admits you.`,
  },
  'Admit Card': {
    q: (exam) => `What is the ${exam} admit card, and what should I check on it?`,
    a: (exam) => `The admit card, also called the call letter or hall ticket, is the document that admits a candidate to the examination hall, and no one is allowed to sit without it. It carries the centre address, the reporting time, the shift, and the photograph and signature on record. Check every field the moment it is downloaded, because the reporting time is usually well before the start time and the centre may be in a different part of the city from the one intimated. Carry the photo identity document the ${exam} notice specifies alongside it.`,
  },
  'Answer Key': {
    q: (exam) => `What is the ${exam} answer key, and can I challenge it?`,
    a: (exam) => `An answer key lists the answers the conducting body treats as correct. Most bodies publish a provisional key first and open a paid objection window against it, then publish a final key after considering the objections. The distinction matters: a score calculated from a provisional key can change if a question is revised or dropped. Objections generally need supporting evidence from a citable source, and the fee is usually refunded only where the challenge succeeds. Recalculate your ${exam} score against the final key rather than the provisional one.`,
  },
  'Response Sheet': {
    q: () => 'What is a response sheet, and what do I do with it?',
    a: (exam) => `A response sheet is the record of the answers a candidate actually submitted, released so that a score can be verified against the answer key. Reading it alongside the key is the single most useful review a candidate can do, and most skip it. Count three things: questions answered wrongly, questions left blank that you knew, and questions answered correctly by guessing. The second and third of those are pacing and risk problems rather than knowledge problems, and they respond to different practice. A timed ${exam} mock is where both show up again.`,
  },
  Result: {
    q: (exam) => `What does the ${exam} result mean, and what comes next?`,
    a: (exam) => `A result declares who has qualified at that stage, not who has been selected. For a multi-stage recruitment it shortlists candidates for the next stage, and the marks it carries may or may not count towards the final merit, depending on whether that stage is qualifying or merit-bearing. Read it together with the notice published alongside, which is where the ${exam} cutoff, the category-wise counts and the next stage's timing are usually stated.`,
  },
  Scorecard: {
    q: (exam) => `What is the ${exam} scorecard, and how is it different from the result?`,
    a: (exam) => `The result says whether you qualified; the scorecard says what you scored. It typically shows raw marks, and for exams that normalise across shifts it shows the normalised score, which is the figure that decides merit rather than the raw mark. Where an exam runs in multiple shifts of unequal difficulty, a lower raw score can normalise higher than a higher one, so comparing raw ${exam} marks with another candidate from a different shift tells you nothing useful.`,
  },
  Cutoff: {
    q: (exam) => `What is a cutoff, and how much can the ${exam} cutoff move?`,
    a: (exam) => `A cutoff is the lowest score that qualified in a given category and cycle. It is an outcome, not a target: it is set by how many vacancies there were, how many candidates appeared and how difficult the paper turned out, so it moves between cycles and between categories. Previous cutoffs are useful for rough calibration and nothing more. Preparing to clear last year's ${exam} figure is a mistake when vacancies fall or the paper gets easier, since both push the cutoff up.`,
  },
  Counselling: {
    q: (exam) => `What happens at ${exam} counselling?`,
    a: (exam) => `Counselling is the seat or post allocation process that follows a qualifying result. Candidates register separately for it, fill and lock preferences in order, and are allotted against those preferences by rank, category and availability, usually across several rounds. Two things decide the outcome as much as rank does: the order preferences are entered in, and whether a candidate accepts a provisional allotment or floats it to a later round. Deadlines are short and missing one generally forfeits the ${exam} round.`,
  },
};

export function getUpdateFaqs(update: UpdateEntry, country: string): Faq[] {
  const exam = getExam(update.examSlug);
  const tests = exam ? getCheckedTestCount(exam) : 0;
  // Only link where the target is indexable. The mock-test route is noIndex
  // until an exam has checked tests, and the exam-pattern route is noIndex
  // until its pattern is official, so both are gated rather than assumed.
  const officialStage = exam?.stages.find((stage) => stage.pattern.status === 'official');
  const faqs: Faq[] = [];

  const category = CATEGORY[update.category];
  if (category) {
    faqs.push({
      q: category.q(update.examName),
      a: category.a(update.examName),
      links: [
        { href: `/${country}/exam-updates`, label: 'All exam updates' },
        ...(tests > 0 ? [{ href: `/${country}/${update.examSlug}/mock-test`, label: `${update.examName} mock test` }] : []),
      ],
    });
  }

  // The paper itself, from the stage pattern rather than from the notice. A
  // reader who arrived for a date or a result still wants this, and the update
  // page never says it.
  const pattern = officialStage?.pattern;
  if (pattern?.totalQuestions && pattern.totalMarks && pattern.duration) {
    faqs.push({
      q: `What is the ${update.examName} exam pattern?`,
      a: `${exam?.stages.length === 1 ? 'The paper' : `The ${officialStage?.name} stage`} is ${pattern.totalQuestions} questions for ${pattern.totalMarks} marks in ${pattern.duration} minutes, covering ${pattern.sections.length > 1 ? `${pattern.sections.slice(0, -1).join(', ')} and ${pattern.sections[pattern.sections.length - 1]}` : pattern.sections[0]}.${pattern.negativeMarking ? ` Wrong answers are penalised ${typeof pattern.negativeMarking === 'number' ? `${formatMarks(pattern.negativeMarking)} per question` : `at ${pattern.negativeMarking}`}.` : ' There is no negative marking.'} Every figure is taken from the official source linked on the pattern page and carries the date it was last checked.`,
      links: [{ href: `/${country}/${update.examSlug}/exam-pattern`, label: `${update.examName} exam pattern` }],
    });
  }

  if (tests > 0) {
    faqs.push({
      q: `Are there free ${update.examName} mock tests?`,
      a: `Yes. There ${tests === 1 ? 'is 1 free test' : `are ${tests} free tests`} for ${update.examName} on TakeMockTest, with no sign-up and no paywall. Each is marked to the exam's own scheme rather than a flat one mark per question, so the score you see reflects what the same attempt would earn in the real paper.`,
      links: [{ href: `/${country}/${update.examSlug}/mock-test`, label: `${update.examName} mock test` }],
    });
  }

  // Provenance as a question. The sidebar names the source; this says what the
  // check actually covers and, more usefully, what it does not.
  faqs.push({
    q: 'How is this update verified, and how current is it?',
    a: `This summary was written from ${update.sourceName}'s own published notice, which is linked on this page, and it records the date that source was last checked rather than the date this page was generated. That is the limit of the claim: it says the notice read as summarised on that date. Conducting bodies revise dates, vacancy counts and eligibility conditions without notice, so confirm anything you are about to act on against the official source before you act.`,
    links: [{ href: `/${country}/exam-updates`, label: 'All exam updates' }],
  });

  return faqs;
}
