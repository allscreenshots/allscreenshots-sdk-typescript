
# ComposeResponse


## Properties

Name | Type
------------ | -------------
`expiresAt` | Date
`fileSize` | number
`format` | string
`height` | number
`layout` | string
`metadata` | [ComposeMetadata](ComposeMetadata.md)
`renderTimeMs` | number
`storageUrl` | string
`url` | string
`width` | number

## Example

```typescript
import type { ComposeResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "expiresAt": null,
  "fileSize": null,
  "format": null,
  "height": null,
  "layout": null,
  "metadata": null,
  "renderTimeMs": null,
  "storageUrl": null,
  "url": null,
  "width": null,
} satisfies ComposeResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ComposeResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


