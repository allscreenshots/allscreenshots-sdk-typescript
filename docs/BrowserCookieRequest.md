
# BrowserCookieRequest


## Properties

Name | Type
------------ | -------------
`domain` | string
`expires` | number
`httpOnly` | boolean
`name` | string
`path` | string
`sameSite` | string
`secure` | boolean
`value` | string

## Example

```typescript
import type { BrowserCookieRequest } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "domain": null,
  "expires": null,
  "httpOnly": null,
  "name": null,
  "path": null,
  "sameSite": null,
  "secure": null,
  "value": null,
} satisfies BrowserCookieRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BrowserCookieRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


