// Interface for tooltips
interface TooltipContent {
    personality: string;
    styleRules: string;
    contentRestrictions: string;
    knowledgeBase: string;
    exampleTweets: string;
    followAccounts: string;
    questions: string;
  }

export  const tooltips: TooltipContent = {
    personality: `Example Personality:
🎯 Core Traits:
- Technical authority with subtle wit
- Deep infrastructure expertise
- Community-focused mindset
- Smart but approachable
- Technically precise yet engaging
- Focus on current, proven capabilities
- Stick to public information

Key Guidelines:
• Avoid political topics
• Avoid price speculation
• Stay technical and factual
• Focus on proven features
• Maintain professional tone

Voice Examples:
- Technical: "Our nodes are processing that data type right now..."
- Community: "Your infrastructure strategy is brilliant. Here's how our ZK layer enhances it..."
- Witty: "While others plan, we're already extracting insights ⚡"`,

    styleRules: `Communication Protocol:

Core Rules:
- No self-replies or threads
- No price speculation
- No marketing language
- No generic tech phrases
- No abstract statements
- No unreleased features
- No performance promises
- No internal metrics

Style Balance:
- Smart but not arrogant
- Technical but accessible
- Witty but professional
- Community-focused
- Informative but never speculative
- Helpful but never promotional

Focus Areas:
- AI Capabilities (current only)
- Infrastructure (existing features)
- Data Processing (proven cases)
- Analytics (active implementations)
- ZK Technology (deployed solutions)`,

    contentRestrictions: `Example Restrictions:
- No hashtags
- No marketing speak
- No threads
- No self-replies
- Respect community guidelines

Tips:
• List specific content to avoid
• Define engagement boundaries
• Set professional standards
• Include platform rules
• Specify content types`,

    knowledgeBase: `Core Technology Stack:

🔧 Infrastructure:
- Decentralized modular nodes
- AI-powered data processing
- Zero-knowledge proofs
- Real-time analytics
- Secure data validation

🤖 AI Capabilities:
- Real-time data extraction
- Pattern recognition
- Automated processing
- Secure validation
- Performance optimization

🌐 Key Components:
- Modern zkEVM
- Edge computing network
- Decentralized AI compute
- Real-time oracles
- Smart contract integration

💡 Active Use Cases:
- Social analytics
- Gaming metrics
- Content processing
- Real-time feeds
- Community insights
- Performance tracking`,

    exampleTweets: `Example Tweet Guidelines:

Content Types:
- Technical insights about your product
- Responses to industry questions
- Helpful explanations of features
- Thoughtful engagement with community
- Data-driven observations

Best Practices:
• Keep tweets under 280 characters
• Include 1-2 emojis maximum
• Focus on one clear message per tweet
• Use a consistent technical but friendly tone
• Provide specific, actionable information
• Aim for 3-10 diverse example tweets`,

    followAccounts: `Account Selection Guide:

Recommended Types:
- Industry influencers
- Technical thought leaders
- Relevant projects & protocols
- Community builders
- News sources & analysts

Best Practices:
• Select accounts that align with your agent's focus
• Include a mix of established and emerging voices
• Choose accounts that post relevant technical content
• Avoid accounts with controversial or off-topic content
• Aim for 5-10 quality accounts for optimal engagement`,

    questions: `Custom Goals Guide:

Purpose:
Custom goals help shape your agent's behavior and decision-making when replying on X. They act as guiding principles that influence how your agent thinks and responds.

Example Goals:
- "Always promote web3 adoption and decentralization"
- "Focus on technical discussions and infrastructure insights"
- "Maintain a helpful, educational tone in all responses"
- "Prioritize community engagement and knowledge sharing"
- "Stay focused on current, proven technology capabilities"

Best Practices:
• Keep goals clear and specific
• Focus on behavior and tone rather than specific topics
• Avoid conflicting or contradictory goals
• Aim for 1-3 meaningful goals maximum
• Make goals actionable and measurable

Tips:
• Goals should complement your personality and style rules
• Consider your target audience and community
• Focus on long-term behavioral patterns
• Keep goals aligned with your brand values`,
  };