
# DeliveryDestination


## Properties

Name | Type
------------ | -------------
`id` | string
`onlyOnChange` | boolean
`subject` | string
`to` | Array&lt;string&gt;
`type` | string
`secret` | string
`url` | string

## Example

```typescript
import type { DeliveryDestination } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "onlyOnChange": null,
  "subject": null,
  "to": null,
  "type": null,
  "secret": null,
  "url": null,
} satisfies DeliveryDestination

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DeliveryDestination
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


