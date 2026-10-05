
# PeriodUsageResponse


## Properties

Name | Type
------------ | -------------
`bandwidthBytes` | number
`bandwidthFormatted` | string
`periodEnd` | string
`periodStart` | string
`screenshotsCount` | number

## Example

```typescript
import type { PeriodUsageResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "bandwidthBytes": null,
  "bandwidthFormatted": null,
  "periodEnd": null,
  "periodStart": null,
  "screenshotsCount": null,
} satisfies PeriodUsageResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PeriodUsageResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


