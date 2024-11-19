"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Lock } from "lucide-react";

interface Slide {
  id: number;
  title: string;
  content: React.ReactNode;
}

// Example slides - we'll replace these with your content
const slides: Slide[] = [
  {
    id: 1,
    title: "Soul Agents",
    content: (
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-6 gradient-text">Soul Agents</h1>
        <p className="text-xl text-white/60">AI Companions for Web3 Communities</p>
      </div>
    ),
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
            className="p-2 rounded-full bg-black/40 text-white/60 hover:text-white disabled:opacity-50 transition-opacity"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 sm:right-8 z-10">
          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-2 rounded-full bg-black/40 text-white/60 hover:text-white disabled:opacity-50 transition-opacity"
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
