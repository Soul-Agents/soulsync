"use client"

import HeroSection from "@/components/sections/hero-section"
import FeaturesSection from "@/components/sections/features-section"
import BenefitsSection from "@/components/sections/benefits-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import AboutSection from "@/components/sections/about-section"
import TechnologySection from "@/components/sections/technology-section"
import PricingSection from "@/components/sections/pricing-section"
import ContactSection from "@/components/sections/contact-section"
import WhitepaperSection from "@/components/sections/whitepaper-section"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <HeroSection />
      <FeaturesSection />
      <BenefitsSection />
      <TestimonialsSection />
      <AboutSection />
      <TechnologySection />
      <PricingSection />
      <ContactSection />
      <WhitepaperSection />
    </main>
  )
}