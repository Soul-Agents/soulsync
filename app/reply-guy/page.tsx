"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Bot, Brain, Webhook, Database, MessageSquare, Coins, Network, Users } from "lucide-react";

const features = [
  {
    icon: <Bot className="w-6 h-6 text-electric-purple" />,
    title: "Autonomous AI Agent",
    description: "Custom-trained on your brand voice for authentic engagement"
  },
  {
    icon: <Brain className="w-6 h-6 text-electric-purple" />,
    title: "GIGABRAIN Integration",
    description: "Advanced market analysis and trading insights"
  },
  {
    icon: <Webhook className="w-6 h-6 text-electric-purple" />,
    title: "API Integration",
    description: "Connect with any third-party service or platform"
  },
  {
    icon: <Database className="w-6 h-6 text-electric-purple" />,
    title: "Knowledge Base",
    description: "Train your AI on your project's documentation and data"
  },
  {
    icon: <MessageSquare className="w-6 h-6 text-electric-purple" />,
    title: "Multi-Platform Support",
    description: "X (Twitter), Telegram, and Discord integration (soon)"
  },
  {
    icon: <Coins className="w-6 h-6 text-electric-purple" />,
    title: "Trading Capabilities",
    description: "Automated trading with risk management"
  },
  {
    icon: <Network className="w-6 h-6 text-electric-purple" />,
    title: "Onchain Integration",
    description: "Real-time blockchain data and smart contract interaction"
  },
  {
    icon: <Users className="w-6 h-6 text-electric-purple" />,
    title: "AI Agent Swarm",
    description: "Deploy multiple coordinated AI agents"
  }
];

export default function ReplyGuy() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-electric-purple/5 to-black pt-24 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 relative">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center justify-center"
          >
            <span className="px-4 py-2 bg-electric-purple/10 rounded-full text-electric-purple text-sm font-semibold border border-electric-purple/20 shadow-lg">
              Powered by Soul Agents Technology ✨
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-6xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Reply Guy
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Create your own autonomous AI agent for X (Twitter) engagement, community management, 
            and brand interaction. Customized with your voice and knowledge base to represent your project authentically.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <a
              href="https://forms.gle/zxe1hgrbL8rbTELL7"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-electric-purple to-neon-pink rounded-xl text-white hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-300 hover:scale-105 font-semibold"
            >
              Get Started →
            </a>
            <Link
              href="/cases"
              className="px-8 py-4 bg-electric-purple/20 text-electric-purple border border-electric-purple/30 rounded-xl hover:bg-electric-purple/30 transition-all duration-300 font-semibold"
            >
              View Case Studies
            </Link>
            <Link
              href="/cryptobunny"
              className="px-8 py-4 bg-electric-purple/20 text-electric-purple border border-electric-purple/30 rounded-xl hover:bg-electric-purple/30 transition-all duration-300 font-semibold"
            >
              See Crypto Bunny AI
            </Link>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="glass-card p-6 rounded-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-electric-purple/20 flex items-center justify-center mb-4 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 gradient-text">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .glass-card {
          backdrop-filter: blur(10px);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(147, 51, 234, 0.1);
          background: rgba(147, 51, 234, 0.03);
        }

        .glass-card:hover {
          border-color: rgba(147, 51, 234, 0.2);
          box-shadow: 0 5px 20px -5px rgba(147, 51, 234, 0.3);
        }

        .gradient-text {
          background: linear-gradient(to right, #9333ea, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 30px rgba(147, 51, 234, 0.2);
        }
      `}</style>
    </main>
  );
}
