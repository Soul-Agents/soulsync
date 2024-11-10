import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface Props {
  params: {
    slug: string
  }
}

export default function BlogPost({ params }: Props) {
  return (
    <div className="container mx-auto px-4 py-24">
      <Link 
        href="/blog"
        className="inline-flex items-center text-white/60 hover:text-white transition-colors group mb-12"
      >
        <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </Link>

      <div className="max-w-4xl mx-auto">
        <article className="glass-card p-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Building AI Agents for X: A Minimalist Approach
          </h2>
          
          <div className="flex items-center gap-4 text-sm text-white/40 mb-12">
            <span>Nov 10, 2024</span>
            <span>•</span>
            <span>By Adam</span>
          </div>

          <nav className="p-4 bg-white/5 rounded-lg mb-8">
            <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
            <ul className="space-y-2">
              <li>
                <a href="#evolution" className="text-white/60 hover:text-white transition-colors">
                  The Evolution of Social Media Engagement
                </a>
              </li>
              <li>
                <a href="#minimalist-ai" className="text-white/60 hover:text-white transition-colors">
                  Minimalist AI: Less is More
                </a>
              </li>
              <li>
                <a href="#connections" className="text-white/60 hover:text-white transition-colors">
                  Building Authentic Connections
                </a>
              </li>
              <li>
                <a href="#future" className="text-white/60 hover:text-white transition-colors">
                  The Future of AI-Driven Engagement
                </a>
              </li>
            </ul>
          </nav>

          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-white/80 mb-8">
              How Soul AI Agents is revolutionizing social media engagement through minimalist AI technology that connects with high-quality audiences authentically.
            </p>

            <h3 id="evolution" className="text-2xl font-bold mt-12 mb-6">
              The Evolution of Social Media Engagement
            </h3>
            <p>
              Since our inception in January 2022, we've observed a critical gap in Web3 community management. Projects struggle to maintain consistent, quality engagement across platforms while preserving authenticity. Traditional automation tools often fall short, creating generic interactions that fail to resonate with community members.
            </p>

            <h3 id="minimalist-ai" className="text-2xl font-bold mt-12 mb-6">
              Minimalist AI: Less is More
            </h3>
            <p>
              Our approach is fundamentally different. Instead of trying to automate everything, we focus on quality over quantity. Our AI agents are designed with a minimalist philosophy - they engage only when they can add genuine value to the conversation. This selective engagement strategy ensures that every interaction strengthens community bonds rather than diluting them with noise.
            </p>

            <h3 id="connections" className="text-2xl font-bold mt-12 mb-6">
              Building Authentic Connections
            </h3>
            <p>
              At the heart of our technology is an advanced quality filtering system. Our AI agents don't just respond to every mention or message - they intelligently identify relevant conversations and engage with accounts that show genuine interest in meaningful dialogue. This targeted approach helps Web3 projects build communities based on quality interactions rather than mere numbers.
            </p>

            <h3 id="future" className="text-2xl font-bold mt-12 mb-6">
              The Future of AI-Driven Engagement
            </h3>
            <p>
              As we launch our first AI agents for X and Telegram platforms, we're already seeing the impact of our minimalist approach. Communities managed by Soul AI Agents show higher engagement quality, more meaningful discussions, and stronger member retention. This is just the beginning - we're committed to evolving our technology while staying true to our core principle: authentic engagement through intelligent automation.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Building AI Agents for X: A Minimalist Approach - Soul AI Agents',
  description: 'How Soul AI Agents is revolutionizing social media engagement through minimalist AI technology that connects with high-quality audiences authentically.',
  openGraph: {
    title: 'Building AI Agents for X: A Minimalist Approach',
    description: 'Discover how Soul AI Agents is transforming social media engagement with minimalist AI technology.',
    type: 'article',
    publishedTime: '2024-11-10T09:00:00Z',
    authors: ['Adam'],
  },
} 