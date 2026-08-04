// This is a good-faith draft aligned to India's Digital Personal Data
// Protection Act, 2023 (DPDP Act) and written to accurately reflect what
// this site actually does (no accounts, no server-side storage of test
// data). It is a starting point, not legal advice — have it reviewed by a
// qualified professional before relying on it for compliance.

import { pageMetadata } from '@/lib/metadata';
import { SITE_EMAIL } from '@/lib/schema';

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return pageMetadata({
    title: 'Privacy Policy',
    description: 'How TakeMockTest handles local test results, technical logs, and personal information.',
    path: `/${country}/privacy`,
    noIndex: true,
  });
}

const SECTIONS = [
  {
    heading: 'Who this policy covers',
    body: [
      'This Privacy Policy explains how TakeMockTest ("we", "us") handles information in connection with this website. It is intended to comply with the principles of India\'s Digital Personal Data Protection Act, 2023 (DPDP Act).',
      'Effective date: 30 July 2026.',
    ],
  },
  {
    heading: 'What we collect — and what we deliberately don\'t',
    body: [
      'No account or sign-up is required to use TakeMockTest, and we do not collect personal data just to let you browse or take a mock test.',
      'Test attempts and answers: when you take a mock test, your answers, score, and results are stored only in your own browser\'s local storage. This data is never transmitted to, or stored on, our servers — we have no visibility into your individual test attempts or scores.',
      `Direct contact: if you email us at ${SITE_EMAIL}, we receive your email address and message only so we can respond to your support, correction, or privacy request.`,
      'Standard technical logs: like most websites, our hosting provider automatically logs basic technical information (such as IP address, browser type, and pages requested) for security and performance purposes.',
      'Advertising cookies: if and when this site displays third-party ads (e.g. Google AdSense), the ad provider may use cookies to serve relevant ads. We do not control these cookies directly — see the ad provider\'s own privacy policy for details, and use your browser settings or the ad provider\'s opt-out tools to manage them.',
    ],
  },
  {
    heading: 'Why we process this information',
    body: [
      'To keep the site secure and working correctly (technical logs).',
      'To respond to support, question-correction, and privacy requests that you choose to send by email.',
      'To support the site through advertising, where enabled, so it can remain free to use.',
      'We do not sell personal data, and we do not use your test results for any purpose beyond displaying them back to you in your own browser.',
    ],
  },
  {
    heading: 'Your rights under the DPDP Act, 2023',
    body: [
      'Where applicable, you have the right to access information we hold about you, request correction or erasure, withdraw consent you\'ve previously given, and file a grievance if you believe your data has been mishandled. You may also nominate another individual to exercise these rights on your behalf in the event of your death or incapacity.',
      'Because test data never leaves your device, most of these rights are already in your direct control — clearing your browser\'s local storage permanently deletes your test history.',
    ],
  },
  {
    heading: 'Grievance Officer',
    body: [
      `Grievance contact: TakeMockTest support team. Email ${SITE_EMAIL} with the subject “Privacy grievance”.`,
      'We will acknowledge and address valid privacy grievances in accordance with applicable Indian law.',
    ],
  },
  {
    heading: 'Children\'s data',
    body: [
      'This site does not require any account and does not knowingly collect personal data from children. Test results are stored only in the browser being used and are not linked to an identity.',
    ],
  },
  {
    heading: 'Third-party links',
    body: [
      'This site may link to external resources (e.g. official exam websites, our blog). We are not responsible for the privacy practices of third-party sites.',
    ],
  },
  {
    heading: 'Changes to this policy',
    body: [
      'We may update this policy as the site evolves (for example, if we introduce accounts or additional data collection in the future). Material changes will be reflected with an updated effective date above.',
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-5 py-6">
      <h1 className="font-sans font-bold text-2xl mb-4 text-ink-900">Privacy Policy</h1>
      <div className="space-y-8">
        {SECTIONS.map((s) => (
          <div key={s.heading}>
            <h2 className="font-sans font-semibold text-base mb-2 text-ink-900">{s.heading}</h2>
            <div className="space-y-2">
              {s.body.map((p, i) => (
                <p key={i} className="text-sm text-ink-500 leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
