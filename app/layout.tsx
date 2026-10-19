import type { Metadata } from 'next';
import { Bricolage_Grotesque, Figtree } from 'next/font/google';
import './globals.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { siteConfig } from './lib/content';

const display = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const body = Figtree({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  title: { default: `${siteConfig.brand} — ${siteConfig.tagline}`, template: `%s | ${siteConfig.brand}` },
  description: siteConfig.description,
  keywords: ['cleaning services', 'commercial cleaning', 'home cleaning', 'sample local business'],
  openGraph: { type: 'website', siteName: siteConfig.brand, title: `${siteConfig.brand} — ${siteConfig.tagline}`, description: siteConfig.description },
  twitter: { card: 'summary_large_image', title: `${siteConfig.brand} — ${siteConfig.tagline}`, description: siteConfig.description },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.brand,
  description: siteConfig.description,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  url: siteConfig.siteUrl || undefined,
  areaServed: ['[City]', '[Area]'],
  priceRange: '$$',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${body.variable}`}>
        {siteConfig.draftNotice && <div className="draft-notice">Design draft · Replace sample content before launch</div>}
        <Header />
        <main className="page-shell">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </body>
    </html>
  );
}
