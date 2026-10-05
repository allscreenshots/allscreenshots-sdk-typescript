
# CrawlProgressResponse


## Properties

Name | Type
------------ | -------------
`charged` | number
`completed` | number
`discovered` | number
`failed` | number
`queued` | number
`skipped` | number

## Example

```typescript
import type { CrawlProgressResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "charged": null,
  "completed": null,
  "discovered": null,
  "failed": null,
  "queued": null,
  "skipped": null,
} satisfies CrawlProgressResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CrawlProgressResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


