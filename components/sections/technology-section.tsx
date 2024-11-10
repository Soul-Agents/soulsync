import { Code2, Brain, Network, Shield } from "lucide-react"

export function TechnologySection() {
  return (
    <section id="technology" className="py-20 bg-dark-navy/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Technology Stack</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* LangChain Integration */}
          <div className="glass-card p-8 animate-fade-in-up">
            <div className="flex items-start mb-4">
              <Code2 className="h-6 w-6 text-neon-pink mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-bold gradient-text mb-2">LangChain Framework</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Advanced memory models for context retention</li>
                  <li>• Custom chains for trading analysis</li>
                  <li>• Sentiment analysis integration</li>
                  <li>• Natural language processing for social engagement</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Brian AI Integration */}
          <div className="glass-card p-8 animate-fade-in-up animation-delay-200">
            <div className="flex items-start mb-4">
              <Brain className="h-6 w-6 text-neon-pink mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-bold gradient-text mb-2">Brian AI Partnership</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Secure chat-based digital wallets</li>
                  <li>• Real-time market data processing</li>
                  <li>• Custom trading strategy execution</li>
                  <li>• Risk management protocols</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Platform Architecture */}
          <div className="glass-card p-8 animate-fade-in-up animation-delay-400">
            <div className="flex items-start mb-4">
              <Network className="h-6 w-6 text-neon-pink mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-bold gradient-text mb-2">Platform Architecture</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• Microservices-based infrastructure</li>
                  <li>• Real-time websocket connections</li>
                  <li>• Cross-platform data synchronization</li>
                  <li>• Scalable cloud deployment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Security Measures */}
          <div className="glass-card p-8 animate-fade-in-up animation-delay-600">
            <div className="flex items-start mb-4">
              <Shield className="h-6 w-6 text-neon-pink mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-bold gradient-text mb-2">Security Framework</h3>
                <ul className="space-y-2 text-white/80">
                  <li>• End-to-end encryption</li>
                  <li>• Multi-factor authentication</li>
                  <li>• Regular security audits</li>
                  <li>• Compliance with industry standards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Example */}
        <div className="glass-card max-w-4xl mx-auto mt-12 p-8">
          <h3 className="text-xl font-bold gradient-text mb-4">Example AI Agent Prompt</h3>
          <div className="bg-black/30 p-4 rounded-lg">
            <code className="text-white/80 block whitespace-pre-wrap">
{`{
  "strategy": {
    "type": "AI_AGENT_TRADING",
    "parameters": {
      "timeframe": "7d",
      "tokenTypes": ["AI_AGENTS", "RWA", "MEMECOINS"],
      "conditions": {
        "kols": {
          "minimum": 2,
          "twitterScore": ">50"
        },
        "takeProfit": "2x-3x"
      }
    }
  }
}`}
            </code>
          </div>
          <p className="text-white/60 text-sm mt-2">JSON representation of the trading strategy prompt</p>
        </div>
      </div>
    </section>
  )
} 