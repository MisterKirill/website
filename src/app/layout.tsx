import type { Metadata } from 'next';
import { Lexend, Noto_Sans } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import { ThemeProvider } from 'next-themes';

const lexend = Lexend({
  variable: '--font-lexend',
  subsets: ['latin'],
});

const notoSans = Noto_Sans({
  variable: '--font-noto-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Kirill Siukhin',
  description: 'The personal website of Kirill Siukhin – programmer, musician and chess player.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lexend.variable} ${notoSans.variable} font-lexend bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-200 antialiased transition-colors`}>
        <ThemeProvider attribute="class">
          <NavBar />

          <main className="container mt-32">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
