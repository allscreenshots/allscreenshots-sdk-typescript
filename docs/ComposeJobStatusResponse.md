
# ComposeJobStatusResponse


## Properties

Name | Type
------------ | -------------
`completedAt` | Date
`completedCaptures` | number
`createdAt` | Date
`errorCode` | string
`errorMessage` | string
`jobId` | string
`progress` | number
`result` | [ComposeResponse](ComposeResponse.md)
`status` | string
`totalCaptures` | number

## Example

```typescript
import type { ComposeJobStatusResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "completedAt": null,
  "completedCaptures": null,
  "createdAt": null,
  "errorCode": null,
  "errorMessage": null,
  "jobId": null,
  "progress": null,
  "result": null,
  "status": null,
  "totalCaptures": null,
} satisfies ComposeJobStatusResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ComposeJobStatusResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


