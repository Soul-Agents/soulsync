export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 gradient-text">
            About Soul AI Agents
          </h2>
          <p className="text-xl mb-8 text-white/80">
            Launched in November 2024, Soul AI Agents brings emotional
            intelligence to Web3 community management. Our journey began in
            January 2022 with a vision to revolutionize how projects engage with
            their communities.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3">Smart Engagement</h3>
              <p>
                AI-powered responses that maintain authentic community
                connections
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3">Quality Focus</h3>
              <p>
                Intelligent filtering to engage with relevant community members
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-3">Real-Time Analysis</h3>
              <p>Continuous monitoring and adaptation to community sentiment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
