import { Check } from "lucide-react";
import { useRouter } from "next/navigation";
import { usePrivy, useLoginWithOAuth } from "@privy-io/react-auth";

export default function PricingSection() {
  const { user } = usePrivy();
  const router = useRouter();

  const { initOAuth } = useLoginWithOAuth({
    onComplete: () => console.log("Login complete"),
  });

  const handleLogin = async () => {
    await initOAuth({ provider: "twitter" });
  };

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-3xl px-20 py-16 text-center shadow-xl">
        <div className="text-white/80 mb-4">
          Your AI co-pilot on X. Tuned to you.
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">Simple Pricing</h2>
        <p className="text-white/80 mb-6">
          <span className="font-semibold text-white">$99/month</span>
          <span className="text-white/60"> or </span>
          <span className="font-semibold text-white">$999/year</span>
          <span className="text-white/60"> (save ~17%). </span>
          <span className="text-white/80">
            First month just <span className="font-bold text-white">$19</span>. Cancel anytime.
          </span>
        </p>
        <ul className="mb-4 space-y-3 text-left max-w-lg mx-auto">
          <li className="flex items-baseline text-white/90">
            <Check className="h-5 w-5 text-electric-purple mr-2 flex-shrink-0" />
            <span>Works with free X API key (3 replies/day)</span>
          </li>
          <li className="flex items-baseline text-white/90">
            <Check className="h-5 w-5 text-electric-purple mr-2 flex-shrink-0" />
            <span>
              18 replies/day with a Basic X API key<sup>*</sup>
            </span>
          </li>
          <li className="flex items-baseline text-white/90">
            <Check className="h-5 w-5 text-electric-purple mr-2 flex-shrink-0" />
            <span>Reads your timeline, replies in your tone</span>
          </li>
          <li className="flex items-baseline text-white/90">
            <Check className="h-5 w-5 text-electric-purple mr-2 flex-shrink-0" />
            <span>Change style & posting times anytime</span>
          </li>
        </ul>
        <span className="block text-xs text-white/40 mb-8 text-left max-w-lg mx-auto pl-7">
          * Sold separately (~$200/month). Most users start free.
        </span>
        <button
          className="w-full py-3 mt-2 rounded-lg font-bold text-white bg-gradient-to-r from-neon-pink to-electric-purple hover:opacity-90 transition"
          onClick={() => {
            if (user) router.push("/app");
            else handleLogin();
          }}
        >
          Start with $19
        </button>
      </div>
      <div className="max-w-3xl mx-auto mt-12 text-xs text-white/60 text-left px-8">
        <div className="flex items-center mb-1">
          <span role="img" aria-label="wrench" className="mr-2">🚧</span>
          <span className="font-semibold text-white/80">Next up…</span>
        </div>
        <ul className="list-disc list-inside ml-6">
          <li>Like, retweet, quote, follow</li>
          <li>Original posts &amp; thread support</li>
          <li>Web search &amp; deep memory</li>
        </ul>
        <div className="mt-3 text-white/20 italic">
          (For now, these are available on custom plans only)
        </div>
        <div className="mt-2 text-white/40 font-medium">
          Want more? We're building it.
        </div>
      </div>
    </section>
  );
}
