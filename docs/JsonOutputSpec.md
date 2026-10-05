
# JsonOutputSpec


## Properties

Name | Type
------------ | -------------
`id` | string
`schema` | [{ [key: string]: JsonFieldSpec; }](JsonFieldSpec.md)
`type` | string

## Example

```typescript
import type { JsonOutputSpec } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "schema": null,
  "type": null,
} satisfies JsonOutputSpec

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JsonOutputSpec
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


