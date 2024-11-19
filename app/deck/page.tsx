"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Lock, ChevronDown, Maximize2, Minimize2 } from "lucide-react";
import confetti from 'canvas-confetti';
import { useResponsiveScale } from './hooks/useResponsiveScale';

// Define interface for Tweet props
interface TweetProps {
  author: string;
  handle: string;
  content: string;
  timestamp: string;
  isAI?: boolean;
}

// Tweet component with proper typing
const Tweet: React.FC<TweetProps> = ({ 
  author, 
  handle, 
  content, 
  timestamp, 
  isAI = false 
}) => {
  return (
    <motion.div 
      className="glass-card p-4 max-w-xl mx-auto mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-start gap-3">
        <img 
          src={isAI ? "/placeholder-avatar2.png" : "/user-avatar.png"} 
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
    y: 50 + Math.sin(i * 1.5) * 15
  }));

  // Create SVG path from points
  const linePath = `M ${linePoints.map(p => `${p.x} ${p.y}`).join(' L ')}`;

  return (
    <motion.div 
      className={`w-full h-32 bg-black/20 rounded-lg p-4 overflow-hidden ${className}`}
    >
      <div className="h-full flex items-center justify-center">
        <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="xMidYMid meet">
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
const slides: Array<Slide> = [
  {
    id: 1,
    title: "Soul Agents",
    content: (
      <div className="text-center space-y-4 sm:space-y-8 px-2 sm:px-0">
        <div className="absolute top-4 left-4 text-white/40 font-mono">01</div>
        <h1 className="text-4xl sm:text-6xl font-bold mb-4 sm:mb-6 gradient-text">Soul Agents</h1>
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
            <motion.img 
              src="/cryptobunny.png"
              alt="Crypto Bunny"
              className="w-64 h-64 rounded-full border-2 border-electric-purple"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
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

        {/* Show arrow only on mobile */}
        <div className="sm:hidden">
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 text-white/40" />
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Two Problems, One Solution",
    content: (
      <div className="space-y-6 max-w-6xl mx-auto px-4">
        <div className="absolute top-4 left-4 text-white/40 font-mono">02</div>
        <h2 className="text-3xl md:text-5xl font-bold text-center gradient-text">
          Two Problems, One Solution
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
                      className="text-white/90 text-base sm:text-lg pl-3 sm:pl-4 border-l-2 border-neon-pink/30"
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
                      className="text-white/90 text-base sm:text-lg pl-3 sm:pl-4 border-l-2 border-neon-pink/30"
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
              <TradingDashboard />
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
                      className="text-white/90 text-base sm:text-lg pl-3 sm:pl-4 border-l-2 border-electric-purple/30"
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
      </div>
    )
  },
  {
    id: 3,
    title: "Live Demo",
    content: (
      <div className="max-w-6xl mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="absolute top-4 left-4 text-white/40 font-mono">03</div>
        
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
          Intelligent Context-Aware Responses
        </h2>

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
            transition={{ delay: 2 }}
          >
            <Tweet 
              author="Crypto Bunny"
              handle="cryptobunny__"
              content="Looking at the data, there's an interesting correlation with DEX liquidity movements from the past hour. Similar pattern occurred during the last major price action. Worth monitoring the whale wallets I'm tracking - they've been accumulating quietly. 🧐 Check the analysis in my next thread."
              timestamp="Just now"
              isAI={true}
            />
          </motion.div>
        </div>

        {/* Explanation */}
        <motion.div 
          className="mt-12 text-center text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <p>
            Our AI agents provide intelligent, data-driven insights by analyzing:<br/>
            <span className="text-electric-purple">On-chain data</span> • 
            <span className="text-neon-pink"> Market sentiment</span> • 
            <span className="text-electric-purple"> Historical patterns</span>
          </p>
        </motion.div>
      </div>
    ),
  },
  {
    id: 4,
    title: "Strategy Marketplace",
    content: (
      <div className="max-w-6xl mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="absolute top-4 left-4 text-white/40 font-mono">04</div>
        
        <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
          AI-Powered Strategy Marketplace
        </h2>

        {/* Top Strategies Leaderboard */}
        <div className="glass-card p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-electric-purple">Top Performing Strategies</h3>
            <span className="text-sm text-white/60">Last 30 days</span>
          </div>

          <div className="space-y-4">
            {[
              {
                name: "DeSci Gems Hunter",
                description: "Buy DeSci tokens <$3M mcap, verified by KOLs",
                returns: "+312%",
                tvl: "$1.2M",
                trades: 14,
                winRate: "86%"
              },
              {
                name: "Momentum Rider",
                description: "Track whale accumulation + social sentiment",
                returns: "+156%",
                tvl: "$2.8M",
                trades: 23,
                winRate: "78%"
              }
            ].map((strategy, index) => (
              <motion.div 
                key={index}
                className="flex items-center gap-4 p-4 bg-black/20 rounded-lg"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-bold text-white">{strategy.name}</h4>
                    <span className="px-2 py-1 text-xs bg-electric-purple/20 rounded-full text-electric-purple">
                      {strategy.returns}
                    </span>
                  </div>
                  <p className="text-sm text-white/70">{strategy.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-white/60">TVL: <span className="text-white">{strategy.tvl}</span></div>
                  <div className="text-sm text-white/60">Win Rate: <span className="text-neon-pink">{strategy.winRate}</span></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI Strategy Creation */}
        <motion.div 
          className="text-center text-white/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <p className="mb-4">
            Create custom strategies using natural language:<br/>
            <span className="text-electric-purple">"Buy tokens under $5M mcap with increasing whale accumulation and positive sentiment from top 100 KOLs"</span>
          </p>
          <p className="text-sm">
            Our AI validates and backtests strategies before deployment
          </p>
        </motion.div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Multi-Agent Intelligence Network",
    content: (
      <div className="max-w-6xl mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="absolute top-4 left-4 text-white/40 font-mono">05</div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8">
          Multi-Agent Intelligence Network
        </h2>

        {/* Data Sources Section */}
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-semibold gradient-text mb-6 text-center">
            Comprehensive Market Intelligence
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {/* Each card has identical height and styling */}
            {[
              {
                icon: "/defined-logo-optimized.png",
                title: "Trading Analytics",
                desc: "Codex & Brian AI real-time data",
                isImage: true
              },
              {
                icon: "/x-logo.png",
                title: "Social Intelligence",
                desc: "X/Twitter sentiment & news",
                isImage: true
              },
              {
                icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
                title: "Web Intelligence",
                desc: "Real-time web search & analysis"
              },
              {
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
                title: "Memory Systems",
                desc: "Vector DB & short-term memory"
              },
              {
                icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                title: "KOL Signals",
                desc: "Historical shill analysis"
              }
            ].map((item, i) => (
              <div key={i} className="glass-card p-4 flex flex-col items-center text-center h-full">
                {item.isImage ? (
                  <img src={item.icon} alt={item.title} className="w-12 h-12 mb-3 opacity-80" />
                ) : (
                  <svg className="w-12 h-12 mb-3 text-electric-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeWidth={2} d={item.icon} />
                  </svg>
                )}
                <h4 className="text-base font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Multi-Agent System - More compact */}
          <div className="mt-6 glass-card p-4 bg-black/40">
            <div className="flex items-center justify-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-6 h-6"
              >
                <svg className="text-electric-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </motion.div>
              <h4 className="text-base font-semibold gradient-text">Multi-Agent Processing System</h4>
            </div>
          </div>
        </div>

        {/* Applications Section */}
        <div className="grid md:grid-cols-2 gap-4">
          {/* Marketing Service */}
          <div className="glass-card p-4">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-lg font-semibold gradient-text">Autonomous Marketing</h3>
              <span className="px-2 py-1 text-xs bg-black/40 rounded-full text-electric-purple border border-electric-purple/30">
                $499-999/mo
              </span>
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>• AI-powered brand growth and community engagement</li>
              <li>• Intelligent post creation and interaction</li>
              <li>• Multi-platform support (X, Telegram, Discord, Farcaster)</li>
              <li>• Community management via AI chatbots</li>
              <li className="text-electric-purple">• Social intelligence from human interactions</li>
              <li className="text-electric-purple">• Adaptive learning from community feedback</li>
            </ul>
          </div>

          {/* Trading Platform */}
          <div className="glass-card p-4">
            <div className="flex items-center gap-3 mb-3">
              <h3 className="text-lg font-semibold gradient-text">AI Strategy Trading</h3>
              <span className="px-2 py-1 text-xs bg-black/40 rounded-full text-neon-pink border border-neon-pink/30">
                1% fee split
              </span>
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>• Prompt-based strategy deployment</li>
              <li>• Long-term investment focus</li>
              <li>• Data-driven decision making</li>
              <li>• Powered by Brian AI integration</li>
              <li className="text-neon-pink">• Copy-trading with performance leaderboard</li>
              <li className="text-neon-pink"> Strategy marketplace & revenue sharing</li>
            </ul>
          </div>
        </div>

        {/* Optional: Add a small note about copy-trading */}
        <div className="text-center mt-4">
          <p className="text-sm text-white/60">
            Join the community of strategy creators and traders on our performance-based marketplace
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Two Massive Markets",
    content: (
      <div className="max-w-6xl mx-auto px-4 h-screen flex flex-col justify-center">
        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          Two Massive Markets
        </h2>

        {/* Market Comparison Table */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
          {/* Community Management Market */}
          <div className="glass-card p-6">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6 gradient-text">
              Community Management
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Total Market:</h4>
                <p className="text-2xl font-bold text-electric-purple">$10B+ Annual Spend</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Addressable Market:</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• 500K+ Web3 projects</li>
                  <li>• 50K+ active projects</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Current Solutions:</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• Manual management</li>
                  <li>• Traditional agencies</li>
                  <li>• Basic automation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Trading Market */}
          <div className="glass-card p-6">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6 gradient-text">
              Trading Market (Crypto)
            </h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Total Market:</h4>
                <p className="text-2xl font-bold text-neon-pink">$20B+ Annual Volume</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Addressable Market:</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• 10M+ retail traders</li>
                  <li>• 100K+ strategy creators</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Current Solutions:</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• Basic trading bots</li>
                  <li>• Copy trading platforms</li>
                  <li>• Signal groups</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-center text-base text-white/60">
          Capturing value through AI innovation in both markets
        </p>
      </div>
    ),
  },
  {
    id: 7,
    title: "Why Soul Agents Wins",
    content: (
      <div className="max-w-6xl mx-auto px-4 h-screen flex flex-col justify-center">
        {/* Slide Number */}
        <div className="absolute top-4 left-4 text-white/40 font-mono">07</div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          Why Soul Agents Wins
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Trading Intelligence */}
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">Trading Intelligence</h3>
            <ul className="space-y-4 text-white/80">
              <li>• Multi-chain data analysis</li>
              <li>• Predictive analytics</li>
              <li>• Risk management</li>
            </ul>
          </motion.div>

          {/* Community Management */}
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">Community Management</h3>
            <ul className="space-y-4 text-white/80">
              <li>• Automated engagement</li>
              <li>• Content generation</li>
              <li>• KOL analytics</li>
            </ul>
          </motion.div>

          {/* Revenue Model */}
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">Revenue Model</h3>
            <ul className="space-y-4 text-white/80">
              <li>• Trading fees</li>
              <li>• Agent subscriptions</li>
              <li>• Strategy marketplace</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-white/80">
            Building the most sophisticated AI trading ecosystem:<br />
            <span className="text-electric-purple">Think intelligent A.I. interns</span> and a 
            <span className="text-neon-pink"> leaderboard-based trading strategies</span> with copy-trading
          </p>
        </motion.div>
      </div>
    ),
  },
  {
    id: 8,
    title: "Market Positioning",
    content: (
      <div className="max-w-6xl mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="absolute top-4 left-4 text-white/40 font-mono">08</div>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
          Market Positioning
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Competition Analysis */}
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">Current Solutions</h3>
            <ul className="space-y-4 text-white/80">
              <li>• Spectral Labs - Trading agents without social features</li>
              <li>• Noks - Limited intelligence integration</li>
              <li>• Eliza (a16z) - Ecosystem expansion opportunity</li>
              <li>• Agent Launchers (Virtuals, vvaifu) - Different focus</li>
            </ul>
          </motion.div>

          {/* Our Advantages */}
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">Soul Agents Edge</h3>
            <ul className="space-y-4 text-white/80">
              <li>• Full-stack solution (trading + social)</li>
              <li>• Advanced AI integration (RAG + Memory)</li>
              <li>• Copy-trading marketplace</li>
              <li>• Ready-made, customizable agents</li>
            </ul>
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    id: 9,
    title: "Dual Revenue Streams",
    content: (
      <div className="max-w-6xl mx-auto px-4 h-screen flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          Dual Revenue Streams
        </h2>

        {/* Revenue Streams Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Marketing Service */}
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">Marketing Service</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Subscription Model:</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• Basic: $499/month</li>
                  <li>• Pro: $999/month</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">2025 Target:</h4>
                <p className="text-electric-purple">50 clients ($400k annual)</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">2026 Target:</h4>
                <p className="text-electric-purple">150 clients ($1.2M annual)</p>
              </div>
            </div>
          </motion.div>

          {/* Trading Platform */}
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">Trading Platform</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Transaction Model:</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• 1% fee per trade</li>
                  <li>• 50% to strategy creators</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">2025 Target:</h4>
                <p className="text-neon-pink">$10M monthly volume</p>
                <p className="text-sm text-white/60">($960k annual at 0.8% fee)</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">2026 Target:</h4>
                <p className="text-neon-pink">$25M monthly volume</p>
                <p className="text-sm text-white/60">($2.4M annual at 0.8% fee)</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Projection */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg text-white/80">
            Projected <span className="text-electric-purple font-semibold">$1.36M</span> revenue in 2025, 
            scaling to <span className="text-neon-pink font-semibold">$3.6M</span> in 2026
          </p>
        </motion.div>
      </div>
    ),
  },
  {
    id: 10,
    title: "Meet the Team",
    content: (
      <div className="max-w-6xl mx-auto px-4 h-screen flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          Meet the Team
        </h2>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* CEO */}
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex flex-col items-center mb-4">
              <img 
                src="/placeholder-avatar2.png" 
                alt="Team Member" 
                className="w-24 h-24 rounded-full mb-4 border-2 border-electric-purple"
              />
              <h3 className="text-xl font-bold gradient-text">Adam Zasada</h3>
              <p className="text-white/60">CEO & co-founder</p>
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>• 0xKYC founder (backed by Outlier Ventures, BuffiCorn & Celestia's CTO)</li>
              <li>• Ecosystem & Product Lead at Hinkal (Privacy)</li>
              <li>• Growth at Elympics</li>
              <li>• LSE grad (6y exp in prod mgmt)</li>
            </ul>
          </motion.div>

          {/* CAIO */}
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex flex-col items-center mb-4">
              <img 
                src="/placeholder-avatar2.png" 
                alt="Team Member" 
                className="w-24 h-24 rounded-full mb-4 border-2 border-neon-pink"
              />
              <h3 className="text-xl font-bold gradient-text">Aleksandra Zajączkowska</h3>
              <p className="text-white/60">CAIO & co-founder</p>
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>• 6 years of experience as an A.I. Engineer specializing in LLMs, Agent Workflows, RAG systems, and explainable AI</li>
              <li>• Master Thesis in "Social Business Intelligence" from CBS (Copenhagen Business School)</li>
            </ul>
          </motion.div>

          {/* CBDO */}
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex flex-col items-center mb-4">
              <img 
                src="/placeholder-avatar2.png" 
                alt="Team Member" 
                className="w-24 h-24 rounded-full mb-4 border-2 border-electric-purple/50"
              />
              <h3 className="text-xl font-bold gradient-text">Stealth</h3>
              <p className="text-white/60">CBDO & co-founder</p>
            </div>
            <ul className="space-y-2 text-sm text-white/80">
              <li>• CBDO (leading Web3 startup)</li>
              <li>• Co-founder of a successful exit crypto startup</li>
              <li>• Experienced across multiple leading Web3 companies</li>
              <li>• Avid attendee of conferences</li>
            </ul>
          </motion.div>
        </div>

        {/* Core Team & Advisors */}
        <motion.div 
          className="text-center text-sm text-white/70 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>
            Core: Sebastian Ołdak (Fullstack, Web3 Dev & co-founder)<br />
            Advisors: TomWeb3 (ProtoKOLs), ExHuman
          </p>
        </motion.div>

        {/* Bottom Text */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="text-lg text-white/80">
            Combined experience in AI, Trading, and Community Building
          </p>
        </motion.div>
      </div>
    ),
  },
  {
    id: 11,
    title: "Growth Strategy & Roadmap",
    content: (
      <div className="max-w-6xl mx-auto px-4 h-screen flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          Growth Strategy & Roadmap
        </h2>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Strategic Focus */}
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">
              Strategic Focus (budget allocation)
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-electric-purple mb-3">
                  Tech Development (60%)
                </h4>
                <p className="text-white/80">
                  Advanced agent network with multi-chain intelligence (EVM and Solana) 
                  and predictive trading capabilities
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-neon-pink mb-3">
                  Product Growth & Partnerships (40%)
                </h4>
                <ul className="space-y-2 text-white/80">
                  <li>• Integration with Brian AI for trading and Codex for market intel</li>
                  <li>• State of art X posting agents with Eliza integration</li>
                  <li className="text-electric-purple">• Pipeline: 2 top-tier projects and leading memecoin for AI agent setup</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Key Milestones */}
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">Key Milestones</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-electric-purple mb-3">Q4 2024</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• Full AI launch</li>
                  <li>• Basic trading features</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-electric-purple mb-3">Q1 2025</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• Strategy marketplace with multi-chain trading</li>
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-neon-pink mb-3">Q2 2025</h4>
                <ul className="space-y-2 text-white/80">
                  <li>• Advanced AI features & copy-trading</li>
                  <li>• Enterprise X agents deployment</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Vision */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg text-white/80">
            Building an intelligent network of AI agents powered by multi-source data,<br />
            combining X posting with risk-adjusted trading strategies
          </p>
        </motion.div>
      </div>
    ),
  },
  {
    id: 12,
    title: "Our Edge",
    content: (
      <div className="max-w-6xl mx-auto px-4 h-screen flex flex-col justify-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12">
          Our Edge
        </h2>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Deep X Analytics */}
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">Deep X Analytics</h3>
            <ul className="space-y-3 text-white/80">
              <li>• Advanced KOL verification system tracking past performance</li>
              <li>• Advanced NLP context based social analysis of entire X crypto sphere</li>
              <li>• Performance-based ranking</li>
            </ul>
          </motion.div>

          {/* AI-First Platform */}
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">AI-First Platform</h3>
            <ul className="space-y-3 text-white/80">
              <li>• Multi-chain intelligence network</li>
              <li>• Unified memory across X and Telegram</li>
              <li>• RAG-powered agent workflow with custom 'brain' fine-tuning</li>
              <li>• Pre-production security audit for trading module</li>
              <li>• Advanced AI security measures by expert team</li>
            </ul>
          </motion.div>

          {/* Revenue Ecosystem */}
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">Revenue Ecosystem</h3>
            <ul className="space-y-3 text-white/80">
              <li>• Custom AI agent deployments ($499-999/mo, early-discounts)</li>
              <li>• Trading fees from validated strategies</li>
              <li>• Strategy marketplace with leaderboard</li>
              <li className="text-electric-purple">• Token utility & governance details coming soon</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-white/80">
            Where X analytics meets competitive trading: Users create winning strategies,<br />
            AI agents trade them and post updates, brands deploy custom agents
          </p>
        </motion.div>
      </div>
    ),
  },
  {
    id: 13,
    title: "$SOUL Token Economics",
    content: (
      <div className="max-w-6xl mx-auto px-4 h-screen flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
            $SOUL Token Economics <span role="img" aria-label="money">💸</span>
          </h2>
        </motion.div>

        {/* Three Column Layout */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Distribution */}
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">Distribution</h3>
            <ul className="space-y-4 text-white/80">
              <li>• 80% Fair Launch Pool</li>
              <li>• 10% Team (6mo vest)</li>
              <li>• 10% Initial Investors (6mo vest)</li>
              <li className="text-sm text-white/60">• Subject to launchpad rules etc.</li>
            </ul>
          </motion.div>

          {/* Supply Details */}
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">Supply Details</h3>
            <ul className="space-y-4 text-white/80">
              <li>• Total Supply: 1,000,000,000 $SOUL</li>
              <li>• 5% tax first 6 months</li>
              <li>• 50% instant unlock,<br />50% linear 6mo</li>
            </ul>
          </motion.div>

          {/* Revenue Share */}
          <motion.div 
            className="glass-card p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-6 gradient-text">Revenue Share</h3>
            <ul className="space-y-4 text-white/80">
              <li>• Buy-back and burn from a share of platform fees - amount decided by DAO</li>
              <li>• 20% of fees to staking rewards (after 6 mo) - decided by DAO</li>
              <li>• Tax reduces to 1% after 6 months</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Text */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-lg text-white/80">
            Modern tokenomics focused on sustainable growth:<br />
            Fair launch, buy-back & burn, and delayed staking rewards
          </p>
        </motion.div>
      </div>
    ),
  },
  {
    id: 14,
    title: "Contact",
    content: (
      <div className="max-w-6xl mx-auto px-4 h-screen flex flex-col justify-center">
        <div className="absolute top-4 left-4 text-white/40 font-mono">14</div>
        
        {/* Crypto Bunny Avatar */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <a 
            href="https://x.com/cryptobunny__" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-90 transition-opacity"
          >
            <img 
              src="/placeholder-avatar2.png"
              alt="Crypto Bunny"
              className="w-32 h-32 rounded-full border-2 border-electric-purple"
            />
          </a>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Contact */}
          <motion.div 
            className="glass-card p-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Contact</h2>
            <ul className="space-y-4 text-white/80">
              <li>• Telegram: @soul_agents</li>
              <li>• X: @soul_agents</li>
            </ul>
          </motion.div>

          {/* Right Column - Project Links */}
          <motion.div 
            className="glass-card p-8"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-center mb-8 gradient-text">Project Links</h2>
            <ul className="space-y-4 text-white/80">
              <li>• X: <a href="https://x.com/soul_agents" className="gradient-text">@soul_agents</a></li>
              <li>• Telegram: <a href="https://t.me/soul_agents" className="gradient-text">@soul_agents</a></li>
            </ul>
          </motion.div>
        </div>
      </div>
    ),
  },
];

export default function PitchDeck(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const scale = useResponsiveScale();

  useEffect(() => {
    // Add class to prevent scrolling
    document.documentElement.classList.add('deck-view');
    
    return () => {
      // Remove class when component unmounts
      document.documentElement.classList.remove('deck-view');
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
    // Keyboard navigation
    const handleKeyPress = (e: KeyboardEvent): void => {
      if (!isAuthenticated) return; // Don't handle keys if not authenticated
      
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault(); // Prevent space from scrolling
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentSlide, isAuthenticated]);

  useEffect(() => {
    if (typeof scale === 'number' && !isNaN(scale)) {
      document.documentElement.style.setProperty('--current-scale', scale.toString());
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
        origin: { y: 0.6 }
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setIsLoading(false);
    }
  };

  const nextSlide = (): void => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => Math.min(prev + 1, slides.length - 1));
    }
  };

  const prevSlide = (): void => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => Math.max(prev - 1, 0));
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
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

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-black via-electric-purple/5 to-black flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <form onSubmit={handleLogin} className="space-y-4 glass-card p-6">
            <div className="flex items-center justify-center mb-4">
              <Lock className="w-8 h-8 text-electric-purple animate-pulse" />
            </div>
            <div className="text-center space-y-2 mb-4">
              <h2 className="text-2xl font-bold gradient-text">
                Soul Agents Pitch Deck
              </h2>
              <p className="text-white/70 text-sm">
                To access the deck, please contact Adam:
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
    <div 
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-electric-purple/5 to-black overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="w-full h-full relative">
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

        {/* Fullscreen Button */}
        <div className="absolute top-4 right-4 z-20">
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-full bg-black/40 text-white/60 hover:text-white transition-colors"
          >
            {isFullscreen ? (
              <Minimize2 className="w-5 h-5" />
            ) : (
              <Maximize2 className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Slide Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="min-h-screen w-full flex items-center justify-center p-4"
          >
            <div 
              className="w-full max-w-7xl mx-auto"
              style={{
                transform: 'scale(var(--deck-scale))',
                transformOrigin: 'center center',
                ['--deck-scale' as string]: 'var(--current-scale, 1)'
              } as React.CSSProperties}
            >
              {slides[currentSlide]?.content ?? <div>No content available</div>}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Bar - moved inside for better positioning */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-1 px-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-1 w-12 sm:w-16 rounded-full transition-colors ${
                index === currentSlide ? "bg-electric-purple" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

