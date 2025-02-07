import { ErrorResponse } from '../types';

export class CoreError extends Error {
  code: string;
  details?: Record<string, unknown>;

  constructor(code: string, message: string, details?: Record<string, unknown>) {
    super(message);
    this.code = code;
    this.details = details;
    this.name = 'CoreError';
  }

  toJSON(): ErrorResponse {
    return {
      code: this.code,
      message: this.message,
      details: this.details,
    };
  }
}

export function createError(
  code: string,
  message: string,
  details?: Record<string, unknown>
): CoreError {
  return new CoreError(code, message, details);
}
