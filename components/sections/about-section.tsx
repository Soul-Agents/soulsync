import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const teamMembers = [
  {
    name: "Aleksandra",
    role: "Chief AI Engineer",
    avatar: "/placeholder-avatar.png",
    bio: "Visionary behind the Soul AI Agent",
  },
  // Add other team members as needed
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">About Us</h2>
        <div className="glass-card max-w-3xl mx-auto p-8 text-center animate-fade-in-up">
          <p className="text-lg mb-6 text-white/80">
            At Soul, we believe in infusing AI with a sense of soulfulness, creating agents that not only assist but also resonate with us on a human level.
          </p>
          <p className="text-lg text-white/70">
            Our mission is to craft AI agents that engage in genuine, heartfelt exchanges, bringing positivity and a human touch to the digital realm.
          </p>
        </div>
      </div>
    </section>
  )
}