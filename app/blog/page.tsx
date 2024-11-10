import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog - Soul AI Agents',
  description: 'Latest updates and insights from Soul AI Agents',
}

// Make sure to mark it as a Client Component if needed
// 'use client'

interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
}

const blogPosts: BlogPost[] = [
  {
    slug: 'revolutionizing-social-media-engagement',
    title: 'Building AI Agents for X: A Minimalist Approach',
    description: 'How Soul AI Agents is revolutionizing social media engagement through minimalist AI technology that connects with high-quality audiences authentically.',
    date: 'Nov 10, 2024',
    author: 'Adam'
  },
]

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-12 gradient-text">
        Blog
      </h1>
      
      <div className="max-w-4xl mx-auto">
        {blogPosts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block mb-12 glass-card hover:scale-[1.02] transition-transform"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-3">
                {post.title}
              </h2>
              <p className="text-white/60 mb-4">
                {post.description}
              </p>
              <div className="flex items-center gap-4 text-sm text-white/40">
                <span>{post.date}</span>
                <span>•</span>
                <span>By {post.author}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
