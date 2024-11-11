import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface Props {
  params: {
    slug: string
  }
}

const blogPosts = {
  'unified-ai-memory': {
    title: 'Unified Memory: The Future of Cross-Platform AI Interactions',
    date: 'Nov 11, 2024',
    author: 'Adam',
    readTime: '6 min read',
    category: 'AI Innovation',
    description: 'Exploring how Soul Agents creates seamless engagement across X and Telegram through shared memory and contextual understanding of conversations.',
    content: () => (
      <>
        <p className="text-xl text-white/80 mb-8 leading-relaxed">
          In the evolving landscape of Web3 communities, the ability to maintain consistent, contextual interactions across different platforms has become crucial. Soul Agents introduces a groundbreaking approach: unified memory across X and Telegram, enabling AI agents to remember and contextualize conversations regardless of platform.
        </p>

        <nav className="p-6 bg-black/40 rounded-xl border border-white/5 mb-12 hover:border-electric-purple/20 transition-colors">
          <h2 className="text-lg font-semibold mb-4 text-white/90">Table of Contents</h2>
          <ul className="space-y-3">
            <li>
              <a href="#challenge" className="text-white/60 hover:text-electric-purple transition-colors">
                The Challenge of Fragmented Social Presence
              </a>
            </li>
            <li>
              <a href="#unified-memory" className="text-white/60 hover:text-electric-purple transition-colors">
                Understanding Unified Memory
              </a>
            </li>
            <li>
              <a href="#implementation" className="text-white/60 hover:text-electric-purple transition-colors">
                Technical Implementation & Architecture
              </a>
            </li>
            <li>
              <a href="#benefits" className="text-white/60 hover:text-electric-purple transition-colors">
                Benefits for Community Management
              </a>
            </li>
            <li>
              <a href="#future" className="text-white/60 hover:text-electric-purple transition-colors">
                Future Implications & Roadmap
              </a>
            </li>
          </ul>
        </nav>

        <h2 id="challenge" className="text-3xl font-bold mt-12 mb-6 gradient-text" style={{ scrollMarginTop: '140px' }}>
          The Challenge of Fragmented Social Presence
        </h2>
        <p>
          Web3 communities often face a unique challenge: their presence is split across multiple platforms, with X serving as the public face while Telegram hosts more intimate community discussions. This fragmentation can lead to disconnected conversations, repeated information, and missed opportunities for meaningful engagement.
        </p>

        <h2 id="unified-memory" className="text-3xl font-bold mt-12 mb-6 gradient-text" style={{ scrollMarginTop: '140px' }}>
          Understanding Unified Memory
        </h2>
        <p>
          Our unified memory system acts as a central nervous system for AI agents, enabling them to maintain conversation context across platforms. When a community member interacts with an AI agent on X and later continues the conversation on Telegram, the agent remembers previous interactions, preferences, and discussion topics.
        </p>

        <div className="bg-electric-purple/5 border border-electric-purple/20 rounded-xl p-6 my-8">
          <h3 className="text-xl font-semibold mb-4 text-electric-purple">Key Features</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-electric-purple mr-2">•</span>
              Cross-platform conversation memory
            </li>
            <li className="flex items-start">
              <span className="text-electric-purple mr-2">•</span>
              Contextual understanding of user preferences
            </li>
            <li className="flex items-start">
              <span className="text-electric-purple mr-2">•</span>
              Seamless transition between platforms
            </li>
            <li className="flex items-start">
              <span className="text-electric-purple mr-2">•</span>
              Privacy-first approach to data handling
            </li>
          </ul>
        </div>

        <h2 id="implementation" className="text-3xl font-bold mt-12 mb-6 gradient-text" style={{ scrollMarginTop: '140px' }}>
          Technical Implementation & Architecture
        </h2>
        <p>
          The unified memory system is built on a sophisticated architecture that combines vector databases for semantic understanding with traditional databases for structured data. This hybrid approach allows our AI agents to not only remember specific details but also understand the broader context of conversations.
        </p>

        <h2 id="benefits" className="text-3xl font-bold mt-12 mb-6 gradient-text" style={{ scrollMarginTop: '140px' }}>
          Benefits for Community Management
        </h2>
        <p>
          This unified approach transforms community management by enabling more personalized and contextual interactions. AI agents can reference previous discussions, understand member interests across platforms, and provide more relevant responses. This leads to higher engagement rates and stronger community bonds.
        </p>

        <h2 id="future" className="text-3xl font-bold mt-12 mb-6 gradient-text" style={{ scrollMarginTop: '140px' }}>
          Future Implications & Roadmap
        </h2>
        <p>
          As we continue to develop and refine our unified memory system, we're exploring new ways to enhance cross-platform engagement while maintaining privacy and security. Our roadmap includes advanced features like sentiment analysis, automated context summarization, and enhanced personalization capabilities. The future of AI-driven community management lies in creating seamless, meaningful interactions that transcend platform boundaries.
        </p>
      </>
    )
  },
  'revolutionizing-social-media-engagement': {
    title: 'Building AI Agents for X: A Minimalist Approach',
    date: 'Nov 10, 2024',
    author: 'Adam',
    readTime: '5 min read',
    category: 'AI Technology',
    description: 'How Soul Agents is revolutionizing social media engagement through minimalist AI technology that connects with high-quality audiences authentically.',
    content: () => (
      <>
        <p className="text-xl text-white/80 mb-8 leading-relaxed">
          Since our inception in October 2024, we've observed a critical gap in Web3 community management. Projects struggle to maintain consistent, quality engagement across platforms while preserving authenticity. Traditional automation tools often fall short, creating generic interactions that fail to resonate with community members.
        </p>

        <nav className="p-6 bg-black/40 rounded-xl border border-white/5 mb-12 hover:border-electric-purple/20 transition-colors">
          <h2 className="text-lg font-semibold mb-4 text-white/90">Table of Contents</h2>
          <ul className="space-y-3">
            <li>
              <a href="#evolution" className="text-white/60 hover:text-electric-purple transition-colors">
                The Evolution of Social Media Engagement
              </a>
            </li>
            <li>
              <a href="#minimalist-ai" className="text-white/60 hover:text-electric-purple transition-colors">
                Minimalist AI: Less is More
              </a>
            </li>
            <li>
              <a href="#connections" className="text-white/60 hover:text-electric-purple transition-colors">
                Building Authentic Connections
              </a>
            </li>
            <li>
              <a href="#future" className="text-white/60 hover:text-electric-purple transition-colors">
                The Future of AI-Driven Engagement
              </a>
            </li>
          </ul>
        </nav>

        <h2 id="evolution" className="text-3xl font-bold mt-12 mb-6 gradient-text" style={{ scrollMarginTop: '140px' }}>
          The Evolution of Social Media Engagement
        </h2>
        <p>
          Since our inception in October 2024, we've observed a critical gap in Web3 community management. Projects struggle to maintain consistent, quality engagement across platforms while preserving authenticity. Traditional automation tools often fall short, creating generic interactions that fail to resonate with community members.
        </p>

        <h2 id="minimalist-ai" className="text-3xl font-bold mt-12 mb-6 gradient-text" style={{ scrollMarginTop: '140px' }}>
          Minimalist AI: Less is More
        </h2>
        <p>
          Our approach is fundamentally different. Instead of trying to automate everything, we focus on quality over quantity. Our AI agents are designed with a minimalist philosophy - they engage only when they can add genuine value to the conversation. This selective engagement strategy ensures that every interaction strengthens community bonds rather than diluting them with noise.
        </p>

        <div className="bg-electric-purple/5 border border-electric-purple/20 rounded-xl p-6 my-8">
          <h3 className="text-xl font-semibold mb-4 text-electric-purple">Key Principles</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-electric-purple mr-2">•</span>
              Quality over quantity in engagement
            </li>
            <li className="flex items-start">
              <span className="text-electric-purple mr-2">•</span>
              Selective interaction based on value
            </li>
            <li className="flex items-start">
              <span className="text-electric-purple mr-2">•</span>
              Authentic conversation patterns
            </li>
            <li className="flex items-start">
              <span className="text-electric-purple mr-2">•</span>
              Advanced quality filtering
            </li>
          </ul>
        </div>

        <h2 id="connections" className="text-3xl font-bold mt-12 mb-6 gradient-text" style={{ scrollMarginTop: '140px' }}>
          Building Authentic Connections
        </h2>
        <p>
          At the heart of our technology is an advanced quality filtering system. Our AI agents don't just respond to every mention or message - they intelligently identify relevant conversations and engage with accounts that show genuine interest in meaningful dialogue. This targeted approach helps Web3 projects build communities based on quality interactions rather than mere numbers.
        </p>

        <h2 id="future" className="text-3xl font-bold mt-12 mb-6 gradient-text" style={{ scrollMarginTop: '140px' }}>
          The Future of AI-Driven Engagement
        </h2>
        <p>
          As we launch our beta tests with first AI agents for X and soon also Telegram, we're already seeing the impact of our minimalist approach. Communities managed by Soul Agents show higher engagement quality, more meaningful discussions, and stronger member retention. This is just the beginning - we're committed to evolving our technology while staying true to our core principle: authentic engagement through intelligent automation.
        </p>
      </>
    )
  }
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts[params.slug]
  
  if (!post) {
    notFound()
  }

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
        {/* Article Card */}
        <article className="glass-card p-8 mb-12">
          {/* Header */}
          <div className="mb-12">
            <div className="px-3 py-1 text-sm bg-electric-purple/10 rounded-full border border-electric-purple/20 text-electric-purple inline-block mb-6">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 text-sm text-white/40">
              <span>{post.date}</span>
              <span>•</span>
              <span>By {post.author}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-invert max-w-none">
            {post.content()}
          </div>
        </article>

        {/* CTA Section - Now outside the article */}
        <div className="glass-card p-8 bg-black/40">
          <div className="text-center space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">
                Enjoyed the article?
              </h3>
              <p className="text-lg text-white/80">
                Follow Soul Agents for more insights on AI-driven community engagement
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <a 
                href="https://x.com/soul_agents" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10 
                         hover:border-electric-purple/30 hover:bg-black/40 transition-all duration-300 
                         transform hover:scale-105 group"
              >
                <svg 
                  className="w-5 h-5 text-white/80 group-hover:text-electric-purple transition-colors" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-white/80 group-hover:text-white font-medium">Follow @soul_agents</span>
              </a>

              <div className="w-full max-w-sm">
                <a 
                  href="https://forms.gle/zxe1hgrbL8rbTELL7" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="button-gradient w-full px-8 py-4 rounded-lg font-bold text-white 
                           hover:opacity-90 transition-all transform hover:scale-105 
                           hover:shadow-neon flex items-center justify-center gap-2"
                >
                  <span>Get Started with Soul Agents</span>
                  <svg 
                    className="w-4 h-4" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogPosts[params.slug]
  
  if (!post) {
    return {
      title: 'Post Not Found - Soul Agents',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} - Soul Agents`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  }
} 