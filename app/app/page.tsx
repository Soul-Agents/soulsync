"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, MessageSquare, User, Database, Save, ArrowRight, Key, AlertCircle, Link as LinkIcon, ExternalLink, Play, Check, Edit, CreditCard } from "lucide-react";
import * as Tooltip from '@radix-ui/react-tooltip';
import { Navbar } from "../../components/ui/navbar";
import Link from "next/link";

// Define the component with proper HTML element types
const MotionButton = motion.button;
const MotionSpan = motion.span;
const MotionSection = motion.section;

// Interface for agent configuration
interface AgentConfig {
  username: string;
  personality: string;
  styleRules: string;
  contentRestrictions: string;
  knowledgeBase: string;
  model: string;
  exampleTweets: string[];
  followAccounts: string[];
}

// Interface for tooltips
interface TooltipContent {
  personality: string;
  styleRules: string;
  contentRestrictions: string;
  knowledgeBase: string;
  exampleTweets: string;
  followAccounts: string;
}

export default function AppPage() {
  // Step tracking: 1 = config, 2 = API key, 3 = connect to X, 4 = success
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [apiKey, setApiKey] = useState<string>("");
  const [apiKeyError, setApiKeyError] = useState<string>("");
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [connectionComplete, setConnectionComplete] = useState<boolean>(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false);
  const [paymentComplete, setPaymentComplete] = useState<boolean>(false);

  const [agentConfig, setAgentConfig] = useState<AgentConfig>({
    username: "@tech_enthusiast",
    personality: "",
    styleRules: "",
    contentRestrictions: "",
    knowledgeBase: "",
    model: "grok",
    exampleTweets: [
      "Our AI agents are processing real-time data right now 🔥 Current metrics show 90% efficiency gains ⚡",
      "Fascinating use case! This matches perfectly with our current infrastructure capabilities...",
      "Here's where our architecture really shines - let me show you how this works in practice..."
    ],
    followAccounts: ["@elonmusk", "@sama", "@naval"]
  });

  const [testTweet, setTestTweet] = useState<string>(
    "Web3 gaming is the future! What do you think about @immutable and their zkEVM? 🎮"
  );
  const [agentResponse, setAgentResponse] = useState<string>("");
  const [activeField, setActiveField] = useState<string | null>(null);

  const tooltips: TooltipContent = {
    personality: `Example Personality:
🎯 Core Traits:
- Technical authority with subtle wit
- Deep infrastructure expertise
- Community-focused mindset
- Smart but approachable
- Technically precise yet engaging
- Focus on current, proven capabilities
- Stick to public information

Key Guidelines:
• Avoid political topics
• Avoid price speculation
• Stay technical and factual
• Focus on proven features
• Maintain professional tone

Voice Examples:
- Technical: "Our nodes are processing that data type right now..."
- Community: "Your infrastructure strategy is brilliant. Here's how our ZK layer enhances it..."
- Witty: "While others plan, we're already extracting insights ⚡"`,

    styleRules: `Communication Protocol:

Core Rules:
- No self-replies or threads
- No price speculation
- No marketing language
- No generic tech phrases
- No abstract statements
- No unreleased features
- No performance promises
- No internal metrics

Style Balance:
- Smart but not arrogant
- Technical but accessible
- Witty but professional
- Community-focused
- Informative but never speculative
- Helpful but never promotional

Focus Areas:
- AI Capabilities (current only)
- Infrastructure (existing features)
- Data Processing (proven cases)
- Analytics (active implementations)
- ZK Technology (deployed solutions)`,

    contentRestrictions: `Example Restrictions:
- No hashtags
- No marketing speak
- No threads
- No self-replies
- Respect community guidelines

Tips:
• List specific content to avoid
• Define engagement boundaries
• Set professional standards
• Include platform rules
• Specify content types`,

    knowledgeBase: `Core Technology Stack:

🔧 Infrastructure:
- Decentralized modular nodes
- AI-powered data processing
- Zero-knowledge proofs
- Real-time analytics
- Secure data validation

🤖 AI Capabilities:
- Real-time data extraction
- Pattern recognition
- Automated processing
- Secure validation
- Performance optimization

🌐 Key Components:
- Modern zkEVM
- Edge computing network
- Decentralized AI compute
- Real-time oracles
- Smart contract integration

💡 Active Use Cases:
- Social analytics
- Gaming metrics
- Content processing
- Real-time feeds
- Community insights
- Performance tracking`,

    exampleTweets: `Example Tweet Guidelines:

Content Types:
- Technical insights about your product
- Responses to industry questions
- Helpful explanations of features
- Thoughtful engagement with community
- Data-driven observations

Best Practices:
• Keep tweets under 280 characters
• Include 1-2 emojis maximum
• Focus on one clear message per tweet
• Use a consistent technical but friendly tone
• Provide specific, actionable information
• Aim for 3-10 diverse example tweets`,

    followAccounts: `Account Selection Guide:

Recommended Types:
- Industry influencers
- Technical thought leaders
- Relevant projects & protocols
- Community builders
- News sources & analysts

Best Practices:
• Select accounts that align with your agent's focus
• Include a mix of established and emerging voices
• Choose accounts that post relevant technical content
• Avoid accounts with controversial or off-topic content
• Aim for 5-10 quality accounts for optimal engagement`
  };

  // Function to save agent configuration
  const saveAgentConfig = async (andContinue = false) => {
    try {
      // Prepare the configuration data that would be sent to the backend
      const configData = {
        username: agentConfig.username,
        model: agentConfig.model,
        personality: agentConfig.personality,
        styleRules: agentConfig.styleRules,
        contentRestrictions: agentConfig.contentRestrictions,
        knowledgeBase: agentConfig.knowledgeBase,
        exampleTweets: agentConfig.exampleTweets,
        followAccounts: agentConfig.followAccounts
      };
      
      // Log the data that would be sent to the backend
      console.log("Configuration data to be saved:", configData);
      
      // TODO: In the future, this will be an API call to save the configuration to the backend
      // const response = await fetch('/api/save-config', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(configData)
      // });
      
      // Show a success message
      if (!andContinue) {
        alert("Configuration saved successfully!");
      }
      
      // If Save & Continue, move to API key step
      if (andContinue) {
        setCurrentStep(2);
      }
    } catch (error) {
      console.error("Error saving configuration:", error);
      alert("There was an error saving your configuration. Please try again.");
    }
  };

  // Function to handle API key submission
  const handleApiKeySubmit = () => {
    if (!apiKey.trim()) {
      setApiKeyError("Please enter your X API key");
      return;
    }
    
    if (apiKey.length < 20) {
      setApiKeyError("Please enter a valid X API key");
      return;
    }
    
    // Here you would typically send the API key to your backend
    console.log("API key submitted:", apiKey);
    
    // Move to the connection step
    setCurrentStep(3);
  };

  // Function to simulate connecting to X
  const connectToX = () => {
    if (!apiKey.trim()) {
      setApiKeyError("Please enter your X API key");
      return;
    }
    
    setIsConnecting(true);
    
    // Simulate a connection process
    window.setTimeout(() => {
      setIsConnecting(false);
      setConnectionComplete(true);
    }, 3000);
  };

  // Function to simulate payment process
  const processPayment = () => {
    setIsProcessingPayment(true);
    
    // Simulate a payment process
    window.setTimeout(() => {
      setIsProcessingPayment(false);
      setPaymentComplete(true);
      
      // No longer automatically redirect to success screen
      // window.setTimeout(() => {
      //   setCurrentStep(4);
      // }, 1500);
    }, 3000);
  };

  // Render the API key input step
  const renderApiKeyStep = () => {
    return (
      <div className="min-h-[calc(100vh-4rem)] pt-32 pb-16 bg-gradient-to-b from-dark-navy via-deep-space to-cosmic-purple">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto">
            <div className="text-3xl font-bold mb-8 text-center gradient-text">
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Connect Your X Account
              </motion.span>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="text-white/80 space-y-4">
                  <p>To deploy your AI agent, we need your X API key. This allows your agent to:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Access your X timeline</li>
                    <li>Post tweets on your behalf</li>
                    <li>Interact with other users</li>
                    <li>Follow the accounts you specified</li>
                  </ul>
                  <p className="text-sm">Your API key is stored securely and is only used for the functionality of your agent.</p>
                  
                  {/* Explainer Video Link */}
                  <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10 flex items-center gap-3">
                    <Play className="text-electric-purple w-8 h-8 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-white">Need help?</h4>
                      <p className="text-sm text-white/70">Watch our explainer video on how to get and use your X API key.</p>
                      <a 
                        href="#" 
                        className="text-electric-purple text-sm flex items-center gap-1 mt-1 hover:underline"
                        onClick={(e) => {
                          e.preventDefault();
                          alert("Explainer video will be added soon!");
                        }}
                      >
                        Watch video <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mt-6">
                  <label className="text-white/80 text-sm flex items-center gap-2">
                    <Key className="w-4 h-4" />
                    X API Key
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      className={`w-full bg-white/5 border ${apiKeyError ? 'border-red-500' : 'border-white/10'} rounded-xl p-4 text-white
                               focus:outline-none focus:ring-2 focus:ring-electric-purple/50
                               transition-all duration-300 ease-in-out`}
                      placeholder="Enter your X API key..."
                      value={apiKey}
                      onChange={(e) => {
                        setApiKey(e.target.value);
                        if (apiKeyError) setApiKeyError("");
                      }}
                    />
                    {apiKeyError && (
                      <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                        <AlertCircle className="w-4 h-4" />
                        {apiKeyError}
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-white/40 mt-1">
                    <a 
                      href="https://developer.twitter.com/en/portal/dashboard" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-electric-purple hover:underline"
                    >
                      Don't have an API key? Learn how to get one →
                    </a>
                  </div>
                </div>
                
                <div className="flex flex-col gap-4 pt-4 mt-6">
                  <MotionButton
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span 
                      className="relative z-10 w-full py-5 px-6 rounded-xl bg-electric-purple text-white
                               border border-electric-purple/50 hover:bg-electric-purple/90
                               transition-all duration-300 ease-in-out overflow-hidden group
                               flex items-center justify-center gap-2 font-medium"
                      onClick={handleApiKeySubmit}
                    >
                      Continue
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </MotionButton>
                  
                  <MotionButton
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <span 
                      className="relative z-10 w-full py-3 px-6 rounded-xl bg-white/10 text-white
                               border border-white/30 hover:bg-white/15
                               transition-all duration-300 ease-in-out overflow-hidden group
                               flex items-center justify-center gap-2"
                      onClick={() => setCurrentStep(1)}
                    >
                      Back to Configuration
                    </span>
                  </MotionButton>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render the connect to X step
  const renderConnectStep = () => {
    return (
      <div className="min-h-[calc(100vh-4rem)] pt-32 pb-16 bg-gradient-to-b from-dark-navy via-deep-space to-cosmic-purple">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto">
            <div className="text-3xl font-bold mb-8 text-center gradient-text">
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {connectionComplete ? "Connect Complete" : "Connect to X"}
              </motion.span>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6">
              {!connectionComplete ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="mb-6 text-white/80 space-y-4">
                    <p>We're now ready to connect your agent to X using the API key you provided.</p>
                    <p>This will connect to the X app that <strong>you just created</strong> using your API key, enabling your agent to post and interact on your behalf.</p>
                  </div>
                  
                  <div className="mb-6 p-5 bg-white/5 rounded-lg border border-white/10">
                    <h4 className="font-medium text-white flex items-center gap-2 mb-3">
                      <LinkIcon className="text-electric-purple w-5 h-5" />
                      Connection Details
                    </h4>
                    <ul className="space-y-3 text-sm text-white/80">
                      <li className="flex items-start gap-2">
                        <span className="bg-white/10 text-white/80 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                        <span>Your agent will be initialized with the configuration you provided</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-white/10 text-white/80 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                        <span>We'll authenticate with X using your API key</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-white/10 text-white/80 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                        <span>Your agent will follow the accounts you specified</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="bg-white/10 text-white/80 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                        <span>Your agent will be ready to engage with content based on your configuration</span>
                      </li>
                    </ul>
                  </div>
                  
                  <button
                    className={`w-full py-4 px-6 rounded-xl ${
                      isConnecting
                        ? 'bg-electric-purple/50 cursor-not-allowed'
                        : 'bg-electric-purple hover:bg-electric-purple/90'
                    } text-white font-medium transition-all duration-300 flex items-center justify-center gap-2`}
                    onClick={connectToX}
                    disabled={isConnecting}
                  >
                    {isConnecting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Connecting...
                      </>
                    ) : (
                      <>
                        <LinkIcon className="w-5 h-5" />
                        Connect to X
                      </>
                    )}
                  </button>
                </motion.div>
              ) : !paymentComplete ? (
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-20 h-20 bg-electric-purple/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 text-electric-purple" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      X Connection Successful!
                    </h3>
                    
                    <p className="text-white/80 mb-8">
                      Your X account has been successfully connected. The next step is to complete payment to activate your AI agent.
                    </p>
                    
                    <div className="bg-white/5 rounded-lg p-6 mb-8">
                      <h4 className="text-xl font-semibold text-white mb-4">Subscription Details:</h4>
                      <ul className="text-left text-white/80 space-y-4">
                        <li className="flex items-start gap-3">
                          <span className="bg-electric-purple/20 text-electric-purple w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">•</span>
                          <span>1-month subscription to Soul Agents</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-electric-purple/20 text-electric-purple w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">•</span>
                          <span>Full access to AI agent: <span className="text-white font-medium">{agentConfig.username}</span></span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-electric-purple/20 text-electric-purple w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">•</span>
                          <span>24/7 autonomous engagement on X</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="bg-electric-purple/20 text-electric-purple w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">•</span>
                          <span>Priority support via <a href="https://x.com/soul_agents" target="_blank" rel="noopener noreferrer" className="text-electric-purple hover:underline">@soul_agents</a></span>
                        </li>
                      </ul>
                    </div>
                    
                    <button
                      onClick={processPayment}
                      disabled={isProcessingPayment}
                      className={`w-full px-8 py-4 rounded-lg 
                        ${isProcessingPayment ? 'bg-green-500/50 cursor-not-allowed' : 'bg-green-500/80 hover:bg-green-500'}
                        text-white font-medium
                        transition-all duration-300
                        flex items-center justify-center gap-2`}
                    >
                      {isProcessingPayment ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Processing Payment...
                        </>
                      ) : (
                        <>
                          <CreditCard className="w-5 h-5" />
                          Complete Payment
                        </>
                      )}
                    </button>
                  </motion.div>
                </div>
              ) : (
                <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-10 h-10 text-green-500" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">
                      Payment Successful!
                    </h3>
                    
                    <p className="text-white/80 mb-6">
                      Thank you for your payment. Your AI agent is now being set up and will be active soon.
                    </p>
                    
                    <div className="bg-white/5 rounded-lg p-4 mb-8">
                      <p className="text-white/60 text-sm mb-1">Transaction Hash</p>
                      <a 
                        href="https://etherscan.io/tx/0x8a5f3d9e7f904e2c0c0f4961b386b1b4f5a13c0a7a92d8c31615795bf8fbb9fc" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-electric-purple hover:underline text-sm font-mono break-all"
                      >
                        0x8a5f3d9e7f904e2c0c0f4961b386b1b4f5a13c0a7a92d8c31615795bf8fbb9fc
                      </a>
                    </div>
                    
                    <div className="flex justify-center">
                      <button
                        onClick={() => setCurrentStep(4)}
                        className="px-8 py-3 rounded-lg 
                          bg-electric-purple 
                          text-white font-medium
                          transition-all duration-300
                          hover:bg-electric-purple/90
                          flex items-center justify-center gap-2
                          w-full max-w-md mx-auto"
                      >
                        Continue to Confirmation
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render the success/confirmation state
  const renderSuccessState = () => {
    // Calculate subscription end date (1 month from now)
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1);
    const formattedEndDate = endDate.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    return (
      <div className="min-h-[calc(100vh-4rem)] pt-32 pb-16 bg-gradient-to-b from-dark-navy via-deep-space to-cosmic-purple">
        <div className="container mx-auto px-4 relative">
          <div className="max-w-2xl mx-auto">
            <div className="text-3xl font-bold mb-8 text-center gradient-text">
              <motion.span
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Your AI Agent is Ready!
              </motion.span>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6">
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-500" />
                  </div>
                </motion.div>
                
                <h3 className="text-2xl font-bold text-white mb-6">
                  Everything is Confirmed!
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white/60 text-sm mb-1">Agent Name</p>
                    <p className="text-white text-lg font-medium">{agentConfig.username}</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white/60 text-sm mb-1">Subscription Active Until</p>
                    <p className="text-white text-lg font-medium">{formattedEndDate}</p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white/60 text-sm mb-1">Payment Status</p>
                    <p className="text-green-500 text-lg font-medium flex items-center justify-center gap-2">
                      <Check className="w-5 h-5" /> Confirmed
                    </p>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white/60 text-sm mb-1">Need Help?</p>
                    <p className="text-white text-lg font-medium">
                      Contact us at{" "}
                      <a 
                        href="https://x.com/soul_agents" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-electric-purple hover:underline"
                      >
                        x.com/soul_agents
                      </a>
                    </p>
                  </div>
                </div>
                
                <p className="text-white/70 mb-8">
                  Your AI agent is now being deployed and will be active within 24 hours.
                  We'll notify you once it's live and ready to engage with your community.
                </p>
                
                <div className="flex flex-col gap-4 max-w-md mx-auto">
                  <button
                    onClick={() => setCurrentStep(1)}
                    className="px-8 py-3 rounded-lg 
                      bg-electric-purple 
                      text-white font-medium
                      transition-all duration-300
                      hover:bg-electric-purple/90
                      flex items-center justify-center gap-2
                      w-full"
                  >
                    <Edit className="w-5 h-5" />
                    Edit Agent Configuration
                  </button>
                  
                  <Link 
                    href="/"
                    className="px-8 py-3 rounded-lg 
                      bg-white/10
                      text-white font-medium
                      transition-all duration-300
                      hover:bg-white/20
                      w-full text-center"
                  >
                    Return to Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <Tooltip.Provider delayDuration={200}>
        {currentStep === 1 ? (
          <div className="min-h-[calc(100vh-4rem)] pt-32 pb-16 bg-gradient-to-b from-dark-navy via-deep-space to-cosmic-purple">
            <div className="container mx-auto px-4 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Configure Your AI Agent
                  </motion.h2>
                  
                  {/* X Username */}
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm">X Username</label>
                    <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white">
                      <User className="w-5 h-5 text-electric-purple" />
                      <span>{agentConfig.username}</span>
                    </div>
                  </div>

                  {/* Model Selection */}
                  <div className="space-y-2">
                    <label className="text-white/80 text-sm">Model Selection</label>
                    <select
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white
                               appearance-none cursor-pointer hover:bg-white/10 transition-colors
                               focus:outline-none focus:ring-2 focus:ring-electric-purple/50"
                      value={agentConfig.model}
                      onChange={(e) => setAgentConfig({...agentConfig, model: e.target.value})}
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                        backgroundPosition: 'right 1rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em',
                        paddingRight: '2.5rem'
                      }}
                    >
                      <option value="grok" className="text-black">Grok (Recommended)</option>
                      <option value="gpt4o" className="text-black">GPT-4o</option>
                      <option value="gemini" className="text-black">Gemini</option>
                    </select>
                  </div>

                  {/* Core Personality */}
                  <motion.section 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label className="text-white/80 text-sm flex items-center justify-between">
                      Core Personality
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <motion.span
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            ℹ️
                          </motion.span>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content
                            className="max-w-md bg-dark-navy/95 backdrop-blur-xl border border-white/10 rounded-xl p-4 
                                     text-white text-sm leading-relaxed shadow-xl"
                            sideOffset={5}
                          >
                            <pre className="whitespace-pre-wrap font-sans">{tooltips.personality}</pre>
                            <Tooltip.Arrow className="fill-dark-navy" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    </label>
                    <div className="relative">
                      <textarea
                        className={`w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-white
                                 focus:outline-none focus:ring-2 focus:ring-electric-purple/50 resize-none
                                 transition-all duration-300 ease-in-out
                                 ${activeField === 'personality' ? 'bg-white/10 border-electric-purple/50' : ''}
                                 hover:bg-white/7`}
                        placeholder="Define your agent's personality..."
                        value={agentConfig.personality}
                        onChange={(e) => setAgentConfig({...agentConfig, personality: e.target.value})}
                        onFocus={() => setActiveField('personality')}
                        onBlur={() => setActiveField(null)}
                      />
                    </div>
                  </motion.section>

                  {/* Style Rules */}
                  <MotionSection 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label className="text-white/80 text-sm flex items-center justify-between">
                      Communication Style
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <MotionSpan
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            ℹ️
                          </MotionSpan>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content
                            className="max-w-md bg-dark-navy/95 backdrop-blur-xl border border-white/10 rounded-xl p-4 
                                     text-white text-sm leading-relaxed shadow-xl"
                            sideOffset={5}
                          >
                            <pre className="whitespace-pre-wrap font-sans">{tooltips.styleRules}</pre>
                            <Tooltip.Arrow className="fill-dark-navy" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    </label>
                    <textarea
                      className="w-full h-24 bg-white/5 border border-white/10 rounded-xl p-4 text-white
                               focus:outline-none focus:ring-2 focus:ring-electric-purple/50 resize-none"
                      placeholder="Define communication style rules..."
                      value={agentConfig.styleRules}
                      onChange={(e) => setAgentConfig({...agentConfig, styleRules: e.target.value})}
                    />
                  </MotionSection>

                  {/* Content Restrictions */}
                  <MotionSection 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="text-white/80 text-sm flex items-center justify-between">
                      Content Restrictions
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <MotionSpan
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            ℹ️
                          </MotionSpan>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content
                            className="max-w-md bg-dark-navy/95 backdrop-blur-xl border border-white/10 rounded-xl p-4 
                                     text-white text-sm leading-relaxed shadow-xl"
                            sideOffset={5}
                          >
                            <pre className="whitespace-pre-wrap font-sans">{tooltips.contentRestrictions}</pre>
                            <Tooltip.Arrow className="fill-dark-navy" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    </label>
                    <textarea
                      className="w-full h-24 bg-white/5 border border-white/10 rounded-xl p-4 text-white
                               focus:outline-none focus:ring-2 focus:ring-electric-purple/50 resize-none"
                      placeholder="Define content restrictions..."
                      value={agentConfig.contentRestrictions}
                      onChange={(e) => setAgentConfig({...agentConfig, contentRestrictions: e.target.value})}
                    />
                  </MotionSection>

                  {/* Knowledge Base */}
                  <MotionSection 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="text-white/80 text-sm flex items-center justify-between">
                      Knowledge Base
                      <Tooltip.Root>
                        <Tooltip.Trigger asChild>
                          <MotionSpan
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            ℹ️
                          </MotionSpan>
                        </Tooltip.Trigger>
                        <Tooltip.Portal>
                          <Tooltip.Content
                            className="max-w-md bg-dark-navy/95 backdrop-blur-xl border border-white/10 rounded-xl p-4 
                                     text-white text-sm leading-relaxed shadow-xl"
                            sideOffset={5}
                          >
                            <pre className="whitespace-pre-wrap font-sans">{tooltips.knowledgeBase}</pre>
                            <Tooltip.Arrow className="fill-dark-navy" />
                          </Tooltip.Content>
                        </Tooltip.Portal>
                      </Tooltip.Root>
                    </label>
                    <div className="relative">
                      <Database className="absolute left-4 top-4 w-5 h-5 text-white/40" />
                      <textarea
                        className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 pl-12 text-white
                                 focus:outline-none focus:ring-2 focus:ring-electric-purple/50 resize-none"
                        placeholder="Define knowledge base..."
                        value={agentConfig.knowledgeBase}
                        onChange={(e) => setAgentConfig({...agentConfig, knowledgeBase: e.target.value})}
                      />
                    </div>
                  </MotionSection>

                  {/* Example Tweets */}
                  <MotionSection 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <label className="text-white/80 text-sm flex items-center justify-between">
                      Example Tweets
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-white/60">
                          {agentConfig.exampleTweets.length}/10 tweets
                        </span>
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <MotionSpan
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              ℹ️
                            </MotionSpan>
                          </Tooltip.Trigger>
                          <Tooltip.Portal>
                            <Tooltip.Content
                              className="max-w-md bg-dark-navy/95 backdrop-blur-xl border border-white/10 rounded-xl p-4 
                                       text-white text-sm leading-relaxed shadow-xl"
                              sideOffset={5}
                            >
                              <pre className="whitespace-pre-wrap font-sans">{tooltips.exampleTweets}</pre>
                              <Tooltip.Arrow className="fill-dark-navy" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      </div>
                    </label>
                    <div className="space-y-2">
                      {agentConfig.exampleTweets.map((tweet, index) => (
                        <div key={index} className="relative block">
                          <MotionSpan
                            whileHover={{ scale: 1.01 }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <div className="relative">
                              <textarea
                                className="w-full bg-transparent border border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-electric-purple/50 resize-none"
                                value={tweet}
                                onChange={(e) => {
                                  const newTweets = [...agentConfig.exampleTweets];
                                  newTweets[index] = e.target.value;
                                  setAgentConfig({...agentConfig, exampleTweets: newTweets});
                                }}
                                rows={2}
                              />
                              <div className="absolute bottom-2 right-2 text-xs text-white/40">
                                {280 - tweet.length} characters left
                              </div>
                              {agentConfig.exampleTweets.length > 3 && (
                                <button 
                                  className="absolute top-2 right-2 text-white/40 hover:text-white/80 transition-colors"
                                  onClick={() => {
                                    const newTweets = [...agentConfig.exampleTweets];
                                    newTweets.splice(index, 1);
                                    setAgentConfig({...agentConfig, exampleTweets: newTweets});
                                  }}
                                >
                                  ✕
                                </button>
                              )}
                            </div>
                          </MotionSpan>
                        </div>
                      ))}
                      {agentConfig.exampleTweets.length < 10 && (
                        <MotionButton
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span 
                            className="text-white cursor-pointer flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-white/10 hover:bg-white/15 transition-colors border border-white/20"
                            onClick={() => {
                              if (agentConfig.exampleTweets.length < 10) {
                                setAgentConfig({
                                  ...agentConfig, 
                                  exampleTweets: [...agentConfig.exampleTweets, ""]
                                });
                              }
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="12" y1="5" x2="12" y2="19"></line>
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            Add Example Tweet
                          </span>
                        </MotionButton>
                      )}
                    </div>
                  </MotionSection>

                  {/* Follow Accounts */}
                  <MotionSection 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <label className="text-white/80 text-sm flex items-center justify-between">
                      Follow Accounts
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-white/60">
                          {agentConfig.followAccounts.length > 0 
                            ? `${agentConfig.followAccounts.length} account${agentConfig.followAccounts.length > 1 ? 's' : ''} added` 
                            : "No accounts added yet"}
                        </span>
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <MotionSpan
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                            >
                              ℹ️
                            </MotionSpan>
                          </Tooltip.Trigger>
                          <Tooltip.Portal>
                            <Tooltip.Content
                              className="max-w-md bg-dark-navy/95 backdrop-blur-xl border border-white/10 rounded-xl p-4 
                                       text-white text-sm leading-relaxed shadow-xl"
                              sideOffset={5}
                            >
                              <pre className="whitespace-pre-wrap font-sans">{tooltips.followAccounts}</pre>
                              <Tooltip.Arrow className="fill-dark-navy" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      </div>
                    </label>
                    <div className="space-y-2">
                      <MotionSpan
                        whileHover={{ scale: 1.01 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <textarea
                          className="w-full bg-transparent border border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-electric-purple/50 resize-none"
                          value={agentConfig.followAccounts.join(", ")}
                          onChange={(e) => {
                            // Split by comma or space and trim whitespace
                            const accounts = e.target.value
                              .split(/[,\s]+/)
                              .map(account => account.trim())
                              .filter(account => account.length > 0);
                            
                            setAgentConfig({...agentConfig, followAccounts: accounts});
                          }}
                          rows={4}
                          placeholder="Enter accounts to follow (separated by commas or spaces)"
                        />
                      </MotionSpan>
                    </div>
                  </MotionSection>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-4">
                    <MotionButton
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span 
                        className="relative z-10 w-full py-5 px-6 rounded-xl bg-electric-purple text-white
                                 border border-electric-purple/50 hover:bg-electric-purple/90
                                 transition-all duration-300 ease-in-out overflow-hidden group
                                 flex items-center justify-center gap-2 font-medium"
                        onClick={() => saveAgentConfig(true)}
                      >
                        <Save className="w-5 h-5" />
                        Save & Continue
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </MotionButton>
                    
                    <MotionButton
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <span 
                        className="relative z-10 w-full py-3 px-6 rounded-xl bg-white/10 text-white
                                 border border-white/30 hover:bg-white/15
                                 transition-all duration-300 ease-in-out overflow-hidden group
                                 flex items-center justify-center gap-2"
                        onClick={() => saveAgentConfig(false)}
                      >
                        <Save className="w-4 h-4" />
                        Save Configuration
                      </span>
                    </MotionButton>
                  </div>
                </div>

                {/* Right Column - Test Interface */}
                <div className="space-y-6">
                  <motion.h2>
                    Test Your Agent
                  </motion.h2>
                  
                  {/* Tweet Input */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <textarea
                      className="w-full h-24 bg-transparent text-white placeholder-white/40 resize-none"
                      placeholder="Type an example tweet here..."
                      value={testTweet}
                      onChange={(e) => setTestTweet(e.target.value)}
                    />
                    <div className="flex justify-end mt-2">
                      <motion.span
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <button
                          onClick={() => setAgentResponse("Hey! I'd love to share my thoughts on web3 gaming. Immutable's zkEVM is a game-changer for scaling and user experience. Their focus on gaming-specific features while maintaining Ethereum's security is impressive. Plus, the reduced gas fees make microtransactions viable! 🚀")}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg 
                                 bg-electric-purple/20 text-electric-purple border border-electric-purple/50
                                 hover:bg-electric-purple/30 transition-all"
                        >
                          <Bot className="w-4 h-4" />
                          Test Response
                        </button>
                      </motion.span>
                    </div>
                  </div>

                  {/* Agent Response */}
                  {agentResponse && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-start gap-3">
                        <MessageSquare className="w-5 h-5 text-electric-purple mt-1" />
                        <p className="text-white/90">{agentResponse}</p>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : currentStep === 2 ? (
          renderApiKeyStep()
        ) : currentStep === 3 ? (
          renderConnectStep()
        ) : (
          renderSuccessState()
        )}
      </Tooltip.Provider>
    </>
  );
}
