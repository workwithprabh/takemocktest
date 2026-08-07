// Renders the BlogBlock tagged union (lib/blog.ts) into the monochrome ink
// design system: zero border-radius, no color outside ink-50..900, no
// font-mono outside timer/score digits. Only paragraph text runs through
// BlogRichText for internal [label](/path) links; list/table/callout content
// is plain text by design (none of it currently needs a link).
import { BlogRichText } from '@/components/BlogRichText';
import { BlogDiagram } from '@/components/blog/BlogDiagrams';
import type { BlogBlock } from '@/lib/blog';

export function BlogBody({ blocks, country }: { blocks: BlogBlock[]; country: string }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'paragraph':
            return (
              <div key={i}>
                {block.heading && <h2 className="font-sans font-semibold text-lg mb-2 text-ink-900">{block.heading}</h2>}
                <p className="text-sm text-ink-500 leading-relaxed">
                  <BlogRichText text={block.text} country={country} />
                </p>
              </div>
            );

          case 'takeaways':
            return (
              <div key={i} className="border-l-4 border-ink-900 bg-ink-50 p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-ink-900 mb-2">Key takeaways</div>
                <ul className="space-y-1.5">
                  {block.items.map((item, j) => (
                    <li key={j} className="flex gap-2.5 text-sm text-ink-700 leading-snug">
                      <span className="mt-1.5 h-1.5 w-1.5 bg-ink-900 shrink-0" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );

          case 'list':
            return (
              <div key={i}>
                {block.heading && <h2 className="font-sans font-semibold text-lg mb-2 text-ink-900">{block.heading}</h2>}
                {block.ordered ? (
                  <ol className="space-y-1.5">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-ink-500 leading-snug">
                        <span className="font-semibold text-ink-900 shrink-0">{j + 1}.</span>
                        {item}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="space-y-1.5">
                    {block.items.map((item, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-ink-500 leading-snug">
                        <span className="mt-1.5 h-1.5 w-1.5 border border-ink-900 shrink-0" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );

          case 'callout':
            return (
              <blockquote key={i} className="border border-ink-900 p-5 text-base font-medium text-ink-900 leading-relaxed">
                {block.text}
              </blockquote>
            );

          case 'table':
            return (
              <div key={i}>
                {block.heading && <h2 className="font-sans font-semibold text-lg mb-2 text-ink-900">{block.heading}</h2>}
                <div className="overflow-x-auto border border-ink-200">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-ink-900">
                        {block.headers.map((h, j) => (
                          <th key={j} className="text-left font-semibold text-ink-50 px-3 py-2 whitespace-nowrap">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, r) => (
                        <tr key={r} className={r % 2 === 1 ? 'bg-ink-50' : 'bg-white'}>
                          {row.map((cell, c) => (
                            <td key={c} className="text-ink-500 px-3 py-2 border-t border-ink-200 align-top">{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );

          case 'diagram':
            return <BlogDiagram key={i} id={block.id} caption={block.caption} />;

          default:
            return null;
        }
      })}
    </div>
  );
}
