"""Builds the backlink-targeting workbook from exports/batch-pages.json.

Run scripts/export-batch-pages.mjs first. Output is exports/, which is
gitignored: the workbook is a generated deliverable, regenerable from these
two scripts, so the repository keeps the generator rather than the binary.
"""
import json, datetime
from openpyxl import Workbook
from openpyxl.styles import Font, Alignment, PatternFill, Border, Side
from openpyxl.utils import get_column_letter

rows = json.load(open('exports/batch-pages.json'))
try:
    idx = {r['page']: r.get('coverageState') or '' for r in json.load(open('data/index-audit-result.json'))}
except Exception:
    idx = {}
for r in rows:
    path = r['url'].replace('https://takemocktest.com', '')
    r['googleIndexStatus'] = idx.get(path, '') or r.get('googleIndexStatus', '')

ARIAL = 'Arial'
HEAD = PatternFill('solid', fgColor='1F3864')
ALT = PatternFill('solid', fgColor='F2F5FA')
SUPPLIED = PatternFill('solid', fgColor='FFF2CC')
thin = Side(style='thin', color='BFBFBF')
BORDER = Border(left=thin, right=thin, top=thin, bottom=thin)

wb = Workbook()

# ---------------- Sheet 1: Pages ----------------
ws = wb.active
ws.title = 'Pages'
COLS = [
    ('URL', 46, 'url'),
    ('Exam', 20, 'exam'),
    ('Batch', 7, 'batch'),
    ('Primary keyword', 30, 'primaryKeyword'),
    ('Monthly volume (India)', 14, 'monthlyVolume'),
    ('Volume source', 34, 'volumeSource'),
    ('Page title', 50, 'title'),
    ('H1', 34, 'h1'),
    ('Meta description', 60, 'description'),
    ('Tests on page', 9, 'tests'),
    ('Questions on page', 11, 'questions'),
    ('Coverage disclosure', 46, 'coverage'),
    ('Internal cluster links', 40, 'relatedPages'),
    ('Google index status', 30, 'googleIndexStatus'),
]
for c, (head, width, _) in enumerate(COLS, start=1):
    cell = ws.cell(row=1, column=c, value=head)
    cell.font = Font(name=ARIAL, bold=True, color='FFFFFF', size=10)
    cell.fill = HEAD
    cell.alignment = Alignment(vertical='center', wrap_text=True)
    cell.border = BORDER
    ws.column_dimensions[get_column_letter(c)].width = width
ws.row_dimensions[1].height = 30

for i, r in enumerate(rows):
    excel_row = i + 2
    for c, (_, _, key) in enumerate(COLS, start=1):
        v = r.get(key, '')
        if key in ('tests', 'questions') and isinstance(v, str):
            v = int(v.replace(',', '')) if v.replace(',', '').isdigit() else v
        cell = ws.cell(row=excel_row, column=c, value=v)
        cell.font = Font(name=ARIAL, size=10)
        cell.alignment = Alignment(vertical='top', wrap_text=(c in (6, 7, 9, 12, 13)))
        cell.border = BORDER
        if i % 2 == 1:
            cell.fill = ALT
        if key in ('monthlyVolume', 'volumeSource') and v:
            cell.fill = SUPPLIED
    ws.cell(row=excel_row, column=1).hyperlink = r['url']
    ws.cell(row=excel_row, column=1).font = Font(name=ARIAL, size=10, color='0563C1', underline='single')
    ws.cell(row=excel_row, column=5).number_format = '#,##0'

ws.freeze_panes = 'B2'
ws.auto_filter.ref = f'A1:{get_column_letter(len(COLS))}{len(rows) + 1}'

# ---------------- Sheet 2: Summary (formulas) ----------------
sm = wb.create_sheet('Summary')
sm.column_dimensions['A'].width = 42
for col in 'BCD':
    sm.column_dimensions[col].width = 16
last = len(rows) + 1

def label(r, text, bold=False, size=10):
    c = sm.cell(row=r, column=1, value=text)
    c.font = Font(name=ARIAL, bold=bold, size=size)
    return c

label(1, 'Batch pages: backlink targeting summary', bold=True, size=13)
label(2, 'Every figure below is a formula over the Pages sheet, so it follows any edit you make there.')
sm.cell(row=2, column=1).font = Font(name=ARIAL, size=9, italic=True, color='595959')

label(4, 'Batch', bold=True); sm.cell(row=4, column=2, value='Pages').font = Font(name=ARIAL, bold=True)
sm.cell(row=4, column=3, value='Tests').font = Font(name=ARIAL, bold=True)
sm.cell(row=4, column=4, value='Questions').font = Font(name=ARIAL, bold=True)
for n in (1, 2, 3, 4):
    r = 4 + n
    sm.cell(row=r, column=1, value=f'Batch {n}').font = Font(name=ARIAL, size=10)
    sm.cell(row=r, column=2, value=f'=COUNTIF(Pages!$C$2:$C${last},{n})').font = Font(name=ARIAL, size=10)
    sm.cell(row=r, column=3, value=f'=SUMIF(Pages!$C$2:$C${last},{n},Pages!$J$2:$J${last})').font = Font(name=ARIAL, size=10)
    sm.cell(row=r, column=4, value=f'=SUMIF(Pages!$C$2:$C${last},{n},Pages!$K$2:$K${last})').font = Font(name=ARIAL, size=10)
