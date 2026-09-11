#!/usr/bin/env python3
"""
Query live Search Console data for takemocktest.com via a Google Cloud
service account — no browser login, no manual CSV export. Requires the
`google-auth` and `requests` packages (pip install google-auth requests).

The credential is never read from a file inside this repo. Supply it one of
two ways:
  GSC_SERVICE_ACCOUNT_KEY_FILE=/path/to/key.json   (a local file, outside the repo)
  GSC_SERVICE_ACCOUNT_KEY_JSON='{"type": "service_account", ...}'  (raw JSON,
    e.g. from a GitHub Actions secret)

Usage:
  python3 scripts/gsc-query.py totals --days 90
  python3 scripts/gsc-query.py queries --days 90 --limit 50
  python3 scripts/gsc-query.py pages --days 28 --limit 50
  python3 scripts/gsc-query.py countries --days 90 --limit 30
  python3 scripts/gsc-query.py by-page --page /in/ssc-cgl/test/tier-1-full-mock-1 --days 90
  python3 scripts/gsc-query.py report --days 90 > SEARCH-CONSOLE-REPORT.md

The property is a Search Console *domain* property (sc-domain:takemocktest.com),
which covers http/https and all subdomains — pass --page as a path only
(starting with /) or a full https://takemocktest.com/... URL; either works.
"""

import argparse
import json
import os
import sys
import time

import requests
from datetime import date, timedelta
from pathlib import Path

SITE = 'sc-domain:takemocktest.com'
SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly']
API_BASE = f'https://searchconsole.googleapis.com/webmasters/v3/sites/{SITE}'
# URL Inspection lives on the v1 surface rather than webmasters/v3.
INSPECT_URL = 'https://searchconsole.googleapis.com/v1/urlInspection/index:inspect'


def load_session():
    from google.oauth2 import service_account
    from google.auth.transport.requests import AuthorizedSession

    key_file = os.environ.get('GSC_SERVICE_ACCOUNT_KEY_FILE')
    key_json = os.environ.get('GSC_SERVICE_ACCOUNT_KEY_JSON')
    if key_file:
        creds = service_account.Credentials.from_service_account_file(key_file, scopes=SCOPES)
    elif key_json:
        creds = service_account.Credentials.from_service_account_info(json.loads(key_json), scopes=SCOPES)
    else:
        print(
            'No credential found. Set GSC_SERVICE_ACCOUNT_KEY_FILE (path to the '
            'downloaded service-account JSON key, kept outside this repo) or '
            'GSC_SERVICE_ACCOUNT_KEY_JSON (the key\'s raw JSON content).',
            file=sys.stderr,
        )
        sys.exit(1)
    return AuthorizedSession(creds)


def query(session, start, end, dimensions, row_limit=1000, filters=None):
    body = {'startDate': start, 'endDate': end, 'dimensions': dimensions, 'rowLimit': row_limit}
    if filters:
        body['dimensionFilterGroups'] = [{'filters': filters}]
    resp = session.post(f'{API_BASE}/searchAnalytics/query', json=body)
    resp.raise_for_status()
    return resp.json().get('rows', [])


def date_range(days):
    end = date.today()
    start = end - timedelta(days=days)
    return start.isoformat(), end.isoformat()


# Search Console caps a single response at 25,000 rows and pages the rest behind
# startRow. `query` above asks for one page and is right for the top-N reports;
# a per-URL panel has to take everything or it silently truncates the long tail,
# which is exactly the part an experiment on 783 low-traffic pages lives in.
def query_all(session, start, end, dimensions, filters=None, page_size=25000):
    rows = []
    start_row = 0
    while True:
        body = {
            'startDate': start, 'endDate': end, 'dimensions': dimensions,
            'rowLimit': page_size, 'startRow': start_row,
        }
        if filters:
            body['dimensionFilterGroups'] = [{'filters': filters}]
        resp = session.post(f'{API_BASE}/searchAnalytics/query', json=body)
        resp.raise_for_status()
        batch = resp.json().get('rows', [])
        rows.extend(batch)
        if len(batch) < page_size:
            return rows
        start_row += page_size


