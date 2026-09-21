"""Authoring helpers for hand-written question banks.

Every bank in src/lib/question-banks written by the coding agent is emitted by a
generator script that imports this module. The point is not convenience: it is
that the checks below run before a bank is written, so a defect fails at
generation instead of reaching the corpus.

Each check exists because it caught something real:

  check_mcq          Answer-key skew. Listing numeric options in ascending order
                     with one larger distractor puts the answer at C almost
                     every time. Sets have come out 5/9/4/0, 1/4/12/1 and
                     2/14/13/1 before this ran.
  check_difficulty   Difficulty drift against the exam's first test. An MCAT
                     second set once shipped inverted (0/3/9 against 0/9/3).
  check_no_positional  Explanations that name an option by position ("the last
                     figure would be an annuity due") break silently the moment
                     the options are reordered to balance the key. Name values.
  check_against      Repeated question text against the first test. Reads both
                     the single-quoted TS shape and the double-quoted JSON shape
                     used by frozen handoff banks, because reading only the first
                     reports zero overlap against a handoff bank rather than
                     failing.
  check_stems        src/lib/questions.ts has a runtime guard that requires every
                     question's literal stem to be unique WITHIN one test, options
                     ignored. A full mock concatenates the whole bank, so four
                     reading passages sharing one follow-up stem ("Which of the
                     following is most strongly supported by the passage above?")
                     is a duplicate there even though each passage differs. It
                     only surfaces at `npm run build`, not at qa:questions, and
                     it has broken a build in three separate batches.
  check_corpus       A full duplicate of a question already in the corpus, which
                     check_against cannot see because it reads one file. An ATMA
                     letter series once matched an SSC Steno one exactly and
                     failed at qa:questions instead of at generation. Uses the
                     audit's own signature (stem + options + answer), so a
                     generic stem reused with different options still passes,
                     which the audit permits on purpose.
  check_numeric      Mirrors the site's own numerical-answer validation
                     (assertValidTest in src/lib/questions.ts) so a value that
                     disagrees with its declared precision fails here instead of
                     at build time.

Typical use, from a generator under the scratchpad:

    import sys; sys.path.insert(0, 'scripts')
    from question_bank_helpers import ts, check, check_mcq, header, row_mcq, write
"""
from collections import Counter
import os
import re

# Curly quotes and dashes are banned in authored prose site-wide (qa:dashes).
# Heredocs in this environment materialise real Unicode rather than escapes, so
# they arrive by accident rather than by choice.
BAD = [chr(0x2014), chr(0x2013), chr(0x2018), chr(0x2019), chr(0x201c), chr(0x201d)]


def ts(t):
    """Quote a string as a TypeScript single-quoted literal."""
    for ch in BAD:
        assert ch not in t, ('forbidden char', ch, t[:80])
    return "'" + t.replace('\\', '\\\\').replace("'", "\\'").replace('\n', '\\n') + "'"


def _scan(rows, n_options):
    ids, sigs = set(), set()
    for r in rows:
        assert r['id'] not in ids, r['id']
        ids.add(r['id'])
        sig = (r['question'], tuple(r.get('options', ())))
        assert sig not in sigs, ('duplicate question', r['id'])
        sigs.add(sig)
        for f in (r['question'], r['explanation'], *r.get('options', ())):
            for ch in BAD:
                assert ch not in f, (r['id'], 'forbidden char', ch)
        assert r['explanation'].strip(), r['id']
        if r.get('answerType') == 'numerical':
            continue
        assert len(r['options']) == n_options and len(set(r['options'])) == n_options, r['id']
        assert 0 <= r['correctIndex'] < n_options, r['id']


def check(rows, expected_total, expected_sections, n_options=4):
    _scan(rows, n_options)
    assert len(rows) == expected_total, (len(rows), expected_total)
    got = Counter(r['section'] for r in rows)
    assert got == Counter(expected_sections), got


def check_mcq(rows, n_options=4):
    mcq = [r for r in rows if r.get('answerType') != 'numerical']
    ans = Counter(r['correctIndex'] for r in mcq)
    spread = max(ans.values()) - min(ans.values()) if len(ans) == n_options else 99
    tol = max(3, round(len(mcq) / 75))
    assert spread <= tol, (dict(sorted(ans.items())), spread, tol)
    return dict(sorted(ans.items())), spread, tol


def check_difficulty(rows, target):
    got = Counter(r['difficulty'] for r in rows)
    got_t = (got['easy'], got['medium'], got['hard'])
    assert got_t == tuple(target), ('difficulty skew vs the first test', got_t, tuple(target))
    return got_t


def check_no_positional(rows):
    bad = re.compile(r'\b(first|second|third|fourth|last)\s+(figure|option|choice|answer)\b', re.I)
    for r in rows:
        m = bad.search(r['explanation'])
        assert not m, ('positional reference in explanation', r['id'], m.group(0))


def check_numeric(rows):
    for r in rows:
        if r.get('answerType') != 'numerical':
            continue
        dp = r['maxDecimalPlaces']
        assert isinstance(dp, int) and dp >= 0, r['id']
        pat = re.compile(r'^-?\d+$' if dp == 0 else r'^-?\d+(?:\.\d{1,%d})?$' % dp)
        assert pat.match(str(r['correctValue'])), ('value disagrees with its precision', r['id'])
        assert not r.get('options'), r['id']


