// Original inline SVG diagrams for blog posts, drawn in the site's own ink
// palette (no colors outside tailwind.config.ts's ink-50..900 scale; correct/
// incorrect are reserved for the results screen and never used here). These
// stand in for photography: no stock images, nothing decorative for its own
// sake, each one visualizes the actual concept the post is explaining. See
// BlogDiagramId in lib/blog.ts for the id -> component mapping.

const INK = {
  50: '#F5F6F9',
  100: '#E7E9F0',
  200: '#C9CEDD',
  300: '#9AA3BE',
  500: '#3F4A70',
  700: '#1B2340',
  900: '#0A0F20',
};

export type BlogDiagramId =
  | 'study-timetable-grid'
  | 'negative-marking-math'
  | 'time-budget-timeline'
  | 'section-accuracy-bars'
  | 'sectional-vs-composite'
  | 'qualifying-merit-funnel'
  | 'banking-tier-ladder';

function StudyTimetableGrid() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const rows = ['Morning', 'Afternoon', 'Evening'];
  const cellW = 68;
  const cellH = 46;
  const originX = 64;
  const originY = 30;
  // 1 = fixed commitment (sleep/commute/class), 2 = study block, 0 = free/buffer
  const grid = [
    [1, 1, 1, 1, 1, 0, 1],
    [2, 2, 2, 2, 2, 0, 0],
    [2, 2, 2, 2, 0, 2, 0],
  ];
  return (
    <svg viewBox="0 0 560 200" width="100%" role="img" aria-label="Weekly timetable grid with fixed commitments blocked first and study slots fit around them">
      {rows.map((row, r) => (
        <text key={row} x="8" y={originY + r * cellH + cellH / 2 + 4} fontSize="11" fill={INK[500]}>{row}</text>
      ))}
      {days.map((day, c) => (
        <text key={day} x={originX + c * cellW + cellW / 2} y="18" fontSize="11" fill={INK[500]} textAnchor="middle">{day}</text>
      ))}
      {grid.map((row, r) =>
        row.map((val, c) => (
          <rect
            key={`${r}-${c}`}
            x={originX + c * cellW}
            y={originY + r * cellH}
            width={cellW - 3}
            height={cellH - 3}
            fill={val === 2 ? INK[900] : val === 1 ? INK[200] : INK[50]}
            stroke={INK[300]}
            strokeWidth="1"
          />
        )),
      )}
      <rect x="64" y="184" width="12" height="12" fill={INK[200]} />
      <text x="82" y="194" fontSize="11" fill={INK[500]}>Fixed commitments</text>
      <rect x="220" y="184" width="12" height="12" fill={INK[900]} />
      <text x="238" y="194" fontSize="11" fill={INK[500]}>Study block</text>
    </svg>
  );
}

function NegativeMarkingMath() {
  // number line from -1 to +1
  const x0 = 40;
  const x1 = 520;
  const y = 90;
  const scale = (v: number) => x0 + ((v + 1) / 2) * (x1 - x0);
  const points: { v: number; label: string; sub: string }[] = [
    { v: -0.25, label: '−0.25', sub: 'Wrong answer' },
    { v: 0, label: '0', sub: 'Unattempted' },
    { v: 1, label: '+1', sub: 'Correct answer' },
  ];
  return (
    <svg viewBox="0 0 560 160" width="100%" role="img" aria-label="Number line showing marks for a correct answer, a wrong answer, and an unattempted question under 0.25 negative marking">
      <line x1={x0} y1={y} x2={x1} y2={y} stroke={INK[300]} strokeWidth="2" />
      {points.map((p) => (
        <g key={p.label}>
          <circle cx={scale(p.v)} cy={y} r="6" fill={INK[900]} />
          <text x={scale(p.v)} y={y - 16} fontSize="13" fill={INK[900]} textAnchor="middle" fontWeight="600">{p.label}</text>
          <text x={scale(p.v)} y={y + 28} fontSize="10" fill={INK[500]} textAnchor="middle">{p.sub}</text>
        </g>
      ))}
      <text x={(x0 + x1) / 2} y="140" fontSize="10" fill={INK[300]} textAnchor="middle">Example ratio shown: 1 mark per question, 0.25 deducted for a wrong answer</text>
    </svg>
  );
}

