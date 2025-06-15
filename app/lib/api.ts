import axios from 'axios';
import { AgentConfig, AgentConfigFormState, ApiResponse, PaymentStatus, ApiLimitStatus } from './types';
import { getAccessToken } from '@privy-io/react-auth';

// Create axios instance with base URL
export const api = axios.create({
  baseURL: process.env['NEXT_PUBLIC_API_URL'] || 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to attach auth token
api.interceptors.request.use(async (config) => {
  try {
    const token = await getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    console.error('Error getting auth token:', error);
    return config;
  }
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
      client_id: config.client_id,
      user_name: config.username,
      user_personality: config.personality,
      style_rules: config.styleRules,
      content_restrictions: config.contentRestrictions,
      knowledge_base: config.knowledgeBase,
      model_config: {
        model: config.model
      },
      accounts_to_follow: config.followAccounts,
      thought_leaders: config.followAccounts,
      example_tweets: config.exampleTweets,
      // Default values for required fields
      strategy: '',
      remember: '',
      mission: '',
      questions: [],
      engagement_strategy: '',
    });


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
export async function deleteTwitterApiKey(
  userId: string
): Promise<ApiResponse<any>> {
  try {
    const response = await api.delete(`/auth/api-keys/${userId}`);
    
    return response.data;
  } catch (error) {
    console.error('Error deleting Twitter API key:', error);
    return {
      success: false,
      error: 'Failed to delete Twitter API key'
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

// Check X API limits
export async function checkApiLimits(clientId: string): Promise<ApiResponse<ApiLimitStatus>> {
  try {
    const response = await api.get(`/agent/twitter/limits/${clientId}`);
    return response.data;
  } catch (error) {
    console.error('Error checking API subscription:', error);
    return {
      success: false,
      error: 'Failed to check API subscription status'
    };
  }
}

// Toggle agent
export async function toggleAgent(clientId: string): Promise<ApiResponse<{ status: string }>> {
  try {
    const response = await api.put(`/agent/toggle/${clientId}`);
    return response.data;
  } catch (error) {
    console.error('Error toggling agent:', error);
    return {
      success: false,
      error: 'Failed to toggle agent'
    };
  }
}


