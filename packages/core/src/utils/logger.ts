import { Logger } from '../types';

export function createLogger(namespace: string): Logger {
  return {
    debug: (message: string, ...args: any[]) => {
      console.debug(`[${namespace}] ${message}`, ...args);
    },
    info: (message: string, ...args: any[]) => {
      console.info(`[${namespace}] ${message}`, ...args);
    },
    warn: (message: string, ...args: any[]) => {
      console.warn(`[${namespace}] ${message}`, ...args);
    },
    error: (message: string, ...args: any[]) => {
      console.error(`[${namespace}] ${message}`, ...args);
    },
  };
}
