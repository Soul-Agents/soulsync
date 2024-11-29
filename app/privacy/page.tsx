import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Soul Agents",
  description: "Privacy Policy and data handling practices for Soul Agents",
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
                At Soul Agents, we prioritize your privacy and data security.
                This Privacy Policy explains how we collect, use, and protect
                your information. By using our protocol, you agree to the data
                practices described here.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">1.</span> Information We
                  Collect
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      1.1 Account Information
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Email address and account credentials</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          Connected wallet addresses and transaction history
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          X (formerly Twitter) credentials for social
                          verification
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Profile information and preferences</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      1.2 Trading Data
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Trading preferences and patterns</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>AI interaction history</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Protocol usage statistics</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          On-chain activity related to connected wallets
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      1.3 Technical Data
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>IP address and device information</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Browser type and settings</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Access timestamps and logs</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-blue-900/20 border border-blue-500/50 p-4 rounded-lg mt-4">
                    <p className="text-white/90 mb-0">
                      Note: We collect and process wallet addresses and social
                      media credentials solely for the purpose of providing our
                      services, preventing fraud, and ensuring protocol
                      security. This information is handled in accordance with
                      our security standards and data protection practices.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">2.</span> How We Use Your
                  Information
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      2.1 Service Improvement
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          Enhance AI trading insights and recommendations
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          Improve protocol functionality and user experience
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Develop new features and services</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      2.2 Security & Compliance
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Protect against unauthorized access</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Detect and prevent fraud</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Comply with legal obligations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">3.</span> Data Protection
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      3.1 Security Measures
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>End-to-end encryption for sensitive data</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Regular security audits and monitoring</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Secure access controls and authentication</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      3.2 Data Retention
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Data kept only as long as necessary</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Regular data review and cleanup</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Secure data disposal procedures</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">4.</span> Your Rights
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      4.1 Data Access & Control
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Request access to your personal data</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Correct or update your information</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Delete your account and associated data</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      4.2 Communication Preferences
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Opt-out of marketing communications</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Choose notification preferences</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Manage data sharing settings</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">5.</span> Third-Party Services
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      5.1 Data Sharing
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Essential service providers and partners</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          Legal and regulatory authorities when required
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      5.2 Third-Party Links
                    </h3>
                    <p className="text-white/80">
                      Our protocol may contain links to third-party websites. We
                      are not responsible for their privacy practices. We
                      encourage you to read their privacy policies.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">6.</span> Updates to Privacy
                  Policy
                </h2>
                <div className="bg-white/5 rounded-xl p-6">
                  <p className="text-white/80">
                    We may update this Privacy Policy periodically to reflect
                    changes in our practices or legal requirements. We will
                    notify you of any material changes via email or platform
                    notifications. Continued use of our services after such
                    changes constitutes acceptance of the updated policy.
                  </p>
                </div>
              </section>

              <section className="bg-blue-900/20 p-8 rounded-xl border border-blue-500/50">
                <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                  Contact Us
                </h2>
                <p className="text-center text-white/80 max-w-2xl mx-auto">
                  If you have any questions about our Privacy Policy or how we
                  handle your data, please contact our privacy team. We are
                  committed to addressing your privacy concerns promptly and
                  transparently.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
