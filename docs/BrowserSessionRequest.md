
# BrowserSessionRequest


## Properties

Name | Type
------------ | -------------
`cookies` | [Array&lt;BrowserCookieRequest&gt;](BrowserCookieRequest.md)
`headers` | [Array&lt;BrowserHeaderRequest&gt;](BrowserHeaderRequest.md)
`storage` | [Array&lt;BrowserStorageOriginRequest&gt;](BrowserStorageOriginRequest.md)

## Example

```typescript
import type { BrowserSessionRequest } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "cookies": null,
  "headers": null,
  "storage": null,
} satisfies BrowserSessionRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BrowserSessionRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


