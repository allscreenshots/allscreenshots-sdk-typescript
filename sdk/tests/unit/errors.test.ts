import { describe, it, expect } from 'vitest';
import {
  AllscreenshotsError,
  AuthenticationError,
  ValidationError,
  NotFoundError,
  RateLimitError,
  QuotaExceededError,
  ServerError,
  NetworkError,
  TimeoutError,
  parseApiError,
} from '../../src/errors/index.js';

describe('error classes', () => {
  describe('AllscreenshotsError', () => {
    it('should create error with message', () => {
      const error = new AllscreenshotsError('Test error');
      expect(error.message).toBe('Test error');
      expect(error.name).toBe('AllscreenshotsError');
    });

    it('should include status code and error code', () => {
      const error = new AllscreenshotsError('Test error', 400, 'TEST_ERROR');
      expect(error.statusCode).toBe(400);
      expect(error.errorCode).toBe('TEST_ERROR');
    });

    it('should be instance of Error', () => {
      const error = new AllscreenshotsError('Test');
      expect(error).toBeInstanceOf(Error);
      expect(error).toBeInstanceOf(AllscreenshotsError);
    });
  });

  describe('AuthenticationError', () => {
    it('should have correct defaults', () => {
      const error = new AuthenticationError();
      expect(error.statusCode).toBe(401);
      expect(error.errorCode).toBe('AUTHENTICATION_ERROR');
      expect(error.name).toBe('AuthenticationError');
    });

    it('should accept custom message', () => {
      const error = new AuthenticationError('Invalid API key');
      expect(error.message).toBe('Invalid API key');
    });
  });

  describe('ValidationError', () => {
    it('should have correct defaults', () => {
      const error = new ValidationError('Invalid input');
      expect(error.statusCode).toBe(400);
      expect(error.errorCode).toBe('VALIDATION_ERROR');
      expect(error.name).toBe('ValidationError');
    });

    it('should include validation errors', () => {
      const validationErrors = { url: 'Invalid URL format' };
      const error = new ValidationError('Validation failed', validationErrors);
      expect(error.validationErrors).toEqual(validationErrors);
    });
  });

  describe('NotFoundError', () => {
    it('should have correct defaults', () => {
      const error = new NotFoundError();
      expect(error.statusCode).toBe(404);
      expect(error.errorCode).toBe('NOT_FOUND');
      expect(error.name).toBe('NotFoundError');
    });
  });

  describe('RateLimitError', () => {
    it('should have correct defaults', () => {
      const error = new RateLimitError();
      expect(error.statusCode).toBe(429);
      expect(error.errorCode).toBe('RATE_LIMIT_EXCEEDED');
      expect(error.name).toBe('RateLimitError');
    });

    it('should include retryAfter', () => {
      const error = new RateLimitError('Rate limited', 60);
      expect(error.retryAfter).toBe(60);
    });
  });

  describe('QuotaExceededError', () => {
    it('should have correct defaults', () => {
      const error = new QuotaExceededError();
      expect(error.statusCode).toBe(402);
      expect(error.errorCode).toBe('QUOTA_EXCEEDED');
      expect(error.name).toBe('QuotaExceededError');
    });
  });

  describe('ServerError', () => {
    it('should have correct defaults', () => {
      const error = new ServerError();
      expect(error.statusCode).toBe(500);
      expect(error.errorCode).toBe('SERVER_ERROR');
      expect(error.name).toBe('ServerError');
    });

    it('should accept custom status code', () => {
      const error = new ServerError('Bad Gateway', 502);
      expect(error.statusCode).toBe(502);
    });
  });

  describe('NetworkError', () => {
    it('should have correct defaults', () => {
      const error = new NetworkError();
      expect(error.statusCode).toBeUndefined();
      expect(error.errorCode).toBe('NETWORK_ERROR');
      expect(error.name).toBe('NetworkError');
    });
  });

  describe('TimeoutError', () => {
    it('should have correct defaults', () => {
      const error = new TimeoutError();
      expect(error.statusCode).toBeUndefined();
      expect(error.errorCode).toBe('TIMEOUT_ERROR');
      expect(error.name).toBe('TimeoutError');
    });
  });
});

describe('parseApiError', () => {
  it('should return ValidationError for 400', () => {
    const error = parseApiError(400, { message: 'Invalid URL' });
    expect(error).toBeInstanceOf(ValidationError);
    expect(error.message).toBe('Invalid URL');
  });

  it('should return AuthenticationError for 401', () => {
    const error = parseApiError(401, { message: 'Invalid API key' });
    expect(error).toBeInstanceOf(AuthenticationError);
  });

  it('should return AuthenticationError for 403', () => {
    const error = parseApiError(403, { message: 'Forbidden' });
    expect(error).toBeInstanceOf(AuthenticationError);
  });

  it('should return QuotaExceededError for 402', () => {
    const error = parseApiError(402, { message: 'Quota exceeded' });
    expect(error).toBeInstanceOf(QuotaExceededError);
  });

  it('should return NotFoundError for 404', () => {
    const error = parseApiError(404, { message: 'Not found' });
    expect(error).toBeInstanceOf(NotFoundError);
  });

  it('should return RateLimitError for 429 with retryAfter', () => {
    const error = parseApiError(429, { message: 'Rate limited' }, 60);
    expect(error).toBeInstanceOf(RateLimitError);
    expect((error as RateLimitError).retryAfter).toBe(60);
  });

  it('should return ServerError for 5xx', () => {
    expect(parseApiError(500, { message: 'Server error' })).toBeInstanceOf(ServerError);
    expect(parseApiError(502, { message: 'Bad gateway' })).toBeInstanceOf(ServerError);
    expect(parseApiError(503, { message: 'Unavailable' })).toBeInstanceOf(ServerError);
    expect(parseApiError(504, { message: 'Timeout' })).toBeInstanceOf(ServerError);
  });

  it('should handle string body', () => {
    const error = parseApiError(400, 'Plain text error');
    expect(error.message).toBe('Plain text error');
  });

  it('should handle null body', () => {
    const error = parseApiError(500, null);
    expect(error.message).toBe('HTTP 500 error');
  });

  it('should extract validation errors', () => {
    const error = parseApiError(400, {
      message: 'Validation failed',
      validationErrors: { url: 'Invalid format' },
    });
    expect((error as ValidationError).validationErrors).toEqual({ url: 'Invalid format' });
  });

  it('should return generic error for unknown status codes', () => {
    const error = parseApiError(418, { message: "I'm a teapot" });
    expect(error).toBeInstanceOf(AllscreenshotsError);
    expect(error.message).toBe("I'm a teapot");
    expect(error.statusCode).toBe(418);
  });
});
