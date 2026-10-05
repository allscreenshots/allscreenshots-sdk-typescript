
# VariantConfig


## Properties

Name | Type
------------ | -------------
`customCss` | string
`darkMode` | boolean
`delay` | number
`device` | string
`fullPage` | boolean
`id` | string
`label` | string
`viewport` | [ViewportConfig](ViewportConfig.md)

## Example

```typescript
import type { VariantConfig } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "customCss": null,
  "darkMode": null,
  "delay": null,
  "device": null,
  "fullPage": null,
  "id": null,
  "label": null,
  "viewport": null,
} satisfies VariantConfig

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as VariantConfig
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


