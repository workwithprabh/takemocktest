import Link from 'next/link';

interface TestRowProps {
  href: string;
  name: string;
  questions: number;
  minutes: number;
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
  contentStatus,
  checkedOn,
  status = 'new',
  score,
}: TestRowProps) {
  return (
    <Link
      href={href}
      className="group flex items-center justify-between border-b border-ink-200 px-2 py-3.5 transition last:border-none hover:bg-ink-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-900"
    >
      <div className="pr-3">
        <div className="mb-1 flex flex-wrap items-center gap-2">
          <div className="font-semibold text-sm text-ink-900">{name}</div>
          <span className="bg-ink-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-ink-700">
            {contentStatus === 'checked' ? 'Syllabus checked' : 'Practice demo'}
          </span>
        </div>
        <div className="text-xs text-ink-500">
          {questions} Qs · {minutes} min
          {checkedOn ? ` · checked ${checkedOn}` : ' · demo scoring'}
        </div>
      </div>
      {status === 'done' ? (
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-semibold px-2 py-0.5 bg-ink-100 text-ink-700">{score}</span>
          <span className="border border-ink-200 px-3 py-2 text-xs font-semibold text-ink-900 transition group-hover:border-ink-900">
            Retake
          </span>
        </div>
      ) : (
        <span className="bg-ink-900 px-3.5 py-2 text-xs font-semibold text-white transition group-hover:bg-ink-700">
          {contentStatus === 'checked' ? 'Start' : 'Try demo'}
        </span>
      )}
    </Link>
  );
}
