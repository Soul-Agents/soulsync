"use client";
import { SlideLayout } from "@/components/layouts/SlideLayout";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Lock,
  Maximize2,
  Minimize2,
} from "lucide-react";
import confetti from "canvas-confetti";
import { useResponsiveScale } from "./hooks/useResponsiveScale";

// Define interface for Tweet props
interface TweetProps {
  author: string;
  handle: string;
  content: string;
  timestamp: string;
}

export default function DeckPage(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const scale = useResponsiveScale();

  const nextSlide = useCallback((): void => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
    }
  }, [currentSlide]);

  const prevSlide = useCallback((): void => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => Math.max(prev - 1, 0));
    }
  }, [currentSlide]);

  useEffect(() => {
    // Add class to prevent scrolling
    document.documentElement.classList.add("deck-view");

    return () => {
      // Remove class when component unmounts
      document.documentElement.classList.remove("deck-view");
    };
  }, []);

  useEffect(() => {
    // Check if token exists
    const token = localStorage.getItem("deck-token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent): void => {
      if (!isAuthenticated) return;

      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        nextSlide();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentSlide, isAuthenticated, nextSlide, prevSlide]);

  useEffect(() => {
    if (typeof scale === "number" && !isNaN(scale)) {
      document.documentElement.style.setProperty(
        "--current-scale",
        scale.toString(),
      );
    }
  }, [scale]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/auth/deck", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Authentication failed");
      }

      localStorage.setItem("deck-token", data.token);
      setIsAuthenticated(true);

      // Add confetti effect on successful login
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error("Fullscreen error:", err);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    if (e.touches && e.touches[0]) {
      setTouchStart(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
    if (e.touches && e.touches[0]) {
      setTouchEnd(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = (): void => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    setTouchEnd(null);
    setTouchStart(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Mobile Notice */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-black/90 p-2 z-50 text-center">
        <p className="text-white/80 text-xs">
          ⚠️ Best viewed on desktop. Scroll to view full content.
        </p>
      </div>

      {/* Authentication Section */}
      {!isAuthenticated && (
        <div className="min-h-screen bg-gradient-to-b from-black via-electric-purple/5 to-black flex items-center justify-center p-4">
          <div className="w-full max-w-sm">
            <form onSubmit={handleLogin} className="space-y-4 glass-card p-6">
              <div className="flex items-center justify-center mb-4">
                <Lock className="w-8 h-8 text-electric-purple animate-pulse" />
              </div>
              <div className="text-center space-y-2 mb-4">
                <h2 className="text-2xl font-bold gradient-text">
                  Soul Agents
                </h2>
                <p className="text-white/70 text-sm">
                  To access, please contact Adam:
                </p>
                <div className="flex flex-col gap-1 text-sm">
                  <a
                    href="https://t.me/soul_agents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>Telegram:</span>
                    <span className="gradient-text">@soul_agents</span>
                  </a>
                  <a
                    href="https://x.com/soul_agents"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>X:</span>
                    <span className="gradient-text">@soul_agents</span>
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-lg text-white focus:border-electric-purple focus:ring-1 focus:ring-electric-purple outline-none"
                />
                {error && (
                  <p className="text-red-500 text-sm text-center">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full button-gradient px-6 py-3 disabled:opacity-50"
                >
                  {isLoading ? "Authenticating..." : "Authenticate"}
                </button>

                {/* New Home button */}
                <a
                  href="/"
                  className="block w-full text-center text-white/60 hover:text-white py-2 transition-colors"
                >
                  ← Back to Home
                </a>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Main Deck Content */}
      {isAuthenticated && (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-electric-purple/5 to-black">
          {/* Fullscreen Toggle Button */}
          <button
            onClick={toggleFullscreen}
            className="fixed top-4 right-4 z-50 p-2 rounded-full bg-black/80 text-white/80 hover:text-white transition-colors backdrop-blur-sm"
            aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5" />
            ) : (
              <Maximize2 className="w-5 h-5" />
            )}
          </button>

          {/* Navigation Controls */}
          <div className="fixed top-1/2 -translate-y-1/2 left-2 md:left-8 z-40">
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              aria-label="Previous slide"
              className={`p-2 rounded-full bg-black/80 text-white/80 hover:text-white disabled:opacity-50 transition-opacity backdrop-blur-sm ${
                currentSlide === 0 ? "opacity-0 pointer-events-none" : ""
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="fixed top-1/2 -translate-y-1/2 right-2 md:right-8 z-40">
            <button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              aria-label="Next slide"
              className={`p-2 rounded-full bg-black/80 text-white/80 hover:text-white disabled:opacity-50 transition-opacity backdrop-blur-sm ${
                currentSlide === slides.length - 1
                  ? "opacity-0 pointer-events-none"
                  : ""
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="fixed bottom-4 left-0 right-0 flex justify-center gap-0.5 px-2 md:px-2 md:bottom-6 md:gap-1 z-40 pointer-events-none">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`h-1 w-4 md:w-12 rounded-full transition-colors ${
                  index === currentSlide ? "bg-electric-purple" : "bg-white/20"
                }`}
              />
            ))}
          </div>

          {/* Scrollable Content Wrapper - Mobile-specific changes */}
          <div
            className="flex-1 overflow-hidden touch-none select-none"
            style={{
              transform: `scale(${scale})`,
              transformOrigin: "top center",
              minHeight: "100vh",
              // Add better mobile handling
              maxHeight: isAuthenticated ? "100vh" : "auto",
              overflowY: isAuthenticated ? "hidden" : "auto",
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="min-h-full w-full flex flex-col pt-16 md:pt-0 pb-20 md:pb-0 px-4 md:p-4"
              >
                <div
                  className="w-full max-w-7xl mx-auto"
                  style={{
                    transform: "scale(var(--deck-scale))",
                    transformOrigin: "top center",
                    ["--deck-scale" as string]: "var(--current-scale, 1)",
                  }}
                >
                  {slides[currentSlide]?.content ?? (
                    <div className="text-center text-white/60">
                      <p>No content available</p>
                      <p className="text-sm">Slide {currentSlide + 1}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
}

// Tweet component with proper typing
const Tweet: React.FC<TweetProps> = ({
  author,
  handle,
  content,
  timestamp,
}) => {
  // Updated avatar logic
  const getAvatarSrc = () => {
    switch (handle.toLowerCase()) {
      case "cryptobunny__":
        return "/cryptobunny.png";
      case "trader123":
        return "/crypto-trader.png";
      case "x1000gains":
        return "/moon-boy.png";
      default:
        return "/placeholder-avatar2.png";
    }
  };

  return (
    <motion.div
      className="glass-card p-4 max-w-xl mx-auto mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start gap-3">
        <img
          src={getAvatarSrc()}
          alt={`${author}'s avatar`}
          className="w-12 h-12 rounded-full"
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">{author}</span>
            <span className="text-white/60">@{handle}</span>
            <span className="text-white/40">· {timestamp}</span>
          </div>
          <p className="text-white/90 mt-1">{content}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Define interface for Slide
interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
}

// 1. First define all helper components

interface ChartProps {
  className?: string;
}

const GrowthChart: React.FC<ChartProps> = ({ className = "" }) => {
  return (
    <motion.div
      className={`w-full h-32 bg-black/20 rounded-lg p-4 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <svg className="w-full h-full" viewBox="0 0 300 100">
        {/* Grid lines */}
        {[...Array(5)].map((_, i) => (
          <motion.line
            key={i}
            x1="0"
            y1={20 * i}
            x2="300"
            y2={20 * i}
            stroke="rgba(255,255,255,0.1)"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: i * 0.1 }}
          />
        ))}

        {/* Animated growth line */}
        <motion.path
          d="M0 100 L60 80 L120 85 L180 60 L240 30 L300 10"
          fill="none"
          stroke="url(#gradientPink)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Gradient definition */}
        <defs>
          <linearGradient id="gradientPink" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,105,180,0.3)" />
            <stop offset="50%" stopColor="rgba(255,105,180,0.7)" />
            <stop offset="100%" stopColor="rgba(255,20,147,0.9)" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

const TradingDashboard: React.FC<ChartProps> = ({ className = "" }) => {
  // Calculate points for the connecting line
  const linePoints = [...Array(8)].map((_, i) => ({
    x: 37.5 * i + 20,
    y: 50 + Math.sin(i * 1.5) * 15,
  }));

  // Create SVG path from points
  const linePath = `M ${linePoints.map((p) => `${p.x} ${p.y}`).join(" L ")}`;

  return (
    <motion.div
      className={`w-full h-32 bg-black/20 rounded-lg p-4 overflow-hidden ${className}`}
    >
      <div className="h-full flex items-center justify-center">
        <svg
          className="w-full h-full"
          viewBox="0 0 300 100"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* Grid lines */}
          {[...Array(4)].map((_, i) => (
            <motion.line
              key={`grid-${i}`}
              x1="0"
              y1={25 * i + 25}
              x2="300"
              y2={25 * i + 25}
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
            />
          ))}

          {/* Connecting line */}
          <motion.path
            d={linePath}
            fill="none"
            stroke="url(#gradientLine)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.5 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          {/* Gradient for the line */}
          <defs>
            <linearGradient id="gradientLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
          </defs>

          {/* Candlesticks */}
          {[...Array(8)].map((_, i) => (
            <motion.g
              key={`candle-${i}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Wick */}
              <line
                x1={37.5 * i + 20}
                y1={30 + Math.sin(i * 1.5) * 15}
                x2={37.5 * i + 20}
                y2={70 + Math.sin(i * 1.5) * 15}
                stroke={i % 2 ? "#22c55e" : "#ef4444"}
                strokeWidth="2"
              />
              {/* Body */}
              <rect
                x={37.5 * i + 15}
                y={40 + Math.sin(i * 1.5) * 15}
                width="10"
                height="20"
                fill={i % 2 ? "#22c55e" : "#ef4444"}
              />
            </motion.g>
          ))}
        </svg>
      </div>
    </motion.div>
  );
};

// 2. Then define interfaces and slides
const slides: Slide[] = [
  {
    id: 1,
    title: "Soul Agents",
    content: (
      <SlideLayout title="Soul Agents" slideNumber={1}>
        <div className="text-center space-y-4 sm:space-y-8">
          {/* Main Tagline */}
          <motion.p
            className="text-2xl text-white/80 font-semibold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            AI-Powered{" "}
            <span className="gradient-text">Social Intelligence</span> &{" "}
            <span className="text-neon-pink">Copy Trading</span>
          </motion.p>

          {/* Dual Image Layout */}
          <div className="flex justify-center items-center gap-4 mb-8 relative">
            {/* Community AI Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-electric-purple to-transparent rounded-full blur opacity-50"></div>
              <a
                href="https://x.com/cryptobunny__"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative hover:scale-105 transition-transform duration-200"
              >
                <img
                  src="/placeholder-avatar2.png"
                  alt="Community"
                  className="relative w-48 h-48 rounded-full border-2 border-electric-purple"
                />
              </a>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 rounded-full border border-electric-purple/30"
              >
                <span className="text-sm text-electric-purple">Community</span>
              </motion.div>
            </motion.div>

            {/* Connecting Element */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="w-16 h-16 rounded-full bg-black/40 border border-white/20 flex items-center justify-center"
            >
              <span className="text-2xl">⚡️</span>
            </motion.div>

            {/* Trading AI Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-l from-neon-pink to-transparent rounded-full blur opacity-50"></div>
              <a
                href="https://x.com/soul_agents"
                target="_blank"
                rel="noopener noreferrer"
                className="block relative hover:scale-105 transition-transform duration-200"
              >
                <img
                  src="/trading-ai-avatar.png"
                  alt="Trading"
                  className="relative w-48 h-48 rounded-full border-2 border-neon-pink"
                />
              </a>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 rounded-full border border-neon-pink/30"
              >
                <span className="text-sm text-neon-pink">Trading</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Value Proposition */}
          <motion.p
            className="text-2xl gradient-text font-semibold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            eToro for A.I. Agent Trading
          </motion.p>

          {/* Feature Badges */}
          <div className="flex justify-center gap-4 mb-8">
            {[
              {
                text: "Intelligent 'Intern' Accounts",
                color: "neon-pink",
                delay: 0.8,
                noBorder: true,
              },
              { text: "Copy Trading", color: "electric-purple", delay: 0.9 },
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: badge.delay }}
                className={`px-4 py-2 bg-black/40 backdrop-blur-sm rounded-lg ${!badge.noBorder ? `border border-${badge.color}/20` : ""}`}
              >
                <span className={`text-${badge.color} text-sm font-medium`}>
                  {badge.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <a
              href="https://x.com/adag1oeth"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white flex items-center gap-2 transition-colors"
            >
              <span>Enquiries:</span>
              <span className="gradient-text">@adag1oeth</span>
            </a>
            <a
              href="https://x.com/soul_agents"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white flex items-center gap-2 transition-colors"
            >
              <span>X:</span>
              <span className="gradient-text">@soul_agents</span>
            </a>
            <a
              href="https://t.me/soul_agents"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white flex items-center gap-2 transition-colors"
            >
              <span>Telegram:</span>
              <span className="gradient-text">t.me/soul_agents</span>
            </a>
          </motion.div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: 2,
    title: "Two Problems, One Solution",
    content: (
      <SlideLayout title="Two Problems, One Solution" slideNumber={2}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Left Column - Outreach & Growth */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-4 md:p-8 hover:border-neon-pink/30 transition-all duration-300"
          >
            <div className="flex flex-col items-center">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 text-center text-neon-pink">
                Web3 Marketing Challenges
              </h3>
              <p className="text-xs text-white/70 mb-4 italic">
                Hinkal and Twyne early commitments to using our A.I. Agents
              </p>
            </div>

            <div className="mb-4 md:mb-8 scale-90">
              <GrowthChart />
            </div>

            <div className="space-y-4 md:space-y-8">
              <div>
                <h4 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 gradient-text">
                  Problems
                </h4>
                <motion.ul className="space-y-2">
                  {[
                    "High KOL costs ($10-20k monthly)",
                    "Time-consuming manual outreach",
                    "Limited organic growth",
                    "Inconsistent community engagement",
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-white/90 text-sm md:text-base pl-2 md:pl-4 border-l-2 border-neon-pink/30"
                    >
                      {text}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div>
                <h4 className="text-xl md:text-2xl font-semibold mb-2 md:mb-4 gradient-text">
                  Users
                </h4>
                <motion.ul className="space-y-2">
                  {[
                    "Web3 Projects",
                    "Marketing Teams",
                    "Community Managers",
                    "Brand Developers",
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="text-white/90 text-sm md:text-base pl-2 md:pl-4 border-l-2 border-neon-pink/30"
                    >
                      {text}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>

          {/* Right column remains similar but with matching adjustments */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-4 md:p-8 hover:border-electric-purple/30 transition-all duration-300"
          >
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-8 text-center text-electric-purple">
              Asymmetrical Information in Trading
            </h3>

            <div className="mb-4 md:mb-8 scale-90">
              <TradingDashboard />
            </div>

            <div className="space-y-4 md:space-y-8">
              <div>
                <h4 className="text-2xl font-semibold mb-4 gradient-text">
                  Problems
                </h4>
                <motion.ul className="space-y-3">
                  {[
                    "Delayed market signals",
                    "Time-intensive analysis",
                    "Emotional trading decisions",
                    "Lack of strategy validation",
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-white/90 text-base sm:text-lg pl-3 sm:pl-4 border-l-2 border-electric-purple/30"
                    >
                      {text}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-4 gradient-text">
                  Users
                </h4>
                <motion.ul className="space-y-3">
                  {[
                    "Retail Traders",
                    "Strategy Creators",
                    "Investment DAOs",
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="text-white/90 text-base sm:text-lg pl-3 sm:pl-4 border-l-2 border-electric-purple/30"
                    >
                      {text}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: 3,
    title: "AI-Powered Community Engagement",
    content: (
      <SlideLayout title="AI-Powered Community Engagement" slideNumber={3}>
        <div className="space-y-8">
          <div className="text-2xl text-electric-purple font-semibold mb-6 text-center">
            Intelligent Context-Aware Responses
          </div>

          <div className="space-y-6">
            {/* Original Tweet */}
            <Tweet
              author="Crypto Trader"
              handle="trader123"
              content="Anyone else seeing these weird patterns on $PEPE? Volume's acting strange 🤔"
              timestamp="2m"
            />

            {/* Random Reply */}
            <Tweet
              author="Moon Boy"
              handle="x1000gains"
              content="To the moon! 🚀🚀🚀"
              timestamp="1m"
            />

            {/* AI's Intelligent Response */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Tweet
                author="Crypto Bunny"
                handle="cryptobunny__"
                content="Looking at the data, there's an interesting correlation with DEX liquidity movements from the past hour. Similar pattern occurred during the last major price action. Worth monitoring the whale wallets I'm tracking - they've been accumulating quietly. 🧐 Check the analysis in my next thread."
                timestamp="Just now"
              />
            </motion.div>
          </div>

          {/* Explanation */}
          <motion.div
            className="mt-12 text-center text-white/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p>
              Our AI agents provide intelligent, data-driven insights by
              analyzing:
              <br />
              <span className="text-electric-purple">On-chain data</span> •
              <span className="text-neon-pink"> Market sentiment</span> •
              <span className="text-electric-purple"> Historical patterns</span>
            </p>
          </motion.div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: 4,
    title: "Strategy Marketplace",
    content: (
      <SlideLayout title="Strategy Marketplace" slideNumber={4}>
        <div className="space-y-4 max-w-[1200px] mx-auto">
          <div className="text-xl text-electric-purple font-bold mb-3 text-center tracking-tight">
            Social Leaderboard for the best AI-Powered Strategies
          </div>

          <div className="glass-card p-4 backdrop-blur-lg border border-white/10 overflow-x-auto">
            {/* Column Headers */}
            <div className="grid grid-cols-[2fr_1fr_2fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-2 text-white/80 text-xs mb-3 px-3 font-semibold tracking-wide border-b border-white/10 pb-2">
              <span>Name</span>
              <span>Risk</span>
              <span>Strategy</span>
              <span className="text-right pr-2">TVL</span>
              <span className="text-right pr-2">Rev Share</span>
              <span className="text-right pr-2">1H</span>
              <span className="text-right pr-2">1D</span>
              <span className="text-right pr-2">7D</span>
              <span className="text-right pr-2">30D</span>
            </div>

            <div className="space-y-1.5">
              {[
                {
                  handle: "@desci_hunter",
                  strategy: "Buy DeSci tokens <$3M mcap",
                  tvl: "$1.2M",
                  revShare: "$8.5K/mo",
                  returns: {
                    "1H": "-0.8%",
                    "1D": "+5%",
                    "7D": "+20%",
                    "30D": "+312%",
                  },
                  risk: "High",
                },
                {
                  handle: "@momentum_ai",
                  strategy: "Track whale accumulation",
                  tvl: "$2.8M",
                  revShare: "$12.2K/mo",
                  returns: {
                    "1H": "+0.8%",
                    "1D": "-2%",
                    "7D": "+15%",
                    "30D": "+156%",
                  },
                  risk: "Medium",
                },
                {
                  handle: "@mev_master",
                  strategy: "MEV opportunities & flashloans",
                  tvl: "$890K",
                  revShare: "$6.8K/mo",
                  returns: {
                    "1H": "+0.9%",
                    "1D": "+4%",
                    "7D": "-3%",
                    "30D": "+145%",
                  },
                  risk: "High",
                },
                {
                  handle: "@nft_signals",
                  strategy: "NFT floor price momentum",
                  tvl: "$650K",
                  revShare: "$5.2K/mo",
                  returns: {
                    "1H": "-1.2%",
                    "1D": "-3.5%",
                    "7D": "+16%",
                    "30D": "+128%",
                  },
                  risk: "Medium",
                },
                {
                  handle: "@defi_yield",
                  strategy: "Yield farming opportunities",
                  tvl: "$1.5M",
                  revShare: "$9.1K/mo",
                  returns: {
                    "1H": "+0.5%",
                    "1D": "+2.8%",
                    "7D": "+14%",
                    "30D": "+120%",
                  },
                  risk: "Low",
                },
              ].map((strategy, index) => (
                <div
                  key={index}
                  className="grid grid-cols-[2fr_1fr_2fr_1fr_1fr_1fr_1fr_1fr_1fr] gap-2 items-center p-2.5 bg-black/40 rounded-md hover:bg-black/50 transition-all duration-200 border border-white/5"
                >
                  <span className="font-bold text-electric-purple text-xs tracking-wide pl-2">
                    {strategy.handle}
                  </span>
                  <span
                    className={`text-center px-2 py-0.5 rounded-full text-[10px] font-medium ${
                      strategy.risk === "High"
                        ? "bg-neon-pink/10 text-neon-pink border border-neon-pink/20"
                        : strategy.risk === "Medium"
                          ? "bg-electric-purple/10 text-electric-purple border border-electric-purple/20"
                          : "bg-green-500/10 text-green-500 border border-green-500/20"
                    }`}
                  >
                    {strategy.risk}
                  </span>
                  <span className="text-[11px] text-white/80 pl-2">
                    {strategy.strategy}
                  </span>
                  <span className="text-right pr-2 font-medium text-white text-xs">
                    {strategy.tvl}
                  </span>
                  <span className="text-right pr-2 font-medium text-aqua-blue text-xs glow-blue-sm">
                    {strategy.revShare}
                  </span>
                  <span
                    className={`text-right pr-2 font-medium text-xs ${
                      strategy.returns["1H"].startsWith("+")
                        ? "text-neon-green glow-green-sm"
                        : "text-neon-pink glow-pink-sm"
                    }`}
                  >
                    {strategy.returns["1H"]}
                  </span>
                  <span
                    className={`text-right pr-2 font-medium text-xs ${
                      strategy.returns["1D"].startsWith("+")
                        ? "text-neon-green glow-green-sm"
                        : "text-neon-pink glow-pink-sm"
                    }`}
                  >
                    {strategy.returns["1D"]}
                  </span>
                  <span
                    className={`text-right pr-2 font-medium text-xs ${
                      strategy.returns["7D"].startsWith("+")
                        ? "text-neon-green glow-green-sm"
                        : "text-neon-pink glow-pink-sm"
                    }`}
                  >
                    {strategy.returns["7D"]}
                  </span>
                  <motion.span
                    className="text-right pr-2 font-medium text-electric-purple text-xs glow-purple-md"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  >
                    {strategy.returns["30D"]}
                  </motion.span>
                </div>
              ))}
              <div className="flex justify-center items-center p-2 bg-black/20 rounded-md text-white/30 text-lg font-bold border border-white/5">
                ...
              </div>
            </div>
          </div>

          <div className="glass-card p-4 backdrop-blur-lg border border-white/10">
            <div className="text-center space-y-3">
              <p className="text-sm text-white/80 font-medium">
                Create strategies using natural language:
              </p>
              <div className="relative">
                <p className="text-neon-pink text-sm sm:text-base font-medium px-6 py-3 bg-black/40 rounded-lg border border-neon-pink/20 shadow-neon-sm">
                  "Buy tokens under $5M market cap, launched in the last 2
                  weeks, with positive sentiment and at least high trust 1 KOL
                  shilling it"
                </p>
                <div className="absolute inset-0 bg-neon-pink/5 blur-xl rounded-lg"></div>
              </div>
              <p className="text-xs text-white/70">
                AI validates and backtests strategies before deployment.
              </p>
            </div>
          </div>

          {/* System Workflow Explanation */}
          <div className="glass-card p-6 backdrop-blur-lg border border-white/10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center space-y-3 p-4 bg-black/30 rounded-lg border border-white/5">
                <div className="w-8 h-8 rounded-full bg-electric-purple/10 flex items-center justify-center">
                  <span className="text-electric-purple font-bold">1</span>
                </div>
                <p className="text-sm text-white/80">
                  Create your custom trading strategy using natural language
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-4 bg-black/30 rounded-lg border border-white/5">
                <div className="w-8 h-8 rounded-full bg-neon-pink/10 flex items-center justify-center">
                  <span className="text-neon-pink font-bold">2</span>
                </div>
                <p className="text-sm text-white/80">
                  AI agent executes strategy using various integrations &
                  protocols
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-4 bg-black/30 rounded-lg border border-white/5">
                <div className="w-8 h-8 rounded-full bg-electric-purple/10 flex items-center justify-center">
                  <span className="text-electric-purple font-bold">3</span>
                </div>
                <p className="text-sm text-white/80">
                  Strategy performance is tracked on social leaderboard
                </p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-4 bg-black/30 rounded-lg border border-white/5">
                <div className="w-8 h-8 rounded-full bg-neon-pink/10 flex items-center justify-center">
                  <span className="text-neon-pink font-bold">4</span>
                </div>
                <p className="text-sm text-white/80">
                  Copy traders follow top strategies while creators earn 50% of
                  fees
                </p>
              </div>
            </div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: 5,
    title: "Multi-Agent Intelligence Network",
    content: (
      <SlideLayout title="Multi-Agent Intelligence Network" slideNumber={5}>
        <div className="space-y-8">
          <div className="text-xl text-white/80 font-bold text-center mb-8">
            Comprehensive Market Intelligence
          </div>

          {/* Data Sources Section */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              {
                icon: "/defined-logo-optimized.png",
                title: "Trading Analytics",
                desc: "Codex real-time data",
                isImage: true,
              },
              {
                icon: "/x-logo.png",
                title: "Social Intelligence",
                desc: "X/Twitter sentiment & news",
                isImage: true,
              },
              {
                icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                title: "Web Intelligence",
                desc: "Real-time web search",
              },
              {
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                title: "Memory Systems",
                desc: "Vector & short-term memory",
              },
              {
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                title: "KOL Signals",
                desc: "Historical shill analysis",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card p-4 flex flex-col items-center text-center h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item.isImage ? (
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-12 h-12 mb-3 opacity-80"
                  />
                ) : (
                  <svg
                    className="w-12 h-12 mb-3 text-electric-purple"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeWidth={2} d={item.icon} />
                  </svg>
                )}
                <h4 className="text-base font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-white/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Multi-Agent System */}
          <motion.div
            className="glass-card py-8 px-8 bg-black/40 w-full border border-electric-purple/20 backdrop-blur-sm hover:bg-black/50 hover:border-electric-purple/40 hover:scale-[1.02] hover:shadow-xl transition-all duration-500 ease-out shadow-lg shadow-electric-purple/20 group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
            whileHover={{ y: -5 }}
          >
            <div className="flex flex-col items-center justify-center gap-6 relative">
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                }}
                className="w-12 h-12 relative z-10"
              >
                <div className="absolute inset-0 bg-electric-purple/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300" />
                <svg
                  className="text-electric-purple w-full h-full group-hover:text-[#ff00ff] transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </motion.div>
              <h4 className="text-2xl font-bold gradient-text bg-clip-text text-transparent bg-gradient-to-r from-electric-purple via-[#ff00ff] to-electric-purple group-hover:from-[#ff00ff] group-hover:via-electric-purple group-hover:to-[#ff00ff] transition-all duration-300">
                Multi-Agent Processing System
              </h4>
            </div>
          </motion.div>

          {/* Applications Section */}
          <div className="grid md:grid-cols-2 gap-4">
            {/* Marketing Service */}
            <motion.div
              className="glass-card p-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-semibold gradient-text">
                  Autonomous Marketing
                </h3>
                <span className="px-2 py-1 text-xs bg-black/40 rounded-full text-electric-purple border border-electric-purple/30">
                  $499-999/mo
                </span>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• AI-powered brand growth and community engagement</li>
                <li>• Intelligent post creation and interaction</li>
                <li>
                  • Multi-platform support (X, Telegram, Discord, Farcaster)
                </li>
                <li>• Community management via AI chatbots</li>
                <li className="text-electric-purple">
                  • Social intelligence from human interactions
                </li>
                <li className="text-electric-purple">
                  • Adaptive learning from community feedback
                </li>
              </ul>
            </motion.div>

            {/* Trading Platform */}
            <motion.div
              className="glass-card p-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-3">
                <h3 className="text-lg font-semibold gradient-text">
                  AI Strategy Trading
                </h3>
                <span className="px-2 py-1 text-xs bg-black/40 rounded-full text-neon-pink border border-neon-pink/30">
                  1% fee split
                </span>
              </div>
              <ul className="space-y-2 text-sm text-white/80">
                <li>• Prompt-based strategy deployment</li>
                <li>• Long-term investment focus</li>
                <li>• Data-driven decision making</li>
                <li>• Powered by Brian AI integration</li>
                <li className="text-neon-pink">
                  • Copy-trading with performance leaderboard
                </li>
                <li className="text-neon-pink">
                  • Strategy marketplace & revenue sharing
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <p className="text-sm text-white/60">
              Join the community of strategy creators and traders on our
              performance-based marketplace
            </p>
          </motion.div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: 6,
    title: "Two Strategic Markets",
    content: (
      <SlideLayout title="Two Strategic Markets" slideNumber={6}>
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Community Management Market */}
            <motion.div
              className="glass-card p-8 hover:bg-black/50 transition-all duration-300 hover:shadow-lg hover:shadow-electric-purple/20 border border-electric-purple/20"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 gradient-text bg-gradient-to-r from-electric-purple to-blue-500">
                Web3 Community Growth
              </h3>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="hover:translate-x-2 transition-transform duration-300"
                >
                  <h4 className="text-lg font-semibold mb-2 text-electric-purple/80">
                    Market Size:
                  </h4>
                  <p className="text-3xl font-bold text-electric-purple">
                    $10B+ Annual Revenue
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="hover:translate-x-2 transition-transform duration-300"
                >
                  <h4 className="text-lg font-semibold mb-2 text-electric-purple/80">
                    Target Market:
                  </h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-center gap-2">
                      <span className="text-electric-purple">•</span> 500K+ Web3
                      Communities
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-electric-purple">•</span> 50K+
                      Active Projects
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="hover:translate-x-2 transition-transform duration-300"
                >
                  <h4 className="text-lg font-semibold mb-2 text-electric-purple/80">
                    Current Solutions:
                  </h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-center gap-2">
                      <span className="text-electric-purple">•</span> Manual
                      Management
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-electric-purple">•</span>{" "}
                      Traditional Agencies
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-electric-purple">•</span> Basic
                      Automation
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>

            {/* Trading Market */}
            <motion.div
              className="glass-card p-8 hover:bg-black/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon-pink/20 border border-neon-pink/20"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 gradient-text bg-gradient-to-r from-neon-pink to-purple-500">
                Crypto Trading
              </h3>

              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="hover:translate-x-2 transition-transform duration-300"
                >
                  <h4 className="text-lg font-semibold mb-2 text-neon-pink/80">
                    Market Size:
                  </h4>
                  <p className="text-3xl font-bold text-neon-pink">
                    $20B+ Annual Volume
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="hover:translate-x-2 transition-transform duration-300"
                >
                  <h4 className="text-lg font-semibold mb-2 text-neon-pink/80">
                    Target Market:
                  </h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-center gap-2">
                      <span className="text-neon-pink">•</span> 10M+ Active
                      Traders
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-neon-pink">•</span> 100K+ Strategy
                      Creators
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="hover:translate-x-2 transition-transform duration-300"
                >
                  <h4 className="text-lg font-semibold mb-2 text-neon-pink/80">
                    Current Solutions:
                  </h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex items-center gap-2">
                      <span className="text-neon-pink">•</span> Basic Trading
                      Bots & First A.I. Agents
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-neon-pink">•</span> Copy Trading
                      Platforms
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-neon-pink">•</span> Signal Groups
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Market Size Analysis */}
          <motion.div
            className="mt-12 grid grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="glass-card p-4 text-center hover:bg-black/50 transition-all duration-300 border border-white/10">
              <h4 className="text-sm font-semibold text-white/60 mb-2">SOM</h4>
              <p className="text-2xl font-bold gradient-text">$500M+</p>
              <p className="text-sm text-white/60 mt-1">
                Serviceable Obtainable Market
              </p>
            </div>
            <div className="glass-card p-4 text-center hover:bg-black/50 transition-all duration-300 border border-white/10">
              <h4 className="text-sm font-semibold text-white/60 mb-2">SAM</h4>
              <p className="text-2xl font-bold gradient-text">$5B+</p>
              <p className="text-sm text-white/60 mt-1">
                Serviceable Available Market
              </p>
            </div>
            <div className="glass-card p-4 text-center hover:bg-black/50 transition-all duration-300 border border-white/10">
              <h4 className="text-sm font-semibold text-white/60 mb-2">TAM</h4>
              <p className="text-2xl font-bold gradient-text">$30B+</p>
              <p className="text-sm text-white/60 mt-1">
                Total Available Market
              </p>
            </div>
          </motion.div>

          {/* Bottom Text */}
          <motion.p
            className="text-center text-lg font-medium text-white/80 hover:text-white transition-colors duration-300 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, type: "spring" }}
          >
            Capturing value through AI innovation in both markets
          </motion.p>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: 7,
    title: "Why Soul Agents Wins",
    content: (
      <SlideLayout title="Why Soul Agents Wins" slideNumber={7}>
        <div className="space-y-8">
          {/* Three Key Advantages */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Trading Intelligence */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold gradient-text">
                  Trading Intelligence
                </h3>
                <div className="text-2xl text-electric-purple/80 font-semibold">
                  01
                </div>
              </div>
              <ul className="space-y-4 text-white/80">
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  • Multi-Chain Data Analysis
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  • Predictive Analytics
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  • Risk Management
                </motion.li>
              </ul>
            </motion.div>

            {/* Community Management */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold gradient-text">
                  Community Management
                </h3>
                <div className="text-2xl text-electric-purple/80 font-semibold">
                  02
                </div>
              </div>
              <ul className="space-y-4 text-white/80">
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  • Automated Engagement
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  • Content Generation
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  • KOL Analytics with AI Backtesting
                </motion.li>
              </ul>
            </motion.div>

            {/* Revenue Model */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold gradient-text">
                  Revenue Model
                </h3>
                <div className="text-2xl text-electric-purple/80 font-semibold">
                  03
                </div>
              </div>
              <ul className="space-y-4 text-white/80">
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  • Trading Fees with Fee Share
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  • Agent Subscriptions
                </motion.li>
                <motion.li
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  • Strategy Marketplace
                </motion.li>
              </ul>
            </motion.div>
          </div>

          {/* AI-First Platform Section */}
          <motion.div
            className="glass-card p-8 bg-black/40 border border-electric-purple/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold gradient-text">
                AI-First Platform & Deep Analytics
              </h3>
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-electric-purple to-neon-pink blur-sm opacity-50" />{" "}
                  {/* Glow effect */}
                  <div className="h-0.5 w-32 bg-gradient-to-r from-electric-purple to-neon-pink relative" />{" "}
                  {/* Single line, slightly longer */}
                </div>
                <div className="text-2xl text-electric-purple/80 font-semibold">
                  04
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                "Multi-Chain Intelligence Network",
                "RAG-Powered Agent Workflow",
                "Advanced KOL Performance Tracking",
                "Unified Memory Across Platforms",
                "Context-Based Social Analysis",
                "Pre-Production Security Audit",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="glass-card p-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <p className="text-white/80">• {item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Text */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-lg text-white/80">
              Building the most sophisticated AI trading ecosystem:
              <br />
              <span className="text-electric-purple">
                Think Intelligent AI Agents
              </span>{" "}
              with
              <span className="text-neon-pink">
                {" "}
                Leaderboard-Driven Trading Strategies
              </span>{" "}
              and Copy-Trading
            </p>
          </motion.div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: 8,
    title: "Market Positioning",
    content: (
      <SlideLayout title="Market Positioning" slideNumber={8}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Competition Analysis */}
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">
              Market Landscape
            </h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center gap-2">
                <span className="text-electric-purple">•</span> Trading Agents:
                Spectral, Noks
              </li>
              <li className="flex items-center gap-2">
                <span className="text-electric-purple">•</span> Community Tools:
                AI Agent Layer, Basic Automation
              </li>
              <li className="flex items-center gap-2">
                <span className="text-electric-purple">•</span> AI
                Infrastructure: ai16z Eliza, Virtuals
              </li>
              <li className="flex items-center gap-2">
                <span className="text-electric-purple">•</span> Early Adoption:
                DeFi & Privacy Protocols, Leading Solana Meme
              </li>
            </ul>
          </motion.div>

          {/* Our Advantages */}
          <motion.div
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">
              Soul Agents Advantage
            </h3>
            <ul className="space-y-4 text-white/80">
              <li className="flex items-center gap-2">
                <span className="text-neon-pink">•</span> Unified Trading &
                Social Platform
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-pink">•</span> Advanced AI with
                Cross-Platform Memory
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-pink">•</span> Performance-Based
                Strategy Marketplace
              </li>
              <li className="flex items-center gap-2">
                <span className="text-neon-pink">•</span> Customizable Agent
                Templates
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section: Key Differentiators */}
        <motion.div
          className="glass-card p-8 bg-black/40 border border-electric-purple/20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-xl font-bold gradient-text mb-6">
            Key Differentiators
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "End-to-End Integration",
              "Multi-Chain Intelligence",
              "Community-Driven Growth",
              "Verified Performance Data",
              "Automated Risk Management",
              "Rapid Agent Deployment",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="glass-card p-4"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <p className="text-white/80">• {item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-xl">
            <span className="text-white/80">Building the</span>{" "}
            <span className="gradient-text font-bold">
              First True Web3 Social Trading Platform
            </span>{" "}
            <span className="text-white/80">powered by</span>{" "}
            <span className="text-neon-pink font-bold">AI Agents</span>
          </p>
        </motion.div>
      </SlideLayout>
    ),
  },
  {
    id: 9,
    title: "Dual Revenue Streams",
    content: (
      <SlideLayout title="Dual Revenue Streams" slideNumber={9}>
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Marketing Service */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">
                Marketing Service
              </h3>
              <div className="space-y-4">
                <motion.div className="glass-card p-3 bg-black/20">
                  <h4 className="text-base font-semibold mb-2 text-electric-purple/90">
                    Core Services:
                  </h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex justify-between items-center">
                      <span>• Basic Plan</span>
                      <span className="text-electric-purple font-bold">
                        $499/mo
                      </span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>• Pro Plan</span>
                      <span className="text-electric-purple font-bold">
                        $999/mo
                      </span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>• Early Discounts</span>
                      <span className="text-electric-purple font-bold">
                        Up to 80%
                      </span>
                    </li>
                  </ul>
                </motion.div>

                <div className="grid grid-cols-2 gap-3">
                  <motion.div className="glass-card p-3 bg-black/20">
                    <h4 className="text-sm font-semibold text-white/80">
                      2025 Target:
                    </h4>
                    <p className="text-lg text-electric-purple font-bold">
                      50 clients
                    </p>
                    <p className="text-xs text-white/60">($400k annual)</p>
                  </motion.div>

                  <motion.div className="glass-card p-3 bg-black/20">
                    <h4 className="text-sm font-semibold text-white/80">
                      2026 Target:
                    </h4>
                    <p className="text-lg text-electric-purple font-bold">
                      150 clients
                    </p>
                    <p className="text-xs text-white/60">($1.2M annual)</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Trading Platform */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-bold mb-4 gradient-text">
                Trading Platform
              </h3>
              <div className="space-y-4">
                <motion.div className="glass-card p-3 bg-black/20">
                  <h4 className="text-base font-semibold mb-2 text-neon-pink/90">
                    Revenue Model:
                  </h4>
                  <ul className="space-y-2 text-white/90">
                    <li className="flex justify-between items-center">
                      <span>• Trading Fee</span>
                      <span className="text-neon-pink font-bold">1%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>• Creator Share</span>
                      <span className="text-neon-pink font-bold">50%</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span>• $SOUL Governance</span>
                      <span className="text-neon-pink font-bold">Q2 2025</span>
                    </li>
                  </ul>
                </motion.div>

                <div className="grid grid-cols-2 gap-3">
                  <motion.div className="glass-card p-3 bg-black/20">
                    <h4 className="text-sm font-semibold text-white/80">
                      2025 Target:
                    </h4>
                    <p className="text-lg text-neon-pink font-bold">
                      $10M monthly volume
                    </p>
                    <p className="text-xs text-white/60">($960k annual)</p>
                  </motion.div>

                  <motion.div className="glass-card p-3 bg-black/20">
                    <h4 className="text-sm font-semibold text-white/80">
                      2026 Target:
                    </h4>
                    <p className="text-lg text-neon-pink font-bold">
                      $25M monthly volume
                    </p>
                    <p className="text-xs text-white/60">($2.4M annual)</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Chart and Projection */}
          <div className="space-y-4">
            <motion.div
              className="glass-card p-6 bg-black/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {/* Revenue Growth Chart */}
              <div className="relative h-24 w-full flex items-end justify-between gap-1 mb-4">
                {/* Bars with Quarterly Revenue */}
                {[
                  { month: "Q4 24", height: "h-4", value: "30K", emoji: "🙂" },
                  { month: "Q1 25", height: "h-8", value: "120K", emoji: "😊" },
                  {
                    month: "Q2 25",
                    height: "h-12",
                    value: "280K",
                    emoji: "😄",
                  },
                  {
                    month: "Q3 25",
                    height: "h-16",
                    value: "420K",
                    emoji: "🤩",
                  },
                  {
                    month: "Q4 25",
                    height: "h-20",
                    value: "540K",
                    emoji: "🚀",
                  },
                  {
                    month: "Q1 26",
                    height: "h-24",
                    value: "700K",
                    emoji: "💫",
                  },
                  {
                    month: "Q2 26",
                    height: "h-28",
                    value: "800K",
                    emoji: "✨",
                  },
                  {
                    month: "Q3 26",
                    height: "h-30",
                    value: "950K",
                    emoji: "🌟",
                  },
                  {
                    month: "Q4 26",
                    height: "h-32",
                    value: "1.1M",
                    emoji: "💎",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center flex-1"
                  >
                    <motion.div
                      className="text-xl mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      {item.emoji}
                    </motion.div>
                    <motion.div
                      className={`w-full ${item.height} rounded-t bg-gradient-to-t from-electric-purple to-neon-pink opacity-60`}
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                    />
                    <p className="text-xs text-white/60 mt-1">{item.month}</p>
                    <p className="text-xs text-white/90 font-bold">
                      ${item.value}
                    </p>
                  </div>
                ))}
              </div>

              {/* Projection Text */}
              <p className="text-lg text-white/90 text-center">
                Projected{" "}
                <span className="text-electric-purple font-bold">$1.36M</span>{" "}
                annual revenue in 2025, scaling to{" "}
                <span className="text-neon-pink font-bold">$3.6M</span> annual
                revenue in 2026
              </p>
            </motion.div>
          </div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: 10,
    title: "Meet the Team",
    content: (
      <SlideLayout title="Meet the Team" slideNumber={10}>
        <div className="space-y-8">
          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* CEO */}
            <motion.div
              className="glass-card p-6 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center mb-4">
                <img
                  src="/adam.png"
                  alt="Adam Zasada"
                  className="w-24 h-24 rounded-full mb-4 border-2 border-electric-purple"
                />
                <h3 className="text-xl font-bold gradient-text">Adam Zasada</h3>
                <p className="text-white/60">CEO & Co-Founder</p>
              </div>
              <div className="bg-black/20 rounded-lg p-4 flex-grow">
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    • 0xKYC Founder (Backed by Outlier Ventures, BuffiCorn &
                    Celestia's CTO)
                  </li>
                  <li>• Ecosystem & Product Lead at Hinkal</li>
                  <li>• Growth at Elympics</li>
                  <li>• LSE Grad & Experienced PM</li>
                </ul>
              </div>
            </motion.div>

            {/* CAIO */}
            <motion.div
              className="glass-card p-6 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="flex flex-col items-center mb-4">
                <img
                  src="/ola.png"
                  alt="Aleksandra Zajączkowska"
                  className="w-24 h-24 rounded-full mb-4 border-2 border-neon-pink"
                />
                <h3 className="text-xl font-bold gradient-text">
                  Aleksandra Zajączkowska
                </h3>
                <p className="text-white/60">CAIO & Co-Founder</p>
              </div>
              <div className="bg-black/20 rounded-lg p-4 flex-grow">
                <ul className="space-y-2 text-sm text-white/80">
                  <li>• Expert in LLMs & Agent Workflows</li>
                  <li>• Specializing in RAG Systems & AI</li>
                  <li>• 6 Years as A.I. Engineer</li>
                  <li>
                    • CBS Graduate with a Master Thesis in Social Business
                    Intelligence
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* CBDO */}
            <motion.div
              className="glass-card p-6 flex flex-col h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="flex flex-col items-center mb-4">
                <img
                  src="/sebastian.png"
                  alt="Stealth"
                  className="w-24 h-24 rounded-full mb-4 border-2 border-electric-purple/50"
                />
                <h3 className="text-xl font-bold gradient-text">
                  Sebastian Ołdak
                </h3>
                <p className="text-white/60">Web3 Dev & Co-Founder</p>
              </div>
              <div className="bg-black/20 rounded-lg p-4 flex-grow">
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    • Fullstack and Web3 Developer with devops, backend and
                    frontend experience
                  </li>
                  <li>• 0xKYC Core Developer</li>
                  <li>
                    • Ex-Software Engineer for{" "}
                    <a
                      href="https://uniqly.io"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-electric-purple hover:underline"
                    >
                      Uniqly.io
                    </a>
                  </li>
                  <li>• 3 Times Polish Champion in Judo</li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Core Team & Advisors */}
          <motion.div
            className="glass-card p-6 text-center bg-black/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-electric-purple font-semibold mb-2">
                  Core Team
                </h4>
                <div className="text-white/80">
                  <p className="text-sm">
                    <span className="font-semibold">Stealth</span> - Ex-CBDO at
                    top Web3 companies
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-neon-pink font-semibold mb-2">Advisors</h4>
                <div className="text-white/80">
                  <p className="text-sm">
                    <span className="font-semibold">Tom</span> - Co-Founder of
                    ProtoKOLs &nbsp;&nbsp;&nbsp;{" "}
                    <span className="font-semibold">ExHuman</span> - thePolacy
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Text */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-lg text-white/80">
              Combined experience in{" "}
              <span className="text-electric-purple">AI</span>,
              <span className="text-neon-pink"> Trading</span>, and
              <span className="text-electric-purple"> Community Building</span>
            </p>
          </motion.div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: 11,
    title: "Growth Strategy & Roadmap",
    content: (
      <SlideLayout title="Growth Strategy & Roadmap" slideNumber={11}>
        <div className="space-y-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Strategic Focus */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-6 gradient-text">
                  Strategic Focus (budget allocation)
                </h3>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h4 className="text-lg font-semibold text-electric-purple mb-3">
                      Tech Development (60%)
                    </h4>
                    <ul className="space-y-2 text-white/80">
                      <li>• Natural language strategy creation</li>
                      <li>• Multi-chain data analysis & backtesting</li>
                      <li>• Social intelligence with sentiment analysis</li>
                      <li>• AI-powered risk management system</li>
                      <li>
                        • Cross-platform integrations (Discord, X, TG and
                        Farcaster)
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="text-lg font-semibold text-neon-pink mb-3">
                      Growth & Operations (40%)
                    </h4>
                    <ul className="space-y-2 text-white/80">
                      <li>• Core team expansion (tech)</li>
                      <li>• Full-time designer for brand & narrative</li>
                      <li>• Legal & compliance framework</li>
                      <li className="text-electric-purple">
                        • Marketing & community development
                      </li>
                      <li>
                        •{" "}
                        <span className="text-neon-pink gradient-text">
                          $SOUL token launch
                        </span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* Key Milestones */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold mb-6 gradient-text">
                  Key Milestones
                </h3>

                <div className="space-y-6">
                  {[
                    {
                      quarter: "Q4 2024",
                      items: ["Crypto Bunny live", "5 enterprise clients"],
                    },
                    {
                      quarter: "H1 2025",
                      items: [
                        "Marketplace & copy trading",
                        "25 clients, $100K revenue",
                        "$25M monthly volume",
                      ],
                    },
                    {
                      quarter: "H2 2025",
                      items: [
                        "50 clients, $225K revenue",
                        "$100M monthly volume",
                      ],
                    },
                  ].map((milestone, index) => (
                    <motion.div
                      key={milestone.quarter}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <h4 className="text-lg font-semibold text-electric-purple mb-3">
                        {milestone.quarter}
                      </h4>
                      <ul className="space-y-2 text-white/80">
                        {milestone.items.map((item, i) => (
                          <li key={i}>• {item}</li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Vision */}
          <motion.div
            className="glass-card p-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-lg text-white/80">
              Building the most sophisticated{" "}
              <span className="text-electric-purple">AI trading ecosystem</span>{" "}
              with
              <br />
              <span className="text-neon-pink">
                Intelligent AI Agents
              </span> and{" "}
              <span className="text-electric-purple">
                Leaderboard-Driven Trading Strategies
              </span>
            </p>
          </motion.div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: 12,
    title: "$SOUL Tokenomics",
    content: (
      <SlideLayout title="$SOUL Tokenomics" slideNumber={12}>
        <div className="space-y-8">
          {/* Launch Date */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-neon-pink">
              Launch Q1 2025
            </h2>
          </div>

          {/* Three Column Layout */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Distribution */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, type: "spring" }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold gradient-text">
                  Distribution
                </h3>
                <span role="img" aria-label="chart" className="text-2xl">
                  📊
                </span>
              </div>
              <ul className="space-y-4 text-white/80">
                {[
                  {
                    text: "80% Fair Launch Pool",
                    color: "text-electric-purple",
                    detail: "for Community",
                  },
                  {
                    text: "10% Team Allocation",
                    color: "text-neon-pink",
                    detail: "6-Month Vesting",
                  },
                  {
                    text: "10% Initial Investors",
                    color: "text-neon-pink",
                    detail: "6-Month Vesting",
                  },
                  {
                    text: "Linear Vesting After Cliff",
                    color: "text-white/60",
                    small: true,
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className={`${item.color} ${item.small ? "text-sm" : "text-base"}`}
                  >
                    • <span className="font-bold">{item.text}</span>{" "}
                    <span className="text-white/60">{item.detail}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Supply Details */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold gradient-text">
                  Supply Details
                </h3>
                <span role="img" aria-label="supply" className="text-2xl">
                  🔄
                </span>
              </div>
              <ul className="space-y-4 text-white/80">
                {[
                  "Total Supply: 5,000,000,000 $SOUL",
                  "Initial Tax: 5% (First 6 Months)",
                  "Initial Unlock: 50% Instant",
                  "Vesting: 50% Linear Over 6 Months",
                  "Min. Hold: 100,000 $SOUL for Rewards",
                ].map((item, index) => (
                  <li key={index}>
                    • <span className="font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Revenue Share */}
            <motion.div
              className="glass-card p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold gradient-text">
                  Revenue Share
                </h3>
                <span role="img" aria-label="money" className="text-2xl">
                  💸
                </span>
              </div>
              <ul className="space-y-4 text-white/80">
                {[
                  "20% for Staking Rewards (6-Month Lock)",
                  "Tax Reduces to 2% After 6 Months",
                  "Governance Voting Rights",
                  "Platform Fee Discounts for Holders",
                  "DAO to Decide on Strategy Creator Fee vs. Token Buy-Back & Burn",
                ].map((item, index) => (
                  <li key={index}>
                    • <span className="font-bold">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Text */}
          <motion.div
            className="glass-card p-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.7,
              type: "spring",
              stiffness: 100,
            }}
          >
            <p className="text-lg text-white/80">
              Modern Tokenomics Focused on Sustainable Growth:
              <br />
              <span className="text-electric-purple font-bold">
                Fair Launch
              </span>
              ,
              <span className="text-neon-pink font-bold"> Buy-Back & Burn</span>
              , and
              <span className="text-electric-purple font-bold">
                {" "}
                Delayed Staking Rewards
              </span>
            </p>
          </motion.div>
        </div>
      </SlideLayout>
    ),
  },
  {
    id: 13,
    title: "Contact Us",
    content: (
      <SlideLayout title="Contact Us" slideNumber={13}>
        <div className="space-y-12">
          {/* Header with Call to Action */}
          <div className="text-center">
            <p className="text-lg text-white/80">
              We'd love to hear from you! Connect with us through our channels.
            </p>
          </div>

          {/* Crypto Bunny and Video Section Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Crypto Bunny Section */}
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.a
                href="https://x.com/cryptobunny__"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block relative group"
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-electric-purple to-neon-pink rounded-full blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <img
                  src="/cryptobunny.png"
                  alt="Crypto Bunny"
                  className="relative w-32 h-32 rounded-full border-2 border-electric-purple"
                />
              </motion.a>
              <p className="text-white/80 italic">
                Check out our first autonomous agent -{" "}
                <a
                  href="https://x.com/cryptobunny__"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-electric-purple hover:underline"
                >
                  @cryptobunny__
                </a>
                <br />
                <span className="text-sm text-white/60">
                  (it's still learning...)
                </span>
              </p>
            </motion.div>

            {/* Video Section */}
            <motion.div
              className="text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <a
                href="https://www.youtube.com/watch?v=jhwTQF3O6BY"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-electric-purple/20 to-neon-pink/20 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
                <div className="relative glass-card p-8 rounded-2xl border-2 border-electric-purple/20 hover:border-electric-purple/40 transition-colors duration-300">
                  <span className="text-4xl animate-pulse mb-4 block">🎥</span>
                  <h4 className="text-lg font-bold gradient-text mb-2">
                    Watch Our Story
                  </h4>
                  <p className="text-white/80 text-sm">
                    Learn how we're building the future of AI-powered trading
                  </p>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Contact and Links Section - Updated Link Colors */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <span role="img" aria-label="contact" className="text-2xl">
                  📱
                </span>
                <h2 className="text-2xl font-bold gradient-text">
                  Contact Information
                </h2>
              </div>
              <ul className="space-y-4">
                {[
                  {
                    platform: "Telegram",
                    handle: "@soul_agents",
                    url: "https://t.me/soul_agents",
                  },
                  {
                    platform: "X",
                    handle: "@soul_agents",
                    url: "https://x.com/soul_agents",
                  },
                  {
                    platform: "Enquiries",
                    handle: "@adag1oeth",
                    url: "https://x.com/adag1oeth",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="text-white/80 flex items-center gap-2"
                  >
                    • {item.platform}:{" "}
                    <a
                      href={item.url}
                      className="gradient-text hover:opacity-80 transition-opacity"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.handle}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Project Links */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-center gap-3 mb-8">
                <span role="img" aria-label="links" className="text-2xl">
                  🔗
                </span>
                <h2 className="text-2xl font-bold gradient-text">
                  Project Links
                </h2>
              </div>
              <ul className="space-y-4">
                {[
                  {
                    platform: "Website",
                    url: "https://soulagents.io",
                    handle: "soulagents.io",
                  },
                  {
                    platform: "Whitepaper",
                    url: "https://soulagents.io/whitepaper",
                    handle: "Read our Whitepaper",
                  },
                  {
                    platform: "Blog",
                    url: "https://soulagents.io/blog",
                    handle: "Visit our Blog",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="text-white/80 flex items-center gap-2"
                  >
                    • {item.platform}:{" "}
                    <a
                      href={item.url}
                      className="gradient-text hover:opacity-80 transition-opacity"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.handle}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Community Invitation */}
          <motion.div
            className="text-center text-white/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <p>
              Join our community to stay updated on the latest developments and
              engage with fellow enthusiasts!
            </p>
          </motion.div>
        </div>
      </SlideLayout>
    ),
  },
];
