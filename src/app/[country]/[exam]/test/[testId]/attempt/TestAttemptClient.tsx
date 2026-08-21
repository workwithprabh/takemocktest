'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import OMRBubble from '@/components/OMRBubble';
import ResultDetail from '@/components/ResultDetail';
import type { Question } from '@/lib/questions';
import type { TimingGroup } from '@/lib/exams';
import {
  AnswerValue,
  AttemptResult,
  QuestionResult,
  clearAttemptDraft,
  getAttemptDraft,
  makeAttemptId,
  saveAttempt,
  saveAttemptDraft,
} from '@/lib/attempts';

type PaletteStatus = 'current' | 'answered' | 'markedAnswered' | 'marked' | 'notAnswered' | 'notVisited';

function isCorrectAnswer(question: Question, answer: AnswerValue) {
  if (question.answerType === 'numerical') {
    return typeof answer === 'string' && answer !== '' && Number(answer) === Number(question.correctValue);
  }
  if (question.answerType === 'multi-select') {
    const selected = Array.isArray(answer) ? [...answer].sort() : [];
    const correct = [...(question.correctIndices ?? [])].sort();
    return selected.length === correct.length && selected.every((index, i) => index === correct[i]);
  }
  return answer === question.correctIndex;
}

function scoreAnswer(question: Question, answer: AnswerValue, marks: number, penalty: number) {
  if (answer === null || answer === undefined || (Array.isArray(answer) && answer.length === 0)) {
    return { outcome: 'unattempted' as const, score: 0 };
  }
  if (isCorrectAnswer(question, answer)) return { outcome: 'correct' as const, score: marks };
  if (question.answerType === 'multi-select' && question.partialMarking && Array.isArray(answer)) {
    const correct = new Set(question.correctIndices ?? []);
    if (answer.length > 0 && answer.every((index) => correct.has(index))) {
      const score =
        question.partialCreditMode === 'proportional'
          ? (marks * answer.length) / correct.size
          : answer.length;
      return { outcome: 'partial' as const, score };
    }
  }
  return { outcome: 'wrong' as const, score: -penalty };
}

