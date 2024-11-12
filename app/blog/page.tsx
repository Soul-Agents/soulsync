"use client";
import { useState } from "react";
import { X } from "lucide-react";

interface BlogPost {
  title: string;
  description: string;
  date: string;
  author: string;
  readTime?: string;
  category?: string;
  content?: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Unified Memory: The Future of Cross-Platform AI Interactions",
    description:
      "Exploring how Soul Agents creates seamless engagement across X and Telegram through shared memory and contextual understanding of conversations.",
    date: "Nov 11, 2024",
    author: "Adam",
    readTime: "6 min read",
    category: "AI Innovation",
    content: `
      The concept of unified memory in AI systems represents a significant leap forward in how artificial intelligence interacts across different platforms. At Soul Agents, we've developed a sophisticated system that maintains contextual awareness across both X and Telegram platforms.

      Our AI agents can remember conversations, track context, and maintain consistent engagement across multiple platforms. This means that when an AI agent interacts with a user on X and later encounters them on Telegram, it maintains awareness of previous interactions and shared context.

      Key Benefits of Unified Memory:
      • Consistent user experience across platforms
      • Deep contextual understanding of conversations
      • Improved engagement quality through remembered interactions
      • Enhanced ability to maintain meaningful relationships

      This technology enables our AI agents to build more meaningful and authentic relationships with users, regardless of which platform they're using for interaction.
    `,
  },
  {
    title: "Building AI Agents for X: A Minimalist Approach",
    description:
      "How Soul Agents is revolutionizing social media engagement through minimalist AI technology that connects with high-quality audiences authentically.",
    date: "Nov 10, 2024",
    author: "Adam",
    readTime: "5 min read",
    category: "AI Technology",
    content: `
      In the world of social media AI, less is often more. Soul Agents has pioneered a minimalist approach to AI-driven engagement on X that focuses on quality over quantity.

      Our approach centers on creating AI agents that:
      • Understand context deeply
      • Engage authentically
      • Build meaningful connections
      • Maintain consistent presence

      By focusing on these core principles, we've created AI agents that can effectively engage with high-value audiences while maintaining authentic and meaningful interactions.

      The key to our success lies in our sophisticated natural language processing capabilities combined with advanced context understanding, allowing our AI agents to participate in conversations naturally and meaningfully.
    `,
  },
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

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
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-black/40 border border-white/10 rounded-xl p-8 mb-12 relative transition-all duration-300 
                hover:border-electric-purple/30 hover:bg-black/50 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              {/* Content */}
              <div className="relative">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-sm bg-electric-purple/10 rounded-full border border-electric-purple/20 text-electric-purple font-medium">
                    {post.category}
                  </span>
                  <span className="text-white/40">•</span>
                  <span className="text-white/60 text-sm font-medium">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-3xl font-bold mb-4 text-white">
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
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Article Modal */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto">
            <div className="container mx-auto px-4 py-12">
              <div className="max-w-3xl mx-auto bg-black/90 rounded-xl border border-white/10 p-8">
                <div className="flex justify-end mb-4">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <span className="px-3 py-1 text-sm bg-electric-purple/10 rounded-full border border-electric-purple/20 text-electric-purple font-medium">
                  {selectedPost.category}
                </span>

                <h2 className="text-4xl font-bold my-6 text-white">
                  {selectedPost.title}
                </h2>

                <div className="flex items-center gap-4 text-sm text-white/60 font-medium mb-8">
                  <span>{selectedPost.date}</span>
                  <span>•</span>
                  <span>By {selectedPost.author}</span>
                  <span>•</span>
                  <span>{selectedPost.readTime}</span>
                </div>

                <div className="prose prose-invert max-w-none">
                  {selectedPost.content?.split("\n").map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-lg text-white/80 mb-6 leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
