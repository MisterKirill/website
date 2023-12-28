import './globals.css'
import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import Snowfall from "@/components/Snowfall";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mister Kirill',
  description: "Hey 👋! My name is Kirill, I am a fifteen-year old full-stack TypeScript and Go developer.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className={`fixed -z-10 bg-background w-screen h-screen bg-fixed bg-center`}/>
      <Header/>
      {children}
      <Snowfall />
      </body>
    </html>
  )
}
