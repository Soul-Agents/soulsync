import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog - Soul Agents',
  description: 'Latest updates and insights from Soul Agents',
}

interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  readTime?: string
  category?: string
}

const blogPosts: BlogPost[] = [
  {
    slug: 'unified-ai-memory',
    title: 'Unified Memory: The Future of Cross-Platform AI Interactions',
    description: 'Exploring how Soul Agents creates seamless engagement across X and Telegram through shared memory and contextual understanding of conversations.',
    date: 'Nov 11, 2024',
    author: 'Adam',
    readTime: '6 min read',
    category: 'AI Innovation'
  },
  {
    slug: 'revolutionizing-social-media-engagement',
    title: 'Building AI Agents for X: A Minimalist Approach',
    description: 'How Soul Agents is revolutionizing social media engagement through minimalist AI technology that connects with high-quality audiences authentically.',
    date: 'Nov 10, 2024',
    author: 'Adam',
    readTime: '5 min read',
    category: 'AI Technology'
  }
]

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-electric-purple/5 to-black">
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 gradient-text animate-fade-in">
            Blog & Updates
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto animate-fade-in-delay">
            Exploring the future of AI-driven social engagement
          </p>
        </div>
        
        {/* Blog Posts Grid */}
        <div className="max-w-4xl mx-auto">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block mb-12"
            >
              <article className="bg-black/40 border border-white/10 rounded-xl p-8 relative transition-all duration-300 
                hover:border-electric-purple/30 hover:bg-black/50">
                {/* Content */}
                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 text-sm bg-electric-purple/10 rounded-full border border-electric-purple/20 text-electric-purple font-medium">
                      {post.category}
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60 text-sm font-medium">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-4 text-white group-hover:text-electric-purple transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-lg text-white/70 mb-6 leading-relaxed">
                    {post.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-white/60 font-medium">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>By {post.author}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-electric-purple font-medium group-hover:translate-x-1 transition-transform">
                      Read article
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
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
