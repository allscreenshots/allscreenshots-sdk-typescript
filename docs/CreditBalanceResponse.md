
# CreditBalanceResponse


## Properties

Name | Type
------------ | -------------
`allowanceType` | string
`balance` | number
`resetsAt` | string

## Example

```typescript
import type { CreditBalanceResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "allowanceType": null,
  "balance": null,
  "resetsAt": null,
} satisfies CreditBalanceResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreditBalanceResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


