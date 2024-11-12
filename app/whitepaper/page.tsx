"use client";
import { motion } from "framer-motion";
import { Menu, ArrowRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const sections = [
  { id: "introduction", label: "Introduction", icon: "🔥" },
  { id: "crypto-bunny", label: "Crypto Bunny", icon: "🐰" },
  { id: "platform", label: "Platform", icon: "🌐" },
  { id: "wallet", label: "Wallet", icon: "💼" },
  { id: "communication", label: "Communication", icon: "🗣️" },
  { id: "features", label: "Features", icon: "🏆" },
  { id: "ai-agents", label: "AI Agents", icon: "🤖" },
  { id: "business", label: "Business", icon: "💰" },
  { id: "roadmap", label: "Roadmap", icon: "🛣️" },
  { id: "conclusion", label: "Conclusion", icon: "🌟" },
  { id: "contact", label: "Contact", icon: "📝" },
];

export default function WhitepaperPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="pt-32 min-h-screen bg-gradient-to-b from-dark-navy via-deep-space to-cosmic-purple">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-50 p-2 glass-card md:hidden"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Side Navigation - Polished Version */}
      <nav
        className={`
          fixed left-0 h-auto w-44 backdrop-blur-lg bg-black/20 
          transform transition-transform duration-300 ease-in-out z-40
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:top-32 md:ml-4
          rounded-xl border border-white/10 glass-card
        `}
      >
        <div className="py-4">
          <ul className="flex flex-col">
            {sections.map(({ id, label, icon }) => (
              <motion.li
                key={id}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  scale: 1.02,
                }}
                className="flex items-center"
              >
                <a
                  href={`#${id}`}
                  className="text-white/70 hover:text-white transition-all flex items-center w-full px-4 py-2 text-sm group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-base mr-2">{icon}</span>
                  <span className="flex-grow text-xs">{label}</span>
                  <ArrowRight className="w-2.5 h-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Main Content */}
      <div className="md:ml-56">
        <div className="container mx-auto px-4 max-w-4xl pb-20">
          {/* Title */}
          <motion.div
            className="glass-card p-8 mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center">
              <span className="text-white mr-4">🌌</span>
              <span className="gradient-text">Soulpaper</span>
              <span className="text-white ml-4">🌌</span>
            </h1>
            <p className="text-xl text-white/80 flex items-center justify-center space-x-2">
              <span>AI-Powered Crypto Trading Platform</span>
              <span className="text-2xl">🤖</span>
            </p>
          </motion.div>

          {/* Introduction */}
          <motion.section
            id="introduction"
            className="glass-card p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-2xl mr-3">🔥</span>
              <span className="gradient-text">
                Unleash the Power of AI in Community Building
              </span>
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                In the rapidly evolving world of cryptocurrency and
                decentralized technologies, artificial intelligence (AI) holds
                the key to transforming how communities engage and interact.
                Soul AI Agents stands at this intersection, merging soulful AI
                with crypto trading to create an optimistic and impactful
                future.
              </p>
              <br></br>
              <p className="text-lg leading-relaxed">
                Established in October 2024, Soul is dedicated to crafting AI
                agents that not only engage but also resonate deeply with users,
                fostering meaningful and authentic interactions.
              </p>
            </div>
          </motion.section>

          {/* Crypto Bunny */}
          <motion.section
            id="crypto-bunny"
            className="glass-card p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-2xl mr-3">🐰</span>
              <span className="gradient-text">The Birth of Crypto Bunny</span>
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                Introducing Crypto Bunny, our pioneering AI agent making her
                debut on the X platform (formerly Twitter). Inspired by our
                visionary Chief AI Engineer, Aleksandra, Crypto Bunny is more
                than just a bot; she embodies the perfect blend of analytical
                prowess and approachable charm. Utilizing X's API, Crypto Bunny
                stays ahead of the latest cryptocurrency trends, providing
                timely insights and engaging content that positions her as a
                leading voice in the crypto community.
              </p>
              <br></br>
              <p className="text-lg leading-relaxed">
                Our strategic partnership with [REDACTED] equips Crypto Bunny
                with a chat-based digital wallet, enabling her to execute
                autonomous trades. Powered by our RAG-based agent workflow,
                Crypto Bunny is the first of many AI agents designed to be as
                intelligent as they are personable, setting the stage for a new
                era of AI-driven community management and trading.
              </p>
            </div>
          </motion.section>

          {/* Platform */}
          <motion.section
            id="platform"
            className="glass-card p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-2xl mr-3">🌐</span>
              <span className="gradient-text">Broadening Our Horizons</span>
            </h2>
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                While our initial focus is on X and Telegram, we are committed
                to expanding Crypto Bunny's presence across multiple platforms,
                including Farcaster/Warpcast and Discord. By integrating with
                these channels, Crypto Bunny will engage in conversations,
                participate in voice chats, and interact with other AI agents
                within communities like the{" "}
                <Link
                  href="https://discord.gg/ai16z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-electric-purple hover:text-neon-pink transition-colors"
                >
                  AI16z arena on Discord
                </Link>
                .
              </p>
              <p className="text-lg leading-relaxed">
                Our innovative long-term memory model ensures that Crypto Bunny
                maintains a consistent personality across all platforms,
                remembering past interactions and building lasting
                relationships. This seamless integration enhances her ability to
                provide valuable insights and foster genuine connections within
                diverse crypto communities.
              </p>
            </div>
          </motion.section>

          {/* Wallet Integration */}
          <motion.section
            id="wallet"
            className="glass-card p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-2xl mr-3">💼</span>
              <span className="gradient-text">Wallet Integration</span>
            </h2>
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                Through secure wallet integration, we empower our AI agents to
                analyze market trends and execute trades independently. This
                integration is fundamental to our vision of creating intelligent
                agents that can actively participate in the crypto ecosystem.
              </p>
              <p className="text-lg leading-relaxed">
                The secure, chat-based digital wallet system allows for informed
                decision-making that reflects both analytical intelligence and
                an understanding of human trading behaviors. This autonomy is
                pivotal to our vision of AI agents as active contributors to the
                crypto ecosystem, rather than mere tools.
              </p>
            </div>
          </motion.section>

          {/* Communication */}
          <motion.section
            id="communication"
            className="glass-card p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-2xl mr-3">🗣️</span>
              <span className="gradient-text">Soulful Communication</span>
            </h2>
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                At Soul, we prioritize making our AI agents feel less robotic
                and more relatable. Through advanced communication skills,
                Crypto Bunny identifies and engages with influential figures in
                the crypto world on X, contributing meaningfully to
                conversations. By aligning her communication style with specific
                brands and community vibes, she becomes a trusted voice that
                users want to interact with.
              </p>
              <p className="text-lg leading-relaxed">
                Our proprietary system ensures that when Crypto Bunny speaks, it
                feels natural and genuine, breaking through the typical robotic
                barriers to offer authentic, human-like interactions. This
                mastery of communication is essential for building trust and
                fostering strong community relationships, and we're bringing
                this capability to our clients who can leverage Crypto Bunny's
                insights to their own advantage by launching satellite agents
                who interact with their communities on X and Telegram.
              </p>
            </div>
          </motion.section>

          {/* Features */}
          <motion.section
            id="features"
            className="glass-card p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-2xl mr-3">🏆</span>
              <span className="gradient-text">
                Community-Driven Intelligence
              </span>
            </h2>
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                Our platform empowers users to create and deploy sophisticated
                AI agents through intuitive prompts. These agents leverage
                advanced social sentiment analysis from X's API, enabling
                intelligent community engagement and brand building.
              </p>
              <p className="text-lg leading-relaxed">
                The platform's leaderboard will showcase top-performing
                strategies as we roll out trading capabilities, with our
                copy-trading system enabling users to replicate successful
                approaches while maintaining their unique voice and brand
                identity.
              </p>
            </div>
          </motion.section>

          {/* AI Agents for the World */}
          <motion.section
            id="ai-agents"
            className="glass-card p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-2xl mr-3">🤖</span>
              <span className="gradient-text">
                The Future of Digital Presence
              </span>
            </h2>
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                Our vision is to democratize AI-powered social engagement,
                enabling anyone to create their own version of Crypto Bunny.
                Starting with X and Telegram, and expanding to Discord and
                Farcaster/Warpcast, these intelligent agents maintain your
                authentic voice while leveraging advanced market analysis and
                community insights.
              </p>
              <p className="text-lg leading-relaxed">
                For Web3 projects and companies, our agents offer sophisticated
                social media management, handling everything from main account
                posts to personalized DM interactions. They intelligently engage
                with relevant content, boost algorithmic visibility, and build
                meaningful connections - all while maintaining natural,
                human-like engagement patterns.
              </p>
              <p className="text-lg leading-relaxed">
                As we expand our ecosystem, users will benefit from an
                integrated suite of tools: intelligent social engagement,
                advanced trading capabilities, and community-driven strategy
                optimization. Please refer to the{" "}
                <Link
                  href="/cases"
                  className="text-electric-purple hover:text-neon-pink transition-colors"
                >
                  Case Studies
                </Link>{" "}
                section to see how our AI agents are transforming digital
                presence and trading performance across the Web3 landscape.
              </p>
            </div>
          </motion.section>

          {/* Business Model */}
          <motion.section
            id="business"
            className="glass-card p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-2xl mr-3">💰</span>
              <span className="gradient-text">Business Model</span>
            </h2>
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-lg leading-relaxed mb-6">
                Our revenue model combines immediate value with long-term growth
                potential:
              </p>
              <div className="grid gap-4">
                {[
                  {
                    title: "AI Agent Subscriptions",
                    description:
                      "Tiered pricing starting at $499/month per agent, with our professional tier at $999/month offering comprehensive X and Telegram integration. Custom solutions available for larger organizations seeking enhanced capabilities.",
                    icon: "🚀",
                  },
                  {
                    title: "Trading Platform",
                    description:
                      "A 1% fee per transaction, with 50% distributed to strategy creators. Performance rankings weighted by portfolio size and time horizon, ensuring fair competition between different trading volumes.",
                    icon: "💎",
                  },
                  {
                    title: "Strategy Marketplace",
                    description:
                      "Users can create, share, and monetize their trading strategies through our prompt marketplace. Top performers will be featured on our leaderboards, ranked by performance metrics and total value locked.",
                    icon: "🎯",
                  },
                  {
                    title: "$SOUL Token",
                    description:
                      "Platform utility token enabling premium features, fee discounts, and revenue sharing opportunities. Staking mechanisms will reward long-term platform engagement and liquidity provision.",
                    icon: "⚡",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                      <span className="text-2xl mr-2">{item.icon}</span>
                      {item.title}
                    </h3>
                    <p className="text-white/80">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Roadmap */}
          <motion.section
            id="roadmap"
            className="glass-card p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-2xl mr-3">🛣️</span>
              <span className="gradient-text">Roadmap</span>
            </h2>
            <div className="prose prose-invert max-w-none space-y-8">
              {[
                {
                  phase: "Phase 1: Launch and Initial Engagement (Q4 2024)",
                  items: [
                    "Launch @soul_agents on X: Kick off with a comprehensive marketing and business development campaign starting November 17, 2024.",
                    "Community Building: Grow our follower base by interacting with key opinion leaders (KOLs), sharing insights about AI, crypto, and memes.",
                    "Initial AI Agent Deployment: Our first AI agent is already operational and ready for launch.",
                  ],
                  status: "current",
                },
                {
                  phase: "Phase 2: Onboarding First Companies (Q1 2025)",
                  items: [
                    "Client Integration: Begin integrating AI agents into the communities of select Web3 projects.",
                    "Customized Solutions: Offer tailored AI agents that match the unique vibe and requirements of each project.",
                    "Expand to Additional Platforms: Explore integration with other platforms based on client needs.",
                  ],
                  status: "upcoming",
                },
                {
                  phase: "Phase 3: $SOUL Token Launch Preparation (2025)",
                  items: [
                    "Marketing Campaigns: Use AI agents to generate buzz and engage with communities about the upcoming $SOUL token.",
                    "Community Rewards: Implement programs where community members can earn $SOUL through engagement and contributions.",
                    "Partnerships: Collaborate with other projects and influencers to broaden our reach.",
                  ],
                  status: "upcoming",
                },
                {
                  phase: "Phase 4: $SOUL Token Launch (Early 2025)",
                  items: [
                    "Token Launch: Officially release the $SOUL token to the public.",
                    "Ecosystem Integration: Enable $SOUL as the primary currency within our AI agent ecosystem.",
                    "Staking and Rewards: Introduce staking mechanisms and reward programs to incentivize holding and using $SOUL.",
                  ],
                  status: "upcoming",
                },
                {
                  phase:
                    "Phase 5: Expansion and Scalability (Late 2025 and Beyond)",
                  items: [
                    "Global Outreach: Expand our services to a global audience, accommodating multiple languages and cultures.",
                    "AI Agent Evolution: Continuously enhance AI capabilities with new features like sentiment analysis and predictive analytics.",
                    "Ecosystem Growth: Encourage third-party developers to build on our platform, fostering innovation and diversification.",
                  ],
                  status: "upcoming",
                },
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  className={`relative pl-8 border-l-2 ${
                    phase.status === "current"
                      ? "border-neon-pink"
                      : "border-electric-purple"
                  }`}
                  whileHover={{ x: 4 }}
                >
                  <div
                    className={`absolute -left-3 top-0 w-4 h-4 rounded-full ${
                      phase.status === "current"
                        ? "bg-neon-pink animate-pulse"
                        : "bg-electric-purple"
                    }`}
                  />
                  <h3
                    className={`text-xl font-bold mb-4 ${
                      phase.status === "current"
                        ? "text-neon-pink"
                        : "text-electric-purple"
                    }`}
                  >
                    {phase.phase}
                    {phase.status === "current" && (
                      <span className="ml-3 text-sm px-2 py-1 bg-neon-pink/20 rounded-full">
                        Current Phase
                      </span>
                    )}
                  </h3>
                  <ul className="space-y-3">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-white/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Conclusion */}
          <motion.section
            id="conclusion"
            className="glass-card p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-2xl mr-3">🌟</span>
              <span className="gradient-text">Conclusion</span>
            </h2>
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                Soul AI Agents is poised to revolutionize community management
                in the crypto landscape by integrating soulful AI into social
                engagement. Our commitment to authentic, human-like interactions
                sets us apart as a leader in the industry. With a robust
                business model designed for scalability and sustainability, Soul
                is on track to achieve rapid growth and profitability.
              </p>
              <p className="text-lg leading-relaxed">
                We invite you to join us in transforming the world of AI-powered
                community management. Together, we can empower each other with
                innovative AI solutions, insightful engagement strategies, and a
                vibrant, community-driven ecosystem.
              </p>
              <p className="text-lg leading-relaxed font-bold italic">
                Embrace the future with Soul, where AI meets soul and technology
                works hand in hand with humanity.
              </p>
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section
            id="contact"
            className="glass-card p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <span className="text-2xl mr-3">📝</span>
              <span className="gradient-text">Contact Us</span>
            </h2>
            <div className="space-y-4">
              {[
                {
                  label: "Website",
                  value: "soulagents.io",
                  href: "https://soulagents.io",
                  icon: "🌐",
                },
                {
                  label: "X (Twitter)",
                  value: "@soul_agents",
                  href: "https://x.com/soul_agents",
                  icon: "🐦",
                },
                {
                  label: "Telegram",
                  value: "@soul_agents",
                  href: "https://t.me/soul_agents",
                  icon: "📱",
                },
                /*                {
                  label: "Email",
                  value: "adam@usesoul.ai",
                  href: "mailto:adam@usesoul.ai",
                  icon: "✉️",
                },
*/
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white/70 hover:text-white group"
                  whileHover={{ x: 4 }}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span className="text-white/60">{item.label}:</span>
                  <span className="text-electric-purple group-hover:text-neon-pink transition-colors">
                    {item.value}
                  </span>
                </motion.a>
              ))}
            </div>
            <p className="mt-8 text-sm text-white/60 italic">
              Note: This whitepaper is a living document and will be updated as
              Soul continues to grow and evolve. For the latest updates and
              detailed tokenomics, please reach out to our team through the
              provided contact channels.
            </p>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
