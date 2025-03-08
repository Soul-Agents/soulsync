import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  // Hide footer on deck page
  if (pathname === "/deck") return null;

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { label: "X (Twitter)", href: "https://x.com/soul_agents" },
    { label: "Telegram", href: "https://t.me/soul_agents" },
  ];

  return (
    <footer className="border-t border-white/10 w-full relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-lg -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="flex flex-col items-center justify-center mb-8">
          <h3 className="gradient-text font-semibold mb-6 text-xl">Soul Agents</h3>
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-link hover:text-electric-purple transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <div className="text-white/60 text-sm">
            © {currentYear} Soul Agents. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
