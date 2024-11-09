"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text animate-fade-in-up">
            AI-Powered Crypto Trading
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto animate-fade-in-up animation-delay-300">
            Experience the future of trading with our advanced AI algorithms and real-time market analysis
          </p>
          <button className="button-gradient text-white font-bold px-8 py-4 rounded-lg text-lg animate-fade-in-up animation-delay-600">
            Start Trading Now
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "AI Trading Signals",
                description: "Real-time trading signals powered by advanced machine learning algorithms"
              },
              {
                title: "Portfolio Management",
                description: "Automated portfolio balancing and risk management"
              },
              {
                title: "Market Analysis",
                description: "Deep market insights and trend analysis"
              }
            ].map((feature, index) => (
              <div key={index} className="glass-card p-8 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <h3 className="text-xl font-bold mb-4 gradient-text">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Why Choose Soulsync</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Advanced AI Technology",
              "24/7 Automated Trading",
              "Secure Platform",
              "Professional Support"
            ].map((benefit, index) => (
              <div key={index} className="glass-card flex items-center p-6 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <span className="text-pink-400 text-2xl mr-4">✓</span>
                <span className="text-lg text-gray-200">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">What Traders Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                quote: "Soulsync has transformed my trading strategy completely.",
                author: "Alex Thompson",
                role: "Professional Trader"
              },
              {
                quote: "The AI signals are incredibly accurate and reliable.",
                author: "Sarah Chen",
                role: "Crypto Investor"
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-card p-8 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                <p className="text-lg mb-4 text-gray-200">{testimonial.quote}</p>
                <p className="text-pink-400 font-semibold">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">About Us</h2>
          <div className="glass-card max-w-3xl mx-auto p-8 text-center animate-fade-in-up">
            <p className="text-lg mb-6 text-gray-200">
              Soulsync is at the forefront of AI-powered crypto trading technology. Our mission is to make sophisticated trading strategies accessible to everyone through advanced artificial intelligence.
            </p>
            <p className="text-lg text-gray-300">
              Founded by a team of AI researchers and crypto experts, we are committed to revolutionizing the way people trade digital assets.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">Get in Touch</h2>
          <div className="glass-card max-w-xl mx-auto p-8 animate-fade-in-up">
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
    </main>
  )
}