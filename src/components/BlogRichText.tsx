// Parses a lightweight markdown-style link syntax, [label](/path), inside blog
// paragraph text and renders it as a real Next.js <Link>, so blog content can
// genuinely interlink to exam pages and other posts instead of being plain text.
// Paths in blog.ts are written without the /:country prefix; it's added here.
import Link from 'next/link';

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

export function BlogRichText({ text, country }: { text: string; country: string }) {
  const nodes: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  LINK_PATTERN.lastIndex = 0;
  while ((match = LINK_PATTERN.exec(text)) !== null) {
    const [full, label, path] = match;
    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }
    const href = path.startsWith('http') ? path : `/${country}${path}`;
    nodes.push(
      <Link key={key++} href={href} className="underline underline-offset-2 decoration-ink-300 hover:decoration-ink-900 text-ink-900 font-medium">
        {label}
      </Link>,
    );
    lastIndex = match.index + full.length;
  }
  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return <>{nodes}</>;
}
