/**
 * Compose (multi-screenshot layout) request and response models
 */

import type {
  ImageFormat,
  WaitUntil,
  BlockLevel,
  LayoutType,
  Alignment,
  ViewportConfig,
  LabelConfig,
  BorderConfig,
  ShadowConfig,
} from './types.js';

/**
 * Single capture item for compose request
 */
export interface CaptureItem {
  /** Target URL (required) */
  url: string;
  /** Optional identifier */
  id?: string;
  /** Label to display */
  label?: string;
  /** Custom viewport */
  viewport?: ViewportConfig;
  /** Device preset */
  device?: string;
  /** Capture full page */
  fullPage?: boolean;
  /** Enable dark mode */
  darkMode?: boolean;
  /** Delay before capture (ms) */
  delay?: number;
}

/**
 * Variant configuration for same-URL captures
 */
export interface VariantConfig {
  id?: string;
  label?: string;
  viewport?: ViewportConfig;
  device?: string;
  fullPage?: boolean;
  darkMode?: boolean;
  delay?: number;
  customCss?: string;
}

/**
 * Default capture options for compose
 */
export interface CaptureDefaults {
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
 * Output configuration for composed image
 */
export interface ComposeOutputConfig {
  /** Layout arrangement */
  layout?: LayoutType;
  /** Output format */
  format?: 'png' | 'jpeg' | 'jpg' | 'webp';
  /** Quality (1-100) */
  quality?: number;
  /** Number of columns for grid layout */
  columns?: number;
  /** Spacing between images (px) */
  spacing?: number;
  /** Padding around composition (px) */
  padding?: number;
  /** Background color (#RRGGBB, #RRGGBBAA, or 'transparent') */
  background?: string;
  /** Vertical alignment */
  alignment?: Alignment;
  /** Maximum width (px) */
  maxWidth?: number;
  /** Maximum height (px) */
  maxHeight?: number;
  /** Thumbnail width for each image (px) */
  thumbnailWidth?: number;
  /** Label configuration */
  labels?: LabelConfig;
  /** Border configuration */
  border?: BorderConfig;
  /** Shadow configuration */
  shadow?: ShadowConfig;
}

/**
 * Request for composing multiple screenshots
 *
 * @example
 * ```typescript
 * const request: ComposeRequest = {
 *   captures: [
 *     { url: 'https://github.com', label: 'Desktop', device: 'Desktop HD' },
 *     { url: 'https://github.com', label: 'Mobile', device: 'iPhone 14' }
 *   ],
 *   output: { layout: 'HORIZONTAL', spacing: 20 }
 * };
 * ```
 */
export interface ComposeRequest {
  /** Multiple URLs to capture (max 20) */
  captures?: CaptureItem[];
  /** Single URL for variant mode */
  url?: string;
  /** Different configurations for same URL (max 20) */
  variants?: VariantConfig[];
  /** Default capture options */
  defaults?: CaptureDefaults;
  /** Output configuration */
  output?: ComposeOutputConfig;
  /** Run asynchronously */
  async?: boolean;
  /** Webhook URL for async completion */
  webhookUrl?: string;
  /** Webhook secret */
  webhookSecret?: string;
  /** Use captures mode (internal) */
  capturesMode?: boolean;
  /** Use variants mode (internal) */
  variantsMode?: boolean;
}

/**
 * Metadata about individual captures in composition
 */
export interface CaptureMetadata {
  id?: string;
  url: string;
  label?: string;
  width: number;
  height: number;
}

/**
 * Metadata about the composed image
 */
export interface ComposeMetadata {
  captures: CaptureMetadata[];
  totalCaptures: number;
}

/**
 * Response for synchronous compose
 */
export interface ComposeResponse {
  /** URL to download composed image */
  url: string;
  /** Permanent storage URL */
  storageUrl?: string;
  /** When the result expires */
  expiresAt?: string;
  /** Image width */
  width: number;
  /** Image height */
  height: number;
  /** Output format */
  format: string;
  /** File size in bytes */
  fileSize: number;
  /** Render time in milliseconds */
  renderTimeMs: number;
  /** Layout used */
  layout: string;
  /** Metadata about captures */
  metadata?: ComposeMetadata;
}

/**
 * Response for async compose job status
 */
export interface ComposeJobStatusResponse {
  /** Job identifier */
  jobId: string;
  /** Current status */
  status: string;
  /** Progress percentage (0-100) */
  progress: number;
  /** Total captures */
  totalCaptures: number;
  /** Completed captures */
  completedCaptures: number;
  /** Result (when completed) */
  result?: ComposeResponse;
  /** Error code (if failed) */
  errorCode?: string;
  /** Error message (if failed) */
  errorMessage?: string;
  /** When the job was created */
  createdAt: string;
  /** When the job completed */
  completedAt?: string;
}

/**
 * Summary of a compose job (for list endpoint)
 */
export interface ComposeJobSummaryResponse {
  jobId: string;
  status: string;
  totalCaptures: number;
  completedCaptures: number;
  failedCaptures: number;
  progress: number;
  layoutType?: string;
  createdAt: string;
  completedAt?: string;
}

/**
 * Placement preview for a single image
 */
export interface PlacementPreview {
  index: number;
  x: number;
  y: number;
  width: number;
  height: number;
  label?: string;
}

/**
 * Response for layout preview endpoint
 */
export interface LayoutPreviewResponse {
  layout: string;
  resolvedLayout: string;
  canvasWidth: number;
  canvasHeight: number;
  placements: PlacementPreview[];
  metadata?: Record<string, unknown>;
}
