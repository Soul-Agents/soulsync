import { Check } from "lucide-react";

export default function PricingSection() {
  const pricingTiers = [
    {
      name: "Monthly",
      price: "100",
      period: "/month",
      description: "Basic X Account AI Agent",
      features: [
        "Up to 50 messages per day",
        "X (Twitter) platform integration",
        "AI-powered engagement",
        "Connect with influencers across 'Crypto X'",
        "Requires your own X API key",
        "Basic configuration options",
      ],
    },
    {
      name: "Yearly",
      price: "1000",
      period: "/year",
      description: "Limited Time Early Bird Offer",
      features: [
        "Everything in Monthly plan",
        "Up to 50 messages per day",
        "Save $200 with annual billing",
        "Priority support",
        "Basic configuration options",
        "Requires your own X API key",
      ],
      featured: true,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-dark-navy/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-electric-purple/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 gradient-text">
          Simple Pricing
        </h2>
        
        <p className="text-center text-white/80 max-w-2xl mx-auto mb-12">
          Straightforward pricing for your AI agent needs. Each plan requires your own X API key.
        </p>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`glass-card p-8 animate-fade-in-up ${
                tier.featured ? "border-2 border-neon-pink" : ""
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold gradient-text mb-2">
                  {tier.name}
                </h3>
                <div className="text-3xl font-bold text-white mb-4">
                  ${tier.price}
                  <span className="text-lg text-white/60">{tier.period}</span>
                </div>
                <p className="text-white/80 mb-6">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start text-white/80"
                  >
                    <Check className="h-5 w-5 text-neon-pink mr-3 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-white/60">
          <p>All prices are per single AI agent</p>
        </div>
      </div>
    </section>
  );
}
