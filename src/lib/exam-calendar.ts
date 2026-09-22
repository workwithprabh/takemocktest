export type CalendarEventType =
  | 'Notification'
  | 'Application'
  | 'Exam'
  | 'Admit Card'
  | 'Correction'
  | 'City Intimation'
  | 'Result';

export interface ExamCalendarEvent {
  id: string;
  examSlug: string;
  examName: string;
  goal: string;
  type: CalendarEventType;
  label: string;
  startsOn: string;
  endsOn?: string;
  displayDate?: string;
  status: 'Confirmed' | 'Tentative';
  sourceName: string;
  sourceUrl: string;
  sourceCheckedOn: string;
  updateSlug?: string;
}

const UPSC_2027 = 'https://www.upsc.gov.in/sites/default/files/Calendar-Year-2027-Engl-200526_0.pdf';
const IBPS_2026_27 = 'https://www.ibps.in/wp-content/uploads/IBPS_CALENDAR_2026-27_final.pdf';
const IBPS_RRB_APPLICATION = 'https://ibpsreg.ibps.in/rrbxvaug26/index.php?stat=0';
const GATE_2027 = 'https://gate2027.iitm.ac.in/important_dates';
const CLAT_2027 = 'https://clat2027.consortiumofnlus.ac.in/clat-2027/ug-instructions.html';
const XAT_2027 = 'https://xatonline.in/';

