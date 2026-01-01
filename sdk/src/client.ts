/**
 * Allscreenshots API Client
 *
 * Main client for interacting with the Allscreenshots API.
 * Supports screenshot capture, bulk operations, compose, schedules, and usage tracking.
 */

import {
  AllscreenshotsError,
  AuthenticationError,
  NetworkError,
  TimeoutError,
  parseApiError,
  type ApiErrorResponse,
} from './errors/index.js';
import { withRetry, type RetryConfig, DEFAULT_RETRY_CONFIG } from './utils/retry.js';
import type {
  ScreenshotRequest,
  AsyncJobCreatedResponse,
  JobResponse,
  BulkRequest,
  BulkResponse,
  BulkJobSummary,
  BulkStatusResponse,
  ComposeRequest,
  ComposeResponse,
  ComposeJobStatusResponse,
  ComposeJobSummaryResponse,
  LayoutPreviewResponse,
  CreateScheduleRequest,
  UpdateScheduleRequest,
  ScheduleResponse,
  ScheduleListResponse,
  ScheduleHistoryResponse,
  UsageResponse,
  QuotaStatusResponse,
} from './models/index.js';

/**
 * Configuration options for the Allscreenshots client
 */
export interface AllscreenshotsConfig {
  /** API key for authentication */
  apiKey?: string;
  /** Base URL for the API (default: https://api.allscreenshots.com) */
  baseUrl?: string;
  /** Request timeout in milliseconds (default: 60000) */
  timeout?: number;
  /** Retry configuration */
  retry?: Partial<RetryConfig>;
  /** Whether to automatically retry failed requests (default: true) */
  autoRetry?: boolean;
}

/**
 * Default configuration values
 */
const DEFAULT_CONFIG = {
  baseUrl: 'https://api.allscreenshots.com',
  timeout: 60000,
  autoRetry: true,
};

/**
 * Builder for configuring an Allscreenshots client
 *
 * @example
 * ```typescript
 * const client = new AllscreenshotsClientBuilder()
 *   .withApiKey('your-api-key')
 *   .withTimeout(30000)
 *   .build();
 * ```
 */
export class AllscreenshotsClientBuilder {
  private config: AllscreenshotsConfig = {};

  /**
   * Set the API key for authentication
   */
  withApiKey(apiKey: string): this {
    this.config.apiKey = apiKey;
    return this;
  }

  /**
   * Set the base URL for API requests
   */
  withBaseUrl(baseUrl: string): this {
    this.config.baseUrl = baseUrl.replace(/\/+$/, '');
    return this;
  }

  /**
   * Set the request timeout in milliseconds
   */
  withTimeout(timeout: number): this {
    this.config.timeout = timeout;
    return this;
  }

  /**
   * Configure retry behavior
   */
  withRetry(retry: Partial<RetryConfig>): this {
    this.config.retry = retry;
    return this;
  }

  /**
   * Enable or disable automatic retries
   */
  withAutoRetry(enabled: boolean): this {
    this.config.autoRetry = enabled;
    return this;
  }

  /**
   * Build and return the configured client
   */
  build(): AllscreenshotsClient {
    return new AllscreenshotsClient(this.config);
  }
}

/**
 * Main Allscreenshots API client
 *
 * @example
 * ```typescript
 * // Using builder pattern
 * const client = new AllscreenshotsClientBuilder()
 *   .withApiKey('your-api-key')
 *   .build();
 *
 * // Or directly with config
 * const client = new AllscreenshotsClient({ apiKey: 'your-api-key' });
 *
 * // Take a screenshot
 * const imageBuffer = await client.screenshot({
 *   url: 'https://github.com',
 *   device: 'Desktop HD',
 *   fullPage: true
 * });
 * ```
 */
export class AllscreenshotsClient {
  private readonly apiKey: string;
  private readonly baseUrl: string;
  private readonly timeout: number;
  private readonly retryConfig: RetryConfig;
  private readonly autoRetry: boolean;

  constructor(config: AllscreenshotsConfig = {}) {
    // Try to get API key from config or environment
    this.apiKey = config.apiKey || process.env.ALLSCREENSHOTS_API_KEY || '';

    if (!this.apiKey) {
      throw new AuthenticationError(
        'API key is required. Provide it via config or set ALLSCREENSHOTS_API_KEY environment variable.'
      );
    }

    this.baseUrl = config.baseUrl || DEFAULT_CONFIG.baseUrl;
    this.timeout = config.timeout ?? DEFAULT_CONFIG.timeout;
    this.autoRetry = config.autoRetry ?? DEFAULT_CONFIG.autoRetry;
    this.retryConfig = { ...DEFAULT_RETRY_CONFIG, ...config.retry };
  }

