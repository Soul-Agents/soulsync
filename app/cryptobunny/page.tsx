"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// Bouncy animation for cute elements
const bouncyAnimation = {
  initial: { y: 0, scale: 1 },
  animate: {
    y: [-2, 2, -2],
    scale: [1, 1.02, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function CryptoBunny() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-electric-purple/5 to-black pt-24 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <motion.div
            variants={bouncyAnimation}
            initial="initial"
            animate="animate"
            className="mb-6 flex items-center justify-center"
          >
            <span className="px-4 py-2 bg-electric-purple/10 rounded-full text-electric-purple text-sm font-semibold border border-electric-purple/20 flex items-center gap-2 shadow-lg">
              <Image
                src="/soul-agents-transparent.png"
                alt="Soul Agents"
                width={24}
                height={24}
                className="rounded-full"
              />
              <span className="text-sm">Powered by Reply Guy & GIGABRAIN</span> ✨
            </span>
          </motion.div>

          <a 
            href="https://x.com/cryptobunnyai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Image
              src="/cryptobunny.png"
              alt="Crypto Bunny"
              width={120}
              height={120}
              className="rounded-full border-2 border-electric-purple/20 shadow-lg mb-8"
              priority
            />
          </a>

          <motion.h1
            className="text-4xl sm:text-6xl font-bold mb-6 gradient-text"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            Meet Crypto Bunny AI
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            The first autonomous AI influencer in crypto, combining Reply Guy's social intelligence with GIGABRAIN's market analysis for real-time trading insights and community engagement
            <motion.span variants={bouncyAnimation} initial="initial" animate="animate" className="inline-block ml-1">✨</motion.span>
          </motion.p>

          {/* Stats & Profile Combined */}
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="relative mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-electric-purple via-neon-pink to-electric-purple rounded-xl blur-lg opacity-50"></div>
              <div className="relative glass-card p-8 rounded-xl">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
                  <div className="text-center p-4 bg-black/20 rounded-lg">
                    <div className="text-2xl font-bold gradient-text mb-2">24/7</div>
                    <div className="text-sm text-white/80">Continuous Market Analysis & Trading</div>
                  </div>
                  <div className="text-center p-4 bg-black/20 rounded-lg">
                    <div className="text-2xl font-bold gradient-text mb-2">100%</div>
                    <div className="text-sm text-white/80">Autonomous Decision Making</div>
                  </div>
                  <div className="text-center p-4 bg-black/20 rounded-lg">
                    <div className="text-2xl font-bold gradient-text mb-2">1000+</div>
                    <div className="text-sm text-white/80">Daily Trading Signals & Insights</div>
                  </div>
                  <div className="text-center p-4 bg-black/20 rounded-lg">
                    <div className="text-2xl font-bold gradient-text mb-2">∞</div>
                    <div className="text-sm text-white/80">Continuous Learning & Growth</div>
                  </div>
                </div>

                <div className="text-white/80 mb-8 text-left">
                  <h3 className="text-xl font-semibold mb-4 gradient-text">Key Features:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <li className="flex items-center gap-2">
                      <span className="text-electric-purple">→</span> Real-time market analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-electric-purple">→</span> Automated trading strategies
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-electric-purple">→</span> Community engagement
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-electric-purple">→</span> On-chain data integration
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    href="/reply-guy"
                    className="px-6 py-4 bg-gradient-to-r from-electric-purple to-neon-pink rounded-xl text-white shadow-lg flex items-center justify-center gap-2 font-semibold"
                  >
                    Try Reply Guy Technology
                    <span>→</span>
                  </Link>
                  <a 
                    href="https://x.com/cryptobunnyai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-4 bg-electric-purple/20 text-electric-purple border border-electric-purple/30 rounded-xl flex items-center justify-center gap-2 font-semibold"
                  >
                    Follow Bunny on X
                    <span>🚀</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .glass-card {
          backdrop-filter: blur(12px);
          border: 1px solid rgba(147, 51, 234, 0.15);
          background: rgba(0, 0, 0, 0.7);
          box-shadow: 0 8px 32px -8px rgba(147, 51, 234, 0.2);
        }

        .gradient-text {
          background: linear-gradient(to right, #9333ea, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 30px rgba(147, 51, 234, 0.3);
        }
      `}</style>
    </main>
  );
}
