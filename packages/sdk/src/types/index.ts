import { type Config } from '@motherdao/core';

export interface AgentConfig extends Config {
  agentId: string;
  endpoint: string;
}

export interface AgentMetadata {
  name: string;
  description: string;
  version: string;
  capabilities: string[];
}

export interface ValidationResult {
  isValid: boolean;
  errors?: string[];
}

export interface AgentRegistration {
  agentId: string;
  metadata: AgentMetadata;
  publicKey: string;
  signature: string;
}

export interface AgentStatus {
  isOnline: boolean;
  lastSeen: Date;
  performance: {
    successRate: number;
    averageResponseTime: number;
  };
}
