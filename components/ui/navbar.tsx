"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();

  // Hide navbar on deck page
  if (pathname === "/deck") return null;

  return (
    <nav className="fixed w-full z-50 top-0">
      <div className="backdrop-blur-lg bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Left Side */}
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center">
                <span className="text-xl font-bold gradient-text">
                  Soul Agents
                </span>
              </Link>
              <Link
                href="https://x.com/soul_agents"
                target="_blank"
                className="flex"
              >
                <Image
                  src="/soul-agents-transparent.png"
                  alt="Soul AI Agents"
                  width={32}
                  height={32}
                  className="rounded-full hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>

            {/* Right Side - Wallet/X Connect Placeholder */}
            <div className="flex items-center">
              {/* Privy Plugin Placeholder */}
              <div className="flex items-center justify-center">
                <button className="button-gradient px-4 py-2 rounded-lg text-sm font-bold text-white hover:opacity-90 transition-all">
                  Connect Wallet/X
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
