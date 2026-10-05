
# ErrorDetail


## Properties

Name | Type
------------ | -------------
`code` | string
`details` | { [key: string]: object; }
`documentationUrl` | string
`message` | string

## Example

```typescript
import type { ErrorDetail } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "details": null,
  "documentationUrl": null,
  "message": null,
} satisfies ErrorDetail

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ErrorDetail
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


