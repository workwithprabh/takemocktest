import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

const banksDir = path.join(process.cwd(), 'src', 'lib', 'question-banks');
const files = fs
  .readdirSync(banksDir)
  .filter((file) => /^(ssc-cgl-tier[12]|ssc-chsl-tier1|ibps-po-prelims|ibps-po-mains|ibps-clerk-prelims|rrb-ntpc-cbt1|rrb-group-d-cbt|sbi-po-prelims|rbi-assistant-prelims|ssc-mts-cbt|ibps-rrb-office-assistant-prelims|ssc-gd-constable-cbe|ibps-rrb-officer-scale-1-prelims|sbi-clerk-prelims|rrb-je-cbt1|upsc-cse-paper-[12]|rpf-constable-cbt|rpf-si-cbt|ssc-je-paper-1|ssc-steno-cbt|ssc-cht-paper-1|ssc-selection-post|bitsat-2026-mathematics|jee-(?:main|advanced)-paper-[12]|ssc-cpo-paper-1|ibps-so-prelims|rbi-grade-b-phase-1|nabard-grade-a-phase-1|sebi-grade-a-phase-1-paper-[12]|sidbi-grade-a-b-phase-1|lic-aao-prelims|niacl-ao-prelims|niacl-ao-mains|rrb-alp-cbt1|rrb-alp-cbt2|rrb-technician-grade1-signal|rrb-technician-grade3|rrb-paramedical|viteee-2026-mpcea|srmjeee-2026-pcm|aeee-2026-btech|met-2026-btech|comedk-uget-2026-btech|iiit-hyderabad-ugee-2026|ielts-academic-reading|ielts-general-training-reading|toefl-reading|pte-reading|sat-reading-and-writing|sat-math|gre-quantitative-reasoning|act-english|act-math|act-reading|act-science|mcat-cars|oet-reading-part-c|frm-part-1-quantitative-analysis|nism-series-v-a-mutual-fund-distributors|acet-mathematics-and-statistics|ca-foundation-quantitative-aptitude|cma-foundation-business-mathematics-and-statistics|nda-mathematics|nda-general-ability-test-english|cds-elementary-mathematics|cds-english|afcat-verbal-numerical-and-reasoning|territorial-army-reasoning-and-english|inet-english-and-reasoning-numerical-ability|agniveer-vayu-english-and-mathematics|navy-ssr-english-and-mathematics|clat-english-legal-logical-quantitative|ailet-english-and-logical-reasoning|slat-logical-legal-analytical-reading|mh-cet-law-legal-logical-english-mathematics|mh-cet-law-3-year-legal-logical-english|cat-varc-dilr-qa|cmat-qtdi-logical-reasoning-language-comprehension|nmat-language-logical-reasoning-quantitative|snap-general-english-analytical-logical-reasoning-quantitative-di-ds|atma-analytical-reasoning-verbal-quantitative-skills|ibsat-verbal-reading-quantitative-data-adequacy|mat-language-reasoning-quant-data|micat-va-qadi-dct|tancet-mba-business-situations-rc-quant-ds-english|kmat-karnataka-language-mathematical-basic-aptitude|jipmat-qa-dilr-varc|nata|mht-cet-pcm)-.+-\d+\.ts$/.test(file))
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
    : file.startsWith('rrb-ntpc-cbt1-full-mock-') ? 100
    : file.startsWith('rrb-ntpc-cbt1-general-awareness-sectional-') ? 40
    : file.startsWith('rrb-ntpc-cbt1-mathematics-sectional-') ? 30
    : file.startsWith('rrb-ntpc-cbt1-general-intelligence-reasoning-sectional-') ? 30
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
    : file.startsWith('bitsat-2026-mathematics-physics-') || file.startsWith('bitsat-2026-mathematics-chemistry-') ? 30
    : file.startsWith('bitsat-2026-mathematics-english-proficiency-') ? 10
    : file.startsWith('bitsat-2026-mathematics-logical-reasoning-') ? 20
    : file.startsWith('bitsat-2026-mathematics-mathematics-') ? 40
    : file.startsWith('jee-main-paper-1-') ? 25
    : file.startsWith('jee-advanced-paper-1-') ? 16
    : file.startsWith('jee-advanced-paper-2-') ? 18
    : file.startsWith('jee-main-paper-2-2a-objective-practice-') ? 75
    : file.startsWith('jee-main-paper-2-2b-full-mock-') ? 100
    : file.startsWith('nata-mathematics-') ? 20
    : file.startsWith('mht-cet-pcm-full-mock-') ? 150
    : file.startsWith('mht-cet-pcm-physics-chemistry-group-') ? 100
    : file.startsWith('mht-cet-pcm-mathematics-sectional-') ? 50
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
    : file.startsWith('rrb-paramedical-') ? 10
    : file.startsWith('viteee-2026-mpcea-full-mock-') ? 125
    : file.startsWith('viteee-2026-mpcea-mathematics-sectional-') ? 40
    : file.startsWith('viteee-2026-mpcea-physics-sectional-') ? 35
    : file.startsWith('viteee-2026-mpcea-chemistry-sectional-') ? 35
    : file.startsWith('viteee-2026-mpcea-aptitude-sectional-') ? 10
    : file.startsWith('viteee-2026-mpcea-english-sectional-') ? 5
    : file.startsWith('viteee-2026-mpcea-mixed-quick-practice-30m-') ? 25
    : file.startsWith('viteee-2026-mpcea-mixed-quick-practice-60m-') ? 50
    : file.startsWith('srmjeee-2026-pcm-full-mock-') ? 130
    : file.startsWith('srmjeee-2026-pcm-physics-sectional-') ? 35
    : file.startsWith('srmjeee-2026-pcm-chemistry-sectional-') ? 35
    : file.startsWith('srmjeee-2026-pcm-mathematics-sectional-') ? 40
    : file.startsWith('srmjeee-2026-pcm-english-aptitude-sectional-') ? 20
    : file.startsWith('srmjeee-2026-pcm-mixed-quick-practice-30m-') ? 26
    : file.startsWith('srmjeee-2026-pcm-mixed-quick-practice-60m-') ? 52
    : file.startsWith('aeee-2026-btech-full-mock-') ? 100
    : file.startsWith('aeee-2026-btech-mathematics-sectional-') ? 40
    : file.startsWith('aeee-2026-btech-physics-sectional-') ? 25
    : file.startsWith('aeee-2026-btech-chemistry-sectional-') ? 20
    : file.startsWith('aeee-2026-btech-quantitative-aptitude-sectional-') ? 10
    : file.startsWith('aeee-2026-btech-english-sectional-') ? 5
    : file.startsWith('aeee-2026-btech-mixed-quick-practice-30m-') ? 20
    : file.startsWith('aeee-2026-btech-mixed-quick-practice-60m-') ? 40
    : file.startsWith('met-2026-btech-full-mock-') ? 60
    : file.startsWith('met-2026-btech-mathematics-sectional-') ? 20
    : file.startsWith('met-2026-btech-physics-sectional-') ? 15
    : file.startsWith('met-2026-btech-chemistry-sectional-') ? 15
    : file.startsWith('met-2026-btech-english-sectional-') ? 10
    : file.startsWith('met-2026-btech-mixed-quick-practice-30m-') ? 15
    : file.startsWith('met-2026-btech-mixed-quick-practice-60m-') ? 30
    : file.startsWith('comedk-uget-2026-btech-full-mock-') ? 180
    : file.startsWith('comedk-uget-2026-btech-physics-sectional-') ? 60
    : file.startsWith('comedk-uget-2026-btech-chemistry-sectional-') ? 60
    : file.startsWith('comedk-uget-2026-btech-mathematics-sectional-') ? 60
    : file.startsWith('iiit-hyderabad-ugee-2026-full-mock-') ? 90
    : file.startsWith('iiit-hyderabad-ugee-2026-supr-sectional-') ? 40
    : file.startsWith('iiit-hyderabad-ugee-2026-reap-sectional-') ? 50
    : file.startsWith('ielts-academic-reading-passage-1-') ? 13
    : file.startsWith('ielts-academic-reading-passage-2-') ? 13
    : file.startsWith('ielts-academic-reading-passage-3-') ? 14
    : file.startsWith('ielts-general-training-reading-section-1-') ? 13
    : file.startsWith('ielts-general-training-reading-section-2-') ? 13
    : file.startsWith('ielts-general-training-reading-section-3-') ? 14
    : file.startsWith('toefl-reading-read-in-daily-life-') ? 15
    : file.startsWith('toefl-reading-read-an-academic-passage-') ? 15
    : file.startsWith('pte-reading-multiple-choice-single-answer-') ? 12
    : file.startsWith('pte-reading-multiple-choice-multiple-answers-') ? 8
    : file.startsWith('sat-reading-and-writing-craft-and-structure-') ? 15
    : file.startsWith('sat-reading-and-writing-information-and-ideas-') ? 14
    : file.startsWith('sat-reading-and-writing-standard-english-conventions-') ? 14
    : file.startsWith('sat-reading-and-writing-expression-of-ideas-') ? 11
    : file.startsWith('sat-math-algebra-') ? 15
    : file.startsWith('sat-math-advanced-math-') ? 15
    : file.startsWith('sat-math-problem-solving-and-data-analysis-') ? 7
    : file.startsWith('sat-math-geometry-and-trigonometry-') ? 7
    : file.startsWith('gre-quantitative-reasoning-quantitative-comparison-') ? 12
    : file.startsWith('gre-quantitative-reasoning-numeric-entry-') ? 8
    : file.startsWith('act-english-usage-and-mechanics-') ? 13
    : file.startsWith('act-english-rhetorical-skills-') ? 12
    : file.startsWith('act-math-pre-algebra-and-elementary-algebra-') ? 10
    : file.startsWith('act-math-intermediate-algebra-and-coordinate-geometry-') ? 8
    : file.startsWith('act-math-plane-geometry-and-trigonometry-') ? 6
    : file.startsWith('act-reading-literary-narrative-') ? 5
    : file.startsWith('act-reading-social-science-') ? 5
    : file.startsWith('act-reading-humanities-') ? 4
    : file.startsWith('act-reading-natural-science-') ? 4
    : file.startsWith('act-science-data-representation-') ? 5
    : file.startsWith('act-science-research-summaries-') ? 9
    : file.startsWith('act-science-conflicting-viewpoints-') ? 4
    : file.startsWith('mcat-cars-humanities-') ? 12
    : file.startsWith('mcat-cars-social-sciences-') ? 12
    : file.startsWith('oet-reading-part-c-combined-') ? 16
    : file.startsWith('frm-part-1-quantitative-analysis-combined-') ? 20
    : file.startsWith('nism-series-v-a-mutual-fund-distributors-combined-') ? 20
    : file.startsWith('acet-mathematics-and-statistics-combined-') ? 20
    : file.startsWith('ca-foundation-quantitative-aptitude-combined-') ? 30
    : file.startsWith('cma-foundation-business-mathematics-and-statistics-combined-') ? 30
    : file.startsWith('nda-mathematics-combined-') ? 18
    : file.startsWith('nda-general-ability-test-english-combined-') ? 12
    : file.startsWith('cds-elementary-mathematics-combined-') ? 18
    : file.startsWith('cds-english-combined-') ? 12
    : file.startsWith('afcat-verbal-numerical-and-reasoning-combined-') ? 24
    : file.startsWith('territorial-army-reasoning-and-english-combined-') ? 21
    : file.startsWith('inet-english-and-reasoning-numerical-ability-combined-') ? 24
    : file.startsWith('agniveer-vayu-english-and-mathematics-combined-') ? 27
    : file.startsWith('navy-ssr-english-and-mathematics-combined-') ? 24
    : file.startsWith('clat-english-legal-logical-quantitative-combined-') ? 30
    : file.startsWith('ailet-english-and-logical-reasoning-combined-') ? 24
    : file.startsWith('slat-logical-legal-analytical-reading-combined-') ? 24
    : file.startsWith('mh-cet-law-legal-logical-english-mathematics-combined-') ? 24
    : file.startsWith('mh-cet-law-3-year-legal-logical-english-combined-') ? 22
    : file.startsWith('cat-varc-dilr-qa-combined-') ? 34
    : file.startsWith('cmat-qtdi-logical-reasoning-language-comprehension-combined-') ? 60
    : file.startsWith('nmat-language-logical-reasoning-quantitative-combined-') ? 36
    : file.startsWith('snap-general-english-analytical-logical-reasoning-quantitative-di-ds-combined-') ? 60
    : file.startsWith('atma-analytical-reasoning-verbal-quantitative-skills-combined-') ? 60
    : file.startsWith('ibsat-verbal-reading-quantitative-data-adequacy-combined-') ? 70
    : file.startsWith('mat-language-reasoning-quant-data-combined-') ? 40
    : file.startsWith('micat-va-qadi-dct-combined-') ? 60
    : file.startsWith('tancet-mba-business-situations-rc-quant-ds-english-combined-') ? 100
    : file.startsWith('kmat-karnataka-language-mathematical-basic-aptitude-combined-') ? 120
    : file.startsWith('jipmat-qa-dilr-varc-combined-') ? 45 : 25;
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
    // A duplicate is the full question (stem + options + answer) matching an
    // existing one, not just a shared generic instructional stem (e.g. "Choose
    // the grammatically correct sentence.") reused with different options/
    // answer/explanation across unrelated exams. Reusing a boilerplate opener
    // like that is fine; presenting the same question twice is not.
    const answerSignature = question.answerType === 'numerical'
      ? question.correctValue
      : question.answerType === 'multi-select'
        ? (question.correctIndices ?? []).slice().sort().join(',')
        : question.correctIndex;
    const questionSignature = [
      question.question?.trim().toLowerCase(),
      (question.options ?? []).map((option) => option.trim().toLowerCase()).join('|'),
      answerSignature,
    ].join('::');
    if (!question.question || texts.has(questionSignature)) {
      errors.push(`${label}: missing or duplicate question (${JSON.stringify(question.question)})`);
    }
    if (question.answerType === 'numerical') {
      // maxDecimalPlaces, when present, caps the number of decimal digits. When
      // absent, any syntactically valid signed integer or finite decimal is valid
      // (no invented tolerance).
      const hasPrecision = typeof question.maxDecimalPlaces === 'number';
      const valuePattern = hasPrecision
        ? question.maxDecimalPlaces > 0
          ? new RegExp(`^-?\\d+(?:\\.\\d{1,${question.maxDecimalPlaces}})?$`)
          : /^-?\d+$/
        : /^-?\d+(?:\.\d+)?$/;
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
    texts.add(questionSignature);
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
