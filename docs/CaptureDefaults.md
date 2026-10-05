
# CaptureDefaults


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
`fullPage` | boolean
`hideSelectors` | Array&lt;string&gt;
`quality` | number
`stealthMode` | boolean
`timeout` | number
`viewport` | [ViewportConfig](ViewportConfig.md)
`waitFor` | string
`waitUntil` | string

## Example

```typescript
import type { CaptureDefaults } from '@allscreenshots/sdk'

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
  "fullPage": null,
  "hideSelectors": null,
  "quality": null,
  "stealthMode": null,
  "timeout": null,
  "viewport": null,
  "waitFor": null,
  "waitUntil": null,
} satisfies CaptureDefaults

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CaptureDefaults
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


