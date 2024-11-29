import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Disclosure - Soul AI Agents",
  description: "Risk Disclosure and important warnings for Soul AI Agents",
};

export default function Disclosure() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black/50 to-transparent">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 gradient-text text-center">
            Risk Disclosure Statement
          </h1>

          <div className="prose prose-invert max-w-none">
            <div className="mb-8 text-center">
              <p className="text-lg text-white/80">
                Last updated:{" "}
                {new Date().toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>

            <div className="bg-red-900/20 border border-red-500 p-6 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-red-400 mb-4 text-center uppercase tracking-wider">
                Maximum Risk Zone - Critical Information
              </h2>
              <p className="text-white/90 text-center mb-0">
                This document outlines significant risks associated with using
                Soul AI Agents' trading platform. Please read carefully before
                engaging with our services.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">1.</span> AI Trading Risks
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-3">
                  <p className="text-white/80 mb-4">
                    The use of artificial intelligence in trading comes with
                    inherent risks and limitations that all users must
                    understand:
                  </p>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        AI predictions may be inaccurate or fail to account for
                        unexpected market events
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        Market conditions can change rapidly, potentially
                        rendering AI analysis outdated
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        Technical issues may affect AI performance or cause
                        delays in analysis
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        Past AI success does not guarantee future results or
                        performance
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">2.</span> Network Risks
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-3">
                  <p className="text-white/80 mb-4">
                    Our platform operates across multiple blockchain networks,
                    each presenting unique risks:
                  </p>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        Multiple network dependencies (Arbitrum, Base, Ethereum)
                        may cause operational complexities
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        Network outages or congestion can significantly impact
                        trading operations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        Blockchain congestion may result in delayed transaction
                        execution
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        Smart contract vulnerabilities could pose risks to user
                        assets
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">3.</span> Financial Risks
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-3">
                  <p className="text-white/80 mb-4">
                    Cryptocurrency trading involves substantial financial risks:
                  </p>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        Users may experience partial or total loss of invested
                        capital
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        Cryptocurrency markets are known for extreme volatility
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        Leverage trading can magnify both gains and losses
                        significantly
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        No trading strategy or AI system can guarantee profits
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">4.</span> Platform Risks
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-3">
                  <ul className="list-none space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        Service interruptions may occur during maintenance or
                        updates
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        Chat system may experience limitations or delays
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        Rate limiting could affect platform accessibility
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        Security depends on proper credential management
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">5.</span> GIGABRAIN AI
                  Limitations
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-3">
                  <ul className="list-none space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        AI outputs should not be considered as financial advice
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        Our technology is experimental and continuously evolving
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        AI systems may contain inherent biases affecting
                        analysis
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>Response times may vary based on system load</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">6.</span> Legal Compliance
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-3">
                  <ul className="list-none space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        Users are responsible for compliance with local
                        regulations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        Platform does not handle or advise on tax obligations
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>No regulatory guarantees are provided</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        Service availability may be restricted in certain
                        jurisdictions
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="bg-gray-900/50 p-8 rounded-xl border border-white/10">
                <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                  Platform Usage Agreement
                </h2>
                <div className="space-y-4">
                  <p className="text-center text-white/80">
                    By using this platform, you explicitly acknowledge and agree
                    that:
                  </p>
                  <ul className="list-none space-y-3 max-w-2xl mx-auto">
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        You accept all risks associated with cryptocurrency
                        trading
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        You understand the limitations of AI-powered trading
                        systems
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        You take full responsibility for any potential losses
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-400">•</span>
                      <span>
                        You verify your compliance with all applicable laws
                      </span>
                    </li>
                  </ul>
                </div>
              </section>
            </div>

            <div className="mt-12 text-center">
              <div className="inline-block border border-white/10 rounded-lg px-6 py-3 bg-white/5">
                <p className="text-lg font-semibold mb-0">
                  STAY SAFE • TRADE SMART • RESPECT THE TECH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
