import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-dark-navy/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Get in Touch</h2>
        <div className="glass-card max-w-xl mx-auto p-8 animate-fade-in-up">
          <div className="mb-8 text-center">
            <p className="text-lg text-white/80 mb-4">Connect with us directly:</p>
            <div className="space-y-2">
              <a href="https://x.com/adag1oeth" className="block text-white/80 hover:text-neon-pink transition-colors">
                X: @adag1oeth
              </a>
              <a href="https://t.me/adag1oeth" className="block text-white/80 hover:text-neon-pink transition-colors">
                Telegram: @adag1oeth
              </a>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <Input
                type="email"
                placeholder="Your Email"
                className="w-full p-4"
              />
            </div>
            <div>
              <Textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-4"
              />
            </div>
            <button className="w-full button-gradient text-white font-bold py-4 rounded-lg">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}