type RateLimitConfig = {
  interval: number;
  limit: number;
  tokenBucket?: {
    tokens: number;
    lastRefill: number;
  };
};

export const rateLimit = (config: RateLimitConfig) => {
  const tokens = new Map();

  return {
    check: async (limit: number, token: string) => {
      const now = Date.now();
      const windowStart = now - config.interval;

      const tokenCount = tokens.get(token) || [];
      const validTokens = tokenCount.filter(
        (timestamp: number) => timestamp > windowStart,
      );

      if (validTokens.length >= limit) {
        const error = new Error("Rate limit exceeded");
        (error as RateLimitError).status = 429;
        throw error;
      }

      validTokens.push(now);
      tokens.set(token, validTokens);

      return true;
    },
  };
};

interface RateLimitError extends Error {
  status?: number;
}
