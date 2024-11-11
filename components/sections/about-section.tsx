export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            About Soul AI Agents
          </h2>
          <p className="text-xl mb-8 text-white/80">
            Launched in November 2024, Soul AI Agents brings emotional intelligence to Web3 community management.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3">What we build?</h3>
              <p>
                We build the ultimate X accounts, which are so smart that you can also talk with them on TG, this is the future of Web3 and beyond.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3">Quality Focus</h3>
              <p>
                Our Agents know exactly who to talk to on X, you got it! Get the attention of the most influential and most relevant people.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3">Trading Capability</h3>
              <p>Ask the bot to trade on your behalf with X analytics and access to trading tools, a leaderboard and copy-trading functionality.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
