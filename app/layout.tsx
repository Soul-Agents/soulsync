import type { Metadata } from "next"
import localFont from "next/font/local"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import "./globals.css"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Soul AI Agents - Next Generation AI Agents",
  description: "Empowering communities with intelligent AI agents",
  keywords: "AI, marketing, business development, X marketing, Telegram marketing",
  authors: [{ name: "Soul Team" }],
  openGraph: {
    title: "Soul AI Agents - AI-Powered Business Development",
    description: "Revolutionizing business growth with AI-powered marketing",
    type: "website",
    locale: "en_US",
    url: "https://usesoul.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soul AI Agents - AI Agents for building of your community on X",
    description: "Revolutionizing business growth with AI-powered marketing",
    creator: "@soul_agents",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#2a2a4a] text-white antialiased">
        <div className="relative flex flex-col min-h-screen">
          {/* Navigation */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-grow">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  )
}