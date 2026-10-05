
# OutputSpec


## Properties

Name | Type
------------ | -------------
`format` | string
`fullPage` | boolean
`id` | string
`quality` | number
`selector` | string
`type` | string
`landscape` | boolean
`printBackground` | boolean
`clean` | boolean
`mainContentOnly` | boolean
`schema` | [{ [key: string]: JsonFieldSpec; }](JsonFieldSpec.md)

## Example

```typescript
import type { OutputSpec } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "format": null,
  "fullPage": null,
  "id": null,
  "quality": null,
  "selector": null,
  "type": null,
  "landscape": null,
  "printBackground": null,
  "clean": null,
  "mainContentOnly": null,
  "schema": null,
} satisfies OutputSpec

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OutputSpec
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


