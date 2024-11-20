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

      {/* Side Navigation */}
      <nav
        className={`
          fixed left-0 backdrop-blur-lg bg-black/20 
          transform transition-transform duration-300 ease-in-out z-40
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 
          /* Responsive width */
          w-36 sm:w-40 md:w-44
          /* Responsive positioning - adjusted mobile only */
          top-24 md:top-24 max-h-[calc(100vh-6rem)] /* Changed top-20 to top-24 for mobile only */
          md:max-h-[calc(100vh-6rem)] 
          md:ml-4
          /* Container styles */
          overflow-y-auto
          rounded-xl border border-white/10 glass-card
        `}
      >
        <div className="py-2 md:py-4">
          <ul className="flex flex-col">
            {sections.map(({ id, label, icon }) => (
              <motion.li
                key={id}
                whileHover={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
                className="flex items-center"
              >
                <a
                  href={`#${id}`}
                  className="text-white/70 hover:text-white transition-all flex items-center w-full px-3 md:px-4 py-1.5 md:py-2 text-sm group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-sm md:text-base mr-1.5 md:mr-2">
                    {icon}
                  </span>
                  <span className="flex-grow text-[11px] sm:text-xs">
                    {label}
                  </span>
                  <ArrowRight className="w-2 h-2 md:w-2.5 md:h-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
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
            <h1 className="text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center">
              <span className="text-white mr-4">🌌</span>
              <span className="gradient-text">Soulpaper</span>
              <span className="text-white ml-4">🌌</span>
            </h1>
            <p className="text-xl text-white/80 flex items-center justify-center space-x-2">
              <span>AI-Powered Community Management Platform with Trading</span>
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center break-words">
              <span className="text-xl md:text-2xl mr-3 flex-shrink-0">🔥</span>
              <span className="gradient-text break-words">
                Unleash the Power of AI in Community Building
              </span>
            </h2>
            <div className="prose prose-invert max-w-none space-y-6 overflow-hidden">
              <p className="text-lg leading-relaxed break-words">
                In the rapidly evolving world of cryptocurrency and
                decentralized technologies, artificial intelligence (AI) holds
                the key to transforming how communities engage and interact.
                Soul AI Agents stands at this intersection, merging soulful AI
                with crypto trading to create an optimistic and impactful
                future.
              </p>
              <br></br>
              <p className="text-lg leading-relaxed break-words">
                Established in October 2024, Soul is dedicated to crafting AI
                agents that not only engage but also resonate deeply with users,
                fostering meaningful and authentic interactions through natural
                language strategy creation and multi-chain data analysis.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center break-words">
              <span className="text-xl md:text-2xl mr-3 flex-shrink-0">🐰</span>
              <span className="gradient-text break-words">
                The Birth of Crypto Bunny
              </span>
            </h2>
            <div className="prose prose-invert max-w-none space-y-6 overflow-hidden">
              <p className="text-lg leading-relaxed break-words">
                Introducing Crypto Bunny, our pioneering AI agent making her
                debut on the X platform (formerly Twitter). Inspired by our
                visionary Chief AI Engineer, Aleksandra,{" "}
                <Link
                  href="https://x.com/cryptobunny__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-link font-semibold hover:opacity-80 transition-opacity"
                >
                  Crypto Bunny
                </Link>{" "}
                is more than just a bot; she embodies the perfect blend of
                analytical prowess and approachable charm. Utilizing X's API,
                Crypto Bunny stays ahead of the latest cryptocurrency trends,
                providing timely insights and engaging content that positions
                her as a leading voice in the crypto community.
              </p>
              <br></br>
              <p className="text-lg leading-relaxed break-words">
                Our strategic partnership with leading wallet providers equips
                Crypto Bunny with a chat-based digital wallet, enabling her to
                execute autonomous trades. Powered by our RAG-based agent
                workflow, Crypto Bunny is the first of many AI agents designed
                to be as intelligent as they are personable, setting the stage
                for a new era of AI-driven community management and trading.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center break-words">
              <span className="text-xl md:text-2xl mr-3 flex-shrink-0">🌐</span>
              <span className="gradient-text break-words">
                Multi-Platform Intelligence & Client Solutions
              </span>
            </h2>
            <div className="prose prose-invert max-w-none space-y-6 overflow-hidden">
              <p className="text-lg leading-relaxed break-words">
                While our initial focus is on X and Telegram, we are expanding
                Crypto Bunny's presence across multiple platforms, including
                Farcaster/Warpcast and Discord. Through these channels, Crypto
                Bunny demonstrates capabilities in conversations, voice chat
                participation, and interactions with other AI agents, leveraging
                advanced social sentiment analysis and on-chain data
                integration.
              </p>
              <p className="text-lg leading-relaxed break-words">
                The technology powering Crypto Bunny serves as the foundation
                for our client solutions. Our innovative long-term memory model
                ensures consistent personality across all platforms, remembering
                past interactions and building lasting relationships. This
                proven architecture enables our clients to create their own
                authentic AI agents, leveraging Crypto Bunny's capabilities
                while maintaining their unique brand voice and community
                engagement style.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center break-words">
              <span className="text-xl md:text-2xl mr-3 flex-shrink-0">💼</span>
              <span className="gradient-text break-words">
                Wallet Integration
              </span>
            </h2>
            <div className="prose prose-invert max-w-none space-y-6 overflow-hidden">
              <p className="text-lg leading-relaxed break-words">
                Through our upcoming secure wallet integration, we empower our
                AI agents to analyze market trends and execute trades
                independently. This integration is fundamental to our vision of
                creating intelligent agents that can actively participate in the
                crypto ecosystem.
              </p>
              <p className="text-lg leading-relaxed break-words">
                The secure, chat-based digital wallet system allows for informed
                decision-making that reflects both analytical intelligence and
                an understanding of human trading behaviors. This autonomy is
                pivotal to our vision of AI agents as active contributors to the
                crypto ecosystem.
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center break-words">
              <span className="text-xl md:text-2xl mr-3 flex-shrink-0">🗣️</span>
              <span className="gradient-text break-words">
                Soulful Communication
              </span>
            </h2>
            <div className="prose prose-invert max-w-none space-y-6 overflow-hidden">
              <p className="text-lg leading-relaxed break-words">
                At Soul, we prioritize making our AI agents feel less robotic
                and more relatable. Through advanced communication skills,
                Crypto Bunny identifies and engages with influential figures in
                the crypto world on{" "}
                <Link
                  href="https://x.com/soul_agents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-link font-semibold hover:opacity-80 transition-opacity"
                >
                  @soul_agents
                </Link>{" "}
                on X, contributing meaningfully to conversations. By aligning
                her communication style with specific brands and community
                vibes, she becomes a trusted voice that users want to interact
                with.
              </p>
              <p className="text-lg leading-relaxed break-words">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center break-words">
              <span className="text-xl md:text-2xl mr-3 flex-shrink-0">🏆</span>
              <span className="gradient-text break-words">
                Community-Driven Intelligence
              </span>
            </h2>
            <div className="prose prose-invert max-w-none space-y-6 overflow-hidden">
              <p className="text-lg leading-relaxed break-words">
                While currently works on a custom integration basis, our
                platform will empower users to create and deploy sophisticated
                AI agents through prompts and knowledge base integrations. These
                agents leverage advanced social sentiment analysis from X's API,
                enabling intelligent community engagement and brand building.
              </p>
              <p className="text-lg leading-relaxed break-words">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center break-words">
              <span className="text-xl md:text-2xl mr-3 flex-shrink-0">🤖</span>
              <span className="gradient-text break-words">
                The Future of Digital Presence
              </span>
            </h2>
            <div className="prose prose-invert max-w-none space-y-6 overflow-hidden">
              <p className="text-lg leading-relaxed break-words">
                Our vision is to democratize AI-powered social engagement,
                enabling anyone to create their own version of Crypto Bunny.
                Starting with X and Telegram, and expanding to Discord and
                Farcaster/Warpcast, these intelligent agents maintain your
                authentic voice while leveraging advanced market analysis and
                community insights.
              </p>
              <p className="text-lg leading-relaxed break-words">
                For Web3 projects and companies, our agents offer sophisticated
                social media management, handling everything from main account
                posts to personalized DM interactions. They intelligently engage
                with relevant content, boost algorithmic visibility, and build
                meaningful connections - all while maintaining natural,
                human-like engagement patterns.
              </p>
              <p className="text-lg leading-relaxed break-words">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center break-words">
              <span className="text-xl md:text-2xl mr-3 flex-shrink-0">💰</span>
              <span className="gradient-text break-words">Business Model</span>
            </h2>
            <div className="prose prose-invert max-w-none space-y-6 overflow-hidden">
              <p className="text-lg leading-relaxed mb-6 break-words">
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
                      "A 1% fee per transaction, with 50% distributed to strategy creators. Performance rankings weighted by portfolio size and time horizon.",
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center break-words">
              <span className="text-xl md:text-2xl mr-3 flex-shrink-0">🛣️</span>
              <span className="gradient-text break-words">Roadmap</span>
            </h2>
            <div className="prose prose-invert max-w-none space-y-8 overflow-hidden">
              {[
                {
                  phase: "Phase 1: Launch and Initial Engagement (Q4 2024)",
                  items: [
                    {
                      type: "jsx",
                      content: (
                        <>
                          Launch{" "}
                          <Link
                            href="https://x.com/soul_agents"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gradient-link font-semibold"
                          >
                            @soul_agents
                          </Link>{" "}
                          on X: Kick off with our first AI agent, Crypto Bunny
                          which started on November 20th, 2024.
                        </>
                      ),
                    },
                    "Community Building: Grow our follower base by interacting with key opinion leaders (KOLs), sharing insights about AI, crypto, and memes.",
                    "Initial AI Agent Deployment: Our first AI agent is already operational and ready for launch, together with first client integrations.",
                  ],
                  status: "current",
                },
                {
                  phase: "Phase 2: Onboarding First Companies (Q1 2025)",
                  items: [
                    "Client Integration: Grow our client base by integrating AI agents into the communities of select Web3 projects.",
                    "Tailored Solutions: Offer customized AI agents that match the unique vibe and requirements of each project.",
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
                        {typeof item === "string" ? item : item.content}
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center break-words">
              <span className="text-xl md:text-2xl mr-3 flex-shrink-0">🌟</span>
              <span className="gradient-text break-words">Conclusion</span>
            </h2>
            <div className="prose prose-invert max-w-none space-y-6 overflow-hidden">
              <p className="text-lg leading-relaxed break-words">
                Soul AI Agents is poised to revolutionize community management
                in the crypto landscape by integrating soulful AI into social
                engagement. Our commitment to authentic, human-like interactions
                sets us apart as a leader in the industry. With a robust
                business model designed for scalability and sustainability, Soul
                is on track to achieve rapid growth and profitability.
              </p>
              <p className="text-lg leading-relaxed break-words">
                We invite you to join us in transforming the world of AI-powered
                community management. Together, we can empower each other with
                innovative AI solutions, insightful engagement strategies, and a
                vibrant, community-driven ecosystem.
              </p>
              <p className="text-lg leading-relaxed font-bold italic hover:text-neon-pink transition-colors duration-300">
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
            <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center break-words">
              <span className="text-xl md:text-2xl mr-3 flex-shrink-0">📝</span>
              <span className="gradient-text break-words">Contact Us</span>
            </h2>
            <div className="space-y-4">
              {/* Contact links */}
              <div className="mb-8">
                {[
                  {
                    label: "Website",
                    value: "soulagents.io",
                    href: "https://soulagents.io",
                    icon: "🌐",
                  },
                  {
                    label: "X",
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
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 4 }}
                    className="mb-2"
                  >
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white/70 hover:text-white group break-words"
                    >
                      <span className="text-xl flex-shrink-0">{item.icon}</span>
                      <span className="text-white/60 flex-shrink-0">
                        {item.label}:
                      </span>
                      <span className="gradient-link font-semibold break-all">
                        {item.value}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Buttons with new layout */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a
                  href="https://forms.gle/zxe1hgrbL8rbTELL7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-gradient px-6 py-3 rounded-lg text-sm font-bold text-white hover:opacity-90 transition-all text-center flex-1"
                >
                  Get Started
                </a>
                <a
                  href="https://forms.gle/fGffRz2P45Q2ZH2K8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-gradient-secondary px-6 py-3 rounded-lg text-sm font-bold text-white hover:opacity-90 transition-all text-center flex-1"
                >
                  Join Waitlist
                </a>
              </div>
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
