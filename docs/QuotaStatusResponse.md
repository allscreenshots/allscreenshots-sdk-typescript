
# QuotaStatusResponse


## Properties

Name | Type
------------ | -------------
`bandwidth` | [BandwidthQuotaResponse](BandwidthQuotaResponse.md)
`periodEnds` | string
`screenshots` | [QuotaDetailResponse](QuotaDetailResponse.md)
`tier` | string

## Example

```typescript
import type { QuotaStatusResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "bandwidth": null,
  "periodEnds": null,
  "screenshots": null,
  "tier": null,
} satisfies QuotaStatusResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QuotaStatusResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


