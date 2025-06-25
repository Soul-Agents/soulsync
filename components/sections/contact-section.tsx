import { Twitter, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="pt-24 pb-24 bg-dark-navy/30 relative overflow-hidden"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-electric-purple/10 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-neon-pink/20 rounded-full blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-electric-purple/20 rounded-full blur-3xl animate-float-delayed pointer-events-none" />

      <div className="container mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-8 gradient-text animate-fade-in">
          Contact Us
        </h2>
        <div className="max-w-lg mx-auto text-center space-y-8">
          <div>
            <p className="text-lg text-white/80 mb-2 font-medium">
              Questions? Partnerships? Just want to say gm?
            </p>
            <p className="text-2xl font-bold text-white mb-6">
              Connect with the team:
            </p>
            <div className="flex flex-col items-center gap-3">
              <a
                href="https://x.com/soul_agents"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-electric-purple hover:text-neon-pink font-semibold text-lg transition-colors"
              >
                <Twitter className="w-5 h-5" />
                Soul Agents on X
              </a>
              <a
                href="https://t.me/soul_agents"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-electric-purple hover:text-neon-pink font-semibold text-lg transition-colors"
              >
                <Send className="w-5 h-5" />
                Soul Agents on TG
              </a>
            </div>
          </div>
          <div className="pt-6">
            <div className="text-sm text-white/50 font-medium flex flex-col items-center">
              <a
                href="https://x.com/soul_agents/status/1865085603043553628"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-electric-purple hover:text-neon-pink underline transition-colors"
              >
                <span role="img" aria-label="bronze medal">🥉</span>
                3rd Place – Brian AI Hackathon (2024)
              </a>
            </div>
            <div className="mt-6 flex justify-center">
              <span className="text-white/60 text-sm text-center font-medium">
                <span role="img" aria-label="heart">❤️</span> Made with love by the Soul Agents team — crypto-native builders designing the future of autonomous identity.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
