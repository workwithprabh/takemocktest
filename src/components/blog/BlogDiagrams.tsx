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
  | 'banking-tier-ladder'
  | 'shared-sections-map'
  | 'corpus-two-cuts'
  | 'one-skill-many-names';

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
          <text x={scale(p.v)} y={y + 28} fontSize="10" fill={INK[700]} textAnchor="middle">{p.sub}</text>
        </g>
      ))}
      <text x={(x0 + x1) / 2} y="140" fontSize="10" fill={INK[500]} textAnchor="middle">Example ratio shown: 1 mark per question, 0.25 deducted for a wrong answer</text>
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

// Real section lists from src/lib/exams.ts, not an illustration: SSC Selection
// Post's four sections all appear in SSC CHSL's nine, which is what "the
// smaller exam is fully contained" means when the audit counts 1,044 such
// pairs.
function SharedSectionsMap() {
  const chsl = [
    'General Intelligence',
    'General Awareness',
    'Quantitative Aptitude',
    'English Language',
    'Mathematical Abilities',
    'Reasoning and General Intelligence',
    'English Language and Comprehension',
    'Computer Knowledge Test',
    'Skill Test/Typing Test',
  ];
  const selectionPost = ['General Intelligence', 'General Awareness', 'Quantitative Aptitude', 'English Language'];
  const rowH = 26;
  const top = 46;
  const leftX = 20;
  const rightX = 330;
  const boxW = 210;
  return (
    <svg viewBox="0 0 560 300" width="100%" role="img" aria-label="SSC CHSL's nine sections beside SSC Selection Post's four, with lines joining the four names that appear on both">
      <text x={leftX} y="24" fontSize="11" fill={INK[900]} fontWeight="600">SSC CHSL (9 sections)</text>
      <text x={rightX} y="24" fontSize="11" fill={INK[900]} fontWeight="600">SSC Selection Post (4)</text>
      {chsl.map((name, i) => {
        const shared = selectionPost.includes(name);
        const y = top + i * rowH;
        return (
          <g key={name}>
            <rect x={leftX} y={y} width={boxW} height={rowH - 5} fill={shared ? INK[900] : INK[50]} stroke={INK[300]} strokeWidth="1" />
            <text x={leftX + 8} y={y + 14} fontSize="9.5" fill={shared ? '#FFFFFF' : INK[500]}>{name}</text>
          </g>
        );
      })}
      {selectionPost.map((name, i) => {
        const y = top + i * rowH;
        const fromY = top + chsl.indexOf(name) * rowH + (rowH - 5) / 2;
        return (
          <g key={name}>
            <line x1={leftX + boxW} y1={fromY} x2={rightX} y2={y + (rowH - 5) / 2} stroke={INK[300]} strokeWidth="1" />
            <rect x={rightX} y={y} width={boxW} height={rowH - 5} fill={INK[900]} stroke={INK[900]} strokeWidth="1" />
            <text x={rightX + 8} y={y + 14} fontSize="9.5" fill="#FFFFFF">{name}</text>
          </g>
        );
      })}
      <text x={rightX} y={top + 4 * rowH + 22} fontSize="10" fill={INK[700]}>All 4 already sit inside CHSL.</text>
      <text x={rightX} y={top + 4 * rowH + 38} fontSize="10" fill={INK[700]}>Nothing new to start from scratch.</text>
      <text x={leftX} y="288" fontSize="9" fill={INK[300]}>Section names as published in each exam&apos;s official pattern.</text>
    </svg>
  );
}

