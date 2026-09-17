import Link from 'next/link';

interface TestRowProps {
  href: string;
  name: string;
  questions: number;
  minutes: number;
  kind: 'full-length' | 'sectional' | 'practice' | 'quick' | 'topic' | 'difficulty';
  contentStatus: 'checked' | 'demo';
  checkedOn?: string;
  status?: 'new' | 'done';
  score?: string;
  showKind?: boolean;
  /** Derived in lib/test-coverage.ts. Shown only when it says something. */
  coverage?: string;
}

export default function TestRow({
  href,
  name,
  questions,
  minutes,
  kind,
  contentStatus,
  checkedOn,
  status = 'new',
  score,
  showKind = true,
  coverage,
}: TestRowProps) {
  const kindLabel = {
    'full-length': 'Full mock',
    sectional: 'Sectional',
    quick: 'Quick test',
    topic: 'Topic drill',
    difficulty: 'By level',
    practice: 'Demo',
  }[kind];

  return (
    <Link
      href={href}
      className="group test-row"
    >
      <div className="min-w-0 sm:pr-3">
        <div className="text-sm font-semibold leading-5 text-ink-900">{name}</div>
        <div className="test-row-meta">
          {showKind && <span className="bg-action-50 chip text-action-800">{kindLabel}</span>}
          <span>{questions} questions</span>
          <span>{minutes} minutes</span>
          <span className={`chip ${contentStatus === 'checked' ? 'bg-live-50 text-live-800' : 'bg-ink-100 text-ink-700'}`}>
            {contentStatus === 'checked' ? 'Syllabus checked' : 'Practice demo'}
          </span>
          {checkedOn && <span>Checked {checkedOn}</span>}
        </div>
        {/* A test named "Full mock" that is 110 of 170 official questions has
            to say so where the person is deciding whether to start it, not in a
            paragraph further down the page. */}
        {coverage && (
          <div className="mt-1.5 text-xs font-medium text-ink-700">{coverage}</div>
        )}
      </div>
      {status === 'done' ? (
        <div className="flex items-center justify-between gap-2 sm:justify-end">
          <span className="bg-ink-100 px-2 py-1 text-xs font-semibold text-ink-700">Score {score}</span>
          <span className="flex min-h-10 items-center border border-ink-200 px-3 text-xs font-semibold text-ink-900 transition group-hover:border-ink-900">
            Retake
          </span>
        </div>
      ) : (
        <span className="test-row-cta">
          {contentStatus === 'checked' ? 'Start test →' : 'Try demo →'}
        </span>
      )}
    </Link>
  );
}
