import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-dark-navy via-deep-space to-cosmic-purple">
      <div className="container mx-auto px-4 text-center">
        <div className="text-container">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in-up">
            Soulful AI Agents
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Building genuine connections and communities on X through AI-powered engagement
          </p>
        </div>
        <button className="button-gradient text-white font-bold px-8 py-4 rounded-lg text-lg animate-fade-in-up animation-delay-600">
          Get Started
        </button>
      </div>
    </section>
  )
}