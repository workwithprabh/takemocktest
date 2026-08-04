'use client';

import { useEffect, useRef, useState } from 'react';

const DURATION_SECONDS = 15 * 60;
const STORAGE_KEY = 'takemocktest:ssc-cgl-dest-draft';

const PASSAGE = `A district library began a careful programme to preserve old public records while making them easier for citizens to use. Many documents existed only on fragile paper, and some indexes had been written by hand several decades earlier. The library first prepared an inventory so that every register, map and notice received a clear reference number. Staff members then checked page order, removed dust with suitable tools and recorded any damage before scanning began. They were instructed not to repair historical material with ordinary tape because an unsuitable repair could cause further harm.

Each scanned page was reviewed for clarity, orientation and completeness. A second staff member compared the image with the original document and confirmed that no page had been missed. The digital files were named according to a consistent rule rather than personal preference. This made it possible to locate a record by year, department and reference number. Copies were stored in more than one secure location, and access permissions were limited according to staff responsibilities. The original papers remained available under supervised conditions because a digital image did not remove the need to preserve the source.

The project also considered the needs of people who were not comfortable with online systems. A help desk assisted visitors in searching the catalogue, while printed instructions explained the basic steps in plain language. Frequently requested records were listed on a simple page that worked on low-bandwidth connections. The library invited residents to report unreadable images or incorrect descriptions, and every report was checked against the original material before a correction was made.

After six months, the library reviewed search times, error reports and visitor feedback. Staff found that the new catalogue reduced routine waiting, but they also identified several descriptions that required clearer wording. Instead of treating the first release as final, the team scheduled regular audits and documented each change. The programme showed that useful digitisation depends on accurate records, careful verification, secure storage and continued public support.`;

type Draft = { text: string; startedAt: number; deadline: number };
type Result = { typed: number; errors: number; accuracy: number; kdph: number; elapsed: number };

function readDraft(): Draft | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Draft) : null;
  } catch {
    return null;
  }
}

function saveDraft(draft: Draft) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(draft));
  } catch {
    // Practice remains usable when browser storage is unavailable.
  }
}

function clearDraft() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Nothing to clear when browser storage is unavailable.
  }
}

function formatClock(seconds: number) {
  const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
  const remainder = Math.floor(seconds % 60).toString().padStart(2, '0');
  return `${minutes}:${remainder}`;
}

function editDistance(a: string, b: string) {
  let previous = new Uint16Array(b.length + 1);
  let current = new Uint16Array(b.length + 1);
  for (let j = 0; j <= b.length; j++) previous[j] = j;

  for (let i = 1; i <= a.length; i++) {
    current[0] = i;
    for (let j = 1; j <= b.length; j++) {
      current[j] = Math.min(
        current[j - 1] + 1,
        previous[j] + 1,
        previous[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1),
      );
    }
    [previous, current] = [current, previous];
  }
  return previous[b.length];
}

function calculateResult(text: string, startedAt: number): Result {
  const elapsed = Math.max(1, Math.min(DURATION_SECONDS, Math.round((Date.now() - startedAt) / 1000)));
  const errors = editDistance(text, PASSAGE.slice(0, text.length));
  return {
    typed: text.length,
    errors,
    accuracy: text.length ? Math.max(0, ((text.length - errors) / text.length) * 100) : 0,
    kdph: Math.round((text.length / elapsed) * 3600),
    elapsed,
  };
}

