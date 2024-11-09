import type { Metadata } from "next"
import localFont from "next/font/local"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import "./globals.css"

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
  title: "Soulsync - AI-Powered Crypto Trading",
  description: "Experience the future of crypto trading with our AI-powered platform",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-gradient-to-b from-[#0f0f1a] via-[#1a1a2e] to-[#2a2a4a] text-white antialiased">
        <div className="relative">
          {/* Navigation */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-mono">
                Soulsync
              </Link>
              <div className="hidden md:flex items-center space-x-8">
                <Link href="#features" className="nav-link">Features</Link>
                <Link href="#benefits" className="nav-link">Benefits</Link>
                <Link href="#about" className="nav-link">About</Link>
                <Link href="#contact" className="nav-link">Contact</Link>
                <Button className="button-gradient">
                  Get Started
                </Button>
              </div>
            </nav>
          </header>

          {/* Main Content */}
          <main>
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-black/50 backdrop-blur-md border-t border-white/10">
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                    Soulsync
                  </h3>
                  <p className="text-gray-400">
                    Empowering the future of AI-driven crypto trading
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/soulpaper" className="text-gray-400 hover:text-white transition-colors">
                        Soulpaper
                      </Link>
                    </li>
                    <li>
                      <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                        Terms of Service
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Resources</h4>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/docs" className="text-gray-400 hover:text-white transition-colors">
                        Documentation
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                        FAQ
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Connect</h4>
                  <div className="space-y-2">
                    <a 
                      href="https://twitter.com/soulsync" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block text-gray-400 hover:text-white transition-colors"
                    >
                      Twitter
                    </a>
                    <a 
                      href="https://t.me/soulsync" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block text-gray-400 hover:text-white transition-colors"
                    >
                      Telegram
                    </a>
                    <a 
                      href="https://discord.gg/soulsync" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="block text-gray-400 hover:text-white transition-colors"
                    >
                      Discord
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
                © {new Date().getFullYear()} Soulsync. All rights reserved.
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}