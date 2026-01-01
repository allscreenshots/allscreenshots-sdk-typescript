import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  calculateDelay,
  isRetryableError,
  withRetry,
  DEFAULT_RETRY_CONFIG,
} from '../../src/utils/retry.js';
import {
  RateLimitError,
  ServerError,
  NetworkError,
  TimeoutError,
  ValidationError,
  AuthenticationError,
} from '../../src/errors/index.js';

describe('retry utilities', () => {
  describe('calculateDelay', () => {
    it('should calculate exponential delay for first attempt', () => {
      const delay = calculateDelay(0, DEFAULT_RETRY_CONFIG);
      // Should be around 1000ms (initial delay) with some jitter
      expect(delay).toBeGreaterThan(800);
      expect(delay).toBeLessThan(1200);
    });

    it('should double delay for each subsequent attempt', () => {
      const config = { ...DEFAULT_RETRY_CONFIG, jitterFactor: 0 };
      const delay0 = calculateDelay(0, config);
      const delay1 = calculateDelay(1, config);
      const delay2 = calculateDelay(2, config);

      expect(delay0).toBe(1000);
      expect(delay1).toBe(2000);
      expect(delay2).toBe(4000);
    });

    it('should cap delay at maxDelayMs', () => {
      const config = { ...DEFAULT_RETRY_CONFIG, jitterFactor: 0 };
      const delay = calculateDelay(10, config);
      expect(delay).toBe(config.maxDelayMs);
    });

    it('should apply jitter factor', () => {
      const config = { ...DEFAULT_RETRY_CONFIG, jitterFactor: 0.5 };
      const delays = new Set<number>();

      // Generate multiple delays - they should vary due to jitter
      for (let i = 0; i < 10; i++) {
        delays.add(calculateDelay(0, config));
      }

      // Should have some variation (more than 1 unique value)
      expect(delays.size).toBeGreaterThan(1);
    });
  });

  describe('isRetryableError', () => {
    it('should return true for RateLimitError', () => {
      expect(isRetryableError(new RateLimitError())).toBe(true);
    });

    it('should return true for ServerError', () => {
      expect(isRetryableError(new ServerError())).toBe(true);
    });

    it('should return true for NetworkError', () => {
      expect(isRetryableError(new NetworkError())).toBe(true);
    });

    it('should return true for TimeoutError', () => {
      expect(isRetryableError(new TimeoutError())).toBe(true);
    });

    it('should return false for ValidationError', () => {
      expect(isRetryableError(new ValidationError('Invalid input'))).toBe(false);
    });

    it('should return false for AuthenticationError', () => {
      expect(isRetryableError(new AuthenticationError())).toBe(false);
    });

    it('should return false for generic errors', () => {
      expect(isRetryableError(new Error('Generic error'))).toBe(false);
    });
  });

  describe('withRetry', () => {
    beforeEach(() => {
      vi.useFakeTimers();
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it('should return result on first success', async () => {
      const fn = vi.fn().mockResolvedValue('success');
      const resultPromise = withRetry(fn);

      const result = await resultPromise;

      expect(result).toBe('success');
      expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should retry on retryable errors', async () => {
      const fn = vi.fn()
        .mockRejectedValueOnce(new ServerError())
        .mockResolvedValue('success');

      const resultPromise = withRetry(fn, { maxRetries: 3 });

      // Fast-forward through the delay
      await vi.runAllTimersAsync();

      const result = await resultPromise;

      expect(result).toBe('success');
      expect(fn).toHaveBeenCalledTimes(2);
    });

    it('should not retry on non-retryable errors', async () => {
      const fn = vi.fn().mockRejectedValue(new ValidationError('Invalid'));

      await expect(withRetry(fn, { maxRetries: 3 })).rejects.toThrow(ValidationError);
      expect(fn).toHaveBeenCalledTimes(1);
    });

    it('should throw after max retries exceeded', async () => {
      const serverError = new ServerError();
      const fn = vi.fn().mockRejectedValue(serverError);

      const resultPromise = withRetry(fn, { maxRetries: 2 });

      // Catch any unhandled rejections
      resultPromise.catch(() => {});

      // Fast-forward through all delays
      await vi.runAllTimersAsync();

      await expect(resultPromise).rejects.toThrow(ServerError);
      expect(fn).toHaveBeenCalledTimes(3); // Initial + 2 retries
    });

    it('should use Retry-After header for rate limit errors', async () => {
      const rateLimitError = new RateLimitError('Rate limited', 5); // 5 seconds
      const fn = vi.fn()
        .mockRejectedValueOnce(rateLimitError)
        .mockResolvedValue('success');

      const resultPromise = withRetry(fn, { maxRetries: 1 });

      // Should wait 5 seconds based on retryAfter
      await vi.advanceTimersByTimeAsync(5000);

      const result = await resultPromise;
      expect(result).toBe('success');
    });
  });
});