def panel_records(rows):
    """Group date+page API rows into one record per date.

    The panel is stored a file per date rather than one growing file because
    Search Console revises recent days for two to three days after the fact.
    Re-fetching a trailing window then rewrites only the dates that moved, and
    the correction shows up as an ordinary diff instead of being buried in an
    append-only log.
    """
    by_date = {}
    for row in rows:
        day, url = row['keys'][0], row['keys'][1]
        page = path_of(url)
        bucket = by_date.setdefault(day, {})
        entry = bucket.setdefault(page, {'page': page, 'clicks': 0, 'impressions': 0, 'position_weight': 0.0})
        entry['clicks'] += row['clicks']
        entry['impressions'] += row['impressions']
        # Weighted, for the same reason summarise() weights: the apex and www
        # hosts arrive as separate rows for one page and a plain mean of the two
        # positions would flatter whichever host had almost no impressions.
        entry['position_weight'] += row['position'] * row['impressions']
    out = {}
    for day, pages in by_date.items():
        records = []
        for entry in pages.values():
            impressions = entry['impressions']
            records.append({
                'page': entry['page'],
                'clicks': entry['clicks'],
                'impressions': impressions,
                'position': round(entry['position_weight'] / impressions, 2) if impressions else 0.0,
            })
        records.sort(key=lambda r: (-r['impressions'], r['page']))
        out[day] = records
    return out


# --- pure aggregation helpers -------------------------------------------------
# Separated from the fetching on purpose. Nothing in this file can be exercised
# against the live API from the sandbox that writes most of this repo (the
# service-account key is deliberately not in git), so the part that can hold a
# bug is kept free of I/O and covered by `gsc-query.py selftest`, which needs no
# credentials. Same split as the two halves of scripts/audit-hreflang.mjs.

def path_of(url):
    """The path part of a result URL.

    Search Console reports the apex and www hosts as different URLs for the same
    page, so bucketing on the raw URL would silently split a section's numbers
    in two. This normalises both to the path.
    """
    for scheme in ('https://', 'http://'):
        if url.startswith(scheme):
            url = url[len(scheme):]
            break
    slash = url.find('/')
    return url[slash:] if slash != -1 else '/'


def summarise_coverage(results):
    """Cross-tabulate inspection verdicts by page type.

    The headline number is per type, not site-wide: "60% of pages are indexed"
    hides the case that matters, where one page type is fully indexed and
    another is entirely absent.
    """
    by_type = {}
    for row in results:
        state = row.get('coverageState') or (f"error {row['error']}" if 'error' in row else 'unknown')
        bucket = by_type.setdefault(row.get('type', 'unknown'), {})
        bucket[state] = bucket.get(state, 0) + 1

    lines = []
    for page_type in sorted(by_type):
        states = by_type[page_type]
        total = sum(states.values())
        parts = ', '.join(f'{count} {state}' for state, count in sorted(states.items(), key=lambda kv: -kv[1]))
        lines.append(f'  {page_type:<16} {total:>3} sampled: {parts}')
    return '\n'.join(lines)


def summarise(rows):
    """Totals for a set of rows.

    Average position is impression-weighted. A plain mean is wrong here and
    wrong in a flattering direction: one impression at position 2 alongside a
    hundred at position 60 averages to 31 unweighted and 59.4 weighted, and 31
    would read as though the section were nearly on page three when almost
    nobody who searched saw it there.
    """
    clicks = sum(r['clicks'] for r in rows)
    impressions = sum(r['impressions'] for r in rows)
    position = sum(r['position'] * r['impressions'] for r in rows) / impressions if impressions else 0.0
    return {
        'clicks': clicks,
        'impressions': impressions,
        'ctr': clicks / impressions if impressions else 0.0,
        'position': position,
        'pages': len(rows),
    }


def bucket_by_prefix(rows, prefixes):
    """Group page rows by URL path prefix.

    Longest prefix wins, so /in/practice takes its own pages rather than losing
    them to /in. Anything matching no prefix lands in 'other', which is there to
    make a mistake in the prefix list visible instead of silently dropping rows.
    """
    ordered = sorted(prefixes, key=len, reverse=True)
    buckets = {prefix: [] for prefix in prefixes}
    buckets['other'] = []
    for row in rows:
        path = path_of(row['keys'][0])
        for prefix in ordered:
            if path == prefix or path.startswith(prefix + '/'):
                buckets[prefix].append(row)
                break
        else:
            buckets['other'].append(row)
    return buckets


