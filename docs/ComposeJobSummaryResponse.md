
# ComposeJobSummaryResponse


## Properties

Name | Type
------------ | -------------
`completedAt` | Date
`completedCaptures` | number
`createdAt` | Date
`failedCaptures` | number
`jobId` | string
`layoutType` | string
`progress` | number
`status` | string
`totalCaptures` | number

## Example

```typescript
import type { ComposeJobSummaryResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "completedAt": null,
  "completedCaptures": null,
  "createdAt": null,
  "failedCaptures": null,
  "jobId": null,
  "layoutType": null,
  "progress": null,
  "status": null,
  "totalCaptures": null,
} satisfies ComposeJobSummaryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ComposeJobSummaryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


