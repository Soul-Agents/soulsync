import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link 
          href="/" 
          className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-mono"
        >
          Soul
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="nav-link">Features</Link>
          <Link href="#benefits" className="nav-link">Benefits</Link>
          <Link href="#about" className="nav-link">About</Link>
          <Link href="#contact" className="nav-link">Contact</Link>
          
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