def cmd_selftest(args):
    """Exercises the aggregation above with synthetic rows. No credentials, no
    network: this is the part that would otherwise ship unverified."""
    failures = []

    def check(label, actual, expected):
        if actual != expected:
            failures.append(f'{label}: expected {expected}, got {actual}')

    check('path_of apex', path_of('https://takemocktest.com/in/exams'), '/in/exams')
    check('path_of www', path_of('https://www.takemocktest.com/in/exams'), '/in/exams')
    check('path_of http', path_of('http://takemocktest.com/ng'), '/ng')
    check('path_of root', path_of('https://takemocktest.com'), '/')

    row = lambda page, clicks, impressions, position: {
        'keys': [page], 'clicks': clicks, 'impressions': impressions, 'ctr': 0.0, 'position': position,
    }

    # Impression-weighted position, the case a plain mean gets wrong.
    weighted = summarise([row('/a', 0, 1, 2.0), row('/b', 0, 100, 60.0)])
    check('summarise impressions', weighted['impressions'], 101)
    check('summarise weighted position', round(weighted['position'], 2), 59.43)
    check('summarise empty', summarise([])['position'], 0.0)
    check('summarise ctr', summarise([row('/a', 5, 100, 1.0)])['ctr'], 0.05)

    rows = [
        row('https://takemocktest.com/in/practice/percentage', 1, 10, 5.0),
        row('https://www.takemocktest.com/in/practice', 0, 4, 8.0),
        row('https://takemocktest.com/in/ssc-cgl/mock-test', 0, 6, 20.0),
        row('https://takemocktest.com/ng/practice/percentage', 0, 2, 40.0),
        row('https://takemocktest.com/ng', 0, 1, 50.0),
        row('https://takemocktest.com/robots.txt', 0, 3, 90.0),
    ]
    buckets = bucket_by_prefix(rows, ['/in', '/ng', '/in/practice', '/ng/practice'])
    check('bucket /in/practice', summarise(buckets['/in/practice'])['impressions'], 14)
    check('bucket /in excludes practice', summarise(buckets['/in'])['impressions'], 6)
    check('bucket /ng/practice', summarise(buckets['/ng/practice'])['impressions'], 2)
    check('bucket /ng excludes practice', summarise(buckets['/ng'])['impressions'], 1)
    check('bucket other', summarise(buckets['other'])['impressions'], 3)
    # The www row must land with its apex twin, not in a bucket of its own.
    check('bucket merges www', buckets['/in/practice'][1]['impressions'], 4)

    # Panel grouping: two hosts, two dates, one page. The apex and www rows for
    # 2026-09-08 must merge into a single record with an impression-weighted
    # position, and the two dates must not bleed into each other.
    prow = lambda day, page, clicks, impressions, position: {
        'keys': [day, page], 'clicks': clicks, 'impressions': impressions, 'ctr': 0.0, 'position': position,
    }
    panel = panel_records([
        prow('2026-09-08', 'https://takemocktest.com/in/ssc-cgl/test/a', 0, 1, 2.0),
        prow('2026-09-08', 'https://www.takemocktest.com/in/ssc-cgl/test/a', 0, 100, 60.0),
        prow('2026-09-08', 'https://takemocktest.com/in/ssc-cgl/test/b', 1, 4, 8.0),
        prow('2026-09-09', 'https://takemocktest.com/in/ssc-cgl/test/a', 0, 7, 30.0),
    ])
    check('panel dates', sorted(panel), ['2026-09-08', '2026-09-09'])
    check('panel merges hosts', len(panel['2026-09-08']), 2)
    check('panel impressions', panel['2026-09-08'][0]['impressions'], 101)
    check('panel weighted position', panel['2026-09-08'][0]['position'], 59.43)
    check('panel orders by impressions', panel['2026-09-08'][1]['page'], '/in/ssc-cgl/test/b')
    check('panel keeps dates apart', panel['2026-09-09'][0]['impressions'], 7)
    check('panel empty', panel_records([]), {})

    if failures:
        print(f'gsc-query selftest FAILED ({len(failures)}):', file=sys.stderr)
        for failure in failures:
            print(f'  - {failure}', file=sys.stderr)
        sys.exit(1)
    print('gsc-query selftest passed: path normalisation, impression-weighted position, prefix bucketing, and panel grouping.')


