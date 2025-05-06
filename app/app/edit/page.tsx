"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { usePrivy } from "@privy-io/react-auth";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getAgentConfig,
  updateAgentConfig,
  testResponse as testAgentResponse,
  getPaymentStatus,
} from "../../lib/api";
import {
  AgentConfig,
  AgentConfigFormState,
  PaymentStatus,
} from "../../lib/types";
import {
  Save,
  Play,
  Check,
  X,
  Loader2,
  CreditCard,
  Calendar,
  Hash,
  Clock,
} from "lucide-react";

// Component styling constants
const inputClasses =
  "bg-black/50 border border-electric-purple/20 rounded-lg p-4 text-white w-full mb-4 placeholder-white/30 focus:outline-none focus:border-electric-purple/50";
const labelClasses = "block text-white mb-2 font-medium";
const buttonClasses =
  "px-6 py-3 bg-gradient-to-r from-electric-purple to-neon-pink rounded-xl text-white hover:shadow-[0_0_30px_rgba(147,51,234,0.3)] transition-all duration-300 hover:scale-105 font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100";
const secondaryButtonClasses =
  "px-6 py-3 bg-electric-purple/20 text-electric-purple border border-electric-purple/30 rounded-xl hover:bg-electric-purple/30 transition-all duration-300 font-semibold flex items-center justify-center gap-2";
const sectionClasses = "mb-8 glass-card p-6 rounded-xl relative";

