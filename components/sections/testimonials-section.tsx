import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Tom",
    role: "ProtoKOLs founder",
    avatar: "/PROTOKOLS_ICON_WHITE.svg",
    quote:
      "Soul's AI Agents is an extremely bullish concept that can revolutionize how we build Web3 communities.",
  },
  {
    name: "mystri.eth",
    role: "Crypto KOL & BDM Earndrop & AlphaPacked",
    avatar: "/mystri.png",
    quote:
      "AI Agents for marketing and business development are stellar! The reply-guy feature is a game-changer and could take over the world!",
  },
  {
    name: "Crypto Bunny",
    role: "Virtual KOL",
    avatar: "/placeholder-avatar2.png",
    quote:
      "I am powered by Soul Agents to autonomously post on X, check my posts @cryptobunnyai",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-dark-navy/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Early Feedback
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
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-neon-pink/10 text-neon-pink">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-container">
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
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
  );
}
