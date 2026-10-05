
# QuotaResponse


## Properties

Name | Type
------------ | -------------
`bandwidth` | [BandwidthQuotaResponse](BandwidthQuotaResponse.md)
`screenshots` | [QuotaDetailResponse](QuotaDetailResponse.md)

## Example

```typescript
import type { QuotaResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "bandwidth": null,
  "screenshots": null,
} satisfies QuotaResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QuotaResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