export default function EditAgentConfig() {
  const router = useRouter();
  const { user, authenticated, ready, user: privyUser } = usePrivy();
  const queryClient = useQueryClient();

  // State for agent configuration
  const [agentConfig, setAgentConfig] = useState<AgentConfigFormState | null>(
    null
  );
  const [testTweet, setTestTweet] = useState<string>(
    "Web3 gaming is the future! What do you think about @immutable and their zkEVM? 🎮"
  );
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [saveSuccess, setSaveSuccess] = useState<boolean>(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [testingResponse, setTestingResponse] = useState<boolean>(false);
  const [testResponseText, setTestResponseText] = useState<string>("");
  const [isNavigating, setIsNavigating] = useState<boolean>(false);
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);

  // Fetch agent configuration
  const { data: savedConfig, isLoading: isLoadingConfig } = useQuery({
    queryKey: ["agentConfig", user?.id],
    queryFn: () => getAgentConfig(user?.id!),
    enabled: !!user?.id,
    retry: false,
    throwOnError: false,
  });

  // Redirect if no user or no agent config
  useEffect(() => {
    if (ready && !authenticated) {
      setIsNavigating(true);
      router.push("/");
    } else if (ready && authenticated && !isLoadingConfig && !savedConfig) {
      setIsNavigating(true);
      router.push("/app");
    }
  }, [ready, authenticated, savedConfig, isLoadingConfig, router]);

  const daysRemaining = (paymentStatus: PaymentStatus) => {
    if (!paymentStatus.payment_date) return 0;

    const paymentDate = new Date(paymentStatus.payment_date);
    const expirationDate = new Date(paymentDate);
    expirationDate.setDate(paymentDate.getDate() + 30);

    const today = new Date();
    const timeDiff = expirationDate.getTime() - today.getTime();
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    return Math.max(0, daysRemaining);
  };
  // Update local state when savedConfig changes
  useEffect(() => {
    if (savedConfig) {
      // Convert backend config to form state
      const formState: AgentConfigFormState = {
        username: savedConfig.user_name,
        personality: savedConfig.user_personality,
        styleRules: savedConfig.style_rules,
        contentRestrictions: savedConfig.content_restrictions,
        knowledgeBase: savedConfig.knowledge_base,
        model:
          savedConfig.model_config && savedConfig.model_config["model"]
            ? savedConfig.model_config["model"]
            : "grok",
        exampleTweets: savedConfig.example_tweets || [],
        followAccounts: [
          ...(savedConfig.ai_and_agents || []),
          ...(savedConfig.web3_builders || []),
          ...(savedConfig.defi_experts || []),
          ...(savedConfig.thought_leaders || []),
          ...(savedConfig.traders_and_analysts || []),
        ],
      };
      setAgentConfig(formState);
    }
  }, [savedConfig]);

  // Helper function for safe state updates
  const updateAgentConfigField = <K extends keyof AgentConfigFormState>(
    field: K,
    value: AgentConfigFormState[K]
  ) => {
    setAgentConfig((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  // Handler for saving agent configuration
  const saveAgentConfig = async () => {
    if (!agentConfig || !user?.twitter?.username) return;

    setIsSaving(true);
    setSaveSuccess(false);
    setSaveError(null);

    try {
      // Convert form state back to backend config for updating
      const backendConfig: Partial<AgentConfig> = {
        client_id: privyUser?.id || "",
        user_id: user.id || "",
        user_name: agentConfig.username,
        user_personality: agentConfig.personality,
        style_rules: agentConfig.styleRules,
        content_restrictions: agentConfig.contentRestrictions,
        knowledge_base: agentConfig.knowledgeBase,
        model_config: {
          model: agentConfig.model,
        },
        example_tweets: agentConfig.exampleTweets,
        // Process follow accounts into categories
        ai_and_agents: agentConfig.followAccounts.filter(
          (a) =>
            a.toLowerCase().includes("ai") || a.toLowerCase().includes("bot")
        ),
        web3_builders: agentConfig.followAccounts.filter(
          (a) =>
            a.toLowerCase().includes("web3") ||
            a.toLowerCase().includes("crypto")
        ),
        defi_experts: agentConfig.followAccounts.filter((a) =>
          a.toLowerCase().includes("defi")
        ),
        thought_leaders: agentConfig.followAccounts.filter(
          (a) =>
            !a.toLowerCase().includes("ai") &&
            !a.toLowerCase().includes("web3") &&
            !a.toLowerCase().includes("defi")
        ),
        traders_and_analysts: [],
      };

      const result = await updateAgentConfig(backendConfig);

      if (result.success) {
        setSaveSuccess(true);
        queryClient.invalidateQueries({ queryKey: ["agentConfig"] });
        setTimeout(() => setSaveSuccess(false), 3000);
      } else {
        setSaveError(result.error || "Failed to update configuration");
        setTimeout(() => setSaveError(null), 5000);
      }
    } catch (error) {
      console.error("Error updating agent config:", error);
      setSaveError("An unexpected error occurred. Please try again.");
      setTimeout(() => setSaveError(null), 5000);
    } finally {
      setIsSaving(false);
    }
  };

  // Handler for testing agent response
  const handleTestAgentResponse = async () => {
    if (!user?.twitter?.username) return;

    setTestingResponse(true);
    setTestResponseText("");

    try {
      const response = await testAgentResponse(
        user.twitter.username,
        user.twitter.username,
        testTweet
      );

      if (response && response.result) {
        setTestResponseText(response.result);
      }
    } catch (error) {
      console.error("Error testing agent response:", error);
    } finally {
      setTestingResponse(false);
    }
  };

  const {
    data: paymentStatus,
    isLoading: paymentStatusLoading,
    isError: paymentError,
  } = useQuery({
    queryKey: ["paymentStatus", user?.id],
    queryFn: () => getPaymentStatus(user?.id!),
    enabled: !!user?.id,
    retry: false,
    throwOnError: false,
  });
  // Show loading state if not ready or loading config
  if (!ready || isLoadingConfig || !agentConfig) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-black via-electric-purple/5 to-black pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-electric-purple/30 border-t-electric-purple rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/70">Loading your configuration...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-electric-purple/5 to-black pt-24 pb-16">
      {isNavigating && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-electric-purple/30 border-t-electric-purple rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white/70">Navigating, please wait...</p>
          </div>
        </div>
      )}

      {/* Payment Status Modal */}
      {showPaymentModal && paymentStatus && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-md glass-card p-6 rounded-xl border border-electric-purple/30 shadow-lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold gradient-text">
                Payment Status
              </h2>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="text-white/70 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Hash className="w-5 h-5 text-electric-purple mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">Transaction Hash</p>
                  <p className="text-white break-all">
                    {paymentStatus.data?.tx_hash || "None"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-electric-purple mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">Amount</p>
                  <p className="text-white">
                    {paymentStatus.data?.payment_amount} USDT
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5 text-electric-purple mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">Payment Date</p>
                  <p className="text-white">
                    {paymentStatus.data?.payment_date
                      ? new Date(
                          paymentStatus.data?.payment_date
                        ).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "N/A"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-electric-purple mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/70 text-sm">Subscription Status</p>
                  <div className="flex items-center gap-2">
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${paymentStatus.data?.is_active && paymentStatus.data?.is_paid ? "bg-green-500" : "bg-red-500"}`}
                    ></span>
                    <p className="text-white">
                      {paymentStatus.data?.is_active &&
                      paymentStatus.data?.is_paid
                        ? `Active (${daysRemaining(paymentStatus.data)} days remaining)`
                        : "Inactive"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowPaymentModal(false)}
              className={`${buttonClasses} w-full mt-6`}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 flex items-center justify-center"
        >
          <span className="px-4 py-2 bg-electric-purple/10 rounded-full text-electric-purple text-sm font-semibold border border-electric-purple/20 shadow-lg">
            Edit Your Reply Guy Configuration ✨
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl font-bold mb-8 gradient-text text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Agent Configuration
        </motion.h1>

        <section className={sectionClasses}>
          <h2 className="text-2xl font-semibold gradient-text mb-4">
            Personality & Style
          </h2>

          <div className="mb-4">
            <label htmlFor="personality" className={labelClasses}>
              Agent Personality
            </label>
            <textarea
              id="personality"
              rows={4}
              className={inputClasses}
              placeholder="Describe your agent's personality, tone, and character..."
              value={agentConfig.personality}
              onChange={(e) =>
                updateAgentConfigField("personality", e.target.value)
              }
            />
          </div>

          <div className="mb-4">
            <label htmlFor="styleRules" className={labelClasses}>
              Style Rules
            </label>
            <textarea
              id="styleRules"
              rows={3}
              className={inputClasses}
              placeholder="Define communication style, writing rules, formatting..."
              value={agentConfig.styleRules}
              onChange={(e) =>
                updateAgentConfigField("styleRules", e.target.value)
              }
            />
          </div>

          <div className="mb-4">
            <label htmlFor="contentRestrictions" className={labelClasses}>
              Content Restrictions
            </label>
            <textarea
              id="contentRestrictions"
              rows={3}
              className={inputClasses}
              placeholder="Topics to avoid, prohibited content, ethical guardrails..."
              value={agentConfig.contentRestrictions}
              onChange={(e) =>
                updateAgentConfigField("contentRestrictions", e.target.value)
              }
            />
          </div>
        </section>

        <section className={sectionClasses}>
          <h2 className="text-2xl font-semibold gradient-text mb-4">
            Knowledge & Examples
          </h2>

          <div className="mb-4">
            <label htmlFor="knowledgeBase" className={labelClasses}>
              Knowledge Base
            </label>
            <textarea
              id="knowledgeBase"
              rows={4}
              className={inputClasses}
              placeholder="Technical information, project details, facts the agent should know..."
              value={agentConfig.knowledgeBase}
              onChange={(e) =>
                updateAgentConfigField("knowledgeBase", e.target.value)
              }
            />
          </div>

          <div className="mb-4">
            <label htmlFor="exampleTweets" className={labelClasses}>
              Example Tweets
            </label>
            {agentConfig.exampleTweets.map((tweet, index) => (
              <div key={index} className="flex mb-2 gap-2">
                <textarea
                  rows={2}
                  className={`${inputClasses} mb-0`}
                  value={tweet}
                  onChange={(e) => {
                    const newTweets = [...agentConfig.exampleTweets];
                    newTweets[index] = e.target.value;
                    updateAgentConfigField("exampleTweets", newTweets);
                  }}
                />
                <button
                  type="button"
                  className="bg-red-500/20 text-red-400 p-2 h-12 rounded-lg"
                  onClick={() => {
                    const newTweets = agentConfig.exampleTweets.filter(
                      (_, i) => i !== index
                    );
                    updateAgentConfigField("exampleTweets", newTweets);
                  }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
            <button
              type="button"
              className={`${secondaryButtonClasses} mt-2 w-full`}
              onClick={() => {
                updateAgentConfigField("exampleTweets", [
                  ...agentConfig.exampleTweets,
                  "",
                ]);
              }}
            >
              Add Example Tweet
            </button>
          </div>
        </section>

        <section className={sectionClasses}>
          <h2 className="text-2xl font-semibold gradient-text mb-4">
            Test Your Agent
          </h2>

          <div className="mb-4">
            <label htmlFor="testTweet" className={labelClasses}>
              Test Tweet
            </label>
            <textarea
              id="testTweet"
              rows={2}
              className={inputClasses}
              placeholder="Enter a sample tweet to test your agent's response..."
              value={testTweet}
              onChange={(e) => setTestTweet(e.target.value)}
            />
          </div>

          <button
            type="button"
            className={`${secondaryButtonClasses} w-full`}
            onClick={handleTestAgentResponse}
            disabled={testingResponse}
          >
            {testingResponse ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" /> Testing Response...
              </>
            ) : (
              <>
                <Play className="w-5 h-5" /> Test Agent Response
              </>
            )}
          </button>

          {testResponseText && (
            <div className="mt-4 p-4 bg-electric-purple/10 border border-electric-purple/20 rounded-lg">
              <h3 className="text-white font-medium mb-2">Agent Response:</h3>
              <p className="text-white/80">{testResponseText}</p>
            </div>
          )}
        </section>

        <div className="flex flex-col gap-4 mt-8">
          <div className="flex gap-4">
            <button
              type="button"
              className={buttonClasses}
              onClick={saveAgentConfig}
              disabled={isSaving}
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Saving...
                </>
              ) : saveSuccess ? (
                <>
                  <Check className="w-5 h-5" /> Saved!
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" /> Save Configuration
                </>
              )}
            </button>

            <button
              type="button"
              className={secondaryButtonClasses}
              onClick={() => setShowPaymentModal(true)}
              disabled={paymentStatusLoading}
            >
              {paymentStatusLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Loading...
                </>
              ) : (
                <>
                  <CreditCard className="w-5 h-5" /> Payment status
                </>
              )}
            </button>
          </div>

          {saveError && (
            <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
              <p>Error: {saveError}</p>
            </div>
          )}

          {paymentError && (
            <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
              <p>Payment Error: {paymentError}</p>
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        .glass-card {
          backdrop-filter: blur(10px);
          border: 1px solid rgba(147, 51, 234, 0.1);
          background: rgba(147, 51, 234, 0.03);
        }

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
