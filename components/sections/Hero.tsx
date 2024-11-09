import Link from 'next/link'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-6xl font-bold gradient-text mb-6">
            AI-Powered Crypto Trading
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Experience the future of trading with our advanced AI algorithms
          </p>
          <div className="flex gap-4 justify-center">
            <Link 
              href="/dashboard" 
              className="button-gradient px-8 py-3"
            >
              Get Started
            </Link>
            <Link 
              href="#features" 
              className="glass-card px-8 py-3"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}