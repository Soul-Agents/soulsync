import { CheckCircleIcon } from "lucide-react"

const benefits = [
  "Genuine Community Engagement",
  "Autonomous Trading Capabilities",
  "Custom Strategy Creation",
  "Community Rewards System"
]

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Why Choose Soul</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            "Genuine Community Engagement",
            "Autonomous Trading Capabilities",
            "Custom Strategy Creation",
            "Community Rewards System"
          ].map((benefit, index) => (
            <div key={index} className="glass-card flex items-center p-6 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
              <span className="text-neon-pink text-2xl mr-4">✓</span>
              <span className="text-lg text-white/80">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}