
# LayoutPreviewResponse


## Properties

Name | Type
------------ | -------------
`canvasHeight` | number
`canvasWidth` | number
`layout` | string
`metadata` | { [key: string]: object; }
`placements` | [Array&lt;PlacementPreview&gt;](PlacementPreview.md)
`resolvedLayout` | string

## Example

```typescript
import type { LayoutPreviewResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "canvasHeight": null,
  "canvasWidth": null,
  "layout": null,
  "metadata": null,
  "placements": null,
  "resolvedLayout": null,
} satisfies LayoutPreviewResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LayoutPreviewResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


