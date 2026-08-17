'use client';

import { useEffect, useState } from 'react';

interface LiveExamStatusProps {
  eventLabel: string;
  startsAt: string;
  endsAt: string;
  fallbackStatus: string;
}

const DAY = 24 * 60 * 60 * 1000;

function getLiveState(startsAt: string, endsAt: string) {
  const now = Date.now();
  const start = new Date(startsAt).getTime();
  const end = new Date(endsAt).getTime();

  if (now < start) {
    const remaining = start - now;
    const days = Math.ceil(remaining / DAY);
    return {
      status: 'Upcoming',
      detail: remaining < DAY ? 'Starts today' : `${days} day${days === 1 ? '' : 's'} remaining`,
      active: true,
    };
  }

  if (now <= end) return { status: 'In progress', detail: 'Official examination schedule in progress', active: true };
  return { status: 'Schedule completed', detail: 'Scheduled examination dates have passed', active: false };
}

export default function LiveExamStatus({ eventLabel, startsAt, endsAt, fallbackStatus }: LiveExamStatusProps) {
  const [state, setState] = useState({ status: fallbackStatus, detail: eventLabel, active: true });

  useEffect(() => {
    const update = () => setState(getLiveState(startsAt, endsAt));
    update();
    const timer = window.setInterval(update, 60_000);
    return () => window.clearInterval(timer);
  }, [startsAt, endsAt]);

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
      <span className="inline-flex items-center gap-2 bg-live-700 px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white">
        <span className="relative flex h-2 w-2" aria-hidden="true">
          {state.active && <span className="status-ring absolute inline-flex h-full w-full bg-live-100 opacity-70" />}
          <span className="relative inline-flex h-2 w-2 bg-white" />
        </span>
        {state.status}
      </span>
      <span className="text-xs font-semibold text-live-800">{state.detail}</span>
    </div>
  );
}
