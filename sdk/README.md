# @allscreenshots/sdk

Official TypeScript SDK for the [Allscreenshots API](https://allscreenshots.com) - capture screenshots programmatically with support for various devices, viewports, and output formats.

## Installation

```bash
# Using pnpm (recommended)
pnpm add @allscreenshots/sdk

# Using npm
npm install @allscreenshots/sdk

# Using yarn
yarn add @allscreenshots/sdk
```

## Quick start

```typescript
import { AllscreenshotsClient } from '@allscreenshots/sdk';
import fs from 'fs';

// Create client (reads API key from ALLSCREENSHOTS_API_KEY env var)
const client = new AllscreenshotsClient();

// Take a screenshot
const imageBuffer = await client.screenshot({
  url: 'https://github.com',
  device: 'Desktop HD',
  fullPage: true
});

// Save to file
fs.writeFileSync('screenshot.png', imageBuffer);
```

## Configuration

### Using the builder pattern

```typescript
import { AllscreenshotsClient } from '@allscreenshots/sdk';

const client = AllscreenshotsClient.builder()
  .withApiKey('your-api-key')
  .withBaseUrl('https://api.allscreenshots.com')  // Optional
  .withTimeout(30000)  // 30 seconds
  .withAutoRetry(true)  // Enable automatic retries
  .withRetry({
    maxRetries: 5,
    initialDelayMs: 1000,
    maxDelayMs: 30000,
    backoffMultiplier: 2
  })
  .build();
```

### Using direct configuration

```typescript
const client = new AllscreenshotsClient({
  apiKey: 'your-api-key',
  baseUrl: 'https://api.allscreenshots.com',
  timeout: 30000,
  autoRetry: true,
  retry: {
    maxRetries: 3
  }
});
```

### Environment variable

Set the `ALLSCREENSHOTS_API_KEY` environment variable to automatically configure authentication:

```bash
export ALLSCREENSHOTS_API_KEY=your-api-key
```

## API reference

### Screenshots

#### Take a screenshot (synchronous)

```typescript
const imageBuffer = await client.screenshot({
  url: 'https://github.com',
  device: 'Desktop HD',      // or 'iPhone 14', 'iPad', etc.
  format: 'png',             // 'png', 'jpeg', 'webp', 'pdf'
  fullPage: true,            // Capture entire scrollable page
  quality: 90,               // 1-100 for jpeg/webp
  delay: 1000,               // Wait 1 second before capture
  waitFor: '.main-content',  // Wait for CSS selector
  waitUntil: 'networkidle',  // 'load', 'domcontentloaded', 'networkidle'
  darkMode: true,            // Enable dark mode
  blockAds: true,            // Block advertisements
  blockCookieBanners: true,  // Block cookie consent banners
  customCss: 'body { background: white; }',
  hideSelectors: ['.popup', '.banner'],
  selector: '#main',         // Capture only this element
});
```

#### Take a screenshot (asynchronous)

```typescript
// Create async job
const job = await client.screenshotAsync({
  url: 'https://github.com',
  device: 'Desktop HD'
});

console.log(`Job ID: ${job.id}`);

// Poll for completion
let status = await client.getJob(job.id);
while (status.status === 'PROCESSING' || status.status === 'QUEUED') {
  await new Promise(r => setTimeout(r, 1000));
  status = await client.getJob(job.id);
}

// Download result
if (status.status === 'COMPLETED') {
  const image = await client.getJobResult(job.id);
  fs.writeFileSync('screenshot.png', image);
}
```

#### List and manage jobs

```typescript
// List all jobs
const jobs = await client.listJobs();

// Get specific job
const job = await client.getJob('job-id');

// Cancel a job
const cancelled = await client.cancelJob('job-id');
```

### Bulk screenshots

```typescript
// Create bulk job
const bulk = await client.createBulkJob({
  urls: [
    { url: 'https://github.com' },
    { url: 'https://google.com', options: { device: 'iPhone 14' } }
  ],
  defaults: {
    device: 'Desktop HD',
    format: 'png'
  }
});

// List bulk jobs
const bulkJobs = await client.listBulkJobs();

// Get bulk job status
const status = await client.getBulkJob(bulk.id);

// Cancel bulk job
const cancelled = await client.cancelBulkJob(bulk.id);
```

### Compose (multi-screenshot layouts)

```typescript
// Compose multiple URLs into one image
const result = await client.compose({
  captures: [
    { url: 'https://github.com', device: 'Desktop HD', label: 'Desktop' },
    { url: 'https://github.com', device: 'iPhone 14', label: 'Mobile' }
  ],
  output: {
    layout: 'HORIZONTAL',  // 'GRID', 'VERTICAL', 'MASONRY', etc.
    spacing: 20,
    padding: 10,
    background: '#ffffff'
  }
});

// Preview layout placement
const preview = await client.previewLayout({
  layout: 'GRID',
  imageCount: 4,
  canvasWidth: 1200,
  canvasHeight: 800
});

// List compose jobs
const composeJobs = await client.listComposeJobs();

// Get compose job status
const jobStatus = await client.getComposeJob('job-id');
```

### Schedules

```typescript
// Create a schedule
const schedule = await client.createSchedule({
  name: 'Daily homepage capture',
  url: 'https://example.com',
  schedule: '0 9 * * *',  // Cron expression: daily at 9 AM
  timezone: 'America/New_York',
  options: {
    device: 'Desktop HD',
    fullPage: true
  },
  retentionDays: 30
});

// List schedules
const schedules = await client.listSchedules();

// Get schedule details
const details = await client.getSchedule(schedule.id);

// Update schedule
const updated = await client.updateSchedule(schedule.id, {
  schedule: '0 10 * * *'  // Change to 10 AM
});

// Pause/resume schedule
await client.pauseSchedule(schedule.id);
await client.resumeSchedule(schedule.id);

// Manually trigger
await client.triggerSchedule(schedule.id);

// Get execution history
const history = await client.getScheduleHistory(schedule.id, 10);

// Delete schedule
await client.deleteSchedule(schedule.id);
```

### Usage and quota

```typescript
// Get usage statistics
const usage = await client.getUsage();
console.log(`Current tier: ${usage.tier}`);
console.log(`Screenshots this period: ${usage.currentPeriod.screenshotsCount}`);

// Get quota status
const quota = await client.getQuotaStatus();
console.log(`Remaining: ${quota.screenshots.remaining}/${quota.screenshots.limit}`);
console.log(`Period ends: ${quota.periodEnds}`);
```

## Error handling

The SDK provides typed errors for different failure scenarios:

```typescript
import {
  AllscreenshotsClient,
  AuthenticationError,
  ValidationError,
  NotFoundError,
  RateLimitError,
  QuotaExceededError,
  ServerError,
  NetworkError,
  TimeoutError
} from '@allscreenshots/sdk';

try {
  const image = await client.screenshot({ url: 'https://example.com' });
} catch (error) {
  if (error instanceof AuthenticationError) {
    console.error('Invalid API key');
  } else if (error instanceof ValidationError) {
    console.error('Invalid request:', error.validationErrors);
  } else if (error instanceof RateLimitError) {
    console.error(`Rate limited. Retry after ${error.retryAfter} seconds`);
  } else if (error instanceof QuotaExceededError) {
    console.error('Quota exceeded. Upgrade your plan.');
  } else if (error instanceof NotFoundError) {
    console.error('Resource not found');
  } else if (error instanceof ServerError) {
    console.error('Server error. Please retry.');
  } else if (error instanceof NetworkError) {
    console.error('Network error. Check your connection.');
  } else if (error instanceof TimeoutError) {
    console.error('Request timed out');
  }
}
```

## Retry behavior

The SDK automatically retries failed requests for transient errors (rate limits, server errors, network issues). Retry behavior can be configured:

```typescript
const client = AllscreenshotsClient.builder()
  .withApiKey('your-key')
  .withAutoRetry(true)
  .withRetry({
    maxRetries: 5,           // Maximum retry attempts
    initialDelayMs: 1000,    // Initial delay between retries
    maxDelayMs: 30000,       // Maximum delay
    backoffMultiplier: 2,    // Exponential backoff multiplier
    jitterFactor: 0.1        // Random jitter to prevent thundering herd
  })
  .build();

// Disable retries
const clientNoRetry = AllscreenshotsClient.builder()
  .withApiKey('your-key')
  .withAutoRetry(false)
  .build();
```

## Device presets

Common device presets include:

| Device | Resolution |
|--------|------------|
| Desktop HD | 1920x1080 |
| Desktop | 1440x900 |
| Laptop | 1366x768 |
| iPhone 14 | 390x844 |
| iPhone 14 Pro Max | 430x932 |
| iPad | 820x1180 |
| iPad Pro | 1024x1366 |

You can also specify custom viewports:

```typescript
await client.screenshot({
  url: 'https://example.com',
  viewport: {
    width: 1920,
    height: 1080,
    deviceScaleFactor: 2  // Retina display
  }
});
```

## TypeScript support

This SDK is written in TypeScript and provides full type definitions. All request and response types are exported:

```typescript
import type {
  ScreenshotRequest,
  JobResponse,
  BulkRequest,
  BulkResponse,
  ComposeRequest,
  ComposeResponse,
  CreateScheduleRequest,
  ScheduleResponse,
  UsageResponse,
  QuotaStatusResponse
} from '@allscreenshots/sdk';
```

## Requirements

- Node.js 18.0.0 or higher
- TypeScript 5.0+ (for TypeScript users)

## License

Apache License 2.0 - see [LICENSE](LICENSE) for details.
