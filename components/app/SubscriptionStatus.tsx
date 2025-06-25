"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getPaymentStatus, makePayment } from "../../app/lib/api";
import {
  CreditCard,
  Calendar,
  ExternalLink,
  Plus,
  Check,
  Loader2,
} from "lucide-react";
import { buttonClasses, sectionClasses } from "@/app/app/edit/page";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { PaymentParams, PaymentResponse } from "./WalletStep";
import { createWalletClient, custom, erc20Abi, Hex, parseUnits } from "viem";
import { base } from "viem/chains";

// Skeleton Components
const SkeletonCard = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white/5 rounded-xl p-6 border border-electric-purple/20 animate-pulse">
    {children}
  </div>
);

const SkeletonIcon = () => (
  <div className="w-10 h-10 bg-white/10 rounded-lg animate-pulse" />
);

const SkeletonText = ({ className = "h-4" }: { className?: string }) => (
  <div className={`bg-white/10 rounded animate-pulse ${className}`} />
);

const SkeletonBadge = () => (
  <div className="w-16 h-8 bg-white/10 rounded-full animate-pulse" />
);

const SubscriptionSkeletons = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Current Plan Skeleton */}
    <SkeletonCard>
      <div className="flex items-center gap-3 mb-4">
        <SkeletonIcon />
        <div className="flex-1">
          <SkeletonText className="h-5 w-24 mb-2" />
          <SkeletonText className="h-4 w-32" />
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <SkeletonText className="h-4 w-12" />
          <SkeletonBadge />
        </div>
        <div className="flex justify-between items-center">
          <SkeletonText className="h-4 w-16" />
          <SkeletonText className="h-4 w-20" />
        </div>
        <div className="flex justify-between items-center">
          <SkeletonText className="h-4 w-20" />
          <SkeletonText className="h-4 w-16" />
        </div>
      </div>
    </SkeletonCard>

    {/* Latest Payment Skeleton */}
    <SkeletonCard>
      <div className="flex items-center gap-3 mb-4">
        <SkeletonIcon />
        <div className="flex-1">
          <SkeletonText className="h-5 w-28 mb-2" />
          <SkeletonText className="h-4 w-32" />
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <SkeletonText className="h-4 w-12" />
          <SkeletonText className="h-4 w-20" />
        </div>
        <div className="flex justify-between items-center">
          <SkeletonText className="h-4 w-20" />
          <SkeletonText className="h-4 w-20" />
        </div>
        <div className="pt-2">
          <SkeletonText className="h-4 w-32" />
        </div>
      </div>
    </SkeletonCard>

    {/* Extend Plan Skeleton */}
    <SkeletonCard>
      <div className="flex items-center gap-3 mb-4">
        <SkeletonIcon />
        <div className="flex-1">
          <SkeletonText className="h-5 w-20 mb-2" />
          <SkeletonText className="h-4 w-24" />
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <SkeletonText className="h-4 w-12" />
          <SkeletonText className="h-4 w-16" />
        </div>
        <div className="flex justify-between items-center">
          <SkeletonText className="h-4 w-16" />
          <SkeletonText className="h-4 w-16" />
        </div>
        <div className="pt-2">
          <SkeletonText className="h-3 w-48" />
        </div>
      </div>
    </SkeletonCard>
  </div>
);

