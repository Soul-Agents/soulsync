import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Crypto Trader",
    avatar: "/placeholder-avatar-1.jpg",
    quote: "Soulsync has revolutionized my trading strategy. The AI insights are invaluable!",
  },
  {
    name: "Sarah Lee",
    role: "FinTech CEO",
    avatar: "/placeholder-avatar-2.jpg",
    quote: "Implementing Soulsync in our company has boosted our efficiency tenfold.",
  },
  {
    name: "Michael Chen",
    role: "Investment Analyst",
    avatar: "/placeholder-avatar-3.jpg",
    quote: "The accuracy and speed of Soulsync's AI are unmatched in the market.",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-black/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-black/50 border-purple-500/50">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-gray-300">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}