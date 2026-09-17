const ROWS = [
  { number: '01', selected: 1 },
  { number: '02', selected: 3 },
  { number: '03', selected: 0 },
  { number: '04', selected: 2 },
];

export default function MockTestHeroVisual({ examName }: { examName: string }) {
  return (
    <figure className="hidden border border-ink-200 bg-white p-5 shadow-sm md:block" aria-label={`${examName} answer-sheet preview`}>
      <div className="flex items-center justify-between border-b border-ink-200 pb-3">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-action-700">Test workspace</p>
          <p className="mt-1 text-sm font-bold text-ink-900">Answer sheet preview</p>
        </div>
        <span className="bg-ink-100 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-ink-700">OMR</span>
      </div>
      <div className="mt-5 space-y-3" aria-hidden="true">
        {ROWS.map((row) => (
          <div key={row.number} className="grid grid-cols-[2rem_repeat(4,1fr)] items-center gap-3">
            <span className="text-xs font-semibold text-ink-500">{row.number}</span>
            {['A', 'B', 'C', 'D'].map((option, index) => (
              <span
                key={option}
                className={`hero-bubble ${
                  row.selected === index ? 'border-ink-900 bg-ink-900 text-white' : 'border-ink-300 text-ink-500'
                }`}
              >
                {option}
              </span>
            ))}
          </div>
        ))}
      </div>
      <figcaption className="mt-5 border-t border-ink-200 pt-3 text-xs leading-5 text-ink-600">
        Familiar test controls, clear review states, and instant section-wise results.
      </figcaption>
    </figure>
  );
}
