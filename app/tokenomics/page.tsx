import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tokenomics - Soul AI Agents',
  description: 'Token distribution and economics of Soul AI Agents',
}

export default function Tokenomics() {
  const distribution = [
    { category: 'Community', percentage: '40%' },
    { category: 'Development', percentage: '25%' },
    { category: 'Team', percentage: '15%' },
    { category: 'Marketing', percentage: '10%' },
    { category: 'Treasury', percentage: '10%' },
  ]

  return (
    <div className="container mx-auto px-4 py-24">
      <h1 className="text-4xl font-bold mb-12 gradient-text text-center">
        Tokenomics
      </h1>
      
      <div className="max-w-2xl mx-auto">
        <div className="glass-card">
          {distribution.map((item, index) => (
            <div 
              key={item.category}
              className={`
                flex justify-between items-center p-4
                ${index !== distribution.length - 1 ? 'border-b border-white/10' : ''}
              `}
            >
              <span className="text-lg">{item.category}</span>
              <span className="font-mono text-lg">{item.percentage}</span>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 text-white/70">
          More details coming soon in our whitepaper.
        </p>
      </div>
    </div>
  )
} 