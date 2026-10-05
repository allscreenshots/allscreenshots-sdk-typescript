
# BulkJobInfo


## Properties

Name | Type
------------ | -------------
`errorCode` | string
`errorMessage` | string
`id` | string
`resultUrl` | string
`status` | string
`url` | string

## Example

```typescript
import type { BulkJobInfo } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "errorCode": null,
  "errorMessage": null,
  "id": null,
  "resultUrl": null,
  "status": null,
  "url": null,
} satisfies BulkJobInfo

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkJobInfo
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


