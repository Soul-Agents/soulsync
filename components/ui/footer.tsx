import Link from "next/link"

export function Footer() {  // Make sure to export the component
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Soul
            </h3>
            <p className="text-gray-400">
              Empowering AI-driven business development and marketing
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/whitepaper" className="text-gray-400 hover:text-white transition-colors">
                  Whitepaper
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="space-y-2">
              <a 
                href="https://x.com/soul_agents" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                X (Twitter)
              </a>
              <a 
                href="https://t.me/soul_agents" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Telegram
              </a>
              <a 
                href="https://discord.gg/soul_agents" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-gray-400 hover:text-white transition-colors"
              >
                Discord
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-400">
          © {new Date().getFullYear()} Soul. All rights reserved.
        </div>
      </div>
    </footer>
  )
}