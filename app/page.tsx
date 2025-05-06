"use client";

import HeroSection from "@/components/sections/hero-section";
import AboutSection from "@/components/sections/about-section";
import FeaturesSection from "@/components/sections/features-section";
import TechnologySection from "@/components/sections/technology-section";
import PricingSection from "@/components/sections/pricing-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import WhitepaperSection from "@/components/sections/whitepaper-section";
import ContactSection from "@/components/sections/contact-section";
import TeaserHero from "@/components/sections/teaser-hero";

// Main landing page component that assembles all sections
export default function HomePage() {
  return (
    <div>
      <TeaserHero />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TechnologySection />
      <PricingSection />
      <TestimonialsSection />
      <WhitepaperSection />
      <ContactSection />
    </div>
  );
}
