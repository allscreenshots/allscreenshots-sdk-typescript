/**
 * Custom error types for the Allscreenshots SDK
 */

/**
 * Base error class for all SDK errors
 */
export class AllscreenshotsError extends Error {
  /** HTTP status code if applicable */
  public readonly statusCode?: number;
  /** Error code from API */
  public readonly errorCode?: string;

  constructor(message: string, statusCode?: number, errorCode?: string) {
    super(message);
    this.name = 'AllscreenshotsError';
    this.statusCode = statusCode;
    this.errorCode = errorCode;
    Object.setPrototypeOf(this, AllscreenshotsError.prototype);
  }
}

/**
 * Error thrown when API key is missing or invalid
 */
export class AuthenticationError extends AllscreenshotsError {
  constructor(message: string = 'Authentication failed. Check your API key.') {
    super(message, 401, 'AUTHENTICATION_ERROR');
    this.name = 'AuthenticationError';
    Object.setPrototypeOf(this, AuthenticationError.prototype);
  }
}

/**
 * Error thrown when request validation fails
 */
export class ValidationError extends AllscreenshotsError {
  /** Field-level validation errors */
  public readonly validationErrors?: Record<string, string>;

  constructor(message: string, validationErrors?: Record<string, string>) {
    super(message, 400, 'VALIDATION_ERROR');
    this.name = 'ValidationError';
    this.validationErrors = validationErrors;
    Object.setPrototypeOf(this, ValidationError.prototype);
  }
}

/**
 * Error thrown when a requested resource is not found
 */
export class NotFoundError extends AllscreenshotsError {
  constructor(message: string = 'Resource not found') {
    super(message, 404, 'NOT_FOUND');
    this.name = 'NotFoundError';
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }
}

/**
 * Error thrown when rate limit is exceeded
 */
export class RateLimitError extends AllscreenshotsError {
  /** When rate limit resets (Unix timestamp) */
  public readonly retryAfter?: number;

  constructor(message: string = 'Rate limit exceeded', retryAfter?: number) {
    super(message, 429, 'RATE_LIMIT_EXCEEDED');
    this.name = 'RateLimitError';
    this.retryAfter = retryAfter;
    Object.setPrototypeOf(this, RateLimitError.prototype);
  }
}

/**
 * Error thrown when quota is exceeded
 */
export class QuotaExceededError extends AllscreenshotsError {
  constructor(message: string = 'Quota exceeded') {
    super(message, 402, 'QUOTA_EXCEEDED');
    this.name = 'QuotaExceededError';
    Object.setPrototypeOf(this, QuotaExceededError.prototype);
  }
}

/**
 * Error thrown when a server error occurs
 */
export class ServerError extends AllscreenshotsError {
  constructor(message: string = 'Internal server error', statusCode: number = 500) {
    super(message, statusCode, 'SERVER_ERROR');
    this.name = 'ServerError';
    Object.setPrototypeOf(this, ServerError.prototype);
  }
}

/**
 * Error thrown when a network error occurs
 */
export class NetworkError extends AllscreenshotsError {
  constructor(message: string = 'Network error occurred') {
    super(message, undefined, 'NETWORK_ERROR');
    this.name = 'NetworkError';
    Object.setPrototypeOf(this, NetworkError.prototype);
  }
}

/**
 * Error thrown when a request times out
 */
export class TimeoutError extends AllscreenshotsError {
  constructor(message: string = 'Request timed out') {
    super(message, undefined, 'TIMEOUT_ERROR');
    this.name = 'TimeoutError';
    Object.setPrototypeOf(this, TimeoutError.prototype);
  }
}

/**
 * Error response from the API
 */
export interface ApiErrorResponse {
  error?: string;
  message?: string;
  errorCode?: string;
  statusCode?: number;
  validationErrors?: Record<string, string>;
}

/**
 * Parse an API error response and return the appropriate error type
 */
export function parseApiError(
  statusCode: number,
  body: ApiErrorResponse | string | null,
  retryAfter?: number
): AllscreenshotsError {
  const message = typeof body === 'string'
    ? body
    : body?.message || body?.error || `HTTP ${statusCode} error`;

  const errorCode = typeof body === 'object' ? body?.errorCode : undefined;

  switch (statusCode) {
    case 400:
      return new ValidationError(
        message,
        typeof body === 'object' ? body?.validationErrors : undefined
      );
    case 401:
    case 403:
      return new AuthenticationError(message);
    case 402:
      return new QuotaExceededError(message);
    case 404:
      return new NotFoundError(message);
    case 429:
      return new RateLimitError(message, retryAfter);
    case 500:
    case 502:
    case 503:
    case 504:
      return new ServerError(message, statusCode);
    default:
      return new AllscreenshotsError(message, statusCode, errorCode);
  }
}
