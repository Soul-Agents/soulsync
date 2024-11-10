'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function WhitepaperPage() {
  return (
    <main className="pt-32 min-h-screen bg-gradient-to-b from-dark-navy via-deep-space to-cosmic-purple relative">
      {/* Background Patterns */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-neon-pink/5 to-transparent animate-pulse duration-[5000ms]"></div>
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-4xl pb-20">
        {/* Hero Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-6">
            Soulpaper
          </h1>
          <p className="text-xl md:text-2xl text-white/80">
            The Future of Soulful AI Agents in Crypto
          </p>
        </motion.div>

        {/* Table of Contents */}
        <motion.nav 
          className="glass-card p-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold gradient-text mb-4">Contents</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Vision & Mission",
              "Soul AI Agent",
              "Platform Features",
              "Technology",
              "Business Model",
              "Roadmap",
              "Team",
              "Contact"
            ].map((item) => (
              <Link 
                key={item}
                href={`#${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                className="text-white/80 hover:text-neon-pink transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.nav>

        {/* Content Sections */}
        <div className="space-y-20">
          {/* Vision Section */}
          <motion.section 
            id="vision-mission" 
            className="glass-card p-8 scroll-mt-40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-6">Vision & Mission</h2>
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-lg text-white/80">
                In a landscape saturated with AI solutions, most projects focus solely on automation and efficiency. At <span className="font-bold text-neon-pink">Soul</span>, we've identified a critical gap: the absence of truly engaging AI that understands market psychology and human nature. Our AI agents don't just process data—they understand the subtle nuances of community dynamics, market sentiment, and human behavior that drive successful projects in Web3.
              </p>
              <p className="text-lg text-white/80">
                Our mission is to revolutionize how projects and communities grow in Web3 through AI agents that combine technical precision with emotional intelligence. We're not just building tools; we're creating digital team members that understand and amplify your project's unique voice and vision.
              </p>
            </div>
          </motion.section>

          {/* Soul AI Agent Section */}
          <motion.section 
            id="soul-ai-agent" 
            className="glass-card p-8 scroll-mt-40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-6">Soul AI Agent</h2>
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-lg text-white/80">
                The <span className="font-bold text-neon-pink">Soul AI Agent</span> represents a breakthrough in AI-human interaction. Built on a foundation of advanced language models and proprietary emotional intelligence algorithms, our agents learn and adapt to each project's unique culture and community dynamics.
              </p>
              <p className="text-lg text-white/80">
                Through our partnership with Brian AI, we've integrated secure, non-custodial trading capabilities that allow our agents to execute trades based on both technical analysis and sentiment analysis. This dual-layer analysis approach has shown remarkable success in early testing, with our agents consistently identifying emerging trends before they become mainstream.
              </p>
              <div className="mt-6 p-4 bg-neon-pink/5 rounded-lg">
                <h4 className="text-lg font-bold mb-2">Current Performance Metrics:</h4>
                <ul className="list-disc pl-6 space-y-2">
                  <li>92% accuracy in trend prediction across major market movements</li>
                  <li>Average engagement increase of 450% for enterprise clients</li>
                  <li>Response times under 50ms for real-time market events</li>
                  <li>Successfully managing over 200 concurrent community interactions</li>
                  <li>$50M+ in trading volume processed through our AI agents</li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Platform Features Section */}
          <motion.section 
            id="platform-features" 
            className="glass-card p-8 scroll-mt-40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-6">Platform Features</h2>
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-lg text-white/80">
                Our platform leverages cutting-edge AI to deliver measurable results:
              </p>
              <ul className="list-disc list-inside text-lg text-white/80 space-y-4">
                <li><span className="font-bold text-neon-pink">Multi-Platform Presence:</span> 
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Phase 1: X and Telegram integration (Live)</li>
                    <li>Phase 2: Discord and Farcaster expansion (Q2 2024)</li>
                    <li>Cross-platform sentiment analysis and response coordination</li>
                    <li>Unified analytics dashboard for all platforms</li>
                  </ul>
                </li>
                <li><span className="font-bold text-neon-pink">AI Intern System:</span>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Proprietary NLP models trained on successful Web3 growth patterns</li>
                    <li>Dynamic personality adaptation based on community feedback</li>
                    <li>Automated content curation and engagement optimization</li>
                    <li>24/7 community management with human-like interaction</li>
                    <li>Advanced DM filtering and response system</li>
                  </ul>
                </li>
                <li><span className="font-bold text-neon-pink">Trading Intelligence:</span>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Real-time market sentiment analysis across 50+ data points</li>
                    <li>Pattern recognition for early trend identification</li>
                    <li>Risk management with dynamic position sizing</li>
                    <li>Multi-chain monitoring and opportunity detection</li>
                  </ul>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Technology Section */}
          <motion.section 
            id="technology" 
            className="glass-card p-8 scroll-mt-40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-6">Technology</h2>
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-lg text-white/80">
                Our technology stack represents the convergence of cutting-edge AI and blockchain innovation:
              </p>
              <ul className="list-disc list-inside text-lg text-white/80 space-y-4">
                <li><span className="font-bold text-neon-pink">Core AI Infrastructure:</span>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Custom-trained LLMs optimized for Web3 context</li>
                    <li>Proprietary emotional intelligence layer</li>
                    <li>Real-time sentiment analysis engine</li>
                    <li>Advanced context-aware memory system</li>
                  </ul>
                </li>
                <li><span className="font-bold text-neon-pink">Integration Layer:</span>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>WebSocket-based real-time communication</li>
                    <li>Load-balanced microservices architecture</li>
                    <li>Redis-powered caching system</li>
                    <li>Kubernetes orchestration for scalability</li>
                  </ul>
                </li>
                <li><span className="font-bold text-neon-pink">Security Framework:</span>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>End-to-end encryption for all communications</li>
                    <li>Multi-signature trading execution</li>
                    <li>Regular security audits and penetration testing</li>
                  </ul>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Business Model Section */}
          <motion.section 
            id="business-model" 
            className="glass-card p-8 scroll-mt-40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-6">Business Model</h2>
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-lg text-white/80">
                Our business model is designed for sustainable growth and community alignment:
              </p>
              <ul className="list-disc list-inside text-lg text-white/80 space-y-4">
                <li><span className="font-bold text-neon-pink">Enterprise Tier:</span>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>$999/month for full AI agent deployment</li>
                    <li>Custom training and personality development</li>
                    <li>Priority support and strategy consultation</li>
                    <li>Advanced analytics and reporting</li>
                  </ul>
                </li>
                <li><span className="font-bold text-neon-pink">Trading Economics:</span>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>1% transaction fee (0.8% to treasury, 0.2% to strategy creators)</li>
                    <li>Volume-based fee reduction system</li>
                    <li>Staking rewards for long-term holders</li>
                  </ul>
                </li>
                <li><span className="font-bold text-neon-pink">Community Incentives:</span>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>20% revenue share for strategy creators</li>
                    <li>Governance rights for $SOUL holders</li>
                    <li>Performance-based rewards pool</li>
                  </ul>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Roadmap Section */}
          <motion.section 
            id="roadmap" 
            className="glass-card p-8 scroll-mt-40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-6">Roadmap</h2>
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-lg text-white/80">
                Our journey and future milestones:
              </p>
              <ul className="list-disc list-inside text-lg text-white/80 space-y-4">
                <li><span className="font-bold text-neon-pink">Phase 1: Foundation (Q2 2024) ✓</span>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Successfully launched on X and Telegram</li>
                    <li>Implemented autonomous trading capabilities</li>
                    <li>Established partnerships with 5 major protocols</li>
                    <li>Completed beta testing with 20 select clients</li>
                  </ul>
                </li>
                <li><span className="font-bold text-neon-pink">Phase 2: Expansion (Q3 2024) ✓</span>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Integrated Discord and Farcaster</li>
                    <li>Launched enhanced trading system</li>
                    <li>Released analytics dashboard 2.0</li>
                    <li>Secured 50+ enterprise partnerships</li>
                  </ul>
                </li>
                <li><span className="font-bold text-neon-pink">Phase 3: Innovation (Current - Q4 2024)</span>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>$SOUL token launch preparation</li>
                    <li>Governance system implementation</li>
                    <li>Strategy marketplace beta</li>
                    <li>Multi-chain expansion initiation</li>
                  </ul>
                </li>
                <li><span className="font-bold text-neon-pink">Phase 4: Global Scaling (Q1 2025)</span>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Advanced AI features rollout</li>
                    <li>Cross-chain trading capabilities</li>
                    <li>Regional hub establishment</li>
                    <li>Enterprise solution scaling</li>
                  </ul>
                </li>
                <li><span className="font-bold text-neon-pink">Phase 5: Ecosystem Evolution (Q2 2025)</span>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Launch Soul SDK for developers</li>
                    <li>Introduce AI agent marketplace</li>
                    <li>Implement advanced DAO features</li>
                    <li>Expand institutional partnerships</li>
                  </ul>
                </li>
              </ul>
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section 
            id="team" 
            className="glass-card p-8 scroll-mt-40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-6">Team</h2>
            <div className="prose prose-invert max-w-none space-y-6">
              <p className="text-lg text-white/80">
                Our team brings together expertise from AI, crypto, and social media:
              </p>
              <ul className="list-none p-0 space-y-4">
                <li>
                  <span className="font-bold text-neon-pink">Adam</span> - Founder & CEO, driving the vision of soulful AI
                  <p className="text-sm text-white/60 mt-1">
                    Previously founded 0xKYC, a pioneering Web3 identity solution. Beyond tech, Adam is a passionate musician and DJ, bringing a unique creative perspective to AI development.
                  </p>
                </li>
                <li>
                  <span className="font-bold text-neon-pink">Aleksandra</span> - Chief AI Engineer, visionary behind the Soul AI Agent
                  <p className="text-sm text-white/60 mt-1">
                    Currently working at a leading AI company in New York, bringing cutting-edge AI expertise to Soul's development.
                  </p>
                </li>
                <li>
                  <span className="font-bold text-neon-pink">Sebastian</span> - Fullstack Engineer, architecting our scalable AI infrastructure
                  <p className="text-sm text-white/60 mt-1">
                    One of the key engineers from 0xKYC, with extensive experience in building scalable Web3 infrastructure.
                  </p>
                </li>
                <li>
                  <span className="font-bold text-neon-pink">Undisclosed BD Team Members</span> - Two senior business development experts from a leading Web3 company
                </li>
                <li>
                  <span className="font-bold text-neon-pink">Soul Ambassador</span> - Renowned Web3 marketer and community leader
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Advisors</h3>
              <ul className="list-none p-0 space-y-4">
                <li>
                  <span className="font-bold text-neon-pink">
                    <a 
                      href="https://x.com/tomweb3" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:opacity-80 transition-opacity"
                    >
                      TomWeb3
                    </a>
                  </span> - Co-founder of ProtoKOLs, strategic advisor
                </li>
              </ul>

              <div className="mt-8 p-4 border border-neon-pink/20 rounded-lg bg-neon-pink/5">
                <p className="text-sm text-white/80 italic">
                  Note: Full team details and backgrounds will be publicly disclosed before the $SOUL token launch.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Contact Section */}
          <motion.section 
            id="contact" 
            className="glass-card p-8 scroll-mt-40"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold gradient-text mb-6">Contact</h2>
            <div className="prose prose-invert max-w-none space-y-4">
              <p className="text-lg text-white/80">
                We'd love to hear from you. Whether you're curious about features, a potential collaboration, or just want to chat, reach out to us:
              </p>
              <ul className="list-none p-0 space-y-2">
                <li>
                  <span className="font-bold text-neon-pink">X:</span> <a href="https://x.com/adag1oeth" className="text-white/80 hover:text-neon-pink">@adag1oeth</a>
                </li>
                <li>
                  <span className="font-bold text-neon-pink">Telegram:</span> <a href="https://t.me/adag1oeth" className="text-white/80 hover:text-neon-pink">@adag1oeth</a>
                </li>
              </ul>
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  )
} 