r = 9
sm.cell(row=r, column=1, value='Total').font = Font(name=ARIAL, bold=True, size=10)
for col, letter in ((2, 'B'), (3, 'C'), (4, 'D')):
    c = sm.cell(row=r, column=col, value=f'=SUM({letter}5:{letter}8)')
    c.font = Font(name=ARIAL, bold=True, size=10)
sm.cell(row=9, column=4).number_format = '#,##0'
sm.cell(row=9, column=3).number_format = '#,##0'

label(11, 'Pages with an owner-supplied volume figure', size=10)
sm.cell(row=11, column=2, value=f'=COUNT(Pages!$E$2:$E${last})').font = Font(name=ARIAL, size=10)
label(12, 'Combined monthly volume of those pages', size=10)
c = sm.cell(row=12, column=2, value=f'=SUM(Pages!$E$2:$E${last})')
c.font = Font(name=ARIAL, size=10); c.number_format = '#,##0'
label(13, 'Pages Google reports as indexed', size=10)
sm.cell(row=13, column=2, value=f'=COUNTIF(Pages!$N$2:$N${last},"Submitted and indexed")').font = Font(name=ARIAL, size=10)
label(14, 'Pages Google has discovered but not crawled', size=10)
sm.cell(row=14, column=2, value=f'=COUNTIF(Pages!$N$2:$N${last},"Discovered*")').font = Font(name=ARIAL, size=10)
label(15, 'Pages Google does not know at all', size=10)
sm.cell(row=15, column=2, value=f'=COUNTIF(Pages!$N$2:$N${last},"URL is unknown*")').font = Font(name=ARIAL, size=10)

# ---------------- Sheet 3: Notes ----------------
nt = wb.create_sheet('Notes on this data')
nt.column_dimensions['A'].width = 26
nt.column_dimensions['B'].width = 104
NOTES = [
    ('What this file is',
     'The 29 exam mock-test hub pages whose on-page content was rewritten in content batches 1 to 4. '
     'Columns are read from the live built site, not retyped, so they match what is deployed.'),
    ('Generated', datetime.date.today().isoformat() + ' from the takemocktest build output.'),
    ('Batch 1 and 2',
     'Assigned by position in src/lib/mock-test-intros.ts, which has no batch markers for the earliest '
     'entries. Batch 2 shows 9 pages; it was planned as 10. One planned page appears to have received '
     'only a title or description change rather than a full intro, so it is not counted here. Treat the '
     '1 and 2 labels as indicative and batches 3 and 4 as exact, since those are marked in the file.'),
    ('Monthly volume',
     'SUPPLIED BY THE SITE OWNER, NOT MEASURED HERE. Only 4 of the 29 pages have a figure, and they are '
     'highlighted in yellow. Semrush datasets 2026-02 and 2026-07, India market. Nothing in this column '
     'has been independently verified by this project. Blank means no figure was supplied, NOT zero demand.'),
    ('Primary keyword',
     'Derived from each page H1 with any trailing year removed. It is what the page is written to answer, '
     'not a measured target. Two pages deliberately rank under an alias rather than their official name: '
     'IBPS RRB Office Assistant is written for "IBPS RRB Clerk", and SSC CHT for "SSC JHT".'),
    ('Google index status',
     'From the Search Console URL Inspection API. "Discovered - currently not indexed" means Google knows '
     'the URL but has not fetched it. "URL is unknown to Google" means it has no record of it. Blank means '
     'the URL was not in an inspection run. Across a 255-URL sample only 6.9% of the site is indexed, so '
     'expect most of these to be unindexed. That is the constraint backlinks are meant to relieve.'),
    ('Internal cluster links',
     'The other mock-test hubs each page already links to, by slug. Useful for backlinks because a link '
     'landing on one page of a cluster passes signal to its neighbours.'),
    ('Coverage disclosure',
     'The sentence the page itself publishes about how much of the official paper the mock covers. Relevant '
     'to outreach: do not pitch a page as complete coverage when its own page says otherwise.'),
    ('Not included here',
     'Blog posts, exam-updates, sectional test pages and topic-practice pages. Those were not part of '
     'batches 1 to 4.'),
]
t = nt.cell(row=1, column=1, value='Notes on this data')
t.font = Font(name=ARIAL, bold=True, size=13)
for i, (k, v) in enumerate(NOTES, start=3):
    a = nt.cell(row=i, column=1, value=k); a.font = Font(name=ARIAL, bold=True, size=10)
    a.alignment = Alignment(vertical='top', wrap_text=True)
    b = nt.cell(row=i, column=2, value=v); b.font = Font(name=ARIAL, size=10)
    b.alignment = Alignment(vertical='top', wrap_text=True)
    nt.row_dimensions[i].height = 46

out = 'exports/takemocktest-batch-pages-backlink-targets.xlsx'
wb.save(out)
print('wrote', out)
