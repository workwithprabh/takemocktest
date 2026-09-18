'use client';

import { useEffect, useState } from 'react';

// Native autocomplete for the homepage search box, mounted on the client.
//
// Server-rendering these options was the single heaviest thing on the country
// home: 219 <option> elements came to 15 KB of markup plus 22 KB of RSC
// payload, 17% of the page, for a dropdown that nothing sees until the input is
// focused. Passing the names as two plain arrays instead ships each one once
// rather than three times (React key, value attribute, flight row) and leaves
// the document with the empty datalist alone.
//
// The autocomplete needs JavaScript now, which costs nothing it did not already
// cost: the form posts to the exams page, and that page's results are rendered
// by ExamFinder, a client component. Anyone who can use the search results can
// use the suggestions.
//
// Split by availability rather than carrying a label per option, because the
// two label strings are what made each row expensive.
export default function ExamSuggestions({
  id,
  available,
  listed,
}: {
  id: string;
  available: string[];
  listed: string[];
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <datalist id={id}>
      {mounted && (
        <>
          {available.map((name) => <option key={name} value={name} label="Mock test available" />)}
          {listed.map((name) => <option key={name} value={name} label="Listed, coming soon" />)}
        </>
      )}
    </datalist>
  );
}