function TimeBudgetTimeline() {
  const segments = [
    { label: 'Section A', minutes: 20 },
    { label: 'Section B', minutes: 20 },
    { label: 'Section C', minutes: 20 },
  ];
  const totalW = 480;
  const x0 = 40;
  const y = 70;
  const h = 28;
  let cursor = x0;
  return (
    <svg viewBox="0 0 560 140" width="100%" role="img" aria-label="Timeline split into three section checkpoints across a timed test">
      {segments.map((s) => {
        const w = (s.minutes / 60) * totalW;
        const rect = { x: cursor, y, width: w - 2 };
        cursor += w;
        return (
          <g key={s.label}>
            <rect x={rect.x} y={rect.y} width={rect.width} height={h} fill={INK[100]} stroke={INK[300]} strokeWidth="1" />
            <text x={rect.x + rect.width / 2} y={y + h / 2 + 4} fontSize="11" fill={INK[700]} textAnchor="middle">{s.label}</text>
            <text x={rect.x + rect.width / 2} y={y + h + 18} fontSize="10" fill={INK[500]} textAnchor="middle">{`${s.minutes} min`}</text>
          </g>
        );
      })}
      <line x1={x0 + totalW / 2} y1={y - 14} x2={x0 + totalW / 2} y2={y + h + 30} stroke={INK[900]} strokeWidth="1.5" strokeDasharray="3 3" />
      <text x={x0 + totalW / 2} y={y - 20} fontSize="10" fill={INK[900]} textAnchor="middle" fontWeight="600">Checkpoint: on pace?</text>
    </svg>
  );
}

function SectionAccuracyBars() {
  const bars = [
    { label: 'Quant', pct: 58 },
    { label: 'Reasoning', pct: 81 },
    { label: 'English', pct: 70 },
    { label: 'GA', pct: 45 },
  ];
  const chartH = 120;
  const barW = 60;
  const gap = 40;
  const x0 = 60;
  return (
    <svg viewBox="0 0 560 190" width="100%" role="img" aria-label="Example bar chart of section-wise accuracy after a mock test, used to find the weakest section">
      <line x1={x0 - 10} y1={20} x2={x0 - 10} y2={20 + chartH} stroke={INK[300]} strokeWidth="1" />
      <line x1={x0 - 10} y1={20 + chartH} x2={x0 + (barW + gap) * bars.length} y2={20 + chartH} stroke={INK[300]} strokeWidth="1" />
      {bars.map((b, i) => {
        const h = (b.pct / 100) * chartH;
        const x = x0 + i * (barW + gap);
        const y = 20 + chartH - h;
        return (
          <g key={b.label}>
            <rect x={x} y={y} width={barW} height={h} fill={INK[900]} />
            <text x={x + barW / 2} y={y - 8} fontSize="11" fill={INK[900]} textAnchor="middle" fontWeight="600">{`${b.pct}%`}</text>
            <text x={x + barW / 2} y={20 + chartH + 18} fontSize="11" fill={INK[500]} textAnchor="middle">{b.label}</text>
          </g>
        );
      })}
      <text x={x0 - 10} y="172" fontSize="9" fill={INK[300]}>Illustrative example, not real user data</text>
    </svg>
  );
}

function SectionalVsComposite() {
  const x0 = 100;
  const w = 420;
  return (
    <svg viewBox="0 0 560 150" width="100%" role="img" aria-label="Comparison of a sectional-lock timer split into fixed windows versus one composite timer covering the whole paper">
      <text x="10" y="34" fontSize="11" fill={INK[500]}>Sectional lock</text>
      {[0, 1, 2].map((i) => (
        <rect key={i} x={x0 + (i * w) / 3} y="20" width={w / 3 - 2} height="26" fill={i % 2 === 0 ? INK[900] : INK[500]} />
      ))}
      <text x="10" y="94" fontSize="11" fill={INK[500]}>Composite timer</text>
      <rect x={x0} y="80" width={w} height="26" fill={INK[200]} stroke={INK[300]} />
      <text x={x0 + w / 2} y="98" fontSize="10" fill={INK[700]} textAnchor="middle">One clock, split however you like</text>
      <text x={x0} y="130" fontSize="9" fill={INK[300]}>Each sectional-lock block is a separate fixed window that cannot borrow time from the others</text>
    </svg>
  );
}

