import { useState } from "react";
import { motion } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";

const MotionSpan = motion.span;

interface FollowAccountsInputProps {
  followAccounts: string[];
  onUpdateFollowAccounts: (accounts: string[]) => void;
  tooltipContent?: string;
}

export default function FollowAccountsInput({
  followAccounts,
  onUpdateFollowAccounts,
  tooltipContent,
}: FollowAccountsInputProps) {
  const [followAccountInput, setFollowAccountInput] = useState<string>("");
  const [activeField, setActiveField] = useState<string | null>(null);

  return (
    <div>
      <label className="text-white/80 text-sm flex items-center justify-between mb-2">
        Add accounts to follow and to interact with
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/60">
            {followAccounts
              ? `${followAccounts.length} account${followAccounts.length > 1 ? "s" : ""} added`
              : "No accounts added yet"}
          </span>
          {tooltipContent && (
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
                    {tooltipContent}
                  </pre>
                  <Tooltip.Arrow className="fill-dark-navy" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          )}
        </div>
      </label>
      <div className="space-y-2">
        <MotionSpan
          whileHover={{ scale: 1.01 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="relative">
            <input
              type="text"
              className="w-full bg-transparent border border-white/10 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-electric-purple/50 resize-none"
              placeholder="Type an account name and press Enter or Space"
              value={followAccountInput}
              onChange={(e) => {
                const value = e.target.value;
                setFollowAccountInput(value);
                if (value.endsWith(" ") || value.endsWith(",")) {
                  const account = value.slice(0, -1).trim();
                  if (account && !followAccounts.includes(account)) {
                    onUpdateFollowAccounts([...followAccounts, account]);
                  }
                  setFollowAccountInput("");
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  const account = followAccountInput.trim();
                  if (account && !followAccounts.includes(account)) {
                    onUpdateFollowAccounts([...followAccounts, account]);
                  }
                  setFollowAccountInput("");
                }
              }}
              onFocus={() => setActiveField("followAccounts")}
              onBlur={() => setActiveField(null)}
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {followAccounts.map((account, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1.5 bg-white/5 hover:bg-white/10 
                       border border-white/10 rounded-lg group transition-colors"
              >
                <span className="text-white/80">@{account}</span>
                <button
                  onClick={() => {
                    const newAccounts = [...followAccounts];
                    newAccounts.splice(index, 1);
                    onUpdateFollowAccounts(newAccounts);
                  }}
                  className="text-white/40 hover:text-white/80 transition-colors"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </MotionSpan>
      </div>
    </div>
  );
}
