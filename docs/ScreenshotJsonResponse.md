
# ScreenshotJsonResponse


## Properties

Name | Type
------------ | -------------
`cached` | boolean
`contentType` | string
`data` | string
`encoding` | string
`expiresAt` | Date
`format` | string
`height` | number
`renderTimeMs` | number
`resultUrl` | string
`size` | number
`storageUrl` | string
`url` | string
`width` | number

## Example

```typescript
import type { ScreenshotJsonResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "cached": null,
  "contentType": null,
  "data": null,
  "encoding": null,
  "expiresAt": null,
  "format": null,
  "height": null,
  "renderTimeMs": null,
  "resultUrl": null,
  "size": null,
  "storageUrl": null,
  "url": null,
  "width": null,
} satisfies ScreenshotJsonResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScreenshotJsonResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


