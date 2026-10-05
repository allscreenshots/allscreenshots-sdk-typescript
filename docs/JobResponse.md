
# JobResponse


## Properties

Name | Type
------------ | -------------
`completedAt` | Date
`createdAt` | Date
`errorCode` | string
`errorMessage` | string
`expiresAt` | Date
`id` | string
`metadata` | { [key: string]: object; }
`outputs` | [{ [key: string]: OutputInfo; }](OutputInfo.md)
`resultUrl` | string
`startedAt` | Date
`status` | string
`storageUrl` | string
`url` | string

## Example

```typescript
import type { JobResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "completedAt": null,
  "createdAt": null,
  "errorCode": null,
  "errorMessage": null,
  "expiresAt": null,
  "id": null,
  "metadata": null,
  "outputs": null,
  "resultUrl": null,
  "startedAt": null,
  "status": null,
  "storageUrl": null,
  "url": null,
} satisfies JobResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as JobResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


