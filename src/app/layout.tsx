import type { Metadata } from 'next';
import Script from 'next/script';
import { SITE_URL, GA_MEASUREMENT_ID } from '@/lib/schema';
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
      <body className="font-sans text-ink-900 antialiased">
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { anonymize_ip: true });
          `}
        </Script>
      </body>
    </html>
  );
}
