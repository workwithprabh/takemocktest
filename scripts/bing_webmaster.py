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
  python3 scripts/bing_webmaster.py links --url /in/ssc-cgl/mock-test --limit 50
  python3 scripts/bing_webmaster.py link-details --url /in/ssc-cgl/mock-test --limit 50
  python3 scripts/bing_webmaster.py raw GetCrawlStats   # escape hatch for any method

Verified against a live key on 4 September 2026 (via the GitHub Actions
workflow, since this repo's coding-agent sandbox has no network route to
ssl.bing.com): `sites` returns the verified property, which confirms the
key, the endpoint, and apikey-as-query-param auth all work. That run also
proved these are GET methods — an earlier version sent params as a JSON
POST body and got HTTP 405 back on every call that had any.

The link methods are confirmed too: GetLinkCounts and GetUrlLinks both
return well-formed typed responses with siteUrl, `link` for the target
page, and `page` as an integer pagination index. As of the first working
run they return empty sets (Links: [], Details: [], TotalPages: 0) — the
property was verified in Bing that same day, and Bing's inbound-link data
takes time to populate after verification, so an empty result here is not
the same as a confirmed zero. Re-check in a few weeks. `raw <MethodName>
--param k=v` prints Bing's exact response for anything that misbehaves.
"""

import argparse
import json
import os
import sys
from urllib.parse import quote

API_BASE = 'https://ssl.bing.com/webmaster/api.svc/json'

# The siteUrl param has to match how the property is registered in Bing
# Webmaster, trailing slash included — GetUserSites reports it as
# "https://takemocktest.com/". SITE (no trailing slash) is only used to turn
# a path into an absolute page URL.
SITE = 'https://takemocktest.com'
BING_SITE_URL = 'https://takemocktest.com/'


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
    """Bing's read methods (GetUserSites, GetLinkCounts, GetUrlLinks, ...) are
    GET with everything in the query string. An earlier version of this sent
    params as a JSON POST body and got HTTP 405 back for every call that had
    params — GetUserSites only worked because it has none."""
    import requests

    key = key or get_key()
    query = {'apikey': key}
    query.update(params or {})
    url = f'{API_BASE}/{method}?' + '&'.join(f'{k}={quote(str(v), safe="")}' for k, v in query.items())
    resp = requests.get(url)
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


def unwrap(data, key):
    """Bing returns a typed wrapper object ({'__type': ..., '<key>': [...],
    'TotalPages': N}) rather than a bare list. Pull the list out of it, and
    tolerate the shape being a plain list already."""
    if isinstance(data, list):
        return data, None
    if isinstance(data, dict):
        return data.get(key) or [], data.get('TotalPages')
    return [], None


def cmd_link_counts(args):
    data = call('GetLinkCounts', params={'siteUrl': BING_SITE_URL, 'page': args.page})
    rows, total_pages = unwrap(data, 'Links')
    print(f'{len(rows)} linking source(s) for {BING_SITE_URL} (page {args.page}, TotalPages={total_pages}):')
    for r in rows[: args.limit]:
        if isinstance(r, dict):
            print(f"  {r.get('Count', '?'):>6}  {r.get('Url', r)}")
        else:
            print(f"  {r}")
    if not rows:
        print('  (none reported — Bing has no inbound-link data for this property yet)')


def cmd_links(args):
    page = to_page_url(args.page)
    data = call('GetUrlLinks', params={'siteUrl': BING_SITE_URL, 'link': page, 'page': args.page_index})
    rows, total_pages = unwrap(data, 'Details')
    print(f'{len(rows)} inbound link(s) to {page} (page {args.page_index}, TotalPages={total_pages}):')
    for r in rows[: args.limit]:
        if isinstance(r, dict):
            print(f"  {r.get('Url', r)}  anchor={r.get('AnchorText', '')!r}")
        else:
            print(f"  {r}")
    if not rows:
        print('  (none reported — Bing has no inbound-link data for this page yet)')


def cmd_link_details(args):
    page = to_page_url(args.page)
    data = call('GetLinkDetails', params={'siteUrl': BING_SITE_URL, 'link': page, 'page': args.page_index})
    rows, total_pages = unwrap(data, 'Details')
    print(f'{len(rows)} link detail row(s) for {page} (page {args.page_index}, TotalPages={total_pages}):')
    for r in rows[: args.limit]:
        if isinstance(r, dict):
            print(f"  {r.get('Url', r)}  anchor={r.get('AnchorText', '')!r}")
        else:
            print(f"  {r}")
    if not rows:
        print('  (none reported — Bing has no link detail for this page yet)')


def cmd_raw(args):
    params = {}
    for kv in args.param or []:
        if '=' not in kv:
            print(f'--param expects key=value, got: {kv}', file=sys.stderr)
            sys.exit(1)
        k, v = kv.split('=', 1)
        params[k] = v
    params.setdefault('siteUrl', BING_SITE_URL)
    data = call(args.method, params=params)
    print(json.dumps(data, indent=2))


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = parser.add_subparsers(dest='command', required=True)

    p = sub.add_parser('sites', help='List verified sites on this account (sanity check the key works).')
    p.set_defaults(func=cmd_sites)

    p = sub.add_parser('link-counts', help='Total inbound link count for the whole site.')
    p.add_argument('--limit', type=int, default=50)
    p.add_argument('--page', type=int, default=0, help='Pagination index (0-based), not a URL.')
    p.set_defaults(func=cmd_link_counts)

    p = sub.add_parser('links', help='Pages that link to one specific page on this site.')
    p.add_argument('--url', dest='page', required=True, help='Path (e.g. /in/ssc-cgl/mock-test) or full URL')
    p.add_argument('--page', dest='page_index', type=int, default=0, help='Pagination index (0-based).')
    p.add_argument('--limit', type=int, default=50)
    p.set_defaults(func=cmd_links)

    p = sub.add_parser('link-details', help='Anchor text and source detail for links to one page.')
    p.add_argument('--url', dest='page', required=True, help='Path or full URL')
    p.add_argument('--page', dest='page_index', type=int, default=0, help='Pagination index (0-based).')
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
