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
  python3 scripts/gsc-query.py by-page --page /in/ssc-cgl/test/tier-1-full-mock-1 --days 90

The property is a Search Console *domain* property (sc-domain:takemocktest.com),
which covers http/https and all subdomains — pass --page as a path only
(starting with /) or a full https://takemocktest.com/... URL; either works.
"""

import argparse
import json
import os
import sys
from datetime import date, timedelta

SITE = 'sc-domain:takemocktest.com'
SCOPES = ['https://www.googleapis.com/auth/webmasters.readonly']
API_BASE = f'https://searchconsole.googleapis.com/webmasters/v3/sites/{SITE}'


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


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest='command', required=True)

    for name, fn in [('totals', cmd_totals), ('queries', cmd_queries), ('pages', cmd_pages)]:
        p = sub.add_parser(name)
        p.add_argument('--days', type=int, default=28)
        p.add_argument('--limit', type=int, default=50)
        p.set_defaults(func=fn)

    p = sub.add_parser('by-page')
    p.add_argument('--page', required=True, help='Path (e.g. /in/ssc-cgl/mock-test) or full URL')
    p.add_argument('--days', type=int, default=90)
    p.add_argument('--limit', type=int, default=50)
    p.set_defaults(func=cmd_by_page)

    args = parser.parse_args()
    session = load_session()
    args.func(session, args)


if __name__ == '__main__':
    main()
