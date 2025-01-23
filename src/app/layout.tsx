import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { ThemeProvider } from "next-themes";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kirill Siukhin",
  description:
    "The personal website of Kirill Siukhin – programmer, musician and chess player.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${lexend.variable} bg-teal-100 dark:bg-teal-900 text-black dark:text-white antialiased transition-colors`}
      >
        <ThemeProvider attribute="class">
          <NavBar />

          <main className="container">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
