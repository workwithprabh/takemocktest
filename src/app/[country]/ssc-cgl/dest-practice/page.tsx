import Breadcrumbs from '@/components/Breadcrumbs';
import { COUNTRIES } from '@/lib/exams';
import { pageMetadata } from '@/lib/metadata';
import { breadcrumbSchema } from '@/lib/schema';
import DestPracticeClient from './DestPracticeClient';

const SOURCE_URL = 'https://ssc.gov.in/api/attachment/uploads/masterData/NoticeBoards/Notice_of_adv_cgl_2026.pdf';

export function generateStaticParams() {
  return COUNTRIES.map((country) => ({ country }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return pageMetadata({
    title: 'SSC CGL DEST Practice Test — 15 Minute Typing Test',
    description: 'Practice the SSC CGL Data Entry Speed Test with a 15-minute timer, an original passage, refresh-safe progress, and transparent typing indicators.',
    path: `/${country}/ssc-cgl/dest-practice`,
  });
}

export default async function DestPracticePage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;

  return (
    <div className="mx-auto max-w-6xl px-5 py-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema([
            { name: 'Home', path: `/${country}` },
            { name: 'SSC CGL', path: `/${country}/ssc-cgl` },
            { name: 'Mock tests', path: `/${country}/ssc-cgl/mock-test` },
            { name: 'DEST practice', path: `/${country}/ssc-cgl/dest-practice` },
          ])),
        }}
      />
      <Breadcrumbs items={[
        { label: 'Home', href: `/${country}` },
        { label: 'SSC CGL', href: `/${country}/ssc-cgl` },
        { label: 'Mock tests', href: `/${country}/ssc-cgl/mock-test` },
        { label: 'DEST practice' },
      ]} />
      <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">Qualifying skill practice</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-ink-900 md:text-4xl">SSC CGL DEST Practice Test</h1>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-ink-500 md:text-base">
        SSC conducts the Data Entry Speed Test for about 2,000 key depressions in 15 minutes. This free practice recreates that duration with an original passage; its indicators are not an official SSC result.
      </p>
      <a href={SOURCE_URL} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-semibold text-ink-900 underline">
        View the official SSC CGL notice
      </a>
      <DestPracticeClient />
    </div>
  );
}
