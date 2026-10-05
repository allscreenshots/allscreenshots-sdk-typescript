
# CreateScheduleRequest


## Properties

Name | Type
------------ | -------------
`alertOnFailure` | boolean
`autoPauseAfterFailures` | number
`destinations` | [Array&lt;DeliveryDestination&gt;](DeliveryDestination.md)
`diffThreshold` | number
`endsAt` | Date
`name` | string
`onlyOnChange` | boolean
`options` | [ScheduleScreenshotOptions](ScheduleScreenshotOptions.md)
`retentionDays` | number
`schedule` | string
`startsAt` | Date
`timezone` | string
`url` | string
`webhookSecret` | string
`webhookUrl` | string

## Example

```typescript
import type { CreateScheduleRequest } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "alertOnFailure": null,
  "autoPauseAfterFailures": null,
  "destinations": null,
  "diffThreshold": null,
  "endsAt": null,
  "name": null,
  "onlyOnChange": null,
  "options": null,
  "retentionDays": null,
  "schedule": null,
  "startsAt": null,
  "timezone": null,
  "url": null,
  "webhookSecret": null,
  "webhookUrl": null,
} satisfies CreateScheduleRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreateScheduleRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


