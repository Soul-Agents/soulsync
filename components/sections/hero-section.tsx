"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-purple/10 to-transparent animate-pulse" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 gradient-text animate-fade-in">
            Soul AI Agents
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-white/80 animate-fade-in-delay">
            Intelligent AI agents for Web3 community management.
            Live on X and Telegram.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-delay-2">
            <Button href="/contact" size="lg">Get Started</Button>
            <Button href="/whitepaper" variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}