import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const teamMembers = [
  {
    name: "Dr. Emma Quantum",
    role: "AI Research Lead",
    avatar: "/placeholder-avatar-4.jpg",
    bio: "Expert in quantum computing and AI algorithms",
  },
  {
    name: "Jack Blockchain",
    role: "Crypto Strategist",
    avatar: "/placeholder-avatar-5.jpg",
    bio: "Veteran trader with 10+ years in cryptocurrency markets",
  },
  {
    name: "Sophia Code",
    role: "Lead Developer",
    avatar: "/placeholder-avatar-6.jpg",
    bio: "Full-stack engineer specializing in scalable AI systems",
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-indigo-900 to-purple-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Meet the Soulsync Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-black/50 border-purple-500/50">
              <CardContent className="p-6 text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-pink-400 mb-2">{member.role}</p>
                <p className="text-sm text-gray-300">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}