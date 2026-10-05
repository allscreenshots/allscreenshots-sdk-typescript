
# ScreenshotRequest


## Properties

Name | Type
------------ | -------------
`actions` | [Array&lt;PageAction&gt;](PageAction.md)
`blockAds` | boolean
`blockCookieBanners` | boolean
`blockLevel` | string
`blockPopups` | boolean
`customCss` | string
`darkMode` | boolean
`delay` | number
`device` | string
`format` | string
`freezeFixed` | boolean
`fullPage` | boolean
`fullPageMode` | string
`hideSelectors` | Array&lt;string&gt;
`maxHeight` | number
`maxSections` | number
`outputs` | [Array&lt;OutputSpec&gt;](OutputSpec.md)
`quality` | number
`responseType` | string
`scrollInterval` | number
`selector` | string
`session` | [BrowserSessionRequest](BrowserSessionRequest.md)
`stealthMode` | boolean
`timeout` | number
`url` | string
`viewport` | [ViewportConfig](ViewportConfig.md)
`waitFor` | string
`waitUntil` | string
`webhookSecret` | string
`webhookUrl` | string

## Example

```typescript
import type { ScreenshotRequest } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "actions": null,
  "blockAds": null,
  "blockCookieBanners": null,
  "blockLevel": null,
  "blockPopups": null,
  "customCss": null,
  "darkMode": null,
  "delay": null,
  "device": null,
  "format": null,
  "freezeFixed": null,
  "fullPage": null,
  "fullPageMode": null,
  "hideSelectors": null,
  "maxHeight": null,
  "maxSections": null,
  "outputs": null,
  "quality": null,
  "responseType": null,
  "scrollInterval": null,
  "selector": null,
  "session": null,
  "stealthMode": null,
  "timeout": null,
  "url": null,
  "viewport": null,
  "waitFor": null,
  "waitUntil": null,
  "webhookSecret": null,
  "webhookUrl": null,
} satisfies ScreenshotRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScreenshotRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


