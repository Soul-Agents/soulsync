export interface ModelConfig {
  [key: string]: any;
}

export interface AgentConfig {
  client_id: string;
  user_id: string;
  agent_name: string;
  user_name: string;
  user_personality: string;
  style_rules: string;
  content_restrictions: string;
  strategy: string;
  remember: string;
  mission: string;
  questions: string[];
  engagement_strategy: string;
  thought_leaders: string[];
  accounts_to_follow: string[];
  knowledge_base: string;
  model_config: ModelConfig;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  is_active: boolean;
  is_paid: boolean;
  is_all_setup:boolean
  example_tweets: string[];
  has_twitter_keys: boolean;

}

// Form state interface - subset of AgentConfig used in the form
export interface AgentConfigFormState {
  username: string;
  personality: string;
  styleRules: string;
  contentRestrictions: string;
  knowledgeBase: string;
  model: string;
  exampleTweets: string[];
  followAccounts: string[];
  questions: string[];
  client_id: string;
}

// API response interface
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

// Payment status interface
export interface PaymentStatus {
  is_paid: boolean;
  payment_amount: number;
  payment_date: string | null;
  payment_id: string;
  is_active: boolean;
  tx_hash: string;
  valid_until: string;
}

// API subscription check interface
export interface ApiLimitStatus {
  limits: {
    project_usage:number
    project_cap:number
    cap_reset_day:number
    project_id:number
  }
}