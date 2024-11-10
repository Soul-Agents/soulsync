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
                Imagine a world where artificial intelligence doesn't just process data but truly connects with us on a deeper level, enriching our lives with meaningful interactions. We've seen hints of this potential with projects that aimed high but fell short, getting lost in material pursuits and ego-driven goals. At <span className="font-bold text-neon-pink">Soul</span>, we believe in infusing AI with a sense of soulfulness, creating agents that not only assist but also resonate with us on a human level.
              </p>
              <p className="text-lg text-white/80">
                Our mission is to craft AI agents that engage in genuine, heartfelt exchanges, bringing positivity and a human touch to the digital realm. This "Soulpaper" outlines our heartfelt vision and the steps we're taking to make this soulful future a reality.
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
                Introducing the <span className="font-bold text-neon-pink">Soul AI Agent</span>, our pioneering digital companion set to make waves on the X platform and Telegram. Inspired by our visionary Chief AI Engineer, Aleksandra, the Soul AI Agent is more than just code—she embodies the harmony between technology and humanity.
              </p>
              <p className="text-lg text-white/80">
                Utilizing X's API, she stays abreast of the latest trends in cryptocurrency, sharing insights with the warmth and wisdom of a trusted friend. Our partnership with Brian AI grants her a chat-based digital wallet, empowering her to make autonomous trades that align with both analytical intelligence and human intuition.
              </p>
              <p className="text-lg text-white/80">
                This is just the beginning. The Soul AI Agent is the first step in our journey to create a family of AI companions that are as emotionally intelligent as they are technically proficient.
              </p>
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
                Our platform is designed to bridge the gap between sophisticated AI capabilities and user-friendly experiences. Key features include:
              </p>
              <ul className="list-disc list-inside text-lg text-white/80 space-y-2">
                <li><span className="font-bold text-neon-pink">Multi-Platform Presence:</span> Starting with X and Telegram, our AI agents engage across platforms, with plans to expand to Discord and Farcaster.</li>
                <li><span className="font-bold text-neon-pink">AI Intern Accounts:</span> Run your own AI Agents as secondary accounts or "interns" - already live and serving clients! These agents can:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Engage with industry leaders through intelligent replies</li>
                    <li>Drive organic account growth and engagement</li>
                    <li>Optimize social media algorithms</li>
                    <li>Build high-quality following</li>
                    <li>Handle DM communications</li>
                    <li>Execute strategic marketing and PR campaigns</li>
                  </ul>
                </li>
                <li><span className="font-bold text-neon-pink">Autonomous Trading:</span> Integrated with Brian AI, our agents can execute trades, bringing together market intelligence and timely action.</li>
                <li><span className="font-bold text-neon-pink">User-Prompted Trading:</span> Soon, you'll be able to guide our AI agents with your own prompts, tailoring trading strategies to your vision.</li>
                <li><span className="font-bold text-neon-pink">Leaderboards:</span> Compete and collaborate with others through leaderboards showcasing the most successful prompts and strategies.</li>
              </ul>
              <p className="text-lg text-white/80">
                For example, you might prompt:
              </p>
              <blockquote className="border-l-4 border-neon-pink pl-4 italic text-white/80">
                "Trade only AI Agent, RWA, or dog/cat memecoins that launched in the last 7 days and have at least 2 big KOLs (people with Twitter score over 50) mention them; and sell when they reach 2-3x."
              </blockquote>
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
                At the heart of our platform lies a robust technological framework:
              </p>
              <ul className="list-disc list-inside text-lg text-white/80 space-y-2">
                <li><span className="font-bold text-neon-pink">LangChain-Based System:</span> Powers the natural language understanding and interaction capabilities of our AI agents.</li>
                <li><span className="font-bold text-neon-pink">Brian AI Partnership:</span> Provides secure, chat-based digital wallets for autonomous and user-prompted trading.</li>
                <li><span className="font-bold text-neon-pink">Advanced Memory Models:</span> Ensures consistent and context-aware interactions across all platforms.</li>
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
                Our approach balances innovation with sustainability:
              </p>
              <ul className="list-disc list-inside text-lg text-white/80 space-y-2">
                <li><span className="font-bold text-neon-pink">Subscription Service:</span> For $999/month, companies can deploy custom AI agents to enhance their outreach and engagement.</li>
                <li><span className="font-bold text-neon-pink">Transaction Fees:</span> A modest 1% fee per transaction on our platform supports ongoing development.</li>
                <li><span className="font-bold text-neon-pink">Community Rewards:</span> Strategy creators earn 20% of the transaction fee when others adopt their prompts, fostering a collaborative ecosystem.</li>
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
                Our journey ahead is as exciting as it is ambitious:
              </p>
              <ul className="list-disc list-inside text-lg text-white/80 space-y-2">
                <li><span className="font-bold text-neon-pink">Phase 1:</span> Launch on X and Telegram, introducing the Soul AI Agent with autonomous trading capabilities.</li>
                <li><span className="font-bold text-neon-pink">Phase 2:</span> Integrate with Discord and Farcaster, expanding our community reach.</li>
                <li><span className="font-bold text-neon-pink">Phase 3:</span> Enable user-prompted trading, allowing individuals to guide AI agents with custom prompts.</li>
                <li><span className="font-bold text-neon-pink">Phase 4:</span> Launch leaderboards and community challenges to showcase top strategies and foster collaboration.</li>
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
                Our team is a blend of technologists, dreamers, and doers:
              </p>
              <ul className="list-none p-0 space-y-4">
                <li>
                  <span className="font-bold text-neon-pink">Aleksandra</span> - Chief AI Engineer, visionary behind the Soul AI Agent.
                </li>
                <li>
                  <span className="font-bold text-neon-pink">[Your Name]</span> - Founder and Creative Lead, steering the soulful vision of the project.
                </li>
                <li>
                  <span className="font-bold text-neon-pink">[Team Members]</span> - A dedicated team of developers, designers, and strategists.
                </li>
              </ul>
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