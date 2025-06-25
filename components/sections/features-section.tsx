"use client";

import { useRouter } from "next/navigation";
import { usePrivy, useLoginWithOAuth } from "@privy-io/react-auth";

const features = [
  {
    title: "Basic Engagement",
    description:
      "AI-powered responses to help maintain community connections",
    benefits: [
      "Simple language understanding",
      "Basic context awareness",
      "Automated follows",
      "Community interaction",
    ],
  },
  {
    title: "Automated Responses",
    description:
      "Automated monitoring and response capabilities for your X account",
    benefits: [
      "Scheduled engagement",
      "Response to mentions",
      "Basic community interaction",
      "Configurable response patterns",
    ],
  },
  {
    title: "Network Building",
    description: "Connect with relevant accounts in your industry",
    benefits: [
      "Target specific accounts",
      "Basic relationship building",
      "Visibility improvement",
      "Community presence",
    ],
  },
  {
    title: "X Platform Focus",
    description: "Focused on X (Twitter) platform engagement",
    benefits: [
      "Replies to targeted accounts",
      "Engagement with relevant content",
      "Basic sentiment understanding",
      "Improved visibility",
    ],
  },
];

export default function FeaturesSection() {
  const { user } = usePrivy();
  const router = useRouter();

  const { initOAuth } = useLoginWithOAuth({
    onComplete: () => {
      console.log("Login complete");
    },
  });

  const handleLogin = async () => {
    await initOAuth({ provider: "twitter" });
  };

  return (
    <section id="how-it-works" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-purple/5 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            How it Works
          </h2>
          <p className="text-xl text-white/80">
            Set up your AI agent in minutes. No code. No friction.
          </p>
        </div>
        <ol className="max-w-xl mx-auto space-y-10 text-left">
          <li className="flex items-start gap-4">
            <span className="text-2xl font-bold text-electric-purple flex-shrink-0">1.</span>
            <div>
              <div className="font-semibold text-white mb-1">Set up your agent</div>
              <div className="text-white/80">
                Pick your vibe. Customize tone, style, and who your agent talks to.
              </div>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-2xl font-bold text-electric-purple flex-shrink-0">2.</span>
            <div>
              <div className="font-semibold text-white mb-1">Add your X API key</div>
              <div className="text-white/80">
                We guide you step by step. No dev skills needed. Free tier is enough.
                <div className="text-xs text-white/50 mt-2 italic">
                  Note: Free tier supports 3 replies/day. For more, use an X Basic key.
                </div>
              </div>
            </div>
          </li>
          <li className="flex items-start gap-4">
            <span className="text-2xl font-bold text-electric-purple flex-shrink-0">3.</span>
            <div>
              <div className="font-semibold text-white mb-1">Go live</div>
              <div className="text-white/80">
                Your agent starts posting replies. You get more reach every day.
              </div>
            </div>
          </li>
        </ol>
        <div className="flex justify-center mt-12">
          <button
            aria-label="Start your trial for $19"
            onClick={() => {
              if (user) {
                router.push("/app");
              } else {
                handleLogin();
              }
            }}
            className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-gradient-to-r from-neon-pink to-electric-purple text-lg font-bold text-white shadow-lg hover:opacity-90 transition-all duration-300 w-full max-w-xs"
          >
            Try now for $19 →
          </button>
        </div>
      </div>
    </section>
  );
}
