
# BulkResponse


## Properties

Name | Type
------------ | -------------
`completedAt` | Date
`completedJobs` | number
`createdAt` | Date
`failedJobs` | number
`id` | string
`jobs` | [Array&lt;BulkJobInfo&gt;](BulkJobInfo.md)
`progress` | number
`status` | string
`totalJobs` | number

## Example

```typescript
import type { BulkResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "completedAt": null,
  "completedJobs": null,
  "createdAt": null,
  "failedJobs": null,
  "id": null,
  "jobs": null,
  "progress": null,
  "status": null,
  "totalJobs": null,
} satisfies BulkResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


