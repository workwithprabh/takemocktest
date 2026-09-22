import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';

const sourcesPath = 'data/exam-update-sources.json';
const snapshotsPath = 'data/exam-update-snapshots.json';
const args = new Set(process.argv.slice(2));
const accept = args.has('--accept');
const notify = args.has('--notify');
const selfTest = args.has('--self-test');
const selectedSource = [...args].find((arg) => arg.startsWith('--source='))?.slice(9);

const ignoredTitles = new Set([
  'about', 'about us', 'contact', 'contact us', 'disclaimer', 'feedback', 'help',
  'home', 'privacy policy', 'read more', 'sitemap', 'skip to main content',
]);

function decodeHtml(value) {
  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)))
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>');
}

function domainKey(hostname) {
  const parts = hostname.toLowerCase().replace(/^www\./, '').split('.');
  const indiaSecondLevel = ['ac.in', 'co.in', 'gov.in', 'nic.in', 'org.in'].some((suffix) => hostname.endsWith(suffix));
  return parts.slice(indiaSecondLevel ? -3 : -2).join('.');
}

function normalizeUrl(href, sourceUrl) {
  try {
    const url = new URL(decodeHtml(href), sourceUrl);
    if (!['http:', 'https:'].includes(url.protocol)) return null;
    if (domainKey(url.hostname) !== domainKey(new URL(sourceUrl).hostname)) return null;
    url.hash = '';
    for (const key of [...url.searchParams.keys()]) {
      if (/^(utm_|fbclid$|gclid$)/i.test(key)) url.searchParams.delete(key);
    }
    url.searchParams.sort();
    return url.toString();
  } catch {
    return null;
  }
}

function extractLinks(html, sourceUrl) {
  const links = new Map();
  const anchorPattern = /<a\b[^>]*\bhref\s*=\s*(?:"([^"]*)"|'([^']*)')[^>]*>([\s\S]*?)<\/a>/gi;
  for (const match of html.matchAll(anchorPattern)) {
    const url = normalizeUrl(match[1] ?? match[2], sourceUrl);
    const title = decodeHtml(match[3].replace(/<script\b[\s\S]*?<\/script>/gi, '').replace(/<style\b[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' '))
      .replace(/\s+/g, ' ')
      .trim();
    if (!url || title.length < 3 || ignoredTitles.has(title.toLowerCase())) continue;
    links.set(`${title}\n${url}`, { title, url });
  }
  return [...links.values()].sort((a, b) => a.url.localeCompare(b.url) || a.title.localeCompare(b.title));
}

function fingerprint(links) {
  return crypto.createHash('sha256').update(JSON.stringify(links)).digest('hex');
}

function compareLinks(before = [], after = []) {
  const oldKeys = new Set(before.map((link) => `${link.title}\n${link.url}`));
  const newKeys = new Set(after.map((link) => `${link.title}\n${link.url}`));
  return {
    added: after.filter((link) => !oldKeys.has(`${link.title}\n${link.url}`)),
    removed: before.filter((link) => !newKeys.has(`${link.title}\n${link.url}`)),
  };
}

async function fetchSource(source) {
  const response = await fetch(source.url, {
    headers: {
      Accept: 'text/html,application/xhtml+xml',
      'User-Agent': 'Mozilla/5.0 (compatible; TakeMockTestMonitor/1.0)',
    },
    redirect: 'follow',
    signal: AbortSignal.timeout(25_000),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  const html = await response.text();
  if (html.length > 5_000_000) throw new Error('response exceeded 5 MB');
  const links = extractLinks(html, response.url || source.url);
  if (links.length < source.minimumLinks) throw new Error(`only ${links.length} relevant links found; expected at least ${source.minimumLinks}`);
  return { fingerprint: fingerprint(links), links };
}

function changeMarkdown(source, change, checkedAt) {
  const render = (links, limit) => links.slice(0, limit).map((link) => `- [${link.title}](${link.url})`).join('\n') || '- None';
  return `Automated detection only — **do not publish until the official source is reviewed.**

- Official source: [${source.name}](${source.url})
- Authority: ${source.authority}
- Checked: ${checkedAt}

### Added or changed links
${render(change.added, 20)}

### Removed links
${render(change.removed, 10)}

### Review checklist
- [ ] Open the official source and verify the notice, date and affected exam.
- [ ] Add only confirmed information to \`src/lib/updates.ts\`.
- [ ] Run \`npm run qa:updates\`.
- [ ] Accept this source's new baseline with \`npm run monitor:updates:accept -- --source=${source.id}\` and commit it with the reviewed update.
- [ ] Close this issue after the reviewed change reaches \`main\`.

<!-- exam-update-source:${source.id} -->
<!-- exam-update-fingerprint:${change.fingerprint} -->`;
}

async function githubRequest(path, options = {}) {
  const token = process.env.GITHUB_TOKEN;
  const repository = process.env.GITHUB_REPOSITORY;
  if (!token || !repository) throw new Error('GITHUB_TOKEN and GITHUB_REPOSITORY are required with --notify');
  const response = await fetch(`https://api.github.com/repos/${repository}${path}`, {
    ...options,
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${token}`,
      'X-GitHub-Api-Version': '2022-11-28',
      ...options.headers,
    },
  });
  if (!response.ok) throw new Error(`GitHub API ${response.status}: ${await response.text()}`);
  return response.status === 204 ? null : response.json();
}

async function notifyChanges(changes, checkedAt) {
  try {
    await githubRequest('/labels', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'exam-update-monitor', color: '1B2340', description: 'Official exam source changed; human review required' }),
    });
  } catch (error) {
    if (!String(error).includes('GitHub API 422')) throw error;
  }

  const issues = [];
  for (let page = 1; ; page += 1) {
    const batch = await githubRequest(`/issues?state=all&labels=exam-update-monitor&per_page=100&page=${page}`);
    issues.push(...batch);
    if (batch.length < 100) break;
  }

  for (const change of changes) {
    const sourceMarker = `<!-- exam-update-source:${change.source.id} -->`;
    const fingerprintMarker = `<!-- exam-update-fingerprint:${change.fingerprint} -->`;
    if (issues.some((issue) => issue.body?.includes(fingerprintMarker))) {
      console.log(`Already reported: ${change.source.name}`);
      continue;
    }
    const body = changeMarkdown(change.source, change, checkedAt);
    const openIssue = issues.find((issue) => issue.state === 'open' && issue.body?.includes(sourceMarker));
    if (openIssue) {
      await githubRequest(`/issues/${openIssue.number}`, {
        method: 'PATCH', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ body: `${openIssue.body}\n${fingerprintMarker}` }),
      });
      await githubRequest(`/issues/${openIssue.number}/comments`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ body }),
      });
      console.log(`Updated issue #${openIssue.number}: ${change.source.name}`);
    } else {
      const issue = await githubRequest('/issues', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: `[Exam update] ${change.source.name} changed`, body, labels: ['exam-update-monitor'] }),
      });
      issues.push(issue);
      console.log(`Created issue #${issue.number}: ${change.source.name}`);
    }
  }
}

