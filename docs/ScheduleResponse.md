
# ScheduleResponse


## Properties

Name | Type
------------ | -------------
`alertOnFailure` | boolean
`autoPauseAfterFailures` | number
`consecutiveFailures` | number
`createdAt` | Date
`destinations` | [Array&lt;DeliveryDestination&gt;](DeliveryDestination.md)
`diffThreshold` | number
`endsAt` | Date
`executionCount` | number
`failureCount` | number
`id` | string
`lastExecutedAt` | Date
`name` | string
`nextExecutionAt` | Date
`onlyOnChange` | boolean
`options` | { [key: string]: object; }
`retentionDays` | number
`schedule` | string
`scheduleDescription` | string
`startsAt` | Date
`status` | string
`successCount` | number
`timezone` | string
`updatedAt` | Date
`url` | string
`webhookUrl` | string

## Example

```typescript
import type { ScheduleResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "alertOnFailure": null,
  "autoPauseAfterFailures": null,
  "consecutiveFailures": null,
  "createdAt": null,
  "destinations": null,
  "diffThreshold": null,
  "endsAt": null,
  "executionCount": null,
  "failureCount": null,
  "id": null,
  "lastExecutedAt": null,
  "name": null,
  "nextExecutionAt": null,
  "onlyOnChange": null,
  "options": null,
  "retentionDays": null,
  "schedule": null,
  "scheduleDescription": null,
  "startsAt": null,
  "status": null,
  "successCount": null,
  "timezone": null,
  "updatedAt": null,
  "url": null,
  "webhookUrl": null,
} satisfies ScheduleResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ScheduleResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


