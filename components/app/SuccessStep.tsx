"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Edit, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { AgentConfigFormState } from "../../app/lib/types";

interface SuccessStepProps {
  agentConfig: AgentConfigFormState | null;
  setCurrentStep: (step: number) => void;
}

const SuccessStep: React.FC<SuccessStepProps> = ({
  agentConfig,
  setCurrentStep,
}) => {
  const [isReturningHome, setIsReturningHome] = useState(false);
  const [isEditingConfig, setIsEditingConfig] = useState(false);

  // Calculate subscription end date (1 month from now)
  const endDate = new Date();
  endDate.setMonth(endDate.getMonth() + 1);
  const formattedEndDate = endDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleEditConfig = () => {
    setIsEditingConfig(true);
    setTimeout(() => setCurrentStep(1), 500);
  };

  const handleReturnHome = () => {
    setIsReturningHome(true);
    // The actual navigation happens via the Link component
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] pt-32 pb-16 bg-gradient-to-b from-dark-navy via-deep-space to-cosmic-purple">
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto">
          <AnimatePresence>
            {!isEditingConfig && !isReturningHome && (
              <motion.div
                key="success-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
              >
                <div className="text-3xl font-bold mb-8 text-center gradient-text">
                  <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    Your AI Agent is Ready!
                  </motion.span>
                </div>

                <motion.div
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.3,
                      }}
                    >
                      <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Check className="w-10 h-10 text-green-500" />
                      </div>
                    </motion.div>

                    <h3 className="text-2xl font-bold text-white mb-6">
                      Everything is Confirmed!
                    </h3>

                    <div className="space-y-4 mb-8">
                      <motion.div
                        className="bg-white/5 rounded-lg p-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        <p className="text-white/60 text-sm mb-1">Agent Name</p>
                        <p className="text-white text-lg font-medium">
                          {agentConfig?.username}
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-white/5 rounded-lg p-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <p className="text-white/60 text-sm mb-1">
                          Subscription Active Until
                        </p>
                        <p className="text-white text-lg font-medium">
                          {formattedEndDate}
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-white/5 rounded-lg p-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        <p className="text-white/60 text-sm mb-1">
                          Payment Status
                        </p>
                        <p className="text-green-500 text-lg font-medium flex items-center justify-center gap-2">
                          <Check className="w-5 h-5" /> Confirmed
                        </p>
                      </motion.div>

                      <motion.div
                        className="bg-white/5 rounded-lg p-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7 }}
                      >
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
                      </motion.div>
                    </div>

                    <motion.p
                      className="text-white/70 mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      Your AI agent is now being deployed and will be active
                      within 24 hours. We'll notify you once it's live and ready
                      to engage with your community.
                    </motion.p>

                    <div className="flex flex-col gap-4 max-w-md mx-auto">
                      <motion.button
                        onClick={handleEditConfig}
                        className="px-8 py-3 rounded-lg 
                          bg-electric-purple 
                          text-white font-medium
                          transition-all duration-300
                          hover:bg-electric-purple/90
                          flex items-center justify-center gap-2
                          w-full"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                      >
                        <Edit className="w-5 h-5" />
                        Edit Agent Configuration
                      </motion.button>

                      <Link
                        href="/"
                        className="px-8 py-3 rounded-lg 
                          bg-white/10
                          text-white font-medium
                          transition-all duration-300
                          hover:bg-white/20
                          w-full text-center
                          flex items-center justify-center gap-2"
                        onClick={handleReturnHome}
                      >
                        <motion.span
                          className="flex items-center justify-center gap-2 w-full"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.0 }}
                        >
                          <ArrowLeft className="w-5 h-5" />
                          Return to Home
                        </motion.span>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {(isEditingConfig || isReturningHome) && (
              <motion.div
                key="loading-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center text-center h-64"
              >
                <div className="w-16 h-16 border-4 border-electric-purple/30 border-t-electric-purple rounded-full animate-spin mb-4"></div>
                <p className="text-white/70">
                  {isEditingConfig
                    ? "Loading configuration editor..."
                    : "Returning to home..."}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SuccessStep;
