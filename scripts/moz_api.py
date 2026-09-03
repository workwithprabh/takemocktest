#!/usr/bin/env python3
"""
Query the Moz Links API v2 for takemocktest.com — Domain Authority, Page
Authority, Spam Score, linking root domains, and similar link-profile
metrics. Requires the `requests` package (pip install requests).

Credentials are never read from a file inside this repo. Supply them via:
  MOZ_ACCESS_ID='...'
  MOZ_SECRET_KEY='...'

Setup (one-time, has a genuinely free tier — 50 rows/month as of the
research behind this script; paid tiers start around $20/month for higher
volume, confirm current numbers at moz.com/products/api since Moz changes
pricing):
  1. Sign up / log in at moz.com/products/api.
  2. Account settings -> API Access -> copy the Access ID and Secret Key.
     (These are per-account credentials, not scoped per-user.)

Usage:
  python3 scripts/moz_api.py metrics takemocktest.com
  python3 scripts/moz_api.py metrics --scope url https://takemocktest.com/in/ssc-cgl/mock-test
  python3 scripts/moz_api.py raw data.site.metrics.fetch '{"data":{"site_query":{"query":"takemocktest.com","scope":"domain"}}}'

IMPORTANT — accuracy caveat: this environment cannot reach moz.com (the
network egress proxy here blocks it) and there is no live Moz account to
test against, so the exact JSON-RPC method name and param shape used by
`metrics` below (data.site.metrics.fetch) is the best-documented guess
available, not verified against a real response. The transport is solid
(HTTP Basic Auth with base64(access_id:secret_key), POST to
https://api.moz.com/jsonrpc, JSON-RPC 2.0 envelope) — that part is
consistent across every source checked. If `metrics` errors with something
like "method not found" once you actually have a key, run the same call
through `raw` with the method name from your Moz API dashboard's own
request examples (Moz shows these once you're logged in), and this script
gets a one-line fix.

Moz "rows": each linking domain / URL metrics report / anchor-text entry
returned counts as one row against your monthly quota, so keep --limit low
on the free tier.
"""

import argparse
import base64
import json
import os
import sys
import uuid

API_URL = 'https://api.moz.com/jsonrpc'
TARGET = 'takemocktest.com'


def get_credentials():
    access_id = os.environ.get('MOZ_ACCESS_ID')
    secret_key = os.environ.get('MOZ_SECRET_KEY')
    if not access_id or not secret_key:
        print(
            'No credentials found. Set MOZ_ACCESS_ID and MOZ_SECRET_KEY (Moz -> '
            'Account Settings -> API Access). See this script\'s docstring for the '
            'full one-time setup.',
            file=sys.stderr,
        )
        sys.exit(1)
    return access_id, secret_key


def call(method, params, credentials=None):
    import requests

    access_id, secret_key = credentials or get_credentials()
    token = base64.b64encode(f'{access_id}:{secret_key}'.encode()).decode()
    body = {'jsonrpc': '2.0', 'id': str(uuid.uuid4()), 'method': method, 'params': params}
    resp = requests.post(
        API_URL,
        json=body,
        headers={'Authorization': f'Basic {token}', 'Content-Type': 'application/json'},
    )
    if resp.status_code != 200:
        print(f'HTTP {resp.status_code} from Moz for {method}: {resp.text[:500]}', file=sys.stderr)
        sys.exit(1)
    data = resp.json()
    if 'error' in data:
        print(f"Moz API error for {method}: {json.dumps(data['error'])}", file=sys.stderr)
        sys.exit(1)
    return data.get('result')


def cmd_metrics(args):
    result = call(
        'data.site.metrics.fetch',
        {'data': {'site_query': {'query': args.target, 'scope': args.scope}}},
    )
    print(json.dumps(result, indent=2))


def cmd_raw(args):
    try:
        params = json.loads(args.params)
    except json.JSONDecodeError as e:
        print(f'--params must be valid JSON: {e}', file=sys.stderr)
        sys.exit(1)
    result = call(args.method, params)
    print(json.dumps(result, indent=2))


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest='command', required=True)

    p = sub.add_parser('metrics', help='Domain Authority / Page Authority / Spam Score / linking-domain counts.')
    p.add_argument('target', nargs='?', default=TARGET, help='Domain or URL to look up.')
    p.add_argument('--scope', choices=['domain', 'root_domain', 'page'], default='domain')
    p.set_defaults(func=cmd_metrics)

    p = sub.add_parser('raw', help='Call any Moz JSON-RPC method directly; prints the raw response.')
    p.add_argument('method', help='e.g. data.site.metrics.fetch')
    p.add_argument('params', help='JSON-encoded params object, e.g. \'{"data":{...}}\'')
    p.set_defaults(func=cmd_raw)

    args = parser.parse_args()
    args.func(args)


if __name__ == '__main__':
    main()
