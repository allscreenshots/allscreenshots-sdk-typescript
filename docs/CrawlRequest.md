
# CrawlRequest


## Properties

Name | Type
------------ | -------------
`blockAds` | boolean
`blockCookieBanners` | boolean
`blockPopups` | boolean
`crawlDelayMs` | number
`darkMode` | boolean
`depth` | number
`excludePatterns` | Array&lt;string&gt;
`format` | string
`fullPage` | boolean
`includePatterns` | Array&lt;string&gt;
`includeSubdomains` | boolean
`limit` | number
`outputs` | [Set&lt;OutputSpec&gt;](OutputSpec.md)
`quality` | number
`renderDelay` | number
`timeout` | number
`url` | string
`viewport` | [ViewportConfig](ViewportConfig.md)
`waitUntil` | string

## Example

```typescript
import type { CrawlRequest } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "blockAds": null,
  "blockCookieBanners": null,
  "blockPopups": null,
  "crawlDelayMs": null,
  "darkMode": null,
  "depth": null,
  "excludePatterns": null,
  "format": null,
  "fullPage": null,
  "includePatterns": null,
  "includeSubdomains": null,
  "limit": null,
  "outputs": null,
  "quality": null,
  "renderDelay": null,
  "timeout": null,
  "url": null,
  "viewport": null,
  "waitUntil": null,
} satisfies CrawlRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CrawlRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