function formatClock(sec: number) {
  const m = Math.floor(sec / 60).toString().padStart(2, '0');
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

function ConfirmDialog({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      aria-labelledby={`${title.replaceAll(' ', '-').toLowerCase()}-title`}
      onClose={onClose}
      className="m-auto w-[calc(100%-2.5rem)] max-w-sm bg-white p-6 text-ink-900 backdrop:bg-ink-900/50"
    >
      <h2 id={`${title.replaceAll(' ', '-').toLowerCase()}-title`} className="mb-2 text-lg font-bold">
        {title}
      </h2>
      {children}
    </dialog>
  );
}

export default function TestAttemptClient({
  country,
  examSlug,
  examName,
  duration,
  sectionDuration,
  sectionDurations,
  timingGroups,
  marksPerCorrect,
  negativeMarking,
  testId,
  testName,
  questions,
}: {
  country: string;
  examSlug: string;
  examName: string;
  duration: number;
  sectionDuration?: number;
  sectionDurations?: number[];
  timingGroups?: TimingGroup[];
  marksPerCorrect: number;
  negativeMarking: number;
  testId: string;
  testName: string;
  questions: Question[];
}) {
  const sections = useMemo(() => [...new Set(questions.map((question) => question.section))], [questions]);
  // A "group" is one timer window: usually a single section (the historical
  // sectionDuration/sectionDurations model, one section per window), but
  // timingGroups lets several sections share one window instead (e.g. MHT
  // CET's Physics + Chemistry sharing 90 minutes before Mathematics gets its
  // own 90). Falling back to one section per group when timingGroups is unset
  // reproduces the old behavior exactly, so every existing exam is unaffected.
  const groups = useMemo<string[][]>(
    () => (timingGroups?.length ? timingGroups.map((group) => group.sections) : sections.map((section) => [section])),
    [timingGroups, sections],
  );
  const usesSectionTimer = Boolean(timingGroups?.length) || Boolean((sectionDuration || sectionDurations?.length) && sections.length > 1);
  const getGroupDuration = (groupIndex: number) =>
    timingGroups?.length ? (timingGroups[groupIndex]?.duration ?? duration) : (sectionDurations?.[groupIndex] ?? sectionDuration ?? duration);

  const [phase, setPhase] = useState<'in-progress' | 'submitted'>('in-progress');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerValue[]>(() => questions.map(() => null));
  const [visited, setVisited] = useState<boolean[]>(() => questions.map((_, i) => i === 0));
  const [marked, setMarked] = useState<boolean[]>(() => questions.map(() => false));
  const [timeLeft, setTimeLeft] = useState(getGroupDuration(0) * 60);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [exitOpen, setExitOpen] = useState(false);
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [result, setResult] = useState<AttemptResult | null>(null);
  const submittedRef = useRef(false);
  const answersRef = useRef(answers);
  const activeSectionRef = useRef(0);
  const elapsedRef = useRef(0);
  const currentIndexRef = useRef(0);
  const timeSpentRef = useRef(questions.map(() => 0));

  useEffect(() => {
    answersRef.current = answers;
  }, [answers]);

  const handleSubmit = () => {
    if (submittedRef.current) return;
    submittedRef.current = true;

    let correct = 0;
    let partial = 0;
    let wrong = 0;
    let unattempted = 0;
    let score = 0;
    let maxScore = 0;
    const questionResults: QuestionResult[] = questions.map((q, i) => {
      const selected = answersRef.current[i];
      const questionMarks = q.marks ?? marksPerCorrect;
      const penalty = q.negativeMarking ?? negativeMarking;
      const scored = scoreAnswer(q, selected, questionMarks, penalty);
      const questionScore = scored.score;
      maxScore += questionMarks;
      if (scored.outcome === 'unattempted') {
        unattempted++;
      } else if (scored.outcome === 'correct') {
        correct++;
      } else if (scored.outcome === 'partial') {
        partial++;
      } else {
        wrong++;
      }
      score += questionScore;
      return {
        id: q.id,
        section: q.section,
        topic: q.topic,
        difficulty: q.difficulty,
        question: q.question,
        options: q.options,
        correctIndex: q.correctIndex,
        answerType: q.answerType,
        correctValue: q.correctValue,
        correctIndices: q.correctIndices,
        partialMarking: q.partialMarking,
        maxDecimalPlaces: q.maxDecimalPlaces,
        selectedIndex: selected ?? null,
        marks: questionMarks,
        score: questionScore,
        outcome: scored.outcome,
        timeSpentSec: timeSpentRef.current[i],
        explanation: q.explanation,
        source: q.source,
      };
    });

    const attempt: AttemptResult = {
      id: makeAttemptId(),
      examSlug,
      testId,
      testName,
      examName,
      correct,
      partial,
      wrong,
      unattempted,
      totalQuestions: questions.length,
      score: Number(score.toFixed(4)),
      maxScore: Number(maxScore.toFixed(4)),
      timeTakenSec: elapsedRef.current,
      submittedAt: new Date().toISOString(),
      questions: questionResults,
    };
    saveAttempt(attempt);
    clearAttemptDraft(examSlug, testId);
    setResult(attempt);
    setConfirmOpen(false);
    setPhase('submitted');
  };

  useEffect(() => {
    const draft = getAttemptDraft(examSlug, testId);
    const valid =
      draft &&
      draft.answers.length === questions.length &&
      draft.visited.length === questions.length &&
      draft.marked.length === questions.length &&
      draft.timeSpentSec.length === questions.length;

    if (valid) {
      const offlineSeconds = Math.max(0, Math.floor((Date.now() - draft.savedAt) / 1000));
      let nextSection = draft.activeSectionIndex;
      let nextTimeLeft = draft.timeLeft - offlineSeconds;

      if (usesSectionTimer) {
        while (nextTimeLeft <= 0 && nextSection < groups.length - 1) {
          nextSection += 1;
          nextTimeLeft += getGroupDuration(nextSection) * 60;
        }
      }

      const nextIndex =
        nextSection === draft.activeSectionIndex
          ? draft.currentIndex
          : questions.findIndex((question) => groups[nextSection].includes(question.section));

      answersRef.current = draft.answers;
      activeSectionRef.current = nextSection;
      currentIndexRef.current = Math.max(0, nextIndex);
      elapsedRef.current = draft.elapsedSec + offlineSeconds;
      timeSpentRef.current = draft.timeSpentSec;
      setAnswers(draft.answers);
      setVisited(draft.visited.map((wasVisited, index) => wasVisited || index === nextIndex));
      setMarked(draft.marked);
      setActiveSectionIndex(nextSection);
      setCurrentIndex(Math.max(0, nextIndex));
      setTimeLeft(Math.max(0, nextTimeLeft));

      if (nextTimeLeft <= 0) {
        setHydrated(true);
        setTimeout(handleSubmit, 0);
        return;
      }
    }

    setHydrated(true);
    // The test identity and question count are stable for the page lifetime.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!hydrated || phase !== 'in-progress') return;
    saveAttemptDraft(examSlug, testId, {
      answers,
      visited,
      marked,
      currentIndex,
      activeSectionIndex,
      timeLeft,
      elapsedSec: elapsedRef.current,
      timeSpentSec: timeSpentRef.current,
      savedAt: Date.now(),
    });
  }, [
    activeSectionIndex,
    answers,
    currentIndex,
    examSlug,
    hydrated,
    marked,
    phase,
    testId,
    timeLeft,
    visited,
  ]);

  useEffect(() => {
    if (!hydrated || phase !== 'in-progress') return;
    const warnBeforeLeaving = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = '';
    };
    window.addEventListener('beforeunload', warnBeforeLeaving);
    return () => window.removeEventListener('beforeunload', warnBeforeLeaving);
  }, [hydrated, phase]);

  useEffect(() => {
    if (!hydrated || phase !== 'in-progress') return;
    const interval = setInterval(() => {
      elapsedRef.current += 1;
      timeSpentRef.current[currentIndexRef.current] += 1;
      setTimeLeft((t) => {
        if (t <= 1) {
          if (usesSectionTimer && activeSectionRef.current < groups.length - 1) {
            const nextSection = activeSectionRef.current + 1;
            const nextQuestion = questions.findIndex(
              (question) => groups[nextSection].includes(question.section),
            );
            activeSectionRef.current = nextSection;
            currentIndexRef.current = nextQuestion;
            setActiveSectionIndex(nextSection);
            setCurrentIndex(nextQuestion);
            setVisited((visitedQuestions) =>
              visitedQuestions.map((visitedQuestion, index) =>
                index === nextQuestion ? true : visitedQuestion,
              ),
            );
            return getGroupDuration(nextSection) * 60;
          }
          clearInterval(interval);
          handleSubmit();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, phase]);

  const retake = () => {
    submittedRef.current = false;
    setAnswers(questions.map(() => null));
    setVisited(questions.map((_, i) => i === 0));
    setMarked(questions.map(() => false));
    setTimeLeft(getGroupDuration(0) * 60);
    setActiveSectionIndex(0);
    activeSectionRef.current = 0;
    elapsedRef.current = 0;
    currentIndexRef.current = 0;
    timeSpentRef.current = questions.map(() => 0);
    setCurrentIndex(0);
    setResult(null);
    clearAttemptDraft(examSlug, testId);
    setPhase('in-progress');
  };

  if (!hydrated) {
    return (
      <div data-test-attempt className="mx-auto max-w-3xl px-5 py-8">
        <h1 className="text-lg font-bold text-ink-900">Preparing your test…</h1>
        <p className="mt-2 text-sm text-ink-500">Restoring any progress saved on this device.</p>
      </div>
    );
  }

  if (phase === 'submitted' && result) {
    return (
      <div className="max-w-3xl mx-auto px-5 py-6">
        <h1 className="font-sans font-bold text-2xl mb-1 text-ink-900">{testName}: Results</h1>
        <p className="text-ink-500 text-sm mb-6">{examName}</p>
        <ResultDetail
          attempt={result}
          actions={
            <>
              <button
                onClick={retake}
                className="bg-ink-900 text-white text-sm font-semibold px-4 py-2.5 hover:bg-ink-700 transition"
              >
                Retake test
              </button>
              <Link
                href={`/${country}/${examSlug}/mock-test`}
                className="border border-ink-200 text-ink-900 text-sm font-semibold px-4 py-2.5 hover:border-ink-900 transition"
              >
                Back to mock tests
              </Link>
              <Link
                href={`/${country}/results`}
                className="border border-ink-200 text-ink-900 text-sm font-semibold px-4 py-2.5 hover:border-ink-900 transition"
              >
                View all results
              </Link>
            </>
          }
        />
      </div>
    );
  }

  const q = questions[currentIndex];
  const activeGroupSections = groups[activeSectionIndex] ?? [q.section];
  const activeQuestionIndices = questions.flatMap((question, index) =>
    activeGroupSections.includes(question.section) ? [index] : [],
  );
  const sectionStart = usesSectionTimer ? (activeQuestionIndices[0] ?? 0) : 0;
  const sectionEnd = usesSectionTimer ? (activeQuestionIndices.at(-1) ?? questions.length - 1) : questions.length - 1;
  const attemptedCount = answers.filter((a) => a !== null).length;
  const attemptedInSection = activeQuestionIndices.filter((index) => answers[index] !== null).length;
  const markedCount = marked.filter(Boolean).length;

  const goTo = (index: number) => {
    if (usesSectionTimer && !activeGroupSections.includes(questions[index]?.section)) return;
    if (!usesSectionTimer) {
      const nextSectionIndex = sections.indexOf(questions[index].section);
      activeSectionRef.current = nextSectionIndex;
      setActiveSectionIndex(nextSectionIndex);
    }
    currentIndexRef.current = index;
    setCurrentIndex(index);
    setVisited((v) => v.map((val, i) => (i === index ? true : val)));
  };

  const paletteStatus = (i: number): PaletteStatus => {
    if (i === currentIndex) return 'current';
    if (marked[i] && answers[i] !== null) return 'markedAnswered';
    if (marked[i]) return 'marked';
    if (answers[i] !== null) return 'answered';
    if (visited[i]) return 'notAnswered';
    return 'notVisited';
  };

  // Monochrome tone ramp stands in for color-coding: darker/filled = more
  // "done", outlined = visited-but-skipped, faint = untouched.
  const paletteClasses: Record<PaletteStatus, string> = {
    current: 'bg-ink-900 text-white border-ink-900',
    answered: 'bg-ink-700 text-white border-ink-700',
    markedAnswered: 'bg-ink-500 text-white border-ink-500',
    marked: 'bg-ink-300 text-ink-900 border-ink-300',
    notAnswered: 'bg-white text-ink-900 border-ink-900',
    notVisited: 'bg-white text-ink-500 border-ink-200',
  };

  return (
    <div data-test-attempt className="max-w-5xl mx-auto px-5 py-4">
      <div className="sticky top-0 z-20 mb-4 flex flex-wrap items-center justify-between gap-3 border-b border-ink-200 bg-ink-50/95 py-3 backdrop-blur">
        <div className="min-w-0 flex-1">
          <h1 className="font-sans font-bold text-base text-ink-900">{testName}</h1>
          <p className="text-xs text-ink-500">{examName} · Progress saved on this device</p>
        </div>
        <div
          aria-label={`${usesSectionTimer ? `Section ${activeSectionIndex + 1} of ${groups.length}, ` : ''}${formatClock(timeLeft)} remaining`}
          className={`min-h-11 px-3 py-2 font-mono text-sm font-semibold ${
            timeLeft <= 120 ? 'bg-attention-600 text-white' : 'bg-ink-100 text-ink-700'
          }`}
        >
          {usesSectionTimer && (
            <span className="mr-2 font-sans text-[10px] uppercase tracking-wide">
              Section {activeSectionIndex + 1}/{groups.length}
            </span>
          )}
          {formatClock(timeLeft)}
        </div>
        <div className="flex w-full gap-2 sm:w-auto">
          <button
            onClick={() => setExitOpen(true)}
            className="min-h-11 flex-1 border border-ink-200 px-4 text-xs font-semibold text-ink-900 transition hover:border-ink-900 sm:flex-none"
          >
            Exit test
          </button>
          <button
            onClick={() => setConfirmOpen(true)}
            className="min-h-11 flex-1 bg-ink-900 px-4 text-xs font-semibold text-white transition hover:bg-ink-700 sm:flex-none"
          >
            Submit
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="bg-white border border-ink-200 p-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-ink-500 mb-2">{q.section}</div>
              <div id="current-question" className="text-sm font-medium mb-4 text-ink-900">
                {currentIndex + 1}. {q.question}
              </div>
              {q.answerType === 'numerical' ? (
                <div>
                  <label htmlFor="numerical-answer" className="mb-2 block text-xs font-semibold text-ink-700">
                    {q.maxDecimalPlaces
                      ? `Enter a numerical value (up to ${q.maxDecimalPlaces} decimal place${q.maxDecimalPlaces === 1 ? '' : 's'})`
                      : 'Enter the numerical value'}
                  </label>
                  <input
                    id="numerical-answer"
                    type="text"
                    inputMode="decimal"
                    autoComplete="off"
                    value={typeof answers[currentIndex] === 'string' ? answers[currentIndex] : ''}
                    onChange={(event) => {
                      const value = event.target.value.trim();
                      const pattern = q.maxDecimalPlaces
                        ? new RegExp(`^-?\\d*(?:\\.\\d{0,${q.maxDecimalPlaces}})?$`)
                        : /^-?\d*(?:\.\d*)?$/;
                      if (!pattern.test(value)) return;
                      setAnswers((current) => current.map((answer, index) =>
                        index === currentIndex ? value || null : answer,
                      ));
                    }}
                    className="min-h-12 w-full border border-ink-300 bg-white px-4 font-mono text-base text-ink-900 outline-none transition focus:border-ink-900 focus:ring-1 focus:ring-ink-900"
                    aria-describedby="numerical-answer-note"
                  />
                  <p id="numerical-answer-note" className="mt-2 text-xs leading-5 text-ink-500">
                    Enter only the value, without units or symbols.
                  </p>
                </div>
              ) : q.answerType === 'multi-select' ? (
                <div role="group" aria-labelledby="current-question" aria-describedby="multi-select-note">
                  <p id="multi-select-note" className="mb-3 text-xs leading-5 text-ink-500">
                    Select one or more options. Partial marks apply only when every selected option is correct.
                  </p>
                  {q.options.map((opt, oi) => {
                    const selected = Array.isArray(answers[currentIndex]) && answers[currentIndex].includes(oi);
                    return (
                      <OMRBubble
                        key={oi}
                        letter={String.fromCharCode(65 + oi)}
                        label={opt}
                        selected={selected}
                        multiple
                        onSelect={() => setAnswers((current) => current.map((answer, index) => {
                          if (index !== currentIndex) return answer;
                          const choices = Array.isArray(answer) ? answer : [];
                          const next = choices.includes(oi) ? choices.filter((choice) => choice !== oi) : [...choices, oi].sort();
                          return next.length ? next : null;
                        }))}
                      />
                    );
                  })}
                </div>
              ) : (
                <div role="radiogroup" aria-labelledby="current-question">
                  {q.options.map((opt, oi) => (
                    <OMRBubble
                      key={oi}
                      letter={String.fromCharCode(65 + oi)}
                      label={opt}
                      selected={answers[currentIndex] === oi}
                      onSelect={() =>
                        setAnswers((a) => a.map((val, i) => (i === currentIndex ? oi : val)))
                      }
                    />
                  ))}
                </div>
              )}
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            <button
              disabled={currentIndex === sectionStart}
              onClick={() => goTo(currentIndex - 1)}
              className="min-h-11 border border-ink-200 px-3.5 text-xs font-semibold text-ink-900 transition hover:border-ink-900 disabled:opacity-40"
            >
              Previous
            </button>
            <button
              onClick={() => setAnswers((a) => a.map((val, i) => (i === currentIndex ? null : val)))}
              className="min-h-11 border border-ink-200 px-3.5 text-xs font-semibold text-ink-900 transition hover:border-ink-900"
            >
              Clear response
            </button>
            <button
              onClick={() => {
                setMarked((m) => m.map((val, i) => (i === currentIndex ? true : val)));
                if (currentIndex < sectionEnd) goTo(currentIndex + 1);
              }}
              className="min-h-11 border border-ink-200 px-3.5 text-xs font-semibold text-ink-900 transition hover:border-ink-900"
            >
              Mark for review &amp; next
            </button>
            <button
              onClick={() => {
                if (currentIndex < sectionEnd) goTo(currentIndex + 1);
              }}
              disabled={currentIndex === sectionEnd}
              className="ml-auto min-h-11 bg-ink-900 px-4 text-xs font-semibold text-white transition hover:bg-ink-700 disabled:opacity-40"
            >
              Save &amp; next
            </button>
          </div>
        </div>

        <div className="flex-shrink-0 md:w-64">
          <button
            type="button"
            aria-expanded={paletteOpen}
            aria-controls="question-palette"
            onClick={() => setPaletteOpen((open) => !open)}
            className="flex min-h-11 w-full items-center justify-between border border-ink-200 bg-white px-4 text-sm font-semibold text-ink-900 md:hidden"
          >
            Question palette
            <span aria-hidden="true">{paletteOpen ? '−' : '+'}</span>
          </button>
          <div
            id="question-palette"
            className={`${paletteOpen ? 'block' : 'hidden'} border border-t-0 border-ink-200 bg-white p-4 md:block md:border-t`}
          >
            {usesSectionTimer && (
              <div className="text-xs font-semibold text-ink-900 mb-1">{activeGroupSections.join(' + ')}</div>
            )}
            <div className="text-xs font-semibold text-ink-500 mb-1">
              {usesSectionTimer
                ? `${attemptedInSection}/${activeQuestionIndices.length} in section · ${attemptedCount}/${questions.length} total`
                : `${attemptedCount}/${questions.length} answered`}
            </div>
            {markedCount > 0 && <div className="text-xs text-ink-500 mb-3">{markedCount} marked for review</div>}
            <div className="mt-3 grid grid-cols-5 gap-2">
              {(usesSectionTimer ? activeQuestionIndices : questions.map((_, index) => index)).map((i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-current={i === currentIndex ? 'step' : undefined}
                  aria-label={`Question ${i + 1}: ${paletteStatus(i).replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                  className={`h-11 w-11 border text-xs font-semibold transition ${paletteClasses[paletteStatus(i)]}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 border-t border-ink-200 pt-3 text-[10px] text-ink-600">
              {[
                ['bg-ink-900 border-ink-900', 'Current'],
                ['bg-ink-700 border-ink-700', 'Answered'],
                ['bg-ink-300 border-ink-300', 'Review'],
                ['bg-white border-ink-200', 'Unvisited'],
              ].map(([tone, label]) => (
                <div key={label} className="flex items-center gap-2">
                  <span className={`h-3 w-3 border ${tone}`} aria-hidden="true" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ConfirmDialog open={confirmOpen} title="Submit test?" onClose={() => setConfirmOpen(false)}>
        <p className="mb-4 text-sm text-ink-500">
          You’ve answered <strong className="text-ink-900">{attemptedCount}</strong> of{' '}
          <strong className="text-ink-900">{questions.length}</strong> questions
          {questions.length - attemptedCount > 0 && (
            <>, {questions.length - attemptedCount} will be marked unattempted.</>
          )}
        </p>
        <div className="flex gap-3">
          <button
            autoFocus
            onClick={() => setConfirmOpen(false)}
            className="min-h-11 flex-1 border border-ink-200 px-4 text-sm font-semibold text-ink-900 transition hover:border-ink-900"
          >
            Keep working
          </button>
          <button
            onClick={handleSubmit}
            className="min-h-11 flex-1 bg-ink-900 px-4 text-sm font-semibold text-white transition hover:bg-ink-700"
          >
            Submit
          </button>
        </div>
      </ConfirmDialog>

      <ConfirmDialog open={exitOpen} title="Exit this test?" onClose={() => setExitOpen(false)}>
        <p className="mb-4 text-sm leading-6 text-ink-500">
          Your answers and remaining time are saved on this device. Return to this test to resume.
        </p>
        <div className="flex gap-3">
          <button
            autoFocus
            onClick={() => setExitOpen(false)}
            className="min-h-11 flex-1 border border-ink-200 px-4 text-sm font-semibold text-ink-900 transition hover:border-ink-900"
          >
            Keep working
          </button>
          <Link
            href={`/${country}/${examSlug}/mock-test`}
            className="flex min-h-11 flex-1 items-center justify-center bg-ink-900 px-4 text-sm font-semibold text-white transition hover:bg-ink-700"
          >
            Exit test
          </Link>
        </div>
      </ConfirmDialog>
    </div>
  );
}
