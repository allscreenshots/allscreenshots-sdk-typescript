
# ScheduleScreenshotOptions


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
`scrollInterval` | number
`selector` | string
`stealthMode` | boolean
`timeout` | number
`viewport` | [ViewportConfig](ViewportConfig.md)
`waitFor` | string
`waitUntil` | string

## Example

```typescript
import type { ScheduleScreenshotOptions } from '@allscreenshots/sdk'

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
  "scrollInterval": null,
  "selector": null,
  "stealthMode": null,
  "timeout": null,
  "viewport": null,
  "waitFor": null,
  "waitUntil": null,
} satisfies ScheduleScreenshotOptions

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduleScreenshotOptions
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


