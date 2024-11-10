"use client"

import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-purple/10 to-transparent animate-pulse" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />

      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in">
            Soul AI Agents
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-delay">
            Intelligent AI agents for powerful engagement on X
          </p>
          
          <div className="max-w-2xl mx-auto p-6 rounded-lg bg-black/20 backdrop-blur-sm border border-white/5 mb-12 animate-fade-in-delay">
            <div className="flex flex-col items-center space-y-4">
              <div className="flex items-center space-x-3 text-lg text-white/80">
                <span>Automate interactions</span>
                <span className="text-white/40">•</span>
                <span>Build presence</span>
                <span className="text-white/40">•</span>
                <span>Connect with key players</span>
              </div>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <p className="text-sm uppercase tracking-wider text-white/60">
                Trusted by Web3 Leaders
              </p>
            </div>
          </div>

          <div className="animate-fade-in-delay-2">
            <a 
              href="https://forms.gle/zxe1hgrbL8rbTELL7"
              target="_blank"
              rel="noopener noreferrer"
              className="button-gradient inline-block px-8 py-6 text-lg font-bold text-white hover:opacity-90 transition-all transform hover:scale-105 shadow-lg shadow-neon-pink/20 hover:shadow-electric-purple/30"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}