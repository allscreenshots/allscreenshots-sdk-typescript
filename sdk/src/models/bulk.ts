/**
 * Bulk screenshot request and response models
 */

import type {
  ImageFormat,
  WaitUntil,
  BlockLevel,
  ViewportConfig,
} from './types.js';

/**
 * Default options applied to all URLs in a bulk request
 */
export interface BulkDefaults {
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
  blockAds?: boolean;
  blockCookieBanners?: boolean;
  blockLevel?: BlockLevel;
}

/**
 * Per-URL options that override defaults
 */
export interface BulkUrlOptions {
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
  selector?: string;
  blockAds?: boolean;
  blockCookieBanners?: boolean;
  blockLevel?: BlockLevel;
}

/**
 * Single URL entry in a bulk request
 */
export interface BulkUrlRequest {
  /** Target URL (must start with http:// or https://) */
  url: string;
  /** URL-specific options that override defaults */
  options?: BulkUrlOptions;
}

/**
 * Request for bulk screenshot capture
 *
 * @example
 * ```typescript
 * const request: BulkRequest = {
 *   urls: [
 *     { url: 'https://github.com' },
 *     { url: 'https://google.com', options: { device: 'iPhone 14' } }
 *   ],
 *   defaults: { format: 'png', device: 'Desktop HD' }
 * };
 * ```
 */
export interface BulkRequest {
  /** List of URLs to capture (max 100) */
  urls: BulkUrlRequest[];
  /** Default options applied to all URLs */
  defaults?: BulkDefaults;
  /** Webhook URL for completion notification */
  webhookUrl?: string;
  /** Secret for webhook signature verification */
  webhookSecret?: string;
}

/**
 * Individual job info in bulk response
 */
export interface BulkJobInfo {
  id: string;
  url: string;
  status: string;
}

/**
 * Response when creating a bulk job
 */
export interface BulkResponse {
  /** Unique bulk job identifier */
  id: string;
  /** Overall status */
  status: string;
  /** Total number of individual jobs */
  totalJobs: number;
  /** Number of completed jobs */
  completedJobs: number;
  /** Number of failed jobs */
  failedJobs: number;
  /** Progress percentage (0-100) */
  progress: number;
  /** List of individual job info */
  jobs: BulkJobInfo[];
  /** When the bulk job was created */
  createdAt: string;
  /** When the bulk job completed */
  completedAt?: string;
}

/**
 * Summary of a bulk job (for list endpoint)
 */
export interface BulkJobSummary {
  id: string;
  status: string;
  totalJobs: number;
  completedJobs: number;
  failedJobs: number;
  progress: number;
  createdAt: string;
  completedAt?: string;
}

/**
 * Detailed info for individual job in bulk status
 */
export interface BulkJobDetailInfo {
  id: string;
  url: string;
  status: string;
  resultUrl?: string;
  storageUrl?: string;
  format?: string;
  width?: number;
  height?: number;
  fileSize?: number;
  renderTimeMs?: number;
  errorCode?: string;
  errorMessage?: string;
  createdAt: string;
  completedAt?: string;
}

/**
 * Detailed bulk job status response
 */
export interface BulkStatusResponse {
  id: string;
  status: string;
  totalJobs: number;
  completedJobs: number;
  failedJobs: number;
  progress: number;
  jobs: BulkJobDetailInfo[];
  createdAt: string;
  completedAt?: string;
}
