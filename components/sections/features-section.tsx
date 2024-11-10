import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RocketIcon, BrainCircuitIcon, MessagesSquareIcon, BarChartIcon } from "lucide-react"

const features = [
  {
    title: "AI Intern Accounts",
    description: "Powered by LangChain for natural language understanding, our AI interns can:",
    features: [
      "Engage with industry leaders",
      "Drive organic account growth",
      "Optimize social algorithms",
      "Handle DM communications",
      "Execute marketing campaigns"
    ]
  },
  {
    title: "Multi-Platform Integration",
    description: "Seamless presence across multiple platforms:",
    features: [
      "X Platform integration",
      "Telegram bot functionality",
      "Discord integration (coming soon)",
      "Farcaster support (planned)",
      "Cross-platform analytics"
    ]
  },
  {
    title: "Trading Integration",
    description: "Powered by Brian AI partnership:",
    features: [
      "Chat-based digital wallets",
      "Custom trading prompts",
      "Strategy marketplace",
      "Performance tracking",
      "Risk management"
    ]
  },
  {
    title: "SaaS Platform",
    description: "Scalable and secure cloud-based solution for businesses",
    icon: <RocketIcon className="h-8 w-8 text-blue-500" />,
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-dark-navy/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI Intern Accounts",
              description: "Powered by LangChain for natural language understanding, our AI interns can:",
              features: [
                "Engage with industry leaders",
                "Drive organic account growth",
                "Optimize social algorithms",
                "Handle DM communications",
                "Execute marketing campaigns"
              ]
            },
            {
              title: "Multi-Platform Integration",
              description: "Seamless presence across multiple platforms:",
              features: [
                "X Platform integration",
                "Telegram bot functionality",
                "Discord integration (coming soon)",
                "Farcaster support (planned)",
                "Cross-platform analytics"
              ]
            },
            {
              title: "Trading Integration",
              description: "Powered by Brian AI partnership:",
              features: [
                "Chat-based digital wallets",
                "Custom trading prompts",
                "Strategy marketplace",
                "Performance tracking",
                "Risk management"
              ]
            }
          ].map((feature, index) => (
            <div key={index} className="glass-card p-8 animate-fade-in-up" 
                 style={{ animationDelay: `${index * 200}ms` }}>
              <h3 className="text-xl font-bold mb-4 gradient-text">{feature.title}</h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.features.map((item, i) => (
                  <li key={i} className="text-white/80 flex items-center">
                    <span className="text-neon-pink mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}