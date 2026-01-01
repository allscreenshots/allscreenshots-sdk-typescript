/**
 * Screenshot request and response models
 */

import type {
  ImageFormat,
  WaitUntil,
  BlockLevel,
  ResponseType,
  JobStatus,
  ViewportConfig,
} from './types.js';

/**
 * Request parameters for taking a screenshot
 *
 * @example
 * ```typescript
 * const request: ScreenshotRequest = {
 *   url: 'https://github.com',
 *   device: 'Desktop HD',
 *   fullPage: true,
 *   format: 'png'
 * };
 * ```
 */
export interface ScreenshotRequest {
  /** Target URL to capture (required, must start with http:// or https://) */
  url: string;
  /** Custom viewport configuration */
  viewport?: ViewportConfig;
  /** Device preset name (e.g., 'Desktop HD', 'iPhone 14', 'iPad') */
  device?: string;
  /** Output image format */
  format?: ImageFormat;
  /** Capture the full scrollable page */
  fullPage?: boolean;
  /** Image quality (1-100, applies to jpeg/webp) */
  quality?: number;
  /** Delay in milliseconds before capturing (0-30000) */
  delay?: number;
  /** CSS selector to wait for before capturing */
  waitFor?: string;
  /** Page load strategy */
  waitUntil?: WaitUntil;
  /** Timeout in milliseconds (1000-60000) */
  timeout?: number;
  /** Enable dark mode */
  darkMode?: boolean;
  /** Custom CSS to inject */
  customCss?: string;
  /** CSS selectors of elements to hide */
  hideSelectors?: string[];
  /** Capture only a specific element */
  selector?: string;
  /** Block advertisements */
  blockAds?: boolean;
  /** Block cookie consent banners */
  blockCookieBanners?: boolean;
  /** Ad blocking intensity level */
  blockLevel?: BlockLevel;
  /** Webhook URL for async notifications */
  webhookUrl?: string;
  /** Secret for webhook signature verification */
  webhookSecret?: string;
  /** Response type (BINARY for raw image, JSON for metadata) */
  responseType?: ResponseType;
}

/**
 * Response for async job creation
 */
export interface AsyncJobCreatedResponse {
  /** Unique job identifier */
  id: string;
  /** Current job status */
  status: JobStatus;
  /** URL to check job status */
  statusUrl: string;
  /** When the job was created */
  createdAt: string;
}

/**
 * Full job status response
 */
export interface JobResponse {
  /** Unique job identifier */
  id: string;
  /** Current job status */
  status: JobStatus;
  /** Original target URL */
  url: string;
  /** URL to download the result image */
  resultUrl?: string;
  /** Error code if failed */
  errorCode?: string;
  /** Error message if failed */
  errorMessage?: string;
  /** When the job was created */
  createdAt: string;
  /** When processing started */
  startedAt?: string;
  /** When the job completed */
  completedAt?: string;
  /** When the result expires */
  expiresAt?: string;
  /** Additional metadata */
  metadata?: Record<string, unknown>;
}
