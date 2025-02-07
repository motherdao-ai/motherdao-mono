import { Config } from '../types';
import { createError } from './error';

export function validateConfig(config: Partial<Config>): Config {
  const validEnvironments = ['development', 'staging', 'production'];
  const validLogLevels = ['debug', 'info', 'warn', 'error'];

  if (!config.environment || !validEnvironments.includes(config.environment)) {
    throw createError(
      'INVALID_CONFIG',
      `Invalid environment. Must be one of: ${validEnvironments.join(', ')}`
    );
  }

  if (!config.logLevel || !validLogLevels.includes(config.logLevel)) {
    throw createError(
      'INVALID_CONFIG',
      `Invalid log level. Must be one of: ${validLogLevels.join(', ')}`
    );
  }

  return config as Config;
}
