// Reusable site-quality gate: catches the class of issue that slipped through
// last time (a 2MB PNG duplicate sitting unused next to its real .webp).
// Checks public/ for (a) files never referenced anywhere in src/, and
// (b) files that are byte-for-byte duplicates of another file. Exits
// non-zero on any finding so it can gate a deploy the same way qa:questions does.

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const srcDir = path.join(root, 'src');

const IGNORED = new Set(['manifest.json', 'robots.txt', 'sitemap.xml', 'llms.txt']);

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}

const publicFiles = walk(publicDir).filter((f) => !IGNORED.has(path.basename(f)));
const srcFiles = walk(srcDir).filter((f) => /\.(tsx?|css|mjs|json)$/.test(f));
const srcText = srcFiles.map((f) => fs.readFileSync(f, 'utf8')).join('\n');

const errors = [];

// (a) orphaned files — name never appears in any source file
for (const file of publicFiles) {
  const name = path.basename(file);
  if (!srcText.includes(name)) {
    errors.push(`orphaned: ${path.relative(root, file)} — not referenced anywhere in src/`);
  }
}

// (b) duplicate content — same bytes as another public/ file
const byHash = new Map();
for (const file of publicFiles) {
  const hash = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
  const existing = byHash.get(hash);
  if (existing) {
    errors.push(`duplicate: ${path.relative(root, file)} is byte-identical to ${path.relative(root, existing)}`);
  } else {
    byHash.set(hash, file);
  }
}

if (errors.length > 0) {
  console.error(`Site asset audit failed (${errors.length} issue${errors.length === 1 ? '' : 's'}):`);
  for (const error of errors) console.error(`  - ${error}`);
  process.exit(1);
}

console.log(`Site asset audit passed — ${publicFiles.length} public/ files, no orphans or duplicates.`);
