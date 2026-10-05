
# ApiKeyUsageDetail


## Properties

Name | Type
------------ | -------------
`apiKeyId` | string
`currentPeriod` | [CaptureUsageCounts](CaptureUsageCounts.md)
`keyPrefix` | string
`name` | string
`totals` | [CaptureUsageCounts](CaptureUsageCounts.md)

## Example

```typescript
import type { ApiKeyUsageDetail } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "apiKeyId": null,
  "currentPeriod": null,
  "keyPrefix": null,
  "name": null,
  "totals": null,
} satisfies ApiKeyUsageDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiKeyUsageDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