def cmd_totals(session, args):
    start, end = date_range(args.days)
    rows = query(session, start, end, [])
    if not rows:
        print(f'No search data for the last {args.days} days.')
        return
    r = rows[0]
    print(f'Last {args.days} days ({start} to {end}):')
    print(f"  clicks       {r['clicks']}")
    print(f"  impressions  {r['impressions']}")
    print(f"  CTR          {r['ctr']:.2%}")
    print(f"  avg position {r['position']:.1f}")


def cmd_queries(session, args):
    start, end = date_range(args.days)
    rows = query(session, start, end, ['query'], row_limit=args.limit)
    rows.sort(key=lambda r: -r['impressions'])
    print(f'{len(rows)} distinct queries, last {args.days} days:')
    for r in rows[: args.limit]:
        print(f"  clicks={r['clicks']:<4} impressions={r['impressions']:<5} pos={r['position']:>5.1f}  \"{r['keys'][0]}\"")


def cmd_pages(session, args):
    start, end = date_range(args.days)
    rows = query(session, start, end, ['page'], row_limit=args.limit)
    rows.sort(key=lambda r: -r['impressions'])
    print(f'{len(rows)} distinct pages, last {args.days} days:')
    for r in rows[: args.limit]:
        print(f"  clicks={r['clicks']:<4} impressions={r['impressions']:<5} pos={r['position']:>5.1f}  {r['keys'][0]}")


def cmd_by_page(session, args):
    page = args.page
    if page.startswith('/'):
        page = f'https://takemocktest.com{page}'
    start, end = date_range(args.days)
    filters = [{'dimension': 'page', 'operator': 'equals', 'expression': page}]
    rows = query(session, start, end, ['query'], row_limit=args.limit, filters=filters)
    rows.sort(key=lambda r: -r['impressions'])
    print(f'{len(rows)} queries landing on {page}, last {args.days} days:')
    for r in rows[: args.limit]:
        print(f"  clicks={r['clicks']:<4} impressions={r['impressions']:<5} pos={r['position']:>5.1f}  \"{r['keys'][0]}\"")


def cmd_panel(session, args):
    """Write one file per date of per-URL clicks, impressions and position.

    This is the measurement substrate for a treatment-versus-holdout test on the
    sectional surface. The weekly report is a top-50 prose snapshot and cannot
    support one: a page that moves from zero impressions to four never appears
    in a top-50 list, and that movement is the entire signal at this traffic
    level.

    Default window is 5 days so each run also re-states the days Search Console
    was still revising.
    """
    start, end = date_range(args.days)
    rows = query_all(session, start, end, ['date', 'page'])
    by_date = panel_records(rows)
    out_dir = Path(args.out)
    out_dir.mkdir(parents=True, exist_ok=True)
    for day, records in sorted(by_date.items()):
        target = out_dir / f'{day}.json'
        target.write_text(json.dumps(records, indent=1, sort_keys=True) + '\n', encoding='utf-8')
        with_impressions = sum(1 for r in records if r['impressions'] > 0)
        print(f'{day}: {len(records)} pages, {with_impressions} with impressions -> {target}')
    if not by_date:
        print(f'No rows for {start}..{end} — nothing written.')


