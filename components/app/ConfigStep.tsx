"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  MessageSquare,
  User,
  Database,
  Save,
  ArrowRight,
} from "lucide-react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { AgentConfigFormState } from "../../app/lib/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAgentConfig, testResponse } from "../../app/lib/api";
import { usePrivy } from "@privy-io/react-auth";
import { tooltips } from "../data";
import FollowAccountsInput from "../../app/components/FollowAccountsInput";
// Motion components
const MotionButton = motion.button;
const MotionSpan = motion.span;
const MotionSection = motion.section;

interface ConfigStepProps {
  agentConfig: AgentConfigFormState;
  updateAgentConfigField: <K extends keyof AgentConfigFormState>(
    field: K,
    value: AgentConfigFormState[K]
  ) => void;
  setCurrentStep: (step: number) => void;
  testTweet: string;
  setTestTweet: (tweet: string) => void;
}

const ConfigStep: React.FC<ConfigStepProps> = ({
  agentConfig,
  updateAgentConfigField,
  setCurrentStep,
  testTweet,
  setTestTweet,
}) => {
  const { user } = usePrivy();
  const [activeField, setActiveField] = useState<string | null>(null);
  const [isContinuing, setIsContinuing] = useState<boolean>(false);
  const [followAccountInput, setFollowAccountInput] = useState<string>("");
  const queryClient = useQueryClient();

  // API mutations
  const { mutate: saveConfig, isPending: isSaving } = useMutation({
    mutationFn: createAgentConfig,
    onSuccess: (data) => {
      if (data.success) {
        queryClient.invalidateQueries({ queryKey: ["agentConfig"] });
      }
    },
  });

  const {
    mutateAsync: testAgentResponse,
    data: testAgentResponseData,
    isPending: isTestingAgentResponsePending,
  } = useMutation({
    mutationFn: () => testResponse(user?.id || "", testTweet, agentConfig),
  });

  // Handler for testing agent response
  const handleTestAgentResponse = async () => {
    await testAgentResponse();
  };

  // Function to save agent configuration
  const saveAgentConfig = async (andContinue = false) => {
    if (andContinue) {
      setIsContinuing(true);
    }

    saveConfig(agentConfig, {
      onSuccess: (response) => {
        if (response.success) {
          if (!andContinue) {
            alert("Configuration saved successfully!");
          } else {
            setTimeout(() => {
              setCurrentStep(2);
              setIsContinuing(false);
            }, 700);
          }
        } else {
          setIsContinuing(false);
          alert(response.error || "Failed to save configuration");
        }
      },
      onError: (error: Error) => {
        setIsContinuing(false);
        console.error("Error saving configuration:", error);
        alert(
          "There was an error saving your configuration. Please try again."
        );
      },
    });
  };

  return (
    <Tooltip.Provider delayDuration={200}>
      <div className="min-h-[calc(100vh-4rem)] pt-32 pb-16 bg-gradient-to-b from-dark-navy via-deep-space to-cosmic-purple">
        <div className="container mx-auto px-4 relative">
          <AnimatePresence>
            {isContinuing ? (
              <motion.div
                key="loading-state"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 flex flex-col items-center justify-center z-50"
              >
                <div className="w-20 h-20 border-4 border-t-electric-purple border-electric-purple/30 rounded-full animate-spin mb-6"></div>
                <p className="text-white text-xl">
                  Saving your configuration...
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="config-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column - Configuration Form */}
                  <div className="space-y-6">
                    <motion.h2
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="text-3xl font-bold text-white"
                    >
                      Configure Your AI Agent
                    </motion.h2>

                    {/* X Username */}
                    <div className="space-y-2">
                      <label className="text-white/80 text-sm">
                        X Username
                      </label>
                      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white">
                        <User className="w-5 h-5 text-electric-purple" />
                        <span>{user?.twitter?.username}</span>
                      </div>
                    </div>

                    {/* Model Selection */}
                    <div className="space-y-2">
                      <label className="text-white/80 text-sm">
                        Model Selection
                      </label>
                      <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white">
                        <span>GPT-4o</span>
                      </div>
                      {/* <select
                        className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white
                               appearance-none cursor-pointer hover:bg-white/10 transition-colors
                               focus:outline-none focus:ring-2 focus:ring-electric-purple/50"
                        value={agentConfig?.model || "gpt4o"}
                        onChange={(e) =>
                          updateAgentConfigField("model", e.target.value)
                        }
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundPosition: "right 1rem center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "1.5em 1.5em",
                          paddingRight: "2.5rem",
                        }}
                      > */}
                      {/* <option value="grok" className="text-black">
                          Grok (Recommended)
                        </option> */}
                      {/* <option value="gpt4o" className="text-black"> */}
                      {/* </option> */}
                      {/* <option value="gemini" className="text-black">
                          Gemini
                        </option> */}
                      {/* </select> */}
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
                              <pre className="whitespace-pre-wrap font-sans">
                                {tooltips.personality}
                              </pre>
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
                                    ${activeField === "personality" ? "bg-white/10 border-electric-purple/50" : ""}
                                    hover:bg-white/7`}
                          placeholder="Define your agent's personality..."
                          value={agentConfig?.personality || ""}
                          onChange={(e) =>
                            updateAgentConfigField(
                              "personality",
                              e.target.value
                            )
                          }
                          onFocus={() => setActiveField("personality")}
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
                              <pre className="whitespace-pre-wrap font-sans">
                                {tooltips.styleRules}
                              </pre>
                              <Tooltip.Arrow className="fill-dark-navy" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      </label>
                      <textarea
                        className="w-full h-24 bg-white/5 border border-white/10 rounded-xl p-4 text-white
                               focus:outline-none focus:ring-2 focus:ring-electric-purple/50 resize-none"
                        placeholder="Define communication style rules..."
                        value={agentConfig?.styleRules || ""}
                        onChange={(e) =>
                          updateAgentConfigField("styleRules", e.target.value)
                        }
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
                              <pre className="whitespace-pre-wrap font-sans">
                                {tooltips.contentRestrictions}
                              </pre>
                              <Tooltip.Arrow className="fill-dark-navy" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      </label>
                      <textarea
                        className="w-full h-24 bg-white/5 border border-white/10 rounded-xl p-4 text-white
                               focus:outline-none focus:ring-2 focus:ring-electric-purple/50 resize-none"
                        placeholder="Define content restrictions..."
                        value={agentConfig?.contentRestrictions || ""}
                        onChange={(e) =>
                          updateAgentConfigField(
                            "contentRestrictions",
                            e.target.value
                          )
                        }
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
                              <pre className="whitespace-pre-wrap font-sans">
                                {tooltips.knowledgeBase}
                              </pre>
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
                          value={agentConfig?.knowledgeBase || ""}
                          onChange={(e) =>
                            updateAgentConfigField(
                              "knowledgeBase",
                              e.target.value
                            )
                          }
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
                            {agentConfig?.exampleTweets?.length || 0}/10 tweets
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
                                <pre className="whitespace-pre-wrap font-sans">
                                  {tooltips.exampleTweets}
                                </pre>
                                <Tooltip.Arrow className="fill-dark-navy" />
                              </Tooltip.Content>
                            </Tooltip.Portal>
                          </Tooltip.Root>
                        </div>
                      </label>
                      <div className="space-y-2">
                        {agentConfig?.exampleTweets?.map((tweet, index) => (
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
                                    const newTweets = [
                                      ...agentConfig.exampleTweets,
                                    ];
                                    newTweets[index] = e.target.value;
                                    updateAgentConfigField(
                                      "exampleTweets",
                                      newTweets
                                    );
                                  }}
                                  rows={2}
                                />
                                <div className="absolute bottom-2 right-2 text-xs text-white/40">
                                  {280 - tweet.length} characters left
                                </div>
                                {agentConfig?.exampleTweets.length > 3 && (
                                  <button
                                    className="absolute top-2 right-2 text-white/40 hover:text-white/80 transition-colors"
                                    onClick={() => {
                                      const newTweets = [
                                        ...agentConfig.exampleTweets,
                                      ];
                                      newTweets.splice(index, 1);
                                      updateAgentConfigField(
                                        "exampleTweets",
                                        newTweets
                                      );
                                    }}
                                  >
                                    ✕
                                  </button>
                                )}
                              </div>
                            </MotionSpan>
                          </div>
                        ))}
                        {agentConfig &&
                          agentConfig?.exampleTweets?.length < 10 && (
                            <MotionButton
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => {
                                updateAgentConfigField("exampleTweets", [
                                  ...agentConfig.exampleTweets,
                                  "",
                                ]);
                              }}
                            >
                              <span className="text-white cursor-pointer flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-white/10 hover:bg-white/15 transition-colors border border-white/20">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                >
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
                      <FollowAccountsInput
                        followAccounts={agentConfig.followAccounts}
                        onUpdateFollowAccounts={(accounts) =>
                          updateAgentConfigField("followAccounts", accounts)
                        }
                        tooltipContent={tooltips.followAccounts}
                      />
                    </MotionSection>

                    {/* Action Buttons */}
                    <div className="flex flex-col gap-4">
                      <MotionButton
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        disabled={isSaving || isContinuing}
                      >
                        <span
                          className={`relative z-10 w-full py-5 px-6 rounded-xl ${
                            isSaving || isContinuing
                              ? "bg-electric-purple/50 cursor-not-allowed"
                              : "bg-electric-purple hover:bg-electric-purple/90"
                          } text-white
                                   border border-electric-purple/50
                                   transition-all duration-300 ease-in-out overflow-hidden group
                                   flex items-center justify-center gap-2 font-medium`}
                          onClick={() => saveAgentConfig(true)}
                        >
                          {isSaving || isContinuing ? (
                            <>
                              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              {isContinuing
                                ? "Proceeding to next step..."
                                : "Saving..."}
                            </>
                          ) : (
                            <>
                              <Save className="w-5 h-5" />
                              Save & Continue
                              <ArrowRight className="w-5 h-5" />
                            </>
                          )}
                        </span>
                      </MotionButton>

                      {/* <MotionButton
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        disabled={isSaving || isContinuing}
                      >
                        <span
                          className={`relative z-10 w-full py-3 px-6 rounded-xl ${
                            isSaving || isContinuing
                              ? "bg-white/5 cursor-not-allowed"
                              : "bg-white/10 hover:bg-white/15"
                          } text-white
                                   border border-white/30
                                   transition-all duration-300 ease-in-out overflow-hidden group
                                   flex items-center justify-center gap-2`}
                          onClick={() => saveAgentConfig(false)}
                        >
                          {isSaving ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                              Saving...
                            </>
                          ) : (
                            <>
                              <Save className="w-4 h-4" />
                              Save Configuration
                            </>
                          )}
                        </span>
                      </MotionButton> */}
                    </div>
                  </div>

                  {/* Right Column - Test Interface */}
                  <div className="space-y-6">
                    <motion.h2
                      className="text-3xl font-bold text-white"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
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
                            disabled={isTestingAgentResponsePending}
                            onClick={handleTestAgentResponse}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg 
                                   bg-electric-purple/20 text-electric-purple border border-electric-purple/50
                                   hover:bg-electric-purple/30 transition-all"
                          >
                            {isTestingAgentResponsePending ? (
                              <>
                                <div className="w-4 h-4 border-2 border-electric-purple border-t-transparent rounded-full animate-spin"></div>
                                Loading an answer...
                              </>
                            ) : (
                              <>
                                <Bot className="w-4 h-4" />
                                Test Response
                              </>
                            )}
                          </button>
                        </motion.span>
                      </div>
                    </div>

                    {/* Agent Response */}
                    {testAgentResponseData && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <div className="flex items-start gap-3">
                          <MessageSquare className="w-5 h-5 text-electric-purple mt-1" />
                          <p className="text-white/90">
                            {testAgentResponseData?.result}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Tooltip.Provider>
  );
};

export default ConfigStep;