export default function DestPracticeClient() {
  const [phase, setPhase] = useState<'intro' | 'active' | 'result'>('intro');
  const [text, setText] = useState('');
  const [startedAt, setStartedAt] = useState(0);
  const [deadline, setDeadline] = useState(0);
  const [timeLeft, setTimeLeft] = useState(DURATION_SECONDS);
  const [result, setResult] = useState<Result | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const textRef = useRef('');
  const startedAtRef = useRef(0);

  useEffect(() => {
    const draft = readDraft();
    if (draft) {
        const remaining = Math.max(0, Math.ceil((draft.deadline - Date.now()) / 1000));
        if (remaining > 0) {
          setText(draft.text);
          textRef.current = draft.text;
          setStartedAt(draft.startedAt);
          startedAtRef.current = draft.startedAt;
          setDeadline(draft.deadline);
          setTimeLeft(remaining);
          setPhase('active');
        } else {
          clearDraft();
        }
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated || phase !== 'active') return;
    const tick = () => {
      const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000));
      setTimeLeft(remaining);
      if (remaining === 0) {
        const finalResult = calculateResult(textRef.current, startedAtRef.current);
        setResult(finalResult);
        setPhase('result');
        clearDraft();
      }
    };
    tick();
    const timer = window.setInterval(tick, 1000);
    return () => window.clearInterval(timer);
  }, [deadline, hydrated, phase]);

  useEffect(() => {
    if (!hydrated || phase !== 'active') return;
    saveDraft({ text, startedAt, deadline });
  }, [deadline, hydrated, phase, startedAt, text]);

  useEffect(() => {
    if (!hydrated || phase !== 'active') return;
    const warn = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = '';
    };
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [hydrated, phase]);

  const start = () => {
    const now = Date.now();
    setText('');
    textRef.current = '';
    setStartedAt(now);
    startedAtRef.current = now;
    setDeadline(now + DURATION_SECONDS * 1000);
    setTimeLeft(DURATION_SECONDS);
    setResult(null);
    setPhase('active');
  };

  const finish = () => {
    setResult(calculateResult(textRef.current, startedAtRef.current));
    setPhase('result');
    clearDraft();
  };

  const exit = () => {
    if (window.confirm('Exit this practice? Your typed text and remaining time are saved on this device.')) {
      window.location.href = '/in/ssc-cgl/mock-test';
    }
  };

  if (!hydrated) {
    return <p className="border border-ink-200 bg-white p-5 text-sm text-ink-500">Restoring saved practice…</p>;
  }

  return (
    <section data-test-attempt={phase === 'active' ? true : undefined} className="mt-6">
      {phase === 'intro' && (
        <div className="border border-ink-200 bg-white p-5 md:p-7">
          <h2 className="text-xl font-bold text-ink-900">Practice format</h2>
          <div className="mt-4 grid gap-3 text-sm sm:grid-cols-3">
            <div className="border border-ink-200 bg-ink-50 p-4"><strong className="block text-ink-900">15 minutes</strong><span className="text-ink-500">Official duration</span></div>
            <div className="border border-ink-200 bg-ink-50 p-4"><strong className="block text-ink-900">About 2,000</strong><span className="text-ink-500">Target key depressions</span></div>
            <div className="border border-ink-200 bg-ink-50 p-4"><strong className="block text-ink-900">Qualifying</strong><span className="text-ink-500">No marks added</span></div>
          </div>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-sm text-ink-600">
            <li>Type the displayed passage exactly, including spaces, punctuation and capital letters.</li>
            <li>Paste is disabled so the activity measures typing practice.</li>
            <li>Your draft and deadline are saved locally and resume safely after a refresh.</li>
            <li>Accuracy and speed below are practice indicators, not an official SSC qualification result.</li>
          </ul>
          <button type="button" onClick={start} className="mt-6 min-h-11 bg-ink-900 px-5 py-3 text-sm font-semibold text-ink-50">
            Start 15-minute practice
          </button>
        </div>
      )}

      {phase === 'active' && (
        <div className="mx-auto max-w-6xl pb-8">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-ink-200 pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">SSC CGL DEST practice</p>
              <p className="text-sm text-ink-500">Progress saved on this device</p>
            </div>
            <div className="flex items-center gap-2">
              <span aria-label={`${formatClock(timeLeft)} remaining`} className="bg-ink-100 px-4 py-3 font-mono text-sm font-semibold text-ink-900">{formatClock(timeLeft)}</span>
              <button type="button" onClick={exit} className="min-h-11 border border-ink-200 bg-white px-4 text-sm font-semibold text-ink-900">Exit practice</button>
              <button type="button" onClick={finish} className="min-h-11 bg-ink-900 px-4 text-sm font-semibold text-ink-50">Finish</button>
            </div>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            <div className="border border-ink-200 bg-white p-5">
              <h2 className="mb-3 text-sm font-bold text-ink-900">Passage to type</h2>
              <div className="max-h-[60vh] overflow-y-auto whitespace-pre-wrap text-sm leading-7 text-ink-700">{PASSAGE}</div>
            </div>
            <div className="border border-ink-200 bg-white p-5">
              <label htmlFor="dest-entry" className="mb-3 block text-sm font-bold text-ink-900">Your entry</label>
              <textarea
                id="dest-entry"
                value={text}
                onChange={(event) => { setText(event.target.value); textRef.current = event.target.value; }}
                onPaste={(event) => event.preventDefault()}
                spellCheck={false}
                autoCorrect="off"
                autoCapitalize="off"
                autoFocus
                className="min-h-[55vh] w-full resize-none border border-ink-300 bg-white p-4 font-sans text-sm leading-7 text-ink-900 outline-none focus:border-ink-900"
              />
              <div className="mt-3 flex flex-wrap justify-between gap-2 text-xs text-ink-500">
                <span>{text.length.toLocaleString()} key depressions entered</span>
                <span>Target passage: {PASSAGE.length.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {phase === 'result' && result && (
        <div className="border border-ink-200 bg-white p-5 md:p-7">
          <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">Practice complete</p>
          <h2 className="mt-1 text-2xl font-bold text-ink-900">Your DEST practice indicators</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="border border-ink-200 bg-ink-50 p-4"><strong className="block font-mono text-xl text-ink-900">{result.typed}</strong><span className="text-xs text-ink-500">Key depressions</span></div>
            <div className="border border-ink-200 bg-ink-50 p-4"><strong className="block font-mono text-xl text-ink-900">{result.errors}</strong><span className="text-xs text-ink-500">Character edits</span></div>
            <div className="border border-ink-200 bg-ink-50 p-4"><strong className="block font-mono text-xl text-ink-900">{result.accuracy.toFixed(1)}%</strong><span className="text-xs text-ink-500">Practice accuracy</span></div>
            <div className="border border-ink-200 bg-ink-50 p-4"><strong className="block font-mono text-xl text-ink-900">{result.kdph.toLocaleString()}</strong><span className="text-xs text-ink-500">Gross KDPH</span></div>
          </div>
          <p className="mt-5 border border-ink-200 bg-ink-50 p-4 text-sm text-ink-600">
            These are learning indicators only. SSC and its Regional Offices define the official DEST evaluation and qualifying standards.
          </p>
          <button type="button" onClick={start} className="mt-5 min-h-11 bg-ink-900 px-5 py-3 text-sm font-semibold text-ink-50">Practice again</button>
        </div>
      )}
    </section>
  );
}
