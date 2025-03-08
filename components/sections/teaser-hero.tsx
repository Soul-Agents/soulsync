"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TeaserHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-navy via-deep-space to-cosmic-purple" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      {/* Crypto Bunny Graphic */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          style={{ width: '100%', height: '100%', position: 'relative' }}
        >
          <Image
            src="/crypto_bunny.webp"
            alt="Crypto Bunny"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text glitch-text">
            Your AI Agent for X (Twitter) is Here
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
            Autonomous Community Engagement. Personalized Brand Voice. Real-Time Market Insights.
          </p>

          {/* CTA */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/app"
              className="group flex items-center gap-3 px-8 py-4 rounded-xl 
                     bg-gradient-to-r from-neon-pink to-electric-purple
                     hover:opacity-90 transition-all duration-300 text-lg font-semibold"
            >
              Enter App
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
