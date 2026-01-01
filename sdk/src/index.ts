/**
 * Allscreenshots SDK for TypeScript
 *
 * Official TypeScript SDK for the Allscreenshots API.
 * Capture screenshots programmatically with support for various devices,
 * viewports, and output formats.
 *
 * @packageDocumentation
 *
 * @example
 * ```typescript
 * import { AllscreenshotsClient } from '@allscreenshots/sdk';
 *
 * // Create client (reads API key from ALLSCREENSHOTS_API_KEY env var)
 * const client = new AllscreenshotsClient();
 *
 * // Or with explicit configuration
 * const client = AllscreenshotsClient.builder()
 *   .withApiKey('your-api-key')
 *   .withTimeout(30000)
 *   .build();
 *
 * // Take a screenshot
 * const imageBuffer = await client.screenshot({
 *   url: 'https://github.com',
 *   device: 'Desktop HD',
 *   fullPage: true
 * });
 *
 * // Save to file
 * import fs from 'fs';
 * fs.writeFileSync('screenshot.png', imageBuffer);
 * ```
 */

// Client
export { AllscreenshotsClient, AllscreenshotsClientBuilder, type AllscreenshotsConfig } from './client.js';

// Models
export * from './models/index.js';

// Errors
export {
  AllscreenshotsError,
  AuthenticationError,
  ValidationError,
  NotFoundError,
  RateLimitError,
  QuotaExceededError,
  ServerError,
  NetworkError,
  TimeoutError,
} from './errors/index.js';

// Utils
export { type RetryConfig, DEFAULT_RETRY_CONFIG } from './utils/retry.js';
