
# BulkRequest


## Properties

Name | Type
------------ | -------------
`defaults` | [BulkDefaults](BulkDefaults.md)
`urls` | [Array&lt;BulkUrlRequest&gt;](BulkUrlRequest.md)
`webhookSecret` | string
`webhookUrl` | string

## Example

```typescript
import type { BulkRequest } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "defaults": null,
  "urls": null,
  "webhookSecret": null,
  "webhookUrl": null,
} satisfies BulkRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BulkRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


