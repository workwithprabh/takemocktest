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
// The syllabus and eligibility pages of the same exam must also not converge.
// Ten exams have both, one click apart, so the questions differ in angle rather
// than being one template with a noun swapped.

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
function sourceFaq(guide: ExamGuidePage, exam: ExamConfig, kind: 'syllabus' | 'eligibility'): Faq {
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
