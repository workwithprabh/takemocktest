import { redirect } from 'next/navigation';

// Keep the old preview URL working without shipping a conflicting design system.
export default function RetiredThemePreview() {
  redirect('/in');
}
