import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Crypto Project Founder",
    avatar: "/placeholder-avatar.png",
    quote: "Soul's AI Intern has transformed our X presence. The engagement is genuine and our community growth has been phenomenal.",
  },
  {
    name: "Sarah Chen",
    role: "Trading Strategy Creator",
    avatar: "/placeholder-avatar.png",
    quote: "The community rewards system is brilliant. My trading strategies are helping others while generating passive income.",
  },
  {
    name: "Michael Park",
    role: "Community Manager",
    avatar: "/placeholder-avatar.png",
    quote: "The multi-platform presence and autonomous engagement have made managing our community effortless and more effective.",
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-dark-navy/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="glass-card animate-fade-in-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-neon-pink/10 text-neon-pink">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-container">
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                  </div>
                </div>
                <div className="text-container">
                  <p className="italic text-white/80">{testimonial.quote}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}