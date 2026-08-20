'use client';

import Link from 'next/link';
import { useState } from 'react';
import type { Question } from '@/lib/questions';

// The homepage hero used to show this as static, non-interactive markup:
// one option pre-rendered in the "selected" fill color, no click handler.
// It looked exactly like a live answer choice already made, which is
// confusing rather than illustrative. This makes the same real question
// (pulled from the actual SSC CGL bank, not invented copy) genuinely
// clickable, so a first-time visitor gets an honest few-second taste of
// the product instead of a picture of one.
export default function HeroQuestionPreview({ question, country }: { question: Question; country: string }) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;

  return (
    <div className="relative -mt-8 ml-5 hidden border border-ink-200 bg-white p-4 shadow-xl shadow-ink-900/10 sm:ml-auto sm:mr-5 sm:block sm:max-w-sm md:absolute md:-bottom-10 md:right-5 md:ml-0 md:mr-0 md:w-[84%]">
      <div className="mb-2 flex items-center justify-between gap-3">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-ink-500">
          Try a real question
        </span>
        <span className="bg-ink-100 px-2 py-1 text-[10px] font-semibold text-ink-700">
          {question.section}
        </span>
      </div>
      <div className="mb-3 text-sm font-medium text-ink-900">{question.question}</div>
      <div className="space-y-1.5">
        {question.options.map((label, index) => {
          const isCorrect = index === question.correctIndex;
          const isPicked = index === selected;
          const showState = answered && (isPicked || isCorrect);
          return (
            <button
              // Re-keying on the answered transition forces React to mount a
              // fresh DOM node instead of mutating this one's class attribute
              // in place. Without it, this browser doesn't reliably recompute
              // border-color on the original server-rendered node after a
              // client-side class change (confirmed: a brand-new node with
              // the identical class list renders correctly immediately,
              // the pre-existing node does not) — a style-recalc quirk on
              // hydrated nodes, not a logic bug.
              key={`${index}-${answered}`}
              type="button"
              aria-disabled={answered}
              onClick={() => { if (!answered) setSelected(index); }}
              role="radio"
              aria-checked={isPicked}
              className={`flex w-full items-center gap-3 border-[1.5px] px-3 py-2 text-left text-sm transition ${
                !answered ? 'cursor-pointer border-ink-200 hover:border-ink-400' : ''
              } ${
                showState && isCorrect ? 'border-correct bg-correct/10' : showState && isPicked ? 'border-incorrect bg-incorrect/10' : 'border-ink-200'
              }`}
            >
              <span
                className={`flex h-6 w-6 flex-shrink-0 items-center justify-center border-2 text-xs font-bold ${
                  showState && isCorrect
                    ? 'border-correct bg-correct text-white'
                    : showState && isPicked
                      ? 'border-incorrect bg-incorrect text-white'
                      : 'border-ink-300 text-ink-500'
                }`}
              >
                {String.fromCharCode(65 + index)}
              </span>
              <span className="text-ink-900">{label}</span>
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="mt-3 flex items-center justify-between gap-3 border-t border-ink-100 pt-3">
          <p className={`text-xs font-semibold ${selected === question.correctIndex ? 'text-correct' : 'text-incorrect'}`}>
            {selected === question.correctIndex ? 'Correct.' : 'Not quite.'} {question.explanation}
          </p>
        </div>
      )}
      <Link
        href={`/${country}/ssc-cgl/mock-test`}
        className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-ink-900 underline underline-offset-2 hover:text-ink-700"
      >
        Try a full free test <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