def cmd_sitemaps(session, args):
    """What Google has actually done with the sitemaps we submitted.

    Distinct from URL Inspection: inspection says whether a page is indexed,
    this says whether Google downloaded and parsed the file that told it the
    page exists. In September 2026, 52 URLs present in our submitted sitemap
    came back from inspection as "URL is unknown to Google", which is only
    possible if the file was not processed, or was processed and its entries
    not taken up.
    """
    resp = session.get(f'{API_BASE}/sitemaps', timeout=30)
    resp.raise_for_status()
    feeds = resp.json().get('sitemap', [])
    if not feeds:
        print('Search Console lists NO submitted sitemap for this property.')
        return
    print(f'{len(feeds)} sitemap(s) known to Search Console:\n')
    for feed in feeds:
        print(f"  path:           {feed.get('path')}")
        print(f"  type:           {'index' if feed.get('isSitemapsIndex') else 'urlset'}")
        print(f"  last submitted: {feed.get('lastSubmitted', '(never)')}")
        print(f"  last downloaded:{feed.get('lastDownloaded', '(never downloaded by Google)')}")
        print(f"  pending:        {feed.get('isPending')}")
        print(f"  warnings:       {feed.get('warnings', 0)}    errors: {feed.get('errors', 0)}")
        for entry in feed.get('contents', []):
            print(f"    contents: type={entry.get('type')} submitted={entry.get('submitted')} indexed={entry.get('indexed', 'n/a')}")
        print()


def cmd_inspect(session, args):
    """Ask Search Console whether it has indexed each URL in a sample.

    Search Analytics cannot answer this. It reports only pages that received an
    impression, so "never indexed" and "indexed but never shown" are both simply
    absent from it — and they call for opposite work. The first is a discovery
    problem, the second a relevance or authority one.

    One call per URL against a daily quota, so this reads the stratified sample
    that scripts/build-index-sample.mjs writes rather than walking the site.
    """
    sample = Path(args.sample)
    if not sample.exists():
        print(f'{sample} not found — run `node scripts/build-index-sample.mjs` first.', file=sys.stderr)
        sys.exit(1)

    entries = []
    for line in sample.read_text(encoding='utf-8').splitlines():
        if not line.strip():
            continue
        path_part, _, page_type = line.partition('\t')
        entries.append((path_part, page_type or 'unknown'))

    # Resume a partial run rather than re-spending quota on URLs already done.
    results = []
    done = set()
    existing = Path(args.out)
    if args.resume and existing.exists():
        results = json.loads(existing.read_text(encoding='utf-8'))
        done = {row['page'] for row in results if 'error' not in row}
        print(f'resuming: {len(done)} URLs already inspected')
    entries = [entry for entry in entries if entry[0] not in done]

    for index, (page_path, page_type) in enumerate(entries, start=1):
        body = {'inspectionUrl': f'https://takemocktest.com{page_path}', 'siteUrl': SITE}
        # requests has no default timeout: without one a single stalled call
        # hangs the whole job until the runner kills it, and every inspection
        # already spent is lost with it.
        try:
            resp = session.post(INSPECT_URL, json=body, timeout=30)
        except requests.exceptions.RequestException as exc:
            print(f'  {page_path}: {type(exc).__name__}', file=sys.stderr)
            results.append({'page': page_path, 'type': page_type, 'error': type(exc).__name__})
            continue
        if resp.status_code != 200:
            print(f'  {page_path}: HTTP {resp.status_code} {resp.text[:200]}', file=sys.stderr)
            results.append({'page': page_path, 'type': page_type, 'error': resp.status_code})
            continue
        status = resp.json().get('inspectionResult', {}).get('indexStatusResult', {})
        results.append({
            'page': page_path,
            'type': page_type,
            'verdict': status.get('verdict'),
            'coverageState': status.get('coverageState'),
            'robotsTxtState': status.get('robotsTxtState'),
            'indexingState': status.get('indexingState'),
            'pageFetchState': status.get('pageFetchState'),
            'lastCrawlTime': status.get('lastCrawlTime'),
            'googleCanonical': status.get('googleCanonical'),
        })
        # Well inside the per-minute ceiling; the daily quota is the real limit.
        time.sleep(0.2)
        if index % 25 == 0:
            print(f'  inspected {index}/{len(entries)}', flush=True)
            # Flush partial results to disk as we go. Inspection turned out to
            # take seconds per URL, not the fraction of a second the pacing
            # assumed, so a sample of a few hundred can outlive a job timeout.
            # Writing only at the end would then discard every call already
            # spent against the day's quota.
            Path(args.out).write_text(json.dumps(results, indent=1) + '\n', encoding='utf-8')

    Path(args.out).write_text(json.dumps(results, indent=1) + '\n', encoding='utf-8')
    print(f'\ninspected {len(results)} URLs -> {args.out}\n')
    print(summarise_coverage(results))


