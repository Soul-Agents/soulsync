"use client";
import { useEffect } from "react";
import confetti from "canvas-confetti";
import { useRouter } from "next/navigation";
import { usePrivy, useLoginWithOAuth } from "@privy-io/react-auth";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
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

  useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;

    const randomInRange = (min: number, max: number) => {
      return Math.random() * (max - min) + min;
    };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 2,
        startVelocity: 30,
        spread: 360,
        origin: {
          x: randomInRange(0.1, 0.9),
          y: Math.random() - 0.2,
        },
        colors: ["#9333EA", "#EC4899"],
        disableForReducedMotion: true,
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative pt-24 sm:pt-16"
      >
        {/* Microtagline */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-purple/10 to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />

        <div className="container mx-auto px-4 py-16 relative">
          <div className="max-w-4xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
            {/* Left: Main content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in">
                Autonomous X Agent. Human tone. Real signal. 20+ replies/day.
              </h1>

              <p className="text-lg text-white/80 max-w-xl mx-auto lg:mx-0 mb-4 animate-fade-in-delay">
                Let your brand grow while you sleep.<br />
                Built for founders, creators, and crypto teams.
              </p>

              <div className="flex flex-col items-center lg:items-start justify-center mb-8 animate-fade-in-delay">
                <button
                  aria-label="Start your trial for $19"
                  onClick={() => {
                    if (user) {
                      router.push("/app");
                    } else {
                      handleLogin();
                    }
                  }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-gradient-to-r from-neon-pink to-electric-purple text-lg font-bold text-white shadow-lg hover:opacity-90 transition-all duration-300 mb-6 w-full max-w-xs"
                >
                  Start now for $19 →
                </button>
                <p className="text-xs text-white/50 text-center lg:text-left">
                  Limited-time offer. $19/month.<br />
                  No X API key? We guide you{" "}
                  <Link href="/how-it-works" className="underline hover:text-white transition-colors">
                    step-by-step
                  </Link>
                  .
                </p>
              </div>

              <div className="flex flex-col items-center lg:items-start mt-2">
                <span className="text-sm text-white/60 mb-1">
                  Trusted by early teams including Lift AI Data
                </span>
              </div>
            </div>
            {/* Right: Testimonial + Why Automate */}
            <div className="flex-1 w-full max-w-md">
              <div className="glass-card p-6 mb-4 animate-fade-in">
                <div className="flex items-center gap-4 mb-3">
                  <Image
                    src="/PROTOKOLS_ICON_WHITE.svg"
                    alt="ProtoKOLs"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-white">Tom</div>
                    <div className="text-xs text-white/60">ProtoKOLs founder</div>
                  </div>
                </div>
                <div className="italic text-white/80 text-left">
                  “Soul Agents hits a deep need for founders: scaling voice and presence without burning time. The direction is exactly right.”
                </div>
              </div>
              <div className="glass-card p-6 mt-4 text-white/90 text-base text-left flex flex-col gap-2 shadow-lg">
                <div className="font-semibold text-lg text-electric-purple mb-2">
                  Why automate?
                </div>
                <div>Manual posting is inefficient.</div>
                <div>Growth on X is compounding, and speed matters.</div>
                <div className="font-bold text-white mt-2">
                  Soul Agents scale your voice without burning you out.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why it matters section */}
      <section className="w-full bg-white/5 border-t border-b border-white/10 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-electric-purple mb-4 tracking-tight">
              Why it matters
            </h3>
            <div className="text-electric-purple/80 font-semibold mb-2">
              Agents operate in stealth, sounding like you.
            </div>
            <div className="text-white/90 text-lg mb-2">
              Posting is easy. Scaling human presence isn't.
            </div>
            <div className="text-white/80 mb-2">
              Soul Agents reply in your voice, daily — without the time sink, burnout, or cringe.
            </div>
            <div className="text-white/60 italic">
              Stealth growth for founders who don't want to be online 24/7.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
