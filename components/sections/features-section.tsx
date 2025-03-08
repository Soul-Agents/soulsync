"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Basic Engagement",
    description:
      "AI-powered responses to help maintain community connections",
    benefits: [
      "Simple language understanding",
      "Basic context awareness",
      "Automated follows",
      "Community interaction",
    ],
  },
  {
    title: "Automated Responses",
    description:
      "Automated monitoring and response capabilities for your X account",
    benefits: [
      "Scheduled engagement",
      "Response to mentions",
      "Basic community interaction",
      "Configurable response patterns",
    ],
  },
  {
    title: "Network Building",
    description: "Connect with relevant accounts in your industry",
    benefits: [
      "Target specific accounts",
      "Basic relationship building",
      "Visibility improvement",
      "Community presence",
    ],
  },
  {
    title: "X Platform Focus",
    description: "Focused on X (Twitter) platform engagement",
    benefits: [
      "Replies to targeted accounts",
      "Engagement with relevant content",
      "Basic sentiment understanding",
      "Improved visibility",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-purple/5 to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Current Features
          </h2>
          <p className="text-xl text-white/80">
            Our early-stage AI capabilities for X engagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="glass-card p-8 backdrop-blur-sm border border-white/5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  {feature.title}
                </h3>
                <p className="text-white/80 mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-center text-white/70"
                    >
                      <span className="text-neon-pink mr-3">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
