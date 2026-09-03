#!/usr/bin/env python3
"""
Query live Bing Webmaster Tools data for takemocktest.com — link counts,
who links to which of your pages, and anchor text for a specific inbound
link. Requires the `requests` package (pip install requests).

The API key is never read from a file inside this repo. Supply it via:
  BING_API_KEY='...'   (from Bing Webmaster Tools -> Settings -> API Access)

Setup (one-time, free):
  1. Sign in at bing.com/webmasters with a Microsoft, Google, or Facebook
     account.
  2. Add https://takemocktest.com as a site and verify ownership (XML file,
     meta tag, or DNS CNAME record — pick whichever fits your hosting setup;
     this is separate from the Search Console verification, Bing does not
     share it).
  3. Settings (top right) -> API Access -> Generate Key. One key per user,
     valid for every verified site on the account.

Usage:
  python3 scripts/bing_webmaster.py sites
  python3 scripts/bing_webmaster.py link-counts
  python3 scripts/bing_webmaster.py links --page /in/ssc-cgl/mock-test --limit 50
  python3 scripts/bing_webmaster.py link-details --page /in/ssc-cgl/mock-test --limit 50
  python3 scripts/bing_webmaster.py raw GetCrawlStats   # escape hatch for any method

Notes on accuracy: the API surface below (GetUrlLinks / GetLinkCounts /
GetLinkDetails, apikey-as-query-param auth) matches Microsoft's published
Bing Webmaster API reference (learn.microsoft.com/en-us/bingwebmaster/
api-protocols and .../getting-access) as documented, but this script has
not been exercised against a live key from this environment (no Bing
account exists here to test with). If a call 404s or comes back with an
unexpected shape, use `raw <MethodName>` to see the exact response Bing
sends back — that's usually enough to tell whether a param name changed.
"""

import argparse
import json
import os
import sys
from urllib.parse import quote

API_BASE = 'https://ssl.bing.com/webmaster/api.svc/json'
SITE = 'https://takemocktest.com'


def get_key():
    key = os.environ.get('BING_API_KEY')
    if not key:
        print(
            'No API key found. Set BING_API_KEY (Bing Webmaster Tools -> Settings '
            '-> API Access -> Generate Key). See this script\'s docstring for the '
            'full one-time setup.',
            file=sys.stderr,
        )
        sys.exit(1)
    return key


def call(method, params=None, key=None):
    import requests

    key = key or get_key()
    url = f'{API_BASE}/{method}?apikey={quote(key)}'
    resp = requests.post(url, json=params or {}) if params is not None else requests.get(url)
    if resp.status_code != 200:
        print(f'HTTP {resp.status_code} from Bing for {method}: {resp.text[:500]}', file=sys.stderr)
        sys.exit(1)
    try:
        data = resp.json()
    except ValueError:
        print(f'Non-JSON response for {method}: {resp.text[:500]}', file=sys.stderr)
        sys.exit(1)
    if isinstance(data, dict) and data.get('ErrorCode'):
        print(f"Bing API error for {method}: {json.dumps(data)}", file=sys.stderr)
        sys.exit(1)
    return data.get('d', data)


def to_page_url(page):
    if page.startswith('http'):
        return page
    return f"{SITE}{page if page.startswith('/') else '/' + page}"


def cmd_sites(args):
    data = call('GetUserSites')
    sites = data if isinstance(data, list) else data.get('d', [])
    print(f'{len(sites)} verified site(s) on this account:')
    for s in sites:
        print(f"  {s.get('Url', s)}")


def cmd_link_counts(args):
    data = call('GetLinkCounts', params={'siteUrl': SITE})
    rows = data if isinstance(data, list) else [data]
    print(f'Link counts for {SITE}:')
    for r in rows[: args.limit]:
        print(f"  {r}")


def cmd_links(args):
    page = to_page_url(args.page)
    data = call('GetUrlLinks', params={'siteUrl': SITE, 'pageUrl': page})
    rows = data if isinstance(data, list) else data.get('d', [data])
    print(f'{len(rows)} inbound link(s) to {page} (showing up to {args.limit}):')
    for r in rows[: args.limit]:
        print(f"  {r}")


def cmd_link_details(args):
    page = to_page_url(args.page)
    data = call('GetLinkDetails', params={'siteUrl': SITE, 'pageUrl': page})
    rows = data if isinstance(data, list) else data.get('d', [data])
    print(f'{len(rows)} link detail row(s) for {page} (showing up to {args.limit}):')
    for r in rows[: args.limit]:
        print(f"  {r}")


def cmd_raw(args):
    params = {}
    for kv in args.param or []:
        if '=' not in kv:
            print(f'--param expects key=value, got: {kv}', file=sys.stderr)
            sys.exit(1)
        k, v = kv.split('=', 1)
        params[k] = v
    params.setdefault('siteUrl', SITE)
    data = call(args.method, params=params)
    print(json.dumps(data, indent=2))


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest='command', required=True)

    p = sub.add_parser('sites', help='List verified sites on this account (sanity check the key works).')
    p.set_defaults(func=cmd_sites)

    p = sub.add_parser('link-counts', help='Total inbound link count for the whole site.')
    p.add_argument('--limit', type=int, default=50)
    p.set_defaults(func=cmd_link_counts)

    p = sub.add_parser('links', help='Pages that link to one specific page on this site.')
    p.add_argument('--page', required=True, help='Path (e.g. /in/ssc-cgl/mock-test) or full URL')
    p.add_argument('--limit', type=int, default=50)
    p.set_defaults(func=cmd_links)

    p = sub.add_parser('link-details', help='Anchor text and source detail for links to one page.')
    p.add_argument('--page', required=True, help='Path or full URL')
    p.add_argument('--limit', type=int, default=50)
    p.set_defaults(func=cmd_link_details)

    p = sub.add_parser('raw', help='Call any Bing Webmaster API method directly; prints the raw JSON response.')
    p.add_argument('method', help='e.g. GetCrawlStats, GetQueryStats, GetUrlLinks')
    p.add_argument('--param', action='append', help='key=value, repeatable. siteUrl defaults to the site above.')
    p.set_defaults(func=cmd_raw)

    args = parser.parse_args()
    args.func(args)


if __name__ == '__main__':
    main()
