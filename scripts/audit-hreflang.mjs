// Two jobs, because this gate has to guard machinery that is not live yet.
//
//   node scripts/audit-hreflang.mjs
//
// PART A, the rule self-test. Loads src/lib/hreflang.ts and exercises it with a
// simulated second country. hreflang is the single easiest way to damage a site
// internationally, and the damage is invisible until Google has recrawled, so
// discovering the rules are wrong on launch day is the outcome worth spending a
// script to avoid. This part runs without a build and without Nigeria existing.
//
// PART B, the output check. Scans the built export for rendered hreflang tags
// and validates every set that is actually there: reciprocal, self-referencing,
// x-default present, absolute URLs, targets that resolve, and no tags on pages
// that must never carry them. Today it finds none, which is correct: with one
// country there is nothing to declare. It starts doing real work the day a
// second country ships, and it fails loudly if any page emits a set before then.
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import ts from 'typescript';

const root = process.cwd();
const errors = [];

// --- a minimal CommonJS loader for the four-file dependency graph ----------
// hreflang.ts imports exams.ts, exam-countries.ts and schema.ts, none of which
// reach outside src/lib. Transpiling the graph is cheaper and far more honest
// than restating the rules in this script, which would prove only that the
// script agrees with itself.
const moduleCache = new Map();
function loadModule(relative) {
  if (moduleCache.has(relative)) return moduleCache.get(relative);
  const file = path.join(root, 'src', 'lib', `${relative}.ts`);
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const runtime = { exports: {} };
  moduleCache.set(relative, runtime.exports);
  const require = (specifier) => loadModule(specifier.replace(/^\.\//, ''));
  vm.runInNewContext(code, { module: runtime, exports: runtime.exports, require, console }, { filename: file });
  moduleCache.set(relative, runtime.exports);
  return runtime.exports;
}

const { isEquivalentAcrossCountries, buildAlternates, COUNTRY_LOCALES } = loadModule('hreflang');
const COUNTRIES_LIVE = loadModule('exams').COUNTRIES;

// --- PART A: the rules ------------------------------------------------------
// Each row is a path with its country segment removed, and whether it names the
// same content for a different audience. The false rows matter more than the
// true ones: every one of them is a page that would be wrong to pair.
const EQUIVALENCE_CASES = [
  ['', true, 'homepage'],
  ['/exams', true, 'the directory'],
  ['/exams/medical', true, 'a directory category'],
  ['/practice', true, 'topic practice index'],
  ['/practice/percentage', true, 'a topic: a percentage question is a percentage question'],
  ['/logical-reasoning', true, 'the reasoning hub'],
  ['/logical-reasoning/test/easy-set-1', true, 'a reasoning set'],
  ['/blog', true, 'blog index'],
  ['/blog/how-to-build-an-error-log', true, 'a blog post'],
  ['/about', true, 'static page'],
  ['/privacy', true, 'static page'],
  ['/terms', true, 'static page'],
  ['/results', true, 'the results tool'],
  ['/exam-updates', false, 'one country\'s notifications'],
  ['/exam-updates/some-notice', false, 'one country\'s notifications'],
  ['/ssc-cgl', false, 'an Indian exam has no foreign equivalent'],
  ['/ssc-cgl/mock-test', false, 'an Indian exam has no foreign equivalent'],
  ['/ssc-cgl/test/tier-1-full-mock-1', false, 'an Indian exam has no foreign equivalent'],
  ['/ibps-po/exam-pattern', false, 'an Indian exam has no foreign equivalent'],
  ['/sat/mock-test', true, 'the SAT is the same exam everywhere'],
  ['/ielts/mock-test', true, 'IELTS is the same exam everywhere'],
  ['/gre', true, 'the GRE is the same exam everywhere'],
  ['/not-a-real-section', false, 'unknown paths default to not equivalent'],
];

for (const [rest, expected, why] of EQUIVALENCE_CASES) {
  const actual = isEquivalentAcrossCountries(rest);
  if (actual !== expected) {
    errors.push(
      `rule: "${rest || '/'}" should be ${expected ? 'equivalent' : 'NOT equivalent'} across countries (${why}), got ${actual}`,
    );
  }
}

// The output shape, proved against a country that does not exist yet.
const SIMULATED = ['in', 'ng'];
const sample = buildAlternates('/in/practice/percentage', SIMULATED);
if (!sample) {
  errors.push('shape: buildAlternates returned nothing for an equivalent path with two countries');
} else {
  const expectedKeys = ['en-IN', 'en-NG', 'x-default'];
  for (const key of expectedKeys) {
    if (!(key in sample)) errors.push(`shape: missing "${key}" in the two-country hreflang set`);
  }
  if (sample['en-IN'] !== 'https://takemocktest.com/in/practice/percentage') {
    errors.push(`shape: en-IN points at ${sample['en-IN']}`);
  }
  if (sample['en-NG'] !== 'https://takemocktest.com/ng/practice/percentage') {
    errors.push(`shape: en-NG points at ${sample['en-NG']}`);
  }
  if (sample['x-default'] !== sample['en-IN']) {
    errors.push('shape: x-default should resolve to the same URL as the default country');
  }
  for (const [key, url] of Object.entries(sample)) {
    if (!url.startsWith('https://')) errors.push(`shape: "${key}" is not an absolute URL (${url})`);
  }
}

// Section coverage: a country that does not publish a section must never appear
// as its alternate, or the tag points at a 404 and Google discards the set.
// Blog is the live example: India publishes it, Nigeria does not.
const { countriesPublishing } = loadModule('exam-countries');
const practiceCountries = countriesPublishing('practice');
const blogCountries = countriesPublishing('blog');

const practiceTags = buildAlternates('/in/practice/percentage');
if (practiceCountries.length > 1 && !practiceTags) {
  errors.push('coverage: topic practice is published by more than one country but got no hreflang');
}
if (practiceTags) {
  for (const country of COUNTRIES_LIVE) {
    const shouldBeListed = practiceCountries.includes(country);
    const isListed = Object.values(practiceTags).some((url) => url.includes(`/${country}/practice/`));
    if (shouldBeListed !== isListed) {
      errors.push(`coverage: "${country}" ${shouldBeListed ? 'should' : 'should not'} appear in the topic-practice hreflang set`);
    }
  }
}
if (blogCountries.length < 2 && buildAlternates('/in/blog/how-to-build-an-error-log')) {
  errors.push('coverage: a blog post got hreflang while only one country publishes the blog');
}

// A non-equivalent path must produce nothing even with several countries live.
if (buildAlternates('/in/ssc-cgl/mock-test', SIMULATED)) {
  errors.push('shape: an India-only exam page was given hreflang for a two-country site');
}
// And one country means nothing to declare.
if (buildAlternates('/in/practice/percentage', ['in'])) {
  errors.push('shape: a single-country site emitted hreflang, which is noise on every page');
}

// Every country that can appear in a URL needs a locale, or its pages would be
// silently dropped from the set rather than failing.
const { COUNTRIES } = loadModule('exams');
for (const country of COUNTRIES) {
  if (!COUNTRY_LOCALES[country]) errors.push(`locale: COUNTRIES includes "${country}" with no entry in COUNTRY_LOCALES`);
}

// --- PART B: what actually shipped -----------------------------------------
const outDir = path.join(root, 'out');
let pagesWithTags = 0;
let tagCount = 0;

if (fs.existsSync(outDir)) {
  const files = [];
  (function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith('.html')) files.push(full);
    }
  })(outDir);

  const resolves = (url) => {
    const rel = url.replace('https://takemocktest.com', '').split('#')[0].replace(/\/$/, '').replace(/^\//, '');
    if (rel === '') return true;
    return (
      fs.existsSync(path.join(outDir, `${rel}.html`)) ||
      fs.existsSync(path.join(outDir, rel, 'index.html'))
    );
  };

  for (const file of files) {
    const rel = `/${path.relative(outDir, file).replace(/\\/g, '/').replace(/\.html$/, '')}`;
    const html = fs.readFileSync(file, 'utf8');
    // Case-insensitive on purpose: Next renders the attribute as `hrefLang`,
    // and a lowercase-only pattern silently matched nothing here, so this audit
    // reported "no hreflang tags, which is correct" while tags were shipping
    // unchecked. A green that means "I found nothing" has to be impossible to
    // confuse with a green that means "I checked and it was fine".
    const tags = [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/gi)].map((m) => ({
      lang: m[1],
      href: m[2],
    }));
    if (tags.length === 0) continue;
    pagesWithTags += 1;
    tagCount += tags.length;

    const split = /^\/([^/]+)(\/.*)?$/.exec(rel);
    const rest = split ? split[2] ?? '' : '';
    if (!isEquivalentAcrossCountries(rest)) {
      errors.push(`${rel}: carries hreflang but is not equivalent across countries`);
      continue;
    }
    if (!tags.some((tag) => tag.lang === 'x-default')) errors.push(`${rel}: hreflang set has no x-default`);
    const selfUrl = `https://takemocktest.com${rel}`;
    if (!tags.some((tag) => tag.href === selfUrl)) {
      errors.push(`${rel}: hreflang set does not include the page itself`);
    }
    for (const tag of tags) {
      if (!tag.href.startsWith('https://')) errors.push(`${rel}: hreflang "${tag.lang}" is not absolute (${tag.href})`);
      else if (!resolves(tag.href)) errors.push(`${rel}: hreflang "${tag.lang}" points at a page that does not exist (${tag.href})`);
    }
    // Reciprocity: every target must point back at this page.
    for (const tag of tags) {
      if (tag.lang === 'x-default' || tag.href === selfUrl) continue;
      const targetRel = tag.href.replace('https://takemocktest.com', '');
      const targetFile = fs.existsSync(path.join(outDir, `${targetRel.replace(/^\//, '')}.html`))
        ? path.join(outDir, `${targetRel.replace(/^\//, '')}.html`)
        : path.join(outDir, targetRel.replace(/^\//, ''), 'index.html');
      if (!fs.existsSync(targetFile)) continue; // already reported above
      if (!fs.readFileSync(targetFile, 'utf8').includes(`href="${selfUrl}"`)) {
        errors.push(`${rel}: hreflang to ${targetRel} is not reciprocated, so Google ignores the whole set`);
      }
    }
  }
}

if (errors.length > 0) {
  console.error(`hreflang audit FAILED: ${errors.length} problem${errors.length === 1 ? '' : 's'}:`);
  for (const error of errors.slice(0, 30)) console.error(`  - ${error}`);
  if (errors.length > 30) console.error(`  ... and ${errors.length - 30} more`);
  process.exit(1);
}

console.log('hreflang audit passed:');
console.log(`  rules: ${EQUIVALENCE_CASES.length} equivalence cases, plus the two-country output shape proved against a simulated "ng".`);
if (!fs.existsSync(outDir)) {
  console.log('  output: out/ not found, so only the rules were checked. Run after a build for the full check.');
} else if (pagesWithTags === 0) {
  console.log(`  output: no hreflang tags in the export, which is correct while ${COUNTRIES.length === 1 ? 'one country is' : 'countries are'} live.`);
} else {
  console.log(`  output: ${tagCount} tags across ${pagesWithTags} pages, all reciprocal and resolving.`);
}
