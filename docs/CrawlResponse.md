
# CrawlResponse


## Properties

Name | Type
------------ | -------------
`completedAt` | Date
`createdAt` | Date
`depth` | number
`errorCode` | string
`errorMessage` | string
`id` | string
`limit` | number
`outputs` | [Set&lt;OutputSpec&gt;](OutputSpec.md)
`progress` | [CrawlProgressResponse](CrawlProgressResponse.md)
`startedAt` | Date
`status` | string
`url` | string

## Example

```typescript
import type { CrawlResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "completedAt": null,
  "createdAt": null,
  "depth": null,
  "errorCode": null,
  "errorMessage": null,
  "id": null,
  "limit": null,
  "outputs": null,
  "progress": null,
  "startedAt": null,
  "status": null,
  "url": null,
} satisfies CrawlResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CrawlResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


