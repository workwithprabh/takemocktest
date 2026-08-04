'use client';

// The signature UI element carried over from the prototype: answer options
// styled as fillable OMR bubbles, not generic radio buttons.
export default function OMRBubble({
  letter,
  label,
  selected,
  onSelect,
}: {
  letter: string;
  label: string;
  selected: boolean;
  onSelect?: () => void;
}) {
  const className = `flex w-full items-center gap-3.5 border-[1.5px] p-3.5 mb-2.5 text-left transition ${
    onSelect ? 'cursor-pointer hover:border-ink-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-ink-900' : ''
  } ${selected ? 'border-ink-900 bg-ink-100' : 'border-ink-200'}`;

  const content = (
    <>
      <div
        style={selected ? { animation: 'bubble-in 150ms ease-out' } : undefined}
        className={`w-7 h-7 border-2 flex items-center justify-center font-sans font-bold text-xs flex-shrink-0 ${
          selected ? 'bg-ink-900 border-ink-900 text-white' : 'border-ink-300 text-ink-500'
        }`}
      >
        {letter}
      </div>
      <div className="text-sm font-medium text-ink-900">{label}</div>
    </>
  );

  if (!onSelect) {
    return <div className={className}>{content}</div>;
  }

  return (
    <button
      type="button"
      role="radio"
      aria-checked={selected}
      onClick={onSelect}
      className={className}
    >
      {content}
    </button>
  );
}
