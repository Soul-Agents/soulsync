import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const pathname = usePathname();

  // Hide footer on deck page
  if (pathname === "/deck") return null;

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: "Reply Guy", href: "/reply-guy" },
    { label: "X (Twitter)", href: "https://x.com/soul_agents" },
    { label: "Telegram", href: "https://t.me/soul_agents" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="border-t border-white/10 w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-lg -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="flex flex-col items-center justify-center mb-8">
          <Link href="/" className="flex items-center space-x-3 mb-6 group">
            <h3 className="gradient-text font-semibold text-xl group-hover:opacity-80 transition-opacity">
              Soul Agents
            </h3>
            <Image
              src="/soul-agents-transparent.png"
              alt="Soul AI Agents"
              width={32}
              height={32}
              className="rounded-full hover:opacity-80 transition-opacity"
            />
          </Link>
          <div className="flex gap-4 flex-wrap justify-center">
            {[...socialLinks, ...legalLinks].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`nav-link hover:text-electric-purple transition-colors text-sm${
                  link.label === "Reply Guy" ? " font-bold" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <div className="text-sm text-white/70 space-y-1 text-center mb-2">
            <div>Built for founders and brands who value signal over noise.</div>
          </div>
          <div className="text-white/60 text-sm">
            © {currentYear} Soul Agents. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
