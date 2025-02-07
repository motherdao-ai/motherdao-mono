import { createError } from '@motherdao/core';
import type { ValidationResult, AgentMetadata, AgentRegistration } from '../types';

export function validateMetadata(metadata: AgentMetadata): ValidationResult {
  const errors: string[] = [];

  if (!metadata.name || metadata.name.trim().length === 0) {
    errors.push('Agent name is required');
  }

  if (!metadata.version || !isValidVersion(metadata.version)) {
    errors.push('Invalid version format. Must be semver (e.g., 1.0.0)');
  }

  if (!Array.isArray(metadata.capabilities) || metadata.capabilities.length === 0) {
    errors.push('Agent must specify at least one capability');
  }

  return {
    isValid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined,
  };
}

export function validateRegistration(registration: AgentRegistration): ValidationResult {
  const errors: string[] = [];

  if (!registration.agentId || registration.agentId.trim().length === 0) {
    errors.push('Agent ID is required');
  }

  if (!registration.publicKey || !isValidPublicKey(registration.publicKey)) {
    errors.push('Invalid public key format');
  }

  if (!registration.signature || !isValidSignature(registration.signature)) {
    errors.push('Invalid signature format');
  }

  const metadataValidation = validateMetadata(registration.metadata);
  if (!metadataValidation.isValid && metadataValidation.errors) {
    errors.push(...metadataValidation.errors);
  }

  return {
    isValid: errors.length === 0,
    errors: errors.length > 0 ? errors : undefined,
  };
}

function isValidVersion(version: string): boolean {
  const semverRegex = /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/;
  return semverRegex.test(version);
}

function isValidPublicKey(publicKey: string): boolean {
  // This is a basic check - implement proper public key validation based on your crypto requirements
  return /^0x[a-fA-F0-9]{128}$/.test(publicKey);
}

function isValidSignature(signature: string): boolean {
  // This is a basic check - implement proper signature validation based on your crypto requirements
  return /^0x[a-fA-F0-9]{130}$/.test(signature);
}
