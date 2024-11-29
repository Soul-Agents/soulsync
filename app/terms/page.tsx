import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Soul Agents",
  description: "Terms of Service and usage guidelines for Soul Agents",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black/50 to-transparent">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 gradient-text text-center">
            Terms of Service
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
                Welcome to Soul Agents. These Terms of Service govern your use
                of our protocol. By accessing our services, you agree to comply
                with and be bound by these terms. Please read them carefully.
              </p>
            </div>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">1.</span> Service Overview
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-4">
                  <p className="text-white/80">
                    Soul Agents Trading Protocol ("Protocol") provides
                    AI-powered cryptocurrency trading insights through GIGABRAIN
                    technology. Our services include:
                  </p>
                  <ul className="list-none space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span>
                        Advanced AI-powered trading analysis and insights
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span>
                        Interactive chat interfaces for market analysis
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span>Real-time market monitoring and alerts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span>Customized trading suggestions and strategies</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">2.</span> User Eligibility &
                  Accounts
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      2.1 Eligibility Requirements
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          Must be of legal age in your jurisdiction (minimum 18
                          years)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          Must have a basic understanding of cryptocurrency
                          trading
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          Must comply with all local laws and regulations
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      2.2 Restricted Users
                    </h3>
                    <div className="bg-red-900/20 border border-red-500/50 p-6 rounded-lg">
                      <p className="text-white/90 mb-6">
                        The following individuals and entities are strictly
                        prohibited from using our protocol and services:
                      </p>

                      <div>
                        <h4 className="text-white/90 mb-2">
                          U.S. Persons, defined as:
                        </h4>
                        <ul className="list-none space-y-2">
                          <li className="flex items-start gap-3">
                            <span className="text-red-400">•</span>
                            <span>
                              Any U.S. citizen, regardless of residence
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-red-400">•</span>
                            <span>Any U.S. resident or Green Card holder</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-red-400">•</span>
                            <span>Any entity organized under U.S. laws</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-red-400">•</span>
                            <span>
                              Any branch/agency of foreign entity located in the
                              U.S.
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-red-400">•</span>
                            <span>
                              Any trust of which any trustee is a U.S. Person
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-red-400">•</span>
                            <span>
                              Any agency or branch of a foreign entity located
                              in the U.S.
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-red-400">•</span>
                            <span>
                              Any non-discretionary account held by a dealer or
                              fiduciary for a U.S. Person
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-white/90 mb-2">
                          Sanctioned Individuals/Entities:
                        </h4>
                        <ul className="list-none space-y-2">
                          <li className="flex items-start gap-3">
                            <span className="text-red-400">•</span>
                            <span>
                              Any individual or entity on OFAC's SDN List
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-red-400">•</span>
                            <span>
                              Any individual or entity on other applicable
                              sanctions lists
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-red-400">•</span>
                            <span>
                              Any entity owned or controlled by sanctioned
                              individuals/entities
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-white/90 mb-2">
                          Restricted Jurisdictions:
                        </h4>
                        <ul className="list-none space-y-2">
                          <li className="flex items-start gap-3">
                            <span className="text-red-400">•</span>
                            <span>
                              Residents or citizens of any comprehensively
                              sanctioned jurisdictions
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-red-400">•</span>
                            <span>
                              Entities organized or operating in sanctioned
                              jurisdictions
                            </span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-red-400">•</span>
                            <span>
                              IP addresses associated with restricted
                              territories
                            </span>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-6 pt-6 border-t border-red-500/30">
                        <p className="text-white/90 mb-0">
                          By accessing our protocol, you represent and warrant
                          that you do not fall under any of the above restricted
                          categories. We reserve the right to terminate access
                          immediately if we determine you are a restricted user.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      2.3 Account Security
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          You are responsible for maintaining account security
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          Sharing of access credentials is strictly prohibited
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Report any unauthorized access immediately</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">3.</span> Protocol Usage
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      3.1 Acceptable Use
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          Use the protocol for personal trading insights only
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          Connect only wallets that you own and control
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          Provide accurate social verification through X
                          (formerly Twitter)
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>Respect rate limits and protocol guidelines</span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      3.2 Prohibited Activities
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>No automated access or bot interactions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>No attempts to bypass security measures</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>No distribution of protocol content or data</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          No use of multiple accounts or shared credentials
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">4.</span> Intellectual Property
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      4.1 Ownership
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          All protocol content and technology is proprietary
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          The GIGABRAIN system and Crypto Bunny brand are
                          protected intellectual property
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      4.2 Usage Rights
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          You may use the protocol's AI insights and trading
                          analysis for your personal investment decisions
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          You may connect your personal wallet(s) to interact
                          with the protocol
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          You may not use the protocol on behalf of others or
                          provide services based on our protocol
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          You may not copy, modify, distribute, sell, or lease
                          any part of our protocol or included content
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          You may not use the protocol for automated trading,
                          market making, or commercial trading operations
                        </span>
                      </li>
                    </ul>
                    <div className="bg-blue-900/20 border border-blue-500/50 p-4 rounded-lg mt-4">
                      <p className="text-white/90 mb-0">
                        In simple terms: Use the protocol for your own trading
                        decisions, but don't build commercial services around it
                        or use it for automated trading.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">5.</span> Liability &
                  Disclaimers
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-4">
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      5.1 Trading Risks
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          Cryptocurrency trading involves substantial risk
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>AI insights are not financial advice</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          Past performance does not guarantee future results
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white/90">
                      5.2 Protocol Availability
                    </h3>
                    <ul className="list-none space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          Service may be interrupted for maintenance or updates
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          No guarantee of continuous or error-free operation
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-blue-400">•</span>
                        <span>
                          We are not responsible for losses due to network
                          issues or protocol downtime
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">6.</span> Termination
                </h2>
                <div className="bg-white/5 rounded-xl p-6 space-y-4">
                  <p className="text-white/80">
                    We reserve the right to terminate or suspend access to our
                    services:
                  </p>
                  <ul className="list-none space-y-2">
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span>For violations of these terms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span>For suspicious or harmful activities</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span>If we determine you are a restricted user</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-400">•</span>
                      <span>At our discretion, with or without cause</span>
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-6 text-white/90 flex items-center gap-2">
                  <span className="text-primary">7.</span> Changes to Terms
                </h2>
                <div className="bg-white/5 rounded-xl p-6">
                  <p className="text-white/80">
                    We may update these terms at any time. Continued use of the
                    protocol after changes constitutes acceptance of the new
                    terms. We will notify users of significant changes via email
                    or protocol notifications.
                  </p>
                </div>
              </section>

              <section className="bg-blue-900/20 p-8 rounded-xl border border-blue-500/50">
                <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                  Contact Us
                </h2>
                <p className="text-center text-white/80 max-w-2xl mx-auto">
                  If you have any questions about these Terms of Service, please
                  contact our support team. We are committed to providing
                  clarity and assistance regarding our protocol's usage terms.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
