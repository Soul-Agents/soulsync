import { CheckCircleIcon } from "lucide-react"

const benefits = [
  "24/7 automated trading",
  "Reduced emotional decision-making",
  "Advanced risk management",
  "Real-time market insights",
  "Customizable trading strategies",
  "Seamless integration with existing systems",
]

export default function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 bg-gradient-to-b from-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Benefits of Soulsync
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center space-x-4">
              <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0" />
              <p className="text-lg">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}