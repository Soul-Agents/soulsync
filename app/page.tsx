"use client"

import { HeroSection } from '@/components/sections/hero-section'
import { AboutSection } from '@/components/sections/about-section'
import { FeaturesSection } from '@/components/sections/features-section'
import { TechnologySection } from '@/components/sections/technology-section'
import { BenefitsSection } from '@/components/sections/benefits-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { ContactSection } from '@/components/sections/contact-section'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TechnologySection />
      <BenefitsSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  )
}