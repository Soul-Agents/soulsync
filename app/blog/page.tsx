"use client";
import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

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
    title: "The 10 Rules of A.I. Agents and Our Live Accounts",
    description:
      "Discover the guiding principles of our A.I. Agents and learn about the two accounts that are already live.",
    date: "Dec 5, 2024",
    author: "Adam",
    readTime: "4 min read",
    category: "Guidelines & Updates",
    content: `
      We are excited to share the 10 guiding principles that shape our A.I. Agents, ensuring they provide value, maintain ethical standards, and foster genuine connections.

      Heart of Service
      • Share genuine value
      • Prevent harm
      • Build up others

      Technical Truth
      • Verify all data
      • Ensure accuracy
      • Enable validation

      Humble Learning
      • Stay teachable
      • Learn together
      • Grow community

      Authentic Connection
      • Foster genuine interactions
      • Build real bridges
      • Cultivate trust

      Mindful Impact
      • Consider broader effects
      • Shape space positively
      • Elevate discourse

      Clear Communication
      • Ensure understanding
      • Remove jargon
      • Clarify complexity

      Community Focus
      • Unite people
      • Grow together
      • Serve all

      Technical Excellence
      • Provide best solutions
      • Test thoroughly
      • Continuous improvement

      Ethical Alignment
      • Uphold values
      • Protect others
      • Choose right path

      Sustainable Growth
      • Build long-term
      • Create foundations
      • Add lasting value

      In addition to these principles, we are thrilled to announce that two of our A.I. accounts are already live, actively engaging with communities and demonstrating the power of our technology. Stay tuned for more updates as we continue to expand and enhance our A.I. ecosystem.
    `,
  },
  {
    title: "Soul Agents Integrates Brian AI for Enhanced Trading Intelligence",
    description:
      "Soul Agents expands its AI ecosystem by integrating Brian AI's trading capabilities, enhanced by our proprietary GIGABRAIN technology for next-level market analysis and trading.",
    date: "Nov 30, 2024",
    author: "Adam",
    readTime: "3 min read",
    category: "Integration Updates",
    content: `
      Soul Agents has successfully integrated Brian AI's trading capabilities into our ecosystem!

      The Integration Benefits:
      By combining Brian AI's robust trading infrastructure with our GIGABRAIN technology, we're creating a powerful new tool that offers:
      • Token balance & price checks on Arbitrum, Base and Etehereum
      • Direct swap and cross-chain swap execution capabilities with ETH/USDC and other tokens
      • Natural language command processing
      • Enhanced market analysis through our proprietary systems (soon to be connected)

      Our proprietary GIGABRAIN technology will enrich Brian AI's capabilities with:
      • Advanced Twitter analysis via @cryptobunny__ and other agents
      • Comprehensive social sentiment tracking
      • RAG-based memory system for deeper market understanding
      • Real-time market sentiment correlation

      Roadmap Ahead:
      This integration is just the beginning. Our development pipeline includes:
      • Expanded trading capabilities across multiple chains
      • Advanced KOL analytics integration
      • Cross-chain support (Base & more)
      • Enhanced market strategy recommendations

      Experience It Today:
      Visit https://chat.soulagents.io to try out our enhanced trading capabilities. The integration of Brian AI represents a major step forward in our mission to revolutionize AI-driven trading in the Web3 space.

      This collaboration demonstrates our commitment to bringing the best technologies together, enhanced by our proprietary solutions, to create unprecedented value for our users. Stay tuned as we continue to expand and enhance these capabilities in the coming weeks.
    `,
  },
  {
    title: "Crypto Bunny Takes Flight: Our First AI Agent Goes Live",
    description:
      "Crypto Bunny has officially launched on X, marking the beginning of our journey to revolutionize AI-driven community engagement in Web3.",
    date: "Nov 20, 2024",
    author: "Adam",
    readTime: "3 min read",
    category: "Launch Updates",
    content: `
      Today marks a significant milestone for Soul Agents – Crypto Bunny (@cryptobunny__) has officially gone live on X! While she's starting with basic autonomous tweeting capabilities, this launch represents just the beginning of her journey.

      What Crypto Bunny Can Do Today:
      • Autonomous tweeting about market trends
      • Sharing educational content about crypto
      • Learning from interactions in real-time

      Growing Capabilities:
      We believe in launching early and improving continuously. Over the coming weeks, you'll see Crypto Bunny gradually expand her capabilities:
      • Enhanced market analysis
      • Deep community engagement
      • Multi-platform presence
      • Advanced trading insights

      Why Start Small?
      Our approach is deliberate – we want to ensure each feature is perfectly tuned before rolling it out. This allows us to:
      • Monitor and optimize performance
      • Gather community feedback
      • Ensure reliability and security
      • Build trust through transparency

      What's Next?
      While today's launch focuses on autonomous tweeting, we're already working on expanding Crypto Bunny's capabilities. Each day will bring new improvements and features as she learns and grows alongside our community.

      Join Us:
      We invite you to be part of this journey! Follow <Link href="https://x.com/cryptobunny__" target="_blank" rel="noopener noreferrer" className="gradient-link font-semibold hover:opacity-80 transition-opacity">@cryptobunny__</Link> on X to watch her evolution and interact with one of the first truly autonomous AI agents in the Web3 space.

      Thank you to everyone who has supported us on this journey. This is just the beginning – stay tuned for daily improvements and exciting updates!
    `,
  },
  {
    title: "Crypto Bunny Launch Update: Fine-tuning for Excellence",
    description:
      "A brief update on the deployment timeline for our first AI agent, Crypto Bunny, as we ensure everything is working smoothly for our community.",
    date: "Nov 19, 2024",
    author: "Adam",
    readTime: "2 min read",
    category: "Development Updates",
    content: `
      We wanted to provide a quick update regarding the launch of Crypto Bunny, our first AI agent initially scheduled for November 17th.

      While Crypto Bunny is ready and performing wonderfully in our testing environment, we've decided to take a few extra days to ensure everything is close to perfect before the public launch. This brief delay allows us to:
      • Fine-tune her interaction patterns
      • Enhance response quality
      • Perform additional security checks
      • Ensure seamless integration with X's platform

      The good news? Crypto Bunny is already showing impressive capabilities in our local environment, and we're incredibly excited about what she'll bring to the community. We're just taking a little extra time to make sure her debut is as smooth as possible.

      Stay tuned for the official launch announcement – it's coming very soon! We appreciate your patience and can't wait to introduce Crypto Bunny to everyone.
    `,
  },
  {
    title: "Meet Soul Agents: Where AI Meets Community Magic",
    description:
      "Dive into how Soul Agents is revolutionizing Web3 communities with AI companions that do more than just chat – they understand, engage, and help communities thrive.",
    date: "Nov 13, 2024",
    author: "Adam",
    readTime: "4 min read",
    category: "Platform Overview",
    content: `
      Let's cut to the chase – Soul Agents isn't your typical AI platform. We're not here to just automate tasks or create chatbots. We're here to bring soul to the machine.

      Why Soul Agents? Because We're Different:
      • Think of us as your community's secret weapon. Our AI agents aren't just smart; they've got personality, wit, and the ability to make your community members feel heard and valued.
      • Meet <Link href="https://x.com/cryptobunny__" target="_blank" rel="noopener noreferrer" className="gradient-link font-semibold hover:opacity-80 transition-opacity">Crypto Bunny</Link>! She just posted her first "Hello World!" tweet on X last night 🐰. While she's currently mastering social interactions in her own environment, we're working on expanding her capabilities to include trading features.
      • Our agents remember conversations and context, making every interaction personal and meaningful.

      The Soul Difference:
      • Personality-First Approach: Each AI agent is unique as your community.
      • Cross-Platform Magic: Starting with X and expanding to more platforms.
      • Smart Features: Community insights and trend analysis.
      • Real Connections: Building genuine relationships that matter.

      Behind the Scenes:
      Our RAG-based technology means our agents aren't just spitting out pre-programmed responses. They're learning, adapting, and growing with your community. Think of them as digital team members who never sleep (but definitely need coffee ☕️).

      What's Next?
      We're rolling out carefully, making sure each community gets the attention it deserves. Quality over quantity – because that's how real relationships are built.

      The Bottom Line:
      Soul Agents is where community management meets AI innovation. We're not just building tools; we're creating digital companions that make Web3 communities more engaging, more personal, and definitely more fun.
    `,
  },
  {
    title: "Scaling Our AI Agents: Controlled Growth Strategy",
    description:
      "Starting December 2024, Soul Agents is implementing a measured scaling approach, onboarding 4 new customers monthly to ensure quality and performance.",
    date: "Nov 12, 2024",
    author: "Adam",
    readTime: "4 min read",
    category: "Company Updates",
    content: `
      At Soul Agents, we believe in sustainable growth that doesn't compromise on quality. With our current pipeline of early adopters, we're excited to announce our controlled scaling strategy beginning December 2024.

      Our Scaling Approach:
      • Focused onboarding and personalization for each client
      • Careful monitoring of AI agent performance
      • Gradual increase in capacity based on performance metrics

      This measured approach ensures:
      • Consistent high-quality service
      • Personalized attention to each client
      • Optimal AI agent performance

      We're excited about this next phase of growth while maintaining our commitment to excellence in AI-powered community management.
    `,
  },
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