function QualifyingMeritFunnel() {
  return (
    <svg viewBox="0 0 560 200" width="100%" role="img" aria-label="Diagram of qualifying-only sections that need a cutoff but don't carry marks forward, versus merit sections that decide the final ranking">
      <rect x="30" y="20" width="220" height="50" fill={INK[100]} stroke={INK[300]} />
      <text x="140" y="42" fontSize="11" fill={INK[700]} textAnchor="middle">Qualifying-only sections</text>
      <text x="140" y="58" fontSize="10" fill={INK[500]} textAnchor="middle">Clear the cutoff</text>
      <line x1="140" y1="70" x2="140" y2="100" stroke={INK[300]} strokeWidth="1.5" markerEnd="url(#arrow-gray)" />
      <text x="150" y="95" fontSize="10" fill={INK[500]}>marks stop here</text>

      <rect x="310" y="20" width="220" height="50" fill={INK[900]} />
      <text x="420" y="42" fontSize="11" fill={INK[50]} textAnchor="middle">Merit sections</text>
      <text x="420" y="58" fontSize="10" fill={INK[100]} textAnchor="middle">Every mark counts</text>
      <line x1="420" y1="70" x2="420" y2="150" stroke={INK[900]} strokeWidth="1.5" markerEnd="url(#arrow-dark)" />

      <rect x="310" y="150" width="220" height="34" fill={INK[100]} stroke={INK[900]} />
      <text x="420" y="171" fontSize="11" fill={INK[900]} textAnchor="middle" fontWeight="600">Decides final ranking</text>

      <defs>
        <marker id="arrow-gray" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={INK[300]} />
        </marker>
        <marker id="arrow-dark" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto">
          <path d="M0,0 L8,4 L0,8 Z" fill={INK[900]} />
        </marker>
      </defs>
    </svg>
  );
}

function BankingTierLadder() {
  const tiers = [
    { label: 'Central bank / regulator (Grade A, B)', w: 200 },
    { label: 'Specialist officer', w: 260 },
    { label: 'Regional rural bank', w: 320 },
    { label: 'Clerk / PO', w: 380 },
  ];
  const stepH = 34;
  return (
    <svg viewBox="0 0 560 180" width="100%" role="img" aria-label="Ladder of banking exam tiers from clerk and PO entry level up to specialist officer, regional rural bank, and central bank regulator roles">
      {tiers.map((t, i) => {
        const y = i * (stepH + 8) + 10;
        return (
          <g key={t.label}>
            <rect x="10" y={y} width={t.w} height={stepH} fill={INK[900]} opacity={1 - i * 0.22} stroke={INK[300]} />
            <text x="22" y={y + stepH / 2 + 4} fontSize="11" fill={i < 2 ? INK[50] : INK[900]}>{t.label}</text>
          </g>
        );
      })}
    </svg>
  );
}

const DIAGRAMS: Record<BlogDiagramId, () => React.JSX.Element> = {
  'study-timetable-grid': StudyTimetableGrid,
  'negative-marking-math': NegativeMarkingMath,
  'time-budget-timeline': TimeBudgetTimeline,
  'section-accuracy-bars': SectionAccuracyBars,
  'sectional-vs-composite': SectionalVsComposite,
  'qualifying-merit-funnel': QualifyingMeritFunnel,
  'banking-tier-ladder': BankingTierLadder,
};

export function BlogDiagram({ id, caption }: { id: BlogDiagramId; caption: string }) {
  const Diagram = DIAGRAMS[id];
  return (
    <figure className="border border-ink-200 bg-white p-4">
      <Diagram />
      <figcaption className="text-xs text-ink-500 mt-3 text-center">{caption}</figcaption>
    </figure>
  );
}
