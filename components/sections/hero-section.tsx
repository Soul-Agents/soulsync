import { Button } from "@/components/ui/button"
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Soul AI Agents
          </h1>
          <p className="text-xl mb-8 text-white/80">
            Intelligent AI agents for Web3 community management.
            Live on X and Telegram.
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/contact">Get Started</Button>
            <Button href="/whitepaper" variant="outline">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}