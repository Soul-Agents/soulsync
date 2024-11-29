import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Risk Disclosure - Soul Agents",
  description: "Risk Disclosure and important warnings for Soul Agents",
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

            <div className="bg-red-900/20 border border-red-500/50 p-6 rounded-xl mb-12">
              <h2 className="text-2xl font-bold text-red-400 mb-4 text-center uppercase tracking-wider">
                High Risk Trading Environment
              </h2>
              <p className="text-white/90 text-center mb-0">
                Cryptocurrency trading involves substantial risk of loss. Soul
                Agents' AI-powered insights, while advanced, cannot guarantee
                profits. Please read this disclosure carefully before trading.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">1.</span> Trading Risks
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      1.1 Market Risks
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>
                          High volatility can lead to substantial losses
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>
                          Market conditions can change rapidly and unpredictably
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>
                          Past performance does not indicate future results
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      1.2 Technical Risks
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>
                          Network congestion may affect trade execution
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>
                          Smart contract vulnerabilities could impact
                          transactions
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>
                          System downtime can occur during maintenance
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">2.</span> AI Technology
                  Limitations
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      2.1 Analysis Limitations
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>
                          AI predictions are based on historical data and may
                          not reflect future events
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>
                          Market anomalies may not be accurately predicted
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>
                          AI models have inherent biases and limitations
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      2.2 Performance Variations
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>Response times may vary under high load</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>
                          Analysis quality depends on data availability
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>
                          Model updates may change trading suggestions
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">3.</span> Network Risks
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      3.1 Blockchain Risks
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>Network congestion can delay transactions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>High gas fees during peak periods</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>
                          Network forks or upgrades may affect operations
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      3.2 Security Risks
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>Smart contract exploits are possible</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>Network attacks could disrupt services</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>Wallet security depends on user practices</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">4.</span> Financial Risks
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      4.1 Investment Risks
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>
                          Potential for complete loss of invested capital
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>Leverage trading can magnify losses</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>Market manipulation risks</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      4.2 Regulatory Risks
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>Changing regulations may affect trading</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>Tax implications vary by jurisdiction</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>Compliance requirements may change</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">5.</span> Protocol Risks
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      5.1 Operational Risks
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>System maintenance may cause downtime</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>Technical issues could affect functionality</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>Third-party service dependencies</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      5.2 User Risks
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>
                          Interface misunderstandings can lead to errors
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>Account security depends on user practices</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-red-400">•</span>
                        <span>Data input errors can affect analysis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="bg-red-900/20 p-8 rounded-xl border border-red-500/50">
                <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                  Acknowledgment
                </h2>
                <p className="text-center text-white/90 max-w-2xl mx-auto">
                  By using Soul Agents, you acknowledge that you understand and
                  accept all risks outlined in this disclosure. You agree to
                  trade responsibly and not risk more than you can afford to
                  lose.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
