import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  weight: ['500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Wafi Intelligence — Automation for Modern Businesses',
  description:
    'We map your workflow chaos into clean, reliable automations — so you stop managing tasks and start closing deals.',
  openGraph: {
    title: 'Wafi Intelligence',
    description: 'Automate manual complexity into one-click execution.',
    url: 'https://wafiintelligence.com',
    siteName: 'Wafi Intelligence',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-inter antialiased`}>
        {children}
      </body>
    </html>
  );
}
