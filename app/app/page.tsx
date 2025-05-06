"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { usePrivy } from "@privy-io/react-auth";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getAgentConfig } from "../lib/api";
import { Navbar } from "../../components/ui/navbar";
import { AgentConfigFormState } from "../lib/types";
import ApiKeyStep from "@/components/app/ApiKeyStep";
import LoadingOverlay from "@/components/ui/LoadingOverlay";
import ConfigStep from "@/components/app/ConfigStep";
import ConnectStep from "@/components/app/ConnectStep";

export default function AppPage() {
  // Step tracking: 1 = config, 2 = API key, 3 = connect to X, 4 = wallet & payment, 5 = success
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isConnecting, setIsConnecting] = useState<boolean>(false);
  const [connectionComplete, setConnectionComplete] = useState<boolean>(false);

  const [isNavigating, setIsNavigating] = useState<boolean>(false);
  const [isChangingStep, setIsChangingStep] = useState<boolean>(false);
  const [testTweet, setTestTweet] = useState<string>(
    "Web3 gaming is the future! What do you think about @immutable and their zkEVM? 🎮"
  );
  // API key states

  const { user, authenticated, ready } = usePrivy();
  const router = useRouter();
  useEffect(() => {
    if (ready && !user) {
      router.push("/");
    }
  }, [ready, user, router]);
  // Default empty configuration
  const defaultConfig: AgentConfigFormState = {
    username: "",
    personality: "",
    styleRules: "",
    contentRestrictions: "",
    knowledgeBase: "",
    model: "grok",
    exampleTweets: [
      "Our AI agents are processing real-time data right now 🔥 Current metrics show 90% efficiency gains ⚡",
      "Fascinating use case! This matches perfectly with our current infrastructure capabilities...",
      "Here's where our architecture really shines - let me show you how this works in practice...",
    ],
    followAccounts: ["@elonmusk", "@sama", "@naval"],
  };

  // Initialize state with null to indicate loading state
  const [agentConfig, setAgentConfig] = useState<AgentConfigFormState | null>(
    null
  );

  // Query for getting agent config
  const { data: savedConfig, isLoading: isLoadingConfig } = useQuery({
    queryKey: ["agentConfig", user?.id],
    queryFn: () => getAgentConfig(user?.id!),
    enabled: !!user?.id,
    retry: false,
    throwOnError: false,
  });

  // Custom step change function with loading transition
  const handleStepChange = (step: number) => {
    setIsChangingStep(true);
    // Short delay to show loading state
    setTimeout(() => {
      setCurrentStep(step);
      setIsChangingStep(false);
    }, 500);
  };

  useEffect(() => {
    if (!isLoadingConfig && savedConfig?.is_active) {
      setIsNavigating(true);
      router.push("/app/edit");
    }
  }, [savedConfig, isLoadingConfig, router]);
  console.log(currentStep);
  useEffect(() => {
    console.log(savedConfig && savedConfig.has_twitter_keys);
    if (savedConfig && savedConfig.has_twitter_keys) {
      console.log("has twitter keys");
      handleStepChange(3);
    } else if (savedConfig && !savedConfig.is_active) {
      handleStepChange(2);
    }
  }, [savedConfig]);

  // Update agentConfig when savedConfig changes or when user info changes
  useEffect(() => {
    if (savedConfig) {
      // Convert backend config to form state
      const formState: AgentConfigFormState = {
        username: savedConfig.user_name,
        personality: savedConfig.user_personality,
        styleRules: savedConfig.style_rules,
        contentRestrictions: savedConfig.content_restrictions,
        knowledgeBase: savedConfig.knowledge_base,
        model: savedConfig.model_config["model"] || "grok",
        exampleTweets: savedConfig.example_tweets,
        followAccounts: [
          ...savedConfig.ai_and_agents,
          ...savedConfig.web3_builders,
          ...savedConfig.defi_experts,
          ...savedConfig.thought_leaders,
          ...savedConfig.traders_and_analysts,
        ],
      };
      setAgentConfig(formState);
    } else if (!isLoadingConfig) {
      // If we don't have backend data and we're not loading, use default config with current username
      setAgentConfig({
        ...defaultConfig,
        username: user?.id || "",
      });
    }
  }, [savedConfig, isLoadingConfig, user?.id]);

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

  // Determine if we're in a loading state
  const isLoading =
    !ready || (!authenticated && ready) || isLoadingConfig || !agentConfig;

  return (
    <>
      <Navbar />

      {/* Show loading overlay for different loading states */}
      {isNavigating && <LoadingOverlay message="Navigating, please wait..." />}
      {isChangingStep && <LoadingOverlay message="Loading next step..." />}
      {isLoading && <LoadingOverlay message="Loading your profile..." />}

      {!isLoading && !isNavigating && !isChangingStep && (
        <>
          {currentStep === 1 && agentConfig && (
            <ConfigStep
              agentConfig={agentConfig}
              updateAgentConfigField={updateAgentConfigField}
              setCurrentStep={handleStepChange}
              testTweet={testTweet}
              setTestTweet={setTestTweet}
            />
          )}

          {currentStep === 2 && (
            <ApiKeyStep setCurrentStep={handleStepChange} />
          )}

          {currentStep === 3 && (
            <ConnectStep
              user={user}
              connectionComplete={connectionComplete}
              setConnectionComplete={setConnectionComplete}
              isConnecting={isConnecting}
              setIsConnecting={setIsConnecting}
              setCurrentStep={handleStepChange}
            />
          )}

          {/* {currentStep === 4 && (
            <WalletStep user={user} setCurrentStep={handleStepChange} />
          )} */}

          {/* {currentStep === 5 && (
            <SuccessStep
              agentConfig={agentConfig}
              setCurrentStep={handleStepChange}
            />
          )} */}
        </>
      )}
    </>
  );
}
