
# ComposeRequest


## Properties

Name | Type
------------ | -------------
`async` | boolean
`captures` | [Array&lt;CaptureItem&gt;](CaptureItem.md)
`capturesMode` | boolean
`defaults` | [CaptureDefaults](CaptureDefaults.md)
`output` | [ComposeOutputConfig](ComposeOutputConfig.md)
`url` | string
`variants` | [Array&lt;VariantConfig&gt;](VariantConfig.md)
`variantsMode` | boolean
`webhookSecret` | string
`webhookUrl` | string

## Example

```typescript
import type { ComposeRequest } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "async": null,
  "captures": null,
  "capturesMode": null,
  "defaults": null,
  "output": null,
  "url": null,
  "variants": null,
  "variantsMode": null,
  "webhookSecret": null,
  "webhookUrl": null,
} satisfies ComposeRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ComposeRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


