import { getExamGuide } from './exam-guides';
import type { ExamGuidePage } from './exam-guides';
import type { ExamConfig } from './exams';
import { getCheckedTestCount } from './exams';
import type { Faq } from './exam-faqs';

// FAQs for the per-exam syllabus and eligibility guide pages.
//
// Only the pages that carry real guide content get these. An exam with no
// entry in exam-guides.ts renders a "being verified" placeholder and stays
// noIndex, and padding a placeholder with four questions would make a stub look
// finished while helping nobody.
//
// What is deliberately NOT generated here: any eligibility figure. Age is held
// six different ways across ten guides, as stat cards on some, as a four-row
// table of post-specific bands on SSC CGL, as date-of-birth windows on RRB
// Group D, as a post-wise grid on SSC MTS. One extractor covering all of them
// would be right six times and wrong four, and a wrong age limit is a candidate
// who does not apply or applies and is rejected at verification. The page
// already shows those figures correctly in their own blocks. These answer what
// it does not.
//
// The syllabus, eligibility and selection-process pages of the same exam must
// also not converge. Ten exams carry all three, a click apart from each other,
// so the questions differ in angle rather than being one template with a noun
// swapped. Syllabus asks what is examined, eligibility asks who may sit it,
// selection process asks what clearing it actually involves.

function listOf(values: string[]): string {
  return values.length > 1 ? `${values.slice(0, -1).join(', ')} and ${values[values.length - 1]}` : values[0] ?? '';
}

/** The paper's shape, from the stage pattern rather than from guide prose. */
function patternFaq(exam: ExamConfig, country: string, phrasing: 'syllabus' | 'eligibility'): Faq | undefined {
  const stage = exam.stages.find((item) => item.pattern.status === 'official');
  const pattern = stage?.pattern;
  if (!pattern?.totalQuestions || !pattern.totalMarks || !pattern.duration) return undefined;
  const shape = `${pattern.totalQuestions} questions for ${pattern.totalMarks} marks in ${pattern.duration} minutes`;
  const penalty = pattern.negativeMarking
    ? ` Wrong answers are penalised ${typeof pattern.negativeMarking === 'number' ? `${pattern.negativeMarking} per question` : `at ${pattern.negativeMarking}`}.`
    : ' There is no negative marking.';
  const single = exam.stages.length === 1;
  return phrasing === 'syllabus'
    ? {
        q: `How many questions are there in the ${exam.name} paper, and how long is it?`,
        a: `${single ? 'The paper' : `The ${stage?.name} stage`} is ${shape}.${penalty} Knowing that alongside the syllabus is what turns a topic list into a plan: it tells you how many marks each section is actually worth and how many minutes you can afford per question.`,
        links: [{ href: `/${country}/${exam.slug}/exam-pattern`, label: `${exam.name} exam pattern` }],
      }
    : {
        q: `What is the ${exam.name} exam pattern?`,
        a: `${single ? 'The paper' : `The ${stage?.name} stage`} is ${shape}.${penalty} Eligibility decides whether you can sit it; the pattern decides what sitting it involves, and the two are worth reading together before you commit to a cycle.`,
        links: [{ href: `/${country}/${exam.slug}/exam-pattern`, label: `${exam.name} exam pattern` }],
      };
}

