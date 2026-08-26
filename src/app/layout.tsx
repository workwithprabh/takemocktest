import type { Metadata } from 'next';
import Script from 'next/script';
import { JetBrains_Mono } from 'next/font/google';
import { SITE_URL, GA_MEASUREMENT_ID } from '@/lib/schema';
import './globals.css';

// Self-hosted at build time by next/font: zero external request, no
// render-blocking, automatically subset and preloaded. Replaces the old
// @import from fonts.googleapis.com.
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'TakeMockTest: Free Mock Tests for Competitive Exams',
    template: '%s | TakeMockTest',
  },
  description: 'Syllabus-checked mock tests and exam-pattern guidance for competitive exam preparation in India.',
  manifest: '/manifest.json',
  icons: { icon: '/icon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={jetbrainsMono.variable}>
      <head>
        {/* General Sans isn't on next/font/google, so it's loaded the
            recommended manual way per Next.js's own font-optimization
            docs: a <link rel="stylesheet"> in <head>, discovered
            immediately by the browser's preload scanner instead of only
            after the main stylesheet parses (what @import forced). */}
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
        />
      </head>
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
        {/* Google Preferred Sources: renders an "Add to Preferred Sources"
            button wherever a [google-add-preferred-source-btn] element
            appears (see Footer). No schema/meta tag needed.
            https://developers.google.com/search/docs/appearance/preferred-sources */}
        <Script src="https://news.google.com/swg/js/v1/publisher.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
