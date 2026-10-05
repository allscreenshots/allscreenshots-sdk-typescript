
# PdfOutputSpec


## Properties

Name | Type
------------ | -------------
`format` | string
`id` | string
`landscape` | boolean
`printBackground` | boolean
`type` | string

## Example

```typescript
import type { PdfOutputSpec } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "format": null,
  "id": null,
  "landscape": null,
  "printBackground": null,
  "type": null,
} satisfies PdfOutputSpec

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PdfOutputSpec
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