def check_against(rows, existing_path):
    """No question text may repeat the exam's first test."""
    src = open(existing_path, encoding='utf-8').read()
    old_q = {q.replace("\\'", "'") for q in re.findall(r"question: '((?:[^'\\]|\\.)*)'", src)}
    old_q |= set(re.findall(r'"question":\s*"((?:[^"\\]|\\.)*)"', src))
    assert old_q, 'no questions parsed out of ' + existing_path
    old_topics = Counter(re.findall(r"topic: '([^']+)'", src) + re.findall(r'"topic":\s*"([^"]+)"', src))
    for r in rows:
        q = r['question']
        if q.startswith("'") and q.endswith("'"):
            q = q[1:-1]
        assert q.replace("\\'", "'") not in old_q, ('repeats the first test', r['id'])
    shared = sorted(set(old_topics) & set(r['topic'] for r in rows))
    return len(shared), shared


def _signature(stem, options, answer):
    """The duplicate key used by scripts/audit-question-banks.mjs."""
    return '::'.join([stem.strip().lower(),
                      '|'.join(o.strip().lower() for o in options),
                      str(answer)])


def check_stems(rows):
    """No two questions in the bank may share a stem, options ignored.

    Mirrors the runtime guard in src/lib/questions.ts, which fires when the full
    mock concatenates the bank. Generic follow-up stems are the usual cause, so
    the message names both offenders rather than only the second one.
    """
    seen = {}
    for r in rows:
        stem = r['question']
        if stem.startswith("'") and stem.endswith("'"):
            stem = stem[1:-1]
        stem = stem.replace("\\'", "'").strip().lower()
        assert stem not in seen, ('stem repeats within this bank', seen[stem], r['id'])
        seen[stem] = r['id']
    return len(seen)


def check_corpus(rows, bank_dir, skip):
    """No question may fully duplicate one already in the corpus.

    A full duplicate is stem, options and answer together, matching the audit.
    `skip` is the basename of the file this generator is about to overwrite.
    """
    seen = {}
    row_re = re.compile(
        r"question: (?:'((?:[^'\\]|\\.)*)'|\"((?:[^\"\\]|\\.)*)\").*?"
        r"options: \[([^\]]*)\], correctIndex: (-?\d+)")
    opt_re = re.compile(r"'((?:[^'\\]|\\.)*)'|\"((?:[^\"\\]|\\.)*)\"")
    unq = lambda t: t.replace("\\'", "'").replace('\\"', '"')
    for name in sorted(os.listdir(bank_dir)):
        if name == skip or not name.endswith('.ts'):
            continue
        for m in row_re.finditer(open(os.path.join(bank_dir, name), encoding='utf-8').read()):
            stem = unq(m.group(1) if m.group(1) is not None else m.group(2))
            opts = [unq(a if a is not None else b) for a, b in opt_re.findall(m.group(3))]
            seen.setdefault(_signature(stem, opts, m.group(4)), name)
    assert len(seen) > 1000, ('corpus scan parsed too little to trust', len(seen))
    for r in rows:
        stem = r['question']
        if stem.startswith("'") and stem.endswith("'"):
            stem = stem[1:-1]
        sig = _signature(unq(stem), r.get('options', ()), r['correctIndex'])
        assert sig not in seen, ('duplicates a question already in the corpus', r['id'], seen[sig])
    return len(seen)


def header(ref, url, checked, extra=''):
    return ["import type { Question } from '../questions';", '', 'const source = {',
            "  kind: 'original' as const,", '  reference: ' + ts(ref) + ',', '  url: ' + ts(url) + ',',
            '  checkedOn: ' + ts(checked) + ',', '};', ''] + ([extra] if extra else [])


def row_mcq(r, marks=1, neg=0):
    """A multiple-choice row. `question` must already be quoted with ts()."""
    assert r['question'].startswith("'"), ('question must be passed through ts()', r['id'])
    return ("  { id: %s, section: %s, topic: %s, difficulty: %s, question: %s, options: [%s], correctIndex: %d, "
            "answerType: 'mcq', marks: %s, negativeMarking: %s, explanation: %s, source },"
            % (ts(r['id']), ts(r['section']), ts(r['topic']), ts(r['difficulty']), r['question'],
               ', '.join(ts(o) for o in r['options']), r['correctIndex'], marks, neg, ts(r['explanation'])))


def row_num(r, marks, neg):
    """A numerical-answer row. `question` must already be quoted with ts()."""
    assert r['question'].startswith("'"), ('question must be passed through ts()', r['id'])
    return ("  { id: %s, section: %s, topic: %s, difficulty: %s, question: %s, options: [], correctIndex: -1, "
            "correctValue: %s, maxDecimalPlaces: %d, answerType: 'numerical', marks: %s, negativeMarking: %s, "
            "explanation: %s, source },"
            % (ts(r['id']), ts(r['section']), ts(r['topic']), ts(r['difficulty']), r['question'],
               ts(str(r['correctValue'])), r['maxDecimalPlaces'], marks, neg, ts(r['explanation'])))


def write(path, lines):
    open(path, 'w', encoding='utf-8').write('\n'.join(lines) + '\n')
    print('wrote', path.split('/')[-1])
