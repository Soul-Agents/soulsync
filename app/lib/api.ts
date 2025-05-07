import axios from 'axios';
import { AgentConfig, AgentConfigFormState, ApiResponse, PaymentStatus } from './types';

// Create axios instance with base URL
export const api = axios.create({
  baseURL: process.env['NEXT_PUBLIC_API_URL'] || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// API endpoints
export const endpoints = {
  getAgentConfig: (clientId: string, agentName: string) => `/agent-config/${clientId}/${agentName}`,
  createAgentConfig: '/agent-config',
};

// API functions
export async function getAgentConfig(clientId: string): Promise<AgentConfig | null> {
  try {
    const response = await api.get(`/agent/config/${clientId}`);
    console.log("RESPONSE", response.data.configuration);
    return response.data.configuration
  } catch (error) {
    console.error('Error fetching agent config:', error);
    return null;
  }
}

export async function createAgentConfig(config: AgentConfigFormState): Promise<ApiResponse<AgentConfig>> {
  try {
    console.log("CONFIG", config);
    const response = await api.post(`/agent/config`, {
      client_id: config.username, // Using username as client_id for now
      agent_name: config.username,
      user_name: config.username,
      user_personality: config.personality,
      style_rules: config.styleRules,
      content_restrictions: config.contentRestrictions,
      knowledge_base: config.knowledgeBase,
      model_config: {
        model: config.model
      },
      example_tweets: config.exampleTweets,
      // Default values for required fields
      strategy: '',
      remember: '',
      mission: '',
      questions: [],
      engagement_strategy: '',
      ai_and_agents: [],
      web3_builders: [],
      defi_experts: [],
      thought_leaders: [],
      traders_and_analysts: [],
    });

    //   ai_and_agents: config.followAccounts.filter(a => a.toLowerCase().includes('ai') || a.toLowerCase().includes('bot')),
    //   web3_builders: config.followAccounts.filter(a => a.toLowerCase().includes('web3') || a.toLowerCase().includes('crypto')),
    //   defi_experts: config.followAccounts.filter(a => a.toLowerCase().includes('defi')),
    //   thought_leaders: config.followAccounts.filter(a => !a.toLowerCase().includes('ai') && !a.toLowerCase().includes('web3')),

    return response.data;
  } catch (error) {
    console.error('Error creating agent config:', error);
    return {
      success: false,
      error: 'Failed to create agent configuration'
    };
  }
}

export async function updateAgentConfig(config: Partial<AgentConfig>): Promise<ApiResponse<AgentConfig>> {
  console.log("Updating agent config:", config);
  
  if (!config.client_id ) {
    console.error("Missing required fields for update: client_id")
    return {
      success: false,
      error: 'Missing required fields for update (client_id)'
    };
  }
  
  try {
    const response = await api.put(`/agent/config/${config.client_id}`, config);
    return response.data;
  } catch (error) {
    console.error('Error updating agent config:', error);
    return {
      success: false,
      error: "Failed to update agent configuration"
    };
  }
}

type TestResponse = {
  status: string;
  message: string;
  result: string;
  question: string;
  agent_config: AgentConfig;
}

export async function testResponse(clientId: string, question: string, config: AgentConfigFormState): Promise<TestResponse> {
  try {
      const response = await api.post(`agent/test/${clientId}`, {
      question,
      config
    });
    return response.data;
  } catch (error) {
    console.error('Error testing response:', error);
    throw error;
   
  }
}

export async function connectTwitterAccount(
 userId:string
): Promise<ApiResponse<any>> {
  try {
    const response = await api.post(`/auth/connect-twitter-account`, {
      client_id: userId
     
    });
    console.log("RESPONSE", response.data);
    window.location.href = response.data.auth_url;
    return response.data;
  } catch (error) {
    console.error('Error connecting Twitter account:', error);
    throw error;
  }
}

// Get Twitter API key from API
export async function getTwitterApiKey(
  userId: string,
  twitterUsername: string
): Promise<ApiResponse<{ apiKey: string }>> {
  try {
    const response = await api.post(`/twitter/get-api-key`, {
      userId,
      twitterUsername
    });
    
    return response.data;
  } catch (error) {
    console.error('Error getting Twitter API key:', error);
    return {
      success: false,
      error: 'Failed to get Twitter API key'
    };
  }
}

// Store Twitter API key
export async function storeTwitterApiKey(
  userId: string,
  apiKey: string,
  apiSecretKey: string
): Promise<ApiResponse<any>> {
  try {
    const response = await api.post(`/auth/save-twitter-keys`, {
      clientId:userId,
      apiKey,
      apiSecretKey
    });
    
    return response.data;
  } catch (error) {
    console.error('Error storing Twitter API key:', error);
    throw error
  }
}

// Verify Twitter API key
export async function verifyTwitterApiKey(
  apiKey: string,
  twitterUsername: string,
  userId: string
): Promise<ApiResponse<any>> {
  try {
    const response = await api.post(`/twitter/verify-api-key`, {
      apiKey,
      twitterUsername,
      userId
    });
    
    return response.data;
  } catch (error) {
    console.error('Error verifying Twitter API key:', error);
    return {
      success: false,
      error: 'Failed to verify Twitter API key'
    };
  }
}

// Make payment for agent subscription
export async function makePayment({
    clientId,
    amount,
    txHash
}:{ 
    clientId: string;
    amount: string;
    txHash: string;
}): Promise<ApiResponse<{ status:string }>> {
  try {
    const response = await api.post(`/agent/payment/${clientId}`, {
      amount: amount,
      txHash: txHash
    });
    console.log("RESPONSE", response.data);
    return response.data;
   
  } catch (error) {
    console.error('Error processing payment:', error);
    throw new Error("Error processing payment");
  }
} 
export async function getPaymentStatus(clientId:string): Promise<ApiResponse<PaymentStatus>> {
  try {
    const response = await api.get(`/agent/payment/${clientId}`)
    console.log("RESPONSE", response.data);
    return response.data;
   
  } catch (error) {
    console.error('Error getting payment status:', error);
    throw new Error("Error getting payment status");
  }
} 
