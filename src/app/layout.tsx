import { Lexend } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const lexend = Lexend({
  variable: '--font-lexend',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${lexend.variable} font-lexend bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-200 antialiased transition-colors`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="flex flex-col h-screen">
            <NavBar />

            <main className="container my-32 grow">{children}</main>

            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
