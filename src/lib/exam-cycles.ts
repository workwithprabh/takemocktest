import type { ExamSlug } from './exams';

export type CycleState = 'Completed' | 'Current' | 'Upcoming' | 'Not announced';

export interface ExamCycle {
  examSlug: ExamSlug;
  label: string;
  currentStage: string;
  status: string;
  summary: string;
  overview: string;
  practiceScope: string;
  checkedOn: string;
  sourceName: string;
  sourceUrl: string;
  primaryAction: { label: string; href: string };
  lifecycle: { label: string; state: CycleState }[];
  importantDates: {
    label: string;
    dateTime?: string;
    displayDate: string;
    status: string;
    sourceUrl: string;
  }[];
  outcomes: {
    label: string;
    status: string;
    detail: string;
    href?: string;
  }[];
}

const UPSC_PRELIMS_2026 =
  'https://www.upsc.gov.in/examinations/Civil%20Services%20%28Preliminary%29%20Examination%2C%202026';
const UPSC_MAINS_2026 =
  'https://www.upsc.gov.in/examinations/Civil%20Services%20%28Main%29%20Examination%2C%202026';
const UPSC_MAINS_TIMETABLE_2026 =
  'https://www.upsc.gov.in/sites/default/files/TT-CSM-2026-Engl-100726.pdf';
const UPSC_MAINS_CAF_NOTICE_2026 =
  'https://www.upsc.gov.in/sites/default/files/WindowCAF-CSM-26-Engl-190626_0.pdf';

const EXAM_CYCLES: Partial<Record<ExamSlug, ExamCycle>> = {
  'upsc-cse': {
    examSlug: 'upsc-cse',
    label: 'CSE 2026',
    currentStage: 'Main Examination (written)',
    status: 'Examination upcoming',
    summary: 'The written Main Examination is scheduled for 21–23 and 29–30 August 2026.',
    overview: 'UPSC CSE has a Preliminary screening examination followed by the Main written examination and Interview/Personality Test. TakeMockTest currently provides checked practice for the two Preliminary papers: GS Paper I and CSAT.',
    practiceScope: 'Available practice currently covers the two Preliminary papers: GS Paper I and CSAT.',
    checkedOn: '2026-08-17',
    sourceName: 'Union Public Service Commission',
    sourceUrl: UPSC_MAINS_2026,
    primaryAction: { label: 'View official timetable', href: UPSC_MAINS_TIMETABLE_2026 },
    lifecycle: [
      { label: 'Notification', state: 'Completed' },
      { label: 'Application', state: 'Completed' },
      { label: 'Prelims', state: 'Completed' },
      { label: 'Mains', state: 'Current' },
      { label: 'Interview', state: 'Not announced' },
      { label: 'Final result', state: 'Not announced' },
    ],
    importantDates: [
      {
        label: 'Notification published',
        dateTime: '2026-02-04',
        displayDate: '4 February 2026',
        status: 'Published',
        sourceUrl: UPSC_PRELIMS_2026,
      },
      {
        label: 'Application deadline',
        dateTime: '2026-02-27T18:00:00+05:30',
        displayDate: '27 February 2026, 6:00 pm',
        status: 'Closed',
        sourceUrl: UPSC_PRELIMS_2026,
      },
      {
        label: 'Preliminary examination',
        dateTime: '2026-05-24',
        displayDate: '24 May 2026',
        status: 'Completed',
        sourceUrl: UPSC_PRELIMS_2026,
      },
      {
        label: 'Preliminary written result',
        dateTime: '2026-06-15',
        displayDate: '15 June 2026',
        status: 'Published',
        sourceUrl: UPSC_PRELIMS_2026,
      },
      {
        label: 'Main application confirmation window',
        dateTime: '2026-06-29T18:00:00+05:30',
        displayDate: '19–29 June 2026, until 6:00 pm',
        status: 'Closed',
        sourceUrl: UPSC_MAINS_CAF_NOTICE_2026,
      },
      {
        label: 'Main written examination',
        dateTime: '2026-08-21',
        displayDate: '21–23 and 29–30 August 2026',
        status: 'Upcoming',
        sourceUrl: UPSC_MAINS_TIMETABLE_2026,
      },
    ],
    outcomes: [
      {
        label: 'Preliminary written result',
        status: 'Published',
        detail: 'Roll-number list uploaded on 15 June 2026.',
        href: UPSC_PRELIMS_2026,
      },
      {
        label: 'Main written result',
        status: 'Not announced',
        detail: 'UPSC has not published a result date for the current cycle.',
      },
      {
        label: 'Personality test schedule',
        status: 'Not announced',
        detail: 'Published only after the written Main result.',
      },
      {
        label: 'Final result',
        status: 'Not announced',
        detail: 'No final-result date is available for CSE 2026.',
      },
    ],
  },
};

export function getExamCycle(examSlug: string): ExamCycle | undefined {
  return EXAM_CYCLES[examSlug as ExamSlug];
}
