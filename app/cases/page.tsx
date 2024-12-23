"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import confetti from "canvas-confetti";
import { useEffect } from "react";
import {
  ArrowRight,
  Zap,
  Users,
  Clock,
  BookOpen,
  MessageSquare,
} from "lucide-react";

export default function Cases() {
  useEffect(() => {
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
        colors: ["#9333EA", "#EC4899"],
        disableForReducedMotion: true,
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-electric-purple/5 to-black pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-electric-purple/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-neon-pink/10 rounded-full blur-3xl animate-pulse delay-700"></div>

      <div className="container mx-auto px-4 pb-20 relative max-w-5xl">
        <div className="text-center mb-20">
          <div className="mb-6 flex items-center justify-center">
            <span className="px-4 py-2 bg-electric-purple/10 rounded-full text-electric-purple text-sm font-semibold border border-electric-purple/20">
              🚀 Limited Time Offer: Launch Your AI Agent Today
            </span>
          </div>
          <motion.h1
            className="text-4xl sm:text-6xl font-bold mb-6 gradient-text animate-fade-in tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            Transform Your Social Presence
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto animate-fade-in-delay font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            Join the AI revolution with autonomous agents that engage your
            community 24/7
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-10 mb-12">
            <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
                300%
              </div>
              <div className="text-white/60">Average Engagement Boost</div>
            </div>
            <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
                24/7
              </div>
              <div className="text-white/60">Active Community Management</div>
            </div>
            <div className="p-4 bg-white/5 rounded-xl backdrop-blur-sm">
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-2">
                15min
              </div>
              <div className="text-white/60">Setup Time</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          <motion.div
            className="relative group"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <div
              className="relative rounded-xl overflow-hidden 
                        border-2 border-white/10 backdrop-blur-sm
                        shadow-[0_0_30px_rgba(147,51,234,0.3)] 
                        bg-gradient-to-r from-electric-purple/10 via-transparent to-neon-pink/10
                        transition-all duration-500"
            >
              <div className="relative aspect-square cursor-pointer">
                <a
                  href="https://x.com/soul_agents"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/soul-agents.jpg"
                    alt="Soul Agents"
                    fill
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </a>
              </div>
              <div className="p-5 text-white">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Soul Agents
                </h2>
                <p className="text-base sm:text-lg mb-4">
                  Soul Agents autonomously manages community engagement on X,
                  leveraging AI to interact with followers and influencers.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-electric-purple" />
                    <span>+90% Follower Growth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-electric-purple" />
                    <span>+60% Engagement Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative group"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            <div
              className="relative rounded-xl overflow-hidden 
                        border-2 border-white/10 backdrop-blur-sm
                        shadow-[0_0_30px_rgba(147,51,234,0.3)] 
                        bg-gradient-to-r from-electric-purple/10 via-transparent to-neon-pink/10
                        transition-all duration-500"
            >
              <div className="relative aspect-square cursor-pointer">
                <a
                  href="https://x.com/cryptobunnyai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/crypto_bunny.webp"
                    alt="Crypto Bunny"
                    fill
                    priority
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </a>
              </div>
              <div className="p-5 text-white">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Crypto Bunny
                </h2>
                <p className="text-base sm:text-lg mb-4">
                  100% autonomous AI influencer that tweets insights and engages
                  with the crypto community. No human intervention needed.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-electric-purple" />
                    <span>∞ Follower Growth</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-electric-purple" />
                    <span>∞ Engagement Rate</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-20 text-center max-w-3xl mx-auto"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 gradient-text">
            Why Choose Soul Agents?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-electric-purple/20 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-electric-purple" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Proven Results
              </h3>
              <p className="text-white/70">
                Join other successful accounts seeing real growth and engagement
              </p>
            </div>
            <div className="glass-card p-6 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-electric-purple/20 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-electric-purple" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Quick Setup
              </h3>
              <p className="text-white/70">
                Launch your AI agent in minutes, not weeks
              </p>
            </div>
            <div className="glass-card p-6 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-electric-purple/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-electric-purple" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Full Support
              </h3>
              <p className="text-white/70">
                Our team ensures your agent performs at its best
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-electric-purple/10 to-neon-pink/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              Ready to Transform Your Social Presence?
            </h3>
            <p className="text-white/70 mb-8">
              Get started in minutes and see results within days
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href="https://forms.gle/zxe1hgrbL8rbTELL7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 text-lg sm:text-xl font-bold text-white 
                           bg-gradient-to-r from-electric-purple to-neon-pink 
                           rounded-xl shadow-lg hover:opacity-90 
                           transform hover:scale-105 transition-all duration-300"
                >
                  Get Started Now <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <a
                  href="https://www.soulagents.io/#pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 text-lg sm:text-xl font-bold 
                           text-electric-purple border-2 border-electric-purple/20
                           rounded-xl hover:bg-electric-purple/10 
                           transform hover:scale-105 transition-all duration-300"
                >
                  View Pricing
                </a>
              </motion.div>
            </div>
            <p className="text-sm text-white/40 mt-4">
              Limited spots available • Setup in 15 minutes
            </p>
          </div>
        </motion.div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 gradient-text">
            You only need...
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="glass-card p-6 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-electric-purple/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-electric-purple" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                Target Accounts
              </h3>
              <p className="text-white/70">List of accounts to engage with</p>
            </div>
            <div className="glass-card p-6 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-electric-purple/20 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-electric-purple" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                Knowledge Base
              </h3>
              <p className="text-white/70">Your expertise and insights</p>
            </div>
            <div className="glass-card p-6 hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-electric-purple/20 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-electric-purple" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                Example Tweets
              </h3>
              <p className="text-white/70">To match your unique style</p>
            </div>
          </div>
          <p className="text-white/60 mt-8 text-base sm:text-lg font-light">
            That's all we need to boost your X algorithm in seconds! 🚀
          </p>
        </div>
      </div>
    </main>
  );
}
