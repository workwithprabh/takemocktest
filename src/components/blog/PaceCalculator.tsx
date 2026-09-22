'use client';

// The one interactive block in the blog: duration divided by questions, which
// is the whole argument of how-much-time-per-question and until now was
// arithmetic the reader had to do by hand.
//
// It is a widget inside a post rather than a page of its own on purpose. The
// standalone SERP for "time per question calculator" belongs to high-authority
// formula aggregators, and a page here would also become a second claimant for
// the phrase the post itself targets. See ExamFinder for the same shape: a
// client component sitting inside server-rendered, indexable content.
//
// The published paces arrive as a prop rather than an import. CORPUS reaches
// into EXAMS and the practice-topic pools, so importing it here would drag the
// whole exam corpus into the browser bundle.
import { useMemo, useState } from 'react';

// SSC CGL Tier 1, which is the worked example the post uses a paragraph
// earlier. Fixed defaults rather than anything read from the browser, so the
// exported HTML already contains a real answer for a crawler and for a reader
// whose JavaScript has not arrived yet, and so hydration has nothing to
// disagree about.
const DEFAULT_QUESTIONS = 100;
const DEFAULT_MINUTES = 60;

// Half a second either way counts as the same pace. Without it, +3/-1 style
// roundings in the source patterns would read as genuinely different papers.
const TIE = 0.5;

function formatSeconds(value: number): string {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

export default function PaceCalculator({
  paces,
  heading,
  note,
}: {
  paces: number[];
  heading?: string;
  note?: string;
}) {
  const [questions, setQuestions] = useState(String(DEFAULT_QUESTIONS));
  const [minutes, setMinutes] = useState(String(DEFAULT_MINUTES));

  const questionCount = Number(questions);
  const minuteCount = Number(minutes);
  const valid =
    Number.isFinite(questionCount) && Number.isFinite(minuteCount) && questionCount > 0 && minuteCount > 0;
  const seconds = valid ? (minuteCount * 60) / questionCount : 0;

  // Where the reader's paper sits among the published ones. Counted rather
  // than given as a percentile: "23 papers here are faster" is a sentence
  // someone can check against the table below it, and a percentile is not.
  const rank = useMemo(() => {
    let slower = 0;
    let faster = 0;
    if (valid) {
      for (const pace of paces) {
        if (pace > seconds + TIE) slower += 1;
        else if (pace < seconds - TIE) faster += 1;
      }
    }
    const tied = paces.length - slower - faster;
    // Only the non-empty groups are named, so the fastest paper on the site
    // does not get told that "0 give less". The parts always sum to the total.
    // A group can hold exactly one paper, so the verb agrees: JEST at 270
    // seconds is alone at its pace and read "1 run at exactly this pace"
    // before this took the count into account.
    const clause = (count: number, one: string, many: string) => `${count} ${count === 1 ? one : many}`;
    const parts: string[] = [];
    if (slower > 0) parts.push(clause(slower, 'gives more time per question', 'give more time per question'));
    if (tied > 0) parts.push(clause(tied, 'runs at exactly this pace', 'run at exactly this pace'));
    if (faster > 0) parts.push(clause(faster, 'gives less', 'give less'));
    const sentence =
      parts.length > 1 ? `${parts.slice(0, -1).join(', ')} and ${parts[parts.length - 1]}` : parts[0] ?? '';
    return { sentence };
  }, [paces, seconds, valid]);

  const field =
    'w-full border border-ink-300 bg-white px-3 py-2 text-base text-ink-900 focus:border-ink-900 focus:outline-none';
  const labelClass = 'mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-700';

  return (
    <div className="border border-ink-900">
      <div className="border-b border-ink-200 bg-ink-50 px-5 py-4">
        <h2 className="font-sans text-xl font-semibold text-ink-900">{heading ?? 'Work out your own pace'}</h2>
        {note ? <p className="mt-1.5 text-sm leading-6 text-ink-700">{note}</p> : null}
      </div>

      <div className="grid gap-4 px-5 py-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="pace-questions">Questions in the paper</label>
          <input
            id="pace-questions"
            className={field}
            type="number"
            inputMode="numeric"
            min={1}
            step={1}
            value={questions}
            onChange={(event) => setQuestions(event.target.value)}
          />
        </div>
        <div>
          <label className={labelClass} htmlFor="pace-minutes">Minutes allowed</label>
          <input
            id="pace-minutes"
            className={field}
            type="number"
            inputMode="numeric"
            min={1}
            step={1}
            value={minutes}
            onChange={(event) => setMinutes(event.target.value)}
          />
        </div>
      </div>

      <div className="border-t border-ink-200 px-5 py-5" aria-live="polite">
        {valid ? (
          <>
            <p className="font-sans text-3xl font-bold leading-none tracking-[-0.02em] text-ink-900">
              {`${formatSeconds(seconds)} seconds a question`}
            </p>
            <p className="mt-2.5 text-sm leading-6 text-ink-700">
              {`Of the ${paces.length} official patterns published on this site, ${rank.sentence}.`}
            </p>
          </>
        ) : (
          <p className="text-sm leading-6 text-ink-700">Enter a question count and a duration, both above zero.</p>
        )}
      </div>
    </div>
  );
}
