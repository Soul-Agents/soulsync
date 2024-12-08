export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            About Soul AI Agents
          </h2>
          <p className="text-xl mb-8 text-white/80">
            Launched in October 2024, Soul Agents brings autonomous intelligence
            to Web3 community management. Our trading demo is now live, and the
            reply-guy feature is revolutionizing engagement.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3">Cross-Platform AI</h3>
              <p>
                Advanced AI agents that seamlessly operate across X and
                Telegram, delivering intelligent engagement for Web3
                communities.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3">Strategic Growth</h3>
              <p>
                Our AI agents intelligently engage with key industry influencers
                and decision-makers to expand your network and visibility.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3">Trading Integration</h3>
              <p>
                Trading capabilities powered by social sentiment analysis and
                community-driven insights are now live.
              </p>
            </div>
          </div>

          {/* Hackathon Achievement */}
          <div className="mt-12 glass-card p-6">
            <div className="flex flex-col items-center space-y-3">
              <span className="text-2xl">🏆</span>
              <h3 className="text-xl font-bold gradient-text">
                3rd Place in Brian AI Hackathon
              </h3>
              <div className="flex items-center gap-3 text-white/60">
                <a
                  href="https://chat.soulagents.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-electric-purple hover:underline"
                >
                  chat.soulagents.io
                </a>
                <span>•</span>
                <a
                  href="https://x.com/BrianknowsAI/status/1865067091759427955"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neon-pink hover:underline"
                >
                  View →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
