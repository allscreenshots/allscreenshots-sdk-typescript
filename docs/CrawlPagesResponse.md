
# CrawlPagesResponse


## Properties

Name | Type
------------ | -------------
`page` | number
`pageSize` | number
`pages` | [Array&lt;CrawlPageResponse&gt;](CrawlPageResponse.md)
`total` | number
`totalPages` | number

## Example

```typescript
import type { CrawlPagesResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "page": null,
  "pageSize": null,
  "pages": null,
  "total": null,
  "totalPages": null,
} satisfies CrawlPagesResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CrawlPagesResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


