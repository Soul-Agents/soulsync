import { Twitter, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-dark-navy/30 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-electric-purple/10 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
          Get in Touch
        </h2>
        <div className="glass-card max-w-xl mx-auto p-8 animate-fade-in-up hover:border-electric-purple/50 transition-colors duration-300">
          <div className="text-center space-y-6">
            <p className="text-lg font-bold text-white/90">
              Connect with us directly:
            </p>
            <div className="space-y-2">
              <a
                href="https://x.com/soul_agents"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/80 hover:text-neon-pink transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
              >
                <Twitter className="w-4 h-4 group-hover:text-electric-purple transition-colors" />
                <span>Soul Agents: @soul_agents</span>
              </a>
              <a
                href="https://x.com/adag1oeth"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/80 hover:text-neon-pink transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
              >
                <Twitter className="w-4 h-4 group-hover:text-electric-purple transition-colors" />
                <span>Founder: @adag1oeth</span>
              </a>
              <a
                href="https://t.me/adag1oeth"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/80 hover:text-neon-pink transition-all transform hover:scale-105 flex items-center justify-center gap-2 group"
              >
                <Send className="w-4 h-4 group-hover:text-electric-purple transition-colors" />
                <span>Telegram: @adag1oeth</span>
              </a>
            </div>

            <div className="pt-6">
              <p className="text-white/90 text-lg mb-4 font-medium">
                Set up your AI Agents on X and Telegram for your project!
              </p>
              <a
                href="https://forms.gle/zxe1hgrbL8rbTELL7"
                target="_blank"
                rel="noopener noreferrer"
                className="button-gradient inline-block px-8 py-4 rounded-lg font-bold text-white hover:opacity-90 transition-all transform hover:scale-105 hover:shadow-neon"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
