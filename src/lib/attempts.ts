// Client-side attempt history, persisted to localStorage. The site is a
// fully static export (no backend), so "your results" live in the browser
// rather than behind a shareable per-attempt URL: see the results page for
// how this is surfaced.

import type { QuestionSource } from './questions';

export type AnswerValue = number | string | null;

export interface QuestionResult {
  id?: string;
  section: string;
  topic?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  question: string;
  options: string[];
  correctIndex: number;
  answerType?: 'mcq' | 'numerical';
  correctValue?: string;
  selectedIndex: AnswerValue;
  marks?: number;
  score?: number;
  timeSpentSec?: number;
  explanation: string;
  source?: QuestionSource;
}

export interface AttemptResult {
  id: string;
  examSlug: string;
  testId: string;
  testName: string;
  examName: string;
  correct: number;
  wrong: number;
  unattempted: number;
  totalQuestions: number;
  score: number;
  maxScore: number;
  timeTakenSec: number;
  submittedAt: string;
  questions: QuestionResult[];
}

export interface AttemptDraft {
  answers: AnswerValue[];
  visited: boolean[];
  marked: boolean[];
  currentIndex: number;
  activeSectionIndex: number;
  timeLeft: number;
  elapsedSec: number;
  timeSpentSec: number[];
  savedAt: number;
}

const STORAGE_KEY = 'exampath:attempts';
const draftKey = (examSlug: string, testId: string) => `exampath:draft:${examSlug}:${testId}`;

function readAll(): AttemptResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as AttemptResult[]) : [];
  } catch {
    return [];
  }
}

function writeAll(attempts: AttemptResult[]) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(attempts));
}

export function saveAttempt(attempt: AttemptResult) {
  const all = readAll();
  all.unshift(attempt);
  writeAll(all);
}

export function getAttempts(examSlug?: string): AttemptResult[] {
  const all = readAll();
  return examSlug ? all.filter((a) => a.examSlug === examSlug) : all;
}

export function getLatestAttempt(examSlug: string, testId: string): AttemptResult | undefined {
  return readAll().find((a) => a.examSlug === examSlug && a.testId === testId);
}

export function getAttempt(id: string): AttemptResult | undefined {
  return readAll().find((a) => a.id === id);
}

export function getAttemptDraft(examSlug: string, testId: string): AttemptDraft | undefined {
  if (typeof window === 'undefined') return;
  try {
    const raw = window.localStorage.getItem(draftKey(examSlug, testId));
    return raw ? (JSON.parse(raw) as AttemptDraft) : undefined;
  } catch {
    return;
  }
}

export function saveAttemptDraft(examSlug: string, testId: string, draft: AttemptDraft) {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(draftKey(examSlug, testId), JSON.stringify(draft));
  } catch {
    // The test still works when storage is unavailable; only resume is lost.
  }
}

export function clearAttemptDraft(examSlug: string, testId: string) {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(draftKey(examSlug, testId));
}

export function makeAttemptId(): string {
  return `attempt-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
