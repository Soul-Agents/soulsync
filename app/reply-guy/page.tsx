"use client";
import { useRouter } from "next/navigation";
import { usePrivy, useLoginWithOAuth } from "@privy-io/react-auth";
import { motion } from "framer-motion";

export default function ReplyGuy() {
  const router = useRouter();
  const { user } = usePrivy();
  const { initOAuth } = useLoginWithOAuth({ onComplete: () => {} });

  const handleLogin = async () => {
    await initOAuth({ provider: "twitter" });
  };

  return (
    <main className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-black via-electric-purple/5 to-black pt-24 pb-4 overflow-hidden relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 relative">

        {/* HERO */}
        <section className="text-center max-w-2xl mx-auto mb-16">
          <motion.h1
            className="text-3xl sm:text-5xl font-bold mb-4 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Autonomous X Agent. Human tone. Real signal.
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Your AI wingman for X (Twitter). Always on. Always in your voice.
          </motion.p>
          <motion.div
            className="flex flex-col items-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <button
              className="px-8 py-4 bg-gradient-to-r from-electric-purple to-neon-pink rounded-xl text-white hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-300 hover:scale-105 font-semibold text-lg"
              onClick={() => {
                if (user) router.push("/app");
                else handleLogin();
              }}
            >
              Start now for $19 →
            </button>
            <span className="text-xs text-white/60 mt-1">
              Limited-time first month price. Cancel anytime.
            </span>
          </motion.div>
        </section>
      </div>
      <style jsx global>{`
        .gradient-text {
          background: linear-gradient(to right, #9333ea, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 0 30px rgba(147, 51, 234, 0.2);
        }
      `}</style>
    </main>
  );
}