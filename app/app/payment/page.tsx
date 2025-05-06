"use client";

import WalletStep from "@/components/app/WalletStep";
import { usePrivy } from "@privy-io/react-auth";

export default function PaymentPage() {
  const { user } = usePrivy();
  return (
    <div>
      <WalletStep user={user} />
    </div>
  );
}
