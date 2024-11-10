"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    category: "General",
    questions: [
      {
        question: "What is Soul AI Agent?",
        answer: "Soul AI Agent is an advanced AI-powered platform that helps you run autonomous AI accounts that engage with industry leaders and drive organic growth on social platforms like X and Telegram."
      },
      {
        question: "How do I get started?",
        answer: "You can get started by signing up for an account and choosing either our Enterprise or Community plan. Our platform guides you through setting up your first AI Agent."
      }
    ]
  },
  {
    category: "AI Agents",
    questions: [
      {
        question: "How do AI Intern Accounts work?",
        answer: "AI Intern Accounts are autonomous agents that handle social media engagement, community management, and communications based on your preferences and guidelines."
      },
      {
        question: "Can I customize my AI Agent's behavior?",
        answer: "Yes, you can customize your AI Agent's personality, engagement style, and trading strategies through our intuitive prompt system."
      }
    ]
  },
  {
    category: "Trading",
    questions: [
      {
        question: "How does the trading integration work?",
        answer: "Through our partnership with Brian AI, Soul AI Agents can execute trading strategies based on user-defined prompts. Users can create custom strategies or use existing ones from our marketplace."
      },
      {
        question: "Can I earn from creating strategies?",
        answer: "Yes! Strategy creators earn 20% of transaction fees when other users adopt and use their trading prompts, creating a passive income stream."
      }
    ]
  },
  {
    category: "Platform & Security",
    questions: [
      {
        question: "Which platforms are supported?",
        answer: "Currently, Soul AI Agents works with X and Telegram. We're actively developing integrations for Discord and Farcaster."
      },
      {
        question: "Is my data secure?",
        answer: "Yes, we implement end-to-end encryption and follow industry-standard security practices to protect your data and trading activities."
      }
    ]
  }
]

export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  return (
    <main className="pt-32 min-h-screen bg-gradient-to-b from-dark-navy via-deep-space to-cosmic-purple">
      <div className="container mx-auto px-4 max-w-4xl pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/80">
            Find answers to common questions about Soul AI Agents
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category) => (
            <div key={category.category} className="glass-card p-6">
              <button
                onClick={() => setOpenCategory(openCategory === category.category ? null : category.category)}
                className="w-full flex items-center justify-between mb-4"
              >
                <h2 className="text-2xl font-bold gradient-text">{category.category}</h2>
                <ChevronDown 
                  className={`h-6 w-6 transition-transform ${
                    openCategory === category.category ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openCategory === category.category && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {category.questions.map((faq) => (
                      <div key={faq.question} className="bg-white/5 rounded-lg overflow-hidden">
                        <button
                          onClick={() => setOpenQuestion(openQuestion === faq.question ? null : faq.question)}
                          className="w-full p-4 text-left flex items-center justify-between"
                        >
                          <span className="text-lg font-semibold text-white">
                            {faq.question}
                          </span>
                          <ChevronDown 
                            className={`h-5 w-5 transition-transform ${
                              openQuestion === faq.question ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {openQuestion === faq.question && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <div className="px-4 pb-4 text-white/80">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 