// Dates are added only after an examination authority publishes them. Calendar
// or "liable to change" dates stay marked Tentative until a later notice fixes them.
export const EXAM_CALENDAR_EVENTS: ExamCalendarEvent[] = [
  {
    id: 'ssc-selection-post-phase-14-cbe', examSlug: 'ssc-selection-post', examName: 'SSC Selection Post', goal: 'Government Jobs', type: 'Exam',
    label: 'Phase XIV computer-based examination window', startsOn: '2026-09-16', endsOn: '2026-09-26', status: 'Confirmed',
    sourceName: 'Staff Selection Commission', sourceUrl: 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_RHQ_2026_phase_xiv.pdf', sourceCheckedOn: '2026-09-16',
    updateSlug: 'ssc-selection-post-phase-14-exam-date-2026',
  },
  {
    id: 'mat-september-cbt', examSlug: 'mat', examName: 'MAT', goal: 'Management & Business', type: 'Exam',
    label: 'September CBT examination', startsOn: '2026-09-20', status: 'Confirmed',
    sourceName: 'All India Management Association', sourceUrl: 'https://www.aima.in/content/testing-and-assessment/mat/mat', sourceCheckedOn: '2026-09-16',
    updateSlug: 'mat-september-2026-registration-and-test-dates',
  },
  {
    id: 'ibps-rrb-15-application-close', examSlug: 'ibps-rrb-officer-scale-1', examName: 'IBPS RRB Officer', goal: 'Government Jobs', type: 'Application',
    label: 'CRP RRBs-XV registration and fee-payment deadline', startsOn: '2026-09-21', status: 'Confirmed',
    sourceName: 'Institute of Banking Personnel Selection', sourceUrl: IBPS_RRB_APPLICATION, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'upsc-geo-scientist-2027-application', examSlug: 'upsc-combined-geo-scientist', examName: 'UPSC Combined Geo-Scientist', goal: 'Government Jobs', type: 'Application',
    label: 'Preliminary examination application deadline', startsOn: '2026-09-22', status: 'Tentative',
    sourceName: 'Union Public Service Commission', sourceUrl: UPSC_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'gate-2027-regular-registration', examSlug: 'gate', examName: 'GATE', goal: 'Engineering & Technology', type: 'Application',
    label: 'Regular registration closes without late fee', startsOn: '2026-09-27', status: 'Tentative',
    sourceName: 'IIT Madras, GATE 2027', sourceUrl: GATE_2027, sourceCheckedOn: '2026-09-16', updateSlug: 'gate-2027-registration-opening-awaited',
  },
  {
    id: 'ibps-po-16-main', examSlug: 'ibps-po', examName: 'IBPS PO', goal: 'Government Jobs', type: 'Exam',
    label: 'CRP PO/MT-XVI Main examination', startsOn: '2026-10-04', status: 'Tentative',
    sourceName: 'Institute of Banking Personnel Selection', sourceUrl: IBPS_2026_27, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'gate-2027-late-registration', examSlug: 'gate', examName: 'GATE', goal: 'Engineering & Technology', type: 'Application',
    label: 'Extended registration closes with late fee', startsOn: '2026-10-05', status: 'Tentative',
    sourceName: 'IIT Madras, GATE 2027', sourceUrl: GATE_2027, sourceCheckedOn: '2026-09-16', updateSlug: 'gate-2027-registration-opening-awaited',
  },
  {
    id: 'upsc-ese-2027-application', examSlug: 'upsc-engineering-services', examName: 'UPSC ESE', goal: 'Engineering & Technology', type: 'Application',
    label: 'Engineering Services Preliminary application deadline', startsOn: '2026-10-06', status: 'Tentative',
    sourceName: 'Union Public Service Commission', sourceUrl: UPSC_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'ibps-clerk-16-prelims', examSlug: 'ibps-clerk', examName: 'IBPS Clerk', goal: 'Government Jobs', type: 'Exam',
    label: 'CRP CSA-XVI Preliminary examination', startsOn: '2026-10-10', endsOn: '2026-10-11', status: 'Tentative',
    sourceName: 'Institute of Banking Personnel Selection', sourceUrl: IBPS_2026_27, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'gate-2027-rectification', examSlug: 'gate', examName: 'GATE', goal: 'Engineering & Technology', type: 'Correction',
    label: 'Application rectification window', startsOn: '2026-10-14', endsOn: '2026-10-21', status: 'Tentative',
    sourceName: 'IIT Madras, GATE 2027', sourceUrl: GATE_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'clat-2027-application', examSlug: 'clat', examName: 'CLAT', goal: 'Law & Judiciary', type: 'Application',
    label: 'CLAT 2027 application deadline', startsOn: '2026-10-31T23:59:00+05:30', status: 'Confirmed',
    sourceName: 'Consortium of National Law Universities', sourceUrl: CLAT_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'ibps-so-16-main', examSlug: 'ibps-so', examName: 'IBPS SO', goal: 'Government Jobs', type: 'Exam',
    label: 'CRP SPL-XVI Main examination', startsOn: '2026-11-01', status: 'Tentative',
    sourceName: 'Institute of Banking Personnel Selection', sourceUrl: IBPS_2026_27, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'ibps-rrb-15-officer-prelims', examSlug: 'ibps-rrb-officer-scale-1', examName: 'IBPS RRB Officer', goal: 'Government Jobs', type: 'Exam',
    label: 'Officer Scale I Preliminary examination', startsOn: '2026-11-21', endsOn: '2026-11-22', status: 'Tentative',
    sourceName: 'Institute of Banking Personnel Selection', sourceUrl: IBPS_2026_27, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'clat-2027-exam', examSlug: 'clat', examName: 'CLAT', goal: 'Law & Judiciary', type: 'Exam',
    label: 'CLAT 2027 examination', startsOn: '2026-12-06T14:00:00+05:30', endsOn: '2026-12-06T16:00:00+05:30', status: 'Tentative',
    sourceName: 'Consortium of National Law Universities', sourceUrl: CLAT_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'ibps-rrb-15-office-assistant-prelims', examSlug: 'ibps-rrb-office-assistant', examName: 'IBPS RRB Office Assistant', goal: 'Government Jobs', type: 'Exam',
    label: 'Office Assistant Preliminary examinations', startsOn: '2026-12-06', endsOn: '2026-12-13', displayDate: '6, 12 and 13 December 2026', status: 'Tentative',
    sourceName: 'Institute of Banking Personnel Selection', sourceUrl: IBPS_2026_27, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'xat-2027-registration', examSlug: 'xat', examName: 'XAT', goal: 'Management & Business', type: 'Application',
    label: 'XAT 2027 registration deadline', startsOn: '2026-12-06', status: 'Confirmed',
    sourceName: 'XLRI Jamshedpur', sourceUrl: XAT_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'ibps-rrb-15-officer-main', examSlug: 'ibps-rrb-officer-scale-1', examName: 'IBPS RRB Officer', goal: 'Government Jobs', type: 'Exam',
    label: 'Officer Scale I Main and Scale II/III single examination', startsOn: '2026-12-20', status: 'Tentative',
    sourceName: 'Institute of Banking Personnel Selection', sourceUrl: IBPS_2026_27, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'xat-2027-admit-card', examSlug: 'xat', examName: 'XAT', goal: 'Management & Business', type: 'Admit Card',
    label: 'Admit-card download scheduled to begin', startsOn: '2026-12-20', status: 'Tentative',
    sourceName: 'XLRI Jamshedpur', sourceUrl: XAT_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'upsc-nda-1-2027-application', examSlug: 'nda', examName: 'NDA', goal: 'Defence & Uniformed Services', type: 'Application',
    label: 'NDA & NA I application deadline', startsOn: '2026-12-22', status: 'Tentative',
    sourceName: 'Union Public Service Commission', sourceUrl: UPSC_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'upsc-cds-1-2027-application', examSlug: 'cds', examName: 'CDS', goal: 'Defence & Uniformed Services', type: 'Application',
    label: 'CDS I application deadline', startsOn: '2026-12-22', status: 'Tentative',
    sourceName: 'Union Public Service Commission', sourceUrl: UPSC_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'ibps-clerk-16-main', examSlug: 'ibps-clerk', examName: 'IBPS Clerk', goal: 'Government Jobs', type: 'Exam',
    label: 'CRP CSA-XVI Main examination', startsOn: '2026-12-27', status: 'Tentative',
    sourceName: 'Institute of Banking Personnel Selection', sourceUrl: IBPS_2026_27, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'xat-2027-exam', examSlug: 'xat', examName: 'XAT', goal: 'Management & Business', type: 'Exam',
    label: 'XAT 2027 examination', startsOn: '2027-01-03T14:00:00+05:30', endsOn: '2027-01-03T17:00:00+05:30', status: 'Confirmed',
    sourceName: 'XLRI Jamshedpur', sourceUrl: XAT_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'gate-2027-city-allotment', examSlug: 'gate', examName: 'GATE', goal: 'Engineering & Technology', type: 'City Intimation',
    label: 'City allotment notification', startsOn: '2027-01-04', status: 'Tentative',
    sourceName: 'IIT Madras, GATE 2027', sourceUrl: GATE_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'upsc-geo-scientist-2027-prelims', examSlug: 'upsc-combined-geo-scientist', examName: 'UPSC Combined Geo-Scientist', goal: 'Government Jobs', type: 'Exam',
    label: 'Preliminary examination', startsOn: '2027-01-10', status: 'Tentative',
    sourceName: 'Union Public Service Commission', sourceUrl: UPSC_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'upsc-cse-2027-notification', examSlug: 'upsc-cse', examName: 'UPSC CSE', goal: 'Government Jobs', type: 'Notification',
    label: 'Civil Services Preliminary notification scheduled', startsOn: '2027-01-13', status: 'Tentative',
    sourceName: 'Union Public Service Commission', sourceUrl: UPSC_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'upsc-ese-2027-prelims', examSlug: 'upsc-engineering-services', examName: 'UPSC ESE', goal: 'Engineering & Technology', type: 'Exam',
    label: 'Engineering Services Preliminary examination', startsOn: '2027-01-31', status: 'Tentative',
    sourceName: 'Union Public Service Commission', sourceUrl: UPSC_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'upsc-cse-2027-application', examSlug: 'upsc-cse', examName: 'UPSC CSE', goal: 'Government Jobs', type: 'Application',
    label: 'Civil Services Preliminary application deadline', startsOn: '2027-02-02', status: 'Tentative',
    sourceName: 'Union Public Service Commission', sourceUrl: UPSC_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'gate-2027-exams', examSlug: 'gate', examName: 'GATE', goal: 'Engineering & Technology', type: 'Exam',
    label: 'GATE 2027 examination dates', startsOn: '2027-02-06', endsOn: '2027-02-21', displayDate: '6 to 7, 13 to 14 and 20 to 21 February 2027', status: 'Tentative',
    sourceName: 'IIT Madras, GATE 2027', sourceUrl: GATE_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'upsc-capf-2027-notification', examSlug: 'upsc-capf-ac', examName: 'UPSC CAPF', goal: 'Defence & Uniformed Services', type: 'Notification',
    label: 'CAPF (ACs) notification scheduled', startsOn: '2027-02-17', status: 'Tentative',
    sourceName: 'Union Public Service Commission', sourceUrl: UPSC_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'upsc-capf-2027-application', examSlug: 'upsc-capf-ac', examName: 'UPSC CAPF', goal: 'Defence & Uniformed Services', type: 'Application',
    label: 'CAPF (ACs) application deadline', startsOn: '2027-03-09', status: 'Tentative',
    sourceName: 'Union Public Service Commission', sourceUrl: UPSC_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'gate-2027-result', examSlug: 'gate', examName: 'GATE', goal: 'Engineering & Technology', type: 'Result',
    label: 'Result announcement scheduled', startsOn: '2027-03-19', status: 'Tentative',
    sourceName: 'IIT Madras, GATE 2027', sourceUrl: GATE_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'upsc-nda-1-2027-exam', examSlug: 'nda', examName: 'NDA', goal: 'Defence & Uniformed Services', type: 'Exam',
    label: 'NDA & NA I examination', startsOn: '2027-04-11', status: 'Tentative',
    sourceName: 'Union Public Service Commission', sourceUrl: UPSC_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'upsc-cds-1-2027-exam', examSlug: 'cds', examName: 'CDS', goal: 'Defence & Uniformed Services', type: 'Exam',
    label: 'CDS I examination', startsOn: '2027-04-11', status: 'Tentative',
    sourceName: 'Union Public Service Commission', sourceUrl: UPSC_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'upsc-cse-2027-prelims', examSlug: 'upsc-cse', examName: 'UPSC CSE', goal: 'Government Jobs', type: 'Exam',
    label: 'Civil Services Preliminary examination', startsOn: '2027-05-23', status: 'Tentative',
    sourceName: 'Union Public Service Commission', sourceUrl: UPSC_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'upsc-ese-2027-main', examSlug: 'upsc-engineering-services', examName: 'UPSC ESE', goal: 'Engineering & Technology', type: 'Exam',
    label: 'Engineering Services Main examination', startsOn: '2027-06-18', status: 'Tentative',
    sourceName: 'Union Public Service Commission', sourceUrl: UPSC_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'upsc-capf-2027-exam', examSlug: 'upsc-capf-ac', examName: 'UPSC CAPF', goal: 'Defence & Uniformed Services', type: 'Exam',
    label: 'CAPF (ACs) examination', startsOn: '2027-07-04', status: 'Tentative',
    sourceName: 'Union Public Service Commission', sourceUrl: UPSC_2027, sourceCheckedOn: '2026-09-16',
  },
  {
    id: 'upsc-cse-2027-main', examSlug: 'upsc-cse', examName: 'UPSC CSE', goal: 'Government Jobs', type: 'Exam',
    label: 'Civil Services Main examination', startsOn: '2027-08-20', endsOn: '2027-08-24', displayDate: 'From 20 August 2027 · 5 days', status: 'Tentative',
    sourceName: 'Union Public Service Commission', sourceUrl: UPSC_2027, sourceCheckedOn: '2026-09-16',
  },
];

