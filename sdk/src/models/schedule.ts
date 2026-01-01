/**
 * Schedule request and response models
 */

import type {
  ImageFormat,
  WaitUntil,
  BlockLevel,
  ViewportConfig,
} from './types.js';

/**
 * Screenshot options for scheduled captures
 */
export interface ScheduleScreenshotOptions {
  viewport?: ViewportConfig;
  device?: string;
  format?: ImageFormat;
  fullPage?: boolean;
  quality?: number;
  delay?: number;
  waitFor?: string;
  waitUntil?: WaitUntil;
  timeout?: number;
  darkMode?: boolean;
  customCss?: string;
  hideSelectors?: string[];
  blockAds?: boolean;
  blockCookieBanners?: boolean;
  blockLevel?: BlockLevel;
}

/**
 * Request to create a scheduled screenshot
 *
 * @example
 * ```typescript
 * const request: CreateScheduleRequest = {
 *   name: 'Daily homepage capture',
 *   url: 'https://example.com',
 *   schedule: '0 9 * * *', // Daily at 9 AM
 *   timezone: 'America/New_York',
 *   options: { device: 'Desktop HD', fullPage: true }
 * };
 * ```
 */
export interface CreateScheduleRequest {
  /** Schedule name (required, max 255 chars) */
  name: string;
  /** Target URL (required) */
  url: string;
  /** Cron expression (required) */
  schedule: string;
  /** Timezone (e.g., 'America/New_York') */
  timezone?: string;
  /** Screenshot options */
  options?: ScheduleScreenshotOptions;
  /** Webhook URL for notifications */
  webhookUrl?: string;
  /** Webhook secret */
  webhookSecret?: string;
  /** Days to retain screenshots (1-365) */
  retentionDays?: number;
  /** When the schedule starts */
  startsAt?: string;
  /** When the schedule ends */
  endsAt?: string;
}

/**
 * Request to update an existing schedule
 */
export interface UpdateScheduleRequest {
  name?: string;
  url?: string;
  schedule?: string;
  timezone?: string;
  options?: ScheduleScreenshotOptions;
  webhookUrl?: string;
  webhookSecret?: string;
  retentionDays?: number;
  startsAt?: string;
  endsAt?: string;
}

/**
 * Schedule response
 */
export interface ScheduleResponse {
  /** Schedule identifier */
  id: string;
  /** Schedule name */
  name: string;
  /** Target URL */
  url: string;
  /** Cron expression */
  schedule: string;
  /** Human-readable schedule description */
  scheduleDescription?: string;
  /** Timezone */
  timezone: string;
  /** Current status */
  status: string;
  /** Screenshot options */
  options?: Record<string, unknown>;
  /** Webhook URL */
  webhookUrl?: string;
  /** Retention days */
  retentionDays?: number;
  /** Schedule start date */
  startsAt?: string;
  /** Schedule end date */
  endsAt?: string;
  /** Last execution time */
  lastExecutedAt?: string;
  /** Next scheduled execution */
  nextExecutionAt?: string;
  /** Total execution count */
  executionCount: number;
  /** Successful executions */
  successCount: number;
  /** Failed executions */
  failureCount: number;
  /** When created */
  createdAt: string;
  /** When last updated */
  updatedAt: string;
}

/**
 * List of schedules response
 */
export interface ScheduleListResponse {
  schedules: ScheduleResponse[];
  total: number;
}

/**
 * Single schedule execution
 */
export interface ScheduleExecutionResponse {
  id: string;
  executedAt: string;
  status: string;
  resultUrl?: string;
  storageUrl?: string;
  fileSize?: number;
  renderTimeMs?: number;
  errorCode?: string;
  errorMessage?: string;
  expiresAt?: string;
}

/**
 * Schedule execution history response
 */
export interface ScheduleHistoryResponse {
  scheduleId: string;
  totalExecutions: number;
  executions: ScheduleExecutionResponse[];
}
