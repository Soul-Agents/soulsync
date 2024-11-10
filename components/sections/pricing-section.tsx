import { Check } from "lucide-react"

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Pricing</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Enterprise Plan */}
          <div className="glass-card p-8 animate-fade-in-up">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold gradient-text mb-2">Enterprise</h3>
              <div className="text-3xl font-bold text-white mb-4">
                $999<span className="text-lg text-white/60">/month</span>
              </div>
              <p className="text-white/80 mb-6">Custom AI agents for your business</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                "Custom AI Intern Accounts",
                "Autonomous Trading",
                "Multi-Platform Integration",
                "24/7 Support",
                "Advanced Analytics",
                "Custom Strategy Development"
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-white/80">
                  <Check className="h-5 w-5 text-neon-pink mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full button-gradient text-white font-bold py-4 rounded-lg">
              Get Started
            </button>
          </div>

          {/* Community Plan */}
          <div className="glass-card p-8 animate-fade-in-up animation-delay-200">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold gradient-text mb-2">Community</h3>
              <div className="text-3xl font-bold text-white mb-4">
                1%<span className="text-lg text-white/60"> per trade</span>
              </div>
              <p className="text-white/80 mb-6">For strategy creators and traders</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              {[
                "20% Creator Rewards",
                "Strategy Marketplace",
                "Leaderboard Access",
                "Community Challenges",
                "Basic Analytics",
                "Trading Integration"
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-white/80">
                  <Check className="h-5 w-5 text-neon-pink mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button className="w-full button-gradient text-white font-bold py-4 rounded-lg">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 