const GOVERNMENT_EXAM_SLUGS = new Set([
  'ssc-selection-post',
  'ibps-rrb-officer-scale-1',
  'ibps-rrb-office-assistant',
  'ibps-po',
  'ibps-clerk',
  'ibps-so',
  'upsc-cse',
  'upsc-combined-geo-scientist',
  'upsc-engineering-services',
  'upsc-capf-ac',
  'nda',
  'cds',
]);

// Public-sector banking recruitment is included because students commonly
// plan IBPS exams alongside SSC, UPSC and defence recruitment.
export const GOVERNMENT_EXAM_EVENTS = EXAM_CALENDAR_EVENTS.filter((event) =>
  GOVERNMENT_EXAM_SLUGS.has(event.examSlug),
);

export function calendarEventTimestamp(date: string, endOfDay = false): number {
  if (date.includes('T')) return new Date(date).getTime();
  return new Date(`${date}T${endOfDay ? '23:59:59.999' : '00:00:00'}+05:30`).getTime();
}

export function getUpcomingCalendarEvents(
  events: ExamCalendarEvent[],
  asOf: number,
  limit = 3,
  examSlug?: string,
): ExamCalendarEvent[] {
  return events
    .filter((event) => (!examSlug || event.examSlug === examSlug)
      && calendarEventTimestamp(event.endsOn ?? event.startsOn, true) >= asOf)
    .sort((a, b) => calendarEventTimestamp(a.startsOn) - calendarEventTimestamp(b.startsOn))
    .slice(0, limit);
}

