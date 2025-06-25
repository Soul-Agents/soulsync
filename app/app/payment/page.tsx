"use client";

import WalletStep from "@/components/app/WalletStep";
import { usePrivy } from "@privy-io/react-auth";
import { useSearchParams } from "next/navigation";

export default function PaymentPage() {
  const { user } = usePrivy();
  const searchParams = useSearchParams();
  const isExtension = searchParams.get("extend") === "true";

  return (
    <div>
      <WalletStep isExtension={isExtension} />
    </div>
  );
}
