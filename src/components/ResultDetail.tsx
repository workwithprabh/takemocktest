'use client';

import { useState } from 'react';
import { AttemptResult, QuestionResult } from '@/lib/attempts';

type ReviewFilter = 'all' | 'wrong' | 'unattempted' | 'correct' | 'partial';

// Same 80%/50% tiering the "Strong" / "Review" performance badges below
// already use (see performanceCue), so the ring's color and the topic
// badges read as one consistent scale rather than two separate systems.
// correct/incorrect are the two colors tailwind.config.ts reserves
// specifically for this screen; this is that reservation put to use.
function scoreTierColor(percent: number) {
  if (percent >= 80) return '#3F6B4E'; // correct
  if (percent < 40) return '#8C3A2E'; // incorrect
  return '#B85C00'; // attention-600
}

function ScoreRing({ percent }: { percent: number }) {
  const size = 128;
  const stroke = 12;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;
  const arcColor = scoreTierColor(percent);

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="-rotate-90"
      role="img"
      aria-label={`Overall score ${Math.round(percent)} percent`}
    >
      <title>{`Overall score: ${Math.round(percent)}%`}</title>
      <circle cx={size / 2} cy={size / 2} r={radius} stroke="#E7E9F0" strokeWidth={stroke} fill="none" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={arcColor}
        strokeWidth={stroke}
        strokeLinecap="round"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        style={{ transition: 'stroke-dashoffset 600ms ease-out' }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="font-mono font-bold"
        style={{ transform: 'rotate(90deg)', transformOrigin: 'center', fill: '#0A0F20', fontSize: 22 }}
      >
        {Math.round(percent)}%
      </text>
    </svg>
  );
}

function formatTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}m ${s}s`;
}

function performanceCue(correct: number, attempted: number, total: number) {
  if (attempted === 0) return { label: 'Not attempted', className: 'bg-ink-100 text-ink-700' };
  if (attempted / total < 0.5) return { label: 'Limited data', className: 'bg-ink-100 text-ink-700' };
  const accuracy = (correct / attempted) * 100;
  if (accuracy >= 80) return { label: 'Strong', className: 'bg-correct/10 text-correct' };
  if (accuracy < 50) return { label: 'Review', className: 'bg-incorrect/10 text-incorrect' };
  return { label: 'Developing', className: 'bg-ink-100 text-ink-700' };
}

function isCorrectQuestion(question: QuestionResult) {
  if (question.outcome) return question.outcome === 'correct';
  if (question.answerType === 'numerical') {
    return question.selectedIndex !== null && Number(question.selectedIndex) === Number(question.correctValue);
  }
  if (question.answerType === 'multi-select') {
    const selected = Array.isArray(question.selectedIndex) ? [...question.selectedIndex].sort() : [];
    const correct = [...(question.correctIndices ?? [])].sort();
    return selected.length === correct.length && selected.every((index, i) => index === correct[i]);
  }
  return question.selectedIndex === question.correctIndex;
}

function questionOutcome(question: QuestionResult): Exclude<ReviewFilter, 'all'> {
  if (question.selectedIndex === null || question.outcome === 'unattempted') return 'unattempted';
  if (question.outcome === 'partial') return 'partial';
  return isCorrectQuestion(question) ? 'correct' : 'wrong';
}

function QuestionIssueActions({
  attempt,
  question,
  index,
}: {
  attempt: AttemptResult;
  question: QuestionResult;
  index: number;
}) {
  const [copied, setCopied] = useState(false);
  const questionId = question.id ?? `${attempt.testId}-question-${index + 1}`;
  const selectedAnswer = question.selectedIndex === null
    ? 'Unattempted'
    : question.answerType === 'numerical'
      ? String(question.selectedIndex)
      : question.answerType === 'multi-select'
        ? (Array.isArray(question.selectedIndex) ? question.selectedIndex : []).map((index) => String.fromCharCode(65 + index)).join(', ')
      : `${String.fromCharCode(65 + Number(question.selectedIndex))}. ${question.options[Number(question.selectedIndex)]}`;
  const correctAnswer = question.answerType === 'numerical'
    ? String(question.correctValue)
    : question.answerType === 'multi-select'
      ? (question.correctIndices ?? []).map((index) => String.fromCharCode(65 + index)).join(', ')
    : `${String.fromCharCode(65 + question.correctIndex)}. ${question.options[question.correctIndex]}`;
  const details = [
    'TakeMockTest question issue',
    `Question ID: ${questionId}`,
    `Exam: ${attempt.examName}`,
    `Test: ${attempt.testName}`,
    `Question: ${question.question}`,
    `Selected answer: ${selectedAnswer}`,
    `Expected answer: ${correctAnswer}`,
    '',
    'Issue noticed:',
  ].join('\n');
  const reportHref = `mailto:info@takemocktest.com?subject=${encodeURIComponent(`Question issue: ${questionId}`)}&body=${encodeURIComponent(details)}`;

  const copyDetails = async () => {
    try {
      await navigator.clipboard.writeText(details);
      setCopied(true);
    } catch {
      window.prompt('Copy these question details:', details);
    }
  };

  return (
    <div className="flex flex-wrap gap-2">
      <a
        href={reportHref}
        className="bg-ink-900 px-3 py-2 text-xs font-semibold text-white transition hover:bg-ink-700"
        aria-label={`Report question ${index + 1} by email`}
      >
        Report question
      </a>
      <button
        type="button"
        onClick={copyDetails}
        className="border border-ink-200 px-3 py-2 text-xs font-semibold text-ink-900 transition hover:border-ink-900"
        aria-label={`Copy issue details for question ${index + 1}`}
      >
        {copied ? 'Details copied' : 'Copy details'}
      </button>
    </div>
  );
}

export default function ResultDetail({ attempt, actions }: { attempt: AttemptResult; actions?: React.ReactNode }) {
  const [reviewFilter, setReviewFilter] = useState<ReviewFilter>('all');
  const percent = attempt.maxScore > 0
    ? Math.max(0, Math.min(100, (attempt.score / attempt.maxScore) * 100))
    : 0;
  const attempted = Math.max(0, attempt.totalQuestions - attempt.unattempted);
  const accuracy = attempted > 0 ? Math.round((attempt.correct / attempted) * 100) : 0;
  const attemptRate = attempt.totalQuestions > 0 ? Math.round((attempted / attempt.totalQuestions) * 100) : 0;
  const questionsWithIndex = attempt.questions.map((question, index) => ({ question, index }));
  const filteredQuestions = reviewFilter === 'all'
    ? questionsWithIndex
    : questionsWithIndex.filter(({ question }) => questionOutcome(question) === reviewFilter);
  const reviewFilters: Array<{ value: ReviewFilter; label: string; count: number }> = [
    { value: 'all', label: 'All', count: attempt.totalQuestions },
    { value: 'wrong', label: 'Incorrect', count: attempt.wrong },
    { value: 'unattempted', label: 'Unattempted', count: attempt.unattempted },
    { value: 'correct', label: 'Correct', count: attempt.correct },
    ...(attempt.partial ? [{ value: 'partial' as const, label: 'Partial', count: attempt.partial }] : []),
  ];

  const sections = Array.from(new Set(attempt.questions.map((q) => q.section)));
  const sectionStats = sections.map((section) => {
    const qs = attempt.questions.filter((q) => q.section === section);
    const correct = qs.filter(isCorrectQuestion).length;
    const hasMarkData = qs.every((q) => typeof q.marks === 'number' && typeof q.score === 'number');
    const score = hasMarkData ? qs.reduce((total, q) => total + q.score!, 0) : 0;
    const maxScore = hasMarkData ? qs.reduce((total, q) => total + q.marks!, 0) : 0;
    return { section, correct, total: qs.length, hasMarkData, score, maxScore };
  });
  const topicStats = Array.from(
    attempt.questions.reduce((stats, question) => {
      const topic = question.topic ?? 'Other';
      const key = `${question.section}:${topic}`;
      const stat = stats.get(key) ?? {
        section: question.section,
        topic,
        total: 0,
        attempted: 0,
        correct: 0,
        timeSpentSec: 0,
      };
      stat.total += 1;
      stat.timeSpentSec += question.timeSpentSec ?? 0;
      if (question.selectedIndex !== null) {
        stat.attempted += 1;
        if (isCorrectQuestion(question)) stat.correct += 1;
      }
      stats.set(key, stat);
      return stats;
    }, new Map<string, {
      section: string;
      topic: string;
      total: number;
      attempted: number;
      correct: number;
      timeSpentSec: number;
    }>()),
  ).map(([, stat]) => stat);

  return (
    <div className="min-w-0">
      <section className="mb-6 min-w-0 border border-ink-200 bg-white" aria-labelledby="result-overview-heading">
        <div className="flex flex-col items-center gap-6 p-6 sm:flex-row sm:items-start sm:p-8">
          <ScoreRing percent={percent} />
          <div className="w-full flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-500">Performance overview</p>
            <h2 id="result-overview-heading" className="mt-2 flex flex-wrap items-baseline gap-x-1 text-2xl font-bold text-ink-900">
              {attempt.score.toFixed(2)} <span className="text-base font-medium text-ink-500">/ {attempt.maxScore} marks</span>
            </h2>
            <dl className="mt-5 grid grid-cols-2 border-y border-ink-200 sm:grid-cols-3">
              <div className="border-r border-ink-200 py-3 pr-3">
                <dt className="text-xs text-ink-500">Accuracy</dt>
                <dd className="mt-1 font-mono text-lg font-bold text-ink-900">{accuracy}%</dd>
              </div>
              <div className="py-3 pl-3 sm:border-r sm:border-ink-200 sm:px-3">
                <dt className="text-xs text-ink-500">Attempted</dt>
                <dd className="mt-1 font-mono text-lg font-bold text-ink-900">{attemptRate}%</dd>
              </div>
              <div className="col-span-2 border-t border-ink-200 py-3 sm:col-span-1 sm:border-t-0 sm:pl-3">
                <dt className="text-xs text-ink-500">Time taken</dt>
                <dd className="mt-1 font-mono text-lg font-bold text-ink-900">{formatTime(attempt.timeTakenSec)}</dd>
              </div>
            </dl>
            <p className="mt-3 text-xs text-ink-500">Accuracy is based on fully correct answers among attempted questions.</p>
          </div>
        </div>
        <div className={`grid border-t border-ink-200 bg-ink-50 ${attempt.partial ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-3'}`}>
          <div className="border-r border-ink-200 p-4 text-center">
            <div className="font-mono text-xl font-bold text-correct">{attempt.correct}</div>
            <div className="text-xs text-ink-500">Correct</div>
          </div>
          {Boolean(attempt.partial) && (
            <div className="border-r border-ink-200 p-4 text-center">
              <div className="text-xl font-mono font-bold text-ink-600">{attempt.partial}</div>
              <div className="text-xs text-ink-500">Partial</div>
            </div>
          )}
          <div className="border-r border-ink-200 p-4 text-center">
            <div className="text-xl font-mono font-bold text-incorrect">{attempt.wrong}</div>
            <div className="text-xs text-ink-500">Incorrect</div>
          </div>
          <div className="p-4 text-center">
            <div className="text-xl font-mono font-bold text-ink-400">{attempt.unattempted}</div>
            <div className="text-xs text-ink-500">Unattempted</div>
          </div>
        </div>
      </section>

      <div className="mb-8 flex flex-wrap items-center justify-between gap-3 border-b border-ink-200 pb-5 text-xs text-ink-600">
        <span>Submitted {new Date(attempt.submittedAt).toLocaleString()}</span>
        <a href="#answer-review" className="font-semibold text-action-700 underline underline-offset-4 hover:text-action-800">
          Review answers ↓
        </a>
      </div>

      {actions && <div className="mb-8 flex flex-wrap gap-3">{actions}</div>}

      <h2 className="mb-4 text-xl font-bold text-ink-900">Section-wise performance</h2>
      <div className="mb-10 grid gap-3 sm:grid-cols-2">
        {sectionStats.map((s) => {
          const sectionPercent = s.hasMarkData && s.maxScore > 0
            ? Math.max(0, Math.min(100, (s.score / s.maxScore) * 100))
            : s.total > 0 ? (s.correct / s.total) * 100 : 0;
          return (
            <div key={s.section} className="border border-ink-200 bg-white p-4">
              <div className="mb-1 flex min-w-0 flex-col gap-1 text-xs sm:flex-row sm:items-start sm:justify-between">
                <span className="font-medium text-ink-900">{s.section}</span>
                <span className="text-ink-500 sm:text-right">
                  {s.hasMarkData
                    ? `${s.score.toFixed(2)}/${s.maxScore.toFixed(2)} marks · ${s.correct}/${s.total} correct`
                    : `${s.correct}/${s.total}`}
                </span>
              </div>
              <div className="h-2 bg-ink-100 overflow-hidden">
                <div
                  className="h-full transition-all duration-500"
                  style={{ width: `${sectionPercent}%`, backgroundColor: scoreTierColor(sectionPercent) }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <details className="group mb-10 border border-ink-200 bg-white">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5">
          <span>
            <span className="block text-xl font-bold text-ink-900">Topic-wise analysis</span>
            <span className="mt-1 block text-xs text-ink-600">Open the detailed accuracy and time breakdown.</span>
          </span>
          <span className="text-xl text-ink-500 group-open:rotate-45" aria-hidden="true">+</span>
        </summary>
        <div className="space-y-6 border-t border-ink-200 p-5">
          {sections.map((section) => (
            <section key={section} aria-labelledby={`topics-${section.replaceAll(' ', '-').toLowerCase()}`}>
              <h3
                id={`topics-${section.replaceAll(' ', '-').toLowerCase()}`}
                className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink-500"
              >
                {section}
              </h3>
              <div className="grid gap-2 sm:grid-cols-2">
                {topicStats.filter((stat) => stat.section === section).map((stat) => {
                  const accuracy = stat.attempted > 0 ? Math.round((stat.correct / stat.attempted) * 100) : null;
                  const cue = performanceCue(stat.correct, stat.attempted, stat.total);
                  return (
                    <div key={stat.topic} className="border border-ink-200 bg-ink-50 p-3">
                      <div className="mb-3 flex items-start justify-between gap-3">
                        <span className="text-sm font-semibold text-ink-900">{stat.topic}</span>
                        <span className={`px-2 py-1 text-[10px] font-semibold uppercase tracking-wide ${cue.className}`}>
                          {cue.label}
                        </span>
                      </div>
                      <dl className="grid grid-cols-3 gap-2 text-xs">
                        <div>
                          <dt className="text-ink-500">Correct</dt>
                          <dd className="mt-1 font-mono font-semibold text-ink-900">{stat.correct}/{stat.total}</dd>
                        </div>
                        <div>
                          <dt className="text-ink-500">Accuracy</dt>
                          <dd className="mt-1 font-mono font-semibold text-ink-900">
                            {accuracy === null ? 'N/A' : `${accuracy}%`}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-ink-500">Time</dt>
                          <dd className="mt-1 font-mono font-semibold text-ink-900">
                            {stat.timeSpentSec > 0 ? formatTime(stat.timeSpentSec) : 'N/A'}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </details>

      <section id="answer-review" className="scroll-mt-24" aria-labelledby="answer-review-heading">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 id="answer-review-heading" className="text-xl font-bold text-ink-900">Answer review</h2>
          <p className="mt-1 text-xs text-ink-600">Open any question to see the correct answer, explanation, and source.</p>
        </div>
        <span className="text-xs font-semibold text-ink-700">Showing {filteredQuestions.length} of {attempt.totalQuestions}</span>
      </div>
      <div className="mb-4 flex gap-2 overflow-x-auto pb-1" role="group" aria-label="Filter answer review">
        {reviewFilters.map((filter) => (
          <button
            key={filter.value}
            type="button"
            onClick={() => setReviewFilter(filter.value)}
            aria-pressed={reviewFilter === filter.value}
            className={`flex-none border px-3 py-2 text-xs font-semibold transition ${
              reviewFilter === filter.value
                ? 'border-ink-900 bg-ink-900 text-white'
                : 'border-ink-200 bg-white text-ink-700 hover:border-ink-900 hover:text-ink-900'
            }`}
          >
            {filter.label} <span className="font-mono">{filter.count}</span>
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {filteredQuestions.map(({ question: q, index: i }) => {
          const outcome = questionOutcome(q);
          const isCorrect = outcome === 'correct';
          const isUnattempted = outcome === 'unattempted';
          const isPartial = outcome === 'partial';
          return (
            <details
              key={q.id ?? i}
              className={`group border-[1.5px] ${
                isUnattempted ? 'border-ink-200 bg-white' : isCorrect ? 'border-correct/40 bg-correct/5' : isPartial ? 'border-ink-400 bg-ink-100' : 'border-incorrect/40 bg-incorrect/5'
              }`}
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-4 focus-visible:outline-offset-[-2px]">
                <span>
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-ink-500">{q.section}</span>
                  <span className="block text-sm font-medium leading-6 text-ink-900">{i + 1}. {q.question}</span>
                </span>
                <span className={`flex-none px-2 py-1 text-[10px] font-semibold uppercase tracking-wide ${
                  isUnattempted ? 'bg-ink-100 text-ink-700' : isCorrect ? 'bg-correct/10 text-correct' : isPartial ? 'bg-ink-200 text-ink-700' : 'bg-incorrect/10 text-incorrect'
                }`}>
                  {isUnattempted ? 'Unattempted' : isCorrect ? 'Correct' : isPartial ? 'Partial' : 'Wrong'}
                </span>
              </summary>
              <div className="border-t border-ink-200 p-4">
              {q.answerType === 'numerical' ? (
                <div className="grid gap-2 text-xs sm:grid-cols-2">
                  <div className={isUnattempted ? 'bg-ink-100 px-2.5 py-2 font-semibold text-ink-700' : isCorrect ? 'bg-correct/10 px-2.5 py-2 font-semibold text-correct' : 'bg-incorrect/10 px-2.5 py-2 font-semibold text-incorrect'}>
                    Your answer: {q.selectedIndex ?? 'Unattempted'}
                  </div>
                  <div className="bg-correct/10 px-2.5 py-2 font-semibold text-correct">
                    Correct value: {q.correctValue}
                  </div>
                </div>
              ) : (
              <div className="text-xs space-y-1">
                {q.options.map((opt, oi) => {
                  const isSelected = q.answerType === 'multi-select'
                    ? Array.isArray(q.selectedIndex) && q.selectedIndex.includes(oi)
                    : q.selectedIndex === oi;
                  const isRight = q.answerType === 'multi-select'
                    ? q.correctIndices?.includes(oi)
                    : q.correctIndex === oi;
                  return (
                    <div
                      key={oi}
                      className={`px-2.5 py-1.5 ${
                        isRight
                          ? 'bg-correct/10 text-correct font-semibold'
                          : isSelected
                          ? 'bg-incorrect/10 text-incorrect font-semibold'
                          : 'text-ink-700'
                      }`}
                    >
                      {String.fromCharCode(65 + oi)}. {opt}
                      {isRight ? ' ✓' : isSelected ? ' ✗' : ''}
                    </div>
                  );
                })}
              </div>
              )}
              <div className="mt-3 text-sm leading-6 text-ink-700"><strong className="text-ink-900">Explanation:</strong> {q.explanation}</div>
              <div className="mt-4 border-t border-ink-200 pt-3">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="bg-ink-100 px-2 py-1 font-semibold text-ink-700">
                    {q.source?.kind === 'official-paper' ? 'Official paper question' : q.source ? 'Original practice question' : 'Demo question'}
                  </span>
                  {q.topic && <span className="text-ink-600">{q.topic}</span>}
                  {q.difficulty && <span className="capitalize text-ink-600">{q.difficulty}</span>}
                  {(q.timeSpentSec ?? 0) > 0 && <span className="text-ink-600">Time: {formatTime(q.timeSpentSec!)}</span>}
                  <span className="text-ink-600">ID: {q.id ?? `${attempt.testId}-question-${i + 1}`}</span>
                </div>
                {q.source ? (
                  <p className="mt-2 text-xs leading-5 text-ink-700">
                    {q.source.reference}. Checked {q.source.checkedOn}.{' '}
                    <a
                      href={q.source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="font-semibold text-ink-900 underline underline-offset-2"
                    >
                      View official reference
                    </a>
                  </p>
                ) : (
                  <p className="mt-2 text-xs leading-5 text-ink-700">
                    This demo question predates published provenance details.
                  </p>
                )}
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <QuestionIssueActions attempt={attempt} question={q} index={i} />
                  <span className="text-xs text-ink-600">Opens a pre-filled email to info@takemocktest.com.</span>
                </div>
              </div>
              </div>
            </details>
          );
        })}
        {filteredQuestions.length === 0 && (
          <div className="border border-dashed border-ink-300 bg-ink-50 p-6 text-center text-sm text-ink-600">
            No questions match this filter.
          </div>
        )}
      </div>
      </section>
    </div>
  );
}
