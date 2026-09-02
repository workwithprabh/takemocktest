// Submits page URLs to IndexNow (https://www.indexnow.org/) so participating
// search engines (Bing, Yandex, Naver, Seznam — not Google, which does not
// support the protocol) can pick up new/changed pages faster than a routine
// crawl. Google Search still relies entirely on sitemap.xml + crawling.
//
// Usage:
//   node scripts/submit-indexnow.mjs --all                 # every URL in out/sitemap.xml
//   node scripts/submit-indexnow.mjs <url> <url> ...        # specific URLs only
//   node scripts/submit-indexnow.mjs --urls-file path.txt   # newline-separated URLs
//
// Requires a production build to exist at out/ when using --all (for
// out/sitemap.xml) and the key file to exist at out/<INDEXNOW_KEY>.txt (part
// of the committed public/ directory, so it ships with every export).
//
// The IndexNow key is not a secret — the protocol works by publishing the key
// file at the site root so any endpoint can verify the submitter controls the
// domain. Hardcoding it here (mirroring the public/ key file) is intentional.

import fs from 'node:fs';
import path from 'node:path';

const HOST = 'takemocktest.com';
const KEY = '5d3651bc7c75f66a65365b1071aa9686';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

function readSitemapUrls() {
  const sitemapPath = path.join(process.cwd(), 'out', 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error(`No sitemap found at ${sitemapPath} — run "npm run build" first, or pass explicit URLs.`);
    process.exit(1);
  }
  const xml = fs.readFileSync(sitemapPath, 'utf8');
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
  if (urls.length === 0) {
    console.error(`Sitemap at ${sitemapPath} contained no <loc> entries.`);
    process.exit(1);
  }
  return urls;
}

function parseArgs(argv) {
  if (argv.includes('--all')) return readSitemapUrls();
  const fileFlagIndex = argv.indexOf('--urls-file');
  if (fileFlagIndex !== -1) {
    const filePath = argv[fileFlagIndex + 1];
    if (!filePath) {
      console.error('--urls-file requires a path argument.');
      process.exit(1);
    }
    return fs
      .readFileSync(filePath, 'utf8')
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean);
  }
  const urls = argv.filter((arg) => !arg.startsWith('--'));
  if (urls.length === 0) {
    console.error('Usage: node scripts/submit-indexnow.mjs --all | <url> [url...] | --urls-file <path>');
    process.exit(1);
  }
  return urls;
}

// IndexNow accepts up to 10,000 URLs per request; chunk defensively in case a
// future full-sitemap submission grows past that.
function chunk(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) chunks.push(array.slice(i, i + size));
  return chunks;
}

async function submit(urls) {
  for (const url of urls) {
    if (!url.startsWith(`https://${HOST}`)) {
      console.error(`Refusing to submit off-host URL: ${url}`);
      process.exit(1);
    }
  }

  const batches = chunk(urls, 10000);
  for (const [index, batch] of batches.entries()) {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList: batch }),
    });
    // IndexNow returns 200 or 202 on success; both mean "accepted".
    if (response.status !== 200 && response.status !== 202) {
      const body = await response.text().catch(() => '');
      console.error(`IndexNow submission failed (batch ${index + 1}/${batches.length}): HTTP ${response.status} ${body}`);
      process.exit(1);
    }
    console.log(`Submitted batch ${index + 1}/${batches.length} (${batch.length} URLs) — HTTP ${response.status}`);
  }
  console.log(`Done. Submitted ${urls.length} URL(s) to IndexNow.`);
}

const urls = parseArgs(process.argv.slice(2));
await submit(urls);
