import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BottomNav from '@/components/BottomNav';
import { COUNTRIES } from '@/lib/exams';

// One line to add here when you launch a second country subfolder.
export function generateStaticParams() {
  return COUNTRIES.map((country) => ({ country }));
}

export default async function CountryLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ country: string }>;
}) {
  const { country } = await params;
  return (
    <div className="site-shell min-h-screen flex flex-col">
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>
      <Header country={country} />
      <main id="main-content" className="flex-1 pb-20 lg:pb-0">{children}</main>
      <Footer country={country} />
      <BottomNav country={country} />
    </div>
  );
}
