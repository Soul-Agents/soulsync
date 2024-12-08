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
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Achievement Info */}
              <div className="flex items-center justify-center flex-[2]">
                <div className="flex items-center justify-center">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">🏆</span>
                    <div>
                      <h3 className="text-lg font-bold gradient-text">
                        3rd Place in Brian AI Hackathon
                      </h3>
                      <div className="flex items-center gap-3 text-white/60 mt-1">
                        <a
                          href="https://chat.soulagents.io"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-electric-purple hover:underline text-sm"
                        >
                          chat.soulagents.io
                        </a>
                        <span>•</span>
                        <a
                          href="https://x.com/BrianknowsAI/status/1865067091759427955"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neon-pink hover:underline text-sm"
                        >
                          View →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vertical Divider - Hidden on mobile */}
              <div className="hidden md:block h-16 w-px bg-white/10 mx-4" />

              {/* More Info Link */}
              <div className="flex items-center justify-center flex-1 mt-4 md:mt-0">
                <a
                  href="/deck"
                  className="text-white/60 hover:text-white transition-colors group flex flex-col items-center"
                >
                  <span className="text-xs">Get access to</span>
                  <span className="text-neon-pink font-bold text-lg">
                    more information
                  </span>
                  <span className="text-white/40">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
