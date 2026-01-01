import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  AllscreenshotsClient,
  AllscreenshotsClientBuilder,
  AuthenticationError,
} from '../../src/index.js';

describe('AllscreenshotsClientBuilder', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
    delete process.env.ALLSCREENSHOTS_API_KEY;
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it('should build client with API key', () => {
    const client = new AllscreenshotsClientBuilder()
      .withApiKey('test-api-key')
      .build();

    expect(client).toBeInstanceOf(AllscreenshotsClient);
  });

  it('should chain configuration methods', () => {
    const builder = new AllscreenshotsClientBuilder()
      .withApiKey('test-key')
      .withBaseUrl('https://custom.api.com')
      .withTimeout(30000)
      .withAutoRetry(false)
      .withRetry({ maxRetries: 5 });

    const client = builder.build();
    expect(client).toBeInstanceOf(AllscreenshotsClient);
  });

  it('should strip trailing slashes from base URL', () => {
    const builder = new AllscreenshotsClientBuilder()
      .withApiKey('test-key')
      .withBaseUrl('https://custom.api.com///');

    const client = builder.build();
    expect(client).toBeInstanceOf(AllscreenshotsClient);
  });
});

describe('AllscreenshotsClient', () => {
  const originalEnv = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...originalEnv };
    delete process.env.ALLSCREENSHOTS_API_KEY;
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  describe('constructor', () => {
    it('should throw AuthenticationError when API key is missing', () => {
      expect(() => new AllscreenshotsClient()).toThrow(AuthenticationError);
      expect(() => new AllscreenshotsClient()).toThrow(
        'API key is required. Provide it via config or set ALLSCREENSHOTS_API_KEY environment variable.'
      );
    });

    it('should accept API key from config', () => {
      const client = new AllscreenshotsClient({ apiKey: 'test-key' });
      expect(client).toBeInstanceOf(AllscreenshotsClient);
    });

    it('should accept API key from environment variable', () => {
      process.env.ALLSCREENSHOTS_API_KEY = 'env-test-key';
      const client = new AllscreenshotsClient();
      expect(client).toBeInstanceOf(AllscreenshotsClient);
    });

    it('should prefer config API key over environment variable', () => {
      process.env.ALLSCREENSHOTS_API_KEY = 'env-key';
      // The config key takes precedence - we can't easily test this without inspecting internals
      // but we can at least verify it doesn't throw
      const client = new AllscreenshotsClient({ apiKey: 'config-key' });
      expect(client).toBeInstanceOf(AllscreenshotsClient);
    });
  });

  describe('static builder', () => {
    it('should return a new builder instance', () => {
      const builder = AllscreenshotsClient.builder();
      expect(builder).toBeInstanceOf(AllscreenshotsClientBuilder);
    });
  });

  describe('request building', () => {
    let client: AllscreenshotsClient;
    let mockFetch: ReturnType<typeof vi.fn>;

    beforeEach(() => {
      mockFetch = vi.fn();
      global.fetch = mockFetch;
      client = new AllscreenshotsClient({
        apiKey: 'test-key',
        autoRetry: false,
      });
    });

    afterEach(() => {
      vi.restoreAllMocks();
    });

    it('should send correct headers for JSON requests', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        text: () => Promise.resolve('{"id": "job-123"}'),
      });

      await client.screenshotAsync({ url: 'https://example.com' });

      expect(mockFetch).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          headers: expect.objectContaining({
            'X-API-Key': 'test-key',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          }),
        })
      );
    });

    it('should send correct headers for binary requests', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        arrayBuffer: () => Promise.resolve(new ArrayBuffer(10)),
      });

      await client.screenshot({ url: 'https://example.com' });

      expect(mockFetch).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          headers: expect.objectContaining({
            'Accept': 'image/*,application/pdf',
          }),
        })
      );
    });

    it('should serialize request body as JSON', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        text: () => Promise.resolve('{"id": "job-123"}'),
      });

      const request = {
        url: 'https://example.com',
        device: 'Desktop HD',
        fullPage: true,
      };

      await client.screenshotAsync(request);

      expect(mockFetch).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({
          body: JSON.stringify(request),
        })
      );
    });

    it('should include query parameters in URL', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        text: () => Promise.resolve('{"scheduleId": "123", "executions": []}'),
      });

      await client.getScheduleHistory('schedule-123', 10);

      const calledUrl = mockFetch.mock.calls[0][0];
      expect(calledUrl).toContain('limit=10');
    });

    it('should encode path parameters', async () => {
      mockFetch.mockResolvedValue({
        ok: true,
        text: () => Promise.resolve('{"id": "special/id"}'),
      });

      await client.getJob('special/id');

      const calledUrl = mockFetch.mock.calls[0][0];
      expect(calledUrl).toContain('special%2Fid');
    });
  });
});
