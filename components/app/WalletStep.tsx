"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Check,
  Wallet,
  AlertCircle,
  CreditCard,
  ArrowLeft,
} from "lucide-react";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { useMutation } from "@tanstack/react-query";
import { makePayment } from "../../app/lib/api";

import { createWalletClient, custom, erc20Abi, Hex, parseUnits } from "viem";
import { sepolia } from "viem/chains";
import router from "next/router";

interface PaymentParams {
  clientId: string;
  amount: string;
  txHash: string;
}

interface PaymentResponse {
  success: boolean;
  error?: string;
}

const WalletStep = () => {
  const { login, authenticated, connectWallet, user: privyUser } = usePrivy();
  const { wallets, ready } = useWallets();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [error, setError] = useState<string>("");
  const [txHash, setTransactionHash] = useState<string>("");

  const hasConnectedWallet = wallets.length > 0;
  const {
    mutate: processPayment,
    isPending: isPaymentPending,
    isError: paymentError,
  } = useMutation<PaymentResponse, Error, PaymentParams>({
    mutationFn: makePayment,
    onSuccess: (data) => {
      console.log("DATA", data);
      console.log("txHash", txHash);
      console.log("DATA SUCCESS", data.s);
      if (data.success) {
        setTransactionHash(txHash || "");
        setPaymentComplete(true);
        setIsProcessingPayment(false);
      }
    },
    onError: (error) => {
      console.error("Payment error:", error);
      setError("An error occurred during payment processing");
      setIsProcessingPayment(false);
    },
  });

  console.log("PAYMENT ERROR", paymentError);

  const handleConnectWallet = async () => {
    if (!authenticated) {
      login();
      return;
    }

    try {
      connectWallet({ walletChainType: "ethereum-only" });
    } catch (error) {
      console.error("Error connecting wallet:", error);
      setError("Failed to connect your wallet. Please try again.");
    }
  };

  const handleMakePayment = async () => {
    setIsProcessingPayment(true);
    setError("");

    try {
      const provider = await wallets[0]?.getEthereumProvider();
      console.log("PROVIDER", provider);

      if (!provider) {
        throw new Error("Wallet provider not available");
      }

      if (!user?.id) {
        throw new Error("User ID not available");
      }
      // const address = wallets[0]?.address;
      // const message = "This is the message I am signing";
      // const signature = await provider.request({
      //   method: "personal_sign",
      //   params: [message, address],
      // });

      // const USDT_CONTRACT = "0x7169D38820dfd117C3FA1f22a697dBA58d90BA06"; // sepolia usdt
      const ethContract = "0x394064b14cd417ea79d1A44bD4921d8F392e02Ca";
      const toAddress = "0x394064b14cd417ea79d1A44bD4921d8F392e02Ca";
      // const amount = parseUnits("100", 6); // 100 USDT with 6 decimals
      const amount = parseUnits("0.01", 18); // 0.01 ETH with 18 decimals

      const walletClient = createWalletClient({
        account: wallets[0]?.address as Hex,
        chain: sepolia,
        transport: custom(provider),
      });
      const txHash = await walletClient.writeContract({
        address: ethContract,
        abi: erc20Abi,
        functionName: "transfer",
        args: [toAddress, amount],
      });
      setTransactionHash(txHash);
      console.log("TX", txHash);

      processPayment({
        clientId: privyUser?.id || "",
        amount: "0.01", // ETH amount
        txHash: txHash,
      });
    } catch (error: any) {
      console.error("Payment error:", error);
      console.log("ERROR MESSAGE", error.message);
      setError("An error occurred during payment");
      setIsProcessingPayment(false);
    }
  };

  // Get wallet address for display
  const getWalletAddress = () => {
    if (wallets.length > 0 && wallets[0]) {
      const wallet = wallets[0];
      const address = wallet.address as string;
      if (address) {
        return `${address.slice(0, 8)}...${address.slice(-6)}`;
      }
    }
    return "Address unavailable";
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
              {paymentComplete ? "Payment Complete" : "Connect Wallet & Pay"}
            </motion.span>
          </div>

          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 space-y-6">
            <AnimatePresence mode="wait">
              {!paymentComplete ? (
                <motion.div
                  key="payment-content"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="mb-6 text-white/80 space-y-4">
                    <p className="text-lg font-semibold">Final Step: Payment</p>
                    <p>
                      Your AI agent is almost ready! Connect your wallet and
                      complete the payment to activate your agent.
                    </p>

                    <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center w-16 h-16 bg-electric-purple/20 rounded-full mb-4">
                          <Wallet className="w-8 h-8 text-electric-purple" />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {hasConnectedWallet
                            ? "Wallet Connected"
                            : "Connect Your Wallet"}
                        </h3>

                        {hasConnectedWallet ? (
                          <div className="flex flex-col items-center">
                            <div className="flex items-center gap-2 text-green-400 mb-4">
                              <Check className="w-5 h-5" />
                              <span>Wallet connected successfully</span>
                            </div>
                            <div className="bg-white/5 rounded-lg p-3 mb-4 w-full text-center">
                              <p className="text-white text-sm font-mono truncate">
                                {getWalletAddress()}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="text-center mb-4 flex flex-col items-center">
                            <p className="text-white/70 mb-4">
                              Connect your wallet to proceed with payment
                            </p>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-5 py-3 bg-electric-purple rounded-lg text-white flex items-center gap-2"
                              onClick={handleConnectWallet}
                            >
                              <Wallet className="w-5 h-5" />
                              Connect Wallet
                            </motion.button>
                          </div>
                        )}

                        {hasConnectedWallet && (
                          <div className="mt-6 w-full">
                            <div className="border-t border-white/10 pt-6 mb-6"></div>

                            <div className="flex flex-col items-center">
                              <div className="flex items-center justify-center w-16 h-16 bg-green-500/20 rounded-full mb-4">
                                <CreditCard className="w-8 h-8 text-green-500" />
                              </div>
                              <h3 className="text-xl font-semibold text-white mb-2">
                                Complete Payment
                              </h3>
                              <p className="text-white/70 mb-4 text-center">
                                One-time payment of 0.01 ETH for your agent
                                subscription
                              </p>

                              <div className="bg-white/5 rounded-lg p-4 mb-6 w-full">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-white/70">
                                    Agent Subscription
                                  </span>
                                  <span className="text-white font-medium">
                                    0.01 ETH
                                  </span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                  <span className="text-white/50">
                                    Network Fee (est.)
                                  </span>
                                  <span className="text-white/50">
                                    ~0.001 ETH
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {error ||
                      (paymentError && (
                        <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                          <div className="flex items-center gap-2 text-red-500">
                            <AlertCircle className="w-5 h-5 flex-shrink-0" />
                            <p className="text-red-500">
                              {error || "Error processing payment"}
                            </p>
                          </div>
                        </div>
                      ))}

                    <div className="flex flex-col gap-4 pt-4">
                      {isProcessingPayment ? (
                        <div className="py-8 flex flex-col items-center justify-center">
                          <div className="animate-pulse flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full border-4 border-t-electric-purple border-r-electric-purple/30 border-b-electric-purple/10 border-l-electric-purple/60 animate-spin"></div>
                            <p className="text-white/80">
                              Processing your payment...
                            </p>
                            <p className="text-white/50 text-sm">
                              Please confirm the transaction in your wallet
                            </p>
                          </div>
                        </div>
                      ) : (
                        <>
                          {hasConnectedWallet && (
                            <motion.button
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              disabled={isPaymentPending}
                              className="relative z-10 w-full py-5 px-6 rounded-xl bg-electric-purple text-white
                                   border border-electric-purple/50 hover:bg-electric-purple/90
                                   transition-all duration-300 ease-in-out overflow-hidden
                                   flex items-center justify-center gap-2 font-medium"
                              onClick={handleMakePayment}
                            >
                              {isPaymentPending ? (
                                <>
                                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                  Processing...
                                </>
                              ) : (
                                <>
                                  Complete Payment
                                  <ArrowRight className="w-5 h-5" />
                                </>
                              )}
                            </motion.button>
                          )}

                          <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            disabled={isProcessingPayment}
                            className={`relative z-10 w-full py-3 px-6 rounded-xl bg-white/10 text-white
                                   border border-white/30 hover:bg-white/15
                                   transition-all duration-300 ease-in-out overflow-hidden
                                   flex items-center justify-center gap-2 ${isProcessingPayment ? "opacity-50 cursor-not-allowed" : ""}`}
                            // onClick={() =>
                            //   !isProcessingPayment && setCurrentStep(3)
                            // }
                          >
                            <ArrowLeft className="w-5 h-5" />
                            Back to X Connection
                          </motion.button>
                        </>
                      )}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="payment-success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="text-center space-y-6">
                    <div className="flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Check className="w-8 h-8 text-green-500" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h2 className="text-2xl font-bold text-white">
                        Payment Successful!
                      </h2>
                      <p className="text-white/70">
                        Your payment has been processed successfully. Your AI
                        agent is now being deployed.
                      </p>
                    </div>

                    <div className="p-4 bg-white/5 rounded-lg border border-white/10 text-left">
                      <h3 className="text-white font-medium mb-2">
                        Transaction Details:
                      </h3>
                      <p className="text-white/70 text-sm">
                        <span className="text-white/50">Amount:</span>{" "}
                        <span className="text-electric-purple">0.01 ETH</span>
                      </p>
                      <p className="text-white/70 text-sm mt-1">
                        <span className="text-white/50">Transaction:</span>{" "}
                        <a
                          href={`https://etherscan.io/tx/${txHash}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-electric-purple hover:underline font-mono"
                        >
                          {txHash.slice(0, 8)}...
                          {txHash.slice(-6)}
                        </a>
                      </p>
                      <p className="text-white/70 text-sm mt-3">
                        Your subscription is now active and will remain valid
                        for 30 days.
                      </p>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="relative z-10 w-full py-5 px-6 rounded-xl bg-electric-purple text-white
                             border border-electric-purple/50 hover:bg-electric-purple/90
                             transition-all duration-300 ease-in-out overflow-hidden
                             flex items-center justify-center gap-2 font-medium"
                      onClick={() => router.push("/app/edit")}
                    >
                      Continue to Dashboard
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletStep;
