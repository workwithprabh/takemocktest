import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

const banksDir = path.join(process.cwd(), 'src', 'lib', 'question-banks');
const files = fs
  .readdirSync(banksDir)
  .filter((file) => /^(ssc-cgl-tier[12]|ssc-chsl-tier1|ibps-po-prelims|ibps-po-mains|ibps-clerk-prelims|rrb-ntpc-cbt1|rrb-group-d-cbt|sbi-po-prelims|rbi-assistant-prelims|ssc-mts-cbt|ibps-rrb-office-assistant-prelims|ssc-gd-constable-cbe|ibps-rrb-officer-scale-1-prelims|sbi-clerk-prelims|rrb-je-cbt1|upsc-cse-paper-[12]|rpf-constable-cbt|rpf-si-cbt|ssc-je-paper-1|ssc-steno-cbt|ssc-cht-paper-1|ssc-selection-post|jee-(?:main|advanced)-paper-[12]|ssc-cpo-paper-1|ibps-so-prelims|rbi-grade-b-phase-1|nabard-grade-a-phase-1|sebi-grade-a-phase-1-paper-[12]|sidbi-grade-a-b-phase-1|lic-aao-prelims|niacl-ao-prelims|niacl-ao-mains|rrb-alp-cbt1|rrb-alp-cbt2|rrb-technician-grade1-signal|rrb-technician-grade3|rrb-paramedical)-.+-\d+\.ts$/.test(file))
  .sort();

