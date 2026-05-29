import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'N7 — The new foundation of modern banking',
  description:
    'Linktia Infosystems CB7 & N7 — Core, Digital and Open Banking solutions that drive innovation, growth, seamless customer experience and operational excellence.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Chivo+Mono:wght@400;500;600&family=Inter:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap"
        />
      </head>
      <body className="bg-bg text-ink">{children}</body>
    </html>
  );
}