  /**
   * Create a new client builder
   */
  static builder(): AllscreenshotsClientBuilder {
    return new AllscreenshotsClientBuilder();
  }

  /**
   * Make an HTTP request to the API
   */
  private async request<T>(
    method: string,
    path: string,
    options: {
      body?: unknown;
      query?: Record<string, string | number | boolean | undefined>;
      returnBinary?: boolean;
    } = {}
  ): Promise<T> {
    const execute = async (): Promise<T> => {
      // Build URL with query parameters
      const url = new URL(`${this.baseUrl}${path}`);
      if (options.query) {
        for (const [key, value] of Object.entries(options.query)) {
          if (value !== undefined) {
            url.searchParams.set(key, String(value));
          }
        }
      }

      // Create abort controller for timeout
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), this.timeout);

      try {
        const response = await fetch(url.toString(), {
          method,
          headers: {
            'X-API-Key': this.apiKey,
            'Content-Type': 'application/json',
            'Accept': options.returnBinary ? 'image/*,application/pdf' : 'application/json',
          },
          body: options.body ? JSON.stringify(options.body) : undefined,
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        // Handle binary responses
        if (options.returnBinary) {
          if (!response.ok) {
            const errorBody = await response.text().catch(() => null);
            let parsed: ApiErrorResponse | null = null;
            try {
              parsed = errorBody ? JSON.parse(errorBody) : null;
            } catch {
              // Ignore parse errors
            }
            const retryAfter = response.headers.get('Retry-After');
            throw parseApiError(
              response.status,
              parsed || errorBody,
              retryAfter ? parseInt(retryAfter, 10) : undefined
            );
          }
          const buffer = await response.arrayBuffer();
          return Buffer.from(buffer) as T;
        }

        // Handle JSON responses
        const text = await response.text();
        let body: T | ApiErrorResponse | null = null;
        if (text) {
          try {
            body = JSON.parse(text);
          } catch {
            // Ignore parse errors for empty responses
          }
        }

        if (!response.ok) {
          const retryAfter = response.headers.get('Retry-After');
          throw parseApiError(
            response.status,
            body as ApiErrorResponse,
            retryAfter ? parseInt(retryAfter, 10) : undefined
          );
        }

        return body as T;
      } catch (error) {
        clearTimeout(timeoutId);

        if (error instanceof AllscreenshotsError) {
          throw error;
        }

        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            throw new TimeoutError(`Request timed out after ${this.timeout}ms`);
          }
          if (error.message.includes('fetch')) {
            throw new NetworkError(`Network error: ${error.message}`);
          }
        }

        throw new NetworkError('Unknown network error occurred');
      }
    };

    if (this.autoRetry) {
      return withRetry(execute, this.retryConfig);
    }
    return execute();
  }

  // ============================================
  // Screenshot Endpoints
  // ============================================

  /**
   * Take a screenshot synchronously
   *
   * @param request - Screenshot configuration
   * @returns Binary image data as a Buffer
   *
   * @example
   * ```typescript
   * const imageBuffer = await client.screenshot({
   *   url: 'https://github.com',
   *   device: 'Desktop HD',
   *   fullPage: true
   * });
   *
   * // Save to file
   * fs.writeFileSync('screenshot.png', imageBuffer);
   * ```
   */
  async screenshot(request: ScreenshotRequest): Promise<Buffer> {
    return this.request<Buffer>('POST', '/v1/screenshots', {
      body: request,
      returnBinary: true,
    });
  }

  /**
   * Take a screenshot asynchronously
   *
   * @param request - Screenshot configuration
   * @returns Job creation response with status URL
   *
   * @example
   * ```typescript
   * const job = await client.screenshotAsync({
   *   url: 'https://github.com',
   *   device: 'Desktop HD'
   * });
   * console.log(`Job created: ${job.id}`);
   * ```
   */
  async screenshotAsync(request: ScreenshotRequest): Promise<AsyncJobCreatedResponse> {
    return this.request<AsyncJobCreatedResponse>('POST', '/v1/screenshots/async', {
      body: request,
    });
  }

  /**
   * List all screenshot jobs
   *
   * @returns Array of job responses
   */
  async listJobs(): Promise<JobResponse[]> {
    return this.request<JobResponse[]>('GET', '/v1/screenshots/jobs');
  }

  /**
   * Get the status of a screenshot job
   *
   * @param id - Job identifier
   * @returns Job status details
   */
  async getJob(id: string): Promise<JobResponse> {
    return this.request<JobResponse>('GET', `/v1/screenshots/jobs/${encodeURIComponent(id)}`);
  }

  /**
   * Get the result image of a completed job
   *
   * @param id - Job identifier
   * @returns Binary image data
   */
  async getJobResult(id: string): Promise<Buffer> {
    return this.request<Buffer>('GET', `/v1/screenshots/jobs/${encodeURIComponent(id)}/result`, {
      returnBinary: true,
    });
  }

  /**
   * Cancel a screenshot job
   *
   * @param id - Job identifier
   * @returns Updated job status
   */
  async cancelJob(id: string): Promise<JobResponse> {
    return this.request<JobResponse>('POST', `/v1/screenshots/jobs/${encodeURIComponent(id)}/cancel`);
  }

  // ============================================
  // Bulk Screenshot Endpoints
  // ============================================

  /**
   * Create a bulk screenshot job
   *
   * @param request - Bulk screenshot configuration
   * @returns Bulk job response
   *
   * @example
   * ```typescript
   * const bulk = await client.createBulkJob({
   *   urls: [
   *     { url: 'https://github.com' },
   *     { url: 'https://google.com' }
   *   ],
   *   defaults: { device: 'Desktop HD' }
   * });
   * ```
   */
  async createBulkJob(request: BulkRequest): Promise<BulkResponse> {
    return this.request<BulkResponse>('POST', '/v1/screenshots/bulk', {
      body: request,
    });
  }

  /**
   * List all bulk jobs
   *
   * @returns Array of bulk job summaries
   */
  async listBulkJobs(): Promise<BulkJobSummary[]> {
    return this.request<BulkJobSummary[]>('GET', '/v1/screenshots/bulk');
  }

  /**
   * Get detailed status of a bulk job
   *
   * @param id - Bulk job identifier
   * @returns Detailed bulk job status
   */
  async getBulkJob(id: string): Promise<BulkStatusResponse> {
    return this.request<BulkStatusResponse>('GET', `/v1/screenshots/bulk/${encodeURIComponent(id)}`);
  }

  /**
   * Cancel a bulk job
   *
   * @param id - Bulk job identifier
   * @returns Updated bulk job summary
   */
  async cancelBulkJob(id: string): Promise<BulkJobSummary> {
    return this.request<BulkJobSummary>('POST', `/v1/screenshots/bulk/${encodeURIComponent(id)}/cancel`);
  }

  // ============================================
  // Compose Endpoints
  // ============================================

  /**
   * Compose multiple screenshots into a single image
   *
   * @param request - Compose configuration
   * @returns Compose response (sync) or job status (async)
   *
   * @example
   * ```typescript
   * const result = await client.compose({
   *   captures: [
   *     { url: 'https://github.com', device: 'Desktop HD', label: 'Desktop' },
   *     { url: 'https://github.com', device: 'iPhone 14', label: 'Mobile' }
   *   ],
   *   output: { layout: 'HORIZONTAL', spacing: 20 }
   * });
   * ```
   */
  async compose(request: ComposeRequest): Promise<ComposeResponse | ComposeJobStatusResponse> {
    return this.request<ComposeResponse | ComposeJobStatusResponse>('POST', '/v1/screenshots/compose', {
      body: request,
    });
  }

  /**
   * Preview layout placement without taking screenshots
   *
   * @param params - Layout preview parameters
   * @returns Layout preview response
   */
  async previewLayout(params: {
    layout: string;
    imageCount: number;
    canvasWidth?: number;
    canvasHeight?: number;
    aspectRatios?: string;
  }): Promise<LayoutPreviewResponse> {
    return this.request<LayoutPreviewResponse>('GET', '/v1/screenshots/compose/preview', {
      query: {
        layout: params.layout,
        image_count: params.imageCount,
        canvas_width: params.canvasWidth,
        canvas_height: params.canvasHeight,
        aspect_ratios: params.aspectRatios,
      },
    });
  }

  /**
   * List all compose jobs
   *
   * @returns Array of compose job summaries
   */
  async listComposeJobs(): Promise<ComposeJobSummaryResponse[]> {
    return this.request<ComposeJobSummaryResponse[]>('GET', '/v1/screenshots/compose/jobs');
  }

  /**
   * Get the status of a compose job
   *
   * @param jobId - Compose job identifier
   * @returns Compose job status
   */
  async getComposeJob(jobId: string): Promise<ComposeJobStatusResponse> {
    return this.request<ComposeJobStatusResponse>('GET', `/v1/screenshots/compose/jobs/${encodeURIComponent(jobId)}`);
  }

  // ============================================
  // Schedule Endpoints
  // ============================================

  /**
   * Create a scheduled screenshot
   *
   * @param request - Schedule configuration
   * @returns Created schedule
   *
   * @example
   * ```typescript
   * const schedule = await client.createSchedule({
   *   name: 'Daily homepage capture',
   *   url: 'https://example.com',
   *   schedule: '0 9 * * *', // Daily at 9 AM
   *   timezone: 'America/New_York'
   * });
   * ```
   */
  async createSchedule(request: CreateScheduleRequest): Promise<ScheduleResponse> {
    return this.request<ScheduleResponse>('POST', '/v1/schedules', {
      body: request,
    });
  }

  /**
   * List all schedules
   *
   * @returns Schedule list response
   */
  async listSchedules(): Promise<ScheduleListResponse> {
    return this.request<ScheduleListResponse>('GET', '/v1/schedules');
  }

  /**
   * Get a schedule by ID
   *
   * @param id - Schedule identifier
   * @returns Schedule details
   */
  async getSchedule(id: string): Promise<ScheduleResponse> {
    return this.request<ScheduleResponse>('GET', `/v1/schedules/${encodeURIComponent(id)}`);
  }

  /**
   * Update a schedule
   *
   * @param id - Schedule identifier
   * @param request - Update parameters
   * @returns Updated schedule
   */
  async updateSchedule(id: string, request: UpdateScheduleRequest): Promise<ScheduleResponse> {
    return this.request<ScheduleResponse>('PUT', `/v1/schedules/${encodeURIComponent(id)}`, {
      body: request,
    });
  }

  /**
   * Delete a schedule
   *
   * @param id - Schedule identifier
   */
  async deleteSchedule(id: string): Promise<void> {
    await this.request<void>('DELETE', `/v1/schedules/${encodeURIComponent(id)}`);
  }

  /**
   * Pause a schedule
   *
   * @param id - Schedule identifier
   * @returns Updated schedule
   */
  async pauseSchedule(id: string): Promise<ScheduleResponse> {
    return this.request<ScheduleResponse>('POST', `/v1/schedules/${encodeURIComponent(id)}/pause`);
  }

  /**
   * Resume a paused schedule
   *
   * @param id - Schedule identifier
   * @returns Updated schedule
   */
  async resumeSchedule(id: string): Promise<ScheduleResponse> {
    return this.request<ScheduleResponse>('POST', `/v1/schedules/${encodeURIComponent(id)}/resume`);
  }

  /**
   * Manually trigger a schedule
   *
   * @param id - Schedule identifier
   * @returns Updated schedule
   */
  async triggerSchedule(id: string): Promise<ScheduleResponse> {
    return this.request<ScheduleResponse>('POST', `/v1/schedules/${encodeURIComponent(id)}/trigger`);
  }

  /**
   * Get execution history for a schedule
   *
   * @param id - Schedule identifier
   * @param limit - Maximum number of executions to return
   * @returns Schedule history
   */
  async getScheduleHistory(id: string, limit?: number): Promise<ScheduleHistoryResponse> {
    return this.request<ScheduleHistoryResponse>('GET', `/v1/schedules/${encodeURIComponent(id)}/history`, {
      query: { limit },
    });
  }

  // ============================================
  // Usage Endpoints
  // ============================================

  /**
   * Get usage statistics
   *
   * @returns Usage details including history and totals
   */
  async getUsage(): Promise<UsageResponse> {
    return this.request<UsageResponse>('GET', '/v1/usage');
  }

  /**
   * Get current quota status
   *
   * @returns Quota details
   */
  async getQuotaStatus(): Promise<QuotaStatusResponse> {
    return this.request<QuotaStatusResponse>('GET', '/v1/usage/quota');
  }
}
