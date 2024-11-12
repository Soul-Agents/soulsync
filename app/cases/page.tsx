"use client";
import { motion } from "framer-motion";
import { Construction } from "lucide-react";
import Image from "next/image";
import confetti from "canvas-confetti";
import { useEffect } from "react";

export default function Cases() {
  useEffect(() => {
    // Trigger confetti when component mounts
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 2,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: randomInRange(0.1, 0.9),
          y: Math.random() - 0.2,
        },
        colors: ["#9333EA", "#EC4899"], // electric-purple and neon-pink
        disableForReducedMotion: true,
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-electric-purple/5 to-black pt-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-purple/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="container mx-auto px-4 pb-20 relative">
        {/* Hero Section with enhanced typography */}
        <div className="text-center mb-24">
          <motion.h1
            className="text-7xl font-bold mb-8 gradient-text animate-fade-in tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Case Studies
          </motion.h1>
          <motion.p
            className="text-2xl text-white/60 max-w-2xl mx-auto animate-fade-in-delay font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Real-world applications of Soul AI Agents
          </motion.p>
        </div>

        {/* Content Grid with glass morphism and advanced hover effects */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Enhanced Crypto Bunny frame */}
          <motion.div
            className="relative group"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-electric-purple to-neon-pink opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-xl"></div>
            <div
              className="relative rounded-xl overflow-hidden 
                        border-2 border-white/10 backdrop-blur-sm
                        shadow-[0_0_30px_rgba(147,51,234,0.3)] 
                        bg-gradient-to-r from-electric-purple/10 via-transparent to-neon-pink/10
                        group-hover:shadow-[0_0_40px_rgba(147,51,234,0.5)]
                        transition-all duration-500"
            >
              <div className="absolute inset-0 bg-stripes opacity-5 group-hover:opacity-10 transition-opacity duration-500"></div>
              <Image
                src="/crypto_bunny.webp"
                alt="Crypto Bunny"
                width={500}
                height={500}
                priority
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

          {/* Enhanced Coming Soon message */}
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div
              className="glass-card p-12 border border-white/10 rounded-xl 
                          backdrop-blur-xl bg-black/20
                          hover:bg-black/30 transition-all duration-500
                          hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]"
            >
              <Construction className="w-20 h-20 mx-auto mb-8 text-electric-purple animate-pulse" />
              <h2 className="text-3xl font-bold mb-6 text-white tracking-tight">
                Coming Soon!
              </h2>
              <p className="text-xl text-white/70 mb-8 leading-relaxed">
                Experience how Soul AI Agents transform community engagement
                across platforms. Our first case studies are in development.
              </p>
              <p className="text-white/60 text-lg">
                Want to be featured?{" "}
                <a
                  href="https://forms.gle/zxe1hgrbL8rbTELL7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-electric-purple hover:text-neon-pink transition-colors inline-flex items-center group"
                >
                  Get in touch
                  <svg
                    className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