export default function SubscriptionStatus() {
  const { login, authenticated, connectWallet, user } = usePrivy();

  const router = useRouter();
  const queryClient = useQueryClient();
  const { wallets } = useWallets();
  const hasConnectedWallet = wallets.length > 0;
  const [txHash, setTransactionHash] = useState("");
  const {
    mutate: processPayment,
    isPending: isPaymentPending,
    isError: paymentMutationError,
  } = useMutation<PaymentResponse, Error, PaymentParams>({
    mutationFn: makePayment,
    onSuccess: (data) => {
      console.log("DATA", data);
      if (data.success) {
        setTransactionHash(txHash || "");
        queryClient.invalidateQueries({ queryKey: ["paymentStatus"] });
      }
    },
    onError: (error) => {
      console.error("Payment error:", error);
    },
  });
  const [isMakingPayment, setIsMakingPayment] = useState(false);
  const [paymentError, setPaymentError] = useState("");
  // Fetch payment status
  const { data: paymentStatus, isLoading: paymentStatusLoading } = useQuery({
    queryKey: ["paymentStatus"],
    queryFn: () => getPaymentStatus(user?.id!),
    enabled: !!user?.id,
    retry: false,
    throwOnError: false,
  });
  const handleConnectWallet = async () => {
    if (!authenticated) {
      login();
      return;
    }

    try {
      connectWallet({ walletChainType: "ethereum-only" });
    } catch (error) {
      console.error("Error connecting wallet:", error);
    }
  };
  const handleClickExtendSubscription = async () => {
    if (!user?.id) return;
    if (!hasConnectedWallet) {
      await handleConnectWallet();
      await handleMakePayment();
    } else {
      await handleMakePayment();
    }
  };
  const handleMakePayment = async () => {
    const paymentAmount = "99"; // 99 usdc
    setIsMakingPayment(true);
    try {
      const provider = await wallets[0]?.getEthereumProvider();
      console.log("PROVIDER", provider);

      if (!provider) {
        throw new Error("Wallet provider not available");
      }

      if (!user?.id) {
        throw new Error("User ID not available");
      }

      const toAddress = "0x394064b14cd417ea79d1A44bD4921d8F392e02Ca"; // seba wallet
      const usdcContract = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"; // base usdc
      const amount = parseUnits(paymentAmount, 6); // USDC with 6 decimals

      const walletClient = createWalletClient({
        account: wallets[0]?.address as Hex,
        chain: base,
        transport: custom(provider),
      });
      const txHash = await walletClient.writeContract({
        address: usdcContract,
        abi: erc20Abi,
        functionName: "transfer",
        args: [toAddress, amount],
      });
      setTransactionHash(txHash);
      console.log("TX", txHash);

      processPayment({
        clientId: user?.id || "",
        amount: paymentAmount, // USDC amount
        txHash: txHash,
      });
    } catch (error: any) {
      console.error("Payment error:", error);
      console.log("ERROR MESSAGE", error.message);
      setPaymentError(error.message.split(".")[0]);
    } finally {
      setIsMakingPayment(false);
    }
  };
  const daysRemaining = (validUntil: string) => {
    if (!validUntil) return 0;

    try {
      // Parse the valid_until date
      const validUntilDate = new Date(validUntil);
      // Check if the date is valid
      if (isNaN(validUntilDate.getTime())) {
        console.error("Invalid valid_until date:", validUntil);
        return 0;
      }

      // Get current date and set to start of day for consistent comparison
      const now = new Date();
      const currentDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      );

      // Set valid_until to start of day for consistent comparison
      const validUntilStart = new Date(
        validUntilDate.getFullYear(),
        validUntilDate.getMonth(),
        validUntilDate.getDate()
      );

      // Calculate difference in milliseconds
      const diffTime = validUntilStart.getTime() - currentDate.getTime();

      // Convert to days (positive if valid_until is in the future)
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      // Return 0 if expired (negative or zero days), otherwise return positive days
      return diffDays > 0 ? diffDays : 0;
    } catch (error) {
      console.error("Error calculating days remaining:", error);
      return 0;
    }
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A";

    try {
      const date = new Date(dateString);

      // Check if the date is valid
      if (isNaN(date.getTime())) return "Invalid Date";

      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid Date";
    }
  };

  // Helper function to get subscription status
  const getSubscriptionStatus = () => {
    if (!paymentStatus?.data)
      return {
        status: "No Data",
        color: "text-gray-400",
        bgColor: "bg-gray-500/20",
      };

    const isPaid = paymentStatus.data.is_paid;
    const validUntil = paymentStatus.data.valid_until;
    const daysLeft = daysRemaining(validUntil);

    if (!isPaid) {
      return {
        status: "Inactive",
        color: "text-red-400",
        bgColor: "bg-red-500/20",
      };
    }

    if (daysLeft === 0) {
      return {
        status: "Expired",
        color: "text-red-400",
        bgColor: "bg-red-500/20",
      };
    }

    if (daysLeft <= 7) {
      return {
        status: "Expiring Soon",
        color: "text-red-400",
        bgColor: "bg-red-500/20",
      };
    }

    if (daysLeft <= 14) {
      return {
        status: "Active",
        color: "text-yellow-400",
        bgColor: "bg-yellow-500/20",
      };
    }

    return {
      status: "Active",
      color: "text-green-400",
      bgColor: "bg-green-500/20",
    };
  };

  // Helper function to get days left color
  const getDaysLeftColor = (daysLeft: number) => {
    if (daysLeft <= 7) return "text-red-400";
    if (daysLeft <= 14) return "text-yellow-400";
    return "text-green-400";
  };

  return (
    <section className={sectionClasses}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold gradient-text">Subscription</h2>
        <button
          onClick={handleClickExtendSubscription}
          disabled={isMakingPayment || paymentStatusLoading}
          className={`${buttonClasses} !px-4 !py-2 text-sm 
          `}
        >
          {isMakingPayment ? (
            <div className="w-full flex items-center justify-center">
              <Loader2 className="w-4 h-4 animate-spin" />
            </div>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              Extend 30 Days
            </>
          )}
        </button>
      </div>

      {paymentStatusLoading ? (
        <SubscriptionSkeletons />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Current Subscription Status */}
          <div className="bg-white/5 rounded-xl p-6 border border-electric-purple/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-electric-purple/20 rounded-lg flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-electric-purple" />
              </div>
              <div>
                <h3 className="text-white font-medium">Current Plan</h3>
                <p className="text-white/60 text-sm">
                  {paymentStatus?.data?.is_paid
                    ? "30-day subscription"
                    : "No active subscription"}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">Status</span>
                {(() => {
                  const statusInfo = getSubscriptionStatus();
                  return (
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${statusInfo.bgColor} ${statusInfo.color}`}
                    >
                      {statusInfo.status}
                    </span>
                  );
                })()}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">Amount</span>
                <span className="text-white font-medium">
                  {paymentStatus?.data?.payment_amount
                    ? `${paymentStatus.data.payment_amount} USDC`
                    : "N/A"}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">Days Left</span>
                {(() => {
                  const daysLeft = paymentStatus?.data?.valid_until
                    ? daysRemaining(paymentStatus.data.valid_until)
                    : 0;
                  const colorClass = getDaysLeftColor(daysLeft);
                  return (
                    <span className={`font-medium ${colorClass}`}>
                      {daysLeft} days
                    </span>
                  );
                })()}
              </div>
            </div>
          </div>

          {/* Latest Transaction */}
          <div className="bg-white/5 rounded-xl p-6 border border-electric-purple/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <h3 className="text-white font-medium">Latest Payment</h3>
                <p className="text-white/60 text-sm">
                  {paymentStatus?.data?.payment_date
                    ? "Transaction details"
                    : "No payment recorded"}
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">Date</span>
                <span className="text-white text-sm">
                  {paymentStatus?.data?.payment_date
                    ? formatDate(paymentStatus.data.payment_date)
                    : "N/A"}
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">Valid Until</span>
                <span className="text-white text-sm">
                  {paymentStatus?.data?.valid_until
                    ? formatDate(paymentStatus.data.valid_until)
                    : "N/A"}
                </span>
              </div>

              {paymentStatus?.data?.tx_hash && (
                <div className="pt-2">
                  <a
                    href={`https://basescan.org/tx/${paymentStatus.data.tx_hash}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-electric-purple hover:text-electric-purple/80 text-sm flex items-center gap-1"
                  >
                    View Transaction
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Extension Info */}
          <button
            className="bg-white/5 rounded-xl p-6 border border-electric-purple/20 cursor-pointer text-left w-full hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white/5"
            onClick={handleClickExtendSubscription}
            disabled={isMakingPayment || paymentStatusLoading}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-neon-pink/20 rounded-lg flex items-center justify-center">
                <Plus className="w-5 h-5 text-neon-pink" />
              </div>
              <div>
                <h3 className="text-white font-medium">Extend Plan</h3>
                <p className="text-white/60 text-sm">Add 30 more days</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">Price</span>
                <span className="text-white font-medium">99 USDC</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-white/60 text-sm">Duration</span>
                <span className="text-white text-sm">30 days</span>
              </div>

              <div className="pt-2">
                <p className="text-white/40 text-xs">
                  Payment processed on Base network using USDC
                </p>
              </div>
            </div>
          </button>
        </div>
      )}

      {paymentError && (
        <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
          <p>Payment Error: {paymentError}</p>
        </div>
      )}
    </section>
  );
}
