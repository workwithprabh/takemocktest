'use client';

import { useState } from 'react';
import { AttemptResult, QuestionResult } from '@/lib/attempts';

function ScoreRing({ percent }: { percent: number }) {
  const size = 128;
  const stroke = 12;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={radius} stroke="#C9CEDD" strokeWidth={stroke} fill="none" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke="#0A0F20"
        strokeWidth={stroke}
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
  const selectedAnswer =
    question.selectedIndex === null
      ? 'Unattempted'
      : `${String.fromCharCode(65 + question.selectedIndex)}. ${question.options[question.selectedIndex]}`;
  const correctAnswer = `${String.fromCharCode(65 + question.correctIndex)}. ${question.options[question.correctIndex]}`;
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
  const percent = attempt.maxScore > 0
    ? Math.max(0, Math.min(100, (attempt.score / attempt.maxScore) * 100))
    : 0;

  const sections = Array.from(new Set(attempt.questions.map((q) => q.section)));
  const sectionStats = sections.map((section) => {
    const qs = attempt.questions.filter((q) => q.section === section);
    const correct = qs.filter((q) => q.selectedIndex === q.correctIndex).length;
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
        if (question.selectedIndex === question.correctIndex) stat.correct += 1;
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
    <div>
      <div className="bg-white border border-ink-200 p-6 mb-6 flex flex-col sm:flex-row items-center gap-6">
        <ScoreRing percent={percent} />
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full text-center sm:text-left">
          <div>
            <div className="text-xl font-mono font-bold text-correct">{attempt.correct}</div>
            <div className="text-xs text-ink-500">Correct</div>
          </div>
          <div>
            <div className="text-xl font-mono font-bold text-incorrect">{attempt.wrong}</div>
            <div className="text-xs text-ink-500">Wrong</div>
          </div>
          <div>
            <div className="text-xl font-mono font-bold text-ink-400">{attempt.unattempted}</div>
            <div className="text-xs text-ink-500">Unattempted</div>
          </div>
          <div>
            <div className="text-xl font-mono font-bold text-ink-900">{attempt.score.toFixed(2)}</div>
            <div className="text-xs text-ink-500">Score / {attempt.maxScore}</div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 mb-6 text-xs text-ink-500">
        <span>Time taken: {formatTime(attempt.timeTakenSec)}</span>
        <span>Submitted {new Date(attempt.submittedAt).toLocaleString()}</span>
      </div>

      <h2 className="font-sans font-semibold text-sm mb-3 text-ink-900">Section-wise performance</h2>
      <div className="space-y-3 mb-8">
        {sectionStats.map((s) => (
          <div key={s.section}>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-medium text-ink-900">{s.section}</span>
              <span className="text-ink-500">
                {s.hasMarkData
                  ? `${s.score.toFixed(2)}/${s.maxScore.toFixed(2)} marks · ${s.correct}/${s.total} correct`
                  : `${s.correct}/${s.total}`}
              </span>
            </div>
            <div className="h-2 bg-ink-200 overflow-hidden">
              <div
                className="h-full bg-ink-900"
                style={{
                  width: `${s.hasMarkData && s.maxScore > 0
                    ? Math.max(0, Math.min(100, (s.score / s.maxScore) * 100))
                    : s.total > 0 ? (s.correct / s.total) * 100 : 0}%`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-sans font-semibold text-sm mb-3 text-ink-900">Topic-wise analysis</h2>
      <div className="space-y-6 mb-8">
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
                  <div key={stat.topic} className="border border-ink-200 bg-white p-3">
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

      {actions && <div className="flex flex-wrap gap-3 mb-8">{actions}</div>}

      <h2 className="font-sans font-semibold text-sm mb-3 text-ink-900">Answer review</h2>
      <div className="space-y-3">
        {attempt.questions.map((q, i) => {
          const isCorrect = q.selectedIndex === q.correctIndex;
          const isUnattempted = q.selectedIndex === null;
          return (
            <div
              key={i}
              className={`border-[1.5px] p-4 ${
                isUnattempted ? 'border-ink-200' : isCorrect ? 'border-correct/40 bg-correct/5' : 'border-incorrect/40 bg-incorrect/5'
              }`}
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-ink-500 mb-1">{q.section}</div>
              <div className="text-sm font-medium mb-2 text-ink-900">{i + 1}. {q.question}</div>
              <div className="text-xs space-y-1">
                {q.options.map((opt, oi) => {
                  const isSelected = q.selectedIndex === oi;
                  const isRight = q.correctIndex === oi;
                  return (
                    <div
                      key={oi}
                      className={`px-2.5 py-1.5 ${
                        isRight
                          ? 'bg-correct/10 text-correct font-semibold'
                          : isSelected
                          ? 'bg-incorrect/10 text-incorrect font-semibold'
                          : 'text-ink-500'
                      }`}
                    >
                      {String.fromCharCode(65 + oi)}. {opt}
                      {isRight ? ' ✓' : isSelected ? ' ✗' : ''}
                    </div>
                  );
                })}
              </div>
              <div className="text-xs text-ink-500 mt-2 italic">{q.explanation}</div>
              <div className="mt-4 border-t border-ink-200 pt-3">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className="bg-ink-100 px-2 py-1 font-semibold text-ink-700">
                    {q.source?.kind === 'official-paper' ? 'Official paper question' : q.source ? 'Original practice question' : 'Demo question'}
                  </span>
                  {q.topic && <span className="text-ink-500">{q.topic}</span>}
                  {q.difficulty && <span className="capitalize text-ink-500">{q.difficulty}</span>}
                  {(q.timeSpentSec ?? 0) > 0 && <span className="text-ink-500">Time: {formatTime(q.timeSpentSec!)}</span>}
                  <span className="text-ink-500">ID: {q.id ?? `${attempt.testId}-question-${i + 1}`}</span>
                </div>
                {q.source ? (
                  <p className="mt-2 text-xs leading-5 text-ink-500">
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
                  <p className="mt-2 text-xs leading-5 text-ink-500">
                    This demo question predates published provenance details.
                  </p>
                )}
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <QuestionIssueActions attempt={attempt} question={q} index={i} />
                  <span className="text-xs text-ink-500">Opens a pre-filled email to info@takemocktest.com.</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
