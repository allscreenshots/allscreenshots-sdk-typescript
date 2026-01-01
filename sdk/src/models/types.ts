/**
 * Common types and enums for the Allscreenshots SDK
 */

/**
 * Supported image formats for screenshots
 */
export type ImageFormat = 'png' | 'jpeg' | 'jpg' | 'webp' | 'pdf';

/**
 * Wait strategies for page loading
 */
export type WaitUntil = 'load' | 'domcontentloaded' | 'networkidle' | 'commit';

/**
 * Ad blocking intensity levels
 */
export type BlockLevel = 'none' | 'light' | 'normal' | 'pro' | 'pro_plus' | 'ultimate';

/**
 * Response type for screenshot endpoints
 */
export type ResponseType = 'BINARY' | 'JSON';

/**
 * Job status values
 */
export type JobStatus = 'QUEUED' | 'PROCESSING' | 'COMPLETED' | 'FAILED' | 'CANCELLED';

/**
 * Layout types for compose endpoint
 */
export type LayoutType = 'GRID' | 'HORIZONTAL' | 'VERTICAL' | 'MASONRY' | 'MONDRIAN' | 'PARTITIONING' | 'AUTO';

/**
 * Alignment options for compose layouts
 */
export type Alignment = 'top' | 'center' | 'bottom';

/**
 * Viewport configuration for screenshots
 */
export interface ViewportConfig {
  /** Width in pixels (100-4096) */
  width?: number;
  /** Height in pixels (100-4096) */
  height?: number;
  /** Device scale factor (1-3) */
  deviceScaleFactor?: number;
}

/**
 * Label configuration for composed screenshots
 */
export interface LabelConfig {
  show?: boolean;
  position?: 'top' | 'bottom';
  fontSize?: number;
  fontColor?: string;
  backgroundColor?: string;
  padding?: number;
}

/**
 * Border configuration for composed screenshots
 */
export interface BorderConfig {
  width?: number;
  color?: string;
  radius?: number;
}

/**
 * Shadow configuration for composed screenshots
 */
export interface ShadowConfig {
  enabled?: boolean;
  color?: string;
  blur?: number;
  offsetX?: number;
  offsetY?: number;
}
