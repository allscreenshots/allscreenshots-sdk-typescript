
# BandwidthQuotaResponse


## Properties

Name | Type
------------ | -------------
`limitBytes` | number
`limitFormatted` | string
`percentUsed` | number
`remainingBytes` | number
`remainingFormatted` | string
`usedBytes` | number
`usedFormatted` | string

## Example

```typescript
import type { BandwidthQuotaResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "limitBytes": null,
  "limitFormatted": null,
  "percentUsed": null,
  "remainingBytes": null,
  "remainingFormatted": null,
  "usedBytes": null,
  "usedFormatted": null,
} satisfies BandwidthQuotaResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BandwidthQuotaResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