const banks = files.map((file) => {
  const source = fs.readFileSync(path.join(banksDir, file), 'utf8');
  const code = ts.transpileModule(source, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const runtimeModule = { exports: {} };
  vm.runInNewContext(code, { module: runtimeModule, exports: runtimeModule.exports }, { filename: file });
  const questions = Object.values(runtimeModule.exports).find(Array.isArray);
  if (!questions) throw new Error(`${file} does not export a question array`);
  return { file, questions };
});

const errors = [];
const ids = new Set();
const texts = new Set();

for (const { file, questions } of banks) {
  const expectedCount = file.startsWith('ssc-cgl-tier2-english-')
    ? 45
    : file.startsWith('ssc-cgl-tier2-computer-knowledge-')
      ? 20
    : file.startsWith('ssc-cgl-tier2-general-awareness-')
      ? 25
    : file.startsWith('ibps-po-prelims-english') || file.startsWith('ssc-cgl-tier2-')
    ? 30
    : file.startsWith('ibps-po-prelims-') ? 35
    : file.startsWith('rrb-ntpc-cbt1-general-awareness-') ? 40
    : file.startsWith('rrb-ntpc-cbt1-') ? 30
    : file.startsWith('ibps-po-mains-general-awareness-') ? 50
    : file.startsWith('ibps-po-mains-') ? 40
    : file.startsWith('ibps-clerk-prelims-english-language-') ? 30
    : file.startsWith('ibps-clerk-prelims-') ? 35
    : file.startsWith('rrb-group-d-cbt-general-intelligence-reasoning-') ? 30
    : file.startsWith('rrb-group-d-cbt-general-awareness-current-affairs-') ? 20
    : file.startsWith('sbi-po-prelims-english-language-') ? 40
    : file.startsWith('sbi-po-prelims-') ? 30
    : file.startsWith('rbi-assistant-prelims-english-language-') ? 30
    : file.startsWith('rbi-assistant-prelims-') ? 35
    : file.startsWith('ssc-mts-cbt-general-awareness-') || file.startsWith('ssc-mts-cbt-english-language-comprehension-') ? 25
    : file.startsWith('ssc-mts-cbt-') ? 20
    : file.startsWith('ibps-rrb-office-assistant-prelims-') ? 40
    : file.startsWith('ssc-gd-constable-cbe-') ? 20
    : file.startsWith('ibps-rrb-officer-scale-1-prelims-') ? 40
    : file.startsWith('sbi-clerk-prelims-english-language-') ? 30
    : file.startsWith('sbi-clerk-prelims-') ? 35
    : file.startsWith('rrb-je-cbt1-mathematics-') ? 30
    : file.startsWith('rrb-je-cbt1-general-intelligence-reasoning-') ? 25
    : file.startsWith('rrb-je-cbt1-general-awareness-') ? 15
    : file.startsWith('rrb-je-cbt1-general-science-') ? 30
    : file.startsWith('upsc-cse-paper-1-history-') ? 15
    : file.startsWith('upsc-cse-paper-1-geography-') ? 15
    : file.startsWith('upsc-cse-paper-1-polity-') ? 15
    : file.startsWith('upsc-cse-paper-1-economy-') ? 15
    : file.startsWith('upsc-cse-paper-1-environment-') ? 12
    : file.startsWith('upsc-cse-paper-1-science-') ? 13
    : file.startsWith('upsc-cse-paper-1-current-affairs-') ? 15
    : file.startsWith('upsc-cse-paper-2-comprehension-') ? 18
    : file.startsWith('upsc-cse-paper-2-interpersonal-skills-') ? 6
    : file.startsWith('upsc-cse-paper-2-logical-reasoning-') ? 22
    : file.startsWith('upsc-cse-paper-2-decision-making-') ? 6
    : file.startsWith('upsc-cse-paper-2-mental-ability-') ? 8
    : file.startsWith('upsc-cse-paper-2-numeracy-data-interpretation-') ? 20
    : file.startsWith('rpf-constable-cbt-arithmetic-') ? 35
    : file.startsWith('rpf-constable-cbt-general-intelligence-reasoning-') ? 35
    : file.startsWith('rpf-constable-cbt-general-awareness-') ? 50
    : file.startsWith('rpf-si-cbt-arithmetic-') ? 35
    : file.startsWith('rpf-si-cbt-general-intelligence-reasoning-') ? 35
    : file.startsWith('rpf-si-cbt-general-awareness-') ? 50
    : file.startsWith('ssc-je-paper-1-') ? 50
    : file.startsWith('ssc-steno-cbt-english-language-comprehension-') ? 100
    : file.startsWith('ssc-steno-cbt-') ? 50
    : file.startsWith('ssc-cht-paper-1-') ? 100
    : file.startsWith('ssc-selection-post-') ? 100
    : file.startsWith('jee-main-paper-1-') ? 25
    : file.startsWith('jee-advanced-paper-1-') ? 16
    : file.startsWith('jee-advanced-paper-2-') ? 18
    : file.startsWith('ssc-cpo-paper-1-') ? 50
    : file.startsWith('ibps-so-prelims-') ? 50
    : file.startsWith('rbi-grade-b-phase-1-general-awareness-') ? 80
    : file.startsWith('rbi-grade-b-phase-1-reasoning-') ? 60
    : file.startsWith('rbi-grade-b-phase-1-') ? 30
    : file.startsWith('nabard-grade-a-phase-1-economic-and-social-issues-') ? 40
    : file.startsWith('nabard-grade-a-phase-1-agriculture-and-rural-development-') ? 40
    : file.startsWith('nabard-grade-a-phase-1-english-language-') ? 30
    : file.startsWith('nabard-grade-a-phase-1-decision-making-') ? 10
    : file.startsWith('nabard-grade-a-phase-1-') ? 20
    : file.startsWith('sebi-grade-a-phase-1-paper-2-commerce-') ? 8
    : file.startsWith('sebi-grade-a-phase-1-paper-2-accountancy-') ? 7
    : file.startsWith('sebi-grade-a-phase-1-paper-2-management-') ? 7
    : file.startsWith('sebi-grade-a-phase-1-paper-2-finance-') ? 8
    : file.startsWith('sebi-grade-a-phase-1-paper-2-costing-') ? 7
    : file.startsWith('sebi-grade-a-phase-1-paper-2-companies-act-') ? 6
    : file.startsWith('sebi-grade-a-phase-1-paper-2-economics-') ? 7
    : file.startsWith('sebi-grade-a-phase-1-paper-1-') ? 20
    : file.startsWith('sidbi-grade-a-b-phase-1-english-language-') ? 30
    : file.startsWith('sidbi-grade-a-b-phase-1-reasoning-aptitude-') ? 25
    : file.startsWith('sidbi-grade-a-b-phase-1-quantitative-aptitude-') ? 25
    : file.startsWith('sidbi-grade-a-b-phase-1-computer-knowledge-') ? 20
    : file.startsWith('sidbi-grade-a-b-phase-1-general-awareness-') ? 20
    : file.startsWith('sidbi-grade-a-b-phase-1-msme-policy-finance-') ? 30
    : file.startsWith('sidbi-grade-a-b-phase-1-stream-specific-general-') ? 50
    : file.startsWith('lic-aao-prelims-english-language-') ? 30
    : file.startsWith('lic-aao-prelims-quantitative-aptitude-') ? 35
    : file.startsWith('lic-aao-prelims-reasoning-ability-') ? 35
    : file.startsWith('niacl-ao-prelims-english-language-') ? 30
    : file.startsWith('niacl-ao-prelims-') ? 35
    : file.startsWith('niacl-ao-mains-') ? 50
    : file.startsWith('rrb-alp-cbt1-mathematics-') ? 20
    : file.startsWith('rrb-alp-cbt1-mental-ability-') ? 25
    : file.startsWith('rrb-alp-cbt1-general-science-') ? 20
    : file.startsWith('rrb-alp-cbt1-general-awareness-') ? 10
    : file.startsWith('rrb-alp-cbt2-mathematics-') ? 25
    : file.startsWith('rrb-alp-cbt2-general-intelligence-reasoning-') ? 25
    : file.startsWith('rrb-alp-cbt2-basic-science-engineering-') ? 50
    : file.startsWith('rrb-technician-grade1-signal-general-awareness-') ? 10
    : file.startsWith('rrb-technician-grade1-signal-general-intelligence-reasoning-') ? 15
    : file.startsWith('rrb-technician-grade1-signal-computers-applications-') ? 20
    : file.startsWith('rrb-technician-grade1-signal-mathematics-') ? 20
    : file.startsWith('rrb-technician-grade1-signal-basic-science-engineering-') ? 35
    : file.startsWith('rrb-technician-grade3-mathematics-') ? 25
    : file.startsWith('rrb-technician-grade3-general-intelligence-reasoning-') ? 25
    : file.startsWith('rrb-technician-grade3-general-science-') ? 40
    : file.startsWith('rrb-technician-grade3-general-awareness-') ? 10
    : file.startsWith('rrb-paramedical-') ? 10 : 25;
  if (questions.length !== expectedCount) {
    errors.push(`${file}: expected ${expectedCount} questions, found ${questions.length}`);
  }
  if (file.startsWith('ibps-po-mains-')) {
    const expectedMarks = file.startsWith('ibps-po-mains-general-awareness-')
      ? 60
      : file.startsWith('ibps-po-mains-english-')
        ? 20
        : 60;
    const totalMarks = questions.reduce((total, question) => total + (question.marks ?? 0), 0);
    if (Math.abs(totalMarks - expectedMarks) > 0.0001) {
      errors.push(`${file}: expected ${expectedMarks} total marks, found ${totalMarks}`);
    }
  }
  if (file.startsWith('ibps-po-prelims-')) {
    const expectedMarks = file.includes('-reasoning-') ? 40 : 30;
    const totalMarks = questions.reduce((total, question) => total + (question.marks ?? 0), 0);
    if (Math.abs(totalMarks - expectedMarks) > 0.0001) {
      errors.push(`${file}: expected ${expectedMarks} total marks, found ${totalMarks}`);
    }
    if (questions.some((question) => Math.abs(question.negativeMarking - question.marks / 4) > 0.0001)) {
      errors.push(`${file}: every penalty must equal one-fourth of that question's marks`);
    }
  }
  const mcqQuestions = questions.filter((question) => !question.answerType || question.answerType === 'mcq');
  const answerCounts = [0, 1, 2, 3].map(
    (answerIndex) => mcqQuestions.filter((question) => question.correctIndex === answerIndex).length,
  );
  if (Math.max(...answerCounts) - Math.min(...answerCounts) > 3) {
    errors.push(`${file}: answer positions are too predictable (${answerCounts.join('/')})`);
  }
  questions.forEach((question, index) => {
    const label = `${file} question ${index + 1}`;
    if (!question.id || ids.has(question.id)) errors.push(`${label}: missing or duplicate ID`);
    if (!question.question || texts.has(question.question.trim().toLowerCase())) {
      errors.push(`${label}: missing or duplicate question text (${JSON.stringify(question.question)})`);
    }
    if (question.answerType === 'numerical') {
      const valuePattern = question.maxDecimalPlaces ? /^-?\d+(?:\.\d{1,2})?$/ : /^-?\d+$/;
      if (!Array.isArray(question.options) || question.options.length !== 0 || question.correctIndex !== -1 || !valuePattern.test(question.correctValue ?? '')) {
        errors.push(`${label}: invalid numerical answer`);
      }
    } else if (question.answerType === 'multi-select') {
      if (!Array.isArray(question.options) || question.options.length !== 4 || new Set(question.options.map((option) => option.trim().toLowerCase())).size !== 4 || !question.correctIndices?.length || new Set(question.correctIndices).size !== question.correctIndices.length || question.correctIndices.some((answer) => !Number.isInteger(answer) || answer < 0 || answer > 3)) {
        errors.push(`${label}: invalid multi-select answer`);
      }
    } else {
      if (!Array.isArray(question.options) || question.options.length !== 4) {
        errors.push(`${label}: must have exactly four options`);
      } else if (new Set(question.options.map((option) => option.trim().toLowerCase())).size !== 4) {
        errors.push(`${label}: has duplicate options`);
      }
      if (!Number.isInteger(question.correctIndex) || question.correctIndex < 0 || question.correctIndex > 3) {
        errors.push(`${label}: invalid correctIndex`);
      }
    }
    if (!question.explanation?.trim()) errors.push(`${label}: missing explanation`);
    if (!question.topic?.trim() || !question.difficulty) errors.push(`${label}: missing topic or difficulty`);
    if (question.marks !== undefined && (!(question.marks > 0) || !Number.isFinite(question.marks))) {
      errors.push(`${label}: invalid marks`);
    }
    if (question.negativeMarking !== undefined && (question.negativeMarking < 0 || !Number.isFinite(question.negativeMarking))) {
      errors.push(`${label}: invalid negative marking`);
    }
    if (!question.source?.reference || !question.source?.url?.startsWith('https://') || !question.source?.checkedOn) {
      errors.push(`${label}: incomplete provenance`);
    }
    ids.add(question.id);
    texts.add(question.question.trim().toLowerCase());
  });
}

if (process.argv.includes('--dump')) {
  const requestedBank = process.argv.find((argument) => argument.startsWith('--bank='))?.split('=')[1];
  for (const { file, questions } of banks.filter((bank) => !requestedBank || bank.file.includes(requestedBank))) {
    console.log(`\n## ${file}`);
    questions.forEach((question, index) => {
      const correct = question.answerType === 'numerical'
        ? question.correctValue
        : question.answerType === 'multi-select'
          ? question.correctIndices.map((answer) => String.fromCharCode(65 + answer)).join(', ')
          : question.options[question.correctIndex];
      console.log(
        `${index + 1}. [${question.id}] ${question.question}\n` +
          `   ${question.answerType === 'numerical' ? 'Numerical value entry' : `Options: ${question.options.join(' | ')}`}\n` +
          `   Key: ${correct}\n` +
          `   Explanation: ${question.explanation}\n` +
          `   Source: ${question.source.reference} — ${question.source.url}`,
      );
    });
  }
}

if (errors.length) {
  console.error(`Question-bank QA failed with ${errors.length} issue(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

const total = banks.reduce((sum, bank) => sum + bank.questions.length, 0);
console.log(`Question-bank structure passed: ${banks.length} banks, ${total} questions, no duplicate IDs or text.`);
for (const { file, questions } of banks) {
  const answers = [0, 1, 2, 3].map((index) => questions.filter((question) => question.correctIndex === index).length);
  const difficulties = Object.groupBy(questions, (question) => question.difficulty);
  console.log(
    `${file}: answers A/B/C/D ${answers.join('/')} · difficulty E/M/H ` +
      `${difficulties.easy?.length || 0}/${difficulties.medium?.length || 0}/${difficulties.hard?.length || 0}`,
  );
}
