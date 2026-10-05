
# MultiOutputResponse


## Properties

Name | Type
------------ | -------------
`outputs` | { [key: string]: object; }
`renderTimeMs` | number
`url` | string

## Example

```typescript
import type { MultiOutputResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "outputs": null,
  "renderTimeMs": null,
  "url": null,
} satisfies MultiOutputResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as MultiOutputResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


