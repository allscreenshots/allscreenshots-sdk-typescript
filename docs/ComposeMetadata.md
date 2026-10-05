
# ComposeMetadata


## Properties

Name | Type
------------ | -------------
`canvasHeight` | number
`canvasWidth` | number
`captures` | [Array&lt;CaptureInfo&gt;](CaptureInfo.md)
`layoutType` | string
`totalCaptures` | number

## Example

```typescript
import type { ComposeMetadata } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "canvasHeight": null,
  "canvasWidth": null,
  "captures": null,
  "layoutType": null,
  "totalCaptures": null,
} satisfies ComposeMetadata

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ComposeMetadata
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