/** Where the page's figures came from, read off the guide's own source block. */
function sourceFaq(guide: ExamGuidePage, exam: ExamConfig, kind: 'syllabus' | 'eligibility' | 'selection-process'): Faq {
  const note = guide.blocks.find((block) => block.type === 'sourceNote');
  // Some source labels name the document ("official SSC CGL 2026 notice") and
  // some are the link's own call to action ("View the official notice"). Only
  // the first reads as a noun inside a sentence, so the CTA prefix comes off.
  const raw = note && note.type === 'sourceNote' ? note.sourceLabel : undefined;
  const stripped = raw?.replace(/^View\s+(the\s+)?/i, '').trim();
  // Stripping the prefix off "View the official notice" leaves a common noun
  // needing its article back. A label that already starts with a proper noun
  // ("JAMB", "SSC CPO 2025 recruitment notice") reads correctly without one.
  const cited = stripped
    ? /^[a-z]/.test(stripped) ? `the ${stripped}` : stripped
    : undefined;
  if (kind === 'selection-process') {
    return {
      q: `Can the ${exam.name} selection process change between cycles?`,
      a: `Yes, and it does. Stages get added, merged or dropped, a qualifying paper becomes merit-bearing, or a skill test moves from one stage to another, and the change is announced in the notification for that cycle rather than separately. The sequence on this page is read from ${cited ?? 'the official document'}, cited and linked at the foot of the page, so check it against the current notification before assuming the process you prepared for last year is the one you will sit.`,
    };
  }
  return kind === 'syllabus'
    ? {
        q: `Is this ${exam.name} syllabus current?`,
        a: `It is taken from ${cited ? `${cited}, cited and linked at the foot of this page,` : 'the official document cited and linked at the foot of this page,'} rather than from another preparation site, so you can check it against the source yourself. Syllabuses do change between cycles, usually through a corrigendum to the notification rather than a fresh document, so confirm against the current notice before planning a whole revision cycle around any topic list, including this one.`,
      }
    : {
        q: `Where are the official ${exam.name} eligibility rules published?`,
        a: `In the conducting body's own notification: ${cited ?? 'the official document'}, cited and linked at the foot of this page. That document governs, and where any other source disagrees with it, including this page, the notification is what counts. It can also be amended mid-cycle by a corrigendum, and eligibility conditions are among the things corrigenda most often change, so check for one before deciding you do or do not qualify.`,
      };
}

export function getSyllabusFaqs(exam: ExamConfig, guide: ExamGuidePage, country: string): Faq[] {
  const tests = getCheckedTestCount(exam);
  const faqs: Faq[] = [];

  // Every syllabus guide carries a topicSections block, so the lead answer can
  // name the real sections instead of describing the page in the abstract.
  const topics = guide.blocks.filter((block) => block.type === 'topicSections');
  const sections = topics.flatMap((block) => (block.type === 'topicSections' ? block.sections : []));
  if (sections.length > 0) {
    const count = sections.reduce((total, section) => total + section.topics.length, 0);
    faqs.push({
      q: `What is the ${exam.name} syllabus?`,
      a: `${sections.length === 1 ? 'It is one section' : `It runs to ${sections.length} sections`}: ${listOf(sections.map((section) => section.section))}. ${count} named topics are listed on this page beneath them, each taken from the official syllabus rather than inferred from past papers.`,
      links: tests > 0 ? [{ href: `/${country}/${exam.slug}/mock-test`, label: `${exam.name} mock test` }] : undefined,
    });
  }

  const pattern = patternFaq(exam, country, 'syllabus');
  if (pattern) faqs.push(pattern);

  if (tests > 0) {
    faqs.push({
      q: `How do I practise the whole ${exam.name} syllabus?`,
      a: `Sit a full mock first, before working through the topic list. A syllabus tells you what can be asked; it does not tell you which parts of it are costing you marks, and most candidates find that is not where they expected. There ${tests === 1 ? 'is 1 free test' : `are ${tests} free tests`} for ${exam.name} here, and the sectional ones let you rebuild a single section once the full paper has shown you which one to rebuild.`,
      links: [
        { href: `/${country}/${exam.slug}/mock-test`, label: `${exam.name} mock test` },
        { href: `/${country}/practice`, label: 'Topic-wise practice' },
      ],
    });
  }

  faqs.push(sourceFaq(guide, exam, 'syllabus'));
  return faqs;
}

