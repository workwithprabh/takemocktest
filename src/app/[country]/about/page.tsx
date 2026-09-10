import Link from 'next/link';
import { pageMetadata } from '@/lib/metadata';
import { EXAM_LIST } from '@/lib/exams';
import { BLOG_POSTS } from '@/lib/blog';

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  return pageMetadata({
    title: 'About and editorial policy',
    description:
      'How TakeMockTest builds its mock tests, where the exam patterns come from, how questions are checked, and how the content is written.',
    path: `/${country}/about`,
  });
}

export default async function AboutPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  // Counted from the catalogue at build time rather than typed into the copy.
  // The previous version of this page said the site covered three exams, and
  // stayed that way while the catalogue grew past a hundred and fifty. A trust
  // page that is quietly wrong about its own scope is worse than no trust page,
  // so the numbers below are derived and cannot drift again.
  const examCount = EXAM_LIST.length;
  const officialPatterns = EXAM_LIST.filter((exam) =>
    exam.stages.some((stage) => stage.pattern?.status === 'official'),
  ).length;
  const reviewPending = EXAM_LIST.filter((exam) =>
    exam.stages.some((stage) => stage.pattern?.status === 'review-pending'),
  ).length;
  const postCount = BLOG_POSTS.length;

  const section = 'space-y-3 text-sm text-ink-500 leading-relaxed';
  const heading = 'font-sans font-semibold text-base text-ink-900 pt-4';
  const link = 'text-ink-900 underline hover:text-ink-500 transition';

  return (
    <div className="max-w-2xl mx-auto px-5 py-6">
      <h1 className="font-sans font-bold text-2xl mb-4 text-ink-900">About TakeMockTest</h1>

      <div className={section}>
        <p>
          TakeMockTest is a free practice platform for competitive exams. It currently covers{' '}
          {examCount} exams across government jobs, engineering, medical, management, law, defence,
          teaching, commerce, design and study-abroad testing. Every mock test is free to attempt and
          needs no account, and every result gives a section-wise breakdown the moment you submit,
          including what negative marking cost you and an explanation for every question you saw,
          right or wrong.
        </p>
      </div>

      <h2 className={heading}>Where the exam patterns come from</h2>
      <div className={section}>
        <p>
          Question counts, timing, marking schemes and section splits are taken from the examining
          body&apos;s own notification, information bulletin or syllabus document, never from a coaching
          blog or a search snippet. Each pattern carries the source it was read from and the date it
          was last checked, and both are shown on the exam&apos;s own pages so you can go and verify
          them yourself.
        </p>
        <p>
          {officialPatterns} exams have a pattern marked official, meaning the primary document was
          read directly. {reviewPending} are marked review-pending, which means the structure rests on
          consistent corroboration from secondary sources because the examining body&apos;s own site
          could not be reached when the entry was built. That label is deliberate. We would rather
          publish the caveat than present an unverified pattern as settled.
        </p>
        <p>
          Exam patterns change. If you find something here that no longer matches the current
          notification, tell us on the{' '}
          <Link href={`/${country}/contact`} className={link}>
            contact page
          </Link>{' '}
          and it gets corrected.
        </p>
      </div>

      <h2 className={heading}>How the questions are written and checked</h2>
      <div className={section}>
        <p>
          Questions are written in-house to the published syllabus, not copied from officially
          released papers or from anyone else&apos;s question bank. Each one carries a topic, a
          difficulty label, an explanation, and a record of what it was based on.
        </p>
        <p>
          Before anything ships, an automated audit runs over the whole corpus. It rejects duplicate
          questions across every bank on the site, answer keys that fall into a predictable position,
          option counts that do not match the real paper, and any question missing a topic or an
          explanation. Content whose answer key needs clinical judgement rather than a checkable
          derivation is held back rather than published, which is why some medical papers on this
          site are deliberately shallower than others.
        </p>
      </div>

      <h2 className={heading}>How this content is written</h2>
      <div className={section}>
        <p>
          The exam pages, the {postCount} articles in the blog and the question banks are drafted with
          AI assistance and then checked against primary sources and the automated audits described
          above. We think you should know that, and we would rather say it plainly than let a byline
          imply otherwise.
        </p>
        <p>
          What we commit to is not who typed it, but what it does: every factual claim traceable to a
          source you can open, every explanation written to teach rather than to fill space, and no
          page published purely to exist for a search engine. Where something could not be verified,
          the page says so instead of guessing.
        </p>
      </div>

      <h2 className={heading}>What we do not do</h2>
      <div className={section}>
        <p>
          No paywall, no account wall, no selling of your attempt data, and no invented cutoffs,
          rankings or success statistics. Where a number is not knowable, you will find an
          explanation of why rather than a confident figure.
        </p>
        <p>
          New exams are added only once their question banks and scoring rules are ready, not when the
          landing page is.
        </p>
      </div>
    </div>
  );
}
