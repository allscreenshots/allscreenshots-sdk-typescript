
# CrawlPageResponse


## Properties

Name | Type
------------ | -------------
`canonicalUrl` | string
`completedAt` | Date
`contentType` | string
`createdAt` | Date
`depth` | number
`description` | string
`errorCode` | string
`errorMessage` | string
`httpStatus` | number
`id` | string
`language` | string
`outputs` | [Array&lt;OutputSpec&gt;](OutputSpec.md)
`parentId` | string
`renderTimeMs` | number
`status` | string
`title` | string
`url` | string

## Example

```typescript
import type { CrawlPageResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "canonicalUrl": null,
  "completedAt": null,
  "contentType": null,
  "createdAt": null,
  "depth": null,
  "description": null,
  "errorCode": null,
  "errorMessage": null,
  "httpStatus": null,
  "id": null,
  "language": null,
  "outputs": null,
  "parentId": null,
  "renderTimeMs": null,
  "status": null,
  "title": null,
  "url": null,
} satisfies CrawlPageResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CrawlPageResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


