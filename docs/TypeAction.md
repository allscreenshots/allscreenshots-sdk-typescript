
# TypeAction


## Properties

Name | Type
------------ | -------------
`clear` | boolean
`optional` | boolean
`selector` | string
`text` | string
`timeout` | number
`type` | string

## Example

```typescript
import type { TypeAction } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "clear": null,
  "optional": null,
  "selector": null,
  "text": null,
  "timeout": null,
  "type": null,
} satisfies TypeAction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as TypeAction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


