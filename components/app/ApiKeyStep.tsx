"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Key,
  AlertCircle,
  ArrowRight,
  ExternalLink,
  Play,
  KeyRound,
} from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { storeTwitterApiKey } from "@/app/lib/api";
import { usePrivy } from "@privy-io/react-auth";

interface ApiKeyStepProps {
  setCurrentStep: (step: number) => void;
}

const ApiKeyStep: React.FC<ApiKeyStepProps> = ({ setCurrentStep }) => {
  const [apiKey, setApiKey] = useState<string>("");
  const [apiKeyError, setApiKeyError] = useState<string>("");
  const [apiSecretKey, setApiSecretKey] = useState<string>("");
  const [apiSecretKeyError, setApiSecretKeyError] = useState<string>("");
  const { user } = usePrivy();
  const {
    mutateAsync: saveApiKeys,
    isPending,
    error,
  } = useMutation({
    mutationFn: (data: {
      userId: string;
      apiKey: string;
      apiSecretKey: string;
    }) => storeTwitterApiKey(user?.id!, data.apiKey, data.apiSecretKey),
    onSuccess: () => {
      setCurrentStep(3);
    },
  });

  console.log(error);

  const handleApiKeySubmit = async () => {
    let hasError = false;

    if (!apiKey.trim()) {
      setApiKeyError("Please enter your X API key");
      hasError = true;
    } else if (apiKey.length < 20) {
      setApiKeyError("Please enter a valid X API key");
      hasError = true;
    }

    if (!apiSecretKey.trim()) {
      setApiSecretKeyError("Please enter your X API secret key");
      hasError = true;
    } else if (apiSecretKey.length < 20) {
      setApiSecretKeyError("Please enter a valid X API secret key");
      hasError = true;
    }

    if (hasError) return;

    // Call the mutation with the API keys
    await saveApiKeys({
      userId: "fe44e559-3b68-4a9f-bc00-fc26fcc1ce8c",
      apiKey,
      apiSecretKey,
    });
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
                <p>
                  To deploy your AI agent, we need your X API key and secret
                  key. This allows your agent to:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Access your X timeline</li>
                  <li>Post tweets on your behalf</li>
                  <li>Interact with other users</li>
                  <li>Follow the accounts you specified</li>
                </ul>
                <p className="text-sm">
                  Your API keys are stored securely and are only used for the
                  functionality of your agent.
                </p>

                {/* Explainer Video Link */}
                <div className="mt-4 p-4 bg-white/5 rounded-lg border border-white/10 flex items-center gap-3">
                  <Play className="text-electric-purple w-8 h-8 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-white">Need help?</h4>
                    <p className="text-sm text-white/70">
                      Watch our explainer video on how to get and use your X API
                      keys.
                    </p>
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

              <div className="space-y-6 mt-6">
                {/* API Key Input */}
                <div className="space-y-2">
                  <label className="text-white/80 text-sm flex items-center gap-2">
                    <Key className="w-4 h-4" />X API Key
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      className={`w-full bg-white/5 border ${apiKeyError ? "border-red-500" : "border-white/10"} rounded-xl p-4 text-white
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
                </div>

                {/* API Secret Key Input */}
                <div className="space-y-2">
                  <label className="text-white/80 text-sm flex items-center gap-2">
                    <KeyRound className="w-4 h-4" />X API Secret Key
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      className={`w-full bg-white/5 border ${apiSecretKeyError ? "border-red-500" : "border-white/10"} rounded-xl p-4 text-white
                               focus:outline-none focus:ring-2 focus:ring-electric-purple/50
                               transition-all duration-300 ease-in-out`}
                      placeholder="Enter your X API secret key..."
                      value={apiSecretKey}
                      onChange={(e) => {
                        setApiSecretKey(e.target.value);
                        if (apiSecretKeyError) setApiSecretKeyError("");
                      }}
                    />
                    {apiSecretKeyError && (
                      <div className="flex items-center gap-2 text-red-500 text-sm mt-2">
                        <AlertCircle className="w-4 h-4" />
                        {apiSecretKeyError}
                      </div>
                    )}
                  </div>
                </div>

                <div className="text-xs text-white/40 mt-1">
                  <a
                    href="https://developer.twitter.com/en/portal/dashboard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-electric-purple hover:underline"
                  >
                    Don't have API keys? Learn how to get them →
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-4 pt-4 mt-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative z-10 w-full py-5 px-6 rounded-xl bg-electric-purple text-white
                           border border-electric-purple/50 hover:bg-electric-purple/90
                           transition-all duration-300 ease-in-out overflow-hidden group
                           flex items-center justify-center gap-2 font-medium"
                  onClick={handleApiKeySubmit}
                  disabled={isPending}
                >
                  {isPending ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Verifying keys...</span>
                    </>
                  ) : (
                    <>
                      Continue
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="relative z-10 w-full py-3 px-6 rounded-xl bg-white/10 text-white
                           border border-white/30 hover:bg-white/15
                           transition-all duration-300 ease-in-out overflow-hidden group
                           flex items-center justify-center gap-2"
                  onClick={() => setCurrentStep(1)}
                  disabled={isPending}
                >
                  Back to Configuration
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyStep;