function runSelfTest() {
  const html = '<a href="/notice.pdf?utm_source=test"> New&nbsp;notice </a><a href="/">Home</a><a href="https://example.net/offsite">Offsite</a>';
  const links = extractLinks(html, 'https://example.gov.in/updates');
  assert.deepEqual(links, [{ title: 'New notice', url: 'https://example.gov.in/notice.pdf' }]);
  assert.equal(fingerprint(links).length, 64);
  assert.deepEqual(compareLinks([], links).added, links);
  console.log('Exam update monitor self-test passed.');
}

if (selfTest) {
  runSelfTest();
  process.exit(0);
}

const config = JSON.parse(fs.readFileSync(sourcesPath, 'utf8'));
const snapshots = JSON.parse(fs.readFileSync(snapshotsPath, 'utf8'));
assert.equal(config.schemaVersion, 1);
assert.equal(snapshots.schemaVersion, 1);
const ids = new Set();
for (const source of config.sources) {
  assert(/^[a-z0-9-]+$/.test(source.id) && !ids.has(source.id), `Invalid or duplicate source id: ${source.id}`);
  assert.equal(new URL(source.url).protocol, 'https:', `Source must use HTTPS: ${source.id}`);
  ids.add(source.id);
}

const sources = selectedSource
  ? config.sources.filter((source) => source.id === selectedSource)
  : config.sources.filter((source) => source.enabled !== false);
assert(sources.length, `Unknown source: ${selectedSource}`);
const checkedAt = new Date().toISOString();
const results = await Promise.allSettled(sources.map(async (source) => ({ source, current: await fetchSource(source) })));
const failures = results.flatMap((result, index) => result.status === 'rejected' ? [{ source: sources[index], error: result.reason }] : []);
for (const failure of failures) {
  const detail = failure.error.cause?.code ? `${failure.error.message} (${failure.error.cause.code})` : failure.error.message;
  console.log(`::warning title=Official source unavailable::${failure.source.name}: ${detail}`);
}

const successful = results.flatMap((result) => result.status === 'fulfilled' ? [result.value] : []);
if (accept) {
  for (const { source, current } of successful) snapshots.sources[source.id] = current;
  snapshots.capturedAt = checkedAt;
  fs.writeFileSync(snapshotsPath, `${JSON.stringify(snapshots, null, 2)}\n`);
  console.log(`Accepted ${successful.length} source baseline(s); ${failures.length} unavailable.`);
  if (!successful.length) process.exitCode = 1;
} else {
  const changes = successful.flatMap(({ source, current }) => {
    const previous = snapshots.sources[source.id];
    if (previous?.fingerprint === current.fingerprint) return [];
    return [{ source, fingerprint: current.fingerprint, ...compareLinks(previous?.links, current.links) }];
  });
  console.log(`Checked ${successful.length}/${sources.length} official sources; changes: ${changes.length}; unavailable: ${failures.length}.`);
  for (const change of changes) console.log(`  - ${change.source.name}: +${change.added.length} / -${change.removed.length}`);
  if (notify && changes.length) await notifyChanges(changes, checkedAt);
  if (!successful.length) process.exitCode = 1;
}
