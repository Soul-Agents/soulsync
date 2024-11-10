"use client"

import { motion } from "framer-motion"

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            Key Features
          </h2>
          <p className="text-xl text-white/80">
            Advanced AI capabilities designed for Web3 communities
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="glass-card p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold mb-4">Smart Engagement</h3>
            <p className="text-white/80">
              AI-powered responses that maintain authentic community connections
            </p>
          </motion.div>

          <motion.div 
            className="glass-card p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold mb-4">24/7 Monitoring</h3>
            <p className="text-white/80">
              Continuous community monitoring and real-time response capabilities
            </p>
          </motion.div>

          <motion.div 
            className="glass-card p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-bold mb-4">Analytics Dashboard</h3>
            <p className="text-white/80">
              Comprehensive insights into community engagement and sentiment
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}