// The same questions, cut two ways. A column is one exam's paper; a row is one
// topic across every exam. The site was built entirely on columns until the
// topic pages added rows.
function CorpusTwoCuts() {
  const cols = 9;
  const rows = 6;
  const cell = 30;
  const x0 = 90;
  const y0 = 44;
  const highlightCol = 3;
  const highlightRow = 2;
  return (
    <svg viewBox="0 0 560 260" width="100%" role="img" aria-label="A grid of questions with one column highlighted as a single exam paper and one row highlighted as a single topic drawn across every exam">
      <text x={x0} y="24" fontSize="11" fill={INK[900]} fontWeight="600">One question corpus, two cuts</text>
      {Array.from({ length: rows }).map((_, r) =>
        Array.from({ length: cols }).map((__, c) => {
          const onCol = c === highlightCol;
          const onRow = r === highlightRow;
          const fill = onCol && onRow ? INK[900] : onCol ? INK[500] : onRow ? INK[200] : INK[50];
          return (
            <rect
              key={`${r}-${c}`}
              x={x0 + c * cell}
              y={y0 + r * cell}
              width={cell - 4}
              height={cell - 4}
              fill={fill}
              stroke={INK[300]}
              strokeWidth="1"
            />
          );
        }),
      )}
      <text x={x0 + highlightCol * cell + (cell - 4) / 2} y={y0 - 8} fontSize="10" fill={INK[900]} textAnchor="middle" fontWeight="600">
        1 exam
      </text>
      <text x={x0 - 10} y={y0 + highlightRow * cell + 16} fontSize="10" fill={INK[900]} textAnchor="end" fontWeight="600">
        1 topic
      </text>
      <text x={x0} y={y0 + rows * cell + 22} fontSize="10" fill={INK[700]}>
        A column is a mock test. A row is a topic pooled across every exam that asks it.
      </text>
      <text x={x0} y={y0 + rows * cell + 40} fontSize="10" fill={INK[700]}>
        Same questions either way; the row is the one this site could not offer before.
      </text>
    </svg>
  );
}

// Every label here is a real section name from a live exam pattern. They are
// all the same skill under different letterheads.
function OneSkillManyNames() {
  const names = [
    'General Intelligence and Reasoning',
    'Logical Reasoning',
    'Reasoning Ability',
    'Test of Reasoning',
    'Abstract Reasoning',
    'Analytical Reasoning',
    'Logical Intelligence',
    'Intelligence and Critical Reasoning',
  ];
  const boxW = 200;
  const boxH = 22;
  const x0 = 16;
  const y0 = 30;
  const gap = 26;
  const hubX = 330;
  const hubY = 118;
  return (
    <svg viewBox="0 0 560 260" width="100%" role="img" aria-label="Eight different section names from real exam patterns all converging on a single logical reasoning skill">
      {names.map((name, i) => {
        const y = y0 + i * gap;
        return (
          <g key={name}>
            <rect x={x0} y={y} width={boxW} height={boxH} fill={INK[50]} stroke={INK[300]} strokeWidth="1" />
            <text x={x0 + 7} y={y + 15} fontSize="9" fill={INK[700]}>{name}</text>
            <line x1={x0 + boxW} y1={y + boxH / 2} x2={hubX} y2={hubY + 26} stroke={INK[200]} strokeWidth="1" />
          </g>
        );
      })}
      <rect x={hubX} y={hubY} width={190} height={52} fill={INK[900]} />
      <text x={hubX + 95} y={hubY + 22} fontSize="12" fill="#FFFFFF" textAnchor="middle" fontWeight="600">One skill</text>
      <text x={hubX + 95} y={hubY + 40} fontSize="10" fill={INK[200]} textAnchor="middle">graded on one scale</text>
      <text x={hubX} y={hubY + 78} fontSize="10" fill={INK[700]}>8 of the 23 names in use.</text>
      <text x={hubX} y={hubY + 94} fontSize="10" fill={INK[700]}>A syllogism does not change</text>
      <text x={hubX} y={hubY + 110} fontSize="10" fill={INK[700]}>because the heading did.</text>
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
  'shared-sections-map': SharedSectionsMap,
  'corpus-two-cuts': CorpusTwoCuts,
  'one-skill-many-names': OneSkillManyNames,
};

export function BlogDiagram({ id, caption }: { id: BlogDiagramId; caption: string }) {
  const Diagram = DIAGRAMS[id];
  return (
    <figure className="border border-ink-200 bg-white p-4">
      <Diagram />
      <figcaption className="mt-3 text-center text-xs leading-5 text-ink-700">{caption}</figcaption>
    </figure>
  );
}
