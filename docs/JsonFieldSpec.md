
# JsonFieldSpec


## Properties

Name | Type
------------ | -------------
`attribute` | string
`multiple` | boolean
`selector` | string
`type` | string

## Example

```typescript
import type { JsonFieldSpec } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "attribute": null,
  "multiple": null,
  "selector": null,
  "type": null,
} satisfies JsonFieldSpec

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JsonFieldSpec
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


