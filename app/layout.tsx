import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Aditya Grimaldi \u2014 Civil Engineering Portfolio',
    template: '%s \u2014 Aditya Grimaldi',
  },
  description:
    'Civil engineering portfolio focused on drafting, quantity surveying, estimation, construction documentation, and digital engineering.',
  keywords: [
    'civil engineering',
    'drafter',
    'quantity surveying',
    'cost estimation',
    'construction documentation',
    'AutoCAD',
    'Revit',
    'BIM',
    'Indonesia',
    'Aditya Grimaldi',
  ],
  authors: [{ name: 'Aditya Grimaldi Sanjaya' }],
  creator: 'Aditya Grimaldi Sanjaya',
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://aditagrimaldi.vercel.app',  // TODO: Update with actual domain
    siteName: 'Aditya Grimaldi \u2014 Civil Engineering Portfolio',
    title: 'Aditya Grimaldi \u2014 Civil Engineering Portfolio',
    description:
      'Civil engineering portfolio focused on drafting, quantity surveying, estimation, construction documentation, and digital engineering.',
    images: [
      {
        url: '/images/og-image.jpg', // TODO: Add actual OG image
        width: 1200,
        height: 630,
        alt: 'Aditya Grimaldi \u2014 Civil Engineering Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Grimaldi \u2014 Civil Engineering Portfolio',
    description:
      'Civil engineering portfolio focused on drafting, quantity surveying, estimation, construction documentation, and digital engineering.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',  // TODO: Add actual favicon
  },
};

import { WhatsAppButton } from '@/components/whatsapp-button';
import { ScrollProgressBar } from '@/components/scroll-progress-bar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-text-primary overflow-x-hidden">
        <ScrollProgressBar />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