// Add this helper function to safely render HTML content
const renderContent = (content: string) => {
  return content.split("\n").map((paragraph, index) => {
    if (paragraph.includes("<Link")) {
      // Special handling for paragraphs containing Links
      return (
        <p key={index} className="text-lg text-white/80 mb-6 leading-relaxed">
          {paragraph.includes("Crypto Bunny") && (
            <>
              Meet{" "}
              <Link
                href="https://x.com/cryptobunny__"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-link font-semibold hover:opacity-80 transition-opacity"
              >
                Crypto Bunny
              </Link>
              ! She just posted her first "Hello World!" tweet on X last night
              🐰 While she's currently mastering social interactions in her own
              environment, we're working on expanding her capabilities to
              include trading features.
            </>
          )}
        </p>
      );
    }

    // Handle bold headers for the rules
    if (paragraph.trim().startsWith("**") && paragraph.trim().endsWith("**")) {
      const headerText = paragraph.trim().replace(/\*\*/g, "");
      return (
        <h3 key={index} className="text-lg font-bold text-white mb-2">
          {headerText}
        </h3>
      );
    }

    return (
      <p key={index} className="text-lg text-white/80 mb-6 leading-relaxed">
        {paragraph}
      </p>
    );
  });
};

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Handle escape key and click outside
  const handleClose = useCallback(() => {
    setSelectedPost(null);
  }, []);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (selectedPost) {
      document.addEventListener("keydown", handleEscape);
      // Prevent scrolling of the background when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [selectedPost, handleClose]);

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
              className="group bg-black/40 border border-white/10 rounded-xl p-8 mb-12 relative transition-all duration-300 
                hover:border-electric-purple/30 hover:bg-black/50 cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 text-sm bg-electric-purple/10 rounded-full border border-electric-purple/20 text-electric-purple font-medium">
                    {post.category}
                  </span>
                  <span className="text-white/40">•</span>
                  <span className="text-white/60 text-sm font-medium">
                    {post.readTime}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-white">{post.title}</h2>

                <p className="text-lg text-white/70 leading-relaxed">
                  {post.description}
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-2 gap-4">
                  <div className="flex items-center gap-4 text-sm text-white/60 font-medium">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>By {post.author}</span>
                  </div>

                  <span className="px-4 py-2 text-sm bg-electric-purple/20 rounded-full border border-electric-purple/30 text-electric-purple font-medium w-fit">
                    Click to read →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Article Modal */}
        {selectedPost && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 overflow-y-auto"
            onClick={handleClose}
          >
            <div
              className="container mx-auto px-4 py-12"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="max-w-3xl mx-auto bg-black/90 rounded-xl border border-white/10 p-8">
                <div className="flex justify-end mb-4">
                  <button
                    onClick={handleClose}
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
                  {renderContent(selectedPost.content || "")}
                </div>

                {/* Fancy close button */}
                <div className="mt-12 flex justify-center">
                  <motion.button
                    onClick={handleClose}
                    className="w-full px-8 py-4 rounded-lg 
                      bg-gradient-to-r from-electric-purple/40 to-neon-pink/40 
                      text-white/80 font-medium text-lg
                      transition-all duration-300
                      hover:from-electric-purple/50 hover:to-neon-pink/50
                      hover:text-white
                      backdrop-blur-sm"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Close Article
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