export function getEligibilityFaqs(exam: ExamConfig, guide: ExamGuidePage, country: string): Faq[] {
  const tests = getCheckedTestCount(exam);
  const faqs: Faq[] = [];

  // The lead is the question the page cannot answer from its own tables, and
  // the one candidates most often get wrong.
  faqs.push({
    q: `Does meeting the ${exam.name} eligibility mean my application is confirmed?`,
    a: `No. Eligibility is self-declared when you apply, and the conducting body accepts the application provisionally on the strength of that declaration. It is verified later, at document verification, against original certificates. A candidate who clears every stage and cannot produce proof of age, category or qualification at that point is rejected then, with the whole cycle spent. Check each condition against your own documents before you apply rather than after.`,
    links: [{ href: `/${country}/${exam.slug}`, label: `${exam.name} overview` }],
  });

  const pattern = patternFaq(exam, country, 'eligibility');
  if (pattern) faqs.push(pattern);

  if (tests > 0) {
    faqs.push({
      q: `Can I start preparing for ${exam.name} before the notification is out?`,
      a: `Yes, and it is the better time to start. Eligibility conditions and the examination scheme are usually stable between cycles, so the paper you will sit is close to the one already published, and the months before a notification are the only ones not spent on the application itself. There ${tests === 1 ? 'is 1 free test' : `are ${tests} free tests`} for ${exam.name} here to work from in the meantime.`,
      links: [{ href: `/${country}/${exam.slug}/mock-test`, label: `${exam.name} mock test` }],
    });
  }

  faqs.push(sourceFaq(guide, exam, 'eligibility'));
  return faqs;
}

export function getSelectionProcessFaqs(exam: ExamConfig, guide: ExamGuidePage, country: string): Faq[] {
  const tests = getCheckedTestCount(exam);
  const faqs: Faq[] = [];

  // Every selection-process guide carries a numberedStages block, so the lead
  // answer names the real stages in their real order rather than describing a
  // generic recruitment funnel.
  const stageBlock = guide.blocks.find((block) => block.type === 'numberedStages');
  const stages = stageBlock && stageBlock.type === 'numberedStages' ? stageBlock.items : [];

  if (stages.length > 0) {
    faqs.push({
      q: `What is the ${exam.name} selection process?`,
      a: `It runs to ${stages.length} stages, in this order: ${listOf(stages.map((stage) => stage.title))}. Each is described on this page with what it involves and what clearing it requires. You reach a stage only by clearing the one before it, so the whole process is a funnel rather than a checklist you work through in parallel.`,
      links: tests > 0 ? [{ href: `/${country}/${exam.slug}/mock-test`, label: `${exam.name} mock test` }] : undefined,
    });

    // The thing candidates most often get wrong about a multi-stage process,
    // and the reason a high score at one stage can count for nothing.
    faqs.push({
      q: `Do marks from every ${exam.name} stage count towards the final merit?`,
      a: `Not necessarily, and it is worth checking rather than assuming. Multi-stage recruitments usually mix two kinds of stage: qualifying ones, which you must clear but whose marks are discarded afterwards, and merit-bearing ones, whose marks carry into the final ranking. Clearing a qualifying stage comfortably earns nothing beyond clearing it, so effort spent pushing that score higher is effort not spent on the stage that decides your rank. The stage descriptions on this page say which is which, and the notification is the authority on it.`,
    });

    if (tests > 0) {
      faqs.push({
        q: `Which ${exam.name} stage should I prepare for first?`,
        a: `${stages[0].title}, because nobody sees stage two without it. It is also the stage with the most competition in it: every applicant sits it, and it exists to cut that field down. Preparing for a later stage before clearing the first is the commonest way candidates waste a cycle. There ${tests === 1 ? 'is 1 free test' : `are ${tests} free tests`} for ${exam.name} here to work on it with.`,
        links: [{ href: `/${country}/${exam.slug}/mock-test`, label: `${exam.name} mock test` }],
      });
    }

    // Only where the exam actually has such a stage. Six of the eleven do.
    const verification = stages.find((stage) => /document verification/i.test(stage.title));
    if (verification) {
      faqs.push({
        q: `What happens at ${exam.name} document verification?`,
        a: `Everything you declared when you applied is checked against original documents: date of birth, category, educational qualification, and any relaxation or reservation you claimed. Nothing is re-assessed and no marks are awarded; the stage exists to confirm that the application the whole process was run on was true. A candidate who cannot produce an original at this point is rejected here, after clearing every stage, which is why the conditions are worth checking against your own papers before applying rather than after.`,
        // The eligibility route is noIndex for any exam without its own
        // guide, so the link is gated on that guide existing rather than on
        // all six current document-verification exams happening to have one.
        links: getExamGuide(exam.slug, 'eligibility')
          ? [{ href: `/${country}/${exam.slug}/eligibility`, label: `${exam.name} eligibility` }]
          : undefined,
      });
    }
  }

  faqs.push(sourceFaq(guide, exam, 'selection-process'));
  return faqs;
}
