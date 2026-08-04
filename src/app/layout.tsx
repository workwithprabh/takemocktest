import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/schema';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'TakeMockTest — Free Mock Tests for Competitive Exams',
    template: '%s | TakeMockTest',
  },
  description: 'Syllabus-checked mock tests and exam-pattern guidance for competitive exam preparation in India.',
  manifest: '/manifest.json',
  icons: { icon: '/icon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <body className="font-sans text-ink-900 antialiased">{children}</body>
    </html>
  );
}
