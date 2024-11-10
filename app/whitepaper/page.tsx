'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function WhitepaperPage() {
  return (
    <main className="pt-32 min-h-screen bg-gradient-to-b from-dark-navy via-deep-space to-cosmic-purple">
      <div className="container mx-auto px-4 max-w-4xl pb-20">
        {/* Vision & Current Status */}
        <motion.section className="glass-card p-8 mb-12">
          <h2 className="text-3xl font-bold gradient-text mb-6">Vision & Current Status</h2>
          <div className="prose prose-invert max-w-none space-y-6">
            <p>
              Soul AI Agents was conceived in January 2022 as a solution to the growing need for intelligent community management in Web3. Officially established in October 2024, we're now launching our first AI agents for X and Telegram platforms.
            </p>
            <p>
              Our AI agents combine advanced language processing with community management best practices, helping Web3 projects build and maintain engaged communities without compromising on authenticity or quality of interactions.
            </p>
          </div>
        </motion.section>

        {/* Current Features */}
        <motion.section className="glass-card p-8 mb-12">
          <h2 className="text-3xl font-bold gradient-text mb-6">Live Features</h2>
          <div className="prose prose-invert max-w-none">
            <ul className="space-y-4">
              <li>
                <span className="font-bold text-neon-pink">Community Engagement</span>
                <p>Automated responses to community posts, questions, and discussions on X and Telegram</p>
              </li>
              <li>
                <span className="font-bold text-neon-pink">Quality Filtering</span>
                <p>Smart detection of relevant accounts and conversations, ensuring meaningful interactions</p>
              </li>
            </ul>
          </div>
        </motion.section>
      </div>
    </main>
  )
} 