export function formatCalendarDate(date: string): string {
  const options: Intl.DateTimeFormatOptions = date.includes('T')
    ? { day: 'numeric', month: 'short', year: 'numeric', hour: 'numeric', minute: '2-digit', timeZone: 'Asia/Kolkata' }
    : { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Kolkata' };
  return new Intl.DateTimeFormat('en-IN', options).format(new Date(date.includes('T') ? date : `${date}T12:00:00+05:30`));
}

export function formatCalendarEventDate(event: ExamCalendarEvent): string {
  if (event.displayDate) return event.displayDate;
  if (!event.endsOn) return formatCalendarDate(event.startsOn);
  if (event.startsOn.slice(0, 10) === event.endsOn.slice(0, 10)) return `${formatCalendarDate(event.startsOn)} to ${new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: '2-digit', timeZone: 'Asia/Kolkata' }).format(new Date(event.endsOn))}`;
  return `${formatCalendarDate(event.startsOn)} to ${formatCalendarDate(event.endsOn)}`;
}

function compactDate(date: string): string {
  return date.slice(0, 10).replaceAll('-', '');
}

function nextDate(date: string): string {
  const value = new Date(`${date.slice(0, 10)}T00:00:00Z`);
  value.setUTCDate(value.getUTCDate() + 1);
  return compactDate(value.toISOString());
}

function utcCalendarDate(date: string): string {
  return new Date(date).toISOString().replaceAll('-', '').replaceAll(':', '').replace(/\.\d{3}Z$/, 'Z');
}

function calendarRange(event: ExamCalendarEvent): string {
  if (!event.startsOn.includes('T')) {
    return `${compactDate(event.startsOn)}/${nextDate(event.endsOn ?? event.startsOn)}`;
  }
  const start = utcCalendarDate(event.startsOn);
  const end = event.endsOn?.includes('T')
    ? utcCalendarDate(event.endsOn)
    : utcCalendarDate(new Date(new Date(event.startsOn).getTime() + 60 * 60 * 1000).toISOString());
  return `${start}/${end}`;
}

function escapeIcs(value: string): string {
  return value.replaceAll('\\', '\\\\').replaceAll('\n', '\\n').replaceAll(',', '\\,').replaceAll(';', '\\;');
}

export function googleCalendarUrl(event: ExamCalendarEvent): string {
  const details = `${event.status} date. Source: ${event.sourceName}. ${event.sourceUrl}`;
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(`${event.examName}: ${event.label}`)}&dates=${calendarRange(event)}&details=${encodeURIComponent(details)}&ctz=Asia%2FKolkata`;
}

export function buildIcsCalendar(events: ExamCalendarEvent[], name: string): string {
  const eventLines = events.flatMap((event) => {
    const timed = event.startsOn.includes('T');
    const start = timed ? `DTSTART:${utcCalendarDate(event.startsOn)}` : `DTSTART;VALUE=DATE:${compactDate(event.startsOn)}`;
    const end = timed
      ? `DTEND:${event.endsOn?.includes('T') ? utcCalendarDate(event.endsOn) : utcCalendarDate(new Date(new Date(event.startsOn).getTime() + 60 * 60 * 1000).toISOString())}`
      : `DTEND;VALUE=DATE:${nextDate(event.endsOn ?? event.startsOn)}`;
    return [
      'BEGIN:VEVENT',
      `UID:${event.id}@takemocktest.com`,
      `DTSTAMP:${compactDate(event.sourceCheckedOn)}T000000Z`,
      start,
      end,
      `SUMMARY:${escapeIcs(`${event.examName}: ${event.label}`)}`,
      `DESCRIPTION:${escapeIcs(`${event.status} date. Source: ${event.sourceName}. ${event.sourceUrl}`)}`,
      `URL:${event.sourceUrl}`,
      'END:VEVENT',
    ];
  });
  return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//TakeMockTest//Exam Calendar//EN', 'CALSCALE:GREGORIAN', `X-WR-CALNAME:${escapeIcs(name)}`, ...eventLines, 'END:VCALENDAR', ''].join('\r\n');
}