def cmd_countries(session, args):
    """Which countries already find this site, before a single page is written
    for them. Search Console retired its International Targeting report in
    2022, so this dimension is the only first-party evidence available for an
    expansion decision: everything else on the market is a guess about demand,
    this is demand that has already arrived.

    Read it as latent demand, not as a verdict. A country showing impressions
    for an India-only catalogue is either diaspora, or people whose own exam
    resembles one of ours closely enough that Google matched it. The second
    kind is the interesting kind."""
    start, end = date_range(args.days)
    rows = query(session, start, end, ['country'], row_limit=args.limit)
    rows.sort(key=lambda r: -r['impressions'])
    total = sum(r['impressions'] for r in rows) or 1
    print(f'{len(rows)} countries, last {args.days} days:')
    for r in rows[: args.limit]:
        share = 100 * r['impressions'] / total
        print(
            f"  {r['keys'][0].upper():<5} clicks={r['clicks']:<5} impressions={r['impressions']:<7}"
            f" {share:5.1f}%  pos={r['position']:>5.1f}"
        )


def cmd_report(session, args):
    """Emits a single self-contained markdown snapshot, meant to be committed
    to the repo (see .github/workflows/gsc-report.yml) so week-over-week
    changes show up as an ordinary git diff — no dashboard, no external
    storage, just the file's own history."""
    from datetime import datetime, timezone

    start, end = date_range(args.days)
    totals_rows = query(session, start, end, [])
    query_rows = sorted(query(session, start, end, ['query'], row_limit=args.limit), key=lambda r: -r['impressions'])
    page_rows = sorted(query(session, start, end, ['page'], row_limit=args.limit), key=lambda r: -r['impressions'])

    # Every page, not just the top `limit`, because the subfolder tables below
    # are totals and a truncated list would quietly understate whichever section
    # has many small pages rather than a few large ones. That is exactly the
    # shape of a new country subfolder.
    all_page_rows = query(session, start, end, ['page'], row_limit=5000)
    country_rows = sorted(query(session, start, end, ['country'], row_limit=250), key=lambda r: -r['impressions'])

    generated = datetime.now(timezone.utc).strftime('%Y-%m-%d %H:%M UTC')
    lines = [
        '# Search Console report — takemocktest.com',
        '',
        f'Generated {generated} by `scripts/gsc-query.py report` (see `.github/workflows/gsc-report.yml`).',
        f'Window: last {args.days} days ({start} to {end}). Search Analytics data lags 2-3 days, so the',
        'most recent few days are typically undercounted or missing.',
        '',
        '## Totals',
        '',
    ]
    if totals_rows:
        r = totals_rows[0]
        lines += [
            '| Clicks | Impressions | CTR | Avg. position |',
            '|---|---|---|---|',
            f"| {r['clicks']} | {r['impressions']} | {r['ctr']:.2%} | {r['position']:.1f} |",
        ]
    else:
        lines.append('No search data for this window.')

    lines += ['', f'## Top {len(query_rows)} queries by impressions', '']
    if query_rows:
        lines += ['| Query | Clicks | Impressions | Avg. position |', '|---|---|---|---|']
        lines += [f"| {r['keys'][0]} | {r['clicks']} | {r['impressions']} | {r['position']:.1f} |" for r in query_rows]
    else:
        lines.append('No queries recorded for this window.')

    # Country and subfolder, which the totals above cannot show and which are the
    # only way to tell whether a second country subfolder is doing anything. See
    # PHASE_4_DECISION.md: these two tables are the inputs to that gate.
    lines += ['', '## By country', '']
    if country_rows:
        total_impressions = sum(r['impressions'] for r in country_rows) or 1
        lines += ['| Country | Clicks | Impressions | Share | Avg. position |', '|---|---|---|---|---|']
        lines += [
            f"| {r['keys'][0].upper()} | {r['clicks']} | {r['impressions']} |"
            f" {100 * r['impressions'] / total_impressions:.1f}% | {r['position']:.1f} |"
            for r in country_rows[:20]
        ]
    else:
        lines.append('No country data for this window.')

    SUBFOLDERS = ['/in/practice', '/ng/practice', '/in/logical-reasoning', '/ng/logical-reasoning', '/in', '/ng']
    buckets = bucket_by_prefix(all_page_rows, SUBFOLDERS)
    lines += [
        '',
        '## By subfolder',
        '',
        'The `/in` and `/ng` rows exclude the practice and reasoning sections listed above them,',
        'so the rows sum to the total rather than double-counting.',
        '',
        '| Section | Pages with impressions | Clicks | Impressions | Avg. position |',
        '|---|---|---|---|---|',
    ]
    for name in SUBFOLDERS + ['other']:
        totals = summarise(buckets[name])
        lines.append(
            f"| `{name}` | {totals['pages']} | {totals['clicks']} | {totals['impressions']} |"
            f" {totals['position']:.1f} |" if totals['impressions'] else
            f"| `{name}` | 0 | 0 | 0 | n/a |"
        )

    lines += [
        '',
        '### Matched pair',
        '',
        '`/in/practice` and `/ng/practice` carry the same 40 topic pages, and `/in/logical-reasoning`',
        'and `/ng/logical-reasoning` the same reasoning hub, published a day apart in September 2026.',
        'Identical content on one domain, so the difference between each pair is the subfolder and its',
        'audience rather than the writing. That is the cleanest read available on whether a new country',
        'earns visibility, and it is what PHASE_4_DECISION.md judges.',
        '',
    ]
    for india, nigeria in [('/in/practice', '/ng/practice'), ('/in/logical-reasoning', '/ng/logical-reasoning')]:
        left, right = summarise(buckets[india]), summarise(buckets[nigeria])
        ratio = f"{100 * right['impressions'] / left['impressions']:.1f}%" if left['impressions'] else 'n/a'
        lines.append(f"- `{india}` {left['impressions']} impressions vs `{nigeria}` {right['impressions']} ({ratio} of India).")

    lines += ['', f'## Top {len(page_rows)} pages by impressions', '']
    if page_rows:
        lines += ['| Page | Clicks | Impressions | Avg. position |', '|---|---|---|---|']
        lines += [f"| {r['keys'][0]} | {r['clicks']} | {r['impressions']} | {r['position']:.1f} |" for r in page_rows]
    else:
        lines.append('No pages recorded for this window.')

    print('\n'.join(lines))


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest='command', required=True)

    for name, fn in [('totals', cmd_totals), ('queries', cmd_queries), ('pages', cmd_pages), ('countries', cmd_countries), ('report', cmd_report)]:
        p = sub.add_parser(name)
        p.add_argument('--days', type=int, default=28)
        p.add_argument('--limit', type=int, default=50)
        p.set_defaults(func=fn)

    p = sub.add_parser('by-page')
    p.add_argument('--page', required=True, help='Path (e.g. /in/ssc-cgl/mock-test) or full URL')
    p.add_argument('--days', type=int, default=90)
    p.add_argument('--limit', type=int, default=50)
    p.set_defaults(func=cmd_by_page)

    p = sub.add_parser('panel', help='Per-URL daily panel, one JSON file per date.')
    p.add_argument('--days', type=int, default=5, help='Trailing window; covers Search Console revising recent days.')
    p.add_argument('--out', default='data/gsc', help='Directory to write <date>.json into.')
    p.set_defaults(func=cmd_panel)

    p = sub.add_parser('sitemaps', help='Submission and processing state of our sitemaps.')
    p.set_defaults(func=cmd_sitemaps)

    p = sub.add_parser('inspect', help='URL Inspection over a stratified sample: is Google indexing these pages?')
    p.add_argument('--sample', default='data/index-audit-sample.tsv')
    p.add_argument('--out', default='data/index-audit-result.json')
    p.add_argument('--resume', action='store_true', help='Skip URLs already present in --out.')
    p.set_defaults(func=cmd_inspect)

    p = sub.add_parser('selftest', help='Exercise the aggregation helpers. No credentials needed.')
    p.set_defaults(func=cmd_selftest, needs_session=False)

    args = parser.parse_args()
    if getattr(args, 'needs_session', True):
        args.func(load_session(), args)
    else:
        args.func(args)


if __name__ == '__main__':
    main()
