
# ScheduleExecutionResponse


## Properties

Name | Type
------------ | -------------
`changed` | boolean
`deliveries` | Array&lt;{ [key: string]: object; }&gt;
`diffScore` | number
`errorCode` | string
`errorMessage` | string
`executedAt` | Date
`expiresAt` | Date
`fileSize` | number
`id` | string
`outputs` | { [key: string]: object; }
`renderTimeMs` | number
`resultUrl` | string
`runId` | string
`status` | string
`storageUrl` | string
`url` | string

## Example

```typescript
import type { ScheduleExecutionResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "changed": null,
  "deliveries": null,
  "diffScore": null,
  "errorCode": null,
  "errorMessage": null,
  "executedAt": null,
  "expiresAt": null,
  "fileSize": null,
  "id": null,
  "outputs": null,
  "renderTimeMs": null,
  "resultUrl": null,
  "runId": null,
  "status": null,
  "storageUrl": null,
  "url": null,
} satisfies ScheduleExecutionResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduleExecutionResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


