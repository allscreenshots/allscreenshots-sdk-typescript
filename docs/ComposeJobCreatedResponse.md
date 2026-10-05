
# ComposeJobCreatedResponse


## Properties

Name | Type
------------ | -------------
`createdAt` | Date
`jobId` | string
`status` | string
`statusUrl` | string

## Example

```typescript
import type { ComposeJobCreatedResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "createdAt": null,
  "jobId": null,
  "status": null,
  "statusUrl": null,
} satisfies ComposeJobCreatedResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ComposeJobCreatedResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


