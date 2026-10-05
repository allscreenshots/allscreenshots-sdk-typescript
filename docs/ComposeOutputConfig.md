
# ComposeOutputConfig


## Properties

Name | Type
------------ | -------------
`alignment` | string
`background` | string
`border` | [BorderConfig](BorderConfig.md)
`columns` | number
`format` | string
`labels` | [LabelConfig](LabelConfig.md)
`layout` | string
`maxHeight` | number
`maxWidth` | number
`padding` | number
`quality` | number
`shadow` | [ShadowConfig](ShadowConfig.md)
`spacing` | number
`thumbnailWidth` | number

## Example

```typescript
import type { ComposeOutputConfig } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "alignment": null,
  "background": null,
  "border": null,
  "columns": null,
  "format": null,
  "labels": null,
  "layout": null,
  "maxHeight": null,
  "maxWidth": null,
  "padding": null,
  "quality": null,
  "shadow": null,
  "spacing": null,
  "thumbnailWidth": null,
} satisfies ComposeOutputConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ComposeOutputConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


