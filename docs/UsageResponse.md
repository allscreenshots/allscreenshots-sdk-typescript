
# UsageResponse


## Properties

Name | Type
------------ | -------------
`credits` | [CreditBalanceResponse](CreditBalanceResponse.md)
`currentPeriod` | [PeriodUsageResponse](PeriodUsageResponse.md)
`history` | [Array&lt;PeriodUsageResponse&gt;](PeriodUsageResponse.md)
`organization` | [UsageOrganizationResponse](UsageOrganizationResponse.md)
`quota` | [QuotaResponse](QuotaResponse.md)
`tier` | string
`totals` | [TotalsResponse](TotalsResponse.md)

## Example

```typescript
import type { UsageResponse } from '@allscreenshots/sdk'

// TODO: Update the object below with actual values
const example = {
  "credits": null,
  "currentPeriod": null,
  "history": null,
  "organization": null,
  "quota": null,
  "tier": null,
  "totals": null,
} satisfies UsageResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


