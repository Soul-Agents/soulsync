"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { usePathname } from "next/navigation"

export function Nav() {
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link 
          href="/"
          className="flex flex-col items-start leading-[0.6] -mb-2"
          onClick={(e) => {
            if (isHomePage) {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }
          }}
        >
          <span className="text-[2.75rem] font-bold gradient-text">Soul</span>
          <span className="text-lg font-semibold gradient-text tracking-wider">AI Agents</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {isHomePage ? (
            <>
              <a href="#features" className="nav-link">Features</a>
              <a href="#benefits" className="nav-link">Benefits</a>
              <a href="#testimonials" className="nav-link">Testimonials</a>
              <a href="#about" className="nav-link">About</a>
              <a href="#technology" className="nav-link">Technology</a>
              <a href="#pricing" className="nav-link">Pricing</a>
              <a href="#contact" className="nav-link">Contact</a>
              <a href="#whitepaper" className="nav-link">Whitepaper</a>
            </>
          ) : (
            <Link href="/" className="nav-link">Home</Link>
          )}
          
          {/* User section */}
          <div className="flex items-center gap-4">
            <Button className="button-gradient">
              Get Started
            </Button>
            <Avatar className="cursor-pointer">
              <AvatarImage src="/placeholder-avatar.png" alt="User" />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
    </header>
  )
}