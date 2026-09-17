import { getExamGuide } from './exam-guides';
import type { ExamGuidePage, GuideBlock } from './exam-guides';
import type { SyllabusCoverage } from './syllabus-coverage';
import type { ExamConfig } from './exams';
import { formatMarks, getCheckedTestCount } from './exams';
import type { Faq } from './exam-faqs';

// FAQs for the per-exam guide pages: syllabus, eligibility, selection process,
// salary and previous year papers.
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
// The guide pages of the same exam must also not converge. Ten exams carry
// syllabus, eligibility and selection process a click apart from each other,
// and SSC CGL carries all five, so the questions differ in angle rather than
// being one template with a noun swapped. Syllabus asks what is examined,
// eligibility asks who may sit it, selection process asks what clearing it
// actually involves, salary asks what the post pays, and previous year papers
// asks what was actually released and whether it can be trusted.
//
// Salary carries one more constraint than the rest. The guide itself contains a
// block headed "Why we do not quote one in-hand salary", explaining that a
// single take-home figure would be misleading. Nothing generated here may
// produce one, so the answers work from the pay-matrix table, which is
// structured and citable, and treat the absence of an in-hand figure as the
// answer to the question rather than as a gap to fill.

function listOf(values: string[]): string {
  return values.length > 1 ? `${values.slice(0, -1).join(', ')} and ${values[values.length - 1]}` : values[0] ?? '';
}

