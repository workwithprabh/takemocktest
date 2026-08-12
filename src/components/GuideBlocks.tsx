import type { GuideBlock } from '@/lib/exam-guides';

// Minimal **bold** parser for guide-page prose (dates, key numbers). Not a
// general markdown renderer — matches only the one inline emphasis pattern
// this content actually uses, same "no new dependency" approach as
// BlogRichText.tsx's link parser.
function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*([^*]+)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>,
      )}
    </>
  );
}

function Block({ block }: { block: GuideBlock }) {
  switch (block.type) {
    case 'callout':
      return (
        <section className="border border-ink-200 bg-ink-50 p-5">
          {block.heading && <h2 className="mb-2 text-lg font-semibold text-ink-900">{block.heading}</h2>}
          <p><RichText text={block.text} /></p>
        </section>
      );

    case 'paragraph':
      return block.tone === 'boxed' ? (
        <section className="border border-ink-200 bg-white p-5">
          {block.heading && <h2 className="mb-2 text-lg font-semibold text-ink-900">{block.heading}</h2>}
          <p><RichText text={block.text} /></p>
        </section>
      ) : (
        <section>
          {block.heading && <h2 className="mb-2 text-lg font-semibold text-ink-900">{block.heading}</h2>}
          <p><RichText text={block.text} /></p>
        </section>
      );

    case 'statCards':
      return (
        <section>
          {block.heading && <h2 className="mb-3 text-lg font-semibold text-ink-900">{block.heading}</h2>}
          <div className="grid gap-px border border-ink-200 bg-ink-200 sm:grid-cols-2">
            {block.cards.map((card, i) => (
              <div key={i} className="bg-white p-5">
                <span className="block text-xs font-semibold uppercase tracking-wide text-ink-500">{card.label}</span>
                <strong className="mt-1 block text-xl text-ink-900">{card.value}</strong>
              </div>
            ))}
          </div>
          {block.note && <p className="mt-2 text-ink-500">{block.note}</p>}
        </section>
      );

    case 'table':
      return (
        <section>
          {block.heading && <h2 className="mb-3 text-lg font-semibold text-ink-900">{block.heading}</h2>}
          <div className="overflow-x-auto border border-ink-200 bg-white">
            <table className="w-full text-left" style={block.minWidth ? { minWidth: block.minWidth } : undefined}>
              <thead className="border-b border-ink-200 bg-ink-50 text-ink-900">
                <tr>
                  {block.headers.map((h) => (
                    <th key={h} className="px-4 py-3 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-200">
                {block.rows.map((row, i) => (
                  <tr key={i}>
                    {row.map((cell, j) => (
                      <td key={j} className={j === 0 ? 'px-4 py-3 font-semibold text-ink-900' : 'px-4 py-3'}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.note && <p className="mt-2 text-ink-500">{block.note}</p>}
        </section>
      );

    case 'keyValueGrid':
      return (
        <section>
          {block.heading && <h2 className="mb-3 text-lg font-semibold text-ink-900">{block.heading}</h2>}
          <ul className="grid gap-px border border-ink-200 bg-ink-200 sm:grid-cols-2">
            {block.items.map((item) => (
              <li key={item.label} className="bg-white p-4">
                <span className="block font-semibold text-ink-900">{item.label}</span>
                <span className="text-ink-500">{item.value}</span>
              </li>
            ))}
          </ul>
          {block.note && <p className="mt-2 text-ink-500">{block.note}</p>}
        </section>
      );

    case 'infoBlocks':
      return (
        <section>
          {block.heading && <h2 className="mb-3 text-lg font-semibold text-ink-900">{block.heading}</h2>}
          <div className="space-y-px border border-ink-200 bg-ink-200">
            {block.items.map((item) => (
              <div key={item.title} className="bg-white p-4">
                <h3 className="font-semibold text-ink-900">{item.title}</h3>
                <p className="mt-1"><RichText text={item.text} /></p>
              </div>
            ))}
          </div>
          {block.note && <p className="mt-2 text-ink-500">{block.note}</p>}
        </section>
      );

    case 'numberedStages':
      return (
        <section>
          {block.heading && <h2 className="mb-3 text-lg font-semibold text-ink-900">{block.heading}</h2>}
          <ol className="space-y-px border border-ink-200 bg-ink-200">
            {block.items.map((item, i) => (
              <li key={item.title} className="grid gap-3 bg-white p-5 sm:grid-cols-[3rem_1fr]">
                <span className="text-sm font-semibold text-ink-400" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-semibold text-ink-900">{item.title}</h3>
                  <p className="mt-1"><RichText text={item.text} /></p>
                </div>
              </li>
            ))}
          </ol>
        </section>
      );

    case 'topicSections':
      return (
        <div className="space-y-4">
          {block.sections.map(({ section, pattern, topics }) => (
            <section key={section} className="border border-ink-200 bg-white p-5">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h2 className="text-lg font-semibold text-ink-900">{section}</h2>
                {pattern && <span className="bg-ink-100 px-2 py-1 text-xs font-semibold text-ink-700">{pattern}</span>}
              </div>
              <ul className="mt-3 grid gap-2 text-sm leading-6 text-ink-500 sm:grid-cols-2">
                {topics.map((topic) => <li key={topic}>&bull; {topic}</li>)}
              </ul>
            </section>
          ))}
        </div>
      );

    case 'recordCards':
      return (
        <section>
          {block.heading && <h2 className="mb-3 text-lg font-semibold text-ink-900">{block.heading}</h2>}
          <div className="grid gap-4 sm:grid-cols-2">
            {block.records.map((record, i) => (
              <article key={i} className="flex min-h-56 flex-col border border-ink-200 bg-white p-5">
                <span className="mb-5 inline-block w-fit bg-ink-100 px-2.5 py-1 text-xs font-semibold text-ink-700">{record.badge}</span>
                <h3 className="mb-2 text-lg font-semibold text-ink-900">{record.title}</h3>
                <dl className="mb-5 space-y-2 text-sm text-ink-500">
                  {record.meta.map((m) => (
                    <div key={m.label} className="flex gap-2">
                      <dt className="font-medium text-ink-700">{m.label}:</dt>
                      <dd>{m.value}</dd>
                    </div>
                  ))}
                </dl>
                <a
                  href={record.linkUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex min-h-11 items-center justify-center border border-ink-200 px-4 py-2.5 text-sm font-semibold text-ink-900 hover:bg-ink-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink-900"
                >
                  {record.linkLabel} <span aria-hidden="true" className="ml-2">↗</span>
                </a>
              </article>
            ))}
          </div>
          {block.note && <p className="mt-2 text-ink-500">{block.note}</p>}
        </section>
      );

    case 'sourceNote':
      return (
        <section className={block.tone === 'plain' ? 'border border-ink-200 bg-white p-5' : 'border border-ink-200 bg-ink-50 p-5'}>
          {block.heading && <h2 className="mb-2 text-lg font-semibold text-ink-900">{block.heading}</h2>}
          <p>
            {block.text}{' '}
            <a className="font-semibold text-ink-900 underline" href={block.sourceUrl} target="_blank" rel="noreferrer">
              {block.sourceLabel}
            </a>.
          </p>
        </section>
      );
  }
}

export default function GuideBlocks({ blocks }: { blocks: GuideBlock[] }) {
  return (
    <div className="space-y-6 text-sm leading-6 text-ink-700">
      {blocks.map((block, i) => <Block key={i} block={block} />)}
    </div>
  );
}
