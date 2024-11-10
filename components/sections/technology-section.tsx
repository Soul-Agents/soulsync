import { Code2, Brain, Network, Shield } from "lucide-react"

export default function TechnologySection() {
  return (
    <section id="technology" className="py-20 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/50 via-electric-purple/10 to-dark-navy/50" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* Floating orbs/particles effect */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-neon-pink/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-electric-purple/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4 relative">
        <h2 className="text-5xl font-bold text-center mb-16 gradient-text animate-fade-in">
          Technology Stack
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* AI Framework - now with hover effects and animations */}
          <div className="glass-card p-8 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-neon-pink/20 animate-fade-in-up">
            <div className="flex items-start mb-4 group">
              <div className="p-3 rounded-xl bg-gradient-to-br from-neon-pink/20 to-electric-purple/20 group-hover:from-neon-pink/30 group-hover:to-electric-purple/30 transition-all duration-300">
                <Code2 className="h-6 w-6 text-neon-pink group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold gradient-text mb-2">AI Framework</h3>
                <ul className="space-y-2 text-white/80">
                  <li className="flex items-center space-x-2 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-pink" />
                    <span>Advanced context understanding</span>
                  </li>
                  <li className="flex items-center space-x-2 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-purple" />
                    <span>Natural language processing</span>
                  </li>
                  <li className="flex items-center space-x-2 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-pink" />
                    <span>Community engagement optimization</span>
                  </li>
                  <li className="flex items-center space-x-2 hover:text-white transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-purple" />
                    <span>Sentiment analysis integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copy similar structure for other cards... */}
          {/* Trading, Infrastructure, and Security sections follow the same pattern */}
        </div>
      </div>
    </section>
  )
} 