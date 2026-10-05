
# BulkJobSummary


## Properties

Name | Type
------------ | -------------
`completedAt` | Date
`completedJobs` | number
`createdAt` | Date
`failedJobs` | number
`id` | string
`progress` | number
`status` | string
`totalJobs` | number

## Example

```typescript
import type { BulkJobSummary } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "completedAt": null,
  "completedJobs": null,
  "createdAt": null,
  "failedJobs": null,
  "id": null,
  "progress": null,
  "status": null,
  "totalJobs": null,
} satisfies BulkJobSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkJobSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


