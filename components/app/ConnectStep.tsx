"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, AlertCircle } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { connectTwitterAccount } from "../../app/lib/api";

interface ConnectStepProps {
  user: any; // Using any as the Privy user type might be complex
  setCurrentStep: (step: number) => void;
}

const ConnectStep: React.FC<ConnectStepProps> = ({ user, setCurrentStep }) => {
  const [error, setError] = useState<string>("");
  const [isConnecting, setIsConnecting] = useState(false);

  const {
    mutateAsync: connectTwitter,
    isPending: isConnectingTwitter,
    isError: connectTwitterError,
  } = useMutation({
    mutationFn: connectTwitterAccount,
  });

  const connectToX = async () => {
    setError("");
    setIsConnecting(true);

    try {
      console.log("CONNECTING TO TWITTER");
      const connectResult = await connectTwitter(user?.id!);
      console.log("CONNECT RESULT", connectResult);

      if (connectTwitterError) {
        setError("Failed to connect to X. Please try again.");
        setIsConnecting(false);
        return;
      }

      // The user will be redirected after successful connection
    } catch (error) {
      console.error("Error connecting to Twitter:", error);
      setError("An error occurred while connecting to X. Please try again.");
      setIsConnecting(false);
    }
  };

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
              Connect to X
            </motion.span>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="mb-6 text-white/80 space-y-4">
                <p className="text-lg font-semibold">
                  Connecting Your X Account
                </p>
                <p>
                  We're going to verify and connect your X account using the API
                  keys you provided. This connection will enable your AI agent
                  to:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-white/70">
                  <li>Read your timeline and mentions</li>
                  <li>Post responses to relevant conversations</li>
                  <li>Interact with other users based on your configuration</li>
                  <li>Follow accounts that align with your interests</li>
                  <li>Process incoming messages and respond appropriately</li>
                </ul>

                <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10">
                  <p className="text-sm text-white/60">
                    <span className="text-electric-purple font-medium">
                      Privacy Note:
                    </span>{" "}
                    Your API keys are encrypted and stored securely. We only use
                    them for the specific functions you've authorized through
                    your agent configuration.
                  </p>
                </div>
              </div>

              {error && (
                <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <div className="flex items-center gap-2 text-red-500">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p>{error}</p>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-4 pt-4">
                {isConnecting || isConnectingTwitter ? (
                  <div className="py-8 flex flex-col items-center justify-center">
                    <div className="animate-pulse flex flex-col items-center gap-4">
                      <div className="w-16 h-16 rounded-full border-4 border-t-electric-purple border-r-electric-purple/30 border-b-electric-purple/10 border-l-electric-purple/60 animate-spin"></div>
                      <p className="text-white/80">
                        Verifying and connecting your X account...
                      </p>
                      <p className="text-white/50 text-sm">
                        This may take a few moments
                      </p>
                    </div>
                  </div>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="relative z-10 w-full py-5 px-6 rounded-xl bg-electric-purple text-white
                           border border-electric-purple/50 hover:bg-electric-purple/90
                           transition-all duration-300 ease-in-out overflow-hidden
                           flex items-center justify-center gap-2 font-medium"
                    onClick={connectToX}
                  >
                    Connect X Account
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                )}

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  disabled={isConnecting}
                  className={`relative z-10 w-full py-3 px-6 rounded-xl bg-white/10 text-white
                           border border-white/30 hover:bg-white/15
                           transition-all duration-300 ease-in-out overflow-hidden
                           flex items-center justify-center gap-2 ${isConnecting ? "opacity-50 cursor-not-allowed" : ""}`}
                  onClick={() => !isConnecting && setCurrentStep(2)}
                >
                  Back to API Keys
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectStep;
