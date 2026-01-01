# Allscreenshots SDK integration prompt

Use this prompt to help LLMs understand and use the Allscreenshots TypeScript SDK.

---

## SDK overview

The `@allscreenshots/sdk` package provides a TypeScript client for the Allscreenshots API, which captures website screenshots programmatically.

## Installation

```bash
pnpm add @allscreenshots/sdk
```

## Authentication

Set the `ALLSCREENSHOTS_API_KEY` environment variable or pass it directly:

```typescript
import { AllscreenshotsClient } from '@allscreenshots/sdk';

// From environment variable
const client = new AllscreenshotsClient();

// Or explicitly
const client = new AllscreenshotsClient({ apiKey: 'your-api-key' });
```

## Common operations

### Take a screenshot

```typescript
import { AllscreenshotsClient } from '@allscreenshots/sdk';
import fs from 'fs';

const client = new AllscreenshotsClient();

const image = await client.screenshot({
  url: 'https://example.com',
  device: 'Desktop HD',  // or 'iPhone 14', 'iPad'
  fullPage: true,        // capture entire page
  format: 'png'          // 'png', 'jpeg', 'webp', 'pdf'
});

fs.writeFileSync('screenshot.png', image);
```

### Async screenshot with polling

```typescript
const job = await client.screenshotAsync({ url: 'https://example.com' });

let status = await client.getJob(job.id);
while (status.status === 'PROCESSING' || status.status === 'QUEUED') {
  await new Promise(r => setTimeout(r, 1000));
  status = await client.getJob(job.id);
}

if (status.status === 'COMPLETED') {
  const image = await client.getJobResult(job.id);
}
```

### Bulk screenshots

```typescript
const bulk = await client.createBulkJob({
  urls: [
    { url: 'https://site1.com' },
    { url: 'https://site2.com' }
  ],
  defaults: { device: 'Desktop HD' }
});
```

### Compose multiple screenshots

```typescript
const composed = await client.compose({
  captures: [
    { url: 'https://example.com', device: 'Desktop HD', label: 'Desktop' },
    { url: 'https://example.com', device: 'iPhone 14', label: 'Mobile' }
  ],
  output: { layout: 'HORIZONTAL', spacing: 20 }
});
```

### Create scheduled screenshot

```typescript
const schedule = await client.createSchedule({
  name: 'Daily capture',
  url: 'https://example.com',
  schedule: '0 9 * * *',  // Cron: daily at 9 AM
  timezone: 'America/New_York'
});
```

### Check usage/quota

```typescript
const quota = await client.getQuotaStatus();
console.log(`Remaining: ${quota.screenshots.remaining}`);
```

## Error handling

```typescript
import { ValidationError, RateLimitError, AuthenticationError } from '@allscreenshots/sdk';

try {
  await client.screenshot({ url: 'invalid' });
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Invalid request:', error.validationErrors);
  } else if (error instanceof RateLimitError) {
    console.error(`Retry after ${error.retryAfter} seconds`);
  } else if (error instanceof AuthenticationError) {
    console.error('Check your API key');
  }
}
```

## Available screenshot options

| Option | Type | Description |
|--------|------|-------------|
| url | string | Target URL (required) |
| device | string | Device preset: 'Desktop HD', 'iPhone 14', 'iPad', etc. |
| viewport | object | Custom viewport: `{ width, height, deviceScaleFactor }` |
| format | string | 'png', 'jpeg', 'webp', 'pdf' |
| fullPage | boolean | Capture entire scrollable page |
| quality | number | 1-100 for jpeg/webp |
| delay | number | Wait ms before capture (0-30000) |
| waitFor | string | CSS selector to wait for |
| waitUntil | string | 'load', 'domcontentloaded', 'networkidle' |
| darkMode | boolean | Enable dark mode |
| blockAds | boolean | Block advertisements |
| blockCookieBanners | boolean | Block cookie consent banners |
| customCss | string | CSS to inject |
| hideSelectors | string[] | Elements to hide |
| selector | string | Capture only this element |

## Key methods

- `screenshot(request)` - Sync screenshot, returns Buffer
- `screenshotAsync(request)` - Async screenshot, returns job info
- `getJob(id)` - Get job status
- `getJobResult(id)` - Get job result image
- `createBulkJob(request)` - Create bulk screenshot job
- `compose(request)` - Compose multiple screenshots
- `createSchedule(request)` - Create scheduled screenshot
- `getUsage()` - Get usage statistics
- `getQuotaStatus()` - Get quota status
