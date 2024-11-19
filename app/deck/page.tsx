"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Lock, ChevronDown } from "lucide-react";
import confetti from 'canvas-confetti';

// Define components first
const GrowthChart = () => {
  return (
    <motion.div 
      className="w-full h-32 bg-black/20 rounded-lg p-4"
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

const TradingDashboard = ({ showMetrics }: { showMetrics: boolean }) => {
  return (
    <motion.div 
      className="w-full h-32 bg-black/20 rounded-lg p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-3 gap-2 h-full">
        {/* Candlestick Chart */}
        <div className="col-span-2">
          <svg className="w-full h-full" viewBox="0 0 200 100">
            {/* Animated candlesticks */}
            {[...Array(8)].map((_, i) => (
              <motion.g key={i} 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
              >
                <line 
                  x1={25 * i + 10} 
                  y1={30 + Math.random() * 40} 
                  x2={25 * i + 10} 
                  y2={60 + Math.random() * 20}
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="1"
                />
                <rect 
                  x={25 * i + 5} 
                  y={40 + Math.random() * 30}
                  width="10"
                  height="15"
                  fill={i % 2 ? "#22c55e" : "#ef4444"}
                />
              </motion.g>
            ))}
          </svg>
        </div>
        
        {/* Metrics */}
        {showMetrics && (
          <div className="space-y-2">
            {["+2.5%", "1.24K", "89%"].map((value, i) => (
              <motion.div
                key={i}
                className="text-sm bg-black/40 backdrop-blur-sm rounded-lg p-2 text-center border border-white/5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <span className="gradient-text font-medium">{value}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Then define interfaces and slides
interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Soul Agents",
    content: (
      <div className="text-center space-y-8">
        <h1 className="text-6xl font-bold mb-6 gradient-text">Soul Agents</h1>
        <p className="text-xl text-white/60 mb-8">
          AI-Powered Community Management & Trading
        </p>
        
        {/* Crypto Bunny Image with Link */}
        <div className="flex justify-center mb-8">
          <a 
            href="https://x.com/cryptobunny__" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-90 transition-opacity"
          >
            <img 
              src="/placeholder-avatar2.png" 
              alt="Crypto Bunny"
              className="w-64 h-64 rounded-full"
            />
          </a>
        </div>

        <p className="text-2xl gradient-text font-semibold mb-8">
          eToro for A.I. Agent Trading
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://x.com/soul_agents"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white flex items-center gap-2 transition-colors"
          >
            <span>X:</span>
            <span className="gradient-text">@soul_agents</span>
          </a>
          <span className="text-white/40">•</span>
          <a
            href="https://t.me/soul_agents"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white flex items-center gap-2 transition-colors"
          >
            <span>Telegram:</span>
            <span className="gradient-text">@soul_agents</span>
          </a>
        </div>

        {/* Add role badges before social links */}
        <div className="flex justify-center gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="px-4 py-2 bg-black/40 backdrop-blur-sm rounded-lg border border-electric-purple/20"
          >
            <span className="gradient-text font-medium">Community AI</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="px-4 py-2 bg-black/40 backdrop-blur-sm rounded-lg border border-neon-pink/20"
          >
            <span className="gradient-text font-medium">Trading AI</span>
          </motion.div>
        </div>

        {/* Add scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Two Problems, One Solution",
    content: (
      <div className="space-y-8 h-full flex flex-col">
        <h2 className="text-5xl font-bold text-center gradient-text mb-12">
          Two Problems, One Solution
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Outreach & Growth */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 hover:border-neon-pink/30 transition-all duration-300"
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-neon-pink">
              Outreach & Growth Issues
            </h3>
            
            <div className="mb-8">
              <GrowthChart />
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold mb-4 gradient-text">Problems</h4>
                <motion.ul className="space-y-3">
                  {[
                    "$20k monthly on KOLs",
                    "Manual outreach",
                    "Poor organic growth",
                    "Inconsistent messaging"
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-white/90 text-lg pl-4 border-l-2 border-neon-pink/30"
                    >
                      {text}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-4 gradient-text">Users</h4>
                <motion.ul className="space-y-3">
                  {[
                    "Web3 Projects",
                    "Marketing Teams",
                    "Community Managers",
                    "Brand Developers"
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="text-white/90 text-lg pl-4 border-l-2 border-neon-pink/30"
                    >
                      {text}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Trading */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-8 hover:border-electric-purple/30 transition-all duration-300"
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-electric-purple">
              Asymmetrical Information in Trading
            </h3>
            
            <div className="mb-8">
              <TradingDashboard showMetrics={false} />
            </div>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-semibold mb-4 gradient-text">Problems</h4>
                <motion.ul className="space-y-3">
                  {[
                    "Missed trading signals",
                    "Complex market analysis",
                    "Emotional decisions",
                    "No strategy validation"
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="text-white/90 text-lg pl-4 border-l-2 border-electric-purple/30"
                    >
                      {text}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <div>
                <h4 className="text-2xl font-semibold mb-4 gradient-text">Users</h4>
                <motion.ul className="space-y-3">
                  {[
                    "Retail Traders",
                    "Strategy Creators",
                    "Investment DAOs"
                  ].map((text, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="text-white/90 text-lg pl-4 border-l-2 border-electric-purple/30"
                    >
                      {text}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  },
  // Add more slides here
];

export default function PitchDeck() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Check if token exists
    const token = localStorage.getItem("deck-token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    // Keyboard navigation
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isAuthenticated) return;
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isAuthenticated]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

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
        origin: { y: 0.6 }
      });
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(curr => curr + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(curr => curr - 1);
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-electric-purple/5 to-black flex items-center justify-center">
        <div className="max-w-md w-full mx-4">
          <form onSubmit={handleLogin} className="space-y-6 glass-card p-8">
            <div className="flex items-center justify-center mb-8">
              <Lock className="w-12 h-12 text-electric-purple animate-pulse" />
            </div>
            <div className="text-center space-y-4 mb-8">
              <h2 className="text-3xl font-bold gradient-text">
                Soul Agents Pitch Deck
              </h2>
              <p className="text-white/70">
                To access the deck, please contact Adam:
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href="https://t.me/adag1oeth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Telegram:</span>
                  <span className="gradient-text">@adag1oeth</span>
                </a>
                <a
                  href="https://x.com/adag1oeth"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white flex items-center justify-center gap-2 transition-colors"
                >
                  <span>X:</span>
                  <span className="gradient-text">@adag1oeth</span>
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
                {isLoading ? "Authenticating..." : "View Pitch Deck"}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  // Pitch Deck View
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-electric-purple/5 to-black">
      <div className="container mx-auto px-4 py-12 relative min-h-screen">
        {/* Navigation Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 z-10">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className={`p-2 rounded-full bg-black/40 text-white/60 hover:text-white disabled:opacity-50 transition-opacity ${
              currentSlide === 0 ? 'opacity-0 pointer-events-none' : ''
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 z-10">
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className={`p-2 rounded-full bg-black/40 text-white/60 hover:text-white disabled:opacity-50 transition-opacity ${
              currentSlide === slides.length - 1 ? 'opacity-0 pointer-events-none' : ''
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 px-4">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-12 sm:w-16 rounded-full transition-colors ${
                index === currentSlide ? "bg-electric-purple" : "bg-white/20"
              }`}
            />
          ))}
        </div>

        {/* Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto h-[calc(100vh-6rem)] flex items-center justify-center"
          >
            <div className="w-full">
              {slides[currentSlide]?.content}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
