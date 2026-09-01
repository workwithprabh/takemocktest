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
      className="group flex flex-col items-stretch gap-3 border-b border-ink-200 py-4 transition last:border-none hover:bg-ink-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-900 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="min-w-0 sm:pr-3">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <span className="bg-action-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-action-800">{kindLabel}</span>
          <span className={`px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${contentStatus === 'checked' ? 'bg-live-50 text-live-800' : 'bg-ink-100 text-ink-700'}`}>
            {contentStatus === 'checked' ? 'Syllabus checked' : 'Practice demo'}
          </span>
        </div>
        <div className="text-sm font-semibold leading-5 text-ink-900">{name}</div>
        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-ink-600">
          <span>{questions} questions</span>
          <span>{minutes} minutes</span>
          <span>{checkedOn ? `Checked ${checkedOn}` : 'Demo scoring'}</span>
        </div>
      </div>
      {status === 'done' ? (
        <div className="flex items-center justify-between gap-2 sm:justify-end">
          <span className="text-[10px] font-semibold px-2 py-0.5 bg-ink-100 text-ink-700">{score}</span>
          <span className="border border-ink-200 px-3 py-2 text-xs font-semibold text-ink-900 transition group-hover:border-ink-900">
            Retake
          </span>
        </div>
      ) : (
        <span className="flex min-h-10 items-center justify-center bg-ink-900 px-4 text-xs font-semibold text-white transition group-hover:bg-ink-700">
          {contentStatus === 'checked' ? 'Start test →' : 'Try demo →'}
        </span>
      )}
    </Link>
  );
}
