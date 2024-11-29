import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Soul AI Agents",
  description: "Privacy Policy and data handling practices for Soul AI Agents",
};

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black/50 to-transparent">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 gradient-text text-center">
            Privacy Policy
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

            <div className="bg-blue-900/20 border border-blue-500/50 p-6 rounded-xl mb-12">
              <p className="text-white/90 text-center mb-0">
                At Soul AI Agents, we are committed to protecting your privacy
                and ensuring the security of your personal information. This
                Privacy Policy outlines our practices for collecting, using, and
                safeguarding your data.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">1.</span> Introduction
                </h2>
                <div className="bg-white/5 rounded-xl p-6">
                  <p className="text-white/80">
                    Soul AI Agents ("we," "our," or "us") is committed to
                    protecting your privacy. This Privacy Policy explains how we
                    collect, use, disclose, and safeguard your information when
                    you use our services. By using our platform, you agree to
                    the collection and use of information in accordance with
                    this policy.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">2.</span> Information We
                  Collect
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-6">
                  <p className="text-white/80">
                    We collect various types of information to provide and
                    improve our services:
                  </p>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-3">
                      <h3 className="text-lg font-medium text-white/90">
                        Account Information
                      </h3>
                      <ul className="list-none space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400">•</span>
                          <span>Name and email address</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400">•</span>
                          <span>Account credentials</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400">•</span>
                          <span>Communication preferences</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-medium text-white/90">
                        Usage Data
                      </h3>
                      <ul className="list-none space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400">•</span>
                          <span>AI interaction history</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400">•</span>
                          <span>Trading preferences and patterns</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400">•</span>
                          <span>Platform activity logs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">3.</span> Data Usage
                </h2>
                <div className="bg-white/5 rounded-xl p-6">
                  <p className="text-white/80 mb-4">
                    We utilize collected data for the following purposes:
                  </p>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span>
                        Training and improving our AI models for better trading
                        insights
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span>
                        Monitoring and optimizing network performance across
                        blockchain networks
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span>
                        Enhancing trading suggestions and platform functionality
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span>
                        Maintaining platform security and preventing
                        unauthorized access
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">4.</span> Third-Party
                  Integration
                </h2>
                <div className="bg-white/5 rounded-xl p-6">
                  <p className="text-white/80 mb-4">
                    Our platform integrates with various third-party services:
                  </p>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-3">
                      <h3 className="text-lg font-medium text-white/90">
                        Blockchain Networks
                      </h3>
                      <ul className="list-none space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400">•</span>
                          <span>Arbitrum Network</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400">•</span>
                          <span>Base Network</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400">•</span>
                          <span>Ethereum Network</span>
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-medium text-white/90">
                        Services
                      </h3>
                      <ul className="list-none space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400">•</span>
                          <span>AI Processing Services</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400">•</span>
                          <span>Network Monitoring</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-blue-400">•</span>
                          <span>Authentication Systems</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">5.</span> Data Security
                </h2>
                <div className="bg-white/5 rounded-xl p-6">
                  <p className="text-white/80 mb-4">
                    We implement robust security measures to protect your data:
                  </p>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span>
                        End-to-end encryption for all chat data and sensitive
                        information
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span>
                        Continuous monitoring of network connections and access
                        patterns
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span>
                        Secure password-protected access with additional
                        authentication layers
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span>
                        Regular security audits and vulnerability assessments
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">6.</span> User Rights
                </h2>
                <div className="bg-white/5 rounded-xl p-6">
                  <p className="text-white/80 mb-4">
                    As a user of our platform, you have the following rights:
                  </p>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span>
                        Request deletion of your chat history and personal data
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span>
                        Opt-out of non-essential data collection and processing
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span>
                        Access and export your stored data in a portable format
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span>
                        Update or correct your personal information at any time
                      </span>
                    </li>
                  </ul>
                </div>
              </section>

              <section className="bg-blue-900/20 p-8 rounded-xl border border-blue-500/50">
                <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                  Contact Us
                </h2>
                <p className="text-center text-white/80 max-w-2xl mx-auto">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact our privacy team. We are
                  committed to addressing your concerns and ensuring your data
                  is protected.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
