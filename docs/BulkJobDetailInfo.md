
# BulkJobDetailInfo


## Properties

Name | Type
------------ | -------------
`completedAt` | Date
`createdAt` | Date
`errorCode` | string
`errorMessage` | string
`fileSize` | number
`format` | string
`height` | number
`id` | string
`renderTimeMs` | number
`resultUrl` | string
`status` | string
`storageUrl` | string
`url` | string
`width` | number

## Example

```typescript
import type { BulkJobDetailInfo } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "completedAt": null,
  "createdAt": null,
  "errorCode": null,
  "errorMessage": null,
  "fileSize": null,
  "format": null,
  "height": null,
  "id": null,
  "renderTimeMs": null,
  "resultUrl": null,
  "status": null,
  "storageUrl": null,
  "url": null,
  "width": null,
} satisfies BulkJobDetailInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkJobDetailInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


