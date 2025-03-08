export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            About Soul AI Agents
          </h2>
          <p className="text-xl mb-8 text-white/80">
            Soul Agents provides AI-powered assistance for Web3 community management on X (Twitter).
            Our platform enables personalized engagement while maintaining your brand's authentic voice.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3">X Platform Integration</h3>
              <p>
                Our AI agents are specifically designed for X (Twitter), with advanced 
                capabilities for posting, replying, and engaging with relevant content.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3">Community Management</h3>
              <p>
                Agents can monitor conversations, respond to mentions, engage with trending topics,
                and help grow your community through consistent, authentic interaction.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3">Customizable Voice</h3>
              <p>
                Each agent is trained on your specific brand voice, knowledge base,
                and communication style to ensure authentic representation.
              </p>
            </div>
          </div>

          {/* Hackathon Achievement */}
          <div className="mt-12 glass-card p-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Achievement Info */}
              <div className="flex items-center justify-center">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
