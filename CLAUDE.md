# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Core Development
```bash
npm run dev          # Start development server (Next.js)
npm run build        # Build production application
npm run start        # Start production server
```

### Code Quality
```bash
npm run lint         # Lint JavaScript files (max 0 warnings)
npm run lint:ts      # Lint TypeScript files (max 0 warnings)  
npm run lint:all     # Lint all JS/TS files (max 0 warnings)
npm run format       # Format code with Prettier
npm run format:check # Check code formatting
```

### Utilities
```bash
npm run list-files   # List project files using custom script
```

## Architecture Overview

### Tech Stack
- **Framework**: Next.js 15.2.1 with App Router
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS
- **Authentication**: Privy (@privy-io/react-auth)
- **State Management**: TanStack Query (@tanstack/react-query)
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion

### Application Structure

#### Core Application Flow
1. **Landing Page** (`/`): Marketing site with hero, features, pricing, contact sections
2. **App Setup** (`/app`): Multi-step onboarding process:
   - Step 1: Agent configuration (personality, style, knowledge base)
   - Step 2: Twitter API key setup
   - Step 3: Twitter account connection
3. **Agent Management** (`/app/edit`): Edit existing agent configurations
4. **Payment Flow** (`/app/payment`): Handle subscription payments

#### Key Components Architecture

**Layout System**:
- `MainLayout`: Navbar + content + Footer wrapper
- `SlideLayout`: For presentation/deck views

**App Components** (`components/app/`):
- Multi-step setup wizard components
- Each step handles specific configuration phase
- Form state managed through `AgentConfigFormState` interface

**API Integration**:
- `app/lib/api.ts`: Centralized API client with axios
- Automatic JWT token attachment via Privy
- Backend URL: `NEXT_PUBLIC_API_URL` (defaults to localhost:8000)

#### Data Flow
1. **Authentication**: Privy handles wallet-based auth
2. **Agent Configuration**: Stored/retrieved via REST API
3. **Payment Processing**: Blockchain transaction verification
4. **Twitter Integration**: API key storage and OAuth flow

### Key Configuration Files

#### TypeScript Configuration
- Strict mode enabled with comprehensive type checking
- Path mapping: `@/*` points to project root
- All strict compiler options enabled

#### Next.js Configuration
- Build errors ignored (ESLint & TypeScript)
- Custom page extensions support
- React strict mode enabled

### Environment Variables Required
```bash
NEXT_PUBLIC_API_URL=<backend_api_url>
JWT_SECRET=<jwt_secret_key>
DECK_PASSWORD=<deck_access_password>
```

### Development Notes

#### Code Style
- Uses Inter font with variable font loading
- Tailwind with custom dark navy theme
- ESLint configured with max 0 warnings policy

#### State Management Patterns
- React Query for server state
- Local component state for UI interactions
- Privy context for authentication state

#### Testing & Quality
- No explicit test framework configured
- Prettier for code formatting
- Strict ESLint rules enforced

## Business Context

### Product Overview
Soul Agents is a SaaS platform providing AI-powered Twitter automation that generates meaningful, human-like replies. The service helps users grow their social media presence while maintaining authentic engagement.

### Key Features
- **Twitter Compliance**: Users are guided to mark accounts as "Automated" in setup
- **Rate Limits**: 18 replies/day (within Twitter's acceptable automation limits)
- **Content Quality**: AI generates meaningful, contextual responses (not spam)
- **Pricing**: $19 first month, $99/month or $999/year thereafter

### Deployment Process
- **Production merges**: Sebastian handles all merges to production
- **Branch workflow**: Create feature branches, push to origin, create PRs for review
- **Code reviews**: All changes require review before production deployment