/** The paper's shape, from the stage pattern rather than from guide prose. */
function patternFaq(exam: ExamConfig, country: string, phrasing: 'syllabus' | 'eligibility'): Faq | undefined {
  const stage = exam.stages.find((item) => item.pattern.status === 'official');
  const pattern = stage?.pattern;
  if (!pattern?.totalQuestions || !pattern.totalMarks || !pattern.duration) return undefined;
  const shape = `${pattern.totalQuestions} questions for ${pattern.totalMarks} marks in ${pattern.duration} minutes`;
  // A string value is written for a table cell and starts with a capital
  // ("One-fourth of the marks assigned to the question"), which read wrong
  // mid-sentence. Lowercased only where the next letter is lowercase, so an
  // abbreviation at the front survives.
  const spelledOut =
    typeof pattern.negativeMarking === 'string' && /^[A-Z][a-z]/.test(pattern.negativeMarking)
      ? pattern.negativeMarking[0].toLowerCase() + pattern.negativeMarking.slice(1)
      : pattern.negativeMarking;
  // A number is a per-question rate and reads as one. A string is not always:
  // SSC MTS records "0 in Session 1, 1 in Session 2", which "penalised at 0"
  // turns into a contradiction. Anything spelled out gets a label instead.
  const penalty = pattern.negativeMarking
    ? typeof pattern.negativeMarking === 'number'
      ? ` Wrong answers are penalised ${formatMarks(pattern.negativeMarking)} per question.`
      : ` Negative marking: ${spelledOut}.`
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
function sourceFaq(guide: ExamGuidePage, exam: ExamConfig, kind: 'syllabus' | 'eligibility' | 'selection-process' | 'salary'): Faq {
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
  if (kind === 'salary') {
    return {
      q: `Where is the official ${exam.name} pay information published?`,
      a: `In ${cited ?? 'the official document'}, cited and linked at the foot of this page. The pay level attached to each post is stated there, and that document governs: where any other source disagrees with it, including this page, the notification is what counts. Allowance rates are a separate matter again, set centrally and revised periodically, so the pay level is the stable part of the package and the amounts sitting on top of it are not.`,
    };
  }

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

/**
 * FAQs for a syllabus page built from coverage rather than from a published
 * syllabus. Every answer states which half of the page it is describing,
 * because the whole risk of this page type is a reader taking the topic list
 * for the exam body's own document.
 */
export function getCoverageSyllabusFaqs(
  exam: ExamConfig,
  covers: SyllabusCoverage[],
  country: string,
): Faq[] {
  const tests = getCheckedTestCount(exam);
  const sections = covers.flatMap((cover) => cover.sections);
  const names = [...new Set(sections.map((section) => section.name))];
  const labels = sections.reduce((total, section) => total + section.labelCount, 0);
  const questions = sections.reduce((total, section) => total + section.questionCount, 0);
  const sourced = covers.find((cover) => cover.sourceUrl);
  const faqs: Faq[] = [];

  faqs.push({
    q: `What sections does the ${exam.name} syllabus cover?`,
    a: `${names.length === 1 ? 'There is one section' : `There are ${names.length} sections`}: ${listOf(names)}. Those names, and the question counts and marks beside them, come from the official pattern${
      sourced?.checkedOn ? `, checked ${sourced.checkedOn}` : ''
    }. What sits under each of them on this page is a different thing: ${labels} topic labels drawn from the ${questions} questions built here for this exam, which is a map of what you can practise rather than a list the exam body published.`,
    links: tests > 0 ? [{ href: `/${country}/${exam.slug}/mock-test`, label: `${exam.name} mock test` }] : undefined,
  });

  faqs.push({
    q: `Is this the official ${exam.name} syllabus?`,
    a: `No, and the page says so rather than leaving you to work it out. The section pattern is official${
      sourced ? ' and linked to the notice it came from' : ''
    }; the topics beneath it are the ones this site's own tests cover. They are useful for two things: seeing what you can practise here, and checking a syllabus you already have for gaps. For the syllabus itself, read the exam body's own document, because a topic list assembled from a question bank can be narrower than the syllabus and never wider in a way you should trust.`,
  });

  const pattern = patternFaq(exam, country, 'syllabus');
  if (pattern) faqs.push(pattern);

  if (tests > 0) {
    faqs.push({
      q: `How do I practise the ${exam.name} syllabus?`,
      a: `Sit a full mock before working down any topic list. A list tells you what can be asked; it does not tell you which parts are costing you marks, and that is rarely where a candidate expects. There ${
        tests === 1 ? 'is 1 free test' : `are ${tests} free tests`
      } for ${exam.name} here, and the sectional ones let you rebuild a single section once the full paper has shown you which one needs it.`,
      links: [
        { href: `/${country}/${exam.slug}/mock-test`, label: `${exam.name} mock test` },
        { href: `/${country}/practice`, label: 'Topic-wise practice' },
      ],
    });
  }

  return faqs;
}

export function getSyllabusFaqs(exam: ExamConfig, guide: ExamGuidePage, country: string): Faq[] {
  const tests = getCheckedTestCount(exam);
  const faqs: Faq[] = [];

  // Every syllabus guide carries a topicSections block, so the lead answer can
  // name the real sections instead of describing the page in the abstract.
  const topics = guide.blocks.filter(
    (block): block is Extract<GuideBlock, { type: 'topicSections' }> => block.type === 'topicSections',
  );
  const sections = topics.flatMap((block) => block.sections);
  // A guide can carry one block per stage, and RRB NTPC sets the same three
  // sections at CBT 1 and CBT 2. Counting the blocks rather than the distinct
  // sections published "It runs to 6 sections: Mathematics, General
  // Intelligence and Reasoning, General Awareness, Mathematics, General
  // Intelligence and Reasoning and General Awareness", and 66 topics for the
  // 33 the page actually lists twice.
  const names = [...new Set(sections.map((section) => section.section))];
  const repeated = names.length < sections.length;
  if (sections.length > 0) {
    const count = new Set(sections.flatMap((section) => section.topics)).size;
    // The provenance comes from the block, not from an assumption. This answer
    // used to say every topic was "taken from the official syllabus" on all
    // thirteen published syllabus pages, including the four banking ones whose
    // own callout says the opposite a few lines above it. Where any block on
    // the page is a preparation map, the answer says so instead.
    const mapped = topics.some((block) => block.topicsSource === 'platform-map');
    const provenance = mapped
      ? `${count} named topics are listed beneath them. Those bullets are a preparation map built here from the question families this exam keeps returning to, not a subtopic list the exam body publishes: the section names, counts, marks and timing are official, the topics under them are not.`
      : `${count} named topics are listed on this page beneath them, each taken from the official syllabus rather than inferred from past papers.`;
    faqs.push({
      q: `What is the ${exam.name} syllabus?`,
      a: `${names.length === 1 ? 'It is one section' : `It runs to ${names.length} sections`}: ${listOf(names)}${
        repeated ? ', and the same ones are set at every stage this page covers' : ''
      }. ${provenance}`,
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

/**
 * The pay-matrix table, located by its header rather than by position, so a
 * guide that orders its blocks differently still resolves. Rows are read back
 * by amount rather than by row order: the SSC CGL table happens to run highest
 * level first, and relying on that would break the first time one does not.
 */
function payLevels(guide: ExamGuidePage) {
  const block = guide.blocks.find(
    (item): item is Extract<GuideBlock, { type: 'table' }> =>
      item.type === 'table' && /pay level/i.test(item.headers[0] ?? ''),
  );
  if (!block) return undefined;
  const amount = (value: string) => Number(value.replace(/[^0-9]/g, ''));
  const rows = block.rows.filter((row) => row.length >= 3 && row[0] && amount(row[1]) > 0);
  if (rows.length === 0) return undefined;
  const byAmount = [...rows].sort((a, b) => amount(a[1]) - amount(b[1]));
  return { count: rows.length, lowest: byAmount[0], highest: byAmount[byAmount.length - 1] };
}

/**
 * What the guide says is added to and taken off the basic pay. Read off the
 * infoBlocks items by title so the answer names the real components instead of
 * a generic list of allowances that may not apply to this service.
 */
function payComponents(guide: ExamGuidePage) {
  const block = guide.blocks.find(
    (item): item is Extract<GuideBlock, { type: 'infoBlocks' }> => item.type === 'infoBlocks',
  );
  const items = block?.items ?? [];
  // Lower-cases a leading capital only where the next letter is lower-case, so
  // "Applicable Dearness Allowance" folds into a sentence while "NPS
  // contribution" keeps its initialism intact.
  const phrase = (item: { text: string } | undefined) =>
    item ? item.text.replace(/\.\s*$/, '').replace(/^[A-Z](?=[a-z])/, (letter) => letter.toLowerCase()) : undefined;
  return {
    added: phrase(items.find((item) => /\badd/i.test(item.title))),
    deducted: phrase(items.find((item) => /\bdeduct/i.test(item.title))),
  };
}

export function getSalaryFaqs(exam: ExamConfig, guide: ExamGuidePage, country: string): Faq[] {
  const tests = getCheckedTestCount(exam);
  const faqs: Faq[] = [];
  const levels = payLevels(guide);

  if (levels) {
    faqs.push({
      q: `What is the ${exam.name} salary?`,
      a: `It is set by pay level rather than by one figure. The table on this page covers ${levels.count} levels, from ${levels.lowest[0]} starting at ${levels.lowest[1]} basic pay up to ${levels.highest[0]} starting at ${levels.highest[1]}. Which level you draw depends on the post you are allotted, not on the examination itself, so two candidates who clear the same paper can start on different pay. Basic pay is also only the base: allowances are added to it and deductions come off it before anything reaches your account.`,
      links: tests > 0 ? [{ href: `/${country}/${exam.slug}/mock-test`, label: `${exam.name} mock test` }] : undefined,
    });
  }

  // The most searched version of this question, and the one this page
  // deliberately refuses to answer with a number. The refusal is the answer, so
  // it is stated as one rather than left for a reader to infer from a gap.
  const components = payComponents(guide);
  faqs.push({
    q: `What is the in-hand ${exam.name} salary?`,
    a: `There is no single figure, and quoting one would mean assuming things about you that nobody can know in advance. Take-home pay starts from the basic pay for your level and moves in both directions from there${
      components.added ? `: ${components.added} are added` : ''
    }${components.deducted ? `, and ${components.deducted} come off` : ''}. It then changes again with your place of posting, whether you take government accommodation, current allowance rates and your own tax position. The basic pay table on this page is the part that is fixed and comparable between posts; the rest is not knowable until after allocation.`,
  });

  if (levels) {
    faqs.push({
      q: `Which ${exam.name} post pays the most?`,
      a: `The one attached to the highest pay level, and the level belongs to the post rather than to the examination. Posts across ${levels.count} levels are filled from the same paper, which is why the salary question has no answer until allocation. The notification lists the level against each post, and that list is the part that moves between cycles as posts are added and withdrawn, which is why this page does not reproduce it.`,
      // The selection-process route is noIndex without its own guide, so the
      // link is gated on that guide existing rather than assumed.
      links: getExamGuide(exam.slug, 'selection-process')
        ? [{ href: `/${country}/${exam.slug}/selection-process`, label: `${exam.name} selection process` }]
        : undefined,
    });

    faqs.push({
      q: `Does the ${exam.name} basic pay stay at the starting figure?`,
      a: `No. Each row of the table is a band, not a point. ${levels.lowest[0]} runs from ${levels.lowest[1]} to ${levels.lowest[2]}, and ${levels.highest[0]} from ${levels.highest[1]} to ${levels.highest[2]}. A career moves up through the band it sits in, and into a higher level on promotion. The starting figure is what a new entrant draws; the upper figure is where that level ends. Comparing starting figures across posts tells you where you begin rather than where the post leads.`,
    });
  }

  faqs.push(sourceFaq(guide, exam, 'salary'));
  return faqs;
}

/**
 * The previous-year-papers guide carries no sourceNote block, so provenance is
 * answered from the record cards themselves: what they link to, and what the
 * availability line on each one says.
 */
export function getPreviousYearPapersFaqs(exam: ExamConfig, guide: ExamGuidePage, country: string): Faq[] {
  const tests = getCheckedTestCount(exam);
  const hasOfficialPattern = exam.stages.some((stage) => stage.pattern.status === 'official');
  const block = guide.blocks.find(
    (item): item is Extract<GuideBlock, { type: 'recordCards' }> => item.type === 'recordCards',
  );
  const records = block?.records ?? [];
  const faqs: Faq[] = [];

  if (records.length > 0) {
    // Badges read "Tier 2 · 2023", so the stage name and the year come out of
    // the same string. Sorted rather than left in card order, which runs newest
    // first and would list the later tier before the earlier one.
    const stages = [...new Set(records.map((record) => record.badge.split('·')[0].trim()).filter(Boolean))].sort();
    const years = records.flatMap((record) => record.badge.match(/\b(?:19|20)\d{2}\b/g) ?? []).map(Number);
    const span = years.length > 0
      ? Math.min(...years) === Math.max(...years)
        ? ` from ${Math.min(...years)}`
        : ` from ${Math.min(...years)} to ${Math.max(...years)}`
      : '';

    faqs.push({
      q: `Where can I find official ${exam.name} previous year papers?`,
      a: `This page lists ${records.length} official release records${
        stages.length > 0 ? `, covering ${listOf(stages)}${span}` : span
      }. Each links to the conducting body's own published notice rather than to a copy hosted somewhere else, so you can see for yourself what was released and when. Read the availability line on a card before you click it, because a record of a release is not the same thing as a live download.`,
    });

    // Hedge only where the data forces it. Every SSC CGL record states that its
    // candidate window has closed, and softening that into "often not" would be
    // vaguer than the page itself. A future guide holding an open window gets
    // the cautious wording instead.
    const closed = records.every((record) =>
      record.meta.some((entry) => /availability|access|window/i.test(entry.label) && /closed/i.test(entry.value)),
    );
    faqs.push({
      q: `Can I still download the ${exam.name} question papers from these links?`,
      a: `${
        closed
          ? 'No. Papers of this kind are released to candidates through a login window that closes after a few weeks, and every window on this page has closed, on the date its own card records'
          : 'Not always. Papers of this kind are released to candidates through a login window that closes after a few weeks, and each card on this page carries the state of its own window'
      }. What the notice itself opens is the permanent public record, which stays up. That is still worth having: it confirms which papers were officially released, for which stage and cycle, and on what date, which is the check to run against any paper you find circulating elsewhere.`,
    });
  }

  // The guide's own stance, stated as an answer rather than left as an absence
  // a reader has to explain to themselves.
  faqs.push({
    q: `Why are no ${exam.name} paper PDFs hosted on this page?`,
    a: `Because they have not been verified to the standard the rest of this site is held to. A past paper is only worth practising if the questions are the ones that were actually asked and the answers are the ones the conducting body accepted, and a file that cannot be traced back to an official release satisfies neither. Shift-wise papers will be published here when their source and their answer key can both be checked independently. Until then the honest answer is that we do not have them, rather than a file that looks as though we do.`,
  });

  const practiceLinks = [
    ...(hasOfficialPattern ? [{ href: `/${country}/${exam.slug}/exam-pattern`, label: `${exam.name} exam pattern` }] : []),
    ...(tests > 0 ? [{ href: `/${country}/${exam.slug}/mock-test`, label: `${exam.name} mock test` }] : []),
  ];
  faqs.push({
    q: `Are old ${exam.name} papers still useful if the pattern has changed?`,
    a: `Yes, with one adjustment. What survives a pattern change is question style: how a topic gets tested, how much working a question expects, how the wrong options are built to catch a particular mistake. What does not survive is the timing, the section split and the marking scheme, and rehearsing those from an outdated paper trains the wrong pace. Read old papers for the questions and take the clock from the current pattern.`,
    // Both targets are conditionally noIndex, so an exam carrying neither gets
    // no link row at all rather than an empty one.
    links: practiceLinks.length > 0 ? practiceLinks : undefined,
  });

  return faqs;
}
