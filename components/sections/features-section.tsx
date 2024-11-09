import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RocketIcon, BrainCircuitIcon, MessagesSquareIcon, BarChartIcon } from "lucide-react"

const features = [
  {
    title: "Crypto Bunny AI Agent",
    description: "Advanced AI-powered trading assistant for optimal decision-making",
    icon: <BrainCircuitIcon className="h-8 w-8 text-pink-500" />,
  },
  {
    title: "Multi-Platform Communication",
    description: "Seamless integration with popular messaging platforms",
    icon: <MessagesSquareIcon className="h-8 w-8 text-purple-500" />,
  },
  {
    title: "Autonomous Trading",
    description: "Set it and forget it with our intelligent trading algorithms",
    icon: <BarChartIcon className="h-8 w-8 text-indigo-500" />,
  },
  {
    title: "SaaS Platform",
    description: "Scalable and secure cloud-based solution for businesses",
    icon: <RocketIcon className="h-8 w-8 text-blue-500" />,
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Cutting-Edge Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-black/50 border-purple-500/50 hover:border-pink-500/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {feature.icon}
                  <span>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}