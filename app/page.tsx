"use client";

import HeroSection from "@/components/sections/hero-section";
import FeaturesSection from "@/components/sections/features-section";
import PricingSection from "@/components/sections/pricing-section";
import ContactSection from "@/components/sections/contact-section";
import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const router = useRouter();
  const { user } = usePrivy();

  useEffect(() => {
    if (user) {
      router.push("/app");
    }
  }, [user, router]);

  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
}
