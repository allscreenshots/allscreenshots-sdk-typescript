
# ScheduleHistoryResponse


## Properties

Name | Type
------------ | -------------
`executions` | [Array&lt;ScheduleExecutionResponse&gt;](ScheduleExecutionResponse.md)
`scheduleId` | string
`totalExecutions` | number

## Example

```typescript
import type { ScheduleHistoryResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "executions": null,
  "scheduleId": null,
  "totalExecutions": null,
} satisfies ScheduleHistoryResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduleHistoryResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


