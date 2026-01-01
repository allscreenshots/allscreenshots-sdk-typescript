/**
 * Usage and quota response models
 */

/**
 * Quota detail for a specific resource
 */
export interface QuotaDetailResponse {
  /** Maximum allowed */
  limit: number;
  /** Amount used */
  used: number;
  /** Amount remaining */
  remaining: number;
  /** Percentage used (0-100) */
  percentUsed: number;
}

/**
 * Bandwidth quota details
 */
export interface BandwidthQuotaResponse {
  /** Limit in bytes */
  limitBytes: number;
  /** Human-readable limit */
  limitFormatted: string;
  /** Used in bytes */
  usedBytes: number;
  /** Human-readable used */
  usedFormatted: string;
  /** Remaining in bytes */
  remainingBytes: number;
  /** Human-readable remaining */
  remainingFormatted: string;
  /** Percentage used (0-100) */
  percentUsed: number;
}

/**
 * Quota information
 */
export interface QuotaResponse {
  screenshots: QuotaDetailResponse;
  bandwidth?: BandwidthQuotaResponse;
}

/**
 * Usage for a specific period
 */
export interface PeriodUsageResponse {
  periodStart: string;
  periodEnd: string;
  screenshotsCount: number;
  bandwidthBytes: number;
  bandwidthFormatted: string;
}

/**
 * Total usage statistics
 */
export interface TotalsResponse {
  screenshotsCount: number;
  bandwidthBytes: number;
  bandwidthFormatted: string;
}

/**
 * Full usage response
 */
export interface UsageResponse {
  /** Current tier */
  tier: string;
  /** Current period usage */
  currentPeriod: PeriodUsageResponse;
  /** Quota information */
  quota: QuotaResponse;
  /** Historical usage */
  history: PeriodUsageResponse[];
  /** All-time totals */
  totals: TotalsResponse;
}

/**
 * Quota status response
 */
export interface QuotaStatusResponse {
  /** Current tier */
  tier: string;
  /** Screenshot quota details */
  screenshots: QuotaDetailResponse;
  /** Bandwidth quota details */
  bandwidth: BandwidthQuotaResponse;
  /** When current period ends */
  periodEnds: string;
}
